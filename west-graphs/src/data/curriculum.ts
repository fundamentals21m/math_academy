// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Define your course structure here. The curriculum is organized by Parts,
// where each Part contains multiple Sections.
// =============================================================================

/**
 * Individual section within a part
 */
export interface Section {
  id: number;
  title: string;
  slug: string;
  description: string;
}

/**
 * Part containing multiple sections
 */
export interface Part {
  id: number;
  title: string;
  slug: string;
  sections: Section[];
}

/**
 * Complete curriculum structure
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // CHAPTER 1: FUNDAMENTAL CONCEPTS
  // ==========================================================================
  {
    id: 1,
    title: 'Fundamental Concepts',
    slug: 'fundamental-concepts',
    sections: [
      {
        id: 1,
        title: '1.1 What Is a Graph?',
        slug: 'what-is-a-graph',
        description: 'Definitions, graphs as models, matrices, isomorphism, and special graphs.',
      },
      {
        id: 2,
        title: '1.2 Paths, Cycles, and Trails',
        slug: 'paths-cycles-trails',
        description: 'Connection in graphs, bipartite graphs, and Eulerian circuits.',
      },
      {
        id: 3,
        title: '1.3 Vertex Degrees and Counting',
        slug: 'vertex-degrees-counting',
        description: 'Counting arguments, extremal problems, and graphic sequences.',
      },
      {
        id: 4,
        title: '1.4 Directed Graphs',
        slug: 'directed-graphs',
        description: 'Digraph definitions, vertex degrees, Eulerian digraphs, and tournaments.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 2: TREES AND DISTANCE
  // ==========================================================================
  {
    id: 2,
    title: 'Trees and Distance',
    slug: 'trees-and-distance',
    sections: [
      {
        id: 5,
        title: '2.1 Basic Properties',
        slug: 'basic-properties-trees',
        description: 'Properties of trees, distance in graphs, and spanning trees.',
      },
      {
        id: 6,
        title: '2.2 Spanning Trees and Enumeration',
        slug: 'spanning-trees-enumeration',
        description: 'Enumeration of trees, Cayley\'s formula, and the Matrix Tree Theorem.',
      },
      {
        id: 7,
        title: '2.3 Optimization and Trees',
        slug: 'optimization-trees',
        description: 'Minimum spanning trees, shortest paths, and Dijkstra\'s algorithm.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 3: MATCHINGS AND FACTORS
  // ==========================================================================
  {
    id: 3,
    title: 'Matchings and Factors',
    slug: 'matchings-and-factors',
    sections: [
      {
        id: 8,
        title: '3.1 Matchings and Covers',
        slug: 'matchings-covers',
        description: 'Maximum matchings, Hall\'s theorem, and the König-Egerváry theorem.',
      },
      {
        id: 9,
        title: '3.2 Algorithms and Applications',
        slug: 'matching-algorithms',
        description: 'Bipartite matching algorithms, weighted matching, and stable matchings.',
      },
      {
        id: 10,
        title: '3.3 Matchings in General Graphs',
        slug: 'general-matchings',
        description: 'Tutte\'s theorem, f-factors, and Edmonds\' blossom algorithm.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 4: CONNECTIVITY AND PATHS
  // ==========================================================================
  {
    id: 4,
    title: 'Connectivity and Paths',
    slug: 'connectivity-and-paths',
    sections: [
      {
        id: 11,
        title: '4.1 Cuts and Connectivity',
        slug: 'cuts-connectivity',
        description: 'Vertex and edge connectivity, blocks, and cut-vertices.',
      },
      {
        id: 12,
        title: '4.2 k-connected Graphs',
        slug: 'k-connected-graphs',
        description: '2-connected graphs, Menger\'s theorem, and ear decomposition.',
      },
      {
        id: 13,
        title: '4.3 Network Flow Problems',
        slug: 'network-flow',
        description: 'Maximum flow, min-cut max-flow theorem, and integral flows.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 5: COLORING OF GRAPHS
  // ==========================================================================
  {
    id: 5,
    title: 'Coloring of Graphs',
    slug: 'coloring-of-graphs',
    sections: [
      {
        id: 14,
        title: '5.1 Vertex Colorings and Upper Bounds',
        slug: 'vertex-colorings',
        description: 'Chromatic number, greedy coloring, and Brooks\' theorem.',
      },
      {
        id: 15,
        title: '5.2 Structure of k-chromatic Graphs',
        slug: 'k-chromatic-structure',
        description: 'Turán\'s theorem, color-critical graphs, and forced subdivisions.',
      },
      {
        id: 16,
        title: '5.3 Enumerative Aspects',
        slug: 'enumerative-aspects',
        description: 'Chromatic polynomials, chordal graphs, and perfect graphs.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 6: PLANAR GRAPHS
  // ==========================================================================
  {
    id: 6,
    title: 'Planar Graphs',
    slug: 'planar-graphs',
    sections: [
      {
        id: 17,
        title: '6.1 Embeddings and Euler\'s Formula',
        slug: 'embeddings-euler',
        description: 'Plane drawings, dual graphs, and Euler\'s formula.',
      },
      {
        id: 18,
        title: '6.2 Characterization of Planar Graphs',
        slug: 'planar-characterization',
        description: 'Kuratowski\'s theorem and planarity testing.',
      },
      {
        id: 19,
        title: '6.3 Parameters of Planarity',
        slug: 'planarity-parameters',
        description: 'Coloring planar graphs, crossing number, and higher genus surfaces.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 7: EDGES AND CYCLES
  // ==========================================================================
  {
    id: 7,
    title: 'Edges and Cycles',
    slug: 'edges-and-cycles',
    sections: [
      {
        id: 20,
        title: '7.1 Line Graphs and Edge-coloring',
        slug: 'line-graphs-edge-coloring',
        description: 'Edge chromatic number, Vizing\'s theorem, and line graph characterization.',
      },
      {
        id: 21,
        title: '7.2 Hamiltonian Cycles',
        slug: 'hamiltonian-cycles',
        description: 'Necessary and sufficient conditions for Hamiltonian cycles.',
      },
      {
        id: 22,
        title: '7.3 Planarity, Coloring, and Cycles',
        slug: 'planarity-coloring-cycles',
        description: 'Tait\'s theorem, Grinberg\'s theorem, and nowhere-zero flows.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 8: ADDITIONAL TOPICS (OPTIONAL)
  // ==========================================================================
  {
    id: 8,
    title: 'Additional Topics',
    slug: 'additional-topics',
    sections: [
      {
        id: 23,
        title: '8.1 Perfect Graphs',
        slug: 'perfect-graphs',
        description: 'The perfect graph theorem, chordal graphs, and imperfect graphs.',
      },
      {
        id: 24,
        title: '8.2 Matroids',
        slug: 'matroids',
        description: 'Hereditary systems, matroid properties, duality, and intersection.',
      },
      {
        id: 25,
        title: '8.3 Ramsey Theory',
        slug: 'ramsey-theory',
        description: 'Ramsey\'s theorem, Ramsey numbers, and graph Ramsey theory.',
      },
      {
        id: 26,
        title: '8.4 More Extremal Problems',
        slug: 'more-extremal-problems',
        description: 'Encodings, branchings, list coloring, and circumference.',
      },
      {
        id: 27,
        title: '8.5 Random Graphs',
        slug: 'random-graphs',
        description: 'Existence and expectation, threshold functions, and evolution.',
      },
      {
        id: 28,
        title: '8.6 Eigenvalues of Graphs',
        slug: 'eigenvalues-graphs',
        description: 'Characteristic polynomial, eigenvalues, and strongly regular graphs.',
      },
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get section by ID
 */
export function getSectionById(id: number): Section | undefined {
  for (const part of curriculum) {
    const section = part.sections.find((s) => s.id === id);
    if (section) return section;
  }
  return undefined;
}

/**
 * Get part containing a section
 */
export function getPartBySectionId(sectionId: number): Part | undefined {
  return curriculum.find((part) =>
    part.sections.some((section) => section.id === sectionId)
  );
}

/**
 * Get adjacent sections (previous and next)
 */
export function getAdjacentSections(sectionId: number): {
  prev: Section | null;
  next: Section | null;
} {
  const allSections = curriculum.flatMap((part) => part.sections);
  const index = allSections.findIndex((s) => s.id === sectionId);

  return {
    prev: index > 0 ? allSections[index - 1] : null,
    next: index < allSections.length - 1 ? allSections[index + 1] : null,
  };
}

/**
 * Get total number of sections
 */
export function getTotalSections(): number {
  return curriculum.reduce((total, part) => total + part.sections.length, 0);
}

/**
 * Get all sections as a flat array
 */
export function getAllSections(): Section[] {
  return curriculum.flatMap((part) => part.sections);
}

/**
 * Get section index (position in course)
 */
export function getSectionIndex(sectionId: number): number {
  const allSections = getAllSections();
  return allSections.findIndex((s) => s.id === sectionId);
}
