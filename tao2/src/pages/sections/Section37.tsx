import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { ImplicitFunctionVisualizer } from '@/components/visualizations';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Implicit Function Theorem</h2>

      <p className="mb-4">
        A function <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> gives rise to a{' '}
        <strong>graph</strong> <InlineMath>{`\\{(x, f(x)) : x \\in \\mathbf{R}\\}`}</InlineMath>,
        which is a curve in <InlineMath>{`\\mathbf{R}^2`}</InlineMath>. However, not all curves are
        graphs - they must obey the <strong>vertical line test</strong>.
      </p>

      <Example title="The Circle">
        <p>
          The circle <InlineMath>{`\\{(x, y) : x^2 + y^2 = 1\\}`}</InlineMath> is not a graph.
          However, restricting to the upper semicircle{' '}
          <InlineMath>{`\\{(x, y) : x^2 + y^2 = 1, y > 0\\}`}</InlineMath> gives the graph of{' '}
          <InlineMath>{`y = \\sqrt{1 - x^2}`}</InlineMath>.
        </p>
        <p className="mt-2">
          Thus while the entire circle is not a graph, certain <strong>local portions</strong> of
          it are.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Level Curves and Implicit Functions</h3>

      <ImplicitFunctionVisualizer />

      <p className="mb-4">
        More generally, given a hypersurface <InlineMath>{`\\{x \\in \\mathbf{R}^n : f(x) = 0\\}`}</InlineMath>,
        the implicit function theorem tells us when it can be locally written as a graph.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Implicit Function Theorem
      </h3>

      <Definition title="Implicit Function Theorem">
        <p>
          Let <InlineMath>E</InlineMath> be an open subset of{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath>, let{' '}
          <InlineMath>{`f : E \\to \\mathbf{R}`}</InlineMath> be continuously differentiable, and
          let <InlineMath>{`y = (y_1, \\ldots, y_n)`}</InlineMath> be a point in{' '}
          <InlineMath>E</InlineMath> such that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`f(y) = 0`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\frac{\\partial f}{\\partial x_n}(y) \\neq 0`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">Then there exist:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            An open set <InlineMath>U</InlineMath> in{' '}
            <InlineMath>{`\\mathbf{R}^{n-1}`}</InlineMath> containing{' '}
            <InlineMath>{`(y_1, \\ldots, y_{n-1})`}</InlineMath>
          </li>
          <li>
            An open set <InlineMath>V</InlineMath> in <InlineMath>E</InlineMath> containing{' '}
            <InlineMath>y</InlineMath>
          </li>
          <li>
            A function <InlineMath>{`g : U \\to \\mathbf{R}`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          such that <InlineMath>{`g(y_1, \\ldots, y_{n-1}) = y_n`}</InlineMath> and:
        </p>
        <MathBlock>{`\\{x \\in V : f(x) = 0\\} = \\{(x_1, \\ldots, x_{n-1}, g(x_1, \\ldots, x_{n-1})) : (x_1, \\ldots, x_{n-1}) \\in U\\}`}</MathBlock>
        <p className="mt-2">
          Moreover, <InlineMath>g</InlineMath> is differentiable at{' '}
          <InlineMath>{`(y_1, \\ldots, y_{n-1})`}</InlineMath> with:
        </p>
        <MathBlock>{`\\frac{\\partial g}{\\partial x_j}(y_1, \\ldots, y_{n-1}) = -\\frac{\\partial f / \\partial x_j (y)}{\\partial f / \\partial x_n (y)}`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Implicit Differentiation
      </h3>

      <Callout type="info" title="Deriving the Formula">
        <p>
          If we know <InlineMath>{`f(x_1, \\ldots, x_n) = 0`}</InlineMath> and{' '}
          <InlineMath>{`\\frac{\\partial f}{\\partial x_n} \\neq 0`}</InlineMath>, then{' '}
          <InlineMath>{`x_n`}</InlineMath> is "implicitly" defined in terms of{' '}
          <InlineMath>{`x_1, \\ldots, x_{n-1}`}</InlineMath>.
        </p>
        <p className="mt-2">
          Differentiating the identity <InlineMath>{`f(x_1, \\ldots, x_{n-1}, g(x_1, \\ldots, x_{n-1})) = 0`}</InlineMath>{' '}
          with respect to <InlineMath>{`x_j`}</InlineMath> using the chain rule:
        </p>
        <MathBlock>{`\\frac{\\partial f}{\\partial x_j} + \\frac{\\partial f}{\\partial x_n} \\frac{\\partial g}{\\partial x_j} = 0`}</MathBlock>
        <p className="mt-2">Solving for the partial derivative of <InlineMath>g</InlineMath> gives the formula.</p>
      </Callout>

      <Example title="Surface in R^3">
        <p>
          Consider <InlineMath>{`S = \\{(x, y, z) : xy + yz + zx = -1\\}`}</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>{`f(x, y, z) = xy + yz + zx + 1`}</InlineMath>. Then{' '}
          <InlineMath>{`\\frac{\\partial f}{\\partial z} = y + x`}</InlineMath>.
        </p>
        <p className="mt-2">
          For any <InlineMath>{`(x_0, y_0, z_0) \\in S`}</InlineMath> with{' '}
          <InlineMath>{`y_0 + x_0 \\neq 0`}</InlineMath>, the surface near this point is a graph{' '}
          <InlineMath>{`z = g(x, y)`}</InlineMath> for some differentiable function{' '}
          <InlineMath>g</InlineMath>.
        </p>
        <p className="mt-2">The partial derivatives are:</p>
        <MathBlock>{`\\frac{\\partial g}{\\partial x}(x_0, y_0) = -\\frac{y_0 + z_0}{y_0 + x_0}, \\quad \\frac{\\partial g}{\\partial y}(x_0, y_0) = -\\frac{x_0 + z_0}{y_0 + x_0}`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Critical Points and Manifolds
      </h3>

      <Callout type="warning" title="Critical Points">
        <p>
          If <InlineMath>{`\\nabla f(x_0) = 0`}</InlineMath> (all partial derivatives vanish), we
          say <InlineMath>f</InlineMath> has a <strong>critical point</strong> at{' '}
          <InlineMath>{`x_0`}</InlineMath>.
        </p>
        <p className="mt-2">
          At critical points, the level set <InlineMath>{`\\{x : f(x) = 0\\}`}</InlineMath> may
          have complicated behavior. For example,{' '}
          <InlineMath>{`\\{(x, y) : x^2 - y^2 = 0\\}`}</InlineMath> has a critical point at{' '}
          <InlineMath>{`(0, 0)`}</InlineMath> and is the union of two lines, not a graph.
        </p>
      </Callout>

      <Callout type="success" title="Manifolds">
        <p>
          Sets that look like graphs of continuous functions at every point are called{' '}
          <strong>manifolds</strong>. The implicit function theorem shows that{' '}
          <InlineMath>{`\\{x \\in \\mathbf{R}^n : f(x) = 0\\}`}</InlineMath> is a manifold if it
          contains no critical points of <InlineMath>f</InlineMath>.
        </p>
      </Callout>

      <Definition title="Connection to Inverse Function Theorem">
        <p>
          The implicit function theorem is proved using the inverse function theorem. Define{' '}
          <InlineMath>{`F : E \\to \\mathbf{R}^n`}</InlineMath> by:
        </p>
        <MathBlock>{`F(x_1, \\ldots, x_n) = (x_1, \\ldots, x_{n-1}, f(x_1, \\ldots, x_n))`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>{`\\frac{\\partial f}{\\partial x_n}(y) \\neq 0`}</InlineMath>, then{' '}
          <InlineMath>{`DF(y)`}</InlineMath> is invertible, so the inverse function theorem
          applies. The function <InlineMath>g</InlineMath> is then extracted from{' '}
          <InlineMath>{`F^{-1}`}</InlineMath>.
        </p>
      </Definition>
    </LessonLayout>
  );
}
