import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Pooled Annuity Funds (PAFs)</h2>

      <p className="mb-4">
        Canada has pioneered a new approach to longevity risk-sharing through
        <strong> Variable Payment Life Annuities (VPLAs)</strong>, also known as Pooled Annuity
        Funds. Proposed in 2019 and legislated in 2024-2025, VPLAs represent the most
        advanced regulatory framework for modern tontine-like products.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Canadian Innovation</h3>

      <Definition title="Variable Payment Life Annuity (VPLA)">
        <p>
          A pension product where:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Payments vary</strong> based on investment returns and mortality experience</li>
          <li><strong>Longevity risk is shared</strong> among all pool participants</li>
          <li><strong>Assets remain invested</strong> in a diversified portfolio</li>
          <li><strong>Income continues for life</strong> regardless of individual longevity</li>
        </ul>
      </Definition>

      <Callout type="info" title="Legislative History">
        <p>
          Canada's federal government introduced VPLA legislation as part of the 2019 budget.
          The Income Tax Act was amended in 2024 to formally recognize VPLAs, with implementation
          rules finalized in 2025. This makes Canada the first major economy to create a
          comprehensive legal framework for tontine-like pension products.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Basic Payout Formula</h3>

      <p className="mb-4">
        At its core, VPLA payouts follow a simple principle: divide your account balance
        by your expected remaining lifetime:
      </p>

      <Definition title="VPLA Payout Formula">
        <MathBlock>
          {`\\text{Payment}_t = \\frac{\\text{Account Balance}_t}{\\text{Expected Years Remaining}}`}
        </MathBlock>
        <p className="mt-3">
          In actuarial notation:
        </p>
        <MathBlock>
          {`\\text{Payment}_t = \\frac{B_t}{\\ddot{a}_{x+t}}`}
        </MathBlock>
        <p className="mt-2">
          Where <InlineMath>{'\\ddot{a}_{x+t}'}</InlineMath> is the present value of a life annuity
          due for a person aged <InlineMath>x+t</InlineMath>.
        </p>
      </Definition>

      <Example title="Basic VPLA Calculation">
        <p className="mb-3">
          Consider a 65-year-old retiree with:
        </p>
        <div className="bg-dark-900 rounded p-3 mb-4">
          <ul className="space-y-1 text-sm">
            <li><strong>Account balance:</strong> $500,000</li>
            <li><strong>Life expectancy factor:</strong> <InlineMath>{'\\ddot{a}_{65}'}</InlineMath> = 14.2 years</li>
          </ul>
        </div>
        <MathBlock>
          {`\\text{Initial Payment} = \\frac{\\$500{,}000}{14.2} = \\$35{,}211 \\text{ per year}`}
        </MathBlock>
        <p className="mt-3 text-emerald-400">
          This represents a 7.04% initial payout rate.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Smoothing Mechanism</h3>

      <p className="mb-4">
        Raw VPLA payouts would swing wildly with market returns. To provide income stability,
        Canadian regulations require a <strong>smoothing mechanism</strong> that adjusts
        payments gradually:
      </p>

      <Definition title="Payment Smoothing">
        <p>
          Instead of immediately adjusting to indicated payment levels, smoothed VPLAs
          change by a fraction of the difference each year:
        </p>
        <MathBlock>
          {`\\text{Actual Payment}_{t+1} = \\text{Actual Payment}_t + \\frac{1}{3}(\\text{Indicated Payment}_{t+1} - \\text{Actual Payment}_t)`}
        </MathBlock>
        <p className="mt-2">
          This "one-third rule" means payments adjust by at most one-third of the indicated
          change per year.
        </p>
      </Definition>

      <Example title="Smoothing in Action">
        <p className="mb-3">
          Suppose current payment is $35,000 but market gains indicate $38,000:
        </p>
        <MathBlock>
          {`\\text{Change} = \\frac{1}{3}(\\$38{,}000 - \\$35{,}000) = \\$1{,}000`}
        </MathBlock>
        <MathBlock>
          {`\\text{New Payment} = \\$35{,}000 + \\$1{,}000 = \\$36{,}000`}
        </MathBlock>
        <p className="mt-3">
          Similarly, if markets decline and indicate $32,000:
        </p>
        <MathBlock>
          {`\\text{Change} = \\frac{1}{3}(\\$32{,}000 - \\$35{,}000) = -\\$1{,}000`}
        </MathBlock>
        <MathBlock>
          {`\\text{New Payment} = \\$35{,}000 - \\$1{,}000 = \\$34{,}000`}
        </MathBlock>
        <p className="mt-3 text-dark-400">
          The smoothing dampens both upside and downside, providing more predictable income.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Risk Management Framework</h3>

      <p className="mb-4">
        Canadian VPLA regulations include several risk management requirements:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="space-y-4">
          <li>
            <p className="text-emerald-400 font-semibold">Conservative Mortality Assumptions</p>
            <p className="text-sm text-dark-300 mt-1">
              VPLAs must use mortality tables that assume participants live longer than average.
              This builds in a buffer against adverse selection (healthier people joining).
            </p>
          </li>
          <li>
            <p className="text-emerald-400 font-semibold">Buffer Reserves (1-2%)</p>
            <p className="text-sm text-dark-300 mt-1">
              A small reserve fund (typically 1-2% of assets) is maintained to smooth
              unexpected mortality deviations. This prevents sudden payout drops.
            </p>
          </li>
          <li>
            <p className="text-emerald-400 font-semibold">Actuarial Certification</p>
            <p className="text-sm text-dark-300 mt-1">
              A qualified actuary must certify annually that the VPLA is sustainable
              and that payout calculations follow prescribed methods.
            </p>
          </li>
          <li>
            <p className="text-emerald-400 font-semibold">Investment Governance</p>
            <p className="text-sm text-dark-300 mt-1">
              Strict guidelines on asset allocation and investment management to
              balance growth with stability.
            </p>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mathematical Framework</h3>

      <p className="mb-4">
        The complete VPLA payout formula incorporates all adjustments:
      </p>

      <MathBlock>
        {`\\text{Payment}_{t+1} = \\text{Payment}_t \\times \\left(1 + \\frac{1}{3} \\left[ \\frac{B_{t+1}}{B_t} \\cdot \\frac{\\ddot{a}_{x+t}}{\\ddot{a}_{x+t+1}} - 1 \\right] \\right)`}
      </MathBlock>

      <p className="mt-4 mb-4">
        This can be decomposed into three components:
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-blue-400 font-bold mb-2">Investment Return</p>
          <MathBlock>
            {`\\frac{B_{t+1}}{B_t}`}
          </MathBlock>
          <p className="text-sm text-dark-300 mt-2">
            Account growth from investment gains
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-purple-400 font-bold mb-2">Mortality Adjustment</p>
          <MathBlock>
            {`\\frac{\\ddot{a}_{x+t}}{\\ddot{a}_{x+t+1}}`}
          </MathBlock>
          <p className="text-sm text-dark-300 mt-2">
            Reflects shorter remaining life expectancy
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Smoothing Factor</p>
          <MathBlock>
            {`\\frac{1}{3}`}
          </MathBlock>
          <p className="text-sm text-dark-300 mt-2">
            Gradual adjustment for stability
          </p>
        </div>
      </div>

      <Callout type="note" title="Key Insight">
        <p>
          The mortality adjustment factor <InlineMath>{'\\ddot{a}_{x+t}/\\ddot{a}_{x+t+1}'}</InlineMath> is
          always greater than 1 (because remaining life expectancy decreases). This provides
          a natural "longevity bonus" that increases payments as the member ages, even without
          investment gains.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">VPLA vs. Traditional Annuities</h3>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="text-left border-b border-dark-700">
            <th className="pb-2">Feature</th>
            <th className="pb-2">VPLA</th>
            <th className="pb-2">Fixed Annuity</th>
          </tr>
        </thead>
        <tbody className="text-dark-300">
          <tr className="border-b border-dark-800">
            <td className="py-2">Payment guarantee</td>
            <td className="py-2 text-amber-400">None (variable)</td>
            <td className="py-2 text-emerald-400">Guaranteed</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Inflation protection</td>
            <td className="py-2 text-emerald-400">Potential (via returns)</td>
            <td className="py-2 text-rose-400">None (fixed)</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Expected payout</td>
            <td className="py-2 text-emerald-400">Higher</td>
            <td className="py-2 text-amber-400">Lower</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Regulatory status</td>
            <td className="py-2 text-emerald-400">Canadian pension law</td>
            <td className="py-2 text-emerald-400">Insurance regulated</td>
          </tr>
          <tr>
            <td className="py-2">Insurer default risk</td>
            <td className="py-2 text-emerald-400">None</td>
            <td className="py-2 text-amber-400">Present</td>
          </tr>
        </tbody>
      </table>

      <p className="text-dark-400 italic">
        Canada's VPLA framework demonstrates that modern tontine-like products can exist
        within established regulatory structures. Other jurisdictions are watching closely
        as these products prove their viability. Next, we'll examine other modern tontine
        products emerging globally.
      </p>
    </LessonLayout>
  );
}
