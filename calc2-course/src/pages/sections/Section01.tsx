import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>Examples of Linear Spaces</h2>
      <p>
        If we specify the set <InlineMath>V</InlineMath> and tell how to add its elements and how to
        multiply them by numbers, we get a concrete example of a linear space. The reader can
        verify that each of the following examples satisfies all the axioms for a real linear space.
      </p>

      <h3>Basic Examples</h3>

      <Callout type="info">
        <strong>Example 1:</strong> Let <InlineMath>{'V = \\mathbb{R}'}</InlineMath>, the set of all real numbers,
        and let <InlineMath>x + y</InlineMath> and <InlineMath>ax</InlineMath> be ordinary addition and multiplication of real numbers.
      </Callout>

      <Callout type="info">
        <strong>Example 2:</strong> Let <InlineMath>{'V = \\mathbb{C}'}</InlineMath>, the set of all complex numbers.
        Define <InlineMath>x + y</InlineMath> to be ordinary addition of complex numbers, and define <InlineMath>ax</InlineMath> to be
        multiplication of the complex number <InlineMath>x</InlineMath> by the real number <InlineMath>a</InlineMath>.
        Even though the elements of <InlineMath>V</InlineMath> are complex numbers, this is a <em>real</em> linear
        space because the scalars are real.
      </Callout>

      <Callout type="info">
        <strong>Example 3:</strong> Let <InlineMath>V = V_n</InlineMath>, the vector space of all n-tuples of
        real numbers, with addition and multiplication by scalars defined in the usual way in terms of components.
      </Callout>

      <Callout type="info">
        <strong>Example 4:</strong> Let <InlineMath>V</InlineMath> be the set of all vectors in <InlineMath>V_n</InlineMath>
        orthogonal to a given nonzero vector <InlineMath>N</InlineMath>. If <InlineMath>n = 2</InlineMath>, this linear
        space is a line through <InlineMath>0</InlineMath> with <InlineMath>N</InlineMath> as a normal vector.
        If <InlineMath>n = 3</InlineMath>, it is a plane through <InlineMath>0</InlineMath> with <InlineMath>N</InlineMath> as normal vector.
      </Callout>

      <h3>Function Spaces</h3>
      <p>
        The following examples are called <strong>function spaces</strong>. The elements of <InlineMath>V</InlineMath>
        are real-valued functions, with addition of two functions <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath>
        defined in the usual way:
      </p>
      <MathBlock>(f + g)(x) = f(x) + g(x)</MathBlock>
      <p>
        for every real <InlineMath>x</InlineMath> in the intersection of the domains of <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath>.
        Multiplication of a function <InlineMath>f</InlineMath> by a real scalar <InlineMath>a</InlineMath> is defined
        as follows: <InlineMath>af</InlineMath> is that function whose value at each <InlineMath>x</InlineMath> in the
        domain of <InlineMath>f</InlineMath> is <InlineMath>af(x)</InlineMath>. The zero element is the function whose
        values are everywhere zero.
      </p>

      <Callout type="info">
        <strong>Example 5:</strong> The set of all functions defined on a given interval.
      </Callout>

      <Callout type="info">
        <strong>Example 6:</strong> The set of all polynomials.
      </Callout>

      <Callout type="info">
        <strong>Example 7:</strong> The set of all polynomials of degree <InlineMath>\leq n</InlineMath>,
        where <InlineMath>n</InlineMath> is fixed. (Whenever we consider this set it is understood that the
        zero polynomial is also included.) Note: The set of all polynomials of degree <em>equal to</em>
        <InlineMath>n</InlineMath> is <em>not</em> a linear space because the closure axioms are not satisfied.
        For example, the sum of two polynomials of degree <InlineMath>n</InlineMath> need not have degree <InlineMath>n</InlineMath>.
      </Callout>

      <Callout type="info">
        <strong>Example 8:</strong> The set of all functions continuous on a given interval.
        If the interval is <InlineMath>[a, b]</InlineMath>, we denote this space by <InlineMath>C(a, b)</InlineMath>.
      </Callout>

      <Callout type="info">
        <strong>Example 9:</strong> The set of all functions differentiable at a given point.
      </Callout>

      <Callout type="info">
        <strong>Example 10:</strong> The set of all functions integrable on a given interval.
      </Callout>

      <h3>Important Observations</h3>

      <Callout type="info">
        <strong>Example 11:</strong> The set of all functions <InlineMath>f</InlineMath> defined at 1
        with <InlineMath>f(1) = 0</InlineMath>. The number 0 is essential in this example. If we replace
        0 by a nonzero number <InlineMath>c</InlineMath>, we violate the closure axioms.
      </Callout>

      <Callout type="info">
        <strong>Example 12:</strong> The set of all solutions of a homogeneous linear differential
        equation <InlineMath>y'' + ay' + by = 0</InlineMath>, where <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>
        are given constants. Here again 0 is essential. The set of solutions of a nonhomogeneous
        differential equation does <em>not</em> satisfy the closure axioms.
      </Callout>

      <h3>The Power of Abstraction</h3>
      <p>
        These examples illustrate how the linear space concept permeates algebra, geometry, and
        analysis. When a theorem is deduced from the axioms of a linear space, we obtain, in one
        stroke, a result valid for each concrete example.
      </p>
      <p>
        By unifying diverse examples in this way we gain a deeper insight into each. Sometimes
        special knowledge of one particular example helps to anticipate or interpret results valid
        for other examples and reveals relationships which might otherwise escape notice.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The variety of examples shows why abstract linear algebra is so
        powerful. A single proof about linear spaces simultaneously establishes results for vectors,
        polynomials, continuous functions, solutions of differential equations, and countless other
        mathematical structures.
      </Callout>
    </LessonLayout>
  );
}
