import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function RockPaperBitcoin() {
  return (
    <TranscriptLayout transcriptId="rock-paper-bitcoin">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Rock = physical assets (gold, land, tangible goods)</li>
          <li>Paper = fiat abstractions (government, credentials, conventional authority)</li>
          <li>Bitcoin = the metaphysical (not physical, not abstract, but very real)</li>
          <li>This framework re-evaluates value in health, education, and business</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">A New Framework for Value</h3>

      <p className="mb-4">
        The article introduces a framework inspired by Rock-Paper-Scissors for understanding
        systems and incentives on a Bitcoin standard:
      </p>

      <Definition title="The Three Categories">
        <div className="space-y-4 mt-2">
          <div>
            <p className="font-medium text-dark-200">Rock (Physical)</p>
            <p className="text-sm text-dark-400">Hard assets, gold, tangible goods, the material world</p>
          </div>
          <div>
            <p className="font-medium text-dark-200">Paper (Abstract)</p>
            <p className="text-sm text-dark-400">Government authority, credentials, fiat money, conventional institutions</p>
          </div>
          <div>
            <p className="font-medium text-dark-200">Bitcoin (Metaphysical)</p>
            <p className="text-sm text-dark-400">&quot;Not physical, not abstract, but very real&quot; - a new category of value</p>
          </div>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Beyond Dispute Settlement</h3>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Rather than a dispute-settling game, the framework becomes a rosetta stone to discover
          what does and doesn&apos;t confer value on a Bitcoin standard.&quot;
        </p>
      </blockquote>

      <p className="mb-4">
        Bitcoin&apos;s existence requires reconceptualizing our understanding of health, money,
        education, and business.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Example: Food Systems</h3>

      <p className="mb-4">
        The framework reveals how fiat money distorts food production:
      </p>

      <Example title="Food on a Bitcoin Standard">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Fiat System</th>
              <th className="text-left py-2">Bitcoin Standard</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">Subsidies distort prices</td>
              <td className="py-2">True cost discovery</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Misguided nutrition guidelines</td>
              <td className="py-2">Outcomes-based health</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Industrial monoculture</td>
              <td className="py-2">Sustainable farming practices</td>
            </tr>
            <tr>
              <td className="py-2">Processed food optimization</td>
              <td className="py-2">Nutritional soundness</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="Subsidy Elimination">
        <p>
          Bitcoin eliminates subsidies and misguided nutrition guidelines, encouraging sustainable
          farming practices and nutritional soundness. Without money printing to fund agricultural
          subsidies, true costs emerge and guide better decisions.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Example: Education</h3>

      <p className="mb-4">
        The framework reveals that much of what we value in education is Paper, not Rock:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;What we think matters in a school does not actually matter at all. True value comes
          from knowledge, skills, and maturity—not rankings or diplomas.&quot;
        </p>
      </blockquote>

      <Example title="Education Value Analysis">
        <div className="space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Paper (Fiat Value)</p>
            <ul className="text-sm text-dark-400 list-disc list-inside mt-1">
              <li>University rankings</li>
              <li>Diploma credentials</li>
              <li>Accreditation status</li>
            </ul>
          </div>
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
            <p className="font-medium text-indigo-400">Rock/Bitcoin (Real Value)</p>
            <ul className="text-sm text-dark-400 list-disc list-inside mt-1">
              <li>Actual knowledge gained</li>
              <li>Practical skills developed</li>
              <li>Maturity and judgment</li>
            </ul>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Institutional Implications</h3>

      <Definition title="Revaluation Framework">
        <p>
          For institutional investors, this framework suggests examining:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Rock value:</strong> What tangible assets underlie the investment?</li>
          <li><strong>Paper value:</strong> What government-granted privileges are being monetized?</li>
          <li><strong>Bitcoin value:</strong> Does the investment survive on a hard money standard?</li>
        </ul>
      </Definition>

      <Callout type="warning" title="Paper Vulnerability">
        <p>
          Many investments derive value primarily from Paper (regulatory capture, subsidies,
          monetary policy). These face existential risk as Bitcoin adoption increases and
          fiat-dependent value propositions are revealed.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/9"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 9: Value Theory
          </p>
          <p className="text-sm text-dark-500">Understanding value on a Bitcoin standard</p>
        </a>
        <a
          href="#/section/10"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 10: Investment Analysis
          </p>
          <p className="text-sm text-dark-500">Evaluating investments in fiat vs Bitcoin terms</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
