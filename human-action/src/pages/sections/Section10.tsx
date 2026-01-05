import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing ordinal vs cardinal valuation
function ValuationDemo() {
  const [scenario, setScenario] = useState<'exchange' | 'measurement'>('exchange');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Valuation Is Ordinal, Not Cardinal</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setScenario('exchange')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'exchange'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          What We Can Know
        </button>
        <button
          onClick={() => setScenario('measurement')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'measurement'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          What We Cannot Know
        </button>
      </div>

      {scenario === 'exchange' ? (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">Observable Facts</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4">
            <p className="text-dark-200 text-center">
              Alice trades <span className="text-amber-400 font-bold">5 oranges</span> for Bob's{' '}
              <span className="text-green-400 font-bold">8 apples</span>
            </p>
          </div>
          <div className="space-y-2 text-dark-300 text-sm">
            <p>✓ Alice values 8 apples <em>more than</em> 5 oranges</p>
            <p>✓ Bob values 5 oranges <em>more than</em> 8 apples</p>
            <p>✓ Both parties benefit (otherwise they wouldn't trade)</p>
          </div>
        </div>
      ) : (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">Impossible Claims</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4">
            <p className="text-dark-200 text-center">
              "Alice values apples <span className="text-red-400 font-bold">1.6 times</span> as much as oranges"
            </p>
          </div>
          <div className="space-y-2 text-dark-300 text-sm">
            <p>✗ We cannot measure subjective value in units</p>
            <p>✗ We cannot compare Alice's satisfaction to Bob's</p>
            <p>✗ We cannot say the goods have "equal value" in trade</p>
          </div>
          <p className="text-dark-400 text-xs mt-4 italic">
            People trade precisely <em>because</em> they value things differently. If they valued
            them equally, there would be no point in trading.
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo showing the heterogeneous goods problem
function HeterogeneousGoodsDemo() {
  const [showProblem, setShowProblem] = useState(true);

  const goods = [
    { name: 'Steel beams', quantity: 500, unit: 'tons', icon: '🏗️' },
    { name: 'Labor hours', quantity: 10000, unit: 'hours', icon: '👷' },
    { name: 'Cement', quantity: 2000, unit: 'bags', icon: '🧱' },
    { name: 'Land', quantity: 5, unit: 'acres', icon: '🏞️' },
    { name: 'Electricity', quantity: 50000, unit: 'kWh', icon: '⚡' },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Heterogeneous Goods Problem</h4>
      <p className="text-dark-400 text-sm mb-4">
        A factory needs to combine various inputs. How do we determine the total "value" of the inputs?
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {goods.map((good, i) => (
          <div key={i} className="bg-dark-900 rounded-lg p-3 flex items-center gap-3">
            <span className="text-2xl">{good.icon}</span>
            <div>
              <span className="text-dark-100 font-medium block">{good.name}</span>
              <span className="text-dark-400 text-sm">{good.quantity.toLocaleString()} {good.unit}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowProblem(true)}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            showProblem
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Without Money Prices
        </button>
        <button
          onClick={() => setShowProblem(false)}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            !showProblem
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          With Money Prices
        </button>
      </div>

      {showProblem ? (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">The Calculation Impossibility</h5>
          <div className="bg-dark-900 rounded-lg p-4 font-mono text-sm">
            <p className="text-dark-300">500 tons + 10,000 hours + 2,000 bags + 5 acres + 50,000 kWh = ???</p>
          </div>
          <p className="text-dark-300 text-sm mt-4">
            You cannot add tons to hours to bags to acres. Without a <em>common denominator</em>,
            there is no way to calculate whether this combination of inputs is more or less valuable
            than some alternative combination.
          </p>
        </div>
      ) : (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-3">Money Provides a Common Denominator</h5>
          <div className="bg-dark-900 rounded-lg p-4 space-y-1 font-mono text-sm">
            <p className="text-dark-300">500 tons × $800/ton = <span className="text-green-400">$400,000</span></p>
            <p className="text-dark-300">10,000 hours × $25/hour = <span className="text-green-400">$250,000</span></p>
            <p className="text-dark-300">2,000 bags × $15/bag = <span className="text-green-400">$30,000</span></p>
            <p className="text-dark-300">5 acres × $100,000/acre = <span className="text-green-400">$500,000</span></p>
            <p className="text-dark-300">50,000 kWh × $0.10/kWh = <span className="text-green-400">$5,000</span></p>
            <div className="border-t border-dark-700 pt-2 mt-2">
              <p className="text-dark-100">Total: <span className="text-green-400 font-bold">$1,185,000</span></p>
            </div>
          </div>
          <p className="text-dark-300 text-sm mt-4">
            Now we can compare this project to alternatives. Is it worth $1.185M to produce this output?
            Only market prices allow this calculation.
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo showing the building example
function BuildingExampleDemo() {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  const methods = [
    {
      name: 'Method A: Steel Frame',
      materials: [
        { item: 'Steel', amount: '100 tons', price: 80000 },
        { item: 'Glass', amount: '500 sqm', price: 25000 },
        { item: 'Concrete', amount: '200 cubic m', price: 15000 },
        { item: 'Labor', amount: '5,000 hours', price: 125000 },
      ],
    },
    {
      name: 'Method B: Concrete Heavy',
      materials: [
        { item: 'Steel', amount: '30 tons', price: 24000 },
        { item: 'Glass', amount: '400 sqm', price: 20000 },
        { item: 'Concrete', amount: '800 cubic m', price: 60000 },
        { item: 'Labor', amount: '8,000 hours', price: 200000 },
      ],
    },
    {
      name: 'Method C: Prefabricated',
      materials: [
        { item: 'Prefab panels', amount: '150 units', price: 150000 },
        { item: 'Steel', amount: '20 tons', price: 16000 },
        { item: 'Concrete', amount: '100 cubic m', price: 7500 },
        { item: 'Labor', amount: '2,000 hours', price: 50000 },
      ],
    },
  ];

  const getTotal = (method: typeof methods[0]) =>
    method.materials.reduce((sum, m) => sum + m.price, 0);

  const cheapestIndex = methods.reduce(
    (minIdx, method, idx, arr) =>
      getTotal(method) < getTotal(arr[minIdx]) ? idx : minIdx,
    0
  );

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-2">The Builder's Problem</h4>
      <p className="text-dark-400 text-sm mb-4">
        A builder wants to construct a building. Technology offers many possible methods, each requiring
        different combinations of materials and labor. Which is most economical?
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {methods.map((method, i) => (
          <button
            key={i}
            onClick={() => setSelectedMethod(selectedMethod === i ? null : i)}
            className={`p-4 rounded-lg text-left transition-all ${
              selectedMethod === i
                ? i === cheapestIndex
                  ? 'bg-green-600 text-white ring-2 ring-green-400'
                  : 'bg-primary-600 text-white ring-2 ring-primary-400'
                : 'bg-dark-900 text-dark-200 hover:bg-dark-700'
            }`}
          >
            <h5 className="font-medium mb-2">{method.name}</h5>
            <p className={`text-lg font-bold ${
              selectedMethod === i ? 'text-white' : i === cheapestIndex ? 'text-green-400' : 'text-dark-100'
            }`}>
              ${getTotal(method).toLocaleString()}
            </p>
            {i === cheapestIndex && selectedMethod !== i && (
              <span className="text-green-400 text-xs">Most economical</span>
            )}
          </button>
        ))}
      </div>

      {selectedMethod !== null && (
        <div className="bg-dark-900 rounded-lg p-4 animate-fadeIn">
          <h5 className="text-dark-100 font-medium mb-3">{methods[selectedMethod].name} - Breakdown</h5>
          <div className="space-y-2">
            {methods[selectedMethod].materials.map((m, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-dark-300">{m.item} ({m.amount})</span>
                <span className="text-dark-100 font-mono">${m.price.toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t border-dark-700 pt-2 flex justify-between font-medium">
              <span className="text-dark-100">Total</span>
              <span className={selectedMethod === cheapestIndex ? 'text-green-400' : 'text-dark-100'}>
                ${getTotal(methods[selectedMethod]).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}

      <Callout type="insight" title="Without Prices, No Calculation">
        Without money prices, how could the builder compare 100 tons of steel vs. 800 cubic meters
        of concrete vs. 150 prefab panels? The heterogeneous quantities cannot be reduced to a common
        denominator without market prices.
      </Callout>
    </div>
  );
}

// Interactive demo showing profit and loss
function ProfitLossDemo() {
  const [revenue, setRevenue] = useState(500000);
  const costs = 400000;

  const profit = revenue - costs;
  const isProfitable = profit > 0;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Profit and Loss: The Compass of Production</h4>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Revenue from sales: <strong className="text-primary-400">${revenue.toLocaleString()}</strong>
        </label>
        <input
          type="range"
          min="200000"
          max="800000"
          step="10000"
          value={revenue}
          onChange={(e) => setRevenue(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <span className="text-dark-400 text-sm block mb-1">Revenue</span>
          <span className="text-2xl font-bold text-green-400">${revenue.toLocaleString()}</span>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <span className="text-dark-400 text-sm block mb-1">Costs</span>
          <span className="text-2xl font-bold text-red-400">${costs.toLocaleString()}</span>
        </div>
        <div className={`rounded-lg p-4 text-center ${
          isProfitable ? 'bg-green-500/20' : 'bg-red-500/20'
        }`}>
          <span className="text-dark-400 text-sm block mb-1">{isProfitable ? 'Profit' : 'Loss'}</span>
          <span className={`text-2xl font-bold ${isProfitable ? 'text-green-400' : 'text-red-400'}`}>
            ${Math.abs(profit).toLocaleString()}
          </span>
        </div>
      </div>

      <div className={`rounded-lg p-4 border ${
        isProfitable ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'
      }`}>
        <h5 className={`font-medium mb-2 ${isProfitable ? 'text-green-400' : 'text-red-400'}`}>
          {isProfitable ? '✓ Resources Well-Allocated' : '✗ Resources Misallocated'}
        </h5>
        <p className="text-dark-300 text-sm">
          {isProfitable
            ? 'The entrepreneur has transformed inputs worth $400,000 into outputs consumers value more highly. Society benefits from this transformation.'
            : 'The entrepreneur has destroyed value—inputs worth $400,000 have been converted into outputs consumers value less. This signals: stop this production!'}
        </p>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Profit and loss are not arbitrary rewards or punishments. They are signals that guide resources
        toward their most valued uses.
      </p>
    </div>
  );
}

// Interactive demo showing socialism's calculation problem
function SocialismDemo() {
  const [system, setSystem] = useState<'market' | 'socialist'>('market');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Socialist Calculation Problem</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSystem('market')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            system === 'market'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Market Economy
        </button>
        <button
          onClick={() => setSystem('socialist')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            system === 'socialist'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Socialist Economy
        </button>
      </div>

      {system === 'market' ? (
        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <h5 className="text-green-400 font-medium mb-3">How Markets Calculate</h5>
            <div className="space-y-3">
              <div className="bg-dark-900 rounded-lg p-3">
                <span className="text-dark-400 text-sm">1. Private Ownership</span>
                <p className="text-dark-200 text-sm">Capital goods are privately owned and traded on markets</p>
              </div>
              <div className="bg-dark-900 rounded-lg p-3">
                <span className="text-dark-400 text-sm">2. Market Prices</span>
                <p className="text-dark-200 text-sm">Voluntary exchange establishes prices for all goods</p>
              </div>
              <div className="bg-dark-900 rounded-lg p-3">
                <span className="text-dark-400 text-sm">3. Profit/Loss Calculation</span>
                <p className="text-dark-200 text-sm">Entrepreneurs compare costs to revenues and allocate accordingly</p>
              </div>
              <div className="bg-dark-900 rounded-lg p-3">
                <span className="text-dark-400 text-sm">4. Feedback Loop</span>
                <p className="text-dark-200 text-sm">Profits attract resources; losses repel them—automatically</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h5 className="text-red-400 font-medium mb-3">The Socialist Blindness</h5>
            <div className="space-y-3">
              <div className="bg-dark-900 rounded-lg p-3">
                <span className="text-dark-400 text-sm">1. State Ownership</span>
                <p className="text-dark-200 text-sm">Capital goods are owned by the state—no market transactions</p>
              </div>
              <div className="bg-dark-900 rounded-lg p-3">
                <span className="text-dark-400 text-sm">2. No Genuine Prices</span>
                <p className="text-dark-200 text-sm">Without markets, there are no prices for capital goods</p>
              </div>
              <div className="bg-dark-900 rounded-lg p-3">
                <span className="text-dark-400 text-sm">3. Calculation Impossible</span>
                <p className="text-dark-200 text-sm">Planners cannot determine which methods are most economical</p>
              </div>
              <div className="bg-dark-900 rounded-lg p-3">
                <span className="text-dark-400 text-sm">4. Groping in the Dark</span>
                <p className="text-dark-200 text-sm">"Success and failure remain unrecognized in the dark"</p>
              </div>
            </div>
          </div>

          <Callout type="warning" title="The Fundamental Problem">
            "Where there is no free market, there is no pricing mechanism; without a pricing mechanism,
            there is no economic calculation." The socialist planner is "like a man forced to spend his
            life blindfolded."
          </Callout>
        </div>
      )}
    </div>
  );
}

// Interactive demo on limits of calculation
function LimitsDemo() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const limits = [
    {
      title: 'Non-Market Goods',
      icon: '🌳',
      content: 'Clean air, beautiful scenery, personal relationships—many valuable things are not bought and sold. Economic calculation cannot directly evaluate them.',
    },
    {
      title: 'Subjective Values',
      icon: '❤️',
      content: 'The sentimental value of a family heirloom, the joy of a hobby, the meaning of life—these cannot be expressed in money terms.',
    },
    {
      title: 'Future Uncertainty',
      icon: '🔮',
      content: 'Prices reflect current knowledge and expectations. Future conditions may differ drastically. Calculation guides but doesn\'t guarantee.',
    },
    {
      title: 'Not Value Measurement',
      icon: '📏',
      content: 'Money prices are not measurements of value. They are historical facts—what someone paid at a specific time and place. They guide future action but don\'t "measure" anything.',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Limits of Economic Calculation</h4>
      <p className="text-dark-400 text-sm mb-4">
        Monetary calculation is powerful but not omniscient. Mises carefully identifies its boundaries.
      </p>

      <div className="space-y-2">
        {limits.map((limit, i) => (
          <div key={i} className="bg-dark-900 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-dark-800 transition-colors"
            >
              <span className="text-2xl">{limit.icon}</span>
              <span className="flex-1 text-dark-100 font-medium">{limit.title}</span>
              <span className="text-dark-400">{expanded === i ? '−' : '+'}</span>
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 pl-14 text-dark-300 text-sm">
                {limit.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        "Economic calculation cannot comprehend things which are not sold and bought against money."
        This is not a flaw but a recognition of calculation's proper domain.
      </p>
    </div>
  );
}

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        We now enter Part Three of <em>Human Action</em>: Economic Calculation. This is, in many ways,
        the heart of Mises's contribution to economics. The ability to <em>calculate</em>—to compare
        costs and benefits using a common denominator—is what makes modern civilization possible.
      </p>

      <Callout type="definition" title="The Central Problem">
        "Economic calculation is the fundamental issue in the comprehension of all problems commonly
        called economic." Without calculation, rational allocation of scarce resources becomes impossible.
      </Callout>

      {/* Valuation Without Calculation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Valuation Without Calculation</h2>

      <p className="text-dark-200 mb-4">
        Acting individuals value means according to the ends they can achieve. But this valuation
        is purely <strong className="text-primary-400">ordinal</strong>—we can rank preferences
        (first, second, third) but cannot measure them in units.
      </p>

      <ValuationDemo />

      <p className="text-dark-200 mb-4">
        This creates a fundamental problem. If I prefer A to B and B to C, I know my ranking.
        But I cannot say "A is worth 1.5 times B." There is no unit of subjective value.
        How then can we compare different production methods that use different combinations of goods?
      </p>

      {/* The Heterogeneous Goods Problem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Problem of Heterogeneous Goods</h2>

      <p className="text-dark-200 mb-4">
        Production requires combining various inputs: labor of different types, raw materials,
        machinery, land, energy. These goods are <strong className="text-amber-400">heterogeneous</strong>—
        fundamentally different in kind. You cannot add tons of steel to hours of labor to acres of land.
      </p>

      <HeterogeneousGoodsDemo />

      <CardGrid>
        <Card title="Technology Provides Options" variant="default">
          Engineering tells us <em>what is possible</em>—many different combinations of inputs can
          produce the same output. But technology alone cannot tell us which option is <em>best</em>.
        </Card>
        <Card title="Economics Requires Comparison" variant="primary">
          To choose rationally among alternatives, we need a way to compare heterogeneous goods.
          This requires reducing them to a <em>common denominator</em>.
        </Card>
      </CardGrid>

      {/* Money Prices as Solution */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Money Prices: The Common Denominator</h2>

      <p className="text-dark-200 mb-4">
        "Only money prices can solve the problem of economic calculation." When goods are traded
        on markets, prices emerge. These prices—expressed in money—provide the common denominator
        that makes calculation possible.
      </p>

      <BuildingExampleDemo />

      <p className="text-dark-200 mb-4">
        Market prices are not "measurements" of value in any scientific sense. They are
        <em>historical facts</em>—records of what someone actually paid at a specific time and place.
        But these facts provide the essential guide for future action.
      </p>

      <Callout type="insight" title="The Compass of Production">
        "Monetary calculation is the guiding star of action under the social system of division of labor.
        It is the compass of the man embarking upon production."
      </Callout>

      {/* Profit and Loss */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Profit and Loss</h2>

      <p className="text-dark-200 mb-4">
        With money prices, entrepreneurs can <em>calculate</em>. They compare the cost of inputs
        to the revenue from outputs. The difference—profit or loss—tells them whether their
        production is beneficial or wasteful.
      </p>

      <ProfitLossDemo />

      <CardGrid>
        <Card title="Profit = Value Creation" variant="success">
          When revenue exceeds cost, the entrepreneur has transformed inputs into outputs that
          consumers value more highly. Resources have been well-allocated.
        </Card>
        <Card title="Loss = Value Destruction" variant="warning">
          When cost exceeds revenue, the entrepreneur has destroyed value. Resources would have
          been better used elsewhere. The loss signals: change course.
        </Card>
      </CardGrid>

      {/* The Socialist Calculation Problem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Socialist Calculation Problem</h2>

      <p className="text-dark-200 mb-4">
        In 1920, Mises dropped a bombshell on socialist theory. He demonstrated that without
        private ownership of the means of production, there can be no market for capital goods.
        Without a market, there are no prices. Without prices, <em>economic calculation is impossible</em>.
      </p>

      <SocialismDemo />

      <p className="text-dark-200 mb-4">
        This is not a claim that socialist planners are stupid or corrupt. The problem is deeper:
        they lack the <em>information</em> that only market prices can provide. No matter how
        intelligent or well-intentioned, they cannot know which production methods are most economical.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Why Labor Hours Don't Work</h4>
        <p className="text-dark-300 mb-4">
          Some socialists proposed using labor-hours as the common denominator instead of money.
          But this fails because labor itself is heterogeneous:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-dark-900 rounded-lg p-3 text-center">
            <span className="text-2xl block mb-2">👨‍⚕️</span>
            <span className="text-dark-200 text-sm">1 hour of surgery</span>
          </div>
          <div className="bg-dark-900 rounded-lg p-3 text-center text-dark-400 text-2xl">=?</div>
          <div className="bg-dark-900 rounded-lg p-3 text-center">
            <span className="text-2xl block mb-2">🧹</span>
            <span className="text-dark-200 text-sm">1 hour of sweeping</span>
          </div>
        </div>
        <p className="text-dark-400 text-sm mt-4">
          How many hours of unskilled labor equal one hour of brain surgery? Without market
          valuation, this question has no answer.
        </p>
      </div>

      {/* Limits of Calculation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Limits of Economic Calculation</h2>

      <p className="text-dark-200 mb-4">
        Mises is careful to acknowledge that monetary calculation is not omniscient. It cannot
        evaluate everything. Some things lie outside its domain.
      </p>

      <LimitsDemo />

      <p className="text-dark-200 mb-4">
        These limitations do not diminish the importance of economic calculation. Within its proper
        domain—the allocation of scarce resources among competing uses—it remains indispensable.
        No other method can substitute for it.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Valuation is ordinal, not cardinal. We can rank preferences but cannot measure subjective value in units.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Production requires combining heterogeneous goods. Without a common denominator, we cannot compare alternative methods.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Money prices—emerging from market exchange—provide the common denominator that makes calculation possible.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Profit signals value creation; loss signals value destruction. Together they guide resource allocation.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Socialism cannot calculate because without private property in capital goods, there are no market prices for them.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">6.</span>
            <span>Economic calculation has limits—it cannot evaluate non-market goods or measure subjective meaning—but within its domain, nothing can replace it.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        With the foundation of economic calculation established, subsequent chapters will examine
        the market process in detail: how prices form, how entrepreneurs coordinate production,
        and how the market allocates resources without central planning. The calculation problem
        will remain central throughout.
      </p>
    </LessonLayout>
  );
}
