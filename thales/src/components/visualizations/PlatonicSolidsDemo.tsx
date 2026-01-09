import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type SolidType = 'tetrahedron' | 'cube' | 'octahedron' | 'dodecahedron' | 'icosahedron';

interface Solid {
  name: string;
  faces: number;
  vertices: number;
  edges: number;
  faceType: string;
  element: string;
  description: string;
}

const SOLIDS: Record<SolidType, Solid> = {
  tetrahedron: {
    name: 'Tetrahedron',
    faces: 4,
    vertices: 4,
    edges: 6,
    faceType: 'Triangles',
    element: 'Fire',
    description: 'The simplest Platonic solid with 4 triangular faces.',
  },
  cube: {
    name: 'Cube (Hexahedron)',
    faces: 6,
    vertices: 8,
    edges: 12,
    faceType: 'Squares',
    element: 'Earth',
    description: 'The most familiar solid with 6 square faces.',
  },
  octahedron: {
    name: 'Octahedron',
    faces: 8,
    vertices: 6,
    edges: 12,
    faceType: 'Triangles',
    element: 'Air',
    description: '8 triangular faces meeting 4 at each vertex.',
  },
  dodecahedron: {
    name: 'Dodecahedron',
    faces: 12,
    vertices: 20,
    edges: 30,
    faceType: 'Pentagons',
    element: 'Cosmos',
    description: '12 pentagonal faces, considered most mysterious.',
  },
  icosahedron: {
    name: 'Icosahedron',
    faces: 20,
    vertices: 12,
    edges: 30,
    faceType: 'Triangles',
    element: 'Water',
    description: '20 triangular faces meeting 5 at each vertex.',
  },
};

export function PlatonicSolidsDemo({ className = '' }: Props) {
  const [selectedSolid, setSelectedSolid] = useState<SolidType>('tetrahedron');
  const [rotationX, setRotationX] = useState(20);
  const [rotationY, setRotationY] = useState(30);

  const solid = SOLIDS[selectedSolid];

  // SVG dimensions
  const width = 300;
  const height = 300;
  const cx = 150;
  const cy = 150;
  const scale = 80;

  // 3D to 2D projection with rotation
  const project = (x: number, y: number, z: number) => {
    const radX = (rotationX * Math.PI) / 180;
    const radY = (rotationY * Math.PI) / 180;

    // Rotate around Y axis
    const x1 = x * Math.cos(radY) - z * Math.sin(radY);
    const z1 = x * Math.sin(radY) + z * Math.cos(radY);

    // Rotate around X axis
    const y1 = y * Math.cos(radX) - z1 * Math.sin(radX);
    const z2 = y * Math.sin(radX) + z1 * Math.cos(radX);

    // Simple perspective
    const perspective = 4;
    const s = perspective / (perspective + z2);

    return {
      x: cx + x1 * scale * s,
      y: cy - y1 * scale * s,
      z: z2,
    };
  };

  // Vertices for each solid
  const getVertices = (): number[][] => {
    const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio

    switch (selectedSolid) {
      case 'tetrahedron':
        return [
          [1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]
        ].map(v => v.map(c => c / Math.sqrt(3)));
      case 'cube':
        return [
          [-0.6, -0.6, -0.6], [0.6, -0.6, -0.6], [0.6, 0.6, -0.6], [-0.6, 0.6, -0.6],
          [-0.6, -0.6, 0.6], [0.6, -0.6, 0.6], [0.6, 0.6, 0.6], [-0.6, 0.6, 0.6]
        ];
      case 'octahedron':
        return [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
      case 'dodecahedron':
        const p = phi * 0.5;
        const ip = 0.5 / phi;
        return [
          [0.5, 0.5, 0.5], [0.5, 0.5, -0.5], [0.5, -0.5, 0.5], [0.5, -0.5, -0.5],
          [-0.5, 0.5, 0.5], [-0.5, 0.5, -0.5], [-0.5, -0.5, 0.5], [-0.5, -0.5, -0.5],
          [0, ip, p], [0, ip, -p], [0, -ip, p], [0, -ip, -p],
          [ip, p, 0], [ip, -p, 0], [-ip, p, 0], [-ip, -p, 0],
          [p, 0, ip], [p, 0, -ip], [-p, 0, ip], [-p, 0, -ip]
        ];
      case 'icosahedron':
        const a = phi * 0.5;
        const b = 0.5;
        return [
          [0, b, a], [0, b, -a], [0, -b, a], [0, -b, -a],
          [b, a, 0], [b, -a, 0], [-b, a, 0], [-b, -a, 0],
          [a, 0, b], [a, 0, -b], [-a, 0, b], [-a, 0, -b]
        ];
      default:
        return [];
    }
  };

  // Edges for each solid
  const getEdges = (): number[][] => {
    switch (selectedSolid) {
      case 'tetrahedron':
        return [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
      case 'cube':
        return [
          [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4],
          [0, 4], [1, 5], [2, 6], [3, 7]
        ];
      case 'octahedron':
        return [
          [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5],
          [2, 4], [4, 3], [3, 5], [5, 2]
        ];
      case 'dodecahedron':
        return [
          [0, 8], [0, 12], [0, 16], [1, 9], [1, 12], [1, 17], [2, 10], [2, 13], [2, 16],
          [3, 11], [3, 13], [3, 17], [4, 8], [4, 14], [4, 18], [5, 9], [5, 14], [5, 19],
          [6, 10], [6, 15], [6, 18], [7, 11], [7, 15], [7, 19], [8, 10], [9, 11],
          [12, 14], [13, 15], [16, 17], [18, 19]
        ];
      case 'icosahedron':
        return [
          [0, 2], [0, 4], [0, 6], [0, 8], [0, 10], [1, 3], [1, 4], [1, 6], [1, 9], [1, 11],
          [2, 5], [2, 7], [2, 8], [2, 10], [3, 5], [3, 7], [3, 9], [3, 11],
          [4, 6], [4, 8], [4, 9], [5, 7], [5, 8], [5, 9], [6, 10], [6, 11],
          [7, 10], [7, 11], [8, 9], [10, 11]
        ];
      default:
        return [];
    }
  };

  const vertices = getVertices();
  const edges = getEdges();
  const projectedVertices = vertices.map(v => project(v[0], v[1], v[2]));

  // Sort edges by depth for proper rendering
  const sortedEdges = useMemo(() => {
    return [...edges].sort((a, b) => {
      const zA = (projectedVertices[a[0]].z + projectedVertices[a[1]].z) / 2;
      const zB = (projectedVertices[b[0]].z + projectedVertices[b[1]].z) / 2;
      return zA - zB;
    });
  }, [edges, projectedVertices]);

  // Verify Euler's formula
  const eulerCheck = solid.vertices - solid.edges + solid.faces;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Platonic Solids</h3>

      <p className="text-dark-300 mb-6">
        The five regular polyhedra: each face is a regular polygon, and the same number
        of faces meet at each vertex. The Greeks associated them with the elements.
      </p>

      {/* Solid selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(SOLIDS) as SolidType[]).map(type => (
          <button
            key={type}
            onClick={() => setSelectedSolid(type)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedSolid === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {SOLIDS[type].name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Rotation controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-blue-400 text-sm">Rotate X: {rotationX}°</label>
          <input
            type="range"
            min="0"
            max="360"
            step="5"
            value={rotationX}
            onChange={(e) => setRotationX(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-orange-400 text-sm">Rotate Y: {rotationY}°</label>
          <input
            type="range"
            min="0"
            max="360"
            step="5"
            value={rotationY}
            onChange={(e) => setRotationY(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>
      </div>

      {/* 3D visualization */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Edges */}
          {sortedEdges.map(([i, j], idx) => (
            <line
              key={idx}
              x1={projectedVertices[i].x}
              y1={projectedVertices[i].y}
              x2={projectedVertices[j].x}
              y2={projectedVertices[j].y}
              stroke="#f97316"
              strokeWidth={2}
              opacity={0.7 + 0.3 * ((projectedVertices[i].z + projectedVertices[j].z) / 4 + 0.5)}
            />
          ))}

          {/* Vertices */}
          {projectedVertices.map((v, i) => (
            <circle
              key={i}
              cx={v.x}
              cy={v.y}
              r={5}
              fill="#3b82f6"
              opacity={0.7 + 0.3 * (v.z / 2 + 0.5)}
            />
          ))}
        </svg>
      </div>

      {/* Properties */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Faces (F)</p>
          <p className="text-blue-400 font-mono text-lg">{solid.faces}</p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Vertices (V)</p>
          <p className="text-orange-400 font-mono text-lg">{solid.vertices}</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Edges (E)</p>
          <p className="text-emerald-400 font-mono text-lg">{solid.edges}</p>
        </div>
        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
          <p className="text-dark-400 text-xs">Element</p>
          <p className="text-purple-400 font-mono text-sm">{solid.element}</p>
        </div>
      </div>

      {/* Euler's formula */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Euler's Polyhedron Formula</p>
        <p className="text-dark-100 font-mono mt-1">
          V - E + F = {solid.vertices} - {solid.edges} + {solid.faces} = {eulerCheck}
        </p>
        <p className="text-dark-400 text-sm mt-2">
          For any convex polyhedron, V - E + F = 2. This is one of the most beautiful results in topology!
        </p>
      </div>

      {/* Description */}
      <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
        <p className="text-blue-400 font-medium">{solid.name}</p>
        <p className="text-dark-300 text-sm mt-1">
          {solid.description} Face type: {solid.faceType}.
        </p>
      </div>
    </div>
  );
}
