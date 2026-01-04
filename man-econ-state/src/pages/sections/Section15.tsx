import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Taxation is theft, purely and simply."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Power and Market
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        <strong className="text-emerald-400">Binary intervention</strong> involves a coerced
        exchange between the government and the individual. The most important form is taxation—
        the compulsory expropriation of private property.
      </p>

      {/* Section 1: The Nature of Taxation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Nature of Taxation</h2>

      <p className="my-4">
        Taxation differs from all voluntary transactions. In a market exchange, both parties
        benefit (otherwise they wouldn't trade). In taxation, the government takes without
        providing equivalent value—otherwise, it could charge fees like any business.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">Taxation vs. Voluntary Payment</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-emerald-400 mb-2">Market Payment</p>
            <ul className="text-dark-400 text-sm space-y-1">
              <li>• Voluntary</li>
              <li>• Receives specific service</li>
              <li>• Can choose alternatives</li>
              <li>• Seller must satisfy</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-rose-400 mb-2">Taxation</p>
            <ul className="text-dark-400 text-sm space-y-1">
              <li>• Coerced</li>
              <li>• No guaranteed return</li>
              <li>• No choice of provider</li>
              <li>• Government decides</li>
            </ul>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>No "just" taxation:</strong> Since taxation is coerced, there is no way to
          determine the "right" amount. Any level of taxation transfers wealth from productive
          to unproductive uses.
        </p>
      </Callout>

      {/* Section 2: Economic Effects of Taxation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Economic Effects of Taxation</h2>

      <p className="my-4">
        All taxes have predictable economic effects. They reduce incentives for the taxed
        activity and transfer resources from private to government control.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Reduced Production</h4>
          <p className="text-sm text-dark-300">
            Taxing income reduces the reward for working and producing. Less is produced
            than would be without taxation.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Capital Consumption</h4>
          <p className="text-sm text-dark-300">
            Taxing savings and investment consumes capital that would have been used
            for production.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Resource Misallocation</h4>
          <p className="text-sm text-dark-300">
            Resources flow to tax-favored uses rather than highest-valued uses determined
            by consumers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Compliance Costs</h4>
          <p className="text-sm text-dark-300">
            Resources devoted to tax compliance and avoidance are pure waste from
            society's perspective.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: Types of Taxes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Types of Taxes</h2>

      <p className="my-4">
        Different types of taxes have different incidence and effects. Rothbard analyzes
        each type systematically.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            type: 'Income Tax',
            description: 'Tax on earned income from labor or business.',
            effect: 'Reduces incentive to work and produce. Double-taxation of savings.',
          },
          {
            type: 'Corporate Tax',
            description: 'Tax on business profits.',
            effect: 'Falls on consumers, workers, and shareholders. Reduces investment.',
          },
          {
            type: 'Capital Gains Tax',
            description: 'Tax on gains from selling assets.',
            effect: 'Discourages investment and locks in inefficient holdings.',
          },
          {
            type: 'Property Tax',
            description: 'Tax on real estate and other property.',
            effect: 'Never truly own property. Effective rent paid to government.',
          },
          {
            type: 'Sales/Consumption Tax',
            description: 'Tax on purchases of goods and services.',
            effect: 'Raises prices, reduces consumption. Less visible but still harmful.',
          },
          {
            type: 'Payroll Tax',
            description: 'Tax on wages, often split between employer and employee.',
            effect: 'Full burden falls on workers as reduced wages.',
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

      {/* Section 4: Tax Incidence */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Tax Incidence: Who Really Pays?</h2>

      <p className="my-4">
        The <strong className="text-emerald-400">legal incidence</strong> (who writes the check)
        often differs from the <strong className="text-emerald-400">economic incidence</strong>
        (who actually bears the burden).
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">Example: Employer Payroll Tax</h4>
        <p className="text-dark-300 mb-4">
          Suppose a law requires employers to pay 10% of wages as payroll tax. Who bears
          the burden?
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-dark-900 p-4 rounded">
            <p className="text-rose-400 font-semibold mb-2">Before Tax</p>
            <p className="text-dark-400">Wage: $50,000</p>
            <p className="text-dark-400">Employer cost: $50,000</p>
          </div>
          <div className="bg-dark-900 p-4 rounded">
            <p className="text-rose-400 font-semibold mb-2">After Tax</p>
            <p className="text-dark-400">Wage: ~$45,000</p>
            <p className="text-dark-400">Employer cost: $50,000</p>
          </div>
        </div>
        <p className="text-dark-400 text-sm mt-4">
          The tax is nominally on the employer, but wages fall to offset it. The worker
          bears the true burden.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>General principle:</strong> The burden of taxation falls on the less
          elastic side of the market. Workers, consumers, and owners of immobile capital
          bear more of the burden than mobile factors.
        </p>
      </Callout>

      {/* Section 5: Progressive Taxation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Progressive Taxation</h2>

      <p className="my-4">
        <strong className="text-emerald-400">Progressive taxation</strong>—higher rates on
        higher incomes—is often justified as "fair." Rothbard challenges this view.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">The Ability-to-Pay Fallacy</h4>
          <p className="text-sm text-dark-300">
            "Rich can afford it" ignores that wealth is produced, not found. Taxing
            production discourages it.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Marginal Utility Argument</h4>
          <p className="text-sm text-dark-300">
            Claims that a dollar is "worth less" to the rich assume interpersonal utility
            comparisons—which are impossible.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Penalizing Success</h4>
          <p className="text-sm text-dark-300">
            Progressive rates punish precisely those who serve consumers most
            effectively.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Capital Destruction</h4>
          <p className="text-sm text-dark-300">
            High earners are often investors. Taxing them heavily reduces the capital
            available for production.
          </p>
        </Card>
      </CardGrid>

      {/* Section 6: The Single Tax and Land Value Tax */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">6. The Single Tax Critique</h2>

      <p className="my-4">
        Henry George proposed a "single tax" on land values, claiming land rent is an
        unearned surplus. Rothbard refutes this view.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">Rothbard's Critique of Georgism</h4>
        <ul className="text-dark-300 space-y-2">
          <li>• <strong>Land is produced:</strong> Raw land has no value—only improved, developed land does</li>
          <li>• <strong>Separating improvements impossible:</strong> Can't disentangle land from improvements</li>
          <li>• <strong>Site value is capitalized investment:</strong> Land prices reflect expected returns</li>
          <li>• <strong>Discourages development:</strong> Taxing land values reduces incentive to improve</li>
        </ul>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Taxation is coerced</strong>—unlike market payments, there is no
              voluntary exchange.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              All taxes <strong>reduce production</strong>, consume capital, and
              misallocate resources.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Tax incidence</strong> often differs from legal liability—workers
              and consumers bear much of the burden.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              <strong>Progressive taxation</strong> penalizes success and destroys
              capital formation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              There is no "neutral" or "just" tax—<strong>all taxation distorts</strong>
              the market.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 5 examines <strong>Binary Intervention: Government Expenditures</strong>—
        what happens to the resources that government extracts through taxation.
      </p>
    </LessonLayout>
  );
}
