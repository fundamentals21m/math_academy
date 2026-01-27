import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Reflection Principle and Girsanov</h2>

      <p className="mb-4">
        Pricing barrier options requires understanding the probability of hitting barriers.
        Two mathematical tools are essential: the reflection principle (for hitting probabilities)
        and Girsanov's theorem (for changing probability measures).
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Reflection Principle</h3>

      <p className="mb-4">
        The reflection principle provides a elegant way to compute barrier-hitting probabilities
        for Brownian motion:
      </p>

      <Definition title="Reflection Principle">
        <p>
          For a standard Brownian motion <InlineMath>{`W_t`}</InlineMath> starting at 0, the probability
          of hitting level <InlineMath>{`b {'>} 0`}</InlineMath> before time <InlineMath>{`T`}</InlineMath>
          and ending below some level <InlineMath>a {'<'} b</InlineMath> equals:
        </p>
        <MathBlock>
          {`P(\\max_{0 \\leq t \\leq T} W_t \\geq b, W_T \\leq a) = P(W_T \\geq 2b - a)`}
        </MathBlock>
        <p className="mt-2">
          The paths that hit <InlineMath>{`b`}</InlineMath> and end at <InlineMath>{`a`}</InlineMath> can be
          "reflected" at <InlineMath>{`b`}</InlineMath> to paths ending at <InlineMath>{`2b - a`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Using Reflection">
        <p className="mb-3">
          What's the probability that Brownian motion hits 2 before time 1 and ends below 0?
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>By reflection: P(max ≥ 2, W₁ ≤ 0) = P(W₁ ≥ 4)</li>
          <li>W₁ ~ N(0,1), so this is 1 - Φ(4) ≈ 0.00003</li>
          <li>Very unlikely: to hit 2 and return below 0 in unit time</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Application to Barriers</h3>

      <p className="mb-4">
        The reflection principle allows us to compute knock-out probabilities:
      </p>

      <MathBlock>
        {`P(\\text{knock out}) = P\\left(\\min_{0 \\leq t \\leq T} S_t \\leq H\\right)`}
      </MathBlock>

      <p className="mb-4">
        Converting to log space and using reflection gives closed-form expressions for
        barrier option prices.
      </p>

      <Callout type="info" title="Reflection in Log Space">
        <p>
          Since <InlineMath>{`S_t = S_0 e^{(r-\\sigma^2/2)t + \\sigma W_t}`}</InlineMath>,
          hitting barriers is equivalent to Brownian motion hitting levels in log space.
          The reflection principle applies to the log price, not the price directly.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Girsanov's Theorem</h3>

      <p className="mb-4">
        Girsanov's theorem allows us to change the drift of a stochastic process by changing
        the probability measure:
      </p>

      <Definition title="Girsanov's Theorem (Simplified)">
        <p>
          If <InlineMath>{`W_t`}</InlineMath> is a Brownian motion under measure <InlineMath>{`P`}</InlineMath>,
          then under a new measure <InlineMath>{`Q`}</InlineMath> defined by:
        </p>
        <MathBlock>
          {`\\frac{dQ}{dP} = e^{-\\theta W_T - \\frac{1}{2}\\theta^2 T}`}
        </MathBlock>
        <p className="mt-2">
          the process <InlineMath>{`\\tilde{W}_t = W_t + \\theta t`}</InlineMath> is a Brownian
          motion under <InlineMath>{`Q`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Risk-Neutral Pricing</h3>

      <p className="mb-4">
        Girsanov's theorem is the mathematical foundation of risk-neutral pricing:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          Real-world: Stock has drift <InlineMath>{`\\mu`}</InlineMath> (expected return)
        </li>
        <li>
          Risk-neutral: Stock has drift <InlineMath>{`r`}</InlineMath> (risk-free rate)
        </li>
        <li>
          Girsanov connects these two perspectives
        </li>
        <li>
          Option prices are expectations under the risk-neutral measure
        </li>
      </ul>

      <MathBlock>
        {`V_0 = e^{-rT} E^Q[\\text{Payoff}(S_T)]`}
      </MathBlock>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">For Barrier Options</h3>

      <p className="mb-4">
        Combining reflection and Girsanov yields barrier option formulas:
      </p>

      <Definition title="Down-and-Out Call (No Rebate)">
        <MathBlock>
          {`C_{\\text{DO}} = SN(x_1) - Ke^{-rT}N(x_1 - \\sigma\\sqrt{T}) - S\\left(\\frac{H}{S}\\right)^{2\\lambda}\\left[N(y_1) - N(y_2)\\right]`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`x_1, y_1, y_2, \\lambda`}</InlineMath> are functions of
          <InlineMath>{`S, K, H, r, \\sigma, T`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Implications</h3>

      <Example title="Why the Math Matters">
        <p className="mb-3">Understanding these tools helps traders:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Verify pricing:</strong> Check quotes against analytical formulas
          </li>
          <li>
            <strong>Understand Greeks:</strong> The math reveals why Greeks behave as they do
          </li>
          <li>
            <strong>Stress test:</strong> Know how parameters affect barrier-hitting probability
          </li>
          <li>
            <strong>Build intuition:</strong> Reflection principle gives geometric intuition
          </li>
        </ul>
      </Example>

      <Callout type="warning" title="Model Assumptions">
        <p>
          These elegant formulas assume:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Continuous price paths (no gaps)</li>
          <li>Constant volatility</li>
          <li>Continuous barrier monitoring</li>
        </ul>
        <p className="mt-2">
          Real barriers often have discrete monitoring, and prices do gap. The formulas
          are starting points, not final answers.
        </p>
      </Callout>

      <p className="mb-4">
        In the next section, we'll examine the practical challenges of managing barrier
        option risk in real markets.
      </p>
    </LessonLayout>
  );
}
