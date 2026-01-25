import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2>Matrix Representations for Hermitian Operators</h2>

      <p>
        We now characterize Hermitian and skew-Hermitian transformations in
        terms of their matrix representations. This provides a practical test
        for these important properties.
      </p>

      <h3>Characterization via Basis Elements</h3>

      <Callout type="info">
        <strong>Theorem 5.5:</strong> Let <InlineMath>{'(e_1, \\ldots, e_n)'}</InlineMath>{' '}
        be a basis for <InlineMath>{'V'}</InlineMath> and let{' '}
        <InlineMath>{'T: V \\to V'}</InlineMath> be a linear transformation. Then:
        <br /><br />
        (a) <InlineMath>{'T'}</InlineMath> is Hermitian if and only if{' '}
        <InlineMath>{'(T(e_j), e_i) = (e_j, T(e_i))'}</InlineMath> for all{' '}
        <InlineMath>{'i'}</InlineMath> and <InlineMath>{'j'}</InlineMath>.
        <br />
        (b) <InlineMath>{'T'}</InlineMath> is skew-Hermitian if and only if{' '}
        <InlineMath>{'(T(e_j), e_i) = -(e_j, T(e_i))'}</InlineMath> for all{' '}
        <InlineMath>{'i'}</InlineMath> and <InlineMath>{'j'}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> For any <InlineMath>{'x = \\sum x_j e_j'}</InlineMath>{' '}
        and <InlineMath>{'y = \\sum y_i e_i'}</InlineMath>:
      </p>
      <MathBlock>{`(T(x), y) = \\sum_{j=1}^n \\sum_{i=1}^n x_j \\bar{y_i} (T(e_j), e_i)`}</MathBlock>
      <MathBlock>{`(x, T(y)) = \\sum_{j=1}^n \\sum_{i=1}^n x_j \\bar{y_i} (e_j, T(e_i))`}</MathBlock>

      <p>
        These are equal for all <InlineMath>{'x, y'}</InlineMath> if and only if
        the corresponding terms are equal.
      </p>

      <h3>Matrix Characterization (Orthonormal Basis)</h3>

      <Callout type="info">
        <strong>Theorem 5.6:</strong> Let{' '}
        <InlineMath>{'(e_1, \\ldots, e_n)'}</InlineMath> be an{' '}
        <strong>orthonormal</strong> basis for <InlineMath>{'V'}</InlineMath>, and
        let <InlineMath>{'A = (a_{ij})'}</InlineMath> be the matrix of{' '}
        <InlineMath>{'T'}</InlineMath> relative to this basis. Then:
        <br /><br />
        (a) <InlineMath>{'T'}</InlineMath> is Hermitian if and only if{' '}
        <InlineMath>{'a_{ij} = \\bar{a_{ji}}'}</InlineMath> for all{' '}
        <InlineMath>{'i, j'}</InlineMath>.
        <br />
        (b) <InlineMath>{'T'}</InlineMath> is skew-Hermitian if and only if{' '}
        <InlineMath>{'a_{ij} = -\\bar{a_{ji}}'}</InlineMath> for all{' '}
        <InlineMath>{'i, j'}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> Since <InlineMath>{'A'}</InlineMath> is the matrix
        of <InlineMath>{'T'}</InlineMath>:
      </p>
      <MathBlock>{`T(e_j) = \\sum_{k=1}^n a_{kj}e_k`}</MathBlock>

      <p>
        Taking the inner product with <InlineMath>{'e_i'}</InlineMath> and using
        orthonormality:
      </p>
      <MathBlock>{`(T(e_j), e_i) = \\sum_{k=1}^n a_{kj}(e_k, e_i) = a_{ij}`}</MathBlock>

      <p>
        since <InlineMath>{'(e_k, e_i) = 0'}</InlineMath> unless{' '}
        <InlineMath>{'k = i'}</InlineMath>.
      </p>

      <p>
        Interchanging <InlineMath>{'i'}</InlineMath> and <InlineMath>{'j'}</InlineMath>,
        taking conjugates, and using Hermitian symmetry of the inner product:
      </p>
      <MathBlock>{`\\bar{a_{ji}} = \\overline{(T(e_i), e_j)} = (e_j, T(e_i))`}</MathBlock>

      <p>
        Now apply Theorem 5.5 to complete the proof.
      </p>

      <h3>The Matrix Conditions</h3>

      <p>
        The conditions in Theorem 5.6 define two important matrix classes:
      </p>

      <ul>
        <li>
          <InlineMath>{'a_{ij} = \\bar{a_{ji}}'}</InlineMath>: the
          matrix equals its <strong>conjugate transpose</strong>
        </li>
        <li>
          <InlineMath>{'a_{ij} = -\\bar{a_{ji}}'}</InlineMath>: the
          matrix equals the negative of its conjugate transpose
        </li>
      </ul>

      <h3>Example</h3>

      <p>
        Consider <InlineMath>{'V = \\mathbb{C}^2'}</InlineMath> with standard
        orthonormal basis. The matrix:
      </p>
      <MathBlock>{`A = \\begin{bmatrix} 3 & 2+i \\\\ 2-i & 5 \\end{bmatrix}`}</MathBlock>

      <p>
        Check: <InlineMath>{'a_{12} = 2+i'}</InlineMath> and{' '}
        <InlineMath>{'\\bar{a_{21}} = \\overline{2-i} = 2+i'}</InlineMath>.
        Similarly for other entries. So <InlineMath>{'A'}</InlineMath> is Hermitian,
        and the corresponding operator <InlineMath>{'T'}</InlineMath> is Hermitian.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Relative to an orthonormal basis, checking
        whether an operator is Hermitian reduces to checking whether its matrix
        equals its conjugate transpose. This makes the abstract notion of
        "shifting between factors of an inner product" into a concrete,
        computable condition.
      </Callout>
    </LessonLayout>
  );
}
