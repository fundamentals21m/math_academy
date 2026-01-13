import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Concrete Reconstruction Example</h2>

      <p>
        Let's walk through a complete example of reconstructing a secret from Shamir shares
        using Lagrange interpolation. This will solidify your understanding of the mathematical
        machinery we've built.
      </p>

      <h3>Setup: The Shares</h3>

      <p>
        Recall from our polynomial encoding example, we created shares from the polynomial:
      </p>

      <MathBlock>
        {`f(x) = 42 + 17x + 8x^2`}
      </MathBlock>

      <p>
        where the secret is <InlineMath>{`s = f(0) = 42`}</InlineMath>. The shares for participants
        1, 2, and 3 were:
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 text-center">
          <h4 className="font-semibold text-indigo-400 mb-2">Participant 1</h4>
          <MathBlock>{`(x_1, y_1) = (1, 67)`}</MathBlock>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 text-center">
          <h4 className="font-semibold text-emerald-400 mb-2">Participant 2</h4>
          <MathBlock>{`(x_2, y_2) = (2, 108)`}</MathBlock>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 text-center">
          <h4 className="font-semibold text-amber-400 mb-2">Participant 3</h4>
          <MathBlock>{`(x_3, y_3) = (3, 165)`}</MathBlock>
        </div>
      </div>

      <h3>Step 1: Compute Lagrange Coefficients</h3>

      <p>
        For a 3-of-5 threshold scheme, we need 3 shares to reconstruct. Using shares from
        participants 1, 2, and 3, we compute the Lagrange coefficients at <InlineMath>{`x = 0`}</InlineMath>:
      </p>

      <Example title="Computing Lagrange Coefficients">
        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-dark-800/50">
            <p className="text-indigo-400 font-semibold mb-2">For participant 1:</p>
            <MathBlock>
              {`\\lambda_1 = \\frac{(0 - x_2)(0 - x_3)}{(x_1 - x_2)(x_1 - x_3)} = \\frac{(0-2)(0-3)}{(1-2)(1-3)}`}
            </MathBlock>
            <MathBlock>
              {`= \\frac{(-2)(-3)}{(-1)(-2)} = \\frac{6}{2} = 3`}
            </MathBlock>
          </div>

          <div className="p-4 rounded-lg bg-dark-800/50">
            <p className="text-emerald-400 font-semibold mb-2">For participant 2:</p>
            <MathBlock>
              {`\\lambda_2 = \\frac{(0 - x_1)(0 - x_3)}{(x_2 - x_1)(x_2 - x_3)} = \\frac{(0-1)(0-3)}{(2-1)(2-3)}`}
            </MathBlock>
            <MathBlock>
              {`= \\frac{(-1)(-3)}{(1)(-1)} = \\frac{3}{-1} = -3`}
            </MathBlock>
          </div>

          <div className="p-4 rounded-lg bg-dark-800/50">
            <p className="text-amber-400 font-semibold mb-2">For participant 3:</p>
            <MathBlock>
              {`\\lambda_3 = \\frac{(0 - x_1)(0 - x_2)}{(x_3 - x_1)(x_3 - x_2)} = \\frac{(0-1)(0-2)}{(3-1)(3-2)}`}
            </MathBlock>
            <MathBlock>
              {`= \\frac{(-1)(-2)}{(2)(1)} = \\frac{2}{2} = 1`}
            </MathBlock>
          </div>
        </div>
      </Example>

      <Callout type="info">
        <strong>Quick Check:</strong> The Lagrange coefficients should sum to 1:
        <MathBlock>{`\\lambda_1 + \\lambda_2 + \\lambda_3 = 3 + (-3) + 1 = 1 \\checkmark`}</MathBlock>
        This is a useful sanity check during implementation.
      </Callout>

      <h3>Step 2: Reconstruct the Secret</h3>

      <p>
        Now we combine the shares with their Lagrange coefficients:
      </p>

      <Theorem title="Secret Reconstruction">
        <MathBlock>
          {`s = \\sum_{i=1}^{t} y_i \\cdot \\lambda_i`}
        </MathBlock>
      </Theorem>

      <p>
        Substituting our values:
      </p>

      <MathBlock>
        {`s = y_1 \\cdot \\lambda_1 + y_2 \\cdot \\lambda_2 + y_3 \\cdot \\lambda_3`}
      </MathBlock>

      <MathBlock>
        {`s = 67 \\cdot 3 + 108 \\cdot (-3) + 165 \\cdot 1`}
      </MathBlock>

      <MathBlock>
        {`s = 201 - 324 + 165`}
      </MathBlock>

      <MathBlock>
        {`s = 42 \\checkmark`}
      </MathBlock>

      <Callout type="success">
        <strong>Success!</strong> We've recovered the original secret <InlineMath>{`s = 42`}</InlineMath>
        using only 3 of the 5 shares, without ever needing to know the polynomial coefficients
        <InlineMath>{`a_1 = 17`}</InlineMath> or <InlineMath>{`a_2 = 8`}</InlineMath>.
      </Callout>

      <h3>Using a Different Subset</h3>

      <p>
        Let's verify that any 3 shares work by using participants 1, 3, and 4 instead.
        The share for participant 4 was:
      </p>

      <MathBlock>
        {`(x_4, y_4) = (4, 238)`}
      </MathBlock>

      <Example title="Reconstruction with Different Shares">
        <p className="mb-4">Using shares 1, 3, and 4:</p>

        <div className="space-y-4">
          <div>
            <p className="text-indigo-400 font-semibold">Lagrange coefficient for participant 1:</p>
            <MathBlock>
              {`\\lambda_1 = \\frac{(0-3)(0-4)}{(1-3)(1-4)} = \\frac{12}{6} = 2`}
            </MathBlock>
          </div>

          <div>
            <p className="text-emerald-400 font-semibold">Lagrange coefficient for participant 3:</p>
            <MathBlock>
              {`\\lambda_3 = \\frac{(0-1)(0-4)}{(3-1)(3-4)} = \\frac{4}{-2} = -2`}
            </MathBlock>
          </div>

          <div>
            <p className="text-amber-400 font-semibold">Lagrange coefficient for participant 4:</p>
            <MathBlock>
              {`\\lambda_4 = \\frac{(0-1)(0-3)}{(4-1)(4-3)} = \\frac{3}{3} = 1`}
            </MathBlock>
          </div>

          <div className="mt-4 pt-4 border-t border-dark-700">
            <p className="font-semibold">Reconstruction:</p>
            <MathBlock>
              {`s = 67 \\cdot 2 + 165 \\cdot (-2) + 238 \\cdot 1 = 134 - 330 + 238 = 42 \\checkmark`}
            </MathBlock>
          </div>
        </div>
      </Example>

      <h3>Key Observations</h3>

      <Definition title="Properties of Lagrange Reconstruction">
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <strong>Subset independence:</strong> Any <InlineMath>{`t`}</InlineMath> shares work,
            not just a specific set
          </li>
          <li>
            <strong>Coefficients depend on the set:</strong> The Lagrange coefficients
            <InlineMath>{`\\lambda_i`}</InlineMath> change based on which participants are involved
          </li>
          <li>
            <strong>Linear combination:</strong> The secret is a weighted sum of shares,
            where weights are the Lagrange coefficients
          </li>
          <li>
            <strong>Exact threshold:</strong> Fewer than <InlineMath>{`t`}</InlineMath> shares
            yield no information (we'll prove this next)
          </li>
        </ol>
      </Definition>

      <Callout type="warning">
        <strong>For FROST:</strong> This reconstruction technique is foundational, but in FROST
        we <em>never</em> actually reconstruct the secret <InlineMath>{`s`}</InlineMath>. Instead,
        we use the Lagrange coefficients to compute with shares directly. This is the key insight
        that makes threshold signing possible without exposing the private key.
      </Callout>
    </LessonLayout>
  );
}
