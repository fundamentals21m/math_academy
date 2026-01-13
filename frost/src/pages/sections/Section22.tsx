import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2>FROST's Binding Technique</h2>

      <p>
        FROST's key innovation is its binding mechanism: each participant's response is
        cryptographically tied to the entire signing context, making cross-session attacks
        impossible. Let's build this up step by step.
      </p>

      <h3>The Core Idea</h3>

      <Definition title="Binding Principle">
        <p>
          Bind each participant's response to:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>The message <InlineMath>{`m`}</InlineMath> being signed</li>
          <li>The specific set of signing participants <InlineMath>{`S`}</InlineMath></li>
          <li>All participants' commitments in this session</li>
        </ol>
        <p className="mt-3">
          This makes each response useless in any other context.
        </p>
      </Definition>

      <h3>The Binding Value</h3>

      <p>
        Each participant <InlineMath>{`i`}</InlineMath> computes a binding value:
      </p>

      <MathBlock>
        {`\\rho_i = H_1(i, m, B)`}
      </MathBlock>

      <p>
        where <InlineMath>{`B`}</InlineMath> is the list of ALL commitments for this signing session:
      </p>

      <MathBlock>
        {`B = [(1, D_1, E_1), (2, D_2, E_2), \\ldots, (t, D_t, E_t)]`}
      </MathBlock>

      <Definition title="Components of the Binding Value">
        <ul className="space-y-3">
          <li>
            <InlineMath>{`i`}</InlineMath>: Participant's index (binds to identity)
          </li>
          <li>
            <InlineMath>{`m`}</InlineMath>: Message being signed (binds to content)
          </li>
          <li>
            <InlineMath>{`B`}</InlineMath>: All commitments (binds to specific session)
          </li>
        </ul>
      </Definition>

      <h3>Why Include Everything?</h3>

      <Example title="What Each Binding Prevents">
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-indigo-400 font-semibold mb-2">Including <InlineMath>{`i`}</InlineMath>:</p>
            <p className="text-sm">
              Prevents one participant from using another's response. Each binding value
              is specific to one participant.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-emerald-400 font-semibold mb-2">Including <InlineMath>{`m`}</InlineMath>:</p>
            <p className="text-sm">
              Prevents reusing responses for different messages. A response to "Send 1 BTC"
              can't be repurposed for "Send 100 BTC".
            </p>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-amber-400 font-semibold mb-2">Including <InlineMath>{`B`}</InlineMath>:</p>
            <p className="text-sm">
              Prevents cross-session attacks. Changing any commitment changes ALL binding
              values, breaking the linear algebra.
            </p>
          </div>
        </div>
      </Example>

      <h3>The Commitment Structure</h3>

      <p>
        Each participant provides two commitments per signing session:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">Commitment <InlineMath>{`D_i`}</InlineMath></h4>
          <MathBlock>{`D_i = [d_i]G`}</MathBlock>
          <p className="text-sm mt-2">
            Random commitment generated during preprocessing
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Commitment <InlineMath>{`E_i`}</InlineMath></h4>
          <MathBlock>{`E_i = [e_i]G`}</MathBlock>
          <p className="text-sm mt-2">
            Second random commitment (for binding flexibility)
          </p>
        </div>
      </div>

      <Callout type="info">
        <strong>Two Commitments:</strong> The dual commitment structure <InlineMath>{`(D_i, E_i)`}</InlineMath>
        is essential. A single commitment wouldn't provide enough flexibility for the
        binding mechanism to work.
      </Callout>

      <h3>The Individual Commitment Point</h3>

      <p>
        Each participant's contribution to the group commitment is:
      </p>

      <MathBlock>
        {`R_i = D_i + [\\rho_i]E_i`}
      </MathBlock>

      <Theorem title="Binding Construction">
        <p>
          The individual commitment <InlineMath>{`R_i`}</InlineMath> is a linear combination
          of the pre-committed values <InlineMath>{`D_i`}</InlineMath> and <InlineMath>{`E_i`}</InlineMath>,
          with coefficient <InlineMath>{`\\rho_i`}</InlineMath> derived from the hash of all
          session state.
        </p>
        <p className="mt-3">
          This means <InlineMath>{`R_i`}</InlineMath> cannot be predicted before all commitments
          and the message are known.
        </p>
      </Theorem>

      <h3>The Group Commitment</h3>

      <p>
        The aggregate group commitment for the signature is:
      </p>

      <MathBlock>
        {`R = \\sum_{i \\in S} R_i = \\sum_{i \\in S} (D_i + [\\rho_i]E_i)`}
      </MathBlock>

      <Example title="Concrete Binding Example">
        <p className="mb-4">
          Consider a 2-of-3 signing with participants 1 and 2:
        </p>

        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="text-emerald-400 mb-1">Commitment list B:</p>
            <p className="text-gray-300">B = [(1, D₁, E₁), (2, D₂, E₂)]</p>
          </div>

          <div>
            <p className="text-indigo-400 mb-1">Binding values:</p>
            <p className="text-gray-300">ρ₁ = H₁(1, m, B)</p>
            <p className="text-gray-300">ρ₂ = H₁(2, m, B)</p>
          </div>

          <div>
            <p className="text-amber-400 mb-1">Group commitment:</p>
            <p className="text-gray-300">R = (D₁ + [ρ₁]E₁) + (D₂ + [ρ₂]E₂)</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          If any D or E changes, both ρ values change, so R changes unpredictably.
        </p>
      </Example>

      <h3>Critical Property: Pre-Image Resistance</h3>

      <p>
        The security of binding relies on the hash function's properties:
      </p>

      <Callout type="warning">
        <strong>Why Binding Works:</strong> Before all <InlineMath>{`D_i, E_i`}</InlineMath> and
        <InlineMath>{`m`}</InlineMath> are fixed, the adversary cannot predict <InlineMath>{`\\rho_i`}</InlineMath>.
        After they're fixed, the adversary cannot change their commitment without changing
        <InlineMath>{`\\rho_i`}</InlineMath> for everyone.
      </Callout>

      <h3>Summary</h3>

      <Definition title="FROST Binding at a Glance">
        <ul className="space-y-2">
          <li>
            <strong>Input:</strong> Participant ID, message, all commitments
          </li>
          <li>
            <strong>Output:</strong> Unique binding value <InlineMath>{`\\rho_i`}</InlineMath>
          </li>
          <li>
            <strong>Effect:</strong> Each response is context-specific
          </li>
          <li>
            <strong>Result:</strong> Cross-session attacks are impossible
          </li>
        </ul>
      </Definition>

      <p>
        Next, we'll see how this binding value is used to modify the nonce generation,
        completing the security picture.
      </p>
    </LessonLayout>
  );
}
