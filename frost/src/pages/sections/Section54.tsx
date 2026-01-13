import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <h2>Hash Function Considerations</h2>

      <p>
        FROST uses multiple hash functions with specific roles. Proper implementation
        of these hash functions is essential for security, requiring domain separation
        and careful input serialization.
      </p>

      <h3>FROST's Hash Functions</h3>

      <Definition title="FROST Hash Functions">
        <p>FROST defines two distinct hash functions:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <InlineMath>{`H_1`}</InlineMath>: <strong>Binding value hash</strong> -{' '}
            computes <InlineMath>{`\\rho_i = H_1(i, m, B)`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`H_2`}</InlineMath>: <strong>Challenge hash</strong> -{' '}
            computes <InlineMath>{`c = H_2(R, Y, m)`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3>Domain Separation</h3>

      <p>
        Domain separation prevents collisions between different hash uses. Without it,
        an attacker might find inputs that produce the same hash output in different
        contexts, potentially breaking security.
      </p>

      <Example title="Domain-Separated Hash Functions">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`H_1(x) = SHA-256("FROST-binding" || x)
H_2(x) = SHA-256("FROST-challenge" || x)`}
        </pre>
        <p className="mt-3">
          The domain separation string ensures that even identical inputs to{' '}
          <InlineMath>{`H_1`}</InlineMath> and <InlineMath>{`H_2`}</InlineMath> produce
          different outputs.
        </p>
      </Example>

      <Callout type="warning">
        <strong>Security Requirement:</strong> Using the same hash function without
        domain separation for different purposes can lead to subtle attacks where
        a value computed in one context is reused in another.
      </Callout>

      <h3>Input Serialization</h3>

      <p>
        Hash inputs must be serialized unambiguously. If the encoding is ambiguous,
        different inputs might produce the same serialization, breaking security assumptions.
      </p>

      <Example title="Unambiguous Serialization">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`# CORRECT: Length-prefixed encoding
H(length(A) || A || length(B) || B)

# WRONG: Ambiguous concatenation
H(A || B)  // Cannot distinguish where A ends and B begins`}
        </pre>
        <p className="mt-3">
          Without length prefixes, the inputs "AB" and "CD" could hash to the same
          value as "A" and "BCD" if A||B = AB||CD.
        </p>
      </Example>

      <h3>Elliptic Curve Point Encoding</h3>

      <Definition title="Point Serialization Formats">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Compressed:</strong> 33 bytes (<code>0x02</code>/<code>0x03</code>{' '}
            prefix + x-coordinate). The prefix indicates the parity of y.
          </li>
          <li>
            <strong>Uncompressed:</strong> 65 bytes (<code>0x04</code> prefix + x + y
            coordinates)
          </li>
        </ul>
        <p className="mt-4">
          Compressed format is preferred for efficiency while maintaining unambiguous
          point representation.
        </p>
      </Definition>

      <h3>Hash-to-Field</h3>

      <p>
        When hashing to produce a scalar in <InlineMath>{`\\mathbb{Z}_q`}</InlineMath>,
        we need the output to be uniformly distributed:
      </p>

      <Theorem title="Uniform Hash Output">
        <p>
          For a hash function <InlineMath>{`H`}</InlineMath> producing{' '}
          <InlineMath>{`n`}</InlineMath>-bit output and field order{' '}
          <InlineMath>{`q`}</InlineMath>:
        </p>
        <MathBlock>
          {`c = H(R \\| Y \\| m) \\mod q`}
        </MathBlock>
        <p className="mt-4">
          If <InlineMath>{`n \\gg \\log_2(q)`}</InlineMath>, the bias from modular
          reduction is negligible. For secp256k1 with 256-bit hashes, the bias is
          cryptographically insignificant.
        </p>
      </Theorem>

      <h3>Implementation Checklist</h3>

      <Callout type="info">
        <strong>Hash Function Implementation Requirements:</strong>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Use domain separation strings for each hash purpose</li>
          <li>Serialize all inputs with unambiguous length encoding</li>
          <li>Use compressed point format for elliptic curve points</li>
          <li>Ensure hash output is properly reduced to the field</li>
          <li>All participants must use identical serialization</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
