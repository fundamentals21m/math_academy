import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Key Derivation for Taproot Addresses</h2>

      <p className="mb-4">
        BIP-86 defines the derivation path for Taproot (P2TR) single-key addresses. Building
        on the Taproot upgrade (BIP-341), it specifies how wallets should derive keys for the
        modern "bc1p..." address format using purpose 86'.
      </p>

      <Callout type="info" title="Taproot Era">
        <p>
          BIP-86 is the latest in the wallet standard progression: BIP-44 (legacy) → BIP-49
          (nested SegWit) → BIP-84 (native SegWit) → BIP-86 (Taproot). It represents the
          cutting edge of Bitcoin address technology.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Taproot Addresses?</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Taproot Benefits</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Schnorr signatures (64 bytes)</li>
            <li>Better privacy for complex scripts</li>
            <li>Key aggregation potential (MuSig2)</li>
            <li>Future script upgrade path</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">vs Native SegWit (BIP-84)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Slightly smaller signatures</li>
            <li>Script hiding capability</li>
            <li>Same fee efficiency for simple spends</li>
            <li>Uses bech32m (improved encoding)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Derivation Path</h3>

      <Definition title="BIP-86 Path">
        <div className="font-mono text-lg text-amber-400 mb-4">
          m / 86' / coin_type' / account' / change / address_index
        </div>
        <p className="text-dark-300">
          Follows the standard five-level structure with purpose 86' for Taproot addresses.
        </p>
      </Definition>

      <Example title="Path Progression">
        <div className="space-y-3 font-mono text-sm">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-44: Legacy P2PKH</p>
            <p className="text-dark-300">m/44'/0'/0'/0/0 → 1...</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-84: Native SegWit P2WPKH</p>
            <p className="text-dark-300">m/84'/0'/0'/0/0 → bc1q...</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-86: Taproot P2TR</p>
            <p className="text-amber-400">m/86'/0'/0'/0/0 → bc1p...</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Tweaking</h3>

      <p className="mb-4">
        Unlike P2WPKH, Taproot requires a key tweak even for simple single-key spends:
      </p>

      <Definition title="Taproot Output Key">
        <p>
          For a BIP-86 address with no script tree, the output key Q is derived from
          the internal key P:
        </p>
        <MathBlock>
          {`Q = P + H(P) \\cdot G`}
        </MathBlock>
        <p className="mt-2">
          Where <InlineMath>H(P)</InlineMath> is the tagged hash of P using "TapTweak".
          This proves no hidden scripts exist.
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">Address derivation steps:</p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Derive internal private key at m/86'/0'/account'/change/index</li>
          <li>Compute internal public key P (x-only, 32 bytes)</li>
          <li>Compute tweak t = tagged_hash("TapTweak", P)</li>
          <li>Compute output key Q = P + t·G (may require negation)</li>
          <li>Encode Q as bech32m with witness version 1</li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">X-Only Public Keys</h3>

      <p className="mb-4">
        BIP-86 uses 32-byte x-only public keys (BIP-340 format):
      </p>

      <Example title="X-Only Key Format">
        <div className="space-y-2 font-mono text-xs">
          <p className="text-dark-400"># Traditional compressed public key (33 bytes)</p>
          <p className="text-dark-300">02 79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798</p>

          <p className="text-dark-400 mt-3"># X-only public key (32 bytes)</p>
          <p className="text-amber-400">79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798</p>
        </div>
        <p className="text-dark-500 text-sm mt-3">
          The prefix byte is dropped; y-coordinate is implicitly even
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bech32m Encoding</h3>

      <p className="mb-4">
        BIP-86 addresses use bech32m (BIP-350), an improved version of bech32:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Address structure</p>
        <p className="text-dark-300">
          <span className="text-purple-400">bc</span>
          <span className="text-dark-500">1</span>
          <span className="text-amber-400">p</span>
          <span className="text-emerald-400">5d7rjq7g6...</span>
        </p>
        <div className="text-xs mt-3 space-y-1 text-dark-400">
          <p>• <span className="text-purple-400">bc</span> = mainnet HRP</p>
          <p>• <span className="text-dark-500">1</span> = separator</p>
          <p>• <span className="text-amber-400">p</span> = witness version 1</p>
          <p>• <span className="text-emerald-400">rest</span> = 32-byte x-only key + checksum</p>
        </div>
      </div>

      <Callout type="info" title="Why 'p' Not 'q'?">
        <p>
          In bech32, 'q' encodes 0 (witness v0 for SegWit) and 'p' encodes 1 (witness v1
          for Taproot). This is why SegWit addresses start "bc1q" and Taproot addresses
          start "bc1p".
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Spending from BIP-86</h3>

      <p className="mb-4">
        Key path spending requires computing the tweaked private key:
      </p>

      <MathBlock>
        {`d' = d + H(P) \\pmod{n}`}
      </MathBlock>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Transaction witness</p>
        <p className="text-amber-400">&lt;64-byte-schnorr-signature&gt;</p>
        <p className="text-xs text-dark-500 mt-3">
          That's it! Just one element—no pubkey needed (it's in the output)
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Extended Key Prefixes</h3>

      <Example title="BIP-86 Extended Key Versions">
        <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1">Mainnet private:</p>
            <p className="text-amber-400">xprv... (same as BIP-32)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1">Mainnet public:</p>
            <p className="text-emerald-400">xpub... (same as BIP-32)</p>
          </div>
        </div>
        <p className="text-dark-500 text-sm mt-3">
          BIP-86 uses standard xprv/xpub prefixes. The purpose path indicates Taproot use.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key-Path Only</h3>

      <Callout type="warning" title="No Script Tree">
        <p>
          BIP-86 specifically defines derivation for key-path-only Taproot outputs—no MAST
          script tree. For complex Taproot scripts (multisig, timelocks, etc.), output
          descriptors or custom derivation is required.
        </p>
      </Callout>

      <Callout type="success" title="The Future Standard">
        <p>
          BIP-86 represents the most advanced single-signature address format available.
          As wallet and exchange support expands, Taproot addresses will increasingly become
          the default, offering the best combination of privacy, efficiency, and future
          compatibility.
        </p>
      </Callout>
    </LessonLayout>
  );
}
