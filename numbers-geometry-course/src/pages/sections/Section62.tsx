import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section62Questions } from '../../data/quizzes';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <h2 className="text-2xl font-semibold mb-4">
        Factorizing a Sum of Two Squares
      </h2>

      <Callout type="warning">
        <p>
          <strong>Advanced Topic:</strong> This section develops algorithmic
          methods for finding the representation of a prime as a sum of two
          squares.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6 mt-6 text-lg leading-relaxed">
        We know that primes <InlineMath>p \equiv 1 \pmod 4</InlineMath> can be
        written as <InlineMath>p = a^2 + b^2</InlineMath>. But how do we{' '}
        <em>find</em> the values of <InlineMath>a</InlineMath> and{' '}
        <InlineMath>b</InlineMath>? Gaussian integers provide an algorithm.
      </p>

      {/* The Problem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Problem</h3>

      <p className="text-dark-200 mb-6">
        Given a prime <InlineMath>p \equiv 1 \pmod 4</InlineMath>, find{' '}
        <InlineMath>a, b \in \mathbb{'{Z}'}</InlineMath> such that{' '}
        <InlineMath>p = a^2 + b^2</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> For <InlineMath>p = 41</InlineMath>:
        </p>
        <p className="text-dark-200">
          We want <InlineMath>41 = a^2 + b^2</InlineMath>. Answer:{' '}
          <InlineMath>41 = 4^2 + 5^2 = 16 + 25</InlineMath>.
        </p>
      </div>

      {/* Step 1: Find a Square Root of -1 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Step 1: Find a Square Root of −1 mod p
      </h3>

      <p className="text-dark-200 mb-6">
        Since <InlineMath>p \equiv 1 \pmod 4</InlineMath>, the number{' '}
        <InlineMath>-1</InlineMath> is a quadratic residue mod{' '}
        <InlineMath>p</InlineMath>. We need to find <InlineMath>m</InlineMath>{' '}
        such that:
      </p>

      <MathBlock>
        {`m^2 \\equiv -1 \\pmod p`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        One way to find such an <InlineMath>m</InlineMath> is to compute:
      </p>

      <MathBlock>
        {`m \\equiv n^{(p-1)/4} \\pmod p`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        for various values of <InlineMath>n</InlineMath>. If{' '}
        <InlineMath>n</InlineMath> is a quadratic non-residue, this will give a
        square root of <InlineMath>-1</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> For <InlineMath>p = 41</InlineMath>:
        </p>
        <p className="text-dark-200">
          Since 2 is a quadratic non-residue mod 41:{' '}
          <InlineMath>m \equiv 2^{'{10}'} \equiv 9 \pmod{'{41}'}</InlineMath>.
        </p>
        <p className="text-dark-200 mt-2">
          Check: <InlineMath>9^2 = 81 = 2 \cdot 41 - 1 \equiv -1 \pmod{'{41}'}</InlineMath> ✓
        </p>
      </div>

      {/* Step 2: Euclidean Algorithm in Z[i] */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Step 2: Use the Euclidean Algorithm
      </h3>

      <p className="text-dark-200 mb-6">
        Now we know that <InlineMath>p | (m^2 + 1) = (m + i)(m - i)</InlineMath>{' '}
        in <InlineMath>\mathbb{'{Z}'}[i]</InlineMath>. Since <InlineMath>p</InlineMath>{' '}
        doesn't divide either factor (their imaginary parts are ±1), we have:
      </p>

      <MathBlock>
        {`\\gcd(p, m + i) \\neq 1 \\text{ and } \\neq p`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        The Euclidean algorithm in <InlineMath>\mathbb{'{Z}'}[i]</InlineMath>{' '}
        finds this GCD, which is a Gaussian prime <InlineMath>\pi</InlineMath>{' '}
        with <InlineMath>N(\pi) = p</InlineMath>.
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Key Insight
        </h4>
        <p className="text-dark-200">
          Computing <InlineMath>\gcd(p, m + i)</InlineMath> gives us{' '}
          <InlineMath>\pi = a + bi</InlineMath>, and then{' '}
          <InlineMath>p = N(\pi) = a^2 + b^2</InlineMath>.
        </p>
      </div>

      {/* Example Calculation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Complete Example: p = 41
      </h3>

      <p className="text-dark-200 mb-6">
        We found <InlineMath>m = 9</InlineMath> with{' '}
        <InlineMath>9^2 \equiv -1 \pmod{'{41}'}</InlineMath>. Now compute{' '}
        <InlineMath>\gcd(41, 9 + i)</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Division step:</strong>
        </p>
        <MathBlock>
          {`\\frac{41}{9 + i} = \\frac{41(9 - i)}{(9+i)(9-i)} = \\frac{41(9-i)}{82} = \\frac{9-i}{2}`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          Rounding to nearest Gaussian integer: <InlineMath>4 - 0i = 4</InlineMath>
        </p>
        <p className="text-dark-200 mt-2">
          Remainder: <InlineMath>41 - 4(9 + i) = 41 - 36 - 4i = 5 - 4i</InlineMath>
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Now compute <InlineMath>\gcd(9 + i, 5 - 4i)</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <MathBlock>
          {`\\frac{9 + i}{5 - 4i} = \\frac{(9+i)(5+4i)}{41} = \\frac{41 + 41i}{41} = 1 + i`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          Remainder: <InlineMath>(9 + i) - (1 + i)(5 - 4i) = (9 + i) - (9 + i) = 0</InlineMath>
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        So <InlineMath>\gcd(41, 9 + i) = 5 - 4i</InlineMath> (up to units).
      </p>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Result
        </h4>
        <p className="text-dark-200">
          <InlineMath>41 = N(5 - 4i) = 5^2 + 4^2 = 25 + 16</InlineMath>
        </p>
      </div>

      {/* Diophantus Identity */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Products of Sums of Squares
      </h3>

      <p className="text-dark-200 mb-6">
        The multiplicativity of the norm gives the <strong>Diophantus identity</strong>:
      </p>

      <MathBlock>
        {`(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This lets us factor any sum of two squares into products of primes, each
        of which is a sum of two squares.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> <InlineMath>65 = 5 \times 13</InlineMath>
        </p>
        <p className="text-dark-200">
          <InlineMath>5 = 1^2 + 2^2</InlineMath> and{' '}
          <InlineMath>13 = 2^2 + 3^2</InlineMath>
        </p>
        <MathBlock>
          {`65 = (1^2 + 2^2)(2^2 + 3^2) = (1 \\cdot 2 - 2 \\cdot 3)^2 + (1 \\cdot 3 + 2 \\cdot 2)^2 = (-4)^2 + 7^2`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          Or using the other formula: <InlineMath>65 = 1^2 + 8^2</InlineMath>
        </p>
      </div>

      <Callout type="info">
        <p>
          The Diophantus identity is equivalent to the multiplicativity of the
          norm: <InlineMath>N(\alpha\beta) = N(\alpha)N(\beta)</InlineMath>. It
          was known to Diophantus in the 3rd century!
        </p>
      </Callout>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Algorithm Summary</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-200">
          <li>
            Find <InlineMath>m</InlineMath> with{' '}
            <InlineMath>m^2 \equiv -1 \pmod p</InlineMath>
          </li>
          <li>
            Compute <InlineMath>\pi = \gcd(p, m + i)</InlineMath> using Euclidean
            algorithm in <InlineMath>\mathbb{'{Z}'}[i]</InlineMath>
          </li>
          <li>
            Write <InlineMath>\pi = a + bi</InlineMath>; then{' '}
            <InlineMath>p = a^2 + b^2</InlineMath>
          </li>
        </ol>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={62} questions={section62Questions} />
    </LessonLayout>
  );
}
