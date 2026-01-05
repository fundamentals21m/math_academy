import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// =============================================================================
// INTERACTIVE COMPONENTS
// =============================================================================

/**
 * Interactive demo showing the spectrum of economic systems
 */
function ThirdSystemDemo() {
  const [position, setPosition] = useState(50);

  const getSystemDescription = () => {
    if (position < 20) {
      return {
        name: 'Pure Market Economy',
        description: 'All production directed by consumer preferences through prices',
        color: 'green',
        stable: true,
      };
    } else if (position < 40) {
      return {
        name: 'Lightly Hampered Market',
        description: 'Market operates with some government rules and taxes',
        color: 'yellow',
        stable: false,
      };
    } else if (position < 60) {
      return {
        name: 'Interventionism',
        description: 'Significant government interference while preserving market forms',
        color: 'orange',
        stable: false,
      };
    } else if (position < 80) {
      return {
        name: 'Heavily Controlled Economy',
        description: 'Markets exist formally but government directs most activity',
        color: 'red',
        stable: false,
      };
    } else {
      return {
        name: 'Socialism',
        description: 'Central authority directs all production',
        color: 'purple',
        stable: true,
      };
    }
  };

  const system = getSystemDescription();

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Idea of a Third System</h4>

      <p className="text-dark-300 mb-4">
        Many believe there's a stable "middle way" between capitalism and socialism.
        Mises argues this is an illusion—interventionism is inherently unstable.
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Level of Government Control: {position}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>Pure Market</span>
          <span>Interventionism</span>
          <span>Socialism</span>
        </div>
      </div>

      <div className={`p-4 rounded-lg border ${
        system.color === 'green' ? 'bg-green-900/30 border-green-700' :
        system.color === 'yellow' ? 'bg-yellow-900/30 border-yellow-700' :
        system.color === 'orange' ? 'bg-orange-900/30 border-orange-700' :
        system.color === 'red' ? 'bg-red-900/30 border-red-700' :
        'bg-purple-900/30 border-purple-700'
      }`}>
        <div className="flex justify-between items-start mb-2">
          <h5 className={`text-lg font-medium ${
            system.color === 'green' ? 'text-green-400' :
            system.color === 'yellow' ? 'text-yellow-400' :
            system.color === 'orange' ? 'text-orange-400' :
            system.color === 'red' ? 'text-red-400' :
            'text-purple-400'
          }`}>
            {system.name}
          </h5>
          <span className={`text-xs px-2 py-1 rounded ${
            system.stable ? 'bg-green-700 text-green-100' : 'bg-red-700 text-red-100'
          }`}>
            {system.stable ? 'Stable' : 'Unstable'}
          </span>
        </div>
        <p className="text-dark-200">{system.description}</p>
      </div>

      {!system.stable && (
        <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg">
          <p className="text-dark-200 text-sm">
            <strong className="text-yellow-400">Inherent Instability:</strong> Each intervention
            creates new problems requiring further intervention. The system tends to move
            toward either more freedom (market) or more control (socialism).
          </p>
        </div>
      )}

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> There is no stable "third
          system." Interventionism creates distortions that demand either more intervention
          (leading toward socialism) or removal of intervention (returning toward markets).
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing types of intervention
 */
function InterventionTypesDemo() {
  const [selectedType, setSelectedType] = useState(0);

  const types = [
    {
      name: 'Price Controls',
      command: 'Government sets maximum or minimum prices',
      marketEffect: 'Creates shortages (price ceiling) or surpluses (price floor)',
      example: 'Rent control creates housing shortages',
      consequence: 'Black markets, quality degradation, or wasteful surpluses',
    },
    {
      name: 'Production Restrictions',
      command: 'Government limits what or how much can be produced',
      marketEffect: 'Reduces supply, raises prices, creates inefficiency',
      example: 'Agricultural quotas, licensing requirements',
      consequence: 'Higher prices, protected incumbents, blocked innovation',
    },
    {
      name: 'Subsidies',
      command: 'Government pays producers to operate unprofitably',
      marketEffect: 'Resources flow to less-valued uses',
      example: 'Farm subsidies, green energy subsidies',
      consequence: 'Taxes burden productive sectors to fund unproductive ones',
    },
    {
      name: 'Trade Barriers',
      command: 'Government restricts imports or exports',
      marketEffect: 'Domestic prices diverge from world prices',
      example: 'Tariffs, import quotas',
      consequence: 'Consumers pay more, protected industries become inefficient',
    },
    {
      name: 'Consumption Controls',
      command: 'Government restricts what consumers can buy',
      marketEffect: 'Consumer preferences overridden by officials',
      example: 'Drug prohibition, product bans',
      consequence: 'Black markets, enforcement costs, loss of freedom',
    },
  ];

  const current = types[selectedType];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Types of Intervention</h4>

      <div className="flex flex-wrap gap-2 mb-6">
        {types.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelectedType(i)}
            className={`px-3 py-2 rounded text-sm ${
              selectedType === i
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg">
          <div className="text-blue-400 text-sm font-medium mb-1">The Command</div>
          <p className="text-dark-100">{current.command}</p>
        </div>

        <div className="bg-yellow-900/30 border border-yellow-700 p-4 rounded-lg">
          <div className="text-yellow-400 text-sm font-medium mb-1">Market Effect</div>
          <p className="text-dark-200">{current.marketEffect}</p>
        </div>

        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm font-medium mb-1">Example</div>
          <p className="text-dark-200">{current.example}</p>
        </div>

        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
          <div className="text-red-400 text-sm font-medium mb-1">Consequence</div>
          <p className="text-dark-200">{current.consequence}</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Every intervention is
          backed by force or threat of force. "Government interference always means either
          violent action or the threat of such action."
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing the real meaning of laissez faire
 */
function LaissezFaireDemo() {
  const [showReality, setShowReality] = useState(false);

  const misconceptions = [
    {
      myth: 'Let soulless mechanical forces operate',
      reality: 'Let each individual choose how to cooperate in the division of labor',
    },
    {
      myth: 'No planning—just chaos and anarchy',
      reality: 'Planning by individuals and businesses instead of central authority',
    },
    {
      myth: 'Let the strong exploit the weak',
      reality: 'Let consumers determine what entrepreneurs should produce',
    },
    {
      myth: 'Government does nothing',
      reality: 'Government protects property rights and enforces contracts',
    },
    {
      myth: 'Favors the rich over the poor',
      reality: 'Lets the common man choose and act; do not force him to yield to a dictator',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Meaning of Laissez Faire</h4>

      <p className="text-dark-300 mb-4">
        "Laissez faire" is widely misunderstood. Critics interpret it as endorsing
        mechanical automatism or chaos. Mises clarifies what it actually means.
      </p>

      <div className="mb-6">
        <button
          onClick={() => setShowReality(!showReality)}
          className={`px-4 py-2 rounded-lg font-medium ${
            showReality
              ? 'bg-green-600 text-white'
              : 'bg-red-600 text-white'
          }`}
        >
          {showReality ? 'Show Common Misconceptions' : 'Show What It Really Means'}
        </button>
      </div>

      <div className="space-y-3">
        {misconceptions.map((item, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg transition-all ${
              showReality
                ? 'bg-green-900/30 border border-green-700'
                : 'bg-red-900/30 border border-red-700'
            }`}
          >
            <div className={`text-xs font-medium mb-1 ${
              showReality ? 'text-green-400' : 'text-red-400'
            }`}>
              {showReality ? 'Actual Meaning' : 'Common Misconception'}
            </div>
            <p className="text-dark-100">
              {showReality ? item.reality : item.myth}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "The alternative is not
          plan or no plan. The question is whose planning? Should each member of society
          plan for himself, or should a paternal government alone plan for them all?"
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing whose planning
 */
function WhosePlanningDemo() {
  const [planner, setPlanner] = useState<'individuals' | 'government'>('individuals');

  const comparisons = [
    {
      aspect: 'Who decides what to produce',
      individuals: 'Entrepreneurs responding to consumer demand',
      government: 'Officials deciding "true needs"',
    },
    {
      aspect: 'Who decides how to produce',
      individuals: 'Business owners seeking efficiency',
      government: 'Bureaucrats following regulations',
    },
    {
      aspect: 'Who bears consequences of mistakes',
      individuals: 'The decision-maker (profit/loss)',
      government: 'Taxpayers and regulated parties',
    },
    {
      aspect: 'How quickly errors are corrected',
      individuals: 'Immediately—losses force change',
      government: 'Slowly or never—no automatic feedback',
    },
    {
      aspect: 'Source of knowledge used',
      individuals: 'Dispersed local knowledge of millions',
      government: 'Limited knowledge of central planners',
    },
    {
      aspect: 'Whose values prevail',
      individuals: 'Each person pursues their own goals',
      government: 'Officials impose their preferences',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Whose Planning?</h4>

      <p className="text-dark-300 mb-4">
        The question is not "plan vs. no plan" but "whose planning?" Every society
        involves planning—the issue is whether individuals plan for themselves or
        government plans for everyone.
      </p>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPlanner('individuals')}
          className={`px-4 py-2 rounded-lg font-medium flex-1 ${
            planner === 'individuals'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          Individual Planning
        </button>
        <button
          onClick={() => setPlanner('government')}
          className={`px-4 py-2 rounded-lg font-medium flex-1 ${
            planner === 'government'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          Government Planning
        </button>
      </div>

      <div className="space-y-3">
        {comparisons.map((c, i) => (
          <div key={i} className="bg-dark-700 p-4 rounded-lg">
            <div className="text-dark-400 text-sm mb-1">{c.aspect}</div>
            <p className={`font-medium ${
              planner === 'individuals' ? 'text-green-400' : 'text-red-400'
            }`}>
              {planner === 'individuals' ? c.individuals : c.government}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "It is freedom versus
          government omnipotence." The real choice is between autonomous action of
          individuals or exclusive action of government.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      {/* Part Six Introduction */}
      <Callout type="concept" title="Part Six: The Hampered Market Economy">
        Part Six examines what happens when governments intervene in market economies
        without fully abolishing them. Mises analyzes the various forms of intervention
        and their consequences.
      </Callout>

      {/* Introduction */}
      <p className="text-lg text-dark-100 mb-6">
        Chapter XXVII introduces the concept of government intervention in market
        economies. Mises examines whether a stable "third system" between capitalism
        and socialism is possible.
      </p>

      {/* Section 1: The Idea of a Third System */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        1. The Idea of a Third System
      </h2>

      <p className="text-dark-200 mb-4">
        Many people believe in a "middle way"—preserving market mechanisms while
        correcting their alleged defects through government intervention. Mises
        argues this third system is inherently unstable.
      </p>

      <ThirdSystemDemo />

      <CardGrid>
        <Card title="The Lenin/Russian Pattern" variant="default">
          <p className="text-dark-300">
            All enterprises are nationalized. Plants, shops, and farms become
            government departments operated by civil servants. This is pure
            bureaucratic socialism.
          </p>
        </Card>
        <Card title="The Hindenburg/German Pattern" variant="default">
          <p className="text-dark-300">
            The appearance of a market is retained, but all significant activity
            is directed by central authority. Nominal private ownership masks
            effective government control.
          </p>
        </Card>
      </CardGrid>

      {/* Section 2: The Intervention */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        2. The Intervention
      </h2>

      <p className="text-dark-200 mb-4">
        An intervention is a decree that forces entrepreneurs and capitalists to
        employ factors of production differently than market dictates would require.
        All interventions ultimately rest on force or threat of force.
      </p>

      <InterventionTypesDemo />

      <Callout type="warning" title="The Nature of Government Power">
        "Government interference always means either violent action or the threat
        of such action." Those asking for more government interference are asking
        ultimately for more compulsion and less freedom.
      </Callout>

      {/* Section 3: The Meaning of Laissez Faire */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        3. The Meaning of Laissez Faire
      </h2>

      <p className="text-dark-200 mb-4">
        Critics misrepresent laissez faire as endorsing chaos or mechanical
        automatism. Mises clarifies that it means something quite different.
      </p>

      <LaissezFaireDemo />

      <Callout type="key-point" title="The Real Question">
        "The alternative is not plan or no plan. The question is whose planning?
        Should each member of society plan for himself, or should a paternal
        government alone plan for them all?"
      </Callout>

      {/* Section 4: Whose Planning */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        4. Freedom vs. Government Omnipotence
      </h2>

      <p className="text-dark-200 mb-4">
        The fundamental choice is not between order and chaos, but between
        individual autonomy and government control. Both systems involve
        planning—they differ in who does the planning.
      </p>

      <WhosePlanningDemo />

      <p className="text-dark-200 mb-4">
        Interventionists claim that enlightened experts can direct resources
        better than the "anarchic" market. But this ignores that markets
        aggregate knowledge dispersed among millions of individuals—knowledge
        that no central authority can possess.
      </p>

      {/* Section 5: The Interventionist Mindset */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        5. The Interventionist Response
      </h2>

      <p className="text-dark-200 mb-4">
        When confronted with the failures of intervention, interventionists have
        a characteristic response: the problem was not intervention itself, but
        the wrong kind of intervention.
      </p>

      <CardGrid>
        <Card title="The Interventionist Defense" variant="warning">
          <p className="text-dark-300">
            "These faults were the results of spurious interventionism; what we
            are advocating is good interventionism, not bad interventionism."
            And of course, "good interventionism" is always the speaker's own brand.
          </p>
        </Card>
        <Card title="The Pattern" variant="warning">
          <p className="text-dark-300">
            Every intervention creates unintended consequences. These consequences
            are blamed on remaining market freedom, justifying further intervention.
            The spiral continues until freedom is eliminated.
          </p>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Key Takeaways
      </h2>

      <div className="space-y-4">
        <Callout type="summary" title="1. No Stable Third System">
          Interventionism is not a stable middle ground between capitalism and
          socialism. Each intervention creates distortions requiring further
          intervention, pushing toward either more freedom or total control.
        </Callout>

        <Callout type="summary" title="2. All Intervention Rests on Force">
          Government interference means violent action or threat of action.
          Taxes, regulations, and prohibitions all ultimately depend on coercion.
          More intervention means less freedom.
        </Callout>

        <Callout type="summary" title="3. Laissez Faire Means Individual Choice">
          Laissez faire does not mean chaos or mechanical forces. It means letting
          individuals choose how to participate in the division of labor and
          letting consumers direct production through their spending.
        </Callout>

        <Callout type="summary" title="4. The Question is Whose Planning">
          Both market and government systems involve planning. The choice is
          between decentralized planning by individuals or centralized planning
          by officials. It is freedom versus government omnipotence.
        </Callout>
      </div>
    </LessonLayout>
  );
}
