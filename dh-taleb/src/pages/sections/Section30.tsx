import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Multiasset and Rainbow Options</h2>

      <p className="mb-4">
        Rainbow options have payoffs that depend on multiple underlying assets. The
        "rainbow" name reflects the multiple colors (assets) that can determine the
        payoff. Correlation becomes a critical pricing parameter.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of Rainbow Options</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">Best-of Option</p>
            <p className="text-sm text-dark-300">
              Pays the return of the best-performing asset: <InlineMath>{`\\max(S_1, S_2, ..., S_n) - K`}</InlineMath>
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Worst-of Option</p>
            <p className="text-sm text-dark-300">
              Pays the return of the worst-performing asset: <InlineMath>{`\\min(S_1, S_2, ..., S_n) - K`}</InlineMath>
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Spread Option</p>
            <p className="text-sm text-dark-300">
              Pays based on the difference between two assets: <InlineMath>{`(S_1 - S_2 - K)^+`}</InlineMath>
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Basket Option</p>
            <p className="text-sm text-dark-300">
              Pays based on a weighted average: <InlineMath>{`(\\sum w_i S_i - K)^+`}</InlineMath>
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Exchange Option (Margrabe)</p>
            <p className="text-sm text-dark-300">
              Right to exchange one asset for another: <InlineMath>{`(S_1 - S_2)^+`}</InlineMath>
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Role of Correlation</h3>

      <p className="mb-4">
        Correlation is crucial for rainbow option pricing:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Best-of:</strong> Lower correlation → higher value (more spread in outcomes)
        </li>
        <li>
          <strong>Worst-of:</strong> Higher correlation → higher value (less spread in outcomes)
        </li>
        <li>
          <strong>Spread:</strong> Higher correlation → lower spread vol → lower option value
        </li>
      </ul>

      <Example title="Correlation Impact">
        <p className="mb-3">Two assets, each with 20% vol, ATM best-of call:</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Correlation</th>
              <th className="pb-2 text-emerald-400">Best-of Value</th>
              <th className="pb-2 text-emerald-400">Worst-of Value</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">-0.5</td>
              <td className="py-2 text-emerald-400">$12.50</td>
              <td className="py-2">$4.20</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">0.0</td>
              <td className="py-2">$10.80</td>
              <td className="py-2">$5.00</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">0.5</td>
              <td className="py-2">$9.20</td>
              <td className="py-2">$5.90</td>
            </tr>
            <tr>
              <td className="py-2">1.0</td>
              <td className="py-2">$8.00</td>
              <td className="py-2 text-emerald-400">$8.00</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          At correlation = 1, best-of equals worst-of (both assets move identically).
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Margrabe's Formula</h3>

      <p className="mb-4">
        The exchange option has a famous closed-form solution:
      </p>

      <Definition title="Margrabe Formula">
        <p>
          The value of the option to exchange asset 2 for asset 1:
        </p>
        <MathBlock>
          {`V = S_1 e^{-q_1 T} N(d_1) - S_2 e^{-q_2 T} N(d_2)`}
        </MathBlock>
        <p className="mt-2">where</p>
        <MathBlock>
          {`\\sigma = \\sqrt{\\sigma_1^2 + \\sigma_2^2 - 2\\rho\\sigma_1\\sigma_2}`}
        </MathBlock>
        <p className="mt-2">
          Note: No discounting by risk-free rate—the two assets provide their own numeraire.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Greeks of Rainbow Options</h3>

      <p className="mb-4">
        Rainbow options have Greeks with respect to each underlying:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <InlineMath>{`\\Delta_1, \\Delta_2, ...`}</InlineMath>: Sensitivity to each asset
        </li>
        <li>
          <InlineMath>{`\\Gamma_{11}, \\Gamma_{22}, \\Gamma_{12}`}</InlineMath>: Own and cross gammas
        </li>
        <li>
          "Correlation vega": Sensitivity to changes in correlation
        </li>
        <li>
          Multiple vegas for each asset's volatility
        </li>
      </ul>

      <Callout type="warning" title="Correlation Hedging">
        <p>
          Correlation risk is particularly difficult to hedge:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>No liquid "correlation swap" market in most assets</li>
          <li>Correlation is unstable and spikes in crises</li>
          <li>Variance swaps on the spread can help but imperfectly</li>
          <li>Often treated as unhedgeable model risk</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Basket Options</h3>

      <p className="mb-4">
        Baskets have no closed-form solution because a weighted sum of lognormals is not
        lognormal. Approximation methods:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Moment matching:</strong> Approximate basket as lognormal with matched moments
        </li>
        <li>
          <strong>Monte Carlo:</strong> Simulate all assets with correlation structure
        </li>
        <li>
          <strong>Lower bounds:</strong> Use geometric average (which is lognormal) as lower bound
        </li>
      </ul>

      <Example title="Index Option as Basket">
        <p className="mb-3">
          An S&P 500 option is a basket option on 500 stocks:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Basket vol {'<'} average vol of components (diversification)</li>
          <li>Implied correlation can be backed out from index vs. component vols</li>
          <li>Correlation trades exist between index options and component options</li>
        </ul>
      </Example>
    </LessonLayout>
  );
}
