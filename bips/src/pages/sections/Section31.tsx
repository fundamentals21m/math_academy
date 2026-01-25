import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Deterministic Entropy From BIP32 Keychains</h2>

      <p className="mb-4">
        BIP-85 defines a method for deriving multiple independent seeds from a single master
        seed. Instead of managing multiple seed phrases, users can derive child seeds for
        different applications—each with its own complete HD wallet—all from one master backup.
      </p>

      <Callout type="info" title="One Seed to Rule Them All">
        <p>
          BIP-85 solves the "too many seeds" problem. Maintain one highly-secured master seed,
          and derive application-specific child seeds on demand. Lose a derived seed? Regenerate
          it from the master.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Modern cryptocurrency users often need multiple seeds:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Hot wallet for daily spending</li>
          <li>Cold storage for long-term savings</li>
          <li>Hardware wallet(s) for secure signing</li>
          <li>Lightning node identity</li>
          <li>Nostr keypair</li>
          <li>Application-specific keys</li>
        </ul>
        <p className="text-rose-400 mt-3 text-sm">
          Each requires its own backup → complexity and risk
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-85 Solution</h3>

      <Definition title="Deterministic Entropy">
        <p>
          BIP-85 uses the master seed to derive independent entropy blobs. Each blob can
          then be used as a seed for a new HD wallet, mnemonic phrase, or application key.
          The derivations are one-way—child seeds cannot reveal the master.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Derivation Path</h3>

      <p className="mb-4">
        BIP-85 reserves purpose 83696968' (ASCII for "bip"):
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># BIP-85 derivation path structure</p>
        <p className="text-amber-400">m / 83696968' / application' / language' / words' / index'</p>
        <p className="text-xs text-dark-500 mt-3">
          All levels are hardened to prevent child seed exposure from compromising the master
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Application Types</h3>

      <p className="mb-4">
        Different applications use different derivation parameters:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Application</th>
              <th className="text-left py-3 text-dark-300">Code</th>
              <th className="text-left py-3 text-dark-300">Output</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">BIP-39 Mnemonic</td>
              <td className="font-mono text-amber-400">39'</td>
              <td>12/18/24 word seed phrase</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">WIF (Raw key)</td>
              <td className="font-mono text-amber-400">2'</td>
              <td>Single private key (WIF format)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">XPRV (HD root)</td>
              <td className="font-mono text-amber-400">32'</td>
              <td>BIP-32 extended private key</td>
            </tr>
            <tr>
              <td className="py-3">Hex entropy</td>
              <td className="font-mono text-amber-400">128169'</td>
              <td>Raw bytes (variable length)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Deriving a Child Mnemonic</h3>

      <Example title="BIP-39 Child Seed Derivation">
        <div className="space-y-3 font-mono text-xs">
          <p className="text-dark-400"># To derive a 12-word English mnemonic at index 0:</p>
          <p className="text-amber-400 mb-3">m / 83696968' / 39' / 0' / 12' / 0'</p>

          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1">Parameters:</p>
            <p className="text-dark-300">• 39' = BIP-39 mnemonic</p>
            <p className="text-dark-300">• 0' = English language</p>
            <p className="text-dark-300">• 12' = 12 words (128 bits entropy)</p>
            <p className="text-dark-300">• 0' = First child mnemonic</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Entropy Extraction</h3>

      <p className="mb-4">
        The child key is converted to entropy using HMAC-SHA512:
      </p>

      <MathBlock>
        {`\\text{entropy} = \\text{HMAC-SHA512}(\\text{\"bip-entropy-from-k\"}, k)`}
      </MathBlock>

      <p className="text-dark-400 mb-6">
        Where k is the derived private key at the specified path. The output is then
        truncated to the required entropy length.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Hardware Wallet Setup</p>
          <p className="text-sm text-dark-300">
            Derive a child seed for each hardware wallet. If one is lost, regenerate
            from the master without exposing other devices.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Hot/Cold Separation</p>
          <p className="text-sm text-dark-300">
            Keep a minimal derived seed on mobile, master seed in cold storage.
            Compromise of hot wallet doesn't affect cold funds.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Application Keys</p>
          <p className="text-sm text-dark-300">
            Derive keys for Nostr, Lightning, or other protocols without exposing
            your main Bitcoin keys.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Backup Simplification</p>
          <p className="text-sm text-dark-300">
            Back up one master seed with high security. Derived seeds are recoverable
            and need less rigorous backup.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Properties</h3>

      <Callout type="warning" title="One-Way Derivation">
        <p>
          BIP-85 derivation is one-way. A compromised child seed reveals nothing about
          the master or other children. However, the master seed can regenerate ALL
          children—protect it accordingly!
        </p>
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">Security guarantees:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Child seeds are cryptographically independent</li>
          <li>Compromising child N doesn't help attack child M</li>
          <li>All hardened derivation prevents public key attacks</li>
          <li>HMAC extraction adds additional security layer</li>
        </ul>
      </div>

      <Example title="Practical Workflow">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Generate or use existing 24-word master seed</li>
          <li>Store master seed with maximum security (metal, vault, etc.)</li>
          <li>Derive child seed for hardware wallet: m/83696968'/39'/0'/24'/0'</li>
          <li>Derive child seed for mobile wallet: m/83696968'/39'/0'/12'/1'</li>
          <li>Each child operates as completely independent wallet</li>
          <li>If mobile seed compromised, regenerate at index 2</li>
        </ol>
      </Example>

      <Callout type="success" title="Future-Proof Backup">
        <p>
          BIP-85 represents a paradigm shift in key management. Instead of an ever-growing
          collection of seed phrases, users can maintain a single master with deterministic
          child derivation for any future application—known or yet to be invented.
        </p>
      </Callout>
    </LessonLayout>
  );
}
