import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section87() {
  return (
    <LessonLayout sectionId={87}>
      <h2>Level Sets and Tangent Planes</h2>

      <p>
        The chain rule enables us to deduce important geometric properties of
        the gradient vector, particularly its relationship to level sets.
      </p>

      <h3>Level Sets</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>{'f'}</InlineMath> be a scalar
        field defined on a set <InlineMath>{'S'}</InlineMath>. For a constant{' '}
        <InlineMath>{'c'}</InlineMath>, the <strong>level set</strong> of{' '}
        <InlineMath>{'f'}</InlineMath> at level <InlineMath>{'c'}</InlineMath> is:
        <MathBlock>{`L(c) = \\{x \\in S : f(x) = c\\}`}</MathBlock>
        In <InlineMath>{'\\mathbb{R}^2'}</InlineMath>, <InlineMath>{'L(c)'}</InlineMath>{' '}
        is called a <strong>level curve</strong>. In{' '}
        <InlineMath>{'\\mathbb{R}^3'}</InlineMath>, it is called a{' '}
        <strong>level surface</strong>.
      </Callout>

      <h3>Physical Examples</h3>

      <p>
        Families of level sets occur in many applications:
      </p>
      <ul>
        <li>
          <strong>Isothermals:</strong> If <InlineMath>{'f(x, y)'}</InlineMath>{' '}
          represents temperature, the level curves are curves of constant
          temperature.
        </li>
        <li>
          <strong>Lines of flow:</strong> Heat flows in the direction of most
          rapid temperature change, which is normal to the isothermals. These
          paths are the orthogonal trajectories of the isothermals.
        </li>
        <li>
          <strong>Contour lines:</strong> On a topographic map, level curves
          of the elevation function show constant altitude.
        </li>
      </ul>

      <h3>The Gradient is Normal to Level Sets</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Let <InlineMath>{'f'}</InlineMath> be differentiable
        on an open set in <InlineMath>{'\\mathbb{R}^n'}</InlineMath>. At any
        point <InlineMath>{'a'}</InlineMath> on a level set{' '}
        <InlineMath>{'L(c)'}</InlineMath> where{' '}
        <InlineMath>{'\\nabla f(a) \\neq 0'}</InlineMath>, the gradient{' '}
        <InlineMath>{'\\nabla f(a)'}</InlineMath> is <strong>normal</strong> to{' '}
        <InlineMath>{'L(c)'}</InlineMath> at <InlineMath>{'a'}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> Let <InlineMath>{'\\Gamma'}</InlineMath> be any curve
        on <InlineMath>{'L(c)'}</InlineMath> passing through <InlineMath>{'a'}</InlineMath>,
        described by <InlineMath>{'r(t)'}</InlineMath>. Since <InlineMath>{'\\Gamma'}</InlineMath>{' '}
        lies on <InlineMath>{'L(c)'}</InlineMath>:
      </p>
      <MathBlock>{`f[r(t)] = c \\quad \\text{for all } t`}</MathBlock>

      <p>
        Let <InlineMath>{'g(t) = f[r(t)]'}</InlineMath>. By the chain rule:
      </p>
      <MathBlock>{`g'(t) = \\nabla f[r(t)] \\cdot r'(t)`}</MathBlock>

      <p>
        Since <InlineMath>{'g'}</InlineMath> is constant, <InlineMath>{"g'(t) = 0"}</InlineMath>.
        Choosing <InlineMath>{'t_1'}</InlineMath> so that{' '}
        <InlineMath>{'r(t_1) = a'}</InlineMath>:
      </p>
      <MathBlock>{`\\nabla f(a) \\cdot r'(t_1) = 0`}</MathBlock>

      <p>
        Thus <InlineMath>{'\\nabla f(a)'}</InlineMath> is perpendicular to the
        tangent vector <InlineMath>{"r'(t_1)"}</InlineMath> of <InlineMath>{'\\Gamma'}</InlineMath>{' '}
        at <InlineMath>{'a'}</InlineMath>. Since this holds for any curve on{' '}
        <InlineMath>{'L(c)'}</InlineMath> through <InlineMath>{'a'}</InlineMath>,
        the gradient is normal to the level set.
      </p>

      <h3>Tangent Planes to Level Surfaces</h3>

      <p>
        Consider a level surface <InlineMath>{'L(c)'}</InlineMath> in{' '}
        <InlineMath>{'\\mathbb{R}^3'}</InlineMath>. Take curves on{' '}
        <InlineMath>{'L(c)'}</InlineMath> passing through <InlineMath>{'a'}</InlineMath>.
        All their tangent vectors at <InlineMath>{'a'}</InlineMath> are perpendicular
        to <InlineMath>{'\\nabla f(a)'}</InlineMath>.
      </p>

      <p>
        If <InlineMath>{'\\nabla f(a) \\neq 0'}</InlineMath>, these tangent
        vectors determine a plane, and <InlineMath>{'\\nabla f(a)'}</InlineMath> is
        normal to this plane. This is the <strong>tangent plane</strong> to{' '}
        <InlineMath>{'L(c)'}</InlineMath> at <InlineMath>{'a'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Equation of the Tangent Plane:</strong> The tangent plane to
        the level surface <InlineMath>{'f(x, y, z) = c'}</InlineMath> at{' '}
        <InlineMath>{'a = (x_1, y_1, z_1)'}</InlineMath> is:
        <MathBlock>{`\\nabla f(a) \\cdot (x - a) = 0`}</MathBlock>
        In Cartesian form:
        <MathBlock>{`D_1 f(a)(x - x_1) + D_2 f(a)(y - y_1) + D_3 f(a)(z - z_1) = 0`}</MathBlock>
      </Callout>

      <h3>Tangent Lines to Level Curves</h3>

      <p>
        For scalar fields in <InlineMath>{'\\mathbb{R}^2'}</InlineMath>, the
        tangent line to the level curve <InlineMath>{'f(x, y) = c'}</InlineMath>{' '}
        at <InlineMath>{'a = (x_1, y_1)'}</InlineMath> is:
      </p>
      <MathBlock>{`D_1 f(a)(x - x_1) + D_2 f(a)(y - y_1) = 0`}</MathBlock>

      <h3>Properties of the Gradient on Level Sets</h3>

      <p>
        At each point of a level set <InlineMath>{'L(c)'}</InlineMath>:
      </p>
      <ol>
        <li>
          <strong>Gradient is normal:</strong>{' '}
          <InlineMath>{'\\nabla f'}</InlineMath> is perpendicular to the level set.
        </li>
        <li>
          <strong>Zero directional derivative along level set:</strong> Moving
          along the level set, the field value doesn't change.
        </li>
        <li>
          <strong>Maximum change normal to level set:</strong> The directional
          derivative is largest in the direction normal to the level set
          (the gradient direction).
        </li>
      </ol>

      <Callout type="success">
        <strong>Key Insight:</strong> The gradient gives both magnitude and
        direction for the steepest ascent of a scalar field. Level sets are
        perpendicular to this direction—they connect points of equal field
        value. This geometry is fundamental in optimization, physics
        (equipotential surfaces, isotherms), and differential geometry.
      </Callout>
    </LessonLayout>
  );
}
