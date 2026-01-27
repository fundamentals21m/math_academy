import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Options and Contingent Claims</h2>

      <p className="mb-4">
        An option gives its holder the <em>right but not the obligation</em> to buy or sell
        an underlying asset at a specified price. This asymmetry—unlimited upside with limited
        downside—makes options uniquely powerful and uniquely challenging to price and hedge.
      </p>

      <Definition title="Call Option">
        <p>
          A call option gives the holder the right to <strong>buy</strong> the underlying
          at strike price <InlineMath>{`K`}</InlineMath> on or before expiration <InlineMath>{`T`}</InlineMath>.
        </p>
        <MathBlock>
          {`\\text{Call Payoff} = \\max(S_T - K, 0) = (S_T - K)^+`}
        </MathBlock>
      </Definition>

      <Definition title="Put Option">
        <p>
          A put option gives the holder the right to <strong>sell</strong> the underlying
          at strike price <InlineMath>{`K`}</InlineMath> on or before expiration <InlineMath>{`T`}</InlineMath>.
        </p>
        <MathBlock>
          {`\\text{Put Payoff} = \\max(K - S_T, 0) = (K - S_T)^+`}
        </MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Payoff Diagrams</h3>

      <p className="mb-4">
        Understanding options begins with their payoff diagrams. These hockey-stick shapes
        illustrate the asymmetric nature of option payoffs:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-emerald-400 font-bold mb-3">Long Call</p>
            <ul className="text-sm text-dark-300 space-y-1">
              <li>Maximum loss: Premium paid</li>
              <li>Maximum gain: Unlimited</li>
              <li>Breakeven: K + Premium</li>
              <li>Outlook: Bullish</li>
            </ul>
          </div>
          <div>
            <p className="text-emerald-400 font-bold mb-3">Long Put</p>
            <ul className="text-sm text-dark-300 space-y-1">
              <li>Maximum loss: Premium paid</li>
              <li>Maximum gain: K - Premium</li>
              <li>Breakeven: K - Premium</li>
              <li>Outlook: Bearish</li>
            </ul>
          </div>
          <div>
            <p className="text-rose-400 font-bold mb-3">Short Call</p>
            <ul className="text-sm text-dark-300 space-y-1">
              <li>Maximum gain: Premium received</li>
              <li>Maximum loss: Unlimited</li>
              <li>Breakeven: K + Premium</li>
              <li>Outlook: Neutral/Bearish</li>
            </ul>
          </div>
          <div>
            <p className="text-rose-400 font-bold mb-3">Short Put</p>
            <ul className="text-sm text-dark-300 space-y-1">
              <li>Maximum gain: Premium received</li>
              <li>Maximum loss: K - Premium</li>
              <li>Breakeven: K - Premium</li>
              <li>Outlook: Neutral/Bullish</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Moneyness</h3>

      <p className="mb-4">
        Options are classified by their relationship to the current underlying price:
      </p>

      <Definition title="Moneyness">
        <ul className="space-y-2">
          <li>
            <strong>In-the-Money (ITM):</strong> Option has intrinsic value
            <ul className="ml-4 text-sm text-dark-400">
              <li>Call: <InlineMath>{`S {'>} K`}</InlineMath></li>
              <li>Put: <InlineMath>S {'<'} K</InlineMath></li>
            </ul>
          </li>
          <li>
            <strong>At-the-Money (ATM):</strong> Strike equals underlying price
            <ul className="ml-4 text-sm text-dark-400">
              <li><InlineMath>{`S \\approx K`}</InlineMath></li>
            </ul>
          </li>
          <li>
            <strong>Out-of-the-Money (OTM):</strong> Option has no intrinsic value
            <ul className="ml-4 text-sm text-dark-400">
              <li>Call: <InlineMath>S {'<'} K</InlineMath></li>
              <li>Put: <InlineMath>{`S {'>} K`}</InlineMath></li>
            </ul>
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Intrinsic vs. Time Value</h3>

      <p className="mb-4">
        Every option premium can be decomposed into two components:
      </p>

      <MathBlock>
        {`\\text{Premium} = \\text{Intrinsic Value} + \\text{Time Value}`}
      </MathBlock>

      <Example title="Decomposing Option Premium">
        <p className="mb-3">
          Stock trading at $105. A call with strike $100 trades at $8:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Intrinsic Value:</strong> <InlineMath>{`\\max(105 - 100, 0) = \\$5`}</InlineMath>
          </li>
          <li>
            <strong>Time Value:</strong> <InlineMath>{`\\$8 - \\$5 = \\$3`}</InlineMath>
          </li>
        </ul>
        <p className="mt-3 text-dark-400">
          Time value represents the possibility that the option becomes more valuable before
          expiration. It always decays to zero at expiry.
        </p>
      </Example>

      <Callout type="info" title="Time Value Properties">
        <ul className="list-disc list-inside space-y-1">
          <li>Maximum at ATM strikes</li>
          <li>Decays faster as expiration approaches</li>
          <li>Higher with more volatility</li>
          <li>Never negative for vanilla options</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">European vs. American Options</h3>

      <p className="mb-4">
        The exercise style significantly affects option pricing and hedging:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">European</p>
          <p className="text-sm text-dark-300">
            Can only be exercised at expiration. Simpler to price and hedge.
            Most index options are European.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">American</p>
          <p className="text-sm text-dark-300">
            Can be exercised any time before expiration. Worth at least as much
            as European. Most equity options are American.
          </p>
        </div>
      </div>

      <Callout type="warning" title="Early Exercise">
        <p>
          American options on non-dividend-paying stocks are rarely exercised early (for calls)
          because time value is lost. But American puts and calls on dividend-paying stocks
          may be exercised early, creating additional hedging complexity.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Contingent Claims</h3>

      <p className="mb-4">
        Options are the simplest members of a broader family called <strong>contingent claims</strong>—
        instruments whose payoff depends on ("is contingent upon") some future event or price.
      </p>

      <Definition title="Contingent Claim">
        <p>
          A financial instrument with payoff <InlineMath>{`V_T`}</InlineMath> that depends on the
          path or final value of one or more underlying variables:
        </p>
        <MathBlock>
          {`V_T = g(S_{t_1}, S_{t_2}, ..., S_T)`}
        </MathBlock>
        <p className="mt-2">
          Options are contingent claims where the payoff depends only on the final value
          <InlineMath>{`S_T`}</InlineMath>. More exotic instruments may depend on the entire path.
        </p>
      </Definition>

      <p className="mb-4">
        In later sections, we'll explore exotic contingent claims: barriers, lookbacks,
        Asians, and more. But first, we must master the vanilla building blocks.
      </p>
    </LessonLayout>
  );
}
