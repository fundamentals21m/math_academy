import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-semibold mb-4">The Competent Executive</h2>

      <p className="my-4">
        The previous sections showed that executive action often backfires. But what if the
        executive is unusually <strong className="text-indigo-400">competent</strong>—able to
        exercise more power and influence than normal? Does greater ability lead to better outcomes?
      </p>

      {/* Executive Competence */}
      <h3 className="text-xl font-semibold mt-8 mb-4">What Is Executive Competence?</h3>

      <p className="my-4">
        In the model, <strong className="text-indigo-400">Executive Competence</strong> is a measure
        of how effectively the executive is able to aggrandize both Executive Legislative Power
        and Executive Power. A more competent executive can:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Greater Legislative Influence</h4>
          <p className="text-sm text-dark-300">
            More effectively shape the laws and policies that emerge from the legislative process.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Greater Implementation Power</h4>
          <p className="text-sm text-dark-300">
            More effectively translate policy intentions into actual outcomes on the ground.
          </p>
        </Card>
      </CardGrid>

      {/* The Counter-Intuitive Finding */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Counter-Intuitive Finding</h3>

      <p className="my-4">
        One would naturally expect an increase in the strength of the executive to result in a
        more stable response to the production shock. However, <strong className="text-indigo-400">this
        is not necessarily the case</strong>.
      </p>

      <Callout type="warning">
        <p>
          <strong>Surprising Result:</strong> If we increase the level of Executive Competence
          (which is a measure of how effectively the executive is able to aggrandize both
          Executive Legislative Power and Executive Power), we find that this actually
          <em> exacerbates</em> the fluctuations.
        </p>
      </Callout>

      {/* Why Competence Backfires */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Why Competence Can Backfire</h3>

      <p className="my-4">
        The important overlooked process here is the effect of executive desires immediately
        following the production shock:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Step 1: The Executive's Initial Response</h4>
          <p className="text-dark-300 text-sm">
            After the shock, there is less total output to be distributed. However, the executive
            is still formulating policies to maintain Economic Welfare equal to its pre-shock
            equilibrium level.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Step 2: Overcompensation</h4>
          <p className="text-dark-300 text-sm">
            Because the executive is monitoring popular welfare (not aristocratic welfare), his
            influence causes the output fraction allocated to the populace to increase—at the
            aristocracy's expense.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Step 3: Aristocratic Backlash</h4>
          <p className="text-dark-300 text-sm">
            This causes discontent to build up among the aristocracy, leading to an increase in
            political involvement and eventually resulting in a swing in the other direction.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-red-400 mb-2">Step 4: Amplified Oscillation</h4>
          <p className="text-dark-300 text-sm">
            The stronger the power of the executive, the stronger this effect is. Thus, we
            appear to have ignored some crucial process—executive desires immediately following
            the production shock.
          </p>
        </div>
      </div>

      {/* The Policy Dilemma */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Executive's Dilemma</h3>

      <p className="my-4">
        A stabilizing policy must include an adjustment of executive economic desires. In order
        to prevent exacerbating the economic turmoil, it is necessary for the executive to lower
        his own economic expectations with the decline of productivity.
      </p>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Ideally, he needs to adjust instantaneously to the production shock, lowering his own
        economic desires by 15%. However, this elicits a response identical to that shown in
        Figure 4.2, increasing drastically the level of popular unrest and quickening the
        downfall of the current executive administration."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Saylor's analysis</footer>
      </blockquote>

      <Callout type="note">
        <p>
          <strong>No Good Options:</strong> The political leader faces the classic dilemma. He
          can either continue with his current policies and inevitably worsen the turmoil that
          is to ensue, or he can attempt to adjust rationally in order to arrive at the new
          equilibrium state—accepting a much higher amount of controversy and risking the
          disintegration of his political power base.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              <strong>Executive competence</strong> means greater ability to influence both
              legislation and policy implementation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              Counter-intuitively, <strong>greater competence can exacerbate oscillations</strong>
              because the executive's overcompensation is more effective.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Stabilization requires the executive to <strong>lower his own expectations</strong>—but
              this triggers popular backlash.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              The executive faces an <strong>impossible choice</strong>: worsen turmoil with
              current policies or risk power base by adjusting rationally.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
