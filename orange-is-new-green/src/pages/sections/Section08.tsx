import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Definition } from '../../components/common/ContentBlocks';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Let's examine the historical performance of Bitcoin covered short positions—
        holding Bitcoin while shorting perpetual swaps to achieve dollar stability
        while collecting funding payments.
      </p>

      <Definition title="Covered Short Position">
        A strategy where you hold spot Bitcoin and simultaneously open an
        equivalent short position in perpetual swaps. The Bitcoin exposure
        cancels out, leaving you with a dollar-stable position that collects
        (or pays) funding rates.
      </Definition>

      {/* Section 1: Cumulative Performance */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Cumulative Performance Since 2016</h2>

      <p className="my-4">
        A $100 position held in covered shorts since the launch of perpetual
        markets (May 2016) would have performed remarkably:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-green-400">+140%</p>
            <p className="text-sm text-dark-400">Total Return</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-400">~20%</p>
            <p className="text-sm text-dark-400">Annual Average</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-400">33.3%</p>
            <p className="text-sm text-dark-400">Std Deviation</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-400">3.79</p>
            <p className="text-sm text-dark-400">Sharpe Ratio</p>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>On the Sharpe ratio:</strong> While financial orthodoxy treats
          volatility as "risk," a Sharpe ratio of 3.79 is exceptional—very few
          fund managers can claim such risk-adjusted returns.
        </p>
      </Callout>

      {/* Section 2: Year by Year Comparison */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Year-by-Year Performance</h2>

      <p className="my-4">
        Comparing Bitcoin covered shorts against traditional alternatives reveals
        consistent outperformance:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 px-3 text-dark-400">Year</th>
              <th className="text-right py-2 px-3 text-amber-400">BTC Nominal</th>
              <th className="text-right py-2 px-3 text-dark-400">CPI</th>
              <th className="text-right py-2 px-3 text-green-400">BTC Real</th>
              <th className="text-right py-2 px-3 text-red-400">4-wk T-Bill Real</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">2016*</td>
              <td className="text-right py-2 px-3 text-amber-400">63.4%</td>
              <td className="text-right py-2 px-3">1.3%</td>
              <td className="text-right py-2 px-3 text-green-400">62.1%</td>
              <td className="text-right py-2 px-3 text-red-400">-1.1%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">2017</td>
              <td className="text-right py-2 px-3 text-amber-400">30.9%</td>
              <td className="text-right py-2 px-3">2.1%</td>
              <td className="text-right py-2 px-3 text-green-400">28.8%</td>
              <td className="text-right py-2 px-3 text-red-400">-1.3%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">2018</td>
              <td className="text-right py-2 px-3 text-red-400">-2.2%</td>
              <td className="text-right py-2 px-3">2.4%</td>
              <td className="text-right py-2 px-3 text-red-400">-4.6%</td>
              <td className="text-right py-2 px-3 text-red-400">-0.6%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">2019</td>
              <td className="text-right py-2 px-3 text-amber-400">7.0%</td>
              <td className="text-right py-2 px-3">1.8%</td>
              <td className="text-right py-2 px-3 text-green-400">5.2%</td>
              <td className="text-right py-2 px-3 text-green-400">0.3%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">2020</td>
              <td className="text-right py-2 px-3 text-amber-400">5.5%</td>
              <td className="text-right py-2 px-3">1.2%</td>
              <td className="text-right py-2 px-3 text-green-400">4.3%</td>
              <td className="text-right py-2 px-3 text-red-400">-0.9%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">2021</td>
              <td className="text-right py-2 px-3 text-amber-400">16.1%</td>
              <td className="text-right py-2 px-3">4.7%</td>
              <td className="text-right py-2 px-3 text-green-400">11.4%</td>
              <td className="text-right py-2 px-3 text-red-400">-4.7%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">2022</td>
              <td className="text-right py-2 px-3 text-amber-400">0.6%</td>
              <td className="text-right py-2 px-3">8.0%</td>
              <td className="text-right py-2 px-3 text-red-400">-7.4%</td>
              <td className="text-right py-2 px-3 text-red-400">-6.4%</td>
            </tr>
            <tr className="border-b border-dark-700 bg-dark-800/50">
              <td className="py-2 px-3 font-bold">Average</td>
              <td className="text-right py-2 px-3 text-amber-400 font-bold">16.3%</td>
              <td className="text-right py-2 px-3">3.4%</td>
              <td className="text-right py-2 px-3 text-green-400 font-bold">12.9%</td>
              <td className="text-right py-2 px-3 text-red-400 font-bold">-2.0%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-dark-500 mt-2">*2016 figures are annualized from May onwards</p>
      </div>

      {/* Section 3: Distribution Analysis */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Performance Distribution Analysis</h2>

      <p className="my-4">
        What interests a money manager is knowing they can store cash for any
        duration without risking significant capital losses. Analyzing all
        possible covered short positions lasting over one week since 2016:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-4">All Possible Trades Since Inception</h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-green-400">8.3%</p>
            <p className="text-sm text-dark-400">Incurred Losses</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-400">24.5%</p>
            <p className="text-sm text-dark-400">Mean Annual Return</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-400">91.7%</p>
            <p className="text-sm text-dark-400">Profitable Trades</p>
          </div>
        </div>
      </div>

      {/* Section 4: Current Cycle Improvement */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Improving Metrics in the Current Cycle</h2>

      <p className="my-4">
        As Bitcoin and its derivatives market mature, the metrics have improved.
        In the current cycle (since May 2020 halving):
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Positive Funding</h4>
          <p className="text-4xl font-bold text-green-400">81%</p>
          <p className="text-sm text-dark-400 mt-2">
            of funding events (up from 72% historically)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Loss Rate</h4>
          <p className="text-4xl font-bold text-green-400">~5%</p>
          <p className="text-sm text-dark-400 mt-2">
            of trades incurred losses (down from 8.3%)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Mean Performance</h4>
          <p className="text-4xl font-bold text-amber-400">10.3%</p>
          <p className="text-sm text-dark-400 mt-2">
            average annual return (more stable)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Volatility</h4>
          <p className="text-4xl font-bold text-green-400">10%</p>
          <p className="text-sm text-dark-400 mt-2">
            standard deviation (down from 23%)
          </p>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The trend is clear:</strong> As the market matures, funding
          rates stabilize and instances of structural negative funding are both
          shorter and rarer.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Covered shorts have delivered <strong>+140% returns</strong> since
              2016 with a 3.79 Sharpe ratio.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Only <strong>8.3% of all possible trades</strong> incurred losses,
              with 91.7% profitable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The current cycle shows <strong>improved metrics</strong>: higher
              positive funding rate (81%) and lower volatility.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              This data supports the viability of a <strong>Bitcoin-based
              deposit facility</strong> for dollar-stable savings with positive yields.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
