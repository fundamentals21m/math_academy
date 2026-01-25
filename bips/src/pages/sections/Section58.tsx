import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-322: Generic Message Signing</h2>

      <p className="mb-4">
        BIP-322 defines a generic standard for signing messages with Bitcoin addresses.
        It extends the legacy "sign message" functionality to work with all address types,
        including SegWit and Taproot.
      </p>

      <Callout type="info" title="Proof of Control">
        <p>
          Message signing proves you control an address without spending from it. BIP-322
          enables this for modern address types that legacy signing doesn't support.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Legacy message signing only works with P2PKH addresses:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Legacy Signing Supports</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>P2PKH (1...)</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Legacy Signing Doesn't Support</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>P2SH (3...)</li>
            <li>P2SH-P2WPKH (3...)</li>
            <li>P2WPKH (bc1q...)</li>
            <li>P2WSH (bc1q...)</li>
            <li>P2TR (bc1p...)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Solution</h3>

      <Definition title="BIP-322 Generic Signing">
        <p>
          BIP-322 signs messages using a "virtual transaction" that would spend the address.
          If the witness/scriptSig can spend the address, it proves control over that address.
        </p>
        <p className="mt-2 text-dark-400">
          This works for ANY script type, even complex ones like multisig.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Virtual Transaction</h3>

      <p className="mb-4">
        The signing process creates two virtual transactions:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Transaction to_spend (never broadcast):</p>
        <p className="text-dark-300">Input: OP_0 OP_PUSH32 &lt;hash(message)&gt;</p>
        <p className="text-dark-300">Output: address_to_prove (0 satoshis)</p>
        <p className="text-dark-400 mt-4 mb-2"># Transaction to_sign (the signature):</p>
        <p className="text-dark-300">Input: spends to_spend output</p>
        <p className="text-amber-400">Witness/ScriptSig: proof of address control</p>
        <p className="text-dark-300">Output: OP_RETURN (0 satoshis)</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signature Format</h3>

      <Example title="BIP-322 Signature Structure">
        <div className="space-y-3 text-dark-300">
          <p>The signature is the witness stack from to_sign:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs mt-3">
            <p className="text-dark-400 mb-1"># For P2WPKH:</p>
            <p className="text-dark-300">&lt;signature&gt; &lt;pubkey&gt;</p>
            <p className="text-dark-400 mt-3 mb-1"># For P2TR (key path):</p>
            <p className="text-dark-300">&lt;schnorr_signature&gt;</p>
            <p className="text-dark-400 mt-3 mb-1"># For P2SH-P2WPKH:</p>
            <p className="text-dark-300">&lt;signature&gt; &lt;pubkey&gt; | &lt;witness_program&gt;</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Encoding</h3>

      <p className="mb-4">
        BIP-322 supports multiple encoding levels:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Level</th>
              <th className="text-left py-3 text-dark-300">Contents</th>
              <th className="text-left py-3 text-dark-300">Use Case</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">Simple</td>
              <td>Witness stack only (Base64)</td>
              <td>Single-sig P2WPKH/P2TR</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">Full</td>
              <td>Complete to_sign transaction</td>
              <td>Complex scripts, multisig</td>
            </tr>
            <tr>
              <td className="py-3 text-amber-400">Legacy</td>
              <td>65-byte signature (backward compat)</td>
              <td>P2PKH only</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Proof of Reserves</p>
          <p className="text-sm text-dark-300">
            Exchanges prove they control addresses holding user funds without moving them.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Login/Authentication</p>
          <p className="text-sm text-dark-300">
            Sign a challenge message to prove identity. Used by some Bitcoin services.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Timestamping</p>
          <p className="text-sm text-dark-300">
            Prove you controlled an address at a specific time by signing a dated message.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Cold Wallet Verification</p>
          <p className="text-sm text-dark-300">
            Prove a cold wallet address belongs to you during setup without making a transaction.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Verification Process</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Verifier steps:</p>
        <p className="text-dark-300">1. Reconstruct to_spend from message + address</p>
        <p className="text-dark-300">2. Parse signature into to_sign transaction</p>
        <p className="text-dark-300">3. Verify to_sign input spends to_spend output</p>
        <p className="text-dark-300">4. Run script verification (same as node validation)</p>
        <p className="text-emerald-400 mt-2">5. If valid → signer controls the address</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multisig Support</h3>

      <Callout type="info" title="Threshold Signatures">
        <p>
          BIP-322 supports multisig addresses. For 2-of-3 multisig, the "full" encoding
          includes the complete witness with required signatures and redeemScript/witnessScript.
        </p>
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">For multisig signing:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Signers create partial signatures (like PSBT workflow)</li>
          <li>Signatures combined into final witness</li>
          <li>Full encoding includes complete spending witness</li>
          <li>Verifier checks multisig requirements are satisfied</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Wallet Support</h3>

      <p className="mb-4">
        BIP-322 adoption is growing:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Sparrow Wallet:</strong> Full BIP-322 support for all address types</li>
          <li><strong>Bitcoin Core:</strong> Implementation in progress</li>
          <li><strong>Hardware wallets:</strong> Varying support levels</li>
        </ul>
      </div>

      <Callout type="success" title="Universal Proof of Control">
        <p>
          BIP-322 finally brings message signing to the modern Bitcoin ecosystem. Whether
          you use SegWit, Taproot, or complex scripts, you can now prove address control
          without making a transaction. This is essential infrastructure for proof-of-reserves,
          authentication, and many other use cases.
        </p>
      </Callout>
    </LessonLayout>
  );
}
