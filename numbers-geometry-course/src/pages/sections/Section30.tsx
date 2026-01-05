import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section30Questions } from '../../data/quizzes';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2 className="text-2xl font-semibold mb-4">Pythagorean Triples in Euclid</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The easiest way to find big Pythagorean triples is to use a{' '}
        <strong>formula</strong>. Formulas for generating triples were probably
        known in ancient Babylon, Greece, India, and China, but the first{' '}
        <em>rigorous treatment</em> occurs in Euclid's <em>Elements</em>.
      </p>

      {/* Euclid's Formula */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Formula</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Formula for Pythagorean Triples
        </h4>
        <p className="text-dark-200 mb-4">
          For any natural numbers <InlineMath>u</InlineMath> and{' '}
          <InlineMath>v</InlineMath> with <InlineMath>u {'>'} v</InlineMath>:
        </p>
        <MathBlock>{`a = 2uv, \\quad b = u^2 - v^2, \\quad c = u^2 + v^2`}</MathBlock>
        <p className="text-dark-300 text-sm mt-4">
          This gives <InlineMath>a^2 + b^2 = c^2</InlineMath> for any values of{' '}
          <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Let's verify this formula works:
      </p>

      <MathBlock>{`a^2 + b^2 = (2uv)^2 + (u^2 - v^2)^2 = 4u^2v^2 + u^4 - 2u^2v^2 + v^4`}</MathBlock>
      <MathBlock>{`= u^4 + 2u^2v^2 + v^4 = (u^2 + v^2)^2 = c^2 \\quad \\checkmark`}</MathBlock>

      {/* Examples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Examples</h3>

      <CardGrid>
        <Card>
          <CardHeader title="u = 2, v = 1" />
          <p className="text-xs text-dark-300">
            <InlineMath>a = 4</InlineMath>, <InlineMath>b = 3</InlineMath>,{' '}
            <InlineMath>c = 5</InlineMath>
            <br />
            Gives <InlineMath>(3, 4, 5)</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="u = 3, v = 2" />
          <p className="text-xs text-dark-300">
            <InlineMath>a = 12</InlineMath>, <InlineMath>b = 5</InlineMath>,{' '}
            <InlineMath>c = 13</InlineMath>
            <br />
            Gives <InlineMath>(5, 12, 13)</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="u = 4, v = 1" />
          <p className="text-xs text-dark-300">
            <InlineMath>a = 8</InlineMath>, <InlineMath>b = 15</InlineMath>,{' '}
            <InlineMath>c = 17</InlineMath>
            <br />
            Gives <InlineMath>(8, 15, 17)</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="u = 4, v = 3" />
          <p className="text-xs text-dark-300">
            <InlineMath>a = 24</InlineMath>, <InlineMath>b = 7</InlineMath>,{' '}
            <InlineMath>c = 25</InlineMath>
            <br />
            Gives <InlineMath>(7, 24, 25)</InlineMath>
          </p>
        </Card>
      </CardGrid>

      {/* Euclid's Approach */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Approach</h3>

      <p className="text-dark-200 mb-6">
        Euclid set out to solve a simpler problem: <em>find two square numbers
        whose sum is also a square</em> (Elements, Book X). He started with the
        identity:
      </p>

      <MathBlock>{`xy + \\left(\\frac{x-y}{2}\\right)^2 = \\left(\\frac{x+y}{2}\\right)^2`}</MathBlock>

      <p className="text-dark-200 my-6">
        He observed that it's enough to choose <InlineMath>x</InlineMath> and{' '}
        <InlineMath>y</InlineMath> so that <InlineMath>xy</InlineMath> is a
        square. This happens when <InlineMath>x</InlineMath> and{' '}
        <InlineMath>y</InlineMath> are <strong>similar plane numbers</strong>:
      </p>

      <MathBlock>{`x = u^2 w, \\quad y = v^2 w`}</MathBlock>

      {/* Parameterization Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Complete Parameterization
      </h3>

      <Callout type="success">
        <p>
          <strong>Parameterization of Pythagorean Triples:</strong> Any
          Pythagorean triple is of the form
        </p>
        <MathBlock>{`a = uvw, \\quad b = \\frac{u^2 - v^2}{2}w, \\quad c = \\frac{u^2 + v^2}{2}w`}</MathBlock>
        <p>
          for some natural numbers <InlineMath>u</InlineMath>,{' '}
          <InlineMath>v</InlineMath>, and <InlineMath>w</InlineMath>.
        </p>
      </Callout>

      {/* Proof Sketch */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why This Works</h3>

      <p className="text-dark-200 mb-6">
        Euclid proved that <InlineMath>xy</InlineMath> is a square only if{' '}
        <InlineMath>x = u^2 w</InlineMath> and{' '}
        <InlineMath>y = v^2 w</InlineMath>. The key insight uses{' '}
        <strong>unique prime factorization</strong>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-300 text-sm">
          If <InlineMath>x'</InlineMath> and <InlineMath>y'</InlineMath> are{' '}
          <em>relatively prime</em> (gcd = 1) and their product{' '}
          <InlineMath>x'y'</InlineMath> is a square, then{' '}
          <InlineMath>x'</InlineMath> and <InlineMath>y'</InlineMath> must{' '}
          <em>each</em> be squares. This follows from unique prime factorization:
          each prime exponent in a square must be even.
        </p>
      </div>

      {/* Primitive Triple Formula */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Primitive Triples
      </h3>

      <p className="text-dark-200 mb-6">
        For <em>primitive</em> Pythagorean triples (where{' '}
        <InlineMath>\gcd(a, b, c) = 1</InlineMath>), we need additional
        conditions:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Primitive Pythagorean Triples
        </h4>
        <p className="text-dark-200 mb-3">
          Each primitive triple (suitably ordered) is:
        </p>
        <MathBlock>{`a = 2uv, \\quad b = u^2 - v^2, \\quad c = u^2 + v^2`}</MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          where <InlineMath>\gcd(u, v) = 1</InlineMath> and one of{' '}
          <InlineMath>u, v</InlineMath> is even, the other odd.
        </p>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Euclid's formula{' '}
              <InlineMath>a = 2uv, b = u^2 - v^2, c = u^2 + v^2</InlineMath>{' '}
              generates all Pythagorean triples.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The proof relies on{' '}
              <strong>unique prime factorization</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Relatively prime</strong> means{' '}
              <InlineMath>\gcd(x, y) = 1</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Primitive triples require <InlineMath>\gcd(u, v) = 1</InlineMath>{' '}
              with opposite parities.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={30} questions={section30Questions} />
    </LessonLayout>
  );
}
