import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Group Actions</h2>
      <p>
        A <strong>group action</strong> is a formal way for a group to "act on" a set by permuting its elements.
        This concept unifies many examples and provides powerful tools for studying both groups and the sets they act on.
      </p>

      <h3>Definition of a Group Action</h3>
      <Callout type="info">
        <strong>Definition:</strong> A (left) <strong>group action</strong> of a group <InlineMath>G</InlineMath> on a set <InlineMath>A</InlineMath>
        is a map <InlineMath>G \times A \to A</InlineMath>, written <InlineMath>(g, a) \mapsto g \cdot a</InlineMath>, satisfying:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>e \cdot a = a</InlineMath> for all <InlineMath>a \in A</InlineMath> (identity acts trivially)</li>
          <li><InlineMath>g \cdot (h \cdot a) = (gh) \cdot a</InlineMath> for all <InlineMath>g, h \in G</InlineMath> and <InlineMath>a \in A</InlineMath> (compatibility)</li>
        </ol>
        We say <InlineMath>G</InlineMath> <strong>acts on</strong> <InlineMath>A</InlineMath>, and <InlineMath>A</InlineMath> is a <strong>G-set</strong>.
      </Callout>

      <h3>Equivalent Formulation</h3>
      <p>
        A group action of <InlineMath>G</InlineMath> on <InlineMath>A</InlineMath> is equivalent to a homomorphism <InlineMath>\varphi: G \to S_A</InlineMath>,
        where <InlineMath>S_A</InlineMath> is the symmetric group on <InlineMath>A</InlineMath> (the group of all bijections <InlineMath>A \to A</InlineMath>).
      </p>
      <p>
        Given the action, define <InlineMath>\varphi(g)(a) = g \cdot a</InlineMath>. The axioms ensure <InlineMath>\varphi(g)</InlineMath> is a bijection
        and <InlineMath>\varphi</InlineMath> is a homomorphism.
      </p>

      <h3>Key Examples</h3>

      <p><strong>Example 1: Left multiplication</strong></p>
      <p>
        <InlineMath>G</InlineMath> acts on itself by left multiplication: <InlineMath>g \cdot h = gh</InlineMath>.
        This action is <strong>faithful</strong> (the homomorphism <InlineMath>G \to S_G</InlineMath> is injective).
      </p>

      <p><strong>Example 2: Conjugation</strong></p>
      <p>
        <InlineMath>G</InlineMath> acts on itself by conjugation: <InlineMath>g \cdot h = ghg^{'{-1}'}</InlineMath>.
        This action captures the internal symmetry of the group.
      </p>

      <p><strong>Example 3: S_n on {'{'}1, 2, ..., n{'}'}</strong></p>
      <p>
        The symmetric group <InlineMath>S_n</InlineMath> naturally acts on <InlineMath>\{'{'}1, 2, \ldots, n\{'}'}</InlineMath> by <InlineMath>\sigma \cdot k = \sigma(k)</InlineMath>.
      </p>

      <p><strong>Example 4: D_{'{'}2n{'}'} on vertices of n-gon</strong></p>
      <p>
        The dihedral group <InlineMath>D_{'{'}{'{'}2n{'}'}{'}'}</InlineMath> acts on the vertices <InlineMath>\{'{'}1, 2, \ldots, n\{'}'}</InlineMath> of a regular <InlineMath>n</InlineMath>-gon.
      </p>

      <h3>Orbits and Stabilizers</h3>
      <Callout type="info">
        <strong>Definitions:</strong> For a <InlineMath>G</InlineMath>-action on <InlineMath>A</InlineMath> and <InlineMath>a \in A</InlineMath>:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The <strong>orbit</strong> of <InlineMath>a</InlineMath> is <InlineMath>G \cdot a = \{'{'}g \cdot a : g \in G\{'}'}</InlineMath></li>
          <li>The <strong>stabilizer</strong> of <InlineMath>a</InlineMath> is <InlineMath>G_a = \{'{'}g \in G : g \cdot a = a\{'}'}</InlineMath></li>
        </ul>
      </Callout>

      <p>Key facts:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>The orbits partition <InlineMath>A</InlineMath></li>
        <li><InlineMath>G_a</InlineMath> is a subgroup of <InlineMath>G</InlineMath></li>
        <li>Elements in the same orbit have conjugate stabilizers</li>
      </ul>

      <h3>The Orbit-Stabilizer Theorem</h3>
      <Callout type="info">
        <strong>Theorem (Orbit-Stabilizer):</strong> For a group <InlineMath>G</InlineMath> acting on a set <InlineMath>A</InlineMath> and any <InlineMath>a \in A</InlineMath>:
        <MathBlock>|G| = |G \cdot a| \cdot |G_a|</MathBlock>
        In other words, <InlineMath>|G : G_a| = |G \cdot a|</InlineMath>.
      </Callout>

      <p>
        This powerful result relates the size of an orbit to the index of the corresponding stabilizer.
      </p>

      <h3>Types of Actions</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><strong>Faithful:</strong> The kernel is trivial (only <InlineMath>e</InlineMath> fixes everything)</li>
        <li><strong>Transitive:</strong> There is only one orbit (any element can be moved to any other)</li>
        <li><strong>Free:</strong> Only <InlineMath>e</InlineMath> fixes any element (all stabilizers are trivial)</li>
      </ul>

      <h3>The Kernel of an Action</h3>
      <p>
        The <strong>kernel</strong> of the action is the set of elements that act trivially on all of <InlineMath>A</InlineMath>:
      </p>
      <MathBlock>\ker(\varphi) = \bigcap_{'{'}a \in A{'}'} G_a = \{'{'}g \in G : g \cdot a = a \text{'{'} for all {'}'} a \in A\{'}'}</MathBlock>
      <p>
        This is the kernel of the associated homomorphism <InlineMath>\varphi: G \to S_A</InlineMath> and is a normal subgroup of <InlineMath>G</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> A group action of <InlineMath>G</InlineMath> on a set <InlineMath>A</InlineMath> assigns each group element a permutation of <InlineMath>A</InlineMath>,
        compatibly with the group operation. The orbit-stabilizer theorem relates orbit sizes to stabilizer indices.
        Group actions provide a unified framework for studying symmetry.
      </Callout>
    </LessonLayout>
  );
}
