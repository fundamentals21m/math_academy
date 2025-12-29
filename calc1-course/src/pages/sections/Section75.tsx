import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section75() {
  return (
    <LessonLayout sectionId={75}>
      <h1>Dot Product</h1>

      <p>
        The <strong>dot product</strong> (also called the <strong>inner product</strong> or <strong>scalar product</strong>)
        is an operation that takes two vectors and produces a scalar. It provides a way
        to measure lengths, angles, and orthogonality in <MathInline>{`\\mathbb{R}^n`}</MathInline>.
      </p>

      <h2>Definition of the Dot Product</h2>

      <Callout type="definition" title="Dot Product">
        <p>
          For vectors <MathInline>{`\\mathbf{x} = (x_1, \\ldots, x_n)`}</MathInline> and <MathInline>{`\\mathbf{y} = (y_1, \\ldots, y_n)`}</MathInline> in <MathInline>{`\\mathbb{R}^n`}</MathInline>,
          the <strong>dot product</strong> is:
        </p>
        <MathBlock>{`\\mathbf{x} \\cdot \\mathbf{y} = x_1 y_1 + x_2 y_2 + \\cdots + x_n y_n = \\sum_{i=1}^n x_i y_i`}</MathBlock>
      </Callout>

      <Callout type="example" title="Computing Dot Products">
        <p>In <MathInline>{`\\mathbb{R}^3`}</MathInline>:</p>
        <MathBlock>{`(1, 2, 3) \\cdot (4, -1, 2) = 1(4) + 2(-1) + 3(2) = 4 - 2 + 6 = 8`}</MathBlock>
        <p>In <MathInline>{`\\mathbb{R}^2`}</MathInline>:</p>
        <MathBlock>{`(3, 4) \\cdot (3, 4) = 9 + 16 = 25`}</MathBlock>
        <MathBlock>{`(1, 0) \\cdot (0, 1) = 0 + 0 = 0`}</MathBlock>
      </Callout>

      <h2>Properties of the Dot Product</h2>

      <Callout type="theorem" title="Algebraic Properties">
        <p>For all <MathInline>{`\\mathbf{x}, \\mathbf{y}, \\mathbf{z} \\in \\mathbb{R}^n`}</MathInline> and <MathInline>{`c \\in \\mathbb{R}`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`\\mathbf{x} \\cdot \\mathbf{y} = \\mathbf{y} \\cdot \\mathbf{x}`}</MathInline> (commutativity)</li>
          <li><MathInline>{`\\mathbf{x} \\cdot (\\mathbf{y} + \\mathbf{z}) = \\mathbf{x} \\cdot \\mathbf{y} + \\mathbf{x} \\cdot \\mathbf{z}`}</MathInline> (distributivity)</li>
          <li><MathInline>{`(c\\mathbf{x}) \\cdot \\mathbf{y} = c(\\mathbf{x} \\cdot \\mathbf{y}) = \\mathbf{x} \\cdot (c\\mathbf{y})`}</MathInline> (scalar associativity)</li>
          <li><MathInline>{`\\mathbf{x} \\cdot \\mathbf{x} \\geq 0`}</MathInline>, with equality iff <MathInline>{`\\mathbf{x} = \\mathbf{0}`}</MathInline> (positive definiteness)</li>
        </ol>
      </Callout>

      <h2>Length of a Vector</h2>

      <p>
        The dot product allows us to define the <strong>length</strong> (or <strong>norm</strong> or <strong>magnitude</strong>) of a vector.
      </p>

      <Callout type="definition" title="Euclidean Norm">
        <p>The <strong>length</strong> of <MathInline>{`\\mathbf{x} = (x_1, \\ldots, x_n)`}</MathInline> is:</p>
        <MathBlock>{`\\|\\mathbf{x}\\| = \\sqrt{\\mathbf{x} \\cdot \\mathbf{x}} = \\sqrt{x_1^2 + x_2^2 + \\cdots + x_n^2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Computing Lengths">
        <MathBlock>{`\\|(3, 4)\\| = \\sqrt{9 + 16} = \\sqrt{25} = 5`}</MathBlock>
        <MathBlock>{`\\|(1, 2, 2)\\| = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3`}</MathBlock>
        <MathBlock>{`\\|(1, 1, 1, 1)\\| = \\sqrt{1 + 1 + 1 + 1} = 2`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of the Norm">
        <p>For all <MathInline>{`\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n`}</MathInline> and <MathInline>{`c \\in \\mathbb{R}`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`\\|\\mathbf{x}\\| \\geq 0`}</MathInline>, with <MathInline>{`\\|\\mathbf{x}\\| = 0`}</MathInline> iff <MathInline>{`\\mathbf{x} = \\mathbf{0}`}</MathInline></li>
          <li><MathInline>{`\\|c\\mathbf{x}\\| = |c| \\|\\mathbf{x}\\|`}</MathInline> (homogeneity)</li>
          <li><MathInline>{`\\|\\mathbf{x} + \\mathbf{y}\\| \\leq \\|\\mathbf{x}\\| + \\|\\mathbf{y}\\|`}</MathInline> (triangle inequality)</li>
        </ol>
      </Callout>

      <h2>Unit Vectors</h2>

      <Callout type="definition" title="Unit Vector">
        <p>
          A <strong>unit vector</strong> is a vector of length 1. For any nonzero
          vector <MathInline>{`\\mathbf{x}`}</MathInline>, the <strong>unit vector in the direction
          of <MathInline>{`\\mathbf{x}`}</MathInline></strong> is:
        </p>
        <MathBlock>{`\\hat{\\mathbf{x}} = \\frac{\\mathbf{x}}{\\|\\mathbf{x}\\|}`}</MathBlock>
        <p>This process is called <strong>normalizing</strong> the vector.</p>
      </Callout>

      <Callout type="example" title="Finding Unit Vectors">
        <p>Find the unit vector in the direction of <MathInline>{`\\mathbf{v} = (3, 4)`}</MathInline>.</p>
        <p><strong>Solution:</strong> <MathInline>{`\\|\\mathbf{v}\\| = 5`}</MathInline>, so:</p>
        <MathBlock>{`\\hat{\\mathbf{v}} = \\frac{1}{5}(3, 4) = \\left(\\frac{3}{5}, \\frac{4}{5}\\right)`}</MathBlock>
        <p>Check: <MathInline>{`\\|\\hat{\\mathbf{v}}\\| = \\sqrt{9/25 + 16/25} = \\sqrt{25/25} = 1`}</MathInline> ✓</p>
      </Callout>

      <h2>Distance Between Vectors</h2>

      <Callout type="definition" title="Euclidean Distance">
        <p>The <strong>distance</strong> between <MathInline>{`\\mathbf{x}`}</MathInline> and <MathInline>{`\\mathbf{y}`}</MathInline> is:</p>
        <MathBlock>{`d(\\mathbf{x}, \\mathbf{y}) = \\|\\mathbf{x} - \\mathbf{y}\\| = \\sqrt{\\sum_{i=1}^n (x_i - y_i)^2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Computing Distance">
        <p>Find the distance between <MathInline>{`(1, 2, 3)`}</MathInline> and <MathInline>{`(4, 6, 3)`}</MathInline>.</p>
        <MathBlock>{`d = \\|(1-4, 2-6, 3-3)\\| = \\|(-3, -4, 0)\\| = \\sqrt{9 + 16 + 0} = 5`}</MathBlock>
      </Callout>

      <h2>The Angle Between Vectors</h2>

      <p>
        The dot product relates directly to the angle between vectors.
      </p>

      <Callout type="theorem" title="Geometric Formula for Dot Product">
        <p>For nonzero vectors <MathInline>{`\\mathbf{x}`}</MathInline> and <MathInline>{`\\mathbf{y}`}</MathInline>:</p>
        <MathBlock>{`\\mathbf{x} \\cdot \\mathbf{y} = \\|\\mathbf{x}\\| \\|\\mathbf{y}\\| \\cos\\theta`}</MathBlock>
        <p>where <MathInline>{`\\theta`}</MathInline> is the angle between them (<MathInline>{`0 \\leq \\theta \\leq \\pi`}</MathInline>).</p>
      </Callout>

      <p>
        Solving for the angle:
      </p>
      <MathBlock>{`\\cos\\theta = \\frac{\\mathbf{x} \\cdot \\mathbf{y}}{\\|\\mathbf{x}\\| \\|\\mathbf{y}\\|}`}</MathBlock>

      <Callout type="example" title="Finding the Angle">
        <p>Find the angle between <MathInline>{`\\mathbf{x} = (1, 0)`}</MathInline> and <MathInline>{`\\mathbf{y} = (1, 1)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{x} \\cdot \\mathbf{y} = 1(1) + 0(1) = 1`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{x}\\| = 1, \\quad \\|\\mathbf{y}\\| = \\sqrt{2}`}</MathBlock>
        <MathBlock>{`\\cos\\theta = \\frac{1}{1 \\cdot \\sqrt{2}} = \\frac{1}{\\sqrt{2}}`}</MathBlock>
        <p>So <MathInline>{`\\theta = \\pi/4 = 45°`}</MathInline>.</p>
      </Callout>

      <h2>Orthogonality</h2>

      <Callout type="definition" title="Orthogonal Vectors">
        <p>
          Vectors <MathInline>{`\\mathbf{x}`}</MathInline> and <MathInline>{`\\mathbf{y}`}</MathInline> are <strong>orthogonal</strong> (perpendicular)
          if their dot product is zero:
        </p>
        <MathBlock>{`\\mathbf{x} \\perp \\mathbf{y} \\iff \\mathbf{x} \\cdot \\mathbf{y} = 0`}</MathBlock>
        <p>This corresponds to <MathInline>{`\\theta = 90°`}</MathInline> (or <MathInline>{`\\pi/2`}</MathInline> radians).</p>
      </Callout>

      <Callout type="example" title="Orthogonal Vectors">
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`(1, 0) \\perp (0, 1)`}</MathInline> since <MathInline>{`1(0) + 0(1) = 0`}</MathInline></li>
          <li><MathInline>{`(1, 2) \\perp (2, -1)`}</MathInline> since <MathInline>{`1(2) + 2(-1) = 0`}</MathInline></li>
          <li><MathInline>{`(1, 1, 1) \\perp (1, -2, 1)`}</MathInline> since <MathInline>{`1 - 2 + 1 = 0`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="info" title="The Zero Vector">
        <p>
          The zero vector <MathInline>{`\\mathbf{0}`}</MathInline> is orthogonal to every vector, since <MathInline>{`\\mathbf{0} \\cdot \\mathbf{x} = 0`}</MathInline> for all <MathInline>{`\\mathbf{x}`}</MathInline>.
        </p>
      </Callout>

      <h2>Orthogonal Projection</h2>

      <Callout type="definition" title="Projection onto a Vector">
        <p>
          The <strong>orthogonal projection</strong> of <MathInline>{`\\mathbf{x}`}</MathInline> onto a nonzero
          vector <MathInline>{`\\mathbf{y}`}</MathInline> is:
        </p>
        <MathBlock>{`\\text{proj}_{\\mathbf{y}}\\mathbf{x} = \\frac{\\mathbf{x} \\cdot \\mathbf{y}}{\\|\\mathbf{y}\\|^2}\\mathbf{y} = \\frac{\\mathbf{x} \\cdot \\mathbf{y}}{\\mathbf{y} \\cdot \\mathbf{y}}\\mathbf{y}`}</MathBlock>
        <p>The <strong>scalar projection</strong> (or component) is:</p>
        <MathBlock>{`\\text{comp}_{\\mathbf{y}}\\mathbf{x} = \\frac{\\mathbf{x} \\cdot \\mathbf{y}}{\\|\\mathbf{y}\\|}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Computing a Projection">
        <p>Find the projection of <MathInline>{`\\mathbf{x} = (3, 4)`}</MathInline> onto <MathInline>{`\\mathbf{y} = (1, 0)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{x} \\cdot \\mathbf{y} = 3, \\quad \\|\\mathbf{y}\\|^2 = 1`}</MathBlock>
        <MathBlock>{`\\text{proj}_{\\mathbf{y}}\\mathbf{x} = \\frac{3}{1}(1, 0) = (3, 0)`}</MathBlock>
        <p>This is the "shadow" of <MathInline>{`\\mathbf{x}`}</MathInline> onto the x-axis.</p>
      </Callout>

      <Callout type="info" title="Decomposition">
        <p>Any vector <MathInline>{`\\mathbf{x}`}</MathInline> can be decomposed as:</p>
        <MathBlock>{`\\mathbf{x} = \\text{proj}_{\\mathbf{y}}\\mathbf{x} + (\\mathbf{x} - \\text{proj}_{\\mathbf{y}}\\mathbf{x})`}</MathBlock>
        <p>
          where <MathInline>{`\\text{proj}_{\\mathbf{y}}\\mathbf{x}`}</MathInline> is parallel to <MathInline>{`\\mathbf{y}`}</MathInline> and
          <MathInline>{`\\mathbf{x} - \\text{proj}_{\\mathbf{y}}\\mathbf{x}`}</MathInline> is orthogonal to <MathInline>{`\\mathbf{y}`}</MathInline>.
        </p>
      </Callout>

      <h2>The Cauchy-Schwarz Inequality</h2>

      <Callout type="theorem" title="Cauchy-Schwarz Inequality">
        <p>For all <MathInline>{`\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n`}</MathInline>:</p>
        <MathBlock>{`|\\mathbf{x} \\cdot \\mathbf{y}| \\leq \\|\\mathbf{x}\\| \\|\\mathbf{y}\\|`}</MathBlock>
        <p>
          Equality holds if and only if <MathInline>{`\\mathbf{x}`}</MathInline> and <MathInline>{`\\mathbf{y}`}</MathInline> are
          parallel (one is a scalar multiple of the other).
        </p>
      </Callout>

      <p>
        This inequality is equivalent to <MathInline>{`|\\cos\\theta| \\leq 1`}</MathInline> and underlies
        many important results in analysis.
      </p>

      <Callout type="example" title="Verifying Cauchy-Schwarz">
        <p>For <MathInline>{`\\mathbf{x} = (1, 2)`}</MathInline> and <MathInline>{`\\mathbf{y} = (3, 1)`}</MathInline>:</p>
        <MathBlock>{`|\\mathbf{x} \\cdot \\mathbf{y}| = |3 + 2| = 5`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{x}\\|\\|\\mathbf{y}\\| = \\sqrt{5} \\cdot \\sqrt{10} = \\sqrt{50} \\approx 7.07`}</MathBlock>
        <p>Indeed, <MathInline>{`5 < 7.07`}</MathInline> ✓</p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Dot product:</strong> <MathInline>{`\\mathbf{x} \\cdot \\mathbf{y} = \\sum x_i y_i = \\|\\mathbf{x}\\|\\|\\mathbf{y}\\|\\cos\\theta`}</MathInline></p>
        <p><strong>Length:</strong> <MathInline>{`\\|\\mathbf{x}\\| = \\sqrt{\\mathbf{x} \\cdot \\mathbf{x}}`}</MathInline></p>
        <p><strong>Unit vector:</strong> <MathInline>{`\\hat{\\mathbf{x}} = \\mathbf{x}/\\|\\mathbf{x}\\|`}</MathInline></p>
        <p><strong>Distance:</strong> <MathInline>{`d(\\mathbf{x}, \\mathbf{y}) = \\|\\mathbf{x} - \\mathbf{y}\\|`}</MathInline></p>
        <p><strong>Angle:</strong> <MathInline>{`\\cos\\theta = \\frac{\\mathbf{x} \\cdot \\mathbf{y}}{\\|\\mathbf{x}\\|\\|\\mathbf{y}\\|}`}</MathInline></p>
        <p><strong>Orthogonality:</strong> <MathInline>{`\\mathbf{x} \\perp \\mathbf{y} \\iff \\mathbf{x} \\cdot \\mathbf{y} = 0`}</MathInline></p>
        <p><strong>Projection:</strong> <MathInline>{`\\text{proj}_{\\mathbf{y}}\\mathbf{x} = \\frac{\\mathbf{x} \\cdot \\mathbf{y}}{\\|\\mathbf{y}\\|^2}\\mathbf{y}`}</MathInline></p>
        <p><strong>Cauchy-Schwarz:</strong> <MathInline>{`|\\mathbf{x} \\cdot \\mathbf{y}| \\leq \\|\\mathbf{x}\\|\\|\\mathbf{y}\\|`}</MathInline></p>
      </Callout>
    </LessonLayout>
  );
}
