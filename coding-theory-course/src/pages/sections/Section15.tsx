import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <p>
        In this section, we introduce one of the most important and elegant classes of
        linear codes: <strong>cyclic codes</strong>. These codes are closed under cyclic
        shifts and possess a beautiful algebraic structure that makes them particularly
        amenable to efficient encoding and decoding.
      </p>

      <Definition title="Cyclic Code">
        <p>
          Let <InlineMath>{`F = \text{GF}(q)`}</InlineMath> be a field of <InlineMath>{`q`}</InlineMath> elements
          and <InlineMath>{`V(n, q)`}</InlineMath> be the vector space of all vectors of
          length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`F`}</InlineMath>. We suppose
          that <InlineMath>{`\\gcd(n, q) = 1`}</InlineMath>.
        </p>
        <p className="mt-2">
          A linear code <InlineMath>{`\mathscr{C}`}</InlineMath> of length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`F`}</InlineMath> is
          called <strong>cyclic</strong> if any cyclic shift of a code word is again a code word.
          That is, if <InlineMath>{`(a_0, a_1, \\ldots, a_{n-1})`}</InlineMath> is
          in <InlineMath>{`\mathscr{C}`}</InlineMath>, then so is <InlineMath>{`(a_{n-1}, a_0, \\ldots, a_{n-2})`}</InlineMath>.
        </p>
      </Definition>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">Algebraic Description of Cyclic Codes</h2>

      <p>
        There is a beautiful algebraic description of cyclic codes that connects them to
        polynomial rings. To obtain this description, we define a map:
      </p>

      <MathBlock>{`\\theta: V(n, q) \\to F[X]/\\langle X^n - 1 \\rangle`}</MathBlock>

      <p>
        where <InlineMath>{`\\langle X^n - 1 \\rangle`}</InlineMath> denotes the ideal of the
        polynomial ring <InlineMath>{`F[X]`}</InlineMath> generated
        by <InlineMath>{`X^n - 1`}</InlineMath>, defined by:
      </p>

      <MathBlock>{`\\theta(a_0, a_1, \\ldots, a_{n-1}) = a_0 + a_1 X + \\cdots + a_{n-1}X^{n-1} + \\langle X^n - 1 \\rangle`}</MathBlock>

      <p>
        Observe that <InlineMath>{`F[X]/\\langle X^n - 1 \\rangle`}</InlineMath> is also a vector
        space over <InlineMath>{`F`}</InlineMath> and <InlineMath>{`\\theta`}</InlineMath> is a vector
        space isomorphism.
      </p>

      <Callout type="info" title="Key Insight">
        <p>
          The cyclic shift of a code word <InlineMath>{`(a_0, a_1, \\ldots, a_{n-1})`}</InlineMath> corresponds
          to multiplication by <InlineMath>{`X`}</InlineMath> in the quotient
          ring <InlineMath>{`F[X]/\\langle X^n - 1 \\rangle`}</InlineMath>. This is because:
        </p>
        <MathBlock>{`X(a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}) \\equiv a_{n-1} + a_0X + \\cdots + a_{n-2}X^{n-1} \\pmod{X^n - 1}`}</MathBlock>
      </Callout>

      <p className="mt-4">
        From this observation, it follows that <InlineMath>{`\mathscr{C}`}</InlineMath> is a cyclic
        code if and only if <InlineMath>{`\theta(\mathscr{C})`}</InlineMath> is an <strong>ideal</strong> in
        the quotient ring <InlineMath>{`F[X]/\\langle X^n - 1 \\rangle`}</InlineMath>.
      </p>

      <Definition title="Cyclic Code as Ideal">
        <p>
          Identifying the element <InlineMath>{`(a_0, a_1, \\ldots, a_{n-1})`}</InlineMath> in <InlineMath>{`\mathscr{C}`}</InlineMath> with
          the corresponding polynomial <InlineMath>{`a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}`}</InlineMath> of
          degree at most <InlineMath>{`n-1`}</InlineMath>, we may regard a cyclic
          code <InlineMath>{`\mathscr{C}`}</InlineMath> of length <InlineMath>{`n`}</InlineMath> as
          an ideal of the quotient ring <InlineMath>{`F[X]/\\langle X^n - 1 \\rangle`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Structure of Cyclic Codes"
        proof={
          <>
            <p>
              Let <InlineMath>{`I = \\langle X^n - 1 \\rangle`}</InlineMath>.
              Let <InlineMath>{`N = \\{\\deg a(X) : a(X) + I \\in \\mathscr{C}\\}`}</InlineMath>. The set of
              non-negative integers being well-ordered, <InlineMath>{`N`}</InlineMath> has a least element.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`g(X)`}</InlineMath> be a polynomial of minimal degree such
              that <InlineMath>{`g(X) + I \in \mathscr{C}`}</InlineMath>. Since <InlineMath>{`F`}</InlineMath> is
              a field, we can take <InlineMath>{`g(X)`}</InlineMath> to be monic. If <InlineMath>{`g'(X)`}</InlineMath> is
              another monic polynomial of minimal degree in <InlineMath>{`\mathscr{C}`}</InlineMath>,
              then <InlineMath>{`g(X) - g'(X) + I \in \mathscr{C}`}</InlineMath> with smaller degree,
              giving a contradiction. Hence <InlineMath>{`g(X)`}</InlineMath> is unique.
            </p>
            <p className="mt-2">
              For any <InlineMath>{`a(X) + I \in \mathscr{C}`}</InlineMath>, by the division algorithm,
              we can write <InlineMath>{`a(X) = b(X)g(X) + r(X)`}</InlineMath> where <InlineMath>{`r(X) = 0`}</InlineMath> or <InlineMath>\\deg r(X) {'<'} \\deg g(X)</InlineMath>.
              If <InlineMath>{`r(X) \\neq 0`}</InlineMath>, then <InlineMath>{`r(X) + I = a(X) - b(X)g(X) + I \in \mathscr{C}`}</InlineMath>,
              contradicting the minimality of <InlineMath>{`\\deg g(X)`}</InlineMath>. Hence <InlineMath>{`r(X) = 0`}</InlineMath> and <InlineMath>{`g(X)`}</InlineMath> generates <InlineMath>{`\mathscr{C}`}</InlineMath>.
            </p>
            <p className="mt-2">
              To show <InlineMath>{`g(X) | (X^n - 1)`}</InlineMath>, write <InlineMath>{`X^n - 1 = a(X)g(X) + r(X)`}</InlineMath> with <InlineMath>\\deg r(X) {'<'} \\deg g(X)</InlineMath>.
              Then <InlineMath>{`r(X) + I = -a(X)g(X) + I \in \mathscr{C}`}</InlineMath>, again contradicting minimality
              unless <InlineMath>{`r(X) = 0`}</InlineMath>.
            </p>
            <p className="mt-2">
              The dimension claim follows from the fact that <InlineMath>{`g(X), Xg(X), \\ldots, X^{n-r-1}g(X)`}</InlineMath> are
              linearly independent and span <InlineMath>{`\mathscr{C}`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\mathscr{C}`}</InlineMath> be a non-zero cyclic code of
          length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`F`}</InlineMath>. Then:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            There is a unique monic polynomial <InlineMath>{`g(X)`}</InlineMath> of minimal degree
            in <InlineMath>{`\mathscr{C}`}</InlineMath> which generates it. This is called
            the <strong>generator polynomial</strong>.
          </li>
          <li>
            <InlineMath>{`g(X)`}</InlineMath> is a factor of <InlineMath>{`X^n - 1`}</InlineMath>.
          </li>
          <li>
            Let <InlineMath>{`\\deg g(X) = r`}</InlineMath>. Then the dimension
            of <InlineMath>{`\mathscr{C}`}</InlineMath> is <InlineMath>{`n - r`}</InlineMath> and
            any <InlineMath>{`a(X) \in \mathscr{C}`}</InlineMath> has a unique representation
            of the form <InlineMath>{`a(X) = b(X)g(X)`}</InlineMath>, where <InlineMath>\\deg b(X) {'<'} n - r</InlineMath>.
          </li>
          <li>
            If <InlineMath>{`g(X) = g_0 + g_1X + \\cdots + g_rX^r`}</InlineMath>, then
            the <InlineMath>{`(n-r) \\times n`}</InlineMath> matrix:
            <MathBlock>{`\\mathbf{G} = \\begin{pmatrix} g_0 & g_1 & \\cdots & g_r & 0 & \\cdots & 0 \\\\ 0 & g_0 & \\cdots & g_{r-1} & g_r & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & g_0 & g_1 & \\cdots & g_r \\end{pmatrix}`}</MathBlock>
            is a generator matrix of <InlineMath>{`\mathscr{C}`}</InlineMath>.
          </li>
        </ol>
      </Theorem>

      <Example title="Binary Cyclic Codes of Length 7">
        <p>
          Over the binary field <InlineMath>{`\mathbb{B}`}</InlineMath>, we have the factorization:
        </p>
        <MathBlock>
          {`X^7 + 1 = (X + 1)(X^3 + X + 1)(X^3 + X^2 + 1)`}
        </MathBlock>
        <p className="mt-2">
          Therefore, the polynomial codes generated by <InlineMath>{`X^3 + X + 1`}</InlineMath> and <InlineMath>{`X^3 + X^2 + 1`}</InlineMath> are
          binary cyclic codes of length 7. Each has dimension <InlineMath>{`7 - 3 = 4`}</InlineMath>.
        </p>
      </Example>

      <Example title="Not Every Polynomial Code is Cyclic">
        <p>
          Consider the binary polynomial code of length 5 generated by <InlineMath>{`1 + X + X^3`}</InlineMath>.
          The code words are:
        </p>
        <div className="my-4 font-mono text-sm bg-dark-800/50 p-4 rounded-lg">
          <p>1(1 + X + X^3) → 1 1 0 1 0</p>
          <p>X(1 + X + X^3) → 0 1 1 0 1</p>
          <p>(1 + X)(1 + X + X^3) → 1 0 1 1 1</p>
          <p>0(1 + X + X^3) → 0 0 0 0 0</p>
        </div>
        <p>
          Notice that the cyclic shift of <InlineMath>{`11010`}</InlineMath> is <InlineMath>{`01101`}</InlineMath>, which is
          in the code, but the cyclic shift of <InlineMath>{`01101`}</InlineMath> is <InlineMath>{`10110`}</InlineMath>,
          which is <em>not</em> in the code. Hence this is not a cyclic code.
        </p>
        <p className="mt-2">
          The reason is that <InlineMath>{`1 + X + X^3`}</InlineMath> does not divide <InlineMath>{`X^5 - 1`}</InlineMath>.
        </p>
      </Example>

      <Example title="Binary Cyclic Code of Length 15">
        <p>
          The polynomial <InlineMath>{`X^4 + X^3 + 1`}</InlineMath> is irreducible over <InlineMath>{`\mathbb{B}`}</InlineMath> and
          is a divisor of <InlineMath>{`X^{15} - 1`}</InlineMath>. This can be verified by noting that:
        </p>
        <MathBlock>{`K = \\mathbb{B}[X]/\\langle X^4 + X^3 + 1 \\rangle`}</MathBlock>
        <p className="mt-2">
          is a field of order 16, and <InlineMath>{`X^4 + X^3 + 1`}</InlineMath> is the minimal polynomial
          of <InlineMath>{`\\alpha = X + \\langle X^4 + X^3 + 1 \\rangle`}</InlineMath>.
        </p>
        <p className="mt-2">
          Since every non-zero element of <InlineMath>{`K`}</InlineMath> is a root of <InlineMath>{`X^{15} - 1`}</InlineMath>,
          the minimal polynomial <InlineMath>{`X^4 + X^3 + 1`}</InlineMath> divides <InlineMath>{`X^{15} - 1`}</InlineMath>.
        </p>
        <p className="mt-2">
          Therefore, the ideal generated by <InlineMath>{`X^4 + X^3 + 1`}</InlineMath> is a cyclic code
          of length 15 with dimension <InlineMath>{`15 - 4 = 11`}</InlineMath>.
        </p>
      </Example>

      <Callout type="note" title="Connection to Ring Theory">
        <p>
          The ring <InlineMath>{`R_n = F[X]/\\langle X^n - 1 \\rangle`}</InlineMath> is called
          the <strong>ambient ring</strong> for cyclic codes of length <InlineMath>{`n`}</InlineMath>.
          Each cyclic code corresponds to an ideal in <InlineMath>{`R_n`}</InlineMath>, and the
          ideals of <InlineMath>{`R_n`}</InlineMath> are in one-to-one correspondence with
          divisors of <InlineMath>{`X^n - 1`}</InlineMath> in <InlineMath>{`F[X]`}</InlineMath>.
        </p>
      </Callout>
    </LessonLayout>
  );
}
