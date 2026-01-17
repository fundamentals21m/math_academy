import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { GradientVisualizer } from '@/components/visualizations';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Partial and Directional Derivatives</h2>

      <p className="mb-4">
        We now connect the notion of total differentiability with the more familiar concepts of
        partial and directional derivatives.
      </p>

      <Definition title="Directional Derivative">
        <p>
          Let <InlineMath>{`E \\subseteq \\mathbf{R}^n`}</InlineMath>,{' '}
          <InlineMath>{`f : E \\to \\mathbf{R}^m`}</InlineMath>, let{' '}
          <InlineMath>{`x_0`}</InlineMath> be an interior point of <InlineMath>E</InlineMath>, and
          let <InlineMath>{`v \\in \\mathbf{R}^n`}</InlineMath>. If the following limit exists, we
          say <InlineMath>f</InlineMath> is <strong>differentiable in the direction v</strong> at{' '}
          <InlineMath>{`x_0`}</InlineMath>:
        </p>
        <MathBlock>{`D_v f(x_0) := \\lim_{t \\to 0; t > 0} \\frac{f(x_0 + tv) - f(x_0)}{t}`}</MathBlock>
      </Definition>

      <Example title="Computing a Directional Derivative">
        <p>
          For <InlineMath>{`f(x, y) := (x^2, y^2)`}</InlineMath>,{' '}
          <InlineMath>{`x_0 := (1, 2)`}</InlineMath>, and <InlineMath>{`v := (3, 4)`}</InlineMath>:
        </p>
        <MathBlock>{`D_v f(x_0) = \\lim_{t \\to 0^+} \\frac{f(1 + 3t, 2 + 4t) - f(1, 2)}{t}`}</MathBlock>
        <MathBlock>{`= \\lim_{t \\to 0^+} \\frac{(1 + 6t + 9t^2, 4 + 16t + 16t^2) - (1, 4)}{t}`}</MathBlock>
        <MathBlock>{`= \\lim_{t \\to 0^+} (6 + 9t, 16 + 16t) = (6, 16)`}</MathBlock>
      </Example>

      <Definition title="Connection to Total Derivative">
        <p>
          If <InlineMath>f</InlineMath> is differentiable at <InlineMath>{`x_0`}</InlineMath>, then{' '}
          <InlineMath>f</InlineMath> is also differentiable in every direction{' '}
          <InlineMath>v</InlineMath> at <InlineMath>{`x_0`}</InlineMath>, and:
        </p>
        <MathBlock>{`D_v f(x_0) = f'(x_0) v`}</MathBlock>
      </Definition>

      <Callout type="warning" title="Converse is False">
        <p>
          Total differentiability implies directional differentiability in all directions, but
          the converse is <strong>not</strong> true. A function can have all directional
          derivatives at a point without being (totally) differentiable there.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Partial Derivatives</h3>

      <Definition title="Partial Derivative">
        <p>
          Let <InlineMath>{`E \\subseteq \\mathbf{R}^n`}</InlineMath>,{' '}
          <InlineMath>{`f : E \\to \\mathbf{R}^m`}</InlineMath>, let{' '}
          <InlineMath>{`x_0`}</InlineMath> be an interior point of <InlineMath>E</InlineMath>, and
          let <InlineMath>{`1 \\leq j \\leq n`}</InlineMath>. The{' '}
          <strong>partial derivative with respect to <InlineMath>{`x_j`}</InlineMath></strong> is:
        </p>
        <MathBlock>{`\\frac{\\partial f}{\\partial x_j}(x_0) := \\lim_{t \\to 0} \\frac{f(x_0 + te_j) - f(x_0)}{t} = \\frac{d}{dt} f(x_0 + te_j)\\Big|_{t=0}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`e_j`}</InlineMath> is the <InlineMath>j</InlineMath>th standard
          basis vector.
        </p>
      </Definition>

      <Example title="Partial Derivatives of a Vector Function">
        <p>
          For <InlineMath>{`f(x, y) = (x^2, y^2)`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{\\partial f}{\\partial x}(x, y) = (2x, 0), \\quad \\frac{\\partial f}{\\partial y}(x, y) = (0, 2y)`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Continuous Partial Derivatives Imply Differentiability
      </h3>

      <Definition title="Differentiability from Partial Derivatives">
        <p>
          Let <InlineMath>{`E \\subseteq \\mathbf{R}^n`}</InlineMath>,{' '}
          <InlineMath>{`f : E \\to \\mathbf{R}^m`}</InlineMath>, let{' '}
          <InlineMath>F</InlineMath> be a subset of <InlineMath>E</InlineMath>, and let{' '}
          <InlineMath>{`x_0`}</InlineMath> be an interior point of <InlineMath>F</InlineMath>.
        </p>
        <p className="mt-2">
          If all the partial derivatives{' '}
          <InlineMath>{`\\frac{\\partial f}{\\partial x_j}`}</InlineMath> exist on{' '}
          <InlineMath>F</InlineMath> and are <strong>continuous</strong> at{' '}
          <InlineMath>{`x_0`}</InlineMath>, then <InlineMath>f</InlineMath> is differentiable at{' '}
          <InlineMath>{`x_0`}</InlineMath>, with:
        </p>
        <MathBlock>{`f'(x_0)(v_1, \\ldots, v_n) = \\sum_{j=1}^{n} v_j \\frac{\\partial f}{\\partial x_j}(x_0)`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Derivative Matrix</h3>

      <Definition title="Gradient and Derivative Matrix">
        <p>
          For a scalar-valued function <InlineMath>{`f : E \\to \\mathbf{R}`}</InlineMath>, the{' '}
          <strong>gradient</strong> is the row vector:
        </p>
        <MathBlock>{`\\nabla f(x_0) := \\left( \\frac{\\partial f}{\\partial x_1}(x_0), \\ldots, \\frac{\\partial f}{\\partial x_n}(x_0) \\right)`}</MathBlock>
        <p className="mt-2">
          For a vector-valued function <InlineMath>{`f = (f_1, \\ldots, f_m)`}</InlineMath>, the{' '}
          <strong>derivative matrix</strong> (or Jacobian) is the{' '}
          <InlineMath>{`m \\times n`}</InlineMath> matrix:
        </p>
        <MathBlock>{`Df(x_0) := \\left( \\frac{\\partial f_i}{\\partial x_j}(x_0) \\right)_{1 \\leq i \\leq m; 1 \\leq j \\leq n}`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Gradient Vector Field</h3>

      <GradientVisualizer />

      <Callout type="success" title="Directional Derivative Formula">
        <p>
          When <InlineMath>f</InlineMath> is differentiable at <InlineMath>{`x_0`}</InlineMath>:
        </p>
        <MathBlock>{`D_v f(x_0) = \\sum_{j=1}^{n} v_j \\frac{\\partial f}{\\partial x_j}(x_0)`}</MathBlock>
        <p className="mt-2">
          For scalar-valued <InlineMath>f</InlineMath>:{' '}
          <InlineMath>{`D_v f(x_0) = v \\cdot \\nabla f(x_0)`}</InlineMath>
        </p>
      </Callout>
    </LessonLayout>
  );
}
