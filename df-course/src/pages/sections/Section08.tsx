import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Homomorphisms and Isomorphisms</h2>
      <p>
        <strong>Homomorphisms</strong> are structure-preserving maps between groups. They allow us to relate
        different groups and transfer information from one to another. <strong>Isomorphisms</strong> are
        bijective homomorphisms that establish complete structural equivalence.
      </p>

      <h3>Group Homomorphisms</h3>
      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>(G, \cdot)</InlineMath> and <InlineMath>(H, *)</InlineMath> be groups. A <strong>homomorphism</strong>
        is a function <InlineMath>\varphi: G \to H</InlineMath> such that:
        <MathBlock>\varphi(a \cdot b) = \varphi(a) * \varphi(b) \quad \text{'{'}for all{'}'} \, a, b \in G</MathBlock>
      </Callout>

      <p>A homomorphism preserves the group operation.</p>

      <h3>Basic Properties</h3>
      <p>If <InlineMath>\varphi: G \to H</InlineMath> is a homomorphism:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>\varphi(e_G) = e_H</InlineMath> (identity maps to identity)</li>
        <li><InlineMath>\varphi(a^{'{-1}'}) = \varphi(a)^{'{-1}'}</InlineMath> (inverses map to inverses)</li>
        <li><InlineMath>\varphi(a^n) = \varphi(a)^n</InlineMath> for all integers <InlineMath>n</InlineMath></li>
        <li>If <InlineMath>|a|</InlineMath> is finite, then <InlineMath>|\varphi(a)|</InlineMath> divides <InlineMath>|a|</InlineMath></li>
      </ul>

      <h3>Kernel and Image</h3>
      <Callout type="info">
        <strong>Definition:</strong> For a homomorphism <InlineMath>\varphi: G \to H</InlineMath>:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The <strong>kernel</strong> is <InlineMath>\ker(\varphi) = \{'{'}g \in G : \varphi(g) = e_H\{'}'}</InlineMath></li>
          <li>The <strong>image</strong> is <InlineMath>\text{'{'}im{'}'}(\varphi) = \{'{'}h \in H : h = \varphi(g) \text{'{'} for some {'}'} g \in G\{'}'}</InlineMath></li>
        </ul>
      </Callout>

      <p>Important facts:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>\ker(\varphi)</InlineMath> is a subgroup of <InlineMath>G</InlineMath> (in fact, a normal subgroup)</li>
        <li><InlineMath>\text{'{'}im{'}'}(\varphi)</InlineMath> is a subgroup of <InlineMath>H</InlineMath></li>
        <li><InlineMath>\varphi</InlineMath> is injective if and only if <InlineMath>\ker(\varphi) = \{'{'}e_G\{'}'}</InlineMath></li>
      </ul>

      <h3>Types of Homomorphisms</h3>
      <Callout type="info">
        <strong>Definitions:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Monomorphism:</strong> injective homomorphism</li>
          <li><strong>Epimorphism:</strong> surjective homomorphism</li>
          <li><strong>Isomorphism:</strong> bijective homomorphism</li>
          <li><strong>Automorphism:</strong> isomorphism from a group to itself</li>
          <li><strong>Endomorphism:</strong> homomorphism from a group to itself</li>
        </ul>
      </Callout>

      <h3>Isomorphisms</h3>
      <p>
        Two groups <InlineMath>G</InlineMath> and <InlineMath>H</InlineMath> are <strong>isomorphic</strong>, written <InlineMath>G \cong H</InlineMath>, if there exists
        an isomorphism <InlineMath>\varphi: G \to H</InlineMath>. Isomorphic groups are "algebraically identical."
      </p>

      <p>Isomorphism is an equivalence relation:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li>Reflexive: <InlineMath>G \cong G</InlineMath> (via the identity map)</li>
        <li>Symmetric: <InlineMath>G \cong H \Rightarrow H \cong G</InlineMath> (via the inverse map)</li>
        <li>Transitive: <InlineMath>G \cong H</InlineMath> and <InlineMath>H \cong K \Rightarrow G \cong K</InlineMath> (via composition)</li>
      </ul>

      <h3>Examples</h3>

      <p><strong>Example 1:</strong> The determinant map <InlineMath>\det: GL_n(\mathbb{'{'}R{'}'}) \to \mathbb{'{'}R{'}'}^*</InlineMath></p>
      <p>
        This is a homomorphism since <InlineMath>\det(AB) = \det(A)\det(B)</InlineMath>.
        Its kernel is <InlineMath>SL_n(\mathbb{'{'}R{'}'})</InlineMath>.
      </p>

      <p><strong>Example 2:</strong> The sign homomorphism <InlineMath>\text{'{'}sgn{'}'}: S_n \to \{'{'}1, -1\{'}'}</InlineMath></p>
      <p>
        Maps a permutation to +1 if it is a product of an even number of transpositions, -1 if odd.
        Its kernel is the alternating group <InlineMath>A_n</InlineMath>.
      </p>

      <p><strong>Example 3:</strong> The exponential map <InlineMath>\exp: (\mathbb{'{'}R{'}'}, +) \to (\mathbb{'{'}R{'}'}^+, \cdot)</InlineMath></p>
      <MathBlock>\exp(x + y) = \exp(x) \cdot \exp(y)</MathBlock>
      <p>This is an isomorphism with inverse <InlineMath>\ln</InlineMath>.</p>

      <p><strong>Example 4:</strong> <InlineMath>\mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'}</InlineMath></p>
      <p>
        The map <InlineMath>\bar{'{'}n{'}'} \mapsto (\bar{'{'}n{'}'}, \bar{'{'}n{'}'})</InlineMath> is an isomorphism by the Chinese Remainder Theorem.
      </p>

      <h3>Proving Groups Are Not Isomorphic</h3>
      <p>To show <InlineMath>G \not\cong H</InlineMath>, find an invariant they don't share:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Different orders: <InlineMath>|G| \neq |H|</InlineMath></li>
        <li>One is abelian, the other is not</li>
        <li>Different numbers of elements of each order</li>
        <li>Different numbers of subgroups of each order</li>
      </ul>

      <Callout type="success">
        <strong>Summary:</strong> Homomorphisms are structure-preserving maps between groups. The kernel measures
        how far a homomorphism is from being injective. An isomorphism is a bijective homomorphism,
        and isomorphic groups share all group-theoretic properties. Determining when groups are isomorphic
        is a central problem in group theory.
      </Callout>
    </LessonLayout>
  );
}
