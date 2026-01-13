import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2>Hierarchical Threshold (Nested FROST)</h2>

      <p>
        FROST can be nested to create hierarchical authorization structures. This enables complex
        organizational policies where different levels have different threshold requirements.
      </p>

      <h3>The Scenario</h3>

      <Definition title="Organizational Hierarchy">
        <p>Consider a company structure:</p>
        <pre className="bg-gray-800 p-4 rounded mt-2 text-sm">
{`Board of Directors (3-of-5)
  |-- CEO (1-of-1)
  |-- CFO (2-of-3 deputies)
  |-- CTO (2-of-3 deputies)
  |-- COO (1-of-1)
  |-- General Counsel (1-of-1)`}
        </pre>
        <p className="mt-3">
          Spending requires 3 of 5 board members, but some board members (CFO, CTO) are
          themselves threshold groups.
        </p>
      </Definition>

      <h3>Mathematical Encoding</h3>

      <Definition title="Top-Level FROST">
        <p>The board operates as a 3-of-5 FROST group:</p>
        <MathBlock>{`t_1 = 3, \\quad n_1 = 5`}</MathBlock>
        <MathBlock>{`s_1, s_2, s_3, s_4, s_5 \\quad \\text{(shares for 5 board positions)}`}</MathBlock>
      </Definition>

      <Definition title="Nested FROST (CFO's Deputies)">
        <p>The CFO's share is itself threshold-shared:</p>
        <MathBlock>{`t_2 = 2, \\quad n_2 = 3`}</MathBlock>
        <MathBlock>{`s_{21}, s_{22}, s_{23} \\quad \\text{(shares for 3 deputies)}`}</MathBlock>
        <p className="mt-3">
          These shares reconstruct to <InlineMath>{`s_2`}</InlineMath>, the CFO's board-level
          share.
        </p>
      </Definition>

      <h3>Signing Protocol</h3>

      <Example title="Nested Signing">
        <p>
          To sign, need 3 board members. Suppose the signing set is{' '}
          <InlineMath>{`\\{\\text{CEO}, \\text{CFO}, \\text{CTO}\\} = \\{1, 2, 3\\}`}</InlineMath>.
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            <strong>CEO (position 1):</strong> Signs directly with share{' '}
            <InlineMath>{`s_1`}</InlineMath>
          </li>
          <li>
            <strong>CFO (position 2):</strong> 2-of-3 deputies sign internally to produce
            position 2's contribution
          </li>
          <li>
            <strong>CTO (position 3):</strong> 2-of-3 deputies sign internally to produce
            position 3's contribution
          </li>
        </ol>
      </Example>

      <h3>Lagrange Nesting</h3>

      <Theorem title="Nested Lagrange Coefficients">
        <p>The effective contribution from a nested participant involves two levels:</p>
        <MathBlock>{`\\text{Top level: } \\lambda_i^{(0)} \\text{ for board member } i`}</MathBlock>
        <MathBlock>{`\\text{Sub-level: } \\lambda_j^{(i)} \\text{ for deputy } j \\text{ of member } i`}</MathBlock>
        <p className="mt-3">A deputy's effective contribution to the signature share is:</p>
        <MathBlock>{`s_{ij} \\cdot \\lambda_j^{(i)} \\cdot \\lambda_i^{(0)}`}</MathBlock>
      </Theorem>

      <Example title="Concrete Calculation">
        <p>
          Suppose CFO's deputies 1 and 2 (of 3) are signing. Their Lagrange coefficients within
          the CFO group:
        </p>
        <MathBlock>{`\\lambda_1^{(2)} = \\frac{0-2}{1-2} = 2`}</MathBlock>
        <MathBlock>{`\\lambda_2^{(2)} = \\frac{0-1}{2-1} = -1`}</MathBlock>
        <p className="mt-3">
          If the board-level Lagrange coefficient for CFO (position 2) is{' '}
          <InlineMath>{`\\lambda_2^{(0)} = 3`}</InlineMath>:
        </p>
        <MathBlock>{`\\text{Deputy 1's contribution: } s_{21} \\cdot 2 \\cdot 3 = 6 \\cdot s_{21}`}</MathBlock>
        <MathBlock>{`\\text{Deputy 2's contribution: } s_{22} \\cdot (-1) \\cdot 3 = -3 \\cdot s_{22}`}</MathBlock>
      </Example>

      <h3>Verification of Correctness</h3>

      <Theorem title="Reconstruction Correctness">
        <p>The nested structure correctly reconstructs the secret:</p>
        <MathBlock>{`s = \\sum_{i \\in S_0} s_i \\cdot \\lambda_i^{(0)}`}</MathBlock>
        <p className="mt-3">For nested members:</p>
        <MathBlock>{`s_i = \\sum_{j \\in S_i} s_{ij} \\cdot \\lambda_j^{(i)}`}</MathBlock>
        <p className="mt-3">Therefore:</p>
        <MathBlock>{`s = \\sum_{i \\in S_0} \\left( \\sum_{j \\in S_i} s_{ij} \\cdot \\lambda_j^{(i)} \\right) \\cdot \\lambda_i^{(0)}`}</MathBlock>
        <MathBlock>{`= \\sum_{i \\in S_0} \\sum_{j \\in S_i} s_{ij} \\cdot \\lambda_j^{(i)} \\cdot \\lambda_i^{(0)}`}</MathBlock>
      </Theorem>

      <h3>Practical Considerations</h3>

      <Definition title="Coordination Complexity">
        <p>Nested FROST requires coordination at each level:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Each nested group must run its internal FROST protocol
          </li>
          <li>
            The results feed into the parent-level protocol
          </li>
          <li>
            Communication increases with nesting depth
          </li>
        </ul>
      </Definition>

      <Definition title="Key Generation">
        <p>DKG can be done top-down or bottom-up:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Top-down:</strong> Generate board shares, then re-share nested positions
          </li>
          <li>
            <strong>Bottom-up:</strong> Deputies generate their shares, aggregate to board level
          </li>
        </ul>
      </Definition>

      <Callout type="info">
        <strong>Efficiency:</strong> Despite the nesting, computation per level is still{' '}
        <InlineMath>{`O(t)`}</InlineMath>. The total work scales with the sum of all thresholds,
        not their product.
      </Callout>

      <h3>Use Cases</h3>

      <Example title="Enterprise Treasury">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Level 1:</strong> 2-of-3 executive committee
          </li>
          <li>
            <strong>Level 2:</strong> Each executive backed by 2-of-3 authorized signers
          </li>
          <li>
            <strong>Result:</strong> Flexible authority delegation with clear accountability
          </li>
        </ul>
      </Example>

      <Example title="DAO Governance">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Level 1:</strong> m-of-n working groups
          </li>
          <li>
            <strong>Level 2:</strong> Each working group is threshold-controlled
          </li>
          <li>
            <strong>Result:</strong> Decentralized control with structured authorization
          </li>
        </ul>
      </Example>

      <h3>On-Chain Appearance</h3>

      <Callout type="success">
        <strong>Still Indistinguishable:</strong> Despite the complex hierarchical structure,
        the final signature is still a standard Schnorr signature. On-chain observers see:
        <ul className="list-disc list-inside mt-2">
          <li>One public key</li>
          <li>One 64-byte signature</li>
          <li>No indication of nesting depth or structure</li>
        </ul>
      </Callout>

      <p>
        Hierarchical FROST enables organizational policies that match real-world authority
        structures while maintaining the privacy and efficiency of standard Schnorr signatures.
      </p>
    </LessonLayout>
  );
}
