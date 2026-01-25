import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section95() {
  return (
    <LessonLayout sectionId={95}>
      <h2>Maxima, Minima, and Saddle Points</h2>

      <p>
        A surface described explicitly by <InlineMath>{'z = f(x, y)'}</InlineMath>{' '}
        can be thought of as a level surface of the scalar field{' '}
        <InlineMath>{'F(x, y, z) = f(x, y) - z'}</InlineMath>. If{' '}
        <InlineMath>{'f'}</InlineMath> is differentiable, the gradient is:
      </p>
      <MathBlock>{`\\nabla F = \\frac{\\partial f}{\\partial x}\\mathbf{i} + \\frac{\\partial f}{\\partial y}\\mathbf{j} - \\mathbf{k}`}</MathBlock>

      <h3>Stationary Points</h3>

      <Callout type="info">
        <strong>Definition:</strong> A point <InlineMath>{'(x_1, y_1)'}</InlineMath>{' '}
        is called a <strong>stationary point</strong> or{' '}
        <strong>critical point</strong> of <InlineMath>{'f'}</InlineMath> if both
        partial derivatives vanish there:
        <MathBlock>{`D_1 f(x_1, y_1) = 0, \\quad D_2 f(x_1, y_1) = 0`}</MathBlock>
        The tangent plane is <strong>horizontal</strong> at a stationary point.
      </Callout>

      <h3>Types of Extrema</h3>

      <Callout type="info">
        <strong>Definition:</strong> A scalar field <InlineMath>{'f'}</InlineMath>{' '}
        has an <strong>absolute maximum</strong> at a point{' '}
        <InlineMath>{'a'}</InlineMath> of a set <InlineMath>{'S'}</InlineMath> in{' '}
        <InlineMath>{'\\mathbb{R}^n'}</InlineMath> if{' '}
        <InlineMath>{'f(x) \\leq f(a)'}</InlineMath> for all{' '}
        <InlineMath>{'x'}</InlineMath> in <InlineMath>{'S'}</InlineMath>.
        <br /><br />
        The function has a <strong>relative maximum</strong> at{' '}
        <InlineMath>{'a'}</InlineMath> if this inequality holds for every{' '}
        <InlineMath>{'x'}</InlineMath> in some <InlineMath>{'n'}</InlineMath>-ball{' '}
        <InlineMath>{'B(a)'}</InlineMath> lying in <InlineMath>{'S'}</InlineMath>.
        <br /><br />
        <strong>Absolute minimum</strong> and <strong>relative minimum</strong>{' '}
        are defined analogously with the inequality reversed. An{' '}
        <strong>extremum</strong> is either a relative maximum or minimum.
      </Callout>

      <h3>Saddle Points</h3>

      <Callout type="info">
        <strong>Definition:</strong> Assume <InlineMath>{'f'}</InlineMath> is
        differentiable at <InlineMath>{'a'}</InlineMath>. If{' '}
        <InlineMath>{'\\nabla f(a) = 0'}</InlineMath>, the point{' '}
        <InlineMath>{'a'}</InlineMath> is a <strong>stationary point</strong>. A
        stationary point is called a <strong>saddle point</strong> if every{' '}
        <InlineMath>{'n'}</InlineMath>-ball <InlineMath>{'B(a)'}</InlineMath> contains
        points <InlineMath>{'x'}</InlineMath> such that{' '}
        <InlineMath>{'f(x) < f(a)'}</InlineMath> and other points such that{' '}
        <InlineMath>{'f(x) > f(a)'}</InlineMath>.
      </Callout>

      <h3>Examples</h3>

      <p>
        <strong>Example 1 (Relative maximum):</strong>{' '}
        <InlineMath>{'z = 2 - x^2 - y^2'}</InlineMath>. This paraboloid has an
        absolute maximum at the origin since{' '}
        <InlineMath>{'f(x, y) = 2 - (x^2 + y^2) \\leq 2 = f(0, 0)'}</InlineMath>.
        Level curves are circles.
      </p>

      <p>
        <strong>Example 2 (Relative minimum):</strong>{' '}
        <InlineMath>{'z = x^2 + y^2'}</InlineMath>. This paraboloid has an
        absolute minimum at the origin. Level curves are circles.
      </p>

      <p>
        <strong>Example 3 (Saddle point):</strong>{' '}
        <InlineMath>{'z = xy'}</InlineMath>. This hyperbolic paraboloid is
        saddle-shaped near the origin. Both partial derivatives are zero at the
        origin, but it is neither a max nor a min. In the first and third
        quadrants <InlineMath>{'f(x, y) > 0'}</InlineMath>; in the second and
        fourth, <InlineMath>{'f(x, y) < 0'}</InlineMath>. Level curves are
        hyperbolas.
      </p>

      <p>
        <strong>Example 4 (Monkey saddle):</strong>{' '}
        <InlineMath>{'z = x^3 - 3xy^2'}</InlineMath>. Near the origin, this
        surface looks like a mountain pass among three peaks—a "monkey saddle"
        with room for two legs and a tail.
      </p>

      <p>
        <strong>Example 5 (Relative minimum):</strong>{' '}
        <InlineMath>{'z = x^2y^2'}</InlineMath>. This surface has an absolute
        minimum at the origin. Level curves are hyperbolas, but all function
        values are nonnegative.
      </p>

      <p>
        <strong>Example 6 (Relative maximum):</strong>{' '}
        <InlineMath>{'z = 1 - x^2'}</InlineMath>. This cylinder has an absolute
        maximum along the <InlineMath>{'y'}</InlineMath>-axis. Level curves are
        vertical lines.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> A necessary condition for an extremum at
        an interior point is <InlineMath>{'\\nabla f = 0'}</InlineMath>.
        However, this condition is not sufficient—stationary points can be
        maxima, minima, or saddle points. The geometry of level curves often
        reveals the nature of stationary points: circular patterns suggest
        extrema, while hyperbolic patterns suggest saddles.
      </Callout>
    </LessonLayout>
  );
}
