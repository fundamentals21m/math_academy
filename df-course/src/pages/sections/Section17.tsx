import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2>The Isomorphism Theorems</h2>
      <p>
        The <strong>Isomorphism Theorems</strong> are fundamental structural results that relate subgroups,
        quotient groups, and homomorphisms. They are essential tools for understanding group structure.
      </p>

      <h3>The First Isomorphism Theorem</h3>
      <Callout type="info">
        <strong>Theorem (First Isomorphism Theorem):</strong> Let <InlineMath>\varphi: G \to H</InlineMath> be a homomorphism. Then:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>\ker(\varphi) \unlhd G</InlineMath></li>
          <li><InlineMath>G/\ker(\varphi) \cong \text{'{'}im{'}'}(\varphi)</InlineMath></li>
        </ol>
        The isomorphism is given by <InlineMath>g\ker(\varphi) \mapsto \varphi(g)</InlineMath>.
      </Callout>

      <p>
        This theorem says that every homomorphism factors through a quotient: the image of <InlineMath>\varphi</InlineMath> is
        isomorphic to <InlineMath>G</InlineMath> modulo the kernel.
      </p>

      <h3>Applications of the First Isomorphism Theorem</h3>

      <p><strong>Example 1:</strong> <InlineMath>GL_n(F)/SL_n(F) \cong F^*</InlineMath></p>
      <p>
        The determinant <InlineMath>\det: GL_n(F) \to F^*</InlineMath> is surjective with <InlineMath>\ker(\det) = SL_n(F)</InlineMath>.
      </p>

      <p><strong>Example 2:</strong> <InlineMath>S_n/A_n \cong \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath></p>
      <p>
        The sign homomorphism <InlineMath>\text{'{'}sgn{'}'}: S_n \to \{'{'}1, -1\{'}'}</InlineMath> is surjective with <InlineMath>\ker(\text{'{'}sgn{'}'}) = A_n</InlineMath>.
      </p>

      <p><strong>Example 3:</strong> <InlineMath>\mathbb{'{'}R{'}'}/\mathbb{'{'}Z{'}'} \cong S^1</InlineMath></p>
      <p>
        The map <InlineMath>\theta \mapsto e^{'{'}2\pi i \theta{'}'}</InlineMath> from <InlineMath>\mathbb{'{'}R{'}'}</InlineMath> to the unit circle <InlineMath>S^1 \subset \mathbb{'{'}C{'}'}^*</InlineMath>
        is surjective with kernel <InlineMath>\mathbb{'{'}Z{'}'}</InlineMath>.
      </p>

      <h3>The Second Isomorphism Theorem</h3>
      <Callout type="info">
        <strong>Theorem (Second Isomorphism Theorem):</strong> Let <InlineMath>H \le G</InlineMath> and <InlineMath>N \unlhd G</InlineMath>. Then:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>HN = \{'{'}hn : h \in H, n \in N\{'}'}</InlineMath> is a subgroup of <InlineMath>G</InlineMath></li>
          <li><InlineMath>H \cap N \unlhd H</InlineMath></li>
          <li><InlineMath>H/(H \cap N) \cong HN/N</InlineMath></li>
        </ol>
      </Callout>

      <p>
        This is sometimes called the "Diamond Isomorphism Theorem" because of its lattice diagram shape.
      </p>

      <h3>The Third Isomorphism Theorem</h3>
      <Callout type="info">
        <strong>Theorem (Third Isomorphism Theorem):</strong> Let <InlineMath>N, M \unlhd G</InlineMath> with <InlineMath>N \le M</InlineMath>. Then:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>M/N \unlhd G/N</InlineMath></li>
          <li><InlineMath>(G/N)/(M/N) \cong G/M</InlineMath></li>
        </ol>
      </Callout>

      <p>
        Informally: "you can cancel the <InlineMath>N</InlineMath>s". This allows us to pass between quotients.
      </p>

      <h3>The Fourth Isomorphism Theorem (Correspondence Theorem)</h3>
      <Callout type="info">
        <strong>Theorem (Correspondence Theorem):</strong> Let <InlineMath>N \unlhd G</InlineMath>. There is a bijection:
        <MathBlock>\{'{'}H \le G : N \le H\{'}'} \leftrightarrow \{'{'}K \le G/N\{'}'}</MathBlock>
        given by <InlineMath>H \mapsto H/N</InlineMath> and <InlineMath>K \mapsto \pi^{'{-1}'}(K)</InlineMath> where <InlineMath>\pi: G \to G/N</InlineMath> is the quotient map.
        Moreover:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>This bijection preserves containment: <InlineMath>H_1 \le H_2 \Leftrightarrow H_1/N \le H_2/N</InlineMath></li>
          <li>It preserves normality: <InlineMath>H \unlhd G \Leftrightarrow H/N \unlhd G/N</InlineMath></li>
          <li>It preserves indices: <InlineMath>[G : H] = [G/N : H/N]</InlineMath></li>
        </ul>
      </Callout>

      <p>
        This theorem says that the subgroup lattice of <InlineMath>G/N</InlineMath> is exactly the "upper part" of the
        lattice of <InlineMath>G</InlineMath> (subgroups containing <InlineMath>N</InlineMath>).
      </p>

      <h3>Example: Subgroups of Z/12Z</h3>
      <p>
        The subgroups of <InlineMath>\mathbb{'{'}Z{'}'}</InlineMath> containing <InlineMath>12\mathbb{'{'}Z{'}'}</InlineMath> are <InlineMath>d\mathbb{'{'}Z{'}'}</InlineMath> for <InlineMath>d \mid 12</InlineMath>.
        By correspondence, the subgroups of <InlineMath>\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}</InlineMath> are:
      </p>
      <MathBlock>\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}, \, 2\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}, \, 3\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}, \, 4\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}, \, 6\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}, \, 12\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}</MathBlock>

      <Callout type="success">
        <strong>Summary:</strong> The isomorphism theorems are powerful tools relating subgroups, quotients, and homomorphisms.
        The First Isomorphism Theorem says <InlineMath>G/\ker(\varphi) \cong \text{'{'}im{'}'}(\varphi)</InlineMath>.
        The Correspondence Theorem establishes a bijection between subgroups of <InlineMath>G/N</InlineMath> and subgroups of <InlineMath>G</InlineMath> containing <InlineMath>N</InlineMath>.
        These theorems are essential for analyzing group structure.
      </Callout>
    </LessonLayout>
  );
}
