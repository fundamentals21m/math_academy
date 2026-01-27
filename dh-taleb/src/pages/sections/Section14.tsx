import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Theta and Minor Greeks</h2>

      <p className="mb-4">
        Beyond delta, gamma, and vega, options have sensitivities to time (theta) and other
        factors. These "minor Greeks" can become major concerns in specific circumstances.
      </p>

      <Definition title="Theta">
        <p>
          The rate of change of option price with respect to time:
        </p>
        <MathBlock>
          {`\\Theta = \\frac{\\partial V}{\\partial t}`}
        </MathBlock>
        <p className="mt-2">
          Theta is typically negative for long options (time decay) and positive for short
          options (time decay benefit).
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Theta Characteristics</h3>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Theta is highest (most negative) for ATM options</li>
        <li>Theta accelerates as expiration approaches</li>
        <li>OTM options decay to zero; ITM options decay to intrinsic</li>
        <li>Weekend theta: Does time decay happen on weekends?</li>
      </ul>

      <Example title="Theta Decay Pattern">
        <p className="mb-3">ATM call, S = K = $100, 20% vol, 5% rate:</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Days to Expiry</th>
              <th className="pb-2 text-emerald-400">Option Price</th>
              <th className="pb-2 text-emerald-400">Daily Theta</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">30</td>
              <td className="py-2">$2.92</td>
              <td className="py-2">-$0.05</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">14</td>
              <td className="py-2">$1.99</td>
              <td className="py-2">-$0.07</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">7</td>
              <td className="py-2">$1.41</td>
              <td className="py-2">-$0.10</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">3</td>
              <td className="py-2">$0.90</td>
              <td className="py-2">-$0.15</td>
            </tr>
            <tr>
              <td className="py-2">1</td>
              <td className="py-2">$0.52</td>
              <td className="py-2 text-rose-400">-$0.26</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          The final day's theta can exceed half the remaining premium.
        </p>
      </Example>

      <Callout type="info" title="The Gamma-Theta Relationship">
        <p>
          Theta is the "cost" of gamma. For a delta-hedged position:
        </p>
        <MathBlock>
          {`\\Theta \\approx -\\frac{1}{2}\\Gamma S^2 \\sigma^2`}
        </MathBlock>
        <p className="mt-2">
          If you're earning theta, you're paying gamma (exposed to moves). If you're paying
          theta, you're earning gamma (benefiting from moves).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Rho: Interest Rate Sensitivity</h3>

      <Definition title="Rho">
        <MathBlock>
          {`\\rho = \\frac{\\partial V}{\\partial r}`}
        </MathBlock>
        <p className="mt-2">
          Measures sensitivity to the risk-free interest rate. Positive for calls (higher
          rates make delayed payment of strike more valuable), negative for puts.
        </p>
      </Definition>

      <p className="mb-4">
        Rho is usually a minor concern for short-dated options but matters for:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Long-dated options (LEAPS)</li>
        <li>Large notional positions</li>
        <li>When rates are volatile or changing</li>
        <li>Currency options (two rates involved)</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Higher-Order Greeks</h3>

      <p className="mb-4">
        The second and third derivatives provide additional insight:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">Vanna</p>
            <p className="text-sm text-dark-300">
              <InlineMath>{`\\frac{\\partial \\Delta}{\\partial \\sigma}`}</InlineMath> = sensitivity
              of delta to volatility. Important when vol and spot move together.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Volga (Vomma)</p>
            <p className="text-sm text-dark-300">
              <InlineMath>{`\\frac{\\partial^2 V}{\\partial \\sigma^2}`}</InlineMath> = sensitivity
              of vega to volatility. Measures convexity in vol.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Charm (Delta Decay)</p>
            <p className="text-sm text-dark-300">
              <InlineMath>{`\\frac{\\partial \\Delta}{\\partial t}`}</InlineMath> = how delta
              changes with time. Important for overnight delta management.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Color (Gamma Decay)</p>
            <p className="text-sm text-dark-300">
              <InlineMath>{`\\frac{\\partial \\Gamma}{\\partial t}`}</InlineMath> = how gamma
              changes with time. ATM gamma explodes near expiry.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Speed</p>
            <p className="text-sm text-dark-300">
              <InlineMath>{`\\frac{\\partial \\Gamma}{\\partial S}`}</InlineMath> = rate of change
              of gamma. How quickly your gamma position changes as spot moves.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">When Minor Greeks Matter</h3>

      <Example title="Vanna in Practice">
        <p className="mb-3">
          Consider an OTM put during a market selloff:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Spot falls → put delta becomes more negative</li>
          <li>Vol rises → put delta becomes even more negative (vanna effect)</li>
          <li>Combined effect: delta moves much more than gamma alone predicts</li>
          <li>Hedgers must account for the vol-spot correlation</li>
        </ul>
      </Example>

      <Callout type="warning" title="The Greeks Change the Greeks">
        <p>
          Every Greek is itself sensitive to other factors:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Delta depends on vol (vanna)</li>
          <li>Gamma depends on time (color)</li>
          <li>Vega depends on vol (volga)</li>
          <li>Everything depends on spot</li>
        </ul>
        <p className="mt-2">
          This interconnection means hedging is never truly "done"—it's a continuous process.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summary of Greeks</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2">Greek</th>
              <th className="pb-2">Measures</th>
              <th className="pb-2">Long Option</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">Delta (Δ)</td>
              <td className="py-2">∂V/∂S</td>
              <td className="py-2">+ (call) / - (put)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Gamma (Γ)</td>
              <td className="py-2">∂²V/∂S²</td>
              <td className="py-2">+ (always)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Vega (ν)</td>
              <td className="py-2">∂V/∂σ</td>
              <td className="py-2">+ (always)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Theta (Θ)</td>
              <td className="py-2">∂V/∂t</td>
              <td className="py-2">- (usually)</td>
            </tr>
            <tr>
              <td className="py-2">Rho (ρ)</td>
              <td className="py-2">∂V/∂r</td>
              <td className="py-2">+ (call) / - (put)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LessonLayout>
  );
}
