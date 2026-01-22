import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Tontine Advantages</h2>

      <p className="mb-4">
        Given the costs and risks inherent in annuity pricing, tontines offer several
        compelling advantages. Let's examine each one systematically.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantage 1: No Longevity Risk to Provider</h3>

      <Definition title="Self-Adjusting Payouts">
        <p>
          In a tontine, payouts are determined by actual fund performance and actual
          survivorship. The pool simply distributes what it has among those who remain.
        </p>
        <MathBlock>
          {`D_i(t) = \\frac{w_i(t)}{\\sum_j w_j(t)} \\times W(t)`}
        </MathBlock>
        <p className="mt-2">
          If members live longer than expected, each receives smaller payouts—but the
          provider never faces a shortfall.
        </p>
      </Definition>

      <p className="mb-4">
        This is fundamentally different from annuities. An insurance company promises
        fixed payments regardless of outcomes. A tontine provider makes no such promise—they
        simply administer the pool.
      </p>

      <Example title="Longevity Shock Comparison">
        <p className="mb-3">
          Scenario: Medical breakthrough adds 3 years to average lifespan.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-rose-500">
            <p className="text-rose-400 font-bold mb-2">Annuity Provider</p>
            <p className="text-sm text-dark-300">
              Must pay 3 extra years of promised payments. On $1B book:
              potential loss of $150M+. May require capital injection or
              regulatory intervention.
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
            <p className="text-emerald-400 font-bold mb-2">Tontine Pool</p>
            <p className="text-sm text-dark-300">
              Payouts automatically adjust downward. Each survivor gets
              slightly less per year, but the pool remains solvent. Provider
              faces zero additional liability.
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantage 2: Transparency</h3>

      <p className="mb-4">
        Annuity pricing is a black box. The company quotes a rate, but you have no
        idea how much goes to:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Administrative costs</li>
        <li>Profit margins</li>
        <li>Risk reserves</li>
        <li>Executive compensation</li>
      </ul>

      <Callout type="success" title="Tontine Transparency">
        <p className="mb-2">
          In a well-designed tontine, members can see exactly:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Total pool value at any time</li>
          <li>Investment returns earned</li>
          <li>Administrative fees charged (typically 0.5-1%)</li>
          <li>How payouts are calculated</li>
          <li>Who remains in the pool</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantage 3: Efficiency</h3>

      <p className="mb-4">
        The efficiency difference between tontines and loaded annuities is substantial.
        We can quantify it using the annuity factors.
      </p>

      <Example title="Efficiency Comparison">
        <p className="mb-3">
          For a 65-year-old with $100,000:
        </p>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Product</th>
              <th className="pb-2">Effective <InlineMath>{`\\ddot{a}`}</InlineMath></th>
              <th className="pb-2">Annual Payout</th>
              <th className="pb-2">Efficiency</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-dark-100">Fair Annuity</td>
              <td className="py-2">14.2</td>
              <td className="py-2">$7,042</td>
              <td className="py-2 text-emerald-400">100%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-dark-100">Tontine</td>
              <td className="py-2">14.2</td>
              <td className="py-2">$7,042 (expected)</td>
              <td className="py-2 text-emerald-400">~100%</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-dark-100">Market Annuity</td>
              <td className="py-2">16.67</td>
              <td className="py-2">$6,000</td>
              <td className="py-2 text-rose-400">85%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-dark-400">
          The tontine delivers approximately <span className="text-emerald-400 font-semibold">17% more</span> expected
          payout than a market annuity—the entire loading factor stays with members.
        </p>
      </Example>

      <MathBlock>
        {`\\text{Efficiency Gain} = \\frac{\\ddot{a}_{\\text{loaded}} - \\ddot{a}_{\\text{fair}}}{\\ddot{a}_{\\text{fair}}} = \\frac{16.67 - 14.2}{14.2} = 17.4\\%`}
      </MathBlock>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantage 4: Investment Choice</h3>

      <p className="mb-4">
        Insurance companies invest annuity premiums conservatively—primarily in
        government and corporate bonds. This is required by regulation and makes
        sense given their guarantee obligations.
      </p>

      <p className="mb-4">
        Tontine members, bearing their own risk, can choose different investment strategies:
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-blue-400 font-bold mb-2">Conservative</p>
          <p className="text-sm text-dark-300">
            Bonds, stable value—similar to insurance company. Lower expected
            return, lower volatility.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Balanced</p>
          <p className="text-sm text-dark-300">
            60/40 stocks/bonds. Higher expected return, moderate volatility.
            Popular choice.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Growth</p>
          <p className="text-sm text-dark-300">
            Equity-heavy allocation. Highest expected return, highest volatility.
            For risk-tolerant members.
          </p>
        </div>
      </div>

      <Callout type="info" title="The Choice Trade-off">
        <p>
          Investment choice is a double-edged sword. Members who choose poorly or
          experience bad market timing will have lower payouts. But members who are
          informed and patient can potentially earn significantly higher returns
          than insurance company portfolios deliver.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summary: The Tontine Value Proposition</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Advantage</th>
              <th className="pb-2">Benefit</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-emerald-400">No provider risk</td>
              <td className="py-2">Lower fees, no insolvency risk</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-emerald-400">Transparency</td>
              <td className="py-2">See exactly where money goes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-emerald-400">Efficiency</td>
              <td className="py-2">~17% higher expected payouts</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-emerald-400">Investment choice</td>
              <td className="py-2">Match strategy to preferences</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-dark-400 italic">
        These advantages are substantial, but annuities have their own strengths.
        A fair comparison requires examining both sides.
      </p>
    </LessonLayout>
  );
}
