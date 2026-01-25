import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <h2>Existence and Uniqueness for Homogeneous Systems</h2>

      <p>
        The vector differential equation <InlineMath>Y'(t) = AY(t)</InlineMath>,
        where <InlineMath>A</InlineMath> is a constant matrix and{' '}
        <InlineMath>Y</InlineMath> is a vector function, is called a{' '}
        <strong>homogeneous linear system with constant coefficients</strong>.
        We now use the matrix exponential to give an explicit formula for its
        solution.
      </p>

      <h3>The Existence and Uniqueness Theorem</h3>

      <Callout type="info">
        <strong>Theorem 7.7:</strong> Let <InlineMath>A</InlineMath> be a given{' '}
        <InlineMath>n \times n</InlineMath> constant matrix and let{' '}
        <InlineMath>B</InlineMath> be a given <InlineMath>n</InlineMath>-dimensional
        vector. Then the initial-value problem:
        <MathBlock>
          Y'(t) = AY(t), \quad Y(0) = B
        </MathBlock>
        has a unique solution on <InlineMath>{`-\\infty < t < +\\infty`}</InlineMath>.
        This solution is given by:
        <MathBlock>
          {`Y(t) = e^{tA} B`}
        </MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> Differentiation of{' '}
        <InlineMath>{`Y(t) = e^{tA}B`}</InlineMath> gives:
      </p>
      <MathBlock>
        {`Y'(t) = Ae^{tA} B = AY(t)`}
      </MathBlock>

      <p>
        Since <InlineMath>Y(0) = e^0 B = IB = B</InlineMath>, this is a solution
        of the initial-value problem.
      </p>

      <p>
        To prove uniqueness, let <InlineMath>Z(t)</InlineMath> be another vector
        function satisfying <InlineMath>Z'(t) = AZ(t)</InlineMath> with{' '}
        <InlineMath>Z(0) = B</InlineMath>. Let{' '}
        <InlineMath>{`G(t) = e^{-tA}Z(t)`}</InlineMath>. Then:
      </p>
      <MathBlock>
        {`G'(t) = e^{-tA} Z'(t) - Ae^{-tA} Z(t) = e^{-tA} AZ(t) - Ae^{-tA} Z(t) = 0`}
      </MathBlock>

      <p>
        So <InlineMath>G(t) = G(0) = Z(0) = B</InlineMath>. In other words,{' '}
        <InlineMath>{`e^{-tA}Z(t) = B`}</InlineMath>, which gives{' '}
        <InlineMath>{`Z(t) = e^{tA}B = Y(t)`}</InlineMath>.
      </p>

      <h3>General Initial Condition</h3>

      <Callout type="info">
        <strong>Corollary:</strong> The unique solution of the initial-value problem:
        <MathBlock>
          Y'(t) = AY(t), \quad Y(a) = B
        </MathBlock>
        is:
        <MathBlock>
          {`Y(t) = e^{(t-a)A} B`}
        </MathBlock>
      </Callout>

      <h3>Example</h3>

      <p>
        Consider the system:
      </p>
      <MathBlock>
        y_1' = 5y_1 + 4y_2, \quad y_2' = y_1 + 2y_2
      </MathBlock>

      <p>
        with initial conditions <InlineMath>y_1(0) = 2</InlineMath>,{' '}
        <InlineMath>y_2(0) = 3</InlineMath>.
      </p>

      <p>
        In matrix form:
      </p>
      <MathBlock>
        {`Y'(t) = AY(t), \\quad Y(0) = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}, \\quad
        A = \\begin{bmatrix} 5 & 4 \\\\ 1 & 2 \\end{bmatrix}`}
      </MathBlock>

      <p>
        The matrix <InlineMath>A</InlineMath> has eigenvalues{' '}
        <InlineMath>\lambda_1 = 6</InlineMath> and{' '}
        <InlineMath>\lambda_2 = 1</InlineMath>. Using diagonalization, one can
        show:
      </p>
      <MathBlock>
        {`e^{tA} = \\frac{1}{5} \\begin{bmatrix} 4e^{6t} + e^t & 4e^{6t} - 4e^t \\\\ e^{6t} - e^t & e^{6t} + 4e^t \\end{bmatrix}`}
      </MathBlock>

      <p>
        Therefore:
      </p>
      <MathBlock>
        {`Y(t) = e^{tA} Y(0) = \\frac{1}{5} \\begin{bmatrix} 4e^{6t} + e^t & 4e^{6t} - 4e^t \\\\ e^{6t} - e^t & e^{6t} + 4e^t \\end{bmatrix} \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}`}
      </MathBlock>

      <p>
        giving:
      </p>
      <MathBlock>
        {`y_1(t) = 4e^{6t} - 2e^t, \\quad y_2(t) = e^{6t} + 2e^t`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> This theorem is the matrix generalization
        of the scalar result that <InlineMath>y' = ay</InlineMath> with{' '}
        <InlineMath>y(0) = b</InlineMath> has solution{' '}
        <InlineMath>{`y(t) = e^{at}b`}</InlineMath>. The matrix exponential{' '}
        <InlineMath>{`e^{tA}`}</InlineMath> plays exactly the same role for
        systems that <InlineMath>{`e^{at}`}</InlineMath> plays for scalar
        equations. The challenge now shifts to computing{' '}
        <InlineMath>{`e^{tA}`}</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
