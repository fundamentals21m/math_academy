import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Reverse and Double Barrier Options</h2>

      <p className="mb-4">
        Beyond simple knock-in/knock-out structures, barrier options can have more complex
        configurations: reverse barriers (where the barrier is on the "wrong" side) and
        double barriers (two boundaries that must be navigated).
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Reverse Barrier Options</h3>

      <Definition title="Reverse Barrier">
        <p>
          A barrier option where the barrier is placed such that touching it would normally
          increase the option's value:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Reverse Knock-Out Call:</strong> Up-and-out call with barrier above the strike.
            Knocks out as it becomes more ITM.
          </li>
          <li>
            <strong>Reverse Knock-Out Put:</strong> Down-and-out put with barrier below the strike.
            Knocks out as it becomes more ITM.
          </li>
        </ul>
      </Definition>

      <Example title="Reverse Knock-Out Call">
        <p className="mb-3">
          Call with K = 100, up-and-out barrier at H = 120:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>If S stays below 120, option pays <InlineMath>{`(S_T - 100)^+`}</InlineMath></li>
          <li>If S ever touches 120, option is knocked out</li>
          <li>Maximum possible payoff: $20 (if S = 119.99 at expiry)</li>
          <li>The option is "capped" by the barrier</li>
        </ul>
        <p className="mt-3 text-dark-400">
          This behaves like a capped call spread—much cheaper than vanilla, but limited upside.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Reverse Barrier Greeks</h3>

      <p className="mb-4">
        Reverse barriers have counterintuitive Greek behavior:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-emerald-400 font-bold mb-3">Up-and-Out Call Near Barrier</p>
        <ul className="text-sm text-dark-300 space-y-2">
          <li>
            <strong>Delta:</strong> Can become <em>negative</em>! As S rises toward H,
            the value drops (knockout risk increases faster than intrinsic value grows).
          </li>
          <li>
            <strong>Gamma:</strong> Extremely negative near the barrier.
          </li>
          <li>
            <strong>Vega:</strong> Typically negative near the barrier (more vol = more
            likely to knock out).
          </li>
        </ul>
      </div>

      <Callout type="warning" title="Negative Delta on a Call">
        <p>
          A call option with negative delta seems paradoxical—but for reverse knock-outs,
          it makes sense. As the stock rises, you're getting closer to having your option
          knocked out. The knockout risk dominates the intrinsic value gain.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Double Barrier Options</h3>

      <p className="mb-4">
        Double barrier options have two levels—an upper and lower barrier:
      </p>

      <Definition title="Double Knock-Out">
        <p>
          An option that is knocked out if the underlying touches either barrier:
        </p>
        <MathBlock>
          {`V_{\\text{DKO}} = V_{\\text{vanilla}} \\cdot P(L < S_t < U \\text{ for all } t \\leq T)`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`L`}</InlineMath> and <InlineMath>{`U`}</InlineMath> are the lower and
          upper barriers.
        </p>
      </Definition>

      <Example title="Double Knock-Out Call">
        <p className="mb-3">
          Call: K = 100, lower barrier L = 80, upper barrier U = 120, S = 100:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Option survives only if S stays in (80, 120) range</li>
          <li>Knocked out by either a crash (S touches 80) or a rally (S touches 120)</li>
          <li>Much cheaper than single barrier options</li>
          <li>Essentially a bet on range-bound trading</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Double Barrier Greeks</h3>

      <p className="mb-4">
        Double barriers have even more complex Greeks:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Near lower barrier:</strong> Delta becomes more positive (want S to rise away)
        </li>
        <li>
          <strong>Near upper barrier:</strong> Delta becomes more negative (want S to fall away)
        </li>
        <li>
          <strong>In the middle:</strong> Greeks resemble vanilla, but muted
        </li>
        <li>
          <strong>Vega:</strong> Always negative for double knock-outs (more vol = more
          likely to hit a barrier)
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pricing Double Barriers</h3>

      <p className="mb-4">
        Double barrier options have analytical solutions involving infinite series:
      </p>

      <Definition title="Double Barrier Formula Structure">
        <MathBlock>
          {`V = \\sum_{n=-\\infty}^{\\infty} \\left[ f(S, K, T, n, L, U) \\right]`}
        </MathBlock>
        <p className="mt-2">
          The infinite sum reflects the "bouncing" of probability between the two barriers.
          In practice, the series converges quickly and is truncated.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Applications</h3>

      <p className="mb-4">
        Reverse and double barriers are used for:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Yield enhancement:</strong> Investors sell double knock-out notes for
          premium, betting on range-bound markets
        </li>
        <li>
          <strong>Hedging with a view:</strong> Cheaper protection if you believe barriers
          won't be touched
        </li>
        <li>
          <strong>Structured products:</strong> Building blocks for more complex payoffs
        </li>
        <li>
          <strong>Volatility plays:</strong> Double knock-outs are essentially short volatility
        </li>
      </ul>

      <Callout type="info" title="Corridor Variance Swaps">
        <p>
          A corridor variance swap only accrues variance while the underlying is within
          a corridor—it's economically similar to a series of double knock-out options.
          This connection is used to hedge and price both instruments.
        </p>
      </Callout>
    </LessonLayout>
  );
}
