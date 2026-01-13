import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <h2>Smart Contract Integration</h2>

      <p>
        Integrating FROST signatures with smart contract platforms like Ethereum
        presents unique challenges, as most platforms natively support ECDSA rather
        than Schnorr signatures.
      </p>

      <h3>The Compatibility Challenge</h3>

      <Definition title="Signature Format Mismatch">
        <p>Most EVM chains use ECDSA with a specific format:</p>
        <MathBlock>
          {`\\text{ECDSA: } (r, s, v) \\text{ format with recovery}`}
        </MathBlock>
        <MathBlock>
          {`\\text{Schnorr (FROST): } (R, z) \\text{ format}`}
        </MathBlock>
        <p className="mt-4">
          These formats are incompatible, requiring adaptation strategies.
        </p>
      </Definition>

      <h3>Approach 1: Precompile Addition</h3>

      <Example title="Schnorr Verification Precompile">
        <p>
          The cleanest solution is adding native Schnorr verification to the platform:
        </p>
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto mt-3">
{`// Hypothetical Schnorr precompile
function verifySchnorr(
    bytes32 publicKeyX,
    uint8 publicKeyParity,
    bytes32 R_x,
    uint8 R_parity,
    bytes32 z,
    bytes32 message
) returns (bool)`}
        </pre>
        <p className="mt-3">
          This requires protocol-level changes (EIP for Ethereum) but provides
          the most efficient solution.
        </p>
      </Example>

      <h3>Approach 2: Zero-Knowledge Proofs</h3>

      <Definition title="ZK-SNARK Verification">
        <p>
          Verify the FROST signature off-chain, then prove correct verification on-chain:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Public inputs:</strong> message <InlineMath>{`m`}</InlineMath>,
            public key <InlineMath>{`Y`}</InlineMath>
          </li>
          <li>
            <strong>Private inputs:</strong> signature{' '}
            <InlineMath>{`(R, z)`}</InlineMath>
          </li>
          <li>
            <strong>Circuit proves:</strong>{' '}
            <InlineMath>{`[z]G = R + [H(R, Y, m)]Y`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Example title="ZK Verification Cost">
        <p>Approximate gas costs on Ethereum:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>Native ECDSA:</strong> approximately 3,000 gas
          </li>
          <li>
            <strong>Groth16 proof verification:</strong> approximately 200,000 gas
          </li>
          <li>
            <strong>PLONK proof verification:</strong> approximately 300,000 gas
          </li>
        </ul>
        <p className="mt-3">
          ZK verification is significantly more expensive but works without
          protocol changes.
        </p>
      </Example>

      <h3>Approach 3: Threshold ECDSA</h3>

      <Callout type="info">
        <strong>Alternative:</strong> Instead of adapting FROST to smart contracts,
        use threshold ECDSA which is natively compatible. Trade-offs:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>More communication rounds than FROST</li>
          <li>More complex protocol</li>
          <li>Native compatibility with existing infrastructure</li>
        </ul>
      </Callout>

      <h3>Cross-Chain Applications</h3>

      <Example title="Bitcoin-Ethereum Bridge">
        <p>FROST enables trust-minimized cross-chain bridges:</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>
            <strong>Lock:</strong> Bitcoin locked in FROST-controlled address
          </li>
          <li>
            <strong>Mint:</strong> Wrapped BTC minted on Ethereum
          </li>
          <li>
            <strong>Burn:</strong> Wrapped BTC burned, FROST signs Bitcoin release
          </li>
        </ol>
        <p className="mt-3">
          The FROST threshold ensures no single bridge operator can steal funds.
        </p>
      </Example>

      <h3>Ethereum 2.0 / Proof of Stake</h3>

      <Definition title="Validator Key Management">
        <p>
          FROST can protect Ethereum validator keys:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Withdrawal key:</strong> FROST-shared for high security
          </li>
          <li>
            <strong>Signing key:</strong> Potentially FROST-shared if latency permits
          </li>
          <li>
            <strong>Benefit:</strong> Slashing protection through threshold control
          </li>
        </ul>
      </Definition>

      <h3>Layer 2 Integration</h3>

      <Example title="Rollup Sequencer Keys">
        <p>Layer 2 rollups can use FROST for sequencer key management:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            Multiple sequencer operators share signing authority
          </li>
          <li>
            Threshold prevents single sequencer from censoring
          </li>
          <li>
            On-chain: Still appears as single signature
          </li>
        </ul>
      </Example>

      <Callout type="warning">
        <strong>Latency Considerations:</strong> Smart contract interactions often
        require low-latency signing. Ensure FROST participants are geographically
        distributed appropriately and preprocessing is adequate for expected
        transaction volume.
      </Callout>
    </LessonLayout>
  );
}
