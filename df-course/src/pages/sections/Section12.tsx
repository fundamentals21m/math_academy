import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Cyclic Groups</h2>
      <p>
        <strong>Cyclic groups</strong> are the simplest infinite family of groups. Every cyclic group is generated
        by a single element, and their structure is completely understood.
      </p>

      <h3>Definition</h3>
      <Callout type="info">
        <strong>Definition:</strong> A group <InlineMath>G</InlineMath> is <strong>cyclic</strong> if there exists <InlineMath>g \in G</InlineMath> such that:
        <MathBlock>G = \langle g \rangle = \{'{'}g^n : n \in \mathbb{'{'}Z{'}'}\{'}'}</MathBlock>
        The element <InlineMath>g</InlineMath> is called a <strong>generator</strong> of <InlineMath>G</InlineMath>.
      </Callout>

      <p>In additive notation (for abelian groups): <InlineMath>\langle g \rangle = \{'{'}ng : n \in \mathbb{'{'}Z{'}'}\{'}'}</InlineMath>.</p>

      <h3>Classification</h3>
      <Callout type="info">
        <strong>Theorem:</strong> Every cyclic group is isomorphic to either:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>\mathbb{'{'}Z{'}'}</InlineMath> (the infinite cyclic group), or</li>
          <li><InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> for some positive integer <InlineMath>n</InlineMath> (cyclic group of order <InlineMath>n</InlineMath>)</li>
        </ul>
      </Callout>

      <p>
        If <InlineMath>|g| = n {'<'} \infty</InlineMath>, then <InlineMath>\langle g \rangle \cong \mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath>.
        If <InlineMath>|g| = \infty</InlineMath>, then <InlineMath>\langle g \rangle \cong \mathbb{'{'}Z{'}'}</InlineMath>.
      </p>

      <h3>Properties of Cyclic Groups</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Every cyclic group is abelian</li>
        <li>Cyclic groups of the same order are isomorphic</li>
        <li>Every subgroup of a cyclic group is cyclic</li>
        <li>Every quotient of a cyclic group is cyclic</li>
      </ul>

      <h3>Subgroups of Cyclic Groups</h3>
      <Callout type="info">
        <strong>Theorem:</strong> Let <InlineMath>G = \langle g \rangle</InlineMath> be cyclic of order <InlineMath>n</InlineMath>.
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>For each divisor <InlineMath>d</InlineMath> of <InlineMath>n</InlineMath>, there is exactly one subgroup of order <InlineMath>d</InlineMath></li>
          <li>This subgroup is <InlineMath>\langle g^{'{'}n/d{'}'} \rangle</InlineMath></li>
        </ol>
      </Callout>

      <p><strong>Example:</strong> Subgroups of <InlineMath>\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'} = \langle \bar{'{'}1{'}'} \rangle</InlineMath>:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li>Order 1: <InlineMath>\langle \bar{'{'}12{'}'} \rangle = \langle \bar{'{'}0{'}'} \rangle</InlineMath></li>
        <li>Order 2: <InlineMath>\langle \bar{'{'}6{'}'} \rangle</InlineMath></li>
        <li>Order 3: <InlineMath>\langle \bar{'{'}4{'}'} \rangle</InlineMath></li>
        <li>Order 4: <InlineMath>\langle \bar{'{'}3{'}'} \rangle</InlineMath></li>
        <li>Order 6: <InlineMath>\langle \bar{'{'}2{'}'} \rangle</InlineMath></li>
        <li>Order 12: <InlineMath>\langle \bar{'{'}1{'}'} \rangle</InlineMath></li>
      </ul>

      <h3>Generators</h3>
      <Callout type="info">
        <strong>Theorem:</strong> Let <InlineMath>G = \langle g \rangle</InlineMath> have order <InlineMath>n</InlineMath>. Then <InlineMath>g^k</InlineMath> is a generator of <InlineMath>G</InlineMath> if and only if <InlineMath>\gcd(k, n) = 1</InlineMath>.
      </Callout>

      <p>
        The number of generators of <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> is <InlineMath>\phi(n)</InlineMath>, Euler's totient function.
      </p>

      <p><strong>Example:</strong> Generators of <InlineMath>\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}</InlineMath>:</p>
      <p>
        Elements coprime to 12: <InlineMath>\bar{'{'}1{'}'}, \bar{'{'}5{'}'}, \bar{'{'}7{'}'}, \bar{'{'}11{'}'}</InlineMath>. So there are <InlineMath>\phi(12) = 4</InlineMath> generators.
      </p>

      <h3>Subgroups of Z</h3>
      <Callout type="info">
        <strong>Theorem:</strong> Every subgroup of <InlineMath>\mathbb{'{'}Z{'}'}</InlineMath> is of the form <InlineMath>n\mathbb{'{'}Z{'}'}</InlineMath> for some <InlineMath>n \geq 0</InlineMath>.
      </Callout>

      <p>
        <strong>Proof sketch:</strong> If <InlineMath>H \le \mathbb{'{'}Z{'}'}</InlineMath> is non-trivial, let <InlineMath>n</InlineMath> be the smallest positive element of <InlineMath>H</InlineMath>.
        Then <InlineMath>H = n\mathbb{'{'}Z{'}'}</InlineMath> by the Division Algorithm.
      </p>

      <h3>Direct Products of Cyclic Groups</h3>
      <Callout type="info">
        <strong>Theorem:</strong> <InlineMath>\mathbb{'{'}Z{'}'}/m\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/mn\mathbb{'{'}Z{'}'}</InlineMath> if and only if <InlineMath>\gcd(m, n) = 1</InlineMath>.
      </Callout>

      <p><strong>Example:</strong></p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'}</InlineMath> (since <InlineMath>\gcd(2,3) = 1</InlineMath>)</li>
        <li><InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \not\cong \mathbb{'{'}Z{'}'}/4\mathbb{'{'}Z{'}'}</InlineMath> (the first has no element of order 4)</li>
      </ul>

      <Callout type="success">
        <strong>Summary:</strong> Cyclic groups are generated by a single element and are classified as either <InlineMath>\mathbb{'{'}Z{'}'}</InlineMath> (infinite)
        or <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> (finite). Their subgroups correspond bijectively to divisors of their order.
        The number of generators is <InlineMath>\phi(n)</InlineMath>. Cyclic groups are the building blocks for all finitely generated abelian groups.
      </Callout>
    </LessonLayout>
  );
}
