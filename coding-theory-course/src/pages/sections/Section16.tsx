import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <p>
        Every cyclic code has two important associated polynomials: the generator
        polynomial and the check polynomial. In this section, we study the check
        polynomial and its role in error detection.
      </p>

      <Definition title="Check Polynomial">
        <p>
          Let <InlineMath>{`\mathscr{C}`}</InlineMath> be a cyclic code of
          length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`F`}</InlineMath> with generator
          polynomial <InlineMath>{`g(X)`}</InlineMath> of degree <InlineMath>{`r`}</InlineMath>.
          Let <InlineMath>{`h(X)`}</InlineMath> be the polynomial of degree <InlineMath>{`n - r`}</InlineMath> with:
        </p>
        <MathBlock>
          {`X^n - 1 = g(X)h(X)`}
        </MathBlock>
        <p className="mt-2">
          Then <InlineMath>{`h(X)`}</InlineMath> is called the <strong>check polynomial</strong> of
          the code <InlineMath>{`\mathscr{C}`}</InlineMath>.
        </p>
      </Definition>

      <p>
        The check polynomial gets its name from the following observation: any code
        word <InlineMath>{`c(X) + I`}</InlineMath> is of the form:
      </p>
      <MathBlock>
        {`c(X) + I = a(X)g(X) + I`}
      </MathBlock>
      <p>
        where <InlineMath>{`I = \\langle X^n - 1 \\rangle`}</InlineMath>. Therefore:
      </p>
      <MathBlock>{`c(X)h(X) = a(X)g(X)h(X) = a(X)(X^n - 1) \\equiv 0 \\pmod{X^n - 1}`}</MathBlock>
      <p>
        That is, <InlineMath>{`c(X)h(X) = 0`}</InlineMath> in <InlineMath>{`F[X]/I`}</InlineMath>. This
        provides a check that <InlineMath>{`c(X)`}</InlineMath> is indeed a code word.
      </p>

      <Example title="Check Polynomial for Binary Cyclic Code of Length 7">
        <p>
          Let <InlineMath>{`\mathscr{C}`}</InlineMath> be a binary cyclic code of length 7 defined
          by the generator polynomial:
        </p>
        <MathBlock>
          {`g(X) = X^3 + X + 1`}
        </MathBlock>
        <p className="mt-2">
          Then the check polynomial is:
        </p>
        <MathBlock>{`h(X) = \\frac{X^7 - 1}{X^3 + X + 1} = (X + 1)(X^3 + X^2 + 1) = X^4 + X^2 + X + 1`}</MathBlock>
        <p className="mt-2">
          Let <InlineMath>{`c(X) = c_0 + c_1X + \\cdots + c_6X^6`}</InlineMath> be a code word.
          Then <InlineMath>{`c(X)h(X) = 0`}</InlineMath> in <InlineMath>{`\mathbb{B}[X]/\langle X^7 - 1 \rangle`}</InlineMath>, which means:
        </p>
        <MathBlock>{`(c_0 + c_1X + \\cdots + c_6X^6)(1 + X + X^2 + X^4) \\equiv 0 \\pmod{X^7 - 1}`}</MathBlock>
        <p className="mt-2">
          This gives us the parity check equations:
        </p>
        <div className="my-4 font-mono text-sm bg-dark-800/50 p-4 rounded-lg space-y-1">
          <p><InlineMath>{`c_0 + c_6 + c_5 + c_3 = 0`}</InlineMath></p>
          <p><InlineMath>{`c_1 + c_0 + c_6 + c_4 = 0`}</InlineMath></p>
          <p><InlineMath>{`c_2 + c_1 + c_0 + c_5 = 0`}</InlineMath></p>
          <p><InlineMath>{`c_3 + c_2 + c_1 + c_6 = 0`}</InlineMath></p>
          <p><InlineMath>{`c_4 + c_3 + c_2 + c_0 = 0`}</InlineMath></p>
          <p><InlineMath>{`c_5 + c_4 + c_3 + c_1 = 0`}</InlineMath></p>
          <p><InlineMath>{`c_6 + c_5 + c_4 + c_2 = 0`}</InlineMath></p>
        </div>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">Parity Check Matrix from Check Polynomial</h2>

      <Definition title="Parity Check Matrix of a Cyclic Code">
        <p>
          Let <InlineMath>{`\mathscr{C}`}</InlineMath> be a cyclic code of
          length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`F`}</InlineMath> with generator
          polynomial <InlineMath>{`g(X)`}</InlineMath> of degree <InlineMath>{`r`}</InlineMath>. Let:
        </p>
        <MathBlock>{`h(X) = h_0 + h_1X + \\cdots + h_{n-r}X^{n-r}`}</MathBlock>
        <p className="mt-2">
          be its check polynomial. Then a word <InlineMath>{`c(X) + I = c_0 + c_1X + \\cdots + c_{n-1}X^{n-1} + I`}</InlineMath> is
          in <InlineMath>{`\mathscr{C}`}</InlineMath> if and only if <InlineMath>{`c(X)h(X) = 0`}</InlineMath> in <InlineMath>{`F[X]/I`}</InlineMath>.
        </p>
        <p className="mt-2">
          This is equivalent to:
        </p>
        <MathBlock>{`\\sum_{i=0}^{n-1} c_i h_{j-i} = 0 \\quad \\text{for } j = 0, 1, 2, \\ldots, n-1`}</MathBlock>
        <p className="mt-2">
          where subscripts are taken modulo <InlineMath>{`n`}</InlineMath> and <InlineMath>{`h_j = 0`}</InlineMath> if <InlineMath>{`j {'>'} n - r`}</InlineMath>.
        </p>
      </Definition>

      <p>
        These check equations can be written in matrix form as <InlineMath>{`\mathbf{c}\mathbf{H} = 0`}</InlineMath>,
        where <InlineMath>{`\mathbf{H}`}</InlineMath> is the <InlineMath>{`n \\times n`}</InlineMath> matrix whose
        rows are defined inductively: the first row is:
      </p>
      <MathBlock>{`(0 \\cdots 0 \\quad h_{n-r} \\cdots h_1 \\quad h_0)`}</MathBlock>
      <p>
        and each subsequent row is a cyclic shift of the previous one.
      </p>

      <Callout type="info" title="Standard Parity Check Matrix">
        <p>
          The first <InlineMath>{`r`}</InlineMath> rows of <InlineMath>{`\mathbf{H}`}</InlineMath> are
          linearly independent and generate the dual code <InlineMath>{`\mathscr{C}^\perp`}</InlineMath>.
          We can also use the <InlineMath>{`r \\times n`}</InlineMath> matrix:
        </p>
        <MathBlock>{`\\mathbf{H}_1 = \\begin{pmatrix} 0 & 0 & \\cdots & 0 & h_{n-r} & \\cdots & h_1 & h_0 \\\\ 0 & & h_{n-r} & h_{n-r-1} & \\cdots & h_0 & 0 \\\\ \\vdots & \\vdots & \\ddots & \\ddots & & \\ddots & \\vdots \\\\ h_{n-r} & \\cdots & & \\cdots & & h_0 & 0 & 0 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          as the parity check matrix (in the usual sense).
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">Dual of a Cyclic Code</h2>

      <Theorem
        title="Dual of a Cyclic Code"
        proof={
          <>
            <p>
              We only need to prove (ii). Consider the permutation
              matrix <InlineMath>{`\\mathbf{P} = (p_{ij})`}</InlineMath> where:
            </p>
            <MathBlock>{`p_{ij} = \\begin{cases} 1 & \\text{if } i + j = n + 1 \\\\ 0 & \\text{otherwise} \\end{cases}`}</MathBlock>
            <p className="mt-2">
              Let <InlineMath>{`\mathbf{c}_1, \ldots, \mathbf{c}_n`}</InlineMath> denote the columns
              of the generator matrix <InlineMath>{`\mathbf{H}_1`}</InlineMath> of <InlineMath>{`\mathscr{C}^\perp`}</InlineMath>. Then:
            </p>
            <MathBlock>{`\\mathbf{H}_1\\mathbf{P} = (\\mathbf{c}_n \\quad \\mathbf{c}_{n-1} \\quad \\cdots \\quad \\mathbf{c}_1)`}</MathBlock>
            <p className="mt-2">
              This gives a matrix whose rows are:
            </p>
            <MathBlock>{`\\begin{pmatrix} h_0 & h_1 & \\cdots & h_{n-r} & 0 & \\cdots & 0 \\\\ 0 & h_0 & \\cdots & h_{n-r-1} & h_{n-r} & \\cdots & 0 \\\\ \\vdots & & \\ddots & & \\ddots & & \\vdots \\\\ 0 & \\cdots & 0 & h_0 & h_1 & \\cdots & h_{n-r} \\end{pmatrix}`}</MathBlock>
            <p className="mt-2">
              The linear code generated by <InlineMath>{`\mathbf{H}_1\mathbf{P}`}</InlineMath> is
              the code <InlineMath>{`\\langle h(X) + I \\rangle`}</InlineMath> generated by <InlineMath>{`h(X)`}</InlineMath>.
              Since the code generated by <InlineMath>{`\mathbf{H}_1\mathbf{P}`}</InlineMath> is
              equivalent to <InlineMath>{`\mathscr{C}^\perp`}</InlineMath>, the result follows.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\mathscr{C}`}</InlineMath> be a cyclic code of
          length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`F`}</InlineMath> with generator
          polynomial <InlineMath>{`g(X)`}</InlineMath> of degree <InlineMath>{`r`}</InlineMath> and <InlineMath>{`h(X)`}</InlineMath> as
          its check polynomial. Then:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            The dual code <InlineMath>{`\mathscr{C}^\perp`}</InlineMath> is also cyclic
            with <InlineMath>{`k(X) = X^{n-r}h(X^{-1})`}</InlineMath> as a generator polynomial.
          </li>
          <li>
            The dual code <InlineMath>{`\mathscr{C}^\perp`}</InlineMath> is equivalent to
            the code generated by <InlineMath>{`h(X)`}</InlineMath>.
          </li>
        </ol>
      </Theorem>

      <p>
        The polynomial <InlineMath>{`k(X) = X^{n-r}h(X^{-1})`}</InlineMath> is called
        the <strong>reciprocal polynomial</strong> of <InlineMath>{`h(X)`}</InlineMath>. If <InlineMath>{`h(X) = h_0 + h_1X + \\cdots + h_{n-r}X^{n-r}`}</InlineMath>, then:
      </p>
      <MathBlock>{`k(X) = h_{n-r} + h_{n-r-1}X + \\cdots + h_0X^{n-r}`}</MathBlock>

      <Example title="Dual Code Generator">
        <p>
          For the binary cyclic code of length 7 with <InlineMath>{`g(X) = X^3 + X + 1`}</InlineMath>,
          we have <InlineMath>{`h(X) = X^4 + X^2 + X + 1`}</InlineMath>.
        </p>
        <p className="mt-2">
          The reciprocal polynomial is:
        </p>
        <MathBlock>
          {`k(X) = X^4 h(X^{-1}) = X^4(X^{-4} + X^{-2} + X^{-1} + 1) = 1 + X^2 + X^3 + X^4`}
        </MathBlock>
        <p className="mt-2">
          We can verify that <InlineMath>{`k(X) | (X^7 - 1)`}</InlineMath>:
        </p>
        <MathBlock>
          {`X^7 - 1 = (X^3 + X + 1)(X^4 + X^2 + X + 1)`}
        </MathBlock>
        <p className="mt-2">
          and <InlineMath>{`k(X) = X^4 + X^3 + X^2 + 1`}</InlineMath> divides <InlineMath>{`X^7 - 1`}</InlineMath> as required.
        </p>
      </Example>

      <Callout type="note" title="Cyclic Property of Dual">
        <p>
          Since the rows of the parity check matrix <InlineMath>{`\mathbf{H}`}</InlineMath> are all
          possible cyclic shifts of the vector <InlineMath>{`(0 \\cdots 0 \\; h_{n-r} \\cdots h_1 \\; h_0)`}</InlineMath>,
          any linear combination of the rows of <InlineMath>{`\mathbf{H}`}</InlineMath> will again be
          a linear combination of the rows. Hence <InlineMath>{`\mathscr{C}^\perp`}</InlineMath> is
          indeed cyclic.
        </p>
      </Callout>
    </LessonLayout>
  );
}
