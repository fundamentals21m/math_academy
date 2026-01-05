import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// =============================================================================
// INTERACTIVE COMPONENTS
// =============================================================================

/**
 * Interactive demo showing profit as foresight, not exploitation
 */
function ProfitSourceDemo() {
  const [scenario, setScenario] = useState(0);

  const scenarios = [
    {
      title: 'Entrepreneur Profits',
      naive: 'The entrepreneur exploited workers and customers',
      reality: 'The entrepreneur correctly anticipated consumer demand and organized production efficiently',
      example: 'A tech founder creates a product people want—profit reflects value created, not value taken',
    },
    {
      title: 'Entrepreneur Losses',
      naive: 'Bad luck or unfair competition',
      reality: 'Poor foresight about future market conditions led to misallocated resources',
      example: 'A company invests in products nobody wants—loss signals resources should go elsewhere',
    },
    {
      title: 'Doctor\'s Income',
      naive: 'Doctors profit from disease; they benefit from suffering',
      reality: 'Doctors earn by curing disease, not causing it—their income reflects healing value',
      example: 'A skilled surgeon earns well because patients value restored health, not because surgery causes illness',
    },
    {
      title: 'Merchant\'s Profit',
      naive: 'The middleman adds nothing and takes a cut',
      reality: 'The merchant moves goods from where they\'re abundant to where they\'re needed',
      example: 'A grain trader profits by bringing food from farms to cities where it\'s scarce',
    },
  ];

  const current = scenarios[scenario];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Source of Profit and Loss</h4>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {scenarios.map((s, i) => (
          <button
            key={i}
            onClick={() => setScenario(i)}
            className={`px-3 py-2 rounded text-sm ${
              scenario === i
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
          <div className="text-red-400 text-sm font-medium mb-2">
            "Montaigne Dogma" (Zero-Sum Thinking)
          </div>
          <p className="text-dark-200">{current.naive}</p>
        </div>

        <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg">
          <div className="text-green-400 text-sm font-medium mb-2">
            Economic Reality (Positive-Sum)
          </div>
          <p className="text-dark-200">{current.reality}</p>
        </div>
      </div>

      <div className="bg-dark-700 p-4 rounded-lg">
        <div className="text-dark-400 text-sm mb-1">Example</div>
        <p className="text-dark-200">{current.example}</p>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Profit is not exploitation
          but reward for superior foresight. Those who correctly anticipate consumer needs
          earn profits; those who misjudge suffer losses. This directs resources to their
          most valued uses.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing mutual benefit in exchange
 */
function MutualBenefitDemo() {
  const [buyerValue, setBuyerValue] = useState(100);
  const [sellerCost, setSellerCost] = useState(40);
  const [price, setPrice] = useState(70);

  const buyerSurplus = buyerValue - price;
  const sellerSurplus = price - sellerCost;
  const totalSurplus = buyerSurplus + sellerSurplus;
  const tradeHappens = buyerValue >= price && price >= sellerCost;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Mutual Benefit in Exchange</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Buyer's Value: ${buyerValue}
          </label>
          <input
            type="range"
            min="20"
            max="150"
            value={buyerValue}
            onChange={(e) => setBuyerValue(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-dark-500 mt-1">How much buyer values the good</div>
        </div>

        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Price: ${price}
          </label>
          <input
            type="range"
            min="20"
            max="150"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-dark-500 mt-1">Agreed exchange price</div>
        </div>

        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Seller's Cost: ${sellerCost}
          </label>
          <input
            type="range"
            min="20"
            max="150"
            value={sellerCost}
            onChange={(e) => setSellerCost(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-dark-500 mt-1">Seller's production cost</div>
        </div>
      </div>

      {/* Visual representation */}
      <div className="bg-dark-700 p-4 rounded-lg mb-4">
        <div className="relative h-16">
          {/* Cost to Value range */}
          <div className="absolute inset-x-0 top-1/2 h-2 bg-dark-600 rounded-full transform -translate-y-1/2" />

          {/* Seller's cost marker */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${(sellerCost / 150) * 100}%` }}
          >
            <div className="w-4 h-4 bg-orange-500 rounded-full" />
            <div className="text-xs text-orange-400 mt-4 whitespace-nowrap">Cost: ${sellerCost}</div>
          </div>

          {/* Price marker */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${(price / 150) * 100}%` }}
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full" />
            <div className="text-xs text-blue-400 mt-4 whitespace-nowrap">Price: ${price}</div>
          </div>

          {/* Buyer's value marker */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${(buyerValue / 150) * 100}%` }}
          >
            <div className="w-4 h-4 bg-green-500 rounded-full" />
            <div className="text-xs text-green-400 mt-4 whitespace-nowrap">Value: ${buyerValue}</div>
          </div>
        </div>
      </div>

      <div className={`p-4 rounded-lg mb-4 ${
        tradeHappens ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'
      }`}>
        <div className={`text-lg font-bold ${tradeHappens ? 'text-green-400' : 'text-red-400'}`}>
          {tradeHappens ? 'Trade Occurs!' : 'No Trade'}
        </div>
        {tradeHappens ? (
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div>
              <div className="text-dark-400 text-sm">Buyer Gains</div>
              <div className="text-green-400 font-bold">${buyerSurplus}</div>
            </div>
            <div>
              <div className="text-dark-400 text-sm">Seller Gains</div>
              <div className="text-green-400 font-bold">${sellerSurplus}</div>
            </div>
            <div>
              <div className="text-dark-400 text-sm">Total Created</div>
              <div className="text-blue-400 font-bold">${totalSurplus}</div>
            </div>
          </div>
        ) : (
          <p className="text-dark-300 text-sm mt-2">
            {price > buyerValue ? 'Price too high for buyer' : 'Price too low for seller'}
          </p>
        )}
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "The deal is always
          advantageous both for the buyer and the seller." Trade is not zero-sum—both
          parties gain, or the exchange would not occur voluntarily.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing harmony through division of labor
 */
function HarmonyDemo() {
  const [cooperation, setCooperation] = useState(true);
  const [workers, setWorkers] = useState(4);

  const isolatedOutput = workers * 10; // Each person produces 10 alone
  const cooperativeOutput = workers * 10 * (1 + workers * 0.2); // Synergy from specialization

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Harmony Through Division of Labor</h4>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setCooperation(false)}
          className={`px-4 py-2 rounded-lg font-medium flex-1 ${
            !cooperation
              ? 'bg-orange-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          Isolated Production
        </button>
        <button
          onClick={() => setCooperation(true)}
          className={`px-4 py-2 rounded-lg font-medium flex-1 ${
            cooperation
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          Division of Labor
        </button>
      </div>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Number of People: {workers}
        </label>
        <input
          type="range"
          min="2"
          max="10"
          value={workers}
          onChange={(e) => setWorkers(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className={`p-4 rounded-lg ${!cooperation ? 'bg-orange-900/30 border border-orange-700' : 'bg-dark-700'}`}>
          <div className="text-dark-400 text-sm mb-1">Isolated Production</div>
          <div className="text-2xl font-bold text-orange-400">{isolatedOutput} units</div>
          <div className="text-dark-500 text-xs mt-1">Each person works alone</div>
        </div>

        <div className={`p-4 rounded-lg ${cooperation ? 'bg-green-900/30 border border-green-700' : 'bg-dark-700'}`}>
          <div className="text-dark-400 text-sm mb-1">Division of Labor</div>
          <div className="text-2xl font-bold text-green-400">{Math.round(cooperativeOutput)} units</div>
          <div className="text-dark-500 text-xs mt-1">Specialization + exchange</div>
        </div>
      </div>

      <div className="bg-dark-700 p-4 rounded-lg mb-4">
        <div className="text-dark-400 text-sm mb-2">Productivity Multiplier</div>
        <div className="h-6 bg-dark-600 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all"
            style={{ width: `${Math.min(100, (cooperativeOutput / isolatedOutput) * 50)}%` }}
          />
        </div>
        <div className="text-center text-green-400 font-bold mt-2">
          {(cooperativeOutput / isolatedOutput).toFixed(1)}x more productive
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">Without Cooperation</div>
          <ul className="text-dark-300 text-sm space-y-1">
            <li>• Competition for scarce resources</li>
            <li>• One's gain is another's loss</li>
            <li>• Conflict is natural state</li>
          </ul>
        </div>
        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">With Division of Labor</div>
          <ul className="text-dark-300 text-sm space-y-1">
            <li>• Everyone benefits from cooperation</li>
            <li>• Prosperity expands for all</li>
            <li>• Harmony is natural state</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> The division of labor
          transforms potential conflict into harmony. "Everybody is interested in the
          preservation of the social division of labor, the system that multiplies the
          productivity of human efforts."
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing interventionism as source of conflict
 */
function ConflictSourceDemo() {
  const [interventionLevel, setInterventionLevel] = useState(50);

  const effects = {
    tariffs: interventionLevel > 20,
    quotas: interventionLevel > 40,
    currencyControls: interventionLevel > 60,
    fullProtectionism: interventionLevel > 80,
  };

  const conflictLevel = Object.values(effects).filter(Boolean).length;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The True Source of Conflict</h4>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Level of Government Intervention: {interventionLevel}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={interventionLevel}
          onChange={(e) => setInterventionLevel(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>Free Trade</span>
          <span>Full Protectionism</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        <div className={`p-3 rounded-lg text-center ${
          effects.tariffs ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'
        }`}>
          <div className={`text-sm font-medium ${effects.tariffs ? 'text-red-400' : 'text-dark-500'}`}>
            Tariffs
          </div>
        </div>
        <div className={`p-3 rounded-lg text-center ${
          effects.quotas ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'
        }`}>
          <div className={`text-sm font-medium ${effects.quotas ? 'text-red-400' : 'text-dark-500'}`}>
            Import Quotas
          </div>
        </div>
        <div className={`p-3 rounded-lg text-center ${
          effects.currencyControls ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'
        }`}>
          <div className={`text-sm font-medium ${effects.currencyControls ? 'text-red-400' : 'text-dark-500'}`}>
            Currency Controls
          </div>
        </div>
        <div className={`p-3 rounded-lg text-center ${
          effects.fullProtectionism ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'
        }`}>
          <div className={`text-sm font-medium ${effects.fullProtectionism ? 'text-red-400' : 'text-dark-500'}`}>
            Full Autarky
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className={`p-4 rounded-lg ${
          conflictLevel > 2 ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'
        }`}>
          <div className="text-dark-400 text-sm mb-1">International Relations</div>
          <div className={`font-bold ${
            conflictLevel === 0 ? 'text-green-400' :
            conflictLevel === 1 ? 'text-yellow-400' :
            conflictLevel === 2 ? 'text-orange-400' : 'text-red-400'
          }`}>
            {conflictLevel === 0 ? 'Peaceful cooperation' :
             conflictLevel === 1 ? 'Trade tensions' :
             conflictLevel === 2 ? 'Economic warfare' :
             conflictLevel === 3 ? 'Severe conflict' : 'War becomes likely'}
          </div>
        </div>

        <div className={`p-4 rounded-lg ${
          conflictLevel > 2 ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'
        }`}>
          <div className="text-dark-400 text-sm mb-1">Domestic Effects</div>
          <div className={`font-bold ${
            conflictLevel === 0 ? 'text-green-400' :
            conflictLevel === 1 ? 'text-yellow-400' :
            conflictLevel === 2 ? 'text-orange-400' : 'text-red-400'
          }`}>
            {conflictLevel === 0 ? 'Prosperity for all' :
             conflictLevel === 1 ? 'Special interest lobbying' :
             conflictLevel === 2 ? 'Group conflict over protection' :
             conflictLevel === 3 ? 'Class warfare rhetoric' : 'Social breakdown'}
          </div>
        </div>
      </div>

      <div className="bg-dark-700 p-4 rounded-lg">
        <div className="text-dark-400 text-sm mb-2">Mises's Analysis</div>
        <p className="text-dark-300 text-sm">
          "The wars of our age...are the inescapable result" of protectionist philosophy.
          When governments block peaceful exchange, nations must fight over resources they
          could have traded for. Interventionism creates the conflicts it claims to solve.
        </p>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Modern conflicts stem not
          from capitalism but from government interference with trade. Free exchange creates
          interdependence and peace; protectionism creates rivalry and war.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      {/* Introduction */}
      <p className="text-lg text-dark-100 mb-6">
        Chapter XXIV concludes Part Four by examining whether human interests are
        fundamentally harmonious or conflicting. Mises argues that in the market economy,
        properly understood, there exists a profound harmony of interests among all
        participants.
      </p>

      <Callout type="concept" title="Central Thesis">
        The "Montaigne dogma"—that one person's gain is necessarily another's loss—is
        false. In the market economy, voluntary exchange benefits all parties, the
        division of labor creates universal prosperity, and conflict arises primarily
        from government interference, not from markets.
      </Callout>

      {/* Section 1: The Ultimate Source of Profit and Loss */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        1. The Ultimate Source of Profit and Loss
      </h2>

      <p className="text-dark-200 mb-4">
        Popular thinking often assumes that profit comes from exploitation—that
        entrepreneurs gain only at others' expense. Mises demolishes this "Montaigne
        dogma" by showing that profits reward successful anticipation of consumer needs.
      </p>

      <ProfitSourceDemo />

      <Callout type="key-point" title="Profit Signals Value Creation">
        Entrepreneurs who earn profits have successfully directed resources toward
        satisfying consumer wants. Those who suffer losses have misjudged—their losses
        signal that resources should flow elsewhere. This profit-and-loss system is
        society's mechanism for directing production.
      </Callout>

      {/* Section 2: Mutual Benefit in Exchange */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        2. The Harmony of Exchange
      </h2>

      <p className="text-dark-200 mb-4">
        Every voluntary exchange benefits both parties. The buyer values the good more
        than the money paid; the seller values the money more than the good sold. Trade
        is positive-sum, not zero-sum.
      </p>

      <MutualBenefitDemo />

      <CardGrid>
        <Card title="Even Losses Limit Damage" variant="default">
          <p className="text-dark-300">
            "Even a man who sells at a loss is still better off than he would be if he
            could not sell at all." The option to trade at unfavorable terms is still
            better than no trade at all.
          </p>
        </Card>
        <Card title="Trade vs. War" variant="default">
          <p className="text-dark-300">
            International trade differs fundamentally from warfare. Trade creates mutual
            prosperity through exchange; war creates destruction through plunder. They
            are opposites, not equivalents.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: The Harmony of Rightly Understood Interests */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        3. The Harmony of Rightly Understood Interests
      </h2>

      <p className="text-dark-200 mb-4">
        The division of labor transforms humanity's condition from one of natural
        scarcity and conflict to one of cooperation and mutual benefit. Everyone gains
        from the productivity multiplier of specialization.
      </p>

      <HarmonyDemo />

      <Callout type="key-point" title="Consumer Sovereignty">
        In the market economy, consumer demand—not class conflict—directs production.
        Workers, capitalists, and entrepreneurs all serve consumers. The apparent
        conflicts between groups dissolve when we recognize their common interest in
        the productive system.
      </Callout>

      {/* Section 4: Private Property */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        4. Private Property as Social Function
      </h2>

      <p className="text-dark-200 mb-4">
        Private property in the market economy is not absolute control but a social
        function. Owners must serve consumers to profit. Property becomes a mandate
        to deploy resources productively.
      </p>

      <CardGrid>
        <Card title="Property as Responsibility" variant="success">
          <p className="text-dark-300">
            The proprietor who fails to serve consumers loses his property to those who
            will. Ownership under capitalism is conditional on productive use.
          </p>
        </Card>
        <Card title="Consumer Control" variant="success">
          <p className="text-dark-300">
            Through the price system, consumers effectively control all production
            decisions. Property owners are stewards serving consumer preferences.
          </p>
        </Card>
      </CardGrid>

      {/* Section 5: The Source of Modern Conflicts */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        5. The True Source of Conflict
      </h2>

      <p className="text-dark-200 mb-4">
        If markets create harmony, why do we see so much conflict? Mises argues that
        modern conflicts arise not from capitalism but from interventionism—government
        interference that blocks the natural harmony of exchange.
      </p>

      <ConflictSourceDemo />

      <Callout type="warning" title="The Liberal Solution">
        Genuine liberalism—respecting private property and free exchange across all
        borders—provides the only durable foundation for peace. When people can trade
        freely, they have no incentive to fight.
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Key Takeaways
      </h2>

      <div className="space-y-4">
        <Callout type="summary" title="1. Profit Rewards Foresight, Not Exploitation">
          Entrepreneurs profit by correctly anticipating consumer needs and organizing
          production efficiently. Losses punish misjudgment. This system directs
          resources to their most valued uses.
        </Callout>

        <Callout type="summary" title="2. Exchange Benefits All Parties">
          Every voluntary transaction benefits both buyer and seller. Trade is
          positive-sum, not zero-sum. This applies domestically and internationally.
        </Callout>

        <Callout type="summary" title="3. Division of Labor Creates Harmony">
          The productivity gains from specialization mean everyone benefits from
          cooperation. There is no natural conflict between workers, entrepreneurs,
          and consumers—all share interest in the productive system.
        </Callout>

        <Callout type="summary" title="4. Interventionism Causes Conflict">
          Modern conflicts arise from government interference with trade—tariffs,
          quotas, and currency controls that block peaceful exchange and create
          rivalry between nations.
        </Callout>
      </div>
    </LessonLayout>
  );
}
