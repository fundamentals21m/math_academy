import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function SpGlobalUnderstandsBitcoin() {
  return (
    <TranscriptLayout transcriptId="sp-global-understands-bitcoin">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>S&amp;P Global correctly distinguishes Bitcoin from altcoins in their analysis</li>
          <li>30 years of pension mismanagement culminated in the 2022 UK gilt crisis</li>
          <li>Bitcoin may offer pensions a path to solvent plan terminations</li>
          <li>5-10 year investment horizons are appropriate for pension Bitcoin allocation</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pension Mismanagement: A 30-Year History</h3>

      <p className="mb-4">
        The evolution of pension management reveals a pattern of failures that created the current crisis:
      </p>

      <Example title="Timeline of Pension Failures">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Era</th>
              <th className="text-left py-2">Failure Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">1980s-90s</td>
              <td className="py-2">HR-run operations with no financial expertise</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">2000s</td>
              <td className="py-2">Flawed accounting standards masking underfunding</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">2010s</td>
              <td className="py-2">LDI leverage buildup without stress testing</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">2022</td>
              <td className="py-2">UK gilt crisis requiring £60B Bank of England bailout</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">S&amp;P&apos;s Sophisticated Analysis</h3>

      <p className="mb-4">
        The article praises S&amp;P Global&apos;s report on cryptocurrency adoption in U.S. state reserves and
        pension plans for making a crucial distinction:
      </p>

      <Definition title="Bitcoin vs. Altcoins">
        <p>
          S&amp;P appropriately separates Bitcoin as a <strong>monetary asset</strong> from other
          cryptocurrencies like Ethereum or Solana, which are better understood as <strong>technology
          ventures</strong>. This distinction is critical for risk assessment:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Bitcoin: Fixed supply, decentralized monetary network, store of value</li>
          <li>Altcoins: Variable supply, centralized governance, technology platform risk</li>
          <li>Different risk profiles require different analytical frameworks</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bitcoin as a Risk-Free Asset Replacement</h3>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Bitcoin could serve as a &apos;risk-free asset&apos; replacement for bonds in modern portfolio theory,
          particularly benefiting pension funds seeking recovery.&quot;
        </p>
      </blockquote>

      <p className="mb-4">
        The traditional risk-free asset (government bonds) has become problematic:
      </p>

      <Callout type="warning" title="The Bond Problem">
        <ul className="list-disc list-inside space-y-1">
          <li>Negative real yields erode purchasing power</li>
          <li>Duration risk exposed in rising rate environments</li>
          <li>Sovereign credit risk no longer negligible</li>
          <li>QE/QT volatility undermines predictability</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Institutional Opportunity</h3>

      <p className="mb-4">
        For underfunded pensions, Bitcoin adoption represents potentially the final chance to achieve
        solvent plan terminations without government bailouts:
      </p>

      <Definition title="The 5-10 Year Window">
        <p>
          S&amp;P&apos;s analysis emphasizes medium-term investment horizons for institutional Bitcoin allocation:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Short-term volatility smooths over 5+ year periods</li>
          <li>Historically, any 4-year holding period has been profitable</li>
          <li>Matches typical pension liability duration</li>
          <li>Allows for dollar-cost averaging entry strategies</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Risk Assessment Framework</h3>

      <p className="mb-4">
        The article highlights operational, regulatory, and market volatility concerns specific to
        institutional crypto adoption:
      </p>

      <Example title="Institutional Risk Categories">
        <div className="space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Operational Risk</p>
            <p className="text-sm text-dark-400">Custody solutions, key management, internal controls</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Regulatory Risk</p>
            <p className="text-sm text-dark-400">Evolving frameworks, compliance requirements, reporting</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Market Volatility</p>
            <p className="text-sm text-dark-400">Drawdown tolerance, liquidity requirements, rebalancing</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/2"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 2: Institutional Adoption
          </p>
          <p className="text-sm text-dark-500">Trends in corporate and fund allocation</p>
        </a>
        <a
          href="#/section/5"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 5: Portfolio Allocation
          </p>
          <p className="text-sm text-dark-500">Optimal Bitcoin allocation strategies</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
