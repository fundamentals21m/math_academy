import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Hierarchical Deterministic Wallets</h2>

      <p className="mb-4">
        BIP-32 defines <strong>Hierarchical Deterministic (HD) wallets</strong>—a system for
        deriving an entire tree of key pairs from a single seed. This foundational BIP enables
        wallet backup with just one secret, organized key management, and privacy-preserving
        address generation.
      </p>

      <Callout type="info" title="The Foundation">
        <p>
          BIP-32 is perhaps the most influential wallet BIP. Published in 2012 by Pieter Wuille,
          it forms the basis for BIP-39 (mnemonics), BIP-44 (account structure), and virtually
          every modern Bitcoin wallet.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Before HD wallets, each address required a separate private key:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Non-Deterministic Wallets</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Each key generated independently</li>
            <li>Must backup after every new address</li>
            <li>Key pool exhaustion risk</li>
            <li>No way to regenerate keys</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">HD Wallets (BIP-32)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>All keys derived from one seed</li>
            <li>Backup once, recover everything</li>
            <li>Unlimited addresses from one secret</li>
            <li>Deterministic regeneration</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Extended Keys</h3>

      <p className="mb-4">
        BIP-32 introduces <strong>extended keys</strong>—key pairs augmented with a chain code
        that enables child derivation:
      </p>

      <Definition title="Extended Key">
        <p>
          An extended key consists of two 256-bit values:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Key data:</strong> Private key (xprv) or public key (xpub)</li>
          <li><strong>Chain code:</strong> Additional entropy for derivation</li>
        </ul>
        <p className="mt-2">
          Together, these allow deterministic derivation of child keys at any depth.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Extended key structure (512 bits)</p>
        <p className="text-dark-300">
          [<span className="text-amber-400">key: 256 bits</span>] [<span className="text-emerald-400">chain code: 256 bits</span>]
        </p>
        <p className="text-xs text-dark-500 mt-3">
          Serialized with version bytes, depth, parent fingerprint, child index
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Derivation</h3>

      <p className="mb-4">
        Child keys are derived using HMAC-SHA512:
      </p>

      <MathBlock>
        {`I = \\text{HMAC-SHA512}(\\text{chain\\_code}, \\text{data})`}
      </MathBlock>

      <p className="mb-4 text-dark-400">
        Where <InlineMath>I_L</InlineMath> (left 256 bits) modifies the key and <InlineMath>I_R</InlineMath> (right 256 bits) becomes the new chain code.
      </p>

      <Definition title="Child Key Derivation Function (CKD)">
        <p>For private parent key <InlineMath>k_{par}</InlineMath> and index <InlineMath>i</InlineMath>:</p>
        <MathBlock>
          {`k_i = k_{par} + I_L \\pmod{n}`}
        </MathBlock>
        <p className="mt-2">
          For public derivation, <InlineMath>K_i = K_{par} + I_L \\cdot G</InlineMath>
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Normal vs Hardened Derivation</h3>

      <p className="mb-4">
        BIP-32 defines two derivation types with different security properties:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-blue-500/30">
          <p className="text-blue-400 font-bold mb-2">Normal (Non-Hardened)</p>
          <p className="text-sm text-dark-300 mb-2">Index: 0 to 2³¹-1</p>
          <ul className="text-sm text-dark-400 space-y-1">
            <li>• Uses public key in HMAC</li>
            <li>• Enables watch-only wallets</li>
            <li>• Risk: leaked child key + xpub = parent key</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-purple-500/30">
          <p className="text-purple-400 font-bold mb-2">Hardened</p>
          <p className="text-sm text-dark-300 mb-2">Index: 2³¹ to 2³²-1 (shown as 0' to 2³¹-1')</p>
          <ul className="text-sm text-dark-400 space-y-1">
            <li>• Uses private key in HMAC</li>
            <li>• No public derivation possible</li>
            <li>• Stronger security isolation</li>
          </ul>
        </div>
      </div>

      <Callout type="warning" title="Security Consideration">
        <p>
          If an attacker obtains both an extended public key (xpub) AND any non-hardened
          child private key, they can compute the parent private key. This is why account-level
          derivation uses hardened indices.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Derivation Paths</h3>

      <p className="mb-4">
        Keys are identified by their path from the master key:
      </p>

      <Example title="Path Notation">
        <div className="space-y-3">
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-sm">
            <p className="text-amber-400">m / purpose' / coin_type' / account' / change / index</p>
          </div>
          <ul className="text-dark-300 space-y-1 ml-4">
            <li><span className="text-amber-400 font-mono">m</span> — Master key (from seed)</li>
            <li><span className="text-amber-400 font-mono">/</span> — Derivation step</li>
            <li><span className="text-amber-400 font-mono">'</span> — Hardened derivation</li>
            <li><span className="text-amber-400 font-mono">44'/0'/0'/0/0</span> — First Bitcoin address (BIP-44)</li>
          </ul>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Serialization Format</h3>

      <p className="mb-4">
        Extended keys are serialized as Base58Check strings:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-xs mb-6">
        <p className="text-dark-400 mb-2"># Extended key serialization (78 bytes)</p>
        <div className="space-y-1 text-dark-300">
          <p>[<span className="text-purple-400">version: 4 bytes</span>] — xprv/xpub identifier</p>
          <p>[<span className="text-amber-400">depth: 1 byte</span>] — How many derivations from master</p>
          <p>[<span className="text-amber-400">fingerprint: 4 bytes</span>] — First 4 bytes of parent's hash160</p>
          <p>[<span className="text-amber-400">child index: 4 bytes</span>] — Which child this is</p>
          <p>[<span className="text-emerald-400">chain code: 32 bytes</span>]</p>
          <p>[<span className="text-emerald-400">key: 33 bytes</span>] — Compressed (public) or 0x00 + private</p>
        </div>
      </div>

      <Example title="Extended Key Example">
        <div className="space-y-2 font-mono text-xs break-all">
          <p className="text-dark-400"># Extended private key (mainnet)</p>
          <p className="text-amber-400">
            xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi
          </p>
          <p className="text-dark-400 mt-2"># Corresponding extended public key</p>
          <p className="text-emerald-400">
            xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Master Key Generation</h3>

      <p className="mb-4">
        The master extended key is generated from a seed (typically from BIP-39):
      </p>

      <MathBlock>
        {`I = \\text{HMAC-SHA512}(\\text{\"Bitcoin seed\"}, \\text{seed})`}
      </MathBlock>

      <p className="text-dark-400 mb-6">
        <InlineMath>I_L</InlineMath> becomes the master private key, <InlineMath>I_R</InlineMath> becomes the master chain code.
      </p>

      <Callout type="success" title="Universal Compatibility">
        <p>
          BIP-32 is implemented by virtually every Bitcoin wallet. Extended keys enable powerful
          features like watch-only wallets (xpub only), hardware wallet integration, and
          multi-party setups where each party knows only their branch of the tree.
        </p>
      </Callout>
    </LessonLayout>
  );
}
