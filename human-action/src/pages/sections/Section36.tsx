import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo: The Harvest of Interventionism
function HarvestDemo() {
  const [showResults, setShowResults] = useState(false);

  const predictions = [
    { predicted: 'Economic calculation disrupted', result: 'Chronic misallocation of resources' },
    { predicted: 'Capital consumption', result: 'Declining productivity and wages' },
    { predicted: 'Monetary manipulation', result: 'Inflation and boom-bust cycles' },
    { predicted: 'Trade restrictions', result: 'International conflict and autarky' },
    { predicted: 'Price controls', result: 'Shortages and black markets' },
    { predicted: 'Regulatory burden', result: 'Stifled entrepreneurship' },
  ];

  const consequences = [
    'Wars and civil wars',
    'Oppression by self-appointed rulers',
    'Economic depressions',
    'Mass unemployment',
    'Capital consumption',
    'Periodic famines'
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Harvest of Interventionism</h4>

      <p className="text-dark-300 text-sm mb-4">
        The interventionist policies practiced for decades have produced exactly
        the effects economists predicted.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-dark-700 rounded-lg">
          <h5 className="font-medium text-yellow-400 mb-3">What Economists Predicted</h5>
          <div className="space-y-2">
            {predictions.map((p, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-yellow-400">•</span>
                <span className="text-dark-200">{p.predicted}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-4 rounded-lg ${showResults ? 'bg-red-900/20' : 'bg-dark-700'}`}>
          <h5 className="font-medium text-red-400 mb-3">
            {showResults ? 'What Actually Happened' : 'The Results...'}
          </h5>
          {showResults ? (
            <div className="space-y-2">
              {consequences.map((c, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-red-400">✗</span>
                  <span className="text-dark-200">{c}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-dark-400 text-sm italic">
              Click to reveal the harvest
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setShowResults(!showResults)}
        className={`px-4 py-2 rounded text-white text-sm ${
          showResults ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
        }`}
      >
        {showResults ? 'Hide Results' : 'Reveal the Harvest'}
      </button>
    </div>
  );
}

// Interactive demo: The Reserve Fund
function ReserveFundDemo() {
  const [taxRate, setTaxRate] = useState(20);
  const [years, setYears] = useState(0);

  const initialWealth = 1000;
  const annualIncome = 100;
  const govtSpending = (taxRate / 100) * annualIncome * 1.5; // Spending exceeds revenue

  const calculateFund = (yearNum: number) => {
    let wealth = initialWealth;
    let income = annualIncome;

    for (let i = 0; i < yearNum; i++) {
      const tax = (taxRate / 100) * income;
      const deficit = govtSpending - tax;

      // Capital consumption when deficit exists
      if (deficit > 0) {
        wealth -= deficit * 0.5;
      }

      // Lower capital means lower future income
      income = annualIncome * (wealth / initialWealth);
    }

    return { wealth: Math.max(0, wealth), income: Math.max(0, income) };
  };

  const current = calculateFund(years);
  const exhausted = current.wealth <= 0;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Exhaustion of the Reserve Fund</h4>

      <p className="text-dark-300 text-sm mb-4">
        Interventionism treats high incomes and accumulated wealth as a fund to be
        redistributed. But this fund is finite and can be exhausted.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-dark-700 rounded-lg">
          <h5 className="font-medium text-dark-100 mb-3">Parameters</h5>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-dark-400 block mb-1">
                Tax Rate: {taxRate}%
              </label>
              <input
                type="range"
                min="10"
                max="70"
                value={taxRate}
                onChange={(e) => {
                  setTaxRate(parseInt(e.target.value));
                  setYears(0);
                }}
                className="w-full accent-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-dark-400 block mb-1">
                Years of Policy: {years}
              </label>
              <input
                type="range"
                min="0"
                max="20"
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-dark-700 rounded-lg">
          <h5 className="font-medium text-dark-100 mb-3">Reserve Fund Status</h5>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-dark-400">Accumulated Wealth:</span>
                <span className={`font-medium ${exhausted ? 'text-red-400' : 'text-dark-100'}`}>
                  {current.wealth.toFixed(0)}
                </span>
              </div>
              <div className="h-3 bg-dark-600 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    current.wealth < initialWealth * 0.3 ? 'bg-red-500' :
                    current.wealth < initialWealth * 0.6 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${(current.wealth / initialWealth) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-dark-400">Taxable Income:</span>
                <span className={`font-medium ${current.income < 50 ? 'text-red-400' : 'text-dark-100'}`}>
                  {current.income.toFixed(0)}
                </span>
              </div>
              <div className="h-3 bg-dark-600 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    current.income < annualIncome * 0.3 ? 'bg-red-500' :
                    current.income < annualIncome * 0.6 ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${(current.income / annualIncome) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {exhausted && (
        <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-red-400 font-medium">Fund Exhausted:</span> The reserve
            fund has been consumed. There is nothing left to tax. The interventionist
            system can no longer sustain itself.
          </p>
        </div>
      )}

      {!exhausted && years > 10 && (
        <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-yellow-400 font-medium">Warning:</span> Capital
            consumption is reducing the productive base. Future taxable income is
            declining as the wealth that generates it disappears.
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo: The Interventionist Spiral
function InterventionistSpiralDemo() {
  const [step, setStep] = useState(0);

  const stages = [
    {
      title: 'Initial Intervention',
      policy: 'Price controls on essential goods',
      problem: 'Shortages emerge as production declines',
      response: 'Blame producers, expand controls'
    },
    {
      title: 'Expanding Controls',
      policy: 'Control inputs and wages too',
      problem: 'Distortions spread throughout economy',
      response: 'More sectors need intervention'
    },
    {
      title: 'Comprehensive Planning',
      policy: 'Central direction of investment',
      problem: 'Capital misallocation, declining productivity',
      response: 'Increase taxation to fund programs'
    },
    {
      title: 'Crisis Point',
      policy: 'Confiscatory taxation exhausts capital',
      problem: 'Economic decline, social unrest',
      response: 'Choose: socialism or market return'
    }
  ];

  const current = stages[step];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Interventionist Spiral</h4>

      <div className="mb-4">
        <div className="flex items-center gap-2">
          {stages.map((_, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                i <= step ? 'bg-red-500 text-white' : 'bg-dark-600 text-dark-400'
              }`}>
                {i + 1}
              </div>
              {i < stages.length - 1 && (
                <div className={`w-12 h-1 ${i < step ? 'bg-red-500' : 'bg-dark-600'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-dark-700 rounded-lg mb-4">
        <h5 className="font-medium text-dark-100 mb-3">{current.title}</h5>

        <div className="space-y-3 text-sm">
          <div className="p-3 bg-blue-900/20 rounded">
            <span className="text-blue-400 font-medium">Policy:</span>
            <span className="text-dark-200 ml-2">{current.policy}</span>
          </div>

          <div className="p-3 bg-yellow-900/20 rounded">
            <span className="text-yellow-400 font-medium">Result:</span>
            <span className="text-dark-200 ml-2">{current.problem}</span>
          </div>

          <div className="p-3 bg-red-900/20 rounded">
            <span className="text-red-400 font-medium">Response:</span>
            <span className="text-dark-200 ml-2">{current.response}</span>
          </div>
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

// Interactive demo: The End of Interventionism
function EndOfInterventionismDemo() {
  const [choice, setChoice] = useState<'market' | 'socialism' | null>(null);

  const options = {
    market: {
      title: 'Return to Market Economy',
      actions: [
        'Remove price controls',
        'Reduce taxation',
        'Secure property rights',
        'Allow capital accumulation'
      ],
      result: 'Painful adjustment, then recovery. Rising productivity and wages.',
      longTerm: 'Sustainable prosperity based on voluntary exchange.'
    },
    socialism: {
      title: 'Full Socialism',
      actions: [
        'Abolish private property',
        'Central economic planning',
        'State control of production',
        'Suppression of markets'
      ],
      result: 'Calculation problem makes rational planning impossible.',
      longTerm: 'Economic chaos, political tyranny, declining living standards.'
    }
  };

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The End of Interventionism</h4>

      <p className="text-dark-300 text-sm mb-4">
        Interventionism cannot be a stable, permanent system. It must evolve toward
        one of two endpoints. There is no third way.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => setChoice('market')}
          className={`p-4 rounded-lg text-left transition-all ${
            choice === 'market'
              ? 'bg-green-900/30 border-2 border-green-500'
              : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
          }`}
        >
          <div className="text-2xl mb-2">🔓</div>
          <h5 className="font-medium text-dark-100">Market Economy</h5>
          <p className="text-sm text-dark-400">Return to free exchange</p>
        </button>

        <button
          onClick={() => setChoice('socialism')}
          className={`p-4 rounded-lg text-left transition-all ${
            choice === 'socialism'
              ? 'bg-red-900/30 border-2 border-red-500'
              : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
          }`}
        >
          <div className="text-2xl mb-2">🔒</div>
          <h5 className="font-medium text-dark-100">Full Socialism</h5>
          <p className="text-sm text-dark-400">Complete state control</p>
        </button>
      </div>

      {choice && (
        <div className={`p-4 rounded-lg ${
          choice === 'market' ? 'bg-green-900/20' : 'bg-red-900/20'
        }`}>
          <h5 className="font-medium text-dark-100 mb-3">{options[choice].title}</h5>

          <div className="mb-3">
            <span className="text-dark-400 text-sm">Required actions:</span>
            <ul className="mt-1 space-y-1">
              {options[choice].actions.map((action, i) => (
                <li key={i} className="text-sm text-dark-200 flex items-center gap-2">
                  <span className={choice === 'market' ? 'text-green-400' : 'text-red-400'}>•</span>
                  {action}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-dark-700 rounded mb-3">
            <span className="text-dark-400 text-sm">Immediate result:</span>
            <p className="text-dark-200 text-sm">{options[choice].result}</p>
          </div>

          <div className={`p-3 rounded ${
            choice === 'market' ? 'bg-green-900/30' : 'bg-red-900/30'
          }`}>
            <span className={`text-sm font-medium ${
              choice === 'market' ? 'text-green-400' : 'text-red-400'
            }`}>Long-term:</span>
            <p className="text-dark-200 text-sm">{options[choice].longTerm}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <p className="text-lg text-dark-200 mb-6">
        Interventionism has produced exactly the results economists predicted:
        economic disruption, social conflict, and the gradual exhaustion of the
        wealth it seeks to redistribute. The system cannot sustain itself
        indefinitely. It must evolve toward either a return to market economy
        or a plunge into full socialism. This is the crisis of interventionism.
      </p>

      <Callout type="concept" title="The Inherent Instability">
        Interventionism cannot be a permanent system. Each intervention creates
        problems that seem to require further intervention. But the accumulated
        distortions eventually exhaust the productive capacity that makes
        intervention possible. The system must resolve into one of its two
        logical endpoints: market economy or socialism.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Harvest of Interventionism</h2>

      <p className="text-dark-300 mb-4">
        The interventionist policies practiced for decades by all governments of
        the capitalistic West have brought about all those effects which
        economists predicted. Wars and civil wars, oppression by dictators,
        economic depressions, mass unemployment, capital consumption, and famine—
        this is the harvest of interventionism.
      </p>

      <p className="text-dark-300 mb-4">
        Yet advocates of intervention blame these results not on their policies
        but on the residual capitalism they have not yet eliminated. Each failure
        becomes an argument for more intervention, until the entire system
        reaches its breaking point.
      </p>

      <HarvestDemo />

      <CardGrid columns={2}>
        <Card title="The Pattern">
          Intervention creates unintended consequences. Consequences are blamed
          on "market failure." More intervention is prescribed. The cycle continues
          until crisis.
        </Card>
        <Card title="The Misdirection">
          Interventionists fix on the market the responsibility for problems
          caused by their own anti-capitalistic policies. The very failures of
          intervention become arguments for more intervention.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Exhaustion of the Reserve Fund</h2>

      <p className="text-dark-300 mb-4">
        The fundamental idea of interventionist policy is that high incomes and
        accumulated wealth of the affluent constitute a fund that can be freely
        used for improving the conditions of the less prosperous. The essence of
        this policy is to take from one group to give to another.
      </p>

      <p className="text-dark-300 mb-4">
        But this "ability-to-pay" principle depends on the existence of such
        incomes and wealth. It can no longer be applied once these extra funds
        have been exhausted by taxes and other interventionist measures. There
        must come a point when the reserve fund of accumulated wealth is consumed.
      </p>

      <ReserveFundDemo />

      <Callout type="warning" title="Capital Consumption">
        When taxation and regulation consume the fund of accumulated capital,
        the productive base shrinks. Lower capital means lower productivity.
        Lower productivity means lower incomes. Lower incomes mean less to
        redistribute—and less to consume. The interventionist system consumes
        the very wealth that sustains it.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Interventionist Spiral</h2>

      <p className="text-dark-300 mb-4">
        Each intervention creates new problems that seem to require new
        interventions. Price controls cause shortages, which require rationing
        and further controls. These distort production, requiring direction of
        investment. Capital flees, requiring exchange controls. The spiral
        continues until comprehensive central planning or a return to markets.
      </p>

      <InterventionistSpiralDemo />

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The End of Interventionism</h2>

      <p className="text-dark-300 mb-4">
        The age of interventionism is reaching its end. Interventionism has
        exhausted all its potentialities and must disappear. But disappear
        into what? There are only two possibilities: the market economy based
        on private property and voluntary exchange, or socialism with central
        planning and state ownership.
      </p>

      <p className="text-dark-300 mb-4">
        The "middle way" of interventionism cannot be stable. It contains
        internal contradictions that push it toward one extreme or the other.
        The choice between these alternatives cannot be avoided—it can only
        be postponed until crisis forces a decision.
      </p>

      <EndOfInterventionismDemo />

      <CardGrid columns={2}>
        <Card title="Why Not a Middle Way?">
          Interventionism cannot calculate. Without market prices, planners cannot
          know the relative costs and values of different actions. Partial
          intervention increasingly distorts the remaining market signals.
        </Card>
        <Card title="The Forced Choice">
          Either restore market mechanisms and accept their results, or abolish
          them entirely and accept the chaos of central planning. There is no
          stable intermediate position.
        </Card>
      </CardGrid>

      <Callout type="summary" title="Chapter Summary">
        Interventionism is inherently unstable. It produces the very problems—
        economic disruption, social conflict, poverty—that it claims to solve.
        The reserve fund of accumulated wealth, which intervention treats as
        inexhaustible, is actually finite and is being consumed. Each intervention
        creates distortions requiring further intervention in an accelerating
        spiral. Eventually the system must resolve into either a return to
        market economy or a plunge into full socialism. This is the crisis
        of interventionism—not a temporary setback but the inevitable conclusion
        of an inherently contradictory system.
      </Callout>
    </LessonLayout>
  );
}
