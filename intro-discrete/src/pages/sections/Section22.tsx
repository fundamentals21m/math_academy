import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      {/* Introduction */}
      <p>
        The division algorithm for polynomials is analogous to the division algorithm for integers.
        It allows us to divide one polynomial by another, obtaining a quotient and remainder. This
        leads to polynomial GCDs and the Euclidean algorithm, paralleling our work in Chapter 1.
      </p>

      <h2>The Division Algorithm</h2>

      <Theorem
        title="Division Algorithm for Polynomials"
        className="my-6"
      >
        <p>
          Let <InlineMath>F</InlineMath> be a field and let <InlineMath>f(x), g(x) \in F[x]</InlineMath>{' '}
          with <InlineMath>g(x) \neq 0</InlineMath>. Then there exist unique polynomials{' '}
          <InlineMath>q(x)</InlineMath> (quotient) and <InlineMath>r(x)</InlineMath> (remainder) such that:
        </p>
        <MathBlock>{`f(x) = q(x) \\cdot g(x) + r(x)`}</MathBlock>
        <p className="mt-2">
          where either <InlineMath>r(x) = 0</InlineMath> or{' '}
          <InlineMath>\deg(r) {'<'} \deg(g)</InlineMath>.
        </p>
      </Theorem>

      <Example title="Polynomial Long Division" className="my-6">
        <p>
          Divide <InlineMath>f(x) = x^4 + 2x^3 - x + 3</InlineMath> by <InlineMath>g(x) = x^2 + 1</InlineMath>{' '}
          over <InlineMath>\mathbb{'{Q}'}</InlineMath>.
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 font-mono text-sm overflow-x-auto">
          <pre>{`        x² + 2x - 1
       ─────────────────
x²+1 │ x⁴ + 2x³ + 0x² - x + 3
      - (x⁴      + x²)
       ─────────────────
            2x³ - x² - x
          - (2x³      + 2x)
           ─────────────────
               - x² - 3x + 3
             - (-x²     - 1)
               ─────────────────
                   - 3x + 4`}</pre>
        </div>
        <p className="mt-3">
          Result: <InlineMath>q(x) = x^2 + 2x - 1</InlineMath>, <InlineMath>r(x) = -3x + 4</InlineMath>.
        </p>
        <p className="mt-2">
          Check: <InlineMath>(x^2 + 2x - 1)(x^2 + 1) + (-3x + 4) = x^4 + 2x^3 - x + 3</InlineMath> ✓
        </p>
      </Example>

      <Example title="Division over Z_2" className="my-6">
        <p>
          Divide <InlineMath>x^4 + x + 1</InlineMath> by <InlineMath>x^2 + x + 1</InlineMath> in{' '}
          <InlineMath>\mathbb{'{Z}'}_2[x]</InlineMath>.
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 font-mono text-sm">
          <pre>{`          x² + x
         ──────────────
x²+x+1 │ x⁴ + 0x³ + 0x² + x + 1
        - (x⁴ + x³ + x²)
         ──────────────
              x³ + x² + x
            - (x³ + x² + x)
             ──────────────
                        1`}</pre>
        </div>
        <p className="mt-3">
          Result: <InlineMath>q(x) = x^2 + x</InlineMath>, <InlineMath>r(x) = 1</InlineMath>.
        </p>
        <p className="mt-2 text-dark-300">
          Remember: In <InlineMath>\mathbb{'{Z}'}_2</InlineMath>, <InlineMath>1 + 1 = 0</InlineMath>{' '}
          and <InlineMath>-1 = 1</InlineMath>.
        </p>
      </Example>

      <h2>Greatest Common Divisor</h2>

      <Definition title="Divisibility and GCD" className="my-6">
        <p>
          For <InlineMath>f(x), g(x) \in F[x]</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <InlineMath>g(x)</InlineMath> <strong>divides</strong> <InlineMath>f(x)</InlineMath>,
            written <InlineMath>g \mid f</InlineMath>, if <InlineMath>f = qg</InlineMath> for some{' '}
            <InlineMath>q \in F[x]</InlineMath>.
          </li>
          <li>
            The <strong>GCD</strong> of <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath>{' '}
            is the monic polynomial <InlineMath>d</InlineMath> of highest degree dividing both.
          </li>
        </ul>
        <p className="mt-2">
          We normalize to monic to make the GCD unique.
        </p>
      </Definition>

      <Theorem title="Euclidean Algorithm for Polynomials" className="my-6">
        <p>
          The GCD can be computed by repeated division:
        </p>
        <MathBlock>{`\\begin{aligned}
f &= q_1 g + r_1 \\\\
g &= q_2 r_1 + r_2 \\\\
r_1 &= q_3 r_2 + r_3 \\\\
&\\vdots \\\\
r_{n-2} &= q_n r_{n-1} + r_n \\\\
r_{n-1} &= q_{n+1} r_n + 0
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          The last non-zero remainder <InlineMath>r_n</InlineMath> (made monic) is{' '}
          <InlineMath>\gcd(f, g)</InlineMath>.
        </p>
      </Theorem>

      <Example title="Euclidean Algorithm Example" className="my-6">
        <p>
          Find <InlineMath>\gcd(x^4 - 1, x^3 - 1)</InlineMath> in <InlineMath>\mathbb{'{Q}'}[x]</InlineMath>.
        </p>
        <MathBlock>{`\\begin{aligned}
x^4 - 1 &= (x)(x^3 - 1) + (x - 1) \\\\
x^3 - 1 &= (x^2 + x + 1)(x - 1) + 0
\\end{aligned}`}</MathBlock>
        <p className="mt-3">
          So <InlineMath>\gcd(x^4 - 1, x^3 - 1) = x - 1</InlineMath>.
        </p>
      </Example>

      <Theorem title="Bézout's Identity for Polynomials" className="my-6">
        <p>
          If <InlineMath>d(x) = \gcd(f(x), g(x))</InlineMath>, then there exist polynomials{' '}
          <InlineMath>s(x), t(x)</InlineMath> such that:
        </p>
        <MathBlock>{`d(x) = s(x)f(x) + t(x)g(x)`}</MathBlock>
      </Theorem>

      <Example title="Extended Euclidean Algorithm" className="my-6">
        <p>
          From the previous example, working backwards:
        </p>
        <MathBlock>{`x - 1 = (x^4 - 1) - x(x^3 - 1) = 1 \\cdot (x^4 - 1) + (-x)(x^3 - 1)`}</MathBlock>
        <p className="mt-2">
          So <InlineMath>s(x) = 1</InlineMath> and <InlineMath>t(x) = -x</InlineMath>.
        </p>
      </Example>

      <h2>Remainder Theorem</h2>

      <Theorem
        title="Remainder Theorem"
        className="my-6"
        proof={
          <>
            <p>
              By the division algorithm, <InlineMath>f(x) = q(x)(x - a) + r</InlineMath> where{' '}
              <InlineMath>r</InlineMath> is a constant (degree less than 1).
            </p>
            <p className="mt-2">
              Substituting <InlineMath>x = a</InlineMath>:{' '}
              <InlineMath>f(a) = q(a)(a - a) + r = r</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          When <InlineMath>f(x)</InlineMath> is divided by <InlineMath>(x - a)</InlineMath>, the
          remainder is <InlineMath>f(a)</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Factor Theorem (Revisited)" className="my-6">
        <p>
          <InlineMath>(x - a)</InlineMath> divides <InlineMath>f(x)</InlineMath> if and only if{' '}
          <InlineMath>f(a) = 0</InlineMath>.
        </p>
      </Theorem>

      <Example title="Using the Remainder Theorem" className="my-6">
        <p>
          Find the remainder when <InlineMath>f(x) = x^{'{100}'} - 2x^{'{51}'} + 1</InlineMath> is
          divided by <InlineMath>(x - 1)</InlineMath>.
        </p>
        <p className="mt-3">
          By the remainder theorem: <InlineMath>f(1) = 1 - 2 + 1 = 0</InlineMath>.
        </p>
        <p className="mt-2">
          So <InlineMath>(x - 1)</InlineMath> divides <InlineMath>f(x)</InlineMath> exactly!
        </p>
      </Example>

      <h2>Synthetic Division</h2>

      <p>
        For division by <InlineMath>(x - a)</InlineMath>, we can use <strong>synthetic division</strong>,
        a streamlined version of long division.
      </p>

      <Example title="Synthetic Division" className="my-6">
        <p>
          Divide <InlineMath>2x^3 - 5x^2 + 3x - 1</InlineMath> by <InlineMath>(x - 2)</InlineMath>:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 font-mono text-sm">
          <pre>{`2  │  2   -5    3   -1
   │       4   -2    2
   └──────────────────
      2   -1    1    1

Quotient: 2x² - x + 1
Remainder: 1`}</pre>
        </div>
        <p className="mt-3">
          Verify: <InlineMath>(2x^2 - x + 1)(x - 2) + 1 = 2x^3 - 5x^2 + 3x - 1</InlineMath> ✓
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              <strong>Division algorithm:</strong> <InlineMath>f = qg + r</InlineMath> with{' '}
              <InlineMath>\deg r {'<'} \deg g</InlineMath> or <InlineMath>r = 0</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <strong>Euclidean algorithm:</strong> Repeated division computes GCD. Works just like
              for integers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Bézout:</strong> <InlineMath>\gcd(f, g) = sf + tg</InlineMath> for some
              polynomials <InlineMath>s, t</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Remainder theorem:</strong> Remainder of <InlineMath>f(x) \div (x - a)</InlineMath>{' '}
              is <InlineMath>f(a)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Factor theorem:</strong> <InlineMath>(x - a) \mid f(x)</InlineMath> iff{' '}
              <InlineMath>f(a) = 0</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              GCD is normalized to be <strong>monic</strong> (leading coefficient 1).
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
