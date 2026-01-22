import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Optimal Portfolio Mix</h2>

      <p className="mb-4">
        The tontine vs. annuity debate is often framed as either/or. But the mathematics
        reveals a more nuanced answer: for most retirees, the optimal strategy combines
        both products.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Combine?</h3>

      <p className="mb-4">
        Annuities and tontines have different risk profiles that can be combined
        beneficially:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-blue-400 font-bold mb-2">Annuity: The Floor</p>
          <p className="text-sm text-dark-300 mb-2">
            Provides guaranteed base income. You know the minimum you'll receive, enabling
            confident budgeting for essential expenses.
          </p>
          <p className="text-sm text-dark-400">
            Trade-off: Lower expected payout due to loading
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">Tontine: The Upside</p>
          <p className="text-sm text-dark-300 mb-2">
            Provides higher expected income with variability. Captures mortality credits
            efficiently without loading factors.
          </p>
          <p className="text-sm text-dark-400">
            Trade-off: Income varies with mortality and investment performance
          </p>
        </div>
      </div>

      <Definition title="Portfolio Allocation Problem">
        <p>
          Given wealth <InlineMath>W</InlineMath>, allocate fraction <InlineMath>{`\\alpha`}</InlineMath> to
          annuity and <InlineMath>{`1-\\alpha`}</InlineMath> to tontine to maximize expected utility:
        </p>
        <MathBlock>
          {`\\max_{\\alpha \\in [0,1]} E\\left[U(\\alpha \\cdot A_{\\text{annuity}} + (1-\\alpha) \\cdot D_{\\text{tontine}})\\right]`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>A</InlineMath> is the guaranteed annuity payment and <InlineMath>D</InlineMath> is
          the variable tontine distribution.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Optimal Mix</h3>

      <Example title="60/40 Beats Pure Strategies">
        <p className="mb-3">
          Consider a retiree with $300,000, risk aversion <InlineMath>{`\\gamma = 3`}</InlineMath>, and access
          to a loaded annuity (15% loading) and a natural tontine.
        </p>

        <p className="mb-3 font-semibold">Option 1: 100% Annuity</p>
        <ul className="list-disc list-inside space-y-1 text-sm mb-4">
          <li>Annual income: $18,000 guaranteed</li>
          <li>No variability</li>
          <li className="text-dark-400">Utility: 83.1</li>
        </ul>

        <p className="mb-3 font-semibold">Option 2: 100% Tontine</p>
        <ul className="list-disc list-inside space-y-1 text-sm mb-4">
          <li>Expected annual income: $21,126</li>
          <li>Standard deviation: ~$3,500</li>
          <li className="text-dark-400">Utility: 84.8</li>
        </ul>

        <p className="mb-3 font-semibold">Option 3: 60% Annuity + 40% Tontine</p>
        <ul className="list-disc list-inside space-y-1 text-sm mb-4">
          <li>Guaranteed base: $180,000 × 6% = <span className="text-emerald-400">$10,800/year</span></li>
          <li>Expected tontine: $120,000 × 7.04% = <span className="text-blue-400">$8,450/year (variable)</span></li>
          <li>Expected total: <span className="font-semibold">$19,250/year</span></li>
          <li>Reduced variability (only 40% exposed to risk)</li>
          <li className="text-emerald-400 font-semibold">Utility: 85.6</li>
        </ul>

        <p className="text-emerald-400 font-semibold mt-4">
          The blend achieves higher utility than either pure strategy!
        </p>
      </Example>

      <Callout type="success" title="Diversification Works">
        <p>
          By combining products, the retiree gets a guaranteed floor ($10,800/year)
          that covers essential expenses, plus participation in tontine upside.
          The blended approach captures the best of both worlds.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Optimal Mix by Risk Aversion</h3>

      <p className="mb-4">
        The optimal allocation depends heavily on the retiree's risk aversion:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2"><InlineMath>{`\\gamma`}</InlineMath></th>
              <th className="pb-2">Risk Profile</th>
              <th className="pb-2">Optimal Tontine %</th>
              <th className="pb-2">Optimal Annuity %</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2 font-bold">1</td>
              <td className="py-2">Risk-tolerant</td>
              <td className="py-2 text-emerald-400">80%</td>
              <td className="py-2 text-blue-400">20%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-bold">2</td>
              <td className="py-2">Below average aversion</td>
              <td className="py-2 text-emerald-400">65%</td>
              <td className="py-2 text-blue-400">35%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-bold">3</td>
              <td className="py-2">Moderate</td>
              <td className="py-2 text-emerald-400">50%</td>
              <td className="py-2 text-blue-400">50%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-bold">5</td>
              <td className="py-2">Above average aversion</td>
              <td className="py-2 text-emerald-400">30%</td>
              <td className="py-2 text-blue-400">70%</td>
            </tr>
            <tr>
              <td className="py-2 font-bold">10</td>
              <td className="py-2">Highly risk-averse</td>
              <td className="py-2 text-emerald-400">15%</td>
              <td className="py-2 text-blue-400">85%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <MathBlock>
        {`\\alpha^*(\\gamma) \\approx 1 - \\frac{0.8}{\\gamma^{0.6}}`}
      </MathBlock>

      <p className="mb-4 text-dark-400 text-sm">
        Approximate formula for optimal annuity allocation as a function of risk aversion.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Implementation</h3>

      <Example title="Building a Retirement Income Floor">
        <p className="mb-3">
          Helen, age 65, has $400,000 in retirement savings and essential expenses
          of $2,500/month ($30,000/year). She has Social Security of $24,000/year.
        </p>

        <p className="mb-3 font-semibold">Step 1: Calculate the floor gap</p>
        <MathBlock>
          {`\\text{Gap} = \\$30{,}000 - \\$24{,}000 = \\$6{,}000/\\text{year}`}
        </MathBlock>

        <p className="mb-3 font-semibold">Step 2: Size the annuity purchase</p>
        <p className="mb-3">At 6% payout rate (loaded):</p>
        <MathBlock>
          {`\\text{Annuity premium} = \\frac{\\$6{,}000}{0.06} = \\$100{,}000`}
        </MathBlock>

        <p className="mb-3 font-semibold">Step 3: Allocate remainder to tontine</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Tontine: $300,000</li>
          <li>Expected tontine income: ~$21,000/year (variable)</li>
        </ul>

        <p className="mt-4 font-semibold">Result:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Guaranteed floor: $24,000 + $6,000 = <span className="text-emerald-400 font-semibold">$30,000/year</span></li>
          <li>Expected upside: <span className="text-blue-400 font-semibold">~$21,000/year</span> (variable)</li>
          <li>Expected total: <span className="text-emerald-400 font-semibold">~$51,000/year</span></li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Insights</h3>

      <Callout type="info" title="The Optimal Strategy">
        <p className="mb-2">
          For most retirees, the optimal retirement income strategy is:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li><strong>Secure a floor:</strong> Use guaranteed income (Social Security, pension, annuity)
          to cover essential expenses</li>
          <li><strong>Maximize efficiency:</strong> Use tontines for discretionary income, capturing
          the mortality credit efficiently</li>
          <li><strong>Adjust by preference:</strong> More risk-averse? Larger annuity allocation.
          More risk-tolerant? Larger tontine allocation.</li>
        </ol>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Blending Dominates</h3>

      <p className="mb-4">
        The mathematics of portfolio optimization explains why blending works:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Diminishing marginal utility:</strong> The first dollars of guaranteed income
          are more valuable than the last
        </li>
        <li>
          <strong>Imperfect correlation:</strong> Annuity and tontine risks are different,
          creating diversification benefits
        </li>
        <li>
          <strong>Efficiency arbitrage:</strong> Tontines capture mortality credits that
          annuities leave on the table
        </li>
      </ul>

      <p className="text-dark-400 italic">
        This completes our comparison of tontines and annuities. The theoretical framework
        strongly favors tontines or tontine/annuity blends over pure annuity strategies.
        In the next part, we'll examine how modern tontines are actually implemented.
      </p>
    </LessonLayout>
  );
}
