import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-semibold mb-4">General System Tendencies</h2>

      <p className="my-4">
        Having explored the model's behavior under various conditions, we can now draw some
        <strong className="text-indigo-400"> general conclusions</strong> about political systems
        as understood through Machiavelli's framework and system dynamics methodology.
      </p>

      {/* Social Inertia */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Social Inertia</h3>

      <p className="my-4">
        Perhaps the most striking finding is the tremendous <strong className="text-indigo-400">inertia</strong>
        of social systems. Once a political equilibrium is established—whether good or bad—it
        resists change with remarkable persistence.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Stability Through Friction</h4>
          <p className="text-sm text-dark-300">
            The competing interests of factions, which seem like sources of instability, actually
            provide stability by preventing any single group from pushing the system too far in
            one direction.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Resistance to Reform</h4>
          <p className="text-sm text-dark-300">
            Well-intentioned reforms trigger immediate backlash from disadvantaged groups, often
            reversing the reform before it can take effect.
          </p>
        </Card>
      </CardGrid>

      {/* Pluralism */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Necessity of Pluralism</h3>

      <p className="my-4">
        Machiavelli's advocacy for <strong className="text-indigo-400">mixed government</strong>
        is strongly supported by the model. Systems with distributed power exhibit:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>Greater resilience to external shocks</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>More effective dampening of oscillations</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>Self-correcting feedback mechanisms</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>Lower probability of catastrophic failure</span>
          </li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Let me say, therefore, that all the forms of government listed are defective... Thus,
        those who were prudent in establishing laws recognized this fact and, avoiding each of
        these forms in themselves, chose one that combined them all, judging such a government
        to be steadier and more stable."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 181</footer>
      </blockquote>

      {/* Counter-Intuitive Dynamics */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Counter-Intuitive Dynamics</h3>

      <p className="my-4">
        The model repeatedly demonstrates that <strong className="text-indigo-400">obvious
        solutions often backfire</strong>:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-white font-bold text-sm shrink-0">✗</span>
          <div>
            <p className="font-semibold text-dark-100">More Executive Power → More Stability</p>
            <p className="text-sm text-dark-400">Actually: stronger executives can amplify oscillations during crises.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-white font-bold text-sm shrink-0">✗</span>
          <div>
            <p className="font-semibold text-dark-100">Help the Poor → Less Inequality</p>
            <p className="text-sm text-dark-400">Actually: redistribution triggers backlash that can leave everyone worse off.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-white font-bold text-sm shrink-0">✗</span>
          <div>
            <p className="font-semibold text-dark-100">Reform → Improvement</p>
            <p className="text-sm text-dark-400">Actually: reform raises expectations and can trigger the J-curve to revolution.</p>
          </div>
        </div>
      </div>

      {/* The Difficulty of Change */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Difficulty of Intentional Change</h3>

      <Callout type="note">
        <p>
          <strong>Key Insight:</strong> Political systems are extraordinarily difficult to change
          intentionally. They exhibit strong homeostatic tendencies that resist intervention. Yet
          they can change rapidly and catastrophically in response to external shocks or the
          crossing of thresholds.
        </p>
      </Callout>

      <p className="my-4">
        This suggests that political actors should focus less on grand transformative schemes and
        more on:
      </p>

      <ul className="list-disc list-inside space-y-2 text-dark-300 my-4">
        <li>Maintaining system resilience against shocks</li>
        <li>Keeping discontent below rebellion thresholds</li>
        <li>Preserving the checks and balances of mixed government</li>
        <li>Accepting that some friction is functional, not dysfunctional</li>
      </ul>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              Political systems exhibit tremendous <strong>inertia</strong>—equilibria resist
              change through competing factional interests.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              <strong>Pluralism and mixed government</strong> provide stability through self-correcting
              feedback mechanisms.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              <strong>Obvious solutions often backfire</strong>—stronger executives, redistribution,
              and reform can all produce opposite effects.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              Focus on <strong>resilience and stability</strong> rather than grand transformation.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
