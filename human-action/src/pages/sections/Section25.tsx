import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// =============================================================================
// INTERACTIVE COMPONENTS
// =============================================================================

/**
 * Interactive demo showing the intellectual path to socialism
 */
function SocialismOriginDemo() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      title: 'Liberal Philosophers',
      description: 'Contrast corrupt real states with an idealized perfect state',
      problem: 'Created a template for imaginary perfect governance',
      year: '18th Century',
    },
    {
      title: 'The Ideal State',
      description: 'Imaginary state devoted purely to citizens\' welfare',
      problem: 'Became a vehicle for projecting personal value judgments',
      year: 'Early 1800s',
    },
    {
      title: 'Attribution of Omniscience',
      description: 'The ideal state is assumed to have perfect knowledge',
      problem: 'If the state knows everything, central planning seems superior',
      year: 'Mid 1800s',
    },
    {
      title: 'Industrial Socialism',
      description: 'State ownership of all means of production',
      problem: 'Redistribution impractical; socialization becomes the goal',
      year: 'Late 1800s',
    },
    {
      title: 'Scientific Socialism',
      description: 'Marx claims socialism is historically inevitable',
      problem: 'Polylogism and historical determinism replace analysis',
      year: '1848+',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Intellectual Path to Socialism</h4>

      <div className="flex gap-1 mb-6">
        {stages.map((s, i) => (
          <button
            key={i}
            onClick={() => setStage(i)}
            className={`flex-1 py-2 px-1 rounded text-xs ${
              stage === i
                ? 'bg-blue-600 text-white'
                : i < stage
                  ? 'bg-green-900/30 text-green-400'
                  : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-700 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-start mb-2">
          <h5 className="text-lg font-medium text-dark-100">{stages[stage].title}</h5>
          <span className="text-dark-500 text-sm">{stages[stage].year}</span>
        </div>
        <p className="text-dark-200 mb-3">{stages[stage].description}</p>
        <div className="p-3 bg-red-900/30 border border-red-700 rounded">
          <div className="text-red-400 text-xs font-medium mb-1">Critical Error</div>
          <p className="text-dark-200 text-sm">{stages[stage].problem}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setStage(Math.max(0, stage - 1))}
          disabled={stage === 0}
          className="px-4 py-2 rounded bg-dark-700 text-dark-300 hover:bg-dark-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setStage(Math.min(stages.length - 1, stage + 1))}
          disabled={stage === stages.length - 1}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50"
        >
          Next Stage
        </button>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Socialism arose from
          imagining a perfect, all-knowing state. Once omniscience was assumed, central
          planning appeared superior to the "chaotic" market. The fatal flaw was the
          assumption itself.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing the three dogmas of socialism
 */
function SocialistDogmasDemo() {
  const [selectedDogma, setSelectedDogma] = useState(0);

  const dogmas = [
    {
      title: 'Omnipotent Society',
      claim: 'Society (the state) is omnipotent and omniscient',
      critique: 'No entity possesses the knowledge dispersed among millions of individuals. The pretense of omniscience is the fundamental socialist illusion.',
      consequence: 'Central planners cannot know what individuals know about local conditions, preferences, and opportunities.',
    },
    {
      title: 'Historical Inevitability',
      claim: 'The coming of socialism is inevitable',
      critique: 'This is not scientific prediction but quasi-religious prophecy. History is made by human choices, not predetermined forces.',
      consequence: 'Believers stop analyzing whether socialism works and simply await its "inevitable" arrival.',
    },
    {
      title: 'Progress Toward Socialism',
      claim: 'History is continuous progress toward socialism',
      critique: 'Defining "progress" as movement toward socialism is circular reasoning. It assumes what it claims to prove.',
      consequence: 'Any development is interpreted as confirming the prophecy, making the theory unfalsifiable.',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Three Dogmas of Socialism</h4>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {dogmas.map((d, i) => (
          <button
            key={i}
            onClick={() => setSelectedDogma(i)}
            className={`p-3 rounded-lg text-center ${
              selectedDogma === i
                ? 'bg-purple-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            <div className="text-2xl mb-1">{i + 1}</div>
            <div className="text-xs">{d.title}</div>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-purple-900/30 border border-purple-700 p-4 rounded-lg">
          <div className="text-purple-400 text-sm font-medium mb-1">The Claim</div>
          <p className="text-dark-100">{dogmas[selectedDogma].claim}</p>
        </div>

        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
          <div className="text-red-400 text-sm font-medium mb-1">The Critique</div>
          <p className="text-dark-200">{dogmas[selectedDogma].critique}</p>
        </div>

        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm font-medium mb-1">The Consequence</div>
          <p className="text-dark-300">{dogmas[selectedDogma].consequence}</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> The socialist creed rests
          on unfounded assumptions presented as scientific truths. These dogmas function
          more as religious faith than empirical propositions.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing the single will vs distributed knowledge
 */
function CentralPlanningDemo() {
  const [agents, setAgents] = useState(100);
  const [showKnowledge, setShowKnowledge] = useState(false);

  const knowledgeBits = agents * 50; // Each person has ~50 relevant pieces of knowledge
  const centralKnowledge = Math.min(agents * 2, 100); // Central planner can only gather tiny fraction

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">One Will vs. Distributed Knowledge</h4>

      <p className="text-dark-300 mb-4">
        Socialism requires that "one will" direct all production. But knowledge is
        dispersed among millions of individuals, each with unique local information.
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Number of Economic Agents: {agents.toLocaleString()}
        </label>
        <input
          type="range"
          min="10"
          max="1000"
          value={agents}
          onChange={(e) => setAgents(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <button
        onClick={() => setShowKnowledge(!showKnowledge)}
        className={`px-4 py-2 rounded-lg font-medium mb-4 ${
          showKnowledge ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
        }`}
      >
        {showKnowledge ? 'Hide Knowledge Distribution' : 'Show Knowledge Distribution'}
      </button>

      {showKnowledge && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg">
            <div className="text-green-400 text-sm font-medium mb-1">Total Distributed Knowledge</div>
            <div className="text-2xl font-bold text-green-400">
              {knowledgeBits.toLocaleString()} bits
            </div>
            <div className="text-dark-400 text-xs mt-1">
              Each person knows local conditions, preferences, skills, opportunities
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
            <div className="text-red-400 text-sm font-medium mb-1">Central Planner Can Access</div>
            <div className="text-2xl font-bold text-red-400">
              {centralKnowledge} bits
            </div>
            <div className="text-dark-400 text-xs mt-1">
              Only aggregate statistics, reports, formal communication
            </div>
          </div>
        </div>
      )}

      <div className="bg-dark-700 p-4 rounded-lg mb-4">
        <div className="text-dark-400 text-sm mb-2">Knowledge Capture Rate</div>
        <div className="h-6 bg-dark-600 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 transition-all"
            style={{ width: `${(centralKnowledge / knowledgeBits) * 100}%` }}
          />
        </div>
        <div className="text-center text-red-400 text-sm mt-2">
          {((centralKnowledge / knowledgeBits) * 100).toFixed(2)}% of relevant knowledge
        </div>
      </div>

      <CardGrid>
        <Card title="Market Solution" variant="success">
          <p className="text-dark-300 text-sm">
            Prices aggregate dispersed knowledge. Each person acts on local information;
            price signals coordinate their actions without anyone needing to know everything.
          </p>
        </Card>
        <Card title="Socialist Problem" variant="warning">
          <p className="text-dark-300 text-sm">
            The central planner must make decisions without access to the dispersed knowledge
            that prices automatically aggregate in a market economy.
          </p>
        </Card>
      </CardGrid>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> The crucial feature of
          socialism is that all productive activities are directed by one will. But no
          single mind can possess the knowledge dispersed among millions of individuals.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing every socialist as a disguised dictator
 */
function DisguisedDictatorDemo() {
  const [socialist, setSocialist] = useState(0);

  const socialists = [
    {
      type: 'The Egalitarian',
      vision: 'Perfect equality of outcomes',
      problem: 'Who decides what counts as "equal"? Different people value different things.',
      dictator: 'Imposes their definition of equality on everyone',
    },
    {
      type: 'The Environmentalist',
      vision: 'Production organized for sustainability',
      problem: 'Who decides the tradeoff between prosperity and environment?',
      dictator: 'Imposes their environmental preferences on all',
    },
    {
      type: 'The Nationalist',
      vision: 'Production for national greatness',
      problem: 'Who defines "national interest"? Different citizens have different interests.',
      dictator: 'Imposes their vision of national glory on everyone',
    },
    {
      type: 'The Technocrat',
      vision: 'Scientifically optimal production',
      problem: 'Optimal for what goal? Science cannot determine ends, only means.',
      dictator: 'Imposes their values disguised as scientific necessity',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Every Socialist is a Disguised Dictator</h4>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {socialists.map((s, i) => (
          <button
            key={i}
            onClick={() => setSocialist(i)}
            className={`p-3 rounded-lg ${
              socialist === i
                ? 'bg-purple-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {s.type}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg">
          <div className="text-blue-400 text-sm font-medium mb-1">Their Vision</div>
          <p className="text-dark-100">{socialists[socialist].vision}</p>
        </div>

        <div className="bg-yellow-900/30 border border-yellow-700 p-4 rounded-lg">
          <div className="text-yellow-400 text-sm font-medium mb-1">The Problem</div>
          <p className="text-dark-200">{socialists[socialist].problem}</p>
        </div>

        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
          <div className="text-red-400 text-sm font-medium mb-1">The Hidden Reality</div>
          <p className="text-dark-200">{socialists[socialist].dictator}</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Every socialist imagines
          that the centrally planned economy will implement their particular vision of the
          good society. But someone must make the decisions—and that someone becomes the
          dictator, regardless of original intentions.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      {/* Part Five Introduction */}
      <Callout type="concept" title="Part Five: Social Cooperation Without a Market">
        Part Five examines attempts to organize society without market exchange—primarily
        socialism. Mises analyzes both the intellectual origins of socialism and its
        fundamental impossibility as an economic system.
      </Callout>

      {/* Introduction */}
      <p className="text-lg text-dark-100 mb-6">
        Chapter XXV constructs an imaginary socialist society to examine whether such
        a system could function. Mises traces how the socialist idea arose and
        identifies its core assumptions.
      </p>

      {/* Section 1: The Historical Origin of the Socialist Idea */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        1. The Historical Origin of the Socialist Idea
      </h2>

      <p className="text-dark-200 mb-4">
        Mises argues that socialism arose from an intellectual error made by liberal
        philosophers themselves. By contrasting corrupt real governments with an
        imaginary ideal state, they created a template that others would try to realize.
      </p>

      <SocialismOriginDemo />

      <Callout type="key-point" title="The Fatal Assumption">
        The crucial transformation occurred when thinkers attributed not merely good
        intentions but omniscience to the state. If the state possessed perfect knowledge,
        central planning would appear superior to the "anarchic" market.
      </Callout>

      <p className="text-dark-200 mb-4">
        Earlier reformers wanted to redistribute existing property equally. But with
        the rise of large-scale industry, this became impractical. The new goal became
        state ownership of all means of production—socialism proper.
      </p>

      {/* Section 2: The Socialist Doctrine */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        2. The Socialist Doctrine
      </h2>

      <p className="text-dark-200 mb-4">
        Marx did not invent socialism but contributed two key elements: polylogism
        (the idea that different classes have fundamentally different logics) and
        the claim that socialism's arrival is historically inevitable.
      </p>

      <SocialistDogmasDemo />

      <CardGrid>
        <Card title="Polylogism" variant="default">
          <p className="text-dark-300">
            Marx claimed that bourgeois and proletarian minds work differently—economic
            arguments against socialism merely reflect "bourgeois logic." This immunizes
            socialism from rational critique.
          </p>
        </Card>
        <Card title="Historical Materialism" variant="default">
          <p className="text-dark-300">
            The claim that economic forces determine history and make socialism inevitable.
            This transforms a political program into a pseudo-scientific prophecy that
            requires faith, not analysis.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: The Praxeological Character of Socialism */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        3. The Praxeological Character of Socialism
      </h2>

      <p className="text-dark-200 mb-4">
        The praxeological critique of socialism is not about ends but means. Mises
        asks: even granting the socialist's goals, can central planning achieve them?
        The answer requires understanding the knowledge problem.
      </p>

      <CentralPlanningDemo />

      <Callout type="warning" title="The Problem of Economic Calculation">
        Under socialism, one cannot compare costs to gains using any arithmetical
        operation. Without market prices for factors of production, there is no
        rational basis for choosing among production methods.
      </Callout>

      <p className="text-dark-200 mb-4">
        The crucial feature of socialism is that all productive activities are
        directed by one will. But this "one will" cannot possess the knowledge
        dispersed among millions of individuals making localized decisions.
      </p>

      {/* Section 4: The Disguised Dictator */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        4. The Disguised Dictator
      </h2>

      <p className="text-dark-200 mb-4">
        Every socialist imagines that the planned economy will implement their
        particular vision of the good society. But since people have different
        values, someone must decide—and that someone becomes the dictator.
      </p>

      <DisguisedDictatorDemo />

      <Callout type="key-point" title="Values Cannot Be Aggregated">
        In a market economy, individual preferences coordinate through prices
        without anyone imposing values on others. Under socialism, the planner
        must choose whose values to serve—inevitably their own.
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Key Takeaways
      </h2>

      <div className="space-y-4">
        <Callout type="summary" title="1. Socialism Arose from the Omniscience Assumption">
          Liberal philosophers inadvertently created socialism by imagining a perfect,
          all-knowing state. Once omniscience was assumed, central planning appeared
          rational compared to the "chaos" of markets.
        </Callout>

        <Callout type="summary" title="2. Socialist Doctrine Rests on Unfounded Dogmas">
          The three pillars—societal omnipotence, historical inevitability, and
          progressive history—are articles of faith, not scientific propositions.
          They immunize socialism from rational critique.
        </Callout>

        <Callout type="summary" title="3. One Will Cannot Possess Distributed Knowledge">
          Socialism requires directing all production by one will. But relevant
          knowledge is dispersed among millions of individuals. No central
          authority can gather and process this information.
        </Callout>

        <Callout type="summary" title="4. Every Socialist is a Disguised Dictator">
          Someone must make the decisions in a planned economy. Each socialist
          imagines their values will prevail. In reality, whichever values are
          chosen, someone imposes them on everyone else.
        </Callout>
      </div>
    </LessonLayout>
  );
}
