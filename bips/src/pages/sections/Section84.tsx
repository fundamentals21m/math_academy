import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section84() {
  return (
    <LessonLayout sectionId={84}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-199: Hashed Time-Locked Contracts</h2>

      <p className="mb-4">
        BIP-199 standardizes Hashed Time-Locked Contracts (HTLCs), the fundamental building
        block for trustless atomic swaps and payment channel networks like Lightning.
      </p>

      <Callout type="info" title="Foundation of Layer 2">
        <p>
          HTLCs enable conditional payments that either complete atomically or refund
          safely. This primitive powers cross-chain swaps and multi-hop Lightning payments.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What is an HTLC?</h3>

      <Definition title="Hashed Time-Locked Contract">
        <p>
          A conditional payment that can be claimed by revealing a secret (preimage) before
          a timeout, or refunded to the sender after the timeout expires. Uses hash locks
          for conditionality and time locks for safety.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># HTLC conditions:</p>
        <p className="text-dark-300">IF</p>
        <p className="text-amber-400 ml-4">Hash(preimage) == hash AND receiver_sig</p>
        <p className="text-dark-300">ELSE</p>
        <p className="text-amber-400 ml-4">timeout_passed AND sender_sig</p>
        <p className="text-dark-500 mt-3">
          Receiver must reveal preimage to claim, otherwise sender refunds
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Script Structure</h3>

      <Example title="BIP-199 HTLC Script">
        <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
          <p className="text-dark-400 mb-2"># Redemption path (hashlock):</p>
          <p className="text-dark-300">OP_IF</p>
          <p className="text-dark-300 ml-4">OP_SHA256 &lt;hash&gt; OP_EQUALVERIFY</p>
          <p className="text-dark-300 ml-4">OP_DUP OP_HASH160 &lt;receiver_pubkey_hash&gt;</p>
          <p className="text-dark-400 mt-3 mb-2"># Refund path (timelock):</p>
          <p className="text-dark-300">OP_ELSE</p>
          <p className="text-dark-300 ml-4">&lt;timeout&gt; OP_CHECKLOCKTIMEVERIFY OP_DROP</p>
          <p className="text-dark-300 ml-4">OP_DUP OP_HASH160 &lt;sender_pubkey_hash&gt;</p>
          <p className="text-dark-300">OP_ENDIF</p>
          <p className="text-dark-300">OP_EQUALVERIFY OP_CHECKSIG</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTLC Flow</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <p className="text-dark-300">Receiver generates random preimage, computes hash</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <p className="text-dark-300">Sender creates HTLC with receiver's hash</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <p className="text-dark-300">Receiver claims by revealing preimage before timeout</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <p className="text-dark-300">If unclaimed, sender refunds after timeout</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Atomic Swaps</h3>

      <p className="mb-4">
        HTLCs enable trustless cross-chain exchanges:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Cross-chain atomic swap:</p>
        <p className="text-dark-300">Alice: 1 BTC → Bob (hash H, timeout T1)</p>
        <p className="text-dark-300">Bob: 50 LTC → Alice (same hash H, timeout T2)</p>
        <p className="text-dark-400 mt-3 mb-2"># Requirements:</p>
        <p className="text-amber-400">T1 &gt; T2 (Alice's timeout longer)</p>
        <p className="text-dark-500 mt-2">
          Both use same hash → revealing preimage claims both
        </p>
      </div>

      <Example title="Atomic Swap Execution">
        <div className="space-y-3 text-dark-300">
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-400 mb-2"># 1. Alice creates preimage:</p>
            <p className="text-dark-300">preimage = random_bytes(32)</p>
            <p className="text-dark-300">hash = SHA256(preimage)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-400 mb-2"># 2. Alice locks BTC with HTLC:</p>
            <p className="text-dark-300">HTLC(1 BTC, hash, Bob, timeout=24h)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-400 mb-2"># 3. Bob locks LTC with same hash:</p>
            <p className="text-dark-300">HTLC(50 LTC, hash, Alice, timeout=12h)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-400 mb-2"># 4. Alice claims LTC (reveals preimage):</p>
            <p className="text-emerald-400">claim(preimage) → Alice receives 50 LTC</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-400 mb-2"># 5. Bob uses revealed preimage:</p>
            <p className="text-emerald-400">claim(preimage) → Bob receives 1 BTC</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning Network Usage</h3>

      <p className="mb-4">
        Lightning uses HTLCs for multi-hop payments:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Multi-hop payment:</p>
        <p className="text-dark-300">Alice → Bob → Carol → Dave</p>
        <p className="text-dark-400 mt-3 mb-2"># HTLC chain (same hash, decreasing timeouts):</p>
        <p className="text-dark-300">Alice→Bob: HTLC(amount+fees, H, T+30)</p>
        <p className="text-dark-300">Bob→Carol: HTLC(amount+fee, H, T+20)</p>
        <p className="text-dark-300">Carol→Dave: HTLC(amount, H, T+10)</p>
        <p className="text-dark-500 mt-2">
          Dave reveals preimage, unlocking entire chain
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Considerations</h3>

      <Callout type="warning" title="HTLC Security">
        <ul className="list-disc list-inside space-y-1">
          <li>Timeout must be sufficient for blockchain confirmation</li>
          <li>Preimage must be high-entropy (256 bits)</li>
          <li>Monitor for preimage revelation on-chain</li>
          <li>Cascading timeouts must decrease toward receiver</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hash Functions</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Hash</th>
              <th className="text-left py-3 text-dark-300">Use Case</th>
              <th className="text-left py-3 text-dark-300">Notes</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">SHA256</td>
              <td>Standard HTLCs</td>
              <td>Most common, Bitcoin native</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">HASH160</td>
              <td>Compact HTLCs</td>
              <td>Smaller output, less security margin</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">SHA256²</td>
              <td>Lightning</td>
              <td>Double-SHA256 for compatibility</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Universal Building Block">
        <p>
          HTLCs are the universal building block for trustless conditional payments.
          From simple atomic swaps to complex Lightning routes, the hash-and-time-lock
          pattern ensures either complete execution or safe refund—enabling an entire
          ecosystem of Layer 2 protocols.
        </p>
      </Callout>
    </LessonLayout>
  );
}
