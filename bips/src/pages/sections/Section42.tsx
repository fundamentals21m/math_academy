import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Partially Signed Bitcoin Transactions (PSBT)</h2>

      <p className="mb-4">
        BIP-174 defines the Partially Signed Bitcoin Transaction format—a standardized way
        to create, pass around, and sign Bitcoin transactions across different wallets and
        devices. PSBT enables multi-party signing workflows and hardware wallet integration.
      </p>

      <Callout type="info" title="Universal Format">
        <p>
          PSBT is the lingua franca of Bitcoin transaction construction. It allows any
          wallet to create an unsigned transaction, pass it to any signing device, and
          have any finalizer broadcast it—all using a single standard format.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Before PSBT, multi-device signing was challenging:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>No standard for passing unsigned transactions between software</li>
          <li>Hardware wallets needed custom integrations with each software wallet</li>
          <li>Multisig required manual coordination of partial signatures</li>
          <li>No way to include metadata needed for signing (UTXO amounts, scripts)</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">PSBT Structure</h3>

      <Definition title="PSBT Components">
        <p>A PSBT contains three main sections:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Global:</strong> Unsigned transaction, xpubs, version</li>
          <li><strong>Per-Input:</strong> UTXO data, partial signatures, scripts, paths</li>
          <li><strong>Per-Output:</strong> Scripts, derivation paths for change detection</li>
        </ul>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-xs mb-6">
        <p className="text-dark-400 mb-2"># PSBT binary structure</p>
        <div className="space-y-1 text-dark-300">
          <p><span className="text-purple-400">"psbt"</span> - Magic bytes (0x70736274)</p>
          <p><span className="text-purple-400">0xff</span> - Separator</p>
          <p><span className="text-amber-400">&lt;global map&gt;</span></p>
          <p><span className="text-emerald-400">&lt;input map&gt;</span> × num_inputs</p>
          <p><span className="text-blue-400">&lt;output map&gt;</span> × num_outputs</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key-Value Maps</h3>

      <p className="mb-4">
        Each section is a map of key-value pairs:
      </p>

      <Example title="Important PSBT Fields">
        <div className="space-y-4 text-sm">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold mb-2">Global</p>
            <ul className="space-y-1 text-dark-300">
              <li>PSBT_GLOBAL_UNSIGNED_TX (0x00): The transaction to sign</li>
              <li>PSBT_GLOBAL_XPUB (0x01): Extended public keys used</li>
              <li>PSBT_GLOBAL_VERSION (0xfb): PSBT version number</li>
            </ul>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-emerald-400 font-bold mb-2">Per-Input</p>
            <ul className="space-y-1 text-dark-300">
              <li>PSBT_IN_WITNESS_UTXO (0x01): SegWit previous output</li>
              <li>PSBT_IN_PARTIAL_SIG (0x02): Partial signatures</li>
              <li>PSBT_IN_BIP32_DERIVATION (0x06): Key derivation paths</li>
              <li>PSBT_IN_FINAL_SCRIPTSIG (0x07): Finalized scriptSig</li>
            </ul>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-blue-400 font-bold mb-2">Per-Output</p>
            <ul className="space-y-1 text-dark-300">
              <li>PSBT_OUT_REDEEM_SCRIPT (0x00): P2SH redeem script</li>
              <li>PSBT_OUT_BIP32_DERIVATION (0x02): Key paths (for change)</li>
            </ul>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">PSBT Workflow</h3>

      <p className="mb-4">
        A typical PSBT moves through these roles:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-1">1. Creator</p>
          <p className="text-sm text-dark-300">
            Creates the PSBT with the unsigned transaction. Adds inputs and outputs.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-1">2. Updater</p>
          <p className="text-sm text-dark-300">
            Adds UTXO data, scripts, and derivation paths needed for signing.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-blue-400 font-bold mb-1">3. Signer(s)</p>
          <p className="text-sm text-dark-300">
            Adds partial signatures for inputs they can sign. May be multiple parties.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-purple-500">
          <p className="text-purple-400 font-bold mb-1">4. Combiner</p>
          <p className="text-sm text-dark-300">
            Merges PSBTs from multiple signers into one with all signatures.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-rose-500">
          <p className="text-rose-400 font-bold mb-1">5. Finalizer</p>
          <p className="text-sm text-dark-300">
            Converts partial signatures into final scriptSig/witness. Creates broadcast-ready tx.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Encoding</h3>

      <p className="mb-4">
        PSBTs are typically encoded as Base64 for text transmission:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-xs mb-6 break-all">
        <p className="text-dark-400 mb-2"># Example PSBT (Base64)</p>
        <p className="text-amber-400">
          cHNidP8BAHUCAAAAASaBcTce3/KF6Tig7cez36M/gAtAqLMIXlJHKr0AAAAAFxZWC...
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multisig Example</h3>

      <Example title="2-of-3 Multisig Signing">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            <strong>Creator:</strong> Wallet creates PSBT with unsigned tx
          </li>
          <li>
            <strong>Updater:</strong> Adds UTXOs, redeemScript, and derivation paths
          </li>
          <li>
            <strong>Signer 1:</strong> Hardware wallet A adds partial signature
          </li>
          <li>
            <strong>Signer 2:</strong> Hardware wallet B adds partial signature
          </li>
          <li>
            <strong>Combiner:</strong> Merge both partially-signed PSBTs
          </li>
          <li>
            <strong>Finalizer:</strong> Create final multisig witness
          </li>
          <li>
            <strong>Broadcast:</strong> Submit to network
          </li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hardware Wallet Integration</h3>

      <Callout type="success" title="Universal Compatibility">
        <p>
          PSBT enables any wallet to work with any hardware signer:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Sparrow → Coldcard/Ledger/Trezor</li>
          <li>Bitcoin Core → Any PSBT-compatible device</li>
          <li>Specter → Multiple hardware wallets simultaneously</li>
        </ul>
        <p className="mt-2">
          The PSBT contains everything the signer needs—no proprietary protocols required.
        </p>
      </Callout>

      <Callout type="info" title="Continued in BIP-370">
        <p>
          PSBT version 0 (this BIP) has limitations addressed by PSBT version 2 (BIP-370).
          Version 2 supports transaction modification during the signing process and
          is better suited for collaborative transactions like CoinJoin.
        </p>
      </Callout>
    </LessonLayout>
  );
}
