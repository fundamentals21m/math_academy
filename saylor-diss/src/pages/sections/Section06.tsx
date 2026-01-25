import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Interactive faction explorer
function FactionExplorer() {
  const [activeFaction, setActiveFaction] = useState(0);

  const factions = [
    {
      name: 'The Populace',
      color: 'text-green-400',
      desiredFreedom: 'High',
      desiredWelfare: 'High',
      description: 'The common people who desire maximum freedom and economic welfare. They express discontent through protest and potentially rebellion when their desires are not met.',
      mechanism: 'Protest → Legislative Influence → Law Changes',
    },
    {
      name: 'The Aristocracy',
      color: 'text-amber-400',
      desiredFreedom: 'Low (for populace)',
      desiredWelfare: 'High (for themselves)',
      description: 'The upper class who seek to maintain their privileges. They prefer low popular freedom to preserve their position and influence legislation through wealth and tradition.',
      mechanism: 'Wealth → Legislative Influence → Law Changes',
    },
    {
      name: 'The Executive',
      color: 'text-indigo-400',
      desiredFreedom: 'Moderate',
      desiredWelfare: 'Moderate',
      description: 'The ruler who must bridge the gap between ideal legislation and real-world constraints. The executive implements laws and maintains order.',
      mechanism: 'Power → Policy Implementation → Actual Outcomes',
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-indigo-400">The Three Factions</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {factions.map((faction, i) => (
          <button
            key={i}
            onClick={() => setActiveFaction(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFaction === i
                ? 'bg-indigo-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {faction.name}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className={`font-semibold ${factions[activeFaction].color} mb-2`}>
          {factions[activeFaction].name}
        </h5>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <span className="text-dark-400 text-sm">Desired Freedom:</span>
            <span className="text-dark-200 text-sm ml-2">{factions[activeFaction].desiredFreedom}</span>
          </div>
          <div>
            <span className="text-dark-400 text-sm">Desired Welfare:</span>
            <span className="text-dark-200 text-sm ml-2">{factions[activeFaction].desiredWelfare}</span>
          </div>
        </div>
        <p className="text-dark-300 text-sm mb-3">{factions[activeFaction].description}</p>
        <p className="text-dark-400 text-sm italic">Mechanism: {factions[activeFaction].mechanism}</p>
      </div>
    </div>
  );
}

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-semibold mb-4">Overview of the Model</h2>

      <p className="my-4">
        If we are to build a model of political interaction, we must first settle upon the definition
        and role of government. In general, albeit vague terms, the purpose of government is to
        satisfy the needs of its citizens. Machiavelli felt that society could reasonably be
        aggregated into <strong className="text-indigo-400">two factions</strong>: the lower class
        (populace) and the upper class (aristocrats).
      </p>

      <Callout type="info">
        <p>
          <strong>Key Insight:</strong> Although these two classes are constantly at odds, it is
          the duty of the government to attempt to satisfy both simultaneously. The model represents
          government as acting to minimize the discontent of these factions—seeking the lowest
          possible "energy state" where discontent threatens to destroy the system.
        </p>
      </Callout>

      {/* Faction Explorer */}
      <FactionExplorer />

      {/* Two Major Difficulties */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Two Major Difficulties</h3>

      <p className="my-4">
        If men were ideal and had total control over their environment, the legislative process
        of determining laws which provide the "best fit" to social norms would constitute the
        entire political process. However, due to human imperfection, additional complexity is
        unavoidable. Two major difficulties hinder our political system:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">1. Determining "Best Laws"</h4>
          <p className="text-sm text-dark-300">
            How are the relative discontents of the various factions to be weighted? In all societies,
            certain individuals are treated more favorably than others; certain problems are considered
            more seriously than others. How is this "legislative balance" to be determined?
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">2. Physical Constraints</h4>
          <p className="text-sm text-dark-300">
            An executive branch is necessary to bridge the gap between the "ideal" laws reflecting
            desired conditions and the "real" physical limitations placed upon the government
            apparatus. The executive must interpret laws in a way that they may be implemented.
          </p>
        </Card>
      </CardGrid>

      {/* Three Factions, Not Two */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Three Factions, Not Two</h3>

      <p className="my-4">
        The existence of the executive creates a third faction. Thus, in our real government we
        have not two but <strong className="text-indigo-400">three factions</strong>—the executive,
        the populace, and the aristocracy.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-4">Desired Levels of Freedom and Welfare</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="text-left py-2 text-dark-300">Faction</th>
                <th className="text-center py-2 text-dark-300">Desired Freedom</th>
                <th className="text-center py-2 text-dark-300">Desired Welfare</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-700">
                <td className="py-2 text-green-400">Populace</td>
                <td className="text-center py-2">High</td>
                <td className="text-center py-2">High</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="py-2 text-amber-400">Aristocracy</td>
                <td className="text-center py-2">Low</td>
                <td className="text-center py-2">High (for self)</td>
              </tr>
              <tr>
                <td className="py-2 text-indigo-400">Executive</td>
                <td className="text-center py-2">Moderate</td>
                <td className="text-center py-2">Moderate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* The Feedback Loop */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Negative Feedback Control Loop</h3>

      <p className="my-4">
        The model outlines a <strong className="text-indigo-400">negative feedback policy loop</strong>.
        An increase in social discontent induces a legal change in order to reduce this discontent.
        For moderate perturbations, this system is stable.
      </p>

      <div className="bg-dark-900 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-center text-indigo-400 mb-4">Simple Political System Model</h4>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-dark-700 px-4 py-2 rounded-lg">External Events</div>
          <div className="text-dark-400">↓</div>
          <div className="bg-dark-700 px-4 py-2 rounded-lg">State of the World</div>
          <div className="text-dark-400">↓</div>
          <div className="bg-dark-700 px-4 py-2 rounded-lg">Social Discontent (by Faction)</div>
          <div className="text-dark-400">↓</div>
          <div className="bg-dark-700 px-4 py-2 rounded-lg">Legislation to Correct "Injustice"</div>
          <div className="text-dark-400">↓</div>
          <div className="bg-dark-700 px-4 py-2 rounded-lg">Executive Implementation</div>
          <div className="text-dark-400">↓ (back to State of the World)</div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>Stability Condition:</strong> This normal 'legislative' political process is not
          sufficient representation of a dynamic political system, as it leaves out the effects of
          resistance and rebellion. These processes will be described in the model description
          chapter.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              The model has <strong>three factions</strong>: populace (wants high freedom),
              aristocracy (wants low popular freedom), and executive (moderate desires).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              Government acts to <strong>minimize total discontent</strong>—seeking the lowest
              energy state where the system remains stable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              The basic structure is a <strong>negative feedback loop</strong>: discontent leads
              to legislation which reduces discontent.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              The executive creates complexity by <strong>bridging ideal laws and real constraints</strong>,
              adding a third set of interests to the system.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
