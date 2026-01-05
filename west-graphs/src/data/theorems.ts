/** Base fields shared by all theorem entries */
interface TheoremEntryBase {
  /** Unique identifier for theorem */
  id: string;
  /** Display title (e.g., "Pythagorean Theorem") */
  title: string;
  /** Mathematical statement of theorem - can contain LaTeX */
  statement: string;
  /** Section ID where this theorem is introduced */
  sectionId: number;
  /** Section title for display */
  sectionTitle?: string;
  /** Category for grouping (e.g., "Fundamentals", "Advanced") */
  category?: string;
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
}

/** Theorem entry without a proof */
interface TheoremEntryWithoutProof extends TheoremEntryBase {
  hasProof?: false;
  proof?: never;
}

/** Theorem entry with a proof - proof content is REQUIRED when hasProof is true */
interface TheoremEntryWithProof extends TheoremEntryBase {
  hasProof: true;
  /** LaTeX-formatted proof content - REQUIRED when hasProof is true */
  proof: string;
}

/**
 * Discriminated union type for theorem entries.
 * Enforces that when hasProof: true, proof content must be provided.
 */
export type TheoremEntry = TheoremEntryWithoutProof | TheoremEntryWithProof;

export const theorems: TheoremEntry[] = [
  // =============================================================================
  // CHAPTER 1: FUNDAMENTAL CONCEPTS
  // =============================================================================
  {
    id: 'def-graph',
    title: 'Graph',
    statement: 'A graph $G$ is a triple $(V(G), E(G), \\psi_G)$ where $V(G)$ is a set of vertices, $E(G)$ is a set of edges, and $\\psi_G$ associates each edge with an unordered pair of vertices. A simple graph has no loops or multiple edges.',
    sectionId: 1,
    category: 'Fundamental Concepts',
    type: 'definition',
  },
  {
    id: 'def-isomorphism',
    title: 'Graph Isomorphism',
    statement: 'Two graphs $G$ and $H$ are isomorphic ($G \\cong H$) if there exists a bijection $f: V(G) \\to V(H)$ such that $uv \\in E(G)$ if and only if $f(u)f(v) \\in E(H)$.',
    sectionId: 1,
    category: 'Fundamental Concepts',
    type: 'definition',
  },
  {
    id: 'thm-eulerian-circuit',
    title: 'Eulerian Circuit Characterization',
    statement: 'A connected graph $G$ has an Eulerian circuit if and only if every vertex of $G$ has even degree.',
    sectionId: 2,
    category: 'Fundamental Concepts',
    type: 'theorem',
    hasProof: true,
    proof: 'Necessity: Each visit to a vertex uses two edges (one in, one out), so degrees must be even. Sufficiency: Start at any vertex and walk without repeating edges. Since degrees are even, you can only get stuck at the start. If edges remain, find a vertex on the circuit adjacent to an unused edge, build another closed walk, and splice it in. Repeat until all edges are used.',
  },
  {
    id: 'thm-eulerian-trail',
    title: 'Eulerian Trail Characterization',
    statement: 'A connected graph $G$ has an Eulerian trail if and only if $G$ has exactly 0 or 2 vertices of odd degree.',
    sectionId: 2,
    category: 'Fundamental Concepts',
    type: 'theorem',
    hasProof: true,
    proof: 'If 0 odd-degree vertices, use the circuit theorem. If 2 odd-degree vertices $u, v$, add edge $uv$ to get all even degrees, find an Eulerian circuit, then remove $uv$ to get a $u$-$v$ trail. Conversely, an Eulerian trail uses each edge once; internal vertices have equal in/out visits (even degree), while endpoints have one extra edge each (odd degree).',
  },
  {
    id: 'thm-handshaking',
    title: 'Handshaking Lemma',
    statement: 'For any graph $G$, $\\sum_{v \\in V(G)} d(v) = 2|E(G)|$.',
    sectionId: 3,
    category: 'Fundamental Concepts',
    type: 'theorem',
    hasProof: true,
    proof: 'Each edge contributes exactly 2 to the sum of degrees (one for each endpoint).',
  },
  {
    id: 'cor-odd-degree',
    title: 'Odd Degree Corollary',
    statement: 'Every graph has an even number of vertices with odd degree.',
    sectionId: 3,
    category: 'Fundamental Concepts',
    type: 'corollary',
    hasProof: true,
    proof: 'By the Handshaking Lemma, $\\sum d(v) = 2|E|$ is even. Split the sum into odd-degree and even-degree vertices. The even-degree sum is even, so the odd-degree sum must also be even. Since each odd-degree term is odd, there must be an even number of such terms.',
  },
  {
    id: 'thm-erdos-gallai',
    title: 'Erdős-Gallai Theorem',
    statement: 'A non-increasing sequence $(d_1, \\ldots, d_n)$ of non-negative integers is graphic if and only if $\\sum d_i$ is even and for each $k \\in [n]$: $\\sum_{i=1}^k d_i \\leq k(k-1) + \\sum_{i=k+1}^n \\min(d_i, k)$.',
    sectionId: 3,
    category: 'Fundamental Concepts',
    type: 'theorem',
  },
  {
    id: 'thm-redei',
    title: "Rédei's Theorem",
    statement: 'Every tournament has a directed Hamiltonian path.',
    sectionId: 4,
    category: 'Fundamental Concepts',
    type: 'theorem',
    hasProof: true,
    proof: 'By induction on $n$. Base case $n=1$ is trivial. For $n > 1$: remove a vertex $v$ and find a Hamiltonian path $P$ in the remaining tournament by induction. If $v$ beats the first vertex of $P$, prepend $v$. If the last vertex beats $v$, append $v$. Otherwise, find consecutive vertices $u_i, u_{i+1}$ on $P$ where $u_i \\to v$ and $v \\to u_{i+1}$, and insert $v$ between them.',
  },

  // =============================================================================
  // CHAPTER 2: TREES AND DISTANCE
  // =============================================================================
  {
    id: 'def-tree',
    title: 'Tree',
    statement: 'A tree is a connected acyclic graph. A forest is an acyclic graph (disjoint union of trees).',
    sectionId: 5,
    category: 'Trees and Distance',
    type: 'definition',
  },
  {
    id: 'thm-tree-characterization',
    title: 'Tree Characterization Theorem',
    statement: 'For a graph $G$ with $n$ vertices, the following are equivalent: (1) $G$ is a tree, (2) $G$ is connected with $n-1$ edges, (3) $G$ is acyclic with $n-1$ edges, (4) there is exactly one path between every pair of vertices, (5) $G$ is connected and every edge is a bridge.',
    sectionId: 5,
    category: 'Trees and Distance',
    type: 'theorem',
    hasProof: true,
    proof: '(1)$\\Rightarrow$(4): Connected gives a path; acyclic ensures uniqueness. (4)$\\Rightarrow$(5): Unique paths means every edge is a bridge. (5)$\\Rightarrow$(2): By induction, connected graph where every edge is a bridge has $n-1$ edges. (2)$\\Rightarrow$(3): Connected with $n-1$ edges cannot have a cycle (removing a cycle edge keeps it connected, contradicting minimum edges). (3)$\\Rightarrow$(1): Acyclic with $n-1$ edges must be connected (a forest with $c$ components has $n-c$ edges).',
  },
  {
    id: 'thm-tree-leaves',
    title: 'Tree Leaves Theorem',
    statement: 'Every tree with at least two vertices has at least two leaves (vertices of degree 1).',
    sectionId: 5,
    category: 'Trees and Distance',
    type: 'theorem',
    hasProof: true,
    proof: 'A tree on $n \\geq 2$ vertices has $n-1$ edges, so sum of degrees is $2(n-1)$. If at most one leaf existed, at least $n-1$ vertices would have degree $\\geq 2$, giving degree sum $\\geq 2(n-1) + 1$, a contradiction. Alternatively: a longest path must have leaves at both endpoints (otherwise it could be extended).',
  },
  {
    id: 'thm-cayley',
    title: "Cayley's Formula",
    statement: 'The number of labeled trees on $n$ vertices is $n^{n-2}$.',
    sectionId: 6,
    category: 'Trees and Distance',
    type: 'theorem',
    hasProof: true,
    proof: 'Prüfer sequence bijection: Each labeled tree on $[n]$ corresponds to a unique sequence in $[n]^{n-2}$. To encode: repeatedly remove the smallest leaf and record its neighbor. To decode: the sequence determines which edges to add. Since there are $n^{n-2}$ such sequences, there are $n^{n-2}$ labeled trees.',
  },
  {
    id: 'thm-matrix-tree',
    title: 'Matrix Tree Theorem',
    statement: 'The number of spanning trees of a graph $G$ equals any cofactor of its Laplacian matrix $L = D - A$.',
    sectionId: 6,
    category: 'Trees and Distance',
    type: 'theorem',
  },
  {
    id: 'thm-kruskal',
    title: "Kruskal's Algorithm",
    statement: 'Adding edges in order of non-decreasing weight while avoiding cycles produces a minimum spanning tree.',
    sectionId: 7,
    category: 'Trees and Distance',
    type: 'theorem',
    hasProof: true,
    proof: 'Let $T$ be the tree produced by Kruskal and $T^*$ be an MST. Consider the first edge $e$ in $T$ not in $T^*$. Adding $e$ to $T^*$ creates a cycle containing some edge $f \\notin T$ (otherwise the algorithm would have chosen $f$). Since $e$ was chosen first, $w(e) \\leq w(f)$. Thus $T^* - f + e$ is a spanning tree with weight $\\leq w(T^*)$, so it is also an MST closer to $T$. Repeat until $T = T^*$.',
  },

  // =============================================================================
  // CHAPTER 3: MATCHINGS AND FACTORS
  // =============================================================================
  {
    id: 'def-matching',
    title: 'Matching',
    statement: 'A matching $M$ in graph $G$ is a set of pairwise non-adjacent edges (no two share a vertex). A perfect matching saturates every vertex.',
    sectionId: 8,
    category: 'Matchings and Factors',
    type: 'definition',
  },
  {
    id: 'thm-hall',
    title: "Hall's Marriage Theorem",
    statement: 'A bipartite graph $G$ with bipartition $(X, Y)$ has a matching saturating $X$ if and only if $|N(S)| \\geq |S|$ for all $S \\subseteq X$.',
    sectionId: 8,
    category: 'Matchings and Factors',
    type: 'theorem',
    hasProof: true,
    proof: 'Necessity is clear. For sufficiency, induct on $|X|$. If $|N(S)| > |S|$ for all proper $S$, match any $x \\in X$ to a neighbor and apply induction. Otherwise, some $S$ has $|N(S)| = |S|$; by induction match $S$ to $N(S)$. Hall\'s condition still holds for $X \\setminus S$ in $G - S - N(S)$, so complete the matching by induction.',
  },
  {
    id: 'thm-konig-egervary',
    title: 'König-Egerváry Theorem',
    statement: 'In a bipartite graph, the maximum size of a matching equals the minimum size of a vertex cover.',
    sectionId: 8,
    category: 'Matchings and Factors',
    type: 'theorem',
    hasProof: true,
    proof: 'A vertex cover must include at least one endpoint of each matched edge, so cover size $\\geq$ matching size. For equality: let $M$ be maximum and $U \\subseteq X$ be vertices reachable from unmatched $X$-vertices via $M$-alternating paths. Set $C = (X \\setminus U) \\cup (Y \\cap U)$. Then $|C| = |M|$ (each $M$-edge contributes exactly one vertex to $C$), and $C$ is a cover (edges from $U$ go to $Y \\cap U$; edges from $X \\setminus U$ have no $Y \\setminus U$ endpoints by maximality of $M$).',
  },
  {
    id: 'thm-berge',
    title: "Berge's Theorem",
    statement: 'A matching $M$ is maximum if and only if there is no $M$-augmenting path.',
    sectionId: 9,
    category: 'Matchings and Factors',
    type: 'theorem',
    hasProof: true,
    proof: 'If an augmenting path $P$ exists, $M \\triangle P$ is a larger matching. Conversely, if $M$ is not maximum, let $M\'$ be larger. In $M \\triangle M\'$, each component is a path or cycle with edges alternating between $M$ and $M\'$. Since $|M\'| > |M|$, some component has more $M\'$-edges than $M$-edges, which must be a path starting and ending with $M\'$-edges—an $M$-augmenting path.',
  },
  {
    id: 'thm-tutte',
    title: "Tutte's Theorem",
    statement: 'A graph $G$ has a perfect matching if and only if $o(G - S) \\leq |S|$ for all $S \\subseteq V(G)$, where $o(H)$ denotes the number of odd components of $H$.',
    sectionId: 10,
    category: 'Matchings and Factors',
    type: 'theorem',
    hasProof: true,
    proof: 'Necessity: A perfect matching must match each odd component of $G-S$ to a vertex in $S$, so $o(G-S) \\leq |S|$. Sufficiency: Assume Tutte\'s condition holds but no perfect matching exists. Add edges until $G$ is edge-maximal without a perfect matching. Then $G$ has a complete graph $K$ on vertices not in any maximum independent set. Analyzing the structure of $G - K$ and using the condition leads to a contradiction.',
  },
  {
    id: 'thm-petersen-matching',
    title: "Petersen's Theorem",
    statement: 'Every bridgeless cubic graph has a perfect matching.',
    sectionId: 10,
    category: 'Matchings and Factors',
    type: 'theorem',
    hasProof: true,
    proof: 'Apply Tutte\'s theorem: for any $S$, we need $o(G-S) \\leq |S|$. Count edges between $S$ and odd components: each odd component has an odd number of vertices with degree 3, so an odd total degree, meaning an odd number of edges to $S$—at least 1. With $k$ odd components and no bridges, each sends $\\geq 1$ edge to $S$. Also, $|S|$ vertices have degree 3, giving $3|S|$ edges from $S$. So $k \\leq 3|S|$, and parity gives $k \\leq |S|$.',
  },

  // =============================================================================
  // CHAPTER 4: CONNECTIVITY AND PATHS
  // =============================================================================
  {
    id: 'def-connectivity',
    title: 'Vertex and Edge Connectivity',
    statement: 'The vertex connectivity $\\kappa(G)$ is the minimum size of a vertex cut (or $n-1$ if $G = K_n$). The edge connectivity $\\kappa\'(G)$ is the minimum size of an edge cut.',
    sectionId: 11,
    category: 'Connectivity and Paths',
    type: 'definition',
  },
  {
    id: 'thm-whitney-inequality',
    title: "Whitney's Inequality",
    statement: 'For any graph $G$: $\\kappa(G) \\leq \\kappa\'(G) \\leq \\delta(G)$.',
    sectionId: 11,
    category: 'Connectivity and Paths',
    type: 'theorem',
    hasProof: true,
    proof: 'For $\\kappa\' \\leq \\delta$: deleting edges incident to a minimum-degree vertex disconnects the graph. For $\\kappa \\leq \\kappa\'$: given a minimum edge cut $F$, for each edge $uv \\in F$ delete $u$ (unless it\'s the only neighbor of some vertex on the other side). This gives a vertex cut of size $\\leq |F|$.',
  },
  {
    id: 'thm-menger-vertex',
    title: "Menger's Theorem (Vertex Version)",
    statement: 'The maximum number of internally disjoint $u$-$v$ paths equals the minimum size of a $u$-$v$ separating set.',
    sectionId: 12,
    category: 'Connectivity and Paths',
    type: 'theorem',
    hasProof: true,
    proof: 'The number of disjoint paths cannot exceed the separator size (each path needs a distinct separator vertex). For the reverse: induct on $|E|$. If every $u$-$v$ separator contains a neighbor of $u$ and a neighbor of $v$, delete an edge $e$ on a shortest path; the separator bound decreases by at most 1, so we find enough paths. Otherwise, use the structure of a minimal separator to split the problem.',
  },
  {
    id: 'thm-menger-edge',
    title: "Menger's Theorem (Edge Version)",
    statement: 'The maximum number of edge-disjoint $u$-$v$ paths equals the minimum size of an edge cut separating $u$ and $v$.',
    sectionId: 12,
    category: 'Connectivity and Paths',
    type: 'theorem',
    hasProof: true,
    proof: 'Reduce to vertex version: construct $G\'$ by splitting each edge $xy$ into $x$-$z_{xy}$-$y$. Edge-disjoint $u$-$v$ paths in $G$ correspond to internally disjoint $u$-$v$ paths in $G\'$, and edge cuts in $G$ correspond to vertex separators in $G\'$ (using the new vertices). Apply vertex Menger to $G\'$.',
  },
  {
    id: 'thm-whitney-2connected',
    title: "Whitney's 2-Connectivity Theorem",
    statement: 'A graph $G$ with at least 3 vertices is 2-connected if and only if every pair of edges lies on a common cycle.',
    sectionId: 12,
    category: 'Connectivity and Paths',
    type: 'theorem',
    hasProof: true,
    proof: 'If 2-connected, any two edges $e = xy$ and $f = uv$ can be put on a cycle: by Menger, there are 2 internally disjoint $x$-$u$ paths. Together with edges $e$ and $f$ and paths from $y$ and $v$, we can form a cycle through both edges. Conversely, if every pair of edges lies on a cycle, there\'s no cut vertex (a cut vertex would separate some edge pair), so $G$ is 2-connected.',
  },
  {
    id: 'thm-max-flow-min-cut',
    title: 'Max-Flow Min-Cut Theorem',
    statement: 'In a network, the maximum value of a flow equals the minimum capacity of a cut separating source from sink.',
    sectionId: 13,
    category: 'Connectivity and Paths',
    type: 'theorem',
    hasProof: true,
    proof: 'Flow value $\\leq$ cut capacity (flow across any cut equals total flow, bounded by capacity). Ford-Fulkerson: while an augmenting path exists in the residual graph, push flow along it. When no augmenting path exists, vertices reachable from source in residual graph form one side of a min-cut; edges crossing this cut are saturated, proving equality.',
  },

  // =============================================================================
  // CHAPTER 5: COLORING OF GRAPHS
  // =============================================================================
  {
    id: 'def-chromatic-number',
    title: 'Chromatic Number',
    statement: 'The chromatic number $\\chi(G)$ is the minimum number of colors needed to properly color the vertices of $G$ (adjacent vertices get different colors).',
    sectionId: 14,
    category: 'Coloring of Graphs',
    type: 'definition',
  },
  {
    id: 'thm-greedy-coloring',
    title: 'Greedy Coloring Bound',
    statement: 'Every graph $G$ satisfies $\\chi(G) \\leq \\Delta(G) + 1$.',
    sectionId: 14,
    category: 'Coloring of Graphs',
    type: 'theorem',
    hasProof: true,
    proof: 'Color vertices one by one in any order. When coloring vertex $v$, at most $d(v) \\leq \\Delta$ neighbors are already colored, so at most $\\Delta$ colors are forbidden. With $\\Delta + 1$ colors available, at least one color is always available for $v$.',
  },
  {
    id: 'thm-brooks',
    title: "Brooks' Theorem",
    statement: 'For a connected graph $G$ that is neither complete nor an odd cycle, $\\chi(G) \\leq \\Delta(G)$.',
    sectionId: 14,
    category: 'Coloring of Graphs',
    type: 'theorem',
    hasProof: true,
    proof: 'If $G$ is not 2-connected, apply induction to blocks. If 2-connected with $\\Delta \\geq 3$: find vertices $u, v$ both adjacent to some vertex $w$ but not to each other. Order vertices so $u, v$ come first and $w$ comes last (BFS from $w$). Give $u, v$ the same color. Greedily color the rest; each vertex (except $w$) has an uncolored neighbor when processed, so $\\Delta$ colors suffice. For $w$, neighbors use $\\leq \\Delta - 1$ colors (since $u, v$ share a color).',
  },
  {
    id: 'thm-turan',
    title: "Turán's Theorem",
    statement: 'The maximum number of edges in an $n$-vertex graph with no $(r+1)$-clique is achieved by the Turán graph $T(n,r)$, which is complete $r$-partite with parts as equal as possible.',
    sectionId: 15,
    category: 'Coloring of Graphs',
    type: 'theorem',
    hasProof: true,
    proof: 'Induction on $n$. Let $G$ be extremal with no $K_{r+1}$. Then $G$ has a $K_r$ (else add edges). Delete this $K_r$; the remaining graph on $n-r$ vertices has no $K_{r+1}$, so by induction has $\\leq t(n-r, r)$ edges. Each deleted vertex contributes $\\leq n-r$ edges to $G$ (not all of $K_r$ can connect to a common vertex outside). Summing gives $\\leq t(n,r)$, achieved by $T(n,r)$.',
  },
  {
    id: 'thm-chromatic-polynomial',
    title: 'Chromatic Polynomial Properties',
    statement: 'For any graph $G$ with $n$ vertices and $m$ edges: $P(G, k) = k^n - mk^{n-1} + \\ldots$ is a polynomial. For edge $e$: $P(G, k) = P(G-e, k) - P(G/e, k)$.',
    sectionId: 16,
    category: 'Coloring of Graphs',
    type: 'theorem',
  },

  // =============================================================================
  // CHAPTER 6: PLANAR GRAPHS
  // =============================================================================
  {
    id: 'def-planar',
    title: 'Planar Graph',
    statement: 'A graph is planar if it can be drawn in the plane with no edge crossings. Such a drawing is called a plane embedding.',
    sectionId: 17,
    category: 'Planar Graphs',
    type: 'definition',
  },
  {
    id: 'thm-euler-formula',
    title: "Euler's Formula",
    statement: 'For a connected plane graph with $n$ vertices, $m$ edges, and $f$ faces: $n - m + f = 2$.',
    sectionId: 17,
    category: 'Planar Graphs',
    type: 'theorem',
    hasProof: true,
    proof: 'Induction on $m$. Base: a tree has $n$ vertices, $n-1$ edges, 1 face, so $n - (n-1) + 1 = 2$. For $m \\geq n$: the graph has a cycle. Remove an edge $e$ from a cycle; this merges two faces into one. By induction, $(n) - (m-1) + (f-1) = 2$, so $n - m + f = 2$.',
  },
  {
    id: 'cor-planar-edges',
    title: 'Planar Edge Bound',
    statement: 'A simple planar graph with $n \\geq 3$ vertices has at most $3n - 6$ edges. If triangle-free, at most $2n - 4$ edges.',
    sectionId: 17,
    category: 'Planar Graphs',
    type: 'corollary',
    hasProof: true,
    proof: 'Each face has $\\geq 3$ edges on its boundary (or $\\geq 4$ if triangle-free). Summing over faces: $\\sum (\\text{face size}) \\geq 3f$ (or $4f$). Each edge borders 2 faces, so $2m \\geq 3f$. By Euler: $f = 2 - n + m$, giving $2m \\geq 3(2-n+m) = 6 - 3n + 3m$, so $m \\leq 3n - 6$. Similarly, $m \\leq 2n - 4$ if triangle-free.',
  },
  {
    id: 'thm-kuratowski',
    title: "Kuratowski's Theorem",
    statement: 'A graph is planar if and only if it contains no subdivision of $K_5$ or $K_{3,3}$.',
    sectionId: 18,
    category: 'Planar Graphs',
    type: 'theorem',
    hasProof: true,
    proof: 'Subdivisions of $K_5$ and $K_{3,3}$ are not planar (edge bound: $K_5$ has 10 edges but $3(5)-6=9$; $K_{3,3}$ is triangle-free with 9 edges but $2(6)-4=8$). Conversely, suppose $G$ is non-planar and edge-minimal. Show $G$ is 3-connected. Contract an edge to get a smaller non-planar graph with a Kuratowski subgraph $H$. Analyze how to "uncontract" to find a subdivision in $G$.',
  },
  {
    id: 'thm-wagner',
    title: "Wagner's Theorem",
    statement: 'A graph is planar if and only if it has no $K_5$ minor and no $K_{3,3}$ minor.',
    sectionId: 18,
    category: 'Planar Graphs',
    type: 'theorem',
  },
  {
    id: 'thm-four-color',
    title: 'Four Color Theorem',
    statement: 'Every planar graph is 4-colorable.',
    sectionId: 19,
    category: 'Planar Graphs',
    type: 'theorem',
    hasProof: true,
    proof: 'The proof (Appel-Haken, 1976; simplified by Robertson et al., 1997) uses a discharging method to show every planar graph contains one of ~600 "reducible configurations." Computer verification shows each configuration can be reduced to a smaller graph, allowing induction. No simple proof is known.',
  },
  {
    id: 'thm-five-color',
    title: 'Five Color Theorem',
    statement: 'Every planar graph is 5-colorable.',
    sectionId: 19,
    category: 'Planar Graphs',
    type: 'theorem',
    hasProof: true,
    proof: 'Induction on $n$. By the edge bound, some vertex $v$ has degree $\\leq 5$. Remove $v$, 5-color the rest by induction. If $d(v) < 5$ or two neighbors share a color, color $v$ with an available color. Otherwise, $v$ has 5 differently-colored neighbors. Consider a Kempe chain argument: swap colors along a 2-colored path. This frees a color for $v$.',
  },

  // =============================================================================
  // CHAPTER 7: EDGES AND CYCLES
  // =============================================================================
  {
    id: 'def-chromatic-index',
    title: 'Chromatic Index',
    statement: 'The chromatic index $\\chi\'(G)$ is the minimum number of colors needed to properly edge-color $G$ (adjacent edges get different colors).',
    sectionId: 20,
    category: 'Edges and Cycles',
    type: 'definition',
  },
  {
    id: 'thm-vizing',
    title: "Vizing's Theorem",
    statement: 'For any simple graph $G$: $\\Delta(G) \\leq \\chi\'(G) \\leq \\Delta(G) + 1$.',
    sectionId: 20,
    category: 'Edges and Cycles',
    type: 'theorem',
    hasProof: true,
    proof: 'Lower bound: edges at a max-degree vertex need distinct colors. Upper bound: induct on $|E|$. Remove edge $xy$, color the rest with $\\Delta+1$ colors. Try to add color to $xy$. If no color works, build a "fan" from $x$ and recolor using a Kempe chain argument on color classes, eventually freeing a color for $xy$.',
  },
  {
    id: 'thm-konig-edge-coloring',
    title: "König's Edge-Coloring Theorem",
    statement: 'For bipartite graphs: $\\chi\'(G) = \\Delta(G)$.',
    sectionId: 20,
    category: 'Edges and Cycles',
    type: 'theorem',
    hasProof: true,
    proof: 'Induction on $|E|$. Remove edge $xy$, color with $\\Delta$ colors. Colors missing at $x$ and $y$ exist (each has degree $< \\Delta$ now). If they share a missing color, use it for $xy$. Otherwise, missing color $a$ at $x$ and $b$ at $y$ differ. Follow the $a$-$b$ alternating path from $y$; in bipartite graphs it cannot reach $x$, so swap colors along it. Now $a$ is missing at both $x$ and $y$.',
  },
  {
    id: 'def-hamiltonian',
    title: 'Hamiltonian Cycle',
    statement: 'A Hamiltonian cycle is a cycle that visits every vertex exactly once. A graph with such a cycle is called Hamiltonian.',
    sectionId: 21,
    category: 'Edges and Cycles',
    type: 'definition',
  },
  {
    id: 'thm-dirac',
    title: "Dirac's Theorem",
    statement: 'If $G$ has $n \\geq 3$ vertices and $\\delta(G) \\geq n/2$, then $G$ is Hamiltonian.',
    sectionId: 21,
    category: 'Edges and Cycles',
    type: 'theorem',
    hasProof: true,
    proof: 'Take a longest path $P = v_1 \\ldots v_k$. Since $P$ is maximal, all neighbors of $v_1$ and $v_k$ are on $P$. If $v_1 v_k \\in E$, we have a cycle. Otherwise, if $v_1 v_i \\in E$ then $v_k v_{i-1} \\notin E$ (else $v_1 \\ldots v_{i-1} v_k \\ldots v_i v_1$ is a cycle). So $d(v_k) \\leq k - 1 - d(v_1)$, giving $d(v_1) + d(v_k) \\leq k-1 < n$, contradicting $\\delta \\geq n/2$. Thus a cycle $C$ exists; if $C \\neq G$, use connectivity to extend, contradiction.',
  },
  {
    id: 'thm-ore',
    title: "Ore's Theorem",
    statement: 'If $G$ has $n \\geq 3$ vertices and $d(u) + d(v) \\geq n$ for all non-adjacent pairs $u, v$, then $G$ is Hamiltonian.',
    sectionId: 21,
    category: 'Edges and Cycles',
    type: 'theorem',
    hasProof: true,
    proof: 'The same proof as Dirac works: on a longest path, the endpoints $v_1, v_k$ must satisfy $d(v_1) + d(v_k) \\geq n$ if non-adjacent. The counting argument shows $d(v_1) + d(v_k) \\leq k-1$, so we need $k = n$. The cycle-closing argument then applies. Note: Ore\'s condition is weaker than Dirac\'s since it only requires the degree sum condition for non-adjacent pairs.',
  },
  {
    id: 'thm-grinberg',
    title: "Grinberg's Theorem",
    statement: 'If a plane graph has a Hamiltonian cycle, then $\\sum_{k \\geq 3} (k-2)(f_k\' - f_k\'\') = 0$, where $f_k\'$ and $f_k\'\'$ are the numbers of $k$-faces inside and outside the cycle.',
    sectionId: 22,
    category: 'Edges and Cycles',
    type: 'theorem',
  },

  // =============================================================================
  // CHAPTER 8: ADDITIONAL TOPICS
  // =============================================================================
  {
    id: 'def-perfect-graph',
    title: 'Perfect Graph',
    statement: 'A graph $G$ is perfect if $\\chi(H) = \\omega(H)$ for every induced subgraph $H$ of $G$.',
    sectionId: 23,
    category: 'Additional Topics',
    type: 'definition',
  },
  {
    id: 'thm-weak-perfect',
    title: 'Weak Perfect Graph Theorem',
    statement: 'A graph $G$ is perfect if and only if its complement $\\overline{G}$ is perfect.',
    sectionId: 23,
    category: 'Additional Topics',
    type: 'theorem',
    hasProof: true,
    proof: 'A replication lemma shows that if $G$ is perfect, so is any graph obtained by "replicating" vertices. Using this, one shows $G$ perfect implies $\\chi(G) \\cdot \\alpha(G) \\geq n$ for all induced subgraphs. Applying this to $\\overline{G}$ (where $\\chi$ and $\\alpha$ swap roles with $\\omega$ and $\\theta$), we get $\\overline{G}$ is also perfect.',
  },
  {
    id: 'thm-strong-perfect',
    title: 'Strong Perfect Graph Theorem',
    statement: 'A graph is perfect if and only if it contains no odd hole and no odd antihole as an induced subgraph.',
    sectionId: 23,
    category: 'Additional Topics',
    type: 'theorem',
  },
  {
    id: 'def-matroid',
    title: 'Matroid',
    statement: 'A matroid $M = (E, \\mathcal{I})$ consists of a ground set $E$ and a collection $\\mathcal{I}$ of independent sets satisfying: (1) $\\emptyset \\in \\mathcal{I}$, (2) if $I \\in \\mathcal{I}$ and $J \\subseteq I$, then $J \\in \\mathcal{I}$, (3) if $I, J \\in \\mathcal{I}$ with $|I| < |J|$, then $\\exists e \\in J \\setminus I$ with $I \\cup \\{e\\} \\in \\mathcal{I}$.',
    sectionId: 24,
    category: 'Additional Topics',
    type: 'definition',
  },
  {
    id: 'thm-matroid-greedy',
    title: 'Matroid Greedy Algorithm',
    statement: 'A set system $(E, \\mathcal{I})$ is a matroid if and only if the greedy algorithm finds a maximum-weight independent set for all weight functions.',
    sectionId: 24,
    category: 'Additional Topics',
    type: 'theorem',
    hasProof: true,
    proof: 'If matroid: greedy builds an independent set $I$ by adding highest-weight elements that maintain independence. By the exchange property, $|I|$ equals the rank. Any independent set of same size has $\\leq$ weight (greedy chose highest weights). Conversely, if greedy works for all weights, the exchange property must hold (otherwise, design weights where greedy fails).',
  },
  {
    id: 'thm-ramsey',
    title: "Ramsey's Theorem",
    statement: 'For all positive integers $s, t$, there exists a minimum $R(s,t)$ such that every red-blue edge-coloring of $K_n$ with $n \\geq R(s,t)$ contains a red $K_s$ or a blue $K_t$.',
    sectionId: 25,
    category: 'Additional Topics',
    type: 'theorem',
    hasProof: true,
    proof: 'Induction: $R(s,1) = R(1,t) = 1$. For $s,t > 1$: take $n = R(s-1,t) + R(s,t-1)$. Pick vertex $v$; partition neighbors by edge color. Red neighbors form set of size $\\geq R(s-1,t)$ or blue neighbors $\\geq R(s,t-1)$. By induction, find red $K_{s-1}$ or blue $K_t$ in red neighborhood (add $v$ for red $K_s$), or red $K_s$ or blue $K_{t-1}$ in blue neighborhood (add $v$ for blue $K_t$).',
  },
  {
    id: 'thm-ramsey-bounds',
    title: 'Ramsey Number Bounds',
    statement: '$R(s,t) \\leq \\binom{s+t-2}{s-1}$. In particular, $R(s,s) \\leq 4^s$ and $R(s,s) > 2^{s/2}$ (Erdős probabilistic lower bound).',
    sectionId: 25,
    category: 'Additional Topics',
    type: 'theorem',
    hasProof: true,
    proof: 'Upper bound: from the recurrence $R(s,t) \\leq R(s-1,t) + R(s,t-1)$, induction gives $R(s,t) \\leq \\binom{s+t-2}{s-1}$. Lower bound (Erdős): color $K_n$ randomly. Expected number of monochromatic $K_s$ is $\\binom{n}{s} 2^{1-\\binom{s}{2}}$. If $< 1$, some coloring avoids mono-$K_s$. This holds when $n < 2^{s/2}$, so $R(s,s) > 2^{s/2}$.',
  },
  {
    id: 'thm-erdos-stone',
    title: 'Erdős-Stone Theorem',
    statement: 'For any graph $H$ with $\\chi(H) = r \\geq 2$: $ex(n, H) = \\left(1 - \\frac{1}{r-1} + o(1)\\right)\\binom{n}{2}$.',
    sectionId: 26,
    category: 'Additional Topics',
    type: 'theorem',
  },
  {
    id: 'thm-giant-component',
    title: 'Giant Component Phase Transition',
    statement: 'In $G(n, c/n)$: if $c < 1$, all components have $O(\\log n)$ vertices a.s. If $c > 1$, there is a unique giant component with $\\Theta(n)$ vertices a.s.',
    sectionId: 27,
    category: 'Additional Topics',
    type: 'theorem',
  },
  {
    id: 'thm-connectivity-threshold',
    title: 'Connectivity Threshold',
    statement: 'The threshold for $G(n,p)$ to be connected is $p = \\frac{\\log n}{n}$.',
    sectionId: 27,
    category: 'Additional Topics',
    type: 'theorem',
  },
  {
    id: 'def-spectrum',
    title: 'Spectrum of a Graph',
    statement: 'The spectrum of $G$ is the multiset of eigenvalues of its adjacency matrix $A(G)$, usually listed as $\\lambda_1 \\geq \\lambda_2 \\geq \\cdots \\geq \\lambda_n$.',
    sectionId: 28,
    category: 'Additional Topics',
    type: 'definition',
  },
  {
    id: 'thm-spectral-bounds',
    title: 'Spectral Bounds',
    statement: '$\\bar{d} \\leq \\lambda_1 \\leq \\Delta$, where $\\bar{d}$ is average degree. Also: $\\chi(G) \\leq 1 + \\lambda_1$ and $\\alpha(G) \\leq \\frac{n(-\\lambda_n)}{\\lambda_1 - \\lambda_n}$ (Hoffman bound).',
    sectionId: 28,
    category: 'Additional Topics',
    type: 'theorem',
  },
  {
    id: 'thm-algebraic-connectivity',
    title: 'Algebraic Connectivity',
    statement: 'The second-smallest Laplacian eigenvalue $\\mu_2 = a(G)$ satisfies: $a(G) > 0$ iff $G$ is connected, and $a(G) \\leq \\kappa(G) \\leq \\kappa\'(G)$.',
    sectionId: 28,
    category: 'Additional Topics',
    type: 'theorem',
  },
];

export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category).filter((c): c is string => Boolean(c)))];
}

export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
