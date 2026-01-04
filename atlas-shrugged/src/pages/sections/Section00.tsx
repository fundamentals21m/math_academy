import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Book structure overview
const bookStructure = [
  { part: 1, title: 'Non-Contradiction', chapters: 'I-X', description: 'The world begins to crumble as capable people mysteriously disappear' },
  { part: 2, title: 'Either-Or', chapters: 'XI-XX', description: 'The conflict intensifies between producers and looters' },
  { part: 3, title: 'A Is A', chapters: 'XXI-XXX', description: 'The mystery is revealed and the philosophy of rational self-interest is presented' },
];

// Key characters explorer
function KeyCharactersExplorer() {
  const [activeCharacter, setActiveCharacter] = useState(0);

  const characters = [
    {
      name: 'Dagny Taggart',
      role: 'Vice President of Operations, Taggart Transcontinental',
      description: 'A brilliant railroad executive who refuses to give up on the world despite its decline.',
    },
    {
      name: 'Hank Rearden',
      role: 'Industrialist, creator of Rearden Metal',
      description: 'A self-made steel magnate who invents a revolutionary new alloy stronger and lighter than steel.',
    },
    {
      name: 'John Galt',
      role: 'The mysterious figure',
      description: 'The man behind the question that haunts the world. His identity and purpose form the central mystery.',
    },
    {
      name: 'Francisco d\'Anconia',
      role: 'Copper heir and industrialist',
      description: 'A brilliant aristocrat who seems to have abandoned his productive genius for a life of playboy frivolity.',
    },
    {
      name: 'James Taggart',
      role: 'President, Taggart Transcontinental',
      description: 'Dagny\'s brother, who runs the railroad through political connections rather than competence.',
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-amber-400">Key Characters</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {characters.map((character, i) => (
          <button
            key={i}
            onClick={() => setActiveCharacter(i)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activeCharacter === i
                ? 'bg-amber-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {character.name}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-amber-400 mb-1">{characters[activeCharacter].name}</h5>
        <p className="text-dark-400 text-sm mb-2 italic">{characters[activeCharacter].role}</p>
        <p className="text-dark-200">{characters[activeCharacter].description}</p>
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
        "Who is John Galt?"
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — The opening line of Atlas Shrugged
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Welcome to <em>Atlas Shrugged</em>, Ayn Rand's magnum opus and one of the most
        influential novels of the twentieth century. First published in 1957, this
        philosophical novel presents a world in decline—and asks what would happen
        if the productive minds of the world went on strike.
      </p>

      <Callout type="info">
        <p>
          <strong>About this course:</strong> We'll work through all 30 chapters of
          Atlas Shrugged, exploring Rand's narrative of a world in crisis and her
          philosophy of Objectivism. Each section includes plot summaries, key themes,
          character analysis, and discussion of the philosophical ideas presented.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary: The Theme</h2>

      <p className="my-4">
        The novel opens with the haunting question <strong className="text-amber-400">"Who is John Galt?"</strong>—a
        phrase that has become a slang expression of despair in this alternate America. Eddie Willers,
        a loyal employee of Taggart Transcontinental railroad, encounters a bum on the street who
        asks this question, triggering a sense of unease that Eddie cannot explain.
      </p>

      <p className="my-4">
        As Eddie walks through New York City, we see a world in decline: buildings with cracks running
        down their facades, gold leaf peeling from spires, and every fourth storefront dark and empty.
        A giant calendar hangs over the city, displaying "September 2"—a symbol of time passing as
        civilization slowly crumbles.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Opening Scene</h4>
        <p className="text-dark-200 text-lg mb-4">
          "The light was ebbing, and Eddie Willers could not distinguish the bum's face...
          the eyes looked straight at Eddie Willers, mocking and still—as if the question
          had been addressed to the causeless uneasiness within him."
        </p>
        <p className="text-dark-400 text-sm">
          From the very first paragraph, Rand establishes the atmosphere of dread and mystery
          that will pervade the entire novel.
        </p>
      </div>

      {/* Key Characters Introduction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Introduction to Dagny Taggart</h2>

      <p className="my-4">
        We meet <strong className="text-amber-400">Dagny Taggart</strong>, the Vice President in Charge
        of Operations at Taggart Transcontinental, one of the last great railroads still functioning.
        Unlike her brother James, who is the nominal President, Dagny is the one who actually keeps
        the railroad running through sheer competence and determination.
      </p>

      <p className="my-4">
        The chapter establishes the central conflict: the world is falling apart, capable people are
        mysteriously disappearing, and those who remain are struggling against a system that seems
        designed to punish success and reward failure.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Railroad</h4>
          <p className="text-sm text-dark-300">
            Taggart Transcontinental represents American industry and achievement—now
            struggling to survive in a hostile environment.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Rio Norte Line</h4>
          <p className="text-sm text-dark-300">
            A critical rail line in Colorado that has fallen into disrepair, symbolizing
            the broader collapse of infrastructure.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Rearden Steel</h4>
          <p className="text-sm text-dark-300">
            Dagny orders new rail from Hank Rearden, one of the few reliable suppliers
            left in the country.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Disappearances</h4>
          <p className="text-sm text-dark-300">
            Capable people are vanishing—Owen Kellogg, a promising engineer, is just
            one of many who have mysteriously quit.
          </p>
        </Card>
      </CardGrid>

      {/* Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes Introduced</h2>

      <Callout type="info">
        <p>
          <strong>The Mind on Strike:</strong> The central premise of Atlas Shrugged is revealed
          gradually throughout the novel: what if the people who move the world—the thinkers,
          inventors, and producers—simply stopped? What if Atlas shrugged?
        </p>
      </Callout>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Competence vs. Pull</h3>
          <p className="text-dark-300 text-sm">The contrast between Dagny (who achieves through ability) and James (who operates through political connections)</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Unnamed Dread</h3>
          <p className="text-dark-300 text-sm">Eddie's "causeless uneasiness" represents the subconscious awareness that something fundamental is wrong</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Decay and Decline</h3>
          <p className="text-dark-300 text-sm">The crumbling city infrastructure mirrors the intellectual and moral decay of society</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Mystery</h3>
          <p className="text-dark-300 text-sm">"Who is John Galt?" begins as a rhetorical expression of despair but will become the novel's central question</p>
        </div>
      </div>

      {/* Book Overview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Novel's Structure</h2>

      <p className="my-4">
        <em>Atlas Shrugged</em> is organized into three parts, each named after a principle
        of Aristotelian logic. The titles themselves hint at the philosophical foundation
        of the novel: the law of identity (A is A) and the law of non-contradiction.
      </p>

      <BookStructure />

      {/* Key Characters */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Meet the Characters</h2>

      <p className="mb-4">
        Before diving deeper into the chapters, familiarize yourself with the key players
        in this epic drama:
      </p>

      <KeyCharactersExplorer />

      {/* About Ayn Rand */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">About Ayn Rand</h2>

      <p className="my-4">
        Ayn Rand (1905-1982) was a Russian-American novelist and philosopher. Born Alisa
        Zinovyevna Rosenbaum in St. Petersburg, Russia, she witnessed the Russian Revolution
        and emigrated to the United States in 1926. Her experiences under Soviet collectivism
        profoundly shaped her philosophy of individualism.
      </p>

      <p className="my-4">
        Rand developed <strong className="text-amber-400">Objectivism</strong>, a philosophical
        system that holds reason as the only means to knowledge, rational self-interest as
        the proper moral code, and laissez-faire capitalism as the ideal political system.
        Atlas Shrugged is the fullest expression of her philosophy in fictional form.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-amber-400">1943</p>
          <p className="text-dark-300 text-sm mt-1">Published <em>The Fountainhead</em></p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-amber-400">1957</p>
          <p className="text-dark-300 text-sm mt-1">Published <em>Atlas Shrugged</em></p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-amber-400">1,168</p>
          <p className="text-dark-300 text-sm mt-1">Pages in the first edition</p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>A note on interpretation:</strong> Atlas Shrugged presents a specific
          philosophical viewpoint. This course aims to help you understand Rand's ideas
          as she presented them. Whether you agree or disagree with her conclusions,
          engaging seriously with her arguments will sharpen your own thinking.
        </p>
      </Callout>

      {/* Looking Ahead */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Looking Ahead</h2>

      <p className="my-4">
        In the next chapter, <strong>"The Chain"</strong>, we'll dive deeper into the
        business world of Taggart Transcontinental and meet Hank Rearden, the steel
        industrialist whose revolutionary new metal will become central to the plot.
        We'll also see more of the mysterious disappearances plaguing the nation's
        most capable people.
      </p>

      <Callout type="success">
        <p>
          <strong>What you'll gain:</strong> By working through Atlas Shrugged, you'll
          encounter one of the most ambitious works of philosophical fiction ever written.
          Whether you emerge as an advocate of Rand's ideas or a critic, you'll have
          engaged with arguments about reason, individualism, and capitalism that continue
          to influence debates today.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. The phrase "Who is John Galt?" is used as an expression of despair throughout the novel's world. What does it tell us about the society when people adopt a meaningless phrase to express their hopelessness? Can you think of similar phrases in our own culture?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Eddie Willers feels a "causeless uneasiness" about the state of the world. What specific details in the opening chapter create this atmosphere of decay? Why might Rand have chosen to open the novel this way?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Compare Dagny and James Taggart as they are introduced in this chapter. What does their contrasting approach to the railroad's problems suggest about the novel's view of competence versus political maneuvering?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The novel's three parts are titled after logical principles: "Non-Contradiction," "Either-Or," and "A Is A." Based on what you know so far, why might Rand have structured her novel around principles of logic?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>"Who is John Galt?"</strong> opens the novel as a phrase of
              despair—but will become the central mystery to be solved.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Dagny Taggart</strong> is introduced as a competent executive
              fighting to keep her railroad running in a world that punishes achievement.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>world is in decline</strong>—infrastructure crumbles, businesses
              fail, and capable people are mysteriously disappearing.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The contrast between <strong>producers and looters</strong> is established
              through Dagny vs. James Taggart.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The novel's three-part structure reflects <strong>principles of logic</strong>:
              Non-Contradiction, Either-Or, and A Is A.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
