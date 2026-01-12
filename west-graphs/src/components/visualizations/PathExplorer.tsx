// PathExplorer - Path, cycle, and Eulerian circuit visualization
// Section 2: Paths, Cycles, and Trails

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Graph, PathMode, PresetGraphType } from './shared/types';
import {
  clearCanvas,
  drawGrid,
  drawNode,
  drawEdge,
  drawPath,
  drawCycle,
  findNodeAtPoint,
  getCanvasCoordinates,
  COLORS
} from './shared/canvasUtils';
import {
  generatePresetGraph,
  findPath,
  findCycle,
  findEulerianCircuit,
  hasEulerianCircuit,
  hasEulerianPath,
  isConnected,
  getDegree,
  bfs,
  dfs,
  addNode,
  addEdge,
  moveNode
} from './shared/graphUtils';

interface Props {
  className?: string;
  initialGraph?: Graph;
}

const PRESETS: { value: PresetGraphType; label: string }[] = [
  { value: 'cycle', label: 'Cycle (C₆)' },
  { value: 'K5', label: 'K₅' },
  { value: 'cube', label: 'Cube' },
  { value: 'petersen', label: 'Petersen' },
  { value: 'konigsberg', label: 'Königsberg' }
];

export function PathExplorer({ className = '', initialGraph }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [graph, setGraph] = useState<Graph>(initialGraph ?? generatePresetGraph('cycle'));
  const [mode, setMode] = useState<PathMode>('path');
  const [pathStart, setPathStart] = useState<string | null>(null);
  const [pathEnd, setPathEnd] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [currentCycle, setCurrentCycle] = useState<string[]>([]);
  const [eulerianCircuit, setEulerianCircuit] = useState<string[]>([]);
  const [animationStep, setAnimationStep] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [traversalSteps, setTraversalSteps] = useState<string[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<'view' | 'addNode' | 'addEdge'>('view');
  const [edgeStartNode, setEdgeStartNode] = useState<string | null>(null);

  const width = 600;
  const height = 400;

  // Animation effect
  useEffect(() => {
    if (!isAnimating) return;

    const maxSteps = mode === 'eulerian' ? eulerianCircuit.length : traversalSteps.length;
    if (animationStep >= maxSteps) {
      setIsAnimating(false);
      return;
    }

    const timer = setTimeout(() => {
      setAnimationStep(prev => prev + 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [isAnimating, animationStep, mode, eulerianCircuit.length, traversalSteps.length]);

  // Find path when start/end change
  useEffect(() => {
    if (mode === 'path' && pathStart && pathEnd) {
      const result = findPath(graph, pathStart, pathEnd);
      setCurrentPath(result.found ? result.path : []);
    }
  }, [graph, mode, pathStart, pathEnd]);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    clearCanvas(ctx, width, height);
    drawGrid(ctx, width, height);

    // Determine which path to highlight
    let highlightedEdges: Set<string> = new Set();
    let pathToShow: string[] = [];

    if (mode === 'path' && currentPath.length > 1) {
      pathToShow = currentPath;
    } else if (mode === 'cycle' && currentCycle.length > 0) {
      pathToShow = [...currentCycle, currentCycle[0]];
    } else if (mode === 'eulerian' && eulerianCircuit.length > 0) {
      // Show animated portion
      pathToShow = eulerianCircuit.slice(0, animationStep + 1);
    }

    // Build set of highlighted edges
    for (let i = 0; i < pathToShow.length - 1; i++) {
      const key1 = `${pathToShow[i]}-${pathToShow[i + 1]}`;
      const key2 = `${pathToShow[i + 1]}-${pathToShow[i]}`;
      highlightedEdges.add(key1);
      highlightedEdges.add(key2);
    }

    // Draw edges
    for (const edge of graph.edges) {
      const key1 = `${edge.source}-${edge.target}`;
      const key2 = `${edge.target}-${edge.source}`;
      const isHighlighted = highlightedEdges.has(key1) || highlightedEdges.has(key2);

      drawEdge(ctx, edge, graph.nodes, {
        highlighted: isHighlighted,
        color: isHighlighted ? (mode === 'cycle' ? COLORS.cycle : COLORS.path) : undefined
      });
    }

    // Draw the path overlay
    if (mode === 'path' && currentPath.length > 1) {
      drawPath(ctx, currentPath, graph.nodes, COLORS.path);
    } else if (mode === 'cycle' && currentCycle.length > 0) {
      drawCycle(ctx, currentCycle, graph.nodes, COLORS.cycle);
    } else if (mode === 'eulerian' && pathToShow.length > 1) {
      drawPath(ctx, pathToShow, graph.nodes, COLORS.path);
    }

    // Draw nodes
    for (const node of graph.nodes) {
      const isInPath = pathToShow.includes(node.id);
      const isStart = node.id === pathStart || (mode === 'eulerian' && node.id === eulerianCircuit[0]);
      const isEnd = node.id === pathEnd || (mode === 'eulerian' && animationStep > 0 && node.id === eulerianCircuit[animationStep]);

      drawNode(ctx, node, {
        selected: isStart || isEnd,
        highlighted: isInPath || node.id === hoveredNode || node.id === edgeStartNode,
        fillColor: isStart ? COLORS.path : isEnd ? COLORS.cycle : undefined
      });
    }

  }, [graph, mode, currentPath, currentCycle, eulerianCircuit, animationStep, pathStart, pathEnd, hoveredNode, edgeStartNode]);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    const clickedNode = findNodeAtPoint(x, y, graph.nodes);

    if (editMode === 'addNode') {
      if (!clickedNode) {
        const newGraph = addNode(graph, x, y);
        setGraph(newGraph);
      }
      return;
    }

    if (editMode === 'addEdge') {
      if (clickedNode) {
        if (edgeStartNode === null) {
          setEdgeStartNode(clickedNode.id);
        } else if (clickedNode.id !== edgeStartNode) {
          const newGraph = addEdge(graph, edgeStartNode, clickedNode.id);
          setGraph(newGraph);
          setEdgeStartNode(null);
        }
      } else {
        setEdgeStartNode(null);
      }
      return;
    }

    // View mode - select nodes for path finding
    if (clickedNode) {
      if (mode === 'path') {
        if (!pathStart) {
          setPathStart(clickedNode.id);
          setCurrentPath([]);
        } else if (!pathEnd && clickedNode.id !== pathStart) {
          setPathEnd(clickedNode.id);
        } else {
          // Reset and start new path
          setPathStart(clickedNode.id);
          setPathEnd(null);
          setCurrentPath([]);
        }
      } else if (mode === 'cycle') {
        // Find cycle starting from this vertex
        const cycle = findCycle(graph, clickedNode.id);
        setCurrentCycle(cycle ?? []);
      }
      setDraggingNode(clickedNode.id);
    }
  }, [graph, mode, editMode, pathStart, pathEnd, edgeStartNode]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    const nodeAtPoint = findNodeAtPoint(x, y, graph.nodes);
    setHoveredNode(nodeAtPoint?.id ?? null);

    if (draggingNode && editMode === 'view') {
      const newGraph = moveNode(graph, draggingNode, x, y);
      setGraph(newGraph);
    }
  }, [graph, draggingNode, editMode]);

  const handleMouseUp = useCallback(() => {
    setDraggingNode(null);
  }, []);

  // Load preset
  const loadPreset = (preset: PresetGraphType) => {
    setGraph(generatePresetGraph(preset));
    resetState();
  };

  // Reset state
  const resetState = () => {
    setPathStart(null);
    setPathEnd(null);
    setCurrentPath([]);
    setCurrentCycle([]);
    setEulerianCircuit([]);
    setAnimationStep(0);
    setIsAnimating(false);
    setTraversalSteps([]);
    setEdgeStartNode(null);
  };

  // Find Eulerian circuit
  const findEulerian = () => {
    const circuit = findEulerianCircuit(graph);
    if (circuit) {
      setEulerianCircuit(circuit);
      setAnimationStep(0);
      setIsAnimating(true);
    }
  };

  // Run BFS/DFS
  const runTraversal = (type: 'bfs' | 'dfs') => {
    if (!pathStart) return;
    const steps = type === 'bfs' ? bfs(graph, pathStart) : dfs(graph, pathStart);
    setTraversalSteps(steps.filter(s => s.action === 'visit').map(s => s.node));
    setAnimationStep(0);
    setIsAnimating(true);
  };

  // Graph properties
  const connected = isConnected(graph);
  const hasEulerian = hasEulerianCircuit(graph);
  const hasEulerianP = hasEulerianPath(graph);
  const oddDegreeVertices = graph.nodes.filter(n => getDegree(graph, n.id) % 2 !== 0);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Path Explorer</h3>
      <p className="text-dark-300 mb-6">
        Explore paths, cycles, and Eulerian circuits. Click vertices to find paths between them,
        or discover cycles in the graph.
      </p>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Canvas */}
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="rounded-xl border border-dark-600"
            style={{ cursor: hoveredNode ? 'pointer' : editMode === 'addNode' ? 'crosshair' : 'default' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { setDraggingNode(null); setHoveredNode(null); }}
          />

          {/* Mode buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { mode: 'path' as PathMode, label: 'Find Path' },
              { mode: 'cycle' as PathMode, label: 'Find Cycle' },
              { mode: 'eulerian' as PathMode, label: 'Eulerian' }
            ].map(({ mode: m, label }) => (
              <button
                key={m}
                onClick={() => { setMode(m); resetState(); }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  mode === m
                    ? 'bg-blue-600 text-white'
                    : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Controls panel */}
        <div className="flex-1 space-y-4 min-w-0">
          {/* Presets */}
          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">Load Graph</label>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => loadPreset(value)}
                  className="px-3 py-1.5 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Edit mode */}
          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">Edit Graph</label>
            <div className="flex gap-2">
              {[
                { mode: 'view' as const, label: 'View' },
                { mode: 'addNode' as const, label: '+ Vertex' },
                { mode: 'addEdge' as const, label: '+ Edge' }
              ].map(({ mode: m, label }) => (
                <button
                  key={m}
                  onClick={() => { setEditMode(m); setEdgeStartNode(null); }}
                  className={`px-3 py-1.5 rounded-lg text-sm ${
                    editMode === m
                      ? 'bg-green-600 text-white'
                      : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Graph properties */}
          <div className="p-4 bg-dark-700/50 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-dark-300">Connected:</span>
              <span className={connected ? 'text-green-400' : 'text-red-400'}>
                {connected ? 'Yes' : 'No'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-300">Eulerian Circuit:</span>
              <span className={hasEulerian ? 'text-green-400' : 'text-red-400'}>
                {hasEulerian ? 'Exists' : 'None'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-300">Eulerian Path:</span>
              <span className={hasEulerianP ? 'text-green-400' : 'text-red-400'}>
                {hasEulerianP ? 'Exists' : 'None'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-300">Odd-degree vertices:</span>
              <span className="text-dark-100">{oddDegreeVertices.length}</span>
            </div>
          </div>

          {/* Mode-specific controls */}
          {mode === 'path' && (
            <div className="p-4 bg-dark-700/50 rounded-lg">
              <div className="text-sm text-dark-200 mb-2">
                {!pathStart ? 'Click a vertex to set start' :
                 !pathEnd ? 'Click another vertex to set end' :
                 currentPath.length > 0 ? `Path found: ${currentPath.length} vertices` :
                 'No path exists'}
              </div>
              {pathStart && pathEnd && (
                <div className="text-sm text-dark-400">
                  Path: {currentPath.join(' → ') || 'None'}
                </div>
              )}
              {pathStart && (
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => runTraversal('bfs')}
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                  >
                    Run BFS
                  </button>
                  <button
                    onClick={() => runTraversal('dfs')}
                    className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700"
                  >
                    Run DFS
                  </button>
                </div>
              )}
            </div>
          )}

          {mode === 'cycle' && (
            <div className="p-4 bg-dark-700/50 rounded-lg">
              <div className="text-sm text-dark-200 mb-2">
                {currentCycle.length > 0
                  ? `Cycle found: ${currentCycle.length} vertices`
                  : 'Click a vertex to find a cycle through it'}
              </div>
              {currentCycle.length > 0 && (
                <div className="text-sm text-dark-400">
                  Cycle: {currentCycle.join(' → ')} → {currentCycle[0]}
                </div>
              )}
            </div>
          )}

          {mode === 'eulerian' && (
            <div className="p-4 bg-dark-700/50 rounded-lg">
              <button
                onClick={findEulerian}
                disabled={!hasEulerian || isAnimating}
                className={`w-full px-4 py-2 rounded-lg text-sm font-medium ${
                  hasEulerian && !isAnimating
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-dark-600 text-dark-400 cursor-not-allowed'
                }`}
              >
                {isAnimating ? 'Animating...' : 'Find Eulerian Circuit'}
              </button>
              {eulerianCircuit.length > 0 && (
                <div className="mt-2 text-sm text-dark-400">
                  Step {animationStep + 1}/{eulerianCircuit.length}
                </div>
              )}
              {!hasEulerian && (
                <p className="mt-2 text-sm text-red-400">
                  No Eulerian circuit exists (need all vertices to have even degree)
                </p>
              )}
            </div>
          )}

          {/* Instructions */}
          <div className="text-sm text-dark-400 space-y-1">
            <p><strong>Path mode:</strong> Click two vertices to find path</p>
            <p><strong>Cycle mode:</strong> Click vertex to find cycle</p>
            <p><strong>Eulerian:</strong> Find circuit visiting every edge once</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PathExplorer;
