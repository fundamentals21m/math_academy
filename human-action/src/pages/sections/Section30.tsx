import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// =============================================================================
// INTERACTIVE COMPONENTS
// =============================================================================

/**
 * Interactive demo showing price ceiling and floor effects
 */
function PriceControlDemo() {
  const [controlType, setControlType] = useState<'none' | 'ceiling' | 'floor'>('none');
  const [controlLevel, setControlLevel] = useState(50);

  const marketPrice = 60;
  const baseSupply = 100;
  const baseDemand = 100;

  const getMarketState = () => {
    if (controlType === 'none') {
      return { supply: baseSupply, demand: baseDemand, price: marketPrice, shortage: 0, surplus: 0 };
    }

    if (controlType === 'ceiling') {
      const effectivePrice = Math.min(controlLevel, marketPrice);
      // Lower price = higher demand, lower supply
      const demand = baseDemand + (marketPrice - effectivePrice) * 2;
      const supply = Math.max(20, baseSupply - (marketPrice - effectivePrice) * 1.5);
      const shortage = controlLevel < marketPrice ? demand - supply : 0;
      return { supply, demand, price: effectivePrice, shortage, surplus: 0 };
    }

    // Floor
    const effectivePrice = Math.max(controlLevel, marketPrice);
    // Higher price = lower demand, higher supply
    const demand = Math.max(20, baseDemand - (effectivePrice - marketPrice) * 1.5);
    const supply = baseSupply + (effectivePrice - marketPrice) * 2;
    const surplus = controlLevel > marketPrice ? supply - demand : 0;
    return { supply, demand, price: effectivePrice, shortage: 0, surplus };
  };

  const state = getMarketState();

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Price Controls: Ceilings and Floors</h4>

      <div className="grid grid-cols-3 gap-2 mb-6">
        <button
          onClick={() => setControlType('none')}
          className={`px-3 py-2 rounded ${
            controlType === 'none' ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Free Market
        </button>
        <button
          onClick={() => { setControlType('ceiling'); setControlLevel(45); }}
          className={`px-3 py-2 rounded ${
            controlType === 'ceiling' ? 'bg-red-600 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Price Ceiling
        </button>
        <button
          onClick={() => { setControlType('floor'); setControlLevel(75); }}
          className={`px-3 py-2 rounded ${
            controlType === 'floor' ? 'bg-orange-600 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Price Floor
        </button>
      </div>

      {controlType !== 'none' && (
        <div className="mb-6">
          <label className="text-dark-300 text-sm block mb-2">
            {controlType === 'ceiling' ? 'Maximum' : 'Minimum'} Price: ${controlLevel}
            <span className="text-dark-500 ml-2">(Market equilibrium: ${marketPrice})</span>
          </label>
          <input
            type="range"
            min="20"
            max="100"
            value={controlLevel}
            onChange={(e) => setControlLevel(Number(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">Supply</div>
          <div className="h-4 bg-dark-600 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: `${state.supply}%` }} />
          </div>
          <div className="text-right text-sm mt-1 text-dark-400">{Math.round(state.supply)} units</div>
        </div>

        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">Demand</div>
          <div className="h-4 bg-dark-600 rounded-full overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: `${Math.min(100, state.demand)}%` }} />
          </div>
          <div className="text-right text-sm mt-1 text-dark-400">{Math.round(state.demand)} units</div>
        </div>
      </div>

      {state.shortage > 0 && (
        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg mb-4">
          <div className="text-red-400 font-medium">Shortage: {Math.round(state.shortage)} units</div>
          <p className="text-dark-200 text-sm mt-1">
            Demand exceeds supply. Rationing, queues, or black markets emerge.
            The government made goods "affordable" but unavailable.
          </p>
        </div>
      )}

      {state.surplus > 0 && (
        <div className="bg-orange-900/30 border border-orange-700 p-4 rounded-lg mb-4">
          <div className="text-orange-400 font-medium">Surplus: {Math.round(state.surplus)} units</div>
          <p className="text-dark-200 text-sm mt-1">
            Supply exceeds demand. Unsold inventory accumulates. Government must
            buy surplus, destroy it, or allow prices to fall.
          </p>
        </div>
      )}

      {controlType === 'none' && (
        <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg mb-4">
          <div className="text-green-400 font-medium">Market Equilibrium</div>
          <p className="text-dark-200 text-sm mt-1">
            Supply equals demand. No shortages or surpluses. Price adjusts to
            clear the market automatically.
          </p>
        </div>
      )}

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Price controls produce
          results contrary to their purpose. Price ceilings meant to help buyers create
          shortages. Price floors meant to help sellers create surpluses.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing the intervention spiral
 */
function InterventionSpiralDemo() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Initial Problem',
      description: 'Government decides housing is too expensive',
      action: 'Imposes rent control (price ceiling)',
      consequence: 'None yet visible',
    },
    {
      title: 'Shortage Emerges',
      description: 'Landlords reduce supply, demand increases',
      action: 'Waiting lists, overcrowding, deterioration',
      consequence: 'Housing becomes scarce despite being "affordable"',
    },
    {
      title: 'Secondary Intervention',
      description: 'Government must address shortage',
      action: 'Mandates construction, subsidizes builders',
      consequence: 'Resources diverted from other sectors',
    },
    {
      title: 'New Problems',
      description: 'Subsidized construction raises costs elsewhere',
      action: 'Other prices rise, workers demand higher wages',
      consequence: 'Inflation in construction materials and labor',
    },
    {
      title: 'Expanding Controls',
      description: 'Government tries to control cascading effects',
      action: 'Price controls on materials, wage controls on workers',
      consequence: 'Shortages spread to new sectors',
    },
    {
      title: 'Comprehensive Control',
      description: 'Each intervention requires more interventions',
      action: 'Eventually: full central planning or abandonment',
      consequence: 'The original problem remains unsolved',
    },
  ];

  const current = steps[step];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Intervention Spiral</h4>

      <div className="flex gap-1 mb-6">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`flex-1 py-2 rounded text-xs ${
              step === i
                ? 'bg-red-600 text-white'
                : i < step
                  ? 'bg-red-900/50 text-red-400'
                  : 'bg-dark-700 text-dark-400'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-700 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-start mb-2">
          <h5 className="text-lg font-medium text-dark-100">{current.title}</h5>
          <span className="text-dark-500 text-sm">Step {step + 1} of {steps.length}</span>
        </div>
        <p className="text-dark-300 mb-3">{current.description}</p>

        <div className="space-y-2">
          <div className="p-2 bg-blue-900/30 border border-blue-700 rounded">
            <span className="text-blue-400 text-xs font-medium">Government Action:</span>
            <p className="text-dark-200 text-sm">{current.action}</p>
          </div>
          <div className="p-2 bg-red-900/30 border border-red-700 rounded">
            <span className="text-red-400 text-xs font-medium">Consequence:</span>
            <p className="text-dark-200 text-sm">{current.consequence}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-4 py-2 rounded bg-dark-700 text-dark-300 hover:bg-dark-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-500 disabled:opacity-50"
        >
          Next Step
        </button>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> To prevent resources from
          fleeing controlled sectors, government must expand controls across all goods and
          services—eventually creating full central planning.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing minimum wage effects
 */
function MinimumWageDemo() {
  const [minWage, setMinWage] = useState(15);
  const marketWage = 12;

  const isAboveMarket = minWage > marketWage;
  const wageDiff = minWage - marketWage;

  // Simple model: each $1 above market = 5% unemployment among affected workers
  const unemploymentRate = isAboveMarket ? Math.min(50, wageDiff * 5) : 0;
  const employed = 100 - unemploymentRate;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Minimum Wage and Unemployment</h4>

      <p className="text-dark-300 mb-4">
        Market equilibrium wage: ${marketWage}/hour (where all willing workers find jobs)
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Minimum Wage: ${minWage}/hour
        </label>
        <input
          type="range"
          min="8"
          max="25"
          value={minWage}
          onChange={(e) => setMinWage(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>Below market</span>
          <span>${marketWage} (market)</span>
          <span>Above market</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={`p-4 rounded-lg ${
          isAboveMarket ? 'bg-green-900/30 border border-green-700' : 'bg-dark-700'
        }`}>
          <div className="text-dark-400 text-sm">Employed Workers</div>
          <div className="text-2xl font-bold text-green-400">{employed}%</div>
          <div className="text-dark-500 text-xs">Earning ${minWage}/hr</div>
        </div>

        <div className={`p-4 rounded-lg ${
          unemploymentRate > 0 ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'
        }`}>
          <div className="text-dark-400 text-sm">Unemployed Workers</div>
          <div className={`text-2xl font-bold ${unemploymentRate > 0 ? 'text-red-400' : 'text-dark-400'}`}>
            {unemploymentRate}%
          </div>
          <div className="text-dark-500 text-xs">Earning $0/hr</div>
        </div>
      </div>

      {!isAboveMarket && (
        <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg mb-4">
          <div className="text-green-400 font-medium">No Effect</div>
          <p className="text-dark-200 text-sm">
            Minimum wage below market rate has no effect. All willing workers
            already earn more than the minimum.
          </p>
        </div>
      )}

      {isAboveMarket && (
        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg mb-4">
          <div className="text-red-400 font-medium">Institutional Unemployment Created</div>
          <p className="text-dark-200 text-sm">
            Workers priced out of the market cannot find jobs at the mandated wage.
            They would work for less, but the law forbids it. They earn nothing.
          </p>
        </div>
      )}

      <div className="bg-dark-700 p-4 rounded-lg mb-4">
        <div className="text-dark-400 text-sm mb-2">Who Bears the Cost?</div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-dark-300">Workers who keep jobs</span>
            <span className="text-green-400">Gain ${isAboveMarket ? wageDiff : 0}/hr</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-dark-300">Workers who lose jobs</span>
            <span className="text-red-400">Lose ${isAboveMarket ? marketWage : 0}/hr</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-dark-300">Marginal workers never hired</span>
            <span className="text-red-400">Never get a chance</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> In the unhampered market,
          "all those eager to earn wages get jobs." Institutional unemployment emerges only
          when "external pressure tries to fix wage rates at a higher point."
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing voluntary vs institutional unemployment
 */
function UnemploymentTypesDemo() {
  const [showType, setShowType] = useState<'voluntary' | 'institutional'>('voluntary');

  const types = {
    voluntary: {
      name: 'Voluntary (Catallactic) Unemployment',
      cause: 'Worker chooses not to work at current market wage',
      examples: [
        'Job searching for better opportunity',
        'Waiting for preferred position',
        'Choosing leisure over work at offered wage',
        'Retraining for new career',
      ],
      solution: 'Worker can find work immediately by accepting market wage',
      persistent: false,
    },
    institutional: {
      name: 'Institutional Unemployment',
      cause: 'External force prevents wage from reaching market level',
      examples: [
        'Minimum wage laws above market rate',
        'Union-enforced wages above market',
        'Government mandated benefits raising labor cost',
        'Occupational licensing excluding workers',
      ],
      solution: 'Cannot disappear while intervention remains in force',
      persistent: true,
    },
  };

  const current = types[showType];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Two Types of Unemployment</h4>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => setShowType('voluntary')}
          className={`px-4 py-3 rounded-lg ${
            showType === 'voluntary'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          <div className="font-medium">Voluntary</div>
          <div className="text-xs opacity-75">Natural in free markets</div>
        </button>
        <button
          onClick={() => setShowType('institutional')}
          className={`px-4 py-3 rounded-lg ${
            showType === 'institutional'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          <div className="font-medium">Institutional</div>
          <div className="text-xs opacity-75">Caused by intervention</div>
        </button>
      </div>

      <div className={`p-4 rounded-lg mb-4 ${
        showType === 'voluntary'
          ? 'bg-green-900/30 border border-green-700'
          : 'bg-red-900/30 border border-red-700'
      }`}>
        <h5 className={`font-medium mb-2 ${
          showType === 'voluntary' ? 'text-green-400' : 'text-red-400'
        }`}>
          {current.name}
        </h5>
        <p className="text-dark-200 mb-3">{current.cause}</p>

        <div className="text-dark-400 text-sm mb-1">Examples:</div>
        <ul className="space-y-1 mb-3">
          {current.examples.map((ex, i) => (
            <li key={i} className="text-dark-300 text-sm">• {ex}</li>
          ))}
        </ul>

        <div className={`p-2 rounded ${
          current.persistent ? 'bg-red-900/50' : 'bg-green-900/50'
        }`}>
          <span className={`text-sm font-medium ${
            current.persistent ? 'text-red-400' : 'text-green-400'
          }`}>
            {current.persistent ? 'Persistent' : 'Self-Correcting'}:
          </span>
          <span className="text-dark-200 text-sm ml-2">{current.solution}</span>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "Where there is neither
          government nor union interference with the labor market, there is only voluntary
          unemployment." Institutional unemployment is created by intervention.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      {/* Introduction */}
      <p className="text-lg text-dark-100 mb-6">
        Chapter XXX examines government attempts to fix prices at levels different
        from what the market would determine—price ceilings, price floors, and
        minimum wages. Mises demonstrates that such interference produces results
        contrary to its stated purposes.
      </p>

      <Callout type="concept" title="Central Theme">
        When government fixes prices above or below market equilibrium, it disrupts
        the balance between supply and demand. The resulting shortages or surpluses
        are worse than the original "problem" the intervention aimed to solve.
      </Callout>

      {/* Section 1: Government and Market Autonomy */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        1. Government and the Autonomy of the Market
      </h2>

      <p className="text-dark-200 mb-4">
        Market prices coordinate supply and demand automatically. Any deviation
        from equilibrium is self-correcting: shortages raise prices, attracting
        more supply; surpluses lower prices, attracting more demand.
      </p>

      <PriceControlDemo />

      <Callout type="key-point" title="The Self-Defeating Pattern">
        Price ceilings meant to help buyers create shortages—making goods unavailable
        at any price. Price floors meant to help sellers create surpluses—goods pile
        up unsold. The intervention makes conditions worse from the government's own
        perspective.
      </Callout>

      {/* Section 2: Market Reaction to Interference */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        2. The Market's Reaction to Interference
      </h2>

      <p className="text-dark-200 mb-4">
        When government controls prices in one sector, resources flee to uncontrolled
        sectors. To prevent this, government must expand controls—leading to an
        ever-widening spiral of intervention.
      </p>

      <InterventionSpiralDemo />

      <CardGrid>
        <Card title="Historical Example: Rome" variant="warning">
          <p className="text-dark-300">
            Maximum prices on grain combined with currency debasement caused the
            collapse of urban commerce. Society retreated to feudal self-sufficiency.
            "The marvelous civilization of antiquity perished."
          </p>
        </Card>
        <Card title="The Only Escape" variant="default">
          <p className="text-dark-300">
            The intervention spiral ends in one of two ways: comprehensive central
            planning (socialism) or abandonment of intervention (return to markets).
            There is no stable middle ground.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: Minimum Wage Rates */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        3. Minimum Wage Rates
      </h2>

      <p className="text-dark-200 mb-4">
        The essence of interventionist labor policy is to raise wages above market
        levels—either by government decree or by union action backed by force.
        The inevitable result is unemployment.
      </p>

      <MinimumWageDemo />

      <UnemploymentTypesDemo />

      <Callout type="warning" title="Who Loses Most">
        Minimum wages harm most those they intend to help—the least skilled, least
        experienced workers whose productivity falls below the mandated wage. They
        cannot legally work and gain skills. They are condemned to unemployment.
      </Callout>

      {/* Section 4: The Ricardo Effect Fallacy */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        4. Wages and Technology
      </h2>

      <p className="text-dark-200 mb-4">
        Some claim that forcing wages higher accelerates beneficial technological
        progress. Mises rejects this reasoning.
      </p>

      <CardGrid>
        <Card title="The Fallacy" variant="warning">
          <p className="text-dark-300">
            "Higher wages force employers to adopt labor-saving technology,
            benefiting everyone in the long run."
          </p>
        </Card>
        <Card title="The Reality" variant="success">
          <p className="text-dark-300">
            "A tendency toward higher wage rates is not the cause, but the effect,
            of technological improvement." Capital investment drives mechanization
            and productivity growth.
          </p>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Key Takeaways
      </h2>

      <div className="space-y-4">
        <Callout type="summary" title="1. Price Controls Backfire">
          Price ceilings create shortages; price floors create surpluses. The
          intervention produces results contrary to its stated purpose, making
          conditions worse, not better.
        </Callout>

        <Callout type="summary" title="2. Intervention Spirals">
          Resources flee controlled sectors. To prevent this, government must
          expand controls to more and more of the economy—eventually reaching
          full central planning or abandoning intervention.
        </Callout>

        <Callout type="summary" title="3. Minimum Wages Cause Unemployment">
          When wages are forced above market levels, the supply of labor exceeds
          demand. The result is institutional unemployment that cannot disappear
          while the intervention remains.
        </Callout>

        <Callout type="summary" title="4. Technology Follows Capital, Not Wages">
          Higher productivity comes from capital investment, not from artificially
          high wages. Wage mandates destroy jobs without creating the capital
          formation that actually raises living standards.
        </Callout>
      </div>
    </LessonLayout>
  );
}
