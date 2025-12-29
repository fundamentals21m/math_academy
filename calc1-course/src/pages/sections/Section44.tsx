import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          The sine function is strictly increasing on <MathInline>{`[-\\pi/2, \\pi/2]`}</MathInline>,
          where it takes all values in <MathInline>{`[-1, 1]`}</MathInline>. We define the
          <strong> arcsine</strong> (or <strong>inverse sine</strong>) by:
        </p>
        <MathBlock>{`u = \\arcsin v \\quad \\text{means} \\quad v = \\sin u \\quad \\text{and} \\quad -\\frac{\\pi}{2} \\leq u \\leq \\frac{\\pi}{2}.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Properties of Arcsine">
        <ul>
          <li><strong>Domain:</strong> <MathInline>{`[-1, 1]`}</MathInline></li>
          <li><strong>Range:</strong> <MathInline>{`[-\\pi/2, \\pi/2]`}</MathInline></li>
          <li><strong>Key values:</strong> <MathInline>{`\\arcsin 0 = 0`}</MathInline>, <MathInline>{`\\arcsin 1 = \\pi/2`}</MathInline>, <MathInline>{`\\arcsin(-1) = -\\pi/2`}</MathInline></li>
          <li><strong>Odd function:</strong> <MathInline>{`\\arcsin(-x) = -\\arcsin x`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Derivative of Arcsine">
        <MathBlock>{`\\frac{d}{dx} \\arcsin x = \\frac{1}{\\sqrt{1 - x^2}} \\quad \\text{for } -1 < x < 1.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          If <MathInline>{`y = \\arcsin x`}</MathInline>, then <MathInline>{`x = \\sin y`}</MathInline> where
          <MathInline>{`-\\pi/2 \\leq y \\leq \\pi/2`}</MathInline>. By the inverse function theorem:
        </p>
        <MathBlock>{`\\frac{dy}{dx} = \\frac{1}{dx/dy} = \\frac{1}{\\cos y}.`}</MathBlock>
        <p>
          Since <MathInline>{`\\cos y \\geq 0`}</MathInline> on <MathInline>{`[-\\pi/2, \\pi/2]`}</MathInline>:
        </p>
        <MathBlock>{`\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}.`}</MathBlock>
        <p>
          Therefore <MathInline>{`\\frac{d}{dx} \\arcsin x = \\frac{1}{\\sqrt{1 - x^2}}`}</MathInline>.
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
          The cosine is strictly decreasing on <MathInline>{`[0, \\pi]`}</MathInline>, where it
          takes all values in <MathInline>{`[-1, 1]`}</MathInline>. We define:
        </p>
        <MathBlock>{`u = \\arccos v \\quad \\text{means} \\quad v = \\cos u \\quad \\text{and} \\quad 0 \\leq u \\leq \\pi.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Properties of Arccosine">
        <ul>
          <li><strong>Domain:</strong> <MathInline>{`[-1, 1]`}</MathInline></li>
          <li><strong>Range:</strong> <MathInline>{`[0, \\pi]`}</MathInline></li>
          <li><strong>Key values:</strong> <MathInline>{`\\arccos 0 = \\pi/2`}</MathInline>, <MathInline>{`\\arccos 1 = 0`}</MathInline>, <MathInline>{`\\arccos(-1) = \\pi`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Derivative of Arccosine">
        <MathBlock>{`\\frac{d}{dx} \\arccos x = \\frac{-1}{\\sqrt{1 - x^2}} \\quad \\text{for } -1 < x < 1.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Relationship Between Arcsin and Arccos">
        <MathBlock>{`\\arcsin x + \\arccos x = \\frac{\\pi}{2} \\quad \\text{for all } x \\in [-1, 1].`}</MathBlock>
        <p>
          This follows from the identity <MathInline>{`\\sin(\\pi/2 - \\theta) = \\cos \\theta`}</MathInline>.
        </p>
      </Callout>

      <h2>The Inverse Tangent (Arctangent)</h2>

      <Callout type="definition" title="Definition of Arctangent">
        <p>
          The tangent is strictly increasing on <MathInline>{`(-\\pi/2, \\pi/2)`}</MathInline>,
          where it takes all real values. We define:
        </p>
        <MathBlock>{`u = \\arctan v \\quad \\text{means} \\quad v = \\tan u \\quad \\text{and} \\quad -\\frac{\\pi}{2} < u < \\frac{\\pi}{2}.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Properties of Arctangent">
        <ul>
          <li><strong>Domain:</strong> All real numbers <MathInline>{`(-\\infty, \\infty)`}</MathInline></li>
          <li><strong>Range:</strong> <MathInline>{`(-\\pi/2, \\pi/2)`}</MathInline></li>
          <li><strong>Key values:</strong> <MathInline>{`\\arctan 0 = 0`}</MathInline>, <MathInline>{`\\arctan 1 = \\pi/4`}</MathInline>, <MathInline>{`\\arctan(-1) = -\\pi/4`}</MathInline></li>
          <li><strong>Odd function:</strong> <MathInline>{`\\arctan(-x) = -\\arctan x`}</MathInline></li>
          <li><strong>Horizontal asymptotes:</strong> <MathInline>{`\\lim_{x \\to \\pm\\infty} \\arctan x = \\pm\\pi/2`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Derivative of Arctangent">
        <MathBlock>{`\\frac{d}{dx} \\arctan x = \\frac{1}{1 + x^2} \\quad \\text{for all real } x.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          If <MathInline>{`y = \\arctan x`}</MathInline>, then <MathInline>{`x = \\tan y`}</MathInline>.
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
          each pair sums to a constant (<MathInline>{`\\pi/2`}</MathInline>).
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
        <p><strong>(a)</strong> <MathInline>{`\\arcsin(\\frac{1}{2})`}</MathInline></p>
        <p>
          We need <MathInline>{`u`}</MathInline> such that <MathInline>{`\\sin u = \\frac{1}{2}`}</MathInline>
          and <MathInline>{`-\\frac{\\pi}{2} \\leq u \\leq \\frac{\\pi}{2}`}</MathInline>.
          Answer: <MathInline>{`\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}`}</MathInline>.
        </p>
        <p><strong>(b)</strong> <MathInline>{`\\arccos(-\\frac{\\sqrt{2}}{2})`}</MathInline></p>
        <p>
          We need <MathInline>{`u`}</MathInline> such that <MathInline>{`\\cos u = -\\frac{\\sqrt{2}}{2}`}</MathInline>
          and <MathInline>{`0 \\leq u \\leq \\pi`}</MathInline>.
          Answer: <MathInline>{`\\arccos(-\\frac{\\sqrt{2}}{2}) = \\frac{3\\pi}{4}`}</MathInline>.
        </p>
        <p><strong>(c)</strong> <MathInline>{`\\arctan(\\sqrt{3})`}</MathInline></p>
        <p>
          We need <MathInline>{`u`}</MathInline> such that <MathInline>{`\\tan u = \\sqrt{3}`}</MathInline>
          and <MathInline>{`-\\frac{\\pi}{2} < u < \\frac{\\pi}{2}`}</MathInline>.
          Answer: <MathInline>{`\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Differentiation with Chain Rule">
        <p>
          Find <MathInline>{`\\frac{d}{dx} \\arcsin(2x)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> By the chain rule:</p>
        <MathBlock>{`\\frac{d}{dx} \\arcsin(2x) = \\frac{1}{\\sqrt{1-(2x)^2}} \\cdot 2 = \\frac{2}{\\sqrt{1-4x^2}}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Differentiation">
        <p>
          Find <MathInline>{`\\frac{d}{dx} \\arctan(e^x)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{d}{dx} \\arctan(e^x) = \\frac{1}{1+(e^x)^2} \\cdot e^x = \\frac{e^x}{1+e^{2x}}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Integration">
        <p>
          Evaluate <MathInline>{`\\int \\frac{dx}{\\sqrt{9-x^2}}`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          This matches <MathInline>{`\\int \\frac{dx}{\\sqrt{a^2-x^2}}`}</MathInline> with <MathInline>{`a = 3`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{dx}{\\sqrt{9-x^2}} = \\arcsin\\frac{x}{3} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Integration">
        <p>
          Evaluate <MathInline>{`\\int \\frac{dx}{4+x^2}`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          This matches <MathInline>{`\\int \\frac{dx}{a^2+x^2}`}</MathInline> with <MathInline>{`a = 2`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{dx}{4+x^2} = \\frac{1}{2}\\arctan\\frac{x}{2} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Completing the Square">
        <p>
          Evaluate <MathInline>{`\\int \\frac{dx}{x^2+4x+5}`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Complete the square in the denominator:</p>
        <MathBlock>{`x^2 + 4x + 5 = (x^2 + 4x + 4) + 1 = (x+2)^2 + 1.`}</MathBlock>
        <p>Let <MathInline>{`u = x + 2`}</MathInline>, so <MathInline>{`du = dx`}</MathInline>:</p>
        <MathBlock>{`\\int \\frac{dx}{(x+2)^2+1} = \\int \\frac{du}{u^2+1} = \\arctan u + C = \\arctan(x+2) + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 7: Integration by Parts">
        <p>
          Evaluate <MathInline>{`\\int \\arcsin x \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = \\arcsin x`}</MathInline> and <MathInline>{`dv = dx`}</MathInline>:
        </p>
        <MathBlock>{`du = \\frac{dx}{\\sqrt{1-x^2}}, \\quad v = x`}</MathBlock>
        <MathBlock>{`\\int \\arcsin x \\, dx = x \\arcsin x - \\int \\frac{x \\, dx}{\\sqrt{1-x^2}}.`}</MathBlock>
        <p>
          For the remaining integral, let <MathInline>{`w = 1 - x^2`}</MathInline>,
          <MathInline>{`dw = -2x \\, dx`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{x \\, dx}{\\sqrt{1-x^2}} = -\\frac{1}{2} \\int w^{-1/2} \\, dw = -\\sqrt{w} + C = -\\sqrt{1-x^2} + C.`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\int \\arcsin x \\, dx = x \\arcsin x + \\sqrt{1-x^2} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 8: Integration by Parts">
        <p>
          Evaluate <MathInline>{`\\int \\arctan x \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = \\arctan x`}</MathInline> and <MathInline>{`dv = dx`}</MathInline>:
        </p>
        <MathBlock>{`du = \\frac{dx}{1+x^2}, \\quad v = x`}</MathBlock>
        <MathBlock>{`\\int \\arctan x \\, dx = x \\arctan x - \\int \\frac{x \\, dx}{1+x^2}.`}</MathBlock>
        <p>
          For the remaining integral, let <MathInline>{`w = 1 + x^2`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{x \\, dx}{1+x^2} = \\frac{1}{2} \\ln(1+x^2) + C.`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\int \\arctan x \\, dx = x \\arctan x - \\frac{1}{2} \\ln(1+x^2) + C.`}</MathBlock>
      </Callout>

      <h2>Definite Integral: Computing π</h2>

      <Callout type="example" title="A Formula for π">
        <p>
          Since <MathInline>{`\\int_0^1 \\frac{dx}{1+x^2} = \\arctan x \\Big|_0^1 = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4}`}</MathInline>:
        </p>
        <MathBlock>{`\\pi = 4 \\int_0^1 \\frac{dx}{1+x^2}.`}</MathBlock>
        <p>
          This integral can be used to compute <MathInline>{`\\pi`}</MathInline> numerically.
        </p>
      </Callout>

      <h2>Graphs of Inverse Trig Functions</h2>

      <Callout type="info" title="Key Features">
        <ul>
          <li>
            <strong>arcsin x:</strong> Domain <MathInline>{`[-1,1]`}</MathInline>, range
            <MathInline>{`[-\\pi/2, \\pi/2]`}</MathInline>, passes through origin, increasing.
          </li>
          <li>
            <strong>arccos x:</strong> Domain <MathInline>{`[-1,1]`}</MathInline>, range
            <MathInline>{`[0, \\pi]`}</MathInline>, passes through <MathInline>{`(1, 0)`}</MathInline>, decreasing.
          </li>
          <li>
            <strong>arctan x:</strong> Domain <MathInline>{`(-\\infty, \\infty)`}</MathInline>, range
            <MathInline>{`(-\\pi/2, \\pi/2)`}</MathInline>, horizontal asymptotes at <MathInline>{`y = \\pm\\pi/2`}</MathInline>.
          </li>
        </ul>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Arcsine:</strong> <MathInline>{`y = \\arcsin x`}</MathInline> means
          <MathInline>{`x = \\sin y`}</MathInline> with <MathInline>{`-\\frac{\\pi}{2} \\leq y \\leq \\frac{\\pi}{2}`}</MathInline>.
        </li>
        <li>
          <strong>Arccosine:</strong> <MathInline>{`y = \\arccos x`}</MathInline> means
          <MathInline>{`x = \\cos y`}</MathInline> with <MathInline>{`0 \\leq y \\leq \\pi`}</MathInline>.
        </li>
        <li>
          <strong>Arctangent:</strong> <MathInline>{`y = \\arctan x`}</MathInline> means
          <MathInline>{`x = \\tan y`}</MathInline> with <MathInline>{`-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}`}</MathInline>.
        </li>
        <li>
          <strong>Key derivatives:</strong>
          <MathInline>{`(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}}`}</MathInline>,
          <MathInline>{`(\\arccos x)' = \\frac{-1}{\\sqrt{1-x^2}}`}</MathInline>,
          <MathInline>{`(\\arctan x)' = \\frac{1}{1+x^2}`}</MathInline>.
        </li>
        <li>
          <strong>Key integrals:</strong>
          <MathInline>{`\\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C`}</MathInline>,
          <MathInline>{`\\int \\frac{dx}{1+x^2} = \\arctan x + C`}</MathInline>.
        </li>
        <li>
          <strong>Relationship:</strong> <MathInline>{`\\arcsin x + \\arccos x = \\frac{\\pi}{2}`}</MathInline>.
        </li>
        <li>
          <strong>Integration by parts:</strong>
          <MathInline>{`\\int \\arcsin x \\, dx = x\\arcsin x + \\sqrt{1-x^2} + C`}</MathInline>,
          <MathInline>{`\\int \\arctan x \\, dx = x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C`}</MathInline>.
        </li>
      </ul>
    </LessonLayout>
  );
}
