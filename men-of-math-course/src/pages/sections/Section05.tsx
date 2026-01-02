import { useState, useEffect } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, InlineMath } from '../../components/common/MathBlock';

// Fermat's Last Theorem Explorer
function FermatLastTheorem() {
  const [n, setN] = useState(2);
  const [maxSearch, setMaxSearch] = useState(20);
  const [solutions, setSolutions] = useState<Array<{ a: number; b: number; c: number }>>([]);

  const findSolutions = () => {
    const found: Array<{ a: number; b: number; c: number }> = [];

    for (let a = 1; a <= maxSearch; a++) {
      for (let b = a; b <= maxSearch; b++) {
        const sum = Math.pow(a, n) + Math.pow(b, n);
        const c = Math.round(Math.pow(sum, 1 / n));

        // Check if c^n equals a^n + b^n exactly
        if (c > 0 && c <= maxSearch * 2 && Math.pow(c, n) === sum) {
          found.push({ a, b, c });
        }
      }
    }

    setSolutions(found);
  };

  useEffect(() => {
    findSolutions();
  }, [n, maxSearch]);

  // Famous Pythagorean triples for n=2
  const pythagoreanTriples = [
    { a: 3, b: 4, c: 5 },
    { a: 5, b: 12, c: 13 },
    { a: 8, b: 15, c: 17 },
    { a: 7, b: 24, c: 25 },
  ];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Fermat's Last Theorem Explorer</h4>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`x^{${n}} + y^{${n}} = z^{${n}}`}
        </MathBlock>
        <p className="text-sm text-dark-400 text-center mt-2">
          Find positive integer solutions where x, y, z ≤ {maxSearch * 2}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-2">
            Exponent n: <span className="text-primary-400 font-bold">{n}</span>
          </label>
          <input
            type="range"
            min={2}
            max={10}
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            className="w-full accent-primary-500"
          />
          <div className="flex justify-between text-xs text-dark-500">
            <span>2</span>
            <span>10</span>
          </div>
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-2">
            Search up to: <span className="text-primary-400 font-bold">{maxSearch}</span>
          </label>
          <input
            type="range"
            min={10}
            max={50}
            value={maxSearch}
            onChange={(e) => setMaxSearch(parseInt(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-dark-800 p-4 rounded-lg">
        <h5 className="font-semibold mb-2">
          {n === 2 ? (
            <span className="text-emerald-400">Solutions Found: {solutions.length}</span>
          ) : (
            <span className="text-amber-400">Solutions Found: {solutions.length}</span>
          )}
        </h5>

        {solutions.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-32 overflow-y-auto">
            {solutions.slice(0, 20).map((sol, i) => (
              <div key={i} className="text-sm font-mono text-emerald-400">
                {sol.a}^{n} + {sol.b}^{n} = {sol.c}^{n}
              </div>
            ))}
            {solutions.length > 20 && (
              <div className="text-sm text-dark-500">...and {solutions.length - 20} more</div>
            )}
          </div>
        ) : (
          <p className="text-dark-400 text-sm">
            {n === 2 ? 'Searching...' : 'No solutions found in this range!'}
          </p>
        )}

        {n > 2 && (
          <p className="text-sm text-amber-400 mt-3">
            Fermat claimed no solutions exist for n {">"} 2. This was proved by Andrew Wiles in 1995,
            358 years after Fermat's famous margin note!
          </p>
        )}
      </div>

      {/* Pythagorean triples */}
      {n === 2 && (
        <div className="mt-4 p-4 bg-dark-900 rounded-lg">
          <h5 className="font-semibold text-primary-400 mb-2">Famous Pythagorean Triples</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {pythagoreanTriples.map((t, i) => (
              <div key={i} className="text-sm">
                <span className="font-mono text-emerald-400">{t.a}² + {t.b}² = {t.c}²</span>
                <span className="text-dark-500 text-xs block">
                  {t.a * t.a} + {t.b * t.b} = {t.c * t.c}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Fermat's Little Theorem Demo
function FermatLittleTheorem() {
  const [a, setA] = useState(3);
  const [p, setP] = useState(7);

  // Check if p is prime
  const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Calculate a^(p-1) mod p using modular exponentiation
  const modPow = (base: number, exp: number, mod: number): number => {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % mod;
      }
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
    }
    return result;
  };

  const primeP = isPrime(p);
  const gcdAP = a % p !== 0; // simplified GCD check
  const result = modPow(a, p - 1, p);
  const theoremHolds = primeP && gcdAP && result === 1;

  // Also show a^p ≡ a (mod p) form
  const resultAP = modPow(a, p, p);

  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Fermat's Little Theorem</h4>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`a^{p-1} \\equiv 1 \\pmod{p}`}
        </MathBlock>
        <p className="text-sm text-dark-400 text-center mt-2">
          When p is prime and a is not divisible by p
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-2">
            Base a: <span className="text-primary-400 font-bold">{a}</span>
          </label>
          <input
            type="range"
            min={2}
            max={20}
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-2">
            Prime p: <span className={primeP ? 'text-emerald-400' : 'text-red-400'}>{p}</span>
            {!primeP && <span className="text-xs text-red-400 ml-2">(not prime!)</span>}
          </label>
          <div className="flex flex-wrap gap-1">
            {primes.slice(0, 8).map(prime => (
              <button
                key={prime}
                onClick={() => setP(prime)}
                className={`px-2 py-1 rounded text-xs ${
                  p === prime ? 'bg-primary-600 text-white' : 'bg-dark-700 text-dark-300'
                }`}
              >
                {prime}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calculation */}
      <div className="bg-dark-800 p-4 rounded-lg space-y-3">
        <div className="text-sm">
          <span className="text-dark-400">Calculate:</span>{' '}
          <span className="font-mono text-primary-400">{a}^{p - 1} mod {p}</span>
        </div>

        <div className="text-sm">
          <span className="text-dark-400">{a}^{p - 1} = {a}^{p - 1} =</span>{' '}
          <span className="font-mono text-amber-400">
            {p <= 13 ? Math.pow(a, p - 1).toLocaleString() : '(large number)'}
          </span>
        </div>

        <div className="text-sm">
          <span className="text-dark-400">Result mod {p}:</span>{' '}
          <span className={`font-mono text-xl ${result === 1 ? 'text-emerald-400' : 'text-red-400'}`}>
            {result}
          </span>
        </div>

        {primeP && gcdAP && (
          <div className={`p-2 rounded ${theoremHolds ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
            <p className={`text-sm ${theoremHolds ? 'text-emerald-400' : 'text-red-400'}`}>
              {theoremHolds
                ? `✓ Theorem confirmed: ${a}^${p - 1} ≡ 1 (mod ${p})`
                : `✗ Result is ${result}, not 1`}
            </p>
          </div>
        )}

        {!primeP && (
          <p className="text-sm text-amber-400">
            ⚠ {p} is not prime, so the theorem doesn't apply!
          </p>
        )}

        {a % p === 0 && (
          <p className="text-sm text-amber-400">
            ⚠ {a} is divisible by {p}, so the theorem doesn't apply!
          </p>
        )}
      </div>

      {/* Alternative form */}
      <div className="mt-4 p-4 bg-dark-900 rounded-lg">
        <h5 className="font-semibold text-primary-400 mb-2">Equivalent Form</h5>
        <MathBlock>{`a^p \\equiv a \\pmod{p}`}</MathBlock>
        <p className="text-sm text-dark-400 mt-2">
          For our values: {a}^{p} ≡ {resultAP} (mod {p}) {resultAP === a % p ? '✓' : ''}
        </p>
      </div>
    </div>
  );
}

// Method of Infinite Descent Demo
function InfiniteDescent() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Assume a solution exists",
      content: "Suppose √2 = a/b where a, b are positive integers with no common factors.",
      math: "\\sqrt{2} = \\frac{a}{b}, \\quad \\gcd(a, b) = 1"
    },
    {
      title: "Square both sides",
      content: "This gives us 2b² = a², so a² is even, which means a must be even.",
      math: "2b^2 = a^2 \\quad \\Rightarrow \\quad a = 2k"
    },
    {
      title: "Substitute",
      content: "If a = 2k, then 2b² = 4k², so b² = 2k², meaning b is also even.",
      math: "2b^2 = (2k)^2 = 4k^2 \\quad \\Rightarrow \\quad b^2 = 2k^2"
    },
    {
      title: "Contradiction!",
      content: "Both a and b are even, contradicting gcd(a,b) = 1. No such fraction exists!",
      math: "\\text{Both } a, b \\text{ even} \\Rightarrow \\gcd(a,b) \\geq 2 \\quad \\lightning"
    }
  ];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Method of Infinite Descent</h4>

      <p className="text-sm text-dark-300 mb-4">
        Fermat perfected this proof technique: assume a solution exists, then show it implies
        a smaller solution, leading to an infinite descent—which is impossible for positive integers.
      </p>

      <div className="mb-4">
        <p className="text-sm text-dark-400 mb-2">Example: Proving √2 is irrational</p>
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`flex-1 py-2 rounded text-sm ${
                step === i ? 'bg-primary-600 text-white' : 'bg-dark-700 text-dark-300'
              }`}
            >
              Step {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <h5 className="font-semibold text-primary-400 mb-2">{steps[step].title}</h5>
        <p className="text-sm text-dark-300 mb-3">{steps[step].content}</p>
        <MathBlock>{steps[step].math}</MathBlock>
      </div>

      <div className="mt-4 p-4 bg-dark-900 rounded-lg">
        <h5 className="font-semibold text-amber-400 mb-2">The Power of Descent</h5>
        <p className="text-sm text-dark-400">
          Fermat used this method to prove there's no right triangle with integer sides
          whose area is a perfect square—a key lemma for his Last Theorem when n = 4.
          This is the only case of FLT that Fermat actually proved!
        </p>
      </div>
    </div>
  );
}

// Probability Origins (Fermat-Pascal correspondence)
function ProbabilityOrigins() {
  const [games, setGames] = useState(5);
  const [playerAWins, setPlayerAWins] = useState(2);
  const [playerBWins, setPlayerBWins] = useState(1);

  // Calculate fair division using Fermat's method
  const calculateDivision = () => {
    const aNeeds = Math.ceil(games / 2) - playerAWins;
    const bNeeds = Math.ceil(games / 2) - playerBWins;

    if (aNeeds <= 0) return { a: 1, b: 0 };
    if (bNeeds <= 0) return { a: 0, b: 1 };

    // Count outcomes in remaining games
    const remaining = aNeeds + bNeeds - 1;
    let aWinScenarios = 0;
    let totalScenarios = Math.pow(2, remaining);

    for (let i = 0; i < totalScenarios; i++) {
      let aWinsInRun = 0;
      let temp = i;
      for (let j = 0; j < remaining; j++) {
        if (temp % 2 === 1) aWinsInRun++;
        temp = Math.floor(temp / 2);
      }
      if (aWinsInRun >= aNeeds) aWinScenarios++;
    }

    return {
      a: aWinScenarios / totalScenarios,
      b: (totalScenarios - aWinScenarios) / totalScenarios
    };
  };

  const division = calculateDivision();
  const toWin = Math.ceil(games / 2);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Problem of Points (Birth of Probability)</h4>

      <p className="text-sm text-dark-300 mb-4">
        In 1654, a gambler asked Pascal: if a game is interrupted, how should the stakes
        be divided fairly? Pascal wrote to Fermat, and their correspondence founded
        probability theory.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm text-dark-400 block mb-1">Games to win</label>
            <select
              value={games}
              onChange={(e) => setGames(parseInt(e.target.value))}
              className="w-full bg-dark-700 rounded px-2 py-1 text-sm"
            >
              {[3, 5, 7, 9].map(g => (
                <option key={g} value={g}>First to {Math.ceil(g / 2)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm text-blue-400 block mb-1">Player A wins</label>
            <input
              type="number"
              min={0}
              max={toWin - 1}
              value={playerAWins}
              onChange={(e) => setPlayerAWins(Math.min(toWin - 1, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full bg-dark-700 rounded px-2 py-1 text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-emerald-400 block mb-1">Player B wins</label>
            <input
              type="number"
              min={0}
              max={toWin - 1}
              value={playerBWins}
              onChange={(e) => setPlayerBWins(Math.min(toWin - 1, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full bg-dark-700 rounded px-2 py-1 text-sm"
            />
          </div>
        </div>

        <div className="text-sm text-dark-400 mb-2">
          First to {toWin} wins. Currently: A has {playerAWins}, B has {playerBWins}.
        </div>

        {/* Visual progress */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <div className="text-xs text-blue-400 mb-1">Player A</div>
            <div className="h-4 bg-dark-700 rounded overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{ width: `${(playerAWins / toWin) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-xs text-emerald-400 mb-1">Player B</div>
            <div className="h-4 bg-dark-700 rounded overflow-hidden">
              <div
                className="h-full bg-emerald-500"
                style={{ width: `${(playerBWins / toWin) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fair division result */}
      <div className="bg-dark-800 p-4 rounded-lg">
        <h5 className="font-semibold text-primary-400 mb-2">Fair Division of Stakes</h5>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-dark-900 rounded">
            <p className="text-xs text-blue-400">Player A</p>
            <p className="text-2xl font-bold text-blue-400">{(division.a * 100).toFixed(1)}%</p>
          </div>
          <div className="text-center p-3 bg-dark-900 rounded">
            <p className="text-xs text-emerald-400">Player B</p>
            <p className="text-2xl font-bold text-emerald-400">{(division.b * 100).toFixed(1)}%</p>
          </div>
        </div>
        <p className="text-xs text-dark-500 mt-2 text-center">
          Based on probability of winning from current position
        </p>
      </div>
    </div>
  );
}

// Maxima/Minima Method (precursor to calculus)
function MaximaMinima() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(-4);

  // For f(x) = ax² + bx + c, vertex is at x = -b/(2a)
  const vertexX = a !== 0 ? -b / (2 * a) : 0;
  const vertexY = a * vertexX * vertexX + b * vertexX + c;
  const isMax = a < 0;

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Finding Maxima and Minima</h4>

      <p className="text-sm text-dark-300 mb-4">
        Fermat developed a method to find where curves reach their highest or lowest points—
        a key step toward calculus. His idea: at a maximum or minimum, small changes produce
        nearly no change in the function value.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <p className="text-sm text-dark-400 mb-2">Function:</p>
        <MathBlock>
          {`f(x) = ${a}x^2 ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c}`}
        </MathBlock>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-1">a</label>
          <input
            type="range"
            min={-3}
            max={3}
            step={0.5}
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-full accent-primary-500"
          />
          <span className="text-xs text-primary-400">{a}</span>
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">b</label>
          <input
            type="range"
            min={-5}
            max={5}
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
            className="w-full accent-primary-500"
          />
          <span className="text-xs text-primary-400">{b}</span>
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">c</label>
          <input
            type="range"
            min={-5}
            max={5}
            value={c}
            onChange={(e) => setC(parseInt(e.target.value))}
            className="w-full accent-primary-500"
          />
          <span className="text-xs text-primary-400">{c}</span>
        </div>
      </div>

      {a !== 0 && (
        <div className="bg-dark-800 p-4 rounded-lg">
          <h5 className="font-semibold text-primary-400 mb-2">
            {isMax ? 'Maximum' : 'Minimum'} Point
          </h5>
          <p className="text-sm text-dark-300 mb-2">
            Using Fermat's method: set f(x + e) ≈ f(x), solve for x
          </p>
          <MathBlock>
            {`x = -\\frac{b}{2a} = -\\frac{${b}}{2(${a})} = ${vertexX.toFixed(2)}`}
          </MathBlock>
          <p className="text-sm text-dark-300 mt-2">
            {isMax ? 'Maximum' : 'Minimum'} value:{' '}
            <span className={isMax ? 'text-emerald-400' : 'text-amber-400'}>
              f({vertexX.toFixed(2)}) = {vertexY.toFixed(2)}
            </span>
          </p>
        </div>
      )}

      <div className="mt-4 p-4 bg-dark-900 rounded-lg">
        <h5 className="font-semibold text-amber-400 mb-2">Fermat's Insight</h5>
        <p className="text-sm text-dark-400">
          Compare f(x) with f(x + e) where e is tiny. At a max/min, they're nearly equal.
          Set them equal, simplify, let e → 0. This is essentially differentiation!
          Newton and Leibniz would build calculus on this foundation.
        </p>
      </div>
    </div>
  );
}

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Pierre de Fermat was a lawyer by profession and a mathematician by passion—perhaps
        the greatest amateur in the history of mathematics. His marginal notes and letters
        to fellow mathematicians contained ideas that would occupy the world's best minds
        for three and a half centuries.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "I have discovered a truly marvelous proof of this, which this margin is too
        narrow to contain."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Fermat's famous marginal note on his Last Theorem
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Prince of Amateurs</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Pierre de Fermat (1601–1665) was born in Beaumont-de-Lomagne, France.
            He studied law at the University of Orléans and spent his career as a
            magistrate in Toulouse—a senior legal position in the <em>parlement</em>
            (regional court) that left him ample time for mathematics.
          </p>
          <p className="mb-4">
            Fermat never published a mathematical book. His ideas survive in letters,
            marginal notes, and challenges he sent to other mathematicians. He would
            often announce theorems without proof, leaving others to verify (or struggle
            with) his claims—sometimes for centuries.
          </p>
          <p>
            Despite being an "amateur," Fermat made contributions to number theory,
            analytic geometry, probability, and the foundations of calculus that
            rival any professional mathematician of his era.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> August 17, 1601, France</li>
            <li><strong>Died:</strong> January 12, 1665</li>
            <li><strong>Profession:</strong> Lawyer, magistrate</li>
            <li><strong>Style:</strong> Theorems without proofs</li>
            <li><strong>Legacy:</strong> Father of modern number theory</li>
          </ul>
        </Card>
      </div>

      <Callout type="info">
        <p>
          <strong>The Secretive Genius:</strong> Fermat was notoriously reluctant to publish
          proofs. When pressed, he would sometimes provide sketches, but just as often he'd
          simply assert that proving the result was "straightforward" for anyone with
          understanding. This habit drove his correspondents to distraction—and drove
          mathematics forward as others struggled to fill in his gaps.
        </p>
      </Callout>

      {/* Fermat's Last Theorem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Fermat's Last Theorem</h2>

      <p className="mb-4">
        In the margin of his copy of Diophantus's <em>Arithmetica</em>, Fermat wrote
        that the equation <InlineMath>x^n + y^n = z^n</InlineMath> has no positive integer
        solutions when n {">"} 2. His famous claim that he had a "truly marvelous proof"
        has never been believed by mathematicians—the actual proof, by Andrew Wiles in 1995,
        required entirely modern techniques.
      </p>

      <FermatLastTheorem />

      <Callout type="warning">
        <p>
          <strong>358 Years Later:</strong> Fermat's Last Theorem became the most famous
          unsolved problem in mathematics. Andrew Wiles devoted seven years to its proof,
          which runs over 100 pages and uses elliptic curves, modular forms, and Galois
          representations—none of which Fermat could have known. The consensus: Fermat
          was wrong about having a proof.
        </p>
      </Callout>

      {/* Fermat's Little Theorem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Fermat's Little Theorem</h2>

      <p className="mb-4">
        This theorem is actually useful—and Fermat did prove it. It's fundamental
        to modern cryptography, including RSA encryption that secures the internet.
      </p>

      <FermatLittleTheorem />

      <Callout type="success">
        <p>
          <strong>Modern Applications:</strong> Fermat's Little Theorem is used in:
          primality testing (checking if a number is prime), RSA encryption (which
          relies on modular arithmetic with large primes), and digital signatures.
          A theorem from the 1640s protecting your online banking!
        </p>
      </Callout>

      {/* Method of Infinite Descent */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Method of Infinite Descent</h2>

      <p className="mb-4">
        Fermat perfected this powerful proof technique: assume a solution exists in positive
        integers, then show it implies a <em>smaller</em> solution. Repeat forever—but positive
        integers can't descend forever! Therefore, no solution exists.
      </p>

      <InfiniteDescent />

      {/* Probability */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Birth of Probability</h2>

      <p className="mb-4">
        In 1654, the gambler Antoine Gombaud (Chevalier de Méré) posed a problem to Blaise
        Pascal: how should stakes be divided if a game of chance is interrupted? Pascal
        wrote to Fermat, and their exchange of letters created probability theory.
      </p>

      <ProbabilityOrigins />

      {/* Maxima and Minima */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Precursor to Calculus</h2>

      <p className="mb-4">
        Fermat developed methods for finding tangent lines and for finding maxima and minima
        of curves—exactly the problems that calculus would solve. His technique of comparing
        f(x) with f(x + e) and then letting e approach zero is essentially differentiation.
      </p>

      <MaximaMinima />

      {/* Analytic Geometry */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Other Inventor of Analytic Geometry</h2>

      <p className="mb-4">
        Independently of Descartes, Fermat developed analytic geometry—representing curves
        by equations. In some ways, Fermat's approach was cleaner: he started with the
        equation and derived the curve, while Descartes started with geometric problems.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Fermat's Approach</h4>
          <p className="text-sm text-dark-300">
            Given an equation, find its curve. More algebraic, more systematic.
            Wrote <em>Ad locos planos et solidos isagoge</em> (1636).
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Descartes's Approach</h4>
          <p className="text-sm text-dark-300">
            Given a geometric problem, translate to algebra. Published first (1637),
            got the credit: "Cartesian" coordinates.
          </p>
        </Card>
      </CardGrid>

      {/* Other Contributions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Other Contributions</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Principle of Least Time</h4>
          <p className="text-sm text-dark-300">
            Light travels between two points along the path that takes the least time.
            This explains refraction and became a foundation of optics and later,
            the principle of least action in physics.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Sum of Two Squares</h4>
          <p className="text-sm text-dark-300">
            Every prime of the form 4n + 1 can be written as a sum of two squares.
            For example: 5 = 1² + 2², 13 = 2² + 3², 17 = 1² + 4².
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Fermat Numbers</h4>
          <p className="text-sm text-dark-300">
            <InlineMath>{'F_n = 2^{2^n} + 1'}</InlineMath>. Fermat conjectured all are prime.
            Wrong! F₅ = 4294967297 = 641 × 6700417, found by Euler.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Pell's Equation</h4>
          <p className="text-sm text-dark-300">
            x² - Ny² = 1 for non-square N. Fermat challenged English mathematicians
            to solve it—none could. (Ironically named after Pell, who had little to do with it.)
          </p>
        </div>
      </div>

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell portrays Fermat as the founder of modern number theory—the study of
        the properties of integers. Unlike the Greeks, who focused on geometry, Fermat
        saw the integers themselves as worthy of deep study:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Fermat was in the first rank of mathematicians of all time. As the founder
        of the modern theory of numbers, he is without a rival... every worker in
        this inexhaustible field is his debtor."
      </blockquote>

      <p className="my-4">
        Bell emphasizes Fermat's unique style: announcing deep results in letters and margins,
        often without proof, confident that the truth would eventually be established.
        This drove his contemporaries mad—but also drove mathematics forward.
      </p>

      <Callout type="info">
        <p>
          <strong>A Modest Assessment:</strong> Fermat himself saw mathematics as a hobby,
          writing "I have found a great number of extremely beautiful theorems." He never
          sought fame or position through his mathematical work—the law was his profession,
          mathematics his pleasure.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Pierre de Fermat (1601–1665) was a lawyer who founded modern number theory
              as an amateur mathematician, sharing results through letters and margin notes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Fermat's Last Theorem—<InlineMath>x^n + y^n = z^n</InlineMath> has no positive
              integer solutions for n {">"} 2—remained unproved for 358 years until Andrew Wiles (1995).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              Fermat's Little Theorem (<InlineMath>{'a^{p-1} \\equiv 1 \\pmod{p}'}</InlineMath>)
              is fundamental to modern cryptography and internet security.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              With Pascal, Fermat co-founded probability theory through their correspondence
              on the problem of dividing stakes in interrupted games.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              Fermat independently discovered analytic geometry and developed methods for
              finding maxima/minima that anticipated differential calculus.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
