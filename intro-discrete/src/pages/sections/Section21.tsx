import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      {/* Introduction */}
      <p>
        Polynomials are fundamental objects in algebra, appearing throughout mathematics and its
        applications. Many of the properties we studied for integers—division, GCD, factorization—
        have direct analogues for polynomials. This chapter develops the theory of polynomials,
        culminating in applications to error-correcting codes.
      </p>

      <h2>Polynomial Rings</h2>

      <Definition title="Polynomial" className="my-6">
        <p>
          A <strong>polynomial</strong> over a ring <InlineMath>R</InlineMath> in variable{' '}
          <InlineMath>x</InlineMath> is an expression of the form:
        </p>
        <MathBlock>{`f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>a_i \in R</InlineMath> are called the <strong>coefficients</strong>.
        </p>
      </Definition>

      <Definition title="Polynomial Ring" className="my-6">
        <p>
          The set of all polynomials over <InlineMath>R</InlineMath> is denoted{' '}
          <InlineMath>R[x]</InlineMath> and forms a ring under:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Addition:</strong> Add corresponding coefficients
          </li>
          <li>
            <strong>Multiplication:</strong> Distribute and collect like terms
          </li>
        </ul>
        <p className="mt-2">
          The identity is the constant polynomial 1. The zero polynomial is 0.
        </p>
      </Definition>

      <Example title="Polynomial Arithmetic in Z[x]" className="my-6">
        <p>
          Let <InlineMath>f(x) = x^3 + 2x + 1</InlineMath> and <InlineMath>g(x) = x^2 - x + 3</InlineMath>.
        </p>
        <p className="mt-3"><strong>Addition:</strong></p>
        <MathBlock>{`f(x) + g(x) = x^3 + x^2 + x + 4`}</MathBlock>
        <p className="mt-3"><strong>Multiplication:</strong></p>
        <MathBlock>{`\\begin{aligned}
f(x) \\cdot g(x) &= (x^3 + 2x + 1)(x^2 - x + 3) \\\\
&= x^5 - x^4 + 3x^3 + 2x^3 - 2x^2 + 6x + x^2 - x + 3 \\\\
&= x^5 - x^4 + 5x^3 - x^2 + 5x + 3
\\end{aligned}`}</MathBlock>
      </Example>

      <Example title="Polynomials over Z_2" className="my-6">
        <p>
          In <InlineMath>\mathbb{'{Z}'}_2[x]</InlineMath>, coefficients are in <InlineMath>\{'{0, 1}'}\</InlineMath>:
        </p>
        <MathBlock>{`(x^2 + x + 1) + (x^2 + 1) = 2x^2 + x + 2 = x`}</MathBlock>
        <p className="mt-2">(Since <InlineMath>2 \equiv 0 \mod 2</InlineMath>)</p>
        <MathBlock>{`(x + 1)^2 = x^2 + 2x + 1 = x^2 + 1`}</MathBlock>
      </Example>

      <h2>Degree</h2>

      <Definition title="Degree of a Polynomial" className="my-6">
        <p>
          The <strong>degree</strong> of a non-zero polynomial{' '}
          <InlineMath>f(x) = a_n x^n + \cdots + a_0</InlineMath> with <InlineMath>a_n \neq 0</InlineMath>{' '}
          is <InlineMath>n</InlineMath>, written <InlineMath>\deg(f) = n</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>a_n</InlineMath> is the <strong>leading coefficient</strong>
          </li>
          <li>
            A polynomial is <strong>monic</strong> if its leading coefficient is 1
          </li>
          <li>
            The zero polynomial has no degree (or degree <InlineMath>-\infty</InlineMath> by convention)
          </li>
        </ul>
      </Definition>

      <Theorem title="Degree of Products and Sums" className="my-6">
        <p>
          For non-zero polynomials <InlineMath>f, g</InlineMath> over an integral domain:
        </p>
        <MathBlock>{`\\deg(fg) = \\deg(f) + \\deg(g)`}</MathBlock>
        <MathBlock>{`\\deg(f + g) \\leq \\max(\\deg(f), \\deg(g))`}</MathBlock>
      </Theorem>

      <Example title="Degree Calculations" className="my-6">
        <ul className="space-y-2">
          <li>
            <InlineMath>\deg(x^3 + 1) = 3</InlineMath>, <InlineMath>\deg(x^2 - x) = 2</InlineMath>
          </li>
          <li>
            <InlineMath>\deg((x^3 + 1)(x^2 - x)) = 3 + 2 = 5</InlineMath>
          </li>
          <li>
            <InlineMath>\deg(x^2 + (-x^2) + 1) = \deg(1) = 0</InlineMath> (cancellation can lower degree)
          </li>
        </ul>
      </Example>

      <h2>Polynomial Rings as Integral Domains</h2>

      <Theorem title="Polynomial Ring Properties" className="my-6">
        <p>
          If <InlineMath>R</InlineMath> is an integral domain, then so is <InlineMath>R[x]</InlineMath>.
        </p>
        <p className="mt-2">
          In particular, <InlineMath>\mathbb{'{Z}'}[x]</InlineMath>,{' '}
          <InlineMath>\mathbb{'{Q}'}[x]</InlineMath>, <InlineMath>\mathbb{'{R}'}[x]</InlineMath>, and{' '}
          <InlineMath>\mathbb{'{Z}'}_p[x]</InlineMath> (p prime) are integral domains.
        </p>
      </Theorem>

      <Theorem title="Units in Polynomial Rings" className="my-6">
        <p>
          The units (invertible elements) in <InlineMath>R[x]</InlineMath> are exactly the units of{' '}
          <InlineMath>R</InlineMath>.
        </p>
        <p className="mt-2">
          For example, in <InlineMath>\mathbb{'{Z}'}[x]</InlineMath>, only <InlineMath>\pm 1</InlineMath>{' '}
          are invertible. In <InlineMath>\mathbb{'{Z}'}_p[x]</InlineMath>, the non-zero constants are
          invertible.
        </p>
      </Theorem>

      <h2>Roots of Polynomials</h2>

      <Definition title="Root" className="my-6">
        <p>
          An element <InlineMath>r \in R</InlineMath> is a <strong>root</strong> (or{' '}
          <strong>zero</strong>) of <InlineMath>f(x) \in R[x]</InlineMath> if{' '}
          <InlineMath>f(r) = 0</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Factor Theorem" className="my-6">
        <p>
          <InlineMath>r</InlineMath> is a root of <InlineMath>f(x)</InlineMath> if and only if{' '}
          <InlineMath>(x - r)</InlineMath> divides <InlineMath>f(x)</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Number of Roots" className="my-6">
        <p>
          A polynomial of degree <InlineMath>n</InlineMath> over an integral domain has at most{' '}
          <InlineMath>n</InlineMath> roots.
        </p>
      </Theorem>

      <Example title="Roots over Different Rings" className="my-6">
        <p>
          Consider <InlineMath>f(x) = x^2 - 1</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Over <InlineMath>\mathbb{'{Z}'}</InlineMath>: roots are <InlineMath>\pm 1</InlineMath>
          </li>
          <li>
            Over <InlineMath>\mathbb{'{Z}'}_8</InlineMath>: roots are{' '}
            <InlineMath>1, 3, 5, 7</InlineMath> (four roots!)
          </li>
        </ul>
        <p className="mt-2 text-dark-300">
          The second case shows why we need an integral domain—<InlineMath>\mathbb{'{Z}'}_8</InlineMath>{' '}
          has zero divisors.
        </p>
      </Example>

      <h2>Polynomials over Fields</h2>

      <p>
        When the coefficient ring is a field, polynomial rings have especially nice properties,
        similar to the integers.
      </p>

      <Theorem title="F[x] is a Principal Ideal Domain" className="my-6">
        <p>
          If <InlineMath>F</InlineMath> is a field, then <InlineMath>F[x]</InlineMath> has a division
          algorithm, GCD, and unique factorization—just like <InlineMath>\mathbb{'{Z}'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Comparing Z and F[x]" className="my-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-2 px-2">Property</th>
                <th className="text-left py-2 px-2"><InlineMath>\mathbb{'{Z}'}</InlineMath></th>
                <th className="text-left py-2 px-2"><InlineMath>F[x]</InlineMath></th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">Size measure</td>
                <td>Absolute value</td>
                <td>Degree</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">Division algorithm</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">GCD (Euclidean)</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">Unique factorization</td>
                <td>Into primes</td>
                <td>Into irreducibles</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Units</td>
                <td><InlineMath>\pm 1</InlineMath></td>
                <td>Non-zero constants</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              <InlineMath>R[x]</InlineMath> is the <strong>polynomial ring</strong> over{' '}
              <InlineMath>R</InlineMath>—polynomials with coefficients in <InlineMath>R</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <strong>Degree:</strong> <InlineMath>\deg(fg) = \deg(f) + \deg(g)</InlineMath>.
              Degree of sum <InlineMath>\leq \max(\deg f, \deg g)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              If <InlineMath>R</InlineMath> is an <strong>integral domain</strong>, so is{' '}
              <InlineMath>R[x]</InlineMath>. A degree-<InlineMath>n</InlineMath> polynomial has at
              most <InlineMath>n</InlineMath> roots.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Factor theorem:</strong> <InlineMath>r</InlineMath> is a root iff{' '}
              <InlineMath>(x - r) \mid f(x)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Units</strong> in <InlineMath>R[x]</InlineMath> are the units of{' '}
              <InlineMath>R</InlineMath> (constant polynomials).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              <InlineMath>F[x]</InlineMath> for a field <InlineMath>F</InlineMath> behaves like{' '}
              <InlineMath>\mathbb{'{Z}'}</InlineMath>: division algorithm, GCD, unique factorization.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
