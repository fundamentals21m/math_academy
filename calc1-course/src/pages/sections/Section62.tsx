import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <p>
        One of the most beautiful formulas in mathematics connects the exponential
        function with trigonometry. This connection, discovered by Euler, provides
        a powerful tool for working with complex numbers.
      </p>

      <h2>Euler's Formula</h2>

      <Callout type="theorem" title="Euler's Formula">
        <p>For any real number <MathInline>{`\\theta`}</MathInline>:</p>
        <MathBlock>{`e^{i\\theta} = \\cos\\theta + i\\sin\\theta`}</MathBlock>
      </Callout>

      <Callout type="info" title="Motivation">
        <p>
          If we extend the exponential function to complex numbers using power series:
        </p>
        <MathBlock>{`e^{i\\theta} = \\sum_{n=0}^{\\infty} \\frac{(i\\theta)^n}{n!}`}</MathBlock>
        <p>and separate real and imaginary parts, we get:</p>
        <MathBlock>{`e^{i\\theta} = \\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots\\right)`}</MathBlock>
        <p>
          The real part is the Taylor series for <MathInline>{`\\cos\\theta`}</MathInline>,
          and the imaginary part is the series for <MathInline>{`\\sin\\theta`}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Euler's Identity">
        <p>Setting <MathInline>{`\\theta = \\pi`}</MathInline> in Euler's formula:</p>
        <MathBlock>{`e^{i\\pi} + 1 = 0`}</MathBlock>
        <p>
          This remarkable equation relates five fundamental constants:
          <MathInline>{`e`}</MathInline>, <MathInline>{`i`}</MathInline>, <MathInline>{`\\pi`}</MathInline>,
          <MathInline>{`1`}</MathInline>, and <MathInline>{`0`}</MathInline>.
        </p>
      </Callout>

      <h2>Exponential Form of Complex Numbers</h2>

      <Callout type="definition" title="Exponential Form">
        <p>
          Using Euler's formula, the polar form <MathInline>{`z = r(\\cos\\theta + i\\sin\\theta)`}</MathInline>
          can be written as:
        </p>
        <MathBlock>{`z = re^{i\\theta}`}</MathBlock>
        <p>
          where <MathInline>{`r = |z|`}</MathInline> and <MathInline>{`\\theta = \\arg(z)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Converting to Exponential Form">
        <p>Write the following in exponential form:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <MathInline>{`z = 1 + i`}</MathInline>: <MathInline>{`r = \\sqrt{2}`}</MathInline>,
            <MathInline>{`\\theta = \\pi/4`}</MathInline>, so <MathInline>{`z = \\sqrt{2}e^{i\\pi/4}`}</MathInline>
          </li>
          <li>
            <MathInline>{`z = -2`}</MathInline>: <MathInline>{`r = 2`}</MathInline>,
            <MathInline>{`\\theta = \\pi`}</MathInline>, so <MathInline>{`z = 2e^{i\\pi}`}</MathInline>
          </li>
          <li>
            <MathInline>{`z = 3i`}</MathInline>: <MathInline>{`r = 3`}</MathInline>,
            <MathInline>{`\\theta = \\pi/2`}</MathInline>, so <MathInline>{`z = 3e^{i\\pi/2}`}</MathInline>
          </li>
          <li>
            <MathInline>{`z = 1 - \\sqrt{3}i`}</MathInline>: <MathInline>{`r = 2`}</MathInline>,
            <MathInline>{`\\theta = -\\pi/3`}</MathInline>, so <MathInline>{`z = 2e^{-i\\pi/3}`}</MathInline>
          </li>
        </ul>
      </Callout>

      <h2>Arithmetic in Exponential Form</h2>

      <Callout type="theorem" title="Multiplication and Division">
        <p>
          The exponential form makes multiplication and division elegant:
        </p>
        <MathBlock>{`(r_1 e^{i\\theta_1})(r_2 e^{i\\theta_2}) = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}`}</MathBlock>
        <MathBlock>{`\\frac{r_1 e^{i\\theta_1}}{r_2 e^{i\\theta_2}} = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Multiplication">
        <p>
          Compute <MathInline>{`(2e^{i\\pi/6})(3e^{i\\pi/4})`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`(2e^{i\\pi/6})(3e^{i\\pi/4}) = 6e^{i(\\pi/6 + \\pi/4)} = 6e^{i \\cdot 5\\pi/12}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Conjugate in Exponential Form">
        <p>
          If <MathInline>{`z = re^{i\\theta}`}</MathInline>, then:
        </p>
        <MathBlock>{`\\bar{z} = re^{-i\\theta}`}</MathBlock>
        <p>
          Conjugation negates the argument.
        </p>
      </Callout>

      <h2>De Moivre's Theorem</h2>

      <Callout type="theorem" title="De Moivre's Theorem">
        <p>For any integer <MathInline>{`n`}</MathInline>:</p>
        <MathBlock>{`(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)`}</MathBlock>
        <p>Or equivalently:</p>
        <MathBlock>{`(e^{i\\theta})^n = e^{in\\theta}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Using the exponential form, this is just the law of exponents:
        </p>
        <MathBlock>{`(e^{i\\theta})^n = e^{i\\theta \\cdot n} = e^{in\\theta} = \\cos(n\\theta) + i\\sin(n\\theta)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Computing Powers">
        <p>Compute <MathInline>{`(1 + i)^8`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Write in exponential form:</p>
        <MathBlock>{`1 + i = \\sqrt{2}e^{i\\pi/4}`}</MathBlock>
        <p>Apply De Moivre:</p>
        <MathBlock>{`(1 + i)^8 = (\\sqrt{2})^8 e^{i \\cdot 8 \\cdot \\pi/4} = 16e^{i \\cdot 2\\pi} = 16 \\cdot 1 = 16`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Another Power">
        <p>Compute <MathInline>{`(\\sqrt{3} + i)^6`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\sqrt{3} + i = 2\\left(\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i\\right) = 2e^{i\\pi/6}`}</MathBlock>
        <MathBlock>{`(\\sqrt{3} + i)^6 = 2^6 e^{i \\cdot 6 \\cdot \\pi/6} = 64e^{i\\pi} = 64(-1) = -64`}</MathBlock>
      </Callout>

      <h2>Trigonometric Identities</h2>

      <Callout type="theorem" title="Deriving Trig Identities">
        <p>
          De Moivre's theorem provides a powerful way to derive trigonometric identities.
          Expand <MathInline>{`(\\cos\\theta + i\\sin\\theta)^n`}</MathInline> and compare real and
          imaginary parts.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Double Angle Formulas">
        <p>Derive the double angle formulas using <MathInline>{`n = 2`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>By De Moivre:</p>
        <MathBlock>{`\\cos 2\\theta + i\\sin 2\\theta = (\\cos\\theta + i\\sin\\theta)^2`}</MathBlock>
        <p>Expand the right side:</p>
        <MathBlock>{`= \\cos^2\\theta + 2i\\cos\\theta\\sin\\theta - \\sin^2\\theta`}</MathBlock>
        <MathBlock>{`= (\\cos^2\\theta - \\sin^2\\theta) + i(2\\cos\\theta\\sin\\theta)`}</MathBlock>
        <p>Comparing real and imaginary parts:</p>
        <MathBlock>{`\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta`}</MathBlock>
        <MathBlock>{`\\sin 2\\theta = 2\\cos\\theta\\sin\\theta`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Triple Angle Formula">
        <p>Find <MathInline>{`\\cos 3\\theta`}</MathInline> and <MathInline>{`\\sin 3\\theta`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`(\\cos\\theta + i\\sin\\theta)^3 = \\cos 3\\theta + i\\sin 3\\theta`}</MathBlock>
        <p>Expand using binomial theorem:</p>
        <MathBlock>{`= \\cos^3\\theta + 3i\\cos^2\\theta\\sin\\theta - 3\\cos\\theta\\sin^2\\theta - i\\sin^3\\theta`}</MathBlock>
        <MathBlock>{`= (\\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta) + i(3\\cos^2\\theta\\sin\\theta - \\sin^3\\theta)`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\cos 3\\theta = \\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta = 4\\cos^3\\theta - 3\\cos\\theta`}</MathBlock>
        <MathBlock>{`\\sin 3\\theta = 3\\cos^2\\theta\\sin\\theta - \\sin^3\\theta = 3\\sin\\theta - 4\\sin^3\\theta`}</MathBlock>
      </Callout>

      <h2>Roots of Complex Numbers</h2>

      <Callout type="theorem" title="nth Roots">
        <p>
          Every nonzero complex number <MathInline>{`z`}</MathInline> has exactly <MathInline>{`n`}</MathInline>
          distinct <MathInline>{`n`}</MathInline>th roots. If <MathInline>{`z = re^{i\\theta}`}</MathInline>, the
          <MathInline>{`n`}</MathInline>th roots are:
        </p>
        <MathBlock>{`w_k = r^{1/n} e^{i(\\theta + 2\\pi k)/n}, \\quad k = 0, 1, 2, \\ldots, n-1`}</MathBlock>
      </Callout>

      <Callout type="info" title="Geometric Interpretation">
        <p>
          The <MathInline>{`n`}</MathInline>th roots of <MathInline>{`z`}</MathInline> are equally spaced
          around a circle of radius <MathInline>{`r^{1/n}`}</MathInline>, with angular separation
          <MathInline>{`2\\pi/n`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 7: Cube Roots of 1">
        <p>Find all cube roots of 1.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Write <MathInline>{`1 = e^{i \\cdot 0}`}</MathInline>. The cube roots are:
        </p>
        <MathBlock>{`w_k = 1^{1/3} e^{i(0 + 2\\pi k)/3} = e^{2\\pi i k/3}, \\quad k = 0, 1, 2`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`w_0 = e^0 = 1`}</MathInline></li>
          <li><MathInline>{`w_1 = e^{2\\pi i/3} = \\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3} = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i`}</MathInline></li>
          <li><MathInline>{`w_2 = e^{4\\pi i/3} = \\cos\\frac{4\\pi}{3} + i\\sin\\frac{4\\pi}{3} = -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i`}</MathInline></li>
        </ul>
        <p className="mt-2">
          These are the vertices of an equilateral triangle inscribed in the unit circle.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Fourth Roots of -16">
        <p>Find all fourth roots of <MathInline>{`-16`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Write <MathInline>{`-16 = 16e^{i\\pi}`}</MathInline>. The fourth roots are:</p>
        <MathBlock>{`w_k = 16^{1/4} e^{i(\\pi + 2\\pi k)/4} = 2e^{i\\pi(1 + 2k)/4}, \\quad k = 0, 1, 2, 3`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`w_0 = 2e^{i\\pi/4} = 2\\left(\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i\\right) = \\sqrt{2} + \\sqrt{2}i`}</MathInline></li>
          <li><MathInline>{`w_1 = 2e^{i3\\pi/4} = -\\sqrt{2} + \\sqrt{2}i`}</MathInline></li>
          <li><MathInline>{`w_2 = 2e^{i5\\pi/4} = -\\sqrt{2} - \\sqrt{2}i`}</MathInline></li>
          <li><MathInline>{`w_3 = 2e^{i7\\pi/4} = \\sqrt{2} - \\sqrt{2}i`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 9: Square Roots of i">
        <p>Find both square roots of <MathInline>{`i`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Write <MathInline>{`i = e^{i\\pi/2}`}</MathInline>. The square roots are:</p>
        <MathBlock>{`w_k = e^{i(\\pi/2 + 2\\pi k)/2} = e^{i\\pi(1 + 4k)/4}, \\quad k = 0, 1`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`w_0 = e^{i\\pi/4} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i = \\frac{1 + i}{\\sqrt{2}}`}</MathInline></li>
          <li><MathInline>{`w_1 = e^{i5\\pi/4} = -\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}i = -\\frac{1 + i}{\\sqrt{2}}`}</MathInline></li>
        </ul>
        <p className="mt-2">
          Verify: <MathInline>{`\\left(\\frac{1+i}{\\sqrt{2}}\\right)^2 = \\frac{1 + 2i - 1}{2} = i`}</MathInline> ✓
        </p>
      </Callout>

      <h2>Roots of Unity</h2>

      <Callout type="definition" title="nth Roots of Unity">
        <p>
          The <strong><MathInline>{`n`}</MathInline>th roots of unity</strong> are the solutions to
          <MathInline>{`z^n = 1`}</MathInline>:
        </p>
        <MathBlock>{`\\omega_k = e^{2\\pi i k/n}, \\quad k = 0, 1, \\ldots, n-1`}</MathBlock>
        <p>
          If <MathInline>{`\\omega = e^{2\\pi i/n}`}</MathInline> is the <strong>primitive</strong>
          <MathInline>{`n`}</MathInline>th root of unity, then all roots are <MathInline>{`1, \\omega, \\omega^2, \\ldots, \\omega^{n-1}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Sum of Roots of Unity">
        <p>The <MathInline>{`n`}</MathInline>th roots of unity sum to zero:</p>
        <MathBlock>{`1 + \\omega + \\omega^2 + \\cdots + \\omega^{n-1} = 0`}</MathBlock>
      </Callout>

      <h2>The Complex Exponential Function</h2>

      <Callout type="definition" title="Complex Exponential">
        <p>For any complex number <MathInline>{`z = x + iy`}</MathInline>:</p>
        <MathBlock>{`e^z = e^{x + iy} = e^x \\cdot e^{iy} = e^x(\\cos y + i\\sin y)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 10: Computing Complex Exponentials">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <MathInline>{`e^{1 + i\\pi/2} = e^1 \\cdot e^{i\\pi/2} = e(\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}) = ei`}</MathInline>
          </li>
          <li>
            <MathInline>{`e^{2 - i\\pi} = e^2 \\cdot e^{-i\\pi} = e^2(\\cos\\pi - i\\sin\\pi) = -e^2`}</MathInline>
          </li>
          <li>
            <MathInline>{`e^{i\\pi/3} = \\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3} = \\frac{1}{2} + \\frac{\\sqrt{3}}{2}i`}</MathInline>
          </li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Periodicity">
        <p>
          The complex exponential is periodic with period <MathInline>{`2\\pi i`}</MathInline>:
        </p>
        <MathBlock>{`e^{z + 2\\pi i} = e^z`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Euler's formula:</strong> <MathInline>{`e^{i\\theta} = \\cos\\theta + i\\sin\\theta`}</MathInline>
        </li>
        <li>
          <strong>Exponential form:</strong> <MathInline>{`z = re^{i\\theta}`}</MathInline>
        </li>
        <li>
          <strong>De Moivre:</strong> <MathInline>{`(e^{i\\theta})^n = e^{in\\theta}`}</MathInline>
        </li>
        <li>
          <strong>nth roots:</strong> <MathInline>{`w_k = r^{1/n}e^{i(\\theta + 2\\pi k)/n}`}</MathInline> for <MathInline>{`k = 0, \\ldots, n-1`}</MathInline>
        </li>
        <li>
          <strong>Roots of unity:</strong> <MathInline>{`e^{2\\pi ik/n}`}</MathInline> form vertices of regular <MathInline>{`n`}</MathInline>-gon
        </li>
        <li>
          <strong>Complex exponential:</strong> <MathInline>{`e^{x+iy} = e^x(\\cos y + i\\sin y)`}</MathInline>
        </li>
        <li>
          <strong>Periodicity:</strong> <MathInline>{`e^{z + 2\\pi i} = e^z`}</MathInline>
        </li>
      </ul>
    </LessonLayout>
  );
}
