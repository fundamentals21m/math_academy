import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "In the spirit of 'necessity is the mother of invention,' the burgeoning
        interest in money market funds is poised to drive resources towards
        various implementations of the concepts discussed."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Theo Mogenet
        </footer>
      </blockquote>

      {/* Section 1: The Fiat Mirage */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Fiat Mirage</h2>

      <p className="my-4">
        Our existing financial system is a mirage of wealth and liquidity,
        sustained by an ever-expanding money supply. Bitcoin emerges as the
        ultimate shield against the inevitable reckoning that will shatter
        this illusion.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Current Reality</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-dark-300">
            <span className="text-red-400">•</span>
            <span>No clean balance sheet remains to sweep problems under</span>
          </div>
          <div className="flex items-start gap-3 text-dark-300">
            <span className="text-red-400">•</span>
            <span>Relentless money printing fuels inflation</span>
          </div>
          <div className="flex items-start gap-3 text-dark-300">
            <span className="text-red-400">•</span>
            <span>Governments resort to confiscating private wealth for debt servicing</span>
          </div>
          <div className="flex items-start gap-3 text-dark-300">
            <span className="text-red-400">•</span>
            <span>The road leads unmistakably to financial repression</span>
          </div>
        </div>
      </div>

      {/* Section 2: The Two Instruments */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Two Complementary Instruments</h2>

      <p className="my-4">
        Even with the extra costs of DLCs and on-chain derivatives, the funding
        rate data indicates potential for accruing positive real yields on
        stable dollar balances. These costs represent a modest price for
        access to two complementary instruments:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-600/50">
          <div className="text-4xl mb-3">🟠</div>
          <h4 className="font-semibold text-amber-400 mb-2">Bitcoin</h4>
          <p className="text-sm text-dark-300">
            For long-term savings—the ultimate store of value with fixed supply
            and global accessibility.
          </p>
        </div>
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-600/50">
          <div className="text-4xl mb-3">💵</div>
          <h4 className="font-semibold text-green-400 mb-2">Bitcoin MMF</h4>
          <p className="text-sm text-dark-300">
            For short-term cash balances—dollar stability with positive yields,
            outside traditional banking.
          </p>
        </div>
      </div>

      <p className="my-4 text-lg text-center italic text-dark-400">
        Until fiat money fades away and Bitcoin can serve both roles at once.
      </p>

      {/* Section 3: The Mouse Trap */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Mouse Trap</h2>

      <p className="my-4">
        The author proposes Bitcoin maintain its role as a "Jujitsu master"—
        leveraging opponents' strengths to amplify its own impact:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Strategy</h4>
        <p className="text-dark-200 mb-4">
          A masterful mouse trap awaits construction, replete with a tempting
          yield as bait—a scheme poised to transform Bitcoin's detractors into
          pawns of hyperbitcoinization.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400 font-bold">Phase 1:</span>
            <span>
              Finance professionals embrace the tool as "just another financial
              engineering product" for superior risk-adjusted returns
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400 font-bold">Phase 2:</span>
            <span>
              They outshine rivals and satisfy clients by accessing Bitcoin's
              structural yield premium
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400 font-bold">Phase 3:</span>
            <span>
              As Bitcoin renders other tools irrelevant, their sentiment shifts
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-green-400 font-bold">Result:</span>
            <span>
              They inadvertently expedite the overhaul of the global monetary
              paradigm—a transformation that will be irreversible
            </span>
          </div>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>The precedent:</strong> Bitcoin has already demonstrated this
          Jujitsu strategy against climate critics—turning the energy debate
          into a feature (stranded energy monetization) rather than a bug.
          Why not apply the same finesse to finance?
        </p>
      </Callout>

      {/* Section 4: Who Benefits */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Who Benefits?</h2>

      <p className="my-4">
        Given the prevailing macroeconomic environment, multiple categories of
        actors are primed to embrace such products:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400 text-xl">🏢</span>
          <div>
            <p className="font-semibold text-dark-100">Corporations</p>
            <p className="text-sm text-dark-400">
              Treasury management with inflation protection and reduced banking risk
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400 text-xl">💰</span>
          <div>
            <p className="font-semibold text-dark-100">High Net Worth Individuals</p>
            <p className="text-sm text-dark-400">
              Wealth preservation outside single-jurisdiction control
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400 text-xl">📈</span>
          <div>
            <p className="font-semibold text-dark-100">Hedge Funds</p>
            <p className="text-sm text-dark-400">
              Superior risk-adjusted returns for cash management
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400 text-xl">📊</span>
          <div>
            <p className="font-semibold text-dark-100">Bond Portfolio Managers</p>
            <p className="text-sm text-dark-400">
              Alternative to negative real yield traditional instruments
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400 text-xl">🌍</span>
          <div>
            <p className="font-semibold text-dark-100">Sovereign Entities</p>
            <p className="text-sm text-dark-400">
              Reserve management outside weaponizable payment rails
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: Final Thoughts */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Final Thoughts</h2>

      <p className="my-4">
        While some fervent Bitcoin advocates may perceive this approach as a
        departure from Bitcoin's ethos, the author argues it's worth pursuing.
        The grim reality of hyperinflation scenarios makes a gradual approach
        preferable:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Hyperinflation is akin to shuffling cards and tossing them skyward,
        with results not a man a million could predict. Thus, a sly roundabout
        way, allowing Bitcoin to gradually absorb both long-term savings and
        short-term capital, seems a worthwhile endeavor."
      </blockquote>

      {/* Course Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Course Summary</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Bitcoin excels as <strong>long-term savings</strong> but its
              volatility challenges short-term cash use.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The <strong>fiat system is fragile</strong>—liquidity crises,
              inflation, and government weaponization create demand for alternatives.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Bitcoin's <strong>perpetual swap market</strong> offers structural
              positive yields for covered short positions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Historical data shows <strong>~20% average annual returns</strong>
              with 91.7% profitable trades.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>DLCs</strong> enable non-custodial versions with
              privacy/scalability trade-offs against capital efficiency.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              Bitcoin MMFs could serve as a <strong>"sly roundabout"</strong>
              to hyperbitcoinization—transforming skeptics into participants.
            </span>
          </li>
        </ul>
      </div>

      <Callout type="success">
        <p>
          <strong>Orange is the New Green:</strong> Just as Bitcoin has turned
          energy criticism into a feature, it can transform traditional finance's
          yield-seeking into a vector for monetary revolution. The tools exist;
          the demand is growing; the future is being built.
        </p>
      </Callout>
    </LessonLayout>
  );
}
