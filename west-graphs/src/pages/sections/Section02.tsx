import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { PathExplorer } from '@/components/visualizations';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Introduction */}
      <p>
        In this section we return to the Königsberg Bridge Problem, determining when it is
        possible to traverse all the edges of a graph. We also develop useful properties of
        connection, paths, and cycles. These concepts are fundamental to understanding how
        graphs are structured and how we can move through them.
      </p>

      <h2>Walks, Trails, and Paths</h2>

      <p>
        As defined earlier, paths and cycles are graphs; a path <em>in</em> a graph{' '}
        <InlineMath>G</InlineMath> is a subgraph of <InlineMath>G</InlineMath> that is a path.
        We introduce further definitions to model other movements in graphs. A tourist wandering
        in a city may want to allow vertex repetitions but avoid edge repetitions. A mail carrier
        delivers mail to houses on both sides of the street and hence traverses each edge twice.
      </p>

      <Definition title="Walk, Trail, and Path" className="my-6">
        <p>
          A <strong>walk</strong> is a list{' '}
          <InlineMath>{`v_0, e_1, v_1, \\ldots, e_k, v_k`}</InlineMath> of vertices and edges
          such that, for <InlineMath>{`1 \\leq i \\leq k`}</InlineMath>, the edge{' '}
          <InlineMath>{`e_i`}</InlineMath> has endpoints <InlineMath>{`v_{i-1}`}</InlineMath> and{' '}
          <InlineMath>{`v_i`}</InlineMath>.
        </p>
        <p className="mt-2">
          A <strong>trail</strong> is a walk with no repeated edge.
        </p>
        <p className="mt-2">
          A <InlineMath>u, v</InlineMath>-<strong>walk</strong> or{' '}
          <InlineMath>u, v</InlineMath>-<strong>trail</strong> has first vertex{' '}
          <InlineMath>u</InlineMath> and last vertex <InlineMath>v</InlineMath>; these are its{' '}
          <strong>endpoints</strong>.
        </p>
        <p className="mt-2">
          A <InlineMath>u, v</InlineMath>-<strong>path</strong> is a path whose vertices of
          degree 1 (its endpoints) are <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath>;
          the others are <strong>internal vertices</strong>.
        </p>
        <p className="mt-2">
          The <strong>length</strong> of a walk, trail, path, or cycle is its number of edges.
          A walk or trail is <strong>closed</strong> if its endpoints are the same.
        </p>
      </Definition>

      <Example title="Walks and Trails in the Königsberg Graph" className="my-6">
        <p>
          In the Königsberg graph, the list <InlineMath>{`x, e_2, w, e_5, y, e_6, x, e_1, w, e_2, x`}</InlineMath>{' '}
          is a closed walk of length 5; it repeats edge <InlineMath>{`e_2`}</InlineMath> and hence
          is not a trail.
        </p>
        <p className="mt-2">
          Deleting the last edge and vertex yields a trail of length 4; it repeats vertices but
          not edges. The subgraph consisting of edges <InlineMath>{`e_1, e_5, e_6`}</InlineMath>{' '}
          and vertices <InlineMath>x, w, y</InlineMath> is a cycle of length 3.
        </p>
        <p className="mt-2">
          Two edges with the same endpoints form a cycle of length 2. A loop is a cycle of length 1.
        </p>
      </Example>

      <p>
        In a simple graph, a walk (or trail) is completely specified by its ordered list of
        vertices. We usually name a path, cycle, trail, or walk in a simple graph by listing
        only its vertices in order.
      </p>

      <h2>Every Walk Contains a Path</h2>

      <Theorem
        title="Every Walk Contains a Path"
        className="my-6"
        proof={
          <>
            <p>
              We prove the statement by induction on the length <InlineMath>l</InlineMath> of a{' '}
              <InlineMath>u, v</InlineMath>-walk <InlineMath>W</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Basis step:</strong> <InlineMath>{`l = 0`}</InlineMath>. Having no edge,{' '}
              <InlineMath>W</InlineMath> consists of a single vertex (<InlineMath>{`u = v`}</InlineMath>).
              This vertex is a <InlineMath>u, v</InlineMath>-path of length 0.
            </p>
            <p className="mt-2">
              <strong>Induction step:</strong> <InlineMath>{`l \\geq 1`}</InlineMath>. Suppose that
              the claim holds for walks of length less than <InlineMath>l</InlineMath>. If{' '}
              <InlineMath>W</InlineMath> has no repeated vertex, then its vertices and edges form
              a <InlineMath>u, v</InlineMath>-path.
            </p>
            <p className="mt-2">
              If <InlineMath>W</InlineMath> has a repeated vertex <InlineMath>w</InlineMath>, then
              deleting the edges and vertices between appearances of <InlineMath>w</InlineMath>{' '}
              (leaving one copy of <InlineMath>w</InlineMath>) yields a shorter{' '}
              <InlineMath>u, v</InlineMath>-walk <InlineMath>W'</InlineMath> contained in{' '}
              <InlineMath>W</InlineMath>. By the induction hypothesis, <InlineMath>W'</InlineMath>{' '}
              contains a <InlineMath>u, v</InlineMath>-path <InlineMath>P</InlineMath>, and this
              path <InlineMath>P</InlineMath> is contained in <InlineMath>W</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Every <InlineMath>u, v</InlineMath>-walk contains a <InlineMath>u, v</InlineMath>-path.
        </p>
      </Theorem>

      <h2>Connection in Graphs</h2>

      <Definition title="Connected Graph" className="my-6">
        <p>
          A graph <InlineMath>G</InlineMath> is <strong>connected</strong> if it has a{' '}
          <InlineMath>u, v</InlineMath>-path whenever <InlineMath>{`u, v \\in V(G)`}</InlineMath>{' '}
          (otherwise, <InlineMath>G</InlineMath> is <strong>disconnected</strong>).
        </p>
        <p className="mt-2">
          If <InlineMath>G</InlineMath> has a <InlineMath>u, v</InlineMath>-path, then{' '}
          <InlineMath>u</InlineMath> is <strong>connected to</strong> <InlineMath>v</InlineMath>{' '}
          in <InlineMath>G</InlineMath>. The <strong>connection relation</strong> on{' '}
          <InlineMath>V(G)</InlineMath> consists of the ordered pairs{' '}
          <InlineMath>(u, v)</InlineMath> such that <InlineMath>u</InlineMath> is connected to{' '}
          <InlineMath>v</InlineMath>.
        </p>
      </Definition>

      <p>
        It is important to distinguish between <em>connection</em> and <em>adjacency</em>:
      </p>

      <div className="bg-dark-800/50 rounded-lg p-4 my-4 font-mono text-sm">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-primary-400 mb-2">Connection</p>
            <p><InlineMath>G</InlineMath> has a <InlineMath>u, v</InlineMath>-path</p>
            <p><InlineMath>u</InlineMath> and <InlineMath>v</InlineMath> are connected</p>
          </div>
          <div>
            <p className="text-primary-400 mb-2">Adjacency</p>
            <p><InlineMath>{`uv \\in E(G)`}</InlineMath></p>
            <p><InlineMath>u</InlineMath> and <InlineMath>v</InlineMath> are adjacent</p>
          </div>
        </div>
      </div>

      <p>
        The connection relation is an <strong>equivalence relation</strong>: it is reflexive
        (paths of length 0), symmetric (paths are reversible), and transitive (by the lemma above,
        if <InlineMath>G</InlineMath> has a <InlineMath>u, v</InlineMath>-path and a{' '}
        <InlineMath>v, w</InlineMath>-path, then <InlineMath>G</InlineMath> has a{' '}
        <InlineMath>u, w</InlineMath>-path).
      </p>

      <Definition title="Components" className="my-6">
        <p>
          The <strong>components</strong> of a graph <InlineMath>G</InlineMath> are its maximal
          connected subgraphs. A component (or graph) is <strong>trivial</strong> if it has no
          edges; otherwise it is <strong>nontrivial</strong>. An <strong>isolated vertex</strong>{' '}
          is a vertex of degree 0.
        </p>
      </Definition>

      <p>
        The equivalence classes of the connection relation on <InlineMath>V(G)</InlineMath> are
        the vertex sets of the components of <InlineMath>G</InlineMath>. An isolated vertex forms
        a trivial component, consisting of one vertex and no edge.
      </p>

      <Theorem
        title="Lower Bound on Components"
        className="my-6"
        proof={
          <>
            <p>
              We prove this by induction on the number of edges <InlineMath>k</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Base case:</strong> When <InlineMath>{`k = 0`}</InlineMath>, the graph has no edges,
              so each vertex is its own component. Thus there are exactly <InlineMath>n</InlineMath>{' '}
              components, which equals <InlineMath>{`n - 0 = n - k`}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Induction step:</strong> Assume the result holds for graphs with{' '}
              <InlineMath>{`k - 1`}</InlineMath> edges. Let <InlineMath>G</InlineMath> be a graph
              with <InlineMath>n</InlineMath> vertices and <InlineMath>k</InlineMath> edges.
              Remove any edge <InlineMath>e</InlineMath> to obtain <InlineMath>{`G - e`}</InlineMath>.
            </p>
            <p className="mt-2">
              By the induction hypothesis, <InlineMath>{`G - e`}</InlineMath> has at least{' '}
              <InlineMath>{`n - (k-1) = n - k + 1`}</InlineMath> components.
            </p>
            <p className="mt-2">
              When we add edge <InlineMath>e</InlineMath> back, it can decrease the number of
              components by at most 1 (if it joins two different components, it merges them into one;
              if both endpoints are in the same component, the number of components stays the same).
            </p>
            <p className="mt-2">
              Therefore, <InlineMath>G</InlineMath> has at least{' '}
              <InlineMath>{`(n - k + 1) - 1 = n - k`}</InlineMath> components.
            </p>
          </>
        }
      >
        <p>
          Every graph with <InlineMath>n</InlineMath> vertices and <InlineMath>k</InlineMath>{' '}
          edges has at least <InlineMath>{`n - k`}</InlineMath> components.
        </p>
      </Theorem>

      <h2>Cut-Edges and Cut-Vertices</h2>

      <Definition title="Cut-Edge and Cut-Vertex" className="my-6">
        <p>
          A <strong>cut-edge</strong> or <strong>cut-vertex</strong> of a graph is an edge or
          vertex whose deletion increases the number of components.
        </p>
        <p className="mt-2">
          We write <InlineMath>{`G - e`}</InlineMath> or <InlineMath>{`G - M`}</InlineMath> for
          the subgraph of <InlineMath>G</InlineMath> obtained by deleting an edge{' '}
          <InlineMath>e</InlineMath> or set of edges <InlineMath>M</InlineMath>.
        </p>
        <p className="mt-2">
          We write <InlineMath>{`G - v`}</InlineMath> or <InlineMath>{`G - S`}</InlineMath> for
          the subgraph obtained by deleting a vertex <InlineMath>v</InlineMath> or set of
          vertices <InlineMath>S</InlineMath>.
        </p>
      </Definition>

      <Definition title="Induced Subgraph" className="my-6">
        <p>
          An <strong>induced subgraph</strong> is a subgraph obtained by deleting a set of
          vertices. We write <InlineMath>{`G[T]`}</InlineMath> for{' '}
          <InlineMath>{`G - \\overline{T}`}</InlineMath>, where{' '}
          <InlineMath>{`\\overline{T} = V(G) - T`}</InlineMath>; this is the subgraph of{' '}
          <InlineMath>G</InlineMath> <strong>induced by</strong> <InlineMath>T</InlineMath>.
        </p>
        <p className="mt-2">
          When <InlineMath>{`T \\subseteq V(G)`}</InlineMath>, the induced subgraph{' '}
          <InlineMath>{`G[T]`}</InlineMath> consists of <InlineMath>T</InlineMath> and all edges
          whose endpoints are contained in <InlineMath>T</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Cut-Edge Characterization"
        className="my-6"
        proof={
          <>
            <p>
              Let <InlineMath>e</InlineMath> be an edge in a graph <InlineMath>G</InlineMath>{' '}
              (with endpoints <InlineMath>x, y</InlineMath>), and let <InlineMath>H</InlineMath>{' '}
              be the component containing <InlineMath>e</InlineMath>. Since deletion of{' '}
              <InlineMath>e</InlineMath> affects no other component, it suffices to prove that{' '}
              <InlineMath>{`H - e`}</InlineMath> is connected if and only if{' '}
              <InlineMath>e</InlineMath> belongs to a cycle.
            </p>
            <p className="mt-2">
              First suppose that <InlineMath>{`H - e`}</InlineMath> is connected. This implies
              that <InlineMath>{`H - e`}</InlineMath> contains an <InlineMath>x, y</InlineMath>-path,
              and this path completes a cycle with <InlineMath>e</InlineMath>.
            </p>
            <p className="mt-2">
              Now suppose that <InlineMath>e</InlineMath> lies in a cycle <InlineMath>C</InlineMath>.
              Choose <InlineMath>{`u, v \\in V(H)`}</InlineMath>. Since <InlineMath>H</InlineMath>{' '}
              is connected, <InlineMath>H</InlineMath> has a <InlineMath>u, v</InlineMath>-path{' '}
              <InlineMath>P</InlineMath>. If <InlineMath>P</InlineMath> does not contain{' '}
              <InlineMath>e</InlineMath>, then <InlineMath>P</InlineMath> exists in{' '}
              <InlineMath>{`H - e`}</InlineMath>. If <InlineMath>P</InlineMath> contains{' '}
              <InlineMath>e</InlineMath>, we can route around <InlineMath>e</InlineMath> using
              the rest of cycle <InlineMath>C</InlineMath>. Thus{' '}
              <InlineMath>{`H - e`}</InlineMath> is connected.
            </p>
          </>
        }
      >
        <p>
          An edge is a cut-edge if and only if it belongs to no cycle.
        </p>
      </Theorem>

      <h2>Bipartite Graph Characterization</h2>

      <p>
        Our next goal is to characterize bipartite graphs using cycles. Recall that a loop is
        a cycle of length 1, and two distinct edges with the same endpoints form a cycle of
        length 2.
      </p>

      <Theorem
        title="Closed Odd Walk Lemma"
        className="my-6"
        proof={
          <>
            <p>
              We use induction on the length <InlineMath>l</InlineMath> of a closed odd walk{' '}
              <InlineMath>W</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Basis step:</strong> <InlineMath>{`l = 1`}</InlineMath>. A closed walk of
              length 1 traverses a cycle of length 1.
            </p>
            <p className="mt-2">
              <strong>Induction step:</strong> <InlineMath>{`l > 1`}</InlineMath>. Assume the
              claim for closed odd walks shorter than <InlineMath>W</InlineMath>. If{' '}
              <InlineMath>W</InlineMath> has no repeated vertex (other than first = last), then{' '}
              <InlineMath>W</InlineMath> itself forms a cycle of odd length.
            </p>
            <p className="mt-2">
              If vertex <InlineMath>v</InlineMath> is repeated in <InlineMath>W</InlineMath>,
              then we view <InlineMath>W</InlineMath> as starting at <InlineMath>v</InlineMath>{' '}
              and break <InlineMath>W</InlineMath> into two <InlineMath>v, v</InlineMath>-walks.
              Since <InlineMath>W</InlineMath> has odd length, one of these is odd and the other
              is even. The odd one is shorter than <InlineMath>W</InlineMath>. By the induction
              hypothesis, it contains an odd cycle, and this cycle appears in order in{' '}
              <InlineMath>W</InlineMath>.
            </p>
          </>
        }
      >
        <p>Every closed odd walk contains an odd cycle.</p>
      </Theorem>

      <Definition title="Bipartition" className="my-6">
        <p>
          A <strong>bipartition</strong> of <InlineMath>G</InlineMath> is a specification of two
          disjoint independent sets in <InlineMath>G</InlineMath> whose union is{' '}
          <InlineMath>V(G)</InlineMath>. The statement "Let <InlineMath>G</InlineMath> be a
          bipartite graph with bipartition <InlineMath>X, Y</InlineMath>" specifies one such
          partition. An <InlineMath>X, Y</InlineMath>-<strong>bigraph</strong> is a bipartite
          graph with bipartition <InlineMath>X, Y</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="König's Characterization of Bipartite Graphs"
        className="my-6"
        proof={
          <>
            <p>
              <strong>Necessity:</strong> Let <InlineMath>G</InlineMath> be a bipartite graph.
              Every walk alternates between the two sets of a bipartition, so every return to
              the original partite set happens after an even number of steps. Hence{' '}
              <InlineMath>G</InlineMath> has no odd cycle.
            </p>
            <p className="mt-2">
              <strong>Sufficiency:</strong> Let <InlineMath>G</InlineMath> be a graph with no odd
              cycle. We prove that <InlineMath>G</InlineMath> is bipartite by constructing a
              bipartition of each nontrivial component.
            </p>
            <p className="mt-2">
              Let <InlineMath>u</InlineMath> be a vertex in a nontrivial component{' '}
              <InlineMath>H</InlineMath>. For each <InlineMath>{`v \\in V(H)`}</InlineMath>, let{' '}
              <InlineMath>{`f(v)`}</InlineMath> be the minimum length of a{' '}
              <InlineMath>u, v</InlineMath>-path.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`X = \\{v \\in V(H): f(v) \\text{ is even}\\}`}</InlineMath> and{' '}
              <InlineMath>{`Y = \\{v \\in V(H): f(v) \\text{ is odd}\\}`}</InlineMath>. An edge{' '}
              <InlineMath>v, v'</InlineMath> within <InlineMath>X</InlineMath> or{' '}
              <InlineMath>Y</InlineMath> would create a closed odd walk using a shortest{' '}
              <InlineMath>u, v</InlineMath>-path, the edge <InlineMath>vv'</InlineMath>, and the
              reverse of a shortest <InlineMath>u, v'</InlineMath>-path. By the Closed Odd Walk
              Lemma, such a walk must contain an odd cycle, which contradicts our hypothesis.
            </p>
            <p className="mt-2">
              Hence <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath> are independent
              sets. Also <InlineMath>{`X \\cup Y = V(H)`}</InlineMath>, so{' '}
              <InlineMath>H</InlineMath> is an <InlineMath>X, Y</InlineMath>-bigraph.
            </p>
          </>
        }
      >
        <p>
          (König [1936]) A graph is bipartite if and only if it has no odd cycle.
        </p>
      </Theorem>

      <p>
        This theorem provides an efficient way to test whether a graph is bipartite: if it is
        not bipartite, we can prove this by presenting an odd cycle. When we want to prove that{' '}
        <InlineMath>G</InlineMath> is bipartite, we define a bipartition and prove that the two
        sets are independent.
      </p>

      <h2>Interactive Path Explorer</h2>

      <p>
        Use the interactive tool below to explore paths, cycles, and Eulerian circuits.
        Click vertices to find paths between them, detect cycles, or discover Eulerian circuits.
      </p>

      <PathExplorer className="my-8" />

      <h2>Eulerian Circuits</h2>

      <p>
        We return to our analysis of the Königsberg Bridge Problem. What the people of Königsberg
        wanted was a closed trail containing all the edges in a graph. As we observed, a necessary
        condition for existence of such a trail is that all vertex degrees be even. Also it is
        necessary that all edges belong to the same component.
      </p>

      <Definition title="Eulerian Graph" className="my-6">
        <p>
          A graph is <strong>Eulerian</strong> if it has a closed trail containing all edges.
          We call a closed trail a <strong>circuit</strong> when we do not specify the first
          vertex but keep the list in cyclic order.
        </p>
        <p className="mt-2">
          An <strong>Eulerian circuit</strong> or <strong>Eulerian trail</strong> in a graph is
          a circuit or trail containing all the edges.
        </p>
        <p className="mt-2">
          An <strong>even graph</strong> is a graph with vertex degrees all even. A vertex is{' '}
          <strong>odd</strong> [<strong>even</strong>] when its degree is odd [even].
        </p>
      </Definition>

      <Theorem
        title="Cycle Existence Lemma"
        className="my-6"
        proof={
          <>
            <p>
              Let <InlineMath>P</InlineMath> be a maximal path in <InlineMath>G</InlineMath>. Such a
              path exists because <InlineMath>G</InlineMath> is finite and nonempty (having vertices
              of degree at least 2 implies it has edges).
            </p>
            <p className="mt-2">
              Let <InlineMath>u</InlineMath> be an endpoint of <InlineMath>P</InlineMath>. Since{' '}
              <InlineMath>P</InlineMath> is maximal (cannot be extended), every neighbor of{' '}
              <InlineMath>u</InlineMath> must already be a vertex of <InlineMath>P</InlineMath>.
              If some neighbor were not on <InlineMath>P</InlineMath>, we could extend{' '}
              <InlineMath>P</InlineMath> through that neighbor, contradicting maximality.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`d(u) \\geq 2`}</InlineMath>, the vertex <InlineMath>u</InlineMath>{' '}
              has at least two neighbors. One neighbor is its predecessor on the path{' '}
              <InlineMath>P</InlineMath>. There must be at least one other neighbor{' '}
              <InlineMath>v</InlineMath>, and this neighbor lies on <InlineMath>P</InlineMath>.
            </p>
            <p className="mt-2">
              The edge <InlineMath>uv</InlineMath> is not part of <InlineMath>P</InlineMath> (since
              paths have no repeated vertices, and <InlineMath>u</InlineMath> already has a different
              edge to its predecessor on <InlineMath>P</InlineMath>). This edge{' '}
              <InlineMath>uv</InlineMath> together with the portion of <InlineMath>P</InlineMath>{' '}
              from <InlineMath>v</InlineMath> to <InlineMath>u</InlineMath> forms a cycle.
            </p>
          </>
        }
      >
        <p>
          If every vertex of a graph <InlineMath>G</InlineMath> has degree at least 2, then{' '}
          <InlineMath>G</InlineMath> contains a cycle.
        </p>
      </Theorem>

      <Theorem
        title="Characterization of Eulerian Graphs"
        className="my-6"
        proof={
          <>
            <p>
              <strong>Necessity:</strong> Suppose that <InlineMath>G</InlineMath> has an Eulerian
              circuit <InlineMath>C</InlineMath>. Each passage of <InlineMath>C</InlineMath>{' '}
              through a vertex uses two incident edges, and the first edge is paired with the
              last at the first vertex. Hence every vertex has even degree. Also, two edges can
              be in the same trail only when they lie in the same component, so there is at most
              one nontrivial component.
            </p>
            <p className="mt-2">
              <strong>Sufficiency:</strong> We use induction on the number of edges{' '}
              <InlineMath>m</InlineMath>.
            </p>
            <p className="mt-2">
              <em>Basis step:</em> <InlineMath>{`m = 0`}</InlineMath>. A closed trail consisting
              of one vertex suffices.
            </p>
            <p className="mt-2">
              <em>Induction step:</em> <InlineMath>{`m > 0`}</InlineMath>. With even degrees,
              each vertex in the nontrivial component of <InlineMath>G</InlineMath> has degree
              at least 2. By the Cycle Existence Lemma, the nontrivial component has a cycle{' '}
              <InlineMath>C</InlineMath>. Let <InlineMath>G'</InlineMath> be the graph obtained
              from <InlineMath>G</InlineMath> by deleting <InlineMath>E(C)</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>C</InlineMath> has 0 or 2 edges at each vertex, each component
              of <InlineMath>G'</InlineMath> is also an even graph. Since each component is
              connected and has fewer than <InlineMath>m</InlineMath> edges, we can apply the
              induction hypothesis to conclude that each component of <InlineMath>G'</InlineMath>{' '}
              has an Eulerian circuit.
            </p>
            <p className="mt-2">
              To combine these into an Eulerian circuit of <InlineMath>G</InlineMath>, we traverse{' '}
              <InlineMath>C</InlineMath>, but when a component of <InlineMath>G'</InlineMath> is
              entered for the first time we detour along an Eulerian circuit of that component.
              This circuit ends at the vertex where we began the detour. When we complete the
              traversal of <InlineMath>C</InlineMath>, we have completed an Eulerian circuit of{' '}
              <InlineMath>G</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          A graph <InlineMath>G</InlineMath> is Eulerian if and only if it has at most one
          nontrivial component and its vertices all have even degree.
        </p>
      </Theorem>

      <Theorem
        title="Cycle Decomposition of Even Graphs"
        className="my-6"
        proof={
          <>
            <p>
              We prove this by strong induction on the number of edges <InlineMath>m</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Base case:</strong> If <InlineMath>{`m = 0`}</InlineMath>, the graph has no
              edges and is trivially decomposed into zero cycles (the empty decomposition).
            </p>
            <p className="mt-2">
              <strong>Induction step:</strong> Suppose <InlineMath>{`m > 0`}</InlineMath> and the
              result holds for all even graphs with fewer than <InlineMath>m</InlineMath> edges.
              Let <InlineMath>G</InlineMath> be an even graph with <InlineMath>m</InlineMath> edges.
            </p>
            <p className="mt-2">
              Since <InlineMath>G</InlineMath> has an edge and all degrees are even (hence at least 2
              for vertices incident to edges), the Cycle Existence Lemma guarantees that{' '}
              <InlineMath>G</InlineMath> contains a cycle <InlineMath>C</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`G' = G - E(C)`}</InlineMath> be the graph obtained by deleting the
              edges of <InlineMath>C</InlineMath>. Since <InlineMath>C</InlineMath> contributes
              exactly 0 or 2 to the degree of each vertex (2 if the vertex is on the cycle, 0
              otherwise), the graph <InlineMath>G'</InlineMath> is still an even graph.
            </p>
            <p className="mt-2">
              Since <InlineMath>G'</InlineMath> has fewer edges than <InlineMath>G</InlineMath>, by
              the induction hypothesis, <InlineMath>G'</InlineMath> decomposes into cycles. Adding
              the cycle <InlineMath>C</InlineMath> to this decomposition gives a cycle decomposition
              of <InlineMath>G</InlineMath>.
            </p>
          </>
        }
      >
        <p>Every even graph decomposes into cycles.</p>
      </Theorem>

      <h2>Decomposing Graphs into Trails</h2>

      <p>
        When drawing a figure <InlineMath>G</InlineMath> on paper, how many times must we stop
        and move the pen? Each visit to the paper contributes a trail, so we seek a decomposition
        of <InlineMath>G</InlineMath> into the minimum number of trails.
      </p>

      <Theorem
        title="Trail Decomposition Theorem"
        className="my-6"
        proof={
          <>
            <p>
              A trail contributes even degree to every vertex, except that a non-closed trail
              contributes odd degree to its endpoints. Therefore, a partition of the edges into
              trails must have some non-closed trail ending at each odd vertex. Since each trail
              has only two ends, we must use at least <InlineMath>k</InlineMath> trails to satisfy{' '}
              <InlineMath>2k</InlineMath> odd vertices.
            </p>
            <p className="mt-2">
              We also need at least one trail since <InlineMath>G</InlineMath> has an edge, and
              the Eulerian Characterization implies that one trail suffices when{' '}
              <InlineMath>{`k = 0`}</InlineMath>.
            </p>
            <p className="mt-2">
              It remains to prove that <InlineMath>k</InlineMath> trails suffice when{' '}
              <InlineMath>{`k > 0`}</InlineMath>. Given such a graph <InlineMath>G</InlineMath>,
              we pair up the odd vertices (in any way) and form <InlineMath>G'</InlineMath> by
              adding for each pair an edge joining its two vertices. The resulting graph{' '}
              <InlineMath>G'</InlineMath> is connected and even, so it has an Eulerian circuit{' '}
              <InlineMath>C</InlineMath>. As we traverse <InlineMath>C</InlineMath> in{' '}
              <InlineMath>G'</InlineMath>, we start a new trail in <InlineMath>G</InlineMath>{' '}
              each time we traverse an edge of <InlineMath>{`G' - E(G)`}</InlineMath>. This
              yields <InlineMath>k</InlineMath> trails decomposing <InlineMath>G</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For a connected nontrivial graph with exactly <InlineMath>2k</InlineMath> odd vertices,
          the minimum number of trails that decompose it is{' '}
          <InlineMath>{`\\max\\{k, 1\\}`}</InlineMath>.
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>walk</strong> allows repeated vertices and edges; a <strong>trail</strong>{' '}
              allows no repeated edges; a <strong>path</strong> allows no repeated vertices.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Every <InlineMath>u, v</InlineMath>-walk contains a <InlineMath>u, v</InlineMath>-path
              (by removing loops when vertices repeat).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The <strong>components</strong> of a graph are the equivalence classes under the
              connection relation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              An edge is a <strong>cut-edge</strong> if and only if it belongs to no cycle.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              A graph is <strong>bipartite</strong> if and only if it has no odd cycle (König).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              A graph is <strong>Eulerian</strong> (has a circuit using all edges) if and only
              if it has at most one nontrivial component and all vertices have even degree.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">7.</span>
            <span>
              Every even graph decomposes into cycles.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
