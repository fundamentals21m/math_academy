import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2>The Rho Method</h2>

      <p>
        Pollard's rho algorithm is an elegant factoring method that uses very little memory.
        It exploits the birthday paradox to find collisions in a pseudo-random sequence, revealing
        factors of the target number.
      </p>

      <h3>The Birthday Paradox</h3>

      <Theorem title="Birthday Paradox"
        proof={
          <>
            <p>We compute the probability of <em>no</em> collision among <em>k</em> samples from a set of size <em>n</em>.</p>

            <p className="mt-3"><strong>Exact probability:</strong></p>
            <p className="mt-2">The probability that all <em>k</em> samples are distinct is:</p>
            <MathBlock math="P(\text{no collision}) = \frac{n}{n} \cdot \frac{n-1}{n} \cdot \frac{n-2}{n} \cdots \frac{n-k+1}{n} = \prod_{i=0}^{k-1} \left(1 - \frac{i}{n}\right)" />

            <p className="mt-3"><strong>Approximation:</strong></p>
            <p className="mt-2">Using <MathBlock math="1 - x \approx e^{-x}" inline /> for small <em>x</em>:</p>
            <MathBlock math="P(\text{no collision}) \approx \prod_{i=0}^{k-1} e^{-i/n} = e^{-\sum_{i=0}^{k-1} i/n} = e^{-k(k-1)/(2n)}" />
            <p className="mt-2">For large <em>k</em>, this is approximately <MathBlock math="e^{-k^2/(2n)}" inline />.</p>

            <p className="mt-3"><strong>50% collision threshold:</strong></p>
            <p className="mt-2">We want <MathBlock math="P(\text{collision}) = 1 - P(\text{no collision}) = 0.5" inline />:</p>
            <MathBlock math="e^{-k^2/(2n)} = 0.5" />
            <MathBlock math="-\frac{k^2}{2n} = \ln(0.5) = -\ln 2" />
            <MathBlock math="k^2 = 2n \ln 2" />
            <MathBlock math="k = \sqrt{2n \ln 2} \approx 1.177\sqrt{n}" />

            <p className="mt-3"><strong>General bound:</strong></p>
            <p className="mt-2">For any constant probability <em>p</em> of collision:</p>
            <MathBlock math="k = \sqrt{2n \ln\frac{1}{1-p}} = O(\sqrt{n})" />

            <p className="mt-3"><strong>Classic example:</strong> With <MathBlock math="n = 365" inline /> days, we need only <MathBlock math="k = 23" inline /> people for 50% collision probability (<MathBlock math="\sqrt{2 \cdot 365 \cdot \ln 2} \approx 22.5" inline />).</p>
          </>
        }
      >
        In a group of <MathBlock math="\sqrt{2n \ln 2} \approx 1.18\sqrt{n}" inline /> randomly
        chosen people from a population of <em>n</em>, there is a 50% chance of a repeated birthday.
        More generally, after <MathBlock math="O(\sqrt{n})" inline /> samples, we expect a collision.
      </Theorem>

      <p>
        The rho method applies this principle: if we can detect a collision in a sequence
        modulo a factor <em>p</em> of <em>n</em>, we can likely find <em>p</em>.
      </p>

      <h3>Pollard's Rho Algorithm</h3>

      <Definition title="Pollard's Rho">
        To factor <em>n</em>:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Choose a polynomial <MathBlock math="f(x) = x^2 + c \bmod n" inline /> (typically c = 1)</li>
          <li>Start with <MathBlock math="x_0 = 2" inline /> (or random)</li>
          <li>Generate sequence: <MathBlock math="x_{i+1} = f(x_i)" inline /></li>
          <li>After <MathBlock math="O(\sqrt{p})" inline /> steps for smallest factor <em>p</em>, expect collision mod <em>p</em></li>
          <li>Use <MathBlock math="d = \gcd(x_i - x_j, n)" inline /> to find factor</li>
        </ol>
      </Definition>

      <Callout type="info">
        <strong>Why "Rho"?</strong> The sequence <MathBlock math="x_0, x_1, x_2, \ldots" inline /> eventually
        enters a cycle (by pigeonhole principle), forming a shape like the Greek letter ρ.
      </Callout>

      <h3>Floyd's Cycle Detection</h3>

      <p>
        Rather than storing all values to detect collisions (expensive in memory), we use Floyd's
        "tortoise and hare" algorithm:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Floyd's Algorithm</h4>
        <div className="font-mono text-sm text-dark-300">
          <p>x = y = 2 (starting value)</p>
          <p>repeat:</p>
          <p className="ml-4">x = f(x)          // tortoise: one step</p>
          <p className="ml-4">y = f(f(y))       // hare: two steps</p>
          <p className="ml-4">d = gcd(|x - y|, n)</p>
          <p className="ml-4">if 1 &lt; d &lt; n: return d</p>
          <p className="ml-4">if d = n: try different c</p>
        </div>
      </div>

      <Example title="Pollard Rho Example">
        <p>Factor <MathBlock math="n = 8051" inline /> using <MathBlock math="f(x) = x^2 + 1" inline /></p>
        <table className="w-full mt-2 text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="py-1 text-left">i</th>
              <th className="py-1 text-left">x (tortoise)</th>
              <th className="py-1 text-left">y (hare)</th>
              <th className="py-1 text-left">|x - y|</th>
              <th className="py-1 text-left">gcd</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr><td>0</td><td>2</td><td>2</td><td>0</td><td>-</td></tr>
            <tr><td>1</td><td>5</td><td>26</td><td>21</td><td>1</td></tr>
            <tr><td>2</td><td>26</td><td>7474</td><td>7448</td><td>1</td></tr>
            <tr><td>3</td><td>677</td><td>871</td><td>194</td><td>97</td></tr>
          </tbody>
        </table>
        <p className="mt-2">Found factor: <MathBlock math="97" inline />. Check: <MathBlock math="8051 = 97 \times 83" inline /></p>
      </Example>

      <h3>Complexity Analysis</h3>

      <Theorem title="Rho Complexity"
        proof={
          <>
            <p>We analyze Pollard's rho using the birthday paradox framework.</p>

            <p className="mt-3"><strong>Setup:</strong></p>
            <p className="mt-2">Let <MathBlock math="n = pq" inline /> with <MathBlock math="p \leq q" inline />. The iteration function <MathBlock math="f(x) = x^2 + c \bmod n" inline /> induces a function on <MathBlock math="\mathbb{Z}/p\mathbb{Z}" inline />:</p>
            <MathBlock math="\bar{f}(x \bmod p) = f(x) \bmod p" />

            <p className="mt-3"><strong>Collision detection:</strong></p>
            <p className="mt-2">If <MathBlock math="x_i \equiv x_j \pmod{p}" inline /> but <MathBlock math="x_i \not\equiv x_j \pmod{n}" inline />, then:</p>
            <MathBlock math="p \mid (x_i - x_j) \text{ but } n \nmid (x_i - x_j)" />
            <p className="mt-2">Therefore <MathBlock math="\gcd(x_i - x_j, n)" inline /> equals <em>p</em> (or a multiple, but not <em>n</em>).</p>

            <p className="mt-3"><strong>Birthday analysis mod p:</strong></p>
            <p className="mt-2">The sequence <MathBlock math="x_0, x_1, x_2, \ldots" inline /> reduced mod <em>p</em> behaves like random samples from <MathBlock math="\mathbb{Z}/p\mathbb{Z}" inline />. By the birthday paradox, we expect a collision mod <em>p</em> after approximately:</p>
            <MathBlock math="O(\sqrt{p})" />
            <p className="mt-2">iterations.</p>

            <p className="mt-3"><strong>Factor size bound:</strong></p>
            <p className="mt-2">The smallest factor satisfies <MathBlock math="p \leq \sqrt{n}" inline /> (otherwise <MathBlock math="p > \sqrt{n}" inline /> and <MathBlock math="q \geq p" inline /> implies <MathBlock math="n = pq > n" inline />, contradiction).</p>
            <MathBlock math="\sqrt{p} \leq \sqrt[4]{n} = n^{1/4}" />

            <p className="mt-3"><strong>Bit complexity:</strong></p>
            <p className="mt-2">Each iteration requires:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>One squaring mod <em>n</em>: <MathBlock math="O((\log n)^2)" inline /> bit operations</li>
              <li>One addition mod <em>n</em>: <MathBlock math="O(\log n)" inline /> bit operations</li>
              <li>One GCD computation: <MathBlock math="O((\log n)^2)" inline /> bit operations (Euclidean algorithm)</li>
            </ul>

            <p className="mt-3"><strong>Total complexity:</strong></p>
            <MathBlock math="O(\sqrt{p}) \cdot O((\log n)^2) = O(n^{1/4} (\log n)^2)" />

            <p className="mt-3"><strong>Heuristic assumption:</strong> This analysis assumes <MathBlock math="f(x) = x^2 + c" inline /> behaves like a random function mod <em>p</em>. While not provably random, extensive empirical evidence supports this behavior for most <em>c</em>.</p>
          </>
        }
      >
        For <MathBlock math="n = pq" inline /> with <MathBlock math="p \leq q" inline />, Pollard's rho
        finds factor <em>p</em> in expected time <MathBlock math="O(\sqrt{p})" inline /> iterations.
        Since <MathBlock math="p \leq \sqrt{n}" inline />, this is <MathBlock math="O(n^{1/4})" inline />.
        <p className="mt-2">Each iteration requires <MathBlock math="O((\log n)^2)" inline /> bit operations,
        so total: <MathBlock math="O(n^{1/4} (\log n)^2)" inline /></p>
      </Theorem>

      <Callout type="success">
        <strong>Memory Efficient:</strong> Unlike baby-step giant-step which needs{' '}
        <MathBlock math="O(\sqrt{p})" inline /> storage, Pollard's rho uses only <MathBlock math="O(1)" inline /> memory.
      </Callout>

      <h3>Brent's Improvement</h3>

      <Definition title="Brent's Optimization">
        Instead of Floyd's cycle detection, Brent's method:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Keeps one pointer fixed while advancing the other</li>
          <li>Doubles the interval at each "cycle"</li>
          <li>Provides ~24% speedup in practice</li>
        </ul>
      </Definition>

      <h3>Batch GCD Computation</h3>

      <p>
        Computing many individual GCDs is expensive. We can batch them:
      </p>

      <Theorem title="Batching Strategy"
        proof={
          <>
            <p>We prove correctness and analyze the trade-offs of batch GCD computation.</p>

            <p className="mt-3"><strong>Correctness:</strong></p>
            <p className="mt-2">Suppose <MathBlock math="x_i \equiv y_i \pmod{p}" inline /> for some factor <em>p</em> of <em>n</em> and some index <em>i</em> in the batch. Then <MathBlock math="p \mid (x_i - y_i)" inline />, which implies:</p>
            <MathBlock math="p \mid \prod_{j=1}^{m} (x_j - y_j) = Q" />
            <p className="mt-2">Therefore:</p>
            <MathBlock math="\gcd(Q, n) \geq p > 1" />
            <p className="mt-2">The batch GCD detects the factor if any individual GCD would have detected it.</p>

            <p className="mt-3"><strong>Complexity improvement:</strong></p>
            <p className="mt-2">Without batching, after <em>k</em> iterations we compute <em>k</em> GCDs, each costing <MathBlock math="O((\log n)^2)" inline />. Total: <MathBlock math="O(k (\log n)^2)" inline />.</p>

            <p className="mt-2">With batching (batch size <em>m</em>):</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Multiplications: <MathBlock math="k" inline /> products mod <em>n</em>, each <MathBlock math="O((\log n)^2)" inline /></li>
              <li>GCDs: <MathBlock math="k/m" inline /> computations, each <MathBlock math="O((\log n)^2)" inline /></li>
            </ul>
            <p className="mt-2">GCD cost reduced by factor of <em>m</em>: <MathBlock math="O((k/m)(\log n)^2)" inline /></p>

            <p className="mt-3"><strong>Trade-off:</strong></p>
            <p className="mt-2">If <MathBlock math="\gcd(Q, n) = n" inline />, the batch is uninformative (all differences might share different factors summing to <em>n</em>). We must then:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Fall back to individual GCDs within the batch, OR</li>
              <li>Binary search to find which sub-batch contains the collision</li>
            </ol>

            <p className="mt-3"><strong>Optimal batch size:</strong></p>
            <p className="mt-2">Typical choice: <MathBlock math="m \approx 100" inline /> to <MathBlock math="m \approx 1000" inline />. This balances:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Reducing GCD overhead (larger <em>m</em> better)</li>
              <li>Avoiding overshooting the collision (smaller <em>m</em> better)</li>
              <li>Managing the cost of fallback when <MathBlock math="\gcd = n" inline /></li>
            </ul>

            <p className="mt-3">In practice, batching provides a significant constant-factor speedup without changing the asymptotic complexity.</p>
          </>
        }
      >
        Accumulate products: <MathBlock math="Q = \prod_{i=1}^{m} (x_i - y_i) \bmod n" inline />
        then compute <MathBlock math="\gcd(Q, n)" inline /> once every <em>m</em> iterations.
        This reduces the number of GCD computations by factor of <em>m</em>.
      </Theorem>

      <h3>Pollard's Rho for DLP</h3>

      <p>
        The same idea works for discrete logarithms. Given <MathBlock math="h = g^x" inline />,
        find <em>x</em> by detecting collisions in a sequence that depends on both <em>g</em> and <em>h</em>.
      </p>

      <Definition title="Rho for DLP">
        Define three sets partitioning the group, and iteration function:
        <MathBlock math="(a_{i+1}, b_{i+1}, x_{i+1}) = \begin{cases} (a_i, b_i+1, x_i \cdot h) & x_i \in S_1 \\ (2a_i, 2b_i, x_i^2) & x_i \in S_2 \\ (a_i+1, b_i, x_i \cdot g) & x_i \in S_3 \end{cases}" />
        Collision <MathBlock math="x_i = x_j" inline /> gives <MathBlock math="g^{a_i} h^{b_i} = g^{a_j} h^{b_j}" inline />,
        yielding <MathBlock math="x = (a_i - a_j)(b_j - b_i)^{-1} \bmod q" inline />.
      </Definition>

      <h3>Practical Performance</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Rho Method Performance</h4>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Smallest Factor</th>
              <th className="text-left py-2">Expected Iterations</th>
              <th className="text-left py-2">Time (rough)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">20 digits</td>
              <td className="py-2">~10^10</td>
              <td className="py-2">Seconds</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">30 digits</td>
              <td className="py-2">~10^15</td>
              <td className="py-2">Days</td>
            </tr>
            <tr>
              <td className="py-2">40 digits</td>
              <td className="py-2">~10^20</td>
              <td className="py-2">Years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info">
        <strong>Best Use Case:</strong> Pollard's rho is ideal for finding small factors quickly.
        For balanced semiprimes (RSA moduli where p ≈ q), more sophisticated methods like the
        quadratic sieve are needed.
      </Callout>
    </LessonLayout>
  );
}
