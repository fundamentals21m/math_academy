import { Link } from 'react-router-dom';
import { TranscriptLayout } from '@/components/layout';
import { Callout } from '@/components/common/Callout';

export default function ZeusV080Release() {
  return (
    <TranscriptLayout transcriptId="zeus-v080-release">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>First mobile wallet with embedded LND node — no remote node required</li>
          <li>OLYMPUS LSP provides instant 0-conf channels with privacy-preserving wrapped invoices</li>
          <li>Zeus Pay offers the first self-custodial lightning address for mobile</li>
          <li>First mobile wallet to support Simple Taproot Channels</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">A Major Milestone Release</h3>

      <p className="mb-4">
        Zeus v0.8.0 represents one of the most significant releases in the project's history. It transforms
        Zeus from a remote node controller into a full-featured self-custodial Lightning wallet that anyone
        can use without running separate infrastructure.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Not only do we not want to know how you're using your money, but we're building things in
          a way that we can't. Privacy isn't an afterthought — it's built into the foundation."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Zeus Team</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Embedded LND Node</h3>

      <p className="mb-4">
        The headline feature of this release is the embedded LND node. Users no longer need to run
        a separate Lightning node at home or in the cloud — Zeus now runs a full node directly
        on your mobile device.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-amber-400 mb-3">Embedded Node Features</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-dark-200 mb-2">What's Included</p>
            <ul className="space-y-1 text-sm text-dark-300">
              <li>• Full LND node on your phone</li>
              <li>• Lightning + on-chain send/receive</li>
              <li>• Complete channel management</li>
              <li>• Neutrino sync in moments</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-dark-200 mb-2">What's Disabled</p>
            <ul className="space-y-1 text-sm text-dark-300">
              <li>• Payment forwarding (routing)</li>
              <li className="text-dark-500 italic">Mobile nodes aren't conducive to routing due to intermittent connectivity</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">OLYMPUS by ZEUS (LSP)</h3>

      <p className="mb-4">
        OLYMPUS is Zeus's Lightning Service Provider, designed to make Lightning accessible while
        preserving user privacy through innovative technical solutions.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">0-Conf Channels</p>
          <p className="text-sm text-dark-300">
            Receive payments instantly without waiting for channel confirmations. OLYMPUS opens
            a channel to you on the fly when you receive a payment.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Wrapped Invoices</p>
          <p className="text-sm text-dark-300">
            Your node's public key is concealed from payers through wrapped invoices, providing
            enhanced privacy for receivers.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Zero Fee First Hop</p>
          <p className="text-sm text-dark-300">
            Routing through OLYMPUS incurs no fees on the first hop. Only subsequent hops charge
            standard routing fees.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Optional</p>
          <p className="text-sm text-dark-300">
            The LSP is on by default but users can opt out. You can open your own channels
            and never use OLYMPUS if you prefer.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Zeus Pay: Self-Custodial Lightning Address</h3>

      <p className="mb-4">
        Zeus Pay introduces the first self-custodial lightning address for mobile wallets. This allows
        users to receive payments to a static address even when their phone is offline.
      </p>

      <Callout type="info" title="How Zeus Pay Works">
        <p className="mt-2">
          Zeus Pay uses a clever combination of user-generated pre-image hashes, hodl invoices, and
          the Zaplocker Nostr attestation scheme. When someone pays your lightning address, the payment
          is held securely until you come online. You have 24 hours to claim payments, otherwise
          they're refunded to the sender.
        </p>
      </Callout>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Zeus Pay vs Traditional Lightning Addresses</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-2 text-dark-400">Feature</th>
                <th className="text-center py-2 text-dark-400">Zeus Pay</th>
                <th className="text-center py-2 text-dark-400">Traditional</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-800">
                <td className="py-2">Self-Custodial</td>
                <td className="text-center py-2 text-green-400">Yes</td>
                <td className="text-center py-2 text-red-400">Usually No</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2">Offline Receive</td>
                <td className="text-center py-2 text-green-400">24h window</td>
                <td className="text-center py-2 text-red-400">No</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2">Static Address</td>
                <td className="text-center py-2 text-green-400">Yes</td>
                <td className="text-center py-2 text-green-400">Yes</td>
              </tr>
              <tr>
                <td className="py-2">Privacy</td>
                <td className="text-center py-2 text-green-400">High</td>
                <td className="text-center py-2 text-amber-400">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Simple Taproot Channels</h3>

      <p className="mb-4">
        Zeus v0.8.0 is the first mobile wallet to support Simple Taproot Channels. These channels
        provide several benefits over legacy channel types.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Lower Fees</p>
          <p className="text-sm text-dark-300">
            When closing Taproot channels, users pay less in on-chain fees compared to legacy channels.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Better Privacy</p>
          <p className="text-sm text-dark-300">
            Taproot channel closes look like any other Taproot spend on-chain, making them
            indistinguishable from regular transactions.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Additional Features</h3>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">📇</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Contact Book</p>
              <p className="text-sm">Save frequently used peers for easy payments</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">🔒</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Neutrino Block Filters</p>
              <p className="text-sm">Sync the blockchain privately without revealing your transactions</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">🛤️</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Client-Side Path Finding</p>
              <p className="text-sm">Your device calculates payment routes instead of relying on a server</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">🎨</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">New Branding & UI</p>
              <p className="text-sm">Refreshed visual design with improved user experience</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Technical Requirements</h3>

      <Callout type="info" title="System Requirements">
        <p className="mt-2">
          The embedded node requires more storage and battery than remote node mode. Make sure you
          have sufficient free space and consider keeping Zeus open while syncing the initial blockchain.
          After initial sync, updates are fast and efficient.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <p className="mb-4">
        Explore these course sections to learn more about using these features:
      </p>

      <div className="grid md:grid-cols-2 gap-3">
        <Link
          to="/section/1"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 1: Getting Started
          </p>
          <p className="text-sm text-dark-500">Setting up the embedded node</p>
        </Link>
        <Link
          to="/section/3"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 3: Channel Management
          </p>
          <p className="text-sm text-dark-500">Working with channels and the LSP</p>
        </Link>
      </div>
    </TranscriptLayout>
  );
}
