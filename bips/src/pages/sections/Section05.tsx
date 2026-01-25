import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Journey of a BIP</h2>

      <p className="mb-4">
        Every BIP begins as an idea and progresses through a series of statuses before becoming
        a final standard (or being rejected). Understanding this lifecycle helps you interpret
        the current state of any BIP you're reading.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Status Flow Diagram</h3>

      <div className="bg-dark-900 rounded-xl p-6 mb-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Idea */}
          <div className="w-full max-w-md">
            <div className="bg-dark-800 rounded-lg p-3 text-center border border-dark-600">
              <span className="text-dark-300">💡 Idea (not yet a BIP)</span>
            </div>
          </div>

          <div className="text-dark-600">↓</div>

          {/* Draft */}
          <div className="w-full max-w-md">
            <div className="bg-blue-500/20 rounded-lg p-3 text-center border border-blue-500/30">
              <span className="text-blue-400 font-bold">Draft</span>
              <p className="text-xs text-dark-400 mt-1">Active development</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-dark-600">↓</div>
            <div className="text-dark-600">↘</div>
          </div>

          {/* Proposed or Withdrawn */}
          <div className="flex gap-4 w-full max-w-lg">
            <div className="flex-1 bg-purple-500/20 rounded-lg p-3 text-center border border-purple-500/30">
              <span className="text-purple-400 font-bold">Proposed</span>
              <p className="text-xs text-dark-400 mt-1">Ready for adoption</p>
            </div>
            <div className="flex-1 bg-gray-500/20 rounded-lg p-3 text-center border border-gray-500/30">
              <span className="text-gray-400 font-bold">Withdrawn</span>
              <p className="text-xs text-dark-400 mt-1">Author pulled</p>
            </div>
          </div>

          <div className="flex items-center gap-16">
            <div className="text-dark-600">↓</div>
            <div className="text-dark-600">↓</div>
          </div>

          {/* Final or Rejected */}
          <div className="flex gap-4 w-full max-w-lg">
            <div className="flex-1 bg-emerald-500/20 rounded-lg p-3 text-center border border-emerald-500/30">
              <span className="text-emerald-400 font-bold">Final</span>
              <p className="text-xs text-dark-400 mt-1">Accepted standard</p>
            </div>
            <div className="flex-1 bg-rose-500/20 rounded-lg p-3 text-center border border-rose-500/30">
              <span className="text-rose-400 font-bold">Rejected</span>
              <p className="text-xs text-dark-400 mt-1">Not accepted</p>
            </div>
          </div>

          <div className="text-dark-600">↓</div>

          {/* Obsolete */}
          <div className="w-full max-w-md">
            <div className="bg-amber-500/20 rounded-lg p-3 text-center border border-amber-500/30">
              <span className="text-amber-400 font-bold">Obsolete</span>
              <p className="text-xs text-dark-400 mt-1">Superseded by newer BIP</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Status Definitions</h3>

      <div className="space-y-4 mb-6">
        <Definition title="Draft">
          <p>
            The initial status for a BIP that has been formally submitted. The specification
            is still being developed and may change significantly based on feedback.
          </p>
          <p className="mt-2 text-sm text-dark-400">
            <strong>Typical duration:</strong> Weeks to years, depending on complexity
          </p>
        </Definition>

        <Definition title="Proposed">
          <p>
            The BIP is considered complete and ready for implementation. The specification
            should be stable enough for developers to begin work. For consensus BIPs, this
            may trigger the start of activation discussions.
          </p>
          <p className="mt-2 text-sm text-dark-400">
            <strong>Requirements:</strong> Complete specification, addressed review feedback,
            reference implementation (for consensus BIPs)
          </p>
        </Definition>

        <Definition title="Final">
          <p>
            The BIP represents a finalized standard. For consensus BIPs, this typically means
            the feature has been activated on mainnet. The document should only be updated
            to correct errors, not to add features.
          </p>
          <p className="mt-2 text-sm text-dark-400">
            <strong>Key point:</strong> Final doesn't mean perfect—it means stable
          </p>
        </Definition>

        <Definition title="Active">
          <p>
            Used for Process BIPs that describe ongoing procedures (like the BIP process itself).
            These documents may be updated as the process evolves.
          </p>
          <p className="mt-2 text-sm text-dark-400">
            <strong>Examples:</strong> BIP-1 (the BIP process), BIP-2 (workflow updates)
          </p>
        </Definition>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Terminal States</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-gray-500/30">
          <p className="text-gray-400 font-bold mb-2">Withdrawn</p>
          <p className="text-sm text-dark-300">
            The author has voluntarily withdrawn the proposal. This is different from rejection—the
            author might return to the idea later or incorporate it into a different BIP.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Rejected</p>
          <p className="text-sm text-dark-300">
            The community has decided not to adopt the proposal. The BIP remains in the repository
            as a historical record of why the approach was rejected.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Obsolete</p>
          <p className="text-sm text-dark-300">
            The BIP has been superseded by a newer proposal. The document links to its replacement.
            Obsolete BIPs help understand the evolution of ideas.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-cyan-500/30">
          <p className="text-cyan-400 font-bold mb-2">Replaced</p>
          <p className="text-sm text-dark-300">
            Similar to Obsolete, but specifically indicates another BIP has taken its place.
            The superseding BIP number is listed.
          </p>
        </div>
      </div>

      <Example title="Status Transitions in Practice">
        <p className="mb-3">Let's trace BIP-141 (SegWit) through its lifecycle:</p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li><strong>2015-12:</strong> Submitted as <span className="text-blue-400">Draft</span></li>
          <li><strong>2016:</strong> Extensive discussion, multiple revisions to specification</li>
          <li><strong>2016-11:</strong> Moved to <span className="text-purple-400">Proposed</span> with activation parameters</li>
          <li><strong>2017-08:</strong> Activated on mainnet, moved to <span className="text-emerald-400">Final</span></li>
        </ol>
        <p className="mt-3 text-dark-400 text-sm">
          SegWit took nearly two years from draft to final—typical for consensus-critical changes.
        </p>
      </Example>

      <Callout type="warning" title="Status vs. Adoption">
        <p>
          A BIP's status doesn't always reflect real-world adoption. An "Active" Applications BIP
          might be ignored by most wallets, while a "Draft" consensus BIP might be running on testnet.
          Status is administrative; adoption is what matters.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Special Cases</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-amber-400 mb-3">Deferred BIPs</h4>
        <p className="text-dark-300 mb-4">
          Some older BIPs use a "Deferred" status for proposals put on hold. This status
          isn't commonly used today—authors typically either withdraw or continue working.
        </p>

        <h4 className="text-lg font-semibold text-amber-400 mb-3">Living BIPs</h4>
        <p className="text-dark-300">
          Some specifications (like BIP-39's word lists) may need updates without changing
          status. The "Active" status or careful versioning handles these cases.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Reading Status Information</h3>

      <p className="mb-4">
        Every BIP begins with a preamble containing status information:
      </p>

      <div className="bg-dark-900 rounded-lg p-4 font-mono text-sm mb-6">
        <p><span className="text-dark-500">BIP:</span> <span className="text-amber-400">141</span></p>
        <p><span className="text-dark-500">Layer:</span> <span className="text-amber-400">Consensus (soft fork)</span></p>
        <p><span className="text-dark-500">Title:</span> <span className="text-amber-400">Segregated Witness (Consensus layer)</span></p>
        <p><span className="text-dark-500">Author:</span> <span className="text-amber-400">Eric Lombrozo, et al.</span></p>
        <p><span className="text-dark-500">Status:</span> <span className="text-emerald-400">Final</span></p>
        <p><span className="text-dark-500">Type:</span> <span className="text-amber-400">Standards Track</span></p>
        <p><span className="text-dark-500">Created:</span> <span className="text-amber-400">2015-12-21</span></p>
      </div>

      <Callout type="success" title="Quick Status Guide">
        <p>
          When evaluating a BIP: <strong>Draft</strong> = may change, <strong>Proposed</strong> = implement carefully,
          <strong>Final</strong> = safe to rely on, <strong>Obsolete/Replaced</strong> = check the newer version.
        </p>
      </Callout>
    </LessonLayout>
  );
}
