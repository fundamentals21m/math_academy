import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2>Group Actions and Permutation Representations</h2>
      <p>
        This section develops the theory of group actions more deeply, focusing on the relationship between
        actions and homomorphisms to symmetric groups (<strong>permutation representations</strong>).
      </p>

      <h3>Permutation Representations</h3>
      <Callout type="info">
        <strong>Definition:</strong> A <strong>permutation representation</strong> of <InlineMath>G</InlineMath> on a set <InlineMath>A</InlineMath>
        is a homomorphism <InlineMath>\varphi: G \to S_A</InlineMath>, where <InlineMath>S_A</InlineMath> is the symmetric group on <InlineMath>A</InlineMath>.
      </Callout>

      <p>
        Group actions and permutation representations are equivalent:
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Action <InlineMath>\to</InlineMath> representation: <InlineMath>\varphi(g)(a) = g \cdot a</InlineMath></li>
        <li>Representation <InlineMath>\to</InlineMath> action: <InlineMath>g \cdot a = \varphi(g)(a)</InlineMath></li>
      </ul>

      <h3>The Orbit-Stabilizer Theorem (Revisited)</h3>
      <Callout type="info">
        <strong>Theorem (Orbit-Stabilizer):</strong> For a group <InlineMath>G</InlineMath> acting on a set <InlineMath>A</InlineMath>:
        <MathBlock>|G \cdot a| = [G : G_a] = \frac{'{'}|G|{'}'}{'{'}|G_a|{'}'}</MathBlock>
        where <InlineMath>G \cdot a</InlineMath> is the orbit and <InlineMath>G_a</InlineMath> is the stabilizer of <InlineMath>a</InlineMath>.
      </Callout>

      <p>
        <strong>Proof sketch:</strong> The map <InlineMath>gG_a \mapsto g \cdot a</InlineMath> is a well-defined bijection from left cosets
        of <InlineMath>G_a</InlineMath> to the orbit <InlineMath>G \cdot a</InlineMath>.
      </p>

      <h3>Counting Orbits: Burnside's Lemma</h3>
      <Callout type="info">
        <strong>Theorem (Burnside's Lemma / Cauchy-Frobenius):</strong> The number of orbits equals
        the average number of fixed points:
        <MathBlock>|\text{'{'}orbits{'}'}| = \frac{'{'}1{'}'}{'{'}|G|{'}'} \sum_{'{'}g \in G{'}'} |A^g|</MathBlock>
        where <InlineMath>A^g = \{'{'}a \in A : g \cdot a = a\{'}'}</InlineMath> is the fixed point set of <InlineMath>g</InlineMath>.
      </Callout>

      <h3>Application: Counting Necklaces</h3>
      <p>
        <strong>Problem:</strong> How many distinct necklaces can be made from 4 beads using 2 colors?
      </p>
      <p>
        The dihedral group <InlineMath>D_8</InlineMath> acts on colorings. Using Burnside's Lemma with <InlineMath>|G| = 8</InlineMath>:
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li>Identity: fixes all <InlineMath>2^4 = 16</InlineMath> colorings</li>
        <li>Rotations by 90, 270 degrees: fix <InlineMath>2</InlineMath> colorings each (all same color)</li>
        <li>Rotation by 180 degrees: fixes <InlineMath>2^2 = 4</InlineMath> colorings</li>
        <li>Reflections: each fixes <InlineMath>2^2 = 4</InlineMath> or <InlineMath>2^3 = 8</InlineMath> depending on axis</li>
      </ul>
      <MathBlock>|\text{'{'}necklaces{'}'}| = \frac{'{'}1{'}'}{'{'}8{'}'}(16 + 2 + 4 + 2 + 4 + 4 + 8 + 8) = \frac{'{'}48{'}'}{'{'}8{'}'} = 6</MathBlock>

      <h3>Faithful Actions</h3>
      <Callout type="info">
        <strong>Definition:</strong> An action is <strong>faithful</strong> if the kernel of the associated
        permutation representation is trivial:
        <MathBlock>\ker(\varphi) = \{'{'}g \in G : g \cdot a = a \text{'{'} for all {'}'} a \in A\{'}'} = \{'{'}e\{'}'}</MathBlock>
      </Callout>

      <p>
        A faithful action embeds <InlineMath>G</InlineMath> into <InlineMath>S_A</InlineMath> (i.e., <InlineMath>G \cong \varphi(G) \le S_A</InlineMath>).
      </p>

      <h3>Transitive Actions</h3>
      <Callout type="info">
        <strong>Definition:</strong> An action is <strong>transitive</strong> if there is only one orbit
        (every element can be moved to every other element).
      </Callout>

      <p>For a transitive action on a finite set <InlineMath>A</InlineMath>: <InlineMath>|A| = [G : G_a]</InlineMath> for any <InlineMath>a \in A</InlineMath>.</p>

      <h3>Regular Actions</h3>
      <Callout type="info">
        <strong>Definition:</strong> An action is <strong>regular</strong> (or <strong>simply transitive</strong>)
        if it is transitive and free (all stabilizers are trivial).
      </Callout>

      <p>
        For a regular action: <InlineMath>|A| = |G|</InlineMath>.
        The left multiplication action of <InlineMath>G</InlineMath> on itself is regular.
      </p>

      <h3>The Kernel and Image</h3>
      <p>
        For the permutation representation <InlineMath>\varphi: G \to S_A</InlineMath>:
      </p>
      <MathBlock>\ker(\varphi) = \bigcap_{'{'}a \in A{'}'} G_a</MathBlock>
      <p>
        The kernel is a normal subgroup of <InlineMath>G</InlineMath>, and <InlineMath>G/\ker(\varphi) \cong \varphi(G) \le S_A</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> Group actions correspond to permutation representations (homomorphisms to symmetric groups).
        The orbit-stabilizer theorem relates orbit size to stabilizer index.
        Burnside's lemma counts orbits using fixed points.
        Faithful actions embed the group into a symmetric group; transitive actions have a single orbit.
      </Callout>
    </LessonLayout>
  );
}
