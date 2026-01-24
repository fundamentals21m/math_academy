import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { HandshakeSimulator } from '@/components/visualizations';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BOLT #8: Encrypted Transport</h2>

      <HandshakeSimulator className="mb-8" />

      <p className="mb-4">
        BOLT #8 specifies the encrypted and authenticated communication protocol between Lightning
        nodes. It uses the Noise Protocol Framework to establish secure channels with forward
        secrecy.
      </p>

      <Callout type="info" title="Why Start with BOLT #8?">
        Although numbered 8, this specification is foundational. All Lightning communication
        happens over an encrypted transport layer, so understanding it first provides context
        for all other protocol messages.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Noise_XK Handshake</h3>

      <p className="mb-4">
        Lightning uses the Noise_XK handshake pattern, where:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>X:</strong> The initiator's static key is transmitted (encrypted)</li>
        <li><strong>K:</strong> The responder's static key is known ahead of time</li>
      </ul>

      <Definition title="Noise Protocol Framework">
        A framework for building cryptographic protocols. It provides patterns for key exchange
        and message encryption using Diffie-Hellman operations, symmetric encryption, and hashing.
      </Definition>

      <p className="mb-4">
        The handshake consists of three "acts," requiring 1.5 round trips to complete:
      </p>

      <Example title="Three-Act Handshake">
        <div className="space-y-4">
          <div>
            <strong>Act One (50 bytes):</strong> Initiator → Responder
            <p className="text-sm text-dark-300 mt-1">
              Initiator sends ephemeral public key + encrypted payload
            </p>
          </div>
          <div>
            <strong>Act Two (50 bytes):</strong> Responder → Initiator
            <p className="text-sm text-dark-300 mt-1">
              Responder sends ephemeral public key + encrypted payload
            </p>
          </div>
          <div>
            <strong>Act Three (66 bytes):</strong> Initiator → Responder
            <p className="text-sm text-dark-300 mt-1">
              Initiator sends encrypted static public key + authentication tag
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Cryptographic Primitives</h3>

      <p className="mb-4">
        The Lightning transport layer uses three core cryptographic building blocks:
      </p>

      <Definition title="Elliptic Curve: secp256k1">
        The same elliptic curve used by Bitcoin. All key pairs and Diffie-Hellman operations use
        secp256k1, ensuring compatibility with Bitcoin's cryptographic ecosystem.
      </Definition>

      <Definition title="Hash Function: SHA-256">
        Used for key derivation, chaining, and message authentication. The hash of all exchanged
        handshake data (h) prevents man-in-the-middle attacks.
      </Definition>

      <Definition title="AEAD Cipher: ChaCha20-Poly1305">
        Authenticated Encryption with Associated Data. Provides both confidentiality (ChaCha20
        stream cipher) and integrity (Poly1305 MAC) for all messages.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Handshake in Detail</h3>

      <Theorem title="Act One: Initiator's Opening">
        <div className="space-y-2">
          <p>The initiator (who knows the responder's public key) sends:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Generate ephemeral key pair (e, e.pub)</li>
            <li>Perform ECDH: es = ECDH(e, rs) where rs is responder's static key</li>
            <li>Derive encryption key from es using HKDF</li>
            <li>Send: version (1 byte) + e.pub (33 bytes) + encrypted tag (16 bytes)</li>
          </ol>
        </div>
      </Theorem>

      <Theorem title="Act Two: Responder's Reply">
        <div className="space-y-2">
          <p>The responder receives Act One, validates, and responds:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Generate ephemeral key pair (e, e.pub)</li>
            <li>Perform ECDH: ee = ECDH(e, re) where re is initiator's ephemeral key</li>
            <li>Perform ECDH: es = ECDH(s, re) using own static key</li>
            <li>Derive encryption key from combined secrets</li>
            <li>Send: version (1 byte) + e.pub (33 bytes) + encrypted tag (16 bytes)</li>
          </ol>
        </div>
      </Theorem>

      <Theorem title="Act Three: Initiator's Authentication">
        <div className="space-y-2">
          <p>The initiator completes authentication:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Perform ECDH: ee = ECDH(e, re) with responder's ephemeral key</li>
            <li>Perform ECDH: se = ECDH(s, re) using own static key</li>
            <li>Encrypt own static public key</li>
            <li>Send: version (1 byte) + encrypted static key (49 bytes) + tag (16 bytes)</li>
          </ol>
        </div>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Post-Handshake Encryption</h3>

      <p className="mb-4">
        After the handshake completes, both parties derive symmetric sending and receiving keys.
        All subsequent messages are encrypted using ChaCha20-Poly1305.
      </p>

      <Definition title="Message Encryption Format">
        <p className="mb-2">Each encrypted message contains:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Length (2 bytes):</strong> Encrypted message length (big-endian)</li>
          <li><strong>Length MAC (16 bytes):</strong> Authentication tag for length</li>
          <li><strong>Ciphertext (variable):</strong> Encrypted message body</li>
          <li><strong>Body MAC (16 bytes):</strong> Authentication tag for body</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Rotation</h3>

      <p className="mb-4">
        To maintain forward secrecy, encryption keys are rotated every 1000 messages. This limits
        the damage if a key is compromised—only messages encrypted with that specific key can be
        decrypted.
      </p>

      <Example title="Key Rotation Process">
        <ol className="list-decimal list-inside space-y-2">
          <li>After encrypting/decrypting 1000 messages with key k</li>
          <li>Derive new key: k' = SHA256(k)</li>
          <li>Reset nonce counter to 0</li>
          <li>Securely delete old key k</li>
        </ol>
      </Example>

      <Callout type="success" title="Security Properties">
        The Noise_XK handshake provides:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Forward Secrecy:</strong> Past sessions remain secure if keys are compromised</li>
          <li><strong>Identity Hiding:</strong> Initiator's identity protected from passive observers</li>
          <li><strong>Mutual Authentication:</strong> Both parties prove their identity</li>
          <li><strong>Replay Protection:</strong> Nonces prevent message replay attacks</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Connection Ports</h3>

      <p className="mb-4">
        Lightning nodes use standardized TCP ports for different networks:
      </p>

      <Example title="Standard Lightning Ports">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>9735:</strong> Bitcoin mainnet</li>
          <li><strong>19735:</strong> Bitcoin testnet</li>
          <li><strong>39735:</strong> Bitcoin signet</li>
        </ul>
      </Example>

      <Callout type="warning" title="Connection Handling">
        Nodes MUST only maintain a single connection to each peer. If a duplicate connection is
        detected, the newer connection should be dropped. The specification defines rules for
        determining which connection to keep based on node IDs.
      </Callout>
    </LessonLayout>
  );
}
