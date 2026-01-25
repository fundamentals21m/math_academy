import { useState, useEffect } from 'react';

type Unit = 'btc' | 'mbtc' | 'sats' | 'msats';

interface UnitInfo {
  name: string;
  symbol: string;
  satsMultiplier: number;
  decimals: number;
}

const UNITS: Record<Unit, UnitInfo> = {
  btc: { name: 'Bitcoin', symbol: 'BTC', satsMultiplier: 100000000, decimals: 8 },
  mbtc: { name: 'Millibitcoin', symbol: 'mBTC', satsMultiplier: 100000, decimals: 5 },
  sats: { name: 'Satoshis', symbol: 'sats', satsMultiplier: 1, decimals: 0 },
  msats: { name: 'Millisatoshis', symbol: 'msats', satsMultiplier: 0.001, decimals: 3 },
};

export function SatoshiConverter() {
  const [inputValue, setInputValue] = useState('1');
  const [inputUnit, setInputUnit] = useState<Unit>('btc');
  const [btcPrice, setBtcPrice] = useState(100000); // Default price
  const [showFiat, setShowFiat] = useState(true);

  // Convert input to satoshis (base unit)
  const getSatsValue = (): number => {
    const num = parseFloat(inputValue) || 0;
    return num * UNITS[inputUnit].satsMultiplier;
  };

  // Convert satoshis to any unit
  const convertFromSats = (sats: number, unit: Unit): string => {
    const value = sats / UNITS[unit].satsMultiplier;
    if (unit === 'sats') {
      return Math.round(value).toLocaleString();
    }
    if (unit === 'msats') {
      return Math.round(value).toLocaleString();
    }
    return value.toFixed(UNITS[unit].decimals);
  };

  const satsValue = getSatsValue();
  const btcValue = satsValue / UNITS.btc.satsMultiplier;
  const usdValue = btcValue * btcPrice;

  const formatUsd = (value: number): string => {
    if (value < 0.01 && value > 0) {
      return '< $0.01';
    }
    return '$' + value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Preset amounts
  const presets = [
    { label: '1 sat', sats: 1 },
    { label: '1K sats', sats: 1000 },
    { label: '10K sats', sats: 10000 },
    { label: '100K sats', sats: 100000 },
    { label: '1M sats', sats: 1000000 },
    { label: '0.1 BTC', sats: 10000000 },
    { label: '1 BTC', sats: 100000000 },
  ];

  const setPreset = (sats: number) => {
    setInputValue(sats.toString());
    setInputUnit('sats');
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h3 className="text-xl font-semibold text-dark-100 mb-4">Bitcoin Unit Converter</h3>
      <p className="text-dark-400 text-sm mb-6">
        Convert between Bitcoin units. 1 BTC = 100,000,000 satoshis.
        Lightning payments are typically measured in satoshis.
      </p>

      {/* Input Section */}
      <div className="mb-6">
        <label className="block text-sm text-dark-400 mb-2">Enter Amount</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-3 bg-dark-700 text-dark-100 text-xl rounded-lg border border-dark-600 focus:border-amber-500 focus:outline-none"
            placeholder="0"
          />
          <select
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value as Unit)}
            className="px-4 py-3 bg-dark-700 text-dark-100 rounded-lg border border-dark-600 focus:border-amber-500 focus:outline-none"
          >
            {Object.entries(UNITS).map(([key, info]) => (
              <option key={key} value={key}>{info.symbol}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Presets */}
      <div className="mb-6">
        <label className="block text-sm text-dark-400 mb-2">Quick Amounts</label>
        <div className="flex flex-wrap gap-2">
          {presets.map(preset => (
            <button
              key={preset.label}
              onClick={() => setPreset(preset.sats)}
              className="px-3 py-1 bg-dark-700 text-dark-300 rounded-lg hover:bg-dark-600 text-sm transition-colors"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Conversion Results */}
      <div className="space-y-3 mb-6">
        {Object.entries(UNITS).map(([key, info]) => (
          <div
            key={key}
            className={`flex justify-between items-center p-3 rounded-lg ${
              key === inputUnit ? 'bg-amber-500/20 border border-amber-500/50' : 'bg-dark-700/50'
            }`}
          >
            <div>
              <div className="text-dark-400 text-sm">{info.name}</div>
              <div className="text-dark-500 text-xs">{info.symbol}</div>
            </div>
            <div className={`text-xl font-mono ${key === inputUnit ? 'text-amber-400' : 'text-dark-100'}`}>
              {convertFromSats(satsValue, key as Unit)}
            </div>
          </div>
        ))}
      </div>

      {/* Fiat Conversion */}
      <div className="border-t border-dark-700 pt-6">
        <div className="flex items-center justify-between mb-4">
          <label className="text-sm text-dark-400">Show USD Value</label>
          <button
            onClick={() => setShowFiat(!showFiat)}
            className={`w-12 h-6 rounded-full transition-colors ${
              showFiat ? 'bg-amber-500' : 'bg-dark-600'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
              showFiat ? 'translate-x-6' : 'translate-x-0.5'
            }`} />
          </button>
        </div>

        {showFiat && (
          <>
            <div className="mb-4">
              <label className="block text-sm text-dark-400 mb-2">
                BTC Price (USD): ${btcPrice.toLocaleString()}
              </label>
              <input
                type="range"
                min="10000"
                max="500000"
                step="1000"
                value={btcPrice}
                onChange={(e) => setBtcPrice(Number(e.target.value))}
                className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
              <div className="text-sm text-green-400 mb-1">USD Value</div>
              <div className="text-3xl font-bold text-green-400">{formatUsd(usdValue)}</div>
            </div>
          </>
        )}
      </div>

      {/* Educational Note */}
      <div className="mt-6 p-4 bg-dark-700/30 rounded-lg">
        <h4 className="text-sm font-medium text-dark-100 mb-2">Why Satoshis?</h4>
        <p className="text-sm text-dark-400">
          Lightning Network payments are often small, making satoshis the practical unit.
          A coffee might cost 5,000 sats, a tip 100 sats. Zeus lets you choose your preferred unit.
        </p>
      </div>
    </div>
  );
}
