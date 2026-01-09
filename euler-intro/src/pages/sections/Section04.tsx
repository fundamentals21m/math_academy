import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Chapter V: Lines of the Second Order</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput V: De Lineis secundi ordinis
      </p>

      <p>
        We now begin our systematic study of <strong>second-order curves</strong>, also known
        as <strong>conic sections</strong>. These curves—circles, ellipses, parabolas, and
        hyperbolas—are among the most important in all of mathematics, appearing throughout
        physics, engineering, and astronomy.
      </p>

      <Callout type="info">
        <strong>Historical Note:</strong> The Greeks studied conic sections as early as
        350 BCE (Menaechmus), but it was only with analytic geometry that their full
        algebraic structure became clear. Euler's treatment unifies all conics under
        a single quadratic equation.
      </Callout>

      <h2>The General Second-Degree Equation</h2>

      <p>
        Every curve of the second order is represented by an equation of the form:
      </p>

      <MathBlock>{`\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0`}</MathBlock>

      <p>
        With six coefficients (only five being essential since we can divide by any
        nonzero coefficient), this equation encompasses all possible conics.
      </p>

      <h2>Solving for the Ordinate</h2>

      <p>
        Euler's approach is to solve this equation for <InlineMath>y</InlineMath> in terms
        of <InlineMath>x</InlineMath>. Treating the equation as quadratic in <InlineMath>y</InlineMath>:
      </p>

      <MathBlock>{`\\gamma y^2 + (\\beta x + \\varepsilon)y + (\\alpha x^2 + \\delta x + \\zeta) = 0`}</MathBlock>

      <p>
        Using the quadratic formula:
      </p>

      <MathBlock>{`y = \\frac{-(\\beta x + \\varepsilon) \\pm \\sqrt{(\\beta x + \\varepsilon)^2 - 4\\gamma(\\alpha x^2 + \\delta x + \\zeta)}}{2\\gamma}`}</MathBlock>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Key Observation</h3>
        <p>
          For each value of <InlineMath>x</InlineMath>, there are generally <strong>two</strong>
          values of <InlineMath>y</InlineMath> (from the <InlineMath>\pm</InlineMath>).
          This reflects the fact that a vertical line typically intersects a conic in two points.
        </p>
      </div>

      <h2>The Sum and Product of Roots</h2>

      <p>
        If the two ordinate values are <InlineMath>y_1</InlineMath> and <InlineMath>y_2</InlineMath>
        (the two roots for a given <InlineMath>x</InlineMath>), then by Vieta's formulas:
      </p>

      <MathBlock>{`y_1 + y_2 = -\\frac{\\beta x + \\varepsilon}{\\gamma}`}</MathBlock>
      <MathBlock>{`y_1 \\cdot y_2 = \\frac{\\alpha x^2 + \\delta x + \\zeta}{\\gamma}`}</MathBlock>

      <p>
        The sum formula reveals something remarkable: it's <strong>linear</strong> in
        <InlineMath>x</InlineMath>. This leads to the theory of diameters.
      </p>

      <h2>The Diameter Property</h2>

      <p>
        Since <InlineMath>{`y_1 + y_2 = -\\frac{\\beta x + \\varepsilon}{\\gamma}`}</InlineMath>,
        the midpoint of the two ordinates has <InlineMath>y</InlineMath>-coordinate:
      </p>

      <MathBlock>{`\\frac{y_1 + y_2}{2} = -\\frac{\\beta x + \\varepsilon}{2\\gamma}`}</MathBlock>

      <p>
        This is a <strong>linear function of x</strong>! Therefore, the locus of midpoints
        of vertical chords is a <strong>straight line</strong>—called a <strong>diameter</strong>.
      </p>

      <Callout type="success">
        <strong>Diameter Theorem:</strong> In any conic section, the midpoints of all
        parallel chords lie on a straight line (the diameter conjugate to those chords).
      </Callout>

      <h2>Properties of the Product of Roots</h2>

      <p>
        The product <InlineMath>{`y_1 \\cdot y_2 = \\frac{\\alpha x^2 + \\delta x + \\zeta}{\\gamma}`}</InlineMath>
        is quadratic in <InlineMath>x</InlineMath>. This expression:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Is positive when both roots are real and have the same sign</li>
        <li>Is negative when the roots have opposite signs (curve crosses the axis)</li>
        <li>Equals zero when the curve meets the axis (<InlineMath>y = 0</InlineMath>)</li>
      </ul>

      <p>
        Setting <InlineMath>y_1 \cdot y_2 = 0</InlineMath> gives:
      </p>

      <MathBlock>{`\\alpha x^2 + \\delta x + \\zeta = 0`}</MathBlock>

      <p>
        The roots of this quadratic are the <InlineMath>x</InlineMath>-intercepts of the conic.
      </p>

      <h2>When the Curve Meets the Axis</h2>

      <p>
        Let the conic cross the <InlineMath>x</InlineMath>-axis at points <InlineMath>E</InlineMath>
        and <InlineMath>F</InlineMath>, with <InlineMath>x</InlineMath>-coordinates
        <InlineMath>x_E</InlineMath> and <InlineMath>x_F</InlineMath>. Then:
      </p>

      <MathBlock>{`\\alpha x^2 + \\delta x + \\zeta = \\alpha(x - x_E)(x - x_F)`}</MathBlock>

      <p>
        The product of ordinates becomes:
      </p>

      <MathBlock>{`y_1 \\cdot y_2 = \\frac{\\alpha}{\\gamma}(x - x_E)(x - x_F) = \\frac{\\alpha}{\\gamma} \\cdot PE \\cdot PF`}</MathBlock>

      <p>
        where <InlineMath>PE</InlineMath> and <InlineMath>PF</InlineMath> are the signed
        distances from point <InlineMath>P</InlineMath> to the intercepts.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">The Chord-Product Property</p>
        <p>
          For any chord <InlineMath>MN</InlineMath> of a conic parallel to the axis,
          the product <InlineMath>PM \cdot PN</InlineMath> equals a constant times
          <InlineMath>PE \cdot PF</InlineMath>. This constant ratio
          <InlineMath>\alpha/\gamma</InlineMath> is independent of which chord we choose.
        </p>
      </div>

      <h2>Tangent Lines</h2>

      <p>
        When the two points <InlineMath>M</InlineMath> and <InlineMath>N</InlineMath>
        coincide (a double root), the line becomes tangent to the conic. At a tangent point:
      </p>

      <MathBlock>{`y_1 = y_2 \\implies (\\beta x + \\varepsilon)^2 = 4\\gamma(\\alpha x^2 + \\delta x + \\zeta)`}</MathBlock>

      <p>
        This discriminant condition determines which points on the conic have horizontal tangents.
      </p>

      <Callout type="info">
        <strong>Tangent Property:</strong> At a point of tangency, the ordinate chord
        shrinks to a single point. The tangent line "touches" the curve at exactly one
        point (counting multiplicity).
      </Callout>

      <h2>The Canonical Form</h2>

      <p>
        By choosing coordinates wisely (using the transformations from Chapter II),
        any conic can be written in a simpler <strong>canonical form</strong>.
        If we take a diameter as the <InlineMath>x</InlineMath>-axis:
      </p>

      <MathBlock>{`y^2 = \\frac{b}{k}(ax - x^2)`}</MathBlock>

      <p>
        Or equivalently, with suitable constants:
      </p>

      <MathBlock>{`y^2 = \\frac{b}{a}x(a - x)`}</MathBlock>

      <p>
        This form reveals the essential geometry: the squared ordinate equals a constant
        times the product of the two segments cut from the diameter.
      </p>

      <Callout type="success">
        <strong>Chapter Summary:</strong> The general second-degree equation encompasses
        all conic sections. By analyzing the sum and product of ordinate values, we discover
        fundamental properties: diameters bisect parallel chords, and the product of intercepts
        satisfies a constant ratio. These algebraic relationships reveal the geometric
        structure underlying all conics.
      </Callout>
    </LessonLayout>
  );
}
