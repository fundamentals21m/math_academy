import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-157: Client Side Block Filtering</h2>

      <p className="mb-4">
        BIP-157 defines a protocol for lightweight clients to download compact block filters
        from full nodes. Unlike BIP-37 Bloom filters, the filtering happens client-side,
        preserving privacy while enabling efficient light client operation.
      </p>

      <Callout type="info" title="BIP-37 Replacement">
        <p>
          BIP-157/158 are the recommended replacement for deprecated BIP-37 Bloom filters.
          The client downloads filters and checks them locally—no privacy leak to peers.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Insight</h3>

      <p className="mb-4">
        The fundamental difference from BIP-37:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">BIP-37 (Server-Side)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Client sends filter to server</li>
            <li>Server filters data</li>
            <li>Server learns client's addresses</li>
            <li>Privacy leak!</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">BIP-157 (Client-Side)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Server creates deterministic filter</li>
            <li>Client downloads filter</li>
            <li>Client checks locally</li>
            <li>Privacy preserved!</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Messages</h3>

      <Definition title="BIP-157 Messages">
        <p>
          Messages for requesting and delivering compact block filters and filter headers.
        </p>
      </Definition>

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
              <td className="py-3 font-mono text-amber-400">getcfilters</td>
              <td>Request filters for block range</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">cfilter</td>
              <td>Send a compact filter</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">getcfheaders</td>
              <td>Request filter headers</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">cfheaders</td>
              <td>Send filter headers</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">getcfcheckpt</td>
              <td>Request filter checkpoints</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Filter Chain</h3>

      <p className="mb-4">
        Filters form a hash chain for verification:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Filter header chain:</p>
        <p className="text-dark-300">filter_header[n] = hash(filter[n] || filter_header[n-1])</p>
        <p className="text-dark-400 mt-3 mb-2"># Verification:</p>
        <p className="text-dark-300">1. Get filter headers from multiple peers</p>
        <p className="text-dark-300">2. Compare to detect dishonest peers</p>
        <p className="text-dark-300">3. Download filters and verify against headers</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Client Workflow</h3>

      <Example title="Light Client Operation">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Sync filter headers:</p>
            <p className="text-dark-300">client → peer: getcfheaders(start, stop)</p>
            <p className="text-dark-300">peer → client: cfheaders(...)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. For each new block, get filter:</p>
            <p className="text-dark-300">client → peer: getcfilters(start, stop)</p>
            <p className="text-dark-300">peer → client: cfilter(block_hash, filter)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Check filter against wallet:</p>
            <p className="text-dark-300">if filter.match(my_addresses):</p>
            <p className="text-amber-400 ml-4">download full block for details</p>
            <p className="text-dark-300">else:</p>
            <p className="text-dark-500 ml-4">skip block (no relevant txs)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Filter Types</h3>

      <p className="mb-4">
        BIP-157 defines filter types for different use cases:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Basic (0x00):</strong> All scriptPubKeys in outputs + prevout scriptPubKeys
            being spent
          </li>
          <li>
            <strong>Future types:</strong> Can be defined for different filtering needs
          </li>
        </ul>
        <p className="text-dark-500 text-sm mt-3">
          Basic filter is sufficient for most wallet use cases
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Checkpoints</h3>

      <p className="mb-4">
        Checkpoints enable efficient initial sync:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Checkpoint interval: 1000 blocks</p>
        <p className="text-dark-300">getcfcheckpt → filter_headers at heights 999, 1999, 2999...</p>
        <p className="text-dark-400 mt-3 mb-2"># Benefit:</p>
        <p className="text-dark-300">- Quick sync to recent history</p>
        <p className="text-dark-300">- Verify intermediate headers against checkpoints</p>
        <p className="text-dark-300">- Detect dishonest peers early</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bandwidth Analysis</h3>

      <Callout type="info" title="Filter Sizes">
        <p>
          Basic filters are typically 10-20 KB per block (vs 1-4 MB for full blocks).
          A full sync of all filters uses ~10-20 GB, but clients typically only need
          recent filters for ongoing operation.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Service Bit</h3>

      <p className="mb-4">
        Nodes advertise filter support:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="font-mono text-sm text-dark-300">
          <p className="text-amber-400">NODE_COMPACT_FILTERS = 1 &lt;&lt; 6</p>
          <p className="text-dark-500 mt-2">
            Nodes with this bit serve compact block filters via BIP-157
          </p>
        </div>
      </div>

      <Callout type="success" title="Privacy-Preserving Light Clients">
        <p>
          BIP-157 enables truly private light clients. Unlike BIP-37, the server never
          learns which addresses the client cares about. Combined with BIP-158's efficient
          filter construction, it's the foundation for next-generation lightweight wallets.
        </p>
      </Callout>
    </LessonLayout>
  );
}
