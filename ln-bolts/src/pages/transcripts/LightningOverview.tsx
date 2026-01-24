import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function LightningOverview() {
  return (
    <TranscriptLayout transcriptId="lightning-overview">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>AMPs split payments across multiple paths for better liquidity usage</li>
          <li>Splicing allows adding/removing funds without closing channels</li>
          <li>Watchtowers protect your channels while you&apos;re offline</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Atomic Multipath Payments (AMPs)</h3>

      <p className="mb-4">
        Conner Fromknecht explains how AMPs improve payment reliability:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Without multipath, you need to find one path with enough capacity for your
          entire payment. With AMPs, you can split a 1 BTC payment into ten 0.1 BTC parts
          and send them through different routes. Much more likely to succeed.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Conner Fromknecht</cite>
      </blockquote>

      <Definition title="AMP Properties">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Atomic:</strong> Either all parts arrive or none do</li>
          <li><strong>Decorrelated:</strong> Each part has a different payment hash</li>
          <li><strong>Secret-based:</strong> Recipient derives preimages from shared secret</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Splicing</h3>

      <p className="mb-4">
        Splicing solves the channel management problem:
      </p>

      <Example title="Splice Operations">
        <div className="space-y-3">
          <div>
            <p className="text-amber-400 font-semibold">Splice-In</p>
            <p className="text-sm text-dark-400">
              Add more funds to an existing channel without closing it.
              Your channel stays operational throughout.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-semibold">Splice-Out</p>
            <p className="text-sm text-dark-400">
              Remove funds from a channel to an on-chain address.
              Send to cold storage without losing your channel.
            </p>
          </div>
        </div>
      </Example>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Splicing is like making a deposit or withdrawal from your checking account.
          You don&apos;t close the account—you just change the balance. Same with channels.
          One on-chain transaction, and your channel continues operating with more or less capacity.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Conner Fromknecht</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Watchtowers</h3>

      <p className="mb-4">
        Watchtowers solve the &quot;always online&quot; requirement:
      </p>

      <Definition title="Watchtower Service">
        <p>A watchtower monitors your channels while you&apos;re offline:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>You give the watchtower encrypted &quot;justice transactions&quot;</li>
          <li>Watchtower monitors the blockchain for revoked states</li>
          <li>If counterparty cheats, watchtower broadcasts your justice transaction</li>
          <li>Your funds are safe even if you&apos;re offline for days</li>
        </ol>
      </Definition>

      <Callout type="info" title="Privacy Preservation">
        <p>
          Clever cryptography lets watchtowers do their job without learning
          your channel details. They receive encrypted blobs that only become
          decryptable if a specific (cheating) transaction appears on-chain.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Payment Channels Fundamentals</h3>

      <p className="mb-4">
        Fromknecht explains the core concept:
      </p>

      <Example title="2-of-2 Multisig Channel">
        <div className="space-y-3">
          <div>
            <p className="text-dark-300">
              <strong>Funding Output:</strong> A 2-of-2 multisig that requires both
              Alice and Bob to sign any spending transaction.
            </p>
          </div>
          <div>
            <p className="text-dark-300">
              <strong>Commitment Transaction:</strong> Pre-signed transaction that
              distributes the channel balance. Each party holds their own version.
            </p>
          </div>
          <div>
            <p className="text-dark-300">
              <strong>Update:</strong> Create new commitment transactions, exchange
              revocation keys for old ones.
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/5"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 5: Channel Establishment
          </p>
          <p className="text-sm text-dark-500">Opening and funding channels</p>
        </a>
        <a
          href="#/section/10"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 10: Commitment Transactions
          </p>
          <p className="text-sm text-dark-500">Channel state representation</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
