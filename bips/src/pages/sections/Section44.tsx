import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-371: Taproot Fields for PSBT</h2>

      <p className="mb-4">
        BIP-371 extends the PSBT format with new fields specifically for Taproot transactions.
        These additions enable hardware wallets and signing devices to properly construct and
        verify Taproot signatures.
      </p>

      <Callout type="info" title="Companion to Taproot">
        <p>
          BIP-371 was developed alongside the Taproot soft fork (BIPs 340-342). It ensures
          that the PSBT ecosystem can fully support Taproot's key-path and script-path
          spending.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why New Fields?</h3>

      <p className="mb-4">
        Taproot introduces concepts that don't map to existing PSBT fields:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-dark-700/50">
          <p className="text-amber-400 font-bold mb-2">Schnorr Signatures</p>
          <p className="text-sm text-dark-300">
            64 bytes instead of ~72 bytes, no sighash type appended in key-path spending.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-dark-700/50">
          <p className="text-amber-400 font-bold mb-2">Tweaked Keys</p>
          <p className="text-sm text-dark-300">
            Internal keys are tweaked with the Merkle root. Signers need the internal key.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-dark-700/50">
          <p className="text-amber-400 font-bold mb-2">Script Trees</p>
          <p className="text-sm text-dark-300">
            MAST structures require control blocks and leaf scripts for spending.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">New Input Fields</h3>

      <Definition title="Taproot Input Fields">
        <p>
          Fields for providing Taproot-specific data needed to construct valid signatures
          and witnesses for spending Taproot outputs.
        </p>
      </Definition>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Field</th>
              <th className="text-left py-3 text-dark-300">Type</th>
              <th className="text-left py-3 text-dark-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-xs text-amber-400">PSBT_IN_TAP_KEY_SIG</td>
              <td className="font-mono">0x13</td>
              <td>Key-path Schnorr signature</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-xs text-amber-400">PSBT_IN_TAP_SCRIPT_SIG</td>
              <td className="font-mono">0x14</td>
              <td>Script-path signature for leaf</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-xs text-amber-400">PSBT_IN_TAP_LEAF_SCRIPT</td>
              <td className="font-mono">0x15</td>
              <td>Leaf script with version</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-xs text-amber-400">PSBT_IN_TAP_BIP32_DERIVATION</td>
              <td className="font-mono">0x16</td>
              <td>BIP32 paths for Taproot keys</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-xs text-amber-400">PSBT_IN_TAP_INTERNAL_KEY</td>
              <td className="font-mono">0x17</td>
              <td>Internal (untweaked) key</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-xs text-amber-400">PSBT_IN_TAP_MERKLE_ROOT</td>
              <td className="font-mono">0x18</td>
              <td>Script tree Merkle root</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">New Output Fields</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Field</th>
              <th className="text-left py-3 text-dark-300">Type</th>
              <th className="text-left py-3 text-dark-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-xs text-amber-400">PSBT_OUT_TAP_INTERNAL_KEY</td>
              <td className="font-mono">0x05</td>
              <td>Internal key for output</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-xs text-amber-400">PSBT_OUT_TAP_TREE</td>
              <td className="font-mono">0x06</td>
              <td>Serialized script tree</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-xs text-amber-400">PSBT_OUT_TAP_BIP32_DERIVATION</td>
              <td className="font-mono">0x07</td>
              <td>BIP32 paths for output keys</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key-Path Spending</h3>

      <Example title="Key-Path PSBT Flow">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Creator adds input with Taproot UTXO:</p>
            <p className="text-dark-300">PSBT_IN_WITNESS_UTXO: (P2TR output)</p>
            <p className="text-dark-300">PSBT_IN_TAP_INTERNAL_KEY: &lt;32-byte internal key&gt;</p>
            <p className="text-dark-300">PSBT_IN_TAP_MERKLE_ROOT: (empty for key-only)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Signer produces signature:</p>
            <p className="text-emerald-400">PSBT_IN_TAP_KEY_SIG: &lt;64-byte Schnorr sig&gt;</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Final witness:</p>
            <p className="text-dark-300">&lt;signature&gt;</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Script-Path Spending</h3>

      <Example title="Script-Path PSBT Flow">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Input with script tree info:</p>
            <p className="text-dark-300">PSBT_IN_TAP_INTERNAL_KEY: &lt;internal key&gt;</p>
            <p className="text-dark-300">PSBT_IN_TAP_LEAF_SCRIPT: &lt;script, leaf version&gt;</p>
            <p className="text-dark-300">PSBT_IN_TAP_MERKLE_ROOT: &lt;tree root&gt;</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Signer produces leaf signature:</p>
            <p className="text-emerald-400">PSBT_IN_TAP_SCRIPT_SIG:</p>
            <p className="text-emerald-400 ml-4">key: &lt;xonly_pubkey || leaf_hash&gt;</p>
            <p className="text-emerald-400 ml-4">value: &lt;signature&gt;</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Final witness:</p>
            <p className="text-dark-300">&lt;signature(s)&gt; &lt;script&gt; &lt;control block&gt;</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP32 Derivation</h3>

      <p className="mb-4">
        Taproot uses a modified BIP32 derivation field format to support leaf hashes:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># PSBT_IN_TAP_BIP32_DERIVATION format:</p>
        <p className="text-dark-300">Key: &lt;xonly_pubkey&gt;</p>
        <p className="text-dark-300 mt-2">Value:</p>
        <p className="text-dark-500 ml-4">&lt;number of leaf hashes&gt;</p>
        <p className="text-dark-500 ml-4">&lt;leaf hash 1&gt; ... &lt;leaf hash n&gt;</p>
        <p className="text-dark-500 ml-4">&lt;fingerprint&gt;</p>
        <p className="text-dark-500 ml-4">&lt;derivation path&gt;</p>
      </div>

      <Callout type="warning" title="X-Only Public Keys">
        <p>
          Taproot uses x-only public keys (32 bytes) instead of compressed keys (33 bytes).
          The y-coordinate parity is implicitly even or determined during signing. BIP-371
          fields consistently use x-only format.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Script Tree Serialization</h3>

      <p className="mb-4">
        The <code className="text-amber-400">PSBT_OUT_TAP_TREE</code> field encodes the
        complete script tree:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-2">Tree serialization format:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Depth:</strong> 1 byte (0-128)</li>
          <li><strong>Leaf version:</strong> 1 byte</li>
          <li><strong>Script length:</strong> CompactSize</li>
          <li><strong>Script:</strong> Variable length</li>
        </ul>
        <p className="text-dark-500 text-sm mt-3">
          Repeated for each leaf in depth-first left-to-right order
        </p>
      </div>

      <Callout type="success" title="Hardware Wallet Support">
        <p>
          BIP-371 enables hardware wallets to safely sign Taproot transactions. The internal
          key and Merkle root allow devices to verify the output address matches expectations
          before signing.
        </p>
      </Callout>
    </LessonLayout>
  );
}
