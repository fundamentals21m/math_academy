import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Example } from '@/components/common/ContentBlocks';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Part Two, Chapter 4: The Room Above the Shop</h2>

      <p>
        Winston rents the room above Mr. Charrington's shop—the room with no telescreen.
        It becomes a sanctuary where he and Julia can live, briefly, as free human beings.
      </p>

      <h3>A Private World</h3>

      <p>
        The room is shabby but comfortable, filled with old furniture and the
        old-fashioned twelve-hour clock. Most importantly, there is no telescreen.
        Winston and Julia can talk freely, make love, and simply exist together.
      </p>

      <Example title="The Room's Appeal">
        <p>
          "The room was a world, a pocket of the past where extinct animals could walk."
        </p>
        <p className="mt-2">
          They bring real coffee and sugar, real tea and bread with real jam. Julia
          puts on makeup and perfume—forbidden luxuries that transform her.
        </p>
      </Example>

      <h3>The Paperweight</h3>

      <p>
        Winston places the coral paperweight on the table. It comes to represent
        their private world—fragile, beautiful, and utterly vulnerable.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "The paperweight was the room he was in, and the coral was Julia's life and
          his own, fixed in a sort of eternity at the heart of the crystal."
        </p>
      </div>

      <h3>The Picture and the Rhyme</h3>

      <p>
        On the wall hangs an old engraving of St. Clement Danes church. Julia adds
        another verse to the "Oranges and Lemons" rhyme. Each verse recovered feels
        like a small victory against the obliteration of the past.
      </p>

      <Callout type="danger">
        <strong>Dramatic Irony:</strong> Behind that picture of St. Clement's hides
        a telescreen. The Thought Police have been watching from the beginning.
        The sanctuary is an elaborate trap.
      </Callout>

      <h3>The Singing Prole Woman</h3>

      <p>
        From the window, they can see a prole woman hanging laundry in the yard below.
        She sings endlessly—sentimental, machine-written songs—while working. Winston
        finds her "monstrous" body somehow beautiful, representing the indestructible
        vitality of ordinary humanity.
      </p>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Privacy as Freedom:</strong> The revolutionary act of having a private space</li>
        <li><strong className="text-rose-400">The Past as Refuge:</strong> Old objects as connections to a vanished world</li>
        <li><strong className="text-rose-400">Fragility:</strong> The vulnerability of their constructed sanctuary</li>
        <li><strong className="text-rose-400">The Proles' Humanity:</strong> The singing woman as symbol of survival</li>
      </ul>
    </LessonLayout>
  );
}
