import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Introduction */}
      <p>
        The <strong>dot product</strong> (or inner product) of two vectors is one of the most important
        operations in linear algebra. It gives us a way to compute <strong>lengths</strong> and <strong>angles</strong>.
        This section introduces the dot product <InlineMath>{`\\mathbf{v} \\cdot \\mathbf{w}`}</InlineMath> and connects it to
        the length <InlineMath>{`\\|\\mathbf{v}\\|`}</InlineMath>.
      </p>

      <h2>The Dot Product</h2>

      <Definition title="Dot Product" className="my-6">
        <p>
          The <strong>dot product</strong> of <InlineMath>{`\\mathbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix}`}</InlineMath> and{` `}
          <InlineMath>{`\\mathbf{w} = \\begin{bmatrix} w_1 \\\\ w_2 \\end{bmatrix}`}</InlineMath> is:
        </p>
        <MathBlock>
          {`\\mathbf{v} \\cdot \\mathbf{w} = v_1 w_1 + v_2 w_2`}
        </MathBlock>
        <p className="mt-2">
          For vectors in <InlineMath>{`\\mathbb{R}^n`}</InlineMath> with <InlineMath>n</InlineMath> components:
        </p>
        <MathBlock>
          {`\\mathbf{v} \\cdot \\mathbf{w} = v_1 w_1 + v_2 w_2 + \\cdots + v_n w_n`}
        </MathBlock>
      </Definition>

      <p>
        The main point: For <InlineMath>{`\\mathbf{v} \\cdot \\mathbf{w}`}</InlineMath>, multiply each <InlineMath>v_i</InlineMath> times <InlineMath>w_i</InlineMath>.
        Then <InlineMath>{`\\mathbf{v} \\cdot \\mathbf{w} = v_1w_1 + \\cdots + v_nw_n`}</InlineMath>.
      </p>

      <Example title="Computing a Dot Product" className="my-6">
        <p>
          The dot product of <InlineMath>{`\\mathbf{v} = (1, 2)`}</InlineMath> and <InlineMath>{`\\mathbf{w} = (3, 1)`}</InlineMath> is:
        </p>
        <MathBlock>
          {`\\mathbf{v} \\cdot \\mathbf{w} = (1)(3) + (2)(1) = 3 + 2 = 5`}
        </MathBlock>
        <p className="mt-2">
          Note that <InlineMath>{`\\mathbf{w} \\cdot \\mathbf{v}`}</InlineMath> is also 5. The order of <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath> makes no difference!
        </p>
      </Example>

      <Theorem
        title="Commutativity of Dot Product"
        className="my-6"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\mathbf{v} = (v_1, v_2, \\ldots, v_n)`}</InlineMath> and <InlineMath>{`\\mathbf{w} = (w_1, w_2, \\ldots, w_n)`}</InlineMath>.
            </p>
            <p>By definition of the dot product:</p>
            <MathBlock>{`\\mathbf{v} \\cdot \\mathbf{w} = v_1w_1 + v_2w_2 + \\cdots + v_nw_n`}</MathBlock>
            <p>Since multiplication of real numbers is commutative (<InlineMath>v_iw_i = w_iv_i</InlineMath>):</p>
            <MathBlock>{`= w_1v_1 + w_2v_2 + \\cdots + w_nv_n = \\mathbf{w} \\cdot \\mathbf{v}`}</MathBlock>
          </>
        }
      >
        <p>
          The dot product is commutative:
        </p>
        <MathBlock>
          {`\\mathbf{v} \\cdot \\mathbf{w} = \\mathbf{w} \\cdot \\mathbf{v}`}
        </MathBlock>
      </Theorem>

      <h2>Lengths and Unit Vectors</h2>

      <p>
        An important case is the dot product of a vector <em>with itself</em>. In this case <InlineMath>{`\\mathbf{v}`}</InlineMath> equals <InlineMath>{`\\mathbf{w}`}</InlineMath>.
        When the vector is <InlineMath>{`\\mathbf{v} = (1, 2, 3)`}</InlineMath>, the dot product with itself is:
      </p>

      <MathBlock className="my-4">
        {`\\|\\mathbf{v}\\|^2 = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} \\cdot \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} = 1 + 4 + 9 = 14`}
      </MathBlock>

      <p>
        Instead of a 90° angle between vectors we have 0°. The answer is not zero because <InlineMath>{`\\mathbf{v}`}</InlineMath> is not
        perpendicular to itself. The dot product <InlineMath>{`\\mathbf{v} \\cdot \\mathbf{v}`}</InlineMath> gives the <em>length of <InlineMath>{`\\mathbf{v}`}</InlineMath> squared</em>.
      </p>

      <Definition title="Length (Norm) of a Vector" className="my-6">
        <p>
          The <strong>length</strong> (or <strong>norm</strong>) <InlineMath>{`\\|\\mathbf{v}\\|`}</InlineMath> of a vector <InlineMath>{`\\mathbf{v}`}</InlineMath> is the square root of <InlineMath>{`\\mathbf{v} \\cdot \\mathbf{v}`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\text{length} = \\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}`}
        </MathBlock>
      </Definition>

      <Example title="Computing Vector Length" className="my-6">
        <p>
          In two dimensions, the length of <InlineMath>{`\\mathbf{v} = (1, 2)`}</InlineMath> is <InlineMath>{`\\sqrt{1^2 + 2^2} = \\sqrt{5}`}</InlineMath>.
        </p>
        <p className="mt-2">
          In three dimensions, the length of <InlineMath>{`\\mathbf{v} = (1, 2, 3)`}</InlineMath> is <InlineMath>{`\\|\\mathbf{v}\\| = \\sqrt{14}`}</InlineMath>.
        </p>
        <p className="mt-2">
          This is just the ordinary length of the arrow that represents the vector. The Pythagoras
          formula <InlineMath>a^2 + b^2 = c^2</InlineMath> connects the three sides: <InlineMath>1^2 + 2^2 = {`\\|\\mathbf{v}\\|^2`}</InlineMath>.
        </p>
      </Example>

      <h2>Unit Vectors</h2>

      <p>
        The word "unit" is always indicating that some measurement equals "one". A unit cube has sides
        of length one. A unit circle is a circle with radius one. Now we see the meaning of a "unit vector".
      </p>

      <Definition title="Unit Vector" className="my-6">
        <p>
          A <strong>unit vector</strong> <InlineMath>{`\\mathbf{u}`}</InlineMath> is a vector whose length equals one:
        </p>
        <MathBlock>
          {`\\|\\mathbf{u}\\| = 1 \\quad \\text{which means} \\quad \\mathbf{u} \\cdot \\mathbf{u} = 1`}
        </MathBlock>
      </Definition>

      <Example title="Creating a Unit Vector" className="my-6">
        <p>
          An example in four dimensions is <InlineMath>{`\\mathbf{u} = \\left(\\frac{1}{2}, \\frac{1}{2}, \\frac{1}{2}, \\frac{1}{2}\\right)`}</InlineMath>.
          Then:
        </p>
        <MathBlock>
          {`\\mathbf{u} \\cdot \\mathbf{u} = \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} = 1`}
        </MathBlock>
        <p className="mt-2">
          We divided <InlineMath>{`\\mathbf{v} = (1, 1, 1, 1)`}</InlineMath> by its length <InlineMath>{`\\|\\mathbf{v}\\| = 2`}</InlineMath> to get this unit vector.
        </p>
      </Example>

      <p>
        The standard unit vectors along the <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> axes are written <InlineMath>{`\\mathbf{i}`}</InlineMath> and <InlineMath>{`\\mathbf{j}`}</InlineMath>.
        In the <InlineMath>xy</InlineMath> plane, the unit vector that makes an angle "theta" with the <InlineMath>x</InlineMath> axis is <InlineMath>(\cos\theta, \sin\theta)</InlineMath>:
      </p>

      <MathBlock className="my-4">
        {`\\mathbf{i} = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} \\quad \\text{and} \\quad \\mathbf{j} = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} \\quad \\text{and} \\quad \\mathbf{u} = \\begin{bmatrix} \\cos\\theta \\\\ \\sin\\theta \\end{bmatrix}`}
      </MathBlock>

      <p>
        When <InlineMath>\theta = 0</InlineMath>, the horizontal vector <InlineMath>{`\\mathbf{u}`}</InlineMath> is <InlineMath>{`\\mathbf{i}`}</InlineMath>.
        When <InlineMath>{`\\theta = 90°`}</InlineMath> (or <InlineMath>{`\\frac{\\pi}{2}`}</InlineMath> radians), the vertical vector is <InlineMath>{`\\mathbf{j}`}</InlineMath>.
        At any angle, the components <InlineMath>\cos\theta</InlineMath> and <InlineMath>\sin\theta</InlineMath> produce <InlineMath>{`\\mathbf{u} \\cdot \\mathbf{u} = 1`}</InlineMath> because <InlineMath>\cos^2\theta + \sin^2\theta = 1</InlineMath>.
      </p>

      <h2>The Angle Between Two Vectors</h2>

      <p>
        The dot product <InlineMath>{`\\mathbf{v} \\cdot \\mathbf{w}`}</InlineMath> reveals something important about the <em>angle</em> between <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath>.
      </p>

      <Theorem
        title="Dot Product and Angle"
        className="my-6"
        proof={
          <>
            <p>
              Consider the triangle formed by vectors <InlineMath>{`\\mathbf{v}`}</InlineMath>, <InlineMath>{`\\mathbf{w}`}</InlineMath>, and <InlineMath>{`\\mathbf{v} - \\mathbf{w}`}</InlineMath>.
              By the Law of Cosines:
            </p>
            <MathBlock>{`\\|\\mathbf{v} - \\mathbf{w}\\|^2 = \\|\\mathbf{v}\\|^2 + \\|\\mathbf{w}\\|^2 - 2\\|\\mathbf{v}\\|\\|\\mathbf{w}\\|\\cos\\theta`}</MathBlock>
            <p>Expanding the left side using the definition of length:</p>
            <MathBlock>{`\\|\\mathbf{v} - \\mathbf{w}\\|^2 = (\\mathbf{v} - \\mathbf{w}) \\cdot (\\mathbf{v} - \\mathbf{w})`}</MathBlock>
            <MathBlock>{`= \\mathbf{v} \\cdot \\mathbf{v} - 2\\mathbf{v} \\cdot \\mathbf{w} + \\mathbf{w} \\cdot \\mathbf{w}`}</MathBlock>
            <MathBlock>{`= \\|\\mathbf{v}\\|^2 - 2\\mathbf{v} \\cdot \\mathbf{w} + \\|\\mathbf{w}\\|^2`}</MathBlock>
            <p>Comparing the two expressions and simplifying:</p>
            <MathBlock>{`-2\\mathbf{v} \\cdot \\mathbf{w} = -2\\|\\mathbf{v}\\|\\|\\mathbf{w}\\|\\cos\\theta`}</MathBlock>
            <p>Therefore:</p>
            <MathBlock>{`\\mathbf{v} \\cdot \\mathbf{w} = \\|\\mathbf{v}\\|\\|\\mathbf{w}\\|\\cos\\theta`}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>\theta</InlineMath> is the angle between vectors <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath>, then:
        </p>
        <MathBlock>
          {`\\mathbf{v} \\cdot \\mathbf{w} = \\|\\mathbf{v}\\| \\|\\mathbf{w}\\| \\cos\\theta`}
        </MathBlock>
        <p className="mt-2">
          Equivalently:
        </p>
        <MathBlock>
          {`\\cos\\theta = \\frac{\\mathbf{v} \\cdot \\mathbf{w}}{\\|\\mathbf{v}\\| \\|\\mathbf{w}\\|}`}
        </MathBlock>
      </Theorem>

      <h2>Perpendicular Vectors</h2>

      <p>
        When <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath> are perpendicular, the angle between them is 90°.
        Since <InlineMath>\cos 90° = 0</InlineMath>, the dot product is zero.
      </p>

      <Definition title="Perpendicular (Orthogonal) Vectors" className="my-6">
        <p>
          Two vectors <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath> are <strong>perpendicular</strong> (or <strong>orthogonal</strong>) if and only if:
        </p>
        <MathBlock>
          {`\\mathbf{v} \\cdot \\mathbf{w} = 0`}
        </MathBlock>
      </Definition>

      <Example title="Perpendicular Vectors" className="my-6">
        <p>
          The vectors <InlineMath>{`\\mathbf{v} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}`}</InlineMath> and{` `}
          <InlineMath>{`\\mathbf{w} = \\begin{bmatrix} -2 \\\\ 1 \\end{bmatrix}`}</InlineMath> are perpendicular because:
        </p>
        <MathBlock>
          {`\\mathbf{v} \\cdot \\mathbf{w} = (1)(-2) + (2)(1) = -2 + 2 = 0`}
        </MathBlock>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The dot product <InlineMath>{`\\mathbf{v} \\cdot \\mathbf{w}`}</InlineMath> multiplies each component <InlineMath>v_i</InlineMath> by <InlineMath>w_i</InlineMath> and adds all <InlineMath>v_iw_i</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The length <InlineMath>{`\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}`}</InlineMath> is the square root of the dot product with itself.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>A unit vector <InlineMath>{`\\mathbf{u}`}</InlineMath> has length <InlineMath>{`\\|\\mathbf{u}\\| = 1`}</InlineMath>. To create a unit vector from any <InlineMath>{`\\mathbf{v}`}</InlineMath>, divide by its length: <InlineMath>{`\\mathbf{u} = \\mathbf{v}/\\|\\mathbf{v}\\|`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span><InlineMath>{`\\mathbf{v} \\cdot \\mathbf{w} = 0`}</InlineMath> when <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath> are perpendicular (orthogonal).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The cosine of the angle between <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath> is <InlineMath>{`\\cos\\theta = \\frac{\\mathbf{v} \\cdot \\mathbf{w}}{\\|\\mathbf{v}\\| \\|\\mathbf{w}\\|}`}</InlineMath>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
