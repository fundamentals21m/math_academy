import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-119: OP_CHECKTEMPLATEVERIFY</h2>

      <p className="mb-4">
        BIP-119 proposes OP_CHECKTEMPLATEVERIFY (CTV), a new opcode that constrains how an
        output can be spent by committing to a hash of the spending transaction's template.
        This enables covenants—outputs that restrict their own future spending conditions.
      </p>

      <Callout type="warning" title="Proposal Status">
        <p>
          CTV is still a proposal and has not been activated. It's one of the most discussed
          covenant proposals due to its simplicity and powerful applications.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What is a Covenant?</h3>

      <Definition title="Covenant">
        <p>
          A covenant is a spending condition that restricts not just WHO can spend an output,
          but HOW it can be spent—constraining the outputs of the spending transaction itself.
        </p>
        <p className="mt-2 text-dark-400">
          Think of it as: "This UTXO can only be spent if the spending TX looks exactly like this."
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How CTV Works</h3>

      <p className="mb-4">
        CTV commits to a hash of the transaction template (outputs, locktime, etc.):
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Script using CTV:</p>
        <p className="text-amber-400">&lt;template_hash&gt; OP_CHECKTEMPLATEVERIFY</p>
        <p className="text-dark-500 mt-3">
          Only succeeds if spending TX matches the committed template
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Template Hash Computation</h3>

      <p className="mb-4">
        The template hash commits to specific transaction fields:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">DefaultCheckTemplateVerifyHash includes:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>nVersion:</strong> Transaction version</li>
          <li><strong>nLockTime:</strong> Transaction locktime</li>
          <li><strong>scriptSig hash:</strong> Hash of all scriptSigs (usually empty)</li>
          <li><strong>input count:</strong> Number of inputs</li>
          <li><strong>sequences hash:</strong> Hash of all input sequences</li>
          <li><strong>output count:</strong> Number of outputs</li>
          <li><strong>outputs hash:</strong> Hash of all outputs</li>
          <li><strong>input index:</strong> Which input is being spent</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Properties</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">What CTV Commits To</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Output amounts and scripts</li>
            <li>Number of inputs/outputs</li>
            <li>Transaction locktime</li>
            <li>Input sequence numbers</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">What CTV Doesn't Commit To</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Input txids (which UTXOs)</li>
            <li>Input amounts</li>
            <li>Witness data</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Application: Vaults</h3>

      <Example title="CTV Vault Construction">
        <div className="space-y-3 text-dark-300">
          <p className="text-dark-400 mb-2">A secure custody solution with spending delays:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              <strong>Cold UTXO:</strong> Contains CTV committing to unvaulting TX
            </li>
            <li>
              <strong>Unvault:</strong> Spending creates time-locked output (24-hour delay)
            </li>
            <li>
              <strong>Wait period:</strong> Owner can cancel to recovery address if compromised
            </li>
            <li>
              <strong>Complete:</strong> After delay, funds move to hot wallet
            </li>
          </ol>
        </div>
      </Example>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-xs mb-6">
        <p className="text-dark-400 mb-2"># Vault flow:</p>
        <p className="text-dark-300">Cold Storage</p>
        <p className="text-dark-500">  └─ CTV: must create [hot_output + timelock_recovery]</p>
        <p className="text-dark-300 mt-2">Unvaulting TX</p>
        <p className="text-dark-500">  ├─ Hot wallet (spendable after 144 blocks)</p>
        <p className="text-dark-500">  └─ Recovery (spendable immediately with backup key)</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Application: Congestion Control</h3>

      <Example title="Payment Batching with CTV">
        <div className="space-y-3 text-dark-300">
          <p>
            During high-fee periods, commit to future transactions without broadcasting them:
          </p>
          <div className="bg-dark-800 rounded-lg p-4 mt-3 font-mono text-xs">
            <p className="text-dark-400 mb-1"># Single on-chain TX:</p>
            <p className="text-dark-300">Output: CTV committing to 100 individual payments</p>
            <p className="text-dark-400 mt-2 mb-1"># Later, when fees are lower:</p>
            <p className="text-dark-300">Expand into 100 actual payment outputs</p>
          </div>
          <p className="text-dark-500 text-sm mt-2">
            Recipients have cryptographic proof their payment is committed
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Application: Non-Interactive Channels</h3>

      <p className="mb-4">
        CTV enables creating Lightning channel funding outputs without both parties online:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Sender creates CTV output committing to channel structure</li>
          <li>Receiver can claim at any time, no interactive signing needed</li>
          <li>Enables "just-in-time" channel creation</li>
          <li>Simplifies Lightning onboarding</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why CTV is Controversial</h3>

      <Callout type="warning" title="Covenant Concerns">
        <p>
          Some argue covenants could enable:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>"Tainted" coins that can only be spent to approved addresses</li>
          <li>Government-mandated spending restrictions</li>
          <li>Reduced fungibility of Bitcoin</li>
        </ul>
        <p className="mt-2">
          CTV proponents note these concerns apply to multisig too, and CTV's constraints
          are opt-in and limited in scope.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">CTV vs Other Covenants</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Proposal</th>
              <th className="text-left py-3 text-dark-300">Flexibility</th>
              <th className="text-left py-3 text-dark-300">Complexity</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">CTV (BIP-119)</td>
              <td>Fixed template only</td>
              <td>Simple, well-understood</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">APO (BIP-118)</td>
              <td>Rebindable signatures</td>
              <td>Moderate</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">OP_VAULT</td>
              <td>Vault-specific</td>
              <td>Purpose-built</td>
            </tr>
            <tr>
              <td className="py-3 font-mono">CAT + CHECKSIGFROMSTACK</td>
              <td>General covenants</td>
              <td>Very flexible, complex</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Simple But Powerful">
        <p>
          CTV's strength is its simplicity: one opcode, one hash, clear semantics. While not
          as flexible as general covenant proposals, it enables important use cases like
          vaults, congestion control, and channel factories with minimal complexity.
        </p>
      </Callout>
    </LessonLayout>
  );
}
