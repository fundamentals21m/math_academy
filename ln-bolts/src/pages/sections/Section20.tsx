import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BOLT #10: DNS Bootstrap</h2>

      <p className="mb-4">
        BOLT #10 defines how new Lightning nodes discover their initial peers using DNS.
        This bootstrap mechanism allows nodes to join the network without hardcoded peer lists.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bootstrap Problem</h3>

      <p className="mb-4">
        When a Lightning node starts for the first time, it faces a chicken-and-egg problem:
      </p>

      <Example title="The Bootstrap Challenge">
        <ul className="list-disc list-inside space-y-2">
          <li>To learn about nodes, you need to connect to the gossip network</li>
          <li>To connect to the gossip network, you need to know some node addresses</li>
          <li>New nodes have no prior knowledge of any peers</li>
        </ul>
      </Example>

      <Definition title="DNS Seeds">
        DNS seeds are authoritative DNS servers that respond to queries with Lightning node
        addresses. They sample from known nodes and return a random subset.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Query Format</h3>

      <p className="mb-4">
        DNS queries use a structured subdomain format with conditions:
      </p>

      <Theorem title="Query Subdomain Format">
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2">
          [conditions].&lt;seed-root-domain&gt;
        </div>
        Conditions are dot-separated key-value pairs:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><code className="bg-dark-800 px-1 rounded">r</code> = realm (network)</li>
          <li><code className="bg-dark-800 px-1 rounded">a</code> = address types</li>
          <li><code className="bg-dark-800 px-1 rounded">l</code> = specific node ID</li>
          <li><code className="bg-dark-800 px-1 rounded">n</code> = number of results</li>
        </ul>
      </Theorem>

      <Example title="DNS Query Examples">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Query</th>
              <th className="text-left py-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono text-xs">r0.a2.n10.seed.example.com</td>
              <td className="py-2">10 IPv4 Bitcoin nodes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono text-xs">r0.a6.seed.example.com</td>
              <td className="py-2">IPv4+IPv6 Bitcoin nodes</td>
            </tr>
            <tr>
              <td className="py-2 font-mono text-xs">l[node_id].seed.example.com</td>
              <td className="py-2">Address of specific node</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Condition Parameters</h3>

      <Definition title="Realm (r)">
        Specifies which blockchain network:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>r0:</strong> Bitcoin (default if omitted)</li>
          <li>Other realms may be defined for other chains</li>
        </ul>
      </Definition>

      <Definition title="Address Types (a)">
        A bitfield specifying desired address types:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Bit 0:</strong> IPv4 (value 1)</li>
          <li><strong>Bit 1:</strong> IPv6 (value 2)</li>
          <li><strong>a3:</strong> Both IPv4 and IPv6 (1+2)</li>
          <li><strong>a6:</strong> IPv4 + IPv6 (alias for a3 with IPv6 priority)</li>
        </ul>
      </Definition>

      <Definition title="Node Lookup (l)">
        Request the address of a specific node by providing its bech32-encoded node ID:
        <div className="font-mono text-xs bg-dark-800 p-3 rounded mt-2">
          l[bech32_node_id].seed.example.com
        </div>
        Useful for reconnecting to a known peer whose address may have changed.
      </Definition>

      <Definition title="Result Count (n)">
        Request a specific number of results:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Default:</strong> 25 results</li>
          <li><strong>Maximum:</strong> Implementation dependent</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Response Types</h3>

      <p className="mb-4">
        DNS seeds respond to different query types:
      </p>

      <Example title="DNS Record Types">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Response</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">A</td>
              <td className="py-2">IPv4 addresses (assumes port 9735)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">AAAA</td>
              <td className="py-2">IPv6 addresses (assumes port 9735)</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">SRV</td>
              <td className="py-2">Hostname + port (for non-standard ports)</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="SRV Records">
        SRV records return virtual hostnames that encode the node ID:
        <div className="font-mono text-xs bg-dark-800 p-3 rounded mt-2">
          [bech32_node_id].seed.example.com:port
        </div>
        This allows nodes on non-standard ports to be discovered.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Seed Requirements</h3>

      <Theorem title="DNS Seed Behavior">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>MUST select random subset of known listening nodes</li>
          <li>MUST NOT return the same set every time</li>
          <li>SHOULD verify nodes are reachable before including them</li>
          <li>SHOULD filter by requested address types</li>
          <li>MUST support at least A and AAAA queries</li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Considerations</h3>

      <Callout type="warning" title="Trust Considerations">
        <ul className="list-disc list-inside space-y-1">
          <li>DNS seeds can see who's bootstrapping (privacy concern)</li>
          <li>Malicious seeds could return attacker-controlled nodes</li>
          <li>Use multiple seeds from different operators</li>
          <li>Verify node IDs after connecting (BOLT #8 authenticates)</li>
        </ul>
      </Callout>

      <Example title="Mitigation Strategies">
        <ul className="list-disc list-inside space-y-2">
          <li>Query multiple independent DNS seeds</li>
          <li>Cache successful connections for future bootstrap</li>
          <li>Allow users to configure manual seed nodes</li>
          <li>Use DNS-over-HTTPS/TLS for query privacy</li>
        </ul>
      </Example>
    </LessonLayout>
  );
}
