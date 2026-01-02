import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <Proposition
        title="Proposition I.23"
        proof={
          <>
            <p>
              Let the angle <em>DCE</em> be the given rectilineal angle, <em>AB</em> the given
              straight line, and <em>A</em> the point on it.
            </p>
            <p className="mt-2">
              Thus it is required to construct on the given straight line <em>AB</em>, and at the
              point <em>A</em> on it, a rectilineal angle equal to the given rectilineal angle{' '}
              <em>DCE</em>.
            </p>
            <p className="mt-2">
              On the straight lines <em>CD</em>, <em>CE</em> let the points <em>D</em>, <em>E</em>{' '}
              be taken at random; let <em>DE</em> be joined, and out of three straight lines which
              are equal to the three straight lines <em>CD</em>, <em>DE</em>, <em>CE</em> let the
              triangle <em>AFG</em> be constructed in such a way that <em>CD</em> is equal to{' '}
              <em>AF</em>, <em>CE</em> to <em>AG</em>, and further <em>DE</em> to <em>FG</em>. [I. 22]
            </p>
            <p className="mt-2">
              Then, since the two sides <em>DC</em>, <em>CE</em> are equal to the two sides{' '}
              <em>FA</em>, <em>AG</em> respectively, and the base <em>DE</em> is equal to the base{' '}
              <em>FG</em>, the angle <em>DCE</em> is equal to the angle <em>FAG</em>. [I. 8]
            </p>
            <p className="mt-2">
              Therefore on the given straight line <em>AB</em>, and at the point <em>A</em> on it,
              the rectilineal angle <em>FAG</em> has been constructed equal to the given rectilineal
              angle <em>DCE</em>.
            </p>
            <p className="mt-2 font-medium">
              Being what it was required to do.
            </p>
          </>
        }
      >
        <p>
          On a given straight line and at a point on it to construct a rectilineal angle equal to a
          given rectilineal angle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition shows how to copy an angle to a new location. It is essential for many
        constructions where we need to replicate an angle.
      </p>

      <p className="mt-4">
        The method is elegant: form a triangle from the given angle by joining two points on its
        sides, then construct a congruent triangle at the new location using Proposition I.22.
        The corresponding angles will be equal by SSS congruence (I.8).
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.22 (constructing a triangle from three sides)</li>
        <li>Proposition I.8 (SSS congruence)</li>
      </ul>
    </LessonLayout>
  );
}
