import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function MultihopRouting() {
  return (
    <TranscriptLayout transcriptId="multihop-routing">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>HTLCs enable trustless multi-hop payments</li>
          <li>SPHINX provides source-based onion routing</li>
          <li>Five stages are required for HTLC validity</li>
          <li>Lightning routing is NOT unsolvable (despite myths)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Trustless Multi-Hop Architecture</h3>

      <p className="mb-4">
        Rene Pickhardt debunks common misconceptions:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;People say Lightning routing is unsolvable, that we need big hubs.
          That&apos;s wrong. We have source routing—the sender picks the entire path.
          There&apos;s no central coordinator. It&apos;s not easy, but it&apos;s definitely solvable.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Rene Pickhardt</cite>
      </blockquote>

      <Definition title="Hash Time-Locked Contracts">
        <p>HTLCs are the atomic building blocks of Lightning:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Hash lock:</strong> Requires preimage of hash H to claim</li>
          <li><strong>Time lock:</strong> Refund after timeout T if unclaimed</li>
          <li><strong>Atomicity:</strong> Either all HTLCs in a payment resolve, or none do</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">SPHINX Onion Routing</h3>

      <p className="mb-4">
        Pickhardt explains the privacy layer:
      </p>

      <Example title="Onion Encryption Process">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Sender builds layers:</strong> Starting from recipient, encrypt
            instructions for each hop using ephemeral Diffie-Hellman
          </li>
          <li>
            <strong>Key blinding:</strong> Each hop multiplies the ephemeral public
            key by a blinding factor, unlinking packets
          </li>
          <li>
            <strong>Fixed packet size:</strong> After decryption, filler is added
            to maintain 1300 bytes
          </li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Five Stages of HTLC Validity</h3>

      <p className="mb-4">
        For an HTLC to be considered valid and committed:
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-400 font-bold">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">update_add_htlc</p>
              <p className="text-sm text-dark-400">
                One party proposes the HTLC
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-400 font-bold">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">commitment_signed</p>
              <p className="text-sm text-dark-400">
                Proposer signs the new commitment including the HTLC
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-400 font-bold">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">revoke_and_ack</p>
              <p className="text-sm text-dark-400">
                Receiver revokes their old state and acknowledges
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-400 font-bold">4</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">commitment_signed</p>
              <p className="text-sm text-dark-400">
                Receiver signs their version with the HTLC
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-400 font-bold">5</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">revoke_and_ack</p>
              <p className="text-sm text-dark-400">
                Proposer revokes their old state—HTLC now irrevocably committed
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fee Encoding</h3>

      <p className="mb-4">
        Routing fees are implicit in the forwarding amounts:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;There&apos;s no explicit fee field in the HTLC. Instead, each hop receives more
          than it forwards. The difference is the fee. So if I receive 1010 sats and
          my payload says forward 1000, I keep 10 as my fee.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Rene Pickhardt</cite>
      </blockquote>

      <Definition title="Fee Calculation">
        <p>Total fees for a route:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Base fee:</strong> Fixed amount per forwarded HTLC</li>
          <li><strong>Proportional fee:</strong> Percentage of amount forwarded</li>
          <li><strong>Formula:</strong> fee = base_fee + (amount × fee_rate / 1,000,000)</li>
        </ul>
      </Definition>

      <Callout type="info" title="Routing Myths Debunked">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Myth:</strong> &quot;Lightning needs centralized hubs&quot; — False, source routing is decentralized</li>
          <li><strong>Myth:</strong> &quot;Large payments can&apos;t route&quot; — AMPs allow splitting across paths</li>
          <li><strong>Myth:</strong> &quot;You need all network state&quot; — Trampoline routing delegates pathfinding</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/7"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 7: Channel Operations
          </p>
          <p className="text-sm text-dark-500">HTLC update flow</p>
        </a>
        <a
          href="#/section/18"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 18: Onion Routing
          </p>
          <p className="text-sm text-dark-500">SPHINX packet details</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
