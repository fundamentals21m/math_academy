import { Link } from 'react-router-dom';
import { TranscriptLayout } from '@/components/layout';
import { Callout } from '@/components/common/Callout';

export default function Lnj019ZeusIntro() {
  return (
    <TranscriptLayout transcriptId="lnj019-zeus-intro">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Zeus started as a way to remote control Lightning nodes from mobile</li>
          <li>Tor integration allows private connections to home nodes</li>
          <li>Supports both LND and C-Lightning implementations</li>
          <li>Lightning can be a powerful privacy tool when used correctly</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Origins of Zeus</h3>

      <p className="mb-4">
        This early episode of Lightning Junkies captures the origin story of Zeus wallet. At this point,
        Zeus was primarily a remote node controller — a way to manage your Lightning node from your phone
        rather than running a full node on the device itself.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Zeus is a mobile app on both iOS and Android that allows users to connect to a remote node
          over Tor, or not. Rather than using a light client running only on the mobile device, accessing
          a remote node allows routing computation to be done off device."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Lightning Junkies</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Evan's Background</h3>

      <p className="mb-4">
        The episode explores Evan Kaloudis's path to Bitcoin and Lightning development, including his
        early experiences and what drew him to the space.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-amber-400 mb-3">Journey to Bitcoin</h4>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">1</span>
            </span>
            <div>
              <p className="font-medium text-dark-200">Occupy Wall Street</p>
              <p className="text-sm">Early exposure to critiques of the financial system</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">2</span>
            </span>
            <div>
              <p className="font-medium text-dark-200">Bitcoin Politics</p>
              <p className="text-sm">Understanding Bitcoin as a political and economic tool</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">3</span>
            </span>
            <div>
              <p className="font-medium text-dark-200">Lightning Network</p>
              <p className="text-sm">Recognizing the potential of payment channels for scaling</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">4</span>
            </span>
            <div>
              <p className="font-medium text-dark-200">Developing on Zap</p>
              <p className="text-sm">Early development experience before starting Zeus</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Best Features of Zeus (2020)</h3>

      <p className="mb-4">
        At the time of this episode, Kaloudis highlights the features that set Zeus apart from other
        Lightning wallets available at the time.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Remote Node Control</p>
          <p className="text-sm text-dark-300">
            Connect to your LND or C-Lightning node running at home and manage it on the go.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Tor Support</p>
          <p className="text-sm text-dark-300">
            Connect to your node over Tor to hide your IP address and location.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Multiple Implementations</p>
          <p className="text-sm text-dark-300">
            One of the few wallets supporting both LND and C-Lightning.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Open Source</p>
          <p className="text-sm text-dark-300">
            Fully open source with a proper FOSS license from day one.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">LND vs C-Lightning</h3>

      <p className="mb-4">
        The discussion covers the differences between the two major Lightning implementations
        and why Zeus chose to support both.
      </p>

      <Callout type="info" title="Implementation Diversity">
        <p className="mt-2">
          Supporting multiple implementations is important for the health of the Lightning Network.
          If everyone used only one implementation, a bug in that software could affect the entire
          network. Diversity provides resilience.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning as a Privacy Tool</h3>

      <p className="mb-4">
        An important topic in this early episode is the privacy potential of the Lightning Network.
        Kaloudis discusses how Lightning can provide better privacy than on-chain transactions when
        used correctly.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Lightning can be a powerful privacy tool because payments are routed through multiple hops,
          and the sender and receiver don't necessarily know each other's identities. But there are
          still privacy leaks that need to be addressed."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">"Always Online" Challenge</h3>

      <p className="mb-4">
        The conversation addresses one of the common concerns about Lightning: the need to be online
        to receive payments. Kaloudis shares perspectives on this challenge and potential solutions.
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Episode Topics</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Evan's background and path to Bitcoin</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Occupy Wall Street and Bitcoin politics</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Early Lightning development experience</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Zeus wallet best features</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>LND vs C-Lightning comparison</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Lightning exchanges and liquidity</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Messaging on Lightning Network</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Lightning as a privacy tool</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Onboarding developers and users</span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Historical Context</h3>

      <p className="mb-4">
        This episode provides valuable historical context for understanding how Zeus has evolved.
        Many features discussed as future possibilities in this 2020 episode have since been implemented.
      </p>

      <Callout type="info" title="Note">
        <p className="mt-2">
          This transcript is from early 2020, before Zeus added embedded node support, the OLYMPUS LSP,
          Zeus Pay, and Cashu integration. It provides insight into the original vision and how far
          the project has come.
        </p>
      </Callout>

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
          <p className="text-sm text-dark-500">Overview of the Zeus wallet</p>
        </Link>
        <Link
          to="/section/2"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 2: Connecting to Your Node
          </p>
          <p className="text-sm text-dark-500">Remote node connection guide</p>
        </Link>
      </div>
    </TranscriptLayout>
  );
}
