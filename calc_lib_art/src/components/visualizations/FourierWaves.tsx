import { useState, useMemo } from 'react';

export function FourierWaves() {
  const [harmonics, setHarmonics] = useState([1, 0.5, 0.33, 0.25]);
  const [showComponents, setShowComponents] = useState(true);

  const width = 600;
  const height = 400;
  const margin = { top: 30, right: 30, bottom: 40, left: 50 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Coordinate transforms
  const xMin = 0, xMax = 4 * Math.PI;
  const yMin = -2, yMax = 2;
  const toSvgX = (x: number) => margin.left + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => margin.top + plotHeight / 2 - (y / (yMax - yMin)) * plotHeight;

  // Generate combined wave
  const combinedWave = useMemo(() => {
    const points: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.05) {
      let y = 0;
      harmonics.forEach((amp, i) => {
        y += amp * Math.sin((i + 1) * x);
      });
      points.push(`${toSvgX(x)},${toSvgY(y)}`);
    }
    return points.join(' ');
  }, [harmonics]);

  // Generate individual harmonic waves
  const harmonicWaves = useMemo(() => {
    return harmonics.map((amp, i) => {
      const points: string[] = [];
      for (let x = xMin; x <= xMax; x += 0.05) {
        const y = amp * Math.sin((i + 1) * x);
        points.push(`${toSvgX(x)},${toSvgY(y)}`);
      }
      return points.join(' ');
    });
  }, [harmonics]);

  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  const updateHarmonic = (index: number, value: number) => {
    const newHarmonics = [...harmonics];
    newHarmonics[index] = value;
    setHarmonics(newHarmonics);
  };

  // Preset buttons
  const presets = {
    'Sine': [1, 0, 0, 0],
    'Square-ish': [1, 0, 0.33, 0, 0.2],
    'Sawtooth-ish': [1, 0.5, 0.33, 0.25],
    'Triangle-ish': [1, 0, 0.11, 0],
  };

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Fourier Series: Building Complex Waves from Sine Waves
      </h4>

      {/* Preset buttons */}
      <div className="flex gap-2 mb-4">
        {Object.entries(presets).map(([name, values]) => (
          <button
            key={name}
            onClick={() => setHarmonics(values.slice(0, 4))}
            className="px-3 py-1 rounded-lg text-sm bg-dark-700 text-dark-300 hover:bg-dark-600"
          >
            {name}
          </button>
        ))}
        <label className="flex items-center gap-2 ml-4">
          <input
            type="checkbox"
            checked={showComponents}
            onChange={(e) => setShowComponents(e.target.checked)}
            className="accent-primary-500"
          />
          <span className="text-dark-300 text-sm">Show components</span>
        </label>
      </div>

      {/* Harmonic sliders */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {harmonics.map((amp, i) => (
          <div key={i} className="flex flex-col items-center">
            <label className="text-sm mb-1" style={{ color: colors[i] }}>
              sin({i + 1}x)
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={amp}
              onChange={(e) => updateHarmonic(i, parseFloat(e.target.value))}
              className="w-full"
              style={{ accentColor: colors[i] }}
            />
            <span className="text-xs font-mono" style={{ color: colors[i] }}>
              {amp.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* Grid */}
        {[Math.PI, 2 * Math.PI, 3 * Math.PI, 4 * Math.PI].map((x, i) => (
          <line
            key={`vgrid-${i}`}
            x1={toSvgX(x)}
            y1={margin.top}
            x2={toSvgX(x)}
            y2={height - margin.bottom}
            stroke="#374151"
            strokeDasharray="4,4"
          />
        ))}

        {/* Zero line */}
        <line
          x1={margin.left}
          y1={toSvgY(0)}
          x2={width - margin.right}
          y2={toSvgY(0)}
          stroke="#4B5563"
          strokeWidth={1}
        />

        {/* Axes */}
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={height - margin.bottom}
          stroke="#9CA3AF"
          strokeWidth={2}
        />
        <line
          x1={margin.left}
          y1={height - margin.bottom}
          x2={width - margin.right}
          y2={height - margin.bottom}
          stroke="#9CA3AF"
          strokeWidth={2}
        />

        {/* X-axis labels */}
        <text x={toSvgX(Math.PI)} y={height - margin.bottom + 20} textAnchor="middle" fill="#9CA3AF" fontSize="11">π</text>
        <text x={toSvgX(2 * Math.PI)} y={height - margin.bottom + 20} textAnchor="middle" fill="#9CA3AF" fontSize="11">2π</text>
        <text x={toSvgX(3 * Math.PI)} y={height - margin.bottom + 20} textAnchor="middle" fill="#9CA3AF" fontSize="11">3π</text>
        <text x={toSvgX(4 * Math.PI)} y={height - margin.bottom + 20} textAnchor="middle" fill="#9CA3AF" fontSize="11">4π</text>

        {/* Y-axis labels */}
        <text x={margin.left - 10} y={toSvgY(1) + 4} textAnchor="end" fill="#9CA3AF" fontSize="11">1</text>
        <text x={margin.left - 10} y={toSvgY(-1) + 4} textAnchor="end" fill="#9CA3AF" fontSize="11">-1</text>

        {/* Individual harmonic waves */}
        {showComponents && harmonicWaves.map((wave, i) => (
          harmonics[i] > 0 && (
            <polyline
              key={i}
              points={wave}
              fill="none"
              stroke={colors[i]}
              strokeWidth={1.5}
              strokeDasharray="4,4"
              opacity={0.6}
            />
          )
        ))}

        {/* Combined wave */}
        <polyline
          points={combinedWave}
          fill="none"
          stroke="white"
          strokeWidth={3}
        />

        {/* Legend */}
        <g transform={`translate(${width - margin.right - 120}, ${margin.top})`}>
          <rect x={0} y={0} width={110} height={showComponents ? 110 : 30} fill="#1F2937" rx={4} />
          <line x1={10} y1={15} x2={35} y2={15} stroke="white" strokeWidth={3} />
          <text x={45} y={19} fill="white" fontSize="11">Sum</text>
          {showComponents && harmonics.map((amp, i) => (
            amp > 0 && (
              <g key={i}>
                <line x1={10} y1={35 + i * 18} x2={35} y2={35 + i * 18} stroke={colors[i]} strokeWidth={1.5} strokeDasharray="4,4" />
                <text x={45} y={39 + i * 18} fill={colors[i]} fontSize="10">
                  {amp.toFixed(1)}·sin({i + 1}x)
                </text>
              </g>
            )
          ))}
        </g>
      </svg>

      {/* Formula display */}
      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <div className="text-dark-300 text-sm font-mono text-center">
          f(x) = {harmonics.map((amp, i) =>
            amp > 0 ? `${amp.toFixed(2)}·sin(${i + 1}x)` : null
          ).filter(Boolean).join(' + ') || '0'}
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">Fourier's Discovery:</span>{' '}
          Any periodic function can be built from sine waves of different frequencies.
          This idea—that complex signals decompose into simple harmonics—revolutionized
          physics, engineering, and music. Calculus provides the tools to find these components.
        </p>
      </div>
    </div>
  );
}
