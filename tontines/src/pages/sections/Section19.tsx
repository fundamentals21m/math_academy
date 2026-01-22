import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Power Utility and Risk Aversion</h2>

      <p className="mb-4">
        To optimize tontine design mathematically, we use a specific utility family:
        <strong> constant relative risk aversion (CRRA)</strong> or power utility.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Power Utility Function</h3>

      <Definition title="CRRA Utility">
        <MathBlock>
          {`u(c) = \\frac{c^{1-\\gamma}}{1-\\gamma}`}
        </MathBlock>
        <p className="mt-2">
          Where <InlineMath>{`\\gamma`}</InlineMath> is the <strong>risk aversion parameter</strong>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`\\gamma = 0`}</InlineMath>: Risk neutral (<InlineMath>u(c) = c</InlineMath>)</li>
          <li><InlineMath>{`\\gamma = 1`}</InlineMath>: Log utility (<InlineMath>u(c) = \ln(c)</InlineMath>)</li>
          <li><InlineMath>{`\\gamma = 3`}</InlineMath>: High risk aversion</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lifetime Expected Utility</h3>

      <p className="mb-4">
        The goal is to maximize expected utility over the entire retirement:
      </p>

      <MathBlock>
        {`U = \\sum_{t=0}^{\\omega} {}_tp_x \\cdot \\beta^t \\cdot u(c_t)`}
      </MathBlock>

      <p className="mt-4">Where:</p>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li><InlineMath>c_t</InlineMath> = consumption (payout) at time <InlineMath>t</InlineMath></li>
        <li><InlineMath>{`\\beta`}</InlineMath> = time discount factor (impatience)</li>
        <li><InlineMath>{'_tp_x'}</InlineMath> = survival probability</li>
      </ul>

      <Example title="Interpreting the Formula">
        <p className="mb-3">
          Each year's utility is weighted by:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Survival:</strong> <InlineMath>{'_tp_x'}</InlineMath> — only counts if you're alive
          </li>
          <li>
            <strong>Time preference:</strong> <InlineMath>{`\\beta^t`}</InlineMath> — future utils matter less
          </li>
          <li>
            <strong>Consumption utility:</strong> <InlineMath>u(c_t)</InlineMath> — happiness from spending
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why CRRA?</h3>

      <p className="mb-4">
        CRRA utility has special properties that make optimization tractable:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Optimal consumption scales with wealth (rich and poor have similar strategies)</li>
        <li>Risk tolerance is proportional to wealth</li>
        <li>Closed-form solutions exist for many problems</li>
      </ul>

      <p className="text-dark-400 italic">
        With the utility function defined, we can now formulate the optimization problem:
        what payout schedule <InlineMath>D(t)</InlineMath> maximizes lifetime utility?
      </p>
    </LessonLayout>
  );
}
