import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "A complex system that works is invariably found to have evolved from a simple system that worked."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Gall's Law
        </footer>
      </blockquote>

      <Callout type="info">
        <p>
          <strong>TLDR:</strong> In Section 5, we argue that desirable DeFi features will likely emerge
          on Bitcoin. The fact they are taking longer reflects that Bitcoin's architecture has been
          built more robustly — which ironically is what will enable extension of functionality.
        </p>
      </Callout>

      {/* Lightning Network */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Lightning Network</h2>

      <p className="my-4">
        Lightning is a "layer 2" protocol that works by opening bidirectional payment channels between
        users that are eventually settled back to the Bitcoin timechain. It enables:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Fast Payments</h3>
          <p className="text-dark-300 text-sm">
            Near-instantaneous payment routing and settlement across the network.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Privacy by Default</h3>
          <p className="text-dark-300 text-sm">
            Encrypted and onion-routed payment instructions with built-in privacy.
          </p>
        </div>
      </div>

      <p className="my-4">
        A more profound insight: we can think of Lightning "payments" as <strong>payments for encrypted
        and onion-routed data</strong>! This potentially solves the classic problem of who subsidizes
        privacy in distributed systems.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          The ability to build monetary transfer directly into data transfer will prove revolutionary
          for the architecture of the Internet. On a long-enough time horizon, more or less <strong>all
          online data transfer will have a Lightning component</strong>.
        </p>
      </div>

      {/* Liquid */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Liquid Sidechain</h2>

      <p className="my-4">
        Liquid enables extension of Bitcoin functionality using a "sidechain" — consciously trading
        off speed and programmability against decentralization and trustlessness.
      </p>

      <div className="space-y-2 my-6 ml-4">
        <p className="text-dark-300">• 1 minute block times with finality after 2 confirmations</p>
        <p className="text-dark-300">• Fully expressive scripting language for smart contracts</p>
        <p className="text-dark-300">• Asset issuance: stablecoins, game currencies, NFTs, security tokens</p>
        <p className="text-dark-300">• Lightning Networks can be built on top of Liquid Assets</p>
      </div>

      {/* Discreet Log Contracts */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discreet Log Contracts</h2>

      <p className="my-4">
        DLCs provide Bitcoin a way to implement any kind of arbitrarily-defined contract directly
        on the base layer. They use oracles to attest to external events:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200">
          Oracles can attest to anything from who won the Super Bowl, the bitcoin price, or the
          movement of the stars. This provides the means to build not only powerful contract
          structures, but staples of crypto, such as <strong>stablecoins</strong>.
        </p>
      </div>

      {/* RGB */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">RGB Protocol</h2>

      <p className="my-4">
        RGB attempts to keep relevant data about asset transfers and financial contracts outside
        the relatively scarce, expensive, and public global consensus of the Bitcoin timechain,
        validating such data in an off-chain, client-side setting.
      </p>

      <p className="my-4">
        The thinking: miners only really need to include valid transactions, so there may be
        benefits in moving the burden of validation to only those nodes involved in a truly
        peer-to-peer transfer.
      </p>

      {/* Taproot */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Taproot and Beyond</h2>

      <p className="my-4">
        The Taproot protocol upgrade brings the tantalizing prospect of <strong>native and
        programmable asset issuance</strong>. Although the thinking is early stage, if successful:
      </p>

      <Callout type="warning">
        <p className="text-xl font-semibold text-center">
          "You very much will not need a token for that."
        </p>
      </Callout>

      {/* RSK and Stacks */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Smart Contracting Platforms</h2>

      <p className="my-4">
        Several projects are building smart contracting capabilities on Bitcoin:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            RSK
          </span>
          <div>
            <p className="font-semibold text-dark-100">RSK</p>
            <p className="text-sm text-dark-400 mt-1">
              Smart contracting engine forked from Ethereum Virtual Machine, compatible with
              Ethereum-based smart contracts but with Bitcoin's security.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            STX
          </span>
          <div>
            <p className="font-semibold text-dark-100">Stacks</p>
            <p className="text-sm text-dark-400 mt-1">
              Brings Ethereum-like generalized smart contracts to Bitcoin without sacrificing
              Bitcoin's security guarantees.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Lightning</strong> enables fast, private payments and will revolutionize
              internet data transfer.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Liquid</strong> offers programmability and asset issuance with conscious
              security trade-offs.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>DLCs</strong> enable arbitrary contracts using oracle attestations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Taproot</strong> brings native programmable asset issuance — potentially
              eliminating the need for crypto tokens.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
