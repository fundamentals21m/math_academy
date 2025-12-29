import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <p>
        Having introduced the three cases for solving <MathInline>{`y'' + ay' + by = 0`}</MathInline>,
        we now develop the theory that explains <em>why</em> these solutions work and
        guarantees we have found <em>all</em> solutions.
      </p>

      <h2>Linear Independence of Solutions</h2>

      <Callout type="definition" title="Linearly Independent Functions">
        <p>
          Two functions <MathInline>{`y_1(x)`}</MathInline> and <MathInline>{`y_2(x)`}</MathInline> are
          <strong> linearly independent</strong> on an interval <MathInline>{`I`}</MathInline> if
          the only constants <MathInline>{`c_1, c_2`}</MathInline> satisfying
        </p>
        <MathBlock>{`c_1 y_1(x) + c_2 y_2(x) = 0 \\quad \\text{for all } x \\in I`}</MathBlock>
        <p>are <MathInline>{`c_1 = c_2 = 0`}</MathInline>.</p>
        <p>
          Equivalently, neither function is a constant multiple of the other.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Independent vs Dependent">
        <p><strong>Independent:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`e^x`}</MathInline> and <MathInline>{`e^{-x}`}</MathInline> are independent (neither is a multiple of the other)</li>
          <li><MathInline>{`\\sin x`}</MathInline> and <MathInline>{`\\cos x`}</MathInline> are independent</li>
          <li><MathInline>{`e^{2x}`}</MathInline> and <MathInline>{`xe^{2x}`}</MathInline> are independent</li>
        </ul>
        <p className="mt-2"><strong>Dependent:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`e^x`}</MathInline> and <MathInline>{`3e^x`}</MathInline> are dependent (<MathInline>{`3e^x = 3 \\cdot e^x`}</MathInline>)</li>
          <li><MathInline>{`\\sin^2 x`}</MathInline> and <MathInline>{`1 - \\cos^2 x`}</MathInline> are dependent (they're equal)</li>
        </ul>
      </Callout>

      <h2>The Wronskian</h2>

      <Callout type="definition" title="Wronskian">
        <p>
          The <strong>Wronskian</strong> of two functions <MathInline>{`y_1`}</MathInline> and <MathInline>{`y_2`}</MathInline> is:
        </p>
        <MathBlock>{`W(y_1, y_2) = \\begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \\end{vmatrix} = y_1 y_2' - y_2 y_1'`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Wronskian Test">
        <p>
          For solutions <MathInline>{`y_1, y_2`}</MathInline> of <MathInline>{`y'' + ay' + by = 0`}</MathInline>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`W(y_1, y_2) \\neq 0`}</MathInline> at some point, then <MathInline>{`y_1, y_2`}</MathInline> are linearly independent</li>
          <li>If <MathInline>{`y_1, y_2`}</MathInline> are linearly independent solutions, then <MathInline>{`W \\neq 0`}</MathInline> everywhere</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 2: Computing the Wronskian">
        <p>
          Verify that <MathInline>{`y_1 = e^{2x}`}</MathInline> and <MathInline>{`y_2 = e^{-3x}`}</MathInline> are independent.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`W = \\begin{vmatrix} e^{2x} & e^{-3x} \\ 2e^{2x} & -3e^{-3x} \\end{vmatrix} = e^{2x}(-3e^{-3x}) - e^{-3x}(2e^{2x})`}</MathBlock>
        <MathBlock>{`= -3e^{-x} - 2e^{-x} = -5e^{-x} \\neq 0`}</MathBlock>
        <p>Since <MathInline>{`W \\neq 0`}</MathInline>, the functions are linearly independent.</p>
      </Callout>

      <Callout type="example" title="Example 3: Repeated Root Case">
        <p>
          Show that <MathInline>{`y_1 = e^{rx}`}</MathInline> and <MathInline>{`y_2 = xe^{rx}`}</MathInline> are independent.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`W = \\begin{vmatrix} e^{rx} & xe^{rx} \\ re^{rx} & e^{rx} + rxe^{rx} \\end{vmatrix}`}</MathBlock>
        <MathBlock>{`= e^{rx}(e^{rx} + rxe^{rx}) - xe^{rx}(re^{rx})`}</MathBlock>
        <MathBlock>{`= e^{2rx} + rxe^{2rx} - rxe^{2rx} = e^{2rx} \\neq 0`}</MathBlock>
        <p>This confirms that <MathInline>{`e^{rx}`}</MathInline> and <MathInline>{`xe^{rx}`}</MathInline> form independent solutions.</p>
      </Callout>

      <h2>Fundamental Set of Solutions</h2>

      <Callout type="definition" title="Fundamental Set">
        <p>
          A <strong>fundamental set of solutions</strong> for <MathInline>{`y'' + ay' + by = 0`}</MathInline> is
          a pair of linearly independent solutions <MathInline>{`\\{y_1, y_2\\}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="General Solution Theorem">
        <p>
          If <MathInline>{`y_1`}</MathInline> and <MathInline>{`y_2`}</MathInline> form a fundamental set of solutions
          for <MathInline>{`y'' + ay' + by = 0`}</MathInline>, then the <strong>general solution</strong> is:
        </p>
        <MathBlock>{`y = c_1 y_1 + c_2 y_2`}</MathBlock>
        <p>
          where <MathInline>{`c_1, c_2`}</MathInline> are arbitrary constants. Every solution has this form.
        </p>
      </Callout>

      <Callout type="info" title="Why Two Solutions?">
        <p>
          A second-order equation needs two initial conditions (<MathInline>{`y(x_0)`}</MathInline> and
          <MathInline>{`y'(x_0)`}</MathInline>) to determine a unique solution. Two independent solutions
          give exactly two free parameters to match these conditions.
        </p>
      </Callout>

      <h2>Summary of the Three Cases</h2>

      <Callout type="theorem" title="Complete Classification">
        <p>
          For <MathInline>{`y'' + ay' + by = 0`}</MathInline> with characteristic equation
          <MathInline>{`r^2 + ar + b = 0`}</MathInline>:
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
                <td className="p-2"><MathInline>{`a^2 - 4b > 0`}</MathInline></td>
                <td className="p-2"><MathInline>{`r_1 \\neq r_2`}</MathInline> real</td>
                <td className="p-2"><MathInline>{`\\{e^{r_1 x}, e^{r_2 x}\\}`}</MathInline></td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2"><MathInline>{`a^2 - 4b = 0`}</MathInline></td>
                <td className="p-2"><MathInline>{`r_1 = r_2 = r`}</MathInline></td>
                <td className="p-2"><MathInline>{`\\{e^{rx}, xe^{rx}\\}`}</MathInline></td>
              </tr>
              <tr>
                <td className="p-2"><MathInline>{`a^2 - 4b < 0`}</MathInline></td>
                <td className="p-2"><MathInline>{`\\alpha \\pm i\\beta`}</MathInline></td>
                <td className="p-2"><MathInline>{`\\{e^{\\alpha x}\\cos\\beta x, e^{\\alpha x}\\sin\\beta x\\}`}</MathInline></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Callout>

      <h2>Abel's Formula</h2>

      <Callout type="theorem" title="Abel's Identity">
        <p>
          If <MathInline>{`y_1, y_2`}</MathInline> are any two solutions of <MathInline>{`y'' + a y' + b y = 0`}</MathInline>,
          then their Wronskian satisfies:
        </p>
        <MathBlock>{`W(x) = W(x_0) e^{-a(x - x_0)}`}</MathBlock>
        <p>
          In particular, the Wronskian is either always zero or never zero on any interval.
        </p>
      </Callout>

      <Callout type="info" title="Consequence">
        <p>
          Abel's formula shows that we only need to check <MathInline>{`W \\neq 0`}</MathInline> at
          one point to establish linear independence. If <MathInline>{`W(x_0) \\neq 0`}</MathInline> for
          any <MathInline>{`x_0`}</MathInline>, then <MathInline>{`W(x) \\neq 0`}</MathInline> for all <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <h2>Worked Examples</h2>

      <Callout type="example" title="Example 4: Finding the General Solution">
        <p>Solve <MathInline>{`y'' - 5y' + 6y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <MathInline>{`r^2 - 5r + 6 = 0`}</MathInline></p>
        <p>Factor: <MathInline>{`(r-2)(r-3) = 0`}</MathInline>, so <MathInline>{`r = 2, 3`}</MathInline>.</p>
        <p>
          Fundamental set: <MathInline>{`\\{e^{2x}, e^{3x}\\}`}</MathInline>
        </p>
        <p>General solution: <MathInline>{`y = c_1 e^{2x} + c_2 e^{3x}`}</MathInline></p>
        <p>
          Verify independence: <MathInline>{`W = e^{2x}(3e^{3x}) - e^{3x}(2e^{2x}) = 3e^{5x} - 2e^{5x} = e^{5x} \\neq 0`}</MathInline>
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Repeated Root">
        <p>Solve <MathInline>{`y'' + 4y' + 4y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <MathInline>{`r^2 + 4r + 4 = 0`}</MathInline></p>
        <p>Factor: <MathInline>{`(r+2)^2 = 0`}</MathInline>, so <MathInline>{`r = -2`}</MathInline> (repeated).</p>
        <p>
          Fundamental set: <MathInline>{`\\{e^{-2x}, xe^{-2x}\\}`}</MathInline>
        </p>
        <p>General solution: <MathInline>{`y = c_1 e^{-2x} + c_2 xe^{-2x} = (c_1 + c_2 x)e^{-2x}`}</MathInline></p>
      </Callout>

      <Callout type="example" title="Example 6: Complex Roots">
        <p>Solve <MathInline>{`y'' + 2y' + 5y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation: <MathInline>{`r^2 + 2r + 5 = 0`}</MathInline></p>
        <MathBlock>{`r = \\frac{-2 \\pm \\sqrt{4 - 20}}{2} = \\frac{-2 \\pm \\sqrt{-16}}{2} = -1 \\pm 2i`}</MathBlock>
        <p>Here <MathInline>{`\\alpha = -1`}</MathInline>, <MathInline>{`\\beta = 2`}</MathInline>.</p>
        <p>
          Fundamental set: <MathInline>{`\\{e^{-x}\\cos 2x, e^{-x}\\sin 2x\\}`}</MathInline>
        </p>
        <p>General solution:</p>
        <MathBlock>{`y = e^{-x}(c_1 \\cos 2x + c_2 \\sin 2x)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 7: Initial Value Problem">
        <p>
          Solve <MathInline>{`y'' - 2y' - 3y = 0`}</MathInline>, <MathInline>{`y(0) = 2`}</MathInline>,
          <MathInline>{`y'(0) = -4`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic: <MathInline>{`r^2 - 2r - 3 = (r-3)(r+1) = 0`}</MathInline>, so <MathInline>{`r = 3, -1`}</MathInline>.</p>
        <p>General solution: <MathInline>{`y = c_1 e^{3x} + c_2 e^{-x}`}</MathInline></p>
        <p>Apply initial conditions:</p>
        <MathBlock>{`y(0) = c_1 + c_2 = 2`}</MathBlock>
        <MathBlock>{`y' = 3c_1 e^{3x} - c_2 e^{-x}`}</MathBlock>
        <MathBlock>{`y'(0) = 3c_1 - c_2 = -4`}</MathBlock>
        <p>From the system: <MathInline>{`c_1 + c_2 = 2`}</MathInline> and <MathInline>{`3c_1 - c_2 = -4`}</MathInline></p>
        <p>Adding: <MathInline>{`4c_1 = -2`}</MathInline>, so <MathInline>{`c_1 = -\\frac{1}{2}`}</MathInline></p>
        <p>Then <MathInline>{`c_2 = 2 - c_1 = \\frac{5}{2}`}</MathInline></p>
        <p>Solution: <MathInline>{`y = -\\frac{1}{2}e^{3x} + \\frac{5}{2}e^{-x}`}</MathInline></p>
      </Callout>

      <Callout type="example" title="Example 8: Higher-Order Equation">
        <p>Solve <MathInline>{`y''' - 6y'' + 11y' - 6y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic: <MathInline>{`r^3 - 6r^2 + 11r - 6 = 0`}</MathInline></p>
        <p>Test <MathInline>{`r = 1`}</MathInline>: <MathInline>{`1 - 6 + 11 - 6 = 0`}</MathInline> ✓</p>
        <p>Factor: <MathInline>{`(r-1)(r^2 - 5r + 6) = (r-1)(r-2)(r-3) = 0`}</MathInline></p>
        <p>Roots: <MathInline>{`r = 1, 2, 3`}</MathInline></p>
        <p>General solution: <MathInline>{`y = c_1 e^x + c_2 e^{2x} + c_3 e^{3x}`}</MathInline></p>
      </Callout>

      <h2>Reduction of Order</h2>

      <Callout type="theorem" title="Reduction of Order">
        <p>
          If <MathInline>{`y_1`}</MathInline> is a known solution of <MathInline>{`y'' + ay' + by = 0`}</MathInline>,
          a second independent solution can be found by substituting <MathInline>{`y = v(x) y_1(x)`}</MathInline>
          and solving for <MathInline>{`v`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 9: Reduction of Order">
        <p>
          Given that <MathInline>{`y_1 = e^x`}</MathInline> solves <MathInline>{`y'' - 2y' + y = 0`}</MathInline>,
          find <MathInline>{`y_2`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Let <MathInline>{`y = ve^x`}</MathInline>. Then:</p>
        <MathBlock>{`y' = v'e^x + ve^x = (v' + v)e^x`}</MathBlock>
        <MathBlock>{`y'' = (v'' + v')e^x + (v' + v)e^x = (v'' + 2v' + v)e^x`}</MathBlock>
        <p>Substitute into the equation:</p>
        <MathBlock>{`(v'' + 2v' + v)e^x - 2(v' + v)e^x + ve^x = 0`}</MathBlock>
        <MathBlock>{`v'' + 2v' + v - 2v' - 2v + v = 0`}</MathBlock>
        <MathBlock>{`v'' = 0`}</MathBlock>
        <p>So <MathInline>{`v = Ax + B`}</MathInline>. Taking <MathInline>{`A = 1`}</MathInline>, <MathInline>{`B = 0`}</MathInline>:</p>
        <MathBlock>{`y_2 = xe^x`}</MathBlock>
        <p>This confirms our formula for the repeated root case!</p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Linear independence:</strong> <MathInline>{`y_1, y_2`}</MathInline> independent means
          neither is a constant multiple of the other
        </li>
        <li>
          <strong>Wronskian:</strong> <MathInline>{`W = y_1 y_2' - y_2 y_1'`}</MathInline> tests independence
        </li>
        <li>
          <strong>Fundamental set:</strong> Two independent solutions <MathInline>{`\\{y_1, y_2\\}`}</MathInline>
        </li>
        <li>
          <strong>General solution:</strong> <MathInline>{`y = c_1 y_1 + c_2 y_2`}</MathInline> with two arbitrary constants
        </li>
        <li>
          <strong>Abel's formula:</strong> <MathInline>{`W(x) = W(x_0)e^{-a(x-x_0)}`}</MathInline>;
          Wronskian is all or nothing
        </li>
        <li>
          <strong>Reduction of order:</strong> If <MathInline>{`y_1`}</MathInline> known, try <MathInline>{`y = vy_1`}</MathInline> to find <MathInline>{`y_2`}</MathInline>
        </li>
      </ul>
    </LessonLayout>
  );
}
