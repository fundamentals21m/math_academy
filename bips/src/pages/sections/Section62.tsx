import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-37: Bloom Filtering (Deprecated)</h2>

      <p className="mb-4">
        BIP-37 introduced Bloom filters for lightweight clients to request transactions
        matching specific patterns without downloading all transactions. While innovative,
        it was deprecated due to privacy and denial-of-service concerns.
      </p>

      <Callout type="warning" title="Deprecated Standard">
        <p>
          BIP-37 is deprecated. Most full nodes disable it by default (NODE_BLOOM service
          bit off). BIP-157/158 compact block filters are the recommended alternative.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Goal</h3>

      <p className="mb-4">
        BIP-37 aimed to help SPV (lightweight) clients efficiently find relevant transactions:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Download only transactions affecting user's addresses</li>
          <li>Avoid downloading full blocks</li>
          <li>Reduce bandwidth for mobile/constrained devices</li>
          <li>Still validate transactions with SPV proof</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bloom Filter Basics</h3>

      <Definition title="Bloom Filter">
        <p>
          A probabilistic data structure that can test whether an element is in a set.
          It may produce false positives (saying something matches when it doesn't) but
          never false negatives (missing actual matches).
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Bloom filter properties:</p>
        <p className="text-dark-300">• Compact representation of a set</p>
        <p className="text-dark-300">• False positives possible (tunable rate)</p>
        <p className="text-dark-300">• No false negatives (guaranteed matches)</p>
        <p className="text-dark-300">• Cannot remove elements</p>
        <p className="text-dark-500 mt-3">
          Trade-off: Smaller filter = more false positives
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Messages</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Message</th>
              <th className="text-left py-3 text-dark-300">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">filterload</td>
              <td>Set the Bloom filter for this connection</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">filteradd</td>
              <td>Add elements to existing filter</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">filterclear</td>
              <td>Remove filter, receive all transactions</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">merkleblock</td>
              <td>Block header + Merkle proof for matching txs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How It Worked</h3>

      <Example title="BIP-37 SPV Flow">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Client creates filter with addresses:</p>
            <p className="text-dark-300">filter = bloom_filter(addr1, addr2, addr3)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Send filter to peer:</p>
            <p className="text-dark-300">client → server: filterload(filter)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Request blocks:</p>
            <p className="text-dark-300">client → server: getdata(block_hash)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 4. Server sends filtered response:</p>
            <p className="text-dark-300">server → client: merkleblock(header + proof)</p>
            <p className="text-dark-300">server → client: tx(matching transactions)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why It Was Deprecated</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Privacy Leak</p>
          <p className="text-sm text-dark-300">
            The filter reveals which addresses the client cares about. A malicious peer
            can analyze the filter to determine the client's addresses with high accuracy.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">DoS Vector</p>
          <p className="text-sm text-dark-300">
            Clients can send filters requiring expensive computation. A node must test
            every transaction against every connected client's filter—easily abused.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Asymmetric Cost</p>
          <p className="text-sm text-dark-300">
            The server does most of the work (filtering), while the client just sends
            a small filter. This inverts the normal cost model.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">NODE_BLOOM Service Bit</h3>

      <p className="mb-4">
        BIP-111 added a service bit so nodes can advertise Bloom filter support:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>NODE_BLOOM (1 &lt;&lt; 2):</strong> Node will process Bloom filter messages
          </li>
          <li>
            <strong>Default off:</strong> Most nodes don't advertise this anymore
          </li>
          <li>
            <strong>-peerbloomfilters:</strong> Bitcoin Core option to enable/disable
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Alternatives</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">BIP-157/158 (Recommended)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Server creates deterministic filters</li>
            <li>Client downloads and checks locally</li>
            <li>No privacy leak to server</li>
            <li>Server cost bounded</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Electrum Protocol</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Query by address/script hash</li>
            <li>Trusted server model</li>
            <li>Simple implementation</li>
            <li>Privacy depends on server</li>
          </ul>
        </div>
      </div>

      <Callout type="success" title="Lessons Learned">
        <p>
          BIP-37's failure taught important lessons: protocols should minimize what clients
          reveal to servers, and computation costs should be borne by the party making
          requests. BIP-157/158's design explicitly addresses these issues by having the
          server create filters and the client do the filtering work locally.
        </p>
      </Callout>
    </LessonLayout>
  );
}
