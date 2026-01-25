import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section89() {
  return (
    <LessonLayout sectionId={89}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Statechains</h2>

      <p className="mb-4">
        Statechains enable off-chain transfer of entire UTXOs by transferring private
        key control rather than creating on-chain transactions. This provides unique
        privacy and efficiency properties.
      </p>

      <Callout type="info" title="UTXO Transfer, Not Transactions">
        <p>
          Unlike Lightning which updates channel balances, statechains transfer
          ownership of whole UTXOs. The coin doesn't move on-chain—the right to
          spend it does.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Core Concept</h3>

      <Definition title="Statechain">
        <p>
          A chain of off-chain ownership transfers for a Bitcoin UTXO. Each transfer
          is a cryptographic handoff of spending authority from current owner to new
          owner, facilitated by a semi-trusted "statechain entity."
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Statechain ownership chain:</p>
        <p className="text-dark-300">UTXO created by Alice (on-chain)</p>
        <p className="text-dark-300 ml-4">↓ Transfer to Bob (off-chain)</p>
        <p className="text-dark-300 ml-4">↓ Transfer to Carol (off-chain)</p>
        <p className="text-dark-300 ml-4">↓ Transfer to Dave (off-chain)</p>
        <p className="text-dark-300">Dave withdraws (on-chain)</p>
        <p className="text-dark-500 mt-3">
          Only 2 on-chain transactions, unlimited off-chain transfers
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How It Works</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <div>
              <p className="text-dark-300 font-bold">Deposit</p>
              <p className="text-sm text-dark-400">
                Alice creates UTXO spendable by 2-of-2: Alice + Statechain Entity (SE)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <div>
              <p className="text-dark-300 font-bold">Backup Transaction</p>
              <p className="text-sm text-dark-400">
                SE co-signs timelocked backup tx returning funds to Alice
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <div>
              <p className="text-dark-300 font-bold">Transfer</p>
              <p className="text-sm text-dark-400">
                Alice and SE jointly transfer key share to Bob; SE deletes Alice's share
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <div>
              <p className="text-dark-300 font-bold">New Backup</p>
              <p className="text-sm text-dark-400">
                Bob receives new backup tx with shorter timelock than Alice's
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Statechain Entity Role</h3>

      <Example title="Trust Model">
        <div className="space-y-3 text-dark-300">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold mb-2">SE Can:</p>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Refuse to cooperate (DoS, funds stuck until backup timelock)</li>
              <li>Collude with previous owner to steal</li>
            </ul>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-emerald-400 font-bold mb-2">SE Cannot:</p>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Steal funds alone (needs user's key share)</li>
              <li>Prevent withdrawal via backup tx</li>
              <li>Learn transaction amounts (blind signatures)</li>
            </ul>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Decreasing Timelocks</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Backup transaction timelocks:</p>
        <p className="text-dark-300">Alice's backup: locktime block 700,000</p>
        <p className="text-dark-300">Bob's backup: locktime block 699,000</p>
        <p className="text-dark-300">Carol's backup: locktime block 698,000</p>
        <p className="text-dark-400 mt-3 mb-2"># Priority:</p>
        <p className="text-amber-400">Carol's tx valid first → she can claim before Bob/Alice</p>
        <p className="text-dark-500 mt-2">
          Latest owner always has priority
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Benefits</h3>

      <Callout type="info" title="On-Chain Privacy">
        <ul className="list-disc list-inside space-y-1">
          <li>Off-chain transfers invisible on blockchain</li>
          <li>UTXO appears static (no change addresses)</li>
          <li>Breaks common chain analysis heuristics</li>
          <li>Blind signatures hide amounts from SE</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Comparison with Lightning</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Aspect</th>
              <th className="text-left py-3 text-dark-300">Lightning</th>
              <th className="text-left py-3 text-dark-300">Statechains</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Transfer size</td>
              <td>Any amount up to capacity</td>
              <td className="text-amber-400">Fixed UTXO amounts</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Liquidity</td>
              <td>Locked in channels</td>
              <td className="text-emerald-400">UTXO fully transferable</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Routing</td>
              <td>Multi-hop HTLCs</td>
              <td className="text-emerald-400">Direct transfer</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Online requirement</td>
              <td>Must monitor channels</td>
              <td className="text-emerald-400">Only for transfers</td>
            </tr>
            <tr>
              <td className="py-3">Trust</td>
              <td className="text-emerald-400">Trustless</td>
              <td className="text-amber-400">Trust-minimized (SE)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Coin Swaps</p>
          <p className="text-sm text-dark-300">
            Exchange different UTXO denominations efficiently off-chain.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Lightning Channel Purchase</p>
          <p className="text-sm text-dark-300">
            Buy pre-funded Lightning channels via statechain transfer.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Privacy Mixing</p>
          <p className="text-sm text-dark-300">
            Multiple statechain transfers obscure ownership history.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mercury Layer</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">
          Mercury Layer is the primary statechain implementation:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Open-source statechain entity software</li>
          <li>Blind Schnorr signatures for privacy</li>
          <li>Fixed denominations (like cash)</li>
          <li>Atomic swaps between statechains</li>
        </ul>
      </div>

      <Callout type="success" title="Complementary Scaling">
        <p>
          Statechains provide a unique scaling approach complementary to Lightning.
          While not fully trustless, the trust-minimized model enables UTXO
          transfers with excellent privacy properties and no routing complexity—
          making it ideal for specific use cases like coin swaps and cold storage
          transfers.
        </p>
      </Callout>
    </LessonLayout>
  );
}
