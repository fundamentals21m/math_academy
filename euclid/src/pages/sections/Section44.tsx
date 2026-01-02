import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <Proposition
        title="Proposition I.44"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given straight line, <em>C</em> the given triangle, and{' '}
              <em>D</em> the given rectilineal angle.
            </p>
            <p className="mt-2">
              Thus it is required to apply to the given straight line <em>AB</em> a parallelogram
              equal to the given triangle <em>C</em>, in an angle equal to <em>D</em>.
            </p>
            <p className="mt-2">
              Let the parallelogram <em>BEFG</em> be constructed equal to the triangle <em>C</em>, in
              the angle <em>EBG</em> which is equal to <em>D</em> [I. 42]; let it be placed so that{' '}
              <em>BE</em> is in a straight line with <em>AB</em>; let <em>FG</em> be drawn through to{' '}
              <em>H</em>, and let <em>AH</em> be drawn through <em>A</em> parallel to either{' '}
              <em>BG</em> or <em>EF</em>. [I. 31]
            </p>
            <p className="mt-2">
              Let <em>HB</em> be joined.
            </p>
            <p className="mt-2">
              Then, since the straight line <em>HF</em> falls upon the parallels <em>AH</em>,{' '}
              <em>EF</em>, the angles <em>AHF</em>, <em>HFE</em> are equal to two right angles. [I. 29]
              Therefore the angles <em>BHG</em>, <em>GFE</em> are less than two right angles; and
              straight lines produced indefinitely from angles less than two right angles meet;
              [Post. 5] therefore <em>HB</em>, <em>FE</em>, when produced, will meet. Let them be
              produced and meet at <em>K</em>; through the point <em>K</em> let <em>KL</em> be drawn
              parallel to either <em>EA</em> or <em>FH</em>, [I. 31] and let <em>HA</em>, <em>GB</em>{' '}
              be produced to the points <em>L</em>, <em>M</em>.
            </p>
            <p className="mt-2">
              Then <em>HLKF</em> is a parallelogram, <em>HK</em> is its diameter, and <em>AG</em>,{' '}
              <em>ME</em> are parallelograms and <em>LB</em>, <em>BF</em> the so-called complements,
              about <em>HK</em>; therefore <em>LB</em> is equal to <em>BF</em>. [I. 43]
            </p>
            <p className="mt-2">
              But <em>BF</em> is equal to the triangle <em>C</em>; therefore <em>LB</em> is also
              equal to <em>C</em>. [C.N. 1]
            </p>
            <p className="mt-2">
              And, since the angle <em>GBE</em> is equal to the angle <em>ABM</em>, [I. 15] while the
              angle <em>GBE</em> is equal to <em>D</em>, the angle <em>ABM</em> is also equal to the
              angle <em>D</em>.
            </p>
            <p className="mt-2">
              Therefore the parallelogram <em>LB</em> equal to the given triangle <em>C</em> has been
              applied to the given straight line <em>AB</em>, in the angle <em>ABM</em> which is
              equal to <em>D</em>.
            </p>
            <p className="mt-2 font-medium">
              Q.E.F.
            </p>
          </>
        }
      >
        <p>
          To a given straight line to apply, in a given rectilineal angle, a parallelogram equal to
          a given triangle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is a powerful construction called "application of areas": given a line segment, we can
        construct a parallelogram equal to any given triangle, with that segment as one side.
      </p>

      <p className="mt-4">
        The construction cleverly uses the complement theorem (I.43) along with the Parallel
        Postulate (Post. 5) to position the parallelogram correctly.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Postulate 5 (the Parallel Postulate)</li>
        <li>Proposition I.15 (vertical angles)</li>
        <li>Proposition I.29 (parallel lines angle relationships)</li>
        <li>Proposition I.31 (constructing parallels)</li>
        <li>Proposition I.42 (construct parallelogram equal to triangle)</li>
        <li>Proposition I.43 (complements of parallelograms are equal)</li>
      </ul>
    </LessonLayout>
  );
}
