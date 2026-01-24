import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Man-in-the-Middle Attacks</h2>

      <p className="mb-4">
        Man-in-the-middle (MITM) attacks occur when an attacker secretly intercepts and
        potentially alters communications between two parties who believe they are directly
        communicating with each other. In Bitcoin transactions, MITM attacks can modify
        payment addresses in transit, redirecting funds to attacker-controlled destinations.
      </p>

      <Definition title="Man-in-the-Middle Attack (MITM)">
        A cyberattack where an attacker secretly relays and possibly alters the communications
        between two parties who believe they are directly communicating. The attacker can
        eavesdrop, modify data, or inject malicious content.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How MITM Attacks Work</h3>

      <p className="mb-4">
        In the context of Bitcoin transactions, a MITM attack typically follows this pattern:
      </p>

      <Example title="Network-Level MITM">
        <ol className="list-decimal list-inside space-y-2">
          <li>User connects to a merchant's website to make a payment</li>
          <li>Attacker intercepts the network traffic (via compromised router, WiFi, or ISP)</li>
          <li>When the merchant sends the payment address, attacker modifies it</li>
          <li>User sees and copies the modified address</li>
          <li>Payment goes to attacker's address</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of MITM Attacks</h3>

      <Definition title="ARP Spoofing">
        On local networks, attackers send fake ARP (Address Resolution Protocol) messages to
        associate their MAC address with the IP address of a legitimate host. This causes
        traffic meant for that host to be sent to the attacker instead.
      </Definition>

      <Definition title="DNS Spoofing">
        Attackers corrupt the DNS cache to redirect domain lookups to malicious IP addresses.
        When you type "merchant.com", you're silently redirected to an attacker's server that
        looks identical but serves different payment addresses.
      </Definition>

      <Definition title="SSL Stripping">
        Attackers downgrade HTTPS connections to HTTP by intercepting the initial request
        before encryption is established. The user sees no security indicators while the
        attacker has full visibility into the traffic.
      </Definition>

      <Definition title="Rogue WiFi Access Points">
        Attackers set up fake WiFi networks with legitimate-sounding names (e.g., "Starbucks_WiFi").
        All traffic through these networks can be monitored and modified.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why HTTPS Isn't Enough</h3>

      <p className="mb-4">
        While HTTPS provides encryption, several scenarios can defeat it:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Compromised Certificate Authorities</strong> - Attackers can obtain valid certificates for any domain</li>
        <li><strong>Self-signed certificates</strong> - Users often click through security warnings</li>
        <li><strong>Corporate proxies</strong> - Many organizations install root certificates that enable HTTPS inspection</li>
        <li><strong>Malware</strong> - Installed root certificates can enable MITM at the OS level</li>
      </ul>

      <Callout type="warning" title="The Certificate Problem">
        HTTPS only proves you're connected to the server named in the certificate, not that
        the server is trustworthy. An attacker with a valid certificate for "merchant-pay.com"
        (similar to "merchant.com") has valid HTTPS but is still malicious.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Real-World MITM Scenarios</h3>

      <Example title="Coffee Shop Attack">
        <p className="mb-2">
          A customer at a coffee shop connects to "Free_CoffeeShop_WiFi" (an attacker's network)
          instead of the legitimate network. When they browse to make a Bitcoin payment, the
          attacker's router modifies the response to include their address.
        </p>
        <p className="text-dark-400 mt-2">
          The attack succeeds because the user expects to see an address and has no way to
          verify it came from the legitimate merchant.
        </p>
      </Example>

      <Example title="Hotel Network Interception">
        <p className="mb-2">
          An attacker staying at a hotel gains access to the network infrastructure. They
          position themselves to intercept traffic from high-value guests. When a business
          executive attempts to pay an invoice in Bitcoin, the payment address is modified.
        </p>
        <p className="text-dark-400 mt-2">
          Hotel networks are particularly vulnerable because they're designed for open access
          and rarely have strong security monitoring.
        </p>
      </Example>

      <Example title="BGP Hijacking">
        <p className="mb-2">
          At the internet infrastructure level, attackers can announce false BGP routes to
          redirect traffic through their networks. This affects entire regions and can intercept
          traffic to specific IP ranges, including cryptocurrency services.
        </p>
        <p className="text-dark-400 mt-2">
          This sophisticated attack has been used to target cryptocurrency exchanges and
          modify DNS responses for authentication services.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Detection Challenges</h3>

      <p className="mb-4">
        MITM attacks are notoriously difficult to detect because:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Transparency</strong> - The attacker relays legitimate traffic, appearing normal</li>
        <li><strong>Speed</strong> - Modern attacks add minimal latency</li>
        <li><strong>Selective modification</strong> - Only payment-related data is altered</li>
        <li><strong>Valid certificates</strong> - Browser shows green padlock despite compromise</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How Branta Defeats MITM Attacks</h3>

      <p className="mb-4">
        Branta's verification system provides an independent channel that MITM attackers
        cannot easily compromise:
      </p>

      <Callout type="success" title="Out-of-Band Verification">
        When you verify an address with Branta, you're querying a separate system through
        a different network path. Even if an attacker has MITM position on your connection
        to the merchant, they're unlikely to also have MITM position on your connection
        to Branta's verification servers.
      </Callout>

      <p className="mb-4">
        The defense works through multiple channels:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Separate infrastructure</strong> - Branta's API runs on different servers than merchants</li>
        <li><strong>Certificate pinning</strong> - Branta clients can pin certificates to prevent MITM on the verification channel</li>
        <li><strong>Multi-device verification</strong> - Users can verify from a different device/network</li>
        <li><strong>Cross-checking</strong> - The registered address must match what you're about to send</li>
      </ol>

      <Example title="MITM Defense in Practice">
        <p className="mb-2">
          Scenario: You're at a coffee shop paying a merchant.
        </p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>You see address X on the merchant's site (possibly modified by MITM)</li>
          <li>You query Branta: "What address belongs to MerchantCo?"</li>
          <li>Branta responds: "MerchantCo's registered address is Y"</li>
          <li>X != Y indicates a problem - don't send!</li>
        </ol>
        <p className="text-dark-400 mt-2">
          Even if the attacker modified the address you see, they cannot modify what
          the merchant registered with Branta.
        </p>
      </Example>

      <Callout type="info" title="Defense Multiplier">
        For maximum security, verify from a different device on a different network.
        Use your phone on cellular data to verify an address shown on your laptop on
        WiFi. This makes MITM attacks exponentially harder since the attacker would
        need to compromise both network paths simultaneously.
      </Callout>

      <p className="mb-4">
        Branta's web verification pages at guardrail.branta.pro allow verification from
        any device with a browser, making cross-device verification accessible to everyone.
      </p>
    </LessonLayout>
  );
}
