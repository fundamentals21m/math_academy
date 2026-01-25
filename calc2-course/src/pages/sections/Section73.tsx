import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section73() {
  return (
    <LessonLayout sectionId={73}>
      <h2>Nonhomogeneous Linear Systems with Constant Coefficients</h2>

      <p>
        We now extend our techniques to solve the nonhomogeneous initial-value
        problem:
      </p>
      <MathBlock>
        Y'(t) = AY(t) + Q(t), \quad Y(a) = B
      </MathBlock>

      <p>
        where <InlineMath>A</InlineMath> is a constant{' '}
        <InlineMath>n \times n</InlineMath> matrix,{' '}
        <InlineMath>Q(t)</InlineMath> is a continuous vector function, and{' '}
        <InlineMath>B</InlineMath> is the initial vector.
      </p>

      <h3>Derivation of the Solution Formula</h3>

      <p>
        Multiply both sides by <InlineMath>{`e^{-tA}`}</InlineMath>:
      </p>
      <MathBlock>
        {`e^{-tA}\\{Y'(t) - AY(t)\\} = e^{-tA}Q(t)`}
      </MathBlock>

      <p>
        The left side is the derivative of{' '}
        <InlineMath>{`e^{-tA}Y(t)`}</InlineMath>. Integrating from{' '}
        <InlineMath>a</InlineMath> to <InlineMath>x</InlineMath>:
      </p>
      <MathBlock>
        {`e^{-xA}Y(x) - e^{-aA}Y(a) = \\int_a^x e^{-tA}Q(t)\\, dt`}
      </MathBlock>

      <p>
        Multiplying by <InlineMath>{`e^{xA}`}</InlineMath>:
      </p>

      <Callout type="info">
        <strong>Theorem 7.13:</strong> Let <InlineMath>A</InlineMath> be an{' '}
        <InlineMath>n \times n</InlineMath> constant matrix and{' '}
        <InlineMath>Q</InlineMath> a continuous vector function. The solution of:
        <MathBlock>
          Y'(t) = AY(t) + Q(t), \quad Y(a) = B
        </MathBlock>
        is given by:
        <MathBlock>
          {`Y(x) = e^{(x-a)A}B + e^{xA} \\int_a^x e^{-tA}Q(t)\\, dt`}
        </MathBlock>
      </Callout>

      <h3>Structure of the Solution</h3>

      <p>
        The solution has two parts:
      </p>
      <ul>
        <li>
          <strong>Homogeneous part:</strong>{' '}
          <InlineMath>{`e^{(x-a)A}B`}</InlineMath> — the solution of{' '}
          <InlineMath>Y' = AY</InlineMath> with <InlineMath>Y(a) = B</InlineMath>
        </li>
        <li>
          <strong>Particular part:</strong>{' '}
          <InlineMath>{`e^{xA}\\int_a^x e^{-tA}Q(t)\\, dt`}</InlineMath> —
          the solution of the nonhomogeneous equation with zero initial condition
        </li>
      </ul>

      <h3>Example</h3>

      <p>
        Solve <InlineMath>Y' = AY + Q(t)</InlineMath> with{' '}
        <InlineMath>Y(0) = 0</InlineMath> where:
      </p>
      <MathBlock>
        {`A = \\begin{bmatrix} 2 & -1 & 1 \\\\ 0 & 3 & -1 \\\\ 2 & 1 & 3 \\end{bmatrix}, \\quad
        Q(t) = \\begin{bmatrix} e^{2t} \\\\ 0 \\\\ te^{2t} \\end{bmatrix}`}
      </MathBlock>

      <p>
        The eigenvalues of <InlineMath>A</InlineMath> are 2, 2, and 4. Using
        Case 3 from the previous section:
      </p>
      <MathBlock>
        {`e^{xA} = e^{2x}\\{I + x(A - 2I)\\} + \\frac{e^{4x} - e^{2x}}{(\\mu - \\lambda)^2}(A - 2I)^2 - \\frac{xe^{2x}}{\\mu - \\lambda}(A - 2I)^2`}
      </MathBlock>

      <p>
        The solution is computed by evaluating the integral in Theorem 7.13.
      </p>

      <h3>Special Cases with Simple Q(t)</h3>

      <p>
        <strong>Constant forcing:</strong> If{' '}
        <InlineMath>Q(t) = C</InlineMath> (constant) and{' '}
        <InlineMath>A</InlineMath> is nonsingular:
      </p>
      <MathBlock>
        {`Y(x) = e^{(x-a)A}B + (e^{(x-a)A} - I)A^{-1}C`}
      </MathBlock>

      <p>
        <strong>Exponential forcing:</strong> If{' '}
        <InlineMath>{`Q(t) = e^{\\alpha t}C`}</InlineMath> and{' '}
        <InlineMath>\alpha</InlineMath> is not an eigenvalue of{' '}
        <InlineMath>A</InlineMath>:
      </p>
      <MathBlock>
        {`Y(t) = e^{tA}(Y(0) - D) + e^{\\alpha t}D, \\quad D = (\\alpha I - A)^{-1}C`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The variation of parameters formula for
        systems generalizes the scalar formula{' '}
        <InlineMath>{`y = e^{at}y_0 + e^{at}\\int e^{-at}Q\\, dt`}</InlineMath>.
        The matrix exponential <InlineMath>{`e^{tA}`}</InlineMath> serves as
        the "integrating factor" for systems, just as{' '}
        <InlineMath>{`e^{-at}`}</InlineMath> does for scalar equations.
      </Callout>
    </LessonLayout>
  );
}
