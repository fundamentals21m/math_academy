import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2>Phase 1: Distributed Key Generation (DKG)</h2>

      <p>
        The Distributed Key Generation protocol creates the group key and individual
        shares without any single party ever knowing the complete secret. This is the
        foundation of FROST's security.
      </p>

      <h3>DKG Goal</h3>

      <Definition title="DKG Objectives">
        <p>Generate shares of a secret key <InlineMath>{`s`}</InlineMath> such that:</p>
        <ul className="space-y-2 mt-3">
          <li>
            <strong>Group public key:</strong> <InlineMath>{`Y = [s]G`}</InlineMath> is computable by all
          </li>
          <li>
            <strong>Share correctness:</strong> Each participant gets <InlineMath>{`s_i`}</InlineMath>
            where <InlineMath>{`s = f(0)`}</InlineMath> for some degree <InlineMath>{`t-1`}</InlineMath> polynomial
          </li>
          <li>
            <strong>No reconstruction:</strong> No single party ever knows <InlineMath>{`s`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3>Round 1: Commitment Generation</h3>

      <p>
        Each participant <InlineMath>{`P_i`}</InlineMath> independently performs the following steps:
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-indigo-500/30">
          <h4 className="font-semibold text-indigo-400 mb-2">Step 1: Sample Polynomial</h4>
          <p className="text-sm mb-3">
            Sample random coefficients <InlineMath>{`a_{i,0}, a_{i,1}, \\ldots, a_{i,t-1}`}</InlineMath>
            from <InlineMath>{`\\mathbb{Z}_q`}</InlineMath>:
          </p>
          <MathBlock>
            {`f_i(x) = a_{i,0} + a_{i,1} \\cdot x + a_{i,2} \\cdot x^2 + \\cdots + a_{i,t-1} \\cdot x^{t-1}`}
          </MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">Step 2: Compute Commitments</h4>
          <p className="text-sm mb-3">
            Compute and broadcast Feldman commitments to the coefficients:
          </p>
          <MathBlock>
            {`C_i = ([a_{i,0}]G, [a_{i,1}]G, \\ldots, [a_{i,t-1}]G)`}
          </MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Step 3: Proof of Knowledge</h4>
          <p className="text-sm mb-3">
            Compute and broadcast a Schnorr proof of knowledge for <InlineMath>{`a_{i,0}`}</InlineMath>:
          </p>
          <MathBlock>
            {`\\sigma_i = (R_i, \\mu_i) \\text{ where } R_i = [k_i]G, \\mu_i = k_i + a_{i,0} \\cdot c_i`}
          </MathBlock>
          <p className="text-sm text-gray-400 mt-2">
            <InlineMath>{`c_i = H(i, \\Phi, [a_{i,0}]G, R_i)`}</InlineMath> where <InlineMath>{`\\Phi`}</InlineMath> is context string
          </p>
        </div>
      </div>

      <Callout type="info">
        <strong>Why Proof of Knowledge?</strong> The proof <InlineMath>{`\\sigma_i`}</InlineMath>
        ensures each participant actually knows their contribution <InlineMath>{`a_{i,0}`}</InlineMath>
        and isn't just copying others' commitments.
      </Callout>

      <h3>Round 2: Share Distribution</h3>

      <p>
        After Round 1, each participant <InlineMath>{`P_i`}</InlineMath>:
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-indigo-500/30">
          <h4 className="font-semibold text-indigo-400 mb-2">Step 1: Verify Proofs</h4>
          <p className="text-sm">
            For each <InlineMath>{`P_j`}</InlineMath>, verify the proof <InlineMath>{`\\sigma_j`}</InlineMath>:
          </p>
          <MathBlock>
            {`[\\mu_j]G \\stackrel{?}{=} R_j + [c_j] \\cdot C_{j,0}`}
          </MathBlock>
          <p className="text-sm text-gray-400 mt-2">
            Reject participants with invalid proofs
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">Step 2: Compute and Send Shares</h4>
          <p className="text-sm mb-3">
            Send to each <InlineMath>{`P_j`}</InlineMath> their share of your polynomial:
          </p>
          <MathBlock>
            {`s_{i,j} = f_i(j) = a_{i,0} + a_{i,1} \\cdot j + \\cdots + a_{i,t-1} \\cdot j^{t-1}`}
          </MathBlock>
          <p className="text-sm text-gray-400 mt-2">
            This is sent privately (encrypted channel or secure messaging)
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Step 3: Verify Received Shares</h4>
          <p className="text-sm mb-3">
            For each share <InlineMath>{`s_{j,i}`}</InlineMath> received from <InlineMath>{`P_j`}</InlineMath>,
            verify against their commitments:
          </p>
          <MathBlock>
            {`[s_{j,i}]G \\stackrel{?}{=} C_{j,0} + [i]C_{j,1} + [i^2]C_{j,2} + \\cdots + [i^{t-1}]C_{j,t-1}`}
          </MathBlock>
        </div>
      </div>

      <h3>Computing Final Values</h3>

      <p>
        After verification, each participant <InlineMath>{`P_i`}</InlineMath> computes:
      </p>

      <Example title="Final Computations">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-indigo-400 mb-2">Own secret share:</p>
            <MathBlock>
              {`s_i = \\sum_{j=1}^{n} s_{j,i} = \\sum_{j=1}^{n} f_j(i)`}
            </MathBlock>
          </div>

          <div>
            <p className="font-semibold text-emerald-400 mb-2">Own verification share:</p>
            <MathBlock>
              {`Y_i = [s_i]G`}
            </MathBlock>
          </div>

          <div>
            <p className="font-semibold text-amber-400 mb-2">Group public key:</p>
            <MathBlock>
              {`Y = \\sum_{j=1}^{n} C_{j,0} = [\\sum_{j=1}^{n} a_{j,0}]G = [s]G`}
            </MathBlock>
          </div>
        </div>
      </Example>

      <h3>Why This Works</h3>

      <Theorem title="DKG Correctness">
        <p>The combined polynomial is:</p>
        <MathBlock>
          {`f(x) = \\sum_{i=1}^{n} f_i(x)`}
        </MathBlock>
        <p className="mt-3">The group secret is:</p>
        <MathBlock>
          {`s = f(0) = \\sum_{i=1}^{n} f_i(0) = \\sum_{i=1}^{n} a_{i,0}`}
        </MathBlock>
        <p className="mt-3">Each participant's share is:</p>
        <MathBlock>
          {`s_j = f(j) = \\sum_{i=1}^{n} f_i(j)`}
        </MathBlock>
        <p className="mt-3">
          These are valid Shamir shares of <InlineMath>{`s`}</InlineMath> on a degree <InlineMath>{`t-1`}</InlineMath> polynomial.
        </p>
      </Theorem>

      <h3>Security Properties</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">What's Guaranteed</h4>
          <ul className="space-y-2 text-sm">
            <li>No party knows <InlineMath>{`s`}</InlineMath> (only their contribution)</li>
            <li>All shares are verifiable via Feldman commitments</li>
            <li>Invalid shares are detected and attributed</li>
            <li>Proofs ensure participants "know" their values</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-rose-500/30">
          <h4 className="font-semibold text-rose-400 mb-2">Adversary Limitations</h4>
          <ul className="space-y-2 text-sm">
            <li>Cannot bias <InlineMath>{`s`}</InlineMath> without detection</li>
            <li>Cannot learn <InlineMath>{`s`}</InlineMath> from their shares</li>
            <li>Cannot forge commitments (discrete log hard)</li>
            <li>Cannot repudiate their contributions</li>
          </ul>
        </div>
      </div>

      <Callout type="warning">
        <strong>Robustness Note:</strong> Basic FROST DKG aborts if any participant
        misbehaves. More robust variants exist that can continue with honest participants,
        but they require additional complexity.
      </Callout>

      <h3>DKG Summary</h3>

      <Definition title="DKG Output">
        <p>After successful DKG, each participant <InlineMath>{`P_i`}</InlineMath> has:</p>
        <ul className="space-y-2 mt-3">
          <li>
            Secret share <InlineMath>{`s_i`}</InlineMath> (keep private)
          </li>
          <li>
            Verification share <InlineMath>{`Y_i = [s_i]G`}</InlineMath> (public)
          </li>
          <li>
            Group public key <InlineMath>{`Y = [s]G`}</InlineMath> (public)
          </li>
        </ul>
        <p className="mt-3">
          The protocol can now proceed to preprocessing and signing phases.
        </p>
      </Definition>
    </LessonLayout>
  );
}
