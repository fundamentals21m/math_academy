import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2>Concrete Security Example</h2>

      <p>
        Let's make the security properties concrete by analyzing what an adversary
        can and cannot do in a specific FROST configuration. This bridges the gap
        between abstract theorems and practical deployment.
      </p>

      <h3>The Scenario</h3>

      <Definition title="Example Configuration">
        <ul className="space-y-2">
          <li><strong>Threshold:</strong> <InlineMath>{`t = 3`}</InlineMath> (3 participants needed to sign)</li>
          <li><strong>Total participants:</strong> <InlineMath>{`n = 5`}</InlineMath></li>
          <li><strong>Adversary controls:</strong> Participants 1 and 2 (2 parties, less than threshold)</li>
          <li><strong>Honest parties:</strong> Participants 3, 4, and 5</li>
        </ul>
      </Definition>

      <h3>What the Adversary Knows</h3>

      <Example title="Adversary's Information">
        <p className="mb-4">
          The adversary controlling participants 1 and 2 has access to:
        </p>

        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-indigo-400 font-semibold mb-2">Their own secret shares:</p>
            <MathBlock>
              {`s_1 = f(1), \\quad s_2 = f(2)`}
            </MathBlock>
            <p className="text-sm text-gray-400">
              where <InlineMath>{`f(x)`}</InlineMath> is the degree-2 polynomial with
              <InlineMath>{`f(0) = s`}</InlineMath>
            </p>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-emerald-400 font-semibold mb-2">Public information:</p>
            <ul className="text-sm space-y-1">
              <li>Group public key <InlineMath>{`Y = [s]G`}</InlineMath></li>
              <li>Verification shares <InlineMath>{`Y_3, Y_4, Y_5`}</InlineMath></li>
              <li>All past signatures <InlineMath>{`(R, z)`}</InlineMath> on messages</li>
              <li>All commitment lists from signing sessions</li>
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-amber-400 font-semibold mb-2">What they can observe:</p>
            <ul className="text-sm space-y-1">
              <li>Commitments <InlineMath>{`D_i, E_i`}</InlineMath> from honest parties</li>
              <li>Signature shares <InlineMath>{`z_i`}</InlineMath> from honest parties (when signing with them)</li>
              <li>All protocol messages on the network</li>
            </ul>
          </div>
        </div>
      </Example>

      <h3>What the Adversary CANNOT Do</h3>

      <Theorem title="Security Guarantees">
        <p>
          With control of only 2 participants (below the threshold of 3), the adversary
          cannot:
        </p>
        <ol className="list-decimal list-inside space-y-3 mt-3">
          <li>
            <strong>Forge a signature:</strong> Cannot produce a valid <InlineMath>{`(R, z)`}</InlineMath>
            for any message without cooperation from at least one honest party
          </li>
          <li>
            <strong>Extract the group secret:</strong> Cannot compute <InlineMath>{`s`}</InlineMath>
            from their 2 shares (information-theoretic security)
          </li>
          <li>
            <strong>Extract honest shares:</strong> Cannot compute <InlineMath>{`s_3, s_4,`}</InlineMath> or
            <InlineMath>{`s_5`}</InlineMath> from protocol transcripts
          </li>
          <li>
            <strong>Combine sessions:</strong> Cannot use responses from different signing
            sessions to forge (binding prevents this)
          </li>
        </ol>
      </Theorem>

      <h3>Why the Adversary Is Stuck</h3>

      <Example title="Attack Analysis">
        <p className="mb-4 font-semibold">Attack 1: Direct Forgery</p>
        <p className="text-sm mb-4">
          Adversary tries to compute <InlineMath>{`z = k + s \\cdot c`}</InlineMath> without
          honest participation.
        </p>
        <div className="p-3 rounded-lg bg-rose-900/20 border border-rose-500/30 mb-6">
          <p className="text-rose-400 text-sm">
            <strong>Why it fails:</strong> Adversary doesn't know <InlineMath>{`s`}</InlineMath>.
            With only <InlineMath>{`s_1, s_2`}</InlineMath>, they have 2 points on a degree-2
            polynomial but need 3 to determine <InlineMath>{`s = f(0)`}</InlineMath>.
          </p>
        </div>

        <p className="mb-4 font-semibold">Attack 2: Partial Signature Exploitation</p>
        <p className="text-sm mb-4">
          Adversary participates in signing, hoping to extract information from honest
          parties' signature shares.
        </p>
        <div className="p-3 rounded-lg bg-rose-900/20 border border-rose-500/30 mb-6">
          <p className="text-rose-400 text-sm">
            <strong>Why it fails:</strong> Each signature share <InlineMath>{`z_i`}</InlineMath>
            is masked by the nonce contribution <InlineMath>{`d_i + e_i \\cdot \\rho_i`}</InlineMath>.
            Without knowing <InlineMath>{`d_i, e_i`}</InlineMath>, the adversary cannot extract
            <InlineMath>{`s_i`}</InlineMath> from <InlineMath>{`z_i`}</InlineMath>.
          </p>
        </div>

        <p className="mb-4 font-semibold">Attack 3: Parallel Session (Drijvers)</p>
        <p className="text-sm mb-4">
          Adversary opens multiple sessions, trying to combine partial signatures.
        </p>
        <div className="p-3 rounded-lg bg-rose-900/20 border border-rose-500/30">
          <p className="text-rose-400 text-sm">
            <strong>Why it fails:</strong> Binding values <InlineMath>{`\\rho_i`}</InlineMath>
            depend on ALL commitments. Changing commitments in one session changes the
            binding for all participants, breaking the linear combination needed for
            Wagner's algorithm.
          </p>
        </div>
      </Example>

      <h3>What the Adversary CAN Do</h3>

      <p>
        The adversary has some capabilities, but they don't allow forgery:
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-amber-900/20 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Denial of Service</h4>
          <p className="text-sm">
            Adversary can refuse to participate, preventing signatures that require their
            cooperation. However, honest parties 3, 4, 5 can still sign without them.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-900/20 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Invalid Share Submission</h4>
          <p className="text-sm">
            Adversary can submit incorrect signature shares. These are detected during
            verification and the adversary is identified.
          </p>
          <MathBlock>
            {`[z_i]G \\neq R_i + [c \\cdot \\lambda_i]Y_i \\Rightarrow \\text{Share rejected}`}
          </MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-amber-900/20 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Selective Participation</h4>
          <p className="text-sm">
            Adversary can choose which signing sessions to participate in. But they cannot
            force honest parties to include them or prevent honest-only signatures.
          </p>
        </div>
      </div>

      <Callout type="info">
        <strong>Key Observation:</strong> All adversary capabilities are either detected
        and attributed (invalid shares) or don't help with forgery (denial of service).
        The threshold property ensures 3 honest parties can operate independently.
      </Callout>

      <h3>The Information Gap</h3>

      <Example title="What 2 Shares Reveal">
        <p className="mb-4">
          With shares <InlineMath>{`s_1, s_2`}</InlineMath> for a degree-2 polynomial:
        </p>

        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="text-gray-400 mb-1">Known points:</p>
            <p>(1, s₁) and (2, s₂)</p>
          </div>

          <div>
            <p className="text-gray-400 mb-1">Polynomial form:</p>
            <p>f(x) = a₀ + a₁x + a₂x²</p>
          </div>

          <div>
            <p className="text-gray-400 mb-1">Secret is:</p>
            <p>s = f(0) = a₀</p>
          </div>

          <div className="pt-3 border-t border-dark-700">
            <p className="text-rose-400">
              Problem: 2 equations, 3 unknowns (a₀, a₁, a₂)
            </p>
            <p className="text-gray-400 mt-2">
              Every possible secret value is consistent with the known points!
            </p>
          </div>
        </div>
      </Example>

      <Theorem title="Information-Theoretic Bound">
        <p>
          With <InlineMath>{`t - 1 = 2`}</InlineMath> shares of a degree <InlineMath>{`t - 1 = 2`}</InlineMath>
          polynomial, the adversary has <strong>zero information</strong> about the secret.
        </p>
        <p className="mt-3">
          This is not just computational hardness—it's mathematically impossible to narrow
          down the secret, even with unlimited computing power.
        </p>
      </Theorem>

      <h3>Summary</h3>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">3-of-5 FROST Security</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">Adversary (2 parties) cannot:</p>
            <ul className="space-y-1">
              <li>Forge signatures</li>
              <li>Extract group secret</li>
              <li>Learn honest parties' shares</li>
              <li>Exploit parallel sessions</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Honest parties (3+) can:</p>
            <ul className="space-y-1">
              <li>Sign any message</li>
              <li>Exclude adversary entirely</li>
              <li>Detect invalid shares</li>
              <li>Operate with full security</li>
            </ul>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}
