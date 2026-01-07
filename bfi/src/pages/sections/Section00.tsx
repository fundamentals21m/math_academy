import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Book structure
const bookStructure = [
  { part: 1, title: 'Bitcoin is for Individuals', chapters: '1-6', description: 'Why individuals have structural advantages over institutions in holding Bitcoin' },
  { part: 2, title: 'Individuals Run Institutions', chapters: '7-8', description: 'How key individuals drive institutional Bitcoin adoption' },
  { part: 3, title: 'Institutional Bitcoin', chapters: '9-13', description: 'Specific institutional use cases: deferred compensation, ETFs, treasury, credit, and pensions' },
];

// Key concepts explorer
function KeyConceptsExplorer() {
  const [activeConcept, setActiveConcept] = useState(0);

  const concepts = [
    {
      term: 'Hard Money',
      definition: 'Money that is difficult to produce and easy to verify, enabling capital accumulation and rational economic calculation.',
      insight: 'Bitcoin is the hardest money ever created - with a fixed supply cap of 21 million and global, instant verifiability.',
    },
    {
      term: 'Bearer Asset',
      definition: 'An asset that grants ownership to whoever possesses it, without requiring any intermediary to validate the claim.',
      insight: 'Bitcoin is a digital bearer asset - whoever controls the private keys controls the bitcoin, with no counterparty risk.',
    },
    {
      term: 'Circular Economy',
      definition: 'An economic system where goods and services are exchanged directly for Bitcoin without converting back to fiat currency.',
      insight: 'Individuals who build circular economies have more powerful Bitcoin than those who simply accumulate.',
    },
    {
      term: 'Counterparty Risk',
      definition: 'The risk that another party in a financial transaction will fail to fulfill their obligations.',
      insight: 'Institutional Bitcoin often introduces counterparty risks that self-custody eliminates.',
    },
    {
      term: 'Time Preference',
      definition: 'The relative valuation placed on present goods versus future goods.',
      insight: 'Individuals typically have lower time preference than institutions, giving them an advantage in holding Bitcoin long-term.',
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-orange-400">Key Concepts</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {concepts.map((concept, i) => (
          <button
            key={i}
            onClick={() => setActiveConcept(i)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activeConcept === i
                ? 'bg-orange-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {concept.term}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-orange-400 mb-2">{concepts[activeConcept].term}</h5>
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
        <div key={part} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-orange-600/50 transition-colors">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            {part}
          </span>
          <div>
            <p className="font-semibold text-dark-100">{title}</p>
            <p className="text-sm text-orange-400">Chapters {chapters}</p>
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
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "When the money used by the world is hard to make and easy to validate, it becomes
        an exceptional tool for capital accumulation, coordination of trade, and generally
        aligning the incentives of spenders, savers, entrepreneurs, and planners."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Brian Hirschfield, Bitcoin for Institutions
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Welcome to <em>Bitcoin for Institutions</em>, a comprehensive guide to understanding
        how institutional investors can approach Bitcoin. This book explores the fundamental
        tension between Bitcoin's nature as a tool for <strong className="text-orange-400">individual empowerment</strong> and
        the unique challenges institutions face in adopting it.
      </p>

      <Callout type="info">
        <p>
          <strong>About this course:</strong> This interactive course follows the structure
          of <em>Bitcoin for Institutions</em>, covering why Bitcoin favors individuals,
          how key individuals drive institutional adoption, and specific strategies for
          institutional Bitcoin exposure.
        </p>
      </Callout>

      {/* Section 1: What is Bitcoin for Institutions? */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What is Bitcoin for Institutions?</h2>

      <p className="my-4">
        Is bitcoin not bitcoin? Does its ownership change its properties? The answer, perhaps
        surprisingly, is <strong className="text-orange-400">yes</strong>. The power of bitcoin
        as capital is fundamentally determined by its owner.
      </p>

      <p className="my-4">
        Under a system of hard money, capital flows into the strongest and most capable hands.
        Entrepreneurs who make the best capital allocation decisions end up keeping their
        capital, while those who make poor decisions see their capital flow to those who
        better meet the demands of the market.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Individuals</h3>
          <p className="text-dark-300 text-sm">Bitcoin's intended users</p>
          <ul className="text-dark-400 text-sm mt-2 space-y-1">
            <li>• Full control over private keys</li>
            <li>• Can build circular economies</li>
            <li>• Patient, long-term time horizons</li>
            <li>• Value privacy and sovereignty</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Institutions</h3>
          <p className="text-dark-300 text-sm">Face structural challenges</p>
          <ul className="text-dark-400 text-sm mt-2 space-y-1">
            <li>• Custody requires intermediaries</li>
            <li>• Quarterly performance pressure</li>
            <li>• Regulatory and compliance constraints</li>
            <li>• Fiduciary duties limit flexibility</li>
          </ul>
        </div>
      </div>

      {/* Section 2: The Tyranny of Soft Money */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Tyranny of Soft Money</h2>

      <p className="my-4">
        Money "by decree" is no different from that which is counterfeit. No group of humans
        in history with the power to print money has ever proven itself capable of resisting
        the temptation to do so.
      </p>

      <p className="my-4">
        From the earliest traders with glass beads, through the coin-clipping Roman emperors,
        to the counterfeiting politicians and central bankers of today—as well as many
        modern-day institutions engaging in Bitcoin—the pattern repeats. A decree that
        cannot be resisted is considered <strong className="text-orange-400">tyranny</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Bitcoin's Promise</h4>
        <p className="text-dark-200 text-lg mb-4">
          "Bitcoin frees individuals from a kind of tyranny that most people don't realize exists."
        </p>
        <p className="text-dark-400 text-sm">
          By creating money that cannot be debased by decree, Bitcoin enables individuals to
          preserve the fruits of their labor across time—a capability that was previously
          available only to those with access to scarce physical assets like gold or land.
        </p>
      </div>

      {/* Section 3: The Power of Capital */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Power of Capital</h2>

      <p className="my-4">
        It is a misconception that the game is to build the biggest stack. The game is to
        accumulate <strong className="text-orange-400">the most powerful form of capital</strong>.
        While all bitcoin is treated as fungible, the truth is that the power of the capital
        is determined by its owner.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Strong Holders</h4>
          <p className="text-sm text-dark-300">
            Those with earning potential and value-add capabilities have more optionality
            and power with their bitcoin.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Circular Economies</h4>
          <p className="text-sm text-dark-300">
            Bitcoin holders who build relationships and trading networks create more
            powerful capital than passive accumulators.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Passive Holding</h4>
          <p className="text-sm text-dark-300">
            Still valuable—concentrates wealth into hard money—but less powerful
            than actively building an economy.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Institutional Holdings</h4>
          <p className="text-sm text-dark-300">
            Even dedicated institutions like Strategy will act like individuals
            with limited power in the Bitcoin economy.
          </p>
        </Card>
      </CardGrid>

      {/* Section 4: Who This Book Is For */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Who This Book Is For</h2>

      <p className="my-4">
        <em>Bitcoin for Institutions</em> is for organizations that seek to:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <ol className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
            <p className="text-dark-200">
              <strong>Understand the competitive landscape:</strong> The strongest individuals
              will value bitcoin higher than the strongest institutions and, over time, will
              outbid them for it.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
            <p className="text-dark-200">
              <strong>Recognize the risks:</strong> Understand the consequences of failing
              to grasp how much and why bitcoin is valued by individuals.
            </p>
          </li>
        </ol>
      </div>

      <p className="my-4">
        This book aims to give people at these institutions a roadmap towards owning and
        utilizing an extraordinarily powerful and emerging form of capital.
      </p>

      {/* Course Structure */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Course Structure</h2>

      <p className="my-4">
        The course is organized into three parts, progressing from the fundamental nature
        of Bitcoin to specific institutional strategies:
      </p>

      <BookStructure />

      {/* Key Concepts */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Concepts to Know</h2>

      <p className="mb-4">
        Before diving into the chapters, familiarize yourself with these foundational
        concepts that appear throughout the book:
      </p>

      <KeyConceptsExplorer />

      {/* About the Author */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">About the Author</h2>

      <p className="my-4">
        Brian Hirschfield is an actuary and financial risk manager with credentials including
        CFA, ASA, FRM, and CQF. His career was a "Forrest Gump-like journey" through storied
        financial companies and the collapses of significant financial systems.
      </p>

      <p className="my-4">
        Discovering bitcoin was the step that made it impossible to continue working for
        traditional financial companies. Two years of intensive bitcoin study led him to
        see clearly what was valuable and what was not in his profession—and ultimately
        to write this book.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-orange-400">CFA</p>
          <p className="text-dark-300 text-sm mt-1">Chartered Financial Analyst</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-orange-400">ASA</p>
          <p className="text-dark-300 text-sm mt-1">Associate of the Society of Actuaries</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-orange-400">FRM</p>
          <p className="text-dark-300 text-sm mt-1">Financial Risk Manager</p>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>On writing this book:</strong> "Bitcoin doesn't write books, but it enables
          people to see value more clearly for themselves, particularly when it comes to
          what a person spends their scarce time on. Understanding what in the world comes
          from work and energy, as opposed to the stroke of someone's pen or from printed
          money, helps people clarify what has true value."
        </p>
      </Callout>

      {/* Getting Started */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Ready to Begin?</h2>

      <p className="my-4">
        In the next section, we'll examine Chapter 1: <strong>HODL'ing Bitcoin is Irrational</strong>,
        which challenges conventional wisdom about why people hold bitcoin and what it really
        means for rational decision-making in a world of hard money.
      </p>

      <Callout type="success">
        <p>
          <strong>What you'll gain:</strong> By working through <em>Bitcoin for Institutions</em>,
          you'll develop a comprehensive understanding of Bitcoin from an institutional perspective—
          including its limitations, its opportunities, and the specific strategies available
          for institutional exposure through deferred compensation, ETFs, treasury management,
          structured credit, and pension funds.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Bitcoin empowers individuals</strong> in ways that institutions cannot
              fully replicate due to structural constraints.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              The <strong>power of bitcoin as capital</strong> depends on its owner—not
              just the quantity held.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Hard money</strong> enables capital to flow to those who make the
              best allocation decisions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Soft money</strong> (fiat currency) represents a form of tyranny
              that Bitcoin seeks to address.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              Institutions must understand <strong>why individuals value bitcoin</strong>
              to successfully integrate it into their strategies.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
