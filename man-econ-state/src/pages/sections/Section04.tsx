import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Production Structure Visualization
function ProductionStructureDemo() {
  const [stage, setStage] = useState(0);

  const stages = [
    { name: 'Iron Ore', order: 5, time: 'Year 1', emoji: '⛏️' },
    { name: 'Steel', order: 4, time: 'Year 2', emoji: '🔩' },
    { name: 'Machinery', order: 3, time: 'Year 3', emoji: '⚙️' },
    { name: 'Factory', order: 2, time: 'Year 4', emoji: '🏭' },
    { name: 'Bread', order: 1, time: 'Year 5', emoji: '🍞' },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Structure of Production</h4>

      <div className="flex items-center justify-between mb-6">
        {stages.map((s, i) => (
          <div
            key={s.name}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setStage(i)}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${
                stage === i ? 'bg-emerald-600 scale-110' : 'bg-dark-700'
              }`}
            >
              {s.emoji}
            </div>
            <span className="text-xs text-dark-500 mt-1">{s.time}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-dark-500 text-sm">Higher Order</span>
        <div className="flex-1 h-0.5 bg-dark-600 mx-4" />
        <span className="text-dark-500 text-sm">Lower Order</span>
      </div>

      <div className="bg-dark-900 rounded-lg p-4 text-center">
        <p className="text-emerald-400 font-semibold text-lg">{stages[stage].name}</p>
        <p className="text-dark-300 text-sm">Order: {stages[stage].order}</p>
        <p className="text-dark-500 text-xs mt-2">
          {stage === 4
            ? 'Consumers\' good (first order) - directly satisfies wants'
            : `Producers' good (order ${stages[stage].order}) - used to produce goods of order ${stages[stage].order - 1}`}
        </p>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Production takes time. Resources flow from higher-order goods toward lower-order goods,
        finally yielding consumers' goods.
      </p>
    </div>
  );
}

// Roundabout Production Demo
function RoundaboutProductionDemo() {
  const [method, setMethod] = useState<'direct' | 'roundabout'>('direct');

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Roundabout Production</h4>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMethod('direct')}
          className={`flex-1 py-2 rounded transition-colors ${
            method === 'direct' ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Direct Method
        </button>
        <button
          onClick={() => setMethod('roundabout')}
          className={`flex-1 py-2 rounded transition-colors ${
            method === 'roundabout' ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Roundabout Method
        </button>
      </div>

      {method === 'direct' ? (
        <div className="bg-dark-900 rounded-lg p-4">
          <div className="flex items-center justify-center gap-4 text-4xl mb-4">
            <span>👤</span>
            <span className="text-2xl text-dark-500">→</span>
            <span>🐟</span>
          </div>
          <p className="text-dark-300 text-center mb-2">Catching fish by hand</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-dark-800 p-3 rounded">
              <p className="text-dark-400">Time: <span className="text-white">Immediate</span></p>
            </div>
            <div className="bg-dark-800 p-3 rounded">
              <p className="text-dark-400">Output: <span className="text-white">2 fish/day</span></p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-dark-900 rounded-lg p-4">
          <div className="flex items-center justify-center gap-2 text-3xl mb-4">
            <span>👤</span>
            <span className="text-xl text-dark-500">→</span>
            <span>🔨</span>
            <span className="text-xl text-dark-500">→</span>
            <span>🎣</span>
            <span className="text-xl text-dark-500">→</span>
            <span>🐟🐟🐟🐟🐟</span>
          </div>
          <p className="text-dark-300 text-center mb-2">First make tools, then catch fish</p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-dark-800 p-3 rounded">
              <p className="text-dark-400">Tool time: <span className="text-white">5 days</span></p>
            </div>
            <div className="bg-dark-800 p-3 rounded">
              <p className="text-dark-400">Waiting: <span className="text-rose-400">No fish!</span></p>
            </div>
            <div className="bg-dark-800 p-3 rounded">
              <p className="text-dark-400">Then: <span className="text-emerald-400">10 fish/day</span></p>
            </div>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        Roundabout (capital-using) methods are more productive, but require waiting.
        Someone must save during the waiting period.
      </p>
    </div>
  );
}

// Capital Structure Hierarchy
function CapitalHierarchy() {
  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Capital Hierarchy</h4>

      <div className="space-y-2">
        {[
          { level: 'Original Factors', desc: 'Land and Labor', color: 'bg-blue-600', width: 'w-full' },
          { level: 'Capital Goods Order 5', desc: 'Raw materials', color: 'bg-emerald-700', width: 'w-11/12' },
          { level: 'Capital Goods Order 4', desc: 'Processed materials', color: 'bg-emerald-600', width: 'w-10/12' },
          { level: 'Capital Goods Order 3', desc: 'Components', color: 'bg-emerald-500', width: 'w-9/12' },
          { level: 'Capital Goods Order 2', desc: 'Finished goods inventory', color: 'bg-emerald-400', width: 'w-8/12' },
          { level: 'Consumers\' Goods', desc: 'Final products', color: 'bg-amber-500', width: 'w-7/12' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className={`${item.width} ${item.color} rounded-lg p-3 transition-all hover:scale-[1.02]`}>
              <p className="text-white font-semibold text-sm">{item.level}</p>
              <p className="text-white/70 text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4 text-xs text-dark-500">
        <span>← Further from consumption</span>
        <span>Closer to consumption →</span>
      </div>
    </div>
  );
}

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "All production takes time, and therefore all acts of production involve waiting
        over a period of time for the product."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Having analyzed consumption and exchange, Rothbard now turns to <strong className="text-emerald-400">
        production</strong>—the process by which factors of production are transformed into
        consumers' goods. This chapter develops the crucial insight that production has a
        <strong className="text-emerald-400"> temporal structure</strong>.
      </p>

      {/* Section 1: The Production Structure */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Production Structure</h2>

      <p className="my-4">
        Production is not instantaneous. It takes time for factors of production (land, labor,
        and capital goods) to be transformed into consumers' goods. Rothbard, following the
        Austrian tradition, emphasizes this <strong className="text-emerald-400">temporal structure</strong>.
      </p>

      <ProductionStructureDemo />

      <p className="my-4">
        Goods are classified by their "order" or distance from final consumption:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">First-Order Goods</h4>
          <p className="text-sm text-dark-300">
            Consumers' goods that directly satisfy wants. Bread, shoes, entertainment.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Higher-Order Goods</h4>
          <p className="text-sm text-dark-300">
            Producers' goods used to make other goods. Steel, machinery, factories.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Original Factors</h4>
          <p className="text-sm text-dark-300">
            Land (nature-given) and labor (human effort). The ultimate sources of production.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Capital Goods</h4>
          <p className="text-sm text-dark-300">
            Previously produced factors. They embody past labor and land transformed into
            productive equipment.
          </p>
        </Card>
      </CardGrid>

      {/* Section 2: Time and Production */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Time and Production</h2>

      <p className="my-4">
        A fundamental insight of Austrian economics is that <strong className="text-emerald-400">more
        roundabout production methods are more productive</strong>. By using capital goods
        (tools, machines, factories), we can produce more output per unit of labor—but
        we must wait longer for the output.
      </p>

      <RoundaboutProductionDemo />

      <Callout type="info">
        <p>
          <strong>The trade-off:</strong> Roundabout methods require time. During the time
          it takes to build tools or factories, no consumers' goods are produced. Someone
          must <em>save</em>—abstain from current consumption—to provide for this waiting period.
        </p>
      </Callout>

      <p className="my-4">
        This is why capital accumulation leads to economic growth. When people save, they
        release resources from producing consumers' goods. These resources can then be
        devoted to building capital goods, which will increase future output.
      </p>

      {/* Section 3: Saved Capital */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Saved Capital</h2>

      <p className="my-4">
        <strong className="text-emerald-400">Capital</strong> is accumulated through saving.
        When someone saves (consumes less than their income), they make resources available
        for investment in capital goods.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Saving</h3>
          <p className="text-dark-300 text-sm mb-2">
            Abstaining from present consumption
          </p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Requires preference for future over present</li>
            <li>• Releases resources from consumption</li>
            <li>• Enables longer production processes</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Investment</h3>
          <p className="text-dark-300 text-sm mb-2">
            Using saved resources to build capital
          </p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Requires entrepreneurial judgment</li>
            <li>• Creates new capital goods</li>
            <li>• Lengthens the production structure</li>
          </ul>
        </div>
      </div>

      <p className="my-4">
        The key insight: <strong className="text-emerald-400">there is no shortcut to capital
        accumulation</strong>. You cannot have more capital goods without first saving—
        without someone giving up present consumption. Trying to create capital through
        money printing or credit expansion leads to malinvestment (as we'll see later).
      </p>

      {/* Section 4: Capital Values and Profits */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Capital Values and Aggregate Profits</h2>

      <p className="my-4">
        Capital goods have value because they contribute to producing consumers' goods.
        Their value is derived from—<strong className="text-emerald-400">imputed from</strong>—the
        value of the final product.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Imputation Principle</h4>
        <p className="text-dark-200 text-lg mb-4">
          The value of a factor of production is determined by its contribution to the
          value of the final product.
        </p>
        <div className="flex items-center justify-center gap-4 text-lg">
          <span className="bg-dark-900 px-4 py-2 rounded">Value of bread</span>
          <span className="text-dark-500">→</span>
          <span className="bg-dark-900 px-4 py-2 rounded">Value of oven</span>
          <span className="text-dark-500">→</span>
          <span className="bg-dark-900 px-4 py-2 rounded">Value of steel</span>
        </div>
        <p className="text-dark-400 text-sm mt-4 text-center">
          Value flows backward from consumers' goods to higher-order goods.
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>Derived demand:</strong> The demand for factors of production is derived
          from the demand for the consumers' goods they help produce. If bread becomes
          more valued, so do ovens, flour mills, and wheat farms.
        </p>
      </Callout>

      {/* Section 5: Present and Future Goods */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Present Goods and Future Goods</h2>

      <p className="my-4">
        Because production takes time, there's a fundamental distinction between
        <strong className="text-emerald-400"> present goods</strong> (consumers' goods available now)
        and <strong className="text-emerald-400"> future goods</strong> (claims on consumers' goods
        that will be available later).
      </p>

      <CapitalHierarchy />

      <p className="my-4">
        Capital goods are <em>embodied future goods</em>. A machine today is valuable because
        it will help produce consumers' goods in the future. The rate at which future goods
        exchange for present goods is determined by time preference—and this ratio is the
        basis of the interest rate.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Present Goods</h4>
          <p className="text-sm text-dark-300">
            Consumers' goods available now. Money in hand. Immediate satisfaction.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Future Goods</h4>
          <p className="text-sm text-dark-300">
            Claims on future consumption. Capital goods, loans, investments. Delayed satisfaction.
          </p>
        </Card>
      </CardGrid>

      {/* Structure of Production Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Structure of Production: Summary</h2>

      <p className="my-4">
        Rothbard presents the economy as a complex, time-structured process where:
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            point: 'Resources flow from higher to lower orders',
            detail: 'Land and labor are combined with capital goods to produce goods closer to consumption.',
          },
          {
            point: 'Time preference determines the structure\'s length',
            detail: 'Higher time preference → shorter structure. Lower time preference → more saving → longer, more productive structure.',
          },
          {
            point: 'Saving enables capital accumulation',
            detail: 'Abstaining from consumption frees resources to build tools and machines.',
          },
          {
            point: 'Capital increases productivity',
            detail: 'Roundabout methods using capital goods produce more output per unit of labor.',
          },
        ].map(({ point, detail }, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full text-white font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{point}</p>
              <p className="text-sm text-dark-400">{detail}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="success">
        <p>
          <strong>Why this matters:</strong> Understanding the temporal structure of production
          is essential for grasping the Austrian theory of the business cycle. Artificial
          credit expansion distorts this structure, leading to boom and bust.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              Production has a <strong>temporal structure</strong>. Goods are classified by
              their "order" or distance from final consumption.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Roundabout methods</strong> using capital goods are more productive,
              but require waiting. Time is a factor of production.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Capital accumulation requires saving</strong>. There is no shortcut—
              someone must abstain from consumption.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              Capital goods derive their value from consumers' goods through the
              <strong> imputation principle</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              The distinction between <strong>present and future goods</strong> is fundamental.
              Interest is the price of trading present for future goods.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 6 examines <strong>The Rate of Interest</strong>—how time preference determines
        interest rates, how the "time market" coordinates saving and investment, and the
        crucial role of interest in allocating resources over time.
      </p>
    </LessonLayout>
  );
}
