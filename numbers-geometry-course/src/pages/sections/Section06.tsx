import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section06Questions } from '../../data/quizzes';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-semibold mb-4">Prime Factorization and Divisors</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Unique prime factorization, first stated explicitly by Gauss (1801), allows us
        to describe <strong>all the divisors</strong> of a given natural number. This
        leads to elegant formulas for gcd, lcm, and even the ancient concept of
        perfect numbers.
      </p>

      {/* Describing Divisors */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Describing All Divisors</h3>

      <p className="text-dark-200 mb-6">
        Consider <InlineMath>30 = 2 \times 3 \times 5</InlineMath>. The divisors of 30 are
        all products of subsets of its prime factors:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="text-dark-200">
            <span className="text-amber-400 font-mono">1</span>
            <p className="text-xs text-dark-500">(empty)</p>
          </div>
          <div className="text-dark-200">
            <span className="text-amber-400 font-mono">2</span>
            <p className="text-xs text-dark-500">2</p>
          </div>
          <div className="text-dark-200">
            <span className="text-amber-400 font-mono">3</span>
            <p className="text-xs text-dark-500">3</p>
          </div>
          <div className="text-dark-200">
            <span className="text-amber-400 font-mono">5</span>
            <p className="text-xs text-dark-500">5</p>
          </div>
          <div className="text-dark-200">
            <span className="text-amber-400 font-mono">6</span>
            <p className="text-xs text-dark-500">2×3</p>
          </div>
          <div className="text-dark-200">
            <span className="text-amber-400 font-mono">10</span>
            <p className="text-xs text-dark-500">2×5</p>
          </div>
          <div className="text-dark-200">
            <span className="text-amber-400 font-mono">15</span>
            <p className="text-xs text-dark-500">3×5</p>
          </div>
          <div className="text-dark-200">
            <span className="text-amber-400 font-mono">30</span>
            <p className="text-xs text-dark-500">2×3×5</p>
          </div>
        </div>
      </div>

      <Callout type="info">
        <p>
          Any divisor <InlineMath>a</InlineMath> of 30 satisfies{' '}
          <InlineMath>30 = ab</InlineMath> for some <InlineMath>b</InlineMath>. By
          uniqueness, the prime factorization of <InlineMath>ab</InlineMath> is{' '}
          <InlineMath>2 \times 3 \times 5</InlineMath>, so <InlineMath>a</InlineMath>{' '}
          must be part of this factorization.
        </p>
      </Callout>

      {/* General Formula */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The General Formula</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Divisors from Prime Factorization</h4>
        <p className="text-dark-200 mb-4">
          If <InlineMath>n = p_1^{'{e_1}'} p_2^{'{e_2}'} \cdots p_k^{'{e_k}'}</InlineMath>,
          then the divisors of <InlineMath>n</InlineMath> are exactly:
        </p>
        <MathBlock>{`p_1^{d_1} p_2^{d_2} \\cdots p_k^{d_k}`}</MathBlock>
        <p className="text-dark-200 mt-4">
          where <InlineMath>0 \leq d_1 \leq e_1</InlineMath>,{' '}
          <InlineMath>0 \leq d_2 \leq e_2</InlineMath>, ...,{' '}
          <InlineMath>0 \leq d_k \leq e_k</InlineMath>.
        </p>
      </div>

      {/* Counting Divisors */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Counting Divisors</h3>

      <p className="text-dark-200 mb-6">
        This formula tells us how many divisors <InlineMath>n</InlineMath> has:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Number of Divisors</h4>
        <MathBlock>{`\\tau(n) = (e_1 + 1)(e_2 + 1) \\cdots (e_k + 1)`}</MathBlock>
        <p className="text-dark-200 mt-4 text-sm">
          Each exponent <InlineMath>d_i</InlineMath> can be chosen in{' '}
          <InlineMath>e_i + 1</InlineMath> ways (from 0 to <InlineMath>e_i</InlineMath>).
        </p>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Example: 5040</h4>
        <p className="text-dark-200 mb-2">
          Plato noted that <InlineMath>5040 = 2^4 \times 3^2 \times 5 \times 7</InlineMath>{' '}
          is divisible by all numbers from 1 to 10.
        </p>
        <p className="text-dark-200">
          Number of divisors: <InlineMath>(4+1)(2+1)(1+1)(1+1) = 5 \times 3 \times 2 \times 2 = 60</InlineMath>
        </p>
      </div>

      {/* GCD and LCM */}
      <h3 className="text-xl font-semibold mt-10 mb-4">GCD and LCM from Prime Factorizations</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Greatest Common Divisor" />
          <p className="text-sm text-dark-300 mb-2">
            Take the <strong>minimum</strong> exponent for each prime:
          </p>
          <MathBlock>{`\\gcd(m, n) = \\prod p_i^{\\min(e_i, f_i)}`}</MathBlock>
        </Card>
        <Card>
          <CardHeader title="Least Common Multiple" />
          <p className="text-sm text-dark-300 mb-2">
            Take the <strong>maximum</strong> exponent for each prime:
          </p>
          <MathBlock>{`\\text{lcm}(m, n) = \\prod p_i^{\\max(e_i, f_i)}`}</MathBlock>
        </Card>
      </CardGrid>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Example</h4>
        <p className="text-dark-200 mb-2">
          <InlineMath>m = 12 = 2^2 \times 3</InlineMath> and{' '}
          <InlineMath>n = 18 = 2 \times 3^2</InlineMath>
        </p>
        <ul className="text-dark-200 space-y-1 text-sm">
          <li>
            <InlineMath>\gcd(12, 18) = 2^{'{\\min(2,1)}'} \times 3^{'{\\min(1,2)}'} = 2^1 \times 3^1 = 6</InlineMath>
          </li>
          <li>
            <InlineMath>\text{'{lcm}'}(12, 18) = 2^{'{\\max(2,1)}'} \times 3^{'{\\max(1,2)}'} = 2^2 \times 3^2 = 36</InlineMath>
          </li>
        </ul>
      </div>

      {/* Elegant Formula */}
      <h3 className="text-xl font-semibold mt-10 mb-4">An Elegant Relationship</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Product Formula</h4>
        <MathBlock>{`\\gcd(m, n) \\times \\text{lcm}(m, n) = m \\times n`}</MathBlock>
        <p className="text-dark-200 mt-4 text-sm">
          This formula lets us compute <InlineMath>\text{'{lcm}'}(m, n)</InlineMath>{' '}
          <em>without</em> prime factorization: use the Euclidean algorithm for gcd,
          then divide into <InlineMath>mn</InlineMath>.
        </p>
      </div>

      <Callout type="success">
        <p>
          Check: <InlineMath>\gcd(12, 18) \times \text{'{lcm}'}(12, 18) = 6 \times 36 = 216 = 12 \times 18</InlineMath> ✓
        </p>
      </Callout>

      {/* Perfect Numbers */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Perfect Numbers</h3>

      <p className="text-dark-200 mb-6">
        A natural number <InlineMath>n</InlineMath> is called <strong>perfect</strong>{' '}
        if it equals the sum of its proper divisors (all divisors except itself).
        The Greeks thought of proper divisors as the "parts" of a number, so a
        perfect number is the "sum of its parts."
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="6 is perfect" />
          <p className="text-sm text-dark-300">
            Divisors: 1, 2, 3, 6
          </p>
          <p className="text-sm text-emerald-400 mt-2">
            <InlineMath>1 + 2 + 3 = 6</InlineMath> ✓
          </p>
        </Card>
        <Card>
          <CardHeader title="28 is perfect" />
          <p className="text-sm text-dark-300">
            Divisors: 1, 2, 4, 7, 14, 28
          </p>
          <p className="text-sm text-emerald-400 mt-2">
            <InlineMath>1 + 2 + 4 + 7 + 14 = 28</InlineMath> ✓
          </p>
        </Card>
      </CardGrid>

      {/* Euclid's Theorem on Perfect Numbers */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Theorem on Perfect Numbers</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Theorem (Euclid)</h4>
        <p className="text-dark-200">
          If <InlineMath>p = 2^n - 1</InlineMath> is prime (a Mersenne prime), then{' '}
          <InlineMath>2^{'{n-1}'} p</InlineMath> is perfect.
        </p>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Examples</h4>
        <ul className="text-dark-200 space-y-2 text-sm">
          <li>
            <InlineMath>n = 2</InlineMath>: <InlineMath>p = 2^2 - 1 = 3</InlineMath> (prime),
            so <InlineMath>2^1 \times 3 = 6</InlineMath> is perfect
          </li>
          <li>
            <InlineMath>n = 3</InlineMath>: <InlineMath>p = 2^3 - 1 = 7</InlineMath> (prime),
            so <InlineMath>2^2 \times 7 = 28</InlineMath> is perfect
          </li>
          <li>
            <InlineMath>n = 5</InlineMath>: <InlineMath>p = 2^5 - 1 = 31</InlineMath> (prime),
            so <InlineMath>2^4 \times 31 = 496</InlineMath> is perfect
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          Euler proved the converse: every <em>even</em> perfect number has the form{' '}
          <InlineMath>2^{'{n-1}'}(2^n - 1)</InlineMath> where <InlineMath>2^n - 1</InlineMath>{' '}
          is prime. Whether any <strong>odd perfect numbers</strong> exist remains an
          open problem!
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Prime factorization describes <strong>all divisors</strong>: vary each
              exponent from 0 to its value in <InlineMath>n</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Number of divisors:</strong>{' '}
              <InlineMath>\tau(n) = (e_1+1)(e_2+1)\cdots(e_k+1)</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <InlineMath>\gcd</InlineMath> uses <strong>min</strong> of exponents;{' '}
              <InlineMath>\text{'{lcm}'}</InlineMath> uses <strong>max</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <InlineMath>\gcd(m,n) \times \text{'{lcm}'}(m,n) = mn</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              A <strong>perfect number</strong> equals the sum of its proper divisors.
              Euclid: <InlineMath>2^{'{n-1}'}(2^n-1)</InlineMath> is perfect when{' '}
              <InlineMath>2^n-1</InlineMath> is prime.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={6} questions={section06Questions} />
    </LessonLayout>
  );
}
