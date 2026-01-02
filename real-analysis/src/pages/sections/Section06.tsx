import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section06Quiz } from '@/data/quizzes';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Infinite Series</h2>

      <p>
        An infinite series is the limit of the sequence of partial sums of a sequence.
        Understanding series convergence is crucial for approximations, power series,
        and much of applied mathematics.
      </p>

      <Definition title="Infinite Series">
        <p>
          Given a sequence <InlineMath>{"(a_n)"}</InlineMath>, the infinite series <InlineMath>{"\\sum_{n=1}^\\infty a_n"}</InlineMath> is
          defined as the limit of the partial sums <InlineMath>{"s_N = \\sum_{n=1}^N a_n"}</InlineMath>, if it exists.
        </p>
        <MathBlock>
          {`\\sum_{n=1}^\\infty a_n = \\lim_{N \\to \\infty} \\sum_{n=1}^N a_n`}
        </MathBlock>
      </Definition>

      <Theorem
        title="Divergence Test"
        proof={
          <>
            <p className="mb-3">Suppose <InlineMath>{`\\sum a_n = S`}</InlineMath> converges. Let <InlineMath>{`s_n = a_1 + a_2 + \\cdots + a_n`}</InlineMath> be the partial sums.</p>
            <p className="mb-3">Then <InlineMath>{`s_n \\to S`}</InlineMath> and <InlineMath>{`s_{n-1} \\to S`}</InlineMath> as <InlineMath>{`n \\to \\infty`}</InlineMath>.</p>
            <p className="mb-3">Since <InlineMath>{`a_n = s_n - s_{n-1}`}</InlineMath>, we have <InlineMath>{`a_n \\to S - S = 0`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"\\sum a_n"}</InlineMath> converges, then <InlineMath>{"\\lim_{n \\to \\infty} a_n = 0"}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          Contrapositive: If <InlineMath>{"a_n \\not\\to 0"}</InlineMath>, then <InlineMath>{"\\sum a_n"}</InlineMath> diverges.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Common Mistake:</strong> The converse is false! Just because <InlineMath>{"a_n \\to 0"}</InlineMath>
        does not mean <InlineMath>{"\\sum a_n"}</InlineMath> converges. The harmonic series is the classic counterexample.
      </Callout>

      <Example title="Harmonic Series Diverges">
        <p>
          The series <InlineMath>{"\\sum_{n=1}^\\infty \\frac{1}{n}"}</InlineMath> diverges despite <InlineMath>{"1/n \\to 0"}</InlineMath>.
        </p>
        <MathBlock>
          {`1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots = \\infty`}
        </MathBlock>
      </Example>

      <h3>Geometric Series</h3>

      <Theorem
        title="Geometric Series"
        proof={
          <>
            <p className="mb-3">The partial sum is:</p>
            <MathBlock>{`s_n = 1 + r + r^2 + \\cdots + r^n = \\frac{1 - r^{n+1}}{1 - r} \\quad \\text{for } r \\neq 1`}</MathBlock>
            <p className="mb-3">If <InlineMath>{`|r| < 1`}</InlineMath>, then <InlineMath>{`r^{n+1} \\to 0`}</InlineMath> as <InlineMath>{`n \\to \\infty`}</InlineMath>, so <InlineMath>{`s_n \\to \\frac{1}{1-r}`}</InlineMath>.</p>
            <p className="mb-3">If <InlineMath>{`|r| \\geq 1`}</InlineMath>, then <InlineMath>{`r^n`}</InlineMath> does not converge to 0, so by the divergence test, the series diverges.</p>
          </>
        }
      >
        <p>
          For <InlineMath>{"|r| < 1"}</InlineMath>, the geometric series converges:
        </p>
        <MathBlock>
          {`\\sum_{n=0}^\\infty r^n = \\frac{1}{1-r}`}
        </MathBlock>
        <p>For <InlineMath>{"|r| \\geq 1"}</InlineMath>, the series diverges.</p>
      </Theorem>

      <h3>Positive Series</h3>

      <Theorem
        title="Comparison Test"
        proof={
          <>
            <p className="mb-3">Let <InlineMath>{`A_n = \\sum_{i=1}^n a_i`}</InlineMath> and <InlineMath>{`B_n = \\sum_{i=1}^n b_i`}</InlineMath> be partial sums.</p>
            <p className="mb-3">Since <InlineMath>{`a_i \\leq b_i`}</InlineMath> for all <InlineMath>{`i`}</InlineMath>, we have <InlineMath>{`A_n \\leq B_n`}</InlineMath> for all <InlineMath>{`n`}</InlineMath>.</p>
            <p className="mb-3">If <InlineMath>{`\\sum b_n`}</InlineMath> converges to <InlineMath>{`B`}</InlineMath>, then <InlineMath>{`A_n \\leq B_n \\leq B`}</InlineMath>, so <InlineMath>{`(A_n)`}</InlineMath> is bounded above.</p>
            <p className="mb-3">Since <InlineMath>{`(A_n)`}</InlineMath> is increasing (<InlineMath>{`a_n \\geq 0`}</InlineMath>) and bounded, by the Monotone Convergence Theorem, <InlineMath>{`\\sum a_n`}</InlineMath> converges.</p>
            <p className="mb-3">The second statement follows by contrapositive.</p>
          </>
        }
      >
        <p>
          Let <InlineMath>{"0 \\leq a_n \\leq b_n"}</InlineMath> for all <InlineMath>{"n"}</InlineMath>.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>If <InlineMath>{"\\sum b_n"}</InlineMath> converges, then <InlineMath>{"\\sum a_n"}</InlineMath> converges</li>
          <li>If <InlineMath>{"\\sum a_n"}</InlineMath> diverges, then <InlineMath>{"\\sum b_n"}</InlineMath> diverges</li>
        </ul>
      </Theorem>

      <Theorem
        title="Integral Test"
        proof={
          <>
            <p className="mb-3">Since <InlineMath>{`f`}</InlineMath> is decreasing, for <InlineMath>{`x \\in [n, n+1]`}</InlineMath>: <InlineMath>{`f(n+1) \\leq f(x) \\leq f(n)`}</InlineMath>.</p>
            <p className="mb-3">Integrating:</p>
            <MathBlock>{`f(n+1) \\leq \\int_n^{n+1} f(x)\\,dx \\leq f(n)`}</MathBlock>
            <p className="mb-3">Summing from <InlineMath>{`n=1`}</InlineMath> to <InlineMath>{`N-1`}</InlineMath>:</p>
            <MathBlock>{`\\sum_{n=2}^N f(n) \\leq \\int_1^N f(x)\\,dx \\leq \\sum_{n=1}^{N-1} f(n)`}</MathBlock>
            <p className="mb-3">If the integral converges, the partial sums are bounded, so the series converges.</p>
            <p className="mb-3">If the series converges, the integral is bounded, so it converges.</p>
          </>
        }
      >
        <p>
          Let <InlineMath>{"f"}</InlineMath> be positive, continuous, and decreasing on <InlineMath>{"[1, \\infty)"}</InlineMath>. Then:
        </p>
        <MathBlock>
          {`\\sum_{n=1}^\\infty f(n) \\text{ converges } \\Leftrightarrow \\int_1^\\infty f(x)\\,dx \\text{ converges}`}
        </MathBlock>
      </Theorem>

      <Example title="p-Series">
        <p>
          By the integral test, the p-series <InlineMath>{"\\sum \\frac{1}{n^p}"}</InlineMath> converges iff <InlineMath>{"p > 1"}</InlineMath>.
        </p>
      </Example>

      <SectionQuiz
        sectionId={6}
        questions={section06Quiz}
        title="Infinite Series Quiz"
      />
    </LessonLayout>
  );
}
