import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-semibold mb-4">Executive Action Effects</h2>

      <p className="my-4">
        What happens when an executive decides to intervene in the economic distribution? This
        section examines the model's response to <strong className="text-indigo-400">deliberate
        executive action</strong>—specifically, attempts to redistribute wealth from the
        aristocracy to the populace.
      </p>

      {/* The Scenario */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Scenario: Redistributive Policy</h3>

      <p className="my-4">
        Consider an executive who decides to increase the share of economic output going to the
        populace. This might be motivated by genuine concern for the poor, desire to build popular
        support, or simply belief that greater equality is just.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-3">Policy Change</h4>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-dark-400">Before</p>
            <p className="text-dark-200">50% to populace</p>
          </div>
          <div className="text-2xl text-indigo-400">→</div>
          <div className="text-center">
            <p className="text-sm text-dark-400">After</p>
            <p className="text-dark-200">60% to populace</p>
          </div>
        </div>
      </div>

      {/* Initial Response */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Initial Response</h3>

      <p className="my-4">
        Initially, things look promising. Popular welfare increases. Popular discontent falls.
        But the aristocracy notices the change and responds:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-green-400 mb-2">Populace (Short-term)</h4>
          <p className="text-sm text-dark-300">
            Economic welfare rises. Discontent temporarily falls. Support for the executive increases.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Aristocracy (Short-term)</h4>
          <p className="text-sm text-dark-300">
            Economic welfare falls. Discontent rises sharply. Begin to mobilize political opposition.
          </p>
        </Card>
      </CardGrid>

      {/* The Backlash */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Aristocratic Backlash</h3>

      <p className="my-4">
        The aristocracy's response triggers a cascade of effects:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">1. Legislative Pressure</h4>
          <p className="text-dark-300 text-sm">
            Aristocratic discontent increases their legislative influence. They push for laws
            reversing the redistribution.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">2. Economic Resistance</h4>
          <p className="text-dark-300 text-sm">
            Aristocrats may reduce their productive activities, hoard resources, or engage in
            capital flight—reducing total output.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">3. Executive Opposition</h4>
          <p className="text-dark-300 text-sm">
            If discontent rises high enough, aristocrats may support removal of the executive—through
            legal or illegal means.
          </p>
        </div>
      </div>

      {/* System Oscillation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">System Oscillation</h3>

      <p className="my-4">
        The model shows that without sufficient executive power to maintain the new policy, the
        system begins to <strong className="text-indigo-400">oscillate</strong>:
      </p>

      <Callout type="warning">
        <p>
          <strong>The Oscillation Pattern:</strong> Aristocratic backlash → policy reversal →
          popular discontent rises → popular pressure → policy swings back → aristocratic
          discontent rises again → ... This cycle can continue indefinitely or escalate to
          rebellion.
        </p>
      </Callout>

      {/* When It Gets Worse */}
      <h3 className="text-xl font-semibold mt-8 mb-4">When Redistribution Leads to Rebellion</h3>

      <p className="my-4">
        In some scenarios, the executive's attempt to help the populace backfires completely:
      </p>

      <div className="bg-dark-900 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-red-400 mb-3">Worst Case Scenario</h4>
        <ol className="space-y-2 text-dark-300 text-sm">
          <li>1. Executive redistributes wealth to populace</li>
          <li>2. Aristocratic discontent triggers strong backlash</li>
          <li>3. Aristocracy gains legislative control, reverses policy</li>
          <li>4. Populace now worse off than before (expectations raised then dashed)</li>
          <li>5. Popular discontent exceeds rebellion threshold</li>
          <li>6. Rebellion destroys economic productivity</li>
          <li>7. <strong>Everyone ends up worse off</strong></li>
        </ol>
      </div>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "The political leader faces the classic dilemma. He can either continue with his current
        policies and inevitably worsen the turmoil that is to ensue, or he can attempt to adjust
        rationally in order to arrive at the new equilibrium state—accepting a much higher amount
        of controversy and risking the disintegration of his political power base."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Saylor's analysis</footer>
      </blockquote>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              Executive attempts to <strong>redistribute wealth</strong> trigger aristocratic
              backlash through legislative and economic channels.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              Without sufficient power to maintain the policy, the system <strong>oscillates</strong>
              between favoring populace and aristocracy.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              <strong>Raised then dashed expectations</strong> can be worse than the original
              situation—leading to rebellion.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              The executive faces a <strong>dilemma</strong>: continue failing policies or risk
              power base with rational adjustment.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
