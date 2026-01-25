import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section91() {
  return (
    <LessonLayout sectionId={91}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Fedimint and Chaumian E-Cash</h2>

      <p className="mb-4">
        Fedimint brings Chaumian e-cash to Bitcoin, enabling private, scalable payments
        within federated custody. It represents a unique point in the trust-privacy-usability
        design space for Bitcoin.
      </p>

      <Callout type="info" title="Federation Trade-off">
        <p>
          Fedimint trades full self-custody for dramatic improvements in privacy,
          scalability, and user experience—while distributing trust across multiple
          guardians instead of a single custodian.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Chaumian E-Cash Background</h3>

      <Definition title="Chaumian E-Cash">
        <p>
          A digital cash system invented by David Chaum in 1982 using blind signatures.
          The issuer signs tokens without seeing their content, enabling unlinkable
          payments while preventing double-spending.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Blind signature flow:</p>
        <p className="text-dark-300">1. User creates token, blinds it (adds random factor)</p>
        <p className="text-dark-300">2. Mint signs blinded token (can't see content)</p>
        <p className="text-dark-300">3. User unblinds → valid signed token</p>
        <p className="text-dark-300">4. User spends token, mint verifies signature</p>
        <p className="text-amber-400 mt-3">Mint cannot link issuance to redemption!</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fedimint Architecture</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-amber-400 font-bold">Federation</p>
            <p className="text-sm text-dark-300">
              A group of guardians (typically 4-7) who jointly control Bitcoin in
              multisig and run the e-cash mint. Threshold required for all operations.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-bold">E-Cash Tokens</p>
            <p className="text-sm text-dark-300">
              Bearer instruments representing claims on the federation's Bitcoin.
              Issued via blind signatures, redeemed by revealing to federation.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-bold">Lightning Gateway</p>
            <p className="text-sm text-dark-300">
              Special nodes that bridge Fedimint to Lightning Network, enabling
              payments to any Lightning recipient.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How It Works</h3>

      <Example title="Fedimint Payment Flow">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Deposit:</p>
            <p className="text-dark-300">User sends BTC to federation multisig</p>
            <p className="text-dark-300">Federation issues e-cash tokens to user</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Internal payment (e-cash):</p>
            <p className="text-dark-300">Alice gives e-cash tokens to Bob</p>
            <p className="text-dark-300">Bob redeems old tokens, gets new tokens</p>
            <p className="text-emerald-400">Federation can't link Alice → Bob!</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># External payment (Lightning):</p>
            <p className="text-dark-300">Alice gives e-cash to Lightning gateway</p>
            <p className="text-dark-300">Gateway pays Lightning invoice</p>
            <p className="text-dark-300">Atomic swap: e-cash ↔ Lightning HTLC</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Model</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Privacy From</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Federation (blind signatures)</li>
            <li>Other users</li>
            <li>Outside observers</li>
            <li>Lightning routing nodes</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Federation Knows</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Total deposits/withdrawals per user</li>
            <li>Total e-cash in circulation</li>
            <li>Lightning gateway activity</li>
            <li>Not: internal e-cash transfers</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Trust Model</h3>

      <Callout type="warning" title="Custodial Trade-off">
        <p>
          Fedimint is custodial—the federation holds the Bitcoin. The trust is
          distributed:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Threshold (e.g., 3-of-5) needed to move funds</li>
          <li>Guardians ideally independent, geographically distributed</li>
          <li>No single point of failure</li>
          <li>But: colluding threshold can steal</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Community Banks</p>
          <p className="text-sm text-dark-300">
            Local communities run federations for members. Guardians are known
            community members with reputation at stake.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Family/Business</p>
          <p className="text-sm text-dark-300">
            Family members or business partners as guardians. Shared custody
            with privacy between members.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Onboarding</p>
          <p className="text-sm text-dark-300">
            Simpler UX for new users who find self-custody daunting. Bridge
            to full sovereignty over time.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Comparison</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Property</th>
              <th className="text-left py-3 text-dark-300">Lightning</th>
              <th className="text-left py-3 text-dark-300">Fedimint</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Custody</td>
              <td className="text-emerald-400">Self-custody</td>
              <td className="text-amber-400">Federated</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Payment privacy</td>
              <td>Routing nodes see hops</td>
              <td className="text-emerald-400">Unlinkable (blind sig)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">User complexity</td>
              <td>Manage channels, liquidity</td>
              <td className="text-emerald-400">Just hold tokens</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Online requirement</td>
              <td>Watch for breaches</td>
              <td className="text-emerald-400">None (bearer tokens)</td>
            </tr>
            <tr>
              <td className="py-3">Scalability</td>
              <td>Channel capacity</td>
              <td className="text-emerald-400">Unlimited tokens</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Technical Features</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Fedimint modules:</p>
        <p className="text-dark-300">mint: E-cash issuance and redemption</p>
        <p className="text-dark-300">wallet: Bitcoin deposit/withdrawal</p>
        <p className="text-dark-300">ln: Lightning gateway integration</p>
        <p className="text-dark-300">consensus: Byzantine fault-tolerant agreement</p>
        <p className="text-dark-500 mt-3">
          Modular architecture allows custom modules
        </p>
      </div>

      <Callout type="success" title="Privacy at Scale">
        <p>
          Fedimint offers a compelling trade-off for users who prioritize privacy
          and usability. By accepting federated custody, users gain payment privacy
          superior to on-chain Bitcoin and simpler UX than Lightning—while trust is
          distributed rather than centralized. It's a practical stepping stone toward
          full sovereignty.
        </p>
      </Callout>
    </LessonLayout>
  );
}
