import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// BlackRock ETF comparison
const etfComparison = [
  { etf: 'IBIT (BlackRock)', aum: '$50B+', custodian: 'Coinbase', note: 'Largest bitcoin ETF by AUM' },
  { etf: 'FBTC (Fidelity)', aum: '$20B+', custodian: 'In-house', note: 'Self-custody advantage' },
  { etf: 'GBTC (Grayscale)', aum: '$15B+', custodian: 'Coinbase', note: 'Original bitcoin trust' },
  { etf: 'BITB (Bitwise)', aum: '$4B+', custodian: 'Coinbase', note: 'Transparent addresses' },
];

// 2022 crisis events
const crisisEvents = [
  { event: 'Fed Rate Rises', impact: 'Long-duration bonds lost 30-50% of value', year: '2022' },
  { event: 'UK Gilt Crisis', impact: 'Bank of England emergency bailout required', year: 'Sept 2022' },
  { event: 'US Bank Failures', impact: 'Five major banks failed (SVB, Signature, etc.)', year: '2023' },
];

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Opening */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The world came to the realization that there does not exist a risk-free asset,
        and at the same time, they would grapple with the question of where bitcoin
        belongs in an investment portfolio."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Brian Hirschfield, Bitcoin for Institutions
        </footer>
      </blockquote>

      <p className="text-lg text-dark-300 mb-6">
        BlackRock was the largest investment manager of pension schemes utilizing a strategy
        called "Liability Driven Investments" (LDI). Understanding their history with LDI
        is crucial to understanding why they pivoted so dramatically to bitcoin - and why
        they may be <strong className="text-orange-400">the most important institution for
        bitcoin adoption</strong>.
      </p>

      {/* What is LDI */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Understanding Liability Driven Investing (LDI)</h2>

      <p className="my-4">
        The idea behind LDI is that the return on pension assets isn't as important as the
        return <strong className="text-orange-400">relative to the liability</strong>. If the
        S&P 500 goes down by 20%, but your investment manager only goes down by 19%, they
        would be lauded as heroes - even though the plan now has a large hole to fill.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The LDI Logic</h4>
        <p className="text-dark-200 mb-4">
          If interest rates decrease by 100 basis points, pension liabilities increase by
          around 12%. So the plan should want either an investment or a hedge that pays
          off that 12%.
        </p>
        <p className="text-dark-400 text-sm">
          The author was personally advising plans on this strategy in 2004. While it never
          caught much traction in the US, it was widely used in the UK.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>The Great Bond Bull Market:</strong> Long-duration bonds were one of the
          greatest-performing asset classes from 2004 through 2022. Rates went straight
          down, and if you forgot they were tracking a liability, you might confuse pension
          assets with gains available for company operations.
        </p>
      </Callout>

      {/* The Leverage Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Dangerous Leverage</h2>

      <p className="my-4">
        A paper by Theo Mogonet, "Orange is the New Green", suggests that companies were
        accessing their gains without selling assets by <strong className="text-orange-400">borrowing
        against them</strong>. Companies essentially posted bonds with unrealized gains as
        collateral for loans to fund operations.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/30 my-6">
        <h4 className="font-semibold text-red-400 mb-3">The Time Bomb</h4>
        <p className="text-dark-200 mb-4">
          This practice took place without incident as long as interest rates continued to
          decrease or stay the same. But if rates change direction, the collateral backing
          the pension sponsor's loans decreases in value.
        </p>
        <p className="text-dark-300 text-sm">
          If the decrease is severe enough, they might be forced to liquidate assets to
          unlock gains to pay off the loan - just like margin calls in personal investing.
        </p>
      </div>

      {/* The 2022 Crisis */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The 2022 Crisis: "Risk-Free" Becomes Risky</h2>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Event</th>
              <th className="px-4 py-3 text-left text-orange-400">Impact</th>
              <th className="px-4 py-3 text-left text-orange-400">Year</th>
            </tr>
          </thead>
          <tbody>
            {crisisEvents.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200">{item.event}</td>
                <td className="px-4 py-3 text-dark-300">{item.impact}</td>
                <td className="px-4 py-3 text-orange-400">{item.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Devastating Revelation:</strong> The structural underpinning of
          virtually every investment portfolio in the world is the idea of a "risk-free
          asset" and high-quality government bonds. This was devastated in 2022 because
          those "risk-free" assets performed horribly.
        </p>
      </Callout>

      {/* Modern Portfolio Theory Shattered */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Modern Portfolio Theory Shattered</h2>

      <p className="my-4">
        The Capital Asset Pricing Model (CAPM) and Modern Portfolio Theory are built on
        a foundation of a risk-free asset. The concept is extremely intuitive: start with
        the option that achieves your objectives without taking any risk, then add riskier
        assets for higher returns.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Old Paradigm</h4>
          <p className="text-sm text-dark-300">
            Start with risk-free government bonds, then add stocks and other assets along
            the "efficient frontier" to optimize risk-adjusted returns.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The 2022 Reality</h4>
          <p className="text-sm text-dark-300">
            "Risk-free" assets lost 30-50% of value. The foundation of portfolio construction
            was revealed to be an illusion.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Question</h4>
          <p className="text-sm text-dark-300">
            If there's no risk-free asset, where does bitcoin belong in an investment
            portfolio? This is what BlackRock had to grapple with.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Answer</h4>
          <p className="text-sm text-dark-300">
            Bitcoin may be the new foundation - not risk-free, but with different risks
            than traditional assets and superior long-term returns.
          </p>
        </Card>
      </CardGrid>

      {/* BlackRock's Pivot */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">BlackRock's Pivot to Bitcoin</h2>

      <p className="my-4">
        Larry Fink famously called bitcoin "only useful to money launderers." Yet in 2023,
        BlackRock filed for a spot bitcoin ETF and has become one of bitcoin's most
        significant institutional advocates. What changed?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The IBIT Success Story</h4>
        <div className="space-y-3">
          <p className="text-dark-200">
            <strong>Launch Date:</strong> January 2024
          </p>
          <p className="text-dark-200">
            <strong>Assets Under Management:</strong> $50+ billion in first year
          </p>
          <p className="text-dark-200">
            <strong>Record Breaking:</strong> Fastest ETF to reach $10B, $20B, $30B, $40B, $50B AUM
          </p>
          <p className="text-dark-200">
            <strong>Significance:</strong> Validated bitcoin as an institutional asset class
          </p>
        </div>
      </div>

      {/* ETF Comparison */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bitcoin ETF Landscape</h2>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">ETF</th>
              <th className="px-4 py-3 text-left text-orange-400">AUM</th>
              <th className="px-4 py-3 text-left text-orange-400">Custodian</th>
              <th className="px-4 py-3 text-left text-orange-400">Note</th>
            </tr>
          </thead>
          <tbody>
            {etfComparison.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200 font-medium">{item.etf}</td>
                <td className="px-4 py-3 text-orange-400">{item.aum}</td>
                <td className="px-4 py-3 text-dark-300">{item.custodian}</td>
                <td className="px-4 py-3 text-dark-400">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The BlackRock Effect */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The BlackRock Effect</h2>

      <p className="my-4">
        BlackRock's entrance into bitcoin is significant not just because of IBIT, but
        because of what they will do next: <strong className="text-orange-400">integrating
        bitcoin into their mutual fund complex</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">Target Date Funds</h4>
          <p className="text-dark-300 text-sm">
            BlackRock manages trillions in target date funds for 401(k)s. Adding even
            1-2% bitcoin allocation would create massive demand.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">Passive Exposure</h4>
          <p className="text-dark-300 text-sm">
            Investors might get bitcoin exposure without explicitly knowing it - which
            is likely what it will take for mass adoption.
          </p>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The Ultimate Trojan Horse:</strong> BlackRock's mutual fund complex is
          the vehicle that finally brings institutional bitcoin exposure to pensions and
          retirement accounts - by making it indirect and almost invisible.
        </p>
      </Callout>

      {/* Redefining Portfolio Construction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Redefining Portfolio Construction</h2>

      <p className="my-4">
        BlackRock's research has suggested that a small allocation to bitcoin (1-5%)
        can significantly improve portfolio risk-adjusted returns due to bitcoin's
        low correlation with traditional assets.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The New Efficient Frontier</h4>
        <p className="text-dark-200 mb-4">
          With bonds no longer "risk-free," portfolio construction must be rethought.
          Bitcoin offers:
        </p>
        <ul className="text-dark-300 space-y-2">
          <li>• Low correlation to stocks and bonds</li>
          <li>• Superior long-term returns (historically)</li>
          <li>• Inflation hedge properties</li>
          <li>• 24/7 liquidity</li>
          <li>• No counterparty risk in self-custody</li>
        </ul>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>LDI strategies failed spectacularly</strong> when rates reversed
              in 2022, requiring Bank of England emergency intervention.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>"Risk-free" assets proved to be an illusion</strong> - government
              bonds lost 30-50% of value, shattering Modern Portfolio Theory.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>BlackRock pivoted dramatically</strong> from calling bitcoin
              "only useful to money launderers" to launching the largest bitcoin ETF.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>IBIT broke every ETF record</strong> - fastest to $10B, $20B, $30B,
              $40B, and $50B in assets under management.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>The mutual fund integration</strong> will be the Trojan horse
              that brings bitcoin to retirement accounts worldwide.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
