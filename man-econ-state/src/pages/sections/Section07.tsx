import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Entrepreneurial Profit/Loss Demo
function ProfitLossDemo() {
  const [revenue, setRevenue] = useState(150);
  const [costs, setCosts] = useState(100);

  const profit = revenue - costs;
  const isProfit = profit > 0;

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Entrepreneurial Profit and Loss</h4>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Expected Revenue ($)</label>
          <input
            type="range"
            min={50}
            max={200}
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">${revenue}</span>
        </div>
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Total Costs ($)</label>
          <input
            type="range"
            min={50}
            max={150}
            value={costs}
            onChange={(e) => setCosts(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">${costs}</span>
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4 text-center">
        <p className="text-dark-300 mb-2">Revenue - Costs = </p>
        <p className={`text-3xl font-bold ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
          {isProfit ? '+' : ''}${profit}
        </p>
        <p className={`text-sm mt-2 ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
          {isProfit ? 'PROFIT: Resources used well!' : 'LOSS: Resources misallocated'}
        </p>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Profit signals that the entrepreneur served consumers well. Loss signals failure.
        Prices coordinate this discovery process.
      </p>
    </div>
  );
}

// Uncertainty and Entrepreneurship
function UncertaintyDemo() {
  const [scenario, setScenario] = useState<'known' | 'risky' | 'uncertain'>('risky');

  const scenarios = {
    known: {
      title: 'Certain Outcome',
      description: 'The future is known with certainty.',
      example: 'I will receive $100 in one year.',
      entrepreneurRole: 'No role—outcomes are predetermined.',
      profit: 'None—no uncertainty means no profit opportunity.',
    },
    risky: {
      title: 'Risk (Quantifiable)',
      description: 'Outcomes are uncertain but probabilities are known.',
      example: '50% chance of $150, 50% chance of $50. Expected value: $100.',
      entrepreneurRole: 'Insurance can cover risks; entrepreneurs may avoid.',
      profit: 'Possible, but risk premiums are calculable.',
    },
    uncertain: {
      title: 'Uncertainty (Unquantifiable)',
      description: 'Future outcomes cannot be assigned probabilities.',
      example: 'Will customers like this new product? Nobody knows.',
      entrepreneurRole: 'Essential—entrepreneurs bear genuine uncertainty.',
      profit: 'True profit/loss comes from uncertain outcomes.',
    },
  };

  const data = scenarios[scenario];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Types of Uncertainty</h4>

      <div className="flex gap-2 mb-4">
        {(['known', 'risky', 'uncertain'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setScenario(s)}
            className={`flex-1 py-2 rounded capitalize transition-colors ${
              scenario === s ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {scenarios[s].title.split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-emerald-400 mb-2">{data.title}</h5>
        <p className="text-dark-200 mb-3">{data.description}</p>
        <p className="text-dark-400 text-sm italic mb-3">{data.example}</p>
        <div className="space-y-2 text-sm">
          <p><span className="text-dark-400">Entrepreneur's role:</span> <span className="text-dark-200">{data.entrepreneurRole}</span></p>
          <p><span className="text-dark-400">Profit possibility:</span> <span className="text-dark-200">{data.profit}</span></p>
        </div>
      </div>
    </div>
  );
}

// Market Adjustment Process
function MarketAdjustmentDemo() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      title: 'Initial Equilibrium',
      description: 'Entrepreneurs earn normal returns (interest only). No pure profits.',
      price: 100,
      cost: 95,
    },
    {
      title: 'Demand Increases',
      description: 'Consumer tastes change. Price rises above cost.',
      price: 130,
      cost: 95,
    },
    {
      title: 'Profits Attract Entry',
      description: 'New entrepreneurs enter, attracted by profits.',
      price: 120,
      cost: 100,
    },
    {
      title: 'New Equilibrium',
      description: 'Supply increases, profits competed away. New normal returns.',
      price: 110,
      cost: 105,
    },
  ];

  const current = stages[stage];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Market Adjustment Process</h4>

      <div className="flex gap-2 mb-4">
        {stages.map((_, i) => (
          <button
            key={i}
            onClick={() => setStage(i)}
            className={`flex-1 py-2 text-sm rounded transition-colors ${
              stage === i ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-emerald-400 mb-2">{current.title}</h5>
        <p className="text-dark-300 mb-4">{current.description}</p>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-dark-400 text-sm">Price</p>
            <p className="text-2xl font-bold text-white">${current.price}</p>
          </div>
          <div>
            <p className="text-dark-400 text-sm">Cost</p>
            <p className="text-2xl font-bold text-white">${current.cost}</p>
          </div>
          <div>
            <p className="text-dark-400 text-sm">Profit</p>
            <p className={`text-2xl font-bold ${current.price - current.cost > 10 ? 'text-emerald-400' : 'text-dark-300'}`}>
              ${current.price - current.cost}
            </p>
          </div>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Profits are self-eliminating. They attract competition until normal returns prevail.
      </p>
    </div>
  );
}

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The entrepreneur is the driving force of the market economy. His function is to
        adjust production to the anticipated changes in conditions."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        The previous chapter examined factor pricing in an "evenly rotating economy"—a theoretical
        construct where nothing changes. This chapter introduces <strong className="text-emerald-400">
        change and uncertainty</strong>, revealing the crucial role of the
        <strong className="text-emerald-400"> entrepreneur</strong>.
      </p>

      {/* Section 1: Entrepreneurial Profit and Loss */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Entrepreneurial Profit and Loss</h2>

      <p className="my-4">
        In the real world, the future is uncertain. <strong className="text-emerald-400">Entrepreneurs</strong>
        are those who bear this uncertainty—they commit resources to production based on their
        forecasts of future consumer demand.
      </p>

      <ProfitLossDemo />

      <p className="my-4">
        <strong className="text-emerald-400">Profit</strong> arises when an entrepreneur forecasts
        correctly—when the revenue from selling products exceeds the costs of the factors used.
        <strong className="text-emerald-400"> Loss</strong> arises from incorrect forecasts.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Profit</h4>
          <p className="text-sm text-dark-300">
            Signals that resources were directed to high-valued uses. Rewards successful
            forecasting. Attracts imitation.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Loss</h4>
          <p className="text-sm text-dark-300">
            Signals that resources were misallocated. Punishes poor forecasting. Drives
            exit from the market.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          <strong>Pure profit vs. interest:</strong> Total revenue minus total costs includes
          interest (return on capital). Pure entrepreneurial profit is what remains after
          paying all factors, including interest. In equilibrium, pure profit is zero.
        </p>
      </Callout>

      {/* Section 2: Uncertainty vs. Risk */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Nature of Uncertainty</h2>

      <p className="my-4">
        Rothbard (following Frank Knight) distinguishes between <strong className="text-emerald-400">risk</strong>
        (quantifiable uncertainty, insurable) and <strong className="text-emerald-400">genuine uncertainty</strong>
        (unquantifiable, the domain of entrepreneurship).
      </p>

      <UncertaintyDemo />

      <p className="my-4">
        Entrepreneurship deals with genuine uncertainty—will customers want this product?
        Will this technology work? Will competitors enter? These questions cannot be answered
        with probability calculations.
      </p>

      <Callout type="note">
        <p>
          <strong>No guarantees:</strong> There is no formula for entrepreneurial success.
          Profits reward good judgment, but judgment can be wrong. The market process is
          one of trial and error, discovery and learning.
        </p>
      </Callout>

      {/* Section 3: Effects of Investment on Interest and Production */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Effects of Net Investment on the Production Structure</h2>

      <p className="my-4">
        When time preferences fall and saving increases, the interest rate drops. This
        changes the relative profitability of investments across the production structure.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            step: 1,
            title: 'Time Preferences Fall',
            description: 'People become more patient; they save more and consume less now.',
          },
          {
            step: 2,
            title: 'Interest Rates Fall',
            description: 'More loanable funds drive down the price of borrowing.',
          },
          {
            step: 3,
            title: 'Longer Projects Become Profitable',
            description: 'Lower discount rate raises present value of distant future revenues.',
          },
          {
            step: 4,
            title: 'Production Structure Lengthens',
            description: 'Resources shift to higher-order stages; more capital-intensive methods adopted.',
          },
          {
            step: 5,
            title: 'Future Output Increases',
            description: 'More roundabout methods yield more output—but later.',
          },
        ].map(({ step, title, description }) => (
          <div key={step} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full text-white font-bold text-sm shrink-0">
              {step}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{title}</p>
              <p className="text-sm text-dark-400">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 4: Entrepreneurs and the Economy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Entrepreneurs and the Economy</h2>

      <p className="my-4">
        Entrepreneurs drive the market process. They are the "prime movers" who take
        initiative, bear uncertainty, and coordinate production with consumption.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Discovery</h4>
          <p className="text-sm text-dark-300">
            Entrepreneurs discover profit opportunities that others have missed—new
            products, better methods, unserved markets.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Coordination</h4>
          <p className="text-sm text-dark-300">
            They coordinate factors of production, ensuring resources flow to where
            consumers value them most.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Bearing Uncertainty</h4>
          <p className="text-sm text-dark-300">
            They bear the uncertainty that factor owners cannot. Workers get paid now;
            entrepreneurs may profit or lose later.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Innovation</h4>
          <p className="text-sm text-dark-300">
            They implement new ideas—translating inventions into marketable products
            that serve consumers.
          </p>
        </Card>
      </CardGrid>

      {/* Section 5: The Function of the Entrepreneur */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. The Function of the Entrepreneur</h2>

      <p className="my-4">
        The entrepreneur's function is to <strong className="text-emerald-400">adjust production
        to anticipated changes</strong>. In a static world, entrepreneurs would earn only
        interest. Profits and losses arise from change and uncertainty.
      </p>

      <MarketAdjustmentDemo />

      <p className="my-4">
        Profits are inherently temporary. Successful entrepreneurs attract imitators, and
        competition drives profits toward zero. But in a changing world, new profit
        opportunities constantly arise.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Entrepreneurial Function</h4>
        <p className="text-dark-200 text-lg mb-4">
          Entrepreneurs perceive discrepancies between current prices and anticipated
          future conditions, and act to exploit these discrepancies.
        </p>
        <p className="text-dark-400 text-sm">
          A successful entrepreneur buys factors when they're underpriced relative to
          future product prices—and profits from the discrepancy.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>Not just management:</strong> Rothbard distinguishes the entrepreneurial
          function from management. Managers execute plans; entrepreneurs make the ultimate
          decisions under uncertainty. Every acting person is entrepreneurial to some degree.
        </p>
      </Callout>

      {/* Rothbard's Contribution */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Rothbard's Contribution</h2>

      <p className="my-4">
        Rothbard integrates the theory of entrepreneurship with capital theory. He shows
        that entrepreneurs don't just "organize production"—they allocate capital across
        the time structure of production, guided by interest rates and profit opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Capitalist-Entrepreneur</h3>
          <p className="text-dark-300 text-sm">
            In practice, entrepreneurs are usually also capitalists—they invest their own
            or borrowed capital. But the functions are analytically distinct.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Pure Entrepreneur</h3>
          <p className="text-dark-300 text-sm">
            In theory, one could imagine an entrepreneur with no capital who borrows everything.
            Their function is forecasting and decision-making, not financing.
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Entrepreneurial profit</strong> arises from correct forecasts under
              uncertainty. Loss arises from incorrect forecasts.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Uncertainty</strong> (unquantifiable) is distinct from risk (quantifiable).
              Entrepreneurship deals with genuine uncertainty.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Profits are self-eliminating.</strong> Competition drives returns toward
              the normal interest rate.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              Entrepreneurs <strong>adjust production to anticipated changes</strong>, coordinating
              resources across the time structure.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Profit and loss guide resource allocation</strong>—rewarding entrepreneurs
              who serve consumers and penalizing those who fail.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 9 examines <strong>Particular Factor Prices</strong>—the specific pricing
        of land, labor, and capital goods, including wage determination and the theory of rent.
      </p>
    </LessonLayout>
  );
}
