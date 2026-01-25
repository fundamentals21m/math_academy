import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section94() {
  return (
    <LessonLayout sectionId={94}>
      <h2>Derivatives of Implicitly Defined Functions</h2>

      <p>
        Some surfaces in 3-space are described by Cartesian equations of the
        form <InlineMath>F(x, y, z) = 0</InlineMath>. Such an equation provides
        an <strong>implicit representation</strong> of the surface. For example,{' '}
        <InlineMath>{`x^2 + y^2 + z^2 - 1 = 0`}</InlineMath> represents a unit
        sphere centered at the origin.
      </p>

      <h3>Implicit Functions</h3>

      <p>
        Sometimes it is possible to solve the equation{' '}
        <InlineMath>F(x, y, z) = 0</InlineMath> for one variable in terms of the
        other two, say for <InlineMath>z</InlineMath> in terms of{' '}
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>. This leads to
        equations of the form <InlineMath>z = f(x, y)</InlineMath>.
      </p>

      <p>
        For the sphere, we have two solutions:
      </p>
      <MathBlock>{`z = \\sqrt{1 - x^2 - y^2} \\quad \\text{and} \\quad z = -\\sqrt{1 - x^2 - y^2}`}</MathBlock>
      <p>
        representing the upper and lower hemispheres.
      </p>

      <h3>Computing Implicit Derivatives</h3>

      <p>
        Even when we cannot solve explicitly for <InlineMath>z</InlineMath>, we
        can still compute the partial derivatives{' '}
        <InlineMath>{`\\partial f/\\partial x`}</InlineMath> and{' '}
        <InlineMath>{`\\partial f/\\partial y`}</InlineMath> using the chain rule.
      </p>

      <p>
        Assume that <InlineMath>F[x, y, f(x, y)] = 0</InlineMath> for all{' '}
        <InlineMath>(x, y)</InlineMath> in some open set{' '}
        <InlineMath>S</InlineMath>. Define{' '}
        <InlineMath>g(x, y) = F[x, y, f(x, y)]</InlineMath>. Since{' '}
        <InlineMath>g(x, y) = 0</InlineMath> on <InlineMath>S</InlineMath>, both{' '}
        <InlineMath>{`\\partial g/\\partial x`}</InlineMath> and{' '}
        <InlineMath>{`\\partial g/\\partial y`}</InlineMath> are zero on{' '}
        <InlineMath>S</InlineMath>.
      </p>

      <p>
        By the chain rule:
      </p>
      <MathBlock>{`\\frac{\\partial g}{\\partial x} = D_1F + D_3F \\frac{\\partial f}{\\partial x} = 0`}</MathBlock>

      <p>
        Solving for <InlineMath>{`\\partial f/\\partial x`}</InlineMath>:
      </p>

      <Callout type="info">
        <strong>Implicit Derivative Formulas:</strong> If{' '}
        <InlineMath>F(x, y, z) = 0</InlineMath> defines <InlineMath>z</InlineMath>{' '}
        implicitly as a function of <InlineMath>x</InlineMath> and{' '}
        <InlineMath>y</InlineMath>, and if{' '}
        <InlineMath>{`\\partial F/\\partial z \\neq 0`}</InlineMath>, then:
        <MathBlock>{`\\frac{\\partial f}{\\partial x} = -\\frac{\\partial F/\\partial x}{\\partial F/\\partial z}, \\quad \\frac{\\partial f}{\\partial y} = -\\frac{\\partial F/\\partial y}{\\partial F/\\partial z}`}</MathBlock>
      </Callout>

      <h3>Example</h3>

      <p>
        Assume the equation <InlineMath>{`y^2 + xz + z^2 - e^z - c = 0`}</InlineMath>{' '}
        defines <InlineMath>z</InlineMath> as a function of{' '}
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>. Find a value
        of <InlineMath>c</InlineMath> such that <InlineMath>f(0, e) = 2</InlineMath>,
        and compute the partial derivatives at <InlineMath>(0, e)</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> When <InlineMath>x = 0</InlineMath>,{' '}
        <InlineMath>y = e</InlineMath>, and <InlineMath>z = 2</InlineMath>, the
        equation becomes <InlineMath>{`e^2 + 4 - e^2 - c = 0`}</InlineMath>, so{' '}
        <InlineMath>c = 4</InlineMath>.
      </p>

      <p>
        Let <InlineMath>{`F(x, y, z) = y^2 + xz + z^2 - e^z - 4`}</InlineMath>.
        Then:
      </p>
      <MathBlock>{`\\frac{\\partial f}{\\partial x} = -\\frac{z}{x + 2z - e^z}, \\quad \\frac{\\partial f}{\\partial y} = -\\frac{2y}{x + 2z - e^z}`}</MathBlock>

      <p>
        At <InlineMath>(0, e, 2)</InlineMath>:{' '}
        <InlineMath>{`\\partial f/\\partial x = 2/(e^2 - 4)`}</InlineMath> and{' '}
        <InlineMath>{`\\partial f/\\partial y = 2e/(e^2 - 4)`}</InlineMath>.
      </p>

      <h3>General n-Variable Case</h3>

      <Callout type="info">
        <strong>Theorem 9.3:</strong> Let <InlineMath>F</InlineMath> be a scalar
        field differentiable on an open set <InlineMath>T</InlineMath> in{' '}
        <InlineMath>{`\\mathbb{R}^n`}</InlineMath>. Assume the equation{' '}
        <InlineMath>{`F(x_1, \\ldots, x_n) = 0`}</InlineMath> defines{' '}
        <InlineMath>x_n</InlineMath> implicitly as a differentiable function of{' '}
        <InlineMath>{`x_1, \\ldots, x_{n-1}`}</InlineMath>. Then for each{' '}
        <InlineMath>k = 1, 2, \ldots, n-1</InlineMath>:
        <MathBlock>{`D_k f = -\\frac{D_k F}{D_n F}`}</MathBlock>
        at those points where <InlineMath>{`D_n F \\neq 0`}</InlineMath>.
      </Callout>

      <h3>Two Equations in Three Variables</h3>

      <p>
        For two surfaces <InlineMath>F(x, y, z) = 0</InlineMath> and{' '}
        <InlineMath>G(x, y, z) = 0</InlineMath> intersecting along a curve{' '}
        <InlineMath>C</InlineMath>, solving for <InlineMath>x</InlineMath> and{' '}
        <InlineMath>y</InlineMath> in terms of <InlineMath>z</InlineMath> leads
        to formulas involving <strong>Jacobian determinants</strong>:
      </p>
      <MathBlock>{`X'(z) = \\frac{\\partial(F, G)/\\partial(y, z)}{\\partial(F, G)/\\partial(x, y)}, \\quad Y'(z) = \\frac{\\partial(F, G)/\\partial(z, x)}{\\partial(F, G)/\\partial(x, y)}`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The chain rule enables us to compute
        derivatives of implicitly defined functions without solving explicitly.
        The key condition is that the partial derivative with respect to the
        dependent variable be nonzero—this ensures the implicit function
        theorem applies and derivatives are well-defined.
      </Callout>
    </LessonLayout>
  );
}
