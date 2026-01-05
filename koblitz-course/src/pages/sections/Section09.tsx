import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>RSA</h2>

      <p>
        RSA, named after Rivest, Shamir, and Adleman (1977), is the most widely deployed
        public-key cryptosystem. Its security is based on the difficulty of factoring large
        integers.
      </p>

      <h3>Key Generation</h3>

      <Definition title="RSA Key Generation">
        <ol className="list-decimal list-inside space-y-2">
          <li>Choose two large distinct primes <em>p</em> and <em>q</em></li>
          <li>Compute <MathBlock math="n = pq" inline /> (the modulus)</li>
          <li>Compute <MathBlock math="\varphi(n) = (p-1)(q-1)" inline /></li>
          <li>Choose <em>e</em> with <MathBlock math="1 < e < \varphi(n)" inline /> and <MathBlock math="\gcd(e, \varphi(n)) = 1" inline /></li>
          <li>Compute <MathBlock math="d \equiv e^{-1} \pmod{\varphi(n)}" inline /></li>
        </ol>
        <p className="mt-2"><strong>Public key:</strong> <MathBlock math="(n, e)" inline /></p>
        <p><strong>Private key:</strong> <MathBlock math="d" inline /> (or equivalently <em>p, q</em>)</p>
      </Definition>

      <h3>Encryption and Decryption</h3>

      <Theorem
        title="RSA Encryption/Decryption"
        proof={
          <>
            <p>
              <strong>Well-definedness:</strong> We must verify that decryption recovers the original message,
              i.e., that <MathBlock math="(M^e)^d \equiv M \pmod{n}" inline /> for all <MathBlock math="M \in \mathbb{Z}_n" inline />.
            </p>
            <p className="mt-2">
              By construction, <MathBlock math="ed \equiv 1 \pmod{\varphi(n)}" inline />, so we can write
              <MathBlock math="ed = 1 + k\varphi(n)" inline /> for some integer <MathBlock math="k \geq 0" inline />.
            </p>
            <p className="mt-2">
              <strong>Case 1:</strong> If <MathBlock math="\gcd(M, n) = 1" inline />, then by Euler's theorem:
            </p>
            <MathBlock math="M^{\varphi(n)} \equiv 1 \pmod{n}" />
            <p className="mt-2">Therefore:</p>
            <MathBlock math="M^{ed} = M^{1 + k\varphi(n)} = M \cdot (M^{\varphi(n)})^k \equiv M \cdot 1^k = M \pmod{n}" />
            <p className="mt-2">
              <strong>Case 2:</strong> If <MathBlock math="\gcd(M, n) \neq 1" inline />, then since <MathBlock math="n = pq" inline /> with
              <MathBlock math="p \neq q" inline /> prime, we have <MathBlock math="M \equiv 0 \pmod{p}" inline /> or
              <MathBlock math="M \equiv 0 \pmod{q}" inline /> (or both).
            </p>
            <p className="mt-2">
              Suppose <MathBlock math="M \equiv 0 \pmod{p}" inline /> but <MathBlock math="\gcd(M, q) = 1" inline />.
              Then <MathBlock math="M^{ed} \equiv 0 \equiv M \pmod{p}" inline />.
              By Fermat's little theorem, <MathBlock math="M^{q-1} \equiv 1 \pmod{q}" inline />, and since
              <MathBlock math="(p-1) \mid \varphi(n)" inline />:
            </p>
            <MathBlock math="M^{ed} = M \cdot M^{k\varphi(n)} = M \cdot (M^{q-1})^{k(p-1)} \equiv M \cdot 1 = M \pmod{q}" />
            <p className="mt-2">
              By the Chinese Remainder Theorem, <MathBlock math="M^{ed} \equiv M \pmod{n}" inline />.
            </p>
          </>
        }
      >
        For message <MathBlock math="M \in \{0, 1, \ldots, n-1\}" inline />:
        <p className="mt-2"><strong>Encryption:</strong></p>
        <MathBlock math="C = M^e \bmod n" />
        <p><strong>Decryption:</strong></p>
        <MathBlock math="M = C^d \bmod n" />
      </Theorem>

      <Theorem
        title="RSA Correctness"
        proof={
          <>
            <p>
              Since <MathBlock math="ed \equiv 1 \pmod{\varphi(n)}" inline />, we can write
              <MathBlock math="ed = 1 + k\varphi(n)" inline /> for some non-negative integer <MathBlock math="k" inline />.
            </p>
            <p className="mt-2">
              For <MathBlock math="M" inline /> coprime to <MathBlock math="n" inline />, by Euler's theorem
              <MathBlock math="M^{\varphi(n)} \equiv 1 \pmod{n}" inline />:
            </p>
            <MathBlock math="M^{ed} = M^{1+k\varphi(n)} = M \cdot (M^{\varphi(n)})^k \equiv M \cdot 1^k = M \pmod{n}" />
            <p className="mt-2">
              For the case when <MathBlock math="\gcd(M, n) \neq 1" inline />, we use the Chinese Remainder Theorem
              by verifying the congruence modulo <MathBlock math="p" inline /> and modulo <MathBlock math="q" inline /> separately,
              applying Fermat's little theorem to each prime factor.
            </p>
          </>
        }
      >
        Decryption recovers the original message: <MathBlock math="(M^e)^d \equiv M \pmod{n}" inline />
      </Theorem>

      <Example title="Small RSA Example">
        <p><strong>Key Generation:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Choose <MathBlock math="p = 61, q = 53" inline /></li>
          <li><MathBlock math="n = 61 \times 53 = 3233" inline /></li>
          <li><MathBlock math="\varphi(n) = 60 \times 52 = 3120" inline /></li>
          <li>Choose <MathBlock math="e = 17" inline /> (coprime to 3120)</li>
          <li><MathBlock math="d = 17^{-1} \bmod 3120 = 2753" inline /></li>
        </ul>
        <p className="mt-2"><strong>Encryption:</strong> Encrypt <MathBlock math="M = 65" inline /></p>
        <MathBlock math="C = 65^{17} \bmod 3233 = 2790" />
        <p><strong>Decryption:</strong></p>
        <MathBlock math="M = 2790^{2753} \bmod 3233 = 65" />
      </Example>

      <h3>Security of RSA</h3>

      <Definition title="RSA Problem">
        Given the public key <MathBlock math="(n, e)" inline /> and ciphertext <em>C</em>, find
        the plaintext <em>M</em> such that <MathBlock math="C \equiv M^e \pmod{n}" inline />.
      </Definition>

      <Callout type="info">
        <strong>Factoring Connection:</strong> If we can factor <em>n</em> into <em>p</em> and <em>q</em>,
        we can compute <MathBlock math="\varphi(n)" inline />, then <em>d</em>, breaking RSA.
        Conversely, knowing <em>d</em> allows efficient factoring. Thus RSA security is closely
        tied to the factoring problem.
      </Callout>

      <h3>Implementation Considerations</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Key Size Recommendations</h4>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Security Level</th>
              <th className="text-left py-2">RSA Modulus</th>
              <th className="text-left py-2">Use Until</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">80-bit</td>
              <td className="py-2">1024 bits</td>
              <td className="py-2">Deprecated</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">112-bit</td>
              <td className="py-2">2048 bits</td>
              <td className="py-2">2030</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">128-bit</td>
              <td className="py-2">3072 bits</td>
              <td className="py-2">Beyond 2030</td>
            </tr>
            <tr>
              <td className="py-2">256-bit</td>
              <td className="py-2">15360 bits</td>
              <td className="py-2">Long-term</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>CRT Optimization</h3>

      <Theorem
        title="RSA with Chinese Remainder Theorem"
        proof={
          <>
            <p>
              <strong>Correctness:</strong> We show that the CRT-based computation yields <MathBlock math="M = C^d \bmod n" inline />.
            </p>
            <p className="mt-2">
              By Fermat's little theorem, for any <MathBlock math="x" inline /> and prime <MathBlock math="p" inline />:
            </p>
            <MathBlock math="x^{p-1} \equiv 1 \pmod{p} \quad \text{if } \gcd(x, p) = 1" />
            <p className="mt-2">
              Since <MathBlock math="d_p = d \bmod (p-1)" inline />, we can write <MathBlock math="d = d_p + k(p-1)" inline /> for some integer <MathBlock math="k" inline />. Then:
            </p>
            <MathBlock math="C^d \equiv C^{d_p + k(p-1)} = C^{d_p} \cdot (C^{p-1})^k \equiv C^{d_p} \cdot 1^k = C^{d_p} \pmod{p}" />
            <p className="mt-2">
              Similarly, <MathBlock math="C^d \equiv C^{d_q} \pmod{q}" inline />. So:
            </p>
            <MathBlock math="M_p = C^{d_p} \bmod p \equiv M \pmod{p}" />
            <MathBlock math="M_q = C^{d_q} \bmod q \equiv M \pmod{q}" />
            <p className="mt-2">
              The CRT reconstruction formula <MathBlock math="M = M_q + q \cdot (q_{\text{inv}} \cdot (M_p - M_q) \bmod p)" inline /> gives
              the unique value in <MathBlock math="[0, n-1]" inline /> satisfying both congruences.
            </p>
            <p className="mt-2">
              <strong>Efficiency:</strong> Exponentiations <MathBlock math="C^{d_p} \bmod p" inline /> and <MathBlock math="C^{d_q} \bmod q" inline /> each
              use operands of half the bit-length. Since modular exponentiation is <MathBlock math="O(k^3)" inline /> where <MathBlock math="k" inline /> is the bit-length,
              two half-size exponentiations cost <MathBlock math="2 \cdot (k/2)^3 = k^3/4" inline />, yielding a ~4× speedup.
            </p>
          </>
        }
      >
        Decryption can be sped up ~4× using CRT. Precompute:
        <MathBlock math="d_p = d \bmod (p-1), \quad d_q = d \bmod (q-1), \quad q_{\text{inv}} = q^{-1} \bmod p" />
        Then compute:
        <MathBlock math="M_p = C^{d_p} \bmod p, \quad M_q = C^{d_q} \bmod q" />
        <MathBlock math="M = M_q + q \cdot (q_{\text{inv}} \cdot (M_p - M_q) \bmod p)" />
      </Theorem>

      <h3>Attacks on RSA</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Known Attacks</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Factoring:</strong> If <em>n</em> can be factored, RSA is broken</li>
          <li><strong>Small e attacks:</strong> If <MathBlock math="M^e < n" inline />, take <em>e</em>-th root</li>
          <li><strong>Common modulus:</strong> Never use same <em>n</em> for different users</li>
          <li><strong>Timing attacks:</strong> Measure computation time to leak <em>d</em></li>
          <li><strong>Bleichenbacher's attack:</strong> Against PKCS#1 v1.5 padding</li>
        </ul>
      </div>

      <Callout type="warning">
        <strong>Textbook RSA is Insecure!</strong> Raw RSA is deterministic (same message → same
        ciphertext) and malleable. Always use proper padding schemes like OAEP.
      </Callout>

      <h3>RSA Signatures</h3>

      <Definition title="RSA Signature Scheme">
        <p><strong>Sign:</strong> <MathBlock math="\sigma = H(M)^d \bmod n" inline /></p>
        <p><strong>Verify:</strong> Check that <MathBlock math="\sigma^e \equiv H(M) \pmod{n}" inline /></p>
        <p className="mt-2">where <MathBlock math="H" inline /> is a cryptographic hash function.</p>
      </Definition>

      <Example title="RSA Signature">
        <p>Using keys from earlier (<MathBlock math="n = 3233, e = 17, d = 2753" inline />):</p>
        <p className="mt-2">Sign message hash <MathBlock math="H(M) = 100" inline />:</p>
        <MathBlock math="\sigma = 100^{2753} \bmod 3233 = 1951" />
        <p>Verify: <MathBlock math="1951^{17} \bmod 3233 = 100 = H(M)" inline /> ✓</p>
      </Example>

      <Callout type="success">
        <strong>RSA's Legacy:</strong> Despite being nearly 50 years old, RSA remains widely used
        for key exchange and digital signatures. Its mathematical elegance and well-understood
        security properties have made it a cornerstone of internet security.
      </Callout>
    </LessonLayout>
  );
}
