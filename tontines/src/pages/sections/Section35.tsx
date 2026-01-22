import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Modern Tontine Products</h2>

      <p className="mb-4">
        After more than a century of regulatory prohibition, tontines are making a comeback.
        Several innovative products are emerging worldwide, each adapting the core tontine
        concept to modern financial markets and regulatory frameworks.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Tontine Trust (UK)</h3>

      <Definition title="Tontine Trust">
        <p>
          A UK-based fintech company developing tontine-style retirement products under
          Financial Conduct Authority (FCA) oversight. Key features:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Natural tontine formula</strong> for mortality credit distribution</li>
          <li><strong>Technology platform</strong> for transparent, real-time tracking</li>
          <li><strong>FCA regulatory compliance</strong> as a collective investment scheme</li>
          <li><strong>Target AUM:</strong> £1 billion within 5 years of launch</li>
        </ul>
      </Definition>

      <p className="mb-4 mt-6">
        Tontine Trust uses what they call the "Natural Tontine Formula"—a proportional
        redistribution of deceased members' assets:
      </p>

      <MathBlock>
        {`\\text{Mortality Credit}_i = \\frac{\\text{Capital}_i}{\\sum_j \\text{Capital}_j} \\times \\text{Deceased Assets}`}
      </MathBlock>

      <Callout type="info" title="UK Regulatory Approach">
        <p>
          The UK's FCA has been more open to tontine-like products than other regulators.
          Tontine Trust operates as a "Collective Investment Scheme" rather than an insurance
          product, avoiding the need for insurance company capital requirements. The 2023
          Treasury consultation on retirement products specifically mentioned tontines as
          a potential innovation worth exploring.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">UCLA Longevity Income Fund</h3>

      <p className="mb-4">
        Professor Moshe Milevsky at York University (formerly UCLA) has developed the
        theoretical foundation for "optimal tontines" and is working to bring them to market
        in the United States.
      </p>

      <Definition title="Riccati Tontine">
        <p>
          Milevsky's "Riccati Tontine" is based on solving an optimal control problem that
          maximizes lifetime utility. The key innovation: payout rates follow a specific
          mathematical curve derived from the Riccati differential equation.
        </p>
        <MathBlock>
          {`D(t) = \\frac{W(t)}{\\int_t^{\\omega} {}_sp_x \\cdot e^{-r(s-t)} ds}`}
        </MathBlock>
        <p className="mt-2">
          Where <InlineMath>D(t)</InlineMath> is the optimal payout and the denominator is the
          present value of remaining survival-weighted time.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-emerald-400 font-bold mb-3">UCLA Longevity Fund Features</p>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Theoretical Foundation:</strong> Based on rigorous actuarial mathematics
            and optimal control theory
          </li>
          <li>
            <strong>Regulatory Strategy:</strong> State-by-state insurance department approval
            in the US
          </li>
          <li>
            <strong>Academic Credibility:</strong> Backed by peer-reviewed research published
            in actuarial journals
          </li>
          <li>
            <strong>Target Market:</strong> Defined contribution pension plans and individual
            retirement accounts
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Brookings Retirement Tontines</h3>

      <p className="mb-4">
        The Brookings Institution has published detailed proposals for implementing tontines
        within the US retirement system. Their design addresses several practical concerns:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-blue-400 font-bold mb-2">Age-Adjusted Contributions</p>
          <p className="text-sm text-dark-300">
            Members of different ages can join the same pool. Their contributions are weighted
            by actuarial factors to ensure fairness across age groups.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">Fair Allocation</p>
          <p className="text-sm text-dark-300">
            Mortality credits are distributed based on each member's exposure to mortality
            risk—those with higher death probability get larger credits.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-purple-500">
          <p className="text-purple-400 font-bold mb-2">Spousal Protection</p>
          <p className="text-sm text-dark-300">
            Joint-and-survivor options allow married couples to continue payments to the
            surviving spouse, addressing a key consumer concern.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-2">Inflation Adjustment</p>
          <p className="text-sm text-dark-300">
            Payouts can be indexed to inflation, protecting purchasing power over multi-decade
            retirements.
          </p>
        </div>
      </div>

      <Example title="Brookings Age-Weighted Formula">
        <p className="mb-3">
          When members of different ages join, their contributions are converted to
          "actuarial units" based on life expectancy:
        </p>
        <MathBlock>
          {`\\text{Units}_i = \\frac{\\text{Contribution}_i}{\\ddot{a}_{x_i}}`}
        </MathBlock>
        <p className="mt-3">
          For example, a 65-year-old contributing $100,000:
        </p>
        <MathBlock>
          {`\\text{Units}_{65} = \\frac{\\$100{,}000}{14.2} = 7{,}042 \\text{ units}`}
        </MathBlock>
        <p className="mt-3">
          A 75-year-old contributing $100,000 (shorter life expectancy):
        </p>
        <MathBlock>
          {`\\text{Units}_{75} = \\frac{\\$100{,}000}{9.1} = 10{,}989 \\text{ units}`}
        </MathBlock>
        <p className="mt-3 text-dark-400">
          The 75-year-old gets more units because they have fewer expected years to receive
          payments—ensuring actuarial fairness.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Netherlands Pension Reform (2023)</h3>

      <p className="mb-4">
        The Netherlands completed a major pension system overhaul in 2023, introducing
        elements that closely resemble modern tontine design:
      </p>

      <Definition title="Solidary Pension Scheme">
        <p>
          The Dutch "solidair pensioencontract" (solidary pension contract) features:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Collective risk sharing</strong> across generations of participants</li>
          <li><strong>Variable benefits</strong> that adjust based on fund performance</li>
          <li><strong>Solidarity reserves</strong> to buffer unexpected shocks</li>
          <li><strong>No guarantees</strong> from employers or insurers</li>
        </ul>
      </Definition>

      <Callout type="note" title="Scale of Dutch Reform">
        <p>
          The Netherlands has over €1.5 trillion in pension assets—one of the largest
          funded pension systems in the world. The 2023 reform transitions from defined
          benefit promises to collective defined contribution with risk-sharing. This
          effectively creates the world's largest tontine-like structure.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Comparison of Modern Products</h3>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="text-left border-b border-dark-700">
            <th className="pb-2">Product</th>
            <th className="pb-2">Jurisdiction</th>
            <th className="pb-2">Key Innovation</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody className="text-dark-300">
          <tr className="border-b border-dark-800">
            <td className="py-2">Tontine Trust</td>
            <td className="py-2">UK</td>
            <td className="py-2">Tech platform</td>
            <td className="py-2 text-amber-400">Development</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">UCLA Fund</td>
            <td className="py-2">US</td>
            <td className="py-2">Riccati formula</td>
            <td className="py-2 text-amber-400">Regulatory</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Brookings</td>
            <td className="py-2">US</td>
            <td className="py-2">Age-weighting</td>
            <td className="py-2 text-blue-400">Proposal</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">VPLA</td>
            <td className="py-2">Canada</td>
            <td className="py-2">Smoothing</td>
            <td className="py-2 text-emerald-400">Legislated</td>
          </tr>
          <tr>
            <td className="py-2">Solidary</td>
            <td className="py-2">Netherlands</td>
            <td className="py-2">Collective DC</td>
            <td className="py-2 text-emerald-400">Active</td>
          </tr>
        </tbody>
      </table>

      <p className="text-dark-400 italic">
        The diversity of modern tontine products shows the concept adapting to different
        regulatory environments and consumer needs. Technology is playing an increasingly
        important role in making these products transparent and accessible. Let's examine
        the technology enablers next.
      </p>
    </LessonLayout>
  );
}
