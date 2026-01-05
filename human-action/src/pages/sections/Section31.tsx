import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// =============================================================================
// INTERACTIVE COMPONENTS
// =============================================================================

/**
 * Interactive demo showing Gresham's Law
 */
function GreshamsLawDemo() {
  const [scenario, setScenario] = useState<'before' | 'after'>('before');

  const coins = {
    before: [
      { name: 'Gold Coin', metalValue: 100, faceValue: 100, inCirculation: true },
      { name: 'Silver Coin', metalValue: 50, faceValue: 50, inCirculation: true },
    ],
    after: [
      { name: 'Full Gold Coin', metalValue: 100, faceValue: 100, inCirculation: false, fate: 'Hoarded or melted' },
      { name: 'Debased Gold Coin', metalValue: 60, faceValue: 100, inCirculation: true, fate: 'Used for payment' },
      { name: 'Silver Coin', metalValue: 50, faceValue: 50, inCirculation: true, fate: 'Unchanged' },
    ],
  };

  const currentCoins = scenario === 'before' ? coins.before : coins.after;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Gresham's Law: Bad Money Drives Out Good</h4>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => setScenario('before')}
          className={`px-4 py-3 rounded-lg ${
            scenario === 'before'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          <div className="font-medium">Before Debasement</div>
          <div className="text-xs opacity-75">Honest money</div>
        </button>
        <button
          onClick={() => setScenario('after')}
          className={`px-4 py-3 rounded-lg ${
            scenario === 'after'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          <div className="font-medium">After Debasement</div>
          <div className="text-xs opacity-75">Government issues debased coins</div>
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {currentCoins.map((coin, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg ${
              coin.inCirculation
                ? 'bg-dark-700'
                : 'bg-yellow-900/30 border border-yellow-700'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="text-dark-100 font-medium">{coin.name}</span>
                {'fate' in coin && (
                  <span className={`text-sm ml-2 ${coin.inCirculation ? 'text-dark-400' : 'text-yellow-400'}`}>
                    → {coin.fate}
                  </span>
                )}
              </div>
              <div className="text-right">
                <div className="text-dark-400 text-sm">
                  Metal: {coin.metalValue} | Face: {coin.faceValue}
                </div>
                <div className={`text-xs ${coin.inCirculation ? 'text-green-400' : 'text-yellow-400'}`}>
                  {coin.inCirculation ? 'In Circulation' : 'Removed from Circulation'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {scenario === 'after' && (
        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg mb-4">
          <p className="text-dark-200 text-sm">
            <strong className="text-red-400">Result:</strong> People spend the debased coins
            (bad money) and hoard or melt the full-weight coins (good money). The good money
            disappears from circulation despite legal tender laws.
          </p>
        </div>
      )}

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Government cannot force
          people to value money at more than its worth. Legal tender laws are frustrated
          by Gresham's Law—people always spend overvalued money first.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing devaluation effects
 */
function DevaluationDemo() {
  const [devaluation, setDevaluation] = useState(0);
  const [othersDevalue, setOthersDevalue] = useState(false);

  const exportBoost = othersDevalue ? 0 : devaluation * 0.5;
  const importCost = devaluation * 0.8;
  const realWageReduction = devaluation * 0.6;
  const inflationEffect = devaluation * 0.7;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Devaluation: Advertised vs. Actual Effects</h4>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Currency Devaluation: {devaluation}%
        </label>
        <input
          type="range"
          min="0"
          max="50"
          value={devaluation}
          onChange={(e) => setDevaluation(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={othersDevalue}
            onChange={(e) => setOthersDevalue(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-dark-300">Other countries devalue in response</span>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-700 p-4 rounded-lg">
          <h5 className="text-dark-400 text-sm mb-3">Advertised Benefits</h5>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-dark-300 text-sm">Export boost</span>
              <span className={`font-medium ${exportBoost > 0 ? 'text-green-400' : 'text-dark-500'}`}>
                +{exportBoost.toFixed(0)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-300 text-sm">Import substitution</span>
              <span className={`font-medium ${exportBoost > 0 ? 'text-green-400' : 'text-dark-500'}`}>
                +{(exportBoost * 0.7).toFixed(0)}%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
          <h5 className="text-red-400 text-sm mb-3">Actual Costs</h5>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-dark-300 text-sm">Import costs rise</span>
              <span className="text-red-400 font-medium">+{importCost.toFixed(0)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-300 text-sm">Real wages fall</span>
              <span className="text-red-400 font-medium">-{realWageReduction.toFixed(0)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-300 text-sm">Domestic inflation</span>
              <span className="text-red-400 font-medium">+{inflationEffect.toFixed(0)}%</span>
            </div>
          </div>
        </div>
      </div>

      {othersDevalue && devaluation > 0 && (
        <div className="bg-yellow-900/30 border border-yellow-700 p-4 rounded-lg mb-4">
          <p className="text-dark-200 text-sm">
            <strong className="text-yellow-400">Competitive Devaluation:</strong> When other
            countries devalue in response, "no changes in foreign trade appear." The only
            lasting effect is that everyone's currency is worth less.
          </p>
        </div>
      )}

      <div className="bg-dark-700 p-4 rounded-lg mb-4">
        <div className="text-dark-400 text-sm mb-2">The Hidden Purpose</div>
        <p className="text-dark-200 text-sm">
          Governments justify devaluation as correcting "fundamental disequilibrium." The
          real objective: reducing real wages without directly challenging unions. Nominal
          wages stay high while purchasing power falls.
        </p>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Devaluation's "benefits"
          are temporary and depend on other nations not responding. The costs—higher import
          prices and reduced purchasing power—are permanent.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing credit expansion cycle
 */
function CreditExpansionDemo() {
  const [phase, setPhase] = useState(0);

  const phases = [
    {
      name: 'Normal Economy',
      interestRate: 5,
      investment: 50,
      consumption: 50,
      status: 'stable',
      description: 'Interest rates reflect real savings. Investment matches available capital.',
    },
    {
      name: 'Credit Expansion Begins',
      interestRate: 2,
      investment: 80,
      consumption: 55,
      status: 'boom',
      description: 'Artificially low rates stimulate investment beyond real savings.',
    },
    {
      name: 'Boom Phase',
      interestRate: 2,
      investment: 100,
      consumption: 60,
      status: 'boom',
      description: 'Capital goods industries expand. Stock prices rise. Euphoria spreads.',
    },
    {
      name: 'Malinvestment Revealed',
      interestRate: 4,
      investment: 70,
      consumption: 45,
      status: 'crisis',
      description: 'Projects prove unprofitable. Real savings insufficient to complete them.',
    },
    {
      name: 'Bust Phase',
      interestRate: 6,
      investment: 30,
      consumption: 40,
      status: 'bust',
      description: 'Failed investments liquidated. Unemployment rises. Recession ensues.',
    },
    {
      name: 'Recovery',
      interestRate: 5,
      investment: 45,
      consumption: 48,
      status: 'recovery',
      description: 'Resources reallocated to sustainable uses. Economy heals if left alone.',
    },
  ];

  const current = phases[phase];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Credit Expansion Cycle</h4>

      <div className="flex gap-1 mb-6">
        {phases.map((p, i) => (
          <button
            key={i}
            onClick={() => setPhase(i)}
            className={`flex-1 py-2 rounded text-xs ${
              phase === i
                ? p.status === 'boom' ? 'bg-green-600 text-white'
                  : p.status === 'crisis' ? 'bg-yellow-600 text-white'
                  : p.status === 'bust' ? 'bg-red-600 text-white'
                  : 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-400'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className={`p-4 rounded-lg mb-4 ${
        current.status === 'boom' ? 'bg-green-900/30 border border-green-700'
          : current.status === 'crisis' ? 'bg-yellow-900/30 border border-yellow-700'
          : current.status === 'bust' ? 'bg-red-900/30 border border-red-700'
          : 'bg-dark-700'
      }`}>
        <h5 className="text-lg font-medium text-dark-100 mb-2">{current.name}</h5>
        <p className="text-dark-300 text-sm">{current.description}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-dark-700 p-4 rounded-lg text-center">
          <div className="text-dark-400 text-sm">Interest Rate</div>
          <div className={`text-2xl font-bold ${
            current.interestRate < 4 ? 'text-green-400' : 'text-dark-100'
          }`}>
            {current.interestRate}%
          </div>
        </div>
        <div className="bg-dark-700 p-4 rounded-lg text-center">
          <div className="text-dark-400 text-sm">Investment</div>
          <div className="h-4 bg-dark-600 rounded-full overflow-hidden mt-2">
            <div
              className={`h-full ${current.status === 'bust' ? 'bg-red-500' : 'bg-blue-500'}`}
              style={{ width: `${current.investment}%` }}
            />
          </div>
        </div>
        <div className="bg-dark-700 p-4 rounded-lg text-center">
          <div className="text-dark-400 text-sm">Consumption</div>
          <div className="h-4 bg-dark-600 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-green-500"
              style={{ width: `${current.consumption}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setPhase(Math.max(0, phase - 1))}
          disabled={phase === 0}
          className="px-4 py-2 rounded bg-dark-700 text-dark-300 hover:bg-dark-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPhase(Math.min(phases.length - 1, phase + 1))}
          disabled={phase === phases.length - 1}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50"
        >
          Next Phase
        </button>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "Credit expansion is the
          government's foremost tool in its struggle against the market economy." The boom
          it creates is unsustainable; depression follows inevitably.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing foreign exchange control failure
 */
function ForexControlDemo() {
  const [officialRate, setOfficialRate] = useState(1.0);
  const marketRate = 0.7; // True market rate

  const isOvervalued = officialRate > marketRate;
  const shortage = isOvervalued ? ((officialRate - marketRate) / officialRate) * 100 : 0;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Foreign Exchange Control</h4>

      <p className="text-dark-300 mb-4">
        When government fixes the exchange rate above market levels, it creates
        artificial "scarcity" of foreign currency.
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Official Exchange Rate: {officialRate.toFixed(2)} (Market rate: {marketRate.toFixed(2)})
        </label>
        <input
          type="range"
          min="0.5"
          max="1.5"
          step="0.05"
          value={officialRate}
          onChange={(e) => setOfficialRate(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={`p-4 rounded-lg ${
          isOvervalued ? 'bg-red-900/30 border border-red-700' : 'bg-green-900/30 border border-green-700'
        }`}>
          <div className="text-dark-400 text-sm">Currency Status</div>
          <div className={`font-bold ${isOvervalued ? 'text-red-400' : 'text-green-400'}`}>
            {isOvervalued ? 'Overvalued' : 'At or Below Market'}
          </div>
        </div>

        <div className={`p-4 rounded-lg ${
          shortage > 0 ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'
        }`}>
          <div className="text-dark-400 text-sm">Foreign Exchange "Shortage"</div>
          <div className={`font-bold ${shortage > 0 ? 'text-red-400' : 'text-dark-400'}`}>
            {shortage > 0 ? `${shortage.toFixed(0)}%` : 'None'}
          </div>
        </div>
      </div>

      {isOvervalued && (
        <div className="space-y-3 mb-4">
          <div className="bg-dark-700 p-3 rounded-lg">
            <span className="text-dark-400 text-sm">Government Response: </span>
            <span className="text-dark-200 text-sm">Ration foreign exchange, require permits</span>
          </div>
          <div className="bg-dark-700 p-3 rounded-lg">
            <span className="text-dark-400 text-sm">Market Response: </span>
            <span className="text-dark-200 text-sm">Black market emerges at true rate</span>
          </div>
          <div className="bg-dark-700 p-3 rounded-lg">
            <span className="text-dark-400 text-sm">Trade Effect: </span>
            <span className="text-dark-200 text-sm">Exports decline, imports surge (at official rate)</span>
          </div>
        </div>
      )}

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "The only people who are
          too dull to grasp what is really going on...let themselves be fooled by the
          bureaucratic terminology." The "shortage" is created by the price control itself.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      {/* Introduction */}
      <p className="text-lg text-dark-100 mb-6">
        Chapter XXXI examines government manipulation of money and credit. Mises
        traces the evolution from metallic standards to fiat money and shows how
        monetary intervention distorts the economy.
      </p>

      <Callout type="concept" title="Central Theme">
        Money emerges from market practices, not government decree. All attempts
        to manipulate currency and credit fail because they ignore underlying
        economic reality. The apparent benefits are temporary; the costs are permanent.
      </Callout>

      {/* Section 1: Government and Currency */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        1. Government and Currency
      </h2>

      <p className="text-dark-200 mb-4">
        Government's monetary role is limited to defining legal tender and enforcing
        contracts. It cannot create money's value—that emerges from market participants'
        willingness to accept it in exchange.
      </p>

      <GreshamsLawDemo />

      <Callout type="key-point" title="The Constraint of Sound Money">
        A metallic standard "appears as an obstacle to all attempts to interfere
        with the market phenomena by monetary policies." This is precisely why
        governments abandoned it.
      </Callout>

      {/* Section 2: Legal Tender and Debasement */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        2. Currency Devaluation
      </h2>

      <p className="text-dark-200 mb-4">
        Governments devalue currency to gain competitive trade advantages and to
        reduce real wages without confronting unions. But the advertised benefits
        are largely illusory.
      </p>

      <DevaluationDemo />

      <CardGrid>
        <Card title="The Debtor's Windfall" variant="default">
          <p className="text-dark-300">
            Devaluation favors existing debtors at creditors' expense. But lenders
            anticipate this, demanding higher interest rates that make future
            borrowing more expensive.
          </p>
        </Card>
        <Card title="The Competitive Trap" variant="warning">
          <p className="text-dark-300">
            If one country gains by devaluation, all countries have incentive to
            follow. When everyone devalues, no one gains trade advantage—everyone
            just has weaker currency.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: Credit Expansion */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        3. Credit Expansion
      </h2>

      <p className="text-dark-200 mb-4">
        Credit expansion is the government's primary tool for manipulating the
        economy. By artificially lowering interest rates, it stimulates investment
        beyond what real savings can support—creating the boom-bust cycle.
      </p>

      <CreditExpansionDemo />

      <Callout type="warning" title="The Inevitability of the Bust">
        Credit expansion cannot permanently lower interest rates or create sustainable
        prosperity. The boom represents malinvestment—resources directed to projects
        that cannot be completed with available savings. The bust is the correction.
      </Callout>

      {/* Section 4: Foreign Exchange Control */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        4. Foreign Exchange Control
      </h2>

      <p className="text-dark-200 mb-4">
        When governments fix exchange rates above market levels, they create
        artificial "shortages" of foreign currency. The solution—rationing and
        permits—merely conceals the underlying problem.
      </p>

      <ForexControlDemo />

      <p className="text-dark-200 mb-4">
        Black markets emerge at the true exchange rate. Barter arrangements and
        clearing agreements between nations cannot eliminate real exchange rate
        adjustments—they merely obscure them.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Key Takeaways
      </h2>

      <div className="space-y-4">
        <Callout type="summary" title="1. Money's Value Comes from Markets">
          Government can declare legal tender but cannot create money's value.
          Gresham's Law frustrates attempts to overvalue currency—people always
          spend the overvalued money first.
        </Callout>

        <Callout type="summary" title="2. Devaluation Benefits Are Temporary">
          Trade advantages from devaluation depend on others not responding.
          When everyone devalues, no one gains. The permanent effects are higher
          import prices and reduced purchasing power.
        </Callout>

        <Callout type="summary" title="3. Credit Expansion Causes Boom-Bust">
          Artificially low interest rates stimulate unsustainable investment.
          The boom is malinvestment; the bust is the inevitable correction when
          credit expansion stops.
        </Callout>

        <Callout type="summary" title="4. Exchange Controls Create Shortages">
          Fixing exchange rates above market levels creates artificial scarcity.
          Price controls on foreign exchange work no better than price controls
          on anything else—they create shortages and black markets.
        </Callout>
      </div>
    </LessonLayout>
  );
}
