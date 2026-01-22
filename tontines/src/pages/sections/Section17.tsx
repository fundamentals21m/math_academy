import { LessonLayout } from '@/components/layout';
import { Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Heterogeneity Problem</h2>

      <p className="mb-4">
        Real tontine pools have members with different ages, sexes, and health statuses.
        If everyone contributes equally and receives equal shares, the healthier members
        systematically benefit at the expense of the sicker ones.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">A Simple Example</h3>

      <Example title="Alice vs. Bob">
        <p className="mb-3">Two members join a tontine, both age 65:</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-1">Alice (Female)</p>
            <p className="text-sm text-dark-300">
              Life expectancy: <InlineMath>e_{'{65}'} = 20.7</InlineMath> years
            </p>
          </div>
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-amber-400 font-bold mb-1">Bob (Male)</p>
            <p className="text-sm text-dark-300">
              Life expectancy: <InlineMath>e_{'{65}'} = 18.0</InlineMath> years
            </p>
          </div>
        </div>
        <p className="mb-2">Both invest $100,000 and receive equal shares.</p>
        <p className="mb-4"><strong>Is this fair?</strong></p>

        <p className="mb-2">Calculate their EPVs:</p>
        <MathBlock>
          {`\\text{Alice's EPV} \\approx \\$108,000`}
        </MathBlock>
        <MathBlock>
          {`\\text{Bob's EPV} \\approx \\$92,000`}
        </MathBlock>
        <p className="mt-4 text-rose-400">
          Alice is expected to gain $8,000 at Bob's expense!
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sources of Heterogeneity</h3>

      <div className="space-y-3 mb-6">
        <div className="bg-dark-800 rounded-lg p-3">
          <p className="text-emerald-400 font-bold">Age</p>
          <p className="text-sm text-dark-300">
            A 60-year-old has longer expected survival than a 70-year-old.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <p className="text-emerald-400 font-bold">Sex</p>
          <p className="text-sm text-dark-300">
            Women live ~3 years longer than men on average.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <p className="text-emerald-400 font-bold">Health</p>
          <p className="text-sm text-dark-300">
            Smokers, those with chronic conditions, etc. have higher mortality.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <p className="text-emerald-400 font-bold">Socioeconomic Status</p>
          <p className="text-sm text-dark-300">
            Wealthier, educated people live significantly longer.
          </p>
        </div>
      </div>

      <Callout type="warning" title="The Unfairness">
        <p>
          In an equal-share tontine:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Healthier members have EPV {'>'} contribution (they gain)</li>
          <li>Sicker members have EPV {'<'} contribution (they lose)</li>
        </ul>
        <p className="mt-2">
          This creates adverse selection: healthy people want to join, sick people don't.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Solution Preview</h3>

      <p className="mb-4">
        To make tontines fair for heterogeneous groups, we need to adjust payouts
        based on each member's mortality risk. Members with lower survival probability
        should receive higher payouts per dollar contributed.
      </p>

      <p className="text-dark-400 italic">
        We'll formalize this in the "natural tontine" design. But first, we need
        another mathematical tool: utility theory, which tells us what payout
        profile is <em>optimal</em>, not just fair.
      </p>
    </LessonLayout>
  );
}
