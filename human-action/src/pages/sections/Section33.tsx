import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo: Consumer vs. Producer Democracy
function DemocracyTypeDemo() {
  const [selected, setSelected] = useState<'consumer' | 'producer' | null>(null);

  const types = {
    consumer: {
      title: 'Consumer Democracy (Market)',
      how: 'Every purchase is a vote directing production toward what people want.',
      whoDecides: 'All consumers',
      serves: 'Consumer preferences',
      result: 'Production serves consumption—the end goal of economic activity.'
    },
    producer: {
      title: 'Producer Democracy (Syndicalism)',
      how: 'Workers in each industry decide what and how to produce.',
      whoDecides: 'Workers in each plant',
      serves: 'Producer interests',
      result: 'Production becomes an end in itself—inverts economic logic.'
    }
  };

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Two Forms of Economic Democracy</h4>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => setSelected('consumer')}
          className={`p-4 rounded-lg text-left transition-all ${
            selected === 'consumer'
              ? 'bg-green-900/30 border-2 border-green-500'
              : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
          }`}
        >
          <div className="text-2xl mb-2">🛒</div>
          <h5 className="font-medium text-dark-100">Consumer Democracy</h5>
          <p className="text-sm text-dark-400">Market economy</p>
        </button>

        <button
          onClick={() => setSelected('producer')}
          className={`p-4 rounded-lg text-left transition-all ${
            selected === 'producer'
              ? 'bg-red-900/30 border-2 border-red-500'
              : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
          }`}
        >
          <div className="text-2xl mb-2">🏭</div>
          <h5 className="font-medium text-dark-100">Producer Democracy</h5>
          <p className="text-sm text-dark-400">Syndicalist vision</p>
        </button>
      </div>

      {selected && (
        <div className={`p-4 rounded-lg ${
          selected === 'consumer' ? 'bg-green-900/20' : 'bg-red-900/20'
        }`}>
          <h5 className="font-medium text-dark-100 mb-3">{types[selected].title}</h5>
          <div className="space-y-2 text-sm">
            <div><span className="text-dark-400">How it works:</span> <span className="text-dark-200">{types[selected].how}</span></div>
            <div><span className="text-dark-400">Who decides:</span> <span className="text-dark-200">{types[selected].whoDecides}</span></div>
            <div><span className="text-dark-400">Serves:</span> <span className="text-dark-200">{types[selected].serves}</span></div>
            <div className={`mt-3 p-2 rounded ${selected === 'consumer' ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
              <span className={selected === 'consumer' ? 'text-green-400' : 'text-red-400'}>Result: </span>
              <span className="text-dark-200">{types[selected].result}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive demo: Syndicalist Privilege
function SyndicalistPrivilegeDemo() {
  const [syndicalized, setSyndicalized] = useState(false);

  const industries = [
    { name: 'Steel Workers', workers: 50000, marketWage: 50, syndicalistWage: 80 },
    { name: 'Auto Workers', workers: 100000, marketWage: 55, syndicalistWage: 85 },
    { name: 'Other Workers', workers: 1000000, marketWage: 45, syndicalistWage: 35 },
  ];

  const totalIncome = industries.reduce((sum, ind) =>
    sum + ind.workers * (syndicalized ? ind.syndicalistWage : ind.marketWage), 0
  );

  const privilegedIncome = industries.slice(0, 2).reduce((sum, ind) =>
    sum + ind.workers * (syndicalized ? ind.syndicalistWage : ind.marketWage), 0
  );

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Who Benefits from Syndicalism?</h4>

      <div className="space-y-3 mb-4">
        {industries.map((ind, i) => {
          const wage = syndicalized ? ind.syndicalistWage : ind.marketWage;
          const change = ind.syndicalistWage - ind.marketWage;
          return (
            <div key={i} className="p-3 bg-dark-700 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-dark-200">{ind.name}</span>
                <span className="text-dark-400 text-sm">{ind.workers.toLocaleString()} workers</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-3 bg-dark-600 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        syndicalized
                          ? change > 0 ? 'bg-green-500' : 'bg-red-500'
                          : 'bg-blue-500'
                      }`}
                      style={{ width: `${(wage / 100) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="text-right w-24">
                  <span className="text-dark-100 font-medium">${wage}k</span>
                  {syndicalized && (
                    <span className={`text-xs ml-1 ${change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      ({change > 0 ? '+' : ''}{change})
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-center">
        <div className="p-3 bg-dark-700 rounded-lg">
          <div className="text-xs text-dark-400">Privileged Workers</div>
          <div className="text-lg font-bold text-dark-100">150,000</div>
          <div className="text-xs text-dark-500">13% of workforce</div>
        </div>
        <div className="p-3 bg-dark-700 rounded-lg">
          <div className="text-xs text-dark-400">Majority Workers</div>
          <div className="text-lg font-bold text-dark-100">1,000,000</div>
          <div className="text-xs text-dark-500">87% of workforce</div>
        </div>
      </div>

      <button
        onClick={() => setSyndicalized(!syndicalized)}
        className={`w-full px-4 py-2 rounded text-white text-sm ${
          syndicalized ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
        }`}
      >
        {syndicalized ? 'Return to Market Wages' : 'Apply Syndicalist Privileges'}
      </button>

      {syndicalized && (
        <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-red-400 font-medium">Result:</span> Syndicalist policies
            grant privileges to organized minorities (13%) at the expense of the majority (87%).
            The privileged workers gain, but the majority—including consumers—suffer from
            higher prices and reduced output.
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo: Guild/Corporatist Structure
function CorporatistStructureDemo() {
  const [step, setStep] = useState(0);

  const stages = [
    {
      title: 'The Corporatist Vision',
      description: 'Each branch of industry forms an autonomous guild or corporation.',
      visual: ['🏗️ Construction Guild', '🚗 Auto Guild', '⚡ Energy Guild', '🍞 Food Guild'],
      problem: null
    },
    {
      title: 'Autonomous Self-Government',
      description: 'Each guild controls its own affairs: wages, prices, working conditions.',
      visual: ['🏗️ → Sets construction wages', '🚗 → Sets car prices', '⚡ → Sets energy rates', '🍞 → Sets bread prices'],
      problem: null
    },
    {
      title: 'The Coordination Problem',
      description: 'Guilds must negotiate with each other. But who decides disputes?',
      visual: ['🏗️ ↔️ 🚗 Conflict over steel', '⚡ ↔️ 🍞 Conflict over power', '🚗 ↔️ ⚡ Conflict over fuel'],
      problem: 'No market prices to guide allocation!'
    },
    {
      title: 'The Inevitable Result',
      description: 'Either central authority resolves all disputes (socialism) or chaos.',
      visual: ['👑 Central Planning Board', '↓ Directs all guilds', '= Outright Socialism'],
      problem: 'Corporatism reverts to what it claimed to avoid.'
    }
  ];

  const current = stages[step];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Corporatist Structure</h4>

      <div className="mb-4">
        <div className="flex gap-1 mb-2">
          {stages.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded ${i <= step ? 'bg-blue-500' : 'bg-dark-600'}`}
            />
          ))}
        </div>
        <div className="text-sm text-dark-400">Step {step + 1} of {stages.length}</div>
      </div>

      <div className="p-4 bg-dark-700 rounded-lg mb-4">
        <h5 className="font-medium text-dark-100 mb-2">{current.title}</h5>
        <p className="text-dark-300 text-sm mb-4">{current.description}</p>

        <div className="grid grid-cols-2 gap-2">
          {current.visual.map((item, i) => (
            <div key={i} className="p-2 bg-dark-600 rounded text-sm text-dark-200 text-center">
              {item}
            </div>
          ))}
        </div>

        {current.problem && (
          <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded">
            <p className="text-red-400 text-sm font-medium">{current.problem}</p>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-4 py-2 bg-dark-600 hover:bg-dark-500 disabled:opacity-50 rounded text-white text-sm"
        >
          Previous
        </button>
        <button
          onClick={() => setStep(Math.min(stages.length - 1, step + 1))}
          disabled={step === stages.length - 1}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded text-white text-sm"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

// Interactive demo: The Autonomy Fallacy
function AutonomyFallacyDemo() {
  const [showReality, setShowReality] = useState(false);

  const industries = [
    { name: 'Iron Ore Mining', inputs: ['Equipment', 'Energy'], outputs: ['Iron Ore'] },
    { name: 'Steel Production', inputs: ['Iron Ore', 'Coal', 'Energy'], outputs: ['Steel'] },
    { name: 'Auto Manufacturing', inputs: ['Steel', 'Rubber', 'Glass'], outputs: ['Cars'] },
    { name: 'Transportation', inputs: ['Fuel', 'Vehicles'], outputs: ['Delivery Services'] },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Autonomy Fallacy</h4>

      <p className="text-dark-300 text-sm mb-4">
        Syndicalism claims each industry can be "autonomous." But under the division
        of labor, every industry depends on others. Can they really govern themselves?
      </p>

      <div className="space-y-3 mb-4">
        {industries.map((ind, i) => (
          <div key={i} className="p-3 bg-dark-700 rounded-lg">
            <div className="font-medium text-dark-100 mb-2">{ind.name}</div>
            {showReality && (
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-dark-400">Needs from others:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {ind.inputs.map((input, j) => (
                      <span key={j} className="px-2 py-0.5 bg-red-900/30 text-red-400 rounded text-xs">
                        {input}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-dark-400">Provides to others:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {ind.outputs.map((output, j) => (
                      <span key={j} className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded text-xs">
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowReality(!showReality)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm"
      >
        {showReality ? 'Hide Dependencies' : 'Show Dependencies'}
      </button>

      {showReality && (
        <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-yellow-400 font-medium">The Problem:</span> No industry
            is truly autonomous. Steel workers need iron ore, auto workers need steel,
            everyone needs energy. Under syndicalism, who decides how much iron ore goes
            to steel versus other uses? Without market prices, there's no rational way
            to coordinate these interdependencies.
          </p>
        </div>
      )}
    </div>
  );
}

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <p className="text-lg text-dark-200 mb-6">
        Syndicalism and corporativism represent alternative visions of economic
        organization—neither pure capitalism nor outright socialism. Syndicalism
        would give workers ownership of their plants; corporativism would organize
        the economy into self-governing guilds. Mises shows why both schemes are
        fundamentally incoherent and must eventually collapse into either socialism
        or market economy.
      </p>

      <Callout type="concept" title="The Syndicalist Vision">
        Syndicalism aims to replace "consumer democracy" (the market) with "producer
        democracy"—letting workers in each industry decide what and how to produce.
        But this inverts economic logic: the sole purpose of production is consumption.
        Making production an end in itself serves producer interests at consumer expense.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Syndicalist Idea</h2>

      <p className="text-dark-300 mb-4">
        Syndicalism rests on a mistaken analogy. Just as democrats sought to overthrow
        kings and aristocrats, syndicalists see capitalists and entrepreneurs as parasites
        to be replaced by worker control. But this analogy fails: entrepreneurs and
        capitalists serve a function—directing production toward consumer wants.
      </p>

      <p className="text-dark-300 mb-4">
        Under syndicalism, workers in each plant would own and control their enterprise.
        But this raises immediate questions: Who decides what the plant produces? At
        what price? Using what methods? The syndicalist vision offers no mechanism for
        coordinating production across the economy.
      </p>

      <DemocracyTypeDemo />

      <CardGrid columns={2}>
        <Card title="Consumer Sovereignty">
          In the market, consumers direct production through their purchases. Every
          dollar spent is a vote for what should be produced. Producers serve or fail.
        </Card>
        <Card title="Producer Privilege">
          Under syndicalism, producers decide what to make. Consumer preferences matter
          only insofar as producers choose to satisfy them. The cart leads the horse.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Syndicalism Creates Privilege</h2>

      <p className="text-dark-300 mb-4">
        In practice, syndicalist policies don't benefit "workers" in general—they
        benefit organized workers in strategic industries at the expense of the majority.
        When steel workers or auto workers gain control of their plants and set their
        own wages, they raise prices for everyone else.
      </p>

      <p className="text-dark-300 mb-4">
        The immense majority of workers—those in less organized or less strategic
        industries—find their real wages reduced by higher prices for steel, cars,
        and other syndicalized products. A policy sold as benefiting "labor" actually
        benefits a privileged minority.
      </p>

      <SyndicalistPrivilegeDemo />

      <Callout type="warning" title="The Minority Gains">
        Syndicalist policies grant privileges to a minority of workers at the expense
        of the immense majority. The result is not worker solidarity but worker
        conflict—each group trying to secure monopoly privileges for itself.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Guild Socialism and Corporativism</h2>

      <p className="text-dark-300 mb-4">
        British guild socialism and Italian Fascist corporativism represented attempts
        to systematize syndicalist ideas. Each branch of industry would form a guild
        or corporation with autonomous self-government. Inter-guild disputes would be
        resolved by negotiation or, failing that, by some central authority.
      </p>

      <p className="text-dark-300 mb-4">
        Fascist Italy divided organized economic activity into 22 corporations, each
        supposedly self-governing. But the scheme quickly revealed its contradictions:
        how can industries be "autonomous" when they all depend on each other?
      </p>

      <CorporatistStructureDemo />

      <CardGrid columns={2}>
        <Card title="The Guild Vision">
          Autonomous guilds govern their internal affairs. The state intervenes only
          when guilds cannot agree. A harmonious middle way between capitalism and socialism.
        </Card>
        <Card title="The Reality">
          Disputes between guilds are constant. Without market prices, there's no
          rational basis for resolution. Either chaos or central planning must result.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Autonomy Fallacy</h2>

      <p className="text-dark-300 mb-4">
        The essential flaw in guild socialism and corporativism is the claim that
        branches of production can be "autonomous." Under the division of labor,
        no industry stands alone. Steel depends on iron ore, coal, and energy.
        Autos depend on steel, rubber, and glass. Transportation depends on fuel
        and vehicles.
      </p>

      <p className="text-dark-300 mb-4">
        Without market prices to coordinate these interdependencies, who decides
        how resources flow between industries? The guilds cannot negotiate from
        equal positions—some industries are more essential than others. The
        "autonomous" guild system cannot avoid the need for central direction.
      </p>

      <AutonomyFallacyDemo />

      <Callout type="insight" title="The Inevitable Collapse">
        In practice, guild socialism and corporativism must revert to outright
        socialism. When autonomous guilds cannot coordinate, central authority
        must step in. The more disputes arise, the more the center must direct.
        Eventually, the guilds become mere administrative units of a centrally
        planned economy.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Production as an End</h2>

      <p className="text-dark-300 mb-4">
        The deepest error of syndicalism and corporativism is treating production
        as an end in itself. They ask: who controls the means of production? This
        question matters to producers. But the economic question is: how are consumer
        wants best satisfied?
      </p>

      <p className="text-dark-300 mb-4">
        When production becomes an end rather than a means, things are turned
        upside down. Workers' control sounds democratic, but it actually means
        organized producers imposing their preferences on consumers. The proper
        relationship—production serving consumption—is inverted.
      </p>

      <Callout type="summary" title="Chapter Summary">
        Syndicalism and corporativism attempt a middle path between capitalism and
        socialism. Syndicalism would give workers control of their plants; corporativism
        would organize industry into self-governing guilds. Both fail because they
        cannot solve the coordination problem. Without market prices, autonomous units
        cannot rationally allocate resources among interdependent industries.
        Syndicalism benefits privileged minorities at majority expense. Corporativism
        inevitably collapses into central planning. Both invert the proper relationship
        between production and consumption.
      </Callout>
    </LessonLayout>
  );
}
