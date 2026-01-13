import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2>Why Binding Defeats the Attack</h2>

      <p>
        We've built up FROST's binding mechanism piece by piece. Now let's see exactly
        how it defeats the Drijvers attack by analyzing what an adversary can and
        cannot do.
      </p>

      <h3>The Attack Timeline</h3>

      <p>
        To understand why binding works, we must trace what happens chronologically:
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-indigo-500/30">
          <h4 className="font-semibold text-indigo-400 mb-2">Phase 1: Commitment</h4>
          <p className="text-sm">
            Adversary must publish <InlineMath>{`D_1, E_1`}</InlineMath> before seeing:
          </p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>Other participants' commitments <InlineMath>{`D_j, E_j`}</InlineMath></li>
            <li>The message <InlineMath>{`m`}</InlineMath></li>
            <li>Any binding values <InlineMath>{`\\rho_i`}</InlineMath></li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">Phase 2: Binding Computation</h4>
          <p className="text-sm">
            After all commitments are revealed:
          </p>
          <MathBlock>
            {`\\rho_i = H_1(i, m, [(1, D_1, E_1), (2, D_2, E_2), \\ldots])`}
          </MathBlock>
          <p className="text-sm mt-2">
            Every <InlineMath>{`\\rho_i`}</InlineMath> depends on ALL commitments
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Phase 3: Challenge Derivation</h4>
          <p className="text-sm">
            The challenge depends on the binding values:
          </p>
          <MathBlock>
            {`R = \\sum_i (D_i + [\\rho_i]E_i), \\quad c = H_2(R, Y, m)`}
          </MathBlock>
        </div>
      </div>

      <h3>The Adversary's Dilemma</h3>

      <Theorem title="Pre-Commitment Constraint">
        <p>
          The adversary must commit to <InlineMath>{`D_1, E_1`}</InlineMath> before knowing:
        </p>
        <MathBlock>
          {`\\rho_1 = H_1(1, m, B)`}
        </MathBlock>
        <p className="mt-3">
          Therefore, they cannot choose <InlineMath>{`d_1, e_1`}</InlineMath> to target any
          specific <InlineMath>{`k_1 = d_1 + e_1 \\cdot \\rho_1`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="What Changing Commitments Does">
        <p className="mb-4">
          Suppose the adversary tries to change their commitment after seeing others':
        </p>

        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-amber-400 font-semibold mb-2">Original session:</p>
            <p className="text-sm font-mono">B = [(1, D₁, E₁), (2, D₂, E₂)]</p>
            <p className="text-sm font-mono">ρ₂ = H₁(2, m, B) = 0x7a3f...</p>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-rose-400 font-semibold mb-2">
              After adversary changes D₁ → D₁':
            </p>
            <p className="text-sm font-mono">B' = [(1, D₁', E₁), (2, D₂, E₂)]</p>
            <p className="text-sm font-mono">ρ₂' = H₁(2, m, B') = 0x2c8e...</p>
            <p className="text-sm text-gray-400 mt-2">
              Completely different! The honest party's binding value changed.
            </p>
          </div>
        </div>
      </Example>

      <h3>Breaking the Linear Algebra</h3>

      <p>
        Recall how the Drijvers attack works: find a linear combination of challenges
        across sessions. The binding mechanism breaks this by making sessions entangled:
      </p>

      <Callout type="info">
        <strong>The Key Insight:</strong> In the Drijvers attack, the adversary needs
        challenges from different sessions to be independent so they can be combined.
        But with binding, changing anything in one session changes the binding values
        (and thus challenges) in ways the adversary cannot predict or control.
      </Callout>

      <h3>Why Adaptation Fails</h3>

      <Definition title="Adaptive Manipulation">
        <p>
          In the Drijvers attack, the adversary wants to adaptively choose their commitment
          based on what others commit. FROST prevents this:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>
            Must commit <InlineMath>{`D_1, E_1`}</InlineMath> before seeing <InlineMath>{`D_2, E_2, \\ldots`}</InlineMath>
          </li>
          <li>
            Cannot change <InlineMath>{`D_1, E_1`}</InlineMath> without changing ALL <InlineMath>{`\\rho_i`}</InlineMath>
          </li>
          <li>
            Cannot predict how <InlineMath>{`\\rho_i`}</InlineMath> will change (hash is unpredictable)
          </li>
        </ol>
      </Definition>

      <h3>The Binding Cascade</h3>

      <p>
        Trace what happens when the adversary tries to manipulate:
      </p>

      <div className="p-4 rounded-xl bg-rose-900/20 border border-rose-500/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">Attempted Manipulation Chain</h4>
        <div className="space-y-2 text-sm font-mono">
          <p>1. Adversary changes D₁, E₁</p>
          <p className="text-gray-400">↓</p>
          <p>2. Commitment list B changes</p>
          <p className="text-gray-400">↓</p>
          <p>3. ALL binding values ρᵢ change (for all i)</p>
          <p className="text-gray-400">↓</p>
          <p>4. ALL individual commitments Rᵢ = Dᵢ + [ρᵢ]Eᵢ change</p>
          <p className="text-gray-400">↓</p>
          <p>5. Group commitment R = ΣRᵢ changes</p>
          <p className="text-gray-400">↓</p>
          <p>6. Challenge c = H₂(R, Y, m) changes unpredictably</p>
        </div>
      </div>

      <Theorem title="Attack Prevention">
        <p>
          The Wagner attack requires the adversary to control how challenges relate
          across sessions. But with binding:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            Each session's challenge depends on ALL participants' commitments
          </li>
          <li>
            Adversary cannot influence honest participants' commitments
          </li>
          <li>
            Changing own commitment changes challenges unpredictably
          </li>
        </ul>
        <p className="mt-3">
          The linear algebra required by Wagner's algorithm is destroyed.
        </p>
      </Theorem>

      <h3>Formal Security Argument</h3>

      <Example title="Security Game">
        <p className="mb-4">Consider an adversary trying to forge:</p>

        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            Adversary opens sessions 1, 2, ..., T with honest parties
          </li>
          <li>
            For each session j, adversary commits to <InlineMath>{`(D_1^{(j)}, E_1^{(j)})`}</InlineMath>
          </li>
          <li>
            Honest parties commit their values
          </li>
          <li>
            Binding values computed for each session
          </li>
          <li>
            <strong>Adversary's problem:</strong> The relationship between challenges
            <InlineMath>{`c^{(1)}, c^{(2)}, \\ldots, c^{(T)}`}</InlineMath> is determined
            by the hash function, which adversary cannot control
          </li>
        </ol>
      </Example>

      <Callout type="success">
        <strong>Result:</strong> The adversary cannot find the linear combination
        required by Wagner's algorithm because they cannot control how challenges
        relate to each other. Each session's challenge depends on honest parties'
        random commitments, making cross-session combination infeasible.
      </Callout>

      <h3>Summary</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-rose-500/30">
          <h4 className="font-semibold text-rose-400 mb-2">Without Binding</h4>
          <ul className="space-y-2 text-sm">
            <li>Sessions are independent</li>
            <li>Challenges can be linearly combined</li>
            <li>Wagner's algorithm applies</li>
            <li>Forgery in ~2³² operations</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">With Binding</h4>
          <ul className="space-y-2 text-sm">
            <li>Sessions are entangled</li>
            <li>Changing anything changes everything</li>
            <li>Wagner's algebra breaks</li>
            <li>Security ≈ discrete log (2²⁵⁶)</li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}
