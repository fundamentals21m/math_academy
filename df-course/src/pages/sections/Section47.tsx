import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <h2>Polynomial Rings over Fields II</h2>

      <p>
        This section continues our study of polynomial rings over fields, focusing on advanced topics:
        splitting fields, finite fields, derivatives, and separability. These concepts are fundamental
        to Galois theory and the study of field extensions.
      </p>

      <h3>Splitting Fields</h3>

      <Definition title="Splitting Field">
        <p>
          Let <InlineMath>F</InlineMath> be a field and <InlineMath>{'f(x) \\in F[x]'}</InlineMath> a polynomial.
          A <strong>splitting field</strong> for <InlineMath>f</InlineMath> over <InlineMath>F</InlineMath>
          is a field extension <InlineMath>{'K/F'}</InlineMath> such that:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>f</InlineMath> splits completely in <InlineMath>K[x]</InlineMath>:
            <MathBlock>
              {'f(x) = a(x - \\alpha_1)(x - \\alpha_2) \\cdots (x - \\alpha_n)'}
            </MathBlock>
            with <InlineMath>{'\\alpha_i \\in K'}</InlineMath>
          </li>
          <li><InlineMath>K</InlineMath> is generated over <InlineMath>F</InlineMath> by the roots:
            <InlineMath>{'K = F(\\alpha_1, \\ldots, \\alpha_n)'}</InlineMath>
          </li>
        </ol>
      </Definition>

      <Example title="Splitting Field of x² + 1">
        <p>
          Over <InlineMath>{'\\mathbb{R}'}</InlineMath>, the polynomial <InlineMath>{'x^2 + 1'}</InlineMath>
          has splitting field <InlineMath>{'\\mathbb{C} = \\mathbb{R}(i)'}</InlineMath> where <InlineMath>{'i^2 = -1'}</InlineMath>.
        </p>
        <MathBlock>
          {'x^2 + 1 = (x - i)(x + i)'}
        </MathBlock>
      </Example>

      <Example title="Splitting Field of x³ - 2">
        <p>
          Over <InlineMath>{'\\mathbb{Q}'}</InlineMath>, the roots of <InlineMath>{'x^3 - 2'}</InlineMath> are
          <InlineMath>{'\\sqrt[3]{2}, \\sqrt[3]{2}\\omega, \\sqrt[3]{2}\\omega^2'}</InlineMath> where
          <InlineMath>{'\\omega = e^{2\\pi i/3}'}</InlineMath>.
        </p>
        <p className="mt-2">
          The splitting field is <InlineMath>{'\\mathbb{Q}(\\sqrt[3]{2}, \\omega)'}</InlineMath>, which has
          degree 6 over <InlineMath>{'\\mathbb{Q}'}</InlineMath>.
        </p>
      </Example>

      <Theorem title="Existence and Uniqueness"
        proof={
          <>
            <p>
              <strong>Existence:</strong> By induction on degree. If <InlineMath>f</InlineMath> splits, done.
              Otherwise, take an irreducible factor <InlineMath>p</InlineMath> of <InlineMath>f</InlineMath>
              and form <InlineMath>{'F_1 = F[x]/(p)'}</InlineMath>. In <InlineMath>{'F_1'}</InlineMath>,
              <InlineMath>f</InlineMath> has a root. Continue with the remaining factors.
            </p>
            <p className="mt-2">
              <strong>Uniqueness:</strong> Any two splitting fields are isomorphic over <InlineMath>F</InlineMath>
              by an extension of an isomorphism argument.
            </p>
          </>
        }
      >
        <p>
          For any field <InlineMath>F</InlineMath> and polynomial <InlineMath>{'f \\in F[x]'}</InlineMath>,
          a splitting field exists and is unique up to isomorphism over <InlineMath>F</InlineMath>.
        </p>
      </Theorem>

      <h3>Finite Fields</h3>

      <Theorem title="Structure of Finite Fields"
        proof={
          <>
            <p>
              If <InlineMath>F</InlineMath> is finite, its characteristic is some prime <InlineMath>p</InlineMath>
              (since <InlineMath>{'\\mathbb{Z}'}</InlineMath> can't embed in a finite ring). Thus
              <InlineMath>{'\\mathbb{Z}_p \\subseteq F'}</InlineMath>.
            </p>
            <p className="mt-2">
              <InlineMath>F</InlineMath> is a finite-dimensional vector space over <InlineMath>{'\\mathbb{Z}_p'}</InlineMath>,
              say dimension <InlineMath>n</InlineMath>. Then <InlineMath>{'|F| = p^n'}</InlineMath>.
            </p>
            <p className="mt-2">
              The multiplicative group <InlineMath>{'F^\\times'}</InlineMath> has order <InlineMath>{'p^n - 1'}</InlineMath>,
              so every element satisfies <InlineMath>{'x^{p^n} = x'}</InlineMath>. Thus <InlineMath>F</InlineMath>
              is the splitting field of <InlineMath>{'x^{p^n} - x'}</InlineMath> over <InlineMath>{'\\mathbb{Z}_p'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Every finite field has order <InlineMath>{'p^n'}</InlineMath> for some prime <InlineMath>p</InlineMath>
          and positive integer <InlineMath>n</InlineMath>. For each such <InlineMath>{'p^n'}</InlineMath>,
          there is a unique (up to isomorphism) field of that order, denoted <InlineMath>{'\\mathbb{F}_{p^n}'}</InlineMath>
          or <InlineMath>{'GF(p^n)'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Multiplicative Group of Finite Fields"
        proof={
          <>
            <p>
              The group <InlineMath>{'F^\\times'}</InlineMath> is a finite abelian group. For any divisor <InlineMath>d</InlineMath>
              of <InlineMath>{'|F^\\times|'}</InlineMath>, the equation <InlineMath>{'x^d = 1'}</InlineMath> has at most
              <InlineMath>d</InlineMath> solutions. If <InlineMath>{'F^\\times'}</InlineMath> were not cyclic,
              by the structure theorem for finite abelian groups, some <InlineMath>{'x^d = 1'}</InlineMath> would
              have more than <InlineMath>d</InlineMath> solutions. Contradiction.
            </p>
          </>
        }
      >
        <p>
          The multiplicative group <InlineMath>{'F^\\times'}</InlineMath> of any finite field <InlineMath>F</InlineMath>
          is cyclic.
        </p>
      </Theorem>

      <Example title="The Field F_8">
        <p>
          <InlineMath>{'\\mathbb{F}_8 = \\mathbb{F}_{2^3}'}</InlineMath> is the splitting field of <InlineMath>{'x^8 - x'}</InlineMath>
          over <InlineMath>{'\\mathbb{F}_2'}</InlineMath>.
        </p>
        <p className="mt-2">
          We can construct it as <InlineMath>{'\\mathbb{F}_2[x]/(x^3 + x + 1)'}</InlineMath> since
          <InlineMath>{'x^3 + x + 1'}</InlineMath> is irreducible over <InlineMath>{'\\mathbb{F}_2'}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>{'\\alpha'}</InlineMath> is a root, then <InlineMath>{'\\mathbb{F}_8 = \\{0, 1, \\alpha, \\alpha^2, \\alpha + 1, \\alpha^2 + 1, \\alpha^2 + \\alpha, \\alpha^2 + \\alpha + 1\\}'}</InlineMath>.
        </p>
      </Example>

      <h3>Formal Derivative</h3>

      <Definition title="Formal Derivative">
        <p>
          For <InlineMath>{'f(x) = \\sum_{i=0}^{n} a_i x^i \\in F[x]'}</InlineMath>, the <strong>formal derivative</strong> is
        </p>
        <MathBlock>
          {'f\'(x) = \\sum_{i=1}^{n} i \\cdot a_i x^{i-1}'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>i</InlineMath> means <InlineMath>{'1 + 1 + \\cdots + 1'}</InlineMath> (<InlineMath>i</InlineMath> times) in <InlineMath>F</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Properties of Formal Derivative"
        proof={
          <>
            <p>
              These follow from direct computation, using the same formal manipulations as in calculus.
            </p>
          </>
        }
      >
        <p>
          The formal derivative satisfies:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'(f + g)\' = f\' + g\''}</InlineMath></li>
          <li><InlineMath>{'(cf)\' = cf\''}</InlineMath> for <InlineMath>{'c \\in F'}</InlineMath></li>
          <li><InlineMath>{'(fg)\' = f\'g + fg\''}</InlineMath> (Product rule)</li>
          <li><InlineMath>{'(f^n)\' = nf^{n-1}f\''}</InlineMath> (Power rule)</li>
        </ul>
      </Theorem>

      <Theorem title="Multiple Roots and Derivatives"
        proof={
          <>
            <p>
              Write <InlineMath>{'f = (x - \\alpha)^m g'}</InlineMath> where <InlineMath>{'g(\\alpha) \\neq 0'}</InlineMath>.
              By the product rule:
            </p>
            <MathBlock>
              {'f\' = m(x - \\alpha)^{m-1}g + (x - \\alpha)^m g\' = (x - \\alpha)^{m-1}[mg + (x - \\alpha)g\']'}
            </MathBlock>
            <p className="mt-2">
              If <InlineMath>{'m \\geq 2'}</InlineMath>, then <InlineMath>{'(x - \\alpha)'}</InlineMath> divides both
              <InlineMath>f</InlineMath> and <InlineMath>{'f\''}</InlineMath>, so <InlineMath>{'(x - \\alpha) \\mid \\gcd(f, f\')'}</InlineMath>.
            </p>
            <p className="mt-2">
              Conversely, if <InlineMath>{'m = 1'}</InlineMath>, evaluating at <InlineMath>{'\\alpha'}</InlineMath>:
              <InlineMath>{'f\'(\\alpha) = g(\\alpha) \\neq 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          An element <InlineMath>{'\\alpha'}</InlineMath> is a multiple root of <InlineMath>f</InlineMath> if and only if
          it is a common root of <InlineMath>f</InlineMath> and <InlineMath>{'f\''}</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently: <InlineMath>f</InlineMath> has no repeated roots in its splitting field iff <InlineMath>{'\\gcd(f, f\') = 1'}</InlineMath>.
        </p>
      </Theorem>

      <h3>Separability</h3>

      <Definition title="Separable Polynomial">
        <p>
          A polynomial <InlineMath>{'f \\in F[x]'}</InlineMath> is <strong>separable</strong> if it has no
          repeated roots in its splitting field. Equivalently, <InlineMath>{'\\gcd(f, f\') = 1'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Irreducibles over Perfect Fields"
        proof={
          <>
            <p>
              If <InlineMath>f</InlineMath> is irreducible and inseparable, then <InlineMath>{'f\' = 0'}</InlineMath>
              (since <InlineMath>{'\\gcd(f, f\')'}</InlineMath> is a proper divisor of <InlineMath>f</InlineMath>, but
              <InlineMath>f</InlineMath> is irreducible).
            </p>
            <p className="mt-2">
              <InlineMath>{'f\' = 0'}</InlineMath> means all coefficients <InlineMath>{'i \\cdot a_i = 0'}</InlineMath>.
              In characteristic 0, this forces <InlineMath>{'a_i = 0'}</InlineMath> for <InlineMath>{'i > 0'}</InlineMath>,
              so <InlineMath>f</InlineMath> is constant—contradiction.
            </p>
            <p className="mt-2">
              In characteristic <InlineMath>p</InlineMath>, <InlineMath>{'f\' = 0'}</InlineMath> means <InlineMath>f</InlineMath>
              is a polynomial in <InlineMath>{'x^p'}</InlineMath>. If <InlineMath>F</InlineMath> is perfect, every element
              has a <InlineMath>p</InlineMath>-th root, so <InlineMath>{'f = g^p'}</InlineMath> for some <InlineMath>g</InlineMath>—contradiction.
            </p>
          </>
        }
      >
        <p>
          Over a perfect field (characteristic 0 or finite), every irreducible polynomial is separable.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Inseparable Polynomials:</strong> Over imperfect fields (like <InlineMath>{'\\mathbb{F}_p(t)'}</InlineMath>),
        inseparable polynomials exist. For example, <InlineMath>{'x^p - t \\in \\mathbb{F}_p(t)[x]'}</InlineMath> is
        irreducible but its derivative is 0, so it has a repeated root in its splitting field.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> A splitting field is the smallest field where a polynomial factors
        completely into linear factors. Finite fields <InlineMath>{'\\mathbb{F}_{p^n}'}</InlineMath> are
        characterized as splitting fields of <InlineMath>{'x^{p^n} - x'}</InlineMath>. The formal derivative
        detects repeated roots via <InlineMath>{'\\gcd(f, f\')'}</InlineMath>. Over perfect fields, irreducible
        polynomials are always separable.
      </Callout>
    </LessonLayout>
  );
}
