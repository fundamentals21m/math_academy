import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Action Axiom Explorer
function ActionAxiomExplorer() {
  const [activeImplication, setActiveImplication] = useState(0);

  const implications = [
    {
      title: 'Ends and Means',
      description: 'Every action aims at an end (goal) and employs means to achieve it.',
      example: 'A person works (means) to earn money (intermediate end) to buy food (final end).',
    },
    {
      title: 'Scarcity',
      description: 'Means are always scarce relative to ends; otherwise no action would be needed.',
      example: 'If bread were superabundant like air, no one would need to economize or work for it.',
    },
    {
      title: 'Choice',
      description: 'Action implies choosing one course over alternatives.',
      example: 'Every hour spent studying is an hour not spent working, playing, or sleeping.',
    },
    {
      title: 'Uncertainty',
      description: 'Action occurs in time, and the future is always uncertain.',
      example: 'A farmer plants seeds hoping for a harvest, but cannot know with certainty.',
    },
    {
      title: 'Cost',
      description: 'The cost of any action is the value of the foregone alternative.',
      example: 'The cost of attending college includes not just tuition but also the wages not earned.',
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Implications of Action</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {implications.map((imp, i) => (
          <button
            key={i}
            onClick={() => setActiveImplication(i)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activeImplication === i
                ? 'bg-emerald-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {imp.title}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-emerald-400 mb-2">{implications[activeImplication].title}</h5>
        <p className="text-dark-200 mb-3">{implications[activeImplication].description}</p>
        <p className="text-dark-400 text-sm italic">Example: {implications[activeImplication].example}</p>
      </div>
    </div>
  );
}

// Marginal Utility Demonstration
function MarginalUtilityDemo() {
  const [units, setUnits] = useState(1);

  const goods = [
    { unit: 1, use: 'Survival needs', satisfaction: 100, example: 'First glass of water when dying of thirst' },
    { unit: 2, use: 'Important comfort', satisfaction: 80, example: 'Water for cooking meals' },
    { unit: 3, use: 'Moderate comfort', satisfaction: 60, example: 'Water for bathing' },
    { unit: 4, use: 'Minor comfort', satisfaction: 40, example: 'Water for watering plants' },
    { unit: 5, use: 'Trivial use', satisfaction: 20, example: 'Water for washing the car' },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">The Law of Marginal Utility</h4>

      <div className="mb-4">
        <label className="text-dark-300 text-sm mb-2 block">Units of a Good (e.g., gallons of water):</label>
        <input
          type="range"
          min={1}
          max={5}
          value={units}
          onChange={(e) => setUnits(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
        </div>
      </div>

      <div className="space-y-2">
        {goods.slice(0, units).map((good) => (
          <div
            key={good.unit}
            className="flex items-center gap-3 p-3 bg-dark-900 rounded-lg"
          >
            <span className="w-8 h-8 flex items-center justify-center bg-emerald-600 rounded-full text-white font-bold text-sm">
              {good.unit}
            </span>
            <div className="flex-1">
              <p className="text-dark-200 text-sm font-medium">{good.use}</p>
              <p className="text-dark-500 text-xs">{good.example}</p>
            </div>
            <div className="text-right">
              <div
                className="h-2 rounded bg-emerald-500"
                style={{ width: `${good.satisfaction}px` }}
              />
              <span className="text-xs text-dark-400">Value: {good.satisfaction}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Each additional unit is applied to a less urgent use, so its marginal utility is lower than the previous unit.
      </p>
    </div>
  );
}

// Time Preference Visualization
function TimePreferenceDemo() {
  const [preference, setPreference] = useState(50);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Time Preference</h4>

      <p className="text-dark-300 text-sm mb-4">
        All else being equal, people prefer present goods to future goods. This universal fact
        of human nature is called <strong className="text-emerald-400">time preference</strong>.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">$100</p>
          <p className="text-dark-400 text-sm">Today</p>
        </div>
        <div className="bg-dark-900 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-dark-300">${100 + Math.round(preference * 0.5)}</p>
          <p className="text-dark-400 text-sm">In One Year</p>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-dark-300 text-sm mb-2 block">
          How much extra would make you indifferent?
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={preference}
          onChange={(e) => setPreference(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>$0 extra</span>
          <span>$50 extra</span>
        </div>
      </div>

      <p className="text-dark-400 text-sm italic">
        Your time preference rate: {Math.round(preference * 0.5)}% per year.
        This premium is the origin of the interest rate.
      </p>
    </div>
  );
}

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Human action is purposeful behavior. Or we may say: Action is will put into
        operation and transformed into an agency, is aiming at ends and goals."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State (1962)
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Welcome to <em>Man, Economy, and State with Power and Market</em>, Murray Rothbard's
        comprehensive treatise on economics. First published in 1962, this work develops
        the entire structure of economic theory from a single axiom:
        <strong className="text-emerald-400"> human beings act purposefully</strong>.
      </p>

      <Callout type="info">
        <p>
          <strong>About Rothbard:</strong> Murray N. Rothbard (1926-1995) was a student of
          Ludwig von Mises and became one of the most prolific economists and political
          theorists of the 20th century. This book was conceived as a textbook presentation
          of Mises's <em>Human Action</em>, but grew into an original contribution that
          extends and systematizes Austrian economics.
        </p>
      </Callout>

      {/* Section 1: The Concept of Action */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Concept of Action</h2>

      <p className="my-4">
        The fundamental axiom of economics is that <strong className="text-emerald-400">human beings act</strong>.
        Action is not mere behavior or motion—it is <em>purposeful</em> behavior. A person acts
        when they employ means to attain ends, when they make choices, when they attempt to
        substitute a more satisfactory state of affairs for a less satisfactory one.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Action</h3>
          <p className="text-dark-300 text-sm">Purposeful behavior aimed at improving one's situation</p>
          <ul className="text-dark-400 text-sm mt-2 space-y-1">
            <li>• Implies conscious choice</li>
            <li>• Requires perceived alternatives</li>
            <li>• Aims at goals or ends</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Not Action</h3>
          <p className="text-dark-300 text-sm">Mere reflexes or unconscious responses</p>
          <ul className="text-dark-400 text-sm mt-2 space-y-1">
            <li>• Involuntary reflexes (blinking)</li>
            <li>• Purely passive experience</li>
            <li>• No conscious direction toward ends</li>
          </ul>
        </div>
      </div>

      <p className="my-4">
        The action axiom is not a hypothesis to be tested by observation. It is
        <em> self-evidently true</em>—the very act of denying it would itself be a purposeful
        action, proving the point. From this axiom, the entire structure of economic theory
        can be logically deduced.
      </p>

      {/* Section 2: First Implications */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. First Implications of the Concept</h2>

      <p className="my-4">
        The concept of action immediately implies several corollary concepts that form
        the foundation of economic analysis:
      </p>

      <ActionAxiomExplorer />

      <Callout type="note">
        <p>
          <strong>The Praxeological Method:</strong> These implications are not empirical
          observations but logical deductions. Just as we don't need to measure triangles
          to know their angles sum to 180 degrees, we don't need surveys to know that
          action implies choice. This a priori reasoning is called <em>praxeology</em>.
        </p>
      </Callout>

      {/* Section 3: Means and Ends */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Further Implications: Means</h2>

      <p className="my-4">
        <strong className="text-emerald-400">Means</strong> are the things an actor believes
        can help attain their ends. Rothbard distinguishes between:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Consumers' Goods</h4>
          <p className="text-sm text-dark-300">
            Goods that directly satisfy wants (also called "goods of the first order").
            Example: bread that you eat for lunch.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Producers' Goods</h4>
          <p className="text-sm text-dark-300">
            Goods used to produce other goods (also called "higher-order goods").
            Example: wheat used to make bread.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Land</h4>
          <p className="text-sm text-dark-300">
            Original, nature-given factors of production.
            Example: natural resources, soil, water.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Labor</h4>
          <p className="text-sm text-dark-300">
            Human effort expended toward production.
            Example: the baker's work in making bread.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        A crucial point: something becomes a means (an economic good) only when a person
        <em> perceives</em> a causal connection between that thing and their desired end.
        If no one knows that a plant has medicinal properties, it's not yet a means,
        even if it could cure disease.
      </p>

      {/* Section 4: Time Preference */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Time Preference</h2>

      <p className="my-4">
        Action takes place in time, moving from the present toward the future. A universal
        characteristic of human nature is that, other things being equal, people prefer to
        attain their ends sooner rather than later. This is <strong className="text-emerald-400">time preference</strong>.
      </p>

      <TimePreferenceDemo />

      <p className="my-4">
        Time preference explains why interest exists. If someone lends you $100 today,
        they're giving up present satisfaction for your benefit. You must compensate
        them with more than $100 in the future to make the exchange worthwhile to them.
        This premium is interest—the "price of time."
      </p>

      <Callout type="warning">
        <p>
          <strong>Common confusion:</strong> Time preference is not the same as "impatience"
          in a psychological sense. It's a logical implication of action itself. To choose
          a longer process over a shorter one, all else equal, would mean deliberately
          choosing to delay satisfaction—which contradicts the nature of purposeful action.
        </p>
      </Callout>

      {/* Section 5: The Law of Marginal Utility */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. The Law of Marginal Utility</h2>

      <p className="my-4">
        When an actor possesses multiple units of a homogeneous good, they will devote
        each unit to a different end. Naturally, they will satisfy their most urgent
        want first, then the second-most urgent, and so on.
      </p>

      <MarginalUtilityDemo />

      <p className="my-4">
        This means that the <em>marginal utility</em>—the value of the last unit—decreases
        as the number of units increases. This is the famous <strong className="text-emerald-400">law of
        diminishing marginal utility</strong>. It's not a psychological observation but
        a logical deduction from the nature of action.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Law of Marginal Utility</h4>
        <p className="text-dark-200 text-lg mb-4">
          As the supply of a good increases (ceteris paribus), the marginal utility
          of each additional unit decreases.
        </p>
        <p className="text-dark-400 text-sm">
          This law explains why we don't value water more than diamonds (even though
          water is more essential to life)—because water is abundant, its marginal
          unit satisfies only trivial wants.
        </p>
      </div>

      {/* Section 6: Factors of Production */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">6. Factors of Production</h2>

      <p className="my-4">
        Having established the fundamentals, Rothbard introduces the basic categories
        of production factors that will be essential throughout the analysis:
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            factor: 'Land',
            description: 'Original nature-given factors',
            examples: 'Soil, minerals, water, forests, solar energy',
          },
          {
            factor: 'Labor',
            description: 'The expenditure of human energy toward production',
            examples: 'Physical work, mental effort, entrepreneurial judgment',
          },
          {
            factor: 'Capital Goods',
            description: 'Previously produced factors of production',
            examples: 'Tools, machines, buildings, inventory, intermediate goods',
          },
        ].map(({ factor, description, examples }) => (
          <div key={factor} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full text-white font-bold text-sm shrink-0">
              {factor[0]}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{factor}</p>
              <p className="text-sm text-dark-400">{description}</p>
              <p className="text-sm text-dark-500 mt-1 italic">{examples}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="my-4">
        Capital goods are of special importance because they represent a choice to
        lengthen the production process in order to achieve greater output. This
        connection between saving, capital formation, and economic growth will be
        central to understanding the market economy.
      </p>

      {/* About the Book */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">About This Book</h2>

      <p className="my-4">
        <em>Man, Economy, and State</em> was originally intended as a textbook presentation
        of Mises's <em>Human Action</em>. But as Rothbard worked, it grew into an
        independent treatise that extends, clarifies, and sometimes revises the Misesian
        framework.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Man, Economy, and State</h3>
          <p className="text-dark-300 text-sm">12 chapters on pure economics</p>
          <ul className="text-dark-400 text-sm mt-2 space-y-1">
            <li>• Fundamentals of action</li>
            <li>• Exchange and money</li>
            <li>• Production and factors</li>
            <li>• Capital and interest</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Power and Market</h3>
          <p className="text-dark-300 text-sm">7 chapters on government intervention</p>
          <ul className="text-dark-400 text-sm mt-2 space-y-1">
            <li>• Defense services</li>
            <li>• Types of intervention</li>
            <li>• Taxation and expenditure</li>
            <li>• Economic policy critique</li>
          </ul>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>What you'll learn:</strong> By working through this book, you'll understand
          how a market economy functions, why prices coordinate production, how interest
          rates emerge from time preference, and what happens when governments intervene
          in the market process.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Human action is purposeful behavior</strong>—employing means to attain ends.
              This axiom is self-evidently true and forms the foundation of all economic analysis.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              Action implies <strong>scarcity, choice, uncertainty, and cost</strong>. Every
              action involves trade-offs because means are limited relative to ends.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Time preference</strong> is universal—people prefer present satisfaction
              to future satisfaction, other things equal. This explains the phenomenon of interest.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              The <strong>law of marginal utility</strong>: as the supply of a good increases,
              the value of each additional unit decreases, because it satisfies less urgent wants.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Factors of production</strong> (land, labor, capital goods) are combined
              in the production process to create consumers' goods that satisfy wants.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        In the next chapter, we'll examine <strong>Direct Exchange</strong>—what happens
        when two people trade without the use of money. We'll see how voluntary exchange
        benefits both parties, how prices emerge, and why the division of labor increases
        everyone's productivity.
      </p>
    </LessonLayout>
  );
}
