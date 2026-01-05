import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section33Questions } from '../../data/quizzes';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <h2 className="text-2xl font-semibold mb-4">
        Rational Points on Quadratic Curves
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Diophantus's method for finding rational points on the circle extends to{' '}
        <strong>any quadratic curve</strong> with rational coefficients. The key
        idea: if we know <em>one</em> rational point, we can find{' '}
        <em>all</em> of them.
      </p>

      {/* The General Method */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The General Method</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Lines Through a Known Point
        </h4>
        <p className="text-dark-200 mb-4">
          If we know one rational point <InlineMath>P</InlineMath> on a curve:
        </p>
        <ul className="space-y-2 text-dark-300 text-sm">
          <li>
            • Any other rational point <InlineMath>Q</InlineMath> gives a line{' '}
            <InlineMath>PQ</InlineMath> with <em>rational slope</em>.
          </li>
          <li>
            • Conversely, any line through <InlineMath>P</InlineMath> with
            rational slope meets the curve at a rational point.
          </li>
        </ul>
      </div>

      {/* Main Theorem */}
      <Callout type="success">
        <p>
          <strong>Rational Points on Quadratic Curves:</strong> If a curve{' '}
          <InlineMath>\mathcal{'{K}'}</InlineMath> is given by a quadratic
          equation with <em>rational coefficients</em>, then its rational points
          consist of:
        </p>
        <ol className="list-decimal ml-6 mt-2 space-y-1">
          <li>Any single rational point <InlineMath>P</InlineMath></li>
          <li>
            The points where lines through <InlineMath>P</InlineMath> with
            rational slope meet <InlineMath>\mathcal{'{K}'}</InlineMath>
          </li>
        </ol>
      </Callout>

      {/* Why Rational Coefficients Matter */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Why Rational Coefficients Matter
      </h3>

      <p className="text-dark-200 mb-6">
        Consider the curve <InlineMath>y = \sqrt{'{2}'}x^2</InlineMath>. It has
        one rational point <InlineMath>(0, 0)</InlineMath>. The line{' '}
        <InlineMath>y = x</InlineMath> through this point has slope 1 (rational).
        But it meets the curve again where <InlineMath>x = \sqrt{'{2}'}x^2</InlineMath>,
        that is, at <InlineMath>x = 1/\sqrt{'{2}'}</InlineMath>—an{' '}
        <em>irrational</em> point!
      </p>

      <p className="text-dark-200 mb-6">
        This shows that <strong>rational coefficients</strong> are essential for
        the method to work.
      </p>

      {/* Example: Ellipse */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Example: <InlineMath>x^2 + 3y^2 = 1</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        Consider the ellipse <InlineMath>x^2 + 3y^2 = 1</InlineMath>. It has the
        obvious rational point <InlineMath>(-1, 0)</InlineMath>. Taking the line{' '}
        <InlineMath>y = t(x + 1)</InlineMath> through this point with rational
        slope <InlineMath>t</InlineMath>:
      </p>

      <MathBlock>{`x^2 + 3t^2(x+1)^2 = 1`}</MathBlock>

      <p className="text-dark-200 my-4">
        Since <InlineMath>x = -1</InlineMath> is a root, we can factor and find
        the other intersection. The key insight: the coefficients are rational
        (built from <InlineMath>t</InlineMath>), so the other root is rational!
      </p>

      {/* Curves with No Rational Points */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Curves with No Rational Points
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-red-400">
        <h4 className="text-lg font-semibold mb-3 text-red-400">
          Example: <InlineMath>x^2 + y^2 = 3</InlineMath>
        </h4>
        <p className="text-dark-200">
          This curve has <strong>no rational points</strong>. Here's why:
        </p>
      </div>

      <p className="text-dark-200 mb-4">
        Any rational point <InlineMath>(u/w, v/w)</InlineMath> gives integers
        with <InlineMath>u^2 + v^2 = 3w^2</InlineMath>. Assume{' '}
        <InlineMath>\gcd(u, v, w) = 1</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-300 text-sm">
          <li>
            • If <InlineMath>u, v</InlineMath> are both odd:{' '}
            <InlineMath>u^2 + v^2 \equiv 2 \pmod{'{4}'}</InlineMath>, but{' '}
            <InlineMath>3w^2 \equiv 0</InlineMath> or{' '}
            <InlineMath>3 \pmod{'{4}'}</InlineMath>. Contradiction!
          </li>
          <li>
            • If one of <InlineMath>u, v</InlineMath> is odd, the other even:{' '}
            <InlineMath>u^2 + v^2 \equiv 1 \pmod{'{4}'}</InlineMath>. But{' '}
            <InlineMath>3w^2</InlineMath> can't leave remainder 1. Contradiction!
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Diophantus himself stated that{' '}
        <InlineMath>x^2 + y^2 = 15</InlineMath> has no rational solution—the
        same argument applies (since 15 ≡ 3 mod 4).
      </p>

      {/* Hyperbolas */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Hyperbolas: <InlineMath>x^2 - dy^2 = 1</InlineMath>
      </h3>

      <CardGrid>
        <Card>
          <CardHeader title="Rational Points" />
          <p className="text-xs text-dark-300">
            The rational points (except <InlineMath>(-1, 0)</InlineMath>) are:
            <br />
            <InlineMath>
              x = \frac{'{1 + dt^2}{1 - dt^2}'}, \quad y = \frac{'{2t}{1 - dt^2}'}
            </InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Integer Points" />
          <p className="text-xs text-dark-300">
            Finding <em>integer</em> points is much harder! This leads to Pell's
            equation, studied in Chapters 8 and 9.
          </p>
        </Card>
      </CardGrid>

      {/* Infinitely Many or None */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Infinitely Many or None
      </h3>

      <Callout type="info">
        <p>
          If a quadratic curve with rational coefficients has <em>one</em>{' '}
          rational point, it has <strong>infinitely many</strong>, because there
          are infinitely many lines of rational slope through any point.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        This is a remarkable dichotomy: a quadratic curve with rational
        coefficients either has <strong>no</strong> rational points or{' '}
        <strong>infinitely many</strong>.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Rational coefficients</strong> are needed to find rational
              points via lines.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              One rational point + lines of rational slope = all rational points.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <InlineMath>x^2 + y^2 = 3</InlineMath> has{' '}
              <strong>no</strong> rational points (mod 4 argument).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Quadratic curves have <strong>zero or infinitely many</strong>{' '}
              rational points.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={33} questions={section33Questions} />
    </LessonLayout>
  );
}
