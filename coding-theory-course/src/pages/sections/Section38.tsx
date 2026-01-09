import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <p>
        The automorphism group of a code provides important information about the code's structure,
        including constraints on its minimum distance. In this section, we explore the connection
        between automorphisms and the minimum distance of codes.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Permutation Groups Background</h2>

      <Definition title="Orbit of a Permutation Group">
        <p>
          Let <InlineMath>{`G`}</InlineMath> be a permutation group defined on a non-empty set{' '}
          <InlineMath>{`M`}</InlineMath>. An <strong>orbit</strong> of <InlineMath>{`G`}</InlineMath> is a subset{' '}
          <InlineMath>{`S`}</InlineMath> of <InlineMath>{`M`}</InlineMath> such that there exists an element{' '}
          <InlineMath>{`a \\in M`}</InlineMath> for which:
        </p>
        <MathBlock>{`
          S = aG = \\{{'} \\sigma(a) : \\sigma \\in G \\{}'}
        `}</MathBlock>
      </Definition>

      <Definition title="Transitive Group">
        <p>
          The group <InlineMath>{`G`}</InlineMath> is called <strong>transitive</strong> if it has only one
          orbit, i.e., if for all <InlineMath>{`a, b \\in M`}</InlineMath>, there exists{' '}
          <InlineMath>{`\\sigma \\in G`}</InlineMath> such that <InlineMath>{`\\sigma(a) = b`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Stabilizer">
        <p>
          For <InlineMath>{`a \\in M`}</InlineMath>, the <strong>stabilizer</strong> of{' '}
          <InlineMath>{`a`}</InlineMath> is:
        </p>
        <MathBlock>{`
          G_a = \\{{'} \\sigma \\in G : \\sigma(a) = a \\{}'}
        `}</MathBlock>
        <p className="mt-2">
          This is the subgroup of <InlineMath>{`G`}</InlineMath> that fixes the element <InlineMath>{`a`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Orbit-Stabilizer Theorem"
        proof={
          <>
            <p>
              Consider the map <InlineMath>{`\\phi: G/G_a \\to S`}</InlineMath> defined by{' '}
              <InlineMath>{`\\phi(\\sigma G_a) = \\sigma(a)`}</InlineMath>. This is well-defined and bijective.
            </p>
            <p className="mt-2">
              Hence <InlineMath>{`|S| = |G:G_a| = |G|/|G_a|`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{`S`}</InlineMath> is an orbit of <InlineMath>{`G`}</InlineMath> and{' '}
          <InlineMath>{`a \\in S`}</InlineMath>, then:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{`|G| = |G_a| \\cdot |S|`}</InlineMath></li>
          <li>If <InlineMath>{`G`}</InlineMath> is transitive, then <InlineMath>{`|G| = |G_a| \\cdot \\deg G`}</InlineMath></li>
        </ol>
      </Theorem>

      <Callout type="info" title="Consequence">
        If <InlineMath>{`|G|`}</InlineMath> is odd while <InlineMath>{`|M|`}</InlineMath> is even, then{' '}
        <InlineMath>{`G`}</InlineMath> is <strong>not transitive</strong>.
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Blocks and Imprimitivity</h2>

      <Definition title="Block">
        <p>
          Let <InlineMath>{`G`}</InlineMath> be transitive. A proper subset <InlineMath>{`B`}</InlineMath> of{' '}
          <InlineMath>{`M`}</InlineMath> is called a <strong>block</strong> of <InlineMath>{`G`}</InlineMath> if:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{`|B| {'>'} 1`}</InlineMath></li>
          <li>For any <InlineMath>{`\\sigma \\in G`}</InlineMath>, either <InlineMath>{`B = B\\sigma`}</InlineMath> or <InlineMath>{`B \\cap B\\sigma = \\emptyset`}</InlineMath></li>
        </ol>
      </Definition>

      <Definition title="Primitive and Imprimitive Groups">
        <p>
          A transitive group without blocks is called <strong>primitive</strong>. A transitive group
          with blocks is called <strong>imprimitive</strong>.
        </p>
        <p className="mt-2">
          A <strong>block system</strong> of an imprimitive group <InlineMath>{`G`}</InlineMath> is a set{' '}
          <InlineMath>{`\\mathcal{S}`}</InlineMath> of blocks such that:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{`M`}</InlineMath> is the disjoint union of all blocks in <InlineMath>{`\\mathcal{S}`}</InlineMath></li>
          <li>If <InlineMath>{`B \in \\mathcal{S}`}</InlineMath> and <InlineMath>{`\\sigma \\in G`}</InlineMath>, then <InlineMath>{`B\sigma \in \\mathcal{S}`}</InlineMath></li>
        </ol>
      </Definition>

      <Theorem
        title="Orbits of Normal Subgroups"
        proof={
          <>
            <p>
              Since <InlineMath>{`H`}</InlineMath> is normal in <InlineMath>{`G`}</InlineMath> and intransitive,
              its orbits partition <InlineMath>{`M`}</InlineMath> into more than one subset.
            </p>
            <p className="mt-2">
              For any orbit <InlineMath>{`B`}</InlineMath> of <InlineMath>{`H`}</InlineMath> and{' '}
              <InlineMath>{`\\sigma \\in G`}</InlineMath>, <InlineMath>{`B\\sigma`}</InlineMath> is also an
              orbit of <InlineMath>{`H`}</InlineMath> because <InlineMath>{`H`}</InlineMath> is normal.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`G`}</InlineMath> is transitive, all orbits of <InlineMath>{`H`}</InlineMath>
              have the same size, forming a block system.
            </p>
          </>
        }
      >
        <p>
          If the permutation group <InlineMath>{`G`}</InlineMath> is transitive and has a non-trivial
          normal subgroup <InlineMath>{`H`}</InlineMath> which is intransitive, then the set of orbits
          for <InlineMath>{`H`}</InlineMath> is a block system for <InlineMath>{`G`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Connection to Minimum Distance</h2>

      <Theorem
        title="Self-Dual Codes with Cyclic Sylow 2-Subgroup"
        proof={
          <>
            <p>
              Let <InlineMath>{`P`}</InlineMath> be the cyclic Sylow 2-subgroup of <InlineMath>{`G`}</InlineMath>
              with generator <InlineMath>{`\\pi`}</InlineMath>. Since <InlineMath>{`|P| = 2^a`}</InlineMath>,
              we have <InlineMath>{`|G| = 2^a e`}</InlineMath> where <InlineMath>{`e`}</InlineMath> is odd and
              divisible by <InlineMath>{`b`}</InlineMath>.
            </p>
            <p className="mt-2">
              By Proposition 10.5, <InlineMath>{`G`}</InlineMath> contains a normal subgroup{' '}
              <InlineMath>{`H`}</InlineMath> with <InlineMath>{`G/H \\cong P`}</InlineMath>,{' '}
              <InlineMath>{`|H| = e`}</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`\\mathcal{C}_0 = \{'{'} u \in \\mathcal{C} : uh = u \; \forall h \in H \{'}'}`}</InlineMath>.
              Since <InlineMath>{`|H|`}</InlineMath> is odd and <InlineMath>{`n`}</InlineMath> is even,{' '}
              <InlineMath>{`H`}</InlineMath> is not transitive.
            </p>
            <p className="mt-2">
              The orbits of <InlineMath>{`H`}</InlineMath> form a block system for <InlineMath>{`G`}</InlineMath>
              consisting of <InlineMath>{`2^a`}</InlineMath> blocks of length <InlineMath>{`b`}</InlineMath> each.
            </p>
            <p className="mt-2">
              By Theorem 10.5, <InlineMath>{`\dim(\\mathbb{B}^n)_0 = 2 \dim \\mathcal{C}_0`}</InlineMath>,
              so <InlineMath>{`\dim \\mathcal{C}_0 = 2^\\{a-1\\}`}</InlineMath>.
            </p>
            <p className="mt-2">
              The rows of a <InlineMath>{`2^\\{a-1\\} \times n`}</InlineMath> matrix with two blocks of{' '}
              <InlineMath>{`b`}</InlineMath> ones per row generate a subspace of dimension{' '}
              <InlineMath>{`2^\\{a-1\\}`}</InlineMath>, which must be <InlineMath>{`\\mathcal{C}_0`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`b`}</InlineMath> is odd, the weight of each row is{' '}
              <InlineMath>{`\\equiv 2 \\pmod 4`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Suppose <InlineMath>{`\\mathcal{C}`}</InlineMath> is a binary self-dual code of length{' '}
          <InlineMath>{`n = 2^a b`}</InlineMath> (<InlineMath>{`a \\geq 1`}</InlineMath>,{' '}
          <InlineMath>{`b \\geq 1`}</InlineMath> odd) that is fixed (setwise) by a permutation group{' '}
          <InlineMath>{`G`}</InlineMath> satisfying:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{`G`}</InlineMath> is transitive on the <InlineMath>{`n`}</InlineMath> coordinate positions</li>
          <li><InlineMath>{`G`}</InlineMath> has a Sylow 2-subgroup which is cyclic of order <InlineMath>{`2^a`}</InlineMath></li>
        </ol>
        <p className="mt-2">
          Then <InlineMath>{`\\mathcal{C}`}</InlineMath> contains code words of weight congruent to{' '}
          <InlineMath>{`2 \\pmod 4`}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="Cyclic Self-Dual Codes"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\mathcal{C}`}</InlineMath> be a binary cyclic self-dual code of length{' '}
              <InlineMath>{`n = 2^a b`}</InlineMath> where <InlineMath>{`b`}</InlineMath> is odd.
            </p>
            <p className="mt-2">
              Since self-dual codes have even length, <InlineMath>{`a \\geq 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`\\sigma`}</InlineMath> be a cyclic permutation fixing{' '}
              <InlineMath>{`\\mathcal{C}`}</InlineMath>, and let{' '}
              <InlineMath>{`G = \\langle \\sigma \\rangle`}</InlineMath> be the cyclic group generated by{' '}
              <InlineMath>{`\\sigma`}</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{`P = \\langle \\sigma^b \\rangle`}</InlineMath> is a cyclic Sylow 2-subgroup
              of <InlineMath>{`G`}</InlineMath> with order <InlineMath>{`2^a`}</InlineMath>.
            </p>
            <p className="mt-2">
              The result follows from the previous theorem.
            </p>
          </>
        }
      >
        <p>No binary cyclic self-dual code has all its weights divisible by 4.</p>
      </Theorem>

      <Callout type="warning" title="Implication for Code Design">
        This theorem places a significant restriction on binary cyclic self-dual codes. If you need
        a self-dual code with all weights divisible by 4 (which would give better error-correcting
        properties), you cannot use a cyclic construction over the binary field.
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Quadratic Residue Codes</h2>

      <Theorem
        title="Automorphisms of Extended QR Codes"
        proof={
          <>
            <p>
              The proof uses properties of the projective special linear group{' '}
              <InlineMath>{`\\text{PSL}_2(p)`}</InlineMath>, which consists of transformations:
            </p>
            <MathBlock>{`
              y \\mapsto \\frac{'{ay + b}{cy + d}'} \\quad \\\text{where } ad - bc = 1
            `}</MathBlock>
            <p className="mt-2">
              These transformations permute the set{' '}
              <InlineMath>{`M = \\\{0, 1, \ldots, p-1, \infty\\}\}`}</InlineMath> and preserve the
              structure of quadratic residue codes.
            </p>
          </>
        }
      >
        <p>
          The automorphism groups of the two extended quadratic residue codes each contain a
          subgroup of which the permutation part is precisely{' '}
          <InlineMath>{`\\text{PSL}_2(p)`}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="success" title="Consequence">
        The minimum distance in the augmented code <InlineMath>{`\bar\\{\mathcal{F\\}'}`}</InlineMath>
        is one less than that in the expurgated code <InlineMath>{`\\mathcal{F}`}</InlineMath>.
      </Callout>

      <Example title="Application to Golay Code">
        <p>
          The extended binary Golay code <InlineMath>{`\\mathcal{G}_\\{24\\}`}</InlineMath> is a{' '}
          <InlineMath>{`[24, 12, 8]`}</InlineMath> self-dual code. Its automorphism group is the
          Mathieu group <InlineMath>{`M_\\{24\\}`}</InlineMath>, one of the sporadic simple groups.
        </p>
        <p className="mt-2">
          The large automorphism group reflects the exceptional symmetry of this code and
          contributes to its optimal error-correcting properties.
        </p>
      </Example>

      <Callout type="note" title="Further Reading">
        The connection between automorphism groups and code properties is deep and has been
        extensively studied. Key results include:
        <ul className="list-disc list-inside mt-2">
          <li>Gleason's theorem on weight enumerators of self-dual codes</li>
          <li>The role of the Mathieu groups in coding theory</li>
          <li>Applications to the classification of extremal codes</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
