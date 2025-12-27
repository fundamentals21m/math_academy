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

      <Theorem
        title="Differentiability Implies Continuity"
        proof={
          <>
            <p className="mb-3">We need to show lim(x→c) f(x) = f(c), i.e., lim(x→c) [f(x) - f(c)] = 0.</p>
            <p className="mb-3">Write: f(x) - f(c) = [(f(x) - f(c))/(x - c)] · (x - c) for x ≠ c.</p>
            <p className="mb-3">As x → c: the first factor → f'(c) (exists by differentiability), and (x - c) → 0.</p>
            <p className="mb-3">Therefore f(x) - f(c) → f'(c) · 0 = 0, so f is continuous at c.</p>
          </>
        }
      >
        <p>
          If <Math>f</Math> is differentiable at <Math>c</Math>, then <Math>f</Math> is continuous at <Math>c</Math>.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Converse is False:</strong> <Math>f(x) = |x|</Math> is continuous at 0 but not differentiable there.
        The function has a "corner" where the left and right derivatives differ.
      </Callout>

      <h3>Differentiation Rules</h3>

      <Theorem
        title="Algebra of Derivatives"
        proof={
          <>
            <p className="mb-3"><strong>Sum rule:</strong> [(f+g)(x) - (f+g)(c)]/(x-c) = [f(x)-f(c)]/(x-c) + [g(x)-g(c)]/(x-c) → f'(c) + g'(c).</p>
            <p className="mb-3"><strong>Product rule:</strong> [f(x)g(x) - f(c)g(c)]/(x-c) = f(x)[g(x)-g(c)]/(x-c) + g(c)[f(x)-f(c)]/(x-c).</p>
            <p className="mb-3">Since f is continuous at c: f(x) → f(c). So the limit is f(c)g'(c) + g(c)f'(c).</p>
            <p className="mb-3"><strong>Quotient rule:</strong> Apply product rule to f · (1/g), where (1/g)' = -g'/g² (proven separately).</p>
          </>
        }
      >
        <p>If <Math>f</Math> and <Math>g</Math> are differentiable at <Math>c</Math>:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><Math>{"(f + g)'(c) = f'(c) + g'(c)"}</Math></li>
          <li><Math>{"(f \\cdot g)'(c) = f'(c)g(c) + f(c)g'(c)"}</Math> (Product Rule)</li>
          <li><Math>{"(f/g)'(c) = \\frac{f'(c)g(c) - f(c)g'(c)}{g(c)^2}"}</Math> if <Math>g(c) \neq 0</Math></li>
        </ul>
      </Theorem>

      <Theorem
        title="Chain Rule"
        proof={
          <>
            <p className="mb-3">Define φ(y) = [f(y) - f(g(c))]/(y - g(c)) for y ≠ g(c), and φ(g(c)) = f'(g(c)).</p>
            <p className="mb-3">Then f(y) - f(g(c)) = φ(y)(y - g(c)) for all y, with φ continuous at g(c).</p>
            <p className="mb-3">Set y = g(x): f(g(x)) - f(g(c)) = φ(g(x))(g(x) - g(c)).</p>
            <p className="mb-3">Divide by (x - c): [f(g(x)) - f(g(c))]/(x-c) = φ(g(x)) · [g(x) - g(c)]/(x-c).</p>
            <p className="mb-3">As x → c: g(x) → g(c) (continuity), so φ(g(x)) → f'(g(c)), and [g(x)-g(c)]/(x-c) → g'(c).</p>
          </>
        }
      >
        <p>
          If <Math>g</Math> is differentiable at <Math>c</Math> and <Math>f</Math> is differentiable at <Math>g(c)</Math>:
        </p>
        <MathBlock>
          {`(f \\circ g)'(c) = f'(g(c)) \\cdot g'(c)`}
        </MathBlock>
      </Theorem>

      <h3>Mean Value Theorems</h3>

      <Theorem
        title="Rolle's Theorem"
        proof={
          <>
            <p className="mb-3">By the Extreme Value Theorem, f attains max M and min m on [a, b].</p>
            <p className="mb-3">Case 1: If M = m, then f is constant, so f' = 0 everywhere on (a, b).</p>
            <p className="mb-3">Case 2: If M ≠ m, at least one extremum is not at the endpoints (since f(a) = f(b)).</p>
            <p className="mb-3">Say f attains M at c ∈ (a, b). Then for x near c: f(x) ≤ f(c).</p>
            <p className="mb-3">From the left: [f(x) - f(c)]/(x - c) ≥ 0. From the right: [f(x) - f(c)]/(x - c) ≤ 0.</p>
            <p className="mb-3">Since f'(c) exists, both one-sided limits equal f'(c). So f'(c) ≥ 0 and f'(c) ≤ 0, hence f'(c) = 0.</p>
          </>
        }
      >
        <p>
          If <Math>f</Math> is continuous on <Math>[a, b]</Math>, differentiable on <Math>(a, b)</Math>,
          and <Math>f(a) = f(b)</Math>, then there exists <Math>c \in (a, b)</Math> with <Math>f'(c) = 0</Math>.
        </p>
      </Theorem>

      <Theorem
        title="Mean Value Theorem"
        proof={
          <>
            <p className="mb-3">Define g(x) = f(x) - f(a) - [(f(b) - f(a))/(b - a)](x - a).</p>
            <p className="mb-3">This subtracts the secant line from f. Note g(a) = 0 and g(b) = 0.</p>
            <p className="mb-3">By Rolle's Theorem, ∃c ∈ (a, b) with g'(c) = 0.</p>
            <p className="mb-3">But g'(x) = f'(x) - (f(b) - f(a))/(b - a).</p>
            <p className="mb-3">So f'(c) = (f(b) - f(a))/(b - a).</p>
          </>
        }
      >
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
