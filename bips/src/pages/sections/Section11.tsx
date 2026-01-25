import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Absolute Time Locks in Script</h2>

      <p className="mb-4">
        BIP-65 introduced <strong>OP_CHECKLOCKTIMEVERIFY</strong> (CLTV), an opcode that enables
        scripts to require that funds cannot be spent until a certain block height or timestamp.
        This primitive enables time-locked contracts, payment channels, and escrow mechanisms.
      </p>

      <Callout type="info" title="Activated: December 2015">
        <p>
          BIP-65 activated at block 388,381 via IsSuperMajority (95% threshold), requiring
          block version 4 or higher.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem Before CLTV</h3>

      <p className="mb-4">
        Bitcoin always had a transaction-level <code className="text-amber-400">nLockTime</code> field
        that could delay when a transaction becomes valid. But this had limitations:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Only delays broadcasting the spending transaction</li>
        <li>Recipient can spend immediately with a different transaction (nLockTime=0)</li>
        <li>Can't enforce "these funds cannot move until time X" at the script level</li>
      </ul>

      <Definition title="OP_CHECKLOCKTIMEVERIFY">
        <p>
          An opcode that verifies the spending transaction's nLockTime is at least as large as the
          value on the stack. If not, the script fails. This binds the time lock into the output
          script itself, making it impossible to spend early.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How CLTV Works</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Example: Can't spend until block 800,000</p>
        <p className="text-amber-400 mb-4">
          &lt;800000&gt; OP_CHECKLOCKTIMEVERIFY OP_DROP OP_DUP OP_HASH160 &lt;pubKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG
        </p>
        <p className="text-dark-400 mb-2"># To spend, the transaction must have:</p>
        <p className="text-emerald-400">nLockTime ≥ 800000</p>
        <p className="text-emerald-400">All inputs must have nSequence &lt; 0xffffffff</p>
      </div>

      <Example title="CLTV Validation Steps">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Push the lock time value onto the stack (e.g., 800000)</li>
          <li>OP_CHECKLOCKTIMEVERIFY checks:
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>Is the stack value negative? → FAIL</li>
              <li>Are lock time types mismatched? → FAIL</li>
              <li>Is tx.nLockTime &lt; stack value? → FAIL</li>
              <li>Is tx.nSequence == 0xffffffff? → FAIL</li>
            </ul>
          </li>
          <li>If all checks pass, execution continues (value stays on stack)</li>
          <li>OP_DROP removes the lock time value (standard pattern)</li>
          <li>Script continues with normal P2PKH checks</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lock Time Types</h3>

      <p className="mb-4">
        Bitcoin uses a clever encoding for lock times:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-blue-500/30">
          <p className="text-blue-400 font-bold mb-2">Block Height</p>
          <p className="text-sm text-dark-300">
            Values &lt; 500,000,000 are interpreted as block heights
          </p>
          <p className="text-xs text-dark-500 mt-2">
            Example: 800000 = block 800,000
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Unix Timestamp</p>
          <p className="text-sm text-dark-300">
            Values ≥ 500,000,000 are Unix timestamps
          </p>
          <p className="text-xs text-dark-500 mt-2">
            Example: 1704067200 = Jan 1, 2024
          </p>
        </div>
      </div>

      <Callout type="warning" title="Type Matching Required">
        <p>
          The script's lock time and transaction's nLockTime must be the same type (both
          block heights or both timestamps). Mixing types causes the script to fail. This
          prevents confusion between "block 1704067200" and "timestamp 1704067200".
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Escrow with Timeout</h4>
          <p className="text-dark-300">
            "Pay to Alice's signature, OR pay to Bob's signature after block 850,000."
            If Alice doesn't respond, Bob can recover funds after the timeout.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Inheritance Planning</h4>
          <p className="text-dark-300">
            "Pay to heir's key after timestamp X, OR pay to my key anytime."
            If owner dies and can't spend, heir can claim after the date.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Payment Channels</h4>
          <p className="text-dark-300">
            Hash Time-Locked Contracts (HTLCs) use CLTV for timeout paths. If a payment
            isn't claimed in time, funds return to the sender.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Script Patterns</h3>

      <Example title="Common CLTV Scripts">
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="text-dark-400 mb-1"># Simple time-locked payment</p>
            <p className="text-amber-400">
              &lt;locktime&gt; CLTV DROP &lt;pubkey&gt; CHECKSIG
            </p>
          </div>
          <div>
            <p className="text-dark-400 mb-1"># Time-locked OR immediate with different key</p>
            <p className="text-amber-400">
              IF &lt;locktime&gt; CLTV DROP &lt;pubkeyA&gt; CHECKSIG ELSE &lt;pubkeyB&gt; CHECKSIG ENDIF
            </p>
          </div>
          <div>
            <p className="text-dark-400 mb-1"># HTLC pattern (simplified)</p>
            <p className="text-amber-400">
              IF HASH160 &lt;hash&gt; EQUALVERIFY &lt;receiverKey&gt; CHECKSIG ELSE &lt;timeout&gt; CLTV DROP &lt;senderKey&gt; CHECKSIG ENDIF
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Relationship to nLockTime</h3>

      <p className="mb-4">
        CLTV doesn't replace nLockTime—it enforces it:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li><strong>nLockTime:</strong> Transaction-level field, set by transaction creator</li>
        <li><strong>CLTV:</strong> Script-level enforcement, set by output creator</li>
        <li><strong>Together:</strong> CLTV forces the spender to set nLockTime correctly</li>
      </ul>

      <Callout type="success" title="Foundation for Lightning">
        <p>
          CLTV is essential for Lightning Network HTLCs. When combined with OP_CHECKSEQUENCEVERIFY
          (BIP-112), it enables the complex time-locked contracts that make payment channels secure.
          We'll explore this connection when we cover Layer 2 solutions.
        </p>
      </Callout>
    </LessonLayout>
  );
}
