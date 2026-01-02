import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section79() {
  return (
    <LessonLayout sectionId={79}>
      <h1>Lines in n-Space</h1>

      <p>
        In the plane, a line can be described by an equation like <InlineMath>{`y = mx + b`}</InlineMath> or <InlineMath>{`ax + by = c`}</InlineMath>.
        In higher dimensions, we need a more flexible approach using <strong>parametric equations</strong> and
        <strong> vector equations</strong>. These representations extend naturally to <InlineMath>{`\\mathbb{R}^n`}</InlineMath>.
      </p>

      <h2>Vector Equation of a Line</h2>

      <Callout type="definition" title="Line Through a Point with Direction">
        <p>
          A line in <InlineMath>{`\\mathbb{R}^n`}</InlineMath> passing through point <InlineMath>{`P_0`}</InlineMath> with
          position vector <InlineMath>{`\\mathbf{p}_0`}</InlineMath> and parallel to direction
          vector <InlineMath>{`\\mathbf{d} \\neq \\mathbf{0}`}</InlineMath> is given by:
        </p>
        <MathBlock>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t\\mathbf{d}, \\quad t \\in \\mathbb{R}`}</MathBlock>
        <p>
          As <InlineMath>{`t`}</InlineMath> varies over all real numbers, <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> traces
          out every point on the line.
        </p>
      </Callout>

      <Callout type="example" title="Line in ℝ³">
        <p>Find the vector equation of the line through <InlineMath>{`(1, 2, 3)`}</InlineMath> parallel to <InlineMath>{`(2, -1, 4)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}(t) = (1, 2, 3) + t(2, -1, 4) = (1 + 2t, 2 - t, 3 + 4t)`}</MathBlock>
        <p>Some points on this line:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`t = 0`}</InlineMath>: <InlineMath>{`(1, 2, 3)`}</InlineMath></li>
          <li><InlineMath>{`t = 1`}</InlineMath>: <InlineMath>{`(3, 1, 7)`}</InlineMath></li>
          <li><InlineMath>{`t = -1`}</InlineMath>: <InlineMath>{`(-1, 3, -1)`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Parametric Equations</h2>

      <p>
        Writing out the components of the vector equation gives <strong>parametric equations</strong>.
      </p>

      <Callout type="definition" title="Parametric Equations">
        <p>
          For a line through <InlineMath>{`(x_0, y_0, z_0)`}</InlineMath> with direction <InlineMath>{`(a, b, c)`}</InlineMath>:
        </p>
        <MathBlock>{`x = x_0 + at, \\quad y = y_0 + bt, \\quad z = z_0 + ct`}</MathBlock>
        <p>The parameter <InlineMath>{`t`}</InlineMath> ranges over <InlineMath>{`\\mathbb{R}`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Writing Parametric Equations">
        <p>
          For the line through <InlineMath>{`(1, 2, 3)`}</InlineMath> with direction <InlineMath>{`(2, -1, 4)`}</InlineMath>:
        </p>
        <MathBlock>{`x = 1 + 2t, \\quad y = 2 - t, \\quad z = 3 + 4t`}</MathBlock>
      </Callout>

      <h2>Line Through Two Points</h2>

      <Callout type="theorem" title="Line Through Two Points">
        <p>
          The line through points <InlineMath>{`P_0`}</InlineMath> and <InlineMath>{`P_1`}</InlineMath> (with position
          vectors <InlineMath>{`\\mathbf{p}_0`}</InlineMath> and <InlineMath>{`\\mathbf{p}_1`}</InlineMath>) has the equation:
        </p>
        <MathBlock>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t(\\mathbf{p}_1 - \\mathbf{p}_0) = (1-t)\\mathbf{p}_0 + t\\mathbf{p}_1`}</MathBlock>
        <p>
          The direction vector is <InlineMath>{`\\mathbf{d} = \\mathbf{p}_1 - \\mathbf{p}_0`}</InlineMath>.
          Note: <InlineMath>{`t = 0`}</InlineMath> gives <InlineMath>{`P_0`}</InlineMath> and <InlineMath>{`t = 1`}</InlineMath> gives <InlineMath>{`P_1`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Line Through Two Points">
        <p>Find the parametric equations for the line through <InlineMath>{`A = (1, 0, 2)`}</InlineMath> and <InlineMath>{`B = (4, 3, -1)`}</InlineMath>.</p>
        <p><strong>Solution:</strong> The direction vector is:</p>
        <MathBlock>{`\\mathbf{d} = B - A = (4-1, 3-0, -1-2) = (3, 3, -3)`}</MathBlock>
        <p>Using point <InlineMath>{`A`}</InlineMath>:</p>
        <MathBlock>{`x = 1 + 3t, \\quad y = 3t, \\quad z = 2 - 3t`}</MathBlock>
        <p>Or equivalently with direction <InlineMath>{`(1, 1, -1)`}</InlineMath> (dividing by 3):</p>
        <MathBlock>{`x = 1 + t, \\quad y = t, \\quad z = 2 - t`}</MathBlock>
      </Callout>

      <h2>Symmetric Equations</h2>

      <p>
        In <InlineMath>{`\\mathbb{R}^3`}</InlineMath>, if all direction components are nonzero, we can eliminate
        the parameter to get <strong>symmetric equations</strong>.
      </p>

      <Callout type="definition" title="Symmetric Equations">
        <p>
          For a line through <InlineMath>{`(x_0, y_0, z_0)`}</InlineMath> with direction <InlineMath>{`(a, b, c)`}</InlineMath> where <InlineMath>{`a, b, c \\neq 0`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}`}</MathBlock>
        <p>Each fraction equals the parameter <InlineMath>{`t`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Converting to Symmetric Form">
        <p>From parametric: <InlineMath>{`x = 1 + 2t, \\; y = 2 - t, \\; z = 3 + 4t`}</InlineMath></p>
        <p>Solving each for <InlineMath>{`t`}</InlineMath>:</p>
        <MathBlock>{`t = \\frac{x-1}{2} = \\frac{y-2}{-1} = \\frac{z-3}{4}`}</MathBlock>
        <p>Symmetric form:</p>
        <MathBlock>{`\\frac{x-1}{2} = \\frac{y-2}{-1} = \\frac{z-3}{4}`}</MathBlock>
      </Callout>

      <Callout type="info" title="When a Component is Zero">
        <p>
          If a direction component is zero, that coordinate is constant along the line.
          For example, if <InlineMath>{`c = 0`}</InlineMath>, we write:
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
          Lines <InlineMath>{`\\mathbf{r}_1(t) = \\mathbf{p}_1 + t\\mathbf{d}_1`}</InlineMath> and <InlineMath>{`\\mathbf{r}_2(s) = \\mathbf{p}_2 + s\\mathbf{d}_2`}</InlineMath> are
          parallel iff <InlineMath>{`\\mathbf{d}_1 = k\\mathbf{d}_2`}</InlineMath> for some scalar <InlineMath>{`k`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Testing if Lines are Parallel">
        <p>Are these lines parallel?</p>
        <p>Line 1: <InlineMath>{`\\mathbf{r}(t) = (1, 0, 2) + t(2, 4, -2)`}</InlineMath></p>
        <p>Line 2: <InlineMath>{`\\mathbf{r}(s) = (0, 1, 1) + s(-1, -2, 1)`}</InlineMath></p>
        <p><strong>Solution:</strong> Check if <InlineMath>{`(2, 4, -2) = k(-1, -2, 1)`}</InlineMath>:</p>
        <MathBlock>{`\\frac{2}{-1} = -2, \\quad \\frac{4}{-2} = -2, \\quad \\frac{-2}{1} = -2`}</MathBlock>
        <p>Yes, <InlineMath>{`k = -2`}</InlineMath> works. The lines are <strong>parallel</strong>.</p>
      </Callout>

      <p>
        Parallel lines are either <strong>identical</strong> (same line) or <strong>disjoint</strong> (no intersection).
        To check if parallel lines are identical, verify that a point from one lies on the other.
      </p>

      <h2>Intersecting Lines</h2>

      <Callout type="example" title="Finding the Intersection">
        <p>Do these lines intersect?</p>
        <p>Line 1: <InlineMath>{`x = 1 + t, \\; y = 2 + 2t, \\; z = 3 + t`}</InlineMath></p>
        <p>Line 2: <InlineMath>{`x = 2 + s, \\; y = 4 + s, \\; z = 4 + 2s`}</InlineMath></p>
        <p><strong>Solution:</strong> Set the coordinates equal (using different parameters!):</p>
        <MathBlock>{`1 + t = 2 + s \\quad \\Rightarrow \\quad t - s = 1`}</MathBlock>
        <MathBlock>{`2 + 2t = 4 + s \\quad \\Rightarrow \\quad 2t - s = 2`}</MathBlock>
        <MathBlock>{`3 + t = 4 + 2s \\quad \\Rightarrow \\quad t - 2s = 1`}</MathBlock>
        <p>From equations 1 and 2: <InlineMath>{`t = 1, s = 0`}</InlineMath>.</p>
        <p>Check in equation 3: <InlineMath>{`1 - 0 = 1`}</InlineMath> ✓</p>
        <p>Intersection point: <InlineMath>{`(1+1, 2+2, 3+1) = (2, 4, 4)`}</InlineMath>.</p>
      </Callout>

      <Callout type="info" title="Skew Lines">
        <p>
          In <InlineMath>{`\\mathbb{R}^3`}</InlineMath>, two lines that are not parallel and do not intersect
          are called <strong>skew lines</strong>. Skew lines do not exist in <InlineMath>{`\\mathbb{R}^2`}</InlineMath> but
          are common in 3D.
        </p>
      </Callout>

      <h2>Distance from a Point to a Line</h2>

      <Callout type="theorem" title="Distance Formula">
        <p>
          The distance from point <InlineMath>{`Q`}</InlineMath> to the line <InlineMath>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t\\mathbf{d}`}</InlineMath> is:
        </p>
        <MathBlock>{`d = \\|\\mathbf{q} - \\mathbf{p}_0 - \\text{proj}_{\\mathbf{d}}(\\mathbf{q} - \\mathbf{p}_0)\\|`}</MathBlock>
        <p>where <InlineMath>{`\\mathbf{q}`}</InlineMath> is the position vector of <InlineMath>{`Q`}</InlineMath>.</p>
        <p>This is the length of the perpendicular from <InlineMath>{`Q`}</InlineMath> to the line.</p>
      </Callout>

      <Callout type="example" title="Distance to a Line">
        <p>Find the distance from <InlineMath>{`Q = (1, 1, 1)`}</InlineMath> to the line <InlineMath>{`\\mathbf{r}(t) = (0, 0, 0) + t(1, 0, 0)`}</InlineMath> (the x-axis).</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{q} - \\mathbf{p}_0 = (1, 1, 1) - (0, 0, 0) = (1, 1, 1)`}</MathBlock>
        <MathBlock>{`\\text{proj}_{\\mathbf{d}}(\\mathbf{q} - \\mathbf{p}_0) = \\frac{(1,1,1) \\cdot (1,0,0)}{|(1,0,0)|^2}(1,0,0) = (1, 0, 0)`}</MathBlock>
        <MathBlock>{`\\mathbf{q} - \\mathbf{p}_0 - \\text{proj} = (1, 1, 1) - (1, 0, 0) = (0, 1, 1)`}</MathBlock>
        <MathBlock>{`d = \\|(0, 1, 1)\\| = \\sqrt{2}`}</MathBlock>
      </Callout>

      <h2>Lines in Higher Dimensions</h2>

      <p>
        The parametric representation works identically in any <InlineMath>{`\\mathbb{R}^n`}</InlineMath>.
      </p>

      <Callout type="example" title="Line in ℝ⁴">
        <p>The line through <InlineMath>{`(1, 0, 2, -1)`}</InlineMath> with direction <InlineMath>{`(1, 1, 1, 1)`}</InlineMath>:</p>
        <MathBlock>{`\\mathbf{r}(t) = (1 + t, t, 2 + t, -1 + t)`}</MathBlock>
        <p>Parametric equations:</p>
        <MathBlock>{`x_1 = 1 + t, \\quad x_2 = t, \\quad x_3 = 2 + t, \\quad x_4 = -1 + t`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Vector equation:</strong> <InlineMath>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t\\mathbf{d}`}</InlineMath></p>
        <p><strong>Through two points:</strong> <InlineMath>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t(\\mathbf{p}_1 - \\mathbf{p}_0)`}</InlineMath></p>
        <p><strong>Parametric (in ℝ³):</strong> <InlineMath>{`x = x_0 + at, \\; y = y_0 + bt, \\; z = z_0 + ct`}</InlineMath></p>
        <p><strong>Symmetric:</strong> <InlineMath>{`\\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}`}</InlineMath></p>
        <p><strong>Parallel:</strong> Direction vectors are scalar multiples</p>
        <p><strong>Intersection:</strong> Solve <InlineMath>{`\\mathbf{p}_1 + t\\mathbf{d}_1 = \\mathbf{p}_2 + s\\mathbf{d}_2`}</InlineMath></p>
        <p><strong>Skew:</strong> Not parallel, not intersecting (3D only)</p>
      </Callout>
    </LessonLayout>
  );
}
