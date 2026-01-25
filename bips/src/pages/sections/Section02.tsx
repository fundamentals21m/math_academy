import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Original Workflow</h2>

      <p className="mb-4">
        BIP-2, written by <strong>Luke Dashjr</strong> in March 2012, refined the BIP process
        established by BIP-1. It introduced a more detailed status lifecycle and clarified the
        roles of BIP Champions and Editors. While now superseded by later updates, BIP-2's
        concepts remain influential.
      </p>

      <Callout type="warning" title="Status: Replaced">
        <p>
          BIP-2 has been superseded by later Process BIPs. We study it for historical context
          and to understand how the BIP process evolved. Current guidelines may differ.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Innovations in BIP-2</h3>

      <p className="mb-4">
        BIP-2 introduced several important concepts that shaped Bitcoin's development process:
      </p>

      <Definition title="BIP Champion">
        <p>
          The person responsible for shepherding a BIP through the process. The Champion writes
          the BIP, gathers feedback, builds consensus, and addresses concerns. A BIP without
          an active Champion typically stalls.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Status Workflow</h3>

      <p className="mb-4">
        BIP-2 defined a clear progression for how BIPs move from idea to implementation:
      </p>

      <div className="bg-dark-900 rounded-xl p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-2 mx-auto">
              <span className="text-blue-400 font-bold">Draft</span>
            </div>
            <p className="text-xs text-dark-400">Initial proposal</p>
          </div>
          <div className="text-dark-600">→</div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-2 mx-auto">
              <span className="text-amber-400 font-bold text-sm">Deferred</span>
            </div>
            <p className="text-xs text-dark-400">On hold</p>
          </div>
          <div className="text-dark-600">→</div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-2 mx-auto">
              <span className="text-purple-400 font-bold text-sm">Proposed</span>
            </div>
            <p className="text-xs text-dark-400">Under review</p>
          </div>
          <div className="text-dark-600">→</div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2 mx-auto">
              <span className="text-emerald-400 font-bold text-sm">Final</span>
            </div>
            <p className="text-xs text-dark-400">Accepted</p>
          </div>
        </div>
      </div>

      <Example title="Status Definitions from BIP-2">
        <div className="space-y-3">
          <div>
            <span className="text-blue-400 font-semibold">Draft:</span>
            <span className="text-dark-300 ml-2">
              The first formally tracked stage. Open for discussion and changes.
            </span>
          </div>
          <div>
            <span className="text-amber-400 font-semibold">Deferred:</span>
            <span className="text-dark-300 ml-2">
              Development paused. Can be resumed later if interest returns.
            </span>
          </div>
          <div>
            <span className="text-purple-400 font-semibold">Proposed:</span>
            <span className="text-dark-300 ml-2">
              Ready for implementation. Specification is stable.
            </span>
          </div>
          <div>
            <span className="text-emerald-400 font-semibold">Final:</span>
            <span className="text-dark-300 ml-2">
              Accepted standard. Should not be changed except for errata.
            </span>
          </div>
          <div>
            <span className="text-rose-400 font-semibold">Rejected:</span>
            <span className="text-dark-300 ml-2">
              Will not be implemented. May be reopened with new information.
            </span>
          </div>
          <div>
            <span className="text-cyan-400 font-semibold">Replaced:</span>
            <span className="text-dark-300 ml-2">
              Superseded by a newer BIP. Links to replacement.
            </span>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Standards Track Layers</h3>

      <p className="mb-4">
        BIP-2 formalized the concept of <strong>layers</strong> for Standards Track BIPs.
        This classification helps developers understand which part of the Bitcoin stack a BIP affects:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Consensus (Hard/Soft Fork)</p>
          <p className="text-sm text-dark-300">
            Changes to block or transaction validity rules. Most critical—affects all full nodes.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Peer Services</p>
          <p className="text-sm text-dark-300">
            Changes to how nodes communicate. Doesn't affect validity but impacts networking.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-blue-500/30">
          <p className="text-blue-400 font-bold mb-2">API/RPC</p>
          <p className="text-sm text-dark-300">
            Changes to how applications interact with Bitcoin software (JSON-RPC calls).
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Applications</p>
          <p className="text-sm text-dark-300">
            Standards for wallets, exchanges, and other Bitcoin applications.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why BIP-2 Was Superseded</h3>

      <p className="mb-4">
        As Bitcoin grew, certain limitations of BIP-2 became apparent:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>The status workflow didn't clearly handle consensus changes requiring miner activation</li>
        <li>The line between "Proposed" and "Final" was ambiguous for soft forks</li>
        <li>No clear process for emergency changes or time-sensitive security fixes</li>
        <li>The "Active" status (for living documents) wasn't well-defined</li>
      </ul>

      <Callout type="info" title="Evolution of Process">
        <p>
          The supersession of BIP-2 demonstrates that the BIP process itself evolves through BIPs.
          This meta-level flexibility allows Bitcoin's governance to adapt without requiring
          hard-coded procedures in the protocol.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lessons from BIP-2</h3>

      <p className="mb-4">
        Even though superseded, BIP-2 established important precedents:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50">
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="text-amber-400">1.</span>
            <span>
              <strong>BIPs need champions</strong>—proposals without active advocates stall
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">2.</span>
            <span>
              <strong>Layer classification matters</strong>—consensus changes need more scrutiny than wallet standards
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">3.</span>
            <span>
              <strong>Status should reflect reality</strong>—a BIP's status must match its actual adoption state
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">4.</span>
            <span>
              <strong>Process can change</strong>—even the rules for changing rules are changeable
            </span>
          </li>
        </ul>
      </div>

      <Callout type="note" title="Current Process">
        <p>
          The current BIP process has evolved beyond BIP-2. We'll cover the current guidelines
          in the next section. Understanding BIP-2 helps you interpret older BIPs that reference
          its status definitions.
        </p>
      </Callout>
    </LessonLayout>
  );
}
