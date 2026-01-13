import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>Verifiable Secret Sharing (Feldman VSS)</h2>

      <p>
        Standard Shamir Secret Sharing has a trust problem: participants must trust that
        the dealer gave them valid shares. A malicious dealer could give some participants
        incorrect shares, causing reconstruction to fail or produce the wrong secret.
        Feldman's Verifiable Secret Sharing (VSS) solves this elegantly.
      </p>

      <h3>The Problem</h3>

      <Callout type="warning">
        <strong>The Malicious Dealer Attack:</strong> Consider a 3-of-5 scheme where the
        dealer gives incorrect shares to participants 4 and 5. When participants 1, 2, 4
        try to reconstruct, they get garbage instead of the real secret. Without VSS,
        participants cannot detect this until it's too late.
      </Callout>

      <h3>Feldman's Solution</h3>

      <p>
        The key insight is to use the discrete log relationship between scalars and curve
        points. The dealer publishes <em>commitments</em> to the polynomial coefficients,
        and participants verify their shares against these commitments.
      </p>

      <Definition title="Feldman VSS Setup">
        <p>
          Given a secret polynomial:
        </p>
        <MathBlock>
          {`f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_{t-1} x^{t-1}`}
        </MathBlock>
        <p className="mt-3">
          where <InlineMath>{`a_0 = s`}</InlineMath> is the secret, the dealer publishes
          commitments:
        </p>
        <MathBlock>
          {`C_0 = [a_0]G, \\quad C_1 = [a_1]G, \\quad \\ldots, \\quad C_{t-1} = [a_{t-1}]G`}
        </MathBlock>
      </Definition>

      <h3>The Verification Equation</h3>

      <p>
        A participant <InlineMath>{`i`}</InlineMath> with share <InlineMath>{`s_i = f(i)`}</InlineMath>
        can verify correctness by checking:
      </p>

      <Theorem title="Feldman Verification">
        <p>Share <InlineMath>{`s_i`}</InlineMath> is valid if and only if:</p>
        <MathBlock>
          {`[s_i]G = C_0 + [i]C_1 + [i^2]C_2 + \\cdots + [i^{t-1}]C_{t-1}`}
        </MathBlock>
      </Theorem>

      <h3>Why Verification Works</h3>

      <p>
        Let's trace through the mathematics. The share is:
      </p>

      <MathBlock>
        {`s_i = f(i) = a_0 + a_1 \\cdot i + a_2 \\cdot i^2 + \\cdots + a_{t-1} \\cdot i^{t-1}`}
      </MathBlock>

      <p>
        Multiplying both sides by the generator <InlineMath>{`G`}</InlineMath>:
      </p>

      <MathBlock>
        {`[s_i]G = [a_0 + a_1 \\cdot i + a_2 \\cdot i^2 + \\cdots + a_{t-1} \\cdot i^{t-1}]G`}
      </MathBlock>

      <p>
        Using the distributive property of scalar multiplication:
      </p>

      <MathBlock>
        {`[s_i]G = [a_0]G + [a_1 \\cdot i]G + [a_2 \\cdot i^2]G + \\cdots + [a_{t-1} \\cdot i^{t-1}]G`}
      </MathBlock>

      <p>
        Substituting the commitments:
      </p>

      <MathBlock>
        {`[s_i]G = C_0 + [i]C_1 + [i^2]C_2 + \\cdots + [i^{t-1}]C_{t-1} \\quad \\checkmark`}
      </MathBlock>

      <Example title="Concrete Feldman VSS">
        <p className="mb-4">
          Consider our 3-of-5 scheme with polynomial <InlineMath>{`f(x) = 42 + 17x + 8x^2`}</InlineMath>:
        </p>

        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-emerald-400 mb-2">Dealer publishes commitments:</h5>
            <div className="grid grid-cols-3 gap-2 font-mono text-sm">
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`C_0 = [42]G`}</InlineMath></div>
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`C_1 = [17]G`}</InlineMath></div>
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`C_2 = [8]G`}</InlineMath></div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-indigo-400 mb-2">Participant 2 verifies share (108):</h5>
            <MathBlock>
              {`[108]G \\stackrel{?}{=} C_0 + [2]C_1 + [4]C_2`}
            </MathBlock>
            <MathBlock>
              {`[108]G \\stackrel{?}{=} [42]G + [2 \\cdot 17]G + [4 \\cdot 8]G`}
            </MathBlock>
            <MathBlock>
              {`[108]G = [42 + 34 + 32]G = [108]G \\quad \\checkmark`}
            </MathBlock>
          </div>
        </div>
      </Example>

      <h3>Security Properties</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">What Commitments Reveal</h4>
          <ul className="space-y-2 text-sm">
            <li>Group public key: <InlineMath>{`Y = C_0 = [s]G`}</InlineMath></li>
            <li>Each participant's verification share: <InlineMath>{`Y_i = [s_i]G`}</InlineMath></li>
            <li>That shares are consistent with a valid polynomial</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">What Commitments Hide</h4>
          <ul className="space-y-2 text-sm">
            <li>The secret <InlineMath>{`s`}</InlineMath> (discrete log hard)</li>
            <li>Individual shares <InlineMath>{`s_i`}</InlineMath></li>
            <li>Polynomial coefficients <InlineMath>{`a_1, \\ldots, a_{t-1}`}</InlineMath></li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <strong>Key Insight:</strong> The commitments form a "public polynomial" in the exponent.
        Anyone can compute <InlineMath>{`[f(i)]G`}</InlineMath> for any <InlineMath>{`i`}</InlineMath>,
        but no one can compute <InlineMath>{`f(i)`}</InlineMath> itself without knowing the coefficients.
      </Callout>

      <h3>Verification Shares</h3>

      <p>
        An important byproduct of Feldman VSS is that each participant can compute
        <em>verification shares</em> for all other participants:
      </p>

      <Definition title="Verification Shares">
        <p>
          For participant <InlineMath>{`j`}</InlineMath>, anyone can compute:
        </p>
        <MathBlock>
          {`Y_j = [s_j]G = C_0 + [j]C_1 + [j^2]C_2 + \\cdots + [j^{t-1}]C_{t-1}`}
        </MathBlock>
        <p className="mt-3">
          This is the public key corresponding to participant <InlineMath>{`j`}</InlineMath>'s
          secret share.
        </p>
      </Definition>

      <p>
        Verification shares are crucial for FROST because they allow:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Signature share verification:</strong> During signing, others can verify
          that participant <InlineMath>{`j`}</InlineMath>'s contribution is correct
        </li>
        <li>
          <strong>Misbehavior detection:</strong> If a participant submits an invalid
          signature share, it can be detected and attributed
        </li>
        <li>
          <strong>Public key reconstruction:</strong> The group public key can be computed
          from verification shares: <InlineMath>{`Y = \\sum_i Y_i \\cdot \\lambda_i`}</InlineMath>
        </li>
      </ul>

      <h3>Limitations of Feldman VSS</h3>

      <Callout type="warning">
        <strong>Note:</strong> Feldman VSS provides verifiability but not privacy of
        the secret against the dealer. The dealer knows all shares. In FROST's DKG,
        this is addressed by having <em>all participants</em> act as dealers, contributing
        to the final polynomial. No single party knows the complete secret.
      </Callout>

      <Example title="Detecting a Malicious Dealer">
        <p className="mb-4">
          Suppose the dealer sends participant 2 a corrupted share <InlineMath>{`s_2' = 200`}</InlineMath>
          instead of the correct <InlineMath>{`s_2 = 108`}</InlineMath>:
        </p>

        <MathBlock>
          {`[200]G \\stackrel{?}{=} C_0 + [2]C_1 + [4]C_2`}
        </MathBlock>
        <MathBlock>
          {`[200]G \\neq [108]G \\quad \\text{(verification fails!)}`}
        </MathBlock>

        <p className="mt-4">
          Participant 2 detects the invalid share and can prove the dealer cheated by
          publishing the incorrect share alongside the commitments.
        </p>
      </Example>

      <h3>Summary</h3>

      <p>
        Feldman VSS transforms Shamir Secret Sharing from a trust-based protocol to a
        verify-then-trust protocol. Participants no longer need to blindly trust the
        dealer - they can mathematically verify their shares are correct before proceeding.
      </p>
    </LessonLayout>
  );
}
