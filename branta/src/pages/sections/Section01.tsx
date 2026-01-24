import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Problem: Transaction Risks</h2>

      <p className="mb-4">
        Bitcoin's greatest strength is also its greatest vulnerability: irreversibility. Once a
        transaction is confirmed on the blockchain, it cannot be undone. There are no chargebacks,
        no customer service to call, no way to reverse a mistake.
      </p>

      <p className="mb-4">
        This creates a fundamental asymmetry in security. Traditional payment systems place the
        burden of fraud prevention on financial institutions who can reverse transactions. In
        Bitcoin, all responsibility falls on the sender at the moment they broadcast the transaction.
      </p>

      <Definition title="Transaction Irreversibility">
        A property of Bitcoin where confirmed transactions cannot be modified or reversed by any
        party. This is achieved through proof-of-work mining, where each subsequent block makes
        previous transactions exponentially harder to change.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Verification Gap</h3>

      <p className="mb-4">
        When you make a traditional online payment, multiple layers of verification exist:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Your bank verifies the merchant's identity</li>
        <li>Payment processors validate the transaction</li>
        <li>SSL certificates confirm you're on the right website</li>
        <li>If something goes wrong, you can dispute the charge</li>
      </ul>

      <p className="mb-4">
        Bitcoin has none of these protections built in. When you copy an address to pay someone,
        you're trusting that:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>The website showing the address hasn't been compromised</li>
        <li>No malware on your computer modified the clipboard</li>
        <li>The address you copied is the same one you're about to send to</li>
        <li>The recipient is actually who they claim to be</li>
      </ul>

      <Callout type="warning" title="The Trust Problem">
        Every Bitcoin transaction requires implicit trust at multiple points. Without verification,
        you're hoping nothing has gone wrong between seeing an address and sending funds to it.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Real-World Attack Scenarios</h3>

      <Example title="Scenario 1: The Invoice Swap">
        <p className="mb-2">
          A business receives an email from their supplier with an invoice for $50,000 in Bitcoin.
          The email looks legitimate, uses the correct branding, and references a real order.
          However, an attacker has intercepted the email and replaced the Bitcoin address.
        </p>
        <p className="text-dark-400">
          Result: The business sends $50,000 to the attacker's address, irreversibly.
        </p>
      </Example>

      <Example title="Scenario 2: The Clipboard Hijack">
        <p className="mb-2">
          A user installs a browser extension for "enhanced Bitcoin tracking." Hidden in the code
          is a clipboard monitor. Whenever the user copies a Bitcoin address, the malware replaces
          it with an attacker's address.
        </p>
        <p className="text-dark-400">
          Result: Every Bitcoin transaction the user attempts goes to the attacker.
        </p>
      </Example>

      <Example title="Scenario 3: The Fake Exchange">
        <p className="mb-2">
          An attacker creates a fake website that looks identical to a popular exchange. They
          purchase ads to appear above the real exchange in search results. Users log in and
          see instructions to "upgrade security" by sending funds to a verification address.
        </p>
        <p className="text-dark-400">
          Result: Users willingly send their entire holdings to attackers.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Traditional Solutions Fail</h3>

      <p className="mb-4">
        Several approaches have been tried to solve this problem, but each has limitations:
      </p>

      <Definition title="Manual Verification">
        Comparing the first and last few characters of an address before sending. This is
        error-prone, doesn't verify ownership, and sophisticated malware can generate addresses
        with matching prefixes.
      </Definition>

      <Definition title="Whitelisting">
        Maintaining a list of "known good" addresses. This breaks down when dealing with new
        recipients and doesn't protect against compromised whitelists.
      </Definition>

      <Definition title="Hardware Wallets">
        Physical devices that sign transactions offline. While they protect keys, they cannot
        verify that the address displayed is actually owned by the intended recipient.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Need for External Verification</h3>

      <p className="mb-4">
        The solution requires verification that exists <em>outside</em> the transaction flow:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Independent source of truth</strong> - Not reliant on the same systems that could be compromised</li>
        <li><strong>Recipient-attested ownership</strong> - The recipient must have proactively registered their address</li>
        <li><strong>Real-time verification</strong> - Checking at the moment of transaction, not relying on stale data</li>
        <li><strong>Non-custodial</strong> - The verification system should never have access to funds</li>
      </ul>

      <Callout type="success" title="The Branta Solution">
        Branta provides exactly this: an independent verification layer where recipients register
        their addresses, and senders can verify before transacting. It operates completely outside
        the transaction flow, adding security without adding custody risk.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Business Impact</h3>

      <p className="mb-4">
        For businesses accepting Bitcoin, the lack of verification creates multiple problems:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Customer hesitation</strong> - Users afraid to send large amounts</li>
        <li><strong>Support burden</strong> - Fielding calls about address authenticity</li>
        <li><strong>Liability concerns</strong> - Who is responsible when an address is swapped?</li>
        <li><strong>Regulatory pressure</strong> - Auditors asking about transaction verification</li>
      </ul>

      <p className="mb-4">
        Branta addresses all of these by providing a verifiable chain of trust that businesses
        can offer to their customers. As one BTCPay Server integration partner noted: "With Branta,
        customers can easily verify that the payment destination in BTCPay checkouts truly belongs
        to the business they're trying to pay."
      </p>
    </LessonLayout>
  );
}
