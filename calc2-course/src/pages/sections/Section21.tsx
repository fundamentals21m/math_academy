import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2>Axioms for a Determinant Function</h2>

      <p>
        We define the determinant axiomatically as a function of the row vectors of a
        matrix. This approach emphasizes the essential properties and applies uniformly
        to matrices of any size.
      </p>

      <h3>The Four Axioms</h3>

      <Callout type="info">
        <strong>Axiomatic Definition:</strong> A function <InlineMath>{'d'}</InlineMath>,
        defined for each ordered <InlineMath>{'n'}</InlineMath>-tuple of vectors{' '}
        <InlineMath>{'A_1, \\ldots, A_n'}</InlineMath> in <InlineMath>{'n'}</InlineMath>-space,
        is called a <strong>determinant function</strong> of order{' '}
        <InlineMath>{'n'}</InlineMath> if it satisfies:
        <br /><br />
        <strong>Axiom 1 (Homogeneity):</strong>{' '}
        <InlineMath>{'d(\\ldots, tA_k, \\ldots) = t \\cdot d(\\ldots, A_k, \\ldots)'}</InlineMath>
        <br />
        <strong>Axiom 2 (Additivity):</strong>{' '}
        <InlineMath>{'d(\\ldots, A_k + C, \\ldots) = d(\\ldots, A_k, \\ldots) + d(\\ldots, C, \\ldots)'}</InlineMath>
        <br />
        <strong>Axiom 3 (Vanishing):</strong>{' '}
        <InlineMath>{'d(A_1, \\ldots, A_n) = 0'}</InlineMath> if <InlineMath>{'A_i = A_j'}</InlineMath>{' '}
        for some <InlineMath>{'i \\neq j'}</InlineMath>
        <br />
        <strong>Axiom 4 (Normalization):</strong>{' '}
        <InlineMath>{'d(I_1, \\ldots, I_n) = 1'}</InlineMath> where{' '}
        <InlineMath>{'I_k'}</InlineMath> is the <InlineMath>{'k'}</InlineMath>th unit coordinate vector
      </Callout>

      <p>
        Axioms 1 and 2 together state that the determinant is a{' '}
        <strong>linear function</strong> of each row. This is often described by saying
        the determinant is <strong>multilinear</strong> in its rows.
      </p>

      <h3>Consequences of the Axioms</h3>

      <Callout type="info">
        <strong>Theorem:</strong> A determinant function satisfying Axioms 1, 2, and 3
        has the following properties:
        <br /><br />
        (a) <InlineMath>{'d(A_1, \\ldots, A_n) = 0'}</InlineMath> if some row is{' '}
        <InlineMath>{'0'}</InlineMath>
        <br />
        (b) Interchanging two adjacent rows reverses the sign
        <br />
        (c) Interchanging any two rows reverses the sign
        <br />
        (d) The determinant vanishes if any two rows are equal
        <br />
        (e) The determinant vanishes if the rows are linearly dependent
      </Callout>

      <h3>Proof of Sign Change Property</h3>

      <p>
        To show that interchanging adjacent rows <InlineMath>{'A_k'}</InlineMath> and{' '}
        <InlineMath>{'A_{k+1}'}</InlineMath> reverses the sign: Let both rows be{' '}
        <InlineMath>{'A_k + A_{k+1}'}</InlineMath>. By Axiom 3, the determinant
        is zero. Expanding by Axiom 2:
      </p>
      <MathBlock>{`d(\\ldots, A_k, A_k, \\ldots) + d(\\ldots, A_k, A_{k+1}, \\ldots) + d(\\ldots, A_{k+1}, A_k, \\ldots) + d(\\ldots, A_{k+1}, A_{k+1}, \\ldots) = 0`}</MathBlock>
      <p>
        The first and fourth terms are zero by Axiom 3, so the second and third terms
        are negatives of each other.
      </p>

      <h3>Dependence Implies Zero Determinant</h3>

      <p>
        If the rows are linearly dependent, some row <InlineMath>{'A_i'}</InlineMath> can be
        written as a linear combination of the others:{' '}
        <InlineMath>{'A_i = \\sum_{k \\neq i} t_k A_k'}</InlineMath>. By linearity in the{' '}
        <InlineMath>{'i'}</InlineMath>th row:
      </p>
      <MathBlock>{`d(A_1, \\ldots, A_n) = \\sum_{k \\neq i} t_k \\, d(A_1, \\ldots, A_k, \\ldots, A_n)`}</MathBlock>
      <p>
        Each term has <InlineMath>{'A_k'}</InlineMath> appearing twice (in position{' '}
        <InlineMath>{'i'}</InlineMath> and position <InlineMath>{'k'}</InlineMath>), so each
        term is zero.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The axiomatic approach reveals that the essential
        properties of determinants are multilinearity and alternating behavior (sign
        changes under row swaps). These properties, combined with the normalization
        condition, uniquely determine the determinant function—there is exactly one
        function satisfying all four axioms for each order <InlineMath>{'n'}</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
