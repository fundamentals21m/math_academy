import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "A nickel ain't worth a dime anymore."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Yogi Berra on "Crypto"
        </footer>
      </blockquote>

      <Callout type="info">
        <p>
          <strong>TLDR:</strong> In Section 3, we argue that the attempt to bootstrap value via utility
          in financial applications does not solve crypto's core problem but exacerbates it. Common
          metrics are deeply misleading and primarily serve to encourage further capital inflows
          necessary to sustain the ecosystem.
        </p>
      </Callout>

      {/* The Question of Yield */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Question of Yield</h2>

      <p className="my-4">
        Most financial assets are assigned value on the basis of their <strong>discounted future
        cash flows</strong> — at least psychologically and philosophically if not mathematically.
        Hardly any financial assets of note have no capacity to generate a yield.
      </p>

      <p className="my-4">
        "Speculation" arises from the inability to know the future. Yields take time and skill to
        generate. No real yield is generated instantaneously by arbitrage, and hence no real financial
        asset attains value and pricing this way, either.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">The Fundamental Question</h3>
        <p className="text-dark-200">
          At root, financial assets must derive their value from a spot appraisal or from the prospect
          of future productivity from a stock of carrying capacity generating a yield.
        </p>
        <p className="text-dark-200 mt-4 font-semibold">
          Does crypto generate a real yield? <span className="text-orange-400">No.</span>
        </p>
      </div>

      {/* What is Really Happening */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What Is Really Happening</h2>

      <p className="my-4">
        While the answer is simple, understanding what is actually happening is far more complicated.
        The analysis breaks into three subsections:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            i
          </span>
          <div>
            <p className="font-semibold text-dark-100">Rehypothecation, Leverage, and Securitization</p>
            <p className="text-sm text-dark-400 mt-1">
              How the crypto ecosystem embraces these tools from traditional finance without
              serving any coherent purpose.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            ii
          </span>
          <div>
            <p className="font-semibold text-dark-100">Systemic Fragility</p>
            <p className="text-sm text-dark-400 mt-1">
              How these collectively create fragility such that capital must keep flowing in
              to keep the system seeming healthy.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            iii
          </span>
          <div>
            <p className="font-semibold text-dark-100">Misleading Metrics</p>
            <p className="text-sm text-dark-400 mt-1">
              How popular metrics both conceal the fragility and encourage continuation of
              systemically necessary capital inflows.
            </p>
          </div>
        </div>
      </div>

      {/* The Curve Example */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Curve Example</h2>

      <p className="my-4">
        Consider Curve, an automated market maker that facilitates the transfer of Ethereum-based
        assets. The 3pool allows users to exchange DAI, USDC, and USDt and rewards participants
        with CRV, the Curve "token."
      </p>

      <p className="my-4">
        Liquidity providers are paid back in two forms:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Swap Fees</h3>
          <p className="text-dark-300 text-sm">
            Users ("takers") pay a fee to liquidity providers — stablecoins in this instance.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Staking Rewards</h3>
          <p className="text-dark-300 text-sm">
            In exchange for locking up assets, providers earn CRV tokens. These are effectively
            paid via <strong>unbacked seigniorage</strong>.
          </p>
        </div>
      </div>

      {/* The Token Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Token Problem</h2>

      <p className="my-4">
        Why the CRV token ought to have value, and how it ought to be used, is unclear:
      </p>

      <ul className="space-y-3 my-6 ml-4">
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>The token has a <strong>programmatically unlimited supply</strong></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>A vague value proposition for any investor</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>The governance to / claim on any "real" cash flows is unclear</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>The only reason to hold CRV is a mechanism that gives more "rewards" for continued staking</span>
        </li>
      </ul>

      <Callout type="warning">
        <p>
          <strong>The Circular Logic:</strong> We are talking about a token whose only evidenced
          utility and function is to be re-staked into the very system that creates it to create
          more of it. The "governance rights" only entitle the holder to contribute to the
          "governance" of creating more of itself.
        </p>
      </Callout>

      {/* The Bank Run Risk */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Bank Run Risk</h2>

      <p className="my-4">
        This clearly depends on new capital coming into the system to be sustained. But what happens
        when people decide they would like to own an alternative asset that actually provides access
        to real cash flows?
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          The authors' contention is a "bank run" cascades the value of CRV down, and with it will
          crash the value proposition of running liquidity pools.
        </p>
      </div>

      <p className="my-4">
        Crypto investors who currently own CRV seem to largely understand that much of the governance
        is unproductive but hope that the protocol will continue to mature and accrue value. The
        authors are skeptical.
      </p>

      {/* Layering of Protocols */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Endless Layering</h2>

      <p className="my-4">
        One further layer: many other crypto protocols aggregate user funds to help them become
        liquidity providers. For example, <strong>Yearn Finance</strong> aggregates user funds and
        deposits into protocols like Curve to do automated market making.
      </p>

      <p className="my-4">
        Users earn "yield" from fees plus CRV tokens plus YFI tokens. From a user perspective just
        looking to garner "yield," this seems brilliant. But how the yield is generated and the
        underlying risks is what concerns the authors.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-dark-200 italic text-center">
          "There are even other projects that then attach onto Yearn Finance, notably Alchemix.
          Let us just say that we see no practical reason this iterative process would ever need to end..."
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              Real financial assets derive value from <strong>discounted future cash flows</strong>.
              Crypto does not generate real yields.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              Governance tokens like CRV have <strong>circular logic</strong> — their only utility
              is to stake and create more of themselves.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              The system depends on <strong>continuous new capital</strong> to sustain itself.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              The endless <strong>layering of protocols</strong> creates opacity and compounds risk.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
