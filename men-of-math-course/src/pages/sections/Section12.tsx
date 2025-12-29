import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, Math as MathInline } from '../../components/common/MathBlock';

// Central Limit Theorem Demo
function CentralLimitTheorem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sampleSize, setSampleSize] = useState(5);
  const [numSamples, setNumSamples] = useState(0);
  const [means, setMeans] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Generate sample mean from uniform distribution
  const generateSampleMean = (n: number): number => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += Math.random();
    }
    return sum / n;
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setMeans(prev => {
        if (prev.length >= 1000) {
          setIsRunning(false);
          return prev;
        }
        const newMeans = [...prev];
        for (let i = 0; i < 10; i++) {
          newMeans.push(generateSampleMean(sampleSize));
        }
        return newMeans;
      });
      setNumSamples(prev => Math.min(prev + 10, 1000));
    }, 50);

    return () => clearInterval(interval);
  }, [isRunning, sampleSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Create histogram bins
    const numBins = 40;
    const bins = new Array(numBins).fill(0);
    means.forEach(m => {
      const binIndex = Math.min(Math.floor(m * numBins), numBins - 1);
      bins[binIndex]++;
    });

    const maxBin = Math.max(...bins, 1);
    const barWidth = width / numBins;

    // Draw histogram
    bins.forEach((count, i) => {
      const barHeight = (count / maxBin) * (height - 60);
      const x = i * barWidth;
      const y = height - 30 - barHeight;

      // Color gradient based on position (bell curve coloring)
      const distFromCenter = Math.abs(i - numBins / 2) / (numBins / 2);
      const hue = 200 + distFromCenter * 40;
      ctx.fillStyle = `hsl(${hue}, 70%, 50%)`;
      ctx.fillRect(x + 1, y, barWidth - 2, barHeight);
    });

    // Draw normal curve overlay
    if (means.length > 50) {
      const mean = 0.5;
      const stdDev = 1 / Math.sqrt(12 * sampleSize); // Std dev of uniform sample mean

      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const xVal = x / width;
        const z = (xVal - mean) / stdDev;
        const yVal = Math.exp(-0.5 * z * z) / (stdDev * Math.sqrt(2 * Math.PI));
        const normalizedY = (yVal * means.length / numBins) / maxBin * (height - 60);
        const y = height - 30 - normalizedY;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height - 30);
    ctx.lineTo(width, height - 30);
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '10px monospace';
    ctx.fillText('0', 5, height - 15);
    ctx.fillText('0.5', width / 2 - 10, height - 15);
    ctx.fillText('1', width - 15, height - 15);
    ctx.fillText(`n=${means.length}`, width - 60, 20);
  }, [means, sampleSize]);

  const reset = () => {
    setMeans([]);
    setNumSamples(0);
    setIsRunning(false);
  };

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Central Limit Theorem</h4>

      <p className="text-sm text-dark-300 mb-4">
        Laplace proved that the average of many independent random variables tends toward
        a normal distribution—regardless of the original distribution. Here we average
        uniform random numbers and watch the bell curve emerge.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^{n} X_i \\xrightarrow{d} N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={500}
        height={250}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-2">
            Sample size: <span className="text-primary-400 font-bold">{sampleSize}</span>
          </label>
          <input
            type="range"
            min={1}
            max={30}
            value={sampleSize}
            onChange={(e) => { setSampleSize(parseInt(e.target.value)); reset(); }}
            className="w-full accent-primary-500"
          />
        </div>
        <div className="flex items-end gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-2 rounded ${
              isRunning ? 'bg-red-600' : 'bg-emerald-600'
            } text-white`}
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-dark-700 rounded"
          >
            Reset
          </button>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>Watch It Happen:</strong> With sample size 1, you see a flat (uniform)
          distribution. Increase the sample size and watch the histogram converge to a
          bell curve—the more you average, the more normal it becomes!
        </p>
      </Callout>
    </div>
  );
}

// Bayesian Updating / Rule of Succession
function BayesianUpdating() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [successes, setSuccesses] = useState(6);
  const [trials, setTrials] = useState(10);

  // Beta distribution for posterior (successes + 1, failures + 1) with uniform prior
  const betaPDF = (x: number, alpha: number, beta: number): number => {
    if (x <= 0 || x >= 1) return 0;
    // Simplified beta PDF (unnormalized for visualization)
    return Math.pow(x, alpha - 1) * Math.pow(1 - x, beta - 1);
  };

  // Laplace's rule of succession
  const prediction = (successes + 1) / (trials + 2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Draw prior (uniform = Beta(1,1))
    ctx.strokeStyle = '#6b7280';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, height - 50);
    ctx.lineTo(width, height - 50);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw posterior Beta(successes+1, failures+1)
    const alpha = successes + 1;
    const beta = trials - successes + 1;

    // Find max for normalization
    let maxY = 0;
    for (let x = 0; x <= 1; x += 0.01) {
      maxY = Math.max(maxY, betaPDF(x, alpha, beta));
    }

    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let px = 0; px < width; px++) {
      const x = px / width;
      const y = betaPDF(x, alpha, beta);
      const py = height - 50 - (y / maxY) * (height - 80);
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Fill area under curve
    ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
    ctx.beginPath();
    ctx.moveTo(0, height - 50);
    for (let px = 0; px < width; px++) {
      const x = px / width;
      const y = betaPDF(x, alpha, beta);
      const py = height - 50 - (y / maxY) * (height - 80);
      ctx.lineTo(px, py);
    }
    ctx.lineTo(width, height - 50);
    ctx.closePath();
    ctx.fill();

    // Mark prediction point
    const predX = prediction * width;
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(predX, 20);
    ctx.lineTo(predX, height - 50);
    ctx.stroke();
    ctx.setLineDash([]);

    // Axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height - 50);
    ctx.lineTo(width, height - 50);
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.fillText('0', 5, height - 35);
    ctx.fillText('0.5', width / 2 - 10, height - 35);
    ctx.fillText('1', width - 15, height - 35);
    ctx.fillText('Probability θ', width / 2 - 40, height - 10);

    ctx.fillStyle = '#10b981';
    ctx.fillText(`Prediction: ${prediction.toFixed(3)}`, predX + 5, 35);

    ctx.fillStyle = '#6b7280';
    ctx.fillText('Prior (uniform)', width - 100, 50);
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('Posterior', width - 100, 70);
  }, [successes, trials, prediction]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Laplace's Rule of Succession</h4>

      <p className="text-sm text-dark-300 mb-4">
        If we've observed s successes in n trials, what's the probability of success on
        the next trial? Laplace derived: (s+1)/(n+2). This Bayesian approach smooths
        estimates and handles the "sunrise problem."
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`P(\\text{success}_{n+1} | s \\text{ successes in } n \\text{ trials}) = \\frac{s+1}{n+2}`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={500}
        height={250}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-2">
            Successes: <span className="text-emerald-400 font-bold">{successes}</span>
          </label>
          <input
            type="range"
            min={0}
            max={trials}
            value={successes}
            onChange={(e) => setSuccesses(parseInt(e.target.value))}
            className="w-full accent-emerald-500"
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-2">
            Total trials: <span className="text-primary-400 font-bold">{trials}</span>
          </label>
          <input
            type="range"
            min={1}
            max={50}
            value={trials}
            onChange={(e) => {
              const newTrials = parseInt(e.target.value);
              setTrials(newTrials);
              setSuccesses(Math.min(successes, newTrials));
            }}
            className="w-full accent-primary-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-dark-800 p-3 rounded-lg text-center">
          <p className="text-xs text-dark-400">Observed rate</p>
          <p className="text-lg font-mono text-amber-400">{(successes / trials).toFixed(3)}</p>
        </div>
        <div className="bg-dark-800 p-3 rounded-lg text-center">
          <p className="text-xs text-dark-400">Laplace prediction</p>
          <p className="text-lg font-mono text-emerald-400">{prediction.toFixed(3)}</p>
        </div>
        <div className="bg-dark-800 p-3 rounded-lg text-center">
          <p className="text-xs text-dark-400">Difference</p>
          <p className="text-lg font-mono text-primary-400">
            {((prediction - successes / trials) * 100).toFixed(1)}%
          </p>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>The Sunrise Problem:</strong> If the sun has risen every day for 5000 years
          (~1.8 million days), what's the probability it rises tomorrow? Naive: 100%.
          Laplace: (1,800,001)/(1,800,002) ≈ 99.99994%. The "+1" accounts for our uncertainty.
        </p>
      </Callout>
    </div>
  );
}

// Laplace's Equation Visualization
function LaplaceEquation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [chargeConfig, setChargeConfig] = useState<'dipole' | 'quadrupole' | 'single'>('dipole');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Define charges based on configuration
    let charges: Array<{ x: number; y: number; q: number }> = [];
    switch (chargeConfig) {
      case 'single':
        charges = [{ x: width / 2, y: height / 2, q: 1 }];
        break;
      case 'dipole':
        charges = [
          { x: width / 2 - 50, y: height / 2, q: 1 },
          { x: width / 2 + 50, y: height / 2, q: -1 },
        ];
        break;
      case 'quadrupole':
        charges = [
          { x: width / 2 - 40, y: height / 2 - 40, q: 1 },
          { x: width / 2 + 40, y: height / 2 - 40, q: -1 },
          { x: width / 2 - 40, y: height / 2 + 40, q: -1 },
          { x: width / 2 + 40, y: height / 2 + 40, q: 1 },
        ];
        break;
    }

    // Calculate potential at each point
    const potential = (x: number, y: number): number => {
      let phi = 0;
      for (const charge of charges) {
        const dx = x - charge.x;
        const dy = y - charge.y;
        const r = Math.sqrt(dx * dx + dy * dy);
        if (r > 5) {
          phi += charge.q / r;
        }
      }
      return phi;
    };

    // Draw potential field as colors
    const imageData = ctx.createImageData(width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const phi = potential(x, y);
        const normalized = Math.tanh(phi * 0.05);
        const index = (y * width + x) * 4;

        if (normalized > 0) {
          imageData.data[index] = Math.floor(normalized * 255);
          imageData.data[index + 1] = Math.floor(normalized * 100);
          imageData.data[index + 2] = 100;
        } else {
          imageData.data[index] = 100;
          imageData.data[index + 1] = Math.floor(-normalized * 100);
          imageData.data[index + 2] = Math.floor(-normalized * 255);
        }
        imageData.data[index + 3] = 255;
      }
    }
    ctx.putImageData(imageData, 0, 0);

    // Draw equipotential lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    for (let level = -10; level <= 10; level++) {
      if (level === 0) continue;
      const targetPhi = level * 0.02;

      // March around finding contour
      for (let startY = 0; startY < height; startY += 20) {
        for (let startX = 0; startX < width; startX += 20) {
          if (Math.abs(potential(startX, startY) - targetPhi) < 0.01) {
            ctx.beginPath();
            ctx.arc(startX, startY, 1, 0, 2 * Math.PI);
            ctx.stroke();
          }
        }
      }
    }

    // Draw charges
    charges.forEach(charge => {
      ctx.beginPath();
      ctx.arc(charge.x, charge.y, 12, 0, 2 * Math.PI);
      ctx.fillStyle = charge.q > 0 ? '#ef4444' : '#3b82f6';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw + or - symbol
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(charge.q > 0 ? '+' : '−', charge.x, charge.y + 5);
    });

    ctx.textAlign = 'left';
  }, [chargeConfig]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Laplace's Equation</h4>

      <p className="text-sm text-dark-300 mb-4">
        Laplace's equation ∇²φ = 0 describes potential fields in regions without sources—
        from electrostatics to fluid flow to heat conduction. Solutions are "harmonic functions"
        with beautiful smoothness properties.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`\\nabla^2 \\varphi = \\frac{\\partial^2 \\varphi}{\\partial x^2} + \\frac{\\partial^2 \\varphi}{\\partial y^2} = 0`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="w-full max-w-md mx-auto bg-dark-900 rounded-lg mb-4"
      />

      <div className="flex gap-2 mb-4 justify-center">
        <button
          onClick={() => setChargeConfig('single')}
          className={`px-4 py-2 rounded ${
            chargeConfig === 'single' ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Single Charge
        </button>
        <button
          onClick={() => setChargeConfig('dipole')}
          className={`px-4 py-2 rounded ${
            chargeConfig === 'dipole' ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Dipole
        </button>
        <button
          onClick={() => setChargeConfig('quadrupole')}
          className={`px-4 py-2 rounded ${
            chargeConfig === 'quadrupole' ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Quadrupole
        </button>
      </div>

      <p className="text-xs text-dark-500 text-center">
        Red = positive potential, Blue = negative potential.
        The equation holds everywhere except at the charges themselves.
      </p>
    </div>
  );
}

// Nebular Hypothesis
function NebularHypothesis() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stage, setStage] = useState(0);
  const [time, setTime] = useState(0);

  const stages = [
    { name: 'Gas Cloud', desc: 'A rotating cloud of gas and dust begins to collapse under gravity.' },
    { name: 'Disk Formation', desc: 'Conservation of angular momentum flattens the cloud into a disk.' },
    { name: 'Proto-Sun', desc: 'Material accumulates at the center, forming a proto-star.' },
    { name: 'Planet Formation', desc: 'Rings of material coalesce into planets orbiting the new star.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.03);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, width, height);

    // Draw based on stage
    if (stage === 0) {
      // Rotating gas cloud
      for (let i = 0; i < 200; i++) {
        const angle = (i * 0.1 + time * 0.3) + Math.sin(i * 0.5) * 0.5;
        const r = 50 + Math.random() * 100 + Math.sin(i) * 20;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r * 0.8;
        const size = 1 + Math.random() * 2;
        ctx.fillStyle = `rgba(200, 200, 255, ${0.3 + Math.random() * 0.4})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
      }
    } else if (stage === 1) {
      // Flattening disk
      for (let i = 0; i < 300; i++) {
        const angle = i * 0.1 + time * 0.5;
        const r = 30 + (i % 100) + Math.random() * 20;
        const x = centerX + Math.cos(angle) * r;
        const flatness = 0.3;
        const y = centerY + Math.sin(angle) * r * flatness;
        const size = 1 + Math.random();
        ctx.fillStyle = `rgba(255, 220, 180, ${0.4 + Math.random() * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
      }
    } else if (stage === 2) {
      // Proto-sun forming
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      gradient.addColorStop(0, '#fef08a');
      gradient.addColorStop(0.5, '#f59e0b');
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
      ctx.fill();

      // Remaining disk
      for (let i = 0; i < 200; i++) {
        const angle = i * 0.1 + time * 0.7;
        const r = 60 + (i % 80) + Math.random() * 15;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r * 0.15;
        ctx.fillStyle = `rgba(255, 200, 150, ${0.3 + Math.random() * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
        ctx.fill();
      }
    } else if (stage === 3) {
      // Sun and planets
      const sunGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 25);
      sunGradient.addColorStop(0, '#fef08a');
      sunGradient.addColorStop(0.8, '#f59e0b');
      sunGradient.addColorStop(1, '#b45309');
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25, 0, 2 * Math.PI);
      ctx.fill();

      // Planets
      const planets = [
        { r: 50, size: 4, color: '#9ca3af', speed: 3 },
        { r: 80, size: 6, color: '#60a5fa', speed: 2 },
        { r: 110, size: 8, color: '#34d399', speed: 1.5 },
        { r: 145, size: 5, color: '#f87171', speed: 1 },
      ];

      planets.forEach(planet => {
        const angle = time * planet.speed;
        const x = centerX + Math.cos(angle) * planet.r;
        const y = centerY + Math.sin(angle) * planet.r * 0.3;

        // Orbit
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, planet.r, planet.r * 0.3, 0, 0, 2 * Math.PI);
        ctx.stroke();

        // Planet
        ctx.fillStyle = planet.color;
        ctx.beginPath();
        ctx.arc(x, y, planet.size, 0, 2 * Math.PI);
        ctx.fill();
      });
    }

    // Stage label
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText(`Stage ${stage + 1}: ${stages[stage].name}`, 10, 20);
  }, [stage, time]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Nebular Hypothesis</h4>

      <p className="text-sm text-dark-300 mb-4">
        Laplace proposed that the solar system formed from a rotating cloud of gas that
        contracted under gravity. As it shrank, conservation of angular momentum spun it
        faster, flattening it into a disk from which planets condensed.
      </p>

      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="w-full max-w-md mx-auto bg-dark-950 rounded-lg mb-4"
      />

      <div className="flex gap-2 mb-4 justify-center">
        {stages.map((s, i) => (
          <button
            key={i}
            onClick={() => setStage(i)}
            className={`px-3 py-1 rounded text-sm ${
              stage === i ? 'bg-primary-600' : 'bg-dark-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <p className="text-sm text-dark-300">{stages[stage].desc}</p>
      </div>
    </div>
  );
}

// Laplace's Demon
function LaplaceDemon() {
  const [showDeterminism, setShowDeterminism] = useState(true);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Laplace's Demon</h4>

      <p className="text-sm text-dark-300 mb-4">
        Laplace articulated the ultimate deterministic vision: an intelligence that knew
        the position and momentum of every particle could predict the entire future and
        reconstruct the entire past. This "demon" represents classical determinism.
      </p>

      <div className="bg-dark-800 p-6 rounded-lg mb-4">
        <blockquote className="text-dark-300 italic text-sm">
          "We may regard the present state of the universe as the effect of its past
          and the cause of its future. An intellect which at a certain moment would know
          all forces that set nature in motion, and all positions of all items of which
          nature is composed, if this intellect were also vast enough to submit these
          data to analysis, it would embrace in a single formula the movements of the
          greatest bodies of the universe and those of the tiniest atom; for such an
          intellect nothing would be uncertain and the future just like the past would
          be present before its eyes."
        </blockquote>
        <p className="text-xs text-dark-500 mt-2 text-right">— Laplace, 1814</p>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowDeterminism(true)}
          className={`flex-1 py-2 rounded ${
            showDeterminism ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Classical View
        </button>
        <button
          onClick={() => setShowDeterminism(false)}
          className={`flex-1 py-2 rounded ${
            !showDeterminism ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Modern Challenges
        </button>
      </div>

      {showDeterminism ? (
        <div className="bg-dark-800 p-4 rounded-lg">
          <h5 className="font-semibold text-emerald-400 mb-2">Classical Determinism</h5>
          <ul className="text-sm text-dark-300 space-y-2">
            <li>• Every event is caused by prior events</li>
            <li>• Given complete knowledge, the future is predictable</li>
            <li>• The laws of physics are deterministic</li>
            <li>• Randomness is just ignorance</li>
          </ul>
        </div>
      ) : (
        <div className="bg-dark-800 p-4 rounded-lg">
          <h5 className="font-semibold text-amber-400 mb-2">Modern Challenges</h5>
          <ul className="text-sm text-dark-300 space-y-2">
            <li>• <strong>Quantum mechanics:</strong> Heisenberg uncertainty limits knowledge</li>
            <li>• <strong>Chaos theory:</strong> Tiny uncertainties grow exponentially</li>
            <li>• <strong>Computational limits:</strong> Some systems are inherently unpredictable</li>
            <li>• <strong>Black holes:</strong> Information may be destroyed</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Pierre-Simon Laplace was the "Newton of France"—completing Newton's work on
        celestial mechanics while simultaneously founding modern probability theory.
        His vision of a deterministic universe, where perfect knowledge means perfect
        prediction, defined scientific thinking for a century.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "I had no need of that hypothesis."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Laplace to Napoleon, when asked why his <em>Mécanique Céleste</em> didn't mention God
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Newton of France</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Pierre-Simon Laplace (1749–1827) was born to a farming family in Normandy.
            His mathematical abilities attracted patronage that sent him to Paris, where
            by age 24 he was presenting papers to the Academy of Sciences. D'Alembert
            recognized his genius and helped launch his career.
          </p>
          <p className="mb-4">
            Laplace navigated the French Revolution, the Empire, and the Restoration with
            remarkable political dexterity. He served Napoleon briefly as Minister of the
            Interior (Napoleon called him a mediocre administrator who "brought the spirit
            of infinitesimals into government"). He was made a Count, then a Marquis.
          </p>
          <p>
            His two monumental works—<em>Mécanique Céleste</em> (Celestial Mechanics) and
            <em>Théorie Analytique des Probabilités</em>—established him as the supreme
            applied mathematician of his age.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> March 23, 1749</li>
            <li><strong>Died:</strong> March 5, 1827</li>
            <li><strong>Major Works:</strong> Mécanique Céleste, Théorie des Probabilités</li>
            <li><strong>Titles:</strong> Count, Marquis</li>
            <li><strong>Style:</strong> "It is easy to see..."</li>
          </ul>
        </Card>
      </div>

      <Callout type="warning">
        <p>
          <strong>"It Is Easy to See":</strong> Laplace's books are notorious for the phrase
          "Il est aisé à voir" (it is easy to see) followed by pages of difficult derivations.
          When a student asked him to explain one such passage, Laplace reportedly spent an
          hour working it out, then confirmed: "Yes, it is easy to see."
        </p>
      </Callout>

      {/* Celestial Mechanics */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Celestial Mechanics</h2>

      <p className="mb-4">
        Newton's <em>Principia</em> explained planetary motion but left open whether the
        solar system was stable. Small perturbations might accumulate until planets
        collide or escape. Laplace proved the solar system is stable—at least to the
        precision of his analysis.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Mécanique Céleste</h4>
          <p className="text-sm text-dark-300">
            Five volumes (1799–1825) systematized everything known about planetary motion.
            Laplace translated Newton's geometric methods into pure analysis, extending
            and completing the work.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Perturbation Theory</h4>
          <p className="text-sm text-dark-300">
            Laplace developed methods to handle the gravitational pull of planets on each
            other, showing that irregularities are periodic and bounded—the system won't
            fly apart or collapse.
          </p>
        </Card>
      </CardGrid>

      <NebularHypothesis />

      {/* Probability Theory */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Probability Theory</h2>

      <p className="mb-4">
        Laplace transformed probability from a gambler's tool into a rigorous mathematical
        science. His <em>Théorie Analytique des Probabilités</em> (1812) unified all
        previous work and introduced powerful new techniques.
      </p>

      <CentralLimitTheorem />

      <BayesianUpdating />

      {/* Laplace's Equation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Mathematical Physics</h2>

      <p className="mb-4">
        Laplace's equation appears everywhere: gravitational fields, electrostatics,
        fluid flow, heat conduction. Laplace developed the mathematical theory of
        potential functions satisfying this equation.
      </p>

      <LaplaceEquation />

      <Callout type="success">
        <p>
          <strong>The Laplace Transform:</strong> Laplace also developed the transform that
          bears his name: <MathInline>{'F(s) = \\int_0^\\infty f(t)e^{-st}dt'}</MathInline>.
          This converts differential equations into algebraic equations, making them much
          easier to solve—essential in engineering and physics.
        </p>
      </Callout>

      {/* Laplace's Demon */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Determinism and Laplace's Demon</h2>

      <p className="mb-4">
        Laplace's most famous philosophical contribution is "Laplace's demon"—the idea that
        perfect knowledge of the present would allow perfect prediction of the future. This
        crystallized the deterministic worldview of classical physics.
      </p>

      <LaplaceDemon />

      {/* Other Contributions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Other Contributions</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Black Holes</h4>
          <p className="text-sm text-dark-300">
            Laplace predicted "dark stars"—objects so massive that light couldn't escape.
            He calculated that a star 250 times the Sun's diameter but same density would
            trap its own light.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Speed of Sound</h4>
          <p className="text-sm text-dark-300">
            Newton's formula for the speed of sound was 20% too low. Laplace corrected it
            by accounting for adiabatic (not isothermal) compression in sound waves.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Spherical Harmonics</h4>
          <p className="text-sm text-dark-300">
            Laplace developed these functions for solving problems on spheres—essential
            for geophysics, quantum mechanics, and computer graphics.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Bayesian Inference</h4>
          <p className="text-sm text-dark-300">
            Though Bayes published first, Laplace independently developed and systematized
            Bayesian probability, applying it to problems throughout science.
          </p>
        </div>
      </div>

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell portrays Laplace as supremely capable but lacking in generosity—he often
        failed to credit others' work that he absorbed into his own:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Laplace was the complete mathematical physicist... He took all mathematics
        and theoretical astronomy for his province and cultivated it royally."
      </blockquote>

      <p className="my-4">
        Bell notes Laplace's political adaptability—serving whoever was in power—and his
        infamous habit of using others' results without acknowledgment. Yet his achievement
        in completing Newton's program and founding mathematical statistics places him
        among the greatest applied mathematicians.
      </p>

      <Callout type="info">
        <p>
          <strong>Final Words:</strong> On his deathbed, Laplace supposedly said: "What we
          know is not much. What we do not know is immense." A fitting epitaph for the man
          who had known more of nature's mathematical secrets than perhaps anyone before him.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Pierre-Simon Laplace (1749–1827) completed Newton's work on celestial mechanics,
              proving the solar system's stability in his five-volume <em>Mécanique Céleste</em>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              He founded modern probability theory, proving the central limit theorem and
              developing Bayesian inference systematically.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              Laplace's rule of succession (s+1)/(n+2) gives the probability of future success
              based on past observations—smoothing estimates with Bayesian reasoning.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              "Laplace's demon" articulated classical determinism: with perfect knowledge
              of the present, the entire future could be predicted.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              His nebular hypothesis explained the solar system's formation from a rotating
              gas cloud—still the basis of modern theories.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
