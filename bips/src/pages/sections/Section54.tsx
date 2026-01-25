import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-350: Bech32m</h2>

      <p className="mb-4">
        BIP-350 introduces Bech32m, a modified version of Bech32 that fixes a subtle flaw
        discovered after Bech32's deployment. Bech32m is required for SegWit version 1+
        addresses (Taproot) while Bech32 remains for version 0.
      </p>

      <Callout type="info" title="Taproot Addresses">
        <p>
          All "bc1p" Taproot addresses use Bech32m encoding. If you see "bc1p...", it's
          Bech32m. If you see "bc1q...", it's original Bech32.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Bech32 Flaw</h3>

      <p className="mb-4">
        Researchers discovered a weakness in Bech32's error detection:
      </p>

      <Definition title="The Length Extension Attack">
        <p>
          Inserting or removing "q" characters at the end of a Bech32 string might not
          be detected by the checksum. While "q" = 0 in Bech32, appending zeros can
          create valid-seeming addresses.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># The vulnerability:</p>
        <p className="text-dark-300">bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4</p>
        <p className="text-dark-400 mt-2 mb-2"># Adding 'q' before last 6 chars can be undetected:</p>
        <p className="text-rose-400">bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kqv8f3t4</p>
        <p className="text-dark-500 mt-3">
          Both might pass checksum validation (invalid addresses, but accepted)!
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Impact Assessment</h3>

      <p className="mb-4">
        For SegWit v0, this flaw has limited practical impact:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>P2WPKH:</strong> Fixed 20-byte program; wrong length rejected at consensus level
          </li>
          <li>
            <strong>P2WSH:</strong> Fixed 32-byte program; same protection
          </li>
          <li>
            <strong>Future versions:</strong> Might allow variable-length programs—serious risk!
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Bech32m Fix</h3>

      <p className="mb-4">
        Bech32m uses a different checksum constant:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Checksum constant difference:</p>
        <p className="text-dark-300">Bech32:  constant = 1</p>
        <p className="text-amber-400">Bech32m: constant = 0x2bc830a3</p>
        <p className="text-dark-500 mt-3">
          Everything else identical—same encoding, same alphabet, same structure
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Version Rules</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Witness Version</th>
              <th className="text-left py-3 text-dark-300">Encoding</th>
              <th className="text-left py-3 text-dark-300">Address Prefix</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Version 0</td>
              <td className="font-mono">Bech32</td>
              <td className="font-mono text-amber-400">bc1q...</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Version 1 (Taproot)</td>
              <td className="font-mono">Bech32m</td>
              <td className="font-mono text-amber-400">bc1p...</td>
            </tr>
            <tr>
              <td className="py-3">Versions 2-16</td>
              <td className="font-mono">Bech32m</td>
              <td className="font-mono">bc1{'{'}r-0{'}'}...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Wallet Implementation</h3>

      <Example title="Encoding/Decoding Logic">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Encoding:</p>
            <p className="text-dark-300">if witness_version == 0:</p>
            <p className="text-dark-500 ml-4">use Bech32 (constant = 1)</p>
            <p className="text-dark-300">else:</p>
            <p className="text-dark-500 ml-4">use Bech32m (constant = 0x2bc830a3)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Decoding:</p>
            <p className="text-dark-300">decode with Bech32m constant</p>
            <p className="text-dark-300">if checksum invalid and version == 0:</p>
            <p className="text-dark-500 ml-4">retry with Bech32 constant</p>
            <p className="text-dark-300">if checksum invalid and version != 0:</p>
            <p className="text-rose-400 ml-4">reject (must be Bech32m)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Not Update v0?</h3>

      <Callout type="warning" title="Backward Compatibility">
        <p>
          Changing v0 addresses to Bech32m would break:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>All existing SegWit addresses in circulation</li>
          <li>Paper wallets and backup materials</li>
          <li>Every wallet's address generation code</li>
          <li>Payment infrastructure expecting Bech32</li>
        </ul>
        <p className="mt-2">
          Since v0 has fixed-length constraints, the flaw isn't practically exploitable.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Comparison</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Bech32 (SegWit v0)</p>
          <p className="text-sm text-dark-300 font-mono break-all">
            bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4
          </p>
          <p className="text-dark-500 text-xs mt-2">
            P2WPKH - 42 characters, starts with bc1q
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Bech32m (Taproot v1)</p>
          <p className="text-sm text-dark-300 font-mono break-all">
            bc1p0xlxvlhemja6c4dqv22uapctqupfhlxm9h8z3k2e72q4k9hcz7vqzk5jj0
          </p>
          <p className="text-dark-500 text-xs mt-2">
            P2TR - 62 characters, starts with bc1p
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Checksum Mathematics</h3>

      <p className="mb-4">
        The new constant was carefully chosen:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>0x2bc830a3</strong> eliminates the length extension weakness
          </li>
          <li>
            Maintains all other error detection properties
          </li>
          <li>
            Ensures Bech32 and Bech32m addresses are always distinguishable
          </li>
          <li>
            A v0 address decoded as Bech32m will fail checksum (and vice versa)
          </li>
        </ul>
      </div>

      <Callout type="success" title="Forward-Looking Design">
        <p>
          Bech32m ensures all future SegWit versions (v2-v16) will have robust error
          detection regardless of program length. This proactive fix exemplifies careful
          protocol evolution—addressing theoretical concerns before they become practical
          vulnerabilities.
        </p>
      </Callout>
    </LessonLayout>
  );
}
