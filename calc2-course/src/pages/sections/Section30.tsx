import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2>Properties of the Trace</h2>

      <p>
        The trace provides a quick way to check eigenvalue calculations and
        reveals deep connections in matrix theory. We explore its properties
        and relationship to eigenvalues.
      </p>

      <h3>Definition and Basic Properties</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>trace</strong> of an{' '}
        <InlineMath>{'n \\times n'}</InlineMath> matrix{' '}
        <InlineMath>{'A = (a_{ij})'}</InlineMath> is:
        <MathBlock>{`\\text{tr} \\, A = \\sum_{i=1}^n a_{ii} = a_{11} + a_{22} + \\cdots + a_{nn}`}</MathBlock>
      </Callout>

      <Callout type="info">
        <strong>Theorem:</strong> The trace satisfies:
        <br /><br />
        (a) <InlineMath>{'\\text{tr}(A + B) = \\text{tr} A + \\text{tr} B'}</InlineMath>
        <br />
        (b) <InlineMath>{'\\text{tr}(cA) = c \\, \\text{tr} A'}</InlineMath>
        <br />
        (c) <InlineMath>{'\\text{tr}(AB) = \\text{tr}(BA)'}</InlineMath>
        <br />
        (d) <InlineMath>{'\\text{tr}(A^T) = \\text{tr} A'}</InlineMath>
      </Callout>

      <h3>Proof of the Cyclic Property</h3>

      <p>
        The property <InlineMath>{'\\text{tr}(AB) = \\text{tr}(BA)'}</InlineMath>{' '}
        is particularly important. To prove it, note that:
      </p>
      <MathBlock>{`\\text{tr}(AB) = \\sum_{i=1}^n (AB)_{ii} = \\sum_{i=1}^n \\sum_{k=1}^n a_{ik}b_{ki}`}</MathBlock>
      <MathBlock>{`\\text{tr}(BA) = \\sum_{k=1}^n (BA)_{kk} = \\sum_{k=1}^n \\sum_{i=1}^n b_{ki}a_{ik}`}</MathBlock>
      <p>
        Both double sums are equal since we're summing over the same pairs{' '}
        <InlineMath>{'(i, k)'}</InlineMath>.
      </p>

      <h3>Trace and Similar Matrices</h3>

      <Callout type="info">
        <strong>Corollary:</strong> Similar matrices have the same trace.
      </Callout>

      <p>
        <strong>Proof:</strong> If <InlineMath>{'B = C^{-1}AC'}</InlineMath>,
        then:
      </p>
      <MathBlock>{`\\text{tr} B = \\text{tr}(C^{-1}AC) = \\text{tr}((C^{-1}A)C) = \\text{tr}(C(C^{-1}A)) = \\text{tr}(A)`}</MathBlock>

      <h3>Trace Equals Sum of Eigenvalues</h3>

      <p>
        From the characteristic polynomial, the coefficient of{' '}
        <InlineMath>{'\\lambda^{n-1}'}</InlineMath> can be computed two ways:
      </p>
      <ul>
        <li>
          From the factored form{' '}
          <InlineMath>{'(\\lambda - \\lambda_1) \\cdots (\\lambda - \\lambda_n)'}</InlineMath>:{' '}
          coefficient is{' '}
          <InlineMath>{'-(\\lambda_1 + \\cdots + \\lambda_n)'}</InlineMath>
        </li>
        <li>
          From <InlineMath>{'\\det(\\lambda I - A)'}</InlineMath>: coefficient is{' '}
          <InlineMath>{'-(a_{11} + \\cdots + a_{nn})'}</InlineMath>
        </li>
      </ul>

      <Callout type="info">
        <strong>Theorem:</strong> If{' '}
        <InlineMath>{'\\lambda_1, \\ldots, \\lambda_n'}</InlineMath> are the eigenvalues
        of <InlineMath>{'A'}</InlineMath> (counted with multiplicity), then:
        <MathBlock>{`\\text{tr} A = \\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n`}</MathBlock>
      </Callout>

      <h3>Applications of the Trace</h3>

      <p>
        <strong>1. Numerical check:</strong> After computing eigenvalues, verify
        that their sum equals the trace.
      </p>

      <p>
        <strong>2. Quick nonsingularity test:</strong> If{' '}
        <InlineMath>{'\\text{tr} A = 0'}</InlineMath>, we cannot immediately
        conclude whether <InlineMath>{'A'}</InlineMath> is singular. But combined
        with other information about eigenvalues, the trace constrains their
        possible values.
      </p>

      <p>
        <strong>3. Commutator:</strong> For any matrices <InlineMath>{'A'}</InlineMath>{' '}
        and <InlineMath>{'B'}</InlineMath>, the commutator{' '}
        <InlineMath>{'[A, B] = AB - BA'}</InlineMath> always has trace zero:
      </p>
      <MathBlock>{`\\text{tr}[A, B] = \\text{tr}(AB) - \\text{tr}(BA) = 0`}</MathBlock>

      <h3>Trace and the Characteristic Polynomial</h3>

      <p>
        The characteristic polynomial{' '}
        <InlineMath>{'f(\\lambda) = \\det(\\lambda I - A)'}</InlineMath> can be written:
      </p>
      <MathBlock>{`f(\\lambda) = \\lambda^n - (\\text{tr} A)\\lambda^{n-1} + \\cdots + (-1)^n \\det A`}</MathBlock>

      <p>
        For <InlineMath>{'2 \\times 2'}</InlineMath> matrices this gives:
      </p>
      <MathBlock>{`f(\\lambda) = \\lambda^2 - (\\text{tr} A)\\lambda + \\det A`}</MathBlock>
      <p>
        So for <InlineMath>{'2 \\times 2'}</InlineMath> matrices, two matrices have
        the same characteristic polynomial if and only if they have the same
        trace and determinant.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The trace is a linear functional on the
        space of matrices with the remarkable property that it equals the sum
        of eigenvalues. This connects the "external" data (diagonal entries of
        a particular matrix representation) to the "internal" data (eigenvalues,
        which are intrinsic to the transformation). The cyclic property{' '}
        <InlineMath>{'\\text{tr}(AB) = \\text{tr}(BA)'}</InlineMath>{' '}
        reflects the fact that similarity transformations don't change the trace.
      </Callout>
    </LessonLayout>
  );
}
