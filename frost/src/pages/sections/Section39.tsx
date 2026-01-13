import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2>Comparison with Other Schemes</h2>

      <p>
        FROST is not the only threshold signature scheme. Let's compare it with alternatives to
        understand the design trade-offs.
      </p>

      <h3>Comparison Matrix</h3>

      <Definition title="Threshold Signature Schemes">
        <table className="w-full mt-4 text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Scheme</th>
              <th className="text-left py-2">Rounds</th>
              <th className="text-left py-2">Robust?</th>
              <th className="text-left py-2">Network</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2">Stinson-Strobl</td>
              <td className="py-2">4</td>
              <td className="py-2">Yes</td>
              <td className="py-2">High (all-to-all)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Gennaro et al.</td>
              <td className="py-2">3</td>
              <td className="py-2">Yes</td>
              <td className="py-2">High (DKG per sig)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">FROST</td>
              <td className="py-2">2 (1+preproc)</td>
              <td className="py-2">No</td>
              <td className="py-2">Low (preprocessing)</td>
            </tr>
            <tr>
              <td className="py-2">FROST2</td>
              <td className="py-2">2 (1+preproc)</td>
              <td className="py-2">No</td>
              <td className="py-2">Low (enhanced security)</td>
            </tr>
          </tbody>
        </table>
      </Definition>

      <h3>Stinson-Strobl (2001)</h3>

      <Definition title="Protocol Overview">
        <p>
          An early threshold Schnorr scheme with <strong>4 communication rounds</strong>:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Participants commit to nonce shares</li>
          <li>Participants reveal nonce shares</li>
          <li>Participants commit to signature shares</li>
          <li>Participants reveal signature shares</li>
        </ol>
      </Definition>

      <Example title="Trade-offs">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Pro:</strong> Robust - can identify and exclude misbehaving parties
          </li>
          <li>
            <strong>Pro:</strong> Proven secure with strong guarantees
          </li>
          <li>
            <strong>Con:</strong> 4 rounds of communication (slow)
          </li>
          <li>
            <strong>Con:</strong> All-to-all communication pattern
          </li>
        </ul>
      </Example>

      <h3>Gennaro et al. (2003)</h3>

      <Definition title="Protocol Overview">
        <p>
          A 3-round protocol that performs a mini-DKG for each signature:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Generate fresh nonce shares (like key generation)</li>
          <li>Verify shares</li>
          <li>Compute and reveal signature shares</li>
        </ol>
      </Definition>

      <Example title="Trade-offs">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Pro:</strong> Robust against malicious participants
          </li>
          <li>
            <strong>Pro:</strong> Simpler security analysis
          </li>
          <li>
            <strong>Con:</strong> 3 rounds per signature
          </li>
          <li>
            <strong>Con:</strong> Significant computation each signing (DKG-like)
          </li>
        </ul>
      </Example>

      <h3>FROST's Innovation</h3>

      <Theorem title="Key Insight">
        <p>FROST separates:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Preprocessing:</strong> Generate commitment pairs in advance (can be batched)
          </li>
          <li>
            <strong>Signing:</strong> Use preprocessed commitments in a single round
          </li>
        </ul>
        <p className="mt-3">
          Result: 1 round of actual signing (plus preprocessing that can happen offline).
        </p>
      </Theorem>

      <Callout type="info">
        <strong>The Trade-off:</strong> FROST achieves single-round signing by sacrificing{' '}
        <em>robustness</em>. If a participant misbehaves, the protocol aborts rather than
        continuing without them.
      </Callout>

      <h3>Robustness vs. Efficiency</h3>

      <Definition title="What Is Robustness?">
        <p>
          A <strong>robust</strong> threshold scheme can complete even if some participants
          misbehave (up to a limit). The protocol identifies bad actors and excludes them.
        </p>
        <p className="mt-3">
          A <strong>non-robust</strong> scheme (like FROST) aborts on any misbehavior. The bad
          actor is identified, but signing fails.
        </p>
      </Definition>

      <Example title="Robustness Comparison">
        <p>
          <strong>Robust scheme (Stinson-Strobl):</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Requires honest majority: <InlineMath>{`t \\leq n/2`}</InlineMath></li>
          <li>Can exclude up to <InlineMath>{`n - t`}</InlineMath> misbehaving parties</li>
          <li>Signing always succeeds with enough honest parties</li>
        </ul>
        <p className="mt-4">
          <strong>Non-robust scheme (FROST):</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Allows any threshold: <InlineMath>{`t \\leq n`}</InlineMath></li>
          <li>Single misbehaving party causes abort</li>
          <li>Misbehavior detected, culprit identified</li>
          <li>Retry without the bad actor</li>
        </ul>
      </Example>

      <h3>When to Use What</h3>

      <Definition title="FROST Is Best When">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Honest participants expected:</strong> Your own devices, trusted partners
          </li>
          <li>
            <strong>Low latency required:</strong> Interactive applications
          </li>
          <li>
            <strong>Bandwidth constrained:</strong> Mobile devices, limited networks
          </li>
          <li>
            <strong>Many signatures needed:</strong> Amortize preprocessing cost
          </li>
        </ul>
      </Definition>

      <Definition title="Robust Schemes Are Best When">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Untrusted participants:</strong> Open protocols, anonymous parties
          </li>
          <li>
            <strong>High availability required:</strong> Must complete despite attacks
          </li>
          <li>
            <strong>Latency less critical:</strong> Batch operations, non-interactive contexts
          </li>
        </ul>
      </Definition>

      <h3>MuSig2 Comparison</h3>

      <Example title="FROST vs. MuSig2">
        <p>
          MuSig2 is another multi-party Schnorr scheme, but it's{' '}
          <InlineMath>{`n`}</InlineMath>-of-<InlineMath>{`n`}</InlineMath> (all parties required):
        </p>
        <table className="w-full mt-4 text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Feature</th>
              <th className="text-left py-2">FROST</th>
              <th className="text-left py-2">MuSig2</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2">Threshold</td>
              <td className="py-2">t-of-n (flexible)</td>
              <td className="py-2">n-of-n only</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Rounds</td>
              <td className="py-2">2 (1 + preproc)</td>
              <td className="py-2">2</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Key aggregation</td>
              <td className="py-2">DKG required</td>
              <td className="py-2">Simple addition</td>
            </tr>
            <tr>
              <td className="py-2">Use case</td>
              <td className="py-2">Custody, recovery</td>
              <td className="py-2">Lightning channels</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="success">
        <strong>Summary:</strong> FROST optimizes for the common case where participants are
        honest, achieving remarkable efficiency. For adversarial settings, robust alternatives
        exist at the cost of additional communication rounds.
      </Callout>
    </LessonLayout>
  );
}
