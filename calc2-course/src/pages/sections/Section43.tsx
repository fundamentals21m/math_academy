import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2>Quadratic Forms</h2>

      <p>
        Quadratic forms provide a connection between symmetric operators and
        quadratic functions. They arise naturally in optimization, physics, and
        geometry.
      </p>

      <h3>Definition</h3>

      <p>
        Let <InlineMath>{'V'}</InlineMath> be a real Euclidean space and{' '}
        <InlineMath>{'T: V \\to V'}</InlineMath> a symmetric operator. The{' '}
        <strong>quadratic form</strong> associated with <InlineMath>{'T'}</InlineMath>{' '}
        is:
      </p>
      <MathBlock>{`Q(x) = (T(x), x)`}</MathBlock>

      <h3>Matrix Representation</h3>

      <Callout type="info">
        <strong>Theorem 5.8:</strong> Let <InlineMath>{'(e_1, \\ldots, e_n)'}</InlineMath>{' '}
        be an orthonormal basis for <InlineMath>{'V'}</InlineMath>, let{' '}
        <InlineMath>{'T'}</InlineMath> be symmetric with matrix{' '}
        <InlineMath>{'A = (a_{ij})'}</InlineMath>. Then for{' '}
        <InlineMath>{'x = \\sum x_i e_i'}</InlineMath>:
        <MathBlock>{`Q(x) = \\sum_{i=1}^n \\sum_{j=1}^n a_{ij}x_i x_j`}</MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> By linearity,{' '}
        <InlineMath>{'T(x) = \\sum x_i T(e_i)'}</InlineMath>. Therefore:
      </p>
      <MathBlock>{`Q(x) = \\left(\\sum_{i=1}^n x_i T(e_i), \\sum_{j=1}^n x_j e_j\\right) = \\sum_{i=1}^n \\sum_{j=1}^n x_i x_j (T(e_i), e_j)`}</MathBlock>
      <p>
        Since <InlineMath>{'a_{ij} = (T(e_i), e_j)'}</InlineMath> and{' '}
        <InlineMath>{'a_{ij} = a_{ji}'}</InlineMath> for symmetric{' '}
        <InlineMath>{'T'}</InlineMath>, the result follows.
      </p>

      <h3>General Quadratic Forms</h3>

      <Callout type="info">
        <strong>Definition:</strong> For any real Euclidean space with
        orthonormal basis and any <InlineMath>{'n \\times n'}</InlineMath> matrix{' '}
        <InlineMath>{'A = (a_{ij})'}</InlineMath>, the <strong>quadratic form</strong>{' '}
        associated with <InlineMath>{'A'}</InlineMath> is:
        <MathBlock>{`Q(x) = \\sum_{i=1}^n \\sum_{j=1}^n a_{ij}x_i x_j`}</MathBlock>
      </Callout>

      <h3>Diagonal Forms</h3>

      <p>
        If <InlineMath>{'A'}</InlineMath> is diagonal, then{' '}
        <InlineMath>{'a_{ij} = 0'}</InlineMath> for{' '}
        <InlineMath>{'i \\neq j'}</InlineMath>, so:
      </p>
      <MathBlock>{`Q(x) = \\sum_{i=1}^n a_{ii}x_i^2`}</MathBlock>

      <p>
        This is called a <strong>diagonal form</strong>—it contains only squared
        terms.
      </p>

      <h3>Matrix Notation</h3>

      <Callout type="info">
        <strong>Theorem 5.9:</strong> Let <InlineMath>{'X = [x_1, \\ldots, x_n]'}</InlineMath>{' '}
        be a row matrix and <InlineMath>{'A = (a_{ij})'}</InlineMath> an{' '}
        <InlineMath>{'n \\times n'}</InlineMath> matrix. Then{' '}
        <InlineMath>{'XAX^t'}</InlineMath> is a <InlineMath>{'1 \\times 1'}</InlineMath>{' '}
        matrix with entry:
        <MathBlock>{`\\sum_{i=1}^n \\sum_{j=1}^n a_{ij}x_i x_j`}</MathBlock>
      </Callout>

      <p>
        Therefore the quadratic form can be written as:
      </p>
      <MathBlock>{`Q(x) = XAX^t = x^t A x`}</MathBlock>
      <p>
        (using <InlineMath>{'x'}</InlineMath> as a column vector in the second form).
      </p>

      <h3>Example: Conic Sections</h3>

      <p>
        Consider the quadratic form in two variables:
      </p>
      <MathBlock>{`Q(x, y) = ax^2 + 2bxy + cy^2`}</MathBlock>

      <p>
        This corresponds to the symmetric matrix:
      </p>
      <MathBlock>{`A = \\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix}`}</MathBlock>

      <p>
        The equation <InlineMath>{'Q(x, y) = 1'}</InlineMath> describes a conic
        section (ellipse, hyperbola, or parabola). The nature of the conic
        depends on the eigenvalues of <InlineMath>{'A'}</InlineMath>:
      </p>
      <ul>
        <li>
          Both eigenvalues positive: ellipse
        </li>
        <li>
          Eigenvalues of opposite signs: hyperbola
        </li>
        <li>
          One eigenvalue zero: parabola
        </li>
      </ul>

      <h3>Diagonalizing Quadratic Forms</h3>

      <p>
        By the Spectral Theorem, any symmetric matrix <InlineMath>{'A'}</InlineMath>{' '}
        can be diagonalized:{' '}
        <InlineMath>{'A = C \\Lambda C^t'}</InlineMath> where{' '}
        <InlineMath>{'C'}</InlineMath> is orthogonal and{' '}
        <InlineMath>{'\\Lambda = \\text{diag}(\\lambda_1, \\ldots, \\lambda_n)'}</InlineMath>.
      </p>

      <p>
        In new coordinates <InlineMath>{'y = C^t x'}</InlineMath>:
      </p>
      <MathBlock>{`Q(x) = x^t A x = x^t C \\Lambda C^t x = y^t \\Lambda y = \\sum_{i=1}^n \\lambda_i y_i^2`}</MathBlock>

      <p>
        The quadratic form becomes diagonal! The eigenvalues are the
        coefficients of the squared terms, and the eigenvectors determine the
        principal axes of the quadratic surface.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Every quadratic form can be reduced to a
        sum of squares by an orthogonal change of coordinates. The eigenvalues
        of the associated symmetric matrix determine the coefficients of these
        squares, and the eigenvectors give the directions of the principal axes.
        This connects abstract eigenvalue theory to concrete geometric questions
        about quadratic surfaces.
      </Callout>
    </LessonLayout>
  );
}
