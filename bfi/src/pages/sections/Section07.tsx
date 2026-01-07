import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { TreasuryGrowthSimulator } from '../../components/visualizations';

// Strategy bitcoin acquisition timeline
const strategyTimeline = [
  { date: 'August 2020', action: 'Initial $250M purchase', btc: '~21,000 BTC', price: '~$11,900' },
  { date: '2020-2021', action: 'Aggressive accumulation', btc: '~125,000 BTC', price: '$10K-$60K range' },
  { date: '2022-2023', action: 'Continued buying through bear market', btc: '~190,000 BTC', price: '$16K-$30K range' },
  { date: '2024-2025', action: 'Leveraged purchases via convertible debt', btc: '~500,000+ BTC', price: '$60K-$100K range' },
];

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Opening */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "He described bitcoin as a 'dependable store of value and an attractive investment
        asset with more long-term appreciation potential than holding cash.'"
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — MicroStrategy Press Release, August 2020
        </footer>
      </blockquote>

      <p className="text-lg text-dark-300 mb-6">
        MicroStrategy (now simply "Strategy") is the one success story of an institution
        doing corporate bitcoin right. While the previous chapters explained why institutions
        generally can't hold bitcoin, Strategy demonstrates that <strong className="text-orange-400">it
        takes an individual to make it happen</strong>.
      </p>

      {/* The Man Behind Strategy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Michael Saylor: An Unlikely Bitcoin Champion</h2>

      <p className="my-4">
        Michael Saylor is the founder and chairman of Strategy. He is an MIT-trained engineer
        who founded the company with a $250,000 grant from DuPont. He would seem to be the
        unlikeliest of characters to lead the world in buying bitcoin.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Saylor's Contribution to Bitcoin</h4>
        <p className="text-dark-200">
          As an engineer, Saylor explained the properties of bitcoin from an engineering
          perspective in a way that is likely responsible for levelling up the understanding
          of bitcoin from <strong>"Magic Internet Money"</strong> to <strong className="text-orange-400">"Thermodynamically
          Sound Digital Real Estate."</strong>
        </p>
      </div>

      {/* The $250 Million Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The $250 Million Problem</h2>

      <p className="my-4">
        Saylor's worldview was simple. He had a $250 million pile of cash in 2020 and was
        looking at an epic monetary debasement of Western fiat currencies. The US was on its
        way to printing $7 trillion over an M2 monetary base of $15 trillion.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Debasement</h4>
          <p className="text-sm text-dark-300">
            $7 trillion printed over $15 trillion M2 base - nearly a 50% expansion of the
            money supply in a short period.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Complacency</h4>
          <p className="text-sm text-dark-300">
            Western cash holders were caught off guard, lulled into complacency by fifteen
            years of gaslighting about how printing money isn't inflationary.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Decision</h4>
          <p className="text-sm text-dark-300">
            Saylor drew the line and refused to allow the US government to debase his
            company's cash and cash equivalents.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Action</h4>
          <p className="text-sm text-dark-300">
            In August 2020, he converted $250 million into approximately 21,000 bitcoin.
            The rest is monetary history.
          </p>
        </Card>
      </CardGrid>

      {/* The Strategy Timeline */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Strategy's Bitcoin Accumulation</h2>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Date</th>
              <th className="px-4 py-3 text-left text-orange-400">Action</th>
              <th className="px-4 py-3 text-left text-orange-400">Holdings</th>
              <th className="px-4 py-3 text-left text-orange-400">Price Range</th>
            </tr>
          </thead>
          <tbody>
            {strategyTimeline.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200">{item.date}</td>
                <td className="px-4 py-3 text-dark-300">{item.action}</td>
                <td className="px-4 py-3 text-orange-400 font-semibold">{item.btc}</td>
                <td className="px-4 py-3 text-dark-400">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="info">
        <p>
          <strong>Market Cap Explosion:</strong> Strategy's market capitalization has grown
          from approximately $1 billion to nearly $100 billion, driven primarily by their
          bitcoin holdings. They await S&P 500 entry despite meeting the criteria.
        </p>
      </Callout>

      {/* Interactive Treasury Simulator */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Interactive: Treasury Growth Simulator</h2>

      <p className="my-4">
        Model your own Strategy-style bitcoin treasury. Adjust the initial investment, annual
        purchases, and expected growth rate to see how a treasury accumulation strategy compounds over time.
      </p>

      <TreasuryGrowthSimulator className="my-8" />

      {/* Why Strategy Succeeded */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Strategy Succeeded Where Others Failed</h2>

      <p className="my-4">
        The key to Strategy's success is that it is effectively an extension of
        <strong className="text-orange-400"> one individual who believes in bitcoin</strong>.
        This is fundamentally different from a typical corporate governance structure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-green-600/30">
          <h4 className="font-semibold text-green-400 mb-3">What Strategy Got Right</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>• Dominant individual with conviction (Saylor)</li>
            <li>• Long-term commitment through multiple cycles</li>
            <li>• Willingness to buy during bear markets</li>
            <li>• Creative use of convertible debt for leverage</li>
            <li>• Clear communication of bitcoin thesis</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-red-600/30">
          <h4 className="font-semibold text-red-400 mb-3">What Others Got Wrong</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>• Committee-driven decision making</li>
            <li>• Short-term quarterly focus</li>
            <li>• Selling during volatility (Tesla)</li>
            <li>• Lack of understanding of bitcoin's nature</li>
            <li>• Pressure from boards and shareholders</li>
          </ul>
        </div>
      </div>

      {/* The Tesla Contrast */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Tesla Contrast</h2>

      <p className="my-4">
        Tesla also put bitcoin on their balance sheet in 2020, led by Elon Musk. However,
        the outcomes were dramatically different:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-orange-400 mb-3">Strategy</h4>
            <ul className="text-dark-300 text-sm space-y-2">
              <li>• Continued accumulating aggressively</li>
              <li>• Never sold during downturns</li>
              <li>• Transformed company identity around bitcoin</li>
              <li>• Market cap grew from $1B to ~$100B</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-400 mb-3">Tesla</h4>
            <ul className="text-dark-400 text-sm space-y-2">
              <li>• Exited position shortly after S&P 500 inclusion</li>
              <li>• Sold during market volatility</li>
              <li>• Bitcoin was peripheral to business</li>
              <li>• Institutional pressure forced the exit</li>
            </ul>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Lesson:</strong> Tesla's exit demonstrates exactly what Chapter 1
          predicted - institutional pressure will eventually force selling. Only a dominant
          individual like Saylor can resist this pressure.
        </p>
      </Callout>

      {/* Balance Sheet Strength */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Redefining Balance Sheet Strength</h2>

      <p className="my-4">
        Strategy has fundamentally redefined what balance sheet strength means. Instead of
        holding depreciating cash that gets debased by money printing, they hold an
        appreciating asset that cannot be diluted.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The New Balance Sheet Paradigm</h4>
        <div className="space-y-3">
          <p className="text-dark-200">
            <strong>Traditional View:</strong> Cash is safety. Hold as much cash as possible
            for optionality and stability.
          </p>
          <p className="text-dark-200">
            <strong>Saylor's View:</strong> Cash is a melting ice cube. Every day you hold it,
            you lose purchasing power to monetary debasement.
          </p>
          <p className="text-dark-200">
            <strong>The Solution:</strong> Convert cash reserves to bitcoin - an asset that
            appreciates over time rather than depreciating.
          </p>
        </div>
      </div>

      {/* The Convertible Debt Strategy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Convertible Debt Strategy</h2>

      <p className="my-4">
        Strategy pioneered the use of convertible debt to acquire more bitcoin. This allows
        them to borrow at low interest rates and use the proceeds to buy bitcoin, betting
        that bitcoin's appreciation will exceed the cost of borrowing.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Low Interest Rates</h4>
          <p className="text-sm text-dark-300">
            Convertible bonds often have near-zero coupon rates because investors want
            exposure to potential equity upside.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Asymmetric Bet</h4>
          <p className="text-sm text-dark-300">
            If bitcoin appreciates 30%+ annually (as history suggests), the cost of
            borrowing is negligible by comparison.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Stock Dilution</h4>
          <p className="text-sm text-dark-300">
            If the bonds convert to equity, shareholders are diluted - but the bitcoin
            holdings have grown proportionally more.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Corporate Finance Innovation</h4>
          <p className="text-sm text-dark-300">
            Strategy has turned corporate finance into a bitcoin accumulation vehicle
            that other companies are beginning to copy.
          </p>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Strategy proves it can be done</strong> - a public company can
              successfully hold bitcoin long-term, but it requires a dominant individual.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Saylor's engineering mindset</strong> elevated bitcoin from "Magic
              Internet Money" to "Thermodynamically Sound Digital Real Estate."
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Tesla's exit validates the theory</strong> - without a dominant
              individual, institutional pressure will force selling.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Cash is a melting ice cube</strong> - the new paradigm views bitcoin
              as superior to cash for corporate treasuries.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>Convertible debt enables leverage</strong> - Strategy pioneered using
              corporate finance to accelerate bitcoin accumulation.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
