import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section93() {
  return (
    <LessonLayout sectionId={93}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Future BIP Proposals</h2>

      <p className="mb-4">
        Bitcoin development continues with numerous proposals under discussion. This
        section surveys significant BIPs and protocol ideas that may shape Bitcoin's
        future capabilities.
      </p>

      <Callout type="info" title="Living Document">
        <p>
          Bitcoin's development is ongoing. Proposals discussed here may be activated,
          modified, or superseded. Always check current status at the BIPs repository.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Covenant Proposals</h3>

      <p className="mb-4">
        Covenants restrict how UTXOs can be spent, enabling advanced smart contracts:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">BIP-119: OP_CHECKTEMPLATEVERIFY</p>
          <p className="text-sm text-dark-300 mb-2">
            Commits to spending transaction template. Enables vaults, congestion control,
            payment pools. Simplest covenant proposal.
          </p>
          <p className="text-xs text-dark-500">Status: Proposed, discussion ongoing</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">OP_VAULT (BIP-345)</p>
          <p className="text-sm text-dark-300 mb-2">
            Purpose-built vault opcode with recovery paths, trigger transactions,
            and time-delayed withdrawals. More specialized than CTV.
          </p>
          <p className="text-xs text-dark-500">Status: Draft</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">OP_CAT</p>
          <p className="text-sm text-dark-300 mb-2">
            Concatenate stack elements. Surprisingly powerful: enables covenants,
            STARK verification, and more. Originally disabled in 2010.
          </p>
          <p className="text-xs text-dark-500">Status: Active discussion</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signature Scheme Improvements</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">BIP-118: SIGHASH_ANYPREVOUT</p>
          <p className="text-sm text-dark-300 mb-2">
            Signatures that don't commit to input txid. Enables Eltoo, improved channels,
            better off-chain protocols.
          </p>
          <p className="text-xs text-dark-500">Status: Draft, strong interest</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Cross-Input Signature Aggregation</p>
          <p className="text-sm text-dark-300 mb-2">
            Aggregate all signatures in a transaction into one. Major space savings
            for multi-input transactions.
          </p>
          <p className="text-xs text-dark-500">Status: Research, complex to implement</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Script Improvements</h3>

      <Example title="Proposed Opcodes">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold">OP_CHECKSIGFROMSTACK</p>
            <p className="text-dark-300">Verify signature against arbitrary message</p>
            <p className="text-dark-500">Enables: Oracle integration, covenant tricks</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold">OP_TXHASH</p>
            <p className="text-dark-300">Push transaction hash components to stack</p>
            <p className="text-dark-500">Enables: Flexible covenant construction</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold">64-bit Arithmetic</p>
            <p className="text-dark-300">Proper arithmetic on full 64-bit values</p>
            <p className="text-dark-500">Enables: Safer amount calculations in script</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Enhancements</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>PayJoin adoption:</strong> Wallets implementing BIP-78 for input mixing
          </li>
          <li>
            <strong>Silent Payments:</strong> BIP-352 implementation spreading
          </li>
          <li>
            <strong>CoinJoin improvements:</strong> Protocol enhancements for efficiency
          </li>
          <li>
            <strong>Encrypted mempool:</strong> Hide transaction details until mined
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning Evolution</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Lightning improvements in progress:</p>
        <p className="text-dark-300">PTLCs: Point Time-Locked Contracts (better than HTLCs)</p>
        <p className="text-dark-300">Splicing: Resize channels without closing</p>
        <p className="text-dark-300">Dual-funding: Both parties contribute to channel</p>
        <p className="text-dark-300">Offers: Reusable payment requests (BOLT 12)</p>
        <p className="text-dark-300">Channel factories: Shared UTXOs (needs APO?)</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Scaling Research</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Approach</th>
              <th className="text-left py-3 text-dark-300">Mechanism</th>
              <th className="text-left py-3 text-dark-300">Status</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">BitVM</td>
              <td>Optimistic verification of arbitrary computation</td>
              <td>Research</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">Validity Rollups</td>
              <td>ZK proofs for off-chain state</td>
              <td>Research</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">Ark</td>
              <td>Virtual UTXOs with periodic settlement</td>
              <td>Proposal</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">Spacechains</td>
              <td>One-way pegged perpetual sidechains</td>
              <td>Concept</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Activation Considerations</h3>

      <Callout type="warning" title="Soft Fork Activation">
        <p>
          After the Taproot activation debates, the community continues to discuss
          how to activate future soft forks:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Speedy Trial for less controversial changes</li>
          <li>BIP-8 LOT=true/false debates</li>
          <li>Consensus on "readiness" criteria</li>
          <li>Multiple proposals may be bundled</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Community Process</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">How proposals advance:</p>
        <div className="space-y-2 text-dark-300">
          <p>1. <strong>Research:</strong> Academic papers, mailing list discussion</p>
          <p>2. <strong>BIP draft:</strong> Formal specification written</p>
          <p>3. <strong>Implementation:</strong> Reference code, testing</p>
          <p>4. <strong>Review:</strong> Community feedback, security analysis</p>
          <p>5. <strong>Consensus:</strong> Broad agreement on desirability</p>
          <p>6. <strong>Activation:</strong> Miner/node signaling, deployment</p>
        </div>
      </div>

      <Callout type="success" title="Continuous Innovation">
        <p>
          Bitcoin's development may be conservative, but it's not stagnant. Each proposal
          is carefully evaluated for security, decentralization impact, and usefulness.
          The BIPs covered in this course provide the foundation for understanding
          future developments—the principles remain constant even as capabilities expand.
        </p>
      </Callout>
    </LessonLayout>
  );
}
