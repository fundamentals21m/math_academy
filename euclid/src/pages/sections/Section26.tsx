import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <Proposition
        title="Proposition I.26"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be two triangles having the two angles <em>ABC</em>,{' '}
              <em>BCA</em> equal to the two angles <em>DEF</em>, <em>EFD</em> respectively, namely
              the angle <em>ABC</em> to the angle <em>DEF</em>, and the angle <em>BCA</em> to the
              angle <em>EFD</em>; and let them also have one side equal to one side, first that
              adjoining the equal angles, namely <em>BC</em> to <em>EF</em>.
            </p>
            <p className="mt-2">
              I say that they will also have the remaining sides equal to the remaining sides
              respectively, namely <em>AB</em> to <em>DE</em> and <em>AC</em> to <em>DF</em>, and the
              remaining angle to the remaining angle, namely the angle <em>BAC</em> to the angle{' '}
              <em>EDF</em>.
            </p>
            <p className="mt-2">
              For, if <em>AB</em> is unequal to <em>DE</em>, one of them is greater. Let <em>AB</em>{' '}
              be greater, and let <em>BG</em> be made equal to <em>DE</em>; and let <em>GC</em> be
              joined.
            </p>
            <p className="mt-2">
              Then, since <em>BG</em> is equal to <em>DE</em>, and <em>BC</em> to <em>EF</em>, the
              two sides <em>GB</em>, <em>BC</em> are equal to the two sides <em>DE</em>, <em>EF</em>{' '}
              respectively; and the angle <em>GBC</em> is equal to the angle <em>DEF</em>; therefore
              the base <em>GC</em> is equal to the base <em>DF</em>, and the triangle <em>GBC</em> is
              equal to the triangle <em>DEF</em>, and the remaining angles will be equal to the
              remaining angles, namely those which the equal sides subtend; [I. 4] therefore the
              angle <em>GCB</em> is equal to the angle <em>DFE</em>.
            </p>
            <p className="mt-2">
              But the angle <em>DFE</em> is by hypothesis equal to the angle <em>BCA</em>; therefore
              the angle <em>BCG</em> is equal to the angle <em>BCA</em>, the less to the greater:
              which is impossible.
            </p>
            <p className="mt-2">
              Therefore <em>AB</em> is not unequal to <em>DE</em>, and is therefore equal to it.
            </p>
            <p className="mt-2">
              But <em>BC</em> is also equal to <em>EF</em>; therefore the two sides <em>AB</em>,{' '}
              <em>BC</em> are equal to the two sides <em>DE</em>, <em>EF</em> respectively, and the
              angle <em>ABC</em> is equal to the angle <em>DEF</em>; therefore the base <em>AC</em>{' '}
              is equal to the base <em>DF</em>, and the remaining angle <em>BAC</em> is equal to the
              remaining angle <em>EDF</em>. [I. 4]
            </p>
            <p className="mt-2">
              Again, let sides subtending equal angles be equal, as <em>AB</em> to <em>DE</em>.
            </p>
            <p className="mt-2">
              I say again that the remaining sides will be equal to the remaining sides, namely{' '}
              <em>AC</em> to <em>DF</em> and <em>BC</em> to <em>EF</em>, and further the remaining
              angle <em>BAC</em> is equal to the remaining angle <em>EDF</em>.
            </p>
            <p className="mt-2">
              [The proof of this second case follows a similar pattern.]
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If two triangles have the two angles equal to two angles respectively, and one side equal
          to one side, namely, either the side adjoining the equal angles, or that subtending one of
          the equal angles, they will also have the remaining sides equal to the remaining sides and
          the remaining angle to the remaining angle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition establishes two triangle congruence criteria:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><strong>ASA (Angle-Side-Angle):</strong> Two angles and the included side</li>
        <li><strong>AAS (Angle-Angle-Side):</strong> Two angles and a non-included side</li>
      </ul>

      <p className="mt-4">
        With Propositions I.4 (SAS), I.8 (SSS), and now I.26 (ASA and AAS), we have the complete set
        of triangle congruence theorems for Euclidean geometry.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proof by contradiction</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Complete Toolkit:</strong> We now have SAS, SSS, ASA,
          and AAS. The only common criterion missing is RHS (Right angle-Hypotenuse-Side), which
          appears later as a corollary.
        </p>
      </div>
    </LessonLayout>
  );
}
