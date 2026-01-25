import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Coordinating Soft Fork Activation</h2>

      <p className="mb-4">
        How do thousands of independent miners signal their readiness for a protocol upgrade?
        BIP-9 defines a mechanism using <strong>version bits</strong> in block headers to
        coordinate soft fork activation in a decentralized manner.
      </p>

      <Callout type="info" title="Historical Context">
        <p>
          Before BIP-9, soft forks used the IsSuperMajority (ISM) mechanism, which had limitations.
          BIP-9 was designed to allow multiple soft forks to be deployed simultaneously and to
          include timeout mechanisms for failed activations.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem with ISM</h3>

      <p className="mb-4">
        The IsSuperMajority mechanism had several issues:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Only one soft fork could be activated at a time (used the version field directly)</li>
        <li>No timeout—a failed activation attempt would lock the version number forever</li>
        <li>No way to signal "against" an activation (only "for" or "abstain")</li>
        <li>Difficult to coordinate the start of signaling</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-9 Architecture</h3>

      <Definition title="Version Bits">
        <p>
          The block header's 32-bit version field is repurposed: the top 3 bits are set to
          <code className="text-amber-400 mx-1">001</code> to indicate BIP-9 signaling, and the
          remaining 29 bits can each signal support for different soft forks.
        </p>
        <p className="mt-2">
          Bit positions 0-28 can signal 29 parallel deployments. Each soft fork is assigned
          a unique bit number.
        </p>
      </Definition>

      <Example title="Block Version Bits Layout">
        <div className="font-mono text-sm bg-dark-800 p-4 rounded-lg">
          <p className="text-dark-400 mb-2">32-bit version field:</p>
          <p className="mb-1">
            <span className="text-rose-400">[001]</span>
            <span className="text-amber-400">[signal bits 0-28]</span>
          </p>
          <p className="text-xs text-dark-500 mt-2">
            Example: Version 0x20000001 = BIP-9 base (0x20000000) + bit 0 signaled
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Deployment States</h3>

      <p className="mb-4">
        Each BIP-9 deployment progresses through a state machine:
      </p>

      <div className="bg-dark-900 rounded-xl p-6 mb-6">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-gray-400 font-mono">DEFINED</div>
            <div className="text-dark-600">→</div>
            <div className="text-dark-300">Deployment parameters set, waiting for start time</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-blue-400 font-mono">STARTED</div>
            <div className="text-dark-600">→</div>
            <div className="text-dark-300">Signaling period active, counting support</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-purple-400 font-mono">LOCKED_IN</div>
            <div className="text-dark-600">→</div>
            <div className="text-dark-300">Threshold reached, activation pending</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-emerald-400 font-mono">ACTIVE</div>
            <div className="text-dark-600">→</div>
            <div className="text-dark-300">New rules enforced</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-rose-400 font-mono">FAILED</div>
            <div className="text-dark-600">→</div>
            <div className="text-dark-300">Timeout reached without activation</div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Parameters</h3>

      <p className="mb-4">
        Each BIP-9 deployment specifies several parameters:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">name</p>
          <p className="text-sm text-dark-300">Human-readable identifier (e.g., "segwit")</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">bit</p>
          <p className="text-sm text-dark-300">Position in version field (0-28)</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">starttime</p>
          <p className="text-sm text-dark-300">Unix timestamp when signaling begins</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">timeout</p>
          <p className="text-sm text-dark-300">Unix timestamp when deployment fails if not locked in</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Threshold Calculation</h3>

      <p className="mb-4">
        BIP-9 uses a <strong>retarget period</strong> (2016 blocks, ~2 weeks) as the measurement window:
      </p>

      <MathBlock>
        {`\\text{Threshold} = \\frac{1916}{2016} \\approx 95\\%`}
      </MathBlock>

      <p className="mb-4">
        If 1916 or more blocks in a retarget period signal support (set the designated bit),
        the deployment moves to LOCKED_IN at the end of that period.
      </p>

      <Example title="SegWit BIP-9 Deployment">
        <div className="space-y-2 text-dark-300">
          <p><strong>Bit:</strong> 1</p>
          <p><strong>Start:</strong> November 15, 2016 (midnight UTC)</p>
          <p><strong>Timeout:</strong> November 15, 2017 (midnight UTC)</p>
          <p><strong>Threshold:</strong> 95% (1916/2016 blocks)</p>
          <p className="text-amber-400 mt-2">
            Result: SegWit took 9 months to reach threshold due to political contention
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Limitations of BIP-9</h3>

      <Callout type="warning" title="The 95% Problem">
        <p>
          BIP-9's 95% threshold gives significant veto power to a small minority of miners.
          During the SegWit activation, some miners used this to delay activation for economic
          reasons. This led to proposals like BIP-8 (with mandatory activation) and UASF.
        </p>
      </Callout>

      <p className="mb-4">
        Other BIP-9 limitations:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Miners, not users or nodes, control activation timing</li>
        <li>No way to express opposition (only support or silence)</li>
        <li>Timeout means starting over with new parameters</li>
        <li>Fixed 95% threshold may be too high for some changes</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-9 in Practice</h3>

      <p className="mb-4">
        BIP-9 successfully activated several soft forks:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">BIP</th>
              <th className="text-left py-3 text-dark-300">Bit</th>
              <th className="text-left py-3 text-dark-300">Feature</th>
              <th className="text-left py-3 text-dark-300">Activated</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">BIP-68/112/113</td>
              <td>0</td>
              <td>CSV (relative timelocks)</td>
              <td className="text-emerald-400">July 2016</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">BIP-141/143/144</td>
              <td>1</td>
              <td>SegWit</td>
              <td className="text-emerald-400">Aug 2017</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Legacy and Evolution">
        <p>
          While BIP-9 showed limitations during SegWit activation, it pioneered the concept of
          parallel soft fork signaling. Later mechanisms like Speedy Trial (used for Taproot)
          built on BIP-9's foundations while addressing its weaknesses.
        </p>
      </Callout>
    </LessonLayout>
  );
}
