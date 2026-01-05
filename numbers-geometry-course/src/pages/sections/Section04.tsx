import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section04Questions } from '../../data/quizzes';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-semibold mb-4">Linear Equations</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The humble linear equation <InlineMath>ax + by = c</InlineMath> takes on a new
        interest when we seek <strong>integer solutions</strong> <InlineMath>x</InlineMath>{' '}
        and <InlineMath>y</InlineMath> for given integers <InlineMath>a</InlineMath>,{' '}
        <InlineMath>b</InlineMath>, and <InlineMath>c</InlineMath>. It can very easily
        fail to have an integer solution, so the problem is first to decide whether
        there is an integer solution, and if so, how to find it.
      </p>

      {/* When Solutions Don't Exist */}
      <h3 className="text-xl font-semibold mt-10 mb-4">When Solutions Don't Exist</h3>

      <p className="text-dark-200 mb-6">
        Take the example <InlineMath>15x + 12y = 4</InlineMath>. For any integers{' '}
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>, 3 divides{' '}
        <InlineMath>15x + 12y</InlineMath>, because 3 divides both 15 and 12. But 3
        does not divide 4, hence there is <strong>no integer solution</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-red-400">
        <h4 className="text-lg font-semibold mb-3 text-red-400">No Solution Criterion</h4>
        <p className="text-dark-200">
          The equation <InlineMath>ax + by = c</InlineMath> has no integer solution if{' '}
          <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> have a common divisor
          that does not divide <InlineMath>c</InlineMath>.
        </p>
      </div>

      {/* When Solutions Exist */}
      <h3 className="text-xl font-semibold mt-10 mb-4">When Solutions Exist</h3>

      <p className="text-dark-200 mb-6">
        But what if all divisors of <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>{' '}
        divide <InlineMath>c</InlineMath>? Consider <InlineMath>17x + 12y = 1</InlineMath>.
        The only divisors of both 17 and 12 are <InlineMath>\pm 1</InlineMath>, which
        certainly divide 1. And with some difficulty, we find a solution:{' '}
        <InlineMath>x = 5</InlineMath> and <InlineMath>y = -7</InlineMath>.
      </p>

      <MathBlock>{`17 \\times 5 + 12 \\times (-7) = 85 - 84 = 1 \\quad \\checkmark`}</MathBlock>

      <Callout type="info">
        <p>
          The key is the <strong>greatest common divisor</strong> of <InlineMath>a</InlineMath>{' '}
          and <InlineMath>b</InlineMath>, written <InlineMath>\gcd(a, b)</InlineMath>. Any
          divisor of <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> is also a
          divisor of <InlineMath>ax + by</InlineMath> for any integers <InlineMath>x</InlineMath>{' '}
          and <InlineMath>y</InlineMath>.
        </p>
      </Callout>

      {/* The Euclidean Algorithm */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Euclidean Algorithm</h3>

      <p className="text-dark-200 mb-6">
        There is a famous algorithm for finding <InlineMath>\gcd(a, b)</InlineMath>. It is
        called the <strong>Euclidean algorithm</strong>, described by Euclid as "repeatedly
        subtracting the smaller number from the larger."
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">The Euclidean Algorithm</h4>
        <p className="text-dark-200 mb-4">
          Given natural numbers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>,
          produce pairs <InlineMath>(a_1, b_1), (a_2, b_2), \ldots</InlineMath> where:
        </p>
        <ul className="text-dark-200 space-y-2 mb-4">
          <li>• <InlineMath>(a_1, b_1) = (a, b)</InlineMath></li>
          <li>• <InlineMath>a_{'{i+1}'} = \max(a_i, b_i) - \min(a_i, b_i)</InlineMath> (larger minus smaller)</li>
          <li>• <InlineMath>b_{'{i+1}'} = \min(a_i, b_i)</InlineMath> (keep the smaller)</li>
        </ul>
        <p className="text-dark-200">
          Stop when <InlineMath>a_k = b_k</InlineMath>. Then <InlineMath>\gcd(a, b) = a_k = b_k</InlineMath>.
        </p>
      </div>

      {/* Example */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Example: gcd(17, 12)</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-amber-400">
              <th className="text-left py-2">Step</th>
              <th className="text-left py-2">Pair</th>
              <th className="text-left py-2">In terms of a, b</th>
            </tr>
          </thead>
          <tbody className="text-dark-200">
            <tr className="border-t border-dark-700">
              <td className="py-2">1</td>
              <td><InlineMath>(17, 12)</InlineMath></td>
              <td><InlineMath>(a, b)</InlineMath></td>
            </tr>
            <tr className="border-t border-dark-700">
              <td className="py-2">2</td>
              <td><InlineMath>(5, 12)</InlineMath></td>
              <td><InlineMath>(a - b, b)</InlineMath></td>
            </tr>
            <tr className="border-t border-dark-700">
              <td className="py-2">3</td>
              <td><InlineMath>(7, 5)</InlineMath></td>
              <td><InlineMath>(2b - a, a - b)</InlineMath></td>
            </tr>
            <tr className="border-t border-dark-700">
              <td className="py-2">4</td>
              <td><InlineMath>(2, 5)</InlineMath></td>
              <td><InlineMath>(3b - 2a, a - b)</InlineMath></td>
            </tr>
            <tr className="border-t border-dark-700">
              <td className="py-2">5</td>
              <td><InlineMath>(3, 2)</InlineMath></td>
              <td><InlineMath>(3a - 4b, 3b - 2a)</InlineMath></td>
            </tr>
            <tr className="border-t border-dark-700">
              <td className="py-2">6</td>
              <td><InlineMath>(1, 2)</InlineMath></td>
              <td><InlineMath>(5a - 7b, 3b - 2a)</InlineMath></td>
            </tr>
          </tbody>
        </table>
        <p className="text-emerald-400 mt-4">
          The last step shows <InlineMath>\gcd(17, 12) = 1 = 5a - 7b = 5(17) - 7(12)</InlineMath>.
        </p>
      </div>

      {/* Why It Works */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why the Algorithm Works</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Termination" />
          <p className="text-sm text-dark-300">
            The algorithm reaches a pair of equal numbers because the sequence{' '}
            <InlineMath>a_1, a_2, a_3, \ldots</InlineMath> cannot decrease indefinitely
            (infinite descent).
          </p>
        </Card>
        <Card>
          <CardHeader title="Correctness" />
          <p className="text-sm text-dark-300">
            Each pair has the same common divisors (any divisor of two numbers divides
            their difference and sum). So <InlineMath>\gcd(a_k, b_k) = \gcd(a, b)</InlineMath>.
          </p>
        </Card>
      </CardGrid>

      {/* Linear Representation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Linear Representation of the GCD</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Key Theorem</h4>
        <p className="text-dark-200 mb-4">
          All numbers <InlineMath>a_i, b_i</InlineMath> produced by the Euclidean algorithm
          are of the form <InlineMath>ax + by</InlineMath> for some integers{' '}
          <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>.
        </p>
        <p className="text-dark-200">
          Hence <InlineMath>\gcd(a, b) = ax + by</InlineMath> for some integers{' '}
          <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>.
        </p>
      </div>

      <Callout type="success">
        <p>
          <strong>Proof:</strong> The first pair <InlineMath>a, b</InlineMath> are certainly
          of the form <InlineMath>ax + by</InlineMath> (with <InlineMath>x=1, y=0</InlineMath>{' '}
          and <InlineMath>x=0, y=1</InlineMath>). All subsequent numbers are differences of
          previous ones, so they remain of this form.
        </p>
      </Callout>

      {/* Solvability Test */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Test for Integer Solvability</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Theorem</h4>
        <p className="text-dark-200 mb-4">
          The equation <InlineMath>ax + by = c</InlineMath> has an integer solution if
          and only if <InlineMath>\gcd(a, b)</InlineMath> divides <InlineMath>c</InlineMath>.
        </p>
        <div className="text-sm text-dark-400 mt-4 space-y-2">
          <p>
            <strong>If <InlineMath>\gcd(a,b)</InlineMath> doesn't divide <InlineMath>c</InlineMath>:</strong>{' '}
            No solution (as we saw with <InlineMath>15x + 12y = 4</InlineMath>).
          </p>
          <p>
            <strong>If <InlineMath>\gcd(a,b)</InlineMath> divides <InlineMath>c</InlineMath>:</strong>{' '}
            Let <InlineMath>c = \gcd(a,b) \times d</InlineMath>. We know{' '}
            <InlineMath>\gcd(a,b) = ax' + by'</InlineMath> for some <InlineMath>x', y'</InlineMath>.
            Then <InlineMath>x = x'd</InlineMath>, <InlineMath>y = y'd</InlineMath> is a solution.
          </p>
        </div>
      </div>

      {/* Efficiency */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Efficiency of the Algorithm</h3>

      <p className="text-dark-200 mb-6">
        In practice, we speed up the Euclidean algorithm by <strong>dividing</strong> the
        larger number by the smaller and keeping the remainder (instead of repeated subtraction).
        This is much faster when <InlineMath>a</InlineMath> is much larger than{' '}
        <InlineMath>b</InlineMath>.
      </p>

      <Callout type="info">
        <p>
          If <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are integers with
          many digits, the Euclidean algorithm completes in roughly as many steps as there
          are digits — exponentially faster than listing multiples!
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <InlineMath>ax + by = c</InlineMath> has an integer solution iff{' '}
              <InlineMath>\gcd(a, b)</InlineMath> divides <InlineMath>c</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The <strong>Euclidean algorithm</strong> finds <InlineMath>\gcd(a, b)</InlineMath>{' '}
              by repeatedly subtracting the smaller from the larger.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The algorithm terminates by <strong>infinite descent</strong> (we can't decrease forever).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <InlineMath>\gcd(a, b)</InlineMath> can always be written as{' '}
              <InlineMath>ax + by</InlineMath> for some integers <InlineMath>x, y</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The division form of the algorithm is very efficient — roughly{' '}
              <InlineMath>O(\log a)</InlineMath> steps.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={4} questions={section04Questions} />
    </LessonLayout>
  );
}
