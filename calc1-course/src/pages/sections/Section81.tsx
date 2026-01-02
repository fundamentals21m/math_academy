import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section81() {
  return (
    <LessonLayout sectionId={81}>
      <h1>Cross Product</h1>

      <p>
        The <strong>cross product</strong> (or <strong>vector product</strong>) is an operation
        on two vectors in <InlineMath>{`\\mathbb{R}^3`}</InlineMath> that produces a third vector
        perpendicular to both. Unlike the dot product, which gives a scalar, the cross product
        gives a vector.
      </p>

      <h2>Definition</h2>

      <Callout type="definition" title="Cross Product">
        <p>
          For vectors <InlineMath>{`\\mathbf{u} = (u_1, u_2, u_3)`}</InlineMath> and <InlineMath>{`\\mathbf{v} = (v_1, v_2, v_3)`}</InlineMath> in <InlineMath>{`\\mathbb{R}^3`}</InlineMath>,
          the <strong>cross product</strong> is:
        </p>
        <MathBlock>{`\\mathbf{u} \\times \\mathbf{v} = (u_2 v_3 - u_3 v_2, \\; u_3 v_1 - u_1 v_3, \\; u_1 v_2 - u_2 v_1)`}</MathBlock>
      </Callout>

      <h2>Determinant Formula</h2>

      <p>
        The cross product is conveniently expressed using a symbolic determinant:
      </p>

      <Callout type="theorem" title="Determinant Form">
        <MathBlock>{`\\mathbf{u} \\times \\mathbf{v} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\end{vmatrix}`}</MathBlock>
        <p>Expanding along the first row:</p>
        <MathBlock>{`= \\mathbf{i}(u_2 v_3 - u_3 v_2) - \\mathbf{j}(u_1 v_3 - u_3 v_1) + \\mathbf{k}(u_1 v_2 - u_2 v_1)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Computing a Cross Product">
        <p>Find <InlineMath>{`(1, 2, 3) \\times (4, 5, 6)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\ 1 & 2 & 3 \\ 4 & 5 & 6 \\end{vmatrix}`}</MathBlock>
        <MathBlock>{`= \\mathbf{i}(2 \\cdot 6 - 3 \\cdot 5) - \\mathbf{j}(1 \\cdot 6 - 3 \\cdot 4) + \\mathbf{k}(1 \\cdot 5 - 2 \\cdot 4)`}</MathBlock>
        <MathBlock>{`= \\mathbf{i}(12 - 15) - \\mathbf{j}(6 - 12) + \\mathbf{k}(5 - 8)`}</MathBlock>
        <MathBlock>{`= -3\\mathbf{i} + 6\\mathbf{j} - 3\\mathbf{k} = (-3, 6, -3)`}</MathBlock>
      </Callout>

      <h2>Algebraic Properties</h2>

      <Callout type="theorem" title="Properties of the Cross Product">
        <p>For vectors <InlineMath>{`\\mathbf{u}, \\mathbf{v}, \\mathbf{w}`}</InlineMath> and scalar <InlineMath>{`c`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})`}</InlineMath> (anti-commutative)</li>
          <li><InlineMath>{`(c\\mathbf{u}) \\times \\mathbf{v} = c(\\mathbf{u} \\times \\mathbf{v}) = \\mathbf{u} \\times (c\\mathbf{v})`}</InlineMath></li>
          <li><InlineMath>{`\\mathbf{u} \\times (\\mathbf{v} + \\mathbf{w}) = \\mathbf{u} \\times \\mathbf{v} + \\mathbf{u} \\times \\mathbf{w}`}</InlineMath> (distributive)</li>
          <li><InlineMath>{`\\mathbf{u} \\times \\mathbf{u} = \\mathbf{0}`}</InlineMath></li>
          <li><InlineMath>{`\\mathbf{u} \\times \\mathbf{0} = \\mathbf{0} \\times \\mathbf{u} = \\mathbf{0}`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="info" title="Not Associative!">
        <p>
          The cross product is <strong>not associative</strong>:
          <InlineMath>{`(\\mathbf{u} \\times \\mathbf{v}) \\times \\mathbf{w} \\neq \\mathbf{u} \\times (\\mathbf{v} \\times \\mathbf{w})`}</InlineMath> in general.
        </p>
      </Callout>

      <h2>Standard Basis Cross Products</h2>

      <Callout type="info" title="Cross Products of i, j, k">
        <MathBlock>{`\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}, \\quad \\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}, \\quad \\mathbf{k} \\times \\mathbf{i} = \\mathbf{j}`}</MathBlock>
        <MathBlock>{`\\mathbf{j} \\times \\mathbf{i} = -\\mathbf{k}, \\quad \\mathbf{k} \\times \\mathbf{j} = -\\mathbf{i}, \\quad \\mathbf{i} \\times \\mathbf{k} = -\\mathbf{j}`}</MathBlock>
        <MathBlock>{`\\mathbf{i} \\times \\mathbf{i} = \\mathbf{j} \\times \\mathbf{j} = \\mathbf{k} \\times \\mathbf{k} = \\mathbf{0}`}</MathBlock>
      </Callout>

      <h2>Geometric Properties</h2>

      <Callout type="theorem" title="Perpendicularity">
        <p>
          The cross product <InlineMath>{`\\mathbf{u} \\times \\mathbf{v}`}</InlineMath> is perpendicular to
          both <InlineMath>{`\\mathbf{u}`}</InlineMath> and <InlineMath>{`\\mathbf{v}`}</InlineMath>:
        </p>
        <MathBlock>{`\\mathbf{u} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = 0, \\quad \\mathbf{v} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Verifying Perpendicularity">
        <p>We found <InlineMath>{`(1, 2, 3) \\times (4, 5, 6) = (-3, 6, -3)`}</InlineMath>. Verify:</p>
        <MathBlock>{`(1, 2, 3) \\cdot (-3, 6, -3) = -3 + 12 - 9 = 0 \\, \\checkmark`}</MathBlock>
        <MathBlock>{`(4, 5, 6) \\cdot (-3, 6, -3) = -12 + 30 - 18 = 0 \\, \\checkmark`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Magnitude and Area">
        <p>The magnitude of the cross product is:</p>
        <MathBlock>{`\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\sin\\theta`}</MathBlock>
        <p>
          where <InlineMath>{`\\theta`}</InlineMath> is the angle between <InlineMath>{`\\mathbf{u}`}</InlineMath> and <InlineMath>{`\\mathbf{v}`}</InlineMath>.
        </p>
        <p>
          This equals the <strong>area of the parallelogram</strong> with sides <InlineMath>{`\\mathbf{u}`}</InlineMath> and <InlineMath>{`\\mathbf{v}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Area of a Parallelogram">
        <p>Find the area of the parallelogram with sides <InlineMath>{`\\mathbf{u} = (1, 0, 0)`}</InlineMath> and <InlineMath>{`\\mathbf{v} = (1, 1, 0)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{u} \\times \\mathbf{v} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\ 1 & 0 & 0 \\ 1 & 1 & 0 \\end{vmatrix} = (0, 0, 1)`}</MathBlock>
        <MathBlock>{`\\text{Area} = \\|(0, 0, 1)\\| = 1`}</MathBlock>
      </Callout>

      <h2>The Right-Hand Rule</h2>

      <Callout type="info" title="Direction of u × v">
        <p>
          The direction of <InlineMath>{`\\mathbf{u} \\times \\mathbf{v}`}</InlineMath> follows the <strong>right-hand rule</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Point your fingers in the direction of <InlineMath>{`\\mathbf{u}`}</InlineMath></li>
          <li>Curl them toward <InlineMath>{`\\mathbf{v}`}</InlineMath> (through the smaller angle)</li>
          <li>Your thumb points in the direction of <InlineMath>{`\\mathbf{u} \\times \\mathbf{v}`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Parallel Vectors</h2>

      <Callout type="theorem" title="Test for Parallel Vectors">
        <p>
          Vectors <InlineMath>{`\\mathbf{u}`}</InlineMath> and <InlineMath>{`\\mathbf{v}`}</InlineMath> are parallel
          if and only if:
        </p>
        <MathBlock>{`\\mathbf{u} \\times \\mathbf{v} = \\mathbf{0}`}</MathBlock>
        <p>
          (Since <InlineMath>{`\\sin\\theta = 0`}</InlineMath> when <InlineMath>{`\\theta = 0`}</InlineMath> or <InlineMath>{`\\theta = \\pi`}</InlineMath>.)
        </p>
      </Callout>

      <h2>Applications</h2>

      <Callout type="example" title="Normal to a Plane">
        <p>
          Find a normal vector to the plane containing <InlineMath>{`A = (1, 0, 0)`}</InlineMath>,
          <InlineMath>{`B = (0, 1, 0)`}</InlineMath>, <InlineMath>{`C = (0, 0, 1)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\overrightarrow{AB} = (-1, 1, 0), \\quad \\overrightarrow{AC} = (-1, 0, 1)`}</MathBlock>
        <MathBlock>{`\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\ -1 & 1 & 0 \\ -1 & 0 & 1 \\end{vmatrix}`}</MathBlock>
        <MathBlock>{`= \\mathbf{i}(1 - 0) - \\mathbf{j}(-1 - 0) + \\mathbf{k}(0 + 1) = (1, 1, 1)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Area of a Triangle">
        <p>The area of a triangle with vertices <InlineMath>{`P, Q, R`}</InlineMath> is:</p>
        <MathBlock>{`\\text{Area} = \\frac{1}{2}\\|\\overrightarrow{PQ} \\times \\overrightarrow{PR}\\|`}</MathBlock>
        <p>(Half the parallelogram area.)</p>
      </Callout>

      <h2>Scalar Triple Product</h2>

      <Callout type="definition" title="Scalar Triple Product">
        <p>
          The <strong>scalar triple product</strong> of <InlineMath>{`\\mathbf{u}, \\mathbf{v}, \\mathbf{w}`}</InlineMath> is:
        </p>
        <MathBlock>{`\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w}) = \\begin{vmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \\end{vmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Volume of Parallelepiped">
        <p>
          The volume of the parallelepiped with edges <InlineMath>{`\\mathbf{u}, \\mathbf{v}, \\mathbf{w}`}</InlineMath> is:
        </p>
        <MathBlock>{`V = |\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})|`}</MathBlock>
        <p>
          The vectors are coplanar (lie in the same plane) if and only if the scalar
          triple product is zero.
        </p>
      </Callout>

      <Callout type="example" title="Volume Calculation">
        <p>
          Find the volume of the parallelepiped with edges <InlineMath>{`\\mathbf{u} = (1, 0, 0)`}</InlineMath>,
          <InlineMath>{`\\mathbf{v} = (0, 1, 0)`}</InlineMath>, <InlineMath>{`\\mathbf{w} = (0, 0, 1)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{v} \\times \\mathbf{w} = (1, 0, 0) \\times (0, 0, 1) = (0, 1, 0) \\times (0, 0, 1) = (1, 0, 0)`}</MathBlock>
        <p>Wait, let me recalculate:</p>
        <MathBlock>{`\\mathbf{v} \\times \\mathbf{w} = (0, 1, 0) \\times (0, 0, 1) = (1, 0, 0)`}</MathBlock>
        <MathBlock>{`\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w}) = (1, 0, 0) \\cdot (1, 0, 0) = 1`}</MathBlock>
        <p>Volume = 1 (unit cube).</p>
      </Callout>

      <Callout type="info" title="Properties of the Scalar Triple Product">
        <p>Cyclic permutations preserve the value:</p>
        <MathBlock>{`\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w}) = \\mathbf{v} \\cdot (\\mathbf{w} \\times \\mathbf{u}) = \\mathbf{w} \\cdot (\\mathbf{u} \\times \\mathbf{v})`}</MathBlock>
        <p>Swapping two vectors changes the sign.</p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Cross product:</strong> <InlineMath>{`\\mathbf{u} \\times \\mathbf{v} = (u_2v_3 - u_3v_2, u_3v_1 - u_1v_3, u_1v_2 - u_2v_1)`}</InlineMath></p>
        <p><strong>Perpendicular:</strong> <InlineMath>{`\\mathbf{u} \\times \\mathbf{v} \\perp \\mathbf{u}`}</InlineMath> and <InlineMath>{`\\mathbf{u} \\times \\mathbf{v} \\perp \\mathbf{v}`}</InlineMath></p>
        <p><strong>Magnitude:</strong> <InlineMath>{`\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\sin\\theta`}</InlineMath></p>
        <p><strong>Parallelogram area:</strong> <InlineMath>{`\\|\\mathbf{u} \\times \\mathbf{v}\\|`}</InlineMath></p>
        <p><strong>Triangle area:</strong> <InlineMath>{`\\frac{1}{2}\\|\\mathbf{u} \\times \\mathbf{v}\\|`}</InlineMath></p>
        <p><strong>Parallel test:</strong> <InlineMath>{`\\mathbf{u} \\parallel \\mathbf{v} \\iff \\mathbf{u} \\times \\mathbf{v} = \\mathbf{0}`}</InlineMath></p>
        <p><strong>Scalar triple product:</strong> <InlineMath>{`\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})`}</InlineMath> = volume of parallelepiped</p>
        <p><strong>Anti-commutative:</strong> <InlineMath>{`\\mathbf{u} \\times \\mathbf{v} = -\\mathbf{v} \\times \\mathbf{u}`}</InlineMath></p>
      </Callout>
    </LessonLayout>
  );
}
