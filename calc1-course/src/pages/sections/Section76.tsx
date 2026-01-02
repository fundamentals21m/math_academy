import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section76() {
  return (
    <LessonLayout sectionId={76}>
      <h1>Projections and Angles</h1>

      <p>
        Building on our understanding of the dot product, we now explore <strong>projections</strong> in
        greater depth. Projections decompose vectors into components, reveal geometric relationships,
        and have important applications in physics and geometry.
      </p>

      <h2>Orthogonal Projection Revisited</h2>

      <Callout type="definition" title="Vector and Scalar Projection">
        <p>Let <InlineMath>{`\\mathbf{a}`}</InlineMath> be a nonzero vector. For any vector <InlineMath>{`\\mathbf{b}`}</InlineMath>:</p>
        <p><strong>Scalar projection</strong> (component of <InlineMath>{`\\mathbf{b}`}</InlineMath> along <InlineMath>{`\\mathbf{a}`}</InlineMath>):</p>
        <MathBlock>{`\\text{comp}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|} = \\|\\mathbf{b}\\|\\cos\\theta`}</MathBlock>
        <p><strong>Vector projection</strong> (of <InlineMath>{`\\mathbf{b}`}</InlineMath> onto <InlineMath>{`\\mathbf{a}`}</InlineMath>):</p>
        <MathBlock>{`\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|^2}\\mathbf{a} = \\left(\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{a} \\cdot \\mathbf{a}}\\right)\\mathbf{a}`}</MathBlock>
      </Callout>

      <p>
        The scalar projection is a number (positive if <InlineMath>{`\\theta < 90°`}</InlineMath>, negative
        if <InlineMath>{`\\theta > 90°`}</InlineMath>). The vector projection is a vector parallel to <InlineMath>{`\\mathbf{a}`}</InlineMath>.
      </p>

      <Callout type="example" title="Computing Projections">
        <p>Let <InlineMath>{`\\mathbf{a} = (3, 4)`}</InlineMath> and <InlineMath>{`\\mathbf{b} = (5, 0)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{a} \\cdot \\mathbf{b} = 15, \\quad \\|\\mathbf{a}\\| = 5, \\quad \\|\\mathbf{a}\\|^2 = 25`}</MathBlock>
        <p>Scalar projection:</p>
        <MathBlock>{`\\text{comp}_{\\mathbf{a}}\\mathbf{b} = \\frac{15}{5} = 3`}</MathBlock>
        <p>Vector projection:</p>
        <MathBlock>{`\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{15}{25}(3, 4) = \\frac{3}{5}(3, 4) = \\left(\\frac{9}{5}, \\frac{12}{5}\\right)`}</MathBlock>
      </Callout>

      <h2>Orthogonal Decomposition</h2>

      <p>
        Any vector can be written as the sum of two orthogonal components: one parallel
        to a given direction and one perpendicular to it.
      </p>

      <Callout type="theorem" title="Orthogonal Decomposition">
        <p>For vectors <InlineMath>{`\\mathbf{a} \\neq \\mathbf{0}`}</InlineMath> and <InlineMath>{`\\mathbf{b}`}</InlineMath>:</p>
        <MathBlock>{`\\mathbf{b} = \\mathbf{b}_\\parallel + \\mathbf{b}_\\perp`}</MathBlock>
        <p>where:</p>
        <MathBlock>{`\\mathbf{b}_\\parallel = \\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|^2}\\mathbf{a}`}</MathBlock>
        <MathBlock>{`\\mathbf{b}_\\perp = \\mathbf{b} - \\text{proj}_{\\mathbf{a}}\\mathbf{b}`}</MathBlock>
        <p>
          Here <InlineMath>{`\\mathbf{b}_\\parallel`}</InlineMath> is parallel to <InlineMath>{`\\mathbf{a}`}</InlineMath> and <InlineMath>{`\\mathbf{b}_\\perp`}</InlineMath> is orthogonal to <InlineMath>{`\\mathbf{a}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Decomposing a Vector">
        <p>Decompose <InlineMath>{`\\mathbf{b} = (7, 1)`}</InlineMath> relative to <InlineMath>{`\\mathbf{a} = (1, 1)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{a} \\cdot \\mathbf{b} = 7 + 1 = 8, \\quad \\|\\mathbf{a}\\|^2 = 2`}</MathBlock>
        <MathBlock>{`\\mathbf{b}_\\parallel = \\frac{8}{2}(1, 1) = (4, 4)`}</MathBlock>
        <MathBlock>{`\\mathbf{b}_\\perp = (7, 1) - (4, 4) = (3, -3)`}</MathBlock>
        <p>Check orthogonality: <InlineMath>{`(4, 4) \\cdot (3, -3) = 12 - 12 = 0`}</InlineMath> ✓</p>
        <p>Check sum: <InlineMath>{`(4, 4) + (3, -3) = (7, 1) = \\mathbf{b}`}</InlineMath> ✓</p>
      </Callout>

      <h2>Projection onto a Line</h2>

      <p>
        The projection of a point onto a line gives the closest point on that line.
      </p>

      <Callout type="definition" title="Projection onto a Line Through the Origin">
        <p>
          Let <InlineMath>{`L`}</InlineMath> be the line through the origin in the direction of
          vector <InlineMath>{`\\mathbf{d}`}</InlineMath>. The projection of point <InlineMath>{`P`}</InlineMath> (with
          position vector <InlineMath>{`\\mathbf{p}`}</InlineMath>) onto <InlineMath>{`L`}</InlineMath> is:
        </p>
        <MathBlock>{`\\text{proj}_L P = \\text{proj}_{\\mathbf{d}}\\mathbf{p} = \\frac{\\mathbf{d} \\cdot \\mathbf{p}}{\\|\\mathbf{d}\\|^2}\\mathbf{d}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Closest Point on a Line">
        <p>
          Find the point on the line <InlineMath>{`y = 2x`}</InlineMath> closest to <InlineMath>{`P = (4, 1)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> The line has direction vector <InlineMath>{`\\mathbf{d} = (1, 2)`}</InlineMath>.</p>
        <MathBlock>{`\\mathbf{p} = (4, 1), \\quad \\mathbf{d} \\cdot \\mathbf{p} = 4 + 2 = 6, \\quad \\|\\mathbf{d}\\|^2 = 5`}</MathBlock>
        <MathBlock>{`\\text{proj}_{\\mathbf{d}}\\mathbf{p} = \\frac{6}{5}(1, 2) = \\left(\\frac{6}{5}, \\frac{12}{5}\\right)`}</MathBlock>
        <p>The closest point is <InlineMath>{`\\left(\\frac{6}{5}, \\frac{12}{5}\\right)`}</InlineMath>.</p>
      </Callout>

      <h2>Reflection Across a Line</h2>

      <Callout type="definition" title="Reflection Formula">
        <p>
          The reflection of <InlineMath>{`\\mathbf{b}`}</InlineMath> across the line through the origin with
          direction <InlineMath>{`\\mathbf{a}`}</InlineMath> is:
        </p>
        <MathBlock>{`\\text{refl}_{\\mathbf{a}}\\mathbf{b} = 2\\,\\text{proj}_{\\mathbf{a}}\\mathbf{b} - \\mathbf{b} = \\frac{2(\\mathbf{a} \\cdot \\mathbf{b})}{\\|\\mathbf{a}\\|^2}\\mathbf{a} - \\mathbf{b}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Reflecting a Vector">
        <p>Reflect <InlineMath>{`\\mathbf{b} = (3, 1)`}</InlineMath> across the x-axis (direction <InlineMath>{`\\mathbf{a} = (1, 0)`}</InlineMath>).</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{3}{1}(1, 0) = (3, 0)`}</MathBlock>
        <MathBlock>{`\\text{refl}_{\\mathbf{a}}\\mathbf{b} = 2(3, 0) - (3, 1) = (6, 0) - (3, 1) = (3, -1)`}</MathBlock>
        <p>The reflection flips the y-component, as expected.</p>
      </Callout>

      <h2>Direction Cosines</h2>

      <p>
        The direction of a vector can be specified by the angles it makes with the coordinate axes.
      </p>

      <Callout type="definition" title="Direction Cosines">
        <p>
          For a nonzero vector <InlineMath>{`\\mathbf{v} = (v_1, v_2, v_3)`}</InlineMath> in <InlineMath>{`\\mathbb{R}^3`}</InlineMath>,
          let <InlineMath>{`\\alpha, \\beta, \\gamma`}</InlineMath> be the angles with the positive x, y, z axes. The <strong>direction cosines</strong> are:
        </p>
        <MathBlock>{`\\cos\\alpha = \\frac{v_1}{\\|\\mathbf{v}\\|}, \\quad \\cos\\beta = \\frac{v_2}{\\|\\mathbf{v}\\|}, \\quad \\cos\\gamma = \\frac{v_3}{\\|\\mathbf{v}\\|}`}</MathBlock>
        <p>These satisfy:</p>
        <MathBlock>{`\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Finding Direction Cosines">
        <p>Find the direction cosines of <InlineMath>{`\\mathbf{v} = (1, 2, 2)`}</InlineMath>.</p>
        <p><strong>Solution:</strong> <InlineMath>{`\\|\\mathbf{v}\\| = 3`}</InlineMath></p>
        <MathBlock>{`\\cos\\alpha = \\frac{1}{3}, \\quad \\cos\\beta = \\frac{2}{3}, \\quad \\cos\\gamma = \\frac{2}{3}`}</MathBlock>
        <p>Check: <InlineMath>{`\\frac{1}{9} + \\frac{4}{9} + \\frac{4}{9} = 1`}</InlineMath> ✓</p>
      </Callout>

      <h2>Work as a Dot Product</h2>

      <p>
        In physics, the <strong>work</strong> done by a constant force is a natural application
        of the dot product.
      </p>

      <Callout type="definition" title="Work">
        <p>
          If a constant force <InlineMath>{`\\mathbf{F}`}</InlineMath> acts on an object as it moves
          along displacement <InlineMath>{`\\mathbf{d}`}</InlineMath>, the <strong>work</strong> done is:
        </p>
        <MathBlock>{`W = \\mathbf{F} \\cdot \\mathbf{d} = \\|\\mathbf{F}\\| \\|\\mathbf{d}\\| \\cos\\theta`}</MathBlock>
        <p>where <InlineMath>{`\\theta`}</InlineMath> is the angle between force and displacement.</p>
      </Callout>

      <Callout type="example" title="Computing Work">
        <p>
          A force <InlineMath>{`\\mathbf{F} = (3, 4)`}</InlineMath> (in Newtons) moves an object
          from <InlineMath>{`(1, 2)`}</InlineMath> to <InlineMath>{`(5, 5)`}</InlineMath> (in meters). Find the work done.
        </p>
        <p><strong>Solution:</strong> The displacement is:</p>
        <MathBlock>{`\\mathbf{d} = (5-1, 5-2) = (4, 3)`}</MathBlock>
        <MathBlock>{`W = \\mathbf{F} \\cdot \\mathbf{d} = 3(4) + 4(3) = 12 + 12 = 24 \\text{ Joules}`}</MathBlock>
      </Callout>

      <h2>Angle Between Lines</h2>

      <Callout type="definition" title="Angle Between Two Lines">
        <p>
          The angle between two lines with direction vectors <InlineMath>{`\\mathbf{d}_1`}</InlineMath> and <InlineMath>{`\\mathbf{d}_2`}</InlineMath> is
          the acute angle <InlineMath>{`\\theta`}</InlineMath> satisfying:
        </p>
        <MathBlock>{`\\cos\\theta = \\frac{|\\mathbf{d}_1 \\cdot \\mathbf{d}_2|}{\\|\\mathbf{d}_1\\| \\|\\mathbf{d}_2\\|}`}</MathBlock>
        <p>We use the absolute value to get the acute angle (between 0° and 90°).</p>
      </Callout>

      <Callout type="example" title="Angle Between Two Lines">
        <p>
          Find the angle between the lines <InlineMath>{`y = 2x`}</InlineMath> and <InlineMath>{`y = -\\frac{1}{2}x`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Direction vectors: <InlineMath>{`\\mathbf{d}_1 = (1, 2)`}</InlineMath> and <InlineMath>{`\\mathbf{d}_2 = (2, -1)`}</InlineMath>.</p>
        <MathBlock>{`\\mathbf{d}_1 \\cdot \\mathbf{d}_2 = 2 - 2 = 0`}</MathBlock>
        <p>
          Since the dot product is zero, the lines are perpendicular: <InlineMath>{`\\theta = 90°`}</InlineMath>.
        </p>
      </Callout>

      <h2>Distance from a Point to a Line</h2>

      <Callout type="theorem" title="Distance Formula">
        <p>
          The distance from point <InlineMath>{`P`}</InlineMath> (with position vector <InlineMath>{`\\mathbf{p}`}</InlineMath>) to
          the line through the origin with direction <InlineMath>{`\\mathbf{d}`}</InlineMath> is:
        </p>
        <MathBlock>{`\\text{dist}(P, L) = \\|\\mathbf{p} - \\text{proj}_{\\mathbf{d}}\\mathbf{p}\\| = \\|\\mathbf{p}_\\perp\\|`}</MathBlock>
        <p>This is the length of the perpendicular component.</p>
      </Callout>

      <Callout type="example" title="Distance to a Line">
        <p>Find the distance from <InlineMath>{`P = (4, 1)`}</InlineMath> to the line <InlineMath>{`y = 2x`}</InlineMath>.</p>
        <p><strong>Solution:</strong> From earlier, <InlineMath>{`\\mathbf{p}_\\perp = (4, 1) - \\left(\\frac{6}{5}, \\frac{12}{5}\\right) = \\left(\\frac{14}{5}, -\\frac{7}{5}\\right)`}</InlineMath>.</p>
        <MathBlock>{`\\text{dist} = \\left\\|\\left(\\frac{14}{5}, -\\frac{7}{5}\\right)\\right\\| = \\frac{1}{5}\\sqrt{196 + 49} = \\frac{1}{5}\\sqrt{245} = \\frac{7\\sqrt{5}}{5}`}</MathBlock>
      </Callout>

      <h2>Properties of Projections</h2>

      <Callout type="theorem" title="Projection Properties">
        <p>For nonzero <InlineMath>{`\\mathbf{a}`}</InlineMath> and any vectors <InlineMath>{`\\mathbf{b}, \\mathbf{c}`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`\\text{proj}_{\\mathbf{a}}(\\mathbf{b} + \\mathbf{c}) = \\text{proj}_{\\mathbf{a}}\\mathbf{b} + \\text{proj}_{\\mathbf{a}}\\mathbf{c}`}</InlineMath> (linearity)</li>
          <li><InlineMath>{`\\text{proj}_{\\mathbf{a}}(k\\mathbf{b}) = k\\,\\text{proj}_{\\mathbf{a}}\\mathbf{b}`}</InlineMath> for scalar <InlineMath>{`k`}</InlineMath></li>
          <li><InlineMath>{`\\text{proj}_{\\mathbf{a}}(\\text{proj}_{\\mathbf{a}}\\mathbf{b}) = \\text{proj}_{\\mathbf{a}}\\mathbf{b}`}</InlineMath> (idempotent)</li>
          <li><InlineMath>{`\\text{proj}_{c\\mathbf{a}}\\mathbf{b} = \\text{proj}_{\\mathbf{a}}\\mathbf{b}`}</InlineMath> for <InlineMath>{`c \\neq 0`}</InlineMath> (direction only matters)</li>
        </ol>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Scalar projection:</strong> <InlineMath>{`\\text{comp}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|}`}</InlineMath></p>
        <p><strong>Vector projection:</strong> <InlineMath>{`\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|^2}\\mathbf{a}`}</InlineMath></p>
        <p><strong>Orthogonal decomposition:</strong> <InlineMath>{`\\mathbf{b} = \\mathbf{b}_\\parallel + \\mathbf{b}_\\perp`}</InlineMath></p>
        <p><strong>Reflection:</strong> <InlineMath>{`\\text{refl}_{\\mathbf{a}}\\mathbf{b} = 2\\,\\text{proj}_{\\mathbf{a}}\\mathbf{b} - \\mathbf{b}`}</InlineMath></p>
        <p><strong>Direction cosines:</strong> <InlineMath>{`\\cos\\alpha = v_1/\\|\\mathbf{v}\\|`}</InlineMath>, etc.</p>
        <p><strong>Work:</strong> <InlineMath>{`W = \\mathbf{F} \\cdot \\mathbf{d}`}</InlineMath></p>
        <p><strong>Angle between lines:</strong> <InlineMath>{`\\cos\\theta = |\\mathbf{d}_1 \\cdot \\mathbf{d}_2|/(\\|\\mathbf{d}_1\\|\\|\\mathbf{d}_2\\|)`}</InlineMath></p>
      </Callout>
    </LessonLayout>
  );
}
