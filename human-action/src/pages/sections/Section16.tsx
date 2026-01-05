import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing the pricing process
function PricingProcessDemo() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Price Discrepancy Exists',
      description: 'Widget sells for $50 in City A but $80 in City B',
      entrepreneur: 'waiting',
      priceA: 50,
      priceB: 80,
    },
    {
      title: 'Entrepreneur Acts',
      description: 'Entrepreneur buys in A, ships to B, sells for profit',
      entrepreneur: 'acting',
      priceA: 55,
      priceB: 75,
    },
    {
      title: 'Prices Converge',
      description: 'Buying raises price in A, selling lowers price in B',
      entrepreneur: 'profiting',
      priceA: 60,
      priceB: 70,
    },
    {
      title: 'Equilibrium Approached',
      description: 'Price difference now equals shipping cost—no more profit',
      entrepreneur: 'done',
      priceA: 63,
      priceB: 67,
    },
  ];

  const current = steps[step];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Pricing Process</h4>
      <p className="text-dark-400 text-sm mb-4">
        Entrepreneurs don't just accept prices—they actively move them toward equilibrium.
      </p>

      <div className="flex gap-2 mb-6">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`flex-1 px-2 py-2 rounded-lg text-xs font-medium transition-colors ${
              step === i
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Step {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <h5 className="text-dark-100 font-medium mb-2">{current.title}</h5>
        <p className="text-dark-300 text-sm mb-4">{current.description}</p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-center">
            <span className="text-dark-400 text-xs block mb-1">City A</span>
            <div className="bg-dark-800 rounded-lg p-3">
              <span className="text-2xl font-bold text-blue-400">${current.priceA}</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl">
              {current.entrepreneur === 'waiting' && '👀'}
              {current.entrepreneur === 'acting' && '🚚'}
              {current.entrepreneur === 'profiting' && '💰'}
              {current.entrepreneur === 'done' && '✓'}
            </span>
            <span className="text-dark-400 text-xs mt-1">
              {current.entrepreneur === 'waiting' && 'Watching'}
              {current.entrepreneur === 'acting' && 'Arbitrage'}
              {current.entrepreneur === 'profiting' && 'Profit!'}
              {current.entrepreneur === 'done' && 'Done'}
            </span>
          </div>

          <div className="flex-1 text-center">
            <span className="text-dark-400 text-xs block mb-1">City B</span>
            <div className="bg-dark-800 rounded-lg p-3">
              <span className="text-2xl font-bold text-green-400">${current.priceB}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <span className="text-dark-400 text-sm">
            Price Gap: <strong className={step < 3 ? 'text-amber-400' : 'text-green-400'}>
              ${current.priceB - current.priceA}
            </strong>
            {step === 3 && <span className="text-dark-500"> (= shipping cost)</span>}
          </span>
        </div>
      </div>

      <p className="text-dark-400 text-sm italic">
        "Entrepreneurs buy where and when they deem prices too low, and sell where and when they deem
        prices too high." This activity continuously adjusts the market.
      </p>
    </div>
  );
}

// Interactive demo showing valuation vs appraisement
function ValuationAppraisementDemo() {
  const [view, setView] = useState<'valuation' | 'appraisement'>('valuation');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Valuation vs. Appraisement</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('valuation')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'valuation'
              ? 'bg-purple-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ❤️ Valuation
        </button>
        <button
          onClick={() => setView('appraisement')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'appraisement'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          📊 Appraisement
        </button>
      </div>

      {view === 'valuation' ? (
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <h5 className="text-purple-400 font-medium mb-3">Subjective Value Judgment</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4">
            <p className="text-dark-200 text-center">
              "I prefer <span className="text-purple-400 font-bold">coffee</span> to{' '}
              <span className="text-dark-400">tea</span>"
            </p>
          </div>
          <ul className="space-y-2 text-dark-300 text-sm">
            <li>• Expresses a <em>difference</em> in personal value</li>
            <li>• Cannot be measured in units</li>
            <li>• Unique to each individual</li>
            <li>• The foundation of all economic action</li>
          </ul>
          <div className="mt-4 bg-dark-900 rounded-lg p-3">
            <p className="text-dark-400 text-xs">
              "Valuation is a value judgment expressive of a difference in value."
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <h5 className="text-blue-400 font-medium mb-3">Anticipation of Market Price</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4">
            <p className="text-dark-200 text-center">
              "This painting will sell for{' '}
              <span className="text-blue-400 font-bold">~$50,000</span> at auction"
            </p>
          </div>
          <ul className="space-y-2 text-dark-300 text-sm">
            <li>• Predicts what the <em>market</em> will determine</li>
            <li>• Expressed in money terms</li>
            <li>• Can be objectively verified (was the prediction right?)</li>
            <li>• Essential for entrepreneurial calculation</li>
          </ul>
          <div className="mt-4 bg-dark-900 rounded-lg p-3">
            <p className="text-dark-400 text-xs">
              "Appraisement is the anticipation of an expected fact."
            </p>
          </div>
        </div>
      )}

      <Callout type="insight" title="Why Both Matter">
        Consumers make purchasing decisions using both: their subjective valuations AND their
        appraisement of market prices. You might love coffee more than tea, but if coffee costs
        10x as much, you might buy tea anyway.
      </Callout>
    </div>
  );
}

// Interactive demo showing exchange and value disagreement
function ExchangeValueDemo() {
  const [showTrade, setShowTrade] = useState(false);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Exchange Reveals Value Disagreement</h4>
      <p className="text-dark-400 text-sm mb-4">
        Contrary to popular belief, trade occurs because parties <em>disagree</em> about value.
      </p>

      <button
        onClick={() => setShowTrade(!showTrade)}
        className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-500 transition-colors mb-4"
      >
        {showTrade ? 'Reset' : 'Show the Trade'}
      </button>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-dark-900 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">👨</span>
            <div>
              <h5 className="text-dark-200 font-medium">Seller (Farmer)</h5>
              <p className="text-dark-400 text-xs">Has apples, wants money</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-dark-400">Values apples at:</span>
              <span className="text-dark-200">$2/lb</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-dark-400">Appraises money at:</span>
              <span className="text-green-400">Higher than $2/lb of apples</span>
            </div>
          </div>
          {showTrade && (
            <div className="mt-3 p-2 bg-green-500/20 rounded text-center animate-fadeIn">
              <span className="text-green-400 text-sm">Gives apples, receives $3 ✓</span>
            </div>
          )}
        </div>

        <div className="bg-dark-900 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">👩</span>
            <div>
              <h5 className="text-dark-200 font-medium">Buyer (Consumer)</h5>
              <p className="text-dark-400 text-xs">Has money, wants apples</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-dark-400">Values apples at:</span>
              <span className="text-dark-200">$4/lb</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-dark-400">Appraises money at:</span>
              <span className="text-amber-400">Lower than apples</span>
            </div>
          </div>
          {showTrade && (
            <div className="mt-3 p-2 bg-green-500/20 rounded text-center animate-fadeIn">
              <span className="text-green-400 text-sm">Gives $3, receives apples ✓</span>
            </div>
          )}
        </div>
      </div>

      {showTrade && (
        <div className="mt-4 bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 animate-fadeIn">
          <h5 className="text-primary-400 font-medium mb-2">Both Win!</h5>
          <p className="text-dark-300 text-sm">
            The farmer values $3 more than his apples. The consumer values apples more than her $3.
            <strong className="text-primary-400"> They disagree about value</strong>—that's exactly
            why they trade. If they agreed apples = $3, there would be no point in exchanging!
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo showing higher-order goods pricing
function HigherOrderPricingDemo() {
  const [breadPrice, setBreadPrice] = useState(5);

  const flourPrice = Math.round(breadPrice * 0.3 * 100) / 100;
  const wheatPrice = Math.round(flourPrice * 0.4 * 100) / 100;
  const landRent = Math.round(wheatPrice * 0.5 * 100) / 100;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Prices of Higher-Order Goods</h4>
      <p className="text-dark-400 text-sm mb-4">
        Consumer goods prices determine factor prices, not the other way around.
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Consumer's bread price: <strong className="text-primary-400">${breadPrice.toFixed(2)}</strong>
        </label>
        <input
          type="range"
          min="2"
          max="10"
          step="0.5"
          value={breadPrice}
          onChange={(e) => setBreadPrice(parseFloat(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <div className="w-12 text-center">
            <span className="text-2xl">🍞</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-dark-200 text-sm">Bread (1st order)</span>
              <span className="text-primary-400 font-mono">${breadPrice.toFixed(2)}</span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary-500" style={{ width: `${breadPrice * 10}%` }} />
            </div>
          </div>
        </div>

        <div className="text-center text-dark-500">↑ determines ↑</div>

        <div className="flex items-center gap-4">
          <div className="w-12 text-center">
            <span className="text-2xl">🌾</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-dark-200 text-sm">Flour (2nd order)</span>
              <span className="text-amber-400 font-mono">${flourPrice.toFixed(2)}</span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500" style={{ width: `${flourPrice * 20}%` }} />
            </div>
          </div>
        </div>

        <div className="text-center text-dark-500">↑ determines ↑</div>

        <div className="flex items-center gap-4">
          <div className="w-12 text-center">
            <span className="text-2xl">🌱</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-dark-200 text-sm">Wheat (3rd order)</span>
              <span className="text-green-400 font-mono">${wheatPrice.toFixed(2)}</span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: `${wheatPrice * 40}%` }} />
            </div>
          </div>
        </div>

        <div className="text-center text-dark-500">↑ determines ↑</div>

        <div className="flex items-center gap-4">
          <div className="w-12 text-center">
            <span className="text-2xl">🏞️</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-dark-200 text-sm">Farmland rent (4th order)</span>
              <span className="text-blue-400 font-mono">${landRent.toFixed(2)}</span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: `${landRent * 80}%` }} />
            </div>
          </div>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        "It is ultimately always the subjective value judgments of individuals that determine the
        formation of prices"—starting with consumer goods and flowing back to factors.
      </p>
    </div>
  );
}

// Interactive demo showing cost accounting
function CostAccountingDemo() {
  const [perspective, setPerspective] = useState<'backward' | 'forward'>('backward');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Cost Accounting: Forward, Not Backward</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setPerspective('backward')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            perspective === 'backward'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ❌ Common Mistake
        </button>
        <button
          onClick={() => setPerspective('forward')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            perspective === 'forward'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ✓ Correct Approach
        </button>
      </div>

      {perspective === 'backward' ? (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">Looking Backward (Sunk Costs)</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4">
            <p className="text-dark-200 text-sm">
              "I paid <span className="text-red-400 font-bold">$100,000</span> for this machine,
              so my product must be worth at least that much!"
            </p>
          </div>
          <ul className="space-y-2 text-dark-300 text-sm">
            <li>❌ Past expenditures don't determine current value</li>
            <li>❌ What you paid is irrelevant to what buyers will pay</li>
            <li>❌ Sunk costs are sunk—they cannot be recovered</li>
            <li>❌ This thinking leads to holding onto losing investments</li>
          </ul>
        </div>
      ) : (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-3">Looking Forward (Opportunity Cost)</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4">
            <p className="text-dark-200 text-sm">
              "What can I <span className="text-green-400 font-bold">get</span> for this machine
              and its products in the <span className="text-green-400 font-bold">future</span>?"
            </p>
          </div>
          <ul className="space-y-2 text-dark-300 text-sm">
            <li>✓ Value depends on anticipated future prices</li>
            <li>✓ The relevant cost is the best alternative use</li>
            <li>✓ Past is past—only future matters for decisions</li>
            <li>✓ This thinking maximizes value going forward</li>
          </ul>
        </div>
      )}

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h5 className="text-dark-200 font-medium mb-2">The Entrepreneur's Question</h5>
        <p className="text-dark-300 text-sm">
          "What matters is not how much the firm paid for the inputs, but rather what the firm is
          likely to get when it sells the inventory in the future."
        </p>
      </div>
    </div>
  );
}

// Interactive demo showing competitive vs monopoly prices
function MonopolyPriceDemo() {
  const [scenario, setScenario] = useState<'competitive' | 'monopoly'>('competitive');
  const [restriction, setRestriction] = useState(0);

  const basePrice = 10;
  const baseQuantity = 100;
  const monopolyPrice = basePrice + restriction * 2;
  const monopolyQuantity = Math.max(20, baseQuantity - restriction * 15);
  const competitiveRevenue = basePrice * baseQuantity;
  const monopolyRevenue = monopolyPrice * monopolyQuantity;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Competitive vs. Monopoly Prices</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setScenario('competitive'); setRestriction(0); }}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'competitive'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Competitive Price
        </button>
        <button
          onClick={() => setScenario('monopoly')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'monopoly'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Monopoly Price
        </button>
      </div>

      {scenario === 'competitive' ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-3">Competitive Pricing</h5>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-dark-400 text-xs block">Price</span>
              <span className="text-green-400 text-xl font-bold">${basePrice}</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-dark-400 text-xs block">Quantity</span>
              <span className="text-green-400 text-xl font-bold">{baseQuantity}</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-dark-400 text-xs block">Revenue</span>
              <span className="text-green-400 text-xl font-bold">${competitiveRevenue}</span>
            </div>
          </div>
          <p className="text-dark-300 text-sm">
            Under competition, the seller supplies the entire quantity demanded at the market-clearing
            price. There is no withholding of supply.
          </p>
        </div>
      ) : (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">Monopoly Pricing</h5>

          <div className="mb-4">
            <label className="text-dark-300 text-sm block mb-2">
              Supply Restriction: <strong className="text-red-400">{restriction * 15}%</strong>
            </label>
            <input
              type="range"
              min="0"
              max="4"
              value={restriction}
              onChange={(e) => setRestriction(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-dark-400 text-xs block">Price</span>
              <span className="text-red-400 text-xl font-bold">${monopolyPrice}</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-dark-400 text-xs block">Quantity</span>
              <span className="text-red-400 text-xl font-bold">{monopolyQuantity}</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-dark-400 text-xs block">Revenue</span>
              <span className={`text-xl font-bold ${
                monopolyRevenue > competitiveRevenue ? 'text-green-400' : 'text-red-400'
              }`}>
                ${monopolyRevenue}
              </span>
            </div>
          </div>

          <p className="text-dark-300 text-sm">
            The monopolist <em>deliberately restricts supply</em> to raise price. This only works if
            demand is inelastic enough that higher prices more than offset lower quantity.
          </p>

          {monopolyRevenue > competitiveRevenue && (
            <div className="mt-3 p-2 bg-amber-500/20 rounded">
              <span className="text-amber-400 text-sm">
                ⚠️ Monopoly profit: ${monopolyRevenue - competitiveRevenue} above competitive level
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Interactive demo showing conditions for monopoly pricing
function MonopolyConditionsDemo() {
  const [conditions, setConditions] = useState({ sole: false, demand: false, nodiscrim: false });

  const allMet = conditions.sole && conditions.demand && conditions.nodiscrim;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Conditions for Monopoly Prices</h4>
      <p className="text-dark-400 text-sm mb-4">
        Monopoly status alone doesn't guarantee monopoly pricing. All conditions must be met.
      </p>

      <div className="space-y-3 mb-4">
        <button
          onClick={() => setConditions({ ...conditions, sole: !conditions.sole })}
          className={`w-full p-4 rounded-lg text-left transition-all ${
            conditions.sole
              ? 'bg-green-500/20 border border-green-500/50'
              : 'bg-dark-900 border border-dark-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className={`text-xl ${conditions.sole ? 'text-green-400' : 'text-dark-500'}`}>
              {conditions.sole ? '✓' : '○'}
            </span>
            <div>
              <h5 className={`font-medium ${conditions.sole ? 'text-green-400' : 'text-dark-300'}`}>
                Sole Seller
              </h5>
              <p className="text-dark-400 text-sm">Controls entire supply of the good</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setConditions({ ...conditions, demand: !conditions.demand })}
          className={`w-full p-4 rounded-lg text-left transition-all ${
            conditions.demand
              ? 'bg-green-500/20 border border-green-500/50'
              : 'bg-dark-900 border border-dark-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className={`text-xl ${conditions.demand ? 'text-green-400' : 'text-dark-500'}`}>
              {conditions.demand ? '✓' : '○'}
            </span>
            <div>
              <h5 className={`font-medium ${conditions.demand ? 'text-green-400' : 'text-dark-300'}`}>
                Inelastic Demand
              </h5>
              <p className="text-dark-400 text-sm">Higher prices don't reduce total revenue</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setConditions({ ...conditions, nodiscrim: !conditions.nodiscrim })}
          className={`w-full p-4 rounded-lg text-left transition-all ${
            conditions.nodiscrim
              ? 'bg-green-500/20 border border-green-500/50'
              : 'bg-dark-900 border border-dark-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className={`text-xl ${conditions.nodiscrim ? 'text-green-400' : 'text-dark-500'}`}>
              {conditions.nodiscrim ? '✓' : '○'}
            </span>
            <div>
              <h5 className={`font-medium ${conditions.nodiscrim ? 'text-green-400' : 'text-dark-300'}`}>
                No Price Discrimination
              </h5>
              <p className="text-dark-400 text-sm">Cannot charge different prices to different buyers</p>
            </div>
          </div>
        </button>
      </div>

      <div className={`rounded-lg p-4 ${
        allMet
          ? 'bg-red-500/10 border border-red-500/30'
          : 'bg-dark-900 border border-dark-700'
      }`}>
        <h5 className={`font-medium mb-2 ${allMet ? 'text-red-400' : 'text-dark-300'}`}>
          {allMet ? '⚠️ Monopoly Pricing Possible' : 'Monopoly Pricing Not Possible'}
        </h5>
        <p className="text-dark-400 text-sm">
          {allMet
            ? 'All conditions met—the seller can profit by restricting supply.'
            : 'Missing conditions prevent monopoly pricing. The seller must behave competitively.'}
        </p>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        "In a free market, only a few minerals and local network goods would have monopoly prices.
        In reality, it is government privileges that establish cartels and monopolies."
      </p>
    </div>
  );
}

// Interactive demo showing good will
function GoodWillDemo() {
  const [reputation, setReputation] = useState(50);

  const premiumCharge = Math.round(reputation / 10);
  const customerLoyalty = reputation > 70 ? 'High' : reputation > 40 ? 'Medium' : 'Low';

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Good Will: The Value of Reputation</h4>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Reputation Score: <strong className="text-primary-400">{reputation}</strong>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={reputation}
          onChange={(e) => setReputation(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <span className="text-dark-400 text-xs block mb-1">Price Premium</span>
          <span className="text-green-400 text-xl font-bold">+{premiumCharge}%</span>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <span className="text-dark-400 text-xs block mb-1">Customer Loyalty</span>
          <span className={`text-xl font-bold ${
            customerLoyalty === 'High' ? 'text-green-400' :
            customerLoyalty === 'Medium' ? 'text-amber-400' : 'text-red-400'
          }`}>{customerLoyalty}</span>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <span className="text-dark-400 text-xs block mb-1">New Customer Trust</span>
          <span className="text-primary-400 text-xl font-bold">{reputation}%</span>
        </div>
      </div>

      <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
        <h5 className="text-primary-400 font-medium mb-2">Good Will Is a Market Phenomenon</h5>
        <p className="text-dark-300 text-sm">
          Reputation accumulated through consistent quality creates competitive advantage.
          This "good will" allows firms to charge premiums and retain customers. It's an
          efficient market response to information asymmetries—no government certification needed.
        </p>
      </div>
    </div>
  );
}

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Chapter XVI examines prices in detail—how they form, what they communicate, and why they're
        essential for coordination. Mises covers everything from the basic pricing process to the
        controversial topic of monopoly prices.
      </p>

      <Callout type="definition" title="The Essence of Prices">
        Prices are historical facts—records of past exchanges. But their true importance lies in
        guiding future action. Entrepreneurs use current prices to anticipate future prices and
        direct production accordingly.
      </Callout>

      {/* The Pricing Process */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Pricing Process</h2>

      <p className="text-dark-200 mb-4">
        Prices don't emerge from abstract equilibrium—they're actively shaped by entrepreneurs seeking
        profit. When prices differ between markets, entrepreneurs buy low and sell high, pushing prices
        toward uniformity.
      </p>

      <PricingProcessDemo />

      <CardGrid>
        <Card title="Never Reaches Equilibrium" variant="default">
          "There are always profits to be earned by somebody." Markets constantly adjust but never
          reach the static equilibrium of textbooks.
        </Card>
        <Card title="Unequal Information" variant="primary">
          "The more enterprising and brighter individuals take the lead, others follow later."
          Price adjustment reflects differential alertness.
        </Card>
      </CardGrid>

      {/* Valuation and Appraisement */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Valuation and Appraisement</h2>

      <p className="text-dark-200 mb-4">
        Mises draws a crucial distinction between <em>valuation</em> (subjective preference) and
        <em>appraisement</em> (prediction of market price). Understanding both is essential for
        grasping how prices form.
      </p>

      <ValuationAppraisementDemo />

      <ExchangeValueDemo />

      {/* Higher-Order Goods */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Prices of Higher-Order Goods</h2>

      <p className="text-dark-200 mb-4">
        A common error is thinking that production costs determine prices. In reality, the causation
        runs the other way: consumer goods prices determine what entrepreneurs can pay for factors.
      </p>

      <HigherOrderPricingDemo />

      <Callout type="warning" title="Causation Runs Backward">
        It's not that bread is expensive because wheat is expensive. Rather, wheat is valuable
        because consumers value bread. Factor prices derive from anticipated product prices.
      </Callout>

      {/* Cost Accounting */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Cost Accounting</h2>

      <p className="text-dark-200 mb-4">
        For entrepreneurs, the relevant "cost" is not what they paid in the past but what they
        could get in the future. This forward-looking perspective is essential for rational
        decision-making.
      </p>

      <CostAccountingDemo />

      <p className="text-dark-200 mb-4">
        This explains why businesses sometimes sell at "below cost"—the historical cost is irrelevant.
        What matters is whether the sale price exceeds the best alternative use of the resources.
      </p>

      {/* Monopoly Prices */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Monopoly Prices</h2>

      <p className="text-dark-200 mb-4">
        Monopoly pricing occurs when a sole seller deliberately restricts supply to raise price.
        But monopoly status alone doesn't guarantee this—several conditions must be met.
      </p>

      <MonopolyPriceDemo />

      <MonopolyConditionsDemo />

      <CardGrid>
        <Card title="Rare in Free Markets" variant="default">
          Genuine monopoly pricing is rare without government intervention. Competition and
          substitutes usually prevent supply restriction.
        </Card>
        <Card title="Government Creates Monopolies" variant="warning">
          Patents, licenses, tariffs, and regulations are the primary sources of monopoly power
          in real economies.
        </Card>
      </CardGrid>

      {/* Good Will */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Good Will</h2>

      <p className="text-dark-200 mb-4">
        Reputation—"good will"—is a valuable asset that firms accumulate through consistent quality.
        It represents the market's own solution to information problems.
      </p>

      <GoodWillDemo />

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Prices are shaped by entrepreneurial action—buying low and selling high moves prices toward uniformity.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Valuation is subjective preference; appraisement is anticipation of market price. Both guide decisions.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Exchange occurs because parties <em>disagree</em> about value—both expect to gain.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Consumer goods prices determine factor prices, not the reverse. Causation flows from consumers to producers.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Cost accounting looks forward (opportunity cost), not backward (sunk cost). Past expenditures are irrelevant.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">6.</span>
            <span>Monopoly pricing requires sole seller, inelastic demand, and no price discrimination. It's rare in free markets.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">7.</span>
            <span>Good will (reputation) is a market-generated solution to information problems, allowing quality signals.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        With the theory of prices established, Chapter XVII examines <em>Indirect Exchange</em>—the
        emergence and function of money. We'll see why money is essential for a complex economy and
        how it transforms simple barter into the sophisticated market system.
      </p>
    </LessonLayout>
  );
}
