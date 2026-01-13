import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Implementation Pitfalls</h2>

      <p className="mb-4">
        Understanding the math is necessary but not sufficient. Implementing elliptic curve
        cryptography correctly is surprisingly difficult. Even small mistakes can completely
        break security.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Big Integer Arithmetic</h3>

      <p className="mb-4">
        secp256k1 uses 256-bit numbers, but most CPUs only support 64-bit arithmetic natively.
        This creates several challenges:
      </p>

      <Definition title="Multi-Precision Arithmetic">
        <p>
          A 256-bit number must be represented as an array of smaller "limbs." For example,
          four 64-bit limbs or eight 32-bit limbs. Operations must handle:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Carries:</strong> Addition overflow propagates between limbs</li>
          <li><strong>Borrows:</strong> Subtraction underflow propagates between limbs</li>
          <li><strong>Multiplication:</strong> Produces 512-bit intermediate results</li>
          <li><strong>Reduction:</strong> Bringing results back mod <InlineMath>p</InlineMath></li>
        </ul>
      </Definition>

      <Example title="Limb Representation">
        <p>A 256-bit number in four 64-bit limbs:</p>
        <MathBlock>
          {`n = l_0 + l_1 \\cdot 2^{64} + l_2 \\cdot 2^{128} + l_3 \\cdot 2^{192}`}
        </MathBlock>
        <p className="mt-2">
          Multiplication of two such numbers requires computing all 16 partial products and
          managing carries carefully.
        </p>
      </Example>

      <Callout type="warning" title="Don't Roll Your Own">
        <p>
          Implementing big integer arithmetic correctly is extremely error-prone. Use
          battle-tested libraries like GMP, or better yet, use a complete ECC library like
          libsecp256k1.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Constant-Time Operations</h3>

      <p className="mb-4">
        This is perhaps the most subtle and dangerous pitfall. <strong>Timing attacks</strong>{' '}
        can extract secret keys by measuring how long operations take.
      </p>

      <Definition title="Timing Side Channels">
        <p>
          If the execution time of cryptographic operations depends on secret values, an attacker
          can measure timing differences to learn those secrets.
        </p>
        <div className="bg-dark-800 rounded-lg p-4 mt-3 text-sm">
          <p className="text-rose-400 font-bold">Dangerous patterns:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Conditional branches on secret data</li>
            <li>Array indexing with secret indices</li>
            <li>Early-exit optimizations</li>
            <li>Variable-time multiplication</li>
          </ul>
        </div>
      </Definition>

      <Example title="Dangerous vs. Safe Code">
        <p className="text-rose-400 font-bold">Dangerous (timing leak):</p>
        <pre className="bg-dark-800 rounded-lg p-3 mt-2 text-sm font-mono overflow-x-auto">
{`// Leaks information about bit value
if (secret_bit == 1) {
    R = point_add(R, G);  // Takes ~1ms
}`}
        </pre>
        <p className="text-emerald-400 font-bold mt-4">Safe (constant time):</p>
        <pre className="bg-dark-800 rounded-lg p-3 mt-2 text-sm font-mono overflow-x-auto">
{`// Always does both, selects result
T = point_add(R, G);
R = constant_time_select(secret_bit, T, R);`}
        </pre>
      </Example>

      <Callout type="error" title="Real-World Timing Attacks">
        <p>
          In 2011, researchers extracted an OpenSSL private key by measuring timing variations
          in ECDSA signing—remotely, over a network. The attack exploited timing differences
          in modular inversion.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Point Representations</h3>

      <p className="mb-4">
        Different coordinate systems offer different performance trade-offs:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="pb-2">Representation</th>
              <th className="pb-2">Coordinates</th>
              <th className="pb-2">Inversions</th>
              <th className="pb-2">Use Case</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr>
              <td className="py-2 text-amber-400">Affine</td>
              <td><InlineMath>(x, y)</InlineMath></td>
              <td>Every operation</td>
              <td>Input/output only</td>
            </tr>
            <tr>
              <td className="py-2 text-emerald-400">Projective</td>
              <td><InlineMath>(X, Y, Z)</InlineMath> where <InlineMath>x = X/Z</InlineMath></td>
              <td>Only at the end</td>
              <td>General computation</td>
            </tr>
            <tr>
              <td className="py-2 text-cyan-400">Jacobian</td>
              <td><InlineMath>(X, Y, Z)</InlineMath> where <InlineMath>x = X/Z^2</InlineMath></td>
              <td>Only at the end</td>
              <td>Fastest for doubling</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Definition title="Why Avoid Inversions?">
        <p>
          Modular inversion (finding <InlineMath>a^{'{-1}'} \mod p</InlineMath>) is expensive—
          about 30-100x slower than multiplication. By using projective coordinates, we defer
          all inversions until the final result, doing just one inversion instead of hundreds.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Common Mistakes Checklist</h3>

      <div className="space-y-4">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-rose-400 font-bold">1. Nonce Reuse</p>
          <p className="text-sm text-dark-300 mt-1">
            Using the same <InlineMath>k</InlineMath> twice reveals the private key. Always use
            RFC 6979 for deterministic nonces.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-rose-400 font-bold">2. Weak Random Number Generation</p>
          <p className="text-sm text-dark-300 mt-1">
            Never use <code>rand()</code> or <code>Math.random()</code>. Use
            cryptographically secure sources like <code>/dev/urandom</code> or
            <code>crypto.getRandomValues()</code>.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-rose-400 font-bold">3. Not Validating Points</p>
          <p className="text-sm text-dark-300 mt-1">
            Always verify that input points are on the curve. Attackers can supply invalid
            points to extract information.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-rose-400 font-bold">4. Timing Variations</p>
          <p className="text-sm text-dark-300 mt-1">
            All operations on secret data must be constant-time. This includes comparisons,
            array lookups, and branches.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-rose-400 font-bold">5. Not Clearing Sensitive Memory</p>
          <p className="text-sm text-dark-300 mt-1">
            Private keys and intermediate values must be securely erased from memory after use.
            Optimizers may remove "dead" zeroing code.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Solution: libsecp256k1</h3>

      <p className="mb-4">
        Bitcoin Core maintains <strong>libsecp256k1</strong>, a highly optimized, constant-time
        implementation of secp256k1 operations. It's the gold standard for a reason:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Constant-time:</strong> All secret-dependent operations</li>
        <li><strong>Extensively tested:</strong> Fuzzing, formal verification, years of use</li>
        <li><strong>Optimized:</strong> Assembly for x86-64, ARM; 10x faster than naive implementations</li>
        <li><strong>Well-audited:</strong> Multiple security audits by experts</li>
      </ul>

      <Callout type="success" title="Best Practice">
        <p>
          Unless you're a cryptography expert doing research, <strong>don't implement ECC
          yourself</strong>. Use libsecp256k1 or bindings to it. The risk of subtle bugs is
          too high, and the consequences are catastrophic.
        </p>
      </Callout>
    </LessonLayout>
  );
}
