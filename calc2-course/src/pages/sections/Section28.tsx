import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2>Calculating Eigenvalues and Eigenvectors</h2>

      <p>
        Once we have the characteristic polynomial, finding eigenvalues reduces
        to solving a polynomial equation. Finding eigenvectors then requires
        solving a system of linear equations.
      </p>

      <h3>The Computational Method</h3>

      <p>
        For an <InlineMath>{'n \\times n'}</InlineMath> matrix{' '}
        <InlineMath>{'A'}</InlineMath>:
      </p>
      <ol>
        <li>
          Compute the characteristic polynomial{' '}
          <InlineMath>{'\\det(\\lambda I - A)'}</InlineMath>
        </li>
        <li>
          Find the roots <InlineMath>{'\\lambda_1, \\ldots, \\lambda_n'}</InlineMath>{' '}
          of this polynomial
        </li>
        <li>
          For each eigenvalue <InlineMath>{'\\lambda_i'}</InlineMath>, solve{' '}
          <InlineMath>{'(\\lambda_i I - A)X = 0'}</InlineMath> to find the
          eigenvectors
        </li>
      </ol>

      <h3>Example 1: Distinct Eigenvalues</h3>

      <p>Consider the matrix:</p>
      <MathBlock>{`A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 2 & 3 & 4 \\\\ -1 & -1 & -2 \\end{bmatrix}`}</MathBlock>

      <p>The characteristic polynomial is:</p>
      <MathBlock>{`\\det(\\lambda I - A) = (\\lambda - 1)(\\lambda + 1)(\\lambda - 3)`}</MathBlock>

      <p>
        The eigenvalues are <InlineMath>{'\\lambda = 1, -1, 3'}</InlineMath>. For
        each eigenvalue, we solve <InlineMath>{'AX = \\lambda X'}</InlineMath>:
      </p>

      <ul>
        <li>
          <InlineMath>{'\\lambda = 1'}</InlineMath>: Eigenvectors{' '}
          <InlineMath>{'t(1, -1, 0)'}</InlineMath> where <InlineMath>{'t \\neq 0'}</InlineMath>
        </li>
        <li>
          <InlineMath>{'\\lambda = -1'}</InlineMath>: Eigenvectors{' '}
          <InlineMath>{'t(0, 1, -1)'}</InlineMath> where <InlineMath>{'t \\neq 0'}</InlineMath>
        </li>
        <li>
          <InlineMath>{'\\lambda = 3'}</InlineMath>: Eigenvectors{' '}
          <InlineMath>{'t(2, 3, -1)'}</InlineMath> where <InlineMath>{'t \\neq 0'}</InlineMath>
        </li>
      </ul>

      <p>
        Since the eigenvalues are distinct, each eigenspace has dimension 1.
      </p>

      <h3>Example 2: Repeated Eigenvalues (dim E = 1)</h3>

      <p>Consider:</p>
      <MathBlock>{`A = \\begin{bmatrix} 2 & -1 & 1 \\\\ 0 & 3 & 1 \\\\ -2 & -1 & 3 \\end{bmatrix}`}</MathBlock>

      <p>The characteristic polynomial is:</p>
      <MathBlock>{`\\det(\\lambda I - A) = (\\lambda - 2)(\\lambda - 2)(\\lambda - 4)`}</MathBlock>

      <p>
        The eigenvalue <InlineMath>{'\\lambda = 2'}</InlineMath> has multiplicity 2.
        Solving <InlineMath>{'AX = 2X'}</InlineMath> gives:
      </p>
      <MathBlock>{`x_2 = x_3, \\quad 2x_1 + x_2 + x_3 = 0`}</MathBlock>
      <p>
        This yields eigenvectors <InlineMath>{'t(-1, 1, 1)'}</InlineMath>—only a
        one-dimensional eigenspace despite multiplicity 2.
      </p>

      <h3>Example 3: Repeated Eigenvalues (dim E = 2)</h3>

      <p>Consider:</p>
      <MathBlock>{`A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 2 & 3 & 2 \\\\ 3 & 3 & 4 \\end{bmatrix}`}</MathBlock>

      <p>
        The characteristic polynomial is{' '}
        <InlineMath>{'(\\lambda - 1)(\\lambda - 1)(\\lambda - 7)'}</InlineMath>. For{' '}
        <InlineMath>{'\\lambda = 1'}</InlineMath>, the system{' '}
        <InlineMath>{'AX = X'}</InlineMath> reduces to the single equation:
      </p>
      <MathBlock>{`x_1 + x_2 + x_3 = 0`}</MathBlock>

      <p>
        Taking <InlineMath>{'x_1 = a'}</InlineMath>,{' '}
        <InlineMath>{'x_2 = b'}</InlineMath>, and{' '}
        <InlineMath>{'x_3 = -a - b'}</InlineMath>, every eigenvector has the form:
      </p>
      <MathBlock>{`(a, b, -a - b) = a(1, 0, -1) + b(0, 1, -1)`}</MathBlock>

      <p>
        So <InlineMath>{'E(1)'}</InlineMath> has dimension 2, with basis{' '}
        <InlineMath>{'\\{(1, 0, -1), (0, 1, -1)\\}'}</InlineMath>.
      </p>

      <h3>Linear Independence of Eigenvectors</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Let{' '}
        <InlineMath>{'u_1, \\ldots, u_k'}</InlineMath> be eigenvectors of{' '}
        <InlineMath>{'T'}</InlineMath> corresponding to distinct eigenvalues{' '}
        <InlineMath>{'\\lambda_1, \\ldots, \\lambda_k'}</InlineMath>. Then{' '}
        <InlineMath>{'u_1, \\ldots, u_k'}</InlineMath> are linearly independent.
      </Callout>

      <p>
        <strong>Proof sketch:</strong> By induction. If{' '}
        <InlineMath>{'\\sum c_i u_i = 0'}</InlineMath>, apply{' '}
        <InlineMath>{'T'}</InlineMath> to get{' '}
        <InlineMath>{'\\sum c_i \\lambda_i u_i = 0'}</InlineMath>. Multiplying the
        first equation by <InlineMath>{'\\lambda_k'}</InlineMath> and subtracting
        gives a relation involving only{' '}
        <InlineMath>{'u_1, \\ldots, u_{k-1}'}</InlineMath>. By induction,
        each <InlineMath>{'c_i = 0'}</InlineMath>.
      </p>

      <h3>Consequences for Diagonalization</h3>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>{'\\dim V = n'}</InlineMath> and{' '}
        <InlineMath>{'T: V \\to V'}</InlineMath> has <InlineMath>{'n'}</InlineMath>{' '}
        distinct eigenvalues, then:
        <br /><br />
        (a) The corresponding eigenvectors form a basis for{' '}
        <InlineMath>{'V'}</InlineMath>.
        <br />
        (b) The matrix of <InlineMath>{'T'}</InlineMath> relative to this basis is
        diagonal with eigenvalues on the diagonal.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> Having <InlineMath>{'n'}</InlineMath> distinct
        eigenvalues is <em>sufficient</em> for diagonalization but not{' '}
        <em>necessary</em>. A matrix can be diagonalizable even with repeated
        eigenvalues, provided each eigenvalue of multiplicity{' '}
        <InlineMath>{'k'}</InlineMath> has an eigenspace of dimension{' '}
        <InlineMath>{'k'}</InlineMath>. The identity matrix, for example, has only
        eigenvalue 1 but is already diagonal.
      </Callout>
    </LessonLayout>
  );
}
