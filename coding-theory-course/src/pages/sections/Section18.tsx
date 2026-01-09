import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <p>
        So far we have focused primarily on binary Hamming codes. However, Hamming
        codes can be defined over any finite field <InlineMath>{`\text{GF}(q)`}</InlineMath>. In this
        section, we extend the theory to non-binary alphabets.
      </p>

      <Definition title="Non-binary Hamming Code">
        <p>
          A Hamming code of length <InlineMath>{`n = (q^m - 1)/(q - 1)`}</InlineMath> over <InlineMath>{`\text{GF}(q)`}</InlineMath> is
          defined to be the code given by an <InlineMath>{`m \\times n`}</InlineMath> parity check
          matrix <InlineMath>{`\mathbf{H}`}</InlineMath>, the columns of which are all
          non-zero <InlineMath>{`m`}</InlineMath>-tuples over <InlineMath>{`\text{GF}(q)`}</InlineMath> with
          the <strong>first non-zero entry in each column equal to 1</strong>.
        </p>
      </Definition>

      <Callout type="info" title="Why Normalize Columns?">
        <p>
          The condition that the first non-zero entry in each column equals 1 ensures
          that no column is a scalar multiple of another. In the binary case, this
          condition is automatic since the only non-zero scalar is 1. For <InlineMath>{`q {'>'} 2`}</InlineMath>,
          this normalization prevents redundancy and ensures single error correction.
        </p>
      </Callout>

      <p className="mt-4">
        There are <InlineMath>{`m`}</InlineMath> columns in the parity check
        matrix <InlineMath>{`\mathbf{H}`}</InlineMath> that form the identity
        matrix <InlineMath>{`\mathbf{I}_m`}</InlineMath> (after a suitable permutation). It follows that
        the Hamming code given by <InlineMath>{`\mathbf{H}`}</InlineMath> is a vector space of
        dimension <InlineMath>{`n - m`}</InlineMath> over <InlineMath>{`\text{GF}(q)`}</InlineMath>.
      </p>

      <Example title="Ternary Hamming Code of Length 4">
        <p>
          As <InlineMath>{`4 = (3^2 - 1)/(3 - 1)`}</InlineMath>, the parity check matrix is
          a <InlineMath>{`2 \\times 4`}</InlineMath> matrix given by:
        </p>
        <MathBlock>{`\\mathbf{H} = \\begin{pmatrix} 0 & 1 & 1 & 1 \\\\ 1 & 0 & 1 & 2 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          The columns represent the normalized non-zero 2-tuples over <InlineMath>{`\text{GF}(3)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Applying a permutation to obtain canonical form and computing the corresponding
          generator matrix, we get:
        </p>
        <MathBlock>{`\\mathbf{G} = \\begin{pmatrix} 1 & 1 & 1 & 0 \\\\ 2 & 1 & 0 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          All code words of this <InlineMath>{`(2, 4)`}</InlineMath> ternary Hamming code are:
        </p>
        <div className="my-4 font-mono text-sm bg-dark-800/50 p-4 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="text-left py-1">Message</th>
                <th className="text-left py-1">Code word</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0 0</td><td>0 0 0 0</td></tr>
              <tr><td>0 1</td><td>2 1 0 1</td></tr>
              <tr><td>0 2</td><td>1 2 0 2</td></tr>
              <tr><td>1 0</td><td>1 1 1 0</td></tr>
              <tr><td>1 1</td><td>0 2 1 1</td></tr>
              <tr><td>1 2</td><td>2 0 1 2</td></tr>
              <tr><td>2 0</td><td>2 2 2 0</td></tr>
              <tr><td>2 1</td><td>1 0 2 1</td></tr>
              <tr><td>2 2</td><td>0 1 2 2</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          The minimum distance of the code is 3.
        </p>
      </Example>

      <Example title="Ternary Hamming Code of Length 13">
        <p>
          As <InlineMath>{`13 = (3^3 - 1)/(3 - 1)`}</InlineMath>, the parity check matrix is
          a <InlineMath>{`3 \\times 13`}</InlineMath> matrix. The columns consist of all normalized
          non-zero 3-tuples over <InlineMath>{`\text{GF}(3)`}</InlineMath>:
        </p>
        <MathBlock>{`\\mathbf{H} = \\begin{pmatrix} 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\\\ 0 & 1 & 1 & 1 & 0 & 0 & 0 & 1 & 1 & 1 & 2 & 2 & 2 \\\\ 1 & 0 & 1 & 2 & 0 & 1 & 2 & 0 & 1 & 2 & 0 & 1 & 2 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          This gives a <InlineMath>{`(10, 13)`}</InlineMath> ternary Hamming code with
          dimension <InlineMath>{`13 - 3 = 10`}</InlineMath>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">Syndrome Decoding for Non-binary Codes</h2>

      <p>
        When working with non-binary codes, the syndrome decoding procedure with
        parity check matrix <InlineMath>{`\mathbf{H}`}</InlineMath> needs modification.
        Let <InlineMath>{`r = r_1 \\cdots r_n`}</InlineMath> be the received word
        and <InlineMath>{`\mathbf{s} = \mathbf{H}\mathbf{r}^t`}</InlineMath> be the syndrome.
      </p>

      <Definition title="Syndrome Decoding (Non-binary)">
        <ol className="list-decimal list-inside mt-2 space-y-3">
          <li>
            If <InlineMath>{`\mathbf{s}`}</InlineMath> equals a constant multiple of a unique
            column of <InlineMath>{`\mathbf{H}`}</InlineMath>, say the <InlineMath>{`i`}</InlineMath>-th column, i.e.,
            <MathBlock>{`\\mathbf{s} = \\lambda \\mathbf{H}_i \\quad \\text{where } 0 \\neq \\lambda \\in \\text{GF}(q)`}</MathBlock>
            then we assume an error occurred in the <InlineMath>{`i`}</InlineMath>-th position and decode to:
            <MathBlock>{`c = r_1 \\cdots r_{i-1} (r_i - \\lambda) r_{i+1} \\cdots r_n`}</MathBlock>
          </li>
          <li>
            If <InlineMath>{`\mathbf{s}`}</InlineMath> is not a multiple of any column
            of <InlineMath>{`\mathbf{H}`}</InlineMath>, then at least two errors occurred.
          </li>
          <li>
            If <InlineMath>{`\mathbf{s}`}</InlineMath> equals a multiple of <InlineMath>{`\mathbf{H}_i`}</InlineMath> and
            also of <InlineMath>{`\mathbf{H}_j`}</InlineMath> with <InlineMath>{`i \\neq j`}</InlineMath>, there is decoding failure.
          </li>
        </ol>
      </Definition>

      <Theorem
        title="Single Error Correction"
        proof={
          <>
            <p>
              Suppose the code can correct all single errors. If two columns <InlineMath>{`\mathbf{H}_i`}</InlineMath> and <InlineMath>{`\mathbf{H}_j`}</InlineMath> are
              linearly dependent, then <InlineMath>{`\mathbf{H}_i = \lambda \mathbf{H}_j`}</InlineMath> for
              some <InlineMath>{`\\lambda \\neq 0`}</InlineMath>. Then the error
              pattern <InlineMath>{`\mathbf{e}`}</InlineMath> with 1 in position <InlineMath>{`i`}</InlineMath> and
              0 elsewhere has syndrome <InlineMath>{`\mathbf{H}_i = \lambda \mathbf{H}_j`}</InlineMath>,
              which is also the syndrome of the error pattern with <InlineMath>{`\\lambda`}</InlineMath> in
              position <InlineMath>{`j`}</InlineMath>. This leads to decoding ambiguity, contradiction.
            </p>
            <p className="mt-2">
              Conversely, if every two columns are linearly independent, then for any single
              error in position <InlineMath>{`i`}</InlineMath> with error value <InlineMath>{`\\lambda`}</InlineMath>,
              the syndrome <InlineMath>{`\lambda \mathbf{H}_i`}</InlineMath> uniquely determines
              both <InlineMath>{`i`}</InlineMath> and <InlineMath>{`\\lambda`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\mathscr{C}`}</InlineMath> be a linear code over <InlineMath>{`\text{GF}(q)`}</InlineMath> with
          an <InlineMath>{`(n - m) \\times n`}</InlineMath> parity check matrix <InlineMath>{`\mathbf{H}`}</InlineMath>.
          The code is capable of correcting all single errors if and only if every two
          columns of <InlineMath>{`\mathbf{H}`}</InlineMath> are linearly independent.
        </p>
      </Theorem>

      <Callout type="success" title="Hamming Codes are Single Error Correcting">
        <p>
          As the first non-zero entry in every column of the parity check
          matrix <InlineMath>{`\mathbf{H}`}</InlineMath> of the Hamming code
          over <InlineMath>{`\text{GF}(q)`}</InlineMath>, <InlineMath>{`q \\geq 2`}</InlineMath>, is 1,
          it follows that no column of <InlineMath>{`\mathbf{H}`}</InlineMath> is a scalar multiple
          of any other column. Therefore, Hamming codes over <InlineMath>{`\text{GF}(q)`}</InlineMath> are single error correcting.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">Minimum Distance and Perfect Codes</h2>

      <Theorem
        title="Minimum Distance Criterion"
        proof={
          <>
            <p>
              The minimum distance of a code equals the minimum number of columns
              of <InlineMath>{`\mathbf{H}`}</InlineMath> that are linearly dependent.
              If every <InlineMath>{`k`}</InlineMath> columns are linearly independent, then
              at least <InlineMath>{`k + 1`}</InlineMath> columns are needed for a linear dependence,
              hence minimum distance is at least <InlineMath>{`k + 1`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The minimum distance of a code over <InlineMath>{`\text{GF}(q)`}</InlineMath> with parity check
          matrix <InlineMath>{`\mathbf{H}`}</InlineMath> is at least <InlineMath>{`k + 1`}</InlineMath> if and only
          if every set of <InlineMath>{`k`}</InlineMath> columns of <InlineMath>{`\mathbf{H}`}</InlineMath> is linearly independent.
        </p>
      </Theorem>

      <Definition title="Spheres and Perfect Codes">
        <p>
          Let <InlineMath>{`F`}</InlineMath> be a field of order <InlineMath>{`q`}</InlineMath>. For
          a positive integer <InlineMath>{`n`}</InlineMath> and <InlineMath>{`\rho {'>'} 0`}</InlineMath>,
          the <strong>sphere</strong> in <InlineMath>{`V(n, q)`}</InlineMath> of
          radius <InlineMath>{`\\rho`}</InlineMath> centered at <InlineMath>{`\mathbf{x}`}</InlineMath> is:
        </p>
        <MathBlock>{`S_\\rho(\\mathbf{x}) = \\{\\mathbf{y} \\in V(n, q) \\mid d(\\mathbf{x}, \\mathbf{y}) \\leq \\rho\\}`}</MathBlock>
        <p className="mt-2">
          An <InlineMath>{`e`}</InlineMath>-error-correcting code <InlineMath>{`\mathscr{C}`}</InlineMath> of
          length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`\text{GF}(q)`}</InlineMath> is
          called <strong>perfect</strong> if:
        </p>
        <MathBlock>{`\\bigcup_{\\mathbf{x} \\in \\mathscr{C}} S_e(\\mathbf{x}) = V(n, q)`}</MathBlock>
      </Definition>

      <p className="mt-4">
        Note that the sphere <InlineMath>{`S_1(\mathbf{x})`}</InlineMath>:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>in <InlineMath>{`\mathbb{B}^n`}</InlineMath> contains exactly <InlineMath>{`n + 1`}</InlineMath> elements</li>
        <li>in <InlineMath>{`V(n, 3)`}</InlineMath> contains exactly <InlineMath>{`2n + 1`}</InlineMath> elements</li>
        <li>in <InlineMath>{`V(n, q)`}</InlineMath> contains exactly <InlineMath>{`n(q - 1) + 1`}</InlineMath> elements</li>
      </ul>

      <Theorem
        title="Hamming Codes are Perfect"
        proof={
          <>
            <p>
              We know that Hamming codes are single error correcting. Let <InlineMath>{`\mathscr{C}`}</InlineMath> be
              a Hamming code of length <InlineMath>{`n = (q^r - 1)/(q - 1)`}</InlineMath> over <InlineMath>{`\text{GF}(q)`}</InlineMath>.
              The parity check matrix is an <InlineMath>{`r \\times n`}</InlineMath> matrix, so
              the dimension is <InlineMath>{`n - r`}</InlineMath> and the number of code words is <InlineMath>{`q^{n-r}`}</InlineMath>.
            </p>
            <p className="mt-2">
              The minimum distance being at least 3, every
              sphere <InlineMath>{`S_1(\mathbf{x})`}</InlineMath>, <InlineMath>{`\mathbf{x} \in \mathscr{C}`}</InlineMath>,
              contains exactly one code word (namely <InlineMath>{`\mathbf{x}`}</InlineMath> itself).
              Also, for <InlineMath>{`\mathbf{x}, \mathbf{y} \in \mathscr{C}`}</InlineMath> with <InlineMath>{`\mathbf{x} \neq \mathbf{y}`}</InlineMath>,
              the spheres <InlineMath>{`S_1(\mathbf{x})`}</InlineMath> and <InlineMath>{`S_1(\mathbf{y})`}</InlineMath> are disjoint.
            </p>
            <p className="mt-2">
              Therefore:
            </p>
            <MathBlock>{`\\left| \\bigcup_{\\mathbf{x} \\in \\mathscr{C}} S_1(\\mathbf{x}) \\right| = (n(q-1) + 1) \\cdot q^{n-r}`}</MathBlock>
            <p className="mt-2">
              Substituting <InlineMath>{`n = (q^r - 1)/(q - 1)`}</InlineMath>:
            </p>
            <MathBlock>{`= \\left( \\frac{q^r - 1}{q - 1} \\cdot (q - 1) + 1 \\right) q^{n-r} = q^r \\cdot q^{n-r} = q^n = |V(n, q)|`}</MathBlock>
            <p className="mt-2">
              Hence <InlineMath>{`\bigcup S_1(\mathbf{x}) = V(n, q)`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Hamming codes over <InlineMath>{`\text{GF}(q)`}</InlineMath> are single error correcting
          perfect codes.
        </p>
      </Theorem>

      <Callout type="note" title="Sphere-Packing Interpretation">
        <p>
          Perfectness means that the spheres of radius 1 around all code words exactly
          partition the ambient space. Every received word either is a code word or is
          within distance 1 of exactly one code word. This is the optimal situation for
          single error correction -- no redundancy is wasted.
        </p>
      </Callout>
    </LessonLayout>
  );
}
