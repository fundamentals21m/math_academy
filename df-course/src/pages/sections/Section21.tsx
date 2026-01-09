import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2>Cayley's Theorem</h2>
      <p>
        <strong>Cayley's Theorem</strong> is a fundamental result showing that every group can be realized
        as a group of permutations. This connects abstract groups to the concrete world of symmetry.
      </p>

      <h3>Statement of Cayley's Theorem</h3>
      <Callout type="info">
        <strong>Theorem (Cayley):</strong> Every group <InlineMath>G</InlineMath> is isomorphic to a subgroup of a symmetric group.
        Specifically, <InlineMath>G</InlineMath> embeds into <InlineMath>S_G</InlineMath> (the symmetric group on the set <InlineMath>G</InlineMath>).
        If <InlineMath>|G| = n</InlineMath>, then <InlineMath>G</InlineMath> is isomorphic to a subgroup of <InlineMath>S_n</InlineMath>.
      </Callout>

      <h3>Proof</h3>
      <p>
        Consider the <strong>left regular action</strong> of <InlineMath>G</InlineMath> on itself:
      </p>
      <MathBlock>g \cdot h = gh \quad \text{'{'}for{'}'} \, g, h \in G</MathBlock>

      <p>This defines a homomorphism <InlineMath>\varphi: G \to S_G</InlineMath> by <InlineMath>\varphi(g)(h) = gh</InlineMath>.</p>

      <p><strong>Claim:</strong> <InlineMath>\varphi</InlineMath> is injective.</p>
      <p>
        <em>Proof:</em> If <InlineMath>\varphi(g) = \varphi(g')</InlineMath>, then <InlineMath>gh = g'h</InlineMath> for all <InlineMath>h \in G</InlineMath>.
        Taking <InlineMath>h = e</InlineMath>: <InlineMath>g = g'</InlineMath>. Thus <InlineMath>\ker(\varphi) = \{'{'}e\{'}'}</InlineMath>.
      </p>

      <p>
        Therefore <InlineMath>G \cong \varphi(G) \le S_G</InlineMath>, and if <InlineMath>|G| = n</InlineMath>, we can identify <InlineMath>G</InlineMath> with <InlineMath>\{'{'}1, 2, \ldots, n\{'}'}</InlineMath>
        to get <InlineMath>G \hookrightarrow S_n</InlineMath>.
      </p>

      <h3>The Left Regular Representation</h3>
      <p>
        The embedding <InlineMath>\varphi: G \to S_G</InlineMath> is called the <strong>left regular representation</strong> of <InlineMath>G</InlineMath>.
        Each element <InlineMath>g \in G</InlineMath> acts as a permutation of <InlineMath>G</InlineMath> by left multiplication.
      </p>

      <h3>Example: Z/3Z in S_3</h3>
      <p>
        Let <InlineMath>G = \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} = \{'{'}\bar{'{'}0{'}'}, \bar{'{'}1{'}'}, \bar{'{'}2{'}'}\{'}'}</InlineMath>. Label these as <InlineMath>1, 2, 3</InlineMath>.
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\varphi(\bar{'{'}0{'}'}) = e</InlineMath> (identity permutation)</li>
        <li><InlineMath>\varphi(\bar{'{'}1{'}'})</InlineMath>: <InlineMath>1 \mapsto 2 \mapsto 3 \mapsto 1</InlineMath>, so <InlineMath>\varphi(\bar{'{'}1{'}'}) = (1\,2\,3)</InlineMath></li>
        <li><InlineMath>\varphi(\bar{'{'}2{'}'})</InlineMath>: <InlineMath>1 \mapsto 3, 2 \mapsto 1, 3 \mapsto 2</InlineMath>, so <InlineMath>\varphi(\bar{'{'}2{'}'}) = (1\,3\,2)</InlineMath></li>
      </ul>
      <p>Thus <InlineMath>\mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} \cong \langle (1\,2\,3) \rangle \le S_3</InlineMath>.</p>

      <h3>Example: Klein Four-Group in S_4</h3>
      <p>
        Let <InlineMath>V_4 = \{'{'}e, a, b, c\{'}'}</InlineMath> with <InlineMath>a^2 = b^2 = c^2 = e</InlineMath> and <InlineMath>ab = c</InlineMath>.
        Label <InlineMath>e, a, b, c</InlineMath> as <InlineMath>1, 2, 3, 4</InlineMath>.
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\varphi(e) = e</InlineMath></li>
        <li><InlineMath>\varphi(a) = (1\,2)(3\,4)</InlineMath></li>
        <li><InlineMath>\varphi(b) = (1\,3)(2\,4)</InlineMath></li>
        <li><InlineMath>\varphi(c) = (1\,4)(2\,3)</InlineMath></li>
      </ul>
      <p>This is the famous embedding <InlineMath>V_4 \le A_4 \le S_4</InlineMath>.</p>

      <h3>Limitations</h3>
      <Callout type="warning">
        <strong>Remark:</strong> Cayley's embedding is often inefficient. A group of order <InlineMath>n</InlineMath> embeds
        into <InlineMath>S_n</InlineMath>, but smaller symmetric groups may suffice.
      </Callout>

      <p>Examples:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>D_8</InlineMath> (order 8) embeds into <InlineMath>S_4</InlineMath> (as symmetries of a square)</li>
        <li><InlineMath>\mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'}</InlineMath> can embed into <InlineMath>S_6</InlineMath> by Cayley, but also into <InlineMath>S_5</InlineMath></li>
      </ul>

      <h3>Generalization: Actions on Cosets</h3>
      <p>
        For any subgroup <InlineMath>H \le G</InlineMath>, <InlineMath>G</InlineMath> acts on the left cosets <InlineMath>G/H</InlineMath> by left multiplication.
        This gives a homomorphism <InlineMath>\varphi: G \to S_{'{'}G/H{'}'}</InlineMath>.
      </p>
      <p>
        If <InlineMath>[G : H] = n</InlineMath>, this embeds <InlineMath>G/\ker(\varphi)</InlineMath> into <InlineMath>S_n</InlineMath>.
      </p>

      <h3>Corollary: Index and Normal Subgroups</h3>
      <Callout type="info">
        <strong>Corollary:</strong> If <InlineMath>[G : H] = n</InlineMath>, then <InlineMath>G</InlineMath> has a normal subgroup <InlineMath>N</InlineMath> with <InlineMath>N \le H</InlineMath>
        and <InlineMath>|G/N|</InlineMath> divides <InlineMath>n!</InlineMath>.
      </Callout>

      <p>
        This is useful for finding normal subgroups and proving groups are non-simple.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> Cayley's Theorem states that every group is isomorphic to a group of permutations.
        The proof uses the left regular representation: <InlineMath>G</InlineMath> acts on itself by left multiplication.
        This fundamental result shows that abstract groups are concrete objects - they are always "symmetry groups."
      </Callout>
    </LessonLayout>
  );
}
