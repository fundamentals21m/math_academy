import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "It is not the business of economics to tell people what ends to pursue.
        But it can show them whether their means are appropriate to their ends."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Power and Market
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Rothbard now examines the <strong className="text-emerald-400">ethical arguments</strong>
        used to justify government intervention. While praxeology is value-free, it can critique
        ethical arguments for their internal consistency and factual accuracy.
      </p>

      {/* Section 1: The Role of Praxeology in Ethics */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Role of Praxeology in Ethics</h2>

      <p className="my-4">
        Economics does not tell us what ends to pursue. But it can expose contradictions
        in ethical arguments and show when proposed policies will not achieve their stated goals.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">What Praxeology Can Do</h4>
        <ul className="text-dark-300 space-y-2">
          <li>• <strong>Expose contradictions:</strong> Show when ethics clash with each other</li>
          <li>• <strong>Reveal consequences:</strong> Trace effects of policies to their conclusions</li>
          <li>• <strong>Test means:</strong> Show if proposed means achieve stated ends</li>
          <li>• <strong>Identify costs:</strong> Make explicit the trade-offs involved</li>
        </ul>
      </div>

      <Callout type="note">
        <p>
          <strong>Wertfrei economics:</strong> Praxeology is "value-free" in that it doesn't
          prescribe ends. But this doesn't prevent it from analyzing the means people
          propose to achieve their ends.
        </p>
      </Callout>

      {/* Section 2: The Equality Critique */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Critique of Egalitarianism</h2>

      <p className="my-4">
        <strong className="text-emerald-400">Egalitarianism</strong>—the doctrine that equality
        is a primary value—is often used to justify redistribution. Rothbard subjects it to
        praxeological critique.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Nature Is Unequal</h4>
          <p className="text-sm text-dark-300">
            People differ in talents, preferences, circumstances. Equality of outcomes
            requires unequal treatment.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Equality of What?</h4>
          <p className="text-sm text-dark-300">
            Income? Wealth? Consumption? Happiness? Different equalities conflict
            with each other.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Leveling Down</h4>
          <p className="text-sm text-dark-300">
            If we can't raise everyone up, equality requires bringing the successful
            down—making everyone poorer.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Destroys Incentives</h4>
          <p className="text-sm text-dark-300">
            If outcomes are equalized, why produce more than others? Equality
            undermines production.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        True equality before the law (equal rights) differs fundamentally from equality
        of outcomes. The former is consistent; the latter requires endless intervention.
      </p>

      {/* Section 3: The Security Argument */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Critique of "Security"</h2>

      <p className="my-4">
        The welfare state is often justified as providing <strong className="text-emerald-400">
        security</strong>. But Rothbard questions what this means and whether government
        can actually provide it.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            claim: 'Government provides income security',
            critique: 'By taxing productive income, it reduces total income available. Security for some means insecurity for others.',
          },
          {
            claim: 'Social insurance reduces risk',
            critique: 'Compulsory insurance prevents individual choice of risk levels. One-size-fits-all ignores preferences.',
          },
          {
            claim: 'Safety nets prevent destitution',
            critique: 'Private charity, mutual aid, and family provided safety nets before government. State welfare crowded them out.',
          },
          {
            claim: 'Government planning increases stability',
            critique: 'Government intervention (especially monetary policy) is the primary source of business cycles.',
          },
        ].map(({ claim, critique }, i) => (
          <div key={i} className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <p className="font-semibold text-rose-400 mb-2">"{claim}"</p>
            <p className="text-sm text-dark-400">
              <strong>Critique:</strong> {critique}
            </p>
          </div>
        ))}
      </div>

      <Callout type="warning">
        <p>
          <strong>The security paradox:</strong> The more government provides "security,"
          the more people become dependent on it, and the less secure they become when
          government fails or changes policies.
        </p>
      </Callout>

      {/* Section 4: Democracy and Majoritarianism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. The Critique of Democratic Ethics</h2>

      <p className="my-4">
        The argument that intervention is justified because it is <strong className="text-emerald-400">
        democratically chosen</strong> confuses process with substance.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">Problems with Majoritarian Ethics</h4>
        <ul className="text-dark-300 space-y-2">
          <li>• <strong>Quantity not quality:</strong> 51% approval doesn't make an action right</li>
          <li>• <strong>Minority oppression:</strong> Democracy can tyrannize minorities</li>
          <li>• <strong>Voter ignorance:</strong> Voters know little about policies they support</li>
          <li>• <strong>Special interests:</strong> Organized minorities exploit dispersed majorities</li>
          <li>• <strong>Rights are not voteable:</strong> Some things shouldn't depend on elections</li>
        </ul>
      </div>

      <p className="my-4">
        The market "votes" every day, with each dollar cast as a vote. This continuous
        plebiscite reflects actual preferences more accurately than periodic elections.
      </p>

      {/* Section 5: "Public Interest" and "Social Good" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. The Critique of "Public Interest"</h2>

      <p className="my-4">
        Intervention is often justified as serving the <strong className="text-emerald-400">
        "public interest"</strong> or <strong className="text-emerald-400">"social good"</strong>.
        But what do these terms actually mean?
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">No Collective Mind</h4>
          <p className="text-sm text-dark-300">
            "Society" doesn't choose or prefer—only individuals do. "Social welfare"
            is a metaphor, not a real thing.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Conflicting Interests</h4>
          <p className="text-sm text-dark-300">
            In any intervention, some gain and some lose. The "public" is not unanimous.
            Who decides?
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Pretense of Knowledge</h4>
          <p className="text-sm text-dark-300">
            Officials claim to know the "public interest" better than individuals
            know their own interests.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Political Cover</h4>
          <p className="text-sm text-dark-300">
            "Public interest" language disguises the reality: some use government
            power against others.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          <strong>Methodological individualism:</strong> Only individuals act, choose,
          and value. "Society" is a shorthand for patterns of individual interactions,
          not an entity with its own will.
        </p>
      </Callout>

      {/* Section 6: Cost-Benefit and Utilitarianism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">6. The Critique of Utilitarian Cost-Benefit</h2>

      <p className="my-4">
        <strong className="text-emerald-400">Utilitarian</strong> arguments claim intervention
        is justified when benefits exceed costs. Rothbard identifies fatal flaws.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">Why Cost-Benefit Analysis Fails</h4>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-dark-200">1. Interpersonal Comparison</p>
            <p className="text-sm text-dark-400">
              We cannot compare one person's utility to another's. How much does
              the taxpayer lose vs. how much does the recipient gain? Unmeasurable.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-200">2. Ordinal, Not Cardinal</p>
            <p className="text-sm text-dark-400">
              Utility is ordinal (ranked) not cardinal (measured). We can say A {">"} B
              but not A = 2B. Adding up utilities is meaningless.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-200">3. Demonstrated Preference</p>
            <p className="text-sm text-dark-400">
              We only know preferences through action. If a tax is coerced, we cannot
              say the taxpayer "really" benefits.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-200">4. Secondary Effects</p>
            <p className="text-sm text-dark-400">
              Cost-benefit typically ignores long-run effects, incentive changes,
              and unseen consequences.
            </p>
          </div>
        </div>
      </div>

      {/* Section 7: Natural Rights Alternative */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">7. The Natural Rights Alternative</h2>

      <p className="my-4">
        Rothbard advocates a <strong className="text-emerald-400">natural rights</strong>
        approach: individuals have rights to person and property that cannot be overridden
        by utilitarian calculation.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Natural Rights Framework</h4>
        <ul className="text-dark-300 space-y-2">
          <li>• <strong>Self-ownership:</strong> Each person owns their own body</li>
          <li>• <strong>Property rights:</strong> Derived from self-ownership and homesteading</li>
          <li>• <strong>Non-aggression:</strong> No one may initiate force against person or property</li>
          <li>• <strong>Voluntary exchange:</strong> All interactions must be consensual</li>
        </ul>
        <p className="text-dark-400 text-sm mt-4">
          This framework provides clear, consistent rules without requiring impossible
          utility calculations.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Praxeology critiques ethics</strong> by exposing internal
              contradictions and factual errors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Egalitarianism</strong> conflicts with human nature and
              destroys productive incentives.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>"Security"</strong> provided by government creates dependency
              and crowds out private alternatives.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              <strong>Democratic voting</strong> doesn't justify intervention—
              rights are not subject to vote.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Cost-benefit analysis</strong> fails because utility cannot
              be measured or compared.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 7 concludes with <strong>Economics and Public Policy</strong>—synthesizing
        Rothbard's analysis into a comprehensive view of the free society.
      </p>
    </LessonLayout>
  );
}
