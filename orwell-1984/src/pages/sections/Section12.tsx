import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Part Two, Chapter 5: Syme Vanishes</h2>

      <p>
        Winston's prediction comes true: <strong>Syme vanishes</strong>. One day he
        simply ceases to exist—removed from all records, erased from memory. Meanwhile,
        Hate Week preparations consume the Ministry.
      </p>

      <h3>The Disappearance</h3>

      <p>
        There is no announcement, no arrest, no trial. Syme simply stops appearing
        at work. His name is removed from the chess committee lists and any document
        he ever signed. He becomes an "unperson."
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "Syme had ceased to exist: he had never existed."
        </p>
      </div>

      <h3>Hate Week</h3>

      <p>
        The Ministry is consumed with preparations for Hate Week—an orgy of
        anti-Goldstein propaganda. Production quotas increase; everyone works
        sixteen-hour days. The telescreen screams with martial music and announcements
        of military victories.
      </p>

      <Callout type="warning">
        <strong>Historical Parallel:</strong> Hate Week echoes the propaganda
        campaigns of both Nazi Germany and Stalinist Russia, where mass rallies
        channeled public emotion into support for the regime and hatred of its
        enemies.
      </Callout>

      <h3>Winston and Julia's Refuge</h3>

      <p>
        Despite the chaos, Winston and Julia continue meeting in their room. Their
        relationship has become almost domestic—they cook meals, lie in bed, and
        talk freely. But Winston knows it cannot last.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>They know they will be caught eventually</li>
        <li>They discuss what they will do under torture</li>
        <li>Julia believes confession doesn't matter—only feelings do</li>
        <li>Winston is not so sure</li>
      </ul>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Erasure:</strong> How the Party eliminates not just people but their very existence</li>
        <li><strong className="text-rose-400">Manufactured Hatred:</strong> The function of orchestrated emotion</li>
        <li><strong className="text-rose-400">Doomed Love:</strong> The awareness that their happiness cannot last</li>
      </ul>
    </LessonLayout>
  );
}
