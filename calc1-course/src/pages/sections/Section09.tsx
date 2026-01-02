import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-semibold mb-4">The Integral for Step Functions</h2>

      <p className="text-dark-200 mb-6">
        Having defined step functions and partitions, we now introduce the <strong>integral</strong>{' '}
        for step functions. The definition is constructed so that the integral of a nonnegative
        step function equals the area of its ordinate set.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Definition of the Integral</h2>

      <p className="text-dark-200 mb-4">
        Let <InlineMath>{'s'}</InlineMath> be a step function defined on{' '}
        <InlineMath>{'[a, b]'}</InlineMath>, and let{' '}
        <InlineMath>{'P = \\{x_0, x_1, \\ldots, x_n\\}'}</InlineMath> be a partition of{' '}
        <InlineMath>{'[a, b]'}</InlineMath> such that <InlineMath>{'s'}</InlineMath> is constant
        on the open subintervals of <InlineMath>{'P'}</InlineMath>. Denote by{' '}
        <InlineMath>{'s_k'}</InlineMath> the constant value that <InlineMath>{'s'}</InlineMath>{' '}
        takes in the <InlineMath>{'k'}</InlineMath>th open subinterval:
      </p>

      <MathBlock>{'s(x) = s_k \\quad \\text{if} \\quad x_{k-1} < x < x_k, \\quad k = 1, 2, \\ldots, n'}</MathBlock>

      <Callout type="definition">
        <p className="font-semibold mb-2">Definition: Integral of a Step Function</p>
        <p className="mb-2">
          The <strong>integral</strong> of <InlineMath>{'s'}</InlineMath> from{' '}
          <InlineMath>{'a'}</InlineMath> to <InlineMath>{'b'}</InlineMath>, denoted by{' '}
          <InlineMath>{'\\int_a^b s(x)\\,dx'}</InlineMath>, is defined by:
        </p>
        <MathBlock>{'\\int_a^b s(x)\\,dx = \\sum_{k=1}^{n} s_k \\cdot (x_k - x_{k-1})'}</MathBlock>
        <p className="mt-2">
          To compute the integral, we multiply each constant value <InlineMath>{'s_k'}</InlineMath>{' '}
          by the length of the <InlineMath>{'k'}</InlineMath>th subinterval, then add all these
          products together.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Key Observations</h3>

      <p className="text-dark-200 mb-4">
        The values of <InlineMath>{'s'}</InlineMath> at the subdivision points are <em>immaterial</em>{' '}
        since they do not appear in the formula. In particular, if <InlineMath>{'s'}</InlineMath>{' '}
        is constant on the open interval <InlineMath>{'(a, b)'}</InlineMath>, say{' '}
        <InlineMath>{'s(x) = c'}</InlineMath> for <InlineMath>{'a < x < b'}</InlineMath>, then:
      </p>

      <MathBlock>{'\\int_a^b s(x)\\,dx = c \\sum_{k=1}^{n}(x_k - x_{k-1}) = c(b - a)'}</MathBlock>

      <p className="text-dark-200 mb-6">
        regardless of the values <InlineMath>{'s(a)'}</InlineMath> and{' '}
        <InlineMath>{'s(b)'}</InlineMath>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Geometric Interpretation</p>
        <p>
          If <InlineMath>{'c > 0'}</InlineMath> and <InlineMath>{'s(x) = c'}</InlineMath> for all{' '}
          <InlineMath>{'x'}</InlineMath> in <InlineMath>{'[a, b]'}</InlineMath>, the ordinate set
          is a rectangle of base <InlineMath>{'b - a'}</InlineMath> and altitude{' '}
          <InlineMath>{'c'}</InlineMath>. The integral <InlineMath>{'c(b - a)'}</InlineMath> is
          the area of this rectangle. Changing the value of <InlineMath>{'s'}</InlineMath> at
          endpoints changes the ordinate set but does not alter the integral.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Computing an Integral</p>
        <p className="mb-2">
          Consider a step function <InlineMath>{'s'}</InlineMath> on <InlineMath>{'[1, 6]'}</InlineMath>{' '}
          that takes constant values 2, 1, and <InlineMath>{'\\frac{9}{4}'}</InlineMath> on the
          open intervals <InlineMath>{'(1, 2)'}</InlineMath>, <InlineMath>{'(2, 5)'}</InlineMath>,
          and <InlineMath>{'(5, 6)'}</InlineMath> respectively. Its integral is:
        </p>
        <MathBlock>{'\\int_1^6 s(x)\\,dx = 2 \\cdot (2-1) + 1 \\cdot (5-2) + \\frac{9}{4} \\cdot (6-5) = 2 + 3 + \\frac{9}{4} = \\frac{29}{4}'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Independence from Partition Choice</h2>

      <p className="text-dark-200 mb-4">
        The integral formula is <strong>independent</strong> of the choice of partition{' '}
        <InlineMath>{'P'}</InlineMath>, as long as <InlineMath>{'s'}</InlineMath> is constant
        on the open subintervals of <InlineMath>{'P'}</InlineMath>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Why Refinements Don't Change the Integral</p>
        <p className="mb-2">
          Suppose we refine <InlineMath>{'P'}</InlineMath> to <InlineMath>{"P'"}</InlineMath> by
          inserting one new point <InlineMath>{'t'}</InlineMath> where{' '}
          <InlineMath>{'x_0 < t < x_1'}</InlineMath>. The first term{' '}
          <InlineMath>{'s_1(x_1 - x_0)'}</InlineMath> is replaced by:
        </p>
        <MathBlock>{'s_1(t - x_0) + s_1(x_1 - t) = s_1(x_1 - x_0)'}</MathBlock>
        <p>
          The sum is unchanged. By inserting new points one at a time, we see the integral
          is the same for all refinements of <InlineMath>{'P'}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Properties of the Integral</h2>

      <p className="text-dark-200 mb-4">
        The integral of step functions satisfies several fundamental properties. These properties
        carry over to integrals of more general functions, making them essential building blocks
        of integration theory.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Additive Property</h3>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.2 (Additive Property)</p>
        <p className="mb-2">
          The integral of a sum of two step functions equals the sum of their integrals:
        </p>
        <MathBlock>{'\\int_a^b [s(x) + t(x)]\\,dx = \\int_a^b s(x)\\,dx + \\int_a^b t(x)\\,dx'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        Geometrically, this reflects how areas combine: if we "stack" two ordinate sets,
        the total area is the sum of the individual areas.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Homogeneous Property</h3>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.3 (Homogeneous Property)</p>
        <p className="mb-2">
          If all function values are multiplied by a constant <InlineMath>{'c'}</InlineMath>,
          the integral is also multiplied by <InlineMath>{'c'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_a^b c \\cdot s(x)\\,dx = c \\int_a^b s(x)\\,dx'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        Geometrically, scaling the height of the ordinate set by factor{' '}
        <InlineMath>{'c'}</InlineMath> scales the area by the same factor.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Linearity Property</h3>

      <p className="text-dark-200 mb-4">
        The additive and homogeneous properties combine into the <strong>linearity property</strong>:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.4 (Linearity Property)</p>
        <p className="mb-2">
          For any real numbers <InlineMath>{'c_1'}</InlineMath> and <InlineMath>{'c_2'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_a^b [c_1 s(x) + c_2 t(x)]\\,dx = c_1 \\int_a^b s(x)\\,dx + c_2 \\int_a^b t(x)\\,dx'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Comparison Theorem</h3>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.5 (Comparison Theorem)</p>
        <p className="mb-2">
          If <InlineMath>{'s(x) < t(x)'}</InlineMath> for every <InlineMath>{'x'}</InlineMath> in{' '}
          <InlineMath>{'[a, b]'}</InlineMath>, then:
        </p>
        <MathBlock>{'\\int_a^b s(x)\\,dx < \\int_a^b t(x)\\,dx'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        This reflects the <strong>monotone property</strong> of area: if one ordinate set lies
        inside another, the smaller region has less area.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Additivity with Respect to Intervals</h3>

      <p className="text-dark-200 mb-4">
        The integral has important properties relating integrals over different intervals:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.6 (Additivity over Intervals)</p>
        <p className="mb-2">
          If <InlineMath>{'a < c < b'}</InlineMath>, then:
        </p>
        <MathBlock>{'\\int_a^c s(x)\\,dx + \\int_c^b s(x)\\,dx = \\int_a^b s(x)\\,dx'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        This reflects the additive property of area: if an ordinate set is decomposed into
        two parts, the sum of the areas of the parts equals the area of the whole.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Invariance Under Translation</h3>

      <p className="text-dark-200 mb-4">
        If we "shift" a step function horizontally, the integral is preserved:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.7 (Translation Invariance)</p>
        <p className="mb-2">
          If <InlineMath>{'s'}</InlineMath> is defined on <InlineMath>{'[a, b]'}</InlineMath> and{' '}
          <InlineMath>{'t(x) = s(x - c)'}</InlineMath>, then <InlineMath>{'t'}</InlineMath> is
          defined on <InlineMath>{'[a + c, b + c]'}</InlineMath> and:
        </p>
        <MathBlock>{'\\int_{a+c}^{b+c} t(x)\\,dx = \\int_a^b s(x)\\,dx'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        The ordinate sets are congruent (one is just a shifted copy of the other), so they
        have equal areas.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Understanding the Integral Geometrically</h2>

      <p className="text-dark-200 mb-4">
        For nonnegative step functions, the integral has a clear geometric meaning:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          The ordinate set consists of finitely many rectangles, one for each interval of constancy
        </li>
        <li>
          The integral equals the sum of the areas of these rectangles
        </li>
        <li>
          Values at subdivision points don't affect the integral—vertical line segments
          have zero area
        </li>
        <li>
          The integral captures the "total signed area" under the step function
        </li>
      </ul>

      <Callout type="info">
        <p className="font-semibold mb-2">Signed Area</p>
        <p>
          When <InlineMath>{'s_k < 0'}</InlineMath>, the product{' '}
          <InlineMath>{'s_k(x_k - x_{k-1})'}</InlineMath> is negative. The integral accounts
          for regions below the <InlineMath>{'x'}</InlineMath>-axis with negative area, giving
          a "signed area" interpretation.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <p className="text-dark-200 mb-4">
        The integral of a step function <InlineMath>{'s'}</InlineMath> on{' '}
        <InlineMath>{'[a, b]'}</InlineMath> is defined as the sum{' '}
        <InlineMath>{'\\sum s_k(x_k - x_{k-1})'}</InlineMath>, multiplying each constant value
        by its interval length. This definition is independent of the choice of partition and
        satisfies key properties: additivity, homogeneity, linearity, comparison, interval
        additivity, and translation invariance. These properties form the foundation for
        extending integration to more general functions.
      </p>
    </LessonLayout>
  );
}
