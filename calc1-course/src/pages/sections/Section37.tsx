import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        Recall the chain rule: if <MathInline>{`Q(x) = P[g(x)]`}</MathInline>, then
      </p>
      <MathBlock>{`Q'(x) = P'[g(x)] \\cdot g'(x).`}</MathBlock>

      <p>
        If we write <MathInline>{`P'(x) = f(x)`}</MathInline>, so that <MathInline>{`P`}</MathInline> is
        a primitive of <MathInline>{`f`}</MathInline>, then this becomes:
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
          <MathInline>{`f[g(x)] \\cdot g'(x)`}</MathInline>, we can integrate it by finding a
          primitive of <MathInline>{`f`}</MathInline> and composing with <MathInline>{`g`}</MathInline>.
        </p>
      </Callout>

      <h2>The u-Substitution Method</h2>

      <Callout type="info" title="The Mechanical Process">
        <p>
          If we replace <MathInline>{`x`}</MathInline> by <MathInline>{`u`}</MathInline> in the formula
          <MathInline>{`\\int f(x) \\, dx = P(x) + C`}</MathInline>, we get:
        </p>
        <MathBlock>{`\\int f(u) \\, du = P(u) + C.`}</MathBlock>
        <p>
          Now think of <MathInline>{`u`}</MathInline> as a function of <MathInline>{`x`}</MathInline>,
          say <MathInline>{`u = g(x)`}</MathInline>. Replace <MathInline>{`du`}</MathInline> by
          <MathInline>{`g'(x) \\, dx`}</MathInline>, and the formula becomes:
        </p>
        <MathBlock>{`\\int f[g(x)] \\cdot g'(x) \\, dx = P[g(x)] + C.`}</MathBlock>
        <p>
          This is exactly the substitution principle above!
        </p>
      </Callout>

      <Callout type="info" title="The Method in Practice">
        <p>
          To integrate <MathInline>{`\\int f[g(x)] \\cdot g'(x) \\, dx`}</MathInline>:
        </p>
        <ol>
          <li>Identify a suitable substitution <MathInline>{`u = g(x)`}</MathInline></li>
          <li>Compute <MathInline>{`du = g'(x) \\, dx`}</MathInline></li>
          <li>Rewrite the integral in terms of <MathInline>{`u`}</MathInline></li>
          <li>Integrate with respect to <MathInline>{`u`}</MathInline></li>
          <li>Substitute back <MathInline>{`u = g(x)`}</MathInline> to get the final answer</li>
        </ol>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Basic Substitution">
        <p>
          Integrate <MathInline>{`\\int x^3 \\cos(x^4) \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          The expression <MathInline>{`\\cos(x^4)`}</MathInline> suggests we try
          <MathInline>{`u = x^4`}</MathInline>. Then:
        </p>
        <MathBlock>{`du = 4x^3 \\, dx \\quad \\Rightarrow \\quad x^3 \\, dx = \\frac{1}{4} du.`}</MathBlock>
        <p>Substituting:</p>
        <MathBlock>{`\\int x^3 \\cos(x^4) \\, dx = \\int \\cos u \\cdot \\frac{1}{4} \\, du = \\frac{1}{4} \\int \\cos u \\, du = \\frac{1}{4} \\sin u + C.`}</MathBlock>
        <p>Substituting back <MathInline>{`u = x^4`}</MathInline>:</p>
        <MathBlock>{`\\int x^3 \\cos(x^4) \\, dx = \\frac{1}{4} \\sin(x^4) + C.`}</MathBlock>
        <p>
          <em>Verification:</em> Differentiating <MathInline>{`\\frac{1}{4}\\sin(x^4)`}</MathInline>
          using the chain rule gives <MathInline>{`\\frac{1}{4} \\cos(x^4) \\cdot 4x^3 = x^3 \\cos(x^4)`}</MathInline>. ✓
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Trigonometric Substitution">
        <p>
          Integrate <MathInline>{`\\int \\cos^2 x \\sin x \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = \\cos x`}</MathInline>. Then <MathInline>{`du = -\\sin x \\, dx`}</MathInline>,
          so <MathInline>{`\\sin x \\, dx = -du`}</MathInline>.
        </p>
        <MathBlock>{`\\int \\cos^2 x \\sin x \\, dx = \\int u^2 \\cdot (-du) = -\\int u^2 \\, du = -\\frac{u^3}{3} + C = -\\frac{\\cos^3 x}{3} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Square Root Substitution">
        <p>
          Integrate <MathInline>{`\\int \\frac{\\sin \\sqrt{x}}{\\sqrt{x}} \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = \\sqrt{x} = x^{1/2}`}</MathInline>. Then:
        </p>
        <MathBlock>{`du = \\frac{1}{2} x^{-1/2} \\, dx = \\frac{1}{2\\sqrt{x}} \\, dx \\quad \\Rightarrow \\quad \\frac{dx}{\\sqrt{x}} = 2 \\, du.`}</MathBlock>
        <p>Substituting:</p>
        <MathBlock>{`\\int \\frac{\\sin \\sqrt{x}}{\\sqrt{x}} \\, dx = \\int \\sin u \\cdot 2 \\, du = 2 \\int \\sin u \\, du = -2\\cos u + C = -2\\cos\\sqrt{x} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Algebraic Substitution">
        <p>
          Integrate <MathInline>{`\\int \\frac{x \\, dx}{\\sqrt{1 + x^2}}`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = 1 + x^2`}</MathInline>. Then <MathInline>{`du = 2x \\, dx`}</MathInline>,
          so <MathInline>{`x \\, dx = \\frac{1}{2} du`}</MathInline>.
        </p>
        <MathBlock>{`\\int \\frac{x \\, dx}{\\sqrt{1 + x^2}} = \\int \\frac{1}{\\sqrt{u}} \\cdot \\frac{1}{2} \\, du = \\frac{1}{2} \\int u^{-1/2} \\, du = \\frac{1}{2} \\cdot 2u^{1/2} + C = \\sqrt{u} + C.`}</MathBlock>
        <p>Substituting back:</p>
        <MathBlock>{`\\int \\frac{x \\, dx}{\\sqrt{1 + x^2}} = \\sqrt{1 + x^2} + C.`}</MathBlock>
      </Callout>

      <h2>Substitution in Definite Integrals</h2>

      <Callout type="theorem" title="Theorem 5.4 (Substitution Theorem for Integrals)">
        <p>
          Assume <MathInline>{`g`}</MathInline> has a continuous derivative <MathInline>{`g'`}</MathInline>
          on an open interval <MathInline>{`I`}</MathInline>. Let <MathInline>{`J`}</MathInline> be the
          set of values taken by <MathInline>{`g`}</MathInline> on <MathInline>{`I`}</MathInline> and
          assume that <MathInline>{`f`}</MathInline> is continuous on <MathInline>{`J`}</MathInline>.
          Then for each <MathInline>{`x`}</MathInline> and <MathInline>{`c`}</MathInline> in
          <MathInline>{`I`}</MathInline>, we have:
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
            If <MathInline>{`u = g(x)`}</MathInline>, then when <MathInline>{`x = a`}</MathInline>,
            <MathInline>{`u = g(a)`}</MathInline>, and when <MathInline>{`x = b`}</MathInline>,
            <MathInline>{`u = g(b)`}</MathInline>.
          </li>
        </ol>
        <p>
          Method 2 is often more efficient because you never need to substitute back.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Definite Integral with Changed Limits">
        <p>
          Evaluate <MathInline>{`\\int_2^3 \\frac{(x+1) \\, dx}{\\sqrt{x^2 + 2x + 3}}`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = x^2 + 2x + 3`}</MathInline>. Then <MathInline>{`du = (2x + 2) \\, dx = 2(x + 1) \\, dx`}</MathInline>,
          so <MathInline>{`(x + 1) \\, dx = \\frac{1}{2} du`}</MathInline>.
        </p>
        <p>Change the limits:</p>
        <ul>
          <li>When <MathInline>{`x = 2`}</MathInline>: <MathInline>{`u = 4 + 4 + 3 = 11`}</MathInline></li>
          <li>When <MathInline>{`x = 3`}</MathInline>: <MathInline>{`u = 9 + 6 + 3 = 18`}</MathInline></li>
        </ul>
        <MathBlock>{`\\int_2^3 \\frac{(x+1) \\, dx}{\\sqrt{x^2 + 2x + 3}} = \\int_{11}^{18} \\frac{1}{\\sqrt{u}} \\cdot \\frac{1}{2} \\, du = \\frac{1}{2} \\int_{11}^{18} u^{-1/2} \\, du`}</MathBlock>
        <MathBlock>{`= \\frac{1}{2} \\cdot 2u^{1/2} \\Big|_{11}^{18} = \\sqrt{u} \\Big|_{11}^{18} = \\sqrt{18} - \\sqrt{11}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Trigonometric Definite Integral">
        <p>
          Evaluate <MathInline>{`\\int_0^{\\pi/2} \\cos^2 x \\sin x \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = \\cos x`}</MathInline>. Then <MathInline>{`du = -\\sin x \\, dx`}</MathInline>.
        </p>
        <p>Change the limits:</p>
        <ul>
          <li>When <MathInline>{`x = 0`}</MathInline>: <MathInline>{`u = \\cos 0 = 1`}</MathInline></li>
          <li>When <MathInline>{`x = \\pi/2`}</MathInline>: <MathInline>{`u = \\cos(\\pi/2) = 0`}</MathInline></li>
        </ul>
        <MathBlock>{`\\int_0^{\\pi/2} \\cos^2 x \\sin x \\, dx = \\int_1^0 u^2 \\cdot (-du) = \\int_0^1 u^2 \\, du = \\frac{u^3}{3} \\Big|_0^1 = \\frac{1}{3}.`}</MathBlock>
      </Callout>

      <h2>Tips for Choosing Substitutions</h2>

      <Callout type="info" title="Guidelines for Substitution">
        <p>
          Success in using substitution depends on recognizing which part of the integrand
          should be replaced by <MathInline>{`u`}</MathInline>. Here are some guidelines:
        </p>
        <ul>
          <li>
            <strong>Look for compositions:</strong> If you see <MathInline>{`f(g(x))`}</MathInline>,
            try <MathInline>{`u = g(x)`}</MathInline>.
          </li>
          <li>
            <strong>Check for the derivative:</strong> The remaining factor should be
            (a constant multiple of) <MathInline>{`g'(x)`}</MathInline>.
          </li>
          <li>
            <strong>Powers suggest:</strong> For <MathInline>{`[g(x)]^n \\cdot g'(x)`}</MathInline>,
            use <MathInline>{`u = g(x)`}</MathInline>.
          </li>
          <li>
            <strong>Inside functions:</strong> Substitute for what's inside the "outermost"
            function (inside sine, cosine, square root, etc.).
          </li>
          <li>
            <strong>Algebraic expressions:</strong> For expressions like
            <MathInline>{`\\sqrt{ax + b}`}</MathInline> or <MathInline>{`(ax + b)^n`}</MathInline>,
            try <MathInline>{`u = ax + b`}</MathInline>.
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
          Integrate <MathInline>{`\\int \\sqrt{2x + 1} \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = 2x + 1`}</MathInline>. Then <MathInline>{`du = 2 \\, dx`}</MathInline>,
          so <MathInline>{`dx = \\frac{1}{2} du`}</MathInline>.
        </p>
        <MathBlock>{`\\int \\sqrt{2x + 1} \\, dx = \\int \\sqrt{u} \\cdot \\frac{1}{2} \\, du = \\frac{1}{2} \\int u^{1/2} \\, du = \\frac{1}{2} \\cdot \\frac{2}{3} u^{3/2} + C = \\frac{1}{3}(2x + 1)^{3/2} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 8: Quotient Form">
        <p>
          Integrate <MathInline>{`\\int \\frac{\\sin x \\, dx}{(3 + \\cos x)^2}`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = 3 + \\cos x`}</MathInline>. Then <MathInline>{`du = -\\sin x \\, dx`}</MathInline>,
          so <MathInline>{`\\sin x \\, dx = -du`}</MathInline>.
        </p>
        <MathBlock>{`\\int \\frac{\\sin x \\, dx}{(3 + \\cos x)^2} = \\int \\frac{-du}{u^2} = -\\int u^{-2} \\, du = -\\frac{u^{-1}}{-1} + C = \\frac{1}{u} + C = \\frac{1}{3 + \\cos x} + C.`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Substitution</strong> is the chain rule in reverse: if
          <MathInline>{`\\int f(x) \\, dx = P(x) + C`}</MathInline>, then
          <MathInline>{`\\int f[g(x)] g'(x) \\, dx = P[g(x)] + C`}</MathInline>.
        </li>
        <li>
          <strong>The method:</strong> Set <MathInline>{`u = g(x)`}</MathInline>,
          compute <MathInline>{`du = g'(x) \\, dx`}</MathInline>, rewrite the integral in
          terms of <MathInline>{`u`}</MathInline>, integrate, and substitute back.
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
