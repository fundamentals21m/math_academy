import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Euler-Lagrange Equation</h2>

      <p className="mb-4">
        To find the optimal payout schedule, we differentiate the Lagrangian with
        respect to <InlineMath>D(t)</InlineMath> and set it to zero.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Deriving the Condition</h3>

      <p className="mb-4">Starting from:</p>
      <MathBlock>
        {`\\mathcal{L} = \\sum_t {}_tp_x \\cdot \\beta^t \\cdot u(D(t)) - \\lambda \\cdot {}_tp_x \\cdot v^t \\cdot D(t)`}
      </MathBlock>

      <p className="mt-4 mb-4">
        Taking the derivative with respect to <InlineMath>D(t)</InlineMath>:
      </p>
      <MathBlock>
        {`\\frac{\\partial \\mathcal{L}}{\\partial D(t)} = {}_tp_x \\cdot \\beta^t \\cdot u'(D(t)) - \\lambda \\cdot {}_tp_x \\cdot v^t = 0`}
      </MathBlock>

      <p className="mt-4 mb-4">
        The survival probability <InlineMath>{'_tp_x'}</InlineMath> cancels:
      </p>
      <MathBlock>
        {`\\beta^t \\cdot u'(D(t)) = \\lambda \\cdot v^t`}
      </MathBlock>

      <Definition title="Euler-Lagrange Optimality Condition">
        <p>The optimal payout schedule satisfies:</p>
        <MathBlock>
          {`u'(D(t)) = \\lambda \\cdot \\left(\\frac{v}{\\beta}\\right)^t`}
        </MathBlock>
        <p className="mt-2">
          Marginal utility at time <InlineMath>t</InlineMath> should equal a constant times
          the ratio <InlineMath>(v/\beta)^t</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interpretation</h3>

      <Callout type="success" title="The Key Insight">
        <p>
          Marginal utility should grow at rate <InlineMath>v/\beta</InlineMath>. This means:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>If <InlineMath>{`\\beta = v`}</InlineMath> (no time preference): Constant marginal utility → Flat payouts</li>
          <li>If <InlineMath>{`\\beta > v`}</InlineMath> (impatient): Growing marginal utility → Growing payouts</li>
          <li>If <InlineMath>{`\\beta < v`}</InlineMath> (patient): Declining marginal utility → Declining payouts</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What This Means</h3>

      <p className="mb-4">
        The Euler-Lagrange equation tells us <em>how</em> optimal payouts should change
        over time. The exact form depends on the utility function. With power utility,
        we can solve for <InlineMath>D(t)</InlineMath> explicitly.
      </p>

      <p className="text-dark-400 italic">
        Let's derive the optimal payout formula for power utility.
      </p>
    </LessonLayout>
  );
}
