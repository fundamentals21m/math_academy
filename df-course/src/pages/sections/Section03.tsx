import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Basic Axioms and Examples</h2>
      <p>
        A <strong>group</strong> is one of the most fundamental algebraic structures, capturing the essence of
        symmetry and invertible operations. This section introduces the formal definition and explores key examples.
      </p>

      <h3>The Definition of a Group</h3>
      <Callout type="info">
        <strong>Definition:</strong> A <strong>group</strong> is a set <InlineMath>G</InlineMath> together with a binary operation <InlineMath>\cdot : G \times G \to G</InlineMath> satisfying:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Associativity:</strong> <InlineMath>(a \cdot b) \cdot c = a \cdot (b \cdot c)</InlineMath> for all <InlineMath>a, b, c \in G</InlineMath></li>
          <li><strong>Identity:</strong> There exists <InlineMath>e \in G</InlineMath> such that <InlineMath>e \cdot a = a \cdot e = a</InlineMath> for all <InlineMath>a \in G</InlineMath></li>
          <li><strong>Inverses:</strong> For each <InlineMath>a \in G</InlineMath>, there exists <InlineMath>a^{'{-1}'} \in G</InlineMath> such that <InlineMath>a \cdot a^{'{-1}'} = a^{'{-1}'} \cdot a = e</InlineMath></li>
        </ol>
        If additionally <InlineMath>a \cdot b = b \cdot a</InlineMath> for all <InlineMath>a, b \in G</InlineMath>, the group is called <strong>abelian</strong> (or <strong>commutative</strong>).
      </Callout>

      <p>
        The <strong>order</strong> of a group, denoted <InlineMath>|G|</InlineMath>, is the number of elements in <InlineMath>G</InlineMath>.
        A group is <strong>finite</strong> if <InlineMath>|G| {'<'} \infty</InlineMath>.
      </p>

      <h3>Basic Properties</h3>
      <p>From the axioms, we can derive:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>The identity element is unique</li>
        <li>Each element has a unique inverse</li>
        <li><InlineMath>(a^{'{-1}'})^{'{-1}'} = a</InlineMath></li>
        <li><InlineMath>(ab)^{'{-1}'} = b^{'{-1}'}a^{'{-1}'}</InlineMath> (the "shoes-socks" property)</li>
        <li>Cancellation laws: <InlineMath>ab = ac \Rightarrow b = c</InlineMath> and <InlineMath>ba = ca \Rightarrow b = c</InlineMath></li>
      </ul>

      <h3>Examples of Groups</h3>

      <p><strong>Example 1: Integers under addition</strong></p>
      <p>
        <InlineMath>(\mathbb{'{'}Z{'}'}, +)</InlineMath> is an abelian group with identity <InlineMath>0</InlineMath> and inverse <InlineMath>-a</InlineMath> for each <InlineMath>a</InlineMath>.
      </p>

      <p><strong>Example 2: Non-zero rationals under multiplication</strong></p>
      <p>
        <InlineMath>(\mathbb{'{'}Q{'}'}^*, \cdot)</InlineMath> is an abelian group with identity <InlineMath>1</InlineMath> and inverse <InlineMath>1/a</InlineMath> for each <InlineMath>a \neq 0</InlineMath>.
      </p>

      <p><strong>Example 3: Integers modulo n under addition</strong></p>
      <p>
        <InlineMath>(\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}, +)</InlineMath> is an abelian group of order <InlineMath>n</InlineMath>.
      </p>

      <p><strong>Example 4: Units of Z/nZ under multiplication</strong></p>
      <p>
        <InlineMath>((\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'})^\times, \cdot)</InlineMath> is an abelian group of order <InlineMath>\phi(n)</InlineMath>.
      </p>

      <p><strong>Example 5: The trivial group</strong></p>
      <p>
        The set <InlineMath>\{'{'}e\{'}'}</InlineMath> with operation <InlineMath>e \cdot e = e</InlineMath> is a group, called the <strong>trivial group</strong>.
      </p>

      <h3>Non-Examples</h3>
      <Callout type="warning">
        <strong>Non-Example:</strong> <InlineMath>(\mathbb{'{'}Z{'}'}, \cdot)</InlineMath> is NOT a group because most elements lack multiplicative inverses
        (e.g., <InlineMath>2</InlineMath> has no integer inverse).
      </Callout>

      <Callout type="warning">
        <strong>Non-Example:</strong> <InlineMath>(\mathbb{'{'}N{'}'}, +)</InlineMath> is NOT a group because there is no identity for addition
        in <InlineMath>\mathbb{'{'}N{'}'} = \{'{'}1, 2, 3, \ldots\{'}'}</InlineMath>, and even if we include <InlineMath>0</InlineMath>, positive integers lack additive inverses.
      </Callout>

      <h3>Notation</h3>
      <p>
        For a group written multiplicatively, we use exponent notation:
      </p>
      <MathBlock>a^n = \underbrace{'{'}a \cdot a \cdot \ldots \cdot a{'}'}_{'{'}n \text{'{'} times{'}'}} \quad \text{'{'}for{'}'} \, n {'>'} 0</MathBlock>
      <p>
        with <InlineMath>a^0 = e</InlineMath> and <InlineMath>a^{'{-n}'} = (a^{'{-1}'})^n</InlineMath>. For abelian groups written additively:
      </p>
      <MathBlock>na = \underbrace{'{'}a + a + \ldots + a{'}'}_{'{'}n \text{'{'} times{'}'}} \quad \text{'{'}for{'}'} \, n {'>'} 0</MathBlock>

      <h3>Order of an Element</h3>
      <Callout type="info">
        <strong>Definition:</strong> The <strong>order</strong> of an element <InlineMath>a \in G</InlineMath>, denoted <InlineMath>|a|</InlineMath> or <InlineMath>\text{'{'}ord{'}'}(a)</InlineMath>,
        is the smallest positive integer <InlineMath>n</InlineMath> such that <InlineMath>a^n = e</InlineMath>. If no such <InlineMath>n</InlineMath> exists, <InlineMath>a</InlineMath> has <strong>infinite order</strong>.
      </Callout>

      <p><strong>Example:</strong> In <InlineMath>\mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'}</InlineMath>:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>|\bar{'{'}0{'}'}| = 1</InlineMath></li>
        <li><InlineMath>|\bar{'{'}1{'}'}| = |\bar{'{'}5{'}'}| = 6</InlineMath></li>
        <li><InlineMath>|\bar{'{'}2{'}'}| = |\bar{'{'}4{'}'}| = 3</InlineMath></li>
        <li><InlineMath>|\bar{'{'}3{'}'}| = 2</InlineMath></li>
      </ul>

      <Callout type="success">
        <strong>Summary:</strong> A group is a set with an associative binary operation, identity element, and inverses.
        Groups capture the algebraic essence of symmetry and reversibility. The integers under addition and non-zero
        rationals under multiplication are fundamental examples.
      </Callout>
    </LessonLayout>
  );
}
