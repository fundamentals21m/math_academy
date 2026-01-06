import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        While Bitcoin makes an excellent long-term savings vehicle, it presents
        significant challenges for <strong className="text-amber-400">short-term
        cash management</strong>. Whether for individuals or businesses, maintaining
        short-term cash balances in Bitcoin is ill-advised due to its volatility.
      </p>

      {/* Section 1: The Cash Balance Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Cash Balance Problem</h2>

      <p className="my-4">
        Even Bitcoin-only businesses acknowledge the necessity of holding fiat
        currency to navigate the uncertainties of daily operations. Consider
        these scenarios:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Payroll</h4>
          <p className="text-sm text-dark-300">
            Employees need stable compensation. A 30% price swing between
            paychecks creates unacceptable uncertainty.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Vendor Payments</h4>
          <p className="text-sm text-dark-300">
            Suppliers price in fiat. Bitcoin volatility could turn a profitable
            purchase into a loss by payment time.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Tax Obligations</h4>
          <p className="text-sm text-dark-300">
            Governments require fiat. Bitcoin price drops before tax deadlines
            could create liquidity crises.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Emergency Reserves</h4>
          <p className="text-sm text-dark-300">
            Unexpected expenses need stable value. You can't risk your emergency
            fund losing 50% overnight.
          </p>
        </Card>
      </CardGrid>

      {/* Section 2: The Volatility Reality */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Volatility Reality</h2>

      <p className="my-4">
        Bitcoin's volatility is not a bug—it's a feature of the monetization process.
        As capital flows into an asset with fixed supply, prices naturally swing
        dramatically as the market discovers fair value.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Historical Volatility</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-amber-400">-83%</p>
            <p className="text-sm text-dark-400">2011 crash</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-400">-87%</p>
            <p className="text-sm text-dark-400">2013-2015</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-400">-84%</p>
            <p className="text-sm text-dark-400">2017-2018</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-400">-77%</p>
            <p className="text-sm text-dark-400">2021-2022</p>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>Stay humble:</strong> While "stack sats" captures the accumulation
          strategy, "stay humble" reminds us that nobody can confidently predict
          Bitcoin's price behavior over the short term. Volatility humbles even
          the most ardent believers.
        </p>
      </Callout>

      {/* Section 3: The Fiat Dependency */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Fiat Dependency</h2>

      <p className="my-4">
        This volatility creates an uncomfortable reality: even the most committed
        Bitcoiners typically need to maintain fiat currency positions for:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600/20 text-red-400 rounded-full text-sm font-bold shrink-0">!</span>
          <div>
            <p className="font-semibold text-dark-100">Operating Capital</p>
            <p className="text-sm text-dark-400 mt-1">
              Day-to-day business operations require predictable value
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600/20 text-red-400 rounded-full text-sm font-bold shrink-0">!</span>
          <div>
            <p className="font-semibold text-dark-100">Margin of Safety</p>
            <p className="text-sm text-dark-400 mt-1">
              Buffer against unexpected expenses that can't wait for price recovery
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600/20 text-red-400 rounded-full text-sm font-bold shrink-0">!</span>
          <div>
            <p className="font-semibold text-dark-100">Regulatory Compliance</p>
            <p className="text-sm text-dark-400 mt-1">
              Many obligations must be settled in government-issued currency
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: The Opportunity */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. The Opportunity</h2>

      <p className="my-4">
        This paper explores a counterintuitive possibility: what if Bitcoin's
        very properties that create volatility could be harnessed to create
        <strong className="text-amber-400"> stable dollar-denominated returns</strong>?
      </p>

      <p className="my-4">
        The key insight is that Bitcoin's superior monetary policy—which drives
        its long-term appreciation—also creates opportunities in derivatives
        markets that can be exploited for short-term cash management.
      </p>

      <Callout type="success">
        <p>
          <strong>Coming up:</strong> We'll explore how to construct a deposit
          facility that maintains dollar stability while leveraging Bitcoin's
          unique properties to generate positive real yields.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Bitcoin's <strong>volatility</strong> makes it unsuitable for
              direct short-term cash management.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Even Bitcoin-focused businesses need <strong>fiat reserves</strong>
              for operations and emergencies.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              This creates a <strong>dependency on fiat systems</strong> that
              contradicts Bitcoin's ethos.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The solution may lie in <strong>derivatives strategies</strong>
              that harness Bitcoin's properties for stability.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
