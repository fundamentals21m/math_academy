import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          function <MathInline>{`y = f(x)`}</MathInline> to one or more of its derivatives
          <MathInline>{`y', y'', y''', \\ldots`}</MathInline>
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
          law <MathInline>{`F = ma`}</MathInline> relates force to the second derivative
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
          <li><MathInline>{`y' = x^2`}</MathInline> — first order</li>
          <li><MathInline>{`y'' + y = 0`}</MathInline> — second order</li>
          <li><MathInline>{`y''' - y' + y = \\sin x`}</MathInline> — third order</li>
        </ul>
      </Callout>

      <Callout type="definition" title="Ordinary vs Partial">
        <p>
          An <strong>ordinary differential equation (ODE)</strong> involves a function
          of one variable. A <strong>partial differential equation (PDE)</strong>
          involves partial derivatives of a function of several variables.
        </p>
        <p className="mt-2">
          In this course, we focus on ODEs. The equation <MathInline>{`y' = xy`}</MathInline>
          is an ODE, while <MathInline>{`\\frac{\\partial u}{\\partial t} = \\frac{\\partial^2 u}{\\partial x^2}`}</MathInline>
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
          <li><MathInline>{`y'' + 3y' + 2y = x`}</MathInline> — linear</li>
          <li><MathInline>{`y' = y^2`}</MathInline> — nonlinear (because of <MathInline>{`y^2`}</MathInline>)</li>
          <li><MathInline>{`yy' = x`}</MathInline> — nonlinear (product of <MathInline>{`y`}</MathInline> and <MathInline>{`y'`}</MathInline>)</li>
        </ul>
      </Callout>

      <h2>Solutions of Differential Equations</h2>

      <Callout type="definition" title="Solution">
        <p>
          A <strong>solution</strong> of a differential equation on an interval <MathInline>{`I`}</MathInline>
          is a function <MathInline>{`y = f(x)`}</MathInline> that satisfies the equation for
          all <MathInline>{`x`}</MathInline> in <MathInline>{`I`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Verifying a Solution">
        <p>
          Verify that <MathInline>{`y = e^{2x}`}</MathInline> is a solution of <MathInline>{`y' = 2y`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          If <MathInline>{`y = e^{2x}`}</MathInline>, then <MathInline>{`y' = 2e^{2x}`}</MathInline>.
        </p>
        <p>
          Also, <MathInline>{`2y = 2e^{2x}`}</MathInline>.
        </p>
        <p>
          Since <MathInline>{`y' = 2y`}</MathInline>, the function <MathInline>{`y = e^{2x}`}</MathInline> is indeed a solution.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: A Family of Solutions">
        <p>
          Show that <MathInline>{`y = Ce^{2x}`}</MathInline> is a solution of <MathInline>{`y' = 2y`}</MathInline>
          for any constant <MathInline>{`C`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          If <MathInline>{`y = Ce^{2x}`}</MathInline>, then <MathInline>{`y' = 2Ce^{2x} = 2y`}</MathInline>.
        </p>
        <p>
          This works for any value of <MathInline>{`C`}</MathInline>. We call <MathInline>{`y = Ce^{2x}`}</MathInline>
          the <strong>general solution</strong>.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Second-Order Equation">
        <p>
          Verify that <MathInline>{`y = \\sin x`}</MathInline> and <MathInline>{`y = \\cos x`}</MathInline> are
          both solutions of <MathInline>{`y'' + y = 0`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          For <MathInline>{`y = \\sin x`}</MathInline>: <MathInline>{`y' = \\cos x`}</MathInline>,
          <MathInline>{`y'' = -\\sin x`}</MathInline>.
          Thus <MathInline>{`y'' + y = -\\sin x + \\sin x = 0`}</MathInline>. ✓
        </p>
        <p>
          For <MathInline>{`y = \\cos x`}</MathInline>: <MathInline>{`y' = -\\sin x`}</MathInline>,
          <MathInline>{`y'' = -\\cos x`}</MathInline>.
          Thus <MathInline>{`y'' + y = -\\cos x + \\cos x = 0`}</MathInline>. ✓
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
          <li>An <MathInline>{`n`}</MathInline>th-order equation typically has <MathInline>{`n`}</MathInline> constants</li>
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
          The general solution of <MathInline>{`y'' + y = 0`}</MathInline> is:
        </p>
        <MathBlock>{`y = A\\cos x + B\\sin x`}</MathBlock>
        <p>
          where <MathInline>{`A`}</MathInline> and <MathInline>{`B`}</MathInline> are arbitrary constants.
        </p>
        <p>Particular solutions include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`y = \\cos x`}</MathInline> (when <MathInline>{`A = 1, B = 0`}</MathInline>)</li>
          <li><MathInline>{`y = \\sin x`}</MathInline> (when <MathInline>{`A = 0, B = 1`}</MathInline>)</li>
          <li><MathInline>{`y = 3\\cos x - 2\\sin x`}</MathInline> (when <MathInline>{`A = 3, B = -2`}</MathInline>)</li>
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
          Solve the initial value problem: <MathInline>{`y' = 2y`}</MathInline>, <MathInline>{`y(0) = 3`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          The general solution is <MathInline>{`y = Ce^{2x}`}</MathInline>.
        </p>
        <p>
          Apply the initial condition: <MathInline>{`y(0) = Ce^0 = C = 3`}</MathInline>.
        </p>
        <p>
          Therefore, the particular solution is <MathInline>{`y = 3e^{2x}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Second-Order IVP">
        <p>
          Solve: <MathInline>{`y'' + y = 0`}</MathInline>, <MathInline>{`y(0) = 1`}</MathInline>, <MathInline>{`y'(0) = 2`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          General solution: <MathInline>{`y = A\\cos x + B\\sin x`}</MathInline>.
        </p>
        <p>
          <MathInline>{`y(0) = A\\cos 0 + B\\sin 0 = A = 1`}</MathInline>.
        </p>
        <p>
          <MathInline>{`y' = -A\\sin x + B\\cos x`}</MathInline>, so <MathInline>{`y'(0) = B = 2`}</MathInline>.
        </p>
        <p>
          Particular solution: <MathInline>{`y = \\cos x + 2\\sin x`}</MathInline>.
        </p>
      </Callout>

      <h2>Simple First-Order Equations</h2>

      <p>
        The simplest differential equations can be solved by direct integration.
      </p>

      <Callout type="example" title="Example 7: Direct Integration">
        <p>Solve <MathInline>{`y' = x^2 + 1`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Integrate both sides with respect to <MathInline>{`x`}</MathInline>:</p>
        <MathBlock>{`y = \\int (x^2 + 1)\\,dx = \\frac{x^3}{3} + x + C`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 8: With Initial Condition">
        <p>Solve <MathInline>{`y' = \\sin x`}</MathInline>, <MathInline>{`y(0) = 2`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`y = \\int \\sin x\\,dx = -\\cos x + C`}</MathBlock>
        <p>
          Initial condition: <MathInline>{`y(0) = -\\cos 0 + C = -1 + C = 2`}</MathInline>,
          so <MathInline>{`C = 3`}</MathInline>.
        </p>
        <p>
          Solution: <MathInline>{`y = -\\cos x + 3`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 9: Second-Order by Integration">
        <p>Solve <MathInline>{`y'' = 6x`}</MathInline>, <MathInline>{`y(0) = 1`}</MathInline>, <MathInline>{`y'(0) = 4`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>First integration:</p>
        <MathBlock>{`y' = \\int 6x\\,dx = 3x^2 + C_1`}</MathBlock>
        <p>
          <MathInline>{`y'(0) = 0 + C_1 = 4`}</MathInline>, so <MathInline>{`C_1 = 4`}</MathInline>.
          Thus <MathInline>{`y' = 3x^2 + 4`}</MathInline>.
        </p>
        <p>Second integration:</p>
        <MathBlock>{`y = \\int (3x^2 + 4)\\,dx = x^3 + 4x + C_2`}</MathBlock>
        <p>
          <MathInline>{`y(0) = 0 + 0 + C_2 = 1`}</MathInline>, so <MathInline>{`C_2 = 1`}</MathInline>.
        </p>
        <p>
          Solution: <MathInline>{`y = x^3 + 4x + 1`}</MathInline>.
        </p>
      </Callout>

      <h2>Existence and Uniqueness</h2>

      <Callout type="theorem" title="Existence and Uniqueness (Informal)">
        <p>
          Under reasonable conditions on <MathInline>{`f(x,y)`}</MathInline>, the initial value problem
        </p>
        <MathBlock>{`y' = f(x, y), \\quad y(x_0) = y_0`}</MathBlock>
        <p>
          has a unique solution in some interval containing <MathInline>{`x_0`}</MathInline>.
        </p>
        <p className="mt-2">
          The precise conditions involve continuity of <MathInline>{`f`}</MathInline> and
          <MathInline>{`\\frac{\\partial f}{\\partial y}`}</MathInline>, but for most equations
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
            <strong>Prime notation:</strong> <MathInline>{`y' = f(x,y)`}</MathInline> or <MathInline>{`y'' + y = 0`}</MathInline>
          </li>
          <li>
            <strong>Leibniz notation:</strong> <MathInline>{`\\frac{dy}{dx} = f(x,y)`}</MathInline> or <MathInline>{`\\frac{d^2y}{dx^2} + y = 0`}</MathInline>
          </li>
          <li>
            <strong>Operator notation:</strong> <MathInline>{`Dy = f(x,y)`}</MathInline> where <MathInline>{`D = \\frac{d}{dx}`}</MathInline>
          </li>
          <li>
            <strong>Dot notation (for time):</strong> <MathInline>{`\\dot{y} = f(t,y)`}</MathInline> means <MathInline>{`\\frac{dy}{dt}`}</MathInline>
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
