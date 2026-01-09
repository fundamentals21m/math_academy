import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <p>
        Hadamard matrices are special square matrices with entries from{' '}
        <InlineMath>{`\{'{-1, +1}'\}`}</InlineMath> that have remarkable orthogonality properties.
        These matrices play a fundamental role in combinatorics, signal processing, and coding
        theory. In this section, we study their construction and key properties.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Definition and Basic Properties</h2>

      <Definition title="Hadamard Matrix">
        <p>
          A <strong>Hadamard matrix</strong> of order <InlineMath>{`n`}</InlineMath> is an{' '}
          <InlineMath>{`n \\times n`}</InlineMath> matrix <InlineMath>{`H`}</InlineMath> with entries{' '}
          <InlineMath>{`\\pm 1`}</InlineMath> satisfying:
        </p>
        <MathBlock>{`HH^T = nI_n`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`I_n`}</InlineMath> is the identity matrix of order <InlineMath>{`n`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Orthogonality Interpretation">
        <p>
          The condition <InlineMath>{`HH^T = nI_n`}</InlineMath> means that any two distinct rows of{' '}
          <InlineMath>{`H`}</InlineMath> are orthogonal. Since each row has <InlineMath>{`n`}</InlineMath>
          entries each equal to <InlineMath>{`\\pm 1`}</InlineMath>, the inner product of a row with
          itself is <InlineMath>{`n`}</InlineMath>, while the inner product of any two distinct rows
          is 0.
        </p>
      </Callout>

      <Theorem
        title="Necessary Condition for Existence"
        proof={
          <>
            <p>
              If <InlineMath>{`n = 1`}</InlineMath>, then <InlineMath>{`H = (1)`}</InlineMath> or{' '}
              <InlineMath>{`H = (-1)`}</InlineMath> works.
            </p>
            <p className="mt-2">
              If <InlineMath>{`n = 2`}</InlineMath>, we can take:
            </p>
            <MathBlock>{`
              H = \begin\\{pmatrix\\} 1 & 1 \\ 1 & -1 \end\\{pmatrix\\}
            `}</MathBlock>
            <p className="mt-2">
              Now suppose <InlineMath>{`n {'>'} 2`}</InlineMath> and <InlineMath>{`H`}</InlineMath> is
              a Hadamard matrix of order <InlineMath>{`n`}</InlineMath>. By permuting rows and
              multiplying rows by <InlineMath>{`-1`}</InlineMath>, we may assume the first row
              and first column consist entirely of <InlineMath>{`+1`}</InlineMath>'s.
            </p>
            <p className="mt-2">
              Consider rows 2 and 3. Row 1 has all <InlineMath>{`+1`}</InlineMath>'s. The orthogonality
              conditions give us:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Row 2 has <InlineMath>{`n/2`}</InlineMath> entries equal to <InlineMath>{`+1`}</InlineMath> and <InlineMath>{`n/2`}</InlineMath> equal to <InlineMath>{`-1`}</InlineMath></li>
              <li>Row 3 has <InlineMath>{`n/2`}</InlineMath> entries equal to <InlineMath>{`+1`}</InlineMath> and <InlineMath>{`n/2`}</InlineMath> equal to <InlineMath>{`-1`}</InlineMath></li>
            </ul>
            <p className="mt-2">
              Let <InlineMath>{`a`}</InlineMath> be the number of positions where both rows 2 and 3
              have <InlineMath>{`+1`}</InlineMath>. By orthogonality of rows 2 and 3 with row 1,
              each row has exactly <InlineMath>{`n/2`}</InlineMath> plus signs. By orthogonality of
              rows 2 and 3 with each other, the number of agreements minus disagreements is 0,
              giving <InlineMath>{`a = n/4`}</InlineMath>. Hence <InlineMath>{`n`}</InlineMath> is
              divisible by 4.
            </p>
          </>
        }
      >
        <p>
          If a Hadamard matrix of order <InlineMath>{`n`}</InlineMath> exists, then either{' '}
          <InlineMath>{`n = 1`}</InlineMath>, <InlineMath>{`n = 2`}</InlineMath>, or{' '}
          <InlineMath>{`n \\equiv 0 \\pmod 4`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Sylvester Construction</h2>

      <Definition title="Sylvester (Kronecker) Construction">
        <p>
          The <strong>Sylvester construction</strong> produces Hadamard matrices of order{' '}
          <InlineMath>{`2^k`}</InlineMath> recursively. Define <InlineMath>{`H_1 = (1)`}</InlineMath> and:
        </p>
        <MathBlock>{`
          H_{'{'}{2^k}{'}'} = H_2 \otimes H_{'{'}{2^\\{k-1\\}}{'}'} = \begin\\{pmatrix\\} H_{'{'}{2^\\{k-1\\}}{'}'} & H_{'{'}{2^\\{k-1\\}}{'}'} \\ H_{'{'}{2^\\{k-1\\}}{'}'} & -H_{'{'}{2^\\{k-1\\}}{'}'} \end\\{pmatrix\\}
        `}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\otimes`}</InlineMath> denotes the Kronecker (tensor) product.
        </p>
      </Definition>

      <Theorem
        title="Sylvester Matrices are Hadamard"
        proof={
          <>
            <p>
              We prove by induction that <InlineMath>{`H_{'{'}{2^k}{'}'}H_{'{'}{2^k}{'}'}^T = 2^k I_{'{'}{2^k}{'}'}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Base case: <InlineMath>{`H_1 H_1^T = (1)(1) = 1 \\cdot I_1`}</InlineMath>.
            </p>
            <p className="mt-2">
              Inductive step: Assume <InlineMath>{`H_{'{'}{2^\\{k-1\\}}{'}'}H_{'{'}{2^\\{k-1\\}}{'}'}^T = 2^\\{k-1\\} I_{'{'}{2^\\{k-1\\}}{'}'}`}</InlineMath>. Then:
            </p>
            <MathBlock>{`
              H_{'{'}{2^k}{'}'}H_{'{'}{2^k}{'}'}^T = \begin\\{pmatrix\\} H_{'{'}{2^\\{k-1\\}}{'}'} & H_{'{'}{2^\\{k-1\\}}{'}'} \\ H_{'{'}{2^\\{k-1\\}}{'}'} & -H_{'{'}{2^\\{k-1\\}}{'}'} \end\\{pmatrix\\} \begin\\{pmatrix\\} H_{'{'}{2^\\{k-1\\}}{'}'}^T & H_{'{'}{2^\\{k-1\\}}{'}'}^T \\ H_{'{'}{2^\\{k-1\\}}{'}'}^T & -H_{'{'}{2^\\{k-1\\}}{'}'}^T \end\\{pmatrix\\}
            `}</MathBlock>
            <p className="mt-2">Computing the product:</p>
            <MathBlock>{`
              = \begin\\{pmatrix\\} 2H_{'{'}{2^\\{k-1\\}}{'}'}H_{'{'}{2^\\{k-1\\}}{'}'}^T & 0 \\ 0 & 2H_{'{'}{2^\\{k-1\\}}{'}'}H_{'{'}{2^\\{k-1\\}}{'}'}^T \end\\{pmatrix\\} = 2 \cdot 2^\\{k-1\\} I_{'{'}{2^k}{'}'} = 2^k I_{'{'}{2^k}{'}'}
            `}</MathBlock>
          </>
        }
      >
        <p>
          For all <InlineMath>{`k \\geq 0`}</InlineMath>, the matrix <InlineMath>{`H_{'{'}{2^k}{'}'}`}</InlineMath>
          produced by the Sylvester construction is a Hadamard matrix of order <InlineMath>{`2^k`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Sylvester Matrices of Small Orders">
        <p>The first few Sylvester-Hadamard matrices are:</p>
        <MathBlock>{`
          H_1 = (1), \quad H_2 = \begin\\{pmatrix\\} 1 & 1 \\ 1 & -1 \end\\{pmatrix\\}
        `}</MathBlock>
        <MathBlock>{`
          H_4 = \begin\\{pmatrix\\} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end\\{pmatrix\\}
        `}</MathBlock>
        <MathBlock>{`
          H_8 = \begin\\{pmatrix\\} 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 & 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 & 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 \\ 1 & 1 & 1 & 1 & -1 & -1 & -1 & -1 \\ 1 & -1 & 1 & -1 & -1 & 1 & -1 & 1 \\ 1 & 1 & -1 & -1 & -1 & -1 & 1 & 1 \\ 1 & -1 & -1 & 1 & -1 & 1 & 1 & -1 \end\\{pmatrix\\}
        `}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Paley Construction</h2>

      <Definition title="Quadratic Residue">
        <p>
          Let <InlineMath>{`p`}</InlineMath> be an odd prime. An integer <InlineMath>{`a`}</InlineMath>
          not divisible by <InlineMath>{`p`}</InlineMath> is a <strong>quadratic residue</strong>
          modulo <InlineMath>{`p`}</InlineMath> if there exists <InlineMath>{`x`}</InlineMath> such that{' '}
          <InlineMath>{`x^2 \\equiv a \\pmod p`}</InlineMath>. Otherwise, <InlineMath>{`a`}</InlineMath>
          is a <strong>quadratic non-residue</strong>.
        </p>
        <p className="mt-2">
          The <strong>Legendre symbol</strong> is defined as:
        </p>
        <MathBlock>{`
          \left(\frac{'{a}{p}'}\right) = \begin\\{cases\\} 1 & \\text{if } a \\text{ is a quadratic residue mod } p \\ -1 & \\text{if } a \\text{ is a quadratic non-residue mod } p \\ 0 & \\text{if } p \mid a \end\\{cases\\}
        `}</MathBlock>
      </Definition>

      <Definition title="Paley Construction (Type I)">
        <p>
          Let <InlineMath>{`p`}</InlineMath> be an odd prime with{' '}
          <InlineMath>{`p \\equiv 3 \\pmod 4`}</InlineMath>. Define the{' '}
          <InlineMath>{`p \\times p`}</InlineMath> matrix <InlineMath>{`Q`}</InlineMath> by:
        </p>
        <MathBlock>{`Q_\\{ij\\} = \left(\frac{'{j - i}{p}'}\right)`}</MathBlock>
        <p className="mt-2">
          for <InlineMath>{`0 \\leq i, j \\leq p-1`}</InlineMath>. The Paley Type I Hadamard matrix
          of order <InlineMath>{`p + 1`}</InlineMath> is:
        </p>
        <MathBlock>{`
          H = \begin\\{pmatrix\\} 1 & \\mathbf{1}^T \\ -\\mathbf{1} & Q - I_p \end\\{pmatrix\\}
        `}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\mathbf{1}`}</InlineMath> is the all-ones column vector of length{' '}
          <InlineMath>{`p`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Paley Type I Construction is Valid"
        proof={
          <>
            <p>
              For <InlineMath>{`p \\equiv 3 \\pmod 4`}</InlineMath>, we have{' '}
              <InlineMath>{`(-1/p) = -1`}</InlineMath>, which means <InlineMath>{`-1`}</InlineMath> is
              a quadratic non-residue.
            </p>
            <p className="mt-2">
              The matrix <InlineMath>{`Q`}</InlineMath> is skew-symmetric:{' '}
              <InlineMath>{`Q^T = -Q`}</InlineMath>. This is because{' '}
              <InlineMath>{`Q_\\{ji\\} = ((i-j)/p) = ((-1)/p)((j-i)/p) = -Q_\\{ij\\}`}</InlineMath>.
            </p>
            <p className="mt-2">
              The key identity is <InlineMath>{`QQ^T = pI_p - J_p`}</InlineMath>, where{' '}
              <InlineMath>{`J_p`}</InlineMath> is the all-ones matrix.
            </p>
            <p className="mt-2">
              One can verify that <InlineMath>{`HH^T = (p+1)I_\\{p+1\\}`}</InlineMath> by direct
              computation using these properties.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{`p`}</InlineMath> is an odd prime with{' '}
          <InlineMath>{`p \\equiv 3 \\pmod 4`}</InlineMath>, then the Paley Type I construction
          yields a Hadamard matrix of order <InlineMath>{`p + 1`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Paley Construction for p = 3">
        <p>
          For <InlineMath>{`p = 3`}</InlineMath>, the quadratic residues mod 3 are{' '}
          <InlineMath>{`\{'{1}'\}`}</InlineMath>, so <InlineMath>{`(1/3) = 1`}</InlineMath> and{' '}
          <InlineMath>{`(2/3) = -1`}</InlineMath>.
        </p>
        <MathBlock>{`
          Q = \begin\\{pmatrix\\} 0 & 1 & -1 \\ -1 & 0 & 1 \\ 1 & -1 & 0 \end\\{pmatrix\\}, \quad Q - I_3 = \begin\\{pmatrix\\} -1 & 1 & -1 \\ -1 & -1 & 1 \\ 1 & -1 & -1 \end\\{pmatrix\\}
        `}</MathBlock>
        <MathBlock>{`
          H_4 = \begin\\{pmatrix\\} 1 & 1 & 1 & 1 \\ -1 & -1 & 1 & -1 \\ -1 & -1 & -1 & 1 \\ -1 & 1 & -1 & -1 \end\\{pmatrix\\}
        `}</MathBlock>
        <p className="mt-2">
          One can verify <InlineMath>{`H_4 H_4^T = 4I_4`}</InlineMath>.
        </p>
      </Example>

      <Example title="Paley Construction for p = 7">
        <p>
          For <InlineMath>{`p = 7`}</InlineMath> (note <InlineMath>{`7 \\equiv 3 \\pmod 4`}</InlineMath>),
          the quadratic residues mod 7 are <InlineMath>{`\{'{1, 2, 4}'\}`}</InlineMath>.
        </p>
        <p className="mt-2">
          The Paley construction yields a Hadamard matrix of order 8, which is equivalent
          (up to row/column permutations and sign changes) to the Sylvester matrix{' '}
          <InlineMath>{`H_8`}</InlineMath>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Hadamard Conjecture</h2>

      <Callout type="warning" title="The Hadamard Conjecture">
        <p>
          <strong>Hadamard Conjecture:</strong> A Hadamard matrix of order <InlineMath>{`n`}</InlineMath>
          exists for every <InlineMath>{`n`}</InlineMath> divisible by 4.
        </p>
        <p className="mt-2">
          This famous conjecture remains open. As of now, Hadamard matrices have been
          constructed for all orders <InlineMath>{`n = 4k`}</InlineMath> with{' '}
          <InlineMath>{`k \\leq 166`}</InlineMath>, but the smallest undecided case is{' '}
          <InlineMath>{`n = 668`}</InlineMath>.
        </p>
      </Callout>

      <Theorem title="Known Existence Results">
        <p>Hadamard matrices exist for the following orders:</p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{`n = 1, 2`}</InlineMath></li>
          <li><InlineMath>{`n = 2^k`}</InlineMath> for all <InlineMath>{`k \\geq 0`}</InlineMath> (Sylvester construction)</li>
          <li><InlineMath>{`n = p + 1`}</InlineMath> where <InlineMath>{`p \\equiv 3 \\pmod 4`}</InlineMath> is prime (Paley Type I)</li>
          <li><InlineMath>{`n = 2(p + 1)`}</InlineMath> where <InlineMath>{`p \\equiv 1 \\pmod 4`}</InlineMath> is prime (Paley Type II)</li>
          <li><InlineMath>{`n = mn`}</InlineMath> if Hadamard matrices of orders <InlineMath>{`m`}</InlineMath> and <InlineMath>{`n`}</InlineMath> exist (Kronecker product)</li>
        </ul>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Normalized Hadamard Matrices</h2>

      <Definition title="Normalized Hadamard Matrix">
        <p>
          A Hadamard matrix is <strong>normalized</strong> if its first row and first column
          consist entirely of <InlineMath>{`+1`}</InlineMath>'s.
        </p>
        <p className="mt-2">
          Any Hadamard matrix can be normalized by multiplying appropriate rows and columns
          by <InlineMath>{`-1`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Properties of Normalized Hadamard Matrices"
        proof={
          <>
            <p>
              If <InlineMath>{`H`}</InlineMath> is normalized, the first row is all{' '}
              <InlineMath>{`+1`}</InlineMath>'s. For any other row to be orthogonal to the first
              row, it must have equal numbers of <InlineMath>{`+1`}</InlineMath>'s and{' '}
              <InlineMath>{`-1`}</InlineMath>'s, hence <InlineMath>{`n/2`}</InlineMath> of each.
            </p>
            <p className="mt-2">
              For a <InlineMath>{`2 \\times 2`}</InlineMath> submatrix formed by two non-first rows,
              orthogonality forces each of the four <InlineMath>{`(\\pm 1, \\pm 1)`}</InlineMath>
              patterns to appear equally often, hence <InlineMath>{`n/4`}</InlineMath> times each.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`H`}</InlineMath> be a normalized Hadamard matrix of order{' '}
          <InlineMath>{`n \\geq 2`}</InlineMath>. Then:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li>
            Each row (except the first) has exactly <InlineMath>{`n/2`}</InlineMath> entries
            equal to <InlineMath>{`+1`}</InlineMath> and <InlineMath>{`n/2`}</InlineMath> entries
            equal to <InlineMath>{`-1`}</InlineMath>.
          </li>
          <li>
            For <InlineMath>{`n \\geq 4`}</InlineMath>, any two rows (other than the first)
            agree in exactly <InlineMath>{`n/4`}</InlineMath> of the non-first columns and
            disagree in exactly <InlineMath>{`n/4`}</InlineMath> of them.
          </li>
        </ol>
      </Theorem>

      <Callout type="success" title="Connection to Coding Theory">
        <p>
          The rows of a normalized Hadamard matrix (after conversion from{' '}
          <InlineMath>{`\{'{-1, +1}'\}`}</InlineMath> to <InlineMath>{`\{'{1, 0}'\}`}</InlineMath>
          via <InlineMath>{`-1 \\mapsto 1`}</InlineMath>, <InlineMath>{`+1 \\mapsto 0`}</InlineMath>)
          form the basis for Hadamard codes, which we will study in the next section.
        </p>
      </Callout>
    </LessonLayout>
  );
}
