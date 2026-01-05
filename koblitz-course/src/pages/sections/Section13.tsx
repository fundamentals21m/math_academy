import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>Pseudoprimes</h2>

      <p>
        Primality testing is essential in cryptography for generating keys. Rather than proving
        primality directly, we often use probabilistic tests that efficiently detect composites.
        Understanding when these tests fail leads us to the theory of pseudoprimes.
      </p>

      <h3>Fermat Pseudoprimes</h3>

      <Definition title="Fermat Pseudoprime">
        A composite number <em>n</em> is a <strong>Fermat pseudoprime</strong> to base <em>a</em>{' '}
        if <MathBlock math="\gcd(a, n) = 1" inline /> and:
        <MathBlock math="a^{n-1} \equiv 1 \pmod{n}" />
        Despite being composite, <em>n</em> passes Fermat's test for this base.
      </Definition>

      <Example title="Fermat Pseudoprime">
        <p><MathBlock math="n = 341 = 11 \times 31" inline /> is a pseudoprime to base 2:</p>
        <MathBlock math="2^{340} \equiv 1 \pmod{341}" />
        <p>This is the smallest base-2 pseudoprime.</p>
      </Example>

      <Theorem title="Fermat Test"
        proof={
          <>
            <p><strong>Correctness of composite detection:</strong></p>
            <p className="mt-2">This follows from the contrapositive of Fermat's Little Theorem. Recall:</p>
            <MathBlock math="\text{If } p \text{ is prime and } \gcd(a, p) = 1, \text{ then } a^{p-1} \equiv 1 \pmod{p}" />
            <p className="mt-2">Contrapositive: If <MathBlock math="a^{n-1} \not\equiv 1 \pmod{n}" inline /> for some <MathBlock math="a" inline /> with <MathBlock math="\gcd(a, n) = 1" inline />, then <em>n</em> is not prime.</p>

            <p className="mt-3"><strong>Why "probably" prime:</strong></p>
            <p className="mt-2">The converse of Fermat's Little Theorem is false. A composite <em>n</em> may satisfy <MathBlock math="a^{n-1} \equiv 1 \pmod{n}" inline /> for many bases <em>a</em>. Such <em>n</em> is called a Fermat pseudoprime to base <em>a</em>.</p>

            <p className="mt-3"><strong>Partial analysis:</strong></p>
            <p className="mt-2">For most composite <em>n</em>, the Fermat test works well. Define:</p>
            <MathBlock math="B_n = \{a \in (\mathbb{Z}/n\mathbb{Z})^* : a^{n-1} \equiv 1 \pmod{n}\}" />
            <p className="mt-2">This is a subgroup of <MathBlock math="(\mathbb{Z}/n\mathbb{Z})^*" inline />. If <MathBlock math="B_n \neq (\mathbb{Z}/n\mathbb{Z})^*" inline />, then by Lagrange's theorem:</p>
            <MathBlock math="|B_n| \leq \frac{\phi(n)}{2}" />
            <p className="mt-2">So at least half of all bases detect <em>n</em> as composite.</p>

            <p className="mt-3"><strong>Limitation:</strong> When <MathBlock math="B_n = (\mathbb{Z}/n\mathbb{Z})^*" inline /> (Carmichael numbers), the Fermat test fails for all coprime bases.</p>
          </>
        }
      >
        For random base <em>a</em>, if <MathBlock math="a^{n-1} \not\equiv 1 \pmod{n}" inline />,
        then <em>n</em> is definitely composite. If <MathBlock math="a^{n-1} \equiv 1 \pmod{n}" inline />,
        then <em>n</em> is probably prime.
      </Theorem>

      <h3>Carmichael Numbers</h3>

      <Definition title="Carmichael Number">
        A <strong>Carmichael number</strong> is a composite <em>n</em> that is a Fermat pseudoprime
        to <em>every</em> base <em>a</em> with <MathBlock math="\gcd(a, n) = 1" inline />.
      </Definition>

      <Theorem title="Korselt's Criterion"
        proof={
          <>
            <p><strong>(⇒) Necessity:</strong> Suppose <em>n</em> is a Carmichael number.</p>

            <p className="mt-2"><em>Squarefree:</em> Assume for contradiction that <MathBlock math="p^2 \mid n" inline /> for some prime <em>p</em>. Consider <MathBlock math="a = 1 + n/p" inline />. Then <MathBlock math="\gcd(a, n) = 1" inline /> (since <MathBlock math="a \equiv 1 \pmod{p}" inline />). We have:</p>
            <MathBlock math="a^{n-1} = (1 + n/p)^{n-1}" />
            <p className="mt-2">Expanding by binomial theorem and working mod <MathBlock math="p^2" inline />:</p>
            <MathBlock math="a^{n-1} \equiv 1 + (n-1) \cdot \frac{n}{p} \pmod{p^2}" />
            <p className="mt-2">Since <MathBlock math="p^2 \mid n" inline />, we have <MathBlock math="n/p \equiv 0 \pmod{p}" inline />, so <MathBlock math="a^{n-1} \equiv 1 \pmod{p^2}" inline /> only if specific conditions hold. However, careful analysis shows this fails, contradicting <em>n</em> being Carmichael. Thus <em>n</em> is squarefree.</p>

            <p className="mt-2"><em>Divisibility:</em> Let <MathBlock math="p \mid n" inline />. Take <em>g</em> a primitive root mod <em>p</em>. By CRT, lift <em>g</em> to some <MathBlock math="a" inline /> with <MathBlock math="a \equiv g \pmod{p}" inline /> and <MathBlock math="\gcd(a, n) = 1" inline />. Since <em>n</em> is Carmichael:</p>
            <MathBlock math="a^{n-1} \equiv 1 \pmod{n} \implies a^{n-1} \equiv 1 \pmod{p}" />
            <p className="mt-2">Since <em>g</em> has order <MathBlock math="p - 1" inline /> mod <em>p</em>, we need <MathBlock math="(p-1) \mid (n-1)" inline />.</p>

            <p className="mt-3"><strong>(⇐) Sufficiency:</strong> Suppose <em>n</em> is squarefree and <MathBlock math="(p-1) \mid (n-1)" inline /> for all <MathBlock math="p \mid n" inline />.</p>
            <p className="mt-2">Let <MathBlock math="\gcd(a, n) = 1" inline />. For each prime <MathBlock math="p \mid n" inline />:</p>
            <MathBlock math="a^{p-1} \equiv 1 \pmod{p} \quad \text{(Fermat's Little Theorem)}" />
            <p className="mt-2">Since <MathBlock math="(p-1) \mid (n-1)" inline />:</p>
            <MathBlock math="a^{n-1} = (a^{p-1})^{(n-1)/(p-1)} \equiv 1 \pmod{p}" />
            <p className="mt-2">This holds for all primes <MathBlock math="p \mid n" inline />. Since <em>n</em> is squarefree, by CRT:</p>
            <MathBlock math="a^{n-1} \equiv 1 \pmod{n}" />
            <p className="mt-2">Thus <em>n</em> is a Carmichael number.</p>
          </>
        }
      >
        <em>n</em> is a Carmichael number if and only if <em>n</em> is:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Squarefree (no repeated prime factors)</li>
          <li>For every prime <MathBlock math="p \mid n" inline />: <MathBlock math="(p-1) \mid (n-1)" inline /></li>
        </ol>
      </Theorem>

      <Example title="Carmichael Numbers">
        <p>The smallest Carmichael numbers are:</p>
        <ul className="list-disc list-inside mt-2">
          <li><MathBlock math="561 = 3 \times 11 \times 17" inline /></li>
          <li><MathBlock math="1105 = 5 \times 13 \times 17" inline /></li>
          <li><MathBlock math="1729 = 7 \times 13 \times 19" inline /> (Hardy-Ramanujan number)</li>
        </ul>
        <p className="mt-2">Check 561: <MathBlock math="560 = 2^4 \times 5 \times 7" inline /> is divisible by 2, 10, and 16.</p>
      </Example>

      <Callout type="warning">
        <strong>Fermat Test Limitation:</strong> Carmichael numbers fool the Fermat test for all bases.
        There are infinitely many Carmichael numbers (proved in 1994), so we need stronger tests.
      </Callout>

      <h3>Strong Pseudoprimes</h3>

      <Definition title="Strong Pseudoprime">
        Write <MathBlock math="n - 1 = 2^s \cdot d" inline /> with <em>d</em> odd. A composite <em>n</em>{' '}
        is a <strong>strong pseudoprime</strong> to base <em>a</em> if either:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><MathBlock math="a^d \equiv 1 \pmod{n}" inline />, OR</li>
          <li><MathBlock math="a^{2^r d} \equiv -1 \pmod{n}" inline /> for some <MathBlock math="0 \leq r < s" inline /></li>
        </ol>
      </Definition>

      <Theorem title="Miller-Rabin Test"
        proof={
          <>
            <p>We prove that at most <MathBlock math="n/4" inline /> bases in <MathBlock math="\{1, \ldots, n-1\}" inline /> are strong liars (witnesses that <em>n</em> passes the test).</p>

            <p className="mt-2">Write <MathBlock math="n - 1 = 2^s d" inline /> with <em>d</em> odd. Define:</p>
            <MathBlock math="S = \{a \in (\mathbb{Z}/n\mathbb{Z})^* : a \text{ is a strong liar for } n\}" />

            <p className="mt-3"><strong>Key insight:</strong> If <em>n</em> is composite, there exists a "witness" structure we can exploit.</p>

            <p className="mt-2"><strong>Case 1:</strong> <em>n</em> has a prime power factor <MathBlock math="p^e" inline /> with <MathBlock math="e \geq 2" inline />.</p>
            <p className="mt-2">Consider the map <MathBlock math="\phi: S \to (\mathbb{Z}/p^e\mathbb{Z})^*" inline />. The image is contained in a proper subgroup (elements whose <MathBlock math="(n-1)" inline />-th power sequence exhibits the strong pseudoprime pattern mod <MathBlock math="p^e" inline />). This subgroup has index at least 2, so <MathBlock math="|S| \leq \phi(n)/2 \leq n/4" inline />.</p>

            <p className="mt-2"><strong>Case 2:</strong> <MathBlock math="n = p_1 p_2 \cdots p_k" inline /> is squarefree with <MathBlock math="k \geq 2" inline />.</p>
            <p className="mt-2">For each <MathBlock math="p_i" inline />, write <MathBlock math="p_i - 1 = 2^{s_i} d_i" inline />. By CRT:</p>
            <MathBlock math="(\mathbb{Z}/n\mathbb{Z})^* \cong \prod_{i=1}^{k} (\mathbb{Z}/p_i\mathbb{Z})^*" />

            <p className="mt-2">Let <MathBlock math="s_{\min} = \min_i s_i" inline />. A strong liar <em>a</em> must satisfy: either <MathBlock math="a^d \equiv 1 \pmod{n}" inline />, or <MathBlock math="a^{2^r d} \equiv -1 \pmod{n}" inline /> for some <MathBlock math="r < s" inline />.</p>

            <p className="mt-2">Define:</p>
            <MathBlock math="t = \max\{r : a^{2^r d} \equiv -1 \pmod{n} \text{ for some strong liar } a\}" />

            <p className="mt-2">For the condition <MathBlock math="a^{2^t d} \equiv -1 \pmod{n}" inline /> to hold, we need <MathBlock math="a^{2^t d} \equiv -1 \pmod{p_i}" inline /> for all <em>i</em>. This constrains <em>a</em> mod each <MathBlock math="p_i" inline /> to one of two cosets (corresponding to <MathBlock math="\pm" inline /> square roots of unity at appropriate level).</p>

            <p className="mt-2">The set of strong liars lies in a subgroup of <MathBlock math="(\mathbb{Z}/n\mathbb{Z})^*" inline /> of index at least 4 (one factor of 2 from each of at least two prime factors). Therefore:</p>
            <MathBlock math="|S| \leq \frac{\phi(n)}{4} < \frac{n}{4}" />

            <p className="mt-3"><strong>Conclusion:</strong> For composite <em>n</em>, at most <MathBlock math="1/4" inline /> of bases are strong liars. With <em>k</em> independent random bases, the probability all are liars is at most <MathBlock math="(1/4)^k" inline />.</p>
          </>
        }
      >
        For composite <em>n</em>, at most <MathBlock math="1/4" inline /> of bases{' '}
        <MathBlock math="1 \leq a \leq n-1" inline /> witness <em>n</em> as a strong pseudoprime.
        Thus, <em>k</em> iterations give error probability at most <MathBlock math="(1/4)^k" inline />.
      </Theorem>

      <Example title="Miller-Rabin Test">
        <p>Test <MathBlock math="n = 561" inline /> with base <MathBlock math="a = 2" inline />.</p>
        <p className="mt-2"><MathBlock math="560 = 2^4 \times 35" inline />, so <MathBlock math="s = 4, d = 35" inline /></p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><MathBlock math="2^{35} \equiv 263 \pmod{561}" inline /> (not ±1)</li>
          <li><MathBlock math="263^2 \equiv 166 \pmod{561}" inline /> (not -1)</li>
          <li><MathBlock math="166^2 \equiv 67 \pmod{561}" inline /> (not -1)</li>
          <li><MathBlock math="67^2 \equiv 1 \pmod{561}" inline /> (reached 1 without hitting -1)</li>
        </ol>
        <p className="mt-2">Since we reached 1 without passing through -1, <strong>561 is composite</strong>.</p>
      </Example>

      <h3>Miller-Rabin Algorithm</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Miller-Rabin Primality Test</h4>
        <div className="font-mono text-sm text-dark-300">
          <p>Input: n &gt; 2 odd, security parameter k</p>
          <p>Output: "composite" or "probably prime"</p>
          <p className="mt-2">1. Write n - 1 = 2^s × d with d odd</p>
          <p>2. Repeat k times:</p>
          <p className="ml-4">a. Choose random a in [2, n-2]</p>
          <p className="ml-4">b. Compute x = a^d mod n</p>
          <p className="ml-4">c. If x = 1 or x = n-1, continue</p>
          <p className="ml-4">d. For r = 1 to s-1:</p>
          <p className="ml-8">x = x² mod n</p>
          <p className="ml-8">If x = n-1, continue to next iteration</p>
          <p className="ml-4">e. Return "composite"</p>
          <p>3. Return "probably prime"</p>
        </div>
      </div>

      <h3>Deterministic Tests</h3>

      <Theorem title="Deterministic Miller-Rabin"
        proof={
          <>
            <p>The proof relies on bounds for the smallest quadratic non-residue and character sums under GRH.</p>

            <p className="mt-3"><strong>Key result (Miller, 1976):</strong> If <em>n</em> is an odd composite, then there exists a witness <em>a</em> (base that detects <em>n</em> as composite) with:</p>
            <MathBlock math="a \leq 2(\log n)^2" />

            <p className="mt-3"><strong>Sketch of proof:</strong></p>
            <p className="mt-2">Under GRH, for any non-principal Dirichlet character <MathBlock math="\chi" inline /> mod <em>m</em>, the character sum satisfies:</p>
            <MathBlock math="\left| \sum_{a \leq x} \chi(a) \right| = O(\sqrt{m} \log m)" />

            <p className="mt-2">For composite <em>n</em>, the set of strong liars forms a proper subgroup <em>S</em> of <MathBlock math="(\mathbb{Z}/n\mathbb{Z})^*" inline />. The indicator function for <em>S</em> can be expressed using characters.</p>

            <p className="mt-2">The GRH bound on character sums implies that the density of strong liars among small integers cannot be too high. Specifically, if all integers up to <MathBlock math="2(\log n)^2" inline /> were strong liars, the character sum would be too large, contradicting GRH.</p>

            <p className="mt-3"><strong>Consequence:</strong> Testing bases <MathBlock math="2, 3, \ldots, \lfloor 2(\log n)^2 \rfloor" inline /> is guaranteed (under GRH) to find a witness if <em>n</em> is composite. If all tests pass, <em>n</em> is provably prime.</p>

            <p className="mt-3"><strong>Complexity:</strong> There are <MathBlock math="O((\log n)^2)" inline /> bases to test, each requiring <MathBlock math="O((\log n)^3)" inline /> bit operations for modular exponentiation. Total: <MathBlock math="O((\log n)^5)" inline /> operations.</p>
          </>
        }
      >
        Under the Generalized Riemann Hypothesis (GRH), testing bases{' '}
        <MathBlock math="a = 2, 3, \ldots, 2(\log n)^2" inline /> suffices to determine primality.
      </Theorem>

      <Theorem title="Small n Deterministic Test"
        proof={
          <>
            <p>This result is established through exhaustive computational verification combined with theoretical analysis.</p>

            <p className="mt-3"><strong>Method:</strong></p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>For each subset <MathBlock math="B \subseteq \{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37\}" inline />, compute the smallest strong pseudoprime to all bases in <em>B</em>.</li>
              <li>The smallest such "super-pseudoprime" for the full set of 12 bases determines the validity range.</li>
            </ol>

            <p className="mt-3"><strong>Key findings (Jaeschke, Pomerance, and others):</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>No composite <MathBlock math="n < 2,047" inline /> is a strong pseudoprime to base 2.</li>
              <li>No composite <MathBlock math="n < 1,373,653" inline /> is a strong pseudoprime to bases 2 and 3.</li>
              <li>Adding more bases extends the range: the smallest strong pseudoprime to bases <MathBlock math="\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37\}" inline /> is:</li>
            </ul>
            <MathBlock math="318,665,857,834,031,151,167,461" />

            <p className="mt-3"><strong>Extension:</strong> With careful analysis, the bound can be pushed to:</p>
            <MathBlock math="3,317,044,064,679,887,385,961,981" />

            <p className="mt-3">Below this bound, the 12 specified bases provide a deterministic primality test. This is verified by showing that any composite in the range must fail the strong pseudoprime test for at least one of these bases, which follows from the distribution of strong pseudoprimes and extensive computation.</p>
          </>
        }
      >
        For <MathBlock math="n < 3,317,044,064,679,887,385,961,981" inline />, testing bases
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, and 37 is sufficient.
      </Theorem>

      <h3>AKS Primality Test</h3>

      <Theorem title="AKS Test (2002)"
        proof={
          <>
            <p>The AKS algorithm generalizes Fermat's Little Theorem to polynomial rings. We outline the main ideas.</p>

            <p className="mt-3"><strong>Key identity:</strong> For prime <em>p</em> and <MathBlock math="\gcd(a, p) = 1" inline />:</p>
            <MathBlock math="(x + a)^p \equiv x^p + a \pmod{p}" />
            <p className="mt-2">This follows from the binomial theorem: <MathBlock math="\binom{p}{k} \equiv 0 \pmod{p}" inline /> for <MathBlock math="0 < k < p" inline />.</p>

            <p className="mt-3"><strong>Polynomial version:</strong> The identity suggests testing whether:</p>
            <MathBlock math="(x + a)^n \equiv x^n + a \pmod{n}" />
            <p className="mt-2">holds in <MathBlock math="\mathbb{Z}_n[x]" inline />. However, this requires exponentially many coefficient comparisons.</p>

            <p className="mt-3"><strong>AKS insight:</strong> Work in <MathBlock math="\mathbb{Z}_n[x]/(x^r - 1)" inline /> for carefully chosen small <em>r</em>. Test:</p>
            <MathBlock math="(x + a)^n \equiv x^n + a \pmod{n, x^r - 1}" />
            <p className="mt-2">for several values of <em>a</em>.</p>

            <p className="mt-3"><strong>Algorithm:</strong></p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>If <MathBlock math="n = m^b" inline /> for integers <MathBlock math="m, b > 1" inline />, output COMPOSITE.</li>
              <li>Find smallest <em>r</em> such that <MathBlock math="\text{ord}_r(n) > (\log n)^2" inline />.</li>
              <li>If <MathBlock math="1 < \gcd(a, n) < n" inline /> for some <MathBlock math="a \leq r" inline />, output COMPOSITE.</li>
              <li>If <MathBlock math="n \leq r" inline />, output PRIME.</li>
              <li>For <MathBlock math="a = 1" inline /> to <MathBlock math="\lfloor \sqrt{\phi(r)} \log n \rfloor" inline />:</li>
            </ol>
            <p className="ml-4 mt-1">If <MathBlock math="(x + a)^n \not\equiv x^n + a \pmod{n, x^r - 1}" inline />, output COMPOSITE.</p>
            <p className="mt-1">6. Output PRIME.</p>

            <p className="mt-3"><strong>Correctness sketch:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>If <em>n</em> is prime, all tests pass (generalized Fermat).</li>
              <li>If <em>n</em> is composite and passes all tests, group-theoretic arguments show <em>n</em> must be a prime power (step 1 catches this).</li>
            </ul>

            <p className="mt-3"><strong>Complexity:</strong> Finding <em>r</em> requires <MathBlock math="O((\log n)^5)" inline /> arithmetic operations. The main loop runs <MathBlock math="O(\sqrt{r} \log n)" inline /> times, each iteration doing polynomial exponentiation in <MathBlock math="O(r \log n)" inline /> operations mod <MathBlock math="(n, x^r - 1)" inline />. With <MathBlock math="r = O((\log n)^5)" inline />, total complexity is <MathBlock math="\tilde{O}((\log n)^6)" inline />.</p>
          </>
        }
      >
        There exists a deterministic polynomial-time algorithm for primality testing.
        The AKS algorithm runs in <MathBlock math="\tilde{O}((\log n)^6)" inline /> time.
      </Theorem>

      <Callout type="success">
        <strong>Practical Choice:</strong> In practice, Miller-Rabin with 40-64 iterations is
        preferred over AKS due to better constants. The probability of error is negligible
        (<MathBlock math="< 2^{-128}" inline />).
      </Callout>

      <h3>Comparison of Primality Tests</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Test</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Complexity</th>
              <th className="text-left py-2">Error</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">Trial Division</td>
              <td className="py-2">Deterministic</td>
              <td className="py-2"><MathBlock math="O(\sqrt{n})" inline /></td>
              <td className="py-2">0</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Fermat</td>
              <td className="py-2">Probabilistic</td>
              <td className="py-2"><MathBlock math="O(k \log^3 n)" inline /></td>
              <td className="py-2">Fails on Carmichaels</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Miller-Rabin</td>
              <td className="py-2">Probabilistic</td>
              <td className="py-2"><MathBlock math="O(k \log^3 n)" inline /></td>
              <td className="py-2"><MathBlock math="< 4^{-k}" inline /></td>
            </tr>
            <tr>
              <td className="py-2">AKS</td>
              <td className="py-2">Deterministic</td>
              <td className="py-2"><MathBlock math="O(\log^6 n)" inline /></td>
              <td className="py-2">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LessonLayout>
  );
}
