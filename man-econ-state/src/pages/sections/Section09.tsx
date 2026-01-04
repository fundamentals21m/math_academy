import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Competition Types Comparison
function CompetitionTypesDemo() {
  const [viewType, setViewType] = useState<'neoclassical' | 'austrian'>('neoclassical');

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Two Views of Competition</h4>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setViewType('neoclassical')}
          className={`flex-1 py-2 rounded transition-colors ${
            viewType === 'neoclassical' ? 'bg-rose-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Neoclassical View
        </button>
        <button
          onClick={() => setViewType('austrian')}
          className={`flex-1 py-2 rounded transition-colors ${
            viewType === 'austrian' ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Austrian/Rothbardian View
        </button>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        {viewType === 'neoclassical' ? (
          <div>
            <h5 className="font-semibold text-rose-400 mb-2">"Perfect Competition"</h5>
            <ul className="text-dark-300 text-sm space-y-2">
              <li>• Many small firms, none with market power</li>
              <li>• Homogeneous products (no differentiation)</li>
              <li>• Perfect information for all participants</li>
              <li>• Price = marginal cost (no profits)</li>
              <li>• Static equilibrium model</li>
            </ul>
            <p className="text-dark-400 text-sm mt-4 italic">
              Problem: This is a fantasy world. By this standard, almost every real
              market is "monopolistic."
            </p>
          </div>
        ) : (
          <div>
            <h5 className="font-semibold text-emerald-400 mb-2">Competition as a Process</h5>
            <ul className="text-dark-300 text-sm space-y-2">
              <li>• Freedom to enter and compete</li>
              <li>• Rivalry and innovation</li>
              <li>• Discovery of new products and methods</li>
              <li>• Profits as rewards, losses as penalties</li>
              <li>• Dynamic process, not static state</li>
            </ul>
            <p className="text-dark-400 text-sm mt-4 italic">
              Competition is about freedom to compete—not the absence of successful
              competitors.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Monopoly Definition Critique
function MonopolyDefinitionDemo() {
  const [definition, setDefinition] = useState<'standard' | 'rothbard'>('standard');

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">What is Monopoly?</h4>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setDefinition('standard')}
          className={`flex-1 py-2 rounded transition-colors ${
            definition === 'standard' ? 'bg-rose-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Standard Definition
        </button>
        <button
          onClick={() => setDefinition('rothbard')}
          className={`flex-1 py-2 rounded transition-colors ${
            definition === 'rothbard' ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Rothbard's Definition
        </button>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        {definition === 'standard' ? (
          <div>
            <h5 className="font-semibold text-rose-400 mb-2">"Single seller of a product"</h5>
            <p className="text-dark-300 mb-3">
              A monopoly exists when only one firm sells a particular good.
            </p>
            <p className="text-dark-400 text-sm">
              <strong>Problem:</strong> Every producer is the "sole seller" of their unique product.
              Ford is the only seller of Fords. Is Ford a monopoly? This definition makes everyone
              a "monopolist."
            </p>
          </div>
        ) : (
          <div>
            <h5 className="font-semibold text-emerald-400 mb-2">"Exclusive grant of privilege"</h5>
            <p className="text-dark-300 mb-3">
              A monopoly is a privilege granted by government that prevents competition.
            </p>
            <p className="text-dark-400 text-sm">
              <strong>The key:</strong> Can others legally enter and compete? If yes, there is no
              monopoly—just a successful business. True monopoly requires coercive exclusion
              of competitors.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Cartel Stability Demo
function CartelStabilityDemo() {
  const [round, setRound] = useState(0);

  const stages = [
    {
      title: 'Cartel Forms',
      description: 'Firms agree to restrict output and raise prices.',
      prices: [100, 100, 100],
      outputs: [50, 50, 50],
    },
    {
      title: 'Temptation',
      description: 'Each firm can profit by secretly cutting prices.',
      prices: [100, 100, 90],
      outputs: [50, 50, 80],
    },
    {
      title: 'Cheating Spreads',
      description: 'Others notice and match the lower price.',
      prices: [90, 90, 90],
      outputs: [80, 80, 80],
    },
    {
      title: 'Cartel Collapses',
      description: 'Competition resumes. Prices fall to competitive levels.',
      prices: [70, 70, 70],
      outputs: [100, 100, 100],
    },
  ];

  const current = stages[round];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Why Cartels Fail</h4>

      <div className="flex gap-2 mb-4">
        {stages.map((_, i) => (
          <button
            key={i}
            onClick={() => setRound(i)}
            className={`flex-1 py-2 text-sm rounded transition-colors ${
              round === i ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-emerald-400 mb-2">{current.title}</h5>
        <p className="text-dark-300 mb-4">{current.description}</p>

        <div className="grid grid-cols-3 gap-4">
          {['Firm A', 'Firm B', 'Firm C'].map((firm, i) => (
            <div key={firm} className="text-center bg-dark-800 p-3 rounded">
              <p className="text-dark-400 text-sm">{firm}</p>
              <p className="text-white">Price: ${current.prices[i]}</p>
              <p className="text-dark-400 text-sm">Output: {current.outputs[i]}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4 italic">
        Without government enforcement, cartels face constant incentive to cheat.
      </p>
    </div>
  );
}

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The only monopoly that can exist on the free market is an award of special
        privilege by the government."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        This chapter presents Rothbard's radical critique of standard <strong className="text-emerald-400">
        monopoly theory</strong>. He argues that the conventional concepts of "perfect competition"
        and "monopoly" are fundamentally confused, and that free markets are inherently competitive.
      </p>

      {/* Section 1: Consumer Sovereignty */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Concept of Consumer Sovereignty</h2>

      <p className="my-4">
        Rothbard begins by reaffirming <strong className="text-emerald-400">consumer sovereignty</strong>:
        in a free market, consumers ultimately direct production through their spending decisions.
        Producers who fail to serve consumers suffer losses and exit.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Consumer Power</h4>
          <p className="text-sm text-dark-300">
            Consumers vote with their dollars. No producer can force a sale. Profits
            go to those who serve consumers best.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Producer Discipline</h4>
          <p className="text-sm text-dark-300">
            Competition for consumer favor keeps producers honest. Prices, quality,
            and innovation all serve consumer desires.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          <strong>The question:</strong> Can any producer escape consumer sovereignty?
          Can a "monopolist" exploit consumers? Rothbard's surprising answer: not on a
          free market.
        </p>
      </Callout>

      {/* Section 2: Monopoly and Competition */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Monopoly and Competition on the Free Market</h2>

      <p className="my-4">
        Standard economics defines "competition" as a static state—"perfect competition"
        with many identical firms. Rothbard rejects this entirely.
      </p>

      <CompetitionTypesDemo />

      <p className="my-4">
        The neoclassical model of "perfect competition" describes a world without:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        {['Advertising', 'Innovation', 'Differentiation', 'Entrepreneurship'].map((item) => (
          <div key={item} className="bg-dark-800/50 rounded-xl p-4 border border-rose-600/30 text-center">
            <p className="text-rose-400 font-semibold">{item}</p>
            <p className="text-dark-500 text-xs mt-1">(Forbidden in "perfect competition")</p>
          </div>
        ))}
      </div>

      <Callout type="warning">
        <p>
          <strong>Rothbard's critique:</strong> "Perfect competition" is not an ideal to strive
          for—it's a world of identical firms producing identical products with no scope for
          improvement. Real competition is the opposite: rivalry, differentiation, and innovation.
        </p>
      </Callout>

      {/* Section 3: What is Monopoly? */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. What is Monopoly?</h2>

      <p className="my-4">
        Rothbard argues that the standard definition of monopoly ("single seller of a product")
        is incoherent. Every firm is the sole seller of its specific product.
      </p>

      <MonopolyDefinitionDemo />

      <p className="my-4">
        Rothbard proposes a different definition: a monopoly is an <strong className="text-emerald-400">
        exclusive grant of privilege</strong> by the State. This creates genuine monopoly by
        legally preventing competition.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Free-Market Success</h4>
          <p className="text-sm text-dark-300">
            If a firm dominates through efficiency and consumer satisfaction, that's not
            monopoly—it's successful competition.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Government Monopoly</h4>
          <p className="text-sm text-dark-300">
            If a firm dominates because law forbids competition, that is true monopoly—
            maintained by coercion.
          </p>
        </Card>
      </CardGrid>

      {/* Section 4: Cartels */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Cartels</h2>

      <p className="my-4">
        What about <strong className="text-emerald-400">cartels</strong>—agreements among
        competitors to restrict output and raise prices? Rothbard argues that cartels are
        inherently unstable on a free market.
      </p>

      <CartelStabilityDemo />

      <p className="my-4">
        Every cartel member has an incentive to cheat—to secretly cut prices and capture
        more market share. Without government enforcement, cartels tend to collapse.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            problem: 'Incentive to Cheat',
            description: 'Each member profits by secretly undercutting the cartel price.',
          },
          {
            problem: 'New Entry',
            description: 'High cartel prices attract new competitors into the market.',
          },
          {
            problem: 'Coordination Costs',
            description: 'Monitoring and enforcing the agreement is expensive and difficult.',
          },
          {
            problem: 'Consumer Resistance',
            description: 'Buyers seek substitutes or reduce consumption at high prices.',
          },
        ].map(({ problem, description }, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="text-rose-400 text-xl">⚠</span>
            <div>
              <p className="font-semibold text-dark-100">{problem}</p>
              <p className="text-sm text-dark-400">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="success">
        <p>
          <strong>Historical evidence:</strong> Most lasting cartels have been government-enforced
          (like OPEC, backed by sovereign powers, or historical guilds enforced by law). Private
          cartels without state backing tend to break down quickly.
        </p>
      </Callout>

      {/* Section 5: The Illusion of Monopoly Price */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. The Illusion of Monopoly Price</h2>

      <p className="my-4">
        Rothbard challenges the concept of <strong className="text-emerald-400">"monopoly price"</strong>
        as distinct from "competitive price." On the free market, how would we know if a price
        is "too high"?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The "Monopoly Price" Problem</h4>
        <p className="text-dark-200 text-lg mb-4">
          Without a "competitive" benchmark, how can we identify "monopoly" pricing?
        </p>
        <ul className="text-dark-400 text-sm space-y-2">
          <li>• Every firm restricts output to maximize profit—not just "monopolists"</li>
          <li>• Every firm charges the highest price the market will bear</li>
          <li>• There is no objective "competitive price" to compare against</li>
        </ul>
      </div>

      <p className="my-4">
        Rothbard concludes that the distinction between "competitive" and "monopoly" prices
        is arbitrary on a free market. The only meaningful monopoly is one created and
        enforced by government.
      </p>

      {/* Examples of Government Monopoly */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Examples of Government-Created Monopoly</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Licensing</h4>
          <p className="text-sm text-dark-300">
            Occupational licenses restrict entry. Only licensed practitioners can
            legally compete.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Patents</h4>
          <p className="text-sm text-dark-300">
            Grant exclusive rights to use an invention. Competitors are legally barred.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Tariffs</h4>
          <p className="text-sm text-dark-300">
            Restrict foreign competition. Domestic producers gain protected markets.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Franchises</h4>
          <p className="text-sm text-dark-300">
            Exclusive grants to provide services (utilities, transit). Entry prohibited.
          </p>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>"Perfect competition"</strong> is an unrealistic model that condemns
              normal market activity (advertising, differentiation, innovation).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Real competition</strong> is a process of rivalry and discovery—not
              a static state of identical firms.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Monopoly properly defined</strong> is an exclusive privilege granted
              by government—legal barriers to entry.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              <strong>Cartels are unstable</strong> on a free market. Members have incentives
              to cheat, and new entrants are attracted by high prices.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>"Monopoly price" is illusory</strong> on a free market—there's no
              objective benchmark for what price "should" be.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 11 examines <strong>Money and Its Purchasing Power</strong>—how the supply
        and demand for money determine its value, and what happens when money is inflated.
      </p>
    </LessonLayout>
  );
}
