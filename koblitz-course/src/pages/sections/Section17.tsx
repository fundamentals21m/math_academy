import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2>The Quadratic Sieve Method</h2>

      <p>
        The Quadratic Sieve (QS) was the fastest general-purpose factoring algorithm from
        1981 until approximately 1993, when the Number Field Sieve surpassed it for very large
        numbers. QS remains competitive for numbers under ~100 digits and is conceptually simpler.
      </p>

      <h3>The Basic Idea</h3>

      <p>
        Like CFRAC, QS seeks smooth values of <MathBlock math="Q(x) = x^2 - n" inline /> for{' '}
        <MathBlock math="x" inline /> near <MathBlock math="\sqrt{n}" inline />. The key innovation
        is <strong>sieving</strong>: instead of testing each value for smoothness, we use the
        structure of primes to identify smooth values efficiently.
      </p>

      <Definition title="Sieving Interval">
        Choose <MathBlock math="m = \lceil \sqrt{n} \rceil" inline />. For the polynomial{' '}
        <MathBlock math="Q(x) = (m + x)^2 - n" inline />, evaluate at <MathBlock math="x \in [-M, M]" inline />{' '}
        for some bound <em>M</em>. Values <MathBlock math="Q(x)" inline /> are approximately linear near 0:
        <MathBlock math="Q(x) \approx 2mx \text{ for small } x" />
      </Definition>

      <h3>The Sieving Process</h3>

      <Theorem title="Sieving Principle"
        proof={
          <>
            <p>We prove the periodicity of divisibility by <em>p</em> for the polynomial <MathBlock math="Q(x) = (m+x)^2 - n" inline />.</p>
            <p>Suppose <MathBlock math="p \mid Q(x_0)" inline />, i.e., <MathBlock math="(m + x_0)^2 \equiv n \pmod{p}" inline />. For any integer <em>k</em>:</p>
            <MathBlock math="Q(x_0 + kp) = (m + x_0 + kp)^2 - n" />
            <MathBlock math="= (m + x_0)^2 + 2(m + x_0)(kp) + (kp)^2 - n" />
            <MathBlock math="\equiv (m + x_0)^2 - n \equiv 0 \pmod{p}" />
            <p>since both <MathBlock math="2(m + x_0)(kp)" inline /> and <MathBlock math="(kp)^2" inline /> are divisible by <em>p</em>.</p>
            <p>For the root-finding step: <MathBlock math="p \mid Q(x)" inline /> iff <MathBlock math="(m+x)^2 \equiv n \pmod{p}" inline />. If <em>n</em> is a quadratic residue mod <em>p</em> (i.e., <MathBlock math="(n/p) = 1" inline />), there exist exactly two solutions <MathBlock math="m + x \equiv \pm\sqrt{n} \pmod{p}" inline />, giving:</p>
            <MathBlock math="x_1 \equiv \sqrt{n} - m \pmod{p}, \quad x_2 \equiv -\sqrt{n} - m \pmod{p}" />
            <p>If <MathBlock math="(n/p) = -1" inline />, there are no solutions, so <em>p</em> is excluded from the factor base. If <MathBlock math="p \mid n" inline />, there is one solution (but this means <em>p</em> divides <em>n</em>, so we have already found a factor).</p>
          </>
        }
      >
        If prime <em>p</em> divides <MathBlock math="Q(x_0)" inline />, then <em>p</em> divides{' '}
        <MathBlock math="Q(x_0 + kp)" inline /> for all integers <em>k</em>. We can find all{' '}
        <em>x</em> where <MathBlock math="p \mid Q(x)" inline /> by:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Solve <MathBlock math="(m + x)^2 \equiv n \pmod{p}" inline /> for roots <MathBlock math="x_1, x_2" inline /></li>
          <li>Mark positions <MathBlock math="x_1, x_1 + p, x_1 + 2p, \ldots" inline /> and same for <MathBlock math="x_2" inline /></li>
        </ol>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">QS Algorithm</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Choose factor base <MathBlock math="\mathcal{F} = \{p : (n/p) = 1, p \leq B\}" inline /></li>
          <li>Initialize array <MathBlock math="S[x] = \log|Q(x)|" inline /> for <MathBlock math="x \in [-M, M]" inline /></li>
          <li>For each <MathBlock math="p \in \mathcal{F}" inline />: subtract <MathBlock math="\log p" inline /> at positions where <MathBlock math="p \mid Q(x)" inline /></li>
          <li>After sieving, <MathBlock math="S[x] \approx 0" inline /> means <MathBlock math="Q(x)" inline /> is smooth</li>
          <li>For smooth <MathBlock math="Q(x)" inline />, factor completely to get exponent vector</li>
          <li>Use linear algebra to find dependency mod 2</li>
        </ol>
      </div>

      <Example title="Sieving Illustration">
        <p>Factor <MathBlock math="n = 15347" inline />, <MathBlock math="m = 124" inline /></p>
        <p className="mt-2"><MathBlock math="Q(x) = (124 + x)^2 - 15347" inline /></p>
        <p className="mt-2">For <MathBlock math="p = 7" inline />: solve <MathBlock math="124 + x \equiv \pm \sqrt{15347} \pmod{7}" inline /></p>
        <p><MathBlock math="15347 \equiv 2 \pmod{7}" inline />, and <MathBlock math="3^2 \equiv 2 \pmod{7}" inline />, so roots are <MathBlock math="x \equiv 3 - 124 \equiv 4 \pmod{7}" inline /> and <MathBlock math="x \equiv -3 - 124 \equiv 0 \pmod{7}" inline /></p>
        <p className="mt-2">Sieve: subtract <MathBlock math="\log 7" inline /> at positions 0, 4, 7, 11, 14, ...</p>
      </Example>

      <h3>Multiple Polynomial QS (MPQS)</h3>

      <Definition title="MPQS">
        Use multiple polynomials of the form:
        <MathBlock math="Q_A(x) = (Ax + B)^2 - n = A^2 x^2 + 2ABx + (B^2 - n)" />
        where <MathBlock math="A^2 \mid (B^2 - n)" inline />. Each polynomial provides a fresh
        sieving interval, and the work can be parallelized.
      </Definition>

      <p>
        Choosing <MathBlock math="A \approx \sqrt{2n}/M" inline /> gives values of size{' '}
        <MathBlock math="\sqrt{n/2}" inline /> in the sieving interval, maintaining small residues.
      </p>

      <h3>Complexity Analysis</h3>

      <Theorem title="QS Complexity"
        proof={
          <>
            <p>We analyze the complexity of the Quadratic Sieve by balancing relation collection against linear algebra costs.</p>
            <p>Let <MathBlock math="L(n) = e^{\sqrt{\ln n \ln \ln n}}" inline /> and write <MathBlock math="B = L(n)^\alpha" inline /> for the smoothness bound.</p>
            <p><strong>Relation collection:</strong> Values <MathBlock math="Q(x) \approx 2Mx" inline /> for <MathBlock math="x \in [-M, M]" inline />. With <MathBlock math="M \approx \sqrt{n}" inline />, we have <MathBlock math="|Q(x)| \approx \sqrt{n}" inline />.</p>
            <p>The probability that <MathBlock math="Q(x)" inline /> is <em>B</em>-smooth is approximately <MathBlock math="u^{-u}" inline /> where:</p>
            <MathBlock math="u = \frac{\ln \sqrt{n}}{\ln B} = \frac{\ln n}{2\alpha \sqrt{\ln n \ln \ln n}}" />
            <p>We need <MathBlock math="\pi(B) \approx B/\ln B" inline /> relations. The sieving interval must contain this many smooth values, requiring:</p>
            <MathBlock math="M \cdot u^{-u} \geq B / \ln B" />
            <p><strong>Sieving cost:</strong> For each prime <MathBlock math="p \leq B" inline />, we mark <MathBlock math="2M/p" inline /> positions. Total sieving work is <MathBlock math="\sum_{p \leq B} 2M/p \approx 2M \ln \ln B" inline />.</p>
            <p><strong>Linear algebra:</strong> Solving a <MathBlock math="B \times B" inline /> sparse matrix costs <MathBlock math="O(B^2)" inline /> with structured methods.</p>
            <p>Optimizing: set <MathBlock math="\alpha = 1/2" inline />. Then <MathBlock math="u = \sqrt{\ln n / \ln \ln n}" inline />, and:</p>
            <MathBlock math="u^u = \exp\left(\sqrt{\ln n / \ln \ln n} \cdot \frac{1}{2}\ln(\ln n / \ln \ln n)\right) = L(n)^{1/2 + o(1)}" />
            <p>With <MathBlock math="M = L(n)^{1/2}" inline />, sieving costs <MathBlock math="L(n)^{1/2} \cdot L(n)^{1/2} = L(n)^{1+o(1)}" inline />. Linear algebra is <MathBlock math="L(n)^{1+o(1)}" inline />. Total: <MathBlock math="L(n)^{1+o(1)}" inline />.</p>
          </>
        }
      >
        The Quadratic Sieve factors <em>n</em> in time:
        <MathBlock math="L(n)^{1 + o(1)} = e^{(1 + o(1))\sqrt{\ln n \ln \ln n}}" />
        with optimal factor base bound <MathBlock math="B = L(n)^{1/2}" inline /> and sieving
        interval <MathBlock math="M = L(n)^{1/2}" inline />.
      </Theorem>

      <Callout type="info">
        <strong>Relation Count:</strong> We need approximately <MathBlock math="\pi(B) + 1" inline />{' '}
        smooth values. With <MathBlock math="B = L(n)^{1/2}" inline />, this is about{' '}
        <MathBlock math="L(n)^{1/2}" inline /> relations, each requiring smoothness testing over
        the factor base.
      </Callout>

      <h3>Large Prime Variation</h3>

      <Definition title="Large Prime Variation">
        Allow relations with one or two primes larger than <em>B</em> (but still small):
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Single large prime:</strong> If <MathBlock math="Q(x) = (\text{smooth}) \times p" inline /> for <MathBlock math="p > B" inline />, save it</li>
          <li>Two relations with same large prime combine to eliminate it</li>
          <li><strong>Double large prime:</strong> Allow two unfactored primes; more combinations possible</li>
        </ul>
        This can double the effective relation collection rate.
      </Definition>

      <h3>Linear Algebra Phase</h3>

      <p>
        After collecting enough relations, solve a sparse system over <MathBlock math="\mathbb{F}_2" inline />:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Matrix Structure</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Rows: relations (one per smooth <MathBlock math="Q(x)" inline />)</li>
          <li>Columns: factor base primes</li>
          <li>Entry <MathBlock math="(i, j)" inline />: exponent of <MathBlock math="p_j" inline /> in relation <em>i</em>, mod 2</li>
          <li>Dimension: <MathBlock math="\sim L(n)^{1/2} \times L(n)^{1/2}" inline /></li>
          <li>Sparsity: each row has <MathBlock math="O(\log n / \log\log n)" inline /> nonzeros</li>
        </ul>
      </div>

      <Theorem title="Efficient Linear Algebra"
        proof={
          <>
            <p>We analyze the complexity of finding null vectors in the exponent matrix over <MathBlock math="\mathbb{F}_2" inline />.</p>
            <p>The matrix has dimensions <MathBlock math="r \times c" inline /> where <MathBlock math="r \approx c \approx \pi(B) \approx L(n)^{1/2}" inline />. Each row has at most <MathBlock math="O(\log n / \log \log n)" inline /> non-zero entries (the number of prime factors of a smooth number).</p>
            <p><strong>Naive Gaussian elimination:</strong> <MathBlock math="O(r^2 c) = O(L(n)^{3/2})" inline />, which dominates relation collection.</p>
            <p><strong>Block Lanczos method:</strong> Finds the null space of <MathBlock math="A^T A" inline /> by computing the sequence:</p>
            <MathBlock math="v, Av, A^2v, \ldots, A^k v" />
            <p>until a linear dependency is found. Each matrix-vector product costs <MathBlock math="O(r \cdot \text{density})" inline /> where density is <MathBlock math="O(\log n / \log \log n)" inline /> per row.</p>
            <p>The number of iterations needed is <MathBlock math="O(r)" inline /> (dimension of the null space is <MathBlock math="r - c + 1" inline />). Total cost:</p>
            <MathBlock math="O(r \times r \times \log n / \log \log n) = O(L(n)^1 \times (\log n)^{O(1)}) = O(L(n)^{1+o(1)})" />
            <p><strong>Block Wiedemann method:</strong> Uses a similar Krylov subspace approach but is better suited for parallel computation. The asymptotic complexity is the same.</p>
            <p>Both methods exploit the sparse structure to achieve cost proportional to <MathBlock math="(\text{rows})^2 \times \text{average density}" inline />.</p>
          </>
        }
      >
        Block Lanczos or Block Wiedemann algorithms find null vectors in time{' '}
        <MathBlock math="O((\text{rows})^2 \times \text{density})" inline />, exploiting sparsity.
        For QS, this is <MathBlock math="O(L(n)^{1 + o(1)})" inline />.
      </Theorem>

      <h3>Historical Factorizations</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Number</th>
              <th className="text-left py-2">Digits</th>
              <th className="text-left py-2">Year</th>
              <th className="text-left py-2">Method</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">RSA-100</td>
              <td className="py-2">100</td>
              <td className="py-2">1991</td>
              <td className="py-2">QS</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">RSA-110</td>
              <td className="py-2">110</td>
              <td className="py-2">1992</td>
              <td className="py-2">QS</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">RSA-120</td>
              <td className="py-2">120</td>
              <td className="py-2">1993</td>
              <td className="py-2">QS</td>
            </tr>
            <tr>
              <td className="py-2">RSA-129</td>
              <td className="py-2">129</td>
              <td className="py-2">1994</td>
              <td className="py-2">QS (last)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success">
        <strong>Self-Initializing QS:</strong> Modern implementations (SIQS) automatically choose
        good polynomial parameters, making QS practical for numbers up to ~100 digits on a single
        computer, or ~120 digits with distributed computing.
      </Callout>

      <h3>Comparison: QS vs NFS</h3>

      <p>
        The Number Field Sieve (NFS) has complexity <MathBlock math="L(n)^{c}" inline /> with{' '}
        <MathBlock math="c \approx 1.9" inline /> for QS vs <MathBlock math="c \approx 1.5" inline /> for NFS.
        The crossover point is around 100-110 digits; above this, NFS dominates.
      </p>
    </LessonLayout>
  );
}
