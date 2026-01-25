import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">A Modern Scripting Language</h2>

      <p className="mb-4">
        BIP-342 defines <strong>Tapscript</strong>—the scripting rules for Taproot's script
        path spending. Tapscript updates Bitcoin Script with new opcodes, improved signature
        semantics, and hooks for future upgrades, while maintaining backward compatibility.
      </p>

      <Callout type="info" title="Part of Taproot">
        <p>
          BIP-342 activated with Taproot in November 2021. Tapscript applies only to scripts
          executed via the Taproot script path. Legacy scripts and SegWit v0 scripts are
          unaffected.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Tapscript?</h3>

      <p className="mb-4">
        Original Bitcoin Script has accumulated technical debt. Tapscript provides a clean
        break:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Legacy Script Issues</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>CHECKMULTISIG dummy bug</li>
            <li>ECDSA malleability vectors</li>
            <li>Disabled opcodes (wasted space)</li>
            <li>No clean upgrade path</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Tapscript Solutions</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>New signature opcode (no dummy)</li>
            <li>Schnorr signatures only</li>
            <li>Unknown opcodes = OP_SUCCESS</li>
            <li>Versioned leaf types</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Changes from Legacy</h3>

      <div className="space-y-4 mb-6">
        <Definition title="Schnorr-Only Signatures">
          <p>
            OP_CHECKSIG and OP_CHECKSIGVERIFY in Tapscript use 64-byte Schnorr signatures
            (BIP-340). ECDSA is not supported. This provides consistency and enables batch
            verification.
          </p>
        </Definition>

        <Definition title="OP_CHECKSIGADD">
          <p>
            A new opcode replacing OP_CHECKMULTISIG. Instead of checking multiple signatures
            at once with a dummy element, signatures are verified individually and a counter
            is incremented. Cleaner, more flexible, no dummy bug.
          </p>
        </Definition>

        <Definition title="OP_SUCCESS">
          <p>
            Previously disabled/invalid opcodes (OP_RESERVED, etc.) become "OP_SUCCESS"—they
            cause the script to immediately succeed. This allows future soft forks to give
            them new meanings without breaking old scripts.
          </p>
        </Definition>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">OP_CHECKSIGADD</h3>

      <p className="mb-4">
        The replacement for OP_CHECKMULTISIG works incrementally:
      </p>

      <Example title="Threshold Signatures with CHECKSIGADD">
        <div className="space-y-4">
          <p className="text-dark-300 mb-2">2-of-3 multisig in Tapscript:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <p className="text-dark-400 mb-2"># Script</p>
            <p className="text-amber-400">
              &lt;pk1&gt; CHECKSIG &lt;pk2&gt; CHECKSIGADD &lt;pk3&gt; CHECKSIGADD 2 EQUAL
            </p>
            <p className="text-dark-400 mt-3 mb-2"># Witness (for signing with pk1 and pk3)</p>
            <p className="text-emerald-400">
              &lt;sig3&gt; &lt;sig1&gt; &lt;&gt;
            </p>
          </div>
          <div className="text-dark-500 text-sm mt-2">
            <p>Stack evolution:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Check sig1 vs pk1 → push 1 (valid)</li>
              <li>CHECKSIGADD: check sig (empty) vs pk2, add to counter → 1 + 0 = 1</li>
              <li>CHECKSIGADD: check sig3 vs pk3, add → 1 + 1 = 2</li>
              <li>2 EQUAL → success</li>
            </ol>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signature Hash Improvements</h3>

      <p className="mb-4">
        BIP-342 extends the BIP-341 sighash to include additional commitments:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-xs mb-6">
        <p className="text-dark-400 mb-2"># Tapscript sighash additions</p>
        <ul className="space-y-1 text-dark-300">
          <li>• tapleaf_hash (commits to the script being executed)</li>
          <li>• key_version (0x00 for current BIP-342)</li>
          <li>• codeseparator_position (if OP_CODESEPARATOR used)</li>
        </ul>
        <p className="text-dark-500 mt-3">
          These prevent signatures from being valid in different script contexts.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Resource Limits</h3>

      <p className="mb-4">
        Tapscript updates script limits for the witness discount era:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Limit</th>
              <th className="text-left py-3 text-dark-300">Legacy</th>
              <th className="text-left py-3 text-dark-300">Tapscript</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Script size</td>
              <td>10,000 bytes</td>
              <td className="text-emerald-400">No limit*</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Stack elements</td>
              <td>1,000</td>
              <td className="text-emerald-400">1,000</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Element size</td>
              <td>520 bytes</td>
              <td className="text-emerald-400">520 bytes</td>
            </tr>
            <tr>
              <td className="py-3">Signature ops</td>
              <td>Complex formula</td>
              <td className="text-emerald-400">Per-byte budget</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-dark-500 text-sm mb-6">
        * Script size is limited by the overall block weight, not a fixed byte limit
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signature Operation Budget</h3>

      <Definition title="SigOps Budget">
        <p>
          Each Tapscript starts with a signature operation budget of 50 + (witness size / 50).
          Each CHECKSIG* consumes 1 sigop (or 0 if the signature is empty). This replaces
          legacy's complex sigop counting with a simpler, more predictable system.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Future Upgrades: OP_SUCCESS</h3>

      <Callout type="success" title="Soft Fork Ready">
        <p>
          The OP_SUCCESS mechanism is clever: any currently-undefined opcode causes immediate
          success. This means a future soft fork can give that opcode real semantics—old nodes
          will still see the script as valid (it succeeds), while new nodes enforce the new rules.
        </p>
      </Callout>

      <Example title="Example Future Opcode">
        <div className="space-y-3 text-dark-300">
          <p>Suppose we want to add OP_CTV (covenant opcode):</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Today: OP_NOP4 is OP_SUCCESS in Tapscript → script succeeds</li>
            <li>Soft fork: Redefine OP_NOP4 as OP_CTV with covenant rules</li>
            <li>Old nodes: Still see OP_SUCCESS → valid</li>
            <li>New nodes: Enforce covenant semantics</li>
          </ol>
          <p className="text-amber-400 mt-2">
            Clean upgrade path without breaking existing scripts!
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Leaf Versions</h3>

      <p className="mb-4">
        The control block includes a leaf version, allowing different script semantics:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Current leaf versions</p>
        <p className="text-amber-400">0xc0 (even) / 0xc1 (odd parity): Tapscript (BIP-342)</p>
        <p className="text-dark-500">Other versions: OP_SUCCESS (reserved for future)</p>
      </div>

      <p className="text-dark-400 mb-6">
        Future soft forks could define new leaf versions with entirely different scripting
        rules (e.g., Simplicity, CAT+, etc.) while keeping Tapscript unchanged.
      </p>

      <Callout type="note" title="Completing the Trilogy">
        <p>
          BIP-340 (Schnorr), BIP-341 (Taproot), and BIP-342 (Tapscript) form a cohesive upgrade.
          Schnorr provides the signature scheme, Taproot the output structure, and Tapscript
          the execution rules. Together, they represent the most significant advancement in
          Bitcoin scripting since P2SH.
        </p>
      </Callout>
    </LessonLayout>
  );
}
