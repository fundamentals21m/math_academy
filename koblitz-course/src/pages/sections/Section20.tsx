import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2>Elliptic Curve Primality Test</h2>

      <p>
        Elliptic curves provide a powerful approach to primality testing. The Goldwasser-Kilian
        algorithm and later ECPP (Elliptic Curve Primality Proving) can prove primality of numbers
        with thousands of digits, producing verifiable certificates.
      </p>

      <h3>Primality and Group Order</h3>

      <Theorem title="Key Observation"
        proof={
          <>
            <p>We establish how elliptic curve group structure reveals primality.</p>
            <p><strong>Well-definedness:</strong> When <em>n</em> is prime, <MathBlock math="\mathbb{F}_n = \mathbb{Z}/n\mathbb{Z}" inline /> is a field, and the elliptic curve equation <MathBlock math="y^2 = x^3 + ax + b" inline /> with <MathBlock math="4a^3 + 27b^2 \not\equiv 0 \pmod{n}" inline /> defines a non-singular curve. The group law (point addition) is well-defined since all required field operations (especially division) are valid.</p>
            <p><strong>Hasse's bound:</strong> For prime <em>n</em>, Hasse's theorem gives:</p>
            <MathBlock math="|n + 1 - \#E(\mathbb{F}_n)| \leq 2\sqrt{n}" />
            <p><strong>Primality criterion:</strong> Suppose <MathBlock math="\#E(\mathbb{F}_n) = m = kq" inline /> where <em>q</em> is prime with <MathBlock math="q > (n^{1/4} + 1)^2" inline />. If we find a point <em>P</em> such that:</p>
            <MathBlock math="mP = \mathcal{O} \quad \text{but} \quad (m/q)P \neq \mathcal{O}" />
            <p>then <em>P</em> has order divisible by <em>q</em>. By Lagrange's theorem, <MathBlock math="q \mid \#E(\mathbb{F}_n)" inline />.</p>
            <p>If <em>n</em> were composite with a prime factor <MathBlock math="p \mid n" inline />, then <em>E</em> mod <em>p</em> would have at most <MathBlock math="p + 1 + 2\sqrt{p} < (p^{1/2} + 1)^2" inline /> points. But <MathBlock math="q > (n^{1/4}+1)^2 > (p^{1/2}+1)^2" inline /> for any <MathBlock math="p \leq \sqrt{n}" inline />, contradicting <MathBlock math="q \mid \#E(\mathbb{F}_p)" inline />.</p>
          </>
        }
      >
        If <em>n</em> is prime, then for any elliptic curve <em>E</em> over <MathBlock math="\mathbb{F}_n" inline />:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The group <MathBlock math="E(\mathbb{F}_n)" inline /> is well-defined</li>
          <li>By Hasse: <MathBlock math="n + 1 - 2\sqrt{n} \leq \#E(\mathbb{F}_n) \leq n + 1 + 2\sqrt{n}" inline /></li>
          <li>If we can show the group order has a large prime factor, <em>n</em> must be prime</li>
        </ul>
      </Theorem>

      <h3>The Goldwasser-Kilian Algorithm</h3>

      <Definition title="Basic Idea">
        To prove <em>n</em> is prime:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Find an elliptic curve <em>E</em> over <MathBlock math="\mathbb{Z}/n\mathbb{Z}" inline /></li>
          <li>Compute <MathBlock math="m = \#E" inline /> (using Schoof's algorithm)</li>
          <li>Factor <MathBlock math="m = kq" inline /> where <em>q</em> is a probable prime <MathBlock math="> \sqrt{n}" inline /></li>
          <li>Find a point <em>P</em> with <MathBlock math="mP = \mathcal{O}" inline /> but <MathBlock math="(m/q)P \neq \mathcal{O}" inline /></li>
          <li>Recursively prove <em>q</em> is prime</li>
        </ol>
      </Definition>

      <Theorem title="Why This Works"
        proof={
          <>
            <p>We prove correctness of the Goldwasser-Kilian primality criterion.</p>
            <p>Suppose all computations succeed mod <em>n</em>, and we have verified that <em>q</em> is prime with <MathBlock math="q > \sqrt{n}" inline />. Assume for contradiction that <em>n</em> is composite.</p>
            <p><strong>Case 1:</strong> If during point additions we needed to invert some <MathBlock math="d" inline /> with <MathBlock math="\gcd(d, n) = g" inline />, <MathBlock math="1 < g < n" inline />, then the extended Euclidean algorithm would have revealed <em>g</em> as a nontrivial factor. Since computations succeeded, this didn't happen.</p>
            <p><strong>Case 2:</strong> Computations succeeded, meaning all slopes <MathBlock math="\lambda" inline /> in point additions were well-defined mod <em>n</em>. Let <MathBlock math="p" inline /> be the smallest prime factor of <em>n</em>, so <MathBlock math="p \leq \sqrt{n}" inline />.</p>
            <p>The point <em>P</em> reduces to some point <MathBlock math="\bar{P}" inline /> on <MathBlock math="E(\mathbb{F}_p)" inline />. Since <MathBlock math="mP = \mathcal{O}" inline /> mod <em>n</em>, we have <MathBlock math="m\bar{P} = \mathcal{O}" inline /> mod <em>p</em>. Thus <MathBlock math="\text{ord}(\bar{P}) \mid m" inline />.</p>
            <p>Since <MathBlock math="(m/q)P \neq \mathcal{O}" inline /> mod <em>n</em>, we have <MathBlock math="(m/q)\bar{P} \neq \mathcal{O}" inline /> mod <em>p</em> (otherwise all coordinates would be divisible by <em>p</em>, detectable). Thus <MathBlock math="q \mid \text{ord}(\bar{P})" inline />.</p>
            <p>By Lagrange's theorem, <MathBlock math="\text{ord}(\bar{P}) \mid \#E(\mathbb{F}_p)" inline />. So <MathBlock math="q \mid \#E(\mathbb{F}_p)" inline />. By Hasse:</p>
            <MathBlock math="\#E(\mathbb{F}_p) \leq p + 1 + 2\sqrt{p} < (\sqrt{p} + 1)^2 \leq (\sqrt[4]{n} + 1)^2 < \sqrt{n} < q" />
            <p>This contradicts <MathBlock math="q \mid \#E(\mathbb{F}_p)" inline />. Therefore <em>n</em> must be prime.</p>
          </>
        }
      >
        If computations succeed modulo <em>n</em> and <em>q</em> is prime with <MathBlock math="q > \sqrt{n}" inline />,
        then <em>n</em> must be prime. If <em>n</em> were composite, the group operations would
        fail (denominators not invertible) or produce inconsistent results.
      </Theorem>

      <h3>Schoof's Algorithm</h3>

      <Definition title="Computing Group Order">
        <strong>Schoof's algorithm</strong> (1985) computes <MathBlock math="\#E(\mathbb{F}_p)" inline />{' '}
        in polynomial time <MathBlock math="O((\log p)^8)" inline />:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>For small primes <MathBlock math="\ell" inline />, compute <MathBlock math="t \bmod \ell" inline />{' '}
              using division polynomials</li>
          <li>Use CRT to combine: <MathBlock math="t \bmod \prod \ell" inline /></li>
          <li>Since <MathBlock math="|t| \leq 2\sqrt{p}" inline />, enough primes determine <em>t</em></li>
          <li><MathBlock math="\#E = p + 1 - t" inline /></li>
        </ol>
      </Definition>

      <Callout type="info">
        <strong>Improvement:</strong> The Schoof-Elkies-Atkin (SEA) algorithm improves complexity
        to <MathBlock math="O((\log p)^4)" inline />, making it practical for large primes.
      </Callout>

      <h3>ECPP: Elliptic Curve Primality Proving</h3>

      <Definition title="ECPP Algorithm">
        Atkin-Morain's ECPP improves on Goldwasser-Kilian:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Uses complex multiplication (CM) to construct curves with known order</li>
          <li>Avoids point counting by using theory of complex multiplication</li>
          <li>Order is given by <MathBlock math="m = p + 1 - t" inline /> where <em>t</em> comes from CM theory</li>
          <li>Much faster in practice</li>
        </ul>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">ECPP Overview</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Find discriminant <MathBlock math="-D" inline /> with <MathBlock math="4n = t^2 + Ds^2" inline /> ("cornacchia")</li>
          <li>Use Hilbert class polynomial <MathBlock math="H_D(x)" inline /> to get curve parameters</li>
          <li>Curve order is <MathBlock math="m = n + 1 - t" inline /> or <MathBlock math="m = n + 1 + t" inline /></li>
          <li>Find point of order <em>m</em>, factor <em>m</em> to get recursive target</li>
          <li>Output certificate (curve, point, recursive proof)</li>
        </ol>
      </div>

      <h3>Primality Certificates</h3>

      <Theorem title="ECPP Certificate"
        proof={
          <>
            <p>We prove the soundness and verifiability of ECPP certificates.</p>
            <p><strong>Certificate structure:</strong> An ECPP certificate for <em>n</em> consists of a descending chain <MathBlock math="n = n_0 > n_1 > \cdots > n_k" inline /> where each step contains:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Curve parameters <MathBlock math="(a_i, b_i)" inline /> defining <MathBlock math="E_i: y^2 = x^3 + a_i x + b_i" inline /> mod <MathBlock math="n_i" inline /></li>
              <li>A point <MathBlock math="P_i = (x_i, y_i)" inline /> on <MathBlock math="E_i" inline /></li>
              <li>The group order <MathBlock math="m_i = c_i \cdot n_{i+1}" inline /> with <MathBlock math="n_{i+1} > (n_i^{1/4} + 1)^2" inline /></li>
            </ul>
            <p><strong>Verification:</strong> For each level <em>i</em>, the verifier checks:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li><MathBlock math="P_i" inline /> lies on <MathBlock math="E_i" inline />: verify <MathBlock math="y_i^2 \equiv x_i^3 + a_i x_i + b_i \pmod{n_i}" inline /></li>
              <li>Non-singularity: verify <MathBlock math="4a_i^3 + 27b_i^2 \not\equiv 0 \pmod{n_i}" inline /></li>
              <li>Order verification: compute <MathBlock math="m_i P_i" inline /> and check it equals <MathBlock math="\mathcal{O}" inline /></li>
              <li>Divisibility: compute <MathBlock math="(m_i/n_{i+1})P_i" inline /> and check it's not <MathBlock math="\mathcal{O}" inline /></li>
              <li>Size: verify <MathBlock math="n_{i+1} > (n_i^{1/4} + 1)^2" inline /></li>
            </ol>
            <p><strong>Complexity:</strong> Each scalar multiplication costs <MathBlock math="O(\log m_i)" inline /> group operations, each operation is <MathBlock math="O((\log n_i)^2)" inline /> for arithmetic mod <MathBlock math="n_i" inline />. Total verification is polynomial in <MathBlock math="\log n" inline />.</p>
            <p>The chain terminates at <MathBlock math="n_k" inline /> small enough for direct verification (e.g., by trial division or a lookup table).</p>
          </>
        }
      >
        ECPP produces a certificate consisting of:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A chain of primes <MathBlock math="n = n_0 > n_1 > \cdots > n_k" inline /> where <MathBlock math="n_k" inline /> is small</li>
          <li>For each <MathBlock math="n_i" inline />: curve <MathBlock math="E_i" inline />, point <MathBlock math="P_i" inline />, order <MathBlock math="m_i" inline /></li>
          <li><MathBlock math="m_i = c_i \cdot n_{i+1}" inline /> where <MathBlock math="n_{i+1}" inline /> is the next prime to verify</li>
        </ul>
        The certificate can be verified in polynomial time without trusting the prover.
      </Theorem>

      <Example title="Certificate Structure">
        <p>To prove 31 is prime (toy example):</p>
        <ul className="list-disc list-inside mt-2">
          <li>Curve: <MathBlock math="y^2 = x^3 + x + 5" inline /> over <MathBlock math="\mathbb{F}_{31}" inline /></li>
          <li>Order: <MathBlock math="m = 28 = 4 \times 7" inline /></li>
          <li>Point <MathBlock math="P = (0, 9)" inline /> has order 28</li>
          <li><MathBlock math="7P \neq \mathcal{O}" inline /> but <MathBlock math="28P = \mathcal{O}" inline /></li>
          <li>Since <MathBlock math="7 > \sqrt{31}" inline />, this proves 31 is prime (given 7 is prime)</li>
        </ul>
      </Example>

      <h3>Complexity</h3>

      <Theorem title="ECPP Complexity"
        proof={
          <>
            <p>We analyze the expected running time of ECPP under standard heuristics.</p>
            <p><strong>Chain length:</strong> At each step, we reduce <MathBlock math="n_i" inline /> to <MathBlock math="n_{i+1} \approx n_i / c" inline /> for some small cofactor <em>c</em>. The chain has length <MathBlock math="O(\log n)" inline />.</p>
            <p><strong>Finding suitable discriminant:</strong> For each <MathBlock math="n_i" inline />, we need a negative discriminant <MathBlock math="-D" inline /> such that:</p>
            <MathBlock math="4n_i = t^2 + D s^2" />
            <p>for integers <em>t, s</em> with <MathBlock math="|t| \leq 2\sqrt{n_i}" inline />. By Cornacchia's algorithm, this costs <MathBlock math="O((\log n_i)^2)" inline /> per discriminant tried.</p>
            <p><strong>Heuristic:</strong> The density of suitable discriminants is believed to be <MathBlock math="O(1/\log n_i)" inline />, so we expect to try <MathBlock math="O(\log n_i)" inline /> discriminants. However, we want <MathBlock math="m_i = n_i + 1 - t" inline /> to have a large prime factor, which succeeds with probability <MathBlock math="\Omega(1/\log n_i)" inline /> (by number-theoretic estimates on smooth numbers).</p>
            <p><strong>Hilbert class polynomial:</strong> Computing <MathBlock math="H_D(x)" inline /> mod <MathBlock math="n_i" inline /> costs <MathBlock math="O(|D| \cdot (\log n_i)^2)" inline />. Under GRH, class numbers grow as <MathBlock math="O(\sqrt{D} \log D)" inline />, and suitable <em>D</em> values are <MathBlock math="O((\log n_i)^2)" inline /> on average.</p>
            <p><strong>Total per level:</strong> <MathBlock math="O((\log n_i)^3)" inline /> operations, where each operation is <MathBlock math="O((\log n_i)^{1+\epsilon})" inline /> using fast multiplication.</p>
            <p><strong>Summing over chain:</strong> Total time is <MathBlock math="\sum_{i=0}^{O(\log n)} O((\log n_i)^{4+\epsilon}) = O((\log n)^{5+\epsilon})" inline /> under conservative estimates, or <MathBlock math="O((\log n)^{4+\epsilon})" inline /> under optimistic heuristics about discriminant search.</p>
          </>
        }
      >
        Under reasonable heuristics, ECPP runs in expected time:
        <MathBlock math="O((\log n)^{4+\epsilon})" />
        This is significantly faster than the deterministic AKS test in practice.
      </Theorem>

      <h3>Comparison of Primality Methods</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Method</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Output</th>
              <th className="text-left py-2">Speed</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">Miller-Rabin</td>
              <td className="py-2">Probabilistic</td>
              <td className="py-2">No proof</td>
              <td className="py-2">Fastest</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">AKS</td>
              <td className="py-2">Deterministic</td>
              <td className="py-2">Proof</td>
              <td className="py-2">Slowest</td>
            </tr>
            <tr>
              <td className="py-2">ECPP</td>
              <td className="py-2">Deterministic</td>
              <td className="py-2">Certificate</td>
              <td className="py-2">Fast (practical)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success">
        <strong>Record Primes:</strong> ECPP has been used to prove primality of numbers with
        over 30,000 decimal digits. The certificate can be verified much faster than it takes
        to generate, enabling distributed verification.
      </Callout>
    </LessonLayout>
  );
}
