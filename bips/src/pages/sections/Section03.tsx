import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Modern BIP Guidelines</h2>

      <p className="mb-4">
        The BIP process continues to evolve. While there isn't a single "BIP-3" that replaced BIP-2,
        the process has been refined through practice, community discussion, and updates to the
        README in the BIPs repository. This section covers the <strong>current best practices</strong>{' '}
        for proposing and implementing BIPs.
      </p>

      <Callout type="info" title="Living Process">
        <p>
          Unlike traditional standards bodies with fixed procedures, Bitcoin's BIP process adapts
          organically. The authoritative source is always the README in the{' '}
          <code className="text-amber-400">github.com/bitcoin/bips</code> repository.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Current Status Categories</h3>

      <p className="mb-4">
        The modern BIP process uses these status categories:
      </p>

      <div className="space-y-3 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-blue-500">
          <div className="flex justify-between items-center">
            <span className="text-blue-400 font-bold">Draft</span>
            <span className="text-xs text-dark-500">Initial stage</span>
          </div>
          <p className="text-sm text-dark-300 mt-1">
            The BIP is under active development and discussion. Changes are expected.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-purple-500">
          <div className="flex justify-between items-center">
            <span className="text-purple-400 font-bold">Proposed</span>
            <span className="text-xs text-dark-500">Ready for implementation</span>
          </div>
          <p className="text-sm text-dark-300 mt-1">
            The specification is complete and stable. Implementations can begin.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <div className="flex justify-between items-center">
            <span className="text-emerald-400 font-bold">Final</span>
            <span className="text-xs text-dark-500">Accepted standard</span>
          </div>
          <p className="text-sm text-dark-300 mt-1">
            The BIP represents a finalized standard. Only errata corrections allowed.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-cyan-500">
          <div className="flex justify-between items-center">
            <span className="text-cyan-400 font-bold">Active</span>
            <span className="text-xs text-dark-500">Living document</span>
          </div>
          <p className="text-sm text-dark-300 mt-1">
            For Process BIPs that are continually updated (like the BIP process itself).
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-gray-500">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-bold">Withdrawn</span>
            <span className="text-xs text-dark-500">Author pulled</span>
          </div>
          <p className="text-sm text-dark-300 mt-1">
            The author has withdrawn the proposal. Different from rejection—voluntary.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-rose-500">
          <div className="flex justify-between items-center">
            <span className="text-rose-400 font-bold">Rejected</span>
            <span className="text-xs text-dark-500">Not accepted</span>
          </div>
          <p className="text-sm text-dark-300 mt-1">
            The proposal will not be adopted. May be reconsidered with significant changes.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <div className="flex justify-between items-center">
            <span className="text-amber-400 font-bold">Obsolete</span>
            <span className="text-xs text-dark-500">Superseded</span>
          </div>
          <p className="text-sm text-dark-300 mt-1">
            Replaced by a newer BIP. Links to the replacement document.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How to Propose a BIP</h3>

      <p className="mb-4">
        The modern process for proposing a BIP:
      </p>

      <Example title="BIP Proposal Workflow">
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            <strong>Vet your idea</strong> — Discuss on the bitcoin-dev mailing list or relevant forums
            before writing a formal BIP. Get early feedback.
          </li>
          <li>
            <strong>Write the BIP</strong> — Follow the template format. Include all required sections.
            Be thorough in Motivation and Rationale.
          </li>
          <li>
            <strong>Submit as Pull Request</strong> — Open a PR to the bitcoin/bips repository.
            Use a temporary number until assigned.
          </li>
          <li>
            <strong>Address feedback</strong> — Respond to review comments. BIP Editors check format;
            community reviews content.
          </li>
          <li>
            <strong>Get a number</strong> — Once accepted as Draft, the BIP Editor assigns a number.
          </li>
          <li>
            <strong>Build consensus</strong> — For consensus changes, this is the longest phase.
            Requires broad community agreement.
          </li>
          <li>
            <strong>Implement and test</strong> — Create reference implementation. For consensus changes,
            activation parameters are added.
          </li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP Editors</h3>

      <p className="mb-4">
        The current BIP Editors (as of 2024) include developers who volunteer their time to
        maintain the repository. Their responsibilities:
      </p>

      <Definition title="BIP Editor Responsibilities">
        <ul className="list-disc list-inside space-y-2">
          <li>Assign BIP numbers and manage the repository</li>
          <li>Ensure BIPs meet formatting standards</li>
          <li>Update BIP statuses based on adoption</li>
          <li>Merge well-formed BIP pull requests</li>
          <li><strong>Not:</strong> Judge the merit of proposals (community decides)</li>
        </ul>
      </Definition>

      <Callout type="warning" title="Editor ≠ Gatekeeper">
        <p>
          BIP Editors are administrative maintainers, not gatekeepers. A well-formatted BIP
          that follows the template should be merged regardless of whether editors personally
          agree with the proposal. The community—through implementation and adoption—decides
          which BIPs succeed.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Special Cases</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Consensus BIPs</h4>
          <p className="text-dark-300">
            Changes to consensus rules (soft/hard forks) require extraordinary scrutiny.
            They typically need: reference implementation in Bitcoin Core, extensive testing,
            economic analysis, and some form of activation mechanism (like BIP-9 version bits).
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Emergency BIPs</h4>
          <p className="text-dark-300">
            Security vulnerabilities may be handled differently. Critical bugs might be
            patched before public BIP discussion to prevent exploitation. Documentation
            comes later.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Informational BIPs</h4>
          <p className="text-dark-300">
            Don't require implementation consensus. They document best practices, provide
            educational content, or explain existing behavior. Lower barrier to acceptance.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Community Consensus</h3>

      <p className="mb-4">
        The BIP process emphasizes <strong>rough consensus</strong> rather than formal voting:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>There are no official votes or governance tokens</li>
        <li>Consensus is demonstrated through adoption, not polls</li>
        <li>Node operators "vote" by choosing which software to run</li>
        <li>Miners "vote" through activation signaling</li>
        <li>Users "vote" by using implementations with certain features</li>
      </ul>

      <Callout type="success" title="The Power of Defaults">
        <p>
          In practice, changes that make it into Bitcoin Core's default configuration tend
          to get adopted. This gives Core developers significant influence, balanced by
          the fact that users can always choose alternative implementations.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP Numbering</h3>

      <p className="mb-4">
        BIP numbers are assigned sequentially but don't imply order of importance. Some
        notable number ranges:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 font-mono text-sm">
        <div className="grid grid-cols-2 gap-2">
          <span className="text-amber-400">BIP 1-99:</span>
          <span className="text-dark-300">Early BIPs (process, basic standards)</span>
          <span className="text-amber-400">BIP 100-199:</span>
          <span className="text-dark-300">Various standards</span>
          <span className="text-amber-400">BIP 300-399:</span>
          <span className="text-dark-300">Modern proposals (Taproot era)</span>
          <span className="text-amber-400">BIP 340-342:</span>
          <span className="text-dark-300">Schnorr/Taproot trilogy</span>
        </div>
      </div>

      <Callout type="note" title="Next Steps">
        <p>
          Now that you understand the BIP process, we'll examine how BIPs are categorized by
          layer, then dive into reading actual BIP documents effectively.
        </p>
      </Callout>
    </LessonLayout>
  );
}
