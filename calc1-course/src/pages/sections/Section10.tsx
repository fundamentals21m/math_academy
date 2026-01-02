import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-semibold mb-4">Upper and Lower Integrals</h2>

      <p className="text-dark-200 mb-6">
        We have defined the integral for step functions. Now we extend this definition to
        more general functions using the powerful idea of <strong>approximation</strong>—squeezing
        a function between step functions from above and below, much like Archimedes' method
        of exhaustion.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Extending Integration Beyond Step Functions</h2>

      <p className="text-dark-200 mb-4">
        The strategy is simple: approximate a function <InlineMath>{'f'}</InlineMath> from
        below by step functions <InlineMath>{'s'}</InlineMath> and from above by step functions{' '}
        <InlineMath>{'t'}</InlineMath>, so that:
      </p>

      <MathBlock>{'s(x) \\leq f(x) \\leq t(x)'}</MathBlock>

      <p className="text-dark-200 mb-4">
        By the comparison theorem for step functions:
      </p>

      <MathBlock>{'\\int_a^b s(x)\\,dx \\leq \\int_a^b t(x)\\,dx'}</MathBlock>

      <p className="text-dark-200 mb-6">
        If the integral of <InlineMath>{'f'}</InlineMath> is to satisfy the comparison theorem,
        it must lie between <InlineMath>{'\\int_a^b s(x)\\,dx'}</InlineMath> and{' '}
        <InlineMath>{'\\int_a^b t(x)\\,dx'}</InlineMath> for <em>every</em> such pair{' '}
        <InlineMath>{'s'}</InlineMath> and <InlineMath>{'t'}</InlineMath>. If there is exactly
        one such number, we define it to be the integral of <InlineMath>{'f'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Bounded Functions</h2>

      <p className="text-dark-200 mb-4">
        There's one obstacle: not every function can be approximated from above and below
        by step functions. Consider <InlineMath>{'f(x) = 1/x'}</InlineMath> near the origin—it
        takes arbitrarily large values, so no step function can bound it from above.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Bounded Function</p>
        <p className="mb-2">
          A function <InlineMath>{'f'}</InlineMath> is <strong>bounded</strong> on{' '}
          <InlineMath>{'[a, b]'}</InlineMath> if there exists a number <InlineMath>{'M > 0'}</InlineMath>{' '}
          such that:
        </p>
        <MathBlock>{'-M \\leq f(x) \\leq M \\quad \\text{for every } x \\in [a, b]'}</MathBlock>
        <p className="mt-2">
          Equivalently, <InlineMath>{'|f(x)| \\leq M'}</InlineMath> for all{' '}
          <InlineMath>{'x'}</InlineMath> in <InlineMath>{'[a, b]'}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        Geometrically, a bounded function's graph lies between the horizontal lines{' '}
        <InlineMath>{'y = -M'}</InlineMath> and <InlineMath>{'y = M'}</InlineMath>. We can
        always surround such a function by step functions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Definition of the Integral</h2>

      <Callout type="definition">
        <p className="font-semibold mb-2">Integral of a Bounded Function</p>
        <p className="mb-2">
          Let <InlineMath>{'f'}</InlineMath> be bounded on <InlineMath>{'[a, b]'}</InlineMath>.
          Let <InlineMath>{'s'}</InlineMath> and <InlineMath>{'t'}</InlineMath> denote arbitrary
          step functions on <InlineMath>{'[a, b]'}</InlineMath> satisfying:
        </p>
        <MathBlock>{'s(x) \\leq f(x) \\leq t(x) \\quad \\text{for every } x \\in [a, b]'}</MathBlock>
        <p className="mt-2 mb-2">
          If there is <strong>one and only one</strong> number <InlineMath>{'I'}</InlineMath> such that:
        </p>
        <MathBlock>{'\\int_a^b s(x)\\,dx \\leq I \\leq \\int_a^b t(x)\\,dx'}</MathBlock>
        <p className="mt-2">
          for every pair of step functions <InlineMath>{'s'}</InlineMath> and{' '}
          <InlineMath>{'t'}</InlineMath> satisfying the above inequalities, then{' '}
          <InlineMath>{'I'}</InlineMath> is called the <strong>integral</strong> of{' '}
          <InlineMath>{'f'}</InlineMath> from <InlineMath>{'a'}</InlineMath> to{' '}
          <InlineMath>{'b'}</InlineMath>, denoted <InlineMath>{'\\int_a^b f(x)\\,dx'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Terminology</p>
        <ul className="list-disc list-inside space-y-1">
          <li>When such an <InlineMath>{'I'}</InlineMath> exists, <InlineMath>{'f'}</InlineMath> is said to be <strong>integrable</strong> on <InlineMath>{'[a, b]'}</InlineMath></li>
          <li>The function <InlineMath>{'f'}</InlineMath> is called the <strong>integrand</strong></li>
          <li>The numbers <InlineMath>{'a'}</InlineMath> and <InlineMath>{'b'}</InlineMath> are the <strong>limits of integration</strong></li>
          <li>The interval <InlineMath>{'[a, b]'}</InlineMath> is the <strong>interval of integration</strong></li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Upper and Lower Integrals</h2>

      <p className="text-dark-200 mb-4">
        To analyze when a function is integrable, we introduce two key concepts. Assume{' '}
        <InlineMath>{'f'}</InlineMath> is bounded on <InlineMath>{'[a, b]'}</InlineMath>.
        We write <InlineMath>{'s \\leq f \\leq t'}</InlineMath> to mean <InlineMath>{'s'}</InlineMath>{' '}
        is <em>below</em> <InlineMath>{'f'}</InlineMath> and <InlineMath>{'t'}</InlineMath> is{' '}
        <em>above</em> <InlineMath>{'f'}</InlineMath>.
      </p>

      <p className="text-dark-200 mb-4">
        Define two sets of real numbers:
      </p>

      <MathBlock>{'S = \\left\\{ \\int_a^b s(x)\\,dx \\,\\Big|\\, s \\leq f \\right\\}'}</MathBlock>

      <MathBlock>{'T = \\left\\{ \\int_a^b t(x)\\,dx \\,\\Big|\\, f \\leq t \\right\\}'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Both sets are nonempty (since <InlineMath>{'f'}</InlineMath> is bounded), and every
        number in <InlineMath>{'S'}</InlineMath> is less than every number in{' '}
        <InlineMath>{'T'}</InlineMath>. By the completeness axiom, <InlineMath>{'S'}</InlineMath>{' '}
        has a supremum and <InlineMath>{'T'}</InlineMath> has an infimum.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Lower and Upper Integrals</p>
        <p className="mb-2">
          The <strong>lower integral</strong> of <InlineMath>{'f'}</InlineMath> is:
        </p>
        <MathBlock>{'\\underline{I}(f) = \\sup \\left\\{ \\int_a^b s(x)\\,dx \\,\\Big|\\, s \\leq f \\right\\}'}</MathBlock>
        <p className="mt-3 mb-2">
          The <strong>upper integral</strong> of <InlineMath>{'f'}</InlineMath> is:
        </p>
        <MathBlock>{'\\overline{I}(f) = \\inf \\left\\{ \\int_a^b t(x)\\,dx \\,\\Big|\\, f \\leq t \\right\\}'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Integrability Condition</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.9</p>
        <p className="mb-2">
          Every bounded function <InlineMath>{'f'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>{' '}
          has a lower integral <InlineMath>{'\\underline{I}(f)'}</InlineMath> and an upper integral{' '}
          <InlineMath>{'\\overline{I}(f)'}</InlineMath> satisfying:
        </p>
        <MathBlock>{'\\int_a^b s(x)\\,dx \\leq \\underline{I}(f) \\leq \\overline{I}(f) \\leq \\int_a^b t(x)\\,dx'}</MathBlock>
        <p className="mt-2 mb-2">
          for all step functions <InlineMath>{'s'}</InlineMath> and <InlineMath>{'t'}</InlineMath>{' '}
          with <InlineMath>{'s \\leq f \\leq t'}</InlineMath>.
        </p>
        <p>
          The function <InlineMath>{'f'}</InlineMath> is <strong>integrable</strong> on{' '}
          <InlineMath>{'[a, b]'}</InlineMath> if and only if:
        </p>
        <MathBlock>{'\\underline{I}(f) = \\overline{I}(f)'}</MathBlock>
        <p className="mt-2">
          in which case <InlineMath>{'\\int_a^b f(x)\\,dx = \\underline{I}(f) = \\overline{I}(f)'}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        The key insight: a bounded function is integrable precisely when its upper and lower
        integrals coincide. The "gap" between them measures how well step functions can
        approximate <InlineMath>{'f'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Geometric Interpretation</h2>

      <p className="text-dark-200 mb-4">
        For nonnegative functions, the integral equals the area of the ordinate set:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.10 (Area of Ordinate Set)</p>
        <p className="mb-2">
          Let <InlineMath>{'f'}</InlineMath> be a nonnegative function, integrable on{' '}
          <InlineMath>{'[a, b]'}</InlineMath>. Let <InlineMath>{'Q'}</InlineMath> be the ordinate
          set of <InlineMath>{'f'}</InlineMath>:
        </p>
        <MathBlock>{'Q = \\{(x, y) \\mid a \\leq x \\leq b, \\, 0 \\leq y \\leq f(x)\\}'}</MathBlock>
        <p className="mt-2">
          Then <InlineMath>{'Q'}</InlineMath> is measurable and its area equals{' '}
          <InlineMath>{'\\int_a^b f(x)\\,dx'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.11 (Graph Has Zero Area)</p>
        <p>
          Let <InlineMath>{'f'}</InlineMath> be a nonnegative, integrable function on{' '}
          <InlineMath>{'[a, b]'}</InlineMath>. The graph of <InlineMath>{'f'}</InlineMath>,
          namely <InlineMath>{'\\{(x, y) \\mid a \\leq x \\leq b, \\, y = f(x)\\}'}</InlineMath>,
          is measurable and has area equal to 0.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Conventions for Integration Limits</h2>

      <p className="text-dark-200 mb-4">
        We extend our notation to handle cases where limits are reversed or equal:
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Integration Conventions</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            If <InlineMath>{'a < b'}</InlineMath>, then:{' '}
            <InlineMath>{'\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx'}</InlineMath>
          </li>
          <li>
            For any <InlineMath>{'a'}</InlineMath>:{' '}
            <InlineMath>{'\\int_a^a f(x)\\,dx = 0'}</InlineMath>
          </li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-4">
        These conventions allow the additivity property to hold for any arrangement of points:
      </p>

      <MathBlock>{'\\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx + \\int_b^a f(x)\\,dx = 0'}</MathBlock>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Why This Definition Works</h2>

      <p className="text-dark-200 mb-4">
        The beauty of this approach is that it:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Agrees with step functions:</strong> For step functions, the new definition
          gives the same integral as before
        </li>
        <li>
          <strong>Preserves properties:</strong> All the properties from Section 9 (additivity,
          linearity, comparison) carry over to integrable functions
        </li>
        <li>
          <strong>Captures area:</strong> For nonnegative functions, the integral equals the
          area under the curve
        </li>
        <li>
          <strong>Is constructive:</strong> Upper and lower integrals give explicit bounds
          for the integral
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <p className="text-dark-200 mb-4">
        We extend integration from step functions to bounded functions by approximation.
        The lower integral <InlineMath>{'\\underline{I}(f)'}</InlineMath> is the supremum of
        integrals of step functions below <InlineMath>{'f'}</InlineMath>; the upper integral{' '}
        <InlineMath>{'\\overline{I}(f)'}</InlineMath> is the infimum of integrals of step
        functions above <InlineMath>{'f'}</InlineMath>. A bounded function is integrable if
        and only if these two quantities are equal. This approach, rooted in Archimedes'
        method of exhaustion, provides a rigorous foundation for integration.
      </p>
    </LessonLayout>
  );
}
