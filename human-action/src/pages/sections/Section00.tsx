import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Structure of the book
const bookStructure = [
  { part: 1, title: 'Human Action', chapters: 'I-VII', description: 'Foundations of praxeology and the nature of human action' },
  { part: 2, title: 'Action Within the Framework of Society', chapters: 'VIII-X', description: 'Social cooperation, division of labor, and exchange' },
  { part: 3, title: 'Economic Calculation', chapters: 'XI-XIII', description: 'The role of monetary calculation in economic decisions' },
  { part: 4, title: 'Catallactics', chapters: 'XIV-XXIV', description: 'The economics of the market society' },
  { part: 5, title: 'Social Cooperation Without a Market', chapters: 'XXV-XXVI', description: 'The impossibility of socialist calculation' },
  { part: 6, title: 'The Hampered Market Economy', chapters: 'XXVII-XXXVI', description: 'Government intervention and its consequences' },
  { part: 7, title: 'The Place of Economics in Society', chapters: 'XXXVII-XXXIX', description: 'The role of economic knowledge' },
];

// Key concepts explorer
function KeyConceptsExplorer() {
  const [activeConcept, setActiveConcept] = useState(0);

  const concepts = [
    {
      term: 'Praxeology',
      definition: 'The general theory of human action. The science that studies the formal implications of the fact that humans act purposefully.',
      insight: 'Mises argues that economics is a branch of praxeology—the broader study of all purposeful human behavior.',
    },
    {
      term: 'Human Action',
      definition: 'Purposeful behavior aimed at substituting a more satisfactory state of affairs for a less satisfactory one.',
      insight: 'Action implies choice, and choice implies giving something up. Every action involves an opportunity cost.',
    },
    {
      term: 'Catallactics',
      definition: 'The science of exchanges. The analysis of interpersonal exchange relationships in a market economy.',
      insight: 'While praxeology is the general science of action, catallactics focuses specifically on market phenomena.',
    },
    {
      term: 'Methodological Individualism',
      definition: 'The principle that social phenomena must be explained by tracing them back to the actions of individuals.',
      insight: 'There is no "society" that acts—only individuals act. Collective concepts are useful abstractions, not acting entities.',
    },
    {
      term: 'A Priori Reasoning',
      definition: 'Knowledge derived from logical deduction rather than empirical observation.',
      insight: 'Economic laws are not discovered through statistics but through logical analysis of the implications of human action.',
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-amber-400">Key Concepts</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {concepts.map((concept, i) => (
          <button
            key={i}
            onClick={() => setActiveConcept(i)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activeConcept === i
                ? 'bg-amber-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {concept.term}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-amber-400 mb-2">{concepts[activeConcept].term}</h5>
        <p className="text-dark-200 mb-3">{concepts[activeConcept].definition}</p>
        <p className="text-dark-400 text-sm italic">{concepts[activeConcept].insight}</p>
      </div>
    </div>
  );
}

// Book structure visualization
function BookStructure() {
  return (
    <div className="space-y-3 my-6">
      {bookStructure.map(({ part, title, chapters, description }) => (
        <div key={part} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-amber-600/50 transition-colors">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">
            {part}
          </span>
          <div>
            <p className="font-semibold text-dark-100">{title}</p>
            <p className="text-sm text-amber-400">Chapters {chapters}</p>
            <p className="text-sm text-dark-400 mt-1">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Human action is purposeful behavior. Or we may say: Action is will put into
        operation and transformed into an agency, is aiming at ends and goals."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Ludwig von Mises, Human Action (1949)
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Welcome to <em>Human Action: A Treatise on Economics</em>, Ludwig von Mises's
        masterwork and the foundational text of the Austrian School of economics.
        First published in 1949, this comprehensive treatise presents a complete
        reconstruction of economic theory based on a single fundamental concept:
        <strong className="text-amber-400"> purposeful human action</strong>.
      </p>

      <Callout type="info">
        <p>
          <strong>About this course:</strong> We'll work through all 39 chapters of
          Human Action, exploring Mises's systematic development of economic theory
          from first principles. Each section includes key concepts, important arguments,
          and connections to modern economic debates.
        </p>
      </Callout>

      {/* Section 1: Economics and Praxeology */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Economics and Praxeology</h2>

      <p className="my-4">
        Mises opens by situating economics within a broader science he calls
        <strong className="text-amber-400"> praxeology</strong>—the general theory of
        human action. While historians study the particular content of human actions
        throughout history, praxeologists study the <em>formal structure</em> of action itself.
      </p>

      <p className="my-4">
        Economics, in Mises's view, is the most developed branch of praxeology. It examines
        what happens when individuals engage in exchange relationships—buying, selling,
        trading, and cooperating in markets. This science of exchange he calls
        <strong className="text-amber-400"> catallactics</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Praxeology</h3>
          <p className="text-dark-300 text-sm">The general, formal theory of human action</p>
          <ul className="text-dark-400 text-sm mt-2 space-y-1">
            <li>• Studies the logic of choice</li>
            <li>• Applies to all purposeful behavior</li>
            <li>• A priori and deductive</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Catallactics</h3>
          <p className="text-dark-300 text-sm">The economics of exchange relationships</p>
          <ul className="text-dark-400 text-sm mt-2 space-y-1">
            <li>• Studies market phenomena</li>
            <li>• Prices, wages, interest, profit</li>
            <li>• Branch of praxeology</li>
          </ul>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>Why "praxeology"?</strong> The term comes from the Greek <em>praxis</em>
          (action, practice) and <em>logos</em> (reason, study). Mises adopted this term
          to emphasize that economics rests on a broader foundation—the logical structure
          of purposeful behavior itself.
        </p>
      </Callout>

      {/* Section 2: The Epistemological Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Epistemological Problem</h2>

      <p className="my-4">
        How do we acquire economic knowledge? Mises argues that economic truths are not
        derived from observation or experiment (as in the natural sciences), but from
        <strong className="text-amber-400"> logical deduction</strong> starting from the
        self-evident fact that humans act purposefully.
      </p>

      <p className="my-4">
        The fundamental axiom—"humans act"—is not a hypothesis to be tested but a
        starting point whose truth is self-evident to anyone who reflects on it.
        From this axiom, through pure logical reasoning, we can derive the entire
        structure of economic theory.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Action Axiom</h4>
        <p className="text-dark-200 text-lg mb-4">
          "Human beings engage in purposeful behavior toward chosen goals."
        </p>
        <p className="text-dark-400 text-sm">
          This is not an empirical claim but a <em>category</em> of human thought—the
          precondition for any understanding of human affairs. Even to deny it requires
          purposeful action, making the denial self-refuting.
        </p>
      </div>

      <p className="my-4">
        Mises emphasizes that economic reasoning applies universally—across all times,
        races, classes, and cultures. The logical structure of human action is the same
        whether we study ancient Rome or modern America. What differs is only the
        <em>content</em> of people's values and choices, not the <em>form</em> of their reasoning.
      </p>

      {/* Section 3: Economic Theory and Practice */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Economic Theory and Practice</h2>

      <p className="my-4">
        Economics is not merely abstract theorizing—it has profound practical implications.
        Mises argues that the unprecedented improvement in living standards over the past
        centuries resulted directly from the application of economic insights.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Division of Labor</h4>
          <p className="text-sm text-dark-300">
            Understanding how specialization increases productivity transformed
            society from subsistence farming to industrial abundance.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Free Trade</h4>
          <p className="text-sm text-dark-300">
            Economic analysis showed that trade benefits all parties, leading to
            policies that expanded global prosperity.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Sound Money</h4>
          <p className="text-sm text-dark-300">
            Understanding monetary theory helped societies avoid the disasters
            of hyperinflation and currency collapse.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Market Prices</h4>
          <p className="text-sm text-dark-300">
            Recognition that prices coordinate economic activity better than
            central planning enabled modern prosperity.
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          <strong>A caveat:</strong> Economic theory tells us the <em>consequences</em>
          of policies, not which policies to choose. Whether we should prioritize
          growth, equality, or other values is a question of ethics, not economics.
          Economics is "wertfrei" (value-free)—it describes, it does not prescribe.
        </p>
      </Callout>

      {/* Section 4: Résumé / Course Overview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. What This Book Covers</h2>

      <p className="my-4">
        <em>Human Action</em> is organized into seven parts, moving from the most
        abstract foundations to increasingly concrete applications. Mises builds
        his entire system step by step, with each chapter building on what came before.
      </p>

      <BookStructure />

      {/* Key Concepts */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Concepts to Know</h2>

      <p className="mb-4">
        Before diving into the chapters, familiarize yourself with these foundational
        terms that Mises uses throughout the book:
      </p>

      <KeyConceptsExplorer />

      {/* About Mises */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">About Ludwig von Mises</h2>

      <p className="my-4">
        Ludwig von Mises (1881-1973) was an Austrian-American economist and one of the
        most influential thinkers in the classical liberal tradition. Born in Lemberg
        (now Lviv, Ukraine), he studied at the University of Vienna and became a
        leading figure in the Austrian School of economics.
      </p>

      <p className="my-4">
        Mises fled Europe during World War II and eventually settled in New York,
        where he taught at New York University until 1969. His students and followers
        include Nobel laureate Friedrich Hayek, Murray Rothbard, and Israel Kirzner.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-amber-400">1912</p>
          <p className="text-dark-300 text-sm mt-1">Published <em>The Theory of Money and Credit</em></p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-amber-400">1920</p>
          <p className="text-dark-300 text-sm mt-1">Economic Calculation Problem paper</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-amber-400">1949</p>
          <p className="text-dark-300 text-sm mt-1">Published <em>Human Action</em></p>
        </div>
      </div>

      {/* Why Read Human Action */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Read Human Action?</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Systematic Foundation</h4>
          <p className="text-sm text-dark-300">
            Unlike piecemeal treatments, Mises builds all of economics from
            a single starting point—human action.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Methodological Clarity</h4>
          <p className="text-sm text-dark-300">
            Understand <em>how</em> economists reason, not just <em>what</em>
            they conclude.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Timeless Insights</h4>
          <p className="text-sm text-dark-300">
            The logic of human action applies regardless of historical
            circumstances or technological change.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Policy Relevance</h4>
          <p className="text-sm text-dark-300">
            From inflation to regulation to socialism, Mises analyzes the
            consequences of policy choices.
          </p>
        </Card>
      </CardGrid>

      {/* Getting Started */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Ready to Begin?</h2>

      <p className="my-4">
        In the next section, we'll examine <strong>Chapter I: Acting Man</strong>,
        where Mises lays out the fundamental axiom of human action and distinguishes
        purposeful behavior from mere reflexes and unconscious responses. This
        chapter establishes the foundation on which everything else rests.
      </p>

      <Callout type="success">
        <p>
          <strong>What you'll gain:</strong> By working through <em>Human Action</em>,
          you'll develop a comprehensive framework for understanding economic phenomena—
          from prices and wages to business cycles and government intervention. You'll
          see economics not as a collection of disconnected models, but as a unified
          science of human choice.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Praxeology</strong> is the general science of human action;
              <strong> economics</strong> (catallactics) is its most developed branch.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Economic knowledge is derived through <strong>a priori reasoning</strong>
              from the self-evident axiom that humans act purposefully.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Economic theory has <strong>universal validity</strong>—the logic of
              action applies across all times, places, and cultures.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Economics is <strong>value-free</strong>—it describes consequences of
              actions, not which values we should pursue.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <em>Human Action</em> presents a <strong>complete, systematic</strong>
              development of economic theory across 7 parts and 39 chapters.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
