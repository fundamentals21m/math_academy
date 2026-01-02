import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <Proposition
        title="Proposition I.13"
        proof={
          <>
            <p>
              For let any straight line <em>AB</em> standing on the straight line <em>CD</em> make
              the angles <em>CBA</em>, <em>ABD</em>.
            </p>
            <p className="mt-2">
              I say that the angles <em>CBA</em>, <em>ABD</em> are either two right angles or equal
              to two right angles.
            </p>
            <p className="mt-2">
              Now, if the angle <em>CBA</em> is equal to the angle <em>ABD</em>, they are two right
              angles. [Def. 10]
            </p>
            <p className="mt-2">
              But, if not, let <em>BE</em> be drawn from the point <em>B</em> at right angles to{' '}
              <em>CD</em>; [I. 11] therefore the angles <em>CBE</em>, <em>EBD</em> are two right
              angles.
            </p>
            <p className="mt-2">
              Then, since the angle <em>CBE</em> is equal to the two angles <em>CBA</em>, <em>ABE</em>,
              let the angle <em>EBD</em> be added to each; therefore the angles <em>CBE</em>,{' '}
              <em>EBD</em> are equal to the three angles <em>CBA</em>, <em>ABE</em>, <em>EBD</em>.
              [C.N. 2]
            </p>
            <p className="mt-2">
              Again, since the angle <em>DBA</em> is equal to the two angles <em>DBE</em>,{' '}
              <em>EBA</em>, let the angle <em>ABC</em> be added to each; therefore the angles{' '}
              <em>DBA</em>, <em>ABC</em> are equal to the three angles <em>DBE</em>, <em>EBA</em>,{' '}
              <em>ABC</em>. [C.N. 2]
            </p>
            <p className="mt-2">
              But the angles <em>CBE</em>, <em>EBD</em> were also proved equal to the same three
              angles; and things which are equal to the same thing are also equal to one another;
              [C.N. 1] therefore the angles <em>CBE</em>, <em>EBD</em> are also equal to the angles{' '}
              <em>DBA</em>, <em>ABC</em>.
            </p>
            <p className="mt-2">
              But the angles <em>CBE</em>, <em>EBD</em> are two right angles; therefore the angles{' '}
              <em>DBA</em>, <em>ABC</em> are also equal to two right angles.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line set up on a straight line make angles, it will make either two right
          angles or angles equal to two right angles.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition states that angles on a straight line (a "linear pair") sum to two right
        angles (180° in modern terms). This is the foundation for all results about supplementary
        angles.
      </p>

      <p className="mt-4">
        The proof considers two cases: either the angles are equal (hence both right angles), or
        they are unequal. In the latter case, Euclid constructs an actual perpendicular and shows
        that the original angles together equal the two right angles formed by the perpendicular.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Definition 10 (definition of right angles)</li>
        <li>Proposition I.11 (to construct a perpendicular)</li>
        <li>Common Notions 1 and 2 (equality and addition)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Key Result:</strong> This proposition establishes that
          a straight angle equals two right angles, which is fundamental for angle calculations
          throughout geometry.
        </p>
      </div>
    </LessonLayout>
  );
}
