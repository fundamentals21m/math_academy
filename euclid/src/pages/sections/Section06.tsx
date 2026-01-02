import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <Proposition
        title="Proposition I.6"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a triangle having the angle <em>ABC</em> equal to the angle{' '}
              <em>ACB</em>.
            </p>
            <p className="mt-2">
              I say that the side <em>AB</em> is also equal to the side <em>AC</em>.
            </p>
            <p className="mt-2">
              For, if <em>AB</em> is unequal to <em>AC</em>, one of them is greater. Let <em>AB</em>{' '}
              be greater; and from <em>AB</em> the greater let <em>DB</em> be cut off equal to{' '}
              <em>AC</em> the less; [I. 3] let <em>DC</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>DB</em> is equal to <em>AC</em>, and <em>BC</em> is common, the two
              sides <em>DB</em>, <em>BC</em> are equal to the two sides <em>AC</em>, <em>CB</em>{' '}
              respectively; and the angle <em>DBC</em> is equal to the angle <em>ACB</em>;
            </p>
            <p className="mt-2">
              therefore the base <em>DC</em> is equal to the base <em>AB</em>, and the triangle{' '}
              <em>DBC</em> will be equal to the triangle <em>ACB</em>, [I. 4] the less to the
              greater: which is absurd.
            </p>
            <p className="mt-2">
              Therefore <em>AB</em> is not unequal to <em>AC</em>; it is therefore equal to it.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If in a triangle two angles be equal to one another, the sides which subtend the equal
          angles will also be equal to one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the <strong>converse</strong> of Proposition I.5. Together they establish the
        equivalence: a triangle is isosceles if and only if it has two equal angles.
      </p>

      <p className="mt-4">
        The proof uses <strong>reductio ad absurdum</strong> (proof by contradiction). Euclid assumes
        the sides are unequal, constructs a smaller triangle using I.3 and I.4, and shows this leads
        to a contradiction (the smaller triangle would equal the larger one).
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting off a segment)</li>
        <li>Proposition I.4 (SAS congruence)</li>
        <li>The logical principle that a part cannot equal the whole</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Method:</strong> This is the first use of indirect proof
          (proof by contradiction) in the <em>Elements</em>. This method assumes the opposite of what
          is to be proved and derives a contradiction.
        </p>
      </div>
    </LessonLayout>
  );
}
