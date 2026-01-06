import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        The UK Gilt crisis served as a wake-up call to central bankers globally,
        exposing the precarious balancing act they face. For money managers, the
        implications are profound and threefold.
      </p>

      {/* Section 1: Three Implications */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Three Implications</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold">1</span>
            <h4 className="font-semibold text-amber-400 text-lg">Elusive Positive Yields</h4>
          </div>
          <p className="text-dark-300">
            Besides new government bonds, genuinely positive real yields are nowhere
            to be found. After accounting for inflation, most traditional instruments
            offer negative returns.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold">2</span>
            <h4 className="font-semibold text-amber-400 text-lg">Money Market Funds' Resurgence</h4>
          </div>
          <p className="text-dark-300">
            The demand for money market funds is amplified by both enticing short-term
            yields and risks of illiquidity in other markets. This has driven MMF assets
            to over $5.5 trillion.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold">3</span>
            <h4 className="font-semibold text-amber-400 text-lg">Looming Government Intrusion</h4>
          </div>
          <p className="text-dark-300">
            The specter of insolvent governments resorting to convoluted methods to
            confiscate capital for debt servicing is an escalating concern.
          </p>
        </div>
      </div>

      {/* Section 2: Government Weaponization */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Currency and Banking as Political Tools</h2>

      <p className="my-4">
        The final threat, though somewhat underestimated across the past four decades,
        will surely garner heightened attention in the foreseeable future. Recent
        events underscore governments' readiness to wield their currency and banking
        systems as tools for political and geopolitical maneuvering:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Russian Asset Freezes</h4>
          <p className="text-sm text-dark-300">
            The US and allies froze Russian assets in response to the Ukraine
            conflict, demonstrating sovereign vulnerability.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Operation Chokepoint 2.0</h4>
          <p className="text-sm text-dark-300">
            Targeted scrutiny of crypto banks shows willingness to use banking
            regulation against disfavored industries.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">SWIFT Exclusions</h4>
          <p className="text-sm text-dark-300">
            Iran's exclusion from SWIFT demonstrated how payment rails can be
            weaponized against entire nations.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">CBDC Initiatives</h4>
          <p className="text-sm text-dark-300">
            The surge in central bank digital currency initiatives signals
            potential for even greater financial surveillance.
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          <strong>The dollar's dominance:</strong> Despite discussions of
          de-dollarization, 86% of FX transactions remain USD-denominated.
          The US government is not shy about leveraging this reserve status
          to advance geopolitical objectives.
        </p>
      </Callout>

      {/* Section 3: The Need for Alternatives */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Need for Seizure-Resistant Alternatives</h2>

      <p className="my-4">
        With all this framing the global macroeconomic backdrop, the concept of a
        deposit facility that is:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
          <h4 className="font-semibold text-green-400 mb-2">Resistant to Seizure</h4>
          <p className="text-sm text-dark-300">
            Assets that cannot be frozen or confiscated by any single government
            or coalition of governments.
          </p>
        </div>
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
          <h4 className="font-semibold text-green-400 mb-2">Capable of Positive Real Returns</h4>
          <p className="text-sm text-dark-300">
            Returns that actually exceed inflation, preserving and growing
            purchasing power in USD terms.
          </p>
        </div>
      </div>

      <p className="my-4 text-lg">
        Such facilities are poised to attract global interest from discerning
        investors seeking <strong className="text-amber-400">stability amidst
        a sea of uncertainty</strong>.
      </p>

      {/* Section 4: China's Example */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Case Study: China's Predicament</h2>

      <p className="my-4">
        A prime example is China's current situation:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400">•</span>
          <p className="text-dark-200">Escalating cold war with the US</p>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400">•</span>
          <p className="text-dark-200">Negotiating bilateral trade agreements in Renminbi</p>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400">•</span>
          <p className="text-dark-200">Contending with asset seizures by foreign powers</p>
        </div>
      </div>

      <p className="my-4">
        For entities in such positions, a Bitcoin-based money market fund could
        prove invaluable—providing dollar-linked stability without exposure to
        the traditional banking system that can be weaponized against them.
      </p>

      <Callout type="info">
        <p>
          <strong>Coming up:</strong> We'll explore how to actually construct
          such a facility using Bitcoin's unique properties to generate positive
          real yields while maintaining dollar stability.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Positive real yields</strong> are increasingly elusive in
              traditional markets.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Money market funds are surging as investors flee <strong>illiquidity
              risk</strong> in other markets.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Governments increasingly <strong>weaponize financial systems</strong>
              for political ends.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Seizure-resistant alternatives</strong> with positive real
              yields will attract global capital.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
