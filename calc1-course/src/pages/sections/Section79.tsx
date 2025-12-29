import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section79() {
  return (
    <LessonLayout sectionId={79}>
      <h1>Lines in n-Space</h1>

      <p>
        In the plane, a line can be described by an equation like <MathInline>{`y = mx + b`}</MathInline> or <MathInline>{`ax + by = c`}</MathInline>.
        In higher dimensions, we need a more flexible approach using <strong>parametric equations</strong> and
        <strong> vector equations</strong>. These representations extend naturally to <MathInline>{`\\mathbb{R}^n`}</MathInline>.
      </p>

      <h2>Vector Equation of a Line</h2>

      <Callout type="definition" title="Line Through a Point with Direction">
        <p>
          A line in <MathInline>{`\\mathbb{R}^n`}</MathInline> passing through point <MathInline>{`P_0`}</MathInline> with
          position vector <MathInline>{`\\mathbf{p}_0`}</MathInline> and parallel to direction
          vector <MathInline>{`\\mathbf{d} \\neq \\mathbf{0}`}</MathInline> is given by:
        </p>
        <MathBlock>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t\\mathbf{d}, \\quad t \\in \\mathbb{R}`}</MathBlock>
        <p>
          As <MathInline>{`t`}</MathInline> varies over all real numbers, <MathInline>{`\\mathbf{r}(t)`}</MathInline> traces
          out every point on the line.
        </p>
      </Callout>

      <Callout type="example" title="Line in ℝ³">
        <p>Find the vector equation of the line through <MathInline>{`(1, 2, 3)`}</MathInline> parallel to <MathInline>{`(2, -1, 4)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}(t) = (1, 2, 3) + t(2, -1, 4) = (1 + 2t, 2 - t, 3 + 4t)`}</MathBlock>
        <p>Some points on this line:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`t = 0`}</MathInline>: <MathInline>{`(1, 2, 3)`}</MathInline></li>
          <li><MathInline>{`t = 1`}</MathInline>: <MathInline>{`(3, 1, 7)`}</MathInline></li>
          <li><MathInline>{`t = -1`}</MathInline>: <MathInline>{`(-1, 3, -1)`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Parametric Equations</h2>

      <p>
        Writing out the components of the vector equation gives <strong>parametric equations</strong>.
      </p>

      <Callout type="definition" title="Parametric Equations">
        <p>
          For a line through <MathInline>{`(x_0, y_0, z_0)`}</MathInline> with direction <MathInline>{`(a, b, c)`}</MathInline>:
        </p>
        <MathBlock>{`x = x_0 + at, \\quad y = y_0 + bt, \\quad z = z_0 + ct`}</MathBlock>
        <p>The parameter <MathInline>{`t`}</MathInline> ranges over <MathInline>{`\\mathbb{R}`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Writing Parametric Equations">
        <p>
          For the line through <MathInline>{`(1, 2, 3)`}</MathInline> with direction <MathInline>{`(2, -1, 4)`}</MathInline>:
        </p>
        <MathBlock>{`x = 1 + 2t, \\quad y = 2 - t, \\quad z = 3 + 4t`}</MathBlock>
      </Callout>

      <h2>Line Through Two Points</h2>

      <Callout type="theorem" title="Line Through Two Points">
        <p>
          The line through points <MathInline>{`P_0`}</MathInline> and <MathInline>{`P_1`}</MathInline> (with position
          vectors <MathInline>{`\\mathbf{p}_0`}</MathInline> and <MathInline>{`\\mathbf{p}_1`}</MathInline>) has the equation:
        </p>
        <MathBlock>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t(\\mathbf{p}_1 - \\mathbf{p}_0) = (1-t)\\mathbf{p}_0 + t\\mathbf{p}_1`}</MathBlock>
        <p>
          The direction vector is <MathInline>{`\\mathbf{d} = \\mathbf{p}_1 - \\mathbf{p}_0`}</MathInline>.
          Note: <MathInline>{`t = 0`}</MathInline> gives <MathInline>{`P_0`}</MathInline> and <MathInline>{`t = 1`}</MathInline> gives <MathInline>{`P_1`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Line Through Two Points">
        <p>Find the parametric equations for the line through <MathInline>{`A = (1, 0, 2)`}</MathInline> and <MathInline>{`B = (4, 3, -1)`}</MathInline>.</p>
        <p><strong>Solution:</strong> The direction vector is:</p>
        <MathBlock>{`\\mathbf{d} = B - A = (4-1, 3-0, -1-2) = (3, 3, -3)`}</MathBlock>
        <p>Using point <MathInline>{`A`}</MathInline>:</p>
        <MathBlock>{`x = 1 + 3t, \\quad y = 3t, \\quad z = 2 - 3t`}</MathBlock>
        <p>Or equivalently with direction <MathInline>{`(1, 1, -1)`}</MathInline> (dividing by 3):</p>
        <MathBlock>{`x = 1 + t, \\quad y = t, \\quad z = 2 - t`}</MathBlock>
      </Callout>

      <h2>Symmetric Equations</h2>

      <p>
        In <MathInline>{`\\mathbb{R}^3`}</MathInline>, if all direction components are nonzero, we can eliminate
        the parameter to get <strong>symmetric equations</strong>.
      </p>

      <Callout type="definition" title="Symmetric Equations">
        <p>
          For a line through <MathInline>{`(x_0, y_0, z_0)`}</MathInline> with direction <MathInline>{`(a, b, c)`}</MathInline> where <MathInline>{`a, b, c \\neq 0`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}`}</MathBlock>
        <p>Each fraction equals the parameter <MathInline>{`t`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Converting to Symmetric Form">
        <p>From parametric: <MathInline>{`x = 1 + 2t, \\; y = 2 - t, \\; z = 3 + 4t`}</MathInline></p>
        <p>Solving each for <MathInline>{`t`}</MathInline>:</p>
        <MathBlock>{`t = \\frac{x-1}{2} = \\frac{y-2}{-1} = \\frac{z-3}{4}`}</MathBlock>
        <p>Symmetric form:</p>
        <MathBlock>{`\\frac{x-1}{2} = \\frac{y-2}{-1} = \\frac{z-3}{4}`}</MathBlock>
      </Callout>

      <Callout type="info" title="When a Component is Zero">
        <p>
          If a direction component is zero, that coordinate is constant along the line.
          For example, if <MathInline>{`c = 0`}</MathInline>, we write:
        </p>
        <MathBlock>{`\\frac{x - x_0}{a} = \\frac{y - y_0}{b}, \\quad z = z_0`}</MathBlock>
      </Callout>

      <h2>Parallel and Identical Lines</h2>

      <Callout type="definition" title="Parallel Lines">
        <p>
          Two lines are <strong>parallel</strong> if their direction vectors are parallel—that is,
          one is a scalar multiple of the other.
        </p>
        <p>
          Lines <MathInline>{`\\mathbf{r}_1(t) = \\mathbf{p}_1 + t\\mathbf{d}_1`}</MathInline> and <MathInline>{`\\mathbf{r}_2(s) = \\mathbf{p}_2 + s\\mathbf{d}_2`}</MathInline> are
          parallel iff <MathInline>{`\\mathbf{d}_1 = k\\mathbf{d}_2`}</MathInline> for some scalar <MathInline>{`k`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Testing if Lines are Parallel">
        <p>Are these lines parallel?</p>
        <p>Line 1: <MathInline>{`\\mathbf{r}(t) = (1, 0, 2) + t(2, 4, -2)`}</MathInline></p>
        <p>Line 2: <MathInline>{`\\mathbf{r}(s) = (0, 1, 1) + s(-1, -2, 1)`}</MathInline></p>
        <p><strong>Solution:</strong> Check if <MathInline>{`(2, 4, -2) = k(-1, -2, 1)`}</MathInline>:</p>
        <MathBlock>{`\\frac{2}{-1} = -2, \\quad \\frac{4}{-2} = -2, \\quad \\frac{-2}{1} = -2`}</MathBlock>
        <p>Yes, <MathInline>{`k = -2`}</MathInline> works. The lines are <strong>parallel</strong>.</p>
      </Callout>

      <p>
        Parallel lines are either <strong>identical</strong> (same line) or <strong>disjoint</strong> (no intersection).
        To check if parallel lines are identical, verify that a point from one lies on the other.
      </p>

      <h2>Intersecting Lines</h2>

      <Callout type="example" title="Finding the Intersection">
        <p>Do these lines intersect?</p>
        <p>Line 1: <MathInline>{`x = 1 + t, \\; y = 2 + 2t, \\; z = 3 + t`}</MathInline></p>
        <p>Line 2: <MathInline>{`x = 2 + s, \\; y = 4 + s, \\; z = 4 + 2s`}</MathInline></p>
        <p><strong>Solution:</strong> Set the coordinates equal (using different parameters!):</p>
        <MathBlock>{`1 + t = 2 + s \\quad \\Rightarrow \\quad t - s = 1`}</MathBlock>
        <MathBlock>{`2 + 2t = 4 + s \\quad \\Rightarrow \\quad 2t - s = 2`}</MathBlock>
        <MathBlock>{`3 + t = 4 + 2s \\quad \\Rightarrow \\quad t - 2s = 1`}</MathBlock>
        <p>From equations 1 and 2: <MathInline>{`t = 1, s = 0`}</MathInline>.</p>
        <p>Check in equation 3: <MathInline>{`1 - 0 = 1`}</MathInline> ✓</p>
        <p>Intersection point: <MathInline>{`(1+1, 2+2, 3+1) = (2, 4, 4)`}</MathInline>.</p>
      </Callout>

      <Callout type="info" title="Skew Lines">
        <p>
          In <MathInline>{`\\mathbb{R}^3`}</MathInline>, two lines that are not parallel and do not intersect
          are called <strong>skew lines</strong>. Skew lines do not exist in <MathInline>{`\\mathbb{R}^2`}</MathInline> but
          are common in 3D.
        </p>
      </Callout>

      <h2>Distance from a Point to a Line</h2>

      <Callout type="theorem" title="Distance Formula">
        <p>
          The distance from point <MathInline>{`Q`}</MathInline> to the line <MathInline>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t\\mathbf{d}`}</MathInline> is:
        </p>
        <MathBlock>{`d = \\|\\mathbf{q} - \\mathbf{p}_0 - \\text{proj}_{\\mathbf{d}}(\\mathbf{q} - \\mathbf{p}_0)\\|`}</MathBlock>
        <p>where <MathInline>{`\\mathbf{q}`}</MathInline> is the position vector of <MathInline>{`Q`}</MathInline>.</p>
        <p>This is the length of the perpendicular from <MathInline>{`Q`}</MathInline> to the line.</p>
      </Callout>

      <Callout type="example" title="Distance to a Line">
        <p>Find the distance from <MathInline>{`Q = (1, 1, 1)`}</MathInline> to the line <MathInline>{`\\mathbf{r}(t) = (0, 0, 0) + t(1, 0, 0)`}</MathInline> (the x-axis).</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{q} - \\mathbf{p}_0 = (1, 1, 1) - (0, 0, 0) = (1, 1, 1)`}</MathBlock>
        <MathBlock>{`\\text{proj}_{\\mathbf{d}}(\\mathbf{q} - \\mathbf{p}_0) = \\frac{(1,1,1) \\cdot (1,0,0)}{|(1,0,0)|^2}(1,0,0) = (1, 0, 0)`}</MathBlock>
        <MathBlock>{`\\mathbf{q} - \\mathbf{p}_0 - \\text{proj} = (1, 1, 1) - (1, 0, 0) = (0, 1, 1)`}</MathBlock>
        <MathBlock>{`d = \\|(0, 1, 1)\\| = \\sqrt{2}`}</MathBlock>
      </Callout>

      <h2>Lines in Higher Dimensions</h2>

      <p>
        The parametric representation works identically in any <MathInline>{`\\mathbb{R}^n`}</MathInline>.
      </p>

      <Callout type="example" title="Line in ℝ⁴">
        <p>The line through <MathInline>{`(1, 0, 2, -1)`}</MathInline> with direction <MathInline>{`(1, 1, 1, 1)`}</MathInline>:</p>
        <MathBlock>{`\\mathbf{r}(t) = (1 + t, t, 2 + t, -1 + t)`}</MathBlock>
        <p>Parametric equations:</p>
        <MathBlock>{`x_1 = 1 + t, \\quad x_2 = t, \\quad x_3 = 2 + t, \\quad x_4 = -1 + t`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Vector equation:</strong> <MathInline>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t\\mathbf{d}`}</MathInline></p>
        <p><strong>Through two points:</strong> <MathInline>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t(\\mathbf{p}_1 - \\mathbf{p}_0)`}</MathInline></p>
        <p><strong>Parametric (in ℝ³):</strong> <MathInline>{`x = x_0 + at, \\; y = y_0 + bt, \\; z = z_0 + ct`}</MathInline></p>
        <p><strong>Symmetric:</strong> <MathInline>{`\\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}`}</MathInline></p>
        <p><strong>Parallel:</strong> Direction vectors are scalar multiples</p>
        <p><strong>Intersection:</strong> Solve <MathInline>{`\\mathbf{p}_1 + t\\mathbf{d}_1 = \\mathbf{p}_2 + s\\mathbf{d}_2`}</MathInline></p>
        <p><strong>Skew:</strong> Not parallel, not intersecting (3D only)</p>
      </Callout>
    </LessonLayout>
  );
}
