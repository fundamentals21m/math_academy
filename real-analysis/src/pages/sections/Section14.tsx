import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section14Quiz } from '@/data/quizzes';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2>Fundamental Theorem of Calculus</h2>

      <p>
        The Fundamental Theorem of Calculus connects differentiation and integration,
        showing they are inverse operations in a precise sense. This theorem is the
        cornerstone of calculus.
      </p>

      <h3>First Fundamental Theorem</h3>

      <Theorem
        title="First Fundamental Theorem of Calculus"
        proof={
          <>
            <p className="mb-3">We compute: [F(x+h) - F(x)]/h = (1/h)∫ₓˣ⁺ʰ f(t) dt.</p>
            <p className="mb-3">Since f is continuous, by EVT: m ≤ f(t) ≤ M on [x, x+h] for some m, M.</p>
            <p className="mb-3">So mh ≤ ∫ₓˣ⁺ʰ f(t) dt ≤ Mh, giving m ≤ [F(x+h) - F(x)]/h ≤ M.</p>
            <p className="mb-3">As h → 0: by continuity, m → f(x) and M → f(x).</p>
            <p className="mb-3">By the squeeze theorem, F'(x) = f(x).</p>
          </>
        }
      >
        <p>
          Let <Math>{"f"}</Math> be continuous on <Math>{"[a, b]"}</Math>. Define <Math>{"F(x) = \\int_a^x f(t)\\,dt"}</Math>.
          Then <Math>{"F"}</Math> is differentiable on <Math>{"(a, b)"}</Math> and:
        </p>
        <MathBlock>
          {`F'(x) = f(x)`}
        </MathBlock>
      </Theorem>

      <Callout type="info">
        <strong>Interpretation:</strong> The integral function <Math>{"F"}</Math> is an antiderivative
        of the integrand <Math>{"f"}</Math>. Differentiation undoes integration.
      </Callout>

      <h3>Second Fundamental Theorem</h3>

      <Theorem
        title="Second Fundamental Theorem of Calculus"
        proof={
          <>
            <p className="mb-3">Let G(x) = ∫ₐˣ f(t) dt. By FTC1, G'(x) = f(x) = F'(x).</p>
            <p className="mb-3">So (F - G)'(x) = 0 on (a, b). By the MVT, F - G is constant: F(x) - G(x) = C.</p>
            <p className="mb-3">At x = a: F(a) - G(a) = F(a) - 0 = C, so C = F(a).</p>
            <p className="mb-3">Therefore G(x) = F(x) - F(a).</p>
            <p className="mb-3">At x = b: ∫ₐᵇ f = G(b) = F(b) - F(a).</p>
          </>
        }
      >
        <p>
          If <Math>{"f"}</Math> is continuous on <Math>{"[a, b]"}</Math> and <Math>{"F"}</Math> is any antiderivative
          of <Math>{"f"}</Math> (i.e., <Math>{"F' = f"}</Math>), then:
        </p>
        <MathBlock>
          {`\\int_a^b f(x)\\,dx = F(b) - F(a)`}
        </MathBlock>
      </Theorem>

      <Example title="Computing Integrals">
        <p>To evaluate <Math>{"\\int_0^1 x^2\\,dx"}</Math>:</p>
        <p>An antiderivative of <Math>{"x^2"}</Math> is <Math>{"F(x) = x^3/3"}</Math>.</p>
        <MathBlock>
          {`\\int_0^1 x^2\\,dx = F(1) - F(0) = \\frac{1}{3} - 0 = \\frac{1}{3}`}
        </MathBlock>
      </Example>

      <h3>Extensions and Generalizations</h3>

      <Theorem
        title="Leibniz Rule"
        proof={
          <>
            <p className="mb-3">Let G(u) = ∫₀ᵘ f(t) dt. Then F(x) = G(b(x)) - G(a(x)).</p>
            <p className="mb-3">By the chain rule: F'(x) = G'(b(x))·b'(x) - G'(a(x))·a'(x).</p>
            <p className="mb-3">By FTC1: G'(u) = f(u).</p>
            <p className="mb-3">Therefore: F'(x) = f(b(x))·b'(x) - f(a(x))·a'(x).</p>
          </>
        }
      >
        <p>
          If <Math>{"F(x) = \\int_{a(x)}^{b(x)} f(t)\\,dt"}</Math> with differentiable limits:
        </p>
        <MathBlock>
          {`F'(x) = f(b(x)) \\cdot b'(x) - f(a(x)) \\cdot a'(x)`}
        </MathBlock>
      </Theorem>

      <Definition title="Absolute Continuity">
        <p>
          A function <Math>{"F"}</Math> is absolutely continuous on <Math>{"[a, b]"}</Math> if for every
          <Math>{"\\varepsilon > 0"}</Math> there exists <Math>{"\\delta > 0"}</Math> such that for any
          finite collection of disjoint intervals <Math>{"(a_k, b_k)"}</Math> with total length <Math>{"< \\delta"}</Math>:
        </p>
        <MathBlock>
          {`\\sum |F(b_k) - F(a_k)| < \\varepsilon`}
        </MathBlock>
      </Definition>

      <Callout type="important">
        <strong>Generalization:</strong> The FTC holds in full generality for absolutely continuous functions:
        <Math>{"F"}</Math> is absolutely continuous iff <Math>{"F(x) = F(a) + \\int_a^x F'(t)\\,dt"}</Math>.
      </Callout>

      <Example title="Cantor Function">
        <p>
          The Cantor function is continuous with <Math>F' = 0</Math> almost everywhere, but
          <Math>F(1) - F(0) = 1 \neq 0</Math>. It is not absolutely continuous, showing why
          absolute continuity is needed for FTC.
        </p>
      </Example>

      <SectionQuiz
        sectionId={14}
        questions={section14Quiz}
        title="Fundamental Theorem of Calculus Quiz"
      />
    </LessonLayout>
  );
}
