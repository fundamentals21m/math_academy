import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2>Basics: Sets, Functions, and Relations</h2>
      <p>
        Before diving into abstract algebra, we need to establish the foundational language of mathematics.
        This section reviews the essential concepts of sets, functions, and relations that underpin all
        of modern algebra.
      </p>

      <h3>Sets and Set Operations</h3>
      <p>
        A <strong>set</strong> is a well-defined collection of distinct objects, called <strong>elements</strong>
        or <strong>members</strong>. We write <InlineMath>a \in A</InlineMath> to indicate that <InlineMath>a</InlineMath> is
        an element of the set <InlineMath>A</InlineMath>, and <InlineMath>a \notin A</InlineMath> if it is not.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> A set <InlineMath>A</InlineMath> is a <strong>subset</strong> of <InlineMath>B</InlineMath>,
        written <InlineMath>A \subseteq B</InlineMath>, if every element of <InlineMath>A</InlineMath> is also an element
        of <InlineMath>B</InlineMath>. We write <InlineMath>A = B</InlineMath> if both <InlineMath>A \subseteq B</InlineMath> and <InlineMath>B \subseteq A</InlineMath>.
      </Callout>

      <p>The fundamental set operations are:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><strong>Union:</strong> <InlineMath>A \cup B = \{'{'}x : x \in A \text{'{'} or {'}'} x \in B\{'}'}</InlineMath></li>
        <li><strong>Intersection:</strong> <InlineMath>A \cap B = \{'{'}x : x \in A \text{'{'} and {'}'} x \in B\{'}'}</InlineMath></li>
        <li><strong>Difference:</strong> <InlineMath>A \setminus B = \{'{'}x : x \in A \text{'{'} and {'}'} x \notin B\{'}'}</InlineMath></li>
        <li><strong>Cartesian Product:</strong> <InlineMath>A \times B = \{'{'}(a, b) : a \in A, b \in B\{'}'}</InlineMath></li>
      </ul>

      <h3>Functions</h3>
      <p>
        A <strong>function</strong> <InlineMath>f: A \to B</InlineMath> is a rule that assigns to each element <InlineMath>a \in A</InlineMath> exactly
        one element <InlineMath>f(a) \in B</InlineMath>. The set <InlineMath>A</InlineMath> is called the <strong>domain</strong> and <InlineMath>B</InlineMath> is
        called the <strong>codomain</strong>.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>f: A \to B</InlineMath> be a function.
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>f</InlineMath> is <strong>injective</strong> (one-to-one) if <InlineMath>f(a_1) = f(a_2)</InlineMath> implies <InlineMath>a_1 = a_2</InlineMath></li>
          <li><InlineMath>f</InlineMath> is <strong>surjective</strong> (onto) if for every <InlineMath>b \in B</InlineMath>, there exists <InlineMath>a \in A</InlineMath> with <InlineMath>f(a) = b</InlineMath></li>
          <li><InlineMath>f</InlineMath> is <strong>bijective</strong> if it is both injective and surjective</li>
        </ul>
      </Callout>

      <p>
        If <InlineMath>f: A \to B</InlineMath> and <InlineMath>g: B \to C</InlineMath>, their <strong>composition</strong> is the function <InlineMath>g \circ f: A \to C</InlineMath> defined
        by <InlineMath>(g \circ f)(a) = g(f(a))</InlineMath>.
      </p>

      <h3>Relations</h3>
      <p>
        A <strong>relation</strong> on a set <InlineMath>A</InlineMath> is a subset <InlineMath>R \subseteq A \times A</InlineMath>. We often write <InlineMath>a \sim b</InlineMath> or <InlineMath>aRb</InlineMath> to
        indicate that <InlineMath>(a, b) \in R</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> An <strong>equivalence relation</strong> on <InlineMath>A</InlineMath> is a relation <InlineMath>\sim</InlineMath> satisfying:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Reflexive:</strong> <InlineMath>a \sim a</InlineMath> for all <InlineMath>a \in A</InlineMath></li>
          <li><strong>Symmetric:</strong> <InlineMath>a \sim b</InlineMath> implies <InlineMath>b \sim a</InlineMath></li>
          <li><strong>Transitive:</strong> <InlineMath>a \sim b</InlineMath> and <InlineMath>b \sim c</InlineMath> implies <InlineMath>a \sim c</InlineMath></li>
        </ul>
      </Callout>

      <p>
        For an equivalence relation <InlineMath>\sim</InlineMath>, the <strong>equivalence class</strong> of <InlineMath>a</InlineMath> is:
      </p>
      <MathBlock>[a] = \{'{'}b \in A : b \sim a\{'}'}</MathBlock>

      <h3>Example: Congruence Modulo n</h3>
      <p>
        A fundamental example of an equivalence relation is <strong>congruence modulo n</strong> on the integers.
        For a positive integer <InlineMath>n</InlineMath>, we define:
      </p>
      <MathBlock>a \equiv b \pmod{'{'}n{'}'} \iff n \mid (a - b)</MathBlock>
      <p>
        The equivalence classes are the residue classes <InlineMath>[0], [1], \ldots, [n-1]</InlineMath>, and the set of all
        equivalence classes forms <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath>.
      </p>

      <h3>The Well-Ordering Principle</h3>
      <p>
        A key property of the natural numbers is the <strong>Well-Ordering Principle</strong>: every non-empty
        subset of <InlineMath>\mathbb{'{'}N{'}'} = \{'{'}0, 1, 2, \ldots\{'}'}</InlineMath> has a least element.
      </p>
      <p>
        This principle is equivalent to the <strong>Principle of Mathematical Induction</strong> and will be
        used extensively throughout abstract algebra, particularly in proving existence and uniqueness results.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> Sets, functions, and relations form the foundational language of abstract algebra.
        Equivalence relations partition sets into equivalence classes, and bijective functions establish
        structural correspondences between sets. These concepts will be generalized as we study algebraic structures.
      </Callout>
    </LessonLayout>
  );
}
