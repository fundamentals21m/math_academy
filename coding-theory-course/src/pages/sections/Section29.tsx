import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <p>
        Extended quadratic residue codes are obtained by adding an overall parity check to QR
        codes. This extension often improves the minimum distance and reveals deeper algebraic
        structure. In this section, we study extended QR codes and the powerful square root bound
        for their minimum distance.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Extended Quadratic Residue Codes</h2>

      <Definition title="Extended Code">
        <p>
          Let <InlineMath>{`\\mathcal{C}`}</InlineMath> be an <InlineMath>{`[n, k, d]`}</InlineMath> code
          over <InlineMath>{`\\text{GF}(q)`}</InlineMath>. The <strong>extended code</strong>{' '}
          <InlineMath>{`\widehat\\{\mathcal{C\\}'}`}</InlineMath> is obtained by adding an overall
          parity check coordinate:
        </p>
        <MathBlock>{`
          \\widehat\\{\\mathcal{C\\}'} = \\{\\{(c_0, c_1, \\ldots, c_n) : (c_1, \\ldots, c_n) \\in \\mathcal{C}, \\sum_{i=0}^{n} c_i = 0\\}\\}'}
        `}</MathBlock>
        <p className="mt-2">
          The extended code has parameters <InlineMath>{`[n+1, k, d']`}</InlineMath> where{' '}
          <InlineMath>{`d' \\geq d`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Extended QR Codes">
        <p>
          Let <InlineMath>{`\\mathcal{F}`}</InlineMath> be a QR code of length{' '}
          <InlineMath>{`p`}</InlineMath>. The <strong>extended QR code</strong>{' '}
          <InlineMath>{`\widehat\\{\mathcal{F\\}'}`}</InlineMath> is obtained by adding an overall
          parity check bit at position <InlineMath>{`\\infty`}</InlineMath>:
        </p>
        <MathBlock>{`
          \\widehat\\{\\mathcal{F\\}'} = \\{\\{(c_\\infty, c_0, c_1, \\ldots, c_{p-1}) : (c_0, \\ldots, c_{p-1}) \\in \\mathcal{F}, c_\\infty + \\sum_{i=0}^{p-1} c_i = 0\\}\\}'}
        `}</MathBlock>
        <p className="mt-2">
          The code <InlineMath>{`\widehat\\{\mathcal{F\\}'}`}</InlineMath> has length{' '}
          <InlineMath>{`p + 1`}</InlineMath> and the same dimension as{' '}
          <InlineMath>{`\\mathcal{F}`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Distance of Extended Codes"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\mathbf{c} = (c_0, \ldots, c_\\{n-1\\})`}</InlineMath> be a
              minimum weight codeword in <InlineMath>{`\\mathcal{C}`}</InlineMath> with{' '}
              <InlineMath>{`\\text{wt}(\\mathbf{c}) = d`}</InlineMath>.
            </p>
            <p className="mt-2">
              In the extended code, <InlineMath>{`\\mathbf{c}`}</InlineMath> becomes{' '}
              <InlineMath>{`(c_\infty, c_0, \ldots, c_\\{n-1\\})`}</InlineMath> where{' '}
              <InlineMath>{`c_\\infty = -\\sum_i c_i`}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{`\\sum_i c_i \\neq 0`}</InlineMath>, then{' '}
              <InlineMath>{`c_\\infty \\neq 0`}</InlineMath> and the weight increases by 1.
            </p>
            <p className="mt-2">
              If <InlineMath>{`\\sum_i c_i = 0`}</InlineMath>, then{' '}
              <InlineMath>{`c_\\infty = 0`}</InlineMath> and the weight remains{' '}
              <InlineMath>{`d`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{`\\mathcal{C}`}</InlineMath> is an <InlineMath>{`[n, k, d]`}</InlineMath>
          code, then the extended code <InlineMath>{`\widehat\\{\mathcal{C\\}'}`}</InlineMath> has
          minimum distance <InlineMath>{`d' = d`}</InlineMath> or{' '}
          <InlineMath>{`d' = d + 1`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="The Extended Binary Golay Code">
        <p>
          The binary Golay code <InlineMath>{`\\mathcal{G}_\\{23\\}`}</InlineMath> is a{' '}
          <InlineMath>{`[23, 12, 7]`}</InlineMath> code. Every codeword has even weight (this can be
          verified from the generator polynomial).
        </p>
        <p className="mt-2">
          When we extend by adding a parity check, minimum weight codewords of weight 7 become
          weight 8 (since <InlineMath>{`7 \cdot 1 = 7 \equiv 1 \pmod\\{2\\}`}</InlineMath> means
          the sum is odd over <InlineMath>{`\\mathbb{F}_2`}</InlineMath>, so the parity bit is 1).
        </p>
        <p className="mt-2">
          The extended binary Golay code <InlineMath>{`\widehat\\{\mathcal{G\\}'}_\\{24\\}`}</InlineMath>
          has parameters <InlineMath>{`[24, 12, 8]`}</InlineMath>.
        </p>
      </Example>

      <Example title="The Extended Ternary Golay Code">
        <p>
          The ternary Golay code <InlineMath>{`\\mathcal{G}_\\{11\\}`}</InlineMath> is an{' '}
          <InlineMath>{`[11, 6, 5]`}</InlineMath> code.
        </p>
        <p className="mt-2">
          The extended ternary Golay code <InlineMath>{`\widehat\\{\mathcal{G\\}'}_\\{12\\}`}</InlineMath>
          has parameters <InlineMath>{`[12, 6, 6]`}</InlineMath>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Square Root Bound</h2>

      <p>
        One of the most important results about QR codes is the square root bound, which gives
        a powerful lower bound on the minimum distance.
      </p>

      <Theorem
        title="Square Root Bound for QR Codes"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\mathbf{c} \in \\mathcal{F}`}</InlineMath> be a codeword of
              minimum weight <InlineMath>{`d`}</InlineMath>. Let{' '}
              <InlineMath>{`S = \{'\{i : c_i \neq 0\}\}'`}</InlineMath> be its support.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`\\mathcal{F}`}</InlineMath> is invariant under the permutation{' '}
              <InlineMath>{`\sigma: i \mapsto si \pmod\\{p\\}`}</InlineMath> (where{' '}
              <InlineMath>{`s`}</InlineMath> is the alphabet prime), we can generate multiple codewords
              by applying powers of <InlineMath>{`\\sigma`}</InlineMath>.
            </p>
            <p className="mt-2">
              The key insight uses the automorphism group of the extended code, which contains{' '}
              <InlineMath>{`PSL_2(p)`}</InlineMath>. Through careful counting arguments involving the
              structure of <InlineMath>{`PSL_2(p)`}</InlineMath>, one can show that if{' '}
              <InlineMath>d^2 {'<'} p</InlineMath>, then the code would have a codeword of weight
              less than <InlineMath>{`d`}</InlineMath>, a contradiction.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\\mathcal{F}`}</InlineMath> be a QR code of length{' '}
          <InlineMath>{`p`}</InlineMath> over <InlineMath>{`\\text{GF}(s)`}</InlineMath> with minimum
          distance <InlineMath>{`d`}</InlineMath>. Then:
        </p>
        <MathBlock>{`d^2 \\geq p`}</MathBlock>
        <p className="mt-2">
          Equivalently, <InlineMath>{`d \geq \sqrt\\{p\\}`}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Implications of the Square Root Bound">
        <p>
          The square root bound is remarkably powerful. For the binary Golay code with{' '}
          <InlineMath>{`p = 23`}</InlineMath>, it gives <InlineMath>{`d \geq \sqrt\\{23\\} \approx 4.8`}</InlineMath>,
          so <InlineMath>{`d \\geq 5`}</InlineMath>. Combined with other constraints, this helps
          establish <InlineMath>{`d = 7`}</InlineMath>.
        </p>
      </Callout>

      <Theorem
        title="Square Root Bound for Extended QR Codes"
        proof={
          <>
            <p>
              Let <InlineMath>{`\widehat\\{\mathcal{F\\}'}`}</InlineMath> be the extended QR code
              with minimum distance <InlineMath>{`d'`}</InlineMath>. Since the extension adds at most
              one to the weight, <InlineMath>{`d' \\leq d + 1`}</InlineMath> where{' '}
              <InlineMath>{`d`}</InlineMath> is the distance of the original code.
            </p>
            <p className="mt-2">
              The extended code has a richer automorphism group, specifically containing{' '}
              <InlineMath>{`PSL_2(p)`}</InlineMath> acting on{' '}
              <InlineMath>{`\\{'\\{\\infty, 0, 1, \\ldots, p-1\\}\\}'`}</InlineMath>.
            </p>
            <p className="mt-2">
              A detailed analysis using this automorphism group and the orbit-counting lemma shows
              that <InlineMath>{`(d' - 1)^2 \\geq p`}</InlineMath> unless the code is trivial.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\widehat\\{\mathcal{F\\}'}`}</InlineMath> be an extended QR code of
          length <InlineMath>{`p + 1`}</InlineMath> with minimum distance{' '}
          <InlineMath>{`d'`}</InlineMath>. Then:
        </p>
        <MathBlock>{`(d' - 1)^2 \\geq p`}</MathBlock>
        <p className="mt-2">
          Furthermore, if <InlineMath>{`(d' - 1)^2 = p`}</InlineMath>, then{' '}
          <InlineMath>{`d' - 1`}</InlineMath> divides <InlineMath>{`d'`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Automorphisms of Extended QR Codes</h2>

      <Definition title="Projective Special Linear Group">
        <p>
          The <strong>projective special linear group</strong>{' '}
          <InlineMath>{`PSL_2(p)`}</InlineMath> consists of maps of the form:
        </p>
        <MathBlock>{`z \\mapsto \\frac\\{az + b\\}\\{cz + d\\}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`a, b, c, d \in \\mathbb{Z}_p`}</InlineMath> and{' '}
          <InlineMath>{`ad - bc = 1`}</InlineMath>, acting on{' '}
          <InlineMath>{`\\mathbb{Z}_p \cup \{'\{\infty\}\}'`}</InlineMath>.
        </p>
        <p className="mt-2">
          The order of <InlineMath>{`PSL_2(p)`}</InlineMath> is{' '}
          <InlineMath>{`\frac\\{1\\}\\{2\\}p(p^2 - 1)`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Automorphism Group of Extended QR Codes"
        proof={
          <>
            <p>
              The key observation is that the transformations in{' '}
              <InlineMath>{`PSL_2(p)`}</InlineMath> preserve the set of quadratic residues (when
              viewed appropriately).
            </p>
            <p className="mt-2">
              More precisely, if <InlineMath>{`\\sigma \\in PSL_2(p)`}</InlineMath> and{' '}
              <InlineMath>{`Q`}</InlineMath> is the set of quadratic residues, then{' '}
              <InlineMath>{`\\sigma`}</InlineMath> either maps <InlineMath>{`Q`}</InlineMath> to{' '}
              <InlineMath>{`Q`}</InlineMath> or to <InlineMath>{`N`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`\\mathcal{F}`}</InlineMath> and{' '}
              <InlineMath>{`\\mathcal{N}`}</InlineMath> are equivalent, both transformations
              preserve the extended code up to equivalence.
            </p>
          </>
        }
      >
        <p>
          The automorphism group of the extended QR code{' '}
          <InlineMath>{`\widehat\\{\mathcal{F\\}'}`}</InlineMath> contains{' '}
          <InlineMath>{`PSL_2(p)`}</InlineMath> as a subgroup.
        </p>
      </Theorem>

      <Example title="Automorphisms of the Extended Golay Code">
        <p>
          For the extended binary Golay code <InlineMath>{`\widehat\\{\mathcal{G\\}'}_\\{24\\}`}</InlineMath>,
          the automorphism group is the Mathieu group <InlineMath>{`M_\\{24\\}`}</InlineMath>,
          one of the sporadic simple groups.
        </p>
        <p className="mt-2">
          <InlineMath>{`M_\\{24\\}`}</InlineMath> has order{' '}
          <InlineMath>{`244823040 = 2^\\{10\\} \cdot 3^3 \cdot 5 \cdot 7 \cdot 11 \cdot 23`}</InlineMath>.
        </p>
        <p className="mt-2">
          This group contains <InlineMath>{`PSL_2(23)`}</InlineMath> as a subgroup, which has order{' '}
          <InlineMath>{`\frac\\{1\\}\\{2\\} \cdot 23 \cdot 528 = 6072`}</InlineMath>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Self-Duality Properties</h2>

      <Theorem
        title="Self-Duality of Extended QR Codes"
        proof={
          <>
            <p>
              The dual of an extended QR code can be analyzed through the dual of the original
              QR code. For the code <InlineMath>{`\\mathcal{F}`}</InlineMath> generated by{' '}
              <InlineMath>{`q(x)`}</InlineMath>:
            </p>
            <MathBlock>{`\\\mathcal{F}^\\perp = \\overline\\{\\mathcal{N\\}'}`}</MathBlock>
            <p className="mt-2">
              After extension, the parity check constraint ensures that the extended code is
              self-dual when <InlineMath>{`s = 2`}</InlineMath> and <InlineMath>{`-1 \\in Q`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The extended binary QR codes <InlineMath>{`\widehat\\{\mathcal{F\\}'}`}</InlineMath> of
          length <InlineMath>{`p + 1`}</InlineMath> are self-dual when{' '}
          <InlineMath>{`p \equiv -1 \pmod\\{8\\}`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Self-Duality of the Extended Golay Code">
        <p>
          Since <InlineMath>{`23 \equiv -1 \pmod\\{8\\}`}</InlineMath>, the extended binary Golay
          code <InlineMath>{`\widehat\\{\mathcal{G\\}'}_\\{24\\}`}</InlineMath> is self-dual:
        </p>
        <MathBlock>{`(\\widehat\\{\\mathcal{G\\}'}_\\{24\\})^\\perp = \\widehat\\{\\mathcal{G\\}'}_\\{24\\}`}</MathBlock>
        <p className="mt-2">
          This is a doubly-even self-dual code (all weights are divisible by 4), which is
          one reason for its exceptional properties.
        </p>
      </Example>

      <Callout type="warning" title="Weight Divisibility">
        <p>
          For extended binary QR codes:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            If <InlineMath>{`p \equiv -1 \pmod\\{8\\}`}</InlineMath>, all weights are divisible
            by 4 (doubly-even).
          </li>
          <li>
            If <InlineMath>{`p \equiv 1 \pmod\\{8\\}`}</InlineMath>, all weights are even but
            not all divisible by 4 (singly-even).
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
