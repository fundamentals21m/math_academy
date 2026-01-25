import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2>The Uniqueness Theorem and Product Formula</h2>

      <p>
        A remarkable fact about determinants is that there exists exactly one function
        satisfying the four axioms. We prove this uniqueness and then establish the
        fundamental product formula.
      </p>

      <h3>The Uniqueness Theorem</h3>

      <Callout type="info">
        <strong>Theorem (Uniqueness):</strong> Let <InlineMath>{'d'}</InlineMath> be a
        function satisfying all four axioms for a determinant function of order{' '}
        <InlineMath>{'n'}</InlineMath>, and let <InlineMath>{'f'}</InlineMath> be another
        function satisfying Axioms 1, 2, and 3. Then:
        <MathBlock>{`f(A_1, \\ldots, A_n) = d(A_1, \\ldots, A_n) \\cdot f(I_1, \\ldots, I_n)`}</MathBlock>
        In particular, if <InlineMath>{'f'}</InlineMath> also satisfies Axiom 4, then{' '}
        <InlineMath>{'f = d'}</InlineMath>.
      </Callout>

      <p>
        The proof uses the fact that Axioms 1, 2, and 3 imply that any matrix can be
        reduced to a scalar multiple of the identity matrix (via the Gauss-Jordan
        process), and this scalar is determined by the axioms.
      </p>

      <h3>The Product Formula</h3>

      <Callout type="info">
        <strong>Theorem:</strong> For any two <InlineMath>{'n \\times n'}</InlineMath>{' '}
        matrices <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath>:
        <MathBlock>{`\\det(AB) = (\\det A)(\\det B)`}</MathBlock>
      </Callout>

      <p>
        <strong>Proof sketch:</strong> For fixed matrix <InlineMath>{'B'}</InlineMath>,
        define <InlineMath>{'f(A_1, \\ldots, A_n) = \\det(AB)'}</InlineMath> where{' '}
        <InlineMath>{'A'}</InlineMath> has rows <InlineMath>{'A_1, \\ldots, A_n'}</InlineMath>.
      </p>

      <p>
        One can verify that <InlineMath>{'f'}</InlineMath> satisfies Axioms 1, 2, and 3.
        By the uniqueness theorem:
      </p>
      <MathBlock>{`f(A_1, \\ldots, A_n) = d(A_1, \\ldots, A_n) \\cdot f(I_1, \\ldots, I_n)`}</MathBlock>
      <p>
        But <InlineMath>{'f(I_1, \\ldots, I_n) = \\det(IB) = \\det B'}</InlineMath>, so:
      </p>
      <MathBlock>{`\\det(AB) = (\\det A)(\\det B)`}</MathBlock>

      <h3>Consequences of the Product Formula</h3>

      <Callout type="info">
        <strong>Corollary:</strong> Let <InlineMath>{'A'}</InlineMath> be an{' '}
        <InlineMath>{'n \\times n'}</InlineMath> matrix. Then:
        <br /><br />
        (a) <InlineMath>{'A'}</InlineMath> is invertible if and only if{' '}
        <InlineMath>{'\\det A \\neq 0'}</InlineMath>
        <br />
        (b) If <InlineMath>{'A'}</InlineMath> is invertible, then{' '}
        <InlineMath>{'\\det(A^{-1}) = (\\det A)^{-1}'}</InlineMath>
        <br />
        (c) <InlineMath>{'\\det(A^n) = (\\det A)^n'}</InlineMath> for any positive integer{' '}
        <InlineMath>{'n'}</InlineMath>
      </Callout>

      <p>
        For part (a): If <InlineMath>{'A'}</InlineMath> is invertible, then{' '}
        <InlineMath>{'AA^{-1} = I'}</InlineMath>, so{' '}
        <InlineMath>{'(\\det A)(\\det A^{-1}) = 1'}</InlineMath>, which implies{' '}
        <InlineMath>{'\\det A \\neq 0'}</InlineMath>. Conversely, if{' '}
        <InlineMath>{'\\det A \\neq 0'}</InlineMath>, the rows are linearly independent,
        so <InlineMath>{'A'}</InlineMath> has full rank and is invertible.
      </p>

      <h3>Determinant and Invertibility</h3>

      <p>
        The product formula connects determinants to the structure theory of matrices:
      </p>

      <MathBlock>{`\\text{A is invertible} \\Leftrightarrow \\text{columns are independent} \\Leftrightarrow \\text{rank} = n \\Leftrightarrow \\det A \\neq 0`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The product formula{' '}
        <InlineMath>{'\\det(AB) = \\det A \\cdot \\det B'}</InlineMath> shows that the
        determinant is a <strong>multiplicative homomorphism</strong> from the group
        of invertible matrices to the nonzero scalars. This makes determinants a
        powerful tool for studying matrix groups and their properties.
      </Callout>
    </LessonLayout>
  );
}
