import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <p>
        In this section, we establish an important connection: both BCH codes and
        Hamming codes can be viewed as cyclic codes. This perspective provides
        additional structure and leads to efficient encoding and decoding algorithms.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">Roots and Cyclic Codes</h2>

      <p>
        Let <InlineMath>{`\mathscr{C}`}</InlineMath> be a cyclic code of length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`F`}</InlineMath>,
        i.e., an ideal in <InlineMath>{`F[X]/I`}</InlineMath> where <InlineMath>{`I = \\langle X^n - 1 \\rangle`}</InlineMath>.
        Let <InlineMath>{`g(X)`}</InlineMath> be the generator polynomial of degree <InlineMath>{`r`}</InlineMath>,
        and let <InlineMath>{`\\alpha_1, \\alpha_2, \\ldots, \\alpha_r`}</InlineMath> be the roots
        of <InlineMath>{`g(X)`}</InlineMath> in a suitable extension field of <InlineMath>{`F`}</InlineMath>. Then:
      </p>
      <MathBlock>{`g(X) = (X - \\alpha_1)(X - \\alpha_2)\\cdots(X - \\alpha_r)`}</MathBlock>

      <Callout type="info" title="Root Characterization">
        <p>
          Observe that <InlineMath>{`g(X)`}</InlineMath> divides a polynomial <InlineMath>{`a(X)`}</InlineMath> if
          and only if <InlineMath>{`\\alpha_1, \\ldots, \\alpha_r`}</InlineMath> are among the roots
          of <InlineMath>{`a(X)`}</InlineMath>. Therefore, <InlineMath>{`a(X) + I`}</InlineMath> is
          in <InlineMath>{`\mathscr{C}`}</InlineMath> if and only if <InlineMath>{`\\alpha_1, \\ldots, \\alpha_r`}</InlineMath> are
          among the roots of <InlineMath>{`a(X)`}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">Binary Hamming Codes</h2>

      <p>
        Given a positive integer <InlineMath>{`m`}</InlineMath>, recall that a
        binary <InlineMath>{`(2^m - m - 1, 2^m - 1)`}</InlineMath> Hamming code is defined by taking
        the <InlineMath>{`m \\times (2^m - 1)`}</InlineMath> parity check matrix <InlineMath>{`\mathbf{H}`}</InlineMath>,
        where the <InlineMath>{`i`}</InlineMath>-th column is the binary representation of
        the number <InlineMath>{`i`}</InlineMath>.
      </p>

      <Example title="Binary Hamming Code of Length 7">
        <p>
          For <InlineMath>{`m = 3`}</InlineMath>, we have <InlineMath>{`n = 2^3 - 1 = 7`}</InlineMath>.
          A parity check matrix is:
        </p>
        <MathBlock>{`\\mathbf{H} = \\begin{pmatrix} 0 & 0 & 0 & 1 & 1 & 1 & 1 \\\\ 0 & 1 & 1 & 0 & 0 & 1 & 1 \\\\ 1 & 0 & 1 & 0 & 1 & 0 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          Applying a suitable column permutation, we can obtain a generator matrix and
          enumerate all 16 code words.
        </p>
      </Example>

      <Theorem
        title="Hamming Codes as Cyclic Codes"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\alpha`}</InlineMath> be a primitive element
              of <InlineMath>{`\text{GF}(2^m)`}</InlineMath>. Let <InlineMath>{`m(X)`}</InlineMath> be
              the minimal polynomial of <InlineMath>{`\\alpha`}</InlineMath> over <InlineMath>{`\mathbb{B}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since for <InlineMath>{`\beta \in \text{GF}(2^m)`}</InlineMath>, <InlineMath>{`\\beta`}</InlineMath> and <InlineMath>{`\\beta^2`}</InlineMath> have
              the same minimal polynomial, the
              elements <InlineMath>{`\\alpha, \\alpha^2, \\ldots, \\alpha^{2^{m-1}}`}</InlineMath> are
              distinct roots of <InlineMath>{`m(X)`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`[\text{GF}(2^m) : \mathbb{B}] = m`}</InlineMath>, the degree of
              the minimal polynomial of any element of <InlineMath>{`\text{GF}(2^m)`}</InlineMath> over <InlineMath>{`\mathbb{B}`}</InlineMath> is
              at most <InlineMath>{`m`}</InlineMath>. Hence:
            </p>
            <MathBlock>{`m(X) = (X - \\alpha)(X - \\alpha^2)\\cdots(X - \\alpha^{2^{m-1}})`}</MathBlock>
            <p className="mt-2">
              The elements <InlineMath>{`1, \\alpha, \\alpha^2, \\ldots, \\alpha^{m-1}`}</InlineMath> form
              a basis of <InlineMath>{`\text{GF}(2^m)`}</InlineMath> over <InlineMath>{`\mathbb{B}`}</InlineMath>.
              Therefore, every element of <InlineMath>{`\text{GF}(2^m)`}</InlineMath> can be uniquely written as:
            </p>
            <MathBlock>{`\\sum_{i=0}^{m-1} e_i \\alpha^i \\quad \\text{where } e_i \\in \\mathbb{B}`}</MathBlock>
            <p className="mt-2">
              For <InlineMath>{`0 \\leq j \\leq 2^m - 2`}</InlineMath>, let <InlineMath>{`\\alpha^j = \\sum_{i=0}^{m-1} e_{ij}\\alpha^i`}</InlineMath>,
              and let <InlineMath>{`\mathbf{H}`}</InlineMath> be the <InlineMath>{`m \\times n`}</InlineMath> matrix
              whose <InlineMath>{`(j+1)`}</InlineMath>-th column is <InlineMath>{`(e_{0j}, e_{1j}, \\ldots, e_{m-1,j})^t`}</InlineMath>.
            </p>
            <p className="mt-2">
              Every row vector <InlineMath>{`(e_{0j}, e_{1j}, \\ldots, e_{m-1,j})`}</InlineMath> gives
              the binary representation of a unique positive integer at most <InlineMath>{`n`}</InlineMath>.
            </p>
            <p className="mt-2">
              Now <InlineMath>{`a(X) + \\langle X^n - 1 \\rangle`}</InlineMath> belongs to the cyclic
              code generated by <InlineMath>{`m(X)`}</InlineMath> if and only if <InlineMath>{`a(\\alpha) = 0`}</InlineMath>.
              But this is so if and only if <InlineMath>{`\mathbf{H}\mathbf{a}^t = 0`}</InlineMath>,
              where <InlineMath>{`\\mathbf{a} = (a_0, a_1, \\ldots, a_{n-1})`}</InlineMath> with <InlineMath>{`a(X) = a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Therefore, the cyclic code generated by <InlineMath>{`m(X)`}</InlineMath> is the same
              as the code given by the parity check matrix <InlineMath>{`\mathbf{H}`}</InlineMath>.
              But <InlineMath>{`\mathbf{H}`}</InlineMath> is obtained by permuting the binary
              representations of <InlineMath>{`1, 2, \\ldots, n`}</InlineMath>. This completes the proof.
            </p>
          </>
        }
      >
        <p>
          The binary cyclic code of length <InlineMath>{`n = 2^m - 1`}</InlineMath> for which
          the generator is the minimal polynomial of a primitive element
          of <InlineMath>{`\text{GF}(2^m)`}</InlineMath> is equivalent to
          the <InlineMath>{`(n - m, n)`}</InlineMath> Hamming code.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">BCH Codes as Cyclic Codes</h2>

      <p>
        We have seen that every non-zero element of <InlineMath>{`\text{GF}(2^m)`}</InlineMath> is
        a root of the polynomial <InlineMath>{`X^n - 1`}</InlineMath> with <InlineMath>{`n = 2^m - 1`}</InlineMath>.
        Therefore, the minimal polynomial of every element <InlineMath>{`\\beta`}</InlineMath> of <InlineMath>{`\text{GF}(2^m)`}</InlineMath> divides <InlineMath>{`X^n - 1`}</InlineMath>.
      </p>

      <p className="mt-4">
        Also, the minimal polynomials of two elements are either identical or
        relatively coprime. Hence, if <InlineMath>{`\\alpha`}</InlineMath> is a primitive element
        of <InlineMath>{`\text{GF}(2^m)`}</InlineMath> and <InlineMath>{`d \\geq 2`}</InlineMath> is a positive integer, then:
      </p>
      <MathBlock>{`g(X) = \\text{LCM}\\{m_1(X), \\ldots, m_{d-1}(X)\\}`}</MathBlock>
      <p>
        where <InlineMath>{`m_i(X)`}</InlineMath> denotes the minimal polynomial
        of <InlineMath>{`\\alpha^i`}</InlineMath>, divides <InlineMath>{`X^n - 1`}</InlineMath>.
      </p>

      <Callout type="success" title="BCH Codes are Cyclic">
        <p>
          It follows that the polynomial code of length <InlineMath>{`n`}</InlineMath> generated
          by <InlineMath>{`g(X)`}</InlineMath> is the same as the cyclic code with
          generator <InlineMath>{`g(X)`}</InlineMath>. Thus, <strong>every binary BCH code is a cyclic code</strong>.
        </p>
      </Callout>

      <Example title="Hamming Code as BCH Code">
        <p>
          The above proof also shows that a binary Hamming code is a BCH code (up to
          equivalence). Specifically, the binary Hamming code of length <InlineMath>{`2^m - 1`}</InlineMath> is
          the BCH code with designed distance <InlineMath>{`d = 3`}</InlineMath> generated
          by <InlineMath>{`m_1(X)`}</InlineMath>, the minimal polynomial of a primitive
          element <InlineMath>{`\\alpha`}</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>{`m_1(X)`}</InlineMath> has <InlineMath>{`\\alpha`}</InlineMath> as a root,
          any code word <InlineMath>{`c(X)`}</InlineMath> satisfies <InlineMath>{`c(\\alpha) = 0`}</InlineMath>,
          meaning the code has minimum distance at least 3.
        </p>
      </Example>

      <Example title="Generator Matrix of Binary Hamming Code of Length 15">
        <p>
          For <InlineMath>{`m = 4`}</InlineMath>, the parity check matrix is:
        </p>
        <MathBlock>{`\\mathbf{H} = \\begin{pmatrix} 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\\\ 0 & 0 & 0 & 1 & 1 & 1 & 1 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 \\\\ 0 & 1 & 1 & 0 & 0 & 1 & 1 & 0 & 0 & 1 & 1 & 0 & 0 & 1 & 1 \\\\ 1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          After applying a suitable permutation <InlineMath>{`\\sigma`}</InlineMath> to obtain canonical form
          and computing the corresponding generator matrix, we get an <InlineMath>{`11 \\times 15`}</InlineMath> generator
          matrix for this Hamming code.
        </p>
        <p className="mt-2">
          The code has dimension <InlineMath>{`15 - 4 = 11`}</InlineMath>, minimum distance 3, and is equivalent
          to the cyclic code generated by the minimal polynomial of a primitive element
          in <InlineMath>{`\text{GF}(16)`}</InlineMath>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">Minimum Distance Revisited</h2>

      <p>
        Let <InlineMath>{`\mathscr{C}`}</InlineMath> be a Hamming code of length <InlineMath>{`n = 2^r - 1`}</InlineMath>.
        Then <InlineMath>{`\mathscr{C}`}</InlineMath> is a code with a parity check
        matrix <InlineMath>{`\mathbf{H}`}</InlineMath> of order <InlineMath>{`r \\times n`}</InlineMath> in
        which the columns are the binary representations of the numbers <InlineMath>{`1, 2, \\ldots, n`}</InlineMath>.
      </p>

      <Theorem
        title="Minimum Distance of Hamming Codes"
        proof={
          <>
            <p>
              No two columns of <InlineMath>{`\mathbf{H}`}</InlineMath> are identical since each
              column represents a distinct non-zero integer from 1 to <InlineMath>{`n`}</InlineMath>.
            </p>
            <p className="mt-2">
              By the general theory of linear codes, the code is single error correcting
              if and only if no two columns of the parity check matrix are identical.
              Since this condition is satisfied, the Hamming code is single error correcting.
            </p>
            <p className="mt-2">
              A code is single error correcting if and only if its minimum distance is at
              least 3. Therefore, the minimum distance of the Hamming code is at least 3.
            </p>
            <p className="mt-2">
              Moreover, we can find three columns that sum to zero (over <InlineMath>{`\mathbb{B}`}</InlineMath>),
              showing the minimum distance is exactly 3.
            </p>
          </>
        }
      >
        <p>
          The binary Hamming code of length <InlineMath>{`n = 2^m - 1`}</InlineMath> has minimum distance
          exactly 3 and is single error correcting.
        </p>
      </Theorem>

      <Callout type="note" title="Alternative Proof via Cyclic Structure">
        <p>
          The cyclic code perspective provides an alternative proof of the minimum
          distance result. Since the generator polynomial <InlineMath>{`m_1(X)`}</InlineMath> has <InlineMath>{`\\alpha`}</InlineMath> and <InlineMath>{`\\alpha^2`}</InlineMath> as
          roots (because <InlineMath>{`\\alpha`}</InlineMath> and <InlineMath>{`\\alpha^2`}</InlineMath> have
          the same minimal polynomial over <InlineMath>{`\mathbb{B}`}</InlineMath>), any code
          word <InlineMath>{`c(X)`}</InlineMath> satisfies <InlineMath>{`c(\\alpha) = c(\\alpha^2) = 0`}</InlineMath>.
          This implies the code has designed distance at least 3 by BCH bound theory.
        </p>
      </Callout>
    </LessonLayout>
  );
}
