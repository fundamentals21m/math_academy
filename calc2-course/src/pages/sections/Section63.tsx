import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <h2>Introduction to Systems of Differential Equations</h2>

      <p>
        Although differential equations began in the 17th century, it was not
        until the 19th century that mathematicians realized that relatively few
        could be solved by elementary means. This led to the development of
        existence-uniqueness theorems and the study of{' '}
        <strong>systems of differential equations</strong>.
      </p>

      <h3>Reducing Higher-Order to First-Order Systems</h3>

      <p>
        A second-order equation can be transformed to a system of two
        first-order equations. For example:
      </p>
      <MathBlock>{`y'' + 2ty' - y = e^t`}</MathBlock>

      <p>
        Introduce <InlineMath>{`y_1 = y`}</InlineMath> and{' '}
        <InlineMath>{`y_2 = y_1' = y'`}</InlineMath>. Then{' '}
        <InlineMath>{`y_2' = y'' = y_1 - 2ty_2 + e^t`}</InlineMath>, giving:
      </p>
      <MathBlock>
        {`\\begin{cases} y_1' = y_2 \\\\ y_2' = y_1 - 2ty_2 + e^t \\end{cases}`}
      </MathBlock>

      <h3>General First-Order Linear Systems</h3>

      <Callout type="info">
        <strong>Definition:</strong> A <strong>first-order linear system</strong>{' '}
        of <InlineMath>n</InlineMath> equations in <InlineMath>n</InlineMath>{' '}
        unknowns has the form:
        <MathBlock>
          {`y_i' = \\sum_{j=1}^n p_{ij}(t) y_j + q_i(t), \\quad i = 1, \\ldots, n`}
        </MathBlock>
      </Callout>

      <h3>Matrix-Vector Notation</h3>

      <p>
        The system simplifies with matrix notation. Define:
      </p>
      <MathBlock>
        {`Y(t) = \\begin{bmatrix} y_1(t) \\\\ \\vdots \\\\ y_n(t) \\end{bmatrix}, \\quad
        P(t) = [p_{ij}(t)], \\quad
        Q(t) = \\begin{bmatrix} q_1(t) \\\\ \\vdots \\\\ q_n(t) \\end{bmatrix}`}
      </MathBlock>

      <p>
        The system becomes:
      </p>
      <MathBlock>{`Y' = P(t)Y + Q(t)`}</MathBlock>

      <h3>Converting an nth-Order Equation</h3>

      <p>
        Any linear equation of order <InlineMath>n</InlineMath>:
      </p>
      <MathBlock>
        {`y^{(n)} + a_1 y^{(n-1)} + \\cdots + a_n y = R(t)`}
      </MathBlock>

      <p>
        can be written as a system by setting{' '}
        <InlineMath>{`y_1 = y, y_2 = y', \\ldots, y_n = y^{(n-1)}`}</InlineMath>:
      </p>
      <MathBlock>
        {`\\begin{cases} y_1' = y_2 \\\\ y_2' = y_3 \\\\ \\vdots \\\\ y_{n-1}' = y_n \\\\ y_n' = -a_n y_1 - a_{n-1} y_2 - \\cdots - a_1 y_n + R(t) \\end{cases}`}
      </MathBlock>

      <h3>The Companion Matrix</h3>

      <p>
        The coefficient matrix for this system is the{' '}
        <strong>companion matrix</strong>:
      </p>
      <MathBlock>
        {`P = \\begin{bmatrix} 0 & 1 & 0 & \\cdots & 0 \\\\ 0 & 0 & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & 1 \\\\ -a_n & -a_{n-1} & -a_{n-2} & \\cdots & -a_1 \\end{bmatrix}`}
      </MathBlock>

      <h3>Initial-Value Problems</h3>

      <p>
        An <strong>initial-value problem</strong> for a system seeks a solution{' '}
        <InlineMath>Y</InlineMath> satisfying <InlineMath>{`Y' = P(t)Y + Q(t)`}</InlineMath>{' '}
        with initial condition <InlineMath>{`Y(a) = B`}</InlineMath>, where{' '}
        <InlineMath>{`B = (b_1, \\ldots, b_n)`}</InlineMath> is a given vector.
      </p>

      <h3>The Scalar Case Revisited</h3>

      <p>
        When <InlineMath>{`n = 1`}</InlineMath>, the system reduces to the scalar
        equation <InlineMath>{`y' = P(t)y + Q(t)`}</InlineMath> with solution:
      </p>
      <MathBlock>
        {`Y(x) = e^{A(x)} Y(a) + e^{A(x)} \\int_a^x e^{-A(t)} Q(t)\\, dt`}
      </MathBlock>
      <p>
        where <InlineMath>{`A(x) = \\int_a^x P(t)\\, dt`}</InlineMath>.
      </p>

      <p>
        The goal of this chapter is to generalize this formula to systems.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Reducing an nth-order equation to a
        first-order system is the key unifying idea. It allows all existence
        and uniqueness theory to be developed for first-order systems, then
        applied to equations of any order. The matrix formulation also reveals
        deep connections between differential equations and linear algebra.
      </Callout>
    </LessonLayout>
  );
}
