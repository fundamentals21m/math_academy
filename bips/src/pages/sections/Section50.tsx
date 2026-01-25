import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-70: Payment Protocol (Deprecated)</h2>

      <p className="mb-4">
        BIP-70 defined a payment protocol that enabled merchants to send signed payment
        requests to customers. While innovative, it was deprecated due to complexity,
        security concerns, and the rise of simpler alternatives.
      </p>

      <Callout type="warning" title="Deprecated Standard">
        <p>
          BIP-70 is deprecated and removed from most wallet implementations. This section
          covers it for historical context and to understand why simpler approaches won.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Vision</h3>

      <p className="mb-4">
        BIP-70 aimed to solve several payment UX problems:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Address verification:</strong> Cryptographically prove payment destination</li>
          <li><strong>Refund addresses:</strong> Customer provides refund address upfront</li>
          <li><strong>Payment ACK:</strong> Merchant confirms payment received</li>
          <li><strong>Human-readable:</strong> Show merchant name instead of raw address</li>
          <li><strong>Memo fields:</strong> Attach payment descriptions</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Flow</h3>

      <Definition title="Payment Protocol Messages">
        <p>
          BIP-70 used Protocol Buffers (protobuf) to define structured messages exchanged
          between merchant servers and customer wallets.
        </p>
      </Definition>

      <Example title="BIP-70 Payment Flow">
        <div className="space-y-3 text-dark-300">
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              <strong>PaymentRequest:</strong> Merchant creates signed request with
              destination, amount, expiration, and X.509 certificate
            </li>
            <li>
              <strong>Wallet displays:</strong> User sees verified merchant name,
              amount, and memo
            </li>
            <li>
              <strong>Payment:</strong> User's wallet sends signed transaction plus
              refund addresses and memo
            </li>
            <li>
              <strong>PaymentACK:</strong> Merchant confirms receipt, optionally
              broadcasts transaction
            </li>
          </ol>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Message Structure</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># PaymentDetails (inside PaymentRequest):</p>
        <p className="text-dark-300">network: "main" | "test"</p>
        <p className="text-dark-300">outputs: [{'{ script, amount }'}]</p>
        <p className="text-dark-300">time: creation timestamp</p>
        <p className="text-dark-300">expires: expiration timestamp</p>
        <p className="text-dark-300">memo: human-readable description</p>
        <p className="text-dark-300">payment_url: where to POST Payment</p>
        <p className="text-dark-300">merchant_data: opaque order data</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">X.509 PKI Integration</h3>

      <p className="mb-4">
        BIP-70's signature system used X.509 certificates:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Certificate chain:</strong> Merchant's cert signed by trusted CA
          </li>
          <li>
            <strong>Signature:</strong> PaymentDetails signed with merchant's private key
          </li>
          <li>
            <strong>Verification:</strong> Wallet validates chain back to trusted root
          </li>
          <li>
            <strong>Display:</strong> Show verified merchant name (from cert) to user
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why It Failed</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">X.509 Dependency</p>
          <p className="text-sm text-dark-300">
            Required trusting certificate authorities—the same centralized PKI system
            Bitcoin was designed to avoid. CAs have been compromised multiple times.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Implementation Complexity</p>
          <p className="text-sm text-dark-300">
            Protocol Buffers, certificate handling, HTTP communication—all added attack
            surface and development burden for wallet makers.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Privacy Concerns</p>
          <p className="text-sm text-dark-300">
            Required connecting to merchant servers, potentially leaking IP addresses
            and payment metadata before transaction broadcast.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Centralization Risk</p>
          <p className="text-sm text-dark-300">
            Merchants could refuse payments not going through their server, potentially
            enabling censorship or surveillance.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Incidents</h3>

      <Callout type="warning" title="Real-World Problems">
        <p>
          BIP-70 had notable security issues:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Certificate validation bugs in major wallets</li>
          <li>Man-in-the-middle attacks if HTTPS misconfigured</li>
          <li>Payment URL could be pointed to malicious servers</li>
          <li>Complex code led to implementation errors</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Alternatives</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Simple BIP-21 URIs</p>
          <p className="text-sm text-dark-300">
            Basic addresses work for most use cases. No server required.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Lightning Invoices</p>
          <p className="text-sm text-dark-300">
            BOLT-11 invoices include amount, memo, and expiration without PKI.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Payjoin (BIP-78)</p>
          <p className="text-sm text-dark-300">
            Interactive protocol that improves privacy without certificates.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">LNURL</p>
          <p className="text-sm text-dark-300">
            Lightning-focused protocol for dynamic invoice generation.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lessons Learned</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Simplicity wins:</strong> Simpler protocols get wider adoption
          </li>
          <li>
            <strong>Minimize trust:</strong> Relying on CAs contradicts Bitcoin's ethos
          </li>
          <li>
            <strong>Optional complexity:</strong> Advanced features should be opt-in
          </li>
          <li>
            <strong>Privacy first:</strong> Protocols shouldn't require server contact
          </li>
        </ul>
      </div>

      <Callout type="success" title="Historical Significance">
        <p>
          While BIP-70 failed as a standard, its goals were valid. The lessons learned
          influenced better designs like Lightning invoices and Payjoin. Understanding
          BIP-70's failures helps appreciate why Bitcoin favors simpler, more
          decentralized approaches.
        </p>
      </Callout>
    </LessonLayout>
  );
}
