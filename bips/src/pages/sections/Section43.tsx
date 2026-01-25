import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-370: PSBT Version 2</h2>

      <p className="mb-4">
        BIP-370 introduces PSBT version 2, a significant evolution of the Partially Signed
        Bitcoin Transaction format. It enables more flexible transaction construction workflows
        and better supports interactive protocols like coinjoin and payjoin.
      </p>

      <Callout type="info" title="Evolution of PSBT">
        <p>
          While PSBT v0 (BIP-174) was revolutionary, it assumed a fixed transaction structure
          from the start. PSBT v2 allows inputs and outputs to be added incrementally, enabling
          new collaborative transaction-building protocols.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Differences from v0</h3>

      <Definition title="PSBT Version 2">
        <p>
          PSBT v2 moves the unsigned transaction into per-input and per-output fields,
          allowing the transaction to be modified during construction. The global unsigned
          transaction field becomes optional.
        </p>
      </Definition>

      <div className="grid md:grid-cols-2 gap-4 mb-6 mt-4">
        <div className="bg-dark-800 rounded-lg p-4 border border-dark-700/50">
          <p className="text-amber-400 font-bold mb-2">PSBT v0</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Global unsigned TX required</li>
            <li>Transaction structure fixed upfront</li>
            <li>Inputs/outputs cannot be added later</li>
            <li>Linear construction flow</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">PSBT v2</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>No global unsigned TX</li>
            <li>Transaction built from fields</li>
            <li>Inputs/outputs can be added anytime</li>
            <li>Flexible construction flow</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">New Global Fields</h3>

      <p className="mb-4">
        PSBT v2 introduces new global fields for transaction-level data:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Field</th>
              <th className="text-left py-3 text-dark-300">Key Type</th>
              <th className="text-left py-3 text-dark-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">PSBT_GLOBAL_TX_VERSION</td>
              <td className="font-mono">0x02</td>
              <td>Transaction version (required)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">PSBT_GLOBAL_FALLBACK_LOCKTIME</td>
              <td className="font-mono">0x03</td>
              <td>Default locktime</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">PSBT_GLOBAL_INPUT_COUNT</td>
              <td className="font-mono">0x04</td>
              <td>Number of inputs</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">PSBT_GLOBAL_OUTPUT_COUNT</td>
              <td className="font-mono">0x05</td>
              <td>Number of outputs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">New Input Fields</h3>

      <p className="mb-4">
        Each input now contains the data previously in the unsigned transaction:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Per-input fields</p>
        <p className="text-amber-400">PSBT_IN_PREVIOUS_TXID (0x0e)</p>
        <p className="text-dark-500 ml-4">32-byte txid of the UTXO being spent</p>
        <p className="text-amber-400 mt-2">PSBT_IN_OUTPUT_INDEX (0x0f)</p>
        <p className="text-dark-500 ml-4">Output index within the previous transaction</p>
        <p className="text-amber-400 mt-2">PSBT_IN_SEQUENCE (0x10)</p>
        <p className="text-dark-500 ml-4">Sequence number for this input</p>
        <p className="text-amber-400 mt-2">PSBT_IN_REQUIRED_TIME_LOCKTIME (0x11)</p>
        <p className="text-dark-500 ml-4">Minimum locktime (time-based)</p>
        <p className="text-amber-400 mt-2">PSBT_IN_REQUIRED_HEIGHT_LOCKTIME (0x12)</p>
        <p className="text-dark-500 ml-4">Minimum locktime (height-based)</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">New Output Fields</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Per-output fields</p>
        <p className="text-amber-400">PSBT_OUT_AMOUNT (0x03)</p>
        <p className="text-dark-500 ml-4">Output value in satoshis</p>
        <p className="text-amber-400 mt-2">PSBT_OUT_SCRIPT (0x04)</p>
        <p className="text-dark-500 ml-4">ScriptPubKey for this output</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Construction Flow</h3>

      <Example title="PSBT v2 Construction">
        <div className="space-y-3 text-dark-300">
          <p className="text-dark-400 mb-2">A flexible multi-party transaction:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong>Creator:</strong> Initialize empty PSBT v2 with version fields</li>
            <li><strong>Party A:</strong> Add their input(s) with prevout data</li>
            <li><strong>Party B:</strong> Add their input(s) and output(s)</li>
            <li><strong>Coordinator:</strong> Add change output, finalize structure</li>
            <li><strong>All parties:</strong> Sign their respective inputs</li>
            <li><strong>Finalizer:</strong> Combine signatures, extract TX</li>
          </ol>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Locktime Handling</h3>

      <p className="mb-4">
        PSBT v2 improves locktime handling with explicit per-input requirements:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-300 mb-3">
          Each input can specify minimum required locktimes. The final transaction locktime
          must satisfy all inputs:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-400">
          <li>
            <code className="text-amber-400">REQUIRED_TIME_LOCKTIME</code>: TX locktime must
            be ≥ this value (if time-based)
          </li>
          <li>
            <code className="text-amber-400">REQUIRED_HEIGHT_LOCKTIME</code>: TX locktime must
            be ≥ this value (if height-based)
          </li>
          <li>
            <code className="text-amber-400">FALLBACK_LOCKTIME</code>: Used if no inputs
            specify requirements
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Coinjoin</p>
          <p className="text-sm text-dark-300">
            Multiple parties can independently add their inputs and outputs. No coordinator
            needs to know the full transaction upfront.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Payjoin (BIP-78)</p>
          <p className="text-sm text-dark-300">
            Receiver can add inputs to sender's transaction, breaking common input ownership
            heuristics.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Interactive Protocols</p>
          <p className="text-sm text-dark-300">
            Any protocol where transaction structure isn't known until all parties contribute.
          </p>
        </div>
      </div>

      <Callout type="warning" title="Conversion Between Versions">
        <p>
          PSBT v0 can be converted to v2 by extracting the unsigned transaction into the
          new fields. Converting v2 to v0 requires the transaction structure to be complete
          (all inputs and outputs finalized).
        </p>
      </Callout>

      <Callout type="success" title="Future-Ready Design">
        <p>
          PSBT v2's flexible design anticipates future protocols requiring collaborative
          transaction construction. It maintains backward compatibility while enabling
          new privacy-enhancing and scaling technologies.
        </p>
      </Callout>
    </LessonLayout>
  );
}
