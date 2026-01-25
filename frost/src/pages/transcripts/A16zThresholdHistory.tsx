import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath } from '@/components/common/MathBlock';

export default function A16zThresholdHistory() {
  return (
    <TranscriptLayout transcriptId="a16z-threshold-history">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Early threshold Schnorr schemes had critical security vulnerabilities</li>
          <li>Static vs adaptive security is a fundamental design choice</li>
          <li>Performance overhead varies significantly between security models</li>
          <li>Deterministic threshold signatures remain an open research area</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Historical Security Vulnerabilities</h3>

      <p className="mb-4">
        Chelsea Komlo examines the security pitfalls that plagued early threshold Schnorr
        signature designs:
      </p>

      <Example title="Evolution of Threshold Schnorr Security">
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400 font-semibold">Early Schemes (Pre-2020)</p>
            <p className="text-dark-300 mt-1">
              Vulnerable to rogue key attacks, nonce manipulation, and concurrent session attacks
            </p>
          </div>
          <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-yellow-400 font-semibold">Intermediate Period</p>
            <p className="text-dark-300 mt-1">
              Patches addressed individual attacks but lacked comprehensive security proofs
            </p>
          </div>
          <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-400 font-semibold">FROST (2020+)</p>
            <p className="text-dark-300 mt-1">
              First provably secure threshold Schnorr scheme with concurrent security
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Static vs Adaptive Security</h3>

      <p className="mb-4">
        A core theme of the talk is the trade-off between security models:
      </p>

      <Definition title="Security Models">
        <div className="space-y-3 mt-2">
          <div>
            <p className="text-indigo-400 font-semibold">Static Security</p>
            <p className="text-dark-300 text-sm">
              The adversary must choose which parties to corrupt before the protocol begins.
              Easier to achieve, lower overhead.
            </p>
          </div>
          <div>
            <p className="text-indigo-400 font-semibold">Adaptive Security</p>
            <p className="text-dark-300 text-sm">
              The adversary can corrupt parties during protocol execution based on observed
              messages. Stronger but more expensive.
            </p>
          </div>
        </div>
      </Definition>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The choice between static and adaptive security has significant implications
          for both the protocol design and its performance characteristics."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Chelsea Komlo</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Performance vs Security Trade-offs</h3>

      <p className="mb-4">
        The presentation quantifies the overhead of different security guarantees:
      </p>

      <Example title="Security Model Overhead Comparison">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Security Model</th>
              <th className="pb-2">Rounds</th>
              <th className="pb-2">Computation</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Static (ROM)</td>
              <td>2</td>
              <td className="text-green-400">Low</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Static (Standard)</td>
              <td>2-3</td>
              <td className="text-yellow-400">Medium</td>
            </tr>
            <tr>
              <td className="py-2">Adaptive</td>
              <td>3+</td>
              <td className="text-red-400">High</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="Practical Consideration">
        <p>
          For most real-world applications, static security in the Random Oracle Model (ROM)
          provides sufficient guarantees with acceptable performance. Adaptive security is
          primarily of theoretical interest.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Deterministic Threshold Signatures</h3>

      <p className="mb-4">
        An active area of research is eliminating the need for random nonces:
      </p>

      <Definition title="Deterministic Nonce Generation">
        <p>
          Instead of generating fresh random nonces for each signature, deterministic
          schemes derive nonces from:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The message being signed</li>
          <li>The signer's secret key share</li>
          <li>A counter or protocol-specific context</li>
        </ul>
        <p className="mt-2 text-amber-400 text-sm">
          Challenge: Coordination required to prevent nonce reuse across parties.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Open Research Challenges</h3>

      <p className="mb-4">
        Chelsea identifies several unresolved questions for the research community:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Proactive Security</p>
          <p className="text-sm text-dark-300">
            Can key shares be refreshed to limit the window of vulnerability from
            a compromised party?
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Post-Quantum</p>
          <p className="text-sm text-dark-300">
            How do we build threshold signatures from lattice-based or other
            quantum-resistant primitives?
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Efficient DKG</p>
          <p className="text-sm text-dark-300">
            Can distributed key generation be made more efficient and robust
            against network failures?
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Composability</p>
          <p className="text-sm text-dark-300">
            How do threshold signatures compose with other cryptographic protocols
            (ZK proofs, MPC)?
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Path Forward</h3>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "We've made tremendous progress in threshold Schnorr signatures, but there's
          still important work to be done on practical deployment, standardization,
          and new theoretical foundations."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Chelsea Komlo</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/1"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 1: Introduction to Threshold Signatures
          </p>
          <p className="text-sm text-dark-500">Historical context</p>
        </a>
        <a
          href="#/section/12"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 12: Security Models
          </p>
          <p className="text-sm text-dark-500">Static vs adaptive security</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
