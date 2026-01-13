import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <h2>Communication Protocol Design</h2>

      <p>
        FROST requires a well-designed communication protocol for participants to
        exchange messages securely. The protocol must handle authentication, replay
        protection, and proper message serialization.
      </p>

      <h3>Message Types</h3>

      <Definition title="FROST Protocol Messages">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`DKG_ROUND1:    { i, commitments, proof }
DKG_ROUND2:    { i, { j: share_j } for each j }
PREPROCESS:    { i, [(D_ij, E_ij)] for each j }
SIGN_REQUEST:  { m, B }
SIGN_RESPONSE: { i, z_i }
SIGNATURE:     { R, z }`}
        </pre>
        <p className="mt-4">
          Each message type serves a specific purpose in the protocol and requires
          different handling.
        </p>
      </Definition>

      <h3>Serialization Formats</h3>

      <p>Several serialization formats are appropriate for FROST:</p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Protocol Buffers:</strong> Efficient binary format with strong typing
        </li>
        <li>
          <strong>CBOR:</strong> Compact Binary Object Representation, standardized
          and self-describing
        </li>
        <li>
          <strong>JSON:</strong> Human-readable, useful for debugging but less efficient
        </li>
      </ul>

      <Callout type="info">
        <strong>Interoperability:</strong> The IETF RFC 9591 specifies exact serialization
        formats for interoperable implementations. Custom implementations should follow
        the standard to enable cross-implementation compatibility.
      </Callout>

      <h3>Message Authentication</h3>

      <p>
        Each message must be authenticated to prevent tampering and verify the sender:
      </p>

      <Example title="Authenticated Message Format">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`msg = { payload }
signature = Sign(sk_i, payload)
send(msg || signature)

# Receiver:
verify(pk_i, msg.payload, signature)
if !valid:
    reject message`}
        </pre>
      </Example>

      <Definition title="Authentication Requirements">
        <ul className="list-disc list-inside space-y-2">
          <li>
            All participants must know each other's public keys before the protocol starts
          </li>
          <li>
            Messages include the sender's identity for routing and verification
          </li>
          <li>
            Authentication may use the FROST key shares themselves or separate identity keys
          </li>
        </ul>
      </Definition>

      <h3>Replay Protection</h3>

      <p>
        Replay attacks occur when an attacker captures a valid message and resends it
        later. Protection requires including context that makes each message unique:
      </p>

      <Example title="Replay-Protected Messages">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`msg = {
    seq_num: monotonically_increasing_counter,
    session_id: unique_per_signing_session,
    payload: actual_message_content
}`}
        </pre>
        <p className="mt-3">
          The receiver tracks the highest sequence number seen from each sender and
          rejects any message with a lower or equal sequence number.
        </p>
      </Example>

      <h3>Channel Security</h3>

      <Callout type="warning">
        <strong>Confidentiality Requirements:</strong>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>DKG_ROUND2:</strong> Contains secret shares, MUST be encrypted
            point-to-point
          </li>
          <li>
            <strong>SIGN_RESPONSE:</strong> Contains signature shares, should be
            encrypted to prevent aggregation by unauthorized parties
          </li>
          <li>
            <strong>Public messages:</strong> DKG_ROUND1, PREPROCESS, and final
            SIGNATURE can be broadcast
          </li>
        </ul>
      </Callout>

      <h3>Communication Topology</h3>

      <Definition title="Network Models">
        <p>FROST can operate under different network assumptions:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Star topology:</strong> All messages go through coordinator
            (simpler, single point of failure)
          </li>
          <li>
            <strong>Mesh topology:</strong> Participants communicate directly
            (more robust, more complex)
          </li>
          <li>
            <strong>Broadcast channel:</strong> Public messages visible to all
            (simplest for public data)
          </li>
        </ul>
      </Definition>

      <h3>Error Handling</h3>

      <Example title="Protocol Error Responses">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Invalid signature:</strong> Reject message, log sender for
            potential exclusion
          </li>
          <li>
            <strong>Missing message:</strong> Request retransmission with timeout
          </li>
          <li>
            <strong>Out-of-order message:</strong> Buffer or reject depending on
            message type
          </li>
          <li>
            <strong>Duplicate message:</strong> Ignore (idempotent processing)
          </li>
        </ul>
      </Example>
    </LessonLayout>
  );
}
