import { LessonLayout } from '@/components/layout';
import { Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { TontineSimulator } from '@/components/visualizations';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Year-by-Year Calculation</h2>

      <p className="mb-4">
        Let's trace through our tontine example step by step, calculating exactly
        how payouts evolve as members die.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Year 1 Calculation</h3>

      <Example title="Year 1: Age 65 → 66">
        <p className="mb-3"><strong>Step 1: Investment Returns</strong></p>
        <MathBlock>
          {`\\text{Investment income} = P \\times r = \\$10,000,000 \\times 0.04 = \\$400,000`}
        </MathBlock>

        <p className="mt-4 mb-3"><strong>Step 2: Mortality</strong></p>
        <p className="mb-2">
          Expected deaths at age 65: <InlineMath>{'q_{65} \\approx 1.2\\%'}</InlineMath>
        </p>
        <p className="mb-2">
          Actual deaths (example): 1 person
        </p>
        <p>Survivors: <InlineMath>n_1 = 99</InlineMath> people</p>

        <p className="mt-4 mb-3"><strong>Step 3: Payout</strong></p>
        <MathBlock>
          {`D_1 = \\frac{\\$400,000}{99} = \\$4,040 \\text{ per person}`}
        </MathBlock>
        <p className="mt-2">
          As percentage of contribution: <InlineMath>4.04\%</InlineMath>
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Year 5 Calculation</h3>

      <Example title="Year 5: Age 69 → 70">
        <p className="mb-3">
          Assume 95 survivors (5 have died over 5 years)
        </p>
        <p className="mb-2">
          Pool has grown from dead members' capital remaining:
        </p>
        <MathBlock>
          {`P_5 \\approx \\$10,505,000`}
        </MathBlock>
        <p className="mt-4 mb-3"><strong>Payout calculation:</strong></p>
        <MathBlock>
          {`\\text{Investment income} = \\$10,505,000 \\times 0.04 = \\$420,200`}
        </MathBlock>
        <p className="mt-2">
          With 2 more deaths this year (93 survivors):
        </p>
        <MathBlock>
          {`D_5 = \\frac{\\$420,200}{93} = \\$4,518 \\text{ per person}`}
        </MathBlock>
        <p className="mt-2 text-emerald-400">
          Payout increased 11.8% from Year 1!
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Year 20: The Acceleration</h3>

      <Example title="Year 20: Age 84 → 85">
        <p className="mb-3">Survivors: ~50 people (half the original group)</p>
        <p className="mb-3">
          Pool has grown significantly from accumulated mortality credits:
        </p>
        <MathBlock>
          {`P_{20} \\approx \\$15,875,000`}
        </MathBlock>
        <MathBlock>
          {`D_{20} = \\frac{\\$15,875,000 \\times 0.04}{50} = \\$12,700 \\text{ per person}`}
        </MathBlock>
        <p className="mt-2 text-emerald-400">
          Payout has tripled from the start!
        </p>
      </Example>

      <Callout type="warning" title="The Growth Pattern">
        <p>
          Payouts grow for two reasons:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li>Fewer survivors to share with (100 → 50)</li>
          <li>Pool grows from deceased members' capital remaining</li>
        </ol>
        <p className="mt-2">
          This creates exponentially growing payouts—a feature and a problem we'll address.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summary Table</h3>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Year</th>
              <th className="pb-2">Age</th>
              <th className="pb-2">Survivors</th>
              <th className="pb-2">Pool</th>
              <th className="pb-2">Payout</th>
              <th className="pb-2">Yield</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">1</td>
              <td className="py-2">66</td>
              <td className="py-2">99</td>
              <td className="py-2">$10.1M</td>
              <td className="py-2">$4,040</td>
              <td className="py-2">4.0%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">5</td>
              <td className="py-2">70</td>
              <td className="py-2">93</td>
              <td className="py-2">$10.7M</td>
              <td className="py-2">$4,518</td>
              <td className="py-2">4.5%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">10</td>
              <td className="py-2">75</td>
              <td className="py-2">82</td>
              <td className="py-2">$12.4M</td>
              <td className="py-2">$5,982</td>
              <td className="py-2">6.0%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">20</td>
              <td className="py-2">85</td>
              <td className="py-2">50</td>
              <td className="py-2">$15.9M</td>
              <td className="py-2">$12,700</td>
              <td className="py-2">12.7%</td>
            </tr>
            <tr>
              <td className="py-2">30</td>
              <td className="py-2">95</td>
              <td className="py-2">12</td>
              <td className="py-2">$14.4M</td>
              <td className="py-2">$48,000</td>
              <td className="py-2">48.0%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive Simulator</h3>

      <p className="mb-4">
        Run your own tontine simulation. Watch how survivors decrease, pool value changes,
        and payouts grow with mortality credits.
      </p>

      <TontineSimulator />

      <p className="text-dark-400 italic mt-8">
        Where does this extra yield come from? It's called the "mortality credit"—and
        understanding it is key to tontine mathematics.
      </p>
    </LessonLayout>
  );
}
