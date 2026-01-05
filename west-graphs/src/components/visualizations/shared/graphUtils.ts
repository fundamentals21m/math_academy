// Graph algorithms and utilities for west-graphs visualizations

import type { Graph, GraphNode, GraphEdge, PathResult, TraversalStep, PresetGraphType } from './types';

// ============================================================================
// Basic Graph Operations
// ============================================================================

/**
 * Get adjacency list representation
 */
export function getAdjacencyList(graph: Graph): Map<string, string[]> {
  const adj = new Map<string, string[]>();

  for (const node of graph.nodes) {
    adj.set(node.id, []);
  }

  for (const edge of graph.edges) {
    adj.get(edge.source)?.push(edge.target);
    if (!graph.directed) {
      adj.get(edge.target)?.push(edge.source);
    }
  }

  return adj;
}

/**
 * Get adjacency matrix representation
 */
export function getAdjacencyMatrix(graph: Graph): number[][] {
  const n = graph.nodes.length;
  const nodeIndex = new Map(graph.nodes.map((node, i) => [node.id, i]));
  const matrix: number[][] = Array(n).fill(null).map(() => Array(n).fill(0));

  for (const edge of graph.edges) {
    const i = nodeIndex.get(edge.source)!;
    const j = nodeIndex.get(edge.target)!;
    const weight = edge.weight ?? 1;
    matrix[i][j] = weight;
    if (!graph.directed) {
      matrix[j][i] = weight;
    }
  }

  return matrix;
}

/**
 * Get degree of a vertex
 */
export function getDegree(graph: Graph, nodeId: string): number {
  const adj = getAdjacencyList(graph);
  return adj.get(nodeId)?.length ?? 0;
}

/**
 * Get all vertex degrees
 */
export function getDegreeSequence(graph: Graph): number[] {
  const adj = getAdjacencyList(graph);
  return graph.nodes.map(node => adj.get(node.id)?.length ?? 0).sort((a, b) => b - a);
}

/**
 * Check if an edge exists between two nodes
 */
export function hasEdge(graph: Graph, source: string, target: string): boolean {
  return graph.edges.some(e =>
    (e.source === source && e.target === target) ||
    (!graph.directed && e.source === target && e.target === source)
  );
}

/**
 * Get neighbors of a node
 */
export function getNeighbors(graph: Graph, nodeId: string): string[] {
  const adj = getAdjacencyList(graph);
  return adj.get(nodeId) ?? [];
}

// ============================================================================
// Traversals
// ============================================================================

/**
 * Breadth-first search
 */
export function bfs(graph: Graph, start: string): TraversalStep[] {
  const steps: TraversalStep[] = [];
  const visited = new Set<string>();
  const queue: string[] = [start];
  const adj = getAdjacencyList(graph);

  visited.add(start);
  steps.push({ node: start, action: 'visit' });

  while (queue.length > 0) {
    const current = queue.shift()!;
    const neighbors = adj.get(current) ?? [];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        steps.push({ node: neighbor, action: 'visit', parent: current });
      }
    }
  }

  return steps;
}

/**
 * Depth-first search
 */
export function dfs(graph: Graph, start: string): TraversalStep[] {
  const steps: TraversalStep[] = [];
  const visited = new Set<string>();
  const adj = getAdjacencyList(graph);

  function dfsRecursive(node: string, parent?: string) {
    visited.add(node);
    steps.push({ node, action: 'visit', parent });

    const neighbors = adj.get(node) ?? [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        steps.push({ node: neighbor, action: 'explore', parent: node });
        dfsRecursive(neighbor, node);
      }
    }

    steps.push({ node, action: 'backtrack', parent });
  }

  dfsRecursive(start);
  return steps;
}

// ============================================================================
// Path Finding
// ============================================================================

/**
 * Find a path between two vertices using BFS
 */
export function findPath(graph: Graph, start: string, end: string): PathResult {
  if (start === end) {
    return { path: [start], found: true };
  }

  const visited = new Set<string>();
  const queue: string[] = [start];
  const parent = new Map<string, string>();
  const adj = getAdjacencyList(graph);

  visited.add(start);

  while (queue.length > 0) {
    const current = queue.shift()!;
    const neighbors = adj.get(current) ?? [];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        parent.set(neighbor, current);

        if (neighbor === end) {
          // Reconstruct path
          const path: string[] = [end];
          let node = end;
          while (parent.has(node)) {
            node = parent.get(node)!;
            path.unshift(node);
          }
          return { path, found: true };
        }

        queue.push(neighbor);
      }
    }
  }

  return { path: [], found: false };
}

/**
 * Find all cycles containing a specific vertex
 */
export function findCycle(graph: Graph, start?: string): string[] | null {
  const adj = getAdjacencyList(graph);
  const visited = new Set<string>();
  const stack: string[] = [];

  function dfsForCycle(node: string, parent: string | null): string[] | null {
    visited.add(node);
    stack.push(node);

    const neighbors = adj.get(node) ?? [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        const result = dfsForCycle(neighbor, node);
        if (result) return result;
      } else if (neighbor !== parent && stack.includes(neighbor)) {
        // Found a cycle
        const cycleStart = stack.indexOf(neighbor);
        return stack.slice(cycleStart);
      }
    }

    stack.pop();
    return null;
  }

  const startNodes = start ? [start] : graph.nodes.map(n => n.id);

  for (const node of startNodes) {
    if (!visited.has(node)) {
      const cycle = dfsForCycle(node, null);
      if (cycle) return cycle;
    }
  }

  return null;
}

// ============================================================================
// Graph Properties
// ============================================================================

/**
 * Check if graph is connected
 */
export function isConnected(graph: Graph): boolean {
  if (graph.nodes.length === 0) return true;

  const visited = new Set<string>();
  const queue: string[] = [graph.nodes[0].id];
  const adj = getAdjacencyList(graph);

  visited.add(graph.nodes[0].id);

  while (queue.length > 0) {
    const current = queue.shift()!;
    const neighbors = adj.get(current) ?? [];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return visited.size === graph.nodes.length;
}

/**
 * Check if graph is a tree
 */
export function isTree(graph: Graph): boolean {
  const n = graph.nodes.length;
  const m = graph.edges.length;

  // A tree has exactly n-1 edges
  if (m !== n - 1) return false;

  // And must be connected
  return isConnected(graph);
}

/**
 * Check if graph is bipartite
 */
export function isBipartite(graph: Graph): { result: boolean; partitions?: [string[], string[]] } {
  if (graph.nodes.length === 0) {
    return { result: true, partitions: [[], []] };
  }

  const color = new Map<string, number>();
  const adj = getAdjacencyList(graph);
  const partA: string[] = [];
  const partB: string[] = [];

  function bfsColor(start: string): boolean {
    const queue: string[] = [start];
    color.set(start, 0);

    while (queue.length > 0) {
      const current = queue.shift()!;
      const currentColor = color.get(current)!;
      const neighbors = adj.get(current) ?? [];

      for (const neighbor of neighbors) {
        if (!color.has(neighbor)) {
          color.set(neighbor, 1 - currentColor);
          queue.push(neighbor);
        } else if (color.get(neighbor) === currentColor) {
          return false;
        }
      }
    }
    return true;
  }

  for (const node of graph.nodes) {
    if (!color.has(node.id)) {
      if (!bfsColor(node.id)) {
        return { result: false };
      }
    }
  }

  for (const [nodeId, c] of color) {
    if (c === 0) partA.push(nodeId);
    else partB.push(nodeId);
  }

  return { result: true, partitions: [partA, partB] };
}

/**
 * Check if graph has an Eulerian circuit
 */
export function hasEulerianCircuit(graph: Graph): boolean {
  if (!isConnected(graph)) return false;

  // All vertices must have even degree
  for (const node of graph.nodes) {
    if (getDegree(graph, node.id) % 2 !== 0) {
      return false;
    }
  }

  return true;
}

/**
 * Check if graph has an Eulerian path
 */
export function hasEulerianPath(graph: Graph): boolean {
  if (!isConnected(graph)) return false;

  let oddCount = 0;
  for (const node of graph.nodes) {
    if (getDegree(graph, node.id) % 2 !== 0) {
      oddCount++;
    }
  }

  // Either 0 or 2 vertices with odd degree
  return oddCount === 0 || oddCount === 2;
}

/**
 * Find Eulerian circuit using Hierholzer's algorithm
 */
export function findEulerianCircuit(graph: Graph): string[] | null {
  if (!hasEulerianCircuit(graph)) return null;

  // Create adjacency list with edge tracking
  const adj = new Map<string, string[]>();
  for (const node of graph.nodes) {
    adj.set(node.id, []);
  }
  for (const edge of graph.edges) {
    adj.get(edge.source)!.push(edge.target);
    if (!graph.directed) {
      adj.get(edge.target)!.push(edge.source);
    }
  }

  const circuit: string[] = [];
  const stack: string[] = [graph.nodes[0].id];

  while (stack.length > 0) {
    const current = stack[stack.length - 1];
    const neighbors = adj.get(current)!;

    if (neighbors.length === 0) {
      circuit.push(stack.pop()!);
    } else {
      const next = neighbors.pop()!;
      // Remove reverse edge for undirected graph
      if (!graph.directed) {
        const reverseNeighbors = adj.get(next)!;
        const idx = reverseNeighbors.indexOf(current);
        if (idx !== -1) reverseNeighbors.splice(idx, 1);
      }
      stack.push(next);
    }
  }

  return circuit.reverse();
}

/**
 * Calculate chromatic number (brute force for small graphs)
 */
export function chromaticNumber(graph: Graph): number {
  const n = graph.nodes.length;
  if (n === 0) return 0;
  if (graph.edges.length === 0) return 1;

  const adj = getAdjacencyList(graph);
  const nodeIds = graph.nodes.map(n => n.id);

  function canColor(colors: number[], numColors: number): boolean {
    for (let i = 0; i < n; i++) {
      const neighbors = adj.get(nodeIds[i]) ?? [];
      for (const neighbor of neighbors) {
        const j = nodeIds.indexOf(neighbor);
        if (colors[i] === colors[j]) return false;
      }
    }
    return true;
  }

  function tryColor(colors: number[], pos: number, numColors: number): boolean {
    if (pos === n) return canColor(colors, numColors);

    for (let c = 0; c < numColors; c++) {
      colors[pos] = c;
      // Check if valid so far
      let valid = true;
      const neighbors = adj.get(nodeIds[pos]) ?? [];
      for (const neighbor of neighbors) {
        const j = nodeIds.indexOf(neighbor);
        if (j < pos && colors[j] === c) {
          valid = false;
          break;
        }
      }
      if (valid && tryColor(colors, pos + 1, numColors)) {
        return true;
      }
    }
    return false;
  }

  for (let k = 1; k <= n; k++) {
    if (tryColor(new Array(n).fill(0), 0, k)) {
      return k;
    }
  }

  return n;
}

// ============================================================================
// Preset Graphs
// ============================================================================

/**
 * Generate a preset graph
 */
export function generatePresetGraph(type: PresetGraphType, params?: { n?: number; m?: number }): Graph {
  switch (type) {
    case 'empty':
      return { nodes: [], edges: [] };

    case 'K5':
      return generateCompleteGraph(5);

    case 'K33':
      return generateCompleteBipartite(3, 3);

    case 'petersen':
      return generatePetersenGraph();

    case 'cycle':
      return generateCycleGraph(params?.n ?? 6);

    case 'path':
      return generatePathGraph(params?.n ?? 5);

    case 'complete':
      return generateCompleteGraph(params?.n ?? 5);

    case 'bipartite':
      return generateCompleteBipartite(params?.n ?? 3, params?.m ?? 3);

    case 'tree':
      return generateRandomTree(params?.n ?? 7);

    case 'grid':
      return generateGridGraph(params?.n ?? 3, params?.m ?? 3);

    case 'cube':
      return generateCubeGraph();

    case 'dodecahedron':
      return generateDodecahedronGraph();

    case 'konigsberg':
      return generateKonigsbergGraph();

    default:
      return { nodes: [], edges: [] };
  }
}

function generateCompleteGraph(n: number): Graph {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  // Arrange in a circle
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
    nodes.push({
      id: `${i}`,
      x: 300 + 120 * Math.cos(angle),
      y: 200 + 120 * Math.sin(angle),
      label: `${i + 1}`
    });
  }

  // Add all edges
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push({ source: `${i}`, target: `${j}` });
    }
  }

  return { nodes, edges };
}

function generateCompleteBipartite(m: number, n: number): Graph {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  // Left partition
  for (let i = 0; i < m; i++) {
    nodes.push({
      id: `a${i}`,
      x: 150,
      y: 80 + (320 / (m + 1)) * (i + 1),
      label: `a${i + 1}`,
      color: '#60a5fa'
    });
  }

  // Right partition
  for (let j = 0; j < n; j++) {
    nodes.push({
      id: `b${j}`,
      x: 450,
      y: 80 + (320 / (n + 1)) * (j + 1),
      label: `b${j + 1}`,
      color: '#f472b6'
    });
  }

  // All edges between partitions
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      edges.push({ source: `a${i}`, target: `b${j}` });
    }
  }

  return { nodes, edges };
}

function generateCycleGraph(n: number): Graph {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
    nodes.push({
      id: `${i}`,
      x: 300 + 120 * Math.cos(angle),
      y: 200 + 120 * Math.sin(angle),
      label: `${i + 1}`
    });
    edges.push({ source: `${i}`, target: `${(i + 1) % n}` });
  }

  return { nodes, edges };
}

function generatePathGraph(n: number): Graph {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  for (let i = 0; i < n; i++) {
    nodes.push({
      id: `${i}`,
      x: 100 + (400 / (n - 1)) * i,
      y: 200,
      label: `${i + 1}`
    });
    if (i > 0) {
      edges.push({ source: `${i - 1}`, target: `${i}` });
    }
  }

  return { nodes, edges };
}

function generateRandomTree(n: number): Graph {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  // Create nodes
  for (let i = 0; i < n; i++) {
    nodes.push({
      id: `${i}`,
      x: 100 + Math.random() * 400,
      y: 80 + Math.random() * 320,
      label: `${i + 1}`
    });
  }

  // Add edges to form a tree (each new node connects to a random existing node)
  for (let i = 1; i < n; i++) {
    const parent = Math.floor(Math.random() * i);
    edges.push({ source: `${parent}`, target: `${i}` });
  }

  return { nodes, edges };
}

function generateGridGraph(rows: number, cols: number): Graph {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  const spacing = Math.min(400 / (cols - 1), 320 / (rows - 1));
  const offsetX = (600 - (cols - 1) * spacing) / 2;
  const offsetY = (400 - (rows - 1) * spacing) / 2;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const id = `${r}-${c}`;
      nodes.push({
        id,
        x: offsetX + c * spacing,
        y: offsetY + r * spacing
      });

      // Horizontal edge
      if (c > 0) {
        edges.push({ source: `${r}-${c - 1}`, target: id });
      }
      // Vertical edge
      if (r > 0) {
        edges.push({ source: `${r - 1}-${c}`, target: id });
      }
    }
  }

  return { nodes, edges };
}

function generatePetersenGraph(): Graph {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  // Outer pentagon
  for (let i = 0; i < 5; i++) {
    const angle = (2 * Math.PI * i) / 5 - Math.PI / 2;
    nodes.push({
      id: `o${i}`,
      x: 300 + 140 * Math.cos(angle),
      y: 200 + 140 * Math.sin(angle),
      label: `${i + 1}`
    });
  }

  // Inner pentagram
  for (let i = 0; i < 5; i++) {
    const angle = (2 * Math.PI * i) / 5 - Math.PI / 2;
    nodes.push({
      id: `i${i}`,
      x: 300 + 60 * Math.cos(angle),
      y: 200 + 60 * Math.sin(angle),
      label: `${i + 6}`
    });
  }

  // Outer edges (pentagon)
  for (let i = 0; i < 5; i++) {
    edges.push({ source: `o${i}`, target: `o${(i + 1) % 5}` });
  }

  // Inner edges (pentagram)
  for (let i = 0; i < 5; i++) {
    edges.push({ source: `i${i}`, target: `i${(i + 2) % 5}` });
  }

  // Spokes
  for (let i = 0; i < 5; i++) {
    edges.push({ source: `o${i}`, target: `i${i}` });
  }

  return { nodes, edges };
}

function generateCubeGraph(): Graph {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  // 3D cube projected to 2D
  const inner = 60;
  const outer = 140;

  // Outer square
  nodes.push({ id: '0', x: 300 - outer, y: 200 - outer, label: '1' });
  nodes.push({ id: '1', x: 300 + outer, y: 200 - outer, label: '2' });
  nodes.push({ id: '2', x: 300 + outer, y: 200 + outer, label: '3' });
  nodes.push({ id: '3', x: 300 - outer, y: 200 + outer, label: '4' });

  // Inner square
  nodes.push({ id: '4', x: 300 - inner, y: 200 - inner, label: '5' });
  nodes.push({ id: '5', x: 300 + inner, y: 200 - inner, label: '6' });
  nodes.push({ id: '6', x: 300 + inner, y: 200 + inner, label: '7' });
  nodes.push({ id: '7', x: 300 - inner, y: 200 + inner, label: '8' });

  // Outer square edges
  edges.push({ source: '0', target: '1' });
  edges.push({ source: '1', target: '2' });
  edges.push({ source: '2', target: '3' });
  edges.push({ source: '3', target: '0' });

  // Inner square edges
  edges.push({ source: '4', target: '5' });
  edges.push({ source: '5', target: '6' });
  edges.push({ source: '6', target: '7' });
  edges.push({ source: '7', target: '4' });

  // Connecting edges
  edges.push({ source: '0', target: '4' });
  edges.push({ source: '1', target: '5' });
  edges.push({ source: '2', target: '6' });
  edges.push({ source: '3', target: '7' });

  return { nodes, edges };
}

function generateDodecahedronGraph(): Graph {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  // Create 20 vertices in 4 layers
  const r1 = 50, r2 = 100, r3 = 130, r4 = 160;

  // Top pentagon (5 nodes)
  for (let i = 0; i < 5; i++) {
    const angle = (2 * Math.PI * i) / 5 - Math.PI / 2;
    nodes.push({ id: `t${i}`, x: 300 + r1 * Math.cos(angle), y: 200 - r2, label: `${i + 1}` });
  }

  // Upper middle ring (5 nodes)
  for (let i = 0; i < 5; i++) {
    const angle = (2 * Math.PI * i) / 5 - Math.PI / 2 + Math.PI / 5;
    nodes.push({ id: `u${i}`, x: 300 + r3 * Math.cos(angle), y: 200 - r1, label: `${i + 6}` });
  }

  // Lower middle ring (5 nodes)
  for (let i = 0; i < 5; i++) {
    const angle = (2 * Math.PI * i) / 5 - Math.PI / 2;
    nodes.push({ id: `l${i}`, x: 300 + r3 * Math.cos(angle), y: 200 + r1, label: `${i + 11}` });
  }

  // Bottom pentagon (5 nodes)
  for (let i = 0; i < 5; i++) {
    const angle = (2 * Math.PI * i) / 5 - Math.PI / 2 + Math.PI / 5;
    nodes.push({ id: `b${i}`, x: 300 + r1 * Math.cos(angle), y: 200 + r2, label: `${i + 16}` });
  }

  // Top pentagon edges
  for (let i = 0; i < 5; i++) {
    edges.push({ source: `t${i}`, target: `t${(i + 1) % 5}` });
  }

  // Bottom pentagon edges
  for (let i = 0; i < 5; i++) {
    edges.push({ source: `b${i}`, target: `b${(i + 1) % 5}` });
  }

  // Connect top to upper middle
  for (let i = 0; i < 5; i++) {
    edges.push({ source: `t${i}`, target: `u${i}` });
    edges.push({ source: `t${i}`, target: `u${(i + 4) % 5}` });
  }

  // Connect upper middle to lower middle
  for (let i = 0; i < 5; i++) {
    edges.push({ source: `u${i}`, target: `l${i}` });
  }

  // Connect lower middle to bottom
  for (let i = 0; i < 5; i++) {
    edges.push({ source: `l${i}`, target: `b${i}` });
    edges.push({ source: `l${i}`, target: `b${(i + 1) % 5}` });
  }

  return { nodes, edges };
}

function generateKonigsbergGraph(): Graph {
  // The seven bridges of Königsberg (multigraph with 4 vertices)
  const nodes: GraphNode[] = [
    { id: 'A', x: 300, y: 100, label: 'A' },
    { id: 'B', x: 150, y: 250, label: 'B' },
    { id: 'C', x: 450, y: 250, label: 'C' },
    { id: 'D', x: 300, y: 350, label: 'D' }
  ];

  const edges: GraphEdge[] = [
    { source: 'A', target: 'B' },
    { source: 'A', target: 'B' }, // Double edge
    { source: 'A', target: 'C' },
    { source: 'A', target: 'C' }, // Double edge
    { source: 'B', target: 'D' },
    { source: 'C', target: 'D' },
    { source: 'B', target: 'C' }
  ];

  return { nodes, edges };
}

// ============================================================================
// Graph Modification
// ============================================================================

/**
 * Add a node to the graph
 */
export function addNode(graph: Graph, x: number, y: number, label?: string): Graph {
  const id = `n${Date.now()}`;
  return {
    ...graph,
    nodes: [...graph.nodes, { id, x, y, label: label ?? `${graph.nodes.length + 1}` }]
  };
}

/**
 * Remove a node and all its edges
 */
export function removeNode(graph: Graph, nodeId: string): Graph {
  return {
    ...graph,
    nodes: graph.nodes.filter(n => n.id !== nodeId),
    edges: graph.edges.filter(e => e.source !== nodeId && e.target !== nodeId)
  };
}

/**
 * Add an edge to the graph
 */
export function addEdge(graph: Graph, source: string, target: string, weight?: number): Graph {
  if (hasEdge(graph, source, target)) return graph;

  return {
    ...graph,
    edges: [...graph.edges, { source, target, weight }]
  };
}

/**
 * Remove an edge
 */
export function removeEdge(graph: Graph, source: string, target: string): Graph {
  return {
    ...graph,
    edges: graph.edges.filter(e =>
      !((e.source === source && e.target === target) ||
        (!graph.directed && e.source === target && e.target === source))
    )
  };
}

/**
 * Update node position
 */
export function moveNode(graph: Graph, nodeId: string, x: number, y: number): Graph {
  return {
    ...graph,
    nodes: graph.nodes.map(n => n.id === nodeId ? { ...n, x, y } : n)
  };
}
