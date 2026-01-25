import { Link } from 'react-router-dom';
import { TranscriptLayout } from '@/components/layout';
import { Callout } from '@/components/common/Callout';

export default function Tls90BuildingZeus() {
  return (
    <TranscriptLayout transcriptId="tls90-building-zeus">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Channel management and liquidity are the main challenges for new Lightning users</li>
          <li>Lightning Network shines for in-person "meat space" transactions</li>
          <li>User privacy is the top priority for future Lightning development</li>
          <li>Self-custody and no KYC are Zeus's two hard lines</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Journey of Building Zeus</h3>

      <p className="mb-4">
        In this comprehensive interview with Kevin Rooke, Evan Kaloudis discusses the evolution of Zeus
        from a simple remote node controller to a full-featured Lightning wallet. The conversation covers
        technical challenges, user experience considerations, and the business model behind open-source development.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "One of the main challenges is channel management and liquidity. Many people download Zeus
          and are well acquainted with how on-chain Bitcoin works, but then they struggle when they
          can't make Lightning payments. The concept of payment channels is foreign to them, so there's
          a big educational process involved."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Custodial vs Self-Custodial Tension</h3>

      <p className="mb-4">
        A central theme of the discussion is the ongoing tension between custodial convenience and
        self-custodial sovereignty. Kaloudis explains Zeus's position in this spectrum.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Custodial Trade-offs</p>
          <p className="text-sm text-dark-300">
            Easier UX, instant payments, no channel management. But you don't control your keys,
            and the custodian can censor transactions or shut down.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Self-Custodial Trade-offs</p>
          <p className="text-sm text-dark-300">
            Full control over funds, censorship resistance, privacy. Requires understanding channels,
            liquidity management, and backup procedures.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Where Lightning Shines</h3>

      <p className="mb-4">
        Kaloudis shares his perspective on where the Lightning Network provides the most value compared
        to on-chain Bitcoin transactions.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Lightning Network really shines in 'meat space' — the real world, face-to-face transactions.
          For online purchases that will be mailed, near-instant confirmation isn't as necessary. But
          when you're buying a coffee or paying for a meal, that instant finality is crucial."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Lightning Use Cases</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-amber-400 font-medium mb-2">Ideal for Lightning</p>
            <ul className="space-y-1 text-sm text-dark-300">
              <li>• Point-of-sale retail purchases</li>
              <li>• Coffee shops and restaurants</li>
              <li>• Streaming payments and tips</li>
              <li>• Gaming microtransactions</li>
              <li>• Any time-sensitive payment</li>
            </ul>
          </div>
          <div>
            <p className="text-dark-400 font-medium mb-2">On-chain May Be Better</p>
            <ul className="space-y-1 text-sm text-dark-300">
              <li>• Large purchases with shipping</li>
              <li>• Long-term savings</li>
              <li>• When privacy from routing is needed</li>
              <li>• Inheritance planning</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy as Top Priority</h3>

      <p className="mb-4">
        When asked what he would change about the Lightning Network, Kaloudis's answer is clear:
        more user privacy. He discusses the current state of privacy and what improvements are needed.
      </p>

      <Callout type="warning" title="Current Privacy Limitations">
        <p className="mt-2">
          "There's still a lot that could be ascertained by being in the middle listening to payments.
          Routing nodes can see the amounts flowing through them, the timing of payments, and sometimes
          infer source and destination. We need more people using SCID aliases, blinded routes, and
          eventually channel factories."
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Zeus's Hard Lines</h3>

      <p className="mb-4">
        Kaloudis articulates the two principles that Zeus will never compromise on, regardless of
        market pressure or regulatory threats.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-3xl">🔐</span>
            </div>
            <h4 className="text-lg font-semibold text-amber-400 mb-2">Self-Custody</h4>
            <p className="text-sm text-dark-300">
              Users always control their own keys and funds. Zeus will never hold custody
              of user funds or require trust in a third party.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-3xl">🚫</span>
            </div>
            <h4 className="text-lg font-semibold text-amber-400 mb-2">No KYC</h4>
            <p className="text-sm text-dark-300">
              Zeus will never require identity verification to use the wallet. Privacy is
              a fundamental right, not a feature to be traded away.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Open Source Funding</h3>

      <p className="mb-4">
        The conversation explores the difficult economics of open-source software development. Kaloudis
        shares how Zeus sustains itself while remaining free and open.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "We've built such a great product that empowers so many people that even without Olympus
          and our LSP services, I'm confident there'd be thousands of people still using the software.
          And I'm sure people would continue to contribute to it at an open-source level to keep
          making it better."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Tor Integration</h3>

      <p className="mb-4">
        The discussion covers Zeus's Tor integration, which allows users to connect to their nodes
        privately without exposing their IP addresses.
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Episode Topics</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Building Zeus and its evolution over time</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Custodial vs self-custodial Lightning wallets</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Channel management challenges and liquidity</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Where Lightning Network excels</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Privacy improvements needed for Lightning</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Tor integration for private connections</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Taro (Taproot Assets) and future possibilities</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Business model and roadmap for Zeus</span>
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
          <p className="text-sm text-dark-500">Overview of the Zeus wallet</p>
        </Link>
        <Link
          to="/section/3"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 3: Channel Management
          </p>
          <p className="text-sm text-dark-500">Understanding Lightning channels</p>
        </Link>
      </div>
    </TranscriptLayout>
  );
}
