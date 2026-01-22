import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { PoolSizeVolatility } from '@/components/visualizations';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Minimum Pool Size</h2>

      <p className="mb-4">
        One of the most important practical questions for tontine design is: <em>how many
        members do we need?</em> Too few, and random variation dominates. Too many, and
        administrative costs can outweigh benefits.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Law of Large Numbers</h3>

      <p className="mb-4">
        In a small pool, the number of deaths in any year can vary wildly from expectations.
        This creates payment volatility that undermines the tontine's core promise.
        As pools grow larger, the law of large numbers kicks in: actual deaths converge
        to expected deaths.
      </p>

      <Definition title="Standard Deviation of Deaths">
        <p>
          For a pool of <InlineMath>n</InlineMath> members with mortality rate{' '}
          <InlineMath>q</InlineMath>, the standard deviation of deaths is:
        </p>
        <MathBlock>
          {`\\sigma_D = \\sqrt{n \\cdot q \\cdot (1-q)} \\approx \\sqrt{n \\cdot q}`}
        </MathBlock>
        <p className="mt-2">
          The coefficient of variation (relative volatility) is:
        </p>
        <MathBlock>
          {`CV = \\frac{\\sigma_D}{E[D]} = \\frac{\\sqrt{n \\cdot q}}{n \\cdot q} = \\frac{1}{\\sqrt{n \\cdot q}}`}
        </MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Simulation: 10 Members</h3>

      <p className="mb-4">
        Consider a tontine with 10 members, each age 65 with mortality rate{' '}
        <InlineMath>q = 1\%</InlineMath>. The pool has $60,000 to distribute annually.
      </p>

      <Example title="Small Pool Volatility (n=10)">
        <div className="space-y-3">
          <p><strong>Expected deaths:</strong> <InlineMath>10 \times 0.01 = 0.1</InlineMath></p>
          <p><strong>Actual deaths in simulation:</strong> 0, 1, 2, or even 3 (highly variable)</p>
          <p><strong>Payment per survivor:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>0 deaths: $60k / 10 = $6,000/person</li>
            <li>1 death: $60k / 9 = $6,667/person</li>
            <li>2 deaths: $60k / 8 = $7,500/person</li>
            <li>3 deaths: $60k / 7 = $8,571/person</li>
          </ul>
          <p className="mt-3 text-amber-400">
            <strong>Range:</strong> $6,000 - $8,571 (43% variation!)
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Simulation: 100 Members</h3>

      <Example title="Medium Pool (n=100)">
        <div className="space-y-3">
          <p><strong>Expected deaths:</strong> <InlineMath>{`100 \\times 0.01 = 1`}</InlineMath></p>
          <p><strong>Std deviation:</strong> <InlineMath>{`\\sqrt{100 \\times 0.01} = 1`}</InlineMath></p>
          <p><strong>Typical range:</strong> 0-3 deaths (within 2 std dev)</p>
          <p><strong>Payment per survivor ($600k pool):</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>0 deaths: $6,000/person</li>
            <li>1 death: $6,061/person</li>
            <li>2 deaths: $6,122/person</li>
            <li>3 deaths: $6,186/person</li>
          </ul>
          <p className="mt-3 text-emerald-400">
            <strong>Range:</strong> 3% variation
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Simulation: 1,000 Members</h3>

      <Example title="Large Pool (n=1,000)">
        <div className="space-y-3">
          <p><strong>Expected deaths:</strong> <InlineMath>{`1000 \\times 0.01 = 10`}</InlineMath></p>
          <p><strong>Std deviation:</strong> <InlineMath>{`\\sqrt{1000 \\times 0.01} \\approx 3.16`}</InlineMath></p>
          <p><strong>Typical range:</strong> 4-16 deaths (within 2 std dev)</p>
          <p><strong>Payment volatility:</strong> approximately 2%</p>
          <p className="mt-3 text-emerald-400">
            <strong>Result:</strong> Payments predictably converge to expectations
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Stability Rule</h3>

      <Callout type="success" title="Pool Size Guideline">
        <p>
          For payment volatility of 5% or less, you need:
        </p>
        <MathBlock>
          {`n > \\frac{1}{(0.05)^2 \\cdot q} = \\frac{400}{q}`}
        </MathBlock>
        <p className="mt-2">
          At age 65 (<InlineMath>q \approx 0.01</InlineMath>), this means{' '}
          <InlineMath>n {'>'} 40,000</InlineMath> for strict 5% stability.
        </p>
        <p className="mt-2">
          <strong>Practical recommendation:</strong> 500-1,000 members provides
          acceptable stability (10-15% volatility) at reasonable administrative cost.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Solutions for Small Pools</h3>

      <p className="mb-4">
        What if you can't reach 500 members? Three approaches can smooth volatility:
      </p>

      <Definition title="1. Reinsurance">
        <p>
          An insurance company guarantees to cover deaths exceeding expectations (or refund
          when deaths are lower). The tontine pays a premium, typically 1-2% of assets
          annually.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Pros:</strong> Smooth, predictable payments</li>
          <li><strong>Cons:</strong> Cost reduces returns; reintroduces insurer dependency</li>
        </ul>
      </Definition>

      <Definition title="2. Smoothing Rules">
        <p>
          The tontine maintains a buffer account. In years with few deaths, excess funds go
          to the buffer. In years with many deaths, the buffer supplements payouts.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Pros:</strong> Self-insured; no external party needed</li>
          <li><strong>Cons:</strong> Buffer ties up capital; smoothing isn't perfect</li>
        </ul>
      </Definition>

      <Definition title="3. Cohort Aggregation">
        <p>
          Multiple small tontines pool their mortality risk while keeping separate accounts.
          A platform operator runs many tontines and nets volatility across them.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Pros:</strong> Scale benefits without merging pools</li>
          <li><strong>Cons:</strong> Requires platform; regulatory complexity</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summary</h3>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="text-left border-b border-dark-700">
            <th className="pb-2">Pool Size</th>
            <th className="pb-2">Payment Volatility</th>
            <th className="pb-2">Assessment</th>
          </tr>
        </thead>
        <tbody className="text-dark-300">
          <tr className="border-b border-dark-800">
            <td className="py-2">10</td>
            <td className="py-2 text-red-400">40%+</td>
            <td className="py-2">Too small - requires reinsurance</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">100</td>
            <td className="py-2 text-amber-400">15-20%</td>
            <td className="py-2">Marginal - smoothing recommended</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">500</td>
            <td className="py-2 text-emerald-400">5-10%</td>
            <td className="py-2">Good - acceptable for most uses</td>
          </tr>
          <tr>
            <td className="py-2">1,000+</td>
            <td className="py-2 text-emerald-400">{'<'}5%</td>
            <td className="py-2">Excellent - law of large numbers</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive Volatility Simulator</h3>

      <p className="mb-4">
        Run Monte Carlo simulations to see how pool size affects payment volatility.
        Adjust the number of members and see the distribution of outcomes.
      </p>

      <PoolSizeVolatility />

      <p className="text-dark-400 italic mt-8">
        Pool size determines statistical stability. But even a well-sized pool faces
        another challenge: navigating the regulatory landscape. That's our next topic.
      </p>
    </LessonLayout>
  );
}
