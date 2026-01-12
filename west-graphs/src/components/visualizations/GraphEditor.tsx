// GraphEditor - Interactive graph creation and editing visualization
// Section 1: What Is a Graph?

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Graph, EditorMode, PresetGraphType } from './shared/types';
import {
  clearCanvas,
  drawGrid,
  drawNode,
  drawEdge,
  drawSelectionRing,
  findNodeAtPoint,
  getCanvasCoordinates,
  COLORS
} from './shared/canvasUtils';
import {
  generatePresetGraph,
  getAdjacencyMatrix,
  addNode,
  removeNode,
  addEdge,
  moveNode,
  getDegreeSequence
} from './shared/graphUtils';

interface Props {
  className?: string;
  initialGraph?: Graph;
  showMatrix?: boolean;
  showControls?: boolean;
  onGraphChange?: (graph: Graph) => void;
}

const PRESETS: { value: PresetGraphType; label: string }[] = [
  { value: 'empty', label: 'Empty' },
  { value: 'K5', label: 'K₅ (Complete)' },
  { value: 'K33', label: 'K₃,₃ (Bipartite)' },
  { value: 'petersen', label: 'Petersen' },
  { value: 'cycle', label: 'Cycle (C₆)' },
  { value: 'path', label: 'Path (P₅)' },
  { value: 'cube', label: 'Cube (Q₃)' },
  { value: 'grid', label: 'Grid (3×3)' }
];

export function GraphEditor({
  className = '',
  initialGraph,
  showMatrix = true,
  showControls = true,
  onGraphChange
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [graph, setGraph] = useState<Graph>(initialGraph ?? generatePresetGraph('empty'));
  const [mode, setMode] = useState<EditorMode>('addNode');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [edgeStartNode, setEdgeStartNode] = useState<string | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const width = 600;
  const height = 400;

  // Notify parent of graph changes
  useEffect(() => {
    onGraphChange?.(graph);
  }, [graph, onGraphChange]);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear and draw background
    clearCanvas(ctx, width, height);
    drawGrid(ctx, width, height);

    // Draw edges
    for (const edge of graph.edges) {
      drawEdge(ctx, edge, graph.nodes, {
        highlighted: edge.source === selectedNode || edge.target === selectedNode
      });
    }

    // Draw temporary edge while creating
    if (mode === 'addEdge' && edgeStartNode) {
      const startNode = graph.nodes.find(n => n.id === edgeStartNode);
      if (startNode && hoveredNode && hoveredNode !== edgeStartNode) {
        const endNode = graph.nodes.find(n => n.id === hoveredNode);
        if (endNode) {
          ctx.strokeStyle = COLORS.nodeSelected;
          ctx.lineWidth = 2;
          ctx.setLineDash([6, 4]);
          ctx.beginPath();
          ctx.moveTo(startNode.x, startNode.y);
          ctx.lineTo(endNode.x, endNode.y);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }
    }

    // Draw nodes
    for (const node of graph.nodes) {
      drawNode(ctx, node, {
        selected: node.id === selectedNode,
        highlighted: node.id === hoveredNode || node.id === edgeStartNode
      });
    }

    // Draw selection ring
    if (selectedNode) {
      const selected = graph.nodes.find(n => n.id === selectedNode);
      if (selected) {
        drawSelectionRing(ctx, selected);
      }
    }

  }, [graph, mode, selectedNode, edgeStartNode, hoveredNode]);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    const clickedNode = findNodeAtPoint(x, y, graph.nodes);

    switch (mode) {
      case 'select':
        if (clickedNode) {
          setSelectedNode(clickedNode.id);
          setDraggingNode(clickedNode.id);
        } else {
          setSelectedNode(null);
        }
        break;

      case 'addNode':
        if (!clickedNode) {
          const newGraph = addNode(graph, x, y);
          setGraph(newGraph);
        } else {
          setSelectedNode(clickedNode.id);
        }
        break;

      case 'addEdge':
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
        break;

      case 'delete':
        if (clickedNode) {
          const newGraph = removeNode(graph, clickedNode.id);
          setGraph(newGraph);
          if (selectedNode === clickedNode.id) {
            setSelectedNode(null);
          }
        }
        break;
    }
  }, [graph, mode, edgeStartNode, selectedNode]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);

    // Update cursor style and hovered node
    const nodeAtPoint = findNodeAtPoint(x, y, graph.nodes);
    setHoveredNode(nodeAtPoint?.id ?? null);

    // Handle dragging
    if (draggingNode) {
      const newGraph = moveNode(graph, draggingNode, x, y);
      setGraph(newGraph);
    }
  }, [graph, draggingNode]);

  const handleMouseUp = useCallback(() => {
    setDraggingNode(null);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setDraggingNode(null);
    setHoveredNode(null);
  }, []);

  // Load preset graph
  const loadPreset = (preset: PresetGraphType) => {
    setGraph(generatePresetGraph(preset));
    setSelectedNode(null);
    setEdgeStartNode(null);
  };

  // Clear graph
  const clearGraph = () => {
    setGraph({ nodes: [], edges: [] });
    setSelectedNode(null);
    setEdgeStartNode(null);
  };

  // Delete selected node
  const deleteSelected = () => {
    if (selectedNode) {
      setGraph(removeNode(graph, selectedNode));
      setSelectedNode(null);
    }
  };

  // Get adjacency matrix for display
  const matrix = getAdjacencyMatrix(graph);
  const labels = graph.nodes.map(n => n.label ?? n.id);
  const degrees = getDegreeSequence(graph);

  // Get cursor style based on mode
  const getCursor = () => {
    if (hoveredNode) {
      if (mode === 'delete') return 'pointer';
      if (mode === 'select' || draggingNode) return 'grab';
      if (mode === 'addEdge') return 'crosshair';
      return 'pointer';
    }
    if (mode === 'addNode') return 'crosshair';
    return 'default';
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Interactive Graph Editor</h3>
      <p className="text-dark-300 mb-6">
        Create and manipulate graphs. Click to add vertices, select two vertices to add edges,
        or use the controls below.
      </p>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Canvas */}
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="rounded-xl border border-dark-600"
            style={{ cursor: getCursor() }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          />

          {/* Mode selector */}
          {showControls && (
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { mode: 'addNode' as EditorMode, label: 'Add Vertex', icon: '●' },
                { mode: 'addEdge' as EditorMode, label: 'Add Edge', icon: '—' },
                { mode: 'select' as EditorMode, label: 'Select/Move', icon: '✋' },
                { mode: 'delete' as EditorMode, label: 'Delete', icon: '×' }
              ].map(({ mode: m, label, icon }) => (
                <button
                  key={m}
                  onClick={() => {
                    setMode(m);
                    setEdgeStartNode(null);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    mode === m
                      ? 'bg-blue-600 text-white'
                      : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
                  }`}
                >
                  <span className="mr-1">{icon}</span> {label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Controls and info panel */}
        <div className="flex-1 space-y-6 min-w-0">
          {/* Preset graphs */}
          {showControls && (
            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">
                Load Preset Graph
              </label>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => loadPreset(value)}
                    className="px-3 py-1.5 bg-dark-700 text-dark-200 rounded-lg text-sm hover:bg-dark-600 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Graph statistics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-dark-700/50 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">{graph.nodes.length}</div>
              <div className="text-sm text-dark-300">Vertices</div>
            </div>
            <div className="p-3 bg-dark-700/50 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{graph.edges.length}</div>
              <div className="text-sm text-dark-300">Edges</div>
            </div>
          </div>

          {/* Degree sequence */}
          {graph.nodes.length > 0 && (
            <div>
              <div className="text-sm font-medium text-dark-200 mb-2">Degree Sequence</div>
              <div className="flex flex-wrap gap-1">
                {degrees.map((d, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-dark-700 text-dark-200 rounded text-sm"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Adjacency matrix */}
          {showMatrix && graph.nodes.length > 0 && graph.nodes.length <= 8 && (
            <div>
              <div className="text-sm font-medium text-dark-200 mb-2">Adjacency Matrix</div>
              <div className="overflow-auto">
                <table className="border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="w-8 h-8"></th>
                      {labels.map((label, i) => (
                        <th key={i} className="w-8 h-8 text-center text-dark-300 font-medium">
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {matrix.map((row, i) => (
                      <tr key={i}>
                        <td className="w-8 h-8 text-center text-dark-300 font-medium">
                          {labels[i]}
                        </td>
                        {row.map((val, j) => (
                          <td
                            key={j}
                            className={`w-8 h-8 text-center border border-dark-600 ${
                              val > 0 ? 'bg-blue-500/20 text-blue-300' : 'text-dark-500'
                            }`}
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Actions */}
          {showControls && (
            <div className="flex gap-2">
              <button
                onClick={clearGraph}
                className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
              >
                Clear Graph
              </button>
              {selectedNode && (
                <button
                  onClick={deleteSelected}
                  className="px-4 py-2 bg-amber-600/20 text-amber-400 rounded-lg hover:bg-amber-600/30 transition-colors"
                >
                  Delete Selected
                </button>
              )}
            </div>
          )}

          {/* Instructions */}
          <div className="text-sm text-dark-400 space-y-1">
            <p><strong>Add Vertex:</strong> Click empty space</p>
            <p><strong>Add Edge:</strong> Click two vertices</p>
            <p><strong>Move:</strong> Select mode, then drag</p>
            <p><strong>Delete:</strong> Delete mode, then click</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphEditor;
