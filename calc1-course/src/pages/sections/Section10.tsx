import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        The strategy is simple: approximate a function <MathInline>{'f'}</MathInline> from
        below by step functions <MathInline>{'s'}</MathInline> and from above by step functions{' '}
        <MathInline>{'t'}</MathInline>, so that:
      </p>

      <MathBlock>{'s(x) \\leq f(x) \\leq t(x)'}</MathBlock>

      <p className="text-dark-200 mb-4">
        By the comparison theorem for step functions:
      </p>

      <MathBlock>{'\\int_a^b s(x)\\,dx \\leq \\int_a^b t(x)\\,dx'}</MathBlock>

      <p className="text-dark-200 mb-6">
        If the integral of <MathInline>{'f'}</MathInline> is to satisfy the comparison theorem,
        it must lie between <MathInline>{'\\int_a^b s(x)\\,dx'}</MathInline> and{' '}
        <MathInline>{'\\int_a^b t(x)\\,dx'}</MathInline> for <em>every</em> such pair{' '}
        <MathInline>{'s'}</MathInline> and <MathInline>{'t'}</MathInline>. If there is exactly
        one such number, we define it to be the integral of <MathInline>{'f'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Bounded Functions</h2>

      <p className="text-dark-200 mb-4">
        There's one obstacle: not every function can be approximated from above and below
        by step functions. Consider <MathInline>{'f(x) = 1/x'}</MathInline> near the origin—it
        takes arbitrarily large values, so no step function can bound it from above.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Bounded Function</p>
        <p className="mb-2">
          A function <MathInline>{'f'}</MathInline> is <strong>bounded</strong> on{' '}
          <MathInline>{'[a, b]'}</MathInline> if there exists a number <MathInline>{'M > 0'}</MathInline>{' '}
          such that:
        </p>
        <MathBlock>{'-M \\leq f(x) \\leq M \\quad \\text{for every } x \\in [a, b]'}</MathBlock>
        <p className="mt-2">
          Equivalently, <MathInline>{'|f(x)| \\leq M'}</MathInline> for all{' '}
          <MathInline>{'x'}</MathInline> in <MathInline>{'[a, b]'}</MathInline>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        Geometrically, a bounded function's graph lies between the horizontal lines{' '}
        <MathInline>{'y = -M'}</MathInline> and <MathInline>{'y = M'}</MathInline>. We can
        always surround such a function by step functions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Definition of the Integral</h2>

      <Callout type="definition">
        <p className="font-semibold mb-2">Integral of a Bounded Function</p>
        <p className="mb-2">
          Let <MathInline>{'f'}</MathInline> be bounded on <MathInline>{'[a, b]'}</MathInline>.
          Let <MathInline>{'s'}</MathInline> and <MathInline>{'t'}</MathInline> denote arbitrary
          step functions on <MathInline>{'[a, b]'}</MathInline> satisfying:
        </p>
        <MathBlock>{'s(x) \\leq f(x) \\leq t(x) \\quad \\text{for every } x \\in [a, b]'}</MathBlock>
        <p className="mt-2 mb-2">
          If there is <strong>one and only one</strong> number <MathInline>{'I'}</MathInline> such that:
        </p>
        <MathBlock>{'\\int_a^b s(x)\\,dx \\leq I \\leq \\int_a^b t(x)\\,dx'}</MathBlock>
        <p className="mt-2">
          for every pair of step functions <MathInline>{'s'}</MathInline> and{' '}
          <MathInline>{'t'}</MathInline> satisfying the above inequalities, then{' '}
          <MathInline>{'I'}</MathInline> is called the <strong>integral</strong> of{' '}
          <MathInline>{'f'}</MathInline> from <MathInline>{'a'}</MathInline> to{' '}
          <MathInline>{'b'}</MathInline>, denoted <MathInline>{'\\int_a^b f(x)\\,dx'}</MathInline>.
        </p>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Terminology</p>
        <ul className="list-disc list-inside space-y-1">
          <li>When such an <MathInline>{'I'}</MathInline> exists, <MathInline>{'f'}</MathInline> is said to be <strong>integrable</strong> on <MathInline>{'[a, b]'}</MathInline></li>
          <li>The function <MathInline>{'f'}</MathInline> is called the <strong>integrand</strong></li>
          <li>The numbers <MathInline>{'a'}</MathInline> and <MathInline>{'b'}</MathInline> are the <strong>limits of integration</strong></li>
          <li>The interval <MathInline>{'[a, b]'}</MathInline> is the <strong>interval of integration</strong></li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Upper and Lower Integrals</h2>

      <p className="text-dark-200 mb-4">
        To analyze when a function is integrable, we introduce two key concepts. Assume{' '}
        <MathInline>{'f'}</MathInline> is bounded on <MathInline>{'[a, b]'}</MathInline>.
        We write <MathInline>{'s \\leq f \\leq t'}</MathInline> to mean <MathInline>{'s'}</MathInline>{' '}
        is <em>below</em> <MathInline>{'f'}</MathInline> and <MathInline>{'t'}</MathInline> is{' '}
        <em>above</em> <MathInline>{'f'}</MathInline>.
      </p>

      <p className="text-dark-200 mb-4">
        Define two sets of real numbers:
      </p>

      <MathBlock>{'S = \\left\\{ \\int_a^b s(x)\\,dx \\,\\Big|\\, s \\leq f \\right\\}'}</MathBlock>

      <MathBlock>{'T = \\left\\{ \\int_a^b t(x)\\,dx \\,\\Big|\\, f \\leq t \\right\\}'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Both sets are nonempty (since <MathInline>{'f'}</MathInline> is bounded), and every
        number in <MathInline>{'S'}</MathInline> is less than every number in{' '}
        <MathInline>{'T'}</MathInline>. By the completeness axiom, <MathInline>{'S'}</MathInline>{' '}
        has a supremum and <MathInline>{'T'}</MathInline> has an infimum.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Lower and Upper Integrals</p>
        <p className="mb-2">
          The <strong>lower integral</strong> of <MathInline>{'f'}</MathInline> is:
        </p>
        <MathBlock>{'\\underline{I}(f) = \\sup \\left\\{ \\int_a^b s(x)\\,dx \\,\\Big|\\, s \\leq f \\right\\}'}</MathBlock>
        <p className="mt-3 mb-2">
          The <strong>upper integral</strong> of <MathInline>{'f'}</MathInline> is:
        </p>
        <MathBlock>{'\\overline{I}(f) = \\inf \\left\\{ \\int_a^b t(x)\\,dx \\,\\Big|\\, f \\leq t \\right\\}'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Integrability Condition</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.9</p>
        <p className="mb-2">
          Every bounded function <MathInline>{'f'}</MathInline> on <MathInline>{'[a, b]'}</MathInline>{' '}
          has a lower integral <MathInline>{'\\underline{I}(f)'}</MathInline> and an upper integral{' '}
          <MathInline>{'\\overline{I}(f)'}</MathInline> satisfying:
        </p>
        <MathBlock>{'\\int_a^b s(x)\\,dx \\leq \\underline{I}(f) \\leq \\overline{I}(f) \\leq \\int_a^b t(x)\\,dx'}</MathBlock>
        <p className="mt-2 mb-2">
          for all step functions <MathInline>{'s'}</MathInline> and <MathInline>{'t'}</MathInline>{' '}
          with <MathInline>{'s \\leq f \\leq t'}</MathInline>.
        </p>
        <p>
          The function <MathInline>{'f'}</MathInline> is <strong>integrable</strong> on{' '}
          <MathInline>{'[a, b]'}</MathInline> if and only if:
        </p>
        <MathBlock>{'\\underline{I}(f) = \\overline{I}(f)'}</MathBlock>
        <p className="mt-2">
          in which case <MathInline>{'\\int_a^b f(x)\\,dx = \\underline{I}(f) = \\overline{I}(f)'}</MathInline>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        The key insight: a bounded function is integrable precisely when its upper and lower
        integrals coincide. The "gap" between them measures how well step functions can
        approximate <MathInline>{'f'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Geometric Interpretation</h2>

      <p className="text-dark-200 mb-4">
        For nonnegative functions, the integral equals the area of the ordinate set:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.10 (Area of Ordinate Set)</p>
        <p className="mb-2">
          Let <MathInline>{'f'}</MathInline> be a nonnegative function, integrable on{' '}
          <MathInline>{'[a, b]'}</MathInline>. Let <MathInline>{'Q'}</MathInline> be the ordinate
          set of <MathInline>{'f'}</MathInline>:
        </p>
        <MathBlock>{'Q = \\{(x, y) \\mid a \\leq x \\leq b, \\, 0 \\leq y \\leq f(x)\\}'}</MathBlock>
        <p className="mt-2">
          Then <MathInline>{'Q'}</MathInline> is measurable and its area equals{' '}
          <MathInline>{'\\int_a^b f(x)\\,dx'}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.11 (Graph Has Zero Area)</p>
        <p>
          Let <MathInline>{'f'}</MathInline> be a nonnegative, integrable function on{' '}
          <MathInline>{'[a, b]'}</MathInline>. The graph of <MathInline>{'f'}</MathInline>,
          namely <MathInline>{'\\{(x, y) \\mid a \\leq x \\leq b, \\, y = f(x)\\}'}</MathInline>,
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
            If <MathInline>{'a < b'}</MathInline>, then:{' '}
            <MathInline>{'\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx'}</MathInline>
          </li>
          <li>
            For any <MathInline>{'a'}</MathInline>:{' '}
            <MathInline>{'\\int_a^a f(x)\\,dx = 0'}</MathInline>
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
        The lower integral <MathInline>{'\\underline{I}(f)'}</MathInline> is the supremum of
        integrals of step functions below <MathInline>{'f'}</MathInline>; the upper integral{' '}
        <MathInline>{'\\overline{I}(f)'}</MathInline> is the infimum of integrals of step
        functions above <MathInline>{'f'}</MathInline>. A bounded function is integrable if
        and only if these two quantities are equal. This approach, rooted in Archimedes'
        method of exhaustion, provides a rigorous foundation for integration.
      </p>
    </LessonLayout>
  );
}
