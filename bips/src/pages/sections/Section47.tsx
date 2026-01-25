import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-327: MuSig2</h2>

      <p className="mb-4">
        BIP-327 specifies MuSig2, a secure two-round multi-signature scheme for Schnorr
        signatures. It allows multiple parties to collaboratively create a single signature
        that is indistinguishable from a regular signature, providing both privacy and
        efficiency.
      </p>

      <Callout type="info" title="Building on BIP-340">
        <p>
          MuSig2 leverages Schnorr signature linearity (BIP-340) to aggregate public keys
          and signatures. The result looks like an ordinary single-key Taproot spend.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why MuSig?</h3>

      <p className="mb-4">
        Traditional multisig reveals the quorum structure on-chain:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Traditional Multisig</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Multiple public keys visible</li>
            <li>M-of-N structure revealed</li>
            <li>Larger transaction size</li>
            <li>Higher fees</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">MuSig</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Single aggregated key</li>
            <li>Looks like single-sig</li>
            <li>Same size as single-sig</li>
            <li>Minimal fees</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Aggregation</h3>

      <Definition title="MuSig Key Aggregation">
        <p>
          Multiple public keys are combined into a single aggregate key. The aggregation
          uses a coefficient for each key to prevent rogue key attacks.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Key aggregation (simplified):</p>
        <p className="text-dark-300">L = H(P₁ || P₂ || ... || Pₙ)  # Key list hash</p>
        <p className="text-dark-300 mt-2">aᵢ = H(L || Pᵢ)  # Coefficient for key i</p>
        <p className="text-amber-400 mt-2">P = a₁·P₁ + a₂·P₂ + ... + aₙ·Pₙ  # Aggregate key</p>
        <p className="text-dark-500 mt-3">
          The aggregate key P is a valid Taproot public key
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Two-Round Protocol</h3>

      <p className="mb-4">
        MuSig2 requires only two rounds of communication between signers:
      </p>

      <Example title="MuSig2 Signing Rounds">
        <div className="space-y-4 text-dark-300">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold mb-2">Round 1: Nonce Exchange</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Each signer generates two random nonces (R₁, R₂)</li>
              <li>Broadcast commitment to nonces or nonces directly</li>
              <li>Collect all nonces, compute aggregate nonce R</li>
            </ul>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold mb-2">Round 2: Partial Signatures</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Compute challenge e = H(R || P || message)</li>
              <li>Each signer computes partial signature sᵢ</li>
              <li>Combine: s = s₁ + s₂ + ... + sₙ</li>
              <li>Final signature: (R, s)</li>
            </ul>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Two Nonces?</h3>

      <p className="mb-4">
        MuSig2 uses two nonces per signer to prevent a specific attack:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">The "Wagner attack" problem:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            With one nonce, a malicious signer could wait for others' nonces, then
            choose their own to manipulate the aggregate nonce
          </li>
          <li>
            This could let them create a valid signature without the honest signers' cooperation
          </li>
          <li>
            Two nonces with a binding coefficient prevent this manipulation
          </li>
        </ul>
      </div>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Nonce aggregation with binding:</p>
        <p className="text-dark-300">b = H(R₁_all || R₂_all || P || message)</p>
        <p className="text-dark-300 mt-2">Rᵢ = Rᵢ₁ + b·Rᵢ₂  # Each signer's effective nonce</p>
        <p className="text-amber-400 mt-2">R = R₁ + R₂ + ... + Rₙ  # Aggregate nonce</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Nonce Generation</h3>

      <Callout type="warning" title="Critical: Nonce Reuse Prevention">
        <p>
          Reusing nonces across different signing sessions leaks the private key!
          BIP-327 specifies deterministic nonce derivation that includes:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Random auxiliary data</li>
          <li>Secret key material</li>
          <li>Aggregate public key</li>
          <li>Message being signed</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Session Management</h3>

      <p className="mb-4">
        MuSig2 requires careful session state management:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Nonce state:</strong> Must be stored securely between rounds
          </li>
          <li>
            <strong>One-time use:</strong> Each nonce pair used exactly once
          </li>
          <li>
            <strong>Abort handling:</strong> New nonces required if session aborts
          </li>
          <li>
            <strong>Parallel sessions:</strong> Each session needs independent nonces
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Lightning Channel Opens</p>
          <p className="text-sm text-dark-300">
            2-of-2 funding outputs look like single-sig, improving privacy and reducing
            on-chain footprint.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Corporate Treasury</p>
          <p className="text-sm text-dark-300">
            N-of-N multisig for organizational wallets without revealing the number
            of keyholders.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Taproot Key Path</p>
          <p className="text-sm text-dark-300">
            Multiple parties can share control of a Taproot output while maintaining
            the efficiency of key-path spending.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">MuSig vs Threshold Signatures</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Property</th>
              <th className="text-left py-3 text-dark-300">MuSig2</th>
              <th className="text-left py-3 text-dark-300">FROST (t-of-n)</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Quorum</td>
              <td>N-of-N only</td>
              <td>Any t-of-n</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Rounds</td>
              <td>2</td>
              <td>2 (with preprocessing)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Setup</td>
              <td>Non-interactive</td>
              <td>DKG required</td>
            </tr>
            <tr>
              <td className="py-3">Complexity</td>
              <td>Simpler</td>
              <td>More complex</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Privacy Through Aggregation">
        <p>
          MuSig2 is a cornerstone of Taproot's privacy benefits. By making multi-party
          spending indistinguishable from single-party spending, it improves fungibility
          for all Bitcoin users, not just MuSig users.
        </p>
      </Callout>
    </LessonLayout>
  );
}
