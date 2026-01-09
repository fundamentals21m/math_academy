import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Symmetric Groups</h2>
      <p>
        The <strong>symmetric group</strong> <InlineMath>S_n</InlineMath> consists of all permutations of <InlineMath>n</InlineMath> objects.
        It is one of the most important groups in mathematics, and every finite group can be embedded into some <InlineMath>S_n</InlineMath>.
      </p>

      <h3>Permutations</h3>
      <Callout type="info">
        <strong>Definition:</strong> A <strong>permutation</strong> of a set <InlineMath>A</InlineMath> is a bijection <InlineMath>\sigma: A \to A</InlineMath>.
        The <strong>symmetric group</strong> on <InlineMath>n</InlineMath> letters, denoted <InlineMath>S_n</InlineMath>, is the group of all permutations
        of <InlineMath>\{'{'}1, 2, \ldots, n\{'}'}</InlineMath> under composition.
      </Callout>

      <p>
        The order of <InlineMath>S_n</InlineMath> is <InlineMath>|S_n| = n!</InlineMath>. For example, <InlineMath>|S_3| = 6</InlineMath>, <InlineMath>|S_4| = 24</InlineMath>, <InlineMath>|S_5| = 120</InlineMath>.
      </p>

      <h3>Two-Line Notation</h3>
      <p>
        A permutation <InlineMath>\sigma \in S_n</InlineMath> can be written in <strong>two-line notation</strong>:
      </p>
      <MathBlock>\sigma = \begin{'{'}pmatrix{'}'} 1 & 2 & 3 & \cdots & n \\ \sigma(1) & \sigma(2) & \sigma(3) & \cdots & \sigma(n) \end{'{'}pmatrix{'}'}</MathBlock>

      <p><strong>Example:</strong> In <InlineMath>S_4</InlineMath>, the permutation sending <InlineMath>1 \mapsto 3, 2 \mapsto 1, 3 \mapsto 4, 4 \mapsto 2</InlineMath>:</p>
      <MathBlock>\sigma = \begin{'{'}pmatrix{'}'} 1 & 2 & 3 & 4 \\ 3 & 1 & 4 & 2 \end{'{'}pmatrix{'}'}</MathBlock>

      <h3>Cycle Notation</h3>
      <p>
        A more compact notation uses <strong>cycles</strong>. A <strong>cycle</strong> <InlineMath>(a_1 \, a_2 \, \ldots \, a_k)</InlineMath>
        is the permutation that sends <InlineMath>a_1 \mapsto a_2 \mapsto \cdots \mapsto a_k \mapsto a_1</InlineMath> and fixes all other elements.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> A <strong>k-cycle</strong> (or cycle of length <InlineMath>k</InlineMath>) moves <InlineMath>k</InlineMath> elements cyclically
        and fixes all others. A 2-cycle is called a <strong>transposition</strong>.
      </Callout>

      <p><strong>Example:</strong> The permutation above in cycle notation:</p>
      <MathBlock>\sigma = (1 \, 3 \, 4 \, 2) \quad \text{'{'}or equivalently{'}'} \quad (3 \, 4 \, 2 \, 1)</MathBlock>

      <h3>Disjoint Cycle Decomposition</h3>
      <p>
        Cycles are <strong>disjoint</strong> if they move completely different elements. Disjoint cycles commute!
      </p>

      <Callout type="info">
        <strong>Theorem:</strong> Every permutation can be written uniquely (up to order) as a product of disjoint cycles.
      </Callout>

      <p><strong>Example:</strong> In <InlineMath>S_6</InlineMath>:</p>
      <MathBlock>\begin{'{'}pmatrix{'}'} 1 & 2 & 3 & 4 & 5 & 6 \\ 2 & 1 & 4 & 5 & 3 & 6 \end{'{'}pmatrix{'}'} = (1 \, 2)(3 \, 4 \, 5)</MathBlock>

      <h3>Order of a Permutation</h3>
      <Callout type="info">
        <strong>Theorem:</strong> The order of a permutation is the least common multiple of the lengths of its disjoint cycles.
      </Callout>

      <p><strong>Example:</strong> <InlineMath>|(1 \, 2)(3 \, 4 \, 5)| = \text{'{'}lcm{'}'}(2, 3) = 6</InlineMath></p>

      <h3>Transpositions</h3>
      <Callout type="info">
        <strong>Theorem:</strong> Every permutation can be written as a product of transpositions.
      </Callout>

      <p>The key identity is:</p>
      <MathBlock>(a_1 \, a_2 \, \ldots \, a_k) = (a_1 \, a_k)(a_1 \, a_{'{'}k-1{'}'})\cdots(a_1 \, a_2)</MathBlock>

      <p><strong>Example:</strong> <InlineMath>(1 \, 2 \, 3 \, 4) = (1 \, 4)(1 \, 3)(1 \, 2)</InlineMath></p>

      <h3>Multiplication of Permutations</h3>
      <p>
        We compose permutations right to left (function composition). For <InlineMath>\sigma, \tau \in S_n</InlineMath>:
      </p>
      <MathBlock>(\sigma \tau)(x) = \sigma(\tau(x))</MathBlock>

      <p><strong>Example:</strong> In <InlineMath>S_3</InlineMath>, let <InlineMath>\sigma = (1 \, 2)</InlineMath> and <InlineMath>\tau = (1 \, 2 \, 3)</InlineMath>:</p>
      <MathBlock>\sigma \tau = (1 \, 2)(1 \, 2 \, 3) = (2 \, 3)</MathBlock>
      <p>
        To see this: <InlineMath>1 \xrightarrow{'{'}\tau{'}'} 2 \xrightarrow{'{'}\sigma{'}'} 1</InlineMath>, so 1 is fixed.
        <InlineMath>2 \xrightarrow{'{'}\tau{'}'} 3 \xrightarrow{'{'}\sigma{'}'} 3</InlineMath>, <InlineMath>3 \xrightarrow{'{'}\tau{'}'} 1 \xrightarrow{'{'}\sigma{'}'} 2</InlineMath>.
      </p>

      <h3>S_3: The Smallest Non-Abelian Group</h3>
      <p><InlineMath>S_3</InlineMath> has 6 elements:</p>
      <MathBlock>S_3 = \{'{'}e, (1\,2), (1\,3), (2\,3), (1\,2\,3), (1\,3\,2)\{'}'}</MathBlock>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li>Identity <InlineMath>e</InlineMath>: order 1</li>
        <li>Three transpositions: order 2</li>
        <li>Two 3-cycles: order 3</li>
      </ul>
      <p><InlineMath>S_3</InlineMath> is non-abelian: <InlineMath>(1\,2)(1\,3) = (1\,3\,2) \neq (1\,2\,3) = (1\,3)(1\,2)</InlineMath></p>

      <Callout type="success">
        <strong>Summary:</strong> The symmetric group <InlineMath>S_n</InlineMath> of all permutations of <InlineMath>n</InlineMath> elements has order <InlineMath>n!</InlineMath>.
        Every permutation has a unique decomposition into disjoint cycles, and the order equals the LCM of cycle lengths.
        <InlineMath>S_n</InlineMath> is non-abelian for <InlineMath>n \geq 3</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
