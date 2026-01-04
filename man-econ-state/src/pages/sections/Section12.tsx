import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Defense against violence could be supplied on the free market like any other service."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Power and Market
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        We now begin <em>Power and Market</em>, Rothbard's systematic analysis of government
        and the economy. This chapter asks a radical question: could <strong className="text-emerald-400">
        defense services</strong>—police, courts, and military—be provided by the market
        rather than the State?
      </p>

      {/* Section 1: Private Production of Defense */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Private Production of Defense</h2>

      <p className="my-4">
        Rothbard argues that defense is an <strong className="text-emerald-400">economic service</strong>
        like any other. It involves scarce resources, can be provided at various quality levels,
        and is valued by consumers. Why should it be exempt from market provision?
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Police Services</h4>
          <p className="text-sm text-dark-300">
            Private security guards, gated communities, and detective agencies already exist.
            Why not compete with government police?
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Court Services</h4>
          <p className="text-sm text-dark-300">
            Arbitration and mediation are widely used in business. Private courts could
            adjudicate disputes without state involvement.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Defense</h4>
          <p className="text-sm text-dark-300">
            Insurance companies have strong incentives to prevent violence against clients.
            They could fund defensive measures.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Enforcement</h4>
          <p className="text-sm text-dark-300">
            Reputation, ostracism, and economic sanctions can enforce private law.
            Outlaws lose access to markets.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>Historical examples:</strong> Medieval Iceland, the American West before
          formal government, and merchant law (lex mercatoria) all show that law and
          order can emerge without state monopoly.
        </p>
      </Callout>

      {/* Section 2: The Nature of the State */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Nature of the State</h2>

      <p className="my-4">
        Rothbard offers a distinctive definition of the State: it is that organization in
        society which claims a <strong className="text-emerald-400">monopoly of force</strong>
        over a territorial area.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">The Defining Characteristics of the State</h4>
        <ul className="text-dark-300 space-y-2">
          <li>• <strong>Territorial monopoly:</strong> Claims exclusive right to use force in an area</li>
          <li>• <strong>Compulsory jurisdiction:</strong> Subjects cannot opt out</li>
          <li>• <strong>Taxation:</strong> Extracts payment without consent</li>
          <li>• <strong>Self-legitimation:</strong> Claims the right to judge its own disputes</li>
        </ul>
      </div>

      <p className="my-4">
        If a private agency claimed these powers, we would call it a criminal gang.
        The State is distinguished only by the ideological acceptance of its claims.
      </p>

      <Callout type="warning">
        <p>
          <strong>The double standard:</strong> Actions that are considered crimes when
          done by individuals (theft, assault, murder) are called "policy" when done
          by the State. Rothbard asks: why the exemption?
        </p>
      </Callout>

      {/* Section 3: Property Rights and Contracts */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Property Rights and the Theory of Contracts</h2>

      <p className="my-4">
        The foundation of a free society is <strong className="text-emerald-400">property rights</strong>.
        Rothbard develops a theory of property based on self-ownership and original appropriation.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            principle: 'Self-Ownership',
            description: 'Each person owns their own body. This is the foundation of all rights.',
          },
          {
            principle: 'Original Appropriation',
            description: 'Unowned resources become property by mixing labor with them.',
          },
          {
            principle: 'Voluntary Transfer',
            description: 'Property can be transferred by gift or exchange.',
          },
          {
            principle: 'Restitution',
            description: 'Violators of property rights must compensate victims.',
          },
        ].map(({ principle, description }, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full text-white font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{principle}</p>
              <p className="text-sm text-dark-400">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="my-4">
        Contracts are transfers of property rights. They are binding because violating them
        is theft—taking what was promised. Private courts can enforce contracts through
        reputation, ostracism, and compensation requirements.
      </p>

      {/* Section 4: Objections and Replies */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Objections and Replies</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Objection: War Among Agencies</h4>
          <p className="text-sm text-dark-300">
            "Private agencies would fight each other!"
          </p>
          <p className="text-sm text-dark-400 mt-2">
            <strong>Reply:</strong> War is expensive. Arbitration is cheaper. Agencies
            have strong incentives to cooperate.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Objection: The Poor</h4>
          <p className="text-sm text-dark-300">
            "Only the rich could afford protection!"
          </p>
          <p className="text-sm text-dark-400 mt-2">
            <strong>Reply:</strong> The poor are worst served by state law now. Competition
            would lower prices as in any market.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Objection: Agency Tyranny</h4>
          <p className="text-sm text-dark-300">
            "An agency might become a new State!"
          </p>
          <p className="text-sm text-dark-400 mt-2">
            <strong>Reply:</strong> Possible, but competition limits this. Customers can
            switch. The State already is the worst case.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Objection: National Defense</h4>
          <p className="text-sm text-dark-300">
            "Who would defend against foreign invasion?"
          </p>
          <p className="text-sm text-dark-400 mt-2">
            <strong>Reply:</strong> Insurance companies, militia associations, and armed
            citizenry. Decentralization makes conquest harder.
          </p>
        </Card>
      </CardGrid>

      {/* The Anarcho-Capitalist Vision */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Anarcho-Capitalist Vision</h2>

      <p className="my-4">
        Rothbard is advocating <strong className="text-emerald-400">anarcho-capitalism</strong>:
        a society with private property, free markets, and no State. Defense services would
        be provided competitively, like any other service.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">A Free Society</h4>
        <p className="text-dark-200 text-lg mb-4">
          A social order based entirely on voluntary exchange and private property,
          with no coercive monopoly over any service.
        </p>
        <ul className="text-dark-400 text-sm space-y-2">
          <li>• All services provided by competing firms</li>
          <li>• Law emerges from contracts and precedent</li>
          <li>• Disputes resolved by agreed-upon arbitrators</li>
          <li>• Rights violations compensated, not "punished"</li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          <strong>Not utopia:</strong> Rothbard doesn't claim a stateless society would
          be perfect. He claims it would be better than state monopoly—more just, more
          efficient, more responsive to actual needs.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Defense is an economic service</strong> that could be provided by
              the market like any other.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              The <strong>State is defined by its monopoly of force</strong> over a
              territory and its power to tax.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Property rights</strong> are based on self-ownership and original
              appropriation. They are the foundation of social order.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              <strong>Private agencies would cooperate</strong> because conflict is
              expensive. Arbitration beats war.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Anarcho-capitalism</strong> is the logical endpoint of consistent
              free-market thinking.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 2 examines the <strong>Fundamentals of Intervention</strong>—a systematic
        classification of the types and effects of government action in the economy.
      </p>
    </LessonLayout>
  );
}
