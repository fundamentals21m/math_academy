import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-61: Reject P2P Message</h2>

      <p className="mb-4">
        BIP-61 introduced the reject message for nodes to communicate why they rejected
        transactions or blocks. While useful for debugging, it was later deprecated due
        to fingerprinting concerns and limited practical value.
      </p>

      <Callout type="warning" title="Deprecated">
        <p>
          The reject message was removed from Bitcoin Core in version 0.20.0. Nodes no
          longer send or process reject messages by default.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Original Purpose</h3>

      <p className="mb-4">
        BIP-61 aimed to improve debugging and user experience:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Tell wallet why a transaction was rejected</li>
          <li>Help developers debug protocol issues</li>
          <li>Provide meaningful error messages to users</li>
          <li>Distinguish between different failure modes</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Message Format</h3>

      <Definition title="Reject Message">
        <p>
          A structured message containing the rejected command, error code, human-readable
          reason, and optional data (like the txid for transaction rejections).
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Reject message fields:</p>
        <p className="text-dark-300">message: "tx"  # What was rejected (tx, block, etc.)</p>
        <p className="text-dark-300">ccode: 0x10    # Error code</p>
        <p className="text-dark-300">reason: "insufficient fee"</p>
        <p className="text-dark-300">data: [txid]   # 32-byte hash (for tx/block)</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Error Codes</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Code</th>
              <th className="text-left py-3 text-dark-300">Name</th>
              <th className="text-left py-3 text-dark-300">Meaning</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">0x01</td>
              <td>REJECT_MALFORMED</td>
              <td>Message couldn't be parsed</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">0x10</td>
              <td>REJECT_INVALID</td>
              <td>Invalid (consensus rules)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">0x11</td>
              <td>REJECT_OBSOLETE</td>
              <td>Using obsolete version</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">0x12</td>
              <td>REJECT_DUPLICATE</td>
              <td>Already have it</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">0x40</td>
              <td>REJECT_NONSTANDARD</td>
              <td>Not standard (policy)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">0x41</td>
              <td>REJECT_DUST</td>
              <td>Output below dust threshold</td>
            </tr>
            <tr>
              <td className="py-3 font-mono">0x42</td>
              <td>REJECT_INSUFFICIENTFEE</td>
              <td>Fee too low</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Example Usage</h3>

      <Example title="Transaction Rejection Flow">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Wallet broadcasts transaction:</p>
            <p className="text-dark-300">wallet → node: tx(low_fee_transaction)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Node rejects due to low fee:</p>
            <p className="text-dark-300">node → wallet: reject(</p>
            <p className="text-dark-500 ml-4">message: "tx"</p>
            <p className="text-dark-500 ml-4">ccode: REJECT_INSUFFICIENTFEE</p>
            <p className="text-dark-500 ml-4">reason: "min relay fee not met"</p>
            <p className="text-dark-500 ml-4">data: [txid]</p>
            <p className="text-dark-300">)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Wallet can inform user:</p>
            <p className="text-emerald-400">"Transaction rejected: fee too low"</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why It Was Removed</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Fingerprinting Risk</p>
          <p className="text-sm text-dark-300">
            Different node implementations and versions produce different reject messages.
            This helps attackers identify what software a node runs.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Unreliable Information</p>
          <p className="text-sm text-dark-300">
            Reject messages are optional and may not be sent. Wallets can't rely on them
            for confirmation—must check other ways anyway.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Limited Utility</p>
          <p className="text-sm text-dark-300">
            For transaction propagation, absence of inclusion in a block is the reliable
            signal. Reject messages from one peer don't guarantee network-wide rejection.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Alternatives</h3>

      <p className="mb-4">
        Without reject messages, wallets determine transaction status by:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Monitor mempool:</strong> Check if transaction appears in connected nodes' mempools
          </li>
          <li>
            <strong>Watch for confirmation:</strong> Transaction eventually included in a block
          </li>
          <li>
            <strong>Fee estimation:</strong> Use proper fee estimation to avoid rejection
          </li>
          <li>
            <strong>Local validation:</strong> Validate transactions locally before broadcast
          </li>
          <li>
            <strong>sendrawtransaction RPC:</strong> Returns error codes for local submission
          </li>
        </ul>
      </div>

      <Callout type="info" title="Debug Logging">
        <p>
          While reject messages are gone from P2P, Bitcoin Core still logs rejection
          reasons locally. Developers can check debug.log to understand why a transaction
          was rejected by their own node.
        </p>
      </Callout>

      <Callout type="success" title="Protocol Simplification">
        <p>
          Removing the reject message simplified the P2P protocol and reduced fingerprinting
          surface. It's a good example of removing features that seemed helpful but created
          more problems than they solved.
        </p>
      </Callout>
    </LessonLayout>
  );
}
