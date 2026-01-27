import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Wrinkles of Option Markets</h2>

      <p className="mb-4">
        Real options markets have complications that textbooks often ignore. These "wrinkles"—
        early exercise, dividends, discrete hedging—can significantly affect pricing and hedging.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Early Exercise (American Options)</h3>

      <p className="mb-4">
        American options can be exercised any time before expiration. This creates additional
        considerations:
      </p>

      <Definition title="Early Exercise Premium">
        <MathBlock>
          {`V_{\\text{American}} = V_{\\text{European}} + \\text{Early Exercise Premium}`}
        </MathBlock>
        <p className="mt-2">
          The premium is always non-negative (more rights = more value) but is often small.
        </p>
      </Definition>

      <Callout type="info" title="When to Exercise Early">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Calls on dividend-paying stocks:</strong> Just before ex-dividend if
            dividend exceeds remaining time value
          </li>
          <li>
            <strong>Deep ITM puts:</strong> When interest earned on strike exceeds remaining
            time value (rare in low-rate environments)
          </li>
          <li>
            <strong>Calls on non-dividend stocks:</strong> Never optimal to exercise early
          </li>
        </ul>
      </Callout>

      <Example title="Dividend-Related Early Exercise">
        <p className="mb-3">
          Stock at $50, call strike $40, dividend $1 ex-tomorrow, call worth $10.50:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Intrinsic value: $10</li>
          <li>Time value: $0.50</li>
          <li>Dividend capture: $1 if you own stock</li>
          <li>If exercised: Get $1 dividend, lose $0.50 time value = net +$0.50</li>
          <li>Optimal: Exercise the call before ex-dividend</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Assignment Risk</h3>

      <p className="mb-4">
        Short American option positions face assignment risk:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>You can be assigned at any time (not just expiration)</li>
        <li>Assignment often happens around dividends or when options are deep ITM</li>
        <li>Short ITM puts may be assigned when interest rates are high</li>
        <li>Assignment creates unexpected stock/cash positions to manage</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Dividend Handling</h3>

      <p className="mb-4">
        Options don't directly receive dividends, but dividends affect pricing:
      </p>

      <Definition title="Dividend Adjustment">
        <p>
          For European options, dividends reduce the effective forward price:
        </p>
        <MathBlock>
          {`F = S_0 e^{rT} - \\sum_i D_i e^{r(T-t_i)}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`D_i`}</InlineMath> are known dividends at times <InlineMath>{`t_i`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="warning" title="Dividend Uncertainty">
        <p>
          Dividends are not truly known—they can be cut, raised, or paid as special dividends.
          This creates "dividend risk" that's especially problematic for long-dated options.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Discrete Hedging</h3>

      <p className="mb-4">
        Black-Scholes assumes continuous hedging. In reality, hedging is discrete:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Markets close overnight and on weekends</li>
        <li>Transaction costs make continuous hedging prohibitively expensive</li>
        <li>Traders typically hedge at intervals or when thresholds are breached</li>
        <li>Discrete hedging introduces P&L variance around the theoretical</li>
      </ul>

      <Example title="Hedging Frequency Impact">
        <p className="mb-3">
          Compare hedging strategies for a delta-hedged short call:
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Strategy</th>
              <th className="pb-2 text-emerald-400">P&L Variance</th>
              <th className="pb-2 text-emerald-400">Txn Costs</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">Hedge every tick</td>
              <td className="py-2">Very low</td>
              <td className="py-2">Very high</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Hedge hourly</td>
              <td className="py-2">Low</td>
              <td className="py-2">Moderate</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Hedge daily</td>
              <td className="py-2">Moderate</td>
              <td className="py-2">Low</td>
            </tr>
            <tr>
              <td className="py-2">Hedge on 1% move</td>
              <td className="py-2">Variable</td>
              <td className="py-2">Variable</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bid-Ask Spread Impact</h3>

      <p className="mb-4">
        Every hedge trade crosses a spread. For frequent hedgers:
      </p>

      <MathBlock>
        {`\\text{Total Spread Cost} = N_{\\text{hedges}} \\times \\text{Avg Spread} \\times \\text{Avg Size}`}
      </MathBlock>

      <p className="mb-4">
        This cost can exceed the option's theoretical edge, especially for high-gamma
        positions that require frequent rehedging.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Other Market Wrinkles</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">Short Sale Constraints</p>
            <p className="text-sm text-dark-300">
              Hard-to-borrow stocks affect put pricing and synthetic positions. Borrowing
              costs should be included in put pricing.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Margin Requirements</p>
            <p className="text-sm text-dark-300">
              Capital requirements for short options can be substantial. Margin calls
              during volatility spikes can force position liquidation.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Settlement Procedures</p>
            <p className="text-sm text-dark-300">
              Physical vs. cash settlement, exercise cutoffs, and settlement timing
              create practical complications.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Position Limits</p>
            <p className="text-sm text-dark-300">
              Regulatory limits on position size can constrain strategies and create
              distortions around limit levels.
            </p>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}
