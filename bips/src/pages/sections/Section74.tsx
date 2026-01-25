import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section74() {
  return (
    <LessonLayout sectionId={74}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-23: getblocktemplate Pooled Mining</h2>

      <p className="mb-4">
        BIP-23 extends BIP-22 with additional features for mining pools, including
        server-specified coinbase transactions, mutations for pool optimization, and
        submission tracking.
      </p>

      <Callout type="info" title="Pool Operations">
        <p>
          Mining pools need more control than solo miners. BIP-23 provides extensions
          for pools to manage coinbase transactions, track work submissions, and
          coordinate many workers efficiently.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pool-Specific Needs</h3>

      <p className="mb-4">
        Mining pools have additional requirements:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Control coinbase outputs (pay miners)</li>
          <li>Include pool identification in coinbase</li>
          <li>Track which worker found the block</li>
          <li>Efficient work distribution to many miners</li>
          <li>Handle variable-difficulty shares</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Coinbase Transaction</h3>

      <Definition title="coinbasetxn Field">
        <p>
          BIP-23 adds a coinbasetxn field to templates, providing either a complete
          coinbase transaction or instructions for constructing one.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Template with coinbase info:</p>
        <p className="text-dark-300">"coinbasetxn": {'{'}</p>
        <p className="text-dark-300 ml-4">"data": "01000000010000...",</p>
        <p className="text-dark-300 ml-4">"fee": 0,</p>
        <p className="text-dark-300 ml-4">"sigops": 0,</p>
        <p className="text-dark-300 ml-4">"required": true</p>
        <p className="text-dark-300">{'}'}</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Coinbase Mutations</h3>

      <p className="mb-4">
        Pools control how miners can modify the coinbase:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Mutation</th>
              <th className="text-left py-3 text-dark-300">Meaning</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">coinbase/append</td>
              <td>Miners can append to scriptSig</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">generation</td>
              <td>Miners can add outputs</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">coinbase</td>
              <td>Full coinbase replacement allowed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Work ID Tracking</h3>

      <p className="mb-4">
        The workid field tracks which template produced a submission:
      </p>

      <Example title="Work ID Flow">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Template includes workid:</p>
            <p className="text-dark-300">"workid": "abc123"</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Miner submits block:</p>
            <p className="text-dark-300">submitblock "hexdata" {'{'}"workid": "abc123"{'}'}</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Pool benefits:</p>
            <p className="text-dark-500">- Credit correct miner for block</p>
            <p className="text-dark-500">- Track stale vs valid submissions</p>
            <p className="text-dark-500">- Debug template issues</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Long Polling</h3>

      <p className="mb-4">
        Efficient notification of new work:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>longpollid:</strong> Identifier for current template state
          </li>
          <li>
            <strong>Request:</strong> Include previous longpollid to wait for changes
          </li>
          <li>
            <strong>Response:</strong> Returns immediately if template changed, else waits
          </li>
          <li>
            <strong>Efficiency:</strong> No constant polling, instant notification
          </li>
        </ul>
      </div>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Long poll request:</p>
        <p className="text-dark-300">getblocktemplate {'{'}</p>
        <p className="text-dark-300 ml-4">"longpollid": "prev_template_id",</p>
        <p className="text-dark-300 ml-4">"capabilities": ["longpoll"]</p>
        <p className="text-dark-300">{'}'}</p>
        <p className="text-dark-500 mt-3">
          Server holds connection until new template available
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Submission Modes</h3>

      <p className="mb-4">
        Different submission types for different purposes:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Full Block</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Complete block submission</li>
            <li>For valid blocks meeting network target</li>
            <li>Broadcast to network</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Share Submission</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Proof of work at lower difficulty</li>
            <li>For pool accounting</li>
            <li>Not broadcast (not valid blocks)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Server Extensions</h3>

      <Callout type="info" title="Additional Fields">
        <p>
          BIP-23 allows servers to include custom fields:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>expires:</strong> Template validity duration</li>
          <li><strong>submitold:</strong> Whether to accept old templates</li>
          <li><strong>target:</strong> Pool difficulty target</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pool Architecture</h3>

      <Example title="Typical Pool Setup">
        <div className="space-y-3 text-dark-300">
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-400 mb-2"># Pool infrastructure:</p>
            <p className="text-dark-300">Bitcoin Node → Pool Server → Workers</p>
            <p className="text-dark-300 mt-2">Node: getblocktemplate → Pool</p>
            <p className="text-dark-300">Pool: Distributes work to workers</p>
            <p className="text-dark-300">Workers: Return shares/blocks</p>
            <p className="text-dark-300">Pool: submitblock for valid blocks</p>
          </div>
        </div>
      </Example>

      <Callout type="success" title="Pool Foundation">
        <p>
          BIP-23 provides the infrastructure for modern mining pools. While newer protocols
          like Stratum V2 are emerging, GBT remains the interface between pool servers
          and Bitcoin nodes, ensuring pools can construct valid blocks.
        </p>
      </Callout>
    </LessonLayout>
  );
}
