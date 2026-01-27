import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Socialism Social-Democratic Style</h2>

      <p className="mb-4">
        The disappointing experience with Russian-type socialism led to a constant decline in the
        popularity of orthodox Marxist socialism. A policy of socializing the means of production
        could never actually be carried through to its logical end—the socialization of all
        production factors—without causing an immediate economic disaster. Even moderate "market"
        socialism cannot prevent a relative impoverishment of the population.
      </p>

      <p className="mb-4">
        This has spurred the emergence and development of modern social-democratic socialism,
        which is now one of the most widespread ideologies of our age. It shapes the political
        programs not only of explicitly socialist parties, but also of groups who would never
        call themselves socialists.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Two Central Characteristics</h3>

      <Definition title="Social-Democratic Socialism">
        <p className="mb-2">
          Social-democratic socialism has two basic characteristics that distinguish it from
          Russian-style socialism:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            <strong>Private ownership is permitted:</strong> It does not outlaw private ownership
            of the means of production and even accepts the idea of all means of production being
            privately owned—with exceptions for education, traffic and communication, central
            banking, and certain "natural monopolies."
          </li>
          <li>
            <strong>Income redistribution through taxation:</strong> Instead of nationalizing
            production, it institutionalizes a system whereby the income derived from production
            is forcibly redistributed according to egalitarian or redistributive principles.
          </li>
        </ol>
      </Definition>

      <Callout type="info" title="The Mixed Economy">
        <p>
          Social-democratic socialism represents what is commonly called a "mixed economy"—one
          that combines private ownership of production with government redistribution of
          income. This approach emerged as socialists recognized the economic failures of
          complete nationalization while still seeking egalitarian outcomes.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Taxation as the Primary Tool</h3>

      <p className="mb-4">
        The central mechanism of social-democratic socialism is taxation. Rather than
        nationalizing factories and farms, this system allows private production but then
        forcibly redistributes the income that production generates. The socialist goal
        of equality is pursued not by abolishing private property but by taxing it.
      </p>

      <Theorem title="Taxation Is Never Neutral">
        <p>
          The introduction of taxation or a rise in any given level of taxation does not only
          favor nonproducers at the expense of producers—it also simultaneously changes, for
          everyone, the cost attached to different methods of achieving monetary income.
        </p>
        <p className="mt-2">
          It becomes <strong>relatively less costly</strong> to attain additional monetary
          income through <em>nonproductive</em> means—not by producing more goods but by
          participating in the process of noncontractual acquisitions of goods already produced.
        </p>
      </Theorem>

      <Example title="The Absurdity of Neutral Taxation">
        <p>
          The belief that taxation is "neutral" as regards output can be shown to be absurd
          by carrying it to its logical extreme: it would amount to claiming that even
          complete expropriation of all producers' monetary income and its transfer to
          nonproducers would make no difference, since the increased laziness of nonproducers
          would be fully compensated by increased "workaholism" by producers.
        </p>
        <p className="mt-2">
          This is obviously absurd—it denies the very premise that a forced transfer has
          actually taken place.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Effects on Production</h3>

      <Theorem title="Incentive Structure Under Taxation">
        <p>
          With increased taxation, a different legal incentive structure is institutionalized—one
          that changes the relative costs of production versus nonproduction. Even if producers
          become more intent on attaining additional money as a consequence of higher taxes, they
          will increasingly do so not by intensifying productive efforts but rather through
          <strong> exploitative methods</strong>.
        </p>
      </Theorem>

      <p className="mb-4">
        This explains why taxation can never be economically neutral. The higher the tax rate,
        the greater the incentive to shift from productive activities to political rent-seeking.
        People rationally respond to the incentive structure they face.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Regulatory State</h3>

      <p className="mb-4">
        In addition to taxation, social-democratic socialism employs extensive regulation of
        economic activity. While nominally allowing private ownership, the state restricts what
        owners can do with their property through licensing requirements, safety regulations,
        environmental rules, labor laws, and countless other interventions.
      </p>

      <Definition title="De Facto Socialization">
        <p>
          When government regulation becomes sufficiently extensive, the nominal private owner
          becomes a de facto caretaker. They hold legal title to the property but cannot use
          it according to their own judgment. The essential decisions about production are
          made by political authorities rather than by the owner responding to market signals.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Social Democracy Persists</h3>

      <p className="mb-4">
        Unlike Russian-style socialism, social-democratic socialism can persist indefinitely
        without causing immediate economic collapse. Because it permits private production
        and market prices, it avoids the economic calculation problem that made Soviet-style
        central planning unworkable.
      </p>

      <Callout type="warning" title="Gradual Impoverishment">
        <p>
          However, this does not mean social-democratic socialism is without costs. It produces
          a <strong>relative impoverishment</strong> compared to what would exist under pure
          capitalism. The economy grows more slowly, innovation is hampered, and resources are
          systematically misallocated toward politically favored uses rather than those that
          best satisfy consumer preferences.
        </p>
      </Callout>

      <Theorem title="The Redistributive Trap">
        <p>
          Social-democratic redistribution creates its own constituency. Once people become
          dependent on government transfers, they have a strong incentive to vote for parties
          that promise to maintain or increase those transfers. This creates a political
          ratchet effect where the scope of redistribution tends to expand over time.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Comparison with Russian-Style Socialism</h3>

      <Example title="Key Differences">
        <div className="space-y-2">
          <p><strong>Russian-style:</strong> Abolishes private ownership entirely; state owns
          means of production; economic calculation impossible; rapid impoverishment.</p>
          <p><strong>Social-democratic:</strong> Permits private ownership; redistributes income
          through taxation; market prices exist; gradual impoverishment relative to capitalism.</p>
        </div>
      </Example>

      <Callout type="success" title="Key Insight">
        <p>
          Social-democratic socialism is more sustainable than Russian-style socialism precisely
          because it is <em>less</em> socialist. By permitting private ownership and market prices,
          it avoids the catastrophic calculation problem. But this partial retreat from socialism
          does not eliminate socialism's harmful effects—it merely reduces them to a level that
          does not cause immediate collapse.
        </p>
      </Callout>
    </LessonLayout>
  );
}
