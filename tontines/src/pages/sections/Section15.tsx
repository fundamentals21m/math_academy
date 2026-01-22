import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Actuarially Fair Annuity</h2>

      <p className="mb-4">
        Before analyzing tontines, let's understand how insurance companies price life
        annuities. This gives us a benchmark for comparison.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Life Annuity Definition</h3>

      <Definition title="Life Annuity">
        <p>
          A life annuity pays $1 per year for as long as the annuitant lives.
          The actuarial present value (price) is denoted <InlineMath>{`\\ddot{a}_x`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\ddot{a}_x = \\sum_{t=1}^{\\omega} {}_tp_x \\cdot v^t`}
        </MathBlock>
        <p className="mt-2">
          Where <InlineMath>{`\\omega`}</InlineMath> is the maximum age (e.g., 120).
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Calculating the Price</h3>

      <Example title="Fair Annuity for 65-year-old (i = 4%)">
        <p className="mb-3">Sum the expected present values for each year:</p>
        <MathBlock>
          {`\\ddot{a}_{65} = {}_1p_{65} \\cdot v + {}_2p_{65} \\cdot v^2 + {}_3p_{65} \\cdot v^3 + \\cdots`}
        </MathBlock>
        <table className="w-full text-sm mt-4">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Age</th>
              <th className="pb-2"><InlineMath>{'_tp_{65} \\cdot v^t'}</InlineMath></th>
              <th className="pb-2">Cumulative</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">66</td>
              <td className="py-2">0.9496</td>
              <td className="py-2">0.95</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">67</td>
              <td className="py-2">0.9033</td>
              <td className="py-2">1.85</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">70</td>
              <td className="py-2">0.7709</td>
              <td className="py-2">4.30</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">85</td>
              <td className="py-2">0.3154</td>
              <td className="py-2">11.46</td>
            </tr>
            <tr>
              <td className="py-2">100+</td>
              <td className="py-2">...</td>
              <td className="py-2 text-emerald-400 font-bold">~14.2</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4 text-emerald-400">
          <InlineMath>{`\\ddot{a}_{65} \\approx 14.2`}</InlineMath>
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What This Means</h3>

      <Callout type="success" title="Fair Annuity Pricing">
        <p>
          If <InlineMath>{`\\ddot{a}_{65} = 14.2`}</InlineMath>, then:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Fair premium for $1/year annuity: <strong>$14.20</strong></li>
          <li>With $100,000 premium: fair payout is <InlineMath>{`\\frac{\\$100,000}{14.2} = \\$7,042/\\text{year}`}</InlineMath></li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Actual Market Rates</h3>

      <p className="mb-4">
        In practice, insurance companies don't offer fair annuities. They add "loading":
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Administrative costs (5%)</li>
        <li>Profit margin (3-5%)</li>
        <li>Capital reserve requirements (5%)</li>
        <li>Adverse selection buffer (2%)</li>
      </ul>

      <p className="mb-4">
        Result: A $100,000 premium might buy only <strong>$6,000/year</strong> instead of
        $7,042—about 15% less than the actuarially fair amount.
      </p>

      <p className="text-dark-400 italic">
        This loading represents what tontines can potentially save. But first: is the
        classic tontine from Part 1 actuarially fair?
      </p>
    </LessonLayout>
  );
}
