import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Time Locks Relative to Confirmation</h2>

      <p className="mb-4">
        While BIP-65 (CLTV) enables absolute time locks ("not before block 800,000"), BIP-68
        enables <strong>relative time locks</strong>: "not until 100 blocks after this input
        was confirmed." This primitive is essential for bidirectional payment channels.
      </p>

      <Callout type="info" title="Activated: July 2016">
        <p>
          BIP-68 activated alongside BIP-112 (CSV) and BIP-113 (MTP) via BIP-9 version bits
          signaling—the first soft fork to use this modern activation mechanism.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Relative Time Locks?</h3>

      <p className="mb-4">
        Absolute time locks have a limitation: you must know in advance when you want the
        lock to expire. But for payment channels, you need:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 mb-6">
        <p className="text-dark-300 italic">
          "If the channel is closed, wait 144 blocks before this refund transaction is valid."
        </p>
        <p className="text-dark-500 text-sm mt-2">
          The 144-block delay starts from whenever the close happens—not a predetermined time.
        </p>
      </div>

      <Definition title="Relative Lock-Time">
        <p>
          A lock expressed as "N blocks/seconds after the referenced output was confirmed."
          The lock period begins when the input being spent is mined, not at a fixed point
          in time.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The nSequence Field</h3>

      <p className="mb-4">
        BIP-68 repurposes the <code className="text-amber-400">nSequence</code> field of transaction
        inputs. Originally intended for transaction replacement (never fully implemented), it was
        mostly unused.
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># nSequence bit layout (32 bits)</p>
        <p className="mb-2">
          <span className="text-rose-400">[bit 31: disable]</span>{' '}
          <span className="text-purple-400">[bit 22: type]</span>{' '}
          <span className="text-dark-500">[bits 23-30: unused]</span>{' '}
          <span className="text-amber-400">[bits 0-15: value]</span>
        </p>
        <div className="text-xs text-dark-500 mt-3 space-y-1">
          <p>Bit 31 = 1: Disable relative lock-time (use legacy behavior)</p>
          <p>Bit 31 = 0: Enable BIP-68 interpretation</p>
          <p>Bit 22 = 0: Value is blocks</p>
          <p>Bit 22 = 1: Value is 512-second intervals</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lock Types</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-blue-500/30">
          <p className="text-blue-400 font-bold mb-2">Block-Based Lock</p>
          <p className="text-sm text-dark-300 mb-2">
            Type flag = 0. Value is number of blocks.
          </p>
          <p className="text-xs text-dark-500">
            Maximum: 65,535 blocks (~455 days)
          </p>
          <div className="mt-3 font-mono text-xs">
            <p className="text-dark-400">Example: 144 blocks</p>
            <p className="text-amber-400">nSequence = 0x00000090</p>
          </div>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Time-Based Lock</p>
          <p className="text-sm text-dark-300 mb-2">
            Type flag = 1. Value is 512-second units.
          </p>
          <p className="text-xs text-dark-500">
            Maximum: 65,535 × 512s (~388 days)
          </p>
          <div className="mt-3 font-mono text-xs">
            <p className="text-dark-400">Example: 1 day = 169 units</p>
            <p className="text-amber-400">nSequence = 0x004000a9</p>
          </div>
        </div>
      </div>

      <Example title="Calculating Relative Lock">
        <div className="space-y-3">
          <p className="text-dark-300">For a 1-day relative lock using time:</p>
          <MathBlock>
            {`\\text{units} = \\left\\lceil \\frac{86400}{512} \\right\\rceil = 169`}
          </MathBlock>
          <p className="text-dark-400 text-sm">
            nSequence = 0x00400000 (type flag) | 169 = 0x004000a9
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Consensus Rule</h3>

      <p className="mb-4">
        BIP-68 adds a consensus rule: a transaction is invalid if any input has an nSequence
        indicating a relative lock-time that hasn't been satisfied.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-300 mb-3">For each input with BIP-68 enabled (bit 31 = 0):</p>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>If type = blocks: current height - input confirmation height ≥ value</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>If type = time: current MTP - input MTP ≥ value × 512</span>
          </li>
        </ul>
      </div>

      <Callout type="info" title="What is MTP?">
        <p>
          Median Time Past (BIP-113) is the median of the last 11 block timestamps. Using MTP
          instead of the current block's timestamp prevents miners from manipulating time-based
          locks by setting future timestamps.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Transaction-Level vs Script-Level</h3>

      <p className="mb-4">
        BIP-68 enforces relative locks at the <strong>transaction level</strong>. To enforce
        them at the script level (so the output creator controls the lock), you need
        BIP-112's OP_CHECKSEQUENCEVERIFY—covered in the next section.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-blue-400 font-bold mb-2">BIP-68 (This BIP)</p>
          <p className="text-sm text-dark-300">
            Consensus interpretation of nSequence. Transaction creator sets the lock.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-purple-400 font-bold mb-2">BIP-112 (CSV)</p>
          <p className="text-sm text-dark-300">
            Script opcode that verifies nSequence. Output creator enforces the lock.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <Example title="Lightning Channel Penalty">
        <p className="text-dark-300 mb-3">
          In Lightning, if Alice tries to close a channel with an old state:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Alice broadcasts outdated commitment transaction</li>
          <li>Bob has a penalty transaction that spends Alice's output</li>
          <li>Alice's output has a relative timelock (e.g., 144 blocks)</li>
          <li>During this delay, Bob can broadcast the penalty and claim all funds</li>
        </ol>
        <p className="text-amber-400 mt-3 text-sm">
          The relative lock gives Bob time to react without knowing when Alice will cheat.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Backwards Compatibility</h3>

      <p className="mb-4">
        Transactions created before BIP-68 activation are unaffected because:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>nSequence = 0xffffffff (common default) has bit 31 set → disabled</li>
        <li>BIP-68 only applies to transaction version ≥ 2</li>
        <li>Existing UTXOs aren't constrained—only new spending patterns</li>
      </ul>

      <Callout type="success" title="The CSV Trilogy">
        <p>
          BIP-68, BIP-112, and BIP-113 activated together as the "CSV soft fork"—the first
          coordinated deployment of multiple related BIPs. This package enabled the relative
          time locks essential for Lightning Network's trustless operation.
        </p>
      </Callout>
    </LessonLayout>
  );
}
