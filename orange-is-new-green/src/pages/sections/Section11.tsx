import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Definition } from '../../components/common/ContentBlocks';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        A binary bet is simple, but BTCUSD futures are more complex—the price
        could land anywhere. How do DLCs handle this <strong className="text-amber-400">
        non-binary outcome space</strong>?
      </p>

      {/* Section 1: The Challenge */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Challenge of Continuous Outcomes</h2>

      <p className="my-4">
        In a BTCUSD future contract, complexities arise because the outcome
        space is no longer binary. Bitcoin's value could fluctuate anywhere
        between $0 and infinity.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Mathematical Reality</h4>
        <p className="text-dark-200 mb-4">
          Even within a bounded range like $20,000 to $40,000, there exists an
          infinite set of real numbers. We can't create infinite CETs.
        </p>
        <p className="text-dark-400 text-sm">
          Theoretically, the outcome space is infinite, but in practice, hedging
          exposure over a defined range meets practical requirements.
        </p>
      </div>

      {/* Section 2: Discretization */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Discretizing the Outcome Space</h2>

      <p className="my-4">
        The solution is to <strong className="text-amber-400">discretize</strong>
        the continuous outcome space—creating CETs for specific price intervals.
      </p>

      <Definition title="Discretization">
        Breaking a continuous range into discrete steps. For DLCs, this means
        creating one CET per price interval (e.g., one CET for every $10 price
        increment).
      </Definition>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">Ex</span>
          <div>
            <p className="font-semibold text-dark-100">Example: $20k-$40k Range with $10 Steps</p>
            <p className="text-sm text-dark-400 mt-1">
              ($40,000 - $20,000) / $10 = <strong>2,000 CETs</strong>
            </p>
            <p className="text-sm text-dark-400 mt-1">
              Each CET specifies the payout if the price falls within that $10 range
            </p>
          </div>
        </div>
      </div>

      <p className="my-4">
        The level of accuracy—whether $1,000 or $5 increments—can be chosen
        based on preference. More accuracy means more CETs, which means more
        data to store until contract expiration.
      </p>

      {/* Section 3: CETs in Practice */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Contract Execution Transactions (CETs)</h2>

      <p className="my-4">
        For a perpetual-style DLC swap, you'd need to create a CET for each
        price interval. At contract expiry:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Settlement Process</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400 font-bold">1.</span>
            <span>Oracle publishes the BTCUSD price at expiry (e.g., $34,560)</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400 font-bold">2.</span>
            <span>This falls in the $34,550-$34,560 interval</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400 font-bold">3.</span>
            <span>The attestation for this interval unlocks the corresponding CET</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400 font-bold">4.</span>
            <span>Either party can use the attestation to broadcast the CET and claim funds</span>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>Compression trick:</strong> Efficient encoding allows
          compression of this data, sidestepping the need for excessive local
          storage. Neither party can derive a valid CET without first knowing
          the corresponding oracle attestation.
        </p>
      </Callout>

      {/* Section 4: Rolling Positions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Rolling Positions</h2>

      <p className="my-4">
        To maintain a continuous hedge (like in perpetual swaps), you need to
        "roll" positions by entering new DLCs as old ones expire:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h5 className="font-semibold text-amber-400 mb-2">Cooperative Close</h5>
          <p className="text-sm text-dark-300">
            If both parties agree on the result, they can sign a new transaction
            together without waiting for oracle attestation, then immediately
            fund a new DLC.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h5 className="font-semibold text-amber-400 mb-2">Unilateral Close</h5>
          <p className="text-sm text-dark-300">
            If counterparty is uncooperative, use the oracle attestation to
            enforce the CET, then open a new DLC with a different counterparty.
          </p>
        </div>
      </div>

      {/* Section 5: Practical Considerations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Practical Considerations</h2>

      <p className="my-4">
        DLCs for BTCUSD futures involve several practical trade-offs:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400">📊</span>
          <div>
            <p className="font-semibold text-dark-100">Range Selection</p>
            <p className="text-sm text-dark-400 mt-1">
              Choose bounds wide enough to cover likely price movements but
              narrow enough to keep CET count manageable
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400">🎯</span>
          <div>
            <p className="font-semibold text-dark-100">Precision Trade-off</p>
            <p className="text-sm text-dark-400 mt-1">
              Higher precision = more CETs = more storage but more accurate settlement
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400">⏰</span>
          <div>
            <p className="font-semibold text-dark-100">Duration Planning</p>
            <p className="text-sm text-dark-400 mt-1">
              Longer contracts = more range uncertainty; shorter = more frequent rolling
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Non-binary outcomes require <strong>discretizing</strong> the
              price range into intervals.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Each price interval gets its own <strong>CET</strong> specifying
              the payout for that range.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The oracle attestation <strong>unlocks only the correct CET</strong>
              based on the actual price.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Continuous hedging requires <strong>rolling positions</strong>
              into new DLCs at expiry.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
