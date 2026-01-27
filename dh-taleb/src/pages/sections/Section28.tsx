import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Barrier Options Risk Management</h2>

      <p className="mb-4">
        Managing a portfolio of barrier options requires techniques beyond standard Greek
        hedging. The discontinuous nature of barriers creates risks that vanilla Greeks
        don't capture.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Near-Barrier Dynamics</h3>

      <p className="mb-4">
        As spot approaches a barrier, several dangerous dynamics emerge:
      </p>

      <Definition title="Barrier Proximity Risk">
        <p>
          The risk profile changes dramatically as spot approaches the barrier:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Greeks become increasingly volatile</li>
          <li>Delta hedging requires larger, more frequent trades</li>
          <li>Hedging costs can exceed remaining option value</li>
          <li>Model error has maximum impact near barriers</li>
        </ul>
      </Definition>

      <Example title="Delta Instability Near Barrier">
        <p className="mb-3">
          Down-and-out call: K = 100, barrier = 90, S approaches 91:
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Spot</th>
              <th className="pb-2 text-emerald-400">Option Value</th>
              <th className="pb-2 text-emerald-400">Delta</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">95</td>
              <td className="py-2">$3.50</td>
              <td className="py-2">0.55</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">93</td>
              <td className="py-2">$2.20</td>
              <td className="py-2">0.65</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">91</td>
              <td className="py-2">$0.80</td>
              <td className="py-2 text-rose-400">0.90</td>
            </tr>
            <tr>
              <td className="py-2">90</td>
              <td className="py-2">$0.00</td>
              <td className="py-2">—</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          Delta increases as the option approaches knockout—precisely when you can least afford
          to be wrong about hedging.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Gap Risk at Barriers</h3>

      <p className="mb-4">
        The most dangerous scenario: spot gaps through the barrier overnight:
      </p>

      <Callout type="warning" title="The Gap Through">
        <p>
          If you're short a knock-in put with barrier at 90:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Friday close: S = 92, option worth ~$2 (knock-in unlikely)</li>
          <li>Monday open: S = 85 (news over weekend)</li>
          <li>Barrier was breached: Now you're short a deep ITM put worth $15</li>
          <li>Loss: $13 per contract, no hedging possible</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hedging Strategies</h3>

      <p className="mb-4">
        Practical approaches to barrier risk management:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">Spread Replication</p>
            <p className="text-sm text-dark-300">
              Approximate the barrier with a series of vanilla options. Less accurate but
              more stable hedge.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Static Hedging</p>
            <p className="text-sm text-dark-300">
              Use put-call symmetry and reflection to construct a static hedge that replicates
              the barrier payoff at the barrier level.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Buffer Zones</p>
            <p className="text-sm text-dark-300">
              Start reducing position as spot enters a "danger zone" near the barrier.
              Accept basis risk but avoid catastrophic scenarios.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Early Unwinding</p>
            <p className="text-sm text-dark-300">
              Close barrier positions before they become unmanageable. Take the loss early
              rather than risk a larger loss later.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Static Hedging of Barriers</h3>

      <p className="mb-4">
        Under certain conditions, barriers can be statically hedged using vanilla options:
      </p>

      <Definition title="Static Hedge Principle">
        <p>
          If the barrier is at <InlineMath>{`H`}</InlineMath>, construct a portfolio of vanillas
          such that at the barrier level, the hedge portfolio value equals the rebate (or
          knockout value). Key identity:
        </p>
        <MathBlock>
          {`V(H) = \\sum_i w_i \\cdot \\text{Vanilla}_i(H)`}
        </MathBlock>
        <p className="mt-2">
          The hedge is set up once and doesn't require dynamic adjustment—hence "static."
        </p>
      </Definition>

      <Example title="Static Hedge Construction">
        <p className="mb-3">
          To statically hedge a down-and-out call (K = 100, H = 80):
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Long vanilla call struck at 100</li>
          <li>Short vanilla put struck at 64 (= H²/K) with appropriate ratio</li>
          <li>The put component cancels the call value exactly at H = 80</li>
          <li>No dynamic hedging needed (in theory)</li>
        </ul>
        <p className="mt-3 text-dark-400">
          This works perfectly under BSM assumptions; in practice, skew and discrete barriers
          create basis risk.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Position Limits and Sizing</h3>

      <p className="mb-4">
        Given the risks, prudent barrier book management includes:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Maximum notional:</strong> Cap total barrier exposure regardless of Greeks
        </li>
        <li>
          <strong>Distance limits:</strong> Reduce positions as barriers approach current spot
        </li>
        <li>
          <strong>Concentration limits:</strong> Diversify barrier levels, don't stack at one price
        </li>
        <li>
          <strong>Stress scenarios:</strong> Size for gap-through scenarios, not normal moves
        </li>
      </ul>

      <Callout type="info" title="The 50% Rule">
        <p>
          Some desks follow a "50% rule": when a barrier option's Greeks imply hedging costs
          would exceed 50% of remaining value, close the position. Better to take a certain
          loss than risk an unmanageable one.
        </p>
      </Callout>
    </LessonLayout>
  );
}
