import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

interface PortfolioMetrics {
  expectedReturn: number;
  volatility: number;
  sharpeRatio: number;
  maxDrawdown: number;
}

// Historical data approximations (annualized)
const ASSET_RETURNS = {
  stocks: 0.10, // S&P 500 ~10%
  bonds: 0.04, // Bonds ~4%
  bitcoin: 0.50, // Bitcoin historical ~50%+ CAGR
};

const ASSET_VOLATILITY = {
  stocks: 0.15,
  bonds: 0.05,
  bitcoin: 0.70,
};

const CORRELATIONS = {
  stocksBonds: 0.2,
  stocksBitcoin: 0.3,
  bondsBitcoin: 0.1,
};

export function PortfolioAllocationSimulator({ className = '' }: Props) {
  const [stocksAllocation, setStocksAllocation] = useState(60);
  const [bondsAllocation, setBondsAllocation] = useState(38);
  const [bitcoinAllocation, setBitcoinAllocation] = useState(2);

  // Calculate portfolio metrics
  const metrics = useMemo((): PortfolioMetrics => {
    const s = stocksAllocation / 100;
    const b = bondsAllocation / 100;
    const btc = bitcoinAllocation / 100;

    // Expected return (weighted average)
    const expectedReturn =
      s * ASSET_RETURNS.stocks +
      b * ASSET_RETURNS.bonds +
      btc * ASSET_RETURNS.bitcoin;

    // Portfolio variance (simplified two-asset correlation model)
    const variance =
      Math.pow(s * ASSET_VOLATILITY.stocks, 2) +
      Math.pow(b * ASSET_VOLATILITY.bonds, 2) +
      Math.pow(btc * ASSET_VOLATILITY.bitcoin, 2) +
      2 * s * b * ASSET_VOLATILITY.stocks * ASSET_VOLATILITY.bonds * CORRELATIONS.stocksBonds +
      2 * s * btc * ASSET_VOLATILITY.stocks * ASSET_VOLATILITY.bitcoin * CORRELATIONS.stocksBitcoin +
      2 * b * btc * ASSET_VOLATILITY.bonds * ASSET_VOLATILITY.bitcoin * CORRELATIONS.bondsBitcoin;

    const volatility = Math.sqrt(variance);

    // Sharpe ratio (assuming 4% risk-free rate)
    const riskFreeRate = 0.04;
    const sharpeRatio = (expectedReturn - riskFreeRate) / volatility;

    // Estimated max drawdown (simplified approximation)
    const maxDrawdown = volatility * 2.5;

    return {
      expectedReturn,
      volatility,
      sharpeRatio,
      maxDrawdown: Math.min(maxDrawdown, 0.95),
    };
  }, [stocksAllocation, bondsAllocation, bitcoinAllocation]);

  // Baseline 60/40 metrics for comparison
  const baselineMetrics = useMemo((): PortfolioMetrics => {
    const s = 0.60;
    const b = 0.40;

    const expectedReturn = s * ASSET_RETURNS.stocks + b * ASSET_RETURNS.bonds;
    const variance =
      Math.pow(s * ASSET_VOLATILITY.stocks, 2) +
      Math.pow(b * ASSET_VOLATILITY.bonds, 2) +
      2 * s * b * ASSET_VOLATILITY.stocks * ASSET_VOLATILITY.bonds * CORRELATIONS.stocksBonds;
    const volatility = Math.sqrt(variance);
    const sharpeRatio = (expectedReturn - 0.04) / volatility;

    return {
      expectedReturn,
      volatility,
      sharpeRatio,
      maxDrawdown: volatility * 2.5,
    };
  }, []);

  const handleAllocationChange = (asset: 'stocks' | 'bonds' | 'bitcoin', value: number) => {
    const remaining = 100 - value;

    if (asset === 'bitcoin') {
      setBitcoinAllocation(value);
      // Maintain stocks/bonds ratio
      const currentRatio = stocksAllocation / (stocksAllocation + bondsAllocation) || 0.6;
      setStocksAllocation(Math.round(remaining * currentRatio));
      setBondsAllocation(Math.round(remaining * (1 - currentRatio)));
    } else if (asset === 'stocks') {
      setStocksAllocation(value);
      setBondsAllocation(Math.max(0, remaining - bitcoinAllocation));
    } else {
      setBondsAllocation(value);
      setStocksAllocation(Math.max(0, remaining - bitcoinAllocation));
    }
  };

  const presets = [
    { name: 'Traditional 60/40', stocks: 60, bonds: 40, bitcoin: 0 },
    { name: '1% Bitcoin', stocks: 59, bonds: 40, bitcoin: 1 },
    { name: '2% Bitcoin', stocks: 58, bonds: 40, bitcoin: 2 },
    { name: '5% Bitcoin', stocks: 57, bonds: 38, bitcoin: 5 },
    { name: '10% Bitcoin', stocks: 54, bonds: 36, bitcoin: 10 },
  ];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Portfolio Allocation Simulator</h3>

      <p className="text-dark-300 mb-6">
        Adjust the sliders to see how different Bitcoin allocations affect portfolio metrics.
        Small allocations can significantly improve risk-adjusted returns.
      </p>

      {/* Presets */}
      <div className="flex flex-wrap gap-2 mb-6">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => {
              setStocksAllocation(preset.stocks);
              setBondsAllocation(preset.bonds);
              setBitcoinAllocation(preset.bitcoin);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              stocksAllocation === preset.stocks &&
              bondsAllocation === preset.bonds &&
              bitcoinAllocation === preset.bitcoin
                ? 'bg-orange-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Sliders */}
      <div className="space-y-4 mb-8">
        {/* Bitcoin Slider */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-orange-400 font-medium">Bitcoin</label>
            <span className="text-orange-400 font-bold">{bitcoinAllocation}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            value={bitcoinAllocation}
            onChange={(e) => handleAllocationChange('bitcoin', parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>

        {/* Stocks Slider */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-blue-400 font-medium">Stocks</label>
            <span className="text-blue-400 font-bold">{stocksAllocation}%</span>
          </div>
          <input
            type="range"
            min="0"
            max={100 - bitcoinAllocation}
            value={stocksAllocation}
            onChange={(e) => handleAllocationChange('stocks', parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        {/* Bonds Slider */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-emerald-400 font-medium">Bonds</label>
            <span className="text-emerald-400 font-bold">{bondsAllocation}%</span>
          </div>
          <input
            type="range"
            min="0"
            max={100 - bitcoinAllocation}
            value={bondsAllocation}
            onChange={(e) => handleAllocationChange('bonds', parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Allocation Visual */}
      <div className="h-8 rounded-lg overflow-hidden flex mb-8">
        <motion.div
          className="bg-blue-500 flex items-center justify-center text-xs font-medium"
          animate={{ width: `${stocksAllocation}%` }}
          transition={{ duration: 0.3 }}
        >
          {stocksAllocation > 10 && 'Stocks'}
        </motion.div>
        <motion.div
          className="bg-emerald-500 flex items-center justify-center text-xs font-medium"
          animate={{ width: `${bondsAllocation}%` }}
          transition={{ duration: 0.3 }}
        >
          {bondsAllocation > 10 && 'Bonds'}
        </motion.div>
        <motion.div
          className="bg-orange-500 flex items-center justify-center text-xs font-medium"
          animate={{ width: `${bitcoinAllocation}%` }}
          transition={{ duration: 0.3 }}
        >
          {bitcoinAllocation > 5 && 'BTC'}
        </motion.div>
      </div>

      {/* Metrics Comparison */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-sm mb-1">Expected Return</p>
          <p className="text-2xl font-bold text-emerald-400">
            {(metrics.expectedReturn * 100).toFixed(1)}%
          </p>
          <p className="text-xs text-dark-500 mt-1">
            vs {(baselineMetrics.expectedReturn * 100).toFixed(1)}% baseline
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-sm mb-1">Volatility</p>
          <p className="text-2xl font-bold text-amber-400">
            {(metrics.volatility * 100).toFixed(1)}%
          </p>
          <p className="text-xs text-dark-500 mt-1">
            vs {(baselineMetrics.volatility * 100).toFixed(1)}% baseline
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-sm mb-1">Sharpe Ratio</p>
          <p className={`text-2xl font-bold ${
            metrics.sharpeRatio > baselineMetrics.sharpeRatio ? 'text-emerald-400' : 'text-dark-300'
          }`}>
            {metrics.sharpeRatio.toFixed(2)}
          </p>
          <p className="text-xs text-dark-500 mt-1">
            vs {baselineMetrics.sharpeRatio.toFixed(2)} baseline
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-sm mb-1">Est. Max Drawdown</p>
          <p className="text-2xl font-bold text-red-400">
            {(metrics.maxDrawdown * 100).toFixed(0)}%
          </p>
          <p className="text-xs text-dark-500 mt-1">
            vs {(baselineMetrics.maxDrawdown * 100).toFixed(0)}% baseline
          </p>
        </div>
      </div>

      {/* Sharpe Improvement */}
      {bitcoinAllocation > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl border ${
            metrics.sharpeRatio > baselineMetrics.sharpeRatio
              ? 'bg-emerald-500/20 border-emerald-500/50'
              : 'bg-amber-500/20 border-amber-500/50'
          }`}
        >
          <p className="text-center">
            <span className="font-bold">
              {metrics.sharpeRatio > baselineMetrics.sharpeRatio ? (
                <span className="text-emerald-400">
                  +{((metrics.sharpeRatio / baselineMetrics.sharpeRatio - 1) * 100).toFixed(0)}%
                </span>
              ) : (
                <span className="text-amber-400">
                  {((metrics.sharpeRatio / baselineMetrics.sharpeRatio - 1) * 100).toFixed(0)}%
                </span>
              )}
            </span>
            {' '}improvement in risk-adjusted returns vs traditional 60/40
          </p>
        </motion.div>
      )}

      {/* Disclaimer */}
      <p className="text-dark-500 text-xs mt-4 italic">
        Note: This simulator uses simplified historical estimates for educational purposes.
        Past performance does not guarantee future results. Actual correlations and returns vary.
      </p>
    </div>
  );
}
