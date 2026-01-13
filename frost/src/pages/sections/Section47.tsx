import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <h2>Lightning Network Integration</h2>

      <p>
        The Lightning Network enables fast, low-cost Bitcoin payments through payment channels.
        FROST can enhance Lightning by providing threshold security for channel operations while
        maintaining on-chain efficiency.
      </p>

      <h3>Lightning Channel Basics</h3>

      <Definition title="Payment Channel Structure">
        <p>A Lightning channel between Alice and Bob is funded by a 2-of-2 multisig:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Funding transaction:</strong> Locks coins to{' '}
            <InlineMath>{`\\text{PK}_A \\land \\text{PK}_B`}</InlineMath>
          </li>
          <li>
            <strong>Commitment transactions:</strong> Encode current balance distribution
          </li>
          <li>
            <strong>Close:</strong> Either party can broadcast latest commitment
          </li>
        </ul>
      </Definition>

      <h3>FROST-Enhanced Channels</h3>

      <Definition title="Threshold Lightning">
        <p>Replace individual keys with FROST keys:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Alice's side:</strong> 2-of-3 FROST key <InlineMath>{`Y_A`}</InlineMath>
          </li>
          <li>
            <strong>Bob's side:</strong> 3-of-5 FROST key <InlineMath>{`Y_B`}</InlineMath>
          </li>
          <li>
            <strong>Channel:</strong> MuSig aggregation of <InlineMath>{`Y_A`}</InlineMath> and{' '}
            <InlineMath>{`Y_B`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Example title="On-Chain Appearance">
        <p>Despite the complex authorization structure:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Funding output:</strong> Single Taproot address (aggregate of{' '}
            <InlineMath>{`Y_A + Y_B`}</InlineMath>)
          </li>
          <li>
            <strong>Cooperative close:</strong> Single 64-byte signature
          </li>
          <li>
            <strong>Observer sees:</strong> Standard 2-party channel (indistinguishable from
            single-key control)
          </li>
        </ul>
      </Example>

      <h3>Commitment Transactions</h3>

      <Definition title="FROST-Signed Commitments">
        <p>Each commitment transaction update requires:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Alice's FROST group produces a signature share</li>
          <li>Bob's FROST group produces a signature share</li>
          <li>Aggregated signature completes the commitment</li>
        </ol>
        <p className="mt-3">
          Both threshold groups must agree for channel state to update.
        </p>
      </Definition>

      <Example title="Payment Flow">
        <p>Alice pays Bob 10,000 sats:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Alice proposes new commitment (her balance down, Bob's up)
          </li>
          <li>
            Alice's 2-of-3 FROST group signs the new commitment
          </li>
          <li>
            Bob's 3-of-5 FROST group signs the new commitment
          </li>
          <li>
            Both hold valid commitment transactions
          </li>
          <li>
            Old commitments are revoked (revocation keys exchanged)
          </li>
        </ol>
      </Example>

      <h3>HTLC Operations</h3>

      <Definition title="Hash Time-Locked Contracts">
        <p>HTLCs enable multi-hop payments. With FROST:</p>
        <MathBlock>{`\\text{HTLC Output} = (Y_A \\land \\text{preimage}) \\lor (Y_B \\land \\text{timelock})`}</MathBlock>
        <p className="mt-3">Both <InlineMath>{`Y_A`}</InlineMath> and <InlineMath>{`Y_B`}</InlineMath> can be FROST keys.</p>
      </Definition>

      <Example title="HTLC Claim">
        <p>To claim an HTLC (reveal preimage path):</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Alice's FROST group signs with <InlineMath>{`Y_A`}</InlineMath>
          </li>
          <li>
            Reveal the preimage <InlineMath>{`r`}</InlineMath> such that{' '}
            <InlineMath>{`H(r) = h`}</InlineMath>
          </li>
          <li>
            Signature + preimage satisfies the HTLC script
          </li>
        </ol>
      </Example>

      <h3>Benefits</h3>

      <Callout type="success">
        <strong>Why FROST + Lightning:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Better key security:</strong> No single device controls channel funds
          </li>
          <li>
            <strong>Business use:</strong> Company treasury can run Lightning nodes with
            threshold authorization
          </li>
          <li>
            <strong>Recovery:</strong> Lost device doesn't mean lost channel
          </li>
          <li>
            <strong>Same fees:</strong> On-chain footprint unchanged
          </li>
        </ul>
      </Callout>

      <h3>Latency Considerations</h3>

      <Definition title="Interactive Requirements">
        <p>Lightning requires quick signature production for:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Payment forwarding:</strong> HTLC creation/resolution
          </li>
          <li>
            <strong>Channel updates:</strong> Balance changes
          </li>
          <li>
            <strong>Fee bumping:</strong> Anchor outputs, CPFP
          </li>
        </ul>
        <p className="mt-3">
          FROST's preprocessing helps: generate commitment pairs in advance, sign in one round.
        </p>
      </Definition>

      <Example title="Latency Budget">
        <p>For a routing node handling payments:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Without FROST:</strong> ~10ms per signature (local)
          </li>
          <li>
            <strong>With FROST (2-of-3):</strong> ~100ms (network round trip)
          </li>
          <li>
            <strong>HTLC timeout:</strong> Typically minutes to hours
          </li>
        </ul>
        <p className="mt-3">
          FROST latency is acceptable for Lightning given typical HTLC timeouts.
        </p>
      </Example>

      <h3>Watchtower Integration</h3>

      <Definition title="Threshold Watchtowers">
        <p>
          Watchtowers monitor for old commitment broadcasts. With FROST, watchtowers can be
          threshold-secured:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Revocation secrets shared among watchtower operators
          </li>
          <li>
            Threshold required to produce justice transaction
          </li>
          <li>
            No single watchtower can steal funds
          </li>
        </ul>
      </Definition>

      <h3>Channel Backup and Recovery</h3>

      <Example title="Disaster Recovery">
        <p>If Alice loses her primary device:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Her FROST share is on the lost device
          </li>
          <li>
            Remaining 2 devices (of 3) can still sign
          </li>
          <li>
            Initiate cooperative close with Bob
          </li>
          <li>
            Set up new device, reshare FROST key
          </li>
        </ol>
        <p className="mt-3">
          FROST provides resilience that single-key Lightning lacks.
        </p>
      </Example>

      <h3>Implementation Status</h3>

      <Definition title="Current State (2024)">
        <p>FROST for Lightning is actively being developed:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Research:</strong> Protocols defined, security analyzed
          </li>
          <li>
            <strong>Implementations:</strong> Early-stage in various Lightning clients
          </li>
          <li>
            <strong>Standardization:</strong> Work ongoing for interoperability
          </li>
        </ul>
      </Definition>

      <Callout type="info">
        <strong>The Future:</strong> As FROST implementations mature, expect Lightning nodes to
        offer threshold key management as a standard feature, enabling enterprise-grade security
        for Lightning operations.
      </Callout>
    </LessonLayout>
  );
}
