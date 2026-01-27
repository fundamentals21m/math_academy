import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Lookback and Asian Options</h2>

      <p className="mb-4">
        Lookback and Asian options are path-dependent exotics whose payoffs depend on the
        entire price history, not just the terminal value. They provide unique exposure
        profiles that can't be replicated with standard options.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lookback Options</h3>

      <Definition title="Lookback Option">
        <p>
          An option whose payoff depends on the maximum or minimum price achieved during
          the option's life:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Floating Strike Lookback Call:</strong> <InlineMath>{`S_T - \\min_{0 \\leq t \\leq T} S_t`}</InlineMath>
          </li>
          <li>
            <strong>Floating Strike Lookback Put:</strong> <InlineMath>{`\\max_{0 \\leq t \\leq T} S_t - S_T`}</InlineMath>
          </li>
          <li>
            <strong>Fixed Strike Lookback Call:</strong> <InlineMath>{`(\\max_{0 \\leq t \\leq T} S_t - K)^+`}</InlineMath>
          </li>
          <li>
            <strong>Fixed Strike Lookback Put:</strong> <InlineMath>{`(K - \\min_{0 \\leq t \\leq T} S_t)^+`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <p className="mb-4">
        Lookbacks give the holder "perfect hindsight"—the ability to buy at the lowest
        or sell at the highest price during the period.
      </p>

      <Example title="Floating Strike Lookback Call">
        <p className="mb-3">
          Stock path: 100 → 95 → 105 → 98 → 110 → 102 (final)
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Minimum price: $95</li>
          <li>Final price: $102</li>
          <li>Payoff: $102 - $95 = $7</li>
        </ul>
        <p className="mt-3 text-dark-400">
          Equivalent to buying at the lowest price and selling at expiry—perfect timing on entry.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pricing Lookbacks</h3>

      <p className="mb-4">
        Lookbacks have analytical solutions under BSM:
      </p>

      <Definition title="Floating Strike Lookback Call">
        <MathBlock>
          {`V = S N(a_1) - S_{\\min} e^{-rT} N(a_2) - \\frac{S\\sigma^2}{2r}\\left[\\left(\\frac{S_{\\min}}{S}\\right)^{-2r/\\sigma^2}N(-a_1 + 2r\\sqrt{T}/\\sigma) - e^{rT}N(-a_1)\\right]`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`S_{\\min}`}</InlineMath> is the current running minimum.
          The formula involves the reflection principle for running extrema.
        </p>
      </Definition>

      <Callout type="info" title="Lookback Premium">
        <p>
          Lookbacks are expensive—typically 2-3x the price of vanilla options. The "hindsight
          premium" compensates for the valuable information about extremes.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Asian Options</h3>

      <Definition title="Asian Option">
        <p>
          An option whose payoff depends on the average price over a period:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Average Price Call:</strong> <InlineMath>{`(\\bar{S} - K)^+`}</InlineMath>
          </li>
          <li>
            <strong>Average Price Put:</strong> <InlineMath>{`(K - \\bar{S})^+`}</InlineMath>
          </li>
          <li>
            <strong>Average Strike Call:</strong> <InlineMath>{`(S_T - \\bar{S})^+`}</InlineMath>
          </li>
          <li>
            <strong>Average Strike Put:</strong> <InlineMath>{`(\\bar{S} - S_T)^+`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          where <InlineMath>{`\\bar{S} = \\frac{1}{n}\\sum_i S_{t_i}`}</InlineMath> (discrete)
          or <InlineMath>{`\\frac{1}{T}\\int_0^T S_t \\, dt`}</InlineMath> (continuous).
        </p>
      </Definition>

      <Example title="Average Price Call">
        <p className="mb-3">
          Monthly averaging over 12 months, K = 100:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Monthly prices: 100, 102, 98, 105, 103, 101, 108, 106, 104, 110, 107, 112</li>
          <li>Average: (100+102+...+112)/12 = 104.67</li>
          <li>Payoff: max(104.67 - 100, 0) = $4.67</li>
        </ul>
        <p className="mt-3 text-dark-400">
          Note: Even though final price is $112, payoff is based on average.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Properties of Asian Options</h3>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Lower cost:</strong> Averaging reduces effective volatility, so Asians
          are cheaper than vanillas
        </li>
        <li>
          <strong>Less manipulation:</strong> Harder to manipulate average than spot at one moment
        </li>
        <li>
          <strong>Popular for commodities:</strong> Natural for hedging average costs/revenues
        </li>
        <li>
          <strong>No closed form:</strong> Arithmetic average of lognormals isn't lognormal
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pricing Asian Options</h3>

      <p className="mb-4">
        Unlike lookbacks, arithmetic Asians require numerical methods:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Monte Carlo:</strong> Simulate paths, compute average, average payoffs
        </li>
        <li>
          <strong>Moment matching:</strong> Match first two moments of the average distribution
        </li>
        <li>
          <strong>Geometric approximation:</strong> Geometric mean has closed form; adjust for arithmetic
        </li>
        <li>
          <strong>PDE methods:</strong> Solve 2D PDE with running average as state variable
        </li>
      </ul>

      <Callout type="warning" title="Greeks of Path-Dependents">
        <p>
          Path-dependent options have Greeks that depend on the path history:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Lookback Greeks depend on running max/min</li>
          <li>Asian Greeks depend on running average</li>
          <li>Greeks change as more of the path is observed</li>
          <li>Hedging must account for path evolution</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Course Conclusion</h3>

      <p className="mb-4">
        We've covered the full spectrum of dynamic hedging, from foundations through exotic
        options. Key takeaways:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-300">
          <li>
            <strong>1. Models are tools, not truth.</strong> Use them to communicate and manage
            risk, but never forget their limitations.
          </li>
          <li>
            <strong>2. Greeks are a language.</strong> Learn to speak it fluently to understand
            and communicate risk exposures.
          </li>
          <li>
            <strong>3. Path matters.</strong> Real P&L depends on how prices evolve, not just
            where they end up.
          </li>
          <li>
            <strong>4. Liquidity is fragile.</strong> It disappears precisely when you need
            it most.
          </li>
          <li>
            <strong>5. The tail is fatter than you think.</strong> Size positions for extreme
            scenarios, not normal markets.
          </li>
        </ul>
      </div>

      <p className="mb-4">
        Congratulations on completing the Dynamic Hedging course. The real learning begins
        now—in the markets.
      </p>
    </LessonLayout>
  );
}
