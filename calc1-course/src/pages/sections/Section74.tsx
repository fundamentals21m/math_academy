import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section74() {
  return (
    <LessonLayout sectionId={74}>
      <h1>Vectors in n-Space</h1>

      <p>
        We now introduce <strong>vectors</strong>, objects that generalize the notion of points
        in the plane or space to arbitrary dimensions. Vectors provide a unified framework
        for studying geometry, physics, and many areas of mathematics.
      </p>

      <h2>Definition of n-Dimensional Vectors</h2>

      <Callout type="definition" title="Vectors in ℝⁿ">
        <p>
          An <strong>n-dimensional vector</strong> (or <strong>n-vector</strong>) is an ordered
          n-tuple of real numbers:
        </p>
        <MathBlock>{`\\mathbf{x} = (x_1, x_2, \\ldots, x_n)`}</MathBlock>
        <p>
          The numbers <InlineMath>{`x_1, x_2, \\ldots, x_n`}</InlineMath> are called the <strong>components</strong> (or <strong>coordinates</strong>) of <InlineMath>{`\\mathbf{x}`}</InlineMath>.
        </p>
        <p>
          The set of all n-vectors is denoted <InlineMath>{`\\mathbb{R}^n`}</InlineMath>:
        </p>
        <MathBlock>{`\\mathbb{R}^n = \\{(x_1, x_2, \\ldots, x_n) : x_i \\in \\mathbb{R} \\text{ for } i = 1, \\ldots, n\\}`}</MathBlock>
      </Callout>

      <p>
        We write vectors in <strong>boldface</strong> (<InlineMath>{`\\mathbf{x}`}</InlineMath>) or with
        an arrow (<InlineMath>{`\\vec{x}`}</InlineMath>) to distinguish them from scalars.
      </p>

      <Callout type="example" title="Examples of Vectors">
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`\\mathbb{R}^1`}</InlineMath>: Real numbers, e.g., <InlineMath>{`(3)`}</InlineMath> or simply <InlineMath>{`3`}</InlineMath></li>
          <li><InlineMath>{`\\mathbb{R}^2`}</InlineMath>: Points in the plane, e.g., <InlineMath>{`(2, -1)`}</InlineMath></li>
          <li><InlineMath>{`\\mathbb{R}^3`}</InlineMath>: Points in 3-space, e.g., <InlineMath>{`(1, 0, 4)`}</InlineMath></li>
          <li><InlineMath>{`\\mathbb{R}^4`}</InlineMath>: 4-tuples, e.g., <InlineMath>{`(1, 2, 3, 4)`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Vector Operations</h2>

      <p>
        Two fundamental operations define the algebraic structure of <InlineMath>{`\\mathbb{R}^n`}</InlineMath>:
        vector addition and scalar multiplication.
      </p>

      <Callout type="definition" title="Vector Addition">
        <p>
          For vectors <InlineMath>{`\\mathbf{x} = (x_1, \\ldots, x_n)`}</InlineMath> and <InlineMath>{`\\mathbf{y} = (y_1, \\ldots, y_n)`}</InlineMath>:
        </p>
        <MathBlock>{`\\mathbf{x} + \\mathbf{y} = (x_1 + y_1, x_2 + y_2, \\ldots, x_n + y_n)`}</MathBlock>
        <p>Addition is performed component by component.</p>
      </Callout>

      <Callout type="definition" title="Scalar Multiplication">
        <p>
          For a scalar <InlineMath>{`c \\in \\mathbb{R}`}</InlineMath> and vector <InlineMath>{`\\mathbf{x} = (x_1, \\ldots, x_n)`}</InlineMath>:
        </p>
        <MathBlock>{`c\\mathbf{x} = (cx_1, cx_2, \\ldots, cx_n)`}</MathBlock>
        <p>Each component is multiplied by <InlineMath>{`c`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Computing with Vectors">
        <p>Let <InlineMath>{`\\mathbf{x} = (1, 2, -3)`}</InlineMath> and <InlineMath>{`\\mathbf{y} = (4, 0, 2)`}</InlineMath>.</p>
        <MathBlock>{`\\mathbf{x} + \\mathbf{y} = (1+4, 2+0, -3+2) = (5, 2, -1)`}</MathBlock>
        <MathBlock>{`3\\mathbf{x} = (3 \\cdot 1, 3 \\cdot 2, 3 \\cdot (-3)) = (3, 6, -9)`}</MathBlock>
        <MathBlock>{`2\\mathbf{x} - \\mathbf{y} = (2, 4, -6) - (4, 0, 2) = (-2, 4, -8)`}</MathBlock>
      </Callout>

      <h2>Properties of Vector Operations</h2>

      <Callout type="theorem" title="Algebraic Properties">
        <p>For all <InlineMath>{`\\mathbf{x}, \\mathbf{y}, \\mathbf{z} \\in \\mathbb{R}^n`}</InlineMath> and scalars <InlineMath>{`a, b \\in \\mathbb{R}`}</InlineMath>:</p>
        <p><strong>Addition properties:</strong></p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><InlineMath>{`\\mathbf{x} + \\mathbf{y} = \\mathbf{y} + \\mathbf{x}`}</InlineMath> (commutativity)</li>
          <li><InlineMath>{`(\\mathbf{x} + \\mathbf{y}) + \\mathbf{z} = \\mathbf{x} + (\\mathbf{y} + \\mathbf{z})`}</InlineMath> (associativity)</li>
          <li><InlineMath>{`\\mathbf{x} + \\mathbf{0} = \\mathbf{x}`}</InlineMath> (zero vector)</li>
          <li><InlineMath>{`\\mathbf{x} + (-\\mathbf{x}) = \\mathbf{0}`}</InlineMath> (additive inverse)</li>
        </ol>
        <p><strong>Scalar multiplication properties:</strong></p>
        <ol className="list-decimal pl-6 space-y-1" start={5}>
          <li><InlineMath>{`a(b\\mathbf{x}) = (ab)\\mathbf{x}`}</InlineMath> (associativity)</li>
          <li><InlineMath>{`1 \\cdot \\mathbf{x} = \\mathbf{x}`}</InlineMath> (identity)</li>
        </ol>
        <p><strong>Distributive properties:</strong></p>
        <ol className="list-decimal pl-6 space-y-1" start={7}>
          <li><InlineMath>{`a(\\mathbf{x} + \\mathbf{y}) = a\\mathbf{x} + a\\mathbf{y}`}</InlineMath></li>
          <li><InlineMath>{`(a + b)\\mathbf{x} = a\\mathbf{x} + b\\mathbf{x}`}</InlineMath></li>
        </ol>
      </Callout>

      <h2>Special Vectors</h2>

      <Callout type="definition" title="Zero Vector">
        <p>
          The <strong>zero vector</strong> in <InlineMath>{`\\mathbb{R}^n`}</InlineMath> is:
        </p>
        <MathBlock>{`\\mathbf{0} = (0, 0, \\ldots, 0)`}</MathBlock>
        <p>It is the additive identity: <InlineMath>{`\\mathbf{x} + \\mathbf{0} = \\mathbf{x}`}</InlineMath> for all <InlineMath>{`\\mathbf{x}`}</InlineMath>.</p>
      </Callout>

      <Callout type="definition" title="Additive Inverse">
        <p>
          For <InlineMath>{`\\mathbf{x} = (x_1, \\ldots, x_n)`}</InlineMath>, the <strong>negative</strong> is:
        </p>
        <MathBlock>{`-\\mathbf{x} = (-x_1, -x_2, \\ldots, -x_n)`}</MathBlock>
        <p>We define subtraction as <InlineMath>{`\\mathbf{x} - \\mathbf{y} = \\mathbf{x} + (-\\mathbf{y})`}</InlineMath>.</p>
      </Callout>

      <Callout type="definition" title="Standard Basis Vectors">
        <p>
          The <strong>standard basis vectors</strong> in <InlineMath>{`\\mathbb{R}^n`}</InlineMath> are:
        </p>
        <MathBlock>{`\\mathbf{e}_1 = (1, 0, 0, \\ldots, 0)`}</MathBlock>
        <MathBlock>{`\\mathbf{e}_2 = (0, 1, 0, \\ldots, 0)`}</MathBlock>
        <MathBlock>{`\\vdots`}</MathBlock>
        <MathBlock>{`\\mathbf{e}_n = (0, 0, 0, \\ldots, 1)`}</MathBlock>
        <p>
          The vector <InlineMath>{`\\mathbf{e}_i`}</InlineMath> has 1 in position <InlineMath>{`i`}</InlineMath> and 0 elsewhere.
        </p>
      </Callout>

      <p>
        Any vector can be written as a combination of standard basis vectors:
      </p>
      <MathBlock>{`\\mathbf{x} = (x_1, x_2, \\ldots, x_n) = x_1\\mathbf{e}_1 + x_2\\mathbf{e}_2 + \\cdots + x_n\\mathbf{e}_n`}</MathBlock>

      <Callout type="example" title="Standard Basis in ℝ³">
        <p>In <InlineMath>{`\\mathbb{R}^3`}</InlineMath>, the standard basis vectors are often denoted:</p>
        <MathBlock>{`\\mathbf{i} = \\mathbf{e}_1 = (1, 0, 0), \\quad \\mathbf{j} = \\mathbf{e}_2 = (0, 1, 0), \\quad \\mathbf{k} = \\mathbf{e}_3 = (0, 0, 1)`}</MathBlock>
        <p>So <InlineMath>{`(2, -3, 5) = 2\\mathbf{i} - 3\\mathbf{j} + 5\\mathbf{k}`}</InlineMath>.</p>
      </Callout>

      <h2>Geometric Interpretation</h2>

      <p>
        Vectors in <InlineMath>{`\\mathbb{R}^2`}</InlineMath> and <InlineMath>{`\\mathbb{R}^3`}</InlineMath> have
        natural geometric interpretations.
      </p>

      <Callout type="info" title="Vectors as Arrows">
        <p>
          A vector <InlineMath>{`\\mathbf{x} = (x_1, x_2)`}</InlineMath> can be visualized as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Point:</strong> The point with coordinates <InlineMath>{`(x_1, x_2)`}</InlineMath></li>
          <li><strong>Arrow:</strong> An arrow from the origin to the point <InlineMath>{`(x_1, x_2)`}</InlineMath></li>
          <li><strong>Displacement:</strong> A displacement of <InlineMath>{`x_1`}</InlineMath> units horizontally and <InlineMath>{`x_2`}</InlineMath> units vertically</li>
        </ul>
      </Callout>

      <Callout type="info" title="Geometric Operations">
        <p><strong>Addition (Parallelogram Law):</strong> To add <InlineMath>{`\\mathbf{x}`}</InlineMath> and <InlineMath>{`\\mathbf{y}`}</InlineMath>, place the tail of <InlineMath>{`\\mathbf{y}`}</InlineMath> at the head of <InlineMath>{`\\mathbf{x}`}</InlineMath>. The sum is the arrow from the origin to this new position.</p>
        <p><strong>Scalar multiplication:</strong> Multiplying by <InlineMath>{`c > 0`}</InlineMath> stretches the vector by factor <InlineMath>{`c`}</InlineMath>. Multiplying by <InlineMath>{`c < 0`}</InlineMath> reverses direction and stretches by <InlineMath>{`|c|`}</InlineMath>.</p>
      </Callout>

      <h2>Linear Combinations</h2>

      <Callout type="definition" title="Linear Combination">
        <p>
          A <strong>linear combination</strong> of vectors <InlineMath>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</InlineMath> is
          a sum of the form:
        </p>
        <MathBlock>{`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k`}</MathBlock>
        <p>
          where <InlineMath>{`c_1, \\ldots, c_k`}</InlineMath> are scalars.
        </p>
      </Callout>

      <Callout type="example" title="Linear Combinations">
        <p>Let <InlineMath>{`\\mathbf{v}_1 = (1, 2)`}</InlineMath> and <InlineMath>{`\\mathbf{v}_2 = (3, -1)`}</InlineMath>.</p>
        <p>The linear combination <InlineMath>{`2\\mathbf{v}_1 + 3\\mathbf{v}_2`}</InlineMath> is:</p>
        <MathBlock>{`2(1, 2) + 3(3, -1) = (2, 4) + (9, -3) = (11, 1)`}</MathBlock>
        <p>Can we write <InlineMath>{`(5, 7)`}</InlineMath> as a linear combination of <InlineMath>{`\\mathbf{v}_1`}</InlineMath> and <InlineMath>{`\\mathbf{v}_2`}</InlineMath>?</p>
        <p>We need <InlineMath>{`c_1`}</InlineMath> and <InlineMath>{`c_2`}</InlineMath> such that:</p>
        <MathBlock>{`c_1(1, 2) + c_2(3, -1) = (5, 7)`}</MathBlock>
        <p>This gives the system: <InlineMath>{`c_1 + 3c_2 = 5`}</InlineMath> and <InlineMath>{`2c_1 - c_2 = 7`}</InlineMath>.</p>
        <p>Solving: <InlineMath>{`c_1 = \\frac{26}{7}`}</InlineMath>, <InlineMath>{`c_2 = \\frac{3}{7}`}</InlineMath>.</p>
      </Callout>

      <h2>Vector Space Structure</h2>

      <p>
        The set <InlineMath>{`\\mathbb{R}^n`}</InlineMath> with the operations of addition and scalar
        multiplication forms what is called a <strong>vector space</strong>. The eight properties
        listed above are precisely the axioms that define a vector space.
      </p>

      <Callout type="info" title="Why n-Space Matters">
        <p>The abstract notion of <InlineMath>{`\\mathbb{R}^n`}</InlineMath> is essential because:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Physics:</strong> Position, velocity, forces are naturally vectors</li>
          <li><strong>Data science:</strong> Data points with <InlineMath>{`n`}</InlineMath> features live in <InlineMath>{`\\mathbb{R}^n`}</InlineMath></li>
          <li><strong>Computer graphics:</strong> 3D transformations use vectors and matrices</li>
          <li><strong>Calculus:</strong> Gradients, partial derivatives extend to <InlineMath>{`\\mathbb{R}^n`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Equality and Parallel Vectors</h2>

      <Callout type="definition" title="Equality of Vectors">
        <p>Two vectors are equal if and only if all corresponding components are equal:</p>
        <MathBlock>{`(x_1, \\ldots, x_n) = (y_1, \\ldots, y_n) \\iff x_i = y_i \\text{ for all } i`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Parallel Vectors">
        <p>
          Nonzero vectors <InlineMath>{`\\mathbf{x}`}</InlineMath> and <InlineMath>{`\\mathbf{y}`}</InlineMath> are <strong>parallel</strong> if
          one is a scalar multiple of the other:
        </p>
        <MathBlock>{`\\mathbf{x} \\parallel \\mathbf{y} \\iff \\mathbf{x} = c\\mathbf{y} \\text{ for some } c \\neq 0`}</MathBlock>
        <p>If <InlineMath>{`c > 0`}</InlineMath>, they point in the same direction; if <InlineMath>{`c < 0`}</InlineMath>, opposite directions.</p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>n-vector:</strong> An ordered n-tuple <InlineMath>{`(x_1, \\ldots, x_n) \\in \\mathbb{R}^n`}</InlineMath></p>
        <p><strong>Operations:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Addition: <InlineMath>{`(x_1, \\ldots, x_n) + (y_1, \\ldots, y_n) = (x_1+y_1, \\ldots, x_n+y_n)`}</InlineMath></li>
          <li>Scalar multiplication: <InlineMath>{`c(x_1, \\ldots, x_n) = (cx_1, \\ldots, cx_n)`}</InlineMath></li>
        </ul>
        <p><strong>Special vectors:</strong> Zero vector <InlineMath>{`\\mathbf{0}`}</InlineMath>, standard basis <InlineMath>{`\\mathbf{e}_1, \\ldots, \\mathbf{e}_n`}</InlineMath></p>
        <p><strong>Linear combination:</strong> <InlineMath>{`c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k`}</InlineMath></p>
        <p><strong>Properties:</strong> Commutative, associative, distributive laws hold</p>
      </Callout>
    </LessonLayout>
  );
}
