import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Black-Scholes-Merton Framework</h2>

      <p className="mb-4">
        The Black-Scholes-Merton (BSM) model is the foundation of modern options pricing.
        Despite its well-known limitations, it remains the industry standard for quoting prices,
        calculating Greeks, and communicating about options.
      </p>

      <Callout type="info" title="The 1973 Revolution">
        <p>
          Fischer Black, Myron Scholes, and Robert Merton published their option pricing
          formula in 1973. The key insight: options can be perfectly replicated by continuously
          trading the underlying, making pricing a matter of no-arbitrage rather than forecasting.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Model Assumptions</h3>

      <p className="mb-4">
        The BSM model assumes:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Stock price follows geometric Brownian motion</li>
        <li>Volatility is constant over the option's life</li>
        <li>No transaction costs or taxes</li>
        <li>Continuous trading is possible</li>
        <li>No dividends (or known dividend yield)</li>
        <li>Risk-free rate is constant and known</li>
        <li>No arbitrage opportunities</li>
      </ul>

      <Definition title="Geometric Brownian Motion">
        <p>
          The stock price <InlineMath>{`S`}</InlineMath> follows:
        </p>
        <MathBlock>
          {`dS = \\mu S \\, dt + \\sigma S \\, dW`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\mu`}</InlineMath> is the drift, <InlineMath>{`\\sigma`}</InlineMath> is
          volatility, and <InlineMath>{`dW`}</InlineMath> is a Wiener process increment.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Black-Scholes Formula</h3>

      <Definition title="Black-Scholes Call Price">
        <MathBlock>
          {`C = S_0 N(d_1) - K e^{-rT} N(d_2)`}
        </MathBlock>
        <p className="mt-2">where:</p>
        <MathBlock>
          {`d_1 = \\frac{\\ln(S_0/K) + (r + \\sigma^2/2)T}{\\sigma\\sqrt{T}}`}
        </MathBlock>
        <MathBlock>
          {`d_2 = d_1 - \\sigma\\sqrt{T}`}
        </MathBlock>
        <p className="mt-2">
          and <InlineMath>{`N(\\cdot)`}</InlineMath> is the standard normal cumulative distribution.
        </p>
      </Definition>

      <Definition title="Black-Scholes Put Price">
        <MathBlock>
          {`P = K e^{-rT} N(-d_2) - S_0 N(-d_1)`}
        </MathBlock>
      </Definition>

      <Example title="Pricing a Call Option">
        <p className="mb-3">Given: S = $100, K = $100, T = 1 year, r = 5%, σ = 20%</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><InlineMath>{`d_1 = (\\ln(1) + (0.05 + 0.02))/0.20 = 0.35`}</InlineMath></li>
          <li><InlineMath>{`d_2 = 0.35 - 0.20 = 0.15`}</InlineMath></li>
          <li><InlineMath>{`N(0.35) = 0.6368`}</InlineMath></li>
          <li><InlineMath>{`N(0.15) = 0.5596`}</InlineMath></li>
          <li><InlineMath>{`C = 100(0.6368) - 100e^{-0.05}(0.5596) = \\$10.45`}</InlineMath></li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interpreting the Formula</h3>

      <p className="mb-4">
        The formula has an elegant interpretation:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <MathBlock>
          {`C = \\underbrace{S_0 N(d_1)}_{\\text{Stock position}} - \\underbrace{K e^{-rT} N(d_2)}_{\\text{Bond position}}`}
        </MathBlock>
        <ul className="mt-4 space-y-2 text-dark-300">
          <li>
            <InlineMath>{`N(d_2)`}</InlineMath> = Risk-neutral probability the call finishes in-the-money
          </li>
          <li>
            <InlineMath>{`N(d_1)`}</InlineMath> = Delta of the call option
          </li>
          <li>
            <InlineMath>{`S_0 N(d_1)`}</InlineMath> = Present value of stock received if exercised
          </li>
          <li>
            <InlineMath>{`Ke^{-rT}N(d_2)`}</InlineMath> = Present value of strike paid if exercised
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Replication Argument</h3>

      <p className="mb-4">
        The BSM price is derived from a no-arbitrage replication argument:
      </p>

      <ol className="list-decimal list-inside space-y-2 mb-6 text-dark-300">
        <li>Form a portfolio: long one call, short <InlineMath>{`\\Delta`}</InlineMath> shares</li>
        <li>This portfolio is locally riskless (delta-hedged)</li>
        <li>By no-arbitrage, it must earn the risk-free rate</li>
        <li>Setting up this condition gives the BSM partial differential equation</li>
        <li>Solving the PDE gives the BSM formula</li>
      </ol>

      <Callout type="warning" title="Model Limitations">
        <p>
          Every BSM assumption is violated in reality:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Volatility is not constant (volatility smile/skew)</li>
          <li>Returns are not normally distributed (fat tails)</li>
          <li>Trading is not continuous (gaps, weekends)</li>
          <li>Transaction costs exist and matter</li>
          <li>Markets can be illiquid</li>
        </ul>
        <p className="mt-2">
          BSM is "wrong" but useful—a common language for the industry.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BSM as a Quoting Convention</h3>

      <p className="mb-4">
        In practice, BSM is used not as truth but as a translation device:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Traders quote in implied volatility, not dollars</li>
        <li>BSM converts between implied vol and price</li>
        <li>Different strikes have different implied vols (the "smile")</li>
        <li>This isn't a model failure—it's how the market communicates</li>
      </ul>

      <p className="mb-4">
        The Greeks—delta, gamma, vega, theta—are partial derivatives of the BSM formula.
        We'll explore each in the upcoming sections on first-order and higher-order sensitivities.
      </p>
    </LessonLayout>
  );
}
