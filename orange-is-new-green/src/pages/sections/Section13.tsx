import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Several teams are actively building Bitcoin-based stable dollar products.
        Let's examine current implementations and future possibilities.
      </p>

      {/* Section 1: Current Implementations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Current Implementations</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30">
          <h4 className="font-semibold text-amber-400 mb-3">BlinkBTC (formerly Bitcoin Beach Wallet)</h4>
          <p className="text-dark-300 mb-3">
            Operated by Galoy, Blink has introduced a "Stablesats" feature allowing
            users to hold dollar-stable balances.
          </p>
          <div className="bg-dark-900 rounded-lg p-4 mt-3">
            <p className="text-sm text-dark-400 mb-2"><strong>How it works:</strong></p>
            <ul className="text-sm text-dark-300 space-y-1">
              <li>• Bitcoin short positions executed through exchange APIs</li>
              <li>• User doesn't retain custody—margin held at exchange</li>
              <li>• Provides deep order book access and cost-effective pegging</li>
            </ul>
            <p className="text-sm text-red-400 mt-3">
              <strong>Trade-off:</strong> Involves trust in wallet provider and partner exchange
            </p>
          </div>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30">
          <h4 className="font-semibold text-amber-400 mb-3">LN Markets DLC OTC Desk</h4>
          <p className="text-dark-300 mb-3">
            LN Markets is exploring an OTC desk for DLC-based Bitcoin futures,
            which could enable:
          </p>
          <ul className="text-sm text-dark-300 space-y-2">
            <li>• Corporations and individuals hedging on-chain</li>
            <li>• Minimal trust requirements</li>
            <li>• Privacy preservation</li>
            <li>• Relatively low overhead</li>
          </ul>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30">
          <h4 className="font-semibold text-amber-400 mb-3">Other Active Projects</h4>
          <CardGrid>
            <Card>
              <h5 className="font-semibold text-amber-400 mb-1">SuredBits</h5>
              <p className="text-xs text-dark-300">DLC specification and tooling</p>
            </Card>
            <Card>
              <h5 className="font-semibold text-amber-400 mb-1">Atomic Finance</h5>
              <p className="text-xs text-dark-300">DLC-based derivatives</p>
            </Card>
            <Card>
              <h5 className="font-semibold text-amber-400 mb-1">10101</h5>
              <p className="text-xs text-dark-300">Lightning-nested DLCs</p>
            </Card>
          </CardGrid>
        </div>
      </div>

      {/* Section 2: Use Cases */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Practical Use Cases</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Example: Bitcoin Miner Treasury</h4>
        <p className="text-dark-300 mb-4">
          Imagine a Bitcoin miner paying for energy in fiat but earning revenue
          in Bitcoin:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400">•</span>
            <span>
              <strong>The problem:</strong> Coinbase transaction from mining isn't
              spendable for 100 blocks, forcing the miner to bear currency risk
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-amber-400">•</span>
            <span>
              <strong>Power company risk:</strong> They supply electricity upfront
              and bill 15-90 days later; Bitcoin volatility could bankrupt the miner
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm text-dark-300">
            <span className="text-green-400">•</span>
            <span>
              <strong>DLC solution:</strong> Miner streams sats in real-time; power
              supplier automatically hedges to maintain dollar value until fiat conversion
            </span>
          </div>
        </div>
      </div>

      {/* Section 3: Third-Party Services */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Third-Party Service Providers</h2>

      <p className="my-4">
        Managing DLCs—especially frequent position rolling—can be challenging.
        Third-party service providers are emerging to handle:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h5 className="font-semibold text-amber-400 mb-2">CET Backups</h5>
          <p className="text-sm text-dark-300">
            Storing the thousands of pre-signed transactions securely until
            contract expiration.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h5 className="font-semibold text-amber-400 mb-2">Oracle Services</h5>
          <p className="text-sm text-dark-300">
            Operating reliable price feeds that attest to BTCUSD prices on
            schedule.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h5 className="font-semibold text-amber-400 mb-2">Automatic Rolling</h5>
          <p className="text-sm text-dark-300">
            Generating new CETs and managing position transitions at expiry
            without manual intervention.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h5 className="font-semibold text-amber-400 mb-2">Matching Services</h5>
          <p className="text-sm text-dark-300">
            Connecting counterparties efficiently in a decentralized marketplace.
          </p>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>Important:</strong> While these intermediaries don't take
          custody of Bitcoin, additional costs are incurred and some privacy
          is lost through their involvement.
        </p>
      </Callout>

      {/* Section 4: Institutional Products */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Future: Institutional Products</h2>

      <p className="my-4">
        The ultimate vision includes Bitcoin-based stable dollar products
        packaged for institutional investors:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Potential ETF Structure</h4>
        <p className="text-dark-300 mb-4">
          Asset managers cannot hold fund assets on centralized exchanges—regulatory
          constraints prevent it. However, by managing assets on-chain via audited
          custodians:
        </p>
        <ul className="text-sm text-dark-300 space-y-2">
          <li>• Legal objections would likely diminish</li>
          <li>• On-chain transparency provides auditability</li>
          <li>• Institutional-grade custody solutions are emerging</li>
          <li>• Jurisdictions friendly to financial innovation may lead adoption</li>
        </ul>
      </div>

      <p className="my-4">
        While such an ETF might not launch tomorrow, the maturation of on-chain
        derivatives markets could incite asset managers to test these concepts
        in appropriate jurisdictions.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>BlinkBTC/Stablesats</strong> offers dollar stability but
              with custodial trade-offs.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>LN Markets and others</strong> are building DLC-based
              non-custodial alternatives.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Service providers</strong> are emerging to handle DLC
              complexity while preserving self-custody.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Institutional products</strong> (including ETFs) may emerge
              as on-chain markets mature.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
