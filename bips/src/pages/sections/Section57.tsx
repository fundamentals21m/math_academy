import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-75: Out of Band Address Exchange</h2>

      <p className="mb-4">
        BIP-75 extended the BIP-70 payment protocol with identity verification and secure
        address exchange. It enabled parties to verify each other's identity before payment
        using PKI or other authentication methods.
      </p>

      <Callout type="warning" title="Deprecated with BIP-70">
        <p>
          Like BIP-70, BIP-75 is deprecated and not widely implemented. This section
          covers it for historical completeness and to understand secure payment identity
          concepts.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Goal</h3>

      <p className="mb-4">
        BIP-75 aimed to add identity exchange to Bitcoin payments:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Sender verification:</strong> Receiver verifies who is paying
          </li>
          <li>
            <strong>Receiver verification:</strong> Sender verifies payment destination
          </li>
          <li>
            <strong>Address freshness:</strong> Generate unique addresses per payment
          </li>
          <li>
            <strong>Compliance:</strong> Meet "Travel Rule" requirements for regulated entities
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Messages</h3>

      <Definition title="BIP-75 Message Types">
        <p>
          BIP-75 defined additional Protocol Buffer messages extending BIP-70 for
          bidirectional identity exchange.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># New message types:</p>
        <p className="text-amber-400">InvoiceRequest</p>
        <p className="text-dark-500 ml-4">- Sender requests payment details</p>
        <p className="text-dark-500 ml-4">- Includes sender's identity proof</p>
        <p className="text-amber-400 mt-2">EncryptedProtocolMessage</p>
        <p className="text-dark-500 ml-4">- Wraps messages with encryption</p>
        <p className="text-dark-500 ml-4">- Provides confidentiality</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Flow</h3>

      <Example title="BIP-75 Identity Exchange">
        <div className="space-y-3 text-dark-300">
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              <strong>InvoiceRequest:</strong> Payer sends request with identity (X.509 cert or other)
            </li>
            <li>
              <strong>Verification:</strong> Receiver verifies payer's identity claims
            </li>
            <li>
              <strong>PaymentRequest:</strong> Receiver responds with signed payment details
            </li>
            <li>
              <strong>Verification:</strong> Payer verifies receiver's identity
            </li>
            <li>
              <strong>Payment:</strong> Standard BIP-70 payment flow continues
            </li>
          </ol>
          <p className="text-dark-500 text-sm mt-3">
            Both parties know who they're transacting with before funds move
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Identity Mechanisms</h3>

      <p className="mb-4">
        BIP-75 supported multiple identity verification methods:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">X.509 Certificates</p>
          <p className="text-sm text-dark-300">
            Traditional PKI certificates from certificate authorities. Same as BIP-70
            merchant verification.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">PGP/GPG Keys</p>
          <p className="text-sm text-dark-300">
            Web of trust model using PGP public keys. More decentralized than X.509.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Bitcoin Addresses</p>
          <p className="text-sm text-dark-300">
            Use a known Bitcoin address to sign identity claims. Simple but requires
            out-of-band address verification.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Encryption</h3>

      <p className="mb-4">
        BIP-75 added message encryption:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>ECDH:</strong> Derive shared secret from parties' public keys
          </li>
          <li>
            <strong>AES-256-GCM:</strong> Encrypt message contents
          </li>
          <li>
            <strong>Authentication:</strong> Signed encrypted blobs prevent tampering
          </li>
          <li>
            <strong>Forward secrecy:</strong> Fresh keys for each exchange
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Regulatory Compliance</h3>

      <Callout type="info" title="Travel Rule">
        <p>
          The Financial Action Task Force (FATF) "Travel Rule" requires financial
          institutions to share sender/receiver information for transfers above
          certain thresholds. BIP-75 was designed partly to address this requirement.
        </p>
      </Callout>

      <p className="mb-4">
        For regulated entities, BIP-75 offered:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Verified identity exchange before transaction</li>
          <li>Audit trail of identity proofs</li>
          <li>Encrypted communication for privacy</li>
          <li>Compatible with existing PKI infrastructure</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why It Failed</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Same BIP-70 Problems</p>
          <p className="text-sm text-dark-300">
            Inherited all complexity and security concerns from BIP-70: X.509 dependency,
            implementation burden, centralization risks.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Privacy Concerns</p>
          <p className="text-sm text-dark-300">
            Many Bitcoin users explicitly don't want identity tied to transactions.
            BIP-75's goal conflicted with Bitcoin's privacy ethos.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Limited Adoption</p>
          <p className="text-sm text-dark-300">
            Without BIP-70 adoption, BIP-75 had no foundation. Few wallets implemented
            either protocol.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Alternatives</h3>

      <p className="mb-4">
        Today's solutions for identity/compliance:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">TRISA/TRUST</p>
          <p className="text-sm text-dark-300">
            Industry protocols for Travel Rule compliance, operating separately from
            payment protocols.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Verifiable Credentials</p>
          <p className="text-sm text-dark-300">
            W3C standard for decentralized identity claims, independent of payment flow.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Lightning (LNURL-auth)</p>
          <p className="text-sm text-dark-300">
            Lightning-based authentication for identity verification without KYC.
          </p>
        </div>
      </div>

      <Callout type="success" title="Lessons Learned">
        <p>
          BIP-75 showed that identity and payment are often better kept separate.
          Bitcoin's strength is permissionless value transfer; adding mandatory
          identity layers undermines this. When compliance is needed, it's better
          handled by separate, specialized protocols rather than embedded in payments.
        </p>
      </Callout>
    </LessonLayout>
  );
}
