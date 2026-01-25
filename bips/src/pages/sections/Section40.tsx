import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Lexicographical Indexing of Transaction Inputs and Outputs</h2>

      <p className="mb-4">
        BIP-69 defines a standard ordering for transaction inputs and outputs based on
        lexicographical sorting. This deterministic ordering improves privacy by preventing
        ordering-based heuristics and ensures reproducible transaction construction.
      </p>

      <Callout type="info" title="Privacy Through Determinism">
        <p>
          Without standardized ordering, wallet implementation details leak through
          transaction structure. BIP-69 ordering makes transactions from different
          wallets look more similar, improving the anonymity set for all users.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Transaction ordering can reveal information about the software used:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">Without standardization:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Some wallets put change output first, others last</li>
          <li>Inputs might be ordered by amount, by age, or randomly</li>
          <li>These patterns fingerprint specific wallet software</li>
          <li>Chain analysis uses ordering to identify change outputs</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Input Ordering</h3>

      <Definition title="Input Sort Order">
        <p>Inputs are sorted by:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Previous txid</strong> (ascending, lexicographic)</li>
          <li><strong>Previous output index</strong> (ascending, if txids equal)</li>
        </ol>
        <p className="text-dark-500 text-sm mt-2">
          Lexicographic = byte-by-byte comparison like sorting strings
        </p>
      </Definition>

      <Example title="Sorting Inputs">
        <div className="space-y-3">
          <p className="text-dark-400">Given inputs referencing:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="text-dark-300">txid: f5d8...a3b2, vout: 0</p>
            <p className="text-dark-300">txid: a1c4...9e7f, vout: 1</p>
            <p className="text-dark-300">txid: a1c4...9e7f, vout: 0</p>
          </div>
          <p className="text-dark-400 mt-2">BIP-69 order:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="text-amber-400">1. a1c4...9e7f:0 (lowest txid, lowest vout)</p>
            <p className="text-amber-400">2. a1c4...9e7f:1 (same txid, higher vout)</p>
            <p className="text-amber-400">3. f5d8...a3b2:0 (higher txid)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Output Ordering</h3>

      <Definition title="Output Sort Order">
        <p>Outputs are sorted by:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Amount</strong> (ascending, in satoshis)</li>
          <li><strong>scriptPubKey</strong> (ascending, lexicographic, if amounts equal)</li>
        </ol>
      </Definition>

      <Example title="Sorting Outputs">
        <div className="space-y-3">
          <p className="text-dark-400">Given outputs:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="text-dark-300">10000 sat to bc1q...xyz</p>
            <p className="text-dark-300">5000 sat to bc1q...abc</p>
            <p className="text-dark-300">5000 sat to bc1q...def</p>
          </div>
          <p className="text-dark-400 mt-2">BIP-69 order:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="text-amber-400">1. 5000 sat to bc1q...abc (lowest amount, lower script)</p>
            <p className="text-amber-400">2. 5000 sat to bc1q...def (same amount, higher script)</p>
            <p className="text-amber-400">3. 10000 sat to bc1q...xyz (highest amount)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Benefits</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Reduced Fingerprinting</p>
          <p className="text-sm text-dark-300">
            All BIP-69 wallets produce identically-ordered transactions, preventing
            software identification through ordering patterns.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Change Detection Resistance</p>
          <p className="text-sm text-dark-300">
            Without "change is always last" patterns, chain analysis can't trivially
            identify change outputs by position.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Limitations and Criticism</h3>

      <Callout type="warning" title="Controversy">
        <p>
          BIP-69 has been debated within the Bitcoin community:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Deterministic ordering itself becomes a fingerprint</li>
          <li>Some argue random ordering is better for privacy</li>
          <li>The ordering may reveal information about UTXO selection</li>
          <li>Not all wallets implement it, reducing effectiveness</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation Considerations</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Pseudocode for output sorting</p>
        <div className="text-dark-300 space-y-1">
          <p>outputs.sort((a, b) =&gt; {'{'}</p>
          <p className="ml-4">if (a.amount !== b.amount)</p>
          <p className="ml-8">return a.amount - b.amount;</p>
          <p className="ml-4">return compare_bytes(a.scriptPubKey, b.scriptPubKey);</p>
          <p>{'}'});</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Adoption</h3>

      <p className="mb-4">
        BIP-69 has mixed adoption across the ecosystem:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Implementing Wallets</p>
          <p className="text-sm text-dark-300">
            Several wallets use BIP-69 ordering by default, including some popular
            open-source wallets. PSBT workflows often produce BIP-69 ordered transactions.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Alternative Approaches</p>
          <p className="text-sm text-dark-300">
            Some wallets prefer random ordering, arguing it provides better privacy
            by not creating a detectable pattern.
          </p>
        </div>
      </div>

      <Callout type="success" title="Best Practices">
        <p>
          Whether using BIP-69 or random ordering, the key is consistency within your
          wallet and awareness of the trade-offs. BIP-69 provides reproducibility and
          broad compatibility, while random ordering may offer better privacy in some
          threat models.
        </p>
      </Callout>
    </LessonLayout>
  );
}
