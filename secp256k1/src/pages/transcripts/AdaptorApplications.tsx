import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function AdaptorApplications() {
  return (
    <TranscriptLayout transcriptId="adaptor-applications">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Discreet Log Contracts (DLCs) use adaptor signatures for trustless betting</li>
          <li>Oracle attestations become the adaptor secret</li>
          <li>Contracts are indistinguishable from regular 2-of-2 multisig on-chain</li>
          <li>Enables derivatives, prediction markets, and insurance without custody</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What Are DLCs?</h3>

      <p className="mb-4">
        Nadav Kohen explains Discreet Log Contracts:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "A DLC is a smart contract where the outcome depends on real-world data—like
          a sports score or Bitcoin's price. But unlike Ethereum, everything happens
          off-chain until settlement. The oracle never even knows the contract exists."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Nadav Kohen</cite>
      </blockquote>

      <Definition title="Discreet Log Contract">
        <p>
          A DLC between Alice and Bob with oracle O:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Fund a 2-of-2 multisig with their capital</li>
          <li>Pre-sign all possible outcomes using adaptor signatures</li>
          <li>The adaptor secret for each outcome is the oracle's attestation</li>
        </ul>
        <p className="mt-3">
          When the oracle publishes result <InlineMath>r</InlineMath>, it implicitly reveals
          the secret <InlineMath>t_r</InlineMath> that completes the corresponding adaptor.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Oracle Attestations</h3>

      <p className="mb-4">
        The oracle protocol is designed for privacy:
      </p>

      <Example title="Oracle Commitment Scheme">
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-dark-100">Announcement</p>
            <p className="text-sm text-dark-300 mt-1">
              Oracle publishes <InlineMath>R = kG</InlineMath> (nonce point) and event description
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Possible Outcomes</p>
            <p className="text-sm text-dark-300 mt-1">
              For each outcome <InlineMath>i</InlineMath>, the attestation point is:
            </p>
            <MathBlock>
              {`T_i = R + H(R \\| i) \\cdot P_{oracle}`}
            </MathBlock>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Attestation</p>
            <p className="text-sm text-dark-300 mt-1">
              Oracle reveals <InlineMath>{`s_i = k + H(R \\| i) \\cdot d_{oracle}`}</InlineMath> for winning outcome
            </p>
          </div>
        </div>
        <p className="mt-3 text-dark-400">
          The oracle never sees the contract—it just signs outcomes it was already
          committed to sign.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">DLC Protocol Flow</h3>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Bitcoin Price Bet: Alice vs Bob</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Fund</p>
              <p className="text-sm text-dark-400">
                Both deposit 1 BTC into 2-of-2 multisig
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Contract Setup</p>
              <p className="text-sm text-dark-400">
                Exchange adaptor signatures for all price outcomes:
                <br />
                • If BTC {">"} $50k: Alice gets 2 BTC
                <br />
                • If BTC ≤ $50k: Bob gets 2 BTC
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Oracle Attestation</p>
              <p className="text-sm text-dark-400">
                Oracle publishes BTC price = $52,000 with attestation
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-green-400 font-bold">4</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Settlement</p>
              <p className="text-sm text-dark-400">
                Alice uses attestation to complete her adaptor, claims 2 BTC
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Properties</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Contract Privacy</p>
          <p className="text-sm text-dark-300">
            The funding tx is a standard 2-of-2. Settlement looks like a cooperative
            close. No one can tell it's a DLC.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Oracle Privacy</p>
          <p className="text-sm text-dark-300">
            Oracle doesn't know who uses its attestations or for what.
            Can't censor specific contracts.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Amount Privacy</p>
          <p className="text-sm text-dark-300">
            Contract amounts aren't revealed unless you know the payout
            structure in advance.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Counterparty Privacy</p>
          <p className="text-sm text-dark-300">
            With Taproot, even the number of participants is hidden.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <p className="mb-4">
        Nadav discusses practical applications:
      </p>

      <Example title="DLC Applications">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Synthetic assets:</strong> Exposure to stocks, commodities, or forex
            without leaving Bitcoin
          </li>
          <li>
            <strong>Sports betting:</strong> Peer-to-peer wagers on games
          </li>
          <li>
            <strong>Insurance:</strong> Weather derivatives for farmers
          </li>
          <li>
            <strong>Stablecoins:</strong> Algorithmic USD exposure via BTC collateral
          </li>
          <li>
            <strong>Options/Futures:</strong> Decentralized derivatives markets
          </li>
        </ul>
      </Example>

      <Callout type="warning" title="Oracle Trust">
        <p>
          DLCs don't eliminate trust—they minimize it. You still trust the oracle
          to attest honestly. Mitigations include:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Multiple oracles with threshold attestation</li>
          <li>Oracle reputation systems</li>
          <li>Fraud proofs with bonds</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Numeric Outcomes</h3>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "For numeric outcomes like 'BTC price,' you don't need a separate adaptor
          for every dollar amount. We use digit decomposition—sign adaptors for each
          digit position, exponentially reducing the number of signatures needed."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Nadav Kohen</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/adaptor-intro"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-cyan-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-cyan-400 transition-colors">
            Introduction to Adaptor Signatures
          </p>
          <p className="text-sm text-dark-500">Foundational concepts</p>
        </a>
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">Mathematical foundation</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
