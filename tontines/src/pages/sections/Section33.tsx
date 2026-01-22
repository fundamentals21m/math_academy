import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Group Self-Annuitization (GSA)</h2>

      <p className="mb-4">
        In 2005, economists Piggott, Valdez, and Detzel introduced a revolutionary concept:
        <strong> Group Self-Annuitization (GSA)</strong>. This design combines the risk-sharing
        benefits of tontines with professional asset management and explicit mortality credits.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Core Design Principles</h3>

      <Definition title="Group Self-Annuitization (GSA)">
        <p>
          A cohort-based retirement pool where members:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Join together</strong> in age-based cohorts with ongoing enrollment</li>
          <li><strong>Pool capital</strong> under professional investment management</li>
          <li><strong>Receive explicit mortality credits</strong> when other members die</li>
          <li><strong>Share longevity risk</strong> among the group rather than transferring it to an insurer</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How GSA Works</h3>

      <p className="mb-4">
        The GSA structure follows a clear lifecycle:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <strong>Join a Cohort:</strong> Retirees join an age-appropriate cohort
            (e.g., 65-year-olds join together)
          </li>
          <li>
            <strong>Contribute Capital:</strong> Each member invests their retirement
            savings into the pool
          </li>
          <li>
            <strong>Professional Investment:</strong> Assets are invested in a diversified
            portfolio (typically 60% equities, 40% bonds)
          </li>
          <li>
            <strong>Annual Payouts:</strong> Each year, members receive payouts based on
            their share of the pool
          </li>
          <li>
            <strong>Mortality Credits:</strong> When members die, their remaining capital
            is distributed to survivors
          </li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The GSA Payout Formula</h3>

      <Definition title="GSA Annual Payment">
        <p>
          Each year, a member's payment depends on their capital share and the pool's performance:
        </p>
        <MathBlock>
          {`\\text{Payment}_t = \\text{Capital Share}_t \\times \\text{Payout Rate}_t`}
        </MathBlock>
        <p className="mt-3">
          Where the payout rate incorporates both investment returns and mortality credits:
        </p>
        <MathBlock>
          {`\\text{Payout Rate}_t = \\frac{\\text{Investment Return} + \\text{Mortality Credit}}{\\text{Pool Value}}`}
        </MathBlock>
      </Definition>

      <p className="mb-4 mt-6">
        The mortality credit is calculated explicitly. When a member dies, their remaining
        capital is redistributed proportionally to all survivors:
      </p>

      <MathBlock>
        {`\\text{Mortality Credit}_t = \\frac{\\sum_{\\text{deceased}} \\text{Capital}_{\\text{deceased}}}{N_{\\text{survivors}}}`}
      </MathBlock>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Numerical Example</h3>

      <Example title="First-Year GSA Payout">
        <p className="mb-3">
          Consider a GSA cohort with the following characteristics:
        </p>
        <div className="bg-dark-900 rounded p-3 mb-4">
          <ul className="space-y-1 text-sm">
            <li><strong>Members:</strong> 100 retirees, all age 65</li>
            <li><strong>Initial contribution:</strong> $100,000 each</li>
            <li><strong>Total pool:</strong> $10,000,000</li>
            <li><strong>Investment return:</strong> 6% = $600,000</li>
            <li><strong>Deaths in year 1:</strong> 1 member</li>
          </ul>
        </div>

        <p className="mb-3">
          <strong>Step 1:</strong> Calculate investment gain
        </p>
        <MathBlock>
          {`\\text{Investment Gain} = \\$10{,}000{,}000 \\times 0.06 = \\$600{,}000`}
        </MathBlock>

        <p className="mb-3 mt-4">
          <strong>Step 2:</strong> Calculate mortality credit (deceased member's share)
        </p>
        <MathBlock>
          {`\\text{Mortality Credit Pool} = \\$100{,}000 \\times 1.06 = \\$106{,}000`}
        </MathBlock>

        <p className="mb-3 mt-4">
          <strong>Step 3:</strong> Total distributable amount
        </p>
        <MathBlock>
          {`\\text{Total Distribution} = \\$600{,}000 + \\$106{,}000 = \\$706{,}000`}
        </MathBlock>

        <p className="mb-3 mt-4">
          <strong>Step 4:</strong> Per-survivor payout
        </p>
        <MathBlock>
          {`\\text{Payment per Survivor} = \\frac{\\$706{,}000}{99} = \\$7{,}131`}
        </MathBlock>

        <p className="mt-4 text-emerald-400">
          <strong>Effective yield:</strong> $7,131 / $100,000 = <strong>7.13%</strong>
        </p>
        <p className="text-dark-400 text-sm mt-2">
          This exceeds the 6% investment return due to the mortality credit boost.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Advantages of GSA</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">Transparency</p>
          <p className="text-sm text-dark-300">
            Mortality credits are calculated explicitly and distributed clearly.
            Members know exactly how payouts are determined.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-blue-400 font-bold mb-2">Flexibility</p>
          <p className="text-sm text-dark-300">
            New members can join existing cohorts. The pool grows organically
            as retirees opt in.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-purple-500">
          <p className="text-purple-400 font-bold mb-2">Professional Management</p>
          <p className="text-sm text-dark-300">
            Assets are managed by investment professionals following a disciplined
            strategy (typically 60/40).
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-2">No Insurer Risk</p>
          <p className="text-sm text-dark-300">
            Members bear longevity risk together. No insurance company can
            fail or change terms.
          </p>
        </div>
      </div>

      <Callout type="info" title="Cohort-Based vs. Open Pool">
        <p>
          GSA uses <strong>cohort-based</strong> design where members of similar ages join together.
          This simplifies actuarial calculations because all members have similar life expectancies.
          Compare this to "open pool" designs where members of different ages share a single pool—
          requiring complex age-weighting formulas.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">GSA vs. Traditional Annuities</h3>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="text-left border-b border-dark-700">
            <th className="pb-2">Feature</th>
            <th className="pb-2">GSA</th>
            <th className="pb-2">Traditional Annuity</th>
          </tr>
        </thead>
        <tbody className="text-dark-300">
          <tr className="border-b border-dark-800">
            <td className="py-2">Payment stability</td>
            <td className="py-2 text-amber-400">Variable</td>
            <td className="py-2 text-emerald-400">Guaranteed</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Expected return</td>
            <td className="py-2 text-emerald-400">Higher</td>
            <td className="py-2 text-amber-400">Lower</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Longevity risk bearer</td>
            <td className="py-2">Pool members</td>
            <td className="py-2">Insurance company</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Investment flexibility</td>
            <td className="py-2 text-emerald-400">Higher</td>
            <td className="py-2 text-amber-400">Limited</td>
          </tr>
          <tr>
            <td className="py-2">Insurer default risk</td>
            <td className="py-2 text-emerald-400">None</td>
            <td className="py-2 text-amber-400">Present</td>
          </tr>
        </tbody>
      </table>

      <p className="text-dark-400 italic">
        GSA represents a significant evolution in tontine design, making mortality credits
        explicit and pooling professional. But managing payment volatility requires additional
        mechanisms—which we'll see in Pooled Annuity Funds next.
      </p>
    </LessonLayout>
  );
}
