import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing calculation as a compass
function CalculationCompassDemo() {
  const [selectedVenture, setSelectedVenture] = useState<number | null>(null);

  const ventures = [
    {
      name: 'Organic Bakery',
      costs: { ingredients: 15000, labor: 25000, rent: 8000, equipment: 5000 },
      expectedRevenue: 65000,
    },
    {
      name: 'Tech Repair Shop',
      costs: { parts: 12000, labor: 30000, rent: 10000, equipment: 8000 },
      expectedRevenue: 55000,
    },
    {
      name: 'Luxury Car Wash',
      costs: { supplies: 5000, labor: 20000, rent: 15000, equipment: 25000 },
      expectedRevenue: 50000,
    },
  ];

  const getTotal = (costs: Record<string, number>) =>
    Object.values(costs).reduce((a, b) => a + b, 0);

  const getProfit = (v: typeof ventures[0]) => v.expectedRevenue - getTotal(v.costs);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Compass of Production</h4>
      <p className="text-dark-400 text-sm mb-4">
        An entrepreneur considers three ventures. Monetary calculation reveals which path to take.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {ventures.map((v, i) => {
          const profit = getProfit(v);
          const isProfitable = profit > 0;
          return (
            <button
              key={i}
              onClick={() => setSelectedVenture(selectedVenture === i ? null : i)}
              className={`p-4 rounded-lg text-left transition-all ${
                selectedVenture === i
                  ? isProfitable
                    ? 'bg-green-600 text-white ring-2 ring-green-400'
                    : 'bg-red-600 text-white ring-2 ring-red-400'
                  : 'bg-dark-900 hover:bg-dark-700'
              }`}
            >
              <h5 className={`font-medium mb-2 ${selectedVenture === i ? 'text-white' : 'text-dark-200'}`}>
                {v.name}
              </h5>
              <div className={`text-sm ${selectedVenture === i ? 'text-white/80' : 'text-dark-400'}`}>
                Expected profit:
              </div>
              <div className={`text-lg font-bold ${
                selectedVenture === i
                  ? 'text-white'
                  : isProfitable
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}>
                ${profit.toLocaleString()}
              </div>
            </button>
          );
        })}
      </div>

      {selectedVenture !== null && (
        <div className="bg-dark-900 rounded-lg p-4 animate-fadeIn">
          <h5 className="text-dark-100 font-medium mb-3">
            {ventures[selectedVenture].name} - Detailed Calculation
          </h5>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="text-dark-400 text-sm block mb-2">Expected Costs</span>
              {Object.entries(ventures[selectedVenture].costs).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm mb-1">
                  <span className="text-dark-300 capitalize">{key}</span>
                  <span className="text-red-400 font-mono">${value.toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t border-dark-700 pt-1 mt-2 flex justify-between font-medium">
                <span className="text-dark-200">Total Costs</span>
                <span className="text-red-400">${getTotal(ventures[selectedVenture].costs).toLocaleString()}</span>
              </div>
            </div>
            <div>
              <span className="text-dark-400 text-sm block mb-2">Expected Revenue</span>
              <div className="text-2xl font-bold text-green-400 mb-4">
                ${ventures[selectedVenture].expectedRevenue.toLocaleString()}
              </div>
              <div className={`p-3 rounded-lg ${
                getProfit(ventures[selectedVenture]) > 0
                  ? 'bg-green-500/20'
                  : 'bg-red-500/20'
              }`}>
                <span className="text-dark-300 text-sm block">Net Result</span>
                <span className={`text-xl font-bold ${
                  getProfit(ventures[selectedVenture]) > 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {getProfit(ventures[selectedVenture]) > 0 ? '+' : ''}
                  ${getProfit(ventures[selectedVenture]).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        "Every single step of entrepreneurial activities is subject to scrutiny by monetary calculation."
      </p>
    </div>
  );
}

// Interactive demo showing capital accounting
function CapitalAccountingDemo() {
  const [period, setPeriod] = useState<'start' | 'end'>('start');

  const startingCapital = {
    cash: 50000,
    inventory: 80000,
    equipment: 120000,
    receivables: 30000,
  };

  const endingCapital = {
    cash: 65000,
    inventory: 95000,
    equipment: 110000,
    receivables: 45000,
  };

  const getTotal = (cap: Record<string, number>) => Object.values(cap).reduce((a, b) => a + b, 0);
  const startTotal = getTotal(startingCapital);
  const endTotal = getTotal(endingCapital);
  const change = endTotal - startTotal;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Capital Accounting: Measuring Success</h4>
      <p className="text-dark-400 text-sm mb-4">
        Capital accounting compares the money value of assets at two points in time to reveal profit or loss.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setPeriod('start')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            period === 'start'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          📅 January 1st
        </button>
        <button
          onClick={() => setPeriod('end')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            period === 'end'
              ? 'bg-purple-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          📅 December 31st
        </button>
      </div>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <h5 className="text-dark-300 text-sm mb-3">
          Capital Position - {period === 'start' ? 'Beginning of Year' : 'End of Year'}
        </h5>
        <div className="space-y-2">
          {Object.entries(period === 'start' ? startingCapital : endingCapital).map(([key, value]) => {
            const startVal = startingCapital[key as keyof typeof startingCapital];
            const endVal = endingCapital[key as keyof typeof endingCapital];
            const diff = endVal - startVal;
            return (
              <div key={key} className="flex justify-between items-center">
                <span className="text-dark-300 capitalize">{key}</span>
                <div className="flex items-center gap-3">
                  <span className={`font-mono ${
                    period === 'start' ? 'text-blue-400' : 'text-purple-400'
                  }`}>
                    ${value.toLocaleString()}
                  </span>
                  {period === 'end' && (
                    <span className={`text-xs ${diff >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      ({diff >= 0 ? '+' : ''}{diff.toLocaleString()})
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          <div className="border-t border-dark-700 pt-2 mt-2 flex justify-between font-medium">
            <span className="text-dark-100">Total Capital</span>
            <span className={period === 'start' ? 'text-blue-400' : 'text-purple-400'}>
              ${(period === 'start' ? startTotal : endTotal).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className={`rounded-lg p-4 ${change >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-dark-300 text-sm block">Annual Result</span>
            <span className={`text-2xl font-bold ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {change >= 0 ? 'PROFIT' : 'LOSS'}: ${Math.abs(change).toLocaleString()}
            </span>
          </div>
          <div className="text-right">
            <span className="text-dark-400 text-sm block">Return on Capital</span>
            <span className={`text-lg font-bold ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {((change / startTotal) * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        "Capital accounting establishes the money prices of the available means and confronts this total
        with the changes brought about by action... making success and failure ascertainable."
      </p>
    </div>
  );
}

// Interactive demo showing individual vs collective calculation
function IndividualVsCollectiveDemo() {
  const [view, setView] = useState<'individual' | 'aggregate'>('individual');

  const individuals = [
    { name: 'Alice (Bakery)', profit: 45000 },
    { name: 'Bob (Auto Shop)', profit: 62000 },
    { name: 'Carol (Consulting)', profit: -15000 },
    { name: 'David (Restaurant)', profit: 28000 },
    { name: 'Eve (Retail)', profit: -8000 },
  ];

  const total = individuals.reduce((sum, ind) => sum + ind.profit, 0);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Individual vs. Collective Calculation</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('individual')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'individual'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          👤 Individual Results
        </button>
        <button
          onClick={() => setView('aggregate')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'aggregate'
              ? 'bg-amber-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          📊 Aggregate "Statistics"
        </button>
      </div>

      {view === 'individual' ? (
        <div className="space-y-3">
          {individuals.map((ind, i) => (
            <div key={i} className="bg-dark-900 rounded-lg p-3 flex justify-between items-center">
              <span className="text-dark-200">{ind.name}</span>
              <div className="flex items-center gap-3">
                <span className={`font-mono font-bold ${
                  ind.profit >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {ind.profit >= 0 ? '+' : ''}${ind.profit.toLocaleString()}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  ind.profit >= 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {ind.profit >= 0 ? 'SUCCESS' : 'FAILURE'}
                </span>
              </div>
            </div>
          ))}
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
            <p className="text-dark-300 text-sm">
              Each result tells a <strong className="text-green-400">meaningful story</strong>: Alice's bakery
              is thriving, Carol's consulting venture failed. These individual outcomes guide real decisions.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4 text-center">
            <span className="text-dark-400 text-sm block mb-2">"Total Business Profit" in Region</span>
            <span className="text-3xl font-bold text-amber-400">${total.toLocaleString()}</span>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <h5 className="text-amber-400 font-medium mb-2">What Does This Number Mean?</h5>
            <ul className="space-y-2 text-dark-300 text-sm">
              <li>• It tells Carol nothing about whether to continue her consulting business</li>
              <li>• It provides no guidance for any individual's decisions</li>
              <li>• It masks the fact that 2 businesses are failing while 3 succeed</li>
              <li>• It cannot be "acted upon" by anyone</li>
            </ul>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <p className="text-dark-300 text-sm">
              "All its results refer to the actions of individuals only... Monetary calculation is
              <strong className="text-red-400"> entirely inapplicable</strong> for any consideration which
              does not look at things from the point of view of individuals."
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive demo showing calculation and civilization
function CivilizationDemo() {
  const [layer, setLayer] = useState(0);

  const layers = [
    {
      title: 'Physical Measurement',
      icon: '📏',
      examples: ['Weight in kilograms', 'Distance in meters', 'Temperature in Celsius'],
      insight: 'We can measure physical properties precisely...',
    },
    {
      title: 'Technical Application',
      icon: '⚙️',
      examples: ['Bridge load capacity', 'Engine horsepower', 'Circuit voltage'],
      insight: '...and apply these measurements to engineering...',
    },
    {
      title: 'Economic Calculation',
      icon: '💰',
      examples: ['Cost of materials', 'Value of output', 'Profit or loss'],
      insight: '...but only economic calculation tells us WHETHER to build!',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Foundation of Quantitative Civilization</h4>
      <p className="text-dark-400 text-sm mb-4">
        Click through the layers to see how economic calculation enables all practical measurement.
      </p>

      <div className="flex gap-2 mb-6">
        {layers.map((l, i) => (
          <button
            key={i}
            onClick={() => setLayer(i)}
            className={`flex-1 px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
              layer === i
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {l.icon} {l.title}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{layers[layer].icon}</span>
          <div>
            <h5 className="text-dark-100 font-medium">{layers[layer].title}</h5>
            <p className="text-dark-400 text-sm">{layers[layer].insight}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {layers[layer].examples.map((ex, i) => (
            <div key={i} className="bg-dark-800 rounded-lg p-3 text-center">
              <span className="text-dark-300 text-sm">{ex}</span>
            </div>
          ))}
        </div>
      </div>

      {layer === 2 && (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 animate-fadeIn">
          <h5 className="text-primary-400 font-medium mb-2">The Key Insight</h5>
          <p className="text-dark-300 text-sm">
            "The measurements of physics and chemistry make sense for practical action only because
            there is economic calculation." We can measure a bridge's load capacity perfectly—but should
            we build this bridge <em>at all</em>? Only economic calculation can answer that.
          </p>
        </div>
      )}

      <div className="mt-4 p-4 bg-dark-900 rounded-lg">
        <p className="text-dark-300 text-sm text-center italic">
          "Our civilization is inseparably linked with our methods of economic calculation.
          It would perish if we were to abandon this most precious intellectual tool of acting."
        </p>
      </div>
    </div>
  );
}

// Interactive demo showing double-entry bookkeeping
function BookkeepingDemo() {
  const [showEntries, setShowEntries] = useState(false);

  const transactions = [
    {
      description: 'Sold goods for cash',
      debit: { account: 'Cash', amount: 5000 },
      credit: { account: 'Revenue', amount: 5000 },
    },
    {
      description: 'Paid wages',
      debit: { account: 'Wage Expense', amount: 2000 },
      credit: { account: 'Cash', amount: 2000 },
    },
    {
      description: 'Purchased inventory on credit',
      debit: { account: 'Inventory', amount: 3000 },
      credit: { account: 'Accounts Payable', amount: 3000 },
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Double-Entry Bookkeeping</h4>
      <p className="text-dark-400 text-sm mb-4">
        Goethe called double-entry bookkeeping "one of the finest inventions of the human mind."
      </p>

      <button
        onClick={() => setShowEntries(!showEntries)}
        className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-500 transition-colors mb-4"
      >
        {showEntries ? 'Hide' : 'Show'} How It Works
      </button>

      {showEntries && (
        <div className="space-y-4 animate-fadeIn">
          {transactions.map((t, i) => (
            <div key={i} className="bg-dark-900 rounded-lg p-4">
              <p className="text-dark-300 text-sm mb-3">{t.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 rounded-lg p-3">
                  <span className="text-green-400 text-xs block mb-1">DEBIT (+)</span>
                  <span className="text-dark-200 block">{t.debit.account}</span>
                  <span className="text-green-400 font-mono">${t.debit.amount.toLocaleString()}</span>
                </div>
                <div className="bg-red-500/10 rounded-lg p-3">
                  <span className="text-red-400 text-xs block mb-1">CREDIT (−)</span>
                  <span className="text-dark-200 block">{t.credit.account}</span>
                  <span className="text-red-400 font-mono">${t.credit.amount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
            <h5 className="text-primary-400 font-medium mb-2">Why It Matters</h5>
            <ul className="space-y-2 text-dark-300 text-sm">
              <li>✓ Every transaction is recorded twice—ensuring books balance</li>
              <li>✓ Errors are caught immediately through imbalance</li>
              <li>✓ Complete picture of assets, liabilities, income, expenses</li>
              <li>✓ Enables calculation of profit/loss at any time</li>
            </ul>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        "It is monetary calculation that made arithmetic a tool in the struggle for a better life."
      </p>
    </div>
  );
}

// Interactive demo showing evolution of economic science
function PraxeologyEvolutionDemo() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      era: 'Early Observations',
      period: '16th-17th Century',
      discoveries: ['Gresham\'s Law (bad money drives out good)', 'Primitive quantity theory of money', 'Basic supply and demand'],
      insight: 'Scholars noticed patterns in economic behavior',
    },
    {
      era: 'Classical Economics',
      period: '18th-19th Century',
      discoveries: ['Division of labor', 'Comparative advantage', 'Theory of value'],
      insight: 'Systematic analysis of market phenomena',
    },
    {
      era: 'Marginalist Revolution',
      period: 'Late 19th Century',
      discoveries: ['Marginal utility', 'Subjective value', 'Opportunity cost'],
      insight: 'Economics reconceived around individual choice',
    },
    {
      era: 'Praxeology',
      period: '20th Century',
      discoveries: ['Action as the fundamental category', 'Universal laws of human choice', 'Integration of all purposeful behavior'],
      insight: 'A complete science of human action',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Evolution of Economic Science</h4>
      <p className="text-dark-400 text-sm mb-4">
        Monetary calculation enabled the development of systematic economic theory.
      </p>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {stages.map((s, i) => (
          <button
            key={i}
            onClick={() => setStage(i)}
            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
              stage === i
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {s.era}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-dark-100 font-medium">{stages[stage].era}</h5>
          <span className="text-dark-400 text-sm">{stages[stage].period}</span>
        </div>

        <div className="space-y-2 mb-4">
          {stages[stage].discoveries.map((d, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-primary-400">→</span>
              <span className="text-dark-300 text-sm">{d}</span>
            </div>
          ))}
        </div>

        <div className="bg-primary-500/10 rounded-lg p-3">
          <p className="text-dark-300 text-sm">{stages[stage].insight}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setStage(Math.max(0, stage - 1))}
          disabled={stage === 0}
          className="px-4 py-2 bg-dark-700 text-dark-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-dark-600"
        >
          ← Previous
        </button>
        <div className="flex gap-1">
          {stages.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === stage ? 'bg-primary-500' : 'bg-dark-600'}`}
            />
          ))}
        </div>
        <button
          onClick={() => setStage(Math.min(stages.length - 1, stage + 1))}
          disabled={stage === stages.length - 1}
          className="px-4 py-2 bg-dark-700 text-dark-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-dark-600"
        >
          Next →
        </button>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        "Praxeology and economics... could only emerge when acting man had succeeded in creating
        methods of thinking that made it possible to calculate his actions."
      </p>
    </div>
  );
}

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Chapter XIII concludes Part Three by examining monetary calculation not merely as a technique
        but as a <em>method of thinking</em>—one that shapes our entire civilization. Mises reveals
        how calculation enables rational action and made economic science itself possible.
      </p>

      <Callout type="definition" title="Monetary Calculation">
        "Monetary calculation is the guiding star of action under the social system of division of labor.
        It is the compass of the man embarking upon production."
      </Callout>

      {/* Calculation as Method of Thinking */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Calculation as a Method of Thinking</h2>

      <p className="text-dark-200 mb-4">
        Monetary calculation is not merely an accounting technique. It is "a mode of computation designed
        for ascertaining private wealth and income and private profits and losses." It enables entrepreneurs
        to distinguish profitable ventures from unprofitable ones—to see which paths will satisfy consumers
        and which will waste resources.
      </p>

      <CalculationCompassDemo />

      <p className="text-dark-200 mb-4">
        Every entrepreneurial decision is "subject to scrutiny by monetary calculation." Before acting,
        the entrepreneur calculates expected costs and revenues. After acting, capital accounting reveals
        whether the venture succeeded or failed.
      </p>

      <CardGrid>
        <Card title="Pre-Calculation" variant="default">
          Before production begins, the entrepreneur estimates costs and projects revenues.
          Will consumers pay enough to cover expenses and leave profit?
        </Card>
        <Card title="Post-Calculation" variant="primary">
          After production, capital accounting compares the starting position to the ending position.
          Did capital increase (profit) or decrease (loss)?
        </Card>
      </CardGrid>

      {/* Capital Accounting */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Capital Accounting</h2>

      <p className="text-dark-200 mb-4">
        "Monetary calculation reaches its full perfection in capital accounting." This system establishes
        the money value of all available resources, then compares this total over time. The difference
        reveals profit or loss—success or failure made measurable.
      </p>

      <CapitalAccountingDemo />

      <Callout type="insight" title="Why 'Capitalism'">
        "The very term 'capitalism' expresses the characteristic feature of capitalism: the pre-eminent
        role capital accounting plays in the conduct of production." Capitalism isn't about who owns
        what—it's about calculating with capital.
      </Callout>

      {/* Individualistic Nature */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Individualistic Character of Calculation</h2>

      <p className="text-dark-200 mb-4">
        A crucial insight: monetary calculation <em>only makes sense from an individual perspective</em>.
        When we add up the profits and losses of many individuals, the sum tells us nothing useful.
        There is no "collective" that can act on aggregate statistics.
      </p>

      <IndividualVsCollectiveDemo />

      <p className="text-dark-200 mb-4">
        This is why concepts like "national wealth" or "social welfare" are so misleading. They aggregate
        individual results into numbers that no one can act upon. The baker needs to know whether <em>her</em>
        bakery is profitable, not whether "total business profits" in her city went up or down.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">What Aggregates Conceal</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h5 className="text-red-400 font-medium mb-2">❌ Aggregate Statistics</h5>
            <ul className="space-y-1 text-dark-300 text-sm">
              <li>• "GDP grew 3%"</li>
              <li>• "Average income rose"</li>
              <li>• "National savings increased"</li>
            </ul>
            <p className="text-dark-400 text-xs mt-2">
              These tell no individual what to do.
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <h5 className="text-green-400 font-medium mb-2">✓ Individual Calculation</h5>
            <ul className="space-y-1 text-dark-300 text-sm">
              <li>• "My bakery made $45,000 profit"</li>
              <li>• "This venture will lose money"</li>
              <li>• "I should expand production"</li>
            </ul>
            <p className="text-dark-400 text-xs mt-2">
              These guide actual decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Calculation and Civilization */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Calculation and Civilization</h2>

      <p className="text-dark-200 mb-4">
        Mises makes a remarkable claim: our entire "quantitative and computing civilization" depends on
        monetary calculation. Without it, even the measurements of physics and chemistry would lose their
        practical significance.
      </p>

      <CivilizationDemo />

      <p className="text-dark-200 mb-4">
        Consider: we can measure a bridge's load capacity with perfect precision. But <em>should</em> we
        build this bridge? Is it worth the resources? Only economic calculation can answer. Physical
        measurement tells us what is possible; economic calculation tells us what is <em>worthwhile</em>.
      </p>

      <BookkeepingDemo />

      {/* Evolution of Economic Science */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Economic Calculation and the Science of Human Action</h2>

      <p className="text-dark-200 mb-4">
        The development of monetary calculation was "the necessary condition for the establishment of a
        systematic and logically coherent science of human action." Before people could calculate their
        actions, they couldn't analyze them systematically.
      </p>

      <PraxeologyEvolutionDemo />

      <CardGrid>
        <Card title="Calculation Enabled Theory" variant="default">
          The classical economists studied calculated action because that's what monetary economies made
          visible. Their theories described how calculating actors behave.
        </Card>
        <Card title="Theory Expanded to All Action" variant="primary">
          Eventually, economists realized their principles applied to all purposeful behavior—even without
          money. But it was monetary calculation that made this insight possible.
        </Card>
      </CardGrid>

      <Callout type="warning" title="A Civilizational Warning">
        "Our civilization is inseparably linked with our methods of economic calculation. It would perish
        if we were to abandon this most precious intellectual tool of acting."
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Monetary calculation is a <em>method of thinking</em>—a way of determining whether actions will satisfy consumers or waste resources.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Capital accounting compares the money value of assets over time, making profit and loss—success and failure—measurable.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Calculation is inherently individualistic—aggregate statistics like "national wealth" are meaningless for guiding action.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Double-entry bookkeeping is "one of the finest inventions of the human mind"—it makes systematic profit/loss determination possible.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Even physical measurements only matter for practical action because economic calculation tells us whether to act.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">6.</span>
            <span>Economic science itself emerged from the practice of monetary calculation—theory followed practice.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">7.</span>
            <span>Our entire civilization depends on this "most precious intellectual tool." Abandoning it would mean civilizational collapse.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        With Part Three complete, we now understand why economic calculation is central to all economic
        questions. Part Four—<em>Catallactics</em>—applies these insights to analyze the market economy
        in detail: how prices form, how production is coordinated, and how the market allocates resources
        without central direction.
      </p>
    </LessonLayout>
  );
}
