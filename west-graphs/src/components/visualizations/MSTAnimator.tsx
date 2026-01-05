// MSTAnimator - Minimum Spanning Tree algorithm visualization
// Section 7: Optimization and Trees

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Graph, GraphNode, GraphEdge, MSTStep, AlgorithmSpeed } from './shared/types';
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
  getAdjacencyList,
  addNode,
  addEdge,
  moveNode
} from './shared/graphUtils';

interface Props {
  className?: string;
}

type Algorithm = 'kruskal' | 'prim';

// Union-Find data structure for Kruskal's
class UnionFind {
  parent: Map<string, string>;
  rank: Map<string, number>;

  constructor(nodes: string[]) {
    this.parent = new Map();
    this.rank = new Map();
    for (const node of nodes) {
      this.parent.set(node, node);
      this.rank.set(node, 0);
    }
  }

  find(x: string): string {
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)!));
    }
    return this.parent.get(x)!;
  }

  union(x: string, y: string): boolean {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    const rankX = this.rank.get(rootX)!;
    const rankY = this.rank.get(rootY)!;

    if (rankX < rankY) {
      this.parent.set(rootX, rootY);
    } else if (rankX > rankY) {
      this.parent.set(rootY, rootX);
    } else {
      this.parent.set(rootY, rootX);
      this.rank.set(rootX, rankX + 1);
    }

    return true;
  }
}

// Generate a weighted connected graph
function generateWeightedGraph(): Graph {
  const nodes: GraphNode[] = [
    { id: 'A', x: 150, y: 100, label: 'A' },
    { id: 'B', x: 300, y: 80, label: 'B' },
    { id: 'C', x: 450, y: 120, label: 'C' },
    { id: 'D', x: 100, y: 250, label: 'D' },
    { id: 'E', x: 250, y: 220, label: 'E' },
    { id: 'F', x: 400, y: 260, label: 'F' },
    { id: 'G', x: 500, y: 320, label: 'G' },
    { id: 'H', x: 200, y: 350, label: 'H' }
  ];

  const edges: GraphEdge[] = [
    { source: 'A', target: 'B', weight: 4 },
    { source: 'A', target: 'D', weight: 2 },
    { source: 'A', target: 'E', weight: 3 },
    { source: 'B', target: 'C', weight: 5 },
    { source: 'B', target: 'E', weight: 1 },
    { source: 'C', target: 'F', weight: 6 },
    { source: 'C', target: 'G', weight: 4 },
    { source: 'D', target: 'E', weight: 3 },
    { source: 'D', target: 'H', weight: 5 },
    { source: 'E', target: 'F', weight: 2 },
    { source: 'E', target: 'H', weight: 4 },
    { source: 'F', target: 'G', weight: 3 },
    { source: 'G', target: 'H', weight: 6 }
  ];

  return { nodes, edges };
}

export function MSTAnimator({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [graph, setGraph] = useState<Graph>(generateWeightedGraph());
  const [algorithm, setAlgorithm] = useState<Algorithm>('kruskal');
  const [steps, setSteps] = useState<MSTStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [speed, setSpeed] = useState<AlgorithmSpeed>('medium');
  const [mstEdges, setMstEdges] = useState<Set<string>>(new Set());
  const [consideredEdge, setConsideredEdge] = useState<GraphEdge | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<'view' | 'addNode' | 'addEdge'>('view');
  const [edgeStartNode, setEdgeStartNode] = useState<string | null>(null);
  const [newEdgeWeight, setNewEdgeWeight] = useState<number>(1);
  const [startNode, setStartNode] = useState<string | null>(null);

  const width = 600;
  const height = 400;

  // Speed mapping
  const speedMs: Record<AlgorithmSpeed, number> = {
    slow: 1500,
    medium: 800,
    fast: 300
  };

  // Generate Kruskal's algorithm steps
  const generateKruskalSteps = (g: Graph): MSTStep[] => {
    const steps: MSTStep[] = [];
    const sortedEdges = [...g.edges].sort((a, b) => (a.weight ?? 0) - (b.weight ?? 0));
    const uf = new UnionFind(g.nodes.map(n => n.id));
    let totalWeight = 0;

    for (const edge of sortedEdges) {
      steps.push({ edge, action: 'consider', totalWeight });

      if (uf.union(edge.source, edge.target)) {
        totalWeight += edge.weight ?? 0;
        steps.push({ edge, action: 'add', totalWeight, reason: 'Connects new component' });
      } else {
        steps.push({ edge, action: 'reject', totalWeight, reason: 'Would create cycle' });
      }
    }

    return steps;
  };

  // Generate Prim's algorithm steps
  const generatePrimSteps = (g: Graph, start: string): MSTStep[] => {
    const steps: MSTStep[] = [];
    const adj = getAdjacencyList(g);
    const inMST = new Set<string>([start]);
    let totalWeight = 0;

    while (inMST.size < g.nodes.length) {
      // Find minimum weight edge from MST to non-MST vertex
      let minEdge: GraphEdge | null = null;
      let minWeight = Infinity;

      for (const edge of g.edges) {
        const sourceIn = inMST.has(edge.source);
        const targetIn = inMST.has(edge.target);

        // Edge must have exactly one endpoint in MST
        if (sourceIn !== targetIn) {
          const weight = edge.weight ?? 0;
          steps.push({ edge, action: 'consider', totalWeight });

          if (weight < minWeight) {
            minWeight = weight;
            minEdge = edge;
          }
        }
      }

      if (minEdge) {
        totalWeight += minEdge.weight ?? 0;
        const newNode = inMST.has(minEdge.source) ? minEdge.target : minEdge.source;
        inMST.add(newNode);
        steps.push({ edge: minEdge, action: 'add', totalWeight, reason: `Adds vertex ${newNode}` });
      } else {
        break; // Graph is disconnected
      }
    }

    return steps;
  };

  // Animation effect
  useEffect(() => {
    if (!isAnimating || currentStep >= steps.length - 1) {
      if (currentStep >= steps.length - 1) {
        setIsAnimating(false);
      }
      return;
    }

    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, speedMs[speed]);

    return () => clearTimeout(timer);
  }, [isAnimating, currentStep, steps.length, speed]);

  // Update MST edges and considered edge based on current step
  useEffect(() => {
    if (currentStep < 0) {
      setMstEdges(new Set());
      setConsideredEdge(null);
      return;
    }

    const newMstEdges = new Set<string>();
    let lastConsideredEdge: GraphEdge | null = null;

    for (let i = 0; i <= currentStep; i++) {
      const step = steps[i];
      if (step.action === 'add') {
        newMstEdges.add(`${step.edge.source}-${step.edge.target}`);
        newMstEdges.add(`${step.edge.target}-${step.edge.source}`);
      }
      if (step.action === 'consider') {
        lastConsideredEdge = step.edge;
      }
    }

    setMstEdges(newMstEdges);

    // Show considered edge only if current step is 'consider'
    const current = steps[currentStep];
    if (current?.action === 'consider') {
      setConsideredEdge(current.edge);
    } else {
      setConsideredEdge(null);
    }
  }, [currentStep, steps]);

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
      const edgeKey = `${edge.source}-${edge.target}`;
      const isInMST = mstEdges.has(edgeKey);
      const isConsidered = consideredEdge &&
        ((edge.source === consideredEdge.source && edge.target === consideredEdge.target) ||
         (edge.source === consideredEdge.target && edge.target === consideredEdge.source));

      drawEdge(ctx, edge, graph.nodes, {
        highlighted: isInMST,
        color: isInMST ? COLORS.path :
               isConsidered ? COLORS.nodeSelected :
               COLORS.edge,
        width: isInMST ? 4 : isConsidered ? 3 : 2,
        showWeight: true
      });
    }

    // Draw temporary edge while creating
    if (editMode === 'addEdge' && edgeStartNode && hoveredNode && hoveredNode !== edgeStartNode) {
      const startN = graph.nodes.find(n => n.id === edgeStartNode);
      const endN = graph.nodes.find(n => n.id === hoveredNode);
      if (startN && endN) {
        ctx.strokeStyle = COLORS.nodeSelected;
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(startN.x, startN.y);
        ctx.lineTo(endN.x, endN.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Draw nodes
    for (const node of graph.nodes) {
      const isPrimStart = algorithm === 'prim' && node.id === startNode;
      drawNode(ctx, node, {
        selected: isPrimStart,
        highlighted: node.id === hoveredNode || node.id === edgeStartNode,
        fillColor: isPrimStart ? COLORS.path : undefined
      });
    }

  }, [graph, mstEdges, consideredEdge, hoveredNode, edgeStartNode, editMode, algorithm, startNode]);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    const clickedNode = findNodeAtPoint(x, y, graph.nodes);

    if (editMode === 'addNode' && !clickedNode) {
      const newId = String.fromCharCode(65 + graph.nodes.length);
      setGraph(addNode(graph, x, y, newId));
      return;
    }

    if (editMode === 'addEdge' && clickedNode) {
      if (!edgeStartNode) {
        setEdgeStartNode(clickedNode.id);
      } else if (clickedNode.id !== edgeStartNode) {
        setGraph(addEdge(graph, edgeStartNode, clickedNode.id, newEdgeWeight));
        setEdgeStartNode(null);
      }
      return;
    }

    if (clickedNode) {
      if (e.shiftKey && algorithm === 'prim') {
        setStartNode(clickedNode.id);
      } else {
        setDraggingNode(clickedNode.id);
      }
    }
  }, [graph, editMode, edgeStartNode, newEdgeWeight, algorithm]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    setHoveredNode(findNodeAtPoint(x, y, graph.nodes)?.id ?? null);

    if (draggingNode && editMode === 'view') {
      setGraph(moveNode(graph, draggingNode, x, y));
    }
  }, [graph, draggingNode, editMode]);

  const handleMouseUp = useCallback(() => {
    setDraggingNode(null);
  }, []);

  // Start algorithm
  const startAlgorithm = () => {
    if (algorithm === 'kruskal') {
      setSteps(generateKruskalSteps(graph));
    } else {
      const start = startNode ?? graph.nodes[0]?.id;
      if (start) {
        setStartNode(start);
        setSteps(generatePrimSteps(graph, start));
      }
    }
    setCurrentStep(-1);
    setMstEdges(new Set());
    setIsAnimating(true);
  };

  // Reset
  const reset = () => {
    setSteps([]);
    setCurrentStep(-1);
    setMstEdges(new Set());
    setConsideredEdge(null);
    setIsAnimating(false);
  };

  // Step controls
  const stepForward = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const stepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Get current step info
  const currentStepInfo = currentStep >= 0 ? steps[currentStep] : null;

  // Calculate total MST weight
  const mstWeight = currentStepInfo?.totalWeight ?? 0;

  // Graph status
  const connected = isConnected(graph);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Minimum Spanning Tree</h3>
      <p className="text-dark-300 mb-6">
        Watch Kruskal's or Prim's algorithm find the minimum spanning tree step by step.
      </p>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="rounded-xl border border-dark-600"
            style={{ cursor: editMode === 'addNode' ? 'crosshair' : hoveredNode ? 'pointer' : 'default' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { setDraggingNode(null); setHoveredNode(null); }}
          />

          {/* Edit controls */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { mode: 'view' as const, label: 'View' },
              { mode: 'addNode' as const, label: '+ Vertex' },
              { mode: 'addEdge' as const, label: '+ Edge' }
            ].map(({ mode: m, label }) => (
              <button
                key={m}
                onClick={() => { setEditMode(m); setEdgeStartNode(null); }}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  editMode === m
                    ? 'bg-blue-600 text-white'
                    : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
                }`}
              >
                {label}
              </button>
            ))}
            {editMode === 'addEdge' && (
              <input
                type="number"
                min="1"
                max="99"
                value={newEdgeWeight}
                onChange={e => setNewEdgeWeight(parseInt(e.target.value) || 1)}
                className="w-16 px-2 py-2 bg-dark-700 text-dark-100 rounded-lg text-sm"
                placeholder="Weight"
              />
            )}
          </div>
        </div>

        <div className="flex-1 space-y-4 min-w-0">
          {/* Algorithm selection */}
          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">Algorithm</label>
            <div className="flex gap-2">
              <button
                onClick={() => { setAlgorithm('kruskal'); reset(); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  algorithm === 'kruskal'
                    ? 'bg-green-600 text-white'
                    : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
                }`}
              >
                Kruskal's
              </button>
              <button
                onClick={() => { setAlgorithm('prim'); reset(); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  algorithm === 'prim'
                    ? 'bg-green-600 text-white'
                    : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
                }`}
              >
                Prim's
              </button>
            </div>
          </div>

          {/* Speed control */}
          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">Speed</label>
            <div className="flex gap-2">
              {(['slow', 'medium', 'fast'] as AlgorithmSpeed[]).map(s => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-3 py-1.5 rounded-lg text-sm capitalize ${
                    speed === s
                      ? 'bg-blue-600 text-white'
                      : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Playback controls */}
          <div className="flex gap-2">
            {!isAnimating && currentStep < 0 && (
              <button
                onClick={startAlgorithm}
                disabled={!connected}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  connected
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-dark-600 text-dark-400 cursor-not-allowed'
                }`}
              >
                Start Algorithm
              </button>
            )}
            {(isAnimating || currentStep >= 0) && (
              <>
                <button
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  {isAnimating ? 'Pause' : 'Play'}
                </button>
                <button
                  onClick={stepBackward}
                  disabled={currentStep <= 0}
                  className="px-3 py-2 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600 disabled:opacity-50"
                >
                  ◀ Step
                </button>
                <button
                  onClick={stepForward}
                  disabled={currentStep >= steps.length - 1}
                  className="px-3 py-2 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600 disabled:opacity-50"
                >
                  Step ▶
                </button>
                <button
                  onClick={reset}
                  className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg text-sm hover:bg-red-600/30"
                >
                  Reset
                </button>
              </>
            )}
          </div>

          {/* Current step info */}
          {currentStepInfo && (
            <div className={`p-4 rounded-lg ${
              currentStepInfo.action === 'add' ? 'bg-green-900/30' :
              currentStepInfo.action === 'reject' ? 'bg-red-900/30' :
              'bg-yellow-900/30'
            }`}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-dark-100">
                  Step {currentStep + 1}/{steps.length}
                </span>
                <span className={`text-sm ${
                  currentStepInfo.action === 'add' ? 'text-green-400' :
                  currentStepInfo.action === 'reject' ? 'text-red-400' :
                  'text-yellow-400'
                }`}>
                  {currentStepInfo.action === 'add' ? 'Added' :
                   currentStepInfo.action === 'reject' ? 'Rejected' :
                   'Considering'}
                </span>
              </div>
              <div className="text-sm text-dark-300">
                Edge: {currentStepInfo.edge.source} — {currentStepInfo.edge.target}
                (weight: {currentStepInfo.edge.weight})
              </div>
              {currentStepInfo.reason && (
                <div className="text-sm text-dark-400 mt-1">
                  {currentStepInfo.reason}
                </div>
              )}
            </div>
          )}

          {/* MST weight */}
          <div className="p-4 bg-dark-700/50 rounded-lg">
            <div className="flex justify-between">
              <span className="text-dark-300">Total MST Weight:</span>
              <span className="text-xl font-bold text-green-400">{mstWeight}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-dark-300">Edges in MST:</span>
              <span className="text-dark-100">{mstEdges.size / 2}/{graph.nodes.length - 1}</span>
            </div>
          </div>

          {/* Graph status */}
          {!connected && (
            <div className="p-3 bg-red-900/30 rounded-lg text-red-400 text-sm">
              Graph is not connected. MST algorithms require a connected graph.
            </div>
          )}

          {/* Algorithm description */}
          <div className="text-sm text-dark-400 space-y-1">
            {algorithm === 'kruskal' ? (
              <>
                <p><strong>Kruskal's Algorithm:</strong></p>
                <p>1. Sort edges by weight</p>
                <p>2. Add edges if they don't create a cycle</p>
                <p>3. Stop when n-1 edges are added</p>
              </>
            ) : (
              <>
                <p><strong>Prim's Algorithm:</strong></p>
                <p>1. Start from a vertex (Shift-click to set)</p>
                <p>2. Add minimum weight edge to a new vertex</p>
                <p>3. Repeat until all vertices are included</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MSTAnimator;
