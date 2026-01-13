import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { SigningRoundVisualizer } from '@/components/visualizations/SigningRoundVisualizer';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2>Phase 3: Signing (Single Round!)</h2>

      <p>
        With key generation complete and preprocessing done in advance, FROST achieves its
        remarkable efficiency: <strong>single-round signing</strong>. This is where all the
        mathematical machinery comes together to produce a threshold signature.
      </p>

      <Callout type="info">
        <strong>The Goal:</strong> Given a message <InlineMath>{`m`}</InlineMath> and a signing
        set <InlineMath>{`S \\subseteq \\{1, \\ldots, n\\}`}</InlineMath> with{' '}
        <InlineMath>{`|S| = t`}</InlineMath>, produce a valid Schnorr signature in one communication round.
      </Callout>

      <SigningRoundVisualizer />

      <h3>Input Requirements</h3>

      <p>The signing phase requires:</p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          Message <InlineMath>{`m`}</InlineMath> to sign
        </li>
        <li>
          Signing set <InlineMath>{`S \\subseteq \\{1, \\ldots, n\\}`}</InlineMath> with{' '}
          <InlineMath>{`|S| = t`}</InlineMath>
        </li>
        <li>
          Unused commitment pair <InlineMath>{`(D_{ij}, E_{ij})`}</InlineMath> from each participant
        </li>
      </ul>

      <h3>Coordinator Actions</h3>

      <Definition title="Commitment List Construction">
        <p>The coordinator (any participant) performs:</p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>
            Select next unused commitment from each participant in <InlineMath>{`S`}</InlineMath>:
            take next unused <InlineMath>{`(D_{ij}, E_{ij})`}</InlineMath> for each{' '}
            <InlineMath>{`i \\in S`}</InlineMath>
          </li>
          <li>
            Construct commitment list:
            <MathBlock>{`B = [(i, D_{ij}, E_{ij}) : i \\in S]`}</MathBlock>
          </li>
          <li>
            Send <InlineMath>{`(m, B)`}</InlineMath> to all signers in <InlineMath>{`S`}</InlineMath>
          </li>
        </ol>
      </Definition>

      <h3>Each Signer's Computation</h3>

      <p>
        Each signer <InlineMath>{`P_i \\in S`}</InlineMath> performs the following steps:
      </p>

      <Definition title="Step 1: Message Verification">
        <p>
          Verify message <InlineMath>{`m`}</InlineMath> is acceptable (policy check, not crypto).
        </p>
      </Definition>

      <Definition title="Step 2: Binding Value">
        <p>Compute the binding value:</p>
        <MathBlock>{`\\rho_i = H_1(i, m, B)`}</MathBlock>
        <p className="mt-2">
          This binds the signer's contribution to the message and all commitments.
        </p>
      </Definition>

      <Definition title="Step 3: Own Commitment Contribution">
        <p>Compute own commitment contribution:</p>
        <MathBlock>{`R_i = D_{ij} + [\\rho_i]E_{ij}`}</MathBlock>
      </Definition>

      <Definition title="Step 4: Group Commitment">
        <p>Compute group commitment:</p>
        <MathBlock>{`R = \\sum_{k \\in S} R_k`}</MathBlock>
      </Definition>

      <Definition title="Step 5: Challenge">
        <p>Compute challenge:</p>
        <MathBlock>{`c = H_2(R, Y, m)`}</MathBlock>
      </Definition>

      <Definition title="Step 6: Lagrange Coefficient">
        <p>Compute Lagrange coefficient for participant <InlineMath>{`i`}</InlineMath>:</p>
        <MathBlock>{`\\lambda_i = \\prod_{k \\in S, k \\neq i} \\frac{0 - k}{i - k}`}</MathBlock>
      </Definition>

      <Definition title="Step 7: Signature Share">
        <p>Compute signature share:</p>
        <MathBlock>{`z_i = d_{ij} + e_{ij} \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c`}</MathBlock>
      </Definition>

      <Callout type="warning">
        <strong>Step 8: CRITICAL - Secure Deletion</strong>
        <p className="mt-2">
          Securely delete <InlineMath>{`(d_{ij}, e_{ij})`}</InlineMath> immediately! These nonces
          must never be reused.
        </p>
      </Callout>

      <Definition title="Step 9: Send Share">
        <p>
          Send <InlineMath>{`z_i`}</InlineMath> to coordinator.
        </p>
      </Definition>

      <h3>Coordinator Verification and Aggregation</h3>

      <Theorem title="Share Verification Equation">
        <p>
          For each <InlineMath>{`i \\in S`}</InlineMath>, verify the signature share:
        </p>
        <MathBlock>{`[z_i]G \\stackrel{?}{=} R_i + [\\lambda_i \\cdot c]Y_i`}</MathBlock>
      </Theorem>

      <p>
        If all shares are valid, aggregate:
      </p>

      <MathBlock>{`z = \\sum_{i \\in S} z_i`}</MathBlock>

      <p>Output the final signature:</p>

      <MathBlock>{`\\sigma = (R, z)`}</MathBlock>

      <h3>Why Verification Works</h3>

      <Example title="Share Verification Proof">
        <p>Starting from the signature share formula:</p>
        <MathBlock>{`z_i = d_{ij} + e_{ij} \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c`}</MathBlock>
        <p className="mt-3">Multiply both sides by G:</p>
        <MathBlock>{`[z_i]G = [d_{ij}]G + [e_{ij} \\cdot \\rho_i]G + [\\lambda_i \\cdot s_i \\cdot c]G`}</MathBlock>
        <p className="mt-3">Substitute known values:</p>
        <MathBlock>{`[z_i]G = D_{ij} + [\\rho_i]E_{ij} + [\\lambda_i \\cdot c]Y_i`}</MathBlock>
        <p className="mt-3">
          Since <InlineMath>{`R_i = D_{ij} + [\\rho_i]E_{ij}`}</InlineMath>:
        </p>
        <MathBlock>{`[z_i]G = R_i + [\\lambda_i \\cdot c]Y_i \\quad \\checkmark`}</MathBlock>
      </Example>

      <Callout type="info">
        <strong>Single Round Achievement:</strong> After preprocessing, signing requires only one
        round of communication: coordinator sends <InlineMath>{`(m, B)`}</InlineMath>, each signer
        responds with <InlineMath>{`z_i`}</InlineMath>. No back-and-forth!
      </Callout>

      <h3>The Complete Picture</h3>

      <p>
        The signature share combines three critical elements:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4">
        <li>
          <strong>Nonce contribution:</strong> <InlineMath>{`d_{ij} + e_{ij} \\cdot \\rho_i`}</InlineMath> (from preprocessing)
        </li>
        <li>
          <strong>Secret share:</strong> <InlineMath>{`s_i`}</InlineMath> (from DKG)
        </li>
        <li>
          <strong>Lagrange weighting:</strong> <InlineMath>{`\\lambda_i`}</InlineMath> (enables reconstruction)
        </li>
      </ol>

      <p>
        The binding value <InlineMath>{`\\rho_i`}</InlineMath> ensures that each participant's
        contribution is tied to this specific signing session, preventing the parallel session
        attacks we discussed earlier.
      </p>
    </LessonLayout>
  );
}
