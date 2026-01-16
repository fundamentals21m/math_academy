import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2>The Uneasy Case for Degressive Taxation</h2>

      <p>
        Between progressive taxation (rising marginal rates) and flat taxation (a single rate)
        lies degressive taxation—a system where marginal rates fall as income rises. While rarely
        advocated openly, degressive taxation exists in practice through features like the Social
        Security cap and various deductions that benefit higher earners. What can be said for and
        against this approach?
      </p>

      <Callout type="info">
        <strong>Defining Degressive Taxation:</strong> A tax is degressive if the percentage of
        income paid in tax falls as income rises. This is the opposite of progressive taxation,
        where the percentage rises with income. It differs from a flat tax, where the percentage
        is constant.
      </Callout>

      <h3>The Case For Degression</h3>
      <p>
        Several arguments have been advanced for degressive taxation, though they are rarely made
        explicitly. First, high earners may be more mobile and able to avoid taxes, so taxing them
        at lower rates may actually raise more revenue. Second, high earners may provide greater
        positive externalities (job creation, innovation), justifying favorable treatment. Third,
        society may depend heavily on the highly productive, making it unwise to discourage their
        efforts.
      </p>

      <p>
        These arguments have some force but are difficult to quantify. How mobile are high earners?
        How large are their positive externalities? How responsive are they to tax rates? The
        answers vary by circumstance and cannot support a general principle of degression.
      </p>

      <Callout type="warning">
        <strong>The Incentive Argument:</strong> The strongest case for degressive taxation is the
        incentive argument. High marginal rates on high incomes discourage the activities that
        generate high incomes—entrepreneurship, risk-taking, long hours. Reducing these rates might
        increase total output. But this argument applies to any tax, not specifically to degression.
      </Callout>

      <h3>The Case Against Degression</h3>
      <p>
        The case against degressive taxation is primarily moral. Most people believe that those who
        have more should contribute more, not less. The ability-to-pay principle suggests that the
        burden of taxation should fall more heavily on those better able to bear it. Degression
        violates this intuition.
      </p>

      <p>
        Moreover, degressive taxation exacerbates inequality. If the rich pay a smaller percentage
        of their income in tax, their after-tax income grows faster than the middle class's. Over
        time, this compounds into ever-greater inequality. Whether inequality is itself bad is
        debatable, but most people are uncomfortable with policies that deliberately increase it.
      </p>

      <h3>Hidden Degression</h3>
      <p>
        In practice, many tax systems are more degressive than they appear. The Social Security
        tax applies only up to a cap, making it effectively degressive. Tax preferences for
        capital gains benefit those with capital. Deductions that rise with income (like the
        mortgage interest deduction) make the effective rate degressive.
      </p>

      <Callout type="info">
        <strong>The True Rate Structure:</strong> To understand the actual burden of taxation,
        one must look at effective rates—the percentage of income actually paid—not just nominal
        rates. When all taxes are considered (income, payroll, sales, property), the system is
        less progressive than it appears, and in some ranges may be degressive.
      </Callout>

      <h3>The Uneasy Compromise</h3>
      <p>
        Degressive taxation represents an uneasy compromise between competing principles. On one
        hand, efficiency considerations suggest that high marginal rates on high incomes are costly.
        On the other hand, equity considerations suggest that the rich should bear their share.
        Degression satisfies neither principle fully.
      </p>

      <p>
        The case for degression is "uneasy" because its proponents are reluctant to defend it
        openly. No politician campaigns for lower rates on the rich than on the middle class. Yet
        the tax code is riddled with provisions that have precisely this effect.
      </p>

      <h3>The Libertarian Perspective</h3>
      <p>
        From the libertarian perspective, the debate over progressive versus degressive taxation
        is secondary to the debate over the level of taxation. A low degressive tax might be
        preferable to a high progressive tax, and vice versa. The form of taxation matters less
        than the amount.
      </p>

      <Callout type="success">
        <strong>The Fundamental Point:</strong> All taxation is coercion; all taxation takes
        property from those who earned it. Whether the burden is distributed progressively,
        proportionally, or degressively is a second-order question. The first-order question is
        how much the state should take at all.
      </Callout>

      <h3>Conclusion: Beyond the Rate Structure</h3>
      <p>
        The debate over degressive taxation illustrates the difficulty of designing a "fair" tax
        system. Different principles of fairness lead to different rate structures, and there is
        no neutral way to resolve the conflict. The economist can analyze effects but cannot
        determine which principles should prevail.
      </p>

      <Callout type="success">
        <strong>The Takeaway:</strong> The case for degressive taxation is uneasy because it
        conflicts with widespread moral intuitions while lacking clear empirical support. Those
        who favor degression should have the honesty to defend it explicitly rather than smuggling
        it in through loopholes and preferences.
      </Callout>
    </LessonLayout>
  );
}
