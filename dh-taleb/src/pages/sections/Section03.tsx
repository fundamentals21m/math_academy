import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Generalized Option</h2>

      <p className="mb-4">
        Taleb introduces the concept of the "generalized option"—a unified framework for
        understanding all option types as variations of a single template. This abstraction
        reveals the deep connections between seemingly different instruments.
      </p>

      <Definition title="Generalized Option">
        <p>
          Any instrument with a payoff that can be expressed as:
        </p>
        <MathBlock>
          {`V_T = \\omega \\cdot \\phi \\cdot \\max(\\eta(S_T - K), 0)`}
        </MathBlock>
        <p className="mt-2">where:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`\\omega`}</InlineMath> = +1 (long) or -1 (short)</li>
          <li><InlineMath>{`\\phi`}</InlineMath> = call/put indicator: +1 (call), -1 (put)</li>
          <li><InlineMath>{`\\eta`}</InlineMath> = payoff multiplier (notional)</li>
          <li><InlineMath>{`K`}</InlineMath> = strike price</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Four Basic Positions</h3>

      <p className="mb-4">
        Using the generalized framework, all basic option positions are just parameter combinations:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Position</th>
              <th className="pb-2 text-emerald-400"><InlineMath>{`\\omega`}</InlineMath></th>
              <th className="pb-2 text-emerald-400"><InlineMath>{`\\phi`}</InlineMath></th>
              <th className="pb-2 text-emerald-400">Delta Sign</th>
              <th className="pb-2 text-emerald-400">Gamma Sign</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">Long Call</td>
              <td className="py-2">+1</td>
              <td className="py-2">+1</td>
              <td className="py-2 text-emerald-400">+</td>
              <td className="py-2 text-emerald-400">+</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Short Call</td>
              <td className="py-2">-1</td>
              <td className="py-2">+1</td>
              <td className="py-2 text-rose-400">-</td>
              <td className="py-2 text-rose-400">-</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Long Put</td>
              <td className="py-2">+1</td>
              <td className="py-2">-1</td>
              <td className="py-2 text-rose-400">-</td>
              <td className="py-2 text-emerald-400">+</td>
            </tr>
            <tr>
              <td className="py-2">Short Put</td>
              <td className="py-2">-1</td>
              <td className="py-2">-1</td>
              <td className="py-2 text-emerald-400">+</td>
              <td className="py-2 text-rose-400">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info" title="Pattern Recognition">
        <p>
          Notice: <strong>Long options always have positive gamma</strong> (they benefit from
          movement). <strong>Short options always have negative gamma</strong> (they suffer
          from movement). This is the fundamental asymmetry of options.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Option Portfolios as Combinations</h3>

      <p className="mb-4">
        Any option portfolio is simply a sum of generalized options. The portfolio value is:
      </p>

      <MathBlock>
        {`V_{\\text{portfolio}} = \\sum_{i} V_i = \\sum_{i} \\omega_i \\cdot \\phi_i \\cdot \\max(\\eta_i(S_T - K_i), 0)`}
      </MathBlock>

      <Example title="Straddle as Sum of Generalized Options">
        <p className="mb-3">
          A long straddle (long call + long put at same strike) can be written as:
        </p>
        <MathBlock>
          {`V_{\\text{straddle}} = \\max(S_T - K, 0) + \\max(K - S_T, 0) = |S_T - K|`}
        </MathBlock>
        <p className="mt-3 text-dark-300">
          The straddle payoff is the absolute deviation from the strike—a pure bet on
          magnitude of movement, regardless of direction.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Greeks Generalize Too</h3>

      <p className="mb-4">
        The generalized option framework extends naturally to the Greeks. For any portfolio:
      </p>

      <MathBlock>
        {`\\Delta_{\\text{portfolio}} = \\sum_i \\omega_i \\cdot \\Delta_i`}
      </MathBlock>

      <MathBlock>
        {`\\Gamma_{\\text{portfolio}} = \\sum_i \\omega_i \\cdot \\Gamma_i`}
      </MathBlock>

      <p className="mb-4">
        This linearity is powerful: to find the portfolio's total exposure, simply sum the
        individual exposures. But beware—this aggregation can mask concentration risk.
      </p>

      <Callout type="warning" title="Aggregation Pitfall">
        <p>
          Two options with opposite deltas might net to zero, but this doesn't mean zero risk.
          A long 50-delta call and short 50-delta call at <em>different strikes</em> has zero
          net delta but significant gamma and vega exposure. Always examine the full distribution
          of Greeks, not just the totals.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">From Discrete to Continuous</h3>

      <p className="mb-4">
        The generalized option framework leads naturally to the concept of option <strong>strips</strong>
        and ultimately to continuous payoffs. As we add more strikes:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>A call spread is the difference of two calls</li>
        <li>A butterfly is a call spread minus another call spread</li>
        <li>A condor extends the butterfly</li>
        <li>In the limit, any smooth payoff can be replicated</li>
      </ul>

      <Definition title="Replication Theorem (Informal)">
        <p>
          Any European payoff <InlineMath>{`g(S_T)`}</InlineMath> can be replicated by a portfolio of:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A position in the underlying and risk-free asset</li>
          <li>A continuum of options across all strikes</li>
        </ul>
        <MathBlock>
          {`g(S_T) = g(F) + g'(F)(S_T - F) + \\int_0^F g''(K)(K-S_T)^+ dK + \\int_F^\\infty g''(K)(S_T-K)^+ dK`}
        </MathBlock>
      </Definition>

      <p className="mb-4">
        This result (formalized by Breeden-Litzenberger and Carr-Madan) is the theoretical
        foundation for variance swaps and exotic replication. In practice, we use discrete
        approximations with available strikes.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Applications</h3>

      <p className="mb-4">
        The generalized option concept helps traders:
      </p>

      <ol className="list-decimal list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Compare positions:</strong> Express any structure in a common language
        </li>
        <li>
          <strong>Identify equivalences:</strong> Recognize when two structures have identical Greeks
        </li>
        <li>
          <strong>Transform positions:</strong> Convert between equivalent representations
        </li>
        <li>
          <strong>Decompose risk:</strong> Break complex structures into simple components
        </li>
      </ol>

      <p className="mb-4">
        In the next section, we move from the instruments themselves to the people who
        trade them: market makers and market users, whose different incentives shape the
        entire options ecosystem.
      </p>
    </LessonLayout>
  );
}
