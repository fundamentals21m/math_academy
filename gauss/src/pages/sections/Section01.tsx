import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout, MathBlock, InlineMath } from '@/components/common';
import { EuclideanAlgorithmVisualizer } from '@/components/visualizations';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>Congruences of the First Degree</h2>

      <p>
        In the second section of the Disquisitiones, Gauss addresses the fundamental
        problem of solving <strong>linear congruences</strong>—equations of the form{' '}
        <InlineMath>{`ax \\equiv b \\pmod{m}`}</InlineMath>. This seemingly simple question
        leads to deep insights about divisibility and the structure of integers.
      </p>

      <h2>Preliminary Theorems on Prime Numbers</h2>

      <p>
        Before tackling linear congruences, Gauss establishes essential properties
        of prime numbers and divisibility:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Fundamental Theorem of Arithmetic</h3>
        <p className="text-dark-200">
          Every positive integer greater than 1 can be expressed uniquely as a product
          of prime numbers (up to the order of the factors).
        </p>
        <MathBlock>{`n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}`}</MathBlock>
      </div>

      <p>
        Gauss also proves the crucial property that if a prime <InlineMath>{`p`}</InlineMath>{' '}
        divides a product <InlineMath>{`ab`}</InlineMath>, then <InlineMath>{`p`}</InlineMath> must
        divide at least one of <InlineMath>{`a`}</InlineMath> or <InlineMath>{`b`}</InlineMath>.
      </p>

      <h2>The Greatest Common Divisor</h2>

      <p>
        Central to solving linear congruences is the <strong>greatest common divisor</strong>{' '}
        (GCD). For integers <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath>,
        the GCD—written <InlineMath>{`\gcd(a, b)`}</InlineMath>—is the largest positive integer
        that divides both.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">The Euclidean Algorithm</h3>
        <p className="text-dark-200 mb-4">
          To find <InlineMath>{`\gcd(a, b)`}</InlineMath>, repeatedly apply the division algorithm:
        </p>
        <MathBlock>{`\\begin{aligned}
a &= bq_1 + r_1 \\quad (0 \\le r_1 < b) \\\\
b &= r_1 q_2 + r_2 \\quad (0 \\le r_2 < r_1) \\\\
r_1 &= r_2 q_3 + r_3 \\quad (0 \\le r_3 < r_2) \\\\
&\\vdots \\\\
r_{n-1} &= r_n q_{n+1} + 0
\\end{aligned}`}</MathBlock>
        <p className="text-dark-300 mt-4">
          The last non-zero remainder <InlineMath>{`r_n`}</InlineMath> is the GCD.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Example: gcd(48, 18)</h3>
          <p className="font-mono text-dark-300 text-sm space-y-1">
            48 = 18 × 2 + 12<br />
            18 = 12 × 1 + 6<br />
            12 = 6 × 2 + 0
          </p>
          <p className="text-emerald-400 mt-2">gcd(48, 18) = 6</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Example: gcd(35, 12)</h3>
          <p className="font-mono text-dark-300 text-sm space-y-1">
            35 = 12 × 2 + 11<br />
            12 = 11 × 1 + 1<br />
            11 = 1 × 11 + 0
          </p>
          <p className="text-emerald-400 mt-2">gcd(35, 12) = 1</p>
        </div>
      </div>

      <h2>Try It: Euclidean Algorithm Visualizer</h2>

      <p>
        Watch the Euclidean algorithm find the GCD step by step. Enter two positive
        integers and see how repeated division reveals their greatest common divisor:
      </p>

      <EuclideanAlgorithmVisualizer className="my-6" />

      <h2>Solving Linear Congruences</h2>

      <p>
        Now we can address the main question: When does{' '}
        <InlineMath>{`ax \\equiv b \\pmod{m}`}</InlineMath> have a solution, and how do we find it?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Theorem: Solvability of Linear Congruences</h3>
        <p className="text-dark-200 mb-4">
          The congruence <InlineMath>{`ax \\equiv b \\pmod{m}`}</InlineMath> has a solution
          if and only if <InlineMath>{`\gcd(a, m)`}</InlineMath> divides <InlineMath>{`b`}</InlineMath>.
        </p>
        <p className="text-dark-300">
          When solutions exist, there are exactly <InlineMath>{`d = \gcd(a, m)`}</InlineMath>{' '}
          incongruent solutions modulo <InlineMath>{`m`}</InlineMath>.
        </p>
      </div>

      <h3>Special Case: When gcd(a, m) = 1</h3>

      <p>
        When <InlineMath>{`a`}</InlineMath> and <InlineMath>{`m`}</InlineMath> are <strong>coprime</strong>{' '}
        (their GCD is 1), the congruence <InlineMath>{`ax \\equiv b \\pmod{m}`}</InlineMath> has
        exactly one solution modulo <InlineMath>{`m`}</InlineMath>.
      </p>

      <p>
        In this case, there exists a <strong>modular inverse</strong> of{' '}
        <InlineMath>{`a`}</InlineMath>—an integer <InlineMath>{`a'`}</InlineMath> such that{' '}
        <InlineMath>{`aa' \\equiv 1 \\pmod{m}`}</InlineMath>. The solution is then{' '}
        <InlineMath>{`x \\equiv a'b \\pmod{m}`}</InlineMath>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Example: Solve 3x ≡ 7 (mod 11)</h3>
        <p className="text-dark-200 mb-2">
          Since gcd(3, 11) = 1, there is a unique solution.
        </p>
        <p className="text-dark-200 mb-2">
          Find the inverse of 3 mod 11: We need <InlineMath>{`3a' \\equiv 1 \\pmod{11}`}</InlineMath>.
        </p>
        <p className="text-dark-200 mb-2">
          Testing: <InlineMath>{`3 \\times 4 = 12 \\equiv 1 \\pmod{11}`}</InlineMath>. So <InlineMath>{`a' = 4`}</InlineMath>.
        </p>
        <p className="text-dark-200">
          Solution: <InlineMath>{`x \\equiv 4 \\times 7 = 28 \\equiv 6 \\pmod{11}`}</InlineMath>.
        </p>
        <p className="text-emerald-400 mt-2">
          Check: <InlineMath>{`3 \\times 6 = 18 = 11 + 7 \\equiv 7 \\pmod{11}`}</InlineMath> ✓
        </p>
      </div>

      <h2>The Chinese Remainder Theorem</h2>

      <p>
        One of the most powerful results in this section is what is now called the{' '}
        <strong>Chinese Remainder Theorem</strong>. Gauss presents it as a method for
        finding a number that satisfies several simultaneous congruences.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Chinese Remainder Theorem</h3>
        <p className="text-dark-200 mb-4">
          Let <InlineMath>{`m_1, m_2, \ldots, m_k`}</InlineMath> be pairwise coprime positive integers.
          Then for any integers <InlineMath>{`a_1, a_2, \ldots, a_k`}</InlineMath>, the system:
        </p>
        <MathBlock>{`\\begin{aligned}
x &\\equiv a_1 \\pmod{m_1} \\\\
x &\\equiv a_2 \\pmod{m_2} \\\\
&\\vdots \\\\
x &\\equiv a_k \\pmod{m_k}
\\end{aligned}`}</MathBlock>
        <p className="text-dark-300 mt-4">
          has a unique solution modulo <InlineMath>{`M = m_1 m_2 \cdots m_k`}</InlineMath>.
        </p>
      </div>

      <Callout type="info">
        <strong>Historical Note:</strong> This theorem was known to Chinese mathematicians
        as early as the 3rd century CE. Sun Tzu's <em>Mathematical Classic</em> contains
        the problem: "Find a number that leaves remainder 2 when divided by 3, remainder 3
        when divided by 5, and remainder 2 when divided by 7."
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Example: Sun Tzu's Problem</h3>
        <p className="text-dark-200 mb-4">Find <InlineMath>{`x`}</InlineMath> such that:</p>
        <MathBlock>{`x \\equiv 2 \\pmod{3}, \\quad x \\equiv 3 \\pmod{5}, \\quad x \\equiv 2 \\pmod{7}`}</MathBlock>
        <p className="text-dark-200 mt-4">
          Since gcd(3,5) = gcd(3,7) = gcd(5,7) = 1, the moduli are pairwise coprime.
        </p>
        <p className="text-dark-200 mt-2">
          The solution is unique modulo <InlineMath>{`3 \times 5 \times 7 = 105`}</InlineMath>.
        </p>
        <p className="text-emerald-400 mt-2">
          Answer: <InlineMath>{`x \\equiv 23 \\pmod{105}`}</InlineMath>
        </p>
        <p className="text-dark-400 text-sm mt-2">
          (Verify: 23 = 7×3 + 2, 23 = 4×5 + 3, 23 = 3×7 + 2 ✓)
        </p>
      </div>

      <h2>Systems of Linear Congruences</h2>

      <p>
        Gauss extends these ideas to systems of linear congruences with multiple unknowns:
      </p>

      <MathBlock>{`\\begin{aligned}
a_1 x + b_1 y &\\equiv c_1 \\pmod{m} \\\\
a_2 x + b_2 y &\\equiv c_2 \\pmod{m}
\\end{aligned}`}</MathBlock>

      <p>
        The techniques mirror those for linear systems over the real numbers, but with
        careful attention to when division (finding modular inverses) is possible.
      </p>

      <h2>Applications and Significance</h2>

      <p>
        Linear congruences appear throughout mathematics and its applications:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Calendar calculations:</strong> Determining days of the week, Easter dates</li>
        <li><strong>Cryptography:</strong> RSA encryption relies on modular arithmetic</li>
        <li><strong>Computer science:</strong> Hash functions, random number generators</li>
        <li><strong>Error correction:</strong> Reed-Solomon codes use polynomial congruences</li>
      </ul>

      <Callout type="success">
        <strong>Looking Ahead:</strong> With the foundation of linear congruences established,
        Gauss moves to a more challenging question in Section III: What can we say about
        the <em>powers</em> of numbers modulo <InlineMath>{`m`}</InlineMath>? This leads to
        primitive roots and Fermat's Little Theorem.
      </Callout>
    </LessonLayout>
  );
}
