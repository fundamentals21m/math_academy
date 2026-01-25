import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <h2>Nonhomogeneous Equations</h2>

      <p>
        We now turn to the general linear differential equation of order{' '}
        <InlineMath>n</InlineMath> with a nonzero right-hand side. The key
        insight is that the structure of solutions depends on understanding
        both the homogeneous equation and finding one particular solution.
      </p>

      <h3>The Fundamental Theorem</h3>

      <Callout type="info">
        <strong>Theorem 6.10:</strong> Let{' '}
        <InlineMath>{`L: \\mathscr{C}^n(J) \\to \\mathscr{C}(J)`}</InlineMath>{' '}
        be a linear differential operator of order <InlineMath>n</InlineMath>.
        Let <InlineMath>{`u_1, \\ldots, u_n`}</InlineMath> be <InlineMath>n</InlineMath>{' '}
        independent solutions of the homogeneous equation{' '}
        <InlineMath>{`L(y) = 0`}</InlineMath>, and let <InlineMath>{`y_1`}</InlineMath>{' '}
        be a particular solution of the nonhomogeneous equation{' '}
        <InlineMath>{`L(y) = R`}</InlineMath>. Then every solution{' '}
        <InlineMath>{`y = f(x)`}</InlineMath> of the nonhomogeneous equation has the
        form:
        <MathBlock>
          {`f(x) = y_1(x) + \\sum_{k=1}^n c_k u_k(x)`}
        </MathBlock>
        where <InlineMath>{`c_1, \\ldots, c_n`}</InlineMath> are constants.
      </Callout>

      <h3>Proof</h3>

      <p>
        By linearity, we have:
      </p>
      <MathBlock>
        {`L(f - y_1) = L(f) - L(y_1) = R - R = 0`}
      </MathBlock>

      <p>
        Therefore <InlineMath>{`f - y_1`}</InlineMath> is in the solution space of
        the homogeneous equation <InlineMath>{`L(y) = 0`}</InlineMath>, so{' '}
        <InlineMath>{`f - y_1`}</InlineMath> is a linear combination of{' '}
        <InlineMath>{`u_1, \\ldots, u_n`}</InlineMath>:
      </p>
      <MathBlock>
        {`f - y_1 = c_1 u_1 + \\cdots + c_n u_n`}
      </MathBlock>

      <h3>The General Solution</h3>

      <p>
        Since all solutions of <InlineMath>{`L(y) = R`}</InlineMath> are found in
        the formula above, the sum on the right (with arbitrary constants{' '}
        <InlineMath>{`c_1, c_2, \\ldots, c_n`}</InlineMath>) is called the{' '}
        <strong>general solution</strong> of the nonhomogeneous equation.
      </p>

      <MathBlock>
        {`y = y_1(x) + c_1 u_1(x) + c_2 u_2(x) + \\cdots + c_n u_n(x)`}
      </MathBlock>

      <h3>Geometric Interpretation</h3>

      <p>
        Theorem 6.10 has a simple geometric analogy. To determine all points
        on a plane, we find a particular point on the plane and add to it all
        points on the parallel plane through the origin.
      </p>

      <p>
        Similarly, to find all solutions of <InlineMath>{`L(y) = R`}</InlineMath>,
        we find a particular solution and add to it all solutions of the
        homogeneous equation <InlineMath>{`L(y) = 0`}</InlineMath>.
      </p>

      <ul>
        <li>
          The set of solutions of the nonhomogeneous equation is analogous to a
          plane through a particular point
        </li>
        <li>
          The solution space of the homogeneous equation is analogous to a
          parallel plane through the origin
        </li>
      </ul>

      <h3>The Two Problems</h3>

      <p>
        To use Theorem 6.10 in practice, we must solve two problems:
      </p>

      <ol>
        <li>
          Find the general solution of the homogeneous equation{' '}
          <InlineMath>{`L(y) = 0`}</InlineMath>
        </li>
        <li>
          Find a particular solution of the nonhomogeneous equation{' '}
          <InlineMath>{`L(y) = R`}</InlineMath>
        </li>
      </ol>

      <p>
        Remarkably, if we can solve problem (1), we can always solve problem
        (2) using the method of variation of parameters.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The general solution of a nonhomogeneous
        equation is a particular solution plus the general solution of the
        corresponding homogeneous equation. This is the superposition
        principle: the "free" solutions (homogeneous) can be added to any
        "forced" solution (particular) to get all solutions. This structure
        appears throughout linear mathematics and physics.
      </Callout>
    </LessonLayout>
  );
}
