import { LessonLayout } from '@/components/layout';
import { Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Last Survivor Problem</h2>

      <p className="mb-4">
        We've seen payouts grow as survivors dwindle. Let's follow this to its
        logical extreme—and understand why classic tontines have serious problems.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Endgame</h3>

      <Example title="Year 40: One Survivor Remains">
        <p className="mb-3">At age 105, one person remains:</p>
        <MathBlock>
          {`P_{40} \\approx \\$20,000,000 \\text{ (pool has doubled from mortality)}`}
        </MathBlock>
        <MathBlock>
          {`\\text{Investment income} = \\$20,000,000 \\times 0.04 = \\$800,000`}
        </MathBlock>
        <p className="mt-4 text-emerald-400 text-lg">
          The last survivor gets <strong>$800,000 per year</strong>—800% of their original
          contribution!
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why This Is Problematic</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-rose-500">
          <p className="text-rose-400 font-bold mb-2">Problem 1: Wildly Variable Payouts</p>
          <p className="text-sm text-dark-300">
            Payouts range from 4% to 800%. This makes financial planning impossible.
            How do you budget when your income might be 20x different next year?
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-2">Problem 2: Perverse Incentives</p>
          <p className="text-sm text-dark-300">
            The fewer survivors, the more each gets. This created real and imagined
            incentives for murder in historical tontines—fueling their bad reputation.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-purple-500">
          <p className="text-purple-400 font-bold mb-2">Problem 3: Gambling Characteristics</p>
          <p className="text-sm text-dark-300">
            The classic tontine feels like gambling: you're betting on outliving others.
            Regulators viewed this as socially undesirable.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Mathematical Issue</h3>

      <p className="mb-4">
        In a classic tontine, the payout grows as <InlineMath>1/n</InlineMath> where
        <InlineMath>n</InlineMath> is survivors. As <InlineMath>{'n \\to 1'}</InlineMath>,
        payouts explode:
      </p>

      <MathBlock>
        {`D_t \\propto \\frac{1}{n_t} \\xrightarrow{n \\to 1} \\infty`}
      </MathBlock>

      <Callout type="warning" title="Not Optimal for Retirement">
        <p>
          Early retirees (in their 60s-70s) get relatively modest payouts when they're
          active and might want to travel. Late survivors (in their 90s+) get enormous
          payouts when they may have limited ability to spend. The classic tontine's
          payout profile is <em>backwards</em> from what most people need.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Can We Do Better?</h3>

      <p className="mb-4">
        The core insight—pooling mortality risk—is sound. The problem is the <em>design</em>.
        Modern mathematical tools show how to create tontines with:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Smooth, predictable payout growth</li>
        <li>No last-survivor jackpot</li>
        <li>Optimal consumption profiles</li>
        <li>Fairness across different ages and health statuses</li>
      </ul>

      <p className="text-dark-400 italic">
        Part 2 develops the mathematical machinery to design better tontines. We'll
        start by asking: what does "fair" even mean for a tontine?
      </p>
    </LessonLayout>
  );
}
