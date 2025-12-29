import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock } from '../../components/common/MathBlock';

// Pi Calculation Visualization
function PiCalculation() {
  const [sides, setSides] = useState(6);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const radius = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw inscribed polygon
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw circumscribed polygon
    const circumRadius = radius / Math.cos(Math.PI / sides);
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = (i * 2 * Math.PI) / sides - Math.PI / 2 + Math.PI / sides;
      const x = centerX + circumRadius * Math.cos(angle);
      const y = centerY + circumRadius * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [sides]);

  // Calculate perimeters
  const inscribedPerimeter = sides * 2 * radius * Math.sin(Math.PI / sides);
  const circumscribedPerimeter = sides * 2 * radius * Math.tan(Math.PI / sides);
  const diameter = 2 * radius;

  const piLower = inscribedPerimeter / diameter;
  const piUpper = circumscribedPerimeter / diameter;

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Archimedes's Calculation of π</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={260}
            height={260}
            className="bg-dark-900 rounded-lg"
          />
          <div className="flex gap-4 mt-2 text-xs">
            <span className="text-emerald-400">■ Inscribed</span>
            <span className="text-amber-400">■ Circumscribed</span>
            <span className="text-primary-400">○ Circle</span>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="text-sm text-dark-400 block mb-2">
              Number of sides: <span className="text-primary-400 font-bold">{sides}</span>
            </label>
            <input
              type="range"
              min={3}
              max={96}
              value={sides}
              onChange={(e) => setSides(parseInt(e.target.value))}
              className="w-full accent-primary-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[6, 12, 24, 48, 96].map(n => (
              <button
                key={n}
                onClick={() => setSides(n)}
                className={`px-3 py-1 rounded text-sm ${
                  sides === n ? 'bg-primary-600 text-white' : 'bg-dark-700 text-dark-300'
                }`}
              >
                {n}-gon
              </button>
            ))}
          </div>

          <div className="bg-dark-800 p-4 rounded-lg space-y-2">
            <p className="text-sm">
              <span className="text-emerald-400">Lower bound:</span>{' '}
              <span className="font-mono">{piLower.toFixed(6)}</span>
            </p>
            <p className="text-sm">
              <span className="text-amber-400">Upper bound:</span>{' '}
              <span className="font-mono">{piUpper.toFixed(6)}</span>
            </p>
            <p className="text-sm">
              <span className="text-primary-400">True π:</span>{' '}
              <span className="font-mono">{Math.PI.toFixed(6)}</span>
            </p>
            <p className="text-sm text-dark-400">
              Range: ±{((piUpper - piLower) / 2).toFixed(6)}
            </p>
          </div>

          {sides === 96 && (
            <div className="p-3 bg-emerald-900/30 border border-emerald-500/30 rounded-lg">
              <p className="text-sm text-emerald-400">
                With 96 sides, Archimedes proved: 3 + 10/71 {"<"} π {"<"} 3 + 1/7
              </p>
              <p className="text-xs text-dark-400 mt-1">
                That's 3.1408... {"<"} π {"<"} 3.1429... — accurate to two decimal places!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Lever Principle Visualization
function LeverPrinciple() {
  const [weight1, setWeight1] = useState(10);
  const [distance1, setDistance1] = useState(3);
  const [weight2, setWeight2] = useState(6);
  const [distance2, setDistance2] = useState(5);

  const torque1 = weight1 * distance1;
  const torque2 = weight2 * distance2;
  const isBalanced = Math.abs(torque1 - torque2) < 0.5;
  const tilt = Math.min(15, Math.max(-15, (torque1 - torque2) * 0.5));

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Law of the Lever</h4>

      {/* Lever visualization */}
      <div className="relative h-48 bg-dark-800 rounded-lg mb-4 overflow-hidden">
        {/* Fulcrum */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-amber-500" />
        </div>

        {/* Lever beam */}
        <div
          className="absolute bottom-[34px] left-1/2 w-[280px] h-2 bg-dark-400 rounded origin-center transition-transform duration-300"
          style={{ transform: `translateX(-50%) rotate(${tilt}deg)` }}
        >
          {/* Weight 1 (left) */}
          <div
            className="absolute -top-12 flex flex-col items-center"
            style={{ left: `${50 - distance1 * 8}%`, transform: 'translateX(-50%)' }}
          >
            <div
              className="bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold"
              style={{
                width: 30 + weight1,
                height: 30 + weight1,
              }}
            >
              {weight1}
            </div>
          </div>

          {/* Weight 2 (right) */}
          <div
            className="absolute -top-12 flex flex-col items-center"
            style={{ left: `${50 + distance2 * 8}%`, transform: 'translateX(-50%)' }}
          >
            <div
              className="bg-emerald-500 rounded flex items-center justify-center text-white text-xs font-bold"
              style={{
                width: 30 + weight2,
                height: 30 + weight2,
              }}
            >
              {weight2}
            </div>
          </div>

          {/* Distance markers */}
          <div
            className="absolute top-3 text-xs text-blue-400"
            style={{ left: `${50 - distance1 * 8}%`, transform: 'translateX(-50%)' }}
          >
            d₁={distance1}
          </div>
          <div
            className="absolute top-3 text-xs text-emerald-400"
            style={{ left: `${50 + distance2 * 8}%`, transform: 'translateX(-50%)' }}
          >
            d₂={distance2}
          </div>
        </div>

        {/* Balance indicator */}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs ${
          isBalanced ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
        }`}>
          {isBalanced ? 'BALANCED' : 'UNBALANCED'}
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label className="text-sm text-blue-400">Left weight: {weight1}</label>
          <input
            type="range"
            min={1}
            max={20}
            value={weight1}
            onChange={(e) => setWeight1(parseInt(e.target.value))}
            className="w-full accent-blue-500"
          />
          <label className="text-sm text-blue-400">Left distance: {distance1}</label>
          <input
            type="range"
            min={1}
            max={5}
            value={distance1}
            onChange={(e) => setDistance1(parseInt(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-emerald-400">Right weight: {weight2}</label>
          <input
            type="range"
            min={1}
            max={20}
            value={weight2}
            onChange={(e) => setWeight2(parseInt(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <label className="text-sm text-emerald-400">Right distance: {distance2}</label>
          <input
            type="range"
            min={1}
            max={5}
            value={distance2}
            onChange={(e) => setDistance2(parseInt(e.target.value))}
            className="w-full accent-emerald-500"
          />
        </div>
      </div>

      {/* Torque calculation */}
      <div className="bg-dark-800 p-4 rounded-lg">
        <p className="text-sm mb-2">
          <span className="text-blue-400">Torque₁ = {weight1} × {distance1} = {torque1}</span>
        </p>
        <p className="text-sm mb-2">
          <span className="text-emerald-400">Torque₂ = {weight2} × {distance2} = {torque2}</span>
        </p>
        <MathBlock>
          {`W_1 \\times d_1 = W_2 \\times d_2 \\quad \\Rightarrow \\quad ${torque1} ${isBalanced ? '=' : '\\neq'} ${torque2}`}
        </MathBlock>
      </div>
    </div>
  );
}

// Eureka - Buoyancy Visualization
function BuoyancyDemo() {
  const [objectDensity, setObjectDensity] = useState(0.8);
  const [isSubmerged, setIsSubmerged] = useState(false);

  const waterDensity = 1.0;
  const submergedFraction = Math.min(1, objectDensity / waterDensity);
  const floats = objectDensity < waterDensity;

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Eureka! The Principle of Buoyancy</h4>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Water tank visualization */}
        <div className="relative w-64 h-64 bg-dark-800 rounded-lg overflow-hidden flex-shrink-0">
          {/* Water */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-blue-500/30 transition-all duration-500"
            style={{ height: '70%' }}
          >
            {/* Water surface line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400/50" />
          </div>

          {/* Object */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-lg transition-all duration-500 flex items-center justify-center"
            style={{
              backgroundColor: objectDensity > 1 ? '#ef4444' : objectDensity > 0.7 ? '#f59e0b' : '#10b981',
              bottom: isSubmerged
                ? floats
                  ? `${70 - submergedFraction * 25}%`
                  : '5%'
                : '75%',
            }}
          >
            <span className="text-white text-xs font-bold">{objectDensity.toFixed(1)}</span>
          </div>

          {/* Labels */}
          <div className="absolute top-2 left-2 text-xs text-dark-400">Air</div>
          <div className="absolute bottom-2 left-2 text-xs text-blue-400">Water (ρ=1.0)</div>
        </div>

        <div className="flex-1 space-y-4">
          {/* Density control */}
          <div>
            <label className="text-sm text-dark-400 block mb-2">
              Object density: <span className="text-primary-400">{objectDensity.toFixed(2)}</span>
              {' '}<span className="text-dark-500">(water = 1.0)</span>
            </label>
            <input
              type="range"
              min={0.3}
              max={2.0}
              step={0.1}
              value={objectDensity}
              onChange={(e) => setObjectDensity(parseFloat(e.target.value))}
              className="w-full accent-primary-500"
            />
          </div>

          {/* Material presets */}
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Cork', density: 0.24 },
              { name: 'Wood', density: 0.6 },
              { name: 'Ice', density: 0.92 },
              { name: 'Gold', density: 19.3 },
            ].map(mat => (
              <button
                key={mat.name}
                onClick={() => setObjectDensity(Math.min(2, mat.density))}
                className="px-3 py-1 bg-dark-700 text-dark-300 rounded text-sm hover:bg-dark-600"
              >
                {mat.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsSubmerged(!isSubmerged)}
            className="btn-primary"
          >
            {isSubmerged ? 'Lift Out' : 'Drop In Water'}
          </button>

          {/* Physics */}
          {isSubmerged && (
            <div className="bg-dark-800 p-4 rounded-lg space-y-2 text-sm">
              <p>
                <span className="text-dark-400">Submerged:</span>{' '}
                <span className="text-primary-400">{(submergedFraction * 100).toFixed(0)}%</span>
              </p>
              <p>
                <span className="text-dark-400">Result:</span>{' '}
                <span className={floats ? 'text-emerald-400' : 'text-red-400'}>
                  {floats ? 'FLOATS' : 'SINKS'}
                </span>
              </p>
              <p className="text-dark-500 text-xs mt-2">
                An object floats when its density is less than the fluid's density.
                The buoyant force equals the weight of displaced fluid.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* The crown story */}
      <div className="mt-4 p-4 bg-dark-900 rounded-lg">
        <h5 className="font-semibold text-amber-400 mb-2">The Golden Crown</h5>
        <p className="text-sm text-dark-300">
          Legend says King Hiero asked Archimedes to determine if his crown was pure gold
          without damaging it. While bathing, Archimedes realized that a submerged object
          displaces water equal to its volume. By comparing the crown's displacement to
          that of pure gold of equal weight, he could detect fraud. He supposedly ran
          through Syracuse naked, shouting "Eureka!" (I have found it!)
        </p>
      </div>
    </div>
  );
}

// Quadrature of the Parabola
function ParabolaQuadrature() {
  const [iterations, setIterations] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Draw parabola y = x²
    const scale = 80;
    const offsetX = width / 2;
    const offsetY = height - 40;

    ctx.beginPath();
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;
    for (let x = -1.5; x <= 1.5; x += 0.02) {
      const px = offsetX + x * scale;
      const py = offsetY - x * x * scale;
      if (x === -1.5) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Draw chord (secant line from -1 to 1)
    ctx.beginPath();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.moveTo(offsetX - scale, offsetY - scale);
    ctx.lineTo(offsetX + scale, offsetY - scale);
    ctx.stroke();

    // Fill triangles based on iterations
    const fillTriangle = (x1: number, x2: number, depth: number, maxDepth: number) => {
      if (depth > maxDepth) return;

      const midX = (x1 + x2) / 2;
      const y1 = x1 * x1;
      const y2 = x2 * x2;
      const yMid = midX * midX;

      // Triangle vertices
      const p1 = { x: offsetX + x1 * scale, y: offsetY - y1 * scale };
      const p2 = { x: offsetX + x2 * scale, y: offsetY - y2 * scale };
      const pMid = { x: offsetX + midX * scale, y: offsetY - yMid * scale };

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(pMid.x, pMid.y);
      ctx.closePath();

      const alpha = 0.3 - depth * 0.05;
      ctx.fillStyle = `rgba(16, 185, 129, ${Math.max(0.1, alpha)})`;
      ctx.fill();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Recurse
      fillTriangle(x1, midX, depth + 1, maxDepth);
      fillTriangle(midX, x2, depth + 1, maxDepth);
    };

    if (iterations > 0) {
      fillTriangle(-1, 1, 1, iterations);
    }
  }, [iterations]);

  const area = iterations > 0 ? (4/3) * (1 - Math.pow(0.25, iterations)) : 0;
  const exactArea = 4/3;

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Quadrature of the Parabola</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={300}
            height={250}
            className="bg-dark-900 rounded-lg"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="text-sm text-dark-400 block mb-2">
              Iterations: <span className="text-primary-400 font-bold">{iterations}</span>
            </label>
            <input
              type="range"
              min={0}
              max={6}
              value={iterations}
              onChange={(e) => setIterations(parseInt(e.target.value))}
              className="w-full accent-primary-500"
            />
          </div>

          <div className="bg-dark-800 p-4 rounded-lg space-y-2">
            <p className="text-sm">
              <span className="text-dark-400">Triangles area:</span>{' '}
              <span className="font-mono text-emerald-400">{area.toFixed(6)}</span>
            </p>
            <p className="text-sm">
              <span className="text-dark-400">Exact area:</span>{' '}
              <span className="font-mono text-primary-400">{exactArea.toFixed(6)}</span>
            </p>
            <p className="text-sm">
              <span className="text-dark-400">Accuracy:</span>{' '}
              <span className="font-mono text-amber-400">{((area / exactArea) * 100).toFixed(2)}%</span>
            </p>
          </div>

          <div className="text-sm text-dark-400">
            <p>Archimedes proved:</p>
            <MathBlock>
              {`\\text{Area} = \\frac{4}{3} \\times \\text{(inscribed triangle)}`}
            </MathBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sand Reckoner - Large Numbers
function SandReckoner() {
  const archimedesSystem = [
    { name: 'First order', max: '10⁸ (myriad myriads)', value: 1e8 },
    { name: 'Second order', max: '10¹⁶', value: 1e16 },
    { name: 'First period', max: '10⁸×¹⁰⁸ = 10^(8×10⁸)', value: '10^800000000' },
    { name: 'Grains to fill universe', max: '10⁶³', value: 1e63 },
  ];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Sand Reckoner</h4>

      <p className="text-sm text-dark-300 mb-4">
        Archimedes invented a number system to express quantities far beyond Greek
        numerals—up to 10^(8×10¹⁶). He estimated the number of grains of sand
        that could fill the entire universe.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {archimedesSystem.map((level, i) => (
          <div key={i} className="bg-dark-800 p-3 rounded-lg">
            <p className="text-xs text-dark-400">{level.name}</p>
            <p className="text-lg font-mono text-primary-400">{level.max}</p>
          </div>
        ))}
      </div>

      <div className="bg-dark-900 p-4 rounded-lg">
        <p className="text-sm text-dark-300 mb-2">
          <strong>Archimedes's estimate:</strong> The universe (as Greeks conceived it)
          could contain no more than 10⁶³ grains of sand.
        </p>
        <p className="text-sm text-dark-400">
          Modern estimate of atoms in observable universe: ~10⁸⁰
        </p>
        <p className="text-sm text-emerald-400 mt-2">
          Archimedes was remarkably close, given he had no telescopes!
        </p>
      </div>
    </div>
  );
}

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        If mathematics has a hero, it is Archimedes of Syracuse. Mathematician, physicist,
        engineer, inventor, and astronomer—he stands as the greatest scientist of antiquity
        and one of the greatest of all time. His methods anticipated integral calculus by
        nearly two thousand years.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Give me a place to stand, and I will move the Earth."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Archimedes, on the lever
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Man and His Times</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Archimedes (c. 287–212 BC) was born in Syracuse, a Greek colony in Sicily.
            His father Phidias was an astronomer, and Archimedes may have been related
            to King Hiero II, the ruler of Syracuse. He studied in Alexandria, the
            intellectual capital of the ancient world, before returning to Syracuse.
          </p>
          <p className="mb-4">
            Unlike most ancient mathematicians, Archimedes was deeply interested in
            practical applications. He invented war machines that held off the Roman
            siege of Syracuse for two years, including catapults and the legendary
            "Archimedes claw" that could lift ships from the water.
          </p>
          <p>
            Yet he considered his theoretical work far more important than his inventions.
            He asked that his tombstone bear only a diagram of a sphere inscribed in a
            cylinder—his proof that their volumes are in the ratio 2:3.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> c. 287 BC, Syracuse</li>
            <li><strong>Died:</strong> 212 BC (killed by Roman soldier)</li>
            <li><strong>Education:</strong> Alexandria</li>
            <li><strong>Patron:</strong> King Hiero II</li>
            <li><strong>Legacy:</strong> Father of mathematical physics</li>
          </ul>
        </Card>
      </div>

      <Callout type="warning">
        <p>
          <strong>His Death:</strong> When Rome finally conquered Syracuse in 212 BC,
          a soldier found Archimedes drawing geometric figures in the sand. According
          to legend, Archimedes said "Do not disturb my circles" (<em>Noli turbare
          circulos meos</em>). The soldier, enraged, killed him—against the orders
          of the Roman general Marcellus, who had wanted to meet the famous mathematician.
        </p>
      </Callout>

      {/* Major Works */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Mathematical Achievements</h2>

      <p className="mb-6">
        Archimedes's surviving works reveal a mathematician of extraordinary power
        and originality. He extended Eudoxus's method of exhaustion to calculate
        areas and volumes that had defeated all previous attempts.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">On the Sphere and Cylinder</h4>
          <p className="text-sm text-dark-300">
            His favorite work. Proved sphere volume = (2/3) × circumscribed cylinder.
            Asked for this diagram on his tombstone.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Measurement of a Circle</h4>
          <p className="text-sm text-dark-300">
            Calculated π to remarkable precision using 96-sided polygons:
            3 + 10/71 {"<"} π {"<"} 3 + 1/7
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Quadrature of the Parabola</h4>
          <p className="text-sm text-dark-300">
            First exact calculation of area bounded by a curve.
            Area = (4/3) × inscribed triangle.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">On Floating Bodies</h4>
          <p className="text-sm text-dark-300">
            Founded hydrostatics. Archimedes's principle: buoyant force =
            weight of displaced fluid.
          </p>
        </Card>
      </CardGrid>

      {/* Pi Calculation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Calculating π</h2>

      <p className="mb-4">
        Archimedes used inscribed and circumscribed polygons to trap π between
        ever-tighter bounds. Starting with hexagons and doubling the sides repeatedly,
        he reached 96-sided polygons and proved:
      </p>

      <MathBlock>
        {`3\\frac{10}{71} < \\pi < 3\\frac{1}{7}`}
      </MathBlock>

      <p className="my-4">
        This gives π ≈ 3.14159... correct to two decimal places. Remarkably,
        Archimedes did this without decimal notation or trigonometry—using only
        geometric reasoning and clever approximations for square roots.
      </p>

      <PiCalculation />

      {/* The Lever */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Law of the Lever</h2>

      <p className="mb-4">
        In <em>On the Equilibrium of Planes</em>, Archimedes proved the law of the lever
        from purely geometric postulates—the first rigorous treatment of statics.
        Two weights balance when their distances from the fulcrum are inversely
        proportional to their weights.
      </p>

      <LeverPrinciple />

      <Callout type="info">
        <p>
          <strong>Moving the Earth:</strong> Archimedes's famous boast wasn't idle.
          With a long enough lever and a place to stand, the mechanical advantage
          could indeed move any weight—though moving Earth would require a lever
          of astronomical length!
        </p>
      </Callout>

      {/* Eureka */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Eureka! Buoyancy and the Crown</h2>

      <BuoyancyDemo />

      {/* Quadrature */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Quadrature of the Parabola</h2>

      <p className="mb-4">
        In one of his most brilliant works, Archimedes proved that the area of a
        parabolic segment equals 4/3 times the area of an inscribed triangle.
        He gave two proofs—one using the method of exhaustion, another using
        mechanical principles (weighing areas on a balance).
      </p>

      <ParabolaQuadrature />

      <Callout type="success">
        <p>
          <strong>The Method:</strong> In 1906, a lost manuscript was discovered—the
          Archimedes Palimpsest—revealing his "Method of Mechanical Theorems."
          Archimedes used the lever to "weigh" geometric figures, discovering results
          that he later proved rigorously. This heuristic approach anticipated
          integral calculus by nearly 2000 years!
        </p>
      </Callout>

      {/* Sand Reckoner */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Sand Reckoner</h2>

      <p className="mb-4">
        In this remarkable work, Archimedes invented a system for expressing
        astronomically large numbers—something the cumbersome Greek numerals
        couldn't handle. He asked: how many grains of sand would fill the universe?
      </p>

      <SandReckoner />

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell devotes considerable space to Archimedes, presenting him as the
        prototype of the mathematical physicist. Bell emphasizes that Archimedes
        combined pure mathematics with physical intuition in a way that wouldn't
        be matched until Newton:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Archimedes will be remembered when Aeschylus is forgotten, because languages
        die and mathematical ideas do not. 'Immortality' may be a silly word, but
        probably a mathematician has the best chance of whatever it may mean."
      </blockquote>

      <p className="my-4">
        Bell notes the tragedy of Archimedes's death and the long delay before
        his methods were fully appreciated. The Romans who killed him had no
        interest in his mathematics—and for centuries, his deepest ideas lay dormant
        until the Scientific Revolution.
      </p>

      <Callout type="info">
        <p>
          <strong>The Palimpsest:</strong> In 1906, Johan Heiberg discovered a
          prayer book in Constantinople that had been scraped and overwritten—but
          still showed traces of Archimedes's <em>Method</em>. This lost work revealed
          how Archimedes actually discovered his results, using infinitesimal slices
          and mechanical analogies—techniques astonishingly close to integral calculus.
        </p>
      </Callout>

      {/* Inventions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Inventions and Engineering</h2>

      <p className="mb-4">
        Though Archimedes valued theory over practice, his inventions were legendary:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">The Archimedes Screw</h4>
          <p className="text-sm text-dark-300">
            A helical pump for raising water, still used today in irrigation
            and wastewater treatment.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">War Machines</h4>
          <p className="text-sm text-dark-300">
            Catapults, cranes ("Archimedes claw"), and possibly mirrors to focus
            sunlight on Roman ships.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">The Planetarium</h4>
          <p className="text-sm text-dark-300">
            A mechanical model of the heavens showing the motions of Sun, Moon,
            and planets. Lost, but described by Cicero.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Compound Pulleys</h4>
          <p className="text-sm text-dark-300">
            Demonstrated by single-handedly moving a fully-loaded ship,
            to the amazement of King Hiero.
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Archimedes (c. 287–212 BC) was the greatest mathematician and scientist
              of antiquity, combining theoretical depth with practical invention.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              He calculated π to remarkable precision (3.1408... {"<"} π {"<"} 3.1429...)
              using 96-sided polygons, nearly two millennia before decimal notation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              His method of exhaustion and mechanical method anticipated integral
              calculus—the Palimpsest reveals he used infinitesimal reasoning.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              He founded statics (law of the lever) and hydrostatics (principle of
              buoyancy), making him the father of mathematical physics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              His dying words—"Do not disturb my circles"—symbolize the mathematician's
              devotion to abstract truth, even unto death.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
