import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">The Need for External Capital</h2>

      <p className="my-4">
        Given how much of the ecosystem is "collateralized" by Ether and similar assets — some of
        which themselves generate new tokens — and given there is no clear link to stocks of
        economically productive assets, there is a need for <strong>real, external capital</strong>
        to act as the backstop of value.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200">
          Despite the prevalent securitization, underlying cash flows is <em>not</em> what has
          been securitized, to date. Taking into account the expected "return" this capital seeks,
          there is arguably also a need for <strong>continual new capital</strong>.
        </p>
      </div>

      {/* Historical Rescues */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Pattern of Rescue</h2>

      <p className="my-4">
        Crypto has seen major drawdowns, but the bleeding has always been stopped by fresh capital
        being injected into the system. The authors suspect this has been largely due to:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Cheap Capital Environment</h3>
          <p className="text-dark-300 text-sm">
            Low interest rates across the world have created abundant capital seeking returns.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Depressed Real Yields</h3>
          <p className="text-dark-300 text-sm">
            Perfectly ironically, the depression of real yields across alternative allocations
            drove capital into crypto.
          </p>
        </div>
      </div>

      <p className="my-4">
        If you buy into the investment hypothesis anyway, then a 40%+ drawdown in 24 hours (as
        Ether experienced in March 2020) surely seems like an excellent opportunity to buy on
        price weakness.
      </p>

      {/* Fractional Reserve Comparison */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Fractional Reserve Parallel</h2>

      <p className="my-4">
        This may seem oddly familiar to <strong>fractional reserve banking (FRB)</strong>. The
        "overcollateralization" percentage could equally be thought of as the "reserve ratio."
        But there are numerous drastic differences:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            1
          </span>
          <div>
            <p className="font-semibold text-dark-100">Not Productive Capital</p>
            <p className="text-sm text-dark-400 mt-1">
              Fractional reserve deposits are savers' funds lent at risk and put to <em>productive</em>
              ends. The "end" in crypto is not productive but rather a continued, endless recombination
              of instruments.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            2
          </span>
          <div>
            <p className="font-semibold text-dark-100">No Maturity Mismatch Purpose</p>
            <p className="text-sm text-dark-400 mt-1">
              The reserve ratio in FRB provides liquidity to manage the risk of maturity mismatch.
              Given the lack of real economic primitives, it is unclear what purpose the similar
              construction serves in crypto.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            3
          </span>
          <div>
            <p className="font-semibold text-dark-100">No Lender of Last Resort</p>
            <p className="text-sm text-dark-400 mt-1">
              In FRB, there is a central bank as lender of last resort. Not only is this a bad thing
              (and what Bitcoin fixes), it isn't even possible to mimic in crypto.
            </p>
          </div>
        </div>
      </div>

      {/* Pseudo-Equity */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Pseudo-Equity Backstop</h2>

      <p className="my-4">
        In the absence of a lender of last resort, the role is taken up by <strong>pseudo-equity
        issuance</strong> to boost the equity buffer. This is accomplished in two forms:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Additional Securitization</h3>
          <p className="text-dark-300 text-sm">
            Essentially centralized securitization to create more tokens with claimed value.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Primary Capital</h3>
          <p className="text-dark-300 text-sm">
            Additional primary capital from investors willing to buy in during drawdowns.
          </p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Core Fragility:</strong> The purpose of real collateral is precisely that
          it is <em>not</em> rehypothecated but is used to guarantee the value of a securitized
          debt contract. In crypto, none of these financial primitives are present, making it
          entirely unclear what the purpose of "collateral" is — or if the concept even applies.
        </p>
      </Callout>

      {/* The Breaking Point */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What Happens When Capital Stops?</h2>

      <p className="my-4">
        The critical question is: what happens when external capital stops flowing in? The system
        has always been rescued by fresh capital. But this depends on:
      </p>

      <ul className="space-y-3 my-6 ml-4">
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>Continued belief in the investment hypothesis</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>Continued cheap capital environments</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>Continued depression of yields in traditional assets</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>New investors willing to "buy the dip"</span>
        </li>
      </ul>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          If any of these conditions change, the systemic fragility becomes exposed. The
          "overcollateralized" individual positions cascade into a systemically undercapitalized
          failure mode.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              The system requires <strong>continuous external capital</strong> to maintain the
              illusion of value.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              Unlike fractional reserve banking, crypto's "collateral" is not linked to
              <strong> productive economic activity</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              There is <strong>no lender of last resort</strong> — the system depends on new
              investor capital.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              When capital inflows stop, the <strong>systemic fragility</strong> will be exposed.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
