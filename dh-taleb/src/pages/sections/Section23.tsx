import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">American Binary Options</h2>

      <p className="mb-4">
        American binaries (also called "one-touch" or "touch" options) pay out as soon as
        a barrier level is reached, not just at expiration. This path-dependent feature
        makes them even more challenging to price and hedge than European binaries.
      </p>

      <Definition title="American Binary (One-Touch)">
        <p>
          An option that pays a fixed amount <InlineMath>{`Q`}</InlineMath> immediately when
          the underlying first touches a specified barrier <InlineMath>{`H`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\text{Payoff} = Q \\cdot \\mathbf{1}_{\\tau_H \\leq T}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\tau_H = \\inf\\{t : S_t = H}\\}`}</InlineMath> is the first
          hitting time of the barrier.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of Touch Options</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">One-Touch (Up)</p>
            <p className="text-sm text-dark-300">
              Pays if spot ever touches an upper barrier. Barrier {'>'} current spot.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">One-Touch (Down)</p>
            <p className="text-sm text-dark-300">
              Pays if spot ever touches a lower barrier. Barrier {'<'} current spot.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">No-Touch</p>
            <p className="text-sm text-dark-300">
              Pays if spot NEVER touches the barrier during the option's life.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Double One-Touch</p>
            <p className="text-sm text-dark-300">
              Pays if spot touches either of two barriers (one above, one below).
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Double No-Touch</p>
            <p className="text-sm text-dark-300">
              Pays if spot stays within a range, never touching either barrier.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pricing One-Touch Options</h3>

      <p className="mb-4">
        Under constant volatility, one-touch options have analytical solutions:
      </p>

      <Definition title="One-Touch (Up) Price">
        <MathBlock>
          {`V = Q \\cdot \\left[ N(d_1) + \\left(\\frac{H}{S}\\right)^{2\\lambda} N(d_2) \\right]`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\lambda = (r - q + \\sigma^2/2)/\\sigma^2`}</InlineMath> and
          <InlineMath>{`d_1, d_2`}</InlineMath> involve the barrier level.
        </p>
      </Definition>

      <Example title="One-Touch Pricing">
        <p className="mb-3">
          One-touch up option: S = 100, H = 110, T = 3 months, σ = 20%, r = 5%, Q = $100:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Probability of touching 110: ~45%</li>
          <li>Option price: ~$45 (discounted expected payoff)</li>
          <li>If spot rises to 105: Price increases to ~$65</li>
          <li>If spot falls to 95: Price decreases to ~$25</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Greeks of Touch Options</h3>

      <p className="mb-4">
        Touch options have extreme Greeks near the barrier:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Delta:</strong> Increases dramatically as spot approaches barrier
        </li>
        <li>
          <strong>Gamma:</strong> Extremely high near barrier, changes sign
        </li>
        <li>
          <strong>Theta:</strong> Complex—sometimes positive (time helps probability of touching)
        </li>
        <li>
          <strong>Vega:</strong> Usually positive (more vol = higher touch probability)
        </li>
      </ul>

      <Callout type="warning" title="The Barrier Approach">
        <p>
          As spot approaches the barrier, everything explodes:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Delta approaches ±infinity</li>
          <li>Hedging becomes impossible in theory</li>
          <li>Price jumps from V to Q at the touch</li>
          <li>Practical hedging requires spread replication</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">No-Touch Options</h3>

      <p className="mb-4">
        No-touch options pay if the barrier is NOT touched. They're the complement of
        one-touch options:
      </p>

      <MathBlock>
        {`V_{\\text{no-touch}} = Q \\cdot e^{-rT} - V_{\\text{one-touch}}`}
      </MathBlock>

      <p className="mb-4">
        A no-touch buyer profits from low volatility and range-bound markets.
      </p>

      <Example title="No-Touch Strategy">
        <p className="mb-3">
          Sell a no-touch with barriers at 90 and 110, spot at 100:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Receive premium upfront</li>
          <li>Win if spot stays in 90-110 range</li>
          <li>Lose if either barrier is touched</li>
          <li>This is essentially a bet on low volatility</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hedging Touch Options</h3>

      <p className="mb-4">
        Practical hedging approaches for touch options:
      </p>

      <ol className="list-decimal list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Vanilla spread replication:</strong> Use a series of vanilla options
          to approximate the payoff
        </li>
        <li>
          <strong>Stop-loss strategy:</strong> Buy/sell underlying when barrier is approached
        </li>
        <li>
          <strong>Correlation with vanillas:</strong> Offset with vanilla positions that
          have similar Greeks
        </li>
        <li>
          <strong>Accept basis risk:</strong> Hedge imperfectly and size positions accordingly
        </li>
      </ol>

      <Callout type="info" title="The FX Market">
        <p>
          Touch options are extremely popular in FX markets, where they're used to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Express views on volatility and range</li>
          <li>Create structured products for yield enhancement</li>
          <li>Hedge against specific level breaches</li>
          <li>Speculate on technical support/resistance levels</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
