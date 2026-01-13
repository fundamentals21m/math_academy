import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2>Phase 2: Preprocessing</h2>

      <p>
        Preprocessing is what makes FROST achieve single-round signing. Participants
        generate commitment pairs in advance, enabling fast signature generation when
        needed without additional communication rounds.
      </p>

      <h3>Preprocessing Goal</h3>

      <Definition title="Preprocessing Objective">
        <p>
          Generate reusable commitment pairs <InlineMath>{`(D_i, E_i)`}</InlineMath> that can be:
        </p>
        <ul className="space-y-2 mt-3">
          <li>Created non-interactively (no coordination needed)</li>
          <li>Prepared in batches well before signing</li>
          <li>Used exactly once per signature</li>
          <li>Independent of the message or signing set</li>
        </ul>
      </Definition>

      <h3>The Generation Process</h3>

      <p>
        Each participant <InlineMath>{`P_i`}</InlineMath> generates <InlineMath>{`\\pi`}</InlineMath>
        commitment pairs (where <InlineMath>{`\\pi`}</InlineMath> is the batch size):
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-indigo-500/30">
          <h4 className="font-semibold text-indigo-400 mb-2">
            Step 1: Sample Random Nonces
          </h4>
          <p className="text-sm mb-3">
            For each <InlineMath>{`j = 1, \\ldots, \\pi`}</InlineMath>, sample:
          </p>
          <MathBlock>
            {`d_{i,j}, e_{i,j} \\stackrel{\\$}{\\leftarrow} \\mathbb{Z}_q`}
          </MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">
            Step 2: Compute Commitments
          </h4>
          <p className="text-sm mb-3">
            Compute the corresponding curve points:
          </p>
          <MathBlock>
            {`D_{i,j} = [d_{i,j}]G, \\quad E_{i,j} = [e_{i,j}]G`}
          </MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">
            Step 3: Publish and Store
          </h4>
          <p className="text-sm">
            Publish the commitment list:
          </p>
          <MathBlock>
            {`L_i = [(D_{i,1}, E_{i,1}), (D_{i,2}, E_{i,2}), \\ldots, (D_{i,\\pi}, E_{i,\\pi})]`}
          </MathBlock>
          <p className="text-sm mt-3">
            Store private values securely for later use:
          </p>
          <MathBlock>
            {`\\{(d_{i,j}, e_{i,j}) : j = 1, \\ldots, \\pi\\}`}
          </MathBlock>
        </div>
      </div>

      <h3>Key Properties</h3>

      <Theorem title="Preprocessing Properties">
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <strong>Non-interactive:</strong> Each participant generates their commitments
            independently. No coordination or communication required.
          </li>
          <li>
            <strong>Offline preparation:</strong> Can be done in advance during idle time,
            before any signing request arrives.
          </li>
          <li>
            <strong>One-time use:</strong> Each <InlineMath>{`(D_{i,j}, E_{i,j})`}</InlineMath>
            pair is used for exactly one signature, then discarded.
          </li>
          <li>
            <strong>Message-independent:</strong> Commitments don't depend on what message
            will be signed, enabling pre-computation.
          </li>
        </ol>
      </Theorem>

      <h3>Storage Requirements</h3>

      <Example title="Preprocessing Storage">
        <p className="mb-4">
          For a batch size <InlineMath>{`\\pi = 1000`}</InlineMath>:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-emerald-400 font-semibold mb-2">Public (published):</p>
            <ul className="text-sm space-y-1">
              <li>1000 pairs of curve points</li>
              <li>~64 KB per participant</li>
              <li>Can be stored on coordinator</li>
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-rose-400 font-semibold mb-2">Private (secure storage):</p>
            <ul className="text-sm space-y-1">
              <li>1000 pairs of scalars</li>
              <li>~64 KB per participant</li>
              <li>Must be kept secure!</li>
            </ul>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          This enables 1000 signatures before needing new preprocessing.
        </p>
      </Example>

      <h3>Usage During Signing</h3>

      <p>
        When a signing session begins:
      </p>

      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          The coordinator selects the next unused commitment from each signer:
          <MathBlock>
            {`\\text{For } i \\in S: \\text{ take next unused } (D_i, E_i)`}
          </MathBlock>
        </li>
        <li>
          These form the commitment list <InlineMath>{`B`}</InlineMath> for binding:
          <MathBlock>
            {`B = [(i_1, D_{i_1}, E_{i_1}), (i_2, D_{i_2}, E_{i_2}), \\ldots]`}
          </MathBlock>
        </li>
        <li>
          After signing, the used commitment pair is marked and never reused
        </li>
      </ol>

      <Callout type="error">
        <strong>Critical Security Rule:</strong> Each commitment pair must be used
        exactly once. Reusing <InlineMath>{`(d_i, e_i)`}</InlineMath> with different
        messages enables key extraction attacks, similar to the nonce reuse catastrophe
        in standard Schnorr.
      </Callout>

      <h3>Why Two Commitments?</h3>

      <p>
        The dual commitment <InlineMath>{`(D_i, E_i)`}</InlineMath> structure enables the binding mechanism:
      </p>

      <MathBlock>
        {`R_i = D_i + [\\rho_i]E_i`}
      </MathBlock>

      <Definition title="Dual Commitment Purpose">
        <ul className="space-y-3">
          <li>
            <InlineMath>{`D_i`}</InlineMath>: Provides base randomness independent of session
          </li>
          <li>
            <InlineMath>{`E_i`}</InlineMath>: Enables binding via multiplication by <InlineMath>{`\\rho_i`}</InlineMath>
          </li>
          <li>
            The combination creates a session-specific commitment while keeping
            <InlineMath>{`d_i, e_i`}</InlineMath> hidden
          </li>
        </ul>
      </Definition>

      <h3>Batch Size Tradeoffs</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">Large Batches (<InlineMath>{`\\pi`}</InlineMath> big)</h4>
          <ul className="space-y-2 text-sm">
            <li>+ More signatures before re-preprocessing</li>
            <li>+ Better amortization of setup cost</li>
            <li>- More storage required</li>
            <li>- Slight security parameter impact</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Small Batches (<InlineMath>{`\\pi`}</InlineMath> small)</h4>
          <ul className="space-y-2 text-sm">
            <li>+ Less storage needed</li>
            <li>+ Tighter security bounds</li>
            <li>- More frequent preprocessing</li>
            <li>- Higher amortized cost</li>
          </ul>
        </div>
      </div>

      <h3>Nonce Deletion</h3>

      <Theorem title="Secure Nonce Management">
        <p>
          After a commitment pair is used for signing:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>
            Immediately delete <InlineMath>{`d_i, e_i`}</InlineMath> from storage
          </li>
          <li>
            Mark the commitment as used in the index
          </li>
          <li>
            Never allow the commitment to be selected again
          </li>
        </ol>
        <p className="mt-3">
          This prevents accidental reuse, which would be catastrophic.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Implementation Note:</strong> Good implementations use a monotonic
        counter to track which commitments are used, ensuring forward-only progress
        even if software crashes mid-signing.
      </Callout>

      <h3>Summary</h3>

      <Definition title="Preprocessing Summary">
        <ul className="space-y-2">
          <li>
            <strong>When:</strong> Anytime before signing (idle periods, setup)
          </li>
          <li>
            <strong>What:</strong> Generate <InlineMath>{`\\pi`}</InlineMath> pairs of
            <InlineMath>{`(D_i, E_i)`}</InlineMath>
          </li>
          <li>
            <strong>How:</strong> Non-interactively, each participant independently
          </li>
          <li>
            <strong>Result:</strong> Enables single-round signing for next <InlineMath>{`\\pi`}</InlineMath> signatures
          </li>
        </ul>
      </Definition>

      <p>
        With preprocessing complete, signing requires only a single round of communication—
        the key efficiency advantage of FROST.
      </p>
    </LessonLayout>
  );
}
