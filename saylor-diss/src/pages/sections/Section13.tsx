import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-semibold mb-4">Resistance and Rebellion</h2>

      <p className="my-4">
        This section describes the processes of <strong className="text-indigo-400">resistance</strong> and{' '}
        <strong className="text-indigo-400">rebellion</strong>—the non-legislative political processes
        that occur when normal channels fail to address discontent. These represent the "safety
        valves" and breaking points of the political system.
      </p>

      {/* Protest */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Protest and Resistance</h3>

      <p className="my-4">
        When discontent rises above normal levels, the populace begins to <strong>protest</strong>.
        Protest represents organized opposition to government policy that remains within legal or
        semi-legal bounds—demonstrations, petitions, strikes, civil disobedience.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-3">Factors Affecting Protest</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">+</span>
            <span><strong>Popular Discontent:</strong> Higher discontent increases protest activity</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">+</span>
            <span><strong>Freedom Level:</strong> More freedom allows more effective protest organization</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">+</span>
            <span><strong>Economic Welfare:</strong> Higher welfare provides resources for political action</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">-</span>
            <span><strong>Executive Repression:</strong> Strong executive can suppress protest activity</span>
          </li>
        </ul>
      </div>

      {/* Rebellion Threshold */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Rebellion Threshold</h3>

      <p className="my-4">
        When protest proves ineffective and discontent continues to rise, the system reaches a
        <strong className="text-indigo-400"> rebellion threshold</strong>. Beyond this point, the
        populace abandons legal channels entirely and turns to violent opposition.
      </p>

      <Callout type="warning">
        <p>
          <strong>Critical Transition:</strong> Rebellion is not simply "more protest"—it represents
          a qualitative shift in political behavior. The rules of the game change. Violence becomes
          the primary mechanism for political change.
        </p>
      </Callout>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Against the Legislature</h4>
          <p className="text-sm text-dark-300">
            If the perceived injustice stems from biased legislation, rebellion targets the
            legislative body—replacing representatives, dissolving assemblies, or establishing
            new political institutions.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-red-400 mb-2">Against the Executive</h4>
          <p className="text-sm text-dark-300">
            If injustice is attributed to executive corruption or tyranny, rebellion aims to
            remove the ruler—deposition, exile, or execution. This can dramatically reset
            Executive Power.
          </p>
        </Card>
      </CardGrid>

      {/* Effects of Rebellion */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Effects of Rebellion</h3>

      <p className="my-4">
        Rebellion has several interconnected effects on the political system:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">1. Power Redistribution</h4>
          <p className="text-dark-300 text-sm">
            Successful rebellion shifts legislative influence toward the populace and may dramatically
            reduce Executive Power—sometimes to zero.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">2. Economic Disruption</h4>
          <p className="text-dark-300 text-sm">
            Violence reduces productivity. Farms go untended, trade is disrupted, capital is
            destroyed. This can trigger the destructive economic spiral.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">3. Escalation Risk</h4>
          <p className="text-dark-300 text-sm">
            Rebellion tends to polarize society. Moderates lose influence to extremists on both
            sides, making peaceful resolution increasingly difficult.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">4. Potential for Stability</h4>
          <p className="text-dark-300 text-sm">
            Paradoxically, the threat of rebellion can serve as a stabilizing force—keeping
            elites from pushing discontent too high. Fear of the mob constrains tyranny.
          </p>
        </div>
      </div>

      {/* Machiavelli on Rebellion */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Machiavelli on Popular Uprising</h3>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "And this should be taken as a general rule: it rarely or never happens that a republic
        or kingdom is well organized from the beginning, or completely reformed, with no respect
        for its ancient institutions, unless it is done by one man alone..."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 200</footer>
      </blockquote>

      <Callout type="note">
        <p>
          <strong>The Paradox of Reform:</strong> Machiavelli recognized that meaningful reform
          often requires concentrating power in one individual—temporarily breaking the very
          checks and balances that make for good government. Rebellion can provide the crisis
          that enables such concentration.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              <strong>Protest</strong> represents organized opposition within legal bounds;
              <strong> rebellion</strong> represents violent opposition beyond the threshold.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              Rebellion can target the <strong>legislature</strong> (perceived biased laws) or
              the <strong>executive</strong> (perceived corruption/tyranny).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Rebellion redistributes power, disrupts the economy, risks escalation, but can
              also <strong>constrain tyranny</strong> through fear.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              Major reform often requires <strong>crisis and power concentration</strong>—the
              very things rebellion provides.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
