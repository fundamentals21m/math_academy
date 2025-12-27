import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section13Quiz } from '@/data/quizzes';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>The Riemann Integral</h2>

      <p>
        The Riemann integral gives a rigorous definition of the integral as a limit of
        Riemann sums. We characterize which functions are integrable and develop the
        basic properties of the integral.
      </p>

      <Definition title="Partition">
        <p>
          A partition <Math>{"P"}</Math> of <Math>{"[a, b]"}</Math> is a finite set of points:
        </p>
        <MathBlock>
          {`P = \\{a = x_0 < x_1 < \\cdots < x_n = b\\}`}
        </MathBlock>
      </Definition>

      <Definition title="Upper and Lower Sums">
        <p>For a bounded function <Math>{"f"}</Math> on <Math>{"[a, b]"}</Math> and partition <Math>{"P"}</Math>:</p>
        <MathBlock>
          {`U(f, P) = \\sum_{i=1}^n M_i \\Delta x_i, \\quad L(f, P) = \\sum_{i=1}^n m_i \\Delta x_i`}
        </MathBlock>
        <p>where <Math>{"M_i = \\sup f"}</Math> and <Math>{"m_i = \\inf f"}</Math> on <Math>{"[x_{i-1}, x_i]"}</Math>.</p>
      </Definition>

      <Definition title="Riemann Integrable">
        <p>
          A bounded function <Math>{"f"}</Math> is Riemann integrable on <Math>{"[a, b]"}</Math> if:
        </p>
        <MathBlock>
          {`\\sup_P L(f, P) = \\inf_P U(f, P)`}
        </MathBlock>
        <p>The common value is <Math>{"\\int_a^b f"}</Math>.</p>
      </Definition>

      <Theorem title="Riemann's Criterion">
        <p>
          <Math>{"f"}</Math> is integrable iff for every <Math>{"\\varepsilon > 0"}</Math>, there exists
          a partition <Math>{"P"}</Math> with <Math>{"U(f, P) - L(f, P) < \\varepsilon"}</Math>.
        </p>
      </Theorem>

      <h3>Classes of Integrable Functions</h3>

      <Theorem title="Continuous Functions are Integrable">
        <p>
          Every continuous function on <Math>[a, b]</Math> is Riemann integrable.
        </p>
      </Theorem>

      <Theorem title="Monotone Functions are Integrable">
        <p>
          Every monotone function on <Math>[a, b]</Math> is Riemann integrable.
        </p>
      </Theorem>

      <Theorem title="Lebesgue's Criterion">
        <p>
          A bounded function <Math>f</Math> is Riemann integrable iff its set of discontinuities
          has Lebesgue measure zero.
        </p>
      </Theorem>

      <Example title="The Thomae Function">
        <p>
          The Thomae function is 0 at irrationals and <Math>1/q</Math> at reduced <Math>p/q</Math>.
          It is discontinuous on the dense set of rationals but integrable with integral 0.
        </p>
      </Example>

      <Callout type="warning">
        <strong>Non-Integrable Example:</strong> The Dirichlet function (1 on rationals, 0 on irrationals)
        is not Riemann integrable: <Math>U(f, P) = 1</Math> and <Math>L(f, P) = 0</Math> for all partitions.
      </Callout>

      <SectionQuiz
        sectionId={13}
        questions={section13Quiz}
        title="Riemann Integral Quiz"
      />
    </LessonLayout>
  );
}
