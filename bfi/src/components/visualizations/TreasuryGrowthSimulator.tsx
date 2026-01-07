import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

interface YearData {
  year: number;
  btcPrice: number;
  btcHoldings: number;
  totalValue: number;
  annualPurchase: number;
  avgCost: number;
}

export function TreasuryGrowthSimulator({ className = '' }: Props) {
  const [startingCapital, setStartingCapital] = useState(250); // millions
  const [annualPurchase, setAnnualPurchase] = useState(50); // millions per year
  const [btcGrowthRate, setBtcGrowthRate] = useState(30); // % annual appreciation
  const [startPrice, setStartPrice] = useState(20000); // starting BTC price
  const [years, setYears] = useState(5);

  const simulation = useMemo((): YearData[] => {
    const data: YearData[] = [];
    let totalBtc = 0;
    let totalInvested = 0;
    let currentPrice = startPrice;

    for (let year = 0; year <= years; year++) {
      // Year 0: initial purchase
      const purchase = year === 0 ? startingCapital * 1_000_000 : annualPurchase * 1_000_000;
      const btcBought = purchase / currentPrice;

      totalBtc += btcBought;
      totalInvested += purchase;

      data.push({
        year,
        btcPrice: currentPrice,
        btcHoldings: totalBtc,
        totalValue: totalBtc * currentPrice,
        annualPurchase: purchase,
        avgCost: totalInvested / totalBtc,
      });

      // Price appreciation for next year
      currentPrice = currentPrice * (1 + btcGrowthRate / 100);
    }

    return data;
  }, [startingCapital, annualPurchase, btcGrowthRate, startPrice, years]);

  const finalData = simulation[simulation.length - 1];
  const totalInvested = simulation.reduce((sum, d) => sum + d.annualPurchase, 0);
  const roi = ((finalData.totalValue - totalInvested) / totalInvested) * 100;

  // Format numbers
  const formatUSD = (value: number) => {
    if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(2)}B`;
    }
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(1)}M`;
    }
    return `$${value.toLocaleString()}`;
  };

  const formatBTC = (value: number) => {
    return `${value.toLocaleString(undefined, { maximumFractionDigits: 0 })} BTC`;
  };

  const maxValue = Math.max(...simulation.map((d) => d.totalValue));

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Treasury Growth Simulator</h3>

      <p className="text-dark-300 mb-6">
        Simulate a Strategy-style treasury accumulation. See how consistent buying
        combined with Bitcoin appreciation creates exponential growth.
      </p>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Initial Investment
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="50"
              max="500"
              step="50"
              value={startingCapital}
              onChange={(e) => setStartingCapital(parseInt(e.target.value))}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <span className="text-orange-400 font-bold w-20 text-right">
              ${startingCapital}M
            </span>
          </div>
        </div>

        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Annual Purchase
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="200"
              step="10"
              value={annualPurchase}
              onChange={(e) => setAnnualPurchase(parseInt(e.target.value))}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <span className="text-orange-400 font-bold w-20 text-right">
              ${annualPurchase}M
            </span>
          </div>
        </div>

        <div>
          <label className="block text-dark-300 text-sm mb-2">
            BTC Annual Growth
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="10"
              max="80"
              step="5"
              value={btcGrowthRate}
              onChange={(e) => setBtcGrowthRate(parseInt(e.target.value))}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <span className="text-emerald-400 font-bold w-16 text-right">
              {btcGrowthRate}%
            </span>
          </div>
        </div>

        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Starting BTC Price
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="10000"
              max="100000"
              step="5000"
              value={startPrice}
              onChange={(e) => setStartPrice(parseInt(e.target.value))}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="text-blue-400 font-bold w-20 text-right">
              ${startPrice.toLocaleString()}
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
              min="1"
              max="10"
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

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-sm mb-1">Total Invested</p>
          <p className="text-xl font-bold text-blue-400">{formatUSD(totalInvested)}</p>
        </div>

        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-sm mb-1">Final BTC Holdings</p>
          <p className="text-xl font-bold text-orange-400">{formatBTC(finalData.btcHoldings)}</p>
        </div>

        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-sm mb-1">Portfolio Value</p>
          <p className="text-xl font-bold text-emerald-400">{formatUSD(finalData.totalValue)}</p>
        </div>

        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-sm mb-1">Total ROI</p>
          <p className="text-xl font-bold text-yellow-400">{roi.toFixed(0)}%</p>
        </div>
      </div>

      {/* Visual Chart */}
      <div className="mb-6">
        <h4 className="text-dark-200 font-medium mb-4">Treasury Value Over Time</h4>
        <div className="h-48 flex items-end gap-1">
          {simulation.map((data, i) => {
            const height = (data.totalValue / maxValue) * 100;
            return (
              <motion.div
                key={data.year}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-1 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-lg relative group cursor-pointer"
              >
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <div className="bg-dark-900 border border-dark-600 rounded-lg px-3 py-2 text-xs whitespace-nowrap">
                    <p className="text-dark-400">Year {data.year}</p>
                    <p className="text-orange-400 font-bold">{formatUSD(data.totalValue)}</p>
                    <p className="text-dark-300">{formatBTC(data.btcHoldings)}</p>
                    <p className="text-dark-500">Avg cost: ${data.avgCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex gap-1 mt-2">
          {simulation.map((data) => (
            <div key={data.year} className="flex-1 text-center text-xs text-dark-500">
              Y{data.year}
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Table */}
      <div className="bg-dark-800 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-3 py-2 text-left text-dark-400">Year</th>
              <th className="px-3 py-2 text-left text-dark-400">BTC Price</th>
              <th className="px-3 py-2 text-left text-dark-400">Purchase</th>
              <th className="px-3 py-2 text-left text-dark-400">Holdings</th>
              <th className="px-3 py-2 text-left text-dark-400">Value</th>
            </tr>
          </thead>
          <tbody>
            {simulation.map((data) => (
              <tr key={data.year} className="border-t border-dark-700">
                <td className="px-3 py-2 text-dark-300">{data.year}</td>
                <td className="px-3 py-2 text-blue-400">
                  ${data.btcPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="px-3 py-2 text-dark-400">{formatUSD(data.annualPurchase)}</td>
                <td className="px-3 py-2 text-orange-400">{formatBTC(data.btcHoldings)}</td>
                <td className="px-3 py-2 text-emerald-400 font-medium">{formatUSD(data.totalValue)}</td>
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
        <h4 className="text-orange-400 font-medium mb-2">Strategy's Insight</h4>
        <p className="text-dark-300 text-sm">
          The key to Strategy's success is <strong>continuous accumulation</strong> regardless
          of price. Dollar-cost averaging over time reduces risk and takes advantage of
          volatility. Your average cost of <strong>${finalData.avgCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong> per BTC
          vs final price of <strong>${simulation[simulation.length - 1].btcPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong> shows
          the power of this approach.
        </p>
      </motion.div>

      <p className="text-dark-500 text-xs mt-4 italic">
        This is a simplified model for educational purposes. Actual results depend on many factors
        including timing, execution costs, and market conditions.
      </p>
    </div>
  );
}
