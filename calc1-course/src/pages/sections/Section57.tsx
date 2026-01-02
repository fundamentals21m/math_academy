import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <p>
        We now turn to <strong>nonhomogeneous</strong> second-order linear equations,
        where a forcing term appears on the right side. The key insight is that the
        general solution combines the homogeneous solution with any particular solution.
      </p>

      <h2>Structure of Solutions</h2>

      <Callout type="definition" title="Nonhomogeneous Equation">
        <p>
          A <strong>nonhomogeneous</strong> second-order linear equation has the form:
        </p>
        <MathBlock>{`y'' + ay' + by = f(x)`}</MathBlock>
        <p>
          where <InlineMath>{`f(x) \\neq 0`}</InlineMath>. The corresponding <strong>homogeneous equation</strong> is:
        </p>
        <MathBlock>{`y'' + ay' + by = 0`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="General Solution Structure">
        <p>
          The general solution of <InlineMath>{`y'' + ay' + by = f(x)`}</InlineMath> is:
        </p>
        <MathBlock>{`y = y_h + y_p`}</MathBlock>
        <p>where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`y_h = c_1 y_1 + c_2 y_2`}</InlineMath> is the <strong>general homogeneous solution</strong></li>
          <li><InlineMath>{`y_p`}</InlineMath> is any <strong>particular solution</strong> of the nonhomogeneous equation</li>
        </ul>
      </Callout>

      <Callout type="info" title="Why This Works">
        <p>
          If <InlineMath>{`y_p`}</InlineMath> satisfies <InlineMath>{`y_p'' + ay_p' + by_p = f(x)`}</InlineMath>, and
          <InlineMath>{`y_h`}</InlineMath> satisfies <InlineMath>{`y_h'' + ay_h' + by_h = 0`}</InlineMath>, then:
        </p>
        <MathBlock>{`(y_h + y_p)'' + a(y_h + y_p)' + b(y_h + y_p) = 0 + f(x) = f(x)`}</MathBlock>
        <p>
          Conversely, if <InlineMath>{`y`}</InlineMath> is any solution, then <InlineMath>{`y - y_p`}</InlineMath> solves the
          homogeneous equation, so <InlineMath>{`y - y_p = y_h`}</InlineMath> for some choice of constants.
        </p>
      </Callout>

      <h2>Method of Undetermined Coefficients</h2>

      <p>
        For certain types of forcing functions <InlineMath>{`f(x)`}</InlineMath>, we can guess the
        form of a particular solution and determine the coefficients by substitution.
      </p>

      <Callout type="theorem" title="Basic Guessing Rules">
        <p>
          For <InlineMath>{`y'' + ay' + by = f(x)`}</InlineMath>, guess <InlineMath>{`y_p`}</InlineMath> based on <InlineMath>{`f(x)`}</InlineMath>:
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left p-2">Form of <InlineMath>{`f(x)`}</InlineMath></th>
                <th className="text-left p-2">Guess for <InlineMath>{`y_p`}</InlineMath></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-800">
                <td className="p-2"><InlineMath>{`k`}</InlineMath> (constant)</td>
                <td className="p-2"><InlineMath>{`A`}</InlineMath></td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2"><InlineMath>{`kx^n`}</InlineMath></td>
                <td className="p-2"><InlineMath>{`A_n x^n + A_{n-1}x^{n-1} + \\cdots + A_0`}</InlineMath></td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2"><InlineMath>{`ke^{\\alpha x}`}</InlineMath></td>
                <td className="p-2"><InlineMath>{`Ae^{\\alpha x}`}</InlineMath></td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2"><InlineMath>{`k\\cos\\beta x`}</InlineMath> or <InlineMath>{`k\\sin\\beta x`}</InlineMath></td>
                <td className="p-2"><InlineMath>{`A\\cos\\beta x + B\\sin\\beta x`}</InlineMath></td>
              </tr>
              <tr>
                <td className="p-2"><InlineMath>{`ke^{\\alpha x}\\cos\\beta x`}</InlineMath> or <InlineMath>{`ke^{\\alpha x}\\sin\\beta x`}</InlineMath></td>
                <td className="p-2"><InlineMath>{`e^{\\alpha x}(A\\cos\\beta x + B\\sin\\beta x)`}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Callout>

      <h2>Examples: Standard Cases</h2>

      <Callout type="example" title="Example 1: Polynomial Forcing">
        <p>Solve <InlineMath>{`y'' - 3y' + 2y = 4x`}</InlineMath>.</p>
        <p><strong>Step 1: Solve homogeneous.</strong></p>
        <p>
          <InlineMath>{`r^2 - 3r + 2 = (r-1)(r-2) = 0`}</InlineMath>, so <InlineMath>{`y_h = c_1 e^x + c_2 e^{2x}`}</InlineMath>.
        </p>
        <p><strong>Step 2: Guess particular solution.</strong></p>
        <p>Since <InlineMath>{`f(x) = 4x`}</InlineMath>, try <InlineMath>{`y_p = Ax + B`}</InlineMath>.</p>
        <p><strong>Step 3: Substitute and solve.</strong></p>
        <MathBlock>{`y_p' = A, \\quad y_p'' = 0`}</MathBlock>
        <MathBlock>{`0 - 3A + 2(Ax + B) = 4x`}</MathBlock>
        <MathBlock>{`2Ax + (2B - 3A) = 4x + 0`}</MathBlock>
        <p>Matching coefficients: <InlineMath>{`2A = 4`}</InlineMath> and <InlineMath>{`2B - 3A = 0`}</InlineMath></p>
        <p>So <InlineMath>{`A = 2`}</InlineMath> and <InlineMath>{`B = 3`}</InlineMath>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1 e^x + c_2 e^{2x} + 2x + 3`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Exponential Forcing">
        <p>Solve <InlineMath>{`y'' + y' - 2y = 3e^{4x}`}</InlineMath>.</p>
        <p><strong>Step 1:</strong> <InlineMath>{`r^2 + r - 2 = (r+2)(r-1) = 0`}</InlineMath>, so <InlineMath>{`y_h = c_1 e^{-2x} + c_2 e^x`}</InlineMath>.</p>
        <p><strong>Step 2:</strong> Try <InlineMath>{`y_p = Ae^{4x}`}</InlineMath>.</p>
        <p><strong>Step 3:</strong></p>
        <MathBlock>{`y_p' = 4Ae^{4x}, \\quad y_p'' = 16Ae^{4x}`}</MathBlock>
        <MathBlock>{`16Ae^{4x} + 4Ae^{4x} - 2Ae^{4x} = 3e^{4x}`}</MathBlock>
        <MathBlock>{`18Ae^{4x} = 3e^{4x}`}</MathBlock>
        <p>So <InlineMath>{`A = \\frac{1}{6}`}</InlineMath>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1 e^{-2x} + c_2 e^x + \\frac{1}{6}e^{4x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Trigonometric Forcing">
        <p>Solve <InlineMath>{`y'' + 4y = \\sin x`}</InlineMath>.</p>
        <p><strong>Step 1:</strong> <InlineMath>{`r^2 + 4 = 0`}</InlineMath>, <InlineMath>{`r = \\pm 2i`}</InlineMath>, so <InlineMath>{`y_h = c_1\\cos 2x + c_2\\sin 2x`}</InlineMath>.</p>
        <p><strong>Step 2:</strong> Try <InlineMath>{`y_p = A\\cos x + B\\sin x`}</InlineMath>.</p>
        <p><strong>Step 3:</strong></p>
        <MathBlock>{`y_p' = -A\\sin x + B\\cos x`}</MathBlock>
        <MathBlock>{`y_p'' = -A\\cos x - B\\sin x`}</MathBlock>
        <MathBlock>{`(-A\\cos x - B\\sin x) + 4(A\\cos x + B\\sin x) = \\sin x`}</MathBlock>
        <MathBlock>{`3A\\cos x + 3B\\sin x = 0 \\cdot \\cos x + 1 \\cdot \\sin x`}</MathBlock>
        <p>So <InlineMath>{`3A = 0`}</InlineMath> and <InlineMath>{`3B = 1`}</InlineMath>, giving <InlineMath>{`A = 0`}</InlineMath>, <InlineMath>{`B = \\frac{1}{3}`}</InlineMath>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1\\cos 2x + c_2\\sin 2x + \\frac{1}{3}\\sin x`}</MathBlock>
      </Callout>

      <h2>The Modification Rule</h2>

      <Callout type="theorem" title="Modification Rule">
        <p>
          If the initial guess for <InlineMath>{`y_p`}</InlineMath> is a solution of the homogeneous
          equation, multiply the guess by <InlineMath>{`x`}</InlineMath> (or <InlineMath>{`x^2`}</InlineMath> if needed)
          until it is no longer a homogeneous solution.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Resonance Case">
        <p>Solve <InlineMath>{`y'' - 2y' + y = e^x`}</InlineMath>.</p>
        <p><strong>Step 1:</strong> <InlineMath>{`r^2 - 2r + 1 = (r-1)^2 = 0`}</InlineMath>, so <InlineMath>{`y_h = c_1 e^x + c_2 xe^x`}</InlineMath>.</p>
        <p><strong>Step 2:</strong> Normal guess is <InlineMath>{`Ae^x`}</InlineMath>, but <InlineMath>{`e^x`}</InlineMath> is already in <InlineMath>{`y_h`}</InlineMath>.</p>
        <p>Try <InlineMath>{`Axe^x`}</InlineMath>? But <InlineMath>{`xe^x`}</InlineMath> is also in <InlineMath>{`y_h`}</InlineMath>!</p>
        <p>Try <InlineMath>{`y_p = Ax^2 e^x`}</InlineMath>.</p>
        <p><strong>Step 3:</strong></p>
        <MathBlock>{`y_p = Ax^2 e^x`}</MathBlock>
        <MathBlock>{`y_p' = A(2x + x^2)e^x`}</MathBlock>
        <MathBlock>{`y_p'' = A(2 + 4x + x^2)e^x`}</MathBlock>
        <p>Substitute:</p>
        <MathBlock>{`A(2 + 4x + x^2)e^x - 2A(2x + x^2)e^x + Ax^2e^x = e^x`}</MathBlock>
        <MathBlock>{`Ae^x[(2 + 4x + x^2) - 2(2x + x^2) + x^2] = e^x`}</MathBlock>
        <MathBlock>{`Ae^x[2 + 4x + x^2 - 4x - 2x^2 + x^2] = e^x`}</MathBlock>
        <MathBlock>{`2Ae^x = e^x`}</MathBlock>
        <p>So <InlineMath>{`A = \\frac{1}{2}`}</InlineMath>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1 e^x + c_2 xe^x + \\frac{1}{2}x^2 e^x`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Trigonometric Resonance">
        <p>Solve <InlineMath>{`y'' + 4y = \\cos 2x`}</InlineMath>.</p>
        <p><strong>Step 1:</strong> <InlineMath>{`y_h = c_1\\cos 2x + c_2\\sin 2x`}</InlineMath>.</p>
        <p><strong>Step 2:</strong> Normal guess <InlineMath>{`A\\cos 2x + B\\sin 2x`}</InlineMath> is in <InlineMath>{`y_h`}</InlineMath>.</p>
        <p>Try <InlineMath>{`y_p = x(A\\cos 2x + B\\sin 2x)`}</InlineMath>.</p>
        <p><strong>Step 3:</strong></p>
        <MathBlock>{`y_p = Ax\\cos 2x + Bx\\sin 2x`}</MathBlock>
        <MathBlock>{`y_p' = A\\cos 2x - 2Ax\\sin 2x + B\\sin 2x + 2Bx\\cos 2x`}</MathBlock>
        <MathBlock>{`y_p'' = -4A\\sin 2x - 4Ax\\cos 2x + 4B\\cos 2x - 4Bx\\sin 2x`}</MathBlock>
        <p>Substitute into <InlineMath>{`y'' + 4y`}</InlineMath>:</p>
        <MathBlock>{`y_p'' + 4y_p = -4A\\sin 2x + 4B\\cos 2x = \\cos 2x`}</MathBlock>
        <p>So <InlineMath>{`-4A = 0`}</InlineMath> and <InlineMath>{`4B = 1`}</InlineMath>, giving <InlineMath>{`A = 0`}</InlineMath>, <InlineMath>{`B = \\frac{1}{4}`}</InlineMath>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1\\cos 2x + c_2\\sin 2x + \\frac{1}{4}x\\sin 2x`}</MathBlock>
      </Callout>

      <h2>Superposition for Multiple Terms</h2>

      <Callout type="theorem" title="Superposition Principle">
        <p>
          If <InlineMath>{`f(x) = f_1(x) + f_2(x) + \\cdots + f_n(x)`}</InlineMath>, and <InlineMath>{`y_{p_k}`}</InlineMath>
          is a particular solution for <InlineMath>{`y'' + ay' + by = f_k(x)`}</InlineMath>, then:
        </p>
        <MathBlock>{`y_p = y_{p_1} + y_{p_2} + \\cdots + y_{p_n}`}</MathBlock>
        <p>is a particular solution for the full equation.</p>
      </Callout>

      <Callout type="example" title="Example 6: Multiple Terms">
        <p>Solve <InlineMath>{`y'' + y = x^2 + e^x`}</InlineMath>.</p>
        <p><strong>Homogeneous:</strong> <InlineMath>{`y_h = c_1\\cos x + c_2\\sin x`}</InlineMath>.</p>
        <p><strong>For</strong> <InlineMath>{`f_1 = x^2`}</InlineMath>: Try <InlineMath>{`y_{p_1} = Ax^2 + Bx + C`}</InlineMath>.</p>
        <MathBlock>{`y_{p_1}'' + y_{p_1} = 2A + Ax^2 + Bx + C = x^2`}</MathBlock>
        <p>So <InlineMath>{`A = 1`}</InlineMath>, <InlineMath>{`B = 0`}</InlineMath>, <InlineMath>{`C = -2`}</InlineMath>: <InlineMath>{`y_{p_1} = x^2 - 2`}</InlineMath>.</p>
        <p><strong>For</strong> <InlineMath>{`f_2 = e^x`}</InlineMath>: Try <InlineMath>{`y_{p_2} = De^x`}</InlineMath>.</p>
        <MathBlock>{`y_{p_2}'' + y_{p_2} = De^x + De^x = 2De^x = e^x`}</MathBlock>
        <p>So <InlineMath>{`D = \\frac{1}{2}`}</InlineMath>: <InlineMath>{`y_{p_2} = \\frac{1}{2}e^x`}</InlineMath>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1\\cos x + c_2\\sin x + x^2 - 2 + \\frac{1}{2}e^x`}</MathBlock>
      </Callout>

      <h2>Initial Value Problems</h2>

      <Callout type="example" title="Example 7: Complete IVP">
        <p>
          Solve <InlineMath>{`y'' + 2y' + y = e^{-x}`}</InlineMath>, <InlineMath>{`y(0) = 0`}</InlineMath>,
          <InlineMath>{`y'(0) = 1`}</InlineMath>.
        </p>
        <p><strong>Step 1:</strong> <InlineMath>{`(r+1)^2 = 0`}</InlineMath>, so <InlineMath>{`y_h = c_1 e^{-x} + c_2 xe^{-x}`}</InlineMath>.</p>
        <p><strong>Step 2:</strong> Since <InlineMath>{`e^{-x}`}</InlineMath> and <InlineMath>{`xe^{-x}`}</InlineMath> are in <InlineMath>{`y_h`}</InlineMath>, try <InlineMath>{`y_p = Ax^2 e^{-x}`}</InlineMath>.</p>
        <MathBlock>{`y_p = Ax^2 e^{-x}`}</MathBlock>
        <MathBlock>{`y_p' = A(2x - x^2)e^{-x}`}</MathBlock>
        <MathBlock>{`y_p'' = A(2 - 4x + x^2)e^{-x}`}</MathBlock>
        <p>Substitute:</p>
        <MathBlock>{`A(2 - 4x + x^2)e^{-x} + 2A(2x - x^2)e^{-x} + Ax^2 e^{-x} = e^{-x}`}</MathBlock>
        <MathBlock>{`Ae^{-x}[2 - 4x + x^2 + 4x - 2x^2 + x^2] = e^{-x}`}</MathBlock>
        <MathBlock>{`2Ae^{-x} = e^{-x}`}</MathBlock>
        <p>So <InlineMath>{`A = \\frac{1}{2}`}</InlineMath>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1 e^{-x} + c_2 xe^{-x} + \\frac{1}{2}x^2 e^{-x}`}</MathBlock>
        <p><strong>Apply initial conditions:</strong></p>
        <MathBlock>{`y(0) = c_1 = 0`}</MathBlock>
        <MathBlock>{`y' = -c_1 e^{-x} + c_2(e^{-x} - xe^{-x}) + \\frac{1}{2}(2x - x^2)e^{-x}`}</MathBlock>
        <MathBlock>{`y'(0) = -c_1 + c_2 = 1`}</MathBlock>
        <p>With <InlineMath>{`c_1 = 0`}</InlineMath>, we get <InlineMath>{`c_2 = 1`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`y = xe^{-x} + \\frac{1}{2}x^2 e^{-x} = xe^{-x}\\left(1 + \\frac{x}{2}\\right)`}</MathBlock>
      </Callout>

      <h2>Summary Table</h2>

      <Callout type="info" title="Complete Method">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Find <InlineMath>{`y_h`}</InlineMath> by solving the characteristic equation</li>
          <li>Guess <InlineMath>{`y_p`}</InlineMath> based on <InlineMath>{`f(x)`}</InlineMath></li>
          <li>If guess overlaps with <InlineMath>{`y_h`}</InlineMath>, multiply by <InlineMath>{`x`}</InlineMath> (or <InlineMath>{`x^2`}</InlineMath>)</li>
          <li>Substitute guess into equation and solve for coefficients</li>
          <li>General solution: <InlineMath>{`y = y_h + y_p`}</InlineMath></li>
          <li>Use initial conditions to find <InlineMath>{`c_1, c_2`}</InlineMath></li>
        </ol>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Nonhomogeneous:</strong> <InlineMath>{`y'' + ay' + by = f(x)`}</InlineMath> with <InlineMath>{`f \\neq 0`}</InlineMath>
        </li>
        <li>
          <strong>General solution:</strong> <InlineMath>{`y = y_h + y_p`}</InlineMath> (homogeneous + particular)
        </li>
        <li>
          <strong>Undetermined coefficients:</strong> Guess form of <InlineMath>{`y_p`}</InlineMath> based on <InlineMath>{`f(x)`}</InlineMath>
        </li>
        <li>
          <strong>Modification rule:</strong> If guess is in <InlineMath>{`y_h`}</InlineMath>, multiply by <InlineMath>{`x`}</InlineMath>
        </li>
        <li>
          <strong>Superposition:</strong> For <InlineMath>{`f = f_1 + f_2`}</InlineMath>, find <InlineMath>{`y_p = y_{p_1} + y_{p_2}`}</InlineMath>
        </li>
        <li>
          <strong>Works for:</strong> Polynomials, exponentials, sines, cosines, and their products
        </li>
      </ul>
    </LessonLayout>
  );
}
