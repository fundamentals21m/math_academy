import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2>Polynomial and Matrix Rings</h2>

      <p>
        Two of the most important constructions in ring theory are polynomial rings and matrix rings.
        These provide fundamental examples of rings that arise naturally throughout mathematics and
        its applications.
      </p>

      <h3>Polynomial Rings</h3>

      <Definition title="Polynomial Ring">
        <p>
          Let <InlineMath>R</InlineMath> be a commutative ring with unity. The <strong>polynomial ring</strong>
          <InlineMath>R[x]</InlineMath> consists of all formal expressions
        </p>
        <MathBlock>
          {'f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{'a_i \\in R'}</InlineMath> and <InlineMath>n</InlineMath> is a non-negative integer.
          Two polynomials are equal if and only if their corresponding coefficients are equal.
        </p>
      </Definition>

      <Definition title="Degree of a Polynomial">
        <p>
          The <strong>degree</strong> of a nonzero polynomial <InlineMath>f(x)</InlineMath>, denoted <InlineMath>{'\\deg(f)'}</InlineMath>,
          is the largest <InlineMath>n</InlineMath> such that <InlineMath>{'a_n \\neq 0'}</InlineMath>.
        </p>
        <p className="mt-2">
          The coefficient <InlineMath>{'a_n'}</InlineMath> is called the <strong>leading coefficient</strong>.
          A polynomial is <strong>monic</strong> if its leading coefficient is 1.
        </p>
        <p className="mt-2">
          By convention, the zero polynomial has degree <InlineMath>{'-\\infty'}</InlineMath> or is undefined.
        </p>
      </Definition>

      <Example title="Operations in Z[x]">
        <p>
          In <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath>:
        </p>
        <MathBlock>
          {'(2x^2 + 3x - 1) + (x^2 - 4x + 5) = 3x^2 - x + 4'}
        </MathBlock>
        <MathBlock>
          {'(x + 2)(x^2 - x + 1) = x^3 - x^2 + x + 2x^2 - 2x + 2 = x^3 + x^2 - x + 2'}
        </MathBlock>
      </Example>

      <Theorem title="Degree Formula"
        proof={
          <>
            <p>
              If <InlineMath>{'f = a_m x^m + \\cdots'}</InlineMath> and <InlineMath>{'g = b_n x^n + \\cdots'}</InlineMath>
              with <InlineMath>{'a_m, b_n \\neq 0'}</InlineMath>, then the leading term of <InlineMath>fg</InlineMath>
              is <InlineMath>{'a_m b_n x^{m+n}'}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>R</InlineMath> is an integral domain, then <InlineMath>{'a_m b_n \\neq 0'}</InlineMath>,
              so <InlineMath>{'\\deg(fg) = m + n'}</InlineMath>. If <InlineMath>R</InlineMath> has zero divisors,
              <InlineMath>{'a_m b_n'}</InlineMath> could be zero, making the degree strictly less.
            </p>
          </>
        }
      >
        <p>
          For nonzero polynomials <InlineMath>f, g</InlineMath> in <InlineMath>R[x]</InlineMath>:
        </p>
        <MathBlock>
          {'\\deg(fg) \\leq \\deg(f) + \\deg(g)'}
        </MathBlock>
        <p className="mt-2">
          with equality if <InlineMath>R</InlineMath> is an integral domain.
        </p>
      </Theorem>

      <Theorem title="Polynomial Ring over Integral Domain"
        proof={
          <>
            <p>
              If <InlineMath>{'fg = 0'}</InlineMath> in <InlineMath>R[x]</InlineMath> with both nonzero,
              their leading coefficients <InlineMath>{'a_m, b_n'}</InlineMath> satisfy <InlineMath>{'a_m b_n = 0'}</InlineMath>
              (as the leading coefficient of <InlineMath>fg</InlineMath>).
            </p>
            <p className="mt-2">
              But <InlineMath>R</InlineMath> is an integral domain, so <InlineMath>{'a_m = 0'}</InlineMath> or
              <InlineMath>{'b_n = 0'}</InlineMath>, contradicting that <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath>
              are nonzero.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>R</InlineMath> is an integral domain, then so is <InlineMath>R[x]</InlineMath>.
        </p>
      </Theorem>

      <Definition title="Polynomial Rings in Multiple Variables">
        <p>
          We define polynomial rings in multiple variables inductively:
        </p>
        <MathBlock>
          {'R[x_1, x_2, \\ldots, x_n] = R[x_1, \\ldots, x_{n-1}][x_n]'}
        </MathBlock>
        <p className="mt-2">
          Elements are polynomials in <InlineMath>{'x_1, \\ldots, x_n'}</InlineMath> with coefficients in <InlineMath>R</InlineMath>.
        </p>
      </Definition>

      <Example title="A Two-Variable Polynomial">
        <p>
          In <InlineMath>{'\\mathbb{R}[x, y]'}</InlineMath>:
        </p>
        <MathBlock>
          {'f(x, y) = x^2 y + 3xy^2 - 2y + 5'}
        </MathBlock>
        <p className="mt-2">
          This can be viewed as a polynomial in <InlineMath>y</InlineMath> with coefficients in <InlineMath>{'\\mathbb{R}[x]'}</InlineMath>:
        </p>
        <MathBlock>
          {'f = (x^2)y + (3x)y^2 + (-2)y + 5'}
        </MathBlock>
      </Example>

      <h3>Matrix Rings</h3>

      <Definition title="Matrix Ring">
        <p>
          Let <InlineMath>R</InlineMath> be a ring. The <strong>matrix ring</strong> <InlineMath>{'M_n(R)'}</InlineMath>
          (or <InlineMath>{'\\text{Mat}_n(R)'}</InlineMath>) consists of all <InlineMath>{'n \\times n'}</InlineMath>
          matrices with entries in <InlineMath>R</InlineMath>, under matrix addition and multiplication.
        </p>
      </Definition>

      <Example title="Matrix Operations">
        <p>
          In <InlineMath>{'M_2(\\mathbb{R})'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 3 \\\\ 4 & 4 \\end{pmatrix}'}
        </MathBlock>
        <MathBlock>
          {'\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}'}
        </MathBlock>
      </Example>

      <Theorem title="Properties of Matrix Rings"
        proof={
          <>
            <p>
              Verification is straightforward: matrix addition and multiplication satisfy the ring axioms.
              The zero matrix is the additive identity, and <InlineMath>{'I_n'}</InlineMath> is the multiplicative identity.
            </p>
            <p className="mt-2">
              For non-commutativity, consider <InlineMath>A = E_{12}</InlineMath> and <InlineMath>B = E_{21}</InlineMath>
              (elementary matrices). Then <InlineMath>{'AB = E_{11}'}</InlineMath> but <InlineMath>{'BA = E_{22}'}</InlineMath>.
            </p>
            <p className="mt-2">
              For zero divisors, consider <InlineMath>{'E_{12} \\cdot E_{21} = E_{11}'}</InlineMath> but
              <InlineMath>{'E_{12} \\cdot E_{12} = 0'}</InlineMath> (zero matrix).
            </p>
          </>
        }
      >
        <p>
          For any ring <InlineMath>R</InlineMath> and <InlineMath>{'n \\geq 1'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'M_n(R)'}</InlineMath> is a ring with unity <InlineMath>{'I_n'}</InlineMath></li>
          <li>If <InlineMath>{'n \\geq 2'}</InlineMath>, <InlineMath>{'M_n(R)'}</InlineMath> is non-commutative (even if <InlineMath>R</InlineMath> is commutative)</li>
          <li>If <InlineMath>{'n \\geq 2'}</InlineMath>, <InlineMath>{'M_n(R)'}</InlineMath> has zero divisors (even if <InlineMath>R</InlineMath> is an integral domain)</li>
        </ul>
      </Theorem>

      <Definition title="Units in Matrix Rings">
        <p>
          The group of units in <InlineMath>{'M_n(R)'}</InlineMath> is the <strong>general linear group</strong>
        </p>
        <MathBlock>
          {'GL_n(R) = M_n(R)^\\times = \\{A \\in M_n(R) : \\exists B \\text{ with } AB = BA = I_n\\}'}
        </MathBlock>
        <p className="mt-2">
          When <InlineMath>R</InlineMath> is a field, <InlineMath>{'A \\in GL_n(R)'}</InlineMath> if and only if
          <InlineMath>{'\\det(A) \\neq 0'}</InlineMath>.
        </p>
      </Definition>

      <Example title="GL_2(Z_2)">
        <p>
          The group <InlineMath>{'GL_2(\\mathbb{Z}_2)'}</InlineMath> consists of invertible <InlineMath>{'2 \\times 2'}</InlineMath>
          matrices over the field with 2 elements. These are matrices with non-zero determinant (i.e., determinant 1 in <InlineMath>{'\\mathbb{Z}_2'}</InlineMath>).
        </p>
        <p className="mt-2">
          There are <InlineMath>{'(2^2 - 1)(2^2 - 2) = 3 \\cdot 2 = 6'}</InlineMath> such matrices, so
          <InlineMath>{'GL_2(\\mathbb{Z}_2) \\cong S_3'}</InlineMath>.
        </p>
      </Example>

      <h3>Other Important Ring Constructions</h3>

      <Definition title="Group Ring">
        <p>
          Let <InlineMath>R</InlineMath> be a commutative ring and <InlineMath>G</InlineMath> a group. The
          <strong>group ring</strong> <InlineMath>R[G]</InlineMath> consists of formal sums
        </p>
        <MathBlock>
          {'\\sum_{g \\in G} a_g \\cdot g \\quad \\text{(finite support)}'}
        </MathBlock>
        <p className="mt-2">
          with addition componentwise and multiplication extending the group operation:
        </p>
        <MathBlock>
          {'(a_g \\cdot g)(a_h \\cdot h) = (a_g a_h) \\cdot (gh)'}
        </MathBlock>
      </Definition>

      <Example title="The Group Ring Z[Z_2]">
        <p>
          Let <InlineMath>{'G = \\mathbb{Z}_2 = \\{1, \\sigma\\}'}</InlineMath> with <InlineMath>{'\\sigma^2 = 1'}</InlineMath>.
          Then <InlineMath>{'\\mathbb{Z}[\\mathbb{Z}_2]'}</InlineMath> consists of elements <InlineMath>{'a + b\\sigma'}</InlineMath>
          where <InlineMath>{'a, b \\in \\mathbb{Z}'}</InlineMath>.
        </p>
        <p className="mt-2">
          Multiplication: <InlineMath>{'(a + b\\sigma)(c + d\\sigma) = (ac + bd) + (ad + bc)\\sigma'}</InlineMath>
        </p>
        <p className="mt-2">
          This is isomorphic to <InlineMath>{'\\mathbb{Z}[x]/(x^2 - 1)'}</InlineMath>.
        </p>
      </Example>

      <Definition title="Direct Product of Rings">
        <p>
          Given rings <InlineMath>{'R_1, R_2, \\ldots, R_n'}</InlineMath>, their <strong>direct product</strong>
        </p>
        <MathBlock>
          {'R_1 \\times R_2 \\times \\cdots \\times R_n'}
        </MathBlock>
        <p className="mt-2">
          is the set of tuples <InlineMath>{'(r_1, r_2, \\ldots, r_n)'}</InlineMath> with componentwise operations.
        </p>
      </Definition>

      <Example title="Z_2 x Z_3">
        <p>
          <InlineMath>{'\\mathbb{Z}_2 \\times \\mathbb{Z}_3'}</InlineMath> has 6 elements. By the Chinese Remainder Theorem,
          <InlineMath>{'\\mathbb{Z}_2 \\times \\mathbb{Z}_3 \\cong \\mathbb{Z}_6'}</InlineMath>.
        </p>
        <p className="mt-2">
          However, <InlineMath>{'\\mathbb{Z}_2 \\times \\mathbb{Z}_2'}</InlineMath> is NOT isomorphic to <InlineMath>{'\\mathbb{Z}_4'}</InlineMath>:
          in <InlineMath>{'\\mathbb{Z}_2 \\times \\mathbb{Z}_2'}</InlineMath>, every element squares to <InlineMath>{'(0, 0)'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info">
        <strong>The Universal Property:</strong> Polynomial rings satisfy a universal property: for any
        ring homomorphism <InlineMath>{'\\phi: R \\to S'}</InlineMath> and any <InlineMath>{'s \\in S'}</InlineMath>,
        there exists a unique extension <InlineMath>{'\\tilde{\\phi}: R[x] \\to S'}</InlineMath> with
        <InlineMath>{'\\tilde{\\phi}(x) = s'}</InlineMath>. This makes <InlineMath>R[x]</InlineMath> the
        "freest" ring containing <InlineMath>R</InlineMath> with one additional element.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> Polynomial rings <InlineMath>R[x]</InlineMath> extend a ring <InlineMath>R</InlineMath>
        by adding an indeterminate <InlineMath>x</InlineMath>; they preserve the integral domain property.
        Matrix rings <InlineMath>{'M_n(R)'}</InlineMath> are non-commutative for <InlineMath>{'n \\geq 2'}</InlineMath>
        and have zero divisors. Group rings <InlineMath>R[G]</InlineMath> blend ring and group structures.
        Direct products combine rings componentwise.
      </Callout>
    </LessonLayout>
  );
}
