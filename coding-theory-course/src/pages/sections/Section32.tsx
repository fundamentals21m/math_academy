import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <p>
        In this section, we establish necessary and sufficient conditions for a linear code to be
        a Maximum Distance Separable (MDS) code. These codes are particularly important because
        they achieve the maximum possible error detection and correction capability for their
        given length and dimension.
      </p>

      <Definition title="Maximum Distance Separable (MDS) Code">
        <p>
          A linear <InlineMath>{`[n, k, d]`}</InlineMath> code over a field <InlineMath>{`F`}</InlineMath> with{' '}
          <InlineMath>{`d = n - k + 1`}</InlineMath> is called a <strong>maximum distance separable (MDS) code</strong>.
        </p>
        <p className="mt-2">
          This means the code achieves the Singleton bound with equality, providing the best possible
          minimum distance for the given parameters.
        </p>
      </Definition>

      <Callout type="info" title="Why MDS Codes Matter">
        MDS codes have the maximum possible error detection and correction capability. For a code
        with <InlineMath>{`n - k`}</InlineMath> redundant symbols, an MDS code can detect up to{' '}
        <InlineMath>{`n - k`}</InlineMath> errors and correct up to <InlineMath>{`\\lfloor (n-k)/2 \\rfloor`}</InlineMath> errors.
      </Callout>

      <Theorem
        title="Characterization via Parity Check Matrix"
        proof={
          <>
            <p>
              <strong>Necessity:</strong> Suppose <InlineMath>{`\mathcal{C}`}</InlineMath> is an MDS code.
              Then <InlineMath>{`d = n - k + 1`}</InlineMath>, so there is no non-zero code word of weight
              at most <InlineMath>{`n - k`}</InlineMath>. By the relationship between code words and
              linear dependence of columns (Proposition 9.1), every <InlineMath>{`n - k`}</InlineMath> columns
              of <InlineMath>{`\mathbf{H}`}</InlineMath> are linearly independent.
            </p>
            <p className="mt-2">
              <strong>Sufficiency:</strong> Suppose every <InlineMath>{`n - k`}</InlineMath> columns of{' '}
              <InlineMath>{`\mathbf{H}`}</InlineMath> are linearly independent. Then there is no non-zero
              code word of weight at most <InlineMath>{`n - k`}</InlineMath>. Therefore{' '}
              <InlineMath>{`d \\geq n - k + 1`}</InlineMath>. But <InlineMath>{`d \\leq n - k + 1`}</InlineMath> always,
              so <InlineMath>{`d = n - k + 1`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\mathcal{C}`}</InlineMath> be a linear <InlineMath>{`[n, k, d]`}</InlineMath> code
          over <InlineMath>{`F`}</InlineMath> with a parity check matrix <InlineMath>{`\mathbf{H}`}</InlineMath>.
          Then <InlineMath>{`\mathcal{C}`}</InlineMath> is an MDS code if and only if every{' '}
          <InlineMath>{`n - k`}</InlineMath> columns of <InlineMath>{`\mathbf{H}`}</InlineMath> are linearly independent.
        </p>
      </Theorem>

      <Theorem
        title="Dual of an MDS Code"
        proof={
          <>
            <p>
              Since <InlineMath>{`\mathcal{C}^\perp`}</InlineMath> is a linear <InlineMath>{`[n, n-k, -]`}</InlineMath> code,
              let <InlineMath>{`d_1`}</InlineMath> be its minimum distance. Then{' '}
              <InlineMath>{`d_1 \\leq n - (n-k) + 1 = k + 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`\mathbf{H}`}</InlineMath> be a parity check matrix of <InlineMath>{`\mathcal{C}`}</InlineMath>.
              Since <InlineMath>{`\mathcal{C}`}</InlineMath> is MDS, every <InlineMath>{`n - k`}</InlineMath> columns
              of <InlineMath>{`\mathbf{H}`}</InlineMath> are linearly independent.
            </p>
            <p className="mt-2">
              If any <InlineMath>{`k`}</InlineMath> columns of <InlineMath>{`\mathbf{H}`}</InlineMath> are omitted,
              the remaining columns form a square submatrix of rank <InlineMath>{`n - k`}</InlineMath>.
              This means a code word of <InlineMath>{`\mathcal{C}^\perp`}</InlineMath> with at least{' '}
              <InlineMath>{`n - k`}</InlineMath> zeros must be zero. Thus <InlineMath>{`d_1 \\geq k + 1`}</InlineMath>,
              giving <InlineMath>{`d_1 = k + 1`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If a linear <InlineMath>{`[n, k, d]`}</InlineMath> code <InlineMath>{`\mathcal{C}`}</InlineMath> is MDS,
          then so is its dual <InlineMath>{`\mathcal{C}^\perp`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Equivalent Conditions for MDS Codes</h2>

      <Theorem
        title="Equivalent Characterizations"
        proof={
          <>
            <p>
              Equivalence of (i) and (iii) follows from the first theorem above.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`\mathbf{G}`}</InlineMath> be a generator matrix of <InlineMath>{`\mathcal{C}`}</InlineMath>.
              By Theorem 5.2, <InlineMath>{`\mathbf{G}`}</InlineMath> is a parity check matrix of{' '}
              <InlineMath>{`\mathcal{C}^\perp`}</InlineMath> which is an <InlineMath>{`[n, n-k, -]`}</InlineMath> linear code.
            </p>
            <p className="mt-2">
              Therefore <InlineMath>{`\mathcal{C}^\perp`}</InlineMath> is MDS iff every <InlineMath>{`k`}</InlineMath> columns
              of <InlineMath>{`\mathbf{G}`}</InlineMath> are linearly independent. Since{' '}
              <InlineMath>{`(\mathcal{C}^\perp)^\perp = \mathcal{C}`}</InlineMath>, it follows that{' '}
              <InlineMath>{`\mathcal{C}`}</InlineMath> is MDS iff <InlineMath>{`\mathcal{C}^\perp`}</InlineMath> is MDS.
              Hence (i) is equivalent to (ii).
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\mathcal{C}`}</InlineMath> be an <InlineMath>{`[n, k, d]`}</InlineMath> linear code
          over <InlineMath>{`F = \text{GF}(q)`}</InlineMath>. Then the following statements are equivalent:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>{`\mathcal{C}`}</InlineMath> is MDS</li>
          <li>Every <InlineMath>{`k`}</InlineMath> columns of a generator matrix <InlineMath>{`\mathbf{G}`}</InlineMath> are linearly independent</li>
          <li>Every <InlineMath>{`n - k`}</InlineMath> columns of a parity check matrix <InlineMath>{`\mathbf{H}`}</InlineMath> are linearly independent</li>
        </ol>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Standard Form Criterion</h2>

      <Theorem
        title="Non-singularity Condition"
        proof={
          <>
            <p>
              Let <InlineMath>{`\mathbf{B}_r`}</InlineMath> be a square submatrix of <InlineMath>{`\mathbf{A}`}</InlineMath>
              constituted by parts of the <InlineMath>{`i_1`}</InlineMath>th, <InlineMath>{`i_2`}</InlineMath>th, ...,{' '}
              <InlineMath>{`i_r`}</InlineMath>th rows with <InlineMath>i_1 {'<'} i_2 {'<'} \\cdots {'<'} i_r \\leq n - k</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`\mathbf{M}_r`}</InlineMath> be the square submatrix of <InlineMath>{`\mathbf{H}`}</InlineMath> of
              order <InlineMath>{`n - k`}</InlineMath> constituted by the columns of <InlineMath>{`\mathbf{A}`}</InlineMath> appearing
              in <InlineMath>{`\mathbf{B}_r`}</InlineMath> and the remaining <InlineMath>{`n - k - r`}</InlineMath> columns
              from <InlineMath>{`\mathbf{I}_{n-k}`}</InlineMath> different from the <InlineMath>{`i_1`}</InlineMath>th, ...,{' '}
              <InlineMath>{`i_r`}</InlineMath>th columns.
            </p>
            <p className="mt-2">
              Then <InlineMath>{`\det \mathbf{M}_r = \pm \det \mathbf{B}_r`}</InlineMath>, so{' '}
              <InlineMath>{`\mathbf{B}_r`}</InlineMath> is non-singular iff <InlineMath>{`\mathbf{M}_r`}</InlineMath> is.
              Therefore, every <InlineMath>{`n - k`}</InlineMath> columns of <InlineMath>{`\mathbf{H}`}</InlineMath> are
              linearly independent iff every square submatrix of <InlineMath>{`\mathbf{A}`}</InlineMath> is non-singular.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\mathcal{C}`}</InlineMath> be an <InlineMath>{`[n, k, -]`}</InlineMath> code with
          parity check matrix:
        </p>
        <MathBlock>{`
          \\mathbf{H} = (\\mathbf{A} \\mid \\mathbf{I}_{n-k})
        `}</MathBlock>
        <p>
          Then <InlineMath>{`\mathcal{C}`}</InlineMath> is an MDS code if and only if every square
          submatrix of <InlineMath>{`\mathbf{A}`}</InlineMath> is non-singular.
        </p>
      </Theorem>

      <Example title="MDS Code over GF(7)">
        <p>Consider the matrix over <InlineMath>{`\text{GF}(7)`}</InlineMath>:</p>
        <MathBlock>{`
          \\mathbf{A} = \\begin{pmatrix} 1 & 6 & 2 & 5 & 1 \\\\ 1 & 4 & 3 & 3 & 6 \\\\ 1 & 5 & 5 & 1 & 5 \\end{pmatrix}
        `}</MathBlock>
        <p className="mt-2">
          Every <InlineMath>{`2 \\times 2`}</InlineMath> submatrix is non-singular, and computing all{' '}
          <InlineMath>{`\binom{5}{3} = 10`}</InlineMath> determinants of <InlineMath>{`3 \\times 3`}</InlineMath> submatrices
          shows they are all non-zero in <InlineMath>{`\text{GF}(7)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Therefore:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The <InlineMath>{`[8, 3, -]`}</InlineMath> code with generator matrix <InlineMath>{`\mathbf{G} = (\mathbf{I}_3 \mid \mathbf{A})`}</InlineMath> is MDS</li>
          <li>The <InlineMath>{`[8, 5, -]`}</InlineMath> code with parity check matrix <InlineMath>{`\mathbf{H} = (\mathbf{A} \mid \mathbf{I}_3)`}</InlineMath> is MDS</li>
        </ul>
      </Example>

      <Example title="Binary MDS Codes">
        <p>
          The only binary MDS codes are the <strong>trivial codes</strong>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`[n, 1, n]`}</InlineMath> - repetition code</li>
          <li><InlineMath>{`[n, n-1, 2]`}</InlineMath> - parity check code</li>
          <li><InlineMath>{`[n, n, 1]`}</InlineMath> - full space</li>
        </ul>
        <p className="mt-2">
          <strong>Proof:</strong> If <InlineMath>{`k {'>'} 1`}</InlineMath> and{' '}
          <InlineMath>{`n {'>'} k + 1`}</InlineMath>, then a generator matrix in standard form has
          a column of weight less than <InlineMath>{`k`}</InlineMath> and greater than 1. If the{' '}
          <InlineMath>{`i`}</InlineMath>th entry of this column is 0, then <InlineMath>{`k`}</InlineMath> columns
          (the first <InlineMath>{`k`}</InlineMath> except the <InlineMath>{`i`}</InlineMath>th, plus this column)
          are linearly dependent. Thus no non-trivial binary MDS code exists.
        </p>
      </Example>

      <Callout type="note" title="Key Insight">
        The characterization of MDS codes via the non-singularity of all square submatrices provides
        a practical method for verifying whether a code is MDS. This condition will be crucial
        when we study the existence problem for MDS codes.
      </Callout>
    </LessonLayout>
  );
}
