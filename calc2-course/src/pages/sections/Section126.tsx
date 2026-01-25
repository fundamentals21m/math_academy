import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section126() {
  return (
    <LessonLayout sectionId={126}>
      <h2>Green's Theorem in the Plane</h2>

      <p>
        The second fundamental theorem of calculus for line integrals states that
        the line integral of a gradient <InlineMath>{'\\nabla f'}</InlineMath> along
        a path joining two points <InlineMath>{'a'}</InlineMath> and{' '}
        <InlineMath>{'b'}</InlineMath> may be expressed in terms of the function values{' '}
        <InlineMath>{'f(a)'}</InlineMath> and <InlineMath>{'f(b)'}</InlineMath>.
      </p>

      <p>
        There is a two-dimensional analog which expresses a double integral over a
        plane region <InlineMath>{'R'}</InlineMath> as a line integral taken along a
        closed curve forming the boundary of <InlineMath>{'R'}</InlineMath>. This theorem
        is usually referred to as <strong>Green's theorem</strong>.
      </p>

      <h3>The Statement of Green's Theorem</h3>

      <Callout type="info">
        <strong>Theorem 11.10 (Green's Theorem):</strong> Let <InlineMath>{'P'}</InlineMath>{' '}
        and <InlineMath>{'Q'}</InlineMath> be scalar fields that are continuously
        differentiable on an open set <InlineMath>{'S'}</InlineMath> in the xy-plane.
        Let <InlineMath>{'C'}</InlineMath> be a piecewise smooth Jordan curve, and let{' '}
        <InlineMath>{'R'}</InlineMath> denote the union of <InlineMath>{'C'}</InlineMath>{' '}
        and its interior. Assume <InlineMath>{'R'}</InlineMath> is a subset of{' '}
        <InlineMath>{'S'}</InlineMath>. Then:
        <MathBlock>{`\\iint_R \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx \\, dy = \\oint_C P \\, dx + Q \\, dy`}</MathBlock>
        where the line integral is taken around <InlineMath>{'C'}</InlineMath> in the
        <strong>counterclockwise direction</strong>.
      </Callout>

      <h3>Terminology</h3>

      <p>
        A <strong>Jordan curve</strong> (or simple closed curve) is a closed curve
        such that distinct parameter values (except for the endpoints of the
        parameter interval) lead to distinct points on the curve. A circle is the
        prototype of a simple closed curve.
      </p>

      <p>
        Every Jordan curve <InlineMath>{'C'}</InlineMath> decomposes the plane into two
        disjoint open connected sets having the curve <InlineMath>{'C'}</InlineMath> as
        their common boundary. One of these regions is <strong>bounded</strong> and
        is called the <strong>interior</strong> (or inner region) of{' '}
        <InlineMath>{'C'}</InlineMath>. The other is <strong>unbounded</strong> and is
        called the <strong>exterior</strong> (or outer region) of{' '}
        <InlineMath>{'C'}</InlineMath>.
      </p>

      <h3>Equivalent Formulations</h3>

      <p>
        The identity in Green's theorem is equivalent to the two formulas:
      </p>
      <MathBlock>{`\\iint_R \\frac{\\partial Q}{\\partial x} \\, dx \\, dy = \\oint_C Q \\, dy`}</MathBlock>
      <MathBlock>{`-\\iint_R \\frac{\\partial P}{\\partial y} \\, dx \\, dy = \\oint_C P \\, dx`}</MathBlock>

      <p>
        If both of these are true, Green's theorem follows by addition. Conversely,
        these formulas can be obtained as special cases by taking{' '}
        <InlineMath>{'P = 0'}</InlineMath> and <InlineMath>{'Q = 0'}</InlineMath>,
        respectively.
      </p>

      <h3>Proof for Special Regions</h3>

      <p>
        We prove the second formula for a region <InlineMath>{'R'}</InlineMath> of Type I:
      </p>
      <MathBlock>{`R = \\{(x, y) \\mid a \\leq x \\leq b \\;\\text{ and }\\; f(x) \\leq y \\leq g(x)\\}`}</MathBlock>

      <p>
        First, evaluate the double integral by iterated integration:
      </p>
      <MathBlock>{`-\\iint_R \\frac{\\partial P}{\\partial y} \\, dx \\, dy = -\\int_a^b \\left[ \\int_{f(x)}^{g(x)} \\frac{\\partial P}{\\partial y} \\, dy \\right] dx = \\int_a^b P[x, f(x)] \\, dx - \\int_a^b P[x, g(x)] \\, dx`}</MathBlock>

      <p>
        On the other hand, the line integral <InlineMath>{'\\oint_C P \\, dx'}</InlineMath>{' '}
        can be written as integrals along the lower arc <InlineMath>{'C_1'}</InlineMath>{' '}
        (graph of <InlineMath>{'f'}</InlineMath>) and upper arc{' '}
        <InlineMath>{'C_2'}</InlineMath> (graph of <InlineMath>{'g'}</InlineMath>), since the
        line integral along each vertical segment is zero. Accounting for directions:
      </p>
      <MathBlock>{`\\oint_C P \\, dx = \\int_a^b P[t, f(t)] \\, dt - \\int_a^b P[t, g(t)] \\, dt`}</MathBlock>

      <p>
        Comparing these expressions confirms the formula. A similar argument proves
        the first formula for Type II regions.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Green's theorem relates a double integral over
        a region to a line integral around its boundary. It is the two-dimensional
        analog of the fundamental theorem of calculus. The theorem connects the
        behavior of a vector field inside a region (the "curl" term{' '}
        <InlineMath>{'\\partial Q/\\partial x - \\partial P/\\partial y'}</InlineMath>)
        to its circulation around the boundary.
      </Callout>
    </LessonLayout>
  );
}
