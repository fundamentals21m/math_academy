import { LessonLayout } from '@/components/layout';
import { Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Constructing a Natural Tontine</h2>

      <p className="mb-4">
        Let's build a natural tontine step by step, showing how to handle members
        with different mortality profiles.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Step 1: Collect Capital</h3>

      <p className="mb-4">
        Members contribute capital <InlineMath>C_i</InlineMath>. The pool is:
      </p>
      <MathBlock>
        {`W = \\sum_i C_i`}
      </MathBlock>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Step 2: Calculate Share Units</h3>

      <p className="mb-4">
        For fairness with heterogeneous members, weight by inverse survival:
      </p>
      <MathBlock>
        {`w_i(t) = \\frac{C_i}{{}_tp_i}`}
      </MathBlock>
      <p className="mb-4">
        Members with lower survival get higher weight (more share units).
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Step 3: Distribute Payouts</h3>

      <MathBlock>
        {`D_i(t) = \\frac{w_i(t)}{\\sum_j w_j(t)} \\times W \\times r`}
      </MathBlock>

      <Example title="Three-Member Example">
        <p className="mb-3">Pool with different demographics:</p>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Member</th>
              <th className="pb-2">Age/Sex</th>
              <th className="pb-2">Contribution</th>
              <th className="pb-2"><InlineMath>{'_1p'}</InlineMath></th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Alice</td>
              <td className="py-2">65F</td>
              <td className="py-2">$100,000</td>
              <td className="py-2">0.993</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Bob</td>
              <td className="py-2">65M</td>
              <td className="py-2">$100,000</td>
              <td className="py-2">0.988</td>
            </tr>
            <tr>
              <td className="py-2">Carol</td>
              <td className="py-2">70F</td>
              <td className="py-2">$100,000</td>
              <td className="py-2">0.989</td>
            </tr>
          </tbody>
        </table>

        <p className="mb-2"><strong>Year 1 share units:</strong></p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Alice: $100,000 / 0.993 = $100,704</li>
          <li>Bob: $100,000 / 0.988 = $101,215</li>
          <li>Carol: $100,000 / 0.989 = $101,112</li>
        </ul>
        <p className="mt-2">Total: $303,031</p>

        <p className="mt-4 mb-2"><strong>Investment income:</strong> $300,000 × 4% = $12,000</p>

        <p className="mt-2 mb-2"><strong>Payouts:</strong></p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Alice: $100,704 / $303,031 × $12,000 = <span className="text-emerald-400">$3,987</span></li>
          <li>Bob: $101,215 / $303,031 × $12,000 = <span className="text-emerald-400">$4,008</span></li>
          <li>Carol: $101,112 / $303,031 × $12,000 = <span className="text-emerald-400">$4,005</span></li>
        </ul>
        <p className="mt-2 text-dark-400">
          Bob gets slightly more (worse survival probability)—fair!
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Step 4: Handle Deaths</h3>

      <p className="mb-4">
        When a member dies, their capital stays in the pool. Surviving members'
        share units increase relative to the (now smaller) pool. This naturally
        increases their payouts—the mortality credit.
      </p>

      <Callout type="success" title="Automatic Fairness">
        <p>
          The natural tontine formula automatically handles heterogeneity. Members
          with lower survival probability receive higher payouts, exactly compensating
          for their shorter expected lifetime. The expected present value equals
          the contribution for everyone.
        </p>
      </Callout>

      <p className="text-dark-400 italic">
        This completes Part 2. We've developed the mathematical machinery for optimal
        tontine design. In Part 3, we'll compare tontines to annuities and see how
        modern implementations work.
      </p>
    </LessonLayout>
  );
}
