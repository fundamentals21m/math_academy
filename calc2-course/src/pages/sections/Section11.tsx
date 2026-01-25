import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Nullity and Rank</h2>

      <p>
        In this section, we study the relationship between the dimensionality of a linear
        space <InlineMath>V</InlineMath>, its null space <InlineMath>N(T)</InlineMath>, and
        the range <InlineMath>T(V)</InlineMath> of a linear transformation.
      </p>

      <h3>Definitions</h3>

      <Callout type="info">
        <strong>Definition:</strong> If <InlineMath>V</InlineMath> is finite-dimensional, the
        null space <InlineMath>N(T)</InlineMath> is also finite-dimensional (as a subspace).
        The dimension of <InlineMath>N(T)</InlineMath> is called the{' '}
        <strong>nullity</strong> of <InlineMath>T</InlineMath>.
      </Callout>

      <Callout type="info">
        <strong>Definition:</strong> The dimension of the range <InlineMath>T(V)</InlineMath>{' '}
        is called the <strong>rank</strong> of <InlineMath>T</InlineMath>.
      </Callout>

      <h3>The Nullity Plus Rank Theorem</h3>

      <Callout type="info">
        <strong>Theorem 2.3 (Nullity Plus Rank Theorem):</strong> If{' '}
        <InlineMath>V</InlineMath> is finite-dimensional, then{' '}
        <InlineMath>T(V)</InlineMath> is also finite-dimensional, and:
        <MathBlock>\dim N(T) + \dim T(V) = \dim V</MathBlock>
        In other words, the nullity plus the rank of a linear transformation equals the
        dimension of its domain.
      </Callout>

      <p>
        <strong>Proof Outline:</strong> Let <InlineMath>n = \dim V</InlineMath> and let{' '}
        <InlineMath>e_1, \ldots, e_k</InlineMath> be a basis for{' '}
        <InlineMath>N(T)</InlineMath> where <InlineMath>k = \dim N(T)</InlineMath>. By
        Theorem 1.7, these elements are part of some basis for <InlineMath>V</InlineMath>:
      </p>
      <MathBlock>{`e_1, \\ldots, e_k, e_{k+1}, \\ldots, e_{k+r}`}</MathBlock>
      <p>
        where <InlineMath>k + r = n</InlineMath>. We show that the{' '}
        <InlineMath>r</InlineMath> elements:
      </p>
      <MathBlock>{`T(e_{k+1}), \\ldots, T(e_{k+r})`}</MathBlock>
      <p>
        form a basis for <InlineMath>T(V)</InlineMath>, proving{' '}
        <InlineMath>\dim T(V) = r</InlineMath>.
      </p>

      <p>
        First, these elements span <InlineMath>T(V)</InlineMath>: if{' '}
        <InlineMath>y \in T(V)</InlineMath>, then <InlineMath>y = T(x)</InlineMath> for some{' '}
        <InlineMath>x = \sum c_i e_i</InlineMath>. Since{' '}
        <InlineMath>T(e_1) = \cdots = T(e_k) = 0</InlineMath>:
      </p>
      <MathBlock>{`y = T(x) = \\sum_{i=k+1}^{k+r} c_i T(e_i)`}</MathBlock>

      <p>
        Second, these elements are independent: if{' '}
        <InlineMath>{'\\sum_{i=k+1}^{k+r} c_i T(e_i) = 0'}</InlineMath>, then{' '}
        <InlineMath>T\left(\sum c_i e_i\right) = 0</InlineMath>, so{' '}
        <InlineMath>\sum c_i e_i \in N(T)</InlineMath>. This means:
      </p>
      <MathBlock>{`\\sum_{i=k+1}^{k+r} c_i e_i = \\sum_{j=1}^k d_j e_j`}</MathBlock>
      <p>
        for some scalars <InlineMath>d_j</InlineMath>. Since the basis elements are
        independent, all coefficients must be zero.
      </p>

      <h3>Examples</h3>

      <p>
        <strong>Example 1 (Identity transformation):</strong> The null space is{' '}
        <InlineMath>{'\\{0\\}'}</InlineMath>, so nullity is 0 and rank equals{' '}
        <InlineMath>\dim V</InlineMath>.
      </p>

      <p>
        <strong>Example 2 (Zero transformation):</strong> The null space is all of{' '}
        <InlineMath>V</InlineMath>, so nullity equals <InlineMath>\dim V</InlineMath> and
        rank is 0.
      </p>

      <p>
        <strong>Example 3 (Differentiation operator):</strong> For the operator{' '}
        <InlineMath>D</InlineMath> on polynomials of degree <InlineMath>\leq n</InlineMath>,
        the null space consists of constant polynomials (nullity 1), and the range consists
        of polynomials of degree <InlineMath>\leq n-1</InlineMath> (rank{' '}
        <InlineMath>n</InlineMath>). We verify:{' '}
        <InlineMath>1 + n = n + 1 = \dim V</InlineMath>.
      </p>

      <p>
        <strong>Example 4 (Projection onto a subspace):</strong> If{' '}
        <InlineMath>T: V \to S</InlineMath> is projection onto a finite-dimensional subspace{' '}
        <InlineMath>S</InlineMath>, then the null space is{' '}
        <InlineMath>S^\perp</InlineMath> and the range is <InlineMath>S</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The nullity plus rank theorem is one of the most
        important results in linear algebra. It tells us that the "information lost" by a
        linear transformation (measured by nullity) plus the "information preserved"
        (measured by rank) always equals the original dimension. This has profound
        applications in solving systems of linear equations.
      </Callout>
    </LessonLayout>
  );
}
