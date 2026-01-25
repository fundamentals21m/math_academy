import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section75() {
  return (
    <LessonLayout sectionId={75}>
      <h2>Power Series Methods for Linear Systems</h2>

      <p>
        When the coefficient matrix has a power series expansion, we can seek
        power series solutions. This method is particularly useful when
        explicit formulas for the matrix exponential are difficult to obtain.
      </p>

      <h3>Setup</h3>

      <p>
        Consider the homogeneous system:
      </p>
      <MathBlock>
        Y'(x) = A(x)Y(x), \quad Y(0) = B
      </MathBlock>

      <p>
        where <InlineMath>A(x)</InlineMath> has a power series expansion:
      </p>
      <MathBlock>
        {`A(x) = A_0 + xA_1 + x^2A_2 + \\cdots = \\sum_{k=0}^\\infty x^k A_k, \\quad |x| < r_1`}
      </MathBlock>

      <h3>The Power Series Solution</h3>

      <p>
        We seek a solution of the form:
      </p>
      <MathBlock>
        {`Y(x) = B_0 + xB_1 + x^2B_2 + \\cdots = \\sum_{k=0}^\\infty x^k B_k`}
      </MathBlock>

      <p>
        The initial condition requires <InlineMath>B_0 = B</InlineMath>.
        Substituting into the differential equation and equating coefficients:
      </p>

      <Callout type="info">
        <strong>Recursion Formula:</strong> The coefficients satisfy:
        <MathBlock>
          B_1 = A_0 B_0
        </MathBlock>
        <MathBlock>
          {`(k+1)B_{k+1} = \\sum_{r=0}^k A_r B_{k-r} \\quad \\text{for } k = 1, 2, \\ldots`}
        </MathBlock>
      </Callout>

      <p>
        These equations can be solved successively for{' '}
        <InlineMath>{`B_1, B_2, \\ldots`}</InlineMath>
      </p>

      <h3>The Constant Coefficient Case</h3>

      <p>
        When <InlineMath>A(x) = A</InlineMath> (constant), we have{' '}
        <InlineMath>A_0 = A</InlineMath> and{' '}
        <InlineMath>A_k = 0</InlineMath> for <InlineMath>k \geq 1</InlineMath>.
        The recursion becomes:
      </p>
      <MathBlock>
        {`B_1 = AB, \\quad (k+1)B_{k+1} = AB_k`}
      </MathBlock>

      <p>
        Solving in succession:
      </p>
      <MathBlock>
        {`B_k = \\frac{1}{k!} A^k B \\quad \\text{for } k \\geq 1`}
      </MathBlock>

      <p>
        Therefore:
      </p>
      <MathBlock>
        {`Y(x) = B + \\sum_{k=1}^\\infty \\frac{x^k}{k!} A^k B = \\sum_{k=0}^\\infty \\frac{x^k}{k!} A^k B = e^{xA} B`}
      </MathBlock>

      <p>
        This confirms our earlier result for constant-coefficient systems.
      </p>

      <h3>Second-Order Systems</h3>

      <p>
        For the second-order system{' '}
        <InlineMath>Y''(x) = A(x)Y(x)</InlineMath> with{' '}
        <InlineMath>Y(0) = B</InlineMath>,{' '}
        <InlineMath>Y'(0) = C</InlineMath>, we seek:
      </p>
      <MathBlock>
        {`Y(x) = \\sum_{k=0}^\\infty x^k B_k`}
      </MathBlock>

      <p>
        with <InlineMath>B_0 = B</InlineMath> and{' '}
        <InlineMath>B_1 = C</InlineMath>.
      </p>

      <h3>Special Case: Constant A</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The system{' '}
        <InlineMath>Y'' + AY = 0</InlineMath> with{' '}
        <InlineMath>Y(0) = B</InlineMath>,{' '}
        <InlineMath>Y'(0) = C</InlineMath>, where <InlineMath>A</InlineMath>{' '}
        is constant, has the power series solution:
        <MathBlock>
          {`Y(x) = \\left(I + \\sum_{k=1}^\\infty \\frac{(-1)^k x^{2k}}{(2k)!} A^k\\right)B + \\left(xI + \\sum_{k=1}^\\infty \\frac{(-1)^k x^{2k+1}}{(2k+1)!} A^k\\right)C`}
        </MathBlock>
        convergent for all <InlineMath>x</InlineMath>.
      </Callout>

      <p>
        The first series generalizes <InlineMath>{`\\cos(\\sqrt{A}x)`}</InlineMath>{' '}
        and the second generalizes{' '}
        <InlineMath>{`\\sin(\\sqrt{A}x)/\\sqrt{A}`}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Power series provide a universal method
        for solving linear systems with analytic coefficients. The method
        reduces the problem to algebraic recursion relations. While convergence
        must be verified, the method often produces solutions where other
        techniques fail.
      </Callout>
    </LessonLayout>
  );
}
