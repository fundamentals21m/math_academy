import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <p>
        The trigonometric functions are not one-to-one on their natural domains, so to
        define inverses we must restrict them to intervals where they are monotonic.
        The resulting <strong>inverse trigonometric functions</strong> are essential for
        integration and appear throughout mathematics and its applications.
      </p>

      <h2>The Inverse Sine (Arcsine)</h2>

      <Callout type="definition" title="Definition of Arcsine">
        <p>
          The sine function is strictly increasing on <InlineMath>{`[-\\pi/2, \\pi/2]`}</InlineMath>,
          where it takes all values in <InlineMath>{`[-1, 1]`}</InlineMath>. We define the
          <strong> arcsine</strong> (or <strong>inverse sine</strong>) by:
        </p>
        <MathBlock>{`u = \\arcsin v \\quad \\text{means} \\quad v = \\sin u \\quad \\text{and} \\quad -\\frac{\\pi}{2} \\leq u \\leq \\frac{\\pi}{2}.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Properties of Arcsine">
        <ul>
          <li><strong>Domain:</strong> <InlineMath>{`[-1, 1]`}</InlineMath></li>
          <li><strong>Range:</strong> <InlineMath>{`[-\\pi/2, \\pi/2]`}</InlineMath></li>
          <li><strong>Key values:</strong> <InlineMath>{`\\arcsin 0 = 0`}</InlineMath>, <InlineMath>{`\\arcsin 1 = \\pi/2`}</InlineMath>, <InlineMath>{`\\arcsin(-1) = -\\pi/2`}</InlineMath></li>
          <li><strong>Odd function:</strong> <InlineMath>{`\\arcsin(-x) = -\\arcsin x`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Derivative of Arcsine">
        <MathBlock>{`\\frac{d}{dx} \\arcsin x = \\frac{1}{\\sqrt{1 - x^2}} \\quad \\text{for } -1 < x < 1.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          If <InlineMath>{`y = \\arcsin x`}</InlineMath>, then <InlineMath>{`x = \\sin y`}</InlineMath> where
          <InlineMath>{`-\\pi/2 \\leq y \\leq \\pi/2`}</InlineMath>. By the inverse function theorem:
        </p>
        <MathBlock>{`\\frac{dy}{dx} = \\frac{1}{dx/dy} = \\frac{1}{\\cos y}.`}</MathBlock>
        <p>
          Since <InlineMath>{`\\cos y \\geq 0`}</InlineMath> on <InlineMath>{`[-\\pi/2, \\pi/2]`}</InlineMath>:
        </p>
        <MathBlock>{`\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}.`}</MathBlock>
        <p>
          Therefore <InlineMath>{`\\frac{d}{dx} \\arcsin x = \\frac{1}{\\sqrt{1 - x^2}}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Integral Form">
        <MathBlock>{`\\int \\frac{dx}{\\sqrt{1 - x^2}} = \\arcsin x + C`}</MathBlock>
        <p>More generally:</p>
        <MathBlock>{`\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\frac{x}{a} + C \\quad (a > 0)`}</MathBlock>
      </Callout>

      <h2>The Inverse Cosine (Arccosine)</h2>

      <Callout type="definition" title="Definition of Arccosine">
        <p>
          The cosine is strictly decreasing on <InlineMath>{`[0, \\pi]`}</InlineMath>, where it
          takes all values in <InlineMath>{`[-1, 1]`}</InlineMath>. We define:
        </p>
        <MathBlock>{`u = \\arccos v \\quad \\text{means} \\quad v = \\cos u \\quad \\text{and} \\quad 0 \\leq u \\leq \\pi.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Properties of Arccosine">
        <ul>
          <li><strong>Domain:</strong> <InlineMath>{`[-1, 1]`}</InlineMath></li>
          <li><strong>Range:</strong> <InlineMath>{`[0, \\pi]`}</InlineMath></li>
          <li><strong>Key values:</strong> <InlineMath>{`\\arccos 0 = \\pi/2`}</InlineMath>, <InlineMath>{`\\arccos 1 = 0`}</InlineMath>, <InlineMath>{`\\arccos(-1) = \\pi`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Derivative of Arccosine">
        <MathBlock>{`\\frac{d}{dx} \\arccos x = \\frac{-1}{\\sqrt{1 - x^2}} \\quad \\text{for } -1 < x < 1.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Relationship Between Arcsin and Arccos">
        <MathBlock>{`\\arcsin x + \\arccos x = \\frac{\\pi}{2} \\quad \\text{for all } x \\in [-1, 1].`}</MathBlock>
        <p>
          This follows from the identity <InlineMath>{`\\sin(\\pi/2 - \\theta) = \\cos \\theta`}</InlineMath>.
        </p>
      </Callout>

      <h2>The Inverse Tangent (Arctangent)</h2>

      <Callout type="definition" title="Definition of Arctangent">
        <p>
          The tangent is strictly increasing on <InlineMath>{`(-\\pi/2, \\pi/2)`}</InlineMath>,
          where it takes all real values. We define:
        </p>
        <MathBlock>{`u = \\arctan v \\quad \\text{means} \\quad v = \\tan u \\quad \\text{and} \\quad -\\frac{\\pi}{2} < u < \\frac{\\pi}{2}.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Properties of Arctangent">
        <ul>
          <li><strong>Domain:</strong> All real numbers <InlineMath>{`(-\\infty, \\infty)`}</InlineMath></li>
          <li><strong>Range:</strong> <InlineMath>{`(-\\pi/2, \\pi/2)`}</InlineMath></li>
          <li><strong>Key values:</strong> <InlineMath>{`\\arctan 0 = 0`}</InlineMath>, <InlineMath>{`\\arctan 1 = \\pi/4`}</InlineMath>, <InlineMath>{`\\arctan(-1) = -\\pi/4`}</InlineMath></li>
          <li><strong>Odd function:</strong> <InlineMath>{`\\arctan(-x) = -\\arctan x`}</InlineMath></li>
          <li><strong>Horizontal asymptotes:</strong> <InlineMath>{`\\lim_{x \\to \\pm\\infty} \\arctan x = \\pm\\pi/2`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Derivative of Arctangent">
        <MathBlock>{`\\frac{d}{dx} \\arctan x = \\frac{1}{1 + x^2} \\quad \\text{for all real } x.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          If <InlineMath>{`y = \\arctan x`}</InlineMath>, then <InlineMath>{`x = \\tan y`}</InlineMath>.
          By the inverse function theorem:
        </p>
        <MathBlock>{`\\frac{dy}{dx} = \\frac{1}{dx/dy} = \\frac{1}{\\sec^2 y} = \\frac{1}{1 + \\tan^2 y} = \\frac{1}{1 + x^2}.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Integral Form">
        <MathBlock>{`\\int \\frac{dx}{1 + x^2} = \\arctan x + C`}</MathBlock>
        <p>More generally:</p>
        <MathBlock>{`\\int \\frac{dx}{a^2 + x^2} = \\frac{1}{a} \\arctan\\frac{x}{a} + C \\quad (a > 0)`}</MathBlock>
      </Callout>

      <h2>The Other Inverse Trigonometric Functions</h2>

      <Callout type="definition" title="Arccotangent, Arcsecant, Arccosecant">
        <p>These are defined in terms of the primary inverse functions:</p>
        <MathBlock>{`\\text{arccot } x = \\frac{\\pi}{2} - \\arctan x \\quad \\text{for all real } x`}</MathBlock>
        <MathBlock>{`\\text{arcsec } x = \\arccos\\frac{1}{x} \\quad \\text{for } |x| \\geq 1`}</MathBlock>
        <MathBlock>{`\\text{arccsc } x = \\arcsin\\frac{1}{x} \\quad \\text{for } |x| \\geq 1`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Derivatives of Other Inverse Trig Functions">
        <MathBlock>{`\\frac{d}{dx} \\text{arccot } x = \\frac{-1}{1 + x^2}`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\text{arcsec } x = \\frac{1}{|x|\\sqrt{x^2 - 1}} \\quad (|x| > 1)`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\text{arccsc } x = \\frac{-1}{|x|\\sqrt{x^2 - 1}} \\quad (|x| > 1)`}</MathBlock>
      </Callout>

      <h2>Summary of Derivatives</h2>

      <Callout type="info" title="All Six Derivatives">
        <MathBlock>{`\\frac{d}{dx} \\arcsin x = \\frac{1}{\\sqrt{1-x^2}}`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\arccos x = \\frac{-1}{\\sqrt{1-x^2}}`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\arctan x = \\frac{1}{1+x^2}`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\text{arccot } x = \\frac{-1}{1+x^2}`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\text{arcsec } x = \\frac{1}{|x|\\sqrt{x^2-1}}`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} \\text{arccsc } x = \\frac{-1}{|x|\\sqrt{x^2-1}}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Pattern to Notice">
        <p>
          The "co-" functions (arccos, arccot, arccsc) have derivatives that are the
          <em>negatives</em> of their counterparts (arcsin, arctan, arcsec). This is because
          each pair sums to a constant (<InlineMath>{`\\pi/2`}</InlineMath>).
        </p>
      </Callout>

      <h2>Important Integration Formulas</h2>

      <Callout type="theorem" title="Key Integrals">
        <MathBlock>{`\\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C = -\\arccos x + C`}</MathBlock>
        <MathBlock>{`\\int \\frac{dx}{1+x^2} = \\arctan x + C = -\\text{arccot } x + C`}</MathBlock>
        <MathBlock>{`\\int \\frac{dx}{|x|\\sqrt{x^2-1}} = \\text{arcsec } |x| + C`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Generalized Forms">
        <MathBlock>{`\\int \\frac{dx}{\\sqrt{a^2-x^2}} = \\arcsin\\frac{x}{a} + C`}</MathBlock>
        <MathBlock>{`\\int \\frac{dx}{a^2+x^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C`}</MathBlock>
        <MathBlock>{`\\int \\frac{dx}{x\\sqrt{x^2-a^2}} = \\frac{1}{a}\\text{arcsec}\\frac{|x|}{a} + C`}</MathBlock>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Basic Values">
        <p>Evaluate the following:</p>
        <p><strong>(a)</strong> <InlineMath>{`\\arcsin(\\frac{1}{2})`}</InlineMath></p>
        <p>
          We need <InlineMath>{`u`}</InlineMath> such that <InlineMath>{`\\sin u = \\frac{1}{2}`}</InlineMath>
          and <InlineMath>{`-\\frac{\\pi}{2} \\leq u \\leq \\frac{\\pi}{2}`}</InlineMath>.
          Answer: <InlineMath>{`\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}`}</InlineMath>.
        </p>
        <p><strong>(b)</strong> <InlineMath>{`\\arccos(-\\frac{\\sqrt{2}}{2})`}</InlineMath></p>
        <p>
          We need <InlineMath>{`u`}</InlineMath> such that <InlineMath>{`\\cos u = -\\frac{\\sqrt{2}}{2}`}</InlineMath>
          and <InlineMath>{`0 \\leq u \\leq \\pi`}</InlineMath>.
          Answer: <InlineMath>{`\\arccos(-\\frac{\\sqrt{2}}{2}) = \\frac{3\\pi}{4}`}</InlineMath>.
        </p>
        <p><strong>(c)</strong> <InlineMath>{`\\arctan(\\sqrt{3})`}</InlineMath></p>
        <p>
          We need <InlineMath>{`u`}</InlineMath> such that <InlineMath>{`\\tan u = \\sqrt{3}`}</InlineMath>
          and <InlineMath>{`-\\frac{\\pi}{2} < u < \\frac{\\pi}{2}`}</InlineMath>.
          Answer: <InlineMath>{`\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Differentiation with Chain Rule">
        <p>
          Find <InlineMath>{`\\frac{d}{dx} \\arcsin(2x)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> By the chain rule:</p>
        <MathBlock>{`\\frac{d}{dx} \\arcsin(2x) = \\frac{1}{\\sqrt{1-(2x)^2}} \\cdot 2 = \\frac{2}{\\sqrt{1-4x^2}}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Differentiation">
        <p>
          Find <InlineMath>{`\\frac{d}{dx} \\arctan(e^x)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{d}{dx} \\arctan(e^x) = \\frac{1}{1+(e^x)^2} \\cdot e^x = \\frac{e^x}{1+e^{2x}}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Integration">
        <p>
          Evaluate <InlineMath>{`\\int \\frac{dx}{\\sqrt{9-x^2}}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          This matches <InlineMath>{`\\int \\frac{dx}{\\sqrt{a^2-x^2}}`}</InlineMath> with <InlineMath>{`a = 3`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\frac{dx}{\\sqrt{9-x^2}} = \\arcsin\\frac{x}{3} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Integration">
        <p>
          Evaluate <InlineMath>{`\\int \\frac{dx}{4+x^2}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          This matches <InlineMath>{`\\int \\frac{dx}{a^2+x^2}`}</InlineMath> with <InlineMath>{`a = 2`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\frac{dx}{4+x^2} = \\frac{1}{2}\\arctan\\frac{x}{2} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Completing the Square">
        <p>
          Evaluate <InlineMath>{`\\int \\frac{dx}{x^2+4x+5}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Complete the square in the denominator:</p>
        <MathBlock>{`x^2 + 4x + 5 = (x^2 + 4x + 4) + 1 = (x+2)^2 + 1.`}</MathBlock>
        <p>Let <InlineMath>{`u = x + 2`}</InlineMath>, so <InlineMath>{`du = dx`}</InlineMath>:</p>
        <MathBlock>{`\\int \\frac{dx}{(x+2)^2+1} = \\int \\frac{du}{u^2+1} = \\arctan u + C = \\arctan(x+2) + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 7: Integration by Parts">
        <p>
          Evaluate <InlineMath>{`\\int \\arcsin x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = \\arcsin x`}</InlineMath> and <InlineMath>{`dv = dx`}</InlineMath>:
        </p>
        <MathBlock>{`du = \\frac{dx}{\\sqrt{1-x^2}}, \\quad v = x`}</MathBlock>
        <MathBlock>{`\\int \\arcsin x \\, dx = x \\arcsin x - \\int \\frac{x \\, dx}{\\sqrt{1-x^2}}.`}</MathBlock>
        <p>
          For the remaining integral, let <InlineMath>{`w = 1 - x^2`}</InlineMath>,
          <InlineMath>{`dw = -2x \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\frac{x \\, dx}{\\sqrt{1-x^2}} = -\\frac{1}{2} \\int w^{-1/2} \\, dw = -\\sqrt{w} + C = -\\sqrt{1-x^2} + C.`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\int \\arcsin x \\, dx = x \\arcsin x + \\sqrt{1-x^2} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 8: Integration by Parts">
        <p>
          Evaluate <InlineMath>{`\\int \\arctan x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = \\arctan x`}</InlineMath> and <InlineMath>{`dv = dx`}</InlineMath>:
        </p>
        <MathBlock>{`du = \\frac{dx}{1+x^2}, \\quad v = x`}</MathBlock>
        <MathBlock>{`\\int \\arctan x \\, dx = x \\arctan x - \\int \\frac{x \\, dx}{1+x^2}.`}</MathBlock>
        <p>
          For the remaining integral, let <InlineMath>{`w = 1 + x^2`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\frac{x \\, dx}{1+x^2} = \\frac{1}{2} \\ln(1+x^2) + C.`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\int \\arctan x \\, dx = x \\arctan x - \\frac{1}{2} \\ln(1+x^2) + C.`}</MathBlock>
      </Callout>

      <h2>Definite Integral: Computing π</h2>

      <Callout type="example" title="A Formula for π">
        <p>
          Since <InlineMath>{`\\int_0^1 \\frac{dx}{1+x^2} = \\arctan x \\Big|_0^1 = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4}`}</InlineMath>:
        </p>
        <MathBlock>{`\\pi = 4 \\int_0^1 \\frac{dx}{1+x^2}.`}</MathBlock>
        <p>
          This integral can be used to compute <InlineMath>{`\\pi`}</InlineMath> numerically.
        </p>
      </Callout>

      <h2>Graphs of Inverse Trig Functions</h2>

      <Callout type="info" title="Key Features">
        <ul>
          <li>
            <strong>arcsin x:</strong> Domain <InlineMath>{`[-1,1]`}</InlineMath>, range
            <InlineMath>{`[-\\pi/2, \\pi/2]`}</InlineMath>, passes through origin, increasing.
          </li>
          <li>
            <strong>arccos x:</strong> Domain <InlineMath>{`[-1,1]`}</InlineMath>, range
            <InlineMath>{`[0, \\pi]`}</InlineMath>, passes through <InlineMath>{`(1, 0)`}</InlineMath>, decreasing.
          </li>
          <li>
            <strong>arctan x:</strong> Domain <InlineMath>{`(-\\infty, \\infty)`}</InlineMath>, range
            <InlineMath>{`(-\\pi/2, \\pi/2)`}</InlineMath>, horizontal asymptotes at <InlineMath>{`y = \\pm\\pi/2`}</InlineMath>.
          </li>
        </ul>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Arcsine:</strong> <InlineMath>{`y = \\arcsin x`}</InlineMath> means
          <InlineMath>{`x = \\sin y`}</InlineMath> with <InlineMath>{`-\\frac{\\pi}{2} \\leq y \\leq \\frac{\\pi}{2}`}</InlineMath>.
        </li>
        <li>
          <strong>Arccosine:</strong> <InlineMath>{`y = \\arccos x`}</InlineMath> means
          <InlineMath>{`x = \\cos y`}</InlineMath> with <InlineMath>{`0 \\leq y \\leq \\pi`}</InlineMath>.
        </li>
        <li>
          <strong>Arctangent:</strong> <InlineMath>{`y = \\arctan x`}</InlineMath> means
          <InlineMath>{`x = \\tan y`}</InlineMath> with <InlineMath>{`-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}`}</InlineMath>.
        </li>
        <li>
          <strong>Key derivatives:</strong>
          <InlineMath>{`(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}}`}</InlineMath>,
          <InlineMath>{`(\\arccos x)' = \\frac{-1}{\\sqrt{1-x^2}}`}</InlineMath>,
          <InlineMath>{`(\\arctan x)' = \\frac{1}{1+x^2}`}</InlineMath>.
        </li>
        <li>
          <strong>Key integrals:</strong>
          <InlineMath>{`\\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C`}</InlineMath>,
          <InlineMath>{`\\int \\frac{dx}{1+x^2} = \\arctan x + C`}</InlineMath>.
        </li>
        <li>
          <strong>Relationship:</strong> <InlineMath>{`\\arcsin x + \\arccos x = \\frac{\\pi}{2}`}</InlineMath>.
        </li>
        <li>
          <strong>Integration by parts:</strong>
          <InlineMath>{`\\int \\arcsin x \\, dx = x\\arcsin x + \\sqrt{1-x^2} + C`}</InlineMath>,
          <InlineMath>{`\\int \\arctan x \\, dx = x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C`}</InlineMath>.
        </li>
      </ul>
    </LessonLayout>
  );
}
