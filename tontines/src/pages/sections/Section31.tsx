import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Mathematical Comparison</h2>

      <p className="mb-4">
        To objectively compare tontines and annuities, we need a framework that accounts
        for both the level of income and its variability. Expected utility theory provides
        exactly this.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Utility Framework</h3>

      <Definition title="Lifetime Expected Utility">
        <p>
          For a retiree with CRRA utility and risk aversion <InlineMath>{`\\gamma`}</InlineMath>,
          lifetime expected utility from a stream of consumption <InlineMath>{'C_t'}</InlineMath> is:
        </p>
        <MathBlock>
          {`U = E\\left[\\sum_{t=0}^{\\infty} {}_tp_x \\cdot v^t \\cdot \\frac{C_t^{1-\\gamma}}{1-\\gamma}\\right]`}
        </MathBlock>
        <p className="mt-2">
          Higher <InlineMath>{`\\gamma`}</InlineMath> means more risk aversion—the person cares
          more about avoiding bad outcomes than achieving great ones.
        </p>
      </Definition>

      <p className="mb-4">
        Using this framework, we can convert each product into a single number—"utils"—that
        captures both its expected payout and its riskiness.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Utility Comparison at <InlineMath>{`\\gamma = 3`}</InlineMath></h3>

      <p className="mb-4">
        A risk aversion of <InlineMath>{`\\gamma = 3`}</InlineMath> is typical for retirees—moderately
        risk-averse but not extremely so. Let's compare three products for a 65-year-old
        with $100,000.
      </p>

      <Example title="Head-to-Head Utility Comparison">
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Product</th>
              <th className="pb-2">Expected Payout</th>
              <th className="pb-2">Variability</th>
              <th className="pb-2">Utility</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-dark-100">Fair Annuity</td>
              <td className="py-2">$7,042/year</td>
              <td className="py-2">None</td>
              <td className="py-2 text-emerald-400 font-bold">85.3</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-dark-100">Natural Tontine</td>
              <td className="py-2">$7,042/year (avg)</td>
              <td className="py-2">Moderate</td>
              <td className="py-2 text-blue-400 font-bold">84.8</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-dark-100">Loaded Annuity</td>
              <td className="py-2">$6,000/year</td>
              <td className="py-2">None</td>
              <td className="py-2 text-amber-400 font-bold">83.1</td>
            </tr>
          </tbody>
        </table>
        <p className="text-dark-400">
          Utils are on an arbitrary scale—only relative comparisons matter.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Key Ranking</h3>

      <MathBlock>
        {`\\text{Fair Annuity} > \\text{Natural Tontine} > \\text{Loaded Annuity}`}
      </MathBlock>

      <p className="mb-4">
        This ranking reveals something crucial:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">Theoretical Winner</p>
          <p className="text-sm text-dark-300">
            The fair annuity is best—guaranteed income at actuarially fair prices
            beats variable income. <strong>But fair annuities don't exist in the real
            market.</strong>
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-blue-400 font-bold mb-2">Practical Winner</p>
          <p className="text-sm text-dark-300">
            Against <em>actual</em> market annuities, the natural tontine wins.
            The efficiency gain from avoiding loading factors outweighs the
            cost of payout variability.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Breakeven Analysis</h3>

      <p className="mb-4">
        At what loading factor would you be indifferent between a tontine and an annuity?
      </p>

      <Definition title="Breakeven Loading">
        <p>
          The <strong>breakeven loading</strong> <InlineMath>{`\\lambda^*`}</InlineMath> is the
          loading factor at which expected utility from a loaded annuity equals that from
          a tontine:
        </p>
        <MathBlock>
          {`U(\\text{Annuity with loading } \\lambda^*) = U(\\text{Tontine})`}
        </MathBlock>
      </Definition>

      <Example title="Breakeven Calculation">
        <p className="mb-3">
          For our 65-year-old with <InlineMath>{`\\gamma = 3`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\lambda^* \\approx 2\\%\\text{-}3\\%`}
        </MathBlock>
        <p className="mt-3">
          This means: if annuity loading were only 2-3%, you'd be roughly indifferent
          between tontine and annuity.
        </p>
        <p className="mt-3">
          <strong>Reality check:</strong> Market loadings are <span className="text-rose-400 font-semibold">12-18%</span>.
        </p>
      </Example>

      <Callout type="success" title="The Practical Conclusion">
        <p>
          Breakeven loading: <strong>2-3%</strong>
        </p>
        <p className="mt-2">
          Actual market loading: <strong>12-18%</strong>
        </p>
        <p className="mt-2">
          The gap is enormous. Even for risk-averse retirees, tontines clearly dominate
          market annuities from a utility perspective.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sensitivity to Risk Aversion</h3>

      <p className="mb-4">
        How does this comparison change as we vary <InlineMath>{`\\gamma`}</InlineMath>?
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2"><InlineMath>{`\\gamma`}</InlineMath></th>
              <th className="pb-2">Risk Type</th>
              <th className="pb-2">Breakeven Loading</th>
              <th className="pb-2">Tontine Wins If...</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2 font-bold">1</td>
              <td className="py-2">Low aversion (log utility)</td>
              <td className="py-2">5%</td>
              <td className="py-2 text-emerald-400">Loading &gt; 5%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-bold">3</td>
              <td className="py-2">Moderate aversion</td>
              <td className="py-2">2.5%</td>
              <td className="py-2 text-emerald-400">Loading &gt; 2.5%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-bold">5</td>
              <td className="py-2">High aversion</td>
              <td className="py-2">1.5%</td>
              <td className="py-2 text-emerald-400">Loading &gt; 1.5%</td>
            </tr>
            <tr>
              <td className="py-2 font-bold">10</td>
              <td className="py-2">Extreme aversion</td>
              <td className="py-2">0.5%</td>
              <td className="py-2 text-amber-400">Loading &gt; 0.5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Even at extreme risk aversion (<InlineMath>{`\\gamma = 10`}</InlineMath>), the breakeven
        loading is still well below market rates. The mathematical conclusion is robust:
      </p>

      <Callout type="info" title="Universal Result">
        <p>
          For any reasonable level of risk aversion (<InlineMath>{`\\gamma \\leq 10`}</InlineMath>),
          tontines dominate market annuities. The theoretical preference for guaranteed
          income is overwhelmed by the practical reality of annuity pricing.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Caveats</h3>

      <p className="mb-4">
        This analysis assumes:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Large tontine pool:</strong> Small pools have more payout variance
        </li>
        <li>
          <strong>Fair pool composition:</strong> No severe adverse selection within tontine
        </li>
        <li>
          <strong>Similar investment returns:</strong> Both products earn comparable rates
        </li>
        <li>
          <strong>Rational decision-making:</strong> Retiree can handle payout variability
        </li>
      </ul>

      <p className="text-dark-400 italic">
        The comparison so far treats the choice as either/or. But what if you could
        combine both products? Let's explore optimal portfolio mixing.
      </p>
    </LessonLayout>
  );
}
