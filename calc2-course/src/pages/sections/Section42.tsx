import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2>Orthogonal Matrices</h2>

      <p>
        Orthogonal matrices are the real analogs of unitary matrices. They
        represent transformations that preserve lengths and angles in real
        Euclidean space.
      </p>

      <h3>Definition and Properties</h3>

      <Callout type="info">
        <strong>Definition:</strong> A real square matrix <InlineMath>{'A'}</InlineMath>{' '}
        is <strong>orthogonal</strong> if <InlineMath>{'AA^t = I'}</InlineMath>.
      </Callout>

      <p>
        Equivalently:
      </p>
      <ul>
        <li>
          <InlineMath>{'A^{-1} = A^t'}</InlineMath>
        </li>
        <li>
          The columns of <InlineMath>{'A'}</InlineMath> form an orthonormal set
        </li>
        <li>
          The rows of <InlineMath>{'A'}</InlineMath> form an orthonormal set
        </li>
      </ul>

      <h3>Proper and Improper Orthogonal Matrices</h3>

      <p>
        Since <InlineMath>{'(\\det A)^2 = \\det(AA^t) = 1'}</InlineMath>, we have{' '}
        <InlineMath>{'\\det A = \\pm 1'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> A real orthogonal matrix is called:
        <br /><br />
        - <strong>Proper</strong> (or a rotation) if{' '}
        <InlineMath>{'\\det A = +1'}</InlineMath>
        <br />
        - <strong>Improper</strong> (or a reflection) if{' '}
        <InlineMath>{'\\det A = -1'}</InlineMath>
      </Callout>

      <h3>Two-Dimensional Case</h3>

      <p>
        Every <InlineMath>{'2 \\times 2'}</InlineMath> proper orthogonal matrix has
        the form:
      </p>
      <MathBlock>{`A = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}`}</MathBlock>
      <p>
        This represents a <strong>rotation</strong> through angle{' '}
        <InlineMath>{'\\theta'}</InlineMath> about the origin.
      </p>

      <p>
        Improper <InlineMath>{'2 \\times 2'}</InlineMath> orthogonal matrices include:
      </p>
      <MathBlock>{`\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix} \\quad \\text{(reflection through x-axis)}`}</MathBlock>
      <MathBlock>{`\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix} \\quad \\text{(reflection through y-axis)}`}</MathBlock>

      <h3>Three-Dimensional Examples</h3>

      <p>
        The following <InlineMath>{'3 \\times 3'}</InlineMath> matrices are orthogonal:
      </p>

      <p>
        <strong>(a) Reflection in the xy-plane:</strong>
      </p>
      <MathBlock>{`\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & -1 \\end{bmatrix}`}</MathBlock>

      <p>
        <strong>(b) Reflection through the x-axis:</strong>
      </p>
      <MathBlock>{`\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -1 \\end{bmatrix}`}</MathBlock>

      <p>
        <strong>(c) Reflection through the origin:</strong>
      </p>
      <MathBlock>{`\\begin{bmatrix} -1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -1 \\end{bmatrix}`}</MathBlock>

      <p>
        <strong>(d) Rotation about the x-axis:</strong>
      </p>
      <MathBlock>{`\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{bmatrix}`}</MathBlock>

      <h3>Real Symmetric Matrices</h3>

      <p>
        A key result from the theory of Hermitian matrices:
      </p>

      <Callout type="info">
        <strong>Theorem:</strong> Every real symmetric matrix can be
        diagonalized by a real orthogonal matrix. That is, if{' '}
        <InlineMath>{'A = A^t'}</InlineMath> is real symmetric, there exists a real
        orthogonal matrix <InlineMath>{'C'}</InlineMath> such that{' '}
        <InlineMath>{'C^t A C'}</InlineMath> is diagonal.
      </Callout>

      <p>
        This is because:
      </p>
      <ol>
        <li>
          Real symmetric matrices are Hermitian, so their eigenvalues are real
        </li>
        <li>
          The eigenvectors can be chosen to be real
        </li>
        <li>
          Eigenvectors for distinct eigenvalues are orthogonal
        </li>
        <li>
          The diagonalizing matrix has orthonormal columns, so it's orthogonal
        </li>
      </ol>

      <h3>Skew-Symmetric Matrices</h3>

      <p>
        Real skew-symmetric matrices (<InlineMath>{'A = -A^t'}</InlineMath>) are{' '}
        <em>not</em> generally diagonalizable by real orthogonal matrices. For
        example:
      </p>
      <MathBlock>{`A = \\begin{bmatrix} 0 & a \\\\ -a & 0 \\end{bmatrix}`}</MathBlock>
      <p>
        has eigenvalues <InlineMath>{'\\pm ai'}</InlineMath>, which are not real.
        Diagonalizing this matrix requires complex numbers.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Orthogonal matrices are the rigid motions
        of real Euclidean space—they preserve lengths, angles, and handedness
        (if proper). The fact that real symmetric matrices can be diagonalized
        by orthogonal matrices is extremely useful in applications like
        principal component analysis, where finding orthogonal eigenvectors
        corresponds to finding uncorrelated principal components.
      </Callout>
    </LessonLayout>
  );
}
