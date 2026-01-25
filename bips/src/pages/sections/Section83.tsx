import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section83() {
  return (
    <LessonLayout sectionId={83}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Introduction to Layer 2 Solutions</h2>

      <p className="mb-4">
        Layer 2 solutions build on top of Bitcoin's base layer to enable faster, cheaper,
        and more scalable transactions while inheriting Bitcoin's security. This section
        introduces the concepts and motivations behind Layer 2 development.
      </p>

      <Callout type="info" title="Why Layer 2?">
        <p>
          Bitcoin's base layer prioritizes security and decentralization over throughput.
          Layer 2 protocols provide scalability without compromising these core properties.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Scalability Trilemma</h3>

      <Definition title="Blockchain Trilemma">
        <p>
          The observation that blockchain systems struggle to optimize all three of:
          security, decentralization, and scalability. Improving one often comes at the
          cost of another.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Bitcoin's base layer choices:</p>
        <p className="text-emerald-400">Security: ✓ Maximum (proof-of-work, full validation)</p>
        <p className="text-emerald-400">Decentralization: ✓ High (anyone can run a node)</p>
        <p className="text-amber-400">Scalability: Limited (~7 tx/sec, 10-min blocks)</p>
        <p className="text-dark-500 mt-3">
          Layer 2 adds scalability without compromising L1
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Layer 2 Categories</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Payment Channels</p>
          <p className="text-sm text-dark-300">
            Two parties lock funds on-chain, transact off-chain, settle final state on-chain.
            Lightning Network is the primary example.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Sidechains</p>
          <p className="text-sm text-dark-300">
            Separate blockchains pegged to Bitcoin. Assets move between chains via
            two-way pegs (federated or trustless).
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Statechains</p>
          <p className="text-sm text-dark-300">
            Transfer entire UTXO ownership off-chain using cryptographic key handoffs.
            No on-chain footprint between transfers.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Client-Side Validation</p>
          <p className="text-sm text-dark-300">
            Assets and state validated by recipients rather than global consensus.
            RGB protocol is the primary example.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Enabling Technologies</h3>

      <p className="mb-4">
        Layer 2 solutions rely on Bitcoin script capabilities:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Technology</th>
              <th className="text-left py-3 text-dark-300">BIP</th>
              <th className="text-left py-3 text-dark-300">Enables</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">CLTV</td>
              <td>BIP-65</td>
              <td>Time-locked refunds</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">CSV</td>
              <td>BIP-68/112</td>
              <td>Relative timelocks, revocation</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">SegWit</td>
              <td>BIP-141</td>
              <td>Malleability fix, commitment txs</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">Taproot</td>
              <td>BIP-341</td>
              <td>Privacy, complex scripts</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">Schnorr</td>
              <td>BIP-340</td>
              <td>MuSig, adapter signatures</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Trust Models</h3>

      <Example title="Layer 2 Trust Spectrum">
        <div className="space-y-3 text-dark-300">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-emerald-400 font-bold mb-2">Trustless (Lightning)</p>
            <p className="text-sm">
              Can always exit to L1 unilaterally. No trusted third parties.
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold mb-2">Trust-minimized (Statechains)</p>
            <p className="text-sm">
              Operator can't steal funds but could refuse cooperation.
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-rose-400 font-bold mb-2">Federated (Liquid, Fedimint)</p>
            <p className="text-sm">
              Trust distributed among known entities. Threshold required for theft.
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Trade-offs</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">Layer 2 solutions involve trade-offs:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Liveness requirements:</strong> Must be online to protect funds (Lightning)
          </li>
          <li>
            <strong>Liquidity lockup:</strong> Funds committed to specific channels/contracts
          </li>
          <li>
            <strong>Complexity:</strong> More moving parts than simple on-chain transactions
          </li>
          <li>
            <strong>Interoperability:</strong> Different L2s don't naturally communicate
          </li>
        </ul>
      </div>

      <Callout type="success" title="Foundation for Scaling">
        <p>
          Layer 2 solutions represent Bitcoin's scaling roadmap—achieving millions of
          transactions per second while preserving the security and decentralization
          that make Bitcoin valuable. The following sections explore specific L2
          protocols in depth.
        </p>
      </Callout>
    </LessonLayout>
  );
}
