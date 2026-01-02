import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <p>
        Having introduced the three cases for solving <InlineMath>{`y'' + ay' + by = 0`}</InlineMath>,
        we now develop the theory that explains <em>why</em> these solutions work and
        guarantees we have found <em>all</em> solutions.
      </p>

      <h2>Linear Independence of Solutions</h2>

      <Callout type="definition" title="Linearly Independent Functions">
        <p>
          Two functions <InlineMath>{`y_1(x)`}</InlineMath> and <InlineMath>{`y_2(x)`}</InlineMath> are
          <strong> linearly independent</strong> on an interval <InlineMath>{`I`}</InlineMath> if
          the only constants <InlineMath>{`c_1, c_2`}</InlineMath> satisfying
        </p>
        <MathBlock>{`c_1 y_1(x) + c_2 y_2(x) = 0 \\quad \\text{for all } x \\in I`}</MathBlock>
        <p>are <InlineMath>{`c_1 = c_2 = 0`}</InlineMath>.</p>
        <p>
          Equivalently, neither function is a constant multiple of the other.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Independent vs Dependent">
        <p><strong>Independent:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`e^x`}</InlineMath> and <InlineMath>{`e^{-x}`}</InlineMath> are independent (neither is a multiple of the other)</li>
          <li><InlineMath>{`\\sin x`}</InlineMath> and <InlineMath>{`\\cos x`}</InlineMath> are independent</li>
          <li><InlineMath>{`e^{2x}`}</InlineMath> and <InlineMath>{`xe^{2x}`}</InlineMath> are independent</li>
        </ul>
        <p className="mt-2"><strong>Dependent:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`e^x`}</InlineMath> and <InlineMath>{`3e^x`}</InlineMath> are dependent (<InlineMath>{`3e^x = 3 \\cdot e^x`}</InlineMath>)</li>
          <li><InlineMath>{`\\sin^2 x`}</InlineMath> and <InlineMath>{`1 - \\cos^2 x`}</InlineMath> are dependent (they're equal)</li>
        </ul>
      </Callout>

      <h2>The Wronskian</h2>

      <Callout type="definition" title="Wronskian">
        <p>
          The <strong>Wronskian</strong> of two functions <InlineMath>{`y_1`}</InlineMath> and <InlineMath>{`y_2`}</InlineMath> is:
        </p>
        <MathBlock>{`W(y_1, y_2) = \\begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \\end{vmatrix} = y_1 y_2' - y_2 y_1'`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Wronskian Test">
        <p>
          For solutions <InlineMath>{`y_1, y_2`}</InlineMath> of <InlineMath>{`y'' + ay' + by = 0`}</InlineMath>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`W(y_1, y_2) \\neq 0`}</InlineMath> at some point, then <InlineMath>{`y_1, y_2`}</InlineMath> are linearly independent</li>
          <li>If <InlineMath>{`y_1, y_2`}</InlineMath> are linearly independent solutions, then <InlineMath>{`W \\neq 0`}</InlineMath> everywhere</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 2: Computing the Wronskian">
        <p>
          Verify that <InlineMath>{`y_1 = e^{2x}`}</InlineMath> and <InlineMath>{`y_2 = e^{-3x}`}</InlineMath> are independent.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`W = \\begin{vmatrix} e^{2x} & e^{-3x} \\ 2e^{2x} & -3e^{-3x} \\end{vmatrix} = e^{2x}(-3e^{-3x}) - e^{-3x}(2e^{2x})`}</MathBlock>
        <MathBlock>{`= -3e^{-x} - 2e^{-x} = -5e^{-x} \\neq 0`}</MathBlock>
        <p>Since <InlineMath>{`W \\neq 0`}</InlineMath>, the functions are linearly independent.</p>
      </Callout>

      <Callout type="example" title="Example 3: Repeated Root Case">
        <p>
          Show that <InlineMath>{`y_1 = e^{rx}`}</InlineMath> and <InlineMath>{`y_2 = xe^{rx}`}</InlineMath> are independent.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`W = \\begin{vmatrix} e^{rx} & xe^{rx} \\ re^{rx} & e^{rx} + rxe^{rx} \\end{vmatrix}`}</MathBlock>
        <MathBlock>{`= e^{rx}(e^{rx} + rxe^{rx}) - xe^{rx}(re^{rx})`}</MathBlock>
        <MathBlock>{`= e^{2rx} + rxe^{2rx} - rxe^{2rx} = e^{2rx} \\neq 0`}</MathBlock>
        <p>This confirms that <InlineMath>{`e^{rx}`}</InlineMath> and <InlineMath>{`xe^{rx}`}</InlineMath> form independent solutions.</p>
      </Callout>

      <h2>Fundamental Set of Solutions</h2>

      <Callout type="definition" title="Fundamental Set">
        <p>
          A <strong>fundamental set of solutions</strong> for <InlineMath>{`y'' + ay' + by = 0`}</InlineMath> is
          a pair of linearly independent solutions <InlineMath>{`\\{y_1, y_2\\}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="General Solution Theorem">
        <p>
          If <InlineMath>{`y_1`}</InlineMath> and <InlineMath>{`y_2`}</InlineMath> form a fundamental set of solutions
          for <InlineMath>{`y'' + ay' + by = 0`}</InlineMath>, then the <strong>general solution</strong> is:
        </p>
        <MathBlock>{`y = c_1 y_1 + c_2 y_2`}</MathBlock>
        <p>
          where <InlineMath>{`c_1, c_2`}</InlineMath> are arbitrary constants. Every solution has this form.
        </p>
      </Callout>

      <Callout type="info" title="Why Two Solutions?">
        <p>
          A second-order equation needs two initial conditions (<InlineMath>{`y(x_0)`}</InlineMath> and
          <InlineMath>{`y'(x_0)`}</InlineMath>) to determine a unique solution. Two independent solutions
          give exactly two free parameters to match these conditions.
        </p>
      </Callout>

      <h2>Summary of the Three Cases</h2>

      <Callout type="theorem" title="Complete Classification">
        <p>
          For <InlineMath>{`y'' + ay' + by = 0`}</InlineMath> with characteristic equation
          <InlineMath>{`r^2 + ar + b = 0`}</InlineMath>:
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left p-2">Discriminant</th>
                <th className="text-left p-2">Roots</th>
                <th className="text-left p-2">Fundamental Set</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-800">
                <td className="p-2"><InlineMath>{`a^2 - 4b > 0`}</InlineMath></td>
                <td className="p-2"><InlineMath>{`r_1 \\neq r_2`}</InlineMath> real</td>
                <td className="p-2"><InlineMath>{`\\{e^{r_1 x}, e^{r_2 x}\\}`}</InlineMath></td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2"><InlineMath>{`a^2 - 4b = 0`}</InlineMath></td>
                <td className="p-2"><InlineMath>{`r_1 = r_2 = r`}</InlineMath></td>
                <td className="p-2"><InlineMath>{`\\{e^{rx}, xe^{rx}\\}`}</InlineMath></td>
              </tr>
              <tr>
                <td className="p-2"><InlineMath>{`a^2 - 4b < 0`}</InlineMath></td>
                <td className="p-2"><InlineMath>{`\\alpha \\pm i\\beta`}</InlineMath></td>
                <td className="p-2"><InlineMath>{`\\{e^{\\alpha x}\\cos\\beta x, e^{\\alpha x}\\sin\\beta x\\}`}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Callout>

      <h2>Abel's Formula</h2>

      <Callout type="theorem" title="Abel's Identity">
        <p>
          If <InlineMath>{`y_1, y_2`}</InlineMath> are any two solutions of <InlineMath>{`y'' + a y' + b y = 0`}</InlineMath>,
          then their Wronskian satisfies:
        </p>
        <MathBlock>{`W(x) = W(x_0) e^{-a(x - x_0)}`}</MathBlock>
        <p>
          In particular, the Wronskian is either always zero or never zero on any interval.
        </p>
      </Callout>

      <Callout type="info" title="Consequence">
        <p>
          Abel's formula shows that we only need to check <InlineMath>{`W \\neq 0`}</InlineMath> at
          one point to establish linear independence. If <InlineMath>{`W(x_0) \\neq 0`}</InlineMath> for
          any <InlineMath>{`x_0`}</InlineMath>, then <InlineMath>{`W(x) \\neq 0`}</InlineMath> for all <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <h2>Worked Examples</h2>

      <Callout type="example" title="Example 4: Finding the General Solution">
        <p>Solve <InlineMath>{`y'' - 5y' + 6y = 0`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <InlineMath>{`r^2 - 5r + 6 = 0`}</InlineMath></p>
        <p>Factor: <InlineMath>{`(r-2)(r-3) = 0`}</InlineMath>, so <InlineMath>{`r = 2, 3`}</InlineMath>.</p>
        <p>
          Fundamental set: <InlineMath>{`\\{e^{2x}, e^{3x}\\}`}</InlineMath>
        </p>
        <p>General solution: <InlineMath>{`y = c_1 e^{2x} + c_2 e^{3x}`}</InlineMath></p>
        <p>
          Verify independence: <InlineMath>{`W = e^{2x}(3e^{3x}) - e^{3x}(2e^{2x}) = 3e^{5x} - 2e^{5x} = e^{5x} \\neq 0`}</InlineMath>
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Repeated Root">
        <p>Solve <InlineMath>{`y'' + 4y' + 4y = 0`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <InlineMath>{`r^2 + 4r + 4 = 0`}</InlineMath></p>
        <p>Factor: <InlineMath>{`(r+2)^2 = 0`}</InlineMath>, so <InlineMath>{`r = -2`}</InlineMath> (repeated).</p>
        <p>
          Fundamental set: <InlineMath>{`\\{e^{-2x}, xe^{-2x}\\}`}</InlineMath>
        </p>
        <p>General solution: <InlineMath>{`y = c_1 e^{-2x} + c_2 xe^{-2x} = (c_1 + c_2 x)e^{-2x}`}</InlineMath></p>
      </Callout>

      <Callout type="example" title="Example 6: Complex Roots">
        <p>Solve <InlineMath>{`y'' + 2y' + 5y = 0`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <InlineMath>{`r^2 + 2r + 5 = 0`}</InlineMath></p>
        <MathBlock>{`r = \\frac{-2 \\pm \\sqrt{4 - 20}}{2} = \\frac{-2 \\pm \\sqrt{-16}}{2} = -1 \\pm 2i`}</MathBlock>
        <p>Here <InlineMath>{`\\alpha = -1`}</InlineMath>, <InlineMath>{`\\beta = 2`}</InlineMath>.</p>
        <p>
          Fundamental set: <InlineMath>{`\\{e^{-x}\\cos 2x, e^{-x}\\sin 2x\\}`}</InlineMath>
        </p>
        <p>General solution:</p>
        <MathBlock>{`y = e^{-x}(c_1 \\cos 2x + c_2 \\sin 2x)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 7: Initial Value Problem">
        <p>
          Solve <InlineMath>{`y'' - 2y' - 3y = 0`}</InlineMath>, <InlineMath>{`y(0) = 2`}</InlineMath>,
          <InlineMath>{`y'(0) = -4`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic: <InlineMath>{`r^2 - 2r - 3 = (r-3)(r+1) = 0`}</InlineMath>, so <InlineMath>{`r = 3, -1`}</InlineMath>.</p>
        <p>General solution: <InlineMath>{`y = c_1 e^{3x} + c_2 e^{-x}`}</InlineMath></p>
        <p>Apply initial conditions:</p>
        <MathBlock>{`y(0) = c_1 + c_2 = 2`}</MathBlock>
        <MathBlock>{`y' = 3c_1 e^{3x} - c_2 e^{-x}`}</MathBlock>
        <MathBlock>{`y'(0) = 3c_1 - c_2 = -4`}</MathBlock>
        <p>From the system: <InlineMath>{`c_1 + c_2 = 2`}</InlineMath> and <InlineMath>{`3c_1 - c_2 = -4`}</InlineMath></p>
        <p>Adding: <InlineMath>{`4c_1 = -2`}</InlineMath>, so <InlineMath>{`c_1 = -\\frac{1}{2}`}</InlineMath></p>
        <p>Then <InlineMath>{`c_2 = 2 - c_1 = \\frac{5}{2}`}</InlineMath></p>
        <p>Solution: <InlineMath>{`y = -\\frac{1}{2}e^{3x} + \\frac{5}{2}e^{-x}`}</InlineMath></p>
      </Callout>

      <Callout type="example" title="Example 8: Higher-Order Equation">
        <p>Solve <InlineMath>{`y''' - 6y'' + 11y' - 6y = 0`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic: <InlineMath>{`r^3 - 6r^2 + 11r - 6 = 0`}</InlineMath></p>
        <p>Test <InlineMath>{`r = 1`}</InlineMath>: <InlineMath>{`1 - 6 + 11 - 6 = 0`}</InlineMath> ✓</p>
        <p>Factor: <InlineMath>{`(r-1)(r^2 - 5r + 6) = (r-1)(r-2)(r-3) = 0`}</InlineMath></p>
        <p>Roots: <InlineMath>{`r = 1, 2, 3`}</InlineMath></p>
        <p>General solution: <InlineMath>{`y = c_1 e^x + c_2 e^{2x} + c_3 e^{3x}`}</InlineMath></p>
      </Callout>

      <h2>Reduction of Order</h2>

      <Callout type="theorem" title="Reduction of Order">
        <p>
          If <InlineMath>{`y_1`}</InlineMath> is a known solution of <InlineMath>{`y'' + ay' + by = 0`}</InlineMath>,
          a second independent solution can be found by substituting <InlineMath>{`y = v(x) y_1(x)`}</InlineMath>
          and solving for <InlineMath>{`v`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 9: Reduction of Order">
        <p>
          Given that <InlineMath>{`y_1 = e^x`}</InlineMath> solves <InlineMath>{`y'' - 2y' + y = 0`}</InlineMath>,
          find <InlineMath>{`y_2`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`y = ve^x`}</InlineMath>. Then:</p>
        <MathBlock>{`y' = v'e^x + ve^x = (v' + v)e^x`}</MathBlock>
        <MathBlock>{`y'' = (v'' + v')e^x + (v' + v)e^x = (v'' + 2v' + v)e^x`}</MathBlock>
        <p>Substitute into the equation:</p>
        <MathBlock>{`(v'' + 2v' + v)e^x - 2(v' + v)e^x + ve^x = 0`}</MathBlock>
        <MathBlock>{`v'' + 2v' + v - 2v' - 2v + v = 0`}</MathBlock>
        <MathBlock>{`v'' = 0`}</MathBlock>
        <p>So <InlineMath>{`v = Ax + B`}</InlineMath>. Taking <InlineMath>{`A = 1`}</InlineMath>, <InlineMath>{`B = 0`}</InlineMath>:</p>
        <MathBlock>{`y_2 = xe^x`}</MathBlock>
        <p>This confirms our formula for the repeated root case!</p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Linear independence:</strong> <InlineMath>{`y_1, y_2`}</InlineMath> independent means
          neither is a constant multiple of the other
        </li>
        <li>
          <strong>Wronskian:</strong> <InlineMath>{`W = y_1 y_2' - y_2 y_1'`}</InlineMath> tests independence
        </li>
        <li>
          <strong>Fundamental set:</strong> Two independent solutions <InlineMath>{`\\{y_1, y_2\\}`}</InlineMath>
        </li>
        <li>
          <strong>General solution:</strong> <InlineMath>{`y = c_1 y_1 + c_2 y_2`}</InlineMath> with two arbitrary constants
        </li>
        <li>
          <strong>Abel's formula:</strong> <InlineMath>{`W(x) = W(x_0)e^{-a(x-x_0)}`}</InlineMath>;
          Wronskian is all or nothing
        </li>
        <li>
          <strong>Reduction of order:</strong> If <InlineMath>{`y_1`}</InlineMath> known, try <InlineMath>{`y = vy_1`}</InlineMath> to find <InlineMath>{`y_2`}</InlineMath>
        </li>
      </ul>
    </LessonLayout>
  );
}
