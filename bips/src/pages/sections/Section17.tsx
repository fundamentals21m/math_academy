import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">A New Signature Algorithm</h2>

      <p className="mb-4">
        BIP-143 defines how signatures are computed for SegWit transactions. The new algorithm
        fixes serious flaws in the legacy signing process, including a quadratic hashing bug
        that made large transactions computationally expensive to validate.
      </p>

      <Callout type="info" title="Part of SegWit">
        <p>
          BIP-143 activated with SegWit (BIP-141) in August 2017. It applies to all SegWit v0
          spending (P2WPKH, P2WSH). Taproot (v1) uses a further improved algorithm (BIP-341).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Legacy Problem</h3>

      <p className="mb-4">
        The original signature algorithm had a critical flaw: signing time grew quadratically
        with transaction size.
      </p>

      <Definition title="Quadratic Hashing">
        <p>
          In legacy signing, each input required hashing the entire transaction (minus the current
          input's scriptSig). For N inputs, this meant N full hashes. As transactions got larger,
          computation time grew as O(N²)—a potential DoS vector.
        </p>
      </Definition>

      <Example title="Quadratic Scaling Attack">
        <div className="space-y-3">
          <p className="text-dark-300">Consider a transaction with N inputs:</p>
          <MathBlock>
            {`\\text{Hash operations} \\approx N \\times \\text{(transaction size)} \\approx N^2`}
          </MathBlock>
          <div className="mt-3 text-dark-400 text-sm">
            <p>100 inputs → ~10,000 hash operations</p>
            <p>1000 inputs → ~1,000,000 hash operations</p>
            <p className="text-amber-400 mt-1">
              Attacker could create a "poison block" taking minutes to validate!
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-143 Solution</h3>

      <p className="mb-4">
        BIP-143 redesigns the signature hash (sighash) calculation to be O(N):
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-amber-400 mb-3">Key Improvements</h4>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="text-amber-400">1.</span>
            <span>
              <strong>Pre-computed hashes:</strong> Common data (all prevouts, all sequences,
              all outputs) is hashed once and reused for each input
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">2.</span>
            <span>
              <strong>Input-specific data:</strong> Only the current input's unique data is
              added per-signature
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">3.</span>
            <span>
              <strong>Committed values:</strong> The input amount is included in the sighash,
              preventing certain attack vectors
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Digest Algorithm</h3>

      <p className="mb-4">
        BIP-143 specifies exactly what data is hashed for each signature:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-xs mb-6 overflow-x-auto">
        <p className="text-dark-400 mb-2"># BIP-143 Sighash Preimage (double SHA256)</p>
        <ol className="space-y-1 text-dark-300">
          <li><span className="text-purple-400">1.</span> nVersion (4 bytes)</li>
          <li><span className="text-purple-400">2.</span> hashPrevouts (32 bytes) <span className="text-dark-500">← hash of all input outpoints</span></li>
          <li><span className="text-purple-400">3.</span> hashSequence (32 bytes) <span className="text-dark-500">← hash of all input sequences</span></li>
          <li><span className="text-purple-400">4.</span> outpoint (36 bytes) <span className="text-dark-500">← this input's prevout</span></li>
          <li><span className="text-purple-400">5.</span> scriptCode (var) <span className="text-dark-500">← script being satisfied</span></li>
          <li><span className="text-purple-400">6.</span> <span className="text-amber-400">value (8 bytes)</span> <span className="text-dark-500">← input amount (NEW!)</span></li>
          <li><span className="text-purple-400">7.</span> nSequence (4 bytes) <span className="text-dark-500">← this input's sequence</span></li>
          <li><span className="text-purple-400">8.</span> hashOutputs (32 bytes) <span className="text-dark-500">← hash of all outputs</span></li>
          <li><span className="text-purple-400">9.</span> nLocktime (4 bytes)</li>
          <li><span className="text-purple-400">10.</span> sighash type (4 bytes)</li>
        </ol>
      </div>

      <Example title="Pre-computed Hashes">
        <div className="space-y-3 text-dark-300">
          <p>For a transaction with 100 inputs, instead of:</p>
          <p className="text-rose-400 line-through">100 × hash(~10KB each) = ~1MB hashed</p>
          <p>BIP-143 does:</p>
          <p className="text-emerald-400">
            hash(prevouts) + hash(sequences) + hash(outputs) + 100 × hash(~200B) = ~20KB hashed
          </p>
          <p className="text-dark-500 text-sm mt-2">
            The pre-computed hashes are calculated once, then each input just adds its small unique data.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Including the Input Value</h3>

      <Callout type="success" title="Security Improvement">
        <p>
          BIP-143 requires signing the input value (amount being spent). This prevents an attack
          where a hardware wallet could be tricked into signing with incorrect fee calculations.
          The signer now commits to exactly how much is being spent, not just what's left over.
        </p>
      </Callout>

      <p className="mb-4">
        This is crucial for hardware wallets:
      </p>

      <Example title="Why Value Commitment Matters">
        <div className="space-y-3 text-dark-300">
          <p>Without value in sighash (legacy):</p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li>Hardware wallet sees: "spend this UTXO, send 1 BTC to Alice"</li>
            <li>Malware lies about UTXO value: claims it's 1.1 BTC</li>
            <li>Hardware thinks fee is 0.1 BTC (reasonable)</li>
            <li>Actually, UTXO is 10 BTC → fee is 9 BTC!</li>
          </ol>
          <p className="text-emerald-400 mt-2">
            With BIP-143: signature commits to the actual value, so hardware wallet must know
            the true amount to produce a valid signature.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sighash Types</h3>

      <p className="mb-4">
        BIP-143 supports the same sighash types as legacy, with modified behavior:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Type</th>
              <th className="text-left py-3 text-dark-300">Value</th>
              <th className="text-left py-3 text-dark-300">Signs</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">SIGHASH_ALL</td>
              <td>0x01</td>
              <td>All inputs and outputs</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">SIGHASH_NONE</td>
              <td>0x02</td>
              <td>All inputs, no outputs</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">SIGHASH_SINGLE</td>
              <td>0x03</td>
              <td>All inputs, one output (same index)</td>
            </tr>
            <tr>
              <td className="py-3 text-amber-400">ANYONECANPAY</td>
              <td>0x80</td>
              <td>Modifier: only this input</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation Notes</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-300 mb-3">For wallet developers:</p>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Always use the new algorithm for SegWit inputs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Cache hashPrevouts, hashSequence, hashOutputs when signing multiple inputs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Verify you have the correct input value before signing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>SIGHASH_SINGLE requires special handling when index exceeds outputs</span>
          </li>
        </ul>
      </div>

      <Callout type="note" title="Taproot Improvements">
        <p>
          BIP-341 (Taproot) further improves on BIP-143 with tagged hashes, epoch separation,
          and additional commitments. However, BIP-143 remains the standard for SegWit v0
          transactions.
        </p>
      </Callout>
    </LessonLayout>
  );
}
