import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section80() {
  return (
    <LessonLayout sectionId={80}>
      <h1>Planes</h1>

      <p>
        A <strong>plane</strong> in <InlineMath>{`\\mathbb{R}^3`}</InlineMath> is a flat, two-dimensional
        surface that extends infinitely in all directions. While lines are determined by a point
        and a direction, planes are determined by a point and a <strong>normal vector</strong>—a
        vector perpendicular to the plane.
      </p>

      <h2>The Normal Vector</h2>

      <Callout type="definition" title="Normal Vector">
        <p>
          A <strong>normal vector</strong> to a plane is any nonzero vector <InlineMath>{`\\mathbf{n}`}</InlineMath> that
          is perpendicular to every vector lying in the plane.
        </p>
      </Callout>

      <p>
        If <InlineMath>{`\\mathbf{n}`}</InlineMath> is normal to a plane, so is any scalar
        multiple <InlineMath>{`c\\mathbf{n}`}</InlineMath> (for <InlineMath>{`c \\neq 0`}</InlineMath>). All normal
        vectors to a given plane are parallel to each other.
      </p>

      <h2>Scalar Equation of a Plane</h2>

      <Callout type="theorem" title="Equation of a Plane">
        <p>
          The plane through point <InlineMath>{`P_0 = (x_0, y_0, z_0)`}</InlineMath> with normal
          vector <InlineMath>{`\\mathbf{n} = (a, b, c)`}</InlineMath> has equation:
        </p>
        <MathBlock>{`a(x - x_0) + b(y - y_0) + c(z - z_0) = 0`}</MathBlock>
        <p>Or equivalently:</p>
        <MathBlock>{`ax + by + cz = d`}</MathBlock>
        <p>where <InlineMath>{`d = ax_0 + by_0 + cz_0 = \\mathbf{n} \\cdot \\mathbf{p}_0`}</InlineMath>.</p>
      </Callout>

      <p><strong>Derivation:</strong></p>
      <p>
        A point <InlineMath>{`P = (x, y, z)`}</InlineMath> is on the plane iff the
        vector <InlineMath>{`\\overrightarrow{P_0P}`}</InlineMath> is perpendicular to <InlineMath>{`\\mathbf{n}`}</InlineMath>:
      </p>
      <MathBlock>{`\\mathbf{n} \\cdot \\overrightarrow{P_0P} = 0`}</MathBlock>
      <MathBlock>{`(a, b, c) \\cdot (x - x_0, y - y_0, z - z_0) = 0`}</MathBlock>

      <Callout type="example" title="Finding the Equation">
        <p>
          Find the equation of the plane through <InlineMath>{`(1, 2, 3)`}</InlineMath> with
          normal vector <InlineMath>{`(2, -1, 4)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`2(x - 1) - 1(y - 2) + 4(z - 3) = 0`}</MathBlock>
        <MathBlock>{`2x - 2 - y + 2 + 4z - 12 = 0`}</MathBlock>
        <MathBlock>{`2x - y + 4z = 12`}</MathBlock>
      </Callout>

      <Callout type="info" title="Reading the Normal Vector">
        <p>
          From the equation <InlineMath>{`ax + by + cz = d`}</InlineMath>, the normal
          vector is <InlineMath>{`\\mathbf{n} = (a, b, c)`}</InlineMath>—simply read off the coefficients.
        </p>
        <p>
          For example, <InlineMath>{`3x - 2y + 5z = 7`}</InlineMath> has normal <InlineMath>{`(3, -2, 5)`}</InlineMath>.
        </p>
      </Callout>

      <h2>Vector Equation of a Plane</h2>

      <Callout type="definition" title="Vector Form">
        <p>
          The plane through <InlineMath>{`P_0`}</InlineMath> with normal <InlineMath>{`\\mathbf{n}`}</InlineMath> can be written:
        </p>
        <MathBlock>{`\\mathbf{n} \\cdot (\\mathbf{r} - \\mathbf{p}_0) = 0 \\quad \\text{or} \\quad \\mathbf{n} \\cdot \\mathbf{r} = \\mathbf{n} \\cdot \\mathbf{p}_0`}</MathBlock>
        <p>where <InlineMath>{`\\mathbf{r} = (x, y, z)`}</InlineMath> is the position vector of a general point.</p>
      </Callout>

      <h2>Parametric Representation</h2>

      <p>
        A plane can also be described parametrically using two direction vectors that lie in the plane.
      </p>

      <Callout type="definition" title="Parametric Form">
        <p>
          The plane through <InlineMath>{`P_0`}</InlineMath> containing non-parallel
          vectors <InlineMath>{`\\mathbf{u}`}</InlineMath> and <InlineMath>{`\\mathbf{v}`}</InlineMath> is:
        </p>
        <MathBlock>{`\\mathbf{r}(s, t) = \\mathbf{p}_0 + s\\mathbf{u} + t\\mathbf{v}, \\quad s, t \\in \\mathbb{R}`}</MathBlock>
      </Callout>

      <h2>Plane Through Three Points</h2>

      <Callout type="theorem" title="Three Points Determine a Plane">
        <p>
          Three non-collinear points <InlineMath>{`P_1, P_2, P_3`}</InlineMath> determine a unique plane.
          To find its equation:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Form two direction vectors: <InlineMath>{`\\mathbf{u} = \\overrightarrow{P_1P_2}`}</InlineMath> and <InlineMath>{`\\mathbf{v} = \\overrightarrow{P_1P_3}`}</InlineMath></li>
          <li>Find a normal: <InlineMath>{`\\mathbf{n} = \\mathbf{u} \\times \\mathbf{v}`}</InlineMath> (cross product, introduced later)</li>
          <li>Use any of the three points with this normal</li>
        </ol>
      </Callout>

      <Callout type="example" title="Plane Through Three Points">
        <p>
          Find the plane through <InlineMath>{`P_1 = (1, 0, 0)`}</InlineMath>, <InlineMath>{`P_2 = (0, 1, 0)`}</InlineMath>, <InlineMath>{`P_3 = (0, 0, 1)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{u} = P_2 - P_1 = (-1, 1, 0)`}</MathBlock>
        <MathBlock>{`\\mathbf{v} = P_3 - P_1 = (-1, 0, 1)`}</MathBlock>
        <p>
          These vectors lie in the plane. We need a vector perpendicular to both.
          By inspection or cross product: <InlineMath>{`\\mathbf{n} = (1, 1, 1)`}</InlineMath> works since:
        </p>
        <MathBlock>{`(1, 1, 1) \\cdot (-1, 1, 0) = -1 + 1 + 0 = 0 \\, \\checkmark`}</MathBlock>
        <MathBlock>{`(1, 1, 1) \\cdot (-1, 0, 1) = -1 + 0 + 1 = 0 \\, \\checkmark`}</MathBlock>
        <p>Using <InlineMath>{`P_1 = (1, 0, 0)`}</InlineMath>:</p>
        <MathBlock>{`1(x - 1) + 1(y - 0) + 1(z - 0) = 0 \\implies x + y + z = 1`}</MathBlock>
      </Callout>

      <h2>Parallel and Perpendicular Planes</h2>

      <Callout type="definition" title="Parallel Planes">
        <p>
          Two planes are <strong>parallel</strong> if their normal vectors are parallel:
        </p>
        <MathBlock>{`\\mathbf{n}_1 = k\\mathbf{n}_2 \\text{ for some scalar } k \\neq 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Parallel Planes">
        <p>
          <InlineMath>{`2x + 4y - 6z = 5`}</InlineMath> and <InlineMath>{`x + 2y - 3z = 1`}</InlineMath> are parallel
          since <InlineMath>{`(2, 4, -6) = 2(1, 2, -3)`}</InlineMath>.
        </p>
        <p>They are distinct planes (different values of <InlineMath>{`d`}</InlineMath> after normalizing).</p>
      </Callout>

      <Callout type="definition" title="Perpendicular Planes">
        <p>
          Two planes are <strong>perpendicular</strong> if their normal vectors are perpendicular:
        </p>
        <MathBlock>{`\\mathbf{n}_1 \\cdot \\mathbf{n}_2 = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Perpendicular Planes">
        <p>
          <InlineMath>{`x + y = 0`}</InlineMath> (normal <InlineMath>{`(1, 1, 0)`}</InlineMath>) and
          <InlineMath>{`x - y + z = 0`}</InlineMath> (normal <InlineMath>{`(1, -1, 1)`}</InlineMath>) are perpendicular:
        </p>
        <MathBlock>{`(1, 1, 0) \\cdot (1, -1, 1) = 1 - 1 + 0 = 0 \\, \\checkmark`}</MathBlock>
      </Callout>

      <h2>Angle Between Planes</h2>

      <Callout type="theorem" title="Angle Between Planes">
        <p>
          The angle <InlineMath>{`\\theta`}</InlineMath> between two planes with
          normals <InlineMath>{`\\mathbf{n}_1`}</InlineMath> and <InlineMath>{`\\mathbf{n}_2`}</InlineMath> satisfies:
        </p>
        <MathBlock>{`\\cos\\theta = \\frac{|\\mathbf{n}_1 \\cdot \\mathbf{n}_2|}{\\|\\mathbf{n}_1\\| \\|\\mathbf{n}_2\\|}`}</MathBlock>
        <p>We use absolute value to get the acute angle between 0° and 90°.</p>
      </Callout>

      <Callout type="example" title="Finding the Angle">
        <p>
          Find the angle between <InlineMath>{`x + y + z = 1`}</InlineMath> and <InlineMath>{`2x - y = 3`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Normals: <InlineMath>{`\\mathbf{n}_1 = (1, 1, 1)`}</InlineMath>, <InlineMath>{`\\mathbf{n}_2 = (2, -1, 0)`}</InlineMath></p>
        <MathBlock>{`\\mathbf{n}_1 \\cdot \\mathbf{n}_2 = 2 - 1 + 0 = 1`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{n}_1\\| = \\sqrt{3}, \\quad \\|\\mathbf{n}_2\\| = \\sqrt{5}`}</MathBlock>
        <MathBlock>{`\\cos\\theta = \\frac{|1|}{\\sqrt{3}\\sqrt{5}} = \\frac{1}{\\sqrt{15}}`}</MathBlock>
        <MathBlock>{`\\theta = \\arccos\\left(\\frac{1}{\\sqrt{15}}\\right) \\approx 75°`}</MathBlock>
      </Callout>

      <h2>Distance from a Point to a Plane</h2>

      <Callout type="theorem" title="Distance Formula">
        <p>
          The distance from point <InlineMath>{`Q = (x_1, y_1, z_1)`}</InlineMath> to the
          plane <InlineMath>{`ax + by + cz = d`}</InlineMath> is:
        </p>
        <MathBlock>{`D = \\frac{|ax_1 + by_1 + cz_1 - d|}{\\sqrt{a^2 + b^2 + c^2}}`}</MathBlock>
      </Callout>

      <p><strong>Derivation:</strong></p>
      <p>
        Take any point <InlineMath>{`P_0`}</InlineMath> on the plane. The distance
        from <InlineMath>{`Q`}</InlineMath> to the plane is the length of the projection
        of <InlineMath>{`\\overrightarrow{P_0Q}`}</InlineMath> onto the normal <InlineMath>{`\\mathbf{n}`}</InlineMath>:
      </p>
      <MathBlock>{`D = \\left|\\text{comp}_{\\mathbf{n}}\\overrightarrow{P_0Q}\\right| = \\frac{|\\mathbf{n} \\cdot \\overrightarrow{P_0Q}|}{\\|\\mathbf{n}\\|}`}</MathBlock>

      <Callout type="example" title="Finding the Distance">
        <p>Find the distance from <InlineMath>{`(2, 3, 1)`}</InlineMath> to the plane <InlineMath>{`x + 2y + 2z = 4`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`D = \\frac{|1(2) + 2(3) + 2(1) - 4|}{\\sqrt{1 + 4 + 4}} = \\frac{|2 + 6 + 2 - 4|}{3} = \\frac{6}{3} = 2`}</MathBlock>
      </Callout>

      <h2>Intersection of Two Planes</h2>

      <p>
        Two non-parallel planes in <InlineMath>{`\\mathbb{R}^3`}</InlineMath> intersect in a line.
      </p>

      <Callout type="example" title="Line of Intersection">
        <p>Find the line of intersection of <InlineMath>{`x + y + z = 1`}</InlineMath> and <InlineMath>{`x - y = 0`}</InlineMath>.</p>
        <p><strong>Solution:</strong> From <InlineMath>{`x - y = 0`}</InlineMath>: <InlineMath>{`y = x`}</InlineMath>.</p>
        <p>Substituting into the first equation: <InlineMath>{`x + x + z = 1`}</InlineMath>, so <InlineMath>{`z = 1 - 2x`}</InlineMath>.</p>
        <p>Let <InlineMath>{`x = t`}</InlineMath>. Then <InlineMath>{`y = t`}</InlineMath> and <InlineMath>{`z = 1 - 2t`}</InlineMath>.</p>
        <p>Parametric equations:</p>
        <MathBlock>{`x = t, \\quad y = t, \\quad z = 1 - 2t`}</MathBlock>
        <p>Vector form: <InlineMath>{`\\mathbf{r}(t) = (0, 0, 1) + t(1, 1, -2)`}</InlineMath></p>
      </Callout>

      <h2>Special Planes</h2>

      <Callout type="info" title="Coordinate Planes">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>xy-plane:</strong> <InlineMath>{`z = 0`}</InlineMath> (normal <InlineMath>{`(0, 0, 1)`}</InlineMath>)</li>
          <li><strong>xz-plane:</strong> <InlineMath>{`y = 0`}</InlineMath> (normal <InlineMath>{`(0, 1, 0)`}</InlineMath>)</li>
          <li><strong>yz-plane:</strong> <InlineMath>{`x = 0`}</InlineMath> (normal <InlineMath>{`(1, 0, 0)`}</InlineMath>)</li>
        </ul>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Scalar equation:</strong> <InlineMath>{`ax + by + cz = d`}</InlineMath> with normal <InlineMath>{`(a, b, c)`}</InlineMath></p>
        <p><strong>Point-normal form:</strong> <InlineMath>{`a(x-x_0) + b(y-y_0) + c(z-z_0) = 0`}</InlineMath></p>
        <p><strong>Vector form:</strong> <InlineMath>{`\\mathbf{n} \\cdot (\\mathbf{r} - \\mathbf{p}_0) = 0`}</InlineMath></p>
        <p><strong>Parametric:</strong> <InlineMath>{`\\mathbf{r}(s,t) = \\mathbf{p}_0 + s\\mathbf{u} + t\\mathbf{v}`}</InlineMath></p>
        <p><strong>Parallel:</strong> <InlineMath>{`\\mathbf{n}_1 \\parallel \\mathbf{n}_2`}</InlineMath></p>
        <p><strong>Perpendicular:</strong> <InlineMath>{`\\mathbf{n}_1 \\cdot \\mathbf{n}_2 = 0`}</InlineMath></p>
        <p><strong>Angle:</strong> <InlineMath>{`\\cos\\theta = |\\mathbf{n}_1 \\cdot \\mathbf{n}_2|/(\\|\\mathbf{n}_1\\|\\|\\mathbf{n}_2\\|)`}</InlineMath></p>
        <p><strong>Distance:</strong> <InlineMath>{`D = |ax_1 + by_1 + cz_1 - d|/\\sqrt{a^2+b^2+c^2}`}</InlineMath></p>
      </Callout>
    </LessonLayout>
  );
}
