import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing time preference
function TimePreferenceDemo() {
  const [presentValue, setPresentValue] = useState(100);
  const [timePreference, setTimePreference] = useState(5);

  const futureValue = presentValue * (1 + timePreference / 100);
  const discount = ((futureValue - presentValue) / presentValue * 100).toFixed(1);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Time Preference in Action</h4>
      <p className="text-dark-400 text-sm mb-4">
        Adjust the rate of time preference to see how present and future goods are valued differently.
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Rate of Time Preference: {timePreference}%
        </label>
        <input
          type="range"
          min="1"
          max="20"
          value={timePreference}
          onChange={(e) => setTimePreference(Number(e.target.value))}
          className="w-full accent-amber-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <span className="text-dark-400 text-sm block mb-2">Present Good</span>
          <span className="text-3xl font-bold text-green-400">${presentValue}</span>
          <span className="text-dark-400 text-xs block mt-1">Available now</span>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center flex flex-col justify-center">
          <span className="text-amber-400 text-2xl">→</span>
          <span className="text-dark-400 text-xs">One year later</span>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <span className="text-dark-400 text-sm block mb-2">Future Good Required</span>
          <span className="text-3xl font-bold text-amber-400">${futureValue.toFixed(0)}</span>
          <span className="text-dark-400 text-xs block mt-1">To be equally valued</span>
        </div>
      </div>

      <div className="mt-4 text-center text-dark-300 text-sm">
        A person with {timePreference}% time preference requires {discount}% more in the future
        to give up ${presentValue} today.
      </div>
    </div>
  );
}

// Capital structure visualization
function CapitalStructureDemo() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      title: 'Original Factors',
      description: 'Land and labor are the original factors of production—nature-given or human effort.',
      icon: '🌱',
    },
    {
      title: 'First-Order Capital',
      description: 'Tools and simple equipment produced from original factors. These directly aid production.',
      icon: '🔨',
    },
    {
      title: 'Higher-Order Capital',
      description: 'Complex machinery and factories that produce other capital goods. More roundabout production.',
      icon: '🏭',
    },
    {
      title: 'Consumer Goods',
      description: 'The final stage—goods ready for consumption. The ultimate aim of all production.',
      icon: '🛒',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Structure of Capital</h4>
      <p className="text-dark-400 text-sm mb-4">
        Production involves multiple stages. Click through to see how capital goods relate to time.
      </p>

      <div className="flex gap-2 mb-6 flex-wrap">
        {stages.map((s, i) => (
          <button
            key={i}
            onClick={() => setStage(i)}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              stage === i
                ? 'bg-amber-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Stage {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="text-4xl mb-3">{stages[stage].icon}</div>
        <h5 className="text-amber-400 font-medium mb-2">{stages[stage].title}</h5>
        <p className="text-dark-300 text-sm">{stages[stage].description}</p>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-dark-400 text-xs">Time Distance from Consumption:</span>
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded ${
                  i <= 3 - stage ? 'bg-amber-500' : 'bg-dark-700'
                }`}
              />
            ))}
          </div>
          <span className="text-amber-400 text-xs">{3 - stage === 0 ? 'Ready' : `${3 - stage} stage(s) away`}</span>
        </div>
      </div>
    </div>
  );
}

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <div className="prose prose-invert max-w-none">
        {/* Introduction */}
        <h2 className="text-3xl font-bold text-dark-100 mb-6">
          XVIII. Action in the Passing of Time
        </h2>

        <p className="text-dark-300 text-lg leading-relaxed mb-6">
          Human action is always future-oriented. Every action aims at improving future conditions
          compared to what they would be in the absence of action. This temporal dimension of
          action has profound implications for how we understand capital, interest, saving, and
          investment. The passage of time is not merely a backdrop to economic activity—it is
          an essential element that shapes all economic decisions.
        </p>

        {/* Perspective in Valuation of Time Periods */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          1. Perspective in the Valuation of Time Periods
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Action is always directed toward the future. The present shrinks to an ideal
          boundary line separating the past from the future. Action influences only the
          future, never the present, which with every infinitesimal fraction of a second
          sinks down into the past. Man becomes conscious of time when he plans to convert
          a less satisfactory present state into a more satisfactory future state.
        </p>

        <Callout type="info" title="The Nature of Time in Action">
          For the acting man, time is not homogeneous. The present differs from the past
          (which is no longer subject to action) and from the future (which is not yet
          present and therefore uncertain). This distinction is fundamental to all economic
          reasoning about saving, investment, and capital.
        </Callout>

        <p className="text-dark-300 leading-relaxed mb-4">
          The more remote a future satisfaction, the less it is valued in comparison with
          a nearer satisfaction. This is not merely a psychological observation but a
          necessary feature of human action. An actor who did not prefer earlier to later
          satisfaction would never begin any action at all—there would always be some future
          moment that would seem more appropriate.
        </p>

        {/* Time Preference */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          2. Time Preference as an Essential Requisite of Action
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          <em>Time preference</em> is the preference for present goods over future goods of
          the same kind and quantity. This is a universal and unchanging feature of human
          action—it is categorical, not merely contingent. Without time preference, action
          as we know it would be inconceivable.
        </p>

        <TimePreferenceDemo />

        <Callout type="warning" title="Time Preference Is Universal">
          Every acting man values a present good more highly than the same good available
          in the future. This is not a defect or irrationality—it is an essential
          characteristic of action. A being without time preference would never act at
          all, for there would never be any urgency to begin.
        </Callout>

        <p className="text-dark-300 leading-relaxed mb-4">
          Time preference explains why interest exists in the market. Those who save and
          lend their funds forego present consumption. They must be compensated with a
          premium (interest) for waiting. Those who borrow to consume now rather than
          later pay this premium because present goods are worth more to them than future
          goods of equal amount.
        </p>

        <CardGrid>
          <Card title="High Time Preference" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              A person with high time preference strongly prefers present consumption.
              Such a person will save little and borrow readily. They require substantial
              compensation to postpone consumption.
            </p>
          </Card>
          <Card title="Low Time Preference" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              A person with low time preference is more willing to postpone consumption.
              Such a person saves more readily and lends at lower rates. They are the
              foundation of capital accumulation.
            </p>
          </Card>
        </CardGrid>

        {/* Capital Goods */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          3. Capital Goods
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Capital goods are produced factors of production—goods that have been made by
          human effort and are used to produce other goods. They are intermediate stages
          in the process of production. Their value derives entirely from their contribution
          to the production of consumer goods.
        </p>

        <CapitalStructureDemo />

        <p className="text-dark-300 leading-relaxed mb-4">
          The existence of capital goods represents a lengthening of the period of production.
          Instead of using labor directly to produce consumer goods, people first produce tools
          (capital goods) and then use these tools to produce consumer goods more efficiently.
          This roundabout method of production requires time but yields greater output.
        </p>

        <Callout type="info" title="Capital as Crystallized Time">
          Capital goods embody past labor and waiting. They represent the sacrifice of
          present consumption for future productivity. The accumulation of capital is
          made possible only by a sufficiently low time preference—people must be willing
          to wait for the fruits of their saving.
        </Callout>

        {/* Period of Production */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          4. Period of Production, Waiting Time, and Period of Provision
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The <em>period of production</em> is the time that elapses between the beginning
          of a production process and its completion in a consumer good. The <em>waiting
          time</em> is the interval between the expenditure of factors and the availability
          of the product for consumption. The <em>period of provision</em> is the span of
          time for which an actor's present actions provide.
        </p>

        <CardGrid>
          <Card title="Short Period of Production" className="bg-dark-800">
            <p className="text-dark-300 text-sm mb-3">
              Hunting and gathering, simple agriculture. Little capital required.
              Quick results but limited productivity.
            </p>
            <p className="text-amber-400 text-sm font-medium">
              Example: Picking wild berries
            </p>
          </Card>
          <Card title="Long Period of Production" className="bg-dark-800">
            <p className="text-dark-300 text-sm mb-3">
              Manufacturing, modern industry. Much capital required.
              Delayed results but enormously greater productivity.
            </p>
            <p className="text-amber-400 text-sm font-medium">
              Example: Building a factory to produce automobiles
            </p>
          </Card>
        </CardGrid>

        <p className="text-dark-300 leading-relaxed mt-4 mb-4">
          The lengthening of the period of production—made possible by capital accumulation—is
          the source of modern prosperity. Primitive peoples are poor not because they lack
          natural resources but because they lack capital. Capital accumulation requires
          saving, which requires low enough time preference to make waiting worthwhile.
        </p>

        {/* Accumulation and Consumption of Capital */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          5. Accumulation, Maintenance, and Consumption of Capital
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Capital can be accumulated, maintained, or consumed. These three possibilities
          correspond to saving, replacement, and dissaving:
        </p>

        <ul className="list-disc list-inside text-dark-300 space-y-3 mb-6">
          <li>
            <strong>Accumulation:</strong> When saving exceeds the depreciation of existing
            capital, the capital stock grows. This extends the period of production and
            increases future productivity.
          </li>
          <li>
            <strong>Maintenance:</strong> When saving exactly replaces depreciated capital,
            the capital stock remains constant. Production continues at its current level.
          </li>
          <li>
            <strong>Consumption:</strong> When saving falls short of depreciation, capital
            is consumed. The period of production shortens and future productivity falls.
            This is capital consumption or "eating the seed corn."
          </li>
        </ul>

        <Callout type="warning" title="Capital Consumption">
          Capital can be consumed as readily as it can be accumulated. When a society's
          time preference rises (people become less willing to wait), saving decreases,
          capital is consumed, and the standard of living ultimately falls. This process
          may not be immediately apparent—capital consumption can masquerade as prosperity
          in the short run.
        </Callout>

        {/* Money and Capital */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          6. Money and Capital; Saving and Investment
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          In the market economy, capital is calculated in terms of money. The monetary
          expression of capital is essential for economic calculation. It allows entrepreneurs
          to compare heterogeneous capital goods, assess profitability, and make rational
          decisions about investment.
        </p>

        <CardGrid>
          <Card title="Saving" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              The act of forgoing present consumption. Saving releases resources from
              the production of consumer goods, making them available for the production
              of capital goods. Without prior saving, there can be no investment.
            </p>
          </Card>
          <Card title="Investment" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              The employment of saved resources in the production of capital goods.
              Investment lengthens the period of production and increases future output.
              It is the vehicle through which saving becomes productive.
            </p>
          </Card>
        </CardGrid>

        <p className="text-dark-300 leading-relaxed mt-4 mb-4">
          The crucial insight is that genuine investment requires prior genuine saving.
          When banks create credit not backed by real saving, they create the illusion
          of capital without the reality. This sets in motion the boom-bust cycle that
          Mises would analyze in his theory of the trade cycle.
        </p>

        {/* The Influence of the Past */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          7. The Influence of the Past Upon Action
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The past cannot be undone, but it shapes the conditions under which present
          action takes place. Past decisions have created the capital structure, the
          institutions, and the knowledge that form the starting point for present action.
        </p>

        <Callout type="info" title="Sunk Costs">
          Costs already incurred are "sunk" and should not influence present decisions
          about future action. What matters is only the future consequences of present
          choices. However, the capital goods created by past investment continue to
          exist and must be taken into account as data of the present situation.
        </Callout>

        {/* Summary */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          Summary: Time and the Structure of Production
        </h3>

        <div className="bg-dark-800 rounded-lg p-6 mb-6">
          <ul className="space-y-3 text-dark-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">1.</span>
              <span>
                All action is future-oriented. The present is merely an ideal boundary
                between the unalterable past and the not-yet-realized future.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">2.</span>
              <span>
                Time preference—preferring present goods to future goods of equal kind
                and quantity—is a universal and necessary feature of human action.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">3.</span>
              <span>
                Capital goods are produced means of production that embody past saving
                and waiting. They represent the adoption of roundabout production methods.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">4.</span>
              <span>
                The period of production can be lengthened through capital accumulation,
                which requires saving—the restriction of present consumption.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">5.</span>
              <span>
                Capital can be accumulated, maintained, or consumed depending on whether
                saving exceeds, equals, or falls short of depreciation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">6.</span>
              <span>
                Genuine investment requires prior genuine saving. Credit expansion
                without real saving creates the illusion of capital without the reality.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}
