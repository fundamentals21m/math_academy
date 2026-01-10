import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2 className="text-2xl font-semibold mb-4">The Derivative of a Real Function</h2>

      <p className="mb-4">
        We now begin our study of differentiation, one of the two fundamental operations of calculus.
        The derivative measures the instantaneous rate of change of a function, and its rigorous
        definition requires the machinery of limits that we developed in earlier chapters.
      </p>

      <Definition title="5.1 - Derivative">
        <p className="mb-3">
          Let <InlineMath>{'f'}</InlineMath> be defined (and real-valued) on <InlineMath>{'[a, b]'}</InlineMath>.
          For any <InlineMath>{'x \\in [a, b]'}</InlineMath> form the quotient
        </p>
        <MathBlock>{'\\phi(t) = \\frac{f(t) - f(x)}{t - x} \\quad (a < t < b, \\, t \\neq x)'}</MathBlock>
        <p className="mb-3">
          and define
        </p>
        <MathBlock>{'f\'(x) = \\lim_{t \\to x} \\phi(t)'}</MathBlock>
        <p className="mb-3">
          provided this limit exists in accordance with Definition 4.1.
        </p>
        <p className="mb-3">
          We thus associate with the function <InlineMath>{'f'}</InlineMath> a
          function <InlineMath>{'f\''}</InlineMath> whose domain is the set of points <InlineMath>{'x'}</InlineMath> at
          which the limit exists; <InlineMath>{'f\''}</InlineMath> is called
          the <em>derivative</em> of <InlineMath>{'f'}</InlineMath>.
        </p>
        <p>
          If <InlineMath>{'f\''}</InlineMath> is defined at a point <InlineMath>{'x'}</InlineMath>,
          we say that <InlineMath>{'f'}</InlineMath> is <em>differentiable</em> at <InlineMath>{'x'}</InlineMath>.
          If <InlineMath>{'f\''}</InlineMath> is defined at every point of a set <InlineMath>{'E \\subset [a, b]'}</InlineMath>,
          we say that <InlineMath>{'f'}</InlineMath> is differentiable on <InlineMath>{'E'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Alternative Notation">
        <p className="mb-3">
          It is possible to write the definition in a different (but equivalent) form. Putting <InlineMath>{'h = t - x'}</InlineMath>,
          we get
        </p>
        <MathBlock>{'f\'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}'}</MathBlock>
        <p>
          This formulation is often more convenient in computations.
        </p>
      </Callout>

      <Theorem
        title="5.2 - Differentiability Implies Continuity"
        proof={
          <>
            <p className="mb-3">
              As <InlineMath>{'t \\to x'}</InlineMath>, we have, by Theorem 4.4,
            </p>
            <MathBlock>{'f(t) - f(x) = \\frac{f(t) - f(x)}{t - x} \\cdot (t - x) \\to f\'(x) \\cdot 0 = 0'}</MathBlock>
          </>
        }
      >
        <p>
          Let <InlineMath>{'f'}</InlineMath> be defined on <InlineMath>{'[a, b]'}</InlineMath>.
          If <InlineMath>{'f'}</InlineMath> is differentiable at a point <InlineMath>{'x \\in [a, b]'}</InlineMath>,
          then <InlineMath>{'f'}</InlineMath> is continuous at <InlineMath>{'x'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning" title="Converse is False">
        <p>
          The converse of Theorem 5.2 is not true. A function may be continuous at a point
          without being differentiable there. A classical example is <InlineMath>{'f(x) = |x|'}</InlineMath>,
          which is continuous at <InlineMath>{'x = 0'}</InlineMath> but not differentiable there,
          since the left and right limits of the difference quotient are <InlineMath>{'-1'}</InlineMath> and <InlineMath>{'+1'}</InlineMath>,
          respectively.
        </p>
      </Callout>

      <Theorem
        title="5.3 - Differentiation Rules"
        proof={
          <>
            <p className="mb-3">
              <strong>(a)</strong> This follows from Theorem 4.4 applied to the quotient <InlineMath>{'[f(t) + g(t) - f(x) - g(x)]/(t-x)'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>(b)</strong> Let <InlineMath>{'h = fg'}</InlineMath>. Then
            </p>
            <MathBlock>{'\\frac{h(t) - h(x)}{t - x} = f(t) \\frac{g(t) - g(x)}{t - x} + g(x) \\frac{f(t) - f(x)}{t - x}'}</MathBlock>
            <p className="mb-3">
              As <InlineMath>{'t \\to x'}</InlineMath>, <InlineMath>{'f(t) \\to f(x)'}</InlineMath> by Theorem 5.2.
              The other factors tend to <InlineMath>{'g\'(x)'}</InlineMath> and <InlineMath>{'f\'(x)'}</InlineMath>.
              Hence <InlineMath>{'h\'(x) = f(x)g\'(x) + g(x)f\'(x)'}</InlineMath>.
            </p>
            <p>
              <strong>(c)</strong> Note that <InlineMath>{'g(x) \\neq 0'}</InlineMath>, and by continuity (Theorem 5.2)
              there is a neighborhood of <InlineMath>{'x'}</InlineMath> in which <InlineMath>{'g \\neq 0'}</InlineMath>.
              Apply (b) to <InlineMath>{'f = (f/g) \\cdot g'}</InlineMath> and solve for <InlineMath>{'(f/g)\''}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> are defined
          on <InlineMath>{'[a, b]'}</InlineMath> and are differentiable at a
          point <InlineMath>{'x \\in [a, b]'}</InlineMath>. Then <InlineMath>{'f + g'}</InlineMath>, <InlineMath>{'fg'}</InlineMath>,
          and <InlineMath>{'f/g'}</InlineMath> are differentiable at <InlineMath>{'x'}</InlineMath>, and
        </p>
        <p className="mb-2">
          <strong>(a)</strong> <InlineMath>{'(f + g)\'(x) = f\'(x) + g\'(x)'}</InlineMath>;
        </p>
        <p className="mb-2">
          <strong>(b)</strong> <InlineMath>{'(fg)\'(x) = f\'(x)g(x) + f(x)g\'(x)'}</InlineMath>;
        </p>
        <p>
          <strong>(c)</strong> <InlineMath>{'\\left(\\frac{f}{g}\\right)\'(x) = \\frac{g(x)f\'(x) - g\'(x)f(x)}{g(x)^2}'}</InlineMath>
          if <InlineMath>{'g(x) \\neq 0'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Computing Derivatives">
        <p className="mb-3">
          <strong>(a)</strong> If <InlineMath>{'f(x) = c'}</InlineMath> (constant), then <InlineMath>{'f\'(x) = 0'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>(b)</strong> If <InlineMath>{'f(x) = x'}</InlineMath>, then
        </p>
        <MathBlock>{'f\'(x) = \\lim_{h \\to 0} \\frac{(x + h) - x}{h} = \\lim_{h \\to 0} 1 = 1'}</MathBlock>
        <p className="mb-3">
          <strong>(c)</strong> If <InlineMath>{'f(x) = x^n'}</InlineMath> for positive integer <InlineMath>{'n'}</InlineMath>,
          then by the product rule and induction, <InlineMath>{'f\'(x) = nx^{n-1}'}</InlineMath>.
        </p>
        <p>
          <strong>(d)</strong> If <InlineMath>{'f(x) = 1/x'}</InlineMath> for <InlineMath>{'x \\neq 0'}</InlineMath>, then
          by the quotient rule, <InlineMath>{'f\'(x) = -1/x^2'}</InlineMath>.
        </p>
      </Example>

      <Theorem
        title="5.5 - Chain Rule"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'y = f(x)'}</InlineMath>. By the definition of the derivative, we can write
            </p>
            <MathBlock>{'f(t) - f(x) = (t - x)[f\'(x) + u(t)]'}</MathBlock>
            <p className="mb-3">
              where <InlineMath>{'t \\in [a, b]'}</InlineMath> and <InlineMath>{'u(t) \\to 0'}</InlineMath> as <InlineMath>{'t \\to x'}</InlineMath>.
              Similarly,
            </p>
            <MathBlock>{'g(s) - g(y) = (s - y)[g\'(y) + v(s)]'}</MathBlock>
            <p className="mb-3">
              where <InlineMath>{'v(s) \\to 0'}</InlineMath> as <InlineMath>{'s \\to y'}</InlineMath>.
              Hence, if <InlineMath>{'s = f(t)'}</InlineMath>,
            </p>
            <MathBlock>{'h(t) - h(x) = g(f(t)) - g(f(x)) = [f(t) - f(x)][g\'(y) + v(s)]'}</MathBlock>
            <p className="mb-3">
              Substituting the first equation:
            </p>
            <MathBlock>{'h(t) - h(x) = (t - x)[f\'(x) + u(t)][g\'(y) + v(s)]'}</MathBlock>
            <p>
              As <InlineMath>{'t \\to x'}</InlineMath>, <InlineMath>{'f(t) \\to f(x) = y'}</InlineMath> (by continuity),
              so <InlineMath>{'v(s) \\to 0'}</InlineMath> and <InlineMath>{'u(t) \\to 0'}</InlineMath>.
              Hence <InlineMath>{'h\'(x) = f\'(x) g\'(y) = f\'(x) g\'(f(x))'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'f'}</InlineMath> is defined on <InlineMath>{'[a, b]'}</InlineMath>, <InlineMath>{'f\'(x)'}</InlineMath> exists
          at some point <InlineMath>{'x \\in [a, b]'}</InlineMath>, <InlineMath>{'g'}</InlineMath> is defined on an interval <InlineMath>{'I'}</InlineMath> which
          contains the range of <InlineMath>{'f'}</InlineMath>, and <InlineMath>{'g'}</InlineMath> is differentiable
          at the point <InlineMath>{'f(x)'}</InlineMath>. If
        </p>
        <MathBlock>{'h(t) = g(f(t)) \\quad (a \\leq t \\leq b)'}</MathBlock>
        <p>
          then <InlineMath>{'h'}</InlineMath> is differentiable at <InlineMath>{'x'}</InlineMath>, and
        </p>
        <MathBlock>{'h\'(x) = g\'(f(x)) \\cdot f\'(x)'}</MathBlock>
      </Theorem>

      <Callout type="info" title="Leibniz Notation">
        <p>
          In Leibniz notation, the chain rule takes the memorable form:
          if <InlineMath>{'y = f(x)'}</InlineMath> and <InlineMath>{'z = g(y)'}</InlineMath>, then
        </p>
        <MathBlock>{'\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The derivative <InlineMath>{'f\'(x)'}</InlineMath> is defined as <InlineMath>{'\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}'}</InlineMath></li>
        <li>Differentiability at a point implies continuity at that point</li>
        <li>The converse is false: continuity does not imply differentiability</li>
        <li>Derivatives satisfy the sum rule: <InlineMath>{'(f+g)\' = f\' + g\''}</InlineMath></li>
        <li>The product rule: <InlineMath>{'(fg)\' = f\'g + fg\''}</InlineMath></li>
        <li>The quotient rule: <InlineMath>{'(f/g)\' = (gf\' - fg\')/g^2'}</InlineMath></li>
        <li>The chain rule: <InlineMath>{'(g \\circ f)\'(x) = g\'(f(x)) \\cdot f\'(x)'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
