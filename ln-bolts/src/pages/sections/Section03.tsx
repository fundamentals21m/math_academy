import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BOLT #1: Message Structure</h2>

      <p className="mb-4">
        BOLT #1 defines the base protocol for Lightning Network messaging. All communication
        between nodes follows this message format, which runs on top of the encrypted transport
        layer defined in BOLT #8.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Message Format</h3>

      <p className="mb-4">
        Every Lightning message consists of a 2-byte type field followed by a variable-length
        payload. The maximum message size is 65,535 bytes (limited by the encrypted transport).
      </p>

      <Definition title="Message Structure">
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2">
          <p>| type (2 bytes) | payload (variable) |</p>
        </div>
        <p className="mt-2">
          The type field is encoded as a big-endian unsigned 16-bit integer.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Message Type Ranges</h3>

      <p className="mb-4">
        Message types are organized into ranges based on their function:
      </p>

      <Example title="Message Type Categories">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Type Range</th>
              <th className="text-left py-2">Category</th>
            </tr>
          </thead>
          <tbody className="space-y-1">
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">0-31</td>
              <td className="py-2">Setup &amp; Control</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">32-127</td>
              <td className="py-2">Channel</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">128-255</td>
              <td className="py-2">Commitment</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">256-511</td>
              <td className="py-2">Routing</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">32768-65535</td>
              <td className="py-2">Custom/Extension</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Theorem title="The 'It's OK to be Odd' Rule">
        A fundamental rule in Lightning: messages with <strong>odd</strong> type numbers are
        optional and can be safely ignored if not understood. Messages with <strong>even</strong>
        type numbers are mandatory and must be understood—receiving an unknown even-type message
        should result in connection failure.
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">TLV (Type-Length-Value) Encoding</h3>

      <p className="mb-4">
        Many Lightning messages use TLV streams for extensibility. TLV encoding allows adding
        new fields to messages without breaking backward compatibility.
      </p>

      <Definition title="TLV Record Format">
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2">
          <p>| type (BigSize) | length (BigSize) | value (length bytes) |</p>
        </div>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>type:</strong> Identifies the field meaning</li>
          <li><strong>length:</strong> Number of bytes in value</li>
          <li><strong>value:</strong> The actual field data</li>
        </ul>
      </Definition>

      <Definition title="BigSize Encoding">
        A variable-length unsigned integer encoding:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>0x00-0xFC:</strong> 1 byte (value as-is)</li>
          <li><strong>0xFD:</strong> 3 bytes total (0xFD + 2-byte value)</li>
          <li><strong>0xFE:</strong> 5 bytes total (0xFE + 4-byte value)</li>
          <li><strong>0xFF:</strong> 9 bytes total (0xFF + 8-byte value)</li>
        </ul>
      </Definition>

      <Callout type="info" title="TLV Ordering">
        TLV records MUST appear in strictly increasing order by type. This enables canonical
        encoding and efficient parsing. Duplicate types are not allowed.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Init Message</h3>

      <p className="mb-4">
        The first message after the handshake is the <code className="bg-dark-800 px-1 rounded">init</code>
        message (type 16). Both peers send this to establish their capabilities.
      </p>

      <Definition title="Init Message Format">
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>type: 16</p>
          <p>gflen: 2 bytes (global features length)</p>
          <p>globalfeatures: gflen bytes</p>
          <p>flen: 2 bytes (features length)</p>
          <p>features: flen bytes</p>
          <p>tlvs: init_tlvs TLV stream</p>
        </div>
      </Definition>

      <p className="mb-4 mt-4">
        The features field is a bitmask of supported protocol features. Bits are numbered from
        the least significant bit (bit 0).
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Error and Warning Messages</h3>

      <Definition title="Error Message (type 17)">
        Indicates a fatal error condition. Upon receiving an error, the connection or affected
        channel should be closed.
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes (or all zeros for connection-level)</p>
          <p>len: 2 bytes</p>
          <p>data: len bytes (human-readable error message)</p>
        </div>
      </Definition>

      <Definition title="Warning Message (type 1)">
        A non-fatal warning that doesn't require closing the connection or channel. Allows nodes
        to communicate issues without terminating the relationship.
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>len: 2 bytes</p>
          <p>data: len bytes (human-readable warning)</p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Ping and Pong</h3>

      <p className="mb-4">
        The ping/pong mechanism serves two purposes: keeping connections alive and generating
        cover traffic to improve privacy.
      </p>

      <Example title="Ping Message (type 18)">
        <div className="font-mono text-sm bg-dark-800 p-3 rounded space-y-1">
          <p>num_pong_bytes: 2 bytes (requested response size)</p>
          <p>byteslen: 2 bytes</p>
          <p>ignored: byteslen bytes (random padding)</p>
        </div>
        <p className="mt-2 text-sm text-dark-300">
          The sender can request a specific pong size (up to 65531 bytes) for bandwidth probing.
        </p>
      </Example>

      <Example title="Pong Message (type 19)">
        <div className="font-mono text-sm bg-dark-800 p-3 rounded space-y-1">
          <p>byteslen: 2 bytes</p>
          <p>ignored: byteslen bytes (random padding)</p>
        </div>
        <p className="mt-2 text-sm text-dark-300">
          The pong must be exactly num_pong_bytes from the ping (if ≤ 65531).
        </p>
      </Example>

      <Callout type="warning" title="Ping Timeout">
        If a pong is not received within a reasonable time (implementations typically use 30
        seconds), the connection should be considered failed and closed.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Data Representation</h3>

      <p className="mb-4">
        All multi-byte values in Lightning messages use big-endian byte order:
      </p>

      <Example title="Integer Encoding Examples">
        <table className="w-full text-sm font-mono">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Value</th>
              <th className="text-left py-2">Bytes (hex)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">u16</td>
              <td className="py-2">256</td>
              <td className="py-2">01 00</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">u32</td>
              <td className="py-2">16777216</td>
              <td className="py-2">01 00 00 00</td>
            </tr>
            <tr>
              <td className="py-2">u64</td>
              <td className="py-2">1000000</td>
              <td className="py-2">00 00 00 00 00 0f 42 40</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="Signature Format">
        All signatures in Lightning use the 64-byte compact format (r, s) without the recovery
        byte. Signatures must be "low-S" normalized per BIP-0062.
      </Callout>
    </LessonLayout>
  );
}
