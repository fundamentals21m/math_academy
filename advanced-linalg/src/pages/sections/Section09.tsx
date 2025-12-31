import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section09Quiz } from '@/data/quizzes';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Determinants: Measuring Volume and Orientation</h2>

      <p>
        The <strong>determinant</strong> is a scalar value associated with a square matrix that
        encodes fundamental geometric and algebraic information: invertibility, volume scaling,
        and orientation.
      </p>

      <Callout type="info">
        <strong>Geometric Meaning:</strong> For a matrix <Math>A</Math>, <Math>|\det(A)|</Math> gives
        the factor by which <Math>A</Math> scales volumes, and <Math>{`\\text{sign}`}(\det(A))</Math> indicates
        whether <Math>A</Math> preserves or reverses orientation.
      </Callout>

      <h2>Axiomatic Definition</h2>

      <Definition title="Determinant (Axiomatic)">
        <p>
          The <strong>determinant</strong> is the unique function <Math>\det: M_n(F) \to F</Math> satisfying:
        </p>
        <ol className="list-decimal list-inside text-dark-300 mt-2">
          <li><strong>Multilinear in columns:</strong> Linear in each column when others are fixed</li>
          <li><strong>Alternating:</strong> <Math>\det(A) = 0</Math> if two columns are equal</li>
          <li><strong>Normalized:</strong> <Math>\det(I) = 1</Math></li>
        </ol>
      </Definition>

      <Theorem title="Consequences of the Axioms">
        <p>From the three axioms, we can derive:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li>Swapping two columns negates the determinant</li>
          <li>Adding a multiple of one column to another doesn't change det</li>
          <li>Scaling a column by <Math>c</Math> scales det by <Math>c</Math></li>
          <li>If any column is zero, <Math>\det = 0</Math></li>
        </ul>
      </Theorem>

      <h2>Computing Determinants</h2>

      <Example title="2×2 Determinant">
        <MathBlock>{`\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc`}</MathBlock>
        <p className="mt-2">
          <strong>Geometric interpretation:</strong> This is the signed area of the parallelogram
          spanned by <Math>(a, c)</Math> and <Math>(b, d)</Math>.
        </p>
      </Example>

      <Example title="3×3 Determinant">
        <MathBlock>{`\\det\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)`}</MathBlock>
        <p className="mt-2">
          <strong>Geometric interpretation:</strong> This is the signed volume of the parallelepiped
          spanned by the three column vectors.
        </p>
      </Example>

      <Definition title="Cofactor Expansion">
        <p>
          The <strong>cofactor</strong> of entry <Math>a_{'ij'}</Math> is <Math>C_{'ij'} = (-1)^{'{i+j}'} M_{'ij'}</Math>,
          where <Math>M_{'ij'}</Math> is the <strong>minor</strong> — the determinant of the <Math>(n-1) \times (n-1)</Math>
          matrix obtained by deleting row <Math>i</Math> and column <Math>j</Math>.
        </p>
      </Definition>

      <Theorem title="Cofactor Expansion">
        <p>The determinant can be computed by expansion along any row <Math>i</Math>:</p>
        <MathBlock>{`\\det(A) = \\sum_{j=1}^n a_{ij} C_{ij} = \\sum_{j=1}^n a_{ij} (-1)^{i+j} M_{ij}`}</MathBlock>
        <p className="mt-2">Or along any column <Math>j</Math>:</p>
        <MathBlock>{`\\det(A) = \\sum_{i=1}^n a_{ij} C_{ij}`}</MathBlock>
      </Theorem>

      <Example title="Cofactor Expansion Example">
        <p>Compute using expansion along row 1:</p>
        <MathBlock>{`\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`= 1 \\cdot \\det\\begin{pmatrix} 5 & 6 \\\\ 8 & 9 \\end{pmatrix} - 2 \\cdot \\det\\begin{pmatrix} 4 & 6 \\\\ 7 & 9 \\end{pmatrix} + 3 \\cdot \\det\\begin{pmatrix} 4 & 5 \\\\ 7 & 8 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`= 1(45 - 48) - 2(36 - 42) + 3(32 - 35)`}</MathBlock>
        <MathBlock>{`= 1(-3) - 2(-6) + 3(-3) = -3 + 12 - 9 = 0`}</MathBlock>
        <p className="mt-2">(The rows are linearly dependent, so det = 0.)</p>
      </Example>

      <h2>Key Properties</h2>

      <Theorem
        title="Determinant of Transpose"
        proof={
          <>
            <p>
              Both <Math>\det(A)</Math> and <Math>\det(A^T)</Math> can be computed using the same permutation
              formula. The symmetry of the formula gives equality.
            </p>
          </>
        }
      >
        <p><Math>\det(A^T) = \det(A)</Math></p>
      </Theorem>

      <Theorem
        title="Determinant Product Rule"
        proof={
          <>
            <p>Consider <Math>\phi(A) = \det(AB) / \det(B)</Math> when <Math>\det(B) \neq 0</Math>.</p>
            <p className="mt-2"><Math>\phi</Math> is multilinear and alternating in the columns of <Math>A</Math>.</p>
            <p className="mt-2">Since <Math>\phi(I) = \det(B)/\det(B) = 1</Math>, by uniqueness: <Math>\phi(A) = \det(A)</Math>.</p>
            <p className="mt-2">So <Math>\det(AB) = \det(A)\det(B)</Math>.</p>
          </>
        }
      >
        <p><Math>\det(AB) = \det(A) \det(B)</Math></p>
      </Theorem>

      <Theorem
        title="Invertibility Criterion"
        proof={
          <>
            <p><strong>(⇒)</strong> If <Math>A</Math> is invertible, then <Math>AA^{'{-1}'} = I</Math>.</p>
            <MathBlock>{`\\det(A)\\det(A^{-1}) = \\det(I) = 1`}</MathBlock>
            <p>So <Math>\det(A) \neq 0</Math>.</p>
            <p className="mt-2"><strong>(⇐)</strong> If <Math>\det(A) \neq 0</Math>, the columns are linearly independent (otherwise <Math>\det = 0</Math>), so <Math>A</Math> has full rank and is invertible.</p>
          </>
        }
      >
        <p>
          A square matrix <Math>A</Math> is invertible if and only if <Math>\det(A) \neq 0</Math>.
        </p>
      </Theorem>

      <Theorem title="Determinant of Inverse">
        <p>If <Math>A</Math> is invertible: <Math>\det(A^{'{-1}'}) = 1/\det(A)</Math></p>
      </Theorem>

      <h2>The Adjugate Matrix</h2>

      <Definition title="Adjugate (Classical Adjoint)">
        <p>
          The <strong>adjugate</strong> of <Math>A</Math>, denoted <Math>{`\\text{adj}`}(A)</Math>, is the
          transpose of the cofactor matrix:
        </p>
        <MathBlock>{`\\text{adj}(A)_{ij} = C_{ji}`}</MathBlock>
      </Definition>

      <Theorem title="Inverse via Adjugate">
        <p>
          <Math>A \cdot {`\\text{adj}`}(A) = \det(A) \cdot I</Math>
        </p>
        <p className="mt-2">If <Math>A</Math> is invertible:</p>
        <MathBlock>{`A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)`}</MathBlock>
      </Theorem>

      <h2>Cramer's Rule</h2>

      <Theorem
        title="Cramer's Rule"
        proof={
          <>
            <p>Let <Math>A_i</Math> be <Math>A</Math> with column <Math>i</Math> replaced by <Math>{`\\mathbf{b}`}</Math>.</p>
            <p className="mt-2">Using the adjugate formula for <Math>A^{'{-1}'}</Math>:</p>
            <MathBlock>{`x_i = (A^{-1}\\mathbf{b})_i = \\frac{1}{\\det(A)} \\sum_j (\\text{adj}(A))_{ij} b_j = \\frac{1}{\\det(A)} \\sum_j C_{ji} b_j`}</MathBlock>
            <p className="mt-2">
              The sum <Math>\sum_j C_{'ji'} b_j</Math> is exactly the cofactor expansion of <Math>\det(A_i)</Math>
              along column <Math>i</Math>.
            </p>
          </>
        }
      >
        <p>
          If <Math>A</Math> is invertible and <Math>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</Math>, then:
        </p>
        <MathBlock>{`x_i = \\frac{\\det(A_i)}{\\det(A)}`}</MathBlock>
        <p className="mt-2">
          where <Math>A_i</Math> is <Math>A</Math> with column <Math>i</Math> replaced by <Math>{`\\mathbf{b}`}</Math>.
        </p>
      </Theorem>

      <Example title="Cramer's Rule Application">
        <p>Solve:</p>
        <MathBlock>{`\\begin{cases} 2x + y = 5 \\\\ x + 3y = 5 \\end{cases}`}</MathBlock>
        <MathBlock>{`A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}, \\quad \\mathbf{b} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`\\det(A) = 6 - 1 = 5`}</MathBlock>
        <MathBlock>{`x = \\frac{\\det\\begin{pmatrix} 5 & 1 \\\\ 5 & 3 \\end{pmatrix}}{5} = \\frac{15 - 5}{5} = 2`}</MathBlock>
        <MathBlock>{`y = \\frac{\\det\\begin{pmatrix} 2 & 5 \\\\ 1 & 5 \\end{pmatrix}}{5} = \\frac{10 - 5}{5} = 1`}</MathBlock>
      </Example>

      <Callout type="warning">
        <strong>Practical Note:</strong> Cramer's Rule is elegant but computationally expensive
        (<Math>O(n!)</Math> naive, <Math>O(n^4)</Math> with smart cofactor computation). For practical
        computation, Gaussian elimination (<Math>O(n^3)</Math>) is preferred.
      </Callout>

      <h2>Special Matrices</h2>

      <Theorem title="Determinant of Special Matrices">
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-2">
          <li><strong>Triangular matrix:</strong> <Math>\det = </Math> product of diagonal entries</li>
          <li><strong>Diagonal matrix:</strong> <Math>\det = </Math> product of diagonal entries</li>
          <li><strong>Block triangular:</strong> <Math>\det\begin{'{pmatrix}'} A & * \\ 0 & B \end{'{pmatrix}'} = \det(A) \det(B)</Math></li>
          <li><strong>Orthogonal matrix:</strong> <Math>\det = \pm 1</Math></li>
        </ul>
      </Theorem>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Determinant is multilinear, alternating, normalized (<Math>\det(I) = 1</Math>)</li>
          <li>Cofactor expansion works along any row or column</li>
          <li><Math>\det(AB) = \det(A)\det(B)</Math> and <Math>\det(A^T) = \det(A)</Math></li>
          <li><Math>A</Math> is invertible iff <Math>\det(A) \neq 0</Math></li>
          <li>Cramer's Rule: <Math>x_i = \det(A_i) / \det(A)</Math></li>
          <li><Math>|\det(A)|</Math> = volume scaling factor; sign = orientation</li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={9}
        questions={section09Quiz}
        title="Determinants Quiz"
      />
    </LessonLayout>
  );
}
