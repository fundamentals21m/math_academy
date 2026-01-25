import { Link } from 'react-router-dom';
import { TranscriptLayout } from '@/components/layout';
import { Callout } from '@/components/common/Callout';

export default function Slp376ZeusSovereign() {
  return (
    <TranscriptLayout transcriptId="slp376-zeus-sovereign">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Zeus is a free and open-source Lightning wallet designed for users running their own nodes</li>
          <li>Supports multiple Lightning implementations (LND, Core Lightning, Eclair)</li>
          <li>FOSS development is funded through feature bounties and community support</li>
          <li>Route blinding and other privacy features are key priorities for development</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Building a FOSS Lightning Wallet</h3>

      <p className="mb-4">
        In this episode, Evan Kaloudis discusses the journey of building Zeus as a free and open-source
        Lightning wallet. Unlike many mobile wallets that use custodial backends, Zeus was designed from
        the start to connect to users' own Lightning nodes.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Zeus is a self-sovereign Lightning Network wallet. The whole idea is that you're connecting
          to your own node, whether that's running at home on an Umbrel, Start9, or in the cloud. You
          control the keys, you control the channels, you control everything."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Supporting Multiple Implementations</h3>

      <p className="mb-4">
        One of Zeus's distinguishing features is its support for multiple Lightning implementations.
        Kaloudis explains the importance of implementation diversity for the health of the Lightning Network.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-amber-400 mb-3">Supported Implementations</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-dark-700/50 rounded-lg">
            <p className="text-amber-400 font-bold">LND</p>
            <p className="text-sm text-dark-400 mt-1">Lightning Labs</p>
          </div>
          <div className="text-center p-4 bg-dark-700/50 rounded-lg">
            <p className="text-amber-400 font-bold">Core Lightning</p>
            <p className="text-sm text-dark-400 mt-1">Blockstream (CLN)</p>
          </div>
          <div className="text-center p-4 bg-dark-700/50 rounded-lg">
            <p className="text-amber-400 font-bold">Eclair</p>
            <p className="text-sm text-dark-400 mt-1">ACINQ</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Funding Open Source Development</h3>

      <p className="mb-4">
        The conversation explores the challenges of funding open-source software development in the
        Bitcoin space. Kaloudis shares how Zeus has been sustained through community contributions
        and feature bounties.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Funding an open source project is immensely difficult. We've been fortunate to have a
          community that supports us through donations, feature bounties, and now through our LSP
          services. But we're committed to keeping Zeus free and open source forever."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Feature Bounties</p>
          <p className="text-sm text-dark-300">
            Community members can fund specific features they want to see implemented, creating
            a direct connection between users and development priorities.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">AGPL v3 License</p>
          <p className="text-sm text-dark-300">
            Zeus uses the AGPL v3 license, ensuring that any modifications or derivatives must
            also be open source, preserving the freedom of the codebase.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy on Lightning</h3>

      <p className="mb-4">
        A significant portion of the discussion focuses on privacy considerations when using the
        Lightning Network. Kaloudis and Livera explore current limitations and future improvements.
      </p>

      <Callout type="info" title="Route Blinding">
        <p className="mt-2">
          Route blinding is a privacy technique that hides the final destination of a Lightning payment.
          With route blinding, the sender doesn't know exactly where the payment ends up, only that it
          reaches a blinded route that eventually terminates at the receiver.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Being a More Sovereign User</h3>

      <p className="mb-4">
        The episode emphasizes practical steps users can take to increase their sovereignty when
        using the Lightning Network. Kaloudis provides actionable advice for different levels of
        technical expertise.
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Sovereignty Levels</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Connect to Your Own Node</p>
              <p className="text-sm text-dark-400">Run a node at home and connect Zeus remotely for full control</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Use Tor for Connections</p>
              <p className="text-sm text-dark-400">Hide your IP address and location when connecting to your node</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Manage Your Own Channels</p>
              <p className="text-sm text-dark-400">Open channels directly with peers you trust, not just hubs</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">4</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Understand Your Privacy Tradeoffs</p>
              <p className="text-sm text-dark-400">Know what information is leaked in different scenarios</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Zeus Community</h3>

      <p className="mb-4">
        Kaloudis highlights the importance of community in building and maintaining Zeus. The open-source
        nature allows anyone to contribute, report bugs, or suggest improvements.
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Episode Topics</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Building Zeus as a FOSS Lightning wallet</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Supporting multiple Lightning implementations</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Feature bounties and community funding</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Privacy on the Lightning Network</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Route blinding and SCID aliases</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Using Tor for enhanced privacy</span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <p className="mb-4">
        Explore these course sections to deepen your understanding of the concepts discussed:
      </p>

      <div className="grid md:grid-cols-2 gap-3">
        <Link
          to="/section/0"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 0: Introduction to Zeus
          </p>
          <p className="text-sm text-dark-500">Overview of the Zeus wallet and its features</p>
        </Link>
        <Link
          to="/section/2"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 2: Connecting to Your Node
          </p>
          <p className="text-sm text-dark-500">How to connect Zeus to your Lightning node</p>
        </Link>
      </div>
    </TranscriptLayout>
  );
}
