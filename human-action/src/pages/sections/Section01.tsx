import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Prerequisites visualization
function PrerequisitesDemo() {
  const [activePrereq, setActivePrereq] = useState<number | null>(null);

  const prerequisites = [
    {
      id: 1,
      name: 'Uneasiness',
      description: 'A felt dissatisfaction with the present state of affairs',
      example: 'A person feels hungry, bored, or unfulfilled',
      icon: '😟',
      color: 'amber',
    },
    {
      id: 2,
      name: 'Image of Improvement',
      description: 'A mental conception of a more satisfactory state',
      example: 'The person imagines eating a meal, finding entertainment, or achieving a goal',
      icon: '💭',
      color: 'blue',
    },
    {
      id: 3,
      name: 'Expectation of Efficacy',
      description: 'Belief that purposeful behavior can remove or alleviate the uneasiness',
      example: 'The person believes going to the kitchen or restaurant will satisfy their hunger',
      icon: '🎯',
      color: 'emerald',
    },
  ];

  const allPresent = activePrereq === null;

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-amber-400">The Three Prerequisites of Action</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActivePrereq(null)}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            allPresent ? 'bg-amber-600 text-white' : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          All Three Present
        </button>
        {prerequisites.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePrereq(p.id)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activePrereq === p.id ? 'bg-rose-600 text-white' : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Missing: {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {prerequisites.map((p) => {
          const isMissing = activePrereq === p.id;
          return (
            <div
              key={p.id}
              className={`rounded-lg p-4 border transition-all ${
                isMissing
                  ? 'bg-dark-900 border-dark-600 opacity-50'
                  : 'bg-dark-800 border-amber-600/30'
              }`}
            >
              <div className="text-2xl mb-2">{p.icon}</div>
              <h5 className={`font-semibold mb-1 ${isMissing ? 'text-dark-500' : 'text-amber-400'}`}>
                {p.name}
              </h5>
              <p className="text-sm text-dark-400">{p.description}</p>
            </div>
          );
        })}
      </div>

      <div className={`rounded-lg p-4 text-center ${
        allPresent ? 'bg-emerald-900/30 border border-emerald-600/30' : 'bg-rose-900/30 border border-rose-600/30'
      }`}>
        <p className={`font-semibold ${allPresent ? 'text-emerald-400' : 'text-rose-400'}`}>
          {allPresent ? '✓ Action is possible!' : '✗ No action occurs'}
        </p>
        <p className="text-sm text-dark-400 mt-1">
          {allPresent
            ? 'When all three prerequisites are present, the individual will act to improve their situation.'
            : activePrereq === 1
            ? 'Without uneasiness, there is no motivation to change anything—contentment produces inaction.'
            : activePrereq === 2
            ? 'Without imagining a better state, there is no goal toward which to direct action.'
            : 'Without believing action can help, the person remains passive despite their dissatisfaction.'}
        </p>
      </div>
    </div>
  );
}

// Action vs Reaction comparison
function ActionReactionComparison() {
  const comparisons = [
    {
      action: 'Choosing to eat lunch',
      reaction: 'Salivating when smelling food',
      explanation: 'Eating is purposeful; salivation is involuntary physiological response',
    },
    {
      action: 'Deciding to move away from heat',
      reaction: 'Flinching from a hot surface',
      explanation: 'Moving away is deliberate; flinching is a reflex',
    },
    {
      action: 'Choosing not to respond to an insult',
      reaction: 'Feeling angry when insulted',
      explanation: 'Silence is purposeful restraint; the emotion is involuntary',
    },
    {
      action: 'Planning a career change',
      reaction: 'Heart racing during stress',
      explanation: 'Career planning is deliberate; physiological stress response is automatic',
    },
  ];

  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-dark-700">
            <th className="text-left py-3 px-4 text-amber-400 font-semibold">Human Action</th>
            <th className="text-left py-3 px-4 text-dark-400 font-semibold">Animal Reaction</th>
            <th className="text-left py-3 px-4 text-dark-500 font-semibold">Distinction</th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((c, i) => (
            <tr key={i} className="border-b border-dark-800">
              <td className="py-3 px-4 text-dark-200">{c.action}</td>
              <td className="py-3 px-4 text-dark-400">{c.reaction}</td>
              <td className="py-3 px-4 text-dark-500 text-xs">{c.explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Human action is purposeful behavior. Or we may say: Action is will put
        into operation and transformed into an agency, is aiming at ends and goals."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Ludwig von Mises, Human Action, Chapter I
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter I establishes the foundation of Mises's entire system: the concept of
        <strong className="text-amber-400"> human action</strong>. This is not merely
        a definition but the axiom from which all economic reasoning flows. Understanding
        what distinguishes purposeful action from mere reaction is essential for grasping
        the methodology of praxeology.
      </p>

      {/* Section 1: Purposeful Action and Animal Reaction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Purposeful Action and Animal Reaction</h2>

      <p className="my-4">
        Mises draws a sharp distinction between two categories of behavior:
        <strong className="text-amber-400"> purposeful action</strong> and
        <strong className="text-dark-400"> unconscious reaction</strong>. Human action
        is the ego's meaningful response to stimuli—conscious adjustment aimed at
        achieving desired ends.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-amber-600/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-3">Purposeful Action</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Conscious and deliberate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Directed toward chosen goals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Involves selection among alternatives</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Includes deliberate inaction</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Subject of praxeological study</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-600">
          <h3 className="text-lg font-semibold text-dark-400 mb-3">Unconscious Reaction</h3>
          <ul className="text-dark-400 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Reflexes and involuntary responses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Automatic nervous system activity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Cellular and organic processes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Not chosen or directed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Subject of natural science</span>
            </li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>Important insight:</strong> Mises includes <em>deliberate inaction</em>
          as a form of action. Choosing not to act when you could act is itself a purposeful
          choice. Passivity and omission, when consciously chosen, are just as much "action"
          as vigorous effort.
        </p>
      </Callout>

      <ActionReactionComparison />

      {/* Section 2: Prerequisites of Human Action */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Prerequisites of Human Action</h2>

      <p className="my-4">
        For action to occur, three conditions must be present simultaneously. If any
        one is missing, the individual will not—indeed, cannot—act. These prerequisites
        reveal the logical structure underlying all purposeful behavior.
      </p>

      <PrerequisitesDemo />

      <p className="my-4">
        Mises emphasizes that <strong className="text-amber-400">contentment</strong>—
        the absence of felt uneasiness—produces <strong>inaction</strong>. A perfectly
        contented being would have no reason to change anything. The very concept of
        action presupposes dissatisfaction with the present and hope for improvement.
      </p>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "The incentive that impels a man to act is always some uneasiness. A man
        perfectly content with the state of his affairs would have no incentive to
        change things."
      </blockquote>

      {/* Section 3: Human Action as an Ultimate Given */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Human Action as an Ultimate Given</h2>

      <p className="my-4">
        Mises makes a crucial methodological point: human action is an
        <strong className="text-amber-400"> ultimate given</strong>—a starting point
        that cannot be reduced to or explained by something more fundamental. We do
        not need to explain <em>why</em> humans act; we simply recognize <em>that</em>
        they do.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">What "Ultimate Given" Means</h4>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold shrink-0">1.</span>
            <span>
              <strong>Not derived from psychology:</strong> Praxeology does not ask
              <em>why</em> people have the values they have—it takes those values as data.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold shrink-0">2.</span>
            <span>
              <strong>Not reducible to physics:</strong> We cannot explain purposeful
              choice in terms of neurons firing or particles moving.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold shrink-0">3.</span>
            <span>
              <strong>Self-evident to reflection:</strong> Anyone who reflects on
              their own experience recognizes that they make purposeful choices.
            </span>
          </li>
        </ul>
      </div>

      <Callout type="note">
        <p>
          <strong>Praxeology vs. Psychology:</strong> Psychology asks what <em>causes</em>
          people to want certain things. Praxeology takes wants as given and asks what
          <em>follows</em> from the fact that people act on them. The two sciences have
          different starting points and different methods.
        </p>
      </Callout>

      {/* Section 4: Rationality and Objectivity */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Rationality of Human Action</h2>

      <p className="my-4">
        Mises makes a controversial but important claim:
        <strong className="text-amber-400"> human action is necessarily always rational</strong>.
        This does not mean people always make wise decisions or achieve their goals.
        It means that action, by definition, involves selecting means believed suitable
        for attaining ends.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">What "Rational" Means</h4>
          <p className="text-sm text-dark-300">
            Selecting means to achieve ends. If you act, you are, by definition,
            employing what you believe to be suitable means.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">What "Irrational" Cannot Mean</h4>
          <p className="text-sm text-dark-300">
            There is no such thing as "irrational action." Behavior that seems
            irrational either serves ends we don't understand or is not action at all.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Errors Are Possible</h4>
          <p className="text-sm text-dark-300">
            People can be mistaken about which means will achieve their ends.
            Error is not irrationality—it's incorrect judgment about causality.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Values Are Subjective</h4>
          <p className="text-sm text-dark-300">
            Praxeology does not judge ultimate ends. Whether someone values
            money, leisure, or salvation is beyond scientific critique.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        This framework achieves what Mises calls <strong className="text-amber-400">objectivity</strong>:
        by taking individuals' subjective valuations as data rather than judging them,
        praxeology can derive conclusions valid for all human action, regardless of
        the particular content of people's goals.
      </p>

      {/* Section 5: Causality as a Requirement */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Causality as a Requirement of Action</h2>

      <p className="my-4">
        To act is to intervene in the course of events to bring about a preferred
        outcome. But this presupposes understanding <em>how</em> to intervene—which
        requires the category of <strong className="text-amber-400">causality</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Why Action Requires Causality</h4>
        <div className="space-y-4 text-dark-300">
          <p>
            <strong>1. Identifying intervention points:</strong> To change outcomes,
            you must know which causes produce which effects. Without causal knowledge,
            you cannot know where to direct your efforts.
          </p>
          <p>
            <strong>2. Selecting means:</strong> Choosing means requires believing that
            those means will <em>cause</em> the desired end. "If I do X, then Y will result."
          </p>
          <p>
            <strong>3. Learning from experience:</strong> We improve our action by
            learning what works and what doesn't—i.e., by discovering causal relationships.
          </p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>A world without causality:</strong> In a world of pure randomness,
          where events had no causal connection, action would be impossible. You could
          not improve your situation because nothing you did would reliably lead to
          any particular outcome.
        </p>
      </Callout>

      {/* Section 6: The Alter Ego */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">6. The Alter Ego</h2>

      <p className="my-4">
        How do we understand other human beings? Mises argues that we treat them as
        <strong className="text-amber-400"> alter egos</strong>—other selves who, like us,
        are acting, thinking, purposeful beings. This is not a conclusion of natural
        science but a pragmatic framework that makes social life possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-amber-600/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-3">Understanding via Alter Ego</h3>
          <p className="text-dark-300 text-sm mb-3">
            We interpret others' behavior by imagining ourselves in their position
            and asking what ends and means we would employ.
          </p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Assumes purposeful intention</li>
            <li>• Seeks the "meaning" of actions</li>
            <li>• Foundation of social science</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-600">
          <h3 className="text-lg font-semibold text-dark-400 mb-3">Mechanistic Approach</h3>
          <p className="text-dark-400 text-sm mb-3">
            Treating humans as physical systems whose behavior is determined
            by prior causes, like billiard balls.
          </p>
          <ul className="text-dark-500 text-sm space-y-1">
            <li>• Ignores purpose and meaning</li>
            <li>• Cannot explain choice</li>
            <li>• Inadequate for social science</li>
          </ul>
        </div>
      </div>

      <p className="my-4">
        The alter ego assumption is not something we can prove—we cannot directly access
        another person's consciousness. But it is pragmatically indispensable. Social
        cooperation, communication, and understanding all rest on treating others as
        purposeful actors rather than mere objects.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Human action is purposeful behavior</strong>—conscious adjustment
              aimed at achieving ends, distinct from reflexes and involuntary responses.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Action requires <strong>three prerequisites</strong>: uneasiness,
              imagination of a better state, and belief that action can help.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Human action is an <strong>ultimate given</strong>—not reducible to
              psychology or physics, but the starting point of praxeological analysis.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Action is <strong>necessarily rational</strong>—meaning it involves
              selecting means for ends, not that it always succeeds or is wise.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Action presupposes <strong>causality</strong>—understanding that doing
              X leads to Y, enabling intervention in the course of events.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              We understand others as <strong>alter egos</strong>—purposeful beings
              like ourselves, enabling social cooperation and communication.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In Chapter II, Mises examines the
          <em> epistemological problems</em> of the sciences of human action—how we
          acquire knowledge about action, the distinction between praxeology and
          history, and the methodology of economic reasoning.
        </p>
      </Callout>
    </LessonLayout>
  );
}
