import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <p>
        The product rule tells us how to differentiate a product of two functions. When we
        reverse this process, we obtain another powerful technique for integration called
        <strong> integration by parts</strong>.
      </p>

      <h2>The Product Rule in Reverse</h2>

      <p>
        Recall the product rule: if <InlineMath>{`h(x) = f(x)g(x)`}</InlineMath>, then
      </p>
      <MathBlock>{`h'(x) = f(x)g'(x) + f'(x)g(x).`}</MathBlock>

      <p>
        Translating this into the language of primitives:
      </p>
      <MathBlock>{`\\int f(x)g'(x) \\, dx + \\int f'(x)g(x) \\, dx = f(x)g(x) + C.`}</MathBlock>

      <p>Rearranging gives us the formula for integration by parts:</p>

      <Callout type="theorem" title="Integration by Parts Formula">
        <MathBlock>{`\\int f(x)g'(x) \\, dx = f(x)g(x) - \\int f'(x)g(x) \\, dx + C`}</MathBlock>
        <p>
          This formula transfers the difficulty from integrating <InlineMath>{`f(x)g'(x)`}</InlineMath>
          to integrating <InlineMath>{`f'(x)g(x)`}</InlineMath>. If <InlineMath>{`f`}</InlineMath> and
          <InlineMath>{`g`}</InlineMath> are properly chosen, this second integral may be easier
          to evaluate.
        </p>
      </Callout>

      <h2>The u-v Notation</h2>

      <Callout type="info" title="Abbreviated Notation">
        <p>
          If we introduce the substitutions:
        </p>
        <MathBlock>{`u = f(x), \\quad v = g(x), \\quad du = f'(x) \\, dx, \\quad dv = g'(x) \\, dx,`}</MathBlock>
        <p>
          then the formula for integration by parts becomes:
        </p>
        <MathBlock>{`\\int u \\, dv = uv - \\int v \\, du + C.`}</MathBlock>
        <p>
          Many people find this abbreviated form easier to remember.
        </p>
      </Callout>

      <Callout type="info" title="For Definite Integrals">
        <p>
          For definite integrals, the formula becomes:
        </p>
        <MathBlock>{`\\int_a^b f(x)g'(x) \\, dx = f(b)g(b) - f(a)g(a) - \\int_a^b f'(x)g(x) \\, dx`}</MathBlock>
        <p>or equivalently:</p>
        <MathBlock>{`\\int_a^b u \\, dv = uv \\Big|_a^b - \\int_a^b v \\, du.`}</MathBlock>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: x cos x">
        <p>
          Integrate <InlineMath>{`\\int x \\cos x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Choose:</p>
        <MathBlock>{`u = x \\quad \\Rightarrow \\quad du = dx`}</MathBlock>
        <MathBlock>{`dv = \\cos x \\, dx \\quad \\Rightarrow \\quad v = \\sin x`}</MathBlock>
        <p>Applying the formula:</p>
        <MathBlock>{`\\int x \\cos x \\, dx = x \\sin x - \\int \\sin x \\, dx + C = x \\sin x + \\cos x + C.`}</MathBlock>
        <p>
          <em>Verification:</em> Differentiating <InlineMath>{`x \\sin x + \\cos x`}</InlineMath> gives
          <InlineMath>{`\\sin x + x \\cos x - \\sin x = x \\cos x`}</InlineMath>. ✓
        </p>
      </Callout>

      <Callout type="info" title="Why This Choice Works">
        <p>
          We chose <InlineMath>{`u = x`}</InlineMath> because differentiating <InlineMath>{`x`}</InlineMath>
          gives the simpler function <InlineMath>{`1`}</InlineMath>. We chose
          <InlineMath>{`dv = \\cos x \\, dx`}</InlineMath> because we can easily integrate it.
        </p>
        <p>
          Had we chosen <InlineMath>{`u = \\cos x`}</InlineMath> and <InlineMath>{`dv = x \\, dx`}</InlineMath>,
          we would have gotten:
        </p>
        <MathBlock>{`\\int x \\cos x \\, dx = \\frac{x^2}{2} \\cos x + \\frac{1}{2} \\int x^2 \\sin x \\, dx,`}</MathBlock>
        <p>
          which is more complicated than what we started with!
        </p>
      </Callout>

      <Callout type="example" title="Example 2: x sin x">
        <p>
          Integrate <InlineMath>{`\\int x \\sin x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Choose <InlineMath>{`u = x`}</InlineMath> and <InlineMath>{`dv = \\sin x \\, dx`}</InlineMath>:</p>
        <MathBlock>{`du = dx, \\quad v = -\\cos x`}</MathBlock>
        <MathBlock>{`\\int x \\sin x \\, dx = -x \\cos x - \\int (-\\cos x) \\, dx = -x \\cos x + \\sin x + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Repeated Integration by Parts">
        <p>
          Integrate <InlineMath>{`\\int x^2 \\cos x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Choose <InlineMath>{`u = x^2`}</InlineMath> and <InlineMath>{`dv = \\cos x \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`du = 2x \\, dx, \\quad v = \\sin x`}</MathBlock>
        <MathBlock>{`\\int x^2 \\cos x \\, dx = x^2 \\sin x - 2\\int x \\sin x \\, dx.`}</MathBlock>
        <p>
          The remaining integral <InlineMath>{`\\int x \\sin x \\, dx`}</InlineMath> requires another
          application of integration by parts (see Example 2):
        </p>
        <MathBlock>{`\\int x \\sin x \\, dx = -x \\cos x + \\sin x + C.`}</MathBlock>
        <p>Substituting back:</p>
        <MathBlock>{`\\int x^2 \\cos x \\, dx = x^2 \\sin x - 2(-x \\cos x + \\sin x) + C = x^2 \\sin x + 2x \\cos x - 2\\sin x + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: x² sin x">
        <p>
          Integrate <InlineMath>{`\\int x^2 \\sin x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Choose <InlineMath>{`u = x^2`}</InlineMath> and <InlineMath>{`dv = \\sin x \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`du = 2x \\, dx, \\quad v = -\\cos x`}</MathBlock>
        <MathBlock>{`\\int x^2 \\sin x \\, dx = -x^2 \\cos x + 2\\int x \\cos x \\, dx.`}</MathBlock>
        <p>Using Example 1:</p>
        <MathBlock>{`\\int x^2 \\sin x \\, dx = -x^2 \\cos x + 2(x \\sin x + \\cos x) + C = -x^2 \\cos x + 2x \\sin x + 2\\cos x + C.`}</MathBlock>
      </Callout>

      <h2>When the Method Fails</h2>

      <Callout type="info" title="A Cautionary Example">
        <p>
          Sometimes integration by parts leads back to the original integral without progress.
          Consider <InlineMath>{`\\int x^{-1} \\, dx`}</InlineMath> with <InlineMath>{`u = x`}</InlineMath>
          and <InlineMath>{`dv = x^{-2} \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`du = dx, \\quad v = -x^{-1}`}</MathBlock>
        <MathBlock>{`\\int x^{-1} \\, dx = x \\cdot (-x^{-1}) - \\int (-x^{-1}) \\, dx + C = -1 + \\int x^{-1} \\, dx + C.`}</MathBlock>
        <p>
          We're back where we started! This illustrates that integration by parts doesn't
          always lead to a simpler integral.
        </p>
        <p>
          <strong>Warning:</strong> If we ignore the constant <InlineMath>{`C`}</InlineMath>,
          this equation would falsely imply <InlineMath>{`0 = -1`}</InlineMath>!
        </p>
      </Callout>

      <h2>Reduction Formulas</h2>

      <p>
        Integration by parts is particularly useful for deriving <strong>reduction formulas</strong>
        that express an integral in terms of a simpler integral of the same type.
      </p>

      <Callout type="example" title="Reduction Formula for sin^n x">
        <p>
          Starting with <InlineMath>{`\\int \\sin^n x \\, dx`}</InlineMath>, let
          <InlineMath>{`u = \\sin^{n-1} x`}</InlineMath> and <InlineMath>{`dv = \\sin x \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`du = (n-1)\\sin^{n-2} x \\cos x \\, dx, \\quad v = -\\cos x`}</MathBlock>
        <p>Applying integration by parts:</p>
        <MathBlock>{`\\int \\sin^n x \\, dx = -\\sin^{n-1} x \\cos x + (n-1) \\int \\sin^{n-2} x \\cos^2 x \\, dx.`}</MathBlock>
        <p>
          Using <InlineMath>{`\\cos^2 x = 1 - \\sin^2 x`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\sin^n x \\, dx = -\\sin^{n-1} x \\cos x + (n-1) \\int \\sin^{n-2} x \\, dx - (n-1) \\int \\sin^n x \\, dx.`}</MathBlock>
        <p>Solving for <InlineMath>{`\\int \\sin^n x \\, dx`}</InlineMath>:</p>
        <MathBlock>{`\\int \\sin^n x \\, dx = -\\frac{\\sin^{n-1} x \\cos x}{n} + \\frac{n-1}{n} \\int \\sin^{n-2} x \\, dx.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Reduction Formula for cos^n x">
        <p>Similarly, one can derive:</p>
        <MathBlock>{`\\int \\cos^n x \\, dx = \\frac{\\cos^{n-1} x \\sin x}{n} + \\frac{n-1}{n} \\int \\cos^{n-2} x \\, dx.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Using the Reduction Formula">
        <p>
          Evaluate <InlineMath>{`\\int_0^{\\pi/2} \\sin^2 x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Using the reduction formula with <InlineMath>{`n = 2`}</InlineMath>:</p>
        <MathBlock>{`\\int \\sin^2 x \\, dx = -\\frac{\\sin x \\cos x}{2} + \\frac{1}{2} \\int 1 \\, dx = -\\frac{\\sin x \\cos x}{2} + \\frac{x}{2} + C.`}</MathBlock>
        <p>Using the identity <InlineMath>{`\\sin x \\cos x = \\frac{1}{2}\\sin 2x`}</InlineMath>:</p>
        <MathBlock>{`\\int \\sin^2 x \\, dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C.`}</MathBlock>
        <p>Evaluating from <InlineMath>{`0`}</InlineMath> to <InlineMath>{`\\pi/2`}</InlineMath>:</p>
        <MathBlock>{`\\int_0^{\\pi/2} \\sin^2 x \\, dx = \\left(\\frac{\\pi/2}{2} - \\frac{\\sin \\pi}{4}\\right) - \\left(0 - 0\\right) = \\frac{\\pi}{4}.`}</MathBlock>
      </Callout>

      <h2>Guidelines for Choosing u and dv</h2>

      <Callout type="info" title="The LIATE Rule">
        <p>
          A helpful mnemonic for choosing <InlineMath>{`u`}</InlineMath> is <strong>LIATE</strong>,
          which lists function types in order of preference for <InlineMath>{`u`}</InlineMath>:
        </p>
        <ol>
          <li><strong>L</strong>ogarithmic functions (ln x, etc.)</li>
          <li><strong>I</strong>nverse trigonometric functions (arcsin x, etc.)</li>
          <li><strong>A</strong>lgebraic functions (x², x³, polynomials)</li>
          <li><strong>T</strong>rigonometric functions (sin x, cos x, etc.)</li>
          <li><strong>E</strong>xponential functions (eˣ, etc.)</li>
        </ol>
        <p>
          Choose <InlineMath>{`u`}</InlineMath> to be whichever function type appears first in
          LIATE. The remaining factor becomes <InlineMath>{`dv`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="General Guidelines">
        <ul>
          <li>
            Choose <InlineMath>{`u`}</InlineMath> so that <InlineMath>{`du`}</InlineMath> is simpler
            than <InlineMath>{`u`}</InlineMath>.
          </li>
          <li>
            Choose <InlineMath>{`dv`}</InlineMath> so that <InlineMath>{`v = \\int dv`}</InlineMath> is
            easy to compute.
          </li>
          <li>
            The goal is to make <InlineMath>{`\\int v \\, du`}</InlineMath> simpler than
            <InlineMath>{`\\int u \\, dv`}</InlineMath>.
          </li>
          <li>
            For products of polynomials with sin, cos, or exponentials, let the polynomial
            be <InlineMath>{`u`}</InlineMath>.
          </li>
          <li>
            Sometimes multiple applications are needed (as in <InlineMath>{`x^2 \\cos x`}</InlineMath>).
          </li>
        </ul>
      </Callout>

      <h2>Definite Integral Example</h2>

      <Callout type="example" title="Example 6: Definite Integral">
        <p>
          Evaluate <InlineMath>{`\\int_0^{\\pi} x \\sin x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`u = x`}</InlineMath> and <InlineMath>{`dv = \\sin x \\, dx`}</InlineMath>:</p>
        <MathBlock>{`\\int_0^{\\pi} x \\sin x \\, dx = \\left[-x \\cos x\\right]_0^{\\pi} + \\int_0^{\\pi} \\cos x \\, dx`}</MathBlock>
        <MathBlock>{`= \\left[-\\pi \\cos \\pi - 0\\right] + \\left[\\sin x\\right]_0^{\\pi}`}</MathBlock>
        <MathBlock>{`= -\\pi(-1) + (\\sin \\pi - \\sin 0) = \\pi + 0 = \\pi.`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Integration by parts</strong> is the product rule in reverse:
          <MathBlock>{`\\int u \\, dv = uv - \\int v \\, du.`}</MathBlock>
        </li>
        <li>
          The method transfers the problem from one integral to another, hopefully simpler one.
        </li>
        <li>
          <strong>Choice of u and dv</strong> is crucial. Use the LIATE rule as a guide:
          Logarithmic → Inverse trig → Algebraic → Trigonometric → Exponential.
        </li>
        <li>
          <strong>Multiple applications</strong> may be needed for higher powers.
        </li>
        <li>
          <strong>Reduction formulas</strong> express integrals of powers in terms of
          lower powers.
        </li>
        <li>
          The method can fail if it leads back to the original integral without simplification.
        </li>
        <li>
          For <strong>definite integrals</strong>:
          <InlineMath>{`\\int_a^b u \\, dv = uv \\big|_a^b - \\int_a^b v \\, du`}</InlineMath>.
        </li>
      </ul>
    </LessonLayout>
  );
}
