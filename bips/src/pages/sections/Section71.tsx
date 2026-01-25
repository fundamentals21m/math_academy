import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section71() {
  return (
    <LessonLayout sectionId={71}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-324: Version 2 P2P Transport</h2>

      <p className="mb-4">
        BIP-324 introduces encrypted and authenticated peer-to-peer communication for
        Bitcoin. V2 transport protects against passive eavesdropping and makes active
        man-in-the-middle attacks detectable.
      </p>

      <Callout type="info" title="Network Layer Privacy">
        <p>
          Bitcoin's original P2P protocol is unencrypted. ISPs and network observers can
          see all messages. BIP-324 adds opportunistic encryption, improving privacy
          without requiring trust.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Unencrypted P2P traffic enables attacks:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Passive surveillance:</strong> Observers see all transactions/blocks
          </li>
          <li>
            <strong>Transaction origin:</strong> First relay reveals likely source
          </li>
          <li>
            <strong>Network mapping:</strong> Topology easily discoverable
          </li>
          <li>
            <strong>Traffic analysis:</strong> Message patterns reveal activity
          </li>
          <li>
            <strong>Eclipse attacks:</strong> Easier when traffic is visible
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">V2 Transport Features</h3>

      <Definition title="BIP-324 Features">
        <p>
          Encrypted, authenticated communication with pseudorandom byte stream that
          resists traffic analysis and censorship.
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Encryption:</strong> ChaCha20-Poly1305 AEAD cipher
          </li>
          <li>
            <strong>Key exchange:</strong> Elliptic Curve Diffie-Hellman (secp256k1)
          </li>
          <li>
            <strong>Authentication:</strong> Optional session ID verification
          </li>
          <li>
            <strong>Byte-stream:</strong> No distinguishing patterns in traffic
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Handshake</h3>

      <Example title="V2 Connection Handshake">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Initiator sends public key:</p>
            <p className="text-dark-300">I → R: ellswift_pubkey_i (64 bytes)</p>
            <p className="text-dark-500 ml-4">ElligatorSwift encoding (indistinguishable from random)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Responder sends public key + encrypted garbage:</p>
            <p className="text-dark-300">R → I: ellswift_pubkey_r || garbage_auth || garbage</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Both derive shared secrets:</p>
            <p className="text-dark-300">shared_secret = ECDH(my_privkey, their_pubkey)</p>
            <p className="text-amber-400">encryption_keys = HKDF(shared_secret, ...)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 4. Initiator sends version packet + garbage:</p>
            <p className="text-dark-300">I → R: encrypted(version_packet) || garbage</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 5. Encrypted communication begins</p>
            <p className="text-emerald-400">All subsequent messages encrypted</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">ElligatorSwift</h3>

      <p className="mb-4">
        Public keys are encoded to look random:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Normal public key:</strong> Recognizable 33-byte compressed format
          </li>
          <li>
            <strong>ElligatorSwift:</strong> 64 bytes, indistinguishable from random
          </li>
          <li>
            <strong>Benefit:</strong> Traffic doesn't reveal "this is Bitcoin"
          </li>
          <li>
            <strong>Censorship resistance:</strong> Harder to block Bitcoin traffic
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Packet Structure</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># V2 encrypted packet:</p>
        <p className="text-dark-300">length: 3 bytes (encrypted)</p>
        <p className="text-dark-300">header: 1 byte (encrypted)</p>
        <p className="text-dark-300">contents: variable (encrypted)</p>
        <p className="text-amber-400">tag: 16 bytes (Poly1305 MAC)</p>
        <p className="text-dark-500 mt-3">
          Length field prevents traffic analysis of message sizes
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Short Message IDs</h3>

      <p className="mb-4">
        V2 uses 1-byte message type IDs instead of 12-byte ASCII names:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">V1 Name</th>
              <th className="text-left py-3 text-dark-300">V2 ID</th>
              <th className="text-left py-3 text-dark-300">Savings</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">"inv"</td>
              <td className="font-mono text-amber-400">0x01</td>
              <td>11 bytes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">"tx"</td>
              <td className="font-mono text-amber-400">0x02</td>
              <td>11 bytes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">"getdata"</td>
              <td className="font-mono text-amber-400">0x03</td>
              <td>11 bytes</td>
            </tr>
            <tr>
              <td className="py-3 font-mono">"block"</td>
              <td className="font-mono text-amber-400">0x06</td>
              <td>11 bytes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Opportunistic Encryption</h3>

      <Callout type="warning" title="Not Full Authentication">
        <p>
          BIP-324 provides encryption but doesn't authenticate peers by default. An
          active MITM can still intercept connections. Optional session ID comparison
          can detect this, but requires out-of-band verification.
        </p>
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-2">Threat model:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Passive observer:</strong> ✅ Defeated (can't read traffic)
          </li>
          <li>
            <strong>Active MITM:</strong> ⚠️ Detectable via session ID, not prevented
          </li>
          <li>
            <strong>Traffic analysis:</strong> ✅ Significantly reduced
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Backward Compatibility</h3>

      <p className="mb-4">
        V2 coexists with V1 connections:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Connection negotiation:</p>
        <p className="text-dark-300">Initiator sends V2 handshake bytes</p>
        <p className="text-dark-300">If responder doesn't understand:</p>
        <p className="text-dark-500 ml-4">Falls back to V1 (starts with "version" message)</p>
        <p className="text-dark-300">If responder supports V2:</p>
        <p className="text-emerald-400 ml-4">Continues with encrypted handshake</p>
      </div>

      <Callout type="success" title="Network Privacy Upgrade">
        <p>
          BIP-324 is a significant privacy upgrade for Bitcoin's network layer. While
          not a complete solution (Tor/I2P still recommended for strong anonymity), it
          raises the bar for passive surveillance and makes Bitcoin traffic harder to
          identify and censor.
        </p>
      </Callout>
    </LessonLayout>
  );
}
