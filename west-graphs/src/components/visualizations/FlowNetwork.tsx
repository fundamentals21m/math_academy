// FlowNetwork - Network flow visualization with Ford-Fulkerson
// Section 13: Network Flow Problems

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Graph, GraphNode, GraphEdge, FlowStep, AlgorithmSpeed } from './shared/types';
import {
  clearCanvas,
  drawGrid,
  drawNode,
  drawDirectedEdge,
  findNodeAtPoint,
  getCanvasCoordinates,
  COLORS
} from './shared/canvasUtils';

interface Props {
  className?: string;
}

interface FlowEdge extends GraphEdge {
  capacity: number;
  flow: number;
}

interface FlowGraph {
  nodes: GraphNode[];
  edges: FlowEdge[];
  source: string;
  sink: string;
}

// Generate a flow network
function generateFlowNetwork(): FlowGraph {
  const nodes: GraphNode[] = [
    { id: 's', x: 80, y: 200, label: 's', color: '#22c55e' },
    { id: 'a', x: 200, y: 100, label: 'a' },
    { id: 'b', x: 200, y: 300, label: 'b' },
    { id: 'c', x: 350, y: 100, label: 'c' },
    { id: 'd', x: 350, y: 300, label: 'd' },
    { id: 't', x: 520, y: 200, label: 't', color: '#ef4444' }
  ];

  const edges: FlowEdge[] = [
    { source: 's', target: 'a', capacity: 10, flow: 0, directed: true },
    { source: 's', target: 'b', capacity: 8, flow: 0, directed: true },
    { source: 'a', target: 'c', capacity: 5, flow: 0, directed: true },
    { source: 'a', target: 'd', capacity: 7, flow: 0, directed: true },
    { source: 'b', target: 'a', capacity: 3, flow: 0, directed: true },
    { source: 'b', target: 'd', capacity: 8, flow: 0, directed: true },
    { source: 'c', target: 't', capacity: 10, flow: 0, directed: true },
    { source: 'd', target: 'c', capacity: 4, flow: 0, directed: true },
    { source: 'd', target: 't', capacity: 12, flow: 0, directed: true }
  ];

  return { nodes, edges, source: 's', sink: 't' };
}

// Alternative flow network
function generateSimpleFlowNetwork(): FlowGraph {
  const nodes: GraphNode[] = [
    { id: 's', x: 100, y: 200, label: 's', color: '#22c55e' },
    { id: 'a', x: 250, y: 100, label: 'a' },
    { id: 'b', x: 250, y: 300, label: 'b' },
    { id: 't', x: 500, y: 200, label: 't', color: '#ef4444' }
  ];

  const edges: FlowEdge[] = [
    { source: 's', target: 'a', capacity: 5, flow: 0, directed: true },
    { source: 's', target: 'b', capacity: 4, flow: 0, directed: true },
    { source: 'a', target: 'b', capacity: 3, flow: 0, directed: true },
    { source: 'a', target: 't', capacity: 6, flow: 0, directed: true },
    { source: 'b', target: 't', capacity: 5, flow: 0, directed: true }
  ];

  return { nodes, edges, source: 's', sink: 't' };
}

export function FlowNetwork({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [flowGraph, setFlowGraph] = useState<FlowGraph>(generateFlowNetwork());
  const [steps, setSteps] = useState<FlowStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [speed, setSpeed] = useState<AlgorithmSpeed>('medium');
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [showResidual, setShowResidual] = useState(false);
  const [minCut, setMinCut] = useState<Set<string>>(new Set());
  const [showMinCut, setShowMinCut] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const width = 600;
  const height = 400;

  const speedMs: Record<AlgorithmSpeed, number> = {
    slow: 1500,
    medium: 800,
    fast: 300
  };

  // Find augmenting path using BFS in residual graph
  const findAugmentingPath = (graph: FlowGraph): { path: string[]; bottleneck: number } | null => {
    const queue: { node: string; path: string[] }[] = [{ node: graph.source, path: [graph.source] }];
    const visited = new Set<string>([graph.source]);

    while (queue.length > 0) {
      const { node, path } = queue.shift()!;

      // Get neighbors with positive residual capacity
      for (const edge of graph.edges) {
        // Forward edge
        if (edge.source === node && !visited.has(edge.target)) {
          const residual = edge.capacity - edge.flow;
          if (residual > 0) {
            const newPath = [...path, edge.target];
            if (edge.target === graph.sink) {
              // Calculate bottleneck
              let bottleneck = Infinity;
              for (let i = 0; i < newPath.length - 1; i++) {
                const e = graph.edges.find(e =>
                  e.source === newPath[i] && e.target === newPath[i + 1]
                );
                if (e) {
                  bottleneck = Math.min(bottleneck, e.capacity - e.flow);
                }
              }
              return { path: newPath, bottleneck };
            }
            visited.add(edge.target);
            queue.push({ node: edge.target, path: newPath });
          }
        }

        // Backward edge (for flow cancellation)
        if (edge.target === node && !visited.has(edge.source) && edge.flow > 0) {
          const newPath = [...path, edge.source];
          if (edge.source === graph.sink) {
            let bottleneck = edge.flow;
            return { path: newPath, bottleneck };
          }
          visited.add(edge.source);
          queue.push({ node: edge.source, path: newPath });
        }
      }
    }

    return null;
  };

  // Run Ford-Fulkerson algorithm
  const runFordFulkerson = () => {
    setIsAnimating(true);
    const newSteps: FlowStep[] = [];
    const workingGraph: FlowGraph = JSON.parse(JSON.stringify(flowGraph));

    // Reset flows
    for (const edge of workingGraph.edges) {
      edge.flow = 0;
    }

    let result = findAugmentingPath(workingGraph);

    while (result) {
      const { path, bottleneck } = result;
      newSteps.push({ path, flow: bottleneck, action: 'find_path' });

      // Augment flow along path
      for (let i = 0; i < path.length - 1; i++) {
        const edge = workingGraph.edges.find(e =>
          e.source === path[i] && e.target === path[i + 1]
        );
        if (edge) {
          edge.flow += bottleneck;
        }
      }

      newSteps.push({ path, flow: bottleneck, action: 'augment' });
      result = findAugmentingPath(workingGraph);
    }

    // Calculate total flow
    const totalFlow = workingGraph.edges
      .filter(e => e.source === workingGraph.source)
      .reduce((sum, e) => sum + e.flow, 0);

    newSteps.push({ path: [], flow: totalFlow, action: 'complete' });

    setSteps(newSteps);
    setCurrentStep(-1);

    // Find min-cut
    const reachable = new Set<string>([workingGraph.source]);
    const queue = [workingGraph.source];
    while (queue.length > 0) {
      const node = queue.shift()!;
      for (const edge of workingGraph.edges) {
        if (edge.source === node && !reachable.has(edge.target) && edge.capacity - edge.flow > 0) {
          reachable.add(edge.target);
          queue.push(edge.target);
        }
      }
    }
    setMinCut(reachable);
  };

  // Animation effect
  useEffect(() => {
    if (!isAnimating || currentStep >= steps.length - 1) {
      if (currentStep >= steps.length - 1 && steps.length > 0) {
        setIsAnimating(false);
        // Update final flow graph
        const workingGraph: FlowGraph = JSON.parse(JSON.stringify(flowGraph));
        for (const edge of workingGraph.edges) {
          edge.flow = 0;
        }
        for (let i = 0; i < steps.length; i++) {
          const step = steps[i];
          if (step.action === 'augment') {
            for (let j = 0; j < step.path.length - 1; j++) {
              const edge = workingGraph.edges.find(e =>
                e.source === step.path[j] && e.target === step.path[j + 1]
              );
              if (edge) {
                edge.flow += step.flow;
              }
            }
          }
        }
        setFlowGraph(workingGraph);
      }
      return;
    }

    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, speedMs[speed]);

    return () => clearTimeout(timer);
  }, [isAnimating, currentStep, steps.length, speed]);

  // Update current path and flow graph based on step
  useEffect(() => {
    if (currentStep < 0) {
      setCurrentPath([]);
      return;
    }

    const step = steps[currentStep];
    if (step) {
      setCurrentPath(step.path);

      // Update flow graph to show current state
      if (step.action === 'augment') {
        const workingGraph: FlowGraph = JSON.parse(JSON.stringify(flowGraph));

        // Apply all augmentations up to current step
        for (let i = 0; i <= currentStep; i++) {
          const s = steps[i];
          if (s.action === 'augment') {
            for (let j = 0; j < s.path.length - 1; j++) {
              const edge = workingGraph.edges.find(e =>
                e.source === s.path[j] && e.target === s.path[j + 1]
              );
              if (edge) {
                edge.flow += s.flow;
              }
            }
          }
        }

        setFlowGraph(workingGraph);
      }
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

    // Build path edge set
    const pathEdges = new Set<string>();
    for (let i = 0; i < currentPath.length - 1; i++) {
      pathEdges.add(`${currentPath[i]}-${currentPath[i + 1]}`);
    }

    // Draw edges
    for (const edge of flowGraph.edges) {
      const isInPath = pathEdges.has(`${edge.source}-${edge.target}`);
      const isSaturated = edge.flow >= edge.capacity;

      // Draw capacity/flow label
      const source = flowGraph.nodes.find(n => n.id === edge.source);
      const target = flowGraph.nodes.find(n => n.id === edge.target);

      if (source && target) {
        const midX = (source.x + target.x) / 2;
        const midY = (source.y + target.y) / 2;

        // Draw edge
        ctx.strokeStyle = isInPath ? COLORS.flow :
                          isSaturated ? '#ef4444' :
                          edge.flow > 0 ? COLORS.path :
                          COLORS.edge;
        ctx.lineWidth = isInPath ? 4 : edge.flow > 0 ? 3 : 2;

        // Calculate direction for arrow
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const unitX = dx / len;
        const unitY = dy / len;

        const startX = source.x + unitX * 16;
        const startY = source.y + unitY * 16;
        const endX = target.x - unitX * 26;
        const endY = target.y - unitY * 26;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Arrowhead
        const arrowX = target.x - unitX * 16;
        const arrowY = target.y - unitY * 16;
        const angle = Math.atan2(dy, dx);

        ctx.fillStyle = ctx.strokeStyle;
        ctx.save();
        ctx.translate(arrowX, arrowY);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-10, 5);
        ctx.lineTo(-10, -5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Draw flow/capacity label
        const offset = 15;
        const perpX = -unitY * offset;
        const perpY = unitX * offset;

        ctx.fillStyle = COLORS.background;
        const label = `${edge.flow}/${edge.capacity}`;
        const metrics = ctx.measureText(label);
        ctx.fillRect(midX + perpX - metrics.width / 2 - 4, midY + perpY - 10, metrics.width + 8, 20);

        ctx.fillStyle = isSaturated ? '#ef4444' : COLORS.text;
        ctx.font = '12px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, midX + perpX, midY + perpY);
      }
    }

    // Draw min-cut visualization
    if (showMinCut && minCut.size > 0) {
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 4]);

      // Find cut edges (edges from reachable to non-reachable)
      for (const edge of flowGraph.edges) {
        if (minCut.has(edge.source) && !minCut.has(edge.target)) {
          const source = flowGraph.nodes.find(n => n.id === edge.source);
          const target = flowGraph.nodes.find(n => n.id === edge.target);
          if (source && target) {
            ctx.beginPath();
            ctx.moveTo(source.x, source.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        }
      }
      ctx.setLineDash([]);
    }

    // Draw nodes
    for (const node of flowGraph.nodes) {
      const isInPath = currentPath.includes(node.id);
      const isInMinCutSource = showMinCut && minCut.has(node.id);

      drawNode(ctx, node, {
        fillColor: node.color ?? (isInMinCutSource ? '#22c55e40' : COLORS.node),
        highlighted: isInPath || node.id === hoveredNode,
        strokeColor: isInMinCutSource ? '#22c55e' : undefined,
        strokeWidth: isInMinCutSource ? 3 : 2
      });
    }

  }, [flowGraph, currentPath, showMinCut, minCut, hoveredNode]);

  // Mouse handlers
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    setHoveredNode(findNodeAtPoint(x, y, flowGraph.nodes)?.id ?? null);
  }, [flowGraph]);

  // Reset
  const reset = () => {
    setFlowGraph(generateFlowNetwork());
    setSteps([]);
    setCurrentStep(-1);
    setCurrentPath([]);
    setMinCut(new Set());
    setIsAnimating(false);
  };

  // Load simple network
  const loadSimple = () => {
    setFlowGraph(generateSimpleFlowNetwork());
    setSteps([]);
    setCurrentStep(-1);
    setCurrentPath([]);
    setMinCut(new Set());
    setIsAnimating(false);
  };

  // Clear flows
  const clearFlows = () => {
    const newGraph = { ...flowGraph };
    newGraph.edges = newGraph.edges.map(e => ({ ...e, flow: 0 }));
    setFlowGraph(newGraph);
    setSteps([]);
    setCurrentStep(-1);
    setCurrentPath([]);
    setMinCut(new Set());
  };

  // Calculate total flow
  const totalFlow = flowGraph.edges
    .filter(e => e.source === flowGraph.source)
    .reduce((sum, e) => sum + e.flow, 0);

  // Get current step info
  const currentStepInfo = currentStep >= 0 ? steps[currentStep] : null;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Network Flow</h3>
      <p className="text-dark-300 mb-6">
        Visualize the Ford-Fulkerson algorithm finding maximum flow. Watch as augmenting paths
        are discovered and flow is pushed through the network.
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
            onMouseLeave={() => setHoveredNode(null)}
          />

          {/* Network selection */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={reset}
              className="px-3 py-2 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600"
            >
              Complex Network
            </button>
            <button
              onClick={loadSimple}
              className="px-3 py-2 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600"
            >
              Simple Network
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-4 min-w-0">
          {/* Speed control */}
          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">Animation Speed</label>
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
          <div className="flex flex-wrap gap-2">
            <button
              onClick={runFordFulkerson}
              disabled={isAnimating}
              className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
            >
              {isAnimating ? 'Running...' : 'Run Ford-Fulkerson'}
            </button>
            <button
              onClick={clearFlows}
              className="px-4 py-2 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600"
            >
              Clear Flows
            </button>
            <button
              onClick={() => setShowMinCut(!showMinCut)}
              disabled={minCut.size === 0}
              className={`px-4 py-2 rounded-lg text-sm ${
                showMinCut
                  ? 'bg-red-600 text-white'
                  : 'bg-dark-700 text-dark-200 hover:bg-dark-600 disabled:opacity-50'
              }`}
            >
              {showMinCut ? 'Hide' : 'Show'} Min-Cut
            </button>
          </div>

          {/* Current step info */}
          {currentStepInfo && (
            <div className={`p-4 rounded-lg ${
              currentStepInfo.action === 'complete' ? 'bg-green-900/30' :
              currentStepInfo.action === 'augment' ? 'bg-cyan-900/30' :
              'bg-yellow-900/30'
            }`}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-dark-100">
                  {currentStepInfo.action === 'complete' ? 'Complete!' :
                   currentStepInfo.action === 'augment' ? 'Augmenting...' :
                   'Found Path'}
                </span>
                <span className="text-sm text-dark-300">
                  Step {currentStep + 1}/{steps.length}
                </span>
              </div>
              {currentStepInfo.path.length > 0 && (
                <div className="text-sm text-dark-300">
                  Path: {currentStepInfo.path.join(' → ')}
                </div>
              )}
              {currentStepInfo.action !== 'complete' && (
                <div className="text-sm text-cyan-400 mt-1">
                  Bottleneck: {currentStepInfo.flow}
                </div>
              )}
            </div>
          )}

          {/* Flow statistics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-dark-700/50 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">{totalFlow}</div>
              <div className="text-sm text-dark-300">Total Flow</div>
            </div>
            <div className="p-3 bg-dark-700/50 rounded-lg">
              <div className="text-2xl font-bold text-dark-100">
                {minCut.size > 0 ? totalFlow : '—'}
              </div>
              <div className="text-sm text-dark-300">Min-Cut Value</div>
            </div>
          </div>

          {/* Max-flow min-cut theorem */}
          <div className="p-4 bg-dark-700/50 rounded-lg">
            <div className="text-sm font-medium text-dark-200 mb-2">Max-Flow Min-Cut Theorem</div>
            <div className="text-sm text-dark-300">
              The maximum flow equals the minimum cut capacity.
              The green vertices show the source side of the minimum cut.
            </div>
          </div>

          {/* Legend */}
          <div className="text-sm text-dark-400 space-y-1">
            <p><span className="text-green-400">●</span> Source vertex</p>
            <p><span className="text-red-400">●</span> Sink vertex</p>
            <p><span className="text-cyan-400">—</span> Current augmenting path</p>
            <p><span className="text-red-400">—</span> Saturated edge (flow = capacity)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowNetwork;
