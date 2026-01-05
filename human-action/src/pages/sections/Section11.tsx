import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing how value transfers from ends to means
function GradationOfMeansDemo() {
  const [step, setStep] = useState(0);

  const chain = [
    {
      item: 'Dinner with friends',
      type: 'end',
      icon: '🍽️',
      explanation: 'The ultimate end: enjoyment, fellowship, nourishment. This is what the actor directly values.',
    },
    {
      item: 'Cooked meal',
      type: 'means',
      icon: '🍳',
      explanation: 'Valued because it can achieve the end. Its value derives from the dinner it produces.',
    },
    {
      item: 'Raw ingredients',
      type: 'means',
      icon: '🥬',
      explanation: 'Vegetables, meat, spices—valued because they can be transformed into the meal.',
    },
    {
      item: 'Money to buy ingredients',
      type: 'means',
      icon: '💵',
      explanation: 'Valued because it can be exchanged for ingredients. Money has no value in itself.',
    },
    {
      item: 'Labor for wages',
      type: 'means',
      icon: '💼',
      explanation: 'Work is valued because it earns money, which buys ingredients, which become meals, which create dinners.',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Gradation of Means</h4>
      <p className="text-dark-400 text-sm mb-4">
        Value flows backward from ends to means. Click through the chain to see how valuation works.
      </p>

      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {chain.map((item, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
              step === i
                ? item.type === 'end'
                  ? 'bg-green-600 text-white ring-2 ring-green-400'
                  : 'bg-primary-600 text-white ring-2 ring-primary-400'
                : 'bg-dark-900 text-dark-300 hover:bg-dark-700'
            }`}
          >
            <span>{item.icon}</span>
            <span className="text-sm hidden md:inline">{item.item}</span>
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{chain[step].icon}</span>
          <div>
            <h5 className={`font-medium ${chain[step].type === 'end' ? 'text-green-400' : 'text-primary-400'}`}>
              {chain[step].item}
            </h5>
            <span className={`text-xs px-2 py-0.5 rounded ${
              chain[step].type === 'end' ? 'bg-green-500/20 text-green-400' : 'bg-primary-500/20 text-primary-400'
            }`}>
              {chain[step].type === 'end' ? 'Ultimate End' : 'Means'}
            </span>
          </div>
        </div>
        <p className="text-dark-300 text-sm">{chain[step].explanation}</p>
      </div>

      {step > 0 && (
        <div className="flex items-center justify-center gap-2 mt-4 text-dark-400 text-sm">
          <span>Value flows:</span>
          {chain.slice(0, step + 1).reverse().map((item, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-primary-400">←</span>}
              <span>{item.icon}</span>
            </span>
          ))}
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic text-center">
        "Acting man transfers the valuation of ends he aims at to the means."
      </p>
    </div>
  );
}

// Interactive demo showing the barter fiction
function BarterFictionDemo() {
  const [view, setView] = useState<'barter' | 'money'>('barter');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Barter-Fiction</h4>
      <p className="text-dark-400 text-sm mb-4">
        Economists imagine a barter economy to understand exchange. But this simplification can mislead.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('barter')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'barter'
              ? 'bg-amber-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Imaginary Barter Economy
        </button>
        <button
          onClick={() => setView('money')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'money'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Real Monetary Economy
        </button>
      </div>

      {view === 'barter' ? (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
          <h5 className="text-amber-400 font-medium mb-3">The Barter Construction</h5>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-dark-900 rounded-lg p-4 text-center">
              <span className="text-3xl block mb-2">🌾</span>
              <span className="text-dark-200 text-sm">Wheat</span>
            </div>
            <span className="text-amber-400 text-2xl">⇄</span>
            <div className="bg-dark-900 rounded-lg p-4 text-center">
              <span className="text-3xl block mb-2">🐄</span>
              <span className="text-dark-200 text-sm">Cattle</span>
            </div>
          </div>

          <div className="space-y-2 text-dark-300 text-sm">
            <p><strong className="text-amber-400">Purpose:</strong> To isolate the "real" exchange of goods for goods</p>
            <p><strong className="text-amber-400">Value:</strong> Helps us see that ultimately, goods exchange for goods</p>
            <p><strong className="text-amber-400">Danger:</strong> Can suggest money is "neutral" and doesn't affect exchange</p>
          </div>
        </div>
      ) : (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">The Monetary Reality</h5>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-dark-900 rounded-lg p-4 text-center">
              <span className="text-3xl block mb-2">🌾</span>
              <span className="text-dark-200 text-sm">Wheat</span>
            </div>
            <span className="text-primary-400 text-2xl">→</span>
            <div className="bg-dark-900 rounded-lg p-4 text-center">
              <span className="text-3xl block mb-2">💵</span>
              <span className="text-dark-200 text-sm">Money</span>
            </div>
            <span className="text-primary-400 text-2xl">→</span>
            <div className="bg-dark-900 rounded-lg p-4 text-center">
              <span className="text-3xl block mb-2">🐄</span>
              <span className="text-dark-200 text-sm">Cattle</span>
            </div>
          </div>

          <div className="space-y-2 text-dark-300 text-sm">
            <p><strong className="text-primary-400">Reality:</strong> Money is the intermediary in virtually all exchanges</p>
            <p><strong className="text-primary-400">Money matters:</strong> Changes in money supply affect all prices and calculations</p>
            <p><strong className="text-primary-400">Key insight:</strong> Money enables economic calculation—it's not neutral!</p>
          </div>
        </div>
      )}

      <Callout type="warning" title="The Neutrality Myth">
        Many economists assumed money was just a "veil" over real transactions. But money fundamentally
        transforms the economy by making calculation possible. Changes in money supply have real effects.
      </Callout>
    </div>
  );
}

// Interactive demo showing the equal value fallacy
function EqualValueFallacyDemo() {
  const [theory, setTheory] = useState<'classical' | 'subjective'>('classical');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Equal Value Fallacy</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTheory('classical')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            theory === 'classical'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Classical View (Fallacy)
        </button>
        <button
          onClick={() => setTheory('subjective')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            theory === 'subjective'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Subjective View (Correct)
        </button>
      </div>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <p className="text-dark-200 text-center mb-4">
          Alice trades <span className="text-amber-400 font-bold">$20</span> for Bob's{' '}
          <span className="text-blue-400 font-bold">book</span>
        </p>

        {theory === 'classical' ? (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h5 className="text-red-400 font-medium mb-3">Classical Interpretation</h5>
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="text-center">
                <span className="text-2xl block">$20</span>
                <span className="text-dark-400 text-sm">Value: 20 units</span>
              </div>
              <span className="text-2xl">=</span>
              <div className="text-center">
                <span className="text-2xl block">📕</span>
                <span className="text-dark-400 text-sm">Value: 20 units</span>
              </div>
            </div>
            <p className="text-dark-300 text-sm text-center">
              "The items exchanged must be of equal value, otherwise why would they trade?"
            </p>
            <div className="mt-3 p-2 bg-dark-800 rounded text-xs text-red-400">
              ❌ This view dominated from Aristotle through Marx and "frustrated" economic understanding for 2,000 years
            </div>
          </div>
        ) : (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <h5 className="text-green-400 font-medium mb-3">Subjective Interpretation</h5>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div className="text-center p-3 bg-dark-800 rounded-lg">
                <span className="text-dark-300 text-sm block mb-1">Alice's Valuation:</span>
                <span className="text-green-400">📕 Book {'>'} $20</span>
              </div>
              <div className="text-center p-3 bg-dark-800 rounded-lg">
                <span className="text-dark-300 text-sm block mb-1">Bob's Valuation:</span>
                <span className="text-green-400">$20 {'>'} 📕 Book</span>
              </div>
            </div>
            <p className="text-dark-300 text-sm text-center">
              "People trade precisely <em>because</em> they value things differently. Both gain!"
            </p>
            <div className="mt-3 p-2 bg-dark-800 rounded text-xs text-green-400">
              ✓ The modern subjective theory: exchange requires unequal valuations, making it win-win
            </div>
          </div>
        )}
      </div>

      <p className="text-dark-400 text-sm italic text-center">
        "There is no such thing as an equal exchange. At the point of exchange, both buyer and seller
        consider themselves to be better off."
      </p>
    </div>
  );
}

// Interactive demo showing the diamond-water paradox
function DiamondWaterDemo() {
  const [focus, setFocus] = useState<'total' | 'marginal'>('total');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Diamond-Water Paradox</h4>
      <p className="text-dark-400 text-sm mb-4">
        Why do diamonds cost more than water, when water is essential for life and diamonds are mere luxury?
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFocus('total')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            focus === 'total'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Total Utility View
        </button>
        <button
          onClick={() => setFocus('marginal')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            focus === 'marginal'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Marginal Utility View
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <span className="text-4xl block mb-2">💧</span>
          <h5 className="text-blue-400 font-medium mb-2">Water</h5>
          {focus === 'total' ? (
            <div className="space-y-1 text-sm">
              <p className="text-dark-200">Essential for life</p>
              <p className="text-green-400 font-bold">Total utility: ENORMOUS</p>
              <p className="text-dark-400">Price: $0.01/gallon</p>
            </div>
          ) : (
            <div className="space-y-1 text-sm">
              <p className="text-dark-200">Abundant supply</p>
              <p className="text-amber-400">Next gallon used for: watering lawn</p>
              <p className="text-red-400 font-bold">Marginal utility: LOW</p>
            </div>
          )}
        </div>

        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <span className="text-4xl block mb-2">💎</span>
          <h5 className="text-purple-400 font-medium mb-2">Diamond</h5>
          {focus === 'total' ? (
            <div className="space-y-1 text-sm">
              <p className="text-dark-200">Mere decoration</p>
              <p className="text-amber-400 font-bold">Total utility: LOW</p>
              <p className="text-dark-400">Price: $5,000/carat</p>
            </div>
          ) : (
            <div className="space-y-1 text-sm">
              <p className="text-dark-200">Extremely scarce</p>
              <p className="text-purple-400">Next diamond used for: engagement ring</p>
              <p className="text-green-400 font-bold">Marginal utility: HIGH</p>
            </div>
          )}
        </div>
      </div>

      <div className={`rounded-lg p-4 border ${
        focus === 'total'
          ? 'bg-red-500/10 border-red-500/30'
          : 'bg-green-500/10 border-green-500/30'
      }`}>
        {focus === 'total' ? (
          <div>
            <h5 className="text-red-400 font-medium mb-2">The Paradox</h5>
            <p className="text-dark-300 text-sm">
              If we look at total utility, water should be worth infinitely more than diamonds.
              But prices tell the opposite story. Classical economists couldn't solve this puzzle.
            </p>
          </div>
        ) : (
          <div>
            <h5 className="text-green-400 font-medium mb-2">The Solution: Marginal Utility</h5>
            <p className="text-dark-300 text-sm">
              Prices reflect <em>marginal</em> utility—the value of the <em>next</em> unit.
              Water is abundant, so the next gallon serves low-priority uses. Diamonds are
              scarce, so each one serves high-priority uses.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Interactive demo on ordinal vs cardinal valuation
function OrdinalValueDemo() {
  const [items, setItems] = useState([
    { id: 1, name: 'Concert tickets', emoji: '🎵' },
    { id: 2, name: 'New shoes', emoji: '👟' },
    { id: 3, name: 'Dinner out', emoji: '🍽️' },
    { id: 4, name: 'Video game', emoji: '🎮' },
  ]);

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newItems = [...items];
    if (direction === 'up' && index > 0) {
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
    } else if (direction === 'down' && index < items.length - 1) {
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    }
    setItems(newItems);
  };

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Ordinal Valuation</h4>
      <p className="text-dark-400 text-sm mb-4">
        Arrange these items by preference. Notice: you can only <em>rank</em> them, not measure them.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="text-primary-400 font-medium mb-3">Your Preference Ranking</h5>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2 bg-dark-900 rounded-lg p-3">
                <span className="text-2xl font-bold text-primary-500 w-8">{index + 1}</span>
                <span className="text-xl">{item.emoji}</span>
                <span className="text-dark-100 flex-1">{item.name}</span>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveItem(index, 'up')}
                    disabled={index === 0}
                    className="px-2 py-1 bg-dark-700 rounded text-xs text-dark-300 hover:bg-dark-600 disabled:opacity-30"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveItem(index, 'down')}
                    disabled={index === items.length - 1}
                    className="px-2 py-1 bg-dark-700 rounded text-xs text-dark-300 hover:bg-dark-600 disabled:opacity-30"
                  >
                    ▼
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-amber-400 font-medium mb-3">What We Can and Cannot Say</h5>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-dark-200">
                "{items[0].name} is preferred to {items[1].name}"
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-dark-200">
                "{items[3].name} is least preferred"
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">✗</span>
              <span className="text-dark-200">
                "{items[0].name} is worth 2.5× {items[1].name}"
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">✗</span>
              <span className="text-dark-200">
                "Total value of all items: 47 utils"
              </span>
            </div>
          </div>
          <p className="text-dark-400 text-xs mt-4 italic">
            Subjective value cannot be measured in units. We rank, but we cannot calculate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Before examining how money prices enable calculation, we must understand why calculation
        is problematic <em>without</em> them. This chapter explores how actors value means,
        exposes the classical economists' errors, and shows why monetary exchange is indispensable.
      </p>

      {/* The Gradation of Means */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Gradation of Means</h2>

      <p className="text-dark-200 mb-4">
        Acting man values <strong className="text-primary-400">means</strong> according to the
        valuation he places on the <strong className="text-green-400">ends</strong> they can achieve.
        A hammer is valued not for itself, but for the house it can help build. Money is valued
        not for the paper, but for what it can purchase.
      </p>

      <GradationOfMeansDemo />

      <Callout type="insight" title="Value Flows Backward">
        Value originates with the ultimate end (satisfaction of wants) and flows backward through the
        chain of means. The apple seed is valued through consideration of the future apples it can produce.
      </Callout>

      {/* The Barter-Fiction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Barter-Fiction</h2>

      <p className="text-dark-200 mb-4">
        To understand exchange, economists often imagine a world of direct barter—goods trading
        directly for goods, with no money involved. This mental construction has value, but also
        serious dangers.
      </p>

      <BarterFictionDemo />

      <CardGrid>
        <Card title="Why Imagine Barter?" variant="default">
          It helps us see that ultimately, goods exchange for goods. Money is an intermediary.
          When you work for money to buy groceries, you are really trading your labor for food.
        </Card>
        <Card title="The Danger" variant="warning">
          Economists concluded that money is "neutral"—just a convenience that doesn't affect
          real exchange. This is deeply wrong. Money transforms economic calculation entirely.
        </Card>
      </CardGrid>

      {/* The Equal Value Fallacy */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Equal Value Fallacy</h2>

      <p className="text-dark-200 mb-4">
        For over two thousand years, from Aristotle through Marx, economists assumed that goods
        exchanged in the market must be of <em>equal value</em>. After all, why else would people trade?
        This seemingly plausible assumption "frustrated" the development of economic understanding.
      </p>

      <EqualValueFallacyDemo />

      <p className="text-dark-200 mb-4">
        The modern breakthrough came from recognizing that <strong className="text-primary-400">people
        trade precisely because they value things differently</strong>. Alice values the book more than $20;
        Bob values $20 more than the book. Both gain from trade. No equality of value is involved.
      </p>

      <Callout type="definition" title="The Subjective Theory of Value">
        Value does not reside objectively in things themselves. It exists only in the mind of the
        individual making an evaluation. This is why voluntary exchange is always win-win—both
        parties value what they receive more than what they give up.
      </Callout>

      {/* The Diamond-Water Paradox */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Diamond-Water Paradox</h2>

      <p className="text-dark-200 mb-4">
        The classical economists struggled with a puzzle: water is essential for life, yet cheap;
        diamonds are mere decoration, yet expensive. If value comes from usefulness, shouldn't
        water be priceless?
      </p>

      <DiamondWaterDemo />

      <p className="text-dark-200 mb-4">
        The Austrian economists solved this paradox with the concept of <strong className="text-primary-400">marginal
        utility</strong>. We don't value "water in general" or "diamonds in general." We value
        <em>specific units</em>—and the value of each unit depends on the least important use
        to which we would put it.
      </p>

      {/* Ordinal Valuation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Ordinal, Not Cardinal</h2>

      <p className="text-dark-200 mb-4">
        A crucial insight: valuation is <strong className="text-primary-400">ordinal</strong> (ranking),
        not <strong className="text-amber-400">cardinal</strong> (measuring). We can say "I prefer A to B,"
        but we cannot say "A is worth 1.7 times B." There is no unit of subjective satisfaction.
      </p>

      <OrdinalValueDemo />

      <CardGrid>
        <Card title="What This Means" variant="primary">
          When you trade five oranges for eight apples, we know only that you preferred the apples.
          We cannot calculate your "gain" in satisfaction units—there are no such units.
        </Card>
        <Card title="The Problem" variant="warning">
          Without cardinal measurement of value, how can we compare different production methods
          using different inputs? This is the economic calculation problem that only money can solve.
        </Card>
      </CardGrid>

      {/* The Problem of Economic Calculation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Problem of Economic Calculation</h2>

      <p className="text-dark-200 mb-4">
        Technology tells us many different ways to produce the same output. But it cannot tell us
        which way is <em>most economical</em>. Each method uses different combinations of heterogeneous
        inputs that cannot be directly compared.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">The Calculation Impossibility</h4>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-amber-400 font-medium mb-2">Method A</h5>
            <ul className="text-dark-300 text-sm space-y-1">
              <li>• 100 tons of steel</li>
              <li>• 500 hours of skilled labor</li>
              <li>• 2 acres of land</li>
            </ul>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-blue-400 font-medium mb-2">Method B</h5>
            <ul className="text-dark-300 text-sm space-y-1">
              <li>• 50 tons of steel</li>
              <li>• 1000 hours of skilled labor</li>
              <li>• 5 acres of land</li>
            </ul>
          </div>
        </div>
        <p className="text-dark-400 text-sm text-center">
          Which method is more economical? Without reducing these to a common denominator,
          it's impossible to say. This is why money prices are essential.
        </p>
      </div>

      <Callout type="insight" title="Only Money Prices Solve This">
        "Each means of production is more or less suitable for a wide range of ends" with differing
        substitution ratios. Without money prices providing a common denominator, rational comparison
        of production methods becomes impossible.
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Value flows backward from ends to means. Means are valued according to the ends they can achieve.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The barter-fiction helps analyze exchange but misleads if it suggests money is "neutral." Money transforms calculation.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>The "equal value" fallacy held back economics for 2,000 years. People trade because they value things differently—making exchange win-win.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The diamond-water paradox is solved by marginal utility: we value specific units, not goods "in general."</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Valuation is ordinal (ranking) not cardinal (measuring). We cannot quantify subjective satisfaction.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">6.</span>
            <span>Without money prices providing a common denominator, comparing heterogeneous production methods is impossible.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        Having seen why valuation alone cannot solve the calculation problem, the next chapter
        examines the proper sphere and limits of economic calculation. What exactly can money
        prices tell us, and what lies beyond their reach?
      </p>
    </LessonLayout>
  );
}
