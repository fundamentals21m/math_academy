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
            <p className="mb-3">Define <Math>{`F(t) = f(x) - \\sum_{k=0}^n \\frac{f^{(k)}(t)}{k!}(x-t)^k`}</Math> for <Math>{`t`}</Math> between <Math>{`a`}</Math> and <Math>{`x`}</Math>.</p>
            <p className="mb-3">Note <Math>{`F(x) = f(x) - f(x) = 0`}</Math> (all terms vanish when <Math>{`t = x`}</Math>).</p>
            <p className="mb-3">Define <Math>{`G(t) = F(t) - \\left(\\frac{x-t}{x-a}\\right)^{n+1} F(a)`}</Math>. Then <Math>{`G(a) = G(x) = 0`}</Math>.</p>
            <p className="mb-3">By Rolle's Theorem, <Math>{`\\exists \\xi`}</Math> between <Math>{`a`}</Math> and <Math>{`x`}</Math> with <Math>{`G'(\\xi) = 0`}</Math>.</p>
            <p className="mb-3">Computing <Math>{`F'(t)`}</Math> (using product rule and cancellation): <Math>{`F'(t) = -\\frac{f^{(n+1)}(t)}{n!}(x-t)^n`}</Math>.</p>
            <p className="mb-3">Solving <Math>{`G'(\\xi) = 0`}</Math> gives <Math>{`F(a) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1} = R_n(x)`}</Math>.</p>
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
            <p className="mb-3"><strong>0/0 case:</strong> Extend <Math>{`f, g`}</Math> to <Math>{`c`}</Math> by <Math>{`f(c) = g(c) = 0`}</Math>. They're now continuous on <Math>{`[c, x]`}</Math>.</p>
            <p className="mb-3">By Cauchy's MVT: <Math>{`\\frac{f(x) - f(c)}{g(x) - g(c)} = \\frac{f'(\\xi)}{g'(\\xi)}`}</Math> for some <Math>{`\\xi`}</Math> between <Math>{`c`}</Math> and <Math>{`x`}</Math>.</p>
            <p className="mb-3">Since <Math>{`f(c) = g(c) = 0`}</Math>: <Math>{`\\frac{f(x)}{g(x)} = \\frac{f'(\\xi)}{g'(\\xi)}`}</Math>.</p>
            <p className="mb-3">As <Math>{`x \\to c`}</Math>, <Math>{`\\xi \\to c`}</Math> also, so <Math>{`\\frac{f(x)}{g(x)} \\to \\lim \\frac{f'(x)}{g'(x)}`}</Math> (if this limit exists).</p>
            <p className="mb-3">The <Math>{`\\infty/\\infty`}</Math> case requires a more delicate argument using the same theorem.</p>
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
            <p className="mb-3"><strong>Local invertibility:</strong> Since <Math>{`f'(c) \\neq 0`}</Math> and <Math>{`f'`}</Math> is continuous, <Math>{`f'`}</Math> doesn't change sign near <Math>{`c`}</Math>.</p>
            <p className="mb-3">So <Math>{`f`}</Math> is strictly monotone near <Math>{`c`}</Math>, hence injective, so <Math>{`f^{-1}`}</Math> exists locally.</p>
            <p className="mb-3"><strong>Derivative formula:</strong> By definition, if <Math>{`y = f(x)`}</Math>, then <Math>{`f^{-1}(y) = x`}</Math>.</p>
            <p className="mb-3">Differentiating both sides implicitly: <Math>{`(f^{-1})'(y) \\cdot f'(x) = 1`}</Math>.</p>
            <p className="mb-3">At <Math>{`y = f(c)`}</Math>: <Math>{`(f^{-1})'(f(c)) = 1/f'(c)`}</Math>.</p>
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
            <p className="mb-3">Let <Math>{`f'' \\geq 0`}</Math> on <Math>{`I`}</Math>. For <Math>{`x, y \\in I`}</Math> and <Math>{`t \\in [0,1]`}</Math>, let <Math>{`z = tx + (1-t)y`}</Math>.</p>
            <p className="mb-3">By Taylor's theorem:</p>
            <MathBlock>{`f(x) = f(z) + f'(z)(x-z) + \\frac{1}{2}f''(\\xi_1)(x-z)^2 \\geq f(z) + f'(z)(x-z)`}</MathBlock>
            <p className="mb-3">Similarly: <Math>{`f(y) \\geq f(z) + f'(z)(y-z)`}</Math>.</p>
            <p className="mb-3">Multiply first by <Math>{`t`}</Math>, second by <Math>{`(1-t)`}</Math>, and add:</p>
            <MathBlock>{`tf(x) + (1-t)f(y) \\geq f(z) + f'(z)[t(x-z) + (1-t)(y-z)] = f(z) = f(tx + (1-t)y)`}</MathBlock>
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
