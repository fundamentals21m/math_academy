import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Securing Time-Based Locks</h2>

      <p className="mb-4">
        BIP-113 changes how Bitcoin interprets time-based locks by using <strong>Median Time Past
        (MTP)</strong> instead of the block's timestamp. This prevents miners from manipulating
        timelocks by setting strategic timestamps.
      </p>

      <Callout type="info" title="Activated: July 2016">
        <p>
          BIP-113 activated as part of the CSV soft fork alongside BIP-68 and BIP-112.
          It affects both nLockTime (CLTV) and nSequence (CSV) time-based locks.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Timestamp Problem</h3>

      <p className="mb-4">
        Bitcoin blocks include a timestamp, but it's only loosely validated:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Must be greater than the median of the last 11 blocks (MTP)</li>
        <li>Must be less than 2 hours in the future (network time)</li>
        <li>Can vary significantly within these bounds</li>
      </ul>

      <Example title="Timestamp Manipulation Attack">
        <div className="space-y-3 text-dark-300">
          <p>Alice has a timelock that expires at timestamp T:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Current time is T - 1 hour</li>
            <li>A miner sets their block's timestamp to T + 1 (1 hour ahead)</li>
            <li>This is valid (within 2-hour future tolerance)</li>
            <li>Alice's timelock appears satisfied in this block</li>
            <li>Alice can spend earlier than intended!</li>
          </ol>
          <p className="text-amber-400 mt-2">
            A malicious miner could help Alice bypass her timelock by ~2 hours.
          </p>
        </div>
      </Example>

      <Definition title="Median Time Past (MTP)">
        <p>
          The median of the timestamps of the 11 blocks preceding a given block. For block N,
          MTP is the median of blocks N-11 through N-1. MTP can only increase (or stay the same)
          as new blocks are added.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Median of 11?</h3>

      <p className="mb-4">
        The choice of 11 blocks is deliberate:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>
              <strong>Odd number:</strong> Guarantees a clear median (no ties)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>
              <strong>Manipulation resistance:</strong> Requires controlling 6+ consecutive blocks
              to move MTP forward significantly
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>
              <strong>Reasonable lag:</strong> ~1 hour average delay is acceptable for most uses
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">MTP Calculation</h3>

      <Example title="Computing MTP">
        <div className="space-y-3">
          <p className="text-dark-300">Given the last 11 block timestamps:</p>
          <div className="font-mono text-sm bg-dark-800 p-4 rounded-lg overflow-x-auto">
            <p className="text-dark-400 mb-2"># Timestamps (sorted for clarity)</p>
            <p className="text-amber-400">
              [1704060000, 1704060600, 1704061200, 1704061800, 1704062400,{' '}
              <span className="text-emerald-400 font-bold">1704063000</span>,{' '}
              1704063600, 1704064200, 1704064800, 1704065400, 1704066000]
            </p>
            <p className="text-dark-500 mt-2">
              MTP = 6th value (index 5) = 1704063000
            </p>
          </div>
          <MathBlock>
            {`\\text{MTP} = \\text{timestamps}\\left[\\left\\lfloor\\frac{11}{2}\\right\\rfloor\\right] = \\text{timestamps}[5]`}
          </MathBlock>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-113 Rule Change</h3>

      <p className="mb-4">
        Before BIP-113, timelocks compared against the block's timestamp. After:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Before BIP-113</p>
          <div className="text-sm text-dark-300 font-mono">
            <p>if (tx.nLockTime &lt; block.timestamp)</p>
            <p className="ml-4">valid = true</p>
          </div>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">After BIP-113</p>
          <div className="text-sm text-dark-300 font-mono">
            <p>if (tx.nLockTime &lt; block.MTP)</p>
            <p className="ml-4">valid = true</p>
          </div>
        </div>
      </div>

      <Callout type="warning" title="MTP Lag Effect">
        <p>
          Because MTP is derived from past blocks, it lags real time by roughly 1 hour on average.
          A timelock set for "January 1, 2024 00:00 UTC" will actually become spendable approximately
          when MTP reaches that timestamp—which happens after the real-world time has passed.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Impact on CLTV and CSV</h3>

      <p className="mb-4">
        BIP-113 affects both absolute (CLTV) and relative (CSV) time-based locks:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">For CLTV (nLockTime)</h4>
          <p className="text-dark-300">
            When nLockTime ≥ 500,000,000 (timestamp), compare against current block's MTP
            instead of the block's own timestamp.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">For CSV (nSequence)</h4>
          <p className="text-dark-300">
            When nSequence has type flag set (time-based), the elapsed time is calculated as
            (current block MTP) - (input confirmation block MTP), not using raw timestamps.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Implications</h3>

      <Example title="Setting Time-Based Locks">
        <div className="space-y-3 text-dark-300">
          <p>When creating a time-based lock:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Add buffer:</strong> If you want funds available on Jan 1, set the
              lock to Dec 31, accounting for MTP lag
            </li>
            <li>
              <strong>Prefer blocks:</strong> For precision, use block-based locks instead
              of time-based ones
            </li>
            <li>
              <strong>Consider variance:</strong> Block times vary (sometimes 1 min, sometimes 1 hour)
            </li>
          </ul>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Improvement</h3>

      <p className="mb-4">
        BIP-113 significantly raises the bar for timestamp manipulation:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 mb-6">
        <p className="text-dark-300 mb-3">To advance MTP by T seconds, an attacker must:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300 ml-4">
          <li>Control at least 6 consecutive blocks</li>
          <li>Set each block's timestamp to the maximum allowed</li>
          <li>Still only gain ~2 hours max (due to the 2-hour future limit)</li>
        </ul>
        <p className="text-amber-400 mt-3">
          This requires sustained ~51% hashrate, making the attack impractical.
        </p>
      </div>

      <Callout type="success" title="Part of a Cohesive System">
        <p>
          BIP-113 completes the timelock security picture. Combined with BIP-68 (sequence
          semantics) and BIP-112 (CSV opcode), it provides robust time-based scripting
          that's resistant to miner manipulation—essential for trustless contracts.
        </p>
      </Callout>
    </LessonLayout>
  );
}
