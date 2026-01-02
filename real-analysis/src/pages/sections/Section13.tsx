import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
          A partition <InlineMath>{"P"}</InlineMath> of <InlineMath>{"[a, b]"}</InlineMath> is a finite set of points:
        </p>
        <MathBlock>
          {`P = \\{a = x_0 < x_1 < \\cdots < x_n = b\\}`}
        </MathBlock>
      </Definition>

      <Definition title="Upper and Lower Sums">
        <p>For a bounded function <InlineMath>{"f"}</InlineMath> on <InlineMath>{"[a, b]"}</InlineMath> and partition <InlineMath>{"P"}</InlineMath>:</p>
        <MathBlock>
          {`U(f, P) = \\sum_{i=1}^n M_i \\Delta x_i, \\quad L(f, P) = \\sum_{i=1}^n m_i \\Delta x_i`}
        </MathBlock>
        <p>where <InlineMath>{"M_i = \\sup f"}</InlineMath> and <InlineMath>{"m_i = \\inf f"}</InlineMath> on <InlineMath>{"[x_{i-1}, x_i]"}</InlineMath>.</p>
      </Definition>

      <Definition title="Riemann Integrable">
        <p>
          A bounded function <InlineMath>{"f"}</InlineMath> is Riemann integrable on <InlineMath>{"[a, b]"}</InlineMath> if:
        </p>
        <MathBlock>
          {`\\sup_P L(f, P) = \\inf_P U(f, P)`}
        </MathBlock>
        <p>The common value is <InlineMath>{"\\int_a^b f"}</InlineMath>.</p>
      </Definition>

      <Theorem
        title="Riemann's Criterion"
        proof={
          <>
            <p className="mb-3"><strong>(⇐)</strong> Given <InlineMath>{`\\varepsilon > 0`}</InlineMath>, if <InlineMath>{`U(f,P) - L(f,P) < \\varepsilon`}</InlineMath> for some <InlineMath>{`P`}</InlineMath>, then:</p>
            <MathBlock>{`\\inf U(f,P) - \\sup L(f,P) \\leq U(f,P) - L(f,P) < \\varepsilon`}</MathBlock>
            <p className="mb-3">Since <InlineMath>{`\\varepsilon`}</InlineMath> is arbitrary, <InlineMath>{`\\inf U = \\sup L`}</InlineMath>, so <InlineMath>{`f`}</InlineMath> is integrable.</p>
            <p className="mb-3"><strong>(⇒)</strong> If <InlineMath>{`f`}</InlineMath> is integrable with <InlineMath>{`\\int f = I`}</InlineMath>, then given <InlineMath>{`\\varepsilon > 0`}</InlineMath>:</p>
            <p className="mb-3"><InlineMath>{`\\exists P_1: U(f,P_1) < I + \\varepsilon/2`}</InlineMath> and <InlineMath>{`\\exists P_2: L(f,P_2) > I - \\varepsilon/2`}</InlineMath>.</p>
            <p className="mb-3">Let <InlineMath>{`P = P_1 \\cup P_2`}</InlineMath>. Then <InlineMath>{`U(f,P) - L(f,P) < \\varepsilon`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          <InlineMath>{"f"}</InlineMath> is integrable iff for every <InlineMath>{"\\varepsilon > 0"}</InlineMath>, there exists
          a partition <InlineMath>{"P"}</InlineMath> with <InlineMath>{"U(f, P) - L(f, P) < \\varepsilon"}</InlineMath>.
        </p>
      </Theorem>

      <h3>Classes of Integrable Functions</h3>

      <Theorem
        title="Continuous Functions are Integrable"
        proof={
          <>
            <p className="mb-3">Continuous <InlineMath>{`f`}</InlineMath> on compact <InlineMath>{`[a,b]`}</InlineMath> is uniformly continuous.</p>
            <p className="mb-3">Given <InlineMath>{`\\varepsilon > 0`}</InlineMath>, <InlineMath>{`\\exists \\delta: |x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\varepsilon/(b-a)`}</InlineMath>.</p>
            <p className="mb-3">Choose partition <InlineMath>{`P`}</InlineMath> with mesh <InlineMath>{`< \\delta`}</InlineMath>. On each <InlineMath>{`[x_{i-1}, x_i]`}</InlineMath>: <InlineMath>{`M_i - m_i < \\varepsilon/(b-a)`}</InlineMath>.</p>
            <p className="mb-3">Then:</p>
            <MathBlock>{`U(f,P) - L(f,P) = \\sum(M_i - m_i)\\Delta x_i < \\frac{\\varepsilon}{b-a} \\cdot (b-a) = \\varepsilon`}</MathBlock>
            <p className="mb-3">By Riemann's criterion, <InlineMath>{`f`}</InlineMath> is integrable.</p>
          </>
        }
      >
        <p>
          Every continuous function on <InlineMath>[a, b]</InlineMath> is Riemann integrable.
        </p>
      </Theorem>

      <Theorem
        title="Monotone Functions are Integrable"
        proof={
          <>
            <p className="mb-3">WLOG assume <InlineMath>{`f`}</InlineMath> is increasing. For any partition <InlineMath>{`P`}</InlineMath> with <InlineMath>{`n`}</InlineMath> equal subintervals:</p>
            <p className="mb-3"><InlineMath>{`M_i = f(x_i)`}</InlineMath> and <InlineMath>{`m_i = f(x_{i-1})`}</InlineMath> (by monotonicity).</p>
            <MathBlock>{`U(f,P) - L(f,P) = \\sum[f(x_i) - f(x_{i-1})] \\cdot \\Delta x = [f(b) - f(a)] \\cdot \\frac{b-a}{n}`}</MathBlock>
            <p className="mb-3">This is a telescoping sum! Given <InlineMath>{`\\varepsilon > 0`}</InlineMath>, choose <InlineMath>{`n > [f(b) - f(a)](b-a)/\\varepsilon`}</InlineMath>.</p>
            <p className="mb-3">Then <InlineMath>{`U - L < \\varepsilon`}</InlineMath>, so <InlineMath>{`f`}</InlineMath> is integrable by Riemann's criterion.</p>
          </>
        }
      >
        <p>
          Every monotone function on <InlineMath>[a, b]</InlineMath> is Riemann integrable.
        </p>
      </Theorem>

      <Theorem
        title="Lebesgue's Criterion"
        proof={
          <>
            <p className="mb-3">A set has measure zero if it can be covered by intervals with total length <InlineMath>{`< \\varepsilon`}</InlineMath> for any <InlineMath>{`\\varepsilon`}</InlineMath>.</p>
            <p className="mb-3"><strong>Key idea:</strong> The oscillation <InlineMath>{`\\omega(x) = \\lim_{\\delta \\to 0} [\\sup f - \\inf f \\text{ on } (x-\\delta, x+\\delta)]`}</InlineMath> measures discontinuity.</p>
            <p className="mb-3"><InlineMath>{`f`}</InlineMath> is continuous at <InlineMath>{`x`}</InlineMath> iff <InlineMath>{`\\omega(x) = 0`}</InlineMath>.</p>
            <p className="mb-3">The proof shows: <InlineMath>{`f`}</InlineMath> integrable <InlineMath>{`\\Leftrightarrow`}</InlineMath> for all <InlineMath>{`\\alpha > 0`}</InlineMath>, <InlineMath>{`\\{x : \\omega(x) \\geq \\alpha\\}`}</InlineMath> has measure zero <InlineMath>{`\\Leftrightarrow`}</InlineMath> discontinuities have measure zero.</p>
            <p className="mb-3">This deep result connects Riemann's criterion to measure theory.</p>
          </>
        }
      >
        <p>
          A bounded function <InlineMath>f</InlineMath> is Riemann integrable iff its set of discontinuities
          has Lebesgue measure zero.
        </p>
      </Theorem>

      <Example title="The Thomae Function">
        <p>
          The Thomae function is 0 at irrationals and <InlineMath>1/q</InlineMath> at reduced <InlineMath>p/q</InlineMath>.
          It is discontinuous on the dense set of rationals but integrable with integral 0.
        </p>
      </Example>

      <Callout type="warning">
        <strong>Non-Integrable Example:</strong> The Dirichlet function (1 on rationals, 0 on irrationals)
        is not Riemann integrable: <InlineMath>U(f, P) = 1</InlineMath> and <InlineMath>L(f, P) = 0</InlineMath> for all partitions.
      </Callout>

      <SectionQuiz
        sectionId={13}
        questions={section13Quiz}
        title="Riemann Integral Quiz"
      />
    </LessonLayout>
  );
}
