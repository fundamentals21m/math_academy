import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Liquidity and Liquidity Holes</h2>

      <p className="mb-4">
        Liquidity is the lifeblood of dynamic hedging. Without the ability to trade the underlying
        and adjust hedges, the elegant mathematics of option pricing breaks down. Understanding
        liquidity—and especially its sudden absence—is critical for survival.
      </p>

      <Definition title="Liquidity">
        <p>
          The ability to trade a desired quantity at prices close to the current market level
          without significantly moving the price. Liquidity has multiple dimensions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Depth:</strong> Size available at best bid/ask</li>
          <li><strong>Breadth:</strong> Size available across price levels</li>
          <li><strong>Immediacy:</strong> Speed of execution</li>
          <li><strong>Resiliency:</strong> How quickly prices recover after trades</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Liquidity Illusion</h3>

      <p className="mb-4">
        Markets often appear more liquid than they truly are. The bid-ask spread you see
        represents liquidity at a single point in time, for a modest size. But liquidity
        is not constant—it evaporates precisely when you need it most.
      </p>

      <Example title="Liquidity Under Stress">
        <p className="mb-3">
          Consider a market maker short gamma on $100M notional:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Normal day: Hedge in 10 lots, spread $0.05, no problem</li>
          <li>Volatile day: Need to hedge 1000 lots, spread widens to $0.50</li>
          <li>Crisis: Bid disappears entirely, must sell into a void</li>
        </ul>
        <p className="mt-3 text-dark-400">
          The cost of hedging is not linear in size. Large positions face "market impact"
          that can dwarf theoretical P&L.
        </p>
      </Example>

      <Callout type="warning" title="Liquidity Holes">
        <p>
          A <strong>liquidity hole</strong> is a sudden, severe reduction in market liquidity—
          often coinciding with high volatility when hedging is most needed. Examples:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Flash crashes (2010, 2015)</li>
          <li>Market opens after weekend gaps</li>
          <li>Around major news releases</li>
          <li>During market circuit breakers</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Impact on Option Pricing</h3>

      <p className="mb-4">
        The Black-Scholes model assumes continuous, frictionless trading. In reality:
      </p>

      <MathBlock>
        {`\\text{True Cost} = \\text{Theoretical Cost} + \\text{Transaction Costs} + \\text{Market Impact} + \\text{Slippage}`}
      </MathBlock>

      <p className="mb-4">
        These frictions accumulate. A position that looks profitable in theory may be
        unprofitable in practice after accounting for real-world trading costs.
      </p>

      <Definition title="Market Impact">
        <p>
          The price movement caused by your own trading. For large orders:
        </p>
        <MathBlock>
          {`\\text{Impact} \\approx \\sigma \\cdot \\sqrt{\\frac{Q}{V}}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\sigma`}</InlineMath> is volatility, <InlineMath>{`Q`}</InlineMath> is
          order size, and <InlineMath>{`V`}</InlineMath> is average volume. Larger orders face
          disproportionately larger impact.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Discrete vs. Continuous Hedging</h3>

      <p className="mb-4">
        Black-Scholes assumes continuous hedging, but real traders hedge discretely—at intervals
        or when thresholds are breached. This creates <strong>hedge slippage</strong>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-emerald-400 font-bold mb-3">Hedging Frequency Trade-offs</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-dark-200 mb-2">Hedge More Frequently</p>
            <ul className="text-sm text-dark-400 space-y-1">
              <li>✓ Smaller P&L variance</li>
              <li>✓ Better match to theory</li>
              <li>✗ Higher transaction costs</li>
              <li>✗ More operational burden</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-dark-200 mb-2">Hedge Less Frequently</p>
            <ul className="text-sm text-dark-400 space-y-1">
              <li>✓ Lower transaction costs</li>
              <li>✓ Simpler operations</li>
              <li>✗ Larger P&L variance</li>
              <li>✗ Risk of big gaps</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Liquidity Risk in Exotic Options</h3>

      <p className="mb-4">
        Exotic options face additional liquidity challenges:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Barrier options:</strong> Require hedging as spot approaches barrier—precisely
          when everyone else is hedging too
        </li>
        <li>
          <strong>Binary options:</strong> Delta explodes near expiry at the strike, creating
          impossible hedging requirements
        </li>
        <li>
          <strong>Gap risk:</strong> Spot can jump through barriers overnight when markets are closed
        </li>
      </ul>

      <Callout type="note" title="The Practical Solution">
        <p>
          Sophisticated traders account for liquidity in their pricing:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Widen bid-ask for illiquid strikes and expirations</li>
          <li>Charge more for gamma-heavy positions near barriers</li>
          <li>Limit exposure to hard-to-hedge structures</li>
          <li>Build in cushion for worst-case liquidity scenarios</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Measuring Liquidity</h3>

      <p className="mb-4">
        Several metrics help quantify liquidity:
      </p>

      <Definition title="Bid-Ask Spread">
        <MathBlock>
          {`\\text{Spread} = \\text{Ask} - \\text{Bid}`}
        </MathBlock>
        <p className="mt-2">
          Often expressed as percentage of mid-price. Narrower is more liquid.
        </p>
      </Definition>

      <Definition title="Market Depth">
        <p>
          The total quantity available within a given distance of the best bid/ask.
          For example, "depth within 10 basis points."
        </p>
      </Definition>

      <Definition title="Kyle's Lambda">
        <MathBlock>
          {`\\Delta P = \\lambda \\cdot Q`}
        </MathBlock>
        <p className="mt-2">
          Price impact per unit of order flow. Higher lambda means less liquid.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Survival Rules</h3>

      <p className="mb-4">
        Taleb's advice for surviving liquidity crises:
      </p>

      <ol className="list-decimal list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Size positions for worst-case liquidity</strong>, not normal conditions
        </li>
        <li>
          <strong>Never assume you can exit</strong> at theoretical prices
        </li>
        <li>
          <strong>Diversify across instruments</strong> that don't become illiquid together
        </li>
        <li>
          <strong>Keep dry powder</strong>—cash to exploit others' forced selling
        </li>
        <li>
          <strong>Be the last to panic</strong>, but don't be the last to act
        </li>
      </ol>
    </LessonLayout>
  );
}
