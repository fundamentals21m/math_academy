import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "I swear by my life and my love of it that I will never live for the sake of another man, nor ask another man to live for mine."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — The Oath of Galt's Gulch
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Part Three of <em>Atlas Shrugged</em> opens with Dagny Taggart's plane crashing in the
        Colorado mountains as she pursues the mysterious figure she believes is the "destroyer"
        of the world's great minds. What she discovers is not destruction but creation—a hidden
        valley where the world's greatest producers have built their own civilization.
      </p>

      <Callout type="info">
        <p>
          <strong>Part Three: A Is A</strong> — The title refers to the law of identity, the
          foundational principle of Aristotelian logic. This section reveals the full philosophy
          underlying the strike and presents Rand's vision of a rational society.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary: Atlantis</h2>

      <p className="my-4">
        Dagny regains consciousness to find herself in a hidden valley surrounded by mountains.
        A man with copper-gold hair and gray-green eyes tends to her injuries—and she recognizes
        him as the man she has sought throughout the novel. <strong className="text-amber-400">John Galt</strong> finally
        reveals himself, not as a myth or a question, but as a man of extraordinary capability
        who has organized the strike of the mind.
      </p>

      <p className="my-4">
        The valley—which the strikers call "Galt's Gulch" or, mockingly, "Atlantis"—is a self-sufficient
        community hidden from the outside world by both geography and technology. Here, the world's
        greatest minds have retreated to build a society based on voluntary exchange and rational
        self-interest.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Discovery</h4>
        <p className="text-dark-200 text-lg mb-4">
          "I am the man who has deprived you of victims and thus has destroyed your world...
          I am the man who loves his life. I am the man who does not sacrifice his love or his values."
        </p>
        <p className="text-dark-400 text-sm">
          John Galt's introduction to Dagny marks the moment when the novel's central mystery is resolved.
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Strike of the Mind</h3>
          <p className="text-dark-300 text-sm">The most productive individuals have withdrawn their talents from a society that exploits and condemns them</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Atlantis Found</h3>
          <p className="text-dark-300 text-sm">The legendary lost civilization is reimagined as a place built by the greatest minds of the present</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Identity Revealed</h3>
          <p className="text-dark-300 text-sm">"Who is John Galt?" is finally answered—he is the man who stopped the motor of the world</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Voluntary Association</h3>
          <p className="text-dark-300 text-sm">The valley operates entirely on free exchange, with no forced obligations or sacrifices</p>
        </div>
      </div>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">John Galt</h4>
          <p className="text-sm text-dark-300">
            The mythical figure becomes flesh. Galt is revealed as a brilliant physicist and
            philosopher who invented a revolutionary motor—then abandoned it when the world
            demanded he sacrifice his achievement.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Dagny Taggart</h4>
          <p className="text-sm text-dark-300">
            For the first time, Dagny encounters a world that matches her values. Her internal
            conflict intensifies: she has found the man she loves and the world she wants, but
            she cannot abandon her railroad.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Strikers</h4>
          <p className="text-sm text-dark-300">
            Dagny reunites with figures she thought lost: Ellis Wyatt, the oil producer; Ken Danagger,
            the coal magnate; and many others who have chosen to "stop the motor of the world."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Midas Mulligan</h4>
          <p className="text-sm text-dark-300">
            The legendary banker who disappeared owns the valley itself. He was the first to
            understand Galt's vision and provided the land for the strikers' sanctuary.
          </p>
        </Card>
      </CardGrid>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <Callout type="note">
        <p>
          <strong>The Plane Crash:</strong> Dagny crashes while pursuing Quentin Daniels, who she
          believes is being recruited by the "destroyer." The crash landing in the hidden valley
          forces her confrontation with the truth she has avoided.
        </p>
      </Callout>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Dagny's Pursuit</p>
            <p className="text-sm text-dark-400">Flying after Quentin Daniels, Dagny follows a plane into the mountains of Colorado</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">The Crash</p>
            <p className="text-sm text-dark-400">Her plane clips a ray screen—the valley's invisible barrier—and crashes into the hidden sanctuary</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">First Meeting</p>
            <p className="text-sm text-dark-400">Dagny awakens to see John Galt for the first time—and recognizes him as her ideal</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">The Tour Begins</p>
            <p className="text-sm text-dark-400">Galt introduces Dagny to the valley and its inhabitants—the world's missing minds</p>
          </div>
        </div>
      </div>

      {/* The Valley's Philosophy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Valley's Philosophy</h2>

      <p className="my-4">
        Galt's Gulch operates on a single principle: no man may obtain values from others by
        physical force or fraud. Every transaction is voluntary. Every relationship is based on
        mutual benefit. The oath that every resident takes encapsulates this philosophy.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 border border-amber-600/50 my-6">
        <h4 className="font-semibold text-amber-400 mb-3 text-center">The Striker's Oath</h4>
        <p className="text-dark-200 text-lg text-center italic">
          "I swear by my life and my love of it that I will never live for the sake of another man,
          nor ask another man to live for mine."
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Central Conflict:</strong> Dagny has found everything she ever wanted—the
          man, the world, the values—but she cannot bring herself to abandon the outside world.
          She still believes she can save it. This tension will drive the remainder of the novel.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Why do you think Rand chose the name "Atlantis" for Galt's Gulch? What does the comparison to the legendary lost civilization suggest about the strikers' community and their relationship to the outside world?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The striker's oath states: "I will never live for the sake of another man, nor ask another man to live for mine." How does this principle differ from both selfishness (in the negative sense) and self-sacrifice? Can you think of real-world situations where this oath might be difficult to apply?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Dagny has finally found the man she sought and a world that matches her values, yet she feels torn about staying. What does her reluctance to abandon the outside world reveal about her character? Is her hesitation a virtue or a flaw?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. John Galt describes himself as "the man who loves his life." How does this self-description challenge conventional heroic archetypes? Do you find Galt's character compelling, or does his apparent perfection make him less relatable?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>John Galt is revealed</strong> as a real man—a physicist, philosopher, and
              the organizer of the strike of the mind.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Galt's Gulch</strong> is a hidden valley where the world's greatest producers
              have built a rational society based on voluntary exchange.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>The striker's oath</strong> establishes the moral foundation: no sacrifice,
              no forced obligation, only free exchange among equals.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Dagny faces her central conflict:</strong> she has found her ideal world but
              cannot abandon the one she left behind.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>"Atlantis"</strong> is redefined—not a sunken civilization of the past, but
              a new civilization built by those who refused to be sacrificed.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
