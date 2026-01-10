import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2 className="text-2xl font-semibold mb-4">Derivatives of Higher Order</h2>

      <p className="mb-4">
        If <InlineMath>{'f'}</InlineMath> has a derivative <InlineMath>{'f\''}</InlineMath> on an interval,
        and if <InlineMath>{'f\''}</InlineMath> is itself differentiable, we can form the derivative
        of <InlineMath>{'f\''}</InlineMath>. This process can be repeated to obtain higher-order
        derivatives, which are essential for Taylor's theorem and many applications.
      </p>

      <Definition title="5.14 - Higher Order Derivatives">
        <p className="mb-3">
          If <InlineMath>{'f'}</InlineMath> has a derivative <InlineMath>{'f\''}</InlineMath> on an interval,
          and if <InlineMath>{'f\''}</InlineMath> is itself differentiable, we denote the derivative
          of <InlineMath>{'f\''}</InlineMath> by <InlineMath>{'f\'\''}</InlineMath> or <InlineMath>{'f^{(2)}'}</InlineMath> and
          call it the <em>second derivative</em> of <InlineMath>{'f'}</InlineMath>.
        </p>
        <p className="mb-3">
          Continuing this process, we write <InlineMath>{'f^{(n)}'}</InlineMath> for
          the <InlineMath>{'n'}</InlineMath>-th derivative of <InlineMath>{'f'}</InlineMath>, where <InlineMath>{'f^{(0)} = f'}</InlineMath> and
        </p>
        <MathBlock>{'f^{(n+1)} = \\left( f^{(n)} \\right)\''}</MathBlock>
        <p>
          In Leibniz notation:
        </p>
        <MathBlock>{'\\frac{d^n f}{dx^n} \\quad \\text{or} \\quad \\frac{d^n y}{dx^n} \\text{ if } y = f(x)'}</MathBlock>
      </Definition>

      <Example title="Computing Higher Derivatives">
        <p className="mb-3">
          <strong>(a)</strong> Let <InlineMath>{'f(x) = x^n'}</InlineMath> for a positive integer <InlineMath>{'n'}</InlineMath>. Then:
        </p>
        <MathBlock>{'f\'(x) = nx^{n-1}'}</MathBlock>
        <MathBlock>{'f\'\'(x) = n(n-1)x^{n-2}'}</MathBlock>
        <MathBlock>{'f^{(k)}(x) = n(n-1)\\cdots(n-k+1)x^{n-k} = \\frac{n!}{(n-k)!}x^{n-k}'}</MathBlock>
        <p className="mb-3">
          For <InlineMath>{'k = n'}</InlineMath>: <InlineMath>{'f^{(n)}(x) = n!'}</InlineMath>
        </p>
        <p className="mb-3">
          For <InlineMath>{'k > n'}</InlineMath>: <InlineMath>{'f^{(k)}(x) = 0'}</InlineMath>
        </p>
        <p className="mb-3">
          <strong>(b)</strong> Let <InlineMath>{'f(x) = e^x'}</InlineMath>. Then <InlineMath>{'f^{(n)}(x) = e^x'}</InlineMath> for all <InlineMath>{'n \\geq 0'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>(c)</strong> Let <InlineMath>{'f(x) = \\sin x'}</InlineMath>. Then:
        </p>
        <MathBlock>{'f\'(x) = \\cos x, \\quad f\'\'(x) = -\\sin x, \\quad f^{(3)}(x) = -\\cos x, \\quad f^{(4)}(x) = \\sin x'}</MathBlock>
        <p>
          The pattern repeats with period 4: <InlineMath>{'f^{(n)}(x) = \\sin(x + n\\pi/2)'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="Alternative Notations">
        <p className="mb-3">
          Several notations are commonly used for higher derivatives:
        </p>
        <ul className="list-disc list-inside">
          <li><InlineMath>{'f\'\', f\'\'\', f^{(4)}, \\ldots, f^{(n)}'}</InlineMath> (prime notation, parentheses for <InlineMath>{'n \\geq 4'}</InlineMath>)</li>
          <li><InlineMath>{'\\frac{d^2f}{dx^2}, \\frac{d^3f}{dx^3}, \\ldots, \\frac{d^nf}{dx^n}'}</InlineMath> (Leibniz notation)</li>
          <li><InlineMath>{'D^2f, D^3f, \\ldots, D^nf'}</InlineMath> (operator notation)</li>
          <li><InlineMath>{'\\ddot{f}, \\dddot{f}'}</InlineMath> (Newton's notation for time derivatives)</li>
        </ul>
      </Callout>

      <Theorem title="Leibniz Rule for Products">
        <p className="mb-3">
          If <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> have <InlineMath>{'n'}</InlineMath> derivatives, then
          the <InlineMath>{'n'}</InlineMath>-th derivative of their product is given by:
        </p>
        <MathBlock>{'(fg)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}'}</MathBlock>
        <p>
          where <InlineMath>{'\\binom{n}{k} = \\frac{n!}{k!(n-k)!}'}</InlineMath> is the binomial coefficient.
        </p>
      </Theorem>

      <Example title="Leibniz Rule Application">
        <p className="mb-3">
          Find the second derivative of <InlineMath>{'h(x) = x^2 e^x'}</InlineMath>.
        </p>
        <p className="mb-3">
          Let <InlineMath>{'f(x) = x^2'}</InlineMath> and <InlineMath>{'g(x) = e^x'}</InlineMath>. Then:
        </p>
        <MathBlock>{'f\' = 2x, \\quad f\'\' = 2, \\quad g\' = g\'\' = e^x'}</MathBlock>
        <p className="mb-3">
          By Leibniz's rule:
        </p>
        <MathBlock>{'h\'\' = \\binom{2}{0}f g\'\' + \\binom{2}{1}f\' g\' + \\binom{2}{2}f\'\' g'}</MathBlock>
        <MathBlock>{'= x^2 e^x + 2(2x)e^x + 2e^x = (x^2 + 4x + 2)e^x'}</MathBlock>
      </Example>

      <Definition title="Smooth Functions">
        <p className="mb-3">
          A function is said to be <em>smooth</em> or <InlineMath>{'C^\\infty'}</InlineMath> if it has
          derivatives of all orders. Examples include:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Polynomials</li>
          <li>Exponential function <InlineMath>{'e^x'}</InlineMath></li>
          <li>Trigonometric functions <InlineMath>{'\\sin x, \\cos x'}</InlineMath></li>
          <li>Power functions <InlineMath>{'x^\\alpha'}</InlineMath> for <InlineMath>{'x > 0'}</InlineMath></li>
        </ul>
      </Definition>

      <Callout type="warning" title="Existence of Higher Derivatives">
        <p className="mb-3">
          The existence of <InlineMath>{'f^{(n)}'}</InlineMath> requires that <InlineMath>{'f^{(n-1)}'}</InlineMath> exists
          and is differentiable. Consider:
        </p>
        <MathBlock>{'f(x) = \\begin{cases} x^3 & \\text{if } x \\geq 0 \\\\ -x^3 & \\text{if } x < 0 \\end{cases}'}</MathBlock>
        <p className="mb-3">
          Then <InlineMath>{'f\'(x) = 3x^2'}</InlineMath> for all <InlineMath>{'x'}</InlineMath>,
          and <InlineMath>{'f\'\'(x) = 6|x|'}</InlineMath> exists but is not differentiable at <InlineMath>{'x = 0'}</InlineMath>.
        </p>
        <p>
          So <InlineMath>{'f'}</InlineMath> is twice differentiable everywhere, but <InlineMath>{'f^{(3)}(0)'}</InlineMath> does not exist.
        </p>
      </Callout>

      <Theorem title="Symmetry of Mixed Partials (Preview)">
        <p className="mb-3">
          For functions of several variables, if <InlineMath>{'f'}</InlineMath> has continuous
          second partial derivatives, then the mixed partials are equal:
        </p>
        <MathBlock>{'\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}'}</MathBlock>
        <p>
          This is known as Schwarz's theorem or Clairaut's theorem, and will be treated
          rigorously in the chapter on multivariable calculus.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The <InlineMath>{'n'}</InlineMath>-th derivative <InlineMath>{'f^{(n)}'}</InlineMath> is defined recursively as <InlineMath>{'(f^{(n-1)})\''}</InlineMath></li>
        <li>For <InlineMath>{'f(x) = x^n'}</InlineMath>: <InlineMath>{'f^{(k)}(x) = \\frac{n!}{(n-k)!}x^{n-k}'}</InlineMath> and <InlineMath>{'f^{(n)}(x) = n!'}</InlineMath></li>
        <li>Leibniz rule: <InlineMath>{'(fg)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}'}</InlineMath></li>
        <li>Smooth (<InlineMath>{'C^\\infty'}</InlineMath>) functions have derivatives of all orders</li>
        <li>The existence of <InlineMath>{'f^{(n)}'}</InlineMath> requires <InlineMath>{'f^{(n-1)}'}</InlineMath> to be differentiable</li>
        <li>Higher derivatives are essential for Taylor series and approximation theory</li>
      </ul>
    </LessonLayout>
  );
}
