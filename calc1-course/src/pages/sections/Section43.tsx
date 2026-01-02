import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <p>
        Certain combinations of exponential functions occur so frequently in analysis
        that they deserve special names. These combinations, called the <strong>hyperbolic
        functions</strong>, share many properties with the trigonometric functions and
        arise naturally in applications ranging from hanging cables to special relativity.
      </p>

      <h2>Definitions</h2>

      <Callout type="definition" title="The Hyperbolic Functions">
        <p>The <strong>hyperbolic sine</strong> and <strong>hyperbolic cosine</strong> are defined by:</p>
        <MathBlock>{`\\sinh x = \\frac{e^x - e^{-x}}{2}, \\qquad \\cosh x = \\frac{e^x + e^{-x}}{2}.`}</MathBlock>
        <p>The remaining hyperbolic functions are:</p>
        <MathBlock>{`\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}}`}</MathBlock>
        <MathBlock>{`\\coth x = \\frac{1}{\\tanh x} = \\frac{e^x + e^{-x}}{e^x - e^{-x}} \\quad (x \\neq 0)`}</MathBlock>
        <MathBlock>{`\\text{sech } x = \\frac{1}{\\cosh x} = \\frac{2}{e^x + e^{-x}}`}</MathBlock>
        <MathBlock>{`\\text{csch } x = \\frac{1}{\\sinh x} = \\frac{2}{e^x - e^{-x}} \\quad (x \\neq 0)`}</MathBlock>
      </Callout>

      <Callout type="info" title="Why 'Hyperbolic'?">
        <p>
          The prefix "hyperbolic" comes from the relationship of these functions to the
          hyperbola <InlineMath>{`x^2 - y^2 = 1`}</InlineMath>, just as the trigonometric functions
          relate to the circle <InlineMath>{`x^2 + y^2 = 1`}</InlineMath>.
        </p>
        <p>
          For the circle: <InlineMath>{`(\\cos t, \\sin t)`}</InlineMath> traces the unit circle.
        </p>
        <p>
          For the hyperbola: <InlineMath>{`(\\cosh t, \\sinh t)`}</InlineMath> traces the right branch
          of the unit hyperbola.
        </p>
      </Callout>

      <h2>Basic Properties</h2>

      <Callout type="theorem" title="Fundamental Identity">
        <p>The hyperbolic analogue of <InlineMath>{`\\cos^2 x + \\sin^2 x = 1`}</InlineMath> is:</p>
        <MathBlock>{`\\cosh^2 x - \\sinh^2 x = 1.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <MathBlock>{`\\cosh^2 x - \\sinh^2 x = \\left(\\frac{e^x + e^{-x}}{2}\\right)^2 - \\left(\\frac{e^x - e^{-x}}{2}\\right)^2`}</MathBlock>
        <MathBlock>{`= \\frac{e^{2x} + 2 + e^{-2x}}{4} - \\frac{e^{2x} - 2 + e^{-2x}}{4} = \\frac{4}{4} = 1.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Parity Properties">
        <p>The hyperbolic functions have the following symmetries:</p>
        <MathBlock>{`\\sinh(-x) = -\\sinh x \\quad \\text{(odd function)}`}</MathBlock>
        <MathBlock>{`\\cosh(-x) = \\cosh x \\quad \\text{(even function)}`}</MathBlock>
        <MathBlock>{`\\tanh(-x) = -\\tanh x \\quad \\text{(odd function)}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <MathBlock>{`\\sinh(-x) = \\frac{e^{-x} - e^{x}}{2} = -\\frac{e^x - e^{-x}}{2} = -\\sinh x`}</MathBlock>
        <MathBlock>{`\\cosh(-x) = \\frac{e^{-x} + e^{x}}{2} = \\frac{e^x + e^{-x}}{2} = \\cosh x`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Useful Combinations">
        <MathBlock>{`\\cosh x + \\sinh x = e^x`}</MathBlock>
        <MathBlock>{`\\cosh x - \\sinh x = e^{-x}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <MathBlock>{`\\cosh x + \\sinh x = \\frac{e^x + e^{-x}}{2} + \\frac{e^x - e^{-x}}{2} = \\frac{2e^x}{2} = e^x`}</MathBlock>
      </Callout>

      <h2>Addition Formulas</h2>

      <Callout type="theorem" title="Hyperbolic Addition Formulas">
        <MathBlock>{`\\sinh(x + y) = \\sinh x \\cosh y + \\cosh x \\sinh y`}</MathBlock>
        <MathBlock>{`\\cosh(x + y) = \\cosh x \\cosh y + \\sinh x \\sinh y`}</MathBlock>
        <MathBlock>{`\\tanh(x + y) = \\frac{\\tanh x + \\tanh y}{1 + \\tanh x \\tanh y}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Comparison with Trigonometric Formulas">
        <p>Note the sign differences from the trigonometric formulas:</p>
        <ul>
          <li>
            <InlineMath>{`\\sin(x+y) = \\sin x \\cos y + \\cos x \\sin y`}</InlineMath> (same)
          </li>
          <li>
            <InlineMath>{`\\cos(x+y) = \\cos x \\cos y \\mathbf{-} \\sin x \\sin y`}</InlineMath> (minus sign)
          </li>
        </ul>
        <p>
          The hyperbolic cosine formula has a <strong>plus</strong> sign where the trigonometric
          formula has a minus sign.
        </p>
      </Callout>

      <h2>Double Angle Formulas</h2>

      <Callout type="theorem" title="Double Angle Formulas">
        <MathBlock>{`\\sinh 2x = 2 \\sinh x \\cosh x`}</MathBlock>
        <MathBlock>{`\\cosh 2x = \\cosh^2 x + \\sinh^2 x = 2\\cosh^2 x - 1 = 1 + 2\\sinh^2 x`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Half Angle Formulas">
        <MathBlock>{`2\\sinh^2 \\frac{x}{2} = \\cosh x - 1`}</MathBlock>
        <MathBlock>{`2\\cosh^2 \\frac{x}{2} = \\cosh x + 1`}</MathBlock>
      </Callout>

      <h2>Other Identities</h2>

      <Callout type="theorem" title="Additional Identities">
        <MathBlock>{`\\tanh^2 x + \\text{sech}^2 x = 1`}</MathBlock>
        <MathBlock>{`\\coth^2 x - \\text{csch}^2 x = 1`}</MathBlock>
        <MathBlock>{`(\\cosh x + \\sinh x)^n = \\cosh nx + \\sinh nx \\quad \\text{(for integer } n \\text{)}`}</MathBlock>
      </Callout>

      <h2>Derivatives</h2>

      <Callout type="theorem" title="Derivatives of Hyperbolic Functions">
        <MathBlock>{`\\frac{d}{dx} \\sinh x = \\cosh x`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\cosh x = \\sinh x`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\tanh x = \\text{sech}^2 x`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\coth x = -\\text{csch}^2 x`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\text{sech } x = -\\text{sech } x \\tanh x`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\text{csch } x = -\\text{csch } x \\coth x`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proofs">
        <p><strong>Derivative of sinh x:</strong></p>
        <MathBlock>{`\\frac{d}{dx} \\sinh x = \\frac{d}{dx} \\left(\\frac{e^x - e^{-x}}{2}\\right) = \\frac{e^x + e^{-x}}{2} = \\cosh x.`}</MathBlock>
        <p><strong>Derivative of cosh x:</strong></p>
        <MathBlock>{`\\frac{d}{dx} \\cosh x = \\frac{d}{dx} \\left(\\frac{e^x + e^{-x}}{2}\\right) = \\frac{e^x - e^{-x}}{2} = \\sinh x.`}</MathBlock>
        <p><strong>Derivative of tanh x:</strong></p>
        <MathBlock>{`\\frac{d}{dx} \\tanh x = \\frac{d}{dx} \\frac{\\sinh x}{\\cosh x} = \\frac{\\cosh^2 x - \\sinh^2 x}{\\cosh^2 x} = \\frac{1}{\\cosh^2 x} = \\text{sech}^2 x.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Comparison with Trigonometric Derivatives">
        <p>The derivatives are strikingly similar to those of trig functions:</p>
        <ul>
          <li><InlineMath>{`(\\sin x)' = \\cos x`}</InlineMath> vs. <InlineMath>{`(\\sinh x)' = \\cosh x`}</InlineMath></li>
          <li><InlineMath>{`(\\cos x)' = -\\sin x`}</InlineMath> vs. <InlineMath>{`(\\cosh x)' = \\sinh x`}</InlineMath> (no minus!)</li>
          <li><InlineMath>{`(\\tan x)' = \\sec^2 x`}</InlineMath> vs. <InlineMath>{`(\\tanh x)' = \\text{sech}^2 x`}</InlineMath></li>
        </ul>
        <p>
          The key difference: <InlineMath>{`(\\cosh x)' = \\sinh x`}</InlineMath> has no minus sign,
          unlike <InlineMath>{`(\\cos x)' = -\\sin x`}</InlineMath>.
        </p>
      </Callout>

      <h2>Integration Formulas</h2>

      <Callout type="theorem" title="Basic Integrals">
        <MathBlock>{`\\int \\sinh x \\, dx = \\cosh x + C`}</MathBlock>
        <MathBlock>{`\\int \\cosh x \\, dx = \\sinh x + C`}</MathBlock>
        <MathBlock>{`\\int \\text{sech}^2 x \\, dx = \\tanh x + C`}</MathBlock>
        <MathBlock>{`\\int \\text{csch}^2 x \\, dx = -\\coth x + C`}</MathBlock>
        <MathBlock>{`\\int \\text{sech } x \\tanh x \\, dx = -\\text{sech } x + C`}</MathBlock>
        <MathBlock>{`\\int \\text{csch } x \\coth x \\, dx = -\\text{csch } x + C`}</MathBlock>
      </Callout>

      <h2>Graphs of Hyperbolic Functions</h2>

      <Callout type="info" title="Graph of y = sinh x">
        <ul>
          <li><strong>Domain:</strong> All real numbers</li>
          <li><strong>Range:</strong> All real numbers</li>
          <li><strong>Odd function:</strong> symmetric about origin</li>
          <li><strong>Passes through:</strong> <InlineMath>{`(0, 0)`}</InlineMath></li>
          <li><strong>Increasing:</strong> <InlineMath>{`(\\sinh x)' = \\cosh x > 0`}</InlineMath> everywhere</li>
          <li>As <InlineMath>{`x \\to \\infty`}</InlineMath>: <InlineMath>{`\\sinh x \\approx \\frac{e^x}{2} \\to \\infty`}</InlineMath></li>
          <li>As <InlineMath>{`x \\to -\\infty`}</InlineMath>: <InlineMath>{`\\sinh x \\approx -\\frac{e^{-x}}{2} \\to -\\infty`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="info" title="Graph of y = cosh x">
        <ul>
          <li><strong>Domain:</strong> All real numbers</li>
          <li><strong>Range:</strong> <InlineMath>{`[1, \\infty)`}</InlineMath></li>
          <li><strong>Even function:</strong> symmetric about y-axis</li>
          <li><strong>Minimum:</strong> <InlineMath>{`\\cosh 0 = 1`}</InlineMath></li>
          <li><strong>Shape:</strong> The catenary curve (shape of a hanging chain)</li>
          <li>As <InlineMath>{`x \\to \\pm\\infty`}</InlineMath>: <InlineMath>{`\\cosh x \\to \\infty`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="info" title="Graph of y = tanh x">
        <ul>
          <li><strong>Domain:</strong> All real numbers</li>
          <li><strong>Range:</strong> <InlineMath>{`(-1, 1)`}</InlineMath></li>
          <li><strong>Odd function:</strong> symmetric about origin</li>
          <li><strong>Passes through:</strong> <InlineMath>{`(0, 0)`}</InlineMath></li>
          <li><strong>Horizontal asymptotes:</strong> <InlineMath>{`y = \\pm 1`}</InlineMath></li>
          <li><strong>Increasing:</strong> <InlineMath>{`(\\tanh x)' = \\text{sech}^2 x > 0`}</InlineMath> everywhere</li>
        </ul>
      </Callout>

      <h2>The Catenary</h2>

      <Callout type="info" title="The Hanging Chain">
        <p>
          When a flexible chain hangs under its own weight between two supports, it forms
          a curve called a <strong>catenary</strong>. This curve is described by:
        </p>
        <MathBlock>{`y = a \\cosh\\left(\\frac{x}{a}\\right)`}</MathBlock>
        <p>
          where <InlineMath>{`a`}</InlineMath> is a constant depending on the tension and weight
          per unit length. The catenary is <em>not</em> a parabola, though it looks similar
          for small <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Verifying an Identity">
        <p>
          Verify that <InlineMath>{`\\cosh^2 x - \\sinh^2 x = 1`}</InlineMath> using the definitions.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\cosh^2 x = \\left(\\frac{e^x + e^{-x}}{2}\\right)^2 = \\frac{e^{2x} + 2 + e^{-2x}}{4}`}</MathBlock>
        <MathBlock>{`\\sinh^2 x = \\left(\\frac{e^x - e^{-x}}{2}\\right)^2 = \\frac{e^{2x} - 2 + e^{-2x}}{4}`}</MathBlock>
        <MathBlock>{`\\cosh^2 x - \\sinh^2 x = \\frac{(e^{2x} + 2 + e^{-2x}) - (e^{2x} - 2 + e^{-2x})}{4} = \\frac{4}{4} = 1.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Finding Values">
        <p>
          If <InlineMath>{`\\sinh x = \\frac{3}{4}`}</InlineMath>, find <InlineMath>{`\\cosh x`}</InlineMath> and <InlineMath>{`\\tanh x`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Using <InlineMath>{`\\cosh^2 x - \\sinh^2 x = 1`}</InlineMath>:
        </p>
        <MathBlock>{`\\cosh^2 x = 1 + \\sinh^2 x = 1 + \\frac{9}{16} = \\frac{25}{16}.`}</MathBlock>
        <p>
          Since <InlineMath>{`\\cosh x \\geq 1 > 0`}</InlineMath> always, <InlineMath>{`\\cosh x = \\frac{5}{4}`}</InlineMath>.
        </p>
        <MathBlock>{`\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{3/4}{5/4} = \\frac{3}{5}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Differentiation">
        <p>
          Find <InlineMath>{`\\frac{d}{dx} \\sinh(x^2)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> By the chain rule:</p>
        <MathBlock>{`\\frac{d}{dx} \\sinh(x^2) = \\cosh(x^2) \\cdot 2x = 2x \\cosh(x^2).`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Integration">
        <p>
          Evaluate <InlineMath>{`\\int \\sinh^2 x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Using <InlineMath>{`2\\sinh^2 x = \\cosh 2x - 1`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\sinh^2 x \\, dx = \\int \\frac{\\cosh 2x - 1}{2} \\, dx = \\frac{1}{2}\\left(\\frac{\\sinh 2x}{2} - x\\right) + C`}</MathBlock>
        <MathBlock>{`= \\frac{\\sinh 2x}{4} - \\frac{x}{2} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Integration with Substitution">
        <p>
          Evaluate <InlineMath>{`\\int \\frac{\\cosh x}{1 + \\sinh x} \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = 1 + \\sinh x`}</InlineMath>, so <InlineMath>{`du = \\cosh x \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\frac{\\cosh x}{1 + \\sinh x} \\, dx = \\int \\frac{du}{u} = \\ln|u| + C = \\ln(1 + \\sinh x) + C.`}</MathBlock>
        <p>
          (We can drop the absolute value since <InlineMath>{`1 + \\sinh x`}</InlineMath> can be shown
          to always be positive.)
        </p>
      </Callout>

      <h2>Inverse Hyperbolic Functions</h2>

      <Callout type="info" title="Definitions">
        <p>
          Since <InlineMath>{`\\sinh x`}</InlineMath> and <InlineMath>{`\\tanh x`}</InlineMath> are strictly
          increasing (one-to-one), they have inverses:
        </p>
        <MathBlock>{`\\text{arcsinh } x = \\ln(x + \\sqrt{x^2 + 1}) \\quad \\text{for all } x`}</MathBlock>
        <MathBlock>{`\\text{arctanh } x = \\frac{1}{2} \\ln\\left(\\frac{1+x}{1-x}\\right) \\quad \\text{for } |x| < 1`}</MathBlock>
        <p>
          For <InlineMath>{`\\cosh x`}</InlineMath>, we restrict to <InlineMath>{`x \\geq 0`}</InlineMath>:
        </p>
        <MathBlock>{`\\text{arccosh } x = \\ln(x + \\sqrt{x^2 - 1}) \\quad \\text{for } x \\geq 1`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Derivatives of Inverse Hyperbolic Functions">
        <MathBlock>{`\\frac{d}{dx} \\text{arcsinh } x = \\frac{1}{\\sqrt{x^2 + 1}}`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\text{arccosh } x = \\frac{1}{\\sqrt{x^2 - 1}} \\quad (x > 1)`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\text{arctanh } x = \\frac{1}{1 - x^2} \\quad (|x| < 1)`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Definitions:</strong> <InlineMath>{`\\sinh x = \\frac{e^x - e^{-x}}{2}`}</InlineMath>,
          <InlineMath>{`\\cosh x = \\frac{e^x + e^{-x}}{2}`}</InlineMath>,
          <InlineMath>{`\\tanh x = \\frac{\\sinh x}{\\cosh x}`}</InlineMath>.
        </li>
        <li>
          <strong>Fundamental identity:</strong> <InlineMath>{`\\cosh^2 x - \\sinh^2 x = 1`}</InlineMath>
          (note: minus sign, unlike trig).
        </li>
        <li>
          <strong>Parity:</strong> <InlineMath>{`\\sinh`}</InlineMath> is odd, <InlineMath>{`\\cosh`}</InlineMath> is even.
        </li>
        <li>
          <strong>Derivatives:</strong> <InlineMath>{`(\\sinh x)' = \\cosh x`}</InlineMath>,
          <InlineMath>{`(\\cosh x)' = \\sinh x`}</InlineMath> (no minus sign!),
          <InlineMath>{`(\\tanh x)' = \\text{sech}^2 x`}</InlineMath>.
        </li>
        <li>
          <strong>Useful identities:</strong> <InlineMath>{`\\cosh x + \\sinh x = e^x`}</InlineMath>,
          <InlineMath>{`\\cosh x - \\sinh x = e^{-x}`}</InlineMath>.
        </li>
        <li>
          <strong>Catenary:</strong> <InlineMath>{`y = a\\cosh(x/a)`}</InlineMath> describes a hanging chain.
        </li>
        <li>
          <strong>Graphs:</strong> <InlineMath>{`\\sinh`}</InlineMath> passes through origin (increasing),
          <InlineMath>{`\\cosh`}</InlineMath> has minimum 1 at <InlineMath>{`x = 0`}</InlineMath>,
          <InlineMath>{`\\tanh`}</InlineMath> has horizontal asymptotes <InlineMath>{`y = \\pm 1`}</InlineMath>.
        </li>
      </ul>
    </LessonLayout>
  );
}
