import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing character of monetary entries
function MonetaryEntriesDemo() {
  const [view, setView] = useState<'appearance' | 'reality'>('appearance');

  const balanceSheet = [
    { item: 'Factory Building', appearance: '$2,000,000', reality: 'What we HOPE to sell it for' },
    { item: 'Inventory', appearance: '$500,000', reality: 'Estimated future sale prices' },
    { item: 'Accounts Receivable', appearance: '$300,000', reality: 'What we EXPECT to collect' },
    { item: 'Equipment', appearance: '$800,000', reality: 'Depreciated guess of value' },
    { item: 'Land', appearance: '$1,500,000', reality: 'Current market estimate' },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Character of Monetary Entries</h4>
      <p className="text-dark-400 text-sm mb-4">
        Balance sheets appear precise, but what do those numbers actually represent?
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('appearance')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'appearance'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          What It Looks Like
        </button>
        <button
          onClick={() => setView('reality')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'reality'
              ? 'bg-amber-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          What It Actually Is
        </button>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="text-dark-300 text-sm mb-3 font-medium">BALANCE SHEET - ASSETS</h5>
        <div className="space-y-2">
          {balanceSheet.map((entry, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b border-dark-700 last:border-0">
              <span className="text-dark-200">{entry.item}</span>
              {view === 'appearance' ? (
                <span className="text-green-400 font-mono font-medium">{entry.appearance}</span>
              ) : (
                <span className="text-amber-400 text-sm italic">{entry.reality}</span>
              )}
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 border-t-2 border-dark-600">
            <span className="text-dark-100 font-bold">Total Assets</span>
            {view === 'appearance' ? (
              <span className="text-green-400 font-mono font-bold">$5,100,000</span>
            ) : (
              <span className="text-amber-400 text-sm italic">Sum of speculative estimates</span>
            )}
          </div>
        </div>
      </div>

      <div className={`mt-4 rounded-lg p-4 ${
        view === 'appearance'
          ? 'bg-primary-500/10 border border-primary-500/30'
          : 'bg-amber-500/10 border border-amber-500/30'
      }`}>
        {view === 'appearance' ? (
          <p className="text-dark-300 text-sm">
            Accounting statements display "impressive numerical exactitude" that suggests scientific precision.
          </p>
        ) : (
          <p className="text-dark-300 text-sm">
            "The most important figures they contain are <em>speculative anticipations of future market
            constellations</em>." Every asset value depends on uncertain future conditions.
          </p>
        )}
      </div>
    </div>
  );
}

// Interactive demo showing prices as historical facts
function PricesAsHistoryDemo() {
  const [timeView, setTimeView] = useState<'past' | 'future'>('past');

  const priceHistory = [
    { date: 'Jan 2024', price: '$45.20', event: 'Actual sale' },
    { date: 'Mar 2024', price: '$47.80', event: 'Actual sale' },
    { date: 'Jun 2024', price: '$42.50', event: 'Actual sale' },
    { date: 'Sep 2024', price: '$48.00', event: 'Actual sale' },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Prices: Historical Facts, Not Measurements</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTimeView('past')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            timeView === 'past'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          📜 What Prices Tell Us
        </button>
        <button
          onClick={() => setTimeView('future')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            timeView === 'future'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          🎯 How Businesspeople Use Them
        </button>
      </div>

      {timeView === 'past' ? (
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-dark-300 text-sm mb-3">Historical Price Data - Widget XYZ</h5>
            <div className="space-y-2">
              {priceHistory.map((record, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <span className="text-dark-400">{record.date}</span>
                  <span className="text-blue-400 font-mono">{record.price}</span>
                  <span className="text-dark-500 text-xs">({record.event})</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-dark-300 text-sm">
              These prices are <strong className="text-blue-400">historical facts</strong>—records of what
              someone actually paid at a specific time and place. They tell us what <em>happened</em>,
              not what things are "really worth."
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-dark-300 text-sm mb-3">Entrepreneur's Calculation</h5>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="text-dark-200 text-sm">Studies past prices</p>
                  <p className="text-dark-500 text-xs">Average: ~$45.88</p>
                </div>
              </div>
              <div className="text-dark-500 text-center">↓</div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤔</span>
                <div>
                  <p className="text-dark-200 text-sm">Forms expectations about future</p>
                  <p className="text-dark-500 text-xs">Considers trends, competition, demand...</p>
                </div>
              </div>
              <div className="text-dark-500 text-center">↓</div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="text-dark-200 text-sm">Makes production decisions NOW</p>
                  <p className="text-dark-500 text-xs">Based on anticipated future prices</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <p className="text-dark-300 text-sm">
              "Prices of the past are merely a help in <strong className="text-green-400">anticipating
              future prices</strong>." Businesspeople focus on what prices <em>will be</em>, not what
              they were.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive demo showing limits of economic calculation
function LimitsDemo() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    {
      title: 'Within Calculation',
      icon: '✅',
      color: 'green',
      items: [
        'Costs of production materials',
        'Wages and salaries',
        'Revenue from sales',
        'Investment returns',
        'Rent and interest',
      ],
    },
    {
      title: 'Beyond Calculation',
      icon: '🚫',
      color: 'red',
      items: [
        'Honor and virtue',
        'Love and friendship',
        'Artistic beauty',
        'Personal health (beyond medical costs)',
        'Glory and reputation',
      ],
    },
    {
      title: 'Aggregate Nonsense',
      icon: '⚠️',
      color: 'amber',
      items: [
        '"National wealth"',
        '"Social value"',
        '"Total utility"',
        '"GDP" (as measure of welfare)',
        '"The wealth of mankind"',
      ],
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Limits of Economic Calculation</h4>
      <p className="text-dark-400 text-sm mb-4">
        Click each category to see what falls inside and outside calculation's scope.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(selectedCategory === i ? null : i)}
            className={`p-4 rounded-lg text-left transition-all ${
              selectedCategory === i
                ? cat.color === 'green'
                  ? 'bg-green-600 text-white ring-2 ring-green-400'
                  : cat.color === 'red'
                  ? 'bg-red-600 text-white ring-2 ring-red-400'
                  : 'bg-amber-600 text-white ring-2 ring-amber-400'
                : 'bg-dark-900 text-dark-200 hover:bg-dark-700'
            }`}
          >
            <span className="text-2xl block mb-2">{cat.icon}</span>
            <h5 className="font-medium">{cat.title}</h5>
          </button>
        ))}
      </div>

      {selectedCategory !== null && (
        <div className={`rounded-lg p-4 animate-fadeIn ${
          categories[selectedCategory].color === 'green'
            ? 'bg-green-500/10 border border-green-500/30'
            : categories[selectedCategory].color === 'red'
            ? 'bg-red-500/10 border border-red-500/30'
            : 'bg-amber-500/10 border border-amber-500/30'
        }`}>
          <ul className="space-y-2">
            {categories[selectedCategory].items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-dark-300 text-sm">
                <span className={
                  categories[selectedCategory].color === 'green'
                    ? 'text-green-400'
                    : categories[selectedCategory].color === 'red'
                    ? 'text-red-400'
                    : 'text-amber-400'
                }>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        "Things which are not for sale and bought against money...do not enter into economic calculation."
        This is not a flaw—it defines calculation's proper domain.
      </p>
    </div>
  );
}

// Interactive demo showing the stabilization fallacy
function StabilizationDemo() {
  const [showProblems, setShowProblems] = useState(false);

  const basketItems = [
    { name: 'Bread', y1: '$2.00', y2: '$2.20', change: '+10%' },
    { name: 'Gasoline', y1: '$3.50', y2: '$3.80', change: '+8.6%' },
    { name: 'Housing', y1: '$1,500', y2: '$1,650', change: '+10%' },
    { name: 'Electronics', y1: '$500', y2: '$450', change: '-10%' },
    { name: 'Healthcare', y1: '$200', y2: '$240', change: '+20%' },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Stabilization Fallacy</h4>
      <p className="text-dark-400 text-sm mb-4">
        Many economists dream of "stable money." But what would that even mean?
      </p>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <h5 className="text-dark-300 text-sm mb-3">Typical Price Index Calculation</h5>
        <div className="space-y-2">
          {basketItems.map((item, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-dark-300">{item.name}</span>
              <span className="text-dark-400">{item.y1} → {item.y2}</span>
              <span className={item.change.startsWith('-') ? 'text-green-400' : 'text-red-400'}>
                {item.change}
              </span>
            </div>
          ))}
          <div className="border-t border-dark-700 pt-2 mt-2 flex justify-between font-medium">
            <span className="text-dark-200">"Average Inflation"</span>
            <span className="text-amber-400">~7.7%</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowProblems(!showProblems)}
        className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-500 transition-colors mb-4"
      >
        {showProblems ? 'Hide' : 'Reveal'} The Problems
      </button>

      {showProblems && (
        <div className="space-y-3 animate-fadeIn">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h5 className="text-red-400 font-medium mb-2">Problem 1: Arbitrary Weights</h5>
            <p className="text-dark-300 text-sm">
              How much weight should bread get vs. electronics? Different people spend differently.
              Any weighting is arbitrary.
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h5 className="text-red-400 font-medium mb-2">Problem 2: Quality Changes</h5>
            <p className="text-dark-300 text-sm">
              Is today's smartphone the "same good" as last year's? Products improve constantly.
              How do you compare?
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h5 className="text-red-400 font-medium mb-2">Problem 3: New & Disappearing Goods</h5>
            <p className="text-dark-300 text-sm">
              "New kinds of goods appear while many old ones disappear." How do you track the
              price of something that didn't exist before?
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h5 className="text-red-400 font-medium mb-2">Problem 4: Different Individual Experiences</h5>
            <p className="text-dark-300 text-sm">
              A vegetarian doesn't care about meat prices. A renter doesn't care about mortgage rates.
              There is no "general purchasing power" that affects everyone equally.
            </p>
          </div>
        </div>
      )}

      <Callout type="insight" title="The Deeper Issue">
        "The idea of rendering purchasing power stable did not originate from endeavors to make
        economic calculation more correct. Its source is the wish to create a sphere withdrawn
        from the ceaseless flux of human affairs."
      </Callout>
    </div>
  );
}

// Interactive demo showing precision and uncertainty
function UncertaintyDemo() {
  const [scenario, setScenario] = useState<'engineer' | 'entrepreneur'>('engineer');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Precision vs. Uncertainty</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setScenario('engineer')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'engineer'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          👷 Engineer's Calculation
        </button>
        <button
          onClick={() => setScenario('entrepreneur')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'entrepreneur'
              ? 'bg-purple-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          💼 Entrepreneur's Calculation
        </button>
      </div>

      {scenario === 'engineer' ? (
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <h5 className="text-blue-400 font-medium mb-3">Technical/Physical Calculation</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4 font-mono text-sm">
            <p className="text-dark-300 mb-2">Bridge load capacity:</p>
            <p className="text-blue-400">Force = Mass × Acceleration</p>
            <p className="text-blue-400">Stress = Force / Area</p>
            <p className="text-dark-500 mt-2">Steel yield strength: 250 MPa (known constant)</p>
          </div>
          <div className="space-y-2 text-dark-300 text-sm">
            <p>✓ Based on established physical laws</p>
            <p>✓ Material properties are measurable</p>
            <p>✓ Results can be verified experimentally</p>
            <p>✓ High precision is achievable</p>
          </div>
        </div>
      ) : (
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <h5 className="text-purple-400 font-medium mb-3">Economic/Business Calculation</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4 font-mono text-sm">
            <p className="text-dark-300 mb-2">Project profitability:</p>
            <p className="text-purple-400">Profit = Revenue − Costs</p>
            <p className="text-dark-500 mt-2">But wait...</p>
            <p className="text-amber-400">Revenue = f(future demand, future prices, future competition...)</p>
            <p className="text-amber-400">Costs = f(future wages, future materials, future regulations...)</p>
          </div>
          <div className="space-y-2 text-dark-300 text-sm">
            <p>⚠️ Depends on future human choices</p>
            <p>⚠️ No physical laws govern valuations</p>
            <p>⚠️ Cannot be verified until after the fact</p>
            <p>⚠️ Inherently speculative</p>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        "The planning businessman cannot help employing data concerning the unknown future;
        he deals with future prices and future costs of production."
      </p>
    </div>
  );
}

// Interactive demo showing what calculation actually requires
function RequirementsDemo() {
  const [selected, setSelected] = useState<'needed' | 'not-needed'>('needed');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">What Economic Calculation Actually Requires</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSelected('needed')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            selected === 'needed'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ✓ What IS Needed
        </button>
        <button
          onClick={() => setSelected('not-needed')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            selected === 'not-needed'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ✗ What is NOT Needed
        </button>
      </div>

      {selected === 'needed' ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <div className="space-y-4">
            <div className="bg-dark-900 rounded-lg p-3">
              <h5 className="text-green-400 font-medium mb-1">A Monetary System</h5>
              <p className="text-dark-300 text-sm">
                Money serving as a common medium of exchange so prices can be expressed in a single unit.
              </p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <h5 className="text-green-400 font-medium mb-1">Freedom from Government Sabotage</h5>
              <p className="text-dark-300 text-sm">
                No inflation, no credit expansion, no price controls—policies that distort the
                information prices convey.
              </p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <h5 className="text-green-400 font-medium mb-1">Market Prices</h5>
              <p className="text-dark-300 text-sm">
                Prices emerging from voluntary exchange, reflecting actual supply and demand conditions.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <div className="space-y-4">
            <div className="bg-dark-900 rounded-lg p-3">
              <h5 className="text-red-400 font-medium mb-1">Price Stability ✗</h5>
              <p className="text-dark-300 text-sm">
                Prices naturally change. This doesn't prevent calculation—it's part of the market process.
              </p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <h5 className="text-red-400 font-medium mb-1">Constant Purchasing Power ✗</h5>
              <p className="text-dark-300 text-sm">
                "Stability...is an empty and contradictory notion." Change is inherent in human action.
              </p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <h5 className="text-red-400 font-medium mb-1">Perfect Precision ✗</h5>
              <p className="text-dark-300 text-sm">
                All business calculation involves uncertainty about the future. This is unavoidable.
              </p>
            </div>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4">
        Gold and silver historically served adequately because their supply changes occurred slowly enough
        that entrepreneurs could disregard them in calculations. The real danger comes from
        government-induced monetary manipulation.
      </p>
    </div>
  );
}

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Chapter XII narrows the focus to examine the <em>sphere</em> of economic calculation—what it
        can and cannot do, and what it actually requires. Mises demolishes the popular notion that
        calculation needs "stable money" while carefully defining calculation's proper boundaries.
      </p>

      <Callout type="definition" title="The Central Question">
        What conditions must be met for economic calculation to work? And what lies beyond its reach?
      </Callout>

      {/* Character of Monetary Entries */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Character of Monetary Entries</h2>

      <p className="text-dark-200 mb-4">
        Accounting statements look impressively precise. Balance sheets display assets to the penny.
        Profit and loss statements calculate returns to decimal points. But this appearance of precision
        conceals a fundamental reality.
      </p>

      <MonetaryEntriesDemo />

      <p className="text-dark-200 mb-4">
        Every asset valuation on a balance sheet involves <em>speculation</em> about future market conditions.
        What will this factory be worth? What will we receive for this inventory? These are not measurements
        of present reality but anticipations of an uncertain future.
      </p>

      <CardGrid>
        <Card title="Prices Are Historical Facts" variant="default">
          A price records what someone <em>actually paid</em> at a specific moment. It tells us what
          happened, not what things "are really worth" in some objective sense.
        </Card>
        <Card title="Future-Oriented Action" variant="primary">
          Businesspeople use past prices to <em>anticipate</em> future prices. Their calculations
          always concern what prices will be, not what they were.
        </Card>
      </CardGrid>

      <PricesAsHistoryDemo />

      {/* Limits of Economic Calculation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Limits of Economic Calculation</h2>

      <p className="text-dark-200 mb-4">
        Economic calculation comprehends only "everything that is exchanged against money." Things
        that don't enter market exchange lie outside calculation's domain. This is not a flaw but
        a proper recognition of boundaries.
      </p>

      <LimitsDemo />

      <Callout type="insight" title="A Clarifying Limitation">
        "Values that are not reflected in any monetary exchange ratio are...lifted into a particular
        position which makes the decision rather easier." When something cannot be calculated, we
        must acknowledge it directly rather than pretend to measure it.
      </Callout>

      <p className="text-dark-200 mb-4">
        Mises specifically criticizes attempts to calculate "national wealth" or "the wealth of mankind."
        These aggregate concepts require subjective judgments that no market process can provide.
        As he puts it, such calculations are "as childish as the mystic efforts to solve the riddles
        of the universe by worrying about the dimensions of the pyramid of Cheops."
      </p>

      {/* Precision and Uncertainty */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Precision and Uncertainty</h2>

      <p className="text-dark-200 mb-4">
        A common criticism of economic calculation is that it lacks the precision of engineering or
        physics. But this misunderstands the nature of the problem.
      </p>

      <UncertaintyDemo />

      <p className="text-dark-200 mb-4">
        The uncertainty in economic calculation doesn't stem from deficiencies in our methods. It stems
        from the nature of action itself, which always deals with an unknown future. Engineers apply
        known physical laws to present materials. Entrepreneurs must guess how millions of people will
        act tomorrow.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Uncertainty Is Inherent</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <span className="text-2xl block mb-2">🔬</span>
            <h5 className="text-dark-200 font-medium mb-1">Physical Science</h5>
            <p className="text-dark-400 text-sm">
              Studies what IS—established laws, measurable properties, repeatable experiments.
            </p>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <span className="text-2xl block mb-2">💰</span>
            <h5 className="text-dark-200 font-medium mb-1">Economic Action</h5>
            <p className="text-dark-400 text-sm">
              Concerns what WILL BE—future choices, uncertain outcomes, unrepeatable situations.
            </p>
          </div>
        </div>
        <p className="text-dark-400 text-sm mt-4">
          "Economic calculation is not imperfect because it does not correspond to confused ideas of
          people yearning for stable income."
        </p>
      </div>

      {/* The Stabilization Idea */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Root of the Stabilization Idea</h2>

      <p className="text-dark-200 mb-4">
        Perhaps the most important section of this chapter dismantles the popular idea that economic
        calculation requires—or would benefit from—"stable money" or "constant purchasing power."
      </p>

      <StabilizationDemo />

      <p className="text-dark-200 mb-4">
        The dream of stable money is not really about improving calculation. It's about escaping the
        inherent changeability of human affairs. People want investments that preserve value forever,
        contracts that mean the same thing decades later, incomes secure against all vicissitudes.
      </p>

      <CardGrid>
        <Card title="Change Is Inherent" variant="warning">
          "In the realm of action there is nothing perpetual but change." Human action itself generates
          continuous adjustment. Stability would require freezing all human choice.
        </Card>
        <Card title="No Escape Possible" variant="default">
          No institutional arrangement—not gold, not index-linking, not government management—can
          create the unchanging value people desire. It's a contradiction in terms.
        </Card>
      </CardGrid>

      {/* What Calculation Actually Requires */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">What Calculation Actually Requires</h2>

      <p className="text-dark-200 mb-4">
        If economic calculation doesn't require price stability, what <em>does</em> it require?
        Mises's answer is surprisingly modest.
      </p>

      <RequirementsDemo />

      <Callout type="warning" title="The Real Danger">
        "The endeavors to expand the quantity of money in circulation either in order to increase the
        government's capacity to spend or in order to bring about a temporary lowering of the rate of
        interest disintegrate all currency matters and derange economic calculation."
      </Callout>

      <p className="text-dark-200 mb-4">
        The threat to calculation doesn't come from the natural fluctuation of prices in a free market.
        It comes from government policies that systematically distort prices—inflation, credit expansion,
        price controls. These policies don't just change prices; they corrupt the information that
        prices convey.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Monetary entries in accounting are speculative anticipations of future market conditions, not precise measurements of present value.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Prices are historical facts—records of past exchanges—that businesspeople use to anticipate future prices.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Economic calculation cannot evaluate things not exchanged for money: honor, virtue, love, artistic beauty, and similar values.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Aggregate concepts like "national wealth" or "social value" lie outside calculation's scope—they require impossible subjective judgments.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Uncertainty in economic calculation stems from the nature of action itself, which always deals with an unknown future.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">6.</span>
            <span>The "stabilization" idea is contradictory—seeking unchanging value in a world where human action generates continuous change.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">7.</span>
            <span>Economic calculation requires sound money free from government manipulation, not impossible "price stability."</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        With the sphere and limits of calculation now clear, Chapter XIII examines how monetary
        calculation actually functions as a <em>tool of action</em>—a method of thinking that
        guides real decisions. We'll see how this tool, despite its limitations, enables the
        complex coordination of a modern economy.
      </p>
    </LessonLayout>
  );
}
