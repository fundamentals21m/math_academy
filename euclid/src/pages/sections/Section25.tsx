import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <Proposition
        title="Proposition I.25"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be two triangles having the two sides <em>AB</em>,{' '}
              <em>AC</em> equal to the two sides <em>DE</em>, <em>DF</em> respectively, namely{' '}
              <em>AB</em> to <em>DE</em>, and <em>AC</em> to <em>DF</em>; and let the base <em>BC</em>{' '}
              be greater than the base <em>EF</em>.
            </p>
            <p className="mt-2">
              I say that the angle <em>BAC</em> is also greater than the angle <em>EDF</em>.
            </p>
            <p className="mt-2">
              For, if not, it is either equal to it or less.
            </p>
            <p className="mt-2">
              Now the angle <em>BAC</em> is not equal to the angle <em>EDF</em>; for then the base{' '}
              <em>BC</em> would also have been equal to <em>EF</em>, [I. 4] but it is not; therefore
              the angle <em>BAC</em> is not equal to the angle <em>EDF</em>.
            </p>
            <p className="mt-2">
              Neither again is the angle <em>BAC</em> less than the angle <em>EDF</em>; for then the
              base <em>BC</em> would also have been less than the base <em>EF</em>, [I. 24] but it
              is not; therefore the angle <em>BAC</em> is not less than the angle <em>EDF</em>.
            </p>
            <p className="mt-2">
              But it was proved that it is not equal either; therefore the angle <em>BAC</em> is
              greater than the angle <em>EDF</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If two triangles have the two sides equal to two sides respectively, but have the base
          greater than the base, they will also have the one of the angles contained by the equal
          straight lines greater than the other.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the <strong>converse</strong> of Proposition I.24 (the Hinge Theorem): if two sides
        of one triangle equal two sides of another, but the base is larger, then the included angle
        is also larger.
      </p>

      <p className="mt-4">
        The proof is by exhaustion: the angle must be either equal, less than, or greater than the
        other angle. Equal angles would give equal bases (I.4), and a smaller angle would give a
        smaller base (I.24), both contradicting our hypothesis.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.24 (the Hinge Theorem)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Summary:</strong> Propositions I.24 and I.25 together
          establish that when two triangles share two pairs of equal sides, the ordering of their
          included angles matches the ordering of their bases.
        </p>
      </div>
    </LessonLayout>
  );
}
