import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Optimization Problem</h2>

      <p className="mb-4">
        We now have all the pieces to formally state: what tontine payout schedule
        maximizes expected lifetime utility?
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Problem Setup</h3>

      <Definition title="Tontine Optimization Problem">
        <p><strong>Given:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Initial capital: <InlineMath>W_0</InlineMath></li>
          <li>Investment return: <InlineMath>r</InlineMath></li>
          <li>Mortality: <InlineMath>{'_tp_x'}</InlineMath></li>
          <li>Utility: <InlineMath>u(c)</InlineMath> with risk aversion <InlineMath>{`\\gamma`}</InlineMath></li>
        </ul>
        <p className="mt-3"><strong>Choose:</strong></p>
        <p className="mt-1 ml-4">Payout schedule <InlineMath>D(t)</InlineMath> for all <InlineMath>t</InlineMath></p>
        <p className="mt-3"><strong>To maximize:</strong></p>
        <MathBlock>
          {`U = \\sum_{t=0}^{\\omega} {}_tp_x \\cdot \\beta^t \\cdot u(D(t))`}
        </MathBlock>
        <p className="mt-3"><strong>Subject to:</strong> Actuarial fairness constraint</p>
        <MathBlock>
          {`\\sum_{t=0}^{\\omega} {}_tp_x \\cdot v^t \\cdot D(t) = W_0`}
        </MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Calculus of Variations</h3>

      <p className="mb-4">
        This is a constrained optimization problem over a function <InlineMath>D(t)</InlineMath>.
        We can solve it using the calculus of variations—specifically, the Lagrangian method.
      </p>

      <MathBlock>
        {`\\mathcal{L} = \\sum_t \\left[ {}_tp_x \\cdot \\beta^t \\cdot u(D(t)) - \\lambda \\cdot {}_tp_x \\cdot v^t \\cdot D(t) \\right]`}
      </MathBlock>

      <Callout type="info" title="The Lagrange Multiplier">
        <p>
          The parameter <InlineMath>{`\\lambda`}</InlineMath> is the "price" of relaxing the budget
          constraint. It tells us the marginal value of an extra dollar of wealth.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Key Insight</h3>

      <p className="mb-4">
        We seek the payout schedule where we can't improve utility by shifting
        money between years without violating the budget. This leads to a first-order
        condition we'll derive next.
      </p>

      <p className="text-dark-400 italic">
        The Euler-Lagrange equation gives us the optimal relationship between
        payouts at different times. Let's derive it.
      </p>
    </LessonLayout>
  );
}
