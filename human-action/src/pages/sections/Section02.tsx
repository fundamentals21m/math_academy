import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Praxeology vs History comparison
function SciencesComparison() {
  const [activeTab, setActiveTab] = useState<'praxeology' | 'history'>('praxeology');

  const sciences = {
    praxeology: {
      name: 'Praxeology',
      color: 'amber',
      method: 'Logical deduction from the action axiom',
      subject: 'The formal structure of all human action',
      tool: 'Conception',
      output: 'Universal theorems valid for all action',
      examples: [
        'If demand increases, prices rise (ceteris paribus)',
        'Action implies choice among alternatives',
        'Marginal utility diminishes',
      ],
      characteristics: [
        'A priori and deductive',
        'Independent of time and place',
        'Cannot be tested experimentally',
        'Yields apodictic certainty',
      ],
    },
    history: {
      name: 'History',
      color: 'blue',
      method: 'Collection and interpretation of past data',
      subject: 'Unique, concrete events and their causes',
      tool: 'Understanding',
      output: 'Interpretations of particular events',
      examples: [
        'Why did Rome fall?',
        'What caused the 1929 crash?',
        'How did Napoleon rise to power?',
      ],
      characteristics: [
        'Empirical and interpretive',
        'Bound to specific times and places',
        'Depends on the historian\'s judgment',
        'Yields probable interpretations',
      ],
    },
  };

  const active = sciences[activeTab];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-amber-400">The Two Sciences of Human Action</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('praxeology')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'praxeology'
              ? 'bg-amber-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Praxeology
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'history'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          History
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <p className="text-dark-500 text-xs uppercase tracking-wide mb-1">Method</p>
            <p className={`text-${active.color}-400 font-medium`}>{active.method}</p>
          </div>
          <div className="mb-4">
            <p className="text-dark-500 text-xs uppercase tracking-wide mb-1">Subject Matter</p>
            <p className="text-dark-200">{active.subject}</p>
          </div>
          <div className="mb-4">
            <p className="text-dark-500 text-xs uppercase tracking-wide mb-1">Mental Tool</p>
            <p className="text-dark-200">{active.tool}</p>
          </div>
          <div>
            <p className="text-dark-500 text-xs uppercase tracking-wide mb-1">Output</p>
            <p className="text-dark-200">{active.output}</p>
          </div>
        </div>

        <div>
          <p className="text-dark-500 text-xs uppercase tracking-wide mb-2">Characteristics</p>
          <ul className="space-y-2 mb-4">
            {active.characteristics.map((c, i) => (
              <li key={i} className="flex items-center gap-2 text-dark-300 text-sm">
                <span className={`w-1.5 h-1.5 rounded-full bg-${active.color}-400`}></span>
                {c}
              </li>
            ))}
          </ul>

          <p className="text-dark-500 text-xs uppercase tracking-wide mb-2">Examples</p>
          <ul className="space-y-1">
            {active.examples.map((e, i) => (
              <li key={i} className="text-dark-400 text-sm italic">"{e}"</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// A Priori vs Empirical visualization
function APrioriDemo() {
  const [showExample, setShowExample] = useState(0);

  const examples = [
    {
      theorem: 'Increasing the money supply (ceteris paribus) raises prices',
      aprioriBasis: 'Follows from the logic of supply and demand, which itself follows from the nature of human choice',
      notTested: 'We cannot run controlled experiments on economies',
      validation: 'Historical data can illustrate but not prove or disprove the theorem',
    },
    {
      theorem: 'Minimum wage laws cause unemployment among low-skilled workers',
      aprioriBasis: 'If you raise the price of something above market clearing, demand falls',
      notTested: 'Cannot hold all other factors constant in the real economy',
      validation: 'Statistics may be ambiguous due to countless confounding factors',
    },
    {
      theorem: 'Price controls lead to shortages or surpluses',
      aprioriBasis: 'Prices coordinate supply and demand; artificial prices prevent this coordination',
      notTested: 'Cannot isolate price control effects from everything else changing',
      validation: 'Historical examples (rent control, price ceilings) illustrate but don\'t "prove"',
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-amber-400">The A Priori Method in Action</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {examples.map((_, i) => (
          <button
            key={i}
            onClick={() => setShowExample(i)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              showExample === i
                ? 'bg-amber-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Example {i + 1}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-dark-500 text-xs uppercase tracking-wide mb-1">Economic Theorem</p>
          <p className="text-amber-400 font-medium">{examples[showExample].theorem}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-dark-900/50 rounded-lg p-3">
            <p className="text-emerald-400 text-xs uppercase tracking-wide mb-1">A Priori Basis</p>
            <p className="text-dark-300 text-sm">{examples[showExample].aprioriBasis}</p>
          </div>
          <div className="bg-dark-900/50 rounded-lg p-3">
            <p className="text-rose-400 text-xs uppercase tracking-wide mb-1">Why Not Tested</p>
            <p className="text-dark-300 text-sm">{examples[showExample].notTested}</p>
          </div>
          <div className="bg-dark-900/50 rounded-lg p-3">
            <p className="text-blue-400 text-xs uppercase tracking-wide mb-1">Role of Data</p>
            <p className="text-dark-300 text-sm">{examples[showExample].validation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Methodological Individualism visualization
function IndividualismDemo() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const collectiveStatements = [
    {
      id: 'nation',
      collective: '"The nation decided to go to war"',
      individual: 'Specific politicians voted; soldiers chose to follow orders; citizens acquiesced or protested',
      insight: 'The "nation" is an abstraction—only individuals make choices',
    },
    {
      id: 'market',
      collective: '"The market crashed"',
      individual: 'Many individual investors decided to sell; buyers didn\'t appear at previous prices',
      insight: 'Market phenomena are the aggregate result of countless individual decisions',
    },
    {
      id: 'society',
      collective: '"Society demands conformity"',
      individual: 'Specific individuals judge, ostracize, reward, or punish other individuals',
      insight: '"Society" cannot demand anything—only people can',
    },
    {
      id: 'class',
      collective: '"The working class rose up"',
      individual: 'Particular workers decided to strike, protest, or revolt based on their own valuations',
      insight: 'Class membership doesn\'t determine action; individuals choose how to act',
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-amber-400">Methodological Individualism in Practice</h4>
      <p className="text-dark-400 text-sm mb-4">
        Click each collective statement to see the individualist analysis:
      </p>

      <div className="space-y-3">
        {collectiveStatements.map((item) => (
          <div key={item.id} className="bg-dark-900 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === item.id ? null : item.id)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-dark-800 transition-colors"
            >
              <span className="text-dark-200 font-medium">{item.collective}</span>
              <span className={`text-amber-400 transition-transform ${expanded === item.id ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {expanded === item.id && (
              <div className="px-4 pb-4 border-t border-dark-700">
                <div className="pt-3">
                  <p className="text-dark-500 text-xs uppercase tracking-wide mb-1">Individual Analysis</p>
                  <p className="text-dark-300 text-sm mb-3">{item.individual}</p>
                  <p className="text-amber-400 text-sm italic">{item.insight}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The a priori sciences—logic, mathematics, and praxeology—aim at a knowledge
        unconditionally valid for all beings endowed with the logical structure of
        the human mind."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Ludwig von Mises, Human Action, Chapter II
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter II addresses a fundamental question: <em>How do we acquire knowledge
        about human action?</em> Mises argues that the sciences of human action require
        a radically different methodology than the natural sciences. Where physics relies
        on controlled experiments, economics must rely on
        <strong className="text-amber-400"> logical deduction from self-evident principles</strong>.
      </p>

      {/* Section 1: Praxeology and History */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Praxeology and History</h2>

      <p className="my-4">
        Mises identifies two main branches of the sciences of human action:
        <strong className="text-amber-400"> praxeology</strong> and
        <strong className="text-blue-400"> history</strong>. Though both study human
        action, they employ fundamentally different methods and yield different kinds
        of knowledge.
      </p>

      <SciencesComparison />

      <Callout type="info">
        <p>
          <strong>Key distinction:</strong> Praxeology yields <em>universal</em> theorems
          valid for all action everywhere, while history yields <em>particular</em>
          interpretations of unique events. You need both: theory to interpret facts,
          and facts to apply theory.
        </p>
      </Callout>

      {/* Section 2: The A Priori Character */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Formal and Aprioristic Character of Praxeology</h2>

      <p className="my-4">
        Mises makes a controversial but central claim: praxeology is an
        <strong className="text-amber-400"> a priori</strong> science. Its theorems
        are not derived from experience but from logical deduction starting from the
        category of human action. This does not mean economics is disconnected from
        reality—quite the opposite.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-amber-600/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-3">What "A Priori" Means</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Knowledge derived through reason, not observation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>The starting axiom is self-evident to reflection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Conclusions follow necessarily from premises</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Valid universally, not just for observed cases</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-600">
          <h3 className="text-lg font-semibold text-dark-400 mb-3">What "A Priori" Does NOT Mean</h3>
          <ul className="text-dark-400 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Arbitrary or invented</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Disconnected from reality</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Immune to criticism</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Mere definitions or tautologies</span>
            </li>
          </ul>
        </div>
      </div>

      <APrioriDemo />

      <Callout type="warning">
        <p>
          <strong>Why not empirical testing?</strong> In economics, we cannot run
          controlled experiments. When prices rise, a thousand things change simultaneously.
          We cannot isolate the effect of money supply changes while holding "everything
          else equal." History provides illustrations, not proofs.
        </p>
      </Callout>

      {/* Section 3: The A Priori and Reality */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The A Priori and Reality</h2>

      <p className="my-4">
        Critics often object: if praxeology is a priori, how can it tell us anything
        about the real world? Mises's answer is that the category of action is itself
        a feature of our mental apparatus for dealing with reality.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Logic Structure of the Mind</h4>
        <p className="text-dark-300 mb-4">
          Mises argues that the logical structure of the human mind is an "unanalyzable
          given." We cannot prove logic <em>using</em> logic—that would be circular.
          Similarly, we cannot prove the action axiom empirically, because understanding
          evidence already presupposes action.
        </p>
        <p className="text-dark-400 text-sm">
          The theorems of praxeology "refer to the reality of action as it appears in
          life and history." They are not floating abstractions but describe the
          necessary structure of any purposeful behavior.
        </p>
      </div>

      <p className="my-4">
        Mises addresses the claim that "primitive peoples" have "prelogical minds."
        This confuses the <em>content</em> of thought with its <em>structure</em>.
        Rain dancers employ means to achieve ends just like modern scientists—they
        simply have different beliefs about which means work. The logical form is identical.
      </p>

      {/* Section 4: Methodological Individualism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. The Principle of Methodological Individualism</h2>

      <p className="my-4">
        One of Mises's most important methodological principles is
        <strong className="text-amber-400"> methodological individualism</strong>:
        all social phenomena must ultimately be explained in terms of the actions
        of individuals. Collectives do not act—only individuals do.
      </p>

      <IndividualismDemo />

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Not Atomism</h4>
          <p className="text-sm text-dark-300">
            Methodological individualism does not deny that social context matters.
            It simply insists that "social forces" operate through individual choices.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Not Selfishness</h4>
          <p className="text-sm text-dark-300">
            Individuals can (and do) act for altruistic reasons. The principle concerns
            who acts, not why they act.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Against Holism</h4>
          <p className="text-sm text-dark-300">
            Rejects the idea that collectives (nations, classes) are real entities
            with purposes independent of their members.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Analytical Tool</h4>
          <p className="text-sm text-dark-300">
            A method for clear thinking about social phenomena, not a metaphysical
            claim about what "really exists."
          </p>
        </Card>
      </CardGrid>

      {/* Section 5: Methodological Singularism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. The Principle of Methodological Singularism</h2>

      <p className="my-4">
        Related to methodological individualism is
        <strong className="text-amber-400"> methodological singularism</strong>:
        we must analyze specific, concrete choices rather than abstract universals.
        Every action involves choosing between <em>definite quantities</em> available
        in <em>particular circumstances</em>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Classical Paradox of Value</h4>
        <p className="text-dark-300 mb-3">
          "Why is water, essential for life, cheaper than diamonds, which are mere luxuries?"
        </p>
        <p className="text-dark-400 text-sm mb-3">
          Classical economists stumbled over this because they asked about "water in general"
          vs. "diamonds in general." But no one chooses between all water and all diamonds.
        </p>
        <p className="text-amber-400 text-sm">
          <strong>Mises's solution:</strong> Actual choices involve specific quantities in
          specific circumstances. The marginal glass of water (when you have plenty) is
          worth less than a marginal diamond (when you have none).
        </p>
      </div>

      {/* Section 6: Conception and Understanding */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">6. Conception and Understanding</h2>

      <p className="my-4">
        Mises distinguishes two mental tools for studying human action:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-amber-600/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-3">Conception</h3>
          <p className="text-dark-300 text-sm mb-3">
            The mental tool of <strong>praxeology</strong>. Grasping the logical
            implications of categories through deductive reasoning.
          </p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Yields universal theorems</li>
            <li>• "If A, then necessarily B"</li>
            <li>• Independent of particular content</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-blue-600/30">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Understanding</h3>
          <p className="text-dark-300 text-sm mb-3">
            The mental tool of <strong>history</strong>. Interpreting the meaning
            and relevance of unique events.
          </p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Yields particular interpretations</li>
            <li>• "This event meant X because..."</li>
            <li>• Requires judgment about specific context</li>
          </ul>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The historian's dilemma:</strong> "The historian cannot simply let
          the facts speak for themselves." Selecting which facts are relevant requires
          a prior theory. But applying theory to history requires understanding the
          unique circumstances. Theory and history are interdependent.
        </p>
      </Callout>

      {/* Section 7: Ideal Types */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">7. On Ideal Types</h2>

      <p className="my-4">
        When historians describe "the medieval knight" or "the Renaissance merchant,"
        they employ <strong className="text-amber-400">ideal types</strong>—mental
        constructions that capture typical features relevant to understanding a period.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-amber-400 mb-2">Scientific Concepts</h4>
            <p className="text-dark-300 text-sm mb-2">
              Defined by necessary and sufficient conditions. All instances share
              the defining features.
            </p>
            <p className="text-dark-500 text-sm italic">
              "A triangle has three sides" — all triangles, no exceptions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">Ideal Types</h4>
            <p className="text-dark-300 text-sm mb-2">
              Constructed from relevant features judged significant. Real instances
              may deviate from the type.
            </p>
            <p className="text-dark-500 text-sm italic">
              "The medieval knight" — a useful abstraction, not a universal definition.
            </p>
          </div>
        </div>
      </div>

      {/* Section 8: The Procedure of Economics */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">8. The Procedure of Economics</h2>

      <p className="my-4">
        How does economics actually proceed? Mises argues that
        <strong className="text-amber-400"> all economic concepts and theorems are
        implied in the category of human action</strong>. The economist's task is to
        extract and analyze these implications systematically.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Start from Action</h4>
          <p className="text-sm text-dark-300">
            The category of action implies choice, preference, scarcity, means,
            ends, and uncertainty.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Deduce Systematically</h4>
          <p className="text-sm text-dark-300">
            Each theorem must connect logically to others. Economics requires
            comprehensive understanding, not narrow specialization.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Apply to Conditions</h4>
          <p className="text-sm text-dark-300">
            Pure theory meets reality when we specify the conditions "given in
            reality"—institutional frameworks, available resources, etc.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Maintain Coherence</h4>
          <p className="text-sm text-dark-300">
            "It is impossible to deal with a special segment of economics if one
            does not encase it in a complete system of action."
          </p>
        </Card>
      </CardGrid>

      {/* Section 9: Limitations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">9. The Limitations of Praxeological Concepts</h2>

      <p className="my-4">
        Praxeological concepts apply only to beings who act—that is, beings facing
        scarcity, uncertainty, and dissatisfaction. Mises demonstrates this by showing
        that these concepts become <strong className="text-amber-400">meaningless</strong>
        when applied to hypothetical omniscient or omnipotent beings.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">Where Praxeology Cannot Apply</h4>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="text-rose-400 font-bold shrink-0">•</span>
            <span>
              <strong>An omnipotent being</strong> could achieve any end without means—
              the concept of "means" becomes meaningless.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-rose-400 font-bold shrink-0">•</span>
            <span>
              <strong>An omniscient being</strong> would know all outcomes—
              there would be no uncertainty, no learning, no error.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-rose-400 font-bold shrink-0">•</span>
            <span>
              <strong>A perfectly content being</strong> would have no uneasiness—
              no reason to act at all.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-rose-400 font-bold shrink-0">•</span>
            <span>
              <strong>Utopian constructions</strong> that eliminate scarcity remove
              the preconditions for economic analysis.
            </span>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          <strong>Why this matters:</strong> Understanding the limits of praxeology
          clarifies its scope. Economics analyzes the choices of finite beings facing
          scarcity and uncertainty. It cannot tell us about hypothetical perfect worlds.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Praxeology and history</strong> are the two sciences of human action—
              one yields universal theorems, the other interprets unique events.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Praxeology is <strong>a priori</strong>—derived from logical deduction,
              not empirical testing, because controlled experiments are impossible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Methodological individualism</strong>: all social phenomena must
              be explained through individual actions—collectives don't act.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Methodological singularism</strong>: analyze concrete choices
              between specific quantities, not abstract universals.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Conception</strong> (praxeology) and <strong>understanding</strong>
              (history) are distinct but complementary mental tools.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              Praxeological concepts have <strong>limits</strong>—they apply only to
              finite beings facing scarcity and uncertainty.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> Chapter III examines "Economics and the Revolt
          Against Reason"—Mises's critique of ideologies (Marxism, historicism, racism)
          that deny the universality of economic reasoning.
        </p>
      </Callout>
    </LessonLayout>
  );
}
