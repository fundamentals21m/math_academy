import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <h2>Hermitian and Skew-Hermitian Transformations</h2>

      <p>
        We introduce two important classes of linear operators on Euclidean
        spaces. These operators arise frequently in applications, particularly
        in quantum mechanics where Hermitian operators represent physical
        observables.
      </p>

      <h3>Definitions</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>{'E'}</InlineMath> be a
        Euclidean space and <InlineMath>{'V'}</InlineMath> a subspace of{' '}
        <InlineMath>{'E'}</InlineMath>. A linear transformation{' '}
        <InlineMath>{'T: V \\to E'}</InlineMath> is called <strong>Hermitian</strong>{' '}
        on <InlineMath>{'V'}</InlineMath> if:
        <MathBlock>{`(T(x), y) = (x, T(y)) \\quad \\text{for all } x, y \\in V`}</MathBlock>
        It is called <strong>skew-Hermitian</strong> on <InlineMath>{'V'}</InlineMath>{' '}
        if:
        <MathBlock>{`(T(x), y) = -(x, T(y)) \\quad \\text{for all } x, y \\in V`}</MathBlock>
      </Callout>

      <p>
        In other words, a Hermitian operator <InlineMath>{'T'}</InlineMath> can be
        shifted from one factor of an inner product to the other without
        changing the value. Shifting a skew-Hermitian operator changes the sign.
      </p>

      <Callout type="info">
        <strong>Terminology:</strong> In a <strong>real</strong> Euclidean space:
        <br /><br />
        - Hermitian transformations are called <strong>symmetric</strong>
        <br />
        - Skew-Hermitian transformations are called <strong>skew-symmetric</strong>
      </Callout>

      <h3>Example 1: Function Spaces</h3>

      <p>
        Let <InlineMath>{'C(a, b)'}</InlineMath> be the space of real continuous
        functions on <InlineMath>{'[a, b]'}</InlineMath> with inner product:
      </p>
      <MathBlock>{`(f, g) = \\int_a^b f(t)g(t) \\, dt`}</MathBlock>

      <p>
        For a transformation <InlineMath>{'T: V \\to C(a, b)'}</InlineMath>, the
        conditions become:
      </p>
      <MathBlock>{`\\int_a^b \\{f(t)Tg(t) - g(t)Tf(t)\\}\\, dt = 0 \\quad \\text{(symmetric)}`}</MathBlock>
      <MathBlock>{`\\int_a^b \\{f(t)Tg(t) + g(t)Tf(t)\\}\\, dt = 0 \\quad \\text{(skew-symmetric)}`}</MathBlock>

      <h3>Example 2: Multiplication Operator</h3>

      <p>
        In <InlineMath>{'C(a, b)'}</InlineMath>, choose a fixed function{' '}
        <InlineMath>{'p'}</InlineMath> and define <InlineMath>{'T(f) = pf'}</InlineMath>.
        This is a <strong>symmetric operator</strong> since:
      </p>
      <MathBlock>{`f(t) \\cdot pg(t) - g(t) \\cdot pf(t) = 0`}</MathBlock>

      <h3>Example 3: Differentiation Operator</h3>

      <p>
        Let <InlineMath>{'V'}</InlineMath> be functions with continuous derivatives
        satisfying <InlineMath>{'f(a) = f(b)'}</InlineMath>. The differentiation
        operator <InlineMath>{"D(f) = f'"}</InlineMath> is{' '}
        <strong>skew-symmetric</strong>.
      </p>

      <p>
        <strong>Proof:</strong> The integrand in the skew-symmetry condition is
        the derivative of <InlineMath>{'fg'}</InlineMath>:
      </p>
      <MathBlock>{`\\int_a^b (fg)'(t) \\, dt = f(b)g(b) - f(a)g(a) = 0`}</MathBlock>
      <p>
        since both <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath>{' '}
        satisfy the boundary condition. The only eigenfunctions in{' '}
        <InlineMath>{'V'}</InlineMath> are constants, with eigenvalue 0.
      </p>

      <h3>Example 4: Sturm-Liouville Operators</h3>

      <p>
        Let <InlineMath>{'p'}</InlineMath> and <InlineMath>{'q'}</InlineMath> be fixed
        continuous functions, and let <InlineMath>{'V'}</InlineMath> consist of
        functions with continuous second derivatives satisfying boundary
        conditions:
      </p>
      <MathBlock>{`p(a)f(a) = 0, \\quad p(b)f(b) = 0`}</MathBlock>

      <p>
        The <strong>Sturm-Liouville operator</strong> is defined by:
      </p>
      <MathBlock>{`T(f) = (pf')' + qf`}</MathBlock>

      <p>
        This operator is <strong>symmetric</strong> on <InlineMath>{'V'}</InlineMath>.
        The eigenfunctions satisfy:
      </p>
      <MathBlock>{`(pf')' + qf = \\lambda f`}</MathBlock>

      <p>
        Sturm-Liouville operators are fundamental in the theory of linear
        second-order differential equations.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Hermitian and skew-Hermitian operators
        generalize the notions of symmetric and skew-symmetric matrices to
        infinite-dimensional spaces. The defining property—that the operator
        can be moved between factors of the inner product—leads to strong
        conclusions about eigenvalues and eigenvectors.
      </Callout>
    </LessonLayout>
  );
}
