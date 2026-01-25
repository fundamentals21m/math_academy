import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Bases and Dimension</h2>

      <p>
        In this section, we introduce the concepts of basis and dimension for linear spaces.
        These concepts are fundamental to understanding the structure of linear spaces and
        allow us to classify spaces by their "size."
      </p>

      <h3>Definition of a Basis</h3>

      <Callout type="info">
        <strong>Definition:</strong> A finite set <InlineMath>S</InlineMath> of elements in a
        linear space <InlineMath>V</InlineMath> is called a <strong>finite basis</strong> for{' '}
        <InlineMath>V</InlineMath> if <InlineMath>S</InlineMath> is independent and spans{' '}
        <InlineMath>V</InlineMath>. The space <InlineMath>V</InlineMath> is called{' '}
        <strong>finite-dimensional</strong> if it has a finite basis, or if{' '}
        <InlineMath>{'V = \\{0\\}'}</InlineMath>. Otherwise, <InlineMath>V</InlineMath> is
        called <strong>infinite-dimensional</strong>.
      </Callout>

      <p>
        A basis for a linear space captures the essential structure of the space: every element
        can be expressed uniquely as a linear combination of basis elements.
      </p>

      <h3>Uniqueness of Dimension</h3>

      <Callout type="info">
        <strong>Theorem 1.6:</strong> Let <InlineMath>V</InlineMath> be a finite-dimensional
        linear space. Then every finite basis for <InlineMath>V</InlineMath> has the same
        number of elements.
      </Callout>

      <p>
        <strong>Proof Outline:</strong> Let <InlineMath>S</InlineMath> and{' '}
        <InlineMath>T</InlineMath> be two finite bases for <InlineMath>V</InlineMath>. Suppose{' '}
        <InlineMath>S</InlineMath> consists of <InlineMath>k</InlineMath> elements and{' '}
        <InlineMath>T</InlineMath> consists of <InlineMath>m</InlineMath> elements. Since{' '}
        <InlineMath>S</InlineMath> is independent and spans <InlineMath>V</InlineMath>, Theorem
        1.5 tells us that every set of <InlineMath>k + 1</InlineMath> elements in{' '}
        <InlineMath>V</InlineMath> is dependent. Therefore, every set of more than{' '}
        <InlineMath>k</InlineMath> elements in <InlineMath>V</InlineMath> is dependent. Since{' '}
        <InlineMath>T</InlineMath> is an independent set, we must have{' '}
        <InlineMath>m \leq k</InlineMath>. The same argument with <InlineMath>S</InlineMath> and{' '}
        <InlineMath>T</InlineMath> interchanged shows that <InlineMath>k \leq m</InlineMath>.
        Therefore <InlineMath>k = m</InlineMath>.
      </p>

      <h3>Definition of Dimension</h3>

      <Callout type="info">
        <strong>Definition:</strong> If a linear space <InlineMath>V</InlineMath> has a basis of{' '}
        <InlineMath>n</InlineMath> elements, the integer <InlineMath>n</InlineMath> is called
        the <strong>dimension</strong> of <InlineMath>V</InlineMath>. We write{' '}
        <InlineMath>n = \dim V</InlineMath>. If <InlineMath>{'V = \\{0\\}'}</InlineMath>, we
        say <InlineMath>V</InlineMath> has dimension <InlineMath>0</InlineMath>.
      </Callout>

      <h3>Examples</h3>

      <p>
        <strong>Example 1:</strong> The space <InlineMath>V_n</InlineMath> has dimension{' '}
        <InlineMath>n</InlineMath>. One basis is the set of <InlineMath>n</InlineMath> unit
        coordinate vectors.
      </p>

      <p>
        <strong>Example 2:</strong> The space of all polynomials <InlineMath>p(t)</InlineMath>{' '}
        of degree <InlineMath>\leq n</InlineMath> has dimension <InlineMath>n + 1</InlineMath>.
        One basis is the set of <InlineMath>n + 1</InlineMath> polynomials:
      </p>
      <MathBlock>{`\\{1, t, t^2, \\ldots, t^n\\}`}</MathBlock>
      <p>
        Every polynomial of degree <InlineMath>\leq n</InlineMath> is a linear combination of
        these <InlineMath>n + 1</InlineMath> polynomials.
      </p>

      <p>
        <strong>Example 3:</strong> The space of solutions of the differential equation{' '}
        <InlineMath>y'' - 2y' - 3y = 0</InlineMath> has dimension <InlineMath>2</InlineMath>.
        One basis consists of the two functions:
      </p>
      <MathBlock>{`u_1(x) = e^{-x}, \\quad u_2(x) = e^{3x}`}</MathBlock>
      <p>Every solution is a linear combination of these two.</p>

      <p>
        <strong>Example 4:</strong> The space of all polynomials <InlineMath>p(t)</InlineMath>{' '}
        is <strong>infinite-dimensional</strong>. Although the infinite set{' '}
        <InlineMath>{'\\{1, t, t^2, \\ldots\\}'}</InlineMath> spans this space, no finite set
        of polynomials spans the space.
      </p>

      <h3>Key Theorem on Bases</h3>

      <Callout type="info">
        <strong>Theorem 1.7:</strong> Let <InlineMath>V</InlineMath> be a finite-dimensional
        linear space with <InlineMath>\dim V = n</InlineMath>. Then we have the following:
        <br />
        <br />
        (a) Any set of independent elements in <InlineMath>V</InlineMath> is a subset of some
        basis for <InlineMath>V</InlineMath>.
        <br />
        <br />
        (b) Any set of <InlineMath>n</InlineMath> independent elements is a basis for{' '}
        <InlineMath>V</InlineMath>.
      </Callout>

      <p>
        <strong>Proof of (a):</strong> Let <InlineMath>{'S = \\{x_1, \\ldots, x_k\\}'}</InlineMath>{' '}
        be any independent set of elements in <InlineMath>V</InlineMath>. If{' '}
        <InlineMath>L(S) = V</InlineMath>, then <InlineMath>S</InlineMath> is a basis. If not,
        then there is some element <InlineMath>y</InlineMath> in <InlineMath>V</InlineMath> which
        is not in <InlineMath>L(S)</InlineMath>. Adjoin this element to <InlineMath>S</InlineMath>{' '}
        and consider the new set <InlineMath>{'S\' = \\{x_1, \\ldots, x_k, y\\}'}</InlineMath>.
        This set is independent. If <InlineMath>L(S') = V</InlineMath>, then{' '}
        <InlineMath>S'</InlineMath> is a basis. If not, we repeat the process. We must arrive at
        a basis in a finite number of steps, otherwise we would eventually obtain an independent
        set with <InlineMath>n + 1</InlineMath> elements, contradicting Theorem 1.5.
      </p>

      <p>
        <strong>Proof of (b):</strong> Let <InlineMath>S</InlineMath> be any independent set
        consisting of <InlineMath>n</InlineMath> elements. By part (a), <InlineMath>S</InlineMath>{' '}
        is a subset of some basis, say <InlineMath>B</InlineMath>. But by Theorem 1.6, the basis{' '}
        <InlineMath>B</InlineMath> has exactly <InlineMath>n</InlineMath> elements, so{' '}
        <InlineMath>S = B</InlineMath>.
      </p>

      <h3>Components</h3>

      <p>
        Let <InlineMath>V</InlineMath> be a linear space of dimension <InlineMath>n</InlineMath>{' '}
        and consider a basis whose elements <InlineMath>e_1, \ldots, e_n</InlineMath> are taken
        in a given order. We denote such an <strong>ordered basis</strong> as an n-tuple{' '}
        <InlineMath>(e_1, \ldots, e_n)</InlineMath>. If <InlineMath>x \in V</InlineMath>, we can
        express <InlineMath>x</InlineMath> as a linear combination of these basis elements:
      </p>
      <MathBlock>{`x = \\sum_{i=1}^n c_i e_i`}</MathBlock>

      <p>
        The coefficients in this equation determine an n-tuple of numbers{' '}
        <InlineMath>(c_1, \ldots, c_n)</InlineMath> that is <strong>uniquely determined</strong>{' '}
        by <InlineMath>x</InlineMath>. If we had another representation{' '}
        <InlineMath>x = \sum d_i e_i</InlineMath>, then by subtraction we would get{' '}
        <InlineMath>\sum (c_i - d_i)e_i = 0</InlineMath>. Since the basis elements are
        independent, this implies <InlineMath>c_i = d_i</InlineMath> for each{' '}
        <InlineMath>i</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> The components of the ordered n-tuple{' '}
        <InlineMath>(c_1, \ldots, c_n)</InlineMath> are called the <strong>components</strong> of{' '}
        <InlineMath>x</InlineMath> relative to the ordered basis{' '}
        <InlineMath>(e_1, \ldots, e_n)</InlineMath>.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The concept of dimension is one of the most important
        invariants of a linear space. It provides a way to classify finite-dimensional spaces:
        two spaces with the same dimension over the same field of scalars are essentially "the
        same" (isomorphic). The existence and uniqueness of components relative to an ordered
        basis allows us to reduce problems in abstract linear spaces to problems in{' '}
        <InlineMath>V_n</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
