import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Volatility Fundamentals</h2>

      <p className="mb-4">
        Volatility is the central concept in options pricing and hedging. It measures the
        magnitude of price fluctuations—but "volatility" can mean different things in different
        contexts. Understanding these distinctions is essential.
      </p>

      <Definition title="Volatility (General)">
        <p>
          A measure of the dispersion of returns. Typically expressed as an annualized
          standard deviation:
        </p>
        <MathBlock>
          {`\\sigma = \\sqrt{252} \\cdot \\text{std}(\\text{daily returns})`}
        </MathBlock>
        <p className="mt-2">
          The factor of <InlineMath>{`\\sqrt{252}`}</InlineMath> annualizes from daily (assuming
          252 trading days per year).
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of Volatility</h3>

      <p className="mb-4">
        The term "volatility" can refer to several distinct concepts:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">Historical (Realized) Volatility</p>
            <p className="text-sm text-dark-300">
              The actual volatility observed in past price data. Backward-looking.
              Calculated from historical returns.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Implied Volatility</p>
            <p className="text-sm text-dark-300">
              The volatility parameter that, when input to a pricing model (like Black-Scholes),
              produces the observed market price. Forward-looking market expectation.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Future Realized Volatility</p>
            <p className="text-sm text-dark-300">
              The volatility that will actually occur over the option's life. Unknown until
              after expiration.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Forecast Volatility</p>
            <p className="text-sm text-dark-300">
              Your prediction of future realized volatility. Based on models, intuition,
              or both.
            </p>
          </div>
        </div>
      </div>

      <Callout type="info" title="The Volatility Trading Game">
        <p>
          Option trading is fundamentally about the gap between implied and realized volatility:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Sell options</strong> if you think implied {'>'} future realized</li>
          <li><strong>Buy options</strong> if you think implied {'<'} future realized</li>
        </ul>
        <p className="mt-2">
          Delta hedging converts a directional bet into a volatility bet.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Calculating Historical Volatility</h3>

      <p className="mb-4">
        The standard approach uses close-to-close returns:
      </p>

      <Definition title="Close-to-Close Volatility">
        <MathBlock>
          {`\\sigma_{\\text{CC}} = \\sqrt{\\frac{252}{n-1} \\sum_{i=1}^{n} (r_i - \\bar{r})^2}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`r_i = \\ln(S_i / S_{i-1})`}</InlineMath> are log returns.
        </p>
      </Definition>

      <Example title="Computing 20-Day Historical Vol">
        <p className="mb-3">Given 21 consecutive closing prices:</p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Calculate 20 daily log returns</li>
          <li>Compute the standard deviation of these returns</li>
          <li>Annualize by multiplying by <InlineMath>{`\\sqrt{252}`}</InlineMath></li>
        </ol>
        <p className="mt-3">
          If daily std dev = 1.2%, then annualized vol = <InlineMath>{`1.2\\% \\times \\sqrt{252} \\approx 19\\%`}</InlineMath>
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Problems with Close-to-Close</h3>

      <p className="mb-4">
        Close-to-close volatility has significant limitations:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Ignores intraday moves:</strong> A stock that rallies 5% then falls 5% to close
          unchanged shows zero close-to-close return
        </li>
        <li>
          <strong>Overnight gaps:</strong> Opening gaps are included, mixing overnight and intraday vol
        </li>
        <li>
          <strong>Low frequency:</strong> Only one data point per day, making estimates noisy
        </li>
        <li>
          <strong>Autocorrelation:</strong> Assumes returns are independent, which they often aren't
        </li>
      </ul>

      <Callout type="warning" title="The Weekend Effect">
        <p>
          Markets are closed on weekends, but the world doesn't stop. Should Friday-to-Monday
          returns count as 1 day or 3? Neither answer is fully satisfying. Many practitioners
          weight weekend returns by <InlineMath>{`\\sqrt{3}`}</InlineMath> to account for
          elapsed calendar time.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implied Volatility</h3>

      <p className="mb-4">
        Implied volatility is "backed out" from market prices. Given an option price, find the
        volatility that makes the model price equal the market price:
      </p>

      <MathBlock>
        {`C_{\\text{market}} = C_{\\text{BS}}(S, K, T, r, \\sigma_{\\text{implied}})`}
      </MathBlock>

      <p className="mb-4">
        This is typically solved numerically (Newton-Raphson, bisection) since there's no
        closed-form inverse.
      </p>

      <Definition title="Implied Volatility">
        <p>
          The unique volatility <InlineMath>{`\\sigma_{\\text{impl}}`}</InlineMath> such that:
        </p>
        <MathBlock>
          {`\\text{BS}(S, K, T, r, \\sigma_{\\text{impl}}) = \\text{Market Price}`}
        </MathBlock>
        <p className="mt-2">
          Implied volatility is quoted as an annualized percentage (e.g., 25%).
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What Implied Vol Really Tells Us</h3>

      <p className="mb-4">
        Implied volatility is often interpreted as "the market's expectation of future volatility."
        This is only approximately true. More precisely, implied volatility reflects:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Expected future volatility</li>
        <li>Plus a risk premium for bearing volatility uncertainty</li>
        <li>Plus/minus supply and demand imbalances</li>
        <li>Plus model imperfections (the model is wrong, so the implied parameter absorbs error)</li>
      </ul>

      <p className="mb-4">
        This is why implied volatility systematically exceeds realized volatility in most markets—
        the "volatility risk premium" rewards sellers of options for bearing uncertainty.
      </p>
    </LessonLayout>
  );
}
