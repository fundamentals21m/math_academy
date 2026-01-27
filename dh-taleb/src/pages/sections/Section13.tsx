import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Vega and the Volatility Surface</h2>

      <p className="mb-4">
        Vega measures sensitivity to changes in implied volatility. Unlike delta and gamma,
        which relate to the observable underlying price, vega relates to a model parameter—
        making it both crucial and subtle.
      </p>

      <Definition title="Vega">
        <p>
          The rate of change of option price with respect to volatility:
        </p>
        <MathBlock>
          {`\\mathcal{V} = \\frac{\\partial V}{\\partial \\sigma}`}
        </MathBlock>
        <p className="mt-2">For European options under BSM:</p>
        <MathBlock>
          {`\\mathcal{V} = S \\sqrt{T} N'(d_1)`}
        </MathBlock>
        <p className="mt-2">
          Vega is typically quoted per 1 percentage point change in implied volatility.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Vega Characteristics</h3>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Vega is always positive for long options (calls and puts)</li>
        <li>Vega is highest for ATM options</li>
        <li>Vega increases with time to expiration</li>
        <li>Vega is symmetric around ATM (unlike delta)</li>
        <li>Calls and puts with same strike/expiry have the same vega</li>
      </ul>

      <Example title="Vega by Time to Expiration">
        <p className="mb-3">ATM vega for an option on a $100 stock at 20% vol:</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Time to Expiry</th>
              <th className="pb-2 text-emerald-400">Vega (per 1 vol point)</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">7 days</td>
              <td className="py-2">$5.50</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">30 days</td>
              <td className="py-2">$11.40</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">90 days</td>
              <td className="py-2">$19.70</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">180 days</td>
              <td className="py-2">$27.80</td>
            </tr>
            <tr>
              <td className="py-2">365 days</td>
              <td className="py-2">$39.40</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          Longer-dated options have much more vega—they're more sensitive to vol changes.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Volatility Surface</h3>

      <p className="mb-4">
        In BSM, volatility is constant. In reality, implied volatility varies by strike and
        expiration. This creates the <strong>volatility surface</strong>.
      </p>

      <Definition title="Volatility Surface">
        <p>
          A three-dimensional plot of implied volatility as a function of strike <InlineMath>{`K`}</InlineMath>
          and expiration <InlineMath>{`T`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\sigma_{\\text{impl}} = \\sigma(K, T)`}
        </MathBlock>
        <p className="mt-2">
          The surface captures all the market's option prices in a single structure.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Volatility Smile/Skew</h3>

      <p className="mb-4">
        For a fixed expiration, plotting implied vol against strike reveals patterns:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">Volatility Smile</p>
            <p className="text-sm text-dark-300">
              OTM puts and OTM calls both have higher implied vol than ATM. Creates a
              U-shape. Common in FX markets.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Volatility Skew</p>
            <p className="text-sm text-dark-300">
              OTM puts have higher implied vol than OTM calls. Creates a downward-sloping
              curve. Common in equity index markets (demand for crash protection).
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Volatility Smirk</p>
            <p className="text-sm text-dark-300">
              Asymmetric smile with more pronounced skew on one side. Individual equities
              often show this pattern.
            </p>
          </div>
        </div>
      </div>

      <Callout type="info" title="Why Does the Skew Exist?">
        <p>
          The equity index skew emerged after the 1987 crash. Explanations include:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Demand for downside protection (institutional hedging)</li>
          <li>Fat tails in the return distribution</li>
          <li>Leverage effect (vol increases as prices fall)</li>
          <li>Risk aversion and crash fears</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Term Structure of Volatility</h3>

      <p className="mb-4">
        Implied volatility also varies by expiration:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Contango:</strong> Far months higher than near months. Normal pattern—
          more time means more uncertainty.
        </li>
        <li>
          <strong>Backwardation:</strong> Near months higher than far months. Occurs during
          crises or before known events.
        </li>
        <li>
          <strong>Kinked:</strong> Vol term structure reflects known future events (earnings,
          FOMC meetings, elections).
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Vega Hedging</h3>

      <p className="mb-4">
        To hedge vega, you need to trade options (underlying can't hedge vol exposure):
      </p>

      <Example title="Vega Neutralization">
        <p className="mb-3">
          Portfolio is long $50,000 vega (makes $50K if vol rises 1 point):
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Sell options to reduce vega exposure</li>
          <li>If ATM calls have $20 vega each, sell 2,500 contracts</li>
          <li>Or sell variance swaps (pure vol exposure)</li>
          <li>But selling options adds gamma risk!</li>
        </ul>
        <p className="mt-3 text-dark-400">
          Vega and gamma are intertwined—hedging one often changes the other.
        </p>
      </Example>

      <Callout type="warning" title="Vega vs. Volga">
        <p>
          Vega assumes volatility changes uniformly across strikes. In reality, the entire
          surface can shift and twist. <strong>Volga</strong> (vega of vega) measures
          sensitivity to how vega itself changes—important for far OTM options.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Weighted Vega</h3>

      <p className="mb-4">
        Since different expirations respond differently to vol changes, many traders
        compute weighted vega, normalizing to a reference maturity:
      </p>

      <MathBlock>
        {`\\mathcal{V}_{\\text{weighted}} = \\mathcal{V} \\times \\sqrt{\\frac{T_{\\text{ref}}}{T}}`}
      </MathBlock>

      <p className="mb-4">
        This allows comparing vega across different tenors on an apples-to-apples basis.
      </p>
    </LessonLayout>
  );
}
