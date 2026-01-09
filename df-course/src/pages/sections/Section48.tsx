import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <h2>Grobner Bases</h2>

      <p>
        Grobner bases are a powerful computational tool for working with polynomial ideals in
        multiple variables. They generalize the Euclidean algorithm to multivariate settings
        and provide algorithms for solving systems of polynomial equations, computing ideal
        membership, and more.
      </p>

      <h3>Monomial Orders</h3>

      <Definition title="Monomial Order">
        <p>
          A <strong>monomial order</strong> on <InlineMath>{'F[x_1, \\ldots, x_n]'}</InlineMath> is a total
          order <InlineMath>{'\\prec'}</InlineMath> on monomials <InlineMath>{'x^\\alpha = x_1^{\\alpha_1} \\cdots x_n^{\\alpha_n}'}</InlineMath>
          satisfying:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{'1 \\preceq x^\\alpha'}</InlineMath> for all monomials</li>
          <li>If <InlineMath>{'x^\\alpha \\prec x^\\beta'}</InlineMath>, then <InlineMath>{'x^\\alpha x^\\gamma \\prec x^\\beta x^\\gamma'}</InlineMath> for all <InlineMath>{'x^\\gamma'}</InlineMath></li>
        </ol>
      </Definition>

      <Definition title="Common Monomial Orders">
        <p>
          <strong>Lexicographic (lex):</strong> <InlineMath>{'x^\\alpha \\prec_{lex} x^\\beta'}</InlineMath> if
          the leftmost nonzero entry of <InlineMath>{'\\alpha - \\beta'}</InlineMath> is negative.
        </p>
        <p className="mt-2">
          <strong>Graded lex (grlex):</strong> Compare total degree first, then use lex.
        </p>
        <p className="mt-2">
          <strong>Graded reverse lex (grevlex):</strong> Compare total degree first, then compare
          the rightmost nonzero entry of <InlineMath>{'\\alpha - \\beta'}</InlineMath> (positive wins).
        </p>
      </Definition>

      <Example title="Comparing Monomials">
        <p>
          In <InlineMath>{'F[x, y, z]'}</InlineMath>, compare <InlineMath>{'x^2y'}</InlineMath> and <InlineMath>{'xy^2z'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Lex:</strong> <InlineMath>{'x^2y \\succ xy^2z'}</InlineMath> (first exponent: 2 vs 1)</li>
          <li><strong>Grlex:</strong> <InlineMath>{'xy^2z \\succ x^2y'}</InlineMath> (total degree 4 vs 3)</li>
          <li><strong>Grevlex:</strong> <InlineMath>{'xy^2z \\succ x^2y'}</InlineMath> (total degree 4 vs 3)</li>
        </ul>
      </Example>

      <h3>Leading Terms and Division</h3>

      <Definition title="Leading Term">
        <p>
          Given a monomial order and a polynomial <InlineMath>{'f \\neq 0'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'\\text{LM}(f)'}</InlineMath> = leading monomial (largest under the order)</li>
          <li><InlineMath>{'\\text{LC}(f)'}</InlineMath> = leading coefficient (coefficient of <InlineMath>{'\\text{LM}(f)'}</InlineMath>)</li>
          <li><InlineMath>{'\\text{LT}(f) = \\text{LC}(f) \\cdot \\text{LM}(f)'}</InlineMath> = leading term</li>
        </ul>
      </Definition>

      <Theorem title="Multivariate Division Algorithm"
        proof={
          <>
            <p>
              The algorithm proceeds by subtracting multiples of the <InlineMath>{'f_i'}</InlineMath> to cancel
              the leading term of the current remainder. When no <InlineMath>{'\\text{LT}(f_i)'}</InlineMath> divides
              the leading term, move that term to the remainder and continue.
            </p>
          </>
        }
      >
        <p>
          Given <InlineMath>{'f, f_1, \\ldots, f_s \\in F[x_1, \\ldots, x_n]'}</InlineMath> and a monomial order,
          there exist <InlineMath>{'q_1, \\ldots, q_s, r'}</InlineMath> such that:
        </p>
        <MathBlock>
          {'f = q_1 f_1 + q_2 f_2 + \\cdots + q_s f_s + r'}
        </MathBlock>
        <p className="mt-2">
          where no term of <InlineMath>r</InlineMath> is divisible by any <InlineMath>{'\\text{LT}(f_i)'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Non-Uniqueness:</strong> Unlike the one-variable case, the remainder <InlineMath>r</InlineMath>
        depends on the order of the <InlineMath>{'f_i'}</InlineMath>! This motivates Grobner bases.
      </Callout>

      <h3>Grobner Bases</h3>

      <Definition title="Grobner Basis">
        <p>
          Let <InlineMath>I</InlineMath> be an ideal in <InlineMath>{'F[x_1, \\ldots, x_n]'}</InlineMath>.
          A finite subset <InlineMath>{'G = \\{g_1, \\ldots, g_t\\}'}</InlineMath> of <InlineMath>I</InlineMath>
          is a <strong>Grobner basis</strong> for <InlineMath>I</InlineMath> if:
        </p>
        <MathBlock>
          {'\\langle \\text{LT}(g_1), \\ldots, \\text{LT}(g_t) \\rangle = \\langle \\text{LT}(I) \\rangle'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{'\\text{LT}(I) = \\{\\text{LT}(f) : f \\in I, f \\neq 0\\}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Properties of Grobner Bases"
        proof={
          <>
            <p>
              Property (1): The leading term of any <InlineMath>{'f \\in I'}</InlineMath> is in the ideal
              generated by leading terms of <InlineMath>G</InlineMath>, so division by <InlineMath>G</InlineMath>
              reduces <InlineMath>{'\\text{LT}(f)'}</InlineMath>. Continue until remainder is 0.
            </p>
            <p className="mt-2">
              Property (2): If <InlineMath>{'f \\in I'}</InlineMath>, remainder is 0 by (1). Conversely,
              <InlineMath>{'f = q_1 g_1 + \\cdots + q_t g_t + r = 0'}</InlineMath> implies <InlineMath>{'f \\in I'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>G</InlineMath> be a Grobner basis for <InlineMath>I</InlineMath>. Then:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li>Every <InlineMath>{'f \\in I'}</InlineMath> reduces to 0 when divided by <InlineMath>G</InlineMath></li>
          <li><InlineMath>{'f \\in I'}</InlineMath> iff the remainder of <InlineMath>f</InlineMath> divided by <InlineMath>G</InlineMath> is 0</li>
          <li>The remainder is unique (independent of division order)</li>
        </ol>
      </Theorem>

      <h3>Buchberger's Algorithm</h3>

      <Definition title="S-Polynomial">
        <p>
          For nonzero polynomials <InlineMath>f, g</InlineMath>, let <InlineMath>{'\\gamma = \\text{lcm}(\\text{LM}(f), \\text{LM}(g))'}</InlineMath>.
          The <strong>S-polynomial</strong> is:
        </p>
        <MathBlock>
          {'S(f, g) = \\frac{\\gamma}{\\text{LT}(f)} \\cdot f - \\frac{\\gamma}{\\text{LT}(g)} \\cdot g'}
        </MathBlock>
        <p className="mt-2">
          This is designed to cancel the leading terms.
        </p>
      </Definition>

      <Theorem title="Buchberger's Criterion"
        proof={
          <>
            <p>
              The S-polynomial tests whether leading term cancellations create new obstructions.
              If all S-polynomials reduce to 0, no such obstructions exist.
            </p>
          </>
        }
      >
        <p>
          A basis <InlineMath>{'G = \\{g_1, \\ldots, g_t\\}'}</InlineMath> is a Grobner basis iff for all pairs
          <InlineMath>{'i \\neq j'}</InlineMath>, the S-polynomial <InlineMath>{'S(g_i, g_j)'}</InlineMath> reduces
          to 0 when divided by <InlineMath>G</InlineMath>.
        </p>
      </Theorem>

      <Example title="Computing a Grobner Basis">
        <p>
          Find a Grobner basis for <InlineMath>{'I = (f_1, f_2)'}</InlineMath> where <InlineMath>{'f_1 = x^2y - 1'}</InlineMath>
          and <InlineMath>{'f_2 = xy^2 - x'}</InlineMath>, using grlex with <InlineMath>{'x \\succ y'}</InlineMath>.
        </p>
        <p className="mt-2">
          <InlineMath>{'\\text{LT}(f_1) = x^2y'}</InlineMath>, <InlineMath>{'\\text{LT}(f_2) = xy^2'}</InlineMath>.
        </p>
        <p className="mt-2">
          <InlineMath>{'S(f_1, f_2) = y \\cdot f_1 - x \\cdot f_2 = x^2y^2 - y - x^2y^2 + x^2 = x^2 - y'}</InlineMath>.
        </p>
        <p className="mt-2">
          Add <InlineMath>{'f_3 = x^2 - y'}</InlineMath>. Compute more S-polynomials and reduce. Eventually:
        </p>
        <MathBlock>
          {'G = \\{x^2 - y, xy - 1, y^2 - x\\}'}
        </MathBlock>
      </Example>

      <h3>Applications</h3>

      <Theorem title="Solving Polynomial Systems"
        proof={
          <>
            <p>
              With lex order <InlineMath>{'x_1 \\succ x_2 \\succ \\cdots \\succ x_n'}</InlineMath>, a Grobner
              basis has "triangular" structure: the last variable appears alone in some polynomial,
              enabling back-substitution.
            </p>
          </>
        }
      >
        <p>
          To find common zeros of polynomials <InlineMath>{'f_1, \\ldots, f_s'}</InlineMath>:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li>Compute a Grobner basis <InlineMath>G</InlineMath> for <InlineMath>{'(f_1, \\ldots, f_s)'}</InlineMath> with lex order</li>
          <li>The Grobner basis often has an "elimination" structure that allows solving variable by variable</li>
        </ol>
      </Theorem>

      <Example title="Solving a System">
        <p>
          Solve: <InlineMath>{'x^2 + y^2 = 1'}</InlineMath>, <InlineMath>{'x^2 - y = 0'}</InlineMath>.
        </p>
        <p className="mt-2">
          With <InlineMath>{'x \\succ y'}</InlineMath>, compute Grobner basis: <InlineMath>{'\\{x^2 - y, y^2 + y - 1\\}'}</InlineMath>.
        </p>
        <p className="mt-2">
          From <InlineMath>{'y^2 + y - 1 = 0'}</InlineMath>: <InlineMath>{'y = \\frac{-1 \\pm \\sqrt{5}}{2}'}</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>{'x^2 = y'}</InlineMath>, so <InlineMath>{'x = \\pm\\sqrt{y}'}</InlineMath> (real for <InlineMath>{'y = \\frac{-1 + \\sqrt{5}}{2}'}</InlineMath>).
        </p>
      </Example>

      <Callout type="info">
        <strong>Computational Complexity:</strong> Grobner basis computation can be doubly exponential
        in the worst case. However, for many practical problems, especially with grevlex order,
        it is quite efficient. Modern implementations use sophisticated optimizations.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> Grobner bases provide a canonical form for polynomial ideals that
        enables computation. Given a monomial order, Buchberger's algorithm computes a Grobner basis
        by systematically reducing S-polynomials. Applications include ideal membership testing,
        solving polynomial systems, and computing intersections and quotients of ideals.
      </Callout>
    </LessonLayout>
  );
}
