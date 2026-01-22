import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Annuity Advantages</h2>

      <p className="mb-4">
        While tontines offer efficiency benefits, annuities have their own compelling
        advantages. For many retirees, these advantages outweigh the cost difference.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantage 1: Guaranteed Income</h3>

      <Definition title="The Annuity Guarantee">
        <p>
          A life annuity promises a <strong>fixed payment</strong> <InlineMath>A</InlineMath> every
          year, regardless of:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>How long you live</li>
          <li>Market performance</li>
          <li>Interest rate changes</li>
          <li>How other annuitants fare</li>
        </ul>
        <p className="mt-2">
          This guarantee is backed by insurance company capital and regulatory oversight.
        </p>
      </Definition>

      <p className="mb-4">
        For retirees who value certainty, this guarantee is invaluable. You know
        exactly what you'll receive, forever.
      </p>

      <Example title="Budgeting with Certainty">
        <p className="mb-3">
          Margaret, age 65, has fixed monthly expenses of $3,000 for housing, utilities,
          and healthcare.
        </p>
        <p className="mb-3">
          <strong>With a $500/month annuity guarantee:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Social Security: $2,000/month</li>
          <li>Annuity: $500/month</li>
          <li>Pension: $600/month</li>
          <li><span className="text-emerald-400 font-semibold">Total guaranteed: $3,100/month</span></li>
        </ul>
        <p className="text-emerald-400">
          Margaret's essential expenses are covered by guaranteed income. She can sleep
          soundly regardless of market conditions.
        </p>
      </Example>

      <Callout type="info" title="The Value of Certainty">
        <p>
          Behavioral economists have found that people value certainty disproportionately.
          The psychological comfort of knowing <em>exactly</em> what you'll receive can
          be worth the premium—especially for risk-averse individuals.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantage 2: Adverse Selection Management</h3>

      <p className="mb-4">
        Remember that annuity buyers tend to be healthier than average. Insurance
        companies have decades of experience managing this:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Underwriting:</strong> Health questionnaires identify high-risk applicants
        </li>
        <li>
          <strong>Pricing adjustments:</strong> Rates reflect expected buyer health
        </li>
        <li>
          <strong>Product design:</strong> Features that appeal to average-health buyers
        </li>
      </ul>

      <p className="mb-4">
        Within an annuity product, adverse selection is already priced in. You don't
        compete directly against healthier members.
      </p>

      <Example title="Tontine Selection Risk">
        <p className="mb-3">
          In a tontine, if you join a pool where everyone else is extremely healthy:
        </p>
        <MathBlock>
          {`E[\\text{Your payout}] < \\text{Fair value}`}
        </MathBlock>
        <p className="mt-3">
          The healthy members will likely outlive you, capturing more of the mortality credits.
          With annuities, the insurance company bears this selection risk, not you.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantage 3: Established Market</h3>

      <p className="mb-4">
        The annuity market is mature, well-regulated, and consumer-friendly:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Regulatory Protection</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-dark-300">
            <li>State insurance guaranty funds</li>
            <li>Capital adequacy requirements</li>
            <li>Consumer disclosure rules</li>
            <li>Complaints and dispute resolution</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Market Infrastructure</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-dark-300">
            <li>Multiple competing providers</li>
            <li>Transparent quote comparison</li>
            <li>Financial advisor expertise</li>
            <li>Standard contract terms</li>
          </ul>
        </div>
      </div>

      <Callout type="warning" title="Tontine Legal Status">
        <p>
          Tontines exist in a regulatory gray area in many jurisdictions. They were
          banned in some U.S. states in the early 20th century due to abuses. While
          modern tontine proposals are more carefully designed, the legal framework
          is still developing.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantage 4: Simplicity</h3>

      <p className="mb-4">
        An annuity is "set and forget." Once purchased:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>No investment decisions</li>
        <li>No monitoring required</li>
        <li>No rebalancing</li>
        <li>No worrying about market crashes</li>
        <li>Payments arrive automatically</li>
      </ul>

      <p className="mb-4">
        A tontine requires ongoing attention—understanding payout variability,
        monitoring the pool, and potentially making investment choices.
      </p>

      <Example title="Cognitive Load in Retirement">
        <p className="mb-3">
          Consider James, age 85, experiencing mild cognitive decline. His financial
          management capabilities are diminishing.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
            <p className="text-emerald-400 font-bold mb-2">Annuity</p>
            <p className="text-sm text-dark-300">
              Same $2,000 check arrives every month. No decisions required.
              Family members can easily verify income is arriving.
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
            <p className="text-amber-400 font-bold mb-2">Tontine</p>
            <p className="text-sm text-dark-300">
              Payments vary. Last month was $1,800, this month $2,100.
              Requires understanding why. May cause confusion or anxiety.
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summary: The Annuity Value Proposition</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Advantage</th>
              <th className="pb-2">Benefit</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-blue-400">Guaranteed income</td>
              <td className="py-2">Certainty for budgeting and peace of mind</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-blue-400">Selection management</td>
              <td className="py-2">Insurer bears adverse selection risk</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-blue-400">Established market</td>
              <td className="py-2">Regulatory protection, competition, expertise</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-blue-400">Simplicity</td>
              <td className="py-2">No decisions, monitoring, or cognitive load</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-dark-400 italic">
        We've seen the qualitative advantages of each. But which is actually
        better? To answer this rigorously, we need to compare them mathematically.
      </p>
    </LessonLayout>
  );
}
