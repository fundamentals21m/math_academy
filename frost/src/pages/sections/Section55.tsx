import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <h2>Signature Share Verification</h2>

      <p>
        Before aggregating signature shares, the coordinator (or each participant) must
        verify that each share is valid. This verification prevents malicious participants
        from corrupting the final signature.
      </p>

      <h3>The Verification Equation</h3>

      <Definition title="Share Verification">
        <p>
          For participant <InlineMath>{`i`}</InlineMath> with signature share{' '}
          <InlineMath>{`z_i`}</InlineMath>, commitment <InlineMath>{`R_i`}</InlineMath>,
          and public verification share <InlineMath>{`Y_i`}</InlineMath>:
        </p>
        <MathBlock>
          {`[z_i]G \\stackrel{?}{=} R_i + [\\lambda_i \\cdot c]Y_i`}
        </MathBlock>
        <p className="mt-4">
          This equation verifies that <InlineMath>{`z_i`}</InlineMath> was computed correctly
          using the participant's secret share.
        </p>
      </Definition>

      <h3>Why Verification Works</h3>

      <Theorem title="Verification Correctness">
        <p>
          If participant <InlineMath>{`i`}</InlineMath> computed their share correctly:
        </p>
        <MathBlock>
          {`z_i = d_{ij} + e_{ij} \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c`}
        </MathBlock>
        <p className="mt-3">Then:</p>
        <MathBlock>
          {`[z_i]G = [d_{ij}]G + [e_{ij} \\cdot \\rho_i]G + [\\lambda_i \\cdot s_i \\cdot c]G`}
        </MathBlock>
        <MathBlock>
          {`= D_{ij} + [\\rho_i]E_{ij} + [\\lambda_i \\cdot c]Y_i`}
        </MathBlock>
        <MathBlock>
          {`= R_i + [\\lambda_i \\cdot c]Y_i \\quad \\checkmark`}
        </MathBlock>
      </Theorem>

      <h3>Common Implementation Bug</h3>

      <Example title="Timing-Vulnerable Comparison">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`# WRONG: Direct point comparison can leak timing info
L = z_i * G
R = R_i + (lambda_i * c) * Y_i
if L == R:
    valid = True`}
        </pre>
        <p className="mt-3 text-red-400">
          Problem: Point comparison may take different time depending on the values,
          potentially leaking information about the points.
        </p>
      </Example>

      <Example title="Constant-Time Verification">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`# CORRECT: Check if difference is identity
L = z_i * G
R = R_i + (lambda_i * c) * Y_i
diff = L - R
if diff.is_identity():
    valid = True`}
        </pre>
        <p className="mt-3">
          Even better: Use the cryptographic library's constant-time point comparison function.
        </p>
      </Example>

      <Callout type="warning">
        <strong>Security Note:</strong> While the values being compared in verification
        are typically public, using constant-time operations consistently helps prevent
        subtle timing attacks and is good practice.
      </Callout>

      <h3>Batch Verification</h3>

      <p>
        When verifying multiple shares, batch verification provides significant speedup:
      </p>

      <Definition title="Batch Verification">
        <p>
          Instead of verifying each share individually, combine them with random weights
          <InlineMath>{`r_i`}</InlineMath>:
        </p>
        <MathBlock>
          {`[\\sum_i r_i \\cdot z_i]G \\stackrel{?}{=} \\sum_i r_i \\cdot (R_i + [\\lambda_i \\cdot c]Y_i)`}
        </MathBlock>
        <p className="mt-4">
          If this equation holds, all individual shares are valid (with overwhelming probability).
        </p>
      </Definition>

      <h3>Performance Comparison</h3>

      <Example title="Batch vs Individual Verification">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Individual verification:</strong> <InlineMath>{`t`}</InlineMath> scalar
            multiplications
          </li>
          <li>
            <strong>Batch verification:</strong> approximately 2 scalar multiplications
            (using multi-scalar multiplication)
          </li>
          <li>
            <strong>Speedup:</strong> approximately <InlineMath>{`t/2`}</InlineMath> times faster
          </li>
        </ul>
        <p className="mt-3">
          For a 5-of-9 threshold, batch verification is roughly 2.5x faster.
        </p>
      </Example>

      <h3>Handling Invalid Shares</h3>

      <Callout type="info">
        <strong>On Verification Failure:</strong> If any share fails verification:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Identify the misbehaving participant</li>
          <li>Abort the current signing session</li>
          <li>Optionally exclude the participant from future sessions</li>
          <li>Never aggregate with invalid shares</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
