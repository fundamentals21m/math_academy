import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// =============================================================================
// INTERACTIVE COMPONENTS
// =============================================================================

/**
 * Interactive demo showing how restrictions divert production
 */
function RestrictionNatureDemo() {
  const [restriction, setRestriction] = useState<'none' | 'tariff' | 'license' | 'quota'>('none');

  const scenarios = {
    none: {
      title: 'Free Market',
      production: [
        { sector: 'Efficient Domestic', output: 40 },
        { sector: 'Imports', output: 35 },
        { sector: 'Marginal Domestic', output: 0 },
      ],
      totalOutput: 75,
      consumerCost: 100,
      description: 'Resources flow to most productive uses',
    },
    tariff: {
      title: 'Import Tariff',
      production: [
        { sector: 'Efficient Domestic', output: 45 },
        { sector: 'Imports', output: 15 },
        { sector: 'Marginal Domestic', output: 10 },
      ],
      totalOutput: 70,
      consumerCost: 120,
      description: 'Imports replaced by less efficient domestic production',
    },
    license: {
      title: 'Licensing Requirement',
      production: [
        { sector: 'Licensed Producers', output: 50 },
        { sector: 'Would-be Competitors', output: 0 },
        { sector: 'Consumers\' DIY', output: 5 },
      ],
      totalOutput: 55,
      consumerCost: 140,
      description: 'Competition excluded, prices rise, output falls',
    },
    quota: {
      title: 'Production Quota',
      production: [
        { sector: 'Quota Holders', output: 40 },
        { sector: 'Restricted Capacity', output: 0 },
        { sector: 'Black Market', output: 8 },
      ],
      totalOutput: 48,
      consumerCost: 160,
      description: 'Direct limit on output regardless of demand',
    },
  };

  const current = scenarios[restriction];
  const lostOutput = scenarios.none.totalOutput - current.totalOutput;
  const extraCost = current.consumerCost - scenarios.none.consumerCost;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Nature of Restriction</h4>

      <div className="grid grid-cols-4 gap-2 mb-6">
        {(Object.keys(scenarios) as Array<keyof typeof scenarios>).map((key) => (
          <button
            key={key}
            onClick={() => setRestriction(key)}
            className={`px-3 py-2 rounded text-sm ${
              restriction === key
                ? key === 'none' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {scenarios[key].title}
          </button>
        ))}
      </div>

      <div className="bg-dark-700 p-4 rounded-lg mb-4">
        <div className="text-dark-400 text-sm mb-2">Production Distribution</div>
        <div className="space-y-2">
          {current.production.map((p) => (
            <div key={p.sector} className="flex items-center gap-3">
              <span className="text-dark-300 text-sm w-40">{p.sector}</span>
              <div className="flex-1 h-4 bg-dark-600 rounded-full overflow-hidden">
                <div
                  className={`h-full ${p.output > 0 ? 'bg-blue-500' : 'bg-dark-500'}`}
                  style={{ width: `${(p.output / 60) * 100}%` }}
                />
              </div>
              <span className="text-dark-400 text-sm w-12 text-right">{p.output}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className={`p-4 rounded-lg ${
          restriction === 'none' ? 'bg-green-900/30 border border-green-700' : 'bg-dark-700'
        }`}>
          <div className="text-dark-400 text-sm">Total Output</div>
          <div className={`text-xl font-bold ${restriction === 'none' ? 'text-green-400' : 'text-dark-100'}`}>
            {current.totalOutput} units
          </div>
        </div>

        <div className={`p-4 rounded-lg ${
          lostOutput > 0 ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'
        }`}>
          <div className="text-dark-400 text-sm">Lost Production</div>
          <div className={`text-xl font-bold ${lostOutput > 0 ? 'text-red-400' : 'text-dark-100'}`}>
            {lostOutput} units
          </div>
        </div>

        <div className={`p-4 rounded-lg ${
          extraCost > 0 ? 'bg-yellow-900/30 border border-yellow-700' : 'bg-dark-700'
        }`}>
          <div className="text-dark-400 text-sm">Consumer Cost Index</div>
          <div className={`text-xl font-bold ${extraCost > 0 ? 'text-yellow-400' : 'text-dark-100'}`}>
            {current.consumerCost}
          </div>
        </div>
      </div>

      <div className="bg-dark-700 p-3 rounded-lg">
        <p className="text-dark-300 text-sm">{current.description}</p>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Restriction "makes people
          poorer and less satisfied." It prevents people from using their resources where
          they would earn the highest returns and satisfy needs most fully.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing who benefits from restrictions
 */
function PrivilegeDemo() {
  const [showDistribution, setShowDistribution] = useState(false);

  const groups = [
    {
      name: 'Protected Producers',
      count: 1000,
      gainPerPerson: 5000,
      totalGain: 5000000,
      color: 'green',
    },
    {
      name: 'Excluded Competitors',
      count: 500,
      gainPerPerson: -8000,
      totalGain: -4000000,
      color: 'red',
    },
    {
      name: 'Consumers',
      count: 100000,
      gainPerPerson: -50,
      totalGain: -5000000,
      color: 'yellow',
    },
    {
      name: 'Taxpayers (enforcement)',
      count: 50000,
      gainPerPerson: -20,
      totalGain: -1000000,
      color: 'orange',
    },
  ];

  const totalSocietalEffect = groups.reduce((sum, g) => sum + g.totalGain, 0);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Restriction as Privilege</h4>

      <p className="text-dark-300 mb-4">
        Every restriction benefits some at the expense of others. The beneficiaries
        are concentrated and organized; the losers are dispersed and unaware.
      </p>

      <button
        onClick={() => setShowDistribution(!showDistribution)}
        className={`px-4 py-2 rounded-lg font-medium mb-4 ${
          showDistribution ? 'bg-blue-600 text-white' : 'bg-dark-600 text-dark-300'
        }`}
      >
        {showDistribution ? 'Hide Details' : 'Show Who Wins and Loses'}
      </button>

      {showDistribution && (
        <div className="space-y-3 mb-4">
          {groups.map((g) => (
            <div key={g.name} className={`p-4 rounded-lg bg-${g.color}-900/30 border border-${g.color}-700`}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-dark-100 font-medium">{g.name}</span>
                <span className="text-dark-400 text-sm">{g.count.toLocaleString()} people</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`font-bold ${g.gainPerPerson > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {g.gainPerPerson > 0 ? '+' : ''}{g.gainPerPerson.toLocaleString()}/person
                </span>
                <span className={`text-sm ${g.totalGain > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  Total: {g.totalGain > 0 ? '+' : ''}{(g.totalGain / 1000000).toFixed(1)}M
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={`p-4 rounded-lg ${
        totalSocietalEffect < 0 ? 'bg-red-900/30 border border-red-700' : 'bg-green-900/30 border border-green-700'
      }`}>
        <div className="flex justify-between items-center">
          <span className="text-dark-100 font-medium">Net Societal Effect</span>
          <span className={`text-xl font-bold ${totalSocietalEffect < 0 ? 'text-red-400' : 'text-green-400'}`}>
            {totalSocietalEffect > 0 ? '+' : ''}{(totalSocietalEffect / 1000000).toFixed(1)}M
          </span>
        </div>
        <p className="text-dark-300 text-sm mt-2">
          The concentrated gains to the few are always less than the dispersed losses to the many.
        </p>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "Restrictive action is
          always advantageous for the privileged group and disadvantageous for those whom
          it excludes." Those seeking restrictions want to be privileged at others' expense.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing the subsidy illusion
 */
function SubsidyIllusionDemo() {
  const [subsidyAmount, setSubsidyAmount] = useState(100);

  const favored = {
    name: 'Subsidized Industry',
    directBenefit: subsidyAmount,
    newJobs: Math.round(subsidyAmount / 10),
  };

  const unfavored = {
    name: 'Rest of Economy',
    taxBurden: subsidyAmount * 1.1, // Admin costs
    lostJobs: Math.round(subsidyAmount / 8), // More productive, fewer needed per dollar
  };

  const netEffect = favored.newJobs - unfavored.lostJobs;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Subsidy Illusion</h4>

      <p className="text-dark-300 mb-4">
        People praise government for "encouraging" production. But every subsidy
        withdraws resources from other sectors. Government cannot create; it can
        only redirect.
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Subsidy Amount: ${subsidyAmount}M
        </label>
        <input
          type="range"
          min="10"
          max="500"
          step="10"
          value={subsidyAmount}
          onChange={(e) => setSubsidyAmount(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg">
          <h5 className="text-green-400 font-medium mb-2">What's Visible</h5>
          <div className="text-dark-400 text-sm">{favored.name}</div>
          <ul className="text-dark-200 text-sm mt-2 space-y-1">
            <li>• Receives ${favored.directBenefit}M</li>
            <li>• Creates {favored.newJobs.toLocaleString()} jobs</li>
            <li>• Politicians take credit</li>
          </ul>
        </div>

        <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
          <h5 className="text-red-400 font-medium mb-2">What's Hidden</h5>
          <div className="text-dark-400 text-sm">{unfavored.name}</div>
          <ul className="text-dark-200 text-sm mt-2 space-y-1">
            <li>• Pays ${unfavored.taxBurden.toFixed(0)}M in taxes</li>
            <li>• Loses {unfavored.lostJobs.toLocaleString()} jobs</li>
            <li>• No one notices or connects</li>
          </ul>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${
        netEffect < 0 ? 'bg-red-900/30 border border-red-700' : 'bg-yellow-900/30 border border-yellow-700'
      }`}>
        <div className="flex justify-between items-center">
          <span className="text-dark-100 font-medium">Net Job Effect</span>
          <span className={`text-xl font-bold ${netEffect < 0 ? 'text-red-400' : 'text-yellow-400'}`}>
            {netEffect > 0 ? '+' : ''}{netEffect.toLocaleString()} jobs
          </span>
        </div>
        <p className="text-dark-300 text-sm mt-2">
          Resources redirected from more productive to less productive uses.
        </p>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "Government does not have
          the power to encourage one branch of production except by curtailing other branches."
          Citizens forgo valued satisfactions to obtain lesser ones.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing why restriction can't form an economic system
 */
function SystemDemo() {
  const [scenario, setScenario] = useState<'market' | 'socialism' | 'restriction'>('market');

  const systems = {
    market: {
      name: 'Market Economy',
      principle: 'Consumer preferences direct production through prices',
      complete: true,
      produces: true,
      description: 'A complete system that generates and allocates output',
    },
    socialism: {
      name: 'Socialism',
      principle: 'Central authority directs all production',
      complete: true,
      produces: true,
      description: 'A complete system (though inefficient) that generates and allocates output',
    },
    restriction: {
      name: 'Pure Restriction',
      principle: 'Only prohibitions—no positive direction',
      complete: false,
      produces: false,
      description: 'Cannot generate output—can only reduce what others produce',
    },
  };

  const current = systems[scenario];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Restriction as an Economic System?</h4>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {(Object.keys(systems) as Array<keyof typeof systems>).map((key) => (
          <button
            key={key}
            onClick={() => setScenario(key)}
            className={`px-3 py-2 rounded text-sm ${
              scenario === key
                ? key === 'restriction' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {systems[key].name}
          </button>
        ))}
      </div>

      <div className="bg-dark-700 p-4 rounded-lg mb-4">
        <div className="text-dark-400 text-sm mb-1">Operating Principle</div>
        <p className="text-dark-100">{current.principle}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={`p-4 rounded-lg ${
          current.complete ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'
        }`}>
          <div className="text-dark-400 text-sm">Complete System?</div>
          <div className={`font-bold ${current.complete ? 'text-green-400' : 'text-red-400'}`}>
            {current.complete ? 'Yes' : 'No'}
          </div>
        </div>

        <div className={`p-4 rounded-lg ${
          current.produces ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'
        }`}>
          <div className="text-dark-400 text-sm">Produces Output?</div>
          <div className={`font-bold ${current.produces ? 'text-green-400' : 'text-red-400'}`}>
            {current.produces ? 'Yes' : 'No'}
          </div>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${
        scenario === 'restriction' ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'
      }`}>
        <p className="text-dark-200">{current.description}</p>
      </div>

      {scenario === 'restriction' && (
        <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg">
          <p className="text-dark-200 text-sm">
            <strong className="text-yellow-400">The Categorical Error:</strong> Restrictions
            belong to the sphere of consumption, not production. They can only be supplements
            to a productive system—they cannot be the system itself.
          </p>
        </div>
      )}

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "One cannot construct a
          system of economic action out of restrictive measures alone." Restriction curtails
          output; it cannot generate it. Production creates wealth; restriction only
          reduces it.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      {/* Introduction */}
      <p className="text-lg text-dark-100 mb-6">
        Chapter XXIX examines government restrictions on production—prohibitions,
        quotas, licensing requirements, and other measures that prevent people from
        using their resources as they see fit.
      </p>

      <Callout type="concept" title="Central Theme">
        Restriction always makes people poorer by preventing resources from flowing
        to their most productive uses. While restrictions benefit privileged groups,
        they cannot form the basis of an economic system—they can only reduce what
        market production creates.
      </Callout>

      {/* Section 1: The Nature of Restriction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        1. The Nature of Restriction
      </h2>

      <p className="text-dark-200 mb-4">
        Restriction means government "forbids or makes more difficult or more
        expensive the production of definite articles." The distinguishing feature
        is that the diversion of production is precisely what the authority intends.
      </p>

      <RestrictionNatureDemo />

      <Callout type="key-point" title="The Fundamental Effect">
        Restriction prevents people from using their knowledge, abilities, labor,
        and resources where they would earn the highest returns. This makes people
        poorer and less satisfied—always.
      </Callout>

      {/* Section 2: The Price of Restriction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        2. The Price of Restriction
      </h2>

      <p className="text-dark-200 mb-4">
        Every restriction creates winners and losers. The winners are concentrated
        and organized; the losers are dispersed and often unaware of the connection
        between policy and their reduced welfare.
      </p>

      <PrivilegeDemo />

      <CardGrid>
        <Card title="Tariffs: The Classic Case" variant="warning">
          <p className="text-dark-300">
            Tariffs "merely redirect production to less efficient locations without
            increasing total output." They protect domestic producers at the cost
            of higher prices for all consumers.
          </p>
        </Card>
        <Card title="Licensing: Excluding Competition" variant="warning">
          <p className="text-dark-300">
            Licensing requirements prevent potential competitors from entering.
            Incumbents profit from reduced competition while consumers pay higher
            prices for worse service.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: The Subsidy Illusion */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        3. The Encouragement Illusion
      </h2>

      <p className="text-dark-200 mb-4">
        People praise government for "encouraging" certain industries. But government
        cannot create resources—it can only redirect them. Every subsidy to one sector
        means reduced resources for others.
      </p>

      <SubsidyIllusionDemo />

      <Callout type="warning" title="The Unseen Effect">
        The beneficiaries of subsidies are visible—the factories, the jobs, the ribbon
        cuttings. The victims are invisible—the businesses that never started, the jobs
        that never existed, the products never invented because resources went elsewhere.
      </Callout>

      {/* Section 4: Restriction Cannot Form a System */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        4. Restriction as an Economic System
      </h2>

      <p className="text-dark-200 mb-4">
        Can an economy be organized entirely around restrictions? Mises argues no—
        restrictions belong to consumption, not production. They can only reduce
        output, never create it.
      </p>

      <SystemDemo />

      <p className="text-dark-200 mb-4">
        Capitalism and socialism are both systems of production—they differ in how
        production is organized, but both generate output. Restriction is different:
        it can only limit what productive systems create.
      </p>

      {/* Section 5: What Really Raises Living Standards */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        5. What Produces Wealth
      </h2>

      <p className="text-dark-200 mb-4">
        Mises emphasizes that living standards rise through capital accumulation
        and increased productivity—not through government restrictions or mandates.
      </p>

      <CardGrid>
        <Card title="The Real Source of Progress" variant="success">
          <p className="text-dark-300">
            "That in the capitalist countries the average wage earner consumes more
            goods and enjoys more leisure than his ancestors is not an achievement
            of governments and labor unions. It is the outcome of the fact that
            profit-seeking business has accumulated and invested more capital."
          </p>
        </Card>
        <Card title="The Labor Hours Fallacy" variant="default">
          <p className="text-dark-300">
            Mandating shorter work hours doesn't increase prosperity—it reduces
            output. Higher living standards come from higher productivity per hour,
            not from working fewer hours at the same productivity.
          </p>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Key Takeaways
      </h2>

      <div className="space-y-4">
        <Callout type="summary" title="1. Restriction Always Impoverishes">
          By preventing resources from flowing to their most productive uses,
          restrictions make people poorer and less satisfied. This is their
          necessary and unavoidable effect.
        </Callout>

        <Callout type="summary" title="2. Restrictions Create Privilege">
          Every restriction benefits a concentrated group at the expense of the
          dispersed many. Those seeking restrictions want to be privileged at
          others' expense.
        </Callout>

        <Callout type="summary" title="3. Government Cannot Encourage Without Curtailing">
          Every subsidy or "encouragement" to one sector withdraws resources
          from others. Government cannot create resources; it can only redirect
          them from more to less productive uses.
        </Callout>

        <Callout type="summary" title="4. Restriction Cannot Be a System">
          Restrictions belong to consumption, not production. They can only
          reduce output, never generate it. You cannot build an economy out
          of prohibitions alone.
        </Callout>
      </div>
    </LessonLayout>
  );
}
