import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        A compelling illustration of liquidity crises emerged in the UK in October 2022
        when the Gilt market teetered on the edge of collapse, requiring emergency
        Bank of England intervention.
      </p>

      {/* Section 1: Background */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Setup</h2>

      <p className="my-4">
        UK pension funds had adopted a strategy called <strong className="text-amber-400">
        Liability-Driven Investment (LDI)</strong>. To match their long-term pension
        obligations, they:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold shrink-0">1</span>
          <div>
            <p className="text-dark-200">Purchased long-dated UK government bonds (Gilts)</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold shrink-0">2</span>
          <div>
            <p className="text-dark-200">Used these Gilts as collateral for leveraged positions</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold shrink-0">3</span>
          <div>
            <p className="text-dark-200">Assumed Gilts would remain "safe" and liquid</p>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The hidden risk:</strong> Gilts were considered the most "liquid"
          asset—ironically, this perception led to their use as collateral precisely
          because everyone assumed they could always be sold quickly.
        </p>
      </Callout>

      {/* Section 2: The Trigger */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Trigger</h2>

      <p className="my-4">
        On September 23, 2022, Chancellor Kwasi Kwarteng announced a "mini-budget"
        with £45 billion in unfunded tax cuts. The market reaction was immediate
        and severe:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Market Response</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-red-400">+150bps</p>
            <p className="text-sm text-dark-400">30-year Gilt yield spike</p>
            <p className="text-xs text-dark-500">in just 3 days</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-red-400">-30%</p>
            <p className="text-sm text-dark-400">Long-dated Gilt prices</p>
            <p className="text-xs text-dark-500">from peak</p>
          </div>
        </div>
      </div>

      {/* Section 3: The Cascade */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Liquidation Cascade</h2>

      <p className="my-4">
        The rise in Gilt yields triggered margin calls for pension institutions
        that had pledged long-dated Gilts as collateral. Here's where the
        liquidity paradox manifested:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-center gap-3 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full text-sm font-bold">1</span>
          <p className="text-dark-200">Gilt prices fall → collateral value drops</p>
        </div>
        <div className="text-center text-red-400">↓</div>
        <div className="flex items-center gap-3 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full text-sm font-bold">2</span>
          <p className="text-dark-200">Margin calls force pension funds to raise cash</p>
        </div>
        <div className="text-center text-red-400">↓</div>
        <div className="flex items-center gap-3 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full text-sm font-bold">3</span>
          <p className="text-dark-200">They sell Gilts (the "liquid" asset) to meet margin</p>
        </div>
        <div className="text-center text-red-400">↓</div>
        <div className="flex items-center gap-3 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full text-sm font-bold">4</span>
          <p className="text-dark-200">Mass selling further depresses Gilt prices</p>
        </div>
        <div className="text-center text-red-400">↓</div>
        <div className="flex items-center gap-3 p-4 bg-red-900/30 rounded-lg border border-red-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full text-sm font-bold">!</span>
          <p className="text-dark-200">More margin calls, more forced selling—a death spiral</p>
        </div>
      </div>

      {/* Section 4: The Intervention */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Central Bank Intervention</h2>

      <p className="my-4">
        The Bank of England intervened to avert calamity by announcing purchases
        of up to £65 billion in long-dated Gilts. Governor Andrew Bailey stated
        the intervention was necessary because:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Had we not acted, we were hours away from a complete collapse of the UK pension system."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Multiple reports from Bank of England officials
        </footer>
      </blockquote>

      <Callout type="info">
        <p>
          <strong>The irony:</strong> The most "liquid" asset in the UK financial
          system—government bonds—required emergency central bank intervention
          because the market couldn't absorb selling pressure. Liquidity
          evaporated precisely when it was needed most.
        </p>
      </Callout>

      {/* Section 5: Lessons */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Lessons for Cash Management</h2>

      <p className="my-4">
        The UK Gilt crisis demonstrates several crucial insights:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Counterparty Risk</h4>
          <p className="text-sm text-dark-300">
            Government bonds carry risk—not just credit risk, but market and
            liquidity risk that materializes during stress.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Leverage Accumulation</h4>
          <p className="text-sm text-dark-300">
            "Safe" assets encourage leverage buildup, which creates fragility
            in the entire system.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Rescue Dependency</h4>
          <p className="text-sm text-dark-300">
            The system now depends on central bank intervention, which comes
            with its own costs (inflation, moral hazard).
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Alternative Appeal</h4>
          <p className="text-sm text-dark-300">
            Assets outside this system—like Bitcoin—become attractive as
            alternatives to this precarious structure.
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
              UK pension funds used <strong>Gilts as collateral</strong> because
              they were considered the safest, most liquid assets.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              A fiscal policy shock triggered <strong>margin calls</strong>,
              forcing mass selling of the "liquid" collateral.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>liquidation cascade</strong> nearly destroyed the UK
              pension system within hours.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Only <strong>central bank intervention</strong> prevented collapse—
              highlighting systemic fragility.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
