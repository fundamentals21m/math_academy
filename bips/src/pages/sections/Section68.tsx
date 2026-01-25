import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-155: addrv2 Message</h2>

      <p className="mb-4">
        BIP-155 introduced the addrv2 message to support longer network addresses. The
        original addr message only supported IPv4/IPv6, but addrv2 enables Tor v3 onion
        addresses, I2P, CJDNS, and future network types.
      </p>

      <Callout type="info" title="Future-Proof Addressing">
        <p>
          Tor upgraded from v2 (16 character) to v3 (56 character) onion addresses.
          The old addr message couldn't fit them—addrv2 solved this.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        The original addr message had limitations:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Fixed 16-byte address field (fits IPv6)</li>
          <li>Tor v3 addresses are 32 bytes (public key)</li>
          <li>I2P addresses are also longer</li>
          <li>No extensibility for new network types</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">addrv2 Format</h3>

      <Definition title="addrv2 Message">
        <p>
          A variable-length address message that specifies network type and address
          length, allowing any size address from any network protocol.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># addrv2 entry format:</p>
        <p className="text-dark-300">time: uint32 (last seen timestamp)</p>
        <p className="text-dark-300">services: compactSize + uint64</p>
        <p className="text-amber-400">networkID: uint8 (network type)</p>
        <p className="text-amber-400">addrLen: compactSize (address length)</p>
        <p className="text-amber-400">addr: [addrLen bytes]</p>
        <p className="text-dark-300">port: uint16</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Network Types</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">ID</th>
              <th className="text-left py-3 text-dark-300">Network</th>
              <th className="text-left py-3 text-dark-300">Address Size</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">0x01</td>
              <td>IPv4</td>
              <td>4 bytes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">0x02</td>
              <td>IPv6</td>
              <td>16 bytes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">0x03</td>
              <td className="text-amber-400">Tor v2 (deprecated)</td>
              <td>10 bytes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">0x04</td>
              <td className="text-amber-400">Tor v3</td>
              <td>32 bytes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">0x05</td>
              <td>I2P</td>
              <td>32 bytes</td>
            </tr>
            <tr>
              <td className="py-3 font-mono">0x06</td>
              <td>CJDNS</td>
              <td>16 bytes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Negotiation</h3>

      <p className="mb-4">
        Nodes signal addrv2 support with a sendaddrv2 message:
      </p>

      <Example title="addrv2 Negotiation">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># During connection setup:</p>
            <p className="text-dark-300">A ↔ B: version/verack</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Signal addrv2 support:</p>
            <p className="text-dark-300">A → B: sendaddrv2</p>
            <p className="text-dark-300">B → A: sendaddrv2</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Both support addrv2:</p>
            <p className="text-amber-400">Use addrv2 for address announcements</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># One doesn't support:</p>
            <p className="text-dark-300">Fall back to old addr messages</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Tor v3 Support</h3>

      <p className="mb-4">
        Tor v3 onion addresses use Ed25519 public keys:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="font-mono text-sm text-dark-300">
          <p className="text-dark-400 mb-2"># Tor v3 onion address:</p>
          <p className="break-all">pg6mmjiyjmcrsslvykfwnntlaru7p5svn6y2ymmju6nubxndf4pscryd.onion</p>
          <p className="text-dark-400 mt-3 mb-2"># Decoded to:</p>
          <p>32-byte Ed25519 public key</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Backward Compatibility</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Old Nodes</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Don't send sendaddrv2</li>
            <li>Receive only addr messages</li>
            <li>Can't learn Tor v3 addresses</li>
            <li>Still function for IPv4/IPv6</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">New Nodes</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Send sendaddrv2 to all peers</li>
            <li>Track which peers support it</li>
            <li>Use appropriate format per peer</li>
            <li>Full network visibility</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Benefits</h3>

      <Callout type="info" title="Anonymous Networks">
        <p>
          Supporting Tor v3 and I2P helps network privacy:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Nodes can run exclusively on Tor v3</li>
          <li>No IP address exposure possible</li>
          <li>I2P provides additional anonymity option</li>
          <li>More diverse network topology</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Extensibility</h3>

      <p className="mb-4">
        addrv2 is designed for future networks:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Network IDs 0x07-0xFF reserved for future use</li>
          <li>Variable address length accommodates any scheme</li>
          <li>Unknown network types can be relayed (future-compatible)</li>
          <li>No protocol changes needed for new networks</li>
        </ul>
      </div>

      <Callout type="success" title="Network Diversity">
        <p>
          BIP-155 ensures Bitcoin can run on any network layer. As privacy-preserving
          networks evolve and new addressing schemes emerge, the P2P protocol can
          accommodate them without further changes.
        </p>
      </Callout>
    </LessonLayout>
  );
}
