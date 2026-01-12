import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Opening */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "A company that holds bitcoin in its treasury has a significant optionality
        advantage over one that does not."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Brian Hirschfield, Bitcoin for Institutions
        </footer>
      </blockquote>

      <p className="text-lg text-dark-300 mb-6">
        We have covered the story of Strategy (formerly MicroStrategy) solving their existential
        problem of how to protect their cash savings from government debasement by money printing.
        That problem was so relatable that many individuals adopted that strategy for themselves
        to great success. <strong className="text-orange-400">So many people have started their own
        bitcoin treasuries, but very few companies have followed suit.</strong>
      </p>

      {/* The Barrier */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Accounting Barrier</h2>

      <p className="my-4">
        For the most part, only bitcoin mining companies (e.g., RIOT, MARA) are holding bitcoin
        in their treasury, and this is primarily because they mine bitcoin. However, most mining
        companies eventually sell off their treasury either to pay their employees or to pay off debt.
      </p>

      <p className="my-4">
        One of the large barriers for companies was that until 2024, FASB had no guidance for how
        to account for bitcoin. Intuitively, one would track the mark-to-market value, but without
        explicit guidance, accountants interpreted existing guidance as more of a goodwill treatment.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/30 my-6">
        <h4 className="font-semibold text-red-400 mb-3">The Old Goodwill Treatment</h4>
        <p className="text-dark-200">
          Under the old interpretation, the value of bitcoin was held constant and <strong>written
          down</strong> when there was a drawdown, but <strong>never written back up</strong>.
        </p>
        <p className="text-dark-400 text-sm mt-3">
          This made it very difficult to explain to investors why they were holding bitcoin if
          they never benefited from price increases but always suffered from decreases.
        </p>
      </div>

      {/* FASB Fix */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The FASB Fix: ASU 2023-08</h2>

      <p className="my-4">
        The accounting problem was fixed when FASB issued <strong className="text-orange-400">"Accounting
        Standards Update 2023-08 (ASU 2023-08)"</strong>. This clarified the accounting treatment
        as a full mark-to-market approach where the account value of bitcoin would be carried
        and reported according to the prevailing market price.
      </p>

      <Callout type="info">
        <p>
          <strong>Mark-to-Market Treatment:</strong> Companies can now report their bitcoin holdings
          at current market value, reflecting both gains and losses in real-time. This is expected
          to pave the way for much more widespread bitcoin treasury adoption.
        </p>
      </Callout>

      <p className="my-4">
        The important question now is what institutions might be able to do with a bitcoin treasury,
        beyond just protecting their savings. A business cannot truly accumulate capital without
        bitcoin, as it will continue to see its cash holdings debased. But a business can do far
        more than just accumulate capital with bitcoin.
      </p>

      {/* Operating Profitability */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Operating Profitability</h2>

      <p className="my-4">
        Bitcoin can be uniquely used by companies which hold it in their treasury to
        <strong className="text-orange-400"> lower their operating costs</strong>. This is of
        interest to CFOs and management teams because "operating profitability" is typically
        how they are judged by their boards and what their incentive compensation payouts
        depend on.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Regular Profitability</h4>
          <p className="text-sm text-dark-300">
            Revenue less expenses - the basic calculation that includes all accounting adjustments,
            depreciation, and non-operating items.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Operating Profitability</h4>
          <p className="text-sm text-dark-300">
            Operating revenue less operating expenses - what the company expects to experience
            on a "run-rate" or under typical conditions.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        Companies have complicated accounting rules that make their overall earnings look a certain
        way, but many adjustments don't confer information on the quality of operations. Operating
        performance excludes charges associated with past actions (like acquisitions) and focuses
        only on run-rate activity.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">How Bitcoin Treasury Deployment Works</h2>

      <p className="my-4">
        A company that holds bitcoin in its treasury can either hold it and let it accumulate
        gains that investors will view as extraordinary, or they can deploy that treasury by
        regularly selling a portion into rising markets and getting accountants to include
        those gains in operating revenue.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Strategy</h4>
        <div className="space-y-3">
          <p className="text-dark-200">
            <strong>1.</strong> Assume a forward-looking return of bitcoin as an actuarial assumption
            (30% or 40% a year is reasonable based on historical data).
          </p>
          <p className="text-dark-200">
            <strong>2.</strong> Establish a clearly defined program that actually sells a certain
            amount of bitcoin regularly.
          </p>
          <p className="text-dark-200">
            <strong>3.</strong> Demonstrate to auditors and regulators the ability to execute this strategy.
          </p>
          <p className="text-dark-200">
            <strong>4.</strong> Classify a percentage of treasury gains as operating income instead of capital gains.
          </p>
        </div>
      </div>

      {/* Example */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Real-World Example</h2>

      <p className="my-4">
        To illustrate how a company could do this, consider a large bitcoin mining company that
        holds a BTC treasury from their mining operations:
      </p>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Q3 2023 Metric</th>
              <th className="px-4 py-3 text-right text-orange-400">Current Strategy</th>
              <th className="px-4 py-3 text-right text-orange-400">Proposed Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-dark-700">
              <td className="px-4 py-3 text-dark-200">Revenue</td>
              <td className="px-4 py-3 text-dark-300 text-right">$76,700,000</td>
              <td className="px-4 py-3 text-dark-300 text-right">$76,700,000</td>
            </tr>
            <tr className="border-t border-dark-700">
              <td className="px-4 py-3 text-dark-200">Operating Expenses</td>
              <td className="px-4 py-3 text-dark-300 text-right">$88,000,000</td>
              <td className="px-4 py-3 text-dark-300 text-right">$76,462,468</td>
            </tr>
            <tr className="border-t border-dark-700">
              <td className="px-4 py-3 text-dark-200">Net Operating Income</td>
              <td className="px-4 py-3 text-red-400 text-right">-$11,300,000</td>
              <td className="px-4 py-3 text-green-400 text-right">$237,532</td>
            </tr>
            <tr className="border-t border-dark-700">
              <td className="px-4 py-3 text-dark-200">Net Margin</td>
              <td className="px-4 py-3 text-red-400 text-right">-14.73%</td>
              <td className="px-4 py-3 text-green-400 text-right">0.31%</td>
            </tr>
            <tr className="border-t border-dark-700">
              <td className="px-4 py-3 text-dark-200">BTC Treasury Deployed</td>
              <td className="px-4 py-3 text-dark-300 text-right">No</td>
              <td className="px-4 py-3 text-orange-400 text-right">Yes (16%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="my-4">
        Using a modest portion of their treasury (16%), with a 35% assumed bitcoin return, they
        are able to lower their costs below their revenue and produce a positive Net Operating Income.
        If actual bitcoin performance differs from 35%, the difference can be amortized outside
        of Operating Income ("below the line").
      </p>

      {/* Important Clarification */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Nature of Bitcoin as Money</h2>

      <Callout type="warning">
        <p>
          <strong>This is not a corporate finance trick.</strong> It may appear that a company
          can use bitcoin cosmetically to fool investors into thinking it's profitable when it
          isn't. That is far from what is being suggested here.
        </p>
      </Callout>

      <p className="my-4">
        The optionality that bitcoin gives a company is of tremendous value. It is important to
        understand what bitcoin actually is: <strong className="text-orange-400">money (the hardest
        money the world has ever seen)</strong> and not a return-bearing asset.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">What Bitcoin Does</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>- Protects purchasing power from monetary debasement</li>
            <li>- Protects against censorship and confiscation</li>
            <li>- Lowers costs over time relative to USD</li>
            <li>- Always increases over periods exceeding five years</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">The Opportunity Cost</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>- Bitcoin is scarce</li>
            <li>- Deploying it incurs significant opportunity cost</li>
            <li>- You sacrifice long-term price potential</li>
            <li>- You sacrifice superior monetary properties</li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>FASB ASU 2023-08</strong> enables mark-to-market accounting for bitcoin,
              removing a major barrier to corporate adoption.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Bitcoin treasuries provide optionality</strong> - companies can hold for
              appreciation or deploy to lower operating costs.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Operating profitability can be improved</strong> by systematically selling
              bitcoin gains and including them in operating revenue.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>This isn't accounting trickery</strong> - bitcoin genuinely lowers costs
              over time because USD underperforms BTC by design.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>There is no free lunch</strong> - deploying bitcoin means sacrificing its
              long-term potential and superior monetary properties.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
