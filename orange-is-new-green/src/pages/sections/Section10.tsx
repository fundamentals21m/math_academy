import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Definition } from '../../components/common/ContentBlocks';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        There's a critical question: wouldn't it be nice if we could build a
        Bitcoin-based deposit facility <strong className="text-amber-400">
        directly on-chain</strong> so that no one needs to be trusted with
        custody of customer funds? It turns out we can—using Discreet Log Contracts.
      </p>

      {/* Section 1: The Custody Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Custody Problem</h2>

      <p className="my-4">
        The strategies we've discussed require holding Bitcoin on a centralized
        exchange. This creates counterparty risk—as the FTX debacle demonstrated,
        even major exchanges can fail, taking customer funds with them.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
          <h4 className="font-semibold text-red-400 mb-2">Centralized Exchange Risks</h4>
          <ul className="text-sm text-dark-300 space-y-2">
            <li>• Exchange insolvency (FTX, Mt. Gox)</li>
            <li>• Regulatory seizure</li>
            <li>• Hacking and theft</li>
            <li>• Counterparty default</li>
          </ul>
        </div>
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
          <h4 className="font-semibold text-green-400 mb-2">On-Chain Solution Goals</h4>
          <ul className="text-sm text-dark-300 space-y-2">
            <li>• Self-custody of Bitcoin</li>
            <li>• No trusted third party</li>
            <li>• Cryptographic enforcement</li>
            <li>• Permissionless operation</li>
          </ul>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The ideal:</strong> Xi Jinping will not entrust CZ, Brian
          Armstrong, or indeed BitMEX with the CCP's funds—especially after
          FTX. For such entities, only a non-custodial solution will suffice.
        </p>
      </Callout>

      {/* Section 2: DLC Introduction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. What Are Discreet Log Contracts?</h2>

      <Definition title="Discreet Log Contract (DLC)">
        An off-chain agreement between two parties where on-chain enforcement
        of payment is possible upon the fulfillment of specific conditions.
        DLCs allow conditional payments without revealing contract terms on-chain.
      </Definition>

      <p className="my-4">
        If you're familiar with the Lightning Network's security model, DLCs
        should feel intuitive—they share structural similarities:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">2-of-2 Multisig Funding</p>
            <p className="text-sm text-dark-400 mt-1">
              Both parties fund a shared address requiring both signatures to spend
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Pre-Signed Transactions</p>
            <p className="text-sm text-dark-400 mt-1">
              Parties exchange signed transactions off-chain for various outcomes
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Unilateral Enforcement</p>
            <p className="text-sm text-dark-400 mt-1">
              Either party can claim their rightful payout even if the other refuses to cooperate
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: The Oracle Role */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Oracle's Role</h2>

      <p className="my-4">
        Because payment depends on an external event (like BTCUSD price), a third
        party called an <strong className="text-amber-400">oracle</strong> provides
        the relevant information for contract settlement.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">How Oracle Attestation Works</h4>
        <p className="text-dark-200 mb-4">
          In DLCs, signatures are encrypted in a verifiable way such that they
          can only be decrypted using a certain oracle attestation.
        </p>
        <p className="text-dark-400 text-sm">
          This allows either party to use their key along with the oracle's
          attestation to publish a valid spending transaction—without requiring
          cooperation from the counterparty.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>Key insight:</strong> The oracle never sees the contract terms
          or even knows the contract exists. They simply publish price data.
          Multiple oracles can be used for redundancy.
        </p>
      </Callout>

      {/* Section 4: A Binary Example */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Example: A Binary Bet</h2>

      <p className="my-4">
        Let's illustrate with a simple binary outcome—a political bet:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Setup</h4>
        <p className="text-dark-200 mb-4">
          I bet 1 BTC against Allen's 1 BTC that Candidate X will win an election.
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400">1.</span>
            <span>We create a 2-of-2 multisig and each deposit 1 BTC (total: 2 BTC)</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400">2.</span>
            <span>We construct two pre-signed transactions (Contract Execution Transactions, or CETs):</span>
          </div>
          <div className="ml-8 space-y-2 text-sm text-dark-300">
            <p>• <strong>CET A:</strong> Sends 2 BTC to me (if Candidate X wins)</p>
            <p>• <strong>CET B:</strong> Sends 2 BTC to Allen (if Candidate X loses)</p>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400">3.</span>
            <span>Allen's signature on CET A is encrypted—I need the oracle's "X won" attestation to decrypt it</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400">4.</span>
            <span>My signature on CET B is encrypted—Allen needs the oracle's "X lost" attestation to decrypt it</span>
          </div>
        </div>
      </div>

      <p className="my-4">
        When the outcome is known:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-green-900/20 rounded-lg p-4 border border-green-700/50">
          <h5 className="font-semibold text-green-400 mb-2">If X Wins (I win)</h5>
          <p className="text-sm text-dark-300">
            The oracle publishes "X won." I use this attestation to decrypt
            Allen's signature on CET A, making it valid. I broadcast it and
            receive 2 BTC.
          </p>
        </div>
        <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/50">
          <h5 className="font-semibold text-red-400 mb-2">If X Loses (Allen wins)</h5>
          <p className="text-sm text-dark-300">
            The oracle publishes "X lost." Allen uses this attestation to
            decrypt my signature on CET B. He broadcasts it and receives 2 BTC.
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Discreet Log Contracts</strong> enable off-chain agreements
              with on-chain enforcement.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              They use <strong>2-of-2 multisig</strong> and pre-signed transactions
              similar to Lightning Network.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Oracles</strong> provide data that unlocks the correct
              payout transaction without knowing contract details.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Either party can <strong>unilaterally enforce</strong> their
              rightful payout using the oracle attestation.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
