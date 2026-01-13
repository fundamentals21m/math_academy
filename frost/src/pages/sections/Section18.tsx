import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2>Application to Schnorr Response</h2>

      <p>
        Now we can finally see how share conversion enables distributed computation of the
        Schnorr signature response <InlineMath>{`z = k + s \\cdot c`}</InlineMath> without
        ever reconstructing the secret key <InlineMath>{`s`}</InlineMath> or the nonce
        <InlineMath>{`k`}</InlineMath>.
      </p>

      <h3>Recall the Components</h3>

      <Definition title="What Each Participant Has">
        <ul className="space-y-2">
          <li>
            <strong>Polynomial share of secret key:</strong>
            <InlineMath>{`s_i`}</InlineMath> where <InlineMath>{`s = \\sum_i s_i \\cdot \\lambda_i`}</InlineMath>
          </li>
          <li>
            <strong>Additive share of nonce:</strong>
            <InlineMath>{`k_i`}</InlineMath> where <InlineMath>{`k = \\sum_i k_i`}</InlineMath>
          </li>
          <li>
            <strong>Public challenge:</strong>
            <InlineMath>{`c = H(R \\| Y \\| m)`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3>The Single-Party Formula</h3>

      <p>
        In standard Schnorr, the signer computes:
      </p>

      <MathBlock>
        {`z = k + s \\cdot c`}
      </MathBlock>

      <p>
        We need to compute this same <InlineMath>{`z`}</InlineMath> using only shares.
      </p>

      <h3>The FROST Computation</h3>

      <Theorem title="Distributed Schnorr Response">
        <p>
          Each participant <InlineMath>{`i`}</InlineMath> computes their signature share:
        </p>
        <MathBlock>
          {`z_i = k_i + (s_i \\cdot \\lambda_i) \\cdot c`}
        </MathBlock>
        <p className="mt-3">
          The final response is simply:
        </p>
        <MathBlock>
          {`z = \\sum_{i \\in S} z_i`}
        </MathBlock>
      </Theorem>

      <h3>Why This Works</h3>

      <p>
        Let's verify that aggregating the shares produces the correct result:
      </p>

      <MathBlock>
        {`z = \\sum_{i \\in S} z_i = \\sum_{i \\in S} \\left( k_i + s_i \\cdot \\lambda_i \\cdot c \\right)`}
      </MathBlock>

      <p>
        Separating the sums:
      </p>

      <MathBlock>
        {`z = \\sum_{i \\in S} k_i + \\sum_{i \\in S} s_i \\cdot \\lambda_i \\cdot c`}
      </MathBlock>

      <p>
        The first sum is the additive reconstruction of <InlineMath>{`k`}</InlineMath>:
      </p>

      <MathBlock>
        {`\\sum_{i \\in S} k_i = k`}
      </MathBlock>

      <p>
        The second sum is the polynomial reconstruction of <InlineMath>{`s`}</InlineMath> multiplied by
        <InlineMath>{`c`}</InlineMath>:
      </p>

      <MathBlock>
        {`\\sum_{i \\in S} s_i \\cdot \\lambda_i \\cdot c = c \\cdot \\sum_{i \\in S} s_i \\cdot \\lambda_i = c \\cdot s = s \\cdot c`}
      </MathBlock>

      <p>
        Therefore:
      </p>

      <MathBlock>
        {`z = k + s \\cdot c \\quad \\checkmark`}
      </MathBlock>

      <Callout type="success">
        <strong>The Magic Revealed:</strong> The Lagrange coefficients naturally convert
        the polynomial shares to additive form during the summation! We get:
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{`k`}</InlineMath> from adding the additive nonce shares</li>
          <li><InlineMath>{`s \\cdot c`}</InlineMath> from the weighted sum of key shares</li>
        </ul>
      </Callout>

      <Example title="Complete Numerical Example">
        <p className="mb-4">
          Using our running example with participants {'{1, 2, 3}'}:
        </p>

        <div className="space-y-4">
          <div>
            <h5 className="font-semibold mb-2">Given values:</h5>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="p-2 rounded bg-dark-800/50">Nonce shares: <InlineMath>{`k_1=100, k_2=200, k_3=150`}</InlineMath></div>
              <div className="p-2 rounded bg-dark-800/50">Key shares: <InlineMath>{`s_1=42, s_2=67, s_3=31`}</InlineMath></div>
              <div className="p-2 rounded bg-dark-800/50">Challenge: <InlineMath>{`c = 5`}</InlineMath></div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Lagrange coefficients:</h5>
            <MathBlock>
              {`\\lambda_1 = 3, \\quad \\lambda_2 = -3, \\quad \\lambda_3 = 1`}
            </MathBlock>
          </div>

          <div>
            <h5 className="font-semibold text-indigo-400 mb-2">Participant 1 computes:</h5>
            <MathBlock>
              {`z_1 = k_1 + s_1 \\cdot \\lambda_1 \\cdot c = 100 + 42 \\cdot 3 \\cdot 5 = 100 + 630 = 730`}
            </MathBlock>
          </div>

          <div>
            <h5 className="font-semibold text-emerald-400 mb-2">Participant 2 computes:</h5>
            <MathBlock>
              {`z_2 = k_2 + s_2 \\cdot \\lambda_2 \\cdot c = 200 + 67 \\cdot (-3) \\cdot 5 = 200 - 1005 = -805`}
            </MathBlock>
          </div>

          <div>
            <h5 className="font-semibold text-amber-400 mb-2">Participant 3 computes:</h5>
            <MathBlock>
              {`z_3 = k_3 + s_3 \\cdot \\lambda_3 \\cdot c = 150 + 31 \\cdot 1 \\cdot 5 = 150 + 155 = 305`}
            </MathBlock>
          </div>

          <div className="border-t border-dark-700 pt-4">
            <h5 className="font-semibold mb-2">Aggregation:</h5>
            <MathBlock>
              {`z = z_1 + z_2 + z_3 = 730 + (-805) + 305 = 230`}
            </MathBlock>
          </div>

          <div className="border-t border-dark-700 pt-4">
            <h5 className="font-semibold mb-2">Verification:</h5>
            <p className="text-sm mb-2">The secret is <InlineMath>{`s = 42 \\cdot 3 + 67 \\cdot (-3) + 31 \\cdot 1 = 126 - 201 + 31 = -44`}</InlineMath></p>
            <p className="text-sm mb-2">The nonce is <InlineMath>{`k = 100 + 200 + 150 = 450`}</InlineMath></p>
            <MathBlock>
              {`z = k + s \\cdot c = 450 + (-44) \\cdot 5 = 450 - 220 = 230 \\quad \\checkmark`}
            </MathBlock>
          </div>
        </div>
      </Example>

      <h3>What Each Participant Knows</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">Participant i Knows</h4>
          <ul className="space-y-1 text-sm">
            <li>Their own <InlineMath>{`s_i`}</InlineMath> and <InlineMath>{`k_i`}</InlineMath></li>
            <li>The Lagrange coefficient <InlineMath>{`\\lambda_i`}</InlineMath></li>
            <li>The public challenge <InlineMath>{`c`}</InlineMath></li>
            <li>Their computed share <InlineMath>{`z_i`}</InlineMath></li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-rose-500/30">
          <h4 className="font-semibold text-rose-400 mb-2">Participant i Does NOT Know</h4>
          <ul className="space-y-1 text-sm">
            <li>Other participants' shares <InlineMath>{`s_j, k_j`}</InlineMath></li>
            <li>The full secret <InlineMath>{`s`}</InlineMath></li>
            <li>The full nonce <InlineMath>{`k`}</InlineMath></li>
            <li>Other participants' <InlineMath>{`z_j`}</InlineMath> values</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <strong>Security Property:</strong> Each <InlineMath>{`z_i`}</InlineMath> looks random
        because it's masked by the random nonce share <InlineMath>{`k_i`}</InlineMath>. An observer
        seeing <InlineMath>{`z_i`}</InlineMath> learns nothing about <InlineMath>{`s_i`}</InlineMath>.
      </Callout>

      <h3>Summary: The FROST Response Formula</h3>

      <Definition title="FROST Signature Share">
        <p>
          Each participant <InlineMath>{`i`}</InlineMath> in signing set <InlineMath>{`S`}</InlineMath>
          computes:
        </p>
        <MathBlock>
          {`z_i = k_i + s_i \\cdot \\lambda_i \\cdot c`}
        </MathBlock>
        <p className="mt-3">
          This is the participant's contribution to the final signature response
          <InlineMath>{`z = \\sum_i z_i`}</InlineMath>.
        </p>
      </Definition>
    </LessonLayout>
  );
}
