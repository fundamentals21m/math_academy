import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <h2>Multi-Party Computation Integration</h2>

      <p>
        FROST can serve as a building block in larger multi-party computation (MPC)
        protocols. Understanding how threshold signatures integrate with general MPC
        opens up powerful applications.
      </p>

      <h3>MPC Fundamentals</h3>

      <Definition title="Secure Multi-Party Computation">
        <p>
          MPC allows parties <InlineMath>{`P_1, \\ldots, P_n`}</InlineMath> with private
          inputs <InlineMath>{`x_1, \\ldots, x_n`}</InlineMath> to compute:
        </p>
        <MathBlock>
          {`y = f(x_1, \\ldots, x_n)`}
        </MathBlock>
        <p className="mt-4">
          such that:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Each party learns only <InlineMath>{`y`}</InlineMath> (nothing about other inputs)</li>
          <li>No single party learns the computation's intermediate values</li>
          <li>The result is correct even if some parties are malicious</li>
        </ul>
      </Definition>

      <h3>FROST as MPC Subprotocol</h3>

      <p>
        In larger MPC protocols, FROST can provide authenticated channels and
        output commitment:
      </p>

      <Example title="MPC with FROST Signatures">
        <p>Consider a protocol for private auctions:</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>
            <strong>Input:</strong> Each bidder's private bid (MPC secret-shared)
          </li>
          <li>
            <strong>Computation:</strong> MPC determines winner without revealing bids
          </li>
          <li>
            <strong>Output:</strong> FROST signature on winning bid commitment
          </li>
        </ol>
        <p className="mt-3">
          The FROST signature proves the auction result is authentic without
          revealing individual bids.
        </p>
      </Example>

      <h3>Combining Secret Sharing Schemes</h3>

      <Theorem title="Share Compatibility">
        <p>
          FROST's Shamir shares can integrate with other MPC share types through
          conversion protocols:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Additive to Shamir:</strong> Multiply additive shares by Lagrange
            coefficient inverses
          </li>
          <li>
            <strong>Shamir to Additive:</strong> Multiply Shamir shares by their
            Lagrange coefficients
          </li>
          <li>
            <strong>Replicated shares:</strong> Can be converted to/from both types
          </li>
        </ul>
      </Theorem>

      <h3>Application: Decentralized Exchanges</h3>

      <Example title="DEX Architecture">
        <p>A decentralized exchange combining MPC and FROST:</p>
        <MathBlock>
          {`\\text{Trade execution: MPC computation}`}
        </MathBlock>
        <MathBlock>
          {`\\text{Settlement: FROST signature}`}
        </MathBlock>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Privacy:</strong> Trade logic never revealed
          </li>
          <li>
            <strong>Keys:</strong> Never exist in one place
          </li>
          <li>
            <strong>Trust:</strong> Distributed across multiple operators
          </li>
        </ul>
      </Example>

      <h3>Authenticated Channels</h3>

      <Definition title="MPC Message Authentication">
        <p>
          FROST provides authenticated channels within MPC protocols:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            MPC messages signed with participant's FROST share
          </li>
          <li>
            Threshold prevents minority from forging messages
          </li>
          <li>
            Combines authentication with MPC's privacy guarantees
          </li>
        </ul>
      </Definition>

      <h3>Composability Considerations</h3>

      <Callout type="warning">
        <strong>Security Under Composition:</strong> When FROST is used as a subprotocol:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            Ensure nonces are unique across all protocol invocations
          </li>
          <li>
            Domain-separate hash functions from outer protocol
          </li>
          <li>
            Consider concurrent security requirements
          </li>
          <li>
            Verify the composition doesn't break security assumptions
          </li>
        </ul>
      </Callout>

      <h3>Performance Characteristics</h3>

      <Example title="MPC + FROST Overhead">
        <p>Compared to MPC alone:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>Communication:</strong> Additional round for signature aggregation
          </li>
          <li>
            <strong>Computation:</strong> Elliptic curve operations for signing
          </li>
          <li>
            <strong>Storage:</strong> Preprocessing commitments for each signature
          </li>
        </ul>
        <p className="mt-3">
          For most applications, the FROST overhead is small compared to the
          general MPC computation.
        </p>
      </Example>

      <Callout type="info">
        <strong>Design Principle:</strong> Use FROST for the signature/commitment
        layer of MPC protocols, not for general computation. FROST excels at threshold
        authentication but is not a general MPC framework.
      </Callout>
    </LessonLayout>
  );
}
