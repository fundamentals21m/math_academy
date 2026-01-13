import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Applications</h2>

      <p className="mb-4">
        secp256k1 powers far more than just Bitcoin. The same mathematical foundation enables
        a wide ecosystem of cryptographic applications across multiple blockchains and protocols.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Ethereum</h3>

      <p className="mb-4">
        Ethereum uses the same secp256k1 curve as Bitcoin, but with some key differences:
      </p>

      <Definition title="ECRECOVER">
        <p>
          Ethereum's signature verification is exposed as a precompiled contract at address{' '}
          <code className="text-amber-400">0x01</code>. Given a message hash and signature,{' '}
          <InlineMath>\text{'{ecrecover}'}</InlineMath> returns the signer's address.
        </p>
        <div className="bg-dark-800 rounded-lg p-4 mt-3 font-mono text-sm">
          <p><InlineMath>\text{'{address}'} = \text{'{ecrecover}'}(hash, v, r, s)</InlineMath></p>
        </div>
        <p className="mt-3 text-dark-400">
          This enables on-chain signature verification without revealing the public key until
          the first transaction.
        </p>
      </Definition>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Bitcoin</p>
          <ul className="text-sm space-y-1 text-dark-300">
            <li>• Address from pubkey hash</li>
            <li>• Signature in transaction</li>
            <li>• DER-encoded signatures (legacy)</li>
            <li>• Schnorr via Taproot</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-purple-400 font-bold mb-2">Ethereum</p>
          <ul className="text-sm space-y-1 text-dark-300">
            <li>• Address from pubkey directly</li>
            <li>• Recovery ID in signature</li>
            <li>• Fixed 65-byte signatures</li>
            <li>• ECDSA only (no Schnorr)</li>
          </ul>
        </div>
      </div>

      <Example title="Ethereum Address Derivation">
        <p>Unlike Bitcoin, Ethereum derives addresses directly from the public key:</p>
        <MathBlock>
          {`\\text{Address} = \\text{keccak256}(Q_x || Q_y)[12..31]`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Take the last 20 bytes (160 bits) of the Keccak-256 hash of the uncompressed public
          key (without the 0x04 prefix).
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning Network</h3>

      <p className="mb-4">
        The Lightning Network uses secp256k1 extensively for channel management and payment
        routing:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Channel funding:</strong> 2-of-2 multisig between channel partners
        </li>
        <li>
          <strong>HTLCs:</strong> Hash Time Locked Contracts for atomic payments
        </li>
        <li>
          <strong>Revocation:</strong> Punishment keys for dishonest channel closes
        </li>
        <li>
          <strong>Onion routing:</strong> Point multiplication for route blinding
        </li>
      </ul>

      <Definition title="Payment Channels">
        <p>
          A Lightning channel is backed by a Bitcoin 2-of-2 multisig. Updates are signed
          off-chain, and only the final state is broadcast. This requires sophisticated
          cryptographic protocols built on secp256k1.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Adaptor Signatures</h3>

      <p className="mb-4">
        Adaptor signatures are a powerful cryptographic primitive that enables <strong>atomic
        swaps</strong> and <strong>conditional payments</strong>.
      </p>

      <Definition title="Adaptor Signature">
        <p>
          An adaptor signature <InlineMath>(\tilde R, \tilde s)</InlineMath> is an "incomplete"
          signature that can only be completed with knowledge of a secret{' '}
          <InlineMath>t</InlineMath>:
        </p>
        <div className="bg-dark-800 rounded-lg p-4 mt-3 font-mono text-sm space-y-2">
          <p><strong>Create adaptor:</strong></p>
          <p><InlineMath>\tilde R = R + T</InlineMath> (where <InlineMath>T = tG</InlineMath>)</p>
          <p><InlineMath>\tilde s = k + H(\tilde R, Q, m) \cdot d</InlineMath></p>
          <p className="mt-3"><strong>Complete with secret:</strong></p>
          <p><InlineMath>s = \tilde s + t</InlineMath></p>
        </div>
      </Definition>

      <Example title="Cross-Chain Atomic Swap">
        <p>Alice wants to trade BTC for LTC with Bob:</p>
        <div className="mt-3 space-y-2 text-sm">
          <p>1. Alice picks secret <InlineMath>t</InlineMath>, publishes <InlineMath>T = tG</InlineMath></p>
          <p>2. Bob creates adaptor signature for his LTC payment</p>
          <p>3. Alice creates adaptor signature for her BTC payment</p>
          <p>4. When Alice claims BTC, she reveals <InlineMath>t</InlineMath></p>
          <p>5. Bob uses <InlineMath>t</InlineMath> to complete his signature and claim LTC</p>
        </div>
        <p className="mt-3 text-dark-400">
          Either both transactions happen, or neither does—atomic swap without hash-locking.
        </p>
      </Example>

      <Callout type="info" title="Scriptless Scripts">
        <p>
          Adaptor signatures enable "scriptless scripts"—complex conditions enforced through
          cryptography rather than on-chain scripts. This improves privacy (conditions aren't
          visible on-chain) and efficiency (smaller transactions).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Message Signing</h3>

      <p className="mb-4">
        Beyond transactions, secp256k1 signatures are used for general message authentication:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Proof of ownership:</strong> Prove you control an address without spending
        </li>
        <li>
          <strong>Login systems:</strong> "Sign in with Ethereum/Bitcoin"
        </li>
        <li>
          <strong>Data attestation:</strong> Sign off-chain data (oracles, state channels)
        </li>
        <li>
          <strong>Nostr:</strong> Decentralized social protocol using secp256k1 identities
        </li>
      </ul>

      <Definition title="Bitcoin Message Signing (BIP 137)">
        <p>
          Bitcoin wallets can sign arbitrary messages using a special prefix to prevent
          replay attacks:
        </p>
        <div className="bg-dark-800 rounded-lg p-4 mt-3 font-mono text-sm">
          <p>message_hash = SHA256(SHA256(</p>
          <p className="pl-4">"\x18Bitcoin Signed Message:\n" +</p>
          <p className="pl-4">varint(len(message)) +</p>
          <p className="pl-4">message</p>
          <p>))</p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Verifiable Random Functions (VRFs)
      </h3>

      <p className="mb-4">
        VRFs produce random outputs that can be verified as correctly computed from a given
        input and secret key:
      </p>

      <MathBlock>
        {`\\text{VRF}_{sk}(x) = H(x, sk \\cdot H'(x))`}
      </MathBlock>

      <p className="mb-4">
        Applications include:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Leader election:</strong> Randomly select validators in PoS</li>
        <li><strong>Lottery systems:</strong> Provably fair random selection</li>
        <li><strong>Private DNS:</strong> NSEC5 for authenticated denial of existence</li>
      </ul>

      <Callout type="success" title="The secp256k1 Ecosystem">
        <p>
          From Bitcoin to Ethereum to Lightning to Nostr, secp256k1 has become the de facto
          standard for blockchain cryptography. Its simplicity, efficiency, and extensive
          implementation support make it the foundation of a trillion-dollar ecosystem.
        </p>
      </Callout>
    </LessonLayout>
  );
}
