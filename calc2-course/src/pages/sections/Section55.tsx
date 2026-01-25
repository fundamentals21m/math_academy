import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <h2>Variation of Parameters</h2>

      <p>
        The method of <strong>variation of parameters</strong> provides a
        systematic way to find a particular solution of the nonhomogeneous
        equation <InlineMath>{`L(y) = R`}</InlineMath>, given{' '}
        <InlineMath>n</InlineMath> independent solutions of the homogeneous
        equation <InlineMath>{`L(y) = 0`}</InlineMath>.
      </p>

      <h3>The Basic Idea</h3>

      <p>
        We seek a particular solution of the form:
      </p>
      <MathBlock>
        {`y_1 = v_1 u_1 + v_2 u_2 + \\cdots + v_n u_n`}
      </MathBlock>

      <p>
        where <InlineMath>{`u_1, \\ldots, u_n`}</InlineMath> are independent
        solutions of <InlineMath>{`L(y) = 0`}</InlineMath>, and{' '}
        <InlineMath>{`v_1, \\ldots, v_n`}</InlineMath> are functions to be
        determined. The method was first used by Johann Bernoulli for
        first-order equations and extended by Lagrange in 1774.
      </p>

      <h3>The Derivation</h3>

      <p>
        Using vector notation with{' '}
        <InlineMath>{`v = (v_1, \\ldots, v_n)`}</InlineMath> and{' '}
        <InlineMath>{`u = (u_1, \\ldots, u_n)`}</InlineMath>, we write:
      </p>
      <MathBlock>{`y_1 = (v, u)`}</MathBlock>

      <p>
        Computing the first derivative:
      </p>
      <MathBlock>{`y_1' = (v, u') + (v', u)`}</MathBlock>

      <p>
        We impose the condition <InlineMath>{`(v', u) = 0`}</InlineMath>, giving:
      </p>
      <MathBlock>{`y_1' = (v, u')`}</MathBlock>

      <p>
        Continuing this process, we impose conditions{' '}
        <InlineMath>{`(v', u^{(k)}) = 0`}</InlineMath> for{' '}
        <InlineMath>{`k = 0, 1, \\ldots, n-2`}</InlineMath>. For the{' '}
        <InlineMath>n</InlineMath>th condition, we require:
      </p>
      <MathBlock>{`(v', u^{(n-1)}) = R(x)`}</MathBlock>

      <h3>The Matrix Equation</h3>

      <p>
        These <InlineMath>n</InlineMath> conditions can be written as a single
        matrix equation:
      </p>
      <MathBlock>
        {`W(x) v'(x) = R(x) \\begin{bmatrix} 0 \\\\ \\vdots \\\\ 0 \\\\ 1 \\end{bmatrix}`}
      </MathBlock>

      <p>
        where <InlineMath>W</InlineMath> is the <strong>Wronskian matrix</strong>:
      </p>
      <MathBlock>
        {`W = \\begin{bmatrix} u_1 & u_2 & \\cdots & u_n \\\\ u_1' & u_2' & \\cdots & u_n' \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ u_1^{(n-1)} & u_2^{(n-1)} & \\cdots & u_n^{(n-1)} \\end{bmatrix}`}
      </MathBlock>

      <h3>The Main Theorem</h3>

      <Callout type="info">
        <strong>Theorem 6.11:</strong> Let{' '}
        <InlineMath>{`u_1, \\ldots, u_n`}</InlineMath> be <InlineMath>n</InlineMath>{' '}
        independent solutions of the homogeneous{' '}
        <InlineMath>n</InlineMath>th-order linear differential equation{' '}
        <InlineMath>{`L(y) = 0`}</InlineMath> on an interval{' '}
        <InlineMath>J</InlineMath>. Then a particular solution{' '}
        <InlineMath>{`y_1`}</InlineMath> of the nonhomogeneous equation{' '}
        <InlineMath>{`L(y) = R`}</InlineMath> is given by:
        <MathBlock>
          {`y_1(x) = \\sum_{k=1}^n u_k(x) v_k(x)`}
        </MathBlock>
        where <InlineMath>{`v_1, \\ldots, v_n`}</InlineMath> are determined by:
        <MathBlock>
          {`v(x) = \\int_c^x R(t) W(t)^{-1} \\begin{bmatrix} 0 \\\\ \\vdots \\\\ 0 \\\\ 1 \\end{bmatrix} dt`}
        </MathBlock>
        for any point <InlineMath>{`c \\in J`}</InlineMath>.
      </Callout>

      <h3>Example</h3>

      <p>
        Find the general solution of <InlineMath>{`y'' - y = \\frac{2}{1 + e^x}`}</InlineMath>{' '}
        on <InlineMath>{`(-\\infty, +\\infty)`}</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> The homogeneous equation{' '}
        <InlineMath>{`(D^2 - 1)y = 0`}</InlineMath> has independent solutions{' '}
        <InlineMath>{`u_1(x) = e^x`}</InlineMath> and{' '}
        <InlineMath>{`u_2(x) = e^{-x}`}</InlineMath>.
      </p>

      <p>
        The Wronskian matrix is:
      </p>
      <MathBlock>
        {`W(x) = \\begin{bmatrix} e^x & e^{-x} \\\\ e^x & -e^{-x} \\end{bmatrix}`}
      </MathBlock>

      <p>
        Since <InlineMath>{`\\det W(x) = -2`}</InlineMath>, the inverse is:
      </p>
      <MathBlock>
        {`W(x)^{-1} = -\\frac{1}{2} \\begin{bmatrix} -e^{-x} & -e^{-x} \\\\ -e^x & e^x \\end{bmatrix}`}
      </MathBlock>

      <p>
        Computing the integrals for <InlineMath>{`v_1`}</InlineMath> and{' '}
        <InlineMath>{`v_2`}</InlineMath> yields the general solution:
      </p>
      <MathBlock>
        {`y = c_1 e^x + c_2 e^{-x} - 1 - xe^x + (e^x - e^{-x}) \\log(1 + e^x)`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Variation of parameters always works when
        you know the homogeneous solutions—it reduces finding a particular
        solution to solving a system of linear equations and integrating. The
        method only requires that <InlineMath>R</InlineMath> be integrable, not
        necessarily continuous. This universal applicability makes it one of
        the most important techniques in differential equations.
      </Callout>
    </LessonLayout>
  );
}
