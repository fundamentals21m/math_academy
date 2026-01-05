import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo comparing logical systems vs praxeological systems
function TimeVsLogicDemo() {
  const [selectedSystem, setSelectedSystem] = useState<'logic' | 'praxeology'>('logic');

  const systems = {
    logic: {
      name: 'Logical/Mathematical System',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      characteristics: [
        { label: 'Time', value: 'Timeless—implications exist simultaneously' },
        { label: 'Causality', value: 'Not required—only logical necessity' },
        { label: 'Change', value: 'No change—truths are eternal' },
        { label: 'Sequence', value: 'No before/after—all implications coexist' },
      ],
      example: 'If A implies B, and B implies C, then A implies C. This is true regardless of time.',
    },
    praxeology: {
      name: 'Praxeological System',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/10',
      borderColor: 'border-primary-500/30',
      characteristics: [
        { label: 'Time', value: 'Essential—action unfolds through time' },
        { label: 'Causality', value: 'Required—action is cause, result is effect' },
        { label: 'Change', value: 'Central—action aims to change future states' },
        { label: 'Sequence', value: 'Sooner/later are fundamental categories' },
      ],
      example: 'If I plant seeds (action), crops will grow (effect). The planting must precede the harvest.',
    },
  };

  const current = systems[selectedSystem];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Logic vs. Praxeology</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSelectedSystem('logic')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedSystem === 'logic'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Mathematical Logic
        </button>
        <button
          onClick={() => setSelectedSystem('praxeology')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedSystem === 'praxeology'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Praxeology
        </button>
      </div>

      <div className={`rounded-lg p-4 border ${current.bgColor} ${current.borderColor}`}>
        <h5 className={`font-medium mb-4 ${current.color}`}>{current.name}</h5>

        <div className="grid gap-3 mb-4">
          {current.characteristics.map((char, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-dark-400 w-24 shrink-0">{char.label}:</span>
              <span className="text-dark-200">{char.value}</span>
            </div>
          ))}
        </div>

        <div className="bg-dark-900 rounded-lg p-3 mt-4">
          <span className="text-dark-400 text-sm">Example:</span>
          <p className="text-dark-200 mt-1">{current.example}</p>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Praxeology is aprioristic like logic, but unlike logic, it necessarily incorporates time and causality.
      </p>
    </div>
  );
}

// Interactive demo showing the "extended present" concept
function ExtendedPresentDemo() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      title: 'The Opportunity Window',
      time: 'Now',
      status: 'open',
      description: 'You see a bus approaching. The opportunity to board exists—this is your "present."',
      canAct: true,
    },
    {
      title: 'Present Continues',
      time: 'Moments later',
      status: 'open',
      description: 'The bus stops. You can still act—the present extends as long as the opportunity remains.',
      canAct: true,
    },
    {
      title: 'Present Ending',
      time: 'Bus doors closing',
      status: 'closing',
      description: 'The doors begin to close. The window of opportunity is narrowing—you must act now or lose the chance.',
      canAct: true,
    },
    {
      title: 'Past',
      time: 'Bus departed',
      status: 'closed',
      description: 'The bus has left. The opportunity is gone—that "present" has become "past." No action can change it now.',
      canAct: false,
    },
  ];

  const current = stages[stage];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Extended Present</h4>
      <p className="text-dark-400 text-sm mb-4">
        The praxeological "present" is not a mathematical instant—it's the window during which action is possible.
      </p>

      <div className="flex gap-2 mb-6">
        {stages.map((_, i) => (
          <button
            key={i}
            onClick={() => setStage(i)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              stage === i
                ? stages[i].status === 'closed'
                  ? 'bg-red-600 text-white'
                  : stages[i].status === 'closing'
                  ? 'bg-amber-600 text-white'
                  : 'bg-green-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className={`rounded-lg p-4 border ${
        current.status === 'closed'
          ? 'bg-red-500/10 border-red-500/30'
          : current.status === 'closing'
          ? 'bg-amber-500/10 border-amber-500/30'
          : 'bg-green-500/10 border-green-500/30'
      }`}>
        <div className="flex justify-between items-center mb-3">
          <h5 className={`font-medium ${
            current.status === 'closed'
              ? 'text-red-400'
              : current.status === 'closing'
              ? 'text-amber-400'
              : 'text-green-400'
          }`}>
            {current.title}
          </h5>
          <span className="text-dark-400 text-sm">{current.time}</span>
        </div>

        <p className="text-dark-200 mb-4">{current.description}</p>

        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-sm ${
            current.canAct
              ? 'bg-green-500/20 text-green-400'
              : 'bg-red-500/20 text-red-400'
          }`}>
            {current.canAct ? '✓ Action possible' : '✗ Action impossible'}
          </span>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setStage(Math.max(0, stage - 1))}
          disabled={stage === 0}
          className="px-4 py-2 bg-dark-700 rounded-lg text-dark-300 hover:bg-dark-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <button
          onClick={() => setStage(Math.min(stages.length - 1, stage + 1))}
          disabled={stage === stages.length - 1}
          className="px-4 py-2 bg-primary-600 rounded-lg text-white hover:bg-primary-500 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

// Interactive demo showing time economization even in paradise
function ParadiseDemo() {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const activities = [
    { name: 'Enjoying a feast', icon: '🍽️', duration: '2 hours' },
    { name: 'Listening to music', icon: '🎵', duration: '1 hour' },
    { name: 'Philosophical conversation', icon: '💭', duration: '3 hours' },
    { name: 'Viewing art', icon: '🎨', duration: '1 hour' },
    { name: 'Rest and contemplation', icon: '🧘', duration: '2 hours' },
  ];

  const totalHours = 24;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-2">Paradise: Still Scarce in Time</h4>
      <p className="text-dark-400 text-sm mb-4">
        Imagine a world where all material goods are free and abundant. You still have only 24 hours in a day.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="text-primary-400 font-medium mb-3">Available Pleasures</h5>
          <div className="space-y-2">
            {activities.map((activity, i) => (
              <button
                key={i}
                onClick={() => setSelectedActivity(selectedActivity === i ? null : i)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  selectedActivity === i
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-900 text-dark-200 hover:bg-dark-700'
                }`}
              >
                <span className="text-2xl">{activity.icon}</span>
                <span className="flex-1 text-left">{activity.name}</span>
                <span className="text-sm opacity-70">{activity.duration}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-amber-400 font-medium mb-3">The Problem Remains</h5>
          <div className="space-y-4 text-dark-300">
            <p>
              Even with unlimited material wealth, you face choices:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                Which pleasure to enjoy <em>first</em>?
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                How <em>long</em> to spend on each?
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                What to <em>give up</em> when time runs out?
              </li>
            </ul>

            <div className="bg-dark-800 rounded-lg p-3 mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-dark-400">Time budget:</span>
                <span className="text-dark-100">{totalHours} hours/day</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-dark-400">Total desired:</span>
                <span className="text-dark-100">9+ hours of activities</span>
              </div>
            </div>

            <p className="text-sm italic text-dark-400 mt-4">
              Time scarcity exists regardless of material abundance. Economizing is unavoidable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive demo showing sequential nature of actions
function SequentialActionDemo() {
  const [currentAction, setCurrentAction] = useState(0);

  const actions = [
    { name: 'Wake up', time: '7:00 AM', status: 'completed' },
    { name: 'Eat breakfast', time: '7:30 AM', status: 'completed' },
    { name: 'Check emails', time: '8:00 AM', status: 'current' },
    { name: 'Start work project', time: '8:30 AM', status: 'future' },
    { name: 'Attend meeting', time: '10:00 AM', status: 'future' },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-2">Actions Are Sequential</h4>
      <p className="text-dark-400 text-sm mb-4">
        An individual cannot perform two actions simultaneously. Each action has a "sooner" and "later."
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-dark-600" />

        <div className="space-y-4">
          {actions.map((action, i) => (
            <div
              key={i}
              className={`relative flex items-center gap-4 pl-10 ${
                i === currentAction ? 'opacity-100' : 'opacity-60'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-2 w-5 h-5 rounded-full border-2 ${
                  i < currentAction
                    ? 'bg-green-500 border-green-500'
                    : i === currentAction
                    ? 'bg-primary-500 border-primary-500 animate-pulse'
                    : 'bg-dark-800 border-dark-500'
                }`}
              />

              <div className={`flex-1 p-3 rounded-lg ${
                i === currentAction
                  ? 'bg-primary-500/20 border border-primary-500/30'
                  : 'bg-dark-900'
              }`}>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${
                    i === currentAction ? 'text-primary-400' : 'text-dark-200'
                  }`}>
                    {action.name}
                  </span>
                  <span className="text-dark-400 text-sm">{action.time}</span>
                </div>
              </div>

              <span className={`text-xs px-2 py-1 rounded ${
                i < currentAction
                  ? 'bg-green-500/20 text-green-400'
                  : i === currentAction
                  ? 'bg-primary-500/20 text-primary-400'
                  : 'bg-dark-700 text-dark-400'
              }`}>
                {i < currentAction ? 'Past' : i === currentAction ? 'Now' : 'Future'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => setCurrentAction(Math.max(0, currentAction - 1))}
          disabled={currentAction === 0}
          className="px-4 py-2 bg-dark-700 rounded-lg text-dark-300 hover:bg-dark-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Earlier
        </button>
        <button
          onClick={() => setCurrentAction(Math.min(actions.length - 1, currentAction + 1))}
          disabled={currentAction === actions.length - 1}
          className="px-4 py-2 bg-primary-600 rounded-lg text-white hover:bg-primary-500 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Later →
        </button>
      </div>

      <Callout type="insight" title="Value Scales Change">
        Because actions occur sequentially, not simultaneously, an actor's value scale may shift between
        actions. The preference revealed at 7 AM may differ from the preference at 10 AM.
      </Callout>
    </div>
  );
}

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Time is not merely a backdrop against which action occurs—it is a fundamental category of human action itself.
        In this chapter, Mises explores how the temporal dimension shapes all economic reasoning and distinguishes
        praxeology from purely logical systems.
      </p>

      {/* Time as a Praxeological Factor */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Time as a Praxeological Factor</h2>

      <p className="text-dark-200 mb-4">
        The concepts of <strong className="text-primary-400">change</strong> and <strong className="text-primary-400">time</strong> are
        inseparably linked. Human reason cannot conceive of timeless existence or timeless action.
        Every action is directed toward the future—it is planning and acting for a better tomorrow.
      </p>

      <p className="text-dark-200 mb-4">
        What distinguishes praxeology from pure logic is precisely this: while logic deals with timeless
        implications, praxeology necessarily incorporates the categories of both <em>time</em> and <em>causality</em>.
        The notions of "sooner" and "later," "cause" and "effect," are essential to praxeological reasoning.
      </p>

      <TimeVsLogicDemo />

      <Callout type="definition" title="Praxeology vs. Logic">
        Mathematics and formal logic are <strong>timeless</strong>—their truths hold independently of when they are
        considered. Praxeology is <strong>aprioristic</strong> like logic, but it necessarily includes change,
        sequence, and causality as fundamental elements.
      </Callout>

      {/* Past, Present, and Future */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Past, Present, and Future</h2>

      <p className="text-dark-200 mb-4">
        Man becomes conscious of time when he plans to convert a less satisfactory present state into
        a more satisfactory future state. The <strong className="text-primary-400">uneasiness</strong> that
        impels action is always about <em>expected future conditions</em> as they would develop without intervention.
      </p>

      <CardGrid>
        <Card title="The Past" variant="default">
          Irrevocably gone. No action can change what has already occurred. It can only be studied, interpreted,
          and learned from—but never altered.
        </Card>
        <Card title="The Future" variant="primary">
          The only realm action can influence. All planning, all economizing, all human striving is directed
          toward shaping future states of affairs.
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-4">
        But what about the <em>present</em>? Here Mises introduces a subtle but important distinction.
        The praxeological present is not a mathematical instant—it is an <strong className="text-amber-400">extended present</strong>,
        defined by the presence of a ripe opportunity for action.
      </p>

      <ExtendedPresentDemo />

      <Callout type="insight" title="The Extended Present">
        The present, in praxeological terms, is not a dimensionless point but a window of opportunity.
        It lasts as long as the conditions for a contemplated action persist. Once those conditions change,
        the present becomes past.
      </Callout>

      {/* Economization of Time */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Economization of Time</h2>

      <p className="text-dark-200 mb-4">
        Time is <strong className="text-primary-400">scarce</strong>. This fundamental fact remains true
        even in conditions where all material goods are superabundant. Mises asks us to imagine a paradise—
        the "Land of Cockaigne"—where every material desire can be satisfied without labor.
      </p>

      <p className="text-dark-200 mb-4">
        Even there, man would be forced to economize time. Why? Because satisfactions that are incompatible
        cannot be enjoyed simultaneously. You cannot feast and sleep at the same moment. You cannot
        simultaneously enjoy music and silent meditation. The sequence of activities matters.
      </p>

      <ParadiseDemo />

      <Callout type="warning" title="Time Cannot Be Stored">
        Unlike material goods, time cannot be accumulated. You cannot save Tuesday's hours to use on Wednesday.
        Each moment must be used as it comes or lost forever. This gives time a unique place in economic analysis.
      </Callout>

      {/* Temporal Relations Between Actions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Temporal Relations Between Actions</h2>

      <p className="text-dark-200 mb-4">
        A crucial insight: <strong className="text-primary-400">two actions of an individual are never synchronous</strong>.
        Their temporal relation is always that of "sooner" and "later." You cannot simultaneously choose
        coffee over tea and tea over coffee. Actions occur in sequence.
      </p>

      <SequentialActionDemo />

      <p className="text-dark-200 mb-4">
        This has profound implications for value theory. Since actions are sequential, the "value scale"
        we attribute to an actor is not a fixed list existing in his mind. Rather, it is <em>inferred</em> by
        observers to make sense of his actions. The action is the brute fact; the value scale is an interpretive tool.
      </p>

      <CardGrid>
        <Card title="No Fixed Value Scales" variant="warning">
          Individuals don't possess unchanging preference rankings that "cause" their behavior. Preferences
          are revealed through choices made at specific moments in time.
        </Card>
        <Card title="Transitivity Problem" variant="default">
          The claim that preferences must be "transitive" (if A {'>'} B and B {'>'} C, then A {'>'} C) assumes a consistency
          impossible across time. Value scales can shift between sequential actions.
        </Card>
      </CardGrid>

      {/* Mises vs. Mainstream Economics */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Time in Austrian vs. Mainstream Economics</h2>

      <p className="text-dark-200 mb-4">
        Mises emphasizes what might be called <strong className="text-primary-400">"Bergsonian time"</strong>—real,
        irreversible, lived time—as opposed to the mechanical, Newtonian time of physics and mainstream
        economic models.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-blue-400 font-medium mb-3">Mainstream Models</h5>
            <ul className="space-y-2 text-dark-300 text-sm">
              <li>• Time is another variable, like quantity</li>
              <li>• Past and future are symmetric</li>
              <li>• Equilibrium states are analyzed</li>
              <li>• Actors are assumed to have perfect foresight</li>
            </ul>
          </div>
          <div className="bg-dark-900 rounded-lg p-4">
            <h5 className="text-primary-400 font-medium mb-3">Austrian/Praxeological View</h5>
            <ul className="space-y-2 text-dark-300 text-sm">
              <li>• Time is irreversible and unidirectional</li>
              <li>• Future is radically uncertain</li>
              <li>• Process of action is central</li>
              <li>• Actors face genuine uncertainty</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Time and change are inseparable—praxeology differs from pure logic by incorporating temporal sequence and causality.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Action can only influence the future. The past is irrevocable; the present is an "extended" window of opportunity.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Time must be economized even when material goods are abundant—satisfactions cannot all be enjoyed simultaneously.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Actions are always sequential, never synchronous. Value scales are inferred from choices, not fixed prior to them.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Austrian economics treats time as irreversible and unidirectional, unlike models that treat it as just another variable.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        Understanding the temporal nature of action sets the stage for the next crucial topic: <em>uncertainty</em>.
        Because action takes place through time, and the future is not yet determined, every actor faces
        genuine uncertainty about the outcomes of his choices. This uncertainty is not mere ignorance
        that could be eliminated with more information—it is inherent in the human condition.
      </p>
    </LessonLayout>
  );
}
