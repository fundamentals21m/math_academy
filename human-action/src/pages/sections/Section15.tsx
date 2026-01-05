import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing characteristics of market economy
function MarketCharacteristicsDemo() {
  const [selected, setSelected] = useState<number | null>(null);

  const characteristics = [
    {
      icon: '🏠',
      title: 'Private Property',
      description: 'Individuals own and control the means of production',
      detail: 'Ownership creates incentives to use resources productively and enables market prices to emerge.',
    },
    {
      icon: '🤝',
      title: 'Voluntary Exchange',
      description: 'All transactions are consensual, not coerced',
      detail: 'Both parties expect to benefit, otherwise they wouldn\'t trade. No one is forced to buy or sell.',
    },
    {
      icon: '🔢',
      title: 'Money Prices',
      description: 'Common denominator for economic calculation',
      detail: 'Prices convey information about relative scarcity and consumer preferences, guiding decisions.',
    },
    {
      icon: '⚙️',
      title: 'Division of Labor',
      description: 'Specialization increases productivity',
      detail: 'Each person focuses on what they do best, exchanging their output for others\' specialized products.',
    },
    {
      icon: '📊',
      title: 'Profit and Loss',
      description: 'Signals for resource allocation',
      detail: 'Profits attract resources to valued uses; losses push them away from waste.',
    },
    {
      icon: '🔄',
      title: 'Process, Not Place',
      description: 'The market is ongoing coordination, not a location',
      detail: 'Millions of individuals constantly adjusting, buying, selling, producing—a never-ending process.',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Characteristics of the Market Economy</h4>
      <p className="text-dark-400 text-sm mb-4">
        Click each characteristic to learn more about its role in the market system.
      </p>

      <div className="grid md:grid-cols-3 gap-3">
        {characteristics.map((c, i) => (
          <button
            key={i}
            onClick={() => setSelected(selected === i ? null : i)}
            className={`p-4 rounded-lg text-left transition-all ${
              selected === i
                ? 'bg-primary-600 text-white ring-2 ring-primary-400'
                : 'bg-dark-900 hover:bg-dark-700'
            }`}
          >
            <span className="text-2xl block mb-2">{c.icon}</span>
            <h5 className={`font-medium text-sm mb-1 ${selected === i ? 'text-white' : 'text-dark-200'}`}>
              {c.title}
            </h5>
            <p className={`text-xs ${selected === i ? 'text-white/80' : 'text-dark-400'}`}>
              {c.description}
            </p>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="mt-4 bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 animate-fadeIn">
          <p className="text-dark-300 text-sm">{characteristics[selected].detail}</p>
        </div>
      )}
    </div>
  );
}

// Interactive demo distinguishing capital goods from capital
function CapitalConceptsDemo() {
  const [view, setView] = useState<'goods' | 'capital'>('goods');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Capital Goods vs. Capital</h4>
      <p className="text-dark-400 text-sm mb-4">
        These terms sound similar but refer to fundamentally different concepts.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('goods')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'goods'
              ? 'bg-amber-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          🔧 Capital Goods
        </button>
        <button
          onClick={() => setView('capital')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'capital'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          💰 Capital
        </button>
      </div>

      {view === 'goods' ? (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
          <h5 className="text-amber-400 font-medium mb-3">Physical Things for Production</h5>
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div className="bg-dark-900 rounded-lg p-3 flex items-center gap-3">
              <span className="text-2xl">🏭</span>
              <span className="text-dark-200 text-sm">Factory buildings</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 flex items-center gap-3">
              <span className="text-2xl">⚙️</span>
              <span className="text-dark-200 text-sm">Machines and tools</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 flex items-center gap-3">
              <span className="text-2xl">📦</span>
              <span className="text-dark-200 text-sm">Raw materials</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 flex items-center gap-3">
              <span className="text-2xl">🚛</span>
              <span className="text-dark-200 text-sm">Vehicles and equipment</span>
            </div>
          </div>
          <div className="bg-dark-900 rounded-lg p-3">
            <p className="text-dark-300 text-sm">
              Capital goods exist in <strong className="text-amber-400">any</strong> economic system.
              Even a socialist economy has factories, tools, and materials. These are physical objects
              that extend production capabilities.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-3">A Mental Concept for Calculation</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4 font-mono text-sm">
            <p className="text-dark-300 mb-2">Capital = Assets − Liabilities</p>
            <div className="flex justify-between text-sm mt-4">
              <div>
                <span className="text-dark-400 block">Factory</span>
                <span className="text-green-400">$500,000</span>
              </div>
              <div>
                <span className="text-dark-400 block">Equipment</span>
                <span className="text-green-400">$200,000</span>
              </div>
              <div>
                <span className="text-dark-400 block">Inventory</span>
                <span className="text-green-400">$100,000</span>
              </div>
              <div>
                <span className="text-dark-400 block">Loans</span>
                <span className="text-red-400">−$300,000</span>
              </div>
              <div>
                <span className="text-dark-400 block">= Capital</span>
                <span className="text-green-400 font-bold">$500,000</span>
              </div>
            </div>
          </div>
          <div className="bg-dark-900 rounded-lg p-3">
            <p className="text-dark-300 text-sm">
              Capital is a <strong className="text-green-400">mental tool</strong> that only makes sense
              in market economies with prices. It's the money-equivalent value that enables economic
              calculation. Socialism can have capital goods but <em>cannot</em> have capital.
            </p>
          </div>
        </div>
      )}

      <Callout type="insight" title="Why This Matters">
        "The notion of capital makes sense only in the market economy. It serves the deliberations
        and calculations of individuals operating on their own account."
      </Callout>
    </div>
  );
}

// Interactive demo showing consumer sovereignty
function ConsumerSovereigntyDemo() {
  const [perspective, setPerspective] = useState<'appearance' | 'reality'>('appearance');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Sovereignty of Consumers</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setPerspective('appearance')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            perspective === 'appearance'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          👔 How It Appears
        </button>
        <button
          onClick={() => setPerspective('reality')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            perspective === 'reality'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          👑 How It Really Works
        </button>
      </div>

      {perspective === 'appearance' ? (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">The Common Misconception</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <span className="text-4xl block mb-2">🏢</span>
                <span className="text-dark-200 text-sm">Big Business</span>
              </div>
              <div className="text-red-400 text-2xl">→</div>
              <div className="text-center">
                <span className="text-4xl block mb-2">📢</span>
                <span className="text-dark-200 text-sm">Advertising</span>
              </div>
              <div className="text-red-400 text-2xl">→</div>
              <div className="text-center">
                <span className="text-4xl block mb-2">🛒</span>
                <span className="text-dark-200 text-sm">Consumers</span>
              </div>
            </div>
          </div>
          <p className="text-dark-300 text-sm">
            "Big business controls consumers through advertising and market power.
            Corporations decide what gets produced and manipulate people into buying it."
          </p>
        </div>
      ) : (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-3">The Economic Reality</h5>
          <div className="bg-dark-900 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <span className="text-4xl block mb-2">👑</span>
                <span className="text-dark-200 text-sm">Consumers</span>
              </div>
              <div className="text-green-400 text-2xl">→</div>
              <div className="text-center">
                <span className="text-4xl block mb-2">💵</span>
                <span className="text-dark-200 text-sm">Spending</span>
              </div>
              <div className="text-green-400 text-2xl">→</div>
              <div className="text-center">
                <span className="text-4xl block mb-2">🏢</span>
                <span className="text-dark-200 text-sm">Business</span>
              </div>
            </div>
          </div>
          <p className="text-dark-300 text-sm">
            "The entrepreneurs, capitalists, and farmers have their hands tied; they are bound to comply
            in their operations with the orders of the buying public."
          </p>
        </div>
      )}

      <div className="mt-4 grid md:grid-cols-3 gap-3">
        <div className="bg-dark-900 rounded-lg p-3 text-center">
          <span className="text-2xl block mb-1">🍫</span>
          <p className="text-dark-300 text-xs">
            A chocolate maker has no power over you—only the ability to offer what you might want
          </p>
        </div>
        <div className="bg-dark-900 rounded-lg p-3 text-center">
          <span className="text-2xl block mb-1">📉</span>
          <p className="text-dark-300 text-xs">
            If consumers stop buying, the business fails—no matter how large
          </p>
        </div>
        <div className="bg-dark-900 rounded-lg p-3 text-center">
          <span className="text-2xl block mb-1">🔄</span>
          <p className="text-dark-300 text-xs">
            Failed entrepreneurs are replaced by those who better serve consumers
          </p>
        </div>
      </div>
    </div>
  );
}

// Interactive demo showing voting with dollars
function VotingWithDollarsDemo() {
  const [budget, setBudget] = useState({ food: 30, entertainment: 25, savings: 20, charity: 15, other: 10 });

  const categories = [
    { key: 'food', label: 'Food & Dining', icon: '🍽️', color: 'bg-amber-500' },
    { key: 'entertainment', label: 'Entertainment', icon: '🎬', color: 'bg-purple-500' },
    { key: 'savings', label: 'Savings', icon: '🏦', color: 'bg-green-500' },
    { key: 'charity', label: 'Charity', icon: '❤️', color: 'bg-red-500' },
    { key: 'other', label: 'Other', icon: '📦', color: 'bg-blue-500' },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Voting with Dollars</h4>
      <p className="text-dark-400 text-sm mb-4">
        Every spending decision is a "vote" telling producers what to make. Adjust your budget to see how
        your choices direct the economy.
      </p>

      <div className="space-y-4 mb-6">
        {categories.map((cat) => (
          <div key={cat.key} className="bg-dark-900 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{cat.icon}</span>
                <span className="text-dark-200 text-sm">{cat.label}</span>
              </div>
              <span className="text-dark-100 font-mono">{budget[cat.key as keyof typeof budget]}%</span>
            </div>
            <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${cat.color} transition-all duration-300`}
                style={{ width: `${budget[cat.key as keyof typeof budget]}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
        <h5 className="text-primary-400 font-medium mb-2">Your Votes Tell Producers:</h5>
        <ul className="space-y-1 text-dark-300 text-sm">
          <li>• Hire more restaurant workers and farmers ({budget.food}% of votes)</li>
          <li>• Make more movies, games, and shows ({budget.entertainment}% of votes)</li>
          <li>• Build more banks and investment services ({budget.savings}% of votes)</li>
          <li>• Fund more charitable organizations ({budget.charity}% of votes)</li>
        </ul>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        "Every penny spent has the power to work upon the production processes." Even minority
        preferences get served—publishers produce poetry alongside bestsellers.
      </p>
    </div>
  );
}

// Interactive demo showing entrepreneurs as servants
function EntrepreneurServantDemo() {
  const [scenario, setScenario] = useState<'success' | 'failure'>('success');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Entrepreneurs: Masters or Servants?</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setScenario('success')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'success'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ✓ Serving Well
        </button>
        <button
          onClick={() => setScenario('failure')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'failure'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ✗ Failing to Serve
        </button>
      </div>

      {scenario === 'success' ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">👨‍💼</span>
            <div>
              <h5 className="text-green-400 font-medium">Successful Entrepreneur</h5>
              <p className="text-dark-300 text-sm mt-1">
                Anticipates what consumers will want, produces it efficiently, offers it at an
                attractive price. Consumers reward this service with purchases.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-green-400 text-lg font-bold block">Profit</span>
              <span className="text-dark-400 text-xs">Signal of good service</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-green-400 text-lg font-bold block">Growth</span>
              <span className="text-dark-400 text-xs">Resources flow to success</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-green-400 text-lg font-bold block">Retained Position</span>
              <span className="text-dark-400 text-xs">Continues serving consumers</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">👨‍💼</span>
            <div>
              <h5 className="text-red-400 font-medium">Failing Entrepreneur</h5>
              <p className="text-dark-300 text-sm mt-1">
                Misjudges consumer preferences, produces unwanted goods, or operates inefficiently.
                Consumers "fire" this entrepreneur by not buying.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-red-400 text-lg font-bold block">Losses</span>
              <span className="text-dark-400 text-xs">Signal of poor service</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-red-400 text-lg font-bold block">Shrinkage</span>
              <span className="text-dark-400 text-xs">Resources flow away</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3 text-center">
              <span className="text-red-400 text-lg font-bold block">Replacement</span>
              <span className="text-dark-400 text-xs">Better servants take over</span>
            </div>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4">
        "If a businessman does not strictly obey the orders of the public as they are conveyed to him
        by the structure of market prices, he suffers losses, he goes bankrupt, and is thus removed
        from his eminent position. Other men who did better in satisfying the demand of the consumers
        replace him."
      </p>
    </div>
  );
}

// Interactive demo showing competition
function CompetitionDemo() {
  const [type, setType] = useState<'biological' | 'catallactic'>('biological');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Two Types of Competition</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setType('biological')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            type === 'biological'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          🦁 Biological Competition
        </button>
        <button
          onClick={() => setType('catallactic')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            type === 'catallactic'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          🤝 Market Competition
        </button>
      </div>

      {type === 'biological' ? (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">Zero-Sum Struggle</h5>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-2xl block mb-2">🦁</span>
              <h6 className="text-dark-200 text-sm font-medium">Predator vs. Prey</h6>
              <p className="text-dark-400 text-xs">One wins, one dies</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-2xl block mb-2">⚔️</span>
              <h6 className="text-dark-200 text-sm font-medium">Rival for Resources</h6>
              <p className="text-dark-400 text-xs">Limited supply, direct conflict</p>
            </div>
          </div>
          <p className="text-dark-300 text-sm">
            In nature, competition often means one organism's gain is another's loss.
            Resources are fixed; survival requires defeating rivals.
          </p>
        </div>
      ) : (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-3">Positive-Sum Cooperation</h5>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-2xl block mb-2">🏪</span>
              <h6 className="text-dark-200 text-sm font-medium">Competing to Serve</h6>
              <p className="text-dark-400 text-xs">Who can satisfy consumers best?</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-2xl block mb-2">📈</span>
              <h6 className="text-dark-200 text-sm font-medium">All Can Benefit</h6>
              <p className="text-dark-400 text-xs">Consumers, workers, entrepreneurs</p>
            </div>
          </div>
          <p className="text-dark-300 text-sm">
            In markets, "competition" means striving to serve consumers better than alternatives.
            Everyone benefits from the process—there are no "losers" in voluntary exchange.
          </p>
        </div>
      )}

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h5 className="text-dark-200 font-medium mb-2">What Market Competition Achieves</h5>
        <ul className="space-y-1 text-dark-300 text-sm">
          <li>• Allocates scarce resources to those who serve consumers best</li>
          <li>• Drives innovation and efficiency improvements</li>
          <li>• Keeps prices low and quality high</li>
          <li>• Allows newcomers to challenge established firms</li>
        </ul>
      </div>
    </div>
  );
}

// Interactive demo showing the selective process
function SelectiveProcessDemo() {
  const [round, setRound] = useState(1);

  const entrepreneurs = [
    { name: 'Alice', skill: 90, survives: true },
    { name: 'Bob', skill: 75, survives: true },
    { name: 'Carol', skill: 60, survives: round < 2 },
    { name: 'David', skill: 45, survives: round < 2 },
    { name: 'Eve', skill: 30, survives: false },
  ];

  const activeEntrepreneurs = entrepreneurs.filter(e => {
    if (round === 1) return e.skill >= 30;
    if (round === 2) return e.skill >= 60;
    return e.skill >= 75;
  });

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Selective Process</h4>
      <p className="text-dark-400 text-sm mb-4">
        The market continuously selects for entrepreneurs who best serve consumers.
      </p>

      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map((r) => (
          <button
            key={r}
            onClick={() => setRound(r)}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              round === r
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Round {r}
          </button>
        ))}
      </div>

      <div className="space-y-2 mb-4">
        {entrepreneurs.map((e, i) => {
          const isActive = activeEntrepreneurs.includes(e);
          return (
            <div
              key={i}
              className={`rounded-lg p-3 flex items-center justify-between transition-all ${
                isActive ? 'bg-dark-900' : 'bg-dark-900/50 opacity-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-xl ${isActive ? '' : 'grayscale'}`}>👤</span>
                <span className={`font-medium ${isActive ? 'text-dark-200' : 'text-dark-500'}`}>
                  {e.name}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-2 bg-dark-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${isActive ? 'bg-green-500' : 'bg-red-500'}`}
                    style={{ width: `${e.skill}%` }}
                  />
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  isActive
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {isActive ? 'Active' : 'Exited'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Round {round}:</strong>{' '}
          {round === 1 && 'Eve fails to serve consumers adequately and exits the market.'}
          {round === 2 && 'Carol and David also fail to meet rising consumer expectations.'}
          {round === 3 && 'Only the best servants of consumers remain. The market selects for competence.'}
        </p>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        "The selective process of the market is actuated by the composite effort of all members of
        the market economy." Consumers, by buying or abstaining, determine who leads production.
      </p>
    </div>
  );
}

// Interactive demo showing saving and capital accumulation
function SavingDemo() {
  const [savingsRate, setSavingsRate] = useState(20);

  const consumption = 100 - savingsRate;
  const futureGrowth = savingsRate > 15 ? 'Growing' : savingsRate > 5 ? 'Stable' : 'Declining';

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Saving and Capital Accumulation</h4>
      <p className="text-dark-400 text-sm mb-4">
        "Saving and the resulting accumulation of capital goods are at the beginning of every
        attempt to improve the material conditions of man."
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Savings Rate: <strong className="text-primary-400">{savingsRate}%</strong>
        </label>
        <input
          type="range"
          min="0"
          max="50"
          value={savingsRate}
          onChange={(e) => setSavingsRate(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-dark-300 text-sm mb-2">Current Consumption</h5>
          <div className="h-4 bg-dark-700 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-amber-500 transition-all duration-300"
              style={{ width: `${consumption}%` }}
            />
          </div>
          <span className="text-amber-400 font-bold">{consumption}%</span>
          <span className="text-dark-400 text-sm ml-2">of income consumed now</span>
        </div>
        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-dark-300 text-sm mb-2">Capital Accumulation</h5>
          <div className="h-4 bg-dark-700 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${savingsRate * 2}%` }}
            />
          </div>
          <span className="text-green-400 font-bold">{savingsRate}%</span>
          <span className="text-dark-400 text-sm ml-2">saved for future production</span>
        </div>
      </div>

      <div className={`rounded-lg p-4 ${
        futureGrowth === 'Growing'
          ? 'bg-green-500/10 border border-green-500/30'
          : futureGrowth === 'Stable'
          ? 'bg-amber-500/10 border border-amber-500/30'
          : 'bg-red-500/10 border border-red-500/30'
      }`}>
        <h5 className={`font-medium mb-1 ${
          futureGrowth === 'Growing'
            ? 'text-green-400'
            : futureGrowth === 'Stable'
            ? 'text-amber-400'
            : 'text-red-400'
        }`}>
          Economy: {futureGrowth}
        </h5>
        <p className="text-dark-300 text-sm">
          {futureGrowth === 'Growing' && 'High savings funds new tools, machines, and production capacity. Future output will exceed current output.'}
          {futureGrowth === 'Stable' && 'Savings just replaces worn-out capital. Production capacity remains constant.'}
          {futureGrowth === 'Declining' && 'Capital consumption! Old tools wear out faster than new ones are created. Future output will fall.'}
        </p>
      </div>
    </div>
  );
}

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Chapter XV is one of the most important in <em>Human Action</em>—it could serve as a standalone
        introduction to free-market economics. Here Mises analyzes the market itself: what it is, how it
        works, and who really controls it.
      </p>

      <Callout type="definition" title="The Market Economy">
        "The market economy is the social system of the division of labor under private ownership of
        the means of production. Everybody acts on his own behalf; but everybody's actions aim at the
        satisfaction of other people's needs as well as at the satisfaction of his own."
      </Callout>

      {/* Characteristics */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Characteristics of the Market Economy</h2>

      <p className="text-dark-200 mb-4">
        The market is not a place but a <em>process</em>—the ongoing coordination of millions of
        individuals through voluntary exchange. Several key features make this coordination possible.
      </p>

      <MarketCharacteristicsDemo />

      <p className="text-dark-200 mb-4">
        The market "steers individuals into those areas where they can best serve the wants of their
        fellow men" through voluntary inducements rather than force. No one commands; everyone responds
        to price signals and their own judgment.
      </p>

      {/* Capital Goods and Capital */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Capital Goods and Capital</h2>

      <p className="text-dark-200 mb-4">
        Mises draws a crucial distinction between <em>capital goods</em> (physical things) and
        <em>capital</em> (a mental concept). This distinction is essential for understanding why
        economic calculation is impossible under socialism.
      </p>

      <CapitalConceptsDemo />

      <SavingDemo />

      <CardGrid>
        <Card title="Saving Is the Foundation" variant="default">
          "At the beginning of every step forward on the road to a more plentiful existence is saving."
          Present sacrifice enables future abundance.
        </Card>
        <Card title="Capital Requires Markets" variant="primary">
          While any society can have capital goods (factories, tools), only market economies can have
          capital—the accounting framework that enables rational production.
        </Card>
      </CardGrid>

      {/* Consumer Sovereignty */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Sovereignty of Consumers</h2>

      <p className="text-dark-200 mb-4">
        Who really controls production in a market economy? Mises's answer challenges common assumptions:
        it's not the wealthy, not the corporations, not the entrepreneurs—it's the <em>consumers</em>.
      </p>

      <ConsumerSovereigntyDemo />

      <Callout type="insight" title="The Captain Is the Consumer">
        "Neither the entrepreneurs nor the farmers nor the capitalists determine what has to be produced.
        The consumers do that. If a businessman does not strictly obey the orders of the public as they
        are conveyed to him by the structure of market prices, he suffers losses."
      </Callout>

      <VotingWithDollarsDemo />

      <EntrepreneurServantDemo />

      {/* Competition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Competition</h2>

      <p className="text-dark-200 mb-4">
        Many people think of competition as a ruthless struggle where the strong crush the weak. But
        market competition is fundamentally different from biological competition.
      </p>

      <CompetitionDemo />

      <p className="text-dark-200 mb-4">
        True restrictions on competition come from government, not markets. Large startup costs reflect
        real scarcity, not "barriers to entry." Absent government interference, any producer who can
        serve consumers better can enter and challenge established firms.
      </p>

      {/* The Selective Process */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Selective Process</h2>

      <p className="text-dark-200 mb-4">
        The market continuously selects for entrepreneurs who best serve consumers. This isn't
        survival of the strongest or most ruthless—it's survival of the best <em>servants</em>.
      </p>

      <SelectiveProcessDemo />

      <CardGrid>
        <Card title="Profit = Consumer Approval" variant="success">
          Profits signal that an entrepreneur is using resources well—transforming inputs into outputs
          consumers value more highly.
        </Card>
        <Card title="Loss = Consumer Rejection" variant="warning">
          Losses signal that resources are being wasted—the entrepreneur should change course or exit.
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The market is a <em>process</em> of voluntary exchange, not a physical place. It coordinates millions of individuals through price signals.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Capital goods (physical things) can exist under any system; capital (accounting framework) requires markets and prices.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Saving is the foundation of economic progress. It funds the capital goods that increase future productivity.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Consumers are sovereign—they determine what gets produced. Entrepreneurs are servants who must obey consumer preferences or fail.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Every spending decision is a "vote" directing resources. Even minority preferences get served.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">6.</span>
            <span>Market competition is positive-sum—everyone benefits. It allocates resources to those who serve consumers best.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">7.</span>
            <span>The market selects for competence through profit and loss. Failed entrepreneurs are replaced by better servants.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        With the market's structure now clear, Chapter XVI examines <em>Prices</em> in detail—how
        they form, what they communicate, and why they're essential for coordination. We'll see the
        pricing process in action.
      </p>
    </LessonLayout>
  );
}
