import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Integrated Retirement Portfolio</h2>

      <p className="mb-4">
        Tontines are powerful, but they're not the complete answer to retirement income.
        The optimal strategy combines multiple tools, each serving a distinct purpose.
        This is the "three-bucket" approach.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Three-Bucket Framework</h3>

      <p className="mb-4">
        Retirement income should be structured in layers, from most secure to most flexible:
      </p>

      <Definition title="Bucket 1: Guaranteed Floor (30-40% of portfolio)">
        <p className="mb-2">
          <strong>Purpose:</strong> Cover essential expenses with zero risk of depletion
        </p>
        <p className="mb-2"><strong>Sources:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Social Security benefits</li>
          <li>Traditional pension (if available)</li>
          <li>SPIA (Single Premium Immediate Annuity) for gap-filling</li>
        </ul>
        <p className="mt-2 text-emerald-400">
          <strong>Target:</strong> $25,000-$30,000/year to cover housing, food, utilities, basic healthcare
        </p>
      </Definition>

      <Definition title="Bucket 2: Longevity Pooling (40-50% of portfolio)">
        <p className="mb-2">
          <strong>Purpose:</strong> Efficient lifetime income with mortality credits
        </p>
        <p className="mb-2"><strong>Sources:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Tontine (natural or optimized)</li>
          <li>Group Self-Annuitization (GSA)</li>
          <li>Variable Payment Life Annuity (VPLA)</li>
        </ul>
        <p className="mt-2 text-emerald-400">
          <strong>Target:</strong> $10,000-$20,000/year initially, growing with mortality credits
        </p>
      </Definition>

      <Definition title="Bucket 3: Flexibility Reserve (20-30% of portfolio)">
        <p className="mb-2">
          <strong>Purpose:</strong> Liquidity for emergencies, opportunities, and legacy
        </p>
        <p className="mb-2"><strong>Sources:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Traditional investment portfolio (stocks/bonds)</li>
          <li>Cash reserves (1-2 years of expenses)</li>
          <li>Long-term care insurance</li>
          <li>Home equity (reverse mortgage option)</li>
        </ul>
        <p className="mt-2 text-emerald-400">
          <strong>Target:</strong> $100,000+ accessible for emergencies, large purchases, inheritance
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Example: $500,000 Portfolio</h3>

      <p className="mb-4">
        Let's allocate a $500,000 retirement portfolio across the three buckets:
      </p>

      <Example title="Portfolio Allocation">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Bucket</th>
              <th className="pb-2">Allocation</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Vehicle</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">1. Floor</td>
              <td className="py-2">30%</td>
              <td className="py-2">$150,000</td>
              <td className="py-2">SPIA + Social Security</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">2. Longevity</td>
              <td className="py-2">50%</td>
              <td className="py-2">$250,000</td>
              <td className="py-2">Natural Tontine</td>
            </tr>
            <tr>
              <td className="py-2">3. Flexibility</td>
              <td className="py-2">20%</td>
              <td className="py-2">$100,000</td>
              <td className="py-2">60/40 Portfolio + Cash</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Income Projections</h3>

      <p className="mb-4">
        Here's how the three buckets combine to produce lifetime income:
      </p>

      <Example title="Combined Income by Age">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Age</th>
              <th className="pb-2">Bucket 1</th>
              <th className="pb-2">Bucket 2</th>
              <th className="pb-2">Bucket 3</th>
              <th className="pb-2 font-semibold">Total</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">65</td>
              <td className="py-2">$28,000</td>
              <td className="py-2">$10,000</td>
              <td className="py-2">$5,000</td>
              <td className="py-2 text-emerald-400 font-semibold">$43,000</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">75</td>
              <td className="py-2">$28,000</td>
              <td className="py-2">$14,000</td>
              <td className="py-2">$5,000</td>
              <td className="py-2 text-emerald-400 font-semibold">$47,000</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">85</td>
              <td className="py-2">$28,000</td>
              <td className="py-2">$18,000</td>
              <td className="py-2">$4,000</td>
              <td className="py-2 text-emerald-400 font-semibold">$50,000</td>
            </tr>
            <tr>
              <td className="py-2">95</td>
              <td className="py-2">$28,000</td>
              <td className="py-2">$25,000</td>
              <td className="py-2">$10,000*</td>
              <td className="py-2 text-emerald-400 font-semibold">$63,000</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400 text-sm">
          *Bucket 3 drawdown increases in later years as emergency reserves can shrink
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mathematical Analysis</h3>

      <p className="mb-4">
        The total income at time <InlineMath>t</InlineMath> is:
      </p>

      <MathBlock>
        {`I_t = \\underbrace{SS_t + A_{\\text{SPIA}}}_{\\text{Bucket 1}} + \\underbrace{\\frac{W_0 \\cdot r + \\text{MC}_t}{n_t}}_{\\text{Bucket 2}} + \\underbrace{W_3 \\cdot w_t}_{\\text{Bucket 3}}`}
      </MathBlock>

      <p className="mt-4 mb-4">
        Where:
      </p>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li><InlineMath>SS_t</InlineMath> = Social Security at time <InlineMath>t</InlineMath></li>
        <li><InlineMath>A_{'\\text{SPIA}'}</InlineMath> = Annuity payment (fixed)</li>
        <li><InlineMath>{'\\text{MC}_t'}</InlineMath> = Mortality credits at time <InlineMath>t</InlineMath></li>
        <li><InlineMath>n_t</InlineMath> = Number of tontine survivors</li>
        <li><InlineMath>w_t</InlineMath> = Withdrawal rate from flexibility bucket</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Three Buckets?</h3>

      <Callout type="info" title="Risk Layering">
        <p>
          Each bucket handles a different type of risk:
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            <strong>Bucket 1</strong> eliminates longevity and market risk for essentials—you
            will never go hungry regardless of markets or lifespan.
          </li>
          <li>
            <strong>Bucket 2</strong> efficiently manages longevity risk through pooling—the
            tontine provides more income the longer you live.
          </li>
          <li>
            <strong>Bucket 3</strong> provides optionality—emergencies, opportunities, and
            the ability to leave something to heirs.
          </li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bucket 1 Sizing</h3>

      <Example title="Calculating the Guaranteed Floor">
        <div className="space-y-3">
          <p><strong>Step 1:</strong> List essential monthly expenses</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Housing (mortgage/rent, property tax, insurance): $1,200</li>
            <li>Food and household: $500</li>
            <li>Utilities: $200</li>
            <li>Healthcare (Medicare premiums, supplements): $400</li>
            <li>Transportation: $300</li>
          </ul>
          <p className="mt-3"><strong>Total essential expenses:</strong> $2,600/month = $31,200/year</p>
          <p className="mt-3"><strong>Step 2:</strong> Calculate guaranteed income</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Social Security: $20,000/year</li>
            <li>Gap to cover: $11,200/year</li>
          </ul>
          <p className="mt-3"><strong>Step 3:</strong> Size the SPIA</p>
          <p>At age 65, a $150,000 SPIA provides approximately $8,000/year.</p>
          <p className="text-amber-400 mt-2">
            Gap remains: $3,200/year—tontine income covers this and more.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Dynamic Allocation</h3>

      <p className="mb-4">
        The three-bucket approach isn't static. As you age, optimal allocation shifts:
      </p>

      <Example title="Allocation by Age">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Age</th>
              <th className="pb-2">Bucket 1</th>
              <th className="pb-2">Bucket 2</th>
              <th className="pb-2">Bucket 3</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">65</td>
              <td className="py-2">30%</td>
              <td className="py-2">50%</td>
              <td className="py-2">20%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">75</td>
              <td className="py-2">35%</td>
              <td className="py-2">50%</td>
              <td className="py-2">15%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">85</td>
              <td className="py-2">40%</td>
              <td className="py-2">50%</td>
              <td className="py-2">10%</td>
            </tr>
            <tr>
              <td className="py-2">95</td>
              <td className="py-2">45%</td>
              <td className="py-2">50%</td>
              <td className="py-2">5%</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          As flexibility needs decline (less travel, simpler lifestyle, smaller emergency buffer
          needed), guaranteed floor becomes more important.
        </p>
      </Example>

      <Callout type="success" title="The Integrated Advantage">
        <p>
          By combining guaranteed income (Bucket 1), mortality-pooled income (Bucket 2), and
          flexible assets (Bucket 3), retirees can:
        </p>
        <ul className="mt-2 space-y-1">
          <li>Never worry about essential expenses</li>
          <li>Benefit from longevity if they live long</li>
          <li>Handle emergencies and leave a legacy</li>
          <li>Optimize total lifetime utility</li>
        </ul>
      </Callout>

      <p className="text-dark-400 italic">
        We've now covered the complete tontine landscape—from 17th-century origins to modern
        portfolio integration. In our final section, let's look ahead to the future of tontines.
      </p>
    </LessonLayout>
  );
}
