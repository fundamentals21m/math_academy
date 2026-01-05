import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo: The Case Against the Market
function CaseAgainstMarketDemo() {
  const [selectedObjection, setSelectedObjection] = useState<number | null>(null);

  const objections = [
    {
      title: 'Poverty',
      claim: 'The market fails to eliminate poverty and destitution.',
      response: 'Capitalism and industry allow more people to work and support themselves than ever before. Interventionism hinders private charity.',
      reality: 'Pre-industrial societies had near-universal poverty. Capitalism has lifted billions out of subsistence.'
    },
    {
      title: 'Inequality',
      claim: 'The market creates unfair gaps between rich and poor.',
      response: 'Inequality is inherent to the market and drives the capital accumulation that raises living standards for all.',
      reality: 'Attempts to enforce equality destroy the incentives that create wealth in the first place.'
    },
    {
      title: 'Insecurity',
      claim: 'The market creates unstable, precarious livelihoods.',
      response: 'Insecurity stems from consumer choice—people seeking best products at lowest prices. This is a feature, not a bug.',
      reality: 'Market "insecurity" reflects economic dynamism. Stagnant economies are "secure" only in their poverty.'
    }
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Case Against the Market Economy</h4>

      <p className="text-dark-300 text-sm mb-4">
        Critics raise three main objections to the market. Click each to examine
        the claim and Mises' response.
      </p>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {objections.map((obj, i) => (
          <button
            key={i}
            onClick={() => setSelectedObjection(selectedObjection === i ? null : i)}
            className={`p-4 rounded-lg text-center transition-all ${
              selectedObjection === i
                ? 'bg-blue-900/30 border-2 border-blue-500'
                : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
            }`}
          >
            <div className="text-2xl mb-2">{i === 0 ? '📉' : i === 1 ? '⚖️' : '🎲'}</div>
            <div className="font-medium text-dark-100">{obj.title}</div>
          </button>
        ))}
      </div>

      {selectedObjection !== null && (
        <div className="space-y-3">
          <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
            <h5 className="font-medium text-red-400 mb-2">The Objection</h5>
            <p className="text-dark-200 text-sm">{objections[selectedObjection].claim}</p>
          </div>

          <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
            <h5 className="font-medium text-green-400 mb-2">Mises' Response</h5>
            <p className="text-dark-200 text-sm">{objections[selectedObjection].response}</p>
          </div>

          <div className="p-4 bg-dark-700 rounded-lg">
            <h5 className="font-medium text-yellow-400 mb-2">The Reality</h5>
            <p className="text-dark-200 text-sm">{objections[selectedObjection].reality}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive demo: Poverty Through History
function PovertyHistoryDemo() {
  const [era, setEra] = useState(0);

  const eras = [
    {
      name: 'Pre-Industrial',
      year: 'Before 1800',
      population: '1 billion',
      extremePoverty: 90,
      avgLifespan: 35,
      description: 'Near-universal subsistence farming. Famine common. Little surplus.',
    },
    {
      name: 'Early Industrial',
      year: '1800-1900',
      population: '1.6 billion',
      extremePoverty: 75,
      avgLifespan: 45,
      description: 'Factory system emerges. Urbanization. Rising productivity.',
    },
    {
      name: 'Modern Industrial',
      year: '1900-1950',
      population: '2.5 billion',
      extremePoverty: 55,
      avgLifespan: 55,
      description: 'Mass production. Electricity. Worker productivity soars.',
    },
    {
      name: 'Post-War',
      year: '1950-2000',
      population: '6 billion',
      extremePoverty: 35,
      avgLifespan: 65,
      description: 'Global trade expansion. Technology revolution begins.',
    },
    {
      name: 'Present',
      year: '2000+',
      population: '8 billion',
      extremePoverty: 10,
      avgLifespan: 73,
      description: 'Digital revolution. Global middle class emerges.',
    }
  ];

  const current = eras[era];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Poverty Through History</h4>

      <div className="mb-4">
        <input
          type="range"
          min="0"
          max={eras.length - 1}
          value={era}
          onChange={(e) => setEra(parseInt(e.target.value))}
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          {eras.map((e, i) => (
            <span key={i} className={i === era ? 'text-blue-400' : ''}>{e.year.split('-')[0]}</span>
          ))}
        </div>
      </div>

      <div className="p-4 bg-dark-700 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-3">
          <h5 className="font-medium text-dark-100">{current.name} Era</h5>
          <span className="text-dark-400 text-sm">{current.year}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-dark-100">{current.population}</div>
            <div className="text-xs text-dark-400">World Population</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${current.extremePoverty > 50 ? 'text-red-400' : current.extremePoverty > 20 ? 'text-yellow-400' : 'text-green-400'}`}>
              {current.extremePoverty}%
            </div>
            <div className="text-xs text-dark-400">Extreme Poverty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{current.avgLifespan}</div>
            <div className="text-xs text-dark-400">Avg Lifespan</div>
          </div>
        </div>

        <div className="h-4 bg-dark-600 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all ${
              current.extremePoverty > 50 ? 'bg-red-500' :
              current.extremePoverty > 20 ? 'bg-yellow-500' : 'bg-green-500'
            }`}
            style={{ width: `${current.extremePoverty}%` }}
          />
        </div>
        <div className="text-xs text-dark-400 mt-1">Percentage in Extreme Poverty</div>

        <p className="text-dark-300 text-sm mt-4">{current.description}</p>
      </div>

      <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-lg text-sm text-dark-200">
        <span className="text-green-400 font-medium">Result:</span> Despite population
        growing 8x, extreme poverty fell from 90% to 10%. Capitalism didn't create
        poverty—it inherited universal poverty and steadily reduced it.
      </div>
    </div>
  );
}

// Interactive demo: The Role of Inequality
function InequalityRoleDemo() {
  const [showEffects, setShowEffects] = useState(false);

  const inequalityEffects = [
    {
      mechanism: 'Capital Accumulation',
      explanation: 'Inequality allows some to save and invest rather than consuming everything.',
      result: 'More capital → higher productivity → higher wages for all'
    },
    {
      mechanism: 'Entrepreneurial Incentive',
      explanation: 'Prospect of becoming wealthy motivates risk-taking and innovation.',
      result: 'New products, new industries, new jobs'
    },
    {
      mechanism: 'Division of Labor',
      explanation: 'Different abilities and circumstances enable specialization.',
      result: 'Everyone benefits from others\' specialized skills'
    },
    {
      mechanism: 'Price Signals',
      explanation: 'Differential rewards guide resources to most valued uses.',
      result: 'Efficient allocation without central planning'
    }
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Role of Inequality</h4>

      <div className="p-4 bg-dark-700 rounded-lg mb-4">
        <p className="text-dark-200 italic">
          "Men are born unequal and it is precisely their inequality that generates
          social cooperation and civilization."
        </p>
        <p className="text-dark-400 text-sm mt-2">— Ludwig von Mises</p>
      </div>

      <button
        onClick={() => setShowEffects(!showEffects)}
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm mb-4"
      >
        {showEffects ? 'Hide Mechanisms' : 'Show How Inequality Enables Progress'}
      </button>

      {showEffects && (
        <div className="space-y-3">
          {inequalityEffects.map((effect, i) => (
            <div key={i} className="p-4 bg-dark-700 rounded-lg">
              <h5 className="font-medium text-dark-100 mb-2">{effect.mechanism}</h5>
              <p className="text-dark-300 text-sm mb-2">{effect.explanation}</p>
              <p className="text-green-400 text-sm">→ {effect.result}</p>
            </div>
          ))}
        </div>
      )}

      {showEffects && (
        <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-yellow-400 font-medium">Key Insight:</span> Attempts
            to enforce equality destroy the very mechanisms that raise everyone's
            living standards. The path to prosperity lies not in redistribution but
            in continual increases in capital per capita.
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo: The Empty Concept of "Welfare"
function WelfareConceptDemo() {
  const [question, setQuestion] = useState(0);

  const questions = [
    {
      question: 'What is "welfare"?',
      answer: 'A colorless paraphrase of the fundamental category of human action—the urge to remove uneasiness.',
      problem: 'It means everything and therefore nothing specific.'
    },
    {
      question: 'Who defines "social welfare"?',
      answer: 'There is no objective way to aggregate individual preferences into a collective measure.',
      problem: 'Any specific definition privileges some values over others.'
    },
    {
      question: 'How do we maximize it?',
      answer: 'The market already does this—each exchange improves the welfare of both parties.',
      problem: '"Welfare policy" typically means overriding individual choices with bureaucratic preferences.'
    },
    {
      question: 'Can experts determine welfare?',
      answer: 'No one can know another\'s preferences better than the person themselves.',
      problem: 'Expert planners substitute their values for those of the people they claim to help.'
    }
  ];

  const current = questions[question];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Empty Concept of "Welfare"</h4>

      <div className="flex gap-2 mb-4 flex-wrap">
        {questions.map((q, i) => (
          <button
            key={i}
            onClick={() => setQuestion(i)}
            className={`px-3 py-1 rounded text-sm ${
              question === i
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Q{i + 1}
          </button>
        ))}
      </div>

      <div className="p-4 bg-dark-700 rounded-lg">
        <h5 className="font-medium text-blue-400 mb-3">{current.question}</h5>

        <div className="mb-3">
          <span className="text-dark-400 text-sm">Answer:</span>
          <p className="text-dark-200">{current.answer}</p>
        </div>

        <div className="p-3 bg-red-900/20 border border-red-500/30 rounded">
          <span className="text-red-400 text-sm font-medium">The Problem:</span>
          <p className="text-dark-200 text-sm">{current.problem}</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-yellow-400 font-medium">Mises' Point:</span> "Welfare"
          is invoked to justify intervention, but the concept is empty without specific
          content. Once defined specifically, it inevitably reflects the definer's values,
          not any objective measure of social good.
        </p>
      </div>
    </div>
  );
}

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <p className="text-lg text-dark-200 mb-6">
        Critics charge the market economy with three failings: it tolerates poverty,
        creates inequality, and generates insecurity. The "welfare principle" is
        offered as the humane alternative to cold market calculation. Mises
        systematically examines these objections, showing that they misunderstand
        both the nature of the market and the meaning of "welfare" itself.
      </p>

      <Callout type="concept" title="The Fundamental Error">
        The objections raised against the market economy are based on bad economics.
        Critics blame the market for consequences of the very anti-capitalistic
        policies they themselves advocate. They fix on the market the responsibility
        for the inevitable failure of interventionism.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Case Against the Market</h2>

      <p className="text-dark-300 mb-4">
        From day to day, the market economy increases the quantity and improves
        the quality of products. It has brought about unprecedented wealth. But,
        objects the interventionist, it is deficient from the "social point of view."
        It has not eliminated poverty. It grants privileges to the rich at the
        expense of the masses. The principle of welfare must replace that of profits.
      </p>

      <CaseAgainstMarketDemo />

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Poverty Objection</h2>

      <p className="text-dark-300 mb-4">
        The charge that capitalism creates or tolerates poverty inverts causation.
        Poverty is the original condition of humanity. For millennia, the vast
        majority lived at bare subsistence. Capitalism inherited this universal
        poverty and has steadily reduced it.
      </p>

      <p className="text-dark-300 mb-4">
        The rise of industry allowed more people to work productively than
        subsistence farming ever could. Capital accumulation raised productivity,
        which raised wages, which raised living standards. Those who blame
        capitalism for remaining poverty are really criticizing it for not having
        yet completed a task that only capitalism can accomplish.
      </p>

      <PovertyHistoryDemo />

      <Callout type="insight" title="Who Helps the Poor?">
        Interventionism hinders the private charitable efforts that genuinely help
        the poor. High taxes reduce the funds available for charity. Regulations
        prevent low-skilled workers from finding jobs. Minimum wages price the
        poorest out of the labor market entirely.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Inequality Objection</h2>

      <p className="text-dark-300 mb-4">
        Inequality in incomes and wealth is an inherent feature of the market
        economy. This is not a defect—it is the mechanism by which the market
        directs resources and creates prosperity. The only path to rising living
        standards is through continual increases in capital per capita.
      </p>

      <p className="text-dark-300 mb-4">
        Men are born unequal in abilities, circumstances, and preferences. It is
        precisely this inequality that generates social cooperation and civilization.
        The division of labor rests on differences. Exchange exists because people
        have different endowments and different needs.
      </p>

      <InequalityRoleDemo />

      <CardGrid columns={2}>
        <Card title="Inequality Under Markets">
          Rewards flow to those who best serve consumer wants. Inequality reflects
          differential contributions to consumer satisfaction. The path upward
          is open to all through enterprise and innovation.
        </Card>
        <Card title="Equality Through Force">
          Enforced equality destroys incentives to save, invest, and innovate.
          Everyone becomes equally poor—except the enforcers. The path upward
          is closed to all except the politically connected.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Insecurity Objection</h2>

      <p className="text-dark-300 mb-4">
        The market does create income and wealth insecurity. Businesses fail.
        Jobs are lost. Investments decline. But this is not the fault of capitalists—
        it is the consequence of consumer sovereignty. Each day consumers seek
        products and services that best satisfy their wants at the lowest prices.
      </p>

      <p className="text-dark-300 mb-4">
        This "insecurity" is actually economic dynamism. Resources constantly
        shift toward more valued uses. Yesterday's prosperous industry becomes
        tomorrow's obsolete one—because consumers have found something better.
        A stagnant economy without such changes would be "secure" only in its
        poverty.
      </p>

      <Callout type="warning" title="The Security Illusion">
        Attempts to provide economic security through government programs create
        new insecurities while destroying opportunities. The only genuine economic
        security comes from a growing economy with abundant opportunities—which
        requires precisely the dynamic market processes that interventionists
        want to suppress.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Welfare Concept</h2>

      <p className="text-dark-300 mb-4">
        What does "welfare" actually mean? If we interpret it broadly enough that
        most people would accept it, it becomes empty—merely another name for
        the urge to satisfy wants, which is the fundamental category of all
        human action. The market already serves this.
      </p>

      <p className="text-dark-300 mb-4">
        If we define welfare more specifically—this diet, that housing, these
        amenities—we smuggle in particular value judgments. The interventionist's
        "welfare" inevitably means the welfare as defined by the interventionist,
        imposed on people who might prefer something else.
      </p>

      <WelfareConceptDemo />

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Market as Welfare System</h2>

      <p className="text-dark-300 mb-4">
        Properly understood, the market economy is itself the greatest welfare
        system ever devised. It coordinates billions of individual plans without
        central direction. It channels resources toward the most urgent consumer
        wants. It creates the wealth that makes charity and social programs possible.
      </p>

      <p className="text-dark-300 mb-4">
        The "welfare principle" as an alternative to the market principle is
        incoherent. There is no way to increase welfare except by better
        satisfying consumer wants—which is precisely what the market does.
        Interventions that override market outcomes necessarily substitute
        bureaucratic preferences for consumer preferences.
      </p>

      <Callout type="summary" title="Chapter Summary">
        The case against the market economy rests on three objections—poverty,
        inequality, and insecurity—each of which misunderstands economic reality.
        Capitalism did not create poverty; it inherited universal poverty and has
        steadily reduced it. Inequality is not a defect but the mechanism enabling
        capital accumulation and rising living standards. Insecurity reflects
        economic dynamism, not market failure. The "welfare principle" invoked
        as an alternative is an empty concept—when defined specifically, it
        merely substitutes the interventionist's preferences for those of
        consumers. The market economy, properly understood, is itself the
        greatest welfare system humanity has devised.
      </Callout>
    </LessonLayout>
  );
}
