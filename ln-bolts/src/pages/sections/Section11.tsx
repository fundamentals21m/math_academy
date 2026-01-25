import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">HTLC Transactions</h2>

      <p className="mb-4">
        HTLC (Hash Time-Locked Contract) outputs in commitment transactions require their
        own transactions to resolve. This section covers HTLC-success and HTLC-timeout
        transactions, their scripts, and witness requirements.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTLC Output Scripts</h3>

      <p className="mb-4">
        HTLC outputs in commitment transactions use complex scripts with multiple spending
        paths:
      </p>

      <Definition title="Offered HTLC Script">
        <p className="mb-2">For HTLCs offered by the commitment transaction holder:</p>
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p>OP_DUP OP_HASH160 &lt;RIPEMD160(revocationpubkey)&gt; OP_EQUAL</p>
          <p>OP_IF</p>
          <p className="pl-4">OP_CHECKSIG</p>
          <p>OP_ELSE</p>
          <p className="pl-4">&lt;remote_htlcpubkey&gt; OP_SWAP OP_SIZE 32 OP_EQUAL</p>
          <p className="pl-4">OP_NOTIF</p>
          <p className="pl-8">OP_DROP 2 OP_SWAP &lt;local_htlcpubkey&gt; 2 OP_CHECKMULTISIG</p>
          <p className="pl-4">OP_ELSE</p>
          <p className="pl-8">OP_HASH160 &lt;RIPEMD160(payment_hash)&gt; OP_EQUALVERIFY</p>
          <p className="pl-8">OP_CHECKSIG</p>
          <p className="pl-4">OP_ENDIF</p>
          <p>OP_ENDIF</p>
        </div>
      </Definition>

      <p className="mt-4 mb-4">
        This script has three spending paths:
      </p>

      <Example title="Offered HTLC Spending Paths">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Revocation:</strong> Counterparty uses revocation key to claim
            (if commitment is revoked)
          </li>
          <li>
            <strong>HTLC-success:</strong> Remote party provides preimage to claim payment
          </li>
          <li>
            <strong>HTLC-timeout:</strong> Local party reclaims after CLTV expiry via
            HTLC-timeout transaction
          </li>
        </ol>
      </Example>

      <Definition title="Received HTLC Script">
        <p className="mb-2">For HTLCs received by the commitment transaction holder:</p>
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p>OP_DUP OP_HASH160 &lt;RIPEMD160(revocationpubkey)&gt; OP_EQUAL</p>
          <p>OP_IF</p>
          <p className="pl-4">OP_CHECKSIG</p>
          <p>OP_ELSE</p>
          <p className="pl-4">&lt;remote_htlcpubkey&gt; OP_SWAP OP_SIZE 32 OP_EQUAL</p>
          <p className="pl-4">OP_IF</p>
          <p className="pl-8">OP_HASH160 &lt;RIPEMD160(payment_hash)&gt; OP_EQUALVERIFY</p>
          <p className="pl-8">2 OP_SWAP &lt;local_htlcpubkey&gt; 2 OP_CHECKMULTISIG</p>
          <p className="pl-4">OP_ELSE</p>
          <p className="pl-8">OP_DROP &lt;cltv_expiry&gt; OP_CHECKLOCKTIMEVERIFY</p>
          <p className="pl-8">OP_DROP OP_CHECKSIG</p>
          <p className="pl-4">OP_ENDIF</p>
          <p>OP_ENDIF</p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTLC-Success Transaction</h3>

      <p className="mb-4">
        When a received HTLC can be claimed with the preimage, an HTLC-success transaction
        is used:
      </p>

      <Definition title="HTLC-Success Transaction">
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Input:</strong> The received HTLC output from commitment tx</li>
          <li><strong>Output:</strong> Goes to a delayed local output (with revocation)</li>
          <li><strong>Locktime:</strong> 0</li>
          <li><strong>Sequence:</strong> 0 (no RBF)</li>
        </ul>
      </Definition>

      <Example title="HTLC-Success Witness">
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p>witness[0]: (empty for CHECKMULTISIG)</p>
          <p>witness[1]: &lt;remote_htlcsig&gt;</p>
          <p>witness[2]: &lt;local_htlcsig&gt;</p>
          <p>witness[3]: &lt;payment_preimage&gt;</p>
          <p>witness[4]: &lt;htlc_script&gt;</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTLC-Timeout Transaction</h3>

      <p className="mb-4">
        When an offered HTLC expires without being claimed, an HTLC-timeout transaction
        returns the funds:
      </p>

      <Definition title="HTLC-Timeout Transaction">
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Input:</strong> The offered HTLC output from commitment tx</li>
          <li><strong>Output:</strong> Goes to a delayed local output (with revocation)</li>
          <li><strong>Locktime:</strong> Set to the HTLC's cltv_expiry</li>
          <li><strong>Sequence:</strong> 0</li>
        </ul>
      </Definition>

      <Example title="HTLC-Timeout Witness">
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p>witness[0]: (empty for CHECKMULTISIG)</p>
          <p>witness[1]: &lt;remote_htlcsig&gt;</p>
          <p>witness[2]: &lt;local_htlcsig&gt;</p>
          <p>witness[3]: (empty - no preimage)</p>
          <p>witness[4]: &lt;htlc_script&gt;</p>
        </div>
      </Example>

      <Callout type="info" title="Why Second-Stage Transactions?">
        HTLC-success and HTLC-timeout transactions add a delay before the local party can
        spend. This gives the counterparty time to use the revocation key if the commitment
        was revoked.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTLC Transaction Output</h3>

      <p className="mb-4">
        Both HTLC-success and HTLC-timeout outputs use the same delayed script:
      </p>

      <Definition title="HTLC Transaction Output Script">
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p>OP_IF</p>
          <p className="pl-4">&lt;revocationpubkey&gt;</p>
          <p>OP_ELSE</p>
          <p className="pl-4">&lt;to_self_delay&gt; OP_CHECKSEQUENCEVERIFY OP_DROP</p>
          <p className="pl-4">&lt;local_delayedpubkey&gt;</p>
          <p>OP_ENDIF</p>
          <p>OP_CHECKSIG</p>
        </div>
        <p className="mt-2">
          Identical to the to_local commitment output script.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signature Requirements</h3>

      <Theorem title="Pre-Signed HTLC Transactions">
        The remote party's signature for HTLC transactions is included in commitment_signed.
        This means:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>HTLC transactions can be broadcast without further cooperation</li>
          <li>All signatures use SIGHASH_ALL</li>
          <li>Signatures must be LOW-S normalized (BIP-0062)</li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Zero-Fee HTLC Transactions</h3>

      <p className="mb-4">
        With <code className="bg-dark-800 px-1 rounded">option_anchors_zero_fee_htlc_tx</code>,
        HTLC transactions are created with zero fees:
      </p>

      <Callout type="success" title="Zero-Fee Benefits">
        <ul className="list-disc list-inside space-y-1">
          <li>Fees are added via CPFP on the anchor outputs</li>
          <li>No need to predict future fee rates when signing</li>
          <li>HTLC signatures use SIGHASH_SINGLE|SIGHASH_ANYONECANPAY</li>
          <li>Additional inputs can be added to pay fees</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTLC Resolution Timeline</h3>

      <Example title="HTLC Lifecycle">
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold">1. HTLC Added</p>
            <p className="text-dark-300">update_add_htlc sent with payment_hash and cltv_expiry</p>
          </div>
          <div>
            <p className="font-semibold">2. HTLC Committed</p>
            <p className="text-dark-300">commitment_signed includes HTLC output and signatures</p>
          </div>
          <div>
            <p className="font-semibold">3a. Success Path</p>
            <p className="text-dark-300">Preimage received → update_fulfill_htlc</p>
          </div>
          <div>
            <p className="font-semibold">3b. Timeout Path</p>
            <p className="text-dark-300">No preimage by cltv_expiry → update_fail_htlc</p>
          </div>
          <div>
            <p className="font-semibold">4. On-Chain (if needed)</p>
            <p className="text-dark-300">Broadcast commitment + HTLC-success/timeout tx</p>
          </div>
        </div>
      </Example>
    </LessonLayout>
  );
}
