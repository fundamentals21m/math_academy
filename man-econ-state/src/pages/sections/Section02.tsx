import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Money Emergence Demo
function MoneyEmergenceDemo() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Direct Barter',
      description: 'Each person must find someone who has what they want AND wants what they have.',
      problem: 'The violin teacher needs bread, but the baker doesn\'t want music lessons.',
      traders: ['🎻 → ?', '🍞 → ?', '🥛 → ?'],
    },
    {
      title: 'Indirect Exchange Begins',
      description: 'People notice that some goods are more widely desired than others.',
      problem: 'The violin teacher trades lessons for milk, knowing others will accept milk.',
      traders: ['🎻 → 🥛', '🥛 → 🍞', '🍞 → ?'],
    },
    {
      title: 'A Medium Emerges',
      description: 'One good becomes widely accepted—everyone will take it in trade.',
      problem: 'Gold, cattle, or salt become common media. Traders keep stocks of it.',
      traders: ['🎻 → 🪙', '🪙 → 🍞', '🪙 → 🥛'],
    },
    {
      title: 'Money Established',
      description: 'The most marketable good becomes money—the general medium of exchange.',
      problem: 'Everyone quotes prices in money. Complex trades become simple.',
      traders: ['All goods → 🪙 → All goods'],
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Emergence of Money</h4>

      <div className="flex gap-2 mb-4">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`flex-1 py-2 text-sm rounded transition-colors ${
              step === i ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Step {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-emerald-400 mb-2">{steps[step].title}</h5>
        <p className="text-dark-200 mb-3">{steps[step].description}</p>
        <p className="text-dark-400 text-sm italic mb-4">{steps[step].problem}</p>
        <div className="flex justify-center gap-4 text-2xl">
          {steps[step].traders.map((t, i) => (
            <span key={i} className="bg-dark-800 px-3 py-1 rounded">{t}</span>
          ))}
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Money was not invented by government—it emerged spontaneously from market exchange.
      </p>
    </div>
  );
}

// Money Properties Explorer
function MoneyPropertiesExplorer() {
  const [activeProperty, setActiveProperty] = useState(0);

  const properties = [
    {
      name: 'Marketability',
      description: 'Widely desired and easily traded. Everyone will accept it.',
      good: 'Gold was valued for jewelry, dentistry, electronics, and as a store of value.',
      bad: 'Specialized goods (like violin lessons) have limited demand.',
    },
    {
      name: 'Divisibility',
      description: 'Can be divided into small units without losing value proportionally.',
      good: 'Gold can be divided into coins of any size. An ounce is worth 1/10 of ten ounces.',
      bad: 'Cattle cannot be divided—you can\'t pay with "half a cow."',
    },
    {
      name: 'Durability',
      description: 'Maintains its physical integrity over time.',
      good: 'Gold doesn\'t rust, tarnish, or decay. It lasts for millennia.',
      bad: 'Fish, grain, or flowers spoil quickly—poor for storing value.',
    },
    {
      name: 'Portability',
      description: 'High value relative to weight, easy to transport.',
      good: 'A small gold coin can represent significant purchasing power.',
      bad: 'Iron or salt are heavy relative to their value.',
    },
    {
      name: 'Recognizability',
      description: 'Easy to verify authenticity and quality.',
      good: 'Gold has distinctive color, weight, and can be tested with acid.',
      bad: 'Gems require expert evaluation to assess quality.',
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Properties of Good Money</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {properties.map((prop, i) => (
          <button
            key={i}
            onClick={() => setActiveProperty(i)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activeProperty === i
                ? 'bg-emerald-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {prop.name}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-emerald-400 mb-2">{properties[activeProperty].name}</h5>
        <p className="text-dark-200 mb-3">{properties[activeProperty].description}</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-emerald-900/30 p-3 rounded border border-emerald-600/30">
            <p className="text-emerald-400 font-semibold mb-1">✓ Good Example</p>
            <p className="text-dark-300">{properties[activeProperty].good}</p>
          </div>
          <div className="bg-rose-900/30 p-3 rounded border border-rose-600/30">
            <p className="text-rose-400 font-semibold mb-1">✗ Poor Example</p>
            <p className="text-dark-300">{properties[activeProperty].bad}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Price Calculation Demo
function PriceCalculationDemo() {
  const [good, setGood] = useState('bread');

  const prices = {
    bread: { direct: '2 fish, or 3 eggs, or 1/4 chicken, or...', money: '$3' },
    shoes: { direct: '50 fish, or 75 eggs, or 6 chickens, or...', money: '$75' },
    house: { direct: '10,000 fish, or 15,000 eggs, or...', money: '$150,000' },
  };

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Money Prices vs. Barter Ratios</h4>

      <div className="flex gap-2 mb-4">
        {Object.keys(prices).map((g) => (
          <button
            key={g}
            onClick={() => setGood(g)}
            className={`px-4 py-2 rounded capitalize transition-colors ${
              good === g ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-rose-400 font-semibold mb-2">Without Money</p>
          <p className="text-dark-300 text-sm">{prices[good as keyof typeof prices].direct}</p>
          <p className="text-dark-500 text-xs mt-2 italic">
            Must remember thousands of exchange ratios!
          </p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-emerald-400 font-semibold mb-2">With Money</p>
          <p className="text-dark-300 text-2xl font-bold">{prices[good as keyof typeof prices].money}</p>
          <p className="text-dark-500 text-xs mt-2 italic">
            One simple number tells you everything.
          </p>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        With 100 goods, barter requires 4,950 exchange ratios. Money reduces this to just 100 prices.
      </p>
    </div>
  );
}

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Money is not an invention of the state. It is not the product of a legislative act.
        The sanction of political authority is not necessary for its existence."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Carl Menger (quoted approvingly by Rothbard)
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        The previous chapter showed that direct exchange (barter) has severe limitations.
        This chapter explains how <strong className="text-emerald-400">indirect exchange</strong> and
        <strong className="text-emerald-400"> money</strong> emerge spontaneously to overcome
        these limitations, enabling a complex division of labor and modern economic life.
      </p>

      {/* Section 1: Limitations of Direct Exchange */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Limitations of Direct Exchange</h2>

      <p className="my-4">
        Rothbard begins by summarizing why barter cannot sustain a complex economy:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Double Coincidence</h4>
          <p className="text-sm text-dark-300">
            You need someone who wants what you have AND has what you want—at the same
            time and place.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Indivisibility</h4>
          <p className="text-sm text-dark-300">
            How do you make small purchases when your good (like a house) cannot be
            divided into pieces?
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Calculation Problem</h4>
          <p className="text-sm text-dark-300">
            With n goods, you need n(n-1)/2 exchange ratios. With 100 goods: 4,950 ratios
            to remember!
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Specialization Limit</h4>
          <p className="text-sm text-dark-300">
            These problems restrict how much people can specialize, limiting productivity
            gains from division of labor.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          <strong>Historical note:</strong> Primitive economies relied on barter and remained
          poor. The emergence of money allowed the transition to complex, wealthy societies.
        </p>
      </Callout>

      {/* Section 2: Emergence of Indirect Exchange */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Emergence of Indirect Exchange</h2>

      <p className="my-4">
        The solution to barter's problems is <strong className="text-emerald-400">indirect exchange</strong>:
        instead of trading directly for what you want, you trade for something that others will accept.
      </p>

      <MoneyEmergenceDemo />

      <p className="my-4">
        This process is spontaneous—no one planned it. Each trader, pursuing their own
        advantage, finds it easier to accept widely-desired goods. Over time, one or a few
        goods become <strong className="text-emerald-400">media of exchange</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">Definition: Money</h4>
        <p className="text-dark-200 text-lg mb-4">
          Money is the <strong>generally accepted medium of exchange</strong>—the good that
          virtually everyone in a society will accept in trade.
        </p>
        <p className="text-dark-400 text-sm">
          A medium of exchange is any good accepted in trade not for its direct use value,
          but for further exchange. Money is the most marketable of all goods.
        </p>
      </div>

      {/* Section 3: Development of Money */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Development of Money</h2>

      <p className="my-4">
        Throughout history, many goods have served as money: cattle, salt, shells, beads,
        tobacco, and metals. Over time, the precious metals—especially gold and silver—emerged
        as the dominant moneys in most societies. Why?
      </p>

      <MoneyPropertiesExplorer />

      <p className="my-4">
        Gold and silver possess all these properties in high degree. This explains their
        near-universal adoption as money throughout history, across unconnected civilizations.
      </p>

      <Callout type="note">
        <p>
          <strong>Market selection:</strong> No king or legislature decreed that gold should
          be money. Millions of traders, through countless transactions, selected gold because
          it best served as a medium of exchange. This is an example of spontaneous order—
          complex social institutions arising from human action but not human design.
        </p>
      </Callout>

      {/* Section 4: Money and Prices */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Money and Prices</h2>

      <p className="my-4">
        Once money exists, all goods can be priced in terms of money. This enables
        <strong className="text-emerald-400"> economic calculation</strong>—the ability to compare
        costs and revenues, to determine profit and loss, to allocate resources rationally.
      </p>

      <PriceCalculationDemo />

      <p className="my-4">
        Money prices make the economy calculable. A business can now ask: "Should we make
        more shoes or more hats?" By comparing prices of inputs and outputs, they can determine
        which production plan is profitable—which uses resources to create more value than it
        consumes.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Profit</h4>
          <p className="text-sm text-dark-300">
            Revenue exceeds costs. The business creates value—its output is worth more
            than its inputs.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Loss</h4>
          <p className="text-sm text-dark-300">
            Costs exceed revenue. The business destroys value—it consumes resources
            worth more than it produces.
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          <strong>The calculation problem:</strong> Without money prices, economic calculation
          becomes impossible. This is Mises's famous argument against socialism: central
          planners cannot know which production methods are efficient without market prices
          for capital goods.
        </p>
      </Callout>

      {/* Section 5: The Money Relation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. The "Money Relation"</h2>

      <p className="my-4">
        The value of money—its purchasing power—is determined like any other good: by supply
        and demand. The <strong className="text-emerald-400">money relation</strong> describes
        the factors that determine how much money people want to hold.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            factor: 'Transaction Demand',
            description: 'People hold money to make purchases between income receipts.',
            effect: 'More transactions → higher demand for money → higher purchasing power',
          },
          {
            factor: 'Precautionary Demand',
            description: 'People hold reserves for emergencies and unexpected opportunities.',
            effect: 'More uncertainty → higher demand for money → higher purchasing power',
          },
          {
            factor: 'Money Supply',
            description: 'The total stock of money in the economy.',
            effect: 'More money (same demand) → lower purchasing power per unit',
          },
        ].map(({ factor, description, effect }) => (
          <div key={factor} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full text-white font-bold text-sm shrink-0">
              {factor[0]}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{factor}</p>
              <p className="text-sm text-dark-400">{description}</p>
              <p className="text-sm text-dark-500 mt-1 italic">{effect}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Historical Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">From Commodity to Fiat</h2>

      <p className="my-4">
        Rothbard notes that money historically was always a commodity—something with value
        in its own right (gold, silver). Paper money and bank deposits arose as claims to
        commodity money, convenient substitutes that could be redeemed for the real thing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl mb-2">🪙</p>
          <p className="font-semibold text-dark-100">Commodity Money</p>
          <p className="text-dark-400 text-sm mt-1">Gold, silver, copper coins with intrinsic value</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl mb-2">📜</p>
          <p className="font-semibold text-dark-100">Money Substitutes</p>
          <p className="text-dark-400 text-sm mt-1">Paper notes redeemable for gold</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl mb-2">💵</p>
          <p className="font-semibold text-dark-100">Fiat Money</p>
          <p className="text-dark-400 text-sm mt-1">Irredeemable paper decreed by government</p>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>Rothbard's view:</strong> Fiat money (like today's dollar) could only emerge
          after centuries of commodity money established trust. Governments then gradually
          severed the link to gold. This process and its consequences are examined later.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Indirect exchange</strong> arises spontaneously to overcome the
              limitations of barter. People trade for marketable goods even when they
              don't want them directly.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Money</strong> is the most marketable good—the generally accepted
              medium of exchange. It was not invented by government.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              Good money has <strong>marketability, divisibility, durability, portability,
              and recognizability</strong>. Gold and silver excel at all these.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              <strong>Money prices</strong> enable economic calculation—comparing costs
              to revenues, determining profit and loss, allocating resources efficiently.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              The <strong>purchasing power of money</strong> is determined by supply and
              demand, like any other good.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 4 examines <strong>Prices and Consumption</strong>—how money prices are
        determined in the market, how consumers allocate their income, and how their
        preferences guide production decisions.
      </p>
    </LessonLayout>
  );
}
