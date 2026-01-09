import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "It ain't what you don't know that gets you into trouble. It's what you know for sure that just ain't so."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Mark Twain on "Crypto"
        </footer>
      </blockquote>

      <Callout type="info">
        <p>
          <strong>TLDR:</strong> In Section 4, we argue that the most sensible investment thesis
          for crypto is essentially a subtle category error: transferring principles from software
          venture investing that do not quite apply.
        </p>
      </Callout>

      {/* Software Economics 101 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Software Economics 101</h2>

      <p className="my-4">
        Software is peculiar because its economics differ dramatically from essentially every other
        kind of economic activity. The cost to produce software scales bizarrely:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Marginal Cost</h3>
          <p className="text-dark-300 text-sm">
            Approaches zero — once built, the cost of serving one more customer is negligible.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Fixed Cost</h3>
          <p className="text-dark-300 text-sm">
            Scales with capability — building more complex software requires more upfront investment.
          </p>
        </div>
      </div>

      <p className="my-4">
        This creates economic profiles unimaginable in any "normal" industry. Competitive pressures
        are heightened to extreme levels: as a software start-up, you have to capture the market
        as fast as possible for purely game theoretic reasons.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-dark-200 italic text-center">
          "If you don't, somebody else will. Perhaps more importantly, everybody else can."
        </p>
      </div>

      {/* The Growth Imperative */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Growth Imperative</h2>

      <p className="my-4">
        You can't point to the return on capital implicit in your unit economics and say "it's
        unsustainable to try to grow faster than that!" Wrong.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          What's "unsustainable" is <strong>losing the race</strong> to win the market and going
          out of business entirely. What's sustainable is to cover operating losses brought about
          by rapid growth with financing until the market is all but won.
        </p>
      </div>

      <p className="my-4">
        It is sensible to treat this as, effectively, R&D. The company is running profitless
        experiments aimed at discovering what it ought to one day look like when profitable.
      </p>

      {/* Portfolio Logic */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Portfolio Logic</h2>

      <p className="my-4">
        Early stage software companies in isolation are amongst the riskiest and most uncertain
        investments that can be made. But those that succeed are amongst the <em>best</em> investments
        that can be made. This is why venture capitalists have portfolios.
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            1
          </span>
          <p className="text-dark-200">
            Most investments will go to zero
          </p>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            2
          </span>
          <p className="text-dark-200">
            Portfolio returns may still be good overall based on one or two dramatic outliers
          </p>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            3
          </span>
          <p className="text-dark-200">
            Hence there is no point trying to be merely "good" — everybody must endeavour to be <strong>great</strong>
          </p>
        </div>
      </div>

      {/* The Category Error */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Category Error</h2>

      <p className="my-4">
        Venture capital is financial engineering to funnel low-risk savings to extremely-high-risk
        investment projects. The net and aggregated capital creation is nothing short of phenomenal.
      </p>

      <Callout type="warning">
        <p>
          <strong>But... this does not apply in crypto.</strong> Even worse, all of it <em>seems like
          it applies</em>, if you haven't really thought it through.
        </p>
      </Callout>

      <p className="my-4">
        To start with, the authors do not think there is a likely final, profitable, sustainable,
        <strong> yielding state</strong> to arrive at. The whole framework of software venture
        investing — sacrifice yields now for the possibility of yields later — doesn't apply when
        there are no real yields to be had.
      </p>

      {/* Paper Returns */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">"Returns" vs Returns</h2>

      <p className="my-4">
        The "returns" in crypto are not real. There is no yield currently and the authors see no
        path to a yield, either.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200">
          Retail trading drives up mark-to-market prices and validates "returns," and then those
          "returns" are used to justify raising more primary capital from FOMOing LPs.
        </p>
      </div>

      <p className="my-4">
        This is why it won't ever be plugged into the real economy, either transparently or at scale.
        Real institutional capital allocators have an entirely different kind of responsibility
        towards their clients.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              Software economics justify <strong>growth over profits</strong> temporarily —
              but only if there's a profitable end state.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              VC portfolio logic accepts most failures for <strong>outlier winners</strong> —
              but winners must actually generate yields.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Crypto <strong>looks like</strong> software investing but lacks the fundamental
              premise: a path to real profitability.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              "Returns" in crypto are <strong>paper returns</strong> validated by secondary
              trading, not real yields.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
