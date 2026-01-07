import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { InflationCalculator } from '../../components/visualizations';

// Bitcoin supply comparison
const supplyComparison = [
  { asset: 'Gold', annualInflation: '~1.5%', notes: 'Continues indefinitely' },
  { asset: 'Bitcoin (current)', annualInflation: '~0.8%', notes: 'Halves every 4 years' },
  { asset: 'Bitcoin (2140+)', annualInflation: '0%', notes: 'Fixed supply forever' },
];

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        An important feature that makes it unintuitive for both individuals and institutions
        to integrate bitcoin into their financial landscapes is its <strong className="text-orange-400">deflationary nature</strong>,
        or at least highly disinflationary design. Bitcoin is the largest fixed-supply asset on Earth,
        programmed by its immutable protocol to cap out at 21 million whole units.
      </p>

      {/* Bitcoin's Fixed Supply */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The World's Largest Fixed-Supply Asset</h2>

      <p className="my-4">
        As of September 2025, bitcoin had a market capitalization of over $2 trillion, making it
        the fifth-largest asset in the world behind a handful of stocks and gold. Of the 21 million
        bitcoin that will ever exist, <strong className="text-orange-400">95% has already been issued</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Current Mining Issuance</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-dark-200">3.125 BTC</p>
            <p className="text-sm text-dark-400">per block (~10 min)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-dark-200">450 BTC</p>
            <p className="text-sm text-dark-400">per day</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-dark-200">~165,000 BTC</p>
            <p className="text-sm text-dark-400">per year</p>
          </div>
        </div>
      </div>

      {/* Supply Comparison Table */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Less Inflationary Than Gold</h2>

      <p className="my-4">
        While gold is thought to be the least inflationary asset, with an annual increase in supply
        of approximately 1.5%, bitcoin's supply is currently inflating at half that rate. This issuance
        will continue to halve every four years until 2140, after which there will be no new bitcoin issued.
      </p>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Asset</th>
              <th className="px-4 py-3 text-left text-orange-400">Annual Inflation</th>
              <th className="px-4 py-3 text-left text-orange-400">Notes</th>
            </tr>
          </thead>
          <tbody>
            {supplyComparison.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200 font-medium">{item.asset}</td>
                <td className="px-4 py-3 text-dark-300">{item.annualInflation}</td>
                <td className="px-4 py-3 text-dark-400">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="info">
        <p>
          Bitcoin is already less inflationary than gold, and will eventually add no new stock
          to the world's supply. When inserted into a monetary landscape of vastly inflationary
          monies like fiat currencies, stocks, bonds, and real estate, the supply-capped bitcoin
          will continue to <strong>absorb the monetary energy</strong> of its peers.
        </p>
      </Callout>

      {/* The Problem for Institutions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Deflation is a Problem for Institutions</h2>

      <p className="my-4">
        Unlike annuity programs that provide for Cost of Living Adjustments (COLAs) by increasing
        annual payments, participants on the Bitcoin network will generally follow its reward schedule
        and require lower amounts over time. But why would this be an issue for institutions?
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Time Value of Money</h4>
          <p className="text-sm text-dark-300">
            Deflation (or even the lack of inflation) is a foreign concept. Every accountant
            emphasizes Present Value as the common way to view streams of cash flows.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Hidden Debasement</h4>
          <p className="text-sm text-dark-300">
            US dollars are being devalued in purchasing power by inflationary forces. Even at
            "2-3% CPI," $1,000 in ten years has a purchasing power of only ~$800.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Present Value Illusion</h4>
          <p className="text-sm text-dark-300">
            Using Present Value as a benchmark masks the debasement of expected future payoffs
            and colors the incentives of debt issuers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Counterparty Risk</h4>
          <p className="text-sm text-dark-300">
            Traditional valuation methods hide the significant counterparty risk that comes
            with debt-based financial instruments.
          </p>
        </Card>
      </CardGrid>

      {/* Bitcoin vs Dollar Payoffs */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bitcoin Payoffs vs. Dollar Payoffs</h2>

      <p className="my-4">
        The discussion becomes clear when one compares a future payoff payable in bitcoin with
        a future payoff payable in US dollars (or a comparable fiat currency).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-red-600/30">
          <h4 className="font-semibold text-red-400 mb-3">$1,000 USD in 10 Years</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>Present Value at 10%: ~$375</li>
            <li>Purchasing power eroded by inflation</li>
            <li>Real value: significantly less than $375</li>
            <li>Subject to further currency debasements</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-green-600/30">
          <h4 className="font-semibold text-green-400 mb-3">0.01 BTC in 10 Years</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>At least retains purchasing power</li>
            <li>Three halvings = doubles 3x against USD</li>
            <li>Expected Future Value: ~$8,000 USD</li>
            <li>No central issuer to debase it</li>
          </ul>
        </div>
      </div>

      <Callout type="warning">
        <p>
          It is unacceptable to view a bitcoin payoff today as worth anything less than its
          current USD equivalent on an apples-to-apples basis with a fiat-denominated bond.
          These estimates assume no further currency debasements, which is a highly unreasonable assumption.
        </p>
      </Callout>

      {/* Interactive Visualization */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Interactive: Cash vs Bitcoin Over Time</h2>

      <p className="my-4">
        Use the simulator below to see how cash loses purchasing power while bitcoin appreciates.
        Adjust the inflation rate and time horizon to see the compounding effects.
      </p>

      <InflationCalculator className="my-8" />

      {/* The Shift from Present Value to Future Value */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">From Present Value to Future Value</h2>

      <p className="my-4">
        In order for individuals and institutions to utilize bitcoin intelligently, they will need
        different optics from those they use today, since bitcoin's primary use case is to protect
        purchasing power.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Required Pivot</h4>
        <p className="text-dark-200 text-lg mb-4">
          The contrast in purchasing power will require institutions to focus more on
          <strong className="text-orange-400"> Future Value</strong> as opposed to Present Value.
        </p>
        <p className="text-dark-400 text-sm">
          This pivot will be much more intuitive for individuals to adopt than institutions.
          Institutions will need to understand the time and risk preferences of individuals,
          and how bitcoin is already reshaping them.
        </p>
      </div>

      <p className="my-4">
        All companies need to understand the impact of bitcoin on the value systems of individuals
        to continue offering competitive compensation to their employees. Once these dynamics are
        understood, we can then begin to look at how institutions can use their balance sheets to
        offer financial services to either retail individuals or other institutions.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Bitcoin is the largest fixed-supply asset on Earth</strong> with 21 million
              units capped by immutable protocol, 95% already issued.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Bitcoin is already less inflationary than gold</strong> at ~0.8% annual
              supply increase, halving every four years until 0% in 2140.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Present Value masks debasement</strong>—traditional financial valuation
              hides the erosion of purchasing power in fiat currencies.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Institutions must shift to Future Value thinking</strong> to properly
              understand bitcoin's role in protecting purchasing power.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>Companies must understand bitcoin's impact on individuals</strong> to
              offer competitive compensation and financial services.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
