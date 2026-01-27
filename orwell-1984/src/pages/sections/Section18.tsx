import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition } from '@/components/common/ContentBlocks';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2>Part Three, Chapter 1: The Cells</h2>

      <p>
        Winston is imprisoned in the <strong>Ministry of Love</strong>—the
        windowless fortress where the Party remakes minds. Part Three chronicles
        his descent into the hell of interrogation, torture, and "rehabilitation."
      </p>

      <h3>The Ministry of Love</h3>

      <Definition title="Ministry of Love (Miniluv)">
        <p>
          The Party's center for torture and "rehabilitation." A windowless pyramid
          of white concrete, bathed in constant artificial light. Here the Thought
          Police break down prisoners and rebuild them as loyal Party members. "The
          place where there is no darkness."
        </p>
      </Definition>

      <p>
        Winston finds himself in a high-ceilinged, windowless cell, lit by cold,
        unblinking lights that never dim. There is no day or night here—only the
        eternal present of the Party.
      </p>

      <h3>The Other Prisoners</h3>

      <p>
        Winston sees other prisoners come and go. Some are proles arrested for
        common crimes; others are Party members. Among them:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>A nameless poet, starving and terrified</li>
        <li>A huge prole woman arrested for prostitution</li>
        <li>A "chinless" man who sits with terrible composure</li>
        <li><strong>Parsons</strong>—Winston's orthodox neighbor</li>
      </ul>

      <h3>Parsons' Arrest</h3>

      <p>
        Tom Parsons has been arrested for thoughtcrime—denounced by his own daughter
        for saying "Down with Big Brother" in his sleep. He is proud of her loyalty.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "'Who denounced you?' said Winston.<br />
          'It was my little daughter,' said Parsons with a sort of doleful pride."
        </p>
      </div>

      <Callout type="danger">
        <strong>Full Circle:</strong> Winston predicted in Chapter 2 that Parsons'
        children would one day denounce him. Now that prophecy is fulfilled. No one
        is safe—not even the most orthodox believer.
      </Callout>

      <h3>Room 101</h3>

      <p>
        Winston hears a prisoner screaming to be taken anywhere but "Room 101."
        The guards comply—Room 101 is reserved for something worse than ordinary
        torture.
      </p>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Total Control:</strong> The Party's complete power over body and environment</li>
        <li><strong className="text-rose-400">Family Betrayal:</strong> Children as instruments of the state</li>
        <li><strong className="text-rose-400">The Terror of Room 101:</strong> Fear of what lies ahead</li>
      </ul>
    </LessonLayout>
  );
}
