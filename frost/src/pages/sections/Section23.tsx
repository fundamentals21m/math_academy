import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2>Modified Nonce Generation</h2>

      <p>
        FROST's binding mechanism requires modifying how participants compute their
        nonce contributions. Instead of simple additive shares, each participant uses
        a formula that incorporates the binding value.
      </p>

      <h3>The Traditional Approach (Insecure)</h3>

      <p>
        In naive threshold Schnorr, each participant would simply contribute their
        random nonce share <InlineMath>{`k_i`}</InlineMath>:
      </p>

      <MathBlock>
        {`k = \\sum_i k_i`}
      </MathBlock>

      <Callout type="error">
        <strong>Problem:</strong> This additive structure is exactly what the Drijvers
        attack exploits. The attacker can combine nonce shares across sessions using
        Wagner's algorithm.
      </Callout>

      <h3>FROST's Modified Formula</h3>

      <Definition title="FROST Nonce Generation">
        <p>
          Each participant <InlineMath>{`i`}</InlineMath> computes their effective nonce as:
        </p>
        <MathBlock>
          {`k_i = d_i + e_i \\cdot \\rho_i`}
        </MathBlock>
        <p className="mt-3">where:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><InlineMath>{`d_i`}</InlineMath>: First random scalar (secret)</li>
          <li><InlineMath>{`e_i`}</InlineMath>: Second random scalar (secret)</li>
          <li><InlineMath>{`\\rho_i = H_1(i, m, B)`}</InlineMath>: Binding value (public after commitment phase)</li>
        </ul>
      </Definition>

      <h3>Why Two Random Values?</h3>

      <p>
        The structure <InlineMath>{`k_i = d_i + e_i \\cdot \\rho_i`}</InlineMath> is deliberate:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">Role of <InlineMath>{`d_i`}</InlineMath></h4>
          <p className="text-sm">
            Provides base randomness independent of the session. Even if <InlineMath>{`\\rho_i`}</InlineMath>
            is known, <InlineMath>{`d_i`}</InlineMath> ensures unpredictability.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Role of <InlineMath>{`e_i`}</InlineMath></h4>
          <p className="text-sm">
            Multiplied by <InlineMath>{`\\rho_i`}</InlineMath> to bind the nonce to the session.
            Different <InlineMath>{`\\rho_i`}</InlineMath> values give different effective nonces.
          </p>
        </div>
      </div>

      <Theorem title="Nonce Binding Property">
        <p>
          The effective nonce <InlineMath>{`k_i`}</InlineMath> is uniquely determined by:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-3">
          <li>The pre-committed values <InlineMath>{`(d_i, e_i)`}</InlineMath></li>
          <li>The session-specific binding <InlineMath>{`\\rho_i`}</InlineMath></li>
        </ul>
        <p className="mt-3">
          Changing any session parameter changes <InlineMath>{`\\rho_i`}</InlineMath>,
          which changes <InlineMath>{`k_i`}</InlineMath>.
        </p>
      </Theorem>

      <h3>Public vs Private Components</h3>

      <Example title="What Is Public vs Secret">
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-emerald-900/20 border border-emerald-500/30">
            <p className="text-emerald-400 font-semibold mb-2">Public (published in preprocessing):</p>
            <ul className="space-y-1 text-sm">
              <li><InlineMath>{`D_i = [d_i]G`}</InlineMath> - commitment to first scalar</li>
              <li><InlineMath>{`E_i = [e_i]G`}</InlineMath> - commitment to second scalar</li>
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-rose-900/20 border border-rose-500/30">
            <p className="text-rose-400 font-semibold mb-2">Secret (stored securely, then deleted):</p>
            <ul className="space-y-1 text-sm">
              <li><InlineMath>{`d_i`}</InlineMath> - first random scalar</li>
              <li><InlineMath>{`e_i`}</InlineMath> - second random scalar</li>
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-amber-900/20 border border-amber-500/30">
            <p className="text-amber-400 font-semibold mb-2">Computed during signing:</p>
            <ul className="space-y-1 text-sm">
              <li><InlineMath>{`\\rho_i = H_1(i, m, B)`}</InlineMath> - binding value</li>
              <li><InlineMath>{`k_i = d_i + e_i \\cdot \\rho_i`}</InlineMath> - effective nonce</li>
            </ul>
          </div>
        </div>
      </Example>

      <h3>The Public Commitment Point</h3>

      <p>
        The group commitment <InlineMath>{`R`}</InlineMath> can be computed publicly:
      </p>

      <MathBlock>
        {`R_i = [k_i]G = [d_i + e_i \\cdot \\rho_i]G = [d_i]G + [e_i \\cdot \\rho_i]G`}
      </MathBlock>

      <p>
        Using the public commitments:
      </p>

      <MathBlock>
        {`R_i = D_i + [\\rho_i]E_i`}
      </MathBlock>

      <p>
        This is verifiable by anyone with the public values!
      </p>

      <h3>Group Nonce Aggregation</h3>

      <p>
        The effective group nonce is the sum:
      </p>

      <MathBlock>
        {`k = \\sum_{i \\in S} k_i = \\sum_{i \\in S} (d_i + e_i \\cdot \\rho_i)`}
      </MathBlock>

      <p>
        And the group commitment:
      </p>

      <MathBlock>
        {`R = [k]G = \\sum_{i \\in S} (D_i + [\\rho_i]E_i)`}
      </MathBlock>

      <Callout type="info">
        <strong>Key Property:</strong> While no single party knows <InlineMath>{`k`}</InlineMath>,
        everyone can compute <InlineMath>{`R = [k]G`}</InlineMath> from the public commitments.
        This is the essence of threshold computation.
      </Callout>

      <h3>Numerical Example</h3>

      <Example title="Concrete Nonce Computation">
        <p className="mb-4">
          Participant 2 in a signing session:
        </p>

        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="text-gray-400 mb-1">Secret scalars (from preprocessing):</p>
            <p className="text-indigo-400">d₂ = 17389</p>
            <p className="text-emerald-400">e₂ = 28451</p>
          </div>

          <div>
            <p className="text-gray-400 mb-1">Binding value (computed from hash):</p>
            <p className="text-amber-400">ρ₂ = H₁(2, m, B) = 42561...</p>
          </div>

          <div>
            <p className="text-gray-400 mb-1">Effective nonce:</p>
            <p className="text-rose-400">k₂ = 17389 + 28451 · 42561... mod q</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          In practice, these are 256-bit numbers mod q.
        </p>
      </Example>

      <h3>Security Implication</h3>

      <Theorem title="Cross-Session Prevention">
        <p>
          The formula <InlineMath>{`k_i = d_i + e_i \\cdot \\rho_i`}</InlineMath> prevents
          cross-session attacks because:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>
            <InlineMath>{`\\rho_i`}</InlineMath> depends on ALL commitments from all participants
          </li>
          <li>
            Changing any commitment changes <InlineMath>{`\\rho_i`}</InlineMath> for everyone
          </li>
          <li>
            The adversary cannot know <InlineMath>{`\\rho_i`}</InlineMath> until after committing to <InlineMath>{`D_i, E_i`}</InlineMath>
          </li>
        </ol>
      </Theorem>

      <h3>Summary</h3>

      <p>
        The modified nonce formula is the mathematical heart of FROST's binding:
      </p>

      <MathBlock>
        {`k_i = d_i + e_i \\cdot \\rho_i`}
      </MathBlock>

      <p>
        This transforms independent random values into session-specific contributions
        that cannot be combined across parallel signing sessions.
      </p>
    </LessonLayout>
  );
}
