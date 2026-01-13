import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Blind Signature Unforgeability</h2>

      <p className="mb-4">
        This section presents the unforgeability games for sequential blind signatures and
        blind multi-signatures. These security definitions capture what it means for such
        schemes to be secure.
      </p>

      <Definition title="Sequential Unforgeability (SUNF) for Blind Signatures">
        <p>
          The game <InlineMath>\text{'{SUNF}'}^\mathcal{'{A}'}_{'{BS}'}</InlineMath> proceeds as follows:
        </p>
        <div className="bg-dark-800 rounded-lg p-4 mt-4 font-mono text-sm space-y-2">
          <p><InlineMath>par \leftarrow \text{'{Setup}'}(1^\lambda)</InlineMath></p>
          <p><InlineMath>state \leftarrow \bot</InlineMath></p>
          <p><InlineMath>k \leftarrow 0</InlineMath></p>
          <p><InlineMath>(sk^*, pk^*) \leftarrow \text{'{KeyGen}'}()</InlineMath></p>
          <p><InlineMath>(m_i, \sigma_i)_{'{i \\in [n]}'} \leftarrow \mathcal{'{A}'}^{'\text{Sign, Sign\'}'}(pk^*)</InlineMath></p>
          <p className="mt-2"><strong>return</strong> <InlineMath>(k {'<'} n</InlineMath></p>
          <p className="pl-8"><InlineMath>\land\; \forall i \neq j \in [n]: m_i \neq m_j</InlineMath></p>
          <p className="pl-8"><InlineMath>\land\; \forall i \in [n]: \text{'{Ver}'}(pk^*, m_i, \sigma_i) = \text{'{true}'})</InlineMath></p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Signing Oracles</h3>

      <p className="mb-4">
        The adversary has access to two oracles that model a two-round signing protocol:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Oracle Sign()</p>
          <p className="font-mono text-sm">
            <InlineMath>(out, state) \leftarrow \text{'{Sign}'}()</InlineMath>
          </p>
          <p className="font-mono text-sm mt-1">
            <strong>return</strong> <InlineMath>out</InlineMath>
          </p>
          <p className="text-dark-400 text-sm mt-2">
            First round: receive initial commitment from signer
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Oracle Sign'(c)</p>
          <p className="font-mono text-sm">
            <strong>if</strong> <InlineMath>state = \bot</InlineMath> <strong>then return</strong>{' '}
            <InlineMath>\bot</InlineMath>
          </p>
          <p className="font-mono text-sm">
            <InlineMath>out' \leftarrow \text{'{Sign}'}'{`(state, sk^*, c)`}</InlineMath>
          </p>
          <p className="font-mono text-sm">
            <InlineMath>k \leftarrow k + 1</InlineMath>; <InlineMath>state \leftarrow \bot</InlineMath>
          </p>
          <p className="font-mono text-sm">
            <strong>return</strong> <InlineMath>out'</InlineMath>
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Second round: complete signing with blinded challenge
          </p>
        </div>
      </div>

      <Callout type="info" title="Sequential Restriction">
        <p>
          The "sequential" nature means each signing session must complete before starting
          another. The adversary cannot interleave multiple signing sessions, which would
          enable more powerful attacks (concurrent blind signatures are much harder to secure).
        </p>
      </Callout>

      <Definition title="Sequential Unforgeability (MSUNF) for Blind Multi-Signatures">
        <p>
          The multi-signature variant <InlineMath>\text{'{MSUNF}'}^\mathcal{'{A}'}_{'{MBS}'}</InlineMath>{' '}
          extends SUNF to handle key aggregation:
        </p>
        <div className="bg-dark-800 rounded-lg p-4 mt-4 font-mono text-sm space-y-2">
          <p><InlineMath>par \leftarrow \text{'{Setup}'}(1^\lambda)</InlineMath></p>
          <p><InlineMath>state \leftarrow \bot</InlineMath></p>
          <p><InlineMath>k \leftarrow 0</InlineMath></p>
          <p><InlineMath>(sk^*, pk^*) \leftarrow \text{'{KeyGen}'}()</InlineMath></p>
          <p><InlineMath>(L_i, m_i, \sigma_i)_{'{i \\in [n]}'} \leftarrow \mathcal{'{A}'}^{'\text{Sign, Sign\'}'}(pk^*)</InlineMath></p>
          <p className="mt-2"><strong>return</strong> <InlineMath>(k {'<'} n</InlineMath></p>
          <p className="pl-8"><InlineMath>\land\; \forall i \neq j \in [n]: (L_i, m_i) \neq (L_j, m_j)</InlineMath></p>
          <p className="pl-8"><InlineMath>\land\; \forall i \in [n]: (pk^* \in L_i \land \text{'{Ver}'}(\text{'{KeyAgg}'}(L_i), m_i, \sigma_i) = \text{'{true}'}))</InlineMath></p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Differences</h3>

      <p className="mb-4">
        The main differences between SUNF and MSUNF are highlighted:
      </p>

      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>Output includes key sets:</strong> The adversary outputs{' '}
          <InlineMath>(L_i, m_i, \sigma_i)</InlineMath> where <InlineMath>L_i</InlineMath>{' '}
          is a set of public keys
        </li>
        <li>
          <strong>Distinctness condition:</strong> Pairs <InlineMath>(L_i, m_i)</InlineMath>{' '}
          must be distinct (not just messages)
        </li>
        <li>
          <strong>Key aggregation:</strong> Verification uses{' '}
          <InlineMath>\text{'{KeyAgg}'}(L_i)</InlineMath> instead of a single public key
        </li>
        <li>
          <strong>Honest key membership:</strong> The honest signer's key{' '}
          <InlineMath>pk^*</InlineMath> must be in each <InlineMath>L_i</InlineMath>
        </li>
      </ul>

      <Callout type="note" title="Security Interpretation">
        <p>
          The adversary wins if they can produce more valid signatures than the number of
          signing sessions they completed (<InlineMath>k {'<'} n</InlineMath>). This captures
          the "one-more" unforgeability notion: each signing session should only enable one
          valid signature.
        </p>
      </Callout>
    </LessonLayout>
  );
}
