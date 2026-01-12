// MatchingExplorer - Bipartite matching visualization
// Section 8: Matchings and Covers

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Graph, GraphNode, GraphEdge } from './shared/types';
import {
  clearCanvas,
  drawGrid,
  drawNode,
  drawEdge,
  findNodeAtPoint,
  getCanvasCoordinates,
  COLORS
} from './shared/canvasUtils';
import {
  getAdjacencyList
} from './shared/graphUtils';

interface Props {
  className?: string;
}

// Generate a bipartite graph
function generateBipartiteGraph(m: number, n: number, edges: [number, number][]): Graph {
  const nodes: GraphNode[] = [];

  // Left partition
  for (let i = 0; i < m; i++) {
    nodes.push({
      id: `L${i}`,
      x: 150,
      y: 80 + (320 / (m + 1)) * (i + 1),
      label: `${i + 1}`,
      color: '#60a5fa'
    });
  }

  // Right partition
  for (let j = 0; j < n; j++) {
    nodes.push({
      id: `R${j}`,
      x: 450,
      y: 80 + (320 / (n + 1)) * (j + 1),
      label: `${String.fromCharCode(65 + j)}`,
      color: '#f472b6'
    });
  }

  const graphEdges: GraphEdge[] = edges.map(([i, j]) => ({
    source: `L${i}`,
    target: `R${j}`
  }));

  return { nodes, edges: graphEdges };
}

// Preset bipartite graphs
const PRESETS = [
  {
    name: 'Job Assignment',
    graph: generateBipartiteGraph(4, 4, [[0,0],[0,1],[1,1],[1,2],[2,2],[2,3],[3,0],[3,3]])
  },
  {
    name: 'Marriage Problem',
    graph: generateBipartiteGraph(3, 3, [[0,0],[0,1],[1,0],[1,1],[1,2],[2,1],[2,2]])
  },
  {
    name: 'Hall\'s Counter',
    graph: generateBipartiteGraph(3, 2, [[0,0],[0,1],[1,0],[1,1],[2,0],[2,1]])
  },
  {
    name: 'Perfect Matching',
    graph: generateBipartiteGraph(4, 4, [[0,0],[0,1],[1,1],[1,2],[2,2],[2,3],[3,3],[3,0]])
  }
];

export function MatchingExplorer({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [graph, setGraph] = useState<Graph>(PRESETS[0].graph);
  const [matching, setMatching] = useState<Set<string>>(new Set());
  const [augmentingPath, setAugmentingPath] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [_hoveredEdge, _setHoveredEdge] = useState<GraphEdge | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [showVertexCover, setShowVertexCover] = useState(false);
  const [vertexCover, setVertexCover] = useState<Set<string>>(new Set());

  const width = 600;
  const height = 400;

  // Find augmenting path using BFS
  const _findAugmentingPath = useCallback((): string[] | null => {
    const leftNodes = graph.nodes.filter(n => n.id.startsWith('L'));
    const _adj = getAdjacencyList(graph);

    // Find unmatched left vertex
    const unmatchedLeft = leftNodes.find(n => {
      for (const edge of graph.edges) {
        if ((edge.source === n.id || edge.target === n.id) &&
            matching.has(`${edge.source}-${edge.target}`)) {
          return false;
        }
      }
      return true;
    });

    if (!unmatchedLeft) return null;

    // BFS for augmenting path
    const queue: { node: string; path: string[] }[] = [{ node: unmatchedLeft.id, path: [unmatchedLeft.id] }];
    const visited = new Set<string>([unmatchedLeft.id]);

    while (queue.length > 0) {
      const { node, path } = queue.shift()!;
      const isLeft = node.startsWith('L');

      // Get neighbors
      const neighbors: string[] = [];
      for (const edge of graph.edges) {
        if (edge.source === node) neighbors.push(edge.target);
        if (edge.target === node) neighbors.push(edge.source);
      }

      for (const neighbor of neighbors) {
        if (visited.has(neighbor)) continue;

        const edgeKey1 = `${node}-${neighbor}`;
        const edgeKey2 = `${neighbor}-${node}`;
        const edgeInMatching = matching.has(edgeKey1) || matching.has(edgeKey2);

        // Alternating: if we're at left vertex, take non-matching edge
        // If we're at right vertex, take matching edge
        if (isLeft && !edgeInMatching) {
          const newPath = [...path, neighbor];

          // Check if neighbor is unmatched right vertex
          const neighborMatched = [...matching].some(e => e.includes(neighbor));
          if (!neighborMatched) {
            return newPath; // Found augmenting path!
          }

          visited.add(neighbor);
          queue.push({ node: neighbor, path: newPath });
        } else if (!isLeft && edgeInMatching) {
          visited.add(neighbor);
          queue.push({ node: neighbor, path: [...path, neighbor] });
        }
      }
    }

    return null;
  }, [graph, matching]);

  // Apply augmenting path to increase matching
  const _augment = useCallback((path: string[]) => {
    const newMatching = new Set(matching);

    for (let i = 0; i < path.length - 1; i++) {
      const edgeKey1 = `${path[i]}-${path[i + 1]}`;
      const edgeKey2 = `${path[i + 1]}-${path[i]}`;

      if (i % 2 === 0) {
        // Add to matching
        newMatching.add(edgeKey1);
      } else {
        // Remove from matching
        newMatching.delete(edgeKey1);
        newMatching.delete(edgeKey2);
      }
    }

    setMatching(newMatching);
  }, [matching]);

  // Find maximum matching
  const findMaximumMatching = () => {
    setIsAnimating(true);
    let current = new Set<string>();
    setMatching(current);

    const step = () => {
      // This is a simplified version - in reality we'd animate this
      let changed = true;
      while (changed) {
        changed = false;
        const path = findAugmentingPathFromMatching(current);
        if (path) {
          current = augmentMatching(current, path);
          changed = true;
        }
      }
      setMatching(current);
      setIsAnimating(false);
    };

    setTimeout(step, 100);
  };

  // Helper for findMaximumMatching
  const findAugmentingPathFromMatching = (m: Set<string>): string[] | null => {
    const leftNodes = graph.nodes.filter(n => n.id.startsWith('L'));

    for (const startNode of leftNodes) {
      // Check if unmatched
      let isMatched = false;
      for (const edge of m) {
        if (edge.includes(startNode.id)) {
          isMatched = true;
          break;
        }
      }
      if (isMatched) continue;

      // BFS
      const queue: { node: string; path: string[] }[] = [{ node: startNode.id, path: [startNode.id] }];
      const visited = new Set<string>([startNode.id]);

      while (queue.length > 0) {
        const { node, path } = queue.shift()!;
        const isLeft = node.startsWith('L');

        for (const edge of graph.edges) {
          let neighbor: string | null = null;
          if (edge.source === node) neighbor = edge.target;
          if (edge.target === node) neighbor = edge.source;
          if (!neighbor || visited.has(neighbor)) continue;

          const edgeKey1 = `${node}-${neighbor}`;
          const edgeKey2 = `${neighbor}-${node}`;
          const edgeInM = m.has(edgeKey1) || m.has(edgeKey2);

          if (isLeft && !edgeInM) {
            const newPath = [...path, neighbor];
            const neighborMatched = [...m].some(e => e.includes(neighbor!));
            if (!neighborMatched) {
              return newPath;
            }
            visited.add(neighbor);
            queue.push({ node: neighbor, path: newPath });
          } else if (!isLeft && edgeInM) {
            visited.add(neighbor);
            queue.push({ node: neighbor, path: [...path, neighbor] });
          }
        }
      }
    }
    return null;
  };

  const augmentMatching = (m: Set<string>, path: string[]): Set<string> => {
    const newM = new Set(m);
    for (let i = 0; i < path.length - 1; i++) {
      const edgeKey1 = `${path[i]}-${path[i + 1]}`;
      const edgeKey2 = `${path[i + 1]}-${path[i]}`;
      if (i % 2 === 0) {
        newM.add(edgeKey1);
      } else {
        newM.delete(edgeKey1);
        newM.delete(edgeKey2);
      }
    }
    return newM;
  };

  // Compute vertex cover (König's theorem: |max matching| = |min vertex cover|)
  useEffect(() => {
    if (!showVertexCover) {
      setVertexCover(new Set());
      return;
    }

    // Simple vertex cover: for each edge in matching, add one endpoint
    // This gives a vertex cover of size |matching|
    const cover = new Set<string>();
    const matchedRight = new Set<string>();

    for (const edgeKey of matching) {
      const [_left, right] = edgeKey.split('-');
      matchedRight.add(right);
    }

    // Add matched right vertices
    for (const right of matchedRight) {
      cover.add(right);
    }

    // Add unmatched left vertices that have edges
    const matchedLeft = new Set<string>();
    for (const edgeKey of matching) {
      const [left] = edgeKey.split('-');
      matchedLeft.add(left);
    }

    for (const node of graph.nodes.filter(n => n.id.startsWith('L'))) {
      if (!matchedLeft.has(node.id)) {
        const hasEdge = graph.edges.some(e => e.source === node.id || e.target === node.id);
        if (hasEdge) {
          cover.add(node.id);
        }
      }
    }

    setVertexCover(cover);
  }, [showVertexCover, matching, graph]);

  // Check Hall's condition
  const checkHallCondition = (): { satisfied: boolean; violatingSet?: string[] } => {
    const leftNodes = graph.nodes.filter(n => n.id.startsWith('L'));

    // Check all subsets (for small graphs)
    const n = leftNodes.length;
    for (let mask = 1; mask < (1 << n); mask++) {
      const subset = leftNodes.filter((_, i) => mask & (1 << i));
      const neighbors = new Set<string>();

      for (const node of subset) {
        for (const edge of graph.edges) {
          if (edge.source === node.id) neighbors.add(edge.target);
          if (edge.target === node.id) neighbors.add(edge.source);
        }
      }

      if (neighbors.size < subset.length) {
        return { satisfied: false, violatingSet: subset.map(n => n.id) };
      }
    }

    return { satisfied: true };
  };

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    clearCanvas(ctx, width, height);
    drawGrid(ctx, width, height);

    // Draw partition labels
    ctx.fillStyle = COLORS.textDark;
    ctx.font = '14px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Workers', 150, 50);
    ctx.fillText('Jobs', 450, 50);

    // Draw edges
    for (const edge of graph.edges) {
      const edgeKey1 = `${edge.source}-${edge.target}`;
      const edgeKey2 = `${edge.target}-${edge.source}`;
      const inMatching = matching.has(edgeKey1) || matching.has(edgeKey2);
      const inPath = augmentingPath.length > 0 && augmentingPath.some((_node, i) =>
        i < augmentingPath.length - 1 &&
        ((augmentingPath[i] === edge.source && augmentingPath[i + 1] === edge.target) ||
         (augmentingPath[i] === edge.target && augmentingPath[i + 1] === edge.source))
      );

      drawEdge(ctx, edge, graph.nodes, {
        highlighted: inMatching,
        color: inMatching ? COLORS.matching :
               inPath ? COLORS.path :
               COLORS.edge,
        width: inMatching ? 4 : inPath ? 3 : 2
      });
    }

    // Draw nodes
    for (const node of graph.nodes) {
      const inCover = vertexCover.has(node.id);
      const inPath = augmentingPath.includes(node.id);

      drawNode(ctx, node, {
        highlighted: node.id === hoveredNode || inPath,
        fillColor: inCover ? COLORS.nodeSelected : node.color,
        strokeWidth: inCover ? 3 : 2
      });
    }

  }, [graph, matching, augmentingPath, hoveredNode, vertexCover]);

  // Mouse handlers
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    setHoveredNode(findNodeAtPoint(x, y, graph.nodes)?.id ?? null);
  }, [graph]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);

    // Check if clicking on an edge
    for (const edge of graph.edges) {
      const source = graph.nodes.find(n => n.id === edge.source);
      const target = graph.nodes.find(n => n.id === edge.target);
      if (!source || !target) continue;

      // Simple distance check to edge
      const midX = (source.x + target.x) / 2;
      const midY = (source.y + target.y) / 2;
      const dist = Math.sqrt((x - midX) ** 2 + (y - midY) ** 2);

      if (dist < 30) {
        // Toggle edge in matching
        const edgeKey1 = `${edge.source}-${edge.target}`;
        const edgeKey2 = `${edge.target}-${edge.source}`;

        const newMatching = new Set(matching);
        if (newMatching.has(edgeKey1) || newMatching.has(edgeKey2)) {
          newMatching.delete(edgeKey1);
          newMatching.delete(edgeKey2);
        } else {
          // Check if valid (no vertex already matched)
          const alreadyMatched = [...newMatching].some(e =>
            e.includes(edge.source) || e.includes(edge.target)
          );
          if (!alreadyMatched) {
            newMatching.add(edgeKey1);
          }
        }
        setMatching(newMatching);
        return;
      }
    }
  }, [graph, matching]);

  // Load preset
  const loadPreset = (preset: typeof PRESETS[0]) => {
    setGraph(preset.graph);
    setMatching(new Set());
    setAugmentingPath([]);
    setVertexCover(new Set());
  };

  // Clear matching
  const clearMatching = () => {
    setMatching(new Set());
    setAugmentingPath([]);
  };

  // Calculate stats
  const matchingSize = matching.size;
  const leftNodes = graph.nodes.filter(n => n.id.startsWith('L'));
  const rightNodes = graph.nodes.filter(n => n.id.startsWith('R'));
  const isPerfect = matchingSize === Math.min(leftNodes.length, rightNodes.length);
  const hallCondition = checkHallCondition();

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Matching Explorer</h3>
      <p className="text-dark-300 mb-6">
        Explore bipartite matchings. Click on edges to add/remove them from the matching,
        or use the algorithm to find a maximum matching.
      </p>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="rounded-xl border border-dark-600"
            style={{ cursor: hoveredNode ? 'pointer' : 'default' }}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            onMouseLeave={() => setHoveredNode(null)}
          />

          {/* Preset buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            {PRESETS.map((preset, i) => (
              <button
                key={i}
                onClick={() => loadPreset(preset)}
                className="px-3 py-2 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600"
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-4 min-w-0">
          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-dark-700/50 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">{matchingSize}</div>
              <div className="text-sm text-dark-300">Matching Size</div>
            </div>
            <div className={`p-3 rounded-lg ${isPerfect ? 'bg-green-900/30' : 'bg-dark-700/50'}`}>
              <div className={`text-lg font-bold ${isPerfect ? 'text-green-400' : 'text-dark-300'}`}>
                {isPerfect ? 'Perfect' : 'Not Perfect'}
              </div>
              <div className="text-sm text-dark-300">Matching Status</div>
            </div>
          </div>

          {/* Hall's condition */}
          <div className={`p-4 rounded-lg ${hallCondition.satisfied ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`font-medium ${hallCondition.satisfied ? 'text-green-400' : 'text-red-400'}`}>
                Hall's Condition: {hallCondition.satisfied ? 'Satisfied' : 'Violated'}
              </span>
            </div>
            <div className="text-sm text-dark-300">
              {hallCondition.satisfied
                ? 'For every subset S of the left partition, |N(S)| ≥ |S|'
                : `Violated by subset: {${hallCondition.violatingSet?.map(id => graph.nodes.find(n => n.id === id)?.label).join(', ')}}`}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={findMaximumMatching}
              disabled={isAnimating}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 disabled:opacity-50"
            >
              {isAnimating ? 'Finding...' : 'Find Maximum Matching'}
            </button>
            <button
              onClick={clearMatching}
              className="px-4 py-2 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600"
            >
              Clear Matching
            </button>
            <button
              onClick={() => setShowVertexCover(!showVertexCover)}
              className={`px-4 py-2 rounded-lg text-sm ${
                showVertexCover
                  ? 'bg-amber-600 text-white'
                  : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
              }`}
            >
              {showVertexCover ? 'Hide' : 'Show'} Vertex Cover
            </button>
          </div>

          {/* König-Egerváry theorem */}
          {showVertexCover && (
            <div className="p-4 bg-dark-700/50 rounded-lg">
              <div className="text-sm font-medium text-dark-200 mb-2">König-Egerváry Theorem</div>
              <div className="text-sm text-dark-300">
                In a bipartite graph: max matching = min vertex cover
              </div>
              <div className="mt-2 text-dark-100">
                Vertex Cover Size: {vertexCover.size}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="text-sm text-dark-400 space-y-1">
            <p><strong>Click edge:</strong> Toggle in matching</p>
            <p><strong>Purple edges:</strong> Current matching</p>
            <p><strong>Yellow vertices:</strong> Vertex cover</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchingExplorer;
