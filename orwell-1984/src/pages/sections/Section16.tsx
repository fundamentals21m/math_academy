import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition } from '@/components/common/ContentBlocks';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2>Part Two, Chapter 9: The Book</h2>

      <p>
        During Hate Week, Winston receives <strong>The Book</strong>—Goldstein's
        manifesto. He reads it in the room above the shop, absorbing its analysis
        of how the Party maintains perpetual power.
      </p>

      <h3>Hate Week and the Shift</h3>

      <p>
        In the middle of Hate Week, the enemy changes. Oceania has always been at
        war with Eastasia; Eurasia has always been an ally. Mid-speech, the orator
        adjusts seamlessly. The crowd redirects its hatred without missing a beat.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "Oceania was at war with Eastasia: Oceania had always been at war with
          Eastasia... The speech had been proceeding for perhaps twenty minutes when
          a messenger hurried on to the platform... The speaker switched from one
          line to the other actually in mid-sentence."
        </p>
      </div>

      <h3>The Theory and Practice of Oligarchical Collectivism</h3>

      <p>
        The Book explains the mechanics of the Party's power:
      </p>

      <Definition title="War Is Peace">
        <p>
          Perpetual war consumes surplus production, preventing the masses from
          becoming comfortable. War also justifies constant surveillance and
          requires enemies to hate. The three superstates (Oceania, Eurasia, Eastasia)
          maintain a balance that none wishes to disturb.
        </p>
      </Definition>

      <Definition title="Freedom Is Slavery">
        <p>
          Individual freedom leads to failure and death. Only through collective
          submission to the Party can one achieve immortality through the Party's
          permanence.
        </p>
      </Definition>

      <Definition title="Ignorance Is Strength">
        <p>
          The masses must remain ignorant to be controlled. The Party maintains
          power through controlling the past, language, and thought itself. Knowledge
          would undermine obedience.
        </p>
      </Definition>

      <h3>The Three Classes</h3>

      <p>
        Society is divided into three permanent classes:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Inner Party (~2%):</strong> The brain of the state</li>
        <li><strong className="text-rose-400">Outer Party (~13%):</strong> The hands—bureaucrats who run the machinery</li>
        <li><strong className="text-rose-400">Proles (~85%):</strong> The masses, kept ignorant and controlled</li>
      </ul>

      <Callout type="info">
        <strong>The Ultimate Question:</strong> Winston understands HOW the Party
        maintains power, but not WHY. The Book explains the mechanics but not the
        motive. Why does the Party want power? This question haunts Winston.
      </Callout>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Ideology Exposed:</strong> The Party's methods laid bare</li>
        <li><strong className="text-rose-400">War as Control:</strong> Perpetual conflict as means of domination</li>
        <li><strong className="text-rose-400">Class Immobility:</strong> The permanent structure of society</li>
      </ul>
    </LessonLayout>
  );
}
