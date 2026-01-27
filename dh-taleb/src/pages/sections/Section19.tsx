import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Distribution Risks and Skew</h2>

      <p className="mb-4">
        Black-Scholes assumes log-normal returns with constant volatility. Reality is messier:
        returns have fat tails, volatility clusters, and the distribution isn't symmetric.
        These "distribution risks" create both dangers and opportunities.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fat Tails (Kurtosis)</h3>

      <Definition title="Kurtosis">
        <p>
          A measure of the "tailedness" of a distribution:
        </p>
        <MathBlock>
          {`\\text{Kurtosis} = \\frac{E[(X - \\mu)^4]}{\\sigma^4}`}
        </MathBlock>
        <p className="mt-2">
          The normal distribution has kurtosis = 3 (excess kurtosis = 0). Financial returns
          typically have excess kurtosis of 5-10, meaning extreme moves are much more common
          than normal predicts.
        </p>
      </Definition>

      <Example title="Fat Tails in Practice">
        <p className="mb-3">Expected vs. actual frequency of large moves (S&P 500):</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Move Size</th>
              <th className="pb-2 text-emerald-400">Normal Expects</th>
              <th className="pb-2 text-emerald-400">Actual</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">3σ move</td>
              <td className="py-2">1 per 370 days</td>
              <td className="py-2">1 per 50 days</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">4σ move</td>
              <td className="py-2">1 per 60 years</td>
              <td className="py-2">1 per 4 years</td>
            </tr>
            <tr>
              <td className="py-2">5σ move</td>
              <td className="py-2">1 per 14,000 years</td>
              <td className="py-2 text-rose-400">Several per century</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="warning" title="The Black Swan Problem">
        <p>
          Models that assume normality dramatically underestimate tail risk. A "once in
          10,000 years" event happens several times per generation. Short gamma positions
          that look safe under normal assumptions can be catastrophically wrong.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Skewness</h3>

      <Definition title="Skewness">
        <p>
          A measure of distribution asymmetry:
        </p>
        <MathBlock>
          {`\\text{Skewness} = \\frac{E[(X - \\mu)^3]}{\\sigma^3}`}
        </MathBlock>
        <p className="mt-2">
          Negative skew means the left tail is fatter (big drops more likely than big
          rallies). Equity indices typically have negative skew.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Volatility Skew</h3>

      <p className="mb-4">
        The market "prices in" non-normal distributions through the volatility skew:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>OTM puts have higher implied vol → pricing in fat left tail</li>
        <li>OTM calls have lower implied vol → less concern about rally tail</li>
        <li>Skew steepens during crises (put demand increases)</li>
        <li>Skew flattens during complacent periods</li>
      </ul>

      <Example title="Reading the Skew">
        <p className="mb-3">S&P 500 implied volatilities (typical pattern):</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Strike (% of Spot)</th>
              <th className="pb-2 text-emerald-400">Implied Vol</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">80%</td>
              <td className="py-2 text-rose-400">28%</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">90%</td>
              <td className="py-2">22%</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">100% (ATM)</td>
              <td className="py-2">18%</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">110%</td>
              <td className="py-2">15%</td>
            </tr>
            <tr>
              <td className="py-2">120%</td>
              <td className="py-2 text-emerald-400">14%</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          The 80% put has nearly double the implied vol of the 120% call.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Skew Risk</h3>

      <p className="mb-4">
        The skew itself can change, creating additional risk:
      </p>

      <Definition title="Skew Risk">
        <p>
          Exposure to changes in the slope of the implied volatility curve. If you're:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Long skew:</strong> Long OTM puts + short OTM calls → profit if skew steepens
          </li>
          <li>
            <strong>Short skew:</strong> Short OTM puts + long OTM calls → profit if skew flattens
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Volatility-Spot Correlation</h3>

      <p className="mb-4">
        In equity markets, volatility and spot are negatively correlated:
      </p>

      <MathBlock>
        {`\\text{Corr}(\\Delta S, \\Delta\\sigma) < 0`}
      </MathBlock>

      <p className="mb-4">
        When stocks fall, volatility rises. This is the "leverage effect"—as stock prices
        fall, companies become more levered, increasing risk and vol.
      </p>

      <Callout type="info" title="Implications for Hedging">
        <p>
          The vol-spot correlation means:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Long put positions benefit doubly from selloffs (delta + vega)</li>
          <li>Short puts lose doubly (delta loss + vol increase)</li>
          <li>Vanna becomes important—delta sensitivity to vol matters</li>
          <li>Simple delta hedges underperform in crashes</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Managing Distribution Risk</h3>

      <p className="mb-4">
        Strategies for dealing with non-normal distributions:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Tail risk hedging:</strong> Own some deep OTM puts as insurance
        </li>
        <li>
          <strong>Stress testing:</strong> Examine P&L under extreme scenarios (not just 2σ)
        </li>
        <li>
          <strong>Position sizing:</strong> Size for worst-case, not expected case
        </li>
        <li>
          <strong>Skew trading:</strong> Express views on the shape of the distribution
        </li>
      </ul>
    </LessonLayout>
  );
}
