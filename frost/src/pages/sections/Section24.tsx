import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2>Complete FROST Signing Formula</h2>

      <p>
        We now have all the components to understand the complete FROST signing formula.
        This is where the binding mechanism, share conversion, and Schnorr structure
        all come together.
      </p>

      <h3>The Full Participant Computation</h3>

      <Definition title="FROST Signature Share">
        <p>
          Each participant <InlineMath>{`i \\in S`}</InlineMath> (the signing set) computes
          their signature share:
        </p>
        <MathBlock>
          {`z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c`}
        </MathBlock>
      </Definition>

      <p>
        Let's break down each component:
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">
            <InlineMath>{`d_i + e_i \\cdot \\rho_i`}</InlineMath> — Nonce Contribution
          </h4>
          <p className="text-sm">
            The effective nonce <InlineMath>{`k_i`}</InlineMath> from the modified nonce generation.
            This is bound to the session via <InlineMath>{`\\rho_i`}</InlineMath>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">
            <InlineMath>{`\\lambda_i`}</InlineMath> — Lagrange Coefficient
          </h4>
          <p className="text-sm">
            The Lagrange coefficient for participant <InlineMath>{`i`}</InlineMath> in the
            signing set <InlineMath>{`S`}</InlineMath>:
          </p>
          <MathBlock>
            {`\\lambda_i = \\prod_{j \\in S, j \\neq i} \\frac{0 - j}{i - j} = \\prod_{j \\in S, j \\neq i} \\frac{j}{j - i}`}
          </MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">
            <InlineMath>{`s_i`}</InlineMath> — Secret Share
          </h4>
          <p className="text-sm">
            Participant <InlineMath>{`i`}</InlineMath>'s Shamir share of the group secret key.
            This never leaves the participant's device.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-rose-400 mb-2">
            <InlineMath>{`c`}</InlineMath> — Challenge
          </h4>
          <p className="text-sm">
            The Schnorr challenge hash:
          </p>
          <MathBlock>
            {`c = H_2(R, Y, m)`}
          </MathBlock>
        </div>
      </div>

      <h3>How the Components Fit Together</h3>

      <Theorem title="Structure of FROST Response">
        <p>
          The FROST signature share has the form:
        </p>
        <MathBlock>
          {`z_i = \\underbrace{d_i + e_i \\cdot \\rho_i}_{\\text{bound nonce } k_i} + \\underbrace{\\lambda_i \\cdot s_i}_{\\text{weighted secret share}} \\cdot c`}
        </MathBlock>
        <p className="mt-3">
          This mirrors the single-party Schnorr response <InlineMath>{`z = k + s \\cdot c`}</InlineMath>,
          but distributed across participants.
        </p>
      </Theorem>

      <h3>The Challenge Computation</h3>

      <p>
        Before computing their share, all participants must agree on:
      </p>

      <MathBlock>
        {`R = \\sum_{i \\in S} R_i = \\sum_{i \\in S} (D_i + [\\rho_i]E_i)`}
      </MathBlock>

      <p>
        Then the challenge is:
      </p>

      <MathBlock>
        {`c = H_2(R, Y, m)`}
      </MathBlock>

      <Example title="Complete Signing Computation">
        <p className="mb-4">
          Participant 2 in a 2-of-3 signing (participants 1 and 2 active):
        </p>

        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="text-gray-400 mb-1">Given values:</p>
            <ul className="space-y-1">
              <li><span className="text-indigo-400">d₂ = </span>17389 (secret nonce component)</li>
              <li><span className="text-emerald-400">e₂ = </span>28451 (secret nonce component)</li>
              <li><span className="text-amber-400">s₂ = </span>94728 (secret share)</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-400 mb-1">Computed values:</p>
            <ul className="space-y-1">
              <li><span className="text-rose-400">ρ₂ = </span>H₁(2, m, B)</li>
              <li><span className="text-purple-400">λ₂ = </span>1·(1-2)⁻¹ = -1 (for S = {'{1,2}'})</li>
              <li><span className="text-cyan-400">c = </span>H₂(R, Y, m)</li>
            </ul>
          </div>

          <div className="pt-3 border-t border-dark-700">
            <p className="text-gray-400 mb-1">Signature share:</p>
            <p className="text-white">z₂ = d₂ + e₂·ρ₂ + λ₂·s₂·c</p>
            <p className="text-white">z₂ = 17389 + 28451·ρ₂ + (-1)·94728·c (mod q)</p>
          </div>
        </div>
      </Example>

      <h3>Signature Aggregation</h3>

      <p>
        Once all participants compute their shares, the coordinator aggregates:
      </p>

      <MathBlock>
        {`z = \\sum_{i \\in S} z_i`}
      </MathBlock>

      <Definition title="Final Signature">
        <p>
          The FROST threshold signature is the pair:
        </p>
        <MathBlock>
          {`\\sigma = (R, z)`}
        </MathBlock>
        <p className="mt-3">
          This is a standard Schnorr signature that verifies against the group public key
          <InlineMath>{`Y`}</InlineMath>.
        </p>
      </Definition>

      <h3>Why This Works</h3>

      <p>
        Expanding the aggregated response:
      </p>

      <MathBlock>
        {`z = \\sum_{i \\in S} z_i = \\sum_{i \\in S} (d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c)`}
      </MathBlock>

      <p>
        Rearranging:
      </p>

      <MathBlock>
        {`z = \\underbrace{\\sum_{i \\in S} (d_i + e_i \\cdot \\rho_i)}_{= k} + c \\cdot \\underbrace{\\sum_{i \\in S} \\lambda_i \\cdot s_i}_{= s}`}
      </MathBlock>

      <Theorem title="FROST Correctness">
        <p>
          By the share conversion theorem:
        </p>
        <MathBlock>
          {`\\sum_{i \\in S} \\lambda_i \\cdot s_i = s`}
        </MathBlock>
        <p className="mt-3">
          And by construction of the group nonce:
        </p>
        <MathBlock>
          {`\\sum_{i \\in S} (d_i + e_i \\cdot \\rho_i) = k`}
        </MathBlock>
        <p className="mt-3">
          Therefore:
        </p>
        <MathBlock>
          {`z = k + s \\cdot c`}
        </MathBlock>
        <p className="mt-3">
          This is exactly the Schnorr response formula!
        </p>
      </Theorem>

      <Callout type="success">
        <strong>The Magic:</strong> Even though no single party ever knows <InlineMath>{`s`}</InlineMath>
        or <InlineMath>{`k`}</InlineMath>, the combined shares produce a valid Schnorr signature.
        The group has computed <InlineMath>{`z = k + s \\cdot c`}</InlineMath> without any
        participant reconstructing the secrets.
      </Callout>

      <h3>Summary of the Complete Formula</h3>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-indigo-500/30 my-6">
        <h4 className="font-semibold text-center text-indigo-400 mb-4">
          FROST Signature Share
        </h4>
        <MathBlock>
          {`z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c`}
        </MathBlock>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          <div>
            <p><InlineMath>{`d_i, e_i`}</InlineMath>: Preprocessed nonces</p>
            <p><InlineMath>{`\\rho_i`}</InlineMath>: Session binding</p>
          </div>
          <div>
            <p><InlineMath>{`\\lambda_i`}</InlineMath>: Lagrange coefficient</p>
            <p><InlineMath>{`s_i`}</InlineMath>: Secret share, <InlineMath>{`c`}</InlineMath>: Challenge</p>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}
