import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2>p-Groups and Nilpotent Groups</h2>
      <p>
        <strong>p-groups</strong> and <strong>nilpotent groups</strong> are important classes of finite groups
        with rich structural properties. Nilpotent groups generalize both abelian groups and p-groups.
      </p>

      <h3>p-Groups</h3>
      <Callout type="info">
        <strong>Definition:</strong> A group <InlineMath>G</InlineMath> is a <strong>p-group</strong> if every element has order
        a power of the prime <InlineMath>p</InlineMath>. Equivalently, for finite groups: <InlineMath>|G| = p^n</InlineMath> for some <InlineMath>n \geq 0</InlineMath>.
      </Callout>

      <h3>Key Theorems on p-Groups</h3>
      <Callout type="info">
        <strong>Theorem:</strong> Let <InlineMath>G</InlineMath> be a non-trivial finite <InlineMath>p</InlineMath>-group. Then:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>Z(G) \neq \{'{'}e\{'}'}</InlineMath> (the center is non-trivial)</li>
          <li><InlineMath>G</InlineMath> is nilpotent</li>
          <li>Every proper subgroup is properly contained in its normalizer</li>
          <li>Every maximal subgroup is normal and has index <InlineMath>p</InlineMath></li>
        </ol>
      </Callout>

      <p>
        Property 1 follows from the class equation: <InlineMath>|G| = |Z(G)| + \sum [G : C_G(x_i)]</InlineMath>,
        where <InlineMath>p</InlineMath> divides each term.
      </p>

      <h3>Groups of Order p^2</h3>
      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>|G| = p^2</InlineMath>, then <InlineMath>G</InlineMath> is abelian.
        In fact, <InlineMath>G \cong \mathbb{'{'}Z{'}'}/p^2\mathbb{'{'}Z{'}'}</InlineMath> or <InlineMath>G \cong \mathbb{'{'}Z{'}'}/p\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/p\mathbb{'{'}Z{'}'}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof sketch:</strong> <InlineMath>Z(G)</InlineMath> is non-trivial. If <InlineMath>|Z(G)| = p^2</InlineMath>, done (<InlineMath>G = Z(G)</InlineMath> is abelian).
        If <InlineMath>|Z(G)| = p</InlineMath>, then <InlineMath>|G/Z(G)| = p</InlineMath>, so <InlineMath>G/Z(G)</InlineMath> is cyclic.
        But then <InlineMath>G</InlineMath> is abelian (a general result), contradiction.
      </p>

      <h3>Nilpotent Groups</h3>
      <Callout type="info">
        <strong>Definition:</strong> A group <InlineMath>G</InlineMath> is <strong>nilpotent</strong> if its <strong>upper central series</strong>
        reaches <InlineMath>G</InlineMath>:
        <MathBlock>1 = Z_0 \le Z_1 \le Z_2 \le \cdots \le Z_c = G</MathBlock>
        where <InlineMath>Z_1 = Z(G)</InlineMath> and <InlineMath>Z_{'{'}i+1{'}'}/Z_i = Z(G/Z_i)</InlineMath>.
        The smallest such <InlineMath>c</InlineMath> is the <strong>nilpotency class</strong>.
      </Callout>

      <h3>Equivalent Characterizations</h3>
      <Callout type="info">
        <strong>Theorem:</strong> For a finite group <InlineMath>G</InlineMath>, the following are equivalent:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>G</InlineMath> is nilpotent</li>
          <li>The lower central series reaches <InlineMath>\{'{'}e\{'}'}</InlineMath></li>
          <li>Every Sylow subgroup of <InlineMath>G</InlineMath> is normal</li>
          <li><InlineMath>G</InlineMath> is a direct product of its Sylow subgroups</li>
          <li>For every proper subgroup <InlineMath>H {'<'} G</InlineMath>: <InlineMath>H {'<'} N_G(H)</InlineMath></li>
        </ol>
      </Callout>

      <h3>Examples</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Abelian groups are nilpotent (class 1)</li>
        <li>All p-groups are nilpotent</li>
        <li><InlineMath>D_8</InlineMath> and <InlineMath>Q_8</InlineMath> are nilpotent (class 2)</li>
        <li><InlineMath>S_3</InlineMath> is NOT nilpotent (<InlineMath>Z(S_3) = \{'{'}e\{'}'}</InlineMath>)</li>
        <li><InlineMath>A_4</InlineMath> is NOT nilpotent</li>
      </ul>

      <h3>The Frattini Subgroup</h3>
      <Callout type="info">
        <strong>Definition:</strong> The <strong>Frattini subgroup</strong> <InlineMath>\Phi(G)</InlineMath> is the intersection of all maximal subgroups of <InlineMath>G</InlineMath>:
        <MathBlock>\Phi(G) = \bigcap_{'{'}\text{'{'}maximal {'}'} M {'<'} G{'}'} M</MathBlock>
      </Callout>

      <p>For a finite <InlineMath>p</InlineMath>-group: <InlineMath>\Phi(G) = G' \cdot G^p</InlineMath> (commutator times <InlineMath>p</InlineMath>-th powers).</p>

      <h3>Solvable Groups (Brief Mention)</h3>
      <Callout type="info">
        <strong>Definition:</strong> A group <InlineMath>G</InlineMath> is <strong>solvable</strong> if there is a chain:
        <MathBlock>1 = G_0 \unlhd G_1 \unlhd \cdots \unlhd G_n = G</MathBlock>
        with each <InlineMath>G_{'{'}i+1{'}'}/G_i</InlineMath> abelian.
      </Callout>

      <p>
        Nilpotent implies solvable, but not conversely (<InlineMath>S_3</InlineMath> is solvable but not nilpotent).
        All groups of order <InlineMath>{'<'} 60</InlineMath> are solvable (<InlineMath>A_5</InlineMath> is the smallest non-solvable group).
      </p>

      <Callout type="success">
        <strong>Summary:</strong> p-groups have <InlineMath>|G| = p^n</InlineMath> and always have non-trivial centers.
        Groups of order <InlineMath>p^2</InlineMath> are abelian. Nilpotent groups are characterized by normal Sylow subgroups
        and are direct products of their Sylow subgroups. The nilpotent class measures "how far from abelian"
        a nilpotent group is. Every p-group is nilpotent, and every nilpotent group is solvable.
      </Callout>
    </LessonLayout>
  );
}
