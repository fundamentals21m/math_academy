import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath } from '@/components/common/MathBlock';

export default function McclellandTontineTrust() {
  return (
    <TranscriptLayout transcriptId="mcclelland-tontine-trust">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Tontine Trust uses blockchain for transparency and trust</li>
          <li>Fair tontine design ensures no "last survivor jackpot"</li>
          <li>Modern tontines can be globally accessible</li>
          <li>Technology solves historical trust and fraud concerns</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Blockchain for Tontines?</h3>

      <p className="mb-4">
        Dean McClelland explains the trust problem that plagued historical tontines:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The original tontines failed because of trust issues. Who's managing the money?
          Are they reporting deaths honestly? With blockchain, every transaction is public,
          every death verification is on-chain, and the rules are encoded in smart contracts.
          No one can cheat because everyone can verify."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Dean McClelland</cite>
      </blockquote>

      <Definition title="On-Chain Transparency">
        <p>
          Blockchain-based tontines provide:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Public record of all contributions and distributions</li>
          <li>Immutable rules encoded in smart contracts</li>
          <li>Verifiable death certificates via oracle networks</li>
          <li>Real-time visibility into pool health and membership</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fair Tontine Design</h3>

      <p className="mb-4">
        McClelland addresses the "last survivor jackpot" problem of traditional tontines:
      </p>

      <Example title="The Fair Tontine Model">
        <p className="mb-3">
          Unlike classical tontines where the last survivor wins everything:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong>Age-weighted contributions:</strong> Older members contribute more per unit of income
          </li>
          <li>
            <strong>Continuous redistribution:</strong> Payments adjust smoothly as members die
          </li>
          <li>
            <strong>No jackpot effect:</strong> Diminishing returns prevent last-survivor gaming
          </li>
          <li>
            <strong>Actuarially fair:</strong> Expected value is equal for all members at entry
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Global Accessibility</h3>

      <p className="mb-4">
        The interview explores how technology enables global tontine pools:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "A retired teacher in Thailand and a pensioner in Ireland can be in the same
          tontine pool. The larger the pool, the more stable the payments. Blockchain
          doesn't care about borders—it just executes the rules."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Dean McClelland</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Solving Historical Problems</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-red-400 font-bold mb-2">Historical Problems</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Fraud by administrators</li>
            <li>Falsified death records</li>
            <li>Nominee manipulation</li>
            <li>Intergenerational gaming</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Blockchain Solutions</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Transparent fund management</li>
            <li>Oracle-verified mortality</li>
            <li>Self-executing contracts</li>
            <li>Age-weighted fairness</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Regulatory Question</h3>

      <p className="mb-4">
        McClelland discusses the regulatory landscape:
      </p>

      <Callout type="warning" title="Regulatory Considerations">
        <p>
          "Tontines exist in a gray area. They're not quite insurance, not quite securities,
          not quite gambling. Different jurisdictions treat them differently. We're working
          with regulators to create a clear framework that protects consumers while enabling
          innovation."
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Death Verification</h3>

      <Definition title="Oracle-Based Mortality Verification">
        <p>
          Tontine Trust uses multiple verification methods:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Government death registry integration</li>
          <li>Periodic "proof of life" confirmations</li>
          <li>Multi-source verification before distribution</li>
          <li>Dispute resolution mechanism for edge cases</li>
        </ul>
        <p className="mt-3">
          All verifications are recorded on-chain for auditability.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/fullmer-tontine-design"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-emerald-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-emerald-400 transition-colors">
            Tontine Design Theory
          </p>
          <p className="text-sm text-dark-500">Richard Fullmer on actuarial fairness</p>
        </a>
        <a
          href="#/section/15"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 15: Modern Tontine Structures
          </p>
          <p className="text-sm text-dark-500">Contemporary implementations</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
