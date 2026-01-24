import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { CommitmentTxBuilder } from '@/components/visualizations';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Commitment Transactions</h2>

      <CommitmentTxBuilder className="mb-8" />

      <p className="mb-4">
        Commitment transactions represent the current state of a Lightning channel. Each party
        holds their own version, and either can broadcast to close the channel. This section
        details their structure and the asymmetric design that enables revocation.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Asymmetric Commitments</h3>

      <p className="mb-4">
        A crucial insight: Alice and Bob hold <em>different</em> commitment transactions for
        the same channel state. This asymmetry enables the penalty mechanism.
      </p>

      <Theorem title="Commitment Transaction Asymmetry">
        For the same channel state:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>Alice's commitment: her output has a CSV delay; Bob's is immediately spendable</li>
          <li>Bob's commitment: his output has a CSV delay; Alice's is immediately spendable</li>
        </ul>
        This ensures the broadcaster must wait, giving the counterparty time to penalize
        a revoked state.
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Commitment Transaction Structure</h3>

      <Definition title="Commitment Transaction Format">
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Version:</strong> 2</li>
          <li><strong>Input:</strong> The funding output (sequence: 0x80000000)</li>
          <li><strong>Outputs:</strong> to_local, to_remote, HTLCs (in specific order)</li>
          <li><strong>Locktime:</strong> Encodes the obscured commitment number</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Output Types</h3>

      <Definition title="to_local Output">
        The broadcaster's balance, delayed by to_self_delay blocks. Can also be claimed
        immediately using the revocation key (if the commitment is revoked).
        <div className="font-mono text-xs bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>OP_IF</p>
          <p className="pl-4">&lt;revocationpubkey&gt;</p>
          <p>OP_ELSE</p>
          <p className="pl-4">&lt;to_self_delay&gt; OP_CHECKSEQUENCEVERIFY OP_DROP</p>
          <p className="pl-4">&lt;local_delayedpubkey&gt;</p>
          <p>OP_ENDIF</p>
          <p>OP_CHECKSIG</p>
        </div>
      </Definition>

      <Definition title="to_remote Output">
        The non-broadcaster's balance. With static_remotekey, this is a simple P2WPKH:
        <div className="font-mono text-xs bg-dark-800 p-3 rounded mt-2">
          OP_0 &lt;20-byte-hash of remote_pubkey&gt;
        </div>
        <p className="mt-2">
          This is immediately spendable by the remote party with their payment key.
        </p>
      </Definition>

      <Example title="Understanding the Delay">
        <p className="mb-2">If Alice broadcasts her commitment transaction:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Alice's funds (to_local): locked for to_self_delay blocks</li>
          <li>Bob's funds (to_remote): immediately available to Bob</li>
          <li>If revoked: Bob can claim everything using revocation key</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Obscured Commitment Number</h3>

      <p className="mb-4">
        The commitment number is hidden in the locktime and sequence fields to prevent
        observers from determining how many updates the channel has had.
      </p>

      <Definition title="Obscuring the Commitment Number">
        <MathBlock>
          {`\\text{obscured} = \\text{commitment\\_number} \\oplus (\\text{SHA256}(\\text{basepoints})[:6])`}
        </MathBlock>
        <p className="mt-2">
          The lower 24 bits go in the locktime, upper 24 bits in the input sequence.
          Only the two channel parties can decode the actual commitment number.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Output Ordering</h3>

      <p className="mb-4">
        Commitment transaction outputs follow a specific ordering to ensure both parties
        construct identical transactions:
      </p>

      <Theorem title="Output Ordering Rules (BIP-69 variant)">
        Outputs are sorted by:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Value (ascending)</li>
          <li>scriptPubKey length (ascending)</li>
          <li>scriptPubKey bytes (lexicographic)</li>
        </ol>
        For HTLC outputs with equal values and scripts, sort by CLTV expiry (ascending).
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fees and Dust</h3>

      <p className="mb-4">
        The funder pays all commitment transaction fees, deducted from their output:
      </p>

      <Example title="Fee Calculation">
        <p className="mb-2">Fee components:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Base weight: ~724 weight units (1 input, 2 outputs)</li>
          <li>Per HTLC: +172 weight units</li>
          <li>Fee = feerate_per_kw × total_weight / 1000</li>
        </ul>
      </Example>

      <Definition title="Dust Limit">
        Outputs below the dust_limit_satoshis are not created on-chain. Their value is added
        to the fee. The standard dust limit for P2WSH outputs is 330 satoshis.
      </Definition>

      <Callout type="warning" title="Trimmed HTLCs">
        If an HTLC's value minus its transaction cost falls below the dust limit, the HTLC
        is "trimmed" from the commitment transaction. The value goes to fees, but the HTLC
        is still tracked for off-chain resolution.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Anchor Outputs</h3>

      <p className="mb-4">
        With anchor outputs, commitment transactions include small (330 sat) outputs for
        each party to enable CPFP fee bumping:
      </p>

      <Definition title="Anchor Output Script">
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p>&lt;local/remote_funding_pubkey&gt; OP_CHECKSIG</p>
          <p>OP_IFDUP OP_NOTIF</p>
          <p className="pl-4">16 OP_CHECKSEQUENCEVERIFY</p>
          <p>OP_ENDIF</p>
        </div>
        <p className="mt-2">
          The owner can spend immediately; anyone can spend after 16 blocks (cleanup).
        </p>
      </Definition>

      <Callout type="info" title="Why Anchors?">
        Anchors allow commitment transactions to be broadcast with minimal fees, then
        fee-bumped using Child-Pays-For-Parent (CPFP). This is crucial when on-chain
        fees spike unexpectedly.
      </Callout>
    </LessonLayout>
  );
}
