import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2>Groups of Medium Order: Applications</h2>

      <p>
        In this section, we apply the techniques developed in previous sections—Sylow theorems,
        semidirect products, and group actions—to classify groups of "medium" orders. This
        involves analyzing groups whose orders are products of small primes and determining
        which abstract structures are possible.
      </p>

      <h3>Strategy for Classification</h3>

      <p>
        The general approach to classifying groups of a given order <InlineMath>n</InlineMath> involves:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4">
        <li>Use Sylow theorems to determine the possible numbers of Sylow <InlineMath>p</InlineMath>-subgroups</li>
        <li>Identify normal Sylow subgroups when they exist</li>
        <li>Express the group as a semidirect product when possible</li>
        <li>Classify the possible semidirect products by analyzing automorphism groups</li>
      </ol>

      <Definition title="Groups of Order pq">
        <p>
          Let <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath> be distinct primes
          with <InlineMath>{'p < q'}</InlineMath>. A group <InlineMath>G</InlineMath> of
          order <InlineMath>pq</InlineMath> satisfies:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>If <InlineMath>{'p \\nmid (q-1)'}</InlineMath>, then <InlineMath>{'G \\cong \\mathbb{Z}_{pq}'}</InlineMath></li>
          <li>If <InlineMath>{'p \\mid (q-1)'}</InlineMath>, there are exactly two groups: the cyclic group and a non-abelian group</li>
        </ul>
      </Definition>

      <Theorem title="Classification of Groups of Order pq"
        proof={
          <>
            <p>
              By Sylow's theorem, <InlineMath>{'n_q \\equiv 1 \\pmod{q}'}</InlineMath> and <InlineMath>{'n_q \\mid p'}</InlineMath>.
              Since <InlineMath>{'p < q'}</InlineMath>, we have <InlineMath>{'n_q = 1'}</InlineMath>, so the Sylow
              <InlineMath>q</InlineMath>-subgroup <InlineMath>Q</InlineMath> is normal.
            </p>
            <p className="mt-2">
              For Sylow <InlineMath>p</InlineMath>-subgroups: <InlineMath>{'n_p \\equiv 1 \\pmod{p}'}</InlineMath> and <InlineMath>{'n_p \\mid q'}</InlineMath>,
              so <InlineMath>{'n_p \\in \\{1, q\\}'}</InlineMath>. If <InlineMath>{'n_p = q'}</InlineMath>, then <InlineMath>{'q \\equiv 1 \\pmod{p}'}</InlineMath>,
              meaning <InlineMath>{'p \\mid (q-1)'}</InlineMath>.
            </p>
            <p className="mt-2">
              When <InlineMath>P</InlineMath> is also normal, <InlineMath>{'G = P \\times Q \\cong \\mathbb{Z}_{pq}'}</InlineMath>.
              Otherwise, <InlineMath>{'G = Q \\rtimes P'}</InlineMath> where the action is determined by
              a homomorphism <InlineMath>{'P \\to \\text{Aut}(Q) \\cong \\mathbb{Z}_{q-1}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'p < q'}</InlineMath> be primes. If <InlineMath>{'p \\nmid (q-1)'}</InlineMath>,
          every group of order <InlineMath>pq</InlineMath> is cyclic. If <InlineMath>{'p \\mid (q-1)'}</InlineMath>,
          there are exactly two isomorphism classes: the cyclic group <InlineMath>{'\\mathbb{Z}_{pq}'}</InlineMath> and
          a non-abelian group <InlineMath>{'\\mathbb{Z}_q \\rtimes \\mathbb{Z}_p'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Groups of Order 15">
        <p>
          Consider groups of order <InlineMath>{'15 = 3 \\cdot 5'}</InlineMath>. Here <InlineMath>p = 3</InlineMath> and <InlineMath>q = 5</InlineMath>.
        </p>
        <p className="mt-2">
          Check: does <InlineMath>{'3 \\mid (5-1) = 4'}</InlineMath>? No.
        </p>
        <p className="mt-2">
          Therefore, every group of order 15 is cyclic: <InlineMath>{'G \\cong \\mathbb{Z}_{15}'}</InlineMath>.
        </p>
      </Example>

      <Example title="Groups of Order 21">
        <p>
          Consider groups of order <InlineMath>{'21 = 3 \\cdot 7'}</InlineMath>. Here <InlineMath>p = 3</InlineMath> and <InlineMath>q = 7</InlineMath>.
        </p>
        <p className="mt-2">
          Check: does <InlineMath>{'3 \\mid (7-1) = 6'}</InlineMath>? Yes!
        </p>
        <p className="mt-2">
          Therefore, there are exactly two groups of order 21:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'\\mathbb{Z}_{21}'}</InlineMath> (cyclic)</li>
          <li><InlineMath>{'\\mathbb{Z}_7 \\rtimes \\mathbb{Z}_3'}</InlineMath> (non-abelian)</li>
        </ul>
        <p className="mt-2">
          The non-abelian group has presentation <InlineMath>{'\\langle a, b \\mid a^7 = b^3 = 1, bab^{-1} = a^2 \\rangle'}</InlineMath>.
        </p>
      </Example>

      <h3>Groups of Order p²q</h3>

      <Definition title="Groups of Order p²q Structure">
        <p>
          For groups of order <InlineMath>{'p^2 q'}</InlineMath> with <InlineMath>{'p < q'}</InlineMath>,
          the Sylow <InlineMath>q</InlineMath>-subgroup is often normal. The Sylow <InlineMath>p</InlineMath>-subgroup
          is isomorphic to either <InlineMath>{'\\mathbb{Z}_{p^2}'}</InlineMath> or <InlineMath>{'\\mathbb{Z}_p \\times \\mathbb{Z}_p'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Groups of Order 12">
        <p>
          Groups of order <InlineMath>{'12 = 2^2 \\cdot 3'}</InlineMath>. By Sylow theory:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'n_3 \\in \\{1, 4\\}'}</InlineMath></li>
          <li><InlineMath>{'n_2 \\in \\{1, 3\\}'}</InlineMath></li>
        </ul>
        <p className="mt-2">
          The five groups of order 12 are:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'\\mathbb{Z}_{12}'}</InlineMath> (cyclic)</li>
          <li><InlineMath>{'\\mathbb{Z}_6 \\times \\mathbb{Z}_2'}</InlineMath></li>
          <li><InlineMath>{'A_4'}</InlineMath> (alternating group)</li>
          <li><InlineMath>{'D_{12}'}</InlineMath> (dihedral group)</li>
          <li><InlineMath>{'\\mathbb{Z}_3 \\rtimes \\mathbb{Z}_4'}</InlineMath> (dicyclic group <InlineMath>{'Q_{12}'}</InlineMath>)</li>
        </ul>
      </Example>

      <h3>Groups of Order p³</h3>

      <Theorem title="Groups of Order p³"
        proof={
          <>
            <p>
              For a <InlineMath>p</InlineMath>-group <InlineMath>G</InlineMath> of order <InlineMath>{'p^3'}</InlineMath>,
              the center <InlineMath>Z(G)</InlineMath> is non-trivial. If <InlineMath>G</InlineMath> is abelian,
              we use the classification of finitely generated abelian groups.
            </p>
            <p className="mt-2">
              If <InlineMath>G</InlineMath> is non-abelian, then <InlineMath>{'|Z(G)| = p'}</InlineMath> and
              <InlineMath>{'G/Z(G) \\cong \\mathbb{Z}_p \\times \\mathbb{Z}_p'}</InlineMath>. The structure
              depends on whether <InlineMath>G</InlineMath> has an element of order <InlineMath>{'p^2'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For any prime <InlineMath>p</InlineMath>, there are exactly five groups of order <InlineMath>{'p^3'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'\\mathbb{Z}_{p^3}'}</InlineMath></li>
          <li><InlineMath>{'\\mathbb{Z}_{p^2} \\times \\mathbb{Z}_p'}</InlineMath></li>
          <li><InlineMath>{'\\mathbb{Z}_p \\times \\mathbb{Z}_p \\times \\mathbb{Z}_p'}</InlineMath></li>
          <li>The Heisenberg group mod <InlineMath>p</InlineMath> (non-abelian, exponent <InlineMath>p</InlineMath> for <InlineMath>{'p > 2'}</InlineMath>)</li>
          <li>A non-abelian group with an element of order <InlineMath>{'p^2'}</InlineMath></li>
        </ul>
      </Theorem>

      <Callout type="info">
        <strong>The Heisenberg Group:</strong> For odd primes <InlineMath>p</InlineMath>, the Heisenberg
        group mod <InlineMath>p</InlineMath> consists of <InlineMath>{'3 \\times 3'}</InlineMath> upper
        triangular matrices with 1s on the diagonal and entries in <InlineMath>{'\\mathbb{Z}_p'}</InlineMath>.
        It has presentation <InlineMath>{'\\langle a, b, c \\mid a^p = b^p = c^p = 1, [a,b] = c, [a,c] = [b,c] = 1 \\rangle'}</InlineMath>.
      </Callout>

      <h3>The Group of Order 30</h3>

      <Example title="Classifying Groups of Order 30">
        <p>
          Order <InlineMath>{'30 = 2 \\cdot 3 \\cdot 5'}</InlineMath>. Analyzing Sylow subgroups:
        </p>
        <MathBlock>
          {'n_5 \\in \\{1, 6\\}, \\quad n_3 \\in \\{1, 10\\}, \\quad n_2 \\in \\{1, 3, 5, 15\\}'}
        </MathBlock>
        <p className="mt-2">
          If <InlineMath>{'n_5 = 6'}</InlineMath>, there would be 24 elements of order 5. If also <InlineMath>{'n_3 = 10'}</InlineMath>,
          there would be 20 elements of order 3. But <InlineMath>{'24 + 20 > 30'}</InlineMath>, contradiction.
        </p>
        <p className="mt-2">
          So either <InlineMath>{'n_5 = 1'}</InlineMath> or <InlineMath>{'n_3 = 1'}</InlineMath>. In either case,
          the group has a normal Sylow subgroup.
        </p>
        <p className="mt-2">
          There are exactly four groups of order 30:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'\\mathbb{Z}_{30}'}</InlineMath></li>
          <li><InlineMath>{'D_{30}'}</InlineMath></li>
          <li><InlineMath>{'\\mathbb{Z}_3 \\times D_{10}'}</InlineMath></li>
          <li><InlineMath>{'\\mathbb{Z}_5 \\times D_6'}</InlineMath></li>
        </ul>
      </Example>

      <Callout type="success">
        <strong>Summary:</strong> The classification of groups of medium order combines Sylow theory
        with semidirect product analysis. Key insights include counting arguments that force normal
        Sylow subgroups and understanding how the structure of automorphism groups constrains possible
        semidirect products. These techniques extend to larger orders, though the analysis becomes
        increasingly complex.
      </Callout>
    </LessonLayout>
  );
}
