import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          The numbers <MathInline>{`x_1, x_2, \\ldots, x_n`}</MathInline> are called the <strong>components</strong> (or <strong>coordinates</strong>) of <MathInline>{`\\mathbf{x}`}</MathInline>.
        </p>
        <p>
          The set of all n-vectors is denoted <MathInline>{`\\mathbb{R}^n`}</MathInline>:
        </p>
        <MathBlock>{`\\mathbb{R}^n = \\{(x_1, x_2, \\ldots, x_n) : x_i \\in \\mathbb{R} \\text{ for } i = 1, \\ldots, n\\}`}</MathBlock>
      </Callout>

      <p>
        We write vectors in <strong>boldface</strong> (<MathInline>{`\\mathbf{x}`}</MathInline>) or with
        an arrow (<MathInline>{`\\vec{x}`}</MathInline>) to distinguish them from scalars.
      </p>

      <Callout type="example" title="Examples of Vectors">
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`\\mathbb{R}^1`}</MathInline>: Real numbers, e.g., <MathInline>{`(3)`}</MathInline> or simply <MathInline>{`3`}</MathInline></li>
          <li><MathInline>{`\\mathbb{R}^2`}</MathInline>: Points in the plane, e.g., <MathInline>{`(2, -1)`}</MathInline></li>
          <li><MathInline>{`\\mathbb{R}^3`}</MathInline>: Points in 3-space, e.g., <MathInline>{`(1, 0, 4)`}</MathInline></li>
          <li><MathInline>{`\\mathbb{R}^4`}</MathInline>: 4-tuples, e.g., <MathInline>{`(1, 2, 3, 4)`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Vector Operations</h2>

      <p>
        Two fundamental operations define the algebraic structure of <MathInline>{`\\mathbb{R}^n`}</MathInline>:
        vector addition and scalar multiplication.
      </p>

      <Callout type="definition" title="Vector Addition">
        <p>
          For vectors <MathInline>{`\\mathbf{x} = (x_1, \\ldots, x_n)`}</MathInline> and <MathInline>{`\\mathbf{y} = (y_1, \\ldots, y_n)`}</MathInline>:
        </p>
        <MathBlock>{`\\mathbf{x} + \\mathbf{y} = (x_1 + y_1, x_2 + y_2, \\ldots, x_n + y_n)`}</MathBlock>
        <p>Addition is performed component by component.</p>
      </Callout>

      <Callout type="definition" title="Scalar Multiplication">
        <p>
          For a scalar <MathInline>{`c \\in \\mathbb{R}`}</MathInline> and vector <MathInline>{`\\mathbf{x} = (x_1, \\ldots, x_n)`}</MathInline>:
        </p>
        <MathBlock>{`c\\mathbf{x} = (cx_1, cx_2, \\ldots, cx_n)`}</MathBlock>
        <p>Each component is multiplied by <MathInline>{`c`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Computing with Vectors">
        <p>Let <MathInline>{`\\mathbf{x} = (1, 2, -3)`}</MathInline> and <MathInline>{`\\mathbf{y} = (4, 0, 2)`}</MathInline>.</p>
        <MathBlock>{`\\mathbf{x} + \\mathbf{y} = (1+4, 2+0, -3+2) = (5, 2, -1)`}</MathBlock>
        <MathBlock>{`3\\mathbf{x} = (3 \\cdot 1, 3 \\cdot 2, 3 \\cdot (-3)) = (3, 6, -9)`}</MathBlock>
        <MathBlock>{`2\\mathbf{x} - \\mathbf{y} = (2, 4, -6) - (4, 0, 2) = (-2, 4, -8)`}</MathBlock>
      </Callout>

      <h2>Properties of Vector Operations</h2>

      <Callout type="theorem" title="Algebraic Properties">
        <p>For all <MathInline>{`\\mathbf{x}, \\mathbf{y}, \\mathbf{z} \\in \\mathbb{R}^n`}</MathInline> and scalars <MathInline>{`a, b \\in \\mathbb{R}`}</MathInline>:</p>
        <p><strong>Addition properties:</strong></p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><MathInline>{`\\mathbf{x} + \\mathbf{y} = \\mathbf{y} + \\mathbf{x}`}</MathInline> (commutativity)</li>
          <li><MathInline>{`(\\mathbf{x} + \\mathbf{y}) + \\mathbf{z} = \\mathbf{x} + (\\mathbf{y} + \\mathbf{z})`}</MathInline> (associativity)</li>
          <li><MathInline>{`\\mathbf{x} + \\mathbf{0} = \\mathbf{x}`}</MathInline> (zero vector)</li>
          <li><MathInline>{`\\mathbf{x} + (-\\mathbf{x}) = \\mathbf{0}`}</MathInline> (additive inverse)</li>
        </ol>
        <p><strong>Scalar multiplication properties:</strong></p>
        <ol className="list-decimal pl-6 space-y-1" start={5}>
          <li><MathInline>{`a(b\\mathbf{x}) = (ab)\\mathbf{x}`}</MathInline> (associativity)</li>
          <li><MathInline>{`1 \\cdot \\mathbf{x} = \\mathbf{x}`}</MathInline> (identity)</li>
        </ol>
        <p><strong>Distributive properties:</strong></p>
        <ol className="list-decimal pl-6 space-y-1" start={7}>
          <li><MathInline>{`a(\\mathbf{x} + \\mathbf{y}) = a\\mathbf{x} + a\\mathbf{y}`}</MathInline></li>
          <li><MathInline>{`(a + b)\\mathbf{x} = a\\mathbf{x} + b\\mathbf{x}`}</MathInline></li>
        </ol>
      </Callout>

      <h2>Special Vectors</h2>

      <Callout type="definition" title="Zero Vector">
        <p>
          The <strong>zero vector</strong> in <MathInline>{`\\mathbb{R}^n`}</MathInline> is:
        </p>
        <MathBlock>{`\\mathbf{0} = (0, 0, \\ldots, 0)`}</MathBlock>
        <p>It is the additive identity: <MathInline>{`\\mathbf{x} + \\mathbf{0} = \\mathbf{x}`}</MathInline> for all <MathInline>{`\\mathbf{x}`}</MathInline>.</p>
      </Callout>

      <Callout type="definition" title="Additive Inverse">
        <p>
          For <MathInline>{`\\mathbf{x} = (x_1, \\ldots, x_n)`}</MathInline>, the <strong>negative</strong> is:
        </p>
        <MathBlock>{`-\\mathbf{x} = (-x_1, -x_2, \\ldots, -x_n)`}</MathBlock>
        <p>We define subtraction as <MathInline>{`\\mathbf{x} - \\mathbf{y} = \\mathbf{x} + (-\\mathbf{y})`}</MathInline>.</p>
      </Callout>

      <Callout type="definition" title="Standard Basis Vectors">
        <p>
          The <strong>standard basis vectors</strong> in <MathInline>{`\\mathbb{R}^n`}</MathInline> are:
        </p>
        <MathBlock>{`\\mathbf{e}_1 = (1, 0, 0, \\ldots, 0)`}</MathBlock>
        <MathBlock>{`\\mathbf{e}_2 = (0, 1, 0, \\ldots, 0)`}</MathBlock>
        <MathBlock>{`\\vdots`}</MathBlock>
        <MathBlock>{`\\mathbf{e}_n = (0, 0, 0, \\ldots, 1)`}</MathBlock>
        <p>
          The vector <MathInline>{`\\mathbf{e}_i`}</MathInline> has 1 in position <MathInline>{`i`}</MathInline> and 0 elsewhere.
        </p>
      </Callout>

      <p>
        Any vector can be written as a combination of standard basis vectors:
      </p>
      <MathBlock>{`\\mathbf{x} = (x_1, x_2, \\ldots, x_n) = x_1\\mathbf{e}_1 + x_2\\mathbf{e}_2 + \\cdots + x_n\\mathbf{e}_n`}</MathBlock>

      <Callout type="example" title="Standard Basis in ℝ³">
        <p>In <MathInline>{`\\mathbb{R}^3`}</MathInline>, the standard basis vectors are often denoted:</p>
        <MathBlock>{`\\mathbf{i} = \\mathbf{e}_1 = (1, 0, 0), \\quad \\mathbf{j} = \\mathbf{e}_2 = (0, 1, 0), \\quad \\mathbf{k} = \\mathbf{e}_3 = (0, 0, 1)`}</MathBlock>
        <p>So <MathInline>{`(2, -3, 5) = 2\\mathbf{i} - 3\\mathbf{j} + 5\\mathbf{k}`}</MathInline>.</p>
      </Callout>

      <h2>Geometric Interpretation</h2>

      <p>
        Vectors in <MathInline>{`\\mathbb{R}^2`}</MathInline> and <MathInline>{`\\mathbb{R}^3`}</MathInline> have
        natural geometric interpretations.
      </p>

      <Callout type="info" title="Vectors as Arrows">
        <p>
          A vector <MathInline>{`\\mathbf{x} = (x_1, x_2)`}</MathInline> can be visualized as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Point:</strong> The point with coordinates <MathInline>{`(x_1, x_2)`}</MathInline></li>
          <li><strong>Arrow:</strong> An arrow from the origin to the point <MathInline>{`(x_1, x_2)`}</MathInline></li>
          <li><strong>Displacement:</strong> A displacement of <MathInline>{`x_1`}</MathInline> units horizontally and <MathInline>{`x_2`}</MathInline> units vertically</li>
        </ul>
      </Callout>

      <Callout type="info" title="Geometric Operations">
        <p><strong>Addition (Parallelogram Law):</strong> To add <MathInline>{`\\mathbf{x}`}</MathInline> and <MathInline>{`\\mathbf{y}`}</MathInline>, place the tail of <MathInline>{`\\mathbf{y}`}</MathInline> at the head of <MathInline>{`\\mathbf{x}`}</MathInline>. The sum is the arrow from the origin to this new position.</p>
        <p><strong>Scalar multiplication:</strong> Multiplying by <MathInline>{`c > 0`}</MathInline> stretches the vector by factor <MathInline>{`c`}</MathInline>. Multiplying by <MathInline>{`c < 0`}</MathInline> reverses direction and stretches by <MathInline>{`|c|`}</MathInline>.</p>
      </Callout>

      <h2>Linear Combinations</h2>

      <Callout type="definition" title="Linear Combination">
        <p>
          A <strong>linear combination</strong> of vectors <MathInline>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</MathInline> is
          a sum of the form:
        </p>
        <MathBlock>{`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k`}</MathBlock>
        <p>
          where <MathInline>{`c_1, \\ldots, c_k`}</MathInline> are scalars.
        </p>
      </Callout>

      <Callout type="example" title="Linear Combinations">
        <p>Let <MathInline>{`\\mathbf{v}_1 = (1, 2)`}</MathInline> and <MathInline>{`\\mathbf{v}_2 = (3, -1)`}</MathInline>.</p>
        <p>The linear combination <MathInline>{`2\\mathbf{v}_1 + 3\\mathbf{v}_2`}</MathInline> is:</p>
        <MathBlock>{`2(1, 2) + 3(3, -1) = (2, 4) + (9, -3) = (11, 1)`}</MathBlock>
        <p>Can we write <MathInline>{`(5, 7)`}</MathInline> as a linear combination of <MathInline>{`\\mathbf{v}_1`}</MathInline> and <MathInline>{`\\mathbf{v}_2`}</MathInline>?</p>
        <p>We need <MathInline>{`c_1`}</MathInline> and <MathInline>{`c_2`}</MathInline> such that:</p>
        <MathBlock>{`c_1(1, 2) + c_2(3, -1) = (5, 7)`}</MathBlock>
        <p>This gives the system: <MathInline>{`c_1 + 3c_2 = 5`}</MathInline> and <MathInline>{`2c_1 - c_2 = 7`}</MathInline>.</p>
        <p>Solving: <MathInline>{`c_1 = \\frac{26}{7}`}</MathInline>, <MathInline>{`c_2 = \\frac{3}{7}`}</MathInline>.</p>
      </Callout>

      <h2>Vector Space Structure</h2>

      <p>
        The set <MathInline>{`\\mathbb{R}^n`}</MathInline> with the operations of addition and scalar
        multiplication forms what is called a <strong>vector space</strong>. The eight properties
        listed above are precisely the axioms that define a vector space.
      </p>

      <Callout type="info" title="Why n-Space Matters">
        <p>The abstract notion of <MathInline>{`\\mathbb{R}^n`}</MathInline> is essential because:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Physics:</strong> Position, velocity, forces are naturally vectors</li>
          <li><strong>Data science:</strong> Data points with <MathInline>{`n`}</MathInline> features live in <MathInline>{`\\mathbb{R}^n`}</MathInline></li>
          <li><strong>Computer graphics:</strong> 3D transformations use vectors and matrices</li>
          <li><strong>Calculus:</strong> Gradients, partial derivatives extend to <MathInline>{`\\mathbb{R}^n`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Equality and Parallel Vectors</h2>

      <Callout type="definition" title="Equality of Vectors">
        <p>Two vectors are equal if and only if all corresponding components are equal:</p>
        <MathBlock>{`(x_1, \\ldots, x_n) = (y_1, \\ldots, y_n) \\iff x_i = y_i \\text{ for all } i`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Parallel Vectors">
        <p>
          Nonzero vectors <MathInline>{`\\mathbf{x}`}</MathInline> and <MathInline>{`\\mathbf{y}`}</MathInline> are <strong>parallel</strong> if
          one is a scalar multiple of the other:
        </p>
        <MathBlock>{`\\mathbf{x} \\parallel \\mathbf{y} \\iff \\mathbf{x} = c\\mathbf{y} \\text{ for some } c \\neq 0`}</MathBlock>
        <p>If <MathInline>{`c > 0`}</MathInline>, they point in the same direction; if <MathInline>{`c < 0`}</MathInline>, opposite directions.</p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>n-vector:</strong> An ordered n-tuple <MathInline>{`(x_1, \\ldots, x_n) \\in \\mathbb{R}^n`}</MathInline></p>
        <p><strong>Operations:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Addition: <MathInline>{`(x_1, \\ldots, x_n) + (y_1, \\ldots, y_n) = (x_1+y_1, \\ldots, x_n+y_n)`}</MathInline></li>
          <li>Scalar multiplication: <MathInline>{`c(x_1, \\ldots, x_n) = (cx_1, \\ldots, cx_n)`}</MathInline></li>
        </ul>
        <p><strong>Special vectors:</strong> Zero vector <MathInline>{`\\mathbf{0}`}</MathInline>, standard basis <MathInline>{`\\mathbf{e}_1, \\ldots, \\mathbf{e}_n`}</MathInline></p>
        <p><strong>Linear combination:</strong> <MathInline>{`c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k`}</MathInline></p>
        <p><strong>Properties:</strong> Commutative, associative, distributive laws hold</p>
      </Callout>
    </LessonLayout>
  );
}
