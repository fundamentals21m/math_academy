// GraphColoring - Interactive vertex coloring visualization
// Section 14: Vertex Colorings and Upper Bounds

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Graph, PresetGraphType, ColoringStep, AlgorithmSpeed } from './shared/types';
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
  generatePresetGraph,
  getAdjacencyList,
  getDegree,
  moveNode,
  addNode,
  addEdge,
  removeNode
} from './shared/graphUtils';

interface Props {
  className?: string;
}

// Color palette for vertices
const PALETTE = [
  '#ef4444', // red
  '#22c55e', // green
  '#3b82f6', // blue
  '#f59e0b', // amber
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#84cc16'  // lime
];

const PRESETS: { value: PresetGraphType; label: string; expectedChromatic: number }[] = [
  { value: 'petersen', label: 'Petersen', expectedChromatic: 3 },
  { value: 'K5', label: 'K₅', expectedChromatic: 5 },
  { value: 'cycle', label: 'C₆ (even)', expectedChromatic: 2 },
  { value: 'cube', label: 'Cube (Q₃)', expectedChromatic: 2 },
  { value: 'K33', label: 'K₃,₃', expectedChromatic: 2 },
  { value: 'complete', label: 'K₄', expectedChromatic: 4 }
];

export function GraphColoring({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [graph, setGraph] = useState<Graph>(generatePresetGraph('petersen'));
  const [coloring, setColoring] = useState<Map<string, number>>(new Map());
  const [conflicts, setConflicts] = useState<Set<string>>(new Set());
  const [steps, setSteps] = useState<ColoringStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [speed, setSpeed] = useState<AlgorithmSpeed>('medium');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<'color' | 'addNode' | 'addEdge' | 'delete'>('color');
  const [edgeStartNode, setEdgeStartNode] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<number>(0);

  const width = 600;
  const height = 400;

  const speedMs: Record<AlgorithmSpeed, number> = {
    slow: 1000,
    medium: 500,
    fast: 200
  };

  // Check for conflicts
  useEffect(() => {
    const newConflicts = new Set<string>();
    const adj = getAdjacencyList(graph);

    for (const node of graph.nodes) {
      const nodeColor = coloring.get(node.id);
      if (nodeColor === undefined) continue;

      const neighbors = adj.get(node.id) ?? [];
      for (const neighbor of neighbors) {
        const neighborColor = coloring.get(neighbor);
        if (neighborColor === nodeColor) {
          newConflicts.add(node.id);
          newConflicts.add(neighbor);
        }
      }
    }

    setConflicts(newConflicts);
  }, [graph, coloring]);

  // Greedy coloring algorithm
  const generateGreedySteps = (): ColoringStep[] => {
    const steps: ColoringStep[] = [];
    const adj = getAdjacencyList(graph);
    const nodeOrder = [...graph.nodes].sort((a, b) =>
      (adj.get(b.id)?.length ?? 0) - (adj.get(a.id)?.length ?? 0)
    );

    const colors = new Map<string, number>();

    for (const node of nodeOrder) {
      // Find used colors among neighbors
      const usedColors = new Set<number>();
      const neighbors = adj.get(node.id) ?? [];

      for (const neighbor of neighbors) {
        const neighborColor = colors.get(neighbor);
        if (neighborColor !== undefined) {
          usedColors.add(neighborColor);
        }
      }

      // Find smallest unused color
      let color = 0;
      while (usedColors.has(color)) {
        color++;
      }

      colors.set(node.id, color);
      steps.push({ node: node.id, color, action: 'color' });
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

  // Update coloring based on current step
  useEffect(() => {
    if (currentStep < 0) return;

    const newColoring = new Map<string, number>();
    for (let i = 0; i <= currentStep; i++) {
      const step = steps[i];
      if (step.action === 'color') {
        newColoring.set(step.node, step.color);
      }
    }
    setColoring(newColoring);
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
      const sourceColor = coloring.get(edge.source);
      const targetColor = coloring.get(edge.target);
      const isConflict = sourceColor !== undefined &&
                         targetColor !== undefined &&
                         sourceColor === targetColor;

      drawEdge(ctx, edge, graph.nodes, {
        color: isConflict ? '#ef4444' : COLORS.edge,
        width: isConflict ? 3 : 2
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
      const nodeColor = coloring.get(node.id);
      const hasConflict = conflicts.has(node.id);
      const isCurrentStep = steps[currentStep]?.node === node.id;

      drawNode(ctx, node, {
        fillColor: nodeColor !== undefined ? PALETTE[nodeColor % PALETTE.length] : '#475569',
        highlighted: node.id === hoveredNode || node.id === edgeStartNode || isCurrentStep,
        strokeColor: hasConflict ? '#ef4444' : isCurrentStep ? '#fbbf24' : undefined,
        strokeWidth: hasConflict || isCurrentStep ? 4 : 2
      });
    }

  }, [graph, coloring, conflicts, hoveredNode, edgeStartNode, editMode, steps, currentStep]);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    const clickedNode = findNodeAtPoint(x, y, graph.nodes);

    if (editMode === 'addNode' && !clickedNode) {
      setGraph(addNode(graph, x, y));
      return;
    }

    if (editMode === 'addEdge' && clickedNode) {
      if (!edgeStartNode) {
        setEdgeStartNode(clickedNode.id);
      } else if (clickedNode.id !== edgeStartNode) {
        setGraph(addEdge(graph, edgeStartNode, clickedNode.id));
        setEdgeStartNode(null);
      }
      return;
    }

    if (editMode === 'delete' && clickedNode) {
      setGraph(removeNode(graph, clickedNode.id));
      const newColoring = new Map(coloring);
      newColoring.delete(clickedNode.id);
      setColoring(newColoring);
      return;
    }

    if (editMode === 'color' && clickedNode) {
      if (e.shiftKey) {
        // Remove color
        const newColoring = new Map(coloring);
        newColoring.delete(clickedNode.id);
        setColoring(newColoring);
      } else {
        // Set color
        const newColoring = new Map(coloring);
        newColoring.set(clickedNode.id, selectedColor);
        setColoring(newColoring);
      }
      return;
    }

    if (clickedNode) {
      setDraggingNode(clickedNode.id);
    }
  }, [graph, coloring, editMode, edgeStartNode, selectedColor]);

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

  // Run greedy algorithm
  const runGreedy = () => {
    setColoring(new Map());
    setSteps(generateGreedySteps());
    setCurrentStep(-1);
    setIsAnimating(true);
  };

  // Load preset
  const loadPreset = (preset: PresetGraphType) => {
    setGraph(generatePresetGraph(preset));
    setColoring(new Map());
    setSteps([]);
    setCurrentStep(-1);
  };

  // Clear coloring
  const clearColoring = () => {
    setColoring(new Map());
    setSteps([]);
    setCurrentStep(-1);
    setIsAnimating(false);
  };

  // Calculate statistics
  const usedColors = new Set(coloring.values());
  const numColors = usedColors.size;
  const maxDegree = Math.max(...graph.nodes.map(n => getDegree(graph, n.id)), 0);
  const isProperColoring = conflicts.size === 0 && coloring.size === graph.nodes.length;

  // Brooks' theorem check
  const satisfiesBrooks = numColors <= Math.max(maxDegree, 1);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Graph Coloring</h3>
      <p className="text-dark-300 mb-6">
        Color vertices so no adjacent vertices share the same color.
        Click a vertex to assign the selected color, or run the greedy algorithm.
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

          {/* Color palette */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-dark-200 mb-2">Color Palette</label>
            <div className="flex gap-2">
              {PALETTE.slice(0, 6).map((color, i) => (
                <button
                  key={i}
                  onClick={() => { setSelectedColor(i); setEditMode('color'); }}
                  className={`w-10 h-10 rounded-lg border-2 transition-all ${
                    selectedColor === i && editMode === 'color'
                      ? 'border-white scale-110'
                      : 'border-dark-600 hover:border-dark-400'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Edit mode buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { mode: 'color' as const, label: 'Color' },
              { mode: 'addNode' as const, label: '+ Vertex' },
              { mode: 'addEdge' as const, label: '+ Edge' },
              { mode: 'delete' as const, label: 'Delete' }
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
          </div>
        </div>

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

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={runGreedy}
              disabled={isAnimating}
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50"
            >
              {isAnimating ? 'Running...' : 'Run Greedy Algorithm'}
            </button>
            <button
              onClick={clearColoring}
              className="px-4 py-2 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600"
            >
              Clear Colors
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-3 rounded-lg ${isProperColoring ? 'bg-green-900/30' : conflicts.size > 0 ? 'bg-red-900/30' : 'bg-dark-700/50'}`}>
              <div className={`text-2xl font-bold ${isProperColoring ? 'text-green-400' : conflicts.size > 0 ? 'text-red-400' : 'text-dark-100'}`}>
                {numColors}
              </div>
              <div className="text-sm text-dark-300">Colors Used</div>
            </div>
            <div className="p-3 bg-dark-700/50 rounded-lg">
              <div className="text-2xl font-bold text-dark-100">{maxDegree}</div>
              <div className="text-sm text-dark-300">Max Degree (Δ)</div>
            </div>
          </div>

          {/* Coloring status */}
          <div className={`p-4 rounded-lg ${
            isProperColoring ? 'bg-green-900/30' :
            conflicts.size > 0 ? 'bg-red-900/30' :
            'bg-dark-700/50'
          }`}>
            <div className={`font-medium ${
              isProperColoring ? 'text-green-400' :
              conflicts.size > 0 ? 'text-red-400' :
              'text-dark-200'
            }`}>
              {isProperColoring ? 'Valid Coloring!' :
               conflicts.size > 0 ? `${conflicts.size} vertices in conflict` :
               `${graph.nodes.length - coloring.size} vertices uncolored`}
            </div>
          </div>

          {/* Brooks' theorem */}
          <div className="p-4 bg-dark-700/50 rounded-lg">
            <div className="text-sm font-medium text-dark-200 mb-2">Brooks' Theorem</div>
            <div className="text-sm text-dark-300">
              For connected graphs (not complete or odd cycles): χ(G) ≤ Δ(G)
            </div>
            <div className="mt-2 text-sm">
              <span className="text-dark-300">Current:</span>{' '}
              <span className={satisfiesBrooks ? 'text-green-400' : 'text-amber-400'}>
                {numColors} colors ≤ Δ = {maxDegree}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-sm text-dark-400 space-y-1">
            <p><strong>Click vertex:</strong> Assign selected color</p>
            <p><strong>Shift-click:</strong> Remove color</p>
            <p><strong>Red edges:</strong> Adjacent same-color vertices</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphColoring;
