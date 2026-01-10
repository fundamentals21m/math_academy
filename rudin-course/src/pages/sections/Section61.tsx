import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <h2 className="text-2xl font-semibold mb-4">The Contraction Principle</h2>

      <p className="mb-4">
        The contraction principle, also known as the Banach fixed point theorem, is one of the
        most powerful tools in analysis. It guarantees the existence and uniqueness of fixed points
        for contraction mappings on complete metric spaces. This principle underlies the proofs
        of the inverse and implicit function theorems.
      </p>

      <Definition title="9.22 - Contraction">
        <p className="mb-3">
          Let <InlineMath>{'(X, d)'}</InlineMath> be a metric space. A mapping <InlineMath>{'\\varphi: X \\to X'}</InlineMath>
          is called a <em>contraction</em> if there exists a constant <InlineMath>{'c'}</InlineMath> with <InlineMath>{'0 \\leq c < 1'}</InlineMath>
          such that
        </p>
        <MathBlock>{'d(\\varphi(\\mathbf{x}), \\varphi(\\mathbf{y})) \\leq c \\cdot d(\\mathbf{x}, \\mathbf{y})'}</MathBlock>
        <p className="mt-3">
          for all <InlineMath>{'\\mathbf{x}, \\mathbf{y} \\in X'}</InlineMath>. The constant <InlineMath>{'c'}</InlineMath> is called
          the <em>contraction constant</em>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          A contraction mapping strictly decreases distances between points. If <InlineMath>{'\\mathbf{x} \\neq \\mathbf{y}'}</InlineMath>,
          then <InlineMath>{'d(\\varphi(\\mathbf{x}), \\varphi(\\mathbf{y})) < d(\\mathbf{x}, \\mathbf{y})'}</InlineMath>.
          The key requirement is that the contraction factor <InlineMath>{'c'}</InlineMath> is <em>uniformly</em> bounded away from <InlineMath>{'1'}</InlineMath>.
        </p>
      </Callout>

      <Definition title="9.23 - Fixed Point">
        <p className="mb-3">
          A point <InlineMath>{'\\mathbf{x} \\in X'}</InlineMath> is called a <em>fixed point</em> of <InlineMath>{'\\varphi: X \\to X'}</InlineMath> if
        </p>
        <MathBlock>{'\\varphi(\\mathbf{x}) = \\mathbf{x}'}</MathBlock>
      </Definition>

      <Theorem
        title="9.24 - The Contraction Principle (Banach Fixed Point Theorem)"
        proof={
          <>
            <p className="mb-3">
              <strong>Existence:</strong> Pick any <InlineMath>{'\\mathbf{x}_0 \\in X'}</InlineMath> and define the iteration
            </p>
            <MathBlock>{'\\mathbf{x}_{n+1} = \\varphi(\\mathbf{x}_n), \\quad n = 0, 1, 2, \\ldots'}</MathBlock>
            <p className="mb-3">
              We show <InlineMath>{'\\{\\mathbf{x}_n\\}'}</InlineMath> is Cauchy. For any <InlineMath>{'n \\geq 1'}</InlineMath>:
            </p>
            <MathBlock>{'d(\\mathbf{x}_{n+1}, \\mathbf{x}_n) = d(\\varphi(\\mathbf{x}_n), \\varphi(\\mathbf{x}_{n-1})) \\leq c \\cdot d(\\mathbf{x}_n, \\mathbf{x}_{n-1})'}</MathBlock>
            <p className="mb-3">
              By induction, <InlineMath>{'d(\\mathbf{x}_{n+1}, \\mathbf{x}_n) \\leq c^n \\cdot d(\\mathbf{x}_1, \\mathbf{x}_0)'}</InlineMath>.
              For <InlineMath>{'m > n'}</InlineMath>, the triangle inequality gives:
            </p>
            <MathBlock>{'d(\\mathbf{x}_m, \\mathbf{x}_n) \\leq \\sum_{k=n}^{m-1} d(\\mathbf{x}_{k+1}, \\mathbf{x}_k) \\leq d(\\mathbf{x}_1, \\mathbf{x}_0) \\sum_{k=n}^{m-1} c^k \\leq \\frac{c^n}{1-c} d(\\mathbf{x}_1, \\mathbf{x}_0)'}</MathBlock>
            <p className="mb-3">
              Since <InlineMath>{'c^n \\to 0'}</InlineMath>, the sequence is Cauchy. By completeness of <InlineMath>{'X'}</InlineMath>,
              there exists <InlineMath>{'\\mathbf{x} \\in X'}</InlineMath> with <InlineMath>{'\\mathbf{x}_n \\to \\mathbf{x}'}</InlineMath>.
            </p>
            <p className="mb-3">
              Since <InlineMath>{'\\varphi'}</InlineMath> is continuous (being a contraction):
            </p>
            <MathBlock>{'\\varphi(\\mathbf{x}) = \\varphi(\\lim_{n \\to \\infty} \\mathbf{x}_n) = \\lim_{n \\to \\infty} \\varphi(\\mathbf{x}_n) = \\lim_{n \\to \\infty} \\mathbf{x}_{n+1} = \\mathbf{x}'}</MathBlock>
            <p className="mb-3">
              <strong>Uniqueness:</strong> Suppose <InlineMath>{'\\mathbf{x}'}</InlineMath> and <InlineMath>{'\\mathbf{y}'}</InlineMath> are both fixed points. Then
            </p>
            <MathBlock>{'d(\\mathbf{x}, \\mathbf{y}) = d(\\varphi(\\mathbf{x}), \\varphi(\\mathbf{y})) \\leq c \\cdot d(\\mathbf{x}, \\mathbf{y})'}</MathBlock>
            <p>
              Since <InlineMath>{'c < 1'}</InlineMath>, this implies <InlineMath>{'d(\\mathbf{x}, \\mathbf{y}) = 0'}</InlineMath>, so <InlineMath>{'\\mathbf{x} = \\mathbf{y}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'X'}</InlineMath> is a complete metric space and <InlineMath>{'\\varphi: X \\to X'}</InlineMath> is a contraction,
          then <InlineMath>{'\\varphi'}</InlineMath> has exactly one fixed point.
        </p>
        <p className="mb-3">
          Moreover, for any starting point <InlineMath>{'\\mathbf{x}_0 \\in X'}</InlineMath>, the iteration
          <InlineMath>{'\\mathbf{x}_{n+1} = \\varphi(\\mathbf{x}_n)'}</InlineMath> converges to the fixed point.
        </p>
      </Theorem>

      <Example title="9.25 - Examples of the Contraction Principle">
        <p className="mb-3">
          <strong>(a)</strong> Let <InlineMath>{'\\varphi(x) = \\cos(x)'}</InlineMath> on <InlineMath>{'[0, 1]'}</InlineMath>.
          Since <InlineMath>{'|\\varphi\'(x)| = |\\sin(x)| \\leq \\sin(1) < 1'}</InlineMath>, this is a contraction
          by the mean value theorem. The unique fixed point satisfies <InlineMath>{'x = \\cos(x)'}</InlineMath>,
          approximately <InlineMath>{'x \\approx 0.739'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>(b)</strong> Let <InlineMath>{'\\varphi(x) = \\frac{1}{2}(x + a/x)'}</InlineMath> for <InlineMath>{'a > 0'}</InlineMath>,
          <InlineMath>{'x > 0'}</InlineMath>. On a suitable interval around <InlineMath>{'\\sqrt{a}'}</InlineMath>, this is a contraction.
          The fixed point is <InlineMath>{'\\sqrt{a}'}</InlineMath>, and the iteration is Newton's method for square roots.
        </p>
        <p className="mb-3">
          <strong>(c)</strong> Consider the integral equation
        </p>
        <MathBlock>{'f(x) = g(x) + \\lambda \\int_a^b K(x, t) f(t) \\, dt'}</MathBlock>
        <p>
          where <InlineMath>{'g'}</InlineMath> and <InlineMath>{'K'}</InlineMath> are given continuous functions. For sufficiently small <InlineMath>{'|\\lambda|'}</InlineMath>,
          the operator <InlineMath>{'T: f \\mapsto g + \\lambda \\int K(\\cdot, t)f(t)\\,dt'}</InlineMath> is a contraction on <InlineMath>{'C([a,b])'}</InlineMath>.
        </p>
      </Example>

      <Theorem
        title="9.26 - Error Estimate"
        proof={
          <>
            <p className="mb-3">
              From the proof of the contraction principle, for <InlineMath>{'m > n'}</InlineMath>:
            </p>
            <MathBlock>{'d(\\mathbf{x}_m, \\mathbf{x}_n) \\leq \\frac{c^n}{1-c} d(\\mathbf{x}_1, \\mathbf{x}_0)'}</MathBlock>
            <p className="mb-3">
              Taking <InlineMath>{'m \\to \\infty'}</InlineMath> and using continuity of <InlineMath>{'d'}</InlineMath>:
            </p>
            <MathBlock>{'d(\\mathbf{x}, \\mathbf{x}_n) \\leq \\frac{c^n}{1-c} d(\\mathbf{x}_1, \\mathbf{x}_0)'}</MathBlock>
            <p>
              The alternative form follows from <InlineMath>{'d(\\mathbf{x}_{n+1}, \\mathbf{x}_n) \\leq c^n d(\\mathbf{x}_1, \\mathbf{x}_0)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          With the notation of the contraction principle, the following error estimates hold:
        </p>
        <MathBlock>{'d(\\mathbf{x}_n, \\mathbf{x}) \\leq \\frac{c^n}{1-c} d(\\mathbf{x}_1, \\mathbf{x}_0)'}</MathBlock>
        <MathBlock>{'d(\\mathbf{x}_n, \\mathbf{x}) \\leq \\frac{c}{1-c} d(\\mathbf{x}_n, \\mathbf{x}_{n-1})'}</MathBlock>
        <p className="mt-3">
          These estimates give a priori and a posteriori bounds on the error after <InlineMath>{'n'}</InlineMath> iterations.
        </p>
      </Theorem>

      <Callout type="warning" title="Completeness is Essential">
        <p className="mb-3">
          Completeness is crucial. The map <InlineMath>{'\\varphi(x) = x/2'}</InlineMath> on <InlineMath>{'(0, 1]'}</InlineMath> is a contraction
          with <InlineMath>{'c = 1/2'}</InlineMath>, but the only fixed point would be <InlineMath>{'0'}</InlineMath>, which is not in the space.
          On the complete space <InlineMath>{'[0, 1]'}</InlineMath>, the fixed point <InlineMath>{'0'}</InlineMath> exists.
        </p>
      </Callout>

      <Theorem
        title="9.27 - Contraction Principle with Parameter"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\mathbf{x}(\\mathbf{y})'}</InlineMath> denote the unique fixed point of <InlineMath>{'\\varphi(\\cdot, \\mathbf{y})'}</InlineMath>.
              For two parameters <InlineMath>{'\\mathbf{y}'}</InlineMath> and <InlineMath>{'\\mathbf{y}\''}</InlineMath>:
            </p>
            <MathBlock>{'d(\\mathbf{x}(\\mathbf{y}), \\mathbf{x}(\\mathbf{y}\')) = d(\\varphi(\\mathbf{x}(\\mathbf{y}), \\mathbf{y}), \\varphi(\\mathbf{x}(\\mathbf{y}\'), \\mathbf{y}\'))'}</MathBlock>
            <p className="mb-3">
              Using the triangle inequality:
            </p>
            <MathBlock>{'\\leq d(\\varphi(\\mathbf{x}(\\mathbf{y}), \\mathbf{y}), \\varphi(\\mathbf{x}(\\mathbf{y}\'), \\mathbf{y})) + d(\\varphi(\\mathbf{x}(\\mathbf{y}\'), \\mathbf{y}), \\varphi(\\mathbf{x}(\\mathbf{y}\'), \\mathbf{y}\'))'}</MathBlock>
            <MathBlock>{'\\leq c \\cdot d(\\mathbf{x}(\\mathbf{y}), \\mathbf{x}(\\mathbf{y}\')) + \\epsilon(\\mathbf{y}, \\mathbf{y}\')'}</MathBlock>
            <p className="mb-3">
              where <InlineMath>{'\\epsilon(\\mathbf{y}, \\mathbf{y}\') \\to 0'}</InlineMath> as <InlineMath>{'\\mathbf{y}\' \\to \\mathbf{y}'}</InlineMath>
              by continuity of <InlineMath>{'\\varphi'}</InlineMath> in the second variable. Rearranging:
            </p>
            <MathBlock>{'d(\\mathbf{x}(\\mathbf{y}), \\mathbf{x}(\\mathbf{y}\')) \\leq \\frac{\\epsilon(\\mathbf{y}, \\mathbf{y}\')}{1-c} \\to 0'}</MathBlock>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'X'}</InlineMath> be a complete metric space and <InlineMath>{'Y'}</InlineMath> a metric space.
          Suppose <InlineMath>{'\\varphi: X \\times Y \\to X'}</InlineMath> satisfies:
        </p>
        <ul className="list-none space-y-2 mb-3">
          <li>(a) For each <InlineMath>{'\\mathbf{y} \\in Y'}</InlineMath>, the map <InlineMath>{'\\mathbf{x} \\mapsto \\varphi(\\mathbf{x}, \\mathbf{y})'}</InlineMath> is a contraction with constant <InlineMath>{'c < 1'}</InlineMath> independent of <InlineMath>{'\\mathbf{y}'}</InlineMath></li>
          <li>(b) <InlineMath>{'\\varphi'}</InlineMath> is continuous in <InlineMath>{'\\mathbf{y}'}</InlineMath>, uniformly in <InlineMath>{'\\mathbf{x}'}</InlineMath></li>
        </ul>
        <p>
          Then the unique fixed point <InlineMath>{'\\mathbf{x}(\\mathbf{y})'}</InlineMath> depends continuously on <InlineMath>{'\\mathbf{y}'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="9.28 - Application to Differential Equations">
        <p className="mb-3">
          Consider the initial value problem
        </p>
        <MathBlock>{'\\frac{d\\mathbf{x}}{dt} = \\mathbf{f}(t, \\mathbf{x}), \\quad \\mathbf{x}(t_0) = \\mathbf{x}_0'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'\\mathbf{f}'}</InlineMath> satisfies a Lipschitz condition in <InlineMath>{'\\mathbf{x}'}</InlineMath>:
          <InlineMath>{'|\\mathbf{f}(t, \\mathbf{x}) - \\mathbf{f}(t, \\mathbf{y})| \\leq L|\\mathbf{x} - \\mathbf{y}|'}</InlineMath>.
        </p>
        <p className="mb-3">
          The equivalent integral equation is
        </p>
        <MathBlock>{'\\mathbf{x}(t) = \\mathbf{x}_0 + \\int_{t_0}^t \\mathbf{f}(s, \\mathbf{x}(s)) \\, ds'}</MathBlock>
        <p className="mb-3">
          Define the operator <InlineMath>{'T'}</InlineMath> by <InlineMath>{'(T\\mathbf{x})(t) = \\mathbf{x}_0 + \\int_{t_0}^t \\mathbf{f}(s, \\mathbf{x}(s)) \\, ds'}</InlineMath>.
          On a sufficiently small interval <InlineMath>{'[t_0, t_0 + \\delta]'}</InlineMath> (where <InlineMath>{'L\\delta < 1'}</InlineMath>),
          <InlineMath>{'T'}</InlineMath> is a contraction on the complete space of continuous functions.
        </p>
        <p>
          By the contraction principle, there exists a unique solution. This is the
          <em>Picard-Lindelof theorem</em> (existence and uniqueness for ODEs).
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>A contraction <InlineMath>{'\\varphi'}</InlineMath> satisfies <InlineMath>{'d(\\varphi(x), \\varphi(y)) \\leq c \\cdot d(x,y)'}</InlineMath> with <InlineMath>{'c < 1'}</InlineMath></li>
        <li>On a complete metric space, every contraction has exactly one fixed point</li>
        <li>The fixed point is found by iteration: <InlineMath>{'x_{n+1} = \\varphi(x_n)'}</InlineMath> converges for any starting point</li>
        <li>Error estimates: <InlineMath>{'d(x_n, x) \\leq c^n/(1-c) \\cdot d(x_1, x_0)'}</InlineMath></li>
        <li>Completeness is essential; without it, fixed points may not exist in the space</li>
        <li>The principle applies to existence/uniqueness of solutions to differential and integral equations</li>
      </ul>
    </LessonLayout>
  );
}
