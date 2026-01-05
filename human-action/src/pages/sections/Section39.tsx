import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo: Science and Life
function ScienceAndLifeDemo() {
  const [showAnswer, setShowAnswer] = useState(false);

  const objection = {
    claim: 'Science is sterile because it refuses to say what we should value.',
    critics: 'Living, acting humans need guidance on ends, not just means.',
    demand: 'Science should tell us what is good, right, and worth pursuing.'
  };

  const response = {
    truth: 'Science does not value, but it provides all information needed for valuation.',
    service: 'Economics shows which means achieve which ends—the choice of ends remains with the actor.',
    value: 'By remaining value-free, science serves all values impartially.'
  };

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Science and Life</h4>

      <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg mb-4">
        <h5 className="font-medium text-red-400 mb-2">The Objection to Value-Free Science</h5>
        <p className="text-dark-200 text-sm mb-2">"{objection.claim}"</p>
        <p className="text-dark-300 text-sm">{objection.critics}</p>
        <p className="text-dark-400 text-sm italic mt-2">{objection.demand}</p>
      </div>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm mb-4"
      >
        {showAnswer ? 'Hide Response' : 'Show Mises\' Response'}
      </button>

      {showAnswer && (
        <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
          <h5 className="font-medium text-green-400 mb-2">Mises' Response</h5>
          <div className="space-y-2 text-sm">
            <p className="text-dark-200">
              <span className="text-green-400">•</span> {response.truth}
            </p>
            <p className="text-dark-200">
              <span className="text-green-400">•</span> {response.service}
            </p>
            <p className="text-dark-200">
              <span className="text-green-400">•</span> {response.value}
            </p>
          </div>
          <div className="mt-4 p-3 bg-dark-700 rounded">
            <p className="text-dark-200 text-sm">
              <span className="text-yellow-400 font-medium">Key Insight:</span> Science
              that dictates values serves only those values. Science that remains
              neutral about ends serves everyone who seeks to understand means.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive demo: Three Restrictions on Freedom
function ThreeRestrictionsDemo() {
  const [selectedRestriction, setSelectedRestriction] = useState<number | null>(null);

  const restrictions = [
    {
      name: 'Physical Laws',
      realm: 'Nature',
      example: 'Humans cannot fly unaided',
      science: 'Physics, Chemistry',
      freedom: 'Cannot be overcome by will alone'
    },
    {
      name: 'Biological Laws',
      realm: 'Life',
      example: 'Humans must eat, sleep, age',
      science: 'Biology, Medicine',
      freedom: 'Can be adapted to but not escaped'
    },
    {
      name: 'Praxeological Laws',
      realm: 'Action',
      example: 'Means must be adequate to ends',
      science: 'Economics, Praxeology',
      freedom: 'Cannot achieve ends with wrong means'
    }
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Three Restrictions on Human Freedom</h4>

      <p className="text-dark-300 text-sm mb-4">
        Human beings are not omnipotent. Three types of laws constrain what we
        can do and achieve. Click each to explore.
      </p>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {restrictions.map((r, i) => (
          <button
            key={i}
            onClick={() => setSelectedRestriction(selectedRestriction === i ? null : i)}
            className={`p-4 rounded-lg text-center transition-all ${
              selectedRestriction === i
                ? 'bg-blue-900/30 border-2 border-blue-500'
                : 'bg-dark-700 border-2 border-transparent hover:border-dark-500'
            }`}
          >
            <div className="text-2xl mb-2">{i === 0 ? '⚛️' : i === 1 ? '🧬' : '🎯'}</div>
            <div className="font-medium text-dark-100 text-sm">{r.name}</div>
            <div className="text-xs text-dark-400">{r.realm}</div>
          </button>
        ))}
      </div>

      {selectedRestriction !== null && (
        <div className="p-4 bg-dark-700 rounded-lg">
          <h5 className="font-medium text-dark-100 mb-3">
            {restrictions[selectedRestriction].name}
          </h5>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-dark-400">Example:</span>
              <p className="text-dark-200">{restrictions[selectedRestriction].example}</p>
            </div>
            <div>
              <span className="text-dark-400">Studied by:</span>
              <p className="text-dark-200">{restrictions[selectedRestriction].science}</p>
            </div>
            <div className="col-span-2">
              <span className="text-dark-400">Constraint on freedom:</span>
              <p className="text-dark-200">{restrictions[selectedRestriction].freedom}</p>
            </div>
          </div>

          {selectedRestriction === 2 && (
            <div className="mt-4 p-3 bg-blue-900/20 rounded">
              <p className="text-dark-200 text-sm">
                <span className="text-blue-400 font-medium">Praxeology's Subject:</span> The
                third restriction—the regularity of phenomena due to the connection between
                means and ends—is the subject of praxeology and its best-developed branch,
                economics.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Interactive demo: Economics and Values
function EconomicsValuesDemo() {
  const [showTruth, setShowTruth] = useState(false);

  const misconceptions = [
    {
      charge: 'Economics assumes humans only care about material goods',
      truth: 'Economics deals with action as such—any purposeful behavior toward any end'
    },
    {
      charge: 'Economics smuggles in capitalist values',
      truth: 'Economics describes what is, not what ought to be—applicable under any system'
    },
    {
      charge: 'Economics ignores higher human aspirations',
      truth: 'Economics explains how to achieve any aspiration, material or spiritual'
    },
    {
      charge: 'Economics reduces humans to calculating machines',
      truth: 'Economics studies the logic of choice, not the content of choices'
    }
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Economics and Judgments of Value</h4>

      <p className="text-dark-300 text-sm mb-4">
        Critics charge that economics makes hidden value judgments. Mises responds
        to these common misconceptions.
      </p>

      <button
        onClick={() => setShowTruth(!showTruth)}
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm mb-4"
      >
        {showTruth ? 'Hide Responses' : 'Reveal the Truth'}
      </button>

      <div className="space-y-3">
        {misconceptions.map((m, i) => (
          <div key={i} className="p-4 bg-dark-700 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-red-400 text-lg">✗</span>
              <div>
                <p className="text-dark-200 text-sm">{m.charge}</p>
                {showTruth && (
                  <div className="mt-2 pl-4 border-l-2 border-green-500">
                    <p className="text-green-400 text-sm">{m.truth}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showTruth && (
        <div className="mt-4 p-4 bg-dark-700 rounded-lg">
          <p className="text-dark-200 text-sm">
            <span className="text-yellow-400 font-medium">The Core Point:</span> Economics
            is the science of means, not ends. It tells you how to get what you want—
            the wanting is your business, not economics'.
          </p>
        </div>
      )}
    </div>
  );
}

// Interactive demo: The Treasure of Knowledge
function TreasureDemo() {
  const [revealed, setRevealed] = useState(false);

  const achievements = [
    { domain: 'Moral', contribution: 'Understanding of peaceful cooperation' },
    { domain: 'Intellectual', contribution: 'Framework for analyzing social phenomena' },
    { domain: 'Technological', contribution: 'Division of labor and specialization' },
    { domain: 'Therapeutic', contribution: 'Rising living standards, longer lives' },
  ];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Treasure of Economic Knowledge</h4>

      <p className="text-dark-300 text-sm mb-4">
        The body of economic knowledge is an essential element in the structure of
        human civilization. It is the foundation upon which modern industrialism
        and the achievements of the last centuries have been built.
      </p>

      <button
        onClick={() => setRevealed(!revealed)}
        className="w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-white text-sm mb-4"
      >
        {revealed ? 'Hide the Treasure' : 'Open the Treasure'}
      </button>

      {revealed && (
        <div className="space-y-3">
          {achievements.map((a, i) => (
            <div key={i} className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-900/30 flex items-center justify-center text-2xl">
                {i === 0 ? '⚖️' : i === 1 ? '🧠' : i === 2 ? '⚙️' : '💊'}
              </div>
              <div>
                <h5 className="font-medium text-dark-100">{a.domain}</h5>
                <p className="text-dark-300 text-sm">{a.contribution}</p>
              </div>
            </div>
          ))}

          <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
            <p className="text-dark-200 text-sm">
              <span className="text-yellow-400 font-medium">The Choice Before Us:</span> "It
              rests with men whether they will make the proper use of the rich treasure
              with which this knowledge provides them or whether they will leave it unused."
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <p className="text-lg text-dark-200 mb-6">
        We have reached the conclusion of our journey through the science of
        human action. This final chapter addresses the deepest questions about
        the relationship between economics and human existence: Does value-free
        science serve human values? What are the ultimate constraints on human
        freedom? And what role does economic knowledge play in the structure
        of civilization?
      </p>

      <Callout type="concept" title="The Final Question">
        Having explored the entire edifice of economic theory—from the nature
        of human action to the complexities of the market process to the
        consequences of intervention—we now ask: What is the place of this
        knowledge in human life? What good is it?
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Science and Life</h2>

      <p className="text-dark-300 mb-4">
        It is customary to criticize modern science for abstaining from value
        judgments. Living and acting humans, critics say, need to know what
        they should aim at. If science does not answer this question, it is
        sterile and useless for real life.
      </p>

      <p className="text-dark-300 mb-4">
        This objection is unfounded. Science does not value, but it provides
        acting humans with all the information they need for their valuations.
        By remaining value-free, science serves all values impartially—it becomes
        useful to anyone pursuing any end.
      </p>

      <ScienceAndLifeDemo />

      <CardGrid columns={2}>
        <Card title="Science That Dictates Values">
          Becomes ideology. Serves only those values. Excludes those who disagree.
          Becomes a tool of power rather than a source of knowledge.
        </Card>
        <Card title="Science That Remains Neutral">
          Serves all who seek knowledge. Provides means for any ends. Respects
          human freedom to choose. Illuminates without commanding.
        </Card>
      </CardGrid>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Three Restrictions</h2>

      <p className="text-dark-300 mb-4">
        Human beings are not omnipotent. Our freedom to act and choose is limited
        by three types of laws—three categories of regularity in the universe
        that we cannot overcome by will alone.
      </p>

      <p className="text-dark-300 mb-4">
        Physical and biological laws constrain what bodies can do. But there is
        a third type of law—the regularity arising from the connection between
        means and ends. This is the domain of praxeology, the general science
        of human action, and its best-developed branch, economics.
      </p>

      <ThreeRestrictionsDemo />

      <Callout type="insight" title="The Subject of Economics">
        Economics studies the third restriction on human freedom: the necessity
        of using adequate means to achieve ends. You cannot wish away the laws
        of economics any more than you can wish away the law of gravity. Ignoring
        them leads not to freedom but to failure.
      </Callout>

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Economics and Judgments of Value</h2>

      <p className="text-dark-300 mb-4">
        Critics charge that economics makes hidden value judgments. They say it
        assumes people only care about material goods, or that it smuggles in
        capitalist values, or that it ignores higher human aspirations.
      </p>

      <p className="text-dark-300 mb-4">
        These charges are unfounded. Economics deals with action as such—any
        purposeful behavior directed toward any end. It does not assume what
        ends people pursue; it studies the logic of pursuing ends with means.
        This logic applies whether you seek wealth, wisdom, holiness, or happiness.
      </p>

      <EconomicsValuesDemo />

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Foundation of Civilization</h2>

      <p className="text-dark-300 mb-4">
        The body of economic knowledge is an essential element in the structure
        of human civilization. It is the foundation upon which modern industrialism
        and all the moral, intellectual, technological, and therapeutic achievements
        of the last centuries have been built.
      </p>

      <p className="text-dark-300 mb-4">
        Without understanding how the market coordinates millions of individual
        plans, without grasping the role of prices and profits, without seeing
        how capital accumulation raises living standards—without this knowledge,
        we cannot preserve what we have built, let alone improve upon it.
      </p>

      <TreasureDemo />

      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Choice Before Us</h2>

      <p className="text-dark-300 mb-4">
        It rests with men whether they will make proper use of the rich treasure
        which economic knowledge provides, or whether they will leave it unused.
        The knowledge exists. The question is whether we will apply it.
      </p>

      <p className="text-dark-300 mb-4">
        If we understand how markets work, we can preserve and extend prosperity.
        If we ignore or reject this understanding, we will undermine the very
        foundations of our civilization. The choice is ours—but the consequences
        are determined by the laws of human action, not by our wishes.
      </p>

      <Callout type="summary" title="Conclusion: Human Action">
        We have traversed the full scope of the science of human action. From the
        axiom that humans act purposefully, we have derived the laws of exchange,
        money, prices, production, interest, and economic calculation. We have seen
        how the market coordinates billions of individual plans without central
        direction, and how intervention disrupts this coordination.

        Economics does not tell us what to value—that is for each person to decide.
        But it tells us the consequences of different choices, the connections between
        means and ends, the laws that govern human cooperation. This knowledge is a
        treasure. Whether we use it wisely determines the future of civilization.

        The science of human action has done its work. The rest is up to us.
      </Callout>
    </LessonLayout>
  );
}
