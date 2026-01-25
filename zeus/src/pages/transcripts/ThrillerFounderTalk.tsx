import { Link } from 'react-router-dom';
import { TranscriptLayout } from '@/components/layout';
import { Callout } from '@/components/common/Callout';

export default function ThrillerFounderTalk() {
  return (
    <TranscriptLayout transcriptId="thriller-founder-talk">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Zeus includes a full Point of Sale system with inventory management</li>
          <li>Nostr integration enables personalized contact experiences</li>
          <li>As a solo founder, instinct and core values guide development decisions</li>
          <li>Zeus aims to disrupt traditional finance through accessibility</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Solo Founder Journey</h3>

      <p className="mb-4">
        In this founder-focused interview, Evan Kaloudis shares insights into building Zeus as
        primarily a solo developer. The conversation explores the unique challenges and freedoms
        that come with this approach.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "When you're the only one making decisions, you have to trust your instincts. But those
          instincts need to be grounded in core values that don't change. For Zeus, those values
          are self-custody, privacy, and open source. Everything else can adapt."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Instinct and Core Values</h3>

      <p className="mb-4">
        Kaloudis discusses how he makes product decisions without a large team or extensive
        market research. The key is staying true to core principles while remaining responsive
        to user needs.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-amber-400 mb-3">Decision-Making Framework</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-dark-200 mb-2">Non-Negotiable</p>
            <ul className="space-y-1 text-sm text-dark-300">
              <li>• Self-custody of funds</li>
              <li>• No KYC requirements</li>
              <li>• Open source codebase</li>
              <li>• User privacy</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-dark-200 mb-2">Flexible</p>
            <ul className="space-y-1 text-sm text-dark-300">
              <li>• UI/UX approaches</li>
              <li>• Feature prioritization</li>
              <li>• Integration partners</li>
              <li>• Business model details</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Zeus Point of Sale</h3>

      <p className="mb-4">
        One of the standout features discussed is Zeus's built-in Point of Sale functionality,
        which goes beyond simple payment acceptance to include full inventory management.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Payment Acceptance</p>
          <p className="text-sm text-dark-300">
            Accept Lightning payments from customers with instant settlement. Generate invoices
            on the fly or use preset amounts for common purchases.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Inventory Management</p>
          <p className="text-sm text-dark-300">
            Track stock levels, set prices in sats or fiat, and manage multiple products.
            Perfect for small businesses and pop-up shops.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Sales Reporting</p>
          <p className="text-sm text-dark-300">
            View transaction history, daily totals, and payment analytics directly in the app.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">No Additional Hardware</p>
          <p className="text-sm text-dark-300">
            Turn any phone or tablet into a Bitcoin payment terminal. No dongles, no monthly
            fees, no middleman.
          </p>
        </div>
      </div>

      <Callout type="info" title="Merchant Adoption">
        <p className="mt-2">
          The Point of Sale features are designed to make it as easy as possible for merchants
          to accept Bitcoin. By bundling POS with wallet functionality, Zeus removes barriers
          that often prevent small businesses from accepting cryptocurrency.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Nostr Integration</h3>

      <p className="mb-4">
        Zeus integrates with the Nostr protocol to enable personalized contact management and
        social payment features.
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Nostr Features in Zeus</h4>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">👤</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Contact Import</p>
              <p className="text-sm">Import your Nostr contacts with their profile information</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">📸</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Profile Pictures</p>
              <p className="text-sm">See Nostr profile images in your payment history</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">⚡</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Lightning Address Lookup</p>
              <p className="text-sm">Find lightning addresses from Nostr profiles for easy payments</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">🔐</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Nostr Wallet Connect (NWC)</p>
              <p className="text-sm">Connect your Zeus wallet to Nostr clients for zaps</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Success Metrics</h3>

      <p className="mb-4">
        Kaloudis discusses how he measures success for Zeus, going beyond simple download numbers
        to focus on meaningful user engagement and real-world impact.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Downloads don't mean much if people aren't actually using the app. I care about how
          many people are making payments, how many merchants are accepting Bitcoin, how many
          users are progressing from Cashu to their own channels. That's what matters."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Disruption Potential</h3>

      <p className="mb-4">
        The conversation touches on how Bitcoin wallets like Zeus can disrupt traditional
        payment systems and financial services.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">No Middlemen</p>
          <p className="text-sm text-dark-300">
            Direct peer-to-peer payments without payment processors taking 2-3% of every transaction.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Global Access</p>
          <p className="text-sm text-dark-300">
            Anyone with a smartphone can accept Bitcoin payments, regardless of banking access.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Instant Settlement</p>
          <p className="text-sm text-dark-300">
            Lightning payments settle in seconds, compared to days for traditional card payments.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">No Chargebacks</p>
          <p className="text-sm text-dark-300">
            Merchants don't lose money to fraudulent chargebacks with Bitcoin payments.
          </p>
        </div>
      </div>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Episode Topics</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Solo founder journey and decision making</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Core values and business conviction</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>User growth strategies</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Zeus Point of Sale with inventory</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Nostr integration and social features</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Disruption potential in traditional finance</span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <p className="mb-4">
        Explore these course sections to learn more about Zeus's merchant features:
      </p>

      <div className="grid md:grid-cols-2 gap-3">
        <Link
          to="/section/6"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 6: Point of Sale
          </p>
          <p className="text-sm text-dark-500">Using Zeus for merchant payments</p>
        </Link>
        <Link
          to="/section/7"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 7: Nostr Integration
          </p>
          <p className="text-sm text-dark-500">Social payments with Nostr</p>
        </Link>
      </div>
    </TranscriptLayout>
  );
}
