import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <h2>Random Number Generation</h2>

      <p>
        The security of FROST critically depends on high-quality random number generation.
        The nonces <InlineMath>{`d_i`}</InlineMath> and <InlineMath>{`e_i`}</InlineMath> used
        in preprocessing must be truly random and unique for each signing operation.
      </p>

      <h3>Sources of Randomness</h3>

      <Definition title="Entropy Sources">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Hardware RNG:</strong> CPU instructions like RDRAND provide hardware-based
            random number generation
          </li>
          <li>
            <strong>OS Entropy:</strong> <code>/dev/urandom</code> on Unix/Linux systems collects
            environmental noise
          </li>
          <li>
            <strong>Cryptographic DRBG:</strong> Deterministic Random Bit Generators expand a seed
            into a stream of pseudorandom bits
          </li>
        </ul>
      </Definition>

      <h3>Hedged Nonce Generation</h3>

      <p>
        The recommended approach combines multiple entropy sources with secret material
        for defense-in-depth:
      </p>

      <MathBlock>
        {`\\text{seed} = H(\\text{secret\\_key} \\| \\text{timestamp} \\| \\text{hardware\\_entropy})`}
      </MathBlock>

      <MathBlock>
        {`(d_i, e_i) = \\text{DRBG}(\\text{seed})`}
      </MathBlock>

      <Callout type="info">
        <strong>Why Hedged?</strong> Even if the random number generator fails or is compromised,
        an attacker still needs the secret key to exploit the weakness. This provides
        defense-in-depth against RNG failures.
      </Callout>

      <h3>The Catastrophic Failure Mode</h3>

      <Callout type="warning">
        <strong>Critical Security Rule:</strong> If <InlineMath>{`d_i`}</InlineMath> or{' '}
        <InlineMath>{`e_i`}</InlineMath> is ever reused across two signatures, the secret
        share <InlineMath>{`s_i`}</InlineMath> can be extracted!
      </Callout>

      <Example title="Nonce Reuse Attack">
        <p>Given two signatures with the same nonce but different messages:</p>
        <MathBlock>
          {`\\sigma_1 = (R, z_1) \\text{ for } m_1: \\quad z_1 = k + s \\cdot c_1`}
        </MathBlock>
        <MathBlock>
          {`\\sigma_2 = (R, z_2) \\text{ for } m_2: \\quad z_2 = k + s \\cdot c_2`}
        </MathBlock>
        <p className="mt-3">An attacker computes:</p>
        <MathBlock>
          {`z_1 - z_2 = s \\cdot (c_1 - c_2)`}
        </MathBlock>
        <MathBlock>
          {`s = \\frac{z_1 - z_2}{c_1 - c_2}`}
        </MathBlock>
        <p className="mt-3">
          The secret is completely recovered from two signatures sharing the same nonce!
        </p>
      </Example>

      <h3>Prevention Strategies</h3>

      <p>To prevent nonce reuse:</p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Stateful counter:</strong> Maintain a monotonically increasing counter
          in secure storage
        </li>
        <li>
          <strong>Immediate deletion:</strong> Erase used nonces immediately after signature
          computation
        </li>
        <li>
          <strong>Uniqueness verification:</strong> Check that each nonce has never been
          used before
        </li>
        <li>
          <strong>Single-use tokens:</strong> Generate commitment pairs as single-use tokens
          that are invalidated after use
        </li>
      </ul>

      <Theorem title="Nonce Security Requirement">
        <p>
          For FROST to maintain its security guarantees, each pair{' '}
          <InlineMath>{`(d_{ij}, e_{ij})`}</InlineMath> must satisfy:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Generated from a cryptographically secure source</li>
          <li>Used in exactly one signing operation</li>
          <li>Securely deleted immediately after the signature share is computed</li>
          <li>Never stored in a way that allows recovery after deletion</li>
        </ul>
      </Theorem>
    </LessonLayout>
  );
}
