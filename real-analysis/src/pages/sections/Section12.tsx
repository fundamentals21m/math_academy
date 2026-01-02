import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
            <p className="mb-3">Define <InlineMath>{`F(t) = f(x) - \\sum_{k=0}^n \\frac{f^{(k)}(t)}{k!}(x-t)^k`}</InlineMath> for <InlineMath>{`t`}</InlineMath> between <InlineMath>{`a`}</InlineMath> and <InlineMath>{`x`}</InlineMath>.</p>
            <p className="mb-3">Note <InlineMath>{`F(x) = f(x) - f(x) = 0`}</InlineMath> (all terms vanish when <InlineMath>{`t = x`}</InlineMath>).</p>
            <p className="mb-3">Define <InlineMath>{`G(t) = F(t) - \\left(\\frac{x-t}{x-a}\\right)^{n+1} F(a)`}</InlineMath>. Then <InlineMath>{`G(a) = G(x) = 0`}</InlineMath>.</p>
            <p className="mb-3">By Rolle's Theorem, <InlineMath>{`\\exists \\xi`}</InlineMath> between <InlineMath>{`a`}</InlineMath> and <InlineMath>{`x`}</InlineMath> with <InlineMath>{`G'(\\xi) = 0`}</InlineMath>.</p>
            <p className="mb-3">Computing <InlineMath>{`F'(t)`}</InlineMath> (using product rule and cancellation): <InlineMath>{`F'(t) = -\\frac{f^{(n+1)}(t)}{n!}(x-t)^n`}</InlineMath>.</p>
            <p className="mb-3">Solving <InlineMath>{`G'(\\xi) = 0`}</InlineMath> gives <InlineMath>{`F(a) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1} = R_n(x)`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"f"}</InlineMath> is <InlineMath>{"n+1"}</InlineMath> times differentiable on an interval containing <InlineMath>{"a"}</InlineMath>
          and <InlineMath>{"x"}</InlineMath>, then:
        </p>
        <MathBlock>
          {`f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)`}
        </MathBlock>
        <p>where the Lagrange form of the remainder is:</p>
        <MathBlock>
          {`R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}`}
        </MathBlock>
        <p>for some <InlineMath>{"\\xi"}</InlineMath> between <InlineMath>{"a"}</InlineMath> and <InlineMath>{"x"}</InlineMath>.</p>
      </Theorem>

      <Example title="Taylor Series of e^x">
        <p>For <InlineMath>{"f(x) = e^x"}</InlineMath>, all derivatives equal <InlineMath>{"e^x"}</InlineMath>, so:</p>
        <MathBlock>
          {`e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}`}
        </MathBlock>
      </Example>

      <h3>L'Hôpital's Rule</h3>

      <Theorem
        title="L'Hôpital's Rule"
        proof={
          <>
            <p className="mb-3"><strong>0/0 case:</strong> Extend <InlineMath>{`f, g`}</InlineMath> to <InlineMath>{`c`}</InlineMath> by <InlineMath>{`f(c) = g(c) = 0`}</InlineMath>. They're now continuous on <InlineMath>{`[c, x]`}</InlineMath>.</p>
            <p className="mb-3">By Cauchy's MVT: <InlineMath>{`\\frac{f(x) - f(c)}{g(x) - g(c)} = \\frac{f'(\\xi)}{g'(\\xi)}`}</InlineMath> for some <InlineMath>{`\\xi`}</InlineMath> between <InlineMath>{`c`}</InlineMath> and <InlineMath>{`x`}</InlineMath>.</p>
            <p className="mb-3">Since <InlineMath>{`f(c) = g(c) = 0`}</InlineMath>: <InlineMath>{`\\frac{f(x)}{g(x)} = \\frac{f'(\\xi)}{g'(\\xi)}`}</InlineMath>.</p>
            <p className="mb-3">As <InlineMath>{`x \\to c`}</InlineMath>, <InlineMath>{`\\xi \\to c`}</InlineMath> also, so <InlineMath>{`\\frac{f(x)}{g(x)} \\to \\lim \\frac{f'(x)}{g'(x)}`}</InlineMath> (if this limit exists).</p>
            <p className="mb-3">The <InlineMath>{`\\infty/\\infty`}</InlineMath> case requires a more delicate argument using the same theorem.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"\\lim_{x \\to c} f(x) = \\lim_{x \\to c} g(x) = 0"}</InlineMath> (or both <InlineMath>{"\\pm\\infty"}</InlineMath>),
          and if <InlineMath>{"\\lim_{x \\to c} \\frac{f'(x)}{g'(x)}"}</InlineMath> exists, then:
        </p>
        <MathBlock>
          {`\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}`}
        </MathBlock>
      </Theorem>

      <Callout type="warning">
        <strong>Common Mistake:</strong> L'Hôpital's rule only applies to indeterminate forms
        <InlineMath>{"0/0"}</InlineMath> or <InlineMath>{"\\infty/\\infty"}</InlineMath>. Other indeterminate forms must first be
        converted.
      </Callout>

      <h3>Inverse Function Theorem</h3>

      <Theorem
        title="Inverse Function Theorem (1D)"
        proof={
          <>
            <p className="mb-3"><strong>Local invertibility:</strong> Since <InlineMath>{`f'(c) \\neq 0`}</InlineMath> and <InlineMath>{`f'`}</InlineMath> is continuous, <InlineMath>{`f'`}</InlineMath> doesn't change sign near <InlineMath>{`c`}</InlineMath>.</p>
            <p className="mb-3">So <InlineMath>{`f`}</InlineMath> is strictly monotone near <InlineMath>{`c`}</InlineMath>, hence injective, so <InlineMath>{`f^{-1}`}</InlineMath> exists locally.</p>
            <p className="mb-3"><strong>Derivative formula:</strong> By definition, if <InlineMath>{`y = f(x)`}</InlineMath>, then <InlineMath>{`f^{-1}(y) = x`}</InlineMath>.</p>
            <p className="mb-3">Differentiating both sides implicitly: <InlineMath>{`(f^{-1})'(y) \\cdot f'(x) = 1`}</InlineMath>.</p>
            <p className="mb-3">At <InlineMath>{`y = f(c)`}</InlineMath>: <InlineMath>{`(f^{-1})'(f(c)) = 1/f'(c)`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"f"}</InlineMath> is continuously differentiable and <InlineMath>{"f'(c) \\neq 0"}</InlineMath>, then
          <InlineMath>{"f"}</InlineMath> has a local inverse <InlineMath>{"f^{-1}"}</InlineMath> near <InlineMath>{"c"}</InlineMath>, and:
        </p>
        <MathBlock>
          {`(f^{-1})'(f(c)) = \\frac{1}{f'(c)}`}
        </MathBlock>
      </Theorem>

      <h3>Convexity</h3>

      <Definition title="Convex Function">
        <p>
          A function <InlineMath>{"f"}</InlineMath> is convex on an interval if for all <InlineMath>{"x, y"}</InlineMath> and <InlineMath>{"t \\in [0, 1]"}</InlineMath>:
        </p>
        <MathBlock>
          {`f(tx + (1-t)y) \\leq tf(x) + (1-t)f(y)`}
        </MathBlock>
      </Definition>

      <Theorem
        title="Second Derivative Test for Convexity"
        proof={
          <>
            <p className="mb-3">Let <InlineMath>{`f'' \\geq 0`}</InlineMath> on <InlineMath>{`I`}</InlineMath>. For <InlineMath>{`x, y \\in I`}</InlineMath> and <InlineMath>{`t \\in [0,1]`}</InlineMath>, let <InlineMath>{`z = tx + (1-t)y`}</InlineMath>.</p>
            <p className="mb-3">By Taylor's theorem:</p>
            <MathBlock>{`f(x) = f(z) + f'(z)(x-z) + \\frac{1}{2}f''(\\xi_1)(x-z)^2 \\geq f(z) + f'(z)(x-z)`}</MathBlock>
            <p className="mb-3">Similarly: <InlineMath>{`f(y) \\geq f(z) + f'(z)(y-z)`}</InlineMath>.</p>
            <p className="mb-3">Multiply first by <InlineMath>{`t`}</InlineMath>, second by <InlineMath>{`(1-t)`}</InlineMath>, and add:</p>
            <MathBlock>{`tf(x) + (1-t)f(y) \\geq f(z) + f'(z)[t(x-z) + (1-t)(y-z)] = f(z) = f(tx + (1-t)y)`}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>f''(x) \geq 0</InlineMath> on an interval, then <InlineMath>f</InlineMath> is convex on that interval.
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
