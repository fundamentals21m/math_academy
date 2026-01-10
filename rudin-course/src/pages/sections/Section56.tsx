import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <h2 className="text-2xl font-semibold mb-4">The Algebraic Completeness of the Complex Field</h2>

      <p className="mb-4">
        We prove the Fundamental Theorem of Algebra: every nonconstant polynomial with
        complex coefficients has at least one complex root. This remarkable result
        shows that <InlineMath>{'\\mathbb{C}'}</InlineMath> is algebraically closed.
      </p>

      <Theorem
        title="8.18 - Fundamental Theorem of Algebra"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'P(z) = a_n z^n + a_{n-1} z^{n-1} + \\cdots + a_1 z + a_0'}</InlineMath> with <InlineMath>{'a_n \\neq 0'}</InlineMath> and <InlineMath>{'n \\geq 1'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 1:</strong> Show <InlineMath>{'|P(z)| \\to \\infty'}</InlineMath> as <InlineMath>{'|z| \\to \\infty'}</InlineMath>.
              We have
            </p>
            <MathBlock>{'|P(z)| = |a_n||z|^n \\left| 1 + \\frac{a_{n-1}}{a_n z} + \\cdots + \\frac{a_0}{a_n z^n} \\right| \\geq \\frac{|a_n|}{2} |z|^n'}</MathBlock>
            <p className="mb-3">
              for <InlineMath>{'|z|'}</InlineMath> large enough. Thus <InlineMath>{'|P(z)| \\to \\infty'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 2:</strong> Since <InlineMath>{'|P|'}</InlineMath> is continuous
              on <InlineMath>{'\\mathbb{C}'}</InlineMath> and <InlineMath>{'|P(z)| \\to \\infty'}</InlineMath> as <InlineMath>{'|z| \\to \\infty'}</InlineMath>,
              the function <InlineMath>{'|P|'}</InlineMath> attains its minimum value <InlineMath>{'\\mu'}</InlineMath> at
              some point <InlineMath>{'z_0 \\in \\mathbb{C}'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 3:</strong> We show <InlineMath>{'\\mu = 0'}</InlineMath>, i.e., <InlineMath>{'P(z_0) = 0'}</InlineMath>.
            </p>
            <p className="mb-3">
              Suppose <InlineMath>{'P(z_0) \\neq 0'}</InlineMath>. Put <InlineMath>{'Q(z) = P(z + z_0)/P(z_0)'}</InlineMath>.
              Then <InlineMath>{'Q(0) = 1'}</InlineMath> and <InlineMath>{'|Q(z)| \\geq 1'}</InlineMath> for all <InlineMath>{'z'}</InlineMath>.
            </p>
            <p className="mb-3">
              Write <InlineMath>{'Q(z) = 1 + b_k z^k + \\cdots + b_n z^n'}</InlineMath> where <InlineMath>{'b_k \\neq 0'}</InlineMath> is
              the first nonzero coefficient after the constant term.
            </p>
            <p className="mb-3">
              Choose <InlineMath>{'r > 0'}</InlineMath> small and <InlineMath>{'\\theta'}</InlineMath> such
              that <InlineMath>{'b_k r^k e^{ik\\theta} = -|b_k| r^k'}</InlineMath>.
              For <InlineMath>{'z = re^{i\\theta}'}</InlineMath>:
            </p>
            <MathBlock>{'|Q(z)| \\leq |1 - |b_k|r^k| + O(r^{k+1}) < 1'}</MathBlock>
            <p>
              for small enough <InlineMath>{'r'}</InlineMath>. This contradicts <InlineMath>{'|Q| \\geq 1'}</InlineMath>.
              Hence <InlineMath>{'P(z_0) = 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Every polynomial <InlineMath>{'P(z) = a_n z^n + a_{n-1} z^{n-1} + \\cdots + a_0'}</InlineMath> with
          complex coefficients and <InlineMath>{'n \\geq 1'}</InlineMath>, <InlineMath>{'a_n \\neq 0'}</InlineMath>,
          has at least one root in <InlineMath>{'\\mathbb{C}'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Historical Note">
        <p>
          The Fundamental Theorem of Algebra was first proved by Gauss in 1799. He gave
          four different proofs during his lifetime. The theorem is called "algebraic"
          but all known proofs use analysis in some form.
        </p>
      </Callout>

      <Theorem
        title="Corollary - Complete Factorization"
        proof={
          <>
            <p className="mb-3">
              By the Fundamental Theorem, <InlineMath>{'P'}</InlineMath> has a root <InlineMath>{'z_1'}</InlineMath>.
              By polynomial division, <InlineMath>{'P(z) = (z - z_1)Q(z)'}</InlineMath> where <InlineMath>{'Q'}</InlineMath> has
              degree <InlineMath>{'n - 1'}</InlineMath>.
            </p>
            <p>
              By induction, <InlineMath>{'Q'}</InlineMath> factors into linear terms, giving the result.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Every polynomial of degree <InlineMath>{'n \\geq 1'}</InlineMath> with complex
          coefficients can be written as
        </p>
        <MathBlock>{'P(z) = a_n(z - z_1)(z - z_2) \\cdots (z - z_n)'}</MathBlock>
        <p>
          where <InlineMath>{'z_1, \\ldots, z_n'}</InlineMath> are the roots (not necessarily distinct).
        </p>
      </Theorem>

      <Definition title="Algebraic Closure">
        <p className="mb-3">
          A field <InlineMath>{'F'}</InlineMath> is <em>algebraically closed</em> if every nonconstant
          polynomial with coefficients in <InlineMath>{'F'}</InlineMath> has a root in <InlineMath>{'F'}</InlineMath>.
        </p>
        <p>
          The Fundamental Theorem says that <InlineMath>{'\\mathbb{C}'}</InlineMath> is algebraically closed.
          In contrast, <InlineMath>{'\\mathbb{R}'}</InlineMath> is not: <InlineMath>{'x^2 + 1 = 0'}</InlineMath> has no
          real roots.
        </p>
      </Definition>

      <Example title="Factoring Real Polynomials">
        <p className="mb-3">
          Consider <InlineMath>{'P(x) = x^4 + 1'}</InlineMath> over <InlineMath>{'\\mathbb{R}'}</InlineMath>.
          This has no real roots (since <InlineMath>{'x^4 + 1 > 0'}</InlineMath> for all real <InlineMath>{'x'}</InlineMath>).
        </p>
        <p className="mb-3">
          The complex roots are the fourth roots of <InlineMath>{'-1 = e^{i\\pi}'}</InlineMath>:
        </p>
        <MathBlock>{'z_k = e^{i(\\pi + 2\\pi k)/4} = e^{i\\pi(2k+1)/4}, \\quad k = 0, 1, 2, 3'}</MathBlock>
        <p className="mb-3">
          These are <InlineMath>{'\\frac{1}{\\sqrt{2}}(1 + i), \\frac{1}{\\sqrt{2}}(-1 + i), \\frac{1}{\\sqrt{2}}(-1 - i), \\frac{1}{\\sqrt{2}}(1 - i)'}</InlineMath>.
        </p>
        <p>
          Pairing conjugate roots gives the real factorization:
        </p>
        <MathBlock>{'x^4 + 1 = (x^2 + \\sqrt{2}x + 1)(x^2 - \\sqrt{2}x + 1)'}</MathBlock>
      </Example>

      <Theorem
        title="Factorization of Real Polynomials"
        proof={
          <p>
            Complex roots of real polynomials come in conjugate pairs (if <InlineMath>{'P(z) = 0'}</InlineMath> and
            <InlineMath>{'P'}</InlineMath> has real coefficients, then <InlineMath>{'P(\\bar{z}) = \\overline{P(z)} = 0'}</InlineMath>).
            Pair conjugate roots to form real quadratic factors.
          </p>
        }
      >
        <p>
          Every polynomial with real coefficients can be factored over <InlineMath>{'\\mathbb{R}'}</InlineMath> into
          linear factors and irreducible quadratic factors (quadratics with negative discriminant).
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Every nonconstant polynomial has a complex root (Fundamental Theorem of Algebra)</li>
        <li>Every degree-<InlineMath>{'n'}</InlineMath> polynomial factors completely into <InlineMath>{'n'}</InlineMath> linear factors over <InlineMath>{'\\mathbb{C}'}</InlineMath></li>
        <li><InlineMath>{'\\mathbb{C}'}</InlineMath> is algebraically closed; <InlineMath>{'\\mathbb{R}'}</InlineMath> is not</li>
        <li>The proof uses the fact that <InlineMath>{'|P(z)|'}</InlineMath> attains a minimum</li>
        <li>Real polynomials factor into linear and irreducible quadratic factors over <InlineMath>{'\\mathbb{R}'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
