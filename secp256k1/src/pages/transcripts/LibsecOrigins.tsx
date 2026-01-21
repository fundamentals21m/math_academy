import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath } from '@/components/common/MathBlock';

export default function LibsecOrigins() {
  return (
    <TranscriptLayout transcriptId="libsec-origins">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>libsecp256k1 was created to replace OpenSSL's vulnerable EC implementation</li>
          <li>The library prioritizes constant-time operations over raw speed</li>
          <li>Pieter Wuille wrote the initial implementation starting around 2013</li>
          <li>Design choices favor auditability and security over features</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Genesis of libsecp256k1</h3>

      <p className="mb-4">
        Pieter Wuille discusses the origins of the library and what motivated its creation:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Bitcoin was using OpenSSL for all its cryptographic operations. This was convenient
          but problematic—OpenSSL is a massive codebase designed for TLS, not cryptocurrency.
          We needed something purpose-built."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Pieter Wuille</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Not Just Patch OpenSSL?</h3>

      <p className="mb-4">
        Rather than trying to fix OpenSSL, the decision was made to build from scratch:
      </p>

      <Example title="Problems with OpenSSL for Bitcoin">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Code complexity:</strong> 500,000+ lines made auditing impossible
          </li>
          <li>
            <strong>Non-constant-time:</strong> Operations leaked timing information
          </li>
          <li>
            <strong>Consensus risks:</strong> OpenSSL updates could change behavior
          </li>
          <li>
            <strong>Feature bloat:</strong> Bitcoin only needed a tiny subset of functionality
          </li>
        </ul>
      </Example>

      <Definition title="Consensus-Critical Code">
        <p>
          In Bitcoin, signature verification must produce <em>identical results</em> across
          all nodes forever. If OpenSSL changed how it parsed signatures (even fixing a "bug"),
          it could cause network splits where some nodes accept transactions others reject.
        </p>
        <p className="mt-2">
          libsecp256k1 gives Bitcoin full control over this consensus-critical code path.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Design Philosophy</h3>

      <p className="mb-4">
        Pieter explains the core principles that guided the library's design:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Minimalism</p>
          <p className="text-sm text-dark-300">
            Only implement what's needed. No ASN.1 parsing, no certificate handling,
            just elliptic curve operations.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Constant-Time First</p>
          <p className="text-sm text-dark-300">
            Every operation touching secret data runs in constant time. Performance
            comes second to security.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">No Dynamic Allocation</p>
          <p className="text-sm text-dark-300">
            All memory is stack-allocated. This eliminates heap-based side channels
            and simplifies security analysis.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Extensive Testing</p>
          <p className="text-sm text-dark-300">
            Differential fuzzing against multiple implementations catches subtle bugs
            that unit tests miss.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Transition from OpenSSL</h3>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The transition was gradual. We first used libsecp256k1 alongside OpenSSL for
          verification, comparing results. Only after extensive testing did we make it
          the default. The performance improvement was dramatic—signature verification
          became about 7x faster."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Pieter Wuille</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Implementation Decisions</h3>

      <Example title="Technical Choices in libsecp256k1">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-dark-100">Field Element Representation</p>
            <p className="text-sm text-dark-300 mt-1">
              Uses 5x52-bit limbs on 64-bit platforms, 10x26-bit on 32-bit.
              This allows efficient multiplication without overflow.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Point Representation</p>
            <p className="text-sm text-dark-300 mt-1">
              Jacobian coordinates <InlineMath>(X, Y, Z)</InlineMath> where the affine point is{' '}
              <InlineMath>(X/Z^2, Y/Z^3)</InlineMath>. Avoids expensive field inversions.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Scalar Multiplication</p>
            <p className="text-sm text-dark-300 mt-1">
              Uses a combination of windowed NAF and the GLV endomorphism for
              optimal performance while maintaining constant-time properties.
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Impact on Bitcoin</h3>

      <p className="mb-4">
        The adoption of libsecp256k1 had significant effects:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li><strong>7x faster verification:</strong> Dramatically improved IBD (Initial Block Download)</li>
        <li><strong>Reduced attack surface:</strong> Consensus code no longer depends on external library updates</li>
        <li><strong>Foundation for Schnorr:</strong> The clean design made adding BIP340 straightforward</li>
        <li><strong>Industry adoption:</strong> Now used by Ethereum, Litecoin, and many other projects</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/0"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 0: The Big Picture
          </p>
          <p className="text-sm text-dark-500">Why secp256k1 was chosen for Bitcoin</p>
        </a>
        <a
          href="#/section/4"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 4: The secp256k1 Parameters
          </p>
          <p className="text-sm text-dark-500">Deep dive into the curve constants</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
