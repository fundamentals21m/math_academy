import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section118() {
  return (
    <LessonLayout sectionId={118}>
      <h2>Evaluation by Iterated Integration</h2>

      <p>
        In one-dimensional integration theory, the second fundamental theorem of
        calculus provides a practical method for calculating integrals. The next
        theorem accomplishes the same result in two dimensions; it enables us to
        evaluate certain double integrals by means of two successive one-dimensional
        integrations.
      </p>

      <h3>The Main Theorem</h3>

      <Callout type="info">
        <strong>Theorem 11.5:</strong> Let <InlineMath>f</InlineMath> be defined and
        bounded on a rectangle <InlineMath>{'Q = [a, b] \\times [c, d]'}</InlineMath>,
        and assume that <InlineMath>f</InlineMath> is integrable on{' '}
        <InlineMath>Q</InlineMath>.
        <br /><br />
        For each fixed <InlineMath>y</InlineMath> in <InlineMath>[c, d]</InlineMath>,
        assume that the one-dimensional integral{' '}
        <InlineMath>{'\\int_a^b f(x, y) \\, dx'}</InlineMath> exists, and denote its
        value by <InlineMath>{'A(y)'}</InlineMath>.
        <br /><br />
        If the integral <InlineMath>{'\\int_c^d A(y) \\, dy'}</InlineMath> exists, it
        is equal to the double integral <InlineMath>{'\iint_Q f'}</InlineMath>. In
        other words:
        <MathBlock>
          \iint_Q f(x, y) \, dx \, dy = \int_c^d \left[ \int_a^b f(x, y) \, dx \right] dy
        </MathBlock>
      </Callout>

      <h3>Proof Sketch</h3>

      <p>
        Choose any two step functions <InlineMath>s</InlineMath> and{' '}
        <InlineMath>t</InlineMath> satisfying{' '}
        <InlineMath>{'s \\leq f \\leq t'}</InlineMath> on <InlineMath>Q</InlineMath>.
        Integrating with respect to <InlineMath>x</InlineMath> over the interval{' '}
        <InlineMath>[a, b]</InlineMath>, we have:
      </p>
      <MathBlock>
        \int_a^b s(x, y) \, dx \leq A(y) \leq \int_a^b t(x, y) \, dx
      </MathBlock>

      <p>
        Since the integral <InlineMath>{'\\int_c^d A(y) \\, dy'}</InlineMath> exists,
        we can integrate both inequalities with respect to <InlineMath>y</InlineMath>{' '}
        over <InlineMath>[c, d]</InlineMath> and use the iterated formula for step
        functions to obtain:
      </p>
      <MathBlock>
        \iint_Q s \leq \int_c^d A(y) \, dy \leq \iint_Q t
      </MathBlock>

      <p>
        Since <InlineMath>f</InlineMath> is integrable on <InlineMath>Q</InlineMath>,
        the only number with this property is the double integral of{' '}
        <InlineMath>f</InlineMath> over <InlineMath>Q</InlineMath>. Therefore{' '}
        <InlineMath>{'\\int_c^d A(y) \\, dy = \\iint_Q f'}</InlineMath>.
      </p>

      <h3>Interchanging the Order of Integration</h3>

      <p>
        If we interchange the order of integration, we have a similar formula:
      </p>
      <MathBlock>
        \iint_Q f(x, y) \, dx \, dy = \int_a^b \left[ \int_c^d f(x, y) \, dy \right] dx
      </MathBlock>

      <p>
        This holds if we assume that <InlineMath>{'\\int_c^d f(x, y) \\, dy'}</InlineMath>{' '}
        exists for each fixed <InlineMath>x</InlineMath> in{' '}
        <InlineMath>[a, b]</InlineMath> and is integrable on <InlineMath>[a, b]</InlineMath>.
      </p>

      <h3>Iterated Integration</h3>

      <p>
        The formula is said to provide an evaluation of the double integral by{' '}
        <strong>repeated</strong> or <strong>iterated integration</strong>. The process
        is described by saying that first we integrate <InlineMath>f</InlineMath> with
        respect to <InlineMath>x</InlineMath> from <InlineMath>a</InlineMath> to{' '}
        <InlineMath>b</InlineMath> (holding <InlineMath>y</InlineMath> fixed), and
        then we integrate the result with respect to <InlineMath>y</InlineMath> from{' '}
        <InlineMath>c</InlineMath> to <InlineMath>d</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Theorem 11.5 is the workhorse of double
        integration. It reduces the two-dimensional problem to a sequence of
        one-dimensional integrals. In practice, we can often choose which order of
        integration makes the computation easier—sometimes one order leads to
        significantly simpler calculations than the other.
      </Callout>
    </LessonLayout>
  );
}
