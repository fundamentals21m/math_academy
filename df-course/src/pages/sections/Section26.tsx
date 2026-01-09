import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2>Direct Products</h2>
      <p>
        <strong>Direct products</strong> allow us to build larger groups from smaller ones. This construction
        is fundamental for understanding the structure of abelian groups and many other classes of groups.
      </p>

      <h3>External Direct Product</h3>
      <Callout type="info">
        <strong>Definition:</strong> The <strong>external direct product</strong> of groups <InlineMath>G</InlineMath> and <InlineMath>H</InlineMath>,
        denoted <InlineMath>G \times H</InlineMath>, is the set of ordered pairs:
        <MathBlock>G \times H = \{'{'}(g, h) : g \in G, h \in H\{'}'}</MathBlock>
        with componentwise operation:
        <MathBlock>(g_1, h_1) \cdot (g_2, h_2) = (g_1 g_2, h_1 h_2)</MathBlock>
      </Callout>

      <h3>Properties</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Identity: <InlineMath>(e_G, e_H)</InlineMath></li>
        <li>Inverse: <InlineMath>(g, h)^{'{-1}'} = (g^{'{-1}'}, h^{'{-1}'})</InlineMath></li>
        <li><InlineMath>|G \times H| = |G| \cdot |H|</InlineMath></li>
        <li><InlineMath>G \times H</InlineMath> is abelian iff both <InlineMath>G</InlineMath> and <InlineMath>H</InlineMath> are abelian</li>
      </ul>

      <h3>Embedded Copies</h3>
      <p>
        <InlineMath>G \times H</InlineMath> contains natural copies of <InlineMath>G</InlineMath> and <InlineMath>H</InlineMath>:
      </p>
      <MathBlock>\bar{'{'}G{'}'} = \{'{'}(g, e_H) : g \in G\{'}'} \cong G, \quad \bar{'{'}H{'}'} = \{'{'}(e_G, h) : h \in H\{'}'} \cong H</MathBlock>

      <p>These satisfy:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>\bar{'{'}G{'}'} \unlhd G \times H</InlineMath> and <InlineMath>\bar{'{'}H{'}'} \unlhd G \times H</InlineMath></li>
        <li><InlineMath>\bar{'{'}G{'}'} \cap \bar{'{'}H{'}'} = \{'{'}(e_G, e_H)\{'}'}</InlineMath></li>
        <li><InlineMath>\bar{'{'}G{'}'}{'}'}\bar{'{'}H{'}'} = G \times H</InlineMath></li>
        <li>Elements of <InlineMath>\bar{'{'}G{'}'}</InlineMath> commute with elements of <InlineMath>\bar{'{'}H{'}'}</InlineMath></li>
      </ul>

      <h3>Internal Direct Product</h3>
      <Callout type="info">
        <strong>Definition:</strong> A group <InlineMath>G</InlineMath> is the <strong>internal direct product</strong> of subgroups <InlineMath>H</InlineMath> and <InlineMath>K</InlineMath>,
        written <InlineMath>G = H \times K</InlineMath>, if:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>H \unlhd G</InlineMath> and <InlineMath>K \unlhd G</InlineMath></li>
          <li><InlineMath>H \cap K = \{'{'}e\{'}'}</InlineMath></li>
          <li><InlineMath>HK = G</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>G</InlineMath> is the internal direct product of <InlineMath>H</InlineMath> and <InlineMath>K</InlineMath>, then <InlineMath>G</InlineMath> is isomorphic
        to the external direct product <InlineMath>H \times K</InlineMath> via <InlineMath>hk \mapsto (h, k)</InlineMath>.
      </Callout>

      <h3>Generalization to Multiple Factors</h3>
      <MathBlock>G_1 \times G_2 \times \cdots \times G_n = \{'{'}(g_1, g_2, \ldots, g_n) : g_i \in G_i\{'}'}</MathBlock>

      <h3>Order of Elements</h3>
      <Callout type="info">
        <strong>Theorem:</strong> In <InlineMath>G \times H</InlineMath>:
        <MathBlock>|(g, h)| = \text{'{'}lcm{'}'}(|g|, |h|)</MathBlock>
      </Callout>

      <p><strong>Corollary:</strong> <InlineMath>\mathbb{'{'}Z{'}'}/m\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/mn\mathbb{'{'}Z{'}'}</InlineMath> iff <InlineMath>\gcd(m, n) = 1</InlineMath>.</p>

      <h3>Examples</h3>

      <p><strong>Example 1:</strong> <InlineMath>\mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'}</InlineMath></p>
      <p>
        Since <InlineMath>\gcd(2, 3) = 1</InlineMath>, the Chinese Remainder Theorem gives this isomorphism.
      </p>

      <p><strong>Example 2:</strong> Klein four-group</p>
      <MathBlock>V_4 \cong \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</MathBlock>
      <p>
        Note: <InlineMath>V_4 \not\cong \mathbb{'{'}Z{'}'}/4\mathbb{'{'}Z{'}'}</InlineMath> (no element of order 4).
      </p>

      <p><strong>Example 3:</strong> <InlineMath>(\mathbb{'{'}Z{'}'}/15\mathbb{'{'}Z{'}'})^\times</InlineMath></p>
      <MathBlock>(\mathbb{'{'}Z{'}'}/15\mathbb{'{'}Z{'}'})^\times \cong (\mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'})^\times \times (\mathbb{'{'}Z{'}'}/5\mathbb{'{'}Z{'}'})^\times \cong \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/4\mathbb{'{'}Z{'}'}</MathBlock>

      <h3>Direct Product vs Direct Sum</h3>
      <p>
        For finitely many groups, direct product and direct sum are the same.
        For infinitely many groups <InlineMath>\{'{'}G_i\{'}'}</InlineMath>:
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><strong>Direct product:</strong> all sequences <InlineMath>(g_i)</InlineMath></li>
        <li><strong>Direct sum:</strong> sequences with <InlineMath>g_i = e</InlineMath> for all but finitely many <InlineMath>i</InlineMath></li>
      </ul>

      <Callout type="success">
        <strong>Summary:</strong> The direct product <InlineMath>G \times H</InlineMath> combines groups with componentwise operations.
        Internal direct products recognize when a group splits as a product of normal subgroups with trivial intersection.
        The order of an element in a direct product is the LCM of the component orders.
        <InlineMath>\mathbb{'{'}Z{'}'}/m\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/mn\mathbb{'{'}Z{'}'}</InlineMath> exactly when <InlineMath>\gcd(m,n) = 1</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
