import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <p>
        A <strong>differential equation</strong> is an equation involving an unknown
        function and its derivatives. Differential equations are fundamental to
        modeling phenomena in physics, engineering, biology, economics, and virtually
        every quantitative science.
      </p>

      <h2>What is a Differential Equation?</h2>

      <Callout type="definition" title="Differential Equation">
        <p>
          A <strong>differential equation</strong> is an equation that relates a
          function <InlineMath>{`y = f(x)`}</InlineMath> to one or more of its derivatives
          <InlineMath>{`y', y'', y''', \\ldots`}</InlineMath>
        </p>
        <p>Examples:</p>
        <MathBlock>{`y' = 2x`}</MathBlock>
        <MathBlock>{`y'' + y = 0`}</MathBlock>
        <MathBlock>{`y' = ky`}</MathBlock>
        <MathBlock>{`y'' - 3y' + 2y = e^x`}</MathBlock>
      </Callout>

      <Callout type="info" title="Why Study Differential Equations?">
        <p>
          Many natural phenomena are described by rates of change. Newton's second
          law <InlineMath>{`F = ma`}</InlineMath> relates force to the second derivative
          of position. Population growth relates the rate of change to the current
          population. Heat flow, wave propagation, electrical circuits—all are
          modeled by differential equations.
        </p>
      </Callout>

      <h2>Terminology</h2>

      <Callout type="definition" title="Order of a Differential Equation">
        <p>
          The <strong>order</strong> of a differential equation is the highest
          derivative that appears in the equation.
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><InlineMath>{`y' = x^2`}</InlineMath> — first order</li>
          <li><InlineMath>{`y'' + y = 0`}</InlineMath> — second order</li>
          <li><InlineMath>{`y''' - y' + y = \\sin x`}</InlineMath> — third order</li>
        </ul>
      </Callout>

      <Callout type="definition" title="Ordinary vs Partial">
        <p>
          An <strong>ordinary differential equation (ODE)</strong> involves a function
          of one variable. A <strong>partial differential equation (PDE)</strong>
          involves partial derivatives of a function of several variables.
        </p>
        <p className="mt-2">
          In this course, we focus on ODEs. The equation <InlineMath>{`y' = xy`}</InlineMath>
          is an ODE, while <InlineMath>{`\\frac{\\partial u}{\\partial t} = \\frac{\\partial^2 u}{\\partial x^2}`}</InlineMath>
          (the heat equation) is a PDE.
        </p>
      </Callout>

      <Callout type="definition" title="Linear vs Nonlinear">
        <p>
          A differential equation is <strong>linear</strong> if the unknown function
          and its derivatives appear only to the first power and are not multiplied
          together. Otherwise, it is <strong>nonlinear</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><InlineMath>{`y'' + 3y' + 2y = x`}</InlineMath> — linear</li>
          <li><InlineMath>{`y' = y^2`}</InlineMath> — nonlinear (because of <InlineMath>{`y^2`}</InlineMath>)</li>
          <li><InlineMath>{`yy' = x`}</InlineMath> — nonlinear (product of <InlineMath>{`y`}</InlineMath> and <InlineMath>{`y'`}</InlineMath>)</li>
        </ul>
      </Callout>

      <h2>Solutions of Differential Equations</h2>

      <Callout type="definition" title="Solution">
        <p>
          A <strong>solution</strong> of a differential equation on an interval <InlineMath>{`I`}</InlineMath>
          is a function <InlineMath>{`y = f(x)`}</InlineMath> that satisfies the equation for
          all <InlineMath>{`x`}</InlineMath> in <InlineMath>{`I`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Verifying a Solution">
        <p>
          Verify that <InlineMath>{`y = e^{2x}`}</InlineMath> is a solution of <InlineMath>{`y' = 2y`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          If <InlineMath>{`y = e^{2x}`}</InlineMath>, then <InlineMath>{`y' = 2e^{2x}`}</InlineMath>.
        </p>
        <p>
          Also, <InlineMath>{`2y = 2e^{2x}`}</InlineMath>.
        </p>
        <p>
          Since <InlineMath>{`y' = 2y`}</InlineMath>, the function <InlineMath>{`y = e^{2x}`}</InlineMath> is indeed a solution.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: A Family of Solutions">
        <p>
          Show that <InlineMath>{`y = Ce^{2x}`}</InlineMath> is a solution of <InlineMath>{`y' = 2y`}</InlineMath>
          for any constant <InlineMath>{`C`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          If <InlineMath>{`y = Ce^{2x}`}</InlineMath>, then <InlineMath>{`y' = 2Ce^{2x} = 2y`}</InlineMath>.
        </p>
        <p>
          This works for any value of <InlineMath>{`C`}</InlineMath>. We call <InlineMath>{`y = Ce^{2x}`}</InlineMath>
          the <strong>general solution</strong>.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Second-Order Equation">
        <p>
          Verify that <InlineMath>{`y = \\sin x`}</InlineMath> and <InlineMath>{`y = \\cos x`}</InlineMath> are
          both solutions of <InlineMath>{`y'' + y = 0`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          For <InlineMath>{`y = \\sin x`}</InlineMath>: <InlineMath>{`y' = \\cos x`}</InlineMath>,
          <InlineMath>{`y'' = -\\sin x`}</InlineMath>.
          Thus <InlineMath>{`y'' + y = -\\sin x + \\sin x = 0`}</InlineMath>. ✓
        </p>
        <p>
          For <InlineMath>{`y = \\cos x`}</InlineMath>: <InlineMath>{`y' = -\\sin x`}</InlineMath>,
          <InlineMath>{`y'' = -\\cos x`}</InlineMath>.
          Thus <InlineMath>{`y'' + y = -\\cos x + \\cos x = 0`}</InlineMath>. ✓
        </p>
      </Callout>

      <h2>General and Particular Solutions</h2>

      <Callout type="definition" title="General Solution">
        <p>
          The <strong>general solution</strong> of a differential equation contains
          arbitrary constants and represents the family of all solutions.
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>A first-order equation typically has one arbitrary constant</li>
          <li>A second-order equation typically has two arbitrary constants</li>
          <li>An <InlineMath>{`n`}</InlineMath>th-order equation typically has <InlineMath>{`n`}</InlineMath> constants</li>
        </ul>
      </Callout>

      <Callout type="definition" title="Particular Solution">
        <p>
          A <strong>particular solution</strong> is obtained from the general solution
          by assigning specific values to the arbitrary constants.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: General to Particular">
        <p>
          The general solution of <InlineMath>{`y'' + y = 0`}</InlineMath> is:
        </p>
        <MathBlock>{`y = A\\cos x + B\\sin x`}</MathBlock>
        <p>
          where <InlineMath>{`A`}</InlineMath> and <InlineMath>{`B`}</InlineMath> are arbitrary constants.
        </p>
        <p>Particular solutions include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`y = \\cos x`}</InlineMath> (when <InlineMath>{`A = 1, B = 0`}</InlineMath>)</li>
          <li><InlineMath>{`y = \\sin x`}</InlineMath> (when <InlineMath>{`A = 0, B = 1`}</InlineMath>)</li>
          <li><InlineMath>{`y = 3\\cos x - 2\\sin x`}</InlineMath> (when <InlineMath>{`A = 3, B = -2`}</InlineMath>)</li>
        </ul>
      </Callout>

      <h2>Initial Value Problems</h2>

      <Callout type="definition" title="Initial Value Problem (IVP)">
        <p>
          An <strong>initial value problem</strong> consists of a differential equation
          together with conditions specifying the value of the solution (and possibly
          its derivatives) at a particular point.
        </p>
        <p className="mt-2">For a first-order equation:</p>
        <MathBlock>{`y' = f(x, y), \\quad y(x_0) = y_0`}</MathBlock>
        <p>For a second-order equation:</p>
        <MathBlock>{`y'' = f(x, y, y'), \\quad y(x_0) = y_0, \\quad y'(x_0) = v_0`}</MathBlock>
      </Callout>

      <p>
        The initial conditions determine which particular solution we need from the
        general solution.
      </p>

      <Callout type="example" title="Example 5: Solving an IVP">
        <p>
          Solve the initial value problem: <InlineMath>{`y' = 2y`}</InlineMath>, <InlineMath>{`y(0) = 3`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          The general solution is <InlineMath>{`y = Ce^{2x}`}</InlineMath>.
        </p>
        <p>
          Apply the initial condition: <InlineMath>{`y(0) = Ce^0 = C = 3`}</InlineMath>.
        </p>
        <p>
          Therefore, the particular solution is <InlineMath>{`y = 3e^{2x}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Second-Order IVP">
        <p>
          Solve: <InlineMath>{`y'' + y = 0`}</InlineMath>, <InlineMath>{`y(0) = 1`}</InlineMath>, <InlineMath>{`y'(0) = 2`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          General solution: <InlineMath>{`y = A\\cos x + B\\sin x`}</InlineMath>.
        </p>
        <p>
          <InlineMath>{`y(0) = A\\cos 0 + B\\sin 0 = A = 1`}</InlineMath>.
        </p>
        <p>
          <InlineMath>{`y' = -A\\sin x + B\\cos x`}</InlineMath>, so <InlineMath>{`y'(0) = B = 2`}</InlineMath>.
        </p>
        <p>
          Particular solution: <InlineMath>{`y = \\cos x + 2\\sin x`}</InlineMath>.
        </p>
      </Callout>

      <h2>Simple First-Order Equations</h2>

      <p>
        The simplest differential equations can be solved by direct integration.
      </p>

      <Callout type="example" title="Example 7: Direct Integration">
        <p>Solve <InlineMath>{`y' = x^2 + 1`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Integrate both sides with respect to <InlineMath>{`x`}</InlineMath>:</p>
        <MathBlock>{`y = \\int (x^2 + 1)\\,dx = \\frac{x^3}{3} + x + C`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 8: With Initial Condition">
        <p>Solve <InlineMath>{`y' = \\sin x`}</InlineMath>, <InlineMath>{`y(0) = 2`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`y = \\int \\sin x\\,dx = -\\cos x + C`}</MathBlock>
        <p>
          Initial condition: <InlineMath>{`y(0) = -\\cos 0 + C = -1 + C = 2`}</InlineMath>,
          so <InlineMath>{`C = 3`}</InlineMath>.
        </p>
        <p>
          Solution: <InlineMath>{`y = -\\cos x + 3`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 9: Second-Order by Integration">
        <p>Solve <InlineMath>{`y'' = 6x`}</InlineMath>, <InlineMath>{`y(0) = 1`}</InlineMath>, <InlineMath>{`y'(0) = 4`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>First integration:</p>
        <MathBlock>{`y' = \\int 6x\\,dx = 3x^2 + C_1`}</MathBlock>
        <p>
          <InlineMath>{`y'(0) = 0 + C_1 = 4`}</InlineMath>, so <InlineMath>{`C_1 = 4`}</InlineMath>.
          Thus <InlineMath>{`y' = 3x^2 + 4`}</InlineMath>.
        </p>
        <p>Second integration:</p>
        <MathBlock>{`y = \\int (3x^2 + 4)\\,dx = x^3 + 4x + C_2`}</MathBlock>
        <p>
          <InlineMath>{`y(0) = 0 + 0 + C_2 = 1`}</InlineMath>, so <InlineMath>{`C_2 = 1`}</InlineMath>.
        </p>
        <p>
          Solution: <InlineMath>{`y = x^3 + 4x + 1`}</InlineMath>.
        </p>
      </Callout>

      <h2>Existence and Uniqueness</h2>

      <Callout type="theorem" title="Existence and Uniqueness (Informal)">
        <p>
          Under reasonable conditions on <InlineMath>{`f(x,y)`}</InlineMath>, the initial value problem
        </p>
        <MathBlock>{`y' = f(x, y), \\quad y(x_0) = y_0`}</MathBlock>
        <p>
          has a unique solution in some interval containing <InlineMath>{`x_0`}</InlineMath>.
        </p>
        <p className="mt-2">
          The precise conditions involve continuity of <InlineMath>{`f`}</InlineMath> and
          <InlineMath>{`\\frac{\\partial f}{\\partial y}`}</InlineMath>, but for most equations
          we encounter, existence and uniqueness hold.
        </p>
      </Callout>

      <Callout type="info" title="Physical Interpretation">
        <p>
          Existence and uniqueness means that if we know the state of a system at
          one moment (the initial condition), its future behavior is completely
          determined by the differential equation. This is the mathematical basis
          for determinism in classical physics.
        </p>
      </Callout>

      <h2>Notation</h2>

      <Callout type="info" title="Common Notations">
        <p>Differential equations can be written in various equivalent ways:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Prime notation:</strong> <InlineMath>{`y' = f(x,y)`}</InlineMath> or <InlineMath>{`y'' + y = 0`}</InlineMath>
          </li>
          <li>
            <strong>Leibniz notation:</strong> <InlineMath>{`\\frac{dy}{dx} = f(x,y)`}</InlineMath> or <InlineMath>{`\\frac{d^2y}{dx^2} + y = 0`}</InlineMath>
          </li>
          <li>
            <strong>Operator notation:</strong> <InlineMath>{`Dy = f(x,y)`}</InlineMath> where <InlineMath>{`D = \\frac{d}{dx}`}</InlineMath>
          </li>
          <li>
            <strong>Dot notation (for time):</strong> <InlineMath>{`\\dot{y} = f(t,y)`}</InlineMath> means <InlineMath>{`\\frac{dy}{dt}`}</InlineMath>
          </li>
        </ul>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Differential equation:</strong> An equation relating a function to its derivatives.
        </li>
        <li>
          <strong>Order:</strong> The highest derivative appearing in the equation.
        </li>
        <li>
          <strong>Linear:</strong> Function and derivatives appear to first power, not multiplied.
        </li>
        <li>
          <strong>Solution:</strong> A function satisfying the equation on some interval.
        </li>
        <li>
          <strong>General solution:</strong> Contains arbitrary constants; represents all solutions.
        </li>
        <li>
          <strong>Particular solution:</strong> Specific values assigned to the constants.
        </li>
        <li>
          <strong>Initial value problem:</strong> Equation plus initial conditions that determine a unique solution.
        </li>
        <li>
          <strong>First-order equations</strong> have one arbitrary constant; second-order have two.
        </li>
      </ul>
    </LessonLayout>
  );
}
