import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <p>
        Second-order linear differential equations arise in many physical applications:
        vibrating springs, electrical circuits, planetary motion, and wave propagation.
        This section introduces the general theory and the case of constant coefficients.
      </p>

      <h2>General Form</h2>

      <Callout type="definition" title="Second-Order Linear Equation">
        <p>
          A <strong>second-order linear differential equation</strong> has the form:
        </p>
        <MathBlock>{`a(x)y'' + b(x)y' + c(x)y = f(x)`}</MathBlock>
        <p>
          When <MathInline>{`a, b, c`}</MathInline> are constants, we write:
        </p>
        <MathBlock>{`ay'' + by' + cy = f(x)`}</MathBlock>
        <p>
          The equation is <strong>homogeneous</strong> if <MathInline>{`f(x) = 0`}</MathInline>,
          and <strong>nonhomogeneous</strong> otherwise.
        </p>
      </Callout>

      <h2>The Homogeneous Case</h2>

      <p>
        We first study the homogeneous equation:
      </p>

      <MathBlock>{`ay'' + by' + cy = 0`}</MathBlock>

      <Callout type="theorem" title="Superposition Principle">
        <p>
          If <MathInline>{`y_1`}</MathInline> and <MathInline>{`y_2`}</MathInline> are solutions of
          <MathInline>{`ay'' + by' + cy = 0`}</MathInline>, then for any constants
          <MathInline>{`C_1, C_2`}</MathInline>:
        </p>
        <MathBlock>{`y = C_1 y_1 + C_2 y_2`}</MathBlock>
        <p>is also a solution.</p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Substitute <MathInline>{`y = C_1 y_1 + C_2 y_2`}</MathInline> into the left side:
        </p>
        <MathBlock>{`a(C_1 y_1 + C_2 y_2)'' + b(C_1 y_1 + C_2 y_2)' + c(C_1 y_1 + C_2 y_2)`}</MathBlock>
        <MathBlock>{`= C_1(ay_1'' + by_1' + cy_1) + C_2(ay_2'' + by_2' + cy_2) = C_1 \\cdot 0 + C_2 \\cdot 0 = 0`}</MathBlock>
      </Callout>

      <h2>The Characteristic Equation</h2>

      <p>
        The key insight is to try <MathInline>{`y = e^{rx}`}</MathInline> as a solution.
      </p>

      <Callout type="info" title="Derivation">
        <p>
          If <MathInline>{`y = e^{rx}`}</MathInline>, then <MathInline>{`y' = re^{rx}`}</MathInline>
          and <MathInline>{`y'' = r^2 e^{rx}`}</MathInline>.
        </p>
        <p>Substituting into <MathInline>{`ay'' + by' + cy = 0`}</MathInline>:</p>
        <MathBlock>{`ar^2 e^{rx} + br e^{rx} + c e^{rx} = 0`}</MathBlock>
        <MathBlock>{`e^{rx}(ar^2 + br + c) = 0`}</MathBlock>
        <p>
          Since <MathInline>{`e^{rx} \\neq 0`}</MathInline>, we need <MathInline>{`ar^2 + br + c = 0`}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition" title="Characteristic Equation">
        <p>
          The <strong>characteristic equation</strong> (or <strong>auxiliary equation</strong>)
          of <MathInline>{`ay'' + by' + cy = 0`}</MathInline> is:
        </p>
        <MathBlock>{`ar^2 + br + c = 0`}</MathBlock>
        <p>
          The roots <MathInline>{`r_1, r_2`}</MathInline> determine the form of the general solution.
        </p>
      </Callout>

      <h2>Three Cases</h2>

      <p>
        The discriminant <MathInline>{`D = b^2 - 4ac`}</MathInline> determines the nature of the roots.
      </p>

      <h3>Case 1: Two Distinct Real Roots (D &gt; 0)</h3>

      <Callout type="theorem" title="Distinct Real Roots">
        <p>
          If <MathInline>{`r_1 \\neq r_2`}</MathInline> are real roots, the general solution is:
        </p>
        <MathBlock>{`y = C_1 e^{r_1 x} + C_2 e^{r_2 x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 1: Distinct Real Roots">
        <p>Solve <MathInline>{`y'' + y' - 6y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <MathInline>{`r^2 + r - 6 = 0`}</MathInline></p>
        <p>Factor: <MathInline>{`(r + 3)(r - 2) = 0`}</MathInline></p>
        <p>Roots: <MathInline>{`r_1 = -3`}</MathInline>, <MathInline>{`r_2 = 2`}</MathInline></p>
        <p>General solution:</p>
        <MathBlock>{`y = C_1 e^{-3x} + C_2 e^{2x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: With Initial Conditions">
        <p>Solve <MathInline>{`y'' - 5y' + 6y = 0`}</MathInline>, <MathInline>{`y(0) = 2`}</MathInline>, <MathInline>{`y'(0) = 3`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <MathInline>{`r^2 - 5r + 6 = (r-2)(r-3) = 0`}</MathInline></p>
        <p>Roots: <MathInline>{`r = 2, 3`}</MathInline></p>
        <p>General solution: <MathInline>{`y = C_1 e^{2x} + C_2 e^{3x}`}</MathInline></p>
        <p>Apply initial conditions:</p>
        <MathBlock>{`y(0) = C_1 + C_2 = 2`}</MathBlock>
        <MathBlock>{`y' = 2C_1 e^{2x} + 3C_2 e^{3x}, \\quad y'(0) = 2C_1 + 3C_2 = 3`}</MathBlock>
        <p>Solve the system: <MathInline>{`C_1 = 3`}</MathInline>, <MathInline>{`C_2 = -1`}</MathInline></p>
        <p>Solution: <MathInline>{`y = 3e^{2x} - e^{3x}`}</MathInline></p>
      </Callout>

      <h3>Case 2: Repeated Real Root (D = 0)</h3>

      <Callout type="theorem" title="Repeated Root">
        <p>
          If <MathInline>{`r_1 = r_2 = r`}</MathInline> is a repeated root, the general solution is:
        </p>
        <MathBlock>{`y = (C_1 + C_2 x)e^{rx}`}</MathBlock>
        <p>
          The factor <MathInline>{`x`}</MathInline> is needed to get two linearly independent solutions.
        </p>
      </Callout>

      <Callout type="info" title="Why the x Factor?">
        <p>
          With a repeated root, <MathInline>{`y_1 = e^{rx}`}</MathInline> is one solution.
          To find a second, we use <strong>reduction of order</strong>: assume
          <MathInline>{`y_2 = v(x)e^{rx}`}</MathInline> and substitute into the equation.
          This leads to <MathInline>{`v'' = 0`}</MathInline>, giving <MathInline>{`v = x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Repeated Root">
        <p>Solve <MathInline>{`y'' - 4y' + 4y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <MathInline>{`r^2 - 4r + 4 = (r-2)^2 = 0`}</MathInline></p>
        <p>Repeated root: <MathInline>{`r = 2`}</MathInline></p>
        <p>General solution:</p>
        <MathBlock>{`y = (C_1 + C_2 x)e^{2x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Repeated Root with IVP">
        <p>Solve <MathInline>{`y'' + 6y' + 9y = 0`}</MathInline>, <MathInline>{`y(0) = 1`}</MathInline>, <MathInline>{`y'(0) = -1`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <MathInline>{`r^2 + 6r + 9 = (r+3)^2 = 0`}</MathInline></p>
        <p>Repeated root: <MathInline>{`r = -3`}</MathInline></p>
        <p>General solution: <MathInline>{`y = (C_1 + C_2 x)e^{-3x}`}</MathInline></p>
        <p>Apply initial conditions:</p>
        <MathBlock>{`y(0) = C_1 = 1`}</MathBlock>
        <MathBlock>{`y' = C_2 e^{-3x} - 3(C_1 + C_2 x)e^{-3x}`}</MathBlock>
        <MathBlock>{`y'(0) = C_2 - 3C_1 = C_2 - 3 = -1 \\quad \\Rightarrow \\quad C_2 = 2`}</MathBlock>
        <p>Solution: <MathInline>{`y = (1 + 2x)e^{-3x}`}</MathInline></p>
      </Callout>

      <h3>Case 3: Complex Conjugate Roots (D &lt; 0)</h3>

      <Callout type="theorem" title="Complex Roots">
        <p>
          If the roots are <MathInline>{`r = \\alpha \\pm \\beta i`}</MathInline> (complex conjugates),
          the general solution is:
        </p>
        <MathBlock>{`y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)`}</MathBlock>
        <p>
          Equivalently: <MathInline>{`y = Ae^{\\alpha x}\\cos(\\beta x - \\phi)`}</MathInline> for
          constants <MathInline>{`A, \\phi`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Derivation">
        <p>
          From <MathInline>{`y = C_1 e^{(\\alpha + \\beta i)x} + C_2 e^{(\\alpha - \\beta i)x}`}</MathInline>
          and Euler's formula <MathInline>{`e^{i\\theta} = \\cos\\theta + i\\sin\\theta`}</MathInline>:
        </p>
        <MathBlock>{`e^{(\\alpha \\pm \\beta i)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)`}</MathBlock>
        <p>
          Taking appropriate linear combinations gives real solutions involving
          <MathInline>{`\\cos\\beta x`}</MathInline> and <MathInline>{`\\sin\\beta x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Complex Roots">
        <p>Solve <MathInline>{`y'' + 4y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <MathInline>{`r^2 + 4 = 0`}</MathInline></p>
        <p>Roots: <MathInline>{`r = \\pm 2i`}</MathInline> (so <MathInline>{`\\alpha = 0`}</MathInline>, <MathInline>{`\\beta = 2`}</MathInline>)</p>
        <p>General solution:</p>
        <MathBlock>{`y = C_1 \\cos 2x + C_2 \\sin 2x`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Complex Roots with Exponential">
        <p>Solve <MathInline>{`y'' - 2y' + 5y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <MathInline>{`r^2 - 2r + 5 = 0`}</MathInline></p>
        <p>Using the quadratic formula:</p>
        <MathBlock>{`r = \\frac{2 \\pm \\sqrt{4-20}}{2} = \\frac{2 \\pm \\sqrt{-16}}{2} = 1 \\pm 2i`}</MathBlock>
        <p>So <MathInline>{`\\alpha = 1`}</MathInline>, <MathInline>{`\\beta = 2`}</MathInline></p>
        <p>General solution:</p>
        <MathBlock>{`y = e^x(C_1 \\cos 2x + C_2 \\sin 2x)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 7: Complex Roots with IVP">
        <p>Solve <MathInline>{`y'' + 2y' + 2y = 0`}</MathInline>, <MathInline>{`y(0) = 1`}</MathInline>, <MathInline>{`y'(0) = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <MathInline>{`r^2 + 2r + 2 = 0`}</MathInline></p>
        <MathBlock>{`r = \\frac{-2 \\pm \\sqrt{4-8}}{2} = -1 \\pm i`}</MathBlock>
        <p>General solution: <MathInline>{`y = e^{-x}(C_1 \\cos x + C_2 \\sin x)`}</MathInline></p>
        <p>Apply initial conditions:</p>
        <MathBlock>{`y(0) = C_1 = 1`}</MathBlock>
        <MathBlock>{`y' = -e^{-x}(C_1 \\cos x + C_2 \\sin x) + e^{-x}(-C_1 \\sin x + C_2 \\cos x)`}</MathBlock>
        <MathBlock>{`y'(0) = -C_1 + C_2 = -1 + C_2 = 0 \\quad \\Rightarrow \\quad C_2 = 1`}</MathBlock>
        <p>Solution: <MathInline>{`y = e^{-x}(\\cos x + \\sin x)`}</MathInline></p>
      </Callout>

      <h2>Physical Interpretation</h2>

      <Callout type="info" title="Behavior of Solutions">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Real roots with <MathInline>{`r < 0`}</MathInline>:</strong> Exponential decay
            (damped motion, stable equilibrium)
          </li>
          <li>
            <strong>Real roots with <MathInline>{`r > 0`}</MathInline>:</strong> Exponential growth
            (unstable)
          </li>
          <li>
            <strong>Pure imaginary roots (<MathInline>{`\\alpha = 0`}</MathInline>):</strong> Oscillation
            without damping (simple harmonic motion)
          </li>
          <li>
            <strong>Complex roots with <MathInline>{`\\alpha < 0`}</MathInline>:</strong> Damped oscillation
            (approaching equilibrium)
          </li>
          <li>
            <strong>Complex roots with <MathInline>{`\\alpha > 0`}</MathInline>:</strong> Growing oscillation
            (unstable)
          </li>
        </ul>
      </Callout>

      <h2>Summary Table</h2>

      <Callout type="theorem" title="Solution Forms for ay'' + by' + cy = 0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-2">Discriminant</th>
              <th className="text-left py-2">Roots</th>
              <th className="text-left py-2">General Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2"><MathInline>{`b^2 - 4ac > 0`}</MathInline></td>
              <td><MathInline>{`r_1 \\neq r_2`}</MathInline> real</td>
              <td><MathInline>{`C_1 e^{r_1 x} + C_2 e^{r_2 x}`}</MathInline></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><MathInline>{`b^2 - 4ac = 0`}</MathInline></td>
              <td><MathInline>{`r`}</MathInline> repeated</td>
              <td><MathInline>{`(C_1 + C_2 x)e^{rx}`}</MathInline></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><MathInline>{`b^2 - 4ac < 0`}</MathInline></td>
              <td><MathInline>{`\\alpha \\pm \\beta i`}</MathInline></td>
              <td><MathInline>{`e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)`}</MathInline></td>
            </tr>
          </tbody>
        </table>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Standard form:</strong> <MathInline>{`ay'' + by' + cy = 0`}</MathInline>
        </li>
        <li>
          <strong>Characteristic equation:</strong> <MathInline>{`ar^2 + br + c = 0`}</MathInline>
        </li>
        <li>
          <strong>Superposition:</strong> Linear combinations of solutions are solutions
        </li>
        <li>
          <strong>Two constants:</strong> The general solution contains two arbitrary constants
        </li>
        <li>
          <strong>Three cases:</strong> Distinct real roots, repeated root, complex conjugate roots
        </li>
        <li>
          <strong>Physical meaning:</strong> Root signs determine stability and oscillation
        </li>
      </ul>
    </LessonLayout>
  );
}
