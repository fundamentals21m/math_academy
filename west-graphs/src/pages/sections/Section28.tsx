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

      <Theorem title="Basic Spectral Properties">
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

      <Theorem title="Largest Eigenvalue Bounds">
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

      <Theorem title="Chromatic Number Bound">
        <MathBlock math="\chi(G) \leq 1 + \lambda_1" />
        <p className="mt-2">
          Also: <InlineMath math="\chi(G) \geq 1 + \frac{\lambda_1}{-\lambda_n}" />{' '}
          (Hoffman bound).
        </p>
      </Theorem>

      <Theorem title="Independence Number Bound (Hoffman)">
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

      <Theorem title="Fiedler's Theorem">
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

      <Theorem title="Eigenvalues of Strongly Regular Graphs">
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

      <Theorem title="Spectrum Doesn't Determine Structure">
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
