import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-78: Payjoin</h2>

      <p className="mb-4">
        BIP-78 specifies Payjoin (also known as Pay-to-Endpoint or P2EP), a protocol that
        improves privacy by having the receiver contribute inputs to a transaction. This
        breaks the common assumption that all inputs come from the sender.
      </p>

      <Callout type="info" title="Privacy Enhancement">
        <p>
          Payjoin defeats chain analysis heuristics by making it ambiguous who owns which
          inputs. It's a practical privacy tool that doesn't require any consensus changes.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Standard Bitcoin transactions leak information:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <p className="text-rose-400 font-bold mb-2">Common Input Ownership Heuristic</p>
        <p className="text-dark-300 mb-3">
          Chain analysis assumes all inputs to a transaction belong to the same entity.
          This is usually true and enables tracking funds across the blockchain.
        </p>
        <div className="font-mono text-xs text-dark-400">
          <p>Input 1 (Alice) ─┐</p>
          <p>Input 2 (Alice) ─┼─→ Output (Bob) + Change (Alice)</p>
          <p>Input 3 (Alice) ─┘</p>
        </div>
        <p className="text-dark-500 text-sm mt-2">
          Analysts conclude: Alice controls inputs 1, 2, 3 and the change output
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Payjoin Solution</h3>

      <Definition title="Payjoin">
        <p>
          A transaction construction protocol where the receiver adds their own input(s)
          to the transaction. The resulting transaction looks like a regular payment but
          breaks the common input ownership assumption.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Payjoin transaction:</p>
        <p className="text-dark-300">Input 1 (Alice) ─┐</p>
        <p className="text-amber-400">Input 2 (Bob)   ─┼─→ Output (Bob) + Change (Alice)</p>
        <p className="text-dark-300">Input 3 (Alice) ─┘</p>
        <p className="text-dark-500 mt-3">
          Analysts can't distinguish this from a regular 3-input payment!
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Flow</h3>

      <Example title="BIP-78 Payjoin Flow">
        <div className="space-y-3 text-dark-300">
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              <strong>Sender:</strong> Creates a standard transaction paying receiver
            </li>
            <li>
              <strong>Sender:</strong> Sends unsigned PSBT to receiver's Payjoin endpoint
            </li>
            <li>
              <strong>Receiver:</strong> Adds their input(s) to the PSBT
            </li>
            <li>
              <strong>Receiver:</strong> Adjusts outputs (adds their input value to payment)
            </li>
            <li>
              <strong>Receiver:</strong> Signs their inputs, returns modified PSBT
            </li>
            <li>
              <strong>Sender:</strong> Validates changes, signs their inputs
            </li>
            <li>
              <strong>Sender:</strong> Broadcasts the combined transaction
            </li>
          </ol>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-21 Integration</h3>

      <p className="mb-4">
        BIP-78 adds the "pj" parameter to BIP-21 URIs:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Payjoin-enabled URI:</p>
        <p className="text-dark-300 break-all">
          bitcoin:bc1qxxx...?amount=0.01&pj=https://merchant.com/pj
        </p>
        <p className="text-dark-500 mt-3">
          Wallets supporting Payjoin will use the endpoint; others fall back to regular payment
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sender Verification</h3>

      <Callout type="warning" title="Critical Checks">
        <p>
          The sender must verify the receiver's modifications are safe:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Original payment output still present (same amount or more)</li>
          <li>Change output unchanged or improved for sender</li>
          <li>No unexpected outputs added</li>
          <li>Fee increase is reasonable</li>
          <li>Receiver's inputs are valid UTXOs</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">PSBT Version 2</h3>

      <p className="mb-4">
        BIP-78 works best with PSBT v2 (BIP-370) which allows:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Adding inputs without having the full transaction structure upfront</li>
          <li>Modifying outputs after initial creation</li>
          <li>More natural representation of collaborative construction</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Benefits</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">For Sender</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Input ownership ambiguity</li>
            <li>Change output harder to identify</li>
            <li>UTXOs consolidated with receiver's</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">For Receiver</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Consolidate UTXOs invisibly</li>
            <li>Received amount not obvious</li>
            <li>Transaction history obscured</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Network Effect</h3>

      <p className="mb-4">
        Payjoin benefits all Bitcoin users:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-300 mb-3">
          Even if only 10% of transactions use Payjoin, the common input ownership
          heuristic becomes unreliable for ALL transactions. Analysts can never be
          certain if a transaction is a regular payment or a Payjoin.
        </p>
        <p className="text-emerald-400 text-sm">
          Every Payjoin transaction improves privacy for the entire network.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">BTCPay Server</p>
          <p className="text-sm text-dark-300">
            Popular merchant solution with built-in Payjoin support for receiving payments.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Wasabi Wallet</p>
          <p className="text-sm text-dark-300">
            Privacy-focused wallet supporting Payjoin for both sending and receiving.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Sparrow Wallet</p>
          <p className="text-sm text-dark-300">
            Desktop wallet with Payjoin send support when paying to compatible receivers.
          </p>
        </div>
      </div>

      <Callout type="success" title="No Consensus Required">
        <p>
          Payjoin is purely a wallet-level protocol—no soft fork or consensus changes
          needed. Any wallet can implement it today. The resulting transactions are
          standard Bitcoin transactions that work with all nodes and explorers.
        </p>
      </Callout>
    </LessonLayout>
  );
}
