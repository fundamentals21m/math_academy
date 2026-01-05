import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// =============================================================================
// INTERACTIVE COMPONENTS
// =============================================================================

/**
 * Interactive demo showing external costs and property rights
 */
function ExternalCostsDemo() {
  const [propertyRights, setPropertyRights] = useState(50);
  const [productionLevel, setProductionLevel] = useState(80);

  const externalCost = Math.round((100 - propertyRights) * productionLevel / 100);
  const internalCost = Math.round(propertyRights * productionLevel / 100);
  const totalCost = externalCost + internalCost;

  const scenarios = [
    { name: 'No Property Rights', rights: 0, example: 'Open access fishery' },
    { name: 'Partial Rights', rights: 50, example: 'Factory with limited liability' },
    { name: 'Full Property Rights', rights: 100, example: 'Complete ownership & liability' },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">External Costs & Property Rights</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Property Rights Completeness: {propertyRights}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={propertyRights}
            onChange={(e) => setPropertyRights(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Production Level: {productionLevel}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={productionLevel}
            onChange={(e) => setProductionLevel(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {scenarios.map((s) => (
          <button
            key={s.name}
            onClick={() => setPropertyRights(s.rights)}
            className={`text-xs px-3 py-2 rounded flex-1 ${
              propertyRights === s.rights
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            <div className="font-medium">{s.name}</div>
            <div className="text-dark-400 mt-1">{s.example}</div>
          </button>
        ))}
      </div>

      {/* Cost visualization */}
      <div className="bg-dark-700 p-4 rounded-lg mb-4">
        <div className="text-dark-400 text-sm mb-2">Cost Distribution</div>
        <div className="h-8 flex rounded-lg overflow-hidden">
          <div
            className="bg-green-600 flex items-center justify-center text-xs text-white font-medium"
            style={{ width: `${(internalCost / totalCost) * 100}%` }}
          >
            {internalCost > 10 && `Internal: ${internalCost}`}
          </div>
          <div
            className="bg-red-600 flex items-center justify-center text-xs text-white font-medium"
            style={{ width: `${(externalCost / totalCost) * 100}%` }}
          >
            {externalCost > 10 && `External: ${externalCost}`}
          </div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-dark-400">
          <span>Borne by producer (incentivizes care)</span>
          <span>Borne by others (ignored in decisions)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`p-4 rounded-lg ${externalCost > 30 ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'}`}>
          <div className="text-dark-400 text-sm">Producer Behavior</div>
          <div className="text-dark-100 font-medium mt-1">
            {externalCost > 60 ? 'Reckless exploitation' :
             externalCost > 30 ? 'Careless operation' :
             externalCost > 10 ? 'Moderate caution' : 'Full responsibility'}
          </div>
        </div>
        <div className={`p-4 rounded-lg ${externalCost > 30 ? 'bg-red-900/30 border border-red-700' : 'bg-dark-700'}`}>
          <div className="text-dark-400 text-sm">Social Outcome</div>
          <div className="text-dark-100 font-medium mt-1">
            {externalCost > 60 ? 'Severe overproduction' :
             externalCost > 30 ? 'Overproduction' :
             externalCost > 10 ? 'Slight misallocation' : 'Optimal allocation'}
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> External costs arise from
          incomplete property rights, not from markets themselves. The solution is to better
          define and enforce property rights so decision-makers bear the full consequences
          of their actions.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing consumer sovereignty vs entrepreneur power
 */
function MarketPowerDemo() {
  const [view, setView] = useState<'naive' | 'economic'>('naive');
  const [scenario, setScenario] = useState(0);

  const scenarios = [
    {
      title: 'Wealthy Factory Owner',
      naive: 'Has power over workers and can dictate terms',
      economic: 'Must serve consumers or lose capital to competitors who do',
    },
    {
      title: 'Large Corporation',
      naive: 'Dominates the market through sheer size',
      economic: 'Size is result of past consumer satisfaction; must continue serving consumers',
    },
    {
      title: 'Bank with Capital',
      naive: 'Controls credit and can favor allies',
      economic: 'Must lend where returns are highest or lose to better allocators',
    },
    {
      title: 'Landlord',
      naive: 'Exploits tenants through monopoly on housing',
      economic: 'Must charge market rates or properties sit vacant while competitors profit',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Role of Power in the Market</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('naive')}
          className={`px-4 py-2 rounded-lg font-medium ${
            view === 'naive'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          Naive View
        </button>
        <button
          onClick={() => setView('economic')}
          className={`px-4 py-2 rounded-lg font-medium ${
            view === 'economic'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          Economic Analysis
        </button>
      </div>

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

      <div className={`p-6 rounded-lg ${
        view === 'naive' ? 'bg-red-900/30 border border-red-700' : 'bg-green-900/30 border border-green-700'
      }`}>
        <div className={`text-sm font-medium mb-2 ${
          view === 'naive' ? 'text-red-400' : 'text-green-400'
        }`}>
          {view === 'naive' ? 'Popular Misconception' : 'Economic Reality'}
        </div>
        <p className="text-dark-100 text-lg">
          {view === 'naive' ? scenarios[scenario].naive : scenarios[scenario].economic}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">Who Really Has Power?</div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-dark-300">Consumers</span>
              <div className="w-32 h-3 bg-dark-600 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '90%' }} />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-300">Entrepreneurs</span>
              <div className="w-32 h-3 bg-dark-600 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500" style={{ width: '10%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">Entrepreneur's Role</div>
          <p className="text-dark-300 text-sm">
            Entrepreneurs are servants of consumers. Their "power" is merely the ability
            to anticipate consumer wants better than competitors—a power that vanishes
            the moment they stop serving consumers well.
          </p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Critics claim economics
          ignores power, but Mises argues that in the market, consumer preferences constitute
          the only lasting power. Entrepreneurs who don't serve consumers lose their capital
          to those who do.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing theory vs raw data
 */
function TheoryDataDemo() {
  const [showTheory, setShowTheory] = useState(false);

  const observations = [
    {
      data: 'Prices rose after minimum wage increase',
      withoutTheory: 'Two events that happened to coincide',
      withTheory: 'Causal connection: higher labor costs passed to consumers',
    },
    {
      data: 'Rent control followed by housing shortage',
      withoutTheory: 'Historical coincidence requiring no explanation',
      withTheory: 'Price ceiling below market rate reduces supply incentives',
    },
    {
      data: 'Money supply doubled, prices eventually doubled',
      withoutTheory: 'Numerical correlation with unclear meaning',
      withTheory: 'Quantity theory: more money chasing same goods raises prices',
    },
    {
      data: 'Trade barriers followed by higher consumer prices',
      withoutTheory: 'Facts to be recorded without interpretation',
      withTheory: 'Protection raises costs by eliminating cheaper foreign suppliers',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Theory and Data</h4>

      <p className="text-dark-300 mb-4">
        The Historical School claimed economics should merely describe institutions
        without theoretical interpretation. Mises argues this is impossible—even
        recording facts requires theoretical frameworks.
      </p>

      <div className="mb-6">
        <button
          onClick={() => setShowTheory(!showTheory)}
          className={`px-4 py-2 rounded-lg font-medium ${
            showTheory
              ? 'bg-green-600 text-white'
              : 'bg-blue-600 text-white'
          }`}
        >
          {showTheory ? 'Hide Theoretical Interpretation' : 'Apply Economic Theory'}
        </button>
      </div>

      <div className="space-y-4">
        {observations.map((obs, i) => (
          <div key={i} className="bg-dark-700 p-4 rounded-lg">
            <div className="text-dark-100 font-medium mb-2">
              Observation: {obs.data}
            </div>
            <div className={`p-3 rounded ${
              showTheory
                ? 'bg-green-900/30 border border-green-700'
                : 'bg-dark-600'
            }`}>
              <div className={`text-xs font-medium mb-1 ${
                showTheory ? 'text-green-400' : 'text-dark-400'
              }`}>
                {showTheory ? 'With Economic Theory' : 'Without Theory'}
              </div>
              <p className="text-dark-200 text-sm">
                {showTheory ? obs.withTheory : obs.withoutTheory}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> "There is no such thing as
          a mere recording of unadulterated facts apart from any reference to theories."
          Data requires theoretical frameworks to be meaningful. The question of whether
          events are connected can only be answered by theory.
        </p>
      </div>
    </div>
  );
}

/**
 * Interactive demo showing short-run vs long-run adjustment
 */
function AdjustmentPeriodDemo() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [shock, setShock] = useState<'demand' | 'supply' | 'policy'>('demand');

  const shocks = {
    demand: {
      name: 'Demand Increase',
      shortRun: 'Prices rise sharply, existing producers profit',
      longRun: 'New producers enter, supply expands, prices moderate',
      warning: 'Politicians see only short-run price rise, not long-run adjustment',
    },
    supply: {
      name: 'Supply Disruption',
      shortRun: 'Shortages appear, prices spike, rationing occurs',
      longRun: 'High prices incentivize new sources, substitutes, conservation',
      warning: 'Price controls prevent the adjustment mechanism from working',
    },
    policy: {
      name: 'New Regulation',
      shortRun: 'Intended effects visible, costs hidden',
      longRun: 'Unintended consequences emerge, capital reallocation, exit',
      warning: 'Benefits concentrated and visible, costs dispersed and delayed',
    },
  };

  const currentShock = shocks[shock];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Adjustment Periods</h4>

      <div className="flex gap-2 mb-6">
        {Object.entries(shocks).map(([key, value]) => (
          <button
            key={key}
            onClick={() => { setShock(key as typeof shock); setTimeElapsed(0); }}
            className={`px-4 py-2 rounded-lg font-medium ${
              shock === key
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {value.name}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Time Elapsed: {timeElapsed === 0 ? 'Immediate' : timeElapsed === 100 ? 'Long Run' : `${timeElapsed}%`}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={timeElapsed}
          onChange={(e) => setTimeElapsed(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>Short Run</span>
          <span>Medium Run</span>
          <span>Long Run</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className={`p-4 rounded-lg transition-all ${
          timeElapsed < 50 ? 'bg-yellow-900/30 border border-yellow-700' : 'bg-dark-700'
        }`}>
          <div className="text-dark-400 text-sm mb-1">Short-Run Effects</div>
          <p className={`text-sm ${timeElapsed < 50 ? 'text-yellow-200' : 'text-dark-400'}`}>
            {currentShock.shortRun}
          </p>
        </div>

        <div className={`p-4 rounded-lg transition-all ${
          timeElapsed >= 50 ? 'bg-green-900/30 border border-green-700' : 'bg-dark-700'
        }`}>
          <div className="text-dark-400 text-sm mb-1">Long-Run Effects</div>
          <p className={`text-sm ${timeElapsed >= 50 ? 'text-green-200' : 'text-dark-400'}`}>
            {currentShock.longRun}
          </p>
        </div>
      </div>

      <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg">
        <div className="text-red-400 text-sm font-medium mb-1">Policy Danger</div>
        <p className="text-dark-200 text-sm">{currentShock.warning}</p>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Insight:</strong> Markets require time to
          adjust. Short-run and long-run effects often diverge dramatically. Policies that
          seem beneficial in the short run may prove harmful when full adjustment occurs.
          The "après nous le déluge" mentality ignores these long-term consequences.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      {/* Introduction */}
      <p className="text-lg text-dark-100 mb-6">
        Chapter XXIII addresses the relationship between economic theory and empirical
        data, defends economics against charges of ignoring power, and examines how
        incomplete property rights create external costs and benefits.
      </p>

      <Callout type="concept" title="Central Thesis">
        Economic theory is not divorced from reality—it provides the essential framework
        for understanding real-world data. Critics who claim economics ignores power or
        institutional factors misunderstand how markets actually function.
      </Callout>

      {/* Section 1: Theory and Data */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        1. Theory and the Data
      </h2>

      <p className="text-dark-200 mb-4">
        The German Historical School attempted to replace economic theory with mere
        description of economic institutions. Mises argues this approach is fundamentally
        flawed—raw facts without theoretical interpretation are meaningless.
      </p>

      <TheoryDataDemo />

      <Callout type="key-point" title="The Necessity of Theory">
        "There is no such thing as a mere recording of unadulterated facts apart from
        any reference to theories." Whether two events are connected, and how, can only
        be determined through theoretical reasoning—in economic matters, through praxeology.
      </Callout>

      {/* Section 2: The Role of Power */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        2. The Role of Power
      </h2>

      <p className="text-dark-200 mb-4">
        Critics from the Historical School and Institutionalism condemn economics for
        allegedly ignoring the role of power in economic life. Mises responds that
        economics does account for power—but reveals that consumer preferences, not
        entrepreneur wealth, constitute the real power in markets.
      </p>

      <MarketPowerDemo />

      <CardGrid>
        <Card title="Political Power" variant="warning">
          <p className="text-dark-300">
            Coercion from outside the market—taxation, regulation, prohibition—does
            affect economic outcomes. This is precisely why Mises analyzes the
            "hampered market economy" separately.
          </p>
        </Card>
        <Card title="Market Power" variant="success">
          <p className="text-dark-300">
            Within the unhampered market, entrepreneurs have no power independent of
            consumer satisfaction. Their capital is a mandate to serve consumers,
            revocable at any time.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: The Limits of Property Rights */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        3. The Limits of Property Rights
      </h2>

      <p className="text-dark-200 mb-4">
        Perfect property rights would burden owners with all costs and entitle them
        to all benefits of their property's use. In practice, property rights are
        always somewhat incomplete, creating external costs and benefits.
      </p>

      <ExternalCostsDemo />

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">External Costs</h3>

      <p className="text-dark-200 mb-4">
        When property rights fail to assign all costs to decision-makers, owners
        disregard disadvantages borne by others. Historical examples include
        industrial pollution when liability was limited and deforestation when
        land lacked clear ownership.
      </p>

      <Callout type="warning" title="The Solution is Better Property Rights">
        External costs arise from incomplete property rights, not from markets.
        The solution is to better define and enforce property rights so owners
        bear the full consequences of their decisions—not to abandon markets entirely.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">External Benefits</h3>

      <p className="text-dark-200 mb-4">
        When benefits exceed what owners can capture, socially valuable projects
        may go unfunded. Intellectual property represents an extreme case—without
        patents and copyrights, creators would bear all costs while others enjoy
        the benefits freely.
      </p>

      <CardGrid>
        <Card title="The Innovation Problem" variant="default">
          <p className="text-dark-300">
            Inventors bear research costs but cannot prevent others from using
            discoveries. Without intellectual property protection, innovation
            incentives are severely weakened.
          </p>
        </Card>
        <Card title="The Subsidy Illusion" variant="default">
          <p className="text-dark-300">
            Government subsidies don't create new resources—they redirect resources
            from projects consumers prefer to projects politicians prefer. The
            opportunity cost is always borne by someone.
          </p>
        </Card>
      </CardGrid>

      {/* Section 4: Adjustment Periods */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        4. Adjustment Periods
      </h2>

      <p className="text-dark-200 mb-4">
        Markets require time to fully adjust to changed conditions. The short-run
        and long-run effects of any change often diverge dramatically, leading to
        systematic policy errors when only immediate effects are considered.
      </p>

      <AdjustmentPeriodDemo />

      <Callout type="key-point" title="The Real Man">
        Economics deals with real humans—not the ideal "economic man" of caricature.
        "Man with all his weaknesses and limitations, every man as he lives and acts,
        is the subject matter of catallactics." Economics makes no value judgments
        about what should satisfy people.
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Key Takeaways
      </h2>

      <div className="space-y-4">
        <Callout type="summary" title="1. Theory is Indispensable">
          Raw data without theoretical interpretation is meaningless. Every attempt
          to identify patterns or causation in historical facts requires a theoretical
          framework. Praxeology provides this framework for economic phenomena.
        </Callout>

        <Callout type="summary" title="2. Consumer Sovereignty is Market Power">
          In unhampered markets, consumers hold the real power. Entrepreneurs are
          their servants, maintaining capital only by satisfying consumer preferences
          better than competitors.
        </Callout>

        <Callout type="summary" title="3. Externalities Arise from Property Rights Gaps">
          External costs and benefits result from incomplete property rights. The
          solution is to better define property rights so decision-makers face the
          full consequences of their choices.
        </Callout>

        <Callout type="summary" title="4. Short-Run and Long-Run Effects Diverge">
          Markets require adjustment time. Policies that appear beneficial in the
          short run may prove harmful when full adjustment occurs. Good economics
          considers all effects, not just immediate ones.
        </Callout>
      </div>
    </LessonLayout>
  );
}
