import { Link } from 'react-router-dom';
import { TranscriptLayout } from '@/components/layout';
import { Callout } from '@/components/common/Callout';

export default function BitcoinMagZeusFight() {
  return (
    <TranscriptLayout transcriptId="bitcoin-mag-zeus-fight">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Zeus commits to staying in the US and fighting for self-custody wallets</li>
          <li>Self-custody and no KYC are non-negotiable principles</li>
          <li>The embedded node lets Zeus continue operating without custodial services</li>
          <li>Open-source software should not be criminalized</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">A Line in the Sand</h3>

      <p className="mb-4">
        On April 26, 2024, following the arrest of the Samourai wallet developers and Phoenix wallet's
        decision to halt service to US customers, Evan Kaloudis made a public declaration: Zeus would
        not back down from the fight for self-custody Bitcoin wallets.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Zeus really doesn't like to compromise. We've seen a lot of wallets that'll make trade-offs
          for various reasons. We've seen wallets that want to just provide the sharpest UX at the
          cost of self-custody or privacy. We've seen wallets from Silicon Valley that close you
          into a walled garden. That's not us."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Regulatory Backdrop</h3>

      <p className="mb-4">
        This article was published in the wake of significant regulatory actions against Bitcoin
        privacy tools and self-custody wallets in the United States.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-amber-400 mb-3">Timeline of Events</h4>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-16 text-amber-400 font-mono text-sm flex-shrink-0">Apr 2024</span>
            <div>
              <p className="font-medium text-dark-200">Samourai Wallet Arrests</p>
              <p className="text-sm">Founders arrested on money transmission charges</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-16 text-amber-400 font-mono text-sm flex-shrink-0">Apr 2024</span>
            <div>
              <p className="font-medium text-dark-200">Phoenix Exits US</p>
              <p className="text-sm">ACINQ halts Phoenix wallet service to US customers</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-16 text-amber-400 font-mono text-sm flex-shrink-0">Apr 2024</span>
            <div>
              <p className="font-medium text-dark-200">Wasabi Blocks US Users</p>
              <p className="text-sm">Wasabi Wallet begins blocking US IP addresses</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-16 text-amber-400 font-mono text-sm flex-shrink-0">May 2024</span>
            <div>
              <p className="font-medium text-dark-200">Zeus Takes a Stand</p>
              <p className="text-sm">Kaloudis commits to fighting for self-custody rights</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Zeus's Position</h3>

      <p className="mb-4">
        While other wallets chose to exit the US market or add KYC requirements, Zeus took a
        different approach: standing firm on principles while ensuring the software could
        continue to function independently.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "We really bridged a gap for them by putting it in the phone and offering up basically
          all the same functionality that a remote user would have. I think ZEUS is going to really
          evolve pretty drastically, but our priority and our two hard lines are self custody and no KYC."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">The Embedded Node Advantage</p>
          <p className="text-sm text-dark-300">
            Because Zeus can run a full Lightning node on your phone, it doesn't depend on
            any centralized service to function. Even if OLYMPUS were shut down, users could
            still use Zeus with their own channels.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Open Source Protection</p>
          <p className="text-sm text-dark-300">
            As open-source software, Zeus's code is publicly available. Kaloudis argues that
            publishing code should not be a crime, as it's protected speech.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Community's Role</h3>

      <p className="mb-4">
        The article highlights how Zeus's community and contributor base would continue to
        support the project regardless of what happens to the official organization.
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

      <Callout type="info" title="The Open Source Safety Net">
        <p className="mt-2">
          Because Zeus is fully open source under the AGPL v3 license, the code cannot be taken away.
          Even in a worst-case regulatory scenario, the community could fork the project and continue
          development. This is the power of truly free software.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why This Matters</h3>

      <p className="mb-4">
        The fight for self-custody isn't just about one wallet or one developer. It's about
        the fundamental right to hold and transact with your own money without surveillance
        or permission.
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">What's at Stake</h4>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-red-400 text-sm">⚠️</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Financial Surveillance</p>
              <p className="text-sm">Without self-custody, every transaction can be monitored</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-red-400 text-sm">⚠️</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Censorship</p>
              <p className="text-sm">Custodians can freeze funds or block transactions</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-red-400 text-sm">⚠️</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Loss of Privacy</p>
              <p className="text-sm">KYC requirements link all activity to your identity</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-400 text-sm">✓</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Zeus's Answer</p>
              <p className="text-sm">Self-custodial, KYC-free, open source — by design</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">A Call to Action</h3>

      <p className="mb-4">
        The article serves as both a news piece and a call to action for the Bitcoin community
        to support self-custody wallet development and push back against regulatory overreach.
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Article Topics</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Zeus's commitment to staying in the US</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The regulatory landscape for Bitcoin wallets</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Self-custody and no KYC as non-negotiable</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The embedded node as a resilience feature</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Open source software and free speech</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Community support and future development</span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <p className="mb-4">
        Explore these course sections to understand why self-custody matters:
      </p>

      <div className="grid md:grid-cols-2 gap-3">
        <Link
          to="/section/0"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 0: Introduction to Zeus
          </p>
          <p className="text-sm text-dark-500">Why self-custody matters</p>
        </Link>
        <Link
          to="/section/5"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 5: Security & Privacy
          </p>
          <p className="text-sm text-dark-500">Protecting your financial sovereignty</p>
        </Link>
      </div>
    </TranscriptLayout>
  );
}
