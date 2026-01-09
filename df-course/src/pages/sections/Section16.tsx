import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2>Cosets and Lagrange's Theorem</h2>
      <p>
        <strong>Lagrange's Theorem</strong> is one of the most fundamental results in group theory.
        It relates the order of a subgroup to the order of the group via the concept of cosets.
      </p>

      <h3>Coset Properties</h3>
      <Callout type="info">
        <strong>Proposition:</strong> For <InlineMath>H \le G</InlineMath> and <InlineMath>a, b \in G</InlineMath>:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>aH = H \Leftrightarrow a \in H</InlineMath></li>
          <li><InlineMath>aH = bH \Leftrightarrow a^{'{-1}'}b \in H \Leftrightarrow b \in aH</InlineMath></li>
          <li>Either <InlineMath>aH = bH</InlineMath> or <InlineMath>aH \cap bH = \emptyset</InlineMath></li>
          <li><InlineMath>|aH| = |H|</InlineMath> for all <InlineMath>a \in G</InlineMath></li>
        </ol>
      </Callout>

      <p>
        Properties 3 and 4 show that the left cosets partition <InlineMath>G</InlineMath> into disjoint pieces of equal size.
      </p>

      <h3>The Index</h3>
      <Callout type="info">
        <strong>Definition:</strong> The <strong>index</strong> of <InlineMath>H</InlineMath> in <InlineMath>G</InlineMath>, denoted <InlineMath>[G : H]</InlineMath>,
        is the number of distinct left cosets of <InlineMath>H</InlineMath> in <InlineMath>G</InlineMath>.
      </Callout>

      <h3>Lagrange's Theorem</h3>
      <Callout type="info">
        <strong>Theorem (Lagrange):</strong> If <InlineMath>H \le G</InlineMath> and <InlineMath>G</InlineMath> is finite, then:
        <MathBlock>|G| = [G : H] \cdot |H|</MathBlock>
        In particular, <InlineMath>|H|</InlineMath> divides <InlineMath>|G|</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> The cosets partition <InlineMath>G</InlineMath>, there are <InlineMath>[G:H]</InlineMath> of them, and each has <InlineMath>|H|</InlineMath> elements.
      </p>

      <h3>Corollaries</h3>
      <Callout type="info">
        <strong>Corollary 1:</strong> The order of any element <InlineMath>a \in G</InlineMath> divides <InlineMath>|G|</InlineMath>.
      </Callout>
      <p>
        <em>Proof:</em> <InlineMath>|a| = |\langle a \rangle|</InlineMath>, which divides <InlineMath>|G|</InlineMath> by Lagrange.
      </p>

      <Callout type="info">
        <strong>Corollary 2:</strong> For any <InlineMath>a \in G</InlineMath>: <InlineMath>a^{'{'}|G|{'}'} = e</InlineMath>.
      </Callout>
      <p>
        <em>Proof:</em> If <InlineMath>|a| = n</InlineMath>, then <InlineMath>n \mid |G|</InlineMath>, so <InlineMath>a^{'{'}|G|{'}'} = (a^n)^{'{'}|G|/n{'}'} = e</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Corollary 3:</strong> Groups of prime order are cyclic.
      </Callout>
      <p>
        <em>Proof:</em> If <InlineMath>|G| = p</InlineMath> prime, then any <InlineMath>a \neq e</InlineMath> has order dividing <InlineMath>p</InlineMath>, so <InlineMath>|a| = p</InlineMath>, thus <InlineMath>G = \langle a \rangle</InlineMath>.
      </p>

      <h3>Index Multiplication</h3>
      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>K \le H \le G</InlineMath>, then:
        <MathBlock>[G : K] = [G : H] \cdot [H : K]</MathBlock>
      </Callout>

      <h3>Counting Cosets</h3>
      <p><strong>Example 1:</strong> Index of <InlineMath>A_n</InlineMath> in <InlineMath>S_n</InlineMath></p>
      <MathBlock>[S_n : A_n] = \frac{'{'}n!{'}'}{'{'}n!/2{'}'} = 2</MathBlock>

      <p><strong>Example 2:</strong> Index of <InlineMath>SL_n(\mathbb{'{'}F{'}'}_q)</InlineMath> in <InlineMath>GL_n(\mathbb{'{'}F{'}'}_q)</InlineMath></p>
      <MathBlock>[GL_n(\mathbb{'{'}F{'}'}_q) : SL_n(\mathbb{'{'}F{'}'}_q)] = q - 1</MathBlock>

      <h3>Converse of Lagrange's Theorem</h3>
      <Callout type="warning">
        <strong>Warning:</strong> The converse of Lagrange's Theorem is FALSE in general.
        If <InlineMath>d</InlineMath> divides <InlineMath>|G|</InlineMath>, there need not exist a subgroup of order <InlineMath>d</InlineMath>.
      </Callout>

      <p>
        <strong>Counterexample:</strong> <InlineMath>A_4</InlineMath> has order 12, but no subgroup of order 6.
        (We will prove this later using properties of <InlineMath>A_4</InlineMath>.)
      </p>

      <p>However, for certain groups the converse does hold:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Abelian groups (by the Fundamental Theorem)</li>
        <li>For prime power divisors (by Sylow's Theorem)</li>
        <li>Cyclic groups</li>
      </ul>

      <h3>Application: Fermat's Little Theorem</h3>
      <p>
        <strong>Proof using group theory:</strong> For prime <InlineMath>p</InlineMath> and <InlineMath>a</InlineMath> not divisible by <InlineMath>p</InlineMath>,
        consider <InlineMath>\bar{'{'}a{'}'} \in (\mathbb{'{'}Z{'}'}/p\mathbb{'{'}Z{'}'})^\times</InlineMath>.
        Since <InlineMath>|(\mathbb{'{'}Z{'}'}/p\mathbb{'{'}Z{'}'})^\times| = p - 1</InlineMath>, by Corollary 2:
      </p>
      <MathBlock>\bar{'{'}a{'}'}^{'{'}p-1{'}'} = \bar{'{'}1{'}'} \quad \Rightarrow \quad a^{'{'}p-1{'}'} \equiv 1 \pmod{'{'}p{'}'}</MathBlock>

      <Callout type="success">
        <strong>Summary:</strong> Lagrange's Theorem states that <InlineMath>|H|</InlineMath> divides <InlineMath>|G|</InlineMath> for any subgroup <InlineMath>H</InlineMath> of a finite group <InlineMath>G</InlineMath>.
        The proof uses the partition of <InlineMath>G</InlineMath> into cosets of equal size.
        Important consequences include that element orders divide group order, and groups of prime order are cyclic.
        The converse fails: not every divisor of <InlineMath>|G|</InlineMath> is the order of a subgroup.
      </Callout>
    </LessonLayout>
  );
}
