import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section103() {
  return (
    <LessonLayout sectionId={103}>
      <h2>Basic Properties of Line Integrals</h2>

      <p>
        Since line integrals are defined in terms of ordinary integrals, they share
        many of the properties of ordinary integrals.
      </p>

      <h3>Linearity Property</h3>

      <Callout type="info">
        <strong>Linearity:</strong> For scalar constants <InlineMath>a</InlineMath>{' '}
        and <InlineMath>b</InlineMath>, and vector fields{' '}
        <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath>:
        <MathBlock>
          \int (af + bg) \cdot d\alpha = a \int f \cdot d\alpha + b \int g \cdot d\alpha
        </MathBlock>
      </Callout>

      <h3>Additive Property</h3>

      <Callout type="info">
        <strong>Additivity with respect to the path:</strong> If a curve{' '}
        <InlineMath>C</InlineMath> is described by a function{' '}
        <InlineMath>\alpha</InlineMath> defined on <InlineMath>[a, b]</InlineMath>,
        and if <InlineMath>C_1</InlineMath> and <InlineMath>C_2</InlineMath> are the
        curves traced out by <InlineMath>\alpha(t)</InlineMath> as{' '}
        <InlineMath>t</InlineMath> varies over <InlineMath>[a, c]</InlineMath> and{' '}
        <InlineMath>[c, b]</InlineMath> respectively for some{' '}
        <InlineMath>{`a < c < b`}</InlineMath>, then:
        <MathBlock>{`\\int_C f \\cdot d\\alpha = \\int_{C_1} f \\cdot d\\alpha + \\int_{C_2} f \\cdot d\\alpha`}</MathBlock>
      </Callout>

      <h3>Behavior Under Change of Parameter</h3>

      <p>
        Let <InlineMath>\alpha</InlineMath> be a continuous path defined on an interval{' '}
        <InlineMath>[a, b]</InlineMath>, and let <InlineMath>u</InlineMath> be a
        real-valued function that is differentiable, with <InlineMath>u'</InlineMath>{' '}
        never zero on an interval <InlineMath>[c, d]</InlineMath>, such that the range
        of <InlineMath>u</InlineMath> is <InlineMath>[a, b]</InlineMath>.
      </p>

      <p>
        Then the function <InlineMath>\beta</InlineMath> defined on{' '}
        <InlineMath>[c, d]</InlineMath> by{' '}
        <InlineMath>{`\\beta(t) = \\alpha[u(t)]`}</InlineMath> is a continuous path
        having the same graph as <InlineMath>\alpha</InlineMath>. Two paths{' '}
        <InlineMath>\alpha</InlineMath> and <InlineMath>\beta</InlineMath> so related
        are called <strong>equivalent</strong>.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> The function <InlineMath>u</InlineMath> is said
        to be <strong>orientation-preserving</strong> if <InlineMath>u'</InlineMath>{' '}
        is always positive (so <InlineMath>\alpha</InlineMath> and{' '}
        <InlineMath>\beta</InlineMath> trace out <InlineMath>C</InlineMath> in the
        same direction). It is <strong>orientation-reversing</strong> if{' '}
        <InlineMath>u'</InlineMath> is always negative (opposite directions).
      </Callout>

      <h3>Theorem 10.1: Change of Parameter</h3>

      <Callout type="info">
        <strong>Theorem 10.1:</strong> Let <InlineMath>\alpha</InlineMath> and{' '}
        <InlineMath>\beta</InlineMath> be equivalent piecewise smooth paths. Then:
        <MathBlock>
          \int_C f \cdot d\alpha = \int_C f \cdot d\beta
        </MathBlock>
        if <InlineMath>\alpha</InlineMath> and <InlineMath>\beta</InlineMath> trace
        out <InlineMath>C</InlineMath> in the <strong>same direction</strong>; and
        <MathBlock>
          \int_C f \cdot d\alpha = -\int_C f \cdot d\beta
        </MathBlock>
        if <InlineMath>\alpha</InlineMath> and <InlineMath>\beta</InlineMath> trace
        out <InlineMath>C</InlineMath> in <strong>opposite directions</strong>.
      </Callout>

      <h3>Proof Sketch</h3>

      <p>
        The proof uses the chain rule. Since{' '}
        <InlineMath>{`\\beta(t) = \\alpha[u(t)]`}</InlineMath>, we have:
      </p>
      <MathBlock>
        \beta'(t) = \alpha'[u(t)] u'(t)
      </MathBlock>

      <p>
        Therefore:
      </p>
      <MathBlock>
        \int_C f \cdot d\beta = \int_c^d f[\beta(t)] \cdot \beta'(t) \, dt = \int_c^d f[\alpha(u(t))] \cdot \alpha'[u(t)] u'(t) \, dt
      </MathBlock>

      <p>
        Substituting <InlineMath>{`v = u(t)`}</InlineMath>,{' '}
        <InlineMath>{`dv = u'(t) \\, dt`}</InlineMath>:
      </p>
      <MathBlock>
        \int_C f \cdot d\beta = \pm \int_a^b f[\alpha(v)] \cdot \alpha'(v) \, dv = \pm \int_C f \cdot d\alpha
      </MathBlock>

      <p>
        The <InlineMath>+</InlineMath> sign occurs when <InlineMath>\alpha</InlineMath>{' '}
        and <InlineMath>\beta</InlineMath> trace <InlineMath>C</InlineMath> in the
        same direction; the <InlineMath>-</InlineMath> sign occurs when they trace
        <InlineMath>C</InlineMath> in opposite directions.
      </p>

      <h3>Practical Implication</h3>

      <p>
        This theorem has an important practical implication: when computing a line
        integral, we can use any convenient parametrization of the curve. The choice
        of parametrization does not affect the value of the integral (as long as we
        maintain the same orientation).
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Line integrals have three fundamental properties:
        (1) linearity in the integrand, (2) additivity over paths, and (3) independence
        of parametrization (up to sign). Reversing the direction of traversal negates
        the integral. These properties make line integrals well-behaved and computable.
      </Callout>
    </LessonLayout>
  );
}
