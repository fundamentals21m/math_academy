import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Regulatory Landscape</h2>

      <p className="mb-4">
        The legal status of tontines varies dramatically by jurisdiction. Some countries
        have explicit bans dating to the early 1900s, while others are actively creating
        new frameworks to accommodate tontine-like products. Understanding this landscape
        is crucial for anyone interested in modern tontine development.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">United States</h3>

      <Definition title="US Tontine Regulation">
        <p>
          Insurance is regulated at the <strong>state level</strong> in the US, creating
          a complex patchwork of rules:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Historical bans:</strong> Many states banned tontines after the 1905 Armstrong Investigation</li>
          <li><strong>No federal prohibition:</strong> There is no explicit federal law against tontines</li>
          <li><strong>Modern uncertainty:</strong> It's unclear if old tontine bans apply to modern designs</li>
        </ul>
      </Definition>

      <p className="mb-4 mt-6">
        The National Association of Insurance Commissioners (NAIC) has been discussing
        tontines in recent years:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="space-y-4">
          <li>
            <p className="text-emerald-400 font-semibold">2021: Initial Discussions</p>
            <p className="text-sm text-dark-300 mt-1">
              NAIC working groups began examining whether tontines could address the
              "retirement income gap"—the difference between what retirees need and
              what current products provide.
            </p>
          </li>
          <li>
            <p className="text-emerald-400 font-semibold">2022: Academic Input</p>
            <p className="text-sm text-dark-300 mt-1">
              Actuarial researchers presented modern tontine designs to regulators,
              emphasizing differences from scandal-prone historical versions.
            </p>
          </li>
          <li>
            <p className="text-emerald-400 font-semibold">2023: Consumer Protection Focus</p>
            <p className="text-sm text-dark-300 mt-1">
              Discussions centered on disclosure requirements and suitability standards
              if tontines were to be permitted.
            </p>
          </li>
        </ul>
      </div>

      <Callout type="note" title="The Armstrong Investigation Legacy">
        <p>
          New York's 1905 Armstrong Investigation revealed massive fraud in tontine insurance.
          The resulting regulations didn't technically ban tontines but made them impractical
          by requiring companies to return unused mortality reserves. Most states followed
          New York's lead, creating de facto prohibition through regulatory requirements
          rather than explicit bans.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">United Kingdom</h3>

      <p className="mb-4">
        The UK has taken a more exploratory approach to tontine regulation:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-blue-400 font-bold mb-2">FCA Position</p>
          <p className="text-sm text-dark-300">
            The Financial Conduct Authority has been open to innovative retirement products.
            Tontines may qualify as "Collective Investment Schemes" rather than insurance,
            avoiding traditional insurance regulation.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">Treasury Consultation (2023)</p>
          <p className="text-sm text-dark-300">
            HM Treasury's consultation on retirement income specifically mentioned tontines
            as a potential innovation, signaling regulatory openness to properly structured
            products.
          </p>
        </div>
      </div>

      <p className="mb-4">
        Key UK regulatory considerations include:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Consumer protection:</strong> Clear disclosure of mortality pooling risks
        </li>
        <li>
          <strong>Suitability assessment:</strong> Ensuring tontines are appropriate for
          individual circumstances
        </li>
        <li>
          <strong>Fund governance:</strong> Requirements for professional management and oversight
        </li>
        <li>
          <strong>Complaints handling:</strong> Mechanisms for resolving member disputes
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Canada</h3>

      <p className="mb-4">
        Canada has the <strong>most advanced regulatory framework</strong> for tontine-like
        products among major economies:
      </p>

      <Definition title="Canadian VPLA Framework">
        <p>
          Canada's Variable Payment Life Annuity (VPLA) legislation provides a comprehensive
          legal framework:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Federal pension legislation:</strong> Amendments to the Pension Benefits Standards Act</li>
          <li><strong>Income Tax Act (2024):</strong> Tax treatment of VPLAs explicitly defined</li>
          <li><strong>Provincial harmonization:</strong> Provinces aligning with federal framework</li>
        </ul>
      </Definition>

      <Example title="Canadian VPLA Requirements">
        <p className="mb-3">
          To offer a VPLA in Canada, providers must meet specific requirements:
        </p>
        <div className="bg-dark-900 rounded p-3">
          <ul className="space-y-2 text-sm">
            <li><strong>1. Registered Pension Plan:</strong> Must be offered through an RPP</li>
            <li><strong>2. Actuarial Certification:</strong> Annual certification by qualified actuary</li>
            <li><strong>3. Mortality Tables:</strong> Must use prescribed conservative mortality assumptions</li>
            <li><strong>4. Investment Guidelines:</strong> Asset mix and risk limits specified</li>
            <li><strong>5. Member Disclosure:</strong> Clear explanation of variable nature of payments</li>
            <li><strong>6. Minimum Pool Size:</strong> Sufficient members for mortality diversification</li>
          </ul>
        </div>
      </Example>

      <Callout type="info" title="Why Canada Leads">
        <p>
          Canada's defined benefit pension system has been under stress for decades.
          Rather than abandoning risk-sharing entirely (as US plans largely did), Canada
          developed VPLAs as a middle ground—sharing longevity risk among members rather
          than transferring it to insurers or leaving it entirely with individuals.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">European Union</h3>

      <p className="mb-4">
        The EU's regulatory approach varies by member state, but the IORP II Directive
        provides a potential framework:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-emerald-400 font-bold mb-3">IORP II Directive</p>
        <p className="text-sm text-dark-300 mb-3">
          The Institutions for Occupational Retirement Provision (IORP) II Directive
          governs workplace pensions across the EU. While not designed for tontines,
          its principles could accommodate tontine-like structures:
        </p>
        <ul className="space-y-2 text-sm text-dark-300">
          <li>
            <strong>Risk-sharing permitted:</strong> The directive allows for collective
            risk-sharing arrangements among members
          </li>
          <li>
            <strong>Variable benefits:</strong> Benefits can vary based on fund performance
            and demographic experience
          </li>
          <li>
            <strong>Cross-border provision:</strong> EU-wide operation possible under passporting
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Netherlands: A Case Study</h3>

      <p className="mb-4">
        The Netherlands deserves special attention as a regulatory pioneer:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="space-y-4">
          <li>
            <p className="text-emerald-400 font-semibold">2023 Pension Reform</p>
            <p className="text-sm text-dark-300 mt-1">
              Complete overhaul transitioning from defined benefit to collective defined
              contribution with explicit risk-sharing among participants.
            </p>
          </li>
          <li>
            <p className="text-emerald-400 font-semibold">Solidarity Reserve</p>
            <p className="text-sm text-dark-300 mt-1">
              Funds can maintain a "solidarity reserve" (up to 15% of assets) to buffer
              shocks and smooth intergenerational transfers.
            </p>
          </li>
          <li>
            <p className="text-emerald-400 font-semibold">Variable Annuities</p>
            <p className="text-sm text-dark-300 mt-1">
              The reform explicitly allows for variable annuities where payouts depend
              on fund performance and mortality experience.
            </p>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Regulatory Comparison</h3>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="text-left border-b border-dark-700">
            <th className="pb-2">Jurisdiction</th>
            <th className="pb-2">Current Status</th>
            <th className="pb-2">Key Barrier</th>
            <th className="pb-2">Outlook</th>
          </tr>
        </thead>
        <tbody className="text-dark-300">
          <tr className="border-b border-dark-800">
            <td className="py-2">United States</td>
            <td className="py-2 text-rose-400">Effectively banned</td>
            <td className="py-2">State-level regulation</td>
            <td className="py-2 text-amber-400">Uncertain</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">United Kingdom</td>
            <td className="py-2 text-amber-400">Under review</td>
            <td className="py-2">Consumer protection</td>
            <td className="py-2 text-emerald-400">Favorable</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Canada</td>
            <td className="py-2 text-emerald-400">Legislated</td>
            <td className="py-2">Implementation</td>
            <td className="py-2 text-emerald-400">Active</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">EU (general)</td>
            <td className="py-2 text-amber-400">No framework</td>
            <td className="py-2">Varies by state</td>
            <td className="py-2 text-amber-400">Mixed</td>
          </tr>
          <tr>
            <td className="py-2">Netherlands</td>
            <td className="py-2 text-emerald-400">Reformed</td>
            <td className="py-2">Transition complexity</td>
            <td className="py-2 text-emerald-400">Leading</td>
          </tr>
        </tbody>
      </table>

      <Callout type="warning" title="Regulatory Arbitrage Risk">
        <p>
          The inconsistent regulatory treatment of tontines creates incentives for
          "regulatory arbitrage"—structuring products in favorable jurisdictions to
          serve customers in restrictive ones. This could undermine consumer protection
          if products are designed to evade rather than comply with regulations.
        </p>
      </Callout>

      <p className="text-dark-400 italic">
        Regulatory approval is necessary but not sufficient for tontine success. Even
        with favorable regulation, tontines face practical challenges—most notably
        adverse selection. Let's examine this critical problem next.
      </p>
    </LessonLayout>
  );
}
