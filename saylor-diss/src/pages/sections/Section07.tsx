import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-semibold mb-4">Modes of Behavior</h2>

      <p className="my-4">
        The model presented in the previous section outlines a negative feedback policy loop. For
        moderate perturbations, this system is stable. However, there are situations under which
        the political system proves incapable of coping with disturbance and the moderating
        legislative feedback loop fails.
      </p>

      {/* When the System Fails */}
      <h3 className="text-xl font-semibold mt-8 mb-4">When Popular Discontent Becomes Intolerable</h3>

      <p className="my-4">
        When popular discontent becomes intolerable, the lower class is apt to bypass the legislative
        process, actively opposing the policies of the executive and replacing members of the
        legislature with more favorable representatives.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Rebellion Threshold:</strong> Popular uprisings can take many different forms,
          but all are characterized by an increase in unrest and violent opposition to government
          policies. If the people perceive the "injustice" to be due to biased legislation, they
          are likely to overturn the authority of that body, or sharply alter its political makeup.
        </p>
      </Callout>

      {/* Rebellion Against Executive */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Rebellion Against the Executive</h3>

      <p className="my-4">
        If injustice is due to the "corrupt" policies of the executive (be he prince, president,
        or magistrate), he is likely to be stripped of power by the masses. These actions constitute
        the political process of <strong className="text-indigo-400">rebellion</strong>, and can
        also serve as a powerful force for stability in society, tending to minimize the amount of
        social discontent.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "The populace is like a wild animal which, although it is kept bound in chains by the fear
        arising from the prince's threats and beatings, yet when set free, it turns upon anyone
        who might try to bind it again."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli (paraphrased)</footer>
      </blockquote>

      {/* Destructive Cycles */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Destructive Cycles</h3>

      <p className="my-4">
        However, not all political interactions lead to stability. Civil unrest can cause the
        polarization of society. All factions are caught up in the turbulence of political conflict,
        and violent measures tend to undercut the position of the moderates, causing escalation.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-red-400 mb-2">Escalation Dynamics</h4>
          <p className="text-sm text-dark-300">
            More violence eventually leads to a decrease in economic productivity. This results
            in even more deprivation and discontent. This destructive cycle may cause enormous
            damage to the economy before it is halted.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Moderate Undermining</h4>
          <p className="text-sm text-dark-300">
            Violent political conflict tends to undercut moderates on both sides. As extremism
            grows, the middle ground shrinks, making compromise increasingly difficult.
          </p>
        </Card>
      </CardGrid>

      {/* Four Modes of Behavior */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Four Modes of Behavior</h3>

      <p className="my-4">
        The model described herein has the capability to produce all of these modes of behavior,
        from stable accommodation to catastrophic failure. Since it is necessary to make a number
        of assumptions at each stage in an endeavor such as this one, Saylor has attempted to use
        Machiavelli's writings as a base wherever possible.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-4">System Behavior Modes</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
            <div>
              <p className="font-semibold text-green-400">Stable Equilibrium</p>
              <p className="text-sm text-dark-400">System returns to balance after minor disturbances. Normal legislative process handles discontent.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-yellow-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
            <div>
              <p className="font-semibold text-yellow-400">Oscillation</p>
              <p className="text-sm text-dark-400">System swings between states as opposing factions gain and lose influence. Damped or sustained cycles.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
            <div>
              <p className="font-semibold text-orange-400">Rebellion & Recovery</p>
              <p className="text-sm text-dark-400">Discontent exceeds threshold, triggering rebellion. System may recover to new equilibrium after upheaval.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
            <div>
              <p className="font-semibold text-red-400">Catastrophic Failure</p>
              <p className="text-sm text-dark-400">Destructive feedback loops overwhelm the system. Economic collapse, civil war, or state failure.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mathematical Consistency */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Testing Machiavelli's Consistency</h3>

      <p className="my-4">
        In a general sense, this model can be considered an exploration of the mathematical
        consistency of Machiavelli's findings in the <em>Discourses</em> given his assumptions.
        However, in building any model, one is forced to consider the fundamental causal
        relationships involved.
      </p>

      <Callout type="note">
        <p>
          <strong>Model Purpose:</strong> Thus, this thesis also constitutes an examination of
          the conditions necessary in order to maintain a stable republic—answering questions
          like: What happens when an executive tries to redistribute wealth? How does the system
          respond to external shocks like famine? Can a competent executive overcome systemic
          resistance to reform?
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              The system can exhibit <strong>four behavioral modes</strong>: stable equilibrium,
              oscillation, rebellion with recovery, and catastrophic failure.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              When discontent exceeds a threshold, <strong>rebellion bypasses</strong> the normal
              legislative process—violently adjusting power.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Violence can trigger <strong>destructive feedback cycles</strong> that reduce
              productivity, increase deprivation, and escalate conflict.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              The model tests whether Machiavelli's political insights are <strong>mathematically
              consistent</strong> with his philosophical assumptions.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
