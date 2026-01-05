import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing the evolution from barter to money
function BarterToMoneyDemo() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      title: 'Direct Exchange (Barter)',
      description: 'The farmer wants shoes, the shoemaker wants bread. They must find each other and agree on terms.',
      problem: 'Double coincidence of wants required',
      efficiency: 20,
    },
    {
      title: 'Indirect Exchange Emerges',
      description: 'The farmer accepts salt (which he doesn\'t need directly) because he knows others will accept it.',
      problem: 'Salt is widely accepted but has limitations',
      efficiency: 50,
    },
    {
      title: 'Money Develops',
      description: 'Precious metals emerge as the preferred medium—durable, divisible, portable, and universally valued.',
      problem: 'None—the market has solved the exchange problem',
      efficiency: 95,
    },
  ];

  const current = stages[stage];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">From Barter to Money</h4>
      <p className="text-dark-400 text-sm mb-4">
        Watch how indirect exchange solves the fundamental problem of barter.
      </p>

      <div className="flex gap-2 mb-6">
        {stages.map((s, i) => (
          <button
            key={i}
            onClick={() => setStage(i)}
            className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              stage === i
                ? 'bg-amber-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Stage {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <h5 className="text-amber-400 font-medium mb-2">{current.title}</h5>
        <p className="text-dark-300 text-sm mb-4">{current.description}</p>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-dark-400 text-sm">Exchange Efficiency:</span>
          <div className="flex-1 bg-dark-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-amber-600 to-amber-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${current.efficiency}%` }}
            />
          </div>
          <span className="text-amber-400 font-medium">{current.efficiency}%</span>
        </div>

        {current.problem !== 'None—the market has solved the exchange problem' && (
          <div className="text-red-400 text-sm">
            <span className="font-medium">Challenge: </span>
            {current.problem}
          </div>
        )}
        {current.problem === 'None—the market has solved the exchange problem' && (
          <div className="text-green-400 text-sm">
            <span className="font-medium">Result: </span>
            {current.problem}
          </div>
        )}
      </div>
    </div>
  );
}

// Interactive demo showing money supply and purchasing power
function MoneySupplyDemo() {
  const [moneySupply, setMoneySupply] = useState(100);
  const [goods, setGoods] = useState(100);

  const purchasingPower = (goods / moneySupply) * 100;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Money Supply and Purchasing Power</h4>
      <p className="text-dark-400 text-sm mb-4">
        Adjust the money supply and goods available to see how purchasing power changes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Money Supply: {moneySupply}
          </label>
          <input
            type="range"
            min="50"
            max="200"
            value={moneySupply}
            onChange={(e) => setMoneySupply(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Goods Available: {goods}
          </label>
          <input
            type="range"
            min="50"
            max="200"
            value={goods}
            onChange={(e) => setGoods(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="text-center">
          <span className="text-dark-400 text-sm">Purchasing Power of Money</span>
          <div className={`text-3xl font-bold mt-2 ${
            purchasingPower > 100 ? 'text-green-400' :
            purchasingPower < 100 ? 'text-red-400' : 'text-amber-400'
          }`}>
            {purchasingPower.toFixed(0)}%
          </div>
          <p className="text-dark-400 text-xs mt-2">
            {purchasingPower > 100
              ? 'Deflation: Each unit of money buys more goods'
              : purchasingPower < 100
              ? 'Inflation: Each unit of money buys fewer goods'
              : 'Stable: Purchasing power unchanged'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <div className="prose prose-invert max-w-none">
        {/* Introduction */}
        <h2 className="text-3xl font-bold text-dark-100 mb-6">
          XVII. Indirect Exchange
        </h2>

        <p className="text-dark-300 text-lg leading-relaxed mb-6">
          The emergence of indirect exchange represents one of the most important developments
          in human civilization. By introducing a medium of exchange—money—between the acts of
          selling and buying, mankind vastly expanded the scope and efficiency of economic
          cooperation. This chapter explores the nature of money, its origins, and its crucial
          role in economic calculation.
        </p>

        {/* Media of Exchange and Money */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          1. Media of Exchange and Money
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Interpersonal exchange is called <em>indirect exchange</em> if, between the commodities
          and services the reciprocal exchange of which is the ultimate end of exchanging, one
          or several media of exchange are interposed. The subject matter of the theory of
          indirect exchange is the study of the ratios of exchange between the media of exchange
          on the one hand and goods and services of all orders on the other hand.
        </p>

        <Callout type="info" title="Definition: Medium of Exchange">
          A medium of exchange is a good which people acquire not for their own consumption or
          for use in their own production activities, but with the intention of exchanging it
          later for those goods which they want to use for consumption or production.
        </Callout>

        <p className="text-dark-300 leading-relaxed mb-4">
          Money is the most commonly used medium of exchange. It is the thing which all other
          goods and services are traded against and which is therefore universally acceptable.
          The notion of money as a medium of exchange is one of the most important concepts in
          economics, for it is the use of money that makes economic calculation possible.
        </p>

        <BarterToMoneyDemo />

        {/* Observations on Widespread Errors */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          2. Observations on Some Widespread Errors
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The gravest mistakes in economic thinking stem from misconceptions about the nature
          and functions of money. Many popular fallacies can be traced to the failure to
          understand that money is simply a medium of exchange—nothing more, nothing less.
        </p>

        <CardGrid>
          <Card title="The 'Veil' of Money" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              Classical economists sometimes described money as a "veil" that obscures the
              "real" economy underneath. But money is not merely a veil—it is an essential
              tool that makes complex exchange possible. The attempt to analyze the economy
              "behind the veil" ignores money's transformative role.
            </p>
          </Card>
          <Card title="Money as Wealth" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              The mercantilist error equated money with wealth. But money is not wealth
              itself—it is a claim to wealth. The accumulation of money is not the goal
              of economic activity; rather, money serves as a means to acquire actual
              goods and services.
            </p>
          </Card>
          <Card title="Neutral Money" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              Some economists imagine "neutral" money that would not affect relative prices
              or the structure of production. But there is no such thing as neutral money.
              All money must enter the economy at specific points and affect prices in
              specific ways.
            </p>
          </Card>
          <Card title="Stability of Value" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              The quest for money of "stable value" misunderstands the nature of value
              itself. Value is subjective and always changing. There can be no immutable
              standard of value because value is not a measurable quantity inherent in things.
            </p>
          </Card>
        </CardGrid>

        {/* Demand for Money and Supply of Money */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          3. Demand for Money and Supply of Money
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The demand for money is the demand for holding cash balances. Every individual and
          every enterprise keeps a certain portion of its wealth in the form of cash. This
          is the cash holding or cash balance. The amount of cash an individual holds depends
          on various factors:
        </p>

        <ul className="list-disc list-inside text-dark-300 space-y-2 mb-6">
          <li>The interval between receiving income and spending it</li>
          <li>Anticipation of future purchases</li>
          <li>Uncertainty about future needs and opportunities</li>
          <li>The costs and inconveniences of frequently converting other assets to cash</li>
          <li>Personal temperament and risk tolerance</li>
        </ul>

        <Callout type="warning" title="Carl Menger's Insight">
          Carl Menger explained the origin of money without recourse to government decree or
          social contract. Money evolved spontaneously as certain commodities—because of their
          superior marketability—came to be accepted by everyone. The most marketable commodity
          gradually became the universal medium of exchange: money.
        </Callout>

        <p className="text-dark-300 leading-relaxed mb-4">
          The supply of money is determined by the total quantity of the money commodity in
          existence (in the case of commodity money) or by the decisions of the monetary
          authority (in the case of fiat money). Changes in the money supply do not affect
          all prices simultaneously and proportionally—this is the crucial insight that
          distinguishes sound monetary theory from naive quantity theory.
        </p>

        {/* Determination of Purchasing Power */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          4. The Determination of the Purchasing Power of Money
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The purchasing power of money is determined, like the price of any commodity, by
          supply and demand. The demand for money is the demand to hold cash balances. The
          supply is the total quantity of money in existence. At the point where these two
          forces meet, the purchasing power of money is established.
        </p>

        <MoneySupplyDemo />

        <p className="text-dark-300 leading-relaxed mb-4">
          However, the determination of money's purchasing power presents a unique theoretical
          problem. All goods are valued in terms of money, but how is money itself valued?
          Mises solved this apparent circularity with his <em>regression theorem</em>:
          today's purchasing power of money is based on yesterday's purchasing power, which
          was based on the day before's, and so on, back to the point where the money
          commodity was still valued only for its non-monetary uses.
        </p>

        <Callout type="info" title="The Regression Theorem">
          The purchasing power of money today is determined by the demand for money based on
          information about yesterday's purchasing power. This chain of causation extends back
          through time until we reach the point when the commodity that would become money was
          valued solely for its direct use (e.g., gold valued for jewelry before it became money).
        </Callout>

        {/* Changes in Purchasing Power */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          5. Cash-Induced and Goods-Induced Changes in Purchasing Power
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Changes in money's purchasing power can originate from two sources: changes in the
          supply of or demand for money itself (cash-induced changes), or changes in the
          supply of or demand for goods and services (goods-induced changes).
        </p>

        <CardGrid>
          <Card title="Cash-Induced Changes" className="bg-dark-800">
            <p className="text-dark-300 text-sm mb-3">
              When the money supply increases without a corresponding increase in demand
              for cash holdings, purchasing power falls (inflation). Conversely, when the
              money supply decreases or demand for cash rises, purchasing power increases
              (deflation).
            </p>
            <p className="text-amber-400 text-sm font-medium">
              Origin: Monetary side of the equation
            </p>
          </Card>
          <Card title="Goods-Induced Changes" className="bg-dark-800">
            <p className="text-dark-300 text-sm mb-3">
              When productivity increases and more goods become available, each unit of
              money can buy more—purchasing power rises. When goods become scarcer, each
              unit of money buys less—purchasing power falls.
            </p>
            <p className="text-amber-400 text-sm font-medium">
              Origin: Real goods side of the equation
            </p>
          </Card>
        </CardGrid>

        {/* The Gold Standard */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          6. The Gold Standard
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The gold standard was the outcome of centuries of monetary evolution. It was not
          deliberately designed by governments but emerged spontaneously as market participants
          converged on gold as the most suitable money commodity. Gold had all the qualities
          that made it superior to other candidates:
        </p>

        <ul className="list-disc list-inside text-dark-300 space-y-2 mb-6">
          <li><strong>Durability:</strong> Gold does not corrode, tarnish, or decay</li>
          <li><strong>Divisibility:</strong> Gold can be divided into small units without loss of value</li>
          <li><strong>Portability:</strong> High value-to-weight ratio makes transport practical</li>
          <li><strong>Uniformity:</strong> Gold is chemically identical everywhere</li>
          <li><strong>Limited Supply:</strong> Gold cannot be easily produced, preventing inflation</li>
          <li><strong>Recognizability:</strong> Gold's distinctive properties make it easy to verify</li>
        </ul>

        <Callout type="info" title="The Classical Gold Standard">
          Under the classical gold standard (roughly 1870-1914), the purchasing power of money
          was remarkably stable over long periods. Prices in 1914 were not dramatically different
          from prices in 1814. This stability was not the result of government management but
          of the natural limits on gold production.
        </Callout>

        {/* Money-Substitutes */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          7. Money-Substitutes and Fiduciary Media
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          In the course of monetary evolution, various money-substitutes have emerged.
          These are claims to money that circulate as if they were money itself. The most
          important distinction is between:
        </p>

        <CardGrid>
          <Card title="Money Certificates" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              Claims to money that are 100% backed by actual money held in reserve.
              Warehouse receipts for gold, for example, are money certificates. They
              add nothing to the money supply—they simply make the underlying money
              more convenient to use.
            </p>
          </Card>
          <Card title="Fiduciary Media" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              Claims to money that are NOT fully backed by reserves. Bank notes and
              demand deposits in excess of reserves are fiduciary media. They function
              as money but increase the effective money supply beyond the underlying
              base money.
            </p>
          </Card>
        </CardGrid>

        <p className="text-dark-300 leading-relaxed mt-4 mb-4">
          The issuance of fiduciary media has profound consequences. It allows banks to
          expand credit beyond the limits set by actual savings, which sets in motion
          the boom-bust cycle that Mises would analyze in his theory of the trade cycle.
        </p>

        {/* Inflation and Deflation */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          8. Inflation, Deflation, and Their Social Consequences
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Inflation—the increase in the quantity of money—is never "neutral." New money
          enters the economy at specific points and benefits those who receive it first
          at the expense of those who receive it later (the Cantillon effect).
        </p>

        <Callout type="warning" title="The Cantillon Effect">
          When new money enters the economy, it does not raise all prices simultaneously.
          The first recipients can spend the new money at old prices, gaining real purchasing
          power. Later recipients find that prices have already risen. This redistribution
          of wealth is an unavoidable consequence of inflation.
        </Callout>

        <p className="text-dark-300 leading-relaxed mb-4">
          Throughout history, governments have been tempted to resort to inflation as a
          means of financing their expenditures. This inflationist policy transfers wealth
          from creditors to debtors, from fixed-income earners to those with flexible incomes,
          and from the prudent to the improvident. It undermines the social fabric by
          destroying the basis for long-term planning and saving.
        </p>

        {/* Summary */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          Summary: The Role of Money in the Market Economy
        </h3>

        <div className="bg-dark-800 rounded-lg p-6 mb-6">
          <ul className="space-y-3 text-dark-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">1.</span>
              <span>
                Money is the universally accepted medium of exchange that emerges
                spontaneously from market processes, not from government decree.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">2.</span>
              <span>
                The demand for money is the demand to hold cash balances; the supply
                is the total quantity of money in existence.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">3.</span>
              <span>
                The purchasing power of money is determined by supply and demand,
                with the regression theorem explaining how this determination is possible.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">4.</span>
              <span>
                Changes in purchasing power can be cash-induced or goods-induced,
                with very different economic implications.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">5.</span>
              <span>
                The gold standard emerged as the market's solution to the money problem,
                providing stability without government management.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">6.</span>
              <span>
                Fiduciary media—money-substitutes not fully backed by reserves—expand
                the money supply and have far-reaching economic consequences.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">7.</span>
              <span>
                Inflation redistributes wealth through the Cantillon effect and undermines
                the foundation for economic calculation and planning.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}
