import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing autistic vs interpersonal exchange
function ExchangeTypesDemo() {
  const [selectedType, setSelectedType] = useState<'autistic' | 'interpersonal'>('autistic');

  const examples = {
    autistic: [
      {
        scenario: 'The Isolated Hunter',
        gives: 'Leisure time + ammunition',
        receives: 'Food (the killed animal)',
        explanation: 'The hunter exchanges his time and resources for sustenance, with no other person involved.',
      },
      {
        scenario: 'Personal Study',
        gives: 'Leisure + mental effort',
        receives: 'Knowledge and skills',
        explanation: 'You sacrifice relaxation to gain understanding—an exchange entirely within yourself.',
      },
      {
        scenario: 'Exercise',
        gives: 'Comfort + time + energy',
        receives: 'Health + fitness',
        explanation: 'Trading present comfort for future well-being, no cooperation with others required.',
      },
    ],
    interpersonal: [
      {
        scenario: 'Market Purchase',
        gives: 'Money',
        receives: 'Goods or services',
        explanation: 'Both buyer and seller expect to benefit—mutuality defines the transaction.',
      },
      {
        scenario: 'Employment',
        gives: 'Labor and time',
        receives: 'Wages',
        explanation: 'Worker and employer each gain from the arrangement; neither would agree otherwise.',
      },
      {
        scenario: 'Gift with Expectation',
        gives: 'A present',
        receives: 'Goodwill, reciprocity, or favor',
        explanation: 'Even gifts can be interpersonal exchange when given with expectation of return.',
      },
    ],
  };

  const current = examples[selectedType];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Two Types of Exchange</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSelectedType('autistic')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedType === 'autistic'
              ? 'bg-amber-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Autistic Exchange
        </button>
        <button
          onClick={() => setSelectedType('interpersonal')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedType === 'interpersonal'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Interpersonal Exchange
        </button>
      </div>

      <div className={`rounded-lg p-4 border ${
        selectedType === 'autistic'
          ? 'bg-amber-500/10 border-amber-500/30'
          : 'bg-primary-500/10 border-primary-500/30'
      }`}>
        <p className="text-dark-300 text-sm mb-4">
          {selectedType === 'autistic'
            ? 'Action performed by an individual without reference to cooperation with others. The exchange happens within the actor.'
            : 'Action involving cooperation between two or more individuals. Mutuality emerges—each party gives to receive.'}
        </p>

        <div className="space-y-3">
          {current.map((ex, i) => (
            <div key={i} className="bg-dark-900 rounded-lg p-4">
              <h5 className="text-dark-100 font-medium mb-2">{ex.scenario}</h5>
              <div className="grid md:grid-cols-2 gap-3 mb-2">
                <div className="text-sm">
                  <span className="text-red-400">Gives up:</span>
                  <span className="text-dark-300 ml-2">{ex.gives}</span>
                </div>
                <div className="text-sm">
                  <span className="text-green-400">Receives:</span>
                  <span className="text-dark-300 ml-2">{ex.receives}</span>
                </div>
              </div>
              <p className="text-dark-400 text-xs">{ex.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        All action is exchange—giving up something less satisfactory for something more satisfactory.
        The question is whether others are involved.
      </p>
    </div>
  );
}

// Interactive demo showing the do ut des principle
function DoUtDesDemo() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'The Baker',
      actor: '🧑‍🍳',
      action: 'Bakes bread',
      motivation: 'Not from love of strangers, but to earn income',
      result: 'Bread becomes available',
    },
    {
      title: 'The Customer',
      actor: '🛒',
      action: 'Pays for bread',
      motivation: 'Wants bread more than the money',
      result: 'Baker receives payment',
    },
    {
      title: 'Mutual Benefit',
      actor: '🤝',
      action: 'Exchange completed',
      motivation: 'Both parties are better off',
      result: 'Society is woven together',
    },
  ];

  const current = steps[step];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-2">Do Ut Des: I Give So That You May Give</h4>
      <p className="text-dark-400 text-sm mb-4">
        The fundamental social formula. Each party gives in order to receive.
      </p>

      <div className="flex gap-2 mb-6 justify-center">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-10 h-10 rounded-full text-lg transition-colors ${
              step === i
                ? 'bg-primary-600 text-white'
                : step > i
                ? 'bg-green-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {steps[i].actor}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-6 text-center">
        <span className="text-5xl mb-4 block">{current.actor}</span>
        <h5 className="text-primary-400 font-medium text-lg mb-2">{current.title}</h5>
        <p className="text-dark-200 mb-3">{current.action}</p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-dark-800 rounded-lg p-3">
            <span className="text-amber-400 block mb-1">Motivation:</span>
            <span className="text-dark-300">{current.motivation}</span>
          </div>
          <div className="bg-dark-800 rounded-lg p-3">
            <span className="text-green-400 block mb-1">Result:</span>
            <span className="text-dark-300">{current.result}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-4 py-2 bg-dark-700 rounded-lg text-dark-300 hover:bg-dark-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className="px-4 py-2 bg-primary-600 rounded-lg text-white hover:bg-primary-500 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

// Interactive demo comparing contractual vs hegemonic bonds
function BondsComparisonDemo() {
  const [selectedBond, setSelectedBond] = useState<'contractual' | 'hegemonic'>('contractual');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Two Types of Social Bonds</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSelectedBond('contractual')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedBond === 'contractual'
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Contractual Bonds
        </button>
        <button
          onClick={() => setSelectedBond('hegemonic')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedBond === 'hegemonic'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Hegemonic Bonds
        </button>
      </div>

      {selectedBond === 'contractual' ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-3">Contractual Cooperation</h5>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Relationship:</span>
              <p className="text-dark-200">Symmetrical—all parties are equals</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Exchange:</span>
              <p className="text-dark-200">Definite goods for definite goods</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Authority:</span>
              <p className="text-dark-200">No one commands; all agree voluntarily</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Freedom:</span>
              <p className="text-dark-200">Each retains autonomy within the contract</p>
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-3">
            <span className="text-dark-400 text-sm">Examples:</span>
            <p className="text-dark-300 text-sm mt-1">
              Market transactions, business partnerships, voluntary associations, employment contracts
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">Hegemonic Cooperation</h5>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Relationship:</span>
              <p className="text-dark-200">Asymmetrical—directors and subordinates</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Exchange:</span>
              <p className="text-dark-200">Indefinite services for indefinite assignment</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Authority:</span>
              <p className="text-dark-200">One commands; others obey</p>
            </div>
            <div className="bg-dark-900 rounded-lg p-3">
              <span className="text-dark-400 text-sm">Freedom:</span>
              <p className="text-dark-200">Subordinates have no autonomous sphere</p>
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-3">
            <span className="text-dark-400 text-sm">Examples:</span>
            <p className="text-dark-300 text-sm mt-1">
              Military command, state bureaucracy, traditional family structure, prison systems
            </p>
          </div>
        </div>
      )}

      <Callout type="insight" title="Civilization's Foundation">
        "The achievements of Western civilization are the result of men who have cooperated according
        to the pattern of contractual coordination." Hegemonic systems can accomplish some things,
        but the wealth and freedom of modern life arose from contractual society.
      </Callout>
    </div>
  );
}

// Interactive demo on freedom in contractual society
function FreedomDemo() {
  const [perspective, setPerspective] = useState<'contractual' | 'hegemonic'>('contractual');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Freedom and Society</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setPerspective('contractual')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            perspective === 'contractual'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          In Contractual Society
        </button>
        <button
          onClick={() => setPerspective('hegemonic')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            perspective === 'hegemonic'
              ? 'bg-amber-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          In Hegemonic Society
        </button>
      </div>

      {perspective === 'contractual' ? (
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-primary-400 font-medium mb-2">The Rule of Law</h5>
            <p className="text-dark-300 text-sm">
              Clear, known limits exist on what anyone—including government—can demand. Within these
              boundaries, individuals are free to pursue their own goals.
            </p>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-primary-400 font-medium mb-2">Service Is Mutual</h5>
            <p className="text-dark-300 text-sm">
              "Man serves in order to be served." You work not because commanded, but because the
              arrangement benefits you. You are free to seek other arrangements.
            </p>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-primary-400 font-medium mb-2">Natural Constraints Only</h5>
            <p className="text-dark-300 text-sm">
              The only restraints are natural laws and the requirement not to harm others. No one
              dictates how you must live within these limits.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-amber-400 font-medium mb-2">Arbitrary Commands</h5>
            <p className="text-dark-300 text-sm">
              The director decides what subordinates must do. Rules can change at will. No protected
              sphere of autonomy exists.
            </p>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-amber-400 font-medium mb-2">Obey Without Questioning</h5>
            <p className="text-dark-300 text-sm">
              Subordinates must follow orders regardless of personal preference. The director's will
              is the only relevant factor.
            </p>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-amber-400 font-medium mb-2">Choice: Submit or Rebel</h5>
            <p className="text-dark-300 text-sm">
              Even here, no one can be physically forced to remain forever. But the only alternative
              to obedience is open rebellion—with all its risks.
            </p>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        "Liberty and freedom are the conditions of man within a contractual society."
      </p>
    </div>
  );
}

// Interactive demo on calculative action
function CalculativeActionDemo() {
  const [hasCalculation, setHasCalculation] = useState(true);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Calculative Action</h4>
      <p className="text-dark-400 text-sm mb-4">
        The ability to use arithmetic—to calculate costs, prices, and profits—transforms what is possible.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setHasCalculation(true)}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            hasCalculation
              ? 'bg-green-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          With Calculation
        </button>
        <button
          onClick={() => setHasCalculation(false)}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            !hasCalculation
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Without Calculation
        </button>
      </div>

      {hasCalculation ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-3">Modern Economic Calculation</h5>

          <div className="space-y-3">
            <div className="bg-dark-900 rounded-lg p-3">
              <div className="flex justify-between mb-2">
                <span className="text-dark-300">Revenue from product</span>
                <span className="text-green-400 font-mono">$10,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-dark-300">Cost of materials</span>
                <span className="text-red-400 font-mono">−$4,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-dark-300">Labor costs</span>
                <span className="text-red-400 font-mono">−$3,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-dark-300">Other expenses</span>
                <span className="text-red-400 font-mono">−$1,500</span>
              </div>
              <div className="border-t border-dark-700 pt-2 flex justify-between font-medium">
                <span className="text-dark-100">Profit</span>
                <span className="text-green-400 font-mono">$1,500</span>
              </div>
            </div>

            <p className="text-dark-300 text-sm">
              With money prices, we can <em>calculate</em> whether an action is profitable. Resources
              can be directed to their most valued uses. Complex production becomes possible.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-3">Without Economic Calculation</h5>

          <div className="space-y-3">
            <div className="bg-dark-900 rounded-lg p-3">
              <div className="flex justify-between mb-2">
                <span className="text-dark-300">Output produced</span>
                <span className="text-dark-400 font-mono">??? units</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-dark-300">Resources consumed</span>
                <span className="text-dark-400 font-mono">??? value</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-dark-300">Alternative uses foregone</span>
                <span className="text-dark-400 font-mono">??? options</span>
              </div>
              <div className="border-t border-dark-700 pt-2 flex justify-between font-medium">
                <span className="text-dark-100">Net benefit</span>
                <span className="text-red-400 font-mono">Unknowable</span>
              </div>
            </div>

            <p className="text-dark-300 text-sm">
              Without common prices, we cannot compare heterogeneous goods. Is iron ore worth more as
              cars or refrigerators? Without calculation, we're groping in the dark.
            </p>
          </div>
        </div>
      )}

      <Callout type="warning" title="The Economic Calculation Problem">
        This is why socialist central planning fails. Without market prices, planners cannot calculate
        whether they are using resources efficiently. This insight will be developed fully in later chapters.
      </Callout>
    </div>
  );
}

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Having established that society is cooperation and that cooperation benefits everyone,
        Mises now examines the mechanism of social cooperation: <em>exchange</em>. This chapter introduces
        crucial distinctions that will guide the rest of the book.
      </p>

      <Callout type="definition" title="The Exchange Relation">
        "The exchange relation is the fundamental social relation. Interpersonal exchange of goods
        and services weaves the bond which unites men into society."
      </Callout>

      {/* Autistic vs Interpersonal Exchange */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Autistic and Interpersonal Exchange</h2>

      <p className="text-dark-200 mb-4">
        As we learned earlier, all action is exchange—giving up something less satisfactory for something
        more satisfactory. But Mises distinguishes between two fundamentally different types:
      </p>

      <ExchangeTypesDemo />

      <CardGrid>
        <Card title="Autistic Exchange" variant="warning">
          The isolated individual exchanging with nature or within himself. "The hunter exchanges
          leisure and a cartridge for food." No other person is involved.
        </Card>
        <Card title="Interpersonal Exchange" variant="primary">
          Exchange involving cooperation between individuals. "Man gives to other men in order to
          receive from them. Mutuality emerges."
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4">
        The transition from autistic to interpersonal exchange was, conceptually, "a jump into something
        entirely new and essentially different." Though the historical evolution may have been gradual,
        there is no middle ground: either others are involved, or they are not.
      </p>

      {/* Do Ut Des */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Do Ut Des: The Social Formula</h2>

      <p className="text-dark-200 mb-4">
        The Latin phrase <em>do ut des</em>—"I give so that you may give"—captures the essence of
        interpersonal exchange. Where there is no intentional mutuality, no expectation of reciprocal
        benefit, there is only autistic exchange.
      </p>

      <DoUtDesDemo />

      <Callout type="insight" title="One-Sided Gifts">
        Making a present without any expectation of return (from the receiver or third parties) is
        autistic exchange. But giving a gift <em>in order to</em> acquire favor, win friendship, or
        receive reciprocal gifts is already interpersonal exchange.
      </Callout>

      {/* Contractual and Hegemonic Bonds */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Contractual and Hegemonic Bonds</h2>

      <p className="text-dark-200 mb-4">
        Within interpersonal exchange, Mises identifies two fundamentally different patterns of
        cooperation. This distinction has profound implications for understanding social organization.
      </p>

      <BondsComparisonDemo />

      <p className="text-dark-200 mb-4">
        In contractual bonds, "John has the same relation to Tom as Tom has to John." Both are parties
        to agreements from which both expect to benefit. In hegemonic bonds, "there is the man who
        commands and there are those who obey his orders."
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Can Hegemonic Systems Coexist?</h4>
        <p className="text-dark-300 mb-4">
          Mises observes that contractual societies can coexist peacefully—trade links them together.
          But hegemonic systems tend toward conflict: each hegemon seeks to expand its domain,
          and there is no natural boundary to command.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-green-400 font-medium mb-2">Contractual Societies</h5>
            <p className="text-dark-400 text-sm">
              Can trade, cooperate, and coexist. Conflict hurts all parties.
            </p>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-red-400 font-medium mb-2">Hegemonic Systems</h5>
            <p className="text-dark-400 text-sm">
              Each seeks dominance. Coexistence is unstable at best.
            </p>
          </div>
        </div>
      </div>

      {/* Freedom in Society */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Freedom in Contractual Society</h2>

      <p className="text-dark-200 mb-4">
        The terms "freedom" and "liberty" have meaning only in the context of human relations.
        Mises argues that genuine freedom exists within contractual society, under the rule of law.
      </p>

      <FreedomDemo />

      <Callout type="definition" title="Liberty Defined">
        "Liberty and freedom are the conditions of man within a contractual society. Man is free
        insofar as he can pursue his own ends without being subject to the arbitrary will of another."
      </Callout>

      {/* Calculative Action */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Calculative Action</h2>

      <p className="text-dark-200 mb-4">
        This chapter introduces a distinction of "utmost importance": between <strong className="text-primary-400">calculable</strong> and
        <strong className="text-primary-400"> non-calculable</strong> action. It was within contractual society that the use of
        arithmetic as an aid to action developed.
      </p>

      <CalculativeActionDemo />

      <p className="text-dark-200 mb-4">
        Modern civilization depends on the ability to calculate. Economics itself, Mises argues,
        is fundamentally the theory of that scope of human action where calculation is possible.
        Without money prices and profit-and-loss accounting, rational allocation of resources becomes impossible.
      </p>

      {/* Structural Note */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Book's Structure</h2>

      <p className="text-dark-200 mb-4">
        This short chapter serves as a bridge in <em>Human Action</em>. Part One examined individual action
        in general. Part Two (which we are in) examines interpersonal action within society. Part Three
        will narrow the focus further to <em>calculable</em> interpersonal action—the realm of economics proper.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-dark-600 flex items-center justify-center text-dark-300">I</span>
            <span className="text-dark-300">Part One: Human Action in General (all exchange)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white">II</span>
            <span className="text-dark-100 font-medium">Part Two: Action Within Society (interpersonal exchange) ← We are here</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-dark-600 flex items-center justify-center text-dark-300">III</span>
            <span className="text-dark-300">Part Three: Economic Calculation (calculable exchange)</span>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>All action is exchange. Autistic exchange involves only one actor; interpersonal exchange involves cooperation between individuals.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>"Do ut des"—I give so that you may give—is the fundamental formula of social exchange. Mutuality defines interpersonal action.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Contractual bonds are symmetrical (equals cooperating); hegemonic bonds are asymmetrical (command and obedience).</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Freedom and liberty are conditions of contractual society, where individuals pursue their own ends under the rule of law.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Calculative action—using arithmetic to compare costs and benefits—is essential to modern civilization and economics proper.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        The next chapter will examine the role of ideas in shaping society. Before we can understand
        economic calculation, we must understand how ideas—including the idea of cooperation itself—
        spread and influence human action.
      </p>
    </LessonLayout>
  );
}
