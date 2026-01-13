import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <h2>State Management and Nonce Deletion</h2>

      <p>
        Proper state management is critical for FROST security. Each participant must
        carefully track the lifecycle of nonces and ensure they are securely deleted
        after use.
      </p>

      <h3>Participant State Machine</h3>

      <Definition title="State Transitions">
        <p>Each FROST participant operates as a state machine:</p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>
            <strong>KEY_GENERATED:</strong> After DKG completes, holds secret share{' '}
            <InlineMath>{`s_i`}</InlineMath>
          </li>
          <li>
            <strong>PREPROCESSED:</strong> After generating commitment pairs{' '}
            <InlineMath>{`(d_{ij}, e_{ij})`}</InlineMath>
          </li>
          <li>
            <strong>SIGNING:</strong> During signature share computation
          </li>
          <li>
            <strong>COMPLETED:</strong> After signature share sent, nonces deleted
          </li>
        </ol>
      </Definition>

      <h3>Preprocessing State</h3>

      <Example title="After Preprocessing">
        <p>Each participant stores:</p>
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto mt-2">
{`Store: (d_ij, e_ij) encrypted at rest
Track: Used/unused status for each pair
Index: Which commitment pair corresponds to which public (D_ij, E_ij)`}
        </pre>
        <p className="mt-3">
          The nonces must be stored securely (encrypted) but also accessible
          for the signing operation.
        </p>
      </Example>

      <h3>Signing State Transitions</h3>

      <p>The signing phase involves critical state transitions:</p>

      <Example title="Signing State Protocol">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`1. Mark (d_ij, e_ij) as "in use"
2. Compute z_i = d_ij + e_ij * rho_i + lambda_i * s_i * c
3. Securely erase (d_ij, e_ij)
4. Mark commitment pair as "used" (never reuse)
5. Send z_i to coordinator`}
        </pre>
      </Example>

      <Callout type="warning">
        <strong>Critical Rule:</strong> Step 3 (secure erasure) must happen{' '}
        <em>before</em> step 5 (sending the signature share). If the nonces are
        not deleted and the share is sent, a later compromise could extract the
        secret share.
      </Callout>

      <h3>Secure Erasure Protocol</h3>

      <Definition title="Memory Zeroization">
        <p>Proper secure deletion requires multiple steps:</p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Overwrite memory with zeros</li>
          <li>Overwrite memory with random data</li>
          <li>Overwrite memory with zeros again</li>
          <li>Flush CPU caches if applicable</li>
          <li>On hardware wallets: erase the flash sector</li>
        </ol>
      </Definition>

      <p>
        Simple deallocation (<code>free()</code> in C, or letting a variable go
        out of scope) is <em>not</em> sufficient - the data may remain in memory
        until overwritten by other operations.
      </p>

      <h3>Concurrent Signing Sessions</h3>

      <Callout type="info">
        <strong>Important:</strong> Each signing session must use a different
        commitment pair. If a participant is involved in multiple concurrent
        signing sessions, they must maintain separate state for each:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Track which commitment pair is used for which session</li>
          <li>Never use the same pair for two sessions</li>
          <li>Handle session failures gracefully (mark pair as used anyway)</li>
        </ul>
      </Callout>

      <h3>Recovery from Failures</h3>

      <Example title="Failure Scenarios">
        <p><strong>Scenario 1: Network failure during signing</strong></p>
        <p className="mt-2">
          If the signature share was computed but not sent, the nonces are already
          deleted. The commitment pair is "burned" and cannot be reused.
        </p>

        <p className="mt-4"><strong>Scenario 2: Participant crash during signing</strong></p>
        <p className="mt-2">
          On restart, mark all "in use" commitment pairs as "used" (conservatively
          assume they may have been exposed).
        </p>

        <p className="mt-4"><strong>Scenario 3: Coordinator misbehavior</strong></p>
        <p className="mt-2">
          If the coordinator requests the same commitment twice, detect and abort.
          Each commitment should only appear in one signing request.
        </p>
      </Example>

      <h3>State Persistence</h3>

      <Theorem title="State Requirements">
        <p>Participant state must satisfy:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Durability:</strong> Secret share{' '}
            <InlineMath>{`s_i`}</InlineMath> survives restarts
          </li>
          <li>
            <strong>Confidentiality:</strong> All secrets encrypted at rest
          </li>
          <li>
            <strong>Consistency:</strong> Used/unused status never regresses
          </li>
          <li>
            <strong>Atomicity:</strong> State transitions complete fully or not at all
          </li>
        </ul>
      </Theorem>
    </LessonLayout>
  );
}
