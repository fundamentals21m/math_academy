import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Barrier Options: Knock-Out and Knock-In</h2>

      <p className="mb-4">
        Barrier options are vanilla options that either come into existence (knock-in) or
        cease to exist (knock-out) when the underlying touches a specified barrier level.
        They're cheaper than vanillas but introduce path-dependent hedging challenges.
      </p>

      <Definition title="Barrier Option">
        <p>
          An option whose existence depends on whether the underlying asset reaches a
          specified barrier level <InlineMath>{`H`}</InlineMath> during the option's life:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Knock-Out:</strong> Option expires worthless if barrier is touched
          </li>
          <li>
            <strong>Knock-In:</strong> Option only becomes active if barrier is touched
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of Barrier Options</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-emerald-400 font-bold mb-3">Knock-Out Options</p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm font-semibold text-dark-200 mb-2">Down-and-Out Call</p>
            <p className="text-sm text-dark-400">
              Call that expires worthless if S falls to barrier below.
              Barrier {'<'} Spot {'<'} Strike typically.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-dark-200 mb-2">Up-and-Out Call</p>
            <p className="text-sm text-dark-400">
              Call that expires worthless if S rises to barrier above.
              Spot {'<'} Strike {'<'} Barrier typically.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-dark-200 mb-2">Down-and-Out Put</p>
            <p className="text-sm text-dark-400">
              Put that expires worthless if S falls to barrier below.
              Barrier {'<'} Strike {'<'} Spot typically.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-dark-200 mb-2">Up-and-Out Put</p>
            <p className="text-sm text-dark-400">
              Put that expires worthless if S rises to barrier above.
              Spot {'<'} Barrier typically.
            </p>
          </div>
        </div>
        <p className="text-emerald-400 font-bold mb-3">Knock-In Options</p>
        <p className="text-sm text-dark-400">
          Same four types, but option activates (instead of deactivating) at the barrier.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">In-Out Parity</h3>

      <p className="mb-4">
        A fundamental relationship connects knock-in and knock-out options:
      </p>

      <Definition title="In-Out Parity">
        <MathBlock>
          {`V_{\\text{knock-in}} + V_{\\text{knock-out}} = V_{\\text{vanilla}}`}
        </MathBlock>
        <p className="mt-2">
          A knock-in plus a knock-out with the same barrier equals a vanilla option.
          Either the barrier is touched (knock-in activates) or it isn't (knock-out survives).
        </p>
      </Definition>

      <Example title="Using In-Out Parity">
        <p className="mb-3">A vanilla call is worth $10:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Down-and-out call (barrier at 90): $7</li>
          <li>Down-and-in call (same barrier): $3</li>
          <li>Check: $7 + $3 = $10 ✓</li>
        </ul>
        <p className="mt-3 text-dark-400">
          You can replicate either barrier option using the other and a vanilla.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pricing Barrier Options</h3>

      <p className="mb-4">
        Under Black-Scholes assumptions, barrier options have closed-form solutions:
      </p>

      <Definition title="Down-and-Out Call Price">
        <MathBlock>
          {`C_{\\text{do}} = C_{\\text{vanilla}} - \\left(\\frac{S}{H}\\right)^{2\\lambda} C\\left(\\frac{H^2}{S}, K, T, r, \\sigma\\right)`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\lambda = (r - q)/\\sigma^2 + 1/2`}</InlineMath>. The second term
          represents the "rebate" from barrier touch probability.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Greeks of Barrier Options</h3>

      <p className="mb-4">
        Barrier options have complex Greek profiles:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Delta:</strong> Can be discontinuous at the barrier
        </li>
        <li>
          <strong>Gamma:</strong> Can explode near the barrier
        </li>
        <li>
          <strong>Vega:</strong> Complex—higher vol can increase or decrease value depending
          on barrier location
        </li>
        <li>
          <strong>Barrier delta:</strong> Sensitivity to barrier level itself
        </li>
      </ul>

      <Callout type="warning" title="Near-Barrier Behavior">
        <p>
          As spot approaches the barrier:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Knock-out value drops toward zero (or rebate)</li>
          <li>Knock-in value approaches vanilla value</li>
          <li>Deltas can swing wildly</li>
          <li>Hedging becomes extremely difficult</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Trade Barriers?</h3>

      <p className="mb-4">
        Barrier options are popular because they're cheaper:
      </p>

      <Example title="Cost Comparison">
        <p className="mb-3">
          S = 100, K = 100, T = 6 months, σ = 25%:
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Option</th>
              <th className="pb-2 text-emerald-400">Price</th>
              <th className="pb-2 text-emerald-400">Savings</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">Vanilla Call</td>
              <td className="py-2">$8.50</td>
              <td className="py-2">—</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Down-and-Out Call (H=85)</td>
              <td className="py-2">$7.00</td>
              <td className="py-2">18%</td>
            </tr>
            <tr>
              <td className="py-2">Down-and-Out Call (H=90)</td>
              <td className="py-2">$5.50</td>
              <td className="py-2">35%</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          Closer barrier = more likely to knock out = cheaper option.
        </p>
      </Example>

      <p className="mb-4">
        The trade-off: You give up protection in scenarios where the barrier is breached.
        If you have a view that the barrier won't be touched, barriers offer leveraged exposure.
      </p>
    </LessonLayout>
  );
}
