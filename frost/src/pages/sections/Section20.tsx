import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2>The Drijvers Attack</h2>

      <p>
        We've built the mathematical machinery for threshold signing. But before FROST,
        naive implementations were vulnerable to a devastating attack discovered by Drijvers
        and colleagues. Understanding this attack is crucial for appreciating FROST's
        security design.
      </p>

      <h3>The Attack Scenario</h3>

      <Definition title="Attack Setup">
        <ul className="space-y-2">
          <li>Multi-party Schnorr signatures with concurrent signing sessions</li>
          <li>Adversary controls participant <InlineMath>{`P_1`}</InlineMath></li>
          <li>Honest participants: <InlineMath>{`P_2, \\ldots, P_t`}</InlineMath></li>
          <li>Multiple parallel signing sessions are active simultaneously</li>
        </ul>
      </Definition>

      <p>
        The adversary opens many signing sessions at once, exploiting the parallel structure
        to mount a sophisticated forgery attack.
      </p>

      <h3>Wagner's k-Tree Algorithm</h3>

      <p>
        The attack leverages Wagner's generalized birthday algorithm for solving
        k-sum problems. The core idea:
      </p>

      <Theorem title="Wagner's Attack Strategy">
        <p>
          Given <InlineMath>{`T`}</InlineMath> parallel signing sessions with challenges
          <InlineMath>{`c_1, c_2, \\ldots, c_T`}</InlineMath>, find a linear combination:
        </p>
        <MathBlock>
          {`c^* = c_1 \\oplus c_2 \\oplus \\cdots \\oplus c_T`}
        </MathBlock>
        <p className="mt-3">
          where <InlineMath>{`c^*`}</InlineMath> is the challenge for a forged message
          <InlineMath>{`m^*`}</InlineMath> that was never authorized.
        </p>
      </Theorem>

      <h3>How the Attack Works</h3>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">Step 1: Open Many Sessions</h4>
          <p className="text-sm">
            Adversary opens <InlineMath>{`T`}</InlineMath> parallel signing sessions with
            honest participants, receiving commitment <InlineMath>{`R_j`}</InlineMath> for
            each session <InlineMath>{`j`}</InlineMath>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Step 2: Compute Challenges</h4>
          <p className="text-sm">
            For each session <InlineMath>{`j`}</InlineMath>:
          </p>
          <MathBlock>
            {`c_j = H(R_j \\| Y \\| m_j)`}
          </MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">Step 3: Solve the k-Sum</h4>
          <p className="text-sm">
            Using Wagner's algorithm, find indices and a target message <InlineMath>{`m^*`}</InlineMath>
            such that challenges combine to produce the target:
          </p>
          <MathBlock>
            {`c^* = c_1 + c_2 + \\cdots + c_T - (T-1) \\cdot c_{\\text{adversary}}`}
          </MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-rose-500/30">
          <h4 className="font-semibold text-rose-400 mb-2">Step 4: Forge Signature</h4>
          <p className="text-sm">
            Combine partial signatures from all sessions:
          </p>
          <MathBlock>
            {`z^* = z_1 + z_2 + \\cdots + z_T - (T-1) \\cdot z_{\\text{adversary}}`}
          </MathBlock>
          <p className="text-sm mt-2">
            This produces a valid signature for <InlineMath>{`m^*`}</InlineMath> without
            authorization!
          </p>
        </div>
      </div>

      <h3>Attack Complexity</h3>

      <Example title="Why the Attack Is Practical">
        <p className="mb-4">Compare the complexity:</p>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-emerald-400">Naive brute force:</p>
            <MathBlock>{`2^{256} \\text{ operations}`}</MathBlock>
            <p className="text-sm text-gray-400">Completely infeasible</p>
          </div>
          <div>
            <p className="font-semibold text-rose-400">Wagner's algorithm:</p>
            <MathBlock>{`\\approx 2^{b/(1+\\log k)} \\approx 2^{128/4} \\approx 2^{32} \\text{ operations}`}</MathBlock>
            <p className="text-sm text-gray-400">Feasible with modern hardware!</p>
          </div>
        </div>
      </Example>

      <Callout type="error">
        <strong>Critical Security Failure:</strong> With about <InlineMath>{`2^{32}`}</InlineMath>
        (roughly 4 billion) operations, an attacker can forge signatures. This is within
        reach of consumer hardware in minutes to hours.
      </Callout>

      <h3>Why Parallel Sessions Enable the Attack</h3>

      <p>
        The attack exploits the linear structure of Schnorr signatures:
      </p>

      <MathBlock>
        {`z_j = k_j + s \\cdot c_j`}
      </MathBlock>

      <p>
        If the adversary can choose how challenges combine:
      </p>

      <MathBlock>
        {`\\sum_j z_j = \\sum_j k_j + s \\cdot \\sum_j c_j`}
      </MathBlock>

      <p>
        Then by manipulating their own contributions across sessions, they can construct
        a valid signature for an unauthorized message.
      </p>

      <h3>What Makes This Attack Possible</h3>

      <Definition title="Attack Prerequisites">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Parallel sessions:</strong> Multiple signing requests processed concurrently
          </li>
          <li>
            <strong>Predictable challenges:</strong> Adversary can compute all challenges
            before committing
          </li>
          <li>
            <strong>Linear combination:</strong> Partial signatures can be combined across
            sessions
          </li>
          <li>
            <strong>No binding:</strong> Nothing ties a participant's response to a specific
            session
          </li>
        </ol>
      </Definition>

      <h3>Real-World Impact</h3>

      <p>
        Before FROST's binding mechanism, threshold signature schemes faced a difficult choice:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-rose-500/30">
          <h4 className="font-semibold text-rose-400 mb-2">Allow Parallelism</h4>
          <p className="text-sm">Fast and practical, but vulnerable to Drijvers attack</p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Sequential Only</h4>
          <p className="text-sm">Secure, but extremely slow for high-volume applications</p>
        </div>
      </div>

      <Callout type="info">
        <strong>FROST's Innovation:</strong> FROST achieves both security AND efficiency
        by using a binding technique that makes parallel sessions safe. We'll explore
        exactly how in the following sections.
      </Callout>

      <h3>Key Takeaway</h3>

      <p>
        The Drijvers attack demonstrates that naively distributing Schnorr signatures is
        dangerous. The linear algebraic structure that makes Schnorr elegant also makes it
        vulnerable to sophisticated attacks when implemented carelessly. FROST's binding
        mechanism is specifically designed to defeat this attack.
      </p>
    </LessonLayout>
  );
}
