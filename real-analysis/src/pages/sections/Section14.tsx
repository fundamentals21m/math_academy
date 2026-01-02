import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
            <p className="mb-3">We compute:</p>
            <MathBlock>{`\\frac{F(x+h) - F(x)}{h} = \\frac{1}{h}\\int_x^{x+h} f(t)\\,dt`}</MathBlock>
            <p className="mb-3">Since <InlineMath>{`f`}</InlineMath> is continuous, by EVT: <InlineMath>{`m \\leq f(t) \\leq M`}</InlineMath> on <InlineMath>{`[x, x+h]`}</InlineMath> for some <InlineMath>{`m, M`}</InlineMath>.</p>
            <p className="mb-3">So <InlineMath>{`mh \\leq \\int_x^{x+h} f(t)\\,dt \\leq Mh`}</InlineMath>, giving <InlineMath>{`m \\leq \\frac{F(x+h) - F(x)}{h} \\leq M`}</InlineMath>.</p>
            <p className="mb-3">As <InlineMath>{`h \\to 0`}</InlineMath>: by continuity, <InlineMath>{`m \\to f(x)`}</InlineMath> and <InlineMath>{`M \\to f(x)`}</InlineMath>.</p>
            <p className="mb-3">By the squeeze theorem, <InlineMath>{`F'(x) = f(x)`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          Let <InlineMath>{"f"}</InlineMath> be continuous on <InlineMath>{"[a, b]"}</InlineMath>. Define <InlineMath>{"F(x) = \\int_a^x f(t)\\,dt"}</InlineMath>.
          Then <InlineMath>{"F"}</InlineMath> is differentiable on <InlineMath>{"(a, b)"}</InlineMath> and:
        </p>
        <MathBlock>
          {`F'(x) = f(x)`}
        </MathBlock>
      </Theorem>

      <Callout type="info">
        <strong>Interpretation:</strong> The integral function <InlineMath>{"F"}</InlineMath> is an antiderivative
        of the integrand <InlineMath>{"f"}</InlineMath>. Differentiation undoes integration.
      </Callout>

      <h3>Second Fundamental Theorem</h3>

      <Theorem
        title="Second Fundamental Theorem of Calculus"
        proof={
          <>
            <p className="mb-3">Let <InlineMath>{`G(x) = \\int_a^x f(t)\\,dt`}</InlineMath>. By FTC1, <InlineMath>{`G'(x) = f(x) = F'(x)`}</InlineMath>.</p>
            <p className="mb-3">So <InlineMath>{`(F - G)'(x) = 0`}</InlineMath> on <InlineMath>{`(a, b)`}</InlineMath>. By the MVT, <InlineMath>{`F - G`}</InlineMath> is constant: <InlineMath>{`F(x) - G(x) = C`}</InlineMath>.</p>
            <p className="mb-3">At <InlineMath>{`x = a`}</InlineMath>: <InlineMath>{`F(a) - G(a) = F(a) - 0 = C`}</InlineMath>, so <InlineMath>{`C = F(a)`}</InlineMath>.</p>
            <p className="mb-3">Therefore <InlineMath>{`G(x) = F(x) - F(a)`}</InlineMath>.</p>
            <p className="mb-3">At <InlineMath>{`x = b`}</InlineMath>: <InlineMath>{`\\int_a^b f = G(b) = F(b) - F(a)`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"f"}</InlineMath> is continuous on <InlineMath>{"[a, b]"}</InlineMath> and <InlineMath>{"F"}</InlineMath> is any antiderivative
          of <InlineMath>{"f"}</InlineMath> (i.e., <InlineMath>{"F' = f"}</InlineMath>), then:
        </p>
        <MathBlock>
          {`\\int_a^b f(x)\\,dx = F(b) - F(a)`}
        </MathBlock>
      </Theorem>

      <Example title="Computing Integrals">
        <p>To evaluate <InlineMath>{"\\int_0^1 x^2\\,dx"}</InlineMath>:</p>
        <p>An antiderivative of <InlineMath>{"x^2"}</InlineMath> is <InlineMath>{"F(x) = x^3/3"}</InlineMath>.</p>
        <MathBlock>
          {`\\int_0^1 x^2\\,dx = F(1) - F(0) = \\frac{1}{3} - 0 = \\frac{1}{3}`}
        </MathBlock>
      </Example>

      <h3>Extensions and Generalizations</h3>

      <Theorem
        title="Leibniz Rule"
        proof={
          <>
            <p className="mb-3">Let <InlineMath>{`G(u) = \\int_0^u f(t)\\,dt`}</InlineMath>. Then <InlineMath>{`F(x) = G(b(x)) - G(a(x))`}</InlineMath>.</p>
            <p className="mb-3">By the chain rule: <InlineMath>{`F'(x) = G'(b(x)) \\cdot b'(x) - G'(a(x)) \\cdot a'(x)`}</InlineMath>.</p>
            <p className="mb-3">By FTC1: <InlineMath>{`G'(u) = f(u)`}</InlineMath>.</p>
            <p className="mb-3">Therefore: <InlineMath>{`F'(x) = f(b(x)) \\cdot b'(x) - f(a(x)) \\cdot a'(x)`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"F(x) = \\int_{a(x)}^{b(x)} f(t)\\,dt"}</InlineMath> with differentiable limits:
        </p>
        <MathBlock>
          {`F'(x) = f(b(x)) \\cdot b'(x) - f(a(x)) \\cdot a'(x)`}
        </MathBlock>
      </Theorem>

      <Definition title="Absolute Continuity">
        <p>
          A function <InlineMath>{"F"}</InlineMath> is absolutely continuous on <InlineMath>{"[a, b]"}</InlineMath> if for every
          <InlineMath>{"\\varepsilon > 0"}</InlineMath> there exists <InlineMath>{"\\delta > 0"}</InlineMath> such that for any
          finite collection of disjoint intervals <InlineMath>{"(a_k, b_k)"}</InlineMath> with total length <InlineMath>{"< \\delta"}</InlineMath>:
        </p>
        <MathBlock>
          {`\\sum |F(b_k) - F(a_k)| < \\varepsilon`}
        </MathBlock>
      </Definition>

      <Callout type="important">
        <strong>Generalization:</strong> The FTC holds in full generality for absolutely continuous functions:
        <InlineMath>{"F"}</InlineMath> is absolutely continuous iff <InlineMath>{"F(x) = F(a) + \\int_a^x F'(t)\\,dt"}</InlineMath>.
      </Callout>

      <Example title="Cantor Function">
        <p>
          The Cantor function is continuous with <InlineMath>F' = 0</InlineMath> almost everywhere, but
          <InlineMath>F(1) - F(0) = 1 \neq 0</InlineMath>. It is not absolutely continuous, showing why
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
