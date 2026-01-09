import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>Quotient Groups: Definitions and Examples</h2>
      <p>
        <strong>Quotient groups</strong> (also called <strong>factor groups</strong>) are formed by "modding out"
        by a normal subgroup. This construction is fundamental to understanding group structure.
      </p>

      <h3>Cosets</h3>
      <Callout type="info">
        <strong>Definition:</strong> For a subgroup <InlineMath>H \le G</InlineMath> and <InlineMath>a \in G</InlineMath>:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The <strong>left coset</strong> of <InlineMath>H</InlineMath> containing <InlineMath>a</InlineMath> is <InlineMath>aH = \{'{'}ah : h \in H\{'}'}</InlineMath></li>
          <li>The <strong>right coset</strong> of <InlineMath>H</InlineMath> containing <InlineMath>a</InlineMath> is <InlineMath>Ha = \{'{'}ha : h \in H\{'}'}</InlineMath></li>
        </ul>
      </Callout>

      <p>
        The set of left cosets is denoted <InlineMath>G/H</InlineMath>. The cosets partition <InlineMath>G</InlineMath>: every element belongs to exactly one coset.
      </p>

      <h3>Normal Subgroups</h3>
      <Callout type="info">
        <strong>Definition:</strong> A subgroup <InlineMath>N \le G</InlineMath> is <strong>normal</strong>, written <InlineMath>N \unlhd G</InlineMath>, if:
        <MathBlock>gNg^{'{-1}'} = N \quad \text{'{'}for all{'}'} \, g \in G</MathBlock>
        Equivalently, <InlineMath>gN = Ng</InlineMath> for all <InlineMath>g</InlineMath> (left and right cosets coincide).
      </Callout>

      <p>Alternative characterizations:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>N \unlhd G</InlineMath> iff <InlineMath>gng^{'{-1}'} \in N</InlineMath> for all <InlineMath>g \in G, n \in N</InlineMath></li>
        <li><InlineMath>N \unlhd G</InlineMath> iff <InlineMath>N = \ker(\varphi)</InlineMath> for some homomorphism <InlineMath>\varphi</InlineMath></li>
        <li><InlineMath>N \unlhd G</InlineMath> iff <InlineMath>N</InlineMath> is a union of conjugacy classes</li>
      </ul>

      <h3>Examples of Normal Subgroups</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>\{'{'}e\{'}'}</InlineMath> and <InlineMath>G</InlineMath> are always normal in <InlineMath>G</InlineMath></li>
        <li>Every subgroup of an abelian group is normal</li>
        <li>The center <InlineMath>Z(G)</InlineMath> is always normal</li>
        <li><InlineMath>A_n \unlhd S_n</InlineMath> (the alternating group is normal in <InlineMath>S_n</InlineMath>)</li>
        <li><InlineMath>SL_n(F) \unlhd GL_n(F)</InlineMath></li>
        <li><InlineMath>\langle r \rangle \unlhd D_{'{'}{'{'}2n{'}'}{'}'}</InlineMath> (rotations are normal in dihedral groups)</li>
      </ul>

      <h3>The Quotient Group</h3>
      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>N \unlhd G</InlineMath>, then the set of cosets <InlineMath>G/N</InlineMath> forms a group under the operation:
        <MathBlock>(aN)(bN) = (ab)N</MathBlock>
        This is the <strong>quotient group</strong> (or <strong>factor group</strong>) of <InlineMath>G</InlineMath> by <InlineMath>N</InlineMath>.
      </Callout>

      <p>
        The key fact is that this operation is <strong>well-defined</strong>: if <InlineMath>aN = a'N</InlineMath> and <InlineMath>bN = b'N</InlineMath>,
        then <InlineMath>(ab)N = (a'b')N</InlineMath>. This requires <InlineMath>N</InlineMath> to be normal.
      </p>

      <h3>Properties of G/N</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Identity: <InlineMath>eN = N</InlineMath></li>
        <li>Inverse: <InlineMath>(aN)^{'{-1}'} = a^{'{-1}'}N</InlineMath></li>
        <li><InlineMath>|G/N| = |G|/|N| = [G : N]</InlineMath> (the index of <InlineMath>N</InlineMath> in <InlineMath>G</InlineMath>)</li>
      </ul>

      <h3>Examples</h3>

      <p><strong>Example 1:</strong> <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath></p>
      <p>
        This is <InlineMath>\mathbb{'{'}Z{'}'}</InlineMath> modulo the normal subgroup <InlineMath>n\mathbb{'{'}Z{'}'}</InlineMath>. The cosets are <InlineMath>\bar{'{'}0{'}'}, \bar{'{'}1{'}'}, \ldots, \bar{'{'}n-1{'}'}</InlineMath>.
      </p>

      <p><strong>Example 2:</strong> <InlineMath>S_n/A_n \cong \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath></p>
      <p>
        There are exactly two cosets: <InlineMath>A_n</InlineMath> (even permutations) and <InlineMath>\sigma A_n</InlineMath> (odd permutations) for any transposition <InlineMath>\sigma</InlineMath>.
      </p>

      <p><strong>Example 3:</strong> <InlineMath>D_8/\langle r^2 \rangle \cong \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath></p>
      <p>
        The quotient has 4 cosets: <InlineMath>\{'{'}1, r^2\{'}'}, \{'{'}r, r^3\{'}'}, \{'{'}s, sr^2\{'}'}, \{'{'}sr, sr^3\{'}'}</InlineMath>.
      </p>

      <h3>The Natural Projection</h3>
      <p>
        The <strong>natural projection</strong> (or <strong>quotient map</strong>) <InlineMath>\pi: G \to G/N</InlineMath> defined by <InlineMath>\pi(g) = gN</InlineMath>
        is a surjective homomorphism with kernel <InlineMath>N</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> A normal subgroup <InlineMath>N</InlineMath> is one where left and right cosets coincide, allowing coset multiplication
        to be well-defined. The quotient group <InlineMath>G/N</InlineMath> has order <InlineMath>[G:N] = |G|/|N|</InlineMath>.
        Every kernel is normal, and every normal subgroup is a kernel (of the quotient map).
      </Callout>
    </LessonLayout>
  );
}
