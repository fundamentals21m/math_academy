import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section73() {
  return (
    <LessonLayout sectionId={73}>
      <h2 className="text-2xl font-semibold mb-4">Simplexes and Chains</h2>

      <p className="mb-4">
        To integrate differential forms over regions with boundary, we need a precise notion of
        "oriented region." Simplexes provide the building blocks, and chains allow us to combine
        them with orientation.
      </p>

      <Definition title="10.17 - Standard Simplex">
        <p className="mb-3">
          The <em>standard k-simplex</em> <InlineMath>{'\\Delta_k \\subset \\mathbb{R}^k'}</InlineMath> is
        </p>
        <MathBlock>{'\\Delta_k = \\{(u_1, \\ldots, u_k) \\in \\mathbb{R}^k : u_i \\geq 0, \\, u_1 + \\cdots + u_k \\leq 1\\}'}</MathBlock>
        <p className="mb-3">
          Equivalently, using <InlineMath>{'u_0 = 1 - u_1 - \\cdots - u_k'}</InlineMath>:
        </p>
        <MathBlock>{'\\Delta_k = \\{(u_1, \\ldots, u_k) : u_i \\geq 0, \\, u_0 + u_1 + \\cdots + u_k = 1\\}'}</MathBlock>
      </Definition>

      <Example title="Low-Dimensional Simplexes">
        <p className="mb-3">
          <InlineMath>{'\\Delta_0'}</InlineMath> is a point (the origin in <InlineMath>{'\\mathbb{R}^0'}</InlineMath>).
        </p>
        <p className="mb-3">
          <InlineMath>{'\\Delta_1 = [0,1]'}</InlineMath> is the unit interval.
        </p>
        <p className="mb-3">
          <InlineMath>{'\\Delta_2 = \\{(u,v) : u \\geq 0, v \\geq 0, u + v \\leq 1\\}'}</InlineMath> is a triangle
          with vertices at <InlineMath>{'(0,0), (1,0), (0,1)'}</InlineMath>.
        </p>
        <p>
          <InlineMath>{'\\Delta_3'}</InlineMath> is a tetrahedron in <InlineMath>{'\\mathbb{R}^3'}</InlineMath>.
        </p>
      </Example>

      <Definition title="10.18 - Singular k-Simplex">
        <p className="mb-3">
          A <em>singular k-simplex</em> in an open set <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is
          a <InlineMath>{'\\mathscr{C}^1'}</InlineMath> mapping <InlineMath>{'\\sigma: \\Delta_k \\to E'}</InlineMath>.
        </p>
        <p className="mb-3">
          We write <InlineMath>{'\\sigma = [p_0, p_1, \\ldots, p_k]'}</InlineMath> for the <em>affine simplex</em> defined by
        </p>
        <MathBlock>{'\\sigma(u_1, \\ldots, u_k) = p_0 + \\sum_{i=1}^k u_i(p_i - p_0)'}</MathBlock>
        <p>
          where <InlineMath>{'p_0, \\ldots, p_k \\in \\mathbb{R}^n'}</InlineMath> are the vertices.
        </p>
      </Definition>

      <Definition title="10.19 - Chains">
        <p className="mb-3">
          A <em>k-chain</em> in <InlineMath>{'E'}</InlineMath> is a formal linear combination of singular <InlineMath>{'k'}</InlineMath>-simplexes:
        </p>
        <MathBlock>{'\\Gamma = \\sum_{i=1}^m c_i \\sigma_i'}</MathBlock>
        <p>
          where <InlineMath>{'c_i \\in \\mathbb{Z}'}</InlineMath>. The chain is called <em>oriented</em> since
          negative coefficients reverse orientation.
        </p>
      </Definition>

      <Definition title="10.20 - Boundary Operator">
        <p className="mb-3">
          For a singular <InlineMath>{'k'}</InlineMath>-simplex <InlineMath>{'\\sigma = [p_0, \\ldots, p_k]'}</InlineMath>,
          the <em>boundary</em> is the <InlineMath>{'(k-1)'}</InlineMath>-chain
        </p>
        <MathBlock>{'\\partial \\sigma = \\sum_{j=0}^k (-1)^j [p_0, \\ldots, \\hat{p}_j, \\ldots, p_k]'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'\\hat{p}_j'}</InlineMath> means <InlineMath>{'p_j'}</InlineMath> is omitted.
          The boundary of a chain is defined by linearity:
        </p>
        <MathBlock>{'\\partial\\left(\\sum c_i \\sigma_i\\right) = \\sum c_i \\, \\partial\\sigma_i'}</MathBlock>
      </Definition>

      <Theorem
        title="10.21 - Boundary of Boundary is Zero"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\sigma = [p_0, \\ldots, p_k]'}</InlineMath>. Then
            </p>
            <MathBlock>{'\\partial \\sigma = \\sum_{j=0}^k (-1)^j [p_0, \\ldots, \\hat{p}_j, \\ldots, p_k]'}</MathBlock>
            <p className="mb-3">
              Applying <InlineMath>{'\\partial'}</InlineMath> again:
            </p>
            <MathBlock>{'\\partial^2 \\sigma = \\sum_{j=0}^k (-1)^j \\sum_{i=0}^{k-1} (-1)^i [\\text{omitting } p_j \\text{ and one more}]'}</MathBlock>
            <p className="mb-3">
              Each face <InlineMath>{'[p_0, \\ldots, \\hat{p}_i, \\ldots, \\hat{p}_j, \\ldots, p_k]'}</InlineMath>
              (with <InlineMath>{'i < j'}</InlineMath>) appears twice:
            </p>
            <p className="mb-2">- Once with sign <InlineMath>{'(-1)^j(-1)^i'}</InlineMath> when we omit <InlineMath>{'p_j'}</InlineMath> first, then <InlineMath>{'p_i'}</InlineMath></p>
            <p className="mb-3">- Once with sign <InlineMath>{'(-1)^i(-1)^{j-1}'}</InlineMath> when we omit <InlineMath>{'p_i'}</InlineMath> first, then <InlineMath>{'p_j'}</InlineMath></p>
            <p>
              These signs are opposite: <InlineMath>{'(-1)^{i+j} + (-1)^{i+j-1} = 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For any chain <InlineMath>{'\\Gamma'}</InlineMath>, we have <InlineMath>{'\\partial^2 \\Gamma = \\partial(\\partial \\Gamma) = 0'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Boundary of a Triangle">
        <p className="mb-3">
          Let <InlineMath>{'\\sigma = [p_0, p_1, p_2]'}</InlineMath> be a 2-simplex (triangle). Then
        </p>
        <MathBlock>{'\\partial \\sigma = [p_1, p_2] - [p_0, p_2] + [p_0, p_1]'}</MathBlock>
        <p className="mb-3">
          This is the oriented boundary: edges traversed so that the interior is on the left.
          Computing <InlineMath>{'\\partial^2 \\sigma'}</InlineMath>:
        </p>
        <MathBlock>{'\\partial^2 \\sigma = (p_2 - p_1) - (p_2 - p_0) + (p_1 - p_0) = 0'}</MathBlock>
      </Example>

      <Callout type="info" title="Analogy with Exterior Derivative">
        <p>
          The identity <InlineMath>{'\\partial^2 = 0'}</InlineMath> for chains mirrors <InlineMath>{'d^2 = 0'}</InlineMath> for forms.
          This duality is fundamental: Stokes' theorem connects <InlineMath>{'d'}</InlineMath> on forms with
          <InlineMath>{'\\partial'}</InlineMath> on chains.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The standard <InlineMath>{'k'}</InlineMath>-simplex <InlineMath>{'\\Delta_k'}</InlineMath> is the convex hull of <InlineMath>{'k+1'}</InlineMath> points</li>
        <li>A singular simplex is a smooth map from <InlineMath>{'\\Delta_k'}</InlineMath> into the ambient space</li>
        <li>Chains are formal integer combinations of simplexes</li>
        <li>The boundary operator <InlineMath>{'\\partial'}</InlineMath> maps <InlineMath>{'k'}</InlineMath>-chains to <InlineMath>{'(k-1)'}</InlineMath>-chains</li>
        <li>The fundamental identity <InlineMath>{'\\partial^2 = 0'}</InlineMath> holds</li>
        <li>Alternating signs ensure consistent orientation of boundaries</li>
      </ul>
    </LessonLayout>
  );
}
