import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout, MathBlock, InlineMath } from '@/components/common';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Various Applications</h2>

      <p>
        Section VI of the Disquisitiones applies the theory developed in earlier sections
        to solve concrete number-theoretic problems. Gauss demonstrates the power of
        his methods by tackling <strong>Diophantine equations</strong>—polynomial equations
        where we seek integer solutions.
      </p>

      <h2>Diophantine Equations</h2>

      <p>
        Named after the ancient Greek mathematician Diophantus of Alexandria, Diophantine
        equations ask: Given a polynomial equation, does it have solutions in integers?
        If so, how many, and what are they?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Classic Examples</h3>
        <div className="space-y-4">
          <div>
            <MathBlock>{`x^2 + y^2 = n`}</MathBlock>
            <p className="text-dark-300 mt-2">
              When does an integer equal a sum of two squares?
            </p>
          </div>
          <div>
            <MathBlock>{`x^2 - Dy^2 = 1`}</MathBlock>
            <p className="text-dark-300 mt-2">
              Pell's equation: infinitely many solutions when <InlineMath>D</InlineMath> is
              not a perfect square.
            </p>
          </div>
          <div>
            <MathBlock>{`x^2 + y^2 + z^2 + w^2 = n`}</MathBlock>
            <p className="text-dark-300 mt-2">
              Lagrange's four squares theorem: every positive integer is a sum of four squares.
            </p>
          </div>
        </div>
      </div>

      <h2>Application of Quadratic Forms</h2>

      <p>
        The theory of binary quadratic forms from Section V provides powerful tools for
        these problems. For example:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Solving x² + y² = p</h3>
        <p className="text-dark-200 mb-4">
          For a prime <InlineMath>p</InlineMath>, the equation <InlineMath>x^2 + y^2 = p</InlineMath>{' '}
          has a solution if and only if <InlineMath>p = 2</InlineMath> or{' '}
          <InlineMath>p \equiv 1 \pmod 4</InlineMath>.
        </p>
        <p className="text-dark-300">
          The solution is essentially unique (up to signs and interchanging <InlineMath>x</InlineMath>{' '}
          and <InlineMath>y</InlineMath>).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">p ≡ 1 (mod 4)</h3>
          <ul className="text-dark-300 space-y-1">
            <li>5 = 1² + 2²</li>
            <li>13 = 2² + 3²</li>
            <li>17 = 1² + 4²</li>
            <li>29 = 2² + 5²</li>
            <li>37 = 1² + 6²</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">p ≡ 3 (mod 4)</h3>
          <p className="text-dark-300">
            3, 7, 11, 19, 23, 31, ...
          </p>
          <p className="text-dark-400 text-sm mt-2">
            These primes cannot be written as sums of two squares.
          </p>
        </div>
      </div>

      <h2>Pell's Equation</h2>

      <p>
        Gauss addresses the equation <InlineMath>x^2 - Dy^2 = \pm 1</InlineMath>, which
        has a rich history and beautiful theory:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Pell's Equation x² - Dy² = 1</h3>
        <p className="text-dark-200 mb-4">
          When <InlineMath>D</InlineMath> is a positive non-square integer, this equation
          always has infinitely many solutions. The solutions can be generated from a
          "fundamental solution" using the recurrence:
        </p>
        <MathBlock>{`x_{n+1} + y_{n+1}\\sqrt{D} = (x_1 + y_1\\sqrt{D})^n`}</MathBlock>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Example: x² - 2y² = 1</h3>
        <p className="text-dark-300 mb-2">Fundamental solution: x = 3, y = 2 (since 9 - 8 = 1)</p>
        <p className="text-dark-300 mb-2">Subsequent solutions from (3 + 2√2)ⁿ:</p>
        <ul className="font-mono text-dark-300 space-y-1 mt-2">
          <li>n=1: (3, 2) → 9 - 8 = 1 ✓</li>
          <li>n=2: (17, 12) → 289 - 288 = 1 ✓</li>
          <li>n=3: (99, 70) → 9801 - 9800 = 1 ✓</li>
          <li>n=4: (577, 408) → ...</li>
        </ul>
      </div>

      <h2>Representation by Ternary Forms</h2>

      <p>
        Gauss extends his methods to <strong>ternary quadratic forms</strong>—expressions
        in three variables like <InlineMath>ax^2 + by^2 + cz^2</InlineMath>. A famous
        result concerns sums of three squares:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Three Squares Theorem</h3>
        <p className="text-dark-200 mb-4">
          A positive integer <InlineMath>n</InlineMath> can be written as a sum of three
          squares:
        </p>
        <MathBlock>{`n = x^2 + y^2 + z^2`}</MathBlock>
        <p className="text-dark-300 mt-4">
          if and only if <InlineMath>n</InlineMath> is <em>not</em> of the form{' '}
          <InlineMath>4^a(8b + 7)</InlineMath>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Sum of 3 Squares</h3>
          <ul className="text-dark-300 space-y-1">
            <li>6 = 1² + 1² + 2²</li>
            <li>11 = 1² + 1² + 3²</li>
            <li>14 = 1² + 2² + 3²</li>
            <li>21 = 1² + 2² + 4²</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Not Sum of 3 Squares</h3>
          <ul className="text-dark-300 space-y-1">
            <li>7 = 4⁰(8·0 + 7)</li>
            <li>15 = 4⁰(8·1 + 7)</li>
            <li>23 = 4⁰(8·2 + 7)</li>
            <li>28 = 4¹(8·0 + 7)</li>
          </ul>
        </div>
      </div>

      <h2>Algorithmic Methods</h2>

      <p>
        Throughout Section VI, Gauss emphasizes <em>constructive</em> methods. He doesn't
        just prove that solutions exist—he shows how to find them algorithmically. Key
        techniques include:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong>Descent methods:</strong> If a "large" solution exists, construct a
          "smaller" one until reaching a solution small enough to find directly.
        </li>
        <li>
          <strong>Continued fractions:</strong> For Pell's equation, the continued
          fraction expansion of <InlineMath>\sqrt{'{D}'}</InlineMath> yields the fundamental
          solution.
        </li>
        <li>
          <strong>Form reduction:</strong> Transform a form to its reduced representative
          to read off solutions.
        </li>
      </ul>

      <h2>Connections to Modern Mathematics</h2>

      <p>
        The problems in Section VI connect to vast areas of modern mathematics:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Algebraic Number Theory</h3>
          <p className="text-dark-300">
            Solutions to <InlineMath>x^2 - Dy^2 = 1</InlineMath> correspond to units
            in the ring <InlineMath>\mathbb{'{Z}'}[\sqrt{'{D}'}]</InlineMath>.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Elliptic Curves</h3>
          <p className="text-dark-300">
            Many Diophantine equations can be studied using the arithmetic of elliptic curves,
            leading to Fermat's Last Theorem.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Computational Number Theory</h3>
          <p className="text-dark-300">
            Modern cryptography uses the difficulty of certain Diophantine problems
            (like factoring) for security.
          </p>
        </div>
      </div>

      <Callout type="success">
        <strong>Looking Ahead:</strong> The final section of the Disquisitiones applies
        number theory to geometry: the theory of <strong>cyclotomy</strong>—dividing the
        circle into equal parts. Gauss's stunning result on constructing the regular
        17-gon awaits!
      </Callout>
    </LessonLayout>
  );
}
