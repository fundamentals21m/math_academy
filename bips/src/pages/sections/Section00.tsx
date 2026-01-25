import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">What Are Bitcoin Improvement Proposals?</h2>

      <p className="mb-4">
        Bitcoin is open-source software, but it's also a global monetary system with billions of dollars at stake.
        How does such a system evolve without a central authority making decisions? The answer lies in{' '}
        <strong>Bitcoin Improvement Proposals</strong>, or <strong>BIPs</strong>.
      </p>

      <Callout type="info" title="Course Philosophy">
        <p>
          This course takes you through the complete landscape of Bitcoin's technical standards—from the very
          mechanism by which changes are proposed, to the consensus rules that secure trillions in value, to
          the wallet standards you use every day. By the end, you'll understand not just <em>what</em> Bitcoin
          does, but <em>how</em> it was designed to do it.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Coordination Problem</h3>

      <p className="mb-4">
        Bitcoin has no CEO, no board of directors, and no official development team. Yet somehow,
        thousands of independent node operators, miners, wallet developers, and users need to agree
        on exactly how the protocol works. A single bit flipped differently could split the network.
      </p>

      <p className="mb-4">
        BIPs solve this coordination problem by providing:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li><strong>A standard format</strong> for proposing changes</li>
        <li><strong>A public review process</strong> where anyone can comment</li>
        <li><strong>Clear specifications</strong> that multiple implementations can follow</li>
        <li><strong>Historical documentation</strong> of why decisions were made</li>
      </ul>

      <Definition title="Bitcoin Improvement Proposal (BIP)">
        <p>
          A BIP is a design document providing information to the Bitcoin community, describing a new feature,
          process, or environment for Bitcoin. BIPs are the primary mechanism for proposing new features,
          collecting community input, and documenting design decisions.
        </p>
        <p className="mt-2">
          The concept was borrowed from Python Enhancement Proposals (PEPs), adapted for Bitcoin's
          decentralized governance model.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The First BIP: BIP-1</h3>

      <p className="mb-4">
        Amir Taaki wrote the original BIP-1 in August 2011, establishing the BIP process itself.
        This meta-proposal defined what a BIP is, who can write one, and how they're reviewed.
        In a sense, BIP-1 bootstrapped Bitcoin's entire standards process.
      </p>

      <Example title="BIP Types">
        <p className="mb-3">BIPs are categorized by what they propose:</p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-amber-400 font-mono">Standards Track</span>
            <span className="text-dark-400">—</span>
            <span>Changes affecting most Bitcoin implementations (consensus, networking, wallets)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-emerald-400 font-mono">Informational</span>
            <span className="text-dark-400">—</span>
            <span>Design issues, guidelines, or general information</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-purple-400 font-mono">Process</span>
            <span className="text-dark-400">—</span>
            <span>Changes to how Bitcoin development happens</span>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Study BIPs?</h3>

      <p className="mb-4">
        Understanding BIPs gives you superpowers in the Bitcoin ecosystem:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
          <p className="text-amber-400 font-bold mb-2">For Developers</p>
          <p className="text-sm text-dark-300">
            Implement wallets, nodes, and tools correctly by following the authoritative specifications
            rather than reverse-engineering existing code.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
          <p className="text-amber-400 font-bold mb-2">For Power Users</p>
          <p className="text-sm text-dark-300">
            Understand why your wallet works the way it does, what security properties you can rely on,
            and how to evaluate new features.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
          <p className="text-amber-400 font-bold mb-2">For Researchers</p>
          <p className="text-sm text-dark-300">
            Build on decades of cryptographic and protocol design work, avoiding pitfalls already
            discovered and documented.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
          <p className="text-amber-400 font-bold mb-2">For Investors</p>
          <p className="text-sm text-dark-300">
            Evaluate protocol changes and understand the technical foundations of what you're investing in.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Course Structure</h3>

      <p className="mb-4">
        This course is organized into eight parts, progressing from foundational concepts to advanced Layer 2 solutions:
      </p>

      <ol className="list-decimal list-inside space-y-2 text-dark-300 mb-6">
        <li><strong>BIP Process & Foundations:</strong> How BIPs work and how to read them</li>
        <li><strong>Consensus Layer:</strong> Soft forks that changed Bitcoin's rules (SegWit, Taproot)</li>
        <li><strong>Wallet Standards:</strong> HD wallets, mnemonics, and key derivation</li>
        <li><strong>Transaction Standards:</strong> PSBTs, Replace-by-Fee, and signature types</li>
        <li><strong>Address Encoding:</strong> From Base58 to Bech32m</li>
        <li><strong>Network & Peer Services:</strong> How nodes communicate</li>
        <li><strong>Mining & Validation:</strong> Block templates and fork management</li>
        <li><strong>Lightning & Layer 2:</strong> Scaling beyond the base layer</li>
      </ol>

      <Callout type="success" title="The BIP Repository">
        <p>
          All BIPs are publicly available at{' '}
          <code className="text-amber-400 bg-dark-800 px-1 rounded">github.com/bitcoin/bips</code>.
          Throughout this course, we'll reference the original documents so you can see the primary sources.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">A Living Standard</h3>

      <p className="mb-4">
        Bitcoin continues to evolve. New BIPs are proposed regularly, debated in public forums, and
        sometimes activated through soft forks. By understanding the BIP process, you'll be able to
        follow and evaluate future proposals as an informed participant in Bitcoin's decentralized governance.
      </p>

      <Callout type="note" title="Prerequisites">
        <p>
          This course assumes basic familiarity with Bitcoin concepts (transactions, blocks, mining)
          and some programming knowledge. Don't worry if you're not an expert—we'll explain
          cryptographic concepts as we encounter them.
        </p>
      </Callout>
    </LessonLayout>
  );
}
