import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Fungibility, Convergence, and Stacking</h2>

      <p className="mb-4">
        Options with different characteristics can often substitute for each other—this is
        <strong> fungibility</strong>. Understanding when options are fungible (and when they're
        not) is crucial for trading and risk management.
      </p>

      <Definition title="Fungibility">
        <p>
          Two positions are fungible if they have equivalent risk/reward characteristics.
          In options, fungibility is approximate and depends on context:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Two ATM calls with same Greeks are approximately fungible</li>
          <li>A call and synthetic call are fungible by arbitrage</li>
          <li>Options with different strikes are NOT fungible (different gamma profiles)</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Strike Fungibility</h3>

      <p className="mb-4">
        Can a 95-strike option substitute for a 100-strike option?
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Same delta exposure: Yes, adjust the quantity</li>
        <li>Same gamma exposure: No, gamma profiles differ by strike</li>
        <li>Same vega: Approximately, if both near ATM</li>
        <li>Same convexity: No, payoff curves are different</li>
      </ul>

      <Callout type="warning" title="The Fungibility Trap">
        <p>
          Two positions can have identical Greeks today but diverge dramatically as the
          underlying moves. "Fungibility" based on current Greeks ignores the path-dependent
          evolution of the positions.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Convergence</h3>

      <p className="mb-4">
        As expiration approaches, options "converge" to their intrinsic values:
      </p>

      <Definition title="Convergence">
        <MathBlock>
          {`\\lim_{T \\to 0} V(S, K, T) = \\max(\\phi(S - K), 0)`}
        </MathBlock>
        <p className="mt-2">
          All time value evaporates, leaving only intrinsic value. Delta becomes 0 or 1,
          gamma spikes for ATM options, then collapses.
        </p>
      </Definition>

      <Example title="Convergence Dynamics">
        <p className="mb-3">Final week of a call with S near K = 100:</p>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-2">If S = 101 (ITM)</p>
            <ul className="text-sm text-dark-300 space-y-1">
              <li>Delta → 1</li>
              <li>Gamma → 0</li>
              <li>Time value → 0</li>
              <li>Behaves like stock</li>
            </ul>
          </div>
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-rose-400 font-bold mb-2">If S = 99 (OTM)</p>
            <ul className="text-sm text-dark-300 space-y-1">
              <li>Delta → 0</li>
              <li>Gamma → 0</li>
              <li>Time value → 0</li>
              <li>Worth nothing</li>
            </ul>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pin Risk at Expiration</h3>

      <p className="mb-4">
        When spot "pins" near a strike at expiration, convergence creates extreme risk:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Delta can swing from 0 to 1 (or 0 to -1 for puts) rapidly</li>
        <li>You don't know if you'll be assigned until after the close</li>
        <li>Market makers with large open interest face enormous uncertainty</li>
        <li>This is why OI near strikes often "magnetizes" prices</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Stacking</h3>

      <p className="mb-4">
        "Stacking" refers to accumulating options at similar strikes or maturities:
      </p>

      <Definition title="Position Stacking">
        <p>
          Concentration of risk at specific points in strike/maturity space. A stacked
          position has:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>High gamma concentration near the stack</li>
          <li>Extreme sensitivity if spot moves to the stack</li>
          <li>Potential for large P&L swings</li>
        </ul>
      </Definition>

      <Example title="Stacked Short Gamma">
        <p className="mb-3">
          You're short 1,000 100-strike puts and 1,000 100-strike calls:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Combined position: Short straddle, massive short gamma at 100</li>
          <li>If S = 100: Gamma is extreme, small moves create large delta swings</li>
          <li>If S = 90 or 110: Gamma is much lower, position more stable</li>
          <li>You're "stacked" at the 100 strike</li>
        </ul>
        <p className="mt-3 text-dark-400">
          The concentrated risk makes this position very different from the same gamma
          spread across many strikes.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Rolling and Stacking</h3>

      <p className="mb-4">
        Traders often "roll" expiring positions into new maturities:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Calendar roll:</strong> Close front month, open back month at same strike
        </li>
        <li>
          <strong>Diagonal roll:</strong> Change both strike and maturity
        </li>
        <li>
          <strong>Roll up/down:</strong> Same maturity, different strike
        </li>
      </ul>

      <Callout type="info" title="Roll Execution">
        <p>
          Rolls should be executed as spreads, not individual legs:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Execute both legs simultaneously to lock in spread price</li>
          <li>Avoid "legging risk" where one leg moves before the other executes</li>
          <li>Many exchanges allow roll orders as single transactions</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Managing Concentration Risk</h3>

      <p className="mb-4">
        Strategies to avoid dangerous stacking:
      </p>

      <ol className="list-decimal list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Diversify by strike:</strong> Spread gamma across multiple levels
        </li>
        <li>
          <strong>Diversify by maturity:</strong> Don't concentrate in one expiration
        </li>
        <li>
          <strong>Monitor bucket reports:</strong> Track where risk concentrates
        </li>
        <li>
          <strong>Set limits:</strong> Maximum position at any single strike/expiry
        </li>
      </ol>
    </LessonLayout>
  );
}
