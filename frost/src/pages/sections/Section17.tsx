import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2>Concrete Example: Share Conversion</h2>

      <p>
        Let's work through a complete numerical example of converting additive shares to
        polynomial shares and back. This will cement your understanding of the transformation
        theorem.
      </p>

      <h3>Setup</h3>

      <p>
        Consider a 3-of-5 threshold scheme where participants {'{1, 2, 3}'} are signing.
      </p>

      <Definition title="Our Example Parameters">
        <ul className="space-y-2">
          <li>Threshold: <InlineMath>{`t = 3`}</InlineMath></li>
          <li>Total participants: <InlineMath>{`n = 5`}</InlineMath></li>
          <li>Signing set: <InlineMath>{`S = \\{1, 2, 3\\}`}</InlineMath></li>
        </ul>
      </Definition>

      <h3>Step 1: Generate Additive Nonce Shares</h3>

      <p>
        Each participant independently generates a random nonce share:
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-indigo-500/30">
          <h4 className="font-semibold text-indigo-400 mb-2">Participant 1</h4>
          <MathBlock>{`k_1 = 100`}</MathBlock>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">Participant 2</h4>
          <MathBlock>{`k_2 = 200`}</MathBlock>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Participant 3</h4>
          <MathBlock>{`k_3 = 150`}</MathBlock>
        </div>
      </div>

      <p>
        The group nonce (which no one computes directly) is:
      </p>

      <MathBlock>
        {`k = k_1 + k_2 + k_3 = 100 + 200 + 150 = 450`}
      </MathBlock>

      <h3>Step 2: Compute Lagrange Coefficients</h3>

      <Example title="Lagrange Coefficients for Signing Set {1, 2, 3}">
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-indigo-400 font-semibold">For participant 1:</p>
            <MathBlock>
              {`\\lambda_1 = \\frac{(0-2)(0-3)}{(1-2)(1-3)} = \\frac{(-2)(-3)}{(-1)(-2)} = \\frac{6}{2} = 3`}
            </MathBlock>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-emerald-400 font-semibold">For participant 2:</p>
            <MathBlock>
              {`\\lambda_2 = \\frac{(0-1)(0-3)}{(2-1)(2-3)} = \\frac{(-1)(-3)}{(1)(-1)} = \\frac{3}{-1} = -3`}
            </MathBlock>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-amber-400 font-semibold">For participant 3:</p>
            <MathBlock>
              {`\\lambda_3 = \\frac{(0-1)(0-2)}{(3-1)(3-2)} = \\frac{(-1)(-2)}{(2)(1)} = \\frac{2}{2} = 1`}
            </MathBlock>
          </div>
        </div>
      </Example>

      <Callout type="info">
        <strong>Sanity Check:</strong>
        <MathBlock>{`\\lambda_1 + \\lambda_2 + \\lambda_3 = 3 + (-3) + 1 = 1 \\quad \\checkmark`}</MathBlock>
      </Callout>

      <h3>Step 3: Convert to Polynomial Shares</h3>

      <p>
        Using the transformation <InlineMath>{`\\tilde{k}_i = k_i / \\lambda_i`}</InlineMath>:
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-indigo-500/30">
          <h4 className="font-semibold text-indigo-400 mb-2">Participant 1</h4>
          <MathBlock>{`\\tilde{k}_1 = \\frac{100}{3} = \\frac{100}{3}`}</MathBlock>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">Participant 2</h4>
          <MathBlock>{`\\tilde{k}_2 = \\frac{200}{-3} = -\\frac{200}{3}`}</MathBlock>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Participant 3</h4>
          <MathBlock>{`\\tilde{k}_3 = \\frac{150}{1} = 150`}</MathBlock>
        </div>
      </div>

      <Callout type="warning">
        <strong>Note:</strong> In practice, all arithmetic is done modulo <InlineMath>{`q`}</InlineMath>
        (the group order), so there are no fractions - division is multiplication by the
        modular inverse.
      </Callout>

      <h3>Step 4: Verify Reconstruction</h3>

      <p>
        Let's verify that the polynomial shares reconstruct to the same <InlineMath>{`k`}</InlineMath>:
      </p>

      <MathBlock>
        {`k = \\sum_{i=1}^{3} \\tilde{k}_i \\cdot \\lambda_i`}
      </MathBlock>

      <MathBlock>
        {`k = \\frac{100}{3} \\cdot 3 + \\left(-\\frac{200}{3}\\right) \\cdot (-3) + 150 \\cdot 1`}
      </MathBlock>

      <MathBlock>
        {`k = 100 + 200 + 150 = 450 \\quad \\checkmark`}
      </MathBlock>

      <Example title="The Complete Transformation">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left p-3">Participant</th>
                <th className="text-left p-3">Additive Share</th>
                <th className="text-left p-3">Lagrange Coeff</th>
                <th className="text-left p-3">Polynomial Share</th>
                <th className="text-left p-3">Contribution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-700/50">
                <td className="p-3">1</td>
                <td className="p-3"><InlineMath>{`k_1 = 100`}</InlineMath></td>
                <td className="p-3"><InlineMath>{`\\lambda_1 = 3`}</InlineMath></td>
                <td className="p-3"><InlineMath>{`\\tilde{k}_1 = 100/3`}</InlineMath></td>
                <td className="p-3"><InlineMath>{`100`}</InlineMath></td>
              </tr>
              <tr className="border-b border-dark-700/50">
                <td className="p-3">2</td>
                <td className="p-3"><InlineMath>{`k_2 = 200`}</InlineMath></td>
                <td className="p-3"><InlineMath>{`\\lambda_2 = -3`}</InlineMath></td>
                <td className="p-3"><InlineMath>{`\\tilde{k}_2 = -200/3`}</InlineMath></td>
                <td className="p-3"><InlineMath>{`200`}</InlineMath></td>
              </tr>
              <tr className="border-b border-dark-700/50">
                <td className="p-3">3</td>
                <td className="p-3"><InlineMath>{`k_3 = 150`}</InlineMath></td>
                <td className="p-3"><InlineMath>{`\\lambda_3 = 1`}</InlineMath></td>
                <td className="p-3"><InlineMath>{`\\tilde{k}_3 = 150`}</InlineMath></td>
                <td className="p-3"><InlineMath>{`150`}</InlineMath></td>
              </tr>
              <tr className="border-t border-dark-700">
                <td className="p-3 font-semibold" colSpan={4}>Total (reconstructed k)</td>
                <td className="p-3 font-semibold"><InlineMath>{`450`}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Example>

      <h3>What About the Inverse?</h3>

      <p>
        We can also convert polynomial shares to additive. Given the polynomial shares
        <InlineMath>{`s_1, s_2, s_3`}</InlineMath> of the secret key:
      </p>

      <MathBlock>
        {`\\tilde{s}_i = s_i \\cdot \\lambda_i`}
      </MathBlock>

      <p>
        These are additive shares because:
      </p>

      <MathBlock>
        {`\\sum_i \\tilde{s}_i = \\sum_i s_i \\cdot \\lambda_i = s`}
      </MathBlock>

      <Example title="Polynomial to Additive Conversion">
        <p className="mb-4">If our polynomial shares of <InlineMath>{`s`}</InlineMath> are:</p>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`s_1 = 42`}</InlineMath></div>
          <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`s_2 = 67`}</InlineMath></div>
          <div className="p-2 rounded bg-dark-800/50"><InlineMath>{`s_3 = 31`}</InlineMath></div>
        </div>

        <p className="mb-4">Then the additive equivalents are:</p>
        <div className="space-y-2 font-mono text-sm">
          <p><InlineMath>{`\\tilde{s}_1 = 42 \\cdot 3 = 126`}</InlineMath></p>
          <p><InlineMath>{`\\tilde{s}_2 = 67 \\cdot (-3) = -201`}</InlineMath></p>
          <p><InlineMath>{`\\tilde{s}_3 = 31 \\cdot 1 = 31`}</InlineMath></p>
        </div>

        <p className="mt-4">
          Sum: <InlineMath>{`126 + (-201) + 31 = -44 = s`}</InlineMath> (the secret)
        </p>
      </Example>

      <h3>Key Takeaway</h3>

      <Theorem title="Share Conversion Principle">
        <p>
          Lagrange coefficients bridge additive and polynomial shares:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            Multiply polynomial shares by <InlineMath>{`\\lambda_i`}</InlineMath> to get additive
          </li>
          <li>
            Divide additive shares by <InlineMath>{`\\lambda_i`}</InlineMath> to get polynomial
          </li>
          <li>
            Both representations reconstruct to the same secret
          </li>
        </ul>
      </Theorem>

      <p>
        This transformation is the key insight that enables FROST to combine additively-shared
        nonces with polynomially-shared secret keys in a single computation.
      </p>
    </LessonLayout>
  );
}
