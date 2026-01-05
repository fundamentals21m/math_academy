import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { TreeVisualizer } from '@/components/visualizations';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <p>
        The word "tree" suggests branching out from a root and never completing a cycle.
        Trees as graphs have many applications, especially in data storage, searching, and
        communication networks. In this section, we develop the fundamental properties of
        trees and introduce the important concept of distance in graphs.
      </p>

      <h2>Interactive Tree Visualizer</h2>

      <p>
        Use the interactive tool below to explore tree properties. Select a root vertex to see
        the hierarchical structure, compute distances, and find the tree's center and radius.
      </p>

      <TreeVisualizer className="my-8" />

      <h2>Basic Definitions</h2>

      <Definition title="Trees and Forests">
        <p>
          A graph with no cycle is <strong>acyclic</strong>. A <strong>forest</strong> is
          an acyclic graph. A <strong>tree</strong> is a connected acyclic graph.
        </p>
        <p>
          A <strong>leaf</strong> (or <strong>pendant vertex</strong>) is a vertex of
          degree 1.
        </p>
        <p>
          A <strong>spanning subgraph</strong> of <InlineMath math="G" /> is a subgraph
          with vertex set <InlineMath math="V(G)" />. A <strong>spanning tree</strong> is
          a spanning subgraph that is a tree.
        </p>
      </Definition>

      <Example title="Trees and Forests">
        <p>
          A tree is a connected forest, and every component of a forest is a tree. Since
          a graph with no cycles has no odd cycles, trees and forests are bipartite.
        </p>
        <p>
          <strong>Paths are trees:</strong> A tree is a path if and only if its maximum
          degree is 2.
        </p>
        <p>
          <strong>Stars:</strong> A <em>star</em> is a tree consisting of one vertex
          adjacent to all the others. The <InlineMath math="n" />-vertex star is the
          biclique <InlineMath math="K_{1,n-1}" />.
        </p>
        <p>
          A graph that is a tree has exactly one spanning tree: the full graph itself.
          Note that a spanning subgraph of <InlineMath math="G" /> need not be connected,
          and a connected subgraph of <InlineMath math="G" /> need not be spanning.
        </p>
      </Example>

      <h2>Properties of Trees</h2>

      <p>
        Trees have many equivalent characterizations, any of which could be taken as the
        definition. Such characterizations are useful because we need only verify that a
        graph satisfies any one of them to prove that it is a tree, after which we can use
        all the other properties.
      </p>

      <Theorem title="Lemma (Leaves in Trees)">
        <p>
          Every tree with at least two vertices has at least two leaves. Deleting a leaf
          from an <InlineMath math="n" />-vertex tree produces a tree with{' '}
          <InlineMath math="n-1" /> vertices.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              A connected graph with at least two vertices has an edge. In an acyclic
              graph, an endpoint of a maximal nontrivial path has no neighbor other than
              its neighbor on the path. Hence the endpoints of such a path are leaves.
            </p>
            <p className="mt-2">
              Let <InlineMath math="v" /> be a leaf of a tree <InlineMath math="G" />,
              and let <InlineMath math="G' = G - v" />. A vertex of degree 1 belongs to
              no path connecting two other vertices. Therefore, for{' '}
              <InlineMath math="u, w \in V(G')" />, every <InlineMath math="u,w" />-path
              in <InlineMath math="G" /> is also in <InlineMath math="G'" />. Hence{' '}
              <InlineMath math="G'" /> is connected. Since deleting a vertex cannot
              create a cycle, <InlineMath math="G'" /> is also acyclic. Thus{' '}
              <InlineMath math="G'" /> is a tree with <InlineMath math="n-1" /> vertices.
            </p>
          </div>
        </details>
      </Theorem>

      <p>
        This lemma implies that every tree with more than one vertex arises from a smaller
        tree by adding a vertex of degree 1. This rescues proofs from the induction trap:
        growing an <InlineMath math="(n+1)" />-vertex tree from an arbitrary{' '}
        <InlineMath math="n" />-vertex tree by adding a new neighbor at an arbitrary old
        vertex generates all trees with <InlineMath math="n+1" /> vertices.
      </p>

      <Theorem title="Theorem 2.1.4 (Characterizations of Trees)">
        <p>
          For an <InlineMath math="n" />-vertex graph <InlineMath math="G" /> (with{' '}
          <InlineMath math="n \geq 1" />), the following are equivalent and characterize
          the trees with <InlineMath math="n" /> vertices:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>
            <InlineMath math="G" /> is connected and has no cycles.
          </li>
          <li>
            <InlineMath math="G" /> is connected and has <InlineMath math="n-1" /> edges.
          </li>
          <li>
            <InlineMath math="G" /> has <InlineMath math="n-1" /> edges and no cycles.
          </li>
          <li>
            For <InlineMath math="u, v \in V(G)" />, <InlineMath math="G" /> has exactly
            one <InlineMath math="u,v" />-path.
          </li>
        </ol>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              We demonstrate equivalence by proving that any two of {'{'}connected,
              acyclic, <InlineMath math="n-1" /> edges{'}'} together imply the third.
            </p>
            <p className="mt-2">
              <strong>(A) ⇒ (B), (C):</strong> Use induction on{' '}
              <InlineMath math="n" />. For <InlineMath math="n = 1" />, an acyclic
              1-vertex graph has no edge. For <InlineMath math="n > 1" />, by the lemma,
              deleting a leaf gives a smaller tree with <InlineMath math="n-2" /> edges,
              so <InlineMath math="e(G) = n-1" />.
            </p>
            <p className="mt-2">
              <strong>(B) ⇒ (A), (C):</strong> Delete edges from cycles one by one until
              acyclic. Since no edge of a cycle is a cut-edge, connectivity is preserved.
              Since <InlineMath math="e(G) = n-1" />, no edges were deleted.
            </p>
            <p className="mt-2">
              <strong>(C) ⇒ (A), (B):</strong> Let{' '}
              <InlineMath math="G_1, \ldots, G_k" /> be the components. Each satisfies
              (A), so <InlineMath math="e(G_i) = n(G_i) - 1" />. Summing gives{' '}
              <InlineMath math="e(G) = n - k" />. Since{' '}
              <InlineMath math="e(G) = n - 1" />, we have <InlineMath math="k = 1" />.
            </p>
            <p className="mt-2">
              <strong>(A) ⇒ (D):</strong> Connectivity gives paths; acyclicity ensures
              uniqueness (otherwise two paths form a cycle).
            </p>
            <p className="mt-2">
              <strong>(D) ⇒ (A):</strong> Unique paths imply connectivity. If{' '}
              <InlineMath math="G" /> has a cycle, vertices on it have multiple paths.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Corollary 2.1.5 (Properties of Trees)">
        <ol className="list-decimal list-inside space-y-1">
          <li>Every edge of a tree is a cut-edge.</li>
          <li>Adding one edge to a tree forms exactly one cycle.</li>
          <li>Every connected graph contains a spanning tree.</li>
        </ol>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              (a) A tree has no cycles, so every edge is a cut-edge.
            </p>
            <p className="mt-2">
              (b) A tree has a unique path linking each pair of vertices, so joining two
              vertices by an edge creates exactly one cycle.
            </p>
            <p className="mt-2">
              (c) Iteratively deleting edges from cycles in a connected graph yields a
              connected acyclic subgraph (a spanning tree).
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Proposition 2.1.6 (Edge Exchange in Spanning Trees)">
        <p>
          If <InlineMath math="T" /> and <InlineMath math="T'" /> are spanning trees of a
          connected graph <InlineMath math="G" /> and{' '}
          <InlineMath math="e \in E(T) - E(T')" />, then there is an edge{' '}
          <InlineMath math="e' \in E(T') - E(T)" /> such that{' '}
          <InlineMath math="T - e + e'" /> is a spanning tree of <InlineMath math="G" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Every edge of <InlineMath math="T" /> is a cut-edge. Let{' '}
              <InlineMath math="U" /> and <InlineMath math="U'" /> be the two components
              of <InlineMath math="T - e" />. Since <InlineMath math="T'" /> is
              connected, <InlineMath math="T'" /> has an edge <InlineMath math="e'" />{' '}
              with endpoints in <InlineMath math="U" /> and <InlineMath math="U'" />. Now{' '}
              <InlineMath math="T - e + e'" /> is connected, has{' '}
              <InlineMath math="n(G) - 1" /> edges, and is a spanning tree of{' '}
              <InlineMath math="G" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Proposition 2.1.7 (Reverse Edge Exchange)">
        <p>
          If <InlineMath math="T" /> and <InlineMath math="T'" /> are spanning trees of a
          connected graph <InlineMath math="G" /> and{' '}
          <InlineMath math="e \in E(T) - E(T')" />, then there is an edge{' '}
          <InlineMath math="e' \in E(T') - E(T)" /> such that{' '}
          <InlineMath math="T' + e - e'" /> is a spanning tree of <InlineMath math="G" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              The graph <InlineMath math="T' + e" /> contains a unique cycle{' '}
              <InlineMath math="C" />. Since <InlineMath math="T" /> is acyclic, there is
              an edge <InlineMath math="e' \in E(C) - E(T)" />. Deleting{' '}
              <InlineMath math="e'" /> breaks the only cycle in{' '}
              <InlineMath math="T' + e" />. Now <InlineMath math="T' + e - e'" /> is
              connected and acyclic and is a spanning tree of <InlineMath math="G" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Proposition 2.1.8 (Trees as Subgraphs)">
        <p>
          If <InlineMath math="T" /> is a tree with <InlineMath math="k" /> edges and{' '}
          <InlineMath math="G" /> is a simple graph with{' '}
          <InlineMath math="\delta(G) \geq k" />, then <InlineMath math="T" /> is a
          subgraph of <InlineMath math="G" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Use induction on <InlineMath math="k" />. For <InlineMath math="k = 0" />,
              every simple graph contains <InlineMath math="K_1" />.
            </p>
            <p className="mt-2">
              For <InlineMath math="k > 0" />, choose a leaf <InlineMath math="v" /> in{' '}
              <InlineMath math="T" /> with neighbor <InlineMath math="u" />. Consider{' '}
              <InlineMath math="T' = T - v" />. By the induction hypothesis,{' '}
              <InlineMath math="G" /> contains <InlineMath math="T'" /> as a subgraph
              since <InlineMath math="\delta(G) \geq k > k - 1" />.
            </p>
            <p className="mt-2">
              Let <InlineMath math="x" /> be the vertex in this copy of{' '}
              <InlineMath math="T'" /> corresponding to <InlineMath math="u" />. Because{' '}
              <InlineMath math="T'" /> has only <InlineMath math="k - 1" /> vertices
              other than <InlineMath math="u" /> and{' '}
              <InlineMath math="d_G(x) \geq k" />, <InlineMath math="x" /> has a neighbor{' '}
              <InlineMath math="y" /> in <InlineMath math="G" /> not in this copy. Adding
              edge <InlineMath math="xy" /> expands the copy to include{' '}
              <InlineMath math="T" />.
            </p>
          </div>
        </details>
      </Theorem>

      <p>
        The inequality in Proposition 2.1.8 is sharp: the complete graph{' '}
        <InlineMath math="K_k" /> has minimum degree <InlineMath math="k - 1" />, but it
        contains no tree with <InlineMath math="k" /> edges.
      </p>

      <h2>Distance in Trees and Graphs</h2>

      <p>
        When using graphs to model communication networks, we want vertices to be close
        together to avoid communication delays. We measure distance using lengths of paths.
      </p>

      <Definition title="Distance and Diameter">
        <p>
          If <InlineMath math="G" /> has a <InlineMath math="u,v" />-path, then the{' '}
          <strong>distance</strong> from <InlineMath math="u" /> to{' '}
          <InlineMath math="v" />, written <InlineMath math="d_G(u,v)" /> or simply{' '}
          <InlineMath math="d(u,v)" />, is the least length of a{' '}
          <InlineMath math="u,v" />-path. If <InlineMath math="G" /> has no such path,
          then <InlineMath math="d(u,v) = \infty" />.
        </p>
        <p className="mt-2">
          The <strong>diameter</strong> of <InlineMath math="G" />, written{' '}
          <InlineMath math="\text{diam } G" />, is:
        </p>
        <MathBlock math="\text{diam } G = \max_{u,v \in V(G)} d(u,v)" />
      </Definition>

      <Definition title="Eccentricity and Radius">
        <p>
          The <strong>eccentricity</strong> of a vertex <InlineMath math="u" />, written{' '}
          <InlineMath math="\varepsilon(u)" />, is:
        </p>
        <MathBlock math="\varepsilon(u) = \max_{v \in V(G)} d(u,v)" />
        <p>
          The <strong>radius</strong> of a graph <InlineMath math="G" />, written{' '}
          <InlineMath math="\text{rad } G" />, is:
        </p>
        <MathBlock math="\text{rad } G = \min_{u \in V(G)} \varepsilon(u)" />
        <p>
          The diameter equals the maximum of the vertex eccentricities.
        </p>
      </Definition>

      <Example title="Distance in Special Graphs">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Petersen graph:</strong> Has diameter 2, since nonadjacent vertices
            have a common neighbor.
          </li>
          <li>
            <strong>Hypercube <InlineMath math="Q_k" />:</strong> Has diameter{' '}
            <InlineMath math="k" />, since it takes <InlineMath math="k" /> steps to
            change all <InlineMath math="k" /> coordinates.
          </li>
          <li>
            <strong>Cycle <InlineMath math="C_n" />:</strong> Has diameter{' '}
            <InlineMath math="\lfloor n/2 \rfloor" />.
          </li>
          <li>
            <strong>Star <InlineMath math="K_{1,n-1}" />:</strong> For{' '}
            <InlineMath math="n \geq 3" />, has diameter 2 and radius 1 (minimum diameter
            among <InlineMath math="n" />-vertex trees).
          </li>
          <li>
            <strong>Path <InlineMath math="P_n" />:</strong> Has diameter{' '}
            <InlineMath math="n - 1" /> and radius{' '}
            <InlineMath math="\lceil (n-1)/2 \rceil" /> (maximum diameter among{' '}
            <InlineMath math="n" />-vertex trees).
          </li>
        </ul>
        <p className="mt-2">
          Every path in a tree is the shortest (the only!) path between its endpoints, so
          the diameter of a tree is the length of its longest path.
        </p>
      </Example>

      <Theorem title="Theorem 2.1.11 (Diameter of Complement)">
        <p>
          If <InlineMath math="G" /> is a simple graph, then:
        </p>
        <MathBlock math="\text{diam } G \geq 3 \implies \text{diam } \overline{G} \leq 3" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              When <InlineMath math="\text{diam } G \geq 3" />, there exist nonadjacent
              vertices <InlineMath math="u, v \in V(G)" /> with no common neighbor. Hence
              every <InlineMath math="x \in V(G) - \{u, v\}" /> has at least one of{' '}
              <InlineMath math="\{u, v\}" /> as a nonneighbor in <InlineMath math="G" />.
            </p>
            <p className="mt-2">
              This makes <InlineMath math="x" /> adjacent in{' '}
              <InlineMath math="\overline{G}" /> to at least one of{' '}
              <InlineMath math="\{u, v\}" />. Since also{' '}
              <InlineMath math="uv \in E(\overline{G})" />, for every pair{' '}
              <InlineMath math="x, y" /> there is an <InlineMath math="x,y" />-path of
              length at most 3 in <InlineMath math="\overline{G}" /> through{' '}
              <InlineMath math="\{u, v\}" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Definition title="Center of a Graph">
        <p>
          The <strong>center</strong> of a graph <InlineMath math="G" /> is the subgraph
          induced by the vertices of minimum eccentricity.
        </p>
        <p className="mt-2">
          The center equals the full graph if and only if the radius and diameter are
          equal.
        </p>
      </Definition>

      <Theorem title="Jordan's Theorem (Center of a Tree)">
        <p>
          The center of a tree is a vertex or an edge.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Use induction on the number of vertices.
            </p>
            <p className="mt-2">
              <strong>Base case:</strong> For <InlineMath math="n(T) \leq 2" />, the
              center is the entire tree.
            </p>
            <p className="mt-2">
              <strong>Induction step:</strong> For <InlineMath math="n(T) > 2" />, form{' '}
              <InlineMath math="T'" /> by deleting every leaf of <InlineMath math="T" />.
              By the lemma, <InlineMath math="T'" /> is a tree with at least one vertex.
            </p>
            <p className="mt-2">
              Every vertex at maximum distance from <InlineMath math="u \in V(T)" /> is a
              leaf. Since all leaves are removed and no path between other vertices uses
              a leaf: <InlineMath math="\varepsilon_{T'}(u) = \varepsilon_T(u) - 1" /> for
              every <InlineMath math="u \in V(T')" />.
            </p>
            <p className="mt-2">
              Also, the eccentricity of a leaf in <InlineMath math="T" /> is greater than
              that of its neighbor. Hence the vertices minimizing{' '}
              <InlineMath math="\varepsilon_T(u)" /> are the same as those minimizing{' '}
              <InlineMath math="\varepsilon_{T'}(u)" />.
            </p>
            <p className="mt-2">
              So <InlineMath math="T" /> and <InlineMath math="T'" /> have the same
              center. By the induction hypothesis, this center is a vertex or an edge.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>The Wiener Index</h2>

      <p>
        In a communication network, large diameter may be acceptable if most pairs can
        communicate via short paths. This leads us to study the average distance instead
        of the maximum.
      </p>

      <Definition title="Wiener Index">
        <p>
          The <strong>Wiener index</strong> (also called the total distance) of a graph{' '}
          <InlineMath math="G" /> is:
        </p>
        <MathBlock math="D(G) = W(G) = \sum_{u,v \in V(G)} d_G(u,v)" />
        <p>
          Wiener used this to study the boiling point of paraffin. Molecules can be
          modeled by graphs with vertices for atoms and edges for bonds, and many chemical
          properties relate to the Wiener index.
        </p>
      </Definition>

      <Theorem title="Theorem 2.1.14 (Extreme Wiener Index for Trees)">
        <p>
          Among trees with <InlineMath math="n" /> vertices, the Wiener index{' '}
          <InlineMath math="D(T) = \sum_{u,v} d(u,v)" /> is:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Minimized</strong> by stars (uniquely), with value{' '}
            <InlineMath math="D(K_{1,n-1}) = (n-1)^2" />
          </li>
          <li>
            <strong>Maximized</strong> by paths (uniquely), with value{' '}
            <InlineMath math="D(P_n) = \binom{n+1}{3}" />
          </li>
        </ul>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Minimum:</strong> A tree has <InlineMath math="n-1" /> edges, so{' '}
              <InlineMath math="n-1" /> pairs are at distance 1 and all other pairs have
              distance at least 2. The star achieves this lower bound. To show uniqueness,
              note that if all vertices have distance 2 from a leaf <InlineMath math="x" />
              , they must all be neighbors of <InlineMath math="x" />'s neighbor, making{' '}
              <InlineMath math="T" /> a star.
            </p>
            <MathBlock math="D(K_{1,n-1}) = (n-1) + 2\binom{n-1}{2} = (n-1)^2" />
            <p className="mt-2">
              <strong>Maximum:</strong> For the path,{' '}
              <InlineMath math="D(P_n) = D(P_{n-1}) + \binom{n}{2}" /> by summing
              distances from an endpoint. By induction,{' '}
              <InlineMath math="D(P_n) = \binom{n+1}{3}" />.
            </p>
            <p className="mt-2">
              To show <InlineMath math="P_n" /> is the unique maximizer, note that the
              distance list from a leaf in <InlineMath math="P_n" /> is{' '}
              <InlineMath math="1, 2, \ldots, n-1" /> (all distinct). Any repetition in
              distance values makes the sum smaller, and repetitions occur when{' '}
              <InlineMath math="T" /> is not a path.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Lemma 2.1.15 (Distance in Subgraphs)">
        <p>
          If <InlineMath math="H" /> is a subgraph of <InlineMath math="G" />, then{' '}
          <InlineMath math="d_G(u,v) \leq d_H(u,v)" />.
        </p>
        <p className="mt-2 text-dark-300">
          Every <InlineMath math="u,v" />-path in <InlineMath math="H" /> appears also in{' '}
          <InlineMath math="G" />, so the shortest path in <InlineMath math="G" /> is no
          longer than the shortest in <InlineMath math="H" />.
        </p>
      </Theorem>

      <Theorem title="Corollary 2.1.16">
        <p>
          If <InlineMath math="G" /> is a connected <InlineMath math="n" />-vertex graph,
          then <InlineMath math="D(G) \leq D(P_n)" />.
        </p>
        <p className="mt-2 text-dark-300">
          Let <InlineMath math="T" /> be a spanning tree of <InlineMath math="G" />. By
          Lemma 2.1.15, <InlineMath math="D(G) \leq D(T)" />. By Theorem 2.1.14,{' '}
          <InlineMath math="D(T) \leq D(P_n)" />.
        </p>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Tree characterizations:</strong> A graph is a tree iff it satisfies any
          of: connected + acyclic, connected + <InlineMath math="n-1" /> edges, acyclic +{' '}
          <InlineMath math="n-1" /> edges, or unique paths between all vertex pairs.
        </li>
        <li>
          <strong>Leaves:</strong> Every tree with <InlineMath math="n \geq 2" /> vertices
          has at least two leaves, enabling inductive proofs.
        </li>
        <li>
          <strong>Cut-edges:</strong> Every edge in a tree is a cut-edge; adding any edge
          creates exactly one cycle.
        </li>
        <li>
          <strong>Distance metrics:</strong> Diameter is the maximum distance; radius is
          the minimum eccentricity; the center minimizes eccentricity.
        </li>
        <li>
          <strong>Jordan's theorem:</strong> The center of a tree is always a single vertex
          or a single edge.
        </li>
        <li>
          <strong>Wiener index:</strong> Among <InlineMath math="n" />-vertex trees, stars
          minimize total distance and paths maximize it.
        </li>
      </ul>
    </LessonLayout>
  );
}
