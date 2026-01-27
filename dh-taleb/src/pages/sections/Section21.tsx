import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Path Dependence Case Studies</h2>

      <p className="mb-4">
        The path the underlying takes to its final value matters enormously for hedging P&L.
        Two scenarios with identical start and end points can produce wildly different results
        for a delta-hedged option position.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Path Matters</h3>

      <p className="mb-4">
        For a delta-hedged position, P&L accumulates from the gamma effect:
      </p>

      <MathBlock>
        {`\\text{P\\&L} = \\frac{1}{2}\\Gamma \\sum_{i} (\\Delta S_i)^2 - \\Theta \\cdot T`}
      </MathBlock>

      <p className="mb-4">
        The sum of squared increments depends on <em>how</em> the price moved, not just
        <em>where</em> it ended up.
      </p>

      <Example title="Same Endpoint, Different Paths">
        <p className="mb-3">
          Stock starts at 100, ends at 100 after one month. Consider two paths:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-2">Path A: Low Volatility</p>
            <p className="text-sm text-dark-300">100 → 101 → 99 → 100 → 101 → 100</p>
            <p className="text-sm text-dark-400 mt-2">Daily moves: ~1%</p>
            <p className="text-sm text-dark-400">Realized vol: ~15%</p>
          </div>
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-rose-400 font-bold mb-2">Path B: High Volatility</p>
            <p className="text-sm text-dark-300">100 → 110 → 95 → 108 → 92 → 100</p>
            <p className="text-sm text-dark-400 mt-2">Daily moves: ~8%</p>
            <p className="text-sm text-dark-400">Realized vol: ~60%</p>
          </div>
        </div>
        <p className="mt-4 text-dark-300">
          Both paths end at 100, but Path B generates massive gamma scalping profits
          (or losses for short gamma).
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Case Study 1: Trending Market</h3>

      <p className="mb-4">
        A market that trends steadily in one direction is the enemy of long gamma:
      </p>

      <Definition title="Trending Market">
        <p>
          A market where prices move consistently in one direction with small retracements.
          Characteristics:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Low realized volatility relative to the move size</li>
          <li>Autocorrelation in returns (momentum)</li>
          <li>Hedging always on the wrong side</li>
        </ul>
      </Definition>

      <Example title="The Long Gamma Grind">
        <p className="mb-3">Long 100-strike straddle, stock trends 100 → 110 over 20 days:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Day 1: S = 100, delta = 0. Buy no stock.</li>
          <li>Day 5: S = 102.5, delta = +0.15. Buy 1,500 shares at 102.5</li>
          <li>Day 10: S = 105, delta = +0.30. Buy 1,500 more at 105</li>
          <li>Day 15: S = 107.5, delta = +0.45. Buy 1,500 more at 107.5</li>
          <li>Day 20: S = 110, delta = +0.60.</li>
        </ul>
        <p className="mt-3 text-dark-400">
          Every hedge purchase was at a higher price. Net result: bought high all the way up.
          Time decay plus bad hedge execution = loss despite the move.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Case Study 2: Mean-Reverting Market</h3>

      <p className="mb-4">
        A market that oscillates around a level is paradise for long gamma:
      </p>

      <Example title="Gamma Paradise">
        <p className="mb-3">Long 100-strike straddle, stock oscillates around 100:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Day 1: S = 100, delta = 0</li>
          <li>Day 2: S = 105, delta = +0.30. Buy 3,000 shares</li>
          <li>Day 3: S = 98, delta = -0.10. Sell 4,000 shares</li>
          <li>Day 4: S = 103, delta = +0.20. Buy 3,000 shares</li>
          <li>Day 5: S = 100, delta = 0. Sell 2,000 shares</li>
        </ul>
        <p className="mt-3 text-dark-400">
          Sold at 98, bought at 103. Sold at 103, bought at 98. Every oscillation
          generates profit. High realized vol, low directional move = gamma heaven.
        </p>
      </Example>

      <Callout type="info" title="Realized Vol vs. Directional Move">
        <p>
          What matters for gamma P&L is the sum of squared moves, not the net move:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>10 moves of 1% = 10 × 1² = 10 "vol units"</li>
          <li>1 move of 10% = 1 × 10² = 100 "vol units"</li>
          <li>Many small moves accumulate vol faster than one big move</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Case Study 3: Gap Risk</h3>

      <p className="mb-4">
        Overnight gaps create path dependence that hedging can't capture:
      </p>

      <Example title="The Weekend Gap">
        <p className="mb-3">Short 100-strike straddle, Friday close S = 100:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Position: Short straddle, delta-hedged (no stock position)</li>
          <li>Weekend: Earnings surprise announced</li>
          <li>Monday open: S = 88 (12% gap down)</li>
          <li>New delta: -0.75 (need to sell 7,500 shares at 88)</li>
          <li>Loss: Gap loss + selling into the hole + vol spike</li>
        </ul>
        <p className="mt-3 text-dark-400">
          The gap bypassed all intermediate hedging opportunities. Continuous hedging
          theory breaks down catastrophically.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lessons from Path Dependence</h3>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Long gamma:</strong> Prefers oscillation, hates trending
        </li>
        <li>
          <strong>Short gamma:</strong> Prefers quiet or trending, hates oscillation
        </li>
        <li>
          <strong>Gap risk:</strong> Can't be hedged, must be sized and tolerated
        </li>
        <li>
          <strong>Hedging frequency:</strong> More frequent = closer to theory, but more cost
        </li>
      </ul>

      <Callout type="warning" title="Model vs. Reality">
        <p>
          "In theory, there is no difference between theory and practice. In practice, there is."
          The BSM assumption of continuous hedging is never true. Path dependence introduces
          P&L variance that no model fully captures.
        </p>
      </Callout>
    </LessonLayout>
  );
}
