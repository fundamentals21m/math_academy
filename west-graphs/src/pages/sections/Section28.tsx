import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <p>
        Spectral graph theory studies graphs through the eigenvalues of associated
        matrices. The spectrum (multiset of eigenvalues) encodes surprising amounts of
        structural information. This algebraic perspective connects graph theory to
        linear algebra and provides powerful tools for bounding graph parameters.
      </p>

      <h2>Graph Matrices</h2>

      <Definition title="Adjacency Matrix">
        <p>
          The <strong>adjacency matrix</strong> <InlineMath math="A(G)" /> of a graph{' '}
          <InlineMath math="G" /> with vertices <InlineMath math="v_1, \ldots, v_n" />{' '}
          is the <InlineMath math="n \times n" /> matrix where{' '}
          <InlineMath math="A_{ij} = 1" /> if <InlineMath math="v_i v_j \in E(G)" />,
          else <InlineMath math="A_{ij} = 0" />.
        </p>
        <p className="mt-2">
          For simple graphs, <InlineMath math="A" /> is symmetric with 0s on the
          diagonal.
        </p>
      </Definition>

      <Definition title="Laplacian Matrix">
        <p>
          The <strong>Laplacian matrix</strong> is <InlineMath math="L(G) = D(G) - A(G)" />,
          where <InlineMath math="D(G)" /> is the diagonal degree matrix.
        </p>
        <MathBlock math="L_{ij} = \begin{cases} d(v_i) & \text{if } i = j \\ -1 & \text{if } v_i v_j \in E(G) \\ 0 & \text{otherwise} \end{cases}" />
      </Definition>

      <Example title="Matrices of K₃">
        <p>
          For the triangle <InlineMath math="K_3" />:
        </p>
        <MathBlock math="A = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}, \quad L = \begin{pmatrix} 2 & -1 & -1 \\ -1 & 2 & -1 \\ -1 & -1 & 2 \end{pmatrix}" />
      </Example>

      <h2>Eigenvalues and Spectrum</h2>

      <Definition title="Spectrum">
        <p>
          The <strong>spectrum</strong> of <InlineMath math="G" /> is the multiset of
          eigenvalues of <InlineMath math="A(G)" />, usually listed as{' '}
          <InlineMath math="\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_n" />.
        </p>
        <p className="mt-2">
          The <strong>Laplacian spectrum</strong> has eigenvalues{' '}
          <InlineMath math="0 = \mu_1 \leq \mu_2 \leq \cdots \leq \mu_n" />.
        </p>
      </Definition>

      <Theorem
        title="Basic Spectral Properties"
        proof={
          <>
            <p>
              <strong>Real eigenvalues:</strong> <InlineMath math="A" /> is symmetric
              (<InlineMath math="A = A^T" />), so by the spectral theorem for real
              symmetric matrices, all eigenvalues are real.
            </p>
            <p className="mt-2">
              <strong>Trace formulas:</strong> For any matrix,{' '}
              <InlineMath math="\sum \lambda_i = \text{tr}(A)" />.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <InlineMath math="\text{tr}(A) = \sum A_{ii} = 0" /> (diagonal is all 0 for
                simple graphs).
              </li>
              <li>
                <InlineMath math="\text{tr}(A^2) = \sum_i (A^2)_{ii} = \sum_{i,j} A_{ij}A_{ji} = \sum_{i,j} A_{ij}^2 = 2m" />{' '}
                (counts edge pairs).
              </li>
              <li>
                <InlineMath math="(A^3)_{ii}" /> counts closed walks of length 3 from{' '}
                <InlineMath math="i" /> to <InlineMath math="i" />. Each triangle
                contributes 2 such walks at each vertex (clockwise and counterclockwise),
                giving <InlineMath math="\text{tr}(A^3) = 6 \times \#\text{triangles}" />.
              </li>
            </ul>
            <p className="mt-2">
              <strong>Laplacian zero eigenvalue:</strong>{' '}
              <InlineMath math="L \cdot \mathbf{1} = (D - A)\mathbf{1} = D\mathbf{1} - A\mathbf{1}" />.
              Since row sums of <InlineMath math="D" /> and <InlineMath math="A" /> both
              equal degrees, <InlineMath math="L\mathbf{1} = \mathbf{0}" />.
            </p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-1">
          <li>
            Adjacency eigenvalues are real (symmetric matrix).
          </li>
          <li>
            <InlineMath math="\sum \lambda_i = \text{tr}(A) = 0" />.
          </li>
          <li>
            <InlineMath math="\sum \lambda_i^2 = \text{tr}(A^2) = 2m" />.
          </li>
          <li>
            <InlineMath math="\sum \lambda_i^3 = \text{tr}(A^3) = 6 \times \#\text{triangles}" />.
          </li>
          <li>
            Laplacian always has eigenvalue 0 (eigenvector <InlineMath math="(1, \ldots, 1)^T" />).
          </li>
        </ul>
      </Theorem>

      <Example title="Spectrum of Complete Graph">
        <p>
          <InlineMath math="K_n" /> has adjacency matrix <InlineMath math="J - I" />{' '}
          where <InlineMath math="J" /> is all-ones matrix.
        </p>
        <p className="mt-2">
          Eigenvalues: <InlineMath math="n - 1" /> (multiplicity 1) and{' '}
          <InlineMath math="-1" /> (multiplicity <InlineMath math="n - 1" />).
        </p>
      </Example>

      <Example title="Spectrum of Cycle">
        <p>
          <InlineMath math="C_n" /> has eigenvalues{' '}
          <InlineMath math="2\cos(2\pi k/n)" /> for <InlineMath math="k = 0, 1, \ldots, n-1" />.
        </p>
        <p className="mt-2">
          Largest eigenvalue: <InlineMath math="\lambda_1 = 2" />. Smallest:{' '}
          <InlineMath math="\lambda_n = -2" /> if <InlineMath math="n" /> is even.
        </p>
      </Example>

      <h2>Spectral Bounds</h2>

      <Theorem
        title="Largest Eigenvalue Bounds"
        proof={
          <>
            <p>
              <strong>Upper bound <InlineMath math="\lambda_1 \leq \Delta" />:</strong>{' '}
              Let <InlineMath math="\mathbf{x}" /> be the eigenvector for{' '}
              <InlineMath math="\lambda_1" />. Let <InlineMath math="i" /> be a vertex
              where <InlineMath math="|x_i|" /> is maximum.
            </p>
            <MathBlock math="\lambda_1 |x_i| = |(\lambda_1 \mathbf{x})_i| = |(A\mathbf{x})_i| = \left|\sum_j A_{ij} x_j\right| \leq \sum_j A_{ij} |x_j| \leq d_i |x_i| \leq \Delta |x_i|" />
            <p className="mt-2">
              <strong>Lower bound <InlineMath math="\lambda_1 \geq \bar{d}" />:</strong>{' '}
              Use the variational characterization{' '}
              <InlineMath math="\lambda_1 = \max_{\mathbf{x} \neq 0} \frac{\mathbf{x}^T A \mathbf{x}}{\mathbf{x}^T \mathbf{x}}" />.
            </p>
            <p className="mt-2">
              Take <InlineMath math="\mathbf{x} = \mathbf{1}" /> (all ones):
            </p>
            <MathBlock math="\lambda_1 \geq \frac{\mathbf{1}^T A \mathbf{1}}{\mathbf{1}^T \mathbf{1}} = \frac{\sum_{i,j} A_{ij}}{n} = \frac{2m}{n} = \bar{d}" />
            <p className="mt-2">
              Equality holds iff <InlineMath math="\mathbf{1}" /> is an eigenvector,
              which occurs iff <InlineMath math="G" /> is regular.
            </p>
          </>
        }
      >
        <p>
          For a graph <InlineMath math="G" /> with maximum degree{' '}
          <InlineMath math="\Delta" /> and average degree <InlineMath math="\bar{d}" />:
        </p>
        <MathBlock math="\bar{d} \leq \lambda_1 \leq \Delta" />
        <p className="mt-2">
          Equality on left iff <InlineMath math="G" /> is regular. Equality on right
          always for <InlineMath math="\lambda_1" />.
        </p>
      </Theorem>

      <Theorem
        title="Chromatic Number Bound"
        proof={
          <>
            <p>
              <strong>Upper bound <InlineMath math="\chi(G) \leq 1 + \lambda_1" />:</strong>{' '}
              Since <InlineMath math="\lambda_1 \leq \Delta" />, this follows from{' '}
              <InlineMath math="\chi(G) \leq \Delta + 1" /> (greedy coloring).
            </p>
            <p className="mt-2">
              <strong>Hoffman's lower bound:</strong> Consider a proper{' '}
              <InlineMath math="k" />-coloring. Let <InlineMath math="S_i" /> be color
              class <InlineMath math="i" />, and define the{' '}
              <InlineMath math="n \times k" /> matrix <InlineMath math="X" /> where{' '}
              <InlineMath math="X_{vj} = 1" /> if <InlineMath math="v \in S_j" />.
            </p>
            <p className="mt-2">
              Then <InlineMath math="X^T A X" /> is a <InlineMath math="k \times k" />{' '}
              matrix with 0 on diagonal (independent sets). Using eigenvalue interlacing
              and the fact that <InlineMath math="A" /> has <InlineMath math="n" />{' '}
              eigenvalues with smallest <InlineMath math="\lambda_n" />:
            </p>
            <MathBlock math="\lambda_n \leq \text{smallest eigenvalue of } \frac{1}{n}X^TAX" />
            <p className="mt-2">
              After algebraic manipulation (using properties of equitable partitions):
            </p>
            <MathBlock math="\chi(G) = k \geq 1 + \frac{\lambda_1}{-\lambda_n}" />
          </>
        }
      >
        <MathBlock math="\chi(G) \leq 1 + \lambda_1" />
        <p className="mt-2">
          Also: <InlineMath math="\chi(G) \geq 1 + \frac{\lambda_1}{-\lambda_n}" />{' '}
          (Hoffman bound).
        </p>
      </Theorem>

      <Theorem
        title="Independence Number Bound (Hoffman)"
        proof={
          <>
            <p>
              Let <InlineMath math="S" /> be an independent set of size{' '}
              <InlineMath math="\alpha" />. Define <InlineMath math="\mathbf{x}" /> by{' '}
              <InlineMath math="x_i = 1" /> if <InlineMath math="i \in S" /> and{' '}
              <InlineMath math="x_i = -\alpha/(n - \alpha)" /> otherwise.
            </p>
            <p className="mt-2">
              This ensures <InlineMath math="\mathbf{1}^T \mathbf{x} = 0" />, so{' '}
              <InlineMath math="\mathbf{x}" /> is orthogonal to the eigenvector for{' '}
              <InlineMath math="\lambda_1" /> (which is <InlineMath math="\mathbf{1}" />{' '}
              for regular graphs, or approximately for general graphs).
            </p>
            <p className="mt-2">
              <strong>Quadratic form:</strong> Since <InlineMath math="S" /> is
              independent, <InlineMath math="\mathbf{x}^T A \mathbf{x}" /> has no
              contribution from pairs within <InlineMath math="S" />:
            </p>
            <MathBlock math="\mathbf{x}^T A \mathbf{x} = -2 \cdot \frac{\alpha}{n-\alpha} \cdot |E(S, \overline{S})| + \left(\frac{\alpha}{n-\alpha}\right)^2 \cdot 2|E(\overline{S})|" />
            <p className="mt-2">
              <strong>Using eigenvalue bounds:</strong> Since <InlineMath math="\mathbf{x} \perp \mathbf{1}" />,
              the Rayleigh quotient gives{' '}
              <InlineMath math="\mathbf{x}^T A \mathbf{x} / \|\mathbf{x}\|^2 \leq \lambda_2 \leq \lambda_1" />{' '}
              and <InlineMath math="\geq \lambda_n" />.
            </p>
            <p className="mt-2">
              After simplification, this yields the stated bound.
            </p>
          </>
        }
      >
        <MathBlock math="\alpha(G) \leq \frac{n \cdot (-\lambda_n)}{\lambda_1 - \lambda_n}" />
      </Theorem>

      <h2>Algebraic Connectivity</h2>

      <Definition title="Algebraic Connectivity">
        <p>
          The <strong>algebraic connectivity</strong>{' '}
          <InlineMath math="a(G) = \mu_2" /> is the second-smallest Laplacian
          eigenvalue.
        </p>
      </Definition>

      <Theorem
        title="Fiedler's Theorem"
        proof={
          <>
            <p>
              <strong><InlineMath math="a(G) > 0" /> iff connected:</strong>
            </p>
            <p className="mt-2">
              The multiplicity of eigenvalue 0 in <InlineMath math="L" /> equals the
              number of connected components. This is because the null space of{' '}
              <InlineMath math="L" /> is spanned by indicator vectors of components.
            </p>
            <p className="mt-2">
              If <InlineMath math="G" /> is connected, 0 has multiplicity 1, so{' '}
              <InlineMath math="\mu_2 > 0" />. If disconnected, 0 has multiplicity{' '}
              <InlineMath math="\geq 2" />, so <InlineMath math="\mu_2 = 0" />.
            </p>
            <p className="mt-2">
              <strong><InlineMath math="a(G) \leq \kappa'(G)" />:</strong>
            </p>
            <p className="mt-2">
              Let <InlineMath math="S" /> be a minimum edge cut of size{' '}
              <InlineMath math="\kappa'" /> separating <InlineMath math="G" /> into
              parts <InlineMath math="A" /> and <InlineMath math="B" /> with{' '}
              <InlineMath math="|A| = a" /> and <InlineMath math="|B| = b" />.
            </p>
            <p className="mt-2">
              Define <InlineMath math="\mathbf{x}" /> with{' '}
              <InlineMath math="x_i = b" /> for <InlineMath math="i \in A" /> and{' '}
              <InlineMath math="x_i = -a" /> for <InlineMath math="i \in B" />.
              Then <InlineMath math="\mathbf{1}^T \mathbf{x} = 0" /> and:
            </p>
            <MathBlock math="a(G) \leq \frac{\mathbf{x}^T L \mathbf{x}}{\mathbf{x}^T \mathbf{x}} = \frac{(a+b)^2 \cdot \kappa'}{ab(a+b)} \leq \kappa'" />
            <p className="mt-2">
              <strong><InlineMath math="a(G) \leq \kappa(G)" />:</strong> Similar
              argument using a minimum vertex cut.
            </p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="a(G) > 0" /> iff <InlineMath math="G" /> is connected.
          </li>
          <li>
            <InlineMath math="a(G) \leq \kappa(G)" /> (vertex connectivity).
          </li>
          <li>
            <InlineMath math="a(G) \leq \kappa'(G)" /> (edge connectivity).
          </li>
        </ul>
      </Theorem>

      <h2>Strongly Regular Graphs</h2>

      <Definition title="Strongly Regular Graph">
        <p>
          A graph is <strong>strongly regular</strong> with parameters{' '}
          <InlineMath math="(n, k, \lambda, \mu)" /> if:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <InlineMath math="n" /> vertices, <InlineMath math="k" />-regular
          </li>
          <li>
            Every pair of adjacent vertices has exactly{' '}
            <InlineMath math="\lambda" /> common neighbors
          </li>
          <li>
            Every pair of non-adjacent vertices has exactly{' '}
            <InlineMath math="\mu" /> common neighbors
          </li>
        </ul>
      </Definition>

      <Example title="Petersen Graph">
        <p>
          The Petersen graph is strongly regular with parameters{' '}
          <InlineMath math="(10, 3, 0, 1)" />:
        </p>
        <ul className="list-disc list-inside">
          <li>10 vertices, 3-regular</li>
          <li>Adjacent vertices have 0 common neighbors (triangle-free)</li>
          <li>Non-adjacent vertices have exactly 1 common neighbor</li>
        </ul>
        <p className="mt-2">
          Eigenvalues: 3 (mult. 1), 1 (mult. 5), -2 (mult. 4).
        </p>
      </Example>

      <Theorem
        title="Eigenvalues of Strongly Regular Graphs"
        proof={
          <>
            <p>
              <strong>Matrix equation:</strong> For a strongly regular graph, the
              adjacency matrix satisfies:
            </p>
            <MathBlock math="A^2 = kI + \lambda A + \mu(J - I - A)" />
            <p className="mt-2">
              where <InlineMath math="J" /> is the all-ones matrix. This is because{' '}
              <InlineMath math="(A^2)_{ij}" /> counts walks of length 2 from{' '}
              <InlineMath math="i" /> to <InlineMath math="j" />.
            </p>
            <p className="mt-2">
              <strong>Simplify:</strong>
            </p>
            <MathBlock math="A^2 = (k - \mu)I + (\lambda - \mu)A + \mu J" />
            <p className="mt-2">
              <strong>Eigenvalue <InlineMath math="k" />:</strong> The vector{' '}
              <InlineMath math="\mathbf{1}" /> is an eigenvector with eigenvalue{' '}
              <InlineMath math="k" /> (row sum).
            </p>
            <p className="mt-2">
              <strong>Other eigenvalues:</strong> For eigenvectors{' '}
              <InlineMath math="\mathbf{x} \perp \mathbf{1}" />, we have{' '}
              <InlineMath math="J\mathbf{x} = 0" />, so:
            </p>
            <MathBlock math="\lambda^2 \mathbf{x} = A^2 \mathbf{x} = (k - \mu)\mathbf{x} + (\lambda - \mu)\lambda \mathbf{x}" />
            <p className="mt-2">
              Thus <InlineMath math="\lambda^2 - (\lambda - \mu)\lambda - (k - \mu) = 0" />.
              The quadratic formula gives the two roots <InlineMath math="r" /> and{' '}
              <InlineMath math="s" />.
            </p>
          </>
        }
      >
        <p>
          A strongly regular graph with parameters{' '}
          <InlineMath math="(n, k, \lambda, \mu)" /> has exactly 3 distinct eigenvalues:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <InlineMath math="k" /> (multiplicity 1)
          </li>
          <li>
            <InlineMath math="r = \frac{(\lambda - \mu) + \sqrt{(\lambda - \mu)^2 + 4(k - \mu)}}{2}" />
          </li>
          <li>
            <InlineMath math="s = \frac{(\lambda - \mu) - \sqrt{(\lambda - \mu)^2 + 4(k - \mu)}}{2}" />
          </li>
        </ul>
      </Theorem>

      <h2>Isospectral Graphs</h2>

      <Definition title="Isospectral">
        <p>
          Two graphs are <strong>isospectral</strong> (or <strong>cospectral</strong>)
          if they have the same spectrum.
        </p>
      </Definition>

      <Theorem
        title="Spectrum Doesn't Determine Structure"
        proof={
          <>
            <p>
              <strong>Smallest counterexample (5 vertices):</strong>
            </p>
            <p className="mt-2">
              Consider <InlineMath math="G_1 = C_5" /> (the 5-cycle) and{' '}
              <InlineMath math="G_2 = K_{1,4}" /> with an added edge between two leaves.
              Actually, the smallest known examples are <InlineMath math="C_4 \cup K_1" />{' '}
              and <InlineMath math="K_{1,3} \cup K_1" /> (disjoint unions).
            </p>
            <p className="mt-2">
              <strong>Construction method:</strong> One systematic way to create
              cospectral graphs uses Seidel switching: partition{' '}
              <InlineMath math="V(G)" /> into sets <InlineMath math="S" /> and{' '}
              <InlineMath math="T" />, then swap edges and non-edges between them.
              Under certain conditions, this preserves the spectrum.
            </p>
            <p className="mt-2">
              <strong>Almost all determined:</strong> Let <InlineMath math="D(n)" /> be
              the fraction of <InlineMath math="n" />-vertex graphs determined by their
              spectrum. Probabilistic arguments (similar to Erdős-style counting) show{' '}
              <InlineMath math="D(n) \to 1" /> as <InlineMath math="n \to \infty" />.
            </p>
            <p className="mt-2">
              The "typical" graph has no non-trivial automorphisms and is determined
              by its spectrum.
            </p>
          </>
        }
      >
        <p>
          Non-isomorphic graphs can be isospectral. The smallest example has 5 vertices.
        </p>
        <p className="mt-2">
          However, almost all graphs are determined by their spectrum (proved
          probabilistically).
        </p>
      </Theorem>

      <h2>Applications</h2>

      <h3>Graph Partitioning</h3>

      <p>
        The <strong>Fiedler vector</strong> (eigenvector for <InlineMath math="\mu_2" />)
        provides a way to partition vertices into two sets with few edges between them
        (spectral partitioning).
      </p>

      <h3>Random Walks</h3>

      <p>
        The mixing time of random walks on graphs is controlled by the spectral gap{' '}
        <InlineMath math="\lambda_1 - \lambda_2" /> of the adjacency matrix. Larger gap
        means faster mixing.
      </p>

      <h3>Expander Graphs</h3>

      <Definition title="Expander">
        <p>
          A <InlineMath math="k" />-regular graph is an{' '}
          <InlineMath math="(n, k, \epsilon)" />-<strong>expander</strong> if{' '}
          <InlineMath math="\lambda_2 \leq k - \epsilon" />.
        </p>
        <p className="mt-2">
          Expanders have excellent connectivity properties and are used in coding theory
          and derandomization.
        </p>
      </Definition>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Spectrum:</strong> Eigenvalues of adjacency matrix encode structural
          information.
        </li>
        <li>
          <strong>Bounds:</strong> Spectral bounds on chromatic number, independence
          number, connectivity.
        </li>
        <li>
          <strong>Laplacian:</strong> Second eigenvalue measures algebraic connectivity.
        </li>
        <li>
          <strong>Strongly Regular:</strong> Exactly 3 distinct eigenvalues; highly
          symmetric.
        </li>
        <li>
          <strong>Not Determined:</strong> Spectrum doesn't uniquely determine the graph.
        </li>
        <li>
          <strong>Applications:</strong> Graph partitioning, random walks, expanders,
          network analysis.
        </li>
      </ul>
    </LessonLayout>
  );
}
