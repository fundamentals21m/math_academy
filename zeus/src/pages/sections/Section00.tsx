import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Introduction to Zeus</h2>

      <p className="mb-4">
        Zeus is a mobile Bitcoin and Lightning Network wallet that puts you in complete control of your funds.
        Unlike custodial wallets where a third party holds your bitcoin, Zeus enables true self-custody -
        meaning only you have access to your private keys.
      </p>

      <Definition title="Self-Custody">
        A method of storing cryptocurrency where you maintain exclusive control of your private keys,
        without relying on any third party. This is often summarized as "not your keys, not your coins."
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Zeus?</h3>

      <p className="mb-4">
        Zeus stands out among Bitcoin wallets for several key reasons:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Self-Custody First:</strong> Your keys never leave your device</li>
        <li><strong>Multiple Node Support:</strong> Connect to LND, Core Lightning (CLN), or use the embedded node</li>
        <li><strong>Full Featured:</strong> Manage channels, view routing reports, customize fees</li>
        <li><strong>Privacy Focused:</strong> PIN protection, hidden balances, Tor support</li>
        <li><strong>Open Source:</strong> Fully auditable code under the AGPL v3 license</li>
      </ul>

      <Callout type="info" title="A Wallet Fit for the Gods">
        The name "Zeus" comes from the Greek god of lightning - a fitting name for a Lightning Network wallet
        that aims to give users godlike control over their bitcoin.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Remote vs. Embedded Mode</h3>

      <p className="mb-4">
        Zeus offers two primary modes of operation:
      </p>

      <Definition title="Remote Node Mode">
        Connect Zeus to your own Lightning node running on a separate device (like a Raspberry Pi or server).
        This gives you full control over a powerful node while using Zeus as a mobile interface.
      </Definition>

      <Definition title="Embedded Node Mode">
        Run a lightweight LND node directly on your mobile device. Perfect for users who want self-custody
        without maintaining separate hardware. Zeus handles the node management automatically.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What You'll Learn</h3>

      <p className="mb-4">
        This course will guide you through everything you need to know to use Zeus effectively:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>Bitcoin and Lightning Network fundamentals</li>
        <li>Setting up Zeus on your mobile device</li>
        <li>Connecting to remote nodes or using the embedded node</li>
        <li>Sending and receiving payments</li>
        <li>Managing Lightning channels</li>
        <li>Using LNURL and other payment protocols</li>
        <li>Security and privacy best practices</li>
      </ol>

      <Callout type="success" title="Ready to Begin">
        By the end of this course, you'll have the knowledge to confidently manage your bitcoin
        with Zeus, whether you're making everyday purchases or running a routing node.
      </Callout>
    </LessonLayout>
  );
}
