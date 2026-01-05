import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing catallactics within praxeology
function CatallacticsDemo() {
  const [selected, setSelected] = useState<'praxeology' | 'catallactics'>('praxeology');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Praxeology and Catallactics</h4>
      <p className="text-dark-400 text-sm mb-4">
        Catallactics is a subset of the broader science of human action.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSelected('praxeology')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            selected === 'praxeology'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Praxeology (Broad)
        </button>
        <button
          onClick={() => setSelected('catallactics')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            selected === 'catallactics'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Catallactics (Narrow)
        </button>
      </div>

      {selected === 'praxeology' ? (
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <h5 className="text-blue-400 font-medium mb-3">The General Science of Human Action</h5>
          <p className="text-dark-300 text-sm mb-4">
            Praxeology studies ALL purposeful behavior—every instance of choosing means to achieve ends.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-200 text-sm">Robinson Crusoe alone on an island</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-200 text-sm">A monk in silent contemplation</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-200 text-sm">A child choosing toys</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-200 text-sm">Market transactions</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">Economics in the Narrower Sense</h5>
          <p className="text-dark-300 text-sm mb-4">
            Catallactics analyzes "actions conducted on the basis of monetary calculation."
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-200 text-sm">Market prices and their formation</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-200 text-sm">Wages, interest, and profits</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-200 text-sm">Production and exchange</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-200 text-sm">Money and credit</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center relative">
            <span className="text-blue-400 text-xs font-medium">Praxeology</span>
            <div className="absolute w-20 h-20 rounded-full bg-primary-500/30 border-2 border-primary-500 flex items-center justify-center">
              <span className="text-primary-400 text-xs font-medium text-center">Catallactics</span>
            </div>
          </div>
          <p className="text-dark-400 text-sm flex-1">
            Catallactics (economics) is embedded within praxeology. To understand market phenomena,
            we must understand the general laws of action first.
          </p>
        </div>
      </div>
    </div>
  );
}

// Interactive demo showing imaginary constructions
function ImaginaryConstructionsDemo() {
  const [construction, setConstruction] = useState<number>(0);

  const constructions = [
    {
      name: 'Robinson Crusoe Economy',
      description: 'A single person alone, making choices without exchange',
      purpose: 'Isolates the logic of choice from social complexity',
      example: 'Should I fish or hunt today? Which will satisfy more needs?',
      color: 'amber',
    },
    {
      name: 'Pure Market Economy',
      description: 'Voluntary exchange without government interference',
      purpose: 'Shows how markets coordinate production and consumption',
      example: 'How do prices form? How are resources allocated?',
      color: 'green',
    },
    {
      name: 'Evenly Rotating Economy',
      description: 'Perfect certainty where nothing ever changes',
      purpose: 'Distinguishes interest from entrepreneurial profit',
      example: 'Every day is identical; all prices are at equilibrium',
      color: 'purple',
    },
    {
      name: 'Autistic Exchange',
      description: 'Individual exchanging present for future conditions',
      purpose: 'Foundation for understanding interpersonal exchange',
      example: 'A farmer plants seeds (sacrifice now) for harvest (gain later)',
      color: 'blue',
    },
  ];

  const colors: Record<string, string> = {
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    green: 'bg-green-500/10 border-green-500/30 text-green-400',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  };

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Method of Imaginary Constructions</h4>
      <p className="text-dark-400 text-sm mb-4">
        Since economists cannot run laboratory experiments, they use mental models to isolate and analyze specific aspects of action.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {constructions.map((c, i) => (
          <button
            key={i}
            onClick={() => setConstruction(i)}
            className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
              construction === i
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className={`rounded-lg p-4 border ${colors[constructions[construction].color]}`}>
        <h5 className="font-medium mb-3">{constructions[construction].name}</h5>
        <div className="space-y-3">
          <div className="bg-dark-900 rounded-lg p-3">
            <span className="text-dark-400 text-xs block mb-1">Description</span>
            <span className="text-dark-200 text-sm">{constructions[construction].description}</span>
          </div>
          <div className="bg-dark-900 rounded-lg p-3">
            <span className="text-dark-400 text-xs block mb-1">Purpose</span>
            <span className="text-dark-200 text-sm">{constructions[construction].purpose}</span>
          </div>
          <div className="bg-dark-900 rounded-lg p-3">
            <span className="text-dark-400 text-xs block mb-1">Example Question</span>
            <span className="text-dark-200 text-sm italic">"{constructions[construction].example}"</span>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h5 className="text-dark-200 font-medium mb-2">Why Use Imaginary Constructions?</h5>
        <ul className="space-y-2 text-dark-300 text-sm">
          <li>• Real economies are too complex to analyze directly</li>
          <li>• We cannot run controlled experiments on societies</li>
          <li>• Abstractions let us isolate cause and effect</li>
          <li>• Validity comes from logical deduction, not empirical testing</li>
        </ul>
      </div>
    </div>
  );
}

// Interactive demo showing the pure market economy
function PureMarketDemo() {
  const [showAssumptions, setShowAssumptions] = useState(true);

  const assumptions = [
    { icon: '🏛️', title: 'Private Property', desc: 'Individuals own and control means of production' },
    { icon: '🤝', title: 'Voluntary Exchange', desc: 'All transactions are consensual, not coerced' },
    { icon: '⚖️', title: 'Rule of Law', desc: 'Government protects property and contracts' },
    { icon: '🚫', title: 'No Interference', desc: 'No price controls, tariffs, subsidies, or regulations' },
    { icon: '💰', title: 'Free Prices', desc: 'Prices, wages, and interest rates determined by markets' },
  ];

  const purposes = [
    { icon: '📐', title: 'Benchmark', desc: 'Provides baseline for analyzing interventions' },
    { icon: '🔍', title: 'Isolation', desc: 'Shows market processes without confounding factors' },
    { icon: '🎯', title: 'Comparison', desc: 'Reveals effects of departures from pure markets' },
    { icon: '📚', title: 'Pedagogy', desc: 'Must understand the system before studying disturbances' },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Pure Market Economy</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setShowAssumptions(true)}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            showAssumptions
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Assumptions
        </button>
        <button
          onClick={() => setShowAssumptions(false)}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            !showAssumptions
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Why Study It?
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {(showAssumptions ? assumptions : purposes).map((item, i) => (
          <div key={i} className="bg-dark-900 rounded-lg p-4">
            <span className="text-2xl block mb-2">{item.icon}</span>
            <h5 className="text-dark-200 font-medium text-sm mb-1">{item.title}</h5>
            <p className="text-dark-400 text-xs">{item.desc}</p>
          </div>
        ))}
      </div>

      <Callout type="insight" title="Not a Utopia">
        The pure market economy is not an ideological goal or a claim about history. It's a
        <em> methodological tool</em>—a conceptual framework for understanding how markets work
        before analyzing how interventions distort them.
      </Callout>
    </div>
  );
}

// Interactive demo showing states of rest
function StatesOfRestDemo() {
  const [state, setState] = useState<'plain' | 'final'>('plain');
  const [time, setTime] = useState(0);

  const plainRest = {
    title: 'Plain State of Rest',
    description: 'A momentary pause when no one wants to trade at current prices',
    isImaginary: false,
    example: 'At $5, all buyers and sellers who want to trade have traded. But this is temporary—new buyers and sellers will arrive.',
  };

  const finalRest = {
    title: 'Final State of Rest',
    description: 'The hypothetical end-point toward which the market tends',
    isImaginary: true,
    example: 'If all disturbances stopped and all adjustments completed, prices would reach this level. But new disturbances always arise.',
  };

  const current = state === 'plain' ? plainRest : finalRest;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">States of Rest</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setState('plain')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            state === 'plain'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Plain State of Rest
        </button>
        <button
          onClick={() => setState('final')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            state === 'final'
              ? 'bg-purple-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Final State of Rest
        </button>
      </div>

      <div className={`rounded-lg p-4 border ${
        state === 'plain'
          ? 'bg-blue-500/10 border-blue-500/30'
          : 'bg-purple-500/10 border-purple-500/30'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <h5 className={`font-medium ${state === 'plain' ? 'text-blue-400' : 'text-purple-400'}`}>
            {current.title}
          </h5>
          <span className={`text-xs px-2 py-1 rounded ${
            current.isImaginary
              ? 'bg-purple-500/20 text-purple-400'
              : 'bg-blue-500/20 text-blue-400'
          }`}>
            {current.isImaginary ? 'Imaginary Construction' : 'Real Phenomenon'}
          </span>
        </div>
        <p className="text-dark-300 text-sm mb-4">{current.description}</p>
        <div className="bg-dark-900 rounded-lg p-3">
          <span className="text-dark-400 text-xs block mb-1">Example</span>
          <p className="text-dark-200 text-sm">{current.example}</p>
        </div>
      </div>

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h5 className="text-dark-200 font-medium mb-3">Market Price Movement</h5>
        <div className="relative h-16 bg-dark-800 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-0.5 bg-dark-600" />
          </div>
          {/* Plain states (temporary pauses) */}
          <div className="absolute top-2 left-[15%] flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-blue-400 text-xs mt-1">Rest</span>
          </div>
          <div className="absolute top-2 left-[40%] flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-blue-400 text-xs mt-1">Rest</span>
          </div>
          <div className="absolute top-2 left-[65%] flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-blue-400 text-xs mt-1">Rest</span>
          </div>
          {/* Final state (never reached) */}
          <div className="absolute top-2 right-4 flex flex-col items-center opacity-50">
            <div className="w-3 h-3 rounded-full bg-purple-500 border-2 border-dashed border-purple-300" />
            <span className="text-purple-400 text-xs mt-1">Final</span>
          </div>
        </div>
        <p className="text-dark-400 text-xs mt-2 text-center">
          Plain states of rest are actually reached; the final state is only approached but never attained.
        </p>
      </div>
    </div>
  );
}

// Interactive demo showing the evenly rotating economy
function EvenlyRotatingEconomyDemo() {
  const [showParadox, setShowParadox] = useState(false);

  const characteristics = [
    'All prices have reached their final level',
    'Every day is identical to the last',
    'No uncertainty—everyone knows the future perfectly',
    'Production continues but nothing changes',
    'No profits or losses—only interest remains',
    'Entrepreneurs merely execute known routines',
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Evenly Rotating Economy (ERE)</h4>
      <p className="text-dark-400 text-sm mb-4">
        The most important—and most controversial—imaginary construction in economics.
      </p>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <h5 className="text-dark-200 font-medium mb-3">Characteristics</h5>
        <div className="grid md:grid-cols-2 gap-2">
          {characteristics.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-purple-400">⟳</span>
              <span className="text-dark-300 text-sm">{c}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setShowParadox(!showParadox)}
        className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-500 transition-colors mb-4"
      >
        {showParadox ? 'Hide' : 'Reveal'} The Paradox
      </button>

      {showParadox && (
        <div className="space-y-4 animate-fadeIn">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h5 className="text-red-400 font-medium mb-2">The ERE Is Self-Contradictory</h5>
            <ul className="space-y-2 text-dark-300 text-sm">
              <li>• Perfect certainty would eliminate the need to act</li>
              <li>• If the future is known, there's nothing to decide</li>
              <li>• Money itself would be unnecessary (why hold cash if you know exactly when you'll need to spend?)</li>
              <li>• Yet we're trying to analyze monetary phenomena!</li>
            </ul>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <h5 className="text-green-400 font-medium mb-2">Why Use It Anyway?</h5>
            <p className="text-dark-300 text-sm mb-3">
              Despite its contradictions, the ERE is indispensable for one crucial purpose:
            </p>
            <div className="bg-dark-900 rounded-lg p-3">
              <p className="text-dark-200 text-sm">
                <strong className="text-green-400">Separating interest from profit.</strong> In the ERE,
                there are no entrepreneurial profits or losses—only pure interest remains. This lets us
                see that interest exists independently of entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        "The imaginary construction of an evenly rotating economy... is indispensable for thinking through
        the problems of originary interest."
      </p>
    </div>
  );
}

// Interactive demo clarifying profit maximization
function ProfitMaximizationDemo() {
  const [scenario, setScenario] = useState<'business' | 'consumer'>('business');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">What "Profit Maximization" Really Means</h4>
      <p className="text-dark-400 text-sm mb-4">
        Critics claim economics assumes people only care about money. This misunderstands the theory.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setScenario('business')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'business'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          💼 As a Business Owner
        </button>
        <button
          onClick={() => setScenario('consumer')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'consumer'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          🛒 As a Consumer
        </button>
      </div>

      {scenario === 'business' ? (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">Constrained by Consumer Sovereignty</h5>
          <p className="text-dark-300 text-sm mb-4">
            The entrepreneur <em>must</em> pursue profit because that's the only way to serve consumers
            and remain in business. Profit signals success at satisfying wants.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-2xl block mb-2">✓</span>
              <h6 className="text-dark-200 text-sm font-medium">What Matters</h6>
              <p className="text-dark-400 text-xs">Serving consumers better than competitors</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-2xl block mb-2">📊</span>
              <h6 className="text-dark-200 text-sm font-medium">Profit Signals</h6>
              <p className="text-dark-400 text-xs">Resources are being used well</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-3">Free to Pursue Any Values</h5>
          <p className="text-dark-300 text-sm mb-4">
            When spending your own money, you pursue whatever goals you value—money is just a means.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-2xl block mb-2">🎨</span>
              <h6 className="text-dark-200 text-sm font-medium">Pay More for Quality</h6>
              <p className="text-dark-400 text-xs">Not irrational—just different preferences</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-2xl block mb-2">❤️</span>
              <h6 className="text-dark-200 text-sm font-medium">Choose Based on Values</h6>
              <p className="text-dark-400 text-xs">Ethics, aesthetics, loyalty, convenience</p>
            </div>
          </div>
          <p className="text-dark-300 text-sm mt-4">
            Paying premium prices for preferred goods isn't an exception to economic theory—it <em>is</em>
            economic theory. You're maximizing satisfaction, not necessarily minimizing spending.
          </p>
        </div>
      )}

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">The actual claim:</strong> "Other things equal, a seller seeks
          the highest price possible, while the buyer seeks the lowest." This is nearly tautological—it
          just means people prefer better outcomes to worse ones.
        </p>
      </div>
    </div>
  );
}

// Interactive demo about scarcity
function ScarcityDemo() {
  const [view, setView] = useState<'real' | 'denial'>('real');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Reality of Scarcity</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('real')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'real'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ✓ Scarcity Is Real
        </button>
        <button
          onClick={() => setView('denial')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'denial'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ✗ Scarcity Denial
        </button>
      </div>

      {view === 'real' ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-3">Why Economics Must Address Scarcity</h5>
          <div className="space-y-3">
            <div className="bg-dark-900 rounded-lg p-3">
              <p className="text-dark-200 text-sm">
                <strong>Time is scarce</strong> — Every hour spent on one task is unavailable for others
              </p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <p className="text-dark-200 text-sm">
                <strong>Resources are limited</strong> — Steel used for cars can't also be used for buildings
              </p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <p className="text-dark-200 text-sm">
                <strong>Wants exceed means</strong> — We always desire more than we can achieve
              </p>
            </div>
          </div>
          <p className="text-dark-400 text-sm mt-4">
            Scarcity isn't a social construct or historical accident—it's "the problem man has to face"
            due to the fundamental nature of reality.
          </p>
        </div>
      ) : (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">Failed Attempts to Deny Scarcity</h5>
          <div className="space-y-3">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-xs block mb-1">Marxist View</span>
              <p className="text-dark-200 text-sm">
                "Scarcity is artificial—it's created by capitalism to extract profits."
              </p>
              <p className="text-red-400 text-xs mt-1">
                ✗ Even under socialism, you can't have everything at once
              </p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-xs block mb-1">Inflationist View</span>
              <p className="text-dark-200 text-sm">
                "We can print money to eliminate scarcity of purchasing power."
              </p>
              <p className="text-red-400 text-xs mt-1">
                ✗ Printing money doesn't create real goods and services
              </p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-xs block mb-1">Post-Scarcity Fantasy</span>
              <p className="text-dark-200 text-sm">
                "Technology will eventually make everything abundant and free."
              </p>
              <p className="text-red-400 text-xs mt-1">
                ✗ Time remains scarce; new wants always emerge
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Chapter XIV opens Part Four: <em>Catallactics or Economics of the Market Society</em>. Before
        analyzing markets, Mises clarifies what catallactics studies and how economists should approach
        it. This methodological foundation is essential for what follows.
      </p>

      <Callout type="definition" title="Catallactics">
        "The analysis of those actions which are conducted on the basis of monetary calculation."
        This is economics in the narrower sense—the study of market phenomena.
      </Callout>

      {/* Delimitation of Problems */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Delimitation of Catallactic Problems</h2>

      <p className="text-dark-200 mb-4">
        Catallactics is embedded within praxeology—the general science of human action. While praxeology
        studies all purposeful behavior, catallactics focuses specifically on actions involving monetary
        calculation: market prices, wages, interest, profits, production, and exchange.
      </p>

      <CatallacticsDemo />

      <p className="text-dark-200 mb-4">
        The distinguishing feature is not motives (people act for countless reasons) or the material vs.
        immaterial nature of goods (a doctor's advice is as "economic" as steel). What marks catallactic
        phenomena is the use of <em>monetary calculation</em>.
      </p>

      <ScarcityDemo />

      {/* Method of Imaginary Constructions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Method of Imaginary Constructions</h2>

      <p className="text-dark-200 mb-4">
        Economists cannot run laboratory experiments. We can't create two identical economies and change
        one variable to see what happens. Instead, we use <strong className="text-primary-400">imaginary
        constructions</strong>—mental models that isolate specific aspects of action for analysis.
      </p>

      <ImaginaryConstructionsDemo />

      <CardGrid>
        <Card title="Not Descriptions of Reality" variant="default">
          Imaginary constructions don't claim to describe any actual or possible state of affairs.
          They're thinking tools, not predictions.
        </Card>
        <Card title="Validity Through Logic" variant="primary">
          We verify imaginary constructions not by empirical observation but by examining whether
          our deductions are logically sound.
        </Card>
      </CardGrid>

      {/* The Pure Market Economy */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Pure Market Economy</h2>

      <p className="text-dark-200 mb-4">
        The most important imaginary construction for catallactics is the <em>pure market economy</em>—a
        system of voluntary exchange with private property and no government interference in prices,
        production, or exchange.
      </p>

      <PureMarketDemo />

      <p className="text-dark-200 mb-4">
        Economists study the pure market not because they believe such a system has ever existed or should
        exist, but because understanding how markets work <em>without</em> interference is necessary before
        analyzing the effects of interference. It's a methodological necessity, not an ideological stance.
      </p>

      <Callout type="insight" title="Critics Use the Same Method">
        Those who criticize economists for studying "unrealistic" pure markets use the same method themselves.
        To argue that minimum wages help workers, you must first understand how wages would be determined
        without intervention. There's no escaping the comparative approach.
      </Callout>

      {/* States of Rest */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">States of Rest</h2>

      <p className="text-dark-200 mb-4">
        Mises distinguishes between different "states of rest" that help us understand market dynamics:
      </p>

      <StatesOfRestDemo />

      <CardGrid>
        <Card title="Prices Tend Toward Final State" variant="default">
          Market prices are always moving toward the "final state" that would prevail if all adjustments
          were complete. But new disturbances constantly arise.
        </Card>
        <Card title="Never Actually Reached" variant="primary">
          Like a dog chasing a car, the market is always pursuing equilibrium but never catches it.
          The final state is a theoretical construct, not a destination.
        </Card>
      </CardGrid>

      {/* The Evenly Rotating Economy */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Evenly Rotating Economy</h2>

      <p className="text-dark-200 mb-4">
        The most abstract imaginary construction is the <em>evenly rotating economy</em> (ERE)—a state
        of perfect certainty where nothing ever changes. This strange thought experiment serves a specific
        analytical purpose despite its self-contradictory nature.
      </p>

      <EvenlyRotatingEconomyDemo />

      <p className="text-dark-200 mb-4">
        In a world of perfect certainty, there would be no entrepreneurial profits or losses—only pure
        interest would remain. The ERE lets us isolate interest as a phenomenon distinct from entrepreneurship.
        We'll explore this crucial distinction in later chapters.
      </p>

      {/* Profit Maximization */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">On "Profit Maximization"</h2>

      <p className="text-dark-200 mb-4">
        A common objection to economics is that it assumes people only care about money. This fundamentally
        misunderstands what economists mean by "profit maximization."
      </p>

      <ProfitMaximizationDemo />

      <p className="text-dark-200 mb-4">
        Economics doesn't assume people are selfish or materialistic. It observes that people prefer
        outcomes they value more over outcomes they value less. What they value is entirely up to them.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Catallactics is the study of market phenomena—actions conducted on the basis of monetary calculation.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Economists use imaginary constructions (mental models) because they cannot run laboratory experiments on societies.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>The pure market economy is an analytical tool, not an ideological goal. We must understand markets before analyzing interventions.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The plain state of rest (temporary market pause) is real; the final state of rest (all adjustments complete) is only approached, never reached.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The evenly rotating economy (perfect certainty, no change) is self-contradictory but useful for distinguishing interest from profit.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">6.</span>
            <span>"Profit maximization" doesn't mean people only care about money—it means they prefer better outcomes to worse ones.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">7.</span>
            <span>Scarcity is real and fundamental—not a social construct or historical accident that can be legislated or inflated away.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        With our methodological tools now clear, Chapter XV examines <em>The Market</em> itself—its
        characteristics, the role of capital goods and capital, the meaning of "capitalism," and the
        crucial concept of consumer sovereignty. We begin the detailed analysis of how markets actually
        coordinate human action.
      </p>
    </LessonLayout>
  );
}
