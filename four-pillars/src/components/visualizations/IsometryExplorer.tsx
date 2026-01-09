import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

interface Point {
  x: number;
  y: number;
}

type IsometryType = 'reflection' | 'rotation' | 'translation' | 'glide';

export function IsometryExplorer({ className = '' }: Props) {
  const [isometryType, setIsometryType] = useState<IsometryType>('reflection');
  const [reflectionAngle, setReflectionAngle] = useState(0); // angle of reflection line
  const [rotationAngle, setRotationAngle] = useState(45); // rotation angle in degrees
  const [translationX, setTranslationX] = useState(2);
  const [translationY, setTranslationY] = useState(1);
  const [showOriginal, setShowOriginal] = useState(true);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const scale = 30;
  const cx = width / 2;
  const cy = height / 2;

  const toSvg = (p: Point) => ({
    x: cx + p.x * scale,
    y: cy - p.y * scale,
  });

  // Original shape (a simple house shape)
  const originalShape: Point[] = useMemo(() => [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1.5 },
    { x: 0, y: 2.5 },
    { x: -1, y: 1.5 },
  ], []);

  // Apply transformation
  const transformPoint = (p: Point): Point => {
    switch (isometryType) {
      case 'reflection': {
        // Reflect across line through origin at angle
        const theta = (reflectionAngle * Math.PI) / 180;
        const cos2 = Math.cos(2 * theta);
        const sin2 = Math.sin(2 * theta);
        return {
          x: p.x * cos2 + p.y * sin2,
          y: p.x * sin2 - p.y * cos2,
        };
      }
      case 'rotation': {
        // Rotate around origin
        const theta = (rotationAngle * Math.PI) / 180;
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        return {
          x: p.x * cos - p.y * sin,
          y: p.x * sin + p.y * cos,
        };
      }
      case 'translation': {
        return {
          x: p.x + translationX,
          y: p.y + translationY,
        };
      }
      case 'glide': {
        // Glide reflection: reflect then translate along the reflection line
        const theta = (reflectionAngle * Math.PI) / 180;
        const cos2 = Math.cos(2 * theta);
        const sin2 = Math.sin(2 * theta);
        // First reflect
        const rx = p.x * cos2 + p.y * sin2;
        const ry = p.x * sin2 - p.y * cos2;
        // Then translate along the line
        const t = 2; // translation amount
        return {
          x: rx + t * Math.cos(theta),
          y: ry + t * Math.sin(theta),
        };
      }
      default:
        return p;
    }
  };

  const transformedShape = useMemo(
    () => originalShape.map(transformPoint),
    [originalShape, transformPoint]
  );

  // Create path from points
  const createPath = (points: Point[]) => {
    const svgPoints = points.map(toSvg);
    return svgPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
  };

  // Reflection/rotation line endpoints
  const getAxisLine = () => {
    const theta = (reflectionAngle * Math.PI) / 180;
    const len = 6;
    return {
      p1: { x: -len * Math.cos(theta), y: -len * Math.sin(theta) },
      p2: { x: len * Math.cos(theta), y: len * Math.sin(theta) },
    };
  };

  const axisLine = getAxisLine();

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Isometry Explorer</h3>

      <p className="text-dark-300 mb-6">
        Explore distance-preserving transformations (isometries) of the plane:
        reflections, rotations, translations, and glide reflections.
      </p>

      {/* Isometry type selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(['reflection', 'rotation', 'translation', 'glide'] as IsometryType[]).map((type) => (
          <button
            key={type}
            onClick={() => setIsometryType(type)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              isometryType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Controls based on type */}
      <div className="mb-4 space-y-3">
        {(isometryType === 'reflection' || isometryType === 'glide') && (
          <div>
            <label className="text-dark-300 text-sm">
              Reflection Line Angle: {reflectionAngle}°
            </label>
            <input
              type="range"
              min="0"
              max="180"
              step="5"
              value={reflectionAngle}
              onChange={(e) => setReflectionAngle(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        )}

        {isometryType === 'rotation' && (
          <div>
            <label className="text-dark-300 text-sm">
              Rotation Angle: {rotationAngle}°
            </label>
            <input
              type="range"
              min="-180"
              max="180"
              step="5"
              value={rotationAngle}
              onChange={(e) => setRotationAngle(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
          </div>
        )}

        {isometryType === 'translation' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-dark-300 text-sm">Δx = {translationX}</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={translationX}
                onChange={(e) => setTranslationX(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-dark-300 text-sm">Δy = {translationY}</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={translationY}
                onChange={(e) => setTranslationY(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowOriginal(!showOriginal)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showOriginal ? 'bg-blue-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Show Original
        </button>
      </div>

      {/* Canvas */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} opacity={0.3}>
              <line
                x1={cx + i * scale}
                y1={0}
                x2={cx + i * scale}
                y2={height}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 1.5 : 0.5}
              />
              <line
                x1={0}
                y1={cy - i * scale}
                x2={width}
                y2={cy - i * scale}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 1.5 : 0.5}
              />
            </g>
          ))}

          {/* Axis/Mirror line for reflection */}
          {(isometryType === 'reflection' || isometryType === 'glide') && (
            <line
              x1={toSvg(axisLine.p1).x}
              y1={toSvg(axisLine.p1).y}
              x2={toSvg(axisLine.p2).x}
              y2={toSvg(axisLine.p2).y}
              stroke="#a855f7"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          )}

          {/* Rotation center */}
          {isometryType === 'rotation' && (
            <circle cx={cx} cy={cy} r={6} fill="#f97316" />
          )}

          {/* Translation vector */}
          {isometryType === 'translation' && (
            <>
              <line
                x1={cx}
                y1={cy}
                x2={cx + translationX * scale}
                y2={cy - translationY * scale}
                stroke="#3b82f6"
                strokeWidth={3}
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                </marker>
              </defs>
            </>
          )}

          {/* Original shape */}
          {showOriginal && (
            <path
              d={createPath(originalShape)}
              fill="#3b82f620"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          )}

          {/* Transformed shape */}
          <path
            d={createPath(transformedShape)}
            fill="#10b98120"
            stroke="#10b981"
            strokeWidth={2}
          />
        </svg>
      </div>

      {/* Info */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-400 text-sm">Original</p>
          <p className="text-dark-400 text-xs mt-1">Blue house shape</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-emerald-400 text-sm">Transformed</p>
          <p className="text-dark-400 text-xs mt-1">Green is the image</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          {isometryType === 'reflection' && (
            <>
              <strong className="text-purple-400">Reflection:</strong> Mirror image across a line.
              Preserves distances but reverses orientation.
            </>
          )}
          {isometryType === 'rotation' && (
            <>
              <strong className="text-orange-400">Rotation:</strong> Turn around a fixed point.
              Preserves distances and orientation.
            </>
          )}
          {isometryType === 'translation' && (
            <>
              <strong className="text-blue-400">Translation:</strong> Slide by a fixed vector.
              Preserves distances and orientation.
            </>
          )}
          {isometryType === 'glide' && (
            <>
              <strong className="text-pink-400">Glide Reflection:</strong> Reflect then translate
              along the mirror line. The only isometry type that cannot be decomposed into fewer moves.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
