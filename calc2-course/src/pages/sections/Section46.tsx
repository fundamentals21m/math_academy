import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <h2>Review: Second-Order Equations with Constant Coefficients</h2>

      <p>
        Linear equations of second order with constant coefficients can be
        solved explicitly. The solutions involve polynomials, exponential
        functions, and trigonometric functions.
      </p>

      <h3>The General Form</h3>

      <p>
        Consider the homogeneous second-order equation:
      </p>
      <MathBlock>{`y'' + ay' + by = 0`}</MathBlock>

      <p>
        where <InlineMath>{'a'}</InlineMath> and <InlineMath>{'b'}</InlineMath> are real
        constants.
      </p>

      <h3>The Characteristic Equation</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>characteristic equation</strong>{' '}
        of the differential equation <InlineMath>{`y'' + ay' + by = 0`}</InlineMath>{' '}
        is the quadratic equation:
        <MathBlock>{`r^2 + ar + b = 0`}</MathBlock>
        Its roots are:
        <MathBlock>{`r_1 = \\frac{-a + \\sqrt{d}}{2}, \\quad r_2 = \\frac{-a - \\sqrt{d}}{2}`}</MathBlock>
        where <InlineMath>{'d = a^2 - 4b'}</InlineMath> is the{' '}
        <strong>discriminant</strong>.
      </Callout>

      <h3>The General Solution</h3>

      <Callout type="info">
        <strong>Theorem 6.2:</strong> Every solution of{' '}
        <InlineMath>{`y'' + ay' + by = 0`}</InlineMath> on{' '}
        <InlineMath>{`(-\\infty, +\\infty)`}</InlineMath> has the form:
        <MathBlock>{`y = e^{-ax/2}[c_1 u_1(x) + c_2 u_2(x)]`}</MathBlock>
        where <InlineMath>{'c_1, c_2'}</InlineMath> are constants, and{' '}
        <InlineMath>{'u_1, u_2'}</InlineMath> depend on the discriminant{' '}
        <InlineMath>{'d = a^2 - 4b'}</InlineMath>.
      </Callout>

      <h3>Three Cases Based on the Discriminant</h3>

      <p>
        <strong>Case (a):</strong> <InlineMath>{'d = 0'}</InlineMath> (repeated root)
      </p>
      <MathBlock>{`u_1(x) = 1, \\quad u_2(x) = x`}</MathBlock>
      <p>
        Both roots equal <InlineMath>{'r = -a/2'}</InlineMath>. Solution:{' '}
        <InlineMath>{`y = (c_1 + c_2 x)e^{rx}`}</InlineMath>
      </p>

      <p>
        <strong>Case (b):</strong> <InlineMath>{'d > 0'}</InlineMath> (distinct
        real roots)
      </p>
      <MathBlock>{`u_1(x) = e^{kx}, \\quad u_2(x) = e^{-kx}, \\quad \\text{where} \\, k = \\frac{1}{2}\\sqrt{d}`}</MathBlock>
      <p>
        Solution: <InlineMath>{`y = c_1 e^{r_1 x} + c_2 e^{r_2 x}`}</InlineMath>
      </p>

      <p>
        <strong>Case (c):</strong> <InlineMath>{'d < 0'}</InlineMath> (complex
        conjugate roots)
      </p>
      <MathBlock>{`u_1(x) = \\cos kx, \\quad u_2(x) = \\sin kx, \\quad \\text{where} \\, k = \\frac{1}{2}\\sqrt{-d}`}</MathBlock>
      <p>
        Roots are <InlineMath>{'r = -a/2 \\pm ik'}</InlineMath>. Solution:{' '}
        <InlineMath>{`y = e^{-ax/2}(c_1 \\cos kx + c_2 \\sin kx)`}</InlineMath>
      </p>

      <h3>Complex Exponentials</h3>

      <p>
        For complex roots <InlineMath>{'r_1 = -a/2 + ik'}</InlineMath> and{' '}
        <InlineMath>{'r_2 = -a/2 - ik'}</InlineMath>, the complex exponential
        solutions are:
      </p>
      <MathBlock>{`f_1(x) = e^{r_1 x} = e^{-ax/2}(\\cos kx + i\\sin kx)`}</MathBlock>
      <MathBlock>{`f_2(x) = e^{r_2 x} = e^{-ax/2}(\\cos kx - i\\sin kx)`}</MathBlock>

      <p>
        The real and imaginary parts give the real solutions{' '}
        <InlineMath>{`e^{-ax/2}\\cos kx`}</InlineMath> and{' '}
        <InlineMath>{`e^{-ax/2}\\sin kx`}</InlineMath>.
      </p>

      <h3>Example: Simple Harmonic Motion</h3>

      <p>
        The equation <InlineMath>{`y'' + \\omega^2 y = 0`}</InlineMath> (with{' '}
        <InlineMath>{'a = 0'}</InlineMath>, <InlineMath>{`b = \\omega^2`}</InlineMath>)
        has <InlineMath>{`d = -4\\omega^2 < 0`}</InlineMath>.
      </p>

      <p>
        General solution: <InlineMath>{`y = c_1 \\cos \\omega x + c_2 \\sin \\omega x`}</InlineMath>
      </p>

      <p>
        This describes oscillatory motion with angular frequency{' '}
        <InlineMath>{'\\omega'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The nature of solutions to second-order
        constant-coefficient equations is completely determined by the roots of
        the characteristic equation. Real roots give exponential solutions;
        complex roots give oscillatory solutions. This connection between
        algebra (roots of polynomials) and analysis (solutions of differential
        equations) extends to higher-order equations.
      </Callout>
    </LessonLayout>
  );
}
