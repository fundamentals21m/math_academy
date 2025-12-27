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

      <Theorem title="Taylor's Theorem with Remainder">
        <p>
          If <Math>f</Math> is <Math>n+1</Math> times differentiable on an interval containing <Math>a</Math>
          and <Math>x</Math>, then:
        </p>
        <MathBlock>
          {`f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)`}
        </MathBlock>
        <p>where the Lagrange form of the remainder is:</p>
        <MathBlock>
          {`R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}`}
        </MathBlock>
        <p>for some <Math>\xi</Math> between <Math>a</Math> and <Math>x</Math>.</p>
      </Theorem>

      <Example title="Taylor Series of e^x">
        <p>For <Math>f(x) = e^x</Math>, all derivatives equal <Math>e^x</Math>, so:</p>
        <MathBlock>
          {`e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}`}
        </MathBlock>
      </Example>

      <h3>L'Hôpital's Rule</h3>

      <Theorem title="L'Hôpital's Rule">
        <p>
          If <Math>\lim_{'{x \\to c}'} f(x) = \lim_{'{x \\to c}'} g(x) = 0</Math> (or both <Math>\pm\infty</Math>),
          and if <Math>\lim_{'{x \\to c}'} \frac{'{f\'(x)}'}{'{g\'(x)}'}</Math> exists, then:
        </p>
        <MathBlock>
          {`\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}`}
        </MathBlock>
      </Theorem>

      <Callout type="warning">
        <strong>Common Mistake:</strong> L'Hôpital's rule only applies to indeterminate forms
        <Math>0/0</Math> or <Math>\infty/\infty</Math>. Other indeterminate forms must first be
        converted.
      </Callout>

      <h3>Inverse Function Theorem</h3>

      <Theorem title="Inverse Function Theorem (1D)">
        <p>
          If <Math>f</Math> is continuously differentiable and <Math>f'(c) \neq 0</Math>, then
          <Math>f</Math> has a local inverse <Math>f^{'{-1}'}</Math> near <Math>c</Math>, and:
        </p>
        <MathBlock>
          {`(f^{-1})'(f(c)) = \\frac{1}{f'(c)}`}
        </MathBlock>
      </Theorem>

      <h3>Convexity</h3>

      <Definition title="Convex Function">
        <p>
          A function <Math>f</Math> is convex on an interval if for all <Math>x, y</Math> and <Math>t \in [0, 1]</Math>:
        </p>
        <MathBlock>
          {`f(tx + (1-t)y) \\leq tf(x) + (1-t)f(y)`}
        </MathBlock>
      </Definition>

      <Theorem title="Second Derivative Test for Convexity">
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
