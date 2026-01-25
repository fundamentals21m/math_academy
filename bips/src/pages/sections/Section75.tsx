import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section75() {
  return (
    <LessonLayout sectionId={75}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-30: Duplicate Transactions</h2>

      <p className="mb-4">
        BIP-30 addresses a subtle bug where coinbase transactions could have identical
        transaction IDs (txids), allowing one to overwrite another in the UTXO set. This
        rule ensures every transaction has a unique identifier.
      </p>

      <Callout type="warning" title="Historical Bug">
        <p>
          Before BIP-30, it was possible to create coinbase transactions with the same
          txid as existing ones. This actually happened twice in Bitcoin's early history,
          resulting in lost coins.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        How could two transactions have the same txid?
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Coinbase transaction structure:</p>
        <p className="text-dark-300">input: 00...00 (null input)</p>
        <p className="text-dark-300">scriptSig: arbitrary data (block height, etc.)</p>
        <p className="text-dark-300">output: miner reward to address</p>
        <p className="text-dark-400 mt-3 mb-2"># If miner uses same data:</p>
        <p className="text-rose-400">Identical txid possible!</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Historical Duplicates</h3>

      <p className="mb-4">
        Two pairs of duplicate coinbase transactions exist in Bitcoin:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-amber-400 font-bold mb-1">Duplicate 1:</p>
            <p className="text-dark-300 text-sm">
              Block 91,812 coinbase matches block 91,722
            </p>
            <p className="text-dark-500 text-xs font-mono break-all">
              txid: d5d27987d2a3dfc724e359870c6644b40e497bdc0589a033220fe15429d88599
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-bold mb-1">Duplicate 2:</p>
            <p className="text-dark-300 text-sm">
              Block 91,842 coinbase matches block 91,880
            </p>
            <p className="text-dark-500 text-xs font-mono break-all">
              txid: e3bf3d07d4b0375638d5f1db5255fe07ba2c4cb067cd81b84ee974b6585fb468
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Consequences</h3>

      <Definition title="UTXO Overwriting">
        <p>
          When the second transaction with the same txid was included in a block, it
          overwrote the first in the UTXO set. The original outputs became unspendable—
          the coins were permanently lost.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># What happened:</p>
        <p className="text-dark-300">1. Block A: coinbase tx1 → output to miner</p>
        <p className="text-dark-300">2. Later: tx1's output unspent in UTXO set</p>
        <p className="text-dark-300">3. Block B: coinbase tx2 (same txid as tx1)</p>
        <p className="text-rose-400">4. tx2 overwrites tx1 in UTXO set</p>
        <p className="text-rose-400">5. Original tx1 outputs lost forever</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-30 Rule</h3>

      <p className="mb-4">
        The fix is simple but important:
      </p>

      <Example title="BIP-30 Consensus Rule">
        <div className="space-y-3 text-dark-300">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold mb-2">Rule:</p>
            <p>
              Blocks must not contain a transaction whose txid matches any transaction
              with unspent outputs in the UTXO set.
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1">In other words:</p>
            <p>
              You can't create a transaction with the same txid as one that has UTXOs
              still available to spend.
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Activation</h3>

      <p className="mb-4">
        BIP-30 was activated at block 91,842:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Implemented in Bitcoin Core 0.6.0</li>
          <li>Active from block 91,842 onward</li>
          <li>The existing duplicates are grandfathered (special cases)</li>
          <li>No new duplicates allowed</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-34's Role</h3>

      <p className="mb-4">
        BIP-34 effectively makes BIP-30 validation unnecessary for new blocks:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">BIP-30</p>
          <p className="text-sm text-dark-300">
            Reactive: Check each block for duplicate txids
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">BIP-34</p>
          <p className="text-sm text-dark-300">
            Proactive: Block height in coinbase makes duplicates impossible
          </p>
        </div>
      </div>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># BIP-34 requirement:</p>
        <p className="text-dark-300">coinbase scriptSig must start with block height</p>
        <p className="text-dark-400 mt-2 mb-2"># Effect:</p>
        <p className="text-dark-300">Every coinbase has unique height → unique txid</p>
        <p className="text-emerald-400 mt-1">Duplicates structurally impossible</p>
      </div>

      <Callout type="info" title="Defense in Depth">
        <p>
          BIP-30 checks are skipped for blocks after BIP-34 activation (block 227,931)
          since BIP-34 prevents duplicates by design. However, the rule remains important
          for validating historical blocks and as a backup safety measure.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lost Coins</h3>

      <Callout type="warning" title="Permanent Loss">
        <p>
          The duplicate coinbase transactions resulted in 100 BTC permanently lost
          (50 BTC × 2 duplicates). These coins can never be spent because the original
          UTXOs were overwritten.
        </p>
      </Callout>

      <Callout type="success" title="Simple but Crucial">
        <p>
          BIP-30 is a simple rule that prevents a subtle but serious bug. Combined with
          BIP-34, it ensures every Bitcoin transaction has a unique identifier, maintaining
          the integrity of the UTXO set.
        </p>
      </Callout>
    </LessonLayout>
  );
}
