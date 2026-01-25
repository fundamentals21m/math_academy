import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2>Eigenvalues and Inner Products</h2>

      <p>
        This chapter describes properties of eigenvalues and eigenvectors for
        linear transformations on Euclidean spaces—linear spaces equipped with
        an inner product. The inner product structure provides powerful tools
        for analyzing eigenvalues.
      </p>

      <h3>Review of Inner Product Properties</h3>

      <p>
        In a <strong>real Euclidean space</strong>, an inner product{' '}
        <InlineMath>{'(x, y)'}</InlineMath> satisfies:
      </p>
      <ol>
        <li>
          <InlineMath>{'(x, y) = (y, x)'}</InlineMath> (symmetry)
        </li>
        <li>
          <InlineMath>{'(x + z, y) = (x, y) + (z, y)'}</InlineMath> (linearity)
        </li>
        <li>
          <InlineMath>{'(cx, y) = c(x, y)'}</InlineMath> (homogeneity)
        </li>
        <li>
          <InlineMath>{'(x, x) > 0'}</InlineMath> if{' '}
          <InlineMath>{'x \\neq 0'}</InlineMath> (positivity)
        </li>
      </ol>

      <p>
        In a <strong>complex Euclidean space</strong>, symmetry is replaced by{' '}
        <strong>Hermitian symmetry</strong>:
      </p>
      <MathBlock>{`(x, y) = \\overline{(y, x)}`}</MathBlock>

      <p>
        where the bar denotes complex conjugation. This implies:
      </p>
      <MathBlock>{`(x, cy) = \\bar{c}(x, y)`}</MathBlock>

      <p>
        Note that <InlineMath>{'(x, x)'}</InlineMath> is always real since{' '}
        <InlineMath>{'(x, x) = \\overline{(x, x)}'}</InlineMath>.
      </p>

      <h3>Eigenvalues via Inner Products</h3>

      <Callout type="info">
        <strong>Theorem 5.1:</strong> Let <InlineMath>{'E'}</InlineMath> be a
        Euclidean space, <InlineMath>{'V'}</InlineMath> a subspace of{' '}
        <InlineMath>{'E'}</InlineMath>, and <InlineMath>{'T: V \\to E'}</InlineMath> a
        linear transformation with eigenvalue <InlineMath>{'\\lambda'}</InlineMath>{' '}
        and corresponding eigenvector <InlineMath>{'x'}</InlineMath>. Then:
        <MathBlock>{`\\lambda = \\frac{(T(x), x)}{(x, x)}`}</MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> Since <InlineMath>{'T(x) = \\lambda x'}</InlineMath>,
        we have:
      </p>
      <MathBlock>{`(T(x), x) = (\\lambda x, x) = \\lambda(x, x)`}</MathBlock>
      <p>
        Since <InlineMath>{'x \\neq 0'}</InlineMath>, we can divide by{' '}
        <InlineMath>{'(x, x)'}</InlineMath> to obtain the formula.
      </p>

      <h3>The Conjugate Eigenvalue Formula</h3>

      <p>
        From Hermitian symmetry, we obtain a companion formula for the complex
        conjugate of <InlineMath>{'\\lambda'}</InlineMath>:
      </p>
      <MathBlock>{`\\bar{\\lambda} = \\frac{(x, T(x))}{(x, x)}`}</MathBlock>

      <h3>When Is an Eigenvalue Real?</h3>

      <p>
        Comparing the two formulas, we see that{' '}
        <InlineMath>{'\\lambda'}</InlineMath> is real (
        <InlineMath>{'\\lambda = \\bar{\\lambda}'}</InlineMath>) if and only
        if:
      </p>
      <MathBlock>{`(T(x), x) = (x, T(x))`}</MathBlock>

      <p>
        Similarly, <InlineMath>{'\\lambda'}</InlineMath> is pure imaginary (
        <InlineMath>{'\\lambda = -\\bar{\\lambda}'}</InlineMath>) if and only
        if:
      </p>
      <MathBlock>{`(T(x), x) = -(x, T(x))`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The inner product provides a way to
        express eigenvalues that reveals when they must be real or purely
        imaginary. This representation is the foundation for understanding
        Hermitian operators, which always have real eigenvalues, and
        skew-Hermitian operators, which always have purely imaginary
        eigenvalues.
      </Callout>
    </LessonLayout>
  );
}
