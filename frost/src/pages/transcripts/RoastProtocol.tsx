import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function RoastProtocol() {
  return (
    <TranscriptLayout transcriptId="roast-protocol">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>ROAST wraps FROST to add robustness in asynchronous networks</li>
          <li>Guarantees signature completion as long as t honest signers participate</li>
          <li>Maintains multiple parallel FROST sessions to handle unresponsive signers</li>
          <li>Achieves completion within O(n-t) asynchronous rounds</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem ROAST Solves</h3>

      <p className="mb-4">
        Tim Ruffing explains why FROST alone isn't sufficient for real-world deployment:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "FROST can fail when signers don't respond. In asynchronous networks without
          message delay bounds, signing sessions can deadlock waiting for non-responsive signers."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <Definition title="The Robustness Problem">
        <p>
          In a <InlineMath>t</InlineMath>-of-<InlineMath>n</InlineMath> threshold scheme:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>FROST requires <InlineMath>t</InlineMath> signers to complete the protocol</li>
          <li>If any selected signer goes offline, the session fails</li>
          <li>Retrying with a different set may also fail</li>
          <li>A malicious minority can prevent signing indefinitely</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">ROAST Architecture</h3>

      <p className="mb-4">
        ROAST (Robust Asynchronous Schnorr Threshold signatures) is a wrapper protocol:
      </p>

      <Example title="ROAST vs FROST">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-dark-100">FROST Alone</p>
            <p className="text-sm text-dark-300 mt-1">
              Single session, fails if any participant unresponsive, requires timeout handling.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">ROAST + FROST</p>
            <p className="text-sm text-dark-300 mt-1">
              Multiple parallel sessions, completes as long as <InlineMath>t</InlineMath> honest
              signers participate, no timeouts needed.
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Key Insight</h3>

      <p className="mb-4">
        ROAST's clever trick is tracking signer responsiveness across sessions:
      </p>

      <Definition title="Responsive vs Pending Signers">
        <p>
          ROAST maintains two categories:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Responsive:</strong> Signers who have replied to the current round</li>
          <li><strong>Pending:</strong> Signers awaiting response in some session</li>
        </ul>
        <p className="mt-2">
          The key invariant: <em>"Every signer is pending in at most one session."</em>
        </p>
      </Definition>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "By ensuring every signer is pending in at most one session, the protocol guarantees
          at least one session will complete within n-t+1 attempts."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Flow</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Coordinator starts initial FROST session with some <InlineMath>t</InlineMath> signers</li>
          <li>When a signer responds, mark them responsive</li>
          <li>If stuck (waiting for unresponsive signer), start new session with responsive signers</li>
          <li>Continue until some session completes with <InlineMath>t</InlineMath> responses</li>
          <li>Output the aggregated signature from that session</li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Performance Results</h3>

      <p className="mb-4">
        Tim presents experimental results from their implementation:
      </p>

      <Example title="Experimental Performance">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Metric</th>
              <th className="pb-2">Result</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Completion Time</td>
              <td className="text-indigo-400">~3 seconds consistently</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Byzantine Tolerance</td>
              <td>Maintained performance despite malicious actors</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Memory</td>
              <td>O(n) storage requirement</td>
            </tr>
            <tr>
              <td className="py-2">Rounds (Theoretical)</td>
              <td>O(n-t) worst case</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Coordinator Considerations</h3>

      <p className="mb-4">
        The coordinator role can be decentralized while preserving security:
      </p>

      <Callout type="info" title="Coordinator Properties">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Coordinator only facilitates; cannot forge signatures</li>
          <li>Multiple coordinators can run simultaneously</li>
          <li>Coordinator can be replicated for fault tolerance</li>
          <li>Any honest participant can serve as coordinator</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Guarantees</h3>

      <p className="mb-4">
        ROAST inherits FROST's security while adding robustness:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">From FROST</p>
          <p className="text-sm text-dark-300">
            Unforgeability under the OMDL assumption in the random oracle model.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">From ROAST</p>
          <p className="text-sm text-dark-300">
            Guaranteed completion as long as <InlineMath>t</InlineMath> honest signers exist.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Resources</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="space-y-2 text-dark-300 text-sm">
          <li>
            <strong className="text-dark-100">Paper:</strong>{' '}
            <code className="text-indigo-400">eprint.iacr.org/2022/550.pdf</code>
          </li>
          <li>
            <strong className="text-dark-100">Implementation:</strong>{' '}
            <code className="text-indigo-400">github.com/robot-dreams/roast</code>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: Robustness in Threshold Protocols
          </p>
          <p className="text-sm text-dark-500">Why robustness matters</p>
        </a>
        <a
          href="#/section/9"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 9: Asynchronous Networks
          </p>
          <p className="text-sm text-dark-500">Network model considerations</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
