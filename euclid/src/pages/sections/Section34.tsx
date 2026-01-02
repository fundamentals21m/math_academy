import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <Proposition
        title="Proposition I.34"
        proof={
          <>
            <p>
              Let <em>ACDB</em> be a parallelogrammic area, and <em>BC</em> its diameter.
            </p>
            <p className="mt-2">
              I say that the opposite sides and angles of the parallelogram <em>ACDB</em> are equal
              to one another, and the diameter <em>BC</em> bisects it.
            </p>
            <p className="mt-2">
              For, since <em>AB</em> is parallel to <em>CD</em>, and the straight line <em>BC</em>{' '}
              has fallen upon them, the alternate angles <em>ABC</em>, <em>BCD</em> are equal to one
              another. [I. 29]
            </p>
            <p className="mt-2">
              Again, since <em>AC</em> is parallel to <em>BD</em>, and <em>BC</em> has fallen upon
              them, the alternate angles <em>ACB</em>, <em>CBD</em> are equal to one another. [I. 29]
            </p>
            <p className="mt-2">
              Therefore <em>ABC</em>, <em>DCB</em> are two triangles having the two angles{' '}
              <em>ABC</em>, <em>BCA</em> equal to the two angles <em>DCB</em>, <em>CBD</em>{' '}
              respectively, and one side equal to one side, namely that adjoining the equal angles
              and common to both of them, <em>BC</em>; therefore they will also have the remaining
              sides equal to the remaining sides respectively, and the remaining angle to the
              remaining angle; [I. 26] therefore the side <em>AB</em> is equal to <em>CD</em>, and{' '}
              <em>AC</em> to <em>BD</em>, and further the angle <em>BAC</em> is equal to the angle{' '}
              <em>CDB</em>.
            </p>
            <p className="mt-2">
              And, since the angle <em>ABC</em> is equal to the angle <em>BCD</em>, and the angle{' '}
              <em>CBD</em> to the angle <em>ACB</em>, the whole angle <em>ABD</em> is equal to the
              whole angle <em>ACD</em>. [C.N. 2]
            </p>
            <p className="mt-2">
              And the angle <em>BAC</em> was also proved equal to the angle <em>CDB</em>.
            </p>
            <p className="mt-2">
              Therefore in parallelogrammic areas the opposite sides and angles are equal to one
              another.
            </p>
            <p className="mt-2">
              I say next that the diameter also bisects the areas.
            </p>
            <p className="mt-2">
              For, since <em>AB</em> is equal to <em>CD</em>, and <em>BC</em> is common, the two
              sides <em>AB</em>, <em>BC</em> are equal to the two sides <em>DC</em>, <em>CB</em>{' '}
              respectively; and the angle <em>ABC</em> is equal to the angle <em>BCD</em>; therefore
              the base <em>AC</em> is also equal to <em>DB</em>, and the triangle <em>ABC</em> is
              equal to the triangle <em>DCB</em>. [I. 4]
            </p>
            <p className="mt-2">
              Therefore the diameter <em>BC</em> bisects the parallelogram <em>ACDB</em>.
            </p>
            <p className="mt-2 font-medium">
              Q.E.D.
            </p>
          </>
        }
      >
        <p>
          In parallelogrammic areas the opposite sides and angles are equal to one another, and the
          diameter bisects the areas.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition establishes the basic properties of <strong>parallelograms</strong>:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Opposite sides are equal</li>
        <li>Opposite angles are equal</li>
        <li>A diagonal divides the parallelogram into two congruent triangles</li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.26 (ASA congruence)</li>
        <li>Proposition I.29 (parallel lines create equal alternate angles)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Foundation:</strong> This proposition is the basis for
          all subsequent work with parallelograms, including the theory of area comparison that
          leads to the Pythagorean theorem.
        </p>
      </div>
    </LessonLayout>
  );
}
