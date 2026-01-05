import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section35Questions } from '../../data/quizzes';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2 className="text-2xl font-semibold mb-4">
        The Area of Rational Right Triangles
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Given a rational right triangle <InlineMath>(a, b, c)</InlineMath> with{' '}
        <InlineMath>a^2 + b^2 = c^2</InlineMath>, what can we say about its
        area <InlineMath>ab/2</InlineMath>? This question leads to one of
        Fermat's most beautiful theorems and connects to his famous "Last
        Theorem."
      </p>

      {/* Historical Context */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Historical Background</h3>

      <p className="text-dark-200 mb-6">
        Diophantus found many triangles whose area{' '}
        <InlineMath>ab/2</InlineMath> is a square plus or minus various
        quantities. However, he ignored the possibility of the area being{' '}
        <em>exactly</em> a square!
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Fibonacci (1225)" />
          <p className="text-xs text-dark-300">
            First asked: is there a rational right triangle whose area is a
            perfect square?
          </p>
        </Card>
        <Card>
          <CardHeader title="Fermat (1640)" />
          <p className="text-xs text-dark-300">
            Proved the answer is <strong>no</strong> using his method of
            infinite descent.
          </p>
        </Card>
      </CardGrid>

      {/* Fermat's Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Fermat's Theorem</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-red-400">
        <h4 className="text-lg font-semibold mb-3 text-red-400">
          Fermat's Theorem on Rational Right Triangles
        </h4>
        <p className="text-dark-200">
          <strong>The area of a rational right triangle is not a square.</strong>
        </p>
      </div>

      {/* Proof Strategy */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Proof Strategy</h3>

      <p className="text-dark-200 mb-6">
        The proof uses <strong>infinite descent</strong>. If there were a
        rational right triangle with square area, we could find a{' '}
        <em>smaller</em> one with the same property—and repeat indefinitely,
        which is impossible.
      </p>

      <Callout type="info">
        <p>
          We may assume the sides are integers with no common prime divisor (by
          clearing denominators and canceling). If there's a rational right
          triangle with square area, there's a{' '}
          <strong>primitive Pythagorean triple</strong>{' '}
          <InlineMath>(a, b, c)</InlineMath> with{' '}
          <InlineMath>ab/2</InlineMath> a square.
        </p>
      </Callout>

      {/* Key Steps */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Steps of the Proof</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-300 text-sm mb-4">
          Using the formula for primitive Pythagorean triples:
        </p>
        <MathBlock>{`a = 2uv, \\quad b = u^2 - v^2, \\quad c = u^2 + v^2`}</MathBlock>
        <p className="text-dark-300 text-sm mt-4">
          The area is:
        </p>
        <MathBlock>{`\\frac{ab}{2} = uv(u^2 - v^2) = uv(u-v)(u+v)`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        The factors <InlineMath>u, v, u-v, u+v</InlineMath> have no common prime
        divisor. If their product is a square, each factor must be a square
        (by unique prime factorization).
      </p>

      <p className="text-dark-200 mb-6">
        This means <InlineMath>u^2 - v^2 = (u-v)(u+v)</InlineMath> is a product
        of squares, hence also a square, say <InlineMath>w^2</InlineMath>. Then:
      </p>

      <MathBlock>{`v^2 + w^2 = u^2`}</MathBlock>

      <p className="text-dark-200 my-6">
        So <InlineMath>(v, w, u)</InlineMath> is another Pythagorean triple!
        Continuing this analysis produces a{' '}
        <strong>smaller</strong> triangle with square area—the descent.
      </p>

      {/* Corollaries */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Remarkable Corollaries</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Corollary 1
        </h4>
        <p className="text-dark-200">
          There are no natural numbers <InlineMath>a, b, c</InlineMath> such
          that <InlineMath>a^4 - b^4 = c^2</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Proof:</strong> The triangle with sides{' '}
        <InlineMath>a^4 - b^4</InlineMath>,{' '}
        <InlineMath>2a^2 b^2</InlineMath>,{' '}
        <InlineMath>a^4 + b^4</InlineMath> is a right triangle (check:{' '}
        <InlineMath>(a^4 - b^4)^2 + (2a^2 b^2)^2 = (a^4 + b^4)^2</InlineMath>).
        If <InlineMath>a^4 - b^4 = c^2</InlineMath>, its area would be the
        square <InlineMath>a^2 b^2 c^2</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-green-400">
        <h4 className="text-lg font-semibold mb-3 text-green-400">
          Corollary 2: Special Case of Fermat's Last Theorem
        </h4>
        <p className="text-dark-200">
          There are no natural numbers <InlineMath>x, y, z</InlineMath> such
          that <InlineMath>x^4 + y^4 = z^4</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Proof:</strong> If{' '}
        <InlineMath>x^4 + y^4 = z^4</InlineMath>, then{' '}
        <InlineMath>z^4 - y^4 = x^4 = (x^2)^2</InlineMath>, which contradicts
        Corollary 1.
      </p>

      {/* Connection to FLT */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Connection to Fermat's Last Theorem
      </h3>

      <Callout type="warning">
        <p>
          Fermat claimed to have proved that{' '}
          <InlineMath>x^n + y^n = z^n</InlineMath> has no natural number
          solutions for any <InlineMath>n {'>'} 2</InlineMath>. The case{' '}
          <InlineMath>n = 4</InlineMath> follows from the theorem above. The
          general case was finally proved by Andrew Wiles in 1995!
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The area of a rational right triangle is{' '}
              <strong>never a perfect square</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Fermat proved this using <strong>infinite descent</strong> (1640).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              This implies <InlineMath>a^4 - b^4 = c^2</InlineMath> has no
              natural number solutions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              As a corollary, <InlineMath>x^4 + y^4 = z^4</InlineMath> is
              impossible—a special case of Fermat's Last Theorem.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={35} questions={section35Questions} />
    </LessonLayout>
  );
}
