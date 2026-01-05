import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section46Questions } from '../../data/quizzes';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <h2 className="text-2xl font-semibold mb-4">Linear Diophantine Equations</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        A <strong>linear Diophantine equation</strong> in two variables is an equation
        of the form <InlineMath>{`ax + by = c`}</InlineMath> where{' '}
        <InlineMath>{`a, b, c`}</InlineMath> are given integers and we seek{' '}
        <strong>integer</strong> solutions <InlineMath>{`x, y`}</InlineMath>.
        The adjective "Diophantine" comes from <strong>Diophantus of Alexandria</strong>{' '}
        (~250 AD), though <strong>Brahmagupta</strong> of India (628 AD) gave the
        first complete solution.
      </p>

      {/* Existence of Solutions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">When Do Solutions Exist?</h3>

      <Callout type="success" title="Existence Criterion">
        <p>
          The equation <InlineMath>{`ax + by = c`}</InlineMath> has integer solutions
          if and only if <InlineMath>{`\\gcd(a, b)`}</InlineMath> divides{' '}
          <InlineMath>{`c`}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        <strong>Why?</strong> Let <InlineMath>{`d = \\gcd(a, b)`}</InlineMath>.
        If <InlineMath>{`ax + by = c`}</InlineMath>, then{' '}
        <InlineMath>{`d`}</InlineMath> divides the left side, so it must divide{' '}
        <InlineMath>{`c`}</InlineMath>. Conversely, if{' '}
        <InlineMath>{`d \\mid c`}</InlineMath>, write{' '}
        <InlineMath>{`c = dc'`}</InlineMath> and divide through by{' '}
        <InlineMath>{`d`}</InlineMath> to reduce to the case{' '}
        <InlineMath>{`\\gcd(a', b') = 1`}</InlineMath>.
      </p>

      {/* Solution Method */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        Finding Solutions via Continued Fractions
      </h3>

      <p className="text-dark-200 mb-4">
        When <InlineMath>{`\\gcd(a, b) = 1`}</InlineMath>, we can solve{' '}
        <InlineMath>{`ax + by = c`}</InlineMath> using continued fractions:
      </p>

      <Card className="mb-6">
        <CardHeader>Algorithm</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p><strong>Step 1:</strong> Use Euclid's algorithm to write{' '}
            <InlineMath>{`a/b = (a_0, a_1, \\ldots, a_n)`}</InlineMath>.</p>
          <p><strong>Step 2:</strong> Compute the penultimate convergent{' '}
            <InlineMath>{`p_{n-1}/q_{n-1}`}</InlineMath>.</p>
          <p><strong>Step 3:</strong> Since{' '}
            <InlineMath>{`p_n q_{n-1} - p_{n-1} q_n = \\pm 1`}</InlineMath> and{' '}
            <InlineMath>{`a = \\pm p_n`}</InlineMath>,{' '}
            <InlineMath>{`b = \\pm q_n`}</InlineMath>, one solution is:</p>
          <MathBlock>{`x_0 = \\pm c \\cdot q_{n-1}, \\quad y_0 = \\pm c \\cdot p_{n-1}`}</MathBlock>
          <p className="text-sm">(Choose signs so that <InlineMath>{`ax_0 + by_0 = c`}</InlineMath>.)</p>
        </div>
      </Card>

      {/* General Solution */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The General Solution</h3>

      <Callout type="success" title="Complete Solution">
        <p className="mb-2">
          If <InlineMath>{`(x_0, y_0)`}</InlineMath> is one solution of{' '}
          <InlineMath>{`ax + by = c`}</InlineMath>, then <strong>all</strong> solutions are:
        </p>
        <MathBlock>{`x = x_0 + bt, \\quad y = y_0 - at`}</MathBlock>
        <p className="text-sm mt-2">
          where <InlineMath>{`t`}</InlineMath> ranges over all integers.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof of Completeness</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            If <InlineMath>{`ax + by = c = ax_0 + by_0`}</InlineMath>, then{' '}
            <InlineMath>{`a(x - x_0) = b(y_0 - y)`}</InlineMath>.
          </p>
          <p>
            Since <InlineMath>{`\\gcd(a, b) = 1`}</InlineMath>, we have{' '}
            <InlineMath>{`b \\mid (x - x_0)`}</InlineMath> by the Fundamental Lemma.
          </p>
          <p>
            So <InlineMath>{`x - x_0 = bt`}</InlineMath> for some integer{' '}
            <InlineMath>{`t`}</InlineMath>, giving <InlineMath>{`x = x_0 + bt`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Worked Example */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Worked Example</h3>

      <Card className="mb-6">
        <CardHeader>Solve 25x + 55y = 50</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p><strong>Step 1:</strong> Find <InlineMath>{`\\gcd(25, 55)`}</InlineMath>:</p>
          <p className="font-mono text-sm ml-4">
            25/55 = (0, 2, 5) → gcd = 5
          </p>
          <p><strong>Step 2:</strong> Check: 5 divides 50 ✓. Simplify to{' '}
            <InlineMath>{`5x + 11y = 10`}</InlineMath>.</p>
          <p><strong>Step 3:</strong> Penultimate convergent of (0, 2, 5) is{' '}
            <InlineMath>{`(0, 2) = 1/2`}</InlineMath>.</p>
          <p><strong>Step 4:</strong> Try <InlineMath>{`x_0 = \\pm 10 \\times 2`}</InlineMath>,{' '}
            <InlineMath>{`y_0 = \\pm 10 \\times 1`}</InlineMath>.</p>
          <p>Check: <InlineMath>{`5(-20) + 11(10) = -100 + 110 = 10`}</InlineMath> ✓</p>
          <p className="font-semibold mt-2">General solution:</p>
          <MathBlock>{`x = -20 + 11t, \\quad y = 10 - 5t`}</MathBlock>
        </div>
      </Card>

      {/* Positive Solutions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Finding Positive Solutions</h3>

      <p className="text-dark-200 mb-4">
        Often we want only <strong>positive integer</strong> solutions. This requires:
      </p>

      <MathBlock>{`x_0 + bt > 0 \\quad \\text{and} \\quad y_0 - at > 0`}</MathBlock>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>From x &gt; 0</CardHeader>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`t > -x_0/b`}</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader>From y &gt; 0</CardHeader>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`t < y_0/a`}</InlineMath>
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4 mt-4">
        Positive solutions exist iff there is an integer{' '}
        <InlineMath>{`t`}</InlineMath> in the interval{' '}
        <InlineMath>{`(-x_0/b, y_0/a)`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Example Continued</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            For <InlineMath>{`x = -20 + 11t`}</InlineMath>,{' '}
            <InlineMath>{`y = 10 - 5t`}</InlineMath>:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><InlineMath>{`x > 0 \\Rightarrow t > 20/11 \\approx 1.82`}</InlineMath></li>
            <li><InlineMath>{`y > 0 \\Rightarrow t < 10/5 = 2`}</InlineMath></li>
          </ul>
          <p className="mt-2">
            Need <InlineMath>{`1.82 < t < 2`}</InlineMath>. No integer exists!
          </p>
          <p className="font-semibold mt-2">
            → No positive integer solutions.
          </p>
        </div>
      </Card>

      {/* Historical Note */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Historical Note</h3>

      <p className="text-dark-200 mb-4">
        While named after Diophantus, he actually allowed <em>rational</em> solutions.
        The restriction to integers came later. The ancient Greeks likely used
        essentially the same method involving Euclid's algorithm, so this material
        would have been accessible to them.
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Linear Diophantine equation</strong>:{' '}
            <InlineMath>{`ax + by = c`}</InlineMath> with integer solutions</li>
          <li>• <strong>Existence</strong>: solutions exist iff{' '}
            <InlineMath>{`\\gcd(a,b) \\mid c`}</InlineMath></li>
          <li>• <strong>One solution</strong>:{' '}
            <InlineMath>{`x_0 = \\pm c \\cdot q_{n-1}`}</InlineMath>,{' '}
            <InlineMath>{`y_0 = \\pm c \\cdot p_{n-1}`}</InlineMath>{' '}
            from continued fractions</li>
          <li>• <strong>All solutions</strong>:{' '}
            <InlineMath>{`x = x_0 + bt`}</InlineMath>,{' '}
            <InlineMath>{`y = y_0 - at`}</InlineMath> for{' '}
            <InlineMath>{`t \\in \\mathbb{Z}`}</InlineMath></li>
          <li>• <strong>Positive solutions</strong>: require{' '}
            <InlineMath>{`-x_0/b < t < y_0/a`}</InlineMath></li>
          <li>• Brahmagupta (628 AD) gave the first complete solution</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={46} questions={section46Questions} />
    </LessonLayout>
  );
}
