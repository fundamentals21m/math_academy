// PlanarityTester - Planar graph visualization and testing
// Sections 17-18: Planar Graphs

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Graph, GraphNode } from './shared/types';
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
  isConnected,
  moveNode,
  addNode,
  addEdge,
  removeNode
} from './shared/graphUtils';

interface Props {
  className?: string;
}

// Planar graph presets
const PLANAR_PRESETS = [
  { name: 'Tetrahedron (K₄)', graph: generateTetrahedron() },
  { name: 'Cube (Q₃)', graph: generatePresetGraph('cube') },
  { name: 'Octahedron', graph: generateOctahedron() },
  { name: 'Dodecahedron', graph: generatePresetGraph('dodecahedron') },
  { name: 'K₄', graph: generatePresetGraph('complete') },
  { name: 'Petersen', graph: generatePresetGraph('petersen') }
];

const NON_PLANAR_PRESETS = [
  { name: 'K₅', graph: generatePresetGraph('K5') },
  { name: 'K₃,₃', graph: generatePresetGraph('K33') }
];

function generateTetrahedron(): Graph {
  const nodes: GraphNode[] = [
    { id: '0', x: 300, y: 80, label: '1' },
    { id: '1', x: 150, y: 300, label: '2' },
    { id: '2', x: 450, y: 300, label: '3' },
    { id: '3', x: 300, y: 220, label: '4' }
  ];

  const edges = [
    { source: '0', target: '1' },
    { source: '0', target: '2' },
    { source: '0', target: '3' },
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '2', target: '3' }
  ];

  return { nodes, edges };
}

function generateOctahedron(): Graph {
  const nodes: GraphNode[] = [
    { id: '0', x: 300, y: 60, label: '1' },
    { id: '1', x: 150, y: 200, label: '2' },
    { id: '2', x: 300, y: 200, label: '3' },
    { id: '3', x: 450, y: 200, label: '4' },
    { id: '4', x: 225, y: 340, label: '5' },
    { id: '5', x: 375, y: 340, label: '6' }
  ];

  const edges = [
    { source: '0', target: '1' },
    { source: '0', target: '2' },
    { source: '0', target: '3' },
    { source: '1', target: '2' },
    { source: '2', target: '3' },
    { source: '1', target: '4' },
    { source: '2', target: '4' },
    { source: '2', target: '5' },
    { source: '3', target: '5' },
    { source: '4', target: '5' },
    { source: '1', target: '5' },
    { source: '3', target: '4' }
  ];

  return { nodes, edges };
}

export function PlanarityTester({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [graph, setGraph] = useState<Graph>(PLANAR_PRESETS[0].graph);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<'view' | 'addNode' | 'addEdge' | 'delete'>('view');
  const [edgeStartNode, setEdgeStartNode] = useState<string | null>(null);
  const [_showFaces, _setShowFaces] = useState(false);
  const [crossings, setCrossings] = useState<number>(0);

  const width = 600;
  const height = 400;

  // Calculate edge crossings
  useEffect(() => {
    let count = 0;

    for (let i = 0; i < graph.edges.length; i++) {
      for (let j = i + 1; j < graph.edges.length; j++) {
        const e1 = graph.edges[i];
        const e2 = graph.edges[j];

        // Skip if edges share a vertex
        if (e1.source === e2.source || e1.source === e2.target ||
            e1.target === e2.source || e1.target === e2.target) {
          continue;
        }

        const n1 = graph.nodes.find(n => n.id === e1.source);
        const n2 = graph.nodes.find(n => n.id === e1.target);
        const n3 = graph.nodes.find(n => n.id === e2.source);
        const n4 = graph.nodes.find(n => n.id === e2.target);

        if (n1 && n2 && n3 && n4 && doEdgesIntersect(n1, n2, n3, n4)) {
          count++;
        }
      }
    }

    setCrossings(count);
  }, [graph]);

  // Check if two line segments intersect
  function doEdgesIntersect(p1: GraphNode, p2: GraphNode, p3: GraphNode, p4: GraphNode): boolean {
    const d1 = direction(p3, p4, p1);
    const d2 = direction(p3, p4, p2);
    const d3 = direction(p1, p2, p3);
    const d4 = direction(p1, p2, p4);

    if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
        ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
      return true;
    }

    return false;
  }

  function direction(p1: GraphNode, p2: GraphNode, p3: GraphNode): number {
    return (p3.x - p1.x) * (p2.y - p1.y) - (p2.x - p1.x) * (p3.y - p1.y);
  }

  // Euler's formula: V - E + F = 2
  const V = graph.nodes.length;
  const E = graph.edges.length;
  const F = isConnected(graph) && crossings === 0 ? 2 - V + E : null;

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    clearCanvas(ctx, width, height);
    drawGrid(ctx, width, height);

    // Find crossing edges
    const crossingEdges = new Set<number>();
    for (let i = 0; i < graph.edges.length; i++) {
      for (let j = i + 1; j < graph.edges.length; j++) {
        const e1 = graph.edges[i];
        const e2 = graph.edges[j];

        if (e1.source === e2.source || e1.source === e2.target ||
            e1.target === e2.source || e1.target === e2.target) {
          continue;
        }

        const n1 = graph.nodes.find(n => n.id === e1.source);
        const n2 = graph.nodes.find(n => n.id === e1.target);
        const n3 = graph.nodes.find(n => n.id === e2.source);
        const n4 = graph.nodes.find(n => n.id === e2.target);

        if (n1 && n2 && n3 && n4 && doEdgesIntersect(n1, n2, n3, n4)) {
          crossingEdges.add(i);
          crossingEdges.add(j);
        }
      }
    }

    // Draw edges
    graph.edges.forEach((edge, i) => {
      const hasCrossing = crossingEdges.has(i);
      drawEdge(ctx, edge, graph.nodes, {
        color: hasCrossing ? '#ef4444' : COLORS.edge,
        width: hasCrossing ? 3 : 2
      });
    });

    // Draw crossing points
    if (crossings > 0) {
      for (let i = 0; i < graph.edges.length; i++) {
        for (let j = i + 1; j < graph.edges.length; j++) {
          const e1 = graph.edges[i];
          const e2 = graph.edges[j];

          if (e1.source === e2.source || e1.source === e2.target ||
              e1.target === e2.source || e1.target === e2.target) {
            continue;
          }

          const n1 = graph.nodes.find(n => n.id === e1.source);
          const n2 = graph.nodes.find(n => n.id === e1.target);
          const n3 = graph.nodes.find(n => n.id === e2.source);
          const n4 = graph.nodes.find(n => n.id === e2.target);

          if (n1 && n2 && n3 && n4 && doEdgesIntersect(n1, n2, n3, n4)) {
            // Calculate intersection point
            const intersection = lineIntersection(n1, n2, n3, n4);
            if (intersection) {
              ctx.beginPath();
              ctx.arc(intersection.x, intersection.y, 6, 0, Math.PI * 2);
              ctx.fillStyle = '#ef4444';
              ctx.fill();
            }
          }
        }
      }
    }

    // Draw temporary edge
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
      drawNode(ctx, node, {
        highlighted: node.id === hoveredNode || node.id === edgeStartNode
      });
    }

  }, [graph, hoveredNode, edgeStartNode, editMode, crossings]);

  function lineIntersection(
    p1: GraphNode, p2: GraphNode,
    p3: GraphNode, p4: GraphNode
  ): { x: number; y: number } | null {
    const x1 = p1.x, y1 = p1.y;
    const x2 = p2.x, y2 = p2.y;
    const x3 = p3.x, y3 = p3.y;
    const x4 = p4.x, y4 = p4.y;

    const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (Math.abs(denom) < 0.0001) return null;

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;

    return {
      x: x1 + t * (x2 - x1),
      y: y1 + t * (y2 - y1)
    };
  }

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
      return;
    }

    if (clickedNode) {
      setDraggingNode(clickedNode.id);
    }
  }, [graph, editMode, edgeStartNode]);

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
  const loadPreset = (preset: { graph: Graph }) => {
    setGraph(preset.graph);
    setEdgeStartNode(null);
  };

  // Planarity status
  const isPlanarEmbedding = crossings === 0;
  const canBePlanar = V <= 2 || E <= 3 * V - 6; // Necessary condition

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Planarity Tester</h3>
      <p className="text-dark-300 mb-6">
        Test graph planarity by dragging vertices to eliminate edge crossings.
        A planar embedding has no crossing edges.
      </p>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="rounded-xl border border-dark-600"
            style={{ cursor: editMode === 'addNode' ? 'crosshair' : hoveredNode ? 'grab' : 'default' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { setDraggingNode(null); setHoveredNode(null); }}
          />

          {/* Edit mode buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { mode: 'view' as const, label: 'View/Drag' },
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
          {/* Preset graphs */}
          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">Planar Graphs</label>
            <div className="flex flex-wrap gap-2">
              {PLANAR_PRESETS.map((preset, i) => (
                <button
                  key={i}
                  onClick={() => loadPreset(preset)}
                  className="px-3 py-1.5 bg-green-900/30 text-green-300 rounded-lg text-sm hover:bg-green-900/50"
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">Non-Planar Graphs</label>
            <div className="flex flex-wrap gap-2">
              {NON_PLANAR_PRESETS.map((preset, i) => (
                <button
                  key={i}
                  onClick={() => loadPreset(preset)}
                  className="px-3 py-1.5 bg-red-900/30 text-red-300 rounded-lg text-sm hover:bg-red-900/50"
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Planarity status */}
          <div className={`p-4 rounded-lg ${isPlanarEmbedding ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
            <div className={`text-xl font-bold ${isPlanarEmbedding ? 'text-green-400' : 'text-red-400'}`}>
              {isPlanarEmbedding ? 'Planar Embedding!' : `${crossings} Edge Crossing${crossings !== 1 ? 's' : ''}`}
            </div>
            <div className="text-sm text-dark-300 mt-1">
              {isPlanarEmbedding
                ? 'No edges cross in this drawing'
                : 'Drag vertices to try to eliminate crossings'}
            </div>
          </div>

          {/* Euler's formula */}
          <div className="p-4 bg-dark-700/50 rounded-lg">
            <div className="text-sm font-medium text-dark-200 mb-2">Euler's Formula: V - E + F = 2</div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <div className="text-xl font-bold text-blue-400">{V}</div>
                <div className="text-xs text-dark-400">Vertices</div>
              </div>
              <div>
                <div className="text-xl font-bold text-green-400">{E}</div>
                <div className="text-xs text-dark-400">Edges</div>
              </div>
              <div>
                <div className="text-xl font-bold text-amber-400">{F ?? '?'}</div>
                <div className="text-xs text-dark-400">Faces</div>
              </div>
              <div>
                <div className="text-xl font-bold text-dark-100">= 2</div>
                <div className="text-xs text-dark-400">&nbsp;</div>
              </div>
            </div>
            {F !== null && (
              <div className="mt-2 text-sm text-dark-300">
                {V} - {E} + {F} = {V - E + F}
              </div>
            )}
          </div>

          {/* Planarity bounds */}
          <div className="p-4 bg-dark-700/50 rounded-lg">
            <div className="text-sm font-medium text-dark-200 mb-2">Planarity Bounds</div>
            <div className="text-sm text-dark-300 space-y-1">
              <div className="flex justify-between">
                <span>E ≤ 3V - 6:</span>
                <span className={canBePlanar ? 'text-green-400' : 'text-red-400'}>
                  {E} ≤ {3 * V - 6} ({canBePlanar ? 'Possible' : 'Too many edges'})
                </span>
              </div>
            </div>
          </div>

          {/* Kuratowski's theorem */}
          <div className="p-4 bg-dark-700/50 rounded-lg">
            <div className="text-sm font-medium text-dark-200 mb-2">Kuratowski's Theorem</div>
            <div className="text-sm text-dark-300">
              A graph is planar if and only if it contains no subdivision of K₅ or K₃,₃.
            </div>
          </div>

          {/* Instructions */}
          <div className="text-sm text-dark-400 space-y-1">
            <p><strong>Drag vertices:</strong> Rearrange to eliminate crossings</p>
            <p><strong>Red dots:</strong> Edge crossing points</p>
            <p><strong>Goal:</strong> Find a planar embedding (0 crossings)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanarityTester;
