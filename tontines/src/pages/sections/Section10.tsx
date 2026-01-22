import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Mortality Credit</h2>

      <p className="mb-4">
        Tontine returns exceed pure investment returns. The extra yield comes from
        surviving members inheriting the shares of those who die. This is the
        <strong> mortality credit</strong>—the economic heart of the tontine.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Decomposing the Payout</h3>

      <Definition title="Mortality Credit">
        <p>
          The total payout to a survivor can be decomposed into two parts:
        </p>
        <MathBlock>
          {`\\text{Total Payout} = \\text{Investment Return} + \\text{Mortality Credit}`}
        </MathBlock>
        <p className="mt-2">
          The mortality credit is the extra income from deceased members' shares
          being redistributed to survivors.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Formula</h3>

      <p className="mb-4">
        For a simple case where everyone has equal shares:
      </p>

      <MathBlock>
        {`\\text{Mortality Credit} = \\frac{d}{n} \\times r \\times \\frac{P}{n}`}
      </MathBlock>

      <p className="mb-4">
        Where <InlineMath>d</InlineMath> is deaths, <InlineMath>n</InlineMath> is
        survivors, <InlineMath>r</InlineMath> is return rate, and <InlineMath>P</InlineMath>
        is pool value.
      </p>

      <Example title="Year 5 Decomposition">
        <p className="mb-3">From our earlier calculation:</p>
        <ul className="space-y-2 text-sm">
          <li>Pool: <InlineMath>P_5 = \$10,505,000</InlineMath></li>
          <li>Members at start of year: 95</li>
          <li>Deaths this year: 2</li>
          <li>Survivors: 93</li>
        </ul>

        <p className="mt-4 mb-2"><strong>Your share at start of year:</strong></p>
        <MathBlock>
          {`\\frac{\\$10,505,000}{95} = \\$110,579`}
        </MathBlock>

        <p className="mt-4 mb-2"><strong>Your pure investment return:</strong></p>
        <MathBlock>
          {`\\$110,579 \\times 0.04 = \\$4,423`}
        </MathBlock>

        <p className="mt-4 mb-2"><strong>Mortality credit (from 2 deaths):</strong></p>
        <MathBlock>
          {`\\frac{2 \\times \\$110,579 \\times 0.04}{93} = \\$95`}
        </MathBlock>

        <p className="mt-4 text-emerald-400">
          <strong>Total: </strong>
          <InlineMath>\$4,423 + \$95 = \$4,518</InlineMath> ✓
        </p>
        <p className="mt-2 text-dark-400">
          Mortality credit is 2.1% of your payout this year.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Growth Over Time</h3>

      <p className="mb-4">
        As the pool ages and more members die, the mortality credit grows dramatically:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Year</th>
              <th className="pb-2">Investment Return</th>
              <th className="pb-2">Mortality Credit</th>
              <th className="pb-2">MC as % of Total</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">1</td>
              <td className="py-2">$4,000</td>
              <td className="py-2">$40</td>
              <td className="py-2">1%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">10</td>
              <td className="py-2">$4,800</td>
              <td className="py-2">$1,182</td>
              <td className="py-2">20%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">20</td>
              <td className="py-2">$6,350</td>
              <td className="py-2">$6,350</td>
              <td className="py-2">50%</td>
            </tr>
            <tr>
              <td className="py-2">30</td>
              <td className="py-2">$9,600</td>
              <td className="py-2">$38,400</td>
              <td className="py-2">80%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="The Key Insight">
        <p>
          In late years, <em>most</em> of your income comes from the mortality credit,
          not investment returns. This is why tontines can provide growing income in
          retirement—exactly when you might need it most for healthcare costs.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why It Matters</h3>

      <p className="mb-4">
        The mortality credit is "free" in the sense that no insurance company takes a cut.
        In a traditional annuity, the company absorbs longevity risk and charges for it.
        In a tontine, survivors directly benefit from mortality—creating efficiency.
      </p>

      <p className="text-dark-400 italic">
        But what happens to the last few survivors? The mortality credit can become
        extreme. Let's see why this is problematic.
      </p>
    </LessonLayout>
  );
}
