import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Price control is only an attempt to evade the inexorable law of the market."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Power and Market
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        <strong className="text-emerald-400">Triangular intervention</strong> occurs when
        government dictates terms of exchange between private parties. This chapter analyzes
        price controls, product regulations, and grants of monopolistic privilege.
      </p>

      {/* Section 1: Price Control */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Price Control</h2>

      <p className="my-4">
        Price controls set legal maximum (ceilings) or minimum (floors) prices. They cannot
        repeal the laws of supply and demand—only create distortions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Price Ceilings</h3>
          <p className="text-dark-300 text-sm mb-2">Maximum price below market equilibrium</p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Result: SHORTAGE</li>
            <li>• Queuing, rationing, black markets</li>
            <li>• Quality deterioration</li>
            <li>• Examples: rent control, gas price caps</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Price Floors</h3>
          <p className="text-dark-300 text-sm mb-2">Minimum price above market equilibrium</p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Result: SURPLUS</li>
            <li>• Unsold inventory, unemployment</li>
            <li>• Wasteful production</li>
            <li>• Examples: minimum wage, farm supports</li>
          </ul>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>Rent control:</strong> The classic case. Maximum rents below market levels
          cause housing shortages, deterioration, and reduced construction. The intended
          beneficiaries (tenants) are harmed in the long run.
        </p>
      </Callout>

      {/* Section 2: Product Control */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Product Control</h2>

      <p className="my-4">
        Product control regulates what may be produced, how it may be produced, or the
        quality standards it must meet.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Prohibition</h4>
          <p className="text-sm text-dark-300">
            Complete ban on certain products. Creates black markets, raises prices,
            and empowers organized crime.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Quality Regulation</h4>
          <p className="text-sm text-dark-300">
            Mandatory standards. Raises costs, may eliminate low-cost options that
            consumers would prefer.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Safety Requirements</h4>
          <p className="text-sm text-dark-300">
            Mandated safety features. Increases prices, may prevent trade-offs
            consumers would willingly make.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Production Methods</h4>
          <p className="text-sm text-dark-300">
            Dictating how goods must be made. Prevents innovation and efficient
            adaptation.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        Product regulations assume the government knows better than consumers what
        quality-price trade-offs they should accept. But consumers have diverse preferences
        and circumstances that bureaucrats cannot know.
      </p>

      {/* Section 3: Grants of Monopolistic Privilege */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Grants of Monopolistic Privilege</h2>

      <p className="my-4">
        The most harmful triangular intervention is the <strong className="text-emerald-400">
        grant of monopolistic privilege</strong>—legal barriers to competition.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            type: 'Occupational Licensing',
            description: 'Requires government permission to work in a trade.',
            effect: 'Restricts supply, raises prices, reduces innovation.',
          },
          {
            type: 'Franchises',
            description: 'Exclusive grants to provide services in an area.',
            effect: 'Creates actual monopolies with no competition.',
          },
          {
            type: 'Patents and Copyrights',
            description: 'Exclusive rights to use inventions or expressions.',
            effect: 'Limits diffusion of knowledge, raises prices.',
          },
          {
            type: 'Tariffs and Import Quotas',
            description: 'Barriers to foreign competition.',
            effect: 'Protects domestic producers at consumers\' expense.',
          },
          {
            type: 'Antitrust Laws',
            description: 'Ironically, often used to harm efficient competitors.',
            effect: 'Punishes success, benefits less efficient firms.',
          },
        ].map(({ type, description, effect }, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-rose-600 rounded-full text-white font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{type}</p>
              <p className="text-sm text-dark-400">{description}</p>
              <p className="text-sm text-dark-500 italic">{effect}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="info">
        <p>
          <strong>Rothbard's insight:</strong> True monopoly requires government enforcement.
          On a free market, monopoly positions are temporary—always subject to competition.
          Only law can permanently exclude competitors.
        </p>
      </Callout>

      {/* Section 4: Effects on Production and Allocation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Effects on Production and Allocation</h2>

      <p className="my-4">
        All triangular interventions distort the allocation of resources away from
        consumer preferences:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Resource Misallocation</h4>
          <p className="text-sm text-dark-300">
            Resources flow to politically favored uses, not highest-valued uses.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Reduced Output</h4>
          <p className="text-sm text-dark-300">
            Restrictions on production reduce total output below what consumers want.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Higher Prices</h4>
          <p className="text-sm text-dark-300">
            Restrictions on competition raise prices above market levels.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Reduced Quality</h4>
          <p className="text-sm text-dark-300">
            Protected producers have less incentive to improve quality or innovate.
          </p>
        </Card>
      </CardGrid>

      {/* The Political Economy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Political Economy of Triangular Intervention</h2>

      <p className="my-4">
        Why do these interventions persist despite their harmful effects? Rothbard points
        to concentrated benefits and dispersed costs:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-emerald-400 mb-2">Beneficiaries</h4>
            <ul className="text-dark-400 text-sm space-y-1">
              <li>• Few in number</li>
              <li>• Large gains per person</li>
              <li>• Well-organized</li>
              <li>• Strong lobbying incentive</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-rose-400 mb-2">Victims</h4>
            <ul className="text-dark-400 text-sm space-y-1">
              <li>• Many in number (consumers)</li>
              <li>• Small loss per person</li>
              <li>• Dispersed, unorganized</li>
              <li>• Weak incentive to oppose</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="my-4">
        This asymmetry explains why harmful policies persist: the beneficiaries fight hard
        to maintain them, while the diffuse victims have little incentive to organize opposition.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Price ceilings cause shortages</strong>; price floors cause surpluses.
              Neither can repeal supply and demand.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Product controls</strong> override consumer preferences, assuming
              government knows best.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Monopoly privilege</strong> (licensing, franchises, tariffs) creates
              actual monopolies by law.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              Triangular intervention <strong>distorts resource allocation</strong>, reducing
              output and raising prices.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Concentrated benefits, dispersed costs</strong> explain why harmful
              policies persist politically.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 4 examines <strong>Binary Intervention: Taxation</strong>—the economic
        effects of various types of taxes and the question of "just" taxation.
      </p>
    </LessonLayout>
  );
}
