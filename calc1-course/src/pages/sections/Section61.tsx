import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <p>
        Complex numbers have a beautiful geometric interpretation. Each complex number
        corresponds to a point in a plane, and arithmetic operations correspond to
        geometric transformations.
      </p>

      <h2>The Complex Plane</h2>

      <Callout type="definition" title="Complex Plane">
        <p>
          The <strong>complex plane</strong> (or <strong>Argand plane</strong>) represents
          each complex number <InlineMath>{`z = a + bi`}</InlineMath> as the point <InlineMath>{`(a, b)`}</InlineMath>.
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>The horizontal axis is the <strong>real axis</strong></li>
          <li>The vertical axis is the <strong>imaginary axis</strong></li>
          <li>Real numbers lie on the real axis</li>
          <li>Purely imaginary numbers lie on the imaginary axis</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 1: Plotting Complex Numbers">
        <p>Plot the following in the complex plane:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`z_1 = 3 + 2i`}</InlineMath> → point <InlineMath>{`(3, 2)`}</InlineMath></li>
          <li><InlineMath>{`z_2 = -1 + 4i`}</InlineMath> → point <InlineMath>{`(-1, 4)`}</InlineMath></li>
          <li><InlineMath>{`z_3 = 2 - 3i`}</InlineMath> → point <InlineMath>{`(2, -3)`}</InlineMath></li>
          <li><InlineMath>{`z_4 = -2i`}</InlineMath> → point <InlineMath>{`(0, -2)`}</InlineMath> (on imaginary axis)</li>
          <li><InlineMath>{`z_5 = 4`}</InlineMath> → point <InlineMath>{`(4, 0)`}</InlineMath> (on real axis)</li>
        </ul>
      </Callout>

      <h2>Modulus</h2>

      <Callout type="definition" title="Modulus (Absolute Value)">
        <p>
          The <strong>modulus</strong> (or <strong>absolute value</strong>) of
          <InlineMath>{`z = a + bi`}</InlineMath> is its distance from the origin:
        </p>
        <MathBlock>{`|z| = \\sqrt{a^2 + b^2}`}</MathBlock>
        <p>
          Equivalently, <InlineMath>{`|z| = \\sqrt{z \\cdot \\bar{z}}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Computing Modulus">
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`|3 + 4i| = \\sqrt{9 + 16} = \\sqrt{25} = 5`}</InlineMath></li>
          <li><InlineMath>{`|1 - i| = \\sqrt{1 + 1} = \\sqrt{2}`}</InlineMath></li>
          <li><InlineMath>{`|-5| = 5`}</InlineMath> (for real numbers, agrees with usual absolute value)</li>
          <li><InlineMath>{`|3i| = 3`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Properties of Modulus">
        <p>For any complex numbers <InlineMath>{`z, w`}</InlineMath>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`|z| \\geq 0`}</InlineMath>, with equality iff <InlineMath>{`z = 0`}</InlineMath></li>
          <li><InlineMath>{`|\\bar{z}| = |z|`}</InlineMath></li>
          <li><InlineMath>{`|zw| = |z| \\cdot |w|`}</InlineMath> (multiplicative)</li>
          <li><InlineMath>{`\\left|\\frac{z}{w}\\right| = \\frac{|z|}{|w|}`}</InlineMath> for <InlineMath>{`w \\neq 0`}</InlineMath></li>
          <li><InlineMath>{`|z + w| \\leq |z| + |w|`}</InlineMath> (triangle inequality)</li>
          <li><InlineMath>{`||z| - |w|| \\leq |z - w|`}</InlineMath> (reverse triangle inequality)</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 3: Multiplicative Property">
        <p>Verify <InlineMath>{`|zw| = |z||w|`}</InlineMath> for <InlineMath>{`z = 1 + 2i`}</InlineMath> and <InlineMath>{`w = 3 - i`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`zw = (1 + 2i)(3 - i) = 3 - i + 6i - 2i^2 = 3 + 5i + 2 = 5 + 5i`}</MathBlock>
        <MathBlock>{`|zw| = |5 + 5i| = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2}`}</MathBlock>
        <p>Also:</p>
        <MathBlock>{`|z| = \\sqrt{1 + 4} = \\sqrt{5}, \\quad |w| = \\sqrt{9 + 1} = \\sqrt{10}`}</MathBlock>
        <MathBlock>{`|z||w| = \\sqrt{5} \\cdot \\sqrt{10} = \\sqrt{50} = 5\\sqrt{2} \\quad \\checkmark`}</MathBlock>
      </Callout>

      <h2>Argument</h2>

      <Callout type="definition" title="Argument">
        <p>
          The <strong>argument</strong> of a nonzero complex number <InlineMath>{`z`}</InlineMath>,
          denoted <InlineMath>{`\\arg(z)`}</InlineMath>, is the angle <InlineMath>{`\\theta`}</InlineMath> that
          the line from the origin to <InlineMath>{`z`}</InlineMath> makes with the positive real axis.
        </p>
        <MathBlock>{`\\theta = \\arg(z) \\quad \\text{where} \\quad \\tan\\theta = \\frac{b}{a}`}</MathBlock>
        <p>
          The argument is determined up to multiples of <InlineMath>{`2\\pi`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="definition" title="Principal Argument">
        <p>
          The <strong>principal argument</strong> <InlineMath>{`\\text{Arg}(z)`}</InlineMath> is
          the unique value of <InlineMath>{`\\arg(z)`}</InlineMath> in the interval <InlineMath>{`(-\\pi, \\pi]`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Finding the Argument">
        <p>For <InlineMath>{`z = a + bi`}</InlineMath>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`a > 0`}</InlineMath>: <InlineMath>{`\\theta = \\arctan(b/a)`}</InlineMath></li>
          <li>If <InlineMath>{`a < 0, b \\geq 0`}</InlineMath>: <InlineMath>{`\\theta = \\arctan(b/a) + \\pi`}</InlineMath></li>
          <li>If <InlineMath>{`a < 0, b < 0`}</InlineMath>: <InlineMath>{`\\theta = \\arctan(b/a) - \\pi`}</InlineMath></li>
          <li>If <InlineMath>{`a = 0, b > 0`}</InlineMath>: <InlineMath>{`\\theta = \\pi/2`}</InlineMath></li>
          <li>If <InlineMath>{`a = 0, b < 0`}</InlineMath>: <InlineMath>{`\\theta = -\\pi/2`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 4: Finding Arguments">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <InlineMath>{`z = 1 + i`}</InlineMath>: <InlineMath>{`\\theta = \\arctan(1/1) = \\pi/4`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`z = -1 + i`}</InlineMath>: In second quadrant, <InlineMath>{`\\theta = \\pi - \\pi/4 = 3\\pi/4`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`z = -1 - i`}</InlineMath>: In third quadrant, <InlineMath>{`\\theta = -3\\pi/4`}</InlineMath> (principal value)
          </li>
          <li>
            <InlineMath>{`z = \\sqrt{3} + i`}</InlineMath>: <InlineMath>{`\\theta = \\arctan(1/\\sqrt{3}) = \\pi/6`}</InlineMath>
          </li>
        </ul>
      </Callout>

      <h2>Polar Form</h2>

      <Callout type="definition" title="Polar Form">
        <p>
          Every nonzero complex number can be written in <strong>polar form</strong>:
        </p>
        <MathBlock>{`z = r(\\cos\\theta + i\\sin\\theta)`}</MathBlock>
        <p>
          where <InlineMath>{`r = |z|`}</InlineMath> is the modulus and <InlineMath>{`\\theta = \\arg(z)`}</InlineMath>
          is the argument.
        </p>
      </Callout>

      <Callout type="info" title="Converting Between Forms">
        <p><strong>Rectangular to polar:</strong></p>
        <MathBlock>{`r = \\sqrt{a^2 + b^2}, \\quad \\theta = \\arg(a + bi)`}</MathBlock>
        <p><strong>Polar to rectangular:</strong></p>
        <MathBlock>{`a = r\\cos\\theta, \\quad b = r\\sin\\theta`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Converting to Polar Form">
        <p>Write <InlineMath>{`z = 1 + \\sqrt{3}i`}</InlineMath> in polar form.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`r = |z| = \\sqrt{1 + 3} = 2`}</MathBlock>
        <MathBlock>{`\\theta = \\arctan\\left(\\frac{\\sqrt{3}}{1}\\right) = \\frac{\\pi}{3}`}</MathBlock>
        <p>Polar form:</p>
        <MathBlock>{`z = 2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Converting to Rectangular Form">
        <p>
          Write <InlineMath>{`z = 4(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6})`}</InlineMath> in
          rectangular form.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}, \\quad \\sin\\frac{5\\pi}{6} = \\frac{1}{2}`}</MathBlock>
        <MathBlock>{`z = 4\\left(-\\frac{\\sqrt{3}}{2} + i \\cdot \\frac{1}{2}\\right) = -2\\sqrt{3} + 2i`}</MathBlock>
      </Callout>

      <h2>Multiplication and Division in Polar Form</h2>

      <Callout type="theorem" title="Multiplication in Polar Form">
        <p>
          If <InlineMath>{`z_1 = r_1(\\cos\\theta_1 + i\\sin\\theta_1)`}</InlineMath> and
          <InlineMath>{`z_2 = r_2(\\cos\\theta_2 + i\\sin\\theta_2)`}</InlineMath>, then:
        </p>
        <MathBlock>{`z_1 z_2 = r_1 r_2 [\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2)]`}</MathBlock>
        <p>
          <strong>Multiply moduli, add arguments.</strong>
        </p>
      </Callout>

      <Callout type="theorem" title="Division in Polar Form">
        <MathBlock>{`\\frac{z_1}{z_2} = \\frac{r_1}{r_2}[\\cos(\\theta_1 - \\theta_2) + i\\sin(\\theta_1 - \\theta_2)]`}</MathBlock>
        <p>
          <strong>Divide moduli, subtract arguments.</strong>
        </p>
      </Callout>

      <Callout type="example" title="Example 7: Multiplication">
        <p>
          Compute <InlineMath>{`z_1 z_2`}</InlineMath> where <InlineMath>{`z_1 = 2(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4})`}</InlineMath>
          and <InlineMath>{`z_2 = 3(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6})`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`z_1 z_2 = (2)(3)\\left[\\cos\\left(\\frac{\\pi}{4} + \\frac{\\pi}{6}\\right) + i\\sin\\left(\\frac{\\pi}{4} + \\frac{\\pi}{6}\\right)\\right]`}</MathBlock>
        <MathBlock>{`= 6\\left(\\cos\\frac{5\\pi}{12} + i\\sin\\frac{5\\pi}{12}\\right)`}</MathBlock>
      </Callout>

      <h2>Geometric Interpretation of Operations</h2>

      <Callout type="info" title="Addition">
        <p>
          Adding <InlineMath>{`z_1 + z_2`}</InlineMath> corresponds to vector addition:
          place the vectors head-to-tail, forming a parallelogram.
        </p>
      </Callout>

      <Callout type="info" title="Multiplication by a Real Number">
        <p>
          Multiplying <InlineMath>{`z`}</InlineMath> by a positive real <InlineMath>{`r`}</InlineMath>
          scales the distance from the origin by factor <InlineMath>{`r`}</InlineMath>.
          Multiplying by <InlineMath>{`-1`}</InlineMath> reflects through the origin.
        </p>
      </Callout>

      <Callout type="info" title="Multiplication by i">
        <p>
          Multiplying by <InlineMath>{`i`}</InlineMath> rotates by <InlineMath>{`90°`}</InlineMath>
          counterclockwise:
        </p>
        <MathBlock>{`i \\cdot (a + bi) = -b + ai`}</MathBlock>
        <p>
          The point <InlineMath>{`(a, b)`}</InlineMath> becomes <InlineMath>{`(-b, a)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="General Multiplication">
        <p>
          Multiplying <InlineMath>{`z`}</InlineMath> by <InlineMath>{`w = r(\\cos\\theta + i\\sin\\theta)`}</InlineMath>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Scales the distance from origin by <InlineMath>{`r`}</InlineMath></li>
          <li>Rotates counterclockwise by angle <InlineMath>{`\\theta`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="info" title="Conjugation">
        <p>
          Taking the conjugate <InlineMath>{`\\bar{z}`}</InlineMath> reflects <InlineMath>{`z`}</InlineMath>
          across the real axis.
        </p>
      </Callout>

      <h2>Circles and Lines</h2>

      <Callout type="example" title="Example 8: Circle Centered at Origin">
        <p>
          The set <InlineMath>{`|z| = 2`}</InlineMath> is the circle of radius 2 centered at
          the origin.
        </p>
        <p>
          More generally, <InlineMath>{`|z| = r`}</InlineMath> is the circle of radius <InlineMath>{`r`}</InlineMath>
          centered at the origin.
        </p>
      </Callout>

      <Callout type="example" title="Example 9: Circle Centered at a Point">
        <p>Describe the set <InlineMath>{`|z - (3 + 2i)| = 4`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is the set of all <InlineMath>{`z`}</InlineMath> whose distance from <InlineMath>{`3 + 2i`}</InlineMath>
          is 4. It's a circle of radius 4 centered at <InlineMath>{`(3, 2)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 10: Perpendicular Bisector">
        <p>Describe the set <InlineMath>{`|z - 1| = |z + 1|`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is the set of points equidistant from <InlineMath>{`1`}</InlineMath> and <InlineMath>{`-1`}</InlineMath>.
          This is the perpendicular bisector of the segment from <InlineMath>{`-1`}</InlineMath> to <InlineMath>{`1`}</InlineMath>,
          which is the imaginary axis: <InlineMath>{`\\text{Re}(z) = 0`}</InlineMath>.
        </p>
      </Callout>

      <h2>Distance Formula</h2>

      <Callout type="theorem" title="Distance Between Complex Numbers">
        <p>
          The distance between <InlineMath>{`z_1`}</InlineMath> and <InlineMath>{`z_2`}</InlineMath> is:
        </p>
        <MathBlock>{`d(z_1, z_2) = |z_1 - z_2|`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 11: Computing Distance">
        <p>Find the distance between <InlineMath>{`z_1 = 2 + 5i`}</InlineMath> and <InlineMath>{`z_2 = -1 + i`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`|z_1 - z_2| = |(2 + 5i) - (-1 + i)| = |3 + 4i| = 5`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Complex plane:</strong> <InlineMath>{`z = a + bi`}</InlineMath> corresponds to point <InlineMath>{`(a, b)`}</InlineMath>
        </li>
        <li>
          <strong>Modulus:</strong> <InlineMath>{`|z| = \\sqrt{a^2 + b^2}`}</InlineMath> (distance from origin)
        </li>
        <li>
          <strong>Argument:</strong> <InlineMath>{`\\arg(z)`}</InlineMath> is the angle from positive real axis
        </li>
        <li>
          <strong>Polar form:</strong> <InlineMath>{`z = r(\\cos\\theta + i\\sin\\theta)`}</InlineMath>
        </li>
        <li>
          <strong>Multiplication:</strong> Multiply moduli, add arguments
        </li>
        <li>
          <strong>Division:</strong> Divide moduli, subtract arguments
        </li>
        <li>
          <strong>Multiply by i:</strong> Rotate 90° counterclockwise
        </li>
        <li>
          <strong>Conjugate:</strong> Reflect across real axis
        </li>
        <li>
          <strong>Distance:</strong> <InlineMath>{`d(z_1, z_2) = |z_1 - z_2|`}</InlineMath>
        </li>
      </ul>
    </LessonLayout>
  );
}
