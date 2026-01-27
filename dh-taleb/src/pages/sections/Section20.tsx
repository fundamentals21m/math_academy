import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Volatility Trading Concepts</h2>

      <p className="mb-4">
        Volatility trading is the art of betting on the magnitude of price moves, not their
        direction. By delta-hedging, a trader converts directional exposure into volatility
        exposure—profiting if actual volatility exceeds (or falls short of) implied.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Volatility Trade</h3>

      <Definition title="Volatility Trading">
        <p>
          A strategy that profits from the difference between implied and realized volatility:
        </p>
        <MathBlock>
          {`\\text{P\\&L} \\propto (\\sigma_{\\text{realized}}^2 - \\sigma_{\\text{implied}}^2) \\times \\text{Vega Exposure}`}
        </MathBlock>
        <p className="mt-2">
          Long volatility profits if realized {'>'} implied. Short volatility profits if
          realized {'<'} implied.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Straddles and Strangles</h3>

      <p className="mb-4">
        Classic volatility structures:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Long Straddle</p>
          <p className="text-sm text-dark-300 mb-2">Buy ATM call + Buy ATM put</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Max loss: Premium paid</li>
            <li>Profit: Large move either direction</li>
            <li>Greeks: Long gamma, long vega</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Long Strangle</p>
          <p className="text-sm text-dark-300 mb-2">Buy OTM call + Buy OTM put</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Max loss: Premium paid (less than straddle)</li>
            <li>Profit: Need larger move than straddle</li>
            <li>Greeks: Long gamma, long vega</li>
          </ul>
        </div>
      </div>

      <Example title="Straddle P&L Profile">
        <p className="mb-3">Buy 100-strike straddle for $8 total ($4 call + $4 put):</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Breakevens: 92 and 108</li>
          <li>Max loss: $8 (if S = 100 at expiry)</li>
          <li>At S = 85: Profit = |85-100| - 8 = $7</li>
          <li>At S = 115: Profit = |115-100| - 8 = $7</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Gamma Scalping</h3>

      <p className="mb-4">
        Rather than holding to expiration, traders can "scalp" gamma by continuously rehedging:
      </p>

      <Definition title="Gamma Scalping">
        <p>
          The practice of delta-hedging a long gamma position to capture profits from
          realized moves:
        </p>
        <MathBlock>
          {`\\text{Scalping P\\&L} = \\frac{1}{2}\\Gamma \\sum_i (\\Delta S_i)^2 - \\Theta \\cdot T`}
        </MathBlock>
        <p className="mt-2">
          You earn from the sum of squared moves (gamma effect) and pay time decay (theta).
        </p>
      </Definition>

      <Callout type="info" title="The Breakeven Volatility">
        <p>
          Gamma scalping is profitable if realized volatility exceeds implied. The breakeven is:
        </p>
        <MathBlock>
          {`\\sigma_{\\text{breakeven}} = \\sigma_{\\text{implied}}`}
        </MathBlock>
        <p className="mt-2">
          (Under continuous hedging. Discrete hedging introduces variance around this breakeven.)
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Variance Swaps</h3>

      <p className="mb-4">
        A variance swap provides pure exposure to realized variance:
      </p>

      <Definition title="Variance Swap">
        <p>
          A contract that pays the difference between realized and strike variance:
        </p>
        <MathBlock>
          {`\\text{Payoff} = N_{\\text{var}} \\times (\\sigma_{\\text{realized}}^2 - K_{\\text{var}})`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`N_{\\text{var}}`}</InlineMath> is the variance notional and
          <InlineMath>{`K_{\\text{var}}`}</InlineMath> is the strike variance.
        </p>
      </Definition>

      <p className="mb-4">
        Variance swaps have significant advantages over straddles:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Pure vol exposure—no strike-dependent effects</li>
        <li>No delta hedging required (it's built in)</li>
        <li>Linear in variance (convex in vol)</li>
        <li>No gamma scalping friction or discrete hedging error</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Volatility Risk Premium</h3>

      <p className="mb-4">
        Historically, implied volatility exceeds realized volatility on average:
      </p>

      <MathBlock>
        {`E[\\sigma_{\\text{implied}}] > E[\\sigma_{\\text{realized}}]`}
      </MathBlock>

      <p className="mb-4">
        This "volatility risk premium" compensates sellers of volatility for bearing
        uncertainty and crash risk.
      </p>

      <Example title="Harvesting the VRP">
        <p className="mb-3">A typical volatility selling strategy:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Sell 1-month ATM straddles systematically</li>
          <li>Delta-hedge daily</li>
          <li>Win ~70% of months (realized {'<'} implied)</li>
          <li>Lose ~30% of months (realized {'>'} implied, often significantly)</li>
          <li>Net positive over time if wins exceed losses</li>
        </ul>
        <p className="mt-3 text-dark-400">
          The strategy works until it doesn't—large losses in crisis months can erase years of gains.
        </p>
      </Example>

      <Callout type="warning" title="Picking Up Nickels">
        <p>
          "Selling volatility is like picking up nickels in front of a steamroller."
          The VRP exists for a reason—sellers are compensated for bearing tail risk.
          Size and risk management are crucial.
        </p>
      </Callout>
    </LessonLayout>
  );
}
