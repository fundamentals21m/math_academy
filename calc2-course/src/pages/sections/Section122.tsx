import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section122() {
  return (
    <LessonLayout sectionId={122}>
      <h2>Double Integrals Over More General Regions</h2>

      <p>
        Up to this point the double integral has been defined only for rectangular
        regions of integration. However, it is not difficult to extend the concept
        to more general regions.
      </p>

      <h3>Extension to General Bounded Regions</h3>

      <p>
        Let <InlineMath>{'S'}</InlineMath> be a bounded region, and enclose{' '}
        <InlineMath>{'S'}</InlineMath> in a rectangle <InlineMath>{'Q'}</InlineMath>. Let{' '}
        <InlineMath>{'f'}</InlineMath> be defined and bounded on <InlineMath>{'S'}</InlineMath>.
        Define a new function <InlineMath>{'\\tilde{f}'}</InlineMath> on{' '}
        <InlineMath>{'Q'}</InlineMath> as follows:
      </p>
      <MathBlock>{`\\tilde{f}(x, y) = \\begin{cases} f(x, y) & \\text{if} \\; (x, y) \\in S, \\\\ 0 & \\text{if} \\; (x, y) \\in Q - S. \\end{cases}`}</MathBlock>

      <Callout type="info">
        <strong>Definition:</strong> If the extended function{' '}
        <InlineMath>{'\\tilde{f}'}</InlineMath> is integrable on{' '}
        <InlineMath>{'Q'}</InlineMath>, we say that <InlineMath>{'f'}</InlineMath> is{' '}
        <strong>integrable on <InlineMath>{'S'}</InlineMath></strong> and define:
        <MathBlock>{`\\iint_S f = \\iint_Q \\tilde{f}`}</MathBlock>
      </Callout>

      <h3>Type I Regions</h3>

      <p>
        First we consider sets of points <InlineMath>{'S'}</InlineMath> in the xy-plane
        described as follows:
      </p>
      <MathBlock>{`S = \\{(x, y) \\mid a \\leq x \\leq b \\;\\text{ and }\\; \\varphi_1(x) \\leq y \\leq \\varphi_2(x)\\}`}</MathBlock>

      <p>
        where <InlineMath>{'\\varphi_1'}</InlineMath> and <InlineMath>{'\\varphi_2'}</InlineMath>{' '}
        are continuous on <InlineMath>{'[a, b]'}</InlineMath> with{' '}
        <InlineMath>{'\\varphi_1 \\leq \\varphi_2'}</InlineMath>. This is called a{' '}
        <strong>region of Type I</strong>.
      </p>

      <p>
        In a region of Type I, for each point <InlineMath>{'t'}</InlineMath> in{' '}
        <InlineMath>{'[a, b]'}</InlineMath> the vertical line <InlineMath>{'x = t'}</InlineMath>{' '}
        intersects <InlineMath>{'S'}</InlineMath> in a line segment joining the curve{' '}
        <InlineMath>{'y = \\varphi_1(x)'}</InlineMath> to{' '}
        <InlineMath>{'y = \\varphi_2(x)'}</InlineMath>.
      </p>

      <h3>Type II Regions</h3>

      <p>
        Another type of region <InlineMath>{'T'}</InlineMath> (Type II) can be described as:
      </p>
      <MathBlock>{`T = \\{(x, y) \\mid c \\leq y \\leq d \\;\\text{ and }\\; \\psi_1(y) \\leq x \\leq \\psi_2(y)\\}`}</MathBlock>

      <p>
        where <InlineMath>{'\\psi_1'}</InlineMath> and <InlineMath>{'\\psi_2'}</InlineMath> are
        continuous on <InlineMath>{'[c, d]'}</InlineMath> with{' '}
        <InlineMath>{'\\psi_1 \\leq \\psi_2'}</InlineMath>. In this case, horizontal
        lines intersect <InlineMath>{'T'}</InlineMath> in line segments.
      </p>

      <h3>Graphs Have Content Zero</h3>

      <Callout type="info">
        <strong>Theorem 11.8:</strong> Let <InlineMath>{'\\varphi'}</InlineMath> be a
        real-valued function that is continuous on an interval{' '}
        <InlineMath>{'[a, b]'}</InlineMath>. Then the graph of{' '}
        <InlineMath>{'\\varphi'}</InlineMath> has content zero.
      </Callout>

      <p>
        <strong>Proof sketch:</strong> By the small-span theorem, for any{' '}
        <InlineMath>{'\\epsilon > 0'}</InlineMath> there is a partition{' '}
        <InlineMath>{'P'}</InlineMath> of <InlineMath>{'[a, b]'}</InlineMath> such that the
        span of <InlineMath>{'\\varphi'}</InlineMath> in every subinterval is less than{' '}
        <InlineMath>{'\\epsilon/(b - a)'}</InlineMath>. Above each subinterval, the
        graph of <InlineMath>{'\\varphi'}</InlineMath> lies inside a rectangle of height{' '}
        <InlineMath>{'\\epsilon/(b - a)'}</InlineMath>. Hence the entire graph lies
        within a finite union of rectangles whose total area is{' '}
        <InlineMath>{'\\epsilon'}</InlineMath>.
      </p>

      <h3>Integrability on Type I Regions</h3>

      <Callout type="info">
        <strong>Theorem 11.9:</strong> Let <InlineMath>{'S'}</InlineMath> be a region of
        Type I, between the graphs of <InlineMath>{'\\varphi_1'}</InlineMath> and{' '}
        <InlineMath>{'\\varphi_2'}</InlineMath>. Assume that <InlineMath>{'f'}</InlineMath> is
        defined and bounded on <InlineMath>{'S'}</InlineMath> and continuous on the
        interior of <InlineMath>{'S'}</InlineMath>. Then the double integral{' '}
        <InlineMath>{'\\iint_S f'}</InlineMath> exists and can be evaluated by:
        <MathBlock>{`\\iint_S f(x, y) \\, dx \\, dy = \\int_a^b \\left[ \\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x, y) \\, dy \\right] dx`}</MathBlock>
      </Callout>

      <p>
        The key observation is that the boundary of <InlineMath>{'S'}</InlineMath>{' '}
        (consisting of graphs of continuous functions and vertical line segments)
        has content zero, so the extended function{' '}
        <InlineMath>{'\\tilde{f}'}</InlineMath> is integrable on the enclosing
        rectangle <InlineMath>{'Q'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Double integrals extend naturally to regions
        bounded by curves. For Type I regions (vertical slices) and Type II regions
        (horizontal slices), the iterated integral formula has variable limits that
        depend on the boundary curves. This is the foundation for computing integrals
        over non-rectangular regions.
      </Callout>
    </LessonLayout>
  );
}
