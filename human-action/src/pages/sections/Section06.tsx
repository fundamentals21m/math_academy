import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing why uncertainty is necessary for action
function UncertaintyActionDemo() {
  const [scenario, setScenario] = useState<'uncertain' | 'certain'>('uncertain');

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Why Uncertainty Is Necessary for Action</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setScenario('uncertain')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'uncertain'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Uncertain Future
        </button>
        <button
          onClick={() => setScenario('certain')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            scenario === 'certain'
              ? 'bg-amber-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Certain Future
        </button>
      </div>

      {scenario === 'uncertain' ? (
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">The Real World: Uncertain Future</h5>
          <div className="space-y-3 text-dark-200">
            <p>You don't know if it will rain tomorrow, so you consider bringing an umbrella.</p>
            <p>You don't know if the business will succeed, so you weigh the risks and potential rewards.</p>
            <p>You don't know if studying will help you pass, so you decide how much effort to invest.</p>
            <div className="bg-dark-900 rounded-lg p-3 mt-4">
              <span className="text-green-400 font-medium">Result:</span>
              <span className="text-dark-300 ml-2">You must choose. You must act. Decision-making matters.</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
          <h5 className="text-amber-400 font-medium mb-3">Thought Experiment: Certain Future</h5>
          <div className="space-y-3 text-dark-200">
            <p>If you knew with certainty it would rain, you'd simply bring an umbrella—no deliberation needed.</p>
            <p>If you knew the business would fail, you wouldn't start it. If you knew it would succeed, there's no risk to weigh.</p>
            <p>If you knew exactly what score you'd get regardless of study, studying becomes meaningless.</p>
            <div className="bg-dark-900 rounded-lg p-3 mt-4">
              <span className="text-red-400 font-medium">Result:</span>
              <span className="text-dark-300 ml-2">No choice to make. Action becomes automatic. Decision-making disappears.</span>
            </div>
          </div>
        </div>
      )}

      <p className="text-dark-400 text-sm mt-4 italic">
        "If man knew the future, he would not have to choose and would not act." — Mises
      </p>
    </div>
  );
}

// Interactive demo comparing class probability vs case probability
function ProbabilityTypesDemo() {
  const [selectedType, setSelectedType] = useState<'class' | 'case'>('class');

  const types = {
    class: {
      name: 'Class Probability',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      definition: 'We know everything about the behavior of an entire class of events, but nothing about which specific individual outcome will occur.',
      examples: [
        {
          situation: 'Rolling a fair die',
          knowledge: 'Each number has 1/6 probability',
          limitation: 'Cannot predict which number will come up on the next roll',
        },
        {
          situation: 'Mortality statistics',
          knowledge: '70 out of 100 patients with condition X survive',
          limitation: 'Cannot predict if this specific patient will survive',
        },
        {
          situation: 'Roulette wheel',
          knowledge: 'Red comes up 18/38 times on average',
          limitation: 'Cannot predict the next spin',
        },
      ],
      applicability: 'Natural sciences, actuarial science, games of chance',
    },
    case: {
      name: 'Case Probability',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/10',
      borderColor: 'border-primary-500/30',
      definition: 'We know some factors that will affect a particular outcome, but are ignorant of other factors. The event is unique, not a member of a well-defined class.',
      examples: [
        {
          situation: 'Presidential election',
          knowledge: 'Polling data, economic conditions, candidate qualities',
          limitation: 'This election is unique—no frequency distribution applies',
        },
        {
          situation: 'Business venture',
          knowledge: 'Market research, team capabilities, industry trends',
          limitation: 'This specific venture has never been tried before',
        },
        {
          situation: 'Tomorrow\'s football match',
          knowledge: 'Team history, player conditions, weather forecast',
          limitation: 'This exact match has never occurred',
        },
      ],
      applicability: 'Human action, historical events, entrepreneurship',
    },
  };

  const current = types[selectedType];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Two Types of Probability</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSelectedType('class')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedType === 'class'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Class Probability
        </button>
        <button
          onClick={() => setSelectedType('case')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedType === 'case'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Case Probability
        </button>
      </div>

      <div className={`rounded-lg p-4 border ${current.bgColor} ${current.borderColor}`}>
        <h5 className={`font-medium mb-3 ${current.color}`}>{current.name}</h5>
        <p className="text-dark-200 mb-4">{current.definition}</p>

        <div className="space-y-3">
          {current.examples.map((ex, i) => (
            <div key={i} className="bg-dark-900 rounded-lg p-3">
              <div className="font-medium text-dark-100 mb-2">{ex.situation}</div>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-green-400">What we know: </span>
                  <span className="text-dark-300">{ex.knowledge}</span>
                </div>
                <div>
                  <span className="text-red-400">Limitation: </span>
                  <span className="text-dark-300">{ex.limitation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-dark-700">
          <span className="text-dark-400 text-sm">Applies to: </span>
          <span className="text-dark-200 text-sm">{current.applicability}</span>
        </div>
      </div>
    </div>
  );
}

// Interactive demo showing insurance vs gambling
function InsuranceVsGamblingDemo() {
  const [policyCount, setPolicyCount] = useState(1);

  const getStatus = () => {
    if (policyCount === 1) return { type: 'gambling', color: 'red' };
    if (policyCount < 100) return { type: 'risky', color: 'amber' };
    if (policyCount < 1000) return { type: 'approaching insurance', color: 'yellow' };
    return { type: 'insurance', color: 'green' };
  };

  const status = getStatus();

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">From Gambling to Insurance</h4>
      <p className="text-dark-400 text-sm mb-4">
        The difference between gambling and insurance is not mathematical sophistication—it's <em>pooling the entire class</em>.
      </p>

      <div className="mb-6">
        <label className="text-dark-300 text-sm block mb-2">
          Number of life insurance policies sold: <strong className="text-primary-400">{policyCount.toLocaleString()}</strong>
        </label>
        <input
          type="range"
          min="1"
          max="10000"
          value={policyCount}
          onChange={(e) => setPolicyCount(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>1</span>
          <span>100</span>
          <span>1,000</span>
          <span>10,000</span>
        </div>
      </div>

      <div className={`rounded-lg p-4 border ${
        status.color === 'red' ? 'bg-red-500/10 border-red-500/30' :
        status.color === 'amber' ? 'bg-amber-500/10 border-amber-500/30' :
        status.color === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
        'bg-green-500/10 border-green-500/30'
      }`}>
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-2xl ${
            status.color === 'red' ? 'text-red-400' :
            status.color === 'amber' ? 'text-amber-400' :
            status.color === 'yellow' ? 'text-yellow-400' :
            'text-green-400'
          }`}>
            {status.type === 'gambling' ? '🎲' :
             status.type === 'risky' ? '⚠️' :
             status.type === 'approaching insurance' ? '📊' : '🛡️'}
          </span>
          <span className={`font-medium capitalize ${
            status.color === 'red' ? 'text-red-400' :
            status.color === 'amber' ? 'text-amber-400' :
            status.color === 'yellow' ? 'text-yellow-400' :
            'text-green-400'
          }`}>
            This is {status.type}
          </span>
        </div>

        <p className="text-dark-200 text-sm">
          {policyCount === 1 && 'With only one policy, the company is betting on a single individual. Whether that person lives or dies is unpredictable—pure gambling.'}
          {policyCount > 1 && policyCount < 100 && 'With a handful of policies, outcomes are still highly variable. A few unexpected deaths could bankrupt the company.'}
          {policyCount >= 100 && policyCount < 1000 && 'As the pool grows, the law of large numbers begins to work. Actual deaths approach the statistical average.'}
          {policyCount >= 1000 && 'With a large pool, the company can reliably predict total deaths. Individual uncertainty becomes aggregate certainty—this is insurance.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-red-400 font-medium mb-2">Gambling</h5>
          <p className="text-dark-300 text-sm">
            Betting on individual outcomes when you only know class frequencies. Cannot be made safe by any actuarial technique.
          </p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-green-400 font-medium mb-2">Insurance</h5>
          <p className="text-dark-300 text-sm">
            Pooling the entire class so that class probability becomes a practical certainty. Individual risk disappears into aggregate predictability.
          </p>
        </div>
      </div>
    </div>
  );
}

// Interactive demo distinguishing betting from gambling
function BettingVsGamblingDemo() {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const activities = [
    {
      name: 'Casino Roulette',
      type: 'gambling',
      probabilityType: 'Class',
      knowledge: 'Mathematical odds (18/38 for red)',
      understanding: 'None—understanding human factors is useless',
      explanation: 'Pure class probability. The wheel has no intentions. Past spins don\'t affect future ones.',
    },
    {
      name: 'Presidential Election Bet',
      type: 'betting',
      probabilityType: 'Case',
      knowledge: 'Polls, economic data, historical patterns',
      understanding: 'Essential—you must understand voters, candidates, politics',
      explanation: 'Pure case probability. This exact election will never repeat. Frequency data doesn\'t exist.',
    },
    {
      name: 'Horse Racing',
      type: 'mixed',
      probabilityType: 'Both',
      knowledge: 'Track records, breeding, past performance',
      understanding: 'Helpful—understanding horses, jockeys, conditions matters',
      explanation: 'Mixed—class probability (track statistics) combines with case probability (this specific race).',
    },
    {
      name: 'Business Investment',
      type: 'betting',
      probabilityType: 'Case',
      knowledge: 'Market data, team track record, industry trends',
      understanding: 'Critical—you must understand the business, market, people',
      explanation: 'Primarily case probability. This venture is unique. No frequency distribution applies.',
    },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Betting vs. Gambling</h4>

      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {activities.map((activity, i) => (
          <button
            key={i}
            onClick={() => setSelectedActivity(selectedActivity === i ? null : i)}
            className={`p-4 rounded-lg text-left transition-all ${
              selectedActivity === i
                ? 'bg-primary-600 text-white ring-2 ring-primary-400'
                : 'bg-dark-900 text-dark-200 hover:bg-dark-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium">{activity.name}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                activity.type === 'gambling'
                  ? 'bg-red-500/20 text-red-400'
                  : activity.type === 'betting'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-amber-500/20 text-amber-400'
              }`}>
                {activity.type}
              </span>
            </div>
            <span className="text-sm opacity-70">{activity.probabilityType} probability</span>
          </button>
        ))}
      </div>

      {selectedActivity !== null && (
        <div className="bg-dark-900 rounded-lg p-4 animate-fadeIn">
          <h5 className="text-primary-400 font-medium mb-3">{activities[selectedActivity].name}</h5>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-dark-400">Knowledge available: </span>
              <span className="text-dark-200">{activities[selectedActivity].knowledge}</span>
            </div>
            <div>
              <span className="text-dark-400">Role of understanding: </span>
              <span className="text-dark-200">{activities[selectedActivity].understanding}</span>
            </div>
            <div className="bg-dark-800 rounded-lg p-3 mt-3">
              <p className="text-dark-300">{activities[selectedActivity].explanation}</p>
            </div>
          </div>
        </div>
      )}

      <Callout type="insight" title="The Key Distinction">
        <strong>Betting</strong> involves risking money where understanding of human action and unique circumstances matters.
        <strong> Gambling</strong> involves risking money where only frequency knowledge is relevant and understanding adds nothing.
      </Callout>
    </div>
  );
}

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        If time introduces sequence into action, <em>uncertainty</em> introduces the fundamental challenge that makes
        action both necessary and meaningful. In this chapter, Mises develops his crucial distinction between
        two entirely different concepts that share the name "probability."
      </p>

      {/* Uncertainty of the Future */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Uncertainty of the Future</h2>

      <p className="text-dark-200 mb-4">
        The future is inherently uncertain. Even if we accept that natural laws operate deterministically,
        humans can never know all the relevant factors that will determine future events. This uncertainty
        is not a mere inconvenience—it is the <em>precondition</em> for action itself.
      </p>

      <UncertaintyActionDemo />

      <Callout type="definition" title="Uncertainty and Action">
        "If man knew the future, he would not have to choose and would not act. He would be like an
        automaton, reacting to stimuli without any will of his own." The very concept of choice
        presupposes that outcomes are not predetermined in the actor's mind.
      </Callout>

      <p className="text-dark-200 mb-4">
        This insight has profound implications. It means that the elimination of uncertainty would not
        be a blessing but the elimination of human agency itself. The economist, studying human action,
        must always account for this irreducible uncertainty.
      </p>

      {/* The Meaning of Probability */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Meaning of Probability</h2>

      <p className="text-dark-200 mb-4">
        Mises argues that the mathematical treatment of probability has created confusion by treating
        fundamentally different situations with the same terminology. He identifies <strong className="text-primary-400">two
        entirely different fields</strong> that share only one common feature: incomplete knowledge.
      </p>

      <ProbabilityTypesDemo />

      <CardGrid>
        <Card title="Class Probability" variant="default">
          Applies to <strong>natural sciences</strong> governed by causality. We understand the entire class
          of events but cannot predict specific individual outcomes. This is the domain of actuarial science
          and games of chance.
        </Card>
        <Card title="Case Probability" variant="primary">
          Applies to <strong>human action</strong> and historical events, governed by teleology (means-ends
          reasoning). We know some factors affecting an outcome while remaining ignorant of others.
          The event is <em>unique</em>—it forms its own class.
        </Card>
      </CardGrid>

      {/* Class Probability */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Class Probability</h2>

      <p className="text-dark-200 mb-4">
        In class probability, we possess complete knowledge about the behavior of an <em>entire class</em> of
        events, but we lack knowledge about which specific outcome will occur in any individual instance.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Examples of Class Probability</h4>
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-blue-400 font-medium mb-2">Dice Rolling</h5>
            <p className="text-dark-300 text-sm">
              We know that each number will come up approximately 1/6 of the time over many rolls.
              But we cannot predict any single roll. The calculus of probability tells us nothing
              that could help us win.
            </p>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-blue-400 font-medium mb-2">Mortality Statistics</h5>
            <p className="text-dark-300 text-sm">
              We know that of 1,000 people aged 40, a certain number will die within the year.
              But this tells us nothing about whether <em>this particular</em> 40-year-old will die.
              The individual case remains uncertain.
            </p>
          </div>
        </div>
      </div>

      <Callout type="warning" title="Limitation of Class Probability">
        The calculus of probability "neither expands nor deepens our knowledge." It provides a symbolic
        presentation of what we already know about the class, but cannot help us predict individual cases.
        A gambler cannot use probability theory to improve his odds on the next spin.
      </Callout>

      {/* Case Probability */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Case Probability</h2>

      <p className="text-dark-200 mb-4">
        Case probability applies when we face a <strong className="text-primary-400">unique event</strong> that
        is not a member of any larger, well-defined class. We know some factors that will influence the outcome,
        but we are ignorant of others.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">The Medical Example</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-blue-400 font-medium mb-2">Class Probability View</h5>
            <p className="text-dark-300 text-sm">
              Statistics show 70 out of 100 patients with this condition recover.
            </p>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-primary-400 font-medium mb-2">Case Probability View</h5>
            <p className="text-dark-300 text-sm">
              This patient is young and vigorous. The doctor's understanding of this individual case
              leads to a different assessment than the raw statistics would suggest.
            </p>
          </div>
        </div>
        <p className="text-dark-400 text-sm mt-4 italic">
          Both viewpoints coexist. The doctor uses class statistics but also exercises judgment about
          the unique circumstances of this patient.
        </p>
      </div>

      <Callout type="insight" title="Numerical Case Probability Is Meaningless">
        When someone says "there is a 70% probability that Candidate X will win the election," this is
        <strong> purely metaphorical</strong>. Elections are unique events—there is no frequency distribution
        of "this exact election." Such statements express confidence, not mathematical probability.
      </Callout>

      {/* Insurance and Gambling */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Insurance vs. Gambling</h2>

      <p className="text-dark-200 mb-4">
        Mises offers a penetrating analysis of what distinguishes insurance from gambling. The difference
        is not mathematical sophistication—it is whether the operator <em>pools the entire class</em> of events.
      </p>

      <InsuranceVsGamblingDemo />

      <p className="text-dark-200 mb-4">
        From the perspective of the <em>insured individual</em>, taking out a policy is still a form of gambling—
        betting that the bad event will occur. But from the perspective of the insurance <em>company</em>,
        if it pools enough policies, individual uncertainty transforms into aggregate predictability.
      </p>

      {/* Betting, Gambling, and Gaming */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Betting, Gambling, and Gaming</h2>

      <p className="text-dark-200 mb-4">
        Mises distinguishes between activities where <strong className="text-primary-400">understanding</strong> matters
        (betting) and activities where only <strong className="text-blue-400">frequency knowledge</strong> matters (gambling).
      </p>

      <BettingVsGamblingDemo />

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Games vs. Markets</h3>

      <p className="text-dark-200 mb-4">
        Mises also warns against confusing <em>games</em> with <em>markets</em>. In a game, competitors seek to
        defeat opponents—one wins, another loses. In markets, all participants can benefit simultaneously
        through voluntary exchange.
      </p>

      <CardGrid>
        <Card title="Games" variant="warning">
          Zero-sum or negative-sum. Victory requires defeat of opponents. Game theory applies—strategy
          involves anticipating and countering opponent moves.
        </Card>
        <Card title="Markets" variant="success">
          Positive-sum. Exchange benefits all parties. Cooperation, not competition, is the fundamental
          relationship. Game theory is largely inappropriate for economic analysis.
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Uncertainty is not a problem to be eliminated—it is the precondition for human action and choice.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Class probability applies to repeatable events where we know the class but not individual outcomes (dice, mortality tables).</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Case probability applies to unique events in human action where we know some factors but not others (elections, business ventures).</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Numerical expressions of case probability ("70% chance") are metaphorical, not mathematically meaningful.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Insurance transforms gambling into predictability by pooling the entire class; individual policies remain gambles.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">6.</span>
            <span>Markets differ fundamentally from games: exchange benefits all parties, while games produce winners and losers.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        With the concepts of time and uncertainty established, we have completed the foundational
        analysis of human action. Part Two will now turn to <em>action within the framework of society</em>—
        how individuals interact, cooperate, and form the complex web of relationships we call the economy.
      </p>
    </LessonLayout>
  );
}
