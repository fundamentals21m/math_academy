import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition, Example } from '@/components/common/ContentBlocks';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>Chapter 3: Dreams and Memory</h2>

      <p>
        This chapter takes us deep into Winston's psyche through his dreams, revealing
        the fragmented memories that haunt him and the first glimpse of the "Golden
        Country" that will become central to the novel.
      </p>

      <h3>Winston's Mother</h3>

      <p>
        Winston dreams of his <strong>mother</strong>—a tall, silent woman with noble
        features. She is in some underground place, perhaps sinking, with his baby
        sister in her arms. He understands somehow that they died so that he could
        live.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "His mother's memory tore at his heart because she had died loving him, when
          he was too young and selfish to love her in return, and because somehow, he
          did not remember how, she had sacrificed herself to a conception of loyalty
          that was private and unalterable."
        </p>
      </div>

      <p>
        Winston's mother represents a world that has been destroyed—a world where
        private emotions and personal loyalty were still possible, where tragedy
        could have dignity.
      </p>

      <h3>The Golden Country</h3>

      <p>
        Winston's dream shifts to a landscape he calls the <strong>Golden Country</strong>—a
        pastoral scene with rabbit-bitten pastures, elm trees, and a clear stream.
        In this dream, a dark-haired girl (the same one from the Two Minutes Hate)
        approaches him.
      </p>

      <Example title="The Dream of the Golden Country">
        <p>
          "With what seemed a single movement she tore off her clothes and flung them
          disdainfully aside... What overwhelmed him in that instant was admiration for
          the gesture with which she had thrown her clothes aside. With its grace and
          carelessness it seemed to annihilate a whole culture, a whole system of thought,
          as though Big Brother and the Party and the Thought Police could all be swept
          into nothingness by a single splendid movement of the arm."
        </p>
      </Example>

      <Definition title="The Golden Country">
        <p>
          Winston's recurring dream of an idyllic pastoral landscape. It represents
          freedom, nature, and the past—everything that has been destroyed by the Party.
          The Golden Country exists in opposition to the grey, decaying urban landscape
          of Oceania.
        </p>
      </Definition>

      <h3>The Telescreen Awakening</h3>

      <p>
        Winston is awakened by the telescreen blaring the morning exercises. A shrill
        female voice leads the "Physical Jerks"—compulsory calisthenics that all Party
        members must perform while the telescreen watches for insufficient enthusiasm.
      </p>

      <Callout type="warning">
        <strong>Total Control:</strong> Even the body belongs to the Party. Citizens
        must perform exercises on command, their faces observed for any sign of
        discontent. There is no private sphere—not the home, not the body, not even
        sleep.
      </Callout>

      <h3>The Mutability of the Past</h3>

      <p>
        During the exercises, Winston struggles to remember the past. When was Oceania
        at war with Eastasia? With Eurasia? He cannot be certain of anything before
        the Revolution. The Party controls all records, and memory is unreliable.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "If the Party could thrust its hand into the past and say of this or that
          event, it never happened—that, surely, was more terrifying than mere torture
          and death."
        </p>
      </div>

      <p>
        The Party's slogan encapsulates this power:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/20 text-center my-6">
        <p className="text-xl font-bold text-rose-400">
          "Who controls the past controls the future: who controls the present controls the past."
        </p>
      </div>

      <h3>Winston's Childhood Memories</h3>

      <p>
        Winston tries to recall his childhood. He remembers his father vaguely—a man
        who disappeared when Winston was young, probably "vaporized" by the Party.
        His memories are fragmentary: an air raid, hiding in a Tube station, his
        mother's anxious face.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>His father disappeared when Winston was ten or eleven</li>
        <li>His mother and baby sister vanished shortly after</li>
        <li>He cannot remember what happened to them</li>
        <li>He may have done something terrible to contribute to their disappearance</li>
      </ul>

      <Callout type="info">
        <strong>Memory and Guilt:</strong> Winston's uncertain memories contain a
        profound sense of guilt. He believes he somehow betrayed his mother and
        sister, though he cannot remember how. This unresolved guilt will resonate
        powerfully with the novel's conclusion.
      </Callout>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">Memory and Truth:</strong> The unreliability
          of memory in a world of constant propaganda
        </li>
        <li>
          <strong className="text-rose-400">The Past as Refuge:</strong> The Golden Country
          as symbol of lost freedom
        </li>
        <li>
          <strong className="text-rose-400">Private vs. Public:</strong> The destruction
          of private emotions and relationships
        </li>
        <li>
          <strong className="text-rose-400">Guilt and Betrayal:</strong> Winston's sense
          that he is already guilty of something unforgivable
        </li>
      </ul>
    </LessonLayout>
  );
}
