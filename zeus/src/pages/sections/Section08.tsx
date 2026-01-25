import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">LNURL & Payment Protocols</h2>

      <p className="mb-4">
        Beyond basic Lightning invoices, Zeus supports advanced payment protocols that enhance
        the user experience. These standards make Lightning more accessible and enable new use cases.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Introduction to LNURL</h3>

      <Definition title="LNURL">
        A set of protocols that use HTTP endpoints to facilitate Lightning interactions.
        Instead of sharing complex invoices, users share simple URLs or human-readable
        Lightning Addresses.
      </Definition>

      <p className="mb-4 mt-4">
        LNURL enables:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Static payment links (reusable, unlike invoices)</li>
        <li>Withdrawal links (pull payments)</li>
        <li>Authentication without passwords</li>
        <li>Human-readable addresses (like email)</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">LNURL-pay</h3>

      <Definition title="LNURL-pay">
        A protocol for receiving payments. The recipient shares a static URL or QR code.
        When scanned, the sender's wallet fetches a fresh invoice from the recipient's server.
      </Definition>

      <p className="mb-4 mt-4">
        LNURL-pay advantages:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Reusable:</strong> Same link works for multiple payments</li>
        <li><strong>Flexible Amount:</strong> Sender can choose how much to pay</li>
        <li><strong>Metadata:</strong> Can include descriptions, images, comments</li>
        <li><strong>Simpler UX:</strong> No need to generate invoices manually</li>
      </ul>

      <Callout type="info" title="How It Works">
        1. Recipient shares LNURL-pay link<br/>
        2. Sender scans and wallet fetches payment details<br/>
        3. Sender confirms amount and pays<br/>
        4. Recipient's server issues fresh invoice<br/>
        5. Payment completes normally
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning Addresses</h3>

      <Definition title="Lightning Address">
        A human-readable identifier that looks like an email address (user@domain.com).
        Behind the scenes, it uses LNURL-pay but is much easier to share and remember.
      </Definition>

      <p className="mb-4 mt-4">
        Example: <code className="bg-dark-800 px-2 py-1 rounded">satoshi@zeuspay.com</code>
      </p>

      <p className="mb-4">
        To pay a Lightning Address in Zeus:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>Tap "Send" and enter the Lightning Address</li>
        <li>Zeus resolves it to an LNURL endpoint</li>
        <li>Enter the amount you want to send</li>
        <li>Confirm and send</li>
      </ol>

      <Callout type="note" title="Self-Hosting">
        You can run your own Lightning Address server or use a service.
        This gives you a permanent, easy-to-share payment identifier.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">LNURL-withdraw</h3>

      <Definition title="LNURL-withdraw">
        A protocol for "pulling" funds from a service. The service shares a withdrawal link,
        and your wallet uses it to request a payment to itself.
      </Definition>

      <p className="mb-4 mt-4">
        Common LNURL-withdraw uses:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Faucets:</strong> Free sats for testing</li>
        <li><strong>Reward Systems:</strong> Redeem loyalty points</li>
        <li><strong>Exchange Withdrawals:</strong> Pull funds from exchanges</li>
        <li><strong>Gaming:</strong> Cash out winnings</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">LNURL-auth</h3>

      <Definition title="LNURL-auth">
        Passwordless authentication using your Lightning wallet. You sign a challenge with
        your node key, proving ownership without revealing any personal information.
      </Definition>

      <p className="mb-4 mt-4">
        Benefits of LNURL-auth:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>No Passwords:</strong> Nothing to remember or steal</li>
        <li><strong>Privacy:</strong> No email or personal data required</li>
        <li><strong>Cryptographic:</strong> Impossible to forge</li>
        <li><strong>Portable:</strong> Same identity across services</li>
      </ul>

      <Callout type="info" title="Using LNURL-auth">
        When a site offers LNURL-auth, scan their QR code with Zeus.
        You'll be prompted to authorize login - tap confirm and you're in!
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BOLT12 (Offers)</h3>

      <Definition title="BOLT12 Offers">
        A next-generation protocol that provides reusable payment codes natively in Lightning,
        without requiring a web server like LNURL. Still being rolled out across implementations.
      </Definition>

      <Callout type="note" title="Future-Ready">
        Zeus continues to add support for emerging standards. Check for BOLT12 support
        as it becomes more widely available.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">NFC Payments</h3>

      <p className="mb-4">
        Zeus supports tap-to-pay functionality:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Read NFC Tags:</strong> Scan payment cards or stickers</li>
        <li><strong>Write NFC Tags:</strong> Create your own payment cards</li>
        <li><strong>PoS Integration:</strong> Works with Lightning point-of-sale systems</li>
      </ul>

      <Callout type="success" title="Modern Payments">
        With LNURL and Lightning Addresses, sending bitcoin becomes as easy as sending
        email. These protocols bridge the gap between technical Lightning and everyday use.
      </Callout>
    </LessonLayout>
  );
}
