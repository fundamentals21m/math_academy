import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Fairness Problem</h2>

      <p className="mb-4">
        In the classic tontine from Part 1, payouts ranged from 4% to 800%. Someone who
        dies early gets little. Someone who lives long gets a fortune. Is this "fair"?
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Two Perspectives</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-rose-500">
          <p className="text-rose-400 font-bold mb-2">The Early Death</p>
          <p className="text-sm text-dark-300">
            "I invested $100,000 and only got a few years of $4,000 payouts before dying.
            My total return was maybe $20,000. That doesn't seem fair!"
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">The Long Liver</p>
          <p className="text-sm text-dark-300">
            "I invested $100,000 and lived to receive $800,000/year. That's incredibly
            generous! But was it fair to the others?"
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Actuarial Answer</h3>

      <p className="mb-4">
        Actuaries have a precise definition of "fair" that resolves this apparent paradox.
        The key insight: we must evaluate fairness <em>before</em> we know who will live
        or die—using expected values.
      </p>

      <Definition title="Actuarial Fairness">
        <p>
          A financial contract is <strong>actuarially fair</strong> if:
        </p>
        <p className="mt-2 text-emerald-400 font-semibold">
          Expected Present Value of Benefits = Premium Paid
        </p>
        <p className="mt-2">
          That is, on average (accounting for mortality probabilities), you get back
          what you put in.
        </p>
      </Definition>

      <Callout type="info" title="Ex Ante vs. Ex Post">
        <p>
          <strong>Ex ante</strong> (before the fact): Each member has a fair deal in expectation.
        </p>
        <p className="mt-2">
          <strong>Ex post</strong> (after the fact): Some members gain, others lose.
        </p>
        <p className="mt-2">
          Actuarial fairness is an <em>ex ante</em> concept. After outcomes are realized,
          there will always be "winners" and "losers"—that's the nature of pooling.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why This Matters</h3>

      <p className="mb-4">
        If we can show a tontine is actuarially fair, then:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>No one is systematically exploited</li>
        <li>The expected return equals the investment</li>
        <li>Variations come from luck, not unfair design</li>
      </ul>

      <p className="text-dark-400 italic">
        To calculate actuarial fairness, we need to combine two things: survival
        probabilities (which we have) and the time value of money. Let's develop
        that next.
      </p>
    </LessonLayout>
  );
}
