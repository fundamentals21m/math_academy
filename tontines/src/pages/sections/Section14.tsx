import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Expected Value with Mortality</h2>

      <p className="mb-4">
        A future payment has value only if you're alive to receive it. We combine
        survival probabilities with discounting to get the <strong>expected present value</strong>.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Key Formula</h3>

      <Definition title="Expected Present Value of Future Payment">
        <p>
          For someone currently age <InlineMath>x</InlineMath>, the expected present value
          of $1 to be received in <InlineMath>t</InlineMath> years is:
        </p>
        <MathBlock>
          {`\\text{EPV} = {}_tp_x \\cdot v^t`}
        </MathBlock>
        <p className="mt-2">Where:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{'_tp_x'}</InlineMath> = probability of surviving <InlineMath>t</InlineMath> years</li>
          <li><InlineMath>v^t</InlineMath> = discount factor for <InlineMath>t</InlineMath> years</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Worked Examples</h3>

      <Example title="EPV for a 65-year-old (i = 4%)">
        <p className="mb-3">
          What's the expected present value of $1 received at various ages?
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Age</th>
              <th className="pb-2"><InlineMath>{'_tp_{65}'}</InlineMath></th>
              <th className="pb-2"><InlineMath>v^t</InlineMath></th>
              <th className="pb-2">EPV</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">66 (t=1)</td>
              <td className="py-2">0.988</td>
              <td className="py-2">0.9615</td>
              <td className="py-2 text-emerald-400">0.9496</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">70 (t=5)</td>
              <td className="py-2">0.938</td>
              <td className="py-2">0.8219</td>
              <td className="py-2 text-emerald-400">0.7709</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">75 (t=10)</td>
              <td className="py-2">0.855</td>
              <td className="py-2">0.6756</td>
              <td className="py-2 text-emerald-400">0.5777</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">85 (t=20)</td>
              <td className="py-2">0.691</td>
              <td className="py-2">0.4564</td>
              <td className="py-2 text-emerald-400">0.3154</td>
            </tr>
            <tr>
              <td className="py-2">95 (t=30)</td>
              <td className="py-2">0.328</td>
              <td className="py-2">0.3083</td>
              <td className="py-2 text-emerald-400">0.1011</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="Interpretation">
        <p>
          A dollar promised at age 85 (in 20 years) is worth only about $0.32 today
          to a 65-year-old. This accounts for both:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Time value: $1 in 20 years is worth $0.46 today</li>
          <li>Mortality: Only 69% chance of being alive</li>
        </ul>
        <p className="mt-2">Combined: <InlineMath>{'0.691 \\times 0.456 = 0.315'}</InlineMath></p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why This Matters</h3>

      <p className="mb-4">
        This is the tool we need to evaluate actuarial fairness. For any stream of
        tontine payments, we can:
      </p>

      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Calculate each payment's expected present value</li>
        <li>Sum them up</li>
        <li>Compare to the initial contribution</li>
      </ol>

      <p className="mb-4">
        If EPV of payments = contribution, the tontine is actuarially fair.
      </p>

      <p className="text-dark-400 italic">
        Next, we'll apply this to price a standard life annuity—then see how classic
        tontines compare.
      </p>
    </LessonLayout>
  );
}
