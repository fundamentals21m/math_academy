// Graph visualization types for west-graphs course

export interface GraphNode {
  id: string;
  x: number;
  y: number;
  color?: string;
  label?: string;
  // For D3 force simulation
  fx?: number | null;
  fy?: number | null;
  vx?: number;
  vy?: number;
  index?: number;
}

export interface GraphEdge {
  source: string;
  target: string;
  weight?: number;
  capacity?: number;
  flow?: number;
  directed?: boolean;
  color?: string;
  highlighted?: boolean;
}

export interface Graph {
  nodes: GraphNode[];
  edges: GraphEdge[];
  directed?: boolean;
}

// Drawing options
export interface NodeDrawOptions {
  radius?: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  labelColor?: string;
  fontSize?: number;
  selected?: boolean;
  highlighted?: boolean;
}

export interface EdgeDrawOptions {
  color?: string;
  width?: number;
  dashed?: boolean;
  highlighted?: boolean;
  showWeight?: boolean;
  showFlow?: boolean;
  curved?: boolean;
}

// Preset graph types
export type PresetGraphType =
  | 'empty'
  | 'K5'
  | 'K33'
  | 'petersen'
  | 'cycle'
  | 'path'
  | 'complete'
  | 'bipartite'
  | 'tree'
  | 'grid'
  | 'cube'
  | 'dodecahedron'
  | 'konigsberg';

// Algorithm result types
export interface PathResult {
  path: string[];
  found: boolean;
}

export interface TraversalStep {
  node: string;
  action: 'visit' | 'explore' | 'backtrack';
  parent?: string;
}

export interface MSTStep {
  edge: GraphEdge;
  action: 'consider' | 'add' | 'reject';
  reason?: string;
  totalWeight?: number;
}

export interface FlowStep {
  path: string[];
  flow: number;
  action: 'find_path' | 'augment' | 'complete';
}

export interface ColoringStep {
  node: string;
  color: number;
  action: 'color' | 'backtrack' | 'conflict';
}

// Component mode types
export type EditorMode = 'select' | 'addNode' | 'addEdge' | 'delete';
export type PathMode = 'path' | 'cycle' | 'eulerian';
export type AlgorithmSpeed = 'slow' | 'medium' | 'fast';
