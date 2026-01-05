import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>Discrete Logarithm</h2>

      <p>
        The discrete logarithm problem (DLP) is another fundamental hard problem in cryptography,
        forming the basis of Diffie-Hellman key exchange, ElGamal encryption, and DSA signatures.
      </p>

      <h3>The Discrete Logarithm Problem</h3>

      <Definition title="Discrete Logarithm">
        Let <em>G</em> be a cyclic group of order <em>n</em> with generator <em>g</em>. Given{' '}
        <MathBlock math="h \in G" inline />, the <strong>discrete logarithm</strong> of <em>h</em>{' '}
        to base <em>g</em> is the integer <em>x</em> such that:
        <MathBlock math="g^x = h" />
        We write <MathBlock math="x = \log_g h" inline /> or <MathBlock math="x = \text{dlog}_g(h)" inline />.
      </Definition>

      <Definition title="Discrete Logarithm Problem (DLP)">
        Given a cyclic group <em>G</em>, generator <em>g</em>, and element <em>h</em>, find{' '}
        <MathBlock math="x = \log_g h" inline />.
      </Definition>

      <Example title="DLP in Small Group">
        <p>In <MathBlock math="\mathbb{Z}_{11}^*" inline /> with generator <MathBlock math="g = 2" inline />:</p>
        <div className="font-mono text-sm mt-2">
          <p>2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 5, 2⁵ = 10</p>
          <p>2⁶ = 9, 2⁷ = 7, 2⁸ = 3, 2⁹ = 6, 2¹⁰ = 1</p>
        </div>
        <p className="mt-2">So <MathBlock math="\log_2 7 = 7" inline /> in <MathBlock math="\mathbb{Z}_{11}^*" inline />.</p>
      </Example>

      <h3>ElGamal Encryption</h3>

      <Definition title="ElGamal Cryptosystem">
        <p><strong>Setup:</strong> Prime <em>p</em>, generator <em>g</em> of <MathBlock math="\mathbb{Z}_p^*" inline /></p>
        <p><strong>Key Generation:</strong></p>
        <ul className="list-disc list-inside mt-2">
          <li>Private key: random <MathBlock math="x \in \{1, \ldots, p-2\}" inline /></li>
          <li>Public key: <MathBlock math="h = g^x \bmod p" inline /></li>
        </ul>
        <p className="mt-2"><strong>Encryption:</strong> For message <MathBlock math="M \in \mathbb{Z}_p^*" inline />:</p>
        <ul className="list-disc list-inside">
          <li>Choose random <MathBlock math="k \in \{1, \ldots, p-2\}" inline /></li>
          <li>Compute <MathBlock math="c_1 = g^k \bmod p" inline />, <MathBlock math="c_2 = M \cdot h^k \bmod p" inline /></li>
          <li>Ciphertext: <MathBlock math="(c_1, c_2)" inline /></li>
        </ul>
        <p className="mt-2"><strong>Decryption:</strong></p>
        <MathBlock math="M = c_2 \cdot (c_1^x)^{-1} \bmod p = c_2 \cdot c_1^{p-1-x} \bmod p" />
      </Definition>

      <Example title="ElGamal Example">
        <p>Let <MathBlock math="p = 23, g = 5, x = 6" inline />. Public key: <MathBlock math="h = 5^6 \bmod 23 = 8" inline /></p>
        <p className="mt-2"><strong>Encrypt M = 7:</strong></p>
        <ul className="list-disc list-inside">
          <li>Choose <MathBlock math="k = 3" inline /></li>
          <li><MathBlock math="c_1 = 5^3 \bmod 23 = 10" inline /></li>
          <li><MathBlock math="c_2 = 7 \cdot 8^3 \bmod 23 = 7 \cdot 6 = 42 \bmod 23 = 19" inline /></li>
        </ul>
        <p className="mt-2"><strong>Decrypt (10, 19):</strong></p>
        <MathBlock math="M = 19 \cdot (10^6)^{-1} \bmod 23 = 19 \cdot 16^{-1} \bmod 23 = 19 \cdot 13 \bmod 23 = 7" />
      </Example>

      <Callout type="info">
        <strong>Semantic Security:</strong> ElGamal is semantically secure under the DDH assumption.
        Unlike RSA, encrypting the same message twice yields different ciphertexts (due to random <em>k</em>).
      </Callout>

      <h3>Algorithms for DLP</h3>

      <Theorem
        title="Baby-Step Giant-Step"
        proof={
          <>
            <p>
              <strong>Correctness:</strong> We seek <MathBlock math="x" inline /> such that <MathBlock math="g^x = h" inline /> where
              <MathBlock math="0 \leq x < n" inline />. Write <MathBlock math="x = im + j" inline /> where <MathBlock math="m = \lceil \sqrt{n} \rceil" inline />,
              <MathBlock math="0 \leq i < m" inline />, and <MathBlock math="0 \leq j < m" inline />.
            </p>
            <p className="mt-2">From <MathBlock math="g^x = h" inline />:</p>
            <MathBlock math="g^{im + j} = h \implies g^j = h \cdot g^{-im} = h \cdot (g^{-m})^i" />
            <p className="mt-2">
              The baby steps compute all values <MathBlock math="g^j" inline /> for <MathBlock math="j \in [0, m-1]" inline />.
              The giant steps compute <MathBlock math="h \cdot (g^{-m})^i" inline /> for <MathBlock math="i \in [0, m-1]" inline />.
              A collision between these two sets reveals <MathBlock math="(i, j)" inline /> such that <MathBlock math="g^j = h \cdot (g^{-m})^i" inline />,
              giving <MathBlock math="x = im + j" inline />.
            </p>
            <p className="mt-2">
              <strong>Complexity:</strong> We compute at most <MathBlock math="m = O(\sqrt{n})" inline /> baby steps and
              at most <MathBlock math="m = O(\sqrt{n})" inline /> giant steps. With a hash table for lookups, each step
              costs <MathBlock math="O(1)" inline /> expected time. Total: <MathBlock math="O(\sqrt{n})" inline /> time and
              <MathBlock math="O(\sqrt{n})" inline /> space for storing the baby-step table.
            </p>
          </>
        }
      >
        Shanks' algorithm solves DLP in <MathBlock math="O(\sqrt{n})" inline /> time and space:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Set <MathBlock math="m = \lceil \sqrt{n} \rceil" inline /></li>
          <li><strong>Baby steps:</strong> Compute <MathBlock math="g^j" inline /> for <MathBlock math="j = 0, 1, \ldots, m-1" inline />, store in table</li>
          <li>Compute <MathBlock math="g^{-m}" inline /></li>
          <li><strong>Giant steps:</strong> For <MathBlock math="i = 0, 1, \ldots, m-1" inline />, compute <MathBlock math="h \cdot (g^{-m})^i" inline /> and check table</li>
          <li>If match found: <MathBlock math="x = im + j" inline /></li>
        </ol>
      </Theorem>

      <Theorem
        title="Pollard's Rho for DLP"
        proof={
          <>
            <p>
              <strong>Idea:</strong> To solve <MathBlock math="g^x = h" inline />, we define a pseudo-random walk on the group
              and search for a collision. Each step produces an element of the form <MathBlock math="g^a h^b" inline /> where we track
              the exponents <MathBlock math="(a, b)" inline />.
            </p>
            <p className="mt-2">
              Partition the group into three sets <MathBlock math="S_1, S_2, S_3" inline /> (e.g., based on <MathBlock math="z \bmod 3" inline /> for
              some representation). Define the iteration function:
            </p>
            <MathBlock math="f(z) = \begin{cases} hz & \text{if } z \in S_1 \\ z^2 & \text{if } z \in S_2 \\ gz & \text{if } z \in S_3 \end{cases}" />
            <p className="mt-2">
              If <MathBlock math="z = g^a h^b" inline />, then <MathBlock math="f(z) = g^{a'} h^{b'}" inline /> where:
            </p>
            <MathBlock math="(a', b') = \begin{cases} (a, b+1) & \text{if } z \in S_1 \\ (2a, 2b) & \text{if } z \in S_2 \\ (a+1, b) & \text{if } z \in S_3 \end{cases}" />
            <p className="mt-2">
              Using Floyd's cycle detection (tortoise and hare), we find indices <MathBlock math="i \neq j" inline /> with
              <MathBlock math="g^{a_i} h^{b_i} = g^{a_j} h^{b_j}" inline />. Since <MathBlock math="h = g^x" inline />:
            </p>
            <MathBlock math="g^{a_i + x b_i} = g^{a_j + x b_j} \implies a_i + x b_i \equiv a_j + x b_j \pmod{n}" />
            <MathBlock math="x(b_i - b_j) \equiv a_j - a_i \pmod{n}" />
            <p className="mt-2">
              If <MathBlock math="\gcd(b_i - b_j, n) = 1" inline />, we recover <MathBlock math="x = (a_j - a_i)(b_i - b_j)^{-1} \bmod n" inline />.
            </p>
            <p className="mt-2">
              <strong>Complexity:</strong> By the birthday paradox, a collision is expected after <MathBlock math="O(\sqrt{n})" inline /> steps.
              Floyd's algorithm uses only <MathBlock math="O(1)" inline /> space.
            </p>
          </>
        }
      >
        Using a pseudo-random walk on the group, solve DLP in expected <MathBlock math="O(\sqrt{n})" inline />{' '}
        time with <MathBlock math="O(1)" inline /> space.
      </Theorem>

      <Theorem
        title="Index Calculus (for Z_p*)"
        proof={
          <>
            <p>
              <strong>Overview:</strong> Index calculus exploits the fact that integers in <MathBlock math="\mathbb{Z}_p^*" inline /> can
              be factored over a small "factor base" of primes. The algorithm has two phases:
            </p>
            <p className="mt-2">
              <strong>Phase 1 (Relation collection):</strong> Choose a factor base <MathBlock math="\mathcal{B} = \{p_1, p_2, \ldots, p_B\}" inline /> of
              the first <MathBlock math="B" inline /> primes. For random exponents <MathBlock math="k" inline />, compute <MathBlock math="g^k \bmod p" inline /> and
              attempt to factor the result over <MathBlock math="\mathcal{B}" inline />. If <MathBlock math="g^k \equiv \prod p_i^{e_i} \pmod{p}" inline />, then:
            </p>
            <MathBlock math="k \equiv \sum_{i=1}^{B} e_i \cdot \log_g p_i \pmod{p-1}" />
            <p className="mt-2">
              Collect <MathBlock math="B + \epsilon" inline /> such relations to form an overdetermined linear system in
              the unknowns <MathBlock math="\log_g p_i" inline />.
            </p>
            <p className="mt-2">
              <strong>Phase 2 (Linear algebra):</strong> Solve the system modulo <MathBlock math="p-1" inline /> using Gaussian elimination
              to find <MathBlock math="\log_g p_i" inline /> for all <MathBlock math="p_i \in \mathcal{B}" inline />.
            </p>
            <p className="mt-2">
              <strong>Phase 3 (Individual logarithm):</strong> To find <MathBlock math="x = \log_g h" inline />, compute <MathBlock math="h \cdot g^s \bmod p" inline /> for
              random <MathBlock math="s" inline /> until the result factors over <MathBlock math="\mathcal{B}" inline />:
            </p>
            <MathBlock math="h \cdot g^s \equiv \prod p_i^{f_i} \pmod{p} \implies x \equiv \sum f_i \log_g p_i - s \pmod{p-1}" />
            <p className="mt-2">
              <strong>Complexity analysis:</strong> With optimal <MathBlock math="B = L_p[1/2, c]" inline /> where
              <MathBlock math="L_p[\alpha, c] = \exp(c(\log p)^\alpha (\log \log p)^{1-\alpha})" inline />, the algorithm achieves
              subexponential complexity <MathBlock math="L_p[1/2, \sqrt{2}]" inline />. Variants like the Number Field Sieve achieve
              <MathBlock math="L_p[1/3, c]" inline />.
            </p>
          </>
        }
      >
        For <MathBlock math="\mathbb{Z}_p^*" inline />, there exists a subexponential algorithm:
        <MathBlock math="O\left(\exp\left(c \sqrt{\log p \cdot \log \log p}\right)\right)" />
        This is why DLP in <MathBlock math="\mathbb{Z}_p^*" inline /> requires larger keys than elliptic curves.
      </Theorem>

      <h3>DSA: Digital Signature Algorithm</h3>

      <Definition title="DSA Signature Scheme">
        <p><strong>Parameters:</strong> Primes <em>p</em> and <em>q</em> with <MathBlock math="q \mid (p-1)" inline />,
        generator <em>g</em> of order <em>q</em></p>
        <p><strong>Keys:</strong> Private <MathBlock math="x \in \{1, \ldots, q-1\}" inline />, public <MathBlock math="y = g^x \bmod p" inline /></p>
        <p className="mt-2"><strong>Sign message M:</strong></p>
        <ol className="list-decimal list-inside">
          <li>Choose random <MathBlock math="k \in \{1, \ldots, q-1\}" inline /></li>
          <li><MathBlock math="r = (g^k \bmod p) \bmod q" inline /></li>
          <li><MathBlock math="s = k^{-1}(H(M) + xr) \bmod q" inline /></li>
          <li>Signature: <MathBlock math="(r, s)" inline /></li>
        </ol>
        <p className="mt-2"><strong>Verify:</strong></p>
        <ol className="list-decimal list-inside">
          <li><MathBlock math="w = s^{-1} \bmod q" inline /></li>
          <li><MathBlock math="u_1 = H(M) \cdot w \bmod q" inline />, <MathBlock math="u_2 = r \cdot w \bmod q" inline /></li>
          <li><MathBlock math="v = (g^{u_1} y^{u_2} \bmod p) \bmod q" inline /></li>
          <li>Accept if <MathBlock math="v = r" inline /></li>
        </ol>
      </Definition>

      <Callout type="warning">
        <strong>Nonce Reuse is Fatal!</strong> If the same <em>k</em> is used twice, the private
        key can be recovered. This famously led to the PlayStation 3 master key being extracted.
      </Callout>

      <h3>DLP in Different Groups</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Group Comparison</h4>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Group</th>
              <th className="text-left py-2">Best Attack</th>
              <th className="text-left py-2">128-bit Security</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2"><MathBlock math="\mathbb{Z}_p^*" inline /></td>
              <td className="py-2">Index Calculus</td>
              <td className="py-2">3072-bit <em>p</em></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><MathBlock math="\mathbb{F}_{2^n}^*" inline /></td>
              <td className="py-2">Index Calculus</td>
              <td className="py-2">~3072-bit</td>
            </tr>
            <tr>
              <td className="py-2">Elliptic Curves</td>
              <td className="py-2">Pollard Rho</td>
              <td className="py-2">256-bit curve</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success">
        <strong>Why Elliptic Curves?</strong> No subexponential algorithm is known for DLP on
        elliptic curves, allowing much smaller key sizes for the same security level.
      </Callout>
    </LessonLayout>
  );
}
