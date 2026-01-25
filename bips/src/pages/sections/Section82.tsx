import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section82() {
  return (
    <LessonLayout sectionId={82}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Mining Pool Protocols</h2>

      <p className="mb-4">
        Mining pools aggregate hashrate from many miners to find blocks more consistently.
        This section surveys the protocols that enable pool coordination, from early
        approaches to modern standards.
      </p>

      <Callout type="info" title="Why Pools Exist">
        <p>
          Solo mining is highly variable—a miner might find a block tomorrow or not for
          years. Pools provide steady income by sharing block rewards proportionally to
          contributed hashrate.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Evolution</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-amber-400 font-bold">getwork (2010-2012)</p>
            <p className="text-sm text-dark-300">
              Original protocol. Fetched work from Bitcoin node directly. Limited
              nonce space, inefficient polling.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-bold">getblocktemplate (2012+)</p>
            <p className="text-sm text-dark-300">
              BIP-22/23. Gave miners visibility into block contents. Still used
              between pools and nodes.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-bold">Stratum V1 (2012+)</p>
            <p className="text-sm text-dark-300">
              Pool-to-miner protocol. JSON over TCP, push-based work distribution.
              De facto standard for years.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-bold">Stratum V2 (2019+)</p>
            <p className="text-sm text-dark-300">
              Modern encrypted protocol with miner transaction selection.
              Actively being adopted.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Share-Based Rewards</h3>

      <Definition title="Share">
        <p>
          A proof-of-work solution that meets a lower difficulty than the network target.
          Shares prove a miner is working honestly without requiring them to find actual
          blocks.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Share vs Block:</p>
        <p className="text-dark-300">Network difficulty: 50 trillion</p>
        <p className="text-dark-300">Share difficulty: 50 million (pool-set)</p>
        <p className="text-dark-400 mt-3 mb-2"># Result:</p>
        <p className="text-dark-300">Miner finds ~1000 shares per block-equivalent work</p>
        <p className="text-dark-300">Pool tracks shares to calculate fair payment</p>
        <p className="text-amber-400 mt-1">If share also meets network difficulty → valid block!</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Payment Schemes</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Scheme</th>
              <th className="text-left py-3 text-dark-300">Description</th>
              <th className="text-left py-3 text-dark-300">Risk</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">PPS</td>
              <td>Pay Per Share - fixed rate per share</td>
              <td>Pool bears variance</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">PPLNS</td>
              <td>Pay Per Last N Shares - proportional</td>
              <td>Miner bears variance</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">FPPS</td>
              <td>Full PPS - includes transaction fees</td>
              <td>Pool bears all risk</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">PROP</td>
              <td>Proportional - share of block reward</td>
              <td>Shared variance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Stratum V1 Messages</h3>

      <Example title="Stratum V1 Exchange">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Authorization:</p>
            <p className="text-dark-300">{"{"}"method":"mining.authorize","params":["user","pass"]{"}"}]</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Subscribe to work:</p>
            <p className="text-dark-300">{"{"}"method":"mining.subscribe"{"}"}</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Pool sends work:</p>
            <p className="text-dark-300">{"{"}"method":"mining.notify",</p>
            <p className="text-dark-300 ml-4">"params":[job_id, prev_hash, coinbase1, ...]{"}"}</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 4. Miner submits share:</p>
            <p className="text-dark-300">{"{"}"method":"mining.submit",</p>
            <p className="text-dark-300 ml-4">"params":[user, job_id, extranonce2, time, nonce]{"}"}</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Centralization Concerns</h3>

      <Callout type="warning" title="Pool Power">
        <p>
          Large pools have significant influence:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Control over which transactions get mined</li>
          <li>Ability to censor specific addresses</li>
          <li>Potential for 51% attacks if pools collude</li>
          <li>MEV-like extraction possibilities</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Decentralization Efforts</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Stratum V2 Job Declaration</p>
          <p className="text-sm text-dark-300">
            Miners can select their own transactions, reducing pool censorship power.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">P2Pool</p>
          <p className="text-sm text-dark-300">
            Decentralized pool where miners share a blockchain. No central operator.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">OCEAN (formerly Eligius 2.0)</p>
          <p className="text-sm text-dark-300">
            Non-custodial pool paying directly to miners, transparent block templates.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Architecture</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Typical pool infrastructure:</p>
        <p className="text-dark-300">Bitcoin Node</p>
        <p className="text-dark-500 ml-4">↓ getblocktemplate (BIP-22/23)</p>
        <p className="text-dark-300">Pool Server</p>
        <p className="text-dark-500 ml-4">↓ Stratum V1/V2</p>
        <p className="text-dark-300">Mining Proxies (optional)</p>
        <p className="text-dark-500 ml-4">↓ Stratum</p>
        <p className="text-dark-300">ASICs / Mining Hardware</p>
      </div>

      <Callout type="success" title="Ongoing Evolution">
        <p>
          Mining pool protocols continue to evolve toward better security, efficiency,
          and decentralization. Understanding these protocols helps evaluate the health
          of Bitcoin's mining ecosystem and the trade-offs between convenience and
          censorship resistance.
        </p>
      </Callout>
    </LessonLayout>
  );
}
