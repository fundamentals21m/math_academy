import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <Proposition
        title="Proposition II.8"
        proof={
          <>
            <p>
              Let the straight line <em>AB</em> be cut at random at the point <em>C</em>.
            </p>
            <p className="mt-2">
              I say that four times the rectangle contained by <em>AB</em>, <em>BC</em> together
              with the square on <em>AC</em> is equal to the square described on the whole with{' '}
              <em>BC</em> as on one straight line.
            </p>
            <p className="mt-2">
              For let <em>BD</em> be produced in a straight line with <em>AB</em>, and let{' '}
              <em>BD</em> be made equal to <em>CB</em>; [I. 3] let the square <em>AEFD</em> be
              described on <em>AD</em>, [I. 46] and let the figure be double drawn.
            </p>
            <p className="mt-2">
              Then, since <em>CB</em> is equal to <em>BD</em>, while <em>CB</em> is equal to{' '}
              <em>GK</em>, and <em>BD</em> to <em>KN</em>, therefore <em>GK</em> is also equal to{' '}
              <em>KN</em>.
            </p>
            <p className="mt-2">
              For the same reason <em>QR</em> is also equal to <em>RP</em>.
            </p>
            <p className="mt-2">
              And, since <em>BC</em> is equal to <em>BD</em>, and <em>GK</em> to <em>KN</em>, therefore{' '}
              <em>CK</em> is also equal to <em>KD</em>, and <em>GR</em> to <em>RN</em>. [I. 36]
            </p>
            <p className="mt-2">
              But <em>CK</em> is equal to <em>RN</em>, for they are complements of the
              parallelogram <em>CP</em>; [I. 43] therefore <em>KD</em> is also equal to <em>GR</em>;
              therefore the four areas <em>DK</em>, <em>CK</em>, <em>GR</em>, <em>RN</em> are equal
              to one another.
            </p>
            <p className="mt-2">
              Therefore the four are quadruple of <em>CK</em>.
            </p>
            <p className="mt-2">
              Again, since <em>CB</em> is equal to <em>BD</em>, while <em>BD</em> is equal to{' '}
              <em>BK</em>, that is <em>CG</em>, and <em>CB</em> is equal to <em>GK</em>, that is{' '}
              <em>GQ</em>, therefore <em>CG</em> is also equal to <em>GQ</em>.
            </p>
            <p className="mt-2">
              And, since <em>CG</em> is equal to <em>GQ</em>, and <em>QR</em> to <em>RP</em>,{' '}
              <em>AG</em> is also equal to <em>MQ</em>, and <em>QL</em> to <em>RF</em>. [I. 36]
            </p>
            <p className="mt-2">
              But <em>MQ</em> is equal to <em>QL</em>, for they are complements of the
              parallelogram <em>ML</em>; [I. 43] therefore <em>AG</em> is also equal to <em>RF</em>;
              therefore the four areas <em>AG</em>, <em>MQ</em>, <em>QL</em>, <em>RF</em> are equal
              to one another.
            </p>
            <p className="mt-2">
              Therefore the four are quadruple of <em>AG</em>. But the four areas <em>CK</em>,{' '}
              <em>KD</em>, <em>GR</em>, <em>RN</em> were proved to be quadruple of <em>CK</em>;
              therefore the eight areas, which contain the gnomon <em>STU</em>, are quadruple of{' '}
              <em>AK</em>.
            </p>
            <p className="mt-2">
              Now, since <em>AK</em> is the rectangle <em>AB</em>, <em>BD</em>, for <em>BK</em> is
              equal to <em>BD</em>, therefore four times the rectangle <em>AB</em>, <em>BD</em> is
              quadruple of <em>AK</em>.
            </p>
            <p className="mt-2">
              But the gnomon <em>STU</em> was also proved quadruple of <em>AK</em>; therefore four
              times the rectangle <em>AB</em>, <em>BD</em> is equal to the gnomon <em>STU</em>.
            </p>
            <p className="mt-2">
              Let <em>OH</em>, which is equal to the square on <em>AC</em>, be added to each;
              therefore four times the rectangle <em>AB</em>, <em>BD</em> together with the square
              on <em>AC</em> is equal to the gnomon <em>STU</em> and <em>OH</em>.
            </p>
            <p className="mt-2">
              But the gnomon <em>STU</em> and <em>OH</em> are the whole square <em>AEFD</em>, which
              is described on <em>AD</em>.
            </p>
            <p className="mt-2">
              Therefore four times the rectangle <em>AB</em>, <em>BD</em> together with the square
              on <em>AC</em> is equal to the square on <em>AD</em>.
            </p>
            <p className="mt-2">
              But <em>BD</em> is equal to <em>BC</em>; therefore four times the rectangle{' '}
              <em>AB</em>, <em>BC</em> together with the square on <em>AC</em> is equal to the
              square on <em>AD</em>, that is to the square described on <em>AB</em> and <em>BC</em>{' '}
              as on one straight line.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line be cut at random, four times the rectangle contained by the whole and
          one of the segments together with the square on the remaining segment is equal to the
          square described on the whole and the aforesaid segment as on one straight line.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        If a line of length <em>a</em> is divided into segments <em>b</em> and <em>c</em> (where{' '}
        <em>a = b + c</em>), then:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          4ab + c² = (a + b)²
        </p>
      </div>

      <p className="mt-4">
        Since <em>c = a - b</em>, this becomes:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          4ab + (a - b)² = (a + b)²
        </p>
      </div>

      <p className="mt-4">Verifying:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-center text-amber-400 font-mono">
          4ab + a² - 2ab + b² = a² + 2ab + b²
        </p>
        <p className="text-center text-amber-400 font-mono mt-2">
          a² + 2ab + b² = a² + 2ab + b² ✓
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting off equal lengths)</li>
        <li>Proposition I.36 (parallelograms on equal bases)</li>
        <li>Proposition I.43 (complements are equal)</li>
        <li>Proposition I.46 (constructing squares)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Square of Difference:</strong> This identity relates
          the square of a sum to the square of a difference, showing that{' '}
          <em>(a + b)² - (a - b)² = 4ab</em>.
        </p>
      </div>
    </LessonLayout>
  );
}
