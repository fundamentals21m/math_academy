// TreeVisualizer - Tree properties and spanning tree visualization
// Section 5: Basic Properties of Trees

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Graph, GraphNode, PresetGraphType } from './shared/types';
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
  isTree,
  isConnected,
  findPath,
  bfs,
  getDegree,
  getAdjacencyList,
  addNode,
  addEdge,
  removeNode,
  removeEdge,
  moveNode
} from './shared/graphUtils';

interface Props {
  className?: string;
  initialGraph?: Graph;
}

const PRESETS: { value: PresetGraphType; label: string }[] = [
  { value: 'tree', label: 'Random Tree' },
  { value: 'path', label: 'Path' },
  { value: 'complete', label: 'K₅ (not tree)' },
  { value: 'cycle', label: 'Cycle (not tree)' }
];

export function TreeVisualizer({ className = '', initialGraph }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [graph, setGraph] = useState<Graph>(initialGraph ?? generatePresetGraph('tree'));
  const [selectedRoot, setSelectedRoot] = useState<string | null>(null);
  const [levels, setLevels] = useState<Map<string, number>>(new Map());
  const [parent, setParent] = useState<Map<string, string | null>>(new Map());
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [pathToRoot, setPathToRoot] = useState<string[]>([]);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<'view' | 'addNode' | 'addEdge' | 'delete'>('view');
  const [edgeStartNode, setEdgeStartNode] = useState<string | null>(null);
  const [showHierarchical, setShowHierarchical] = useState(false);

  const width = 600;
  const height = 400;

  // Compute tree structure when root changes
  useEffect(() => {
    if (!selectedRoot || !isTree(graph)) {
      setLevels(new Map());
      setParent(new Map());
      return;
    }

    // BFS to compute levels and parents
    const newLevels = new Map<string, number>();
    const newParent = new Map<string, string | null>();
    const adj = getAdjacencyList(graph);
    const queue: string[] = [selectedRoot];

    newLevels.set(selectedRoot, 0);
    newParent.set(selectedRoot, null);

    while (queue.length > 0) {
      const current = queue.shift()!;
      const currentLevel = newLevels.get(current)!;
      const neighbors = adj.get(current) ?? [];

      for (const neighbor of neighbors) {
        if (!newLevels.has(neighbor)) {
          newLevels.set(neighbor, currentLevel + 1);
          newParent.set(neighbor, current);
          queue.push(neighbor);
        }
      }
    }

    setLevels(newLevels);
    setParent(newParent);
  }, [graph, selectedRoot]);

  // Update path to root when selected node changes
  useEffect(() => {
    if (!selectedNode || !selectedRoot) {
      setPathToRoot([]);
      return;
    }

    const result = findPath(graph, selectedNode, selectedRoot);
    setPathToRoot(result.path);
  }, [graph, selectedNode, selectedRoot]);

  // Apply hierarchical layout
  useEffect(() => {
    if (!showHierarchical || !selectedRoot || levels.size === 0) return;

    const maxLevel = Math.max(...levels.values());
    const nodesAtLevel: Map<number, string[]> = new Map();

    for (const [nodeId, level] of levels) {
      if (!nodesAtLevel.has(level)) {
        nodesAtLevel.set(level, []);
      }
      nodesAtLevel.get(level)!.push(nodeId);
    }

    // Position nodes
    const newNodes = graph.nodes.map(node => {
      const level = levels.get(node.id);
      if (level === undefined) return node;

      const nodesInLevel = nodesAtLevel.get(level)!;
      const index = nodesInLevel.indexOf(node.id);
      const spacing = width / (nodesInLevel.length + 1);

      return {
        ...node,
        x: spacing * (index + 1),
        y: 60 + (level / (maxLevel || 1)) * 300
      };
    });

    setGraph({ ...graph, nodes: newNodes });
  }, [showHierarchical, selectedRoot, levels]);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    clearCanvas(ctx, width, height);
    drawGrid(ctx, width, height);

    // Build set of edges in path to root
    const pathEdges = new Set<string>();
    for (let i = 0; i < pathToRoot.length - 1; i++) {
      pathEdges.add(`${pathToRoot[i]}-${pathToRoot[i + 1]}`);
      pathEdges.add(`${pathToRoot[i + 1]}-${pathToRoot[i]}`);
    }

    // Draw edges
    for (const edge of graph.edges) {
      const inPath = pathEdges.has(`${edge.source}-${edge.target}`);
      drawEdge(ctx, edge, graph.nodes, {
        highlighted: inPath,
        color: inPath ? COLORS.path : undefined
      });
    }

    // Draw path to root
    if (pathToRoot.length > 1) {
      drawPath(ctx, pathToRoot, graph.nodes, COLORS.path);
    }

    // Draw nodes with level colors
    const levelColors = ['#60a5fa', '#34d399', '#fbbf24', '#f87171', '#a78bfa', '#f472b6'];

    for (const node of graph.nodes) {
      const level = levels.get(node.id);
      const isRoot = node.id === selectedRoot;
      const isSelected = node.id === selectedNode;
      const isHovered = node.id === hoveredNode;

      drawNode(ctx, node, {
        fillColor: isRoot ? COLORS.path :
                   level !== undefined ? levelColors[level % levelColors.length] :
                   COLORS.node,
        selected: isSelected,
        highlighted: isHovered || node.id === edgeStartNode
      });

      // Draw level number
      if (level !== undefined && !isRoot) {
        ctx.fillStyle = COLORS.textDark;
        ctx.font = '10px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`L${level}`, node.x, node.y + 28);
      }
    }

  }, [graph, selectedRoot, selectedNode, pathToRoot, levels, hoveredNode, edgeStartNode]);

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
      if (selectedRoot === clickedNode.id) setSelectedRoot(null);
      if (selectedNode === clickedNode.id) setSelectedNode(null);
      return;
    }

    if (clickedNode) {
      if (e.shiftKey) {
        // Shift-click to set root
        setSelectedRoot(clickedNode.id);
        setShowHierarchical(false);
      } else {
        setSelectedNode(clickedNode.id);
        setDraggingNode(clickedNode.id);
      }
    }
  }, [graph, editMode, edgeStartNode, selectedRoot, selectedNode]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoordinates(e, canvas);
    setHoveredNode(findNodeAtPoint(x, y, graph.nodes)?.id ?? null);

    if (draggingNode && editMode === 'view') {
      setGraph(moveNode(graph, draggingNode, x, y));
      setShowHierarchical(false);
    }
  }, [graph, draggingNode, editMode]);

  const handleMouseUp = useCallback(() => {
    setDraggingNode(null);
  }, []);

  // Load preset
  const loadPreset = (preset: PresetGraphType) => {
    setGraph(generatePresetGraph(preset));
    setSelectedRoot(null);
    setSelectedNode(null);
    setLevels(new Map());
    setParent(new Map());
    setPathToRoot([]);
    setShowHierarchical(false);
  };

  // Tree properties
  const treeStatus = isTree(graph);
  const connectedStatus = isConnected(graph);
  const maxLevel = levels.size > 0 ? Math.max(...levels.values()) : 0;
  const leaves = graph.nodes.filter(n => getDegree(graph, n.id) === 1);

  // Compute eccentricity and center
  const eccentricities = new Map<string, number>();
  if (treeStatus) {
    for (const node of graph.nodes) {
      let maxDist = 0;
      for (const other of graph.nodes) {
        if (node.id !== other.id) {
          const path = findPath(graph, node.id, other.id);
          if (path.found) {
            maxDist = Math.max(maxDist, path.path.length - 1);
          }
        }
      }
      eccentricities.set(node.id, maxDist);
    }
  }

  const radius = eccentricities.size > 0 ? Math.min(...eccentricities.values()) : 0;
  const diameter = eccentricities.size > 0 ? Math.max(...eccentricities.values()) : 0;
  const centerNodes = [...eccentricities.entries()]
    .filter(([_, ecc]) => ecc === radius)
    .map(([id]) => id);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Tree Visualizer</h3>
      <p className="text-dark-300 mb-6">
        Explore tree properties. Shift-click a vertex to set it as root and see the tree structure.
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

          {/* Edit mode buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { mode: 'view' as const, label: 'View' },
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

          {/* Tree status */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-3 rounded-lg ${treeStatus ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
              <div className={`text-lg font-bold ${treeStatus ? 'text-green-400' : 'text-red-400'}`}>
                {treeStatus ? 'Is a Tree' : 'Not a Tree'}
              </div>
              <div className="text-sm text-dark-300">
                {!connectedStatus ? 'Not connected' :
                 graph.edges.length !== graph.nodes.length - 1 ? `${graph.edges.length} edges (need ${graph.nodes.length - 1})` :
                 'n-1 edges, connected'}
              </div>
            </div>
            <div className="p-3 bg-dark-700/50 rounded-lg">
              <div className="text-lg font-bold text-dark-100">
                {graph.nodes.length} vertices, {graph.edges.length} edges
              </div>
              <div className="text-sm text-dark-300">
                {leaves.length} leaves
              </div>
            </div>
          </div>

          {/* Tree metrics (if it's a tree) */}
          {treeStatus && (
            <div className="p-4 bg-dark-700/50 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-dark-300">Radius:</span>
                <span className="text-dark-100">{radius}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-300">Diameter:</span>
                <span className="text-dark-100">{diameter}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-300">Center:</span>
                <span className="text-dark-100">
                  {centerNodes.map(id => graph.nodes.find(n => n.id === id)?.label ?? id).join(', ')}
                </span>
              </div>
              {selectedRoot && (
                <div className="flex justify-between">
                  <span className="text-dark-300">Height (from root):</span>
                  <span className="text-dark-100">{maxLevel}</span>
                </div>
              )}
            </div>
          )}

          {/* Root selection */}
          {treeStatus && (
            <div className="p-4 bg-dark-700/50 rounded-lg">
              <div className="text-sm font-medium text-dark-200 mb-2">
                Root: {selectedRoot ? (graph.nodes.find(n => n.id === selectedRoot)?.label ?? selectedRoot) : 'None (Shift-click to set)'}
              </div>
              {selectedRoot && (
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowHierarchical(!showHierarchical)}
                    className={`px-3 py-1.5 rounded-lg text-sm ${
                      showHierarchical
                        ? 'bg-green-600 text-white'
                        : 'bg-dark-600 text-dark-200 hover:bg-dark-500'
                    }`}
                  >
                    {showHierarchical ? 'Hierarchical Layout On' : 'Apply Hierarchical Layout'}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Selected node info */}
          {selectedNode && treeStatus && (
            <div className="p-4 bg-dark-700/50 rounded-lg">
              <div className="text-sm font-medium text-dark-200 mb-2">
                Selected: {graph.nodes.find(n => n.id === selectedNode)?.label ?? selectedNode}
              </div>
              <div className="text-sm text-dark-300 space-y-1">
                <div>Level: {levels.get(selectedNode) ?? 'N/A'}</div>
                <div>Eccentricity: {eccentricities.get(selectedNode) ?? 'N/A'}</div>
                {pathToRoot.length > 1 && (
                  <div>Path to root: {pathToRoot.map(id => graph.nodes.find(n => n.id === id)?.label ?? id).join(' → ')}</div>
                )}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="text-sm text-dark-400 space-y-1">
            <p><strong>Shift-click:</strong> Set vertex as root</p>
            <p><strong>Click:</strong> Select vertex to see path to root</p>
            <p><strong>Drag:</strong> Move vertices (in view mode)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreeVisualizer;
