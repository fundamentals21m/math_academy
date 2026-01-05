import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// =============================================================================
// INTERACTIVE COMPONENTS
// =============================================================================

/**
 * Interactive demo showing the calculation problem
 */
function CalculationProblemDemo() {
  const [showPrices, setShowPrices] = useState(true);

  const resources = [
    { name: 'Steel', quantity: '1000 tons', price: 500, useA: 200, useB: 150, useC: 300 },
    { name: 'Labor (skilled)', quantity: '500 hours', price: 50, useA: 100, useB: 200, useC: 75 },
    { name: 'Labor (unskilled)', quantity: '2000 hours', price: 15, useA: 400, useB: 300, useC: 600 },
    { name: 'Coal', quantity: '5000 kg', price: 2, useA: 1000, useB: 800, useC: 1500 },
    { name: 'Machinery time', quantity: '100 hours', price: 200, useA: 30, useB: 25, useC: 40 },
  ];

  const calculateCost = (use: 'useA' | 'useB' | 'useC') => {
    return resources.reduce((sum, r) => sum + r[use] * r.price, 0);
  };

  const costA = calculateCost('useA');
  const costB = calculateCost('useB');
  const costC = calculateCost('useC');
  const cheapest = Math.min(costA, costB, costC);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Calculation Problem</h4>

      <p className="text-dark-300 mb-4">
        A socialist director must choose between three methods to produce the same output.
        Each uses different combinations of resources. How to compare?
      </p>

      <div className="mb-4">
        <button
          onClick={() => setShowPrices(!showPrices)}
          className={`px-4 py-2 rounded-lg font-medium ${
            showPrices ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
        >
          {showPrices ? 'Hide Prices (Socialist Mode)' : 'Show Prices (Market Mode)'}
        </button>
      </div>

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-2 text-dark-400">Resource</th>
              {showPrices && <th className="text-right py-2 text-dark-400">Price</th>}
              <th className="text-right py-2 text-dark-400">Method A</th>
              <th className="text-right py-2 text-dark-400">Method B</th>
              <th className="text-right py-2 text-dark-400">Method C</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((r) => (
              <tr key={r.name} className="border-b border-dark-700">
                <td className="py-2 text-dark-200">{r.name}</td>
                {showPrices && <td className="text-right text-green-400">${r.price}</td>}
                <td className="text-right text-dark-300">{r.useA}</td>
                <td className="text-right text-dark-300">{r.useB}</td>
                <td className="text-right text-dark-300">{r.useC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPrices ? (
        <div className="grid grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${costA === cheapest ? 'bg-green-900/30 border border-green-700' : 'bg-dark-700'}`}>
            <div className="text-dark-400 text-sm">Method A</div>
            <div className={`text-xl font-bold ${costA === cheapest ? 'text-green-400' : 'text-dark-200'}`}>
              ${costA.toLocaleString()}
            </div>
            {costA === cheapest && <div className="text-green-400 text-xs">Most Efficient</div>}
          </div>
          <div className={`p-4 rounded-lg ${costB === cheapest ? 'bg-green-900/30 border border-green-700' : 'bg-dark-700'}`}>
            <div className="text-dark-400 text-sm">Method B</div>
            <div className={`text-xl font-bold ${costB === cheapest ? 'text-green-400' : 'text-dark-200'}`}>
              ${costB.toLocaleString()}
            </div>
            {costB === cheapest && <div className="text-green-400 text-xs">Most Efficient</div>}
          </div>
          <div className={`p-4 rounded-lg ${costC === cheapest ? 'bg-green-900/30 border border-green-700' : 'bg-dark-700'}`}>
            <div className="text-dark-400 text-sm">Method C</div>
            <div className={`text-xl font-bold ${costC === cheapest ? 'text-green-400' : 'text-dark-200'}`}>
              ${costC.toLocaleString()}
            </div>
            {costC === cheapest && <div className="text-green-400 text-xs">Most Efficient</div>}
          </div>
        </div>
      ) : (
        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
          <div className="text-red-400 font-medium mb-2">Cannot Compare!</div>
          <p className="text-dark-200 text-sm">
            How do you add 200 tons of steel + 100 hours of skilled labor + 400 hours
            of unskilled labor + 1000 kg of coal + 30 machine-hours? Without prices,
            there is no common denominator. The comparison is impossible.
          </p>
        </div>
      )}

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Prices provide the
          "common denominator" that makes rational comparison possible. Without market
          prices for factors of production, the socialist planner cannot determine which
          method is most economical.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing failed proposed solutions
 */
function FailedSolutionsDemo() {
  const [solution, setSolution] = useState(0);

  const solutions = [
    {
      name: 'Labor Hours',
      proposal: 'Calculate costs in labor-hours required',
      problem: 'Ignores non-labor factors (land, capital). Also ignores that different labor has different value—an hour of brain surgery ≠ an hour of ditch-digging.',
      fatal: 'Cannot compare heterogeneous labor types without prices',
    },
    {
      name: 'Utility Units',
      proposal: 'Calculate in units of "utility" or satisfaction',
      problem: 'People don\'t measure utility cardinally—they only rank preferences. And the marginal utility of each unit depends on total quantity available.',
      fatal: 'Utility is ordinal (ranked), not cardinal (measured)',
    },
    {
      name: 'Differential Equations',
      proposal: 'Use mathematical equations describing equilibrium',
      problem: 'Equations describe hypothetical final states, not how to get there. The planner knows current conditions but needs to know unknowable future equilibrium.',
      fatal: 'Math describes equilibrium, not transformation paths',
    },
    {
      name: 'Trial and Error',
      proposal: 'Just try things and see what works',
      problem: 'Entrepreneurs use trial and error, but profit/loss signals tell them what "worked." Under socialism, there\'s no metric to identify success or failure.',
      fatal: 'Without profit/loss, "error" cannot be recognized',
    },
    {
      name: 'Quasi-Market',
      proposal: 'Create artificial internal markets between socialist enterprises',
      problem: 'Managers playing at markets with no personal stake cannot replicate entrepreneurs risking their own capital. "One cannot play speculation and investment."',
      fatal: 'Removes the skin in the game that makes markets work',
    },
  ];

  const current = solutions[solution];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Failed Proposed Solutions</h4>

      <div className="flex flex-wrap gap-2 mb-6">
        {solutions.map((s, i) => (
          <button
            key={i}
            onClick={() => setSolution(i)}
            className={`px-3 py-2 rounded text-sm ${
              solution === i
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg">
          <div className="text-blue-400 text-sm font-medium mb-1">The Proposal</div>
          <p className="text-dark-100">{current.proposal}</p>
        </div>

        <div className="bg-yellow-900/30 border border-yellow-700 p-4 rounded-lg">
          <div className="text-yellow-400 text-sm font-medium mb-1">The Problem</div>
          <p className="text-dark-200">{current.problem}</p>
        </div>

        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
          <div className="text-red-400 text-sm font-medium mb-1">Fatal Flaw</div>
          <p className="text-dark-200 font-medium">{current.fatal}</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Every proposed solution
          to the calculation problem either smuggles in price information, ignores
          essential aspects of economic reality, or requires knowledge that doesn't exist.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing trial and error without feedback
 */
function TrialErrorDemo() {
  const [attempts, setAttempts] = useState<Array<{ method: string; result: string }>>([]);
  const [hasMarket, setHasMarket] = useState(true);

  const methods = ['Method A', 'Method B', 'Method C', 'Method D'];

  const tryMethod = (method: string) => {
    const isGood = method === 'Method B'; // B is secretly the best
    const result = hasMarket
      ? isGood ? 'Profit: +$50,000' : 'Loss: -$30,000'
      : '??? (No way to know)';

    setAttempts([...attempts, { method, result }]);
  };

  const reset = () => setAttempts([]);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Trial and Error Without Feedback</h4>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => { setHasMarket(true); reset(); }}
          className={`px-4 py-2 rounded-lg font-medium ${
            hasMarket ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Market Economy
        </button>
        <button
          onClick={() => { setHasMarket(false); reset(); }}
          className={`px-4 py-2 rounded-lg font-medium ${
            !hasMarket ? 'bg-red-600 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Socialist Economy
        </button>
      </div>

      <p className="text-dark-300 mb-4">
        Try different production methods to find the best one:
      </p>

      <div className="grid grid-cols-4 gap-2 mb-6">
        {methods.map((m) => (
          <button
            key={m}
            onClick={() => tryMethod(m)}
            className="px-3 py-2 rounded bg-dark-700 text-dark-300 hover:bg-dark-600"
          >
            Try {m}
          </button>
        ))}
      </div>

      {attempts.length > 0 && (
        <div className="bg-dark-700 p-4 rounded-lg mb-4">
          <div className="text-dark-400 text-sm mb-2">Results:</div>
          <div className="space-y-2">
            {attempts.map((a, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-dark-200">{a.method}</span>
                <span className={
                  a.result.includes('Profit') ? 'text-green-400' :
                  a.result.includes('Loss') ? 'text-red-400' : 'text-yellow-400'
                }>
                  {a.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {!hasMarket && attempts.length >= 2 && (
        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg mb-4">
          <p className="text-dark-200 text-sm">
            You've tried multiple methods, but how do you know which one worked better?
            Without profit and loss signals, "trial and error" is just "trial."
          </p>
        </div>
      )}

      {hasMarket && attempts.some(a => a.result.includes('Profit')) && (
        <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg mb-4">
          <p className="text-dark-200 text-sm">
            The profit signal tells you that Method B successfully served consumer needs
            better than alternatives. You can now focus resources there.
          </p>
        </div>
      )}

      <button
        onClick={reset}
        className="px-4 py-2 rounded bg-dark-600 text-dark-300 hover:bg-dark-500"
      >
        Reset
      </button>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Entrepreneurs use trial
          and error, but their "correct solution is easily recognizable" through profit
          and loss. Under socialism, without market prices, there's no metric to
          distinguish success from failure.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing why quasi-markets fail
 */
function QuasiMarketDemo() {
  const [scenario, setScenario] = useState<'real' | 'quasi'>('real');

  const comparisons = [
    {
      aspect: 'Entrepreneur stakes',
      real: 'Own wealth, reputation, future livelihood',
      quasi: 'Nothing personal—it\'s the state\'s money',
    },
    {
      aspect: 'Decision incentive',
      real: 'Maximize long-term profit, avoid bankruptcy',
      quasi: 'Meet targets, please supervisors, avoid blame',
    },
    {
      aspect: 'Risk tolerance',
      real: 'Calibrated by personal consequences',
      quasi: 'Why not gamble? Gains shared, losses socialized',
    },
    {
      aspect: 'Innovation motivation',
      real: 'First-mover profits reward bold action',
      quasi: 'Innovation risks punishment if it fails',
    },
    {
      aspect: 'Capital allocation',
      real: 'Flows to highest expected risk-adjusted return',
      quasi: 'Allocated by political influence and bureaucratic rules',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Quasi-Market Illusion</h4>

      <p className="text-dark-300 mb-4">
        Some socialists proposed creating "artificial markets" within socialism.
        But can you simulate markets without the essential element—skin in the game?
      </p>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setScenario('real')}
          className={`px-4 py-2 rounded-lg font-medium flex-1 ${
            scenario === 'real'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          Real Market
        </button>
        <button
          onClick={() => setScenario('quasi')}
          className={`px-4 py-2 rounded-lg font-medium flex-1 ${
            scenario === 'quasi'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          Quasi-Market
        </button>
      </div>

      <div className="space-y-3">
        {comparisons.map((c, i) => (
          <div key={i} className="bg-dark-700 p-4 rounded-lg">
            <div className="text-dark-400 text-sm mb-1">{c.aspect}</div>
            <p className={`font-medium ${
              scenario === 'real' ? 'text-green-400' : 'text-red-400'
            }`}>
              {scenario === 'real' ? c.real : c.quasi}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg">
        <p className="text-dark-200 text-sm">
          <strong className="text-yellow-400">"One cannot play speculation and investment."</strong>
          {' '}The speculators and investors expose their own wealth. This makes them
          responsible to consumers. Remove this responsibility, and you remove
          their very character.
        </p>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Markets work because
          entrepreneurs risk their own capital. A "quasi-market" where managers play with
          state funds cannot replicate this. The personal consequences that discipline
          market decisions are absent.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      {/* Introduction */}
      <p className="text-lg text-dark-100 mb-6">
        Chapter XXVI presents Mises's famous argument for why socialism cannot perform
        rational economic calculation. This is not a moral objection to socialism but
        a demonstration that it cannot achieve even its own stated goals.
      </p>

      <Callout type="concept" title="The Central Problem">
        Without market prices for factors of production, a socialist planner cannot
        reduce diverse inputs—steel, labor, coal, machinery—to a common denominator
        for comparison. Cost-benefit analysis becomes impossible, making rational
        economic coordination impossible.
      </Callout>

      {/* Section 1: The Problem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        1. The Problem of Economic Calculation
      </h2>

      <p className="text-dark-200 mb-4">
        Every production decision requires comparing alternative uses of resources.
        Should we use more steel and less labor, or vice versa? Should we build one
        large plant or many small ones? In a market economy, prices make these
        comparisons possible.
      </p>

      <CalculationProblemDemo />

      <Callout type="key-point" title="The Common Denominator">
        Market prices provide the essential "common denominator" that allows
        comparison of heterogeneous inputs. Without prices, how do you add tons of
        steel to hours of labor to kilowatts of electricity? You cannot.
      </Callout>

      {/* Section 2: Past Failures to Conceive the Problem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        2. Why Economists Missed the Problem
      </h2>

      <p className="text-dark-200 mb-4">
        Mathematical economists contributed to the confusion by focusing on static
        equilibrium states rather than dynamic market processes. Their models assumed
        away the very problems that markets solve.
      </p>

      <CardGrid>
        <Card title="The Equilibrium Fallacy" variant="warning">
          <p className="text-dark-300">
            Treating the imaginary "evenly rotating economy" as realistic eliminated
            the entrepreneur from analysis. But it's precisely entrepreneurial
            judgment that allocates resources in the real world.
          </p>
        </Card>
        <Card title="Hidden Assumptions" variant="warning">
          <p className="text-dark-300">
            Cost curves already assume a common medium of exchange. Economists
            who thought calculation could work without money had smuggled money
            into their models without realizing it.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: Proposed Solutions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        3. Proposed Solutions and Why They Fail
      </h2>

      <p className="text-dark-200 mb-4">
        Socialist theorists proposed various solutions to the calculation problem.
        Mises examines each and shows why it cannot work.
      </p>

      <FailedSolutionsDemo />

      {/* Section 4: Trial and Error */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        4. Trial and Error Without Feedback
      </h2>

      <p className="text-dark-200 mb-4">
        Some argued that planners could simply try different approaches and see what
        works. But "trial and error" requires a way to identify errors—and that's
        precisely what profit and loss signals provide.
      </p>

      <TrialErrorDemo />

      {/* Section 5: The Quasi-Market */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        5. The Quasi-Market Illusion
      </h2>

      <p className="text-dark-200 mb-4">
        The most sophisticated socialist response was to propose artificial internal
        markets. But this contradicts socialism's essence and cannot replicate the
        essential feature of real markets.
      </p>

      <QuasiMarketDemo />

      <Callout type="warning" title="The Fatal Contradiction">
        Socialism requires "the entire elimination of the market and of catallactic
        competition." A system that preserves markets is not socialism. The notion
        of "market socialism" is "as self-contradictory as is the notion of a
        triangular square."
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Key Takeaways
      </h2>

      <div className="space-y-4">
        <Callout type="summary" title="1. Prices Are Essential for Calculation">
          Without market prices for factors of production, there is no common
          denominator to compare alternative resource uses. Economic calculation
          becomes impossible.
        </Callout>

        <Callout type="summary" title="2. Labor and Utility Theories Fail">
          Calculating in labor-hours ignores non-labor factors and heterogeneous
          labor. Utility units are impossible because utility is ordinal (ranked),
          not cardinal (measured).
        </Callout>

        <Callout type="summary" title="3. Trial and Error Requires Feedback">
          Entrepreneurs use trial and error guided by profit and loss signals.
          Under socialism, without these signals, there's no way to identify
          which trials succeeded and which failed.
        </Callout>

        <Callout type="summary" title="4. Quasi-Markets Cannot Work">
          Markets function because entrepreneurs risk their own capital. Managers
          playing with state funds lack the skin in the game that disciplines
          real market decisions. "One cannot play speculation and investment."
        </Callout>
      </div>
    </LessonLayout>
  );
}
