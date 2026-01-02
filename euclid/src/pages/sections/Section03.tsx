import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <Proposition
        title="Proposition I.3"
        proof={
          <>
            <p>
              Let <em>AB</em>, <em>C</em> be the two given unequal straight lines, and let <em>AB</em>{' '}
              be the greater of them.
            </p>
            <p className="mt-2">
              Thus it is required to cut off from <em>AB</em> the greater a straight line equal to{' '}
              <em>C</em> the less.
            </p>
            <p className="mt-2">
              At the point <em>A</em> let <em>AD</em> be placed equal to the straight line <em>C</em>;
              [I. 2] and with centre <em>A</em> and distance <em>AD</em> let the circle <em>DEF</em>{' '}
              be described. [Post. 3]
            </p>
            <p className="mt-2">
              Now, since the point <em>A</em> is the centre of the circle <em>DEF</em>, <em>AE</em> is
              equal to <em>AD</em>. [Def. 15]
            </p>
            <p className="mt-2">
              But <em>C</em> is also equal to <em>AD</em>. Therefore each of the straight lines{' '}
              <em>AE</em>, <em>C</em> is equal to <em>AD</em>; so that <em>AE</em> is also equal to{' '}
              <em>C</em>. [C.N. 1]
            </p>
            <p className="mt-2">
              Therefore, given the two straight lines <em>AB</em>, <em>C</em>, from <em>AB</em> the
              greater <em>AE</em> has been cut off equal to <em>C</em> the less.
            </p>
            <p className="mt-2 font-medium">
              Being what it was required to do.
            </p>
          </>
        }
      >
        <p>Given two unequal straight lines, to cut off from the greater a straight line equal to the less.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition completes the basic toolkit for manipulating line segments. Together with
        Propositions 1 and 2, we can now construct equilateral triangles, transfer lengths, and
        subtract one length from another.
      </p>

      <p className="mt-4">
        The construction is elegant in its simplicity: we transfer the shorter length to an endpoint
        of the longer line (using I.2), then draw a circle to mark off that length along the longer
        line.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.2 (to transfer the length of the smaller line)</li>
        <li>Postulate 3 (to draw a circle)</li>
        <li>Definition 15 (all radii of a circle are equal)</li>
        <li>Common Notion 1 (transitivity of equality)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Building Blocks:</strong> Propositions 1-3 establish
          the fundamental operations with line segments. From here, Euclid moves on to properties
          of triangles, starting with the important Proposition 4 (side-angle-side congruence).
        </p>
      </div>
    </LessonLayout>
  );
}
