import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2>Why Abort-on-Misbehavior Is Acceptable</h2>

      <p>
        FROST is non-robust: a single misbehaving participant can cause the protocol to abort.
        At first glance, this seems like a serious limitation. Let's understand why it's actually
        acceptable in practice.
      </p>

      <h3>What Happens on Misbehavior</h3>

      <Definition title="Detection Mechanisms">
        <p>FROST detects misbehavior at several points:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>VSS verification:</strong> Invalid DKG shares detected via commitment check
          </li>
          <li>
            <strong>Signature share verification:</strong> Invalid{' '}
            <InlineMath>{`z_i`}</InlineMath> detected via:
            <MathBlock>{`[z_i]G \\stackrel{?}{=} R_i + [\\lambda_i \\cdot c]Y_i`}</MathBlock>
          </li>
          <li>
            <strong>Timeout:</strong> Non-responsive participants identified
          </li>
        </ul>
      </Definition>

      <Definition title="Identification">
        <p>
          When misbehavior is detected, the specific participant is identified. This enables:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Exclusion from future signing attempts</li>
          <li>Out-of-band investigation</li>
          <li>Potential penalties in permissioned systems</li>
        </ul>
      </Definition>

      <h3>The Practical Reality</h3>

      <Example title="Typical FROST Deployments">
        <p>Consider common use cases:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Personal custody (2-of-3):</strong> Your phone, laptop, hardware wallet.
            All your devices - why would they misbehave?
          </li>
          <li>
            <strong>Business custody (3-of-5):</strong> Company officers. If one is malicious,
            you have bigger problems than protocol abort.
          </li>
          <li>
            <strong>Federated systems:</strong> Known, accountable entities. Misbehavior has
            real-world consequences.
          </li>
        </ul>
      </Example>

      <Callout type="info">
        <strong>Key Insight:</strong> In most FROST deployments, participants have strong
        incentives to behave honestly. Abort is an exceptional case, not the norm.
      </Callout>

      <h3>Security vs. Liveness</h3>

      <Definition title="The Trade-off">
        <p>
          <strong>Security:</strong> FROST provides perfect unforgeability. An adversary
          controlling fewer than <InlineMath>{`t`}</InlineMath> parties cannot forge signatures.
        </p>
        <p className="mt-3">
          <strong>Liveness:</strong> FROST provides conditional liveness. Signing succeeds only
          if all <InlineMath>{`t`}</InlineMath> participating signers are honest.
        </p>
        <p className="mt-3">
          <strong>The Principle:</strong> Security must never be compromised. Liveness can be
          recovered by retrying with different participants.
        </p>
      </Definition>

      <h3>Mitigation Strategies</h3>

      <Example title="Strategy 1: Retry with Different Set">
        <p>
          If signing with <InlineMath>{`\\{P_1, P_2, P_3\\}`}</InlineMath> fails because{' '}
          <InlineMath>{`P_2`}</InlineMath> misbehaved:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Identify <InlineMath>{`P_2`}</InlineMath> as the culprit</li>
          <li>
            Retry with <InlineMath>{`\\{P_1, P_3, P_4\\}`}</InlineMath>
          </li>
          <li>Report/investigate <InlineMath>{`P_2`}</InlineMath></li>
        </ol>
      </Example>

      <Example title="Strategy 2: Redundant Participants">
        <p>
          For a 3-of-5 scheme, if you need exactly 3 honest parties:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>1 malicious: Still 4 honest, can sign with any 3</li>
          <li>2 malicious: Still 3 honest, can sign (barely)</li>
          <li>3+ malicious: Cannot sign, but also cannot forge</li>
        </ul>
        <p className="mt-3">
          Redundancy provides resilience against both malice and unavailability.
        </p>
      </Example>

      <Example title="Strategy 3: Preprocessing Buffer">
        <p>
          Maintain a buffer of preprocessing data:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Generate many commitment pairs in advance</li>
          <li>If a signing attempt fails, immediately retry with fresh commitments</li>
          <li>No waiting for new preprocessing</li>
        </ul>
      </Example>

      <h3>Comparison: Robust Alternative</h3>

      <Definition title="What Robustness Costs">
        <p>Robust schemes (like Stinson-Strobl) require:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>More rounds:</strong> 4 vs FROST's effective 1
          </li>
          <li>
            <strong>Stronger threshold:</strong>{' '}
            <InlineMath>{`t \\leq n/2`}</InlineMath> (honest majority)
          </li>
          <li>
            <strong>More communication:</strong> All-to-all messaging
          </li>
        </ul>
        <p className="mt-3">
          The cost of robustness is significant. For most practical scenarios, FROST's
          abort-on-misbehavior is preferable.
        </p>
      </Definition>

      <h3>When Abort Is Unacceptable</h3>

      <Callout type="warning">
        <strong>Consider robust alternatives when:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>Participants are anonymous or untrusted</li>
          <li>Single signature failure has catastrophic consequences</li>
          <li>Retry is not possible (time-critical operations)</li>
          <li>Denial-of-service attacks are a primary threat</li>
        </ul>
      </Callout>

      <h3>The Bottom Line</h3>

      <Theorem title="FROST's Design Philosophy">
        <p>FROST optimizes for the honest case:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>When honest:</strong> Fast, efficient, minimal communication
          </li>
          <li>
            <strong>When dishonest:</strong> Abort, identify, retry
          </li>
        </ul>
        <p className="mt-3">
          This is the right trade-off for custody, wallets, and most real-world applications
          where participants are known and have aligned incentives.
        </p>
      </Theorem>

      <p>
        The non-robust nature of FROST is a feature, not a bug. It enables the remarkable
        efficiency that makes threshold signatures practical for everyday use.
      </p>
    </LessonLayout>
  );
}
