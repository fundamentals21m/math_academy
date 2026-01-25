import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Multi-Account Hierarchy for Deterministic Wallets</h2>

      <p className="mb-4">
        BIP-44 defines the complete derivation path structure for HD wallets. Building on
        BIP-32 and BIP-43, it establishes the familiar five-level hierarchy used by most
        Bitcoin wallets: purpose, coin type, account, change, and address index.
      </p>

      <Callout type="info" title="The Standard Path">
        <p>
          BIP-44 is the most widely implemented wallet standard. When a wallet says it
          supports "BIP-44 derivation," it means it follows this exact path structure,
          enabling consistent address generation across different software.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Complete Path</h3>

      <Definition title="BIP-44 Derivation Path">
        <div className="font-mono text-lg text-amber-400 mb-4">
          m / purpose' / coin_type' / account' / change / address_index
        </div>
        <div className="space-y-2 text-dark-300">
          <p><span className="text-amber-400 font-mono">purpose'</span> — Always 44' (BIP-44)</p>
          <p><span className="text-amber-400 font-mono">coin_type'</span> — Cryptocurrency identifier (0' for Bitcoin)</p>
          <p><span className="text-amber-400 font-mono">account'</span> — User-controlled account separation</p>
          <p><span className="text-amber-400 font-mono">change</span> — 0 for receiving, 1 for change</p>
          <p><span className="text-amber-400 font-mono">address_index</span> — Sequential address number</p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Level 1: Purpose</h3>

      <p className="mb-4">
        As defined by BIP-43, the purpose is set to the BIP number:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-1"># Purpose for BIP-44</p>
        <p className="text-amber-400">m / 44' / ...</p>
        <p className="text-dark-500 mt-2">Hardened derivation isolates from other standards</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Level 2: Coin Type</h3>

      <p className="mb-4">
        Different cryptocurrencies use different coin type values:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Coin Type</th>
              <th className="text-left py-3 text-dark-300">Cryptocurrency</th>
              <th className="text-left py-3 text-dark-300">Path Example</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">0'</td>
              <td>Bitcoin</td>
              <td className="font-mono text-xs">m/44'/0'/...</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">1'</td>
              <td>Bitcoin Testnet</td>
              <td className="font-mono text-xs">m/44'/1'/...</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">2'</td>
              <td>Litecoin</td>
              <td className="font-mono text-xs">m/44'/2'/...</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">60'</td>
              <td>Ethereum</td>
              <td className="font-mono text-xs">m/44'/60'/...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info" title="SLIP-44">
        <p>
          The full registry of coin types is maintained in SLIP-44 (SatoshiLabs Improvement
          Proposal). This ensures different cryptocurrencies don't accidentally share paths,
          even when using the same seed.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Level 3: Account</h3>

      <p className="mb-4">
        Accounts provide logical separation for different purposes:
      </p>

      <Example title="Account Use Cases">
        <div className="space-y-3 text-dark-300">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-dark-800 rounded-lg p-4">
              <p className="text-amber-400 font-mono mb-1">m/44'/0'/0'/...</p>
              <p className="text-sm">Personal savings</p>
            </div>
            <div className="bg-dark-800 rounded-lg p-4">
              <p className="text-amber-400 font-mono mb-1">m/44'/0'/1'/...</p>
              <p className="text-sm">Business transactions</p>
            </div>
            <div className="bg-dark-800 rounded-lg p-4">
              <p className="text-amber-400 font-mono mb-1">m/44'/0'/2'/...</p>
              <p className="text-sm">Donations received</p>
            </div>
            <div className="bg-dark-800 rounded-lg p-4">
              <p className="text-amber-400 font-mono mb-1">m/44'/0'/3'/...</p>
              <p className="text-sm">Trading funds</p>
            </div>
          </div>
          <p className="text-dark-500 text-sm mt-2">
            Each account has independent address sequences
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Level 4: Change</h3>

      <p className="mb-4">
        The change level separates external (receiving) and internal (change) addresses:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">External Chain (0)</p>
          <p className="font-mono text-sm text-dark-300 mb-2">m/44'/0'/0'/0/...</p>
          <p className="text-sm text-dark-400">
            Addresses given to others for receiving payments. Shared publicly.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Internal Chain (1)</p>
          <p className="font-mono text-sm text-dark-300 mb-2">m/44'/0'/0'/1/...</p>
          <p className="text-sm text-dark-400">
            Addresses for transaction change. Never shared externally.
          </p>
        </div>
      </div>

      <Definition title="Why Separate Change?">
        <p>
          Separating change addresses improves privacy analysis resistance. External addresses
          are known to be shared, so their reuse is public. Change addresses are never intentionally
          shared, so any exposure indicates a privacy leak.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Level 5: Address Index</h3>

      <p className="mb-4">
        The final level is a sequential index starting at 0:
      </p>

      <Example title="Address Generation">
        <div className="space-y-2 font-mono text-sm">
          <p className="text-dark-400"># First three receiving addresses</p>
          <p className="text-dark-300">m/44'/0'/0'/0/<span className="text-amber-400">0</span> → 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
          <p className="text-dark-300">m/44'/0'/0'/0/<span className="text-amber-400">1</span> → 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</p>
          <p className="text-dark-300">m/44'/0'/0'/0/<span className="text-amber-400">2</span> → 3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy</p>
        </div>
        <p className="text-dark-500 text-sm mt-3">
          Wallets typically scan ahead (gap limit) to find all used addresses
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Gap Limit</h3>

      <p className="mb-4">
        Wallets use a "gap limit" to know when to stop scanning:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-amber-400 font-semibold mb-2">Default: 20 consecutive unused addresses</p>
        <p className="text-dark-300 mb-3">
          If the wallet finds 20 addresses in a row with no transaction history, it stops
          scanning and assumes no more addresses are used.
        </p>
        <p className="text-dark-500 text-sm">
          ⚠️ Generating addresses beyond the gap limit may cause recovery issues
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Account Discovery</h3>

      <p className="mb-4">
        When restoring a wallet, software discovers accounts sequentially:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 font-mono text-sm mb-6">
        <ol className="list-decimal list-inside space-y-1 text-dark-300">
          <li>Start with account 0</li>
          <li>Scan external and internal chains</li>
          <li>If any transaction found, check account 1</li>
          <li>Continue until an empty account is found</li>
          <li>Stop (don't scan further accounts)</li>
        </ol>
      </div>

      <Callout type="warning" title="Account Discovery Limitation">
        <p>
          If you create account 2 before using account 1, recovery software won't find
          account 2 because it stops at the first empty account. Always use accounts
          sequentially starting from 0.
        </p>
      </Callout>

      <Callout type="success" title="Complete Example">
        <div className="font-mono text-sm">
          <p className="text-dark-400 mb-2"># First Bitcoin receiving address, first account</p>
          <p className="text-amber-400">m / 44' / 0' / 0' / 0 / 0</p>
          <p className="text-dark-500 mt-2">
            This is "the" standard Bitcoin address path that most wallets use for legacy (P2PKH) addresses.
          </p>
        </div>
      </Callout>
    </LessonLayout>
  );
}
