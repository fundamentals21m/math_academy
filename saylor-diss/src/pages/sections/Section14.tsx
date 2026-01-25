import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-semibold mb-4">The Equilibrium Case</h2>

      <p className="my-4">
        Having described the structure of the model, we now turn to the <strong className="text-indigo-400">findings</strong>—what
        happens when we run simulations? This section establishes the baseline: the{' '}
        <strong className="text-indigo-400">equilibrium case</strong> where the political system
        maintains stability.
      </p>

      {/* Baseline Calibration */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Baseline Calibration</h3>

      <p className="my-4">
        The equilibrium case represents a political system in balance. All major variables remain
        constant over time. This doesn't mean perfect harmony—there is still underlying discontent—but
        the system has found a sustainable configuration.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-4">Equilibrium Conditions</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-dark-400 text-sm mb-1">Freedom Level</p>
            <p className="text-dark-200">Moderate (≈50)</p>
          </div>
          <div>
            <p className="text-dark-400 text-sm mb-1">Economic Welfare</p>
            <p className="text-dark-200">Adequate for both classes</p>
          </div>
          <div>
            <p className="text-dark-400 text-sm mb-1">Executive Power</p>
            <p className="text-dark-200">Moderate (≈0.3-0.5)</p>
          </div>
          <div>
            <p className="text-dark-400 text-sm mb-1">Legislative Balance</p>
            <p className="text-dark-200">Mixed government</p>
          </div>
          <div>
            <p className="text-dark-400 text-sm mb-1">Discontent</p>
            <p className="text-dark-200">Present but tolerable</p>
          </div>
          <div>
            <p className="text-dark-400 text-sm mb-1">Production</p>
            <p className="text-dark-200">Stable output</p>
          </div>
        </div>
      </div>

      {/* Healthy Tension */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Healthy Tension</h3>

      <p className="my-4">
        In equilibrium, the system exhibits what Machiavelli called "healthy friction." The populace
        wants more freedom; the aristocracy wants less. These opposing forces create a dynamic
        balance that prevents either extreme.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-green-400 mb-2">Popular Discontent</h4>
          <p className="text-sm text-dark-300">
            Present but below rebellion threshold. The populace pushes for more freedom through
            legitimate protest, keeping aristocratic dominance in check.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Aristocratic Discontent</h4>
          <p className="text-sm text-dark-300">
            Also present but manageable. The aristocracy's desire to reduce popular freedom is
            balanced by fear of popular uprising.
          </p>
        </Card>
      </CardGrid>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "...in every republic there are two different inclinations; that of the people and that of
        the upper class, and that all the laws which are made in favor of liberty are born of the
        conflict between the two."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 183</footer>
      </blockquote>

      {/* Stability Mechanisms */}
      <h3 className="text-xl font-semibold mt-8 mb-4">What Maintains Stability?</h3>

      <p className="my-4">
        Several mechanisms work together to maintain equilibrium:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Negative Feedback Loop</p>
            <p className="text-sm text-dark-400">Rising discontent triggers legislative response, which reduces discontent.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Mixed Government</p>
            <p className="text-sm text-dark-400">No single faction dominates; competing interests balance each other.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Executive Moderation</p>
            <p className="text-sm text-dark-400">The executive dampens extreme swings in policy, smoothing the system response.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Rebellion Threat</p>
            <p className="text-sm text-dark-400">The possibility of uprising constrains elite behavior, preventing extreme exploitation.</p>
          </div>
        </div>
      </div>

      {/* Implications */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Implications for Policy</h3>

      <Callout type="note">
        <p>
          <strong>Don't Fix What Isn't Broken:</strong> The equilibrium case suggests that a well-functioning
          political system should not be disturbed unnecessarily. The friction and discontent that
          seem problematic are actually essential to maintaining balance. Attempts to eliminate
          conflict entirely may destabilize the system.
        </p>
      </Callout>

      <p className="my-4">
        With this baseline established, subsequent sections explore what happens when the system is
        disturbed—through executive action, external shocks, or changes in parameters.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              <strong>Equilibrium</strong> means stability, not harmony—discontent exists but
              remains below dangerous thresholds.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              <strong>Healthy friction</strong> between classes is essential—it produces the
              laws that maintain liberty.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Stability is maintained by <strong>negative feedback, mixed government, executive
              moderation, and rebellion threat</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              <strong>Don't disturb equilibrium unnecessarily</strong>—the friction is functional,
              not dysfunctional.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
