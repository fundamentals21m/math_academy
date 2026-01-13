import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2>The Transformation Theorem</h2>

      <p>
        This section presents the key mathematical insight that makes FROST possible:
        additive shares can be transformed into polynomial (Shamir) shares of the same
        secret using Lagrange coefficients.
      </p>

      <h3>The Problem</h3>

      <p>
        We have two types of shares that need to work together:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          Additive shares of <InlineMath>{`k`}</InlineMath>:
          <InlineMath>{`k = k_1 + k_2 + \\cdots + k_t`}</InlineMath>
        </li>
        <li>
          Polynomial shares of <InlineMath>{`s`}</InlineMath>:
          <InlineMath>{`s = \\sum_{i \\in S} s_i \\cdot \\lambda_i`}</InlineMath>
        </li>
      </ul>

      <p>
        To compute <InlineMath>{`z = k + s \\cdot c`}</InlineMath> without reconstruction,
        we need both types of shares to be compatible.
      </p>

      <h3>The Transformation</h3>

      <Theorem title="Additive to Polynomial Conversion">
        <p>
          Given additive shares <InlineMath>{`k_1, k_2, \\ldots, k_t`}</InlineMath> of secret
          <InlineMath>{`k`}</InlineMath> where <InlineMath>{`k = \\sum_i k_i`}</InlineMath>, the values:
        </p>
        <MathBlock>
          {`\\tilde{k}_i = \\frac{k_i}{\\lambda_i}`}
        </MathBlock>
        <p className="mt-3">
          are valid Shamir (polynomial) shares of the same secret <InlineMath>{`k`}</InlineMath>,
          where <InlineMath>{`\\lambda_i`}</InlineMath> are the Lagrange coefficients for the
          signing set.
        </p>
      </Theorem>

      <h3>Why This Works</h3>

      <p>
        Let's verify that the transformed shares reconstruct to the same secret.
      </p>

      <p>
        For polynomial shares, reconstruction uses:
      </p>

      <MathBlock>
        {`k = \\sum_{i \\in S} \\tilde{k}_i \\cdot \\lambda_i`}
      </MathBlock>

      <p>
        Substituting <InlineMath>{`\\tilde{k}_i = k_i / \\lambda_i`}</InlineMath>:
      </p>

      <MathBlock>
        {`k = \\sum_{i \\in S} \\frac{k_i}{\\lambda_i} \\cdot \\lambda_i = \\sum_{i \\in S} k_i`}
      </MathBlock>

      <p>
        This equals <InlineMath>{`k`}</InlineMath> by the definition of additive shares.
      </p>

      <Callout type="success">
        <strong>The Magic:</strong> Dividing by Lagrange coefficients cancels them out
        during reconstruction! This allows additive shares to be "dressed up" as polynomial
        shares.
      </Callout>

      <h3>The Key Property</h3>

      <Definition title="Lagrange Coefficient Sum">
        <p>
          For any set of points <InlineMath>{`S`}</InlineMath>, the Lagrange coefficients
          sum to 1:
        </p>
        <MathBlock>
          {`\\sum_{i \\in S} \\lambda_i = 1`}
        </MathBlock>
        <p className="mt-3">
          This is because the constant polynomial <InlineMath>{`1`}</InlineMath> interpolates
          through the points <InlineMath>{`(x_i, 1)`}</InlineMath> for all <InlineMath>{`i`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Verifying the Sum Property">
        <p className="mb-4">
          Using our earlier Lagrange coefficients for participants {'{1, 2, 3}'}:
        </p>
        <MathBlock>
          {`\\lambda_1 = 3, \\quad \\lambda_2 = -3, \\quad \\lambda_3 = 1`}
        </MathBlock>
        <MathBlock>
          {`\\lambda_1 + \\lambda_2 + \\lambda_3 = 3 + (-3) + 1 = 1 \\quad \\checkmark`}
        </MathBlock>
      </Example>

      <h3>Deeper Understanding: The Algebra</h3>

      <p>
        Let's trace through why this transformation is mathematically valid.
      </p>

      <p>
        Starting with additive shares:
      </p>

      <MathBlock>
        {`k = \\sum_{i \\in S} k_i`}
      </MathBlock>

      <p>
        We can write <InlineMath>{`k`}</InlineMath> in a clever way using the fact that
        <InlineMath>{`\\sum_i \\lambda_i = 1`}</InlineMath>:
      </p>

      <MathBlock>
        {`k = k \\cdot 1 = k \\cdot \\sum_{i \\in S} \\lambda_i = \\sum_{i \\in S} k \\cdot \\lambda_i`}
      </MathBlock>

      <p>
        But we also have <InlineMath>{`k = \\sum_j k_j`}</InlineMath>, so:
      </p>

      <MathBlock>
        {`k = \\sum_{i \\in S} \\left( \\sum_{j \\in S} k_j \\right) \\cdot \\lambda_i = \\sum_{i \\in S} \\sum_{j \\in S} k_j \\cdot \\lambda_i`}
      </MathBlock>

      <p>
        Rearranging the double sum:
      </p>

      <MathBlock>
        {`k = \\sum_{j \\in S} k_j \\cdot \\sum_{i \\in S} \\lambda_i = \\sum_{j \\in S} k_j \\cdot 1 = \\sum_{j \\in S} k_j`}
      </MathBlock>

      <p>
        This confirms the consistency. Now, if we define polynomial shares as
        <InlineMath>{`\\tilde{k}_i = k_i / \\lambda_i`}</InlineMath>:
      </p>

      <MathBlock>
        {`\\sum_{i \\in S} \\tilde{k}_i \\cdot \\lambda_i = \\sum_{i \\in S} \\frac{k_i}{\\lambda_i} \\cdot \\lambda_i = \\sum_{i \\in S} k_i = k`}
      </MathBlock>

      <Callout type="info">
        <strong>Important:</strong> The converted polynomial shares depend on which
        participants are in set <InlineMath>{`S`}</InlineMath>! Different signing sets
        give different Lagrange coefficients, and therefore different
        <InlineMath>{`\\tilde{k}_i`}</InlineMath> values. This is fine because we only
        need consistency within a single signing session.
      </Callout>

      <h3>The Inverse Transformation</h3>

      <p>
        We can also go the other direction:
      </p>

      <Theorem title="Polynomial to Additive Conversion">
        <p>
          Given polynomial shares <InlineMath>{`s_1, s_2, \\ldots, s_t`}</InlineMath> where
          <InlineMath>{`s = \\sum_i s_i \\cdot \\lambda_i`}</InlineMath>, the values:
        </p>
        <MathBlock>
          {`\\tilde{s}_i = s_i \\cdot \\lambda_i`}
        </MathBlock>
        <p className="mt-3">
          form additive shares of <InlineMath>{`s`}</InlineMath>:
        </p>
        <MathBlock>
          {`s = \\sum_{i \\in S} \\tilde{s}_i = \\sum_{i \\in S} s_i \\cdot \\lambda_i`}
        </MathBlock>
      </Theorem>

      <p>
        This inverse transformation is exactly what we need for the Schnorr response!
      </p>

      <h3>Summary</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Additive to Polynomial</h4>
          <MathBlock>{`\\tilde{k}_i = \\frac{k_i}{\\lambda_i}`}</MathBlock>
          <p className="text-sm mt-2">Divide by Lagrange coefficient</p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">Polynomial to Additive</h4>
          <MathBlock>{`\\tilde{s}_i = s_i \\cdot \\lambda_i`}</MathBlock>
          <p className="text-sm mt-2">Multiply by Lagrange coefficient</p>
        </div>
      </div>

      <Callout type="warning">
        <strong>Key Insight:</strong> In FROST, we don't actually convert shares explicitly.
        Instead, we use the Lagrange coefficients in our computations directly. Each
        participant computes their contribution as if they had the converted shares,
        and the aggregation produces the correct result.
      </Callout>
    </LessonLayout>
  );
}
