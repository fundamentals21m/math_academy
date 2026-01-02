import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <p>
        The chain rule tells us how to differentiate a composition of functions. When we
        reverse this process, we obtain a powerful technique for integration called the
        <strong> method of substitution</strong> (or <strong>u-substitution</strong>).
      </p>

      <h2>The Chain Rule in Reverse</h2>

      <p>
        Recall the chain rule: if <InlineMath>{`Q(x) = P[g(x)]`}</InlineMath>, then
      </p>
      <MathBlock>{`Q'(x) = P'[g(x)] \\cdot g'(x).`}</MathBlock>

      <p>
        If we write <InlineMath>{`P'(x) = f(x)`}</InlineMath>, so that <InlineMath>{`P`}</InlineMath> is
        a primitive of <InlineMath>{`f`}</InlineMath>, then this becomes:
      </p>
      <MathBlock>{`Q'(x) = f[g(x)] \\cdot g'(x).`}</MathBlock>

      <Callout type="info" title="The Substitution Principle">
        <p>
          If we have the integration formula:
        </p>
        <MathBlock>{`\\int f(x) \\, dx = P(x) + C,`}</MathBlock>
        <p>
          then we also have the more general formula:
        </p>
        <MathBlock>{`\\int f[g(x)] \\cdot g'(x) \\, dx = P[g(x)] + C.`}</MathBlock>
        <p>
          In other words, if we can recognize an integrand as having the form
          <InlineMath>{`f[g(x)] \\cdot g'(x)`}</InlineMath>, we can integrate it by finding a
          primitive of <InlineMath>{`f`}</InlineMath> and composing with <InlineMath>{`g`}</InlineMath>.
        </p>
      </Callout>

      <h2>The u-Substitution Method</h2>

      <Callout type="info" title="The Mechanical Process">
        <p>
          If we replace <InlineMath>{`x`}</InlineMath> by <InlineMath>{`u`}</InlineMath> in the formula
          <InlineMath>{`\\int f(x) \\, dx = P(x) + C`}</InlineMath>, we get:
        </p>
        <MathBlock>{`\\int f(u) \\, du = P(u) + C.`}</MathBlock>
        <p>
          Now think of <InlineMath>{`u`}</InlineMath> as a function of <InlineMath>{`x`}</InlineMath>,
          say <InlineMath>{`u = g(x)`}</InlineMath>. Replace <InlineMath>{`du`}</InlineMath> by
          <InlineMath>{`g'(x) \\, dx`}</InlineMath>, and the formula becomes:
        </p>
        <MathBlock>{`\\int f[g(x)] \\cdot g'(x) \\, dx = P[g(x)] + C.`}</MathBlock>
        <p>
          This is exactly the substitution principle above!
        </p>
      </Callout>

      <Callout type="info" title="The Method in Practice">
        <p>
          To integrate <InlineMath>{`\\int f[g(x)] \\cdot g'(x) \\, dx`}</InlineMath>:
        </p>
        <ol>
          <li>Identify a suitable substitution <InlineMath>{`u = g(x)`}</InlineMath></li>
          <li>Compute <InlineMath>{`du = g'(x) \\, dx`}</InlineMath></li>
          <li>Rewrite the integral in terms of <InlineMath>{`u`}</InlineMath></li>
          <li>Integrate with respect to <InlineMath>{`u`}</InlineMath></li>
          <li>Substitute back <InlineMath>{`u = g(x)`}</InlineMath> to get the final answer</li>
        </ol>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Basic Substitution">
        <p>
          Integrate <InlineMath>{`\\int x^3 \\cos(x^4) \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          The expression <InlineMath>{`\\cos(x^4)`}</InlineMath> suggests we try
          <InlineMath>{`u = x^4`}</InlineMath>. Then:
        </p>
        <MathBlock>{`du = 4x^3 \\, dx \\quad \\Rightarrow \\quad x^3 \\, dx = \\frac{1}{4} du.`}</MathBlock>
        <p>Substituting:</p>
        <MathBlock>{`\\int x^3 \\cos(x^4) \\, dx = \\int \\cos u \\cdot \\frac{1}{4} \\, du = \\frac{1}{4} \\int \\cos u \\, du = \\frac{1}{4} \\sin u + C.`}</MathBlock>
        <p>Substituting back <InlineMath>{`u = x^4`}</InlineMath>:</p>
        <MathBlock>{`\\int x^3 \\cos(x^4) \\, dx = \\frac{1}{4} \\sin(x^4) + C.`}</MathBlock>
        <p>
          <em>Verification:</em> Differentiating <InlineMath>{`\\frac{1}{4}\\sin(x^4)`}</InlineMath>
          using the chain rule gives <InlineMath>{`\\frac{1}{4} \\cos(x^4) \\cdot 4x^3 = x^3 \\cos(x^4)`}</InlineMath>. ✓
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Trigonometric Substitution">
        <p>
          Integrate <InlineMath>{`\\int \\cos^2 x \\sin x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = \\cos x`}</InlineMath>. Then <InlineMath>{`du = -\\sin x \\, dx`}</InlineMath>,
          so <InlineMath>{`\\sin x \\, dx = -du`}</InlineMath>.
        </p>
        <MathBlock>{`\\int \\cos^2 x \\sin x \\, dx = \\int u^2 \\cdot (-du) = -\\int u^2 \\, du = -\\frac{u^3}{3} + C = -\\frac{\\cos^3 x}{3} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Square Root Substitution">
        <p>
          Integrate <InlineMath>{`\\int \\frac{\\sin \\sqrt{x}}{\\sqrt{x}} \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = \\sqrt{x} = x^{1/2}`}</InlineMath>. Then:
        </p>
        <MathBlock>{`du = \\frac{1}{2} x^{-1/2} \\, dx = \\frac{1}{2\\sqrt{x}} \\, dx \\quad \\Rightarrow \\quad \\frac{dx}{\\sqrt{x}} = 2 \\, du.`}</MathBlock>
        <p>Substituting:</p>
        <MathBlock>{`\\int \\frac{\\sin \\sqrt{x}}{\\sqrt{x}} \\, dx = \\int \\sin u \\cdot 2 \\, du = 2 \\int \\sin u \\, du = -2\\cos u + C = -2\\cos\\sqrt{x} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Algebraic Substitution">
        <p>
          Integrate <InlineMath>{`\\int \\frac{x \\, dx}{\\sqrt{1 + x^2}}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = 1 + x^2`}</InlineMath>. Then <InlineMath>{`du = 2x \\, dx`}</InlineMath>,
          so <InlineMath>{`x \\, dx = \\frac{1}{2} du`}</InlineMath>.
        </p>
        <MathBlock>{`\\int \\frac{x \\, dx}{\\sqrt{1 + x^2}} = \\int \\frac{1}{\\sqrt{u}} \\cdot \\frac{1}{2} \\, du = \\frac{1}{2} \\int u^{-1/2} \\, du = \\frac{1}{2} \\cdot 2u^{1/2} + C = \\sqrt{u} + C.`}</MathBlock>
        <p>Substituting back:</p>
        <MathBlock>{`\\int \\frac{x \\, dx}{\\sqrt{1 + x^2}} = \\sqrt{1 + x^2} + C.`}</MathBlock>
      </Callout>

      <h2>Substitution in Definite Integrals</h2>

      <Callout type="theorem" title="Theorem 5.4 (Substitution Theorem for Integrals)">
        <p>
          Assume <InlineMath>{`g`}</InlineMath> has a continuous derivative <InlineMath>{`g'`}</InlineMath>
          on an open interval <InlineMath>{`I`}</InlineMath>. Let <InlineMath>{`J`}</InlineMath> be the
          set of values taken by <InlineMath>{`g`}</InlineMath> on <InlineMath>{`I`}</InlineMath> and
          assume that <InlineMath>{`f`}</InlineMath> is continuous on <InlineMath>{`J`}</InlineMath>.
          Then for each <InlineMath>{`x`}</InlineMath> and <InlineMath>{`c`}</InlineMath> in
          <InlineMath>{`I`}</InlineMath>, we have:
        </p>
        <MathBlock>{`\\int_c^x f[g(t)] \\cdot g'(t) \\, dt = \\int_{g(c)}^{g(x)} f(u) \\, du.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Changing Limits of Integration">
        <p>
          When using substitution in a definite integral, you have two options:
        </p>
        <ol>
          <li>
            <strong>Method 1:</strong> Find the indefinite integral first, substitute back,
            then evaluate at the limits.
          </li>
          <li>
            <strong>Method 2:</strong> Change the limits of integration when you substitute.
            If <InlineMath>{`u = g(x)`}</InlineMath>, then when <InlineMath>{`x = a`}</InlineMath>,
            <InlineMath>{`u = g(a)`}</InlineMath>, and when <InlineMath>{`x = b`}</InlineMath>,
            <InlineMath>{`u = g(b)`}</InlineMath>.
          </li>
        </ol>
        <p>
          Method 2 is often more efficient because you never need to substitute back.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Definite Integral with Changed Limits">
        <p>
          Evaluate <InlineMath>{`\\int_2^3 \\frac{(x+1) \\, dx}{\\sqrt{x^2 + 2x + 3}}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = x^2 + 2x + 3`}</InlineMath>. Then <InlineMath>{`du = (2x + 2) \\, dx = 2(x + 1) \\, dx`}</InlineMath>,
          so <InlineMath>{`(x + 1) \\, dx = \\frac{1}{2} du`}</InlineMath>.
        </p>
        <p>Change the limits:</p>
        <ul>
          <li>When <InlineMath>{`x = 2`}</InlineMath>: <InlineMath>{`u = 4 + 4 + 3 = 11`}</InlineMath></li>
          <li>When <InlineMath>{`x = 3`}</InlineMath>: <InlineMath>{`u = 9 + 6 + 3 = 18`}</InlineMath></li>
        </ul>
        <MathBlock>{`\\int_2^3 \\frac{(x+1) \\, dx}{\\sqrt{x^2 + 2x + 3}} = \\int_{11}^{18} \\frac{1}{\\sqrt{u}} \\cdot \\frac{1}{2} \\, du = \\frac{1}{2} \\int_{11}^{18} u^{-1/2} \\, du`}</MathBlock>
        <MathBlock>{`= \\frac{1}{2} \\cdot 2u^{1/2} \\Big|_{11}^{18} = \\sqrt{u} \\Big|_{11}^{18} = \\sqrt{18} - \\sqrt{11}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Trigonometric Definite Integral">
        <p>
          Evaluate <InlineMath>{`\\int_0^{\\pi/2} \\cos^2 x \\sin x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = \\cos x`}</InlineMath>. Then <InlineMath>{`du = -\\sin x \\, dx`}</InlineMath>.
        </p>
        <p>Change the limits:</p>
        <ul>
          <li>When <InlineMath>{`x = 0`}</InlineMath>: <InlineMath>{`u = \\cos 0 = 1`}</InlineMath></li>
          <li>When <InlineMath>{`x = \\pi/2`}</InlineMath>: <InlineMath>{`u = \\cos(\\pi/2) = 0`}</InlineMath></li>
        </ul>
        <MathBlock>{`\\int_0^{\\pi/2} \\cos^2 x \\sin x \\, dx = \\int_1^0 u^2 \\cdot (-du) = \\int_0^1 u^2 \\, du = \\frac{u^3}{3} \\Big|_0^1 = \\frac{1}{3}.`}</MathBlock>
      </Callout>

      <h2>Tips for Choosing Substitutions</h2>

      <Callout type="info" title="Guidelines for Substitution">
        <p>
          Success in using substitution depends on recognizing which part of the integrand
          should be replaced by <InlineMath>{`u`}</InlineMath>. Here are some guidelines:
        </p>
        <ul>
          <li>
            <strong>Look for compositions:</strong> If you see <InlineMath>{`f(g(x))`}</InlineMath>,
            try <InlineMath>{`u = g(x)`}</InlineMath>.
          </li>
          <li>
            <strong>Check for the derivative:</strong> The remaining factor should be
            (a constant multiple of) <InlineMath>{`g'(x)`}</InlineMath>.
          </li>
          <li>
            <strong>Powers suggest:</strong> For <InlineMath>{`[g(x)]^n \\cdot g'(x)`}</InlineMath>,
            use <InlineMath>{`u = g(x)`}</InlineMath>.
          </li>
          <li>
            <strong>Inside functions:</strong> Substitute for what's inside the "outermost"
            function (inside sine, cosine, square root, etc.).
          </li>
          <li>
            <strong>Algebraic expressions:</strong> For expressions like
            <InlineMath>{`\\sqrt{ax + b}`}</InlineMath> or <InlineMath>{`(ax + b)^n`}</InlineMath>,
            try <InlineMath>{`u = ax + b`}</InlineMath>.
          </li>
        </ul>
      </Callout>

      <h2>Common Substitution Patterns</h2>

      <Callout type="info" title="Standard Forms">
        <p>Here are some common patterns:</p>
        <MathBlock>{`\\int f(ax + b) \\, dx = \\frac{1}{a} F(ax + b) + C \\quad \\text{where } F' = f`}</MathBlock>
        <MathBlock>{`\\int [g(x)]^n \\cdot g'(x) \\, dx = \\frac{[g(x)]^{n+1}}{n+1} + C \\quad (n \\neq -1)`}</MathBlock>
        <MathBlock>{`\\int \\frac{g'(x)}{g(x)} \\, dx = \\ln|g(x)| + C \\quad \\text{(to be proved later)}`}</MathBlock>
        <MathBlock>{`\\int \\sin[g(x)] \\cdot g'(x) \\, dx = -\\cos[g(x)] + C`}</MathBlock>
        <MathBlock>{`\\int \\cos[g(x)] \\cdot g'(x) \\, dx = \\sin[g(x)] + C`}</MathBlock>
      </Callout>

      <h2>Additional Examples</h2>

      <Callout type="example" title="Example 7: Linear Substitution">
        <p>
          Integrate <InlineMath>{`\\int \\sqrt{2x + 1} \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = 2x + 1`}</InlineMath>. Then <InlineMath>{`du = 2 \\, dx`}</InlineMath>,
          so <InlineMath>{`dx = \\frac{1}{2} du`}</InlineMath>.
        </p>
        <MathBlock>{`\\int \\sqrt{2x + 1} \\, dx = \\int \\sqrt{u} \\cdot \\frac{1}{2} \\, du = \\frac{1}{2} \\int u^{1/2} \\, du = \\frac{1}{2} \\cdot \\frac{2}{3} u^{3/2} + C = \\frac{1}{3}(2x + 1)^{3/2} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 8: Quotient Form">
        <p>
          Integrate <InlineMath>{`\\int \\frac{\\sin x \\, dx}{(3 + \\cos x)^2}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = 3 + \\cos x`}</InlineMath>. Then <InlineMath>{`du = -\\sin x \\, dx`}</InlineMath>,
          so <InlineMath>{`\\sin x \\, dx = -du`}</InlineMath>.
        </p>
        <MathBlock>{`\\int \\frac{\\sin x \\, dx}{(3 + \\cos x)^2} = \\int \\frac{-du}{u^2} = -\\int u^{-2} \\, du = -\\frac{u^{-1}}{-1} + C = \\frac{1}{u} + C = \\frac{1}{3 + \\cos x} + C.`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Substitution</strong> is the chain rule in reverse: if
          <InlineMath>{`\\int f(x) \\, dx = P(x) + C`}</InlineMath>, then
          <InlineMath>{`\\int f[g(x)] g'(x) \\, dx = P[g(x)] + C`}</InlineMath>.
        </li>
        <li>
          <strong>The method:</strong> Set <InlineMath>{`u = g(x)`}</InlineMath>,
          compute <InlineMath>{`du = g'(x) \\, dx`}</InlineMath>, rewrite the integral in
          terms of <InlineMath>{`u`}</InlineMath>, integrate, and substitute back.
        </li>
        <li>
          <strong>For definite integrals:</strong> Either substitute back and evaluate,
          or change the limits when you substitute (often more efficient).
        </li>
        <li>
          <strong>Key insight:</strong> Look for a composition and check if its derivative
          appears as a factor in the integrand.
        </li>
        <li>
          Success comes from practice and developing intuition for recognizing patterns.
        </li>
      </ul>
    </LessonLayout>
  );
}
