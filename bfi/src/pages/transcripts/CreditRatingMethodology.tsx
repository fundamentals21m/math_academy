import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function CreditRatingMethodology() {
  return (
    <TranscriptLayout transcriptId="credit-rating-methodology">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>S&amp;P Global created the first credit rating methodology for Bitcoin treasury companies</li>
          <li>Bitcoin is excluded from equity calculations due to volatility concerns</li>
          <li>Currency mismatch risk is a central concern when obligations are USD-denominated</li>
          <li>This framework opens the $130 trillion fixed-income market to Bitcoin exposure</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">A Paradigm Shift in Credit Analysis</h3>

      <p className="mb-4">
        S&amp;P Global Ratings developed its first credit rating methodology specifically for Bitcoin treasury
        companies, marking a significant departure from traditional assessment approaches. This framework
        represents institutional finance&apos;s formal recognition of Bitcoin as a distinct asset class.
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Bitcoin is excluded from equity calculations due to its volatility and uncorrelated market risks.
          This creates &apos;negative total adjusted capital&apos; despite significant asset holdings.&quot;
        </p>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Five Risk Dimensions</h3>

      <p className="mb-4">
        The methodology identifies five key dimensions for assessing Bitcoin treasury companies:
      </p>

      <Example title="S&P Risk Assessment Framework">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Dimension</th>
              <th className="text-left py-2">Concern</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">Asset Concentration</td>
              <td className="py-2">Single-asset exposure creates tail risk</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">Risk-Adjusted Capital</td>
              <td className="py-2">Bitcoin excluded from equity creates negative capital</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">Business Diversification</td>
              <td className="py-2">Limited operational revenue streams</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">Liquidity Profile</td>
              <td className="py-2">Ability to meet obligations without forced sales</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">Debt Structure</td>
              <td className="py-2">Maturity profile and refinancing vulnerabilities</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Currency Mismatch Risk</h3>

      <Definition title="The Core Vulnerability">
        <p>
          Companies holding Bitcoin assets face significant exposure when their obligations are denominated
          in U.S. dollars. This creates potential forced selling scenarios during Bitcoin downturns:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Debt service payments remain fixed in USD terms</li>
          <li>Bitcoin value volatility can trigger covenant breaches</li>
          <li>Forced liquidation at unfavorable prices compounds losses</li>
          <li>Refinancing becomes difficult during market stress</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Industry Response</h3>

      <p className="mb-4">
        Some analysts argue the methodology misunderstands Bitcoin&apos;s unique properties:
      </p>

      <Callout type="warning" title="Bitcoin Bull Critique">
        <p>
          The framework &quot;ignores its incredible liquidity, independence from the rest of the financial system,
          and the optionality it provides during systemic stress.&quot; Unlike traditional assets, Bitcoin can be
          liquidated 24/7 on global markets without counterparty risk.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Market Significance</h3>

      <p className="mb-4">
        Despite these critiques, this framework establishes the first institutional standard for rating
        Bitcoin treasury companies. More importantly, it potentially opens the $130 trillion fixed-income
        market to Bitcoin exposure through rated instruments.
      </p>

      <Definition title="The Fixed Income Gateway">
        <p>
          Pension funds, insurance companies, and other institutional investors are often restricted to
          investment-grade securities. By creating a rating methodology, S&amp;P enables these institutions to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Gain indirect Bitcoin exposure through rated corporate bonds</li>
          <li>Satisfy fiduciary requirements with traditional fixed-income instruments</li>
          <li>Access Bitcoin&apos;s return profile within regulatory frameworks</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/1"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 1: Bitcoin Fundamentals
          </p>
          <p className="text-sm text-dark-500">Core concepts for institutions</p>
        </a>
        <a
          href="#/section/3"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 3: Risk Assessment
          </p>
          <p className="text-sm text-dark-500">Evaluating Bitcoin investment risk</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
