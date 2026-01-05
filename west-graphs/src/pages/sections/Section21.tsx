import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <p>
        A Hamiltonian cycle visits every vertex exactly once and returns to start—the
        graph-theoretic version of the Traveling Salesman Problem. Unlike Eulerian
        circuits (which we characterized completely), there is no simple criterion for
        Hamiltonian cycles. We study sufficient conditions that guarantee existence and
        necessary conditions for specific graph families.
      </p>

      <h2>Hamiltonian Graphs</h2>

      <Definition title="Hamiltonian Path and Cycle">
        <p>
          A <strong>Hamiltonian path</strong> is a path that visits every vertex exactly
          once.
        </p>
        <p className="mt-2">
          A <strong>Hamiltonian cycle</strong> is a cycle that visits every vertex
          exactly once.
        </p>
        <p className="mt-2">
          A graph is <strong>Hamiltonian</strong> if it has a Hamiltonian cycle.
        </p>
      </Definition>

      <Example title="Hamiltonian and Non-Hamiltonian Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Hamiltonian:</strong> <InlineMath math="K_n" /> (
            <InlineMath math="n \geq 3" />), <InlineMath math="C_n" />,{' '}
            <InlineMath math="K_{n,n}" /> (<InlineMath math="n \geq 2" />), cube graph,
            dodecahedron
          </li>
          <li>
            <strong>Non-Hamiltonian:</strong> <InlineMath math="K_{m,n}" /> (
            <InlineMath math="m \neq n" />), Petersen graph, any graph with a
            cut-vertex, bipartite graphs with unequal parts
          </li>
        </ul>
      </Example>

      <h2>Necessary Conditions</h2>

      <Theorem title="Necessary Condition 1">
        <p>
          If <InlineMath math="G" /> is Hamiltonian and <InlineMath math="S" /> is a
          proper nonempty subset of <InlineMath math="V(G)" />, then the number of
          components of <InlineMath math="G - S" /> is at most{' '}
          <InlineMath math="|S|" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              A Hamiltonian cycle visiting vertices of{' '}
              <InlineMath math="G - S" /> must pass through{' '}
              <InlineMath math="S" /> between consecutive components. Each transition
              uses at least one vertex of <InlineMath math="S" />, so components ≤{' '}
              <InlineMath math="|S|" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Petersen Graph is Non-Hamiltonian">
        <p>
          The Petersen graph has 10 vertices and is 3-regular. Remove the 5 vertices of
          the outer pentagon: the remaining 5 vertices (inner star) form an independent
          set—5 isolated vertices!
        </p>
        <p className="mt-2">
          With <InlineMath math="|S| = 5" /> but 5 components, the necessary condition
          barely holds. A careful case analysis shows no Hamiltonian cycle exists.
        </p>
      </Example>

      <Theorem title="Bipartite Necessary Condition">
        <p>
          A bipartite graph <InlineMath math="G" /> with bipartition{' '}
          <InlineMath math="(X, Y)" /> has a Hamiltonian cycle only if{' '}
          <InlineMath math="|X| = |Y|" />.
        </p>
        <p className="mt-2 text-dark-300">
          The Hamiltonian cycle must alternate between <InlineMath math="X" /> and{' '}
          <InlineMath math="Y" />.
        </p>
      </Theorem>

      <h2>Sufficient Conditions</h2>

      <Theorem title="Dirac's Theorem (Theorem 7.2.1)">
        <p>
          If <InlineMath math="G" /> is a simple graph with <InlineMath math="n \geq 3" />{' '}
          vertices and <InlineMath math="\delta(G) \geq n/2" />, then{' '}
          <InlineMath math="G" /> is Hamiltonian.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="P = v_1 v_2 \cdots v_k" /> be a longest path. If{' '}
              <InlineMath math="k < n" />, all neighbors of <InlineMath math="v_1" /> and{' '}
              <InlineMath math="v_k" /> are on <InlineMath math="P" /> (else extend).
            </p>
            <p className="mt-2">
              By pigeonhole with <InlineMath math="\delta \geq n/2" />, there exists{' '}
              <InlineMath math="v_i" /> where <InlineMath math="v_1 v_{i+1}" /> and{' '}
              <InlineMath math="v_k v_i" /> are edges. This creates a cycle covering{' '}
              <InlineMath math="P" />. Since <InlineMath math="k < n" />, an uncovered
              vertex is adjacent to the cycle, giving a longer path—contradiction.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Dirac's Theorem is Sharp">
        <p>
          Consider <InlineMath math="K_{n/2, n/2 + 1}" /> (with <InlineMath math="n" />{' '}
          odd). This has <InlineMath math="\delta = n/2" /> but is not Hamiltonian
          (unequal parts). So <InlineMath math="\delta \geq n/2" /> is best possible.
        </p>
      </Example>

      <Theorem title="Ore's Theorem (Theorem 7.2.3)">
        <p>
          If <InlineMath math="G" /> is a simple graph with <InlineMath math="n \geq 3" />{' '}
          vertices such that for every pair of non-adjacent vertices{' '}
          <InlineMath math="u, v" />:
        </p>
        <MathBlock math="d(u) + d(v) \geq n" />
        <p className="mt-2">
          then <InlineMath math="G" /> is Hamiltonian.
        </p>
        <p className="mt-2 text-dark-300">
          Ore's condition is weaker than Dirac's (allows low-degree vertices if they're
          adjacent to everything).
        </p>
      </Theorem>

      <Definition title="Closure">
        <p>
          The <strong>closure</strong> <InlineMath math="cl(G)" /> of graph{' '}
          <InlineMath math="G" /> is obtained by repeatedly adding edges between
          non-adjacent vertices <InlineMath math="u, v" /> with{' '}
          <InlineMath math="d(u) + d(v) \geq n" /> until no more can be added.
        </p>
      </Definition>

      <Theorem title="Bondy-Chvátal Theorem (Theorem 7.2.6)">
        <p>
          A graph <InlineMath math="G" /> is Hamiltonian if and only if{' '}
          <InlineMath math="cl(G)" /> is Hamiltonian.
        </p>
        <p className="mt-2 text-dark-300">
          The closure is unique (independent of order of edge additions).
        </p>
      </Theorem>

      <Example title="Using Closure">
        <p>
          If <InlineMath math="cl(G) = K_n" />, then <InlineMath math="G" /> is
          Hamiltonian. This gives a simple sufficient condition checkable in polynomial
          time.
        </p>
      </Example>

      <h2>Degree Sequences</h2>

      <Definition title="Hamiltonian Degree Sequence">
        <p>
          A degree sequence is <strong>forcibly Hamiltonian</strong> if every simple
          graph with that degree sequence is Hamiltonian.
        </p>
      </Definition>

      <Theorem title="Chvátal's Theorem (Theorem 7.2.8)">
        <p>
          Let <InlineMath math="d_1 \leq d_2 \leq \cdots \leq d_n" /> be a degree
          sequence with <InlineMath math="n \geq 3" />. If for all{' '}
          <InlineMath math="k < n/2" />:
        </p>
        <MathBlock math="d_k \leq k \implies d_{n-k} \geq n - k" />
        <p className="mt-2">
          then the sequence is forcibly Hamiltonian.
        </p>
      </Theorem>

      <h2>Hamiltonian Paths</h2>

      <Theorem title="Path Version of Dirac">
        <p>
          If <InlineMath math="G" /> has <InlineMath math="n \geq 2" /> vertices and{' '}
          <InlineMath math="\delta(G) \geq (n-1)/2" />, then <InlineMath math="G" /> has
          a Hamiltonian path.
        </p>
      </Theorem>

      <Theorem title="Theorem 7.2.10 (Hamiltonian Path Between Vertices)">
        <p>
          If <InlineMath math="G" /> is simple with <InlineMath math="n \geq 3" />{' '}
          vertices, and for non-adjacent <InlineMath math="u, v" />:{' '}
          <InlineMath math="d(u) + d(v) \geq n - 1" />, then there is a Hamiltonian
          path.
        </p>
      </Theorem>

      <h2>Special Graph Classes</h2>

      <Theorem title="Complete Bipartite Graphs">
        <p>
          <InlineMath math="K_{m,n}" /> is Hamiltonian if and only if{' '}
          <InlineMath math="m = n \geq 2" />.
        </p>
      </Theorem>

      <Theorem title="Hypercube is Hamiltonian">
        <p>
          The <InlineMath math="n" />-dimensional hypercube{' '}
          <InlineMath math="Q_n" /> is Hamiltonian for <InlineMath math="n \geq 2" />.
        </p>
        <p className="mt-2 text-dark-300">
          In fact, <InlineMath math="Q_n" /> is Hamiltonian laceable: there's a
          Hamiltonian path between any two vertices of different parities.
        </p>
      </Theorem>

      <h2>Complexity</h2>

      <Theorem title="NP-Completeness (Karp, 1972)">
        <p>
          Determining whether a graph has a Hamiltonian cycle is NP-complete.
        </p>
        <p className="mt-2">
          It remains NP-complete even for:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>Planar 3-connected cubic graphs</li>
          <li>Bipartite graphs</li>
          <li>Grid graphs</li>
        </ul>
      </Theorem>

      <p>
        This contrasts sharply with Eulerian circuits, which can be found in linear
        time.
      </p>

      <h2>Traveling Salesman Problem</h2>

      <Definition title="TSP">
        <p>
          The <strong>Traveling Salesman Problem</strong> (TSP) asks: given a weighted
          complete graph, find a Hamiltonian cycle of minimum total weight.
        </p>
        <p className="mt-2">
          The unweighted version (does a Hamiltonian cycle exist?) is a special case.
        </p>
      </Definition>

      <Theorem title="TSP Complexity">
        <p>
          TSP is NP-hard. The optimization version has no polynomial-time approximation
          scheme unless P=NP (in the general case).
        </p>
        <p className="mt-2">
          For metric TSP (triangle inequality holds), the Christofides algorithm gives a
          3/2-approximation.
        </p>
      </Theorem>

      <h2>Pancyclic Graphs</h2>

      <Definition title="Pancyclic">
        <p>
          A graph <InlineMath math="G" /> is <strong>pancyclic</strong> if it contains
          cycles of every length from 3 to <InlineMath math="n" />.
        </p>
      </Definition>

      <Theorem title="Bondy's Meta-Conjecture">
        <p>
          "Almost any non-trivial condition implying that a graph is Hamiltonian also
          implies that it is pancyclic."
        </p>
        <p className="mt-2 text-dark-300">
          For instance, if <InlineMath math="\delta \geq n/2" /> and{' '}
          <InlineMath math="G" /> is not bipartite, then <InlineMath math="G" /> is
          pancyclic or <InlineMath math="G = K_{n/2, n/2}" />.
        </p>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Hamiltonian:</strong> Cycle visiting every vertex exactly once. Much
          harder than Eulerian.
        </li>
        <li>
          <strong>Necessary:</strong> Removing <InlineMath math="k" /> vertices leaves
          at most <InlineMath math="k" /> components.
        </li>
        <li>
          <strong>Dirac:</strong> <InlineMath math="\delta \geq n/2" /> implies
          Hamiltonian.
        </li>
        <li>
          <strong>Ore:</strong> <InlineMath math="d(u) + d(v) \geq n" /> for all
          non-adjacent <InlineMath math="u, v" /> implies Hamiltonian.
        </li>
        <li>
          <strong>Closure:</strong> <InlineMath math="G" /> Hamiltonian iff{' '}
          <InlineMath math="cl(G)" /> Hamiltonian.
        </li>
        <li>
          <strong>NP-Complete:</strong> No efficient algorithm known; contrasts with
          linear-time Eulerian.
        </li>
        <li>
          <strong>TSP:</strong> Weighted version of Hamiltonian cycle; fundamental
          optimization problem.
        </li>
      </ul>
    </LessonLayout>
  );
}
