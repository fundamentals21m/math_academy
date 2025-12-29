import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          each complex number <MathInline>{`z = a + bi`}</MathInline> as the point <MathInline>{`(a, b)`}</MathInline>.
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
          <li><MathInline>{`z_1 = 3 + 2i`}</MathInline> → point <MathInline>{`(3, 2)`}</MathInline></li>
          <li><MathInline>{`z_2 = -1 + 4i`}</MathInline> → point <MathInline>{`(-1, 4)`}</MathInline></li>
          <li><MathInline>{`z_3 = 2 - 3i`}</MathInline> → point <MathInline>{`(2, -3)`}</MathInline></li>
          <li><MathInline>{`z_4 = -2i`}</MathInline> → point <MathInline>{`(0, -2)`}</MathInline> (on imaginary axis)</li>
          <li><MathInline>{`z_5 = 4`}</MathInline> → point <MathInline>{`(4, 0)`}</MathInline> (on real axis)</li>
        </ul>
      </Callout>

      <h2>Modulus</h2>

      <Callout type="definition" title="Modulus (Absolute Value)">
        <p>
          The <strong>modulus</strong> (or <strong>absolute value</strong>) of
          <MathInline>{`z = a + bi`}</MathInline> is its distance from the origin:
        </p>
        <MathBlock>{`|z| = \\sqrt{a^2 + b^2}`}</MathBlock>
        <p>
          Equivalently, <MathInline>{`|z| = \\sqrt{z \\cdot \\bar{z}}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Computing Modulus">
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`|3 + 4i| = \\sqrt{9 + 16} = \\sqrt{25} = 5`}</MathInline></li>
          <li><MathInline>{`|1 - i| = \\sqrt{1 + 1} = \\sqrt{2}`}</MathInline></li>
          <li><MathInline>{`|-5| = 5`}</MathInline> (for real numbers, agrees with usual absolute value)</li>
          <li><MathInline>{`|3i| = 3`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Properties of Modulus">
        <p>For any complex numbers <MathInline>{`z, w`}</MathInline>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`|z| \\geq 0`}</MathInline>, with equality iff <MathInline>{`z = 0`}</MathInline></li>
          <li><MathInline>{`|\\bar{z}| = |z|`}</MathInline></li>
          <li><MathInline>{`|zw| = |z| \\cdot |w|`}</MathInline> (multiplicative)</li>
          <li><MathInline>{`\\left|\\frac{z}{w}\\right| = \\frac{|z|}{|w|}`}</MathInline> for <MathInline>{`w \\neq 0`}</MathInline></li>
          <li><MathInline>{`|z + w| \\leq |z| + |w|`}</MathInline> (triangle inequality)</li>
          <li><MathInline>{`||z| - |w|| \\leq |z - w|`}</MathInline> (reverse triangle inequality)</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 3: Multiplicative Property">
        <p>Verify <MathInline>{`|zw| = |z||w|`}</MathInline> for <MathInline>{`z = 1 + 2i`}</MathInline> and <MathInline>{`w = 3 - i`}</MathInline>.</p>
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
          The <strong>argument</strong> of a nonzero complex number <MathInline>{`z`}</MathInline>,
          denoted <MathInline>{`\\arg(z)`}</MathInline>, is the angle <MathInline>{`\\theta`}</MathInline> that
          the line from the origin to <MathInline>{`z`}</MathInline> makes with the positive real axis.
        </p>
        <MathBlock>{`\\theta = \\arg(z) \\quad \\text{where} \\quad \\tan\\theta = \\frac{b}{a}`}</MathBlock>
        <p>
          The argument is determined up to multiples of <MathInline>{`2\\pi`}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition" title="Principal Argument">
        <p>
          The <strong>principal argument</strong> <MathInline>{`\\text{Arg}(z)`}</MathInline> is
          the unique value of <MathInline>{`\\arg(z)`}</MathInline> in the interval <MathInline>{`(-\\pi, \\pi]`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Finding the Argument">
        <p>For <MathInline>{`z = a + bi`}</MathInline>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`a > 0`}</MathInline>: <MathInline>{`\\theta = \\arctan(b/a)`}</MathInline></li>
          <li>If <MathInline>{`a < 0, b \\geq 0`}</MathInline>: <MathInline>{`\\theta = \\arctan(b/a) + \\pi`}</MathInline></li>
          <li>If <MathInline>{`a < 0, b < 0`}</MathInline>: <MathInline>{`\\theta = \\arctan(b/a) - \\pi`}</MathInline></li>
          <li>If <MathInline>{`a = 0, b > 0`}</MathInline>: <MathInline>{`\\theta = \\pi/2`}</MathInline></li>
          <li>If <MathInline>{`a = 0, b < 0`}</MathInline>: <MathInline>{`\\theta = -\\pi/2`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 4: Finding Arguments">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <MathInline>{`z = 1 + i`}</MathInline>: <MathInline>{`\\theta = \\arctan(1/1) = \\pi/4`}</MathInline>
          </li>
          <li>
            <MathInline>{`z = -1 + i`}</MathInline>: In second quadrant, <MathInline>{`\\theta = \\pi - \\pi/4 = 3\\pi/4`}</MathInline>
          </li>
          <li>
            <MathInline>{`z = -1 - i`}</MathInline>: In third quadrant, <MathInline>{`\\theta = -3\\pi/4`}</MathInline> (principal value)
          </li>
          <li>
            <MathInline>{`z = \\sqrt{3} + i`}</MathInline>: <MathInline>{`\\theta = \\arctan(1/\\sqrt{3}) = \\pi/6`}</MathInline>
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
          where <MathInline>{`r = |z|`}</MathInline> is the modulus and <MathInline>{`\\theta = \\arg(z)`}</MathInline>
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
        <p>Write <MathInline>{`z = 1 + \\sqrt{3}i`}</MathInline> in polar form.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`r = |z| = \\sqrt{1 + 3} = 2`}</MathBlock>
        <MathBlock>{`\\theta = \\arctan\\left(\\frac{\\sqrt{3}}{1}\\right) = \\frac{\\pi}{3}`}</MathBlock>
        <p>Polar form:</p>
        <MathBlock>{`z = 2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Converting to Rectangular Form">
        <p>
          Write <MathInline>{`z = 4(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6})`}</MathInline> in
          rectangular form.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}, \\quad \\sin\\frac{5\\pi}{6} = \\frac{1}{2}`}</MathBlock>
        <MathBlock>{`z = 4\\left(-\\frac{\\sqrt{3}}{2} + i \\cdot \\frac{1}{2}\\right) = -2\\sqrt{3} + 2i`}</MathBlock>
      </Callout>

      <h2>Multiplication and Division in Polar Form</h2>

      <Callout type="theorem" title="Multiplication in Polar Form">
        <p>
          If <MathInline>{`z_1 = r_1(\\cos\\theta_1 + i\\sin\\theta_1)`}</MathInline> and
          <MathInline>{`z_2 = r_2(\\cos\\theta_2 + i\\sin\\theta_2)`}</MathInline>, then:
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
          Compute <MathInline>{`z_1 z_2`}</MathInline> where <MathInline>{`z_1 = 2(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4})`}</MathInline>
          and <MathInline>{`z_2 = 3(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6})`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`z_1 z_2 = (2)(3)\\left[\\cos\\left(\\frac{\\pi}{4} + \\frac{\\pi}{6}\\right) + i\\sin\\left(\\frac{\\pi}{4} + \\frac{\\pi}{6}\\right)\\right]`}</MathBlock>
        <MathBlock>{`= 6\\left(\\cos\\frac{5\\pi}{12} + i\\sin\\frac{5\\pi}{12}\\right)`}</MathBlock>
      </Callout>

      <h2>Geometric Interpretation of Operations</h2>

      <Callout type="info" title="Addition">
        <p>
          Adding <MathInline>{`z_1 + z_2`}</MathInline> corresponds to vector addition:
          place the vectors head-to-tail, forming a parallelogram.
        </p>
      </Callout>

      <Callout type="info" title="Multiplication by a Real Number">
        <p>
          Multiplying <MathInline>{`z`}</MathInline> by a positive real <MathInline>{`r`}</MathInline>
          scales the distance from the origin by factor <MathInline>{`r`}</MathInline>.
          Multiplying by <MathInline>{`-1`}</MathInline> reflects through the origin.
        </p>
      </Callout>

      <Callout type="info" title="Multiplication by i">
        <p>
          Multiplying by <MathInline>{`i`}</MathInline> rotates by <MathInline>{`90°`}</MathInline>
          counterclockwise:
        </p>
        <MathBlock>{`i \\cdot (a + bi) = -b + ai`}</MathBlock>
        <p>
          The point <MathInline>{`(a, b)`}</MathInline> becomes <MathInline>{`(-b, a)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="General Multiplication">
        <p>
          Multiplying <MathInline>{`z`}</MathInline> by <MathInline>{`w = r(\\cos\\theta + i\\sin\\theta)`}</MathInline>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Scales the distance from origin by <MathInline>{`r`}</MathInline></li>
          <li>Rotates counterclockwise by angle <MathInline>{`\\theta`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="info" title="Conjugation">
        <p>
          Taking the conjugate <MathInline>{`\\bar{z}`}</MathInline> reflects <MathInline>{`z`}</MathInline>
          across the real axis.
        </p>
      </Callout>

      <h2>Circles and Lines</h2>

      <Callout type="example" title="Example 8: Circle Centered at Origin">
        <p>
          The set <MathInline>{`|z| = 2`}</MathInline> is the circle of radius 2 centered at
          the origin.
        </p>
        <p>
          More generally, <MathInline>{`|z| = r`}</MathInline> is the circle of radius <MathInline>{`r`}</MathInline>
          centered at the origin.
        </p>
      </Callout>

      <Callout type="example" title="Example 9: Circle Centered at a Point">
        <p>Describe the set <MathInline>{`|z - (3 + 2i)| = 4`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is the set of all <MathInline>{`z`}</MathInline> whose distance from <MathInline>{`3 + 2i`}</MathInline>
          is 4. It's a circle of radius 4 centered at <MathInline>{`(3, 2)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 10: Perpendicular Bisector">
        <p>Describe the set <MathInline>{`|z - 1| = |z + 1|`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is the set of points equidistant from <MathInline>{`1`}</MathInline> and <MathInline>{`-1`}</MathInline>.
          This is the perpendicular bisector of the segment from <MathInline>{`-1`}</MathInline> to <MathInline>{`1`}</MathInline>,
          which is the imaginary axis: <MathInline>{`\\text{Re}(z) = 0`}</MathInline>.
        </p>
      </Callout>

      <h2>Distance Formula</h2>

      <Callout type="theorem" title="Distance Between Complex Numbers">
        <p>
          The distance between <MathInline>{`z_1`}</MathInline> and <MathInline>{`z_2`}</MathInline> is:
        </p>
        <MathBlock>{`d(z_1, z_2) = |z_1 - z_2|`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 11: Computing Distance">
        <p>Find the distance between <MathInline>{`z_1 = 2 + 5i`}</MathInline> and <MathInline>{`z_2 = -1 + i`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`|z_1 - z_2| = |(2 + 5i) - (-1 + i)| = |3 + 4i| = 5`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Complex plane:</strong> <MathInline>{`z = a + bi`}</MathInline> corresponds to point <MathInline>{`(a, b)`}</MathInline>
        </li>
        <li>
          <strong>Modulus:</strong> <MathInline>{`|z| = \\sqrt{a^2 + b^2}`}</MathInline> (distance from origin)
        </li>
        <li>
          <strong>Argument:</strong> <MathInline>{`\\arg(z)`}</MathInline> is the angle from positive real axis
        </li>
        <li>
          <strong>Polar form:</strong> <MathInline>{`z = r(\\cos\\theta + i\\sin\\theta)`}</MathInline>
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
          <strong>Distance:</strong> <MathInline>{`d(z_1, z_2) = |z_1 - z_2|`}</MathInline>
        </li>
      </ul>
    </LessonLayout>
  );
}
