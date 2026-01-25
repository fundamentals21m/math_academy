import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Mnemonic Code for Generating Seeds</h2>

      <p className="mb-4">
        BIP-39 defines a method for generating deterministic wallets from a mnemonic sentence—
        a sequence of common words that encodes the wallet's master seed. This human-readable
        format makes wallet backup dramatically easier and less error-prone.
      </p>

      <Callout type="info" title="Industry Standard">
        <p>
          BIP-39 is the most widely adopted wallet standard. The familiar "12 words" or
          "24 words" backup phrase used by nearly every wallet is a BIP-39 mnemonic.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        BIP-32 seeds are long hexadecimal strings—difficult to write down correctly:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Raw Seed (Hex)</p>
          <p className="font-mono text-xs text-dark-300 break-all">
            0c1e24e5917779d297e14d45f14e1a1a
          </p>
          <p className="text-xs text-dark-500 mt-2">Easy to make transcription errors</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Mnemonic Words</p>
          <p className="text-sm text-dark-300">
            army van defense carry jealous true garbage claim echo media make crunch
          </p>
          <p className="text-xs text-dark-500 mt-2">Human-readable and verifiable</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mnemonic Generation</h3>

      <p className="mb-4">
        A mnemonic encodes entropy with an error-detection checksum:
      </p>

      <Definition title="Mnemonic Structure">
        <div className="space-y-2">
          <p>The mnemonic length depends on the entropy size:</p>
          <div className="font-mono text-sm mt-3 space-y-1">
            <p>128 bits entropy + 4 bits checksum = 132 bits → <span className="text-amber-400">12 words</span></p>
            <p>160 bits entropy + 5 bits checksum = 165 bits → <span className="text-amber-400">15 words</span></p>
            <p>192 bits entropy + 6 bits checksum = 198 bits → <span className="text-amber-400">18 words</span></p>
            <p>224 bits entropy + 7 bits checksum = 231 bits → <span className="text-amber-400">21 words</span></p>
            <p>256 bits entropy + 8 bits checksum = 264 bits → <span className="text-amber-400">24 words</span></p>
          </div>
        </div>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Generation process</p>
        <ol className="list-decimal list-inside space-y-1 text-dark-300">
          <li>Generate random entropy (128-256 bits)</li>
          <li>Compute checksum = first N bits of SHA256(entropy)</li>
          <li>Concatenate entropy + checksum</li>
          <li>Split into 11-bit segments</li>
          <li>Map each segment to a word (index 0-2047)</li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Wordlist</h3>

      <p className="mb-4">
        BIP-39 specifies a list of 2048 words with specific properties:
      </p>

      <Example title="Wordlist Properties">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Unique prefixes:</strong> First 4 characters uniquely identify each word
            (allows partial typing)
          </li>
          <li>
            <strong>Common words:</strong> Easy to spell and remember
          </li>
          <li>
            <strong>Similar words avoided:</strong> No word pairs differing by one letter
          </li>
          <li>
            <strong>Sorted:</strong> Alphabetically ordered for binary search
          </li>
        </ul>
        <p className="text-dark-500 text-sm mt-3">
          Available in English, Japanese, Chinese, Spanish, French, Italian, Korean, Czech
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">From Mnemonic to Seed</h3>

      <p className="mb-4">
        The mnemonic is converted to a binary seed using PBKDF2:
      </p>

      <MathBlock>
        {`\\text{seed} = \\text{PBKDF2}(\\text{mnemonic}, \\text{\"mnemonic\"} + \\text{passphrase}, 2048, 64)`}
      </MathBlock>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-2">PBKDF2 parameters:</p>
        <ul className="space-y-1 text-dark-300">
          <li><span className="text-amber-400">Password:</span> The mnemonic sentence (space-separated words)</li>
          <li><span className="text-amber-400">Salt:</span> "mnemonic" + optional passphrase</li>
          <li><span className="text-amber-400">Iterations:</span> 2048</li>
          <li><span className="text-amber-400">Output:</span> 512 bits (64 bytes)</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Optional Passphrase</h3>

      <p className="mb-4">
        BIP-39 allows an optional passphrase (sometimes called the "25th word"):
      </p>

      <Definition title="Passphrase Benefits">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Plausible deniability:</strong> Different passphrases produce completely
            different wallets from the same mnemonic
          </li>
          <li>
            <strong>Additional security:</strong> Compromised mnemonic alone is useless
          </li>
          <li>
            <strong>Hidden wallets:</strong> Store funds in passphrase-protected wallets while
            keeping a small amount in the default (no passphrase) wallet
          </li>
        </ul>
      </Definition>

      <Callout type="warning" title="Passphrase Risks">
        <p>
          Unlike the mnemonic, there's no checksum for the passphrase. A typo produces a valid
          but different wallet—potentially losing access to funds. The passphrase must be
          backed up separately and exactly.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Checksum Validation</h3>

      <p className="mb-4">
        The embedded checksum catches transcription errors:
      </p>

      <Example title="Checksum Detection">
        <div className="space-y-3">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-emerald-400 text-sm mb-1">✓ Valid mnemonic:</p>
            <p className="text-dark-300 text-sm">
              abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-rose-400 text-sm mb-1">✗ Invalid (wrong checksum):</p>
            <p className="text-dark-300 text-sm">
              abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon <span className="text-rose-400">abandon</span>
            </p>
          </div>
        </div>
        <p className="text-dark-500 text-sm mt-2">
          The last word includes checksum bits—random words won't validate
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Considerations</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Words</th>
              <th className="text-left py-3 text-dark-300">Entropy</th>
              <th className="text-left py-3 text-dark-300">Security Level</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">12 words</td>
              <td>128 bits</td>
              <td className="text-amber-400">Strong (standard)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">15 words</td>
              <td>160 bits</td>
              <td className="text-amber-400">Very strong</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">18 words</td>
              <td>192 bits</td>
              <td className="text-emerald-400">Excellent</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">21 words</td>
              <td>224 bits</td>
              <td className="text-emerald-400">Excellent</td>
            </tr>
            <tr>
              <td className="py-3">24 words</td>
              <td>256 bits</td>
              <td className="text-emerald-400">Maximum</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Universal Standard">
        <p>
          BIP-39 enables wallet portability—the same mnemonic works across different wallet
          software. However, derivation paths (BIP-44, BIP-49, BIP-84) may differ, so full
          recovery requires knowing which paths were used.
        </p>
      </Callout>
    </LessonLayout>
  );
}
