import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2>Polynomial Ring Definitions</h2>

      <p>
        Polynomial rings are among the most important constructions in algebra. They arise
        naturally in many contexts and serve as a bridge between abstract algebra and
        concrete computation. In this section, we develop the formal theory of polynomial rings.
      </p>

      <h3>Formal Definition</h3>

      <Definition title="Polynomial Ring">
        <p>
          Let <InlineMath>R</InlineMath> be a commutative ring with unity. The <strong>polynomial ring</strong>
          <InlineMath>R[x]</InlineMath> is the set of all formal expressions
        </p>
        <MathBlock>
          {'f(x) = \\sum_{i=0}^{n} a_i x^i = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{'a_i \\in R'}</InlineMath> and <InlineMath>{'n \\geq 0'}</InlineMath>. Two polynomials
          are equal if and only if their corresponding coefficients are equal (with the convention that
          missing terms have coefficient 0).
        </p>
      </Definition>

      <Definition title="Polynomial Operations">
        <p>
          For polynomials <InlineMath>{'f = \\sum a_i x^i'}</InlineMath> and <InlineMath>{'g = \\sum b_j x^j'}</InlineMath>:
        </p>
        <MathBlock>
          {'(f + g)(x) = \\sum_{k} (a_k + b_k) x^k'}
        </MathBlock>
        <MathBlock>
          {'(fg)(x) = \\sum_{k} \\left( \\sum_{i+j=k} a_i b_j \\right) x^k'}
        </MathBlock>
        <p className="mt-2">
          The multiplication formula is the "Cauchy product" or convolution of coefficients.
        </p>
      </Definition>

      <Theorem title="R[x] is a Commutative Ring"
        proof={
          <>
            <p>
              Verification of the ring axioms is straightforward:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Addition is commutative and associative (inherited from <InlineMath>R</InlineMath>)</li>
              <li>Additive identity is the zero polynomial (all coefficients 0)</li>
              <li>Additive inverse of <InlineMath>{'\\sum a_i x^i'}</InlineMath> is <InlineMath>{'\\sum (-a_i) x^i'}</InlineMath></li>
              <li>Multiplication is associative and commutative (requires checking)</li>
              <li>Unity is the constant polynomial 1</li>
              <li>Distributive laws follow from those in <InlineMath>R</InlineMath></li>
            </ul>
          </>
        }
      >
        <p>
          <InlineMath>R[x]</InlineMath> is a commutative ring with unity. The embedding
          <InlineMath>{'R \\hookrightarrow R[x]'}</InlineMath> given by <InlineMath>{'r \\mapsto r \\cdot x^0'}</InlineMath>
          is a ring homomorphism.
        </p>
      </Theorem>

      <h3>Degree and Leading Terms</h3>

      <Definition title="Degree">
        <p>
          For a nonzero polynomial <InlineMath>{'f(x) = \\sum_{i=0}^{n} a_i x^i'}</InlineMath> with <InlineMath>{'a_n \\neq 0'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>The <strong>degree</strong> is <InlineMath>{'\\deg(f) = n'}</InlineMath></li>
          <li>The <strong>leading coefficient</strong> is <InlineMath>{'a_n'}</InlineMath></li>
          <li>The <strong>leading term</strong> is <InlineMath>{'a_n x^n'}</InlineMath></li>
          <li><InlineMath>f</InlineMath> is <strong>monic</strong> if <InlineMath>{'a_n = 1'}</InlineMath></li>
        </ul>
        <p className="mt-2">
          The zero polynomial is assigned degree <InlineMath>{'-\\infty'}</InlineMath> by convention.
        </p>
      </Definition>

      <Theorem title="Degree Properties"
        proof={
          <>
            <p>
              For addition: If <InlineMath>{'\\deg(f) \\neq \\deg(g)'}</InlineMath>, the leading terms don't
              cancel, so <InlineMath>{'\\deg(f + g) = \\max(\\deg f, \\deg g)'}</InlineMath>. If degrees are equal,
              the leading coefficients might cancel.
            </p>
            <p className="mt-2">
              For multiplication: The leading term of <InlineMath>fg</InlineMath> is <InlineMath>{'a_n b_m x^{n+m}'}</InlineMath>
              where <InlineMath>{'a_n, b_m'}</InlineMath> are leading coefficients. If <InlineMath>R</InlineMath> is
              an integral domain, <InlineMath>{'a_n b_m \\neq 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For polynomials <InlineMath>f, g</InlineMath> in <InlineMath>R[x]</InlineMath>:
        </p>
        <MathBlock>
          {'\\deg(f + g) \\leq \\max(\\deg f, \\deg g)'}
        </MathBlock>
        <MathBlock>
          {'\\deg(fg) \\leq \\deg f + \\deg g'}
        </MathBlock>
        <p className="mt-2">
          with equality in the multiplication formula when <InlineMath>R</InlineMath> is an integral domain.
        </p>
      </Theorem>

      <Theorem title="Integral Domain Preservation"
        proof={
          <>
            <p>
              Suppose <InlineMath>{'f, g \\neq 0'}</InlineMath> but <InlineMath>{'fg = 0'}</InlineMath>.
              Let <InlineMath>{'a_n, b_m'}</InlineMath> be the leading coefficients of <InlineMath>f, g</InlineMath>.
              The coefficient of <InlineMath>{'x^{n+m}'}</InlineMath> in <InlineMath>fg</InlineMath> is <InlineMath>{'a_n b_m'}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{'fg = 0'}</InlineMath>, we have <InlineMath>{'a_n b_m = 0'}</InlineMath>. Since <InlineMath>R</InlineMath>
              is an integral domain, <InlineMath>{'a_n = 0'}</InlineMath> or <InlineMath>{'b_m = 0'}</InlineMath>, contradicting
              that these are leading coefficients.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>R</InlineMath> is an integral domain, then so is <InlineMath>R[x]</InlineMath>.
        </p>
      </Theorem>

      <h3>Units in R[x]</h3>

      <Theorem title="Units of R[x]"
        proof={
          <>
            <p>
              Suppose <InlineMath>fg = 1</InlineMath> in <InlineMath>R[x]</InlineMath>. If <InlineMath>R</InlineMath>
              is an integral domain, <InlineMath>{'\\deg(f) + \\deg(g) = \\deg(1) = 0'}</InlineMath>.
              Since degrees are non-negative, <InlineMath>{'\\deg f = \\deg g = 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              Thus <InlineMath>f, g</InlineMath> are constants, and <InlineMath>{'fg = 1'}</InlineMath> in <InlineMath>R</InlineMath>.
            </p>
            <p className="mt-2">
              For general <InlineMath>R</InlineMath>, units can have positive degree. For example, in
              <InlineMath>{'(\\mathbb{Z}/4\\mathbb{Z})[x]'}</InlineMath>, <InlineMath>{'(1 + 2x)^2 = 1 + 4x + 4x^2 = 1'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>R</InlineMath> is an integral domain, then the units of <InlineMath>R[x]</InlineMath>
          are exactly the units of <InlineMath>R</InlineMath> (the constant polynomials that are units).
        </p>
        <MathBlock>
          {'R[x]^\\times = R^\\times'}
        </MathBlock>
      </Theorem>

      <Example title="Units in Various Polynomial Rings">
        <p>
          <InlineMath>{'\\mathbb{Z}[x]^\\times = \\{1, -1\\}'}</InlineMath>
        </p>
        <p className="mt-2">
          <InlineMath>{'\\mathbb{Q}[x]^\\times = \\mathbb{Q}^\\times = \\mathbb{Q} \\setminus \\{0\\}'}</InlineMath>
        </p>
        <p className="mt-2">
          <InlineMath>{'\\mathbb{R}[x]^\\times = \\mathbb{R} \\setminus \\{0\\}'}</InlineMath>
        </p>
      </Example>

      <h3>Polynomial Rings in Multiple Variables</h3>

      <Definition title="Multivariate Polynomial Rings">
        <p>
          The polynomial ring in <InlineMath>n</InlineMath> variables over <InlineMath>R</InlineMath> is defined
          inductively:
        </p>
        <MathBlock>
          {'R[x_1, x_2, \\ldots, x_n] = R[x_1, \\ldots, x_{n-1}][x_n]'}
        </MathBlock>
        <p className="mt-2">
          Elements are finite sums of <strong>monomials</strong>
        </p>
        <MathBlock>
          {'a \\cdot x_1^{e_1} x_2^{e_2} \\cdots x_n^{e_n}}'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{'a \\in R'}</InlineMath> and <InlineMath>{'e_i \\geq 0'}</InlineMath>.
        </p>
      </Definition>

      <Example title="A Polynomial in Two Variables">
        <p>
          In <InlineMath>{'\\mathbb{Z}[x, y]'}</InlineMath>:
        </p>
        <MathBlock>
          {'f(x, y) = 3x^2 y + xy^2 - 5y + 2'}
        </MathBlock>
        <p className="mt-2">
          This can be viewed as a polynomial in <InlineMath>y</InlineMath> over <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath>:
        </p>
        <MathBlock>
          {'f = (x)y^2 + (3x^2 - 5)y + 2'}
        </MathBlock>
      </Example>

      <Definition title="Degree in Multiple Variables">
        <p>
          For a monomial <InlineMath>{'x_1^{e_1} \\cdots x_n^{e_n}'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>The <strong>total degree</strong> is <InlineMath>{'e_1 + e_2 + \\cdots + e_n'}</InlineMath></li>
          <li>The <strong>degree in <InlineMath>{'x_i'}</InlineMath></strong> is <InlineMath>{'e_i'}</InlineMath></li>
        </ul>
        <p className="mt-2">
          For a polynomial, take the maximum over all monomials with nonzero coefficient.
        </p>
      </Definition>

      <h3>The Universal Property</h3>

      <Theorem title="Universal Property of Polynomial Rings"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\tilde{\\phi}(\\sum a_i x^i) = \\sum \\phi(a_i) s^i'}</InlineMath>. This is
              well-defined since only finitely many <InlineMath>{'a_i'}</InlineMath> are nonzero.
            </p>
            <p className="mt-2">
              It is a ring homomorphism extending <InlineMath>{'\\phi'}</InlineMath> and sending <InlineMath>x</InlineMath>
              to <InlineMath>s</InlineMath>. Uniqueness follows because any such map is determined by its
              action on <InlineMath>R</InlineMath> and <InlineMath>x</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'\\phi: R \\to S'}</InlineMath> be a ring homomorphism and <InlineMath>{'s \\in S'}</InlineMath>.
          There exists a unique ring homomorphism <InlineMath>{'\\tilde{\\phi}: R[x] \\to S'}</InlineMath> such that
          <InlineMath>{'\\tilde{\\phi}|_R = \\phi'}</InlineMath> and <InlineMath>{'\\tilde{\\phi}(x) = s'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Evaluation Maps">
        <p>
          The evaluation map <InlineMath>{'\\text{ev}_a: R[x] \\to R'}</InlineMath> sending <InlineMath>{'f(x) \\mapsto f(a)'}</InlineMath>
          is the unique homomorphism extending the identity on <InlineMath>R</InlineMath> with <InlineMath>{'x \\mapsto a'}</InlineMath>.
        </p>
        <p className="mt-2">
          More generally, if <InlineMath>{'R \\subseteq S'}</InlineMath> and <InlineMath>{'\\alpha \\in S'}</InlineMath>,
          we get an evaluation <InlineMath>{'R[x] \\to S'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info">
        <strong>Polynomial vs. Polynomial Function:</strong> A polynomial <InlineMath>f(x)</InlineMath> is
        a formal object (a sequence of coefficients). The polynomial function <InlineMath>{'a \\mapsto f(a)'}</InlineMath>
        is a function <InlineMath>{'R \\to R'}</InlineMath>. Over infinite fields, distinct polynomials give
        distinct functions. Over finite fields, this fails: in <InlineMath>{'\\mathbb{Z}_p[x]'}</InlineMath>,
        the polynomial <InlineMath>{'x^p - x'}</InlineMath> defines the zero function by Fermat's Little Theorem.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> The polynomial ring <InlineMath>R[x]</InlineMath> consists of formal
        sums with coefficients in <InlineMath>R</InlineMath>. It inherits commutativity and unity from
        <InlineMath>R</InlineMath>, and preserves the integral domain property. The units of <InlineMath>R[x]</InlineMath>
        (when <InlineMath>R</InlineMath> is a domain) are the units of <InlineMath>R</InlineMath>. The
        universal property makes polynomial rings the "freest" way to adjoin a new element to a ring.
      </Callout>
    </LessonLayout>
  );
}
