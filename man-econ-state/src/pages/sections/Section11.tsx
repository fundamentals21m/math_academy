import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Types of Intervention Demo
function InterventionTypesDemo() {
  const [type, setType] = useState<'autistic' | 'binary' | 'triangular'>('binary');

  const types = {
    autistic: {
      title: 'Autistic Intervention',
      description: 'Government commands a person regarding their own body or property, without involving exchange.',
      examples: ['Drug prohibition', 'Suicide prevention', 'Mandatory schooling', 'Seatbelt laws'],
      parties: ['Government', 'Individual'],
    },
    binary: {
      title: 'Binary Intervention',
      description: 'Government forces an exchange between itself and a citizen.',
      examples: ['Taxation', 'Conscription', 'Government spending', 'Inflation'],
      parties: ['Government', 'Citizen (forced)'],
    },
    triangular: {
      title: 'Triangular Intervention',
      description: 'Government dictates terms of exchange between two private parties.',
      examples: ['Price controls', 'Minimum wage', 'Tariffs', 'Licensing'],
      parties: ['Government', 'Buyer', 'Seller'],
    },
  };

  const data = types[type];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Types of Government Intervention</h4>

      <div className="flex gap-2 mb-4">
        {(['autistic', 'binary', 'triangular'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`flex-1 py-2 rounded capitalize transition-colors text-sm ${
              type === t ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {types[t].title.split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-emerald-400 mb-2">{data.title}</h5>
        <p className="text-dark-300 mb-3">{data.description}</p>

        <div className="flex justify-center gap-2 mb-4">
          {data.parties.map((party, i) => (
            <span
              key={party}
              className={`px-3 py-1 rounded text-sm ${
                party === 'Government' ? 'bg-rose-600 text-white' : 'bg-dark-700 text-dark-300'
              }`}
            >
              {party}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {data.examples.map((ex) => (
            <span key={ex} className="bg-dark-700 px-2 py-1 rounded text-sm text-dark-300">
              {ex}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Price Control Effects Demo
function PriceControlDemo() {
  const [controlType, setControlType] = useState<'ceiling' | 'floor'>('ceiling');
  const equilibrium = 50;
  const [controlPrice, setControlPrice] = useState(controlType === 'ceiling' ? 40 : 60);

  const isCeiling = controlType === 'ceiling';

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-emerald-400">Effects of Price Control</h4>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => { setControlType('ceiling'); setControlPrice(40); }}
          className={`flex-1 py-2 rounded transition-colors ${
            controlType === 'ceiling' ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Price Ceiling (Max)
        </button>
        <button
          onClick={() => { setControlType('floor'); setControlPrice(60); }}
          className={`flex-1 py-2 rounded transition-colors ${
            controlType === 'floor' ? 'bg-emerald-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Price Floor (Min)
        </button>
      </div>

      <div className="mb-4">
        <label className="text-dark-300 text-sm mb-1 block">Controlled Price:</label>
        <input
          type="range"
          min={isCeiling ? 20 : 55}
          max={isCeiling ? 48 : 80}
          value={controlPrice}
          onChange={(e) => setControlPrice(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
        <div className="flex justify-between text-sm">
          <span className="text-emerald-400">Controlled: ${controlPrice}</span>
          <span className="text-dark-400">Market: ${equilibrium}</span>
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        {isCeiling ? (
          <div>
            <p className="text-rose-400 font-semibold mb-2">Result: SHORTAGE</p>
            <p className="text-dark-300 text-sm">
              At ${controlPrice}, demand is {100 - controlPrice} units but supply is only {controlPrice} units.
            </p>
            <p className="text-dark-400 text-sm mt-2">
              Effects: Waiting lines, rationing, black markets, quality deterioration, search costs.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-rose-400 font-semibold mb-2">Result: SURPLUS</p>
            <p className="text-dark-300 text-sm">
              At ${controlPrice}, supply is {controlPrice} units but demand is only {100 - controlPrice} units.
            </p>
            <p className="text-dark-400 text-sm mt-2">
              Effects: Unsold inventory, unemployment (if labor), waste, storage costs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Every government intervention creates unintended consequences, which then seem
        to cry out for further intervention."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Man, Economy, and State
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        This chapter concludes "Man, Economy, and State" by examining what happens when
        <strong className="text-emerald-400"> government intervenes</strong> in the market.
        Rothbard classifies types of intervention and analyzes their economic effects.
      </p>

      {/* Section 1: Types of Intervention */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Types of Intervention</h2>

      <p className="my-4">
        Government intervention in the economy takes three basic forms, distinguished by
        the structure of coercion involved:
      </p>

      <InterventionTypesDemo />

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Autistic</h4>
          <p className="text-sm text-dark-300">
            Commands regarding one's own property. No exchange involved.
            Example: "You cannot consume this substance."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Binary</h4>
          <p className="text-sm text-dark-300">
            Forced exchange with government. One party is the State.
            Example: "Give us 30% of your income."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Triangular</h4>
          <p className="text-sm text-dark-300">
            Government dictates terms between private parties.
            Example: "You must pay at least $15/hour."
          </p>
        </Card>
      </CardGrid>

      {/* Section 2: Direct Effects on Utility */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Effects of Government Intervention</h2>

      <p className="my-4">
        All intervention reduces overall utility. By definition, intervention prevents
        people from doing what they would otherwise choose to do. Even if the "beneficiaries"
        gain, the coerced parties lose more than they would in a free exchange.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">The Interventionist Paradox</h4>
        <p className="text-dark-200 text-lg mb-4">
          If the action were beneficial to all, it would happen voluntarily.
          Coercion is only needed when at least one party loses.
        </p>
        <p className="text-dark-400 text-sm">
          Intervention cannot create value—it can only redistribute it, while
          destroying some in the process.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The seen and unseen:</strong> Intervention has visible beneficiaries but
          hidden victims. The politician who creates a protected job is praised; the consumers
          who pay higher prices and the workers denied jobs are invisible.
        </p>
      </Callout>

      {/* Section 3: Effects of Price Control */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Effects of Price Control</h2>

      <p className="my-4">
        <strong className="text-emerald-400">Price controls</strong> are a form of triangular
        intervention. They set legal maximum (ceiling) or minimum (floor) prices.
      </p>

      <PriceControlDemo />

      <p className="my-4">
        Price controls always cause either shortages (ceilings) or surpluses (floors).
        They cannot repeal the laws of supply and demand—only distort market outcomes.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            effect: 'Shortages and Surpluses',
            description: 'Controlled prices prevent market clearing. Demand ≠ supply.',
          },
          {
            effect: 'Black Markets',
            description: 'Underground trade at market prices—now illegal.',
          },
          {
            effect: 'Quality Deterioration',
            description: 'Producers cut quality to maintain profit at controlled prices.',
          },
          {
            effect: 'Malinvestment',
            description: 'False price signals lead to wrong production decisions.',
          },
        ].map(({ effect, description }, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="text-rose-400 text-xl">⚠</span>
            <div>
              <p className="font-semibold text-dark-100">{effect}</p>
              <p className="text-sm text-dark-400">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 4: Effects on Production */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Effects on the Pattern of Production</h2>

      <p className="my-4">
        Every intervention distorts the structure of production. Resources are pulled from
        where consumers want them to where government directs them.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Subsidies</h4>
          <p className="text-sm text-dark-300">
            Encourage overproduction of subsidized goods. Resources diverted from
            more valued uses.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Taxes</h4>
          <p className="text-sm text-dark-300">
            Discourage production of taxed goods. Resources flee to untaxed
            activities.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Regulations</h4>
          <p className="text-sm text-dark-300">
            Increase costs for regulated producers. May eliminate marginal
            firms entirely.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Licensing</h4>
          <p className="text-sm text-dark-300">
            Restricts entry into professions. Creates artificial scarcity
            and higher prices.
          </p>
        </Card>
      </CardGrid>

      {/* Section 5: The Interventionist Spiral */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. The Interventionist Spiral</h2>

      <p className="my-4">
        Rothbard describes a crucial dynamic: each intervention creates problems that
        seem to require further intervention, leading to an <strong className="text-emerald-400">
        interventionist spiral</strong>.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            step: 1,
            title: 'Initial Intervention',
            example: 'Rent control to help tenants',
          },
          {
            step: 2,
            title: 'Unintended Consequences',
            example: 'Landlords reduce maintenance, housing quality falls',
          },
          {
            step: 3,
            title: 'Call for More Intervention',
            example: '"We need housing quality regulations!"',
          },
          {
            step: 4,
            title: 'New Intervention',
            example: 'Mandatory maintenance requirements',
          },
          {
            step: 5,
            title: 'Further Consequences',
            example: 'Landlords exit market, housing supply falls',
          },
          {
            step: 6,
            title: 'Cycle Continues',
            example: 'Government housing, construction subsidies...',
          },
        ].map(({ step, title, example }) => (
          <div key={step} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-rose-600 rounded-full text-white font-bold text-sm shrink-0">
              {step}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{title}</p>
              <p className="text-sm text-dark-400">{example}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="info">
        <p>
          <strong>The only exit:</strong> The spiral leads either to full socialism (all
          intervention, no market) or to liberalization (removing interventions). There is
          no stable "mixed economy"—intervention breeds intervention.
        </p>
      </Callout>

      {/* Transition to Power and Market */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Transition to Power and Market</h2>

      <p className="my-4">
        This chapter concludes <em>Man, Economy, and State</em> proper. Rothbard originally
        planned to include a detailed analysis of government intervention in the main work,
        but his publisher suggested releasing it separately as <em>Power and Market</em>.
        The following chapters are from that companion volume.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">Power and Market</h4>
        <p className="text-dark-200 mb-4">
          The next seven chapters systematically analyze:
        </p>
        <ul className="text-dark-400 text-sm space-y-2">
          <li>• Defense services on the free market</li>
          <li>• The fundamentals of intervention</li>
          <li>• Triangular intervention (price controls, product regulations)</li>
          <li>• Binary intervention: taxation</li>
          <li>• Binary intervention: government expenditures</li>
          <li>• A praxeological critique of anti-market ethics</li>
          <li>• Economics and public policy</li>
        </ul>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Three types of intervention:</strong> autistic (commands), binary
              (forced exchange with government), triangular (dictating private exchanges).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>All intervention reduces utility</strong>—it prevents people from
              doing what they would freely choose.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Price controls cause shortages or surpluses.</strong> They cannot
              repeal supply and demand.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              <strong>Intervention distorts production.</strong> Resources flow to
              politically favored uses, not consumer-valued ones.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              The <strong>interventionist spiral</strong>: each intervention creates
              problems that seem to require more intervention.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        We now begin <em>Power and Market</em>. Chapter 1 examines <strong>Defense
        Services on the Free Market</strong>—can law, police, and courts be provided
        without the State?
      </p>
    </LessonLayout>
  );
}
