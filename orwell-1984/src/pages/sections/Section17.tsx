import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2>Part Two, Chapter 10: The Arrest</h2>

      <p>
        In the room above the shop, Winston and Julia's sanctuary is shattered.
        The Thought Police have been watching all along. <strong>"You are the dead,"</strong>
        announces an iron voice, and their world collapses.
      </p>

      <h3>The Iron Voice</h3>

      <p>
        An iron voice from behind the picture of St. Clement's speaks: "You are the dead."
        The picture crashes to the floor, revealing the telescreen that has been
        hidden there all along.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/20 text-center my-6">
        <p className="text-2xl font-bold text-rose-400">
          "You are the dead."
        </p>
        <p className="mt-2 text-dark-400">
          — The telescreen speaks
        </p>
      </div>

      <h3>The Trap</h3>

      <p>
        The room—which seemed like a refuge from the past—was a trap from the beginning.
        Mr. Charrington appears, transformed. He is not an old man at all but a member
        of the Thought Police, perhaps only thirty-five years old.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "It occurred to Winston that for the first time in his life he was looking,
          with knowledge, at a member of the Thought Police."
        </p>
      </div>

      <h3>The Paperweight Smashed</h3>

      <p>
        A guard picks up the glass paperweight and smashes it against the hearthstone.
        The tiny fragment of coral—the symbol of their private world—rolls across the
        floor, pathetically small.
      </p>

      <Callout type="danger">
        <strong>Symbolism:</strong> The destruction of the paperweight represents
        the destruction of everything Winston tried to preserve—beauty, privacy,
        the past, and his love for Julia. Their world has been as fragile as glass.
      </Callout>

      <h3>The Final Verse</h3>

      <p>
        Mr. Charrington completes the nursery rhyme Winston has been trying to remember:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="mt-2 italic text-dark-300">
          "Here comes a candle to light you to bed,<br />
          Here comes a chopper to chop off your head!"
        </p>
      </div>

      <h3>Julia's Capture</h3>

      <p>
        Guards seize Julia. One punches her in the stomach, and she collapses, gasping.
        They carry her out. Winston glimpses her face—"yellow and contorted, with the
        eyes shut"—and that is the last he sees of her.
      </p>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Surveillance:</strong> The Party sees everything; nothing is private</li>
        <li><strong className="text-rose-400">Betrayal:</strong> Mr. Charrington's true identity</li>
        <li><strong className="text-rose-400">The End of Hope:</strong> The sanctuary destroyed</li>
        <li><strong className="text-rose-400">Fragility:</strong> The paperweight as symbol of their doomed world</li>
      </ul>

      <Callout type="info">
        <strong>End of Part Two:</strong> With this chapter, Part Two concludes.
        Winston and Julia's rebellion has been crushed. Part Three will take place
        in the Ministry of Love, where the Party will attempt to remake Winston's mind.
      </Callout>
    </LessonLayout>
  );
}
