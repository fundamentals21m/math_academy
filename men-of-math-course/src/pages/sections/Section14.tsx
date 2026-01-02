import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, InlineMath } from '@/components/common';

// =============================================================================
// INTERACTIVE VISUALIZATIONS
// =============================================================================

/**
 * Fourier Series Approximation
 * Shows how periodic functions can be approximated by sums of sines and cosines
 */
function FourierSeriesDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [waveform, setWaveform] = useState<'square' | 'sawtooth' | 'triangle'>('square');
  const [numTerms, setNumTerms] = useState(5);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const midY = height / 2;
    const amplitude = height / 3;

    // Fourier coefficients for different waveforms
    const getCoefficient = (n: number): number => {
      if (waveform === 'square') {
        // Square wave: only odd harmonics, 4/(nπ)
        return n % 2 === 1 ? 4 / (n * Math.PI) : 0;
      } else if (waveform === 'sawtooth') {
        // Sawtooth: all harmonics, 2(-1)^(n+1)/(nπ)
        return 2 * Math.pow(-1, n + 1) / (n * Math.PI);
      } else {
        // Triangle: only odd harmonics, 8(-1)^((n-1)/2)/(n²π²)
        if (n % 2 === 0) return 0;
        const k = (n - 1) / 2;
        return 8 * Math.pow(-1, k) / (n * n * Math.PI * Math.PI);
      }
    };

    const animate = () => {
      timeRef.current += 0.02;
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      // Draw axes
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(width, midY);
      ctx.stroke();

      // Draw target waveform (faint)
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const t = (x / width) * 4 * Math.PI + timeRef.current;
        let y = 0;
        if (waveform === 'square') {
          y = Math.sin(t) >= 0 ? 1 : -1;
        } else if (waveform === 'sawtooth') {
          y = ((t % (2 * Math.PI)) / Math.PI) - 1;
        } else {
          const phase = t % (2 * Math.PI);
          y = phase < Math.PI ? (2 * phase / Math.PI - 1) : (3 - 2 * phase / Math.PI);
        }
        const py = midY - y * amplitude;
        if (x === 0) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
      }
      ctx.stroke();

      // Draw Fourier approximation
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const t = (x / width) * 4 * Math.PI + timeRef.current;
        let y = 0;
        for (let n = 1; n <= numTerms; n++) {
          const coef = getCoefficient(n);
          y += coef * Math.sin(n * t);
        }
        const py = midY - y * amplitude;
        if (x === 0) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
      }
      ctx.stroke();

      // Draw individual harmonics on the right side
      const circleX = width - 80;
      const circleY = height / 2;
      const circleRadius = 50;

      let totalX = 0;
      let totalY = 0;

      for (let n = 1; n <= Math.min(numTerms, 7); n++) {
        const coef = getCoefficient(n);
        if (Math.abs(coef) < 0.001) continue;

        const r = Math.abs(coef) * circleRadius;
        const angle = n * (timeRef.current + 2 * Math.PI * 0.25);
        const dx = r * Math.cos(angle);
        const dy = r * Math.sin(angle);

        ctx.strokeStyle = `hsla(${n * 40}, 70%, 60%, 0.5)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(circleX + totalX, circleY + totalY, r, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.strokeStyle = `hsla(${n * 40}, 70%, 60%, 0.8)`;
        ctx.beginPath();
        ctx.moveTo(circleX + totalX, circleY + totalY);
        ctx.lineTo(circleX + totalX + dx, circleY + totalY + dy);
        ctx.stroke();

        totalX += dx;
        totalY += dy;
      }

      // Draw point
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(circleX + totalX, circleY + totalY, 4, 0, 2 * Math.PI);
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [waveform, numTerms]);

  return (
    <Card title="Fourier Series Approximation">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Waveform</label>
            <select
              value={waveform}
              onChange={(e) => setWaveform(e.target.value as typeof waveform)}
              className="bg-dark-800 border border-dark-600 rounded px-3 py-1 text-dark-100"
            >
              <option value="square">Square Wave</option>
              <option value="sawtooth">Sawtooth Wave</option>
              <option value="triangle">Triangle Wave</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Harmonics: {numTerms}</label>
            <input
              type="range"
              min="1"
              max="25"
              value={numTerms}
              onChange={(e) => setNumTerms(parseInt(e.target.value))}
              className="w-32"
            />
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={600}
          height={300}
          className="w-full border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          <span className="text-blue-400">Blue (faint)</span>: target waveform |
          <span className="text-amber-400"> Orange</span>: Fourier approximation with {numTerms} terms
        </p>
      </div>
    </Card>
  );
}

/**
 * Heat Equation Simulation
 * Visualizes heat diffusion along a rod over time
 */
function HeatEquationDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [initialCondition, setInitialCondition] = useState<'point' | 'step' | 'sine'>('point');
  const temperatureRef = useRef<number[]>([]);
  const animationRef = useRef<number>(0);

  const initializeTemperature = () => {
    const n = 100;
    const temp = new Array(n).fill(0);

    if (initialCondition === 'point') {
      // Point source in the middle
      temp[Math.floor(n / 2)] = 1;
      temp[Math.floor(n / 2) - 1] = 0.5;
      temp[Math.floor(n / 2) + 1] = 0.5;
    } else if (initialCondition === 'step') {
      // Step function - left half hot
      for (let i = 0; i < n / 2; i++) {
        temp[i] = 1;
      }
    } else {
      // Sine wave
      for (let i = 0; i < n; i++) {
        temp[i] = Math.sin(Math.PI * i / n);
      }
    }

    temperatureRef.current = temp;
  };

  useEffect(() => {
    initializeTemperature();
  }, [initialCondition]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const draw = () => {
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      const temp = temperatureRef.current;
      if (temp.length === 0) return;

      const n = temp.length;
      const barWidth = width / n;

      // Draw temperature as color gradient
      for (let i = 0; i < n; i++) {
        const t = Math.max(0, Math.min(1, temp[i]));
        const r = Math.floor(255 * t);
        const b = Math.floor(255 * (1 - t) * 0.5);
        ctx.fillStyle = `rgb(${r}, ${Math.floor(50 + 100 * t)}, ${b})`;
        ctx.fillRect(i * barWidth, 0, barWidth + 1, height * 0.4);
      }

      // Draw temperature profile
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const x = i * barWidth + barWidth / 2;
        const y = height * 0.5 + (1 - temp[i]) * height * 0.4;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Diffusion step if running
      if (isRunning) {
        const alpha = 0.4; // Diffusion coefficient
        const newTemp = [...temp];
        for (let i = 1; i < n - 1; i++) {
          newTemp[i] = temp[i] + alpha * (temp[i - 1] - 2 * temp[i] + temp[i + 1]);
        }
        // Boundary conditions (insulated)
        newTemp[0] = newTemp[1];
        newTemp[n - 1] = newTemp[n - 2];
        temperatureRef.current = newTemp;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isRunning]);

  return (
    <Card title="Heat Equation Simulation">
      <div className="space-y-4">
        <p className="text-dark-300">
          Fourier developed the mathematics of heat conduction. Watch how temperature
          diffuses according to the heat equation:
        </p>
        <MathBlock math="\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}" />
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Initial Condition</label>
            <select
              value={initialCondition}
              onChange={(e) => {
                setInitialCondition(e.target.value as typeof initialCondition);
                setIsRunning(false);
              }}
              className="bg-dark-800 border border-dark-600 rounded px-3 py-1 text-dark-100"
            >
              <option value="point">Point Source</option>
              <option value="step">Step Function</option>
              <option value="sine">Sine Wave</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-4 py-1 rounded ${isRunning ? 'bg-red-600' : 'bg-green-600'} text-white`}
            >
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={() => {
                setIsRunning(false);
                initializeTemperature();
              }}
              className="px-4 py-1 rounded bg-dark-600 text-white"
            >
              Reset
            </button>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          className="w-full border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          Top: color visualization (red = hot, blue = cold) | Bottom: temperature profile
        </p>
      </div>
    </Card>
  );
}

/**
 * Frequency Spectrum Analyzer
 * Shows how a signal decomposes into frequency components
 */
function SpectrumAnalyzer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frequencies, setFrequencies] = useState([
    { freq: 1, amp: 1 },
    { freq: 3, amp: 0.33 },
    { freq: 5, amp: 0.2 },
  ]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);

  const addFrequency = () => {
    if (frequencies.length < 8) {
      const nextOdd = Math.max(...frequencies.map(f => f.freq)) + 2;
      setFrequencies([...frequencies, { freq: nextOdd, amp: 0.5 }]);
    }
  };

  const removeFrequency = (index: number) => {
    setFrequencies(frequencies.filter((_, i) => i !== index));
  };

  const updateFrequency = (index: number, field: 'freq' | 'amp', value: number) => {
    const newFreqs = [...frequencies];
    newFreqs[index] = { ...newFreqs[index], [field]: value };
    setFrequencies(newFreqs);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const animate = () => {
      timeRef.current += 0.03;
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      // Draw time domain signal (top half)
      const topHeight = height / 2 - 20;
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, topHeight / 2);
      ctx.lineTo(width / 2 - 10, topHeight / 2);
      ctx.stroke();

      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < width / 2 - 20; x++) {
        const t = (x / (width / 2 - 20)) * 4 * Math.PI + timeRef.current;
        let y = 0;
        for (const { freq, amp } of frequencies) {
          y += amp * Math.sin(freq * t);
        }
        const maxAmp = frequencies.reduce((sum, f) => sum + f.amp, 0);
        const py = topHeight / 2 - (y / Math.max(maxAmp, 1)) * (topHeight / 2 - 10);
        if (x === 0) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
      }
      ctx.stroke();

      // Label
      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px monospace';
      ctx.fillText('Time Domain', 10, 15);

      // Draw frequency spectrum (right side)
      const spectrumX = width / 2 + 10;
      const spectrumWidth = width / 2 - 20;

      ctx.fillStyle = '#9ca3af';
      ctx.fillText('Frequency Spectrum', spectrumX, 15);

      // Frequency axis
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(spectrumX, topHeight - 10);
      ctx.lineTo(spectrumX + spectrumWidth, topHeight - 10);
      ctx.stroke();

      // Draw frequency bars
      const maxFreq = 10;
      for (const { freq, amp } of frequencies) {
        const barX = spectrumX + (freq / maxFreq) * spectrumWidth;
        const barHeight = (amp / 1.5) * (topHeight - 30);

        ctx.fillStyle = `hsl(${freq * 30}, 70%, 50%)`;
        ctx.fillRect(barX - 8, topHeight - 10 - barHeight, 16, barHeight);

        ctx.fillStyle = '#e5e7eb';
        ctx.font = '10px monospace';
        ctx.fillText(`${freq}`, barX - 4, topHeight);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [frequencies]);

  return (
    <Card title="Build Your Own Signal">
      <div className="space-y-4">
        <p className="text-dark-300">
          Add frequency components to build a complex waveform. This demonstrates Fourier's
          insight that any signal can be decomposed into sinusoidal components.
        </p>
        <div className="space-y-2">
          {frequencies.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-dark-400 w-8">f{i + 1}:</span>
              <label className="text-sm text-dark-400">Freq</label>
              <input
                type="range"
                min="1"
                max="10"
                value={f.freq}
                onChange={(e) => updateFrequency(i, 'freq', parseInt(e.target.value))}
                className="w-20"
              />
              <span className="text-dark-300 w-8">{f.freq}</span>
              <label className="text-sm text-dark-400">Amp</label>
              <input
                type="range"
                min="0"
                max="100"
                value={f.amp * 100}
                onChange={(e) => updateFrequency(i, 'amp', parseInt(e.target.value) / 100)}
                className="w-20"
              />
              <span className="text-dark-300 w-12">{f.amp.toFixed(2)}</span>
              <button
                onClick={() => removeFrequency(i)}
                className="text-red-400 hover:text-red-300 px-2"
                disabled={frequencies.length <= 1}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addFrequency}
          disabled={frequencies.length >= 8}
          className="px-3 py-1 bg-dark-700 hover:bg-dark-600 rounded text-dark-200 disabled:opacity-50"
        >
          + Add Frequency
        </button>
        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          className="w-full border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Fourier Transform Visualization
 * Shows the transform between time and frequency domains
 */
function FourierTransformDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [signalType, setSignalType] = useState<'gaussian' | 'rect' | 'cosine'>('gaussian');
  const [width, setWidth] = useState(50);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const height = canvas.height;
    const halfW = canvasWidth / 2;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, canvasWidth, height);

    // Generate signal
    const n = 256;
    const signal: number[] = [];
    const sigma = width / 50;

    for (let i = 0; i < n; i++) {
      const t = (i - n / 2) / (n / 4);
      if (signalType === 'gaussian') {
        signal.push(Math.exp(-t * t / (2 * sigma * sigma)));
      } else if (signalType === 'rect') {
        signal.push(Math.abs(t) < sigma ? 1 : 0);
      } else {
        signal.push(Math.cos(2 * Math.PI * t) * Math.exp(-t * t / (2 * sigma * sigma)));
      }
    }

    // Compute DFT (simplified)
    const spectrum: number[] = [];
    for (let k = 0; k < n; k++) {
      let re = 0, im = 0;
      for (let j = 0; j < n; j++) {
        const angle = -2 * Math.PI * k * j / n;
        re += signal[j] * Math.cos(angle);
        im += signal[j] * Math.sin(angle);
      }
      spectrum.push(Math.sqrt(re * re + im * im) / n);
    }

    // Draw time domain (left)
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText('Time Domain f(t)', 10, 20);

    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(halfW - 20, height / 2);
    ctx.stroke();

    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const maxSignal = Math.max(...signal);
    for (let i = 0; i < n; i++) {
      const x = (i / n) * (halfW - 30) + 10;
      const y = height / 2 - (signal[i] / maxSignal) * (height / 2 - 30);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw frequency domain (right)
    ctx.fillStyle = '#9ca3af';
    ctx.fillText('Frequency Domain F(ω)', halfW + 10, 20);

    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(halfW + 10, height / 2);
    ctx.lineTo(canvasWidth - 10, height / 2);
    ctx.stroke();

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const maxSpectrum = Math.max(...spectrum.slice(0, n / 2));
    for (let i = 0; i < n / 2; i++) {
      const x = halfW + 20 + (i / (n / 2)) * (halfW - 40);
      const y = height / 2 - (spectrum[i] / maxSpectrum) * (height / 2 - 30);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Arrow between them
    ctx.fillStyle = '#10b981';
    ctx.font = '16px sans-serif';
    ctx.fillText('⟷', halfW - 10, height / 2);
    ctx.font = '10px monospace';
    ctx.fillText('FT', halfW - 8, height / 2 + 15);

  }, [signalType, width]);

  return (
    <Card title="Fourier Transform">
      <div className="space-y-4">
        <p className="text-dark-300">
          The Fourier Transform converts signals between time and frequency domains.
          Notice: narrow signals in time have wide frequency content, and vice versa
          (the uncertainty principle).
        </p>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Signal Type</label>
            <select
              value={signalType}
              onChange={(e) => setSignalType(e.target.value as typeof signalType)}
              className="bg-dark-800 border border-dark-600 rounded px-3 py-1 text-dark-100"
            >
              <option value="gaussian">Gaussian Pulse</option>
              <option value="rect">Rectangular Pulse</option>
              <option value="cosine">Windowed Cosine</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Width: {width}%</label>
            <input
              type="range"
              min="10"
              max="100"
              value={width}
              onChange={(e) => setWidth(parseInt(e.target.value))}
              className="w-32"
            />
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          className="w-full border border-dark-700 rounded-lg"
        />
        <MathBlock math="\mathcal{F}\{f(t)\} = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} \, dt" />
      </div>
    </Card>
  );
}

/**
 * Egyptian Campaign Timeline
 * Fourier's adventures with Napoleon in Egypt
 */
function EgyptianCampaign() {
  const events = [
    { year: '1798', title: 'Expedition Begins', description: 'Fourier joins Napoleon\'s Egyptian campaign as a scientific advisor' },
    { year: '1798', title: 'Institut d\'Égypte', description: 'Becomes permanent secretary of the newly founded Institut d\'Égypte in Cairo' },
    { year: '1799', title: 'Rosetta Stone', description: 'The famous stone is discovered; Fourier helps document it' },
    { year: '1801', title: 'Return to France', description: 'After British victory, Fourier returns with invaluable scientific records' },
    { year: '1802', title: 'Prefect of Isère', description: 'Napoleon appoints him prefect, where he begins heat equation work' },
    { year: '1809', title: 'Description de l\'Égypte', description: 'Writes the historical preface to the monumental encyclopedia of Egypt' },
  ];

  return (
    <Card title="Napoleon's Egyptian Campaign">
      <div className="space-y-4">
        <p className="text-dark-300">
          Before his mathematical breakthroughs, Fourier accompanied Napoleon to Egypt as
          one of 167 scientists and scholars on this extraordinary expedition.
        </p>
        <div className="relative border-l-2 border-amber-600 ml-4 space-y-4">
          {events.map((event, i) => (
            <div key={i} className="ml-6 relative">
              <div className="absolute -left-8 w-4 h-4 bg-amber-600 rounded-full" />
              <div className="text-amber-400 text-sm font-mono">{event.year}</div>
              <div className="text-dark-100 font-semibold">{event.title}</div>
              <div className="text-dark-400 text-sm">{event.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <div className="prose prose-invert max-w-none">
        {/* Opening Quote */}
        <p className="text-xl text-dark-200 mb-6">
          Joseph Fourier gave mathematics one of its most powerful and far-reaching tools:
          the decomposition of any periodic function into an infinite series of sines and cosines.
          Born into poverty and orphaned at nine, this son of a tailor became one of the most
          influential mathematicians of all time.
        </p>

        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-dark-300">
          "The profound study of nature is the most fertile source of mathematical discoveries."
          <footer className="text-dark-500 mt-2">— Joseph Fourier</footer>
        </blockquote>

        {/* Historical Context */}
        <h2>From Orphan to Revolutionary</h2>
        <p>
          Jean-Baptiste Joseph Fourier (1768-1830) was born in Auxerre, France, the ninth of
          twelve children of a tailor. Orphaned at age nine, he was taken in by the local
          bishop and educated at a military school run by Benedictine monks. Even as a child,
          he showed remarkable mathematical ability, though his lowly birth initially barred
          him from a military career.
        </p>
        <p>
          The French Revolution changed everything. Fourier became an enthusiastic supporter
          of the revolutionary cause, teaching at the newly founded École Normale Supérieure
          and later at the École Polytechnique. His political involvement nearly cost him his
          life—he was arrested during the Terror and narrowly escaped the guillotine.
        </p>

        <Callout type="note" title="Bell's Portrait">
          Bell describes Fourier as a man of action as well as thought, emphasizing how his
          practical experiences—from revolutionary politics to Egyptian deserts to administrative
          duties—shaped his mathematical work on heat flow, a thoroughly practical problem.
        </Callout>

        {/* Fourier Series Visualization */}
        <h2>The Fourier Series</h2>
        <p>
          Fourier's most famous contribution is the discovery that any periodic function can
          be expressed as an infinite sum of sines and cosines:
        </p>
        <MathBlock math="f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left[ a_n \cos(nx) + b_n \sin(nx) \right]" />
        <p>
          where the coefficients are given by:
        </p>
        <MathBlock math="a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx, \quad b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx" />

        <FourierSeriesDemo />

        <p>
          This idea was revolutionary and initially controversial. The notion that a discontinuous
          function like a square wave could be represented by smooth sine curves seemed paradoxical
          to Fourier's contemporaries, including Lagrange. Yet Fourier persisted, driven by the
          physical reality of heat conduction.
        </p>

        {/* Heat Equation */}
        <h2>The Theory of Heat</h2>
        <p>
          Fourier's series emerged from his study of heat conduction. In his masterwork,
          <em>Théorie analytique de la chaleur</em> (1822), he derived the heat equation and
          showed how Fourier series provide its solution. This work not only solved practical
          problems of heat flow but opened entirely new areas of pure mathematics.
        </p>

        <HeatEquationDemo />

        <p>
          The heat equation <Math math="\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}" /> describes
          how temperature <Math math="u(x,t)" /> evolves over time. Fourier showed that
          by decomposing the initial temperature distribution into its Fourier components,
          each component decays exponentially at a rate depending on its frequency—higher
          frequencies (sharper features) smooth out faster.
        </p>

        <Callout type="example" title="Why High Frequencies Decay Fastest">
          In the heat equation, the second spatial derivative penalizes rapid changes. A high-frequency
          component like <Math math="\sin(nx)" /> has second derivative <Math math="-n^2 \sin(nx)" />,
          causing it to decay like <Math math="e^{-n^2 \alpha t}" />. This explains why sharp
          features (requiring many high harmonics) smooth out quickly while gradual temperature
          gradients persist longer.
        </Callout>

        {/* Egyptian Campaign */}
        <h2>Adventure in Egypt</h2>
        <p>
          Between his revolutionary activities and mathematical breakthroughs, Fourier lived
          one of the great adventures of the age. In 1798, Napoleon Bonaparte invited him
          to join the Egyptian expedition as a scientific advisor—and Fourier accepted.
        </p>

        <EgyptianCampaign />

        <p>
          Fourier's three years in Egypt profoundly influenced him. He developed a lasting
          fascination with heat (the Egyptian climate may have contributed to his later
          obsession with warmth—he kept his rooms uncomfortably hot). More importantly,
          his administrative experience as secretary of the Institut d'Égypte and later as
          prefect of Isère gave him the practical mindset that distinguished his approach
          to mathematics.
        </p>

        {/* Signal Analysis */}
        <h2>Building Signals from Frequencies</h2>
        <p>
          One of the most powerful applications of Fourier's work is in signal analysis.
          Any signal—whether it's a sound wave, an electrical signal, or an image—can be
          decomposed into its constituent frequencies.
        </p>

        <SpectrumAnalyzer />

        {/* Fourier Transform */}
        <h2>The Fourier Transform</h2>
        <p>
          Fourier series work for periodic functions, but what about non-periodic signals?
          The <strong>Fourier Transform</strong> extends the idea to arbitrary functions by
          replacing the discrete sum with an integral:
        </p>

        <FourierTransformDemo />

        <p>
          The Fourier Transform is fundamental to modern technology. It underlies:
        </p>
        <ul>
          <li><strong>Digital signal processing</strong> — Audio, images, and video compression</li>
          <li><strong>Medical imaging</strong> — MRI and CT scans use Fourier transforms</li>
          <li><strong>Telecommunications</strong> — Modulation and filtering</li>
          <li><strong>Quantum mechanics</strong> — Wave-particle duality and uncertainty</li>
          <li><strong>Spectroscopy</strong> — Analyzing chemical compositions</li>
        </ul>

        {/* Other Contributions */}
        <h2>Other Contributions</h2>
        <CardGrid columns={2}>
          <Card title="Dimensional Analysis">
            <p className="text-dark-300">
              Fourier introduced the concept of dimensional homogeneity—that physical equations
              must have consistent units. His insistence on dimensional analysis in
              <em>Théorie analytique de la chaleur</em> was pioneering.
            </p>
          </Card>
          <Card title="Greenhouse Effect">
            <p className="text-dark-300">
              Fourier was the first to calculate that the Earth's atmosphere acts as an insulating
              layer, trapping heat—the first recognition of what we now call the greenhouse effect.
            </p>
          </Card>
          <Card title="Fourier's Law">
            <p className="text-dark-300">
              He formulated the law that heat flux is proportional to the negative temperature
              gradient: <Math math="q = -k \nabla T" />, fundamental to all heat transfer calculations.
            </p>
          </Card>
          <Card title="Partial Differential Equations">
            <p className="text-dark-300">
              His systematic methods for solving PDEs using series expansions became standard
              tools throughout mathematical physics, influencing everything from vibrating strings
              to quantum mechanics.
            </p>
          </Card>
        </CardGrid>

        {/* Key Formulas */}
        <h2>Key Formulas</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Fourier Series">
            <MathBlock math="f(x) = \sum_{n=-\infty}^{\infty} c_n e^{inx}" />
            <MathBlock math="c_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-inx} dx" />
          </Card>
          <Card title="Parseval's Theorem">
            <MathBlock math="\int_{-\pi}^{\pi} |f(x)|^2 dx = 2\pi \sum_{n=-\infty}^{\infty} |c_n|^2" />
            <p className="text-dark-400 text-sm mt-2">
              Energy in time domain equals energy in frequency domain
            </p>
          </Card>
          <Card title="Convolution Theorem">
            <MathBlock math="\mathcal{F}\{f * g\} = \mathcal{F}\{f\} \cdot \mathcal{F}\{g\}" />
            <p className="text-dark-400 text-sm mt-2">
              Convolution in time becomes multiplication in frequency
            </p>
          </Card>
          <Card title="Heat Kernel">
            <MathBlock math="K(x,t) = \frac{1}{\sqrt{4\pi \alpha t}} e^{-x^2/(4\alpha t)}" />
            <p className="text-dark-400 text-sm mt-2">
              Fundamental solution of the heat equation
            </p>
          </Card>
        </div>

        {/* Bell's Assessment */}
        <h2>Bell's Assessment</h2>
        <p>
          Bell admires Fourier as a mathematician who was also a man of the world. Unlike
          many mathematicians who lived cloistered lives, Fourier experienced revolution,
          war, political intrigue, and exotic adventure. Yet through it all, he maintained
          his focus on a deep mathematical problem.
        </p>
        <p>
          Bell emphasizes that Fourier's work on heat, while arising from physics, became
          pure mathematics of the highest order. The rigorization of Fourier series occupied
          some of the greatest mathematicians of the 19th century (Dirichlet, Riemann, Cantor)
          and led to entirely new branches of mathematics, including set theory.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-dark-300">
          "Fourier's theorem is not only one of the most beautiful results of modern analysis,
          but it may be said to furnish an indispensable instrument in the treatment of nearly
          every recondite question in modern physics."
          <footer className="text-dark-500 mt-2">— Lord Kelvin</footer>
        </blockquote>

        {/* Key Takeaways */}
        <Callout type="summary" title="Key Takeaways">
          <ul className="space-y-2">
            <li><strong>Fourier Series:</strong> Any periodic function can be expressed as a sum of sines and cosines, decomposing it into frequency components.</li>
            <li><strong>Heat Equation:</strong> Fourier solved the fundamental equation of heat conduction, pioneering methods for partial differential equations.</li>
            <li><strong>Practical Origins:</strong> His mathematics arose from physical problems but became pure mathematics of lasting importance.</li>
            <li><strong>Universal Applications:</strong> Fourier analysis is fundamental to signal processing, imaging, communications, and quantum mechanics.</li>
            <li><strong>Dimensional Analysis:</strong> Fourier pioneered the requirement that physical equations be dimensionally consistent.</li>
          </ul>
        </Callout>
      </div>
    </LessonLayout>
  );
}
