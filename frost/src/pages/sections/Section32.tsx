import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2>Final Signature Verification</h2>

      <p>
        The remarkable property of FROST is that the final signature is indistinguishable from a
        standard single-party Schnorr signature. <strong>Anyone</strong> can verify it using the
        standard Schnorr verification algorithm, with no knowledge that it was produced by a
        threshold scheme.
      </p>

      <Callout type="info">
        <strong>Key Insight:</strong> The verifier sees only the group public key{' '}
        <InlineMath>{`Y`}</InlineMath> and signature <InlineMath>{`\\sigma = (R, z)`}</InlineMath>.
        The threshold structure is completely hidden.
      </Callout>

      <h3>Standard Schnorr Verification</h3>

      <Definition title="Verification Algorithm">
        <p>
          Given message <InlineMath>{`m`}</InlineMath>, signature{' '}
          <InlineMath>{`\\sigma = (R, z)`}</InlineMath>, and public key{' '}
          <InlineMath>{`Y`}</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>
            Parse signature as <InlineMath>{`(R, z)`}</InlineMath>
          </li>
          <li>
            Compute challenge: <InlineMath>{`c = H_2(R, Y, m)`}</InlineMath>
          </li>
          <li>
            Compute: <InlineMath>{`L = [z]G`}</InlineMath>
          </li>
          <li>
            Compute: <InlineMath>{`R' = R + [c]Y`}</InlineMath>
          </li>
          <li>
            Accept if <InlineMath>{`L = R'`}</InlineMath>, reject otherwise
          </li>
        </ol>
      </Definition>

      <h3>Why FROST Signatures Verify Correctly</h3>

      <Theorem title="Correctness of FROST Aggregation">
        <p>
          If all participants follow the protocol honestly, the aggregated signature{' '}
          <InlineMath>{`\\sigma = (R, z)`}</InlineMath> satisfies the Schnorr verification equation:
        </p>
        <MathBlock>{`[z]G = R + [c]Y`}</MathBlock>
      </Theorem>

      <Example title="Proof of Correctness">
        <p>Start with the aggregated response:</p>
        <MathBlock>{`z = \\sum_{i \\in S} z_i`}</MathBlock>

        <p className="mt-4">Expand each signature share:</p>
        <MathBlock>{`z = \\sum_{i \\in S} (d_{ij} + e_{ij} \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c)`}</MathBlock>

        <p className="mt-4">Rearrange terms:</p>
        <MathBlock>{`z = \\sum_{i \\in S} (d_{ij} + e_{ij} \\cdot \\rho_i) + c \\cdot \\sum_{i \\in S} \\lambda_i \\cdot s_i`}</MathBlock>

        <p className="mt-4">
          Recognize that <InlineMath>{`k = \\sum_{i \\in S} k_i`}</InlineMath> where{' '}
          <InlineMath>{`k_i = d_{ij} + e_{ij} \\cdot \\rho_i`}</InlineMath>:
        </p>
        <MathBlock>{`z = k + c \\cdot \\sum_{i \\in S} \\lambda_i \\cdot s_i`}</MathBlock>

        <p className="mt-4">By Lagrange interpolation:</p>
        <MathBlock>{`s = \\sum_{i \\in S} \\lambda_i \\cdot s_i`}</MathBlock>

        <p className="mt-4">Therefore:</p>
        <MathBlock>{`z = k + c \\cdot s`}</MathBlock>

        <p className="mt-4">This is exactly the standard Schnorr response! Now verify:</p>
        <MathBlock>{`[z]G = [k + c \\cdot s]G = [k]G + [c \\cdot s]G = R + [c]Y \\quad \\checkmark`}</MathBlock>
      </Example>

      <h3>The Magic of Indistinguishability</h3>

      <p>
        The verification equation <InlineMath>{`[z]G = R + [c]Y`}</InlineMath> is identical for:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>Single-party Schnorr signatures</li>
        <li>2-of-3 FROST signatures</li>
        <li>5-of-10 FROST signatures</li>
        <li>Any (t, n)-FROST signature</li>
      </ul>

      <Callout type="success">
        <strong>Privacy Property:</strong> An observer cannot determine:
        <ul className="list-disc list-inside mt-2">
          <li>Whether the signature was produced by one party or many</li>
          <li>The threshold value <InlineMath>{`t`}</InlineMath></li>
          <li>The total number of participants <InlineMath>{`n`}</InlineMath></li>
          <li>Which participants signed</li>
        </ul>
      </Callout>

      <h3>Verification Complexity</h3>

      <Definition title="Computational Cost">
        <p>Verification requires:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>1 hash computation: <InlineMath>{`c = H_2(R, Y, m)`}</InlineMath></li>
          <li>2 scalar multiplications: <InlineMath>{`[z]G`}</InlineMath> and <InlineMath>{`[c]Y`}</InlineMath></li>
          <li>1 point addition: <InlineMath>{`R + [c]Y`}</InlineMath></li>
          <li>1 point comparison: <InlineMath>{`L \\stackrel{?}{=} R'`}</InlineMath></li>
        </ul>
        <p className="mt-3">
          This is <strong>identical</strong> to single-party Schnorr verification. No additional
          cost for threshold signatures!
        </p>
      </Definition>

      <h3>On-Chain Implications</h3>

      <Example title="Bitcoin Transaction Verification">
        <p>When a FROST signature is used in a Bitcoin transaction:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Signature size:</strong> 64 bytes (same as single-party)
          </li>
          <li>
            <strong>Public key size:</strong> 32 bytes (same as single-party)
          </li>
          <li>
            <strong>Verification time:</strong> Same as single-party
          </li>
          <li>
            <strong>Transaction fees:</strong> Same as single-party
          </li>
        </ul>
        <p className="mt-3">
          Contrast with traditional Bitcoin multisig: each additional signer adds ~34 bytes
          (public key) + ~72 bytes (signature).
        </p>
      </Example>

      <h3>Security Through Simplicity</h3>

      <p>
        The fact that FROST signatures are standard Schnorr signatures means:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4">
        <li>
          <strong>Battle-tested verification:</strong> Uses the same verification code as all
          Schnorr signatures
        </li>
        <li>
          <strong>No special handling:</strong> Existing infrastructure works without modification
        </li>
        <li>
          <strong>Audit simplicity:</strong> Security reduces to Schnorr security, which is well-understood
        </li>
      </ol>

      <Callout type="info">
        <strong>The Beautiful Result:</strong> FROST gives us the security of threshold signatures
        with the simplicity of single-party signatures. The complexity is hidden in the signing
        process; verification remains elegant and efficient.
      </Callout>
    </LessonLayout>
  );
}
