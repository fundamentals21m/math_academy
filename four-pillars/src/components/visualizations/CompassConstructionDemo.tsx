import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

interface Point {
  x: number;
  y: number;
  label?: string;
}

interface Circle {
  center: Point;
  radius: number;
}

interface Line {
  p1: Point;
  p2: Point;
}

type Construction = {
  name: string;
  description: string;
  steps: string[];
  getGeometry: () => { points: Point[]; circles: Circle[]; lines: Line[] };
};

export function CompassConstructionDemo({ className = '' }: Props) {
  const [constructionIndex, setConstructionIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [showLabels, setShowLabels] = useState(true);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const scale = 40;
  const cx = width / 2;
  const cy = height / 2;

  const toSvg = (p: Point) => ({
    x: cx + p.x * scale,
    y: cy - p.y * scale,
  });

  // Define constructions
  const constructions: Construction[] = useMemo(() => [
    {
      name: 'Equilateral Triangle',
      description: 'Construct an equilateral triangle given one side.',
      steps: [
        'Start with points A and B',
        'Draw circle centered at A through B',
        'Draw circle centered at B through A',
        'Mark intersection point C',
        'Connect A-B-C to form the triangle',
      ],
      getGeometry: () => {
        const A: Point = { x: -2, y: 0, label: 'A' };
        const B: Point = { x: 2, y: 0, label: 'B' };
        const dist = 4; // distance between A and B
        const C: Point = { x: 0, y: Math.sqrt(3) * 2, label: 'C' };

        return {
          points: step >= 0 ? [A, B, ...(step >= 3 ? [C] : [])] : [],
          circles: [
            ...(step >= 1 ? [{ center: A, radius: dist }] : []),
            ...(step >= 2 ? [{ center: B, radius: dist }] : []),
          ],
          lines: step >= 4 ? [
            { p1: A, p2: B },
            { p1: B, p2: C },
            { p1: C, p2: A },
          ] : [],
        };
      },
    },
    {
      name: 'Perpendicular Bisector',
      description: 'Construct the perpendicular bisector of a line segment.',
      steps: [
        'Start with segment AB',
        'Draw circle centered at A with radius > half AB',
        'Draw circle centered at B with same radius',
        'Mark intersection points P and Q',
        'Line PQ is the perpendicular bisector',
      ],
      getGeometry: () => {
        const A: Point = { x: -2, y: 0, label: 'A' };
        const B: Point = { x: 2, y: 0, label: 'B' };
        const radius = 3;
        const h = Math.sqrt(radius * radius - 4);
        const P: Point = { x: 0, y: h, label: 'P' };
        const Q: Point = { x: 0, y: -h, label: 'Q' };

        return {
          points: [A, B, ...(step >= 3 ? [P, Q] : [])],
          circles: [
            ...(step >= 1 ? [{ center: A, radius }] : []),
            ...(step >= 2 ? [{ center: B, radius }] : []),
          ],
          lines: [
            { p1: A, p2: B },
            ...(step >= 4 ? [{ p1: P, p2: Q }] : []),
          ],
        };
      },
    },
    {
      name: 'Angle Bisector',
      description: 'Bisect an angle using compass and straightedge.',
      steps: [
        'Start with angle BAC',
        'Draw arc from A intersecting both rays at D and E',
        'Draw arcs from D and E with equal radius',
        'Mark intersection point F',
        'Line AF bisects the angle',
      ],
      getGeometry: () => {
        const A: Point = { x: 0, y: -2, label: 'A' };
        const angle1 = Math.PI / 6;
        const angle2 = Math.PI - Math.PI / 6;
        const B: Point = { x: 4 * Math.cos(angle1), y: -2 + 4 * Math.sin(angle1), label: 'B' };
        const C: Point = { x: 4 * Math.cos(angle2), y: -2 + 4 * Math.sin(angle2), label: 'C' };
        const r1 = 2;
        const D: Point = { x: r1 * Math.cos(angle1), y: -2 + r1 * Math.sin(angle1), label: 'D' };
        const E: Point = { x: r1 * Math.cos(angle2), y: -2 + r1 * Math.sin(angle2), label: 'E' };
        const midAngle = (angle1 + angle2) / 2;
        const F: Point = { x: 3 * Math.cos(midAngle), y: -2 + 3 * Math.sin(midAngle), label: 'F' };

        return {
          points: [A, B, C, ...(step >= 1 ? [D, E] : []), ...(step >= 3 ? [F] : [])],
          circles: [
            ...(step >= 1 ? [{ center: A, radius: r1 }] : []),
            ...(step >= 2 ? [{ center: D, radius: 1.5 }, { center: E, radius: 1.5 }] : []),
          ],
          lines: [
            { p1: A, p2: B },
            { p1: A, p2: C },
            ...(step >= 4 ? [{ p1: A, p2: F }] : []),
          ],
        };
      },
    },
    {
      name: 'Square Root Construction',
      description: 'Construct √n geometrically using a semicircle.',
      steps: [
        'Draw segment of length 1 + n (here n=2)',
        'Mark unit length at point A',
        'Draw semicircle on diameter',
        'Draw perpendicular at A',
        'Height h = √n',
      ],
      getGeometry: () => {
        const n = 2;
        const O: Point = { x: 0, y: 0 }; // center of semicircle
        const P: Point = { x: -(1 + n) / 2, y: 0, label: 'P' }; // left end
        const Q: Point = { x: (1 + n) / 2, y: 0, label: 'Q' }; // right end
        const A: Point = { x: P.x + 1, y: 0, label: 'A' }; // unit mark
        const h = Math.sqrt(n);
        const H: Point = { x: A.x, y: h, label: 'H' };
        const radius = (1 + n) / 2;

        return {
          points: [P, Q, ...(step >= 1 ? [A] : []), ...(step >= 3 ? [H] : [])],
          circles: step >= 2 ? [{ center: O, radius }] : [],
          lines: [
            { p1: P, p2: Q },
            ...(step >= 3 ? [{ p1: A, p2: H }] : []),
          ],
        };
      },
    },
  ], [step]);

  const current = constructions[constructionIndex];
  const geometry = current.getGeometry();
  const maxSteps = current.steps.length - 1;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Compass & Straightedge Constructions</h3>

      <p className="text-dark-300 mb-6">
        Explore classical geometric constructions using only compass and straightedge.
      </p>

      {/* Construction selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {constructions.map((c, i) => (
          <button
            key={c.name}
            onClick={() => { setConstructionIndex(i); setStep(0); }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              constructionIndex === i
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Step control */}
      <div className="mb-4">
        <label className="text-dark-300 text-sm">Step {step + 1} of {maxSteps + 1}</label>
        <input
          type="range"
          min="0"
          max={maxSteps}
          value={step}
          onChange={(e) => setStep(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <p className="text-blue-400 text-sm mt-2">{current.steps[step]}</p>
      </div>

      {/* Canvas */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
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

          {/* Circles */}
          {geometry.circles.map((circle, i) => {
            const center = toSvg(circle.center);
            return (
              <circle
                key={`c${i}`}
                cx={center.x}
                cy={center.y}
                r={circle.radius * scale}
                fill="none"
                stroke="#3b82f6"
                strokeWidth={2}
                strokeDasharray="5 5"
                opacity={0.7}
              />
            );
          })}

          {/* Lines */}
          {geometry.lines.map((line, i) => {
            const p1 = toSvg(line.p1);
            const p2 = toSvg(line.p2);
            return (
              <line
                key={`l${i}`}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="#10b981"
                strokeWidth={2}
              />
            );
          })}

          {/* Points */}
          {geometry.points.map((point, i) => {
            const p = toSvg(point);
            return (
              <g key={`p${i}`}>
                <circle cx={p.x} cy={p.y} r={5} fill="#f97316" />
                {showLabels && point.label && (
                  <text
                    x={p.x + 10}
                    y={p.y - 5}
                    fill="#f97316"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    {point.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Description */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          <strong className="text-orange-400">{current.name}:</strong> {current.description}
        </p>
      </div>

      {/* Toggle */}
      <div className="mt-4">
        <button
          onClick={() => setShowLabels(!showLabels)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showLabels ? 'bg-orange-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Labels
        </button>
      </div>
    </div>
  );
}
