import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// =============================================================================
// INTERACTIVE COMPONENTS
// =============================================================================

/**
 * Interactive demo showing why neutral taxation is impossible
 */
function NeutralTaxDemo() {
  const [taxType, setTaxType] = useState<'head' | 'proportional' | 'progressive'>('proportional');
  const [showEffects, setShowEffects] = useState(false);

  const citizens = [
    { name: 'Low Income', income: 20000, consumption: 'Necessities mostly' },
    { name: 'Middle Income', income: 60000, consumption: 'Mix of needs and wants' },
    { name: 'High Income', income: 200000, consumption: 'Luxury goods, investments' },
  ];

  const calculateTax = (income: number) => {
    switch (taxType) {
      case 'head':
        return 5000; // Fixed amount
      case 'proportional':
        return income * 0.2; // 20% flat
      case 'progressive':
        if (income <= 30000) return income * 0.1;
        if (income <= 100000) return 3000 + (income - 30000) * 0.25;
        return 3000 + 17500 + (income - 100000) * 0.4;
    }
  };

  const getDistortionEffect = (income: number) => {
    switch (taxType) {
      case 'head':
        return income < 30000 ? 'Severe burden' : income < 80000 ? 'Moderate burden' : 'Light burden';
      case 'proportional':
        return 'Equal percentage, but different marginal utility impact';
      case 'progressive':
        return income > 100000 ? 'Reduces investment incentive' : 'Moderate effect';
    }
  };

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Myth of Neutral Taxation</h4>

      <p className="text-dark-300 mb-4">
        A "neutral" tax would not change market behavior. But can any tax truly be neutral?
      </p>

      <div className="flex gap-2 mb-6">
        {(['head', 'proportional', 'progressive'] as const).map((type) => (
          <button
            key={type}
            onClick={() => setTaxType(type)}
            className={`px-4 py-2 rounded-lg font-medium capitalize ${
              taxType === type
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {type === 'head' ? 'Head Tax' : type === 'proportional' ? 'Flat Tax' : 'Progressive'}
          </button>
        ))}
      </div>

      <div className="space-y-3 mb-4">
        {citizens.map((c) => {
          const tax = calculateTax(c.income);
          const rate = (tax / c.income) * 100;

          return (
            <div key={c.name} className="bg-dark-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-dark-100 font-medium">{c.name}</span>
                  <span className="text-dark-400 text-sm ml-2">
                    (${c.income.toLocaleString()}/yr)
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-dark-100">${tax.toLocaleString()} tax</div>
                  <div className="text-dark-400 text-sm">{rate.toFixed(1)}% effective rate</div>
                </div>
              </div>
              {showEffects && (
                <div className="mt-2 p-2 bg-yellow-900/30 border border-yellow-700 rounded text-sm">
                  <span className="text-yellow-400">Market Distortion:</span>{' '}
                  <span className="text-dark-200">{getDistortionEffect(c.income)}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setShowEffects(!showEffects)}
        className={`px-4 py-2 rounded-lg font-medium ${
          showEffects ? 'bg-yellow-600 text-white' : 'bg-dark-600 text-dark-300'
        }`}
      >
        {showEffects ? 'Hide Market Effects' : 'Show Market Effects'}
      </button>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Every tax affects behavior.
          Head taxes burden the poor disproportionately. Flat taxes ignore diminishing
          marginal utility. Progressive taxes discourage investment. No tax is truly neutral.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing fiscal vs nonfiscal conflict
 */
function FiscalConflictDemo() {
  const [taxRate, setTaxRate] = useState(30);

  // Simple model: higher tax reduces consumption, which reduces revenue
  const baseConsumption = 1000000; // Base market size
  const elasticity = 1.5; // How much consumption drops per tax increase
  const consumption = baseConsumption * Math.pow(1 - taxRate / 100, elasticity);
  const revenue = consumption * (taxRate / 100);
  const behaviorChange = 100 - (consumption / baseConsumption) * 100;

  const maxRevenueRate = 40; // Simplified Laffer peak
  const isOverTaxed = taxRate > maxRevenueRate;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Fiscal vs. Nonfiscal Objectives</h4>

      <p className="text-dark-300 mb-4">
        Consider an excise tax on a "sin" good. The government wants both revenue (fiscal)
        and reduced consumption (nonfiscal). These goals conflict.
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Tax Rate: {taxRate}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>0% (No tax)</span>
          <span>50%</span>
          <span>100% (Prohibition)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className={`p-4 rounded-lg ${
          isOverTaxed ? 'bg-red-900/30 border border-red-700' : 'bg-green-900/30 border border-green-700'
        }`}>
          <div className="text-dark-400 text-sm mb-1">Tax Revenue</div>
          <div className={`text-2xl font-bold ${isOverTaxed ? 'text-red-400' : 'text-green-400'}`}>
            ${Math.round(revenue).toLocaleString()}
          </div>
          <div className="text-dark-500 text-xs mt-1">Fiscal objective</div>
        </div>

        <div className={`p-4 rounded-lg ${
          behaviorChange > 50 ? 'bg-green-900/30 border border-green-700' : 'bg-yellow-900/30 border border-yellow-700'
        }`}>
          <div className="text-dark-400 text-sm mb-1">Consumption Reduced</div>
          <div className={`text-2xl font-bold ${behaviorChange > 50 ? 'text-green-400' : 'text-yellow-400'}`}>
            {behaviorChange.toFixed(1)}%
          </div>
          <div className="text-dark-500 text-xs mt-1">Nonfiscal objective</div>
        </div>
      </div>

      {taxRate >= 95 && (
        <div className="bg-purple-900/30 border border-purple-700 p-4 rounded-lg mb-4">
          <p className="text-purple-400 font-medium">Near-Prohibition Reached</p>
          <p className="text-dark-200 text-sm">
            The tax fully achieves its nonfiscal objective of eliminating consumption—but
            revenue is now near zero. It no longer serves any fiscal purpose.
          </p>
        </div>
      )}

      {isOverTaxed && taxRate < 95 && (
        <div className="bg-yellow-900/30 border border-yellow-700 p-4 rounded-lg mb-4">
          <p className="text-yellow-400 font-medium">Past Revenue Maximum</p>
          <p className="text-dark-200 text-sm">
            Higher rates are reducing total revenue. The tax is becoming self-defeating
            as a fiscal measure.
          </p>
        </div>
      )}

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "There is no solution
          for the irreconcilable conflict between the fiscal and the nonfiscal ends of
          taxation." Maximum revenue and maximum behavior change are mutually exclusive.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing three classes of tax interventionism
 */
function TaxClassesDemo() {
  const [selectedClass, setSelectedClass] = useState(0);

  const classes = [
    {
      name: 'Production Restriction',
      description: 'Taxes that aim to suppress or limit production of specific goods',
      examples: [
        'Tariffs on imports (exempt domestic products)',
        'Higher taxes on large vs small producers',
        'Excise taxes on "undesirable" products',
      ],
      effect: 'Distorts production patterns, protects favored industries',
      equivalent: 'Same effect as direct production quotas or bans',
    },
    {
      name: 'Partial Confiscation',
      description: 'Taxes that expropriate a portion of income or wealth',
      examples: [
        'High marginal income tax rates',
        'Estate/inheritance taxes',
        'Wealth taxes',
      ],
      effect: 'Redistributes from productive to political allocation',
      equivalent: 'Same effect as partial socialism',
    },
    {
      name: 'Total Confiscation',
      description: 'Complete expropriation of income and wealth',
      examples: [
        '100% tax rates',
        'Nationalization through tax',
        'Elimination of private property',
      ],
      effect: 'Ends the market economy entirely',
      equivalent: 'This IS socialism, not intervention',
    },
  ];

  const current = classes[selectedClass];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Three Classes of Tax Interventionism</h4>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {classes.map((c, i) => (
          <button
            key={i}
            onClick={() => setSelectedClass(i)}
            className={`p-3 rounded-lg text-center ${
              selectedClass === i
                ? i === 2 ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            <div className="text-sm font-medium">Class {i + 1}</div>
            <div className="text-xs mt-1">{c.name}</div>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm mb-1">Description</div>
          <p className="text-dark-100">{current.description}</p>
        </div>

        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">Examples</div>
          <ul className="space-y-1">
            {current.examples.map((ex, i) => (
              <li key={i} className="text-dark-200 text-sm">• {ex}</li>
            ))}
          </ul>
        </div>

        <div className={`p-4 rounded-lg ${
          selectedClass === 2
            ? 'bg-purple-900/30 border border-purple-700'
            : 'bg-yellow-900/30 border border-yellow-700'
        }`}>
          <div className={`text-sm font-medium mb-1 ${
            selectedClass === 2 ? 'text-purple-400' : 'text-yellow-400'
          }`}>
            Economic Equivalent
          </div>
          <p className="text-dark-200">{current.equivalent}</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Taxes can be instruments
          of intervention just as powerful as direct commands. The difference is only in
          method, not in effect.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing self-defeating high taxes
 */
function SelfDefeatingTaxDemo() {
  const [taxRate, setTaxRate] = useState(40);

  // Model productive activity and tax revenue
  const baseActivity = 100;
  const activityReduction = Math.pow(taxRate / 100, 1.5) * 80; // Activity drops with high taxes
  const remainingActivity = Math.max(5, baseActivity - activityReduction);
  const revenue = remainingActivity * (taxRate / 100);

  // Find approximate max revenue point
  const isDestructive = taxRate > 70;
  const isPastPeak = taxRate > 50;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Power to Destroy</h4>

      <p className="text-dark-300 mb-4">
        "The power to tax involves, as Chief Justice Marshall observed, the power to
        destroy." Above certain rates, taxes cease to be revenue measures and become
        weapons against the market economy.
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Effective Tax Rate: {taxRate}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">Productive Activity</div>
          <div className="h-4 bg-dark-600 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                isDestructive ? 'bg-red-500' : isPastPeak ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${remainingActivity}%` }}
            />
          </div>
          <div className="text-right text-sm mt-1 text-dark-400">
            {remainingActivity.toFixed(0)}% of potential
          </div>
        </div>

        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">Tax Revenue</div>
          <div className="h-4 bg-dark-600 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                isDestructive ? 'bg-red-500' : isPastPeak ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${revenue}%` }}
            />
          </div>
          <div className="text-right text-sm mt-1 text-dark-400">
            {revenue.toFixed(0)} units
          </div>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${
        isDestructive
          ? 'bg-red-900/30 border border-red-700'
          : isPastPeak
            ? 'bg-yellow-900/30 border border-yellow-700'
            : 'bg-green-900/30 border border-green-700'
      }`}>
        <div className={`font-medium ${
          isDestructive ? 'text-red-400' : isPastPeak ? 'text-yellow-400' : 'text-green-400'
        }`}>
          {isDestructive
            ? 'Destructive Taxation'
            : isPastPeak
              ? 'Self-Defeating Range'
              : 'Revenue-Generating Range'}
        </div>
        <p className="text-dark-200 text-sm mt-1">
          {isDestructive
            ? 'Taxes are now destroying the market economy. Revenue collapses as productive activity flees.'
            : isPastPeak
              ? 'Higher rates reduce revenue. The tax is defeating its own fiscal purpose.'
              : 'Taxes generate revenue without severely distorting market activity.'}
        </p>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "If taxes grow beyond
          a moderate limit, they cease to be taxes and turn into devices for the
          destruction of the market economy." This is the mark of present-day public finance.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      {/* Introduction */}
      <p className="text-lg text-dark-100 mb-6">
        Chapter XXVIII examines taxation as a form of government intervention. Mises
        analyzes whether neutral taxation is possible, the conflict between fiscal
        and nonfiscal objectives, and how excessive taxation destroys markets.
      </p>

      <Callout type="concept" title="Central Theme">
        Taxation is never economically neutral. Every tax distorts market outcomes.
        Above certain rates, taxes cease to be revenue measures and become instruments
        for destroying the market economy.
      </Callout>

      {/* Section 1: The Neutral Tax */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        1. The Neutral Tax
      </h2>

      <p className="text-dark-200 mb-4">
        A theoretically "neutral" tax would not change how markets operate. But is
        such a tax actually possible?
      </p>

      <NeutralTaxDemo />

      <Callout type="key-point" title="Neutrality is Impossible">
        In a changing economy with unequal incomes, no tax can be truly neutral.
        Every tax affects different people differently, changing their behavior
        and distorting market outcomes.
      </Callout>

      {/* Section 2: The Total Tax */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        2. Fiscal and Nonfiscal Objectives
      </h2>

      <p className="text-dark-200 mb-4">
        Governments often use taxes for two conflicting purposes: raising revenue
        (fiscal) and changing behavior (nonfiscal). These goals cannot be fully
        achieved simultaneously.
      </p>

      <FiscalConflictDemo />

      <CardGrid>
        <Card title="Maximum Revenue" variant="default">
          <p className="text-dark-300">
            If the goal is revenue, you want people to keep buying the taxed good.
            High consumption means high tax collections.
          </p>
        </Card>
        <Card title="Maximum Behavior Change" variant="default">
          <p className="text-dark-300">
            If the goal is to stop consumption, success means no one buys the good.
            But then tax revenue is zero.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: Three Classes of Tax Interventionism */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        3. Three Classes of Tax Interventionism
      </h2>

      <p className="text-dark-200 mb-4">
        Mises classifies taxes used as intervention tools into three categories,
        each with distinct economic effects.
      </p>

      <TaxClassesDemo />

      <Callout type="warning" title="Taxation as Disguised Control">
        Differential taxation achieves the same results as direct commands.
        A 100% tariff is equivalent to an import ban. High taxes on an industry
        are equivalent to restricting it. The method differs; the effect is the same.
      </Callout>

      {/* Section 4: The Power to Destroy */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        4. The Power to Destroy
      </h2>

      <p className="text-dark-200 mb-4">
        Chief Justice Marshall observed that "the power to tax involves the power
        to destroy." Above certain rates, taxation transforms from revenue collection
        into market destruction.
      </p>

      <SelfDefeatingTaxDemo />

      <p className="text-dark-200 mb-4">
        Mises observes that contemporary governments have embraced this destructive
        potential. Rather than seeking neutral or minimal taxation, they use tax
        policy deliberately to reshape the economy according to political goals.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Key Takeaways
      </h2>

      <div className="space-y-4">
        <Callout type="summary" title="1. No Tax is Truly Neutral">
          Every tax changes behavior and distorts market outcomes. The idea of
          taxation that doesn't affect the market is a theoretical fiction that
          cannot exist in reality.
        </Callout>

        <Callout type="summary" title="2. Fiscal and Nonfiscal Goals Conflict">
          A tax cannot simultaneously maximize revenue and maximize behavior
          change. If it fully achieves its nonfiscal goal, revenue falls to zero.
          Governments must choose which objective to sacrifice.
        </Callout>

        <Callout type="summary" title="3. Taxation is Intervention">
          Differential taxation produces the same effects as direct commands.
          High taxes on selected activities are equivalent to restrictions or
          prohibitions. The method differs but the result is identical.
        </Callout>

        <Callout type="summary" title="4. Excessive Taxation Destroys Markets">
          Above certain rates, taxes become self-defeating and destructive.
          They reduce the tax base, discourage production, and transform from
          revenue measures into weapons against the market economy.
        </Callout>
      </div>
    </LessonLayout>
  );
}
