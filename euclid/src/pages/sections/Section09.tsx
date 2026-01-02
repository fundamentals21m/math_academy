import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <Proposition
        title="Proposition I.9"
        proof={
          <>
            <p>
              Let the angle <em>BAC</em> be the given rectilineal angle.
            </p>
            <p className="mt-2">
              Thus it is required to bisect it.
            </p>
            <p className="mt-2">
              Let a point <em>D</em> be taken at random on <em>AB</em>; let <em>AE</em> be cut off
              from <em>AC</em> equal to <em>AD</em>; [I. 3] let <em>DE</em> be joined, and on{' '}
              <em>DE</em> let the equilateral triangle <em>DEF</em> be constructed; [I. 1] let{' '}
              <em>AF</em> be joined.
            </p>
            <p className="mt-2">
              I say that the angle <em>BAC</em> has been bisected by the straight line <em>AF</em>.
            </p>
            <p className="mt-2">
              For, since <em>AD</em> is equal to <em>AE</em>, and <em>AF</em> is common, the two
              sides <em>DA</em>, <em>AF</em> are equal to the two sides <em>EA</em>, <em>AF</em>{' '}
              respectively.
            </p>
            <p className="mt-2">
              And the base <em>DF</em> is equal to the base <em>EF</em>; therefore the angle{' '}
              <em>DAF</em> is equal to the angle <em>EAF</em>. [I. 8]
            </p>
            <p className="mt-2">
              Therefore the given rectilineal angle <em>BAC</em> has been bisected by the straight
              line <em>AF</em>.
            </p>
            <p className="mt-2 font-medium">
              Being what it was required to do.
            </p>
          </>
        }
      >
        <p>To bisect a given rectilineal angle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is a fundamental construction: given any angle, we can divide it exactly in half using
        only straightedge and compass.
      </p>

      <p className="mt-4">
        The construction creates an isosceles triangle by cutting off equal lengths on the two sides
        of the angle, then constructs an equilateral triangle on the base. The line from the vertex
        through the apex of the equilateral triangle bisects the original angle.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.1 (to construct an equilateral triangle)</li>
        <li>Proposition I.3 (to cut off equal lengths)</li>
        <li>Proposition I.8 (SSS congruence to prove angles equal)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Historical Note:</strong> The problem of trisecting an
          angle (dividing it into three equal parts) cannot be solved with compass and straightedge
          alone for arbitrary angles. This was proved in the 19th century using algebra.
        </p>
      </div>
    </LessonLayout>
  );
}
