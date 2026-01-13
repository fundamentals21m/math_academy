import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <h2>Threshold Changes (Dynamic Thresholds)</h2>

      <p>
        What if you need to change the threshold structure without changing the public key?
        Perhaps you want to add new participants, remove old ones, or adjust the threshold value.
        FROST supports this through <strong>share redistribution</strong>.
      </p>

      <h3>The Scenario</h3>

      <Definition title="Threshold Change">
        <p>
          Transform a <InlineMath>{`(t_1, n_1)`}</InlineMath>-threshold scheme to a{' '}
          <InlineMath>{`(t_2, n_2)`}</InlineMath>-threshold scheme:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Secret <InlineMath>{`s`}</InlineMath> remains unchanged
          </li>
          <li>
            Public key <InlineMath>{`Y = [s]G`}</InlineMath> remains unchanged
          </li>
          <li>
            New threshold <InlineMath>{`t_2`}</InlineMath> may differ from{' '}
            <InlineMath>{`t_1`}</InlineMath>
          </li>
          <li>
            New participant set may differ from original
          </li>
        </ul>
      </Definition>

      <Example title="Use Cases">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Adding security:</strong> Upgrade from 2-of-3 to 3-of-5
          </li>
          <li>
            <strong>Member changes:</strong> Replace departing employee's share
          </li>
          <li>
            <strong>Scaling:</strong> Increase <InlineMath>{`n`}</InlineMath> to add more
            participants
          </li>
          <li>
            <strong>Simplification:</strong> Reduce threshold for easier operations
          </li>
        </ul>
      </Example>

      <h3>The Protocol</h3>

      <Definition title="Step 1: Each Participant Reshares">
        <p>
          Each participant <InlineMath>{`P_i`}</InlineMath> with share{' '}
          <InlineMath>{`s_i`}</InlineMath> creates a new polynomial:
        </p>
        <MathBlock>{`f_i(x) \\text{ with } f_i(0) = s_i \\text{ and degree } t_2 - 1`}</MathBlock>
        <p className="mt-3">
          This polynomial has the participant's share as its constant term and uses the{' '}
          <em>new</em> threshold.
        </p>
      </Definition>

      <Example title="Polynomial Construction">
        <p>
          Participant <InlineMath>{`P_i`}</InlineMath> with share{' '}
          <InlineMath>{`s_i = 42`}</InlineMath>, upgrading to threshold{' '}
          <InlineMath>{`t_2 = 3`}</InlineMath>:
        </p>
        <MathBlock>{`f_i(x) = 42 + a_{i1} \\cdot x + a_{i2} \\cdot x^2`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{`a_{i1}, a_{i2}`}</InlineMath> are chosen randomly.
        </p>
      </Example>

      <Definition title="Step 2: Distribute to New Participants">
        <p>
          Each original participant <InlineMath>{`P_i`}</InlineMath> sends{' '}
          <InlineMath>{`f_i(j)`}</InlineMath> to each new participant{' '}
          <InlineMath>{`P'_j`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Step 3: New Participants Collect Shares">
        <p>
          Each new participant <InlineMath>{`P'_j`}</InlineMath> computes their new share:
        </p>
        <MathBlock>{`s'_j = \\sum_{i=1}^{n_1} f_i(j) \\cdot \\lambda_i`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{`\\lambda_i`}</InlineMath> are the Lagrange coefficients for the
          original participant set.
        </p>
      </Definition>

      <h3>Mathematical Correctness</h3>

      <Theorem title="Secret Preservation">
        <p>The new shares reconstruct to the same secret:</p>
        <MathBlock>{`\\sum_{j \\in S'} s'_j \\cdot \\lambda'_j = \\sum_{j \\in S'} \\left( \\sum_{i=1}^{n_1} f_i(j) \\cdot \\lambda_i \\right) \\cdot \\lambda'_j`}</MathBlock>
        <p className="mt-3">Rearranging:</p>
        <MathBlock>{`= \\sum_{i=1}^{n_1} \\lambda_i \\sum_{j \\in S'} f_i(j) \\cdot \\lambda'_j`}</MathBlock>
        <MathBlock>{`= \\sum_{i=1}^{n_1} \\lambda_i \\cdot f_i(0)`}</MathBlock>
        <MathBlock>{`= \\sum_{i=1}^{n_1} \\lambda_i \\cdot s_i = s \\quad \\checkmark`}</MathBlock>
      </Theorem>

      <h3>Security Requirements</h3>

      <Callout type="warning">
        <strong>Important:</strong> The redistribution requires at least{' '}
        <InlineMath>{`t_1`}</InlineMath> honest original participants. If the adversary controls{' '}
        <InlineMath>{`t_1`}</InlineMath> original participants, they can:
        <ul className="list-disc list-inside mt-2">
          <li>Reconstruct the secret directly</li>
          <li>Create arbitrary new shares</li>
        </ul>
      </Callout>

      <Definition title="Security Guarantee">
        <p>If at least <InlineMath>{`t_1`}</InlineMath> original participants are honest:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Secret remains unknown to adversary</li>
          <li>New shares are valid Shamir shares</li>
          <li>
            New threshold <InlineMath>{`t_2`}</InlineMath> is enforced
          </li>
        </ul>
      </Definition>

      <h3>Practical Considerations</h3>

      <Example title="Verifiable Redistribution">
        <p>To prevent cheating during redistribution:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Original participants publish VSS commitments for their <InlineMath>{`f_i`}</InlineMath>
          </li>
          <li>
            New participants verify received values against commitments
          </li>
          <li>
            Complaints filed for mismatches
          </li>
          <li>
            Protocol aborts if verification fails
          </li>
        </ol>
      </Example>

      <Example title="Transitional Period">
        <p>During redistribution, both old and new schemes are valid:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Old participants can still sign with <InlineMath>{`t_1`}</InlineMath>-of-
            <InlineMath>{`n_1`}</InlineMath>
          </li>
          <li>
            New participants can sign once they receive all shares
          </li>
          <li>
            Coordinate to invalidate old shares after transition
          </li>
        </ul>
      </Example>

      <h3>Combined with Refresh</h3>

      <Definition title="Refresh + Redistribution">
        <p>
          Threshold change can be combined with proactive refresh:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Change threshold and refresh in a single protocol run
          </li>
          <li>
            Old shares become invalid for both reasons
          </li>
          <li>
            Maximum security against gradual compromise
          </li>
        </ul>
      </Definition>

      <h3>Example: 2-of-3 to 3-of-5</h3>

      <Example title="Upgrading Security">
        <p>Original setup: Alice, Bob, Charlie with 2-of-3 FROST.</p>
        <p className="mt-2">
          New setup: Alice, Bob, Charlie, Dave, Eve with 3-of-5 FROST.
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Alice, Bob, Charlie each create degree-2 polynomials</li>
          <li>Each sends evaluations to all five new participants</li>
          <li>Dave and Eve receive shares for the first time</li>
          <li>Alice, Bob, Charlie receive refreshed shares</li>
          <li>All verify using VSS commitments</li>
          <li>New 3-of-5 scheme is active</li>
        </ol>
      </Example>

      <Callout type="success">
        <strong>The Key Invariant:</strong> Through all these changes - threshold adjustments,
        participant additions, member removals - the public key{' '}
        <InlineMath>{`Y = [s]G`}</InlineMath> remains constant. On-chain addresses don't change,
        and existing funds remain accessible under the new authorization structure.
      </Callout>
    </LessonLayout>
  );
}
