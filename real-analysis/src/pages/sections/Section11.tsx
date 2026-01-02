import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
          The derivative of <InlineMath>f</InlineMath> at <InlineMath>c</InlineMath> is:
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
            <p className="mb-3">We need to show <InlineMath>{`\\lim_{x \\to c} f(x) = f(c)`}</InlineMath>, i.e., <InlineMath>{`\\lim_{x \\to c} [f(x) - f(c)] = 0`}</InlineMath>.</p>
            <p className="mb-3">Write: <InlineMath>{`f(x) - f(c) = \\frac{f(x) - f(c)}{x - c} \\cdot (x - c)`}</InlineMath> for <InlineMath>{`x \\neq c`}</InlineMath>.</p>
            <p className="mb-3">As <InlineMath>{`x \\to c`}</InlineMath>: the first factor <InlineMath>{`\\to f'(c)`}</InlineMath> (exists by differentiability), and <InlineMath>{`(x - c) \\to 0`}</InlineMath>.</p>
            <p className="mb-3">Therefore <InlineMath>{`f(x) - f(c) \\to f'(c) \\cdot 0 = 0`}</InlineMath>, so <InlineMath>{`f`}</InlineMath> is continuous at <InlineMath>{`c`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>f</InlineMath> is differentiable at <InlineMath>c</InlineMath>, then <InlineMath>f</InlineMath> is continuous at <InlineMath>c</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Converse is False:</strong> <InlineMath>f(x) = |x|</InlineMath> is continuous at 0 but not differentiable there.
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
            <p className="mb-3">Since <InlineMath>{`f`}</InlineMath> is continuous at <InlineMath>{`c`}</InlineMath>: <InlineMath>{`f(x) \\to f(c)`}</InlineMath>. So the limit is <InlineMath>{`f(c)g'(c) + g(c)f'(c)`}</InlineMath>.</p>
            <p className="mb-3"><strong>Quotient rule:</strong> Apply product rule to <InlineMath>{`f \\cdot (1/g)`}</InlineMath>, where <InlineMath>{`(1/g)' = -g'/g^2`}</InlineMath> (proven separately).</p>
          </>
        }
      >
        <p>If <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath> are differentiable at <InlineMath>c</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><InlineMath>{"(f + g)'(c) = f'(c) + g'(c)"}</InlineMath></li>
          <li><InlineMath>{"(f \\cdot g)'(c) = f'(c)g(c) + f(c)g'(c)"}</InlineMath> (Product Rule)</li>
          <li><InlineMath>{"(f/g)'(c) = \\frac{f'(c)g(c) - f(c)g'(c)}{g(c)^2}"}</InlineMath> if <InlineMath>g(c) \neq 0</InlineMath></li>
        </ul>
      </Theorem>

      <Theorem
        title="Chain Rule"
        proof={
          <>
            <p className="mb-3">Define <InlineMath>{`\\varphi(y) = \\frac{f(y) - f(g(c))}{y - g(c)}`}</InlineMath> for <InlineMath>{`y \\neq g(c)`}</InlineMath>, and <InlineMath>{`\\varphi(g(c)) = f'(g(c))`}</InlineMath>.</p>
            <p className="mb-3">Then <InlineMath>{`f(y) - f(g(c)) = \\varphi(y)(y - g(c))`}</InlineMath> for all <InlineMath>{`y`}</InlineMath>, with <InlineMath>{`\\varphi`}</InlineMath> continuous at <InlineMath>{`g(c)`}</InlineMath>.</p>
            <p className="mb-3">Set <InlineMath>{`y = g(x)`}</InlineMath>: <InlineMath>{`f(g(x)) - f(g(c)) = \\varphi(g(x))(g(x) - g(c))`}</InlineMath>.</p>
            <p className="mb-3">Divide by <InlineMath>{`(x - c)`}</InlineMath>:</p>
            <MathBlock>{`\\frac{f(g(x)) - f(g(c))}{x-c} = \\varphi(g(x)) \\cdot \\frac{g(x) - g(c)}{x-c}`}</MathBlock>
            <p className="mb-3">As <InlineMath>{`x \\to c`}</InlineMath>: <InlineMath>{`g(x) \\to g(c)`}</InlineMath> (continuity), so <InlineMath>{`\\varphi(g(x)) \\to f'(g(c))`}</InlineMath>, and <InlineMath>{`\\frac{g(x)-g(c)}{x-c} \\to g'(c)`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>g</InlineMath> is differentiable at <InlineMath>c</InlineMath> and <InlineMath>f</InlineMath> is differentiable at <InlineMath>g(c)</InlineMath>:
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
            <p className="mb-3">By the Extreme Value Theorem, <InlineMath>{`f`}</InlineMath> attains max <InlineMath>{`M`}</InlineMath> and min <InlineMath>{`m`}</InlineMath> on <InlineMath>{`[a, b]`}</InlineMath>.</p>
            <p className="mb-3"><strong>Case 1:</strong> If <InlineMath>{`M = m`}</InlineMath>, then <InlineMath>{`f`}</InlineMath> is constant, so <InlineMath>{`f' = 0`}</InlineMath> everywhere on <InlineMath>{`(a, b)`}</InlineMath>.</p>
            <p className="mb-3"><strong>Case 2:</strong> If <InlineMath>{`M \\neq m`}</InlineMath>, at least one extremum is not at the endpoints (since <InlineMath>{`f(a) = f(b)`}</InlineMath>).</p>
            <p className="mb-3">Say <InlineMath>{`f`}</InlineMath> attains <InlineMath>{`M`}</InlineMath> at <InlineMath>{`c \\in (a, b)`}</InlineMath>. Then for <InlineMath>{`x`}</InlineMath> near <InlineMath>{`c`}</InlineMath>: <InlineMath>{`f(x) \\leq f(c)`}</InlineMath>.</p>
            <p className="mb-3">From the left: <InlineMath>{`\\frac{f(x) - f(c)}{x - c} \\geq 0`}</InlineMath>. From the right: <InlineMath>{`\\frac{f(x) - f(c)}{x - c} \\leq 0`}</InlineMath>.</p>
            <p className="mb-3">Since <InlineMath>{`f'(c)`}</InlineMath> exists, both one-sided limits equal <InlineMath>{`f'(c)`}</InlineMath>. So <InlineMath>{`f'(c) \\geq 0`}</InlineMath> and <InlineMath>{`f'(c) \\leq 0`}</InlineMath>, hence <InlineMath>{`f'(c) = 0`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>f</InlineMath> is continuous on <InlineMath>[a, b]</InlineMath>, differentiable on <InlineMath>(a, b)</InlineMath>,
          and <InlineMath>f(a) = f(b)</InlineMath>, then there exists <InlineMath>c \in (a, b)</InlineMath> with <InlineMath>f'(c) = 0</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="Mean Value Theorem"
        proof={
          <>
            <p className="mb-3">Define:</p>
            <MathBlock>{`g(x) = f(x) - f(a) - \\frac{f(b) - f(a)}{b - a}(x - a)`}</MathBlock>
            <p className="mb-3">This subtracts the secant line from <InlineMath>{`f`}</InlineMath>. Note <InlineMath>{`g(a) = 0`}</InlineMath> and <InlineMath>{`g(b) = 0`}</InlineMath>.</p>
            <p className="mb-3">By Rolle's Theorem, <InlineMath>{`\\exists c \\in (a, b)`}</InlineMath> with <InlineMath>{`g'(c) = 0`}</InlineMath>.</p>
            <p className="mb-3">But <InlineMath>{`g'(x) = f'(x) - \\frac{f(b) - f(a)}{b - a}`}</InlineMath>.</p>
            <p className="mb-3">So <InlineMath>{`f'(c) = \\frac{f(b) - f(a)}{b - a}`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>f</InlineMath> is continuous on <InlineMath>[a, b]</InlineMath> and differentiable on <InlineMath>(a, b)</InlineMath>,
          then there exists <InlineMath>c \in (a, b)</InlineMath> such that:
        </p>
        <MathBlock>
          {`f'(c) = \\frac{f(b) - f(a)}{b - a}`}
        </MathBlock>
      </Theorem>

      <Callout type="important">
        <strong>Geometric Meaning:</strong> The MVT says that somewhere between <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>,
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
