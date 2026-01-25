import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Passphrase-Protected Private Keys</h2>

      <p className="mb-4">
        BIP-38 defines a method for encrypting private keys with a passphrase. This allows
        private keys to be safely stored on paper or other media, protected by a password
        that must be provided to decrypt and use the key.
      </p>

      <Callout type="info" title="Physical Backup Security">
        <p>
          BIP-38 was designed for "paper wallet" use cases—printing a private key that can
          be stored physically but remains useless without the passphrase. Even if the paper
          is compromised, funds are safe.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why BIP-38?</h3>

      <p className="mb-4">
        Raw private keys are dangerous to store or transmit:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Raw WIF Keys</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Instantly spendable by anyone</li>
            <li>No protection if discovered</li>
            <li>Physical storage risky</li>
            <li>Easy to photograph/copy</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">BIP-38 Encrypted Keys</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Requires passphrase to spend</li>
            <li>Safe even if key is exposed</li>
            <li>Suitable for physical backup</li>
            <li>Two-factor: have key + know password</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Encryption Scheme</h3>

      <p className="mb-4">
        BIP-38 uses scrypt for key derivation and AES-256 for encryption:
      </p>

      <Definition title="BIP-38 Encryption Process">
        <ol className="list-decimal list-inside space-y-2">
          <li>Compute the Bitcoin address from the private key</li>
          <li>Take the first 4 bytes of double-SHA256(address) as addresshash</li>
          <li>Derive encryption key using scrypt(passphrase, addresshash)</li>
          <li>Split derived key into two halves for AES and XOR operations</li>
          <li>Encrypt the private key with AES-256-CBC</li>
          <li>Prepend flag bytes (0x0142 or 0x0143) and encode as Base58Check</li>
        </ol>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Scrypt parameters (CPU/memory intensive)</p>
        <div className="space-y-1 text-dark-300">
          <p>N = 16384 (2¹⁴) — CPU/memory cost</p>
          <p>r = 8 — Block size</p>
          <p>p = 8 — Parallelization</p>
          <p className="text-dark-500 mt-2">Designed to be slow to thwart brute-force attacks</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Formats</h3>

      <p className="mb-4">
        BIP-38 encrypted keys are identifiable by their prefix:
      </p>

      <Example title="Encrypted Key Prefix">
        <div className="space-y-3">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-mono mb-2">6P...</p>
            <p className="text-sm text-dark-300">
              All BIP-38 encrypted keys start with "6P" when Base58Check encoded
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-dark-400 text-sm mb-1">Non-EC-multiplied (0x0142):</p>
              <p className="font-mono text-xs text-emerald-400">6PRN...</p>
            </div>
            <div>
              <p className="text-dark-400 text-sm mb-1">EC-multiplied (0x0143):</p>
              <p className="font-mono text-xs text-purple-400">6PY...</p>
            </div>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">EC-Multiply Mode</h3>

      <p className="mb-4">
        BIP-38 includes a second mode using elliptic curve multiplication, enabling key
        generation without exposing the private key:
      </p>

      <Definition title="EC-Multiply (Lot/Sequence)">
        <p>
          A third party can generate encrypted private keys using only a "passphrase code"
          derived from the owner's passphrase. The owner can later decrypt with their passphrase.
          This enables:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Delegated key generation (e.g., by a printing service)</li>
          <li>Lot and sequence numbers for batch generation</li>
          <li>Confirmation codes to verify key creation</li>
        </ul>
      </Definition>

      <Callout type="warning" title="Limited Modern Use">
        <p>
          EC-multiply mode adds complexity and is rarely used today. Most implementations
          support only the simpler non-EC-multiplied mode. Modern best practice is to use
          BIP-39 seed phrases instead of individual encrypted keys.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Decryption Process</h3>

      <p className="mb-4">
        To recover the private key:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Base58Check decode the encrypted key</li>
          <li>Extract the addresshash from the payload</li>
          <li>Run scrypt with passphrase and addresshash</li>
          <li>AES decrypt using the derived key</li>
          <li>Verify by computing address and checking against addresshash</li>
        </ol>
        <p className="text-amber-400 mt-3 text-sm">
          Wrong passphrase → decrypted key won't match addresshash → error
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Considerations</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">✓ Strengths</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Strong encryption (AES-256)</li>
            <li>Memory-hard key derivation (scrypt)</li>
            <li>Built-in integrity check (addresshash)</li>
            <li>Two-factor security model</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">⚠ Considerations</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Passphrase strength is critical</li>
            <li>Scrypt is slow (intended, but affects UX)</li>
            <li>Single address only (vs HD wallet backup)</li>
            <li>Largely superseded by BIP-39 + hardware wallets</li>
          </ul>
        </div>
      </div>

      <Example title="BIP-38 Encrypted Key">
        <div className="space-y-2 font-mono text-xs break-all">
          <p className="text-dark-400"># Encrypted private key (passphrase: "TestingOneTwoThree")</p>
          <p className="text-amber-400">
            6PRVWUbkzzsbcVac2qwfssoUJAN1Xhrg6bNk8J7Nzm5H7kxEbn2Nh2ZoGg
          </p>
          <p className="text-dark-400 mt-2"># Decrypted WIF (compressed)</p>
          <p className="text-emerald-400">
            KwYgW8gcxj1JWJXhPSu4Fqwzfhp5Yfi42mdYmMa4XqK7NJxXUSK7
          </p>
        </div>
      </Example>

      <Callout type="success" title="Legacy but Useful">
        <p>
          While BIP-39 seed phrases have largely replaced BIP-38 for backup purposes, BIP-38
          remains useful for securely transmitting individual keys, creating physical gifts
          (like Casascius coins), or adding password protection to specific addresses.
        </p>
      </Callout>
    </LessonLayout>
  );
}
