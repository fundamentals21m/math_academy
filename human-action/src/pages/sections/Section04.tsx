import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing the relationship between ends and means
function EndsAndMeansExplorer() {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = [
    {
      action: 'Going to the grocery store',
      immediateEnd: 'Obtaining food',
      ultimateEnd: 'Relieving hunger (removing uneasiness)',
      means: ['Time spent traveling', 'Money for purchase', 'Vehicle or transportation', 'Knowledge of store location'],
    },
    {
      action: 'Studying economics',
      immediateEnd: 'Understanding economic principles',
      ultimateEnd: 'Better decision-making in life (removing uncertainty)',
      means: ['Time devoted to study', 'Books and materials', 'Mental effort and attention', 'Foregone leisure activities'],
    },
    {
      action: 'Saving money',
      immediateEnd: 'Accumulating capital',
      ultimateEnd: 'Future security or purchasing power (removing anxiety)',
      means: ['Current income', 'Self-discipline', 'Foregone present consumption', 'A savings vehicle (bank, etc.)'],
    },
  ];

  const current = examples[selectedExample];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Ends and Means Explorer</h4>

      <div className="flex gap-2 mb-6 flex-wrap">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => setSelectedExample(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedExample === i
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {ex.action}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-primary-400 font-medium mb-3">The End (Goal)</h5>
          <div className="space-y-3">
            <div>
              <span className="text-dark-400 text-sm">Immediate End:</span>
              <p className="text-dark-100">{current.immediateEnd}</p>
            </div>
            <div>
              <span className="text-dark-400 text-sm">Ultimate End:</span>
              <p className="text-dark-100">{current.ultimateEnd}</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-amber-400 font-medium mb-3">The Means (Things Employed)</h5>
          <ul className="space-y-2">
            {current.means.map((mean, i) => (
              <li key={i} className="flex items-start gap-2 text-dark-200">
                <span className="text-amber-500 mt-1">→</span>
                {mean}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        The end is always the relief from some felt uneasiness. Means are scarce goods directed toward the attainment of ends.
      </p>
    </div>
  );
}

// Interactive demo showing ordinal vs cardinal value ranking
function ValueScaleDemo() {
  const [items, setItems] = useState([
    { id: 1, name: 'Cup of coffee', rank: 1 },
    { id: 2, name: 'Extra hour of sleep', rank: 2 },
    { id: 3, name: 'Morning workout', rank: 3 },
    { id: 4, name: 'Checking emails', rank: 4 },
  ]);

  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index > 0) {
      const newItems = [...items];
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
      newItems.forEach((item, i) => (item.rank = i + 1));
      setItems(newItems);
    } else if (direction === 'down' && index < items.length - 1) {
      const newItems = [...items];
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
      newItems.forEach((item, i) => (item.rank = i + 1));
      setItems(newItems);
    }
  };

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-2">The Scale of Value</h4>
      <p className="text-dark-400 text-sm mb-4">
        Drag items to reorder your preferences. Notice: we can only say what you prefer <em>more</em> or <em>less</em>, not by how much.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="text-primary-400 font-medium mb-3">Your Ordinal Ranking</h5>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-dark-900 rounded-lg p-3"
              >
                <span className="text-2xl font-bold text-primary-500 w-8">{item.rank}</span>
                <span className="text-dark-100 flex-1">{item.name}</span>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveItem(index, 'up')}
                    disabled={index === 0}
                    className="px-2 py-1 bg-dark-700 rounded text-dark-300 hover:bg-dark-600 disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveItem(index, 'down')}
                    disabled={index === items.length - 1}
                    className="px-2 py-1 bg-dark-700 rounded text-dark-300 hover:bg-dark-600 disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                  >
                    ▼
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-900 rounded-lg p-4">
          <h5 className="text-amber-400 font-medium mb-3">Key Insight</h5>
          <div className="space-y-4 text-dark-300">
            <p>
              <strong className="text-dark-100">Ordinal:</strong> We can only rank preferences (1st, 2nd, 3rd...).
              This is what economics can work with.
            </p>
            <p>
              <strong className="text-dark-100">Cardinal:</strong> Assigning numerical values (e.g., coffee = 7 utils,
              sleep = 5 utils) is impossible because satisfaction cannot be measured.
            </p>
            <div className="border-l-2 border-primary-500 pl-3 mt-4 text-sm">
              "There is no unit of value. The consumer does not assign numerical values to goods;
              he simply ranks them." — Mises
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive demo showing action as exchange
function ActionAsExchangeDemo() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Initial State',
      description: 'You have limited time this evening. You feel some uneasiness about how to spend it.',
      given: 'Free evening (2 hours)',
      foregone: '—',
      gained: '—',
    },
    {
      title: 'Options Considered',
      description: 'You consider your options: watching a movie, reading a book, or exercising.',
      given: 'Free evening (2 hours)',
      foregone: '—',
      gained: '—',
    },
    {
      title: 'Decision Made',
      description: 'You choose to read a book because it ranks highest on your value scale at this moment.',
      given: 'Free evening (2 hours)',
      foregone: 'Movie and exercise (the alternatives)',
      gained: 'Reading experience + knowledge',
    },
    {
      title: 'The Exchange',
      description: 'Every action is an exchange: you give up your next-best alternative (the cost) to obtain what you value more (the profit).',
      given: 'Free evening (2 hours)',
      foregone: 'Watching the movie (your COST)',
      gained: 'Reading satisfaction (your PROFIT)',
    },
  ];

  const current = steps[step];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Action as Exchange</h4>

      <div className="flex gap-2 mb-6">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
              step === i
                ? 'bg-primary-600 text-white'
                : step > i
                ? 'bg-green-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <h5 className="text-primary-400 font-medium">{current.title}</h5>
        <p className="text-dark-200 mt-2">{current.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <span className="text-dark-400 text-sm block mb-2">What You Have</span>
          <p className="text-dark-100">{current.given}</p>
        </div>
        <div className={`bg-dark-900 rounded-lg p-4 text-center ${current.foregone !== '—' ? 'ring-2 ring-red-500/50' : ''}`}>
          <span className="text-dark-400 text-sm block mb-2">What You Give Up (Cost)</span>
          <p className={current.foregone !== '—' ? 'text-red-400' : 'text-dark-500'}>{current.foregone}</p>
        </div>
        <div className={`bg-dark-900 rounded-lg p-4 text-center ${current.gained !== '—' ? 'ring-2 ring-green-500/50' : ''}`}>
          <span className="text-dark-400 text-sm block mb-2">What You Gain (Profit)</span>
          <p className={current.gained !== '—' ? 'text-green-400' : 'text-dark-500'}>{current.gained}</p>
        </div>
      </div>

      {step === 3 && (
        <Callout type="insight" title="The Fundamental Truth">
          Every human action aims at exchanging a less satisfactory state for a more satisfactory one.
          The actor always "profits" in the sense that he prefers the result to the cost—otherwise he would not act.
        </Callout>
      )}

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

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Having established that humans act purposefully and that we can derive universal laws from this insight,
        Mises now analyzes the fundamental categories inherent in every action. This chapter introduces the
        building blocks that will underpin all subsequent economic analysis.
      </p>

      {/* Ends and Means */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Ends and Means</h2>

      <p className="text-dark-200 mb-4">
        Every action aims at an <strong className="text-primary-400">end</strong>—a goal the actor wishes to achieve.
        The ultimate end of every action is always the same: <em>the removal of some felt uneasiness</em>.
        Whether we're eating breakfast, studying, or building a business, we act because our current state
        is less satisfactory than the state we hope to achieve.
      </p>

      <p className="text-dark-200 mb-4">
        <strong className="text-amber-400">Means</strong> are the things employed to attain ends. Anything that
        an actor believes can contribute to the achievement of his goals is a means. Means are necessarily
        <em>scarce</em>—if they were available in unlimited abundance, they would be "general conditions of welfare,"
        not economic goods requiring economization.
      </p>

      <EndsAndMeansExplorer />

      <Callout type="definition" title="Economic Goods">
        Means that are scarce and must be allocated among competing ends are called <strong>economic goods</strong>.
        Things that exist in superabundance (like air in most circumstances) are called <strong>free goods</strong>
        and require no economizing action.
      </Callout>

      {/* The Scale of Value */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Scale of Value</h2>

      <p className="text-dark-200 mb-4">
        When faced with multiple possible ends and limited means, the actor must choose. This choice reveals
        a <strong className="text-primary-400">scale of value</strong>—an ordering of preferences from most
        to least urgent. The crucial insight is that value is <em>ordinal</em>, not cardinal.
      </p>

      <CardGrid>
        <Card title="Ordinal Value" variant="primary">
          We can say that A is preferred to B, and B is preferred to C. This ranking (1st, 2nd, 3rd) is
          meaningful and observable through choice.
        </Card>
        <Card title="Cardinal Value" variant="warning">
          We <em>cannot</em> say that A is worth "twice as much" as B. Value cannot be measured in units.
          There is no "util" that could serve as a yardstick.
        </Card>
      </CardGrid>

      <ValueScaleDemo />

      <p className="text-dark-200 mb-4">
        The scale of value is not a fixed list existing in the actor's mind before action. Rather,
        it exists only in the action itself. When you choose coffee over tea, your preference is
        demonstrated—not measured. The value scale is <em>reconstructed</em> by the observer from
        the choices made.
      </p>

      {/* The Scale of Needs */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">The Scale of Needs</h2>

      <p className="text-dark-200 mb-4">
        While classical economists spoke of a hierarchy of needs (necessities before luxuries,
        physiological before psychological), Mises notes that this is a simplification. In reality,
        the actor's value scale at any moment reflects all his felt uneasinesses at once.
      </p>

      <Callout type="insight" title="No Objective Hierarchy">
        There is no scientifically valid way to rank "types" of needs. A starving artist might choose
        to buy paint rather than food. An ascetic might choose meditation over comfort. The value scale
        is always individual and subjective.
      </Callout>

      <p className="text-dark-200 mb-4">
        What matters economically is not some abstract classification of needs, but the actual choices
        made by acting individuals. Economics doesn't judge whether you <em>should</em> prefer bread to
        circuses—it only observes that you <em>do</em> prefer whatever you choose.
      </p>

      {/* Action as Exchange */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Action as an Exchange</h2>

      <p className="text-dark-200 mb-4">
        Perhaps the most profound insight of this chapter: <strong className="text-primary-400">every action
        is an exchange</strong>. The actor always gives up something (his next-best alternative) in order
        to obtain something he values more highly.
      </p>

      <ActionAsExchangeDemo />

      <CardGrid>
        <Card title="Cost" variant="warning">
          The cost of any action is <em>not</em> the money spent or effort exerted, but the value of the
          <strong> best foregone alternative</strong>. Economists call this "opportunity cost."
        </Card>
        <Card title="Profit" variant="success">
          Profit is the <em>subjective gain</em> from action—the difference in satisfaction between the
          state attained and the state that would have existed without the action.
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4">
        In this sense, every actor "profits" from every completed action. If he didn't expect the action
        to improve his situation, he wouldn't undertake it. Of course, ex post, he may discover he was
        mistaken—but the fact that he acted proves he <em>expected</em> to profit.
      </p>

      <Callout type="warning" title="Profit Is Not Always Monetary">
        When Mises speaks of profit and cost, he means these in the broadest sense. A mother caring for
        her child "profits" from the satisfaction of nurturing, even without any monetary return. The
        "cost" is her foregone leisure or other activities.
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Every action aims at an end (removing uneasiness) and employs means (scarce goods) to achieve it.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Value is ordinal (rankable) not cardinal (measurable). We cannot compare utilities across persons or sum them up.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">3.</span>
            <span>There is no objective hierarchy of needs—the value scale is always individual and subjective.</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Every action is an exchange: the actor gives up his next-best alternative (cost) for what he prefers (profit).</span>
          </li>
          <li className="flex items-start gap-3 text-dark-200">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Both cost and profit are subjective—they exist in the mind of the actor, not in physical objects.</span>
          </li>
        </ul>
      </div>

      {/* Connection to Next Chapter */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">Looking Ahead</h2>

      <p className="text-dark-200">
        With the categories of ends, means, value scales, and exchange established, we have the conceptual
        foundation for analyzing human action. The next chapter will examine the temporal dimension of action—
        how the fact that action unfolds through time introduces the phenomena of uncertainty, planning,
        and the crucial role of time preference in economic life.
      </p>
    </LessonLayout>
  );
}
