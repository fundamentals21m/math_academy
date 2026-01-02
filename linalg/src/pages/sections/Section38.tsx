import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      {/* Introduction */}
      <p>
        <strong>Graphs and networks</strong> are naturally described by matrices. The incidence matrix
        captures the structure of a graph, and linear algebra reveals properties like connectivity
        and current flow.
      </p>

      <h2>Graph Matrices</h2>

      <Definition title="Incidence Matrix" className="my-6">
        <p>
          For a graph with <InlineMath>n</InlineMath> nodes and <InlineMath>m</InlineMath> edges, the <strong>incidence matrix</strong>
          <InlineMath>A</InlineMath> is <InlineMath>m \times n</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Row for each edge</li>
          <li>Column for each node</li>
          <li><InlineMath>{`A_{ij} = -1`}</InlineMath> if edge <InlineMath>i</InlineMath> starts at node <InlineMath>j</InlineMath></li>
          <li><InlineMath>{`A_{ij} = +1`}</InlineMath> if edge <InlineMath>i</InlineMath> ends at node <InlineMath>j</InlineMath></li>
        </ul>
      </Definition>

      <Example title="Triangle Graph" className="my-6">
        <p>A triangle with 3 nodes and 3 edges:</p>
        <MathBlock>
          {`A = \\begin{bmatrix} -1 & 1 & 0 \\\\ 0 & -1 & 1 \\\\ -1 & 0 & 1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Edge 1: node 1 → node 2<br />
          Edge 2: node 2 → node 3<br />
          Edge 3: node 1 → node 3
        </p>
      </Example>

      <h2>Kirchhoff's Laws</h2>

      <Theorem
        title="Kirchhoff's Current Law (Nullspace)"
        className="my-6"
        proof={
          <>
            <p>For edge <InlineMath>e</InlineMath> from node <InlineMath>i</InlineMath> to node <InlineMath>j</InlineMath>, row <InlineMath>e</InlineMath> of <InlineMath>A</InlineMath> has <InlineMath>-1</InlineMath> at column <InlineMath>i</InlineMath> and <InlineMath>+1</InlineMath> at column <InlineMath>j</InlineMath>.</p>
            <p className="mt-2">Thus <InlineMath>{`(A\\mathbf{x})_e = x_j - x_i`}</InlineMath> = voltage difference across edge <InlineMath>e</InlineMath>.</p>
            <p className="mt-2"><strong>Nullspace:</strong> <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath> means all voltage differences are zero: <InlineMath>{`x_j = x_i`}</InlineMath> for all edges.</p>
            <p className="mt-2">In a connected graph, this implies all <InlineMath>{`x_i`}</InlineMath> are equal. Thus <InlineMath>{`N(A) = \\text{span}(\\mathbf{1})`}</InlineMath> where <InlineMath>{`\\mathbf{1} = (1, 1, \\ldots, 1)^T`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{`\\mathbf{x}`}</InlineMath> represents voltages at nodes and <InlineMath>{`\\mathbf{y} = A\\mathbf{x}`}</InlineMath>
          represents voltage differences across edges:
        </p>
        <MathBlock>
          {`A\\mathbf{x} = \\mathbf{y} \\quad \\text{(potential differences)}`}
        </MathBlock>
        <p className="mt-2">
          The <strong>nullspace of A</strong> consists of constant vectors (all nodes at same voltage).
        </p>
      </Theorem>

      <Theorem
        title="Kirchhoff's Voltage Law (Left Nullspace)"
        className="my-6"
        proof={
          <>
            <p>Column <InlineMath>j</InlineMath> of <InlineMath>A^T</InlineMath> = row <InlineMath>j</InlineMath> of <InlineMath>A</InlineMath> corresponds to node <InlineMath>j</InlineMath>.</p>
            <p className="mt-2">The entry <InlineMath>{`(A^T)_{je}`}</InlineMath> is <InlineMath>-1</InlineMath> if edge <InlineMath>e</InlineMath> leaves node <InlineMath>j</InlineMath>, <InlineMath>+1</InlineMath> if it enters.</p>
            <p className="mt-2">Thus <InlineMath>{`(A^T\\mathbf{f})_j = \\sum_e A_{ej}f_e`}</InlineMath> = (current in) − (current out) at node <InlineMath>j</InlineMath>.</p>
            <p className="mt-2"><strong>Left nullspace:</strong> <InlineMath>{`A^T\\mathbf{f} = \\mathbf{0}`}</InlineMath> means current is conserved at every node.</p>
            <p className="mt-2">Such <InlineMath>{`\\mathbf{f}`}</InlineMath> corresponds to current flowing around loops (cycles) in the graph. The dimension equals the number of independent loops = <InlineMath>m - n + 1</InlineMath> for a connected graph.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{`\\mathbf{f}`}</InlineMath> represents currents on edges:
        </p>
        <MathBlock>
          {`A^T\\mathbf{f} = \\mathbf{0} \\quad \\text{(current balance at each node)}`}
        </MathBlock>
        <p className="mt-2">
          The <strong>left nullspace</strong> gives loop currents (current flows around cycles).
        </p>
      </Theorem>

      <h2>The Graph Laplacian</h2>

      <Definition title="Graph Laplacian" className="my-6">
        <p>
          The <strong>graph Laplacian</strong> is:
        </p>
        <MathBlock>
          {`L = A^TA`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`L_{ii}`}</InlineMath> = degree of node <InlineMath>i</InlineMath></li>
          <li><InlineMath>{`L_{ij} = -1`}</InlineMath> if nodes <InlineMath>i</InlineMath> and <InlineMath>j</InlineMath> are connected</li>
          <li><InlineMath>{`L_{ij} = 0`}</InlineMath> otherwise</li>
        </ul>
      </Definition>

      <Example title="Triangle Laplacian" className="my-6">
        <MathBlock>
          {`L = A^TA = \\begin{bmatrix} 2 & -1 & -1 \\\\ -1 & 2 & -1 \\\\ -1 & -1 & 2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Each diagonal entry is 2 (each node has degree 2).
        </p>
      </Example>

      <Theorem
        title="Properties of the Laplacian"
        className="my-6"
        proof={
          <>
            <p><strong>Symmetric:</strong> <InlineMath>{`(A^TA)^T = A^TA`}</InlineMath>.</p>
            <p className="mt-2"><strong>Positive semidefinite:</strong> <InlineMath>{`\\mathbf{x}^TL\\mathbf{x} = \\mathbf{x}^TA^TA\\mathbf{x} = \\|A\\mathbf{x}\\|^2 \\geq 0`}</InlineMath>.</p>
            <p className="mt-2"><strong>Zero eigenvalue:</strong> <InlineMath>{`L\\mathbf{1} = A^TA\\mathbf{1} = A^T\\mathbf{0} = \\mathbf{0}`}</InlineMath> since each row of <InlineMath>A</InlineMath> has entries summing to 0.</p>
            <p className="mt-2"><strong>Connected components:</strong> <InlineMath>{`\\lambda = 0`}</InlineMath> iff <InlineMath>{`\\mathbf{x} \\in N(A)`}</InlineMath>. For a connected graph, <InlineMath>{`N(A) = \\text{span}(\\mathbf{1})`}</InlineMath>. For <InlineMath>k</InlineMath> components, <InlineMath>{`\\dim N(A) = k`}</InlineMath>.</p>
            <p className="mt-2"><strong>Algebraic connectivity:</strong> <InlineMath>{`\\lambda_2 > 0`}</InlineMath> iff the graph is connected. Larger <InlineMath>{`\\lambda_2`}</InlineMath> means the graph is "more connected" (harder to partition).</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>L</InlineMath> is symmetric positive semidefinite</li>
          <li>Smallest eigenvalue is 0, with eigenvector <InlineMath>{`\\mathbf{1} = (1, 1, \\ldots, 1)`}</InlineMath></li>
          <li>Number of zero eigenvalues = number of connected components</li>
          <li>Second smallest eigenvalue (<strong>algebraic connectivity</strong>) measures how connected the graph is</li>
        </ul>
      </Theorem>

      <h2>Adjacency Matrix</h2>

      <Definition title="Adjacency Matrix" className="my-6">
        <p>
          The <strong>adjacency matrix</strong> <InlineMath>B</InlineMath> has:
        </p>
        <MathBlock>
          {`B_{ij} = \\begin{cases} 1 & \\text{if edge between } i \\text{ and } j \\\\ 0 & \\text{otherwise} \\end{cases}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>L = D - B</InlineMath> where <InlineMath>D</InlineMath> is the diagonal degree matrix.
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Graph Applications</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><strong>PageRank:</strong> Eigenvalues of web link matrix</li>
          <li><strong>Spectral clustering:</strong> Use eigenvectors of <InlineMath>L</InlineMath> to cluster nodes</li>
          <li><strong>Network flow:</strong> Solve <InlineMath>{`A^TA\\mathbf{x} = \\mathbf{b}`}</InlineMath></li>
          <li><strong>Random walks:</strong> Powers of transition matrix</li>
        </ul>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Incidence matrix <InlineMath>A</InlineMath>: rows = edges, columns = nodes.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>N(A)</InlineMath> = constant voltages; <InlineMath>N(A^T)</InlineMath> = loop currents.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Graph Laplacian <InlineMath>L = A^TA</InlineMath> is symmetric positive semidefinite.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Zero eigenvalues of <InlineMath>L</InlineMath> count connected components.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Second eigenvalue measures graph connectivity.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
