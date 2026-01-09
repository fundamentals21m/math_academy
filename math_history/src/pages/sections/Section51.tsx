import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <h2>Symmetric Functions</h2>

      <p>
        The coefficients of a polynomial contain hidden information about
        its roots. The theory of symmetric functions reveals this connection,
        showing how the coefficients are symmetric combinations of the roots.
        This elegant theory, developed by Newton, Girard, and later Galois,
        is fundamental to understanding polynomial equations.
      </p>

      <Callout type="info">
        <strong>Key Insight:</strong> While individual roots may be complicated,
        symmetric combinations of them (like their sum or product) are always
        expressible in terms of the polynomial's coefficients.
      </Callout>

      <h3>Vieta's Formulas</h3>

      <p>
        François Viète (Vieta) discovered the fundamental relationships
        between roots and coefficients:
      </p>

      <Theorem title="Vieta's Formulas">
        <p>
          If <InlineMath>r_1, r_2, \ldots, r_n</InlineMath> are the roots of:
        </p>
        <MathBlock>
          {`x^n + a_{n-1}x^{n-1} + a_{n-2}x^{n-2} + \\cdots + a_1 x + a_0 = 0`}
        </MathBlock>
        <p className="mt-2">then:</p>
        <MathBlock>
          {`r_1 + r_2 + \\cdots + r_n = -a_{n-1}`}
        </MathBlock>
        <MathBlock>
          {`r_1 r_2 + r_1 r_3 + \\cdots + r_{n-1}r_n = a_{n-2}`}
        </MathBlock>
        <MathBlock>
          {`r_1 r_2 r_3 + \\cdots = -a_{n-3}`}
        </MathBlock>
        <MathBlock>
          {`\\vdots`}
        </MathBlock>
        <MathBlock>
          {`r_1 r_2 \\cdots r_n = (-1)^n a_0`}
        </MathBlock>
      </Theorem>

      <Example title="The Quadratic Case">
        <p>
          For <InlineMath>{`x^2 + bx + c = (x - r_1)(x - r_2)`}</InlineMath>:
        </p>
        <MathBlock>
          {`r_1 + r_2 = -b, \\quad r_1 r_2 = c`}
        </MathBlock>
        <p className="mt-2">
          This is why the quadratic formula gives{' '}
          <InlineMath>{`\\frac{-b \\pm \\sqrt{b^2 - 4c}}{2}`}</InlineMath>—the
          sum is <InlineMath>-b</InlineMath> and the product is{' '}
          <InlineMath>c</InlineMath>.
        </p>
      </Example>

      <h3>Elementary Symmetric Polynomials</h3>

      <p>
        The expressions appearing in Vieta's formulas have a special name:
      </p>

      <Definition title="Elementary Symmetric Polynomials">
        <p>
          In variables <InlineMath>x_1, \ldots, x_n</InlineMath>, the elementary
          symmetric polynomials are:
        </p>
        <MathBlock>
          {`e_1 = \\sum_{i} x_i = x_1 + x_2 + \\cdots + x_n`}
        </MathBlock>
        <MathBlock>
          {`e_2 = \\sum_{i < j} x_i x_j = x_1 x_2 + x_1 x_3 + \\cdots`}
        </MathBlock>
        <MathBlock>
          {`e_k = \\sum_{i_1 < i_2 < \\cdots < i_k} x_{i_1} x_{i_2} \\cdots x_{i_k}`}
        </MathBlock>
        <MathBlock>
          {`e_n = x_1 x_2 \\cdots x_n`}
        </MathBlock>
      </Definition>

      <h3>Symmetric Functions</h3>

      <p>
        A polynomial is <strong>symmetric</strong> if it's unchanged when
        any two variables are swapped:
      </p>

      <Definition title="Symmetric Polynomial">
        <p>
          A polynomial <InlineMath>{`f(x_1, \\ldots, x_n)`}</InlineMath> is
          symmetric if for any permutation <InlineMath>\sigma</InlineMath>:
        </p>
        <MathBlock>
          {`f(x_{\\sigma(1)}, \\ldots, x_{\\sigma(n)}) = f(x_1, \\ldots, x_n)`}
        </MathBlock>
      </Definition>

      <Example title="Examples of Symmetric Polynomials">
        <p>For <InlineMath>n = 3</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`x_1 + x_2 + x_3`}</InlineMath> (symmetric)</li>
          <li><InlineMath>{`x_1^2 + x_2^2 + x_3^2`}</InlineMath> (symmetric)</li>
          <li><InlineMath>{`x_1 x_2 x_3`}</InlineMath> (symmetric)</li>
          <li><InlineMath>{`x_1^2 x_2 + x_1`}</InlineMath> (NOT symmetric)</li>
        </ul>
      </Example>

      <Theorem title="Fundamental Theorem on Symmetric Polynomials">
        <p>
          Every symmetric polynomial in <InlineMath>x_1, \ldots, x_n</InlineMath>{' '}
          can be expressed as a polynomial in the elementary symmetric
          polynomials <InlineMath>e_1, \ldots, e_n</InlineMath>.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Why This Matters:</strong> If you know only the polynomial's
        coefficients (not the individual roots), you can still compute any
        symmetric function of the roots. This is the basis for resolvent
        methods in solving equations.
      </Callout>

      <h3>Newton's Identities</h3>

      <p>
        Newton discovered how to express power sums in terms of elementary
        symmetric polynomials:
      </p>

      <Definition title="Power Sums">
        <MathBlock>
          {`p_k = x_1^k + x_2^k + \\cdots + x_n^k`}
        </MathBlock>
      </Definition>

      <Theorem title="Newton's Identities">
        <p>The power sums and elementary symmetric polynomials are related by:</p>
        <MathBlock>
          {`p_1 = e_1`}
        </MathBlock>
        <MathBlock>
          {`p_2 = e_1 p_1 - 2e_2`}
        </MathBlock>
        <MathBlock>
          {`p_3 = e_1 p_2 - e_2 p_1 + 3e_3`}
        </MathBlock>
        <p className="mt-2">
          In general: <InlineMath>{`p_k = e_1 p_{k-1} - e_2 p_{k-2} + \\cdots + (-1)^{k-1} k e_k`}</InlineMath>
        </p>
      </Theorem>

      <Example title="Computing Power Sums">
        <p>
          For a cubic <InlineMath>{`x^3 + bx^2 + cx + d = 0`}</InlineMath> with
          roots <InlineMath>r, s, t</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`r + s + t = -b`}</InlineMath></li>
          <li><InlineMath>{`r^2 + s^2 + t^2 = b^2 - 2c`}</InlineMath></li>
          <li><InlineMath>{`r^3 + s^3 + t^3 = -b^3 + 3bc - 3d`}</InlineMath></li>
        </ul>
        <p className="mt-2 text-dark-400">
          We found sum of cubes without knowing individual roots!
        </p>
      </Example>

      <h3>The Discriminant</h3>

      <p>
        The discriminant is a symmetric function that detects repeated roots:
      </p>

      <Definition title="Discriminant">
        <MathBlock>
          {`\\Delta = \\prod_{i < j} (r_i - r_j)^2`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{`\\Delta = 0`}</InlineMath> if and only if the polynomial
          has a repeated root.
        </p>
      </Definition>

      <Example title="Quadratic Discriminant">
        <p>For <InlineMath>{`ax^2 + bx + c`}</InlineMath>:</p>
        <MathBlock>
          {`\\Delta = (r_1 - r_2)^2 = (r_1 + r_2)^2 - 4r_1 r_2 = b^2 - 4ac`}
        </MathBlock>
        <p className="mt-2">
          The familiar discriminant from the quadratic formula!
        </p>
      </Example>

      <h3>Applications to Solving Equations</h3>

      <p>
        Symmetric functions are key to the classical methods for solving
        cubics and quartics:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Resolvents:</strong> Equations whose roots are symmetric
          functions of the original roots, often of lower degree.
        </li>
        <li>
          <strong>Tschirnhaus transformations:</strong> Substitutions that
          eliminate certain coefficients.
        </li>
        <li>
          <strong>Lagrange's approach:</strong> Studying which symmetric
          functions lead to solving the equation.
        </li>
      </ul>

      <Callout type="info">
        <strong>Connection to Galois Theory:</strong> The theory of symmetric
        functions directly leads to Galois theory. A polynomial is solvable
        by radicals precisely when certain symmetric functions can be computed
        through a sequence of root extractions.
      </Callout>

      <SectionQuiz sectionId={51} questions={quizMap[51] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
