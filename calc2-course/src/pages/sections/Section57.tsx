import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <h2>The Annihilator Method</h2>

      <p>
        For constant-coefficient equations with special right-hand sides, the{' '}
        <strong>annihilator method</strong> provides an efficient alternative to
        variation of parameters. The key idea is to convert the nonhomogeneous
        equation into a higher-order homogeneous equation.
      </p>

      <h3>The Basic Principle</h3>

      <p>
        Suppose the equation <InlineMath>{`L(y) = R`}</InlineMath> has constant
        coefficients and the right-hand member <InlineMath>R</InlineMath> is
        annihilated by a constant-coefficient operator{' '}
        <InlineMath>A</InlineMath>, meaning <InlineMath>{`A(R) = 0`}</InlineMath>.
      </p>

      <p>
        Apply <InlineMath>A</InlineMath> to both sides:
      </p>
      <MathBlock>{`A(L(y)) = A(R) = 0`}</MathBlock>

      <p>
        So any solution of <InlineMath>{`L(y) = R`}</InlineMath> is also a solution
        of <InlineMath>{`AL(y) = 0`}</InlineMath>. We can solve this homogeneous
        equation and then select the terms that satisfy the original equation.
      </p>

      <h3>Common Annihilators</h3>

      <Callout type="info">
        <strong>Table of Annihilators:</strong>
        <ul>
          <li>
            <InlineMath>{`x^{m-1}`}</InlineMath> is annihilated by{' '}
            <InlineMath>{`D^m`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`e^{\\alpha x}`}</InlineMath> is annihilated by{' '}
            <InlineMath>{`(D - \\alpha)`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`x^{m-1} e^{\\alpha x}`}</InlineMath> is annihilated
            by <InlineMath>{`(D - \\alpha)^m`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\cos \\beta x`}</InlineMath> or{' '}
            <InlineMath>{`\\sin \\beta x`}</InlineMath> is annihilated by{' '}
            <InlineMath>{`D^2 + \\beta^2`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`e^{\\alpha x} \\cos \\beta x`}</InlineMath> or{' '}
            <InlineMath>{`e^{\\alpha x} \\sin \\beta x`}</InlineMath> is
            annihilated by{' '}
            <InlineMath>{`D^2 - 2\\alpha D + (\\alpha^2 + \\beta^2)`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`x^{m-1} e^{\\alpha x} \\cos \\beta x`}</InlineMath>{' '}
            or <InlineMath>{`x^{m-1} e^{\\alpha x} \\sin \\beta x`}</InlineMath>{' '}
            is annihilated by{' '}
            <InlineMath>{`[D^2 - 2\\alpha D + (\\alpha^2 + \\beta^2)]^m`}</InlineMath>
          </li>
        </ul>
      </Callout>

      <h3>Example 1: Polynomial Right-Hand Side</h3>

      <p>
        Find a particular solution of{' '}
        <InlineMath>{`(D^4 - 16)y = x^4 + x + 1`}</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> The right-hand member, a polynomial of degree
        4, is annihilated by <InlineMath>{`D^5`}</InlineMath>. So solutions satisfy:
      </p>
      <MathBlock>{`D^5(D^4 - 16)y = 0`}</MathBlock>

      <p>
        The characteristic roots are{' '}
        <InlineMath>{`0, 0, 0, 0, 0, 2, -2, 2i, -2i`}</InlineMath>. The last four
        give the homogeneous solutions, so we seek a polynomial particular
        solution. Setting <InlineMath>{`16y_1 = ax^4 + bx^3 + cx^2 + dx + e`}</InlineMath>{' '}
        and substituting, we find:
      </p>
      <MathBlock>
        {`y_1 = -\\frac{1}{16}x^4 - \\frac{1}{16}x - \\frac{5}{32}`}
      </MathBlock>

      <h3>Example 2: Exponential Right-Hand Side</h3>

      <p>
        Solve <InlineMath>{`y'' - 5y' + 6y = xe^x`}</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> The homogeneous equation{' '}
        <InlineMath>{`(D-2)(D-3)y = 0`}</InlineMath> has solutions{' '}
        <InlineMath>{`e^{2x}, e^{3x}`}</InlineMath>.
      </p>

      <p>
        The function <InlineMath>{`xe^x`}</InlineMath> is annihilated by{' '}
        <InlineMath>{`(D-1)^2`}</InlineMath>. So solutions satisfy:
      </p>
      <MathBlock>{`(D-1)^2(D-2)(D-3)y = 0`}</MathBlock>

      <p>
        The characteristic roots are <InlineMath>{`1, 1, 2, 3`}</InlineMath>, giving:
      </p>
      <MathBlock>{`y = ae^x + bxe^x + ce^{2x} + de^{3x}`}</MathBlock>

      <p>
        The terms <InlineMath>{`ce^{2x} + de^{3x}`}</InlineMath> satisfy the
        homogeneous equation, so we try{' '}
        <InlineMath>{`y_1 = ae^x + bxe^x`}</InlineMath>. Substituting into{' '}
        <InlineMath>{`L(y_1) = xe^x`}</InlineMath>:
      </p>
      <MathBlock>{`(2a - 3b)e^x + 2bxe^x = xe^x`}</MathBlock>

      <p>
        Comparing coefficients: <InlineMath>{`b = 1/2`}</InlineMath>,{' '}
        <InlineMath>{`a = 3/4`}</InlineMath>.
      </p>

      <p>
        General solution:
      </p>
      <MathBlock>
        {`y = c_1 e^{2x} + c_2 e^{3x} + \\frac{3}{4}e^x + \\frac{1}{2}xe^x`}
      </MathBlock>

      <h3>Reduction to First-Order Equations</h3>

      <p>
        For constant-coefficient equations, we can also reduce to a succession
        of first-order equations. For example, to solve:
      </p>
      <MathBlock>{`(D-1)(D-2)y = xe^{x+x^2}`}</MathBlock>

      <p>
        Let <InlineMath>{`u = (D-2)y`}</InlineMath>. Then{' '}
        <InlineMath>{`(D-1)u = xe^{x+x^2}`}</InlineMath> is first-order,
        solvable by Theorem 6.1. Then <InlineMath>{`(D-2)y = u`}</InlineMath> is
        another first-order equation.
      </p>

      <Callout type="warning">
        <strong>Limitations:</strong> The annihilator method only works when{' '}
        <InlineMath>{`R(x)`}</InlineMath> is a combination of polynomials,
        exponentials, sines, and cosines. For functions like{' '}
        <InlineMath>{`e^{x^2}`}</InlineMath>, <InlineMath>{`\\log x`}</InlineMath>,
        or <InlineMath>{`\\tan x`}</InlineMath>, use variation of parameters instead.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The annihilator method converts a
        nonhomogeneous problem into a homogeneous one of higher order. By
        finding an operator that "kills" the right-hand side, we temporarily
        forget about the forcing term and solve a purely algebraic problem.
        This is particularly efficient when <InlineMath>{`R(x)`}</InlineMath> has a
        form related to the solutions of constant-coefficient equations.
      </Callout>
    </LessonLayout>
  );
}
