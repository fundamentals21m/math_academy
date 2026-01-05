import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <p>
        We now study graphs with higher connectivity. The structure of 2-connected
        graphs is particularly elegant—they can be built by successively adding paths.
        Menger's Theorem provides a fundamental characterization of{' '}
        <InlineMath math="k" />-connectivity in terms of disjoint paths, connecting
        connectivity to the maximum flow problem.
      </p>

      <h2>2-Connected Graphs</h2>

      <p>
        A graph is 2-connected if <InlineMath math="\kappa(G) \geq 2" />: removing any
        single vertex leaves it connected. This is a natural "robustness" requirement
        for networks.
      </p>

      <Theorem title="Lemma 4.2.1 (2-Connected Characterization)">
        <p>For a graph <InlineMath math="G" /> with at least 3 vertices, TFAE:</p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>
            <InlineMath math="G" /> is 2-connected.
          </li>
          <li>
            For every pair <InlineMath math="u, v \in V(G)" />, there exist two
            internally disjoint <InlineMath math="u, v" />-paths.
          </li>
          <li>
            For every pair <InlineMath math="u, v \in V(G)" />, there is a cycle
            containing both <InlineMath math="u" /> and <InlineMath math="v" />.
          </li>
          <li>
            <InlineMath math="\delta(G) \geq 1" /> and every pair of edges lies on a
            common cycle.
          </li>
        </ol>
      </Theorem>

      <Example title="2-Connected Examples">
        <p>
          <InlineMath math="K_n" /> (<InlineMath math="n \geq 3" />) is 2-connected:
          removing any vertex leaves <InlineMath math="K_{n-1}" />, still connected.
        </p>
        <p className="mt-2">
          <InlineMath math="C_n" /> is 2-connected: removing any vertex leaves a path{' '}
          <InlineMath math="P_{n-1}" />, connected.
        </p>
        <p className="mt-2">
          A tree with more than one edge is not 2-connected: every non-leaf vertex is a
          cut-vertex.
        </p>
      </Example>

      <h3>Ear Decomposition</h3>

      <Definition title="Ear">
        <p>
          An <strong>ear</strong> of a graph <InlineMath math="G" /> is a maximal path
          whose internal vertices have degree 2 in <InlineMath math="G" />.
        </p>
        <p className="mt-2">
          An <strong>ear decomposition</strong> of <InlineMath math="G" /> is a
          decomposition <InlineMath math="P_0, P_1, \ldots, P_k" /> such that:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <InlineMath math="P_0" /> is a cycle
          </li>
          <li>
            For <InlineMath math="i \geq 1" />, <InlineMath math="P_i" /> is an ear of{' '}
            <InlineMath math="P_0 \cup P_1 \cup \cdots \cup P_i" /> with endpoints (but
            no internal vertices) in{' '}
            <InlineMath math="P_0 \cup \cdots \cup P_{i-1}" />
          </li>
        </ul>
      </Definition>

      <Theorem title="Whitney's Ear Decomposition Theorem (Theorem 4.2.6)">
        <p>
          A graph <InlineMath math="G" /> is 2-connected if and only if it has an ear
          decomposition.
        </p>
        <p className="mt-2">
          Furthermore, every cycle in a 2-connected graph is the initial cycle of some
          ear decomposition.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>(⇐)</strong> Adding an ear preserves 2-connectivity: the new
              internal vertices have two disjoint paths to the old graph.
            </p>
            <p className="mt-2">
              <strong>(⇒)</strong> Start with any cycle <InlineMath math="P_0" />
              (exists since 2-connected). While <InlineMath math="\bigcup P_i \neq G" />,
              there's an edge <InlineMath math="e" /> with one endpoint in the union.
              Since <InlineMath math="G" /> is 2-connected, <InlineMath math="e" /> lies
              on a cycle, providing a new ear.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Building K₄ via Ears">
        <p>
          Start with <InlineMath math="P_0 = (1, 2, 3, 1)" />, a triangle.
        </p>
        <p className="mt-2">
          Add ear <InlineMath math="P_1 = (1, 4, 2)" />: path from 1 to 2 through new
          vertex 4.
        </p>
        <p className="mt-2">
          Add ear <InlineMath math="P_2 = (3, 4)" />: just an edge (an ear of length 1).
        </p>
        <p className="mt-2">
          Result: <InlineMath math="K_4" /> with ear decomposition of 3 ears.
        </p>
      </Example>

      <h2>Menger's Theorem</h2>

      <p>
        Menger's Theorem is one of the most important results in graph theory,
        characterizing connectivity in terms of disjoint paths. It has four versions
        (vertex/edge, global/local).
      </p>

      <Definition title="Disjoint Paths">
        <p>
          Paths are <strong>internally disjoint</strong> if they share no internal
          vertices (may share endpoints).
        </p>
        <p className="mt-2">
          Paths are <strong>edge-disjoint</strong> if they share no edges (may share
          vertices).
        </p>
      </Definition>

      <Theorem title="Menger's Theorem - Vertex Version (Theorem 4.2.17)">
        <p>
          Let <InlineMath math="x" /> and <InlineMath math="y" /> be non-adjacent
          vertices in graph <InlineMath math="G" />. The minimum size of an{' '}
          <InlineMath math="x, y" />-vertex cut equals the maximum number of pairwise
          internally disjoint <InlineMath math="x, y" />-paths.
        </p>
      </Theorem>

      <Theorem title="Menger's Theorem - Edge Version (Theorem 4.2.19)">
        <p>
          For any vertices <InlineMath math="x" /> and <InlineMath math="y" /> in graph{' '}
          <InlineMath math="G" />, the minimum size of an{' '}
          <InlineMath math="x, y" />-edge cut equals the maximum number of pairwise
          edge-disjoint <InlineMath math="x, y" />-paths.
        </p>
      </Theorem>

      <Example title="Applying Menger's Theorem">
        <p>
          In the Petersen graph, any two vertices have at least 3 internally disjoint
          paths between them (since <InlineMath math="\kappa = 3" />).
        </p>
        <p className="mt-2">
          Consider vertices at distance 2. By Menger, there exist 3 internally disjoint
          paths. One path has length 2, and the other two go around different parts of
          the graph.
        </p>
      </Example>

      <Theorem title="Global Menger's Theorem (Theorem 4.2.21)">
        <p>
          A graph <InlineMath math="G" /> is <InlineMath math="k" />-connected if and
          only if for every pair <InlineMath math="x, y \in V(G)" />, there exist{' '}
          <InlineMath math="k" /> pairwise internally disjoint{' '}
          <InlineMath math="x, y" />-paths.
        </p>
      </Theorem>

      <Theorem title="Edge Version of Global Menger (Theorem 4.2.22)">
        <p>
          A graph <InlineMath math="G" /> is <InlineMath math="k" />-edge-connected if
          and only if for every pair <InlineMath math="x, y \in V(G)" />, there exist{' '}
          <InlineMath math="k" /> pairwise edge-disjoint{' '}
          <InlineMath math="x, y" />-paths.
        </p>
      </Theorem>

      <h3>Fan Lemma</h3>

      <Definition title="Fan">
        <p>
          An <InlineMath math="x, U" />-<strong>fan</strong> is a collection of{' '}
          <InlineMath math="x, U" />-paths that pairwise share only{' '}
          <InlineMath math="x" /> (internally disjoint from <InlineMath math="x" /> to{' '}
          <InlineMath math="U" />).
        </p>
      </Definition>

      <Theorem title="Fan Lemma (Lemma 4.2.24)">
        <p>
          If <InlineMath math="G" /> is <InlineMath math="k" />-connected,{' '}
          <InlineMath math="x \in V(G)" />, and <InlineMath math="U \subseteq V(G)" />{' '}
          with <InlineMath math="|U| \geq k" />, then <InlineMath math="G" /> has an{' '}
          <InlineMath math="x, U" />-fan of size <InlineMath math="k" />.
        </p>
      </Theorem>

      <h2>Higher Connectivity</h2>

      <Theorem title="Expansion Lemma (Lemma 4.2.27)">
        <p>
          If <InlineMath math="G" /> is a <InlineMath math="k" />-connected graph and{' '}
          <InlineMath math="G'" /> is obtained from <InlineMath math="G" /> by adding a
          new vertex <InlineMath math="y" /> with at least <InlineMath math="k" />{' '}
          neighbors in <InlineMath math="G" />, then <InlineMath math="G'" /> is{' '}
          <InlineMath math="k" />-connected.
        </p>
      </Theorem>

      <Theorem title="Theorem 4.2.30 (Harary Graphs)">
        <p>
          For <InlineMath math="k \leq n - 1" />, there exists a{' '}
          <InlineMath math="k" />-connected graph on <InlineMath math="n" /> vertices
          with exactly <InlineMath math="\lceil kn/2 \rceil" /> edges.
        </p>
        <p className="mt-2 text-dark-300">
          This is the minimum number of edges needed for{' '}
          <InlineMath math="k" />-connectivity.
        </p>
      </Theorem>

      <Definition title="Harary Graph">
        <p>
          The Harary graph <InlineMath math="H_{k,n}" /> achieves minimum edge count for{' '}
          <InlineMath math="k" />-connectivity on <InlineMath math="n" /> vertices.
        </p>
        <p className="mt-2">
          Construction: Place <InlineMath math="n" /> vertices on a circle. Connect each
          vertex to its <InlineMath math="\lfloor k/2 \rfloor" /> nearest neighbors on
          each side. If <InlineMath math="k" /> is odd and <InlineMath math="n" /> is
          even, add diametric edges.
        </p>
      </Definition>

      <h2>Subdivisions and Contractions</h2>

      <p>
        Connectivity behaves predictably under graph operations.
      </p>

      <Definition title="Subdivision and Contraction">
        <p>
          <strong>Subdividing</strong> an edge <InlineMath math="uv" /> means replacing
          it with a path <InlineMath math="u, w, v" /> through a new vertex{' '}
          <InlineMath math="w" />.
        </p>
        <p className="mt-2">
          <strong>Contracting</strong> an edge <InlineMath math="uv" /> means merging{' '}
          <InlineMath math="u" /> and <InlineMath math="v" /> into a single vertex.
        </p>
      </Definition>

      <Theorem title="Theorem 4.2.36 (Connectivity and Operations)">
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Subdividing an edge preserves <InlineMath math="k" />-connectivity for{' '}
            <InlineMath math="k \geq 2" />.
          </li>
          <li>
            Contracting an edge in a <InlineMath math="k" />-connected graph yields a
            graph that is at least <InlineMath math="(k-1)" />-connected.
          </li>
        </ol>
      </Theorem>

      <Theorem title="Tutte's Wheel Theorem (Theorem 4.2.37)">
        <p>
          The only 3-connected graphs that have no single edge whose contraction leaves
          a 3-connected graph are the wheels <InlineMath math="W_n" /> for{' '}
          <InlineMath math="n \geq 3" />.
        </p>
      </Theorem>

      <h2>Disjoint Spanning Trees</h2>

      <Theorem title="Theorem 4.2.25 (Edge-Disjoint Spanning Trees)">
        <p>
          A graph <InlineMath math="G" /> has <InlineMath math="k" /> edge-disjoint
          spanning trees if and only if for every partition{' '}
          <InlineMath math="V_1, \ldots, V_r" /> of <InlineMath math="V(G)" />:
        </p>
        <MathBlock math="e(V_1, \ldots, V_r) \geq k(r - 1)" />
        <p className="mt-2">
          where <InlineMath math="e(V_1, \ldots, V_r)" /> counts edges between different
          parts.
        </p>
      </Theorem>

      <Theorem title="Corollary 4.2.26">
        <p>
          A <InlineMath math="2k" />-edge-connected graph has <InlineMath math="k" />{' '}
          edge-disjoint spanning trees.
        </p>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>2-Connected:</strong> No cut-vertex; every pair of vertices lies on a
          cycle; has an ear decomposition.
        </li>
        <li>
          <strong>Ear Decomposition:</strong> Build 2-connected graphs by starting with
          a cycle and adding paths.
        </li>
        <li>
          <strong>Menger's Theorem:</strong> Min vertex cut = Max internally disjoint
          paths. Min edge cut = Max edge-disjoint paths.
        </li>
        <li>
          <strong>Global Version:</strong> <InlineMath math="G" /> is{' '}
          <InlineMath math="k" />-connected iff every vertex pair has{' '}
          <InlineMath math="k" /> internally disjoint paths.
        </li>
        <li>
          <strong>Harary Graphs:</strong> Achieve minimum edges for{' '}
          <InlineMath math="k" />-connectivity.
        </li>
        <li>
          <strong>Operations:</strong> Subdivision preserves connectivity; contraction
          may decrease it by 1.
        </li>
      </ul>
    </LessonLayout>
  );
}
