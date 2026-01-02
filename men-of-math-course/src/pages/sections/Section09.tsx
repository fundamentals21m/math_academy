import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, InlineMath } from '../../components/common/MathBlock';

// Bernoulli Family Tree
function FamilyTree() {
  const [selectedMember, setSelectedMember] = useState<string | null>('jacob');

  const members: Record<string, {
    name: string;
    years: string;
    relation: string;
    achievements: string[];
    color: string;
  }> = {
    nicolaus: {
      name: "Nicolaus Bernoulli",
      years: "1623-1708",
      relation: "Patriarch (merchant)",
      achievements: [
        "Father of Jacob and Johann",
        "Successful spice merchant in Basel",
        "Wanted sons to follow practical careers",
      ],
      color: "#6b7280",
    },
    jacob: {
      name: "Jacob (Jakob) Bernoulli I",
      years: "1654-1705",
      relation: "First mathematician son",
      achievements: [
        "Bernoulli numbers",
        "Law of large numbers",
        "Studied the catenary curve",
        "Ars Conjectandi (probability)",
      ],
      color: "#3b82f6",
    },
    johann: {
      name: "Johann (Jean) Bernoulli I",
      years: "1667-1748",
      relation: "Jacob's younger brother",
      achievements: [
        "Solved the brachistochrone",
        "L'Hôpital's rule (sold it!)",
        "Taught Euler",
        "Bitter rivalry with Jacob",
      ],
      color: "#10b981",
    },
    nicolaus2: {
      name: "Nicolaus II Bernoulli",
      years: "1695-1726",
      relation: "Johann's son",
      achievements: [
        "St. Petersburg paradox",
        "Probability theory",
        "Died young at 31",
      ],
      color: "#f59e0b",
    },
    daniel: {
      name: "Daniel Bernoulli",
      years: "1700-1782",
      relation: "Johann's son",
      achievements: [
        "Bernoulli's principle (fluids)",
        "Hydrodynamica",
        "Kinetic theory of gases",
        "Father jealously stole credit",
      ],
      color: "#ef4444",
    },
    johann2: {
      name: "Johann II Bernoulli",
      years: "1710-1790",
      relation: "Johann's youngest son",
      achievements: [
        "Heat and light theory",
        "Paris Academy prizes",
        "Continued family tradition",
      ],
      color: "#8b5cf6",
    },
  };

  const selected = selectedMember ? members[selectedMember] : null;

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Bernoulli Dynasty</h4>

      <p className="text-sm text-dark-300 mb-4">
        The Bernoulli family produced eight prominent mathematicians across three generations.
        No other family in history has contributed so much to mathematics—though their
        rivalries and jealousies were legendary.
      </p>

      {/* Family tree visualization */}
      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <div className="flex flex-col items-center">
          {/* Generation 1 */}
          <button
            onClick={() => setSelectedMember('nicolaus')}
            className={`px-4 py-2 rounded mb-2 ${
              selectedMember === 'nicolaus' ? 'ring-2 ring-white' : ''
            }`}
            style={{ backgroundColor: members.nicolaus.color }}
          >
            Nicolaus (Patriarch)
          </button>

          <div className="w-px h-6 bg-dark-600" />

          {/* Generation 2 */}
          <div className="flex gap-16 mb-2">
            <div className="flex flex-col items-center">
              <button
                onClick={() => setSelectedMember('jacob')}
                className={`px-4 py-2 rounded ${
                  selectedMember === 'jacob' ? 'ring-2 ring-white' : ''
                }`}
                style={{ backgroundColor: members.jacob.color }}
              >
                Jacob I
              </button>
              <span className="text-xs text-dark-500 mt-1">1654-1705</span>
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setSelectedMember('johann')}
                className={`px-4 py-2 rounded ${
                  selectedMember === 'johann' ? 'ring-2 ring-white' : ''
                }`}
                style={{ backgroundColor: members.johann.color }}
              >
                Johann I
              </button>
              <span className="text-xs text-dark-500 mt-1">1667-1748</span>
            </div>
          </div>

          <div className="w-64 h-px bg-dark-600 relative">
            <div className="absolute left-1/2 top-0 w-px h-6 bg-dark-600" />
          </div>

          {/* Generation 3 */}
          <div className="flex gap-8 mt-6">
            <div className="flex flex-col items-center">
              <button
                onClick={() => setSelectedMember('nicolaus2')}
                className={`px-3 py-1 rounded text-sm ${
                  selectedMember === 'nicolaus2' ? 'ring-2 ring-white' : ''
                }`}
                style={{ backgroundColor: members.nicolaus2.color }}
              >
                Nicolaus II
              </button>
              <span className="text-xs text-dark-500 mt-1">1695-1726</span>
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setSelectedMember('daniel')}
                className={`px-3 py-1 rounded text-sm ${
                  selectedMember === 'daniel' ? 'ring-2 ring-white' : ''
                }`}
                style={{ backgroundColor: members.daniel.color }}
              >
                Daniel
              </button>
              <span className="text-xs text-dark-500 mt-1">1700-1782</span>
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setSelectedMember('johann2')}
                className={`px-3 py-1 rounded text-sm ${
                  selectedMember === 'johann2' ? 'ring-2 ring-white' : ''
                }`}
                style={{ backgroundColor: members.johann2.color }}
              >
                Johann II
              </button>
              <span className="text-xs text-dark-500 mt-1">1710-1790</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected member details */}
      {selected && (
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${selected.color}22`, borderLeft: `4px solid ${selected.color}` }}
        >
          <h5 className="font-semibold text-lg" style={{ color: selected.color }}>
            {selected.name}
          </h5>
          <p className="text-sm text-dark-400 mb-2">{selected.years} • {selected.relation}</p>
          <ul className="space-y-1">
            {selected.achievements.map((a, i) => (
              <li key={i} className="text-sm text-dark-300 flex items-start gap-2">
                <span style={{ color: selected.color }}>•</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Brachistochrone Problem
function BrachistochroneDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);

  const curves = {
    straight: { color: '#ef4444', name: 'Straight Line', time: 0 },
    parabola: { color: '#f59e0b', name: 'Parabola', time: 0 },
    cycloid: { color: '#10b981', name: 'Cycloid', time: 0 },
  };

  // Calculate positions along each curve
  const getPosition = (curve: string, t: number): { x: number; y: number } => {
    const startX = 50;
    const startY = 50;
    const endX = 450;
    const endY = 280;

    switch (curve) {
      case 'straight': {
        // Linear interpolation (but physics makes it slower!)
        const progress = Math.min(t * 0.7, 1); // Slower than cycloid
        return {
          x: startX + (endX - startX) * progress,
          y: startY + (endY - startY) * progress,
        };
      }
      case 'parabola': {
        // Parabolic path
        const progress = Math.min(t * 0.8, 1);
        const px = startX + (endX - startX) * progress;
        const normalizedX = (px - startX) / (endX - startX);
        const py = startY + (endY - startY) * normalizedX * normalizedX;
        return { x: px, y: py };
      }
      case 'cycloid': {
        // Cycloid (fastest!)
        const progress = Math.min(t, 1);
        // Parametric cycloid approximation
        const theta = progress * Math.PI;
        const r = (endX - startX) / Math.PI;
        const px = startX + r * (theta - Math.sin(theta) * 0.3);
        const py = startY + r * (1 - Math.cos(theta)) * 0.73;
        return { x: Math.min(px, endX), y: Math.min(py, endY) };
      }
      default:
        return { x: startX, y: startY };
    }
  };

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime(t => {
        const newT = t + 0.02;
        if (newT >= 1 && !winner) {
          setWinner('cycloid');
        }
        if (newT >= 1.5) {
          setRunning(false);
          return 1.5;
        }
        return newT;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [running, winner]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    const startX = 50;
    const startY = 50;
    const endX = 450;
    const endY = 280;

    // Draw start and end points
    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(startX, startY, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText('Start', startX - 15, startY - 15);

    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(endX, endY, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.font = '12px monospace';
    ctx.fillText('End', endX - 10, endY + 25);

    // Draw curves
    // Straight line
    ctx.strokeStyle = curves.straight.color;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // Parabola
    ctx.strokeStyle = curves.parabola.color;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const x = startX + (endX - startX) * t;
      const y = startY + (endY - startY) * t * t;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Cycloid
    ctx.strokeStyle = curves.cycloid.color;
    ctx.setLineDash([]);
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= 100; i++) {
      const progress = i / 100;
      const theta = progress * Math.PI;
      const r = (endX - startX) / Math.PI;
      const x = startX + r * (theta - Math.sin(theta) * 0.3);
      const y = startY + r * (1 - Math.cos(theta)) * 0.73;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(Math.min(x, endX), Math.min(y, endY));
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw balls
    if (running || time > 0) {
      Object.entries(curves).forEach(([key, curve]) => {
        const pos = getPosition(key, time);
        ctx.fillStyle = curve.color;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    // Legend
    ctx.font = '11px monospace';
    let legendY = 30;
    Object.entries(curves).forEach(([key, curve]) => {
      ctx.fillStyle = curve.color;
      ctx.fillRect(width - 120, legendY - 10, 15, 15);
      ctx.fillStyle = '#9ca3af';
      ctx.fillText(curve.name, width - 100, legendY);
      legendY += 20;
    });
  }, [time, running]);

  const reset = () => {
    setTime(0);
    setWinner(null);
    setRunning(false);
  };

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Brachistochrone Problem</h4>

      <p className="text-sm text-dark-300 mb-4">
        In 1696, Johann Bernoulli challenged the mathematical world: what curve allows
        a ball to slide (frictionless, under gravity) from point A to point B in the
        <em> shortest time</em>? Not the shortest distance—the shortest time.
      </p>

      <canvas
        ref={canvasRef}
        width={500}
        height={320}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => { reset(); setRunning(true); }}
          className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded text-white"
        >
          Race!
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded"
        >
          Reset
        </button>
      </div>

      {winner && (
        <div className="bg-emerald-900/30 p-4 rounded-lg">
          <p className="text-emerald-400 font-semibold">
            The Cycloid wins! Despite being a longer path, it's the fastest descent.
          </p>
        </div>
      )}

      <Callout type="success">
        <p>
          <strong>Five Solutions:</strong> Newton, Leibniz, L'Hôpital, Jacob Bernoulli, and
          Johann Bernoulli all solved it. The answer is a cycloid—the curve traced by a point
          on a rolling wheel. Johann reportedly said he recognized Newton's anonymous solution
          "as the lion by his claw."
        </p>
      </Callout>
    </div>
  );
}

// Bernoulli's Principle (Fluid Dynamics)
function BernoulliPrinciple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [narrowing, setNarrowing] = useState(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Pipe parameters
    const pipeY = height / 2;
    const wideHeight = 100;
    const narrowHeight = wideHeight * (1 - narrowing * 0.7);

    // Draw pipe
    ctx.fillStyle = '#374151';
    // Top wall
    ctx.beginPath();
    ctx.moveTo(0, pipeY - wideHeight / 2);
    ctx.lineTo(150, pipeY - wideHeight / 2);
    ctx.bezierCurveTo(200, pipeY - wideHeight / 2, 200, pipeY - narrowHeight / 2, 250, pipeY - narrowHeight / 2);
    ctx.lineTo(350, pipeY - narrowHeight / 2);
    ctx.bezierCurveTo(400, pipeY - narrowHeight / 2, 400, pipeY - wideHeight / 2, 450, pipeY - wideHeight / 2);
    ctx.lineTo(width, pipeY - wideHeight / 2);
    ctx.lineTo(width, pipeY - wideHeight / 2 - 20);
    ctx.lineTo(0, pipeY - wideHeight / 2 - 20);
    ctx.closePath();
    ctx.fill();

    // Bottom wall
    ctx.beginPath();
    ctx.moveTo(0, pipeY + wideHeight / 2);
    ctx.lineTo(150, pipeY + wideHeight / 2);
    ctx.bezierCurveTo(200, pipeY + wideHeight / 2, 200, pipeY + narrowHeight / 2, 250, pipeY + narrowHeight / 2);
    ctx.lineTo(350, pipeY + narrowHeight / 2);
    ctx.bezierCurveTo(400, pipeY + narrowHeight / 2, 400, pipeY + wideHeight / 2, 450, pipeY + wideHeight / 2);
    ctx.lineTo(width, pipeY + wideHeight / 2);
    ctx.lineTo(width, pipeY + wideHeight / 2 + 20);
    ctx.lineTo(0, pipeY + wideHeight / 2 + 20);
    ctx.closePath();
    ctx.fill();

    // Draw fluid flow (particles)
    const time = Date.now() / 1000;
    ctx.fillStyle = '#3b82f6';
    for (let i = 0; i < 30; i++) {
      const baseX = ((i * 50 + time * 100) % (width + 50)) - 25;
      let localHeight = wideHeight;
      let speed = 1;

      // Adjust for narrow section
      if (baseX > 150 && baseX < 450) {
        const narrowProgress = baseX < 250
          ? (baseX - 150) / 100
          : baseX > 350
            ? 1 - (baseX - 350) / 100
            : 1;
        localHeight = wideHeight - (wideHeight - narrowHeight) * Math.min(1, narrowProgress);
        speed = wideHeight / localHeight;
      }

      const yOffset = Math.sin(i * 1.5) * (localHeight / 2 - 10);
      ctx.beginPath();
      ctx.arc(baseX, pipeY + yOffset, 4, 0, 2 * Math.PI);
      ctx.fill();

      // Velocity arrow
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(baseX, pipeY + yOffset);
      ctx.lineTo(baseX + 10 * speed, pipeY + yOffset);
      ctx.stroke();
    }

    // Pressure indicators
    const drawPressureGauge = (x: number, label: string, pressure: number) => {
      ctx.fillStyle = '#1f2937';
      ctx.fillRect(x - 25, 20, 50, 60);
      ctx.strokeStyle = '#4b5563';
      ctx.strokeRect(x - 25, 20, 50, 60);

      // Pressure bar
      const barHeight = 40 * pressure;
      const color = pressure > 0.6 ? '#ef4444' : pressure > 0.3 ? '#f59e0b' : '#10b981';
      ctx.fillStyle = color;
      ctx.fillRect(x - 15, 70 - barHeight, 30, barHeight);

      ctx.fillStyle = '#9ca3af';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(label, x, 15);
      ctx.fillText(`P=${(pressure * 100).toFixed(0)}%`, x, 90);
      ctx.textAlign = 'left';
    };

    const narrowPressure = 1 - narrowing * 0.6;
    drawPressureGauge(75, 'Wide', 0.8);
    drawPressureGauge(300, 'Narrow', narrowPressure);
    drawPressureGauge(475, 'Wide', 0.8);

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.fillText('Slow velocity', 50, height - 30);
    ctx.fillText('High pressure', 50, height - 15);
    ctx.fillText('Fast velocity', 265, height - 30);
    ctx.fillText('Low pressure', 265, height - 15);
  }, [narrowing]);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Trigger redraw
          setNarrowing(n => n);
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Bernoulli's Principle (Daniel Bernoulli)</h4>

      <p className="text-sm text-dark-300 mb-4">
        Daniel Bernoulli discovered that in a flowing fluid, an increase in velocity occurs
        simultaneously with a decrease in pressure. This explains how airplane wings generate
        lift, why shower curtains get sucked inward, and how carburetors work.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}`}
        </MathBlock>
        <p className="text-sm text-dark-400 text-center mt-2">
          Pressure + Kinetic energy + Potential energy = constant along a streamline
        </p>
      </div>

      <canvas
        ref={canvasRef}
        width={550}
        height={250}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="mb-4">
        <label className="text-sm text-dark-400 block mb-2">
          Pipe narrowing: <span className="text-primary-400 font-bold">{(narrowing * 100).toFixed(0)}%</span>
        </label>
        <input
          type="range"
          min={0.1}
          max={0.8}
          step={0.05}
          value={narrowing}
          onChange={(e) => setNarrowing(parseFloat(e.target.value))}
          className="w-full accent-primary-500"
        />
      </div>

      <Callout type="info">
        <p>
          <strong>From Hydrodynamica (1738):</strong> Daniel's work established fluid dynamics
          as a mathematical science. His father Johann was so jealous that he backdated his
          own book <em>Hydraulica</em> to claim priority. The rivalry between father and son
          was bitter and public.
        </p>
      </Callout>
    </div>
  );
}

// Law of Large Numbers
function LawOfLargeNumbers() {
  const [flips, setFlips] = useState<boolean[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoins = async (count: number) => {
    setIsFlipping(true);
    const newFlips: boolean[] = [];
    for (let i = 0; i < count; i++) {
      newFlips.push(Math.random() < 0.5);
      if (i < 100 || i % 100 === 0) {
        setFlips([...newFlips]);
        await new Promise(r => setTimeout(r, i < 50 ? 20 : 1));
      }
    }
    setFlips(newFlips);
    setIsFlipping(false);
  };

  const heads = flips.filter(f => f).length;
  const proportion = flips.length > 0 ? heads / flips.length : 0;

  // Calculate running proportions for chart
  const getRunningProportions = (): number[] => {
    const proportions: number[] = [];
    let headsCount = 0;
    for (let i = 0; i < flips.length; i++) {
      if (flips[i]) headsCount++;
      if (i < 100 || i % 10 === 0) {
        proportions.push(headsCount / (i + 1));
      }
    }
    return proportions;
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    if (flips.length === 0) {
      ctx.fillStyle = '#4b5563';
      ctx.font = '14px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('Click "Flip Coins" to start', width / 2, height / 2);
      ctx.textAlign = 'left';
      return;
    }

    // Draw 0.5 reference line
    const midY = height / 2;
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(40, midY);
    ctx.lineTo(width - 10, midY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#10b981';
    ctx.font = '11px monospace';
    ctx.fillText('0.5 (expected)', 45, midY - 8);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 10);
    ctx.lineTo(40, height - 20);
    ctx.lineTo(width - 10, height - 20);
    ctx.stroke();

    // Y-axis labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '10px monospace';
    ctx.fillText('1.0', 10, 15);
    ctx.fillText('0.5', 10, midY + 4);
    ctx.fillText('0.0', 10, height - 20);

    // Draw proportion line
    const proportions = getRunningProportions();
    if (proportions.length > 1) {
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();

      proportions.forEach((p, i) => {
        const x = 40 + (i / (proportions.length - 1)) * (width - 50);
        const y = height - 20 - p * (height - 30);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    }

    // X-axis label
    ctx.fillStyle = '#9ca3af';
    ctx.fillText(`Flips: ${flips.length}`, width - 80, height - 5);
  }, [flips]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Law of Large Numbers (Jacob Bernoulli)</h4>

      <p className="text-sm text-dark-300 mb-4">
        Jacob Bernoulli proved that as you repeat an experiment more times, the observed
        frequency converges to the true probability. Flip a fair coin enough times, and
        the proportion of heads approaches exactly 0.5.
      </p>

      <canvas
        ref={canvasRef}
        width={500}
        height={200}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => flipCoins(10)}
          disabled={isFlipping}
          className="px-3 py-2 bg-dark-700 hover:bg-dark-600 rounded disabled:opacity-50"
        >
          10 Flips
        </button>
        <button
          onClick={() => flipCoins(100)}
          disabled={isFlipping}
          className="px-3 py-2 bg-dark-700 hover:bg-dark-600 rounded disabled:opacity-50"
        >
          100 Flips
        </button>
        <button
          onClick={() => flipCoins(1000)}
          disabled={isFlipping}
          className="px-3 py-2 bg-primary-600 hover:bg-primary-700 rounded disabled:opacity-50"
        >
          1,000 Flips
        </button>
        <button
          onClick={() => flipCoins(10000)}
          disabled={isFlipping}
          className="px-3 py-2 bg-primary-600 hover:bg-primary-700 rounded disabled:opacity-50"
        >
          10,000 Flips
        </button>
        <button
          onClick={() => setFlips([])}
          className="px-3 py-2 bg-dark-700 hover:bg-dark-600 rounded"
        >
          Reset
        </button>
      </div>

      {flips.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg text-center">
            <p className="text-xs text-dark-400">Total Flips</p>
            <p className="text-2xl font-mono text-primary-400">{flips.length}</p>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg text-center">
            <p className="text-xs text-dark-400">Heads</p>
            <p className="text-2xl font-mono text-emerald-400">{heads}</p>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg text-center">
            <p className="text-xs text-dark-400">Proportion</p>
            <p className={`text-2xl font-mono ${
              Math.abs(proportion - 0.5) < 0.02 ? 'text-emerald-400' : 'text-amber-400'
            }`}>
              {proportion.toFixed(4)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Catenary Curve
function CatenaryCurve() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [a, setA] = useState(80);
  const [showParabola, setShowParabola] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    const centerX = width / 2;
    const baseY = 50;

    // Draw support posts
    ctx.fillStyle = '#78350f';
    ctx.fillRect(50, 30, 10, 250);
    ctx.fillRect(width - 60, 30, 10, 250);

    // Draw catenary: y = a * cosh(x/a)
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.beginPath();

    const xRange = (width - 120) / 2;
    for (let px = 60; px <= width - 60; px++) {
      const x = (px - centerX) / a;
      const y = a * (Math.cosh(x) - 1);
      const py = baseY + y;
      if (px === 60) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Draw parabola for comparison
    if (showParabola) {
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();

      for (let px = 60; px <= width - 60; px++) {
        const x = px - centerX;
        // Match the endpoints of the catenary
        const catenaryAtEnd = a * (Math.cosh(xRange / a) - 1);
        const parabCoeff = catenaryAtEnd / (xRange * xRange);
        const y = parabCoeff * x * x;
        const py = baseY + y;
        if (px === 60) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Legend
    ctx.font = '12px monospace';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('━ Catenary (chain curve)', 60, height - 40);
    if (showParabola) {
      ctx.fillStyle = '#ef4444';
      ctx.fillText('╌ Parabola (not the same!)', 60, height - 20);
    }

    // Equation
    ctx.fillStyle = '#9ca3af';
    ctx.fillText(`y = ${a} · cosh(x/${a})`, width - 180, 30);
  }, [a, showParabola]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Catenary Curve</h4>

      <p className="text-sm text-dark-300 mb-4">
        What shape does a hanging chain make? Galileo guessed a parabola, but Jacob Bernoulli
        proved it's actually a <em>catenary</em>—the hyperbolic cosine function. The Gateway
        Arch in St. Louis is an inverted catenary.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`y = a \\cosh\\left(\\frac{x}{a}\\right) = a \\cdot \\frac{e^{x/a} + e^{-x/a}}{2}`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={500}
        height={300}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-2">
            Parameter a: <span className="text-primary-400 font-bold">{a}</span>
          </label>
          <input
            type="range"
            min={40}
            max={150}
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
            className="w-full accent-primary-500"
          />
          <p className="text-xs text-dark-500 mt-1">
            Smaller a = heavier chain (more sag)
          </p>
        </div>
        <div className="flex items-center">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showParabola}
              onChange={(e) => setShowParabola(e.target.checked)}
              className="accent-red-500"
            />
            <span className="text-sm text-dark-400">Show parabola comparison</span>
          </label>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>Catenary vs Parabola:</strong> They look similar but are mathematically distinct.
          The catenary minimizes potential energy for a hanging chain; the parabola describes
          projectile motion. Jacob Bernoulli settled this question that had puzzled Galileo.
        </p>
      </Callout>
    </div>
  );
}

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        The Bernoulli family produced more mathematical genius than any other family in
        history—eight mathematicians across three generations. But genius came wrapped in
        jealousy, rivalry, and bitter feuds. Brothers competed viciously, fathers stole
        credit from sons, and yet together they advanced calculus, probability, and physics
        more than any other family could claim.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "I recognize the lion by his claw."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Johann Bernoulli, upon seeing Newton's anonymous solution to the brachistochrone
        </footer>
      </blockquote>

      {/* Family Tree */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">A Mathematical Dynasty</h2>

      <FamilyTree />

      <Callout type="warning">
        <p>
          <strong>Family Feuds:</strong> The Bernoullis' rivalries were legendary. Jacob and
          Johann competed bitterly over the catenary and brachistochrone. Johann's jealousy
          of his son Daniel was so intense that he backdated his own book to claim Daniel's
          discoveries. Daniel was once evicted from his father's house for winning a prize
          they had both entered.
        </p>
      </Callout>

      {/* Jacob Bernoulli */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Jacob Bernoulli (1654-1705)</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            The eldest mathematical Bernoulli, Jacob defied his father's wishes (merchant
            career) to study mathematics. He became professor at Basel and made fundamental
            contributions to probability theory, including the law of large numbers—proving
            rigorously what gamblers know intuitively.
          </p>
          <p>
            His masterwork <em>Ars Conjectandi</em> (The Art of Conjecturing), published
            posthumously in 1713, established probability as a mathematical discipline.
            He also discovered the Bernoulli numbers, which appear throughout mathematics
            and were crucial for computing the sum of powers.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Jacob's Epitaph</h4>
          <p className="text-sm text-dark-300 italic">
            "Eadem mutata resurgo"
            <br />
            (Though changed, I shall arise the same)
          </p>
          <p className="text-xs text-dark-500 mt-2">
            Jacob chose this for his tombstone, alongside a logarithmic spiral—a curve
            he loved that reproduces itself under many transformations.
          </p>
        </Card>
      </div>

      <LawOfLargeNumbers />

      {/* Johann Bernoulli */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Johann Bernoulli (1667-1748)</h2>

      <p className="mb-4">
        Johann was arguably more brilliant than Jacob—and knew it. He taught calculus to
        L'Hôpital (selling him the right to publish "L'Hôpital's Rule"), trained Euler
        (the greatest mathematician of the 18th century), and posed the brachistochrone
        problem that challenged the mathematical world.
      </p>

      <BrachistochroneDemo />

      <p className="my-4">
        Johann's arrogance was legendary. When he solved the brachistochrone, he compared
        himself to a god: "With justice we admire Huygens because he first discovered that
        a heavy particle slides down a cycloid in the same time... But you will be petrified
        with astonishment when I say that precisely this cycloid... is our required curve."
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">L'Hôpital's Rule</h4>
          <p className="text-sm text-dark-300">
            Johann discovered it, but sold it to the Marquis de L'Hôpital for a monthly
            salary. L'Hôpital published it in the first calculus textbook (1696). Johann
            later claimed credit, but only after L'Hôpital died.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Euler's Teacher</h4>
          <p className="text-sm text-dark-300">
            Johann recognized Euler's genius early and gave him private lessons. Euler
            later called Johann "the principal professor of mathematics" and credited
            him with much of his early development.
          </p>
        </Card>
      </CardGrid>

      {/* Daniel Bernoulli */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Daniel Bernoulli (1700-1782)</h2>

      <p className="mb-4">
        Daniel was perhaps the greatest Bernoulli, though his father Johann tried to
        overshadow him at every turn. Daniel's work on fluid dynamics in <em>Hydrodynamica</em>
        (1738) established the field and gave us Bernoulli's principle—still used to explain
        how airplanes fly.
      </p>

      <BernoulliPrinciple />

      <Callout type="info">
        <p>
          <strong>The St. Petersburg Paradox:</strong> Daniel's cousin Nicolaus II posed this
          problem: A coin is flipped until heads appears. You win $2ⁿ where n is the number
          of flips. The expected value is infinite—so you should pay any amount to play. But
          would you? Daniel resolved this by introducing "expected utility," founding behavioral
          economics.
        </p>
      </Callout>

      {/* Catenary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Catenary: A Family Challenge</h2>

      <p className="mb-4">
        In 1690, Jacob challenged mathematicians to find the curve of a hanging chain.
        Johann, Leibniz, and Huygens all solved it—but the brothers' rivalry turned the
        solution into a battleground for priority and credit.
      </p>

      <CatenaryCurve />

      {/* Contributions Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Collective Contributions</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Calculus</h4>
          <p className="text-sm text-dark-300">
            The Bernoullis were among the first to master and extend Leibniz's calculus.
            They developed techniques for differential equations, calculus of variations,
            and applied calculus to physics problems.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Probability</h4>
          <p className="text-sm text-dark-300">
            Jacob's law of large numbers, Bernoulli distributions, the St. Petersburg
            paradox, and expected utility—foundations of probability theory and economics.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Physics</h4>
          <p className="text-sm text-dark-300">
            Daniel's fluid dynamics, Bernoulli's principle, and the kinetic theory of
            gases. The brachistochrone led to the calculus of variations and optimal
            control theory.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Bernoulli Numbers</h4>
          <p className="text-sm text-dark-300">
            Jacob discovered these numbers that appear in series expansions, number theory,
            and the computation of sums like 1² + 2² + ... + n². Ada Lovelace used them
            in the first computer program.
          </p>
        </div>
      </div>

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell devotes considerable space to the Bernoullis, fascinated by how genius
        and dysfunction could coexist so spectacularly:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Of all the mathematical dynasties the most distinguished is that of the Bernoullis.
        In three generations this remarkable family produced eight mathematicians, several
        of whom were of the first rank."
      </blockquote>

      <p className="my-4">
        Bell emphasizes that the Bernoullis, for all their feuding, trained the next
        generation. Johann taught Euler, the Bernoulli methods spread through Europe,
        and their work on calculus, probability, and mechanics shaped 18th-century
        mathematics more than any other single family.
      </p>

      <Callout type="success">
        <p>
          <strong>Legacy:</strong> The name "Bernoulli" appears throughout mathematics and
          physics: Bernoulli numbers, Bernoulli's principle, Bernoulli distribution, Bernoulli
          trials, Bernoulli's inequality, the Bernoulli equation... No other family name is
          attached to so many concepts.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              The Bernoulli family produced eight mathematicians across three generations—more
              mathematical genius than any other family in history.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Jacob Bernoulli proved the law of large numbers and discovered the Bernoulli
              numbers; his <em>Ars Conjectandi</em> founded mathematical probability.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              Johann Bernoulli posed the brachistochrone problem, taught Euler, and was
              one of the most brilliant (and arrogant) mathematicians of his age.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              Daniel Bernoulli established fluid dynamics and Bernoulli's principle:
              faster flow creates lower pressure—explaining lift in airplane wings.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              The family's bitter rivalries—brothers against brothers, fathers against
              sons—were as legendary as their mathematics.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
