import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Welcome to Branta</h2>

      <p className="mb-4">
        <strong>Send Bitcoin with absolute certainty.</strong> That's the promise of Branta, the
        world leader in pre-payment verification for Bitcoin and Lightning Network transactions.
      </p>

      <p className="mb-4">
        Branta is infrastructure designed to eliminate transaction risk before errors or attacks
        occur. In a world where Bitcoin transactions are irreversible and billions of dollars are
        lost annually to fraud, Branta provides the verification layer that has been missing from
        the cryptocurrency ecosystem.
      </p>

      <Definition title="Pre-Payment Verification">
        The process of confirming that a Bitcoin address or Lightning invoice belongs to the
        intended recipient before executing a transaction. Branta enables this verification
        without touching your keys, addresses, or transaction flow.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Scale of the Problem</h3>

      <p className="mb-4">
        The cryptocurrency industry faces staggering losses from transaction-related attacks:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>$68M+</strong> lost in single transaction incidents</li>
        <li><strong>1,000+</strong> victims every month</li>
        <li><strong>$1B+</strong> in yearly losses since 2024</li>
      </ul>

      <p className="mb-4">
        These losses stem from a fundamental problem: when you send Bitcoin, you have no way to
        verify that the address you're sending to actually belongs to who you think it does.
        Unlike traditional banking with chargebacks and reversals, Bitcoin transactions are final.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What Branta Does</h3>

      <p className="mb-4">
        Branta's flagship product, <strong>Guardrail</strong>, allows users to verify payment
        details before executing transactions. It addresses four major attack vectors:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Phishing attacks</strong> - Fake websites and impersonation</li>
        <li><strong>Supply chain compromises</strong> - Malware in software dependencies</li>
        <li><strong>Address swaps</strong> - Attackers replacing legitimate addresses</li>
        <li><strong>Man-in-the-middle exploits</strong> - Network-level interception</li>
      </ul>

      <Example title="How Verification Works">
        <ol className="list-decimal list-inside space-y-2">
          <li>A merchant registers their payment address with Branta</li>
          <li>Before sending, you query Branta to verify the address</li>
          <li>Branta confirms the address belongs to the claimed merchant</li>
          <li>You send with confidence, knowing the destination is verified</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Principles</h3>

      <Callout type="success" title="Non-Invasive Verification">
        Branta never touches your keys, addresses, or transactions. Wallets running Branta have
        an added layer of unbiased verification that works entirely outside your transaction flow.
        This means zero custody risk.
      </Callout>

      <p className="mb-4">
        Branta's verification operates on several key principles:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Instant verification</strong> - No extra steps or app switching required</li>
        <li><strong>Multi-device support</strong> - Verify on separate devices for triangulated security</li>
        <li><strong>Zero custody</strong> - Branta never has access to your funds</li>
        <li><strong>Universal access</strong> - Web-based verification requires no apps or login</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Supported Protocols</h3>

      <p className="mb-4">
        Branta supports verification across multiple Bitcoin protocols:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Bitcoin On-chain</strong> - Standard BTC addresses (Legacy, SegWit, Taproot)</li>
        <li><strong>Lightning Network</strong> - BOLT11 invoices and payment requests</li>
        <li><strong>Ark</strong> - The new second-layer protocol for Bitcoin</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Course Overview</h3>

      <p className="mb-4">
        This course will teach you everything you need to know about Branta and how to integrate
        Guardrail into your applications. You'll learn:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Common security threats in Bitcoin transactions</li>
        <li>How Guardrail verification works</li>
        <li>API integration for adding and verifying payments</li>
        <li>Advanced features like parent platforms and HMAC authentication</li>
        <li>Using Branta Core for desktop verification</li>
        <li>Zero-knowledge privacy-preserving verification</li>
      </ul>

      <Callout type="info" title="Company Background">
        Branta began operations in 2023 with a mission to reimagine the user experience for
        sending Bitcoin payments. Since then, Branta has pioneered pre-payment verification
        and partnered with major companies including BTCPay Server, Zaprite, Amboss, and
        Lightning Bounties.
      </Callout>
    </LessonLayout>
  );
}
