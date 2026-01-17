import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Derivatives in Several Variable Calculus</h2>

      <p className="mb-4">
        In single variable calculus, the derivative of <InlineMath>{`f : E \\to \\mathbf{R}`}</InlineMath>{' '}
        at <InlineMath>{`x_0`}</InlineMath> is defined as{' '}
        <InlineMath>{`f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}`}</InlineMath>.
      </p>

      <p className="mb-4">
        For functions <InlineMath>{`f : E \\to \\mathbf{R}^m`}</InlineMath> where{' '}
        <InlineMath>{`E \\subseteq \\mathbf{R}^n`}</InlineMath>, we cannot directly use this formula
        since we cannot divide vectors. Instead, we view the derivative as the linear transformation
        that best approximates <InlineMath>f</InlineMath> near <InlineMath>{`x_0`}</InlineMath>.
      </p>

      <Definition title="Equivalent Formulation of Derivative">
        <p>
          For a function <InlineMath>{`f : E \\to \\mathbf{R}`}</InlineMath> with{' '}
          <InlineMath>{`E \\subseteq \\mathbf{R}`}</InlineMath>, the following are equivalent:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <InlineMath>f</InlineMath> is differentiable at <InlineMath>{`x_0`}</InlineMath> with{' '}
            <InlineMath>{`f'(x_0) = L`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\lim_{x \\to x_0; x \\in E - \\{x_0\\}} \\frac{|f(x) - (f(x_0) + L(x - x_0))|}{|x - x_0|} = 0`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          The key insight is that the derivative <InlineMath>L</InlineMath> makes{' '}
          <InlineMath>{`|f(x) - (f(x_0) + L(x - x_0))|`}</InlineMath> small even when dividing by{' '}
          <InlineMath>{`|x - x_0|`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Multivariable Derivative
      </h3>

      <Definition title="Differentiability">
        <p>
          Let <InlineMath>{`E \\subseteq \\mathbf{R}^n`}</InlineMath>,{' '}
          <InlineMath>{`f : E \\to \\mathbf{R}^m`}</InlineMath>,{' '}
          <InlineMath>{`x_0 \\in E`}</InlineMath>, and{' '}
          <InlineMath>{`L : \\mathbf{R}^n \\to \\mathbf{R}^m`}</InlineMath> be a linear
          transformation. We say <InlineMath>f</InlineMath> is{' '}
          <strong>differentiable at <InlineMath>{`x_0`}</InlineMath> with derivative L</strong> if:
        </p>
        <MathBlock>{`\\lim_{x \\to x_0; x \\in E - \\{x_0\\}} \\frac{\\|f(x) - (f(x_0) + L(x - x_0))\\|}{\\|x - x_0\\|} = 0`}</MathBlock>
        <p className="mt-2">
          Here <InlineMath>{`\\|x\\| = (x_1^2 + x_2^2 + \\cdots + x_n^2)^{1/2}`}</InlineMath> is the
          Euclidean norm.
        </p>
      </Definition>

      <Example title="Verifying Differentiability">
        <p>
          Let <InlineMath>{`f : \\mathbf{R}^2 \\to \\mathbf{R}^2`}</InlineMath> be defined by{' '}
          <InlineMath>{`f(x, y) := (x^2, y^2)`}</InlineMath>, let{' '}
          <InlineMath>{`x_0 := (1, 2)`}</InlineMath>, and let{' '}
          <InlineMath>{`L : \\mathbf{R}^2 \\to \\mathbf{R}^2`}</InlineMath> be{' '}
          <InlineMath>{`L(x, y) := (2x, 4y)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Making the substitution <InlineMath>{`(x, y) = (1, 2) + (a, b)`}</InlineMath> and
          simplifying, we need to show:
        </p>
        <MathBlock>{`\\lim_{(a,b) \\to (0,0)} \\frac{\\|(a^2, b^2)\\|}{\\|(a, b)\\|} = 0`}</MathBlock>
        <p className="mt-2">
          Since <InlineMath>{`\\|(a^2, b^2)\\| \\leq a^2 + b^2 = \\|(a, b)\\|^2`}</InlineMath>, this
          limit is indeed 0.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Uniqueness of the Derivative</h3>

      <Definition title="Uniqueness of Derivatives">
        <p>
          Let <InlineMath>{`E \\subseteq \\mathbf{R}^n`}</InlineMath>,{' '}
          <InlineMath>{`f : E \\to \\mathbf{R}^m`}</InlineMath>, and let{' '}
          <InlineMath>{`x_0`}</InlineMath> be an <strong>interior point</strong> of{' '}
          <InlineMath>E</InlineMath>. If <InlineMath>f</InlineMath> is differentiable at{' '}
          <InlineMath>{`x_0`}</InlineMath> with derivative <InlineMath>{`L_1`}</InlineMath> and
          also with derivative <InlineMath>{`L_2`}</InlineMath>, then{' '}
          <InlineMath>{`L_1 = L_2`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="success" title="Notation">
        <p>
          Because of uniqueness, we denote the derivative as <InlineMath>{`f'(x_0)`}</InlineMath>.
          It is the unique linear transformation such that:
        </p>
        <MathBlock>{`f(x) \\approx f(x_0) + f'(x_0)(x - x_0)`}</MathBlock>
        <p className="mt-2">
          This is known as <strong>Newton's approximation</strong>. The derivative{' '}
          <InlineMath>{`f'`}</InlineMath> is also called the <strong>total derivative</strong> to
          distinguish it from partial and directional derivatives.
        </p>
      </Callout>

      <Callout type="info" title="Boundary Points">
        <p>
          Uniqueness of derivatives requires <InlineMath>{`x_0`}</InlineMath> to be an interior
          point. At boundary points, the derivative may not be unique: if{' '}
          <InlineMath>{`E = \\{x_0\\}`}</InlineMath>, knowing{' '}
          <InlineMath>{`f(x_0) = g(x_0)`}</InlineMath> does not imply{' '}
          <InlineMath>{`f'(x_0) = g'(x_0)`}</InlineMath>.
        </p>
      </Callout>
    </LessonLayout>
  );
}
