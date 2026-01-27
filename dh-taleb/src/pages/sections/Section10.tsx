import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Delta: Characteristics and Applications</h2>

      <p className="mb-4">
        Delta is the most important Greek—the first derivative of option price with respect to
        the underlying. It tells you how many shares to trade to hedge, and it's the foundation
        of dynamic hedging.
      </p>

      <Definition title="Delta">
        <p>
          The rate of change of option price with respect to the underlying price:
        </p>
        <MathBlock>
          {`\\Delta = \\frac{\\partial V}{\\partial S}`}
        </MathBlock>
        <p className="mt-2">For European options under BSM:</p>
        <MathBlock>
          {`\\Delta_{\\text{call}} = N(d_1) \\quad \\Delta_{\\text{put}} = N(d_1) - 1`}
        </MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Delta Interpretations</h3>

      <p className="mb-4">Delta has several equivalent interpretations:</p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">Hedge Ratio</p>
            <p className="text-sm text-dark-300">
              Number of shares needed to hedge one option. A 0.50-delta call requires 50 shares
              to hedge 100 shares of option exposure (1 contract).
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Probability Proxy</p>
            <p className="text-sm text-dark-300">
              Approximately the risk-neutral probability of finishing in-the-money. A 0.30-delta
              call has roughly a 30% chance of expiring ITM.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Equivalent Stock Position</p>
            <p className="text-sm text-dark-300">
              The option behaves like holding <InlineMath>{`\\Delta`}</InlineMath> shares. A 0.70-delta
              call moves like 70 shares for small stock moves.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Delta Characteristics</h3>

      <p className="mb-4">Key properties of delta:</p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Call delta ranges from 0 (deep OTM) to 1 (deep ITM)</li>
        <li>Put delta ranges from -1 (deep ITM) to 0 (deep OTM)</li>
        <li>ATM options have delta near ±0.5</li>
        <li>Delta is monotonic in spot price</li>
        <li>Call delta + |Put delta| = 1 for same strike (by put-call parity)</li>
      </ul>

      <Example title="Delta by Moneyness">
        <p className="mb-3">For a call option with 30 days to expiry, 20% vol:</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Moneyness</th>
              <th className="pb-2 text-emerald-400">Call Delta</th>
              <th className="pb-2 text-emerald-400">Put Delta</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">10% OTM</td>
              <td className="py-2">0.15</td>
              <td className="py-2">-0.85</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">5% OTM</td>
              <td className="py-2">0.30</td>
              <td className="py-2">-0.70</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">ATM</td>
              <td className="py-2">0.52</td>
              <td className="py-2">-0.48</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">5% ITM</td>
              <td className="py-2">0.72</td>
              <td className="py-2">-0.28</td>
            </tr>
            <tr>
              <td className="py-2">10% ITM</td>
              <td className="py-2">0.87</td>
              <td className="py-2">-0.13</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Delta Hedging</h3>

      <p className="mb-4">
        To delta-hedge, hold <InlineMath>{`-\\Delta`}</InlineMath> shares against each option:
      </p>

      <MathBlock>
        {`\\text{Hedge Shares} = -\\Delta \\times \\text{Option Quantity}`}
      </MathBlock>

      <Example title="Hedging a Short Call Position">
        <p className="mb-3">
          You're short 100 call contracts (10,000 shares notional) with delta 0.55:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Position delta: <InlineMath>{`-100 \\times 100 \\times 0.55 = -5,500`}</InlineMath></li>
          <li>To neutralize: Buy 5,500 shares</li>
          <li>Combined portfolio delta: 0</li>
        </ul>
        <p className="mt-3 text-dark-400">
          This portfolio is now "delta-neutral"—it doesn't profit or lose from small stock moves.
        </p>
      </Example>

      <Callout type="warning" title="Delta is Not Static">
        <p>
          Delta changes as spot moves. The hedge must be continuously adjusted:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Stock rises → Call delta increases → Buy more shares</li>
          <li>Stock falls → Call delta decreases → Sell some shares</li>
          <li>This "buy high, sell low" pattern creates hedging cost</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Factors Affecting Delta</h3>

      <p className="mb-4">
        Delta depends on more than just spot price:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Time to expiry:</strong> As expiry approaches, ATM delta stays ~0.5 but OTM deltas
          collapse toward 0 and ITM deltas approach 1
        </li>
        <li>
          <strong>Volatility:</strong> Higher vol pushes deltas toward 0.5 (more uncertainty);
          lower vol pushes toward 0 or 1 (more certainty)
        </li>
        <li>
          <strong>Interest rates:</strong> Higher rates increase call deltas slightly
        </li>
        <li>
          <strong>Dividends:</strong> Expected dividends reduce call deltas
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Dollar Delta</h3>

      <p className="mb-4">
        For risk management, it's often useful to express delta in dollar terms:
      </p>

      <Definition title="Dollar Delta">
        <MathBlock>
          {`\\text{\\$Delta} = \\Delta \\times S \\times \\text{Quantity}`}
        </MathBlock>
        <p className="mt-2">
          This measures the dollar P&L for a 1% move in the underlying.
        </p>
      </Definition>

      <p className="mb-4">
        Dollar delta is additive across positions and makes it easy to compare exposures
        across different underlyings with different prices.
      </p>
    </LessonLayout>
  );
}
