import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Introduction to Dynamic Hedging</h2>

      <p className="mb-4">
        Dynamic hedging is the art and science of managing option risk through continuous adjustment
        of hedging positions. Unlike static hedging, where you set and forget, dynamic hedging
        requires constant vigilance and adaptation to changing market conditions.
      </p>

      <Callout type="info" title="Taleb's Philosophy">
        <p>
          This course is based on Nassim Taleb's seminal 1997 work "Dynamic Hedging: Managing
          Vanilla and Exotic Options." Taleb, a former options trader, bridges the gap between
          academic theory and trading floor reality.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Dynamic Hedging Matters</h3>

      <p className="mb-4">
        Options are not static instruments. Their value changes not only with the underlying
        price, but with time, volatility, interest rates, and the complex interplay between
        these factors. A trader who buys or sells an option and doesn't manage the position
        is speculating, not hedging.
      </p>

      <Definition title="Dynamic Hedging">
        <p>
          The continuous process of adjusting a hedge portfolio to maintain a desired risk
          profile as market conditions change. Mathematically, if <InlineMath>{`V`}</InlineMath> is
          the option value and <InlineMath>{`S`}</InlineMath> is the underlying price:
        </p>
        <MathBlock>
          {`\\Pi = V - \\Delta \\cdot S`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\Delta = \\frac{\\partial V}{\\partial S}`}</InlineMath> is
          continuously adjusted to keep the portfolio <InlineMath>{`\\Pi`}</InlineMath> delta-neutral.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Market Maker's Dilemma</h3>

      <p className="mb-4">
        Consider a market maker who sells a call option. They've collected premium, but now
        they're exposed to unlimited upside risk. The question becomes: how do they neutralize
        this risk without giving back all their premium?
      </p>

      <Example title="The Delta-Hedging Cycle">
        <p className="mb-3">A market maker sells a 50-delta call for $5:</p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Immediately buys 50 shares to delta-hedge</li>
          <li>Stock rises: delta increases to 60, must buy 10 more shares</li>
          <li>Stock falls: delta decreases to 45, must sell 5 shares</li>
          <li>This "buy high, sell low" pattern costs money—the <em>gamma cost</em></li>
          <li>The premium collected must exceed total gamma costs to profit</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The P&L Equation</h3>

      <p className="mb-4">
        The heart of dynamic hedging is understanding the components of option P&L.
        For a delta-hedged position, the daily P&L can be approximated by:
      </p>

      <MathBlock>
        {`\\text{P\\&L} \\approx \\frac{1}{2}\\Gamma S^2 (r^2 - \\sigma^2_{\\text{implied}}) \\Delta t + \\text{higher order terms}`}
      </MathBlock>

      <p className="mb-4">
        where <InlineMath>{`r`}</InlineMath> is the realized return and <InlineMath>{`\\sigma_{\\text{implied}}`}</InlineMath> is
        the implied volatility. This is the fundamental equation of volatility trading.
      </p>

      <Callout type="success" title="Key Insight">
        <p>
          If you sell options at an implied volatility higher than what actually realizes,
          you profit. If realized volatility exceeds implied, you lose. Delta hedging converts
          a directional bet into a volatility bet.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What You'll Learn</h3>

      <p className="mb-4">
        This course covers the complete toolkit of the options hedger:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Foundations</p>
          <ul className="text-sm text-dark-300 list-disc list-inside">
            <li>Options mechanics and synthetics</li>
            <li>Market microstructure</li>
            <li>Liquidity and its risks</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">The Greeks</p>
          <ul className="text-sm text-dark-300 list-disc list-inside">
            <li>Delta, gamma, vega, theta</li>
            <li>Higher-order sensitivities</li>
            <li>Risk bucketing and topography</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Vanilla Trading</p>
          <ul className="text-sm text-dark-300 list-disc list-inside">
            <li>Volatility trading strategies</li>
            <li>Path dependence effects</li>
            <li>P&L attribution</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Exotics</p>
          <ul className="text-sm text-dark-300 list-disc list-inside">
            <li>Binary and barrier options</li>
            <li>Compound and chooser options</li>
            <li>Lookback and Asian options</li>
          </ul>
        </div>
      </div>

      <Callout type="warning" title="Prerequisites">
        <p>
          This course assumes familiarity with basic option concepts (calls, puts, payoffs)
          and calculus (partial derivatives). No prior knowledge of stochastic calculus is
          required—we'll develop intuition before formalism.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Practitioner's Mindset</h3>

      <p className="mb-4">
        Throughout this course, we take the practitioner's view. Academic models are tools,
        not truth. The market doesn't care about your model—it cares about supply and demand,
        fear and greed, liquidity and its absence.
      </p>

      <p className="mb-4">
        As Taleb writes: "There is no such thing as a perfectly hedged position. There is only
        a position with acceptable risk." Our job is to understand, quantify, and manage that risk.
      </p>
    </LessonLayout>
  );
}
