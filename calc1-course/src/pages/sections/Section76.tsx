import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
        <p>Let <MathInline>{`\\mathbf{a}`}</MathInline> be a nonzero vector. For any vector <MathInline>{`\\mathbf{b}`}</MathInline>:</p>
        <p><strong>Scalar projection</strong> (component of <MathInline>{`\\mathbf{b}`}</MathInline> along <MathInline>{`\\mathbf{a}`}</MathInline>):</p>
        <MathBlock>{`\\text{comp}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|} = \\|\\mathbf{b}\\|\\cos\\theta`}</MathBlock>
        <p><strong>Vector projection</strong> (of <MathInline>{`\\mathbf{b}`}</MathInline> onto <MathInline>{`\\mathbf{a}`}</MathInline>):</p>
        <MathBlock>{`\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|^2}\\mathbf{a} = \\left(\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{a} \\cdot \\mathbf{a}}\\right)\\mathbf{a}`}</MathBlock>
      </Callout>

      <p>
        The scalar projection is a number (positive if <MathInline>{`\\theta < 90°`}</MathInline>, negative
        if <MathInline>{`\\theta > 90°`}</MathInline>). The vector projection is a vector parallel to <MathInline>{`\\mathbf{a}`}</MathInline>.
      </p>

      <Callout type="example" title="Computing Projections">
        <p>Let <MathInline>{`\\mathbf{a} = (3, 4)`}</MathInline> and <MathInline>{`\\mathbf{b} = (5, 0)`}</MathInline>.</p>
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
        <p>For vectors <MathInline>{`\\mathbf{a} \\neq \\mathbf{0}`}</MathInline> and <MathInline>{`\\mathbf{b}`}</MathInline>:</p>
        <MathBlock>{`\\mathbf{b} = \\mathbf{b}_\\parallel + \\mathbf{b}_\\perp`}</MathBlock>
        <p>where:</p>
        <MathBlock>{`\\mathbf{b}_\\parallel = \\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|^2}\\mathbf{a}`}</MathBlock>
        <MathBlock>{`\\mathbf{b}_\\perp = \\mathbf{b} - \\text{proj}_{\\mathbf{a}}\\mathbf{b}`}</MathBlock>
        <p>
          Here <MathInline>{`\\mathbf{b}_\\parallel`}</MathInline> is parallel to <MathInline>{`\\mathbf{a}`}</MathInline> and <MathInline>{`\\mathbf{b}_\\perp`}</MathInline> is orthogonal to <MathInline>{`\\mathbf{a}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Decomposing a Vector">
        <p>Decompose <MathInline>{`\\mathbf{b} = (7, 1)`}</MathInline> relative to <MathInline>{`\\mathbf{a} = (1, 1)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{a} \\cdot \\mathbf{b} = 7 + 1 = 8, \\quad \\|\\mathbf{a}\\|^2 = 2`}</MathBlock>
        <MathBlock>{`\\mathbf{b}_\\parallel = \\frac{8}{2}(1, 1) = (4, 4)`}</MathBlock>
        <MathBlock>{`\\mathbf{b}_\\perp = (7, 1) - (4, 4) = (3, -3)`}</MathBlock>
        <p>Check orthogonality: <MathInline>{`(4, 4) \\cdot (3, -3) = 12 - 12 = 0`}</MathInline> ✓</p>
        <p>Check sum: <MathInline>{`(4, 4) + (3, -3) = (7, 1) = \\mathbf{b}`}</MathInline> ✓</p>
      </Callout>

      <h2>Projection onto a Line</h2>

      <p>
        The projection of a point onto a line gives the closest point on that line.
      </p>

      <Callout type="definition" title="Projection onto a Line Through the Origin">
        <p>
          Let <MathInline>{`L`}</MathInline> be the line through the origin in the direction of
          vector <MathInline>{`\\mathbf{d}`}</MathInline>. The projection of point <MathInline>{`P`}</MathInline> (with
          position vector <MathInline>{`\\mathbf{p}`}</MathInline>) onto <MathInline>{`L`}</MathInline> is:
        </p>
        <MathBlock>{`\\text{proj}_L P = \\text{proj}_{\\mathbf{d}}\\mathbf{p} = \\frac{\\mathbf{d} \\cdot \\mathbf{p}}{\\|\\mathbf{d}\\|^2}\\mathbf{d}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Closest Point on a Line">
        <p>
          Find the point on the line <MathInline>{`y = 2x`}</MathInline> closest to <MathInline>{`P = (4, 1)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> The line has direction vector <MathInline>{`\\mathbf{d} = (1, 2)`}</MathInline>.</p>
        <MathBlock>{`\\mathbf{p} = (4, 1), \\quad \\mathbf{d} \\cdot \\mathbf{p} = 4 + 2 = 6, \\quad \\|\\mathbf{d}\\|^2 = 5`}</MathBlock>
        <MathBlock>{`\\text{proj}_{\\mathbf{d}}\\mathbf{p} = \\frac{6}{5}(1, 2) = \\left(\\frac{6}{5}, \\frac{12}{5}\\right)`}</MathBlock>
        <p>The closest point is <MathInline>{`\\left(\\frac{6}{5}, \\frac{12}{5}\\right)`}</MathInline>.</p>
      </Callout>

      <h2>Reflection Across a Line</h2>

      <Callout type="definition" title="Reflection Formula">
        <p>
          The reflection of <MathInline>{`\\mathbf{b}`}</MathInline> across the line through the origin with
          direction <MathInline>{`\\mathbf{a}`}</MathInline> is:
        </p>
        <MathBlock>{`\\text{refl}_{\\mathbf{a}}\\mathbf{b} = 2\\,\\text{proj}_{\\mathbf{a}}\\mathbf{b} - \\mathbf{b} = \\frac{2(\\mathbf{a} \\cdot \\mathbf{b})}{\\|\\mathbf{a}\\|^2}\\mathbf{a} - \\mathbf{b}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Reflecting a Vector">
        <p>Reflect <MathInline>{`\\mathbf{b} = (3, 1)`}</MathInline> across the x-axis (direction <MathInline>{`\\mathbf{a} = (1, 0)`}</MathInline>).</p>
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
          For a nonzero vector <MathInline>{`\\mathbf{v} = (v_1, v_2, v_3)`}</MathInline> in <MathInline>{`\\mathbb{R}^3`}</MathInline>,
          let <MathInline>{`\\alpha, \\beta, \\gamma`}</MathInline> be the angles with the positive x, y, z axes. The <strong>direction cosines</strong> are:
        </p>
        <MathBlock>{`\\cos\\alpha = \\frac{v_1}{\\|\\mathbf{v}\\|}, \\quad \\cos\\beta = \\frac{v_2}{\\|\\mathbf{v}\\|}, \\quad \\cos\\gamma = \\frac{v_3}{\\|\\mathbf{v}\\|}`}</MathBlock>
        <p>These satisfy:</p>
        <MathBlock>{`\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Finding Direction Cosines">
        <p>Find the direction cosines of <MathInline>{`\\mathbf{v} = (1, 2, 2)`}</MathInline>.</p>
        <p><strong>Solution:</strong> <MathInline>{`\\|\\mathbf{v}\\| = 3`}</MathInline></p>
        <MathBlock>{`\\cos\\alpha = \\frac{1}{3}, \\quad \\cos\\beta = \\frac{2}{3}, \\quad \\cos\\gamma = \\frac{2}{3}`}</MathBlock>
        <p>Check: <MathInline>{`\\frac{1}{9} + \\frac{4}{9} + \\frac{4}{9} = 1`}</MathInline> ✓</p>
      </Callout>

      <h2>Work as a Dot Product</h2>

      <p>
        In physics, the <strong>work</strong> done by a constant force is a natural application
        of the dot product.
      </p>

      <Callout type="definition" title="Work">
        <p>
          If a constant force <MathInline>{`\\mathbf{F}`}</MathInline> acts on an object as it moves
          along displacement <MathInline>{`\\mathbf{d}`}</MathInline>, the <strong>work</strong> done is:
        </p>
        <MathBlock>{`W = \\mathbf{F} \\cdot \\mathbf{d} = \\|\\mathbf{F}\\| \\|\\mathbf{d}\\| \\cos\\theta`}</MathBlock>
        <p>where <MathInline>{`\\theta`}</MathInline> is the angle between force and displacement.</p>
      </Callout>

      <Callout type="example" title="Computing Work">
        <p>
          A force <MathInline>{`\\mathbf{F} = (3, 4)`}</MathInline> (in Newtons) moves an object
          from <MathInline>{`(1, 2)`}</MathInline> to <MathInline>{`(5, 5)`}</MathInline> (in meters). Find the work done.
        </p>
        <p><strong>Solution:</strong> The displacement is:</p>
        <MathBlock>{`\\mathbf{d} = (5-1, 5-2) = (4, 3)`}</MathBlock>
        <MathBlock>{`W = \\mathbf{F} \\cdot \\mathbf{d} = 3(4) + 4(3) = 12 + 12 = 24 \\text{ Joules}`}</MathBlock>
      </Callout>

      <h2>Angle Between Lines</h2>

      <Callout type="definition" title="Angle Between Two Lines">
        <p>
          The angle between two lines with direction vectors <MathInline>{`\\mathbf{d}_1`}</MathInline> and <MathInline>{`\\mathbf{d}_2`}</MathInline> is
          the acute angle <MathInline>{`\\theta`}</MathInline> satisfying:
        </p>
        <MathBlock>{`\\cos\\theta = \\frac{|\\mathbf{d}_1 \\cdot \\mathbf{d}_2|}{\\|\\mathbf{d}_1\\| \\|\\mathbf{d}_2\\|}`}</MathBlock>
        <p>We use the absolute value to get the acute angle (between 0° and 90°).</p>
      </Callout>

      <Callout type="example" title="Angle Between Two Lines">
        <p>
          Find the angle between the lines <MathInline>{`y = 2x`}</MathInline> and <MathInline>{`y = -\\frac{1}{2}x`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> Direction vectors: <MathInline>{`\\mathbf{d}_1 = (1, 2)`}</MathInline> and <MathInline>{`\\mathbf{d}_2 = (2, -1)`}</MathInline>.</p>
        <MathBlock>{`\\mathbf{d}_1 \\cdot \\mathbf{d}_2 = 2 - 2 = 0`}</MathBlock>
        <p>
          Since the dot product is zero, the lines are perpendicular: <MathInline>{`\\theta = 90°`}</MathInline>.
        </p>
      </Callout>

      <h2>Distance from a Point to a Line</h2>

      <Callout type="theorem" title="Distance Formula">
        <p>
          The distance from point <MathInline>{`P`}</MathInline> (with position vector <MathInline>{`\\mathbf{p}`}</MathInline>) to
          the line through the origin with direction <MathInline>{`\\mathbf{d}`}</MathInline> is:
        </p>
        <MathBlock>{`\\text{dist}(P, L) = \\|\\mathbf{p} - \\text{proj}_{\\mathbf{d}}\\mathbf{p}\\| = \\|\\mathbf{p}_\\perp\\|`}</MathBlock>
        <p>This is the length of the perpendicular component.</p>
      </Callout>

      <Callout type="example" title="Distance to a Line">
        <p>Find the distance from <MathInline>{`P = (4, 1)`}</MathInline> to the line <MathInline>{`y = 2x`}</MathInline>.</p>
        <p><strong>Solution:</strong> From earlier, <MathInline>{`\\mathbf{p}_\\perp = (4, 1) - \\left(\\frac{6}{5}, \\frac{12}{5}\\right) = \\left(\\frac{14}{5}, -\\frac{7}{5}\\right)`}</MathInline>.</p>
        <MathBlock>{`\\text{dist} = \\left\\|\\left(\\frac{14}{5}, -\\frac{7}{5}\\right)\\right\\| = \\frac{1}{5}\\sqrt{196 + 49} = \\frac{1}{5}\\sqrt{245} = \\frac{7\\sqrt{5}}{5}`}</MathBlock>
      </Callout>

      <h2>Properties of Projections</h2>

      <Callout type="theorem" title="Projection Properties">
        <p>For nonzero <MathInline>{`\\mathbf{a}`}</MathInline> and any vectors <MathInline>{`\\mathbf{b}, \\mathbf{c}`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`\\text{proj}_{\\mathbf{a}}(\\mathbf{b} + \\mathbf{c}) = \\text{proj}_{\\mathbf{a}}\\mathbf{b} + \\text{proj}_{\\mathbf{a}}\\mathbf{c}`}</MathInline> (linearity)</li>
          <li><MathInline>{`\\text{proj}_{\\mathbf{a}}(k\\mathbf{b}) = k\\,\\text{proj}_{\\mathbf{a}}\\mathbf{b}`}</MathInline> for scalar <MathInline>{`k`}</MathInline></li>
          <li><MathInline>{`\\text{proj}_{\\mathbf{a}}(\\text{proj}_{\\mathbf{a}}\\mathbf{b}) = \\text{proj}_{\\mathbf{a}}\\mathbf{b}`}</MathInline> (idempotent)</li>
          <li><MathInline>{`\\text{proj}_{c\\mathbf{a}}\\mathbf{b} = \\text{proj}_{\\mathbf{a}}\\mathbf{b}`}</MathInline> for <MathInline>{`c \\neq 0`}</MathInline> (direction only matters)</li>
        </ol>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Scalar projection:</strong> <MathInline>{`\\text{comp}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|}`}</MathInline></p>
        <p><strong>Vector projection:</strong> <MathInline>{`\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|^2}\\mathbf{a}`}</MathInline></p>
        <p><strong>Orthogonal decomposition:</strong> <MathInline>{`\\mathbf{b} = \\mathbf{b}_\\parallel + \\mathbf{b}_\\perp`}</MathInline></p>
        <p><strong>Reflection:</strong> <MathInline>{`\\text{refl}_{\\mathbf{a}}\\mathbf{b} = 2\\,\\text{proj}_{\\mathbf{a}}\\mathbf{b} - \\mathbf{b}`}</MathInline></p>
        <p><strong>Direction cosines:</strong> <MathInline>{`\\cos\\alpha = v_1/\\|\\mathbf{v}\\|`}</MathInline>, etc.</p>
        <p><strong>Work:</strong> <MathInline>{`W = \\mathbf{F} \\cdot \\mathbf{d}`}</MathInline></p>
        <p><strong>Angle between lines:</strong> <MathInline>{`\\cos\\theta = |\\mathbf{d}_1 \\cdot \\mathbf{d}_2|/(\\|\\mathbf{d}_1\\|\\|\\mathbf{d}_2\\|)`}</MathInline></p>
      </Callout>
    </LessonLayout>
  );
}
