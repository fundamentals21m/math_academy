import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <h2>Signature Aggregation (MuSig-style)</h2>

      <p>
        FROST can be combined with MuSig-style signature aggregation to create powerful hybrid
        constructions. This enables multiple independent signers, each using their own threshold
        scheme, to produce a single aggregate signature.
      </p>

      <h3>The Scenario</h3>

      <Definition title="Multi-Signer Setup">
        <p>
          Multiple independent signers, each with their own FROST-shared key, want to produce a
          single signature:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Signer 1: FROST key with threshold <InlineMath>{`(t_1, n_1)`}</InlineMath>, public key{' '}
            <InlineMath>{`Y_1`}</InlineMath>
          </li>
          <li>
            Signer 2: FROST key with threshold <InlineMath>{`(t_2, n_2)`}</InlineMath>, public key{' '}
            <InlineMath>{`Y_2`}</InlineMath>
          </li>
          <li>...</li>
          <li>
            Signer m: FROST key with threshold <InlineMath>{`(t_m, n_m)`}</InlineMath>, public key{' '}
            <InlineMath>{`Y_m`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3>Aggregate Public Key</h3>

      <Definition title="Key Aggregation">
        <p>The aggregate public key is formed by combining individual keys:</p>
        <MathBlock>{`Y_{\\text{agg}} = \\sum_{i=1}^{m} a_i \\cdot Y_i`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{`a_i`}</InlineMath> are key aggregation coefficients computed as:
        </p>
        <MathBlock>{`a_i = H_{\\text{agg}}(Y_i, \\{Y_1, \\ldots, Y_m\\})`}</MathBlock>
        <p className="mt-3">
          The coefficients prevent rogue key attacks where a malicious signer chooses a key that
          cancels out honest signers' contributions.
        </p>
      </Definition>

      <h3>Aggregate Signature Process</h3>

      <Example title="Step 1: Each Signer Produces FROST Partial Signature">
        <p>
          Each signer <InlineMath>{`i`}</InlineMath> runs their internal FROST protocol:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Select <InlineMath>{`t_i`}</InlineMath> participants from their{' '}
            <InlineMath>{`n_i`}</InlineMath> parties
          </li>
          <li>Each participant contributes their signature share</li>
          <li>
            Aggregator combines shares to form signer <InlineMath>{`i`}</InlineMath>'s partial
            signature: <InlineMath>{`\\sigma_i = (R_i, z_i)`}</InlineMath>
          </li>
        </ul>
      </Example>

      <Example title="Step 2: Combine Using MuSig Aggregation">
        <p>Aggregate the commitments:</p>
        <MathBlock>{`R = \\sum_{i=1}^{m} R_i`}</MathBlock>
        <p className="mt-3">Compute aggregate challenge:</p>
        <MathBlock>{`c = H_2(R, Y_{\\text{agg}}, m)`}</MathBlock>
        <p className="mt-3">Aggregate the responses:</p>
        <MathBlock>{`z = \\sum_{i=1}^{m} a_i \\cdot z_i`}</MathBlock>
        <p className="mt-3">Final aggregate signature:</p>
        <MathBlock>{`\\sigma = (R, z)`}</MathBlock>
      </Example>

      <h3>Verification</h3>

      <Theorem title="Aggregate Signature Verification">
        <p>The verifier checks:</p>
        <MathBlock>{`[z]G \\stackrel{?}{=} R + [c]Y_{\\text{agg}}`}</MathBlock>
        <p className="mt-3">
          This is identical to standard Schnorr verification! The aggregate signature is
          indistinguishable from a single-party signature.
        </p>
      </Theorem>

      <h3>Mathematical Elegance</h3>

      <Example title="Why Aggregation Works">
        <p>Each signer's response satisfies:</p>
        <MathBlock>{`z_i = k_i + s_i \\cdot c_i`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{`c_i`}</InlineMath> is the challenge seen by signer{' '}
          <InlineMath>{`i`}</InlineMath>.
        </p>
        <p className="mt-3">In the MuSig framework, all signers use the aggregate challenge:</p>
        <MathBlock>{`z = \\sum_i a_i \\cdot z_i = \\sum_i a_i(k_i + s_i \\cdot c)`}</MathBlock>
        <MathBlock>{`= \\sum_i a_i \\cdot k_i + c \\cdot \\sum_i a_i \\cdot s_i`}</MathBlock>
        <MathBlock>{`= k + c \\cdot s_{\\text{agg}}`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{`k = \\sum_i a_i \\cdot k_i`}</InlineMath> and{' '}
          <InlineMath>{`s_{\\text{agg}} = \\sum_i a_i \\cdot s_i`}</InlineMath>.
        </p>
      </Example>

      <h3>Use Cases</h3>

      <Definition title="Multi-Organization Custody">
        <p>Example: Three companies jointly control funds:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Company A: 2-of-3 FROST internally</li>
          <li>Company B: 3-of-5 FROST internally</li>
          <li>Company C: 2-of-4 FROST internally</li>
        </ul>
        <p className="mt-3">
          All three must sign (3-of-3 at the organization level), but each organization uses its
          own threshold internally.
        </p>
      </Definition>

      <Definition title="Layered Security">
        <p>Combine organizational and individual thresholds:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Outer layer:</strong> 2-of-3 organizations (MuSig)
          </li>
          <li>
            <strong>Inner layer:</strong> Each organization uses FROST
          </li>
        </ul>
        <p className="mt-3">
          On-chain: Still just one public key and one signature!
        </p>
      </Definition>

      <Callout type="success">
        <strong>The Power of Composition:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>FROST within each signer (threshold security)</li>
          <li>MuSig between signers (multi-party authorization)</li>
          <li>Final signature indistinguishable from single-party</li>
          <li>Maximum flexibility with minimal on-chain footprint</li>
        </ul>
      </Callout>

      <h3>Coordination Requirements</h3>

      <Definition title="Communication Pattern">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Each signer internally runs FROST preprocessing (can be done in advance)
          </li>
          <li>
            Signers exchange nonce commitments <InlineMath>{`R_i`}</InlineMath> (1 round)
          </li>
          <li>
            Each signer internally computes their signature share
          </li>
          <li>
            Signers exchange signature shares <InlineMath>{`z_i`}</InlineMath> (1 round)
          </li>
          <li>
            Aggregator combines into final signature
          </li>
        </ol>
        <p className="mt-3">
          Total: 2 rounds between organizations (same as MuSig2), plus internal FROST operations.
        </p>
      </Definition>

      <p>
        This hybrid construction demonstrates FROST's composability - it works seamlessly with
        other Schnorr-based protocols to build sophisticated authorization schemes.
      </p>
    </LessonLayout>
  );
}
