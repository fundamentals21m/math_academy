import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Some Applications to Factoring</h2>

      <p>
        The problem of factoring large integers is central to cryptography. In this section,
        we explore how properties of congruences can be used for factorization, setting the
        stage for more sophisticated methods.
      </p>

      <h3>The Factoring Problem</h3>

      <Definition title="Factoring Problem">
        Given a composite integer <em>n</em>, find its prime factorization:
        <MathBlock math="n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}" />
        For cryptographic purposes, we are particularly interested in the case where{' '}
        <MathBlock math="n = pq" inline /> is a product of two large primes.
      </Definition>

      <Callout type="warning">
        <strong>Computational Hardness:</strong> No polynomial-time algorithm is known for factoring.
        The best known algorithms (like the General Number Field Sieve) run in subexponential time:
        <MathBlock math="O\left(\exp\left(c(\log n)^{1/3}(\log \log n)^{2/3}\right)\right)" />
      </Callout>

      <h3>Trial Division</h3>

      <Theorem title="Trial Division Bound"
        proof={
          <>
            <p>Suppose <em>n</em> is composite. Then <MathBlock math="n = ab" inline /> for some integers <MathBlock math="1 < a, b < n" inline />.</p>
            <p>We cannot have both <MathBlock math="a > \sqrt{n}" inline /> and <MathBlock math="b > \sqrt{n}" inline />, for then:</p>
            <MathBlock math="n = ab > \sqrt{n} \cdot \sqrt{n} = n" />
            <p>which is a contradiction. Therefore, at least one of <em>a</em> or <em>b</em> satisfies <MathBlock math="a \leq \sqrt{n}" inline /> or <MathBlock math="b \leq \sqrt{n}" inline />.</p>
            <p>Without loss of generality, assume <MathBlock math="a \leq \sqrt{n}" inline />. Since <MathBlock math="a > 1" inline />, <em>a</em> has a prime divisor <em>p</em>, and we have:</p>
            <MathBlock math="p \leq a \leq \sqrt{n}" />
            <p>Moreover, <MathBlock math="p \mid a" inline /> and <MathBlock math="a \mid n" inline /> imply <MathBlock math="p \mid n" inline />.</p>
            <p>Contrapositive: if no prime <MathBlock math="p \leq \sqrt{n}" inline /> divides <em>n</em>, then <em>n</em> has no nontrivial factorization, so <em>n</em> is prime.</p>
          </>
        }
      >
        To factor <em>n</em> by trial division, we only need to test primes up to{' '}
        <MathBlock math="\sqrt{n}" inline />. If no prime <MathBlock math="p \leq \sqrt{n}" inline />{' '}
        divides <em>n</em>, then <em>n</em> is prime.
      </Theorem>

      <Example title="Trial Division">
        <p>Factor <MathBlock math="n = 1001" inline /> by trial division.</p>
        <p className="mt-2"><strong>Solution:</strong> We test primes up to <MathBlock math="\sqrt{1001} \approx 31.6" inline />:</p>
        <ul className="list-disc list-inside mt-2">
          <li><MathBlock math="1001 / 7 = 143" inline /></li>
          <li><MathBlock math="143 / 11 = 13" inline /></li>
        </ul>
        <p>Therefore, <MathBlock math="1001 = 7 \times 11 \times 13" inline />.</p>
      </Example>

      <h3>Fermat's Factoring Method</h3>

      <p>
        Fermat observed that if <MathBlock math="n = ab" inline /> with <em>a</em> and <em>b</em> close
        to <MathBlock math="\sqrt{n}" inline />, we can write:
      </p>
      <MathBlock math="n = \left(\frac{a+b}{2}\right)^2 - \left(\frac{a-b}{2}\right)^2 = x^2 - y^2" />

      <Theorem title="Fermat's Method"
        proof={
          <>
            <p><strong>Correctness:</strong> Suppose <MathBlock math="n = ab" inline /> with <MathBlock math="a \leq b" inline />. Set:</p>
            <MathBlock math="x = \frac{a + b}{2}, \quad y = \frac{b - a}{2}" />
            <p>Then <em>x</em> and <em>y</em> are positive (since <MathBlock math="a, b \geq 1" inline />) and:</p>
            <MathBlock math="x^2 - y^2 = \frac{(a+b)^2 - (b-a)^2}{4} = \frac{4ab}{4} = ab = n" />
            <p>So <MathBlock math="n = (x-y)(x+y) = ab" inline /> where <MathBlock math="x - y = a" inline /> and <MathBlock math="x + y = b" inline />.</p>
            <p><strong>Termination:</strong> Since <MathBlock math="a \leq \sqrt{n} \leq b" inline />, we have:</p>
            <MathBlock math="x = \frac{a + b}{2} \geq \frac{\sqrt{n} + \sqrt{n}}{2} = \sqrt{n}" />
            <p>Starting from <MathBlock math="\lceil \sqrt{n} \rceil" inline /> and incrementing, we will eventually reach the value <MathBlock math="x = (a+b)/2" inline /> at which point <MathBlock math="x^2 - n = y^2" inline /> is a perfect square.</p>
            <p><strong>Efficiency:</strong> The method is fast when <em>a</em> and <em>b</em> are close to <MathBlock math="\sqrt{n}" inline />, as then <MathBlock math="x \approx \sqrt{n}" inline /> and few iterations are needed.</p>
          </>
        }
      >
        To factor <em>n</em>:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Start with <MathBlock math="x = \lceil \sqrt{n} \rceil" inline /></li>
          <li>Compute <MathBlock math="y^2 = x^2 - n" inline /></li>
          <li>If <MathBlock math="y^2" inline /> is a perfect square, then <MathBlock math="n = (x-y)(x+y)" inline /></li>
          <li>Otherwise, increment <em>x</em> and repeat</li>
        </ol>
      </Theorem>

      <Example title="Fermat's Method">
        <p>Factor <MathBlock math="n = 5959" inline /> using Fermat's method.</p>
        <p className="mt-2"><strong>Solution:</strong> <MathBlock math="\sqrt{5959} \approx 77.2" inline />, so start with <MathBlock math="x = 78" inline />:</p>
        <div className="font-mono text-sm space-y-1 mt-2">
          <p>x = 78: 78² - 5959 = 6084 - 5959 = 125 (not a square)</p>
          <p>x = 79: 79² - 5959 = 6241 - 5959 = 282 (not a square)</p>
          <p>x = 80: 80² - 5959 = 6400 - 5959 = 441 = 21² ✓</p>
        </div>
        <p className="mt-2">So <MathBlock math="n = (80-21)(80+21) = 59 \times 101" inline />.</p>
      </Example>

      <h3>The Difference of Squares Method</h3>

      <Theorem title="Factoring via Congruence"
        proof={
          <>
            <p>From <MathBlock math="x^2 \equiv y^2 \pmod{n}" inline />, we have:</p>
            <MathBlock math="n \mid (x^2 - y^2) = (x-y)(x+y)" />
            <p>Let <MathBlock math="d_1 = \gcd(x - y, n)" inline /> and <MathBlock math="d_2 = \gcd(x + y, n)" inline />.</p>
            <p>Since <MathBlock math="n \mid (x-y)(x+y)" inline />, the prime factors of <em>n</em> must divide the product <MathBlock math="(x-y)(x+y)" inline />.</p>
            <p><strong>Why the factors are nontrivial:</strong></p>
            <p>If <MathBlock math="d_1 = n" inline />, then <MathBlock math="n \mid (x - y)" inline />, meaning <MathBlock math="x \equiv y \pmod{n}" inline />, which contradicts our assumption.</p>
            <p>If <MathBlock math="d_1 = 1" inline />, then <MathBlock math="\gcd(x - y, n) = 1" inline />, so all prime factors of <em>n</em> must divide <MathBlock math="(x + y)" inline />. This means <MathBlock math="n \mid (x + y)" inline />, giving <MathBlock math="x \equiv -y \pmod{n}" inline />, again contradicting our assumption.</p>
            <p>Therefore <MathBlock math="1 < d_1 < n" inline />, making <MathBlock math="d_1" inline /> a nontrivial factor of <em>n</em>.</p>
            <p>The same argument applies to <MathBlock math="d_2" inline />, and we have <MathBlock math="n = d_1 \cdot (n/d_1)" inline /> where both factors can be computed using the GCD.</p>
          </>
        }
      >
        Suppose we find integers <em>x</em> and <em>y</em> such that:
        <MathBlock math="x^2 \equiv y^2 \pmod{n} \quad \text{but} \quad x \not\equiv \pm y \pmod{n}" />
        Then <MathBlock math="\gcd(x - y, n)" inline /> and <MathBlock math="\gcd(x + y, n)" inline />{' '}
        give nontrivial factors of <em>n</em>.
      </Theorem>

      <p>
        This observation is the basis of many modern factoring algorithms, including the
        Quadratic Sieve and Number Field Sieve.
      </p>

      <Example title="Difference of Squares">
        <p>Factor <MathBlock math="n = 77" inline /> given that <MathBlock math="10^2 \equiv 23^2 \pmod{77}" inline />.</p>
        <p className="mt-2"><strong>Solution:</strong> Since <MathBlock math="10 \not\equiv \pm 23 \pmod{77}" inline />:</p>
        <ul className="list-disc list-inside mt-2">
          <li><MathBlock math="\gcd(23 - 10, 77) = \gcd(13, 77) = 1" inline /> (no luck)</li>
          <li><MathBlock math="\gcd(23 + 10, 77) = \gcd(33, 77) = 11" inline /> ✓</li>
        </ul>
        <p>So <MathBlock math="77 = 11 \times 7" inline />.</p>
      </Example>

      <h3>Pollard's p - 1 Method</h3>

      <Definition title="Smooth Numbers">
        An integer is <strong>B-smooth</strong> if all its prime factors are at most <em>B</em>.
        For example, <MathBlock math="60 = 2^2 \cdot 3 \cdot 5" inline /> is 5-smooth.
      </Definition>

      <Theorem title="Pollard's p - 1 Method"
        proof={
          <>
            <p><strong>Why it works:</strong> Suppose <em>p</em> is a prime factor of <em>n</em> and <MathBlock math="p - 1" inline /> is <em>B</em>-smooth.</p>
            <p>By definition of <em>B</em>-smooth, every prime power <MathBlock math="q^k" inline /> dividing <MathBlock math="p - 1" inline /> satisfies <MathBlock math="q^k \leq B" inline />.</p>
            <p>The number <MathBlock math="M = \text{lcm}(1, 2, \ldots, B)" inline /> is divisible by every integer up to <em>B</em>, so in particular:</p>
            <MathBlock math="(p - 1) \mid M" />
            <p>By Fermat's Little Theorem, if <MathBlock math="\gcd(a, p) = 1" inline />:</p>
            <MathBlock math="a^{p-1} \equiv 1 \pmod{p}" />
            <p>Since <MathBlock math="(p-1) \mid M" inline />, we have <MathBlock math="M = k(p-1)" inline /> for some integer <em>k</em>, so:</p>
            <MathBlock math="a^M = (a^{p-1})^k \equiv 1^k = 1 \pmod{p}" />
            <p>Therefore <MathBlock math="p \mid (a^M - 1)" inline />, which means <MathBlock math="p \mid (b - 1)" inline /> where <MathBlock math="b = a^M \bmod n" inline />.</p>
            <p>Computing <MathBlock math="d = \gcd(b - 1, n)" inline />, we get <MathBlock math="p \mid d" inline />. If we're lucky that <MathBlock math="d \neq n" inline /> (i.e., not all prime factors of <em>n</em> divide <MathBlock math="b - 1" inline />), then <em>d</em> is a nontrivial factor.</p>
          </>
        }
      >
        If <em>n</em> has a prime factor <em>p</em> such that <MathBlock math="p - 1" inline /> is{' '}
        <em>B</em>-smooth, then we can find <em>p</em> efficiently:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Compute <MathBlock math="M = \text{lcm}(1, 2, \ldots, B) = \prod_{q \leq B} q^{\lfloor \log_q B \rfloor}" inline /></li>
          <li>For a random <em>a</em>, compute <MathBlock math="b = a^M \bmod n" inline /></li>
          <li>Compute <MathBlock math="d = \gcd(b - 1, n)" inline /></li>
          <li>If <MathBlock math="1 < d < n" inline />, then <em>d</em> is a factor</li>
        </ol>
      </Theorem>

      <p>
        The method works because if <MathBlock math="(p-1) \mid M" inline />, then by Fermat's Little
        Theorem, <MathBlock math="a^M \equiv 1 \pmod{p}" inline />, so <MathBlock math="p \mid (b - 1)" inline />.
      </p>

      <Example title="Pollard's p - 1 Method">
        <p>Factor <MathBlock math="n = 540143" inline /> using <MathBlock math="B = 13" inline />.</p>
        <p className="mt-2"><strong>Solution:</strong></p>
        <ul className="list-disc list-inside mt-2">
          <li><MathBlock math="M = 2^3 \cdot 3^2 \cdot 5 \cdot 7 \cdot 11 \cdot 13 = 360360" inline /></li>
          <li>Let <MathBlock math="a = 2" inline />, compute <MathBlock math="2^{360360} \bmod 540143 = 53047" inline /></li>
          <li><MathBlock math="\gcd(53046, 540143) = 421" inline /></li>
        </ul>
        <p>We found that <MathBlock math="540143 = 421 \times 1283" inline />.</p>
        <p className="mt-2">This worked because <MathBlock math="420 = 2^2 \cdot 3 \cdot 5 \cdot 7" inline /> is 7-smooth.</p>
      </Example>

      <Callout type="success">
        <strong>Key Insight:</strong> Pollard's p - 1 method is fast when <MathBlock math="p - 1" inline />{' '}
        has only small prime factors. This is why cryptographic primes are often chosen to be{' '}
        <strong>safe primes</strong>: <MathBlock math="p = 2q + 1" inline /> where <em>q</em> is also prime.
      </Callout>

      <h3>Time Complexity Comparison</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Factoring Methods</h4>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Method</th>
              <th className="text-left py-2">Complexity</th>
              <th className="text-left py-2">Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">Trial Division</td>
              <td className="py-2"><MathBlock math="O(\sqrt{n})" inline /></td>
              <td className="py-2">Small factors</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Fermat's Method</td>
              <td className="py-2"><MathBlock math="O(n^{1/4})" inline /></td>
              <td className="py-2">Factors near √n</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Pollard's p - 1</td>
              <td className="py-2">Depends on smoothness</td>
              <td className="py-2">Smooth p - 1</td>
            </tr>
            <tr>
              <td className="py-2">Pollard's Rho</td>
              <td className="py-2"><MathBlock math="O(n^{1/4})" inline /></td>
              <td className="py-2">General purpose</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LessonLayout>
  );
}
