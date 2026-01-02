import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, InlineMath } from '../../components/common/MathBlock';

// Achilles and Tortoise Race Visualization
function AchillesTortoiseRace() {
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState(0);
  const [showMath, setShowMath] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Positions: Achilles starts at 0, Tortoise at 100 (meters)
  // Achilles runs 10 m/s, Tortoise runs 1 m/s
  const achillesSpeed = 10;
  const tortoiseSpeed = 1;
  const tortoiseHeadStart = 100;

  // Calculate positions at each "Zeno step"
  const getZenoPositions = (n: number) => {
    // At step n, Achilles reaches where the tortoise WAS
    // Tortoise head start * (tortoiseSpeed/achillesSpeed)^n converges
    let achillesPos = 0;
    let tortoisePos = tortoiseHeadStart;

    for (let i = 0; i < n; i++) {
      const gap = tortoisePos - achillesPos;
      const timeToClose = gap / achillesSpeed;
      achillesPos = tortoisePos;
      tortoisePos += tortoiseSpeed * timeToClose;
    }

    return { achilles: achillesPos, tortoise: tortoisePos };
  };

  const positions = getZenoPositions(step);
  const maxPos = Math.max(positions.tortoise, 120);

  const runAnimation = () => {
    if (step < 10) {
      setStep(s => s + 1);
      animationRef.current = window.setTimeout(runAnimation, 800);
    } else {
      setIsRunning(false);
    }
  };

  const startRace = () => {
    setStep(0);
    setIsRunning(true);
    animationRef.current = window.setTimeout(runAnimation, 800);
  };

  const reset = () => {
    if (animationRef.current) clearTimeout(animationRef.current);
    setIsRunning(false);
    setStep(0);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  // Calculate the infinite series sum
  const seriesTerms = Array.from({ length: Math.min(step, 6) }, (_, i) => {
    const term = tortoiseHeadStart * Math.pow(0.1, i);
    return term.toFixed(i + 1);
  });

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Achilles and the Tortoise</h4>

      {/* Race track visualization */}
      <div className="relative h-24 bg-dark-800 rounded-lg mb-4 overflow-hidden">
        {/* Track */}
        <div className="absolute bottom-8 left-4 right-4 h-2 bg-dark-600 rounded" />

        {/* Distance markers */}
        {[0, 25, 50, 75, 100, 111.11].map(mark => (
          <div
            key={mark}
            className="absolute bottom-6 text-xs text-dark-500"
            style={{ left: `${4 + (mark / maxPos) * 88}%` }}
          >
            |
            <span className="absolute -left-2 top-3">{Math.round(mark)}m</span>
          </div>
        ))}

        {/* Achilles */}
        <div
          className="absolute bottom-10 transition-all duration-700 ease-out"
          style={{ left: `${4 + (positions.achilles / maxPos) * 88}%` }}
        >
          <div className="text-2xl">🏃</div>
          <div className="text-xs text-blue-400 whitespace-nowrap">Achilles</div>
        </div>

        {/* Tortoise */}
        <div
          className="absolute bottom-10 transition-all duration-700 ease-out"
          style={{ left: `${4 + (positions.tortoise / maxPos) * 88}%` }}
        >
          <div className="text-2xl">🐢</div>
          <div className="text-xs text-green-400 whitespace-nowrap">Tortoise</div>
        </div>

        {/* Finish line (where they meet) */}
        <div
          className="absolute bottom-6 top-2 w-0.5 bg-yellow-500/50"
          style={{ left: `${4 + (111.11 / maxPos) * 88}%` }}
        />
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={startRace}
          disabled={isRunning}
          className="btn-primary disabled:opacity-50"
        >
          {step === 0 ? 'Start Race' : 'Restart'}
        </button>
        <button onClick={reset} className="btn-secondary">
          Reset
        </button>
        <button
          onClick={() => setShowMath(!showMath)}
          className="btn-secondary ml-auto"
        >
          {showMath ? 'Hide Math' : 'Show Math'}
        </button>
      </div>

      {/* Status */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-800 p-3 rounded-lg">
          <p className="text-sm text-dark-400">Zeno Step</p>
          <p className="text-2xl font-bold text-primary-400">{step}</p>
        </div>
        <div className="bg-dark-800 p-3 rounded-lg">
          <p className="text-sm text-dark-400">Gap Remaining</p>
          <p className="text-2xl font-bold text-amber-400">
            {(positions.tortoise - positions.achilles).toFixed(4)}m
          </p>
        </div>
      </div>

      {/* Zeno's argument */}
      <div className="bg-dark-800 p-4 rounded-lg text-sm">
        <p className="text-dark-300 mb-2">
          <strong>Zeno's Argument:</strong> When Achilles reaches where the tortoise was,
          the tortoise has moved ahead. This repeats infinitely!
        </p>
        {step > 0 && (
          <div className="space-y-1 text-dark-400">
            <p>Step {step}: Achilles at {positions.achilles.toFixed(2)}m, Tortoise at {positions.tortoise.toFixed(2)}m</p>
            {step >= 10 && (
              <p className="text-green-400 mt-2">
                But wait... the gap is now just {(positions.tortoise - positions.achilles).toFixed(6)}m!
                Infinitely many steps, but finite total distance.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Mathematical explanation */}
      {showMath && (
        <div className="mt-4 p-4 bg-dark-900 rounded-lg">
          <p className="text-sm text-dark-300 mb-3">
            The total distance Achilles runs forms a geometric series:
          </p>
          <MathBlock>
            {`100 + 10 + 1 + 0.1 + 0.01 + \\cdots = \\sum_{n=0}^{\\infty} 100 \\cdot (0.1)^n = \\frac{100}{1-0.1} = 111.\\overline{1}\\text{ m}`}
          </MathBlock>
          <p className="text-sm text-dark-400 mt-3">
            The infinite series converges to a finite sum! Achilles catches the tortoise
            at exactly 111.111... meters.
          </p>
          {seriesTerms.length > 0 && (
            <p className="text-sm text-primary-400 mt-2">
              Partial sum: {seriesTerms.join(' + ')} + ... = {positions.achilles.toFixed(4)}m
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// Arrow Paradox Visualization
function ArrowParadox() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [showInstant, setShowInstant] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setTime(t => (t + 1) % 100);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const arrowX = 10 + (time / 100) * 80; // 10% to 90% of container

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Arrow Paradox</h4>

      {/* Arrow flight visualization */}
      <div className="relative h-32 bg-dark-800 rounded-lg mb-4 overflow-hidden">
        {/* Target */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl">🎯</div>

        {/* Arrow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 text-3xl transition-none"
          style={{ left: `${arrowX}%` }}
        >
          ➡️
        </div>

        {/* Time slices */}
        {showInstant && (
          <>
            {[20, 40, 60, 80].map(pos => (
              <div
                key={pos}
                className="absolute top-0 bottom-0 w-px bg-red-500/30"
                style={{ left: `${pos}%` }}
              />
            ))}
            <div
              className="absolute top-2 bottom-2 w-1 bg-red-500/70 rounded"
              style={{ left: `${arrowX}%` }}
            />
          </>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="btn-primary"
        >
          {isPaused ? 'Fly Arrow' : 'Pause'}
        </button>
        <button
          onClick={() => setShowInstant(!showInstant)}
          className={`btn-secondary ${showInstant ? 'ring-2 ring-red-500' : ''}`}
        >
          {showInstant ? 'Hide Instants' : 'Show Instants'}
        </button>
      </div>

      {/* Explanation */}
      <div className="bg-dark-800 p-4 rounded-lg">
        <p className="text-dark-300 text-sm mb-3">
          <strong>Zeno's Argument:</strong> At any single instant, the arrow occupies
          a space exactly equal to itself. It cannot move, because motion requires time.
          But time is made of instants. So when does the arrow move?
        </p>

        {showInstant && (
          <div className="mt-3 p-3 bg-dark-900 rounded">
            <p className="text-sm text-red-400">
              At this instant (t = {time}ms), the arrow is frozen at position {arrowX.toFixed(1)}%.
              In a durationless instant, there is no "before" or "after" — so no motion!
            </p>
          </div>
        )}

        <div className="mt-3 p-3 bg-dark-900 rounded">
          <p className="text-sm text-dark-400">
            <strong>Resolution:</strong> Motion is not about positions at instants,
            but about the <em>limit</em> of position as time intervals shrink to zero.
            Velocity is defined as a derivative: <InlineMath>{`v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t}`}</InlineMath>
          </p>
        </div>
      </div>
    </div>
  );
}

// Dichotomy Paradox Visualization
function DichotomyParadox() {
  const [steps, setSteps] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const maxSteps = 8;

  const runAnimation = () => {
    setSteps(0);
    setIsAnimating(true);
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setSteps(currentStep);
      if (currentStep >= maxSteps) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 600);
  };

  // Calculate distance covered
  const distanceCovered = Array.from({ length: steps }, (_, i) => Math.pow(0.5, i + 1))
    .reduce((a, b) => a + b, 0);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Dichotomy (The Racetrack)</h4>

      {/* Track visualization */}
      <div className="relative h-20 bg-dark-800 rounded-lg mb-4">
        {/* Start and end markers */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-dark-400">Start</div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-dark-400">Goal</div>

        {/* Track line */}
        <div className="absolute top-1/2 left-16 right-16 h-2 bg-dark-600 rounded -translate-y-1/2">
          {/* Distance markers */}
          {Array.from({ length: steps }, (_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-1 bg-primary-500 rounded transition-all duration-500"
              style={{
                left: `${(1 - Math.pow(0.5, i + 1)) * 100}%`,
              }}
            />
          ))}

          {/* Progress */}
          <div
            className="absolute left-0 top-0 bottom-0 bg-primary-600/50 rounded transition-all duration-500"
            style={{ width: `${distanceCovered * 100}%` }}
          />
        </div>

        {/* Runner */}
        <div
          className="absolute top-1/2 -translate-y-1/2 text-2xl transition-all duration-500"
          style={{ left: `calc(4rem + ${distanceCovered * (100 - 8)}% - 0.5rem)` }}
        >
          🏃
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={runAnimation}
          disabled={isAnimating}
          className="btn-primary disabled:opacity-50"
        >
          Run to Goal
        </button>
        <button onClick={() => setSteps(0)} className="btn-secondary">
          Reset
        </button>
      </div>

      {/* Status */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-dark-800 p-3 rounded-lg text-center">
          <p className="text-sm text-dark-400">Steps</p>
          <p className="text-xl font-bold text-primary-400">{steps}</p>
        </div>
        <div className="bg-dark-800 p-3 rounded-lg text-center">
          <p className="text-sm text-dark-400">Distance</p>
          <p className="text-xl font-bold text-amber-400">{(distanceCovered * 100).toFixed(2)}%</p>
        </div>
        <div className="bg-dark-800 p-3 rounded-lg text-center">
          <p className="text-sm text-dark-400">Remaining</p>
          <p className="text-xl font-bold text-red-400">{((1 - distanceCovered) * 100).toFixed(2)}%</p>
        </div>
      </div>

      {/* Series visualization */}
      <div className="bg-dark-800 p-4 rounded-lg">
        <p className="text-sm text-dark-300 mb-2">
          <strong>Zeno's Argument:</strong> To reach the goal, you must first reach the halfway point.
          But first you must reach the quarter point. But first the eighth point...
        </p>

        {steps > 0 && (
          <div className="font-mono text-sm text-primary-400 mt-2">
            {Array.from({ length: steps }, (_, i) => `1/${Math.pow(2, i + 1)}`).join(' + ')}
            {' = '}{distanceCovered.toFixed(6)}
          </div>
        )}

        <p className="text-sm text-dark-400 mt-3">
          Infinitely many steps, but: <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{1}{2^n} = 1`}</InlineMath>
        </p>
      </div>
    </div>
  );
}

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Twenty-five centuries ago, a Greek philosopher posed riddles that would haunt
        mathematics until the 19th century. Zeno of Elea's paradoxes seem like clever
        tricks, but they exposed deep problems about infinity, continuity, and the
        nature of motion itself.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Zeno's arguments, in some form, have afforded grounds for almost all
        theories of space, time, and infinity which have been constructed from
        his time to our own."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Bertrand Russell
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Man and His Times</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Zeno of Elea (c. 495–430 BC) was a student of <strong>Parmenides</strong>,
            who taught that reality is unchanging and indivisible—that all motion and
            change are illusions. Zeno devised his paradoxes not to deny motion, but to
            defend his teacher by showing that the <em>opposite</em> view (that space and
            time are infinitely divisible) leads to absurdities.
          </p>
          <p>
            According to Plato, Zeno visited Athens around 450 BC with Parmenides and
            met the young Socrates. His book reportedly contained 40 paradoxes, though
            only a handful survive through Aristotle's attempts to refute them.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> c. 495 BC, Elea (Italy)</li>
            <li><strong>Died:</strong> c. 430 BC</li>
            <li><strong>School:</strong> Eleatic</li>
            <li><strong>Teacher:</strong> Parmenides</li>
            <li><strong>Legacy:</strong> Paradoxes of motion</li>
          </ul>
        </Card>
      </div>

      <Callout type="info">
        <p>
          <strong>The Eleatic School:</strong> The philosophers of Elea (a Greek colony
          in southern Italy) argued that the universe is fundamentally <em>one</em>—unchanging,
          indivisible, and eternal. Change and plurality are illusions of the senses.
          Zeno's paradoxes were weapons in this philosophical battle.
        </p>
      </Callout>

      {/* The Paradoxes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Paradoxes of Motion</h2>

      <p className="mb-6">
        Zeno's most famous paradoxes attack the idea that motion is possible if space
        and time can be divided infinitely. Each approaches the problem from a different
        angle, yet all arrive at the same impossible conclusion: motion cannot exist.
      </p>

      {/* Achilles and the Tortoise */}
      <h3 className="text-xl font-semibold mt-8 mb-4">1. Achilles and the Tortoise</h3>

      <Callout type="info" title="The Paradox">
        <p>
          The swift Achilles races a tortoise that has a head start. Whenever Achilles
          reaches where the tortoise was, the tortoise has moved ahead. This process
          repeats infinitely—so Achilles can never catch the tortoise!
        </p>
      </Callout>

      <AchillesTortoiseRace />

      <p className="my-4">
        This paradox seems to prove that faster cannot overtake slower. Yet we know
        Achilles catches the tortoise. What went wrong?
      </p>

      <Callout type="success">
        <p>
          <strong>The Resolution:</strong> Zeno assumed that completing infinitely many
          tasks must take infinite time. But the time intervals form a convergent
          geometric series—infinitely many intervals that sum to a finite total.
          The mathematics of infinite series, fully developed in the 19th century,
          shows exactly where and when Achilles catches up.
        </p>
      </Callout>

      {/* The Dichotomy */}
      <h3 className="text-xl font-semibold mt-8 mb-4">2. The Dichotomy (The Racetrack)</h3>

      <Callout type="info" title="The Paradox">
        <p>
          To reach any destination, you must first travel half the distance. But before
          that, you must travel a quarter. Before that, an eighth. The sequence never
          ends—there is no first step to take! Motion cannot even <em>begin</em>.
        </p>
      </Callout>

      <DichotomyParadox />

      <p className="my-4">
        This paradox attacks motion from the opposite direction: not the end, but
        the <em>beginning</em>. If every interval can be halved, where do you start?
      </p>

      {/* The Arrow */}
      <h3 className="text-xl font-semibold mt-8 mb-4">3. The Arrow</h3>

      <Callout type="info" title="The Paradox">
        <p>
          At any single instant of time, an arrow in flight occupies a space exactly
          equal to its length—it is at rest in that instant. But time is composed of
          instants. If the arrow is at rest at every instant, when does it move?
        </p>
      </Callout>

      <ArrowParadox />

      <p className="my-4">
        This paradox questions the nature of instantaneous velocity. How can something
        be moving if, at each moment, it simply <em>is</em> somewhere?
      </p>

      {/* The Stadium */}
      <h3 className="text-xl font-semibold mt-8 mb-4">4. The Stadium (The Moving Rows)</h3>

      <Callout type="info" title="The Paradox">
        <p>
          Three rows of soldiers march past each other: one stationary, one moving left,
          one moving right. A soldier in the rightward row passes twice as many soldiers
          in the leftward row as in the stationary row. But if time consists of indivisible
          instants, the soldier must have passed some positions in "half an instant"—which
          is impossible if instants are truly indivisible.
        </p>
      </Callout>

      <div className="demo-container">
        <h4 className="text-lg font-semibold mb-4">The Stadium Paradox</h4>
        <div className="bg-dark-800 p-4 rounded-lg">
          <div className="font-mono text-center space-y-2 text-lg">
            <div className="text-dark-400">A A A A (stationary)</div>
            <div className="text-blue-400">→ B B B B (moving right)</div>
            <div className="text-green-400">← C C C C (moving left)</div>
          </div>
          <p className="text-sm text-dark-400 mt-4 text-center">
            B passes 2 C's for every 1 A. If moments are atomic, this creates half-moments!
          </p>
        </div>
      </div>

      {/* Mathematical Legacy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Mathematical Legacy</h2>

      <p className="mb-6">
        Zeno's paradoxes were not fully resolved until the 19th century, when
        mathematicians developed rigorous foundations for calculus, infinite series,
        and the real number system.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Infinite Series</h4>
          <p className="text-sm text-dark-300">
            Cauchy and Weierstrass showed that infinite series can have finite sums,
            with precise definitions of convergence.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Limits & Calculus</h4>
          <p className="text-sm text-dark-300">
            The epsilon-delta definition of limits made "instantaneous velocity"
            rigorous without requiring division by zero.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Real Numbers</h4>
          <p className="text-sm text-dark-300">
            Dedekind cuts and Cantor's construction gave the continuum a solid
            foundation, resolving questions about infinite divisibility.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Set Theory</h4>
          <p className="text-sm text-dark-300">
            Cantor showed that some infinities are larger than others—transforming
            our understanding of the infinite that Zeno questioned.
          </p>
        </Card>
      </CardGrid>

      {/* Bell's Take */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell groups Zeno with <strong>Eudoxus</strong> and <strong>Archimedes</strong>
        in a chapter on ancient Greek mathematics. He sees Zeno not as a mathematician
        per se, but as a gadfly whose paradoxes spurred genuine mathematical progress:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "The sophistries of Zeno have been refuted again and again, from Aristotle's
        day to our own... Yet each 'refutation' has been shown by the next comer to
        have been no refutation at all, but merely another logical fallacy."
      </blockquote>

      <p className="my-4">
        Bell emphasizes that Zeno's paradoxes are not mere tricks but genuine
        philosophical problems that required 2,400 years of mathematical development
        to properly address. The resolution came not from showing Zeno was "wrong,"
        but from building entirely new mathematical frameworks.
      </p>

      <Callout type="warning">
        <p>
          <strong>Still Debated:</strong> Philosophers continue to argue about whether
          the mathematical resolutions truly answer Zeno's philosophical questions.
          Can mathematics alone explain how motion is <em>actually</em> possible?
          The debate touches on physics, metaphysics, and the philosophy of mathematics.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Zeno of Elea (c. 495–430 BC) created paradoxes to defend Parmenides' view
              that motion and change are illusions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              The four famous paradoxes—Achilles and the Tortoise, the Dichotomy, the Arrow,
              and the Stadium—all attack the concept of motion through infinite divisibility.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The paradoxes weren't resolved until the 19th century, with rigorous definitions
              of limits, infinite series, and the real number continuum.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              Zeno's legacy: great mathematical progress often comes from taking
              "obvious impossibilities" seriously and developing new tools to address them.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
