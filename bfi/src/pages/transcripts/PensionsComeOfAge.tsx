import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function PensionsComeOfAge() {
  return (
    <TranscriptLayout transcriptId="pensions-come-of-age">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>ERISA (1974) created pension insurance but enabled moral hazard</li>
          <li>Liability-Driven Investing (LDI) was initially dismissed, then caused 2022 crisis</li>
          <li>Overly optimistic discount rates masked pension underfunding for decades</li>
          <li>Digital assets with fixed supply may provide more stable pension foundations</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The ERISA Era Begins</h3>

      <p className="mb-4">
        The Employee Retirement Income Security Act of 1974 established federal pension insurance
        through the Pension Benefit Guaranty Corporation (PBGC):
      </p>

      <Definition title="ERISA&apos;s Double-Edged Sword">
        <p>
          While ERISA protected pension beneficiaries, it created moral hazard:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Companies could take investment risks knowing PBGC would backstop failures</li>
          <li>Defined benefit promises became politically popular</li>
          <li>Funding discipline weakened when markets were strong</li>
          <li>Underfunding accumulated during good times</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Industry Evolution</h3>

      <p className="mb-4">
        The shift from HR to CFO oversight after the 2000 dot-com bubble marked a turning point:
      </p>

      <Example title="Pension Management Evolution">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Era</th>
              <th className="text-left py-2">Oversight</th>
              <th className="text-left py-2">Focus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">Pre-2000</td>
              <td className="py-2">HR Department</td>
              <td className="py-2">Benefits administration</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium">2000-2010</td>
              <td className="py-2">CFO Office</td>
              <td className="py-2">Balance sheet impact</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">2010+</td>
              <td className="py-2">Risk Committee</td>
              <td className="py-2">LDI and de-risking</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Discount Rate Manipulation</h3>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Pennsylvania&apos;s use of an 8.5% discount rate masked pension underfunding, leading to benefit
          increases that created massive future liabilities. The assumed return was fantasy; the
          liabilities were real.&quot;
        </p>
      </blockquote>

      <Callout type="warning" title="Discount Rate Games">
        <p>
          Higher discount rates make pension liabilities appear smaller, enabling:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Benefit increases without additional funding</li>
          <li>Reduced employer contributions during good times</li>
          <li>Political wins at the expense of future solvency</li>
          <li>Eventual bailout requirements when reality hits</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Liability-Driven Investing</h3>

      <p className="mb-4">
        LDI strategies attempted to match asset duration to liability duration:
      </p>

      <Definition title="LDI Mechanics">
        <p>
          The strategy measured pension returns against liability growth rather than absolute
          market performance:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Long-duration bonds to match long-dated liabilities</li>
          <li>Interest rate swaps for additional duration</li>
          <li>Leverage to enhance returns while managing duration</li>
          <li>Collateral requirements for derivative positions</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The 2022 UK Gilt Crisis</h3>

      <p className="mb-4">
        The Bank of England&apos;s £60 billion intervention exposed systemic vulnerabilities:
      </p>

      <Example title="Crisis Mechanics">
        <div className="space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">1. Interest Rate Spike</p>
            <p className="text-sm text-dark-400">Gilt yields rose sharply on fiscal policy concerns</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">2. Margin Calls</p>
            <p className="text-sm text-dark-400">LDI funds faced collateral requirements on derivatives</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">3. Forced Selling</p>
            <p className="text-sm text-dark-400">Gilts sold to meet margin, pushing yields higher</p>
          </div>
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="font-medium text-red-400">4. Doom Loop</p>
            <p className="text-sm text-dark-400">Selling begat more selling until BoE intervened</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Bitcoin Alternative</h3>

      <p className="mb-4">
        The article implicitly suggests digital assets with fixed supply might provide more stable
        foundations for long-term pension obligations:
      </p>

      <Callout type="info" title="Fixed Supply Benefits">
        <ul className="list-disc list-inside space-y-1">
          <li>No political manipulation of monetary supply</li>
          <li>Transparent, auditable holdings</li>
          <li>No counterparty risk in custody</li>
          <li>Global liquidity without market hours</li>
        </ul>
      </Callout>

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
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 8: Regulatory Framework
          </p>
          <p className="text-sm text-dark-500">ERISA compliance for digital assets</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
