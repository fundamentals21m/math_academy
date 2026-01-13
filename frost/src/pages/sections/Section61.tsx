import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <h2>Verifiable FROST (Byzantine Agreement)</h2>

      <p>
        Standard FROST relies on a coordinator to aggregate signature shares. What if
        the coordinator is malicious? Verifiable FROST extensions address this trust
        assumption through cryptographic verification.
      </p>

      <h3>The Coordinator Trust Problem</h3>

      <Definition title="Coordinator Capabilities">
        <p>A malicious coordinator in standard FROST can:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Refuse to aggregate (denial of service)</li>
          <li>Aggregate selectively (censor some participants)</li>
          <li>Claim invalid shares when they are valid</li>
          <li>Present different views to different participants</li>
        </ul>
        <p className="mt-4">
          However, a malicious coordinator <em>cannot</em> forge signatures or extract
          secret shares.
        </p>
      </Definition>

      <h3>Zero-Knowledge Verification</h3>

      <p>
        One approach to verifiable aggregation uses zero-knowledge proofs:
      </p>

      <Example title="ZK-Verified Aggregation">
        <p>The coordinator proves:</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Used correct Lagrange coefficients for the signing set</li>
          <li>Summed all signature shares <InlineMath>{`z_i`}</InlineMath> correctly</li>
          <li>Verified all shares before aggregating</li>
        </ol>
        <MathBlock>
          {`\\text{Output: } (R, z, \\pi)`}
        </MathBlock>
        <p className="mt-3">
          where <InlineMath>{`\\pi`}</InlineMath> is a ZK-SNARK proof of correct computation.
        </p>
      </Example>

      <h3>Trade-offs</h3>

      <Callout type="info">
        <strong>Verifiable vs. Standard FROST:</strong>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>Proof generation:</strong> Additional computational overhead for coordinator
          </li>
          <li>
            <strong>Proof verification:</strong> Additional verification step for participants
          </li>
          <li>
            <strong>Signature size:</strong> Proof adds to output size
          </li>
          <li>
            <strong>Trust assumption:</strong> No coordinator trust required
          </li>
        </ul>
      </Callout>

      <h3>Byzantine Agreement Integration</h3>

      <Definition title="BFT-FROST">
        <p>
          Integrating FROST with Byzantine Fault Tolerant consensus provides strong
          guarantees:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Agreement:</strong> All honest parties output the same signature
          </li>
          <li>
            <strong>Validity:</strong> If all parties are honest, signature is produced
          </li>
          <li>
            <strong>Termination:</strong> Protocol completes in bounded time
          </li>
        </ul>
      </Definition>

      <Example title="BFT-FROST Protocol Sketch">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Each participant broadcasts their signature share
          </li>
          <li>
            Run BFT consensus on the set of valid shares
          </li>
          <li>
            All parties agree on which shares to aggregate
          </li>
          <li>
            Each party locally computes the aggregate signature
          </li>
        </ol>
        <p className="mt-3">
          This eliminates the coordinator role entirely, at the cost of additional
          communication rounds.
        </p>
      </Example>

      <h3>Decentralized Coordinator Selection</h3>

      <Theorem title="Rotating Coordinator">
        <p>
          An alternative to full BFT is rotating coordinator with accountability:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            Coordinator selected by deterministic function of round/message
          </li>
          <li>
            Each coordinator's actions are logged and verifiable
          </li>
          <li>
            Misbehaving coordinators can be identified and excluded
          </li>
          <li>
            If coordinator fails, next participant takes over
          </li>
        </ul>
      </Theorem>

      <h3>Application: Decentralized Custody</h3>

      <Example title="Decentralized Exchange Example">
        <p>
          A decentralized exchange using FROST for custody:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>Participants:</strong> Exchange operators distributed globally
          </li>
          <li>
            <strong>Threshold:</strong> 5-of-9 for withdrawals
          </li>
          <li>
            <strong>Requirement:</strong> No single operator can censor withdrawals
          </li>
          <li>
            <strong>Solution:</strong> BFT-FROST ensures any 5 honest operators can
            complete signing
          </li>
        </ul>
      </Example>

      <Callout type="warning">
        <strong>Complexity Trade-off:</strong> Verifiable FROST variants add significant
        complexity. For most use cases (personal custody, trusted institution), standard
        FROST with a trusted coordinator is simpler and sufficient. Reserve verifiable
        variants for high-stakes decentralized applications.
      </Callout>
    </LessonLayout>
  );
}
