import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// =============================================================================
// INTERACTIVE COMPONENTS
// =============================================================================

/**
 * Interactive demo showing differential rent across land parcels
 */
function DifferentialRentDemo() {
  const [parcels, setParcels] = useState([
    { id: 1, name: 'Prime Farmland', productivity: 100, cultivated: true },
    { id: 2, name: 'Good Farmland', productivity: 75, cultivated: true },
    { id: 3, name: 'Average Land', productivity: 50, cultivated: true },
    { id: 4, name: 'Marginal Land', productivity: 30, cultivated: true },
    { id: 5, name: 'Submarginal Land', productivity: 15, cultivated: false },
  ]);
  const [marketPrice, setMarketPrice] = useState(30);

  const toggleCultivation = (id: number) => {
    setParcels(parcels.map(p =>
      p.id === id ? { ...p, cultivated: !p.cultivated } : p
    ));
  };

  const calculateRent = (productivity: number) => {
    return Math.max(0, productivity - marketPrice);
  };

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Differential Rent Demonstration</h4>

      <div className="mb-4">
        <label className="text-dark-300 text-sm block mb-2">
          Market Price (Cost of Marginal Production): {marketPrice}
        </label>
        <input
          type="range"
          min="10"
          max="60"
          value={marketPrice}
          onChange={(e) => setMarketPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-3">
        {parcels.map((parcel) => {
          const rent = calculateRent(parcel.productivity);
          const isMarginal = rent === 0 && parcel.cultivated;
          const isSubmarginal = parcel.productivity < marketPrice;

          return (
            <div
              key={parcel.id}
              className={`p-4 rounded-lg border ${
                parcel.cultivated
                  ? isSubmarginal
                    ? 'bg-red-900/30 border-red-700'
                    : isMarginal
                      ? 'bg-yellow-900/30 border-yellow-700'
                      : 'bg-green-900/30 border-green-700'
                  : 'bg-dark-700 border-dark-600'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-dark-100 font-medium">{parcel.name}</span>
                  <span className="text-dark-400 text-sm ml-2">
                    (Productivity: {parcel.productivity})
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm text-dark-400">
                      {parcel.cultivated ? (
                        isSubmarginal ? (
                          <span className="text-red-400">Loss: {rent}</span>
                        ) : (
                          <span className="text-green-400">Rent: {rent}</span>
                        )
                      ) : (
                        <span className="text-dark-500">Uncultivated</span>
                      )}
                    </div>
                    {isMarginal && (
                      <div className="text-xs text-yellow-400">Marginal Land</div>
                    )}
                    {isSubmarginal && !parcel.cultivated && (
                      <div className="text-xs text-dark-500">Submarginal</div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleCultivation(parcel.id)}
                    className={`px-3 py-1 rounded text-sm ${
                      parcel.cultivated
                        ? 'bg-dark-600 text-dark-300 hover:bg-dark-500'
                        : 'bg-green-700 text-white hover:bg-green-600'
                    }`}
                  >
                    {parcel.cultivated ? 'Abandon' : 'Cultivate'}
                  </button>
                </div>
              </div>

              {/* Visual productivity bar */}
              <div className="mt-2 h-2 bg-dark-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    parcel.cultivated
                      ? isSubmarginal ? 'bg-red-500' : 'bg-green-500'
                      : 'bg-dark-500'
                  }`}
                  style={{ width: `${parcel.productivity}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Rent is not unique to land.
          Any factor of production with differential productivity generates rent. The marginal
          land (where rent = 0) sets the baseline, while more productive factors earn differential rent.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing how land prices reflect capitalized future returns
 */
function LandPricingDemo() {
  const [annualRent, setAnnualRent] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [expectedGrowth, setExpectedGrowth] = useState(2);
  const [yearsHeld, setYearsHeld] = useState(10);

  const calculateLandPrice = () => {
    // Simplified Gordon growth model for perpetuity
    const effectiveRate = (interestRate - expectedGrowth) / 100;
    if (effectiveRate <= 0) return Infinity;
    return annualRent / effectiveRate;
  };

  const calculateTotalReturn = () => {
    let totalRent = 0;
    let currentRent = annualRent;
    for (let i = 0; i < yearsHeld; i++) {
      totalRent += currentRent;
      currentRent *= (1 + expectedGrowth / 100);
    }
    return totalRent;
  };

  const landPrice = calculateLandPrice();
  const totalReturn = calculateTotalReturn();

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Land Valuation Calculator</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Annual Rent: ${annualRent.toLocaleString()}
          </label>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={annualRent}
            onChange={(e) => setAnnualRent(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Interest Rate: {interestRate}%
          </label>
          <input
            type="range"
            min="1"
            max="15"
            step="0.5"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Expected Annual Growth: {expectedGrowth}%
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={expectedGrowth}
            onChange={(e) => setExpectedGrowth(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Years to Calculate: {yearsHeld}
          </label>
          <input
            type="range"
            min="1"
            max="30"
            value={yearsHeld}
            onChange={(e) => setYearsHeld(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-dark-700 p-4 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Capitalized Land Value</div>
          <div className="text-2xl font-bold text-green-400">
            {landPrice === Infinity ? '∞' : `$${Math.round(landPrice).toLocaleString()}`}
          </div>
          <div className="text-dark-500 text-xs mt-1">
            Rent ÷ (Interest - Growth)
          </div>
        </div>

        <div className="bg-dark-700 p-4 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Total Rent ({yearsHeld} years)</div>
          <div className="text-2xl font-bold text-blue-400">
            ${Math.round(totalReturn).toLocaleString()}
          </div>
          <div className="text-dark-500 text-xs mt-1">
            With {expectedGrowth}% annual growth
          </div>
        </div>
      </div>

      {expectedGrowth >= interestRate && (
        <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-700 rounded-lg">
          <p className="text-yellow-400 text-sm">
            When expected growth exceeds the interest rate, the theoretical land value
            approaches infinity. In practice, this signals speculative bubble conditions.
          </p>
        </div>
      )}

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Land prices are not arbitrary
          but reflect the capitalized value of expected future net returns, discounted at the
          prevailing interest rate. Changes in expected conditions immediately affect present values.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing how ownership security affects land use
 */
function TimeFactorDemo() {
  const [ownershipSecurity, setOwnershipSecurity] = useState(100);
  const [timeHorizon, setTimeHorizon] = useState(20);

  const scenarios = [
    { name: 'Secure Property Rights', security: 100 },
    { name: 'Some Uncertainty', security: 70 },
    { name: 'High Risk', security: 40 },
    { name: 'Imminent Expropriation', security: 10 },
  ];

  const calculateBehavior = (security: number) => {
    if (security >= 80) {
      return {
        investment: 'High',
        sustainability: 'Sustainable',
        practices: 'Long-term improvements, conservation',
        color: 'green',
      };
    } else if (security >= 50) {
      return {
        investment: 'Moderate',
        sustainability: 'Mixed',
        practices: 'Some improvements, shorter planning',
        color: 'yellow',
      };
    } else if (security >= 20) {
      return {
        investment: 'Low',
        sustainability: 'Exploitative',
        practices: 'Extract value quickly, minimal upkeep',
        color: 'orange',
      };
    } else {
      return {
        investment: 'None',
        sustainability: 'Destructive',
        practices: 'Strip mining, deforestation, soil depletion',
        color: 'red',
      };
    }
  };

  const behavior = calculateBehavior(ownershipSecurity);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Property Rights & Land Use</h4>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Ownership Security: {ownershipSecurity}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={ownershipSecurity}
          onChange={(e) => setOwnershipSecurity(Number(e.target.value))}
          className="w-full"
        />

        <div className="flex justify-between mt-2">
          {scenarios.map((s) => (
            <button
              key={s.name}
              onClick={() => setOwnershipSecurity(s.security)}
              className={`text-xs px-2 py-1 rounded ${
                Math.abs(ownershipSecurity - s.security) < 10
                  ? 'bg-blue-600 text-white'
                  : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className={`bg-dark-700 p-4 rounded-lg border-l-4 border-${behavior.color}-500`}>
          <div className="text-dark-400 text-sm">Investment Level</div>
          <div className={`text-lg font-bold text-${behavior.color}-400`}>
            {behavior.investment}
          </div>
        </div>

        <div className={`bg-dark-700 p-4 rounded-lg border-l-4 border-${behavior.color}-500`}>
          <div className="text-dark-400 text-sm">Land Use Pattern</div>
          <div className={`text-lg font-bold text-${behavior.color}-400`}>
            {behavior.sustainability}
          </div>
        </div>

        <div className={`bg-dark-700 p-4 rounded-lg border-l-4 border-${behavior.color}-500`}>
          <div className="text-dark-400 text-sm">Typical Practices</div>
          <div className="text-sm text-dark-300 mt-1">
            {behavior.practices}
          </div>
        </div>
      </div>

      {/* Visual timeline */}
      <div className="bg-dark-700 p-4 rounded-lg">
        <div className="text-dark-400 text-sm mb-2">Planning Horizon Visualization</div>
        <div className="h-8 bg-dark-600 rounded-full overflow-hidden relative">
          <div
            className={`h-full bg-gradient-to-r from-${behavior.color}-600 to-${behavior.color}-400`}
            style={{ width: `${ownershipSecurity}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-sm text-white font-medium">
            {Math.round(ownershipSecurity * timeHorizon / 100)} year effective horizon
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> When people lack secure
          ownership, they rationally exploit resources unsustainably. The "tragedy of the commons"
          and environmental destruction often result from uncertain property rights, not from
          markets themselves.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing the myth of the soil vs economic reality
 */
function AgrarianMythDemo() {
  const [showReality, setShowReality] = useState(false);

  const myths = [
    {
      myth: 'Farming is a noble calling superior to commerce',
      reality: 'Farming is an economic activity like any other, subject to the same laws of value',
    },
    {
      myth: 'The soil has mystical, life-giving properties',
      reality: 'Land is a factor of production valued for its productivity, not spiritual qualities',
    },
    {
      myth: 'Rural life preserves virtue that cities corrupt',
      reality: 'Rural populations have always viewed land pragmatically as an input to production',
    },
    {
      myth: 'Agriculture should be protected from market forces',
      reality: 'Protection creates submarginal farming that wastes resources and requires subsidies',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Myth of the Soil</h4>

      <div className="mb-4">
        <button
          onClick={() => setShowReality(!showReality)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            showReality
              ? 'bg-green-600 text-white'
              : 'bg-blue-600 text-white'
          }`}
        >
          {showReality ? 'Show Romantic Myths' : 'Show Economic Reality'}
        </button>
      </div>

      <div className="space-y-4">
        {myths.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg transition-all duration-300 ${
              showReality
                ? 'bg-green-900/30 border border-green-700'
                : 'bg-purple-900/30 border border-purple-700'
            }`}
          >
            <div className={`text-sm font-medium mb-1 ${
              showReality ? 'text-green-400' : 'text-purple-400'
            }`}>
              {showReality ? 'Economic Reality' : 'Romantic Myth'}
            </div>
            <p className="text-dark-100">
              {showReality ? item.reality : item.myth}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Mises argues that romantic
          agrarianism was invented by urban intellectuals, not farmers. Those who actually work
          the land have always treated it as a productive asset to be managed economically.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      {/* Introduction */}
      <p className="text-lg text-dark-100 mb-6">
        Chapter XXII examines how economics treats land and other nonhuman original factors
        of production. Mises critiques the classical economists' special treatment of rent
        and demonstrates that land prices follow the same principles as all other factor prices.
      </p>

      <Callout type="concept" title="Central Thesis">
        Differential rent is not unique to land—it applies to all factors of production
        with varying productivity. The modern subjective theory of value provides a unified
        framework for understanding all factor prices, eliminating the need for separate
        rent theory.
      </Callout>

      {/* Section 1: The Theory of Rent */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        1. General Observations on Rent Theory
      </h2>

      <p className="text-dark-200 mb-4">
        Classical economists, particularly David Ricardo, developed a special theory of
        rent to explain why different parcels of land command different prices. Mises
        argues this was an early, imperfect attempt to explain what marginal utility
        theory now handles more elegantly.
      </p>

      <CardGrid>
        <Card title="Classical View" variant="default">
          <p className="text-dark-300">
            Rent arises from the differential fertility of land. The marginal (least
            fertile) land sets the price, while more fertile land earns "rent" above this.
          </p>
        </Card>
        <Card title="Modern View" variant="default">
          <p className="text-dark-300">
            All factors with differential productivity earn rent-like returns. Superior
            workers, better machines, and prime locations all generate differential returns.
          </p>
        </Card>
      </CardGrid>

      <DifferentialRentDemo />

      <Callout type="key-point" title="Marginal and Submarginal Land">
        The marginal land—the least productive land under cultivation—yields no rent.
        Submarginal land remains uncultivated but retains speculative value based on
        anticipated future utility as conditions change.
      </Callout>

      {/* Section 2: Time Factor in Land Utilization */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        2. The Time Factor in Land Utilization
      </h2>

      <p className="text-dark-200 mb-4">
        Land use inherently involves choices between present extraction and future
        productivity. The security of property rights fundamentally shapes these decisions.
      </p>

      <TimeFactorDemo />

      <p className="text-dark-200 mb-4">
        Mises emphasizes that environmental destruction often results not from private
        ownership but from its absence. When users fear expropriation or lack secure
        title, they rationally exploit resources without regard for long-term consequences.
      </p>

      <Callout type="warning" title="Institutional Conditions Matter">
        The same land can be sustainably managed or rapidly depleted depending on the
        institutional framework. Secure property rights align individual incentives with
        long-term stewardship.
      </Callout>

      {/* Section 3: The Myth of the Soil */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        3. The Myth of the Soil
      </h2>

      <p className="text-dark-200 mb-4">
        Mises critiques romantic agrarianism—the view that agriculture is morally superior
        to other economic activities and that the soil has mystical properties beyond its
        productive capacity.
      </p>

      <AgrarianMythDemo />

      <p className="text-dark-200 mb-4">
        This romantic ideology has been used to justify agricultural subsidies, trade
        protection, and policies that keep submarginal farms in operation at the expense
        of consumers and taxpayers.
      </p>

      {/* Section 4: The Prices of Land */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        4. The Prices of Land
      </h2>

      <p className="text-dark-200 mb-4">
        Land prices are not arbitrary but reflect the capitalized value of expected
        future net returns, discounted at the prevailing interest rate. Any factor
        affecting expected returns immediately influences present land values.
      </p>

      <LandPricingDemo />

      <CardGrid>
        <Card title="Factors Raising Land Prices" variant="success">
          <ul className="text-dark-300 space-y-1">
            <li>• Higher expected rents</li>
            <li>• Lower interest rates</li>
            <li>• Expected growth in demand</li>
            <li>• Secure property rights</li>
            <li>• Infrastructure improvements</li>
          </ul>
        </Card>
        <Card title="Factors Lowering Land Prices" variant="warning">
          <ul className="text-dark-300 space-y-1">
            <li>• Expected rent declines</li>
            <li>• Higher interest rates</li>
            <li>• Political instability</li>
            <li>• Threat of expropriation</li>
            <li>• Anticipated taxation</li>
          </ul>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Key Takeaways
      </h2>

      <div className="space-y-4">
        <Callout type="summary" title="1. Unified Theory of Factor Prices">
          Land is not economically special. The same principles that determine wages and
          capital returns also determine land prices and rents. Differential rent applies
          to all factors, not just land.
        </Callout>

        <Callout type="summary" title="2. Property Rights Shape Land Use">
          Secure ownership leads to sustainable, long-term land management. Uncertain
          property rights lead to exploitation and environmental degradation, regardless
          of whether the land is nominally private or public.
        </Callout>

        <Callout type="summary" title="3. Land Prices Reflect Expectations">
          Present land values capitalize all expected future returns. Changes in interest
          rates, expected rents, and political conditions immediately affect land prices
          through rational expectations.
        </Callout>

        <Callout type="summary" title="4. Agrarian Romanticism is Economically Harmful">
          Policies based on the "myth of the soil" waste resources by keeping submarginal
          land in production and diverting resources from more productive uses.
        </Callout>
      </div>
    </LessonLayout>
  );
}
