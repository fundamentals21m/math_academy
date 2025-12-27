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
            <p className="mb-3">We need to show <Math>{`\\lim_{x \\to c} f(x) = f(c)`}</Math>, i.e., <Math>{`\\lim_{x \\to c} [f(x) - f(c)] = 0`}</Math>.</p>
            <p className="mb-3">Write: <Math>{`f(x) - f(c) = \\frac{f(x) - f(c)}{x - c} \\cdot (x - c)`}</Math> for <Math>{`x \\neq c`}</Math>.</p>
            <p className="mb-3">As <Math>{`x \\to c`}</Math>: the first factor <Math>{`\\to f'(c)`}</Math> (exists by differentiability), and <Math>{`(x - c) \\to 0`}</Math>.</p>
            <p className="mb-3">Therefore <Math>{`f(x) - f(c) \\to f'(c) \\cdot 0 = 0`}</Math>, so <Math>{`f`}</Math> is continuous at <Math>{`c`}</Math>.</p>
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
            <p className="mb-3"><strong>Sum rule:</strong></p>
            <MathBlock>{`\\frac{(f+g)(x) - (f+g)(c)}{x-c} = \\frac{f(x)-f(c)}{x-c} + \\frac{g(x)-g(c)}{x-c} \\to f'(c) + g'(c)`}</MathBlock>
            <p className="mb-3"><strong>Product rule:</strong></p>
            <MathBlock>{`\\frac{f(x)g(x) - f(c)g(c)}{x-c} = f(x)\\frac{g(x)-g(c)}{x-c} + g(c)\\frac{f(x)-f(c)}{x-c}`}</MathBlock>
            <p className="mb-3">Since <Math>{`f`}</Math> is continuous at <Math>{`c`}</Math>: <Math>{`f(x) \\to f(c)`}</Math>. So the limit is <Math>{`f(c)g'(c) + g(c)f'(c)`}</Math>.</p>
            <p className="mb-3"><strong>Quotient rule:</strong> Apply product rule to <Math>{`f \\cdot (1/g)`}</Math>, where <Math>{`(1/g)' = -g'/g^2`}</Math> (proven separately).</p>
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
            <p className="mb-3">Define <Math>{`\\varphi(y) = \\frac{f(y) - f(g(c))}{y - g(c)}`}</Math> for <Math>{`y \\neq g(c)`}</Math>, and <Math>{`\\varphi(g(c)) = f'(g(c))`}</Math>.</p>
            <p className="mb-3">Then <Math>{`f(y) - f(g(c)) = \\varphi(y)(y - g(c))`}</Math> for all <Math>{`y`}</Math>, with <Math>{`\\varphi`}</Math> continuous at <Math>{`g(c)`}</Math>.</p>
            <p className="mb-3">Set <Math>{`y = g(x)`}</Math>: <Math>{`f(g(x)) - f(g(c)) = \\varphi(g(x))(g(x) - g(c))`}</Math>.</p>
            <p className="mb-3">Divide by <Math>{`(x - c)`}</Math>:</p>
            <MathBlock>{`\\frac{f(g(x)) - f(g(c))}{x-c} = \\varphi(g(x)) \\cdot \\frac{g(x) - g(c)}{x-c}`}</MathBlock>
            <p className="mb-3">As <Math>{`x \\to c`}</Math>: <Math>{`g(x) \\to g(c)`}</Math> (continuity), so <Math>{`\\varphi(g(x)) \\to f'(g(c))`}</Math>, and <Math>{`\\frac{g(x)-g(c)}{x-c} \\to g'(c)`}</Math>.</p>
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
            <p className="mb-3">By the Extreme Value Theorem, <Math>{`f`}</Math> attains max <Math>{`M`}</Math> and min <Math>{`m`}</Math> on <Math>{`[a, b]`}</Math>.</p>
            <p className="mb-3"><strong>Case 1:</strong> If <Math>{`M = m`}</Math>, then <Math>{`f`}</Math> is constant, so <Math>{`f' = 0`}</Math> everywhere on <Math>{`(a, b)`}</Math>.</p>
            <p className="mb-3"><strong>Case 2:</strong> If <Math>{`M \\neq m`}</Math>, at least one extremum is not at the endpoints (since <Math>{`f(a) = f(b)`}</Math>).</p>
            <p className="mb-3">Say <Math>{`f`}</Math> attains <Math>{`M`}</Math> at <Math>{`c \\in (a, b)`}</Math>. Then for <Math>{`x`}</Math> near <Math>{`c`}</Math>: <Math>{`f(x) \\leq f(c)`}</Math>.</p>
            <p className="mb-3">From the left: <Math>{`\\frac{f(x) - f(c)}{x - c} \\geq 0`}</Math>. From the right: <Math>{`\\frac{f(x) - f(c)}{x - c} \\leq 0`}</Math>.</p>
            <p className="mb-3">Since <Math>{`f'(c)`}</Math> exists, both one-sided limits equal <Math>{`f'(c)`}</Math>. So <Math>{`f'(c) \\geq 0`}</Math> and <Math>{`f'(c) \\leq 0`}</Math>, hence <Math>{`f'(c) = 0`}</Math>.</p>
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
            <p className="mb-3">Define:</p>
            <MathBlock>{`g(x) = f(x) - f(a) - \\frac{f(b) - f(a)}{b - a}(x - a)`}</MathBlock>
            <p className="mb-3">This subtracts the secant line from <Math>{`f`}</Math>. Note <Math>{`g(a) = 0`}</Math> and <Math>{`g(b) = 0`}</Math>.</p>
            <p className="mb-3">By Rolle's Theorem, <Math>{`\\exists c \\in (a, b)`}</Math> with <Math>{`g'(c) = 0`}</Math>.</p>
            <p className="mb-3">But <Math>{`g'(x) = f'(x) - \\frac{f(b) - f(a)}{b - a}`}</Math>.</p>
            <p className="mb-3">So <Math>{`f'(c) = \\frac{f(b) - f(a)}{b - a}`}</Math>.</p>
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
