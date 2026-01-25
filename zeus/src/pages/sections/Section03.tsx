import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Installation & First Launch</h2>

      <p className="mb-4">
        Zeus is available for both iOS and Android devices. The installation process is straightforward,
        but there are some important considerations for ensuring you download the authentic app.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Downloading Zeus</h3>

      <Definition title="Official Sources">
        Always download Zeus from official sources to avoid malicious copies:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Android:</strong> Google Play Store or F-Droid</li>
          <li><strong>iOS:</strong> Apple App Store</li>
          <li><strong>APK:</strong> GitHub releases (verify signatures)</li>
        </ul>
      </Definition>

      <Callout type="danger" title="Security Warning">
        Never download Zeus (or any Bitcoin wallet) from unofficial sources, third-party app stores,
        or links sent to you. Malicious copies can steal your funds.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">First Launch</h3>

      <p className="mb-4">
        When you first open Zeus, you'll be presented with several options:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Connect to a Remote Node:</strong> If you run your own LND or CLN node</li>
        <li><strong>Use Embedded Node:</strong> Run a lightweight node directly on your phone</li>
        <li><strong>Add a New Wallet:</strong> Create or restore a wallet</li>
      </ol>

      <Definition title="Node Selection">
        Your choice between remote and embedded determines your setup complexity and capabilities:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Remote:</strong> Full node features, requires external hardware</li>
          <li><strong>Embedded:</strong> Simpler setup, runs entirely on your phone</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Setting Up a PIN</h3>

      <p className="mb-4">
        Zeus allows you to protect access with a PIN code. This is highly recommended as it
        prevents unauthorized access if someone gains physical access to your phone.
      </p>

      <Callout type="info" title="PIN vs. Passphrase">
        The PIN protects access to the Zeus app. A seed passphrase (covered in Security section)
        protects your actual funds. Both are recommended for maximum security.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Main Interface</h3>

      <p className="mb-4">
        After setup, you'll see the Zeus main screen with:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Balance Display:</strong> Your on-chain and Lightning balances</li>
        <li><strong>Send/Receive Buttons:</strong> For making payments</li>
        <li><strong>Activity Feed:</strong> Recent transactions</li>
        <li><strong>Settings Gear:</strong> Access to configuration and advanced features</li>
      </ul>

      <Definition title="Balance Types">
        Zeus shows separate balances for:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>On-chain:</strong> Bitcoin in your wallet (UTXOs)</li>
          <li><strong>Lightning:</strong> Bitcoin in your payment channels</li>
          <li><strong>Total:</strong> Combined balance across both</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Display Settings</h3>

      <p className="mb-4">
        Zeus offers several display customization options:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Fiat Currency:</strong> Show equivalent value in your local currency</li>
        <li><strong>Hide Balance:</strong> Conceal amounts when the app is visible to others</li>
        <li><strong>Theme:</strong> Light, dark, or system default</li>
        <li><strong>Units:</strong> Display in BTC, sats, or mBTC</li>
      </ul>

      <Callout type="success" title="Ready for Setup">
        With Zeus installed, you're ready to connect to a node. The next sections cover both
        remote node connection and embedded node setup.
      </Callout>
    </LessonLayout>
  );
}
