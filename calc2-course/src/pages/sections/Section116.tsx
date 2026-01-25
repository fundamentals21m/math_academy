import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section116() {
  return (
    <LessonLayout sectionId={116}>
      <h2>Properties of Double Integrals for Step Functions</h2>

      <p>
        The double integral of a step function satisfies several important properties
        that generalize from one-dimensional integration.
      </p>

      <h3>Iterated Integration for Step Functions</h3>

      <p>
        For a step function <InlineMath>f</InlineMath> on a rectangle{' '}
        <InlineMath>{'Q = [a, b] \\times [c, d]'}</InlineMath>, the double integral
        can be evaluated by repeated (iterated) integration:
      </p>
      <MathBlock>
        {`\\iint_Q f = \\int_c^d \\left[ \\int_a^b f(x, y) \\, dx \\right] dy = \\int_a^b \\left[ \\int_c^d f(x, y) \\, dy \\right] dx`}
      </MathBlock>

      <p>
        This formula means we can compute the double integral by first integrating
        with respect to one variable, treating the other as constant, and then
        integrating the result with respect to the second variable.
      </p>

      <h3>Fundamental Properties</h3>

      <p>
        Let <InlineMath>s</InlineMath> and <InlineMath>t</InlineMath> denote step
        functions defined on a rectangle <InlineMath>Q</InlineMath>. We assume{' '}
        <InlineMath>Q</InlineMath> is nondegenerate (not a single point or line segment).
      </p>

      <Callout type="info">
        <strong>Theorem 11.1 (Linearity Property):</strong> For every real{' '}
        <InlineMath>c_1</InlineMath> and <InlineMath>c_2</InlineMath>, we have:
        <MathBlock>
          {`\\iint_Q [c_1 s(x, y) + c_2 t(x, y)] \\, dx \\, dy = c_1 \\iint_Q s(x, y) \\, dx \\, dy + c_2 \\iint_Q t(x, y) \\, dx \\, dy`}
        </MathBlock>
      </Callout>

      <Callout type="info">
        <strong>Theorem 11.2 (Additive Property):</strong> If <InlineMath>Q</InlineMath>{' '}
        is subdivided into two rectangles <InlineMath>Q_1</InlineMath> and{' '}
        <InlineMath>Q_2</InlineMath>, then:
        <MathBlock>
          {`\\iint_Q s(x, y) \\, dx \\, dy = \\iint_{Q_1} s(x, y) \\, dx \\, dy + \\iint_{Q_2} s(x, y) \\, dx \\, dy`}
        </MathBlock>
      </Callout>

      <Callout type="info">
        <strong>Theorem 11.3 (Comparison Theorem):</strong> If{' '}
        <InlineMath>{'s(x, y) \\leq t(x, y)'}</InlineMath> for every{' '}
        <InlineMath>(x, y)</InlineMath> in <InlineMath>Q</InlineMath>, then:
        <MathBlock>
          {`\\iint_Q s(x, y) \\, dx \\, dy \\leq \\iint_Q t(x, y) \\, dx \\, dy`}
        </MathBlock>
        In particular, if <InlineMath>{'t(x, y) \\geq 0'}</InlineMath> for every{' '}
        <InlineMath>(x, y)</InlineMath> in <InlineMath>Q</InlineMath>, then:
        <MathBlock>
          {`\\iint_Q t(x, y) \\, dx \\, dy \\geq 0`}
        </MathBlock>
      </Callout>

      <h3>Proof Sketch</h3>

      <p>
        These properties can be proved either as direct consequences of the definition
        (the sum formula) or by using the iterated integration formula and the
        corresponding theorems for one-dimensional integrals.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The double integral of a step function inherits
        all the fundamental properties from one-dimensional integration: linearity,
        additivity over regions, and order preservation. These properties will extend
        to the general double integral and are essential for computations and proofs.
      </Callout>
    </LessonLayout>
  );
}
