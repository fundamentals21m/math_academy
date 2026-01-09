import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2>Finitely Generated Abelian Groups</h2>
      <p>
        The <strong>Fundamental Theorem of Finitely Generated Abelian Groups</strong> (FTFGAG) completely
        classifies all finitely generated abelian groups. It is one of the most elegant classification
        theorems in algebra.
      </p>

      <h3>Statement of the Theorem</h3>
      <Callout type="info">
        <strong>Fundamental Theorem:</strong> Every finitely generated abelian group <InlineMath>G</InlineMath> is isomorphic to:
        <MathBlock>G \cong \mathbb{'{'}Z{'}'}^r \times \mathbb{'{'}Z{'}'}/n_1\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/n_2\mathbb{'{'}Z{'}'} \times \cdots \times \mathbb{'{'}Z{'}'}/n_k\mathbb{'{'}Z{'}'}</MathBlock>
        where <InlineMath>r \geq 0</InlineMath> and <InlineMath>n_1 \mid n_2 \mid \cdots \mid n_k</InlineMath> with each <InlineMath>n_i {'>'} 1</InlineMath>.
        The numbers <InlineMath>r</InlineMath> (the <strong>rank</strong>) and <InlineMath>n_1, \ldots, n_k</InlineMath> (the <strong>invariant factors</strong>) are uniquely determined.
      </Callout>

      <h3>Alternative Form: Elementary Divisors</h3>
      <Callout type="info">
        <strong>Theorem (Elementary Divisor Form):</strong> Every finitely generated abelian group is isomorphic to:
        <MathBlock>G \cong \mathbb{'{'}Z{'}'}^r \times \mathbb{'{'}Z{'}'}/p_1^{'{'}a_1{'}'}\mathbb{'{'}Z{'}'} \times \cdots \times \mathbb{'{'}Z{'}'}/p_m^{'{'}a_m{'}'}\mathbb{'{'}Z{'}'}</MathBlock>
        where the <InlineMath>p_i^{'{'}a_i{'}'}</InlineMath> are prime powers (not necessarily distinct primes).
        These are called the <strong>elementary divisors</strong>.
      </Callout>

      <h3>Relationship Between Forms</h3>
      <p>
        By the Chinese Remainder Theorem, <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'} \cong \prod \mathbb{'{'}Z{'}'}/p_i^{'{'}a_i{'}'}\mathbb{'{'}Z{'}'}</InlineMath>
        where <InlineMath>n = \prod p_i^{'{'}a_i{'}'}</InlineMath>.
      </p>
      <p>
        So each invariant factor decomposes into elementary divisors, and conversely, elementary divisors
        combine (by grouping prime powers appropriately) into invariant factors.
      </p>

      <h3>Examples</h3>

      <p><strong>Example 1:</strong> Abelian groups of order 12</p>
      <p>Since <InlineMath>12 = 2^2 \cdot 3</InlineMath>, the possibilities are:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li>Invariant factors <InlineMath>(12)</InlineMath>: <InlineMath>\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}</InlineMath></li>
        <li>Invariant factors <InlineMath>(2, 6)</InlineMath>: <InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'}</InlineMath></li>
      </ul>
      <p>Equivalently, using elementary divisors:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/4\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}</InlineMath></li>
        <li><InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'}</InlineMath></li>
      </ul>

      <p><strong>Example 2:</strong> Abelian groups of order 8</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/8\mathbb{'{'}Z{'}'}</InlineMath> — invariant factor <InlineMath>(8)</InlineMath></li>
        <li><InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/4\mathbb{'{'}Z{'}'}</InlineMath> — invariant factors <InlineMath>(2, 4)</InlineMath></li>
        <li><InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath> — invariant factors <InlineMath>(2, 2, 2)</InlineMath></li>
      </ul>

      <p><strong>Example 3:</strong> Abelian groups of order 72 = <InlineMath>2^3 \cdot 3^2</InlineMath></p>
      <p>Elementary divisor partitions: <InlineMath>(8), (4,2), (2,2,2)</InlineMath> for 2 and <InlineMath>(9), (3,3)</InlineMath> for 3.</p>
      <p>This gives <InlineMath>3 \times 2 = 6</InlineMath> abelian groups of order 72.</p>

      <h3>Counting Formula</h3>
      <p>
        The number of abelian groups of order <InlineMath>n = p_1^{'{'}a_1{'}'} \cdots p_k^{'{'}a_k{'}'}</InlineMath> is:
      </p>
      <MathBlock>\prod_{'{'}i=1{'}'}^k p(a_i)</MathBlock>
      <p>
        where <InlineMath>p(m)</InlineMath> is the number of partitions of <InlineMath>m</InlineMath>.
      </p>

      <h3>Applications</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Classify all abelian groups of a given order</li>
        <li>Compute unit groups of <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath></li>
        <li>Study torsion in homology groups</li>
        <li>Analyze finite abelian groups arising in number theory</li>
      </ul>

      <Callout type="success">
        <strong>Summary:</strong> The Fundamental Theorem completely classifies finitely generated abelian groups
        as direct products of cyclic groups. The invariant factor form requires divisibility constraints;
        the elementary divisor form uses prime powers. The number of abelian groups of order <InlineMath>n</InlineMath> depends
        only on the partition numbers of the exponents in the prime factorization of <InlineMath>n</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
