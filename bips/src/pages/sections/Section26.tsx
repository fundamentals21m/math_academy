import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Purpose Field for Deterministic Wallets</h2>

      <p className="mb-4">
        BIP-43 introduces the concept of a "purpose" level in HD wallet derivation paths. This
        simple but crucial BIP establishes a convention for the first hardened derivation level,
        allowing different wallet standards to coexist without collision.
      </p>

      <Callout type="info" title="Coordination Standard">
        <p>
          BIP-43 itself doesn't define any specific purpose—it establishes the pattern that
          other BIPs (like BIP-44, BIP-49, BIP-84) follow. It's the coordination mechanism
          that makes multi-standard wallets possible.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        BIP-32 defines how to derive keys but not how to organize them:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">Without standardization:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Wallet A uses <span className="font-mono text-amber-400">m/0'/0</span> for receiving</li>
          <li>Wallet B uses <span className="font-mono text-amber-400">m/1/0</span> for receiving</li>
          <li>Wallet C uses <span className="font-mono text-amber-400">m/account/change/index</span></li>
        </ul>
        <p className="text-rose-400 mt-3 text-sm">
          Moving between wallets requires knowing their specific derivation scheme!
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Solution</h3>

      <p className="mb-4">
        BIP-43 reserves the first level of derivation to indicate which standard is being used:
      </p>

      <Definition title="Purpose Field">
        <p>
          The purpose level is the first hardened child of the master key:
        </p>
        <div className="font-mono text-lg text-amber-400 mt-3 mb-3">
          m / purpose' / *
        </div>
        <p>
          The purpose value is set to the BIP number that defines the subsequent path structure.
          For example, BIP-44 uses purpose 44'.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Registered Purposes</h3>

      <p className="mb-4">
        Each wallet standard registers its BIP number as a purpose:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Purpose</th>
              <th className="text-left py-3 text-dark-300">BIP</th>
              <th className="text-left py-3 text-dark-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">44'</td>
              <td>BIP-44</td>
              <td>Multi-account hierarchy (legacy)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">45'</td>
              <td>BIP-45</td>
              <td>Multisig HD structure</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">48'</td>
              <td>BIP-48</td>
              <td>Multi-script multisig</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">49'</td>
              <td>BIP-49</td>
              <td>P2WPKH-nested-in-P2SH</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">84'</td>
              <td>BIP-84</td>
              <td>Native SegWit (P2WPKH)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">86'</td>
              <td>BIP-86</td>
              <td>Taproot (P2TR)</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">85'</td>
              <td>BIP-85</td>
              <td>Deterministic entropy</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Path Structure</h3>

      <Example title="Purpose in Context">
        <div className="space-y-3 font-mono text-sm">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-44 legacy addresses</p>
            <p className="text-amber-400">m / 44' / 0' / 0' / 0 / 0</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-84 native SegWit addresses</p>
            <p className="text-emerald-400">m / 84' / 0' / 0' / 0 / 0</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-86 Taproot addresses</p>
            <p className="text-purple-400">m / 86' / 0' / 0' / 0 / 0</p>
          </div>
        </div>
        <p className="text-dark-500 text-sm mt-3">
          Same seed, same account—different address types from different purpose paths
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Hardened?</h3>

      <p className="mb-4">
        The purpose level uses hardened derivation (indicated by the apostrophe):
      </p>

      <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30 mb-6">
        <p className="text-amber-400 font-bold mb-2">Security Isolation</p>
        <p className="text-sm text-dark-300">
          Hardened derivation ensures that different wallet standards are cryptographically
          isolated. Exposing the extended public key of one purpose path doesn't compromise
          other paths—even if a child private key is also leaked.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Wallet Discovery</h3>

      <p className="mb-4">
        BIP-43 enables wallet software to scan for funds across multiple standards:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">Recovery process:</p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Import BIP-39 seed phrase</li>
          <li>Derive m/44'/0'/0' and scan for legacy addresses</li>
          <li>Derive m/49'/0'/0' and scan for wrapped SegWit</li>
          <li>Derive m/84'/0'/0' and scan for native SegWit</li>
          <li>Derive m/86'/0'/0' and scan for Taproot</li>
          <li>Display all found balances</li>
        </ol>
      </div>

      <Callout type="warning" title="Non-Standard Paths">
        <p>
          Some wallets historically used non-BIP-43 derivation paths. When recovering such
          wallets, you may need to know their specific derivation scheme. Always document
          which paths contain funds when using non-standard configurations.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Extending the Pattern</h3>

      <p className="mb-4">
        New wallet standards follow the same convention:
      </p>

      <Example title="Registering a New Purpose">
        <div className="space-y-3 text-dark-300">
          <p>To create a new wallet standard:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Write a BIP defining your derivation structure</li>
            <li>Use your BIP number as the purpose value</li>
            <li>Document compatibility with existing standards</li>
          </ol>
          <p className="text-dark-500 mt-3 text-sm">
            Example: If BIP-999 defined a new structure, it would use m/999'/...
          </p>
        </div>
      </Example>

      <Callout type="success" title="Foundation for Interoperability">
        <p>
          BIP-43's simple rule—"purpose = BIP number"—enables the entire ecosystem of wallet
          standards to coexist. A single seed can support legacy, SegWit, and Taproot addresses
          simultaneously, with each standard occupying its own branch of the key tree.
        </p>
      </Callout>
    </LessonLayout>
  );
}
