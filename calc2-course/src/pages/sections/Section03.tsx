import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Subspaces of a Linear Space</h2>
      <p>
        Given a linear space <InlineMath>V</InlineMath>, let <InlineMath>S</InlineMath> be a nonempty
        subset of <InlineMath>V</InlineMath>. If <InlineMath>S</InlineMath> is also a linear space, with
        the same operations of addition and multiplication by scalars, then <InlineMath>S</InlineMath> is
        called a <strong>subspace</strong> of <InlineMath>V</InlineMath>.
      </p>

      <h3>The Subspace Criterion</h3>

      <Callout type="info">
        <strong>Theorem 1.4:</strong> Let <InlineMath>S</InlineMath> be a nonempty subset of a linear
        space <InlineMath>V</InlineMath>. Then <InlineMath>S</InlineMath> is a subspace if and only
        if <InlineMath>S</InlineMath> satisfies the closure axioms.
      </Callout>

      <p><strong>Proof:</strong> If <InlineMath>S</InlineMath> is a subspace, it satisfies all the axioms
        for a linear space, and hence, in particular, it satisfies the closure axioms.
      </p>
      <p>
        Now we show that if <InlineMath>S</InlineMath> satisfies the closure axioms it satisfies the others
        as well. The commutative and associative laws for addition (Axioms 3 and 4) and the axioms for
        multiplication by scalars (Axioms 7 through 10) are automatically satisfied in <InlineMath>S</InlineMath>
        because they hold for all elements of <InlineMath>V</InlineMath>.
      </p>
      <p>
        It remains to verify Axioms 5 and 6: the existence of a zero element in <InlineMath>S</InlineMath>,
        and the existence of a negative for each element in <InlineMath>S</InlineMath>.
      </p>
      <p>
        Let <InlineMath>x</InlineMath> be any element of <InlineMath>S</InlineMath>. By Axiom 2,
        <InlineMath>ax</InlineMath> is in <InlineMath>S</InlineMath> for every scalar <InlineMath>a</InlineMath>.
        Taking <InlineMath>a = 0</InlineMath>, it follows that <InlineMath>0 \cdot x</InlineMath> is in <InlineMath>S</InlineMath>.
        But <InlineMath>0 \cdot x = 0</InlineMath>, so <InlineMath>0 \in S</InlineMath>, and Axiom 5 is satisfied.
        Taking <InlineMath>a = -1</InlineMath>, we see that <InlineMath>(-1)x</InlineMath> is in <InlineMath>S</InlineMath>.
        But <InlineMath>x + (-1)x = 0</InlineMath> since both <InlineMath>x</InlineMath> and <InlineMath>(-1)x</InlineMath>
        are in <InlineMath>V</InlineMath>, so Axiom 6 is satisfied in <InlineMath>S</InlineMath>.
        Therefore <InlineMath>S</InlineMath> is a subspace of <InlineMath>V</InlineMath>.
      </p>

      <h3>Linear Combinations and the Linear Span</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>S</InlineMath> be a nonempty subset of a linear
        space <InlineMath>V</InlineMath>. An element <InlineMath>x</InlineMath> in <InlineMath>V</InlineMath>
        of the form
        <MathBlock>{`x = \\sum_{i=1}^k c_i x_i`}</MathBlock>
        where <InlineMath>x_1, \ldots, x_k</InlineMath> are all in <InlineMath>S</InlineMath> and
        <InlineMath>c_1, \ldots, c_k</InlineMath> are scalars, is called a <strong>finite linear combination</strong>
        of elements of <InlineMath>S</InlineMath>.
      </Callout>

      <Callout type="info">
        <strong>Definition:</strong> The set of all finite linear combinations of elements of <InlineMath>S</InlineMath>
        satisfies the closure axioms and hence is a subspace of <InlineMath>V</InlineMath>. We call this
        the <strong>subspace spanned by S</strong>, or the <strong>linear span</strong> of <InlineMath>S</InlineMath>,
        and denote it by <InlineMath>L(S)</InlineMath>. If <InlineMath>S</InlineMath> is empty, we
        define <InlineMath>L(S)</InlineMath> to be <InlineMath>{'\\{0\\}'}</InlineMath>, the set consisting of the zero element alone.
      </Callout>

      <h3>Examples of Spanning Sets</h3>
      <p>
        Different sets may span the same subspace. For example, the space <InlineMath>V_2</InlineMath> is
        spanned by each of the following sets of vectors:
      </p>
      <MathBlock>{`\\{i, j\\}, \\quad \\{i, j, i+j\\}, \\quad \\{0, i, -i, j, -j, i+j\\}`}</MathBlock>

      <p>
        The space of all polynomials <InlineMath>p(t)</InlineMath> of degree <InlineMath>\leq n</InlineMath>
        is spanned by the set of <InlineMath>n + 1</InlineMath> polynomials:
      </p>
      <MathBlock>{`\\{1, t, t^2, \\ldots, t^n\\}`}</MathBlock>

      <p>It is also spanned by:</p>
      <MathBlock>{`\\left\\{1, \\frac{t}{2}, \\frac{t^2}{3}, \\ldots, \\frac{t^n}{n+1}\\right\\}`}</MathBlock>

      <p>and by:</p>
      <MathBlock>{`\\{1, (1+t), (1+t)^2, \\ldots, (1+t)^n\\}`}</MathBlock>

      <p>
        The space of all polynomials is spanned by the infinite set of polynomials
        <InlineMath>{'\\{1, t, t^2, \\ldots\\}'}</InlineMath>.
      </p>

      <h3>Questions About Spanning</h3>
      <p>
        A number of questions arise naturally at this point:
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Which spaces can be spanned by a finite set of elements?</li>
        <li>If a space can be spanned by a finite set of elements, what is the smallest number of elements required?</li>
      </ul>
      <p>
        To discuss these and related questions, we will introduce the concepts of dependence, independence,
        bases, and dimension in the following sections.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> A subspace is a subset that is itself a linear space under the same
        operations. To check if a subset is a subspace, we only need to verify the closure axioms—the
        other axioms are inherited from the parent space. The linear span of a set is the smallest
        subspace containing that set.
      </Callout>
    </LessonLayout>
  );
}
