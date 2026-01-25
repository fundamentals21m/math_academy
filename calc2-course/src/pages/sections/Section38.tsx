import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2>Hermitian and Skew-Hermitian Matrices</h2>

      <p>
        We now define Hermitian and skew-Hermitian matrices directly, motivated
        by Theorem 5.6.
      </p>

      <h3>Definitions</h3>

      <Callout type="info">
        <strong>Definition:</strong> A square matrix{' '}
        <InlineMath>{'A = (a_{ij})'}</InlineMath> is called{' '}
        <strong>Hermitian</strong> if:
        <MathBlock>{`a_{ij} = \\bar{a_{ji}} \\quad \\text{for all } i, j`}</MathBlock>
        It is called <strong>skew-Hermitian</strong> if:
        <MathBlock>{`a_{ij} = -\\bar{a_{ji}} \\quad \\text{for all } i, j`}</MathBlock>
      </Callout>

      <p>
        By Theorem 5.6, a transformation <InlineMath>{'T'}</InlineMath> on a
        finite-dimensional space is Hermitian (or skew-Hermitian) if and only
        if its matrix relative to an orthonormal basis is Hermitian (or
        skew-Hermitian).
      </p>

      <h3>The Conjugate Matrix</h3>

      <p>
        Let <InlineMath>{'\\bar{A}'}</InlineMath> denote the matrix obtained by
        replacing each entry of <InlineMath>{'A'}</InlineMath> by its complex
        conjugate. Then:
      </p>

      <ul>
        <li>
          <InlineMath>{'A'}</InlineMath> is Hermitian if and only if{' '}
          <InlineMath>{'A = \\bar{A}^t'}</InlineMath> (equals the transpose of its
          conjugate)
        </li>
        <li>
          <InlineMath>{'A'}</InlineMath> is skew-Hermitian if and only if{' '}
          <InlineMath>{'A = -\\bar{A}^t'}</InlineMath>
        </li>
      </ul>

      <h3>Related Matrix Types</h3>

      <Callout type="info">
        <strong>Definition:</strong> A square matrix <InlineMath>{'A'}</InlineMath>{' '}
        is called <strong>symmetric</strong> if <InlineMath>{'A = A^t'}</InlineMath>.
        It is called <strong>skew-symmetric</strong> if{' '}
        <InlineMath>{'A = -A^t'}</InlineMath>.
      </Callout>

      <h3>Examples</h3>

      <p>
        <strong>Example 1:</strong> If <InlineMath>{'A'}</InlineMath> is real, then{' '}
        <InlineMath>{'\\bar{A} = A'}</InlineMath>, so{' '}
        <InlineMath>{'A^* = A^t'}</InlineMath>. Thus, every real Hermitian matrix is
        symmetric. However, a symmetric matrix need not be Hermitian (if it has
        complex entries).
      </p>

      <p>
        <strong>Example 2:</strong> Consider:
      </p>
      <MathBlock>{`A = \\begin{bmatrix} 1+i & 2 \\\\ 3-i & 4i \\end{bmatrix}`}</MathBlock>
      <p>Then:</p>
      <MathBlock>{`\\bar{A} = \\begin{bmatrix} 1-i & 2 \\\\ 3+i & -4i \\end{bmatrix}, \\quad A^t = \\begin{bmatrix} 1+i & 3-i \\\\ 2 & 4i \\end{bmatrix}, \\quad A^* = \\begin{bmatrix} 1-i & 3+i \\\\ 2 & -4i \\end{bmatrix}`}</MathBlock>

      <p>
        <strong>Example 3:</strong> Both matrices are Hermitian:
      </p>
      <MathBlock>{`\\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\end{bmatrix} \\quad \\text{and} \\quad \\begin{bmatrix} 1 & 2+i \\\\ 2-i & 3 \\end{bmatrix}`}</MathBlock>
      <p>The first is also symmetric; the second is not.</p>

      <p>
        <strong>Example 4:</strong> Both matrices are skew-Hermitian:
      </p>
      <MathBlock>{`\\begin{bmatrix} 0 & -2 \\\\ 2 & 0 \\end{bmatrix} \\quad \\text{and} \\quad \\begin{bmatrix} i & -2 \\\\ 2 & 3i \\end{bmatrix}`}</MathBlock>
      <p>The first is also skew-symmetric; the second is not.</p>

      <h3>Properties of Diagonal Elements</h3>

      <Callout type="info">
        <strong>Observations:</strong>
        <br /><br />
        - All diagonal elements of a Hermitian matrix are <strong>real</strong>{' '}
        (since <InlineMath>{'a_{ii} = \\bar{a_{ii}}'}</InlineMath>).
        <br />
        - All diagonal elements of a skew-Hermitian matrix are{' '}
        <strong>pure imaginary</strong>.
        <br />
        - All diagonal elements of a skew-symmetric matrix are{' '}
        <strong>zero</strong>.
      </Callout>

      <h3>Decomposition</h3>

      <p>
        <strong>Example 5:</strong> For any square matrix <InlineMath>{'A'}</InlineMath>:
      </p>
      <MathBlock>{`B = \\frac{1}{2}(A + A^*) \\quad \\text{is Hermitian}`}</MathBlock>
      <MathBlock>{`C = \\frac{1}{2}(A - A^*) \\quad \\text{is skew-Hermitian}`}</MathBlock>
      <p>
        and <InlineMath>{'A = B + C'}</InlineMath>. This decomposition is unique.
      </p>

      <p>
        Similarly, every square matrix can be uniquely decomposed as the sum of
        a symmetric matrix <InlineMath>{'\\frac{1}{2}(A + A^t)'}</InlineMath>{' '}
        and a skew-symmetric matrix{' '}
        <InlineMath>{'\\frac{1}{2}(A - A^t)'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Hermitian matrices are the complex analog
        of symmetric matrices, adapted to work correctly with complex inner
        products. The conjugate transpose plays the role that the ordinary
        transpose plays for real matrices. Any matrix can be split into
        Hermitian and skew-Hermitian parts, analogous to splitting a complex
        number into real and imaginary parts.
      </Callout>
    </LessonLayout>
  );
}
