import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function LightningAnnuities() {
  return (
    <TranscriptLayout transcriptId="lightning-annuities">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Annuities on fiat lose purchasing power annually to inflation</li>
          <li>Bitcoin&apos;s fixed supply could maintain or increase annuity purchasing power</li>
          <li>Low interest rates maximize incentives for mutual cooperation</li>
          <li>Lightning Network enables peer-to-peer financial instruments</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What Are Annuities?</h3>

      <p className="mb-4">
        Annuities are financial instruments where the buyer exchanges a lump sum for specified
        payments over a defined period. Historically rooted in 3rd-century Rome, they protect
        against outliving one&apos;s savings:
      </p>

      <Definition title="Annuity Structure">
        <p>
          The buyer exchanges a lump sum for a specified payment on a specified time-scale:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Immediate annuity:</strong> Payments begin right away</li>
          <li><strong>Deferred annuity:</strong> Payments begin at future date</li>
          <li><strong>Fixed annuity:</strong> Constant payment amounts</li>
          <li><strong>Variable annuity:</strong> Payments tied to investment performance</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Annuities vs. Fiat Currency</h3>

      <p className="mb-4">
        On inflationary fiat systems, annuities lose purchasing power annually:
      </p>

      <Example title="Fiat Annuity Erosion">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Year</th>
              <th className="text-left py-2">Nominal Payment</th>
              <th className="text-left py-2">Real Value (3% inflation)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">1</td>
              <td className="py-2">$10,000</td>
              <td className="py-2">$10,000</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">10</td>
              <td className="py-2">$10,000</td>
              <td className="py-2">$7,441</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">20</td>
              <td className="py-2">$10,000</td>
              <td className="py-2">$5,537</td>
            </tr>
            <tr>
              <td className="py-2">30</td>
              <td className="py-2">$10,000</td>
              <td className="py-2">$4,120</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          On a Bitcoin standard with its capped supply, annuities could maintain or increase
          purchasing power through the halving mechanism, potentially decreasing payout
          amounts over time as Bitcoin becomes scarcer.
        </p>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Game Theory and Cooperation</h3>

      <p className="mb-4">
        Drawing from Robert Axelrod&apos;s <em>The Evolution of Cooperation</em>, the article
        connects discount factors in the Prisoner&apos;s Dilemma to financial cooperation:
      </p>

      <Definition title="Cooperation and Interest Rates">
        <p>
          The relationship between interest rates and cooperation:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Low interest rates:</strong> Future payoffs valuable, cooperation encouraged</li>
          <li><strong>High interest rates:</strong> Future payoffs discounted, defection tempting</li>
          <li><strong>Bitcoin&apos;s near-zero rate:</strong> Maximizes incentives for mutual cooperation</li>
        </ul>
      </Definition>

      <Callout type="info" title="The Axelrod Connection">
        <p>
          In iterated games, cooperation emerges when players value future interactions.
          A sound money system with low time preference creates conditions where long-term
          relationships and reputation become more valuable than short-term extraction.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning Network Implementation</h3>

      <p className="mb-4">
        The author envisions peer-to-peer annuities on Bitcoin&apos;s Lightning Network, enabling
        direct value exchange without intermediaries:
      </p>

      <Example title="P2P Annuity Example">
        <div className="space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Scenario</p>
            <p className="text-sm text-dark-400">
              Fund a Lightning channel with a local farmer for weekly food purchases
            </p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Commitment</p>
            <p className="text-sm text-dark-400">
              Visible on-chain commitment creates accountability
            </p>
          </div>
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
            <p className="font-medium text-indigo-400">Capital Markets Opportunity</p>
            <p className="text-sm text-dark-400">
              These income streams could influence creditworthiness and spawn
              capital markets around future payment flows
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Institutional Implications</h3>

      <Definition title="New Financial Products">
        <p>
          Lightning-based annuities could enable:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Disintermediated pension payments</li>
          <li>Programmable corporate benefit distributions</li>
          <li>Transparent government transfer payments</li>
          <li>Peer-to-peer retirement income streams</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/7"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 7: Pension Strategies
          </p>
          <p className="text-sm text-dark-500">Bitcoin allocation for pension funds</p>
        </a>
        <a
          href="#/transcript/pensions-come-of-age"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Article: Pensions Finally Come of Age
          </p>
          <p className="text-sm text-dark-500">History of pension system failures</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
