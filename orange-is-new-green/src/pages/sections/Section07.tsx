import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Definition } from '../../components/common/ContentBlocks';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Bitcoin's derivatives market demonstrates the yield opportunity perfectly.
        It stands as one of the few markets structurally inclined towards
        <strong className="text-amber-400"> contango</strong>, where future prices
        consistently surpass spot prices.
      </p>

      <Definition title="Contango">
        A market condition where the futures price of an asset is higher than
        its current spot price. This creates an opportunity for positive
        "cash-and-carry" returns by buying spot and shorting futures.
      </Definition>

      {/* Section 1: The Perpetual Swap Innovation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Perpetual Swap Innovation</h2>

      <p className="my-4">
        The largest and deepest Bitcoin derivatives market is the perpetual market.
        Invented by BitMEX in 2016, <strong className="text-amber-400">perpetual
        swaps</strong> are a true Bitcoin financial innovation leveraging Bitcoin's
        ability to settle around the clock.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
          <h4 className="font-semibold text-red-400 mb-2">Traditional Futures</h4>
          <ul className="text-sm text-dark-300 space-y-2">
            <li>• Expire at market close on specific dates</li>
            <li>• Multiple contracts trading in parallel</li>
            <li>• Fragments the order book</li>
            <li>• Requires rolling positions to maintain exposure</li>
            <li>• Basis can vary significantly between contracts</li>
          </ul>
        </div>
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
          <h4 className="font-semibold text-green-400 mb-2">Perpetual Swaps</h4>
          <ul className="text-sm text-dark-300 space-y-2">
            <li>• Never expire</li>
            <li>• Single unified market</li>
            <li>• Concentrates all liquidity</li>
            <li>• No rolling required</li>
            <li>• Funding rate mechanism keeps price aligned</li>
          </ul>
        </div>
      </div>

      {/* Section 2: The Funding Rate Mechanism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Funding Rate Mechanism</h2>

      <p className="my-4">
        Perpetuals trade continuously in a market where premiums are paid between
        longs and shorts on a peer-to-peer basis every 8 hours, thereby closing
        the spread between spot and futures markets.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">How Funding Works</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="text-green-400 font-bold w-24">Positive Rate:</span>
            <p className="text-dark-300">
              When perpetual price {">"} spot price, longs pay shorts.
              This encourages shorting to bring price down.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-red-400 font-bold w-24">Negative Rate:</span>
            <p className="text-dark-300">
              When perpetual price {"<"} spot price, shorts pay longs.
              This encourages longing to bring price up.
            </p>
          </div>
        </div>
      </div>

      <p className="my-4">
        This mechanism allows convergence towards a single market for Bitcoin futures
        and provides market participants with the ability to hedge with little
        management and no need to roll positions.
      </p>

      {/* Section 3: The Structural Bias */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Structural Bias Toward Positive Funding</h2>

      <p className="my-4">
        Here's the crucial insight: Bitcoin's perpetual market is structurally
        biased toward positive funding rates. Why?
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Bullish Sentiment Dominates</p>
            <p className="text-sm text-dark-400 mt-1">
              Most Bitcoin market participants are long-term believers expecting
              price appreciation
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Leverage Demand is Asymmetric</p>
            <p className="text-sm text-dark-400 mt-1">
              More traders want leveraged long exposure than short exposure
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Superior Monetary Policy</p>
            <p className="text-sm text-dark-400 mt-1">
              Bitcoin's fixed supply creates rational expectation of appreciation vs. fiat
            </p>
          </div>
        </div>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Historical Data (BitMEX)</h4>
        <p className="text-dark-200 text-lg mb-4">
          Between May 14, 2016 (launch of perpetuals) and July 13, 2023:
        </p>
        <div className="text-center">
          <p className="text-4xl font-bold text-green-400">72%</p>
          <p className="text-dark-400">of funding rate periods were positive</p>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The opportunity:</strong> If you hold Bitcoin and take a short
          position on perpetuals (a "covered short"), you collect positive
          funding payments 72% of the time while maintaining a dollar-stable
          position.
        </p>
      </Callout>

      {/* Section 4: Benefits for Hedgers */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Benefits for Hedgers</h2>

      <p className="my-4">
        For someone wanting dollar stability, perpetual swaps offer compelling
        advantages:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">No Expiry Management</h4>
          <p className="text-sm text-dark-300">
            No need to roll positions or manage basis risk between contracts.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Continuous Liquidity</h4>
          <p className="text-sm text-dark-300">
            Single deep market with concentrated liquidity for better execution.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Earn While Hedged</h4>
          <p className="text-sm text-dark-300">
            Positive funding means you're paid to maintain your hedge most of the time.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">24/7 Access</h4>
          <p className="text-sm text-dark-300">
            Enter or exit positions any time, matching Bitcoin's always-on nature.
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Perpetual swaps</strong> are Bitcoin's financial innovation
              for continuous derivatives trading without expiry.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Funding rates</strong> every 8 hours keep perpetual prices
              aligned with spot through peer-to-peer payments.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Bitcoin perpetuals are <strong>structurally biased toward positive
              funding</strong> (72% of the time historically).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              This creates an opportunity to <strong>earn yield while hedged</strong>
              to dollars—the basis for a Bitcoin MMF.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
