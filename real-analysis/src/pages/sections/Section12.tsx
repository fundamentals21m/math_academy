import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section12Quiz } from '@/data/quizzes';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Applications of Derivatives</h2>

      <p>
        The derivative provides powerful tools for analyzing functions: Taylor's theorem gives
        polynomial approximations, L'Hôpital's rule evaluates indeterminate forms, and the
        inverse function theorem connects differentiability with invertibility.
      </p>

      <h3>Taylor's Theorem</h3>

      <Theorem
        title="Taylor's Theorem with Remainder"
        proof={
          <>
            <p className="mb-3">Define F(t) = f(x) - Σₖ₌₀ⁿ [f⁽ᵏ⁾(t)/k!](x-t)ᵏ for t between a and x.</p>
            <p className="mb-3">Note F(x) = f(x) - f(x) = 0 (all terms vanish when t = x).</p>
            <p className="mb-3">Define G(t) = F(t) - [(x-t)/(x-a)]ⁿ⁺¹ F(a). Then G(a) = G(x) = 0.</p>
            <p className="mb-3">By Rolle's Theorem, ∃ξ between a and x with G'(ξ) = 0.</p>
            <p className="mb-3">Computing F'(t) (using product rule and cancellation): F'(t) = -f⁽ⁿ⁺¹⁾(t)(x-t)ⁿ/n!.</p>
            <p className="mb-3">Solving G'(ξ) = 0 gives F(a) = f⁽ⁿ⁺¹⁾(ξ)(x-a)ⁿ⁺¹/(n+1)! = Rₙ(x).</p>
          </>
        }
      >
        <p>
          If <Math>{"f"}</Math> is <Math>{"n+1"}</Math> times differentiable on an interval containing <Math>{"a"}</Math>
          and <Math>{"x"}</Math>, then:
        </p>
        <MathBlock>
          {`f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)`}
        </MathBlock>
        <p>where the Lagrange form of the remainder is:</p>
        <MathBlock>
          {`R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}`}
        </MathBlock>
        <p>for some <Math>{"\\xi"}</Math> between <Math>{"a"}</Math> and <Math>{"x"}</Math>.</p>
      </Theorem>

      <Example title="Taylor Series of e^x">
        <p>For <Math>{"f(x) = e^x"}</Math>, all derivatives equal <Math>{"e^x"}</Math>, so:</p>
        <MathBlock>
          {`e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}`}
        </MathBlock>
      </Example>

      <h3>L'Hôpital's Rule</h3>

      <Theorem
        title="L'Hôpital's Rule"
        proof={
          <>
            <p className="mb-3"><strong>0/0 case:</strong> Extend f, g to c by f(c) = g(c) = 0. They're now continuous on [c, x].</p>
            <p className="mb-3">By Cauchy's MVT: [f(x) - f(c)]/[g(x) - g(c)] = f'(ξ)/g'(ξ) for some ξ between c and x.</p>
            <p className="mb-3">Since f(c) = g(c) = 0: f(x)/g(x) = f'(ξ)/g'(ξ).</p>
            <p className="mb-3">As x → c, ξ → c also, so f(x)/g(x) → lim f'(x)/g'(x) (if this limit exists).</p>
            <p className="mb-3">The ∞/∞ case requires a more delicate argument using the same theorem.</p>
          </>
        }
      >
        <p>
          If <Math>{"\\lim_{x \\to c} f(x) = \\lim_{x \\to c} g(x) = 0"}</Math> (or both <Math>{"\\pm\\infty"}</Math>),
          and if <Math>{"\\lim_{x \\to c} \\frac{f'(x)}{g'(x)}"}</Math> exists, then:
        </p>
        <MathBlock>
          {`\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}`}
        </MathBlock>
      </Theorem>

      <Callout type="warning">
        <strong>Common Mistake:</strong> L'Hôpital's rule only applies to indeterminate forms
        <Math>{"0/0"}</Math> or <Math>{"\\infty/\\infty"}</Math>. Other indeterminate forms must first be
        converted.
      </Callout>

      <h3>Inverse Function Theorem</h3>

      <Theorem
        title="Inverse Function Theorem (1D)"
        proof={
          <>
            <p className="mb-3"><strong>Local invertibility:</strong> Since f'(c) ≠ 0 and f' is continuous, f' doesn't change sign near c.</p>
            <p className="mb-3">So f is strictly monotone near c, hence injective, so f⁻¹ exists locally.</p>
            <p className="mb-3"><strong>Derivative formula:</strong> By definition, if y = f(x), then f⁻¹(y) = x.</p>
            <p className="mb-3">Differentiating both sides implicitly: (f⁻¹)'(y) · f'(x) = 1.</p>
            <p className="mb-3">At y = f(c): (f⁻¹)'(f(c)) = 1/f'(c).</p>
          </>
        }
      >
        <p>
          If <Math>{"f"}</Math> is continuously differentiable and <Math>{"f'(c) \\neq 0"}</Math>, then
          <Math>{"f"}</Math> has a local inverse <Math>{"f^{-1}"}</Math> near <Math>{"c"}</Math>, and:
        </p>
        <MathBlock>
          {`(f^{-1})'(f(c)) = \\frac{1}{f'(c)}`}
        </MathBlock>
      </Theorem>

      <h3>Convexity</h3>

      <Definition title="Convex Function">
        <p>
          A function <Math>{"f"}</Math> is convex on an interval if for all <Math>{"x, y"}</Math> and <Math>{"t \\in [0, 1]"}</Math>:
        </p>
        <MathBlock>
          {`f(tx + (1-t)y) \\leq tf(x) + (1-t)f(y)`}
        </MathBlock>
      </Definition>

      <Theorem
        title="Second Derivative Test for Convexity"
        proof={
          <>
            <p className="mb-3">Let f'' ≥ 0 on I. For x, y ∈ I and t ∈ [0,1], let z = tx + (1-t)y.</p>
            <p className="mb-3">By Taylor's theorem: f(x) = f(z) + f'(z)(x-z) + (1/2)f''(ξ₁)(x-z)² ≥ f(z) + f'(z)(x-z).</p>
            <p className="mb-3">Similarly: f(y) ≥ f(z) + f'(z)(y-z).</p>
            <p className="mb-3">Multiply first by t, second by (1-t), and add:</p>
            <p className="mb-3">tf(x) + (1-t)f(y) ≥ f(z) + f'(z)[t(x-z) + (1-t)(y-z)] = f(z) = f(tx + (1-t)y).</p>
          </>
        }
      >
        <p>
          If <Math>f''(x) \geq 0</Math> on an interval, then <Math>f</Math> is convex on that interval.
        </p>
      </Theorem>

      <SectionQuiz
        sectionId={12}
        questions={section12Quiz}
        title="Applications of Derivatives Quiz"
      />
    </LessonLayout>
  );
}
