import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          where <MathInline>{`f(x) \\neq 0`}</MathInline>. The corresponding <strong>homogeneous equation</strong> is:
        </p>
        <MathBlock>{`y'' + ay' + by = 0`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="General Solution Structure">
        <p>
          The general solution of <MathInline>{`y'' + ay' + by = f(x)`}</MathInline> is:
        </p>
        <MathBlock>{`y = y_h + y_p`}</MathBlock>
        <p>where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`y_h = c_1 y_1 + c_2 y_2`}</MathInline> is the <strong>general homogeneous solution</strong></li>
          <li><MathInline>{`y_p`}</MathInline> is any <strong>particular solution</strong> of the nonhomogeneous equation</li>
        </ul>
      </Callout>

      <Callout type="info" title="Why This Works">
        <p>
          If <MathInline>{`y_p`}</MathInline> satisfies <MathInline>{`y_p'' + ay_p' + by_p = f(x)`}</MathInline>, and
          <MathInline>{`y_h`}</MathInline> satisfies <MathInline>{`y_h'' + ay_h' + by_h = 0`}</MathInline>, then:
        </p>
        <MathBlock>{`(y_h + y_p)'' + a(y_h + y_p)' + b(y_h + y_p) = 0 + f(x) = f(x)`}</MathBlock>
        <p>
          Conversely, if <MathInline>{`y`}</MathInline> is any solution, then <MathInline>{`y - y_p`}</MathInline> solves the
          homogeneous equation, so <MathInline>{`y - y_p = y_h`}</MathInline> for some choice of constants.
        </p>
      </Callout>

      <h2>Method of Undetermined Coefficients</h2>

      <p>
        For certain types of forcing functions <MathInline>{`f(x)`}</MathInline>, we can guess the
        form of a particular solution and determine the coefficients by substitution.
      </p>

      <Callout type="theorem" title="Basic Guessing Rules">
        <p>
          For <MathInline>{`y'' + ay' + by = f(x)`}</MathInline>, guess <MathInline>{`y_p`}</MathInline> based on <MathInline>{`f(x)`}</MathInline>:
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left p-2">Form of <MathInline>{`f(x)`}</MathInline></th>
                <th className="text-left p-2">Guess for <MathInline>{`y_p`}</MathInline></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-800">
                <td className="p-2"><MathInline>{`k`}</MathInline> (constant)</td>
                <td className="p-2"><MathInline>{`A`}</MathInline></td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2"><MathInline>{`kx^n`}</MathInline></td>
                <td className="p-2"><MathInline>{`A_n x^n + A_{n-1}x^{n-1} + \\cdots + A_0`}</MathInline></td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2"><MathInline>{`ke^{\\alpha x}`}</MathInline></td>
                <td className="p-2"><MathInline>{`Ae^{\\alpha x}`}</MathInline></td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2"><MathInline>{`k\\cos\\beta x`}</MathInline> or <MathInline>{`k\\sin\\beta x`}</MathInline></td>
                <td className="p-2"><MathInline>{`A\\cos\\beta x + B\\sin\\beta x`}</MathInline></td>
              </tr>
              <tr>
                <td className="p-2"><MathInline>{`ke^{\\alpha x}\\cos\\beta x`}</MathInline> or <MathInline>{`ke^{\\alpha x}\\sin\\beta x`}</MathInline></td>
                <td className="p-2"><MathInline>{`e^{\\alpha x}(A\\cos\\beta x + B\\sin\\beta x)`}</MathInline></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Callout>

      <h2>Examples: Standard Cases</h2>

      <Callout type="example" title="Example 1: Polynomial Forcing">
        <p>Solve <MathInline>{`y'' - 3y' + 2y = 4x`}</MathInline>.</p>
        <p><strong>Step 1: Solve homogeneous.</strong></p>
        <p>
          <MathInline>{`r^2 - 3r + 2 = (r-1)(r-2) = 0`}</MathInline>, so <MathInline>{`y_h = c_1 e^x + c_2 e^{2x}`}</MathInline>.
        </p>
        <p><strong>Step 2: Guess particular solution.</strong></p>
        <p>Since <MathInline>{`f(x) = 4x`}</MathInline>, try <MathInline>{`y_p = Ax + B`}</MathInline>.</p>
        <p><strong>Step 3: Substitute and solve.</strong></p>
        <MathBlock>{`y_p' = A, \\quad y_p'' = 0`}</MathBlock>
        <MathBlock>{`0 - 3A + 2(Ax + B) = 4x`}</MathBlock>
        <MathBlock>{`2Ax + (2B - 3A) = 4x + 0`}</MathBlock>
        <p>Matching coefficients: <MathInline>{`2A = 4`}</MathInline> and <MathInline>{`2B - 3A = 0`}</MathInline></p>
        <p>So <MathInline>{`A = 2`}</MathInline> and <MathInline>{`B = 3`}</MathInline>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1 e^x + c_2 e^{2x} + 2x + 3`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Exponential Forcing">
        <p>Solve <MathInline>{`y'' + y' - 2y = 3e^{4x}`}</MathInline>.</p>
        <p><strong>Step 1:</strong> <MathInline>{`r^2 + r - 2 = (r+2)(r-1) = 0`}</MathInline>, so <MathInline>{`y_h = c_1 e^{-2x} + c_2 e^x`}</MathInline>.</p>
        <p><strong>Step 2:</strong> Try <MathInline>{`y_p = Ae^{4x}`}</MathInline>.</p>
        <p><strong>Step 3:</strong></p>
        <MathBlock>{`y_p' = 4Ae^{4x}, \\quad y_p'' = 16Ae^{4x}`}</MathBlock>
        <MathBlock>{`16Ae^{4x} + 4Ae^{4x} - 2Ae^{4x} = 3e^{4x}`}</MathBlock>
        <MathBlock>{`18Ae^{4x} = 3e^{4x}`}</MathBlock>
        <p>So <MathInline>{`A = \\frac{1}{6}`}</MathInline>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1 e^{-2x} + c_2 e^x + \\frac{1}{6}e^{4x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Trigonometric Forcing">
        <p>Solve <MathInline>{`y'' + 4y = \\sin x`}</MathInline>.</p>
        <p><strong>Step 1:</strong> <MathInline>{`r^2 + 4 = 0`}</MathInline>, <MathInline>{`r = \\pm 2i`}</MathInline>, so <MathInline>{`y_h = c_1\\cos 2x + c_2\\sin 2x`}</MathInline>.</p>
        <p><strong>Step 2:</strong> Try <MathInline>{`y_p = A\\cos x + B\\sin x`}</MathInline>.</p>
        <p><strong>Step 3:</strong></p>
        <MathBlock>{`y_p' = -A\\sin x + B\\cos x`}</MathBlock>
        <MathBlock>{`y_p'' = -A\\cos x - B\\sin x`}</MathBlock>
        <MathBlock>{`(-A\\cos x - B\\sin x) + 4(A\\cos x + B\\sin x) = \\sin x`}</MathBlock>
        <MathBlock>{`3A\\cos x + 3B\\sin x = 0 \\cdot \\cos x + 1 \\cdot \\sin x`}</MathBlock>
        <p>So <MathInline>{`3A = 0`}</MathInline> and <MathInline>{`3B = 1`}</MathInline>, giving <MathInline>{`A = 0`}</MathInline>, <MathInline>{`B = \\frac{1}{3}`}</MathInline>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1\\cos 2x + c_2\\sin 2x + \\frac{1}{3}\\sin x`}</MathBlock>
      </Callout>

      <h2>The Modification Rule</h2>

      <Callout type="theorem" title="Modification Rule">
        <p>
          If the initial guess for <MathInline>{`y_p`}</MathInline> is a solution of the homogeneous
          equation, multiply the guess by <MathInline>{`x`}</MathInline> (or <MathInline>{`x^2`}</MathInline> if needed)
          until it is no longer a homogeneous solution.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Resonance Case">
        <p>Solve <MathInline>{`y'' - 2y' + y = e^x`}</MathInline>.</p>
        <p><strong>Step 1:</strong> <MathInline>{`r^2 - 2r + 1 = (r-1)^2 = 0`}</MathInline>, so <MathInline>{`y_h = c_1 e^x + c_2 xe^x`}</MathInline>.</p>
        <p><strong>Step 2:</strong> Normal guess is <MathInline>{`Ae^x`}</MathInline>, but <MathInline>{`e^x`}</MathInline> is already in <MathInline>{`y_h`}</MathInline>.</p>
        <p>Try <MathInline>{`Axe^x`}</MathInline>? But <MathInline>{`xe^x`}</MathInline> is also in <MathInline>{`y_h`}</MathInline>!</p>
        <p>Try <MathInline>{`y_p = Ax^2 e^x`}</MathInline>.</p>
        <p><strong>Step 3:</strong></p>
        <MathBlock>{`y_p = Ax^2 e^x`}</MathBlock>
        <MathBlock>{`y_p' = A(2x + x^2)e^x`}</MathBlock>
        <MathBlock>{`y_p'' = A(2 + 4x + x^2)e^x`}</MathBlock>
        <p>Substitute:</p>
        <MathBlock>{`A(2 + 4x + x^2)e^x - 2A(2x + x^2)e^x + Ax^2e^x = e^x`}</MathBlock>
        <MathBlock>{`Ae^x[(2 + 4x + x^2) - 2(2x + x^2) + x^2] = e^x`}</MathBlock>
        <MathBlock>{`Ae^x[2 + 4x + x^2 - 4x - 2x^2 + x^2] = e^x`}</MathBlock>
        <MathBlock>{`2Ae^x = e^x`}</MathBlock>
        <p>So <MathInline>{`A = \\frac{1}{2}`}</MathInline>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1 e^x + c_2 xe^x + \\frac{1}{2}x^2 e^x`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Trigonometric Resonance">
        <p>Solve <MathInline>{`y'' + 4y = \\cos 2x`}</MathInline>.</p>
        <p><strong>Step 1:</strong> <MathInline>{`y_h = c_1\\cos 2x + c_2\\sin 2x`}</MathInline>.</p>
        <p><strong>Step 2:</strong> Normal guess <MathInline>{`A\\cos 2x + B\\sin 2x`}</MathInline> is in <MathInline>{`y_h`}</MathInline>.</p>
        <p>Try <MathInline>{`y_p = x(A\\cos 2x + B\\sin 2x)`}</MathInline>.</p>
        <p><strong>Step 3:</strong></p>
        <MathBlock>{`y_p = Ax\\cos 2x + Bx\\sin 2x`}</MathBlock>
        <MathBlock>{`y_p' = A\\cos 2x - 2Ax\\sin 2x + B\\sin 2x + 2Bx\\cos 2x`}</MathBlock>
        <MathBlock>{`y_p'' = -4A\\sin 2x - 4Ax\\cos 2x + 4B\\cos 2x - 4Bx\\sin 2x`}</MathBlock>
        <p>Substitute into <MathInline>{`y'' + 4y`}</MathInline>:</p>
        <MathBlock>{`y_p'' + 4y_p = -4A\\sin 2x + 4B\\cos 2x = \\cos 2x`}</MathBlock>
        <p>So <MathInline>{`-4A = 0`}</MathInline> and <MathInline>{`4B = 1`}</MathInline>, giving <MathInline>{`A = 0`}</MathInline>, <MathInline>{`B = \\frac{1}{4}`}</MathInline>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1\\cos 2x + c_2\\sin 2x + \\frac{1}{4}x\\sin 2x`}</MathBlock>
      </Callout>

      <h2>Superposition for Multiple Terms</h2>

      <Callout type="theorem" title="Superposition Principle">
        <p>
          If <MathInline>{`f(x) = f_1(x) + f_2(x) + \\cdots + f_n(x)`}</MathInline>, and <MathInline>{`y_{p_k}`}</MathInline>
          is a particular solution for <MathInline>{`y'' + ay' + by = f_k(x)`}</MathInline>, then:
        </p>
        <MathBlock>{`y_p = y_{p_1} + y_{p_2} + \\cdots + y_{p_n}`}</MathBlock>
        <p>is a particular solution for the full equation.</p>
      </Callout>

      <Callout type="example" title="Example 6: Multiple Terms">
        <p>Solve <MathInline>{`y'' + y = x^2 + e^x`}</MathInline>.</p>
        <p><strong>Homogeneous:</strong> <MathInline>{`y_h = c_1\\cos x + c_2\\sin x`}</MathInline>.</p>
        <p><strong>For</strong> <MathInline>{`f_1 = x^2`}</MathInline>: Try <MathInline>{`y_{p_1} = Ax^2 + Bx + C`}</MathInline>.</p>
        <MathBlock>{`y_{p_1}'' + y_{p_1} = 2A + Ax^2 + Bx + C = x^2`}</MathBlock>
        <p>So <MathInline>{`A = 1`}</MathInline>, <MathInline>{`B = 0`}</MathInline>, <MathInline>{`C = -2`}</MathInline>: <MathInline>{`y_{p_1} = x^2 - 2`}</MathInline>.</p>
        <p><strong>For</strong> <MathInline>{`f_2 = e^x`}</MathInline>: Try <MathInline>{`y_{p_2} = De^x`}</MathInline>.</p>
        <MathBlock>{`y_{p_2}'' + y_{p_2} = De^x + De^x = 2De^x = e^x`}</MathBlock>
        <p>So <MathInline>{`D = \\frac{1}{2}`}</MathInline>: <MathInline>{`y_{p_2} = \\frac{1}{2}e^x`}</MathInline>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1\\cos x + c_2\\sin x + x^2 - 2 + \\frac{1}{2}e^x`}</MathBlock>
      </Callout>

      <h2>Initial Value Problems</h2>

      <Callout type="example" title="Example 7: Complete IVP">
        <p>
          Solve <MathInline>{`y'' + 2y' + y = e^{-x}`}</MathInline>, <MathInline>{`y(0) = 0`}</MathInline>,
          <MathInline>{`y'(0) = 1`}</MathInline>.
        </p>
        <p><strong>Step 1:</strong> <MathInline>{`(r+1)^2 = 0`}</MathInline>, so <MathInline>{`y_h = c_1 e^{-x} + c_2 xe^{-x}`}</MathInline>.</p>
        <p><strong>Step 2:</strong> Since <MathInline>{`e^{-x}`}</MathInline> and <MathInline>{`xe^{-x}`}</MathInline> are in <MathInline>{`y_h`}</MathInline>, try <MathInline>{`y_p = Ax^2 e^{-x}`}</MathInline>.</p>
        <MathBlock>{`y_p = Ax^2 e^{-x}`}</MathBlock>
        <MathBlock>{`y_p' = A(2x - x^2)e^{-x}`}</MathBlock>
        <MathBlock>{`y_p'' = A(2 - 4x + x^2)e^{-x}`}</MathBlock>
        <p>Substitute:</p>
        <MathBlock>{`A(2 - 4x + x^2)e^{-x} + 2A(2x - x^2)e^{-x} + Ax^2 e^{-x} = e^{-x}`}</MathBlock>
        <MathBlock>{`Ae^{-x}[2 - 4x + x^2 + 4x - 2x^2 + x^2] = e^{-x}`}</MathBlock>
        <MathBlock>{`2Ae^{-x} = e^{-x}`}</MathBlock>
        <p>So <MathInline>{`A = \\frac{1}{2}`}</MathInline>.</p>
        <p><strong>General solution:</strong></p>
        <MathBlock>{`y = c_1 e^{-x} + c_2 xe^{-x} + \\frac{1}{2}x^2 e^{-x}`}</MathBlock>
        <p><strong>Apply initial conditions:</strong></p>
        <MathBlock>{`y(0) = c_1 = 0`}</MathBlock>
        <MathBlock>{`y' = -c_1 e^{-x} + c_2(e^{-x} - xe^{-x}) + \\frac{1}{2}(2x - x^2)e^{-x}`}</MathBlock>
        <MathBlock>{`y'(0) = -c_1 + c_2 = 1`}</MathBlock>
        <p>With <MathInline>{`c_1 = 0`}</MathInline>, we get <MathInline>{`c_2 = 1`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`y = xe^{-x} + \\frac{1}{2}x^2 e^{-x} = xe^{-x}\\left(1 + \\frac{x}{2}\\right)`}</MathBlock>
      </Callout>

      <h2>Summary Table</h2>

      <Callout type="info" title="Complete Method">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Find <MathInline>{`y_h`}</MathInline> by solving the characteristic equation</li>
          <li>Guess <MathInline>{`y_p`}</MathInline> based on <MathInline>{`f(x)`}</MathInline></li>
          <li>If guess overlaps with <MathInline>{`y_h`}</MathInline>, multiply by <MathInline>{`x`}</MathInline> (or <MathInline>{`x^2`}</MathInline>)</li>
          <li>Substitute guess into equation and solve for coefficients</li>
          <li>General solution: <MathInline>{`y = y_h + y_p`}</MathInline></li>
          <li>Use initial conditions to find <MathInline>{`c_1, c_2`}</MathInline></li>
        </ol>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Nonhomogeneous:</strong> <MathInline>{`y'' + ay' + by = f(x)`}</MathInline> with <MathInline>{`f \\neq 0`}</MathInline>
        </li>
        <li>
          <strong>General solution:</strong> <MathInline>{`y = y_h + y_p`}</MathInline> (homogeneous + particular)
        </li>
        <li>
          <strong>Undetermined coefficients:</strong> Guess form of <MathInline>{`y_p`}</MathInline> based on <MathInline>{`f(x)`}</MathInline>
        </li>
        <li>
          <strong>Modification rule:</strong> If guess is in <MathInline>{`y_h`}</MathInline>, multiply by <MathInline>{`x`}</MathInline>
        </li>
        <li>
          <strong>Superposition:</strong> For <MathInline>{`f = f_1 + f_2`}</MathInline>, find <MathInline>{`y_p = y_{p_1} + y_{p_2}`}</MathInline>
        </li>
        <li>
          <strong>Works for:</strong> Polynomials, exponentials, sines, cosines, and their products
        </li>
      </ul>
    </LessonLayout>
  );
}
