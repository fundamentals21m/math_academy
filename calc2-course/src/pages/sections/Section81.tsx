import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section81() {
  return (
    <LessonLayout sectionId={81}>
      <h2>Directional Derivatives and Partial Derivatives</h2>

      <p>
        When the direction vector <InlineMath>y</InlineMath> is a unit vector,
        the derivative <InlineMath>f'(a; y)</InlineMath> has a special
        interpretation: it measures the rate of change per unit distance.
      </p>

      <h3>Directional Derivatives</h3>

      <Callout type="info">
        <strong>Definition:</strong> If <InlineMath>y</InlineMath> is a{' '}
        <strong>unit vector</strong> (<InlineMath>{`\\|y\\| = 1`}</InlineMath>),
        then <InlineMath>f'(a; y)</InlineMath> is called the{' '}
        <strong>directional derivative</strong> of <InlineMath>f</InlineMath> at{' '}
        <InlineMath>a</InlineMath> in the direction of <InlineMath>y</InlineMath>.
      </Callout>

      <p>
        When <InlineMath>{`\\|y\\| = 1`}</InlineMath>, the distance from{' '}
        <InlineMath>a</InlineMath> to <InlineMath>a + hy</InlineMath> is{' '}
        <InlineMath>|h|</InlineMath>. So the directional derivative represents
        the average rate of change of <InlineMath>f</InlineMath> per unit
        distance along the direction <InlineMath>y</InlineMath>.
      </p>

      <h3>Partial Derivatives</h3>

      <Callout type="info">
        <strong>Definition:</strong> When <InlineMath>{`y = e_k`}</InlineMath>{' '}
        (the <InlineMath>k</InlineMath>th unit coordinate vector), the
        directional derivative is called the{' '}
        <strong>partial derivative with respect to <InlineMath>x_k</InlineMath></strong>:
        <MathBlock>{`D_k f(a) = f'(a; e_k) = \\lim_{h \\to 0} \\frac{f(a + he_k) - f(a)}{h}`}</MathBlock>
      </Callout>

      <p>
        The following notations are equivalent for the partial derivative:
      </p>
      <MathBlock>{`D_k f(a), \\quad \\frac{\\partial f}{\\partial x_k}(a), \\quad f_{x_k}(a)`}</MathBlock>

      <h3>Notation in Low Dimensions</h3>

      <p>
        In <InlineMath>{`\\mathbb{R}^2`}</InlineMath>, with{' '}
        <InlineMath>a = (a, b)</InlineMath>:
      </p>
      <MathBlock>{`\\frac{\\partial f}{\\partial x}(a, b) \\quad \\text{and} \\quad \\frac{\\partial f}{\\partial y}(a, b)`}</MathBlock>

      <p>
        In <InlineMath>{`\\mathbb{R}^3`}</InlineMath>, with{' '}
        <InlineMath>a = (a, b, c)</InlineMath>:
      </p>
      <MathBlock>{`\\frac{\\partial f}{\\partial x}(a, b, c), \\quad \\frac{\\partial f}{\\partial y}(a, b, c), \\quad \\frac{\\partial f}{\\partial z}(a, b, c)`}</MathBlock>

      <h3>Computing Partial Derivatives</h3>

      <p>
        To compute <InlineMath>{`\\partial f/\\partial x_k`}</InlineMath>,
        treat all variables except <InlineMath>x_k</InlineMath> as constants
        and differentiate with respect to <InlineMath>x_k</InlineMath>.
      </p>

      <p>
        <strong>Example:</strong> For{' '}
        <InlineMath>f(x, y) = x^2 + y^2 \sin(xy)</InlineMath>:
      </p>
      <MathBlock>{`\\frac{\\partial f}{\\partial x} = 2x + y^3 \\cos(xy)`}</MathBlock>
      <MathBlock>{`\\frac{\\partial f}{\\partial y} = 2y \\sin(xy) + xy^2 \\cos(xy)`}</MathBlock>

      <h3>Higher-Order Partial Derivatives</h3>

      <p>
        Partial differentiation produces new scalar fields{' '}
        <InlineMath>{`D_1 f, \\ldots, D_n f`}</InlineMath> from a given field{' '}
        <InlineMath>f</InlineMath>. The partial derivatives of these are called{' '}
        <strong>second-order partial derivatives</strong>.
      </p>

      <p>
        For functions of two variables, there are four second-order partials:
      </p>
      <MathBlock>{`\\frac{\\partial^2 f}{\\partial x^2}, \\quad \\frac{\\partial^2 f}{\\partial x \\partial y}, \\quad \\frac{\\partial^2 f}{\\partial y \\partial x}, \\quad \\frac{\\partial^2 f}{\\partial y^2}`}</MathBlock>

      <Callout type="warning">
        <strong>Note on Mixed Partials:</strong> The notation{' '}
        <InlineMath>{`\\frac{\\partial^2 f}{\\partial x \\partial y}`}</InlineMath>{' '}
        means <InlineMath>{`\\frac{\\partial}{\\partial x}\\left(\\frac{\\partial f}{\\partial y}\\right)`}</InlineMath>—first
        differentiate with respect to <InlineMath>y</InlineMath>, then with
        respect to <InlineMath>x</InlineMath>. This may or may not equal{' '}
        <InlineMath>{`\\frac{\\partial^2 f}{\\partial y \\partial x}`}</InlineMath>.
        They are equal when one is continuous in a neighborhood of the point.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> Partial derivatives measure rates of
        change along coordinate axes. They are the building blocks for more
        general directional derivatives. While partial derivatives are easy to
        compute (just ordinary derivatives treating other variables as constants),
        they give incomplete information about the function's behavior—we need
        to consider all directions, not just coordinate directions.
      </Callout>
    </LessonLayout>
  );
}
