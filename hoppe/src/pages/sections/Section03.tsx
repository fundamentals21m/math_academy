import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Socialism of Conservatism</h2>

      <p className="mb-4">
        The forms of socialism most commonly known—Russian-style and social-democratic—are derived
        from basically the same ideological sources. But conservatism is also a form of socialism,
        and it too produces impoverishment, all the more so the more resolutely it is applied.
      </p>

      <p className="mb-4">
        This may seem surprising, as conservatism is often portrayed as the opposite of socialism.
        But as long as one adheres to principles that assign ownership rights to nonproducers
        (nonusers) and noncontractors, relative impoverishment must be the result—regardless of
        whether such policies are called "left" or "right."
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Conservative vs. Socialist Goals</h3>

      <Definition title="The Conservative Approach">
        <p>
          While Marxist and social-democratic socialism aim to redistribute from "haves" to
          "have-nots," conservatism aims to <strong>preserve the existing order</strong>—to
          protect established positions, traditional industries, and existing social hierarchies
          from the disruptive forces of free market competition.
        </p>
      </Definition>

      <Theorem title="Same Means, Different Ends">
        <p>
          Though conservatism and Marxism have different goals, both use the same means:
          the denial of property rights to natural owners. Both involve transferring control
          over resources from those who produced or contracted for them to those who did neither.
        </p>
        <p className="mt-2">
          The conservative says: "You cannot use your property to compete with established
          firms." The socialist says: "You cannot use your property without sharing the
          proceeds with others." Both deny the owner's right to do as he sees fit with
          what is rightfully his.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Conservative Policy Tools</h3>

      <p className="mb-4">
        Conservative socialism employs a variety of policy tools to preserve existing arrangements
        against change and competition:
      </p>

      <Example title="Conservative Interventions">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Tariffs and import quotas:</strong> Protect domestic industries from foreign competition</li>
          <li><strong>Licensing requirements:</strong> Restrict entry into professions and industries</li>
          <li><strong>Zoning laws:</strong> Prevent changes in land use and preserve neighborhood character</li>
          <li><strong>Agricultural subsidies:</strong> Maintain traditional farming patterns</li>
          <li><strong>Price controls:</strong> Prevent market adjustments that would redistribute wealth</li>
          <li><strong>Bailouts:</strong> Save established firms from the consequences of poor management</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fascism and Nazism as Conservative Socialism</h3>

      <p className="mb-4">
        Fascism and Nazism represent the most extreme forms of conservative socialism. While
        they received support from established proprietors, shop owners, farmers, and entrepreneurs,
        the conclusion that they were pro-capitalist movements is entirely wrong.
      </p>

      <Callout type="warning" title="The True Enemy">
        <p>
          Fascism's and Nazism's most fervently abhorred enemy was not socialism as such,
          but <strong>liberalism</strong>—the doctrine of free markets and individual rights.
          They despised Marxism primarily because it was internationalist and threatened to
          turn the social order upside-down, not because it was socialist.
        </p>
      </Callout>

      <Definition title="Nazi Economic Policy">
        <p>
          The Nazis established highly controlled and regulated economies in which private
          ownership existed in name but had become meaningless in fact. They imposed:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Almost complete price controls (including wage controls)</li>
          <li>Four-year economic plans (similar to Soviet five-year plans)</li>
          <li>Economic planning and supervising boards that approved all significant production changes</li>
        </ul>
        <p className="mt-2">
          An "owner" could no longer decide what to produce, how to produce it, from whom
          to buy, to whom to sell, or what prices to charge.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Illusion of Security</h3>

      <Theorem title="False Prosperity Under Conservative Socialism">
        <p>
          Conservative socialism creates a <strong>feeling of security</strong>. Everyone is
          assigned a fixed position, and both wage-earners and capital owners receive guaranteed,
          nominally stable or growing incomes. Giant public works programs, conscription, and
          war economies strengthen the illusion of prosperity.
        </p>
        <p className="mt-2">
          But as with any economic system that destroys a producer's incentive to adjust to
          demand, this feeling of prosperity proves illusory. In reality, the standard of living
          falls—not only in relative but often in absolute terms.
        </p>
      </Theorem>

      <Example title="Nazi Germany's Economic Reality">
        <p>
          The average gross income of employed persons in Germany in 1938 was (in absolute
          terms, not accounting for inflation) still lower than that of 1927. Then Hitler
          started the war and resources were shifted from civilian to military uses, causing
          the standard of living to decrease further.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Conservative Socialism</h3>

      <p className="mb-4">
        Contemporary conservative socialism takes less dramatic forms than fascism but operates
        on the same principles. It seeks to protect existing arrangements—whether established
        businesses, traditional industries, or current property values—from the changes that
        would occur under free market conditions.
      </p>

      <Callout type="success" title="Key Insight">
        <p>
          The classification of a policy as "conservative" or "progressive," "right" or "left,"
          is irrelevant to its economic effects. What matters is whether the policy respects
          the rights of natural property owners or transfers control to those who did not
          produce or contract for the resources in question. By this standard, conservatism
          is just as socialist as Marxism—it merely directs its redistribution toward different
          beneficiaries.
        </p>
      </Callout>
    </LessonLayout>
  );
}
