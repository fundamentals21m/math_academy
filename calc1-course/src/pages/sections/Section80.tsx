import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section80() {
  return (
    <LessonLayout sectionId={80}>
      <h1>Planes</h1>

      <p>
        A <strong>plane</strong> in <MathInline>{`\\mathbb{R}^3`}</MathInline> is a flat, two-dimensional
        surface that extends infinitely in all directions. While lines are determined by a point
        and a direction, planes are determined by a point and a <strong>normal vector</strong>—a
        vector perpendicular to the plane.
      </p>

      <h2>The Normal Vector</h2>

      <Callout type="definition" title="Normal Vector">
        <p>
          A <strong>normal vector</strong> to a plane is any nonzero vector <MathInline>{`\\mathbf{n}`}</MathInline> that
          is perpendicular to every vector lying in the plane.
        </p>
      </Callout>

      <p>
        If <MathInline>{`\\mathbf{n}`}</MathInline> is normal to a plane, so is any scalar
        multiple <MathInline>{`c\\mathbf{n}`}</MathInline> (for <MathInline>{`c \\neq 0`}</MathInline>). All normal
        vectors to a given plane are parallel to each other.
      </p>

      <h2>Scalar Equation of a Plane</h2>

      <Callout type="theorem" title="Equation of a Plane">
        <p>
          The plane through point <MathInline>{`P_0 = (x_0, y_0, z_0)`}</MathInline> with normal
          vector <MathInline>{`\\mathbf{n} = (a, b, c)`}</MathInline> has equation:
        </p>
        <MathBlock>{`a(x - x_0) + b(y - y_0) + c(z - z_0) = 0`}</MathBlock>
        <p>Or equivalently:</p>
        <MathBlock>{`ax + by + cz = d`}</MathBlock>
        <p>where <MathInline>{`d = ax_0 + by_0 + cz_0 = \\mathbf{n} \\cdot \\mathbf{p}_0`}</MathInline>.</p>
      </Callout>

      <p><strong>Derivation:</strong></p>
      <p>
        A point <MathInline>{`P = (x, y, z)`}</MathInline> is on the plane iff the
        vector <MathInline>{`\\overrightarrow{P_0P}`}</MathInline> is perpendicular to <MathInline>{`\\mathbf{n}`}</MathInline>:
      </p>
      <MathBlock>{`\\mathbf{n} \\cdot \\overrightarrow{P_0P} = 0`}</MathBlock>
      <MathBlock>{`(a, b, c) \\cdot (x - x_0, y - y_0, z - z_0) = 0`}</MathBlock>

      <Callout type="example" title="Finding the Equation">
        <p>
          Find the equation of the plane through <MathInline>{`(1, 2, 3)`}</MathInline> with
          normal vector <MathInline>{`(2, -1, 4)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`2(x - 1) - 1(y - 2) + 4(z - 3) = 0`}</MathBlock>
        <MathBlock>{`2x - 2 - y + 2 + 4z - 12 = 0`}</MathBlock>
        <MathBlock>{`2x - y + 4z = 12`}</MathBlock>
      </Callout>

      <Callout type="info" title="Reading the Normal Vector">
        <p>
          From the equation <MathInline>{`ax + by + cz = d`}</MathInline>, the normal
          vector is <MathInline>{`\\mathbf{n} = (a, b, c)`}</MathInline>—simply read off the coefficients.
        </p>
        <p>
          For example, <MathInline>{`3x - 2y + 5z = 7`}</MathInline> has normal <MathInline>{`(3, -2, 5)`}</MathInline>.
        </p>
      </Callout>

      <h2>Vector Equation of a Plane</h2>

      <Callout type="definition" title="Vector Form">
        <p>
          The plane through <MathInline>{`P_0`}</MathInline> with normal <MathInline>{`\\mathbf{n}`}</MathInline> can be written:
        </p>
        <MathBlock>{`\\mathbf{n} \\cdot (\\mathbf{r} - \\mathbf{p}_0) = 0 \\quad \\text{or} \\quad \\mathbf{n} \\cdot \\mathbf{r} = \\mathbf{n} \\cdot \\mathbf{p}_0`}</MathBlock>
        <p>where <MathInline>{`\\mathbf{r} = (x, y, z)`}</MathInline> is the position vector of a general point.</p>
      </Callout>

      <h2>Parametric Representation</h2>

      <p>
        A plane can also be described parametrically using two direction vectors that lie in the plane.
      </p>

      <Callout type="definition" title="Parametric Form">
        <p>
          The plane through <MathInline>{`P_0`}</MathInline> containing non-parallel
          vectors <MathInline>{`\\mathbf{u}`}</MathInline> and <MathInline>{`\\mathbf{v}`}</MathInline> is:
        </p>
        <MathBlock>{`\\mathbf{r}(s, t) = \\mathbf{p}_0 + s\\mathbf{u} + t\\mathbf{v}, \\quad s, t \\in \\mathbb{R}`}</MathBlock>
      </Callout>

      <h2>Plane Through Three Points</h2>

      <Callout type="theorem" title="Three Points Determine a Plane">
        <p>
          Three non-collinear points <MathInline>{`P_1, P_2, P_3`}</MathInline> determine a unique plane.
          To find its equation:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Form two direction vectors: <MathInline>{`\\mathbf{u} = \\overrightarrow{P_1P_2}`}</MathInline> and <MathInline>{`\\mathbf{v} = \\overrightarrow{P_1P_3}`}</MathInline></li>
          <li>Find a normal: <MathInline>{`\\mathbf{n} = \\mathbf{u} \\times \\mathbf{v}`}</MathInline> (cross product, introduced later)</li>
          <li>Use any of the three points with this normal</li>
        </ol>
      </Callout>

      <Callout type="example" title="Plane Through Three Points">
        <p>
          Find the plane through <MathInline>{`P_1 = (1, 0, 0)`}</MathInline>, <MathInline>{`P_2 = (0, 1, 0)`}</MathInline>, <MathInline>{`P_3 = (0, 0, 1)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{u} = P_2 - P_1 = (-1, 1, 0)`}</MathBlock>
        <MathBlock>{`\\mathbf{v} = P_3 - P_1 = (-1, 0, 1)`}</MathBlock>
        <p>
          These vectors lie in the plane. We need a vector perpendicular to both.
          By inspection or cross product: <MathInline>{`\\mathbf{n} = (1, 1, 1)`}</MathInline> works since:
        </p>
        <MathBlock>{`(1, 1, 1) \\cdot (-1, 1, 0) = -1 + 1 + 0 = 0 \\, \\checkmark`}</MathBlock>
        <MathBlock>{`(1, 1, 1) \\cdot (-1, 0, 1) = -1 + 0 + 1 = 0 \\, \\checkmark`}</MathBlock>
        <p>Using <MathInline>{`P_1 = (1, 0, 0)`}</MathInline>:</p>
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
          <MathInline>{`2x + 4y - 6z = 5`}</MathInline> and <MathInline>{`x + 2y - 3z = 1`}</MathInline> are parallel
          since <MathInline>{`(2, 4, -6) = 2(1, 2, -3)`}</MathInline>.
        </p>
        <p>They are distinct planes (different values of <MathInline>{`d`}</MathInline> after normalizing).</p>
      </Callout>

      <Callout type="definition" title="Perpendicular Planes">
        <p>
          Two planes are <strong>perpendicular</strong> if their normal vectors are perpendicular:
        </p>
        <MathBlock>{`\\mathbf{n}_1 \\cdot \\mathbf{n}_2 = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Perpendicular Planes">
        <p>
          <MathInline>{`x + y = 0`}</MathInline> (normal <MathInline>{`(1, 1, 0)`}</MathInline>) and
          <MathInline>{`x - y + z = 0`}</MathInline> (normal <MathInline>{`(1, -1, 1)`}</MathInline>) are perpendicular:
        </p>
        <MathBlock>{`(1, 1, 0) \\cdot (1, -1, 1) = 1 - 1 + 0 = 0 \\, \\checkmark`}</MathBlock>
      </Callout>

      <h2>Angle Between Planes</h2>

      <Callout type="theorem" title="Angle Between Planes">
        <p>
          The angle <MathInline>{`\\theta`}</MathInline> between two planes with
          normals <MathInline>{`\\mathbf{n}_1`}</MathInline> and <MathInline>{`\\mathbf{n}_2`}</MathInline> satisfies:
        </p>
        <MathBlock>{`\\cos\\theta = \\frac{|\\mathbf{n}_1 \\cdot \\mathbf{n}_2|}{\\|\\mathbf{n}_1\\| \\|\\mathbf{n}_2\\|}`}</MathBlock>
        <p>We use absolute value to get the acute angle between 0° and 90°.</p>
      </Callout>

      <Callout type="example" title="Finding the Angle">
        <p>
          Find the angle between <MathInline>{`x + y + z = 1`}</MathInline> and <MathInline>{`2x - y = 3`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> Normals: <MathInline>{`\\mathbf{n}_1 = (1, 1, 1)`}</MathInline>, <MathInline>{`\\mathbf{n}_2 = (2, -1, 0)`}</MathInline></p>
        <MathBlock>{`\\mathbf{n}_1 \\cdot \\mathbf{n}_2 = 2 - 1 + 0 = 1`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{n}_1\\| = \\sqrt{3}, \\quad \\|\\mathbf{n}_2\\| = \\sqrt{5}`}</MathBlock>
        <MathBlock>{`\\cos\\theta = \\frac{|1|}{\\sqrt{3}\\sqrt{5}} = \\frac{1}{\\sqrt{15}}`}</MathBlock>
        <MathBlock>{`\\theta = \\arccos\\left(\\frac{1}{\\sqrt{15}}\\right) \\approx 75°`}</MathBlock>
      </Callout>

      <h2>Distance from a Point to a Plane</h2>

      <Callout type="theorem" title="Distance Formula">
        <p>
          The distance from point <MathInline>{`Q = (x_1, y_1, z_1)`}</MathInline> to the
          plane <MathInline>{`ax + by + cz = d`}</MathInline> is:
        </p>
        <MathBlock>{`D = \\frac{|ax_1 + by_1 + cz_1 - d|}{\\sqrt{a^2 + b^2 + c^2}}`}</MathBlock>
      </Callout>

      <p><strong>Derivation:</strong></p>
      <p>
        Take any point <MathInline>{`P_0`}</MathInline> on the plane. The distance
        from <MathInline>{`Q`}</MathInline> to the plane is the length of the projection
        of <MathInline>{`\\overrightarrow{P_0Q}`}</MathInline> onto the normal <MathInline>{`\\mathbf{n}`}</MathInline>:
      </p>
      <MathBlock>{`D = \\left|\\text{comp}_{\\mathbf{n}}\\overrightarrow{P_0Q}\\right| = \\frac{|\\mathbf{n} \\cdot \\overrightarrow{P_0Q}|}{\\|\\mathbf{n}\\|}`}</MathBlock>

      <Callout type="example" title="Finding the Distance">
        <p>Find the distance from <MathInline>{`(2, 3, 1)`}</MathInline> to the plane <MathInline>{`x + 2y + 2z = 4`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`D = \\frac{|1(2) + 2(3) + 2(1) - 4|}{\\sqrt{1 + 4 + 4}} = \\frac{|2 + 6 + 2 - 4|}{3} = \\frac{6}{3} = 2`}</MathBlock>
      </Callout>

      <h2>Intersection of Two Planes</h2>

      <p>
        Two non-parallel planes in <MathInline>{`\\mathbb{R}^3`}</MathInline> intersect in a line.
      </p>

      <Callout type="example" title="Line of Intersection">
        <p>Find the line of intersection of <MathInline>{`x + y + z = 1`}</MathInline> and <MathInline>{`x - y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong> From <MathInline>{`x - y = 0`}</MathInline>: <MathInline>{`y = x`}</MathInline>.</p>
        <p>Substituting into the first equation: <MathInline>{`x + x + z = 1`}</MathInline>, so <MathInline>{`z = 1 - 2x`}</MathInline>.</p>
        <p>Let <MathInline>{`x = t`}</MathInline>. Then <MathInline>{`y = t`}</MathInline> and <MathInline>{`z = 1 - 2t`}</MathInline>.</p>
        <p>Parametric equations:</p>
        <MathBlock>{`x = t, \\quad y = t, \\quad z = 1 - 2t`}</MathBlock>
        <p>Vector form: <MathInline>{`\\mathbf{r}(t) = (0, 0, 1) + t(1, 1, -2)`}</MathInline></p>
      </Callout>

      <h2>Special Planes</h2>

      <Callout type="info" title="Coordinate Planes">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>xy-plane:</strong> <MathInline>{`z = 0`}</MathInline> (normal <MathInline>{`(0, 0, 1)`}</MathInline>)</li>
          <li><strong>xz-plane:</strong> <MathInline>{`y = 0`}</MathInline> (normal <MathInline>{`(0, 1, 0)`}</MathInline>)</li>
          <li><strong>yz-plane:</strong> <MathInline>{`x = 0`}</MathInline> (normal <MathInline>{`(1, 0, 0)`}</MathInline>)</li>
        </ul>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Scalar equation:</strong> <MathInline>{`ax + by + cz = d`}</MathInline> with normal <MathInline>{`(a, b, c)`}</MathInline></p>
        <p><strong>Point-normal form:</strong> <MathInline>{`a(x-x_0) + b(y-y_0) + c(z-z_0) = 0`}</MathInline></p>
        <p><strong>Vector form:</strong> <MathInline>{`\\mathbf{n} \\cdot (\\mathbf{r} - \\mathbf{p}_0) = 0`}</MathInline></p>
        <p><strong>Parametric:</strong> <MathInline>{`\\mathbf{r}(s,t) = \\mathbf{p}_0 + s\\mathbf{u} + t\\mathbf{v}`}</MathInline></p>
        <p><strong>Parallel:</strong> <MathInline>{`\\mathbf{n}_1 \\parallel \\mathbf{n}_2`}</MathInline></p>
        <p><strong>Perpendicular:</strong> <MathInline>{`\\mathbf{n}_1 \\cdot \\mathbf{n}_2 = 0`}</MathInline></p>
        <p><strong>Angle:</strong> <MathInline>{`\\cos\\theta = |\\mathbf{n}_1 \\cdot \\mathbf{n}_2|/(\\|\\mathbf{n}_1\\|\\|\\mathbf{n}_2\\|)`}</MathInline></p>
        <p><strong>Distance:</strong> <MathInline>{`D = |ax_1 + by_1 + cz_1 - d|/\\sqrt{a^2+b^2+c^2}`}</MathInline></p>
      </Callout>
    </LessonLayout>
  );
}
