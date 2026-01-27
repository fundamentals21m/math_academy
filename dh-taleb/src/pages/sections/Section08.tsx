import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Correlation and the Parkinson Number</h2>

      <p className="mb-4">
        Beyond basic volatility, sophisticated hedgers need to understand correlation (how assets
        move together) and alternative volatility estimators that capture more information than
        simple close-to-close calculations.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Parkinson Estimator</h3>

      <p className="mb-4">
        The Parkinson volatility estimator uses high-low ranges instead of closing prices,
        capturing intraday movement that close-to-close misses:
      </p>

      <Definition title="Parkinson Volatility">
        <MathBlock>
          {`\\sigma_P = \\sqrt{\\frac{1}{4n\\ln 2} \\sum_{i=1}^{n} \\left(\\ln\\frac{H_i}{L_i}\\right)^2}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`H_i`}</InlineMath> and <InlineMath>{`L_i`}</InlineMath> are the high
          and low prices on day <InlineMath>{`i`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Why Parkinson?">
        <p>
          The Parkinson estimator is about 5× more efficient than close-to-close—meaning it
          achieves the same precision with 1/5 the data. This makes it particularly useful
          when you need a quick, responsive volatility estimate.
        </p>
      </Callout>

      <Example title="Parkinson vs. Close-to-Close">
        <p className="mb-3">Consider two days with identical closing prices:</p>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-2">Day A</p>
            <p className="text-sm text-dark-300">Open: 100, High: 102, Low: 99, Close: 100</p>
            <p className="text-sm text-dark-300">Range: 3%</p>
          </div>
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-2">Day B</p>
            <p className="text-sm text-dark-300">Open: 100, High: 100.5, Low: 99.8, Close: 100</p>
            <p className="text-sm text-dark-300">Range: 0.7%</p>
          </div>
        </div>
        <p className="mt-3 text-dark-300">
          Close-to-close sees both as zero volatility. Parkinson correctly identifies Day A
          as much more volatile.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Limitations of High-Low Estimators</h3>

      <p className="mb-4">
        High-low estimators have their own problems:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Bid-ask bounce:</strong> Highs and lows may reflect bid-ask spread, not true volatility
        </li>
        <li>
          <strong>Overnight gaps:</strong> Doesn't capture gap risk between close and open
        </li>
        <li>
          <strong>Assumes continuous trading:</strong> Range understates vol if there are jumps
        </li>
        <li>
          <strong>Data quality:</strong> High/low data more prone to errors than closing prices
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Correlation Fundamentals</h3>

      <p className="mb-4">
        For portfolios of multiple assets, correlation determines how risks combine:
      </p>

      <Definition title="Correlation">
        <p>
          The correlation <InlineMath>{`\\rho`}</InlineMath> between two assets measures their
          tendency to move together:
        </p>
        <MathBlock>
          {`\\rho_{XY} = \\frac{\\text{Cov}(r_X, r_Y)}{\\sigma_X \\sigma_Y}`}
        </MathBlock>
        <p className="mt-2">
          Values range from -1 (perfect negative) to +1 (perfect positive).
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Portfolio Volatility</h3>

      <p className="mb-4">
        For a portfolio of two assets with weights <InlineMath>{`w_1, w_2`}</InlineMath>:
      </p>

      <MathBlock>
        {`\\sigma_P^2 = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1w_2\\rho_{12}\\sigma_1\\sigma_2`}
      </MathBlock>

      <Example title="Diversification Benefit">
        <p className="mb-3">
          Two stocks, each with 20% volatility, equally weighted:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>If <InlineMath>{`\\rho = 1.0`}</InlineMath>: Portfolio vol = 20%</li>
          <li>If <InlineMath>{`\\rho = 0.5`}</InlineMath>: Portfolio vol = 17.3%</li>
          <li>If <InlineMath>{`\\rho = 0.0`}</InlineMath>: Portfolio vol = 14.1%</li>
          <li>If <InlineMath>{`\\rho = -1.0`}</InlineMath>: Portfolio vol = 0%</li>
        </ul>
        <p className="mt-3 text-dark-400">
          Lower correlation = better diversification = lower portfolio risk.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Correlation in Crisis</h3>

      <p className="mb-4">
        One of the most dangerous phenomena in finance: correlations increase during crises.
      </p>

      <Callout type="warning" title="Correlation Breakdown">
        <p>
          Assets that appear uncorrelated in normal times often become highly correlated
          during market stress. This is precisely when diversification is most needed—and
          least effective.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Stocks that normally have <InlineMath>{`\\rho = 0.3`}</InlineMath> might spike to 0.9</li>
          <li>Hedges fail as assets move together</li>
          <li>"The only thing that goes up in a crash is correlation"</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implied Correlation</h3>

      <p className="mb-4">
        Just as we can back out implied volatility from option prices, we can infer
        <strong> implied correlation</strong> from index option prices vs. component option prices:
      </p>

      <Definition title="Implied Correlation">
        <p>
          The correlation that equates index implied variance to the variance implied by
          component options:
        </p>
        <MathBlock>
          {`\\sigma_{\\text{index}}^2 \\approx \\sum_i w_i^2\\sigma_i^2 + \\rho_{\\text{impl}} \\sum_{i \\neq j} w_i w_j \\sigma_i \\sigma_j`}
        </MathBlock>
        <p className="mt-2">
          Implied correlation is usually higher than realized correlation, reflecting the
          premium for correlation risk.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Correlation and Multi-Asset Options</h3>

      <p className="mb-4">
        For exotic options on multiple assets (rainbow options, basket options), correlation
        is a critical pricing input. These options have "correlation vega"—sensitivity to
        changes in correlation.
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Best-of options:</strong> Value increases with lower correlation (more
          chance one asset outperforms)
        </li>
        <li>
          <strong>Worst-of options:</strong> Value increases with higher correlation (less
          dispersion)
        </li>
        <li>
          <strong>Basket options:</strong> Value depends on effective basket volatility, which
          depends on correlation
        </li>
      </ul>

      <p className="mb-4">
        We'll return to these concepts when we cover multiasset options in the exotics section.
      </p>
    </LessonLayout>
  );
}
