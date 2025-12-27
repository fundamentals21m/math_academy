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

      <Theorem
        title="Riemann's Criterion"
        proof={
          <>
            <p className="mb-3"><strong>(⇐)</strong> Given <Math>{`\\varepsilon > 0`}</Math>, if <Math>{`U(f,P) - L(f,P) < \\varepsilon`}</Math> for some <Math>{`P`}</Math>, then:</p>
            <MathBlock>{`\\inf U(f,P) - \\sup L(f,P) \\leq U(f,P) - L(f,P) < \\varepsilon`}</MathBlock>
            <p className="mb-3">Since <Math>{`\\varepsilon`}</Math> is arbitrary, <Math>{`\\inf U = \\sup L`}</Math>, so <Math>{`f`}</Math> is integrable.</p>
            <p className="mb-3"><strong>(⇒)</strong> If <Math>{`f`}</Math> is integrable with <Math>{`\\int f = I`}</Math>, then given <Math>{`\\varepsilon > 0`}</Math>:</p>
            <p className="mb-3"><Math>{`\\exists P_1: U(f,P_1) < I + \\varepsilon/2`}</Math> and <Math>{`\\exists P_2: L(f,P_2) > I - \\varepsilon/2`}</Math>.</p>
            <p className="mb-3">Let <Math>{`P = P_1 \\cup P_2`}</Math>. Then <Math>{`U(f,P) - L(f,P) < \\varepsilon`}</Math>.</p>
          </>
        }
      >
        <p>
          <Math>{"f"}</Math> is integrable iff for every <Math>{"\\varepsilon > 0"}</Math>, there exists
          a partition <Math>{"P"}</Math> with <Math>{"U(f, P) - L(f, P) < \\varepsilon"}</Math>.
        </p>
      </Theorem>

      <h3>Classes of Integrable Functions</h3>

      <Theorem
        title="Continuous Functions are Integrable"
        proof={
          <>
            <p className="mb-3">Continuous <Math>{`f`}</Math> on compact <Math>{`[a,b]`}</Math> is uniformly continuous.</p>
            <p className="mb-3">Given <Math>{`\\varepsilon > 0`}</Math>, <Math>{`\\exists \\delta: |x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\varepsilon/(b-a)`}</Math>.</p>
            <p className="mb-3">Choose partition <Math>{`P`}</Math> with mesh <Math>{`< \\delta`}</Math>. On each <Math>{`[x_{i-1}, x_i]`}</Math>: <Math>{`M_i - m_i < \\varepsilon/(b-a)`}</Math>.</p>
            <p className="mb-3">Then:</p>
            <MathBlock>{`U(f,P) - L(f,P) = \\sum(M_i - m_i)\\Delta x_i < \\frac{\\varepsilon}{b-a} \\cdot (b-a) = \\varepsilon`}</MathBlock>
            <p className="mb-3">By Riemann's criterion, <Math>{`f`}</Math> is integrable.</p>
          </>
        }
      >
        <p>
          Every continuous function on <Math>[a, b]</Math> is Riemann integrable.
        </p>
      </Theorem>

      <Theorem
        title="Monotone Functions are Integrable"
        proof={
          <>
            <p className="mb-3">WLOG assume <Math>{`f`}</Math> is increasing. For any partition <Math>{`P`}</Math> with <Math>{`n`}</Math> equal subintervals:</p>
            <p className="mb-3"><Math>{`M_i = f(x_i)`}</Math> and <Math>{`m_i = f(x_{i-1})`}</Math> (by monotonicity).</p>
            <MathBlock>{`U(f,P) - L(f,P) = \\sum[f(x_i) - f(x_{i-1})] \\cdot \\Delta x = [f(b) - f(a)] \\cdot \\frac{b-a}{n}`}</MathBlock>
            <p className="mb-3">This is a telescoping sum! Given <Math>{`\\varepsilon > 0`}</Math>, choose <Math>{`n > [f(b) - f(a)](b-a)/\\varepsilon`}</Math>.</p>
            <p className="mb-3">Then <Math>{`U - L < \\varepsilon`}</Math>, so <Math>{`f`}</Math> is integrable by Riemann's criterion.</p>
          </>
        }
      >
        <p>
          Every monotone function on <Math>[a, b]</Math> is Riemann integrable.
        </p>
      </Theorem>

      <Theorem
        title="Lebesgue's Criterion"
        proof={
          <>
            <p className="mb-3">A set has measure zero if it can be covered by intervals with total length <Math>{`< \\varepsilon`}</Math> for any <Math>{`\\varepsilon`}</Math>.</p>
            <p className="mb-3"><strong>Key idea:</strong> The oscillation <Math>{`\\omega(x) = \\lim_{\\delta \\to 0} [\\sup f - \\inf f \\text{ on } (x-\\delta, x+\\delta)]`}</Math> measures discontinuity.</p>
            <p className="mb-3"><Math>{`f`}</Math> is continuous at <Math>{`x`}</Math> iff <Math>{`\\omega(x) = 0`}</Math>.</p>
            <p className="mb-3">The proof shows: <Math>{`f`}</Math> integrable <Math>{`\\Leftrightarrow`}</Math> for all <Math>{`\\alpha > 0`}</Math>, <Math>{`\\{x : \\omega(x) \\geq \\alpha\\}`}</Math> has measure zero <Math>{`\\Leftrightarrow`}</Math> discontinuities have measure zero.</p>
            <p className="mb-3">This deep result connects Riemann's criterion to measure theory.</p>
          </>
        }
      >
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
