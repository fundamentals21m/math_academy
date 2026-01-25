import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-35: Mempool Message</h2>

      <p className="mb-4">
        BIP-35 introduced the mempool message, allowing nodes to request the full list of
        transactions in a peer's memory pool. This is essential for lightweight clients
        and nodes catching up after being offline.
      </p>

      <Callout type="info" title="Transaction Discovery">
        <p>
          The mempool message lets nodes discover unconfirmed transactions they might have
          missed, ensuring consistent views of pending transactions across the network.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Before BIP-35, nodes reconnecting to the network had limited options:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Wait for new transaction announcements (inv messages)</li>
          <li>Miss transactions that were already propagated</li>
          <li>No way to request "all unconfirmed transactions"</li>
          <li>SPV clients couldn't efficiently learn about pending transactions</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Mempool Message</h3>

      <Definition title="mempool Command">
        <p>
          A simple command with no payload. When received, a node responds with inv messages
          for all transactions in its mempool.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Message exchange:</p>
        <p className="text-dark-300">Node A → Node B: mempool (empty payload)</p>
        <p className="text-dark-300 mt-2">Node B → Node A: inv (type=TX, hash1, hash2, ...)</p>
        <p className="text-dark-300">Node B → Node A: inv (type=TX, hash1001, ...)</p>
        <p className="text-dark-500 mt-3">
          Response may be split across multiple inv messages
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Flow</h3>

      <Example title="Mempool Synchronization">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Request mempool contents:</p>
            <p className="text-dark-300">Client: mempool</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Peer sends inventory:</p>
            <p className="text-dark-300">Server: inv [txid1, txid2, ..., txid1000]</p>
            <p className="text-dark-300">Server: inv [txid1001, txid1002, ...]</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Client requests needed transactions:</p>
            <p className="text-dark-300">Client: getdata [txid5, txid47, txid892, ...]</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 4. Server sends transaction data:</p>
            <p className="text-dark-300">Server: tx [full transaction 5]</p>
            <p className="text-dark-300">Server: tx [full transaction 47]</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Node Startup</p>
          <p className="text-sm text-dark-300">
            After restart, quickly populate mempool from peers instead of waiting for
            new announcements.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">SPV Clients</p>
          <p className="text-sm text-dark-300">
            Lightweight clients can check for unconfirmed transactions to their addresses
            using Bloom filters (BIP-37).
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Network Analysis</p>
          <p className="text-sm text-dark-300">
            Research tools can sample mempool contents across multiple peers to understand
            transaction propagation.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bloom Filter Integration</h3>

      <p className="mb-4">
        When combined with BIP-37 Bloom filters:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>filterload:</strong> Client sets Bloom filter for addresses of interest
          </li>
          <li>
            <strong>mempool:</strong> Client requests mempool inventory
          </li>
          <li>
            <strong>inv:</strong> Server sends only matching transaction IDs
          </li>
          <li>
            <strong>Efficiency:</strong> Client gets relevant unconfirmed transactions quickly
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Resource Considerations</h3>

      <Callout type="warning" title="Potential Abuse">
        <p>
          Mempool messages can be bandwidth-intensive:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Large mempools may contain thousands of transactions</li>
          <li>Repeated requests could consume significant bandwidth</li>
          <li>Some nodes limit mempool response frequency</li>
          <li>May be restricted or deprioritized for untrusted peers</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Version</h3>

      <p className="mb-4">
        BIP-35 was added in protocol version 60002:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Version check:</p>
        <p className="text-dark-300">if peer.version &gt;= 60002:</p>
        <p className="text-dark-500 ml-4">mempool message supported</p>
        <p className="text-dark-300">else:</p>
        <p className="text-dark-500 ml-4">message may be ignored or connection dropped</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Relevance</h3>

      <p className="mb-4">
        While still supported, mempool message usage has evolved:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Still Used For</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Initial mempool synchronization</li>
            <li>Research/monitoring tools</li>
            <li>Testing and development</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Alternatives</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>BIP-157/158 for light clients</li>
            <li>REST API for mempool queries</li>
            <li>Erlay for efficient relay</li>
          </ul>
        </div>
      </div>

      <Callout type="success" title="Foundation Feature">
        <p>
          BIP-35's mempool message filled an important gap in the P2P protocol. While
          newer approaches exist for specific use cases, the ability to request full
          mempool contents remains a useful tool for network synchronization and analysis.
        </p>
      </Callout>
    </LessonLayout>
  );
}
