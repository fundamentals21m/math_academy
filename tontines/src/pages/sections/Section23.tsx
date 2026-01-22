import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Natural Tontine</h2>

      <p className="mb-4">
        Milevsky and Salisbury discovered a remarkably simple tontine design that is
        near-optimal for a wide range of risk aversions: the <strong>natural tontine</strong>.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Formula</h3>

      <Definition title="Natural Tontine">
        <p>
          In a natural tontine, the payout at time <InlineMath>t</InlineMath> is:
        </p>
        <MathBlock>
          {`D(t) = \\frac{A}{{}_tp_x}`}
        </MathBlock>
        <p className="mt-2">
          Payout is <strong>inversely proportional</strong> to survival probability.
          As survival decreases, payout increases.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why "Natural"?</h3>

      <Callout type="success" title="The Key Insight">
        <p>
          When you're less likely to receive a payment, you should receive more when
          you do. The natural tontine exactly compensates for mortality risk.
        </p>
      </Callout>

      <Example title="Payout Growth">
        <p className="mb-3">For a 65-year-old with <InlineMath>A = \$4,000</InlineMath>:</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Age</th>
              <th className="pb-2"><InlineMath>{'_tp_{65}'}</InlineMath></th>
              <th className="pb-2">Payout <InlineMath>D(t)</InlineMath></th>
              <th className="pb-2">% of Initial</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">65</td>
              <td className="py-2">1.000</td>
              <td className="py-2">$4,000</td>
              <td className="py-2">4.0%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">70</td>
              <td className="py-2">0.938</td>
              <td className="py-2">$4,264</td>
              <td className="py-2">4.3%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">75</td>
              <td className="py-2">0.855</td>
              <td className="py-2">$4,678</td>
              <td className="py-2">4.7%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">85</td>
              <td className="py-2">0.691</td>
              <td className="py-2">$5,790</td>
              <td className="py-2">5.8%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">95</td>
              <td className="py-2">0.328</td>
              <td className="py-2">$12,195</td>
              <td className="py-2">12.2%</td>
            </tr>
            <tr>
              <td className="py-2">100</td>
              <td className="py-2">0.091</td>
              <td className="py-2">$43,956</td>
              <td className="py-2">44.0%</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Compare to Classic Tontine</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-rose-500">
          <p className="text-rose-400 font-bold mb-2">Classic Tontine</p>
          <p className="text-sm text-dark-300">
            Payouts grow to 800% by the end. Extreme volatility. Jackpot effect.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">Natural Tontine</p>
          <p className="text-sm text-dark-300">
            Payouts grow smoothly to ~44%. Much more reasonable. Still provides
            longevity protection.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Finding A</h3>

      <p className="mb-4">
        The constant <InlineMath>A</InlineMath> comes from the budget constraint:
      </p>
      <MathBlock>
        {`\\sum_t {}_tp_x \\cdot v^t \\cdot \\frac{A}{{}_tp_x} = W_0`}
      </MathBlock>
      <MathBlock>
        {`A \\cdot \\sum_t v^t = W_0`}
      </MathBlock>
      <MathBlock>
        {`A = \\frac{W_0}{\\ddot{a}_{\\text{(interest only)}}}`}
      </MathBlock>

      <p className="text-dark-400 italic">
        But how close is "near-optimal"? Let's quantify the efficiency.
      </p>
    </LessonLayout>
  );
}
