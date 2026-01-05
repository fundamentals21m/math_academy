import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing why cooperation emerges
function CooperationMotivesDemo() {
  const [viewpoint, setViewpoint] = useState<'altruistic' | 'rational'>('altruistic');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Why Do People Cooperate?</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setViewpoint('altruistic')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewpoint === 'altruistic'
              ? 'bg-pink-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Common View: Altruism
        </button>
        <button
          onClick={() => setViewpoint('rational')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewpoint === 'rational'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Mises: Rational Self-Interest
        </button>
      </div>

      {viewpoint === 'altruistic' ? (
        <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
          <h5 className="text-pink-400 font-medium mb-3">The Altruistic Explanation</h5>
          <div className="space-y-3 text-dark-200">
            <p>People cooperate because they love each other or feel moral obligation to help others.</p>
            <p>Society requires sacrifice of individual interests for the common good.</p>
            <p>Cooperation is maintained by cultural norms, religious commandments, or state enforcement.</p>
          </div>
          <div className="bg-dark-900 rounded-lg p-3 mt-4">
            <span className="text-amber-400 font-medium">Problem:</span>
            <span className="text-dark-300 ml-2">This doesn't explain why strangers cooperate, or why cooperation persists across cultures.</span>
          </div>
        </div>
      ) : (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">Mises: Rational Self-Interest</h5>
          <div className="space-y-3 text-dark-200">
            <p>People cooperate because <em>it makes them better off</em>. Division of labor increases productivity for everyone.</p>
            <p>The baker doesn't bake bread out of love for strangers—but strangers still get bread, and the baker gets paid.</p>
            <p>Cooperation emerges spontaneously because individuals recognize its benefits.</p>
          </div>
          <div className="bg-dark-900 rounded-lg p-3 mt-4">
            <span className="text-green-400 font-medium">Insight:</span>
            <span className="text-dark-300 ml-2">Social bonds and fellow-feeling are <em>byproducts</em> of cooperation, not its cause.</span>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        "Man becomes a social being not in sacrificing his own concerns for the sake of a mythical Moloch, society,
        but in aiming at an improvement in his own welfare." — Mises
      </p>
    </div>
  );
}

// Interactive demo showing conditions for division of labor
function DivisionOfLaborDemo() {
  const [selectedCondition, setSelectedCondition] = useState(0);

  const conditions = [
    {
      title: 'Innate Inequality of Abilities',
      icon: '🧠',
      description: 'People have different talents, skills, and capacities. Some are stronger, some more dexterous, some more creative.',
      example: 'A surgeon has skills that a carpenter lacks, and vice versa. Each benefits by specializing.',
      implication: 'Even if resources were equally distributed, people would still gain from trading their specialized labor.',
    },
    {
      title: 'Unequal Distribution of Resources',
      icon: '🌍',
      description: 'Natural resources are not evenly spread across the earth. Some regions have oil, others fertile soil, others minerals.',
      example: 'Tropical regions grow coffee; temperate regions grow wheat. Trade benefits both.',
      implication: 'Geographic specialization allows all regions to enjoy goods they cannot produce locally.',
    },
    {
      title: 'Tasks Requiring Multiple People',
      icon: '🏗️',
      description: 'Some undertakings exceed the capacity of any individual. They require coordinated effort.',
      example: 'Building a bridge, operating a factory, or running a hospital requires many specialized workers.',
      implication: 'Complex production is impossible without social cooperation and division of labor.',
    },
  ];

  const current = conditions[selectedCondition];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Three Conditions for Division of Labor</h4>

      <div className="flex gap-2 mb-6 flex-wrap">
        {conditions.map((cond, i) => (
          <button
            key={i}
            onClick={() => setSelectedCondition(i)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCondition === i
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {cond.icon} {cond.title.split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{current.icon}</span>
          <h5 className="text-primary-400 font-medium">{current.title}</h5>
        </div>

        <p className="text-dark-200 mb-4">{current.description}</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark-800 rounded-lg p-3">
            <span className="text-amber-400 text-sm font-medium">Example:</span>
            <p className="text-dark-300 text-sm mt-1">{current.example}</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-3">
            <span className="text-green-400 text-sm font-medium">Implication:</span>
            <p className="text-dark-300 text-sm mt-1">{current.implication}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive demo showing Ricardo's Law of Association
function RicardianLawDemo() {
  const [mode, setMode] = useState<'isolation' | 'specialization'>('isolation');

  // A is better at both, but relatively better at Q
  const productivity = {
    A: { p: 3, q: 6 }, // A produces 3p or 6q per hour
    B: { p: 2, q: 2 }, // B produces 2p or 2q per hour
  };

  const hoursAvailable = 8;

  // In isolation: each splits time 50/50
  const isolation = {
    A: { p: (hoursAvailable / 2) * productivity.A.p, q: (hoursAvailable / 2) * productivity.A.q },
    B: { p: (hoursAvailable / 2) * productivity.B.p, q: (hoursAvailable / 2) * productivity.B.q },
  };
  const isolationTotal = {
    p: isolation.A.p + isolation.B.p,
    q: isolation.A.q + isolation.B.q,
  };

  // Specialization: A focuses on q (comparative advantage), B focuses on p
  const specialization = {
    A: { p: 0, q: hoursAvailable * productivity.A.q },
    B: { p: hoursAvailable * productivity.B.p, q: 0 },
  };
  const specializationTotal = {
    p: specialization.A.p + specialization.B.p,
    q: specialization.A.q + specialization.B.q,
  };

  const current = mode === 'isolation' ? isolation : specialization;
  const currentTotal = mode === 'isolation' ? isolationTotal : specializationTotal;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-2">Ricardo's Law of Association</h4>
      <p className="text-dark-400 text-sm mb-4">
        Even when one party is better at <em>everything</em>, both benefit from specialization and trade.
      </p>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <h5 className="text-dark-300 text-sm mb-3">Productivity (units per hour)</h5>
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          <div></div>
          <div className="text-amber-400 font-medium">Good P</div>
          <div className="text-blue-400 font-medium">Good Q</div>
          <div className="text-dark-200 font-medium">Person A</div>
          <div className="text-dark-300">{productivity.A.p} units</div>
          <div className="text-dark-300">{productivity.A.q} units</div>
          <div className="text-dark-200 font-medium">Person B</div>
          <div className="text-dark-300">{productivity.B.p} units</div>
          <div className="text-dark-300">{productivity.B.q} units</div>
        </div>
        <p className="text-dark-500 text-xs mt-2 text-center">
          A is better at both goods, but <em>relatively</em> better at Q (3x vs 1x)
        </p>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMode('isolation')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'isolation'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Working in Isolation
        </button>
        <button
          onClick={() => setMode('specialization')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'specialization'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Specialization + Trade
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-dark-200 font-medium mb-3">Person A produces:</h5>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-amber-400">Good P:</span>
              <span className="text-dark-100 font-mono">{current.A.p} units</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-400">Good Q:</span>
              <span className="text-dark-100 font-mono">{current.A.q} units</span>
            </div>
          </div>
        </div>
        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-dark-200 font-medium mb-3">Person B produces:</h5>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-amber-400">Good P:</span>
              <span className="text-dark-100 font-mono">{current.B.p} units</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-400">Good Q:</span>
              <span className="text-dark-100 font-mono">{current.B.q} units</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-lg p-4 ${mode === 'specialization' ? 'bg-green-500/10 border border-green-500/30' : 'bg-dark-900'}`}>
        <h5 className="text-dark-100 font-medium mb-2">Total Production</h5>
        <div className="flex justify-around text-center">
          <div>
            <span className="text-amber-400 block text-sm">Good P</span>
            <span className="text-2xl font-bold text-dark-100">{currentTotal.p}</span>
          </div>
          <div>
            <span className="text-blue-400 block text-sm">Good Q</span>
            <span className="text-2xl font-bold text-dark-100">{currentTotal.q}</span>
          </div>
        </div>
        {mode === 'specialization' && (
          <p className="text-green-400 text-sm text-center mt-3">
            +{specializationTotal.p - isolationTotal.p} P and +{specializationTotal.q - isolationTotal.q} Q compared to isolation!
          </p>
        )}
      </div>

      <Callout type="insight" title="The Key Insight">
        Even though A is better at producing both goods, both parties are better off when A specializes in Q
        (where A's advantage is greatest) and B specializes in P. After trading, both have more of both goods.
      </Callout>
    </div>
  );
}

// Interactive demo contrasting individualism vs collectivism
function IndividualismVsCollectivismDemo() {
  const [view, setView] = useState<'collectivist' | 'individualist'>('collectivist');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Two Views of Society</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('collectivist')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'collectivist'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Collectivist/Holistic View
        </button>
        <button
          onClick={() => setView('individualist')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'individualist'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Individualist View (Mises)
        </button>
      </div>

      {view === 'collectivist' ? (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">The Collectivist View</h5>
          <ul className="space-y-3 text-dark-200">
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              Society is a real entity with its own existence, will, and goals
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              The individual must sacrifice personal interests for the "common good"
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              Society comes first; individuals are merely parts of the whole
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              The state represents society's true interests
            </li>
          </ul>
          <div className="bg-dark-900 rounded-lg p-3 mt-4">
            <span className="text-amber-400 font-medium">Mises's Critique:</span>
            <p className="text-dark-300 text-sm mt-1">
              This view treats "society" as a mystical being separate from the individuals who compose it.
              But only individuals think, value, and act. "Society" has no mind or will of its own.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">The Individualist View</h5>
          <ul className="space-y-3 text-dark-200">
            <li className="flex items-start gap-2">
              <span className="text-primary-400">•</span>
              Society is a pattern of cooperation among individuals
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-400">•</span>
              Cooperation serves individual interests—that's why it persists
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-400">•</span>
              Individuals choose to cooperate because it benefits them
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-400">•</span>
              "Individualism" is actually a philosophy of <em>social cooperation</em>
            </li>
          </ul>
          <div className="bg-dark-900 rounded-lg p-3 mt-4">
            <span className="text-green-400 font-medium">Key Insight:</span>
            <p className="text-dark-300 text-sm mt-1">
              The so-called "individualist" position champions peaceful cooperation based on mutual benefit.
              Far from being anti-social, it explains how society actually works.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive demo on aggression vs cooperation
function AggressionVsCooperationDemo() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const points = [
    {
      title: 'Humans Have Destructive Instincts',
      content: 'Mises does not deny that humans have aggressive impulses. History is full of violence, conquest, and destruction.',
      icon: '⚔️',
    },
    {
      title: 'But Humans Also Want Prosperity',
      content: 'People also desire food, shelter, comfort, and security. These wants can only be satisfied through production and cooperation, not destruction.',
      icon: '🏠',
    },
    {
      title: 'Reason Enables Choice',
      content: 'Unlike animals driven purely by instinct, humans can reason about consequences. We can choose cooperation over conflict when we recognize its benefits.',
      icon: '🧠',
    },
    {
      title: 'Peace Is Productive',
      content: 'Violence destroys; cooperation creates. Those who choose cooperation accumulate wealth and power, while pure aggressors eventually exhaust their resources.',
      icon: '📈',
    },
    {
      title: 'The Great Society Emerges',
      content: 'Even enemies recognize potential future cooperation. This leads to rules of warfare, treatment of prisoners, and eventually peaceful trade.',
      icon: '🌐',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">From Aggression to Cooperation</h4>

      <div className="space-y-2">
        {points.map((point, i) => (
          <div key={i} className="bg-dark-900 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-dark-800 transition-colors"
            >
              <span className="text-2xl">{point.icon}</span>
              <span className="flex-1 text-dark-100 font-medium">{point.title}</span>
              <span className="text-dark-400">{expanded === i ? '−' : '+'}</span>
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 pl-14 text-dark-300 text-sm">
                {point.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        "Social cooperation has nothing to do with personal love... People cooperate because this best serves their own interests."
      </p>
    </div>
  );
}

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Having analyzed individual action in Part One, Mises now turns to <em>action within society</em>.
        This chapter establishes the foundation: what is society, why does it emerge, and what holds it together?
        The answer lies in the division of labor and its astonishing power to benefit everyone.
      </p>

      <Callout type="definition" title="Society Defined">
        "Society is concerted action, cooperation... Society is division of labor and combination of labor."
        Society is not a mystical entity but a pattern of cooperation among individuals.
      </Callout>

      {/* Human Cooperation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Human Cooperation</h2>

      <p className="text-dark-200 mb-4">
        Why do people cooperate? The common answer points to altruism, moral duty, or social pressure.
        Mises offers a different explanation: people cooperate because <strong className="text-primary-400">it
        makes them better off</strong>. The productivity gains from division of labor are so enormous that
        cooperation emerges spontaneously from rational self-interest.
      </p>

      <CooperationMotivesDemo />

      <p className="text-dark-200 mb-4">
        This insight is liberating. It means that peaceful social cooperation does not require everyone
        to love one another or share the same values. Strangers from different cultures can trade to
        mutual advantage. The baker serves customers not from love but from the desire for income—
        yet the customers still get bread.
      </p>

      {/* Division of Labor */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Division of Labor</h2>

      <p className="text-dark-200 mb-4">
        The division of labor is the engine of civilization. When people specialize in particular tasks
        and trade with one another, total production vastly exceeds what isolated individuals could achieve.
        Mises identifies three natural conditions that make this specialization beneficial:
      </p>

      <DivisionOfLaborDemo />

      <CardGrid>
        <Card title="Specialization Intensifies" variant="primary">
          Division of labor doesn't just exploit existing differences—it <em>creates</em> new ones.
          As people specialize, they develop skills and knowledge that further increase their productivity
          in their chosen field.
        </Card>
        <Card title="Social Bonds Strengthen" variant="default">
          As people become more dependent on exchange with others, social ties intensify. The sentiment
          of belonging to a community is a <em>result</em> of recognizing the benefits of cooperation.
        </Card>
      </CardGrid>

      {/* Ricardo's Law of Association */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Ricardo's Law of Association</h2>

      <p className="text-dark-200 mb-4">
        The benefits of cooperation are obvious when each party is better at something different.
        But what if one party is better at <em>everything</em>? This is where Ricardo's brilliant insight
        becomes crucial. Mises calls it the "Law of Association" to emphasize its broader significance.
      </p>

      <RicardianLawDemo />

      <p className="text-dark-200 mb-4">
        The surgeon who is also the best typist in town still benefits from hiring a secretary.
        Why? Because every hour spent typing is an hour <em>not</em> spent performing surgery—where
        the surgeon's advantage is far greater. The secretary, though inferior at both tasks, still
        has a <em>comparative</em> advantage in typing.
      </p>

      <Callout type="insight" title="The Foundation of Civilization">
        Ricardo's Law shows that cooperation is beneficial for the most and least efficient alike.
        There is always room for everyone in the division of labor. This is why trade between
        rich and poor nations benefits both, and why even the "least productive" worker can find a place.
      </Callout>

      {/* Critique of Holistic View */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Society: Organism or Cooperation?</h2>

      <p className="text-dark-200 mb-4">
        Many thinkers have treated society as an organism—a living entity with its own will and purpose,
        superior to the individuals who compose it. Mises vigorously rejects this "holistic" or
        "collectivist" view.
      </p>

      <IndividualismVsCollectivismDemo />

      <p className="text-dark-200 mb-4">
        The terminology is often misleading. What is called "individualism" is actually a philosophy
        of <em>social cooperation</em>—it explains how millions of individuals coordinate their actions
        peacefully. What is called "collectivism" often means the subordination of individuals to
        state power wielded by a few rulers.
      </p>

      {/* The Individual Within Society */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Individual Within Society</h2>

      <p className="text-dark-200 mb-4">
        How should we think about the relationship between individual and society? Mises argues that
        society <em>serves</em> individuals, not the other way around. People rationally choose cooperation
        because it improves their lives. They don't sacrifice themselves for an abstract entity.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-primary-400 font-medium mb-3">What Society Provides</h5>
            <ul className="space-y-2 text-dark-300 text-sm">
              <li>• Greater productivity through specialization</li>
              <li>• Access to goods one cannot produce alone</li>
              <li>• Security through mutual defense</li>
              <li>• Knowledge accumulated across generations</li>
              <li>• Peace that allows long-term planning</li>
            </ul>
          </div>
          <div>
            <h5 className="text-amber-400 font-medium mb-3">What Individuals Contribute</h5>
            <ul className="space-y-2 text-dark-300 text-sm">
              <li>• Their specialized labor and skills</li>
              <li>• Respect for others' rights and property</li>
              <li>• Adherence to social norms and contracts</li>
              <li>• Restraint from violence and theft</li>
              <li>• Voluntary cooperation in exchange</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Great Society */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Great Society</h2>

      <p className="text-dark-200 mb-4">
        Not all human relations are social. War, for example, is <em>antisocial</em>—it destroys rather than creates.
        Yet even in warfare, we see the influence of social thinking. Conquerors often enslave rather than
        slaughter the vanquished, recognizing the potential for future cooperation (however exploitative).
      </p>

      <p className="text-dark-200 mb-4">
        The "Great Society" emerges when people extend the circle of cooperation beyond family, tribe, or nation.
        Rules of warfare, treatment of prisoners, diplomatic immunity—all reflect the recognition that
        today's enemy might be tomorrow's trading partner.
      </p>

      {/* Aggression and Human Nature */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Instinct of Aggression</h2>

      <p className="text-dark-200 mb-4">
        Mises acknowledges that humans have destructive urges. But he rejects the notion that this makes
        peaceful cooperation impossible or "unnatural." Humans also have urges for food, shelter, and security—
        and reason allows us to choose which urges to act upon.
      </p>

      <AggressionVsCooperationDemo />

      <Callout type="warning" title="Not All Choose Cooperation">
        Some individuals lack the discipline or foresight to resist antisocial urges. This is one reason
        for the state: to restrain those who would prey on others. But the majority, recognizing the
        benefits of peace, choose cooperation freely.
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Society is cooperation among individuals, not a mystical entity with its own will. It emerges from rational self-interest, not sacrifice.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Division of labor massively increases productivity. Three conditions drive it: unequal abilities, unequal resources, and large-scale tasks.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Ricardo's Law shows that cooperation benefits everyone—even when one party is superior at everything. Comparative advantage creates room for all.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The "individualist" philosophy is actually a theory of social cooperation. The "collectivist" philosophy often means subjugation to state power.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Humans have aggressive instincts, but also desires that only cooperation can satisfy. Reason enables the choice of peace over violence.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        With the nature of society established, the next chapter examines the fundamental mechanism of
        social cooperation: <em>exchange</em>. How do individuals coordinate their actions without a central
        planner? The answer lies in the market process, prices, and the remarkable phenomenon of indirect exchange.
      </p>
    </LessonLayout>
  );
}
