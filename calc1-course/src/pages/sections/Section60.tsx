import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <p>
        The real numbers, while sufficient for measuring lengths and quantities,
        cannot solve all algebraic equations. The equation <MathInline>{`x^2 + 1 = 0`}</MathInline>
        has no real solution. To address this, we extend the real numbers to the
        <strong> complex numbers</strong>.
      </p>

      <h2>The Imaginary Unit</h2>

      <Callout type="definition" title="The Imaginary Unit">
        <p>
          The <strong>imaginary unit</strong> <MathInline>{`i`}</MathInline> is defined by the property:
        </p>
        <MathBlock>{`i^2 = -1`}</MathBlock>
        <p>
          Equivalently, <MathInline>{`i = \\sqrt{-1}`}</MathInline>, though this notation requires care.
        </p>
      </Callout>

      <Callout type="info" title="Historical Note">
        <p>
          The term "imaginary" is unfortunate—complex numbers are no less real than
          real numbers. Both are abstract mathematical objects. Complex numbers
          appear naturally in physics, engineering, and pure mathematics.
        </p>
      </Callout>

      <h2>Complex Numbers</h2>

      <Callout type="definition" title="Complex Number">
        <p>
          A <strong>complex number</strong> is an expression of the form:
        </p>
        <MathBlock>{`z = a + bi`}</MathBlock>
        <p>
          where <MathInline>{`a`}</MathInline> and <MathInline>{`b`}</MathInline> are real numbers.
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><MathInline>{`a = \\text{Re}(z)`}</MathInline> is the <strong>real part</strong></li>
          <li><MathInline>{`b = \\text{Im}(z)`}</MathInline> is the <strong>imaginary part</strong></li>
        </ul>
        <p className="mt-2">
          The set of all complex numbers is denoted <MathInline>{`\\mathbb{C}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Special Cases">
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`b = 0`}</MathInline>, then <MathInline>{`z = a`}</MathInline> is a real number</li>
          <li>If <MathInline>{`a = 0`}</MathInline> and <MathInline>{`b \\neq 0`}</MathInline>, then <MathInline>{`z = bi`}</MathInline> is <strong>purely imaginary</strong></li>
          <li>The real numbers <MathInline>{`\\mathbb{R}`}</MathInline> are a subset of <MathInline>{`\\mathbb{C}`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Equality of Complex Numbers</h2>

      <Callout type="definition" title="Equality">
        <p>
          Two complex numbers are equal if and only if their real and imaginary parts
          are equal:
        </p>
        <MathBlock>{`a + bi = c + di \\quad \\Leftrightarrow \\quad a = c \\text{ and } b = d`}</MathBlock>
      </Callout>

      <h2>Arithmetic Operations</h2>

      <Callout type="definition" title="Addition and Subtraction">
        <p>Add or subtract component-wise:</p>
        <MathBlock>{`(a + bi) + (c + di) = (a + c) + (b + d)i`}</MathBlock>
        <MathBlock>{`(a + bi) - (c + di) = (a - c) + (b - d)i`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 1: Addition">
        <MathBlock>{`(3 + 2i) + (1 - 5i) = (3 + 1) + (2 - 5)i = 4 - 3i`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Multiplication">
        <p>Multiply using the distributive law and <MathInline>{`i^2 = -1`}</MathInline>:</p>
        <MathBlock>{`(a + bi)(c + di) = ac + adi + bci + bdi^2`}</MathBlock>
        <MathBlock>{`= ac + adi + bci - bd = (ac - bd) + (ad + bc)i`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Multiplication">
        <MathBlock>{`(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i^2 = 8 + 10i + 3 = 11 + 10i`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Powers of i">
        <p>The powers of <MathInline>{`i`}</MathInline> cycle with period 4:</p>
        <MathBlock>{`i^0 = 1, \\quad i^1 = i, \\quad i^2 = -1, \\quad i^3 = -i, \\quad i^4 = 1, \\ldots`}</MathBlock>
        <p>
          For any integer <MathInline>{`n`}</MathInline>, <MathInline>{`i^n`}</MathInline> depends only on
          <MathInline>{`n \\mod 4`}</MathInline>.
        </p>
        <p className="mt-2">
          For example: <MathInline>{`i^{23} = i^{4 \\cdot 5 + 3} = (i^4)^5 \\cdot i^3 = 1 \\cdot (-i) = -i`}</MathInline>
        </p>
      </Callout>

      <h2>Complex Conjugate</h2>

      <Callout type="definition" title="Complex Conjugate">
        <p>
          The <strong>complex conjugate</strong> of <MathInline>{`z = a + bi`}</MathInline> is:
        </p>
        <MathBlock>{`\\bar{z} = a - bi`}</MathBlock>
        <p>
          Geometrically, <MathInline>{`\\bar{z}`}</MathInline> is the reflection of <MathInline>{`z`}</MathInline>
          across the real axis.
        </p>
      </Callout>

      <Callout type="theorem" title="Properties of Conjugates">
        <p>For any complex numbers <MathInline>{`z, w`}</MathInline>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\overline{z + w} = \\bar{z} + \\bar{w}`}</MathInline></li>
          <li><MathInline>{`\\overline{z \\cdot w} = \\bar{z} \\cdot \\bar{w}`}</MathInline></li>
          <li><MathInline>{`\\overline{\\bar{z}} = z`}</MathInline></li>
          <li><MathInline>{`z + \\bar{z} = 2\\,\\text{Re}(z)`}</MathInline></li>
          <li><MathInline>{`z - \\bar{z} = 2i\\,\\text{Im}(z)`}</MathInline></li>
          <li><MathInline>{`z \\cdot \\bar{z} = a^2 + b^2`}</MathInline> (always real and non-negative)</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 4: Product with Conjugate">
        <p>Let <MathInline>{`z = 3 + 4i`}</MathInline>. Then <MathInline>{`\\bar{z} = 3 - 4i`}</MathInline> and:</p>
        <MathBlock>{`z \\cdot \\bar{z} = (3 + 4i)(3 - 4i) = 9 - 12i + 12i - 16i^2 = 9 + 16 = 25`}</MathBlock>
        <p>Note: <MathInline>{`3^2 + 4^2 = 25`}</MathInline> ✓</p>
      </Callout>

      <h2>Division</h2>

      <Callout type="theorem" title="Division of Complex Numbers">
        <p>
          To divide by a complex number, multiply numerator and denominator by the
          conjugate of the denominator:
        </p>
        <MathBlock>{`\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{(c + di)(c - di)} = \\frac{(a + bi)(c - di)}{c^2 + d^2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Division">
        <MathBlock>{`\\frac{2 + 3i}{1 - i} = \\frac{(2 + 3i)(1 + i)}{(1 - i)(1 + i)} = \\frac{2 + 2i + 3i + 3i^2}{1 + 1}`}</MathBlock>
        <MathBlock>{`= \\frac{2 + 5i - 3}{2} = \\frac{-1 + 5i}{2} = -\\frac{1}{2} + \\frac{5}{2}i`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Reciprocal">
        <MathBlock>{`\\frac{1}{3 + 4i} = \\frac{3 - 4i}{(3 + 4i)(3 - 4i)} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i`}</MathBlock>
      </Callout>

      <h2>Field Properties</h2>

      <Callout type="theorem" title="C is a Field">
        <p>
          The complex numbers <MathInline>{`\\mathbb{C}`}</MathInline> form a <strong>field</strong>
          under addition and multiplication:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Closure:</strong> Sum and product of complex numbers are complex</li>
          <li><strong>Commutativity:</strong> <MathInline>{`z + w = w + z`}</MathInline>, <MathInline>{`zw = wz`}</MathInline></li>
          <li><strong>Associativity:</strong> <MathInline>{`(z + w) + u = z + (w + u)`}</MathInline></li>
          <li><strong>Distributivity:</strong> <MathInline>{`z(w + u) = zw + zu`}</MathInline></li>
          <li><strong>Identities:</strong> <MathInline>{`0 = 0 + 0i`}</MathInline>, <MathInline>{`1 = 1 + 0i`}</MathInline></li>
          <li><strong>Inverses:</strong> Every <MathInline>{`z`}</MathInline> has <MathInline>{`-z`}</MathInline>; every <MathInline>{`z \\neq 0`}</MathInline> has <MathInline>{`1/z`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="info" title="No Ordering">
        <p>
          Unlike the reals, <MathInline>{`\\mathbb{C}`}</MathInline> cannot be ordered in a way
          compatible with arithmetic. There is no meaningful way to say
          <MathInline>{`i > 0`}</MathInline> or <MathInline>{`i < 0`}</MathInline>.
        </p>
      </Callout>

      <h2>Solving Quadratic Equations</h2>

      <Callout type="theorem" title="Quadratic Formula in C">
        <p>
          Every quadratic equation <MathInline>{`az^2 + bz + c = 0`}</MathInline> (with <MathInline>{`a \\neq 0`}</MathInline>)
          has solutions in <MathInline>{`\\mathbb{C}`}</MathInline>:
        </p>
        <MathBlock>{`z = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}`}</MathBlock>
        <p>
          When the discriminant <MathInline>{`b^2 - 4ac < 0`}</MathInline>, the solutions are complex.
        </p>
      </Callout>

      <Callout type="example" title="Example 7: Complex Roots">
        <p>Solve <MathInline>{`z^2 + 2z + 5 = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`z = \\frac{-2 \\pm \\sqrt{4 - 20}}{2} = \\frac{-2 \\pm \\sqrt{-16}}{2} = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i`}</MathBlock>
        <p>The solutions are <MathInline>{`z = -1 + 2i`}</MathInline> and <MathInline>{`z = -1 - 2i`}</MathInline>.</p>
        <p className="mt-2">
          Note: The roots are complex conjugates. This always happens when the
          coefficients are real and the discriminant is negative.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Verify a Complex Root">
        <p>Verify that <MathInline>{`z = -1 + 2i`}</MathInline> satisfies <MathInline>{`z^2 + 2z + 5 = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`z^2 = (-1 + 2i)^2 = 1 - 4i + 4i^2 = 1 - 4i - 4 = -3 - 4i`}</MathBlock>
        <MathBlock>{`z^2 + 2z + 5 = (-3 - 4i) + 2(-1 + 2i) + 5`}</MathBlock>
        <MathBlock>{`= -3 - 4i - 2 + 4i + 5 = 0 \\quad \\checkmark`}</MathBlock>
      </Callout>

      <h2>Square Roots of Complex Numbers</h2>

      <Callout type="example" title="Example 9: Finding Square Roots">
        <p>Find the square roots of <MathInline>{`3 + 4i`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          We seek <MathInline>{`w = x + yi`}</MathInline> such that <MathInline>{`w^2 = 3 + 4i`}</MathInline>.
        </p>
        <MathBlock>{`(x + yi)^2 = x^2 - y^2 + 2xyi = 3 + 4i`}</MathBlock>
        <p>Matching real and imaginary parts:</p>
        <MathBlock>{`x^2 - y^2 = 3`}</MathBlock>
        <MathBlock>{`2xy = 4 \\quad \\Rightarrow \\quad xy = 2`}</MathBlock>
        <p>From the second equation: <MathInline>{`y = 2/x`}</MathInline>. Substitute:</p>
        <MathBlock>{`x^2 - \\frac{4}{x^2} = 3`}</MathBlock>
        <MathBlock>{`x^4 - 3x^2 - 4 = 0`}</MathBlock>
        <MathBlock>{`(x^2 - 4)(x^2 + 1) = 0`}</MathBlock>
        <p>
          Since <MathInline>{`x`}</MathInline> is real, <MathInline>{`x^2 = 4`}</MathInline>, so <MathInline>{`x = \\pm 2`}</MathInline>.
        </p>
        <p>
          If <MathInline>{`x = 2`}</MathInline>: <MathInline>{`y = 1`}</MathInline>. If <MathInline>{`x = -2`}</MathInline>: <MathInline>{`y = -1`}</MathInline>.
        </p>
        <p>The square roots are <MathInline>{`2 + i`}</MathInline> and <MathInline>{`-2 - i`}</MathInline>.</p>
        <p className="mt-2">
          <strong>Verify:</strong> <MathInline>{`(2 + i)^2 = 4 + 4i + i^2 = 4 + 4i - 1 = 3 + 4i`}</MathInline> ✓
        </p>
      </Callout>

      <h2>The Fundamental Theorem of Algebra</h2>

      <Callout type="theorem" title="Fundamental Theorem of Algebra">
        <p>
          Every non-constant polynomial with complex coefficients has at least one
          complex root. Equivalently, every polynomial of degree <MathInline>{`n \\geq 1`}</MathInline>
          factors completely into <MathInline>{`n`}</MathInline> linear factors over <MathInline>{`\\mathbb{C}`}</MathInline>:
        </p>
        <MathBlock>{`p(z) = a_n(z - z_1)(z - z_2)\\cdots(z - z_n)`}</MathBlock>
      </Callout>

      <Callout type="info" title="Algebraic Closure">
        <p>
          The complex numbers are <strong>algebraically closed</strong>: every polynomial
          equation has a solution. This is why we don't need to extend beyond <MathInline>{`\\mathbb{C}`}</MathInline>
          to solve polynomial equations.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Imaginary unit:</strong> <MathInline>{`i^2 = -1`}</MathInline>
        </li>
        <li>
          <strong>Complex number:</strong> <MathInline>{`z = a + bi`}</MathInline> with <MathInline>{`a, b \\in \\mathbb{R}`}</MathInline>
        </li>
        <li>
          <strong>Arithmetic:</strong> Add component-wise; multiply using <MathInline>{`i^2 = -1`}</MathInline>
        </li>
        <li>
          <strong>Conjugate:</strong> <MathInline>{`\\overline{a + bi} = a - bi`}</MathInline>
        </li>
        <li>
          <strong>Division:</strong> Multiply by conjugate: <MathInline>{`\\frac{z}{w} = \\frac{z\\bar{w}}{|w|^2}`}</MathInline>
        </li>
        <li>
          <strong>Field:</strong> <MathInline>{`\\mathbb{C}`}</MathInline> satisfies all field axioms
        </li>
        <li>
          <strong>No ordering:</strong> Cannot compare complex numbers with <MathInline>{`<`}</MathInline> or <MathInline>{`>`}</MathInline>
        </li>
        <li>
          <strong>Fundamental theorem:</strong> Every polynomial has roots in <MathInline>{`\\mathbb{C}`}</MathInline>
        </li>
      </ul>
    </LessonLayout>
  );
}
