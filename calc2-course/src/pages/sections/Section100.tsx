import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section100() {
  return (
    <LessonLayout sectionId={100}>
      <h2>Extreme-Value and Uniform Continuity Theorems</h2>

      <p>
        The extreme-value theorem for continuous functions on closed bounded
        intervals extends to scalar fields on closed <InlineMath>n</InlineMath>-dimensional
        intervals.
      </p>

      <h3>Closed n-Dimensional Intervals</h3>

      <Callout type="info">
        <strong>Definition:</strong> If{' '}
        <InlineMath>{'a = (a_1, \\ldots, a_n)'}</InlineMath> and{' '}
        <InlineMath>{'b = (b_1, \\ldots, b_n)'}</InlineMath>, the{' '}
        <strong>closed <InlineMath>n</InlineMath>-dimensional interval</strong>{' '}
        <InlineMath>[a, b]</InlineMath> is the Cartesian product:
        <MathBlock>
          [a, b] = [a_1, b_1] \times \cdots \times [a_n, b_n]
        </MathBlock>
        For <InlineMath>n = 2</InlineMath>, this is a rectangle.
      </Callout>

      <h3>Boundedness Theorem</h3>

      <Callout type="info">
        <strong>Theorem 9.8 (Boundedness):</strong> If <InlineMath>f</InlineMath>{' '}
        is a scalar field continuous at each point of a closed interval{' '}
        <InlineMath>[a, b]</InlineMath> in <InlineMath>{'\mathbb{R}^n'}</InlineMath>,
        then <InlineMath>f</InlineMath> is <strong>bounded</strong> on{' '}
        <InlineMath>[a, b]</InlineMath>. That is, there is a number{' '}
        <InlineMath>{'C > 0'}</InlineMath> such that{' '}
        <InlineMath>{'|f(x)| \\leq C'}</InlineMath> for all{' '}
        <InlineMath>x</InlineMath> in <InlineMath>[a, b]</InlineMath>.
      </Callout>

      <h3>Proof by Successive Bisection</h3>

      <p>
        The proof uses contradiction and successive bisection. Assume{' '}
        <InlineMath>f</InlineMath> is unbounded on{' '}
        <InlineMath>{'I^{(1)} = [a, b]'}</InlineMath>. Bisect each
        one-dimensional component interval to form <InlineMath>2^n</InlineMath>{' '}
        subintervals. Since <InlineMath>f</InlineMath> is unbounded on their
        union, it must be unbounded on at least one of them; call it{' '}
        <InlineMath>{'I^{(2)}'}</InlineMath>.
      </p>

      <p>
        Continuing, we obtain nested intervals{' '}
        <InlineMath>{'I^{(1)} \\supseteq I^{(2)} \\supseteq \\cdots'}</InlineMath>{' '}
        in each of which <InlineMath>f</InlineMath> is unbounded. By the nested
        interval property, there is a point <InlineMath>t</InlineMath> in all
        these intervals. By continuity at <InlineMath>t</InlineMath>,{' '}
        <InlineMath>f</InlineMath> is bounded in some ball around{' '}
        <InlineMath>t</InlineMath>. But this ball contains{' '}
        <InlineMath>{'I^{(m)}'}</InlineMath> for large <InlineMath>m</InlineMath>,
        contradicting unboundedness—a contradiction.
      </p>

      <h3>Extreme-Value Theorem</h3>

      <Callout type="info">
        <strong>Theorem 9.9 (Extreme-Value):</strong> If <InlineMath>f</InlineMath>{' '}
        is continuous on a closed interval <InlineMath>[a, b]</InlineMath> in{' '}
        <InlineMath>{'\mathbb{R}^n'}</InlineMath>, then there exist points{' '}
        <InlineMath>c</InlineMath> and <InlineMath>d</InlineMath> in{' '}
        <InlineMath>[a, b]</InlineMath> such that:
        <MathBlock>
          f(c) = \sup f, \quad f(d) = \inf f
        </MathBlock>
        where <InlineMath>{'\sup f'}</InlineMath> and{' '}
        <InlineMath>{'\inf f'}</InlineMath> are the supremum and infimum of{' '}
        <InlineMath>f</InlineMath> on <InlineMath>[a, b]</InlineMath>.
      </Callout>

      <p>
        <strong>Proof sketch:</strong> Let <InlineMath>{'M = \\sup f'}</InlineMath>.
        If <InlineMath>{'f(x) \\neq M'}</InlineMath> for all{' '}
        <InlineMath>x</InlineMath>, define{' '}
        <InlineMath>{'g(x) = M - f(x) > 0'}</InlineMath>. Then{' '}
        <InlineMath>{'1/g'}</InlineMath> is continuous on{' '}
        <InlineMath>{'[a, b]'}</InlineMath>, hence bounded by{' '}
        <InlineMath>C</InlineMath>. This gives{' '}
        <InlineMath>{'f(x) \\leq M - 1/C'}</InlineMath> for all{' '}
        <InlineMath>x</InlineMath>, contradicting that{' '}
        <InlineMath>M</InlineMath> is the least upper bound.
      </p>

      <h3>Uniform Continuity (Small-Span Theorem)</h3>

      <p>
        Let <InlineMath>f</InlineMath> be continuous on a closed bounded interval{' '}
        <InlineMath>[a, b]</InlineMath>, and let <InlineMath>M(f)</InlineMath> and{' '}
        <InlineMath>m(f)</InlineMath> denote the maximum and minimum values. The{' '}
        <strong>span</strong> of <InlineMath>f</InlineMath> on{' '}
        <InlineMath>[a, b]</InlineMath> is <InlineMath>M(f) - m(f)</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Theorem 9.10 (Uniform Continuity):</strong> Let{' '}
        <InlineMath>f</InlineMath> be a scalar field continuous on a closed
        interval <InlineMath>[a, b]</InlineMath> in{' '}
        <InlineMath>{'\mathbb{R}^n'}</InlineMath>. Then for every{' '}
        <InlineMath>{'\varepsilon > 0'}</InlineMath> there is a partition of{' '}
        <InlineMath>[a, b]</InlineMath> into a finite number of subintervals
        such that the span of <InlineMath>f</InlineMath> in every subinterval is
        less than <InlineMath>\varepsilon</InlineMath>.
      </Callout>

      <p>
        This theorem states that <InlineMath>f</InlineMath> can be made
        arbitrarily close to constant by subdividing sufficiently finely—this is
        the essence of <strong>uniform continuity</strong>.
      </p>

      <h3>Proof Outline</h3>

      <p>
        The proof again uses successive bisection. Assume for some{' '}
        <InlineMath>{'\varepsilon_0'}</InlineMath> no such partition exists. By
        bisection, obtain nested intervals{' '}
        <InlineMath>{'I^{(1)}, I^{(2)}, \\ldots'}</InlineMath> with span at least{' '}
        <InlineMath>{'\varepsilon_0'}</InlineMath>. These nest down to a point{' '}
        <InlineMath>t</InlineMath>. By continuity at <InlineMath>t</InlineMath>,
        there's a ball where the span is less than{' '}
        <InlineMath>{'\varepsilon_0/2'}</InlineMath>. For large{' '}
        <InlineMath>m</InlineMath>, <InlineMath>{'I^{(m)}'}</InlineMath> lies in
        this ball—contradiction.
      </p>

      <h3>Summary of Chapter 9</h3>

      <p>
        This chapter applied the differential calculus of Chapter 8 to:
      </p>
      <ul>
        <li>
          <strong>PDEs:</strong> First-order equations with constant coefficients,
          the wave equation and d'Alembert's solution
        </li>
        <li>
          <strong>Implicit functions:</strong> Computing derivatives without
          solving explicitly
        </li>
        <li>
          <strong>Extremum problems:</strong> Classifying stationary points using
          the Hessian matrix and its eigenvalues
        </li>
        <li>
          <strong>Constrained optimization:</strong> Lagrange multipliers
        </li>
        <li>
          <strong>Foundational theorems:</strong> Extreme-value and uniform
          continuity for scalar fields
        </li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The fundamental theorems for continuous
        functions on closed bounded intervals extend naturally to{' '}
        <InlineMath>n</InlineMath> dimensions. The successive bisection technique
        demonstrates that the proofs depend only on the nested interval property
        and local-to-global reasoning—a pattern that recurs throughout analysis.
      </Callout>
    </LessonLayout>
  );
}
