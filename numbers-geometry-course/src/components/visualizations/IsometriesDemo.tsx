import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type TransformType = 'rotation' | 'reflection' | 'translation';

interface Point {
  x: number;
  y: number;
}

export function IsometriesDemo({ className = '' }: Props) {
  const [transformType, setTransformType] = useState<TransformType>('rotation');
  const [angle, setAngle] = useState(45); // degrees
  const [translateX, setTranslateX] = useState(2);
  const [translateY, setTranslateY] = useState(1);
  const [reflectionAngle, setReflectionAngle] = useState(0); // angle of reflection line

  // SVG dimensions
  const width = 400;
  const height = 400;
  const padding = 40;
  const plotSize = width - 2 * padding;

  const xMin = -5;
  const xMax = 5;
  const yMin = -5;
  const yMax = 5;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotSize;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotSize;

  // Original shape (a simple triangle)
  const originalShape: Point[] = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 2, y: 3 },
  ];

  // Apply transformation
  const transformedShape = useMemo(() => {
    const angleRad = (angle * Math.PI) / 180;
    const reflAngleRad = (reflectionAngle * Math.PI) / 180;

    return originalShape.map((p) => {
      if (transformType === 'rotation') {
        // Rotate around origin
        return {
          x: p.x * Math.cos(angleRad) - p.y * Math.sin(angleRad),
          y: p.x * Math.sin(angleRad) + p.y * Math.cos(angleRad),
        };
      } else if (transformType === 'translation') {
        return {
          x: p.x + translateX,
          y: p.y + translateY,
        };
      } else {
        // Reflection across line through origin at reflectionAngle
        // Formula: reflect (x, y) across line y = x * tan(θ)
        const cos2 = Math.cos(2 * reflAngleRad);
        const sin2 = Math.sin(2 * reflAngleRad);
        return {
          x: p.x * cos2 + p.y * sin2,
          y: p.x * sin2 - p.y * cos2,
        };
      }
    });
  }, [originalShape, transformType, angle, translateX, translateY, reflectionAngle]);

  const shapeToPath = (shape: Point[]) =>
    shape.map((p, i) => `${i === 0 ? 'M' : 'L'} ${toSvgX(p.x)} ${toSvgY(p.y)}`).join(' ') + ' Z';

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Isometries of the Euclidean Plane</h3>

      <p className="text-dark-300 mb-6">
        <strong>Isometries</strong> are transformations that preserve distances:{' '}
        <span className="text-blue-400">rotations</span>,{' '}
        <span className="text-emerald-400">reflections</span>, and{' '}
        <span className="text-orange-400">translations</span>.
      </p>

      {/* Transform type selector */}
      <div className="flex gap-2 mb-4">
        {[
          { type: 'rotation' as const, label: 'Rotation', color: 'blue' },
          { type: 'reflection' as const, label: 'Reflection', color: 'emerald' },
          { type: 'translation' as const, label: 'Translation', color: 'orange' },
        ].map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setTransformType(type)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              transformType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Controls based on transform type */}
      <div className="mb-4">
        {transformType === 'rotation' && (
          <div>
            <label className="text-blue-400 text-sm">Rotation angle: {angle}°</label>
            <input
              type="range"
              min="0"
              max="360"
              step="5"
              value={angle}
              onChange={(e) => setAngle(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        )}
        {transformType === 'reflection' && (
          <div>
            <label className="text-emerald-400 text-sm">Reflection line angle: {reflectionAngle}°</label>
            <input
              type="range"
              min="0"
              max="180"
              step="5"
              value={reflectionAngle}
              onChange={(e) => setReflectionAngle(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
        )}
        {transformType === 'translation' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-orange-400 text-sm">Translate x: {translateX.toFixed(1)}</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={translateX}
                onChange={(e) => setTranslateX(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
            <div>
              <label className="text-orange-400 text-sm">Translate y: {translateY.toFixed(1)}</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={translateY}
                onChange={(e) => setTranslateY(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
            <g key={`grid${i}`}>
              <line
                x1={toSvgX(xMin)}
                y1={toSvgY(i)}
                x2={toSvgX(xMax)}
                y2={toSvgY(i)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={toSvgX(i)}
                y1={toSvgY(yMin)}
                x2={toSvgX(i)}
                y2={toSvgY(yMax)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Rotation center or reflection line */}
          {transformType === 'rotation' && (
            <circle cx={toSvgX(0)} cy={toSvgY(0)} r={6} fill="#3b82f6" />
          )}
          {transformType === 'reflection' && (
            <line
              x1={toSvgX(-5 * Math.cos((reflectionAngle * Math.PI) / 180))}
              y1={toSvgY(-5 * Math.sin((reflectionAngle * Math.PI) / 180))}
              x2={toSvgX(5 * Math.cos((reflectionAngle * Math.PI) / 180))}
              y2={toSvgY(5 * Math.sin((reflectionAngle * Math.PI) / 180))}
              stroke="#10b981"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          )}
          {transformType === 'translation' && (
            <line
              x1={toSvgX(0)}
              y1={toSvgY(0)}
              x2={toSvgX(translateX)}
              y2={toSvgY(translateY)}
              stroke="#f97316"
              strokeWidth={2}
              markerEnd="url(#arrowhead)"
            />
          )}

          {/* Arrow marker */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
            </marker>
          </defs>

          {/* Original shape */}
          <path
            d={shapeToPath(originalShape)}
            fill="#6366f1"
            fillOpacity={0.3}
            stroke="#6366f1"
            strokeWidth={2}
          />
          {originalShape.map((p, i) => (
            <circle key={`orig${i}`} cx={toSvgX(p.x)} cy={toSvgY(p.y)} r={4} fill="#6366f1" />
          ))}

          {/* Transformed shape */}
          <path
            d={shapeToPath(transformedShape)}
            fill={transformType === 'rotation' ? '#3b82f6' : transformType === 'reflection' ? '#10b981' : '#f97316'}
            fillOpacity={0.3}
            stroke={transformType === 'rotation' ? '#3b82f6' : transformType === 'reflection' ? '#10b981' : '#f97316'}
            strokeWidth={2}
          />
          {transformedShape.map((p, i) => (
            <circle
              key={`trans${i}`}
              cx={toSvgX(p.x)}
              cy={toSvgY(p.y)}
              r={4}
              fill={transformType === 'rotation' ? '#3b82f6' : transformType === 'reflection' ? '#10b981' : '#f97316'}
            />
          ))}
        </svg>
      </div>

      {/* Info */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
          <p className="text-dark-400 text-xs">Original (purple)</p>
          <p className="text-indigo-400 font-mono text-sm">
            ({originalShape[0].x}, {originalShape[0].y}), ({originalShape[1].x}, {originalShape[1].y}), ({originalShape[2].x}, {originalShape[2].y})
          </p>
        </div>
        <div className={`p-3 rounded-xl ${
          transformType === 'rotation' ? 'bg-blue-500/10 border-blue-500/30' :
          transformType === 'reflection' ? 'bg-emerald-500/10 border-emerald-500/30' :
          'bg-orange-500/10 border-orange-500/30'
        } border`}>
          <p className="text-dark-400 text-xs">Transformed</p>
          <p className={`font-mono text-sm ${
            transformType === 'rotation' ? 'text-blue-400' :
            transformType === 'reflection' ? 'text-emerald-400' :
            'text-orange-400'
          }`}>
            ({transformedShape[0].x.toFixed(1)}, {transformedShape[0].y.toFixed(1)}), ...
          </p>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-100 font-medium">
          {transformType === 'rotation' && 'Rotation preserves distances and orientation.'}
          {transformType === 'reflection' && 'Reflection preserves distances but reverses orientation.'}
          {transformType === 'translation' && 'Translation moves every point by the same vector.'}
        </p>
        <p className="text-dark-400 text-sm mt-2">
          All isometries can be expressed as compositions of these three basic types.
        </p>
      </div>
    </div>
  );
}
