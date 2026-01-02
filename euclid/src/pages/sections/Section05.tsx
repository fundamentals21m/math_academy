import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { IsoscelesTriangle } from '@/components/visualizations';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <IsoscelesTriangle />

      <Proposition
        title="Proposition I.5"
        proof={
          <>
            <p>
              Let <em>ABC</em> be an isosceles triangle having the side <em>AB</em> equal to the side{' '}
              <em>AC</em>; and let the straight lines <em>BD</em>, <em>CE</em> be produced further in
              a straight line with <em>AB</em>, <em>AC</em>. [Post. 2]
            </p>
            <p className="mt-2">
              I say that the angle <em>ABC</em> is equal to the angle <em>ACB</em>, and the angle{' '}
              <em>CBD</em> to the angle <em>BCE</em>.
            </p>
            <p className="mt-2">
              Let a point <em>F</em> be taken at random on <em>BD</em>; from <em>AE</em> the greater
              let <em>AG</em> be cut off equal to <em>AF</em> the less; [I. 3] and let the straight
              lines <em>FC</em>, <em>GB</em> be joined. [Post. 1]
            </p>
            <p className="mt-2">
              Then, since <em>AF</em> is equal to <em>AG</em> and <em>AB</em> to <em>AC</em>, the two
              sides <em>FA</em>, <em>AC</em> are equal to the two sides <em>GA</em>, <em>AB</em>,
              respectively; and they contain a common angle, the angle <em>FAG</em>.
            </p>
            <p className="mt-2">
              Therefore the base <em>FC</em> is equal to the base <em>GB</em>, and the triangle{' '}
              <em>AFC</em> is equal to the triangle <em>AGB</em>, and the remaining angles will be
              equal to the remaining angles respectively, namely those which the equal sides subtend,
              that is, the angle <em>ACF</em> to the angle <em>ABG</em>, and the angle <em>AFC</em> to
              the angle <em>AGB</em>. [I. 4]
            </p>
            <p className="mt-2">
              And, since the whole <em>AF</em> is equal to the whole <em>AG</em>, and in these{' '}
              <em>AB</em> is equal to <em>AC</em>, the remainder <em>BF</em> is equal to the remainder{' '}
              <em>CG</em>. [C.N. 3]
            </p>
            <p className="mt-2">
              But <em>FC</em> was also proved equal to <em>GB</em>; therefore the two sides <em>BF</em>,{' '}
              <em>FC</em> are equal to the two sides <em>CG</em>, <em>GB</em> respectively; and the
              angle <em>BFC</em> is equal to the angle <em>CGB</em>, while the base <em>BC</em> is
              common to them; therefore the triangle <em>BFC</em> is also equal to the triangle{' '}
              <em>CGB</em>, and the remaining angles will be equal to the remaining angles respectively,
              namely those which the equal sides subtend; therefore the angle <em>FBC</em> is equal to
              the angle <em>GCB</em>, and the angle <em>BCF</em> to the angle <em>CBG</em>. [I. 4]
            </p>
            <p className="mt-2">
              Accordingly, since the whole angle <em>ABG</em> was proved equal to the angle <em>ACF</em>,
              and in these the angle <em>CBG</em> is equal to the angle <em>BCF</em>, the remaining
              angle <em>ABC</em> is equal to the remaining angle <em>ACB</em>; [C.N. 3] and they are at
              the base of the triangle <em>ABC</em>.
            </p>
            <p className="mt-2">
              But the angle <em>FBC</em> was also proved equal to the angle <em>GCB</em>; and they are
              under the base.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In isosceles triangles the angles at the base are equal to one another, and, if the equal
          straight lines be produced further, the angles under the base will be equal to one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition establishes that the base angles of an isosceles triangle are equal. It is
        one of the most famous theorems in elementary geometry and was known as the{' '}
        <strong>"pons asinorum"</strong> (bridge of asses) in medieval times, supposedly because it
        was the first difficult proposition that separated serious students from those who could not
        proceed further.
      </p>

      <p className="mt-4">
        The proof is intricate, introducing auxiliary constructions (points <em>F</em> and <em>G</em>,
        lines <em>FC</em> and <em>GB</em>) and applying Proposition I.4 (SAS congruence) twice.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Postulates 1 and 2 (drawing and extending lines)</li>
        <li>Proposition I.3 (cutting off equal lengths)</li>
        <li>Proposition I.4 (SAS congruence) - used twice</li>
        <li>Common Notion 3 (equals subtracted from equals give equals)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Simpler Proof:</strong> Later mathematicians found
          simpler proofs. One elegant approach is to consider the triangle <em>ABC</em> as equal to
          itself with vertices relabeled (<em>A</em>, <em>C</em>, <em>B</em>), and apply SAS directly.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Converse:</strong> The converse is proved in Proposition
          I.6: if a triangle has two equal angles, then the sides opposite those angles are also
          equal (making it isosceles).
        </p>
      </div>
    </LessonLayout>
  );
}
