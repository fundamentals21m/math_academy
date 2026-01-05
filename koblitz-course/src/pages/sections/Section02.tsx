import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>Congruences</h2>

      <p>
        Modular arithmetic is the foundation of modern cryptography. In this section, we develop
        the theory of congruences, including Fermat's Little Theorem, Euler's theorem, and the
        Chinese Remainder Theorem.
      </p>

      <h3>Basic Definitions</h3>

      <Definition title="Congruence">
        Let <em>m</em> be a positive integer. We say that <em>a</em> is <strong>congruent</strong> to{' '}
        <em>b</em> modulo <em>m</em>, written <MathBlock math="a \equiv b \pmod{m}" inline />, if{' '}
        <MathBlock math="m \mid (a - b)" inline />, i.e., if <em>m</em> divides the difference{' '}
        <em>a - b</em>.
      </Definition>

      <Definition title="Residue Class">
        The <strong>residue class</strong> of an integer <em>a</em> modulo <em>m</em> is the set of
        all integers congruent to <em>a</em> modulo <em>m</em>:
        <MathBlock math="\bar{a} = \{a + km : k \in \mathbb{Z}\}" />
        The set of residue classes modulo <em>m</em> is denoted <MathBlock math="\mathbb{Z}/m\mathbb{Z}" inline />.
      </Definition>

      <h3>Properties of Congruences</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Basic Properties</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li><MathBlock math="a \equiv a \pmod{m}" inline /> (reflexivity)</li>
          <li>If <MathBlock math="a \equiv b \pmod{m}" inline />, then <MathBlock math="b \equiv a \pmod{m}" inline /> (symmetry)</li>
          <li>If <MathBlock math="a \equiv b \pmod{m}" inline /> and <MathBlock math="b \equiv c \pmod{m}" inline />, then <MathBlock math="a \equiv c \pmod{m}" inline /> (transitivity)</li>
          <li>If <MathBlock math="a \equiv b \pmod{m}" inline /> and <MathBlock math="c \equiv d \pmod{m}" inline />, then <MathBlock math="a + c \equiv b + d \pmod{m}" inline /></li>
          <li>If <MathBlock math="a \equiv b \pmod{m}" inline /> and <MathBlock math="c \equiv d \pmod{m}" inline />, then <MathBlock math="ac \equiv bd \pmod{m}" inline /></li>
        </ol>
      </div>

      <h3>Euler's Phi Function</h3>

      <Definition title="Euler's Phi Function">
        For a positive integer <em>n</em>, the <strong>Euler phi function</strong>{' '}
        <MathBlock math="\varphi(n)" inline /> counts the number of integers between 1 and <em>n</em>{' '}
        that are relatively prime to <em>n</em>:
        <MathBlock math="\varphi(n) = |\{k : 1 \leq k \leq n, \gcd(k, n) = 1\}|" />
      </Definition>

      <Example title="Computing φ(n)">
        <ul className="list-disc list-inside space-y-1">
          <li><MathBlock math="\varphi(1) = 1" inline /></li>
          <li><MathBlock math="\varphi(p) = p - 1" inline /> for prime <em>p</em></li>
          <li><MathBlock math="\varphi(p^k) = p^{k-1}(p - 1)" inline /> for prime power</li>
          <li><MathBlock math="\varphi(12) = \varphi(4)\varphi(3) = 2 \cdot 2 = 4" inline /> (the numbers 1, 5, 7, 11)</li>
        </ul>
      </Example>

      <Theorem title="Euler's Phi Formula"
        proof={
          <>
            <p>We prove this in two steps.</p>
            <p><strong>Step 1: Prime powers.</strong> For <MathBlock math="n = p^k" inline />, an integer <MathBlock math="1 \leq m \leq p^k" inline /> is not coprime to <MathBlock math="p^k" inline /> if and only if <MathBlock math="p \mid m" inline />.</p>
            <p>The multiples of <em>p</em> in <MathBlock math="\{1, 2, \ldots, p^k\}" inline /> are <MathBlock math="p, 2p, 3p, \ldots, p^{k-1} \cdot p" inline />, which number <MathBlock math="p^{k-1}" inline />.</p>
            <p>Therefore:</p>
            <MathBlock math="\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p - 1) = p^k \left(1 - \frac{1}{p}\right)" />
            <p><strong>Step 2: Multiplicativity.</strong> If <MathBlock math="\gcd(m, n) = 1" inline />, then <MathBlock math="\varphi(mn) = \varphi(m)\varphi(n)" inline />.</p>
            <p>By the Chinese Remainder Theorem, the map <MathBlock math="\mathbb{Z}/mn\mathbb{Z} \to \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}" inline /> given by <MathBlock math="x \mapsto (x \bmod m, x \bmod n)" inline /> is a ring isomorphism.</p>
            <p>An element <em>x</em> is a unit in <MathBlock math="\mathbb{Z}/mn\mathbb{Z}" inline /> if and only if <MathBlock math="(x \bmod m, x \bmod n)" inline /> is a unit, which happens if and only if both components are units. Thus:</p>
            <MathBlock math="\varphi(mn) = \varphi(m) \cdot \varphi(n)" />
            <p>Combining these results for <MathBlock math="n = p_1^{a_1} \cdots p_k^{a_k}" inline />:</p>
            <MathBlock math="\varphi(n) = \prod_{i=1}^{k} \varphi(p_i^{a_i}) = \prod_{i=1}^{k} p_i^{a_i}\left(1 - \frac{1}{p_i}\right) = n \prod_{p \mid n}\left(1 - \frac{1}{p}\right)" />
          </>
        }
      >
        For <MathBlock math="n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}" inline />:
        <MathBlock math="\varphi(n) = n \prod_{p \mid n} \left(1 - \frac{1}{p}\right) = n \cdot \frac{p_1 - 1}{p_1} \cdot \frac{p_2 - 1}{p_2} \cdots \frac{p_k - 1}{p_k}" />
      </Theorem>

      <h3>Fermat's Little Theorem and Euler's Theorem</h3>

      <Theorem title="Fermat's Little Theorem"
        proof={
          <>
            <p>Consider the <MathBlock math="p - 1" inline /> nonzero residue classes modulo <em>p</em>:</p>
            <MathBlock math="1, 2, 3, \ldots, p-1" />
            <p>Since <MathBlock math="\gcd(a, p) = 1" inline />, multiplication by <em>a</em> permutes these residue classes. That is, the products:</p>
            <MathBlock math="a \cdot 1, a \cdot 2, a \cdot 3, \ldots, a \cdot (p-1)" />
            <p>are just a rearrangement of <MathBlock math="1, 2, 3, \ldots, p-1" inline /> modulo <em>p</em>.</p>
            <p>Taking the product of all elements in each list:</p>
            <MathBlock math="(a \cdot 1)(a \cdot 2)(a \cdot 3) \cdots (a \cdot (p-1)) \equiv 1 \cdot 2 \cdot 3 \cdots (p-1) \pmod{p}" />
            <MathBlock math="a^{p-1} \cdot (p-1)! \equiv (p-1)! \pmod{p}" />
            <p>Since <MathBlock math="\gcd((p-1)!, p) = 1" inline /> (none of the factors <MathBlock math="1, 2, \ldots, p-1" inline /> are divisible by <em>p</em>), we can cancel <MathBlock math="(p-1)!" inline /> to obtain:</p>
            <MathBlock math="a^{p-1} \equiv 1 \pmod{p}" />
            <p>Multiplying both sides by <em>a</em> gives the equivalent form <MathBlock math="a^p \equiv a \pmod{p}" inline />, which holds even when <MathBlock math="p \mid a" inline /> (both sides are 0).</p>
          </>
        }
      >
        If <em>p</em> is prime and <MathBlock math="\gcd(a, p) = 1" inline />, then:
        <MathBlock math="a^{p-1} \equiv 1 \pmod{p}" />
        Equivalently, for any integer <em>a</em>:
        <MathBlock math="a^p \equiv a \pmod{p}" />
      </Theorem>

      <Theorem title="Euler's Theorem"
        proof={
          <>
            <p>Let <MathBlock math="r_1, r_2, \ldots, r_{\varphi(n)}" inline /> be a reduced residue system modulo <em>n</em>, i.e., representatives of all residue classes coprime to <em>n</em>.</p>
            <p>Since <MathBlock math="\gcd(a, n) = 1" inline />, multiplication by <em>a</em> permutes this set. That is:</p>
            <MathBlock math="ar_1, ar_2, \ldots, ar_{\varphi(n)}" />
            <p>is a rearrangement of <MathBlock math="r_1, r_2, \ldots, r_{\varphi(n)}" inline /> modulo <em>n</em>.</p>
            <p>This is because:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li><MathBlock math="\gcd(ar_i, n) = 1" inline /> since <MathBlock math="\gcd(a, n) = \gcd(r_i, n) = 1" inline /></li>
              <li>If <MathBlock math="ar_i \equiv ar_j \pmod{n}" inline />, then <MathBlock math="r_i \equiv r_j \pmod{n}" inline /> (cancellation works since <MathBlock math="\gcd(a,n)=1" inline />)</li>
            </ol>
            <p>Taking the product:</p>
            <MathBlock math="(ar_1)(ar_2) \cdots (ar_{\varphi(n)}) \equiv r_1 r_2 \cdots r_{\varphi(n)} \pmod{n}" />
            <MathBlock math="a^{\varphi(n)} \cdot \prod_{i=1}^{\varphi(n)} r_i \equiv \prod_{i=1}^{\varphi(n)} r_i \pmod{n}" />
            <p>Since each <MathBlock math="r_i" inline /> is coprime to <em>n</em>, so is their product. Canceling gives:</p>
            <MathBlock math="a^{\varphi(n)} \equiv 1 \pmod{n}" />
          </>
        }
      >
        If <MathBlock math="\gcd(a, n) = 1" inline />, then:
        <MathBlock math="a^{\varphi(n)} \equiv 1 \pmod{n}" />
        This generalizes Fermat's Little Theorem (since <MathBlock math="\varphi(p) = p - 1" inline />).
      </Theorem>

      <Example title="Computing Large Powers">
        <p>Find the last digit of <MathBlock math="7^{222}" inline />.</p>
        <p className="mt-2">
          <strong>Solution:</strong> We need <MathBlock math="7^{222} \pmod{10}" inline />.
          Since <MathBlock math="\varphi(10) = 4" inline /> and <MathBlock math="\gcd(7, 10) = 1" inline />:
        </p>
        <MathBlock math="7^4 \equiv 1 \pmod{10}" />
        <p>Since <MathBlock math="222 = 4 \cdot 55 + 2" inline />:</p>
        <MathBlock math="7^{222} = (7^4)^{55} \cdot 7^2 \equiv 1^{55} \cdot 49 \equiv 9 \pmod{10}" />
      </Example>

      <h3>The Chinese Remainder Theorem</h3>

      <Theorem title="Chinese Remainder Theorem"
        proof={
          <>
            <p><strong>Existence:</strong> Let <MathBlock math="M = m_1 m_2 \cdots m_r" inline /> and <MathBlock math="M_i = M / m_i" inline /> for each <em>i</em>.</p>
            <p>Since <MathBlock math="\gcd(M_i, m_i) = 1" inline /> (as <MathBlock math="M_i" inline /> is a product of moduli coprime to <MathBlock math="m_i" inline />), there exists <MathBlock math="N_i" inline /> such that:</p>
            <MathBlock math="M_i N_i \equiv 1 \pmod{m_i}" />
            <p>Define:</p>
            <MathBlock math="x = \sum_{i=1}^{r} a_i M_i N_i" />
            <p>For each <em>j</em>, we have <MathBlock math="M_i \equiv 0 \pmod{m_j}" inline /> when <MathBlock math="i \neq j" inline /> (since <MathBlock math="m_j \mid M_i" inline />). Thus:</p>
            <MathBlock math="x \equiv a_j M_j N_j \equiv a_j \cdot 1 = a_j \pmod{m_j}" />
            <p><strong>Uniqueness:</strong> Suppose <MathBlock math="x" inline /> and <MathBlock math="x'" inline /> both satisfy all congruences. Then:</p>
            <MathBlock math="x \equiv x' \pmod{m_i} \quad \text{for all } i" />
            <p>This means <MathBlock math="m_i \mid (x - x')" inline /> for all <em>i</em>. Since the <MathBlock math="m_i" inline /> are pairwise coprime:</p>
            <MathBlock math="M = m_1 m_2 \cdots m_r \mid (x - x')" />
            <p>Therefore <MathBlock math="x \equiv x' \pmod{M}" inline />, proving uniqueness modulo <em>M</em>.</p>
          </>
        }
      >
        Let <MathBlock math="m_1, m_2, \ldots, m_r" inline /> be pairwise relatively prime positive integers.
        Then the system of congruences:
        <MathBlock math="x \equiv a_1 \pmod{m_1}, \quad x \equiv a_2 \pmod{m_2}, \quad \ldots, \quad x \equiv a_r \pmod{m_r}" />
        has a unique solution modulo <MathBlock math="M = m_1 m_2 \cdots m_r" inline />.
      </Theorem>

      <Example title="Solving a System of Congruences">
        <p>Find <em>x</em> such that <MathBlock math="x \equiv 2 \pmod{3}" inline />,{' '}
        <MathBlock math="x \equiv 3 \pmod{5}" inline />, <MathBlock math="x \equiv 2 \pmod{7}" inline />.</p>
        <p className="mt-2"><strong>Solution:</strong> Let <MathBlock math="M = 3 \cdot 5 \cdot 7 = 105" inline />.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><MathBlock math="M_1 = 35" inline />, need <MathBlock math="35N_1 \equiv 1 \pmod{3}" inline />, so <MathBlock math="N_1 = 2" inline /></li>
          <li><MathBlock math="M_2 = 21" inline />, need <MathBlock math="21N_2 \equiv 1 \pmod{5}" inline />, so <MathBlock math="N_2 = 1" inline /></li>
          <li><MathBlock math="M_3 = 15" inline />, need <MathBlock math="15N_3 \equiv 1 \pmod{7}" inline />, so <MathBlock math="N_3 = 1" inline /></li>
        </ul>
        <MathBlock math="x = 2 \cdot 35 \cdot 2 + 3 \cdot 21 \cdot 1 + 2 \cdot 15 \cdot 1 = 140 + 63 + 30 = 233 \equiv 23 \pmod{105}" />
      </Example>

      <Callout type="success">
        <strong>Cryptographic Application:</strong> The Chinese Remainder Theorem is used in RSA
        to speed up decryption by a factor of 4, and forms the basis of secret sharing schemes.
      </Callout>

      <h3>Modular Inverses</h3>

      <Definition title="Modular Inverse">
        The <strong>modular inverse</strong> of <em>a</em> modulo <em>m</em> is an integer <em>b</em> such that:
        <MathBlock math="ab \equiv 1 \pmod{m}" />
        It exists if and only if <MathBlock math="\gcd(a, m) = 1" inline />, and can be computed using
        the extended Euclidean algorithm.
      </Definition>

      <Theorem title="Existence of Inverses"
        proof={
          <>
            <p><strong>Necessity:</strong> Suppose <em>b</em> is an inverse of <em>a</em> modulo <em>m</em>, so <MathBlock math="ab \equiv 1 \pmod{m}" inline />.</p>
            <p>Then <MathBlock math="ab = 1 + km" inline /> for some integer <em>k</em>, which gives <MathBlock math="ab - km = 1" inline />.</p>
            <p>If <MathBlock math="d = \gcd(a, m)" inline />, then <MathBlock math="d \mid a" inline /> and <MathBlock math="d \mid m" inline />, so <MathBlock math="d \mid (ab - km) = 1" inline />. Thus <MathBlock math="d = 1" inline />.</p>
            <p><strong>Sufficiency:</strong> If <MathBlock math="\gcd(a, m) = 1" inline />, then by Bezout's identity there exist integers <em>x</em> and <em>y</em> such that:</p>
            <MathBlock math="ax + my = 1" />
            <p>Reducing modulo <em>m</em>: <MathBlock math="ax \equiv 1 \pmod{m}" inline />. Thus <MathBlock math="b = x" inline /> is an inverse of <em>a</em>.</p>
            <p><strong>Uniqueness:</strong> Suppose <MathBlock math="ab_1 \equiv ab_2 \equiv 1 \pmod{m}" inline />. Then <MathBlock math="a(b_1 - b_2) \equiv 0 \pmod{m}" inline />.</p>
            <p>Since <MathBlock math="\gcd(a, m) = 1" inline />, we can cancel <em>a</em> to get <MathBlock math="b_1 \equiv b_2 \pmod{m}" inline />.</p>
          </>
        }
      >
        The integer <em>a</em> has a multiplicative inverse modulo <em>m</em> if and only if{' '}
        <MathBlock math="\gcd(a, m) = 1" inline />. In this case, the inverse is unique modulo <em>m</em>.
      </Theorem>

      <Example title="Computing a Modular Inverse">
        <p>Find the inverse of 7 modulo 26.</p>
        <p className="mt-2"><strong>Solution:</strong> Using the extended Euclidean algorithm:</p>
        <div className="font-mono text-sm space-y-1 mt-2">
          <p>26 = 7 × 3 + 5</p>
          <p>7 = 5 × 1 + 2</p>
          <p>5 = 2 × 2 + 1</p>
        </div>
        <p className="mt-2">Working backwards: <MathBlock math="1 = 5 - 2 \cdot 2 = 5 - 2(7 - 5) = 3 \cdot 5 - 2 \cdot 7 = 3(26 - 3 \cdot 7) - 2 \cdot 7 = 3 \cdot 26 - 11 \cdot 7" inline /></p>
        <p>Thus <MathBlock math="7^{-1} \equiv -11 \equiv 15 \pmod{26}" inline />.</p>
      </Example>

      <h3>Time Complexity</h3>

      <Callout type="info">
        <strong>Efficiency:</strong> Computing <MathBlock math="a^n \pmod{m}" inline /> using repeated
        squaring requires only <MathBlock math="O(\log n)" inline /> multiplications, each taking{' '}
        <MathBlock math="O((\log m)^2)" inline /> bit operations. Total: <MathBlock math="O((\log n)(\log m)^2)" inline />.
      </Callout>
    </LessonLayout>
  );
}
