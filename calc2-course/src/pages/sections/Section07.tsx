import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Orthogonality in Euclidean Spaces</h2>

      <p>
        The concept of orthogonality (perpendicularity) is fundamental in Euclidean spaces.
        Orthogonal sets have special properties that make them particularly useful for
        constructing bases and solving approximation problems.
      </p>

      <h3>Definition of Orthogonality</h3>

      <Callout type="info">
        <strong>Definition:</strong> In a Euclidean space <InlineMath>V</InlineMath>, two
        elements <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> are called{' '}
        <strong>orthogonal</strong> if their inner product is zero:
        <MathBlock>(x, y) = 0</MathBlock>
      </Callout>

      <Callout type="info">
        <strong>Definition:</strong> A subset <InlineMath>S</InlineMath> of{' '}
        <InlineMath>V</InlineMath> is called an <strong>orthogonal set</strong> if{' '}
        <InlineMath>(x, y) = 0</InlineMath> for every pair of distinct elements{' '}
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> in <InlineMath>S</InlineMath>.
        An orthogonal set is called <strong>orthonormal</strong> if each of its elements has
        norm <InlineMath>1</InlineMath>.
      </Callout>

      <p>
        Note: The zero element is orthogonal to every element of <InlineMath>V</InlineMath>;
        it is the only element orthogonal to itself.
      </p>

      <h3>Orthogonality and Independence</h3>

      <Callout type="info">
        <strong>Theorem 1.10:</strong> In a Euclidean space <InlineMath>V</InlineMath>, every
        orthogonal set of nonzero elements is independent. In particular, in a
        finite-dimensional Euclidean space with <InlineMath>\dim V = n</InlineMath>, every
        orthogonal set consisting of <InlineMath>n</InlineMath> nonzero elements is a basis
        for <InlineMath>V</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> Let <InlineMath>S</InlineMath> be an orthogonal set of nonzero
        elements in <InlineMath>V</InlineMath>, and suppose some finite linear combination of
        elements of <InlineMath>S</InlineMath> is zero:
      </p>
      <MathBlock>{`\\sum_{i=1}^k c_i x_i = 0`}</MathBlock>
      <p>
        where each <InlineMath>x_i \in S</InlineMath>. Taking the inner product of each member
        with <InlineMath>x_1</InlineMath> and using <InlineMath>(x_i, x_1) = 0</InlineMath> if{' '}
        <InlineMath>i \neq 1</InlineMath>, we find <InlineMath>c_1(x_1, x_1) = 0</InlineMath>.
        Since <InlineMath>(x_1, x_1) \neq 0</InlineMath> (because{' '}
        <InlineMath>x_1 \neq 0</InlineMath>), we have <InlineMath>c_1 = 0</InlineMath>.
        Repeating for each <InlineMath>x_j</InlineMath>, we find all{' '}
        <InlineMath>c_j = 0</InlineMath>, proving independence.
      </p>

      <h3>Example: Trigonometric Functions</h3>

      <p>
        In the real linear space <InlineMath>C(0, 2\pi)</InlineMath> with inner product{' '}
        <InlineMath>{'(f, g) = \\int_0^{2\\pi} f(x)g(x)\\, dx'}</InlineMath>, consider the set{' '}
        <InlineMath>{'S = \\{u_0, u_1, u_2, \\ldots\\}'}</InlineMath> where:
      </p>
      <MathBlock>{`u_0(x) = 1, \\quad u_{2n-1}(x) = \\cos nx, \\quad u_{2n}(x) = \\sin nx \\quad \\text{for $n = 1, 2, \\ldots$}`}</MathBlock>

      <p>
        The orthogonality relations <InlineMath>{'\\int_0^{2\\pi} u_n(x)u_m(x)\\, dx = 0'}</InlineMath>{' '}
        for <InlineMath>m \neq n</InlineMath> show that <InlineMath>S</InlineMath> is an
        orthogonal set. Computing the norms:
      </p>
      <MathBlock>{`\\|u_0\\| = \\sqrt{2\\pi}, \\quad \\|u_n\\| = \\sqrt{\\pi} \\text{ for $n \\geq 1$}`}</MathBlock>

      <p>
        Dividing each <InlineMath>u_n</InlineMath> by its norm gives an orthonormal set{' '}
        <InlineMath>{'\\{\\varphi_0, \\varphi_1, \\varphi_2, \\ldots\\}'}</InlineMath>:
      </p>
      <MathBlock>{`\\varphi_0(x) = \\frac{1}{\\sqrt{2\\pi}}, \\quad \\varphi_{2n-1}(x) = \\frac{\\cos nx}{\\sqrt{\\pi}}, \\quad \\varphi_{2n}(x) = \\frac{\\sin nx}{\\sqrt{\\pi}}`}</MathBlock>

      <h3>Components Relative to an Orthogonal Basis</h3>

      <Callout type="info">
        <strong>Theorem 1.11:</strong> Let <InlineMath>V</InlineMath> be a finite-dimensional
        Euclidean space with dimension <InlineMath>n</InlineMath>, and assume that{' '}
        <InlineMath>{'S = \\{e_1, \\ldots, e_n\\}'}</InlineMath> is an orthogonal basis for{' '}
        <InlineMath>V</InlineMath>. If an element <InlineMath>x</InlineMath> is expressed as:
        <MathBlock>{`x = \\sum_{i=1}^n c_i e_i`}</MathBlock>
        then its components are given by:
        <MathBlock>{`c_j = \\frac{(x, e_j)}{(e_j, e_j)} \\quad \\text{for $j = 1, 2, \\ldots, n$}`}</MathBlock>
        In particular, if <InlineMath>S</InlineMath> is an orthonormal basis:
        <MathBlock>c_j = (x, e_j)</MathBlock>
      </Callout>

      <p>
        For an orthonormal basis <InlineMath>{'\\{e_1, \\ldots, e_n\\}'}</InlineMath>, we can
        write any element as:
      </p>
      <MathBlock>{`x = \\sum_{i=1}^n (x, e_i)e_i`}</MathBlock>

      <h3>Parseval's Formula</h3>

      <Callout type="info">
        <strong>Theorem 1.12 (Parseval's Formula):</strong> Let <InlineMath>V</InlineMath> be
        a finite-dimensional Euclidean space of dimension <InlineMath>n</InlineMath> with
        orthonormal basis <InlineMath>{'\\{e_1, \\ldots, e_n\\}'}</InlineMath>. Then for every
        pair of elements <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> in{' '}
        <InlineMath>V</InlineMath>:
        <MathBlock>{`(x, y) = \\sum_{i=1}^n (x, e_i)\\overline{(y, e_i)}`}</MathBlock>
        In particular, when <InlineMath>x = y</InlineMath>:
        <MathBlock>{`\\|x\\|^2 = \\sum_{i=1}^n |(x, e_i)|^2`}</MathBlock>
      </Callout>

      <p>
        This last equation is a generalization of the Pythagorean theorem: the square of the
        norm of an element equals the sum of the squares of its components relative to an
        orthonormal basis.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Orthonormal bases dramatically simplify computations in
        Euclidean spaces. Finding components becomes a matter of computing inner products
        rather than solving systems of equations. This is why orthonormal bases are preferred
        whenever possible.
      </Callout>
    </LessonLayout>
  );
}
