import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Chapter IV: Properties of Different Orders</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput IV: De proprietatibus peculiaribus Linearum diversorum ordinum
      </p>

      <p>
        Each order of algebraic curves possesses characteristic properties that distinguish
        it from all other orders. These properties are not merely incidental features but
        reflect deep structural truths about curves of each degree.
      </p>

      <Callout type="info">
        <strong>The Goal:</strong> To identify properties that all curves of a given order
        share, which curves of other orders do not possess. These invariant properties
        allow us to recognize and classify curves without computing explicit equations.
      </Callout>

      <h2>Intersections with Lines</h2>

      <p>
        One of the most fundamental properties relates to how curves intersect straight lines.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Bezout's Principle (avant la lettre)</h3>
        <p className="mb-4">
          A curve of order <InlineMath>n</InlineMath> intersects a straight line in at most
          <InlineMath>n</InlineMath> points.
        </p>
        <MathBlock>{`\\text{Order } n \\text{ curve} \\cap \\text{Line} \\leq n \\text{ points}`}</MathBlock>
      </div>

      <p>
        This principle has immediate consequences:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>A <strong>line</strong> (order 1) intersects any other line in at most 1 point</li>
        <li>A <strong>conic</strong> (order 2) intersects any line in at most 2 points</li>
        <li>A <strong>cubic</strong> (order 3) intersects any line in at most 3 points</li>
      </ul>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Why This Works</p>
        <p>
          If a curve has equation <InlineMath>f(x, y) = 0</InlineMath> of degree <InlineMath>n</InlineMath>,
          and we substitute the parametric form of a line, we get a polynomial in one variable
          of degree at most <InlineMath>n</InlineMath>. Such a polynomial has at most
          <InlineMath>n</InlineMath> roots.
        </p>
      </div>

      <h2>Properties of First-Order Curves (Lines)</h2>

      <p>
        Lines possess unique properties:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong>Determined by two points:</strong> Any two distinct points determine
          exactly one line.
        </li>
        <li>
          <strong>Constant direction:</strong> A line has the same slope at every point.
        </li>
        <li>
          <strong>Single intersection:</strong> Two distinct lines meet in at most one point.
        </li>
        <li>
          <strong>No curvature:</strong> A line has zero curvature everywhere.
        </li>
      </ol>

      <MathBlock>{`\\text{Line through } (x_1, y_1) \\text{ and } (x_2, y_2):`}</MathBlock>
      <MathBlock>{`\\frac{y - y_1}{x - x_1} = \\frac{y_2 - y_1}{x_2 - x_1}`}</MathBlock>

      <h2>Properties of Second-Order Curves (Conics)</h2>

      <p>
        Conic sections share remarkable properties:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Five Points Determine</h4>
          <p className="text-dark-300">
            Through any five points (no three collinear), there passes exactly one conic.
            This matches the 6 coefficients minus 1 for scaling.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Diameters</h4>
          <p className="text-dark-300">
            Every conic has <strong>diameters</strong>: lines that bisect all parallel
            chords. This property is unique to second-order curves.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-purple-400 font-semibold mb-2">Tangent Lines</h4>
          <p className="text-dark-300">
            From any external point, exactly two tangent lines can be drawn to a conic
            (counting multiplicities).
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Pole and Polar</h4>
          <p className="text-dark-300">
            Every point has a unique polar line with respect to a conic, establishing
            a beautiful duality.
          </p>
        </div>
      </div>

      <Callout type="success">
        <strong>The Diameter Property:</strong> If <InlineMath>CD</InlineMath> is a diameter
        of a conic, then all chords parallel to the tangent at <InlineMath>C</InlineMath>
        (or <InlineMath>D</InlineMath>) are bisected by <InlineMath>CD</InlineMath>.
      </Callout>

      <h2>Properties of Third-Order Curves (Cubics)</h2>

      <p>
        Cubic curves exhibit more complex behavior:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong>Nine points determine:</strong> Through any nine points in general
          position passes exactly one cubic curve.
        </li>
        <li>
          <strong>Inflection points:</strong> A general cubic has exactly 3 real inflection
          points, all collinear.
        </li>
        <li>
          <strong>Three tangents from external point:</strong> From a general external
          point, three tangents can be drawn to a cubic.
        </li>
        <li>
          <strong>No diameters:</strong> Unlike conics, general cubics do not possess
          diameters in the classical sense.
        </li>
      </ul>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Famous Cubic: The Folium of Descartes</p>
        <MathBlock>{`x^3 + y^3 = 3axy`}</MathBlock>
        <p className="mt-2">
          This curve has a loop, a node at the origin, and asymptotic behavior—features
          impossible for conics.
        </p>
      </div>

      <h2>The Principle of Continuity</h2>

      <p>
        Euler emphasizes a principle that would later be formalized: properties that hold
        for general curves of an order continue to hold in limiting cases, properly interpreted.
      </p>

      <MathBlock>{`\\text{Ellipse} \\xrightarrow{b \\to \\infty} \\text{Parabola} \\xrightarrow{} \\text{Hyperbola}`}</MathBlock>

      <p>
        As parameters vary continuously, conic sections transform into one another, yet
        remain second-order curves throughout.
      </p>

      <h2>Number of Independent Conditions</h2>

      <p>
        A curve of order <InlineMath>n</InlineMath> is determined by:
      </p>

      <MathBlock>{`\\frac{(n+1)(n+2)}{2} - 1 = \\frac{n(n+3)}{2} \\text{ conditions}`}</MathBlock>

      <p>
        We subtract 1 because the equation can be multiplied by any nonzero constant
        without changing the curve.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Conditions by Order</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="pb-2">Order</th>
              <th className="pb-2">Conditions</th>
              <th className="pb-2">Points to Determine</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">1 (Line)</td>
              <td>2</td>
              <td>2 points</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">2 (Conic)</td>
              <td>5</td>
              <td>5 points</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">3 (Cubic)</td>
              <td>9</td>
              <td>9 points</td>
            </tr>
            <tr>
              <td className="py-2">4 (Quartic)</td>
              <td>14</td>
              <td>14 points</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning">
        <strong>Caveat:</strong> The points must be in "general position"—no unexpected
        alignments or coincidences. Three collinear points, for instance, cannot uniquely
        determine a conic.
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Each order of algebraic curves has distinctive
        properties: lines are determined by 2 points and have constant slope; conics are
        determined by 5 points and possess diameters; cubics are determined by 9 points
        and have inflection behavior. These properties provide powerful tools for recognizing
        and analyzing curves without explicit computation.
      </Callout>
    </LessonLayout>
  );
}
