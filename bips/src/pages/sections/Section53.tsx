import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-173: Bech32 Addresses</h2>

      <p className="mb-4">
        BIP-173 introduced Bech32, a new address format for native SegWit outputs. These
        "bc1" addresses offer better error detection, are case-insensitive, and are more
        efficient in QR codes. Bech32 was a major improvement over Base58Check addresses.
      </p>

      <Callout type="info" title="Native SegWit Addresses">
        <p>
          Bech32 addresses are used for native SegWit (P2WPKH and P2WSH) outputs. They're
          the recommended format for new Bitcoin addresses and are supported by all
          major wallets.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why a New Format?</h3>

      <p className="mb-4">
        Base58Check addresses had significant drawbacks:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Base58Check Problems</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Mixed case (error-prone)</li>
            <li>Ambiguous characters (O/0, I/l)</li>
            <li>Double SHA256 checksum (slow)</li>
            <li>Complex to validate</li>
            <li>Inefficient in QR codes</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Bech32 Solutions</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Lowercase only</li>
            <li>No ambiguous characters</li>
            <li>BCH code checksum (fast)</li>
            <li>Error detection + localization</li>
            <li>Alphanumeric QR mode</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Structure</h3>

      <Definition title="Bech32 Address Format">
        <p>
          A Bech32 address consists of a human-readable part (HRP), a separator, and a
          data part containing the witness version and program.
        </p>
        <div className="font-mono text-sm text-amber-400 mt-3">
          bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
        </div>
        <div className="text-dark-500 text-xs mt-2">
          [bc] [1] [qar0srrr7xfkvy5l643lydnw9re59gtzz] [wf5mdq]
        </div>
        <div className="text-dark-500 text-xs">
          HRP | sep | data (witness version + program) | checksum
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Character Set</h3>

      <p className="mb-4">
        Bech32 uses a 32-character alphabet:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Bech32 alphabet (no 1, b, i, o):</p>
        <p className="text-amber-400">qpzry9x8gf2tvdw0s3jn54khce6mua7l</p>
        <p className="text-dark-500 mt-3">
          Characters chosen to avoid confusion and optimize error detection
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Human-Readable Part</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Network</th>
              <th className="text-left py-3 text-dark-300">HRP</th>
              <th className="text-left py-3 text-dark-300">Example Prefix</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Mainnet</td>
              <td className="font-mono text-amber-400">bc</td>
              <td className="font-mono">bc1q..., bc1p...</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Testnet</td>
              <td className="font-mono text-amber-400">tb</td>
              <td className="font-mono">tb1q..., tb1p...</td>
            </tr>
            <tr>
              <td className="py-3">Signet</td>
              <td className="font-mono text-amber-400">tb</td>
              <td className="font-mono">tb1q...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Witness Version</h3>

      <p className="mb-4">
        The first data character encodes the SegWit witness version:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <code className="text-amber-400">bc1q...</code> - Version 0 (q = 0), P2WPKH or P2WSH
          </li>
          <li>
            <code className="text-amber-400">bc1p...</code> - Version 1 (p = 1), Taproot (uses Bech32m)
          </li>
          <li>
            Versions 2-16 reserved for future upgrades
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Error Detection</h3>

      <Example title="BCH Code Properties">
        <div className="space-y-3 text-dark-300">
          <p>Bech32's BCH code checksum guarantees:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
            <li><strong>Detection:</strong> All errors affecting up to 4 characters</li>
            <li><strong>Localization:</strong> Can identify where errors occurred</li>
            <li><strong>Substitution:</strong> Any single character substitution detected</li>
            <li><strong>Adjacent swap:</strong> Any two adjacent characters swapped detected</li>
          </ul>
          <p className="text-dark-500 text-sm mt-3">
            Much stronger than Base58Check's simple checksum!
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Types</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">P2WPKH (42 characters)</p>
          <p className="text-sm text-dark-300 font-mono break-all">
            bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
          </p>
          <p className="text-dark-500 text-xs mt-2">
            20-byte witness program (pubkey hash)
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">P2WSH (62 characters)</p>
          <p className="text-sm text-dark-300 font-mono break-all">
            bc1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3qccfmv3
          </p>
          <p className="text-dark-500 text-xs mt-2">
            32-byte witness program (script hash)
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Encoding Process</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Encoding steps:</p>
        <p className="text-dark-300">1. Take witness version (0-16)</p>
        <p className="text-dark-300">2. Take witness program (20 or 32 bytes)</p>
        <p className="text-dark-300">3. Convert to 5-bit groups</p>
        <p className="text-dark-300">4. Compute BCH checksum over HRP + data</p>
        <p className="text-dark-300">5. Map to Bech32 alphabet</p>
        <p className="text-amber-400 mt-2">Result: bc1 + encoded_data + checksum</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">QR Code Efficiency</h3>

      <Callout type="info" title="Alphanumeric Mode">
        <p>
          Bech32 addresses (uppercase) can use QR code alphanumeric mode, which is more
          efficient than byte mode used for Base58:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>~20% smaller QR codes</li>
          <li>Better error correction at same size</li>
          <li>Easier scanning in poor conditions</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Case Insensitivity</h3>

      <p className="mb-4">
        Bech32 addresses can be written in lowercase or uppercase (but not mixed):
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-emerald-400 font-mono text-sm">
          ✓ bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
        </p>
        <p className="text-emerald-400 font-mono text-sm mt-2">
          ✓ BC1QAR0SRRR7XFKVY5L643LYDNW9RE59GTZZWF5MDQ
        </p>
        <p className="text-rose-400 font-mono text-sm mt-2">
          ✗ bc1QAR0srrr7XFKVY5l643lydNW9re59gtzzWF5MDQ
        </p>
      </div>

      <Callout type="success" title="Modern Standard">
        <p>
          Bech32 is now the recommended address format for Bitcoin. Its superior error
          detection, readability, and efficiency make it ideal for both human entry and
          QR code scanning. If you're generating new addresses, use Bech32 (or Bech32m
          for Taproot).
        </p>
      </Callout>
    </LessonLayout>
  );
}
