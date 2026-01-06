import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { Definition } from '../../components/common/ContentBlocks';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        The pursuit of optimal real yields is a fundamental task for money managers.
        But where exactly does yield come from, and how can Bitcoin—with its fixed
        supply—generate returns for those seeking dollar stability?
      </p>

      {/* Section 1: Traditional Yield Sources */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Traditional Yield Sources</h2>

      <p className="my-4">
        Traditionally, the search for yield leads managers to allocate capital to
        the most effectively managed monetary zones—those offering the best combination
        of interest rates and currency stability:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Germany (1970s-90s)</h4>
          <p className="text-sm text-dark-300">
            The Bundesbank's hard-money policies made Deutsche Mark assets
            attractive to yield-seekers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Japan (1980s)</h4>
          <p className="text-sm text-dark-300">
            High growth and monetary stability drew global capital to
            yen-denominated investments.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">USA (1990s-present)</h4>
          <p className="text-sm text-dark-300">
            Dollar dominance and relatively higher rates make Treasury
            securities the global benchmark.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        However, all these zones share a common characteristic: financial markets
        are built up from fiat bond markets, which all rest on the necessity of
        <strong className="text-amber-400"> unbounded money supply expansion</strong>
        over time.
      </p>

      {/* Section 2: Bitcoin's Different Paradigm */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Bitcoin's Different Paradigm</h2>

      <p className="my-4">
        In stark contrast, Bitcoin operates on an inherently sound and predictable
        monetary policy:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
          <h4 className="font-semibold text-green-400 mb-2">Fixed Supply</h4>
          <p className="text-sm text-dark-300">
            21 million BTC maximum, ever. No central bank can create more
            through policy decisions.
          </p>
        </div>
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
          <h4 className="font-semibold text-green-400 mb-2">Predictable Issuance</h4>
          <p className="text-sm text-dark-300">
            Algorithmic difficulty adjustments ensure supply schedule stays
            on track regardless of demand.
          </p>
        </div>
      </div>

      <Definition title="Bitcoin's Monetary Policy">
        While central banks manipulate money's price to influence its supply,
        the Bitcoin protocol defines supply evolution, and the price of Bitcoin
        subsequently adjusts. Bitcoin doesn't necessitate continuous money supply
        growth to sustain what is essentially (in fiat) a convoluted Ponzi scheme.
      </Definition>

      {/* Section 3: The Opportunity Cost Insight */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Opportunity Cost Insight</h2>

      <p className="my-4">
        Given Bitcoin's robust monetary framework, its price discovery—reflecting
        the <strong className="text-amber-400">opportunity cost of not holding
        Bitcoin</strong>—unsurprisingly commands positive real yields across long
        enough time horizons when denominated in fiat.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Bitcoin has never stopped monetizing, and I see no reason to believe it ever will."
      </blockquote>

      {/* Section 4: FX Swaps Analogy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. The FX Swap Analogy</h2>

      <p className="my-4">
        In traditional forex, sovereign entities vie for capital inflows by offering
        higher real interest rates. Investors can access these yields while hedging
        currency risk through <strong className="text-amber-400">FX swaps</strong>.
      </p>

      <Definition title="FX Swap">
        A derivative involving the exchange of one currency's performance over
        some interval for another's. This allows investors to own a foreign
        security without bearing currency risk, typically for a small cost.
      </Definition>

      <p className="my-4">
        A compelling illustration: when the Federal Reserve raised rates in 2022,
        the USD rallied as money managers in Japan bought US Treasuries while
        hedging their USD exposure. The interest rate spread between the US and
        Japan closely tracks changes in their relative exchange rate.
      </p>

      {/* Section 5: The Bitcoin Flip */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. The Bitcoin Flip</h2>

      <p className="my-4">
        Now consider Bitcoin as a currency with superior monetary policy:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Mismanaged Currency (e.g., Argentine Peso)</p>
            <p className="text-sm text-dark-400 mt-1">
              Hedging ARS against USD costs money—you pay for protection against peso devaluation
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Well-Managed Currency (e.g., USD vs. JPY)</p>
            <p className="text-sm text-dark-400 mt-1">
              Small cost to hedge, reflecting relatively similar monetary policies
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-green-900/30 rounded-lg border border-green-700">
          <span className="w-10 h-10 flex items-center justify-center bg-green-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Superior Currency (Bitcoin vs. USD)</p>
            <p className="text-sm text-dark-400 mt-1">
              <strong>You get paid to hedge!</strong> Selling BTC exposure for USD exposure
              means relinquishing returns that, on average, remain positive
            </p>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The key insight:</strong> Bitcoin's superior monetary policy means
          that someone selling their Bitcoin price exposure to gain dollar stability
          is giving up expected returns—and should be compensated for it.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Traditional yields come from <strong>monetary zones</strong> competing
              for capital through interest rate policies.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Bitcoin's <strong>fixed supply</strong> and predictable issuance
              create fundamentally different dynamics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>opportunity cost</strong> of not holding Bitcoin commands
              positive returns over time.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Unlike hedging weak currencies, hedging Bitcoin against USD
              <strong> pays you a premium</strong>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
