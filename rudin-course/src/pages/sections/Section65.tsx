import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <h2 className="text-2xl font-semibold mb-4">Determinants</h2>

      <p className="mb-4">
        Determinants play a fundamental role in linear algebra and calculus. In this section,
        we develop the theory of determinants from the perspective of multilinear algebra,
        characterizing the determinant as the unique alternating multilinear function that
        equals <InlineMath>{'1'}</InlineMath> on the identity matrix.
      </p>

      <Definition title="9.38 - k-Linear Functions">
        <p className="mb-3">
          Let <InlineMath>{'k'}</InlineMath> be a positive integer. A function <InlineMath>{'f'}</InlineMath> of <InlineMath>{'k'}</InlineMath> vectors
          <InlineMath>{'\\mathbf{x}_1, \\ldots, \\mathbf{x}_k \\in \\mathbb{R}^n'}</InlineMath> is called <em><InlineMath>{'k'}</InlineMath>-linear</em>
          (or <em>multilinear</em>) if it is linear in each variable separately:
        </p>
        <MathBlock>{'f(\\mathbf{x}_1, \\ldots, a\\mathbf{x}_j + b\\mathbf{y}_j, \\ldots, \\mathbf{x}_k) = a \\cdot f(\\mathbf{x}_1, \\ldots, \\mathbf{x}_j, \\ldots, \\mathbf{x}_k) + b \\cdot f(\\mathbf{x}_1, \\ldots, \\mathbf{y}_j, \\ldots, \\mathbf{x}_k)'}</MathBlock>
        <p className="mt-3">
          for each <InlineMath>{'j = 1, \\ldots, k'}</InlineMath> and all scalars <InlineMath>{'a, b'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="9.39 - Alternating Functions">
        <p className="mb-3">
          A <InlineMath>{'k'}</InlineMath>-linear function <InlineMath>{'f'}</InlineMath> is called <em>alternating</em> if
        </p>
        <MathBlock>{'f(\\mathbf{x}_1, \\ldots, \\mathbf{x}_k) = 0'}</MathBlock>
        <p className="mb-3">
          whenever two of its arguments are equal: <InlineMath>{'\\mathbf{x}_i = \\mathbf{x}_j'}</InlineMath> for some <InlineMath>{'i \\neq j'}</InlineMath>.
        </p>
        <p>
          An equivalent condition is that swapping two arguments changes the sign:
        </p>
        <MathBlock>{'f(\\ldots, \\mathbf{x}_i, \\ldots, \\mathbf{x}_j, \\ldots) = -f(\\ldots, \\mathbf{x}_j, \\ldots, \\mathbf{x}_i, \\ldots)'}</MathBlock>
      </Definition>

      <Theorem
        title="9.40 - Alternating Implies Antisymmetric"
        proof={
          <>
            <p className="mb-3">
              Suppose <InlineMath>{'f'}</InlineMath> is alternating. Consider <InlineMath>{'f(\\ldots, \\mathbf{x}_i + \\mathbf{x}_j, \\ldots, \\mathbf{x}_i + \\mathbf{x}_j, \\ldots)'}</InlineMath>
              with the sum in positions <InlineMath>{'i'}</InlineMath> and <InlineMath>{'j'}</InlineMath>. This equals <InlineMath>{'0'}</InlineMath> by the alternating property.
            </p>
            <p className="mb-3">
              Expanding by multilinearity:
            </p>
            <MathBlock>{'f(\\ldots, \\mathbf{x}_i, \\ldots, \\mathbf{x}_i, \\ldots) + f(\\ldots, \\mathbf{x}_i, \\ldots, \\mathbf{x}_j, \\ldots) + f(\\ldots, \\mathbf{x}_j, \\ldots, \\mathbf{x}_i, \\ldots) + f(\\ldots, \\mathbf{x}_j, \\ldots, \\mathbf{x}_j, \\ldots) = 0'}</MathBlock>
            <p>
              The first and last terms are <InlineMath>{'0'}</InlineMath> (equal arguments).
              Thus <InlineMath>{'f(\\ldots, \\mathbf{x}_i, \\ldots, \\mathbf{x}_j, \\ldots) = -f(\\ldots, \\mathbf{x}_j, \\ldots, \\mathbf{x}_i, \\ldots)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'f'}</InlineMath> is a <InlineMath>{'k'}</InlineMath>-linear alternating function, then swapping any two
          arguments reverses the sign of <InlineMath>{'f'}</InlineMath>.
        </p>
      </Theorem>

      <Definition title="9.41 - The Determinant">
        <p className="mb-3">
          Let <InlineMath>{'A = [\\mathbf{a}_1 \\,|\\, \\mathbf{a}_2 \\,|\\, \\cdots \\,|\\, \\mathbf{a}_n]'}</InlineMath> be
          an <InlineMath>{'n \\times n'}</InlineMath> matrix with column vectors <InlineMath>{'\\mathbf{a}_j \\in \\mathbb{R}^n'}</InlineMath>.
        </p>
        <p className="mb-3">
          The <em>determinant</em> is the unique function <InlineMath>{'\\det: M_n(\\mathbb{R}) \\to \\mathbb{R}'}</InlineMath> such that:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>{'\\det'}</InlineMath> is <InlineMath>{'n'}</InlineMath>-linear in the columns</li>
          <li><InlineMath>{'\\det'}</InlineMath> is alternating (changes sign when columns are swapped)</li>
          <li><InlineMath>{'\\det(I) = 1'}</InlineMath> where <InlineMath>{'I'}</InlineMath> is the identity matrix</li>
        </ul>
      </Definition>

      <Theorem
        title="9.42 - Existence and Uniqueness of Determinant"
        proof={
          <>
            <p className="mb-3">
              <strong>Uniqueness:</strong> Suppose <InlineMath>{'f'}</InlineMath> is <InlineMath>{'n'}</InlineMath>-linear alternating with <InlineMath>{'f(I) = 1'}</InlineMath>.
              Write each column as <InlineMath>{'\\mathbf{a}_j = \\sum_i a_{ij} \\mathbf{e}_i'}</InlineMath>. By multilinearity:
            </p>
            <MathBlock>{'f(A) = \\sum_{i_1, \\ldots, i_n} a_{i_1 1} \\cdots a_{i_n n} \\cdot f(\\mathbf{e}_{i_1}, \\ldots, \\mathbf{e}_{i_n})'}</MathBlock>
            <p className="mb-3">
              By the alternating property, <InlineMath>{'f(\\mathbf{e}_{i_1}, \\ldots, \\mathbf{e}_{i_n}) = 0'}</InlineMath> unless
              all indices are distinct (a permutation of <InlineMath>{'\\{1, \\ldots, n\\}'}</InlineMath>).
            </p>
            <p className="mb-3">
              For a permutation <InlineMath>{'\\sigma'}</InlineMath>, repeated swaps show <InlineMath>{'f(\\mathbf{e}_{\\sigma(1)}, \\ldots, \\mathbf{e}_{\\sigma(n)}) = \\text{sgn}(\\sigma)'}</InlineMath>
              where <InlineMath>{'\\text{sgn}(\\sigma) = \\pm 1'}</InlineMath> is the sign of the permutation. Thus:
            </p>
            <MathBlock>{'f(A) = \\sum_{\\sigma \\in S_n} \\text{sgn}(\\sigma) \\cdot a_{\\sigma(1), 1} \\cdots a_{\\sigma(n), n}'}</MathBlock>
            <p className="mb-3">
              <strong>Existence:</strong> Define <InlineMath>{'\\det(A)'}</InlineMath> by this formula. Direct verification shows
              it is multilinear, alternating, and <InlineMath>{'\\det(I) = 1'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          There exists a unique function satisfying the three defining properties of the determinant.
          It is given by the Leibniz formula:
        </p>
        <MathBlock>{'\\det(A) = \\sum_{\\sigma \\in S_n} \\text{sgn}(\\sigma) \\prod_{j=1}^n a_{\\sigma(j), j}'}</MathBlock>
        <p className="mt-3">
          where the sum is over all permutations <InlineMath>{'\\sigma'}</InlineMath> of <InlineMath>{'\\{1, \\ldots, n\\}'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="9.43 - Small Determinants">
        <p className="mb-3">
          <strong>(a)</strong> For <InlineMath>{'n = 2'}</InlineMath>:
        </p>
        <MathBlock>{'\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc'}</MathBlock>
        <p className="mb-3">
          <strong>(b)</strong> For <InlineMath>{'n = 3'}</InlineMath>:
        </p>
        <MathBlock>{'\\det \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = aei + bfg + cdh - ceg - bdi - afh'}</MathBlock>
        <p>
          This is sometimes called the "rule of Sarrus" (diagonal method).
        </p>
      </Example>

      <Theorem
        title="9.44 - Multiplicativity of Determinant"
        proof={
          <>
            <p className="mb-3">
              Fix a matrix <InlineMath>{'B'}</InlineMath> and consider the function
              <InlineMath>{'f(A) = \\det(AB)'}</InlineMath>. We show <InlineMath>{'f(A) = \\det(A) \\det(B)'}</InlineMath>.
            </p>
            <p className="mb-3">
              The columns of <InlineMath>{'AB'}</InlineMath> are <InlineMath>{'A\\mathbf{b}_1, \\ldots, A\\mathbf{b}_n'}</InlineMath>.
              Since <InlineMath>{'\\det'}</InlineMath> is multilinear and alternating in its columns,
              and matrix multiplication is linear in each column:
            </p>
            <MathBlock>{'f(A) = \\det(AB)'}</MathBlock>
            <p className="mb-3">
              is multilinear and alternating in the <em>columns</em> of <InlineMath>{'A'}</InlineMath>.
              Thus <InlineMath>{'f(A) = f(I) \\cdot \\det(A) = \\det(B) \\cdot \\det(A)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          For any <InlineMath>{'n \\times n'}</InlineMath> matrices <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath>:
        </p>
        <MathBlock>{'\\det(AB) = \\det(A) \\det(B)'}</MathBlock>
      </Theorem>

      <Theorem
        title="9.45 - Determinant and Invertibility"
        proof={
          <>
            <p className="mb-3">
              <strong>(<InlineMath>{'\\Rightarrow'}</InlineMath>)</strong> If <InlineMath>{'A'}</InlineMath> is invertible,
              then <InlineMath>{'AA^{-1} = I'}</InlineMath>, so
              <InlineMath>{'\\det(A) \\det(A^{-1}) = \\det(I) = 1'}</InlineMath>.
              Thus <InlineMath>{'\\det(A) \\neq 0'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>(<InlineMath>{'\\Leftarrow'}</InlineMath>)</strong> If <InlineMath>{'\\det(A) \\neq 0'}</InlineMath>,
              then the columns of <InlineMath>{'A'}</InlineMath> are linearly independent
              (if dependent, we could express one as a linear combination of others,
              and the alternating property would give <InlineMath>{'\\det(A) = 0'}</InlineMath>).
            </p>
            <p>
              Linear independence of <InlineMath>{'n'}</InlineMath> vectors in <InlineMath>{'\\mathbb{R}^n'}</InlineMath>
              implies they form a basis, so <InlineMath>{'A'}</InlineMath> is invertible.
            </p>
          </>
        }
      >
        <p className="mb-3">
          A square matrix <InlineMath>{'A'}</InlineMath> is invertible if and only if <InlineMath>{'\\det(A) \\neq 0'}</InlineMath>.
        </p>
        <p>
          When <InlineMath>{'A'}</InlineMath> is invertible, <InlineMath>{'\\det(A^{-1}) = 1/\\det(A)'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="9.46 - Geometric Interpretation">
        <p className="mb-3">
          The absolute value <InlineMath>{'|\\det(A)|'}</InlineMath> equals the <InlineMath>{'n'}</InlineMath>-dimensional
          volume of the parallelepiped spanned by the columns of <InlineMath>{'A'}</InlineMath>.
        </p>
        <p className="mb-3">
          In <InlineMath>{'\\mathbb{R}^2'}</InlineMath>: <InlineMath>{'|\\det(A)|'}</InlineMath> is the area of the parallelogram
          formed by the two column vectors.
        </p>
        <p className="mb-3">
          In <InlineMath>{'\\mathbb{R}^3'}</InlineMath>: <InlineMath>{'|\\det(A)|'}</InlineMath> is the volume of the parallelepiped
          (the "scalar triple product" of the columns).
        </p>
        <p>
          The sign of <InlineMath>{'\\det(A)'}</InlineMath> indicates orientation: positive preserves orientation,
          negative reverses it.
        </p>
      </Example>

      <Theorem
        title="9.47 - Determinant of Transpose"
        proof={
          <>
            <p className="mb-3">
              Both <InlineMath>{'\\det(A)'}</InlineMath> and <InlineMath>{'\\det(A^T)'}</InlineMath> are given by the Leibniz formula.
              Transposing swaps rows and columns. The sum over permutations is the same, just reindexed.
            </p>
          </>
        }
      >
        <p>
          For any square matrix <InlineMath>{'A'}</InlineMath>: <InlineMath>{'\\det(A^T) = \\det(A)'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Cofactor Expansion">
        <p className="mb-3">
          The determinant can be computed by expanding along any row or column.
          The <em>cofactor</em> <InlineMath>{'C_{ij}'}</InlineMath> is <InlineMath>{'(-1)^{i+j} M_{ij}'}</InlineMath>,
          where <InlineMath>{'M_{ij}'}</InlineMath> is the minor (determinant of the submatrix with row <InlineMath>{'i'}</InlineMath> and column <InlineMath>{'j'}</InlineMath> deleted).
        </p>
        <MathBlock>{'\\det(A) = \\sum_{j=1}^n a_{ij} C_{ij} = \\sum_{i=1}^n a_{ij} C_{ij}'}</MathBlock>
        <p>
          This recursive formula reduces an <InlineMath>{'n \\times n'}</InlineMath> determinant to <InlineMath>{'n'}</InlineMath>
          determinants of size <InlineMath>{'(n-1) \\times (n-1)'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The determinant is the unique <InlineMath>{'n'}</InlineMath>-linear alternating function with <InlineMath>{'\\det(I) = 1'}</InlineMath></li>
        <li>Leibniz formula: <InlineMath>{'\\det(A) = \\sum_{\\sigma} \\text{sgn}(\\sigma) \\prod_j a_{\\sigma(j),j}'}</InlineMath></li>
        <li>Multiplicativity: <InlineMath>{'\\det(AB) = \\det(A)\\det(B)'}</InlineMath></li>
        <li><InlineMath>{'A'}</InlineMath> is invertible if and only if <InlineMath>{'\\det(A) \\neq 0'}</InlineMath></li>
        <li><InlineMath>{'|\\det(A)|'}</InlineMath> measures volume of the parallelepiped spanned by columns</li>
        <li>The sign of <InlineMath>{'\\det(A)'}</InlineMath> indicates orientation preservation or reversal</li>
      </ul>
    </LessonLayout>
  );
}
