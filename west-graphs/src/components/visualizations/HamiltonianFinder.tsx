// HamiltonianFinder - Hamiltonian path/cycle exploration
// Section 21: Hamiltonian Cycles

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Graph, GraphNode, PresetGraphType, AlgorithmSpeed } from './shared/types';
import {
  clearCanvas,
  drawGrid,
  drawNode,
  drawEdge,
  drawPath,
  findNodeAtPoint,
  getCanvasCoordinates,
  COLORS
} from './shared/canvasUtils';
import {
  generatePresetGraph,
  getAdjacencyList,
  getDegree,
  hasEdge,
  moveNode
} from './shared/graphUtils';

interface Props {
  className?: string;
}

// Generate a Herschel graph (smallest non-Hamiltonian polyhedral graph)
function generateHerschelGraph(): Graph {
  const nodes: GraphNode[] = [
    { id: '0', x: 300, y: 60, label: '1' },
    { id: '1', x: 150, y: 150, label: '2' },
    { id: '2', x: 450, y: 150, label: '3' },
    { id: '3', x: 100, y: 280, label: '4' },
    { id: '4', x: 250, y: 220, label: '5' },
    { id: '5', x: 350, y: 220, label: '6' },
    { id: '6', x: 500, y: 280, label: '7' },
    { id: '7', x: 180, y: 350, label: '8' },
    { id: '8', x: 300, y: 320, label: '9' },
    { id: '9', x: 420, y: 350, label: '10' },
    { id: '10', x: 300, y: 380, label: '11' }
  ];

  const edges = [
    { source: '0', target: '1' },
    { source: '0', target: '2' },
    { source: '1', target: '3' },
    { source: '1', target: '4' },
    { source: '2', target: '5' },
    { source: '2', target: '6' },
    { source: '3', target: '7' },
    { source: '3', target: '4' },
    { source: '4', target: '5' },
    { source: '4', target: '8' },
    { source: '5', target: '6' },
    { source: '5', target: '8' },
    { source: '6', target: '9' },
    { source: '7', target: '8' },
    { source: '7', target: '10' },
    { source: '8', target: '9' },
    { source: '8', target: '10' },
    { source: '9', target: '10' }
  ];

  return { nodes, edges };
}

const PRESETS = [
  { name: 'Cube (Q₃)', graph: generatePresetGraph('cube'), hasHamilton: true },
  { name: 'Petersen', graph: generatePresetGraph('petersen'), hasHamilton: false },
  { name: 'Dodecahedron', graph: generatePresetGraph('dodecahedron'), hasHamilton: true },
  { name: 'K₅', graph: generatePresetGraph('K5'), hasHamilton: true },
  { name: 'Herschel', graph: generateHerschelGraph(), hasHamilton: false },
  { name: 'Cycle (C₆)', graph: generatePresetGraph('cycle'), hasHamilton: true }
];

export function HamiltonianFinder({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [graph, setGraph] = useState<Graph>(PRESETS[0].graph);
  const [path, setPath] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<'found' | 'none' | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [speed, setSpeed] = useState<AlgorithmSpeed>('medium');
  const [mode, setMode] = useState<'manual' | 'auto'>('manual');
  const [findCycle, setFindCycle] = useState(true);

  const width = 600;
  const height = 400;

  const speedMs: Record<AlgorithmSpeed, number> = {
    slow: 300,
    medium: 100,
    fast: 20
  };

  // Check Dirac's condition: δ(G) ≥ n/2
  const minDegree = Math.min(...graph.nodes.map(n => getDegree(graph, n.id)));
  const satisfiesDirac = minDegree >= graph.nodes.length / 2;

  // Check Ore's condition: deg(u) + deg(v) ≥ n for all non-adjacent pairs
  const checkOre = (): boolean => {
    const n = graph.nodes.length;
    for (let i = 0; i < graph.nodes.length; i++) {
      for (let j = i + 1; j < graph.nodes.length; j++) {
        const u = graph.nodes[i].id;
        const v = graph.nodes[j].id;
        if (!hasEdge(graph, u, v)) {
          if (getDegree(graph, u) + getDegree(graph, v) < n) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const satisfiesOre = checkOre();

  // Check if current path is a valid Hamiltonian path/cycle
  const isHamiltonianPath = path.length === graph.nodes.length;
  const isHamiltonianCycle = isHamiltonianPath && path.length > 2 &&
    hasEdge(graph, path[path.length - 1], path[0]);

  // Find Hamiltonian path/cycle using backtracking
  const findHamiltonian = async () => {
    setIsSearching(true);
    setSearchResult(null);
    setPath([]);

    const adj = getAdjacencyList(graph);
    const visited = new Set<string>();
    let found = false;
    let resultPath: string[] = [];

    const search = async (node: string, currentPath: string[]): Promise<boolean> => {
      if (!isSearching) return false;

      currentPath.push(node);
      visited.add(node);
      setPath([...currentPath]);

      await new Promise(resolve => setTimeout(resolve, speedMs[speed]));

      if (currentPath.length === graph.nodes.length) {
        if (!findCycle || hasEdge(graph, node, currentPath[0])) {
          resultPath = [...currentPath];
          return true;
        }
      }

      const neighbors = adj.get(node) ?? [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          if (await search(neighbor, currentPath)) {
            return true;
          }
        }
      }

      // Backtrack
      currentPath.pop();
      visited.delete(node);
      setPath([...currentPath]);

      return false;
    };

    // Try starting from each vertex
    for (const startNode of graph.nodes) {
      visited.clear();
      if (await search(startNode.id, [])) {
        found = true;
        break;
      }
    }

    setPath(resultPath);
    setSearchResult(found ? 'found' : 'none');
    setIsSearching(false);
  };

  // Manual path building
  const addToPath = (nodeId: string) => {
    if (path.length === 0) {
      setPath([nodeId]);
      return;
    }

    const lastNode = path[path.length - 1];

    // Check if this completes a cycle
    if (nodeId === path[0] && path.length > 2 && hasEdge(graph, lastNode, nodeId)) {
      setSearchResult('found');
      return;
    }

    // Check if node is already in path
    if (path.includes(nodeId)) {
      return;
    }

    // Check if there's an edge from last node to this one
    if (hasEdge(graph, lastNode, nodeId)) {
      const newPath = [...path, nodeId];
      setPath(newPath);

      if (newPath.length === graph.nodes.length) {
        if (!findCycle || hasEdge(graph, nodeId, newPath[0])) {
          setSearchResult('found');
        }
      }
    }
  };

  // Reset path
  const resetPath = () => {
    setPath([]);
    setSearchResult(null);
    setIsSearching(false);
  };

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    clearCanvas(ctx, width, height);
    drawGrid(ctx, width, height);

    // Build edge set for path
    const pathEdges = new Set<string>();
    for (let i = 0; i < path.length - 1; i++) {
      pathEdges.add(`${path[i]}-${path[i + 1]}`);
      pathEdges.add(`${path[i + 1]}-${path[i]}`);
    }

    // Add closing edge if cycle found
    if (searchResult === 'found' && path.length > 2 && hasEdge(graph, path[path.length - 1], path[0])) {
      pathEdges.add(`${path[path.length - 1]}-${path[0]}`);
      pathEdges.add(`${path[0]}-${path[path.length - 1]}`);
    }

    // Draw edges
    for (const edge of graph.edges) {
      const inPath = pathEdges.has(`${edge.source}-${edge.target}`);
      drawEdge(ctx, edge, graph.nodes, {
        highlighted: inPath,
        color: inPath ? COLORS.path : COLORS.edge,
        width: inPath ? 4 : 2
      });
    }

    // Draw path overlay
    if (path.length > 1) {
      const pathToShow = searchResult === 'found' && findCycle && path.length > 2 &&
                         hasEdge(graph, path[path.length - 1], path[0])
        ? [...path, path[0]]
        : path;
      drawPath(ctx, pathToShow, graph.nodes, COLORS.path);
    }

    // Draw nodes
    for (const node of graph.nodes) {
      const indexInPath = path.indexOf(node.id);
      const isStart = indexInPath === 0;
      const isEnd = indexInPath === path.length - 1 && path.length > 0;
      const inPath = indexInPath >= 0;

      drawNode(ctx, node, {
        fillColor: isStart ? '#22c55e' : isEnd ? '#f59e0b' : inPath ? COLORS.path : COLORS.node,
        highlighted: node.id === hoveredNode,
        strokeWidth: inPath ? 3 : 2
      });

      // Draw path order number
      if (inPath) {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${indexInPath + 1}`, node.x, node.y + 26);
      }
    }

  }, [graph, path, hoveredNode, searchResult, findCycle]);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    const clickedNode = findNodeAtPoint(x, y, graph.nodes);

    if (clickedNode) {
      if (mode === 'manual' && !isSearching) {
        addToPath(clickedNode.id);
      } else {
        setDraggingNode(clickedNode.id);
      }
    }
  }, [graph, mode, isSearching, path, findCycle]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    setHoveredNode(findNodeAtPoint(x, y, graph.nodes)?.id ?? null);

    if (draggingNode) {
      setGraph(moveNode(graph, draggingNode, x, y));
    }
  }, [graph, draggingNode]);

  const handleMouseUp = useCallback(() => {
    setDraggingNode(null);
  }, []);

  // Load preset
  const loadPreset = (preset: typeof PRESETS[0]) => {
    setGraph(preset.graph);
    resetPath();
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Hamiltonian Finder</h3>
      <p className="text-dark-300 mb-6">
        Find Hamiltonian paths and cycles. Click vertices to build a path manually,
        or use the algorithm to search automatically.
      </p>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="rounded-xl border border-dark-600"
            style={{ cursor: hoveredNode ? 'pointer' : 'default' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { setDraggingNode(null); setHoveredNode(null); }}
          />

          {/* Mode toggle */}
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => { setMode('manual'); resetPath(); }}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${
                mode === 'manual'
                  ? 'bg-blue-600 text-white'
                  : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
              }`}
            >
              Manual Mode
            </button>
            <button
              onClick={() => { setMode('auto'); resetPath(); }}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${
                mode === 'auto'
                  ? 'bg-blue-600 text-white'
                  : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
              }`}
            >
              Auto Search
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-4 min-w-0">
          {/* Presets */}
          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">Load Graph</label>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((preset, i) => (
                <button
                  key={i}
                  onClick={() => loadPreset(preset)}
                  className={`px-3 py-1.5 rounded-lg text-sm ${
                    preset.hasHamilton
                      ? 'bg-green-900/30 text-green-300 hover:bg-green-900/50'
                      : 'bg-red-900/30 text-red-300 hover:bg-red-900/50'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search options */}
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={findCycle}
                onChange={e => setFindCycle(e.target.checked)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm text-dark-200">Find Cycle (not just path)</span>
            </label>

            {mode === 'auto' && (
              <div className="flex gap-2">
                {(['slow', 'medium', 'fast'] as AlgorithmSpeed[]).map(s => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`px-2 py-1 rounded text-xs capitalize ${
                      speed === s
                        ? 'bg-blue-600 text-white'
                        : 'bg-dark-700 text-dark-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {mode === 'auto' && (
              <button
                onClick={findHamiltonian}
                disabled={isSearching}
                className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50"
              >
                {isSearching ? 'Searching...' : `Find Hamiltonian ${findCycle ? 'Cycle' : 'Path'}`}
              </button>
            )}
            <button
              onClick={resetPath}
              className="px-4 py-2 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600"
            >
              Reset Path
            </button>
          </div>

          {/* Status */}
          <div className={`p-4 rounded-lg ${
            searchResult === 'found' ? 'bg-green-900/30' :
            searchResult === 'none' ? 'bg-red-900/30' :
            'bg-dark-700/50'
          }`}>
            <div className={`font-medium ${
              searchResult === 'found' ? 'text-green-400' :
              searchResult === 'none' ? 'text-red-400' :
              'text-dark-200'
            }`}>
              {searchResult === 'found' ? `Hamiltonian ${findCycle ? 'Cycle' : 'Path'} Found!` :
               searchResult === 'none' ? `No Hamiltonian ${findCycle ? 'Cycle' : 'Path'} Exists` :
               `Path: ${path.length}/${graph.nodes.length} vertices`}
            </div>
            {path.length > 0 && (
              <div className="text-sm text-dark-300 mt-1">
                {path.map(id => graph.nodes.find(n => n.id === id)?.label ?? id).join(' → ')}
                {searchResult === 'found' && findCycle ? ` → ${graph.nodes.find(n => n.id === path[0])?.label ?? path[0]}` : ''}
              </div>
            )}
          </div>

          {/* Sufficient conditions */}
          <div className="p-4 bg-dark-700/50 rounded-lg space-y-3">
            <div className="text-sm font-medium text-dark-200">Sufficient Conditions</div>

            <div className={`text-sm ${satisfiesDirac ? 'text-green-400' : 'text-dark-400'}`}>
              <strong>Dirac's Theorem:</strong> δ(G) ≥ n/2
              <div className="text-dark-400">
                Min degree: {minDegree}, n/2 = {(graph.nodes.length / 2).toFixed(1)}
                {satisfiesDirac && ' ✓ Hamiltonian cycle exists'}
              </div>
            </div>

            <div className={`text-sm ${satisfiesOre ? 'text-green-400' : 'text-dark-400'}`}>
              <strong>Ore's Theorem:</strong> deg(u) + deg(v) ≥ n for non-adjacent u,v
              <div className="text-dark-400">
                {satisfiesOre ? '✓ Condition satisfied - Hamiltonian cycle exists' : '✗ Condition not satisfied'}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-sm text-dark-400 space-y-1">
            <p><strong>Green vertex:</strong> Path start</p>
            <p><strong>Amber vertex:</strong> Current end</p>
            <p><strong>Manual:</strong> Click vertices to extend path</p>
            <p><strong>Auto:</strong> Backtracking search algorithm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamiltonianFinder;
