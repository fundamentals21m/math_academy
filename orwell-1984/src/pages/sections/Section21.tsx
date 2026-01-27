import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2>Part Three, Chapter 4: Rehabilitation</h2>

      <p>
        The torture ends. Winston enters the second stage of his "rehabilitation"—physical
        recovery and mental reconstruction. He begins to accept the Party's reality,
        but one thing remains: he still has not betrayed Julia.
      </p>

      <h3>Physical Recovery</h3>

      <p>
        Winston is moved to a more comfortable cell. He is fed, allowed to rest,
        and his body begins to heal. He even gains weight. O'Brien visits like a
        doctor checking on a patient's progress.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "There was a time when this came to you more naturally. Do you remember
          writing in your diary: 'Freedom is the freedom to say that two plus two
          make four'?"
        </p>
      </div>

      <h3>Learning to Believe</h3>

      <p>
        Winston practices crimestop and doublethink. He learns to stop himself
        before completing forbidden thoughts. He accepts that the Party controls
        the past and that he has always been wrong.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>He writes out Party slogans</li>
        <li>He practices doublethink exercises</li>
        <li>He confesses to crimes he did not commit</li>
        <li>He begins to believe he actually committed them</li>
      </ul>

      <h3>The Mirror</h3>

      <p>
        O'Brien shows Winston his reflection in a mirror. Winston sees a broken
        creature—toothless, skeletal, scarred. He weeps at what he has become.
      </p>

      <Callout type="danger">
        <strong>Destruction:</strong> The Party has destroyed Winston's body,
        his mind, his memories, his beliefs. Only one thing remains intact:
        his love for Julia. This final remnant of humanity must be eliminated.
      </Callout>

      <h3>The Last Resistance</h3>

      <p>
        Winston knows he will eventually be shot. He hopes to die hating Big Brother—to
        preserve one small victory. He dreams of Julia and wakes shouting her name.
        He has not betrayed her in his heart.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "They can make you say anything—anything—but they can't make you believe it.
          They can't get inside you."
        </p>
      </div>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Reconstruction:</strong> The Party rebuilding what it destroyed</li>
        <li><strong className="text-rose-400">Self-Betrayal:</strong> Winston learning to police his own thoughts</li>
        <li><strong className="text-rose-400">Love as Resistance:</strong> Julia as his last connection to humanity</li>
      </ul>
    </LessonLayout>
  );
}
