import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Delta Bucketing and Value at Risk</h2>

      <p className="mb-4">
        A single aggregate delta number can mask important information about the distribution
        of risk. Delta bucketing organizes exposure by strike, maturity, or other dimensions
        to reveal the true risk profile.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Bucketing Matters</h3>

      <p className="mb-4">
        Consider a portfolio with two positions:
      </p>

      <Example title="The Bucketing Problem">
        <div className="space-y-3">
          <p>Position A: Long 100 90-strike calls (delta: +3,500 shares)</p>
          <p>Position B: Short 100 110-strike calls (delta: -3,500 shares)</p>
          <p className="text-emerald-400 font-bold mt-4">Net Delta: 0</p>
        </div>
        <p className="mt-4 text-dark-300">
          The portfolio appears delta-neutral, but it has significant exposure. If spot moves
          from 100 to 90, position A loses delta while position B's delta hardly changes—
          creating a large short delta out of nowhere.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Strike Bucketing</h3>

      <p className="mb-4">
        Organize delta by strike level to see where your exposure concentrates:
      </p>

      <Definition title="Strike Bucket">
        <p>
          A range of strikes over which delta is aggregated:
        </p>
        <MathBlock>
          {`\\Delta_{\\text{bucket}} = \\sum_{K \\in \\text{bucket}} \\Delta_K`}
        </MathBlock>
        <p className="mt-2">
          Common bucket widths: 5% of spot, fixed dollar amounts, or at each listed strike.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-emerald-400 font-bold mb-3">Example Strike Bucket Report (S = 100)</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2">Strike Range</th>
              <th className="pb-2">Call Delta</th>
              <th className="pb-2">Put Delta</th>
              <th className="pb-2">Net Delta</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">{'<'} 90</td>
              <td className="py-2">+2,000</td>
              <td className="py-2">-500</td>
              <td className="py-2">+1,500</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">90-95</td>
              <td className="py-2">+5,000</td>
              <td className="py-2">-3,000</td>
              <td className="py-2">+2,000</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">95-105</td>
              <td className="py-2">+10,000</td>
              <td className="py-2">-12,000</td>
              <td className="py-2">-2,000</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">105-110</td>
              <td className="py-2">+3,000</td>
              <td className="py-2">-2,500</td>
              <td className="py-2">+500</td>
            </tr>
            <tr>
              <td className="py-2">{'>'} 110</td>
              <td className="py-2">+1,000</td>
              <td className="py-2">-1,000</td>
              <td className="py-2">0</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4 text-dark-400">
          Net total: +2,000 shares. But notice the concentration near ATM and the offsetting
          positions in different buckets.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Maturity Bucketing</h3>

      <p className="mb-4">
        Similarly, organize delta by time to expiration:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li><strong>Front month:</strong> Most gamma, delta changes rapidly</li>
        <li><strong>Second month:</strong> Moderate gamma</li>
        <li><strong>Back months:</strong> Low gamma, stable delta</li>
      </ul>

      <Callout type="info" title="Delta Term Structure">
        <p>
          If you're long delta in front months and short in back months, a spot move will
          cause your front deltas to change more than your back deltas—creating an unintended
          exposure. Monitor the "delta term structure" to manage this risk.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Value at Risk (VaR)</h3>

      <p className="mb-4">
        VaR quantifies potential losses in probabilistic terms:
      </p>

      <Definition title="Value at Risk">
        <p>
          The maximum loss expected over a given time horizon at a given confidence level:
        </p>
        <MathBlock>
          {`P(\\text{Loss} > \\text{VaR}) = 1 - \\alpha`}
        </MathBlock>
        <p className="mt-2">
          Example: "1-day 95% VaR of $1M" means there's a 5% chance of losing more than
          $1M in a single day.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Delta-Normal VaR</h3>

      <p className="mb-4">
        The simplest VaR approach assumes normal returns and uses delta:
      </p>

      <MathBlock>
        {`\\text{VaR} = |\\Delta \\cdot S| \\cdot \\sigma \\cdot z_{\\alpha} \\cdot \\sqrt{T}`}
      </MathBlock>

      <p className="mb-4">
        where <InlineMath>{`z_{\\alpha}`}</InlineMath> is the normal quantile (1.65 for 95%,
        2.33 for 99%).
      </p>

      <Example title="Calculating Delta-Normal VaR">
        <p className="mb-3">Portfolio: Long 5,000 delta (shares equivalent), S = $100</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Daily vol: 2%</li>
          <li>Dollar exposure: $500,000</li>
          <li>95% VaR = $500,000 × 2% × 1.65 = <strong>$16,500</strong></li>
          <li>99% VaR = $500,000 × 2% × 2.33 = <strong>$23,300</strong></li>
        </ul>
      </Example>

      <Callout type="warning" title="VaR Limitations">
        <ul className="list-disc list-inside space-y-1">
          <li>Ignores gamma—for large moves, delta changes</li>
          <li>Assumes normal returns—doesn't capture fat tails</li>
          <li>Says nothing about losses beyond VaR</li>
          <li>Can understate risk during stressed markets</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Delta-Gamma VaR</h3>

      <p className="mb-4">
        For better accuracy, include gamma in the P&L approximation:
      </p>

      <MathBlock>
        {`\\Delta P \\approx \\Delta \\cdot \\Delta S + \\frac{1}{2}\\Gamma \\cdot (\\Delta S)^2`}
      </MathBlock>

      <p className="mb-4">
        The quadratic term captures the convexity that pure delta VaR misses. This is
        especially important for portfolios with significant gamma (short ATM options).
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Stress Testing</h3>

      <p className="mb-4">
        VaR measures "normal" risk. Stress tests examine extreme scenarios:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>What if spot drops 20% overnight?</li>
        <li>What if volatility spikes 50%?</li>
        <li>What if both happen simultaneously?</li>
        <li>What happened to this portfolio on Oct 19, 1987?</li>
      </ul>

      <p className="mb-4">
        Stress tests don't replace VaR—they complement it by exploring the scenarios that
        VaR's statistical assumptions might miss.
      </p>
    </LessonLayout>
  );
}
