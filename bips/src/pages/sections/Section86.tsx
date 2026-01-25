import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section86() {
  return (
    <LessonLayout sectionId={86}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-118 Deep Dive: Eltoo Enabling</h2>

      <p className="mb-4">
        BIP-118 (SIGHASH_ANYPREVOUT) enables Eltoo, a simplified channel construction that
        eliminates the need for complex revocation mechanisms. This section explores how
        APO transforms payment channels.
      </p>

      <Callout type="info" title="Eltoo (L2)">
        <p>
          Eltoo (pronounced "L2") is a payment channel protocol that uses ANYPREVOUT
          to create update transactions that can spend any prior state, dramatically
          simplifying channel management.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Current Lightning Complexity</h3>

      <p className="mb-4">
        Current Lightning channels (LN-Penalty) have significant complexity:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Asymmetric states:</strong> Each party holds different commitment tx
          </li>
          <li>
            <strong>Revocation storage:</strong> Must store all old revocation secrets
          </li>
          <li>
            <strong>Watchtower complexity:</strong> Watchtowers need breach data for each state
          </li>
          <li>
            <strong>Penalty transactions:</strong> Complex scripts for breach response
          </li>
          <li>
            <strong>State growth:</strong> More state = more data to manage
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Eltoo Architecture</h3>

      <Definition title="Eltoo Update Mechanism">
        <p>
          A channel update protocol where each new state can spend any previous state,
          creating a simple "latest state wins" mechanism. Uses ANYPREVOUT signatures
          to achieve input-agnostic spending.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Eltoo transaction structure:</p>
        <p className="text-dark-300">Funding Tx → Update Tx₁ → Update Tx₂ → ... → Settlement</p>
        <p className="text-dark-400 mt-3 mb-2"># Key property:</p>
        <p className="text-amber-400">Update Txₙ can spend Funding OR any Update Txₘ (m &lt; n)</p>
        <p className="text-dark-500 mt-2">
          ANYPREVOUT makes signatures valid for any matching script
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How ANYPREVOUT Enables Eltoo</h3>

      <Example title="ANYPREVOUT for State Updates">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Without ANYPREVOUT (current Lightning):</p>
            <p className="text-dark-300">Signature commits to specific input txid</p>
            <p className="text-dark-300">Update₂ can ONLY spend Update₁</p>
            <p className="text-rose-400">Can't skip intermediate states</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># With ANYPREVOUT (Eltoo):</p>
            <p className="text-dark-300">Signature doesn't commit to input txid</p>
            <p className="text-dark-300">Update₁₀ can spend Update₅ directly</p>
            <p className="text-emerald-400">Latest update always wins</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Eltoo Channel Lifecycle</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <div>
              <p className="text-dark-300 font-bold">Funding</p>
              <p className="text-sm text-dark-400">Create 2-of-2 multisig, standard funding tx</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <div>
              <p className="text-dark-300 font-bold">Update</p>
              <p className="text-sm text-dark-400">
                Sign new update tx with ANYPREVOUT, includes state number
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <div>
              <p className="text-dark-300 font-bold">Close (cooperative)</p>
              <p className="text-sm text-dark-400">Directly spend funding to final balances</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <div>
              <p className="text-dark-300 font-bold">Close (unilateral)</p>
              <p className="text-sm text-dark-400">
                Broadcast update tx, wait for challenge period, settle
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">State Numbers</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># State number encoding:</p>
        <p className="text-dark-300">Update tx includes: state_number in nSequence or nLockTime</p>
        <p className="text-dark-400 mt-3 mb-2"># Enforcement:</p>
        <p className="text-dark-300">Script checks: new_state &gt; old_state</p>
        <p className="text-amber-400 mt-2">Higher state number can always replace lower</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Benefits Over LN-Penalty</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Aspect</th>
              <th className="text-left py-3 text-dark-300">LN-Penalty</th>
              <th className="text-left py-3 text-dark-300">Eltoo</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">State storage</td>
              <td>All revocation secrets</td>
              <td className="text-emerald-400">Only latest state</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Commitment symmetry</td>
              <td>Asymmetric</td>
              <td className="text-emerald-400">Symmetric</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Watchtower data</td>
              <td>Per-state breach tx</td>
              <td className="text-emerald-400">Single update tx</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Breach penalty</td>
              <td>Lose all funds</td>
              <td className="text-amber-400">Just reverted to latest</td>
            </tr>
            <tr>
              <td className="py-3">Multiparty channels</td>
              <td>Very complex</td>
              <td className="text-emerald-400">Straightforward</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Challenge Period</h3>

      <Callout type="info" title="Unilateral Close Process">
        <p>
          When broadcasting an update unilaterally:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Broadcast update tx (enters mempool/chain)</li>
          <li>Challenge period begins (e.g., 1 week)</li>
          <li>Counterparty can broadcast higher-numbered update</li>
          <li>After challenge period, settlement tx finalizes balances</li>
        </ol>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multiparty Channels</h3>

      <p className="mb-4">
        Eltoo's simplicity enables efficient multiparty channels:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># N-party Eltoo channel:</p>
        <p className="text-dark-300">Funding: N-of-N multisig</p>
        <p className="text-dark-300">Updates: All N parties sign with ANYPREVOUT</p>
        <p className="text-dark-300">Settlement: Each party's balance output</p>
        <p className="text-dark-500 mt-3">
          No exponential blowup like LN-Penalty multiparty
        </p>
      </div>

      <Callout type="success" title="Next-Generation Channels">
        <p>
          Eltoo represents a significant simplification of payment channel construction.
          By eliminating revocation complexity and enabling symmetric states, it paves
          the way for more efficient Lightning implementations and opens possibilities
          for channel factories and other advanced constructions.
        </p>
      </Callout>
    </LessonLayout>
  );
}
