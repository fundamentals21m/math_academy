import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <h2>Polynomial Rings over Fields I</h2>

      <p>
        When the coefficient ring is a field, polynomial rings acquire particularly nice properties.
        The ability to divide with remainder leads to a complete understanding of divisibility,
        making <InlineMath>F[x]</InlineMath> a Euclidean domain and hence a PID and UFD.
      </p>

      <h3>Division Algorithm</h3>

      <Theorem title="Division Algorithm for Polynomials"
        proof={
          <>
            <p>
              <strong>Existence:</strong> We proceed by induction on <InlineMath>{'\\deg(a)'}</InlineMath>.
              If <InlineMath>{'\\deg(a) < \\deg(b)'}</InlineMath>, take <InlineMath>{'q = 0'}</InlineMath>,
              <InlineMath>{'r = a'}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{'\\deg(a) \\geq \\deg(b)'}</InlineMath>, let <InlineMath>a</InlineMath> have leading
              term <InlineMath>{'\\alpha x^n'}</InlineMath> and <InlineMath>b</InlineMath> have leading term
              <InlineMath>{'\\beta x^m'}</InlineMath>. Form
            </p>
            <MathBlock>
              {'a_1 = a - (\\alpha \\beta^{-1} x^{n-m}) b'}
            </MathBlock>
            <p className="mt-2">
              This has degree less than <InlineMath>n</InlineMath>. By induction, <InlineMath>{'a_1 = bq_1 + r'}</InlineMath>.
              Then <InlineMath>{'a = b(\\alpha \\beta^{-1} x^{n-m} + q_1) + r'}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Uniqueness:</strong> If <InlineMath>{'a = bq + r = bq\' + r\''}</InlineMath>, then
              <InlineMath>{'b(q - q\') = r\' - r'}</InlineMath>. If <InlineMath>{'q \\neq q\''}</InlineMath>,
              the left side has degree <InlineMath>{'\\geq \\deg b'}</InlineMath>, but the right side has
              degree <InlineMath>{'< \\deg b'}</InlineMath>. Contradiction.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>F</InlineMath> be a field and <InlineMath>{'a(x), b(x) \\in F[x]'}</InlineMath>
          with <InlineMath>{'b \\neq 0'}</InlineMath>. There exist unique polynomials
          <InlineMath>{'q(x), r(x) \\in F[x]'}</InlineMath> such that
        </p>
        <MathBlock>
          {'a(x) = b(x)q(x) + r(x)'}
        </MathBlock>
        <p className="mt-2">
          where either <InlineMath>{'r = 0'}</InlineMath> or <InlineMath>{'\\deg(r) < \\deg(b)'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Polynomial Long Division">
        <p>
          Divide <InlineMath>{'x^4 + 2x^3 - x + 5'}</InlineMath> by <InlineMath>{'x^2 + 1'}</InlineMath> in <InlineMath>{'\\mathbb{Q}[x]'}</InlineMath>:
        </p>
        <MathBlock>
          {'x^4 + 2x^3 - x + 5 = (x^2 + 1)(x^2 + 2x - 1) + (-3x + 6)'}
        </MathBlock>
        <p className="mt-2">
          Here <InlineMath>{'q(x) = x^2 + 2x - 1'}</InlineMath> and <InlineMath>{'r(x) = -3x + 6'}</InlineMath>,
          with <InlineMath>{'\\deg(r) = 1 < 2 = \\deg(x^2 + 1)'}</InlineMath>.
        </p>
      </Example>

      <Theorem title="F[x] is a Euclidean Domain"
        proof={
          <>
            <p>
              The norm function <InlineMath>{'N(f) = \\deg(f)'}</InlineMath> satisfies the Euclidean property
              by the Division Algorithm above.
            </p>
          </>
        }
      >
        <p>
          For any field <InlineMath>F</InlineMath>, the polynomial ring <InlineMath>F[x]</InlineMath>
          is a Euclidean domain with norm given by degree.
        </p>
        <p className="mt-2">
          Consequently, <InlineMath>F[x]</InlineMath> is a PID and a UFD.
        </p>
      </Theorem>

      <h3>Roots and Factorization</h3>

      <Definition title="Root of a Polynomial">
        <p>
          An element <InlineMath>{'\\alpha \\in F'}</InlineMath> is a <strong>root</strong> (or <strong>zero</strong>)
          of <InlineMath>{'f(x) \\in F[x]'}</InlineMath> if <InlineMath>{'f(\\alpha) = 0'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Root-Factor Theorem"
        proof={
          <>
            <p>
              <InlineMath>{'(\\Rightarrow)'}</InlineMath> If <InlineMath>{'f(x) = (x - \\alpha)q(x)'}</InlineMath>,
              then <InlineMath>{'f(\\alpha) = 0 \\cdot q(\\alpha) = 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              <InlineMath>{'(\\Leftarrow)'}</InlineMath> By the division algorithm,
              <InlineMath>{'f(x) = (x - \\alpha)q(x) + r'}</InlineMath> where <InlineMath>r</InlineMath> is
              a constant (since <InlineMath>{'\\deg r < \\deg(x - \\alpha) = 1'}</InlineMath>).
            </p>
            <p className="mt-2">
              Evaluating at <InlineMath>{'\\alpha'}</InlineMath>: <InlineMath>{'0 = f(\\alpha) = 0 + r = r'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'\\alpha'}</InlineMath> is a root of <InlineMath>{'f(x)'}</InlineMath> if and only if
          <InlineMath>{'(x - \\alpha)'}</InlineMath> divides <InlineMath>{'f(x)'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Bound on Number of Roots"
        proof={
          <>
            <p>
              Induction on <InlineMath>n = \\deg f</InlineMath>. If <InlineMath>{'n = 0'}</InlineMath>,
              <InlineMath>f</InlineMath> is a nonzero constant with no roots.
            </p>
            <p className="mt-2">
              For <InlineMath>{'n > 0'}</InlineMath>: if <InlineMath>f</InlineMath> has no roots, done.
              If <InlineMath>{'\\alpha'}</InlineMath> is a root, then <InlineMath>{'f = (x - \\alpha)g'}</InlineMath>
              where <InlineMath>{'\\deg g = n - 1'}</InlineMath>.
            </p>
            <p className="mt-2">
              Any other root <InlineMath>{'\\beta'}</InlineMath> satisfies <InlineMath>{'0 = f(\\beta) = (\\beta - \\alpha)g(\\beta)'}</InlineMath>.
              Since <InlineMath>{'\\beta \\neq \\alpha'}</InlineMath> and <InlineMath>F</InlineMath> is a field,
              <InlineMath>{'g(\\beta) = 0'}</InlineMath>. By induction, <InlineMath>g</InlineMath> has at most
              <InlineMath>{'n - 1'}</InlineMath> roots.
            </p>
          </>
        }
      >
        <p>
          A nonzero polynomial <InlineMath>{'f(x) \\in F[x]'}</InlineMath> of degree <InlineMath>n</InlineMath>
          has at most <InlineMath>n</InlineMath> roots in <InlineMath>F</InlineMath> (counting multiplicity).
        </p>
      </Theorem>

      <Definition title="Multiplicity of a Root">
        <p>
          The <strong>multiplicity</strong> of <InlineMath>{'\\alpha'}</InlineMath> as a root of <InlineMath>f</InlineMath>
          is the largest <InlineMath>m</InlineMath> such that <InlineMath>{'(x - \\alpha)^m'}</InlineMath> divides <InlineMath>f</InlineMath>.
        </p>
        <p className="mt-2">
          A root is <strong>simple</strong> if its multiplicity is 1.
        </p>
      </Definition>

      <Example title="Roots and Multiplicity">
        <p>
          The polynomial <InlineMath>{'f(x) = (x - 1)^2(x + 2)'}</InlineMath> in <InlineMath>{'\\mathbb{Q}[x]'}</InlineMath>
          has roots <InlineMath>{'1'}</InlineMath> (multiplicity 2) and <InlineMath>{'-2'}</InlineMath> (multiplicity 1).
        </p>
        <p className="mt-2">
          The sum of multiplicities is <InlineMath>{'2 + 1 = 3 = \\deg f'}</InlineMath>.
        </p>
      </Example>

      <h3>Irreducibility over Fields</h3>

      <Definition title="Irreducible Polynomial">
        <p>
          A polynomial <InlineMath>{'f(x) \\in F[x]'}</InlineMath> of degree <InlineMath>{'\\geq 1'}</InlineMath>
          is <strong>irreducible</strong> if it cannot be written as <InlineMath>{'f = gh'}</InlineMath> with
          <InlineMath>{'\\deg g, \\deg h < \\deg f'}</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently (since <InlineMath>F[x]</InlineMath> is a PID), <InlineMath>f</InlineMath> is irreducible
          iff <InlineMath>{'(f)'}</InlineMath> is a maximal ideal in <InlineMath>F[x]</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Low-Degree Irreducibility"
        proof={
          <>
            <p>
              If <InlineMath>{'f = gh'}</InlineMath> with <InlineMath>{'\\deg g, \\deg h \\geq 1'}</InlineMath>,
              then <InlineMath>{'\\deg f = \\deg g + \\deg h \\geq 2'}</InlineMath>.
            </p>
            <p className="mt-2">
              For <InlineMath>{'\\deg f \\leq 3'}</InlineMath>: if <InlineMath>f</InlineMath> is reducible,
              one factor has degree 1, meaning <InlineMath>f</InlineMath> has a root in <InlineMath>F</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          A polynomial of degree 1 is always irreducible.
        </p>
        <p className="mt-2">
          A polynomial of degree 2 or 3 over <InlineMath>F</InlineMath> is irreducible if and only if
          it has no root in <InlineMath>F</InlineMath>.
        </p>
      </Theorem>

      <Example title="Testing Irreducibility">
        <p>
          Is <InlineMath>{'x^2 + 1'}</InlineMath> irreducible over <InlineMath>{'\\mathbb{R}'}</InlineMath>?
        </p>
        <p className="mt-2">
          Test for roots: <InlineMath>{'x^2 + 1 = 0'}</InlineMath> has no real solutions. So yes, irreducible over <InlineMath>{'\\mathbb{R}'}</InlineMath>.
        </p>
        <p className="mt-2">
          Over <InlineMath>{'\\mathbb{C}'}</InlineMath>: <InlineMath>{'x^2 + 1 = (x - i)(x + i)'}</InlineMath>. Reducible!
        </p>
      </Example>

      <Example title="Irreducibility of x^4 + 1">
        <p>
          Is <InlineMath>{'x^4 + 1'}</InlineMath> irreducible over <InlineMath>{'\\mathbb{Q}'}</InlineMath>?
        </p>
        <p className="mt-2">
          Degree 4, so we can't just check for roots. We need to verify no degree-2 factors exist.
          Suppose <InlineMath>{'x^4 + 1 = (x^2 + ax + b)(x^2 + cx + d)'}</InlineMath>.
        </p>
        <p className="mt-2">
          Expanding and comparing coefficients leads to a system with no rational solutions.
          Hence <InlineMath>{'x^4 + 1'}</InlineMath> is irreducible over <InlineMath>{'\\mathbb{Q}'}</InlineMath>.
        </p>
        <p className="mt-2">
          Over <InlineMath>{'\\mathbb{R}'}</InlineMath>: <InlineMath>{'x^4 + 1 = (x^2 + \\sqrt{2}x + 1)(x^2 - \\sqrt{2}x + 1)'}</InlineMath>.
        </p>
      </Example>

      <Theorem title="Structure of F[x]/(f)"
        proof={
          <>
            <p>
              Since <InlineMath>F[x]</InlineMath> is a PID, <InlineMath>{'(f)'}</InlineMath> is maximal iff
              <InlineMath>f</InlineMath> is irreducible. The quotient by a maximal ideal is a field.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'f(x) \\in F[x]'}</InlineMath> is irreducible, then <InlineMath>{'F[x]/(f(x))'}</InlineMath>
          is a field extension of <InlineMath>F</InlineMath>.
        </p>
        <p className="mt-2">
          Every element can be uniquely written as <InlineMath>{'a_0 + a_1 \\bar{x} + \\cdots + a_{n-1} \\bar{x}^{n-1}'}</InlineMath>
          where <InlineMath>{'n = \\deg f'}</InlineMath> and <InlineMath>{'\\bar{x} = x + (f)'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Constructing the Complex Numbers">
        <p>
          <InlineMath>{'\\mathbb{R}[x]/(x^2 + 1) \\cong \\mathbb{C}'}</InlineMath>
        </p>
        <p className="mt-2">
          The image of <InlineMath>x</InlineMath> satisfies <InlineMath>{'\\bar{x}^2 + 1 = 0'}</InlineMath>,
          so <InlineMath>{'\\bar{x}^2 = -1'}</InlineMath>. We identify <InlineMath>{'\\bar{x}'}</InlineMath> with <InlineMath>i</InlineMath>.
        </p>
      </Example>

      <Callout type="success">
        <strong>Summary:</strong> Over a field <InlineMath>F</InlineMath>, the polynomial ring
        <InlineMath>F[x]</InlineMath> is a Euclidean domain (hence PID and UFD). The division
        algorithm enables computation of GCDs and identification of irreducibles. A polynomial
        has <InlineMath>{'\\alpha'}</InlineMath> as a root iff <InlineMath>{'(x - \\alpha)'}</InlineMath>
        divides it. Irreducible polynomials generate maximal ideals, and the quotient is a field extension.
      </Callout>
    </LessonLayout>
  );
}
