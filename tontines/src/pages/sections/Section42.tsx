import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Retirement Income Crisis</h2>

      <p className="mb-4">
        We've spent most of this course on tontine mathematics. Now let's connect it to the
        real world. The retirement income crisis is one of the defining challenges of our time—and
        tontines may be part of the solution.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Several trends have converged to create a perfect storm:
      </p>

      <Definition title="The Four Challenges">
        <ul className="space-y-3">
          <li>
            <strong>Longer retirements:</strong> Life expectancy at 65 has increased from 15
            years (1960) to 20+ years today. Many retirements now span 25-35 years.
          </li>
          <li>
            <strong>Insufficient savings:</strong> The median American approaching retirement
            has far less saved than needed for a 25-year retirement.
          </li>
          <li>
            <strong>Disappearing pensions:</strong> Traditional defined-benefit pensions have
            declined from covering 38% of workers (1980) to under 15% today.
          </li>
          <li>
            <strong>Social Security limits:</strong> SS replaces only about 40% of pre-retirement
            income for median earners—and faces long-term funding challenges.
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Numbers</h3>

      <Example title="A Typical Scenario">
        <div className="space-y-3">
          <p><strong>Profile:</strong> 65-year-old, median savings, typical expenses</p>
          <table className="w-full text-sm mt-4">
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-800">
                <td className="py-2">Retirement savings</td>
                <td className="py-2 text-right">$250,000</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2">4% withdrawal rate</td>
                <td className="py-2 text-right">$10,000/year</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2">Social Security</td>
                <td className="py-2 text-right">$20,000/year</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 font-semibold">Total income</td>
                <td className="py-2 text-right font-semibold">$30,000/year</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2">Typical retirement expenses</td>
                <td className="py-2 text-right">$40,000-$50,000/year</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-red-400">Annual shortfall</td>
                <td className="py-2 text-right font-semibold text-red-400">$10,000-$20,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Example>

      <Callout type="warning" title="The 4% Rule Problem">
        <p>
          The traditional "4% rule" (withdraw 4% annually, adjusted for inflation) was designed
          for 30-year retirements. Problems:
        </p>
        <ul className="mt-2 space-y-1">
          <li>Many retirements now exceed 30 years</li>
          <li>Low interest rates reduce safe withdrawal rates</li>
          <li>Fear of outliving savings leads to <em>under</em>-spending</li>
          <li>No adjustment for actual mortality—you might die at 70 or live to 100</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Annuities Haven't Solved It</h3>

      <p className="mb-4">
        Traditional annuities offer lifetime income, but uptake remains low:
      </p>

      <Example title="Annuity Market Reality">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Low payout rates:</strong> At age 65, a $250,000 annuity pays ~$13,000/year
            (5.2%). Retirees feel they're "losing" their capital.
          </li>
          <li>
            <strong>No mortality credits until death:</strong> You pay the same whether you
            die at 66 or 96—no upside for longevity.
          </li>
          <li>
            <strong>Counterparty risk:</strong> Insurance company could fail (though rare,
            it concerns retirees).
          </li>
          <li>
            <strong>Irreversibility:</strong> Once annuitized, capital is gone. No inheritance,
            no emergency fund.
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Tontine Solution</h3>

      <p className="mb-4">
        Here's the same $250,000 in a tontine instead:
      </p>

      <Example title="Tontine vs. Traditional Withdrawal">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Age</th>
              <th className="pb-2">4% Rule</th>
              <th className="pb-2">Annuity</th>
              <th className="pb-2">Tontine</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">65</td>
              <td className="py-2">$10,000</td>
              <td className="py-2">$13,000</td>
              <td className="py-2 text-emerald-400">$10,000</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">75</td>
              <td className="py-2">$10,000</td>
              <td className="py-2">$13,000</td>
              <td className="py-2 text-emerald-400">$13,000</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">85</td>
              <td className="py-2">$10,000*</td>
              <td className="py-2">$13,000</td>
              <td className="py-2 text-emerald-400">$17,000</td>
            </tr>
            <tr>
              <td className="py-2">95</td>
              <td className="py-2">Depleted</td>
              <td className="py-2">$13,000</td>
              <td className="py-2 text-emerald-400">$21,000</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400 text-sm">
          *4% rule adjusted for inflation but may deplete before death
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Tontines Excel</h3>

      <MathBlock>
        {`\\text{Tontine Payout} = \\frac{\\text{Investment Return} + \\text{Mortality Credits}}{\\text{Survivors}}`}
      </MathBlock>

      <Definition title="Key Advantages">
        <ul className="space-y-2">
          <li>
            <strong>Higher initial payouts:</strong> At 4%, tontine returns ~$10,000/year,
            matching the safe withdrawal rate—but with upside.
          </li>
          <li>
            <strong>Growing income:</strong> Mortality credits increase payouts over time,
            exactly when healthcare costs typically rise.
          </li>
          <li>
            <strong>Retain capital stake:</strong> Unlike annuities, you keep ownership of
            your share until death.
          </li>
          <li>
            <strong>Efficient pooling:</strong> No insurance company profits or reserve
            requirements eating into returns.
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Complete Retirement Picture</h3>

      <Example title="Tontine-Enhanced Retirement ($250k savings)">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Age</th>
              <th className="pb-2">Social Security</th>
              <th className="pb-2">Tontine</th>
              <th className="pb-2">Total</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">65</td>
              <td className="py-2">$20,000</td>
              <td className="py-2">$10,000</td>
              <td className="py-2 text-emerald-400">$30,000</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">75</td>
              <td className="py-2">$20,000</td>
              <td className="py-2">$13,000</td>
              <td className="py-2 text-emerald-400">$33,000</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">85</td>
              <td className="py-2">$20,000</td>
              <td className="py-2">$17,000</td>
              <td className="py-2 text-emerald-400">$37,000</td>
            </tr>
            <tr>
              <td className="py-2">95</td>
              <td className="py-2">$20,000</td>
              <td className="py-2">$21,000</td>
              <td className="py-2 text-emerald-400">$41,000</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-emerald-400">
          Income grows from $30k to $41k—nearly matching the $40k expense target,
          without depleting savings or requiring a $250k annuity purchase.
        </p>
      </Example>

      <Callout type="success" title="The Tontine Proposition">
        <p>
          For retirees with moderate savings, tontines offer a path to:
        </p>
        <ul className="mt-2 space-y-1">
          <li>Lifetime income without sacrificing all capital</li>
          <li>Growing payouts that keep pace with healthcare inflation</li>
          <li>Efficient pooling without insurance company overhead</li>
          <li>Protection against outliving savings</li>
        </ul>
      </Callout>

      <p className="text-dark-400 italic">
        But tontines work best as part of a broader strategy. Next, we'll see how to
        integrate tontines into a complete retirement portfolio.
      </p>
    </LessonLayout>
  );
}
