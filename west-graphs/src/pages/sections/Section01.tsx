import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Introduction */}
      <p>
        How can we lay cable at minimum cost to make every telephone reachable from every other?
        What is the fastest route from the national capital to each state capital? How can{' '}
        <InlineMath>n</InlineMath> jobs be filled by <InlineMath>n</InlineMath> people with maximum
        total utility? Can we color the regions of every map using four colors so that neighboring
        regions receive different colors?
      </p>

      <p>
        These and many other practical problems involve <strong>graph theory</strong>. In this course,
        we develop the theory of graphs and apply it to such problems. Our starting point is a
        historical problem that gave birth to the field.
      </p>

      <h2>The Königsberg Bridge Problem</h2>

      <Example title="The Königsberg Bridge Problem" className="my-6">
        <p>
          The city of Königsberg was located on the Pregel river in Prussia. The city occupied two
          islands plus areas on both banks. These regions were linked by seven bridges. The citizens
          wondered whether they could leave home, cross every bridge exactly once, and return home.
        </p>
        <p className="mt-2">
          The problem reduces to traversing a figure with heavy dots representing land masses and
          curves representing bridges. Each time we enter and leave a land mass, we use two bridges
          ending at it. Thus existence of the desired traversal requires that each land mass be
          involved in an <strong>even</strong> number of bridges. This necessary condition did not
          hold in Königsberg.
        </p>
      </Example>

      <p>
        The Königsberg Bridge Problem suggests a general model for discussing such questions.
        We represent land masses as <em>vertices</em> and bridges as <em>edges</em>.
      </p>

      <h2>The Definition of a Graph</h2>

      <Definition title="Graph" className="my-6">
        <p>
          A <strong>graph</strong> <InlineMath>G</InlineMath> is a triple consisting of a{' '}
          <strong>vertex set</strong> <InlineMath>V(G)</InlineMath>, an <strong>edge set</strong>{' '}
          <InlineMath>E(G)</InlineMath>, and a relation that associates with each edge two vertices
          (not necessarily distinct) called its <strong>endpoints</strong>.
        </p>
      </Definition>

      <p>
        We draw a graph on paper by placing each vertex at a point and representing each edge by a
        curve joining the locations of its endpoints.
      </p>

      <Definition title="Loop and Multiple Edges" className="my-6">
        <p>
          A <strong>loop</strong> is an edge whose endpoints are equal.{' '}
          <strong>Multiple edges</strong> are edges having the same pair of endpoints.
        </p>
        <p className="mt-2">
          A <strong>simple graph</strong> is a graph having no loops or multiple edges. We specify a
          simple graph by its vertex set and edge set, treating the edge set as a set of unordered
          pairs of vertices and writing <InlineMath>e = uv</InlineMath> (or{' '}
          <InlineMath>e = vu</InlineMath>) for an edge <InlineMath>e</InlineMath> with endpoints{' '}
          <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath>.
        </p>
        <p className="mt-2">
          When <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath> are the endpoints of an
          edge, they are <strong>adjacent</strong> and are <strong>neighbors</strong>. We write{' '}
          <InlineMath>{`u \\leftrightarrow v`}</InlineMath> for "u is adjacent to v".
        </p>
      </Definition>

      <Example title="A Simple Graph" className="my-6">
        <p>
          Consider a graph with vertex set <InlineMath>{`\\{u, v, w, x, y\\}`}</InlineMath> and edge
          set <InlineMath>{`\\{uv, uw, ux, vx, vw, xw, xy\\}`}</InlineMath>. This is a simple graph
          because no edge has the same vertex as both endpoints (no loops) and no two edges share
          the same pair of endpoints (no multiple edges).
        </p>
        <p className="mt-2">
          The terms "vertex" and "edge" arise from solid geometry. A cube has vertices and edges,
          and these form the vertex set and edge set of a graph.
        </p>
      </Example>

      <h2>Graphs as Models</h2>

      <p>
        Graphs arise in many settings. The applications suggest useful concepts and terminology
        about the structure of graphs.
      </p>

      <Definition title="Complement, Clique, and Independent Set" className="my-6">
        <p>
          The <strong>complement</strong> <InlineMath>{`\\overline{G}`}</InlineMath> of a simple
          graph <InlineMath>G</InlineMath> is the simple graph with vertex set{' '}
          <InlineMath>V(G)</InlineMath> defined by{' '}
          <InlineMath>{`uv \\in E(\\overline{G})`}</InlineMath> if and only if{' '}
          <InlineMath>{`uv \\notin E(G)`}</InlineMath>.
        </p>
        <p className="mt-2">
          A <strong>clique</strong> in a graph is a set of pairwise adjacent vertices.
        </p>
        <p className="mt-2">
          An <strong>independent set</strong> (or <strong>stable set</strong>) in a graph is a set
          of pairwise nonadjacent vertices.
        </p>
      </Definition>

      <p>
        Cliques and independent sets swap roles under complementation: cliques in{' '}
        <InlineMath>G</InlineMath> become independent sets in{' '}
        <InlineMath>{`\\overline{G}`}</InlineMath>, and vice versa.
      </p>

      <Definition title="Bipartite Graph" className="my-6">
        <p>
          A graph <InlineMath>G</InlineMath> is <strong>bipartite</strong> if{' '}
          <InlineMath>V(G)</InlineMath> is the union of two disjoint (possibly empty) independent
          sets called <strong>partite sets</strong> of <InlineMath>G</InlineMath>.
        </p>
      </Definition>

      <Example title="Job Assignments" className="my-6">
        <p>
          We have <InlineMath>m</InlineMath> jobs and <InlineMath>n</InlineMath> people, but not all
          people are qualified for all jobs. Can we fill the jobs with qualified people?
        </p>
        <p className="mt-2">
          We model this using a simple graph <InlineMath>H</InlineMath> with vertices for the jobs
          and people; job <InlineMath>j</InlineMath> is adjacent to person <InlineMath>p</InlineMath>{' '}
          if <InlineMath>p</InlineMath> can do <InlineMath>j</InlineMath>. This is a bipartite graph
          where one partite set contains jobs and the other contains people.
        </p>
      </Example>

      <h2>Chromatic Number and Coloring</h2>

      <Definition title="Chromatic Number" className="my-6">
        <p>
          The <strong>chromatic number</strong> of a graph <InlineMath>G</InlineMath>, written{' '}
          <InlineMath>{`\\chi(G)`}</InlineMath>, is the minimum number of colors needed to label the
          vertices so that adjacent vertices receive different colors.
        </p>
        <p className="mt-2">
          A graph <InlineMath>G</InlineMath> is <strong>k-partite</strong> if{' '}
          <InlineMath>V(G)</InlineMath> can be expressed as the union of <InlineMath>k</InlineMath>{' '}
          (possibly empty) independent sets.
        </p>
      </Definition>

      <p>
        This generalizes the idea of bipartite graphs, which are 2-partite. Vertices given the same
        color must form an independent set, so <InlineMath>{`\\chi(G)`}</InlineMath> is the minimum
        number of independent sets needed to partition <InlineMath>V(G)</InlineMath>. A graph is
        k-partite if and only if its chromatic number is at most <InlineMath>k</InlineMath>.
      </p>

      <h2>Paths and Cycles</h2>

      <Definition title="Path and Cycle" className="my-6">
        <p>
          A <strong>path</strong> is a simple graph whose vertices can be ordered so that two
          vertices are adjacent if and only if they are consecutive in the list.
        </p>
        <p className="mt-2">
          A <strong>cycle</strong> is a graph with an equal number of vertices and edges whose
          vertices can be placed around a circle so that two vertices are adjacent if and only if
          they appear consecutively along the circle.
        </p>
      </Definition>

      <p>
        Dropping one edge from a cycle produces a path. The path with <InlineMath>n</InlineMath>{' '}
        vertices is denoted <InlineMath>P_n</InlineMath>, and the cycle with{' '}
        <InlineMath>n</InlineMath> vertices is denoted <InlineMath>C_n</InlineMath>.
      </p>

      <Definition title="Subgraph and Connected" className="my-6">
        <p>
          A <strong>subgraph</strong> of a graph <InlineMath>G</InlineMath> is a graph{' '}
          <InlineMath>H</InlineMath> such that <InlineMath>{`V(H) \\subseteq V(G)`}</InlineMath> and{' '}
          <InlineMath>{`E(H) \\subseteq E(G)`}</InlineMath> and the assignment of endpoints to edges
          in <InlineMath>H</InlineMath> is the same as in <InlineMath>G</InlineMath>. We write{' '}
          <InlineMath>{`H \\subseteq G`}</InlineMath> and say "G contains H".
        </p>
        <p className="mt-2">
          A graph <InlineMath>G</InlineMath> is <strong>connected</strong> if each pair of vertices
          in <InlineMath>G</InlineMath> belongs to a path; otherwise, <InlineMath>G</InlineMath> is{' '}
          <strong>disconnected</strong>.
        </p>
      </Definition>

      <h2>Matrices and Isomorphism</h2>

      <Definition title="Adjacency and Incidence Matrices" className="my-6">
        <p>
          Let <InlineMath>G</InlineMath> be a loopless graph with vertex set{' '}
          <InlineMath>{`V(G) = \\{v_1, \\ldots, v_n\\}`}</InlineMath> and edge set{' '}
          <InlineMath>{`E(G) = \\{e_1, \\ldots, e_m\\}`}</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>adjacency matrix</strong> of <InlineMath>G</InlineMath>, written{' '}
          <InlineMath>A(G)</InlineMath>, is the <InlineMath>n</InlineMath>-by-
          <InlineMath>n</InlineMath> matrix in which entry <InlineMath>{`a_{i,j}`}</InlineMath> is
          the number of edges in <InlineMath>G</InlineMath> with endpoints{' '}
          <InlineMath>{`\\{v_i, v_j\\}`}</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>incidence matrix</strong> <InlineMath>M(G)</InlineMath> is the{' '}
          <InlineMath>n</InlineMath>-by-<InlineMath>m</InlineMath> matrix in which entry{' '}
          <InlineMath>{`m_{i,j}`}</InlineMath> is 1 if <InlineMath>{`v_i`}</InlineMath> is an
          endpoint of <InlineMath>{`e_j`}</InlineMath> and otherwise is 0.
        </p>
        <p className="mt-2">
          If vertex <InlineMath>v</InlineMath> is an endpoint of edge <InlineMath>e</InlineMath>,
          then <InlineMath>v</InlineMath> and <InlineMath>e</InlineMath> are{' '}
          <strong>incident</strong>. The <strong>degree</strong> of vertex{' '}
          <InlineMath>v</InlineMath> (in a loopless graph) is the number of incident edges.
        </p>
      </Definition>

      <p>
        An adjacency matrix is symmetric (<InlineMath>{`a_{i,j} = a_{j,i}`}</InlineMath> for all{' '}
        <InlineMath>i, j</InlineMath>). An adjacency matrix of a simple graph has entries 0 or 1,
        with 0s on the diagonal. The degree of <InlineMath>v</InlineMath> is the sum of the entries
        in the row for <InlineMath>v</InlineMath> in either <InlineMath>A(G)</InlineMath> or{' '}
        <InlineMath>M(G)</InlineMath>.
      </p>

      <Definition title="Isomorphism" className="my-6">
        <p>
          An <strong>isomorphism</strong> from a simple graph <InlineMath>G</InlineMath> to a simple
          graph <InlineMath>H</InlineMath> is a bijection{' '}
          <InlineMath>{`f: V(G) \\to V(H)`}</InlineMath> such that{' '}
          <InlineMath>{`uv \\in E(G)`}</InlineMath> if and only if{' '}
          <InlineMath>{`f(u)f(v) \\in E(H)`}</InlineMath>.
        </p>
        <p className="mt-2">
          We say "G is <strong>isomorphic</strong> to H", written{' '}
          <InlineMath>{`G \\cong H`}</InlineMath>, if there is an isomorphism from{' '}
          <InlineMath>G</InlineMath> to <InlineMath>H</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Isomorphism is an Equivalence Relation"
        className="my-6"
        proof={
          <>
            <p>
              <strong>Reflexive:</strong> The identity permutation on <InlineMath>V(G)</InlineMath>{' '}
              is an isomorphism from <InlineMath>G</InlineMath> to itself. Thus{' '}
              <InlineMath>{`G \\cong G`}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Symmetric:</strong> If <InlineMath>{`f: V(G) \\to V(H)`}</InlineMath> is an
              isomorphism from <InlineMath>G</InlineMath> to <InlineMath>H</InlineMath>, then{' '}
              <InlineMath>{`f^{-1}`}</InlineMath> is an isomorphism from <InlineMath>H</InlineMath>{' '}
              to <InlineMath>G</InlineMath>. Thus <InlineMath>{`G \\cong H`}</InlineMath> implies{' '}
              <InlineMath>{`H \\cong G`}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Transitive:</strong> If <InlineMath>{`f: V(F) \\to V(G)`}</InlineMath> and{' '}
              <InlineMath>{`g: V(G) \\to V(H)`}</InlineMath> are isomorphisms, then the composition{' '}
              <InlineMath>{`g \\circ f`}</InlineMath> is an isomorphism from{' '}
              <InlineMath>F</InlineMath> to <InlineMath>H</InlineMath>. Thus{' '}
              <InlineMath>{`F \\cong G`}</InlineMath> and <InlineMath>{`G \\cong H`}</InlineMath>{' '}
              together imply <InlineMath>{`F \\cong H`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The isomorphism relation is an equivalence relation on the set of simple graphs.
        </p>
      </Theorem>

      <h2>Special Graphs</h2>

      <Definition title="Complete and Bipartite Graphs" className="my-6">
        <p>
          A <strong>complete graph</strong> is a simple graph whose vertices are pairwise adjacent.
          The complete graph with <InlineMath>n</InlineMath> vertices is denoted{' '}
          <InlineMath>K_n</InlineMath>.
        </p>
        <p className="mt-2">
          A <strong>complete bipartite graph</strong> (or <strong>biclique</strong>) is a simple
          bipartite graph such that two vertices are adjacent if and only if they are in different
          partite sets. When the sets have sizes <InlineMath>r</InlineMath> and{' '}
          <InlineMath>s</InlineMath>, the biclique is denoted <InlineMath>{`K_{r,s}`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="The Petersen Graph" className="my-6">
        <p>
          The <strong>Petersen graph</strong> is the simple graph whose vertices are the 2-element
          subsets of a 5-element set, and whose edges are the pairs of disjoint 2-element subsets.
        </p>
        <p className="mt-2">
          Using <InlineMath>{`\\{1, 2, 3, 4, 5\\}`}</InlineMath> as our 5-element set, we write the
          pair <InlineMath>{`\\{a, b\\}`}</InlineMath> as <InlineMath>ab</InlineMath>. Since 12 and
          34 are disjoint, they are adjacent vertices. But 12 and 23 share element 2, so they are
          not adjacent.
        </p>
      </Definition>

      <p>
        For each 2-set <InlineMath>ab</InlineMath>, there are three ways to pick a 2-set from the
        remaining three elements, so every vertex in the Petersen graph has degree 3. The Petersen
        graph consists of two disjoint 5-cycles plus edges that pair up vertices on the two cycles.
      </p>

      <Definition title="Girth" className="my-6">
        <p>
          The <strong>girth</strong> of a graph with a cycle is the length of its shortest cycle. A
          graph with no cycle has infinite girth.
        </p>
      </Definition>

      <Theorem title="Petersen Graph Has Girth 5" className="my-6">
        <p>The Petersen graph has girth 5.</p>
      </Theorem>

      <p>
        The proof follows from several observations: the graph is simple (no 1-cycles or 2-cycles),
        a 3-cycle would require three pairwise-disjoint 2-sets (impossible among 5 elements), and a
        4-cycle would require nonadjacent vertices with two common neighbors, which cannot happen
        because nonadjacent vertices in the Petersen graph share exactly one element and thus have
        exactly one common neighbor.
      </p>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>graph</strong> consists of vertices and edges connecting pairs of vertices.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              A <strong>simple graph</strong> has no loops (edges from a vertex to itself) or
              multiple edges (several edges between the same pair).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The <strong>complement</strong> of a graph has the same vertices but exactly the
              opposite edges.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Bipartite graphs</strong> have vertices that can be split into two groups with
              edges only between groups.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              Two graphs are <strong>isomorphic</strong> if one can be relabeled to become the
              other, preserving all adjacencies.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              The <strong>Petersen graph</strong> is a fundamental example with 10 vertices, each of
              degree 3, and girth 5.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
