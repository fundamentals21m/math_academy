import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>Two Types of Secret Sharing</h2>

      <p>
        Understanding the distinction between polynomial (Shamir) shares and additive shares
        is essential for grasping how FROST works. These two approaches have different
        properties, and FROST cleverly uses both.
      </p>

      <h3>Shamir (Polynomial) Shares</h3>

      <Definition title="Shamir Secret Sharing">
        <p>
          Given a secret <InlineMath>{`s`}</InlineMath> and threshold <InlineMath>{`t`}</InlineMath>:
        </p>
        <MathBlock>
          {`f(x) = s + a_1 x + a_2 x^2 + \\cdots + a_{t-1} x^{t-1}`}
        </MathBlock>
        <p className="mt-3">
          Shares are points on the polynomial:
        </p>
        <MathBlock>
          {`(1, f(1)), \\, (2, f(2)), \\, \\ldots, \\, (n, f(n))`}
        </MathBlock>
        <p className="mt-3">
          Reconstruction uses Lagrange coefficients:
        </p>
        <MathBlock>
          {`s = \\sum_{i \\in S} s_i \\cdot \\lambda_i`}
        </MathBlock>
      </Definition>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">Key Properties of Shamir Shares</h4>
        <ul className="space-y-2">
          <li>
            <strong>Threshold flexibility:</strong> Any <InlineMath>{`t`}</InlineMath> of
            <InlineMath>{`n`}</InlineMath> shares suffice
          </li>
          <li>
            <strong>Information-theoretic security:</strong> <InlineMath>{`t-1`}</InlineMath>
            shares reveal nothing
          </li>
          <li>
            <strong>Requires coordination:</strong> A dealer or DKG protocol is needed
          </li>
          <li>
            <strong>Weighted reconstruction:</strong> Lagrange coefficients depend on which
            participants are involved
          </li>
        </ul>
      </div>

      <h3>Additive Shares</h3>

      <Definition title="Additive Secret Sharing">
        <p>
          Given a secret <InlineMath>{`k`}</InlineMath> and <InlineMath>{`t`}</InlineMath> participants:
        </p>
        <MathBlock>
          {`k = k_1 + k_2 + \\cdots + k_t`}
        </MathBlock>
        <p className="mt-3">
          where each <InlineMath>{`k_i`}</InlineMath> is a share. Reconstruction is simply:
        </p>
        <MathBlock>
          {`k = \\sum_{i=1}^{t} k_i`}
        </MathBlock>
      </Definition>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Key Properties of Additive Shares</h4>
        <ul className="space-y-2">
          <li>
            <strong>All-or-nothing:</strong> ALL <InlineMath>{`t`}</InlineMath> shares are needed
            (<InlineMath>{`t`}</InlineMath>-of-<InlineMath>{`t`}</InlineMath>)
          </li>
          <li>
            <strong>Non-interactive generation:</strong> Each party generates their own
            <InlineMath>{`k_i`}</InlineMath> independently
          </li>
          <li>
            <strong>Simple reconstruction:</strong> Just add the shares
          </li>
          <li>
            <strong>Equal weighting:</strong> Each share contributes equally (weight = 1)
          </li>
        </ul>
      </div>

      <h3>Side-by-Side Comparison</h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left p-3">Aspect</th>
              <th className="text-left p-3 text-emerald-400">Shamir (Polynomial)</th>
              <th className="text-left p-3 text-amber-400">Additive</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700/50">
              <td className="p-3">Structure</td>
              <td className="p-3">Points on polynomial</td>
              <td className="p-3">Random values that sum to secret</td>
            </tr>
            <tr className="border-b border-dark-700/50">
              <td className="p-3">Threshold</td>
              <td className="p-3"><InlineMath>{`t`}</InlineMath>-of-<InlineMath>{`n`}</InlineMath></td>
              <td className="p-3"><InlineMath>{`t`}</InlineMath>-of-<InlineMath>{`t`}</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700/50">
              <td className="p-3">Generation</td>
              <td className="p-3">Dealer or DKG required</td>
              <td className="p-3">Each party generates independently</td>
            </tr>
            <tr className="border-b border-dark-700/50">
              <td className="p-3">Reconstruction</td>
              <td className="p-3"><InlineMath>{`\\sum s_i \\cdot \\lambda_i`}</InlineMath></td>
              <td className="p-3"><InlineMath>{`\\sum k_i`}</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700/50">
              <td className="p-3">Flexibility</td>
              <td className="p-3">Any subset of size <InlineMath>{`t`}</InlineMath></td>
              <td className="p-3">Fixed set of <InlineMath>{`t`}</InlineMath> parties</td>
            </tr>
            <tr className="border-b border-dark-700/50">
              <td className="p-3">Use in FROST</td>
              <td className="p-3">Long-term key <InlineMath>{`s`}</InlineMath></td>
              <td className="p-3">Ephemeral nonce <InlineMath>{`k`}</InlineMath></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Example title="Generating Both Types of Shares">
        <p className="mb-4">Consider a 3-of-5 threshold scheme:</p>

        <div className="space-y-6">
          <div>
            <h5 className="font-semibold text-emerald-400 mb-2">Shamir shares of s = 100:</h5>
            <p className="text-sm mb-2">Dealer chooses polynomial <InlineMath>{`f(x) = 100 + 25x + 7x^2`}</InlineMath></p>
            <div className="grid grid-cols-5 gap-2 font-mono text-sm">
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`s_1 = 132`}</InlineMath></div>
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`s_2 = 178`}</InlineMath></div>
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`s_3 = 238`}</InlineMath></div>
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`s_4 = 312`}</InlineMath></div>
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`s_5 = 400`}</InlineMath></div>
            </div>
            <p className="text-sm mt-2 text-gray-400">Any 3 can reconstruct; shares differ widely</p>
          </div>

          <div>
            <h5 className="font-semibold text-amber-400 mb-2">Additive shares of k (participants 1, 2, 3):</h5>
            <p className="text-sm mb-2">Each generates random value independently</p>
            <div className="grid grid-cols-3 gap-2 font-mono text-sm">
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`k_1 = 47`}</InlineMath></div>
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`k_2 = 83`}</InlineMath></div>
              <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`k_3 = 120`}</InlineMath></div>
            </div>
            <p className="text-sm mt-2 text-gray-400">
              <InlineMath>{`k = 47 + 83 + 120 = 250`}</InlineMath>; all 3 shares needed
            </p>
          </div>
        </div>
      </Example>

      <h3>Why FROST Uses Both</h3>

      <Callout type="info">
        <strong>The FROST Strategy:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Long-term secret <InlineMath>{`s`}</InlineMath>:</strong> Use Shamir sharing
            for t-of-n flexibility (any subset can sign)
          </li>
          <li>
            <strong>Ephemeral nonce <InlineMath>{`k`}</InlineMath>:</strong> Use additive sharing
            for efficiency (no coordination needed)
          </li>
        </ul>
      </Callout>

      <p>
        For the nonce, we already know which <InlineMath>{`t`}</InlineMath> participants are signing.
        Each can generate their own random <InlineMath>{`k_i`}</InlineMath> without communication.
        The additive structure is perfect for this use case.
      </p>

      <p>
        For the long-term secret, we need flexibility - different subsets might sign different
        messages at different times. Shamir's threshold property provides this flexibility.
      </p>

      <h3>The Combining Challenge</h3>

      <p>
        Recall the Schnorr response formula:
      </p>

      <MathBlock>
        {`z = k + s \\cdot c`}
      </MathBlock>

      <p>
        We have:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li><InlineMath>{`k`}</InlineMath> additively shared: <InlineMath>{`k = \\sum k_i`}</InlineMath></li>
        <li><InlineMath>{`s`}</InlineMath> polynomially shared: <InlineMath>{`s = \\sum s_i \\cdot \\lambda_i`}</InlineMath></li>
      </ul>

      <p>
        How do we add these together when they have different structures? The answer lies in
        a beautiful mathematical transformation that we'll explore next.
      </p>

      <Callout type="warning">
        <strong>Key Question:</strong> Can we convert additive shares to polynomial shares
        (or vice versa) so that they can be combined? The answer is yes, using Lagrange
        coefficients - and this is the heart of FROST's mathematical elegance.
      </Callout>
    </LessonLayout>
  );
}
