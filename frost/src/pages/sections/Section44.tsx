import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <h2>Proactive Secret Sharing (Share Refreshing)</h2>

      <p>
        Long-lived secret shares are at risk of gradual compromise. Over time, an attacker might
        slowly gather shares from different participants. <strong>Proactive secret sharing</strong>{' '}
        addresses this by periodically refreshing shares without changing the underlying secret.
      </p>

      <h3>The Problem</h3>

      <Definition title="Mobile Adversary">
        <p>
          A <strong>mobile adversary</strong> can corrupt different participants at different
          times:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Time period 1: Corrupts <InlineMath>{`P_1`}</InlineMath>, learns{' '}
            <InlineMath>{`s_1`}</InlineMath>
          </li>
          <li>
            Time period 2: Corrupts <InlineMath>{`P_2`}</InlineMath>, learns{' '}
            <InlineMath>{`s_2`}</InlineMath>
          </li>
          <li>...</li>
          <li>
            Eventually: Has <InlineMath>{`t`}</InlineMath> shares, can reconstruct{' '}
            <InlineMath>{`s`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Callout type="warning">
        <strong>The Threat:</strong> Even if the adversary never controls{' '}
        <InlineMath>{`t`}</InlineMath> parties simultaneously, they can accumulate enough
        information over time to reconstruct the secret.
      </Callout>

      <h3>The Solution: Share Refreshing</h3>

      <Definition title="Core Idea">
        <p>Periodically generate new shares of the same secret:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Old shares become useless</li>
          <li>
            Secret <InlineMath>{`s`}</InlineMath> remains unchanged
          </li>
          <li>
            Public key <InlineMath>{`Y`}</InlineMath> remains unchanged
          </li>
          <li>Attacker's accumulated knowledge becomes stale</li>
        </ul>
      </Definition>

      <h3>Mathematical Technique</h3>

      <Definition title="Setup">
        <p>
          Original secret <InlineMath>{`s = f(0)`}</InlineMath> for polynomial{' '}
          <InlineMath>{`f`}</InlineMath> of degree <InlineMath>{`t-1`}</InlineMath>.
        </p>
        <p className="mt-3">
          Current shares: <InlineMath>{`s_1 = f(1), s_2 = f(2), \\ldots, s_n = f(n)`}</InlineMath>
        </p>
      </Definition>

      <Definition title="Refresh Protocol">
        <p>
          Each participant <InlineMath>{`P_i`}</InlineMath> generates a random polynomial{' '}
          <InlineMath>{`g_i(x)`}</InlineMath> of degree <InlineMath>{`t-1`}</InlineMath> with:
        </p>
        <MathBlock>{`g_i(0) = 0`}</MathBlock>
        <p className="mt-3">
          This is crucial: the constant term is zero, so adding{' '}
          <InlineMath>{`g_i`}</InlineMath> doesn't change the secret.
        </p>
      </Definition>

      <Example title="Polynomial Construction">
        <p>
          Participant <InlineMath>{`P_i`}</InlineMath> chooses random coefficients:
        </p>
        <MathBlock>{`g_i(x) = b_{i1} \\cdot x + b_{i2} \\cdot x^2 + \\cdots + b_{i(t-1)} \\cdot x^{t-1}`}</MathBlock>
        <p className="mt-3">
          Note: No constant term (equivalent to setting <InlineMath>{`b_{i0} = 0`}</InlineMath>).
        </p>
      </Example>

      <Definition title="Share Distribution">
        <p>
          Each <InlineMath>{`P_i`}</InlineMath> sends <InlineMath>{`g_i(j)`}</InlineMath> to
          participant <InlineMath>{`P_j`}</InlineMath> for all <InlineMath>{`j`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="New Share Computation">
        <p>
          Each participant <InlineMath>{`P_j`}</InlineMath> computes their new share:
        </p>
        <MathBlock>{`s'_j = s_j + \\sum_{i=1}^{n} g_i(j)`}</MathBlock>
      </Definition>

      <h3>Why It Works</h3>

      <Theorem title="Secret Preservation">
        <p>The new shares reconstruct to the same secret:</p>
        <MathBlock>{`\\sum_{j \\in S} s'_j \\cdot \\lambda_j = \\sum_{j \\in S} \\left( s_j + \\sum_{i=1}^{n} g_i(j) \\right) \\cdot \\lambda_j`}</MathBlock>
        <MathBlock>{`= \\sum_{j \\in S} s_j \\cdot \\lambda_j + \\sum_{j \\in S} \\sum_{i=1}^{n} g_i(j) \\cdot \\lambda_j`}</MathBlock>
        <MathBlock>{`= s + \\sum_{i=1}^{n} \\sum_{j \\in S} g_i(j) \\cdot \\lambda_j`}</MathBlock>
        <MathBlock>{`= s + \\sum_{i=1}^{n} g_i(0)`}</MathBlock>
        <MathBlock>{`= s + \\sum_{i=1}^{n} 0 = s \\quad \\checkmark`}</MathBlock>
      </Theorem>

      <Theorem title="Old Shares Useless">
        <p>
          Old shares <InlineMath>{`s_j`}</InlineMath> and new shares{' '}
          <InlineMath>{`s'_j`}</InlineMath> are statistically independent (given only{' '}
          <InlineMath>{`t-1`}</InlineMath> of each).
        </p>
        <p className="mt-3">
          An adversary with <InlineMath>{`t-1`}</InlineMath> old shares and{' '}
          <InlineMath>{`t-1`}</InlineMath> new shares still cannot reconstruct{' '}
          <InlineMath>{`s`}</InlineMath>.
        </p>
      </Theorem>

      <h3>Refresh Schedule</h3>

      <Definition title="Epoch-Based Refresh">
        <p>Define security epochs:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Epoch length:</strong> Time window where adversary can corrupt up to{' '}
            <InlineMath>{`t-1`}</InlineMath> parties
          </li>
          <li>
            <strong>Refresh timing:</strong> End of each epoch
          </li>
          <li>
            <strong>Security guarantee:</strong> Adversary must corrupt{' '}
            <InlineMath>{`t`}</InlineMath> parties within single epoch
          </li>
        </ul>
      </Definition>

      <Example title="Example Schedule">
        <p>For a high-security setup:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Epoch: 1 month</li>
          <li>Threshold: 3-of-5</li>
          <li>
            Security: Adversary must compromise 3 parties within 1 month
          </li>
          <li>
            After refresh, all previously stolen shares become worthless
          </li>
        </ul>
      </Example>

      <h3>Verifiable Refresh</h3>

      <Definition title="Adding Verification">
        <p>
          To ensure participants honestly perform refresh, use VSS commitments:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Each <InlineMath>{`P_i`}</InlineMath> publishes commitments{' '}
            <InlineMath>{`[b_{i1}]G, [b_{i2}]G, \\ldots`}</InlineMath>
          </li>
          <li>
            Recipients verify: <InlineMath>{`[g_i(j)]G = j \\cdot [b_{i1}]G + j^2 \\cdot [b_{i2}]G + \\cdots`}</InlineMath>
          </li>
          <li>
            Malicious contributions are detected and excluded
          </li>
        </ol>
      </Definition>

      <Callout type="success">
        <strong>The Power of Proactive Security:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>Defeats mobile/gradual adversaries</li>
          <li>No change to public key or addresses</li>
          <li>Can be done while system is operational</li>
          <li>Provides long-term security guarantees</li>
        </ul>
      </Callout>

      <h3>FROST Integration</h3>

      <p>
        Proactive refresh integrates naturally with FROST: the refreshed shares work identically
        in the signing protocol. The only change is periodic execution of the refresh protocol.
      </p>
    </LessonLayout>
  );
}
