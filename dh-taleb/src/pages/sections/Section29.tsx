import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Compound and Chooser Options</h2>

      <p className="mb-4">
        Compound options are options on options—giving the holder the right to buy or sell
        another option. Chooser options let the holder decide later whether their option
        should be a call or a put. Both add layers of optionality and complexity.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Compound Options</h3>

      <Definition title="Compound Option">
        <p>
          An option that gives the holder the right to buy (call on call/put) or sell
          (put on call/put) another option at a specified price:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Call on Call:</strong> Right to buy a call option</li>
          <li><strong>Call on Put:</strong> Right to buy a put option</li>
          <li><strong>Put on Call:</strong> Right to sell a call option</li>
          <li><strong>Put on Put:</strong> Right to sell a put option</li>
        </ul>
      </Definition>

      <p className="mb-4">
        Compound options have two expiration dates and two strike prices:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <InlineMath>{`T_1`}</InlineMath>: First expiration (decision date for the compound)
        </li>
        <li>
          <InlineMath>{`K_1`}</InlineMath>: Strike of the compound (price to buy/sell the underlying option)
        </li>
        <li>
          <InlineMath>{`T_2`}</InlineMath>: Second expiration (expiration of the underlying option)
        </li>
        <li>
          <InlineMath>{`K_2`}</InlineMath>: Strike of the underlying option
        </li>
      </ul>

      <Example title="Call on Call">
        <p className="mb-3">
          A call on call with <InlineMath>{`T_1`}</InlineMath> = 3 months, <InlineMath>{`K_1`}</InlineMath> = $5,
          and underlying is a 6-month call struck at 100:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>At month 3: holder can pay $5 to receive the 6-month call</li>
          <li>If the 6-month call is worth {'>'} $5, exercise the compound</li>
          <li>If the 6-month call is worth {'<'} $5, let compound expire</li>
          <li>Effective: delayed premium payment with downside protection</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pricing Compound Options</h3>

      <Definition title="Call on Call Formula">
        <MathBlock>
          {`CC = S \\cdot M(a_1, b_1; \\rho) - K_2 e^{-rT_2} M(a_2, b_2; \\rho) - K_1 e^{-rT_1} N(a_2)`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`M(\\cdot)`}</InlineMath> is the bivariate normal CDF,
          <InlineMath>{`\\rho = \\sqrt{T_1/T_2}`}</InlineMath>, and <InlineMath>{`a_i, b_i`}</InlineMath> are
          functions of the parameters.
        </p>
      </Definition>

      <Callout type="info" title="Applications">
        <p>
          Compound options are used for:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Contingent hedging (hedge only if needed later)</li>
          <li>Project finance (option to invest subject to future approval)</li>
          <li>Installment options (split premium payment)</li>
          <li>Real options analysis (staged investment decisions)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Chooser Options</h3>

      <Definition title="Chooser Option">
        <p>
          An option that allows the holder to choose, at a specified time <InlineMath>{`T_1`}</InlineMath>,
          whether the option will be a call or a put with strike <InlineMath>{`K`}</InlineMath>
          expiring at <InlineMath>{`T_2`}</InlineMath>:
        </p>
        <MathBlock>
          {`V_{T_1} = \\max(C(S_{T_1}, K, T_2-T_1), P(S_{T_1}, K, T_2-T_1))`}
        </MathBlock>
      </Definition>

      <p className="mb-4">
        The holder benefits from uncertainty about direction while knowing they'll have
        an option in the end.
      </p>

      <Example title="Chooser Option Payoff">
        <p className="mb-3">
          Chooser with choose date in 1 month, K = 100, final expiry in 3 months:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>If S at month 1 = 110: Choose call (bullish continuation)</li>
          <li>If S at month 1 = 90: Choose put (bearish continuation)</li>
          <li>If S at month 1 = 100: Choose based on volatility view</li>
        </ul>
        <p className="mt-3 text-dark-400">
          The chooser is worth more than a single call or put because you get to see
          which is more valuable before committing.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pricing Chooser Options</h3>

      <p className="mb-4">
        Using put-call parity, a chooser can be decomposed:
      </p>

      <MathBlock>
        {`\\max(C, P) = C + \\max(0, P - C) = C + \\max(0, Ke^{-r(T_2-T_1)} - S_{T_1}e^{-q(T_2-T_1)})`}
      </MathBlock>

      <p className="mb-4">
        The second term is a put struck at <InlineMath>{`Ke^{-r(T_2-T_1)}`}</InlineMath>
        on a dividend-adjusted forward. So:
      </p>

      <Definition title="Chooser = Call + Put (different strikes)">
        <MathBlock>
          {`\\text{Chooser} = C(S, K, T_2) + P(S, Ke^{-(r-q)(T_2-T_1)}, T_1)`}
        </MathBlock>
        <p className="mt-2">
          The chooser equals a call to <InlineMath>{`T_2`}</InlineMath> plus a put to
          <InlineMath>{`T_1`}</InlineMath> with adjusted strike.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Greeks of Compound and Chooser Options</h3>

      <p className="mb-4">
        These options have complex Greek profiles:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Delta:</strong> Changes as both underlying and underlying option value change
        </li>
        <li>
          <strong>Gamma:</strong> Second-order effect through the underlying option
        </li>
        <li>
          <strong>Vega:</strong> Sensitivity to vol at multiple horizons
        </li>
        <li>
          <strong>Time decay:</strong> Two sources—compound decay and underlying option decay
        </li>
      </ul>

      <Callout type="warning" title="Model Complexity">
        <p>
          Compound and chooser options require assumptions about future volatility and
          correlations across time. The bivariate normal assumption is particularly strong.
          Real pricing often uses Monte Carlo or tree methods with volatility surfaces.
        </p>
      </Callout>
    </LessonLayout>
  );
}
