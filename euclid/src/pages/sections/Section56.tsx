import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <Proposition
        title="Proposition II.7"
        proof={
          <>
            <p>
              Let the straight line <em>AB</em> be cut at random at the point <em>C</em>.
            </p>
            <p className="mt-2">
              I say that the square on <em>AB</em> and that on <em>BC</em> are equal to twice the
              rectangle contained by <em>AB</em>, <em>BC</em> and the square on <em>CA</em>.
            </p>
            <p className="mt-2">
              For let the square <em>ADEB</em> be described on <em>AB</em>, [I. 46] and let the
              figure be drawn.
            </p>
            <p className="mt-2">
              Then, since <em>AG</em> is equal to <em>GE</em>, [I. 43] let <em>CF</em> be added to
              each; therefore the whole <em>AF</em> is equal to the whole <em>CE</em>.
            </p>
            <p className="mt-2">
              Therefore <em>AF</em>, <em>CE</em> are double of <em>AF</em>.
            </p>
            <p className="mt-2">
              But <em>AF</em>, <em>CE</em> are the gnomon <em>KLM</em> and the square <em>CF</em>;
              therefore the gnomon <em>KLM</em> and the square <em>CF</em> are double of <em>AF</em>.
            </p>
            <p className="mt-2">
              But twice the rectangle <em>AB</em>, <em>BC</em> is also double of <em>AF</em>; for{' '}
              <em>BF</em> is equal to <em>BC</em>;
            </p>
            <p className="mt-2">
              therefore the gnomon <em>KLM</em> and the square <em>CF</em> are equal to twice the
              rectangle <em>AB</em>, <em>BC</em>.
            </p>
            <p className="mt-2">
              Let <em>DG</em>, which is the square on <em>AC</em>, be added to each; therefore the
              gnomon <em>KLM</em> and the squares <em>BG</em>, <em>GD</em> are equal to twice the
              rectangle <em>AB</em>, <em>BC</em> and the square on <em>AC</em>.
            </p>
            <p className="mt-2">
              But the gnomon <em>KLM</em> and the squares <em>BG</em>, <em>GD</em> are the whole{' '}
              <em>ADEB</em> and <em>CF</em>, which are squares described on <em>AB</em>, <em>BC</em>;
            </p>
            <p className="mt-2">
              therefore the squares on <em>AB</em>, <em>BC</em> are equal to twice the rectangle
              contained by <em>AB</em>, <em>BC</em> together with the square on <em>CA</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line be cut at random, the square on the whole and that on one of the
          segments both together are equal to twice the rectangle contained by the whole and the
          said segment and the square on the remaining segment.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        If a line of length <em>a + b</em> is divided into segments <em>a</em> and <em>b</em>, then:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          (a + b)² + b² = 2(a + b)b + a²
        </p>
      </div>

      <p className="mt-4">Expanding and simplifying:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-center text-amber-400 font-mono">
          a² + 2ab + b² + b² = 2ab + 2b² + a²
        </p>
        <p className="text-center text-amber-400 font-mono mt-2">
          a² + 2ab + 2b² = a² + 2ab + 2b² ✓
        </p>
      </div>

      <p className="mt-4">
        This can also be written as a relationship involving the difference:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          a² + b² = 2ab + (a - b)²
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.43 (complements are equal)</li>
        <li>Proposition I.46 (constructing squares)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Identity Form:</strong> Rearranging gives{' '}
          <em>a² + b² - 2ab = (a - b)²</em>, which is the square of a difference formula.
        </p>
      </div>
    </LessonLayout>
  );
}
