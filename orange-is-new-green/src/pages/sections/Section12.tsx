import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        DLCs alter the clearing mechanism rather than the trading experience
        itself. However, trade-offs exist—with gains in one aspect balanced
        by losses in another.
      </p>

      {/* Section 1: Advantages */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. DLC Advantages</h2>

      <div className="space-y-4 my-6">
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
          <h4 className="font-semibold text-green-400 mb-3">Privacy</h4>
          <p className="text-dark-300 mb-3">
            CETs generated off-chain coupled with indistinguishable on-chain DLC
            footprints ensure robust privacy.
          </p>
          <p className="text-dark-400 text-sm">
            Even the oracle remains unaware of contract terms or even the contract's
            existence. The oracle simply publishes price data; it doesn't know
            who is using it or for what purpose.
          </p>
        </div>

        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
          <h4 className="font-semibold text-green-400 mb-3">Scalability</h4>
          <p className="text-dark-300 mb-3">
            Since only one CET is validated on-chain (the winning outcome),
            DLCs remain scalable regardless of how many outcome possibilities exist.
          </p>
          <p className="text-dark-400 text-sm">
            This avoids the transaction bloating prevalent in smart-contract-based
            DeFi on platforms like Ethereum, where every state change requires
            on-chain computation.
          </p>
        </div>

        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
          <h4 className="font-semibold text-green-400 mb-3">Self-Custody</h4>
          <p className="text-dark-300 mb-3">
            DLCs don't require depositing funds to a centralized exchange.
            Your Bitcoin remains in a multisig that you co-control.
          </p>
          <p className="text-dark-400 text-sm">
            No FTX-style rehypothecation risk—your funds can't be misused by
            an exchange for their own trading operations.
          </p>
        </div>
      </div>

      {/* Section 2: Disadvantages */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. DLC Disadvantages</h2>

      <div className="space-y-4 my-6">
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
          <h4 className="font-semibold text-red-400 mb-3">Capital Inefficiency</h4>
          <p className="text-dark-300 mb-3">
            Both parties must send sufficient collateral in the funding transaction
            to cover <em>all</em> contract outcomes.
          </p>
          <p className="text-dark-400 text-sm">
            Traditional derivatives markets employ capital buffers in line with
            net positioning rather than total open interest, leveraging economies
            of scale. DLCs can't do this.
          </p>
        </div>

        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
          <h4 className="font-semibold text-red-400 mb-3">Transferability Challenges</h4>
          <p className="text-dark-300 mb-3">
            Current solutions for transferring an on-chain DLC from one party to
            another are limited.
          </p>
          <p className="text-dark-400 text-sm">
            This complicates rolling positions, as it may require posting new
            collateral in a fresh DLC while still having collateral locked until
            expiry in the older DLC.
          </p>
        </div>

        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
          <h4 className="font-semibold text-red-400 mb-3">Transaction Costs</h4>
          <p className="text-dark-300 mb-3">
            DLC position rolling involves publishing a CET at expiry and a new
            funding transaction—two on-chain transactions.
          </p>
          <p className="text-dark-400 text-sm">
            In high-fee environments (especially during market stress when rolling
            is most urgent), these costs can significantly reduce net profits.
          </p>
        </div>
      </div>

      {/* Section 3: The Trust Question */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Are DLCs Truly Trustless?</h2>

      <p className="my-4">
        Practically speaking, DLCs are not fully trustless—contract enforcement
        still depends on the oracle. However, this trust can be minimized:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Oracle Risk Mitigations</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Multiple Oracles:</strong> Choose multiple oracles during
              setup so payout can be claimed even if some fail to attest
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Refund Transactions:</strong> Parties exchange pre-signed
              refund transactions with timelocks, enabling fund recovery if all
              oracles fail
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Reputation Systems:</strong> Use well-established oracles
              with track records and economic stakes in honest behavior
            </span>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The comparison:</strong> While DLCs require trust in oracles,
          centralized exchanges require trust in the exchange operator, custodian,
          regulators, and the banking system. The oracle trust is more limited
          and transparent.
        </p>
      </Callout>

      {/* Section 4: Summary Comparison */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. DLCs vs. Centralized Exchanges</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 px-3 text-dark-400">Factor</th>
              <th className="text-center py-2 px-3 text-amber-400">DLCs</th>
              <th className="text-center py-2 px-3 text-amber-400">CEX</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">Custody</td>
              <td className="text-center py-2 px-3 text-green-400">Self</td>
              <td className="text-center py-2 px-3 text-red-400">Exchange</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">Privacy</td>
              <td className="text-center py-2 px-3 text-green-400">High</td>
              <td className="text-center py-2 px-3 text-red-400">Low (KYC)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">Capital Efficiency</td>
              <td className="text-center py-2 px-3 text-red-400">Low</td>
              <td className="text-center py-2 px-3 text-green-400">High</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">Liquidity</td>
              <td className="text-center py-2 px-3 text-red-400">Limited</td>
              <td className="text-center py-2 px-3 text-green-400">Deep</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">Counterparty Risk</td>
              <td className="text-center py-2 px-3 text-green-400">Oracle only</td>
              <td className="text-center py-2 px-3 text-red-400">Exchange + banking</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3">Rolling Costs</td>
              <td className="text-center py-2 px-3 text-red-400">Higher</td>
              <td className="text-center py-2 px-3 text-green-400">Lower</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              DLCs offer <strong>privacy, scalability, and self-custody</strong>
              advantages over centralized exchanges.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Capital inefficiency</strong> and <strong>transferability
              challenges</strong> are significant drawbacks.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              DLCs still require <strong>oracle trust</strong>, but this is
              more limited than exchange trust.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The choice between DLCs and CEX involves <strong>trade-offs</strong>
              based on user priorities.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
