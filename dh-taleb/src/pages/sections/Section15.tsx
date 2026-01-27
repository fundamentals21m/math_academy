import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Bleed: Gamma and Delta Bleed</h2>

      <p className="mb-4">
        "Bleed" refers to how Greeks change over time—even without any movement in the
        underlying. Understanding bleed is crucial for anticipating how your position will
        evolve and planning your hedging strategy.
      </p>

      <Definition title="Bleed">
        <p>
          The natural evolution of a Greek over time, holding all other factors constant.
          Mathematically, for a Greek <InlineMath>{`G`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\text{Bleed} = \\frac{\\partial G}{\\partial t}`}
        </MathBlock>
        <p className="mt-2">
          Delta bleed is <InlineMath>{`\\frac{\\partial \\Delta}{\\partial t}`}</InlineMath> (charm).
          Gamma bleed is <InlineMath>{`\\frac{\\partial \\Gamma}{\\partial t}`}</InlineMath> (color).
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Delta Bleed (Charm)</h3>

      <p className="mb-4">
        How does delta change as time passes, with spot unchanged?
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li><strong>ITM options:</strong> Delta bleeds toward 1 (call) or -1 (put)</li>
        <li><strong>OTM options:</strong> Delta bleeds toward 0</li>
        <li><strong>ATM options:</strong> Delta stays near 0.5, but widens volatility bands</li>
      </ul>

      <Example title="Delta Bleed for an OTM Call">
        <p className="mb-3">
          105-strike call with S = 100, 20% vol, tracking delta over time:
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Days to Expiry</th>
              <th className="pb-2 text-emerald-400">Delta</th>
              <th className="pb-2 text-emerald-400">Daily Delta Bleed</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">60</td>
              <td className="py-2">0.38</td>
              <td className="py-2">-0.003</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">30</td>
              <td className="py-2">0.32</td>
              <td className="py-2">-0.005</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">14</td>
              <td className="py-2">0.24</td>
              <td className="py-2">-0.008</td>
            </tr>
            <tr>
              <td className="py-2">7</td>
              <td className="py-2">0.17</td>
              <td className="py-2">-0.012</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          The OTM option's delta decays faster as expiry approaches.
        </p>
      </Example>

      <Callout type="info" title="Hedging Implications">
        <p>
          If you're delta-hedged at Friday close, you might wake up Monday with a delta
          position. Weekend delta bleed can be significant for short-dated options.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Gamma Bleed (Color)</h3>

      <p className="mb-4">
        Gamma bleed describes how gamma changes with time:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">ATM Options</p>
            <p className="text-sm text-dark-300">
              Gamma increases dramatically as expiry approaches. The gamma "explodes"
              in the final days—creating pin risk for short positions.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">OTM/ITM Options</p>
            <p className="text-sm text-dark-300">
              Gamma initially increases, then collapses as the option moves toward
              certain expiry (worthless or exercised).
            </p>
          </div>
        </div>
      </div>

      <Example title="ATM Gamma Explosion">
        <p className="mb-3">ATM call (S = K = 100), 20% vol:</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Days to Expiry</th>
              <th className="pb-2 text-emerald-400">Gamma</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">90</td>
              <td className="py-2">0.022</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">30</td>
              <td className="py-2">0.038</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">7</td>
              <td className="py-2">0.079</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">3</td>
              <td className="py-2">0.121</td>
            </tr>
            <tr>
              <td className="py-2">1</td>
              <td className="py-2 text-rose-400 font-bold">0.210</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          Gamma nearly 10x higher at 1 day vs. 90 days!
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Vega Bleed</h3>

      <p className="mb-4">
        Vega decreases as time passes—less time means less uncertainty:
      </p>

      <MathBlock>
        {`\\mathcal{V} = S\\sqrt{T}N'(d_1) \\propto \\sqrt{T}`}
      </MathBlock>

      <p className="mb-4">
        The <InlineMath>{`\\sqrt{T}`}</InlineMath> factor means vega decays like the square
        root of time. Halving time to expiry reduces vega by about 30%.
      </p>

      <Callout type="warning" title="The Bleed Trap">
        <p>
          Short-dated options have high gamma (which you might like if you're long) but
          also high theta (which you're paying). And the gamma explodes near expiry,
          making hedging increasingly difficult. Many traders have been burned by
          underestimating how quickly the bleed can accelerate.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Managing Bleed Risk</h3>

      <p className="mb-4">Strategies for dealing with bleed:</p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Roll positions:</strong> Close short-dated, open longer-dated to smooth gamma
        </li>
        <li>
          <strong>Anticipate rehedging:</strong> Know your delta will change overnight
        </li>
        <li>
          <strong>Size appropriately:</strong> Smaller positions in high-bleed options
        </li>
        <li>
          <strong>Use spreads:</strong> Long/short combinations can offset bleed
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bleed and P&L</h3>

      <p className="mb-4">
        Understanding bleed helps attribute P&L:
      </p>

      <MathBlock>
        {`\\Delta P \\approx \\Delta \\cdot \\Delta S + \\frac{1}{2}\\Gamma(\\Delta S)^2 + \\Theta \\Delta t + \\mathcal{V} \\Delta\\sigma + \\text{bleed terms}`}
      </MathBlock>

      <p className="mb-4">
        The "unexplained" P&L often comes from bleed—Greek changes that occurred even
        without market movement. Sophisticated risk systems track bleed contributions
        explicitly.
      </p>
    </LessonLayout>
  );
}
