import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Structure for Multisignature HD Wallets</h2>

      <p className="mb-4">
        BIP-45 defines a derivation path structure for HD wallets used in multi-party
        multisig setups. It enables multiple cosigners to share extended public keys and
        collaboratively generate addresses without exposing private keys.
      </p>

      <Callout type="info" title="Cosigner Coordination">
        <p>
          BIP-45 addresses a key challenge: how do multiple parties agree on which addresses
          to use? By defining a standard structure and sorting rule, all cosigners can
          independently derive the same addresses.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Multisig Challenge</h3>

      <p className="mb-4">
        Multi-party multisig introduces unique coordination problems:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Each party has their own HD wallet with different keys</li>
          <li>Addresses require public keys from all parties</li>
          <li>Keys must be combined in a consistent order</li>
          <li>New addresses must be derivable by all parties independently</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-45 Path Structure</h3>

      <Definition title="BIP-45 Derivation Path">
        <div className="font-mono text-lg text-amber-400 mb-4">
          m / purpose' / cosigner_index / change / address_index
        </div>
        <div className="space-y-2 text-dark-300">
          <p><span className="text-amber-400 font-mono">purpose'</span> — Always 45'</p>
          <p><span className="text-amber-400 font-mono">cosigner_index</span> — Position of this cosigner (sorted)</p>
          <p><span className="text-amber-400 font-mono">change</span> — 0 for external, 1 for internal</p>
          <p><span className="text-amber-400 font-mono">address_index</span> — Sequential address number</p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Cosigner Index</h3>

      <p className="mb-4">
        Each cosigner's position is determined by sorting extended public keys lexicographically:
      </p>

      <Example title="Cosigner Ordering">
        <div className="space-y-3">
          <p className="text-dark-400">For a 2-of-3 multisig with xpubs A, B, C:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-400 mb-1"># After lexicographic sorting:</p>
            <p className="text-dark-300">xpub_A: <span className="text-amber-400">cosigner_index = 0</span></p>
            <p className="text-dark-300">xpub_B: <span className="text-amber-400">cosigner_index = 1</span></p>
            <p className="text-dark-300">xpub_C: <span className="text-amber-400">cosigner_index = 2</span></p>
          </div>
          <p className="text-dark-500 text-sm">
            All parties sort the same way → same indices → same addresses
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Exchange Process</h3>

      <p className="mb-4">
        Setting up a BIP-45 multisig wallet involves these steps:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            Each cosigner generates their own BIP-32 seed and derives:<br/>
            <span className="font-mono text-amber-400 ml-6">m/45'</span> (the purpose-level key)
          </li>
          <li>
            Each cosigner exports their extended public key at m/45'
          </li>
          <li>
            All cosigners exchange their xpubs securely
          </li>
          <li>
            Each cosigner stores all xpubs and sorts them lexicographically
          </li>
          <li>
            Addresses are generated using keys from all xpubs at matching indices
          </li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Generation</h3>

      <p className="mb-4">
        To generate a multisig address at index N:
      </p>

      <Example title="Deriving a 2-of-3 Address">
        <div className="space-y-3 font-mono text-xs">
          <p className="text-dark-400"># For address index 0, external chain:</p>
          <div className="space-y-1 text-dark-300">
            <p>Cosigner 0: m/45'/0/0/0 → pubkey_0</p>
            <p>Cosigner 1: m/45'/1/0/0 → pubkey_1</p>
            <p>Cosigner 2: m/45'/2/0/0 → pubkey_2</p>
          </div>
          <p className="text-dark-400 mt-2"># Create multisig script:</p>
          <p className="text-amber-400">OP_2 &lt;pubkey_0&gt; &lt;pubkey_1&gt; &lt;pubkey_2&gt; OP_3 OP_CHECKMULTISIG</p>
          <p className="text-dark-400 mt-2"># P2SH address:</p>
          <p className="text-emerald-400">3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Non-Hardened Derivation?</h3>

      <p className="mb-4">
        Unlike BIP-44, BIP-45 uses non-hardened derivation for cosigner branches:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">✓ Benefits</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Watch-only wallets possible</li>
            <li>Each party shares only xpub</li>
            <li>Can verify addresses without private keys</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">⚠ Trade-offs</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Weaker key isolation</li>
            <li>Leaked child key + xpub = compromised branch</li>
            <li>More trust in cosigner security</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Limitations</h3>

      <Callout type="warning" title="Practical Limitations">
        <p>
          BIP-45 has seen limited adoption due to several challenges:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Only supports P2SH multisig (no native SegWit)</li>
          <li>No standard for different script types (P2WSH, etc.)</li>
          <li>Key sorting can be confusing for implementation</li>
          <li>BIP-48 and output descriptors are often preferred today</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Alternatives</h3>

      <p className="mb-4">
        More recent standards have addressed BIP-45's limitations:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">BIP-48</p>
          <p className="text-sm text-dark-300">
            Extends the concept with a script_type field, supporting P2SH-P2WSH, P2WSH,
            and other script types.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Output Descriptors (BIP-380+)</p>
          <p className="text-sm text-dark-300">
            A more flexible approach that describes complete spending conditions,
            including multisig with arbitrary derivation paths.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">BIP-129 (BSMS)</p>
          <p className="text-sm text-dark-300">
            Bitcoin Secure Multisig Setup—a complete protocol for coordinating
            multisig wallet creation across devices.
          </p>
        </div>
      </div>

      <Callout type="success" title="Historical Significance">
        <p>
          While BIP-45 isn't the dominant multisig standard today, it established important
          principles: deterministic sorting for consistent address generation, separation
          of cosigner branches, and watch-only capability for multi-party setups. These
          concepts carry forward into modern multisig tools.
        </p>
      </Callout>
    </LessonLayout>
  );
}
