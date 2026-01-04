import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Exchange Demonstration
function ExchangeDemo() {
  const [trade, setTrade] = useState(false);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Mutual Benefit of Exchange</h4>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-emerald-400 font-semibold mb-2">Alice (Farmer)</p>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{trade ? '🔨' : '🌾🌾🌾'}</span>
            <span className="text-dark-300">Has: {trade ? '1 hammer' : '3 bushels wheat'}</span>
          </div>
          <p className="text-dark-500 text-sm">
            Values wheat at: 1 util/bushel<br />
            Values hammer at: 4 utils
          </p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-emerald-400 font-semibold mb-2">Bob (Blacksmith)</p>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{trade ? '🌾🌾🌾' : '🔨'}</span>
            <span className="text-dark-300">Has: {trade ? '3 bushels wheat' : '1 hammer'}</span>
          </div>
          <p className="text-dark-500 text-sm">
            Values hammer at: 2 utils<br />
            Values wheat at: 2 utils/bushel
          </p>
        </div>
      </div>

      <button
        onClick={() => setTrade(!trade)}
        className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors mb-4"
      >
        {trade ? 'Reset' : 'Make Trade: 3 Wheat ↔ 1 Hammer'}
      </button>

      {trade && (
        <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-600/30">
          <p className="text-emerald-400 font-semibold mb-2">Both Parties Gain!</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-dark-300">Alice's gain:</p>
              <p className="text-dark-400">Had: 3 utils (wheat)</p>
              <p className="text-dark-400">Now: 4 utils (hammer)</p>
              <p className="text-emerald-400 font-semibold">+1 util gained</p>
            </div>
            <div>
              <p className="text-dark-300">Bob's gain:</p>
              <p className="text-dark-400">Had: 2 utils (hammer)</p>
              <p className="text-dark-400">Now: 6 utils (wheat)</p>
              <p className="text-emerald-400 font-semibold">+4 utils gained</p>
            </div>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        Exchange is not a zero-sum game. Both parties expect to benefit, or they wouldn't trade.
      </p>
    </div>
  );
}

// Division of Labor Visualization
function DivisionOfLaborDemo() {
  const [specialized, setSpecialized] = useState(false);

  const withoutSpecialization = {
    alice: { wheat: 2, hammers: 1 },
    bob: { wheat: 1, hammers: 2 },
    total: { wheat: 3, hammers: 3 },
  };

  const withSpecialization = {
    alice: { wheat: 5, hammers: 0 },
    bob: { wheat: 0, hammers: 4 },
    total: { wheat: 5, hammers: 4 },
  };

  const data = specialized ? withSpecialization : withoutSpecialization;

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Division of Labor</h4>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSpecialized(false)}
          className={`px-4 py-2 rounded transition-colors ${
            !specialized ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Self-Sufficient
        </button>
        <button
          onClick={() => setSpecialized(true)}
          className={`px-4 py-2 rounded transition-colors ${
            specialized ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Specialized
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-2">Alice</p>
          <p className="text-xl">🌾 × {data.alice.wheat}</p>
          <p className="text-xl">🔨 × {data.alice.hammers}</p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-2">Bob</p>
          <p className="text-xl">🌾 × {data.bob.wheat}</p>
          <p className="text-xl">🔨 × {data.bob.hammers}</p>
        </div>
        <div className="bg-emerald-900/30 rounded-lg p-4 text-center border border-emerald-600/30">
          <p className="text-emerald-400 text-sm mb-2">Total Output</p>
          <p className="text-xl">🌾 × {data.total.wheat}</p>
          <p className="text-xl">🔨 × {data.total.hammers}</p>
        </div>
      </div>

      <p className="text-dark-400 text-sm italic">
        {specialized
          ? 'Specialization increases total output! Alice focuses on wheat (her comparative advantage), Bob on hammers. They can then trade to mutual benefit.'
          : 'When each person produces everything themselves, total output is lower because they cannot exploit their comparative advantages.'}
      </p>
    </div>
  );
}

// Price Determination Explorer
function PriceExplorer() {
  const [price, setPrice] = useState(3);

  const buyers = [
    { name: 'Anne', maxPrice: 6 },
    { name: 'Ben', maxPrice: 5 },
    { name: 'Carl', maxPrice: 4 },
    { name: 'Dana', maxPrice: 3 },
    { name: 'Eve', maxPrice: 2 },
  ];

  const sellers = [
    { name: 'Sam', minPrice: 1 },
    { name: 'Tom', minPrice: 2 },
    { name: 'Uma', minPrice: 3 },
    { name: 'Vic', minPrice: 4 },
    { name: 'Will', minPrice: 5 },
  ];

  const buyersWilling = buyers.filter((b) => b.maxPrice >= price);
  const sellersWilling = sellers.filter((s) => s.minPrice <= price);
  const trades = Math.min(buyersWilling.length, sellersWilling.length);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Price Determination</h4>

      <div className="mb-4">
        <label className="text-dark-300 text-sm mb-2 block">Price per unit:</label>
        <input
          type="range"
          min={1}
          max={6}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>$1</span><span>$2</span><span>$3</span><span>$4</span><span>$5</span><span>$6</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-emerald-400 font-semibold mb-2">Buyers</p>
          {buyers.map((b) => (
            <div
              key={b.name}
              className={`text-sm py-1 ${b.maxPrice >= price ? 'text-emerald-400' : 'text-dark-600'}`}
            >
              {b.name}: willing to pay up to ${b.maxPrice}
              {b.maxPrice >= price ? ' ✓' : ''}
            </div>
          ))}
        </div>
        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-emerald-400 font-semibold mb-2">Sellers</p>
          {sellers.map((s) => (
            <div
              key={s.name}
              className={`text-sm py-1 ${s.minPrice <= price ? 'text-emerald-400' : 'text-dark-600'}`}
            >
              {s.name}: willing to sell at ${s.minPrice}+
              {s.minPrice <= price ? ' ✓' : ''}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4 text-center">
        <p className="text-dark-300">At price ${price}:</p>
        <p className="text-lg">
          <span className="text-emerald-400">{buyersWilling.length} buyers</span>
          {' × '}
          <span className="text-emerald-400">{sellersWilling.length} sellers</span>
          {' = '}
          <span className="text-white font-bold">{trades} trades</span>
        </p>
        {price === 3 && (
          <p className="text-emerald-400 text-sm mt-2 font-semibold">
            ✓ Equilibrium! Quantity demanded equals quantity supplied.
          </p>
        )}
      </div>
    </div>
  );
}

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The first and most crucial distinction is between two types of interpersonal relations:
        voluntary and coercive."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Having established the fundamentals of individual action in Chapter 1, Rothbard now
        examines what happens when individuals interact. This chapter develops the theory of
        <strong className="text-emerald-400"> direct exchange</strong>—trade without money—and
        shows how voluntary exchange benefits all participants.
      </p>

      {/* Section 1: Types of Interpersonal Action */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Types of Interpersonal Action</h2>

      <p className="my-4">
        When human beings interact, their actions fall into two fundamental categories:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Voluntary Action</h3>
          <p className="text-dark-300 text-sm mb-2">
            Both parties benefit (or expect to benefit) from the interaction.
          </p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Trade and exchange</li>
            <li>• Gifts and charity</li>
            <li>• Cooperation and partnership</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Coercive Action</h3>
          <p className="text-dark-300 text-sm mb-2">
            One party benefits at the other's involuntary expense.
          </p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Theft and robbery</li>
            <li>• Fraud and deception</li>
            <li>• Violence and threats</li>
          </ul>
        </div>
      </div>

      <p className="my-4">
        Economics studies voluntary action—specifically, exchange. Coercive action is a subject
        for ethics and political theory, though we'll examine its economic effects later in
        <em> Power and Market</em>.
      </p>

      <Callout type="note">
        <p>
          <strong>Why voluntary exchange matters:</strong> In voluntary exchange, both parties
          expect to benefit—otherwise, they wouldn't trade. This is the foundation of the
          market economy: when people are free to trade, they create mutual gains.
        </p>
      </Callout>

      {/* Section 2: Exchange and the Division of Labor */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Exchange and the Division of Labor</h2>

      <p className="my-4">
        Exchange arises because people have different <strong className="text-emerald-400">value scales</strong>.
        Alice values a hammer more than three bushels of wheat; Bob values three bushels of wheat
        more than a hammer. By trading, both satisfy more urgent wants than they could in isolation.
      </p>

      <ExchangeDemo />

      <p className="my-4">
        Exchange encourages the <strong className="text-emerald-400">division of labor</strong>.
        Instead of each person producing everything they need, individuals specialize in what
        they do best and trade for the rest.
      </p>

      <DivisionOfLaborDemo />

      <Callout type="info">
        <p>
          <strong>Comparative advantage:</strong> Even if Alice is better than Bob at <em>both</em>
          wheat and hammer production, they both gain from specialization. What matters is relative
          efficiency. If Alice is relatively better at wheat and Bob at hammers, specialization
          increases total output.
        </p>
      </Callout>

      {/* Section 3: Terms of Exchange */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Terms of Exchange</h2>

      <p className="my-4">
        When two parties trade, the <strong className="text-emerald-400">terms of exchange</strong> (or
        exchange ratio) must fall within certain limits. If Alice will trade 3 wheat for 1 hammer
        but not 4 wheat, and Bob will give 1 hammer for at least 2 wheat, then the exchange ratio
        must be between 2:1 and 4:1.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Exchange Ratio</h4>
        <div className="flex items-center justify-center gap-4 text-lg mb-4">
          <span className="bg-dark-900 px-4 py-2 rounded">2 wheat</span>
          <span className="text-dark-500">←</span>
          <span className="text-emerald-400 font-bold">Zone of Agreement</span>
          <span className="text-dark-500">→</span>
          <span className="bg-dark-900 px-4 py-2 rounded">4 wheat</span>
        </div>
        <p className="text-dark-400 text-sm text-center">
          Any ratio from 2:1 to 4:1 (wheat to hammer) makes both parties better off.
        </p>
      </div>

      <p className="my-4">
        The exact ratio within this range depends on the bargaining skills of the parties,
        their eagerness to trade, and other factors. In a market with many buyers and sellers,
        these factors become less important as competition narrows the range.
      </p>

      {/* Section 4: Price Determination */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Determination of Price: Equilibrium Price</h2>

      <p className="my-4">
        When many buyers and sellers trade the same good, a market <strong className="text-emerald-400">
        price</strong> emerges. This price is determined by the interplay of supply and demand.
      </p>

      <PriceExplorer />

      <p className="my-4">
        The <strong className="text-emerald-400">equilibrium price</strong> is the price at which
        the quantity demanded equals the quantity supplied. At this price, everyone who wants to
        buy at that price can find a seller, and everyone who wants to sell can find a buyer.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Above Equilibrium</h4>
          <p className="text-sm text-dark-300">
            If price is too high, more sellers want to sell than buyers want to buy.
            Surplus drives prices down.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Below Equilibrium</h4>
          <p className="text-sm text-dark-300">
            If price is too low, more buyers want to buy than sellers want to sell.
            Shortage drives prices up.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">At Equilibrium</h4>
          <p className="text-sm text-dark-300">
            The market "clears"—no unsatisfied buyers or sellers.
            No pressure for price to change.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Dynamic Process</h4>
          <p className="text-sm text-dark-300">
            Markets constantly adjust. The equilibrium price is a tendency,
            not a fixed point.
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          <strong>Important clarification:</strong> "Equilibrium" does not mean the economy
          is static or unchanging. In the real world, conditions constantly shift. The
          equilibrium price is the price toward which the market <em>tends</em>, even as
          that target moves.
        </p>
      </Callout>

      {/* Section 5: Barter Limitations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Limitations of Direct Exchange</h2>

      <p className="my-4">
        Direct exchange (barter) has severe limitations that restrict the division of labor:
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            problem: 'Double Coincidence of Wants',
            description: 'You must find someone who has what you want AND wants what you have.',
            example: 'A violin teacher who wants bread must find a baker who wants violin lessons.',
          },
          {
            problem: 'Indivisibility',
            description: 'Many goods cannot be divided for small purchases.',
            example: 'How do you buy a loaf of bread with a cow? You cannot give "half a cow."',
          },
          {
            problem: 'No Common Unit of Value',
            description: 'Prices must be quoted in terms of every other good.',
            example: 'With 100 goods, you need 4,950 different exchange ratios to know all prices.',
          },
        ].map(({ problem, description, example }) => (
          <div key={problem} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="text-rose-400 text-xl">⚠</span>
            <div>
              <p className="font-semibold text-dark-100">{problem}</p>
              <p className="text-sm text-dark-400">{description}</p>
              <p className="text-sm text-dark-500 mt-1 italic">{example}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="my-4">
        These limitations explain why barter economies remain primitive. To achieve a
        complex division of labor, society needs <strong className="text-emerald-400">indirect exchange</strong>—trading
        through a common medium. This leads us to the subject of the next chapter: money.
      </p>

      {/* Rothbard's Contribution */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Rothbard's Contribution</h2>

      <p className="my-4">
        In this chapter, Rothbard follows the tradition of Austrian economics going back to
        Carl Menger, but with characteristic clarity and rigor. His emphasis on the voluntary
        nature of exchange—and its distinction from coercion—sets the stage for his later
        analysis of government intervention.
      </p>

      <Callout type="success">
        <p>
          <strong>Key insight:</strong> Exchange is not a zero-sum game where one party's
          gain is another's loss. In voluntary exchange, both parties benefit. This simple
          truth has profound implications for understanding wealth creation and economic policy.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              Interpersonal action is either <strong>voluntary</strong> (both parties benefit)
              or <strong>coercive</strong> (one benefits at another's expense).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Exchange creates value</strong> for both parties. Trade is not zero-sum.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              The <strong>division of labor</strong> increases total output. Specialization
              based on comparative advantage benefits everyone.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              The <strong>equilibrium price</strong> is the price at which quantity demanded
              equals quantity supplied. Markets tend toward this price.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Barter is limited</strong> by the double coincidence of wants, indivisibility,
              and the lack of a common unit. This creates the need for money.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 3 examines <strong>The Pattern of Indirect Exchange</strong>—how money emerges
        spontaneously from barter, what properties make a good money, and how monetary
        calculation makes complex economic life possible.
      </p>
    </LessonLayout>
  );
}
