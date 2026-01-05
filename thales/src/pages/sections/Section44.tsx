import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section44Questions } from '../../data/quizzes';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <h2 className="text-2xl font-semibold mb-4">Continued Fractions</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Continued fractions are implicit in ancient Greek mathematics. According to
        Fowler's research on <em>The Mathematics of Plato's Academy</em>, they were
        known to the Greeks, though not explicitly defined until 1618 by Daniel Schwenter.
        They arise naturally from Euclid's Algorithm.
      </p>

      {/* Euclid's Algorithm */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Euclid's Algorithm and the GCD</h3>

      <p className="text-dark-200 mb-4">
        Euclid's Algorithm (Book VII, Proposition 2, ~300 BC) finds the{' '}
        <strong>greatest common divisor</strong> (gcd) of two positive integers.
        Since dividend = divisor × quotient + remainder, any common factor is
        preserved through each step.
      </p>

      <Card className="mb-6">
        <CardHeader>Example: gcd(1604, 502)</CardHeader>
        <div className="text-dark-300 font-mono text-sm space-y-1">
          <p>1604 = 502 × 3 + 98</p>
          <p>502 = 98 × 5 + 12</p>
          <p>98 = 12 × 8 + 2</p>
          <p>12 = 2 × 6 + 0</p>
          <p className="mt-2 text-dark-200">∴ gcd(1604, 502) = 2</p>
        </div>
      </Card>

      {/* Definition */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Simple Continued Fractions</h3>

      <p className="text-dark-200 mb-4">
        Rewriting the divisions above produces a continued fraction:
      </p>

      <MathBlock>{`\\frac{1604}{502} = 3 + \\cfrac{1}{5 + \\cfrac{1}{8 + \\cfrac{1}{6}}}`}</MathBlock>

      <Callout type="info" title="Simple Continued Fraction">
        <p className="mb-2">
          A <strong>simple continued fraction</strong> is written{' '}
          <InlineMath>{`(a_0, a_1, a_2, \\ldots)`}</InlineMath> and represents:
        </p>
        <MathBlock>{`a_0 + \\cfrac{1}{a_1 + \\cfrac{1}{a_2 + \\cfrac{1}{a_3 + \\cdots}}}`}</MathBlock>
        <p className="text-sm mt-2">
          For <InlineMath>{`i > 0`}</InlineMath>, we require{' '}
          <InlineMath>{`a_i > 0`}</InlineMath> (positive integers).
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Using Euclid's Algorithm, any <strong>positive rational</strong> can be
        written as a <strong>finite</strong> continued fraction{' '}
        <InlineMath>{`(a_0, a_1, \\ldots, a_n)`}</InlineMath>.
      </p>

      {/* Convergents */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Convergents</h3>

      <p className="text-dark-200 mb-4">
        Infinite continued fractions represent <strong>irrational numbers</strong>.
        They can be approximated by <strong>convergents</strong>:
      </p>

      <MathBlock>{`c_0 = a_0, \\quad c_1 = (a_0, a_1), \\quad c_2 = (a_0, a_1, a_2), \\quad \\ldots`}</MathBlock>

      <Callout type="success" title="Computing Convergents">
        <p className="mb-2">
          The <InlineMath>{`n`}</InlineMath>th convergent is{' '}
          <InlineMath>{`c_n = \\frac{p_n}{q_n}`}</InlineMath>, where:
        </p>
        <MathBlock>{`p_0 = a_0, \\quad p_1 = a_0 a_1 + 1, \\quad p_n = a_n p_{n-1} + p_{n-2}`}</MathBlock>
        <MathBlock>{`q_0 = 1, \\quad q_1 = a_1, \\quad q_n = a_n q_{n-1} + q_{n-2}`}</MathBlock>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Example: (3, 5, 8, 6)</CardHeader>
        <div className="text-dark-300 text-sm">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="py-1">n</th>
                <th>aₙ</th>
                <th>pₙ</th>
                <th>qₙ</th>
                <th>cₙ = pₙ/qₙ</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0</td><td>3</td><td>3</td><td>1</td><td>3</td></tr>
              <tr><td>1</td><td>5</td><td>16</td><td>5</td><td>3.2</td></tr>
              <tr><td>2</td><td>8</td><td>131</td><td>41</td><td>3.195...</td></tr>
              <tr><td>3</td><td>6</td><td>802</td><td>251</td><td>3.1952...</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Key Theorems */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Key Properties</h3>

      <Callout type="success" title="Alternating Determinant">
        <p>
          For all <InlineMath>{`n > 0`}</InlineMath>:
        </p>
        <MathBlock>{`p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}`}</MathBlock>
      </Callout>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Lowest Terms</CardHeader>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`\\gcd(p_n, q_n) = 1`}</InlineMath> for all{' '}
            <InlineMath>{`n`}</InlineMath>. Every convergent is automatically
            in lowest terms.
          </p>
        </Card>
        <Card>
          <CardHeader>Difference Formula</CardHeader>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`c_n - c_{n-1} = \\frac{(-1)^{n-1}}{q_n q_{n-1}}`}</InlineMath>
          </p>
          <p className="text-dark-400 text-xs mt-1">
            Consecutive convergents differ by alternating small amounts.
          </p>
        </Card>
      </CardGrid>

      {/* Convergence */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Convergence Behavior</h3>

      <p className="text-dark-200 mb-4">
        Since the <InlineMath>{`q_n`}</InlineMath> are strictly increasing, the
        difference formula shows that odd and even convergents form interleaved
        sequences:
      </p>

      <MathBlock>{`c_1 > c_3 > c_5 > \\cdots \\quad \\text{(decreasing)}`}</MathBlock>
      <MathBlock>{`c_0 < c_2 < c_4 < \\cdots \\quad \\text{(increasing)}`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        Since <InlineMath>{`c_n - c_{n-1} \\to 0`}</InlineMath>, both sequences
        converge to a common limit <InlineMath>{`\\alpha = (a_0, a_1, a_2, \\ldots)`}</InlineMath>.
      </p>

      {/* Golden Ratio Example */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Golden Ratio</h3>

      <Callout type="info" title="Example: (1, 1, 1, ...)">
        <p className="mb-2">
          Let <InlineMath>{`x = (1, 1, 1, \\ldots)`}</InlineMath>. Then:
        </p>
        <MathBlock>{`x = 1 + \\frac{1}{x}`}</MathBlock>
        <p className="mb-2">
          Solving: <InlineMath>{`x^2 - x - 1 = 0`}</InlineMath>, so:
        </p>
        <MathBlock>{`x = \\frac{1 + \\sqrt{5}}{2} = \\varphi \\approx 1.618`}</MathBlock>
        <p className="text-sm mt-2">
          This is the <strong>golden ratio</strong>! Its convergents are ratios
          of consecutive Fibonacci numbers.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Another Example</CardHeader>
        <div className="text-dark-300">
          <p className="mb-2">
            The continued fraction <InlineMath>{`(2a, a, 2a, a, 2a, a, \\ldots)`}</InlineMath>{' '}
            equals:
          </p>
          <MathBlock>{`a + \\sqrt{a^2 + 2}`}</MathBlock>
          <p className="text-sm mt-2">
            Periodic continued fractions always represent quadratic surds.
          </p>
        </div>
      </Card>

      {/* Historical Note */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Historical Note</h3>

      <p className="text-dark-200 mb-4">
        Continued fractions provide the <strong>best rational approximations</strong>{' '}
        to real numbers. The approximation{' '}
        <InlineMath>{`\\pi \\approx \\frac{355}{113}`}</InlineMath> (accurate to
        6 decimal places) comes from the continued fraction expansion of{' '}
        <InlineMath>{`\\pi`}</InlineMath>.
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Euclid's Algorithm</strong> naturally produces continued
            fractions</li>
          <li>• Notation: <InlineMath>{`(a_0, a_1, a_2, \\ldots)`}</InlineMath>{' '}
            for <InlineMath>{`a_0 + \\frac{1}{a_1 + \\frac{1}{a_2 + \\cdots}}`}</InlineMath></li>
          <li>• <strong>Convergents</strong>{' '}
            <InlineMath>{`c_n = p_n / q_n`}</InlineMath> approximate the value</li>
          <li>• <strong>Recurrence</strong>:{' '}
            <InlineMath>{`p_n = a_n p_{n-1} + p_{n-2}`}</InlineMath>,{' '}
            <InlineMath>{`q_n = a_n q_{n-1} + q_{n-2}`}</InlineMath></li>
          <li>• <InlineMath>{`p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}`}</InlineMath>{' '}
            (convergents are always in lowest terms)</li>
          <li>• Odd convergents decrease, even convergents increase</li>
          <li>• <InlineMath>{`(1, 1, 1, \\ldots) = \\varphi`}</InlineMath>{' '}
            (golden ratio)</li>
          <li>• Rationals have <strong>finite</strong> expansions; irrationals
            have <strong>infinite</strong> expansions</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={44} questions={section44Questions} />
    </LessonLayout>
  );
}
