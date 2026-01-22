import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath } from '@/components/common/MathBlock';

export default function BrookingsGateway() {
  return (
    <TranscriptLayout transcriptId="brookings-gateway">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Tontines could serve as a "gateway" to broader retirement income solutions</li>
          <li>Current regulatory frameworks don't clearly accommodate tontines</li>
          <li>Consumer protection concerns require thoughtful design</li>
          <li>Integration with Social Security and pensions needs consideration</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Retirement Crisis Context</h3>

      <p className="mb-4">
        The panel begins by framing the policy problem:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Americans are living longer but saving less. Traditional pensions are disappearing.
          401(k)s accumulate wealth but don't provide lifetime income. We have a decumulation
          crisis, and tontines—a 400-year-old idea—might be part of the solution."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— William Gale, Brookings</cite>
      </blockquote>

      <Definition title="The Decumulation Challenge">
        <p>
          Retirees face competing risks:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Longevity risk:</strong> Outliving your savings</li>
          <li><strong>Inflation risk:</strong> Purchasing power erosion</li>
          <li><strong>Market risk:</strong> Investment losses in retirement</li>
          <li><strong>Behavioral risk:</strong> Spending too much or too little</li>
        </ul>
        <p className="mt-3">
          Tontines address longevity risk through pooling, but other risks remain.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The "Gateway Drug" Concept</h3>

      <p className="mb-4">
        Mark Iwry explains the provocative title:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "People are scared of annuities. They don't want to hand over their life savings
          to an insurance company. But a tontine? That's different. You're pooling with
          people like you. It might make people more comfortable with the idea of
          converting wealth to income—a gateway to broader annuitization."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Mark Iwry, Brookings</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Regulatory Challenges</h3>

      <p className="mb-4">
        Olivia Mitchell addresses the legal landscape:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-red-400 font-bold mb-2">Current Obstacles</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>State insurance regulations unclear</li>
            <li>Securities law questions</li>
            <li>ERISA complications for pensions</li>
            <li>Anti-gambling statutes in some states</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Potential Pathways</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Federal exemption for qualified tontines</li>
            <li>Insurance company sponsorship</li>
            <li>Employer plan integration</li>
            <li>State-level pilot programs</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Consumer Protection Issues</h3>

      <Example title="Key Consumer Concerns">
        <p className="mb-3">
          The panel identifies risks that regulations should address:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong>Disclosure:</strong> Clear explanation of variable payments
          </li>
          <li>
            <strong>Liquidity:</strong> Can members withdraw? Under what conditions?
          </li>
          <li>
            <strong>Fraud prevention:</strong> Verification of deaths and membership
          </li>
          <li>
            <strong>Fee transparency:</strong> All costs clearly stated
          </li>
          <li>
            <strong>Pool viability:</strong> Minimum size and ongoing management
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Integration with Existing Systems</h3>

      <p className="mb-4">
        Gale discusses how tontines could complement current retirement programs:
      </p>

      <Callout type="info" title="Complementary Design">
        <p>
          "A tontine doesn't replace Social Security—it supplements it. Think of a
          retirement income pyramid:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Base: Social Security (guaranteed, inflation-adjusted)</li>
          <li>Middle: Employer pension or annuity (guaranteed fixed)</li>
          <li>Top: Tontine (variable, mortality-credited)</li>
        </ul>
        <p className="mt-2">
          The tontine provides upside for those who live long, funded by those who don't."
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Policy Recommendations</h3>

      <p className="mb-4">
        The panel concludes with concrete suggestions:
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Proposed Actions</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 font-bold">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">DOL/Treasury Guidance</p>
              <p className="text-sm text-dark-400">
                Clarify that tontines can be offered in qualified retirement plans
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 font-bold">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">State Insurance Exemption</p>
              <p className="text-sm text-dark-400">
                Create a model law exempting pure tontines from insurance regulation
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 font-bold">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Pilot Program</p>
              <p className="text-sm text-dark-400">
                Federal employee retirement system as a testing ground
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/forman-tontine-pensions"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-emerald-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-emerald-400 transition-colors">
            Tontine Pensions Legal Framework
          </p>
          <p className="text-sm text-dark-500">Jonathan Forman on pension integration</p>
        </a>
        <a
          href="#/section/20"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 20: Policy Considerations
          </p>
          <p className="text-sm text-dark-500">Regulatory landscape overview</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
