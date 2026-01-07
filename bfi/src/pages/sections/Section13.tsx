import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Pension recommendations
const pensionRecommendations = [
  { recommendation: 'Embrace what BlackRock will do', description: 'Leverage their bitcoin ETF and mutual fund infrastructure' },
  { recommendation: 'Offer bitcoin in NQDC', description: 'Non-Qualified Deferred Compensation plans can include bitcoin' },
  { recommendation: 'Utilize Enhanced Funds', description: 'Use funds enhanced with bitcoin, consider higher allocations' },
  { recommendation: 'Avoid shorts in hedges', description: 'Don\'t be unintentionally short bitcoin exposure' },
  { recommendation: 'Utilize structured credit arbitrage', description: 'Take advantage of bitcoin as collateral opportunities' },
  { recommendation: 'Build robust self-custody operations', description: 'Use BlackRock ETF while developing internal capabilities' },
  { recommendation: 'Create a 10-year termination plan', description: 'Work toward pension termination over maximum 10 years' },
  { recommendation: 'Utilize the PBGC Put', description: 'Knowing executives are taken care of with NQDC' },
];

// Pension failures
const pensionFailures = [
  { fund: 'Ontario Teachers Pension Plan', investment: '$100 million in FTX', result: 'Bankrupt, CEO in prison' },
  { fund: 'CDPQ', investment: '$150 million in Celsius', result: 'Bankrupt, CEO in prison' },
];

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Opening */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "I'd say that there are about six minutes left in the game, and it is time to
        pull the goalie. Bitcoin is ready."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Brian Hirschfield, Bitcoin for Institutions
        </footer>
      </blockquote>

      <p className="text-lg text-dark-300 mb-6">
        Pensions are the king when it comes to OPM expertise. By OPM, I mean "Other People's Money."
        Everybody is an expert on how to manage other people's money, and nothing brings out
        people's greatest and wildest ideas like pensions. <strong className="text-orange-400">There
        is very little written about pensions that is truly original</strong> - but as an actuary
        with 30 years of experience who understands both pensions and bitcoin deeply, some
        insights can be offered.
      </p>

      {/* Tax Exempt Status */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Qualified Pensions are Tax Exempt</h2>

      <p className="my-4">
        There is one juicy apple to pick from the tree of institutional finance:
        <strong className="text-orange-400"> tax-qualified pension plans don't ever pay capital
        gains tax on their investments</strong>. This is a known advantage that pension plans
        exploit by loading their trusts with equities.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Untapped Opportunity</h4>
        <div className="space-y-3">
          <p className="text-dark-200">
            <strong>What hasn't been done:</strong> Companies loading their pension trusts with
            bitcoin or bitcoin proxies, hoping to exploit their ability to enjoy bitcoin's
            superior returns, tax-free, over a significantly long time horizon.
          </p>
          <p className="text-dark-200">
            <strong>What should happen:</strong> Companies starting new qualified pension plans
            to accumulate bitcoin tax-free. Outside of a Roth IRA, there aren't really any
            other ways to accumulate bitcoin gains on a tax-free basis.
          </p>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>Small Employers:</strong> It would make sense for owners of small companies
          (under 100 employees) to offer a defined benefit plan and maximize their contributions
          in bitcoin. Before the 1990s, hundreds of thousands of such companies offered pensions
          as a great tax shelter that also provided compensation to employees.
        </p>
      </Callout>

      {/* Pension Failures */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Lessons from Pension Failures</h2>

      <p className="my-4">
        Considering that some pension plans invested in criminal crypto enterprises, one would
        think that putting some small allocation into actual bitcoin would be obvious:
      </p>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Pension Fund</th>
              <th className="px-4 py-3 text-left text-orange-400">Investment</th>
              <th className="px-4 py-3 text-left text-orange-400">Result</th>
            </tr>
          </thead>
          <tbody>
            {pensionFailures.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200">{item.fund}</td>
                <td className="px-4 py-3 text-dark-300">{item.investment}</td>
                <td className="px-4 py-3 text-red-400">{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Irony:</strong> Major pension funds invested hundreds of millions in
          fraudulent crypto enterprises that are now bankrupt with executives in prison -
          yet they hesitate to allocate even small amounts to actual bitcoin.
        </p>
      </Callout>

      {/* Pulling the Goalie */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Pulling The Goalie</h2>

      <p className="my-4">
        In 2018, Aaron Brown (author of <em>Poker Face of Wall Street</em>) co-wrote a paper
        with Clifford Asness about a strategy called <strong className="text-orange-400">"Pulling
        the Goalie"</strong>. The name comes from hockey - when a team is losing near the end
        of a game, they pull their goalkeeper to add an extra attacker.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">Hail Mary (Football)</h4>
          <p className="text-dark-300 text-sm mb-2">Success rate: ~8.3%</p>
          <p className="text-dark-400 text-sm">
            Desperate move with nearly no likelihood of success. Stinks of desperation.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-green-400 mb-3">Pulling the Goalie (Hockey)</h4>
          <p className="text-dark-300 text-sm mb-2">Success rate: 18-20%</p>
          <p className="text-dark-400 text-sm">
            More than double the Hail Mary success rate. A calculated risk, not desperation.
          </p>
        </div>
      </div>

      {/* Key Insight */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Key Insight</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">From the Brown/Asness Paper:</h4>
        <blockquote className="text-dark-200 italic border-l-2 border-dark-600 pl-4">
          "The most basic lesson is to make sure you are thinking about the right risk. Pulling
          the goalie always increases the volatility of numbers of goals scored, and is a negative
          expectation in terms of the score... However, the point of hockey is not to maximize
          the differential between goals scored and given up. The point is to maximize standing
          points. A team down by a goal with short time remaining gains a lot by scoring, and
          loses little if the other team scores... <strong>Pulling the goalie actually reduces
          the risk of losing the game - it's an insurance move.</strong>"
        </blockquote>
      </div>

      <p className="my-4">
        A key determinant of whether it pays to pull the goalie is <strong className="text-orange-400">how
        much time is left in the game</strong>. According to Brown/Asness, it made sense to pull
        the goalie with six minutes left - an uncomfortably long time that seems unintuitive but
        maximizes winning probability.
      </p>

      {/* Application to Pensions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Application to Pensions</h2>

      <p className="my-4">
        Pensions are in need of a strategy that increases volatility, and bitcoin is the perfect
        solution. There isn't much more that should be said as far as allocation goes -
        <strong className="text-orange-400"> it should be 100%</strong> given that pensions are
        a medium-term problem, and most will outlive the next two bitcoin halving cycles (eight years).
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Medium-Term Problem</h4>
          <p className="text-sm text-dark-300">
            Pensions are not a long-term issue nor impending doom. Most will survive at least
            eight more years - two full bitcoin halving cycles.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Limited Bailouts</h4>
          <p className="text-sm text-dark-300">
            There are only so many more bailouts available. Given the state of fiat money,
            we shouldn't be overconfident in pensions' lifespan.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Six Minutes Left</h4>
          <p className="text-sm text-dark-300">
            It's time to pull the goalie. Bitcoin is ready. The volatility increase is
            actually the correct risk measure for winning.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Right Risk</h4>
          <p className="text-sm text-dark-300">
            Pensions need to think about the right risk - not volatility of returns, but
            probability of meeting their obligations.
          </p>
        </Card>
      </CardGrid>

      {/* Recommendations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Recommendations for Pension Managers</h2>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <ul className="space-y-4">
          {pensionRecommendations.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">{i + 1}.</span>
              <div>
                <p className="text-dark-200 font-semibold">{item.recommendation}</p>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Part 3 Summary Points */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary for Part III</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">For Investors</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>- Bitcoin is the greatest performing asset in history despite drawdowns</li>
            <li>- Drawdowns are structural and have always recovered to ATHs</li>
            <li>- Small allocations cause significant outperformance</li>
            <li>- Don't be unintentionally short bitcoin</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">For Fiduciaries</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>- Fiduciary liability exposure exists from NOT offering bitcoin</li>
            <li>- Drawdowns are short, returns are enduring</li>
            <li>- More likely to face lawsuit for lack of returns than drawdown losses</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">For Executives</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>- Don't need to hold bitcoin on treasury to benefit</li>
            <li>- Less risky options: NQDC, selling into rising markets</li>
            <li>- Lower operating costs without balance sheet risk</li>
          </ul>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Tax-qualified pensions don't pay capital gains tax</strong> - a massive
              advantage for accumulating bitcoin gains over long time horizons.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Small employers should consider new pension plans</strong> as a tax-advantaged
              vehicle for bitcoin accumulation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>"Pulling the goalie" is the right analogy</strong> - increasing volatility
              through bitcoin actually reduces the risk of not meeting obligations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Six minutes left in the game</strong> - there are limited bailouts
              remaining, and pensions need to act now.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>100% allocation is justified</strong> for pensions that will survive
              the next two halving cycles (eight years).
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
