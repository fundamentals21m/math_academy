import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Birth of Bitcoin Standards</h2>

      <p className="mb-4">
        BIP-1, authored by <strong>Amir Taaki</strong> in August 2011, established the very concept of a
        Bitcoin Improvement Proposal. Before BIP-1, changes to Bitcoin were discussed informally on
        mailing lists and forums. This foundational document created a structured process for
        proposing, discussing, and implementing changes to Bitcoin.
      </p>

      <Callout type="info" title="Historical Context">
        <p>
          By 2011, Bitcoin was growing beyond Satoshi Nakamoto's original implementation. Multiple
          developers were contributing, and the need for a formal standards process became clear.
          Taaki modeled BIP-1 on Python's PEP process, adapting it for Bitcoin's unique challenges.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What BIP-1 Defines</h3>

      <p className="mb-4">
        BIP-1 answers fundamental questions about the standards process:
      </p>

      <Definition title="BIP (from BIP-1)">
        <p>
          "A BIP is a design document providing information to the Bitcoin community, or describing a
          new feature for Bitcoin or its processes or environment. The BIP should provide a concise
          technical specification of the feature and a rationale for the feature."
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP Types</h3>

      <p className="mb-4">BIP-1 established three types of proposals:</p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-5 border-l-4 border-amber-500">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Standards Track BIP</h4>
          <p className="text-dark-300 mb-2">
            Describes changes affecting most or all Bitcoin implementations. These require consensus
            among the community and are further divided into:
          </p>
          <ul className="list-disc list-inside text-dark-400 space-y-1 ml-4">
            <li><strong>Consensus:</strong> Changes to network consensus rules</li>
            <li><strong>Peer Services:</strong> Changes to network protocol</li>
            <li><strong>API/RPC:</strong> Changes to API specifications</li>
            <li><strong>Applications:</strong> Application-layer standards</li>
          </ul>
        </div>

        <div className="bg-dark-800 rounded-lg p-5 border-l-4 border-emerald-500">
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Informational BIP</h4>
          <p className="text-dark-300">
            Describes a Bitcoin design issue or provides general guidelines. Does not propose a new
            feature. Informational BIPs do not require community consensus.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-5 border-l-4 border-purple-500">
          <h4 className="text-lg font-semibold text-purple-400 mb-2">Process BIP</h4>
          <p className="text-dark-300">
            Describes a process surrounding Bitcoin or proposes changes to the decision-making
            process. Like Standards Track BIPs, Process BIPs require community consensus.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Required Sections</h3>

      <p className="mb-4">
        Every BIP must include certain sections to ensure completeness and clarity:
      </p>

      <Example title="BIP Document Structure">
        <div className="font-mono text-sm space-y-1">
          <p><span className="text-amber-400">Preamble</span> — Metadata (BIP number, title, author, status, type)</p>
          <p><span className="text-amber-400">Abstract</span> — Short technical summary (~200 words)</p>
          <p><span className="text-amber-400">Copyright</span> — Licensing information</p>
          <p><span className="text-amber-400">Motivation</span> — Why this change is needed</p>
          <p><span className="text-amber-400">Specification</span> — Detailed technical specification</p>
          <p><span className="text-amber-400">Rationale</span> — Why design decisions were made</p>
          <p><span className="text-amber-400">Backwards Compatibility</span> — Impact on existing systems</p>
          <p><span className="text-amber-400">Reference Implementation</span> — Working code (optional but encouraged)</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The BIP Editor Role</h3>

      <p className="mb-4">
        BIP-1 created the role of <strong>BIP Editor</strong>, responsible for:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Assigning BIP numbers to proposals</li>
        <li>Ensuring BIPs meet formatting and quality standards</li>
        <li>Maintaining the BIP repository</li>
        <li>Updating BIP statuses as they progress</li>
      </ul>

      <Callout type="warning" title="Not a Gatekeeper">
        <p>
          The BIP Editor is <em>not</em> a gatekeeper who decides which ideas are good or bad.
          Their role is administrative—ensuring proposals are well-formatted and complete.
          The community decides which BIPs gain adoption.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP Licensing</h3>

      <p className="mb-4">
        BIP-1 requires all BIPs to be released under open licenses. Acceptable licenses include:
      </p>

      <ul className="list-disc list-inside space-y-1 mb-6 text-dark-300">
        <li>BSD-2-Clause or BSD-3-Clause</li>
        <li>CC0-1.0 (Creative Commons Zero - Public Domain)</li>
        <li>GNU-All-Permissive</li>
      </ul>

      <p className="mb-4">
        This ensures that anyone can implement BIP specifications without legal concerns—essential
        for an open protocol that multiple implementations must follow.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Legacy and Updates</h3>

      <p className="mb-4">
        BIP-1 itself has been updated and partially superseded over time. BIP-2 (2012) modified
        the workflow, and later updates refined the status categories. However, the core principles
        established in BIP-1 remain:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="text-amber-400">✓</span>
            <span>Open process accessible to anyone</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">✓</span>
            <span>Technical rigor through structured documentation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">✓</span>
            <span>Permissive licensing enabling implementation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">✓</span>
            <span>Consensus-driven adoption (not top-down mandates)</span>
          </li>
        </ul>
      </div>

      <Callout type="note" title="Reading the Original">
        <p>
          BIP-1 is a foundational document worth reading in full. It's clear, well-written, and
          provides insight into how Bitcoin's decentralized development process was designed.
          Find it at <code className="text-amber-400">bips.dev/1</code> or in the GitHub repository.
        </p>
      </Callout>
    </LessonLayout>
  );
}
