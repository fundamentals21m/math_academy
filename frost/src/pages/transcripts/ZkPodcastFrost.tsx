import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath } from '@/components/common/MathBlock';

export default function ZkPodcastFrost() {
  return (
    <TranscriptLayout transcriptId="zk-podcast-frost">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Schnorr signatures are superior to ECDSA for multiparty protocols</li>
          <li>FROST reduces signing to 2 rounds with optional preprocessing of round 1</li>
          <li>Arctic scheme enables deterministic, stateless threshold signatures with 51% honest majority</li>
          <li>FROST standardization is underway through CFRG and NIST</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Chelsea Komlo's Journey</h3>

      <p className="mb-4">
        Chelsea Komlo traces her path from contributing to Tor's privacy infrastructure to
        becoming a leading threshold cryptography researcher:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "I started working on Tor, then moved to OTR messaging protocol, and eventually
          found my way to threshold signatures through the Zcash Foundation."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Chelsea Komlo</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Schnorr Signatures Matter Now</h3>

      <p className="mb-4">
        With the Schnorr patent expiration, there's renewed interest in deploying these
        signatures for cryptocurrency applications:
      </p>

      <Definition title="Schnorr Signatures">
        <p>
          A digital signature scheme that serves as a "proof of knowledge of discrete log."
          Key advantages over ECDSA:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Linear signature aggregation enables efficient multisig</li>
          <li>Simpler security proofs in standard models</li>
          <li>Better suited for threshold and multi-party protocols</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">FROST Protocol Design</h3>

      <p className="mb-4">
        The discussion covers FROST's round optimization and preprocessing capabilities:
      </p>

      <Example title="FROST Round Structure">
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">Round 1</span>
            <span className="text-dark-300">
              Generate and share nonce commitments (can be precomputed)
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">Round 2</span>
            <span className="text-dark-300">
              Compute and share signature shares
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400 font-bold">Result</span>
            <span className="text-dark-300">
              Aggregate into valid Schnorr signature
            </span>
          </div>
        </div>
      </Example>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The first round can be preprocessed, making signing effectively non-interactive
          in practice."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Chelsea Komlo</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Trade-offs</h3>

      <p className="mb-4">
        The podcast explores the different axes of protocol design:
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Usability</p>
          <p className="text-sm text-dark-300">
            Number of rounds, state management requirements
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Security Assumptions</p>
          <p className="text-sm text-dark-300">
            ROM vs standard model, static vs adaptive
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Performance</p>
          <p className="text-sm text-dark-300">
            Computation cost, communication overhead
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Arctic Scheme</h3>

      <p className="mb-4">
        Chelsea discusses her upcoming work on Arctic, a new approach to threshold signatures:
      </p>

      <Definition title="Arctic: Deterministic Threshold Schnorr">
        <p>
          A new threshold signature scheme with different properties than FROST:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Deterministic nonce generation (stateless)</li>
          <li>Requires 51% honest majority (vs single honest party)</li>
          <li>Two-round protocol like FROST</li>
          <li>No state management between signing sessions</li>
        </ul>
      </Definition>

      <Callout type="info" title="Trade-off">
        <p>
          Arctic trades the single-honest-party security guarantee for the ability to
          be completely stateless. This is valuable for hardware wallet implementations
          where maintaining state is difficult.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Standardization Efforts</h3>

      <p className="mb-4">
        The podcast covers ongoing standardization work:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">CFRG Draft</p>
          <p className="text-sm text-dark-300">
            Internet Engineering Task Force's Crypto Forum Research Group is developing
            a FROST specification.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">NIST Submission</p>
          <p className="text-sm text-dark-300">
            Preparing threshold signature scheme submissions for NIST's post-quantum
            cryptography standardization process.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/3"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 3: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">Foundation for FROST</p>
        </a>
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: FROST Protocol
          </p>
          <p className="text-sm text-dark-500">Two-round threshold signing</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
