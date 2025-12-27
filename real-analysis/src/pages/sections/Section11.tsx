import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section11Quiz } from '@/data/quizzes';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Differentiation</h2>

      <p>
        The derivative measures the instantaneous rate of change of a function.
        In analysis, we define it rigorously as a limit and explore its properties
        and the powerful theorems that follow.
      </p>

      <Definition title="Derivative">
        <p>
          The derivative of <Math>f</Math> at <Math>c</Math> is:
        </p>
        <MathBlock>
          {`f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} = \\lim_{h \\to 0} \\frac{f(c + h) - f(c)}{h}`}
        </MathBlock>
        <p>if this limit exists.</p>
      </Definition>

      <Theorem title="Differentiability Implies Continuity">
        <p>
          If <Math>f</Math> is differentiable at <Math>c</Math>, then <Math>f</Math> is continuous at <Math>c</Math>.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Converse is False:</strong> <Math>f(x) = |x|</Math> is continuous at 0 but not differentiable there.
        The function has a "corner" where the left and right derivatives differ.
      </Callout>

      <h3>Differentiation Rules</h3>

      <Theorem title="Algebra of Derivatives">
        <p>If <Math>f</Math> and <Math>g</Math> are differentiable at <Math>c</Math>:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><Math>{"(f + g)'(c) = f'(c) + g'(c)"}</Math></li>
          <li><Math>{"(f \\cdot g)'(c) = f'(c)g(c) + f(c)g'(c)"}</Math> (Product Rule)</li>
          <li><Math>{"(f/g)'(c) = \\frac{f'(c)g(c) - f(c)g'(c)}{g(c)^2}"}</Math> if <Math>g(c) \neq 0</Math></li>
        </ul>
      </Theorem>

      <Theorem title="Chain Rule">
        <p>
          If <Math>g</Math> is differentiable at <Math>c</Math> and <Math>f</Math> is differentiable at <Math>g(c)</Math>:
        </p>
        <MathBlock>
          {`(f \\circ g)'(c) = f'(g(c)) \\cdot g'(c)`}
        </MathBlock>
      </Theorem>

      <h3>Mean Value Theorems</h3>

      <Theorem title="Rolle's Theorem">
        <p>
          If <Math>f</Math> is continuous on <Math>[a, b]</Math>, differentiable on <Math>(a, b)</Math>,
          and <Math>f(a) = f(b)</Math>, then there exists <Math>c \in (a, b)</Math> with <Math>f'(c) = 0</Math>.
        </p>
      </Theorem>

      <Theorem title="Mean Value Theorem">
        <p>
          If <Math>f</Math> is continuous on <Math>[a, b]</Math> and differentiable on <Math>(a, b)</Math>,
          then there exists <Math>c \in (a, b)</Math> such that:
        </p>
        <MathBlock>
          {`f'(c) = \\frac{f(b) - f(a)}{b - a}`}
        </MathBlock>
      </Theorem>

      <Callout type="important">
        <strong>Geometric Meaning:</strong> The MVT says that somewhere between <Math>a</Math> and <Math>b</Math>,
        the tangent line is parallel to the secant line.
      </Callout>

      <SectionQuiz
        sectionId={11}
        questions={section11Quiz}
        title="Differentiation Quiz"
      />
    </LessonLayout>
  );
}
