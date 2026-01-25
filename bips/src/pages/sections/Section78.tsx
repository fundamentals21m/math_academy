import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section78() {
  return (
    <LessonLayout sectionId={78}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-91: Reduced Threshold SegWit MASF</h2>

      <p className="mb-4">
        BIP-91 provided a path to activate SegWit with a lower miner signaling threshold,
        helping resolve the contentious SegWit activation debate in 2017. It demonstrated
        how soft forks can be activated through creative coordination.
      </p>

      <Callout type="info" title="Historical Context">
        <p>
          BIP-91 was deployed during the "SegWit2x" controversy when some miners resisted
          standard BIP-9 activation. It enabled SegWit to activate before the UASF
          (BIP-148) deadline.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Situation</h3>

      <p className="mb-4">
        In mid-2017, SegWit activation was stuck:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>BIP-141 (SegWit):</strong> Required 95% miner signaling via BIP-9
          </li>
          <li>
            <strong>Reality:</strong> Signaling stuck around 30-40%
          </li>
          <li>
            <strong>BIP-148 (UASF):</strong> Users threatening to reject non-SegWit blocks
          </li>
          <li>
            <strong>SegWit2x:</strong> Industry agreement for SegWit + 2MB hard fork
          </li>
          <li>
            <strong>Deadline:</strong> BIP-148 would activate August 1, 2017
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-91 Mechanism</h3>

      <Definition title="BIP-91 Approach">
        <p>
          A soft fork that requires miners signaling for BIP-91 (at 80% threshold) to
          also signal for SegWit (BIP-141). Once activated, non-SegWit-signaling blocks
          would be rejected.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># BIP-91 logic:</p>
        <p className="text-dark-300">1. Use version bit 4 for BIP-91 signaling</p>
        <p className="text-dark-300">2. 80% threshold over 336-block period</p>
        <p className="text-dark-300">3. Once activated:</p>
        <p className="text-amber-400 ml-4">Reject blocks without BIP-141 (bit 1) signal</p>
        <p className="text-dark-500 mt-3">
          Forces 100% SegWit signaling once 80% agree on BIP-91
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Activation Timeline</h3>

      <Example title="BIP-91 Activation">
        <div className="space-y-3 text-dark-300">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-dark-800">
                  <td className="py-2 text-dark-400">July 17, 2017</td>
                  <td>BIP-91 starts signaling</td>
                </tr>
                <tr className="border-b border-dark-800">
                  <td className="py-2 text-dark-400">July 20, 2017</td>
                  <td>80% threshold reached</td>
                </tr>
                <tr className="border-b border-dark-800">
                  <td className="py-2 text-dark-400">July 21, 2017</td>
                  <td className="text-emerald-400">BIP-91 activates (block 477,120)</td>
                </tr>
                <tr className="border-b border-dark-800">
                  <td className="py-2 text-dark-400">July 21-Aug 1</td>
                  <td>All blocks now signal SegWit</td>
                </tr>
                <tr>
                  <td className="py-2 text-dark-400">August 24, 2017</td>
                  <td className="text-amber-400">SegWit activates (block 481,824)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How It Worked</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Before BIP-91 activation:</p>
        <p className="text-dark-300">Miner A: bit 4 (BIP-91) + bit 1 (SegWit)</p>
        <p className="text-dark-300">Miner B: bit 4 (BIP-91) only</p>
        <p className="text-dark-300">Miner C: No signaling</p>
        <p className="text-dark-400 mt-3 mb-2"># After BIP-91 activation:</p>
        <p className="text-emerald-400">Miner A: Accepted (has bit 1)</p>
        <p className="text-emerald-400">Miner B: Must add bit 1 or be rejected</p>
        <p className="text-rose-400">Miner C: Rejected (no bit 1)</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why 80% Instead of 95%?</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">95% (BIP-9)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Very conservative</li>
            <li>Small minority can block</li>
            <li>Stuck at ~40% for months</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">80% (BIP-91)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Still strong supermajority</li>
            <li>Achievable with industry support</li>
            <li>Reached within days</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Avoiding Chain Split</h3>

      <Callout type="info" title="UASF Compatibility">
        <p>
          BIP-91 was specifically designed to activate SegWit before BIP-148's August 1st
          deadline. This prevented a potential chain split between UASF-enforcing nodes
          and non-SegWit miners.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Technical Details</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Signal bit:</strong> Version bit 4
          </li>
          <li>
            <strong>Activation threshold:</strong> 269/336 blocks (80%)
          </li>
          <li>
            <strong>Lock-in period:</strong> 336 blocks (~2.3 days)
          </li>
          <li>
            <strong>Enforcement:</strong> Reject blocks without bit 1 set
          </li>
        </ul>
      </div>

      <Callout type="success" title="Successful Coordination">
        <p>
          BIP-91 demonstrated that the Bitcoin community could coordinate complex
          activation strategies when needed. While controversial, it successfully
          enabled SegWit activation and avoided a chain split, providing a template
          for future soft fork coordination.
        </p>
      </Callout>
    </LessonLayout>
  );
}
