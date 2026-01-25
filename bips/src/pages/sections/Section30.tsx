import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Derivation Scheme for Native SegWit (P2WPKH)</h2>

      <p className="mb-4">
        BIP-84 defines the derivation path for native SegWit addresses—P2WPKH outputs encoded
        using bech32. These "bc1q..." addresses are the most efficient single-signature format,
        offering the lowest fees and best security for typical Bitcoin transactions.
      </p>

      <Callout type="info" title="The Modern Standard">
        <p>
          BIP-84 is the recommended format for single-signature wallets today. Native SegWit
          addresses are now universally supported and provide the best combination of efficiency,
          security, and error detection.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Native SegWit?</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Advantages</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Lowest transaction fees</li>
            <li>Bech32 error detection</li>
            <li>All lowercase (easier to type)</li>
            <li>No scriptSig overhead</li>
            <li>Simpler transaction structure</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">vs Nested SegWit (BIP-49)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>~25% smaller inputs</li>
            <li>No P2SH wrapping needed</li>
            <li>Cleaner UTXO set</li>
            <li>Better long-term standard</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Derivation Path</h3>

      <Definition title="BIP-84 Path">
        <div className="font-mono text-lg text-amber-400 mb-4">
          m / 84' / coin_type' / account' / change / address_index
        </div>
        <p className="text-dark-300">
          Same five-level structure as BIP-44/49, with purpose 84' indicating native
          P2WPKH addresses.
        </p>
      </Definition>

      <Example title="Path Comparison">
        <div className="space-y-3 font-mono text-sm">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-44: Legacy (1...)</p>
            <p className="text-dark-300">m/44'/0'/0'/0/0</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-49: Nested SegWit (3...)</p>
            <p className="text-dark-300">m/49'/0'/0'/0/0</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-84: Native SegWit (bc1q...)</p>
            <p className="text-amber-400">m/84'/0'/0'/0/0</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Generation</h3>

      <p className="mb-4">
        Native SegWit addresses are simpler to construct than nested ones:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Derive the private key at m/84'/0'/account'/change/index</li>
          <li>Compute the compressed public key</li>
          <li>Compute HASH160 of the public key (20 bytes)</li>
          <li>Encode using bech32 with HRP "bc" and witness version 0</li>
        </ol>
      </div>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># scriptPubKey structure</p>
        <p className="text-amber-400">OP_0 &lt;20-byte-keyhash&gt;</p>
        <p className="text-xs text-dark-500 mt-3">
          Witness version 0 + 20 bytes = P2WPKH
        </p>
      </div>

      <Example title="Address Derivation Example">
        <div className="space-y-2 font-mono text-xs break-all">
          <p className="text-dark-400"># Public key (compressed)</p>
          <p className="text-dark-300">0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798</p>

          <p className="text-dark-400 mt-2"># Key hash (HASH160)</p>
          <p className="text-dark-300">751e76e8199196d454941c45d1b3a323f1433bd6</p>

          <p className="text-dark-400 mt-2"># Bech32 address</p>
          <p className="text-amber-400">bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bech32 Encoding</h3>

      <p className="mb-4">
        BIP-84 addresses use bech32 encoding (defined in BIP-173):
      </p>

      <Definition title="Bech32 Components">
        <div className="space-y-2">
          <p><span className="text-amber-400 font-mono">bc</span> — Human-readable part (HRP) for mainnet</p>
          <p><span className="text-amber-400 font-mono">1</span> — Separator</p>
          <p><span className="text-amber-400 font-mono">q...</span> — Data part (witness version + keyhash)</p>
          <p><span className="text-amber-400 font-mono">...t4</span> — 6-character checksum</p>
        </div>
        <p className="text-dark-500 text-sm mt-3">
          The "q" encodes witness version 0. Testnet uses "tb" as HRP.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Spending from P2WPKH</h3>

      <p className="mb-4">
        Native SegWit spending is elegant—no scriptSig needed:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Transaction input</p>
        <p className="text-dark-300">scriptSig: <span className="text-emerald-400">(empty)</span></p>

        <p className="text-dark-400 mt-3 mb-2"># Witness</p>
        <p className="text-amber-400">&lt;signature&gt; &lt;pubkey&gt;</p>

        <p className="text-xs text-dark-500 mt-3">
          Witness data is discounted at 1/4 weight, reducing fees
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Size Comparison</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Component</th>
              <th className="text-left py-3 text-dark-300">P2PKH</th>
              <th className="text-left py-3 text-dark-300">P2SH-P2WPKH</th>
              <th className="text-left py-3 text-dark-300">P2WPKH</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">scriptPubKey</td>
              <td>25 bytes</td>
              <td>23 bytes</td>
              <td className="text-emerald-400">22 bytes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">scriptSig</td>
              <td>~107 bytes</td>
              <td>23 bytes</td>
              <td className="text-emerald-400">0 bytes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Witness</td>
              <td>—</td>
              <td>~107 bytes</td>
              <td>~107 bytes</td>
            </tr>
            <tr>
              <td className="py-3 font-bold">Input vBytes</td>
              <td>~148</td>
              <td>~91</td>
              <td className="text-emerald-400">~68</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Extended Public Keys</h3>

      <p className="mb-4">
        BIP-84 introduces new version bytes for extended keys:
      </p>

      <Example title="BIP-84 Extended Key Prefixes">
        <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1">Mainnet private:</p>
            <p className="text-amber-400">zprv... (0x04b2430c)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1">Mainnet public:</p>
            <p className="text-emerald-400">zpub... (0x04b24746)</p>
          </div>
        </div>
        <p className="text-dark-500 text-sm mt-3">
          The "z" prefix distinguishes from xpub (BIP-44) and ypub (BIP-49)
        </p>
      </Example>

      <Callout type="success" title="Default Choice">
        <p>
          For most users, BIP-84 is the best choice today. It provides the optimal balance
          of efficiency, compatibility, and simplicity. Taproot (BIP-86) offers additional
          benefits but requires wallet support for the newer address format.
        </p>
      </Callout>
    </LessonLayout>
  );
}
