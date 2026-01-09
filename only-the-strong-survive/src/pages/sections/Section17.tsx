import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion: Where We Go From Here</h2>

      <p className="my-4">
        After examining the philosophical, technical, and economic dimensions of crypto beyond
        Bitcoin, what conclusions can be drawn and what path forward emerges?
      </p>

      {/* Summary of the Argument */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary of the Argument</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            1
          </span>
          <p className="text-dark-200">
            <strong>Bitcoin's innovation</strong> is proof-of-work, the difficulty adjustment, and
            endogenous monetary value creating a robust, decentralized ledger.
          </p>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            2
          </span>
          <p className="text-dark-200">
            <strong>Crypto is not decentralized</strong> — design changes from Bitcoin create
            pressures toward centralization and introduce new attack vectors.
          </p>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            3
          </span>
          <p className="text-dark-200">
            <strong>Crypto is not finance</strong> — rehypothecation, circular yields, and
            pseudo-leverage create systemic fragility requiring constant capital inflows.
          </p>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            4
          </span>
          <p className="text-dark-200">
            <strong>The investment rationale</strong> is a category error — applying software
            venture logic where it doesn't apply.
          </p>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            5
          </span>
          <p className="text-dark-200">
            <strong>Layered architecture on Bitcoin</strong> will likely capture the desirable
            features of DeFi on a more robust foundation.
          </p>
        </div>
      </div>

      {/* The Prediction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Prediction</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-xl text-dark-200 text-center font-semibold">
          In the long run, much of the current value in crypto will prove unsustainable and
          therefore will disappear. Systems built on Bitcoin may capture much of this value as
          similar functionality is developed on Bitcoin's more robust foundation.
        </p>
      </div>

      {/* The Title Explained */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Only The Strong Survive</h2>

      <p className="my-4">
        The title of this paper reflects its central thesis: in a world where value must be
        grounded in genuine decentralization and real economic productivity, only systems that
        are <strong>truly robust</strong> will survive the eventual shakeout.
      </p>

      <Callout type="info">
        <p>
          Bitcoin's apparent "limitations" — its slow evolution, its resistance to feature-creep,
          its obsessive focus on security — are not weaknesses but <strong>strengths</strong>.
          They reflect the mindset of prudent engineering that creates lasting systems.
        </p>
      </Callout>

      {/* What To Watch */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What To Watch</h2>

      <p className="my-4">
        Those who will still have conviction during and after a mass liquidation event are likely
        the most thoughtful and worth listening to. The authors predict that, at such a time,
        activity will move to then-more-mature higher layers of Bitcoin.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          This will not necessarily be the "end of crypto," but rather a <strong>reset of
          expectations and beliefs</strong> that will bring important questions about ecosystem
          structure to the surface.
        </p>
      </div>

      {/* Final Thought */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Final Thought</h2>

      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "A complex system that works is invariably found to have evolved from a simple system
        that worked."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Gall's Law
        </footer>
      </blockquote>

      <p className="my-4">
        Bitcoin is that simple system that works. The complex systems that will work in the
        future of decentralized finance will be those that evolve from Bitcoin — not those that
        try to build complexity from scratch on shaky foundations.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              Crypto's value is likely <strong>unsustainable</strong>; Bitcoin's higher layers
              will likely capture it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              Bitcoin's "limitations" are actually <strong>strengths</strong> that enable
              long-term robustness.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Expect a <strong>reset of expectations</strong> rather than the "end of crypto."
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Only the strong survive</strong> — truly robust systems built on sound
              foundations.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
