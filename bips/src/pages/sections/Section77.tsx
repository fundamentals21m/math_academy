import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section77() {
  return (
    <LessonLayout sectionId={77}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-50: March 2013 Chain Fork</h2>

      <p className="mb-4">
        BIP-50 documents the accidental hard fork that occurred on March 11, 2013, when
        a database upgrade caused nodes to have inconsistent validation rules. This incident
        provides crucial lessons about consensus changes and network coordination.
      </p>

      <Callout type="warning" title="Historical Incident">
        <p>
          This was one of Bitcoin's most serious incidents—a chain split lasting several
          hours with significant double-spend risk. Understanding it helps prevent similar
          issues.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What Happened</h3>

      <p className="mb-4">
        The incident unfolded rapidly:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            Bitcoin Core 0.8.0 released with new database (LevelDB replacing BDB)
          </li>
          <li>
            Block 225,430 had more transaction inputs than BDB could handle
          </li>
          <li>
            0.8.0 nodes (LevelDB) accepted the block
          </li>
          <li>
            Pre-0.8.0 nodes (BDB) rejected it
          </li>
          <li>
            Network split into two chains
          </li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Technical Cause</h3>

      <Definition title="BDB Lock Limit">
        <p>
          Berkeley DB (BDB) had a configurable limit on simultaneous database locks. The
          default was too low for blocks with many inputs. LevelDB had no such limit.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># The problematic block:</p>
        <p className="text-dark-300">Height: 225,430</p>
        <p className="text-dark-300">Transaction inputs: ~5000+ (unusually many)</p>
        <p className="text-dark-400 mt-3 mb-2"># BDB behavior:</p>
        <p className="text-rose-400">Exceeded lock limit → "Database error" → Reject block</p>
        <p className="text-dark-400 mt-2 mb-2"># LevelDB behavior:</p>
        <p className="text-emerald-400">No lock limit → Accept block normally</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Chain Split</h3>

      <Example title="Divergent Chains">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Common history:</p>
            <p className="text-dark-300">... → 225,428 → 225,429 → ?</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 0.8.0 chain (LevelDB):</p>
            <p className="text-emerald-400">... → 225,429 → 225,430 → 225,431 → ...</p>
            <p className="text-dark-500">Continued building on the "big" block</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Pre-0.8.0 chain (BDB):</p>
            <p className="text-rose-400">... → 225,429 → 225,430' → 225,431' → ...</p>
            <p className="text-dark-500">Built on a different block at height 225,430</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Resolution</h3>

      <p className="mb-4">
        Developers coordinated an emergency response:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            Identified the cause (BDB lock limit)
          </li>
          <li>
            Decided to roll back to pre-0.8.0 chain (more widely deployed)
          </li>
          <li>
            Contacted major miners to switch to 0.7.2
          </li>
          <li>
            BTCGuild (large pool) voluntarily reorged to shorter chain
          </li>
          <li>
            Pre-0.8.0 chain became longest, 0.8.0 nodes reorganized
          </li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Double Spend Risk</h3>

      <Callout type="warning" title="Real Danger">
        <p>
          During the split, transactions confirmed on one chain weren't on the other.
          An attacker could:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Send BTC to merchant (confirmed on chain A)</li>
          <li>Spend same BTC elsewhere (confirmed on chain B)</li>
          <li>When chains merge, one transaction becomes invalid</li>
        </ul>
        <p className="mt-2">
          OKPay reportedly lost ~$10,000 to a double spend during this incident.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lessons Learned</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Database Changes = Consensus Changes</p>
          <p className="text-sm text-dark-300">
            Even "internal" changes like database backends can affect consensus if they
            change what blocks are accepted.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Undocumented Limits are Consensus Rules</p>
          <p className="text-sm text-dark-300">
            BDB's lock limit wasn't a Bitcoin rule, but it effectively became one because
            nodes enforced it.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Coordination Mechanisms Critical</p>
          <p className="text-sm text-dark-300">
            Quick resolution required contacting miners directly. Modern alert systems
            and communication channels help.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Exchanges Should Increase Confirmations</p>
          <p className="text-sm text-dark-300">
            During network instability, requiring more confirmations reduces double-spend
            risk.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Aftermath</h3>

      <p className="mb-4">
        Changes made after the incident:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>0.8.1 release:</strong> Intentionally limited block complexity to match BDB
          </li>
          <li>
            <strong>Gradual migration:</strong> Careful transition as network upgraded
          </li>
          <li>
            <strong>BIP process:</strong> Highlighted need for careful consensus change review
          </li>
          <li>
            <strong>Alert system:</strong> Improved emergency communication
          </li>
        </ul>
      </div>

      <Callout type="success" title="Learning from Failure">
        <p>
          The March 2013 incident demonstrated Bitcoin's resilience—the community
          coordinated to resolve the issue within hours. More importantly, it taught
          that ANY change to validation logic is a potential consensus change, leading
          to more careful review processes.
        </p>
      </Callout>
    </LessonLayout>
  );
}
