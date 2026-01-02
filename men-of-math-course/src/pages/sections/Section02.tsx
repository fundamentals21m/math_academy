import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, InlineMath } from '../../components/common/MathBlock';

// Method of Exhaustion - Circle Area Visualization
function MethodOfExhaustion() {
  const [sides, setSides] = useState(4);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const maxSides = 128;
  const radius = 120;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Clear canvas
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Fill circle area for reference
    ctx.fillStyle = 'rgba(99, 102, 241, 0.1)';
    ctx.fill();

    // Draw inscribed polygon
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(16, 185, 129, 0.3)';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw vertices
    for (let i = 0; i < sides; i++) {
      const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#10b981';
      ctx.fill();
    }
  }, [sides]);

  // Calculate polygon area
  const polygonArea = (sides * radius * radius * Math.sin((2 * Math.PI) / sides)) / 2;
  const circleArea = Math.PI * radius * radius;
  const accuracy = (polygonArea / circleArea) * 100;
  const error = circleArea - polygonArea;

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Method of Exhaustion</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={280}
            height={280}
            className="bg-dark-900 rounded-lg"
          />
        </div>

        <div className="flex-1 space-y-4">
          {/* Slider control */}
          <div>
            <label className="text-sm text-dark-400 block mb-2">
              Number of sides: <span className="text-primary-400 font-bold">{sides}</span>
            </label>
            <input
              type="range"
              min={3}
              max={maxSides}
              value={sides}
              onChange={(e) => setSides(parseInt(e.target.value))}
              className="w-full accent-primary-500"
            />
            <div className="flex justify-between text-xs text-dark-500">
              <span>Triangle</span>
              <span>Circle limit</span>
            </div>
          </div>

          {/* Quick buttons */}
          <div className="flex flex-wrap gap-2">
            {[3, 4, 6, 8, 12, 24, 48, 96].map(n => (
              <button
                key={n}
                onClick={() => setSides(n)}
                className={`px-3 py-1 rounded text-sm ${
                  sides === n ? 'bg-primary-600 text-white' : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-dark-800 p-3 rounded-lg">
              <p className="text-xs text-dark-400">Polygon Area</p>
              <p className="text-lg font-mono text-emerald-400">{polygonArea.toFixed(2)}</p>
            </div>
            <div className="bg-dark-800 p-3 rounded-lg">
              <p className="text-xs text-dark-400">Circle Area</p>
              <p className="text-lg font-mono text-primary-400">{circleArea.toFixed(2)}</p>
            </div>
            <div className="bg-dark-800 p-3 rounded-lg">
              <p className="text-xs text-dark-400">Accuracy</p>
              <p className="text-lg font-mono text-amber-400">{accuracy.toFixed(4)}%</p>
            </div>
            <div className="bg-dark-800 p-3 rounded-lg">
              <p className="text-xs text-dark-400">Error</p>
              <p className="text-lg font-mono text-red-400">{error.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-dark-800 rounded-lg text-sm">
        <p className="text-dark-300">
          <strong>The Key Insight:</strong> As the number of sides increases, the polygon
          "exhausts" more and more of the circle's area. The error can be made smaller than
          any given quantity—the essence of the limit concept, 2000 years before calculus!
        </p>
        {sides >= 96 && (
          <p className="text-emerald-400 mt-2">
            With {sides} sides, the polygon captures {accuracy.toFixed(6)}% of the circle's area.
            Archimedes used 96-sided polygons to calculate π to remarkable precision!
          </p>
        )}
      </div>
    </div>
  );
}

// Theory of Proportions Visualization
function TheoryOfProportions() {
  const [selectedRatio, setSelectedRatio] = useState<'rational' | 'sqrt2' | 'golden'>('rational');

  const ratios = {
    rational: { a: 3, b: 4, name: '3:4', decimal: 0.75, description: 'Commensurable (rational)' },
    sqrt2: { a: 1, b: Math.SQRT2, name: '1:√2', decimal: Math.SQRT2, description: 'Incommensurable (irrational)' },
    golden: { a: 1, b: (1 + Math.sqrt(5)) / 2, name: '1:φ', decimal: (1 + Math.sqrt(5)) / 2, description: 'Golden ratio (irrational)' },
  };

  const current = ratios[selectedRatio];
  const scale = 80;

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Theory of Proportions</h4>

      {/* Ratio selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(ratios).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setSelectedRatio(key as 'rational' | 'sqrt2' | 'golden')}
            className={`px-4 py-2 rounded text-sm ${
              selectedRatio === key
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {value.name}
          </button>
        ))}
      </div>

      {/* Visual representation */}
      <div className="bg-dark-800 p-6 rounded-lg mb-4">
        <div className="flex items-end gap-4 mb-4">
          <div
            className="bg-blue-500 rounded"
            style={{ width: current.a * scale, height: 40 }}
          >
            <span className="text-xs text-white p-1">a</span>
          </div>
          <div
            className="bg-emerald-500 rounded"
            style={{ width: current.b * scale, height: 40 }}
          >
            <span className="text-xs text-white p-1">b</span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-dark-300">
            Ratio <span className="text-primary-400">{current.name}</span> = {current.decimal.toFixed(10)}...
          </p>
          <p className={selectedRatio === 'rational' ? 'text-emerald-400' : 'text-amber-400'}>
            {current.description}
          </p>
        </div>
      </div>

      {/* The problem Eudoxus solved */}
      <div className="bg-dark-900 p-4 rounded-lg">
        <h5 className="font-semibold text-primary-400 mb-2">The Crisis of Incommensurables</h5>
        <p className="text-sm text-dark-300 mb-3">
          The Pythagoreans believed all ratios could be expressed as ratios of whole numbers.
          The discovery that √2 is irrational shattered this belief. How can we compare
          quantities that have no common measure?
        </p>
        <p className="text-sm text-dark-400">
          <strong>Eudoxus's Solution:</strong> Two ratios a:b and c:d are equal if, for ALL
          positive integers m and n:
        </p>
        <MathBlock>
          {`\\text{If } ma \\lessgtr nb \\text{ then } mc \\lessgtr nd`}
        </MathBlock>
        <p className="text-sm text-dark-400 mt-2">
          This definition works for both rational and irrational ratios—it's essentially
          the same as Dedekind's definition of real numbers, developed 2200 years later!
        </p>
      </div>
    </div>
  );
}

// Astronomical Model Visualization
function AstronomicalModel() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationId: number;

    if (isRunning) {
      const animate = () => {
        setTime(t => t + 0.02);
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isRunning]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Clear
    ctx.fillStyle = '#0f0f1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Earth at center
    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Earth', centerX, centerY + 30);

    // Draw concentric spheres (simplified model)
    const spheres = [
      { radius: 50, speed: 1, color: '#94a3b8', name: 'Moon' },
      { radius: 80, speed: 0.4, color: '#fcd34d', name: 'Sun' },
      { radius: 110, speed: 0.15, color: '#f87171', name: 'Mars' },
      { radius: 140, speed: 0.08, color: '#fb923c', name: 'Jupiter' },
    ];

    spheres.forEach(sphere => {
      // Draw orbit
      ctx.beginPath();
      ctx.arc(centerX, centerY, sphere.radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.stroke();

      // Draw body
      const angle = time * sphere.speed;
      const x = centerX + sphere.radius * Math.cos(angle);
      const y = centerY + sphere.radius * Math.sin(angle);

      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fillStyle = sphere.color;
      ctx.fill();
    });

    // Stars
    for (let i = 0; i < 50; i++) {
      const x = (Math.sin(i * 123.456) * 0.5 + 0.5) * canvas.width;
      const y = (Math.cos(i * 78.9) * 0.5 + 0.5) * canvas.height;
      const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
      if (dist > 150) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fill();
      }
    }
  }, [time]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Eudoxus's Astronomical Model</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={320}
            height={320}
            className="bg-dark-900 rounded-lg"
          />
        </div>

        <div className="flex-1">
          <p className="text-sm text-dark-300 mb-4">
            Eudoxus proposed that celestial bodies move on nested, rotating spheres
            centered on Earth. By combining multiple spheres with different axes and
            speeds, he could approximate the complex motions of planets—including
            apparent retrograde motion.
          </p>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="btn-primary mb-4"
          >
            {isRunning ? 'Pause' : 'Animate'}
          </button>

          <div className="bg-dark-800 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-400 mb-2">Historical Note</h5>
            <p className="text-sm text-dark-400">
              Eudoxus used 27 spheres to model the heavens. Though geocentric and ultimately
              wrong, this was the first mathematical model of planetary motion—a triumph
              of applied mathematics that influenced astronomy for nearly 2000 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Archytas Doubling the Cube Connection
function DoublingTheCube() {
  const [cubeScale, setCubeScale] = useState(1);

  const neededScale = Math.pow(2, 1/3); // ∛2 ≈ 1.26
  const currentVolume = Math.pow(cubeScale, 3);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Delian Problem: Doubling the Cube</h4>

      <p className="text-sm text-dark-300 mb-4">
        Legend says the oracle at Delos demanded a cubic altar be doubled in volume
        to end a plague. The Greeks sought to find the side length of a cube with
        twice the volume—requiring the construction of ∛2.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Visual */}
        <div className="flex gap-4 items-end">
          <div className="text-center">
            <div
              className="bg-blue-500/30 border-2 border-blue-500"
              style={{ width: 60, height: 60 }}
            />
            <p className="text-xs text-dark-400 mt-1">Original (V=1)</p>
          </div>
          <div className="text-2xl text-dark-500">→</div>
          <div className="text-center">
            <div
              className="bg-emerald-500/30 border-2 border-emerald-500 transition-all duration-300"
              style={{
                width: 60 * cubeScale,
                height: 60 * cubeScale,
              }}
            />
            <p className="text-xs text-dark-400 mt-1">Scaled (V={currentVolume.toFixed(3)})</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex-1">
          <label className="text-sm text-dark-400 block mb-2">
            Scale factor: <span className="text-primary-400">{cubeScale.toFixed(3)}</span>
          </label>
          <input
            type="range"
            min={1}
            max={1.5}
            step={0.001}
            value={cubeScale}
            onChange={(e) => setCubeScale(parseFloat(e.target.value))}
            className="w-full accent-primary-500"
          />

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setCubeScale(neededScale)}
              className="btn-secondary text-sm"
            >
              Set to ∛2
            </button>
            <button
              onClick={() => setCubeScale(1)}
              className="btn-secondary text-sm"
            >
              Reset
            </button>
          </div>

          <div className="mt-4 p-3 bg-dark-800 rounded-lg">
            <p className="text-sm">
              Target volume: <span className="text-amber-400">2</span>
            </p>
            <p className="text-sm">
              Current volume: <span className={Math.abs(currentVolume - 2) < 0.001 ? 'text-emerald-400' : 'text-dark-300'}>
                {currentVolume.toFixed(6)}
              </span>
            </p>
            <p className="text-sm">
              Required scale: <span className="text-primary-400">∛2 ≈ {neededScale.toFixed(6)}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-900 rounded-lg text-sm text-dark-400">
        <strong className="text-primary-400">Eudoxus's Contribution:</strong> While the problem
        cannot be solved with compass and straightedge alone, Eudoxus found a solution using
        curves (the "kampyle of Eudoxus"). This showed that Greek mathematics could transcend
        the limitations of ruler-and-compass constructions.
      </div>
    </div>
  );
}

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        While Zeno posed paradoxes about infinity, his near-contemporary Eudoxus of Cnidus
        built the mathematical machinery to tame it. His method of exhaustion and theory
        of proportions laid foundations that would support mathematics for two millennia—and
        anticipate ideas not fully developed until the 19th century.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Eudoxus... surpassed all the mathematicians of his time in the number and
        importance of his discoveries."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Proclus (5th century AD)
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Man and His Times</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Eudoxus of Cnidus (c. 408–355 BC) was born in a Greek city on the coast of
            Asia Minor. Despite his family's poverty, he traveled to Athens at age 23
            to study at Plato's Academy. Too poor to live in the city, he walked daily
            from the port of Piraeus—a round trip of several miles.
          </p>
          <p className="mb-4">
            He later studied astronomy in Egypt, founded his own school at Cyzicus,
            and eventually returned to the Academy as a distinguished colleague of Plato.
            Ancient sources credit him with contributions to geometry, astronomy,
            geography, medicine, and philosophy.
          </p>
          <p>
            Sadly, none of Eudoxus's writings survive. We know his work only through
            references by Euclid, Aristotle, Archimedes, and later commentators.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> c. 408 BC, Cnidus</li>
            <li><strong>Died:</strong> c. 355 BC</li>
            <li><strong>School:</strong> Platonic Academy</li>
            <li><strong>Teacher:</strong> Plato, Archytas</li>
            <li><strong>Legacy:</strong> Exhaustion, proportions</li>
          </ul>
        </Card>
      </div>

      <Callout type="info">
        <p>
          <strong>The Academy Connection:</strong> Eudoxus studied under both Plato and
          the Pythagorean mathematician Archytas. This dual influence—Platonic philosophy
          and Pythagorean mathematics—shaped his rigorous approach to mathematical proof.
        </p>
      </Callout>

      {/* The Crisis */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Crisis of Incommensurables</h2>

      <p className="mb-4">
        Before Eudoxus, Greek mathematics faced a profound crisis. The Pythagoreans had
        discovered that the diagonal of a square is <em>incommensurable</em> with its
        side—there is no unit, however small, that measures both exactly. In modern terms,
        √2 is irrational.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Problem:</strong> Greek geometry relied on ratios and proportions.
          But how can you reason about ratios like 1:√2 if you can't express them as
          ratios of whole numbers? The entire foundation of geometric proof seemed to crumble.
        </p>
      </Callout>

      <p className="my-4">
        Eudoxus's response was revolutionary: he developed a theory of proportions that
        works for ALL magnitudes, whether commensurable or not. This theory, preserved
        in Book V of Euclid's Elements, is one of the greatest achievements of Greek mathematics.
      </p>

      <TheoryOfProportions />

      {/* Method of Exhaustion */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Method of Exhaustion</h2>

      <p className="mb-4">
        Eudoxus's second great contribution was the <strong>method of exhaustion</strong>—a
        rigorous technique for calculating areas and volumes of curved figures. The idea:
        approximate a curved region with polygons of increasing precision, then prove that
        the error can be made smaller than any assigned quantity.
      </p>

      <Callout type="success">
        <p>
          <strong>The Key Principle:</strong> If we can show that a quantity differs from
          our target by less than any given amount, then it must equal the target exactly.
          This is the essence of limits—stated without the formal machinery of calculus.
        </p>
      </Callout>

      <MethodOfExhaustion />

      <p className="my-4">
        Using this method, Eudoxus proved that:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-200">
        <li>The area of a circle is proportional to the square of its diameter</li>
        <li>The volume of a cone is one-third that of a cylinder with the same base and height</li>
        <li>The volume of a pyramid is one-third that of a prism with the same base and height</li>
        <li>Spheres are to one another as the cubes of their diameters</li>
      </ul>

      <Callout type="info">
        <p>
          <strong>Archimedes's Tribute:</strong> Archimedes credited Eudoxus with discovering
          the theorems about cones and pyramids, calling them "by no means easy to discover."
          Archimedes himself would extend the method of exhaustion to calculate π and prove
          many results about curved surfaces.
        </p>
      </Callout>

      {/* Mathematical Details */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Mathematical Machinery</h2>

      <p className="mb-4">
        The method of exhaustion relies on a principle now called the <strong>Archimedean
        axiom</strong> (though Archimedes attributed it to Eudoxus):
      </p>

      <MathBlock>
        {`\\text{Given any two magnitudes } a \\text{ and } b, \\text{ there exists } n \\in \\mathbb{N} \\text{ such that } na > b`}
      </MathBlock>

      <p className="my-4">
        In other words, no matter how small <InlineMath>a</InlineMath> is compared to{' '}
        <InlineMath>b</InlineMath>, you can always add enough copies of{' '}
        <InlineMath>a</InlineMath> to exceed <InlineMath>b</InlineMath>. This rules
        out infinitesimals—quantities smaller than any fraction of a given magnitude.
      </p>

      <div className="bg-dark-800 p-6 rounded-lg my-6">
        <h4 className="font-semibold text-primary-400 mb-3">Proof Strategy (Area of Circle)</h4>
        <ol className="list-decimal list-inside space-y-2 text-sm text-dark-300">
          <li>Inscribe a regular polygon in the circle</li>
          <li>Show the polygon's area is less than the circle's area</li>
          <li>Double the number of sides; the new polygon captures more area</li>
          <li>Prove the gap between polygon and circle can be halved at each step</li>
          <li>By the Archimedean axiom, the gap can be made less than any ε {">"} 0</li>
          <li>Conclude: Circle area = limit of polygon areas = πr²</li>
        </ol>
      </div>

      {/* Astronomy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Astronomy: The Heavenly Spheres</h2>

      <p className="mb-4">
        Eudoxus was also a pioneering astronomer. He proposed the first mathematical model
        of the cosmos: a system of concentric rotating spheres that could account for the
        observed motions of the Sun, Moon, and planets.
      </p>

      <AstronomicalModel />

      {/* The Delian Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Three Classical Problems</h2>

      <p className="mb-4">
        Eudoxus engaged with the famous "three problems of antiquity" that challenged
        Greek geometers: doubling the cube, trisecting an angle, and squaring the circle.
        These problems ask what can be constructed using only compass and straightedge.
      </p>

      <DoublingTheCube />

      {/* Bell's Take */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell places Eudoxus alongside Archimedes as one of the greatest mathematicians
        of antiquity. He emphasizes that Eudoxus's theory of proportions essentially solved
        the problem of irrational numbers—a solution so good that it wasn't improved upon
        until Dedekind in 1872:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "The definition of equal ratios given by Eudoxus is the same as that used by
        Weierstrass and Dedekind... in their arithmetization of analysis. Eudoxus
        anticipated modern mathematics by over two thousand years."
      </blockquote>

      <p className="my-4">
        Bell notes that Eudoxus's work represents a turning point: mathematics moved from
        intuitive arguments to rigorous proof. The method of exhaustion avoided the logical
        pitfalls that trapped Zeno, providing a template for careful reasoning about infinity
        that would serve mathematics until—and inform—the development of calculus.
      </p>

      {/* Comparison Table */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Eudoxus and Modern Mathematics</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Theory of Proportions</h4>
          <p className="text-sm text-dark-300 mb-2">Eudoxus (c. 370 BC)</p>
          <p className="text-sm text-dark-400">
            Anticipated by 2200+ years: Dedekind cuts (1872), the rigorous definition
            of real numbers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Method of Exhaustion</h4>
          <p className="text-sm text-dark-300 mb-2">Eudoxus (c. 370 BC)</p>
          <p className="text-sm text-dark-400">
            Anticipated by 2000+ years: Limits (Cauchy, 1820s), the ε-δ definition
            of calculus.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Archimedean Axiom</h4>
          <p className="text-sm text-dark-300 mb-2">Eudoxus (c. 370 BC)</p>
          <p className="text-sm text-dark-400">
            Foundation for: Real number completeness, ruling out infinitesimals
            in standard analysis.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Mathematical Astronomy</h4>
          <p className="text-sm text-dark-300 mb-2">Eudoxus (c. 370 BC)</p>
          <p className="text-sm text-dark-400">
            First mathematical model of cosmos; influenced Aristotle, Ptolemy,
            and astronomy for 2000 years.
          </p>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Eudoxus of Cnidus (c. 408–355 BC) resolved the crisis of incommensurables
              with his theory of proportions, which works for both rational and irrational ratios.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              His method of exhaustion provided a rigorous way to calculate areas and volumes
              of curved figures—the essence of integration, 2000 years before calculus.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The Archimedean axiom (attributed to Eudoxus) rules out infinitesimals and
              forms a foundation for the modern real number system.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              Eudoxus's astronomical model of concentric spheres was the first mathematical
              theory of planetary motion, influencing astronomy until Copernicus.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
