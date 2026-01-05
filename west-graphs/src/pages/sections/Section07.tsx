import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { MSTAnimator } from '@/components/visualizations';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <p>
        "The best spanning tree" may have various meanings. A <strong>weighted graph</strong>{' '}
        is a graph with numerical labels on the edges. When building links to connect
        locations, the costs of potential links yield a weighted graph. The minimum cost
        of connecting the system is the minimum total weight of its spanning trees.
      </p>

      <p>
        Alternatively, the weights may represent distances. In these cases we define the
        length of a path to be the sum of its edge weights. We may seek a spanning tree
        with small distances. When discussing weighted graphs,{' '}
        <strong>we consider only nonnegative edge weights</strong>.
      </p>

      <h2>Interactive MST Algorithm</h2>

      <p>
        Watch Kruskal's or Prim's algorithm find the minimum spanning tree step by step.
        See how each algorithm greedily selects edges to build the optimal solution.
      </p>

      <MSTAnimator className="my-8" />

      <h2>Minimum Spanning Trees</h2>

      <p>
        In a connected weighted graph of possible communication links, all spanning trees
        have <InlineMath math="n - 1" /> edges; we seek one that minimizes or maximizes the
        sum of the edge weights. For these problems, the most naive heuristic quickly
        produces an optimal solution.
      </p>

      <Definition title="Kruskal's Algorithm (Algorithm 2.3.1)">
        <p>
          <strong>Input:</strong> A weighted connected graph.
        </p>
        <p>
          <strong>Idea:</strong> Maintain an acyclic spanning subgraph{' '}
          <InlineMath math="H" />, enlarging it by edges with low weight to form a
          spanning tree. Consider edges in nondecreasing order of weight.
        </p>
        <p>
          <strong>Initialization:</strong> Set <InlineMath math="E(H) = \emptyset" />.
        </p>
        <p>
          <strong>Iteration:</strong> If the next cheapest edge joins two components of{' '}
          <InlineMath math="H" />, include it; otherwise, discard it. Terminate when{' '}
          <InlineMath math="H" /> is connected.
        </p>
      </Definition>

      <p>
        Unsophisticated locally optimal heuristics are called{' '}
        <strong>greedy algorithms</strong>. They usually don't guarantee optimal
        solutions, but this one does!
      </p>

      <Example title="Running Kruskal's Algorithm">
        <p>
          Choices in Kruskal's Algorithm depend only on the order of the weights, not on
          their values. Consider a graph where we've labeled edges with positive integers
          to emphasize the order of examination.
        </p>
        <p>
          The four cheapest edges might be selected, but then edges that complete cycles
          with the selected edges must be skipped. Edges of equal weight may be examined
          in any order; the resulting trees have the same cost.
        </p>
        <p>
          Each selected edge combines two components of the growing forest until we have
          a single spanning tree.
        </p>
      </Example>

      <Theorem title="Theorem 2.3.3 (Kruskal [1956])">
        <p>
          In a connected weighted graph <InlineMath math="G" />, Kruskal's Algorithm
          constructs a minimum-weight spanning tree.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>The algorithm produces a tree:</strong> It never chooses an edge
              that completes a cycle. If the final graph has more than one component, then
              we considered no edge joining two of them, but such an edge would be
              accepted. Since <InlineMath math="G" /> is connected, some such edge exists.
              Thus the final graph is connected and acyclic.
            </p>
            <p className="mt-2">
              <strong>The tree is optimal:</strong> Let <InlineMath math="T" /> be the
              resulting tree, and let <InlineMath math="T^*" /> be a minimum-weight
              spanning tree. If <InlineMath math="T \neq T^*" />, let{' '}
              <InlineMath math="e" /> be the first edge chosen for <InlineMath math="T" />{' '}
              that is not in <InlineMath math="T^*" />.
            </p>
            <p className="mt-2">
              Adding <InlineMath math="e" /> to <InlineMath math="T^*" /> creates one
              cycle <InlineMath math="C" />. Since <InlineMath math="T" /> has no cycle,{' '}
              <InlineMath math="C" /> has an edge{' '}
              <InlineMath math="e' \notin E(T)" />. Consider{' '}
              <InlineMath math="T^* + e - e'" />.
            </p>
            <p className="mt-2">
              Since <InlineMath math="T^*" /> contains <InlineMath math="e'" /> and all
              edges of <InlineMath math="T" /> chosen before <InlineMath math="e" />,
              both <InlineMath math="e'" /> and <InlineMath math="e" /> are available when
              the algorithm chooses <InlineMath math="e" />, so{' '}
              <InlineMath math="w(e) \leq w(e')" />. Thus{' '}
              <InlineMath math="T^* + e - e'" /> is a spanning tree with weight at most{' '}
              <InlineMath math="T^*" /> that agrees with <InlineMath math="T" /> longer.
            </p>
            <p className="mt-2">
              Repeating this argument eventually yields a minimum-weight spanning tree
              that agrees completely with <InlineMath math="T" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Definition title="Prim's Algorithm">
        <p>
          An alternative approach: grow a spanning tree from a single vertex by
          iteratively adding the cheapest edge that incorporates a new vertex.
        </p>
        <p className="mt-2">
          <strong>Initialization:</strong> Start with any vertex <InlineMath math="v" />.
          Set <InlineMath math="S = \{v\}" />.
        </p>
        <p>
          <strong>Iteration:</strong> Add the cheapest edge from a vertex in{' '}
          <InlineMath math="S" /> to a vertex outside <InlineMath math="S" />. Add the
          new vertex to <InlineMath math="S" />.
        </p>
        <p>
          <strong>Termination:</strong> When <InlineMath math="S = V(G)" />.
        </p>
      </Definition>

      <h2>Shortest Paths</h2>

      <p>
        How can we find the shortest route from one location to another? How can we find
        the shortest routes from our home to every place in town? This requires finding
        shortest paths from one vertex to all other vertices in a weighted graph.
        Together, these paths form a spanning tree.
      </p>

      <Definition title="Distance in Weighted Graphs">
        <p>
          The <strong>distance</strong> <InlineMath math="d(u, z)" /> in a weighted graph
          is the minimum sum of the weights on the edges in a{' '}
          <InlineMath math="u, z" />-path. We consider only nonnegative weights.
        </p>
      </Definition>

      <p>
        <strong>Dijkstra's Algorithm</strong> solves this problem quickly, using the
        observation that the <InlineMath math="u, v" />-portion of a shortest{' '}
        <InlineMath math="u, z" />-path must be a shortest{' '}
        <InlineMath math="u, v" />-path. It finds optimal routes from{' '}
        <InlineMath math="u" /> to other vertices <InlineMath math="z" /> in increasing
        order of <InlineMath math="d(u, z)" />.
      </p>

      <Definition title="Dijkstra's Algorithm (Algorithm 2.3.5)">
        <p>
          <strong>Input:</strong> A graph (or digraph) with nonnegative edge weights and
          a starting vertex <InlineMath math="u" />. Let <InlineMath math="w(xy)" /> be
          the weight of edge <InlineMath math="xy" /> (or{' '}
          <InlineMath math="\infty" /> if no edge).
        </p>
        <p>
          <strong>Idea:</strong> Maintain the set <InlineMath math="S" /> of vertices to
          which a shortest path from <InlineMath math="u" /> is known. Also maintain a
          tentative distance <InlineMath math="t(z)" /> from <InlineMath math="u" /> to
          each <InlineMath math="z \notin S" />.
        </p>
        <p className="mt-2">
          <strong>Initialization:</strong> Set <InlineMath math="S = \{u\}" />;{' '}
          <InlineMath math="t(u) = 0" />; <InlineMath math="t(z) = w(uz)" /> for{' '}
          <InlineMath math="z \neq u" />.
        </p>
        <p className="mt-2">
          <strong>Iteration:</strong>
        </p>
        <ol className="list-decimal list-inside ml-4 space-y-1">
          <li>
            Select a vertex <InlineMath math="v" /> outside <InlineMath math="S" /> such
            that <InlineMath math="t(v) = \min_{z \notin S} t(z)" />.
          </li>
          <li>
            Add <InlineMath math="v" /> to <InlineMath math="S" />.
          </li>
          <li>
            For each edge <InlineMath math="vz" /> with{' '}
            <InlineMath math="z \notin S" />, update{' '}
            <InlineMath math="t(z) \leftarrow \min\{t(z), t(v) + w(vz)\}" />.
          </li>
        </ol>
        <p className="mt-2">
          Continue until <InlineMath math="S = V(G)" /> or{' '}
          <InlineMath math="t(z) = \infty" /> for all{' '}
          <InlineMath math="z \notin S" />.
        </p>
      </Definition>

      <Example title="Dijkstra's Algorithm">
        <p>
          In a weighted graph, suppose we find shortest paths from vertex{' '}
          <InlineMath math="u" /> to vertices <InlineMath math="a, b, c, d, e" /> with
          distances <InlineMath math="1, 3, 5, 6, 8" />, respectively.
        </p>
        <p className="mt-2">
          To reconstruct the paths, we only need the edge on which each shortest path
          arrives at its destination. The earlier portion of a shortest{' '}
          <InlineMath math="u, z" />-path that reaches <InlineMath math="z" /> on the
          edge <InlineMath math="vz" /> is a shortest <InlineMath math="u, v" />-path.
        </p>
        <p className="mt-2">
          The algorithm can maintain this by recording the "predecessor" vertex whenever
          the tentative distance is updated. The predecessors form the edges of a
          spanning tree rooted at <InlineMath math="u" />.
        </p>
      </Example>

      <Theorem title="Theorem 2.3.7 (Correctness of Dijkstra's Algorithm)">
        <p>
          Given a (di)graph <InlineMath math="G" /> and a vertex{' '}
          <InlineMath math="u \in V(G)" />, Dijkstra's Algorithm computes{' '}
          <InlineMath math="d(u, z)" /> for every <InlineMath math="z \in V(G)" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              We prove by induction on <InlineMath math="|S|" /> that at each iteration:
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>
                For <InlineMath math="z \in S" />,{' '}
                <InlineMath math="t(z) = d(u, z)" />.
              </li>
              <li>
                For <InlineMath math="z \notin S" />, <InlineMath math="t(z)" /> is the
                least length of a <InlineMath math="u, z" />-path reaching{' '}
                <InlineMath math="z" /> directly from <InlineMath math="S" />.
              </li>
            </ol>
            <p className="mt-2">
              When we select <InlineMath math="v" /> (minimum{' '}
              <InlineMath math="t(v)" /> outside <InlineMath math="S" />), any path
              visiting vertices outside <InlineMath math="S" /> before reaching{' '}
              <InlineMath math="v" /> has length at least <InlineMath math="t(v)" />.
              Hence <InlineMath math="d(u, v) = t(v)" />.
            </p>
            <p className="mt-2">
              Updating tentative distances when adding <InlineMath math="v" /> to{' '}
              <InlineMath math="S" /> correctly considers all paths reaching{' '}
              <InlineMath math="z" /> directly from the new <InlineMath math="S" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Breadth-First Search</h2>

      <p>
        The special case of Dijkstra's Algorithm for <strong>unweighted graphs</strong>{' '}
        (all edges have weight 1) is Breadth-First Search (BFS).
      </p>

      <Definition title="Breadth-First Search (Algorithm 2.3.8)">
        <p>
          <strong>Input:</strong> An unweighted graph (or digraph) and start vertex{' '}
          <InlineMath math="u" />.
        </p>
        <p>
          <strong>Idea:</strong> Maintain a set <InlineMath math="R" /> of vertices
          reached but not searched, and a set <InlineMath math="S" /> of vertices
          searched. Use <InlineMath math="R" /> as a <strong>queue</strong> (First-In
          First-Out), so the first vertices found are the first explored.
        </p>
        <p className="mt-2">
          <strong>Initialization:</strong> <InlineMath math="R = \{u\}" />,{' '}
          <InlineMath math="S = \emptyset" />, <InlineMath math="d(u, u) = 0" />.
        </p>
        <p className="mt-2">
          <strong>Iteration:</strong> While <InlineMath math="R \neq \emptyset" />,
          search from the first vertex <InlineMath math="v" /> of{' '}
          <InlineMath math="R" />. Add neighbors of <InlineMath math="v" /> not in{' '}
          <InlineMath math="S \cup R" /> to the back of <InlineMath math="R" /> and
          assign distance <InlineMath math="d(u, v) + 1" />. Move{' '}
          <InlineMath math="v" /> from <InlineMath math="R" /> to{' '}
          <InlineMath math="S" />.
        </p>
      </Definition>

      <p>
        The largest distance from a vertex <InlineMath math="u" /> to another vertex is
        the eccentricity <InlineMath math="\varepsilon(u)" />. Hence we can compute the{' '}
        <strong>diameter</strong> of a graph by running Breadth-First Search from each
        vertex.
      </p>

      <p>
        Like Dijkstra's Algorithm, BFS from <InlineMath math="u" /> yields a tree{' '}
        <InlineMath math="T" /> in which for each vertex <InlineMath math="v" />, the{' '}
        <InlineMath math="u, v" />-path is a shortest <InlineMath math="u, v" />-path.
      </p>

      <h2>The Chinese Postman Problem</h2>

      <Definition title="Chinese Postman Problem">
        <p>
          A mail carrier must traverse all edges in a road network, starting and ending
          at the Post Office. The edges have nonnegative weights representing distance or
          time. We seek a <strong>closed walk</strong> of minimum total length that uses
          all the edges.
        </p>
        <p className="mt-2 text-dark-300">
          Named in honor of the Chinese mathematician Guan Meigu [1962], who proposed it.
        </p>
      </Definition>

      <p>
        If every vertex has even degree, then the graph is Eulerian and the answer is the
        sum of the edge weights. Otherwise, we must repeat some edges.
      </p>

      <p>
        Every traversal is an Eulerian circuit of a graph obtained by duplicating edges.
        Finding the shortest traversal is equivalent to finding the minimum total weight
        of edges whose duplication will make all vertex degrees even.
      </p>

      <Example title="Solving the Chinese Postman Problem">
        <p>
          Consider a graph with eight odd-degree vertices on its outer boundary. To make
          all degrees even, we must pair up the odd vertices with paths.
        </p>
        <p className="mt-2">
          If there are only two odd vertices, use Dijkstra's Algorithm to find the
          shortest path between them.
        </p>
        <p className="mt-2">
          If there are <InlineMath math="2k" /> odd vertices, find shortest paths between
          all pairs using Dijkstra's Algorithm. Then find the minimum total weight of{' '}
          <InlineMath math="k" /> paths that pair up all odd vertices (a weighted
          matching problem).
        </p>
      </Example>

      <h2>Trees in Computer Science (Optional)</h2>

      <Definition title="Rooted Trees">
        <p>
          A <strong>rooted tree</strong> is a tree with one vertex <InlineMath math="r" />
          chosen as <strong>root</strong>. For each vertex <InlineMath math="v" />, let{' '}
          <InlineMath math="P(v)" /> be the unique <InlineMath math="v, r" />-path.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            The <strong>parent</strong> of <InlineMath math="v" /> is its neighbor on{' '}
            <InlineMath math="P(v)" />.
          </li>
          <li>
            The <strong>children</strong> of <InlineMath math="v" /> are its other
            neighbors.
          </li>
          <li>
            The <strong>ancestors</strong> of <InlineMath math="v" /> are the vertices of{' '}
            <InlineMath math="P(v) - v" />.
          </li>
          <li>
            The <strong>descendants</strong> of <InlineMath math="v" /> are vertices{' '}
            <InlineMath math="u" /> such that <InlineMath math="P(u)" /> contains{' '}
            <InlineMath math="v" />.
          </li>
          <li>
            <strong>Leaves</strong> are vertices with no children.
          </li>
        </ul>
      </Definition>

      <Definition title="Binary Trees">
        <p>
          A <strong>binary tree</strong> is a rooted plane tree where each vertex has at
          most two children, and each child is designated as <strong>left</strong> or{' '}
          <strong>right</strong>.
        </p>
        <p className="mt-2">
          Binary trees permit storage of data for quick access. We store each item at a
          leaf and access it by following the path from the root (0 for left, 1 for
          right). The search time is the length of this code word.
        </p>
      </Definition>

      <h3>Huffman's Algorithm</h3>

      <p>
        Given access probabilities among <InlineMath math="n" /> items, we want to place
        them at the leaves of a binary tree to minimize expected search time. This is
        equivalent to optimal prefix-free coding.
      </p>

      <Definition title="Prefix-Free Code">
        <p>
          A binary code is <strong>prefix-free</strong> if no code word is an initial
          portion of another. Then the current word ends as soon as the bits since the
          end of the previous word form a code word.
        </p>
        <p className="mt-2">
          Prefix-free binary codes correspond to the leaves of a binary tree using
          left/right encoding (0 = left, 1 = right).
        </p>
      </Definition>

      <Definition title="Huffman's Algorithm (Algorithm 2.3.13)">
        <p>
          <strong>Input:</strong> Weights (frequencies or probabilities){' '}
          <InlineMath math="p_1, \ldots, p_n" />.
        </p>
        <p>
          <strong>Output:</strong> Prefix-free code (equivalently, a binary tree).
        </p>
        <p className="mt-2">
          <strong>Idea:</strong> Infrequent items should have longer codes; put infrequent
          items deeper by combining them into parent nodes.
        </p>
        <p className="mt-2">
          <strong>Base case:</strong> When <InlineMath math="n = 2" />, the optimal
          length is 1, with 0 and 1 as the codes.
        </p>
        <p className="mt-2">
          <strong>Recursion:</strong> When <InlineMath math="n > 2" />, replace the two
          least likely items <InlineMath math="p, p'" /> with a single item{' '}
          <InlineMath math="q = p + p'" />. Solve for <InlineMath math="n - 1" /> items.
          Then give children with weights <InlineMath math="p, p'" /> to the leaf with
          weight <InlineMath math="q" />.
        </p>
      </Definition>

      <Example title="Huffman Coding">
        <p>
          Consider eight items with frequencies 5, 1, 1, 7, 8, 2, 3, 6. Algorithm 2.3.13
          combines items from the bottom up:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath math="1 + 1 = 2" />
          </li>
          <li>
            <InlineMath math="2 + 2 = 4" />
          </li>
          <li>
            <InlineMath math="3 + 4 = 7" />
          </li>
          <li>
            <InlineMath math="5 + 6 = 11" />
          </li>
          <li>
            <InlineMath math="7 + 7 = 14" />
          </li>
          <li>
            <InlineMath math="8 + 11 = 19" />
          </li>
          <li>
            <InlineMath math="14 + 19 = 33" />
          </li>
        </ul>
        <p className="mt-2">
          The expected code length is <InlineMath math="\sum p_i l_i = 90/33 < 3" />,
          which is less than using fixed-length 3-bit codes for eight items.
        </p>
      </Example>

      <Theorem title="Theorem 2.3.15 (Optimality of Huffman Coding)">
        <p>
          Given a probability distribution <InlineMath math="\{p_i\}" /> on{' '}
          <InlineMath math="n" /> items, Huffman's Algorithm produces the prefix-free
          code with minimum expected length.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Use induction on <InlineMath math="n" />. Every optimal code has least
              likely messages at leaves of greatest depth. Since every leaf at maximum
              depth has a sibling, two least likely messages can be assumed to be
              siblings.
            </p>
            <p className="mt-2">
              Replacing these siblings with their parent (probability{' '}
              <InlineMath math="p_{n-1} + p_n" />) reduces to an{' '}
              <InlineMath math="(n-1)" />-item problem. By the induction hypothesis,
              Huffman's Algorithm is optimal for this. Expanding back gives the optimal
              tree for <InlineMath math="n" /> items.
            </p>
          </div>
        </details>
      </Theorem>

      <p>
        Shannon [1948] proved that for every binary code, the expected length is at least
        the <strong>entropy</strong> of the distribution:{' '}
        <InlineMath math="-\sum p_i \log_2 p_i" />. When each{' '}
        <InlineMath math="p_i" /> is a power of <InlineMath math="1/2" />, the Huffman
        code achieves this bound exactly.
      </p>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Kruskal's Algorithm:</strong> Build a minimum spanning tree by greedily
          adding cheapest edges that don't create cycles.
        </li>
        <li>
          <strong>Prim's Algorithm:</strong> Grow a minimum spanning tree from a single
          vertex by iteratively adding the cheapest edge to a new vertex.
        </li>
        <li>
          <strong>Dijkstra's Algorithm:</strong> Find shortest paths from a source vertex
          by iteratively selecting the vertex with smallest tentative distance and
          updating neighbors.
        </li>
        <li>
          <strong>Breadth-First Search:</strong> Special case of Dijkstra for unweighted
          graphs; explores vertices in order of distance from the source.
        </li>
        <li>
          <strong>Chinese Postman Problem:</strong> Find minimum-weight walk covering all
          edges; reduces to matching odd-degree vertices optimally.
        </li>
        <li>
          <strong>Huffman's Algorithm:</strong> Builds optimal prefix-free codes by
          recursively combining least frequent items.
        </li>
      </ul>
    </LessonLayout>
  );
}
