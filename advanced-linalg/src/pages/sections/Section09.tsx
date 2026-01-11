import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
        <strong>Geometric Meaning:</strong> For a matrix <InlineMath>A</InlineMath>, <InlineMath>|\det(A)|</InlineMath> gives
        the factor by which <InlineMath>A</InlineMath> scales volumes, and <InlineMath>{`\\text{sign}`}(\det(A))</InlineMath> indicates
        whether <InlineMath>A</InlineMath> preserves or reverses orientation.
      </Callout>

      <h2>Axiomatic Definition</h2>

      <Definition title="Determinant (Axiomatic)">
        <p>
          The <strong>determinant</strong> is the unique function <InlineMath>\det: M_n(F) \to F</InlineMath> satisfying:
        </p>
        <ol className="list-decimal list-inside text-dark-300 mt-2">
          <li><strong>Multilinear in columns:</strong> Linear in each column when others are fixed</li>
          <li><strong>Alternating:</strong> <InlineMath>\det(A) = 0</InlineMath> if two columns are equal</li>
          <li><strong>Normalized:</strong> <InlineMath>\det(I) = 1</InlineMath></li>
        </ol>
      </Definition>

      <Theorem
        title="Consequences of the Axioms"
        proof={
          <>
            <p><strong>Swapping columns negates det:</strong></p>
            <p className="mt-2">
              Let <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> be columns. By multilinearity and alternating:
            </p>
            <MathBlock>{`0 = \\det(\\ldots, a+b, \\ldots, a+b, \\ldots) = \\det(\\ldots, a, \\ldots, a, \\ldots) + \\det(\\ldots, a, \\ldots, b, \\ldots)`}</MathBlock>
            <MathBlock>{`+ \\det(\\ldots, b, \\ldots, a, \\ldots) + \\det(\\ldots, b, \\ldots, b, \\ldots)`}</MathBlock>
            <p className="mt-2">The first and last terms are 0 (alternating), so <InlineMath>\det(...,a,...,b,...) = -\det(...,b,...,a,...)</InlineMath>.</p>
            <p className="mt-4"><strong>Column replacement doesn't change det:</strong></p>
            <p className="mt-2">
              <InlineMath>\det(..., a + cb, ..., b, ...) = \det(..., a, ..., b, ...) + c\det(..., b, ..., b, ...) = \det(..., a, ..., b, ...)</InlineMath>
            </p>
            <p className="mt-4"><strong>Scaling:</strong> Direct from multilinearity in that column.</p>
            <p className="mt-4"><strong>Zero column:</strong> <InlineMath>\det(..., {`\\mathbf{0}`}, ...) = \det(..., 0 \cdot {`\\mathbf{0}`}, ...) = 0 \cdot \det(..., {`\\mathbf{0}`}, ...) = 0</InlineMath>.</p>
          </>
        }
      >
        <p>From the three axioms, we can derive:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li>Swapping two columns negates the determinant</li>
          <li>Adding a multiple of one column to another doesn't change det</li>
          <li>Scaling a column by <InlineMath>c</InlineMath> scales det by <InlineMath>c</InlineMath></li>
          <li>If any column is zero, <InlineMath>\det = 0</InlineMath></li>
        </ul>
      </Theorem>

      <h2>Computing Determinants</h2>

      <Example title="2×2 Determinant">
        <MathBlock>{`\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc`}</MathBlock>
        <p className="mt-2">
          <strong>Geometric interpretation:</strong> This is the signed area of the parallelogram
          spanned by <InlineMath>(a, c)</InlineMath> and <InlineMath>(b, d)</InlineMath>.
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
          The <strong>cofactor</strong> of entry <InlineMath>a_{'ij'}</InlineMath> is <InlineMath>C_{'ij'} = (-1)^{'{i+j}'} M_{'ij'}</InlineMath>,
          where <InlineMath>M_{'ij'}</InlineMath> is the <strong>minor</strong> — the determinant of the <InlineMath>(n-1) \times (n-1)</InlineMath>
          matrix obtained by deleting row <InlineMath>i</InlineMath> and column <InlineMath>j</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Cofactor Expansion"
        proof={
          <>
            <p>
              We prove by induction that any function satisfying multilinearity, alternating, and <InlineMath>\det(I) = 1</InlineMath> admits cofactor expansion.
            </p>
            <p className="mt-2"><strong>Base case:</strong> For <InlineMath>n = 1</InlineMath>, <InlineMath>\det(a) = a</InlineMath> (normalization).</p>
            <p className="mt-2"><strong>Inductive step:</strong> By multilinearity in column 1:</p>
            <MathBlock>{`\\det(A) = \\det\\left(\\sum_{i=1}^n a_{i1} e_i, a_2, \\ldots, a_n\\right) = \\sum_{i=1}^n a_{i1} \\det(e_i, a_2, \\ldots, a_n)`}</MathBlock>
            <p className="mt-2">
              For each term <InlineMath>\det(e_i, a_2, \ldots, a_n)</InlineMath>, expand using alternating property: moving row <InlineMath>i</InlineMath> to position 1 requires <InlineMath>i-1</InlineMath> swaps, giving factor <InlineMath>(-1)^{'{i-1}'}</InlineMath>.
            </p>
            <p className="mt-2">
              The remaining <InlineMath>(n-1) \times (n-1)</InlineMath> determinant is <InlineMath>M_{'{i1}'}</InlineMath>. So <InlineMath>\det(e_i, a_2, \ldots, a_n) = (-1)^{'{i+1}'} M_{'{i1}'}</InlineMath>.
            </p>
            <p className="mt-2">
              Expansion along any row or column follows by transposition (since <InlineMath>\det(A^T) = \det(A)</InlineMath>).
            </p>
          </>
        }
      >
        <p>The determinant can be computed by expansion along any row <InlineMath>i</InlineMath>:</p>
        <MathBlock>{`\\det(A) = \\sum_{j=1}^n a_{ij} C_{ij} = \\sum_{j=1}^n a_{ij} (-1)^{i+j} M_{ij}`}</MathBlock>
        <p className="mt-2">Or along any column <InlineMath>j</InlineMath>:</p>
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
              Both <InlineMath>\det(A)</InlineMath> and <InlineMath>\det(A^T)</InlineMath> can be computed using the same permutation
              formula. The symmetry of the formula gives equality.
            </p>
          </>
        }
      >
        <p><InlineMath>\det(A^T) = \det(A)</InlineMath></p>
      </Theorem>

      <Theorem
        title="Determinant Product Rule"
        proof={
          <>
            <p>Consider <InlineMath>\phi(A) = \det(AB) / \det(B)</InlineMath> when <InlineMath>\det(B) \neq 0</InlineMath>.</p>
            <p className="mt-2"><InlineMath>\phi</InlineMath> is multilinear and alternating in the columns of <InlineMath>A</InlineMath>.</p>
            <p className="mt-2">Since <InlineMath>\phi(I) = \det(B)/\det(B) = 1</InlineMath>, by uniqueness: <InlineMath>\phi(A) = \det(A)</InlineMath>.</p>
            <p className="mt-2">So <InlineMath>\det(AB) = \det(A)\det(B)</InlineMath>.</p>
          </>
        }
      >
        <p><InlineMath>\det(AB) = \det(A) \det(B)</InlineMath></p>
      </Theorem>

      <Theorem
        title="Invertibility Criterion"
        proof={
          <>
            <p><strong>(⇒)</strong> If <InlineMath>A</InlineMath> is invertible, then <InlineMath>AA^{'{-1}'} = I</InlineMath>.</p>
            <MathBlock>{`\\det(A)\\det(A^{-1}) = \\det(I) = 1`}</MathBlock>
            <p>So <InlineMath>\det(A) \neq 0</InlineMath>.</p>
            <p className="mt-2"><strong>(⇐)</strong> If <InlineMath>\det(A) \neq 0</InlineMath>, the columns are linearly independent (otherwise <InlineMath>\det = 0</InlineMath>), so <InlineMath>A</InlineMath> has full rank and is invertible.</p>
          </>
        }
      >
        <p>
          A square matrix <InlineMath>A</InlineMath> is invertible if and only if <InlineMath>\det(A) \neq 0</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="Determinant of Inverse"
        proof={
          <>
            <p>If <InlineMath>A</InlineMath> is invertible, then <InlineMath>AA^{'{-1}'} = I</InlineMath>. By the product rule:</p>
            <MathBlock>{`\\det(A)\\det(A^{-1}) = \\det(AA^{-1}) = \\det(I) = 1`}</MathBlock>
            <p className="mt-2">
              Since <InlineMath>A</InlineMath> is invertible, <InlineMath>\det(A) \neq 0</InlineMath>. Dividing both sides by <InlineMath>\det(A)</InlineMath>:
            </p>
            <MathBlock>{`\\det(A^{-1}) = \\frac{1}{\\det(A)}`}</MathBlock>
          </>
        }
      >
        <p>If <InlineMath>A</InlineMath> is invertible: <InlineMath>\det(A^{'{-1}'}) = 1/\det(A)</InlineMath></p>
      </Theorem>

      <h2>The Adjugate Matrix</h2>

      <Definition title="Adjugate (Classical Adjoint)">
        <p>
          The <strong>adjugate</strong> of <InlineMath>A</InlineMath>, denoted <InlineMath>{`\\text{adj}`}(A)</InlineMath>, is the
          transpose of the cofactor matrix:
        </p>
        <MathBlock>{`\\text{adj}(A)_{ij} = C_{ji}`}</MathBlock>
      </Definition>

      <Theorem
        title="Inverse via Adjugate"
        proof={
          <>
            <p>
              The <InlineMath>(i,j)</InlineMath> entry of <InlineMath>A \cdot {`\\text{adj}`}(A)</InlineMath> is:
            </p>
            <MathBlock>{`\\sum_{k=1}^n a_{ik} (\\text{adj}(A))_{kj} = \\sum_{k=1}^n a_{ik} C_{jk}`}</MathBlock>
            <p className="mt-2"><strong>Case <InlineMath>i = j</InlineMath>:</strong> This is <InlineMath>{`\\sum_k a_{ik} C_{ik}`}</InlineMath>, which is cofactor expansion along row <InlineMath>i</InlineMath>, giving <InlineMath>{`\\det(A)`}</InlineMath>.</p>
            <p className="mt-2"><strong>Case <InlineMath>i \neq j</InlineMath>:</strong> This is cofactor expansion of a matrix with row <InlineMath>j</InlineMath> replaced by row <InlineMath>i</InlineMath>, which has two identical rows. By the alternating property, this equals 0.</p>
            <p className="mt-2">Therefore <InlineMath>A \cdot {`\\text{adj}`}(A) = \det(A) \cdot I</InlineMath>.</p>
            <p className="mt-2">If <InlineMath>\det(A) \neq 0</InlineMath>, divide by <InlineMath>\det(A)</InlineMath>: <InlineMath>A \cdot \frac{1}{'\\det(A)'}{`\\text{adj}`}(A) = I</InlineMath>, so <InlineMath>A^{'{-1}'} = \frac{1}{'\\det(A)'}{`\\text{adj}`}(A)</InlineMath>.</p>
          </>
        }
      >
        <p>
          <InlineMath>A \cdot {`\\text{adj}`}(A) = \det(A) \cdot I</InlineMath>
        </p>
        <p className="mt-2">If <InlineMath>A</InlineMath> is invertible:</p>
        <MathBlock>{`A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)`}</MathBlock>
      </Theorem>

      <h2>Cramer's Rule</h2>

      <Theorem
        title="Cramer's Rule"
        proof={
          <>
            <p>Let <InlineMath>A_i</InlineMath> be <InlineMath>A</InlineMath> with column <InlineMath>i</InlineMath> replaced by <InlineMath>{`\\mathbf{b}`}</InlineMath>.</p>
            <p className="mt-2">Using the adjugate formula for <InlineMath>A^{'{-1}'}</InlineMath>:</p>
            <MathBlock>{`x_i = (A^{-1}\\mathbf{b})_i = \\frac{1}{\\det(A)} \\sum_j (\\text{adj}(A))_{ij} b_j = \\frac{1}{\\det(A)} \\sum_j C_{ji} b_j`}</MathBlock>
            <p className="mt-2">
              The sum <InlineMath>\sum_j C_{'ji'} b_j</InlineMath> is exactly the cofactor expansion of <InlineMath>\det(A_i)</InlineMath>
              along column <InlineMath>i</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>A</InlineMath> is invertible and <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</InlineMath>, then:
        </p>
        <MathBlock>{`x_i = \\frac{\\det(A_i)}{\\det(A)}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>A_i</InlineMath> is <InlineMath>A</InlineMath> with column <InlineMath>i</InlineMath> replaced by <InlineMath>{`\\mathbf{b}`}</InlineMath>.
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
        (<InlineMath>O(n!)</InlineMath> naive, <InlineMath>O(n^4)</InlineMath> with smart cofactor computation). For practical
        computation, Gaussian elimination (<InlineMath>O(n^3)</InlineMath>) is preferred.
      </Callout>

      <h2>Special Matrices</h2>

      <Theorem
        title="Determinant of Special Matrices"
        proof={
          <>
            <p><strong>Triangular matrix:</strong></p>
            <p className="mt-2">
              Use cofactor expansion along the first column (for lower triangular) or first row (for upper triangular). Only one entry is nonzero, giving a recursion that yields the product of diagonal entries.
            </p>
            <p className="mt-4"><strong>Block triangular:</strong></p>
            <p className="mt-2">
              By row operations on the block structure (or cofactor expansion), the determinant factors as <InlineMath>\det(A)\det(B)</InlineMath>. The off-diagonal block doesn't contribute to the determinant.
            </p>
            <p className="mt-4"><strong>Orthogonal matrix:</strong></p>
            <p className="mt-2">If <InlineMath>Q^T Q = I</InlineMath>, then:</p>
            <MathBlock>{`\\det(Q^T)\\det(Q) = \\det(I) = 1`}</MathBlock>
            <p className="mt-2">Since <InlineMath>\det(Q^T) = \det(Q)</InlineMath>, we have <InlineMath>\det(Q)^2 = 1</InlineMath>, so <InlineMath>\det(Q) = \pm 1</InlineMath>.</p>
          </>
        }
      >
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-2">
          <li><strong>Triangular matrix:</strong> <InlineMath>\det = </InlineMath> product of diagonal entries</li>
          <li><strong>Diagonal matrix:</strong> <InlineMath>\det = </InlineMath> product of diagonal entries</li>
          <li><strong>Block triangular:</strong> <InlineMath>\det\begin{'{pmatrix}'} A & * \\ 0 & B \end{'{pmatrix}'} = \det(A) \det(B)</InlineMath></li>
          <li><strong>Orthogonal matrix:</strong> <InlineMath>\det = \pm 1</InlineMath></li>
        </ul>
      </Theorem>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Determinant is multilinear, alternating, normalized (<InlineMath>\det(I) = 1</InlineMath>)</li>
          <li>Cofactor expansion works along any row or column</li>
          <li><InlineMath>\det(AB) = \det(A)\det(B)</InlineMath> and <InlineMath>\det(A^T) = \det(A)</InlineMath></li>
          <li><InlineMath>A</InlineMath> is invertible iff <InlineMath>\det(A) \neq 0</InlineMath></li>
          <li>Cramer's Rule: <InlineMath>x_i = \det(A_i) / \det(A)</InlineMath></li>
          <li><InlineMath>|\det(A)|</InlineMath> = volume scaling factor; sign = orientation</li>
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
