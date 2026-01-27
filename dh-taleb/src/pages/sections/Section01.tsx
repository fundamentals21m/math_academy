import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Derivatives and Synthetic Securities</h2>

      <p className="mb-4">
        A derivative is a financial instrument whose value derives from something else—an underlying
        asset, index, or rate. But derivatives are more than just bets on price movements. They are
        the building blocks for constructing any desired payoff structure.
      </p>

      <Definition title="Derivative">
        <p>
          A financial contract whose value is determined by (derived from) the value of an underlying
          asset <InlineMath>{`S`}</InlineMath>. If <InlineMath>{`V(S, t)`}</InlineMath> is the derivative value:
        </p>
        <MathBlock>
          {`V = f(S, t, \\sigma, r, ...)`}
        </MathBlock>
        <p className="mt-2">
          The derivative's value depends on the underlying price <InlineMath>{`S`}</InlineMath>,
          time <InlineMath>{`t`}</InlineMath>, volatility <InlineMath>{`\\sigma`}</InlineMath>,
          and other parameters.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Synthetic Revolution</h3>

      <p className="mb-4">
        One of the most powerful concepts in finance is that of the <strong>synthetic</strong>—
        creating a position that mimics another using different instruments. This isn't just
        financial engineering wizardry; it's the foundation of arbitrage and hedging.
      </p>

      <Callout type="info" title="Put-Call Parity">
        <p>
          The fundamental synthetic relationship. A call plus cash equals a put plus stock:
        </p>
        <MathBlock>
          {`C + Ke^{-rT} = P + S`}
        </MathBlock>
        <p className="mt-2">
          Rearranging gives us recipes for creating any position synthetically.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Synthetic Positions</h3>

      <p className="mb-4">
        From put-call parity, we can derive synthetic versions of every basic position:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Position</th>
              <th className="pb-2 text-emerald-400">Synthetic Equivalent</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">Long Stock</td>
              <td className="py-2">Long Call + Short Put + Lend PV(K)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Short Stock</td>
              <td className="py-2">Short Call + Long Put + Borrow PV(K)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Long Call</td>
              <td className="py-2">Long Stock + Long Put + Borrow PV(K)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Long Put</td>
              <td className="py-2">Short Stock + Long Call + Lend PV(K)</td>
            </tr>
            <tr>
              <td className="py-2">Risk-Free Bond</td>
              <td className="py-2">Long Stock + Long Put + Short Call (same K)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Example title="Creating Synthetic Long Stock">
        <p className="mb-3">
          Suppose you want stock exposure but can't buy the stock directly (perhaps due to
          short-selling restrictions or settlement issues). You can create synthetic long stock:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Buy a call with strike <InlineMath>{`K`}</InlineMath></li>
          <li>Sell a put with the same strike <InlineMath>{`K`}</InlineMath></li>
          <li>Lend <InlineMath>{`Ke^{-rT}`}</InlineMath> (the present value of the strike)</li>
        </ul>
        <p className="mt-3">
          This position has identical payoff to owning the stock. At expiration:
        </p>
        <MathBlock>
          {`\\text{Payoff} = \\max(S_T - K, 0) - \\max(K - S_T, 0) + K = S_T`}
        </MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Synthetics Matter for Hedging</h3>

      <p className="mb-4">
        Synthetics aren't just academic exercises. They're essential tools for:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Arbitrage:</strong> If the synthetic trades at a different price than the actual,
          there's a risk-free profit opportunity
        </li>
        <li>
          <strong>Liquidity access:</strong> Sometimes the synthetic is more liquid than the actual
        </li>
        <li>
          <strong>Regulatory arbitrage:</strong> Synthetics may face different rules than actuals
        </li>
        <li>
          <strong>Hedging flexibility:</strong> Multiple ways to achieve the same economic exposure
        </li>
      </ul>

      <Callout type="warning" title="Practical Complications">
        <p>
          In practice, synthetics are never perfect replicas. Differences arise from:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Bid-ask spreads and transaction costs</li>
          <li>Dividend timing and uncertainty</li>
          <li>American vs. European exercise</li>
          <li>Collateral and margin requirements</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Forward Contract</h3>

      <p className="mb-4">
        The simplest derivative is the forward contract—an agreement to buy or sell an asset
        at a future date for a price agreed today.
      </p>

      <Definition title="Forward Price">
        <p>
          The forward price <InlineMath>{`F`}</InlineMath> is the delivery price that makes the
          forward contract have zero initial value:
        </p>
        <MathBlock>
          {`F = S_0 e^{(r-q)T}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`S_0`}</InlineMath> is the spot price, <InlineMath>{`r`}</InlineMath> is
          the risk-free rate, <InlineMath>{`q`}</InlineMath> is the dividend yield, and{' '}
          <InlineMath>{`T`}</InlineMath> is time to maturity.
        </p>
      </Definition>

      <p className="mb-4">
        Notice that a forward is equivalent to a call minus a put at the forward strike
        (where both options have zero initial cost). This relationship is sometimes called
        "forward parity."
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Building Blocks Philosophy</h3>

      <p className="mb-4">
        Think of derivatives as Lego blocks. With calls, puts, forwards, and cash, you can
        construct any payoff you desire. The skill of the trader lies in:
      </p>

      <ol className="list-decimal list-inside space-y-2 mb-6 text-dark-300">
        <li>Identifying the cheapest way to build a desired payoff</li>
        <li>Recognizing when synthetics offer better value than actuals</li>
        <li>Understanding the hidden risks in each building block</li>
        <li>Managing the Greeks of the combined structure</li>
      </ol>

      <p className="mb-4">
        In the next section, we'll dive deeper into options themselves—the most versatile
        building blocks in the derivative toolbox.
      </p>
    </LessonLayout>
  );
}
