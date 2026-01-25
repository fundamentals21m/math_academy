import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BOLT #3: Funding Transactions</h2>

      <p className="mb-4">
        BOLT #3 specifies the exact Bitcoin transaction and script formats used in Lightning
        channels. This section covers the funding transaction—the on-chain transaction that
        creates and secures the channel.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Funding Output Structure</h3>

      <p className="mb-4">
        The funding transaction creates a 2-of-2 multisig output that both channel parties
        must sign to spend. This is the foundation of all channel security.
      </p>

      <Definition title="Funding Output Script">
        A Pay-to-Witness-Script-Hash (P2WSH) output with a 2-of-2 multisig witness script:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2">
          <p>OP_2 &lt;pubkey1&gt; &lt;pubkey2&gt; OP_2 OP_CHECKMULTISIG</p>
        </div>
        <p className="mt-2">
          Where pubkey1 and pubkey2 are the funding pubkeys from open_channel and accept_channel,
          ordered lexicographically (smaller pubkey first).
        </p>
      </Definition>

      <Theorem title="Lexicographic Key Ordering">
        To ensure both parties derive the same script hash, public keys are sorted
        lexicographically (comparing as unsigned byte arrays). This creates a canonical
        ordering regardless of who is funder vs fundee.
      </Theorem>

      <Example title="Funding Script Construction">
        <p className="mb-2 text-sm">Given funding pubkeys:</p>
        <div className="font-mono text-xs bg-dark-800 p-2 rounded space-y-1">
          <p>Alice: 02a1b2c3... (compresses to smaller value)</p>
          <p>Bob: 03d4e5f6... (compresses to larger value)</p>
        </div>
        <p className="mt-2 text-sm">The witness script is always:</p>
        <div className="font-mono text-xs bg-dark-800 p-2 rounded mt-1">
          OP_2 02a1b2c3... 03d4e5f6... OP_2 OP_CHECKMULTISIG
        </div>
        <p className="mt-2 text-sm">Regardless of who initiated the channel.</p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Funding Transaction Format</h3>

      <p className="mb-4">
        The funding transaction itself follows standard Bitcoin transaction rules:
      </p>

      <Definition title="Funding Transaction Requirements">
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Version:</strong> 2 (for sequence-based CSV support)</li>
          <li><strong>Inputs:</strong> Standard UTXOs from the funder</li>
          <li><strong>Funding Output:</strong> P2WSH with the 2-of-2 multisig</li>
          <li><strong>Change Output:</strong> Optional, returns excess to funder</li>
          <li><strong>Locktime:</strong> Typically 0 (or current block height)</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Computing the Funding Output Hash</h3>

      <p className="mb-4">
        The funding output uses P2WSH, which requires computing a script hash:
      </p>

      <Theorem title="P2WSH Address Derivation">
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Construct the witness script (2-of-2 multisig)</li>
          <li>Compute SHA256 hash of the witness script</li>
          <li>Create scriptPubKey: OP_0 &lt;32-byte hash&gt;</li>
          <li>This is the funding output's locking script</li>
        </ol>
      </Theorem>

      <Example title="Spending the Funding Output">
        <p className="mb-2 text-sm">To spend, the witness stack must contain:</p>
        <div className="font-mono text-xs bg-dark-800 p-2 rounded space-y-1">
          <p>witness[0]: (empty for OP_CHECKMULTISIG bug)</p>
          <p>witness[1]: &lt;signature from pubkey1&gt;</p>
          <p>witness[2]: &lt;signature from pubkey2&gt;</p>
          <p>witness[3]: &lt;witness script (the 2-of-2 multisig)&gt;</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel ID Derivation</h3>

      <p className="mb-4">
        Once the funding transaction is known, the permanent channel ID can be computed:
      </p>

      <Definition title="Channel ID Calculation">
        <MathBlock>
          {`\\text{channel\\_id} = \\text{funding\\_txid} \\oplus \\text{output\\_index}`}
        </MathBlock>
        <p className="mt-2">
          The output index is left-padded to 32 bytes before XOR. This creates a unique
          identifier tied to the specific funding UTXO.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Confirmation Requirements</h3>

      <p className="mb-4">
        The funding transaction must be confirmed before the channel is fully operational:
      </p>

      <Example title="Confirmation Flow">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Confirmations</th>
              <th className="text-left py-2">Channel State</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">0</td>
              <td className="py-2">Waiting (or zero-conf if supported)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">1 to minimum_depth-1</td>
              <td className="py-2">Confirming</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">minimum_depth</td>
              <td className="py-2">Ready (channel_ready exchanged)</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">6+</td>
              <td className="py-2">Can be announced (BOLT #7)</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="warning" title="Reorg Protection">
        If a blockchain reorganization occurs and the funding transaction is no longer
        confirmed, nodes must:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Stop using the channel immediately</li>
          <li>Wait for re-confirmation before resuming</li>
          <li>Handle the case where the funding tx is double-spent</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Funding Transaction Security</h3>

      <p className="mb-4">
        Several security considerations apply to the funding transaction:
      </p>

      <Theorem title="Security Properties">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>No Preimage Attack:</strong> The funding script hash is computed before
            the transaction is broadcast, preventing script substitution.
          </li>
          <li>
            <strong>2-of-2 Requirement:</strong> Neither party can unilaterally spend the
            funding output (without broadcasting a commitment transaction).
          </li>
          <li>
            <strong>Confirmation Finality:</strong> After sufficient confirmations, the
            funding UTXO is considered secure against reorganizations.
          </li>
        </ul>
      </Theorem>

      <Callout type="info" title="Anchor Outputs">
        Channels with <code className="bg-dark-800 px-1 rounded">option_anchors</code> don't
        change the funding transaction itself. Anchors appear in commitment transactions,
        not the funding transaction.
      </Callout>
    </LessonLayout>
  );
}
