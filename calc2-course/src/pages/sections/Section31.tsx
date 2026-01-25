import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2>Applications and Further Properties of Eigenvalues</h2>

      <p>
        Eigenvalue theory connects to many other concepts in linear algebra. We
        explore several important applications and additional properties.
      </p>

      <h3>Eigenvalues and Invertibility</h3>

      <Callout type="info">
        <strong>Theorem:</strong> A square matrix <InlineMath>{'A'}</InlineMath> is
        nonsingular if and only if 0 is not an eigenvalue of{' '}
        <InlineMath>{'A'}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> The eigenvalue 0 exists if and only if{' '}
        <InlineMath>{'Ax = 0'}</InlineMath> has a nonzero solution, which happens if
        and only if the null space of <InlineMath>{'A'}</InlineMath> is nontrivial,
        meaning <InlineMath>{'A'}</InlineMath> is singular.
      </p>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>{'A'}</InlineMath> is nonsingular
        with eigenvalues <InlineMath>{'\\lambda_1, \\ldots, \\lambda_n'}</InlineMath>,
        then <InlineMath>{'A^{-1}'}</InlineMath> has eigenvalues:
        <MathBlock>{`\\frac{1}{\\lambda_1}, \\frac{1}{\\lambda_2}, \\ldots, \\frac{1}{\\lambda_n}`}</MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> If <InlineMath>{'Ax = \\lambda x'}</InlineMath> with{' '}
        <InlineMath>{'\\lambda \\neq 0'}</InlineMath>, then{' '}
        <InlineMath>{'x = A^{-1}(\\lambda x) = \\lambda A^{-1}x'}</InlineMath>,
        so <InlineMath>{'A^{-1}x = (1/\\lambda)x'}</InlineMath>.
      </p>

      <h3>Eigenvalues of Powers and Polynomials</h3>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>{'x'}</InlineMath> is an eigenvector
        of <InlineMath>{'T'}</InlineMath> with eigenvalue{' '}
        <InlineMath>{'\\lambda'}</InlineMath>, then:
        <br /><br />
        (a) <InlineMath>{'x'}</InlineMath> is an eigenvector of{' '}
        <InlineMath>{'T^n'}</InlineMath> with eigenvalue{' '}
        <InlineMath>{'\\lambda^n'}</InlineMath>.
        <br />
        (b) For any polynomial{' '}
        <InlineMath>{'p(\\lambda) = c_0 + c_1\\lambda + \\cdots + c_m\\lambda^m'}</InlineMath>,{' '}
        <InlineMath>{'x'}</InlineMath> is an eigenvector of{' '}
        <InlineMath>{'p(T) = c_0 I + c_1 T + \\cdots + c_m T^m'}</InlineMath> with
        eigenvalue <InlineMath>{'p(\\lambda)'}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> By induction,{' '}
        <InlineMath>{'T^n(x) = \\lambda^n x'}</InlineMath>. Then:
      </p>
      <MathBlock>{`p(T)(x) = \\sum c_k T^k(x) = \\sum c_k \\lambda^k x = p(\\lambda) x`}</MathBlock>

      <h3>Products of Matrices</h3>

      <p>
        The eigenvalues of <InlineMath>{'AB'}</InlineMath> and{' '}
        <InlineMath>{'BA'}</InlineMath> are related:
      </p>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>{'A'}</InlineMath> is nonsingular,
        then <InlineMath>{'AB'}</InlineMath> and <InlineMath>{'BA'}</InlineMath> have
        the same eigenvalues.
      </Callout>

      <p>
        <strong>Proof:</strong>{' '}
        <InlineMath>{'BA = A^{-1}(AB)A'}</InlineMath>, so{' '}
        <InlineMath>{'BA'}</InlineMath> is similar to{' '}
        <InlineMath>{'AB'}</InlineMath>.
      </p>

      <p>
        In fact, <InlineMath>{'AB'}</InlineMath> and <InlineMath>{'BA'}</InlineMath>{' '}
        have the same nonzero eigenvalues even when <InlineMath>{'A'}</InlineMath>{' '}
        is singular (though proving this requires more care).
      </p>

      <h3>Matrices with <InlineMath>{'A^2 = -I'}</InlineMath></h3>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>{'A'}</InlineMath> is a real{' '}
        <InlineMath>{'n \\times n'}</InlineMath> matrix with{' '}
        <InlineMath>{'A^2 = -I'}</InlineMath>, then:
        <br /><br />
        (a) <InlineMath>{'A'}</InlineMath> is nonsingular.
        <br />
        (b) <InlineMath>{'n'}</InlineMath> must be even.
        <br />
        (c) <InlineMath>{'A'}</InlineMath> has no real eigenvalues.
        <br />
        (d) <InlineMath>{'\\det A = 1'}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong>
      </p>
      <ul>
        <li>
          (a) <InlineMath>{'A^{-1} = -A'}</InlineMath>, so{' '}
          <InlineMath>{'A'}</InlineMath> is nonsingular.
        </li>
        <li>
          (b) If <InlineMath>{'\\lambda'}</InlineMath> is a real eigenvalue with
          eigenvector <InlineMath>{'x'}</InlineMath>, then{' '}
          <InlineMath>{'A^2 x = \\lambda^2 x'}</InlineMath>. But{' '}
          <InlineMath>{'A^2 x = -x'}</InlineMath>, so{' '}
          <InlineMath>{'\\lambda^2 = -1'}</InlineMath>, impossible for real{' '}
          <InlineMath>{'\\lambda'}</InlineMath>. Thus no real eigenvalues exist.
        </li>
        <li>
          (c) Complex eigenvalues of real matrices come in conjugate pairs, so{' '}
          <InlineMath>{'n'}</InlineMath> must be even.
        </li>
        <li>
          (d){' '}
          <InlineMath>{'(\\det A)^2 = \\det(A^2) = \\det(-I) = (-1)^n'}</InlineMath>. Since <InlineMath>{'n'}</InlineMath> is even,{' '}
          <InlineMath>{'(\\det A)^2 = 1'}</InlineMath>, so{' '}
          <InlineMath>{'\\det A = \\pm 1'}</InlineMath>. Further analysis shows{' '}
          <InlineMath>{'\\det A = 1'}</InlineMath>.
        </li>
      </ul>

      <h3>Invariant Subspaces</h3>

      <Callout type="info">
        <strong>Definition:</strong> A subspace <InlineMath>{'U'}</InlineMath> of{' '}
        <InlineMath>{'S'}</InlineMath> is called <strong>invariant</strong> under{' '}
        <InlineMath>{'T'}</InlineMath> if <InlineMath>{'T'}</InlineMath> maps each
        element of <InlineMath>{'U'}</InlineMath> back into{' '}
        <InlineMath>{'U'}</InlineMath>.
      </Callout>

      <p>
        Every eigenspace <InlineMath>{'E(\\lambda)'}</InlineMath> is an invariant
        subspace: if <InlineMath>{'x \\in E(\\lambda)'}</InlineMath>, then{' '}
        <InlineMath>{'T(x) = \\lambda x \\in E(\\lambda)'}</InlineMath>.
      </p>

      <p>
        More generally, the one-dimensional subspace spanned by any eigenvector
        is invariant under <InlineMath>{'T'}</InlineMath>.
      </p>

      <h3>Pauli Spin Matrices</h3>

      <p>
        The matrices:
      </p>
      <MathBlock>{`P_1 = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}, \\quad P_2 = \\begin{bmatrix} 0 & -i \\\\ i & 0 \\end{bmatrix}, \\quad P_3 = \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}`}</MathBlock>
      <p>
        all have eigenvalues <InlineMath>{'1'}</InlineMath> and{' '}
        <InlineMath>{'-1'}</InlineMath>. They play a fundamental role in quantum
        mechanics, describing electron spin.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Eigenvalue theory extends far beyond mere
        computation. It connects matrix algebra to geometry (invariant
        subspaces), physics (quantum mechanics), and analysis (differential
        equations). The eigenvalues are the most fundamental invariants of a
        linear transformation—they capture essential properties that are
        independent of any coordinate system.
      </Callout>
    </LessonLayout>
  );
}
