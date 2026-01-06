import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { Definition } from '../../components/common/ContentBlocks';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        The term "highly liquid securities" warrants careful consideration, as
        liquidity is <strong className="text-amber-400">context-dependent</strong>
        rather than an inherent property of an asset. This distinction becomes
        critical during market stress.
      </p>

      {/* Definition */}
      <Definition title="Liquidity">
        The ability to promptly find a buyer or seller and settle a trade at
        prevailing market prices. Critically, liquidity is not intrinsic to an
        asset but depends on market conditions.
      </Definition>

      {/* Section 1: The Minsky Moment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Minsky Moment</h2>

      <p className="my-4">
        Economist Hyman Minsky observed that stability breeds instability.
        Particularly within a credit-based economic structure, leverage tends
        to accumulate until a tipping point triggers a destabilizing market
        downturn—a <strong className="text-amber-400">"Minsky moment"</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Liquidity Paradox</h4>
        <p className="text-dark-200 text-xl mb-4 italic">
          "Everything is liquid until nothing is."
        </p>
        <p className="text-dark-400 text-sm">
          In such scenarios, the notion of a "liquid" portfolio loses its luster,
          as selling under duress occurs at far less than favorable terms.
        </p>
      </div>

      {/* Section 2: The Collateral Cycle */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Collateral-Liquidity Cycle</h2>

      <p className="my-4">
        While traditionally perceived as exceedingly rare in "developed markets,"
        liquidation cascades are becoming increasingly commonplace. Within our
        financial framework:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-center gap-3 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold">1</span>
          <p className="text-dark-200">Liquidity primarily hinges on credit acquisition through collateral pledging</p>
        </div>
        <div className="text-center text-amber-400">↓</div>
        <div className="flex items-center gap-3 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold">2</span>
          <p className="text-dark-200">As collateral value depreciates, credit issuance diminishes</p>
        </div>
        <div className="text-center text-amber-400">↓</div>
        <div className="flex items-center gap-3 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold">3</span>
          <p className="text-dark-200">This exerts downward pressure on market prices</p>
        </div>
        <div className="text-center text-amber-400">↓</div>
        <div className="flex items-center gap-3 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold">4</span>
          <p className="text-dark-200">Prompting liquidation events, further eroding asset values</p>
        </div>
        <div className="text-center text-amber-400">↓</div>
        <div className="flex items-center gap-3 p-4 bg-red-900/30 rounded-lg border border-red-700">
          <span className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full text-sm font-bold">!</span>
          <p className="text-dark-200">The cycle intensifies, potentially leading to systemic collapse</p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>Critical insight:</strong> Government securities and other debt
          instruments—rapidly depreciating due to rate hikes—constitute the bulk
          of such collateral. This makes the entire system vulnerable to interest
          rate changes.
        </p>
      </Callout>

      {/* Section 3: Examples of Cascade */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. When "Liquid" Becomes Illiquid</h2>

      <p className="my-4">
        Recent history provides stark examples of assets considered highly liquid
        suddenly becoming difficult to sell:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">2008 Financial Crisis</h4>
          <p className="text-sm text-dark-300">
            AAA-rated mortgage securities became untradeable overnight. Banks
            holding "safe" assets faced insolvency.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">March 2020</h4>
          <p className="text-sm text-dark-300">
            Even US Treasuries experienced liquidity stress as COVID panic
            triggered mass selling across all asset classes.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">UK Gilt Crisis 2022</h4>
          <p className="text-sm text-dark-300">
            UK government bonds—supposedly the safest assets—required emergency
            central bank intervention to prevent collapse.
          </p>
        </Card>
      </CardGrid>

      {/* Section 4: Scylla and Charybdis */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Between Scylla and Charybdis</h2>

      <p className="my-4">
        Central bankers globally face a precarious balancing act. Their current
        policy choices resemble the treacherous path between Scylla and Charybdis:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
          <h4 className="font-semibold text-red-400 mb-2">Tighten Policy</h4>
          <p className="text-sm text-dark-300">
            Raising rates to curb inflation risks stifling liquidity and
            triggering cascading liquidations in overleveraged markets.
          </p>
        </div>
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
          <h4 className="font-semibold text-red-400 mb-2">Ease Policy</h4>
          <p className="text-sm text-dark-300">
            Printing money to maintain liquidity accelerates inflation,
            further eroding purchasing power of savers.
          </p>
        </div>
      </div>

      <Callout type="note">
        <p>
          This dilemma highlights why alternatives to the traditional financial
          system are becoming increasingly attractive to sophisticated investors.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Liquidity is contextual</strong>—an asset's liquidity depends
              on market conditions, not inherent properties.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Minsky moments</strong> occur when accumulated leverage
              reaches a tipping point, triggering cascade failures.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>collateral-liquidity cycle</strong> can turn orderly
              markets into panic spirals.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Central banks face <strong>impossible choices</strong> between
              inflation and systemic instability.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
