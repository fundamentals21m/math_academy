import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Preventing Duplicate Coinbase Transactions</h2>

      <p className="mb-4">
        BIP-34 solved a subtle but critical issue: without unique identifiers, two blocks could
        theoretically contain identical coinbase transactions. This soft fork requires the block
        height to be included in the coinbase, ensuring uniqueness.
      </p>

      <Callout type="info" title="Activated: March 2013">
        <p>
          BIP-34 activated at block 227,835 via the IsSuperMajority mechanism, making it one
          of the earliest consensus-layer soft forks after P2SH.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Duplicate Transaction Problem</h3>

      <p className="mb-4">
        Each Bitcoin transaction has a unique identifier (txid) computed as the hash of its
        contents. But what about coinbase transactions?
      </p>

      <Definition title="Coinbase Transaction">
        <p>
          The first transaction in every block, created by the miner. It has no inputs (or
          rather, a special "null" input) and outputs the block reward plus transaction fees.
          The miner can include arbitrary data in the coinbase's scriptSig.
        </p>
      </Definition>

      <p className="mb-4">
        Before BIP-34, if two miners chose:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>The same coinbase scriptSig content (or none)</li>
        <li>The same output addresses and amounts</li>
        <li>Different blocks at different heights</li>
      </ul>

      <p className="mb-4">
        ...their coinbase transactions would have <strong>identical txids</strong>. This created problems:
      </p>

      <Example title="The Duplicate Txid Problem">
        <div className="space-y-3 text-dark-300">
          <p>Consider blocks at heights 91,842 and 91,880:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Both have coinbase transactions with txid <code className="text-amber-400">d5d27987...</code></li>
            <li>Block 91,880's coinbase overwrites 91,842's in the UTXO set</li>
            <li>The 50 BTC from block 91,842 becomes unspendable!</li>
          </ul>
          <p className="text-amber-400 mt-2">
            This actually happened—twice—before BIP-34.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The BIP-34 Solution</h3>

      <p className="mb-4">
        BIP-34 requires the block height to be the first item in the coinbase scriptSig:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Coinbase scriptSig must begin with:</p>
        <p className="text-amber-400">&lt;block_height&gt;</p>
        <p className="text-dark-500 mt-2">
          Serialized as a minimally-encoded Script number (push opcode + little-endian bytes)
        </p>
      </div>

      <p className="mb-4">
        Since block heights are unique and increasing, this guarantees each coinbase
        transaction has a unique txid.
      </p>

      <Example title="Coinbase ScriptSig Example">
        <div className="font-mono text-sm space-y-2">
          <p className="text-dark-400"># Block 710,000</p>
          <p>
            <span className="text-purple-400">03</span>
            <span className="text-amber-400">70d60a</span>
            <span className="text-dark-400">...</span>
          </p>
          <p className="text-xs text-dark-500 mt-2">
            03 = push 3 bytes, 70d60a = 710,000 in little-endian
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Block Version 2</h3>

      <p className="mb-4">
        BIP-34 also introduced block version 2. Blocks with version ≥ 2 must include the
        height in their coinbase:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-gray-400 font-bold mb-2">Version 1</p>
          <p className="text-sm text-dark-300">
            Original block format. Height in coinbase optional.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Version 2+</p>
          <p className="text-sm text-dark-300">
            Must include height in coinbase. Required after BIP-34 activation.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Activation via IsSuperMajority</h3>

      <p className="mb-4">
        BIP-34 used the original activation mechanism:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Phase 1:</span>
            <span>750 of last 1000 blocks are v2 → v2 blocks must have height in coinbase</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Phase 2:</span>
            <span>950 of last 1000 blocks are v2 → v1 blocks become invalid</span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Connection to BIP-30</h3>

      <Callout type="info" title="BIP-30 Relationship">
        <p>
          BIP-30 (2012) explicitly prohibited duplicate txids in the UTXO set. BIP-34 makes
          duplicate txids impossible for coinbase transactions going forward, providing a
          stronger guarantee. However, BIP-30 checks are still needed for the two historical
          duplicate transactions that predated BIP-34.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Implications</h3>

      <p className="mb-4">
        For miners and pool operators:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Must include height as first item in coinbase scriptSig</li>
        <li>Height must be minimally encoded (no extra padding)</li>
        <li>Additional data (pool tags, nonces) can follow the height</li>
        <li>Total scriptSig limited to 100 bytes</li>
      </ul>

      <Example title="Modern Coinbase Data">
        <div className="space-y-2 text-dark-300">
          <p>A typical coinbase scriptSig contains:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li><strong>Block height</strong> (required by BIP-34)</li>
            <li><strong>Extra nonce</strong> (for hash variance)</li>
            <li><strong>Pool identifier</strong> (e.g., "/Foundry USA/")</li>
            <li><strong>Optional messages</strong> (like Satoshi's famous Times headline)</li>
          </ol>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Not Just Use Timestamps?</h3>

      <p className="mb-4">
        Block timestamps aren't unique enough:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Timestamps have ~2 hour tolerance for network time</li>
        <li>Timestamps can move backward (within limits)</li>
        <li>Multiple blocks could have the same timestamp</li>
        <li>Block height is strictly monotonic—perfect uniqueness guarantee</li>
      </ul>

      <Callout type="success" title="Foundation for Future BIPs">
        <p>
          BIP-34's versioning system paved the way for later soft forks (BIP-66, BIP-65) that
          used increasing version numbers, eventually leading to BIP-9's version bits system.
          The height requirement also enabled relative timelocks (BIP-68) which reference
          block heights.
        </p>
      </Callout>
    </LessonLayout>
  );
}
