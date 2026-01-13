import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section67() {
  return (
    <LessonLayout sectionId={67}>
      <h2>Standardization Efforts</h2>

      <p>
        FROST has been officially standardized by the Internet Engineering Task Force
        (IETF) as RFC 9591, published in June 2024. This standardization ensures
        interoperability between implementations and provides clear security guidance.
      </p>

      <h3>IETF RFC 9591</h3>

      <Definition title="RFC 9591 Overview">
        <p>
          RFC 9591 specifies FROST (Flexible Round-Optimized Schnorr Threshold Signatures)
          including:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Complete protocol specification</li>
          <li>Security considerations and requirements</li>
          <li>Test vectors for interoperability</li>
          <li>Multiple ciphersuites for different curves</li>
        </ul>
      </Definition>

      <h3>Defined Ciphersuites</h3>

      <Example title="FROST Ciphersuites">
        <p>RFC 9591 defines ciphersuites for common elliptic curves:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>FROST(Ed25519, SHA-512):</strong> For general-purpose use
          </li>
          <li>
            <strong>FROST(Ed448, SHAKE256):</strong> Higher security level
          </li>
          <li>
            <strong>FROST(ristretto255, SHA-512):</strong> Prime-order group variant
          </li>
          <li>
            <strong>FROST(P-256, SHA-256):</strong> NIST curve compatibility
          </li>
          <li>
            <strong>FROST(secp256k1, SHA-256):</strong> Bitcoin compatibility
          </li>
        </ul>
      </Example>

      <h3>Test Vectors</h3>

      <Callout type="info">
        <strong>Interoperability Testing:</strong> RFC 9591 provides comprehensive
        test vectors including:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Key generation intermediate values</li>
          <li>Preprocessing commitment values</li>
          <li>Signature share computations</li>
          <li>Final signature verification</li>
        </ul>
        Implementations should verify against all test vectors before deployment.
      </Callout>

      <h3>Future Standardization Work</h3>

      <Definition title="Ongoing Standards Development">
        <p>Additional protocols being standardized:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>DKG Protocol:</strong> Distributed key generation standardization
            (in progress)
          </li>
          <li>
            <strong>Refresh Protocol:</strong> Share refreshing without changing
            public key
          </li>
          <li>
            <strong>Threshold Change:</strong> Modifying{' '}
            <InlineMath>{`t`}</InlineMath> and <InlineMath>{`n`}</InlineMath>{' '}
            parameters
          </li>
          <li>
            <strong>Identifiable Abort:</strong> Proving which participant misbehaved
          </li>
        </ul>
      </Definition>

      <h3>Bitcoin-Specific Standards</h3>

      <Example title="BIP Integration">
        <p>FROST relates to several Bitcoin Improvement Proposals:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>BIP 340:</strong> Schnorr Signatures for secp256k1 - defines
            the signature format FROST produces
          </li>
          <li>
            <strong>BIP 341:</strong> Taproot - defines the address format for
            FROST keys
          </li>
          <li>
            <strong>BIP 342:</strong> Tapscript - defines script semantics for
            fallback paths
          </li>
        </ul>
      </Example>

      <h3>Implementation References</h3>

      <Definition title="Reference Implementations">
        <p>Several high-quality FROST implementations exist:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>ZCash Foundation (Rust):</strong> Comprehensive, well-tested
          </li>
          <li>
            <strong>secp256k1-zkp (C):</strong> Bitcoin-focused, production-ready
          </li>
          <li>
            <strong>frost-dalek (Rust):</strong> Research-oriented, educational
          </li>
        </ul>
      </Definition>

      <h3>Compliance Requirements</h3>

      <Theorem title="Standard Compliance">
        <p>A compliant FROST implementation must:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            Implement all mandatory protocol steps exactly as specified
          </li>
          <li>
            Use domain-separated hash functions as defined
          </li>
          <li>
            Follow the serialization format for interoperability
          </li>
          <li>
            Pass all test vectors for the chosen ciphersuite
          </li>
          <li>
            Implement secure nonce generation and deletion
          </li>
        </ul>
      </Theorem>

      <Callout type="warning">
        <strong>Deviation Risks:</strong> Deviating from the standard, even for
        seemingly minor optimizations, can:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Break interoperability with other implementations</li>
          <li>Introduce subtle security vulnerabilities</li>
          <li>Invalidate security proofs</li>
        </ul>
        Always prefer standard-compliant implementations.
      </Callout>

      <h3>Certification and Auditing</h3>

      <Example title="Security Validation">
        <p>For production deployments, consider:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>Third-party audit:</strong> Independent security review
          </li>
          <li>
            <strong>Formal verification:</strong> Mathematical proof of correctness
          </li>
          <li>
            <strong>Test vector validation:</strong> Automated conformance testing
          </li>
          <li>
            <strong>Fuzzing:</strong> Randomized input testing for edge cases
          </li>
        </ul>
      </Example>
    </LessonLayout>
  );
}
