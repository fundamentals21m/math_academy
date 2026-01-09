import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <h2>Polynomial UFDs</h2>

      <p>
        A fundamental theorem in commutative algebra states that the polynomial ring over a UFD
        is again a UFD. This result, combined with the fact that fields are UFDs, implies that
        multivariate polynomial rings over any field are UFDs—a cornerstone of algebraic geometry.
      </p>

      <h3>Content and Primitive Polynomials</h3>

      <Definition title="Content of a Polynomial">
        <p>
          Let <InlineMath>R</InlineMath> be a UFD and <InlineMath>{'f(x) = a_n x^n + \\cdots + a_0 \\in R[x]'}</InlineMath>.
          The <strong>content</strong> of <InlineMath>f</InlineMath>, denoted <InlineMath>{'c(f)'}</InlineMath>
          or <InlineMath>{'\\text{cont}(f)'}</InlineMath>, is the GCD of its coefficients:
        </p>
        <MathBlock>
          {'c(f) = \\gcd(a_n, a_{n-1}, \\ldots, a_0)'}
        </MathBlock>
        <p className="mt-2">
          The content is well-defined up to units.
        </p>
      </Definition>

      <Definition title="Primitive Polynomial">
        <p>
          A polynomial <InlineMath>{'f \\in R[x]'}</InlineMath> is <strong>primitive</strong> if <InlineMath>{'c(f) = 1'}</InlineMath>
          (i.e., the GCD of its coefficients is a unit).
        </p>
        <p className="mt-2">
          Every nonzero polynomial <InlineMath>f</InlineMath> can be written as <InlineMath>{'f = c(f) \\cdot f^*'}</InlineMath>
          where <InlineMath>{'f^*'}</InlineMath> is primitive.
        </p>
      </Definition>

      <Example title="Content in Z[x]">
        <p>
          In <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'c(6x^2 + 4x + 2) = 2'}</InlineMath>, so <InlineMath>{'6x^2 + 4x + 2 = 2(3x^2 + 2x + 1)'}</InlineMath></li>
          <li><InlineMath>{'c(x^3 - x + 1) = 1'}</InlineMath>, so <InlineMath>{'x^3 - x + 1'}</InlineMath> is primitive</li>
          <li><InlineMath>{'c(15x^2 + 10x + 5) = 5'}</InlineMath></li>
        </ul>
      </Example>

      <Theorem title="Gauss's Lemma"
        proof={
          <>
            <p>
              Suppose <InlineMath>{'fg'}</InlineMath> is not primitive, so some prime <InlineMath>p</InlineMath>
              divides all coefficients of <InlineMath>fg</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{'f = \\sum a_i x^i'}</InlineMath> and <InlineMath>{'g = \\sum b_j x^j'}</InlineMath>.
              Since <InlineMath>f</InlineMath> is primitive, let <InlineMath>{'a_r'}</InlineMath> be the first
              coefficient not divisible by <InlineMath>p</InlineMath>. Similarly, let <InlineMath>{'b_s'}</InlineMath>
              be the first coefficient of <InlineMath>g</InlineMath> not divisible by <InlineMath>p</InlineMath>.
            </p>
            <p className="mt-2">
              The coefficient of <InlineMath>{'x^{r+s}'}</InlineMath> in <InlineMath>fg</InlineMath> is
              <InlineMath>{'\\sum_{i+j=r+s} a_i b_j'}</InlineMath>. Terms with <InlineMath>{'i < r'}</InlineMath>
              or <InlineMath>{'j < s'}</InlineMath> are divisible by <InlineMath>p</InlineMath>, leaving only
              <InlineMath>{'a_r b_s'}</InlineMath> not divisible by <InlineMath>p</InlineMath>. Contradiction.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>R</InlineMath> is a UFD and <InlineMath>{'f, g \\in R[x]'}</InlineMath> are primitive,
          then <InlineMath>fg</InlineMath> is primitive.
        </p>
        <p className="mt-2">
          More generally: <InlineMath>{'c(fg) = c(f) \\cdot c(g)'}</InlineMath> (up to units).
        </p>
      </Theorem>

      <h3>Irreducibility in R[x] vs. K[x]</h3>

      <Definition title="Field of Fractions">
        <p>
          Let <InlineMath>R</InlineMath> be a UFD and <InlineMath>{'K = \\text{Frac}(R)'}</InlineMath> its field of fractions.
          We have the inclusion <InlineMath>{'R[x] \\subseteq K[x]'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Content Clears Denominators"
        proof={
          <>
            <p>
              Write <InlineMath>{'f = \\frac{a}{b}'}</InlineMath> times a polynomial with coefficients in <InlineMath>R</InlineMath>.
              Clear denominators to get <InlineMath>{'bf \\in R[x]'}</InlineMath>. Factor out the content.
            </p>
          </>
        }
      >
        <p>
          Any nonzero <InlineMath>{'f \\in K[x]'}</InlineMath> can be written as
        </p>
        <MathBlock>
          {'f = \\frac{a}{b} \\cdot f^*'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{'a, b \\in R'}</InlineMath>, <InlineMath>{'b \\neq 0'}</InlineMath>, and
          <InlineMath>{'f^* \\in R[x]'}</InlineMath> is primitive.
        </p>
      </Theorem>

      <Theorem title="Irreducibility Criterion"
        proof={
          <>
            <p>
              <InlineMath>{'(\\Leftarrow)'}</InlineMath> Clear. If <InlineMath>f</InlineMath> is irreducible
              in <InlineMath>K[x]</InlineMath>, it can't factor non-trivially in <InlineMath>R[x]</InlineMath>.
            </p>
            <p className="mt-2">
              <InlineMath>{'(\\Rightarrow)'}</InlineMath> Suppose <InlineMath>{'f = gh'}</InlineMath> in <InlineMath>K[x]</InlineMath>
              with <InlineMath>{'\\deg g, \\deg h \\geq 1'}</InlineMath>. Write <InlineMath>{'g = \\frac{a}{b} g^*'}</InlineMath>
              and <InlineMath>{'h = \\frac{c}{d} h^*'}</InlineMath> with <InlineMath>{'g^*, h^*'}</InlineMath> primitive in <InlineMath>R[x]</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{'f = \\frac{ac}{bd} g^* h^*'}</InlineMath>. Since <InlineMath>f</InlineMath> is primitive,
              <InlineMath>{'\\frac{ac}{bd}'}</InlineMath> must be a unit in <InlineMath>R</InlineMath>.
              By Gauss's lemma, <InlineMath>{'g^* h^*'}</InlineMath> is primitive, so <InlineMath>{'f = u \\cdot g^* h^*'}</InlineMath>
              for some unit <InlineMath>u</InlineMath>. This is a non-trivial factorization in <InlineMath>R[x]</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>R</InlineMath> be a UFD with field of fractions <InlineMath>K</InlineMath>. A primitive
          polynomial <InlineMath>{'f \\in R[x]'}</InlineMath> is irreducible in <InlineMath>R[x]</InlineMath>
          if and only if it is irreducible in <InlineMath>K[x]</InlineMath>.
        </p>
      </Theorem>

      <Example title="Applying the Criterion">
        <p>
          Is <InlineMath>{'2x^2 + 4x + 2'}</InlineMath> irreducible in <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath>?
        </p>
        <p className="mt-2">
          First, <InlineMath>{'c(2x^2 + 4x + 2) = 2'}</InlineMath>, so this is not primitive.
          Factor out content: <InlineMath>{'2(x^2 + 2x + 1) = 2(x + 1)^2'}</InlineMath>.
        </p>
        <p className="mt-2">
          Is <InlineMath>{'x^2 - 2'}</InlineMath> irreducible in <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath>?
        </p>
        <p className="mt-2">
          It's primitive. Over <InlineMath>{'\\mathbb{Q}'}</InlineMath>, it has no rational roots
          (by the Rational Root Theorem, the only candidates are <InlineMath>{'\\pm 1, \\pm 2'}</InlineMath>).
          So it's irreducible in <InlineMath>{'\\mathbb{Q}[x]'}</InlineMath>, hence in <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath>.
        </p>
      </Example>

      <h3>The Main Theorem</h3>

      <Theorem title="R[x] is a UFD"
        proof={
          <>
            <p>
              <strong>Step 1:</strong> Any <InlineMath>{'f \\in R[x]'}</InlineMath> can be written as
              <InlineMath>{'f = c(f) \\cdot f^*'}</InlineMath> where <InlineMath>{'f^*'}</InlineMath> is primitive.
            </p>
            <p className="mt-2">
              <strong>Step 2:</strong> <InlineMath>{'c(f)'}</InlineMath> factors uniquely into primes of <InlineMath>R</InlineMath>
              (which are also primes in <InlineMath>R[x]</InlineMath>).
            </p>
            <p className="mt-2">
              <strong>Step 3:</strong> <InlineMath>{'f^*'}</InlineMath> factors into irreducibles in <InlineMath>K[x]</InlineMath>
              (since <InlineMath>K[x]</InlineMath> is a PID). By Gauss's lemma and the irreducibility criterion,
              these factors can be made primitive in <InlineMath>R[x]</InlineMath>, and primitive irreducibles
              in <InlineMath>K[x]</InlineMath> are irreducible in <InlineMath>R[x]</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Step 4:</strong> Uniqueness follows from uniqueness in <InlineMath>K[x]</InlineMath> and
              the content formula.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>R</InlineMath> is a UFD, then <InlineMath>R[x]</InlineMath> is a UFD.
        </p>
      </Theorem>

      <Theorem title="Multivariate Polynomial Rings"
        proof={
          <>
            <p>
              By induction: <InlineMath>R</InlineMath> is a UFD implies <InlineMath>R[x]</InlineMath> is a UFD
              implies <InlineMath>{'R[x][y] = R[x, y]'}</InlineMath> is a UFD, and so on.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>R</InlineMath> is a UFD, then <InlineMath>{'R[x_1, x_2, \\ldots, x_n]'}</InlineMath> is a UFD.
        </p>
        <p className="mt-2">
          In particular, <InlineMath>{'F[x_1, \\ldots, x_n]'}</InlineMath> is a UFD for any field <InlineMath>F</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>PIDs vs UFDs:</strong> While <InlineMath>R[x]</InlineMath> preserves the UFD property,
        it does NOT preserve the PID property. For example, <InlineMath>{'\\mathbb{Z}'}</InlineMath> is a PID,
        but <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath> is not a PID (the ideal <InlineMath>{'(2, x)'}</InlineMath>
        is not principal).
      </Callout>

      <h3>Primes in Polynomial Rings</h3>

      <Theorem title="Primes in R[x]"
        proof={
          <>
            <p>
              The primes of <InlineMath>R</InlineMath> remain prime in <InlineMath>R[x]</InlineMath>: if
              <InlineMath>{'p \\mid fg'}</InlineMath> in <InlineMath>R[x]</InlineMath>, then <InlineMath>p</InlineMath>
              divides all coefficients of <InlineMath>fg</InlineMath>, hence divides <InlineMath>{'c(fg) = c(f)c(g)'}</InlineMath>.
              By primality in <InlineMath>R</InlineMath>, <InlineMath>{'p \\mid c(f)'}</InlineMath> or <InlineMath>{'p \\mid c(g)'}</InlineMath>.
            </p>
            <p className="mt-2">
              Primitive irreducibles are prime by the UFD property.
            </p>
          </>
        }
      >
        <p>
          The primes (=irreducibles) of <InlineMath>R[x]</InlineMath> are:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Primes of <InlineMath>R</InlineMath> (viewed as constant polynomials)</li>
          <li>Primitive polynomials that are irreducible in <InlineMath>K[x]</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="Primes in Z[x]">
        <p>
          The primes of <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath> are:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Ordinary primes: <InlineMath>{'2, 3, 5, 7, 11, \\ldots'}</InlineMath></li>
          <li>Irreducible polynomials over <InlineMath>{'\\mathbb{Q}'}</InlineMath> with integer coefficients and content 1:
            <InlineMath>{'x, x^2 + 1, x^2 - 2, x^3 - 2, \\ldots'}</InlineMath></li>
        </ul>
      </Example>

      <Callout type="success">
        <strong>Summary:</strong> Gauss's Lemma states that the product of primitive polynomials is
        primitive. This key result enables proving that <InlineMath>R[x]</InlineMath> is a UFD whenever
        <InlineMath>R</InlineMath> is. A primitive polynomial is irreducible in <InlineMath>R[x]</InlineMath>
        iff it's irreducible in <InlineMath>K[x]</InlineMath>. The primes of <InlineMath>R[x]</InlineMath>
        are the primes of <InlineMath>R</InlineMath> plus primitive irreducibles.
      </Callout>
    </LessonLayout>
  );
}
