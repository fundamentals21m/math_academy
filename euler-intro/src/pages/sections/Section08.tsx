import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Chapter IX: Properties of Conic Sections</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput IX: De proprietatibus Sectionum conicarum
      </p>

      <p>
        Having classified the conic sections and studied their asymptotic behavior, Euler
        now presents the rich collection of <strong>geometric properties</strong> that
        make these curves so important. These properties have applications throughout
        physics, astronomy, and engineering.
      </p>

      <Callout type="info">
        <strong>The Unity of Conics:</strong> Despite their different appearances, all
        conic sections share fundamental properties arising from their common origin as
        plane sections of a cone.
      </Callout>

      <h2>The Focal Property</h2>

      <p>
        Every non-degenerate conic can be defined by its <strong>foci</strong>:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Ellipse</h4>
          <p className="text-dark-300 text-sm">
            Sum of distances to two foci is constant:
          </p>
          <MathBlock>{`r_1 + r_2 = 2a`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Hyperbola</h4>
          <p className="text-dark-300 text-sm">
            Difference of distances to two foci is constant:
          </p>
          <MathBlock>{`|r_1 - r_2| = 2a`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Parabola</h4>
          <p className="text-dark-300 text-sm">
            Distance to focus equals distance to directrix:
          </p>
          <MathBlock>{`r = d`}</MathBlock>
        </div>
      </div>

      <h2>The Reflective Property</h2>

      <p>
        All conics have remarkable reflective properties involving their foci:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Light and Sound Reflection</h3>
        <ul className="space-y-4">
          <li>
            <strong className="text-emerald-400">Ellipse:</strong> A ray from one focus
            reflects off the ellipse and passes through the other focus. (Whispering
            galleries use this property!)
          </li>
          <li>
            <strong className="text-blue-400">Parabola:</strong> A ray parallel to the
            axis reflects through the focus. (Used in satellite dishes and telescopes)
          </li>
          <li>
            <strong className="text-amber-400">Hyperbola:</strong> A ray aimed at one
            focus reflects as if coming from the other focus.
          </li>
        </ul>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Why This Works</p>
        <p>
          At any point on a conic, the tangent line makes equal angles with the lines
          to the two foci (or, for a parabola, with the line to the focus and the
          line parallel to the axis).
        </p>
      </div>

      <h2>Diameters and Conjugate Diameters</h2>

      <p>
        A <strong>diameter</strong> of a conic is any chord passing through the center.
        For ellipses and hyperbolas:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Every diameter bisects all chords parallel to its <strong>conjugate diameter</strong></li>
        <li>Conjugate diameters are mutual: if <InlineMath>AB</InlineMath> is conjugate to <InlineMath>CD</InlineMath>, then <InlineMath>CD</InlineMath> is conjugate to <InlineMath>AB</InlineMath></li>
        <li>The principal axes are conjugate to each other and are perpendicular</li>
      </ul>

      <MathBlock>{`\\text{For ellipse } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1:`}</MathBlock>
      <MathBlock>{`\\text{If diameter has slope } m, \\text{ conjugate has slope } -\\frac{b^2}{a^2 m}`}</MathBlock>

      <h2>The Chord Properties</h2>

      <p>
        Euler derives beautiful relationships for chords of conics:
      </p>

      <Callout type="success">
        <strong>Chord Product Property:</strong> For any point <InlineMath>P</InlineMath>
        inside an ellipse, if a chord through <InlineMath>P</InlineMath> meets the ellipse
        at <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>, the product
        <InlineMath>PA \cdot PB</InlineMath> has the same value for all chords through
        <InlineMath>P</InlineMath> that are parallel to a fixed direction.
      </Callout>

      <MathBlock>{`\\frac{PA \\cdot PB}{PE \\cdot PF} = \\text{constant}`}</MathBlock>

      <p>
        where <InlineMath>E</InlineMath> and <InlineMath>F</InlineMath> are the intersections
        of any parallel chord with the conic.
      </p>

      <h2>The Tangent Property</h2>

      <p>
        From any external point, exactly two tangent lines can be drawn to a conic
        (counting complex tangents):
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Equation of Tangent</h3>
        <p className="mb-4">
          The tangent to <InlineMath>{`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`}</InlineMath>
          at point <InlineMath>(x_0, y_0)</InlineMath> is:
        </p>
        <MathBlock>{`\\frac{x \\cdot x_0}{a^2} + \\frac{y \\cdot y_0}{b^2} = 1`}</MathBlock>
      </div>

      <h2>Pole and Polar</h2>

      <p>
        Every point <InlineMath>P</InlineMath> in the plane has a corresponding
        <strong> polar line</strong> with respect to a conic, and every line has a
        corresponding <strong>pole</strong>:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>If <InlineMath>P</InlineMath> is outside the conic, the polar is the chord of contact of the two tangents from <InlineMath>P</InlineMath></li>
        <li>If <InlineMath>P</InlineMath> is on the conic, the polar is the tangent at <InlineMath>P</InlineMath></li>
        <li>If <InlineMath>P</InlineMath> is inside the conic, the polar is determined by a limiting process</li>
      </ul>

      <MathBlock>{`\\text{Polar of } (x_0, y_0): \\quad \\frac{x \\cdot x_0}{a^2} + \\frac{y \\cdot y_0}{b^2} = 1`}</MathBlock>

      <Callout type="info">
        <strong>Reciprocity:</strong> If <InlineMath>Q</InlineMath> lies on the polar of
        <InlineMath>P</InlineMath>, then <InlineMath>P</InlineMath> lies on the polar
        of <InlineMath>Q</InlineMath>. This duality is fundamental to projective geometry.
      </Callout>

      <h2>The Eccentricity</h2>

      <p>
        The <strong>eccentricity</strong> <InlineMath>e</InlineMath> measures how much
        a conic deviates from a circle:
      </p>

      <MathBlock>{`e = \\frac{c}{a} = \\frac{\\text{distance from center to focus}}{\\text{semi-major axis}}`}</MathBlock>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Ellipse</h4>
          <MathBlock>{`0 \\leq e < 1`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">Circle: <InlineMath>e = 0</InlineMath></p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Parabola</h4>
          <MathBlock>{`e = 1`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">The boundary case</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Hyperbola</h4>
          <MathBlock>{`e > 1`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">Two branches</p>
        </div>
      </div>

      <h2>The Focus-Directrix Property</h2>

      <p>
        All conics can be characterized uniformly using a focus <InlineMath>F</InlineMath>
        and directrix <InlineMath>\ell</InlineMath>:
      </p>

      <MathBlock>{`\\frac{\\text{distance to focus}}{\\text{distance to directrix}} = e`}</MathBlock>

      <p>
        This gives a unified definition of all three types of conics through a single equation.
      </p>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Conic sections possess a wealth of beautiful
        properties: focal definitions, reflective properties, diameter conjugacy, tangent
        formulas, pole-polar duality, and eccentricity classification. These properties
        find applications in optics (telescopes, antennas), celestial mechanics (planetary
        orbits are conics), and architecture (acoustic design). The unified study of these
        properties reveals the deep mathematical structure underlying these curves.
      </Callout>
    </LessonLayout>
  );
}
