import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <h2>Recursive FROST (Fractal Thresholds)</h2>

      <p>
        Recursive FROST enables hierarchical threshold structures where each participant
        in a threshold scheme can themselves be represented by another threshold scheme.
        This creates "thresholds within thresholds" for complex organizational structures.
      </p>

      <h3>Hierarchical Structure</h3>

      <Example title="Corporate Hierarchy Example">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`Board of Directors (3-of-5)
  |-- CEO (1-of-1)
  |-- CFO (2-of-3 deputies)
  |-- CTO (2-of-3 deputies)
  |-- COO (2-of-3 deputies)
  |-- General Counsel (1-of-1)`}
        </pre>
        <p className="mt-3">
          A 3-of-5 board vote might require the CFO position, which itself requires
          2-of-3 CFO deputies to participate.
        </p>
      </Example>

      <h3>Mathematical Encoding</h3>

      <Definition title="Two-Level Threshold">
        <p>Top-level FROST:</p>
        <MathBlock>
          {`t_1 = 3, n_1 = 5`}
        </MathBlock>
        <MathBlock>
          {`\\text{Shares: } s_1, s_2, s_3, s_4, s_5`}
        </MathBlock>
        <p className="mt-4">
          Sub-level (e.g., CFO's share <InlineMath>{`s_2`}</InlineMath>):
        </p>
        <MathBlock>
          {`t_2 = 2, n_2 = 3`}
        </MathBlock>
        <MathBlock>
          {`\\text{Sub-shares: } s_{21}, s_{22}, s_{23}`}
        </MathBlock>
      </Definition>

      <h3>Lagrange Nesting</h3>

      <Theorem title="Nested Lagrange Coefficients">
        <p>
          The effective share for a sub-participant combines Lagrange coefficients
          at both levels:
        </p>
        <MathBlock>
          {`\\text{Top level: } \\lambda_i^{(0)} \\text{ for board member } i`}
        </MathBlock>
        <MathBlock>
          {`\\text{Sub-level: } \\lambda_{ij}^{(i)} \\text{ for deputy } j \\text{ of member } i`}
        </MathBlock>
        <p className="mt-4">Effective contribution:</p>
        <MathBlock>
          {`s_i \\cdot \\lambda_i^{(0)} = \\left(\\sum_j s_{ij} \\cdot \\lambda_{ij}^{(i)}\\right) \\cdot \\lambda_i^{(0)}`}
        </MathBlock>
      </Theorem>

      <h3>Full Reconstruction Formula</h3>

      <MathBlock>
        {`s = \\sum_i \\left(\\sum_j s_{ij} \\cdot \\lambda_j^{(i)}\\right) \\cdot \\lambda_i^{(0)}`}
      </MathBlock>

      <p>This can be rewritten as:</p>

      <MathBlock>
        {`s = \\sum_i \\sum_j s_{ij} \\cdot \\lambda_j^{(i)} \\cdot \\lambda_i^{(0)}`}
      </MathBlock>

      <Example title="Concrete Numbers">
        <p>For a 2-of-3 top level with member 2 being 2-of-2:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            Top-level signers: <InlineMath>{`\\{1, 2\\}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\lambda_1^{(0)} = 2`}</InlineMath>,{' '}
            <InlineMath>{`\\lambda_2^{(0)} = -1`}</InlineMath>
          </li>
          <li>
            Sub-level signers for 2: <InlineMath>{`\\{1, 2\\}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\lambda_{21}^{(2)} = 2`}</InlineMath>,{' '}
            <InlineMath>{`\\lambda_{22}^{(2)} = -1`}</InlineMath>
          </li>
        </ul>
        <p className="mt-3">
          Effective coefficient for deputy 1 of member 2:{' '}
          <InlineMath>{`\\lambda_{21}^{(2)} \\cdot \\lambda_2^{(0)} = 2 \\cdot (-1) = -2`}</InlineMath>
        </p>
      </Example>

      <h3>Efficiency Analysis</h3>

      <Definition title="Computational Complexity">
        <p>For recursive FROST:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Single level:</strong>{' '}
            <InlineMath>{`O(t)`}</InlineMath> computation per participant
          </li>
          <li>
            <strong>Two levels:</strong>{' '}
            <InlineMath>{`O(t_1 \\cdot t_2)`}</InlineMath> total shares involved
          </li>
          <li>
            <strong>General:</strong>{' '}
            <InlineMath>{`O(\\prod_l t_l)`}</InlineMath> for{' '}
            <InlineMath>{`l`}</InlineMath> levels
          </li>
        </ul>
        <p className="mt-4">
          The protocol scales linearly at each level, making deep hierarchies practical.
        </p>
      </Definition>

      <h3>Applications</h3>

      <Callout type="info">
        <strong>Use Cases for Recursive FROST:</strong>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>Corporate governance:</strong> Board with committee sub-structure
          </li>
          <li>
            <strong>Multi-sig wallets:</strong> Family trusts with individual key management
          </li>
          <li>
            <strong>DAOs:</strong> Hierarchical voting with delegated authority
          </li>
          <li>
            <strong>Custody services:</strong> Geographic distribution with local redundancy
          </li>
        </ul>
      </Callout>

      <h3>Implementation Considerations</h3>

      <Example title="Coordination Complexity">
        <p>Recursive FROST requires coordinating across hierarchy levels:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            Each sub-group must complete their threshold signing internally
          </li>
          <li>
            Results propagate up to the next level
          </li>
          <li>
            Failure at any level may require alternative participant selection
          </li>
          <li>
            Communication overhead grows with hierarchy depth
          </li>
        </ul>
      </Example>

      <Callout type="warning">
        <strong>Complexity Warning:</strong> While recursive FROST is mathematically
        elegant, the operational complexity of coordinating multi-level hierarchies
        is significant. Consider whether a flat threshold structure might meet
        requirements more simply.
      </Callout>
    </LessonLayout>
  );
}
