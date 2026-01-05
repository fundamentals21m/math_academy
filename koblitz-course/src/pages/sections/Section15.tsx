import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>Fermat Factorization and Factor Bases</h2>

      <p>
        Fermat's method expresses <em>n</em> as a difference of squares. When combined with the
        concept of factor bases and smooth numbers, it leads to powerful factoring algorithms.
      </p>

      <h3>Fermat's Method Revisited</h3>

      <Theorem title="Fermat's Identity"
        proof={
          <>
            <p><strong>Algebraic identity:</strong></p>
            <p className="mt-2">The factorization follows from the difference of squares identity:</p>
            <MathBlock math="x^2 - y^2 = (x - y)(x + y)" />
            <p className="mt-2">This is verified by expansion: <MathBlock math="(x-y)(x+y) = x^2 + xy - xy - y^2 = x^2 - y^2" inline />.</p>

            <p className="mt-3"><strong>Nontriviality condition:</strong></p>
            <p className="mt-2">The factors <MathBlock math="(x - y)" inline /> and <MathBlock math="(x + y)" inline /> are nontrivial (neither equals 1 nor <em>n</em>) when:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><MathBlock math="x - y > 1" inline /> (so <MathBlock math="x > y + 1" inline />)</li>
              <li><MathBlock math="x + y < n" inline /> (automatically satisfied since <MathBlock math="(x+y)(x-y) = n" inline /> and <MathBlock math="x - y > 1" inline />)</li>
            </ul>

            <p className="mt-3"><strong>Existence for odd composites:</strong></p>
            <p className="mt-2">If <MathBlock math="n = ab" inline /> with <MathBlock math="1 < a \leq b < n" inline />, set:</p>
            <MathBlock math="x = \frac{a + b}{2}, \quad y = \frac{b - a}{2}" />
            <p className="mt-2">Then:</p>
            <MathBlock math="x^2 - y^2 = \frac{(a+b)^2 - (b-a)^2}{4} = \frac{4ab}{4} = ab = n" />
            <p className="mt-2">For odd <em>n</em>, both <em>a</em> and <em>b</em> are odd (since <MathBlock math="n = ab" inline /> is odd), so <MathBlock math="a + b" inline /> and <MathBlock math="b - a" inline /> are even, making <em>x</em> and <em>y</em> integers.</p>

            <p className="mt-3"><strong>Congruence version:</strong></p>
            <p className="mt-2">More generally, if <MathBlock math="x^2 \equiv y^2 \pmod{n}" inline /> with <MathBlock math="x \not\equiv \pm y \pmod{n}" inline />, then:</p>
            <MathBlock math="n \mid (x^2 - y^2) = (x-y)(x+y)" />
            <p className="mt-2">But <MathBlock math="n \nmid (x - y)" inline /> and <MathBlock math="n \nmid (x + y)" inline />. Therefore <MathBlock math="\gcd(x - y, n)" inline /> is a proper divisor of <em>n</em> (similarly for <MathBlock math="x + y" inline />).</p>
          </>
        }
      >
        If <MathBlock math="n = x^2 - y^2" inline /> with <MathBlock math="x \neq \pm y" inline />, then:
        <MathBlock math="n = (x - y)(x + y)" />
        gives a nontrivial factorization (unless one factor equals 1 or <em>n</em>).
      </Theorem>

      <p>
        More powerfully: if we find <MathBlock math="x^2 \equiv y^2 \pmod{n}" inline /> with{' '}
        <MathBlock math="x \not\equiv \pm y \pmod{n}" inline />, then <MathBlock math="\gcd(x - y, n)" inline />{' '}
        is a nontrivial factor.
      </p>

      <h3>Smooth Numbers</h3>

      <Definition title="B-Smooth Number">
        An integer is <strong>B-smooth</strong> if all its prime factors are at most <em>B</em>.
        <p className="mt-2">Example: <MathBlock math="60 = 2^2 \cdot 3 \cdot 5" inline /> is 5-smooth.</p>
      </Definition>

      <Definition title="Factor Base">
        A <strong>factor base</strong> is a set of small primes{' '}
        <MathBlock math="\mathcal{F} = \{p_1, p_2, \ldots, p_k\}" inline /> used to express smooth numbers.
        If <em>m</em> is <em>B</em>-smooth, we can write:
        <MathBlock math="m = \prod_{i=1}^{k} p_i^{e_i}" />
        The exponent vector <MathBlock math="(e_1, e_2, \ldots, e_k)" inline /> represents <em>m</em>.
      </Definition>

      <Example title="Factor Base Representation">
        <p>Factor base: <MathBlock math="\{2, 3, 5, 7\}" inline /></p>
        <ul className="list-disc list-inside mt-2">
          <li><MathBlock math="60 = 2^2 \cdot 3^1 \cdot 5^1 \cdot 7^0 \to (2, 1, 1, 0)" inline /></li>
          <li><MathBlock math="84 = 2^2 \cdot 3^1 \cdot 5^0 \cdot 7^1 \to (2, 1, 0, 1)" inline /></li>
          <li><MathBlock math="35 = 2^0 \cdot 3^0 \cdot 5^1 \cdot 7^1 \to (0, 0, 1, 1)" inline /></li>
        </ul>
      </Example>

      <h3>The Random Squares Method</h3>

      <Theorem title="Random Squares Approach"
        proof={
          <>
            <p>We prove that this approach produces a factorization with high probability.</p>

            <p className="mt-3"><strong>Step 1: Relation collection</strong></p>
            <p className="mt-2">For each smooth relation <MathBlock math="x_i^2 \equiv \prod_{j=1}^{k} p_j^{e_{ij}} \pmod{n}" inline />, we obtain an exponent vector:</p>
            <MathBlock math="\mathbf{v}_i = (e_{i1}, e_{i2}, \ldots, e_{ik}) \in \mathbb{Z}^k" />

            <p className="mt-3"><strong>Step 2: Linear algebra over F_2</strong></p>
            <p className="mt-2">We need all exponents to be even. Reduce mod 2:</p>
            <MathBlock math="\mathbf{v}_i \bmod 2 = (e_{i1} \bmod 2, \ldots, e_{ik} \bmod 2) \in \mathbb{F}_2^k" />
            <p className="mt-2">We seek a subset <em>S</em> such that <MathBlock math="\sum_{i \in S} \mathbf{v}_i \equiv \mathbf{0} \pmod{2}" inline />.</p>
            <p className="mt-2">With <MathBlock math="k + 1" inline /> or more relations, the vectors span a space of dimension at most <em>k</em>, so a nontrivial linear dependence exists (by pigeonhole/rank-nullity).</p>

            <p className="mt-3"><strong>Step 3: Constructing the square</strong></p>
            <p className="mt-2">Let <MathBlock math="S = \{i_1, \ldots, i_m\}" inline /> be the dependent subset. Define:</p>
            <MathBlock math="X = \prod_{i \in S} x_i, \quad Y = \prod_{j=1}^{k} p_j^{f_j} \text{ where } f_j = \frac{1}{2}\sum_{i \in S} e_{ij}" />
            <p className="mt-2">Then:</p>
            <MathBlock math="X^2 = \prod_{i \in S} x_i^2 \equiv \prod_{i \in S} \prod_j p_j^{e_{ij}} = \prod_j p_j^{\sum_i e_{ij}} = \prod_j p_j^{2f_j} = Y^2 \pmod{n}" />

            <p className="mt-3"><strong>Step 4: Factorization probability</strong></p>
            <p className="mt-2">We have <MathBlock math="X^2 \equiv Y^2 \pmod{n}" inline />, so <MathBlock math="n \mid (X - Y)(X + Y)" inline />.</p>
            <p className="mt-2">If <MathBlock math="X \not\equiv \pm Y \pmod{n}" inline />, then <MathBlock math="\gcd(X - Y, n)" inline /> is a proper factor.</p>

            <p className="mt-3"><strong>Success probability:</strong></p>
            <p className="mt-2">For <MathBlock math="n = pq" inline />, by CRT there are 4 square roots of <MathBlock math="Y^2" inline /> mod <em>n</em>: <MathBlock math="\pm Y, \pm Y'" inline /> where <MathBlock math="Y' \equiv Y \pmod{p}" inline /> but <MathBlock math="Y' \equiv -Y \pmod{q}" inline />.</p>
            <p className="mt-2">If <em>X</em> is "random" among these, probability of <MathBlock math="X \not\equiv \pm Y" inline /> is <MathBlock math="1/2" inline />. With multiple independent dependencies, success probability approaches 1.</p>
          </>
        }
      >
        To factor <em>n</em>:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Choose factor base <MathBlock math="\mathcal{F} = \{p_1, \ldots, p_k\}" inline /></li>
          <li>Find many <em>x</em> values where <MathBlock math="x^2 \bmod n" inline /> is <MathBlock math="\mathcal{F}" inline />-smooth</li>
          <li>Express each: <MathBlock math="x_i^2 \equiv \prod p_j^{e_{ij}} \pmod{n}" inline /></li>
          <li>Find subset where exponents sum to even (linear algebra mod 2)</li>
          <li>This gives <MathBlock math="(\prod x_i)^2 \equiv (\prod p_j^{f_j})^2 \pmod{n}" inline /></li>
          <li>Compute <MathBlock math="\gcd" inline /> to find factor</li>
        </ol>
      </Theorem>

      <Example title="Simple Factor Base Method">
        <p>Factor <MathBlock math="n = 1829" inline /> with <MathBlock math="\mathcal{F} = \{2, 3, 5, 7, 11, 13\}" inline /></p>
        <p className="mt-2">Find smooth squares:</p>
        <ul className="list-disc list-inside mt-2">
          <li><MathBlock math="43^2 = 1849 \equiv 20 = 2^2 \cdot 5 \pmod{1829}" inline /></li>
          <li><MathBlock math="44^2 = 1936 \equiv 107" inline /> (not smooth)</li>
          <li><MathBlock math="45^2 = 2025 \equiv 196 = 2^2 \cdot 7^2 \pmod{1829}" inline /></li>
          <li><MathBlock math="47^2 = 2209 \equiv 380 = 2^2 \cdot 5 \cdot 19" inline /> (not smooth)</li>
          <li><MathBlock math="52^2 = 2704 \equiv 875 = 5^3 \cdot 7 \pmod{1829}" inline /></li>
        </ul>
        <p className="mt-2">Combine: <MathBlock math="(43 \cdot 45 \cdot 52)^2 \equiv (2^2 \cdot 5)(2^2 \cdot 7^2)(5^3 \cdot 7) = 2^4 \cdot 5^4 \cdot 7^3" inline /></p>
        <p>Need one more relation to make all exponents even...</p>
      </Example>

      <h3>Probability of Smoothness</h3>

      <Theorem title="Smoothness Probability"
        proof={
          <>
            <p>We derive the smoothness probability using the Dickman-de Bruijn function.</p>

            <p className="mt-3"><strong>Definition:</strong> The Dickman function <MathBlock math="\rho(u)" inline /> satisfies:</p>
            <MathBlock math="\rho(u) = \begin{cases} 1 & 0 \leq u \leq 1 \\ \rho(u-1) - \int_{u-1}^{u} \frac{\rho(t)}{t} dt & u > 1 \end{cases}" />

            <p className="mt-3"><strong>Main theorem (de Bruijn):</strong></p>
            <MathBlock math="\psi(x, B) = x \cdot \rho(u) \cdot (1 + o(1)) \quad \text{where } u = \frac{\log x}{\log B}" />

            <p className="mt-3"><strong>Asymptotic behavior:</strong></p>
            <p className="mt-2">For large <em>u</em>, the Dickman function satisfies:</p>
            <MathBlock math="\rho(u) = u^{-u(1 + o(1))} = e^{-u \ln u (1 + o(1))}" />

            <p className="mt-3"><strong>Heuristic derivation:</strong></p>
            <p className="mt-2">Consider the largest prime factor <em>P</em> of a random integer <MathBlock math="m \leq x" inline />. For <em>m</em> to be <em>B</em>-smooth, we need <MathBlock math="P \leq B" inline />.</p>

            <p className="mt-2">If <MathBlock math="P = p" inline /> for some prime <MathBlock math="p \leq B" inline />, then <MathBlock math="m = p \cdot m'" inline /> where <MathBlock math="m' \leq x/p" inline /> is also <em>B</em>-smooth (and has largest prime factor <MathBlock math="\leq p" inline />).</p>

            <p className="mt-2">This leads to the differential equation:</p>
            <MathBlock math="u \cdot \rho'(u) = -\rho(u-1)" />
            <p className="mt-2">whose solution gives the Dickman function.</p>

            <p className="mt-3"><strong>Numerical examples:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><MathBlock math="\rho(2) \approx 0.31" inline /> (31% of numbers up to <MathBlock math="B^2" inline /> are <em>B</em>-smooth)</li>
              <li><MathBlock math="\rho(3) \approx 0.049" inline /></li>
              <li><MathBlock math="\rho(5) \approx 0.0035" inline /></li>
              <li><MathBlock math="\rho(10) \approx 2.8 \times 10^{-11}" inline /></li>
            </ul>

            <p className="mt-3"><strong>Consequence for factoring:</strong></p>
            <p className="mt-2">To factor <em>n</em>, we test random <MathBlock math="x^2 \bmod n \approx n" inline />. With <MathBlock math="B = n^{1/u}" inline />:</p>
            <MathBlock math="P(\text{smooth}) \approx u^{-u}" />
            <p className="mt-2">Expected trials to find one smooth: <MathBlock math="u^u" inline />. Optimal <em>u</em> balances this against factor base size <MathBlock math="\pi(B)" inline />.</p>
          </>
        }
      >
        Let <MathBlock math="\psi(x, B)" inline /> denote the number of <em>B</em>-smooth integers up to <em>x</em>.
        For <MathBlock math="u = \frac{\log x}{\log B}" inline />:
        <MathBlock math="\psi(x, B) \approx x \cdot u^{-u}" />
        As <em>u</em> increases, smooth numbers become exponentially rare.
      </Theorem>

      <Callout type="info">
        <strong>Trade-off:</strong> Larger factor base → more numbers are smooth (easier to find)
        but more relations needed (harder linear algebra). Optimal <em>B</em> balances these.
      </Callout>

      <h3>Dixon's Algorithm</h3>

      <Definition title="Dixon's Random Squares">
        <ol className="list-decimal list-inside space-y-1">
          <li>Choose <MathBlock math="B = L(n)^{1/\sqrt{2}}" inline /> where <MathBlock math="L(n) = e^{\sqrt{\ln n \ln \ln n}}" inline /></li>
          <li>Factor base: all primes ≤ <em>B</em></li>
          <li>Randomly sample <MathBlock math="x \in [1, n]" inline />, check if <MathBlock math="x^2 \bmod n" inline /> is smooth</li>
          <li>Collect <MathBlock math="\pi(B) + 1" inline /> relations</li>
          <li>Solve linear system mod 2 to find dependency</li>
        </ol>
      </Definition>

      <Theorem title="Dixon's Complexity"
        proof={
          <>
            <p>We analyze Dixon's algorithm by optimizing the factor base size.</p>

            <p className="mt-3"><strong>L-notation:</strong></p>
            <p className="mt-2">Define the subexponential function:</p>
            <MathBlock math="L(n) = L_n[1/2, 1] = e^{\sqrt{\ln n \cdot \ln \ln n}}" />

            <p className="mt-3"><strong>Two costs to balance:</strong></p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li><strong>Relation collection:</strong> Expected trials to find one smooth relation</li>
              <li><strong>Linear algebra:</strong> Cost to solve the system over <MathBlock math="\mathbb{F}_2" inline /></li>
            </ol>

            <p className="mt-3"><strong>Relation cost:</strong></p>
            <p className="mt-2">With factor base bound <MathBlock math="B = L(n)^\alpha" inline /> for parameter <MathBlock math="\alpha" inline /> to be determined:</p>
            <MathBlock math="u = \frac{\ln n}{\ln B} = \frac{\ln n}{\alpha \sqrt{\ln n \ln \ln n}} = \frac{\sqrt{\ln n}}{\alpha \sqrt{\ln \ln n}}" />
            <p className="mt-2">Probability of smoothness: <MathBlock math="\rho(u) \approx u^{-u}" inline /></p>
            <MathBlock math="\ln(1/\rho(u)) \approx u \ln u = \frac{\sqrt{\ln n}}{\alpha \sqrt{\ln \ln n}} \cdot \frac{1}{2}\ln\left(\frac{\ln n}{\ln \ln n}\right) \approx \frac{1}{2\alpha}\sqrt{\ln n \ln \ln n}" />
            <p className="mt-2">Expected trials: <MathBlock math="1/\rho(u) = L(n)^{1/(2\alpha)}" inline /></p>

            <p className="mt-3"><strong>Linear algebra cost:</strong></p>
            <p className="mt-2">Factor base size: <MathBlock math="|\mathcal{F}| = \pi(B) \approx B/\ln B \approx L(n)^\alpha" inline /></p>
            <p className="mt-2">Need <MathBlock math="|\mathcal{F}| + 1" inline /> relations, matrix is <MathBlock math="|\mathcal{F}| \times |\mathcal{F}|" inline /></p>
            <p className="mt-2">Gaussian elimination: <MathBlock math="O(|\mathcal{F}|^3) = L(n)^{3\alpha}" inline /> (can be improved with sparse methods)</p>

            <p className="mt-3"><strong>Total cost:</strong></p>
            <MathBlock math="T(n) = L(n)^{1/(2\alpha)} \cdot L(n)^\alpha + L(n)^{3\alpha} \approx L(n)^{\max(1/(2\alpha) + \alpha, 3\alpha)}" />

            <p className="mt-3"><strong>Optimization:</strong></p>
            <p className="mt-2">For basic Gaussian elimination, set <MathBlock math="3\alpha = 1/(2\alpha) + \alpha" inline />:</p>
            <MathBlock math="2\alpha = \frac{1}{2\alpha} \implies \alpha^2 = \frac{1}{4} \implies \alpha = \frac{1}{2}" />
            <p className="mt-2">This gives exponent <MathBlock math="3 \cdot (1/2) = 3/2" inline />... but with sparse matrix methods achieving <MathBlock math="O(|\mathcal{F}|^2)" inline />:</p>
            <MathBlock math="2\alpha = \frac{1}{2\alpha} + \alpha \implies \alpha = \frac{1}{2\alpha} \implies \alpha = \frac{1}{\sqrt{2}}" />

            <p className="mt-3"><strong>Final complexity:</strong></p>
            <MathBlock math="T(n) = L(n)^{\sqrt{2} + o(1)} = e^{(\sqrt{2} + o(1))\sqrt{\ln n \ln \ln n}}" />
            <p className="mt-2">This is <em>subexponential</em>: faster than any polynomial in <MathBlock math="\ln n" inline />, but slower than any fixed polynomial in <em>n</em>.</p>
          </>
        }
      >
        Dixon's algorithm factors <em>n</em> in expected time:
        <MathBlock math="L(n)^{\sqrt{2} + o(1)} = e^{(1 + o(1))\sqrt{2 \ln n \ln \ln n}}" />
        This is subexponential - better than <MathBlock math="n^{1/4}" inline /> but worse than polynomial.
      </Theorem>

      <h3>Linear Algebra over F₂</h3>

      <p>
        Finding exponent dependencies requires solving sparse linear systems over <MathBlock math="\mathbb{F}_2" inline />.
        Gaussian elimination works but structured methods (block Lanczos, block Wiedemann) are faster for large sparse systems.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Key Components</h4>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Step</th>
              <th className="text-left py-2">Operation</th>
              <th className="text-left py-2">Complexity Driver</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">Relation Collection</td>
              <td className="py-2">Find smooth squares</td>
              <td className="py-2">Smoothness probability</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Smoothness Test</td>
              <td className="py-2">Trial division</td>
              <td className="py-2">Factor base size</td>
            </tr>
            <tr>
              <td className="py-2">Linear Algebra</td>
              <td className="py-2">Null space mod 2</td>
              <td className="py-2">Matrix dimensions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success">
        <strong>Foundation for Modern Methods:</strong> The factor base approach underlies both
        the Quadratic Sieve and Number Field Sieve. Understanding smooth numbers and linear algebra
        over <MathBlock math="\mathbb{F}_2" inline /> is essential for these advanced algorithms.
      </Callout>
    </LessonLayout>
  );
}
