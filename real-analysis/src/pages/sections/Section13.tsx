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
            <p className="mb-3"><strong>(⇐)</strong> Given ε &gt; 0, if U(f,P) - L(f,P) &lt; ε for some P, then:</p>
            <p className="mb-3">inf U(f,P) - sup L(f,P) ≤ U(f,P) - L(f,P) &lt; ε.</p>
            <p className="mb-3">Since ε is arbitrary, inf U = sup L, so f is integrable.</p>
            <p className="mb-3"><strong>(⇒)</strong> If f is integrable with ∫f = I, then given ε &gt; 0:</p>
            <p className="mb-3">∃P₁: U(f,P₁) &lt; I + ε/2 and ∃P₂: L(f,P₂) &gt; I - ε/2.</p>
            <p className="mb-3">Let P = P₁ ∪ P₂. Then U(f,P) - L(f,P) &lt; ε.</p>
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
            <p className="mb-3">Continuous f on compact [a,b] is uniformly continuous.</p>
            <p className="mb-3">Given ε &gt; 0, ∃δ: |x - y| &lt; δ ⇒ |f(x) - f(y)| &lt; ε/(b-a).</p>
            <p className="mb-3">Choose partition P with mesh &lt; δ. On each [xᵢ₋₁, xᵢ]: Mᵢ - mᵢ &lt; ε/(b-a).</p>
            <p className="mb-3">Then U(f,P) - L(f,P) = Σ(Mᵢ - mᵢ)Δxᵢ &lt; [ε/(b-a)] · (b-a) = ε.</p>
            <p className="mb-3">By Riemann's criterion, f is integrable.</p>
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
            <p className="mb-3">WLOG assume f is increasing. For any partition P with n equal subintervals:</p>
            <p className="mb-3">Mᵢ = f(xᵢ) and mᵢ = f(xᵢ₋₁) (by monotonicity).</p>
            <p className="mb-3">U(f,P) - L(f,P) = Σ[f(xᵢ) - f(xᵢ₋₁)]·Δx = [f(b) - f(a)]·(b-a)/n.</p>
            <p className="mb-3">This is a telescoping sum! Given ε &gt; 0, choose n &gt; [f(b) - f(a)](b-a)/ε.</p>
            <p className="mb-3">Then U - L &lt; ε, so f is integrable by Riemann's criterion.</p>
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
            <p className="mb-3">A set has measure zero if it can be covered by intervals with total length &lt; ε for any ε.</p>
            <p className="mb-3"><strong>Key idea:</strong> The oscillation ω(x) = lim(δ→0) [sup f - inf f on (x-δ, x+δ)] measures discontinuity.</p>
            <p className="mb-3">f is continuous at x iff ω(x) = 0.</p>
            <p className="mb-3">The proof shows: f integrable ⟺ for all α &gt; 0, &#123;x : ω(x) ≥ α&#125; has measure zero ⟺ discontinuities have measure zero.</p>
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
