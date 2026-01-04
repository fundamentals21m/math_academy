import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Consumer Choice Demo
function ConsumerChoiceDemo() {
  const [budget, setBudget] = useState(100);
  const [priceA, setPriceA] = useState(10);
  const [priceB, setPriceB] = useState(20);

  const maxA = Math.floor(budget / priceA);
  const maxB = Math.floor(budget / priceB);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Consumer Budget Constraint</h4>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Budget ($)</label>
          <input
            type="range"
            min={50}
            max={200}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">${budget}</span>
        </div>
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Price of A ($)</label>
          <input
            type="range"
            min={5}
            max={25}
            value={priceA}
            onChange={(e) => setPriceA(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">${priceA}</span>
        </div>
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Price of B ($)</label>
          <input
            type="range"
            min={10}
            max={50}
            value={priceB}
            onChange={(e) => setPriceB(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">${priceB}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-1">Maximum Good A</p>
          <p className="text-3xl font-bold text-emerald-400">{maxA} units</p>
          <p className="text-dark-500 text-xs">If all money spent on A</p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-1">Maximum Good B</p>
          <p className="text-3xl font-bold text-emerald-400">{maxB} units</p>
          <p className="text-dark-500 text-xs">If all money spent on B</p>
        </div>
      </div>

      <p className="text-dark-400 text-sm italic">
        The consumer chooses the combination of A and B that maximizes their satisfaction,
        subject to their budget constraint.
      </p>
    </div>
  );
}

// Gains from Trade Demo
function GainsFromTradeDemo() {
  const [showGains, setShowGains] = useState(false);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Gains of Exchange</h4>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-2">Buyer's Valuation</p>
          <p className="text-2xl font-bold text-emerald-400">$50</p>
          <p className="text-dark-500 text-xs">Maximum willing to pay</p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-2">Market Price</p>
          <p className="text-2xl font-bold text-white">$30</p>
          <p className="text-dark-500 text-xs">Actual transaction price</p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-2">Seller's Valuation</p>
          <p className="text-2xl font-bold text-emerald-400">$20</p>
          <p className="text-dark-500 text-xs">Minimum willing to accept</p>
        </div>
      </div>

      <button
        onClick={() => setShowGains(!showGains)}
        className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors mb-4"
      >
        {showGains ? 'Hide' : 'Show'} Gains from Trade
      </button>

      {showGains && (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-600/30">
            <p className="text-emerald-400 font-semibold mb-2">Buyer's Surplus</p>
            <p className="text-dark-300">Worth: $50 to buyer</p>
            <p className="text-dark-300">Paid: $30</p>
            <p className="text-emerald-400 font-bold mt-2">Gain: $20</p>
          </div>
          <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-600/30">
            <p className="text-emerald-400 font-semibold mb-2">Seller's Surplus</p>
            <p className="text-dark-300">Worth: $20 to seller</p>
            <p className="text-dark-300">Received: $30</p>
            <p className="text-emerald-400 font-bold mt-2">Gain: $10</p>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        Total gains: $30. This "surplus" explains why trade happens—both parties benefit.
      </p>
    </div>
  );
}

// Law of Demand Visualization
function LawOfDemandDemo() {
  const [price, setPrice] = useState(10);

  const demandCurve = [
    { price: 5, quantity: 100 },
    { price: 10, quantity: 70 },
    { price: 15, quantity: 45 },
    { price: 20, quantity: 25 },
    { price: 25, quantity: 10 },
  ];

  const currentDemand = demandCurve.find((d) => d.price === price) || demandCurve[1];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Law of Demand</h4>

      <div className="mb-4">
        <label className="text-dark-300 text-sm mb-2 block">Price per unit:</label>
        <input
          type="range"
          min={5}
          max={25}
          step={5}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>$5</span><span>$10</span><span>$15</span><span>$20</span><span>$25</span>
        </div>
      </div>

      <div className="flex items-end justify-around h-40 bg-dark-900 rounded-lg p-4 mb-4">
        {demandCurve.map((point) => (
          <div key={point.price} className="flex flex-col items-center">
            <div
              className={`w-8 transition-all ${
                point.price === price ? 'bg-emerald-500' : 'bg-dark-600'
              }`}
              style={{ height: `${point.quantity}px` }}
            />
            <span className="text-xs text-dark-500 mt-1">${point.price}</span>
          </div>
        ))}
      </div>

      <div className="text-center bg-dark-900 rounded-lg p-4">
        <p className="text-dark-300">At price ${price}:</p>
        <p className="text-2xl font-bold text-emerald-400">
          Quantity demanded: {currentDemand.quantity} units
        </p>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        As price increases, quantity demanded decreases. This is a logical consequence
        of the law of marginal utility—not merely an empirical observation.
      </p>
    </div>
  );
}

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The consumer is the king in the market economy. It is the consumers who determine,
        by their buying or abstention from buying, what should be produced and in what
        quantity and quality."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        With money established as the medium of exchange, Rothbard now develops the theory of
        <strong className="text-emerald-400"> money prices</strong> and <strong className="text-emerald-400">
        consumer choice</strong>. This chapter shows how consumers allocate their income among
        competing goods and how their preferences ultimately guide all production.
      </p>

      {/* Section 1: Money Prices */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Money Prices</h2>

      <p className="my-4">
        In a money economy, all goods have <strong className="text-emerald-400">money prices</strong>—
        exchange ratios against money. Instead of saying "2 wheat for 1 hammer," we say
        "wheat costs $5 per bushel" and "hammers cost $10 each."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">The Price System</h3>
          <p className="text-dark-300 text-sm mb-2">
            Money prices coordinate economic activity:
          </p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Signal relative scarcity</li>
            <li>• Guide consumer choices</li>
            <li>• Direct producer decisions</li>
            <li>• Enable profit/loss calculation</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Price Functions</h3>
          <p className="text-dark-300 text-sm mb-2">
            Prices perform several crucial functions:
          </p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Ration scarce goods</li>
            <li>• Transmit information</li>
            <li>• Coordinate production</li>
            <li>• Reward efficient producers</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>Price vs. value:</strong> Price is the exchange ratio between a good and
          money. Value is subjective—how much satisfaction the good provides to a particular
          person. The buyer values the good more than the money; the seller values the money
          more than the good. That's why they trade.
        </p>
      </Callout>

      {/* Section 2: Determination of Money Prices */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Determination of Money Prices</h2>

      <p className="my-4">
        Money prices are determined by supply and demand, just like barter prices. The key
        difference is that money serves as the common denominator, making price comparison easy.
      </p>

      <LawOfDemandDemo />

      <p className="my-4">
        The <strong className="text-emerald-400">law of demand</strong> states that, other things
        equal, a higher price leads to lower quantity demanded. This follows logically from the
        law of marginal utility: as more units are consumed, each additional unit provides less
        satisfaction, so people are willing to pay less for it.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Demand</h4>
          <p className="text-sm text-dark-300">
            The schedule showing how much of a good consumers will buy at each possible price.
            Derived from individual value scales.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Supply</h4>
          <p className="text-sm text-dark-300">
            The schedule showing how much producers will offer at each possible price.
            Higher prices attract more supply.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Equilibrium</h4>
          <p className="text-sm text-dark-300">
            The price at which quantity demanded equals quantity supplied. The market
            "clears"—no shortages or surpluses.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Price Adjustment</h4>
          <p className="text-sm text-dark-300">
            If price is above equilibrium, surplus drives it down. If below, shortage
            drives it up. Markets tend toward equilibrium.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: The Gains of Exchange */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Gains of Exchange</h2>

      <p className="my-4">
        Every voluntary exchange creates a <strong className="text-emerald-400">surplus</strong> for
        both parties—the difference between what they value the good at and the price they pay or receive.
      </p>

      <GainsFromTradeDemo />

      <p className="my-4">
        This concept of "consumer surplus" and "producer surplus" helps explain why trade is
        not zero-sum. The total gains from trade represent real value created—the buyer gets
        something worth more to them than what they paid, and the seller receives more than
        their minimum acceptable price.
      </p>

      <Callout type="note">
        <p>
          <strong>Rothbard's point:</strong> These gains exist because people have different
          valuations. Trade moves goods from those who value them less to those who value
          them more. This process of reallocation increases total satisfaction without
          producing anything new.
        </p>
      </Callout>

      {/* Section 4: Pricing and the Consumer */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Pricing and the Theory of the Consumer</h2>

      <p className="my-4">
        Consumers face a <strong className="text-emerald-400">budget constraint</strong>: they have
        limited income and must choose among competing goods. They allocate their spending to
        maximize total satisfaction.
      </p>

      <ConsumerChoiceDemo />

      <p className="my-4">
        The rational consumer allocates income so that the <em>marginal utility per dollar</em>
        is equal across all goods consumed. If one good provides more satisfaction per dollar
        than another, the consumer should buy more of the first and less of the second until
        they're equalized.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Equimarginal Principle</h4>
        <p className="text-dark-200 text-lg mb-4">
          A consumer maximizes satisfaction when:
        </p>
        <p className="text-center text-xl font-mono text-emerald-400 mb-4">
          MU₁/P₁ = MU₂/P₂ = ... = MUₙ/Pₙ
        </p>
        <p className="text-dark-400 text-sm">
          Where MU is marginal utility and P is price. The last dollar spent on each good
          should yield the same additional satisfaction.
        </p>
      </div>

      {/* Section 5: Consumer Sovereignty */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Consumer Sovereignty</h2>

      <p className="my-4">
        Rothbard emphasizes that in a free market, <strong className="text-emerald-400">consumers
        are sovereign</strong>. They determine what gets produced, by whom, and in what quantities.
        Producers who fail to satisfy consumers suffer losses and go out of business. Those who
        succeed earn profits.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            step: 1,
            title: 'Consumers Express Preferences',
            description: 'By buying or abstaining from buying, consumers signal what they want.',
          },
          {
            step: 2,
            title: 'Prices Transmit Information',
            description: 'Rising prices signal "produce more"; falling prices signal "produce less."',
          },
          {
            step: 3,
            title: 'Producers Respond',
            description: 'Seeking profit, producers shift resources toward what consumers value most.',
          },
          {
            step: 4,
            title: 'Resources Reallocate',
            description: 'Labor and capital flow from less-valued to more-valued uses.',
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

      <Callout type="warning">
        <p>
          <strong>Not political sovereignty:</strong> "Consumer sovereignty" doesn't mean
          consumers vote on production decisions. It means their spending patterns, aggregated
          through the price system, automatically direct resource allocation without any
          central planning.
        </p>
      </Callout>

      {/* Income and Spending */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Income and Spending Patterns</h2>

      <p className="my-4">
        Consumers receive income from selling their productive services (labor) or from
        owning factors of production (land, capital). They then allocate this income among:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Consumption</h4>
          <p className="text-sm text-dark-300">
            Spending on goods and services that directly satisfy wants. Provides
            immediate satisfaction.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Saving</h4>
          <p className="text-sm text-dark-300">
            Abstaining from present consumption. Makes resources available for investment.
            Provides future satisfaction.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Hoarding</h4>
          <p className="text-sm text-dark-300">
            Adding to cash balances. Increases demand for money. Provides security and
            flexibility.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Investment</h4>
          <p className="text-sm text-dark-300">
            Using savings to purchase capital goods or lend to producers. Earns interest
            returns.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        The allocation between consumption and saving is crucial for economic growth, as we'll
        see in the production chapters.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Money prices</strong> are exchange ratios between goods and money.
              They coordinate economic activity by transmitting information about scarcity.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              The <strong>law of demand</strong>: higher prices lead to lower quantity demanded.
              This is a logical consequence of the law of marginal utility.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              Every voluntary exchange creates <strong>surplus</strong> for both parties—
              the gains from trade are real value created.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              Consumers maximize satisfaction by equalizing <strong>marginal utility per dollar</strong>
              across all goods purchased.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Consumer sovereignty</strong>: in a free market, consumer preferences
              ultimately determine what gets produced and in what quantities.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 5 begins our examination of <strong>Production</strong>. We'll see how
        producers organize factors of production to create consumers' goods, and how
        the structure of production extends through time.
      </p>
    </LessonLayout>
  );
}
