import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Opt-in Full Replace-by-Fee Signaling</h2>

      <p className="mb-4">
        BIP-125 defines how transactions can signal that they may be replaced by higher-fee
        versions before confirmation. This "Replace-by-Fee" (RBF) mechanism allows users to
        unstick stuck transactions and enables fee market efficiency.
      </p>

      <Callout type="info" title="Opt-in by Default">
        <p>
          As of Bitcoin Core 24.0, all transactions are created with RBF signaling enabled
          by default. BIP-125 defines how this signaling works and how nodes should handle
          replacement transactions.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Without RBF, a stuck transaction creates problems:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Transaction with too-low fee may never confirm</li>
          <li>Funds are "stuck" until the tx confirms or is forgotten</li>
          <li>No way to increase the fee after broadcast</li>
          <li>Must wait for mempool expiry (typically 2 weeks)</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The RBF Signal</h3>

      <Definition title="Sequence Number Signaling">
        <p>
          A transaction signals RBF opt-in if any of its inputs has a sequence number
          less than 0xfffffffe (the maximum minus one).
        </p>
        <div className="font-mono text-sm mt-3">
          <p className="text-dark-300">Sequence &lt; 0xfffffffe → RBF enabled</p>
          <p className="text-dark-300">Sequence ≥ 0xfffffffe → RBF disabled (final)</p>
        </div>
      </Definition>

      <Example title="Sequence Values">
        <div className="space-y-3 font-mono text-sm">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># RBF enabled (most wallets default)</p>
            <p className="text-amber-400">sequence: 0xfffffffd</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># RBF disabled (final)</p>
            <p className="text-dark-300">sequence: 0xffffffff</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># With relative timelock (also RBF)</p>
            <p className="text-dark-300">sequence: 0x00000001 (1 block)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Replacement Rules</h3>

      <p className="mb-4">
        For a replacement transaction to be accepted:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            Original transaction must signal RBF (sequence &lt; 0xfffffffe)
          </li>
          <li>
            Replacement must conflict (spend at least one of the same inputs)
          </li>
          <li>
            Replacement must pay higher absolute fee
          </li>
          <li>
            Replacement must pay for its own bandwidth (additional fee ≥ min relay fee × size)
          </li>
          <li>
            Replacement must not evict more than 100 transactions
          </li>
          <li>
            All directly conflicting transactions must be RBF-signaling
          </li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fee Bumping</h3>

      <Example title="RBF Fee Bump">
        <div className="space-y-3">
          <p className="text-dark-400">Original transaction:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-300">Inputs: A (1 BTC)</p>
            <p className="text-dark-300">Output: B (0.9 BTC)</p>
            <p className="text-dark-300">Fee: 0.1 BTC (100,000 sat)</p>
            <p className="text-amber-400">sequence: 0xfffffffd (RBF enabled)</p>
          </div>

          <p className="text-dark-400 mt-3">Replacement transaction:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-300">Inputs: A (1 BTC) ← same input</p>
            <p className="text-dark-300">Output: B (0.85 BTC) ← reduced</p>
            <p className="text-emerald-400">Fee: 0.15 BTC (150,000 sat) ← increased</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Fee Bumping</p>
          <p className="text-sm text-dark-300">
            Increase fee on stuck transaction to get faster confirmation.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Payment Cancellation</p>
          <p className="text-sm text-dark-300">
            Replace a payment with a transaction sending funds back to yourself.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Batching</p>
          <p className="text-sm text-dark-300">
            Add more recipients to an unconfirmed payment to save fees.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Error Correction</p>
          <p className="text-sm text-dark-300">
            Fix mistakes in unconfirmed transactions (wrong address, amount).
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Considerations</h3>

      <Callout type="warning" title="Zero-Conf Risk">
        <p>
          RBF means unconfirmed transactions can be replaced. Merchants accepting
          zero-confirmation payments should:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Check if transaction signals RBF</li>
          <li>Wait for confirmations for significant amounts</li>
          <li>Use Lightning for instant finality</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Full RBF</h3>

      <p className="mb-4">
        Bitcoin Core 24.0 introduced optional "full RBF" (mempoolfullrbf=1):
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-amber-400 font-semibold mb-2">Opt-in RBF (BIP-125)</p>
            <p className="text-sm text-dark-300">
              Only replace transactions that explicitly signal RBF via sequence number.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-semibold mb-2">Full RBF</p>
            <p className="text-sm text-dark-300">
              Allow replacement of any unconfirmed transaction, regardless of signaling.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success" title="Best Practices">
        <p>
          Always enable RBF signaling on outgoing transactions (the default in modern wallets).
          This preserves your option to fee bump if needed. Only disable RBF if you specifically
          need to signal finality to a recipient and understand the trade-offs.
        </p>
      </Callout>
    </LessonLayout>
  );
}
