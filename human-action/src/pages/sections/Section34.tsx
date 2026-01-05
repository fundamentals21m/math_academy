import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo: Limited War vs Total War
function TotalWarDemo() {
  const [warType, setWarType] = useState<'limited' | 'total'>('limited');

  const wars = {
    limited: {
      era: 'Pre-Statist Era',
      scope: 'Professional armies',
      objective: 'Territorial adjustment',
      civilians: 'Largely uninvolved',
      economy: 'Trade continues',
      duration: 'Brief campaigns',
      color: 'blue'
    },
    total: {
      era: 'Welfare State Era',
      scope: 'Entire population',
      objective: 'Complete victory',
      civilians: 'Mobilized for war',
      economy: 'Centrally directed',
      duration: 'Until exhaustion',
      color: 'red'
    }
  };

  const current = wars[warType];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Transformation of Warfare</h4>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => setWarType('limited')}
          className={`p-4 rounded-lg text-center transition-all ${
            warType === 'limited'
              ? 'bg-blue-900/30 border-2 border-blue-500'
              : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
          }`}
        >
          <div className="text-2xl mb-2">⚔️</div>
          <div className="font-medium text-dark-100">Limited War</div>
          <div className="text-xs text-dark-400">Royal armies</div>
        </button>

        <button
          onClick={() => setWarType('total')}
          className={`p-4 rounded-lg text-center transition-all ${
            warType === 'total'
              ? 'bg-red-900/30 border-2 border-red-500'
              : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
          }`}
        >
          <div className="text-2xl mb-2">💥</div>
          <div className="font-medium text-dark-100">Total War</div>
          <div className="text-xs text-dark-400">Clash of peoples</div>
        </button>
      </div>

      <div className={`p-4 rounded-lg ${
        warType === 'limited' ? 'bg-blue-900/20' : 'bg-red-900/20'
      }`}>
        <h5 className="font-medium text-dark-100 mb-3">{current.era}</h5>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-dark-400">Scope:</span>
            <div className="text-dark-200">{current.scope}</div>
          </div>
          <div>
            <span className="text-dark-400">Objective:</span>
            <div className="text-dark-200">{current.objective}</div>
          </div>
          <div>
            <span className="text-dark-400">Civilians:</span>
            <div className="text-dark-200">{current.civilians}</div>
          </div>
          <div>
            <span className="text-dark-400">Economy:</span>
            <div className="text-dark-200">{current.economy}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-700 rounded-lg text-sm text-dark-300">
        <span className="text-yellow-400 font-medium">Key Insight:</span> What transformed
        limited war into total war was not military technology—it was the substitution
        of the welfare state for the laissez-faire state. When the state controls the
        economy, war becomes a clash of entire peoples.
      </div>
    </div>
  );
}

// Interactive demo: Market Economy vs War
function MarketVsWarDemo() {
  const [mode, setMode] = useState<'peace' | 'war'>('peace');

  const scenarios = {
    peace: {
      title: 'Market Economy (Peace)',
      activities: [
        { name: 'Trade', status: 'active', icon: '🤝' },
        { name: 'Investment', status: 'active', icon: '📈' },
        { name: 'Division of Labor', status: 'active', icon: '⚙️' },
        { name: 'Consumer Choice', status: 'active', icon: '🛒' },
      ],
      description: 'Peaceful cooperation and voluntary exchange'
    },
    war: {
      title: 'War Economy',
      activities: [
        { name: 'Trade', status: 'suspended', icon: '🚫' },
        { name: 'Investment', status: 'redirected', icon: '🔄' },
        { name: 'Division of Labor', status: 'disrupted', icon: '❌' },
        { name: 'Consumer Choice', status: 'rationed', icon: '📋' },
      ],
      description: 'Central direction replaces market coordination'
    }
  };

  const current = scenarios[mode];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Market Economy and War</h4>

      <p className="text-dark-300 text-sm mb-4">
        The market economy involves peaceful cooperation. War transforms citizens into
        warriors, replacing exchange with conflict.
      </p>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {current.activities.map((activity, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg text-center ${
              activity.status === 'active' ? 'bg-green-900/30' :
              activity.status === 'suspended' ? 'bg-red-900/30' :
              'bg-yellow-900/30'
            }`}
          >
            <div className="text-2xl mb-1">{activity.icon}</div>
            <div className="text-xs text-dark-200">{activity.name}</div>
            <div className={`text-xs mt-1 ${
              activity.status === 'active' ? 'text-green-400' :
              activity.status === 'suspended' ? 'text-red-400' :
              'text-yellow-400'
            }`}>
              {activity.status}
            </div>
          </div>
        ))}
      </div>

      <div className={`p-3 rounded-lg mb-4 ${
        mode === 'peace' ? 'bg-green-900/20' : 'bg-red-900/20'
      }`}>
        <div className="text-sm text-dark-200">{current.description}</div>
      </div>

      <button
        onClick={() => setMode(mode === 'peace' ? 'war' : 'peace')}
        className={`w-full px-4 py-2 rounded text-white text-sm ${
          mode === 'peace' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {mode === 'peace' ? 'Declare War' : 'Restore Peace'}
      </button>
    </div>
  );
}

// Interactive demo: Autarky Leads to War
function AutarkyWarDemo() {
  const [step, setStep] = useState(0);

  const stages = [
    {
      title: 'Free Trade',
      description: 'Nations specialize and trade. Each benefits from the others\' production.',
      nations: [
        { name: 'Nation A', produces: 'Wheat', needs: 'Oil', status: 'trading' },
        { name: 'Nation B', produces: 'Oil', needs: 'Wheat', status: 'trading' },
      ],
      tension: 0
    },
    {
      title: 'Autarky Policy Begins',
      description: 'Statist ideology demands "self-sufficiency." Trade barriers erected.',
      nations: [
        { name: 'Nation A', produces: 'Wheat', needs: 'Oil', status: 'seeking self-sufficiency' },
        { name: 'Nation B', produces: 'Oil', needs: 'Wheat', status: 'seeking self-sufficiency' },
      ],
      tension: 30
    },
    {
      title: 'Resource Shortage',
      description: 'Self-sufficiency is impossible. Essential resources are lacking.',
      nations: [
        { name: 'Nation A', produces: 'Wheat', needs: 'Oil', status: 'shortage' },
        { name: 'Nation B', produces: 'Oil', needs: 'Wheat', status: 'shortage' },
      ],
      tension: 60
    },
    {
      title: 'War for Resources',
      description: '"Living space" ideology emerges. Resources must be seized by force.',
      nations: [
        { name: 'Nation A', produces: 'Wheat', needs: 'Oil', status: 'conquest' },
        { name: 'Nation B', produces: 'Oil', needs: 'Wheat', status: 'conquest' },
      ],
      tension: 100
    }
  ];

  const current = stages[step];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">From Autarky to War</h4>

      <div className="mb-4">
        <div className="flex gap-1 mb-2">
          {stages.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded ${i <= step ? 'bg-red-500' : 'bg-dark-600'}`}
              style={{ opacity: i <= step ? 0.5 + (i / stages.length) * 0.5 : 1 }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-dark-500">
          <span>Peace</span>
          <span>Tension: {current.tension}%</span>
          <span>War</span>
        </div>
      </div>

      <div className="p-4 bg-dark-700 rounded-lg mb-4">
        <h5 className="font-medium text-dark-100 mb-2">{current.title}</h5>
        <p className="text-dark-300 text-sm mb-4">{current.description}</p>

        <div className="grid grid-cols-2 gap-4">
          {current.nations.map((nation, i) => (
            <div key={i} className="p-3 bg-dark-600 rounded-lg text-sm">
              <div className="font-medium text-dark-100 mb-2">{nation.name}</div>
              <div className="text-dark-400">Produces: <span className="text-dark-200">{nation.produces}</span></div>
              <div className="text-dark-400">Needs: <span className="text-dark-200">{nation.needs}</span></div>
              <div className={`mt-2 text-xs ${
                nation.status === 'trading' ? 'text-green-400' :
                nation.status === 'shortage' ? 'text-yellow-400' :
                nation.status === 'conquest' ? 'text-red-400' :
                'text-blue-400'
              }`}>
                {nation.status}
              </div>
            </div>
          ))}
        </div>
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
          className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 rounded text-white text-sm"
        >
          Next Stage
        </button>
      </div>
    </div>
  );
}

// Interactive demo: The Futility of War
function FutilityDemo() {
  const [showAnalysis, setShowAnalysis] = useState(false);

  const warResults = [
    { outcome: 'Territory Gained', victor: '+', vanquished: '-', people: '0 (borders shifted)' },
    { outcome: 'Lives Lost', victor: 'Millions', vanquished: 'Millions', people: 'Tragedy for all' },
    { outcome: 'Wealth Destroyed', victor: 'Massive', vanquished: 'Massive', people: 'Impoverished' },
    { outcome: 'Trade Disrupted', victor: 'Years', vanquished: 'Years', people: 'Lower living standards' },
    { outcome: 'Root Cause Solved', victor: 'No', vanquished: 'No', people: 'Resentment grows' },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Futility of War</h4>

      <p className="text-dark-300 text-sm mb-4">
        Philosophers have long observed: wars are futile. People are killed, wealth
        destroyed, countries devastated—for the sole benefit of rulers. The peoples
        themselves derive no gain from victory.
      </p>

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-2 text-dark-400">Outcome</th>
              <th className="text-center py-2 text-dark-400">Victor</th>
              <th className="text-center py-2 text-dark-400">Vanquished</th>
              {showAnalysis && <th className="text-center py-2 text-dark-400">For the People?</th>}
            </tr>
          </thead>
          <tbody>
            {warResults.map((row, i) => (
              <tr key={i} className="border-b border-dark-700">
                <td className="py-2 text-dark-200">{row.outcome}</td>
                <td className="py-2 text-center text-dark-300">{row.victor}</td>
                <td className="py-2 text-center text-dark-300">{row.vanquished}</td>
                {showAnalysis && (
                  <td className={`py-2 text-center ${
                    row.people.includes('0') || row.people === 'No' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {row.people}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => setShowAnalysis(!showAnalysis)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm"
      >
        {showAnalysis ? 'Hide Analysis' : 'Analyze for the People'}
      </button>

      {showAnalysis && (
        <div className="mt-4 p-4 bg-dark-700 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-yellow-400 font-medium">Hegel's Phrase:</span> "The futility
            of victory." To defeat the aggressors is not enough to make peace durable.
            Victory only sets the stage for the next conflict unless the underlying
            ideology changes.
          </p>
        </div>
      )}
    </div>
  );
}

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <p className="text-lg text-dark-200 mb-6">
        The market economy rests on peaceful cooperation and voluntary exchange.
        War represents its antithesis—the substitution of force for trade. Mises
        analyzes how statism transforms limited conflicts into total war, why
        autarky policies lead inevitably to aggression, and why war remains futile
        regardless of its outcome.
      </p>

      <Callout type="concept" title="War and the Market">
        The market economy involves peaceful cooperation. It bursts asunder when
        citizens turn into warriors and, instead of exchanging commodities and
        services, fight one another. War suspends the market process and replaces
        consumer sovereignty with central command.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Total War</h2>

      <p className="text-dark-300 mb-4">
        Wars between royal armies were limited affairs. Professional soldiers
        fought while civilians continued their occupations. Trade between
        belligerents often persisted. The objective was typically territorial
        adjustment, not total conquest.
      </p>

      <p className="text-dark-300 mb-4">
        What transformed limited war into total war was not advances in military
        technology—it was the substitution of the welfare state for the laissez-faire
        state. When governments control economies, when citizens depend on state
        programs, when production is directed by political authority, war becomes
        a clash of entire peoples.
      </p>

      <TotalWarDemo />

      <Callout type="insight" title="The Statist Root">
        The ideology of statism drives modern total war. When governments control
        the economy, economic warfare becomes indistinguishable from military warfare.
        The entire productive capacity must be mobilized. Every citizen becomes either
        a soldier or a war worker.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">War and the Market Economy</h2>

      <p className="text-dark-300 mb-4">
        The market economy presupposes peace. Its foundation is the exchange of
        goods and services between individuals who specialize according to their
        comparative advantages. War reverses this process—instead of producing to
        exchange, people produce to destroy.
      </p>

      <p className="text-dark-300 mb-4">
        Under war conditions, the market cannot function normally. Trade with the
        enemy is blocked. Resources are commandeered for military purposes. Consumer
        choice gives way to rationing and central direction. The delicate mechanism
        of price coordination is replaced by bureaucratic command.
      </p>

      <MarketVsWarDemo />

      <CardGrid columns={2}>
        <Card title="Market Coordination">
          Prices guide resources to their most valued uses as determined by consumer
          preferences. Production serves consumption through voluntary exchange.
        </Card>
        <Card title="War Economy">
          Central authority directs resources to military ends. Production serves
          destruction. The consumer becomes irrelevant—only military needs matter.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">War and Autarky</h2>

      <p className="text-dark-300 mb-4">
        Autarky—the policy of national self-sufficiency—seems to offer security
        against blockade and supply disruption in wartime. But this reasoning
        is circular: autarky itself makes war more likely.
      </p>

      <p className="text-dark-300 mb-4">
        Under free trade, nations obtain resources through peaceful exchange.
        When trade barriers enforce autarky, nations lacking essential resources
        face a choice: accept lower living standards or seize what they need by
        force. The ideology of "living space" and resource conquest follows
        naturally from autarkic policy.
      </p>

      <AutarkyWarDemo />

      <Callout type="warning" title="The Autarky Trap">
        Autarky is intended to prepare for war, but it also causes war. When
        nations cannot obtain resources through trade, they seek them through
        conquest. The same ideology that demands self-sufficiency justifies
        aggression to achieve it.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Futility of War</h2>

      <p className="text-dark-300 mb-4">
        Philosophers have long recognized war's futility. People are killed and
        maimed, wealth is destroyed, countries devastated—for the sole benefit of
        rulers and oligarchies. The peoples themselves derive no gain from victory.
        The individual citizen is not enriched when rulers expand their realm.
      </p>

      <p className="text-dark-300 mb-4">
        Even victory solves nothing fundamental. Defeating aggressors is not enough
        to make peace durable. Unless the underlying ideology changes, new conflicts
        must arise. Treaties, conferences, and international organizations are
        powerless against the spirit of conquest.
      </p>

      <FutilityDemo />

      <CardGrid columns={2}>
        <Card title="What Cannot Bring Peace">
          International treaties and covenants. Bureaucratic organizations like
          the League of Nations or United Nations. Plenipotentiaries and experts.
          Red tape cannot smother the spirit of conquest.
        </Card>
        <Card title="What Can Bring Peace">
          A radical change in ideologies and economic policies. Universal acceptance
          of the market economy principle. When trade replaces conquest as the means
          of obtaining resources, war becomes unnecessary.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Root of Peace</h2>

      <p className="text-dark-300 mb-4">
        Durable peace cannot be the product of treaties and international
        bureaucracies. If the principle of the market economy is universally
        accepted, such makeshifts are unnecessary. If it is not accepted, they
        are futile.
      </p>

      <p className="text-dark-300 mb-4">
        Peace is the natural state of the market economy. When people are free
        to trade, when property rights are secure, when governments do not control
        economic life, there is nothing to fight over. Resources flow to where
        they are valued most, guided by prices rather than by armies.
      </p>

      <Callout type="summary" title="Chapter Summary">
        War is the antithesis of the market economy. Statism transforms limited
        conflicts into total war by placing the entire economy under political
        control. Autarky policies that seek security through self-sufficiency
        actually cause war by forcing nations to seize what they cannot trade for.
        Victory in war solves nothing unless underlying ideologies change. Durable
        peace requires not treaties and international organizations but the universal
        acceptance of the market economy—the substitution of trade for conquest
        as the means of obtaining resources.
      </Callout>
    </LessonLayout>
  );
}
