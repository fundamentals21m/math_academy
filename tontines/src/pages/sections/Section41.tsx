import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Last Mile Problem</h2>

      <p className="mb-4">
        Every tontine faces an inevitable challenge: as members die, the pool shrinks. Eventually,
        you're left with just a handful of survivors. What happens then?
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Consider a tontine that starts with 1,000 members at age 65. Fast forward 40 years
        to when survivors are 105 years old.
      </p>

      <Example title="Pool Shrinkage Over Time">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Year</th>
              <th className="pb-2">Age</th>
              <th className="pb-2">Expected Survivors</th>
              <th className="pb-2">Payment Volatility</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">0</td>
              <td className="py-2">65</td>
              <td className="py-2 text-emerald-400">1,000</td>
              <td className="py-2 text-emerald-400">{'<'}5%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">20</td>
              <td className="py-2">85</td>
              <td className="py-2 text-emerald-400">500</td>
              <td className="py-2 text-emerald-400">8%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">30</td>
              <td className="py-2">95</td>
              <td className="py-2 text-amber-400">100</td>
              <td className="py-2 text-amber-400">20%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">35</td>
              <td className="py-2">100</td>
              <td className="py-2 text-amber-400">20</td>
              <td className="py-2 text-amber-400">40%</td>
            </tr>
            <tr>
              <td className="py-2">40</td>
              <td className="py-2">105</td>
              <td className="py-2 text-red-400">5</td>
              <td className="py-2 text-red-400">80%+</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="warning" title="Last Mile Challenges">
        <p>When only 5-10 members remain:</p>
        <ul className="mt-2 space-y-1">
          <li><strong>High volatility:</strong> Each death causes massive payment swings</li>
          <li><strong>Administrative costs:</strong> Per-member costs become prohibitive</li>
          <li><strong>Mortality uncertainty:</strong> Small-sample mortality is unpredictable</li>
          <li><strong>Psychological burden:</strong> Waiting for others to die becomes morbid</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Option A: Pool Merger</h3>

      <Definition title="Merge Small Pools">
        <p>
          When a pool falls below a threshold (e.g., 50 members), merge it with another
          shrinking pool to restore statistical stability.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Pro:</strong> Maintains tontine structure indefinitely</li>
          <li><strong>Pro:</strong> No external party needed</li>
          <li><strong>Con:</strong> Complex pricing to ensure fairness across different pools</li>
          <li><strong>Con:</strong> Requires compatible pools available for merger</li>
        </ul>
        <p className="mt-2">
          Merger pricing uses actuarial present value: each member's share in the merged pool
          equals their EPV relative to total EPV.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Option B: Annuity Conversion</h3>

      <Definition title="Convert to Traditional Annuity">
        <p>
          When the pool shrinks, use remaining assets to purchase guaranteed annuities
          from an insurance company for each survivor.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Pro:</strong> Guaranteed income continues for life</li>
          <li><strong>Pro:</strong> Simple, clean transition</li>
          <li><strong>Con:</strong> Loses mortality credits (annuity pricing is conservative)</li>
          <li><strong>Con:</strong> Reintroduces insurance company counterparty risk</li>
        </ul>
      </Definition>

      <Example title="Annuity Conversion Math">
        <div className="space-y-3">
          <p>
            10 survivors at age 95, pool has $500,000 remaining.
          </p>
          <p>
            <strong>Per-person assets:</strong> $50,000
          </p>
          <p>
            <strong>Market annuity rate at 95:</strong> approximately $12,000/year per $50,000
            (24% payout rate due to short life expectancy)
          </p>
          <p className="text-amber-400">
            The tontine was paying ~$15,000/year expected—conversion means a 20% pay cut,
            but eliminates volatility entirely.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Option C: Lump Sum Distribution</h3>

      <Definition title="Distribute Remaining Assets">
        <p>
          Simply divide the pool equally among survivors and close the tontine.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Pro:</strong> Simple and transparent</li>
          <li><strong>Pro:</strong> Survivors can use funds as they wish</li>
          <li><strong>Con:</strong> Longevity risk returns—survivors must self-insure</li>
          <li><strong>Con:</strong> May create tax complications</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Option D: Government Backstop</h3>

      <Definition title="Public Insurance for Extreme Longevity">
        <p>
          The government provides income for those who survive past a certain age (e.g., 95),
          funded by general tax revenue or the tontine's final assets.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Pro:</strong> Removes tail risk entirely</li>
          <li><strong>Pro:</strong> Government can self-insure across entire population</li>
          <li><strong>Con:</strong> Requires legislation</li>
          <li><strong>Con:</strong> Political challenges</li>
        </ul>
        <p className="mt-2">
          Some researchers advocate for "longevity insurance" starting at age 85, funded
          partially by tontine contributions.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Best Practice: The Hybrid Approach</h3>

      <Callout type="success" title="Recommended Solution">
        <p>
          Design the tontine with a pre-specified transition plan:
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            <strong>Phase 1 (<InlineMath>n {'>'} 100</InlineMath>):</strong> Pure tontine operation
            with full mortality pooling benefits
          </li>
          <li>
            <strong>Phase 2 (<InlineMath>50 {'<'} n {'<'} 100</InlineMath>):</strong> Consider pool
            merger with other shrinking tontines
          </li>
          <li>
            <strong>Phase 3 (<InlineMath>n {'<'} 50</InlineMath>):</strong> Automatic conversion
            to annuities using pre-negotiated rates
          </li>
        </ul>
        <p className="mt-3">
          The conversion cost should be <strong>priced into the original tontine</strong> so
          members understand from day one what will happen in the final years.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mathematical Framework</h3>

      <p className="mb-4">
        The hybrid approach can be modeled as a piecewise system:
      </p>

      <MathBlock>
        {`\\text{Payout}_t = \\begin{cases}
\\frac{\\text{Pool}_t}{n_t} & \\text{if } n_t \\geq 50 \\text{ (tontine)} \\\\[8pt]
A_{x_t} \\cdot \\frac{\\text{Pool}_T}{n_T} & \\text{if } n_t < 50 \\text{ (annuity)}
\\end{cases}`}
      </MathBlock>

      <p className="mt-4 mb-4">
        Where <InlineMath>A_{'x_t'}</InlineMath> is the annuity factor at the member's current
        age when conversion triggers, and <InlineMath>T</InlineMath> is the conversion time.
      </p>

      <Example title="Incorporating Conversion Cost">
        <div className="space-y-3">
          <p>
            Annuity conversion typically costs 10-20% of tontine value due to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Insurance company profit margins</li>
            <li>Conservative mortality assumptions</li>
            <li>Capital reserve requirements</li>
          </ul>
          <p className="mt-3">
            <strong>Pricing:</strong> If the tontine expects 3% of members to reach the
            conversion threshold, the initial premium might include a 0.3-0.6% loading
            to pre-fund the conversion cost.
          </p>
        </div>
      </Example>

      <p className="text-dark-400 italic">
        The last mile problem is solvable with good design. Now let's step back and ask:
        why does any of this matter? What's the big picture case for tontines? That brings
        us to the retirement income crisis.
      </p>
    </LessonLayout>
  );
}
