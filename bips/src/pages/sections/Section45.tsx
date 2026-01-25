import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-118: SIGHASH_ANYPREVOUT</h2>

      <p className="mb-4">
        BIP-118 proposes two new signature hash flags for Taproot: SIGHASH_ANYPREVOUT and
        SIGHASH_ANYPREVOUTANYSCRIPT. These enable signatures that can be rebound to different
        inputs, enabling simplified Lightning channel state management (Eltoo).
      </p>

      <Callout type="warning" title="Proposal Status">
        <p>
          BIP-118 is still a proposal and has not been activated. It requires a soft fork
          to implement. The concept was previously called SIGHASH_NOINPUT.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Current Lightning channels use penalty-based state updates:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Each state update creates new commitment transactions</li>
          <li>Old states must be invalidated with revocation keys</li>
          <li>If a party broadcasts old state, counterparty can take all funds</li>
          <li>Requires storing every past state for potential penalties</li>
          <li>Complex watchtower requirements</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Solution</h3>

      <Definition title="SIGHASH_ANYPREVOUT (APO)">
        <p>
          A signature that doesn't commit to the specific input being spent (the prevout).
          The same signature can be valid for multiple different UTXOs with the same script.
        </p>
        <p className="mt-2 text-dark-400">
          Flag value: <code className="text-amber-400">0x41</code> (ANYONECANPAY | 0x40)
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sighash Flag Comparison</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Flag</th>
              <th className="text-left py-3 text-dark-300">Commits to</th>
              <th className="text-left py-3 text-dark-300">Doesn't commit to</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">SIGHASH_ALL</td>
              <td>All inputs, all outputs</td>
              <td>—</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">ANYONECANPAY</td>
              <td>One input, outputs</td>
              <td>Other inputs</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">ANYPREVOUT</td>
              <td>scriptPubKey, outputs</td>
              <td>Input txid/vout</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">ANYPREVOUTANYSCRIPT</td>
              <td>Outputs only</td>
              <td>Input txid/vout, scriptPubKey</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Enabling Eltoo</h3>

      <p className="mb-4">
        ANYPREVOUT enables the Eltoo channel update mechanism:
      </p>

      <Example title="Eltoo Channel Updates">
        <div className="space-y-3 text-dark-300">
          <p className="text-dark-400 mb-2">Instead of penalty-based updates:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong>State 0:</strong> Funding TX creates channel output</li>
            <li><strong>State 1:</strong> Update TX spends state 0 → state 1 output</li>
            <li><strong>State 2:</strong> Update TX spends state 1 → state 2 output</li>
            <li><strong>...</strong> Each state can spend any previous state</li>
            <li><strong>Settlement:</strong> After timeout, final state distributes funds</li>
          </ol>
          <p className="text-dark-500 text-sm mt-3">
            APO signatures let any update TX spend any prior state—the latest always wins
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why This Works</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Traditional signature commits to:</p>
        <p className="text-dark-300">txid:vout → specific UTXO</p>
        <p className="text-rose-400 mt-1">Can only spend ONE specific output</p>

        <p className="text-dark-400 mt-4 mb-2"># ANYPREVOUT signature commits to:</p>
        <p className="text-dark-300">scriptPubKey pattern → any matching UTXO</p>
        <p className="text-emerald-400 mt-1">Can spend ANY output with same script</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Eltoo Benefits</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">LN-Penalty (Current)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Store all past states</li>
            <li>Complex revocation keys</li>
            <li>Watchtowers need full history</li>
            <li>Risk of losing revocation data</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Eltoo (with APO)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Only store latest state</li>
            <li>No revocation complexity</li>
            <li>Watchtowers only need update TX</li>
            <li>Symmetric protocol (simpler)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Considerations</h3>

      <Callout type="warning" title="Rebinding Risk">
        <p>
          APO signatures can be "rebound" to different UTXOs with the same script. This is
          intentional for Eltoo but dangerous if misused:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Never use APO for regular payments</li>
          <li>Only use with carefully designed protocols</li>
          <li>Outputs must be unique or intentionally rebindable</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Other Applications</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Channel Factories</p>
          <p className="text-sm text-dark-300">
            Multi-party channel constructions benefit from simplified state management.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Vaults</p>
          <p className="text-sm text-dark-300">
            Pre-signed recovery transactions that work regardless of which vault UTXO
            is being recovered.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Covenants</p>
          <p className="text-sm text-dark-300">
            Combined with other features, enables more flexible spending constraints.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation Details</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">BIP-118 specifies:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Only valid for Taproot key-path and script-path spends</li>
          <li>Requires new public key prefix byte (0x01) to opt-in</li>
          <li>Combines with existing sighash flags (ALL, NONE, SINGLE)</li>
          <li>ANYPREVOUTANYSCRIPT also skips the scriptPubKey commitment</li>
        </ul>
      </div>

      <Callout type="success" title="The Future of Lightning">
        <p>
          SIGHASH_ANYPREVOUT would significantly simplify Lightning Network implementations
          and enable new Layer 2 protocols. While still a proposal, it represents one of
          the most anticipated potential upgrades to Bitcoin's scripting capabilities.
        </p>
      </Callout>
    </LessonLayout>
  );
}
