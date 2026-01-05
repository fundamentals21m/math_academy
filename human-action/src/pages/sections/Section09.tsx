import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing reason as humanity's distinctive feature
function ReasonDemo() {
  const [selectedBeing, setSelectedBeing] = useState<'animal' | 'human'>('animal');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Reason: Humanity's Distinctive Feature</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSelectedBeing('animal')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedBeing === 'animal'
              ? 'bg-amber-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          🦁 Animal Behavior
        </button>
        <button
          onClick={() => setSelectedBeing('human')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedBeing === 'human'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          🧠 Human Action
        </button>
      </div>

      {selectedBeing === 'animal' ? (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
          <h5 className="text-amber-400 font-medium mb-3">Animal Behavior</h5>
          <div className="space-y-3 text-dark-200">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Response to hunger:</span>
              <p>Instinctively seeks food through genetically programmed behaviors</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Response to danger:</span>
              <p>Fight or flight—automatic, undeliberated reaction</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Learning:</span>
              <p>Limited to conditioning and imitation; cannot transmit abstract ideas</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">Human Action</h5>
          <div className="space-y-3 text-dark-200">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Response to hunger:</span>
              <p>Deliberates: farm, hunt, trade, or fast? Weighs costs and benefits</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Response to danger:</span>
              <p>Evaluates options: fight, flee, negotiate, or accept risk for a goal?</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Learning:</span>
              <p>Transmits complex ideas through language; builds on ancestral knowledge</p>
            </div>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        "All action is preceded by thinking." Reason enables humans to conceive of alternatives,
        evaluate consequences, and choose purposefully.
      </p>
    </div>
  );
}

// Interactive demo showing worldview vs ideology
function WorldviewIdeologyDemo() {
  const [selected, setSelected] = useState<'worldview' | 'ideology'>('worldview');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Worldview and Ideology</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSelected('worldview')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            selected === 'worldview'
              ? 'bg-purple-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Worldview
        </button>
        <button
          onClick={() => setSelected('ideology')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            selected === 'ideology'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Ideology
        </button>
      </div>

      {selected === 'worldview' ? (
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <h5 className="text-purple-400 font-medium mb-3">Worldview (Weltanschauung)</h5>
          <p className="text-dark-300 mb-4">
            A comprehensive interpretation of all things—the cosmos, existence, meaning, and humanity's
            place in the universe. It serves as both explanation and guide to action.
          </p>
          <div className="space-y-2">
            <div className="bg-dark-900 rounded-lg p-3 text-sm">
              <span className="text-purple-400">Includes:</span>
              <span className="text-dark-300 ml-2">Religious beliefs, metaphysical positions, views on ultimate reality</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-sm">
              <span className="text-purple-400">Scope:</span>
              <span className="text-dark-300 ml-2">All of existence, including the transcendent</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-sm">
              <span className="text-purple-400">Function:</span>
              <span className="text-dark-300 ml-2">Interpretation of reality + technology for living</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">Ideology</h5>
          <p className="text-dark-300 mb-4">
            A narrower concept focusing specifically on human interaction and earthly concerns.
            It guides social and political action without necessarily addressing ultimate questions.
          </p>
          <div className="space-y-2">
            <div className="bg-dark-900 rounded-lg p-3 text-sm">
              <span className="text-primary-400">Includes:</span>
              <span className="text-dark-300 ml-2">Political philosophy, economic theory, social ethics</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-sm">
              <span className="text-primary-400">Scope:</span>
              <span className="text-dark-300 ml-2">Human society and material welfare</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-sm">
              <span className="text-primary-400">Function:</span>
              <span className="text-dark-300 ml-2">Guide for social cooperation and policy</span>
            </div>
          </div>
        </div>
      )}

      <Callout type="insight" title="Common Ground">
        People with different worldviews can share an ideology if they agree on earthly goals.
        A Christian, atheist, and Buddhist might all embrace the same economic principles if they
        agree those principles best promote human welfare.
      </Callout>
    </div>
  );
}

// Interactive demo showing might as ideological, not physical
function MightDemo() {
  const [view, setView] = useState<'common' | 'mises'>('common');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Nature of Might</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('common')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'common'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Common View: Physical Force
        </button>
        <button
          onClick={() => setView('mises')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'mises'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Mises: Ideological Power
        </button>
      </div>

      {view === 'common' ? (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">The "Realpolitik" View</h5>
          <div className="space-y-3 text-dark-200">
            <p>Power comes from guns, armies, and physical force.</p>
            <p>The ruler commands because he has more weapons than the ruled.</p>
            <p>Ideology is just propaganda to justify what force already accomplishes.</p>
          </div>
          <div className="bg-dark-900 rounded-lg p-3 mt-4">
            <span className="text-amber-400 font-medium">Problem:</span>
            <p className="text-dark-300 text-sm mt-1">
              This view cannot explain why soldiers obey generals, or why populations accept rulers.
              A lone tyrant with a gun can harm only a few people. Real power requires <em>voluntary
              obedience</em> from many.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">Mises: Might Is Ideological</h5>
          <div className="space-y-3 text-dark-200">
            <p>"Might is not a physical and tangible thing, but a moral and spiritual phenomenon."</p>
            <p>A king's power rests on subjects accepting monarchical ideology.</p>
            <p>Even tyrants need followers who <em>voluntarily</em> obey and enforce orders.</p>
          </div>
          <div className="bg-dark-900 rounded-lg p-3 mt-4">
            <span className="text-green-400 font-medium">Insight:</span>
            <p className="text-dark-300 text-sm mt-1">
              Without ideological support, a ruler is just one person. The army, police, and bureaucracy
              must believe in their mission—or at least accept the system as legitimate. Ideas, not
              guns, are the ultimate source of power.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive demo showing the British India example
function IndiaExampleDemo() {
  const [phase, setPhase] = useState(0);

  const phases = [
    {
      title: 'British Arrival',
      description: 'The British East India Company arrives with superior technology and military organization.',
      ideology: 'Local princes see British rule as protecting their traditional privileges and caste system.',
      result: 'Cooperation emerges—not because of force alone, but because elites accept the arrangement.',
    },
    {
      title: 'Stable Rule',
      description: 'Britain rules India with relatively few soldiers because the system has ideological support.',
      ideology: 'Indians largely accept British authority as legitimate, or at least preferable to alternatives.',
      result: 'A small minority governs hundreds of millions through ideological consent, not pure force.',
    },
    {
      title: 'Ideas Change',
      description: 'New ideas of nationalism and self-determination spread through Indian society.',
      ideology: 'British rule is increasingly seen as illegitimate foreign domination.',
      result: 'The same guns and soldiers can no longer maintain control as ideology shifts.',
    },
    {
      title: 'Independence',
      description: 'British authority collapses despite military superiority.',
      ideology: 'The Indian population no longer accepts British rule as legitimate.',
      result: 'Ideas, not military defeat, ended the empire. Might without ideology cannot endure.',
    },
  ];

  const current = phases[phase];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Case Study: British India</h4>
      <p className="text-dark-400 text-sm mb-4">
        How did a small island nation rule hundreds of millions? And why did that rule end?
      </p>

      <div className="flex gap-2 mb-6">
        {phases.map((_, i) => (
          <button
            key={i}
            onClick={() => setPhase(i)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              phase === i
                ? 'bg-primary-600 text-white'
                : phase > i
                ? 'bg-green-600/50 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="text-primary-400 font-medium mb-2">{current.title}</h5>
        <p className="text-dark-200 mb-4">{current.description}</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark-800 rounded-lg p-3">
            <span className="text-amber-400 text-sm font-medium">Prevailing Ideology:</span>
            <p className="text-dark-300 text-sm mt-1">{current.ideology}</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-3">
            <span className="text-green-400 text-sm font-medium">Result:</span>
            <p className="text-dark-300 text-sm mt-1">{current.result}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPhase(Math.max(0, phase - 1))}
          disabled={phase === 0}
          className="px-4 py-2 bg-dark-700 rounded-lg text-dark-300 hover:bg-dark-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <button
          onClick={() => setPhase(Math.min(phases.length - 1, phase + 1))}
          disabled={phase === phases.length - 1}
          className="px-4 py-2 bg-primary-600 rounded-lg text-white hover:bg-primary-500 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

// Interactive demo on tradition
function TraditionDemo() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const aspects = [
    {
      title: 'Tradition as Intellectual Inheritance',
      icon: '📚',
      content: 'Through language and custom, each generation inherits the thinking of ancestors. This makes present reasoning more productive—just as inherited capital goods make labor more productive.',
    },
    {
      title: 'Tradition Must Be Re-Thought',
      icon: '🔄',
      content: 'We cannot simply "download" ancestral wisdom. Each person must think through inherited ideas anew. Tradition provides stimulus, but understanding requires active mental effort.',
    },
    {
      title: 'The Traditionalist Fallacy',
      icon: '⚠️',
      content: 'Traditionalism treats ancestral practices as automatically good. But often what we call "traditional" differs from what ancestors actually did or believed.',
    },
    {
      title: 'Reason Judges Tradition',
      icon: '⚖️',
      content: 'Tradition is a tool, not an authority. Each generation must evaluate inherited ideas rationally, keeping what works and discarding what doesn\'t.',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Role of Tradition</h4>

      <div className="space-y-2">
        {aspects.map((aspect, i) => (
          <div key={i} className="bg-dark-900 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-dark-800 transition-colors"
            >
              <span className="text-2xl">{aspect.icon}</span>
              <span className="flex-1 text-dark-100 font-medium">{aspect.title}</span>
              <span className="text-dark-400">{expanded === i ? '−' : '+'}</span>
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 pl-14 text-dark-300 text-sm">
                {aspect.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Interactive demo contrasting idealism vs materialism
function IdeasVsMaterialismDemo() {
  const [view, setView] = useState<'marxist' | 'mises'>('marxist');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">What Comes First: Ideas or Material Conditions?</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('marxist')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'marxist'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Marxist Materialism
        </button>
        <button
          onClick={() => setView('mises')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'mises'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Mises: Idealism
        </button>
      </div>

      {view === 'marxist' ? (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">Marxist View: Material Conditions Shape Ideas</h5>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-dark-900 rounded-lg p-3 text-center flex-1">
              <span className="text-2xl block mb-1">🏭</span>
              <span className="text-dark-300 text-sm">Economic Base</span>
            </div>
            <span className="text-red-400 text-2xl">→</span>
            <div className="bg-dark-900 rounded-lg p-3 text-center flex-1">
              <span className="text-2xl block mb-1">💭</span>
              <span className="text-dark-300 text-sm">Ideology (Superstructure)</span>
            </div>
          </div>
          <p className="text-dark-300 text-sm">
            The "material forces of production" determine consciousness. Ideas are mere reflections
            of economic relations. Change the economic base, and ideas will follow.
          </p>
        </div>
      ) : (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">Mises: Ideas Shape Material Conditions</h5>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-dark-900 rounded-lg p-3 text-center flex-1">
              <span className="text-2xl block mb-1">💭</span>
              <span className="text-dark-300 text-sm">Ideas & Ideology</span>
            </div>
            <span className="text-primary-400 text-2xl">→</span>
            <div className="bg-dark-900 rounded-lg p-3 text-center flex-1">
              <span className="text-2xl block mb-1">🏭</span>
              <span className="text-dark-300 text-sm">Social Institutions</span>
            </div>
          </div>
          <p className="text-dark-300 text-sm">
            Before people can cooperate—before any economic system exists—the <em>idea</em> of cooperation
            must exist in their minds. Society is a product of human action, and action is directed by ideas.
          </p>
        </div>
      )}

      <Callout type="insight" title="The Causal Chain">
        Ideas → Action → Society → Material Conditions. You cannot have a factory before someone
        conceives the idea of a factory. Economic systems don't create ideologies; ideologies
        create economic systems.
      </Callout>
    </div>
  );
}

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Before we can understand economic calculation and the market process, we must understand
        the role of <em>ideas</em> in shaping human society. This chapter examines how reason,
        worldviews, ideologies, and traditions influence action—and how might itself depends on ideology.
      </p>

      {/* Human Reason */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Human Reason</h2>

      <p className="text-dark-200 mb-4">
        "Reason is man's particular and characteristic feature." Unlike animals driven by instinct,
        humans <em>think</em> before they act. All purposeful action is preceded by deliberation,
        evaluation of alternatives, and choice.
      </p>

      <ReasonDemo />

      <p className="text-dark-200 mb-4">
        This doesn't mean human reasoning is always correct. People make mistakes, hold false beliefs,
        and reason poorly. But even faulty reasoning is still reasoning—the attempt to understand
        causality and choose means appropriate to ends.
      </p>

      <Callout type="definition" title="Reason and Action">
        It is always an individual who thinks—never "society." Groups don't have minds. But through
        language and tradition, individuals can incorporate ancestral thinking into their own,
        making present reasoning vastly more productive.
      </Callout>

      {/* Worldview and Ideology */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Worldview and Ideology</h2>

      <p className="text-dark-200 mb-4">
        Mises distinguishes between two related but distinct concepts: <em>worldview</em> (Weltanschauung)
        and <em>ideology</em>. Understanding this distinction helps explain how people with different
        ultimate beliefs can still cooperate on practical matters.
      </p>

      <WorldviewIdeologyDemo />

      <p className="text-dark-200 mb-4">
        Competing ideologies often promise the same earthly goals—prosperity, peace, health, security.
        The disagreement is about <em>means</em>, not ultimate ends. This suggests that rational
        analysis can, in principle, resolve ideological disputes about how best to achieve shared goals.
      </p>

      {/* Might */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Might: The Power to Direct Action</h2>

      <p className="text-dark-200 mb-4">
        One of Mises's most striking insights concerns the nature of political power. Contrary to
        the "Realpolitik" view that power flows from guns and armies, Mises argues that <strong className="text-primary-400">might
        is fundamentally ideological</strong>.
      </p>

      <MightDemo />

      <CardGrid>
        <Card title="The Tyrant's Dilemma" variant="warning">
          A lone individual with a weapon can harm a few people. To rule millions, the tyrant needs
          soldiers, police, and bureaucrats who <em>voluntarily obey</em> his orders. Why do they obey?
          Because they accept his authority as legitimate—or at least as better than the alternatives.
        </Card>
        <Card title="Ideological Consent" variant="primary">
          All durable governments rest on widely acknowledged ideologies. When no ideology commands
          majority support, "anarchy emerges. Revolutions and civil strife become permanent."
        </Card>
      </CardGrid>

      <IndiaExampleDemo />

      {/* Society and Ideology */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Society as Product of Ideology</h2>

      <p className="text-dark-200 mb-4">
        Human action creates society. Human action is directed by ideology. Therefore, society is
        a product of ideology—not the other way around. This inverts the Marxist claim that material
        conditions determine consciousness.
      </p>

      <IdeasVsMaterialismDemo />

      <p className="text-dark-200 mb-4">
        Before any social cooperation can occur—before people can trade, build together, or form
        institutions—the <em>idea</em> of cooperation must first exist in their minds. Action is
        "always directed by ideas; it realizes what previous thinking has designed."
      </p>

      {/* Tradition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Tradition</h2>

      <p className="text-dark-200 mb-4">
        Tradition plays a vital role in transmitting ideas across generations. Through language,
        customs, and inherited knowledge, each generation benefits from ancestral thinking—much
        as each generation benefits from inherited capital goods.
      </p>

      <TraditionDemo />

      <Callout type="warning" title="The Limits of Tradition">
        Tradition is a valuable inheritance, but not an infallible authority. "Man has only one tool
        to fight error: reason." Each generation must evaluate inherited ideas critically, keeping
        what works and discarding what doesn't.
      </Callout>

      {/* The Error of Classical Liberalism */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Tragedy of Classical Liberalism</h2>

      <p className="text-dark-200 mb-4">
        Mises offers a sobering critique of 18th and 19th century liberals. They correctly championed
        reason, freedom, and peaceful cooperation. But they made a fatal error: excessive faith
        in the common man's wisdom.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">The Liberal Miscalculation</h4>
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-primary-400 font-medium mb-2">What They Believed</h5>
            <p className="text-dark-300 text-sm">
              The barbarism of history resulted from the political power of kings and aristocrats.
              Once the masses could rule themselves through democracy, progress would be inevitable.
            </p>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-red-400 font-medium mb-2">What They Missed</h5>
            <p className="text-dark-300 text-sm">
              The masses are fallible too. Democratic majorities can embrace terrible ideologies—
              nationalism, socialism, militarism. The 20th century proved this tragically.
            </p>
          </div>
        </div>
      </div>

      <p className="text-dark-200 mb-4">
        The lesson is not to abandon reason or democracy, but to recognize that freedom requires
        <em>correct ideas</em> to flourish. Bad ideologies, democratically embraced, can destroy
        the very civilization that makes prosperity possible.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Reason is humanity's distinctive feature. All action is preceded by thinking, even if that thinking is flawed.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Worldviews encompass all of existence; ideologies focus on earthly human interaction. People with different worldviews can share ideologies.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Might is a moral and spiritual phenomenon, not physical. All power ultimately rests on ideological acceptance, not guns.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Society is a product of ideology, not vice versa. Ideas precede and shape material conditions—the Marxist view has it backwards.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Tradition transmits ancestral wisdom but must be judged by reason. Traditionalism that treats inherited practices as automatically good is a fallacy.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">6.</span>
            <span>Democratic majorities can embrace bad ideologies. Freedom requires correct ideas, not just popular rule.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        With the role of ideas established, we are now prepared to enter Part Three: <em>Economic
        Calculation</em>. Armed with the understanding that society emerges from ideas and that
        cooperation requires ideological foundations, we can examine how the market process coordinates
        human action through the remarkable mechanism of prices.
      </p>
    </LessonLayout>
  );
}
