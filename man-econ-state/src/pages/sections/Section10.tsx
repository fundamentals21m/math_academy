import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Money Supply and Purchasing Power Demo
function MoneySupplyDemo() {
  const [moneySupply, setMoneySupply] = useState(100);
  const [goodsSupply, setGoodsSupply] = useState(100);

  const purchasingPower = Math.round((goodsSupply / moneySupply) * 100) / 100;
  const priceLevel = Math.round((moneySupply / goodsSupply) * 100) / 100;

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Money Supply and Purchasing Power</h4>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Money Supply</label>
          <input
            type="range"
            min={50}
            max={200}
            value={moneySupply}
            onChange={(e) => setMoneySupply(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">${moneySupply}B</span>
        </div>
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Goods Supply</label>
          <input
            type="range"
            min={50}
            max={200}
            value={goodsSupply}
            onChange={(e) => setGoodsSupply(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{goodsSupply} units</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-1">Purchasing Power of $1</p>
          <p className="text-3xl font-bold text-emerald-400">{purchasingPower} units</p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-1">Price Level</p>
          <p className="text-3xl font-bold text-amber-400">${priceLevel}/unit</p>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        More money chasing the same goods → prices rise, purchasing power falls.
      </p>
    </div>
  );
}

// Cash Balance Demand Demo
function CashBalanceDemo() {
  const [uncertainty, setUncertainty] = useState(50);
  const [transactionNeeds, setTransactionNeeds] = useState(50);

  const demandForMoney = Math.round((uncertainty + transactionNeeds) * 0.8);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Demand for Money (Cash Balances)</h4>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Uncertainty Level</label>
          <input
            type="range"
            min={10}
            max={100}
            value={uncertainty}
            onChange={(e) => setUncertainty(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-dark-400 text-sm">{uncertainty < 40 ? 'Low' : uncertainty < 70 ? 'Moderate' : 'High'}</span>
        </div>
        <div>
          <label className="text-dark-300 text-sm mb-1 block">Transaction Needs</label>
          <input
            type="range"
            min={10}
            max={100}
            value={transactionNeeds}
            onChange={(e) => setTransactionNeeds(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-dark-400 text-sm">{transactionNeeds < 40 ? 'Low' : transactionNeeds < 70 ? 'Moderate' : 'High'}</span>
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4 text-center">
        <p className="text-dark-400 text-sm mb-1">Desired Cash Balance</p>
        <p className="text-3xl font-bold text-emerald-400">${demandForMoney * 10}</p>
        <p className="text-dark-500 text-sm mt-2">
          Higher uncertainty or transaction needs → hold more cash
        </p>
      </div>
    </div>
  );
}

// Inflation Effects Demo
function InflationEffectsDemo() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      title: 'New Money Created',
      description: 'Government prints $100 billion in new money.',
      effects: ['Money supply increases', 'Enters economy through specific channels'],
    },
    {
      title: 'First Recipients Benefit',
      description: 'Banks and government contractors receive new money first.',
      effects: ['Their purchasing power rises', 'Prices haven\'t adjusted yet'],
    },
    {
      title: 'Spending Spreads',
      description: 'New money spreads through the economy via spending.',
      effects: ['Prices begin rising', 'Some benefit, some harmed'],
    },
    {
      title: 'General Price Rise',
      description: 'Eventually all prices rise—but not uniformly.',
      effects: ['Fixed-income earners lose', 'Debtors gain, creditors lose'],
    },
  ];

  const current = stages[stage];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Cantillon Effect</h4>

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
        <p className="text-dark-300 mb-3">{current.description}</p>
        <ul className="text-dark-400 text-sm space-y-1">
          {current.effects.map((effect, i) => (
            <li key={i}>• {effect}</li>
          ))}
        </ul>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Inflation doesn't raise all prices equally. Early recipients gain at the expense of later recipients.
      </p>
    </div>
  );
}

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "An increase in the supply of money, demand for money remaining the same, will
        lead to a fall in the purchasing power of the monetary unit."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        This chapter applies Austrian price theory to <strong className="text-emerald-400">money</strong>
        itself. Rothbard examines how the supply of and demand for money determine its
        <strong className="text-emerald-400"> purchasing power</strong>, and what happens when
        the money supply changes.
      </p>

      {/* Section 1: The Supply of Money */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Supply of Money</h2>

      <p className="my-4">
        The <strong className="text-emerald-400">money supply</strong> consists of all media of exchange
        in the economy. Under a commodity standard (like gold), money supply grows slowly through
        mining. Under fiat money, government can expand supply at will.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Commodity Money</h4>
          <p className="text-sm text-dark-300">
            Supply limited by production costs. Mining gold requires real resources.
            Supply growth is slow and stable.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Fiat Money</h4>
          <p className="text-sm text-dark-300">
            Supply limited only by government restraint. Printing costs are trivial.
            Subject to political pressures to expand.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>Money substitutes:</strong> The money supply includes not just physical
          money but also claims to money (bank deposits, etc.) that function as media
          of exchange.
        </p>
      </Callout>

      {/* Section 2: Demand for Money */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Demand for Money</h2>

      <p className="my-4">
        People hold <strong className="text-emerald-400">cash balances</strong> for various reasons.
        The demand for money is the desire to hold money rather than spend it. Unlike other
        goods, money is not "used up"—it circulates.
      </p>

      <CashBalanceDemo />

      <p className="my-4">
        Factors affecting the demand for money:
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            factor: 'Transaction Demand',
            description: 'Need to make purchases between income receipts.',
          },
          {
            factor: 'Precautionary Demand',
            description: 'Reserve for unexpected expenses or opportunities.',
          },
          {
            factor: 'Speculative Demand',
            description: 'Holding money when expecting prices to fall.',
          },
          {
            factor: 'Uncertainty',
            description: 'The more uncertain the future, the more cash people want.',
          },
        ].map(({ factor, description }, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full text-white font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{factor}</p>
              <p className="text-sm text-dark-400">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 3: Determination of Money Prices */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Determination of Money Prices</h2>

      <p className="my-4">
        The <strong className="text-emerald-400">purchasing power of money</strong> is determined
        by supply and demand, like any other good. More money relative to goods means
        higher prices (lower purchasing power).
      </p>

      <MoneySupplyDemo />

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Quantity Theory of Money</h4>
        <p className="text-dark-200 text-lg mb-4">
          The purchasing power of money is inversely related to its quantity.
        </p>
        <p className="text-center text-xl font-mono text-emerald-400 mb-4">
          More Money → Higher Prices → Lower Purchasing Power
        </p>
        <p className="text-dark-400 text-sm">
          This is a general tendency, not a rigid mechanical relationship. The speed and
          pattern of adjustment depend on how and where new money enters the economy.
        </p>
      </div>

      {/* Section 4: Changes in the Money Relation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Changes in the Money Relation</h2>

      <p className="my-4">
        When the money supply increases, prices don't rise uniformly. The <strong className="text-emerald-400">
        Cantillon effect</strong> describes how new money ripples through the economy.
      </p>

      <InflationEffectsDemo />

      <p className="my-4">
        This insight has crucial implications:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Redistribution</h4>
          <p className="text-sm text-dark-300">
            Inflation redistributes wealth from late receivers to early receivers
            of new money.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Distortion</h4>
          <p className="text-sm text-dark-300">
            Relative prices are distorted, sending false signals to producers
            and consumers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Fixed-Income Harm</h4>
          <p className="text-sm text-dark-300">
            Those on fixed incomes (pensioners, savers) see their purchasing
            power eroded.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Debtor Gain</h4>
          <p className="text-sm text-dark-300">
            Debtors repay loans with depreciated money. Creditors are cheated
            of real value.
          </p>
        </Card>
      </CardGrid>

      {/* Section 5: Cash Balance and the Individual */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Cash Balance and the Individual</h2>

      <p className="my-4">
        Each individual adjusts their cash balance to their desired level. If they hold
        more than desired, they spend; if less, they reduce spending or sell assets.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Excess Cash</h3>
          <p className="text-dark-300 text-sm mb-2">If actual balance &gt; desired balance:</p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Increase spending</li>
            <li>• Buy assets or goods</li>
            <li>• Drives prices up</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Insufficient Cash</h3>
          <p className="text-dark-300 text-sm mb-2">If actual balance &lt; desired balance:</p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Reduce spending</li>
            <li>• Sell assets</li>
            <li>• Drives prices down</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>The neutrality fallacy:</strong> Some economists claim that changes in
          money supply are "neutral"—affecting all prices equally. Rothbard shows this is
          false. New money enters at specific points and spreads unevenly.
        </p>
      </Callout>

      {/* Optimal Money Supply */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Optimal Quantity of Money</h2>

      <p className="my-4">
        Rothbard makes a provocative argument: <strong className="text-emerald-400">any quantity
        of money is optimal</strong>. More money doesn't make society wealthier—it just raises
        prices. Money's function (facilitating exchange) is served equally well by any quantity.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">Rothbard's Insight</h4>
        <p className="text-dark-200 text-lg mb-4">
          Increasing the money supply doesn't increase real wealth—it only redistributes it.
        </p>
        <p className="text-dark-400 text-sm">
          If we doubled the money supply overnight, prices would eventually double, leaving
          real purchasing power unchanged. The only effects are transitional disturbances
          and redistribution from later to earlier receivers.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>Policy implication:</strong> There is no social benefit to expanding the
          money supply. Government inflation (via money creation) is simply a form of
          taxation and redistribution—hidden and inequitable.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              The <strong>purchasing power of money</strong> is determined by supply and
              demand, like any other good.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>More money = higher prices</strong> (lower purchasing power),
              other things equal.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              The <strong>Cantillon effect</strong>: new money spreads unevenly, benefiting
              early receivers at the expense of later receivers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              <strong>Cash balances</strong> adjust to desired levels; excess causes
              spending, deficiency causes hoarding.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Any quantity of money</strong> serves the economy's needs. Money
              creation doesn't add wealth—only redistribution.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 12 examines <strong>The Economics of Violent Intervention</strong>—what
        happens when government forcibly interferes with the market. This concludes the
        "Man, Economy, and State" portion and sets up "Power and Market."
      </p>
    </LessonLayout>
  );
}
