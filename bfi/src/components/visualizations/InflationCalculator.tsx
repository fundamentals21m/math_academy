import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

interface YearData {
  year: number;
  cashValue: number;
  btcValue: number;
  inflation: number;
  btcGrowth: number;
}

export function InflationCalculator({ className = '' }: Props) {
  const [principal, setPrincipal] = useState(1000000); // $1M starting
  const [inflationRate, setInflationRate] = useState(7); // % annual
  const [btcGrowthRate, setBtcGrowthRate] = useState(30); // % annual
  const [years, setYears] = useState(10);

  const simulation = useMemo((): YearData[] => {
    const data: YearData[] = [];
    let cashValue = principal;
    let btcValue = principal;

    for (let year = 0; year <= years; year++) {
      data.push({
        year,
        cashValue,
        btcValue,
        inflation: inflationRate,
        btcGrowth: btcGrowthRate,
      });

      // Apply inflation (purchasing power loss) and BTC growth
      cashValue = cashValue * (1 - inflationRate / 100);
      btcValue = btcValue * (1 + btcGrowthRate / 100);
    }

    return data;
  }, [principal, inflationRate, btcGrowthRate, years]);

  const finalCash = simulation[simulation.length - 1].cashValue;
  const finalBtc = simulation[simulation.length - 1].btcValue;
  const cashLoss = ((principal - finalCash) / principal) * 100;
  const btcGain = ((finalBtc - principal) / principal) * 100;

  // Format currency
  const formatUSD = (value: number) => {
    if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(2)}B`;
    }
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(2)}M`;
    }
    return `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  // Historical inflation scenarios
  const scenarios = [
    { name: 'Official CPI (~3%)', inflation: 3 },
    { name: 'Realistic (~7%)', inflation: 7 },
    { name: 'M2 Growth (~10%)', inflation: 10 },
    { name: 'Asset Inflation (~15%)', inflation: 15 },
  ];

  const maxValue = Math.max(...simulation.map((d) => Math.max(d.cashValue, d.btcValue)));

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Cash vs Bitcoin: The Debasement Race</h3>

      <p className="text-dark-300 mb-6">
        Cash loses purchasing power to inflation every year. Bitcoin historically
        appreciates. See how these two forces compound over time.
      </p>

      {/* Inflation Scenario Buttons */}
      <div className="mb-6">
        <label className="block text-dark-300 text-sm mb-2">Inflation Scenario</label>
        <div className="flex flex-wrap gap-2">
          {scenarios.map((scenario) => (
            <button
              key={scenario.name}
              onClick={() => setInflationRate(scenario.inflation)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                inflationRate === scenario.inflation
                  ? 'bg-red-500 text-white'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {scenario.name}
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Starting Amount
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="100000"
              max="10000000"
              step="100000"
              value={principal}
              onChange={(e) => setPrincipal(parseInt(e.target.value))}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="text-blue-400 font-bold w-24 text-right">
              {formatUSD(principal)}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Bitcoin Growth Rate
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="60"
              step="5"
              value={btcGrowthRate}
              onChange={(e) => setBtcGrowthRate(parseInt(e.target.value))}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <span className="text-orange-400 font-bold w-16 text-right">
              {btcGrowthRate}%
            </span>
          </div>
        </div>

        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Inflation Rate
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="2"
              max="20"
              value={inflationRate}
              onChange={(e) => setInflationRate(parseInt(e.target.value))}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
            <span className="text-red-400 font-bold w-16 text-right">
              {inflationRate}%
            </span>
          </div>
        </div>

        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Time Horizon
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="5"
              max="30"
              step="5"
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value))}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <span className="text-purple-400 font-bold w-16 text-right">
              {years} years
            </span>
          </div>
        </div>
      </div>

      {/* Visual Comparison */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Cash Side */}
        <div className="text-center">
          <h4 className="text-red-400 font-medium mb-4">Cash (Melting Ice Cube)</h4>
          <div className="h-48 flex items-end justify-center">
            <motion.div
              className="w-24 bg-gradient-to-t from-red-700 to-red-400 rounded-t-lg relative"
              animate={{ height: `${(finalCash / principal) * 100}%` }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-red-400 font-bold text-sm whitespace-nowrap">
                {formatUSD(finalCash)}
              </div>
            </motion.div>
          </div>
          <p className="text-red-400 mt-4 text-2xl font-bold">-{cashLoss.toFixed(0)}%</p>
          <p className="text-dark-400 text-sm">purchasing power lost</p>
        </div>

        {/* Bitcoin Side */}
        <div className="text-center">
          <h4 className="text-orange-400 font-medium mb-4">Bitcoin (Digital Gold)</h4>
          <div className="h-48 flex items-end justify-center overflow-hidden">
            <motion.div
              className="w-24 bg-gradient-to-t from-orange-700 to-orange-400 rounded-t-lg relative"
              animate={{ height: `${Math.min((finalBtc / principal) * 100, 200)}%` }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-orange-400 font-bold text-sm whitespace-nowrap">
                {formatUSD(finalBtc)}
              </div>
            </motion.div>
          </div>
          <p className="text-emerald-400 mt-4 text-2xl font-bold">+{btcGain.toFixed(0)}%</p>
          <p className="text-dark-400 text-sm">value growth</p>
        </div>
      </div>

      {/* Divergence Calculation */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-orange-500/30 mb-6">
        <h4 className="text-dark-200 font-medium mb-4 text-center">The Divergence</h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-dark-400 text-sm">Cash After {years} Years</p>
            <p className="text-red-400 text-xl font-bold">{formatUSD(finalCash)}</p>
          </div>
          <div>
            <p className="text-dark-400 text-sm">Difference</p>
            <p className="text-emerald-400 text-xl font-bold">{formatUSD(finalBtc - finalCash)}</p>
          </div>
          <div>
            <p className="text-dark-400 text-sm">Bitcoin After {years} Years</p>
            <p className="text-orange-400 text-xl font-bold">{formatUSD(finalBtc)}</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-dark-300">
            Bitcoin holder has{' '}
            <span className="text-emerald-400 font-bold">
              {(finalBtc / finalCash).toFixed(1)}x
            </span>{' '}
            the purchasing power of the cash holder after {years} years.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-dark-800 rounded-lg overflow-hidden overflow-x-auto">
        <table className="w-full text-sm min-w-[400px]">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-3 py-2 text-left text-dark-400">Year</th>
              <th className="px-3 py-2 text-left text-red-400">Cash Value</th>
              <th className="px-3 py-2 text-left text-orange-400">Bitcoin Value</th>
              <th className="px-3 py-2 text-left text-emerald-400">BTC Advantage</th>
            </tr>
          </thead>
          <tbody>
            {simulation.filter((_, i) => i % Math.ceil(years / 6) === 0 || i === years).map((data) => (
              <tr key={data.year} className="border-t border-dark-700">
                <td className="px-3 py-2 text-dark-300">{data.year}</td>
                <td className="px-3 py-2 text-red-400">{formatUSD(data.cashValue)}</td>
                <td className="px-3 py-2 text-orange-400">{formatUSD(data.btcValue)}</td>
                <td className="px-3 py-2 text-emerald-400">
                  {(data.btcValue / data.cashValue).toFixed(1)}x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 p-4 rounded-xl bg-orange-500/10 border border-orange-500/30"
      >
        <h4 className="text-orange-400 font-medium mb-2">Saylor's Melting Ice Cube</h4>
        <p className="text-dark-300 text-sm">
          Michael Saylor describes cash as a <strong>"melting ice cube"</strong> because
          it loses value every day. At {inflationRate}% inflation, your money loses half
          its purchasing power in about {Math.ceil(72 / inflationRate)} years. Bitcoin
          offers an escape from this silent wealth destruction.
        </p>
      </motion.div>

      <p className="text-dark-500 text-xs mt-4 italic">
        Note: Bitcoin growth rates are based on historical averages but future returns are not
        guaranteed. "Inflation" here refers to purchasing power loss, which may differ from
        official CPI figures.
      </p>
    </div>
  );
}
