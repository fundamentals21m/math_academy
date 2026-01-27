import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition, Example } from '@/components/common/ContentBlocks';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Chapter 5: Newspeak</h2>

      <p>
        During lunch in the canteen of the Ministry of Truth, Winston encounters
        <strong> Syme</strong>, a philologist working on the Eleventh Edition of the
        Newspeak dictionary. Their conversation reveals the true purpose of Newspeak:
        the elimination of thought itself.
      </p>

      <h3>Syme the Philologist</h3>

      <p>
        Syme is a small, dark-haired man with "large, protuberant eyes" that seem to
        "search your face closely" when he speaks. He is brilliant and enthusiastic
        about his work—perhaps too enthusiastic for his own safety.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "You think, I dare say, that our chief job is inventing new words. But not a
          bit of it! We're destroying words—scores of them, hundreds of them, every day.
          We're cutting the language down to the bone."
        </p>
      </div>

      <h3>The Purpose of Newspeak</h3>

      <Definition title="Newspeak">
        <p>
          The official language of Oceania, designed to limit the range of thought.
          By eliminating words, the Party eliminates the concepts they represent.
          The goal is to make "thoughtcrime literally impossible, because there will
          be no words in which to express it."
        </p>
      </Definition>

      <p>
        Newspeak reduces language to its bare essentials:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>"Good"</strong> remains, but "bad" becomes "ungood"</li>
        <li><strong>"Excellent"</strong> becomes "plusgood" or "doubleplusgood"</li>
        <li>Words like "honor," "justice," and "freedom" are eliminated entirely</li>
        <li>The vocabulary shrinks with each new edition of the dictionary</li>
      </ul>

      <Example title="The Beauty of Destruction">
        <p>
          Syme describes the destruction of words with almost religious fervor:
        </p>
        <p className="mt-2 italic">
          "It's a beautiful thing, the destruction of words... Every concept that can
          ever be needed will be expressed by exactly one word, with its meaning rigidly
          defined and all its subsidiary meanings rubbed out and forgotten."
        </p>
        <p className="mt-2">
          By 2050, he predicts, the entire literature of the past will be unintelligible.
          Even the Party slogans will change because contradiction will be impossible.
        </p>
      </Example>

      <h3>Orthodoxy and Syme's Fate</h3>

      <p>
        Despite his devotion to the Party's work, Winston observes that Syme is
        too intelligent. He sees too clearly and speaks too plainly. The Party does
        not want people who understand its methods—only people who follow them
        unquestioningly.
      </p>

      <Callout type="danger">
        <strong>Foreshadowing:</strong> Winston thinks: "One of these days, Syme will
        be vaporized. He is too intelligent. He sees too clearly and speaks too plainly.
        The Party does not like such people." This prediction will prove accurate.
      </Callout>

      <h3>Tom Parsons</h3>

      <p>
        Winston also encounters <strong>Tom Parsons</strong> in the canteen—the sweaty,
        dim-witted neighbor whose children are Spies. Parsons represents the ideal
        Party member: utterly orthodox, unquestioningly obedient, and intellectually
        incapable of thoughtcrime.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "Parsons was Winston's fellow-employee at the Ministry of Truth. He was a
          fattish but active man of paralysing stupidity, a mass of imbecile enthusiasms—one
          of those completely unquestioning, devoted drudges on whom, more even than on
          the Thought Police, the stability of the Party depended."
        </p>
      </div>

      <h3>The Canteen Food</h3>

      <p>
        The chapter also depicts the miserable quality of life under the Party. The
        canteen serves filthy stew, hard bread, and muddy coffee. Everything is scarce,
        tasteless, and inadequate—yet the telescreen constantly announces increased
        production and raised standards of living.
      </p>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">Language as Control:</strong> The systematic
          reduction of vocabulary to limit thought
        </li>
        <li>
          <strong className="text-rose-400">Intelligence as Danger:</strong> The threat
          posed by those who think too clearly
        </li>
        <li>
          <strong className="text-rose-400">Orthodoxy vs. Understanding:</strong> The Party
          prefers blind obedience to intelligent compliance
        </li>
        <li>
          <strong className="text-rose-400">Doublethink in Practice:</strong> The gap between
          propaganda and reality in daily life
        </li>
      </ul>

      <Callout type="info">
        <strong>Linguistic Theory:</strong> Orwell's concept of Newspeak draws on the
        Sapir-Whorf hypothesis—the idea that language shapes thought. If certain
        concepts cannot be expressed, can they be thought at all? The Appendix to
        the novel explores Newspeak in detail.
      </Callout>
    </LessonLayout>
  );
}
