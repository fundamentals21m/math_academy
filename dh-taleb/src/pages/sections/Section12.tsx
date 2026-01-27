import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Gamma and Shadow Gamma</h2>

      <p className="mb-4">
        Gamma measures how fast delta changes—it's the convexity of your option position.
        Understanding gamma is essential because it determines your hedging frequency,
        hedging cost, and exposure to large moves.
      </p>

      <Definition title="Gamma">
        <p>
          The rate of change of delta with respect to spot price:
        </p>
        <MathBlock>
          {`\\Gamma = \\frac{\\partial \\Delta}{\\partial S} = \\frac{\\partial^2 V}{\\partial S^2}`}
        </MathBlock>
        <p className="mt-2">For European options under BSM:</p>
        <MathBlock>
          {`\\Gamma = \\frac{N'(d_1)}{S \\sigma \\sqrt{T}}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`N'(x)`}</InlineMath> is the standard normal density.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Gamma Characteristics</h3>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Gamma is always positive for long options (calls and puts)</li>
        <li>Gamma is always negative for short options</li>
        <li>Gamma is highest for ATM options</li>
        <li>Gamma increases as expiration approaches (for ATM)</li>
        <li>Gamma decreases with higher volatility (more spread out)</li>
      </ul>

      <Example title="Gamma by Strike and Time">
        <p className="mb-3">Gamma for a 20% vol stock at different strikes and maturities:</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Strike</th>
              <th className="pb-2 text-emerald-400">30 Days</th>
              <th className="pb-2 text-emerald-400">90 Days</th>
              <th className="pb-2 text-emerald-400">180 Days</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">90 (OTM put)</td>
              <td className="py-2">0.012</td>
              <td className="py-2">0.015</td>
              <td className="py-2">0.014</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">95</td>
              <td className="py-2">0.025</td>
              <td className="py-2">0.021</td>
              <td className="py-2">0.017</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">100 (ATM)</td>
              <td className="py-2 text-emerald-400 font-bold">0.038</td>
              <td className="py-2">0.022</td>
              <td className="py-2">0.015</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">105</td>
              <td className="py-2">0.024</td>
              <td className="py-2">0.020</td>
              <td className="py-2">0.016</td>
            </tr>
            <tr>
              <td className="py-2">110 (OTM call)</td>
              <td className="py-2">0.010</td>
              <td className="py-2">0.014</td>
              <td className="py-2">0.013</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          Note how ATM gamma explodes for short-dated options.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Long Gamma vs. Short Gamma</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Long Gamma (+Γ)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>✓ Makes money on big moves</li>
            <li>✓ Delta moves in your favor</li>
            <li>✗ Pays theta (time decay)</li>
            <li>✗ Loses if nothing happens</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-rose-400 font-bold mb-2">Short Gamma (-Γ)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>✓ Earns theta (time decay)</li>
            <li>✓ Profits if nothing happens</li>
            <li>✗ Loses on big moves</li>
            <li>✗ Delta moves against you</li>
          </ul>
        </div>
      </div>

      <Callout type="info" title="The Gamma-Theta Trade-off">
        <p>
          Gamma and theta are two sides of the same coin. By no-arbitrage:
        </p>
        <MathBlock>
          {`\\Theta \\approx -\\frac{1}{2}\\Gamma S^2 \\sigma^2`}
        </MathBlock>
        <p className="mt-2">
          Long gamma = pay theta. Short gamma = earn theta. You can't have one without the other.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Gamma P&L</h3>

      <p className="mb-4">
        The P&L from gamma for a delta-hedged position:
      </p>

      <MathBlock>
        {`\\text{Gamma P\\&L} = \\frac{1}{2}\\Gamma (\\Delta S)^2`}
      </MathBlock>

      <Example title="Gamma Profit">
        <p className="mb-3">
          Long 100 ATM calls with gamma = 0.03 per option. Stock moves from 100 to 105:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Total gamma: 0.03 × 100 × 100 = 300</li>
          <li><InlineMath>{`\\Delta S = 5`}</InlineMath></li>
          <li>Gamma P&L: <InlineMath>{`0.5 \\times 300 \\times 5^2 = \\$3,750`}</InlineMath></li>
        </ul>
        <p className="mt-3 text-dark-400">
          This is the "gamma scalping" profit from being long convexity.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Shadow Gamma</h3>

      <p className="mb-4">
        Shadow gamma refers to hidden gamma exposures that don't appear in standard reports
        but can materialize under certain conditions:
      </p>

      <Definition title="Shadow Gamma">
        <p>
          Gamma exposure that is latent or conditional, appearing when:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A barrier is approached</li>
          <li>A digital option nears its strike at expiry</li>
          <li>An early exercise decision point approaches</li>
          <li>A hedging instrument changes character</li>
        </ul>
      </Definition>

      <Callout type="warning" title="The Pin Risk Example">
        <p>
          As expiration approaches, ATM options have explosive gamma. If you're short ATM
          options and spot "pins" near the strike, small movements create huge delta swings—
          this is "shadow gamma" that only appears in specific circumstances.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Dollar Gamma</h3>

      <p className="mb-4">
        For risk comparison across assets, express gamma in dollar terms:
      </p>

      <Definition title="Dollar Gamma">
        <MathBlock>
          {`\\text{\\$Gamma} = \\frac{1}{2} \\Gamma S^2 \\times (0.01)^2 \\times \\text{Position Size}`}
        </MathBlock>
        <p className="mt-2">
          This measures the P&L for a 1% move in the underlying, accounting for the
          quadratic relationship.
        </p>
      </Definition>

      <p className="mb-4">
        Understanding and managing gamma is what separates sophisticated options traders
        from directional speculators. In the next section, we explore vega—sensitivity
        to volatility itself.
      </p>
    </LessonLayout>
  );
}
