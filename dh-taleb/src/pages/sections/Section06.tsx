import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Arbitrage and the Arbitrageurs</h2>

      <p className="mb-4">
        Arbitrage is the practice of exploiting price discrepancies to earn risk-free profits.
        In theory, arbitrage opportunities should not exist—in practice, they appear briefly
        and are quickly eliminated by traders seeking to exploit them.
      </p>

      <Definition title="Arbitrage">
        <p>
          A trading strategy that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Requires no initial investment (self-financing)</li>
          <li>Has no risk of loss</li>
          <li>Has a positive probability of profit</li>
        </ul>
        <p className="mt-2">
          More formally: a portfolio <InlineMath>{`\\Pi`}</InlineMath> is an arbitrage if
          <InlineMath>{`\\Pi_0 \\leq 0`}</InlineMath>, <InlineMath>{`P(\\Pi_T \\geq 0) = 1`}</InlineMath>,
          and <InlineMath>{`P(\\Pi_T {'>} 0) {'>} 0`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of Arbitrage</h3>

      <p className="mb-4">
        Different arbitrage strategies exploit different types of mispricings:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">Spatial Arbitrage</p>
            <p className="text-sm text-dark-300">
              Same asset trades at different prices in different venues. Buy low, sell high
              simultaneously.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Calendar Arbitrage</p>
            <p className="text-sm text-dark-300">
              Mispricing between different expiration dates. Exploit violations of calendar
              spread constraints.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Put-Call Parity Arbitrage</p>
            <p className="text-sm text-dark-300">
              Violations of <InlineMath>{`C - P = S - Ke^{-rT}`}</InlineMath>. Rare in liquid
              markets.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Conversion/Reversal</p>
            <p className="text-sm text-dark-300">
              Synthetic vs. actual positions. Lock in risk-free profit when synthetics misprice.
            </p>
          </div>
        </div>
      </div>

      <Example title="Put-Call Parity Arbitrage">
        <p className="mb-3">
          Stock at $100, 1-year 100-strike options, r = 5%:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Call trades at $12</li>
          <li>Put trades at $8</li>
          <li>By put-call parity: <InlineMath>{`C - P = S - Ke^{-rT} = 100 - 95.12 = 4.88`}</InlineMath></li>
          <li>Actual: <InlineMath>{`C - P = 12 - 8 = 4`}</InlineMath></li>
          <li>Arbitrage: Buy call, sell put, short stock, lend $95.12</li>
          <li>Lock in $0.88 risk-free profit</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Limits of Arbitrage</h3>

      <p className="mb-4">
        Textbook arbitrage assumes frictionless markets. Reality is different:
      </p>

      <Callout type="warning" title="Why Arbitrage Isn't Easy">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Transaction costs:</strong> Spreads, commissions, and fees eat profits</li>
          <li><strong>Execution risk:</strong> Prices move before you complete all legs</li>
          <li><strong>Funding costs:</strong> Borrowing isn't free or unlimited</li>
          <li><strong>Model risk:</strong> Your "arbitrage" may not be one</li>
          <li><strong>Counterparty risk:</strong> The other side might not perform</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Arbitrage Bounds</h3>

      <p className="mb-4">
        Even without exact pricing, arbitrage enforces bounds on option prices:
      </p>

      <Definition title="Call Option Bounds">
        <MathBlock>
          {`\\max(S - Ke^{-rT}, 0) \\leq C \\leq S`}
        </MathBlock>
        <p className="mt-2">
          The call is worth at least its intrinsic value (lower bound) and at most the
          stock price (upper bound).
        </p>
      </Definition>

      <Definition title="Put Option Bounds">
        <MathBlock>
          {`\\max(Ke^{-rT} - S, 0) \\leq P \\leq Ke^{-rT}`}
        </MathBlock>
        <p className="mt-2">
          The put is worth at least its intrinsic value and at most the present value
          of the strike.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Role of Arbitrageurs</h3>

      <p className="mb-4">
        Arbitrageurs serve an important market function:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Price discovery:</strong> Their activity pushes prices toward fair value
        </li>
        <li>
          <strong>Market efficiency:</strong> They eliminate mispricings, making markets more efficient
        </li>
        <li>
          <strong>Liquidity provision:</strong> Their willingness to trade adds to market depth
        </li>
        <li>
          <strong>Risk transfer:</strong> They intermediate between different market segments
        </li>
      </ul>

      <Callout type="info" title="Arbitrage and Model Calibration">
        <p>
          Arbitrage relationships are used to calibrate pricing models. If your model produces
          prices that violate no-arbitrage bounds, the model is wrong. This is why practitioners
          often "calibrate to the market"—adjusting model parameters so that the model matches
          observed prices that are already arbitrage-free.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Statistical Arbitrage</h3>

      <p className="mb-4">
        True arbitrage (risk-free profit) is rare. More common is <strong>statistical arbitrage</strong>—
        strategies that have positive expected value but involve risk:
      </p>

      <Definition title="Statistical Arbitrage">
        <p>
          A strategy with positive expected profit but non-zero variance:
        </p>
        <MathBlock>
          {`E[\\Pi_T] > 0, \\quad \\text{Var}(\\Pi_T) > 0`}
        </MathBlock>
        <p className="mt-2">
          Unlike pure arbitrage, statistical arbitrage can lose money on any given trade.
          Profitability relies on the law of large numbers.
        </p>
      </Definition>

      <p className="mb-4">
        Most "arbitrage" strategies in practice are statistical arbitrage. The edge is small,
        the frequency is high, and success depends on discipline and execution quality.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Arbitrage in Volatility Markets</h3>

      <p className="mb-4">
        Volatility markets offer unique arbitrage opportunities:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Calendar spreads:</strong> Front month vs. back month implied volatility
        </li>
        <li>
          <strong>Strike arbitrage:</strong> Violations of convexity across strikes
        </li>
        <li>
          <strong>Cross-asset:</strong> Index vol vs. component vols
        </li>
        <li>
          <strong>Variance swaps:</strong> Implied vs. realized volatility
        </li>
      </ul>

      <p className="mb-4">
        These strategies form the foundation of volatility trading, which we'll explore in
        later sections.
      </p>
    </LessonLayout>
  );
}
