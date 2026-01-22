import { LessonLayout } from '@/components/layout';
import { Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Is Classic Tontine Fair?</h2>

      <p className="mb-4">
        Let's apply our fairness tools to the classic tontine from Part 1. Is the
        expected present value of payments equal to the initial contribution?
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Calculation</h3>

      <p className="mb-4">
        For each year, we need: probability of being alive × probability of being a
        survivor among peers × payout amount × discount factor.
      </p>

      <Example title="EPV Calculation (Simplified)">
        <p className="mb-3">For a member in a pool of identical 65-year-olds:</p>
        <MathBlock>
          {`\\text{EPV} = \\sum_{t=1}^{\\omega} {}_tp_{65} \\cdot D_t \\cdot v^t`}
        </MathBlock>

        <p className="mt-4 mb-2">
          Using our earlier payout projections:
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Year</th>
              <th className="pb-2">Payout <InlineMath>D_t</InlineMath></th>
              <th className="pb-2"><InlineMath>{'_tp_{65}'}</InlineMath></th>
              <th className="pb-2"><InlineMath>v^t</InlineMath></th>
              <th className="pb-2">Contribution to EPV</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">1</td>
              <td className="py-2">$4,040</td>
              <td className="py-2">0.988</td>
              <td className="py-2">0.962</td>
              <td className="py-2">$3,838</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">5</td>
              <td className="py-2">$4,518</td>
              <td className="py-2">0.938</td>
              <td className="py-2">0.822</td>
              <td className="py-2">$3,483</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">20</td>
              <td className="py-2">$12,700</td>
              <td className="py-2">0.691</td>
              <td className="py-2">0.456</td>
              <td className="py-2">$4,001</td>
            </tr>
            <tr>
              <td className="py-2">...</td>
              <td className="py-2">...</td>
              <td className="py-2">...</td>
              <td className="py-2">...</td>
              <td className="py-2">...</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4 text-emerald-400">
          Total EPV ≈ <strong>$100,000</strong> ✓
        </p>
      </Example>

      <Callout type="success" title="Surprising Result">
        <p>
          The classic tontine <em>is</em> actuarially fair! Despite the wild variation
          in payouts (from $4,040 to $800,000), the expected present value equals
          the contribution.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">But Wait...</h3>

      <p className="mb-4">
        This fairness result holds only if everyone has the <em>same</em> mortality.
        But what if:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Alice is healthier than Bob?</li>
        <li>Carol is 70 while David is 65?</li>
        <li>Eve is female (longer life expectancy)?</li>
      </ul>

      <p className="mb-4">
        In a real pool, members have different mortality risks. The classic tontine
        treats them all equally—which creates unfairness.
      </p>

      <p className="text-dark-400 italic">
        This is the heterogeneity problem, and it's fundamental to tontine design.
        Let's examine it next.
      </p>
    </LessonLayout>
  );
}
