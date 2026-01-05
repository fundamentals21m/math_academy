import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing originary interest
function OriginaryInterestDemo() {
  const [timePreference, setTimePreference] = useState(5);
  const [riskPremium, setRiskPremium] = useState(2);
  const [entrepreneurialComponent, setEntrepreneurialComponent] = useState(3);

  const originaryInterest = timePreference;
  const grossMarketRate = timePreference + riskPremium + entrepreneurialComponent;

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Components of the Interest Rate</h4>
      <p className="text-dark-400 text-sm mb-4">
        Adjust each component to see how the gross market rate of interest is determined.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Originary Interest (Time Preference): {timePreference}%
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={timePreference}
            onChange={(e) => setTimePreference(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Risk Premium: {riskPremium}%
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={riskPremium}
            onChange={(e) => setRiskPremium(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Entrepreneurial Component: {entrepreneurialComponent}%
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={entrepreneurialComponent}
            onChange={(e) => setEntrepreneurialComponent(Number(e.target.value))}
            className="w-full accent-green-500"
          />
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-center flex-1">
            <span className="text-dark-400 text-xs block">Originary Interest</span>
            <span className="text-xl font-bold text-amber-400">{originaryInterest}%</span>
          </div>
          <span className="text-dark-400">+</span>
          <div className="text-center flex-1">
            <span className="text-dark-400 text-xs block">Risk Premium</span>
            <span className="text-xl font-bold text-blue-400">{riskPremium}%</span>
          </div>
          <span className="text-dark-400">+</span>
          <div className="text-center flex-1">
            <span className="text-dark-400 text-xs block">Entrepreneurial</span>
            <span className="text-xl font-bold text-green-400">{entrepreneurialComponent}%</span>
          </div>
          <span className="text-dark-400">=</span>
          <div className="text-center flex-1">
            <span className="text-dark-400 text-xs block">Gross Market Rate</span>
            <span className="text-2xl font-bold text-white">{grossMarketRate}%</span>
          </div>
        </div>
        <p className="text-dark-400 text-xs text-center">
          Only the originary interest component reflects pure time preference. The other components
          compensate for risk and uncertainty.
        </p>
      </div>
    </div>
  );
}

// Present value calculation demo
function PresentValueDemo() {
  const [futureValue, setFutureValue] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [years, setYears] = useState(5);

  const presentValue = futureValue / Math.pow(1 + interestRate / 100, years);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Present Value Calculation</h4>
      <p className="text-dark-400 text-sm mb-4">
        What is a future sum worth today? Adjust the parameters to see.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Future Value: ${futureValue}
          </label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={futureValue}
            onChange={(e) => setFutureValue(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Interest Rate: {interestRate}%
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm block mb-2">
            Years: {years}
          </label>
          <input
            type="range"
            min="1"
            max="30"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
      </div>

      <div className="bg-dark-900 rounded-lg p-4 text-center">
        <span className="text-dark-400 text-sm block mb-2">
          ${futureValue} received in {years} years at {interestRate}% interest
        </span>
        <span className="text-dark-400 text-sm">is worth today:</span>
        <div className="text-3xl font-bold text-amber-400 mt-2">
          ${presentValue.toFixed(2)}
        </div>
        <p className="text-dark-400 text-xs mt-2">
          This is the discounted present value—the amount that, if invested today at {interestRate}%,
          would grow to ${futureValue} in {years} years.
        </p>
      </div>
    </div>
  );
}

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <div className="prose prose-invert max-w-none">
        {/* Introduction */}
        <h2 className="text-3xl font-bold text-dark-100 mb-6">
          XIX. Interest
        </h2>

        <p className="text-dark-300 text-lg leading-relaxed mb-6">
          Interest is one of the most misunderstood phenomena in economics. Many theories
          have been proposed to explain it—exploitation, productivity, abstinence—but only
          the time-preference theory provides a satisfactory explanation. Interest arises
          from the universal human preference for present goods over future goods, and it
          would exist even in a world of perfect certainty and no exploitation.
        </p>

        {/* The Phenomenon of Interest */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          1. The Phenomenon of Interest
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Interest is the ratio of the value assigned to present goods compared to that
          assigned to future goods of the same kind and quantity. It manifests itself
          everywhere in the economy, not just in loan markets. Whenever present and future
          goods are compared—in saving decisions, in investment calculations, in the pricing
          of capital goods—interest appears.
        </p>

        <Callout type="info" title="Interest Is Universal">
          Interest is not unique to capitalist economies or monetary systems. It is a
          universal phenomenon arising from time preference. Even Robinson Crusoe, alone
          on his island with no money and no capitalists, would have to deal with interest
          when deciding whether to devote time to present consumption or future-oriented
          production.
        </Callout>

        <p className="text-dark-300 leading-relaxed mb-4">
          The market rate of interest is the price paid for the earlier availability of
          goods. Lenders sacrifice present consumption and must be compensated. Borrowers
          gain earlier availability and pay for this advantage. The rate at which present
          and future goods exchange against each other reflects the time preferences of
          all market participants.
        </p>

        {/* Originary Interest */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          2. Originary Interest
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          <em>Originary interest</em> is the pure expression of time preference—the discount
          applied to future goods compared to present goods, abstracted from all other
          considerations. In the real world, market interest rates include additional
          components, but originary interest is the irreducible core.
        </p>

        <Callout type="warning" title="Not a Reward for Saving">
          Interest is not a reward for saving or for "abstinence." It is not a payment for
          services rendered. Interest reflects the inescapable fact that present goods are
          valued more highly than future goods. This valuation difference would exist even
          if saving required no sacrifice at all.
        </Callout>

        <p className="text-dark-300 leading-relaxed mb-4">
          Originary interest cannot be zero or negative. A zero or negative rate would mean
          that people value future goods as much as or more than present goods, which
          contradicts the very nature of action. If people did not prefer earlier to later
          satisfaction, they would never begin to act—they would always postpone.
        </p>

        <CardGrid>
          <Card title="What Originary Interest IS" className="bg-dark-800">
            <ul className="text-dark-300 text-sm space-y-2">
              <li>• The discount rate applied to future goods</li>
              <li>• A ratio, not an absolute amount</li>
              <li>• Determined by time preference</li>
              <li>• Universal and unavoidable</li>
              <li>• Positive in all circumstances</li>
            </ul>
          </Card>
          <Card title="What Originary Interest IS NOT" className="bg-dark-800">
            <ul className="text-dark-300 text-sm space-y-2">
              <li>• A reward for abstinence or waiting</li>
              <li>• The productivity of capital</li>
              <li>• A result of exploitation</li>
              <li>• A monetary phenomenon only</li>
              <li>• Something that can be eliminated</li>
            </ul>
          </Card>
        </CardGrid>

        {/* Height of Interest Rates */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          3. The Height of Interest Rates
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The height of the originary interest rate depends on the time preferences of all
          individuals in the market. Where time preference is high (people strongly prefer
          present consumption), interest rates are high. Where time preference is low
          (people are more willing to postpone consumption), interest rates are low.
        </p>

        <OriginaryInterestDemo />

        <p className="text-dark-300 leading-relaxed mb-4">
          The gross market rate of interest, as observed in actual loan markets, includes
          several components beyond originary interest:
        </p>

        <ul className="list-disc list-inside text-dark-300 space-y-3 mb-6">
          <li>
            <strong>Originary Interest:</strong> The pure time-preference component that
            would exist even in a world of perfect certainty.
          </li>
          <li>
            <strong>Risk Premium:</strong> Compensation for the possibility that the
            borrower will not repay (default risk).
          </li>
          <li>
            <strong>Entrepreneurial Component:</strong> Compensation for uncertainty about
            future purchasing power and economic conditions.
          </li>
          <li>
            <strong>Price Premium:</strong> Adjustment for expected changes in the purchasing
            power of money (inflation premium).
          </li>
        </ul>

        {/* Originary Interest in the Changing Economy */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          4. Originary Interest in the Changing Economy
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          In the evenly rotating economy—an imaginary construction where all conditions
          remain unchanged—originary interest would be the only component of the interest
          rate. But the real economy is always changing, and these changes affect market
          interest rates in complex ways.
        </p>

        <Callout type="info" title="The Evenly Rotating Economy">
          The "evenly rotating economy" is a thought experiment in which all economic
          conditions repeat themselves identically period after period. There is no
          uncertainty, no change, and no entrepreneurial profit or loss. In this imaginary
          construction, the market rate of interest would equal pure originary interest.
        </Callout>

        <p className="text-dark-300 leading-relaxed mb-4">
          In reality, market interest rates fluctuate as conditions change. Changes in the
          money supply, expectations about inflation, perceptions of risk, and shifts in
          time preference all affect the observable market rate. The economist's task is
          to disentangle these various influences.
        </p>

        {/* Computation of Interest */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          5. The Computation of Interest
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Interest calculations permeate all economic decision-making. The present value
          of any future sum depends on the interest rate used to discount it. This is why
          changes in interest rates have such far-reaching effects throughout the economy.
        </p>

        <PresentValueDemo />

        <CardGrid>
          <Card title="Capital Valuation" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              The value of a capital good equals the discounted present value of its
              expected future services. Higher interest rates mean lower capital values;
              lower interest rates mean higher capital values. This is why interest rate
              changes affect investment decisions so profoundly.
            </p>
          </Card>
          <Card title="Investment Decisions" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              Entrepreneurs compare the cost of investment with the discounted present
              value of expected returns. Projects profitable at low interest rates become
              unprofitable when rates rise. The interest rate thus serves as a crucial
              signal coordinating production across time.
            </p>
          </Card>
        </CardGrid>

        {/* Interest and Entrepreneurial Profit */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          6. Interest and Entrepreneurial Profit
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Interest and entrepreneurial profit are distinct phenomena, though they are often
          confused. Interest arises from time preference and exists even in a hypothetical
          world of perfect foresight. Profit arises from uncertainty and the ability of some
          entrepreneurs to anticipate future conditions better than others.
        </p>

        <CardGrid>
          <Card title="Interest" className="bg-dark-800">
            <p className="text-dark-300 text-sm mb-3">
              Arises from time preference. Would exist even in a world of perfect certainty.
              Always positive. Determined by the market's aggregate time preference.
            </p>
            <p className="text-amber-400 text-sm font-medium">
              Example: The return on a perfectly secure loan
            </p>
          </Card>
          <Card title="Entrepreneurial Profit" className="bg-dark-800">
            <p className="text-dark-300 text-sm mb-3">
              Arises from uncertainty. Can be positive (profit) or negative (loss).
              Rewards successful anticipation of future conditions. Tends toward zero
              in equilibrium.
            </p>
            <p className="text-amber-400 text-sm font-medium">
              Example: Gains from correctly predicting consumer demand
            </p>
          </Card>
        </CardGrid>

        <Callout type="warning" title="Distinguishing Interest from Profit">
          In accounting, interest and profit are often combined. But economically they are
          distinct. An entrepreneur's return includes both interest on the capital employed
          (which would be earned even if the outcome were certain) and entrepreneurial
          profit or loss (which arises from uncertainty and foresight).
        </Callout>

        {/* Summary */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          Summary: The Nature and Role of Interest
        </h3>

        <div className="bg-dark-800 rounded-lg p-6 mb-6">
          <ul className="space-y-3 text-dark-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">1.</span>
              <span>
                Interest is the ratio expressing the discount applied to future goods
                compared to present goods, arising from universal time preference.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">2.</span>
              <span>
                Originary interest is the pure time-preference component that would exist
                even in a world of perfect certainty. It cannot be zero or negative.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">3.</span>
              <span>
                The gross market rate of interest includes originary interest plus risk
                premiums, entrepreneurial components, and price premiums.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">4.</span>
              <span>
                Interest rates serve as crucial signals coordinating production across time,
                affecting capital valuation and investment decisions throughout the economy.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">5.</span>
              <span>
                Interest (from time preference) and entrepreneurial profit (from uncertainty
                and foresight) are economically distinct, though often combined in accounting.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}
