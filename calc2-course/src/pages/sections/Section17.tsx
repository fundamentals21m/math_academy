import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2>Systems of Linear Equations</h2>

      <p>
        One of the most important applications of matrices is solving systems of linear
        equations. Matrix notation provides a compact way to write and analyze such systems.
      </p>

      <h3>Matrix Form of Linear Systems</h3>

      <p>
        A system of <InlineMath>m</InlineMath> linear equations in{' '}
        <InlineMath>n</InlineMath> unknowns:
      </p>
      <MathBlock>{`\\begin{aligned} a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n &= b_1 \\\\ a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n &= b_2 \\\\ &\\vdots \\\\ a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n &= b_m \\end{aligned}`}</MathBlock>
      <p>can be written as the matrix equation:</p>
      <MathBlock>AX = B</MathBlock>
      <p>
        where <InlineMath>{'A = (a_{ik})'}</InlineMath> is the{' '}
        <InlineMath>m \times n</InlineMath> <strong>coefficient matrix</strong>,{' '}
        <InlineMath>X = (x_1, \ldots, x_n)^T</InlineMath> is the column of unknowns, and{' '}
        <InlineMath>B = (b_1, \ldots, b_m)^T</InlineMath> is the column of constants.
      </p>

      <h3>Connection to Linear Transformations</h3>

      <p>
        Finding solutions to <InlineMath>AX = B</InlineMath> is equivalent to finding
        elements <InlineMath>x \in V</InlineMath> that map to{' '}
        <InlineMath>b \in W</InlineMath> under the transformation represented by{' '}
        <InlineMath>A</InlineMath>.
      </p>

      <h3>Homogeneous Systems</h3>

      <Callout type="info">
        <strong>Definition:</strong> A system <InlineMath>AX = 0</InlineMath> is called{' '}
        <strong>homogeneous</strong>. The set of all solutions forms the null space of the
        transformation represented by <InlineMath>A</InlineMath>.
      </Callout>

      <p>Properties of homogeneous systems:</p>
      <ul>
        <li>Always has the trivial solution <InlineMath>X = 0</InlineMath></li>
        <li>The solution set is a subspace of <InlineMath>{'\\mathbb{R}^n'}</InlineMath></li>
        <li>
          Has nontrivial solutions if and only if the columns of{' '}
          <InlineMath>A</InlineMath> are linearly dependent
        </li>
        <li>
          If <InlineMath>m {'<'} n</InlineMath>, always has nontrivial solutions
        </li>
      </ul>

      <h3>Non-homogeneous Systems</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The system <InlineMath>AX = B</InlineMath> has a solution
        if and only if <InlineMath>B</InlineMath> is in the column space (range) of{' '}
        <InlineMath>A</InlineMath>.
      </Callout>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>X_p</InlineMath> is a particular solution of{' '}
        <InlineMath>AX = B</InlineMath>, then the general solution is:
        <MathBlock>X = X_p + X_h</MathBlock>
        where <InlineMath>X_h</InlineMath> is any solution of the homogeneous system{' '}
        <InlineMath>AX = 0</InlineMath>.
      </Callout>

      <h3>Existence and Uniqueness</h3>

      <p>For an <InlineMath>n \times n</InlineMath> square matrix <InlineMath>A</InlineMath>:</p>

      <Callout type="info">
        <strong>Theorem:</strong> The following are equivalent:
        <br /><br />
        (a) <InlineMath>AX = B</InlineMath> has a unique solution for every{' '}
        <InlineMath>B</InlineMath>
        <br />
        (b) <InlineMath>AX = 0</InlineMath> has only the trivial solution
        <br />
        (c) The columns of <InlineMath>A</InlineMath> are linearly independent
        <br />
        (d) <InlineMath>{'\\text{rank}(A) = n'}</InlineMath>
        <br />
        (e) <InlineMath>A</InlineMath> is invertible
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> Systems of linear equations are ubiquitous in
        mathematics, science, and engineering. The matrix formulation{' '}
        <InlineMath>AX = B</InlineMath> allows us to apply the theory of linear
        transformations to understand when solutions exist, when they are unique, and how to
        characterize the solution set. The nullity plus rank theorem tells us exactly how
        many "free parameters" appear in the general solution.
      </Callout>
    </LessonLayout>
  );
}
