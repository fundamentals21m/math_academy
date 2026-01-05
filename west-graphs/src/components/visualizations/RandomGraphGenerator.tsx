// RandomGraphGenerator - Erdős-Rényi random graph model
// Section 27: Random Graphs

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
  isConnected,
  getDegreeSequence,
  findCycle,
  isTree
} from './shared/graphUtils';

interface Props {
  className?: string;
}

export function RandomGraphGenerator({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [n, setN] = useState<number>(12);
  const [p, setP] = useState<number>(0.3);
  const [graph, setGraph] = useState<Graph>({ nodes: [], edges: [] });
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationP, setAnimationP] = useState<number>(0);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [history, setHistory] = useState<{ p: number; connected: boolean; edges: number }[]>([]);

  const width = 600;
  const height = 400;

  // Generate random graph G(n,p)
  const generateGraph = useCallback((numNodes: number, prob: number): Graph => {
    const nodes: GraphNode[] = [];
    const edges: GraphEdge[] = [];

    // Place nodes in a circle
    for (let i = 0; i < numNodes; i++) {
      const angle = (2 * Math.PI * i) / numNodes - Math.PI / 2;
      const radius = Math.min(width, height) * 0.35;
      nodes.push({
        id: `${i}`,
        x: width / 2 + radius * Math.cos(angle),
        y: height / 2 + radius * Math.sin(angle),
        label: `${i + 1}`
      });
    }

    // Add edges with probability p
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        if (Math.random() < prob) {
          edges.push({ source: `${i}`, target: `${j}` });
        }
      }
    }

    return { nodes, edges };
  }, []);

  // Generate new graph
  const regenerate = useCallback(() => {
    const newGraph = generateGraph(n, p);
    setGraph(newGraph);

    // Add to history
    const connected = isConnected(newGraph);
    setHistory(prev => [...prev.slice(-19), { p, connected, edges: newGraph.edges.length }]);
  }, [n, p, generateGraph]);

  // Initial generation
  useEffect(() => {
    regenerate();
  }, []);

  // Animate evolution of random graph
  const animateEvolution = async () => {
    setIsAnimating(true);
    setHistory([]);

    for (let prob = 0; prob <= 1.05; prob += 0.05) {
      if (prob > 1) prob = 1;
      setAnimationP(prob);
      const newGraph = generateGraph(n, prob);
      setGraph(newGraph);

      const connected = isConnected(newGraph);
      setHistory(prev => [...prev, { p: prob, connected, edges: newGraph.edges.length }]);

      await new Promise(resolve => setTimeout(resolve, 200));
    }

    setIsAnimating(false);
  };

  // Calculate graph properties
  const connected = isConnected(graph);
  const degrees = getDegreeSequence(graph);
  const avgDegree = degrees.length > 0 ? degrees.reduce((a, b) => a + b, 0) / degrees.length : 0;
  const hasCycle = findCycle(graph) !== null;
  const treeStatus = isTree(graph);

  // Expected values
  const expectedEdges = (n * (n - 1) / 2) * p;
  const expectedDegree = (n - 1) * p;

  // Threshold probabilities
  const thresholdConnected = Math.log(n) / n;
  const thresholdGiantComponent = 1 / n;
  const thresholdCycle = 1 / n;

  // Move node
  const moveNodePos = useCallback((nodeId: string, x: number, y: number) => {
    setGraph(prev => ({
      ...prev,
      nodes: prev.nodes.map(node =>
        node.id === nodeId ? { ...node, x, y } : node
      )
    }));
  }, []);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    clearCanvas(ctx, width, height);
    drawGrid(ctx, width, height);

    // Draw edges
    for (const edge of graph.edges) {
      drawEdge(ctx, edge, graph.nodes);
    }

    // Draw nodes
    for (const node of graph.nodes) {
      drawNode(ctx, node, {
        highlighted: node.id === hoveredNode
      });
    }

  }, [graph, hoveredNode]);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    const clickedNode = findNodeAtPoint(x, y, graph.nodes);

    if (clickedNode) {
      setDraggingNode(clickedNode.id);
    }
  }, [graph]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    setHoveredNode(findNodeAtPoint(x, y, graph.nodes)?.id ?? null);

    if (draggingNode) {
      moveNodePos(draggingNode, x, y);
    }
  }, [graph, draggingNode, moveNodePos]);

  const handleMouseUp = useCallback(() => {
    setDraggingNode(null);
  }, []);

  // Connectivity probability history chart
  const connectedCount = history.filter(h => h.connected).length;
  const connectedRatio = history.length > 0 ? connectedCount / history.length : 0;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Random Graph Generator</h3>
      <p className="text-dark-300 mb-6">
        Generate Erdős-Rényi random graphs G(n,p). Each edge appears independently with probability p.
      </p>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="rounded-xl border border-dark-600"
            style={{ cursor: hoveredNode ? 'grab' : 'default' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { setDraggingNode(null); setHoveredNode(null); }}
          />

          {/* Controls */}
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">
                Vertices (n): {n}
              </label>
              <input
                type="range"
                min="4"
                max="30"
                value={n}
                onChange={e => setN(parseInt(e.target.value))}
                className="w-full"
                disabled={isAnimating}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">
                Edge Probability (p): {(isAnimating ? animationP : p).toFixed(2)}
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={p * 100}
                onChange={e => setP(parseInt(e.target.value) / 100)}
                className="w-full"
                disabled={isAnimating}
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={regenerate}
                disabled={isAnimating}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              >
                Generate
              </button>
              <button
                onClick={animateEvolution}
                disabled={isAnimating}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 disabled:opacity-50"
              >
                {isAnimating ? 'Animating...' : 'Animate Evolution'}
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 min-w-0">
          {/* Current graph stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-3 rounded-lg ${connected ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
              <div className={`text-lg font-bold ${connected ? 'text-green-400' : 'text-red-400'}`}>
                {connected ? 'Connected' : 'Disconnected'}
              </div>
              <div className="text-sm text-dark-300">Connectivity</div>
            </div>
            <div className="p-3 bg-dark-700/50 rounded-lg">
              <div className="text-lg font-bold text-blue-400">{graph.edges.length}</div>
              <div className="text-sm text-dark-300">
                Edges (E[m] = {expectedEdges.toFixed(1)})
              </div>
            </div>
          </div>

          {/* Degree stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-dark-700/50 rounded-lg">
              <div className="text-lg font-bold text-dark-100">{avgDegree.toFixed(2)}</div>
              <div className="text-sm text-dark-300">
                Avg Degree (E[d] = {expectedDegree.toFixed(2)})
              </div>
            </div>
            <div className={`p-3 rounded-lg ${hasCycle ? 'bg-amber-900/30' : 'bg-dark-700/50'}`}>
              <div className={`text-lg font-bold ${hasCycle ? 'text-amber-400' : treeStatus ? 'text-green-400' : 'text-dark-300'}`}>
                {treeStatus ? 'Tree' : hasCycle ? 'Has Cycle' : 'Forest'}
              </div>
              <div className="text-sm text-dark-300">Structure</div>
            </div>
          </div>

          {/* Threshold functions */}
          <div className="p-4 bg-dark-700/50 rounded-lg">
            <div className="text-sm font-medium text-dark-200 mb-3">Threshold Probabilities</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-dark-300">Cycle appears (p = 1/n):</span>
                <span className={p >= thresholdCycle ? 'text-green-400' : 'text-dark-500'}>
                  {thresholdCycle.toFixed(3)} {p >= thresholdCycle ? '✓' : ''}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-dark-300">Giant component (p = 1/n):</span>
                <span className={p >= thresholdGiantComponent ? 'text-green-400' : 'text-dark-500'}>
                  {thresholdGiantComponent.toFixed(3)} {p >= thresholdGiantComponent ? '✓' : ''}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-dark-300">Connected (p = ln(n)/n):</span>
                <span className={p >= thresholdConnected ? 'text-green-400' : 'text-dark-500'}>
                  {thresholdConnected.toFixed(3)} {p >= thresholdConnected ? '✓' : ''}
                </span>
              </div>
            </div>
          </div>

          {/* Evolution history */}
          {history.length > 0 && (
            <div className="p-4 bg-dark-700/50 rounded-lg">
              <div className="text-sm font-medium text-dark-200 mb-3">
                Connectivity History ({connectedCount}/{history.length} connected)
              </div>
              <div className="flex gap-0.5 h-8">
                {history.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm ${h.connected ? 'bg-green-500' : 'bg-red-500'}`}
                    title={`p=${h.p.toFixed(2)}, ${h.edges} edges`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-dark-400 mt-1">
                <span>p = 0</span>
                <span>p = 1</span>
              </div>
            </div>
          )}

          {/* Theory */}
          <div className="p-4 bg-dark-700/50 rounded-lg">
            <div className="text-sm font-medium text-dark-200 mb-2">Erdős-Rényi Model G(n,p)</div>
            <div className="text-sm text-dark-300 space-y-1">
              <p>• Each of the (n choose 2) possible edges appears with probability p</p>
              <p>• Expected edges: E[m] = p·n(n-1)/2</p>
              <p>• Phase transition at p = 1/n: giant component emerges</p>
              <p>• Graph is almost surely connected when p {">"} ln(n)/n</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-sm text-dark-400 space-y-1">
            <p><strong>Drag vertices:</strong> Rearrange layout</p>
            <p><strong>Generate:</strong> Create new random graph</p>
            <p><strong>Animate:</strong> Watch evolution as p increases</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomGraphGenerator;
