import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2>Eigenvalues and Eigenvectors</h2>

      <p>
        This chapter addresses a fundamental question: when can a linear
        transformation be represented by a diagonal matrix? The answer leads us
        to the theory of eigenvalues and eigenvectors, one of the most important
        topics in linear algebra.
      </p>

      <h3>Motivation: Diagonal Matrix Representations</h3>

      <p>
        Among all matrices, diagonal matrices are the simplest to work with.
        If a linear transformation <InlineMath>{'T: V \\to V'}</InlineMath> can be
        represented by a diagonal matrix, many computations become trivial.
      </p>

      <Callout type="info">
        <strong>Theorem:</strong> A linear transformation{' '}
        <InlineMath>{'T: V \\to V'}</InlineMath> where{' '}
        <InlineMath>{'\\dim V = n'}</InlineMath> has a diagonal matrix representation
        if and only if there exist independent elements{' '}
        <InlineMath>{'u_1, \\ldots, u_n'}</InlineMath> in <InlineMath>{'V'}</InlineMath>{' '}
        and scalars <InlineMath>{'\\lambda_1, \\ldots, \\lambda_n'}</InlineMath> such
        that:
        <MathBlock>{`T(u_k) = \\lambda_k u_k \\quad \\text{for} \\; k = 1, 2, \\ldots, n`}</MathBlock>
      </Callout>

      <h3>The Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>{'T: S \\to V'}</InlineMath> be
        a linear transformation where <InlineMath>{'S'}</InlineMath> is a subspace
        of <InlineMath>{'V'}</InlineMath>. A scalar{' '}
        <InlineMath>{'\\lambda'}</InlineMath> is called an{' '}
        <strong>eigenvalue</strong> of <InlineMath>{'T'}</InlineMath> if there is a
        nonzero element <InlineMath>{'x'}</InlineMath> in <InlineMath>{'S'}</InlineMath>{' '}
        such that:
        <MathBlock>{`T(x) = \\lambda x`}</MathBlock>
        The element <InlineMath>{'x'}</InlineMath> is called an{' '}
        <strong>eigenvector</strong> of <InlineMath>{'T'}</InlineMath> belonging to{' '}
        <InlineMath>{'\\lambda'}</InlineMath>.
      </Callout>

      <p>
        Note that the zero vector is excluded as an eigenvector by definition,
        even though <InlineMath>{'T(0) = \\lambda \\cdot 0 = 0'}</InlineMath> for any{' '}
        <InlineMath>{'\\lambda'}</InlineMath>. This ensures that each eigenvector has
        exactly one corresponding eigenvalue.
      </p>

      <h3>Examples</h3>

      <p>
        <strong>Example 1 (Scalar multiplication):</strong> If{' '}
        <InlineMath>{'T(x) = cx'}</InlineMath> for all <InlineMath>{'x'}</InlineMath>,
        then every nonzero element is an eigenvector with eigenvalue{' '}
        <InlineMath>{'c'}</InlineMath>.
      </p>

      <p>
        <strong>Example 2 (Reflection in the xy-plane):</strong> In{' '}
        <InlineMath>{'V_3(\\mathbb{R})'}</InlineMath>, reflection in the
        xy-plane maps <InlineMath>{'i, j, k'}</InlineMath> to{' '}
        <InlineMath>{'i, j, -k'}</InlineMath>. Every nonzero vector in the xy-plane
        is an eigenvector with eigenvalue 1. Vectors of the form{' '}
        <InlineMath>{'ck'}</InlineMath> with <InlineMath>{'c \\neq 0'}</InlineMath> are
        eigenvectors with eigenvalue <InlineMath>{'-1'}</InlineMath>.
      </p>

      <p>
        <strong>Example 3 (Differentiation operator):</strong> On the space of
        infinitely differentiable functions, the eigenfunctions of{' '}
        <InlineMath>{"D(f) = f'"}</InlineMath> are the exponential functions{' '}
        <InlineMath>{'f(x) = ce^{\\lambda x}'}</InlineMath> with{' '}
        <InlineMath>{'c \\neq 0'}</InlineMath>, belonging to eigenvalue{' '}
        <InlineMath>{'\\lambda'}</InlineMath>.
      </p>

      <h3>The Eigenspace</h3>

      <Callout type="info">
        <strong>Definition:</strong> For an eigenvalue{' '}
        <InlineMath>{'\\lambda'}</InlineMath>, the <strong>eigenspace</strong>{' '}
        <InlineMath>{'E(\\lambda)'}</InlineMath> is the set of all{' '}
        <InlineMath>{'x'}</InlineMath> such that{' '}
        <InlineMath>{'T(x) = \\lambda x'}</InlineMath>. This includes the zero vector
        and all eigenvectors belonging to <InlineMath>{'\\lambda'}</InlineMath>.
      </Callout>

      <p>
        The eigenspace <InlineMath>{'E(\\lambda)'}</InlineMath> is a subspace of{' '}
        <InlineMath>{'S'}</InlineMath> because if{' '}
        <InlineMath>{'T(x) = \\lambda x'}</InlineMath> and{' '}
        <InlineMath>{'T(y) = \\lambda y'}</InlineMath>, then:
      </p>
      <MathBlock>{`T(ax + by) = aT(x) + bT(y) = a\\lambda x + b\\lambda y = \\lambda(ax + by)`}</MathBlock>

      <p>
        Equivalently, <InlineMath>{'E(\\lambda)'}</InlineMath> is the null space of
        the transformation <InlineMath>{'T - \\lambda I'}</InlineMath>.
      </p>

      <h3>Zero Eigenvalues and the Null Space</h3>

      <p>
        The scalar 0 can be an eigenvalue. If{' '}
        <InlineMath>{'\\lambda = 0'}</InlineMath> is an eigenvalue, then{' '}
        <InlineMath>{'T(x) = 0'}</InlineMath> for some nonzero{' '}
        <InlineMath>{'x'}</InlineMath>, meaning <InlineMath>{'x'}</InlineMath> is in the
        null space of <InlineMath>{'T'}</InlineMath>. Conversely, if the null space
        contains nonzero elements, then 0 is an eigenvalue.
      </p>

      <h3>Rotation Example: Dependence on Scalars</h3>

      <p>
        Consider rotation of the plane through angle{' '}
        <InlineMath>{'\\alpha'}</InlineMath>:
      </p>
      <ul>
        <li>
          As a <strong>complex</strong> space{' '}
          <InlineMath>{'V_1(\\mathbb{C})'}</InlineMath>: Every{' '}
          <InlineMath>{'z = re^{i\\theta} \\neq 0'}</InlineMath> is an
          eigenvector with eigenvalue{' '}
          <InlineMath>{'e^{i\\alpha}'}</InlineMath>.
        </li>
        <li>
          As a <strong>real</strong> space{' '}
          <InlineMath>{'V_2(\\mathbb{R})'}</InlineMath>: If{' '}
          <InlineMath>{'\\alpha'}</InlineMath> is not a multiple of{' '}
          <InlineMath>{'\\pi'}</InlineMath>, there are no real eigenvalues and hence
          no eigenvectors.
        </li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> Eigenvalues and eigenvectors connect the
        algebraic structure of a linear transformation to its geometric action.
        When <InlineMath>{'T(x) = \\lambda x'}</InlineMath>, the transformation acts
        on <InlineMath>{'x'}</InlineMath> by simple scaling. Finding a basis of
        eigenvectors (when possible) reduces the transformation to its simplest
        form—a diagonal matrix.
      </Callout>
    </LessonLayout>
  );
}
