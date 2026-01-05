// Canvas drawing utilities for graph visualizations

import type { GraphNode, GraphEdge, NodeDrawOptions, EdgeDrawOptions } from './types';

// ============================================================================
// Constants
// ============================================================================

export const COLORS = {
  background: '#1e293b',
  grid: '#334155',
  gridMajor: '#475569',
  node: '#60a5fa',
  nodeStroke: '#3b82f6',
  nodeSelected: '#f59e0b',
  nodeHighlight: '#22c55e',
  edge: '#64748b',
  edgeHighlight: '#22c55e',
  edgeSelected: '#f59e0b',
  text: '#e2e8f0',
  textDark: '#94a3b8',
  path: '#10b981',
  cycle: '#f472b6',
  matching: '#a78bfa',
  flow: '#06b6d4'
};

export const DEFAULTS = {
  nodeRadius: 16,
  nodeStrokeWidth: 2,
  edgeWidth: 2,
  fontSize: 12,
  arrowSize: 10
};

// ============================================================================
// Canvas Setup
// ============================================================================

/**
 * Clear canvas and fill with background
 */
export function clearCanvas(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  backgroundColor = COLORS.background
): void {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
}

/**
 * Draw a background grid
 */
export function drawGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spacing = 40
): void {
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 0.5;

  // Vertical lines
  for (let x = spacing; x < width; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // Horizontal lines
  for (let y = spacing; y < height; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

// ============================================================================
// Node Drawing
// ============================================================================

/**
 * Draw a node (vertex)
 */
export function drawNode(
  ctx: CanvasRenderingContext2D,
  node: GraphNode,
  options: NodeDrawOptions = {}
): void {
  const {
    radius = DEFAULTS.nodeRadius,
    fillColor = node.color ?? COLORS.node,
    strokeColor = COLORS.nodeStroke,
    strokeWidth = DEFAULTS.nodeStrokeWidth,
    labelColor = COLORS.text,
    fontSize = DEFAULTS.fontSize,
    selected = false,
    highlighted = false
  } = options;

  const actualFillColor = selected ? COLORS.nodeSelected :
                          highlighted ? COLORS.nodeHighlight :
                          fillColor;
  const actualStrokeColor = selected ? COLORS.nodeSelected :
                            highlighted ? COLORS.nodeHighlight :
                            strokeColor;

  // Draw circle
  ctx.beginPath();
  ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = actualFillColor;
  ctx.fill();
  ctx.strokeStyle = actualStrokeColor;
  ctx.lineWidth = strokeWidth;
  ctx.stroke();

  // Draw label
  if (node.label) {
    ctx.fillStyle = labelColor;
    ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(node.label, node.x, node.y);
  }
}

/**
 * Draw a selection ring around a node
 */
export function drawSelectionRing(
  ctx: CanvasRenderingContext2D,
  node: GraphNode,
  radius = DEFAULTS.nodeRadius + 6
): void {
  ctx.beginPath();
  ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = COLORS.nodeSelected;
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.stroke();
  ctx.setLineDash([]);
}

// ============================================================================
// Edge Drawing
// ============================================================================

/**
 * Draw an edge between two nodes
 */
export function drawEdge(
  ctx: CanvasRenderingContext2D,
  edge: GraphEdge,
  nodes: GraphNode[],
  options: EdgeDrawOptions = {}
): void {
  const sourceNode = nodes.find(n => n.id === edge.source);
  const targetNode = nodes.find(n => n.id === edge.target);

  if (!sourceNode || !targetNode) return;

  const {
    color = edge.color ?? COLORS.edge,
    width = DEFAULTS.edgeWidth,
    dashed = false,
    highlighted = edge.highlighted ?? false,
    showWeight = false,
    showFlow = false,
    curved = false
  } = options;

  const actualColor = highlighted ? COLORS.edgeHighlight : color;
  const actualWidth = highlighted ? width + 1 : width;

  ctx.strokeStyle = actualColor;
  ctx.lineWidth = actualWidth;

  if (dashed) {
    ctx.setLineDash([6, 4]);
  }

  if (curved) {
    // Draw curved edge (for multigraphs or self-loops)
    const midX = (sourceNode.x + targetNode.x) / 2;
    const midY = (sourceNode.y + targetNode.y) / 2;
    const dx = targetNode.x - sourceNode.x;
    const dy = targetNode.y - sourceNode.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    const offset = len * 0.2;

    ctx.beginPath();
    ctx.moveTo(sourceNode.x, sourceNode.y);
    ctx.quadraticCurveTo(
      midX - dy * offset / len,
      midY + dx * offset / len,
      targetNode.x,
      targetNode.y
    );
    ctx.stroke();
  } else {
    // Draw straight edge
    ctx.beginPath();
    ctx.moveTo(sourceNode.x, sourceNode.y);
    ctx.lineTo(targetNode.x, targetNode.y);
    ctx.stroke();
  }

  ctx.setLineDash([]);

  // Draw weight label
  if (showWeight && edge.weight !== undefined) {
    const midX = (sourceNode.x + targetNode.x) / 2;
    const midY = (sourceNode.y + targetNode.y) / 2;
    drawEdgeLabel(ctx, `${edge.weight}`, midX, midY);
  }

  // Draw flow label
  if (showFlow && edge.flow !== undefined && edge.capacity !== undefined) {
    const midX = (sourceNode.x + targetNode.x) / 2;
    const midY = (sourceNode.y + targetNode.y) / 2;
    drawEdgeLabel(ctx, `${edge.flow}/${edge.capacity}`, midX, midY);
  }
}

/**
 * Draw a directed edge (with arrow)
 */
export function drawDirectedEdge(
  ctx: CanvasRenderingContext2D,
  edge: GraphEdge,
  nodes: GraphNode[],
  options: EdgeDrawOptions = {}
): void {
  const sourceNode = nodes.find(n => n.id === edge.source);
  const targetNode = nodes.find(n => n.id === edge.target);

  if (!sourceNode || !targetNode) return;

  const {
    color = edge.color ?? COLORS.edge,
    width = DEFAULTS.edgeWidth,
    dashed = false,
    highlighted = edge.highlighted ?? false,
    showWeight = false,
    showFlow = false
  } = options;

  const actualColor = highlighted ? COLORS.edgeHighlight : color;
  const actualWidth = highlighted ? width + 1 : width;

  // Calculate direction and endpoint (accounting for node radius)
  const dx = targetNode.x - sourceNode.x;
  const dy = targetNode.y - sourceNode.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const unitX = dx / len;
  const unitY = dy / len;

  const startX = sourceNode.x + unitX * DEFAULTS.nodeRadius;
  const startY = sourceNode.y + unitY * DEFAULTS.nodeRadius;
  const endX = targetNode.x - unitX * (DEFAULTS.nodeRadius + DEFAULTS.arrowSize);
  const endY = targetNode.y - unitY * (DEFAULTS.nodeRadius + DEFAULTS.arrowSize);

  ctx.strokeStyle = actualColor;
  ctx.fillStyle = actualColor;
  ctx.lineWidth = actualWidth;

  if (dashed) {
    ctx.setLineDash([6, 4]);
  }

  // Draw line
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  ctx.setLineDash([]);

  // Draw arrowhead
  const arrowX = targetNode.x - unitX * DEFAULTS.nodeRadius;
  const arrowY = targetNode.y - unitY * DEFAULTS.nodeRadius;
  drawArrowhead(ctx, arrowX, arrowY, Math.atan2(dy, dx), DEFAULTS.arrowSize);

  // Draw labels
  const midX = (sourceNode.x + targetNode.x) / 2;
  const midY = (sourceNode.y + targetNode.y) / 2;

  if (showWeight && edge.weight !== undefined) {
    drawEdgeLabel(ctx, `${edge.weight}`, midX, midY - 10);
  }

  if (showFlow && edge.flow !== undefined && edge.capacity !== undefined) {
    drawEdgeLabel(ctx, `${edge.flow}/${edge.capacity}`, midX, midY + 10);
  }
}

/**
 * Draw an arrowhead
 */
export function drawArrowhead(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  size: number = DEFAULTS.arrowSize
): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-size, size / 2);
  ctx.lineTo(-size, -size / 2);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

/**
 * Draw a label on an edge
 */
export function drawEdgeLabel(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number
): void {
  ctx.fillStyle = COLORS.background;
  const metrics = ctx.measureText(text);
  const padding = 4;
  ctx.fillRect(
    x - metrics.width / 2 - padding,
    y - 8 - padding,
    metrics.width + padding * 2,
    16 + padding * 2
  );

  ctx.fillStyle = COLORS.text;
  ctx.font = `${DEFAULTS.fontSize}px Inter, system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y);
}

// ============================================================================
// Path Drawing
// ============================================================================

/**
 * Draw a highlighted path
 */
export function drawPath(
  ctx: CanvasRenderingContext2D,
  path: string[],
  nodes: GraphNode[],
  color = COLORS.path
): void {
  if (path.length < 2) return;

  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.beginPath();

  const startNode = nodes.find(n => n.id === path[0]);
  if (!startNode) return;
  ctx.moveTo(startNode.x, startNode.y);

  for (let i = 1; i < path.length; i++) {
    const node = nodes.find(n => n.id === path[i]);
    if (node) {
      ctx.lineTo(node.x, node.y);
    }
  }

  ctx.stroke();
}

/**
 * Draw a highlighted cycle
 */
export function drawCycle(
  ctx: CanvasRenderingContext2D,
  cycle: string[],
  nodes: GraphNode[],
  color = COLORS.cycle
): void {
  if (cycle.length < 2) return;

  // Draw as a closed path
  const closedPath = [...cycle, cycle[0]];
  drawPath(ctx, closedPath, nodes, color);
}

// ============================================================================
// Adjacency Matrix Drawing
// ============================================================================

/**
 * Draw adjacency matrix
 */
export function drawAdjacencyMatrix(
  ctx: CanvasRenderingContext2D,
  matrix: number[][],
  labels: string[],
  startX: number,
  startY: number,
  cellSize: number = 24
): void {
  const n = matrix.length;

  ctx.font = `${cellSize * 0.5}px Inter, system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Draw labels
  ctx.fillStyle = COLORS.text;
  for (let i = 0; i < n; i++) {
    // Column labels
    ctx.fillText(labels[i], startX + (i + 1.5) * cellSize, startY + cellSize / 2);
    // Row labels
    ctx.fillText(labels[i], startX + cellSize / 2, startY + (i + 1.5) * cellSize);
  }

  // Draw cells
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const x = startX + (j + 1) * cellSize;
      const y = startY + (i + 1) * cellSize;

      // Cell background
      if (matrix[i][j] > 0) {
        ctx.fillStyle = COLORS.node + '40'; // With alpha
        ctx.fillRect(x, y, cellSize, cellSize);
      }

      // Cell border
      ctx.strokeStyle = COLORS.grid;
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, cellSize, cellSize);

      // Cell value
      ctx.fillStyle = matrix[i][j] > 0 ? COLORS.text : COLORS.textDark;
      ctx.fillText(`${matrix[i][j]}`, x + cellSize / 2, y + cellSize / 2);
    }
  }
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Check if a point is inside a node
 */
export function isPointInNode(
  x: number,
  y: number,
  node: GraphNode,
  radius = DEFAULTS.nodeRadius
): boolean {
  const dx = x - node.x;
  const dy = y - node.y;
  return dx * dx + dy * dy <= radius * radius;
}

/**
 * Find node at a point
 */
export function findNodeAtPoint(
  x: number,
  y: number,
  nodes: GraphNode[],
  radius = DEFAULTS.nodeRadius
): GraphNode | null {
  for (const node of nodes) {
    if (isPointInNode(x, y, node, radius)) {
      return node;
    }
  }
  return null;
}

/**
 * Check if a point is near an edge
 */
export function isPointNearEdge(
  x: number,
  y: number,
  edge: GraphEdge,
  nodes: GraphNode[],
  threshold = 8
): boolean {
  const sourceNode = nodes.find(n => n.id === edge.source);
  const targetNode = nodes.find(n => n.id === edge.target);

  if (!sourceNode || !targetNode) return false;

  // Calculate distance from point to line segment
  const ax = sourceNode.x, ay = sourceNode.y;
  const bx = targetNode.x, by = targetNode.y;

  const abx = bx - ax, aby = by - ay;
  const apx = x - ax, apy = y - ay;

  const ab2 = abx * abx + aby * aby;
  const t = Math.max(0, Math.min(1, (apx * abx + apy * aby) / ab2));

  const closestX = ax + t * abx;
  const closestY = ay + t * aby;

  const dx = x - closestX;
  const dy = y - closestY;

  return Math.sqrt(dx * dx + dy * dy) <= threshold;
}

/**
 * Find edge near a point
 */
export function findEdgeAtPoint(
  x: number,
  y: number,
  edges: GraphEdge[],
  nodes: GraphNode[],
  threshold = 8
): GraphEdge | null {
  for (const edge of edges) {
    if (isPointNearEdge(x, y, edge, nodes, threshold)) {
      return edge;
    }
  }
  return null;
}

/**
 * Get canvas coordinates from mouse event
 */
export function getCanvasCoordinates(
  event: React.MouseEvent<HTMLCanvasElement>,
  canvas: HTMLCanvasElement
): { x: number; y: number } {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY
  };
}
