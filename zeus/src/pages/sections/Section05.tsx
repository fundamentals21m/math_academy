import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Embedded Node Mode</h2>

      <p className="mb-4">
        Zeus's embedded node feature runs a full LND Lightning node directly on your mobile device.
        This provides true self-custody without requiring external hardware, making Lightning
        accessible to anyone with a smartphone.
      </p>

      <Definition title="Embedded LND">
        A mobile-optimized version of LND that runs natively on iOS and Android. It handles
        blockchain sync, channel management, and routing - all on your phone.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantages of Embedded Mode</h3>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>True Self-Custody:</strong> Your keys and channels are on your device</li>
        <li><strong>No Extra Hardware:</strong> No need to buy or maintain a separate node</li>
        <li><strong>Portable:</strong> Your node goes wherever your phone goes</li>
        <li><strong>Simpler Setup:</strong> Just create a wallet and start using Lightning</li>
      </ul>

      <Callout type="info" title="Neutrino Light Client">
        The embedded node uses Neutrino, a light client protocol that doesn't require downloading
        the full <InlineMath>{'\\sim'}</InlineMath>500GB blockchain. Instead, it fetches only the data it needs.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Setting Up Embedded Node</h3>

      <p className="mb-4">
        To set up the embedded node:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Select "Use Embedded Node"</strong> from the home screen</li>
        <li><strong>Create New Wallet</strong> or restore from existing seed</li>
        <li><strong>Write down your seed phrase</strong> - this is critical for recovery</li>
        <li><strong>Set a PIN and optional passphrase</strong></li>
        <li><strong>Wait for initial sync</strong> (can take a few minutes)</li>
      </ol>

      <Definition title="Seed Phrase (Recovery Phrase)">
        A set of 24 words that encodes your private key. With this phrase, you can recover
        your on-chain funds on any compatible wallet. Write it down on paper and store safely.
      </Definition>

      <Callout type="danger" title="Seed Security">
        Your 24-word seed phrase is the master key to your funds. Never:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Store it digitally (no photos, no cloud, no notes app)</li>
          <li>Share it with anyone, including "support"</li>
          <li>Enter it on any website</li>
        </ul>
        Write it on paper and store in a secure location.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Backup</h3>

      <p className="mb-4">
        Unlike on-chain funds (recoverable from seed), Lightning channels require separate backup.
        Zeus automatically manages Static Channel Backups (SCBs).
      </p>

      <Definition title="Static Channel Backup (SCB)">
        A backup file that lets you recover funds from channels if your phone is lost or damaged.
        The SCB doesn't restore channel state - it triggers a cooperative close to recover funds on-chain.
      </Definition>

      <Callout type="warning" title="Backup Importance">
        Enable automatic cloud backup for SCBs or manually export them regularly.
        Without backups, losing your phone means losing funds in channels.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">LSP Integration</h3>

      <p className="mb-4">
        The embedded node integrates with Lightning Service Providers (LSPs) to simplify
        getting started with Lightning.
      </p>

      <Definition title="LSP (Lightning Service Provider)">
        A service that helps new nodes with channel management and liquidity. LSPs can:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Open channels to you automatically (for inbound liquidity)</li>
          <li>Provide just-in-time channels when you receive payments</li>
          <li>Route payments on your behalf</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Considerations</h3>

      <p className="mb-4">
        While embedded mode is powerful, there are trade-offs:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Battery Usage:</strong> Running a node uses more power</li>
        <li><strong>Connectivity:</strong> Node must be online to receive payments</li>
        <li><strong>Channel Limits:</strong> Phone nodes typically have fewer channels</li>
        <li><strong>Routing:</strong> Not ideal for earning routing fees</li>
      </ul>

      <Callout type="note" title="Best Use Case">
        Embedded mode is ideal for personal spending and receiving, not for running a routing
        node. For high-volume routing, consider a dedicated always-on server.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Getting Initial Liquidity</h3>

      <p className="mb-4">
        To start using Lightning with the embedded node:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Fund On-Chain:</strong> Send bitcoin to your on-chain address</li>
        <li><strong>Open Channels:</strong> Use the funds to open channels to well-connected nodes</li>
        <li><strong>Get Inbound:</strong> Use LSP services or have others open channels to you</li>
      </ol>

      <Callout type="success" title="Ready to Transact">
        Once your embedded node is set up with open channels, you can send and receive
        Lightning payments from anywhere with your phone!
      </Callout>
    </LessonLayout>
  );
}
