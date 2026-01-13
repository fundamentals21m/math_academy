import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2>Why SSS Alone Doesn't Give Threshold Signatures</h2>

      <p>
        We now have all the pieces of Shamir Secret Sharing: polynomial encoding, Lagrange
        interpolation, and Feldman verification. But there's a fundamental problem when we
        try to use this for threshold <em>signatures</em>.
      </p>

      <h3>The Reconstruction Problem</h3>

      <p>
        Consider what happens when we try to create a threshold Schnorr signature naively:
      </p>

      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          The private key <InlineMath>{`s`}</InlineMath> is shared via Shamir's scheme
        </li>
        <li>
          To sign, participants bring their shares together
        </li>
        <li>
          They reconstruct <InlineMath>{`s = \\sum_i s_i \\cdot \\lambda_i`}</InlineMath>
        </li>
        <li>
          Someone computes <InlineMath>{`z = k + s \\cdot c`}</InlineMath>
        </li>
      </ol>

      <Callout type="error">
        <strong>The Fatal Flaw:</strong> At step 3, the secret <InlineMath>{`s`}</InlineMath>
        is reconstructed on <em>some device</em>. That device now knows the private key
        and becomes a single point of failure - exactly what we were trying to avoid!
      </Callout>

      <h3>The Schnorr Response Challenge</h3>

      <p>
        Recall the Schnorr signing formula:
      </p>

      <MathBlock>
        {`z = k + s \\cdot c`}
      </MathBlock>

      <p>
        To compute this without reconstructing <InlineMath>{`s`}</InlineMath>, we need to handle
        two secret values:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">Long-term Secret: s</h4>
          <ul className="space-y-2 text-sm">
            <li>The private key</li>
            <li>Shared once during key generation</li>
            <li>Shamir polynomial shares</li>
            <li>Never changes (unless key refresh)</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">Ephemeral Secret: k</h4>
          <ul className="space-y-2 text-sm">
            <li>The nonce</li>
            <li>Different for every signature</li>
            <li>Must be random and secret</li>
            <li>Must never be reused</li>
          </ul>
        </div>
      </div>

      <h3>The Nonce Problem</h3>

      <Definition title="The Dual Secret Challenge">
        <p>
          To compute <InlineMath>{`z = k + s \\cdot c`}</InlineMath> collaboratively:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            We need shares of <InlineMath>{`s`}</InlineMath> (from Shamir sharing at key generation)
          </li>
          <li>
            We <em>also</em> need shares of <InlineMath>{`k`}</InlineMath> (fresh for each signature)
          </li>
          <li>
            Neither <InlineMath>{`s`}</InlineMath> nor <InlineMath>{`k`}</InlineMath> should ever be
            reconstructed
          </li>
        </ul>
      </Definition>

      <p>
        This raises several questions:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>How do we share <InlineMath>{`k`}</InlineMath> without running a full DKG each time?</li>
        <li>How do we combine shares of <InlineMath>{`s`}</InlineMath> and <InlineMath>{`k`}</InlineMath>?</li>
        <li>How do we compute the group commitment <InlineMath>{`R = [k]G`}</InlineMath>?</li>
      </ul>

      <h3>Failed Approach: Shamir Share Everything</h3>

      <Example title="Why Full Shamir for k Doesn't Work">
        <p className="mb-4">
          Suppose we run Shamir sharing for <InlineMath>{`k`}</InlineMath> each time we sign:
        </p>

        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Coordination overhead:</strong> Need a dealer to choose <InlineMath>{`k`}</InlineMath>
            and distribute shares - but who is the dealer? They'd know <InlineMath>{`k`}</InlineMath>!
          </li>
          <li>
            <strong>Multiple rounds:</strong> Shamir distribution requires communication,
            adding latency to each signature
          </li>
          <li>
            <strong>Single point of failure:</strong> Whoever generates <InlineMath>{`k`}</InlineMath>
            knows it, defeating the purpose
          </li>
        </ol>
      </Example>

      <h3>The Key Observation</h3>

      <p>
        Shamir (polynomial) shares have a crucial property for <InlineMath>{`s`}</InlineMath>:
        they allow <em>any</em> <InlineMath>{`t`}</InlineMath> participants to reconstruct.
        But for the nonce <InlineMath>{`k`}</InlineMath>, we have a different requirement.
      </p>

      <Theorem title="The FROST Insight">
        <p>
          For the ephemeral nonce <InlineMath>{`k`}</InlineMath>, we can use <strong>additive
          shares</strong> instead of polynomial shares:
        </p>
        <MathBlock>
          {`k = k_1 + k_2 + \\cdots + k_t`}
        </MathBlock>
        <p className="mt-3">
          Each participant <InlineMath>{`i`}</InlineMath> generates their own random
          <InlineMath>{`k_i`}</InlineMath> without coordination!
        </p>
      </Theorem>

      <h3>Additive vs Polynomial Shares</h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left p-3">Property</th>
              <th className="text-left p-3">Shamir (Polynomial)</th>
              <th className="text-left p-3">Additive</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700/50">
              <td className="p-3">Threshold</td>
              <td className="p-3"><InlineMath>{`t`}</InlineMath>-of-<InlineMath>{`n`}</InlineMath></td>
              <td className="p-3"><InlineMath>{`t`}</InlineMath>-of-<InlineMath>{`t`}</InlineMath> (all needed)</td>
            </tr>
            <tr className="border-b border-dark-700/50">
              <td className="p-3">Generation</td>
              <td className="p-3">Requires coordination</td>
              <td className="p-3">Non-interactive</td>
            </tr>
            <tr className="border-b border-dark-700/50">
              <td className="p-3">Reconstruction</td>
              <td className="p-3"><InlineMath>{`\\sum s_i \\cdot \\lambda_i`}</InlineMath></td>
              <td className="p-3"><InlineMath>{`\\sum k_i`}</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700/50">
              <td className="p-3">Use in FROST</td>
              <td className="p-3">Long-term secret <InlineMath>{`s`}</InlineMath></td>
              <td className="p-3">Ephemeral nonce <InlineMath>{`k`}</InlineMath></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info">
        <strong>The Insight:</strong> We don't need threshold reconstruction for the nonce!
        For signing, we already know which <InlineMath>{`t`}</InlineMath> participants are
        participating. Each generates their own nonce share, and we just add them up.
      </Callout>

      <h3>The Remaining Challenge</h3>

      <p>
        But wait - there's still a problem. In the Schnorr response:
      </p>

      <MathBlock>
        {`z = k + s \\cdot c`}
      </MathBlock>

      <p>
        We're adding <InlineMath>{`k`}</InlineMath> (additively shared) and <InlineMath>{`s \\cdot c`}</InlineMath>
        (polynomially shared). These are different types of shares! How do we combine them?
      </p>

      <Callout type="warning">
        <strong>The Mathematical Challenge:</strong> We need a way to convert between additive
        and polynomial shares, or to compute with both types simultaneously. This is the key
        insight of FROST, and we'll explore it in the next section.
      </Callout>

      <h3>Summary: What We Need</h3>

      <Definition title="Requirements for Threshold Schnorr">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Long-term key <InlineMath>{`s`}</InlineMath>: Polynomial shares (t-of-n flexibility)
          </li>
          <li>
            Ephemeral nonce <InlineMath>{`k`}</InlineMath>: Additive shares (non-interactive)
          </li>
          <li>
            <strong>A way to combine them</strong> without reconstruction
          </li>
          <li>
            Security against parallel session attacks (coming later)
          </li>
        </ol>
      </Definition>

      <p>
        The next section reveals the mathematical trick that makes this possible: the
        share conversion theorem.
      </p>
    </LessonLayout>
  );
}
