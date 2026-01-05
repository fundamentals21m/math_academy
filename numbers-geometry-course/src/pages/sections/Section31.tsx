import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section31Questions } from '../../data/quizzes';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2 className="text-2xl font-semibold mb-4">
        Pythagorean Triples in Diophantus
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Pythagorean triples may be grouped into <strong>classes</strong> where
        each member is an integer multiple of the smallest. These multiples
        represent the "same" triangle with different units of length. By using{' '}
        <strong>rational numbers</strong>, Diophantus found a simpler approach
        around 250 A.D.
      </p>

      {/* Rational Triples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        From Integers to Rationals
      </h3>

      <p className="text-dark-200 mb-6">
        The many integer triples <InlineMath>(a, b, c)</InlineMath> that are
        really the "same" can be condensed to a single{' '}
        <strong>rational triple</strong>{' '}
        <InlineMath>(a/c, b/c, 1)</InlineMath>. If{' '}
        <InlineMath>(a, b, c)</InlineMath> and{' '}
        <InlineMath>(a', b', c')</InlineMath> are multiples of the same triple,
        then <InlineMath>a/c = a'/c'</InlineMath> and{' '}
        <InlineMath>b/c = b'/c'</InlineMath>.
      </p>

      <Callout type="info">
        <p>
          The problem of finding Pythagorean triples becomes: find{' '}
          <strong>rational points</strong> on the unit circle{' '}
          <InlineMath>x^2 + y^2 = 1</InlineMath>.
        </p>
      </Callout>

      {/* Diophantus's Method */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Diophantus's Geometric Method
      </h3>

      <p className="text-dark-200 mb-6">
        The brilliant idea is to use <em>lines through a known point</em>. The
        point <InlineMath>(-1, 0)</InlineMath> is obviously on the unit circle.
        If <InlineMath>(x_0, y_0)</InlineMath> is any other rational point, the
        line between them has rational slope{' '}
        <InlineMath>t = y_0 / (x_0 + 1)</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-300 text-sm mb-4">
          <strong>Key Insight:</strong> Conversely, if{' '}
          <InlineMath>y = t(x + 1)</InlineMath> is any line through{' '}
          <InlineMath>(-1, 0)</InlineMath> with <em>rational</em> slope{' '}
          <InlineMath>t</InlineMath>, then its second intersection with the unit
          circle is a <em>rational</em> point!
        </p>
      </div>

      {/* Derivation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Finding the Formula</h3>

      <p className="text-dark-200 mb-6">
        The intersection of <InlineMath>y = t(x + 1)</InlineMath> with{' '}
        <InlineMath>x^2 + y^2 = 1</InlineMath> occurs where:
      </p>

      <MathBlock>{`x^2 + t^2(x + 1)^2 = 1`}</MathBlock>

      <p className="text-dark-200 my-4">
        Expanding and using the quadratic formula:
      </p>

      <MathBlock>{`x^2(1 + t^2) + 2t^2 x + t^2 - 1 = 0`}</MathBlock>

      <p className="text-dark-200 my-4">
        One solution is <InlineMath>x = -1</InlineMath> (the point we started
        from). The other solution gives:
      </p>

      <MathBlock>{`x = \\frac{1 - t^2}{1 + t^2}`}</MathBlock>

      <p className="text-dark-200 my-4">
        And substituting back: <InlineMath>y = t(x + 1)</InlineMath>:
      </p>

      <MathBlock>{`y = t \\cdot \\frac{2}{1 + t^2} = \\frac{2t}{1 + t^2}`}</MathBlock>

      {/* Main Theorem */}
      <div className="bg-dark-800 rounded-lg p-6 my-6 border-l-4 border-green-400">
        <h4 className="text-lg font-semibold mb-3 text-green-400">
          Parameterization of Rational Pythagorean Triples
        </h4>
        <p className="text-dark-200 mb-3">
          The nonzero rationals <InlineMath>x</InlineMath> and{' '}
          <InlineMath>y</InlineMath> such that{' '}
          <InlineMath>x^2 + y^2 = 1</InlineMath> are exactly the pairs:
        </p>
        <MathBlock>{`x = \\frac{1 - t^2}{1 + t^2}, \\quad y = \\frac{2t}{1 + t^2}`}</MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          for rational numbers <InlineMath>t \neq 0, \pm 1</InlineMath>.
        </p>
      </div>

      {/* Connection to Euclid */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Connection to Euclid's Formula
      </h3>

      <p className="text-dark-200 mb-6">
        By putting <InlineMath>t = v/u</InlineMath> for integers{' '}
        <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath>, we recover
        Euclid's formula:
      </p>

      <MathBlock>{`x = \\frac{1 - v^2/u^2}{1 + v^2/u^2} = \\frac{u^2 - v^2}{u^2 + v^2}, \\quad y = \\frac{2v/u}{1 + v^2/u^2} = \\frac{2uv}{u^2 + v^2}`}</MathBlock>

      <p className="text-dark-200 my-6">
        Clearing denominators gives the integer triple{' '}
        <InlineMath>(2uv, u^2 - v^2, u^2 + v^2)</InlineMath>—exactly Euclid's
        formula!
      </p>

      {/* Rational Functions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Rational Functions</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Parametric Equations" />
          <p className="text-xs text-dark-300">
            The formulas{' '}
            <InlineMath>x = \frac{'{1-t^2}{1+t^2}'}</InlineMath>,{' '}
            <InlineMath>y = \frac{'{2t}{1+t^2}'}</InlineMath> give parametric
            equations for the circle as <InlineMath>t</InlineMath> varies over
            all reals (except <InlineMath>(-1, 0)</InlineMath>).
          </p>
        </Card>
        <Card>
          <CardHeader title="Rational Functions" />
          <p className="text-xs text-dark-300">
            Functions built from a variable and constants by{' '}
            <InlineMath>+, -, \times, \div</InlineMath> are called{' '}
            <strong>rational functions</strong>. They're simpler than sin and
            cos!
          </p>
        </Card>
      </CardGrid>

      {/* Rationalization */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Rationalizing <InlineMath>\sqrt{'{1-x^2}'}</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        An important application: the irrational function{' '}
        <InlineMath>\sqrt{'{1-x^2}'}</InlineMath> can be{' '}
        <strong>rationalized</strong> by substituting{' '}
        <InlineMath>x = \frac{'{1-t^2}{1+t^2}'}</InlineMath>. Then:
      </p>

      <MathBlock>{`\\sqrt{1 - x^2} = \\sqrt{1 - \\frac{(1-t^2)^2}{(1+t^2)^2}} = \\frac{2t}{1+t^2}`}</MathBlock>

      <Callout type="warning">
        <p>
          In contrast, <InlineMath>\sqrt{'{1-x^3}'}</InlineMath> and{' '}
          <InlineMath>\sqrt{'{1-x^4}'}</InlineMath> can <em>not</em> be
          rationalized! This marks an important boundary between quadratic and
          higher-degree curves.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Rational points</strong> on{' '}
              <InlineMath>x^2 + y^2 = 1</InlineMath> correspond to Pythagorean
              triples.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Lines through <InlineMath>(-1, 0)</InlineMath> with rational slope{' '}
              <InlineMath>t</InlineMath> hit the circle at rational points.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Diophantus's formula uses only <strong>one parameter</strong>{' '}
              <InlineMath>t</InlineMath>, simpler than Euclid's{' '}
              <InlineMath>u, v, w</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              This method <strong>rationalizes</strong>{' '}
              <InlineMath>\sqrt{'{1-x^2}'}</InlineMath>—useful in calculus.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={31} questions={section31Questions} />
    </LessonLayout>
  );
}
