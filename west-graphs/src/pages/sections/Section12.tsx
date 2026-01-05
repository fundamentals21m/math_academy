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
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>(1)⇒(2):</strong> Suppose <InlineMath math="G" /> is 2-connected and
              let <InlineMath math="u, v \in V(G)" />. If <InlineMath math="u" /> and{' '}
              <InlineMath math="v" /> are adjacent, one path is the edge{' '}
              <InlineMath math="uv" />; since <InlineMath math="G - uv" /> is connected
              (2-connectivity means no cut-edge), there's another{' '}
              <InlineMath math="u, v" />-path avoiding <InlineMath math="uv" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="u, v" /> are non-adjacent, for any vertex{' '}
              <InlineMath math="w \neq u, v" />, <InlineMath math="G - w" /> is connected,
              so there's a <InlineMath math="u, v" />-path avoiding <InlineMath math="w" />.
              We can construct two internally disjoint paths by a more careful argument
              using Menger's theorem (proven later) or induction on{' '}
              <InlineMath math="d(u, v)" />.
            </p>
            <p className="mt-2">
              <strong>(2)⇒(3):</strong> Two internally disjoint{' '}
              <InlineMath math="u, v" />-paths together form a cycle containing both{' '}
              <InlineMath math="u" /> and <InlineMath math="v" />.
            </p>
            <p className="mt-2">
              <strong>(3)⇒(4):</strong> Given edges <InlineMath math="e = ab" /> and{' '}
              <InlineMath math="f = cd" />, there's a cycle <InlineMath math="C" />{' '}
              containing <InlineMath math="a" /> and <InlineMath math="c" />. If{' '}
              <InlineMath math="e" /> or <InlineMath math="f" /> is on <InlineMath math="C" />,
              we can modify to include both. Otherwise, paths from{' '}
              <InlineMath math="b" /> to <InlineMath math="C" /> and from{' '}
              <InlineMath math="d" /> to <InlineMath math="C" /> allow constructing a cycle
              through both edges.
            </p>
            <p className="mt-2">
              <strong>(4)⇒(1):</strong> Suppose <InlineMath math="v" /> is a cut-vertex.
              Let <InlineMath math="e" /> and <InlineMath math="f" /> be edges in different
              components of <InlineMath math="G - v" />. Any cycle through both must pass
              through <InlineMath math="v" /> twice—impossible. So there's no cut-vertex,
              and since <InlineMath math="\delta(G) \geq 1" /> (so connected),{' '}
              <InlineMath math="G" /> is 2-connected.
            </p>
          </div>
        </details>
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
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="\kappa(x, y)" /> denote the minimum{' '}
              <InlineMath math="x, y" />-vertex cut and <InlineMath math="\lambda(x, y)" />{' '}
              the maximum number of internally disjoint <InlineMath math="x, y" />-paths.
            </p>
            <p className="mt-2">
              <strong>
                <InlineMath math="\lambda(x, y) \leq \kappa(x, y)" />:
              </strong>{' '}
              Any <InlineMath math="x, y" />-vertex cut must contain at least one internal
              vertex from each of the <InlineMath math="\lambda(x, y)" /> internally
              disjoint paths.
            </p>
            <p className="mt-2">
              <strong>
                <InlineMath math="\lambda(x, y) \geq \kappa(x, y)" />:
              </strong>{' '}
              We prove by induction on <InlineMath math="|E(G)|" />.
            </p>
            <p className="mt-2">
              <em>Base case:</em> If <InlineMath math="|E(G)| = 0" />, then{' '}
              <InlineMath math="\kappa(x, y) = 0 = \lambda(x, y)" />.
            </p>
            <p className="mt-2">
              <em>Inductive step:</em> Let <InlineMath math="S" /> be a minimum{' '}
              <InlineMath math="x, y" />-vertex cut with{' '}
              <InlineMath math="|S| = \kappa(x, y) = k" />.
            </p>
            <p className="mt-2">
              <em>Case 1:</em> Every minimum <InlineMath math="x, y" />-cut consists
              entirely of neighbors of <InlineMath math="x" /> or entirely of neighbors
              of <InlineMath math="y" />. Then <InlineMath math="x" /> has{' '}
              <InlineMath math="k" /> neighbors, and we can find <InlineMath math="k" />{' '}
              paths of length 1 or 2.
            </p>
            <p className="mt-2">
              <em>Case 2:</em> Some minimum cut <InlineMath math="S" /> contains{' '}
              <InlineMath math="s \notin N(x) \cup N(y)" />. Let{' '}
              <InlineMath math="G' = G - s" />. In <InlineMath math="G'" />, the minimum{' '}
              <InlineMath math="x, y" />-cut has size <InlineMath math="k - 1" />. By
              induction, <InlineMath math="G'" /> has <InlineMath math="k - 1" />{' '}
              internally disjoint <InlineMath math="x, y" />-paths.
            </p>
            <p className="mt-2">
              We can extend these to <InlineMath math="k" /> paths in{' '}
              <InlineMath math="G" /> by routing one path through <InlineMath math="s" />,
              using the connectivity provided by <InlineMath math="s" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Menger's Theorem - Edge Version (Theorem 4.2.19)">
        <p>
          For any vertices <InlineMath math="x" /> and <InlineMath math="y" /> in graph{' '}
          <InlineMath math="G" />, the minimum size of an{' '}
          <InlineMath math="x, y" />-edge cut equals the maximum number of pairwise
          edge-disjoint <InlineMath math="x, y" />-paths.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              This follows from the vertex version by constructing the{' '}
              <strong>line graph</strong> transformation.
            </p>
            <p className="mt-2">
              <strong>Construction:</strong> From <InlineMath math="G" />, build graph{' '}
              <InlineMath math="G'" /> by replacing each edge <InlineMath math="e" /> with
              two vertices <InlineMath math="e^+, e^-" /> connected by an edge. For each
              vertex <InlineMath math="v" /> in <InlineMath math="G" /> with incident
              edges <InlineMath math="e_1, \ldots, e_d" />, add a new vertex{' '}
              <InlineMath math="v'" /> adjacent to <InlineMath math="e_1^-, \ldots, e_d^-" />.
            </p>
            <p className="mt-2">
              <strong>Correspondence:</strong> Edge-disjoint{' '}
              <InlineMath math="x, y" />-paths in <InlineMath math="G" /> correspond to
              internally vertex-disjoint <InlineMath math="x', y'" />-paths in{' '}
              <InlineMath math="G'" />. An <InlineMath math="x, y" />-edge cut in{' '}
              <InlineMath math="G" /> corresponds to an <InlineMath math="x', y'" />-vertex
              cut in <InlineMath math="G'" /> (the vertices <InlineMath math="e^+, e^-" />{' '}
              for cut edges).
            </p>
            <p className="mt-2">
              Applying the vertex version of Menger's Theorem to <InlineMath math="G'" />{' '}
              gives the edge version for <InlineMath math="G" />.
            </p>
          </div>
        </details>
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
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>(⇒):</strong> Suppose <InlineMath math="G" /> is{' '}
              <InlineMath math="k" />-connected. For any non-adjacent{' '}
              <InlineMath math="x, y" />, the minimum <InlineMath math="x, y" />-vertex cut
              has size at least <InlineMath math="k" /> (else <InlineMath math="G" />{' '}
              wouldn't be <InlineMath math="k" />-connected). By Menger's Theorem, there
              are <InlineMath math="k" /> internally disjoint <InlineMath math="x, y" />-paths.
            </p>
            <p className="mt-2">
              If <InlineMath math="x, y" /> are adjacent, consider{' '}
              <InlineMath math="G' = G - xy" />. We have{' '}
              <InlineMath math="\kappa(G') \geq k - 1" />, so by Menger there are{' '}
              <InlineMath math="k - 1" /> internally disjoint <InlineMath math="x, y" />-paths
              in <InlineMath math="G'" />. Adding the edge <InlineMath math="xy" /> gives{' '}
              <InlineMath math="k" /> such paths in <InlineMath math="G" />.
            </p>
            <p className="mt-2">
              <strong>(⇐):</strong> Suppose every pair has <InlineMath math="k" />{' '}
              internally disjoint paths. To show <InlineMath math="\kappa(G) \geq k" />,
              note that any vertex cut <InlineMath math="S" /> separating{' '}
              <InlineMath math="x" /> from <InlineMath math="y" /> must have{' '}
              <InlineMath math="|S| \geq k" /> (one vertex from each of the{' '}
              <InlineMath math="k" /> paths). Since this holds for all pairs,{' '}
              <InlineMath math="\kappa(G) \geq k" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Edge Version of Global Menger (Theorem 4.2.22)">
        <p>
          A graph <InlineMath math="G" /> is <InlineMath math="k" />-edge-connected if
          and only if for every pair <InlineMath math="x, y \in V(G)" />, there exist{' '}
          <InlineMath math="k" /> pairwise edge-disjoint{' '}
          <InlineMath math="x, y" />-paths.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>(⇒):</strong> If <InlineMath math="G" /> is{' '}
              <InlineMath math="k" />-edge-connected, then for any{' '}
              <InlineMath math="x, y" />, the minimum <InlineMath math="x, y" />-edge cut
              has size at least <InlineMath math="k" />. By Menger's edge version, there
              exist <InlineMath math="k" /> edge-disjoint <InlineMath math="x, y" />-paths.
            </p>
            <p className="mt-2">
              <strong>(⇐):</strong> Suppose every pair has <InlineMath math="k" />{' '}
              edge-disjoint paths. Any edge cut <InlineMath math="F" /> separating{' '}
              <InlineMath math="x" /> from <InlineMath math="y" /> must contain at least
              one edge from each of the <InlineMath math="k" /> paths. Thus{' '}
              <InlineMath math="|F| \geq k" /> for all <InlineMath math="x, y" />, so{' '}
              <InlineMath math="\kappa'(G) \geq k" />.
            </p>
          </div>
        </details>
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
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              We prove by induction on <InlineMath math="|U|" />.
            </p>
            <p className="mt-2">
              <strong>Base case (<InlineMath math="|U| = k" />):</strong> Add a new vertex{' '}
              <InlineMath math="y" /> adjacent to all of <InlineMath math="U" /> (but not to{' '}
              <InlineMath math="x" />). The resulting graph <InlineMath math="G'" /> is still{' '}
              <InlineMath math="k" />-connected (removing any <InlineMath math="k - 1" />{' '}
              vertices still leaves <InlineMath math="y" /> connected to remaining{' '}
              <InlineMath math="U" />-vertices and hence to the rest of{' '}
              <InlineMath math="G" />).
            </p>
            <p className="mt-2">
              By Global Menger, there exist <InlineMath math="k" /> internally disjoint{' '}
              <InlineMath math="x, y" />-paths in <InlineMath math="G'" />. Each such path
              ends at some <InlineMath math="u \in U" /> (before reaching{' '}
              <InlineMath math="y" />). These form an <InlineMath math="x, U" />-fan of size{' '}
              <InlineMath math="k" />.
            </p>
            <p className="mt-2">
              <strong>Inductive step (<InlineMath math="|U| > k" />):</strong> Pick any{' '}
              <InlineMath math="u \in U" /> and apply induction to{' '}
              <InlineMath math="U' = U - \{'{'}u{'}'}" />. This gives an{' '}
              <InlineMath math="x, U'" />-fan of size <InlineMath math="k" />. If this fan
              already reaches <InlineMath math="u" />, we're done. Otherwise, the fan
              endpoints form a <InlineMath math="k" />-subset of{' '}
              <InlineMath math="U - \{'{'}u{'}'}" />, and by the base case we can construct
              a fan reaching <InlineMath math="u" /> or any other <InlineMath math="k" />{' '}
              vertices of <InlineMath math="U" />.
            </p>
          </div>
        </details>
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
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="N_G(y) = \{'{'}u_1, \ldots, u_m{'}'}" /> where{' '}
              <InlineMath math="m \geq k" />. We verify{' '}
              <InlineMath math="\kappa(G') \geq k" /> using Global Menger's Theorem.
            </p>
            <p className="mt-2">
              <strong>Case 1:</strong> Paths between vertices <InlineMath math="x, z" />{' '}
              both in <InlineMath math="V(G)" />. Since <InlineMath math="G" /> is{' '}
              <InlineMath math="k" />-connected, there exist <InlineMath math="k" />{' '}
              internally disjoint <InlineMath math="x, z" />-paths in{' '}
              <InlineMath math="G \subseteq G'" />.
            </p>
            <p className="mt-2">
              <strong>Case 2:</strong> Paths from <InlineMath math="y" /> to some{' '}
              <InlineMath math="x \in V(G)" />. By the Fan Lemma, <InlineMath math="G" />{' '}
              has an <InlineMath math="x, N_G(y)" />-fan of size <InlineMath math="k" />{' '}
              (since <InlineMath math="|N_G(y)| \geq k" />).
            </p>
            <p className="mt-2">
              Let these be paths <InlineMath math="P_1, \ldots, P_k" /> from{' '}
              <InlineMath math="x" /> to distinct{' '}
              <InlineMath math="u_{i_1}, \ldots, u_{i_k} \in N_G(y)" />. Extending each{' '}
              <InlineMath math="P_j" /> by the edge <InlineMath math="u_{i_j}y" /> gives{' '}
              <InlineMath math="k" /> internally disjoint <InlineMath math="x, y" />-paths
              in <InlineMath math="G'" />.
            </p>
          </div>
        </details>
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
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Lower bound:</strong> A <InlineMath math="k" />-connected graph has
              minimum degree at least <InlineMath math="k" /> (else a vertex of degree{' '}
              <InlineMath math="&lt; k" /> would disconnect when its neighbors are removed).
              Thus <InlineMath math="2|E| = \sum d(v) \geq kn" />, giving{' '}
              <InlineMath math="|E| \geq \lceil kn/2 \rceil" />.
            </p>
            <p className="mt-2">
              <strong>Upper bound (Harary construction):</strong> Place vertices{' '}
              <InlineMath math="0, 1, \ldots, n-1" /> on a circle. Connect each vertex{' '}
              <InlineMath math="i" /> to vertices{' '}
              <InlineMath math="i \pm 1, i \pm 2, \ldots, i \pm \lfloor k/2 \rfloor" />{' '}
              (mod <InlineMath math="n" />).
            </p>
            <p className="mt-2">
              If <InlineMath math="k" /> is even, this gives{' '}
              <InlineMath math="kn/2" /> edges and is <InlineMath math="k" />-connected.
            </p>
            <p className="mt-2">
              If <InlineMath math="k" /> is odd and <InlineMath math="n" /> is even, add
              diametric edges <InlineMath math="i \sim i + n/2" /> for each{' '}
              <InlineMath math="i < n/2" />. This adds <InlineMath math="n/2" /> edges
              for total <InlineMath math="(k-1)n/2 + n/2 = kn/2" />.
            </p>
            <p className="mt-2">
              If both <InlineMath math="k" /> and <InlineMath math="n" /> are odd, add edges{' '}
              <InlineMath math="i \sim i + (n+1)/2" /> for <InlineMath math="i = 0, \ldots, (n-1)/2" />.
              This adds <InlineMath math="(n+1)/2" /> edges for total{' '}
              <InlineMath math="\lceil kn/2 \rceil" />.
            </p>
            <p className="mt-2">
              <strong>Connectivity verification:</strong> Any vertex cut{' '}
              <InlineMath math="S" /> with <InlineMath math="|S| &lt; k" /> fails to
              disconnect because there are <InlineMath math="k" /> edge-disjoint paths
              between any pair using the circular structure.
            </p>
          </div>
        </details>
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
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Part 1 (Subdivision):</strong> Let <InlineMath math="G'" /> be
              obtained from <InlineMath math="k" />-connected <InlineMath math="G" /> by
              subdividing edge <InlineMath math="uv" /> with new vertex{' '}
              <InlineMath math="w" />.
            </p>
            <p className="mt-2">
              Consider any <InlineMath math="x, y \in V(G')" />. If both are in{' '}
              <InlineMath math="V(G)" />, there are <InlineMath math="k" /> internally
              disjoint <InlineMath math="x, y" />-paths in <InlineMath math="G" />. Any
              path using edge <InlineMath math="uv" /> can route through{' '}
              <InlineMath math="w" /> instead.
            </p>
            <p className="mt-2">
              If <InlineMath math="x = w" />, we find <InlineMath math="k" /> internally
              disjoint <InlineMath math="u, y" />-paths in <InlineMath math="G" /> and
              extend one through <InlineMath math="w" />. Since <InlineMath math="k \geq 2" />,
              at least one path doesn't use <InlineMath math="v" />, so we can extend
              another through <InlineMath math="v" /> to <InlineMath math="w" />.
            </p>
            <p className="mt-2">
              <strong>Part 2 (Contraction):</strong> Let <InlineMath math="G' = G/uv" />,
              contracting edge <InlineMath math="uv" /> to vertex <InlineMath math="w" />.
              Let <InlineMath math="S" /> be a minimum vertex cut in{' '}
              <InlineMath math="G'" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="w \notin S" />, then <InlineMath math="S" /> is also a
              vertex cut in <InlineMath math="G" />, so{' '}
              <InlineMath math="|S| \geq k > k - 1" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="w \in S" />, then{' '}
              <InlineMath math="(S - \{'{'}w{'}'}) \cup \{'{'}u, v{'}'}" /> is a vertex cut
              in <InlineMath math="G" />, so{' '}
              <InlineMath math="|S| - 1 + 2 \geq k" />, giving{' '}
              <InlineMath math="|S| \geq k - 1" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Tutte's Wheel Theorem (Theorem 4.2.37)">
        <p>
          The only 3-connected graphs that have no single edge whose contraction leaves
          a 3-connected graph are the wheels <InlineMath math="W_n" /> for{' '}
          <InlineMath math="n \geq 3" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Wheels have no contractible edge:</strong> In wheel{' '}
              <InlineMath math="W_n" /> (hub <InlineMath math="h" /> plus rim{' '}
              <InlineMath math="C_n" />), contracting a rim edge creates a vertex of
              degree 4 that becomes a cut-vertex with two neighbors of degree 2.
              Contracting a spoke merges <InlineMath math="h" /> with a rim vertex,
              creating a separating pair.
            </p>
            <p className="mt-2">
              <strong>Non-wheels have a contractible edge:</strong> Let{' '}
              <InlineMath math="G" /> be 3-connected but not a wheel. We show some edge
              can be contracted while preserving 3-connectivity.
            </p>
            <p className="mt-2">
              By Theorem 4.2.36, contracting any edge <InlineMath math="e" /> gives a
              2-connected graph. If <InlineMath math="G/e" /> is not 3-connected,
              there's a 2-cut <InlineMath math="\{'{'}w, z{'}'}" /> in{' '}
              <InlineMath math="G/e" />, where <InlineMath math="w" /> is the
              contracted vertex.
            </p>
            <p className="mt-2">
              Analysis shows: if every edge contraction creates such a 2-cut, then{' '}
              <InlineMath math="G" /> has a special structure—a "hub" vertex adjacent to
              all others, with remaining vertices forming a cycle. But this is exactly a
              wheel.
            </p>
            <p className="mt-2">
              The full proof uses careful case analysis on the structure of the 2-cuts
              that would arise from contractions, showing they force the wheel
              structure.
            </p>
          </div>
        </details>
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
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Necessity:</strong> Each spanning tree needs at least{' '}
              <InlineMath math="r - 1" /> edges between the <InlineMath math="r" /> parts
              (to connect them). With <InlineMath math="k" /> edge-disjoint trees, we
              need at least <InlineMath math="k(r - 1)" /> such edges.
            </p>
            <p className="mt-2">
              <strong>Sufficiency:</strong> This is the harder direction, due to Nash-Williams
              (1961) and Tutte (1961). The proof uses a matroid-theoretic approach or
              direct construction.
            </p>
            <p className="mt-2">
              <strong>Key idea:</strong> Define a "forest cover" as a collection of{' '}
              <InlineMath math="k" /> forests that partition <InlineMath math="E(G)" />.
              We show that if the condition holds, we can find a forest cover where each
              forest is a spanning tree.
            </p>
            <p className="mt-2">
              The condition <InlineMath math="e(V_1, \ldots, V_r) \geq k(r-1)" /> ensures
              that when contracting each <InlineMath math="V_i" /> to a single vertex, the
              resulting multigraph has enough edges to support <InlineMath math="k" />{' '}
              edge-disjoint spanning trees (which lift back to the original graph).
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Corollary 4.2.26">
        <p>
          A <InlineMath math="2k" />-edge-connected graph has <InlineMath math="k" />{' '}
          edge-disjoint spanning trees.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="G" /> be <InlineMath math="2k" />-edge-connected.
              For any partition <InlineMath math="V_1, \ldots, V_r" /> of{' '}
              <InlineMath math="V(G)" />, the edges between different parts form an edge
              cut separating <InlineMath math="V_1" /> from the rest.
            </p>
            <p className="mt-2">
              By <InlineMath math="2k" />-edge-connectivity, each "boundary" of a part
              has at least <InlineMath math="2k" /> edges crossing it. Summing over all
              parts and accounting for each edge being counted twice (once from each
              side):
            </p>
            <MathBlock math="2 \cdot e(V_1, \ldots, V_r) \geq 2k(r - 1)" />
            <p className="mt-2">
              (The factor <InlineMath math="r - 1" /> comes from considering a spanning
              tree of the "contracted" graph: it has <InlineMath math="r - 1" /> edges,
              and each such edge corresponds to at least <InlineMath math="2k" />{' '}
              edges in <InlineMath math="G" /> when we account for connectivity between
              adjacent parts.)
            </p>
            <p className="mt-2">
              Thus <InlineMath math="e(V_1, \ldots, V_r) \geq k(r - 1)" />, and by
              Theorem 4.2.25, <InlineMath math="G" /> has <InlineMath math="k" />{' '}
              edge-disjoint spanning trees.
            </p>
          </div>
        </details>
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
