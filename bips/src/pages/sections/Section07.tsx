import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">A Practical Reading Guide</h2>

      <p className="mb-4">
        BIPs can be dense, technical documents. This section provides a practical framework for
        reading and understanding them efficiently. Whether you're a developer implementing a
        feature or an enthusiast evaluating a proposal, these techniques will help.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The BIP Anatomy</h3>

      <p className="mb-4">
        Every BIP follows a standard structure. Knowing this structure helps you navigate quickly:
      </p>

      <div className="bg-dark-900 rounded-xl overflow-hidden mb-6">
        <div className="bg-amber-500/10 p-4 border-b border-dark-700">
          <h4 className="text-amber-400 font-bold">Preamble (Always read first)</h4>
          <p className="text-sm text-dark-300 mt-1">
            BIP number, title, author, status, type, layer. Tells you what you're dealing with.
          </p>
        </div>
        <div className="bg-emerald-500/10 p-4 border-b border-dark-700">
          <h4 className="text-emerald-400 font-bold">Abstract (1-2 paragraphs)</h4>
          <p className="text-sm text-dark-300 mt-1">
            TL;DR of the entire proposal. Read this to decide if you need to read more.
          </p>
        </div>
        <div className="bg-blue-500/10 p-4 border-b border-dark-700">
          <h4 className="text-blue-400 font-bold">Motivation (Why)</h4>
          <p className="text-sm text-dark-300 mt-1">
            Problem statement. What issue does this solve? Why is the current situation inadequate?
          </p>
        </div>
        <div className="bg-purple-500/10 p-4 border-b border-dark-700">
          <h4 className="text-purple-400 font-bold">Specification (What)</h4>
          <p className="text-sm text-dark-300 mt-1">
            Technical details. Exact rules, data formats, algorithms. The normative content.
          </p>
        </div>
        <div className="bg-cyan-500/10 p-4 border-b border-dark-700">
          <h4 className="text-cyan-400 font-bold">Rationale (Why This Way)</h4>
          <p className="text-sm text-dark-300 mt-1">
            Design decisions explained. Why were alternatives rejected? What tradeoffs were made?
          </p>
        </div>
        <div className="bg-rose-500/10 p-4">
          <h4 className="text-rose-400 font-bold">Backwards Compatibility</h4>
          <p className="text-sm text-dark-300 mt-1">
            Impact on existing systems. Migration paths. What breaks, what doesn't.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Reading Strategies</h3>

      <Definition title="Top-Down Reading">
        <p>
          Start with Abstract → Motivation → skim Specification → read Rationale. Good for
          understanding <em>why</em> a BIP exists and whether you need the details.
        </p>
      </Definition>

      <Definition title="Bottom-Up Reading">
        <p>
          Start with Specification, use Rationale for clarification. Good for implementers
          who need exact details. The spec is the authoritative truth.
        </p>
      </Definition>

      <Example title="Quick Evaluation Checklist">
        <p className="mb-3">When evaluating a BIP quickly, answer these questions:</p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>What <strong>layer</strong> does it affect? (Consensus = high stakes)</li>
          <li>What <strong>status</strong> is it? (Draft = may change; Final = stable)</li>
          <li>What <strong>problem</strong> does it solve? (Motivation section)</li>
          <li>Who are the <strong>authors</strong>? (Known developers? First-time contributors?)</li>
          <li>Is there a <strong>reference implementation</strong>? (Code demonstrates feasibility)</li>
          <li>What are the <strong>tradeoffs</strong>? (Rationale section)</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Understanding Technical Notation</h3>

      <p className="mb-4">
        BIPs use specific conventions you'll encounter repeatedly:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-mono mb-2">OP_CODE</p>
          <p className="text-sm text-dark-300">
            Bitcoin Script opcodes (e.g., OP_CHECKSIG, OP_RETURN)
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-mono mb-2">0x1234</p>
          <p className="text-sm text-dark-300">
            Hexadecimal values (common for bytes, hashes)
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-mono mb-2">MUST / SHALL</p>
          <p className="text-sm text-dark-300">
            RFC 2119 keywords—absolute requirements
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-mono mb-2">SHOULD / MAY</p>
          <p className="text-sm text-dark-300">
            RFC 2119—recommended or optional behaviors
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-mono mb-2">m' / m/44'/0'</p>
          <p className="text-sm text-dark-300">
            BIP-32 derivation paths (hardened marked with ')
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-mono mb-2">SHA256(x)</p>
          <p className="text-sm text-dark-300">
            Cryptographic hash functions
          </p>
        </div>
      </div>

      <Callout type="info" title="RFC 2119 Keywords">
        <p>
          BIPs use RFC 2119 terminology. <strong>MUST</strong> means required for conformance.
          <strong>SHOULD</strong> means recommended but not required. <strong>MAY</strong> means
          truly optional. Pay attention to these—they define the spec.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Common Sections to Focus On</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">For Developers</h4>
          <p className="text-dark-300">
            Focus on <strong>Specification</strong> and <strong>Reference Implementation</strong>.
            These sections contain the normative details you need to implement correctly.
            Check test vectors if provided.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">For Evaluators</h4>
          <p className="text-dark-300">
            Focus on <strong>Motivation</strong>, <strong>Rationale</strong>, and{' '}
            <strong>Backwards Compatibility</strong>. Understand why this change is proposed
            and what impact it has.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">For Researchers</h4>
          <p className="text-dark-300">
            Check the <strong>References</strong> section for related work. Many BIPs cite
            academic papers, previous BIPs, and mailing list discussions that provide context.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Where to Find BIPs</h3>

      <Example title="BIP Resources">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>GitHub Repository:</strong>{' '}
            <code className="text-amber-400 text-sm">github.com/bitcoin/bips</code> — Authoritative source
          </li>
          <li>
            <strong>BIPs.dev:</strong>{' '}
            <code className="text-amber-400 text-sm">bips.dev</code> — Nicely formatted, searchable
          </li>
          <li>
            <strong>Bitcoin Core:</strong> Implementation often includes BIP references in comments
          </li>
          <li>
            <strong>Bitcoin Wiki:</strong> Historical context and discussion summaries
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practice: Reading BIP-16</h3>

      <p className="mb-4">
        Let's practice with BIP-16 (Pay-to-Script-Hash), one of the more readable BIPs:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 mb-6">
        <p className="text-dark-300 mb-4">
          <strong>Exercise:</strong> Open BIP-16 and identify:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>What problem does it solve? (Check Motivation)</li>
          <li>What's the new script pattern? (Check Specification)</li>
          <li>Why wasn't OP_EVAL used instead? (Check Rationale)</li>
          <li>When did it activate? (Check Deployment section or status)</li>
        </ol>
      </div>

      <Callout type="success" title="You're Ready">
        <p>
          With this foundation in the BIP process, you're now equipped to dive into specific
          BIPs. In Part 2, we'll start with the consensus-layer BIPs that define Bitcoin's
          core rules—starting with BIP-9's version bits and moving through SegWit and Taproot.
        </p>
      </Callout>
    </LessonLayout>
  );
}
