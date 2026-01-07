import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { PortfolioAllocationSimulator } from '../../components/visualizations';

// Bitcoin allocation impact
const allocationImpact = [
  { allocation: '0%', return: '8.0%', volatility: '15%', sharpe: '0.53' },
  { allocation: '1%', return: '9.2%', volatility: '15.3%', sharpe: '0.60' },
  { allocation: '2%', return: '10.4%', volatility: '15.8%', sharpe: '0.66' },
  { allocation: '5%', return: '14.0%', volatility: '17.5%', sharpe: '0.80' },
  { allocation: '10%', return: '20.0%', volatility: '21.0%', sharpe: '0.95' },
];

// Fund enhancement strategies
const enhancementStrategies = [
  { strategy: 'Small Allocation (1-2%)', risk: 'Minimal tracking error', reward: 'Significant alpha over time', suitable: 'Conservative funds' },
  { strategy: 'Moderate Allocation (3-5%)', risk: 'Noticeable tracking error', reward: 'Substantial outperformance', suitable: 'Balanced funds' },
  { strategy: 'Aggressive (5-10%)', risk: 'High tracking error', reward: 'Major outperformance', suitable: 'Growth funds' },
  { strategy: 'Bitcoin-Enhanced Fund', risk: 'Dedicated product', reward: 'Full bitcoin exposure', suitable: 'Bitcoin-aware investors' },
];

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Opening */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Using bitcoin in funds is the most obvious and non-thinking way for a fund,
        their investors, and their investors' shareholders to sleepwalk their way to
        unimaginable wealth."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Brian Hirschfield, Bitcoin for Institutions
        </footer>
      </blockquote>

      <p className="text-lg text-dark-300 mb-6">
        Despite being declared dead many times by mainstream media, declared useless by
        respected economists, and called "only useful to money launderers" by Larry Fink,
        bitcoin closed 2024 near all-time highs. <strong className="text-orange-400">Ordinary
        people who simply held bitcoin outperformed every hedge fund, mutual fund, and
        special purpose fund.</strong>
      </p>

      {/* The Professional Embarrassment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Professional Embarrassment</h2>

      <p className="my-4">
        If you are a mutual fund manager reading this book and your company still isn't
        offering bitcoin, you must wonder what they're doing. What are all of those employees
        actually doing all day?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/30 my-6">
        <h4 className="font-semibold text-red-400 mb-3">The Uncomfortable Truth</h4>
        <p className="text-dark-200">
          There are tens, maybe hundreds of thousands of ordinary people - most of whom would
          never pass the hiring process of any investment company - who have <strong className="text-orange-400">massively
          outperformed every professional fund manager</strong> simply by buying and holding bitcoin.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>16 Years of Returns:</strong> Bitcoin's 16-year return history makes it
          the best-performing asset class in history, despite massive drawdowns along the
          way. Professional money managers who ignored it have significant explaining to do.
        </p>
      </Callout>

      {/* The Allocation Impact */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Impact of Small Allocations</h2>

      <p className="my-4">
        Research consistently shows that even small allocations to bitcoin can dramatically
        improve portfolio metrics. The following illustrative table shows how different
        bitcoin allocations might impact a traditional 60/40 portfolio:
      </p>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Bitcoin Allocation</th>
              <th className="px-4 py-3 text-left text-orange-400">Expected Return</th>
              <th className="px-4 py-3 text-left text-orange-400">Volatility</th>
              <th className="px-4 py-3 text-left text-orange-400">Sharpe Ratio</th>
            </tr>
          </thead>
          <tbody>
            {allocationImpact.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200">{item.allocation}</td>
                <td className="px-4 py-3 text-green-400">{item.return}</td>
                <td className="px-4 py-3 text-dark-300">{item.volatility}</td>
                <td className="px-4 py-3 text-orange-400">{item.sharpe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="my-4 text-dark-400 text-sm italic">
        Note: These figures are illustrative based on historical data. Past performance
        does not guarantee future results. Actual allocations should be based on individual
        fund mandates and risk parameters.
      </p>

      {/* Interactive Portfolio Simulator */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Interactive: Portfolio Allocation Simulator</h2>

      <p className="my-4">
        Experiment with different allocations to see how adding Bitcoin affects your portfolio's
        expected return, volatility, and Sharpe ratio compared to a traditional 60/40 portfolio.
      </p>

      <PortfolioAllocationSimulator className="my-8" />

      {/* Enhancement Strategies */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Fund Enhancement Strategies</h2>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-3 py-3 text-left text-orange-400">Strategy</th>
              <th className="px-3 py-3 text-left text-orange-400">Risk</th>
              <th className="px-3 py-3 text-left text-orange-400">Reward</th>
              <th className="px-3 py-3 text-left text-orange-400">Suitable For</th>
            </tr>
          </thead>
          <tbody>
            {enhancementStrategies.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-3 py-3 text-dark-200">{item.strategy}</td>
                <td className="px-3 py-3 text-dark-300">{item.risk}</td>
                <td className="px-3 py-3 text-green-400">{item.reward}</td>
                <td className="px-3 py-3 text-dark-400">{item.suitable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The Blade Metaphor */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Wielding the Blade</h2>

      <p className="my-4">
        The chapter title "Wielding the Blade" refers to the precision required in
        using bitcoin within fund structures. Like a surgical instrument, bitcoin must
        be wielded carefully to maximize benefit and minimize unintended consequences.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Precision Allocation</h4>
          <p className="text-sm text-dark-300">
            Small, precise allocations can generate significant alpha without
            dramatically changing the fund's risk profile.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Rebalancing Discipline</h4>
          <p className="text-sm text-dark-300">
            Regular rebalancing is essential - bitcoin's volatility means allocations
            can drift significantly from targets.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Clear Communication</h4>
          <p className="text-sm text-dark-300">
            Investors need to understand bitcoin's role in the fund and why
            temporary drawdowns don't indicate failure.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Long-Term Focus</h4>
          <p className="text-sm text-dark-300">
            Bitcoin's benefits emerge over years, not quarters. Fund managers
            must resist pressure to sell during drawdowns.
          </p>
        </Card>
      </CardGrid>

      {/* Implementation Considerations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Implementation Considerations</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">ETF vs. Direct</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>• ETFs (IBIT, FBTC) offer simplicity</li>
            <li>• Direct custody eliminates counterparty risk</li>
            <li>• Regulatory clarity favors ETFs currently</li>
            <li>• Larger funds may justify direct custody</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">Disclosure Requirements</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>• Clear prospectus language on bitcoin risks</li>
            <li>• Volatility warnings and historical drawdowns</li>
            <li>• Custody arrangements and counterparty risks</li>
            <li>• Rebalancing methodology disclosure</li>
          </ul>
        </div>
      </div>

      {/* The Fiduciary Argument */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Fiduciary Argument</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Shifting Liability</h4>
        <p className="text-dark-200 mb-4">
          The traditional concern is that fiduciaries face liability for including bitcoin
          and experiencing drawdowns. But the calculus is shifting:
        </p>
        <div className="space-y-3">
          <p className="text-dark-300">
            <strong className="text-orange-400">Old View:</strong> "We can't include bitcoin
            because if it drops 50%, we'll be sued."
          </p>
          <p className="text-dark-300">
            <strong className="text-green-400">New View:</strong> "If we don't include bitcoin
            and it 10x's while our competitors include it, we'll be sued for NOT including it."
          </p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Asymmetric Risk:</strong> Bitcoin drawdowns are temporary (historically
          always recovering to new highs), but missing bitcoin's appreciation is permanent.
          Fiduciaries face greater long-term risk from exclusion than inclusion.
        </p>
      </Callout>

      {/* Being Unintentionally Short */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Don't Be Unintentionally Short</h2>

      <p className="my-4">
        Many funds have unintentional short exposure to bitcoin through their positions:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/30 my-6">
        <h4 className="font-semibold text-red-400 mb-3">Hidden Short Positions</h4>
        <ul className="text-dark-300 space-y-2">
          <li>• <strong>Banks:</strong> Compete with bitcoin for store-of-value function</li>
          <li>• <strong>Payment processors:</strong> Compete with bitcoin's payment rails</li>
          <li>• <strong>Fiat currencies:</strong> Direct competition for monetary premium</li>
          <li>• <strong>Long-duration bonds:</strong> Same role as monetary hedge</li>
          <li>• <strong>Gold miners:</strong> Direct competition as hard money</li>
        </ul>
        <p className="text-dark-400 text-sm mt-4">
          If your fund holds these assets without bitcoin exposure, you may be structurally
          short bitcoin even without intending to be.
        </p>
      </div>

      {/* Target Date Funds */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Target Date Fund Opportunity</h2>

      <p className="my-4">
        Target date funds (TDFs) represent the single largest opportunity for bitcoin
        integration. These "set it and forget it" funds for retirement savers could
        include bitcoin in their equity allocation with minimal friction.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Massive Scale</h4>
          <p className="text-sm text-dark-300">
            TDFs hold trillions in assets. Even 1% bitcoin allocation = massive demand.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Long Horizons</h4>
          <p className="text-sm text-dark-300">
            Young workers have 30-40 year horizons - perfect for bitcoin's volatility profile.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Passive Investors</h4>
          <p className="text-sm text-dark-300">
            TDF investors won't panic sell during drawdowns because they don't watch daily prices.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Automatic Rebalancing</h4>
          <p className="text-sm text-dark-300">
            TDF structure naturally rebalances, selling high and buying low over time.
          </p>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Ordinary bitcoin holders outperformed every professional fund</strong> -
              fund managers who ignored bitcoin have explaining to do.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Small allocations generate significant alpha</strong> - even 1-2%
              bitcoin can meaningfully improve portfolio Sharpe ratios.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Fiduciary risk is shifting</strong> - the greater liability may now
              be from NOT including bitcoin rather than including it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Don't be unintentionally short bitcoin</strong> - holdings in banks,
              payment processors, and bonds may create hidden short exposure.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>Target date funds are the biggest opportunity</strong> - trillions
              in assets with long horizons and passive investors.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
