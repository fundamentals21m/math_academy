import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Centralizers and Normalizers</h2>
      <p>
        <strong>Centralizers</strong> and <strong>normalizers</strong> are special subgroups that measure
        how elements and subsets commute within a group. They are fundamental tools in group theory.
      </p>

      <h3>The Centralizer</h3>
      <Callout type="info">
        <strong>Definition:</strong> For a group <InlineMath>G</InlineMath> and an element <InlineMath>a \in G</InlineMath>, the <strong>centralizer</strong> of <InlineMath>a</InlineMath> is:
        <MathBlock>C_G(a) = \{'{'}g \in G : ga = ag\{'}'}</MathBlock>
        More generally, for a subset <InlineMath>A \subseteq G</InlineMath>:
        <MathBlock>C_G(A) = \{'{'}g \in G : ga = ag \text{'{'} for all {'}'} a \in A\{'}'}</MathBlock>
      </Callout>

      <p>The centralizer of <InlineMath>A</InlineMath> consists of all elements that commute with every element of <InlineMath>A</InlineMath>.</p>

      <Callout type="info">
        <strong>Proposition:</strong> <InlineMath>C_G(A)</InlineMath> is always a subgroup of <InlineMath>G</InlineMath>.
      </Callout>

      <h3>The Center</h3>
      <Callout type="info">
        <strong>Definition:</strong> The <strong>center</strong> of a group <InlineMath>G</InlineMath> is:
        <MathBlock>Z(G) = C_G(G) = \{'{'}g \in G : gx = xg \text{'{'} for all {'}'} x \in G\{'}'}</MathBlock>
      </Callout>

      <p>The center consists of all elements that commute with every element of <InlineMath>G</InlineMath>.</p>

      <p>Properties of the center:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>Z(G)</InlineMath> is always an abelian subgroup of <InlineMath>G</InlineMath></li>
        <li><InlineMath>Z(G) = G</InlineMath> if and only if <InlineMath>G</InlineMath> is abelian</li>
        <li><InlineMath>Z(G)</InlineMath> is a normal subgroup of <InlineMath>G</InlineMath></li>
      </ul>

      <h3>Examples of Centers</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>Z(S_n) = \{'{'}e\{'}'}</InlineMath> for <InlineMath>n \geq 3</InlineMath></li>
        <li><InlineMath>Z(D_{'{'}{'{'}2n{'}'}{'{}'}) = \{'{'}1\{'}'}</InlineMath> if <InlineMath>n</InlineMath> is odd, <InlineMath>\{'{'}1, r^{'{'}n/2{'}'}\{'}'}</InlineMath> if <InlineMath>n</InlineMath> is even</li>
        <li><InlineMath>Z(Q_8) = \{'{'}1, -1\{'}'}</InlineMath></li>
        <li><InlineMath>Z(GL_n(F)) = \{'{'}\lambda I : \lambda \in F^*\{'}'}</InlineMath> (scalar matrices)</li>
      </ul>

      <h3>The Normalizer</h3>
      <Callout type="info">
        <strong>Definition:</strong> For a subgroup <InlineMath>H \le G</InlineMath>, the <strong>normalizer</strong> of <InlineMath>H</InlineMath> in <InlineMath>G</InlineMath> is:
        <MathBlock>N_G(H) = \{'{'}g \in G : gHg^{'{-1}'} = H\{'}'}</MathBlock>
      </Callout>

      <p>
        The normalizer of <InlineMath>H</InlineMath> is the largest subgroup of <InlineMath>G</InlineMath> in which <InlineMath>H</InlineMath> is normal.
      </p>

      <p>Key properties:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>H \le N_G(H) \le G</InlineMath></li>
        <li><InlineMath>H \unlhd N_G(H)</InlineMath> (i.e., <InlineMath>H</InlineMath> is normal in its normalizer)</li>
        <li><InlineMath>H \unlhd G</InlineMath> if and only if <InlineMath>N_G(H) = G</InlineMath></li>
        <li><InlineMath>C_G(H) \le N_G(H)</InlineMath></li>
      </ul>

      <h3>Stabilizers</h3>
      <Callout type="info">
        <strong>Definition:</strong> For a group <InlineMath>G</InlineMath> acting on a set <InlineMath>A</InlineMath> and <InlineMath>a \in A</InlineMath>, the <strong>stabilizer</strong> of <InlineMath>a</InlineMath> is:
        <MathBlock>G_a = \text{'{'}Stab{'}'}_G(a) = \{'{'}g \in G : g \cdot a = a\{'}'}</MathBlock>
      </Callout>

      <p>
        The centralizer of <InlineMath>a</InlineMath> is the stabilizer of <InlineMath>a</InlineMath> under the conjugation action.
        The normalizer of <InlineMath>H</InlineMath> is the stabilizer of <InlineMath>H</InlineMath> under conjugation action on subgroups.
      </p>

      <h3>Relationships</h3>
      <MathBlock>C_G(A) \le N_G(A) \le G</MathBlock>
      <p>
        The centralizer is contained in the normalizer because if <InlineMath>g</InlineMath> commutes with every element of <InlineMath>A</InlineMath>,
        then certainly <InlineMath>gAg^{'{-1}'} = A</InlineMath>.
      </p>

      <h3>Computing Centralizers</h3>
      <p><strong>Example:</strong> Find <InlineMath>C_{'{'}S_3{'}'}((1\,2\,3))</InlineMath>.</p>
      <p>
        We need elements of <InlineMath>S_3</InlineMath> that commute with <InlineMath>(1\,2\,3)</InlineMath>.
        Since <InlineMath>|(1\,2\,3)| = 3</InlineMath>, powers of <InlineMath>(1\,2\,3)</InlineMath> certainly commute with it.
        So <InlineMath>\langle (1\,2\,3) \rangle \subseteq C_{'{'}S_3{'}'}((1\,2\,3))</InlineMath>.
      </p>
      <p>
        By the orbit-stabilizer theorem with conjugation action, <InlineMath>|G| = |G \cdot a| \cdot |C_G(a)|</InlineMath>.
        The conjugacy class of <InlineMath>(1\,2\,3)</InlineMath> has 2 elements: <InlineMath>\{'{'}(1\,2\,3), (1\,3\,2)\{'}'}</InlineMath>.
        So <InlineMath>|C_{'{'}S_3{'}'}((1\,2\,3))| = 6/2 = 3</InlineMath>, hence <InlineMath>C_{'{'}S_3{'}'}((1\,2\,3)) = \langle (1\,2\,3) \rangle</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> The centralizer <InlineMath>C_G(A)</InlineMath> consists of elements commuting with all of <InlineMath>A</InlineMath>.
        The center <InlineMath>Z(G)</InlineMath> is the centralizer of the whole group.
        The normalizer <InlineMath>N_G(H)</InlineMath> is the largest subgroup where <InlineMath>H</InlineMath> is normal.
        These subgroups are stabilizers under conjugation actions.
      </Callout>
    </LessonLayout>
  );
}
