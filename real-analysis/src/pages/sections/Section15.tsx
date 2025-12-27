import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section15Quiz } from '@/data/quizzes';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>Sequences of Functions</h2>

      <p>
        When can we interchange limits with other operations like integration or differentiation?
        The key is uniform convergence, which ensures the limit process behaves well.
      </p>

      <h3>Pointwise vs Uniform Convergence</h3>

      <Definition title="Pointwise Convergence">
        <p>
          A sequence <Math>{"(f_n)"}</Math> converges pointwise to <Math>{"f"}</Math> on <Math>{"S"}</Math> if:
        </p>
        <MathBlock>
          {`\\forall x \\in S, \\forall \\varepsilon > 0, \\exists N: n > N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon`}
        </MathBlock>
        <p>Here <Math>{"N"}</Math> may depend on both <Math>{"\\varepsilon"}</Math> and <Math>{"x"}</Math>.</p>
      </Definition>

      <Definition title="Uniform Convergence">
        <p>
          A sequence <Math>{"(f_n)"}</Math> converges uniformly to <Math>{"f"}</Math> on <Math>{"S"}</Math> if:
        </p>
        <MathBlock>
          {`\\forall \\varepsilon > 0, \\exists N: n > N \\Rightarrow \\sup_{x \\in S} |f_n(x) - f(x)| < \\varepsilon`}
        </MathBlock>
        <p>Equivalently, <Math>{"\\|f_n - f\\|_\\infty \\to 0"}</Math>.</p>
      </Definition>

      <Example title="Non-Uniform Convergence">
        <p>
          Let <Math>{"f_n(x) = x^n"}</Math> on <Math>{"[0, 1]"}</Math>. Pointwise limit is <Math>{"f(x) = 0"}</Math>
          for <Math>{"x < 1"}</Math> and <Math>{"f(1) = 1"}</Math>. But convergence is not uniform:
          continuous <Math>{"f_n"}</Math> converge to discontinuous <Math>{"f"}</Math>.
        </p>
      </Example>

      <h3>Preservation Theorems</h3>

      <Theorem
        title="Uniform Limit of Continuous Functions"
        proof={
          <>
            <p className="mb-3">Fix <Math>{`c`}</Math> and <Math>{`\\varepsilon > 0`}</Math>. By uniform convergence, <Math>{`\\exists N: |f_n(x) - f(x)| < \\varepsilon/3`}</Math> for all <Math>{`x`}</Math>.</p>
            <p className="mb-3">Since <Math>{`f_N`}</Math> is continuous at <Math>{`c`}</Math>, <Math>{`\\exists \\delta: |x - c| < \\delta \\Rightarrow |f_N(x) - f_N(c)| < \\varepsilon/3`}</Math>.</p>
            <p className="mb-3">For <Math>{`|x - c| < \\delta`}</Math>:</p>
            <MathBlock>{`|f(x) - f(c)| \\leq |f(x) - f_N(x)| + |f_N(x) - f_N(c)| + |f_N(c) - f(c)| < \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} = \\varepsilon`}</MathBlock>
            <p className="mb-3">So <Math>{`f`}</Math> is continuous at <Math>{`c`}</Math>. Since <Math>{`c`}</Math> was arbitrary, <Math>{`f`}</Math> is continuous on <Math>{`S`}</Math>.</p>
          </>
        }
      >
        <p>
          If <Math>{"(f_n)"}</Math> are continuous and <Math>{"f_n \\to f"}</Math> uniformly, then <Math>{"f"}</Math>
          is continuous.
        </p>
      </Theorem>

      <Theorem
        title="Integration of Uniform Limit"
        proof={
          <>
            <p className="mb-3">By uniform convergence, given <Math>{`\\varepsilon > 0`}</Math>, <Math>{`\\exists N: |f_n(x) - f(x)| < \\varepsilon/(b-a)`}</Math> for all <Math>{`x`}</Math> and <Math>{`n > N`}</Math>.</p>
            <p className="mb-3">Then:</p>
            <MathBlock>{`\\left|\\int_a^b f_n - \\int_a^b f\\right| = \\left|\\int_a^b (f_n - f)\\right| \\leq \\int_a^b |f_n - f| \\leq \\frac{\\varepsilon}{b-a} \\cdot (b-a) = \\varepsilon`}</MathBlock>
            <p className="mb-3">for <Math>{`n > N`}</Math>. Therefore <Math>{`\\lim \\int_a^b f_n = \\int_a^b f`}</Math>.</p>
            <p className="mb-3">This justifies exchanging limit and integral under uniform convergence.</p>
          </>
        }
      >
        <p>
          If <Math>{"f_n \\to f"}</Math> uniformly on <Math>{"[a, b]"}</Math>, then:
        </p>
        <MathBlock>
          {`\\int_a^b f = \\lim_{n \\to \\infty} \\int_a^b f_n`}
        </MathBlock>
      </Theorem>

      <Theorem
        title="Differentiation of Limit"
        proof={
          <>
            <p className="mb-3">By FTC2: <Math>{`f_n(x) - f_n(c) = \\int_c^x f_n'(t)\\,dt`}</Math> for each <Math>{`n`}</Math>.</p>
            <p className="mb-3">Since <Math>{`f_n' \\to g`}</Math> uniformly, by integration of uniform limits:</p>
            <MathBlock>{`\\lim[f_n(x) - f_n(c)] = \\lim \\int_c^x f_n' = \\int_c^x g`}</MathBlock>
            <p className="mb-3">The left side equals <Math>{`f(x) - f(c)`}</Math> (pointwise convergence of <Math>{`f_n`}</Math>).</p>
            <p className="mb-3">So <Math>{`f(x) - f(c) = \\int_c^x g`}</Math>. By FTC1, <Math>{`f'(x) = g(x)`}</Math>.</p>
          </>
        }
      >
        <p>
          If <Math>{"f_n \\to f"}</Math> pointwise, <Math>{"f_n' \\to g"}</Math> uniformly, and each <Math>{"f_n"}</Math>
          is differentiable, then <Math>{"f' = g"}</Math>.
        </p>
      </Theorem>

      <Callout type="important">
        <strong>Key Insight:</strong> For differentiation, we need uniform convergence of the
        derivatives, not the original functions.
      </Callout>

      <h3>Weierstrass M-Test</h3>

      <Theorem
        title="Weierstrass M-Test"
        proof={
          <>
            <p className="mb-3"><strong>Absolute convergence:</strong> For each <Math>{`x`}</Math>, <Math>{`|f_n(x)| \\leq M_n`}</Math>, so <Math>{`\\sum|f_n(x)| \\leq \\sum M_n < \\infty`}</Math>.</p>
            <p className="mb-3"><strong>Uniform convergence:</strong> Let <Math>{`S_n(x) = \\sum_{k=1}^n f_k(x)`}</Math> and <Math>{`S(x) = \\sum f_k(x)`}</Math>.</p>
            <MathBlock>{`|S(x) - S_n(x)| = \\left|\\sum_{k=n+1}^\\infty f_k(x)\\right| \\leq \\sum_{k=n+1}^\\infty |f_k(x)| \\leq \\sum_{k=n+1}^\\infty M_k`}</MathBlock>
            <p className="mb-3">The tail <Math>{`\\sum_{k=n+1}^\\infty M_k \\to 0`}</Math> as <Math>{`n \\to \\infty`}</Math> (since <Math>{`\\sum M_n`}</Math> converges), independent of <Math>{`x`}</Math>.</p>
            <p className="mb-3">So <Math>{`\\sup_x |S(x) - S_n(x)| \\to 0`}</Math>, i.e., <Math>{`S_n \\to S`}</Math> uniformly.</p>
          </>
        }
      >
        <p>
          If <Math>{"|f_n(x)| \\leq M_n"}</Math> for all <Math>{"x \\in S"}</Math> and <Math>{"\\sum M_n < \\infty"}</Math>,
          then <Math>{"\\sum f_n"}</Math> converges uniformly and absolutely on <Math>{"S"}</Math>.
        </p>
      </Theorem>

      <Example title="Uniform Convergence of Power Series">
        <p>
          The series <Math>{"\\sum \\frac{x^n}{n!}"}</Math> converges uniformly on <Math>{"[-R, R]"}</Math>
          for any <Math>{"R > 0"}</Math>, since <Math>{"|x^n/n!| \\leq R^n/n!"}</Math> and <Math>{"\\sum R^n/n! = e^R"}</Math>.
        </p>
      </Example>

      <SectionQuiz
        sectionId={15}
        questions={section15Quiz}
        title="Sequences of Functions Quiz"
      />
    </LessonLayout>
  );
}
