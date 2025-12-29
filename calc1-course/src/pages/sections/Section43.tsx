import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          hyperbola <MathInline>{`x^2 - y^2 = 1`}</MathInline>, just as the trigonometric functions
          relate to the circle <MathInline>{`x^2 + y^2 = 1`}</MathInline>.
        </p>
        <p>
          For the circle: <MathInline>{`(\\cos t, \\sin t)`}</MathInline> traces the unit circle.
        </p>
        <p>
          For the hyperbola: <MathInline>{`(\\cosh t, \\sinh t)`}</MathInline> traces the right branch
          of the unit hyperbola.
        </p>
      </Callout>

      <h2>Basic Properties</h2>

      <Callout type="theorem" title="Fundamental Identity">
        <p>The hyperbolic analogue of <MathInline>{`\\cos^2 x + \\sin^2 x = 1`}</MathInline> is:</p>
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
            <MathInline>{`\\sin(x+y) = \\sin x \\cos y + \\cos x \\sin y`}</MathInline> (same)
          </li>
          <li>
            <MathInline>{`\\cos(x+y) = \\cos x \\cos y \\mathbf{-} \\sin x \\sin y`}</MathInline> (minus sign)
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
          <li><MathInline>{`(\\sin x)' = \\cos x`}</MathInline> vs. <MathInline>{`(\\sinh x)' = \\cosh x`}</MathInline></li>
          <li><MathInline>{`(\\cos x)' = -\\sin x`}</MathInline> vs. <MathInline>{`(\\cosh x)' = \\sinh x`}</MathInline> (no minus!)</li>
          <li><MathInline>{`(\\tan x)' = \\sec^2 x`}</MathInline> vs. <MathInline>{`(\\tanh x)' = \\text{sech}^2 x`}</MathInline></li>
        </ul>
        <p>
          The key difference: <MathInline>{`(\\cosh x)' = \\sinh x`}</MathInline> has no minus sign,
          unlike <MathInline>{`(\\cos x)' = -\\sin x`}</MathInline>.
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
          <li><strong>Passes through:</strong> <MathInline>{`(0, 0)`}</MathInline></li>
          <li><strong>Increasing:</strong> <MathInline>{`(\\sinh x)' = \\cosh x > 0`}</MathInline> everywhere</li>
          <li>As <MathInline>{`x \\to \\infty`}</MathInline>: <MathInline>{`\\sinh x \\approx \\frac{e^x}{2} \\to \\infty`}</MathInline></li>
          <li>As <MathInline>{`x \\to -\\infty`}</MathInline>: <MathInline>{`\\sinh x \\approx -\\frac{e^{-x}}{2} \\to -\\infty`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="info" title="Graph of y = cosh x">
        <ul>
          <li><strong>Domain:</strong> All real numbers</li>
          <li><strong>Range:</strong> <MathInline>{`[1, \\infty)`}</MathInline></li>
          <li><strong>Even function:</strong> symmetric about y-axis</li>
          <li><strong>Minimum:</strong> <MathInline>{`\\cosh 0 = 1`}</MathInline></li>
          <li><strong>Shape:</strong> The catenary curve (shape of a hanging chain)</li>
          <li>As <MathInline>{`x \\to \\pm\\infty`}</MathInline>: <MathInline>{`\\cosh x \\to \\infty`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="info" title="Graph of y = tanh x">
        <ul>
          <li><strong>Domain:</strong> All real numbers</li>
          <li><strong>Range:</strong> <MathInline>{`(-1, 1)`}</MathInline></li>
          <li><strong>Odd function:</strong> symmetric about origin</li>
          <li><strong>Passes through:</strong> <MathInline>{`(0, 0)`}</MathInline></li>
          <li><strong>Horizontal asymptotes:</strong> <MathInline>{`y = \\pm 1`}</MathInline></li>
          <li><strong>Increasing:</strong> <MathInline>{`(\\tanh x)' = \\text{sech}^2 x > 0`}</MathInline> everywhere</li>
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
          where <MathInline>{`a`}</MathInline> is a constant depending on the tension and weight
          per unit length. The catenary is <em>not</em> a parabola, though it looks similar
          for small <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Verifying an Identity">
        <p>
          Verify that <MathInline>{`\\cosh^2 x - \\sinh^2 x = 1`}</MathInline> using the definitions.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\cosh^2 x = \\left(\\frac{e^x + e^{-x}}{2}\\right)^2 = \\frac{e^{2x} + 2 + e^{-2x}}{4}`}</MathBlock>
        <MathBlock>{`\\sinh^2 x = \\left(\\frac{e^x - e^{-x}}{2}\\right)^2 = \\frac{e^{2x} - 2 + e^{-2x}}{4}`}</MathBlock>
        <MathBlock>{`\\cosh^2 x - \\sinh^2 x = \\frac{(e^{2x} + 2 + e^{-2x}) - (e^{2x} - 2 + e^{-2x})}{4} = \\frac{4}{4} = 1.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Finding Values">
        <p>
          If <MathInline>{`\\sinh x = \\frac{3}{4}`}</MathInline>, find <MathInline>{`\\cosh x`}</MathInline> and <MathInline>{`\\tanh x`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Using <MathInline>{`\\cosh^2 x - \\sinh^2 x = 1`}</MathInline>:
        </p>
        <MathBlock>{`\\cosh^2 x = 1 + \\sinh^2 x = 1 + \\frac{9}{16} = \\frac{25}{16}.`}</MathBlock>
        <p>
          Since <MathInline>{`\\cosh x \\geq 1 > 0`}</MathInline> always, <MathInline>{`\\cosh x = \\frac{5}{4}`}</MathInline>.
        </p>
        <MathBlock>{`\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{3/4}{5/4} = \\frac{3}{5}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Differentiation">
        <p>
          Find <MathInline>{`\\frac{d}{dx} \\sinh(x^2)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> By the chain rule:</p>
        <MathBlock>{`\\frac{d}{dx} \\sinh(x^2) = \\cosh(x^2) \\cdot 2x = 2x \\cosh(x^2).`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Integration">
        <p>
          Evaluate <MathInline>{`\\int \\sinh^2 x \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Using <MathInline>{`2\\sinh^2 x = \\cosh 2x - 1`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\sinh^2 x \\, dx = \\int \\frac{\\cosh 2x - 1}{2} \\, dx = \\frac{1}{2}\\left(\\frac{\\sinh 2x}{2} - x\\right) + C`}</MathBlock>
        <MathBlock>{`= \\frac{\\sinh 2x}{4} - \\frac{x}{2} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Integration with Substitution">
        <p>
          Evaluate <MathInline>{`\\int \\frac{\\cosh x}{1 + \\sinh x} \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = 1 + \\sinh x`}</MathInline>, so <MathInline>{`du = \\cosh x \\, dx`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{\\cosh x}{1 + \\sinh x} \\, dx = \\int \\frac{du}{u} = \\ln|u| + C = \\ln(1 + \\sinh x) + C.`}</MathBlock>
        <p>
          (We can drop the absolute value since <MathInline>{`1 + \\sinh x`}</MathInline> can be shown
          to always be positive.)
        </p>
      </Callout>

      <h2>Inverse Hyperbolic Functions</h2>

      <Callout type="info" title="Definitions">
        <p>
          Since <MathInline>{`\\sinh x`}</MathInline> and <MathInline>{`\\tanh x`}</MathInline> are strictly
          increasing (one-to-one), they have inverses:
        </p>
        <MathBlock>{`\\text{arcsinh } x = \\ln(x + \\sqrt{x^2 + 1}) \\quad \\text{for all } x`}</MathBlock>
        <MathBlock>{`\\text{arctanh } x = \\frac{1}{2} \\ln\\left(\\frac{1+x}{1-x}\\right) \\quad \\text{for } |x| < 1`}</MathBlock>
        <p>
          For <MathInline>{`\\cosh x`}</MathInline>, we restrict to <MathInline>{`x \\geq 0`}</MathInline>:
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
          <strong>Definitions:</strong> <MathInline>{`\\sinh x = \\frac{e^x - e^{-x}}{2}`}</MathInline>,
          <MathInline>{`\\cosh x = \\frac{e^x + e^{-x}}{2}`}</MathInline>,
          <MathInline>{`\\tanh x = \\frac{\\sinh x}{\\cosh x}`}</MathInline>.
        </li>
        <li>
          <strong>Fundamental identity:</strong> <MathInline>{`\\cosh^2 x - \\sinh^2 x = 1`}</MathInline>
          (note: minus sign, unlike trig).
        </li>
        <li>
          <strong>Parity:</strong> <MathInline>{`\\sinh`}</MathInline> is odd, <MathInline>{`\\cosh`}</MathInline> is even.
        </li>
        <li>
          <strong>Derivatives:</strong> <MathInline>{`(\\sinh x)' = \\cosh x`}</MathInline>,
          <MathInline>{`(\\cosh x)' = \\sinh x`}</MathInline> (no minus sign!),
          <MathInline>{`(\\tanh x)' = \\text{sech}^2 x`}</MathInline>.
        </li>
        <li>
          <strong>Useful identities:</strong> <MathInline>{`\\cosh x + \\sinh x = e^x`}</MathInline>,
          <MathInline>{`\\cosh x - \\sinh x = e^{-x}`}</MathInline>.
        </li>
        <li>
          <strong>Catenary:</strong> <MathInline>{`y = a\\cosh(x/a)`}</MathInline> describes a hanging chain.
        </li>
        <li>
          <strong>Graphs:</strong> <MathInline>{`\\sinh`}</MathInline> passes through origin (increasing),
          <MathInline>{`\\cosh`}</MathInline> has minimum 1 at <MathInline>{`x = 0`}</MathInline>,
          <MathInline>{`\\tanh`}</MathInline> has horizontal asymptotes <MathInline>{`y = \\pm 1`}</MathInline>.
        </li>
      </ul>
    </LessonLayout>
  );
}
