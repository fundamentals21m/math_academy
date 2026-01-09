import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2>The Sylow Theorems</h2>
      <p>
        The <strong>Sylow theorems</strong> are among the most important results in finite group theory.
        They provide a partial converse to Lagrange's theorem for prime power divisors and give detailed
        information about subgroups of prime power order.
      </p>

      <h3>Definitions</h3>
      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>G</InlineMath> be a finite group and <InlineMath>p</InlineMath> a prime. Write <InlineMath>|G| = p^n m</InlineMath> where <InlineMath>p \nmid m</InlineMath>.
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A <strong>Sylow p-subgroup</strong> of <InlineMath>G</InlineMath> is a subgroup of order <InlineMath>p^n</InlineMath></li>
          <li><InlineMath>n_p</InlineMath> denotes the number of Sylow <InlineMath>p</InlineMath>-subgroups of <InlineMath>G</InlineMath></li>
        </ul>
      </Callout>

      <h3>The Sylow Theorems</h3>
      <Callout type="info">
        <strong>Sylow's First Theorem:</strong> Sylow <InlineMath>p</InlineMath>-subgroups exist. That is, if <InlineMath>p^n \mid |G|</InlineMath>,
        then <InlineMath>G</InlineMath> has a subgroup of order <InlineMath>p^n</InlineMath>.
      </Callout>

      <Callout type="info">
        <strong>Sylow's Second Theorem:</strong> All Sylow <InlineMath>p</InlineMath>-subgroups are conjugate.
        If <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> are Sylow <InlineMath>p</InlineMath>-subgroups, then <InlineMath>Q = gPg^{'{-1}'}</InlineMath> for some <InlineMath>g \in G</InlineMath>.
      </Callout>

      <Callout type="info">
        <strong>Sylow's Third Theorem:</strong> The number <InlineMath>n_p</InlineMath> of Sylow <InlineMath>p</InlineMath>-subgroups satisfies:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>n_p \equiv 1 \pmod{'{'}p{'}'}</InlineMath></li>
          <li><InlineMath>n_p</InlineMath> divides <InlineMath>m = |G|/p^n</InlineMath></li>
        </ol>
      </Callout>

      <h3>Proof Ideas</h3>
      <p>
        <strong>First Theorem:</strong> Use induction on <InlineMath>|G|</InlineMath>. Either <InlineMath>p \mid |Z(G)|</InlineMath> (use Cauchy and quotient),
        or the class equation gives a non-central conjugacy class of size not divisible by <InlineMath>p</InlineMath>.
      </p>
      <p>
        <strong>Second Theorem:</strong> Let <InlineMath>P</InlineMath> act on Sylow <InlineMath>p</InlineMath>-subgroups by conjugation.
        Use orbit counting.
      </p>
      <p>
        <strong>Third Theorem:</strong> <InlineMath>G</InlineMath> acts on Sylow <InlineMath>p</InlineMath>-subgroups by conjugation.
        This action is transitive (by Second Theorem), so <InlineMath>n_p = [G : N_G(P)]</InlineMath> divides <InlineMath>|G|</InlineMath>.
      </p>

      <h3>Important Corollary</h3>
      <Callout type="info">
        <strong>Corollary:</strong> A Sylow <InlineMath>p</InlineMath>-subgroup <InlineMath>P</InlineMath> is normal if and only if <InlineMath>n_p = 1</InlineMath>.
      </Callout>
      <p>
        <em>Proof:</em> <InlineMath>P \unlhd G</InlineMath> iff <InlineMath>gPg^{'{-1}'} = P</InlineMath> for all <InlineMath>g</InlineMath>, iff <InlineMath>P</InlineMath> is the unique Sylow <InlineMath>p</InlineMath>-subgroup.
      </p>

      <h3>Example: Groups of Order 15</h3>
      <p>
        Let <InlineMath>|G| = 15 = 3 \cdot 5</InlineMath>.
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>n_3 \mid 5</InlineMath> and <InlineMath>n_3 \equiv 1 \pmod{'{'}3{'}'}</InlineMath>, so <InlineMath>n_3 \in \{'{'}1, 5\{'}'} \cap \{'{'}1, 4, 7, \ldots\{'}'} = \{'{'}1\{'}'}</InlineMath></li>
        <li><InlineMath>n_5 \mid 3</InlineMath> and <InlineMath>n_5 \equiv 1 \pmod{'{'}5{'}'}</InlineMath>, so <InlineMath>n_5 \in \{'{'}1, 3\{'}'} \cap \{'{'}1, 6, 11, \ldots\{'}'} = \{'{'}1\{'}'}</InlineMath></li>
      </ul>
      <p>
        Both Sylow subgroups are normal. Since their intersection is trivial and their product is <InlineMath>G</InlineMath>,
        we have <InlineMath>G \cong \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/5\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/15\mathbb{'{'}Z{'}'}</InlineMath>.
      </p>

      <h3>Example: Groups of Order 12</h3>
      <p>
        Let <InlineMath>|G| = 12 = 2^2 \cdot 3</InlineMath>.
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>n_2 \mid 3</InlineMath> and <InlineMath>n_2 \equiv 1 \pmod{'{'}2{'}'}</InlineMath>, so <InlineMath>n_2 \in \{'{'}1, 3\{'}'}</InlineMath></li>
        <li><InlineMath>n_3 \mid 4</InlineMath> and <InlineMath>n_3 \equiv 1 \pmod{'{'}3{'}'}</InlineMath>, so <InlineMath>n_3 \in \{'{'}1, 4\{'}'}</InlineMath></li>
      </ul>
      <p>
        There are multiple possibilities, leading to several groups of order 12:
        <InlineMath>\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}, \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'}, A_4, D_{'{'}12{'}'}, \text{'{'}Dic{'}'}_3</InlineMath>.
      </p>

      <h3>Applications</h3>
      <p>Sylow theorems are used to:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Prove groups are not simple (by showing <InlineMath>n_p = 1</InlineMath> for some <InlineMath>p</InlineMath>)</li>
        <li>Classify groups of small order</li>
        <li>Count elements of specific orders</li>
        <li>Analyze group structure and extensions</li>
      </ul>

      <Callout type="success">
        <strong>Summary:</strong> The Sylow theorems guarantee existence of subgroups of prime power order,
        show all such maximal subgroups are conjugate, and constrain their number.
        The constraints <InlineMath>n_p \equiv 1 \pmod{'{'}p{'}'}</InlineMath> and <InlineMath>n_p \mid m</InlineMath> are powerful tools for analyzing finite groups.
        If <InlineMath>n_p = 1</InlineMath>, the Sylow <InlineMath>p</InlineMath>-subgroup is normal.
      </Callout>
    </LessonLayout>
  );
}
