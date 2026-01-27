import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Bucketing and Topography</h2>

      <p className="mb-4">
        A large options book can contain thousands of positions. Understanding the aggregate
        risk requires organizing this complexity into a comprehensible picture—the "topography"
        of the book.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multi-Dimensional Bucketing</h3>

      <p className="mb-4">
        Options risk exists in multiple dimensions simultaneously:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li><strong>Strike dimension:</strong> Where is your gamma concentrated?</li>
        <li><strong>Time dimension:</strong> When do your risks mature?</li>
        <li><strong>Underlying dimension:</strong> Which assets drive your P&L?</li>
        <li><strong>Greek dimension:</strong> Delta, gamma, vega, theta exposures</li>
      </ul>

      <Definition title="Risk Bucket">
        <p>
          A defined region in strike-maturity (or other) space where risk is aggregated:
        </p>
        <MathBlock>
          {`G_{\\text{bucket}} = \\sum_{\\substack{K \\in \\text{bucket}_K \\\\ T \\in \\text{bucket}_T}} G_i`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`G`}</InlineMath> is any Greek. Common bucket schemes: 5% strike
          increments, weekly/monthly maturity buckets.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Strike-Maturity Grid</h3>

      <p className="mb-4">
        The most common visualization organizes Greeks by strike (rows) and maturity (columns):
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 overflow-x-auto">
        <p className="text-emerald-400 font-bold mb-3">Gamma Topography (S = 100)</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2">Strike</th>
              <th className="pb-2">1W</th>
              <th className="pb-2">1M</th>
              <th className="pb-2">3M</th>
              <th className="pb-2">6M</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">110</td>
              <td className="py-2">-50</td>
              <td className="py-2">-200</td>
              <td className="py-2">+100</td>
              <td className="py-2">+50</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">105</td>
              <td className="py-2">-150</td>
              <td className="py-2">-500</td>
              <td className="py-2">+200</td>
              <td className="py-2">+100</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2 text-emerald-400 font-bold">100</td>
              <td className="py-2 text-rose-400 font-bold">-800</td>
              <td className="py-2 text-rose-400 font-bold">-1,200</td>
              <td className="py-2">+300</td>
              <td className="py-2">+150</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">95</td>
              <td className="py-2">-200</td>
              <td className="py-2">-600</td>
              <td className="py-2">+250</td>
              <td className="py-2">+100</td>
            </tr>
            <tr>
              <td className="py-2">90</td>
              <td className="py-2">-75</td>
              <td className="py-2">-300</td>
              <td className="py-2">+150</td>
              <td className="py-2">+50</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          This book is short gamma in near-dated ATM options (red), long gamma in longer-dated
          (market making typical pattern).
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interpreting the Topography</h3>

      <p className="mb-4">
        The topography reveals several risk characteristics:
      </p>

      <Example title="Reading the Gamma Map">
        <p className="mb-3">From the table above:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Concentration:</strong> Most short gamma at ATM 1W/1M strikes
          </li>
          <li>
            <strong>Term structure:</strong> Short near, long far = calendar spread profile
          </li>
          <li>
            <strong>Strike skew:</strong> More gamma slightly below spot than above
          </li>
          <li>
            <strong>Danger zone:</strong> If spot stays at 100, short-dated gamma will explode
          </li>
        </ul>
      </Example>

      <Callout type="warning" title="The Hidden Risks">
        <p>
          Aggregate Greeks can mask localized risks:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Net gamma might be zero but concentrated at dangerous points</li>
          <li>Long gamma in back months won't help if a front month explodes</li>
          <li>Always examine the full topography, not just totals</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Scenario Analysis</h3>

      <p className="mb-4">
        Extend bucketing to scenario analysis: what happens if spot moves to each bucket?
      </p>

      <MathBlock>
        {`\\text{P\\&L}(S') \\approx \\sum_{\\text{buckets}} \\left[ \\Delta_b (S' - S) + \\frac{1}{2}\\Gamma_b (S' - S)^2 + \\mathcal{V}_b \\Delta\\sigma + \\Theta_b \\Delta t \\right]`}
      </MathBlock>

      <p className="mb-4">
        This gives a P&L "surface" across spot-vol scenarios, revealing where the book
        makes or loses money.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Vega Topography</h3>

      <p className="mb-4">
        Vega topography shows where volatility sensitivity concentrates:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Back-month options dominate vega exposure</li>
        <li>ATM options have more vega than OTM</li>
        <li>Skew risk: OTM puts may have different implied vol dynamics</li>
        <li>"Vega bucketing" by maturity shows term structure exposure</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Risk Limits by Bucket</h3>

      <p className="mb-4">
        Sophisticated risk management sets limits at the bucket level:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-emerald-400 font-bold mb-3">Example Limit Structure</p>
        <ul className="text-sm text-dark-300 space-y-2">
          <li>Max |gamma| at any single strike/maturity: 1,000</li>
          <li>Max |vega| in any single maturity bucket: $100,000</li>
          <li>Max |delta| in any underlying: 50,000 shares equivalent</li>
          <li>Max total theta: -$50,000/day</li>
        </ul>
      </div>

      <p className="mb-4">
        Bucket limits prevent concentration even when aggregate limits are satisfied,
        catching the risks that net totals can hide.
      </p>
    </LessonLayout>
  );
}
