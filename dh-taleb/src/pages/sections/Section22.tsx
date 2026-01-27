import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">European Binary Options</h2>

      <p className="mb-4">
        Binary options (also called digital options) have discontinuous payoffs—they pay
        a fixed amount if a condition is met, zero otherwise. This all-or-nothing structure
        creates unique hedging challenges.
      </p>

      <Definition title="European Binary Option">
        <p>
          An option that pays a fixed amount if the underlying finishes above (call) or
          below (put) the strike at expiration:
        </p>
        <MathBlock>
          {`\\text{Binary Call Payoff} = Q \\cdot \\mathbf{1}_{S_T > K}`}
        </MathBlock>
        <MathBlock>
          {`\\text{Binary Put Payoff} = Q \\cdot \\mathbf{1}_{S_T < K}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`Q`}</InlineMath> is the fixed payout and <InlineMath>{`\\mathbf{1}`}</InlineMath>
          is the indicator function.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of European Binaries</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-emerald-400 font-bold">Cash-or-Nothing</p>
            <p className="text-sm text-dark-300">
              Pays a fixed cash amount <InlineMath>{`Q`}</InlineMath> if ITM at expiry.
              Most common type.
            </p>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Asset-or-Nothing</p>
            <p className="text-sm text-dark-300">
              Pays the asset value <InlineMath>{`S_T`}</InlineMath> if ITM at expiry.
              Payoff depends on where exactly the underlying finishes.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pricing European Binaries</h3>

      <p className="mb-4">
        Under Black-Scholes, binary option prices have closed-form solutions:
      </p>

      <Definition title="Cash-or-Nothing Call Price">
        <MathBlock>
          {`C_{\\text{binary}} = Q \\cdot e^{-rT} \\cdot N(d_2)`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`N(d_2)`}</InlineMath> is the risk-neutral probability of finishing ITM.
        </p>
      </Definition>

      <Definition title="Asset-or-Nothing Call Price">
        <MathBlock>
          {`C_{\\text{asset}} = S \\cdot N(d_1)`}
        </MathBlock>
        <p className="mt-2">
          This is exactly the first term of the Black-Scholes formula!
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Greeks of Binaries</h3>

      <p className="mb-4">
        Binary option Greeks behave very differently from vanilla options:
      </p>

      <Example title="Binary Delta Behavior">
        <p className="mb-3">Cash-or-nothing call with K = 100, Q = $100, 1 day to expiry:</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-600">
              <th className="pb-2 text-emerald-400">Spot</th>
              <th className="pb-2 text-emerald-400">Price</th>
              <th className="pb-2 text-emerald-400">Delta</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">95</td>
              <td className="py-2">$15</td>
              <td className="py-2">15</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">99</td>
              <td className="py-2">$45</td>
              <td className="py-2">50</td>
            </tr>
            <tr className="border-b border-dark-700 text-rose-400 font-bold">
              <td className="py-2">100</td>
              <td className="py-2">$50</td>
              <td className="py-2">200+</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">101</td>
              <td className="py-2">$55</td>
              <td className="py-2">50</td>
            </tr>
            <tr>
              <td className="py-2">105</td>
              <td className="py-2">$85</td>
              <td className="py-2">15</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          At the strike near expiry, delta explodes to infinity!
        </p>
      </Example>

      <Callout type="warning" title="The Hedging Nightmare">
        <p>
          Binary options have several problematic features for hedgers:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Delta explodes near strike at expiry</li>
          <li>Gamma can be extremely negative or positive</li>
          <li>Hedging costs can exceed the option's value</li>
          <li>Small gaps around strike cause huge P&L swings</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Replicating Binaries</h3>

      <p className="mb-4">
        A binary can be approximated by a tight call spread:
      </p>

      <MathBlock>
        {`\\text{Binary} \\approx \\frac{C(K) - C(K + \\epsilon)}{\\epsilon}`}
      </MathBlock>

      <p className="mb-4">
        As <InlineMath>{`\\epsilon \\to 0`}</InlineMath>, the call spread converges to the binary.
        In practice, traders hedge binaries using vanilla spreads rather than trying to
        delta-hedge directly.
      </p>

      <Example title="Binary Replication">
        <p className="mb-3">
          Replicate a $100 binary call struck at 100 using a call spread:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Buy 200 calls struck at 99.50</li>
          <li>Sell 200 calls struck at 100.50</li>
          <li>Max payoff: 200 × $0.50 = $100 (if S {'>'} 100.50)</li>
          <li>Zero payoff: if S {'<'} 99.50</li>
          <li>Partial payoff: if 99.50 {'<'} S {'<'} 100.50</li>
        </ul>
        <p className="mt-3 text-dark-400">
          This "spread replication" smooths the payoff and makes hedging more manageable.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pin Risk in Binaries</h3>

      <p className="mb-4">
        The extreme pin risk of binaries makes them particularly dangerous near expiry:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>If spot = strike at expiry, the payoff is undefined (technically)</li>
        <li>Small price movements create 100% swings in value</li>
        <li>Market makers often refuse to trade binaries in final hours</li>
        <li>Settlement rules become crucial (is it $0 or $100?)</li>
      </ul>

      <Callout type="info" title="Practical Approach">
        <p>
          In practice, binary options are often:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Hedged using vanilla spreads, not delta hedging</li>
          <li>Priced with a wider spread to account for hedging difficulty</li>
          <li>Unwound before the final day when possible</li>
          <li>Subject to position limits due to explosive Greeks</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
