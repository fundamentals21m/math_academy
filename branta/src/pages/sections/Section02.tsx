import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { AttackFlowSimulator, AddressSwapDetector } from '@/components/visualizations';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Address Swap Attacks</h2>

      <p className="mb-4">
        Address swap attacks are among the most dangerous threats in the Bitcoin ecosystem. An
        attacker substitutes a legitimate Bitcoin address with their own, redirecting funds
        without the sender's knowledge. Because the swap happens silently, victims often don't
        realize they've been compromised until it's too late.
      </p>

      <Definition title="Address Swap Attack">
        An attack where a malicious actor replaces a legitimate Bitcoin address with one they
        control. The swap can occur at various points: in transit, on the clipboard, in a
        compromised website, or through modified software.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How Address Swaps Work</h3>

      <p className="mb-4">
        Address swap attacks exploit the disconnect between what you see and what your wallet
        actually sends to. The attack chain typically follows these steps:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>Attacker gains access to modify addresses at some point in the process</li>
        <li>Legitimate address is displayed to the user (building trust)</li>
        <li>At the moment of transaction, the address is swapped</li>
        <li>User confirms the transaction, believing it's correct</li>
        <li>Funds go to the attacker's address</li>
      </ol>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of Address Swap Attacks</h3>

      <Definition title="Clipboard Hijacking">
        Malware monitors the system clipboard and automatically replaces any copied Bitcoin
        address with an attacker-controlled address. This is particularly effective because
        users expect to copy-paste addresses rather than type them manually.
      </Definition>

      <Example title="Clipboard Hijacking in Action">
        <div className="space-y-2 font-mono text-sm">
          <p><span className="text-dark-400">User copies:</span> bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq</p>
          <p><span className="text-dark-400">User pastes:</span> bc1qattacker7xfkvy5l643lydnw9re59gtzzattack</p>
        </div>
        <p className="mt-2 text-dark-400">
          Sophisticated malware can generate addresses with similar prefixes to avoid detection.
        </p>
      </Example>

      <Definition title="Website Compromise">
        Attackers modify the JavaScript on a legitimate website to display different addresses
        to different users, or to swap addresses at checkout time. This can happen through
        XSS attacks, compromised CDNs, or malicious browser extensions.
      </Definition>

      <Definition title="Database Manipulation">
        If an attacker gains access to a merchant's database, they can directly modify the
        stored payment addresses. All invoices generated afterward point to attacker addresses.
      </Definition>

      <Definition title="Network Interception">
        In a man-in-the-middle position, attackers can modify HTTP responses to replace
        addresses. Even HTTPS can be vulnerable if the attacker has compromised the TLS
        certificate or the user's trust store.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Detection is Difficult</h3>

      <p className="mb-4">
        Address swap attacks are particularly insidious because:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Addresses are opaque</strong> - They don't contain human-readable information about the owner</li>
        <li><strong>Visual similarity</strong> - Attackers can generate addresses with matching prefixes (vanity addresses)</li>
        <li><strong>User fatigue</strong> - Nobody actually verifies all 34-62 characters of an address</li>
        <li><strong>Trust in the system</strong> - Users trust that what they see is what they'll send</li>
      </ul>

      <Example title="The Vanity Address Problem">
        <p className="mb-2">
          Given enough computing power, attackers can generate addresses that match the first
          several characters of a target address:
        </p>
        <div className="space-y-1 font-mono text-sm mt-2">
          <p><span className="text-green-400">Legitimate:</span> bc1qar0srrr<span className="text-dark-400">7xfkvy5l643lydnw9re59gtzzwf5mdq</span></p>
          <p><span className="text-red-400">Attacker:</span>&nbsp;&nbsp; bc1qar0srrr<span className="text-dark-400">hj8k2m9l542ktdms8jk48gtzzhacker</span></p>
        </div>
        <p className="mt-2 text-dark-400">
          Users checking only the first few characters would see a match.
        </p>
      </Example>

      <Callout type="danger" title="Real Attack: $68 Million Lost">
        In one of the largest documented address swap attacks, a victim lost over $68 million
        in a single transaction. The attacker had studied the victim's transaction patterns
        and created a matching vanity address. The victim's quick verification passed because
        the first and last characters matched.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Common Attack Vectors</h3>

      <Example title="Vector 1: Malicious Browser Extensions">
        <p className="mb-2">
          Browser extensions with broad permissions can read and modify page content. An extension
          advertised for "Bitcoin price tracking" could silently swap addresses on checkout pages.
        </p>
        <ul className="list-disc list-inside text-dark-400 mt-2">
          <li>Often disguised as useful Bitcoin tools</li>
          <li>May work correctly for months before activating</li>
          <li>Can target specific high-value sites</li>
        </ul>
      </Example>

      <Example title="Vector 2: Email Interception">
        <p className="mb-2">
          Business email compromise (BEC) attacks intercept invoices sent via email and replace
          the payment addresses. The email arrives from the correct sender (or a spoofed address)
          with modified payment details.
        </p>
        <ul className="list-disc list-inside text-dark-400 mt-2">
          <li>Targets B2B transactions</li>
          <li>Often timed to coincide with real invoices</li>
          <li>May include "updated banking details" pretext</li>
        </ul>
      </Example>

      <Example title="Vector 3: Compromised Payment Processors">
        <p className="mb-2">
          If a Bitcoin payment processor is compromised, attackers can swap addresses across
          thousands of merchants simultaneously. This is a supply chain attack that affects
          all downstream users.
        </p>
        <ul className="list-disc list-inside text-dark-400 mt-2">
          <li>High-impact, affects many victims</li>
          <li>Difficult to detect individually</li>
          <li>May extract funds slowly to avoid detection</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How Branta Prevents Address Swaps</h3>

      <p className="mb-4">
        Branta's Guardrail system eliminates address swap attacks through verified registration:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Recipient Registration</strong> - Merchants register their addresses with Branta directly</li>
        <li><strong>Independent Verification</strong> - Senders query Branta to verify ownership</li>
        <li><strong>Out-of-Band Confirmation</strong> - Verification happens outside the potentially compromised channel</li>
        <li><strong>Real-Time Checks</strong> - Verification occurs at transaction time, not relying on cached data</li>
      </ol>

      <Callout type="success" title="The Verification Guarantee">
        Even if an attacker swaps addresses in your clipboard, on a website, or in an email,
        querying Branta will reveal the mismatch. The registered address won't match the
        swapped address, alerting you before you send.
      </Callout>

      <p className="mb-4">
        The key insight is that an attacker cannot both swap the address <em>and</em> register
        it with Branta as belonging to the legitimate business. The verification breaks the
        attack chain by providing an independent source of truth.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Attack Flow Simulator</h3>

      <p className="mb-4">
        See how an address swap attack unfolds step by step, and how Branta protection changes
        the outcome:
      </p>

      <AttackFlowSimulator />

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Address Swap Detector</h3>

      <p className="mb-4">
        Experience how clipboard hijacking works in a safe simulation:
      </p>

      <AddressSwapDetector />
    </LessonLayout>
  );
}
