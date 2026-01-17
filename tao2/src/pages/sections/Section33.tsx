import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Several Variable Calculus Chain Rule</h2>

      <p className="mb-4">
        The chain rule is one of the most important tools in calculus. We now state and prove
        its generalization to several variables.
      </p>

      <Definition title="Chain Rule">
        <p>
          Let <InlineMath>{`E \\subseteq \\mathbf{R}^n`}</InlineMath> and{' '}
          <InlineMath>{`F \\subseteq \\mathbf{R}^m`}</InlineMath>. Let{' '}
          <InlineMath>{`f : E \\to F`}</InlineMath> and{' '}
          <InlineMath>{`g : F \\to \\mathbf{R}^p`}</InlineMath>. Let{' '}
          <InlineMath>{`x_0`}</InlineMath> be an interior point of <InlineMath>E</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>f</InlineMath> is differentiable at <InlineMath>{`x_0`}</InlineMath>,{' '}
          <InlineMath>{`f(x_0)`}</InlineMath> is in the interior of <InlineMath>F</InlineMath>,
          and <InlineMath>g</InlineMath> is differentiable at <InlineMath>{`f(x_0)`}</InlineMath>,
          then <InlineMath>{`g \\circ f : E \\to \\mathbf{R}^p`}</InlineMath> is differentiable at{' '}
          <InlineMath>{`x_0`}</InlineMath>, and:
        </p>
        <MathBlock>{`(g \\circ f)'(x_0) = g'(f(x_0)) f'(x_0)`}</MathBlock>
      </Definition>

      <Callout type="info" title="Intuitive Explanation">
        <p>
          Newton's approximation gives{' '}
          <InlineMath>{`f(x) - f(x_0) \\approx f'(x_0)(x - x_0)`}</InlineMath> and{' '}
          <InlineMath>{`g(f(x)) - g(f(x_0)) \\approx g'(f(x_0))(f(x) - f(x_0))`}</InlineMath>.
        </p>
        <p className="mt-2">
          Combining these:{' '}
          <InlineMath>{`g \\circ f(x) - g \\circ f(x_0) \\approx g'(f(x_0)) f'(x_0) (x - x_0)`}</InlineMath>
        </p>
      </Callout>

      <Definition title="Matrix Form of Chain Rule">
        <p>
          In terms of derivative matrices:
        </p>
        <MathBlock>{`D(g \\circ f)(x_0) = Dg(f(x_0)) \\cdot Df(x_0)`}</MathBlock>
        <p className="mt-2">
          The chain rule becomes matrix multiplication!
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Applications of the Chain Rule</h3>

      <Example title="Product Rule for Gradients">
        <p>
          Let <InlineMath>{`f, g : \\mathbf{R}^n \\to \\mathbf{R}`}</InlineMath> be differentiable.
          Define <InlineMath>{`h(x) := (f(x), g(x))`}</InlineMath> and{' '}
          <InlineMath>{`k(a, b) := ab`}</InlineMath>.
        </p>
        <p className="mt-2">
          We have{' '}
          <InlineMath>{`Dh(x_0) = \\begin{pmatrix} \\nabla f(x_0) \\\\ \\nabla g(x_0) \\end{pmatrix}`}</InlineMath>{' '}
          and <InlineMath>{`Dk(a, b) = (b, a)`}</InlineMath>.
        </p>
        <p className="mt-2">
          By the chain rule:
        </p>
        <MathBlock>{`D(k \\circ h)(x_0) = (g(x_0), f(x_0)) \\begin{pmatrix} \\nabla f(x_0) \\\\ \\nabla g(x_0) \\end{pmatrix} = g(x_0) \\nabla f(x_0) + f(x_0) \\nabla g(x_0)`}</MathBlock>
        <p className="mt-2">
          Since <InlineMath>{`k \\circ h = fg`}</InlineMath>, we obtain the{' '}
          <strong>product rule</strong>:
        </p>
        <MathBlock>{`\\nabla(fg) = g \\nabla f + f \\nabla g`}</MathBlock>
      </Example>

      <Definition title="Linear Transformations and Differentiation">
        <p>
          If <InlineMath>{`T : \\mathbf{R}^n \\to \\mathbf{R}^m`}</InlineMath> is a linear
          transformation, then <InlineMath>T</InlineMath> is continuously differentiable
          everywhere with <InlineMath>{`T'(x) = T`}</InlineMath> for all <InlineMath>x</InlineMath>.
        </p>
        <p className="mt-2">
          Thus for any differentiable <InlineMath>{`f : E \\to \\mathbf{R}^n`}</InlineMath>:
        </p>
        <MathBlock>{`(Tf)'(x_0) = T(f'(x_0))`}</MathBlock>
        <p className="mt-2">
          This generalizes <InlineMath>{`(cf)' = c(f')`}</InlineMath> for constant scalars{' '}
          <InlineMath>c</InlineMath>.
        </p>
      </Definition>

      <Example title="Parametric Curves">
        <p>
          If <InlineMath>{`f : \\mathbf{R}^n \\to \\mathbf{R}^m`}</InlineMath> is differentiable
          and <InlineMath>{`x_j : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> are differentiable
          for <InlineMath>{`j = 1, \\ldots, n`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\frac{d}{dt} f(x_1(t), \\ldots, x_n(t)) = \\sum_{j=1}^{n} x_j'(t) \\frac{\\partial f}{\\partial x_j}(x_1(t), \\ldots, x_n(t))`}</MathBlock>
      </Example>

      <Callout type="success" title="Other Differentiation Rules">
        <p>
          The chain rule can be used to derive:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Sum rule:</strong>{' '}
            <InlineMath>{`\\nabla(f + g) = \\nabla f + \\nabla g`}</InlineMath>
          </li>
          <li>
            <strong>Difference rule:</strong>{' '}
            <InlineMath>{`\\nabla(f - g) = \\nabla f - \\nabla g`}</InlineMath>
          </li>
          <li>
            <strong>Quotient rule:</strong>{' '}
            <InlineMath>{`\\nabla(f/g) = \\frac{g \\nabla f - f \\nabla g}{g^2}`}</InlineMath>
          </li>
        </ul>
      </Callout>

      <Example title="Differentiating Norm">
        <p>
          Let <InlineMath>{`\\vec{x} : \\mathbf{R} \\to \\mathbf{R}^3`}</InlineMath> be
          differentiable and <InlineMath>{`r(t) := \\|\\vec{x}(t)\\|`}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>{`r(t_0) \\neq 0`}</InlineMath>, then <InlineMath>r</InlineMath> is
          differentiable at <InlineMath>{`t_0`}</InlineMath> with:
        </p>
        <MathBlock>{`r'(t_0) = \\frac{\\vec{x}'(t_0) \\cdot \\vec{x}(t_0)}{r(t_0)}`}</MathBlock>
      </Example>
    </LessonLayout>
  );
}
