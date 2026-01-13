import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2>Why This Matters</h2>

      <p>
        We've now seen the mathematical heart of FROST: the share conversion trick that
        allows distributed computation of <InlineMath>{`z = k + s \\cdot c`}</InlineMath>.
        Let's step back and appreciate why this is so powerful.
      </p>

      <h3>The Beautiful Mathematics</h3>

      <Theorem title="The FROST Elegance">
        <p>
          FROST achieves four seemingly contradictory goals simultaneously:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>
            <strong>No secret reconstruction:</strong> Neither <InlineMath>{`s`}</InlineMath>
            nor <InlineMath>{`k`}</InlineMath> is ever computed in one place
          </li>
          <li>
            <strong>Non-interactive nonces:</strong> Each participant generates
            <InlineMath>{`k_i`}</InlineMath> independently
          </li>
          <li>
            <strong>Threshold flexibility:</strong> Any <InlineMath>{`t`}</InlineMath> of
            <InlineMath>{`n`}</InlineMath> can sign
          </li>
          <li>
            <strong>Valid signatures:</strong> Output is indistinguishable from single-party Schnorr
          </li>
        </ol>
      </Theorem>

      <h3>1. No Secret Reconstruction</h3>

      <p>
        In traditional threshold approaches, shares are brought together to reconstruct the
        secret before signing. This creates a single point of failure - whichever computer
        performs the reconstruction temporarily holds the full private key.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-rose-500/30">
          <h4 className="font-semibold text-rose-400 mb-2">Naive Approach</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Collect shares <InlineMath>{`s_1, s_2, s_3`}</InlineMath></li>
            <li>Reconstruct <InlineMath>{`s = \\sum s_i \\cdot \\lambda_i`}</InlineMath></li>
            <li>Compute <InlineMath>{`z = k + s \\cdot c`}</InlineMath></li>
            <li className="text-rose-400">Secret exposed at step 2!</li>
          </ol>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">FROST Approach</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Each computes <InlineMath>{`z_i = k_i + s_i \\cdot \\lambda_i \\cdot c`}</InlineMath></li>
            <li>Aggregate <InlineMath>{`z = \\sum z_i`}</InlineMath></li>
            <li className="text-emerald-400">Secret never exposed!</li>
          </ol>
        </div>
      </div>

      <Callout type="success">
        <strong>Key Insight:</strong> Lagrange coefficients let us "weight" shares before
        aggregation, achieving the same result as reconstruction without ever computing the
        secret itself.
      </Callout>

      <h3>2. Non-Interactive Nonce Generation</h3>

      <p>
        The nonce <InlineMath>{`k`}</InlineMath> must be fresh for every signature. Running a
        full DKG for each signature would be impractical. FROST's solution is elegant:
      </p>

      <Definition title="Additive Nonce Sharing">
        <p>
          Each participant <InlineMath>{`i`}</InlineMath> generates random <InlineMath>{`k_i`}</InlineMath>
          independently. No coordination required!
        </p>
        <MathBlock>
          {`k = \\sum_{i \\in S} k_i`}
        </MathBlock>
        <p className="mt-3">
          The group nonce exists implicitly but is never computed by anyone.
        </p>
      </Definition>

      <h3>3. Threshold Flexibility</h3>

      <p>
        Unlike schemes that require all <InlineMath>{`n`}</InlineMath> participants or a fixed
        subset, FROST allows <em>any</em> <InlineMath>{`t`}</InlineMath> participants to sign:
      </p>

      <Example title="Threshold Flexibility in Practice">
        <p className="mb-4">In a 3-of-5 setup, all these combinations work:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Participants {'{1, 2, 3}'} with their Lagrange coefficients</li>
          <li>Participants {'{1, 3, 5}'} with different Lagrange coefficients</li>
          <li>Participants {'{2, 4, 5}'} with yet different coefficients</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400">
          Each subset computes different <InlineMath>{`\\lambda_i`}</InlineMath> values,
          but the final signature is always valid!
        </p>
      </Example>

      <h3>4. Indistinguishable Signatures</h3>

      <p>
        The output signature <InlineMath>{`\\sigma = (R, z)`}</InlineMath> is mathematically
        identical to a single-party Schnorr signature:
      </p>

      <MathBlock>
        {`[z]G = R + [c]Y`}
      </MathBlock>

      <p>
        This means:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Privacy:</strong> On-chain observers can't tell it was threshold-signed
        </li>
        <li>
          <strong>Compatibility:</strong> Standard Schnorr verification works unchanged
        </li>
        <li>
          <strong>Efficiency:</strong> Same signature size (64 bytes) regardless of threshold
        </li>
      </ul>

      <h3>Security Properties</h3>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">Each z_i Reveals Nothing</h4>
          <p className="text-sm">
            The random nonce share <InlineMath>{`k_i`}</InlineMath> masks the key share contribution.
            An attacker seeing <InlineMath>{`z_i`}</InlineMath> learns nothing about
            <InlineMath>{`s_i`}</InlineMath>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">t-1 Shares Are Useless</h4>
          <p className="text-sm">
            Even with <InlineMath>{`t-1`}</InlineMath> shares of both <InlineMath>{`s`}</InlineMath>
            and <InlineMath>{`k`}</InlineMath>, an attacker cannot forge signatures. The
            information-theoretic security of Shamir sharing applies.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">Fresh Nonces Per Signature</h4>
          <p className="text-sm">
            Each signature uses independently generated <InlineMath>{`k_i`}</InlineMath> values.
            No nonce reuse means no key extraction attacks.
          </p>
        </div>
      </div>

      <h3>The Remaining Challenge</h3>

      <Callout type="warning">
        <strong>But Wait...</strong> We've solved the share conversion problem, but there's
        still a security challenge. What if a malicious participant manipulates their nonce
        contribution across multiple parallel signing sessions?
      </Callout>

      <p>
        The Drijvers attack exploits this vulnerability. FROST's response is a clever
        <em>binding mechanism</em> that ties each participant's nonce to the specific
        signing session. We'll explore this critical security feature next.
      </p>

      <h3>Summary: The Mathematical Heart of FROST</h3>

      <Theorem title="FROST's Core Innovation">
        <p>
          The Lagrange coefficient transformation enables:
        </p>
        <MathBlock>
          {`z_i = k_i + s_i \\cdot \\lambda_i \\cdot c`}
        </MathBlock>
        <p className="mt-3">
          where additive nonce shares combine naturally with weighted key shares to produce
          a valid Schnorr response without reconstruction.
        </p>
      </Theorem>

      <p>
        This single formula encapsulates years of cryptographic research and represents
        a beautiful synthesis of:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>Shamir's secret sharing (1979)</li>
        <li>Schnorr signatures (1989)</li>
        <li>Feldman's verifiable secret sharing (1987)</li>
        <li>Modern threshold signature research (2000s-2020)</li>
      </ul>

      <p>
        FROST ties these together into a practical, efficient, and secure threshold
        signature scheme ready for real-world Bitcoin deployment.
      </p>
    </LessonLayout>
  );
}
