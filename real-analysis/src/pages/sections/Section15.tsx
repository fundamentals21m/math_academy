import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
          A sequence <InlineMath>{"(f_n)"}</InlineMath> converges pointwise to <InlineMath>{"f"}</InlineMath> on <InlineMath>{"S"}</InlineMath> if:
        </p>
        <MathBlock>
          {`\\forall x \\in S, \\forall \\varepsilon > 0, \\exists N: n > N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon`}
        </MathBlock>
        <p>Here <InlineMath>{"N"}</InlineMath> may depend on both <InlineMath>{"\\varepsilon"}</InlineMath> and <InlineMath>{"x"}</InlineMath>.</p>
      </Definition>

      <Definition title="Uniform Convergence">
        <p>
          A sequence <InlineMath>{"(f_n)"}</InlineMath> converges uniformly to <InlineMath>{"f"}</InlineMath> on <InlineMath>{"S"}</InlineMath> if:
        </p>
        <MathBlock>
          {`\\forall \\varepsilon > 0, \\exists N: n > N \\Rightarrow \\sup_{x \\in S} |f_n(x) - f(x)| < \\varepsilon`}
        </MathBlock>
        <p>Equivalently, <InlineMath>{"\\|f_n - f\\|_\\infty \\to 0"}</InlineMath>.</p>
      </Definition>

      <Example title="Non-Uniform Convergence">
        <p>
          Let <InlineMath>{"f_n(x) = x^n"}</InlineMath> on <InlineMath>{"[0, 1]"}</InlineMath>. Pointwise limit is <InlineMath>{"f(x) = 0"}</InlineMath>
          for <InlineMath>{"x < 1"}</InlineMath> and <InlineMath>{"f(1) = 1"}</InlineMath>. But convergence is not uniform:
          continuous <InlineMath>{"f_n"}</InlineMath> converge to discontinuous <InlineMath>{"f"}</InlineMath>.
        </p>
      </Example>

      <h3>Preservation Theorems</h3>

      <Theorem
        title="Uniform Limit of Continuous Functions"
        proof={
          <>
            <p className="mb-3">Fix <InlineMath>{`c`}</InlineMath> and <InlineMath>{`\\varepsilon > 0`}</InlineMath>. By uniform convergence, <InlineMath>{`\\exists N: |f_n(x) - f(x)| < \\varepsilon/3`}</InlineMath> for all <InlineMath>{`x`}</InlineMath>.</p>
            <p className="mb-3">Since <InlineMath>{`f_N`}</InlineMath> is continuous at <InlineMath>{`c`}</InlineMath>, <InlineMath>{`\\exists \\delta: |x - c| < \\delta \\Rightarrow |f_N(x) - f_N(c)| < \\varepsilon/3`}</InlineMath>.</p>
            <p className="mb-3">For <InlineMath>{`|x - c| < \\delta`}</InlineMath>:</p>
            <MathBlock>{`|f(x) - f(c)| \\leq |f(x) - f_N(x)| + |f_N(x) - f_N(c)| + |f_N(c) - f(c)| < \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} = \\varepsilon`}</MathBlock>
            <p className="mb-3">So <InlineMath>{`f`}</InlineMath> is continuous at <InlineMath>{`c`}</InlineMath>. Since <InlineMath>{`c`}</InlineMath> was arbitrary, <InlineMath>{`f`}</InlineMath> is continuous on <InlineMath>{`S`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"(f_n)"}</InlineMath> are continuous and <InlineMath>{"f_n \\to f"}</InlineMath> uniformly, then <InlineMath>{"f"}</InlineMath>
          is continuous.
        </p>
      </Theorem>

      <Theorem
        title="Integration of Uniform Limit"
        proof={
          <>
            <p className="mb-3">By uniform convergence, given <InlineMath>{`\\varepsilon > 0`}</InlineMath>, <InlineMath>{`\\exists N: |f_n(x) - f(x)| < \\varepsilon/(b-a)`}</InlineMath> for all <InlineMath>{`x`}</InlineMath> and <InlineMath>{`n > N`}</InlineMath>.</p>
            <p className="mb-3">Then:</p>
            <MathBlock>{`\\left|\\int_a^b f_n - \\int_a^b f\\right| = \\left|\\int_a^b (f_n - f)\\right| \\leq \\int_a^b |f_n - f| \\leq \\frac{\\varepsilon}{b-a} \\cdot (b-a) = \\varepsilon`}</MathBlock>
            <p className="mb-3">for <InlineMath>{`n > N`}</InlineMath>. Therefore <InlineMath>{`\\lim \\int_a^b f_n = \\int_a^b f`}</InlineMath>.</p>
            <p className="mb-3">This justifies exchanging limit and integral under uniform convergence.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"f_n \\to f"}</InlineMath> uniformly on <InlineMath>{"[a, b]"}</InlineMath>, then:
        </p>
        <MathBlock>
          {`\\int_a^b f = \\lim_{n \\to \\infty} \\int_a^b f_n`}
        </MathBlock>
      </Theorem>

      <Theorem
        title="Differentiation of Limit"
        proof={
          <>
            <p className="mb-3">By FTC2: <InlineMath>{`f_n(x) - f_n(c) = \\int_c^x f_n'(t)\\,dt`}</InlineMath> for each <InlineMath>{`n`}</InlineMath>.</p>
            <p className="mb-3">Since <InlineMath>{`f_n' \\to g`}</InlineMath> uniformly, by integration of uniform limits:</p>
            <MathBlock>{`\\lim[f_n(x) - f_n(c)] = \\lim \\int_c^x f_n' = \\int_c^x g`}</MathBlock>
            <p className="mb-3">The left side equals <InlineMath>{`f(x) - f(c)`}</InlineMath> (pointwise convergence of <InlineMath>{`f_n`}</InlineMath>).</p>
            <p className="mb-3">So <InlineMath>{`f(x) - f(c) = \\int_c^x g`}</InlineMath>. By FTC1, <InlineMath>{`f'(x) = g(x)`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"f_n \\to f"}</InlineMath> pointwise, <InlineMath>{"f_n' \\to g"}</InlineMath> uniformly, and each <InlineMath>{"f_n"}</InlineMath>
          is differentiable, then <InlineMath>{"f' = g"}</InlineMath>.
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
            <p className="mb-3"><strong>Absolute convergence:</strong> For each <InlineMath>{`x`}</InlineMath>, <InlineMath>{`|f_n(x)| \\leq M_n`}</InlineMath>, so <InlineMath>{`\\sum|f_n(x)| \\leq \\sum M_n < \\infty`}</InlineMath>.</p>
            <p className="mb-3"><strong>Uniform convergence:</strong> Let <InlineMath>{`S_n(x) = \\sum_{k=1}^n f_k(x)`}</InlineMath> and <InlineMath>{`S(x) = \\sum f_k(x)`}</InlineMath>.</p>
            <MathBlock>{`|S(x) - S_n(x)| = \\left|\\sum_{k=n+1}^\\infty f_k(x)\\right| \\leq \\sum_{k=n+1}^\\infty |f_k(x)| \\leq \\sum_{k=n+1}^\\infty M_k`}</MathBlock>
            <p className="mb-3">The tail <InlineMath>{`\\sum_{k=n+1}^\\infty M_k \\to 0`}</InlineMath> as <InlineMath>{`n \\to \\infty`}</InlineMath> (since <InlineMath>{`\\sum M_n`}</InlineMath> converges), independent of <InlineMath>{`x`}</InlineMath>.</p>
            <p className="mb-3">So <InlineMath>{`\\sup_x |S(x) - S_n(x)| \\to 0`}</InlineMath>, i.e., <InlineMath>{`S_n \\to S`}</InlineMath> uniformly.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"|f_n(x)| \\leq M_n"}</InlineMath> for all <InlineMath>{"x \\in S"}</InlineMath> and <InlineMath>{"\\sum M_n < \\infty"}</InlineMath>,
          then <InlineMath>{"\\sum f_n"}</InlineMath> converges uniformly and absolutely on <InlineMath>{"S"}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Uniform Convergence of Power Series">
        <p>
          The series <InlineMath>{"\\sum \\frac{x^n}{n!}"}</InlineMath> converges uniformly on <InlineMath>{"[-R, R]"}</InlineMath>
          for any <InlineMath>{"R > 0"}</InlineMath>, since <InlineMath>{"|x^n/n!| \\leq R^n/n!"}</InlineMath> and <InlineMath>{"\\sum R^n/n! = e^R"}</InlineMath>.
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
