import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function LibsecPanel() {
  return (
    <TranscriptLayout transcriptId="libsec-panel">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>libsecp256k1 was created because OpenSSL had security vulnerabilities and performance issues</li>
          <li>The library achieves constant-time operations to prevent timing side-channel attacks</li>
          <li>Extensive testing includes differential fuzzing against other implementations</li>
          <li>The codebase prioritizes auditability and formal verification potential</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why libsecp256k1 Exists</h3>

      <p className="mb-4">
        The panel opens with a discussion of <strong>why Bitcoin needed its own cryptographic library</strong>
        instead of using OpenSSL. Tim Ruffing explains the historical context:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "OpenSSL was designed for TLS, not for cryptocurrency. It optimizes for average case performance,
          but Bitcoin needs consistent, constant-time operations. A single timing leak could reveal a
          private key."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <Definition title="Constant-Time Operations">
        <p>
          A cryptographic implementation is <strong>constant-time</strong> when its execution time
          doesn't depend on secret values. This prevents <em>timing side-channel attacks</em> where
          an attacker measures how long operations take to infer secret information.
        </p>
        <p className="mt-2">
          For example, a naive implementation might return early when comparing signatures:
        </p>
        <pre className="mt-2 p-3 bg-dark-800 rounded-lg text-sm overflow-x-auto">
{`// VULNERABLE: Returns early on mismatch
for (int i = 0; i < 32; i++) {
    if (a[i] != b[i]) return false;  // Timing leak!
}
return true;`}
        </pre>
        <p className="mt-2">
          libsecp256k1 always takes the same time regardless of input values.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The OpenSSL Vulnerabilities</h3>

      <p className="mb-4">
        Jonas Nick details specific issues with OpenSSL that motivated the new library:
      </p>

      <Example title="OpenSSL Issues That Affected Bitcoin">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>CVE-2014-3570:</strong> BN_sqr function could produce incorrect results,
            potentially allowing signature forgery
          </li>
          <li>
            <strong>Non-constant-time scalar multiplication:</strong> Branch instructions
            based on secret key bits leaked timing information
          </li>
          <li>
            <strong>Memory allocation patterns:</strong> Dynamic memory use created observable
            side channels
          </li>
          <li>
            <strong>Complex codebase:</strong> 500k+ lines made auditing nearly impossible
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Design Philosophy</h3>

      <p className="mb-4">
        Lloyd Fournier discusses the library's core design principles:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Simplicity</p>
          <p className="text-sm text-dark-300">
            ~15,000 lines of focused code vs OpenSSL's 500k+. Every line can be audited
            and reasoned about.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">No Dynamic Allocation</p>
          <p className="text-sm text-dark-300">
            All memory is stack-allocated or provided by caller. Eliminates allocation-based
            side channels.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Constant-Time Everywhere</p>
          <p className="text-sm text-dark-300">
            All secret-dependent operations run in constant time, verified through
            specialized tooling.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Formal Methods Ready</p>
          <p className="text-sm text-dark-300">
            Code structure allows for formal verification of critical properties.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Testing Infrastructure</h3>

      <p className="mb-4">
        Jesse Posner explains the library's comprehensive testing approach:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "We differential fuzz against multiple independent implementations. If our ECDSA
          produces different results than reference implementations on any input, that's
          immediately flagged. We've found bugs in other libraries this way."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jesse Posner</cite>
      </blockquote>

      <Definition title="Differential Fuzzing">
        <p>
          <strong>Differential fuzzing</strong> runs the same random inputs through multiple
          implementations and compares outputs. Discrepancies indicate bugs in at least one
          implementation.
        </p>
        <p className="mt-2">
          libsecp256k1 uses this against:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>OpenSSL's EC implementation</li>
          <li>Python's ecdsa library</li>
          <li>Reference test vectors from SEC standards</li>
          <li>Historical Bitcoin transactions (consensus compatibility)</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Performance Optimizations</h3>

      <p className="mb-4">
        Tim Ruffing discusses how the library achieves both security <em>and</em> performance:
      </p>

      <Example title="Key Optimizations in libsecp256k1">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-dark-100">Endomorphism Optimization</p>
            <p className="text-sm text-dark-300 mt-1">
              secp256k1 has an efficiently computable endomorphism <InlineMath>\lambda</InlineMath> where{' '}
              <InlineMath>{`\\lambda^2 + \\lambda + 1 \\equiv 0 \\pmod{n}`}</InlineMath>. This allows
              splitting scalar multiplication, achieving ~20% speedup.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">GLV Method</p>
            <p className="text-sm text-dark-300 mt-1">
              Uses the Gallant-Lambert-Vanstone method to decompose{' '}
              <InlineMath>kP</InlineMath> into{' '}
              <InlineMath>{`k_1 P + k_2 \\lambda(P)`}</InlineMath> where{' '}
              <InlineMath>k_1, k_2</InlineMath> are half the bit-length of <InlineMath>k</InlineMath>.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Precomputed Tables</p>
            <p className="text-sm text-dark-300 mt-1">
              Generator point multiples are precomputed at compile time, making{' '}
              <InlineMath>kG</InlineMath> (key generation) extremely fast.
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Side-Channel Resistance</h3>

      <p className="mb-4">
        Jonas Nick provides a deep dive into side-channel attack prevention:
      </p>

      <Callout type="warning" title="Types of Side-Channel Attacks">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>Timing attacks:</strong> Measuring operation duration</li>
          <li><strong>Cache attacks:</strong> Observing memory access patterns</li>
          <li><strong>Power analysis:</strong> Measuring CPU power consumption</li>
          <li><strong>Branch prediction:</strong> Exploiting CPU speculative execution</li>
        </ul>
      </Callout>

      <p className="mb-4">
        libsecp256k1's mitigations include:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>No secret-dependent branches:</strong> Uses conditional moves (CMOV) instead
          of if/else on secrets
        </li>
        <li>
          <strong>Fixed memory access patterns:</strong> All table lookups access every element,
          using masks to select the correct one
        </li>
        <li>
          <strong>Randomized projective coordinates:</strong> Point representation is randomized
          to prevent DPA attacks
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The MuSig Module</h3>

      <p className="mb-4">
        Lloyd Fournier discusses the newer MuSig support in the library:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "MuSig2 is now part of libsecp256k1-zkp. It's been designed with the same security
          principles—constant-time, no dynamic allocation, formally verified nonce generation.
          The hardest part was getting nonce handling right without sacrificing usability."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Lloyd Fournier</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Future Directions</h3>

      <p className="mb-4">
        The panel concludes with discussion of upcoming developments:
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Roadmap Items</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-cyan-400 text-sm">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">FROST Support</p>
              <p className="text-sm text-dark-400">Threshold signatures for multisig wallets</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-cyan-400 text-sm">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Batch Verification</p>
              <p className="text-sm text-dark-400">Verify many signatures faster than individually</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-cyan-400 text-sm">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Adaptor Signatures</p>
              <p className="text-sm text-dark-400">Enabling scriptless scripts and atomic swaps</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-cyan-400 text-sm">4</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Formal Verification</p>
              <p className="text-sm text-dark-400">Mathematically proving correctness of critical paths</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <p className="mb-4">
        Explore these course sections to deepen your understanding of the concepts discussed:
      </p>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/0"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 0: The Big Picture
          </p>
          <p className="text-sm text-dark-500">Introduction to secp256k1 and elliptic curves</p>
        </a>
        <a
          href="#/section/3"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 3: Finite Fields
          </p>
          <p className="text-sm text-dark-500">The mathematical foundation of the curve</p>
        </a>
        <a
          href="#/section/6"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 6: ECDSA Signing
          </p>
          <p className="text-sm text-dark-500">How digital signatures actually work</p>
        </a>
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">The modern alternative to ECDSA</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
