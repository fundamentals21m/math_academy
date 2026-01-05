export interface TheoremEntry {
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
  /** Whether a proof is provided */
  hasProof?: boolean;
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
  /** Optional: LaTeX-formatted proof content */
  proof?: string;
}

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
  },
  {
    id: 'thm-eulerian-trail',
    title: 'Eulerian Trail Characterization',
    statement: 'A connected graph $G$ has an Eulerian trail if and only if $G$ has exactly 0 or 2 vertices of odd degree.',
    sectionId: 2,
    category: 'Fundamental Concepts',
    type: 'theorem',
    hasProof: true,
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
  },
  {
    id: 'thm-tree-leaves',
    title: 'Tree Leaves Theorem',
    statement: 'Every tree with at least two vertices has at least two leaves (vertices of degree 1).',
    sectionId: 5,
    category: 'Trees and Distance',
    type: 'theorem',
    hasProof: true,
  },
  {
    id: 'thm-cayley',
    title: "Cayley's Formula",
    statement: 'The number of labeled trees on $n$ vertices is $n^{n-2}$.',
    sectionId: 6,
    category: 'Trees and Distance',
    type: 'theorem',
    hasProof: true,
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
  },
  {
    id: 'thm-konig-egervary',
    title: 'König-Egerváry Theorem',
    statement: 'In a bipartite graph, the maximum size of a matching equals the minimum size of a vertex cover.',
    sectionId: 8,
    category: 'Matchings and Factors',
    type: 'theorem',
    hasProof: true,
  },
  {
    id: 'thm-berge',
    title: "Berge's Theorem",
    statement: 'A matching $M$ is maximum if and only if there is no $M$-augmenting path.',
    sectionId: 9,
    category: 'Matchings and Factors',
    type: 'theorem',
    hasProof: true,
  },
  {
    id: 'thm-tutte',
    title: "Tutte's Theorem",
    statement: 'A graph $G$ has a perfect matching if and only if $o(G - S) \\leq |S|$ for all $S \\subseteq V(G)$, where $o(H)$ denotes the number of odd components of $H$.',
    sectionId: 10,
    category: 'Matchings and Factors',
    type: 'theorem',
    hasProof: true,
  },
  {
    id: 'thm-petersen-matching',
    title: "Petersen's Theorem",
    statement: 'Every bridgeless cubic graph has a perfect matching.',
    sectionId: 10,
    category: 'Matchings and Factors',
    type: 'theorem',
    hasProof: true,
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
  },
  {
    id: 'thm-menger-vertex',
    title: "Menger's Theorem (Vertex Version)",
    statement: 'The maximum number of internally disjoint $u$-$v$ paths equals the minimum size of a $u$-$v$ separating set.',
    sectionId: 12,
    category: 'Connectivity and Paths',
    type: 'theorem',
    hasProof: true,
  },
  {
    id: 'thm-menger-edge',
    title: "Menger's Theorem (Edge Version)",
    statement: 'The maximum number of edge-disjoint $u$-$v$ paths equals the minimum size of an edge cut separating $u$ and $v$.',
    sectionId: 12,
    category: 'Connectivity and Paths',
    type: 'theorem',
    hasProof: true,
  },
  {
    id: 'thm-whitney-2connected',
    title: "Whitney's 2-Connectivity Theorem",
    statement: 'A graph $G$ with at least 3 vertices is 2-connected if and only if every pair of edges lies on a common cycle.',
    sectionId: 12,
    category: 'Connectivity and Paths',
    type: 'theorem',
    hasProof: true,
  },
  {
    id: 'thm-max-flow-min-cut',
    title: 'Max-Flow Min-Cut Theorem',
    statement: 'In a network, the maximum value of a flow equals the minimum capacity of a cut separating source from sink.',
    sectionId: 13,
    category: 'Connectivity and Paths',
    type: 'theorem',
    hasProof: true,
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
  },
  {
    id: 'thm-brooks',
    title: "Brooks' Theorem",
    statement: 'For a connected graph $G$ that is neither complete nor an odd cycle, $\\chi(G) \\leq \\Delta(G)$.',
    sectionId: 14,
    category: 'Coloring of Graphs',
    type: 'theorem',
    hasProof: true,
  },
  {
    id: 'thm-turan',
    title: "Turán's Theorem",
    statement: 'The maximum number of edges in an $n$-vertex graph with no $(r+1)$-clique is achieved by the Turán graph $T(n,r)$, which is complete $r$-partite with parts as equal as possible.',
    sectionId: 15,
    category: 'Coloring of Graphs',
    type: 'theorem',
    hasProof: true,
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
  },
  {
    id: 'cor-planar-edges',
    title: 'Planar Edge Bound',
    statement: 'A simple planar graph with $n \\geq 3$ vertices has at most $3n - 6$ edges. If triangle-free, at most $2n - 4$ edges.',
    sectionId: 17,
    category: 'Planar Graphs',
    type: 'corollary',
    hasProof: true,
  },
  {
    id: 'thm-kuratowski',
    title: "Kuratowski's Theorem",
    statement: 'A graph is planar if and only if it contains no subdivision of $K_5$ or $K_{3,3}$.',
    sectionId: 18,
    category: 'Planar Graphs',
    type: 'theorem',
    hasProof: true,
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
  },
  {
    id: 'thm-five-color',
    title: 'Five Color Theorem',
    statement: 'Every planar graph is 5-colorable.',
    sectionId: 19,
    category: 'Planar Graphs',
    type: 'theorem',
    hasProof: true,
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
  },
  {
    id: 'thm-konig-edge-coloring',
    title: "König's Edge-Coloring Theorem",
    statement: 'For bipartite graphs: $\\chi\'(G) = \\Delta(G)$.',
    sectionId: 20,
    category: 'Edges and Cycles',
    type: 'theorem',
    hasProof: true,
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
  },
  {
    id: 'thm-ore',
    title: "Ore's Theorem",
    statement: 'If $G$ has $n \\geq 3$ vertices and $d(u) + d(v) \\geq n$ for all non-adjacent pairs $u, v$, then $G$ is Hamiltonian.',
    sectionId: 21,
    category: 'Edges and Cycles',
    type: 'theorem',
    hasProof: true,
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
  },
  {
    id: 'thm-ramsey',
    title: "Ramsey's Theorem",
    statement: 'For all positive integers $s, t$, there exists a minimum $R(s,t)$ such that every red-blue edge-coloring of $K_n$ with $n \\geq R(s,t)$ contains a red $K_s$ or a blue $K_t$.',
    sectionId: 25,
    category: 'Additional Topics',
    type: 'theorem',
    hasProof: true,
  },
  {
    id: 'thm-ramsey-bounds',
    title: 'Ramsey Number Bounds',
    statement: '$R(s,t) \\leq \\binom{s+t-2}{s-1}$. In particular, $R(s,s) \\leq 4^s$ and $R(s,s) > 2^{s/2}$ (Erdős probabilistic lower bound).',
    sectionId: 25,
    category: 'Additional Topics',
    type: 'theorem',
    hasProof: true,
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
