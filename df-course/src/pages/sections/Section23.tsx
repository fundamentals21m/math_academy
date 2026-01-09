import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2>Automorphisms</h2>
      <p>
        An <strong>automorphism</strong> is an isomorphism from a group to itself. The collection of all
        automorphisms forms a group that captures the "self-symmetries" of the original group.
      </p>

      <h3>Definitions</h3>
      <Callout type="info">
        <strong>Definition:</strong> An <strong>automorphism</strong> of a group <InlineMath>G</InlineMath> is an isomorphism <InlineMath>\varphi: G \to G</InlineMath>.
        The set of all automorphisms of <InlineMath>G</InlineMath>, denoted <InlineMath>\text{'{'}Aut{'}'}(G)</InlineMath>, forms a group under composition.
      </Callout>

      <h3>Inner Automorphisms</h3>
      <Callout type="info">
        <strong>Definition:</strong> For each <InlineMath>g \in G</InlineMath>, the map <InlineMath>\varphi_g: G \to G</InlineMath> defined by:
        <MathBlock>\varphi_g(x) = gxg^{'{-1}'}</MathBlock>
        is called <strong>conjugation by g</strong> or an <strong>inner automorphism</strong>.
        The set of all inner automorphisms is denoted <InlineMath>\text{'{'}Inn{'}'}(G)</InlineMath>.
      </Callout>

      <p>Properties:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>\varphi_g</InlineMath> is indeed an automorphism</li>
        <li><InlineMath>\varphi_g \circ \varphi_h = \varphi_{'{'}gh{'}'}</InlineMath></li>
        <li><InlineMath>\text{'{'}Inn{'}'}(G) \unlhd \text{'{'}Aut{'}'}(G)</InlineMath></li>
        <li><InlineMath>\text{'{'}Inn{'}'}(G) \cong G/Z(G)</InlineMath></li>
      </ul>

      <h3>Outer Automorphisms</h3>
      <Callout type="info">
        <strong>Definition:</strong> The <strong>outer automorphism group</strong> is:
        <MathBlock>\text{'{'}Out{'}'}(G) = \text{'{'}Aut{'}'}(G)/\text{'{'}Inn{'}'}(G)</MathBlock>
        Automorphisms not in <InlineMath>\text{'{'}Inn{'}'}(G)</InlineMath> are called <strong>outer automorphisms</strong>.
      </Callout>

      <h3>Computing Automorphism Groups</h3>

      <p><strong>Example 1:</strong> <InlineMath>\text{'{'}Aut{'}'}(\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'})</InlineMath></p>
      <p>
        An automorphism of <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> is determined by where <InlineMath>\bar{'{'}1{'}'}</InlineMath> maps.
        It must map to a generator, so:
      </p>
      <MathBlock>\text{'{'}Aut{'}'}(\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}) \cong (\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'})^\times</MathBlock>
      <p>
        In particular, <InlineMath>|\text{'{'}Aut{'}'}(\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'})| = \phi(n)</InlineMath>.
      </p>

      <p><strong>Example 2:</strong> <InlineMath>\text{'{'}Aut{'}'}(\mathbb{'{'}Z{'}'})</InlineMath></p>
      <p>
        The only automorphisms of <InlineMath>\mathbb{'{'}Z{'}'}</InlineMath> are <InlineMath>n \mapsto n</InlineMath> and <InlineMath>n \mapsto -n</InlineMath>.
      </p>
      <MathBlock>\text{'{'}Aut{'}'}(\mathbb{'{'}Z{'}'}) \cong \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</MathBlock>

      <p><strong>Example 3:</strong> <InlineMath>\text{'{'}Aut{'}'}(S_n)</InlineMath> for <InlineMath>n \neq 2, 6</InlineMath></p>
      <p>
        For <InlineMath>n \neq 2, 6</InlineMath>: <InlineMath>\text{'{'}Aut{'}'}(S_n) \cong S_n</InlineMath> (all automorphisms are inner).
      </p>

      <p><strong>Example 4:</strong> <InlineMath>\text{'{'}Aut{'}'}(S_6)</InlineMath></p>
      <p>
        <InlineMath>S_6</InlineMath> is exceptional: <InlineMath>|\text{'{'}Aut{'}'}(S_6) : \text{'{'}Inn{'}'}(S_6)| = 2</InlineMath>.
        There exists an outer automorphism swapping transpositions with products of three disjoint transpositions.
      </p>

      <h3>Automorphisms of Direct Products</h3>
      <p>
        For groups <InlineMath>G</InlineMath> and <InlineMath>H</InlineMath> with no common direct factor and trivial center:
      </p>
      <MathBlock>\text{'{'}Aut{'}'}(G \times H) \cong \text{'{'}Aut{'}'}(G) \times \text{'{'}Aut{'}'}(H)</MathBlock>
      <p>In general, there may be additional "mixing" automorphisms.</p>

      <h3>Characteristic Subgroups</h3>
      <Callout type="info">
        <strong>Definition:</strong> A subgroup <InlineMath>H \le G</InlineMath> is <strong>characteristic</strong>, written <InlineMath>H \text{'{'} char {'}'} G</InlineMath>,
        if <InlineMath>\varphi(H) = H</InlineMath> for every automorphism <InlineMath>\varphi \in \text{'{'}Aut{'}'}(G)</InlineMath>.
      </Callout>

      <p>Properties:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Characteristic subgroups are normal (since inner automorphisms are automorphisms)</li>
        <li>If <InlineMath>H \text{'{'} char {'}'} K</InlineMath> and <InlineMath>K \unlhd G</InlineMath>, then <InlineMath>H \unlhd G</InlineMath></li>
        <li>Examples: <InlineMath>Z(G)</InlineMath>, <InlineMath>G'</InlineMath> (commutator subgroup), unique subgroups of a given order</li>
      </ul>

      <Callout type="success">
        <strong>Summary:</strong> Automorphisms are self-isomorphisms of a group. Inner automorphisms come from conjugation
        and form a normal subgroup <InlineMath>\text{'{'}Inn{'}'}(G) \cong G/Z(G)</InlineMath>.
        The automorphism group of <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> is <InlineMath>(\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'})^\times</InlineMath>.
        Characteristic subgroups are fixed by all automorphisms and are automatically normal.
      </Callout>
    </LessonLayout>
  );
}
