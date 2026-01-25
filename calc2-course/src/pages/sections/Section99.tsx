import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section99() {
  return (
    <LessonLayout sectionId={99}>
      <h2>Lagrange Multipliers for Constrained Extrema</h2>

      <p>
        Many optimization problems involve finding extreme values of a function
        when the variables are constrained to lie on a surface or curve.
      </p>

      <h3>Motivating Examples</h3>

      <p>
        <strong>Example 1:</strong> Given a surface <InlineMath>S</InlineMath>{' '}
        not passing through the origin, find the points of{' '}
        <InlineMath>S</InlineMath> nearest to the origin.
      </p>

      <p>
        <strong>Example 2:</strong> If <InlineMath>f(x, y, z)</InlineMath>{' '}
        denotes temperature at <InlineMath>(x, y, z)</InlineMath>, find the
        maximum and minimum temperature on a given curve{' '}
        <InlineMath>C</InlineMath>.
      </p>

      <h3>The Method of Lagrange Multipliers</h3>

      <Callout type="info">
        <strong>Lagrange's Method:</strong> If a scalar field{' '}
        <InlineMath>{'f(x_1, \\ldots, x_n)'}</InlineMath> has a relative
        extremum subject to <InlineMath>m</InlineMath> constraints:
        <MathBlock>
          g_1(x_1, \ldots, x_n) = 0, \quad \ldots, \quad g_m(x_1, \ldots, x_n) = 0
        </MathBlock>
        where <InlineMath>{'m < n'}</InlineMath>, then there exist{' '}
        <InlineMath>m</InlineMath> scalars{' '}
        <InlineMath>{'\lambda_1, \\ldots, \\lambda_m'}</InlineMath> (called{' '}
        <strong>Lagrange multipliers</strong>) such that:
        <MathBlock>
          \nabla f = \lambda_1 \nabla g_1 + \cdots + \lambda_m \nabla g_m
        </MathBlock>
        at each extremum point.
      </Callout>

      <h3>Geometric Intuition: One Constraint</h3>

      <p>
        For Example 1, we minimize the distance function{' '}
        <InlineMath>{'f(x, y, z) = (x^2 + y^2 + z^2)^{1/2}'}</InlineMath> on a
        surface <InlineMath>g(x, y, z) = 0</InlineMath>.
      </p>

      <p>
        The level surfaces of <InlineMath>f</InlineMath> are spheres centered at
        the origin. Starting with a small sphere and expanding it until it first
        touches <InlineMath>S</InlineMath>, each contact point is a point of{' '}
        <InlineMath>S</InlineMath> nearest to the origin.
      </p>

      <p>
        At a contact point, the tangent plane to <InlineMath>S</InlineMath> must
        coincide with the tangent plane to the touching sphere. Therefore, the
        gradient vectors <InlineMath>{'\nabla g'}</InlineMath> and{' '}
        <InlineMath>{'\nabla f'}</InlineMath> are parallel:
      </p>
      <MathBlock>
        \nabla f(x, y, z) = \lambda \nabla g(x, y, z)
      </MathBlock>

      <h3>Geometric Intuition: Two Constraints</h3>

      <p>
        For Example 2, we extremize <InlineMath>f(x, y, z)</InlineMath> on a
        curve <InlineMath>C</InlineMath> which is the intersection of two
        surfaces:
      </p>
      <MathBlock>
        g_1(x, y, z) = 0, \quad g_2(x, y, z) = 0
      </MathBlock>

      <p>
        At a relative extremum on <InlineMath>C</InlineMath>, the gradient{' '}
        <InlineMath>{'\nabla f'}</InlineMath> must be <strong>normal to the
        curve</strong> <InlineMath>C</InlineMath>.
      </p>

      <p>
        <strong>Why?</strong> Parametrize <InlineMath>C</InlineMath> by{' '}
        <InlineMath>\alpha(t)</InlineMath>. On <InlineMath>C</InlineMath>, the
        temperature becomes <InlineMath>{'\varphi(t) = f[\\alpha(t)]'}</InlineMath>.
        If <InlineMath>\varphi</InlineMath> has an extremum at{' '}
        <InlineMath>t_1</InlineMath>, then <InlineMath>{'\varphi\'(t_1) = 0'}</InlineMath>.
        By the chain rule:
      </p>
      <MathBlock>
        \varphi'(t) = \nabla f[\alpha(t)] \cdot \alpha'(t)
      </MathBlock>

      <p>
        At <InlineMath>t_1</InlineMath>, this dot product is zero, so{' '}
        <InlineMath>{'\nabla f'}</InlineMath> is perpendicular to{' '}
        <InlineMath>{'\alpha\'(t_1)'}</InlineMath> (the tangent to{' '}
        <InlineMath>C</InlineMath>). Thus <InlineMath>{'\nabla f'}</InlineMath>{' '}
        lies in the plane normal to <InlineMath>C</InlineMath>.
      </p>

      <p>
        Since <InlineMath>{'\nabla g_1'}</InlineMath> and{' '}
        <InlineMath>{'\nabla g_2'}</InlineMath> are also normal to{' '}
        <InlineMath>C</InlineMath>, all three vectors lie in the same plane. If{' '}
        <InlineMath>{'\nabla g_1'}</InlineMath> and{' '}
        <InlineMath>{'\nabla g_2'}</InlineMath> are independent, we can write:
      </p>
      <MathBlock>
        \nabla f = \lambda_1 \nabla g_1 + \lambda_2 \nabla g_2
      </MathBlock>

      <h3>Procedure</h3>

      <p>
        To solve a constrained extremum problem with <InlineMath>m</InlineMath>{' '}
        constraints in <InlineMath>n</InlineMath> variables:
      </p>
      <ol>
        <li>
          Write out the <InlineMath>m</InlineMath> constraint equations
        </li>
        <li>
          Write the <InlineMath>n</InlineMath> scalar equations from{' '}
          <InlineMath>{'\nabla f = \\lambda_1 \\nabla g_1 + \\cdots + \\lambda_m \\nabla g_m'}</InlineMath>
        </li>
        <li>
          Solve these <InlineMath>n + m</InlineMath> equations for the{' '}
          <InlineMath>n + m</InlineMath> unknowns{' '}
          <InlineMath>{'x_1, \\ldots, x_n, \\lambda_1, \\ldots, \\lambda_m'}</InlineMath>
        </li>
        <li>
          Evaluate <InlineMath>f</InlineMath> at each solution to find the extrema
        </li>
      </ol>

      <Callout type="warning">
        <strong>Condition for Validity:</strong> The method requires that not
        all Jacobian determinants of the constraint functions{' '}
        <InlineMath>{'g_1, \\ldots, g_m'}</InlineMath> with respect to{' '}
        <InlineMath>m</InlineMath> of the variables be zero at the extremum.
        Geometrically, this means the gradients{' '}
        <InlineMath>{'\nabla g_1, \\ldots, \\nabla g_m'}</InlineMath> are
        linearly independent.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> Lagrange multipliers transform a
        constrained optimization problem into a system of equations. The
        geometric principle is that at an extremum, the gradient of the
        objective function lies in the space spanned by the constraint
        gradients—all "directional pull" of the objective is balanced by the
        constraints.
      </Callout>
    </LessonLayout>
  );
}
