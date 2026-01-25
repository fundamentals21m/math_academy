import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Script-Level Relative Locks</h2>

      <p className="mb-4">
        BIP-112 introduces <strong>OP_CHECKSEQUENCEVERIFY</strong> (CSV), the script-level counterpart
        to BIP-68. While BIP-68 lets transaction creators set relative locks, CSV lets output
        creators <em>require</em> them—essential for trustless payment channels.
      </p>

      <Callout type="info" title="Activated: July 2016">
        <p>
          BIP-112 activated alongside BIP-68 and BIP-113 as part of the "CSV soft fork,"
          the first deployment using BIP-9 version bits signaling.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Need for Script Enforcement</h3>

      <p className="mb-4">
        BIP-68 alone isn't enough. Consider this scenario:
      </p>

      <Example title="Why BIP-68 Isn't Sufficient">
        <div className="space-y-3 text-dark-300">
          <p>Alice creates an output: "Spendable by Bob OR by Alice after 1 week"</p>
          <p className="text-dark-400">Without CSV:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Bob can spend immediately (his branch has no timelock)</li>
            <li>Alice must wait 1 week for her branch</li>
            <li>But there's no way to enforce this in the script!</li>
          </ul>
          <p className="text-amber-400 mt-2">
            BIP-68 only checks nSequence—nothing forces Bob to use a specific nSequence value.
          </p>
        </div>
      </Example>

      <Definition title="OP_CHECKSEQUENCEVERIFY (CSV)">
        <p>
          A script opcode that verifies the spending transaction's input nSequence value is
          at least as large as the value on the stack. Similar to how CLTV enforces nLockTime,
          CSV enforces nSequence for relative time locks.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How CSV Works</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Example: Can't spend until 144 blocks after confirmation</p>
        <p className="text-amber-400 mb-4">
          &lt;144&gt; OP_CHECKSEQUENCEVERIFY OP_DROP OP_DUP OP_HASH160 &lt;hash&gt; OP_EQUALVERIFY OP_CHECKSIG
        </p>
        <p className="text-dark-400 mb-2"># To spend, the transaction must have:</p>
        <p className="text-emerald-400">input.nSequence ≥ 144 (with BIP-68 enabled)</p>
        <p className="text-emerald-400">Transaction version ≥ 2</p>
      </div>

      <Example title="CSV Validation Steps">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Push the required sequence value onto the stack (e.g., 144)</li>
          <li>OP_CHECKSEQUENCEVERIFY checks:
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>Is transaction version ≥ 2? (required for BIP-68)</li>
              <li>Is the stack value negative? → FAIL</li>
              <li>Is input.nSequence's disable flag set? → FAIL</li>
              <li>Do the type flags match? → FAIL if mismatched</li>
              <li>Is input.nSequence &lt; stack value? → FAIL</li>
            </ul>
          </li>
          <li>If all checks pass, execution continues</li>
          <li>OP_DROP removes the sequence value</li>
          <li>Script continues with remaining operations</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Relationship with BIP-68</h3>

      <p className="mb-4">
        CSV and BIP-68 work together:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="text-amber-400 font-bold">1.</span>
            <p className="text-dark-300">
              CSV in the script says "the spender must provide nSequence ≥ X"
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-amber-400 font-bold">2.</span>
            <p className="text-dark-300">
              BIP-68 consensus rules say "if nSequence encodes a relative lock, the input
              must have aged appropriately"
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-amber-400 font-bold">3.</span>
            <p className="text-dark-300">
              Together: script enforces a minimum, and consensus ensures that minimum is
              actually met relative to confirmation time
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Common Script Patterns</h3>

      <Example title="CSV Script Examples">
        <div className="space-y-5 font-mono text-sm">
          <div>
            <p className="text-dark-400 mb-1"># Simple relative timelock</p>
            <p className="text-amber-400">
              &lt;sequence&gt; CSV DROP &lt;pubkey&gt; CHECKSIG
            </p>
          </div>

          <div>
            <p className="text-dark-400 mb-1"># Immediate OR delayed payment</p>
            <p className="text-amber-400">
              IF &lt;pubkeyA&gt; CHECKSIG ELSE &lt;delay&gt; CSV DROP &lt;pubkeyB&gt; CHECKSIG ENDIF
            </p>
            <p className="text-xs text-dark-500 mt-1">
              A can spend immediately; B must wait &lt;delay&gt; blocks
            </p>
          </div>

          <div>
            <p className="text-dark-400 mb-1"># Lightning revocation pattern</p>
            <p className="text-amber-400">
              IF &lt;revocationKey&gt; CHECKSIG ELSE &lt;toSelfDelay&gt; CSV DROP &lt;localKey&gt; CHECKSIG ENDIF
            </p>
            <p className="text-xs text-dark-500 mt-1">
              Counterparty can claim immediately with revocation key; owner waits
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use in Payment Channels</h3>

      <p className="mb-4">
        CSV is crucial for Lightning Network security:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Revocation Mechanism</h4>
          <p className="text-dark-300">
            When Alice updates the channel state, she gives Bob a revocation key for her old
            state. If Alice later broadcasts the old state, Bob has &lt;delay&gt; blocks to
            use the revocation key and claim all funds. CSV creates this enforcement window.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Unilateral Close</h4>
          <p className="text-dark-300">
            When closing a channel without cooperation, CSV ensures both parties have time
            to respond. The delay prevents instant sweeping that could enable race conditions.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">CLTV vs CSV</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Feature</th>
              <th className="text-left py-3 text-dark-300">CLTV (BIP-65)</th>
              <th className="text-left py-3 text-dark-300">CSV (BIP-112)</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Lock type</td>
              <td>Absolute</td>
              <td>Relative</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Reference point</td>
              <td>Fixed block/time</td>
              <td>Input confirmation</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Field checked</td>
              <td>nLockTime</td>
              <td>nSequence</td>
            </tr>
            <tr>
              <td className="py-3">Primary use</td>
              <td>HTLCs, inheritance</td>
              <td>Payment channels</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Enabling Lightning">
        <p>
          BIP-112 was a critical prerequisite for Lightning Network. Without script-enforceable
          relative timelocks, the penalty mechanism that keeps channels secure wouldn't be
          possible. CSV is embedded in every Lightning commitment transaction.
        </p>
      </Callout>
    </LessonLayout>
  );
}
