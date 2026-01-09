import { useState } from 'react';

interface Props {
  className?: string;
}

type Construction = 'perpendicular' | 'bisector' | 'equilateral' | 'hexagon';

export function RulerCompassDemo({ className = '' }: Props) {
  const [construction, setConstruction] = useState<Construction>('perpendicular');
  const [step, setStep] = useState(0);

  const maxSteps: Record<Construction, number> = {
    perpendicular: 4,
    bisector: 3,
    equilateral: 3,
    hexagon: 6,
  };

  // SVG dimensions
  const width = 400;
  const height = 350;
  const cx = 200;
  const cy = 175;

  const nextStep = () => setStep(s => Math.min(s + 1, maxSteps[construction]));
  const prevStep = () => setStep(s => Math.max(s - 1, 0));
  const reset = () => setStep(0);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Ruler and Compass Constructions</h3>

      <p className="text-dark-300 mb-6">
        The ancient Greeks restricted geometry to constructions using only an unmarked straightedge
        and a compass. Remarkably, many beautiful figures can be constructed this way!
      </p>

      {/* Construction selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { type: 'perpendicular' as const, label: 'Perpendicular' },
          { type: 'bisector' as const, label: 'Angle Bisector' },
          { type: 'equilateral' as const, label: 'Equilateral △' },
          { type: 'hexagon' as const, label: 'Hexagon' },
        ].map(({ type, label }) => (
          <button
            key={type}
            onClick={() => { setConstruction(type); setStep(0); }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              construction === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Step controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={prevStep}
          disabled={step === 0}
          className="px-4 py-2 rounded-lg bg-dark-600 text-dark-300 disabled:opacity-50"
        >
          ← Prev
        </button>
        <button
          onClick={nextStep}
          disabled={step === maxSteps[construction]}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white disabled:opacity-50"
        >
          Next →
        </button>
        <button onClick={reset} className="px-4 py-2 rounded-lg bg-dark-600 text-dark-300">
          Reset
        </button>
        <span className="px-4 py-2 text-dark-400">
          Step {step}/{maxSteps[construction]}
        </span>
      </div>

      {/* Canvas */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid dots */}
          {Array.from({ length: 9 }, (_, i) =>
            Array.from({ length: 7 }, (_, j) => (
              <circle key={`${i}-${j}`} cx={50 + i * 40} cy={25 + j * 50} r={1} fill="#374151" />
            ))
          )}

          {construction === 'perpendicular' && (
            <>
              {/* Given line */}
              <line x1={80} y1={cy} x2={320} y2={cy} stroke="#6b7280" strokeWidth={2} />
              <circle cx={200} cy={cy} r={4} fill="#3b82f6" />
              <text x={200} y={cy + 20} fill="#3b82f6" fontSize="11" textAnchor="middle">P</text>

              {step >= 1 && (
                <>
                  {/* Arc 1 */}
                  <circle cx={200} cy={cy} r={70} fill="none" stroke="#f97316" strokeWidth={1} strokeDasharray="4 4" />
                  <circle cx={130} cy={cy} r={4} fill="#f97316" />
                  <circle cx={270} cy={cy} r={4} fill="#f97316" />
                  <text x={130} y={cy + 20} fill="#f97316" fontSize="10" textAnchor="middle">A</text>
                  <text x={270} y={cy + 20} fill="#f97316" fontSize="10" textAnchor="middle">B</text>
                </>
              )}

              {step >= 2 && (
                <>
                  {/* Arc from A */}
                  <path
                    d="M 130 105 A 80 80 0 0 0 130 245"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                  />
                </>
              )}

              {step >= 3 && (
                <>
                  {/* Arc from B */}
                  <path
                    d="M 270 105 A 80 80 0 0 1 270 245"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                  />
                  {/* Intersection points */}
                  <circle cx={200} cy={cy - 75} r={4} fill="#10b981" />
                  <circle cx={200} cy={cy + 75} r={4} fill="#10b981" />
                </>
              )}

              {step >= 4 && (
                <>
                  {/* Perpendicular line */}
                  <line x1={200} y1={50} x2={200} y2={300} stroke="#a855f7" strokeWidth={3} />
                  <text x={220} y={60} fill="#a855f7" fontSize="11">Perpendicular</text>
                </>
              )}
            </>
          )}

          {construction === 'bisector' && (
            <>
              {/* Given angle */}
              <line x1={100} y1={250} x2={200} y2={100} stroke="#6b7280" strokeWidth={2} />
              <line x1={100} y1={250} x2={300} y2={250} stroke="#6b7280" strokeWidth={2} />
              <circle cx={100} cy={250} r={4} fill="#3b82f6" />
              <text x={85} y={260} fill="#3b82f6" fontSize="11">O</text>

              {step >= 1 && (
                <>
                  {/* Arc from O */}
                  <path
                    d="M 160 185 A 80 80 0 0 1 180 250"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth={2}
                  />
                  <circle cx={160} cy={185} r={4} fill="#f97316" />
                  <circle cx={180} cy={250} r={4} fill="#f97316" />
                </>
              )}

              {step >= 2 && (
                <>
                  {/* Arcs from intersection points */}
                  <circle cx={160} cy={185} r={60} fill="none" stroke="#10b981" strokeWidth={1} strokeDasharray="4 4" />
                  <circle cx={180} cy={250} r={60} fill="none" stroke="#10b981" strokeWidth={1} strokeDasharray="4 4" />
                </>
              )}

              {step >= 3 && (
                <>
                  {/* Bisector */}
                  <line x1={100} y1={250} x2={260} y2={130} stroke="#a855f7" strokeWidth={3} />
                  <text x={265} y={125} fill="#a855f7" fontSize="11">Bisector</text>
                </>
              )}
            </>
          )}

          {construction === 'equilateral' && (
            <>
              {/* Base line segment */}
              <line x1={120} y1={220} x2={280} y2={220} stroke="#6b7280" strokeWidth={2} />
              <circle cx={120} cy={220} r={4} fill="#3b82f6" />
              <circle cx={280} cy={220} r={4} fill="#3b82f6" />
              <text x={120} y={240} fill="#3b82f6" fontSize="11" textAnchor="middle">A</text>
              <text x={280} y={240} fill="#3b82f6" fontSize="11" textAnchor="middle">B</text>

              {step >= 1 && (
                <>
                  {/* Circle from A */}
                  <circle cx={120} cy={220} r={160} fill="none" stroke="#f97316" strokeWidth={1} strokeDasharray="4 4" />
                </>
              )}

              {step >= 2 && (
                <>
                  {/* Circle from B */}
                  <circle cx={280} cy={220} r={160} fill="none" stroke="#10b981" strokeWidth={1} strokeDasharray="4 4" />
                  {/* Top intersection */}
                  <circle cx={200} cy={81} r={4} fill="#a855f7" />
                  <text x={200} y={70} fill="#a855f7" fontSize="11" textAnchor="middle">C</text>
                </>
              )}

              {step >= 3 && (
                <>
                  {/* Triangle */}
                  <polygon
                    points="120,220 280,220 200,81"
                    fill="#a855f7"
                    fillOpacity={0.2}
                    stroke="#a855f7"
                    strokeWidth={3}
                  />
                </>
              )}
            </>
          )}

          {construction === 'hexagon' && (
            <>
              {/* Center and circle */}
              <circle cx={cx} cy={cy} r={100} fill="none" stroke="#6b7280" strokeWidth={2} />
              <circle cx={cx} cy={cy} r={4} fill="#3b82f6" />

              {step >= 1 && (
                <>
                  {/* First point */}
                  <circle cx={cx + 100} cy={cy} r={4} fill="#f97316" />
                </>
              )}

              {step >= 2 && (
                <>
                  {/* Arc from first point */}
                  <circle cx={cx + 100} cy={cy} r={100} fill="none" stroke="#f97316" strokeWidth={1} strokeDasharray="4 4" />
                  {/* Second and sixth points */}
                  <circle cx={cx + 50} cy={cy - 86.6} r={4} fill="#10b981" />
                  <circle cx={cx + 50} cy={cy + 86.6} r={4} fill="#10b981" />
                </>
              )}

              {step >= 3 && (
                <>
                  {/* More arcs */}
                  <circle cx={cx + 50} cy={cy - 86.6} r={100} fill="none" stroke="#10b981" strokeWidth={1} strokeDasharray="4 4" />
                  <circle cx={cx - 50} cy={cy - 86.6} r={4} fill="#10b981" />
                </>
              )}

              {step >= 4 && (
                <>
                  <circle cx={cx - 100} cy={cy} r={4} fill="#10b981" />
                </>
              )}

              {step >= 5 && (
                <>
                  <circle cx={cx - 50} cy={cy + 86.6} r={4} fill="#10b981" />
                </>
              )}

              {step >= 6 && (
                <>
                  {/* Complete hexagon */}
                  <polygon
                    points={`${cx + 100},${cy} ${cx + 50},${cy - 86.6} ${cx - 50},${cy - 86.6} ${cx - 100},${cy} ${cx - 50},${cy + 86.6} ${cx + 50},${cy + 86.6}`}
                    fill="#a855f7"
                    fillOpacity={0.2}
                    stroke="#a855f7"
                    strokeWidth={3}
                  />
                </>
              )}
            </>
          )}
        </svg>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        {construction === 'perpendicular' && (
          <>
            <p className="text-emerald-400 font-medium">Perpendicular through a point</p>
            <ol className="text-dark-300 text-sm mt-2 space-y-1 list-decimal list-inside">
              <li>Draw a circle centered at P intersecting the line at A and B</li>
              <li>Draw a circle centered at A with radius {'>'} PA</li>
              <li>Draw a circle centered at B with the same radius</li>
              <li>Connect the two intersection points — perpendicular!</li>
            </ol>
          </>
        )}
        {construction === 'bisector' && (
          <>
            <p className="text-emerald-400 font-medium">Bisecting an angle</p>
            <ol className="text-dark-300 text-sm mt-2 space-y-1 list-decimal list-inside">
              <li>Draw an arc from O intersecting both rays</li>
              <li>From each intersection, draw equal arcs that intersect</li>
              <li>Connect O to the intersection — angle bisector!</li>
            </ol>
          </>
        )}
        {construction === 'equilateral' && (
          <>
            <p className="text-emerald-400 font-medium">Equilateral triangle</p>
            <ol className="text-dark-300 text-sm mt-2 space-y-1 list-decimal list-inside">
              <li>Draw a circle centered at A with radius AB</li>
              <li>Draw a circle centered at B with radius BA</li>
              <li>Connect A and B to an intersection point C</li>
            </ol>
          </>
        )}
        {construction === 'hexagon' && (
          <>
            <p className="text-emerald-400 font-medium">Regular hexagon</p>
            <ol className="text-dark-300 text-sm mt-2 space-y-1 list-decimal list-inside">
              <li>Draw a circle. Mark any point on it</li>
              <li>Using the radius, step around the circle</li>
              <li>Each arc intersects at the next vertex</li>
              <li>Six steps return exactly to the start!</li>
            </ol>
          </>
        )}
      </div>
    </div>
  );
}
