import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Time Preference and Interest Demo
function TimePreferenceInterestDemo() {
  const [timePreference, setTimePreference] = useState(50);
  const interestRate = Math.round(timePreference * 0.1 * 10) / 10;

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Time Preference and Interest</h4>

      <div className="mb-4">
        <label className="text-dark-300 text-sm mb-2 block">
          Society's Average Time Preference:
        </label>
        <input
          type="range"
          min={10}
          max={100}
          value={timePreference}
          onChange={(e) => setTimePreference(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>Low (patient)</span>
          <span>High (impatient)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-1">Pure Interest Rate</p>
          <p className="text-3xl font-bold text-emerald-400">{interestRate}%</p>
          <p className="text-dark-500 text-xs">Per year</p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-dark-400 text-sm mb-1">Savings Rate</p>
          <p className="text-3xl font-bold text-emerald-400">{Math.round(100 - timePreference * 0.8)}%</p>
          <p className="text-dark-500 text-xs">Of income</p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-dark-400">Production Structure:</span>
          <span className={timePreference < 50 ? 'text-emerald-400' : 'text-amber-400'}>
            {timePreference < 50 ? 'Long (more capital-intensive)' : 'Short (less capital-intensive)'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-dark-400">Economic Growth:</span>
          <span className={timePreference < 50 ? 'text-emerald-400' : 'text-amber-400'}>
            {timePreference < 50 ? 'Higher' : 'Lower'}
          </span>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Lower time preference → more saving → more capital → more productivity → higher living standards.
      </p>
    </div>
  );
}

// Time Market Visualization
function TimeMarketDemo() {
  const [rate, setRate] = useState(5);

  const saversData = [
    { name: 'High savers', minRate: 2, amount: 100 },
    { name: 'Medium savers', minRate: 4, amount: 80 },
    { name: 'Low savers', minRate: 6, amount: 50 },
    { name: 'Rare savers', minRate: 8, amount: 20 },
  ];

  const borrowersData = [
    { name: 'Best projects', maxRate: 10, amount: 100 },
    { name: 'Good projects', maxRate: 8, amount: 80 },
    { name: 'Marginal projects', maxRate: 5, amount: 60 },
    { name: 'Weak projects', maxRate: 3, amount: 30 },
  ];

  const totalSaving = saversData
    .filter((s) => s.minRate <= rate)
    .reduce((sum, s) => sum + s.amount, 0);
  const totalBorrowing = borrowersData
    .filter((b) => b.maxRate >= rate)
    .reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Time Market</h4>

      <div className="mb-4">
        <label className="text-dark-300 text-sm mb-2 block">Interest Rate:</label>
        <input
          type="range"
          min={1}
          max={10}
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>1%</span>
          <span>5%</span>
          <span>10%</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-emerald-400 font-semibold mb-2">Supply of Savings</p>
          {saversData.map((s) => (
            <div
              key={s.name}
              className={`text-sm py-1 ${s.minRate <= rate ? 'text-emerald-400' : 'text-dark-600'}`}
            >
              {s.name} (min {s.minRate}%): ${s.amount}B
              {s.minRate <= rate ? ' ✓' : ''}
            </div>
          ))}
          <p className="text-emerald-400 font-bold mt-2">Total: ${totalSaving}B</p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-emerald-400 font-semibold mb-2">Demand for Borrowing</p>
          {borrowersData.map((b) => (
            <div
              key={b.name}
              className={`text-sm py-1 ${b.maxRate >= rate ? 'text-emerald-400' : 'text-dark-600'}`}
            >
              {b.name} (max {b.maxRate}%): ${b.amount}B
              {b.maxRate >= rate ? ' ✓' : ''}
            </div>
          ))}
          <p className="text-emerald-400 font-bold mt-2">Total: ${totalBorrowing}B</p>
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4 text-center">
        <p className="text-dark-300">At {rate}% interest rate:</p>
        {Math.abs(totalSaving - totalBorrowing) < 20 ? (
          <p className="text-emerald-400 font-bold">Market clears! Savings ≈ Investment</p>
        ) : totalSaving > totalBorrowing ? (
          <p className="text-amber-400">Excess savings → rate tends to fall</p>
        ) : (
          <p className="text-amber-400">Excess demand → rate tends to rise</p>
        )}
      </div>
    </div>
  );
}

// Production Structure Length Demo
function ProductionLengthDemo() {
  const [interestRate, setInterestRate] = useState(5);

  const stages = 10 - Math.floor(interestRate * 0.8);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Interest Rate and Production Structure</h4>

      <div className="mb-4">
        <label className="text-dark-300 text-sm mb-2 block">Interest Rate:</label>
        <input
          type="range"
          min={2}
          max={10}
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
        <p className="text-center text-emerald-400 font-bold mt-1">{interestRate}%</p>
      </div>

      <div className="flex items-end justify-center gap-1 h-32 mb-4">
        {Array.from({ length: stages }).map((_, i) => (
          <div
            key={i}
            className="w-6 bg-emerald-600 rounded-t transition-all"
            style={{ height: `${100 - i * 10}%` }}
          />
        ))}
      </div>

      <div className="text-center">
        <p className="text-dark-300">Production Structure Length: <span className="text-emerald-400 font-bold">{stages} stages</span></p>
        <p className="text-dark-500 text-sm mt-1">
          {interestRate < 5
            ? 'Low interest rate → long structure → capital-intensive production'
            : 'High interest rate → short structure → less capital-intensive production'}
        </p>
      </div>
    </div>
  );
}

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The rate of interest is not the price of money. It is the ratio of the value
        assigned to present goods as against the value assigned to future goods."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        This chapter develops the Austrian theory of <strong className="text-emerald-400">interest</strong>.
        Rothbard explains how time preference determines the interest rate, how the "time market"
        coordinates saving and investment, and how interest rates affect the structure of production.
      </p>

      {/* Section 1: The Rate of Interest */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Rate of Interest and Its Determination</h2>

      <p className="my-4">
        The <strong className="text-emerald-400">rate of interest</strong> is the ratio at which
        present goods exchange for future goods. It is not the "price of money" (that's a
        common confusion with the demand for cash balances). Interest arises because people
        prefer present goods to future goods.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Pure Rate of Interest</h4>
        <p className="text-dark-200 text-lg mb-4">
          The premium on present goods over future goods, determined by time preference.
        </p>
        <p className="text-center text-xl font-mono text-emerald-400">
          1 present dollar = (1 + interest rate) future dollars
        </p>
        <p className="text-dark-400 text-sm mt-4 text-center">
          If the interest rate is 5%, you need $105 next year to be equivalent to $100 today.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>Pure vs. market interest:</strong> The "pure" interest rate reflects only
          time preference. Market interest rates also include premiums for risk, inflation
          expectations, and transaction costs. Rothbard focuses on the pure rate.
        </p>
      </Callout>

      {/* Section 2: Time Preference */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Time Preference</h2>

      <p className="my-4">
        <strong className="text-emerald-400">Time preference</strong> is the universal human
        tendency to prefer present satisfaction over future satisfaction, other things equal.
        It's not mere "impatience" but a logical implication of purposeful action.
      </p>

      <TimePreferenceInterestDemo />

      <p className="my-4">
        Time preference varies among individuals and changes over time. But it must always
        be positive—a zero time preference would mean perfect indifference between present
        and future, which contradicts the nature of action (why act now if you're indifferent
        about when goals are achieved?).
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">High Time Preference</h4>
          <p className="text-sm text-dark-300">
            Strong preference for present goods. Little saving. High interest rates.
            Shorter production structure.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Low Time Preference</h4>
          <p className="text-sm text-dark-300">
            More willing to wait. More saving. Low interest rates. Longer, more
            capital-intensive production.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: Determination of the Pure Rate */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Determination of the Pure Rate of Interest</h2>

      <p className="my-4">
        The interest rate is determined in what Rothbard calls the <strong className="text-emerald-400">
        "time market"</strong>—where present goods (savings) exchange for future goods
        (promises to repay with interest). Supply comes from savers; demand comes from
        borrowers (entrepreneurs who will invest).
      </p>

      <TimeMarketDemo />

      <p className="my-4">
        The interest rate equilibrates saving and investment. If people become more patient
        (lower time preference), they save more. The increased supply of loanable funds
        drives the interest rate down, making more investment projects profitable.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            step: 1,
            title: 'Time Preferences Determine Saving',
            description: 'Lower time preference → people save more, consume less now.',
          },
          {
            step: 2,
            title: 'Savings Enter the Time Market',
            description: 'Savers offer present goods in exchange for future returns.',
          },
          {
            step: 3,
            title: 'Interest Rate Adjusts',
            description: 'More saving → lower interest rate. Less saving → higher rate.',
          },
          {
            step: 4,
            title: 'Entrepreneurs Respond',
            description: 'Lower rates make longer, more capital-intensive projects profitable.',
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

      {/* Section 4: The Time Market and Production Structure */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. The Time Market and the Production Structure</h2>

      <p className="my-4">
        The interest rate doesn't just equilibrate saving and investment—it determines
        the <strong className="text-emerald-400">length and structure of production</strong>.
        Lower interest rates make longer, more roundabout production processes profitable.
      </p>

      <ProductionLengthDemo />

      <Callout type="warning">
        <p>
          <strong>Why this matters:</strong> When interest rates fall because of genuine
          increased saving, the longer production structure is sustainable. But when rates
          fall because of central bank credit expansion (not real saving), the result is
          malinvestment and boom-bust cycles.
        </p>
      </Callout>

      {/* Section 5: Interest and Capital */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Interest and Capital</h2>

      <p className="my-4">
        Interest appears throughout the economy, not just in loan markets. Because capital
        goods are "future goods" (they produce consumers' goods in the future), the return
        to capital investment reflects the interest rate.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Interest on Loans</h4>
          <p className="text-sm text-dark-300">
            Explicit payment from borrower to lender. The most visible form of interest.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Interest in Investment</h4>
          <p className="text-sm text-dark-300">
            Return on invested capital. The investor waits for returns; interest compensates
            the waiting.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Interest in Production</h4>
          <p className="text-sm text-dark-300">
            The "spread" between factor prices and output prices. Entrepreneurs earn
            interest by advancing money to factors.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Discounting</h4>
          <p className="text-sm text-dark-300">
            Future revenues are worth less than present revenues. The interest rate is
            the discount rate.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        In equilibrium, the rate of return on capital tends to equal the pure interest rate
        throughout the economy. If one investment yields more, resources flow there until
        returns equalize.
      </p>

      {/* The Originary Interest Rate */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Rothbard's Contribution</h2>

      <p className="my-4">
        Rothbard develops the "pure time preference" theory of interest more rigorously
        than his predecessors. He emphasizes that interest is not:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-rose-900/30 rounded-xl p-4 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Not Exploitation</h3>
          <p className="text-dark-300 text-sm">
            Marxists claim interest is stolen from workers. But interest exists because
            of time preference—workers are paid now, before products are sold.
          </p>
        </div>
        <div className="bg-rose-900/30 rounded-xl p-4 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Not Productivity</h3>
          <p className="text-dark-300 text-sm">
            Capital is productive, but that doesn't explain interest. The value of
            capital comes from future productivity, which must be discounted.
          </p>
        </div>
        <div className="bg-rose-900/30 rounded-xl p-4 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Not Monetary</h3>
          <p className="text-dark-300 text-sm">
            Interest is not the "price of money." The demand for money affects prices,
            not the interest rate. Interest is about time, not money.
          </p>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The key insight:</strong> Interest exists because of time preference alone.
          Even in a world without money, without capital, without uncertainty—as long as
          people prefer present to future goods—there would be interest.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Interest is the price of time</strong>—the ratio at which present
              goods exchange for future goods.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Time preference</strong> is the universal preference for present over
              future satisfaction. It determines the interest rate.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              The <strong>time market</strong> equilibrates saving and investment. Lower
              time preference → more saving → lower interest rates.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              Interest rates determine the <strong>length of the production structure</strong>.
              Lower rates make longer, more capital-intensive methods profitable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              Interest appears throughout the economy as returns on investment, loan
              payments, and the <strong>spread between factor prices and output prices</strong>.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 7 examines <strong>General Pricing of the Factors</strong>—how the prices
        of land, labor, and capital goods are determined, and how value is "imputed"
        backward from consumers' goods to the factors that produce them.
      </p>
    </LessonLayout>
  );
}
