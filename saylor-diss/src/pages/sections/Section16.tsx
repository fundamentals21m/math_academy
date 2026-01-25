import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-semibold mb-4">Production Shocks</h2>

      <p className="my-4">
        What happens when the political system experiences an <strong className="text-indigo-400">external
        shock</strong>—a sudden reduction in economic output due to factors beyond political control?
        This section examines the model's response to production shocks like famine, plague, or
        the economic effects of war.
      </p>

      {/* The Shock */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The External Disturbance</h3>

      <p className="my-4">
        Consider a scenario where total production suddenly drops by 15-20%. This could represent:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-red-400 mb-2">Famine</h4>
          <p className="text-sm text-dark-300">
            Poor harvests reduce agricultural output. Food becomes scarce, prices rise, the
            populace suffers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Pestilence</h4>
          <p className="text-sm text-dark-300">
            Disease reduces the working population and disrupts economic activity. Trade networks
            break down.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-blue-400 mb-2">War Damage</h4>
          <p className="text-sm text-dark-300">
            Even without modeling war directly, its economic effects—destroyed capital, disrupted
            trade, conscripted labor—can be simulated.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-purple-400 mb-2">Trade Disruption</h4>
          <p className="text-sm text-dark-300">
            Loss of trading partners or routes reduces economic output and access to resources.
          </p>
        </Card>
      </CardGrid>

      {/* System Response */}
      <h3 className="text-xl font-semibold mt-8 mb-4">System Response: The Critical Question</h3>

      <p className="my-4">
        The key question is: how does the system distribute the reduced output? With less to go
        around, someone must receive less. The political battle is over <strong className="text-indigo-400">who
        bears the cost</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-3">Distribution Scenarios</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-green-400 font-semibold w-32">Proportional:</span>
            <span className="text-dark-300">Both classes bear equal percentage cuts</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-semibold w-32">Elite-Favoring:</span>
            <span className="text-dark-300">Populace bears most of the reduction</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-400 font-semibold w-32">Popular-Favoring:</span>
            <span className="text-dark-300">Aristocracy bears most of the reduction</span>
          </div>
        </div>
      </div>

      {/* The Oscillation Problem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Oscillation Problem</h3>

      <p className="my-4">
        Tests showed that for cases where the shock is greater than 20% of normal production, the
        amplitude of the output oscillations can become great enough to drive the system unstable:
      </p>

      <Callout type="warning">
        <p>
          <strong>Critical Finding:</strong> When the production shock exceeds about 20%, the
          political oscillations become self-reinforcing. The aristocrats seize a disproportionate
          amount of legislative influence, driving output allocated to the populace so low that
          Economic Welfare falls by 15%. This triggers riots, eliminating all executive influence
          in the legislature.
        </p>
      </Callout>

      <p className="my-4">
        This leaves only the opposing factions of the populace and the aristocracy to vie for control
        of government policy. As can be seen, these two opposing actors constitute a natural
        oscillatory system. Policy swings too far in one direction are met by an equally powerful
        reaction in the other direction.
      </p>

      {/* Damping and Instability */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Why Small Shocks Are Damped</h3>

      <p className="my-4">
        In the scenario presented here, these oscillations are eventually damped. However, tests
        showed that for cases where the shock is greater than 20% of normal production, the
        amplitude of the output oscillations can become great enough to drive the system unstable.
      </p>

      <div className="bg-dark-900 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-3">Shock Severity and Outcomes</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-24 text-green-400 font-semibold">&lt;15%:</span>
            <span className="text-dark-300">System absorbs shock, returns to equilibrium</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-amber-400 font-semibold">15-20%:</span>
            <span className="text-dark-300">Damped oscillations, eventual recovery</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-red-400 font-semibold">&gt;20%:</span>
            <span className="text-dark-300">Unstable oscillations, potential system failure</span>
          </div>
        </div>
      </div>

      {/* The Executive's Role */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Executive's Impossible Task</h3>

      <p className="my-4">
        After the shock, there is less total output to be distributed, however, the executive is
        still formulating policies in order to maintain Economic Welfare equal to its pre-shock
        equilibrium level. Because the executive is monitoring the level of popular welfare, and
        not aristocratic welfare, his influence is apt to cause the output fraction allocated to
        the populace to increase.
      </p>

      <p className="my-4">
        This causes discontent to build up among the aristocracy, leading to an increase in political
        involvement and eventually resulting in a swing in the other direction. The stronger the
        power of the executive, the stronger this effect is.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              <strong>Production shocks</strong> (famine, plague, war effects) reduce total output
              and trigger political conflict over distribution.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              Shocks under ~15% are absorbed; 15-20% cause damped oscillations; <strong>&gt;20%
              can destabilize</strong> the system entirely.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Loss of executive influence creates <strong>pure factional oscillation</strong>—populace
              and aristocracy swing policy back and forth.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              Counter-intuitively, <strong>stronger executive power</strong> can exacerbate
              oscillations during shock recovery.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
