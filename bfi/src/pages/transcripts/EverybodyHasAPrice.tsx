import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function EverybodyHasAPrice() {
  return (
    <TranscriptLayout transcriptId="everybody-has-a-price">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>State power shifted from assassination to financial coercion</li>
          <li>Deplatforming and litigation replace physical suppression</li>
          <li>Most innovation is acquired rather than competed against</li>
          <li>Bitcoin offers an alternative incentive structure to fiat compliance</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Evolution of Control Tactics</h3>

      <p className="mb-4">
        The piece examines how state power shifted from overt methods in the 1960s to more
        subtle forms of control that coincided with increased fiat currency circulation:
      </p>

      <Example title="Control Methods Over Time">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Era</th>
              <th className="text-left py-2">Primary Method</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">1960s</td>
              <td className="py-2">Physical elimination of opposition</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">1970s-90s</td>
              <td className="py-2">Reputation destruction campaigns</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">2000s-10s</td>
              <td className="py-2">Financial coercion and debanking</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">2020s</td>
              <td className="py-2">Deplatforming and bankruptcy through litigation</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Buyout Strategy</h3>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Thousands of new technologies that were developed by startups to compete with
          Google and Amazon ended up being acquired by Google and Amazon.&quot;
        </p>
      </blockquote>

      <p className="mb-4">
        A central thesis argues that those in power now prefer purchasing cooperation rather
        than eliminating opposition. This represents a form of invisible suppression:
      </p>

      <Definition title="Acquisition as Suppression">
        <p>
          When competition cannot be beaten, it is bought:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Threatening startups acquired before they become competitors</li>
          <li>Founders receive wealth, incumbents remove threats</li>
          <li>Innovation is absorbed rather than allowed to disrupt</li>
          <li>The public never sees the alternative that might have been</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Price of Compliance</h3>

      <p className="mb-4">
        The cost of buying silence varies by individual circumstance:
      </p>

      <Example title="Compliance Pricing">
        <div className="space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">The Wealthy</p>
            <p className="text-sm text-dark-400">Face reputation attacks - money won&apos;t buy their silence</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Middle Class</p>
            <p className="text-sm text-dark-400">Job loss threats and social pressure are effective</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Vulnerable Populations</p>
            <p className="text-sm text-dark-400">Require less compensation for compliance</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bitcoin as Alternative Incentive</h3>

      <Callout type="info" title="A Different Incentive Structure">
        <p>
          Rather than bribing people into ignorance with devalued fiat currency, Bitcoin
          supposedly offers &quot;willful cooperation&quot; through its technological design and
          fixed supply cap. Participants aren&apos;t bought off - they&apos;re aligned through
          transparent, unchangeable rules.
        </p>
      </Callout>

      <Definition title="Bitcoin vs. Fiat Incentives">
        <table className="w-full text-sm mt-2">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Fiat System</th>
              <th className="text-left py-2">Bitcoin System</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">Compliance through debasement</td>
              <td className="py-2">Cooperation through scarcity</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Opaque money creation</td>
              <td className="py-2">Transparent monetary policy</td>
            </tr>
            <tr>
              <td className="py-2">Cantillon insiders benefit</td>
              <td className="py-2">Equal access for all participants</td>
            </tr>
          </tbody>
        </table>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/2"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 2: Monetary History
          </p>
          <p className="text-sm text-dark-500">Fiat currency and institutional control</p>
        </a>
        <a
          href="#/transcript/rock-paper-bitcoin"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Article: Rock Paper Bitcoin
          </p>
          <p className="text-sm text-dark-500">Framework for understanding value</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
