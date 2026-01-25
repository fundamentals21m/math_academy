import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Dependent and Independent Sets in a Linear Space</h2>

      <p>
        In Section 1.6, we introduced the concept of subspaces and the linear span of a set. Now we
        turn to a fundamental question: given a set of elements that spans a subspace, is there any
        redundancy? Can some elements be removed while still spanning the same subspace? The concepts
        of dependence and independence help us answer these questions.
      </p>

      <h3>Definition of Dependence and Independence</h3>

      <Callout type="info">
        <strong>Definition:</strong> A set <InlineMath>S</InlineMath> of elements in a linear
        space <InlineMath>V</InlineMath> is called <strong>dependent</strong> if there is a finite
        set of distinct elements in <InlineMath>S</InlineMath>, say <InlineMath>x_1, \ldots, x_k</InlineMath>,
        and a corresponding set of scalars <InlineMath>c_1, \ldots, c_k</InlineMath>, <em>not all zero</em>,
        such that
        <MathBlock>{`\\sum_{i=1}^k c_i x_i = 0`}</MathBlock>
      </Callout>

      <p>
        An equation <InlineMath>\sum c_i x_i = 0</InlineMath> with not all <InlineMath>c_i = 0</InlineMath> is
        said to be a <strong>nontrivial representation of 0</strong>.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> The set <InlineMath>S</InlineMath> is called <strong>independent</strong> if
        it is not dependent. In this case, for all choices of distinct
        elements <InlineMath>x_1, \ldots, x_k</InlineMath> in <InlineMath>S</InlineMath> and
        scalars <InlineMath>c_1, \ldots, c_k</InlineMath>:
        <MathBlock>{`\\sum_{i=1}^k c_i x_i = 0 \\quad \\Rightarrow \\quad c_1 = c_2 = \\cdots = c_k = 0`}</MathBlock>
      </Callout>

      <p>
        Although dependence and independence are properties of sets of elements, we also apply these
        terms to the elements themselves. For example, the elements in an independent set are called
        <strong> independent elements</strong>.
      </p>

      <h3>Basic Examples and Properties</h3>

      <p>
        <strong>Example 1:</strong> If a subset <InlineMath>T</InlineMath> of a set <InlineMath>S</InlineMath> is
        dependent, then <InlineMath>S</InlineMath> itself is dependent. This is logically equivalent to the
        statement that every subset of an independent set is independent.
      </p>

      <p>
        <strong>Example 2:</strong> If one element in <InlineMath>S</InlineMath> is a scalar multiple of another,
        then <InlineMath>S</InlineMath> is dependent.
      </p>

      <p>
        <strong>Example 3:</strong> If <InlineMath>0 \in S</InlineMath>, then <InlineMath>S</InlineMath> is
        dependent. (We can write <InlineMath>1 \cdot 0 = 0</InlineMath>, a nontrivial representation.)
      </p>

      <p>
        <strong>Example 4:</strong> The empty set is independent. (There are no elements to form a
        nontrivial linear combination.)
      </p>

      <h3>Examples in Function Spaces</h3>

      <p>
        <strong>Example 5:</strong> Let <InlineMath>u_1(t) = \cos^2 t</InlineMath>, <InlineMath>u_2(t) = \sin^2 t</InlineMath>,
        and <InlineMath>u_3(t) = 1</InlineMath> for all real <InlineMath>t</InlineMath>. The Pythagorean
        identity shows that <InlineMath>u_1 + u_2 - u_3 = 0</InlineMath>, so the three
        functions <InlineMath>u_1, u_2, u_3</InlineMath> are dependent.
      </p>

      <p>
        <strong>Example 6:</strong> Let <InlineMath>u_k(t) = t^k</InlineMath> for <InlineMath>k = 0, 1, 2, \ldots</InlineMath> and <InlineMath>t</InlineMath> real.
        The set <InlineMath>{'S = \\{u_0, u_1, u_2, \\ldots\\}'}</InlineMath> is independent. To prove this,
        it suffices to show that for each <InlineMath>n</InlineMath>, the <InlineMath>n + 1</InlineMath> polynomials <InlineMath>u_0, u_1, \ldots, u_n</InlineMath> are
        independent. A relation of the form <InlineMath>\sum c_k u_k = 0</InlineMath> means that:
      </p>
      <MathBlock>{`\\sum_{k=0}^n c_k t^k = 0`}</MathBlock>
      <p>
        for all real <InlineMath>t</InlineMath>. When <InlineMath>t = 0</InlineMath>, this
        gives <InlineMath>c_0 = 0</InlineMath>. Differentiating and setting <InlineMath>t = 0</InlineMath>,
        we find <InlineMath>c_1 = 0</InlineMath>. Repeating the process, each coefficient <InlineMath>c_k</InlineMath> is zero.
      </p>

      <h3>Independence of Exponential Functions</h3>

      <p>
        <strong>Example 7:</strong> If <InlineMath>a_1, \ldots, a_n</InlineMath> are distinct real numbers,
        the <InlineMath>n</InlineMath> exponential functions
      </p>
      <MathBlock>{`u_1(x) = e^{a_1 x}, \\quad \\ldots, \\quad u_n(x) = e^{a_n x}`}</MathBlock>
      <p>
        are independent. We prove this by induction on <InlineMath>n</InlineMath>.
      </p>

      <p>
        The result holds trivially when <InlineMath>n = 1</InlineMath>. Assume it is true
        for <InlineMath>n - 1</InlineMath> exponential functions and consider scalars <InlineMath>c_1, \ldots, c_n</InlineMath> such
        that
      </p>
      <MathBlock>{`\\sum_{k=1}^n c_k e^{a_k x} = 0`}</MathBlock>

      <p>
        Let <InlineMath>a_M</InlineMath> be the largest of the <InlineMath>n</InlineMath> numbers.
        Multiplying both members by <InlineMath>{'e^{-a_M x}'}</InlineMath>, we obtain:
      </p>
      <MathBlock>{`\\sum_{k=1}^n c_k e^{(a_k - a_M)x} = 0`}</MathBlock>

      <p>
        If <InlineMath>k \neq M</InlineMath>, the number <InlineMath>a_k - a_M</InlineMath> is negative.
        Therefore, when <InlineMath>x \to +\infty</InlineMath>, each term with <InlineMath>k \neq M</InlineMath> tends
        to zero and we find that <InlineMath>c_M = 0</InlineMath>. Deleting the <InlineMath>M</InlineMath>th term
        and applying the induction hypothesis, each of the remaining <InlineMath>n - 1</InlineMath> coefficients is zero.
      </p>

      <h3>Key Theorem on Dependent Sets</h3>

      <Callout type="info">
        <strong>Theorem 1.5:</strong> Let <InlineMath>{'S = \\{x_1, \\ldots, x_k\\}'}</InlineMath> be an independent
        set consisting of <InlineMath>k</InlineMath> elements in a linear space <InlineMath>V</InlineMath>, and
        let <InlineMath>L(S)</InlineMath> be the subspace spanned by <InlineMath>S</InlineMath>. Then every
        set of <InlineMath>k + 1</InlineMath> elements in <InlineMath>L(S)</InlineMath> is dependent.
      </Callout>

      <p>
        This theorem is fundamental because it tells us that if a subspace can be spanned by <InlineMath>k</InlineMath> independent
        elements, then no set of more than <InlineMath>k</InlineMath> elements in that subspace can be independent.
      </p>

      <h4>Proof Outline</h4>
      <p>
        The proof proceeds by induction on <InlineMath>k</InlineMath>. For <InlineMath>k = 1</InlineMath>,
        if <InlineMath>{'S = \\{x_1\\}'}</InlineMath> with <InlineMath>x_1 \neq 0</InlineMath>, any two elements
        in <InlineMath>L(S)</InlineMath> are scalar multiples of <InlineMath>x_1</InlineMath> and hence dependent.
      </p>

      <p>
        For the induction step, assume the theorem holds for <InlineMath>k - 1</InlineMath> and
        consider any <InlineMath>k + 1</InlineMath> elements <InlineMath>{'y_1, \\ldots, y_{k+1}'}</InlineMath> in <InlineMath>L(S)</InlineMath>.
        Each <InlineMath>y_i</InlineMath> can be expressed as a linear combination of <InlineMath>x_1, \ldots, x_k</InlineMath>.
        By examining the coefficients of <InlineMath>x_1</InlineMath> and using clever algebraic manipulation,
        we can reduce the problem to the case of <InlineMath>k - 1</InlineMath> elements, completing the induction.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Theorem 1.5 is the foundation for the concept of dimension. It shows
        that if a space can be spanned by <InlineMath>k</InlineMath> independent elements, then no independent
        set can have more than <InlineMath>k</InlineMath> elements. This will allow us to define dimension
        unambiguously in the next section.
      </Callout>
    </LessonLayout>
  );
}
