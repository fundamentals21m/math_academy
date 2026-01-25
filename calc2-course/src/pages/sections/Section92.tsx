import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section92() {
  return (
    <LessonLayout sectionId={92}>
      <h2>First-Order PDEs with Constant Coefficients</h2>

      <p>
        We now solve first-order partial differential equations with constant
        coefficients using geometric considerations and the chain rule.
      </p>

      <h3>Example: A Specific First-Order PDE</h3>

      <p>
        Consider the first-order partial differential equation:
      </p>
      <MathBlock>{`3 \\frac{\\partial f(x, y)}{\\partial x} + 2 \\frac{\\partial f(x, y)}{\\partial y} = 0`}</MathBlock>

      <p>
        We can express the left member as a dot product:
      </p>
      <MathBlock>{`(3\\mathbf{i} + 2\\mathbf{j}) \\cdot \\nabla f(x, y) = 0`}</MathBlock>

      <p>
        This tells us that the gradient vector{' '}
        <InlineMath>{'\\nabla f(x, y)'}</InlineMath> is orthogonal to the vector{' '}
        <InlineMath>{'3\\mathbf{i} + 2\\mathbf{j}'}</InlineMath> at each point.
        But we also know that <InlineMath>{'\\nabla f(x, y)'}</InlineMath> is
        orthogonal to the level curves of <InlineMath>{'f'}</InlineMath>. Hence these
        level curves must be straight lines parallel to{' '}
        <InlineMath>{'3\\mathbf{i} + 2\\mathbf{j}'}</InlineMath>.
      </p>

      <p>
        In other words, the level curves of <InlineMath>{'f'}</InlineMath> are the
        lines:
      </p>
      <MathBlock>{`2x - 3y = c`}</MathBlock>

      <p>
        Therefore <InlineMath>{'f(x, y)'}</InlineMath> is constant when{' '}
        <InlineMath>{'2x - 3y'}</InlineMath> is constant. This suggests that:
      </p>
      <MathBlock>{`f(x, y) = g(2x - 3y)`}</MathBlock>
      <p>
        for some function <InlineMath>{'g'}</InlineMath>.
      </p>

      <h3>Verification</h3>

      <p>
        We verify that, for each differentiable function{' '}
        <InlineMath>{'g'}</InlineMath>, the scalar field{' '}
        <InlineMath>{'f(x, y) = g(2x - 3y)'}</InlineMath> satisfies the PDE.
        Using the chain rule:
      </p>
      <MathBlock>{`\\frac{\\partial f}{\\partial x} = 2g'(2x - 3y), \\quad \\frac{\\partial f}{\\partial y} = -3g'(2x - 3y)`}</MathBlock>

      <p>
        Therefore:
      </p>
      <MathBlock>{`3 \\frac{\\partial f}{\\partial x} + 2 \\frac{\\partial f}{\\partial y} = 6g'(2x - 3y) - 6g'(2x - 3y) = 0`}</MathBlock>

      <h3>The General Theorem</h3>

      <Callout type="info">
        <strong>Theorem 9.1:</strong> Let <InlineMath>{'g'}</InlineMath> be
        differentiable on <InlineMath>{'\\mathbb{R}^1'}</InlineMath>, and let{' '}
        <InlineMath>{'f'}</InlineMath> be the scalar field defined on{' '}
        <InlineMath>{'\\mathbb{R}^2'}</InlineMath> by:
        <MathBlock>{`f(x, y) = g(bx - ay)`}</MathBlock>
        where <InlineMath>{'a'}</InlineMath> and <InlineMath>{'b'}</InlineMath> are
        constants, not both zero. Then <InlineMath>{'f'}</InlineMath> satisfies the
        first-order PDE:
        <MathBlock>{`a \\frac{\\partial f(x, y)}{\\partial x} + b \\frac{\\partial f(x, y)}{\\partial y} = 0`}</MathBlock>
        everywhere in <InlineMath>{'\\mathbb{R}^2'}</InlineMath>.{' '}
        <strong>Conversely</strong>, every differentiable solution necessarily
        has this form for some <InlineMath>{'g'}</InlineMath>.
      </Callout>

      <h3>Method of Proof for the Converse</h3>

      <p>
        To show that every solution has this form, introduce a linear change of
        variables:
      </p>
      <MathBlock>{`x = Au + Bv, \\quad y = Cu + Dv`}</MathBlock>

      <p>
        This transforms <InlineMath>{'f(x, y)'}</InlineMath> into a function{' '}
        <InlineMath>{'h(u, v) = f(Au + Bv, Cu + Dv)'}</InlineMath>. Choose the
        constants <InlineMath>{'A, B, C, D'}</InlineMath> so that{' '}
        <InlineMath>{'h'}</InlineMath> satisfies the simpler equation:
      </p>
      <MathBlock>{`\\frac{\\partial h(u, v)}{\\partial u} = 0`}</MathBlock>

      <p>
        Solving this equation for <InlineMath>{'h'}</InlineMath>, we find{' '}
        <InlineMath>{'h(u, v) = \\varphi_1(u) + \\varphi_2(v)'}</InlineMath>,
        where <InlineMath>{'\\varphi_1'}</InlineMath> is a function of{' '}
        <InlineMath>{'u'}</InlineMath> alone and <InlineMath>{'\\varphi_2'}</InlineMath>{' '}
        is a function of <InlineMath>{'v'}</InlineMath> alone.
      </p>

      <p>
        With appropriate choices, the constants can be selected so that{' '}
        <InlineMath>{'u = x + ct'}</InlineMath> and <InlineMath>{'v = bx - ay'}</InlineMath>,
        from which the general form of the solution follows.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The geometric interpretation—gradient
        perpendicular to level curves—reveals that solutions to first-order
        linear PDEs with constant coefficients are functions of a single linear
        combination of the variables. The chain rule and a change of variables
        reduce the problem to finding functions constant in one direction.
      </Callout>
    </LessonLayout>
  );
}
