import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo: The Singularity of Economics
function SingularityDemo() {
  const [selectedField, setSelectedField] = useState<'physics' | 'economics' | null>(null);

  const fields = {
    physics: {
      title: 'Natural Science (e.g., Physics)',
      verification: 'Empirical experiment',
      test: 'Predictions can be tested in controlled conditions',
      certainty: 'Theories verified or falsified by observation',
      example: 'Drop an object → measure acceleration → confirm or reject theory'
    },
    economics: {
      title: 'Economics',
      verification: 'Logical reasoning',
      test: 'No controlled experiments possible in complex human action',
      certainty: 'Theorems derived from the structure of human action itself',
      example: 'Price controls → shortages (logical necessity, not just historical observation)'
    }
  };

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Singularity of Economics</h4>

      <p className="text-dark-300 text-sm mb-4">
        Economics occupies a unique position among sciences. Compare how we verify
        knowledge in physics versus economics.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => setSelectedField('physics')}
          className={`p-4 rounded-lg text-left transition-all ${
            selectedField === 'physics'
              ? 'bg-blue-900/30 border-2 border-blue-500'
              : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
          }`}
        >
          <div className="text-2xl mb-2">🔬</div>
          <h5 className="font-medium text-dark-100">Natural Science</h5>
          <p className="text-sm text-dark-400">Empirical verification</p>
        </button>

        <button
          onClick={() => setSelectedField('economics')}
          className={`p-4 rounded-lg text-left transition-all ${
            selectedField === 'economics'
              ? 'bg-green-900/30 border-2 border-green-500'
              : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
          }`}
        >
          <div className="text-2xl mb-2">📊</div>
          <h5 className="font-medium text-dark-100">Economics</h5>
          <p className="text-sm text-dark-400">Logical derivation</p>
        </button>
      </div>

      {selectedField && (
        <div className={`p-4 rounded-lg ${
          selectedField === 'physics' ? 'bg-blue-900/20' : 'bg-green-900/20'
        }`}>
          <h5 className="font-medium text-dark-100 mb-3">{fields[selectedField].title}</h5>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-dark-400">Method of verification:</span>
              <span className="text-dark-200 ml-2">{fields[selectedField].verification}</span>
            </div>
            <div>
              <span className="text-dark-400">How we test:</span>
              <span className="text-dark-200 ml-2">{fields[selectedField].test}</span>
            </div>
            <div>
              <span className="text-dark-400">Source of certainty:</span>
              <span className="text-dark-200 ml-2">{fields[selectedField].certainty}</span>
            </div>
            <div className="p-3 bg-dark-700 rounded mt-3">
              <span className="text-dark-400">Example:</span>
              <p className="text-dark-200 mt-1">{fields[selectedField].example}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive demo: Economics vs Technology
function TechVsEconDemo() {
  const [showDifference, setShowDifference] = useState(false);

  const comparison = [
    {
      aspect: 'Adoption',
      technology: 'Can be implemented despite public skepticism',
      economics: 'Requires public acceptance to be effective'
    },
    {
      aspect: 'Testing',
      technology: 'New inventions can be demonstrated',
      economics: 'Policies cannot be experimentally tested'
    },
    {
      aspect: 'Resistance',
      technology: 'Initial skeptics eventually accept proven results',
      economics: 'Bad policies can persist indefinitely through ideology'
    },
    {
      aspect: 'Experts',
      technology: 'Technical experts can implement over objections',
      economics: 'Economists cannot impose policies—must persuade voters'
    }
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Technology vs. Economic Policy</h4>

      <p className="text-dark-300 text-sm mb-4">
        Unlike technological innovations, which can succeed against public opinion,
        economic policies require majority acceptance to function.
      </p>

      <button
        onClick={() => setShowDifference(!showDifference)}
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm mb-4"
      >
        {showDifference ? 'Hide Comparison' : 'Show the Critical Difference'}
      </button>

      {showDifference && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="text-left py-2 text-dark-400">Aspect</th>
                <th className="text-left py-2 text-dark-400">Technology</th>
                <th className="text-left py-2 text-dark-400">Economic Policy</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="border-b border-dark-700">
                  <td className="py-2 text-dark-200 font-medium">{row.aspect}</td>
                  <td className="py-2 text-green-400">{row.technology}</td>
                  <td className="py-2 text-yellow-400">{row.economics}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showDifference && (
        <div className="mt-4 p-4 bg-dark-700 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-yellow-400 font-medium">Implication:</span> An inventor
            can succeed despite initial public rejection. An economist cannot. Economic
            truths must win in the court of public opinion, or they remain impotent—
            regardless of how correct they are.
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo: Public Opinion and History
function PublicOpinionDemo() {
  const [scenario, setScenario] = useState<'market' | 'intervention'>('market');

  const scenarios = {
    market: {
      title: 'Pro-Market Public Opinion',
      belief: 'Free exchange creates prosperity for all',
      policies: [
        'Low taxation',
        'Sound money',
        'Free trade',
        'Secure property rights'
      ],
      result: 'Capital accumulation, rising productivity, increasing wages',
      history: 'The 19th century liberal era: unprecedented growth and prosperity'
    },
    intervention: {
      title: 'Interventionist Public Opinion',
      belief: 'Markets fail and need government correction',
      policies: [
        'Price controls',
        'Monetary expansion',
        'Trade barriers',
        'Redistribution'
      ],
      result: 'Capital consumption, declining productivity, stagnation',
      history: 'The 20th century: wars, depressions, totalitarianism'
    }
  };

  const current = scenarios[scenario];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Public Opinion Determines History</h4>

      <p className="text-dark-300 text-sm mb-4">
        The supremacy of public opinion determines the whole process of human history.
        What the majority believes shapes what policies are possible.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => setScenario('market')}
          className={`p-3 rounded-lg text-center transition-all ${
            scenario === 'market'
              ? 'bg-green-900/30 border-2 border-green-500'
              : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
          }`}
        >
          <div className="font-medium text-dark-100">Pro-Market Era</div>
        </button>

        <button
          onClick={() => setScenario('intervention')}
          className={`p-3 rounded-lg text-center transition-all ${
            scenario === 'intervention'
              ? 'bg-red-900/30 border-2 border-red-500'
              : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
          }`}
        >
          <div className="font-medium text-dark-100">Interventionist Era</div>
        </button>
      </div>

      <div className={`p-4 rounded-lg ${
        scenario === 'market' ? 'bg-green-900/20' : 'bg-red-900/20'
      }`}>
        <h5 className="font-medium text-dark-100 mb-3">{current.title}</h5>

        <div className="mb-3">
          <span className="text-dark-400 text-sm">Prevailing belief:</span>
          <p className="text-dark-200 italic">"{current.belief}"</p>
        </div>

        <div className="mb-3">
          <span className="text-dark-400 text-sm">Resulting policies:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {current.policies.map((policy, i) => (
              <span key={i} className={`px-2 py-1 rounded text-xs ${
                scenario === 'market' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
              }`}>
                {policy}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <span className="text-dark-400 text-sm">Economic result:</span>
          <p className="text-dark-200">{current.result}</p>
        </div>

        <div className="p-3 bg-dark-700 rounded">
          <span className="text-dark-400 text-sm">Historical example:</span>
          <p className="text-dark-200">{current.history}</p>
        </div>
      </div>
    </div>
  );
}

// Interactive demo: The Old Liberal Illusion
function OldLiberalDemo() {
  const [showError, setShowError] = useState(false);

  const liberalAssumptions = [
    {
      assumption: 'Capitalism obviously benefits everyone',
      reality: 'Benefits are diffuse; losers from competition are vocal'
    },
    {
      assumption: 'People will reason correctly about economics',
      reality: 'Economic reasoning is difficult; fallacies are intuitive'
    },
    {
      assumption: 'Truth will win in the marketplace of ideas',
      reality: 'Propaganda and demagoguery can defeat reason'
    },
    {
      assumption: 'No need to actively defend capitalism',
      reality: 'Anti-capitalist ideology fills the vacuum'
    }
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Illusion of the Old Liberals</h4>

      <p className="text-dark-300 text-sm mb-4">
        The classical liberals of the 19th century made a critical error. They assumed
        the case for capitalism was so obvious it would win by default.
      </p>

      <button
        onClick={() => setShowError(!showError)}
        className="w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-white text-sm mb-4"
      >
        {showError ? 'Hide the Error' : 'Reveal the Liberal Error'}
      </button>

      {showError && (
        <div className="space-y-3">
          {liberalAssumptions.map((item, i) => (
            <div key={i} className="p-4 bg-dark-700 rounded-lg">
              <div className="mb-2">
                <span className="text-green-400 text-sm">Liberals assumed:</span>
                <p className="text-dark-200">{item.assumption}</p>
              </div>
              <div>
                <span className="text-red-400 text-sm">The reality:</span>
                <p className="text-dark-200">{item.reality}</p>
              </div>
            </div>
          ))}

          <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
            <p className="text-dark-200 text-sm">
              <span className="text-yellow-400 font-medium">Consequence:</span> The old
              liberals left the field open for anti-capitalist propaganda. They did not
              anticipate that people could be convinced to support policies manifestly
              against their own interests. The intellectual battle for capitalism was
              lost by default.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <p className="text-lg text-dark-200 mb-6">
        Economics occupies a peculiar position among the sciences. Its theorems
        cannot be verified by experiment like those of physics, yet they are no
        less certain. Moreover, unlike technology, economic truths cannot be
        implemented over public objection—they require the consent of the governed.
        This chapter examines the unique nature of economic knowledge and its
        dependence on public opinion.
      </p>

      <Callout type="concept" title="Part Seven: The Place of Economics in Society">
        We now turn from the content of economic theory to its role in human
        affairs. How does economic knowledge differ from other sciences? Why
        does it remain so controversial? What determines whether its insights
        are applied or ignored?
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Singularity of Economics</h2>

      <p className="text-dark-300 mb-4">
        Economics is different from natural sciences like physics or chemistry.
        The natural sciences verify their theories through controlled experiments.
        Economics cannot experiment—we cannot set up two identical societies and
        apply different policies to see which works better.
      </p>

      <p className="text-dark-300 mb-4">
        Yet economic theorems are not less certain for being non-empirical. They
        are derived from the logical structure of human action itself. That price
        controls cause shortages is not merely a historical observation—it is a
        logical necessity following from how humans respond to incentives.
      </p>

      <SingularityDemo />

      <CardGrid columns={2}>
        <Card title="Empirical Verification">
          Natural sciences test predictions against observation. Failed predictions
          falsify theories. Successful predictions build confidence. Knowledge
          accumulates through experiment.
        </Card>
        <Card title="Praxeological Certainty">
          Economics derives conclusions from the axiom of human action. The
          conclusions are certain because they follow logically from how humans
          necessarily behave. History illustrates but cannot falsify these truths.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Economics and Public Opinion</h2>

      <p className="text-dark-300 mb-4">
        The insights of economic theorists can improve civilization only if
        they convince the majority of the public. This is a crucial difference
        from technology. An inventor can succeed despite initial public skepticism—
        the airplane flew whether people believed it would or not.
      </p>

      <p className="text-dark-300 mb-4">
        Economic policies, by contrast, require public acceptance to be effective.
        A government cannot implement sound monetary policy if the public demands
        inflation. It cannot maintain free trade if voters want protectionism.
        The supremacy of public opinion determines not only the role of economics
        but the whole process of human history.
      </p>

      <TechVsEconDemo />

      <Callout type="insight" title="The Democratic Constraint">
        In a democracy, economic policy reflects what voters believe, not what
        economists know. If the public believes minimum wages help workers,
        minimum wages will be enacted—regardless of what economic theory shows.
        The economist can only advise; public opinion decides.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Public Opinion and History</h2>

      <p className="text-dark-300 mb-4">
        The ideas that prevail in public opinion shape the course of history.
        When liberal ideas dominated in the 19th century, governments pursued
        sound money, free trade, and limited intervention. The result was
        unprecedented economic growth and rising living standards.
      </p>

      <p className="text-dark-300 mb-4">
        When interventionist ideas gained ground in the 20th century, policies
        shifted toward price controls, monetary manipulation, and redistribution.
        The results—wars, depressions, totalitarianism—followed from these ideas
        as predictably as the earlier prosperity followed from liberal ones.
      </p>

      <PublicOpinionDemo />

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Illusion of the Old Liberals</h2>

      <p className="text-dark-300 mb-4">
        The classical liberals of the 19th century made a fatal error. They
        assumed that the benefits of capitalism were so obvious that no serious
        intellectual defense was needed. They assumed people would reason
        correctly about economics once they had the facts.
      </p>

      <p className="text-dark-300 mb-4">
        This was naive. Economic reasoning is difficult and counterintuitive.
        Economic fallacies are emotionally appealing. Anti-capitalist propaganda
        succeeded not because it was true but because liberals failed to counter
        it. The battle for public opinion was lost by default.
      </p>

      <OldLiberalDemo />

      <CardGrid columns={2}>
        <Card title="The Liberal Assumption">
          Truth will prevail. Rational people will support capitalism once they
          see its benefits. No need for ideological combat—just demonstrate
          success and people will understand.
        </Card>
        <Card title="The Bitter Lesson">
          Propaganda can defeat truth. People can be convinced to support policies
          against their interests. The intellectual battle must be actively fought.
          Default means defeat.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Task Ahead</h2>

      <p className="text-dark-300 mb-4">
        Economics cannot escape its dependence on public opinion. Correct
        economic reasoning remains impotent unless it convinces the majority.
        The task of economists is not merely to discover truth but to communicate
        it in ways that can compete with intuitive fallacies and emotional appeals.
      </p>

      <Callout type="summary" title="Chapter Summary">
        Economics holds a singular position among sciences. Its theorems are
        certain—derived from the logic of human action—but cannot be verified
        by controlled experiment. Unlike technology, economic policy requires
        public acceptance; it cannot be implemented over objection. This makes
        public opinion the ultimate arbiter of economic policy. The old liberals
        failed to recognize this, assuming capitalism's benefits were self-evident.
        They lost the battle for public opinion by default, with catastrophic
        consequences for the 20th century. The task of economics is not merely
        to discover truth but to win it a hearing in the court of public opinion.
      </Callout>
    </LessonLayout>
  );
}
