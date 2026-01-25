import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Address Format for Pay-to-Script-Hash</h2>

      <p className="mb-4">
        BIP-13 defines the address format for P2SH outputs—the familiar "3..." addresses.
        This simple BIP established the encoding scheme that allowed users to send to
        script hash addresses without understanding the underlying scripts.
      </p>

      <Callout type="info" title="Companion to BIP-16">
        <p>
          BIP-13 defines the address format while BIP-16 defines the script semantics.
          Together they enabled P2SH, which was revolutionary for making complex scripts
          user-friendly.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Before P2SH, users sending to complex scripts faced challenges:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Senders needed to understand the script being paid to</li>
          <li>Wallets had to encode arbitrary scripts—no standard format</li>
          <li>Users couldn't easily verify they were paying to the right script</li>
          <li>Complex scripts created large, expensive outputs</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Solution</h3>

      <Definition title="P2SH Address Format">
        <p>
          P2SH addresses encode the hash of a script, not the script itself.
          Senders pay to the hash; the recipient reveals the script when spending.
        </p>
        <div className="font-mono text-lg text-amber-400 mt-3">
          Base58Check(0x05 || HASH160(script))
        </div>
        <p className="text-dark-500 text-sm mt-2">
          Version byte 0x05 produces addresses starting with "3"
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Encoding</h3>

      <p className="mb-4">
        P2SH addresses use Base58Check encoding like P2PKH, but with a different version:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Type</th>
              <th className="text-left py-3 text-dark-300">Version</th>
              <th className="text-left py-3 text-dark-300">Prefix</th>
              <th className="text-left py-3 text-dark-300">Example</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">P2PKH (mainnet)</td>
              <td className="font-mono">0x00</td>
              <td>1</td>
              <td className="font-mono text-xs">1A1zP1eP5QGefi2...</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">P2SH (mainnet)</td>
              <td className="font-mono text-amber-400">0x05</td>
              <td className="text-amber-400">3</td>
              <td className="font-mono text-xs">3J98t1WpEZ73CNm...</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">P2PKH (testnet)</td>
              <td className="font-mono">0x6F</td>
              <td>m/n</td>
              <td className="font-mono text-xs">mipcBbFg9gMiCh8...</td>
            </tr>
            <tr>
              <td className="py-3">P2SH (testnet)</td>
              <td className="font-mono">0xC4</td>
              <td>2</td>
              <td className="font-mono text-xs">2MzQwSSnBHWHqSA...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Generation</h3>

      <Example title="Creating a P2SH Address">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># 1. Define the redeemScript:</p>
            <p className="text-dark-300">OP_2 &lt;pk1&gt; &lt;pk2&gt; &lt;pk3&gt; OP_3 OP_CHECKMULTISIG</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># 2. Hash the script:</p>
            <p className="text-dark-300">scriptHash = HASH160(redeemScript)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># 3. Add version and checksum:</p>
            <p className="text-dark-300">payload = 0x05 || scriptHash</p>
            <p className="text-dark-300">checksum = SHA256(SHA256(payload))[0:4]</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># 4. Base58 encode:</p>
            <p className="text-amber-400">address = Base58(payload || checksum)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">User Experience</h3>

      <p className="mb-4">
        P2SH addresses dramatically simplified payments to complex scripts:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Before P2SH</p>
          <p className="text-sm text-dark-300">
            "Please pay to this multisig script: OP_2 &lt;33-byte-key&gt; &lt;33-byte-key&gt;
            &lt;33-byte-key&gt; OP_3 OP_CHECKMULTISIG"
          </p>
          <p className="text-rose-400 text-xs mt-2">Confusing and error-prone</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">With P2SH</p>
          <p className="text-sm text-dark-300">
            "Please pay to: 3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"
          </p>
          <p className="text-emerald-400 text-xs mt-2">Simple and familiar</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Benefits</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Sender Simplicity</p>
          <p className="text-sm text-dark-300">
            Anyone can pay to a P2SH address using standard wallet software. The complexity
            is hidden from the sender.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Fixed Output Size</p>
          <p className="text-sm text-dark-300">
            All P2SH outputs are 23 bytes, regardless of script complexity. The sender
            pays a consistent fee.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Recipient Pays</p>
          <p className="text-sm text-dark-300">
            The actual script is revealed when spending. Complex scripts cost the recipient,
            not the sender.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Validation</h3>

      <p className="mb-4">
        Wallets validate P2SH addresses before sending:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Base58 decode the address</li>
          <li>Verify version byte is 0x05 (mainnet) or 0xC4 (testnet)</li>
          <li>Verify checksum matches payload</li>
          <li>Extract 20-byte script hash</li>
          <li>Create scriptPubKey: <code className="text-amber-400">OP_HASH160 &lt;hash&gt; OP_EQUAL</code></li>
        </ol>
      </div>

      <Callout type="warning" title="P2SH vs Nested SegWit">
        <p>
          Both P2SH multisig and P2SH-wrapped SegWit (BIP-49) produce "3..." addresses!
          From the address alone, you can't tell which type of script is inside. The
          recipient must know which script to provide when spending.
        </p>
      </Callout>

      <Callout type="success" title="Enabling Innovation">
        <p>
          BIP-13's simple address format enabled P2SH to become wildly successful. By
          making complex scripts as easy to pay as simple addresses, it unlocked multisig
          adoption, time-locked contracts, and eventually nested SegWit.
        </p>
      </Callout>
    </LessonLayout>
  );
}
