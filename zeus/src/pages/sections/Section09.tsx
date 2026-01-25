import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Security & Privacy</h2>

      <p className="mb-4">
        Zeus provides powerful security and privacy features to protect your funds and identity.
        Understanding and properly configuring these features is essential for safe Bitcoin usage.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Access Protection</h3>

      <Definition title="PIN Code">
        A numeric code required to open Zeus. Protects against casual access if someone
        picks up your unlocked phone. Can be configured to require after a timeout.
      </Definition>

      <Definition title="Biometric Authentication">
        Use Face ID or fingerprint to unlock Zeus instead of entering a PIN.
        Combines security with convenience.
      </Definition>

      <Callout type="info" title="Recommended Setup">
        Enable both PIN and biometrics. The PIN serves as a backup if biometrics fail
        and can be required for high-value transactions.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Seed Phrase Security</h3>

      <p className="mb-4">
        Your 24-word seed phrase is the ultimate key to your funds. Follow these practices:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Write it down:</strong> On paper, not digitally</li>
        <li><strong>Store securely:</strong> In a fireproof safe or safety deposit box</li>
        <li><strong>Make copies:</strong> Store in different physical locations</li>
        <li><strong>Never share:</strong> No legitimate service will ever ask for it</li>
        <li><strong>Test recovery:</strong> Verify you can restore from the seed</li>
      </ul>

      <Definition title="BIP39 Passphrase (25th Word)">
        An optional additional word that modifies your seed. Creates a completely different
        wallet that requires both the 24 words AND the passphrase to access. Useful for:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Plausible deniability (decoy wallet without passphrase)</li>
          <li>Extra security layer</li>
          <li>Multiple wallets from one seed</li>
        </ul>
      </Definition>

      <Callout type="danger" title="Passphrase Warning">
        If you set a passphrase and forget it, your funds are UNRECOVERABLE.
        The seed alone cannot access a passphrase-protected wallet.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Features</h3>

      <Definition title="Hidden Balances">
        Zeus can hide your balance on the main screen. Tap to reveal temporarily.
        Prevents shoulder-surfing and casual observation.
      </Definition>

      <Definition title="Stealth Mode">
        Hides all sensitive information including balances, transaction history,
        and node details. The app appears empty to observers.
      </Definition>

      <p className="mb-4 mt-4">
        Additional privacy settings:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Hide Amounts:</strong> Obscure transaction values</li>
        <li><strong>Disable Screenshots:</strong> Prevent screen capture</li>
        <li><strong>Clear Clipboard:</strong> Auto-clear copied addresses/invoices</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Tor Network</h3>

      <Definition title="Tor (The Onion Router)">
        An anonymity network that hides your IP address by routing traffic through
        multiple encrypted relays. Zeus can connect to your node via Tor.
      </Definition>

      <p className="mb-4 mt-4">
        Why use Tor with Zeus:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Hide Your IP:</strong> Observers can't link you to your node</li>
        <li><strong>Access Anywhere:</strong> Works through firewalls and NAT</li>
        <li><strong>Protect Home IP:</strong> Your node doesn't reveal your location</li>
      </ul>

      <Callout type="info" title="Tor Trade-offs">
        Tor adds latency (slower connections) and requires Tor to be running.
        For most users, the privacy benefits outweigh the performance cost.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Backup Security</h3>

      <p className="mb-4">
        Zeus offers several backup options:
      </p>

      <Definition title="Channel Backup (SCB)">
        Automatic backup of channel state to recover funds if your phone is lost.
        Can be saved to cloud services (encrypted) or exported manually.
      </Definition>

      <Callout type="warning" title="Cloud Backup Consideration">
        Cloud backups are convenient but introduce a third party. Consider:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Using end-to-end encrypted services</li>
          <li>Keeping local copies as primary backup</li>
          <li>Using a secondary email for cloud services</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Operational Security</h3>

      <p className="mb-4">
        Best practices for daily use:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Keep Device Updated:</strong> Install OS and Zeus updates promptly</li>
        <li><strong>Be Careful with QR Codes:</strong> Verify before scanning unknown codes</li>
        <li><strong>Verify Addresses:</strong> Always double-check before sending large amounts</li>
        <li><strong>Watch for Phishing:</strong> Zeus/Lightning support won't DM you</li>
        <li><strong>Test with Small Amounts:</strong> Send small sums first when trying new features</li>
      </ul>

      <Definition title="Address Verification">
        Before sending large on-chain payments, verify the first and last few characters
        of the address on multiple devices. Malware can swap addresses on clipboard.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Recovery Planning</h3>

      <p className="mb-4">
        Prepare for the worst case:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>Document your setup (without revealing secrets)</li>
        <li>Store seed phrase in multiple secure locations</li>
        <li>Test recovery process periodically</li>
        <li>Consider inheritance planning for family</li>
      </ol>

      <Callout type="success" title="Security Mindset">
        Security is a practice, not a product. Regularly review your setup, stay informed
        about threats, and never stop learning. Your bitcoin's safety depends on it.
      </Callout>
    </LessonLayout>
  );
}
