import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function BitcoinMinerValuation() {
  return (
    <TranscriptLayout transcriptId="bitcoin-miner-valuation">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Most Bitcoin ASIC miners are priced beyond their breakeven value</li>
          <li>Mining is economically irrational compared to buying Bitcoin directly</li>
          <li>Industry bankruptcies (Core Scientific, Argo) stemmed from improper miner valuations</li>
          <li>Sub-6 cent electricity is required for profitable mining operations</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Personal Experiment</h3>

      <p className="mb-4">
        The author describes purchasing a Bitmain S19JPro ASIC miner in 2022, which proved to be
        economically irrational compared to simply buying Bitcoin:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;The miner cost the same as buying Bitcoin directly, but produced a fraction of the Bitcoin
          value over its lifetime. The only advantage was obtaining &apos;virgin&apos; Bitcoin with no
          transaction history.&quot;
        </p>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Industry Valuation Crisis</h3>

      <p className="mb-4">
        Large mining companies faced bankruptcy due to fundamental valuation errors:
      </p>

      <Example title="Mining Company Failures">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Company</th>
              <th className="text-left py-2">Issue</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">Core Scientific</td>
              <td className="py-2">Used overvalued miners as loan collateral</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">Argo Blockchain</td>
              <td className="py-2">Lacked standardized appraisal methods</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">Others</td>
              <td className="py-2">Miner depreciation exceeded production value</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Breakeven Framework</h3>

      <Definition title="Key Valuation Variables">
        <p>
          An institutional-grade valuation of Bitcoin miners must consider:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Difficulty adjustments:</strong> 30-40% annual increases erode profitability</li>
          <li><strong>Electricity costs:</strong> Sub-6 cents/kWh required for profitability</li>
          <li><strong>Hardware efficiency:</strong> J/TH ratio determines competitiveness</li>
          <li><strong>Fee income:</strong> Transaction fees supplement block rewards</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Irrationality of Mining</h3>

      <p className="mb-4">
        The article explores why mining persists despite being economically irrational, drawing
        an analogy to irrational numbers in mathematics:
      </p>

      <Callout type="info" title="Non-Economic Motivations">
        <ul className="list-disc list-inside space-y-1">
          <li>Ideological: Resisting governance and regulation</li>
          <li>Privacy: Obtaining &quot;virgin&quot; Bitcoin with no transaction history</li>
          <li>Geographic arbitrage: Monetizing stranded energy resources</li>
          <li>Heat recovery: Mining as a byproduct of heating needs</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Market Irrationality</h3>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Most Bitcoin ASIC miners are priced well beyond their breakeven value. Only newer,
          efficient models like the S21 Pro achieve profitability under optimal conditions.&quot;
        </p>
      </blockquote>

      <p className="mb-4">
        Miners command premium prices despite poor returns, suggesting buyers seek non-financial value:
      </p>

      <Example title="Miner Valuation Reality">
        <div className="space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Market Price</p>
            <p className="text-sm text-dark-400">What miners actually sell for in the market</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Breakeven Value</p>
            <p className="text-sm text-dark-400">NPV of expected Bitcoin production minus electricity</p>
          </div>
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="font-medium text-red-400">Gap = Irrationality Premium</p>
            <p className="text-sm text-dark-400">Buyers pay more than economic value justifies</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Institutional Implications</h3>

      <Definition title="Due Diligence Requirements">
        <p>
          For institutions considering mining exposure, the article suggests:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Never accept miner-based collateral at face value</li>
          <li>Model difficulty adjustments explicitly in projections</li>
          <li>Require power purchase agreements with sub-6 cent rates</li>
          <li>Compare mining economics to direct Bitcoin acquisition</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/4"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 4: Mining Economics
          </p>
          <p className="text-sm text-dark-500">Understanding Bitcoin mining dynamics</p>
        </a>
        <a
          href="#/section/6"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 6: Due Diligence
          </p>
          <p className="text-sm text-dark-500">Evaluating Bitcoin investments</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
