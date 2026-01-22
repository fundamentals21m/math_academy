import { LessonLayout } from '@/components/layout';
import { Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Deriving Optimal Payouts</h2>

      <p className="mb-4">
        With power utility, we can solve the Euler-Lagrange equation explicitly to
        find the optimal payout schedule.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Power Utility Case</h3>

      <p className="mb-4">
        For <InlineMath>{`u(c) = c^{1-\\gamma}/(1-\\gamma)`}</InlineMath>:
      </p>
      <MathBlock>
        {`u'(c) = c^{-\\gamma}`}
      </MathBlock>

      <p className="mt-4 mb-4">
        Substituting into the Euler-Lagrange equation:
      </p>
      <MathBlock>
        {`D(t)^{-\\gamma} = \\lambda \\cdot \\left(\\frac{v}{\\beta}\\right)^t`}
      </MathBlock>

      <p className="mt-4 mb-4">
        Solving for <InlineMath>D(t)</InlineMath>:
      </p>
      <MathBlock>
        {`D(t) = \\left[\\lambda \\cdot \\left(\\frac{v}{\\beta}\\right)^t\\right]^{-1/\\gamma}`}
      </MathBlock>

      <MathBlock>
        {`D(t) = A \\cdot \\left(\\frac{\\beta}{v}\\right)^{t/\\gamma}`}
      </MathBlock>

      <Callout type="success" title="The Optimal Payout Formula">
        <MathBlock>
          {`D(t) = A \\cdot g^t \\quad \\text{where} \\quad g = \\left(\\frac{\\beta}{v}\\right)^{1/\\gamma}`}
        </MathBlock>
        <p className="mt-2">
          Optimal payouts grow (or shrink) geometrically at rate <InlineMath>g</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Special Cases</h3>

      <Example title="Log Utility (γ = 1)">
        <MathBlock>
          {`g = \\frac{\\beta}{v}`}
        </MathBlock>
        <p className="mt-2">
          If <InlineMath>{`\\beta = v`}</InlineMath> (no time preference), then <InlineMath>g = 1</InlineMath>:
          flat payouts.
        </p>
      </Example>

      <Example title="Risk-Neutral (γ → 0)">
        <p className="mb-2">
          As <InlineMath>{`\\gamma \\to 0`}</InlineMath>, optimal payouts grow rapidly.
          Risk-neutral investors prefer to maximize expected wealth, accepting volatility.
        </p>
      </Example>

      <Example title="High Risk Aversion (γ → ∞)">
        <p className="mb-2">
          As <InlineMath>{`\\gamma \\to \\infty`}</InlineMath>, <InlineMath>{'g \\to 1'}</InlineMath>: payouts
          become flat. Highly risk-averse investors want stable consumption.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Finding A</h3>

      <p className="mb-4">
        The constant <InlineMath>A</InlineMath> is determined by the budget constraint:
      </p>
      <MathBlock>
        {`\\sum_t {}_tp_x \\cdot v^t \\cdot D(t) = W_0`}
      </MathBlock>

      <p className="text-dark-400 italic">
        The optimal formula is mathematically elegant, but there's an even simpler
        approximation that works nearly as well: the "natural tontine."
      </p>
    </LessonLayout>
  );
}
