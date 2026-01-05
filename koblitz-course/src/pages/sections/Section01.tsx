import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>Divisibility and the Euclidean Algorithm</h2>

      <p>
        The concept of divisibility is fundamental to number theory and cryptography. In this section,
        we study the properties of divisibility and the ancient but remarkably efficient Euclidean algorithm
        for computing the greatest common divisor.
      </p>

      <h3>Basic Divisibility</h3>

      <Definition title="Divisibility">
        Let <em>a</em> and <em>b</em> be integers with <MathBlock math="b \neq 0" inline />. We say that
        <em>b</em> <strong>divides</strong> <em>a</em>, written <MathBlock math="b \mid a" inline />, if
        there exists an integer <em>q</em> such that <MathBlock math="a = bq" inline />.
      </Definition>

      <Definition title="Greatest Common Divisor">
        The <strong>greatest common divisor</strong> of integers <em>a</em> and <em>b</em>, denoted
        <MathBlock math="\gcd(a, b)" inline /> or simply <MathBlock math="(a, b)" inline />, is the
        largest positive integer that divides both <em>a</em> and <em>b</em>.
      </Definition>

      <Definition title="Relatively Prime">
        Two integers <em>a</em> and <em>b</em> are <strong>relatively prime</strong> (or <strong>coprime</strong>)
        if <MathBlock math="\gcd(a, b) = 1" inline />.
      </Definition>

      <h3>The Euclidean Algorithm</h3>

      <p>
        The Euclidean algorithm is one of the oldest algorithms known, dating back to around 300 BCE.
        It efficiently computes the GCD using repeated division with remainder.
      </p>

      <Theorem title="Division Algorithm"
        proof={
          <>
            <p><strong>Existence:</strong> Consider the set <MathBlock math="S = \{a - bk : k \in \mathbb{Z}, a - bk \geq 0\}" inline />.</p>
            <p>This set is nonempty: if <MathBlock math="a \geq 0" inline />, then <MathBlock math="a - b \cdot 0 = a \in S" inline />; if <MathBlock math="a < 0" inline />, then <MathBlock math="a - b \cdot a = a(1-b) \geq 0" inline /> since <MathBlock math="b \geq 1" inline /> and <MathBlock math="a < 0" inline />.</p>
            <p>By the Well-Ordering Principle, <em>S</em> has a least element. Let <MathBlock math="r = a - bq" inline /> be this least element for some integer <em>q</em>.</p>
            <p>We have <MathBlock math="r \geq 0" inline /> by definition of <em>S</em>. Suppose <MathBlock math="r \geq b" inline />. Then:</p>
            <MathBlock math="a - b(q+1) = a - bq - b = r - b \geq 0" />
            <p>This means <MathBlock math="r - b \in S" inline />, contradicting that <em>r</em> is the least element. Therefore <MathBlock math="0 \leq r < b" inline />.</p>
            <p><strong>Uniqueness:</strong> Suppose <MathBlock math="a = bq_1 + r_1 = bq_2 + r_2" inline /> with <MathBlock math="0 \leq r_1, r_2 < b" inline />.</p>
            <p>Then <MathBlock math="b(q_1 - q_2) = r_2 - r_1" inline />. Since <MathBlock math="|r_2 - r_1| < b" inline /> and <MathBlock math="b \mid (r_2 - r_1)" inline />, we must have <MathBlock math="r_2 - r_1 = 0" inline />, so <MathBlock math="r_1 = r_2" inline /> and consequently <MathBlock math="q_1 = q_2" inline />.</p>
          </>
        }
      >
        For any integers <em>a</em> and <em>b</em> with <MathBlock math="b > 0" inline />, there exist
        unique integers <em>q</em> (quotient) and <em>r</em> (remainder) such that:
        <MathBlock math="a = bq + r, \quad 0 \leq r < b" />
      </Theorem>

      <Theorem title="Euclidean Algorithm"
        proof={
          <>
            <p><strong>Correctness:</strong> The algorithm relies on the key identity:</p>
            <MathBlock math="\gcd(a, b) = \gcd(b, a \bmod b)" />
            <p>To prove this, let <MathBlock math="d = \gcd(a, b)" inline /> and write <MathBlock math="a = bq + r" inline /> where <MathBlock math="r = a \bmod b" inline />.</p>
            <p>Since <MathBlock math="d \mid a" inline /> and <MathBlock math="d \mid b" inline />, we have <MathBlock math="d \mid (a - bq) = r" inline />. Thus <em>d</em> is a common divisor of <em>b</em> and <em>r</em>.</p>
            <p>Conversely, if <MathBlock math="c \mid b" inline /> and <MathBlock math="c \mid r" inline />, then <MathBlock math="c \mid (bq + r) = a" inline />. So every common divisor of <em>b</em> and <em>r</em> also divides <em>a</em>.</p>
            <p>Therefore, <MathBlock math="\{" inline />common divisors of <em>a</em>, <em>b</em><MathBlock math="\}" inline /> = <MathBlock math="\{" inline />common divisors of <em>b</em>, <em>r</em><MathBlock math="\}" inline />, and so <MathBlock math="\gcd(a,b) = \gcd(b, r)" inline />.</p>
            <p><strong>Termination:</strong> The sequence of remainders <MathBlock math="r_1, r_2, r_3, \ldots" inline /> is strictly decreasing and nonnegative, so it must eventually reach 0. When <MathBlock math="r_k = 0" inline />, we have <MathBlock math="\gcd(r_{k-2}, r_{k-1}) = r_{k-1}" inline />, and by the chain of equalities, this equals <MathBlock math="\gcd(a, b)" inline />.</p>
          </>
        }
      >
        To compute <MathBlock math="\gcd(a, b)" inline /> where <MathBlock math="a > b > 0" inline />:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Divide <em>a</em> by <em>b</em> to get remainder <em>r</em></li>
          <li>If <em>r = 0</em>, then <MathBlock math="\gcd(a, b) = b" inline /></li>
          <li>Otherwise, replace <em>a</em> by <em>b</em>, <em>b</em> by <em>r</em>, and repeat</li>
        </ol>
      </Theorem>

      <Example title="Computing GCD(252, 198)">
        <div className="font-mono text-sm space-y-1">
          <p>252 = 198 × 1 + 54</p>
          <p>198 = 54 × 3 + 36</p>
          <p>54 = 36 × 1 + 18</p>
          <p>36 = 18 × 2 + 0</p>
        </div>
        <p className="mt-2">
          Therefore, <MathBlock math="\gcd(252, 198) = 18" inline />.
        </p>
      </Example>

      <h3>Time Complexity of the Euclidean Algorithm</h3>

      <Theorem title="Euclidean Algorithm Time Bound"
        proof={
          <>
            <p><strong>Bounding the number of steps:</strong> Let the sequence of remainders be <MathBlock math="r_0 = a, r_1 = b, r_2, \ldots, r_n = 0" inline />.</p>
            <p>We claim that <MathBlock math="r_{i+2} < \frac{1}{2} r_i" inline /> for all valid <em>i</em>. There are two cases:</p>
            <p><strong>Case 1:</strong> If <MathBlock math="r_{i+1} \leq \frac{1}{2} r_i" inline />, then <MathBlock math="r_{i+2} < r_{i+1} \leq \frac{1}{2} r_i" inline />.</p>
            <p><strong>Case 2:</strong> If <MathBlock math="r_{i+1} > \frac{1}{2} r_i" inline />, then <MathBlock math="r_i = 1 \cdot r_{i+1} + r_{i+2}" inline /> (the quotient is 1), so <MathBlock math="r_{i+2} = r_i - r_{i+1} < r_i - \frac{1}{2} r_i = \frac{1}{2} r_i" inline />.</p>
            <p>Since the remainder is halved every two steps, after <MathBlock math="2k" inline /> steps where <MathBlock math="k = \lfloor \log_2 b \rfloor + 1" inline />, the remainder becomes 0.</p>
            <p><strong>Bit operations per step:</strong> Each step involves dividing numbers with at most <em>k</em> bits. Division of a <em>k</em>-bit number by a <em>k</em>-bit number requires <MathBlock math="O(k^2)" inline /> bit operations.</p>
            <p><strong>Total:</strong> <MathBlock math="O(2k) \cdot O(k^2) = O(k^3) = O((\log b)^3)" inline /> bit operations. With more careful analysis using that remainders shrink, this improves to <MathBlock math="O((\log b)^2)" inline />.</p>
          </>
        }
      >
        The Euclidean algorithm to compute <MathBlock math="\gcd(a, b)" inline /> requires at most
        <MathBlock math="O((\log b)^2)" inline /> bit operations, where the logarithm is base 2.
        <p className="mt-2">
          More precisely, if <em>a</em> and <em>b</em> are both k-bit integers, the algorithm terminates
          in at most <MathBlock math="2k" inline /> steps, each requiring <MathBlock math="O(k^2)" inline />
          bit operations for the division.
        </p>
      </Theorem>

      <Callout type="info">
        The Euclidean algorithm is remarkably efficient - it can compute the GCD of two 1000-digit numbers
        in a fraction of a second on modern computers.
      </Callout>

      <h3>Extended Euclidean Algorithm</h3>

      <Theorem title="Bezout's Identity"
        proof={
          <>
            <p>We prove this by strong induction on <MathBlock math="\min(|a|, |b|)" inline />.</p>
            <p><strong>Base case:</strong> If <MathBlock math="b = 0" inline />, then <MathBlock math="\gcd(a, 0) = |a| = a \cdot 1 + 0 \cdot 0" inline /> (assuming <MathBlock math="a > 0" inline />; otherwise use <MathBlock math="a \cdot (-1)" inline />).</p>
            <p><strong>Inductive step:</strong> Assume the result holds for all pairs with smaller minimum. Let <MathBlock math="a = bq + r" inline /> where <MathBlock math="0 \leq r < b" inline />.</p>
            <p>By the inductive hypothesis, there exist integers <MathBlock math="x', y'" inline /> such that:</p>
            <MathBlock math="bx' + ry' = \gcd(b, r) = \gcd(a, b)" />
            <p>Substituting <MathBlock math="r = a - bq" inline />:</p>
            <MathBlock math="bx' + (a - bq)y' = \gcd(a, b)" />
            <MathBlock math="ay' + b(x' - qy') = \gcd(a, b)" />
            <p>Setting <MathBlock math="x = y'" inline /> and <MathBlock math="y = x' - qy'" inline />, we obtain <MathBlock math="ax + by = \gcd(a, b)" inline />.</p>
            <p>The extended Euclidean algorithm computes these coefficients by tracking the linear combinations at each step.</p>
          </>
        }
      >
        For any integers <em>a</em> and <em>b</em>, not both zero, there exist integers <em>x</em> and <em>y</em>
        such that:
        <MathBlock math="ax + by = \gcd(a, b)" />
        The integers <em>x</em> and <em>y</em> can be found by running the Euclidean algorithm backwards.
      </Theorem>

      <Example title="Extended Euclidean Algorithm">
        <p>Find integers <em>x</em> and <em>y</em> such that <MathBlock math="252x + 198y = 18" inline />.</p>
        <p className="mt-2">Working backwards from the Euclidean algorithm:</p>
        <div className="font-mono text-sm space-y-1 mt-2">
          <p>18 = 54 - 36 × 1</p>
          <p>18 = 54 - (198 - 54 × 3) = 54 × 4 - 198</p>
          <p>18 = (252 - 198) × 4 - 198 = 252 × 4 - 198 × 5</p>
        </div>
        <p className="mt-2">
          Therefore, <em>x = 4</em> and <em>y = -5</em>.
        </p>
      </Example>

      <Callout type="success">
        <strong>Cryptographic Application:</strong> The extended Euclidean algorithm is essential for
        computing modular inverses, which are used in RSA encryption, digital signatures, and many
        other cryptographic protocols.
      </Callout>

      <h3>Properties of GCD</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Key Properties</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><MathBlock math="\gcd(a, b) = \gcd(b, a)" inline /> (commutativity)</li>
          <li><MathBlock math="\gcd(a, b) = \gcd(a - b, b)" inline /> if <MathBlock math="a > b" inline /></li>
          <li><MathBlock math="\gcd(a, b) = \gcd(a \mod b, b)" inline /></li>
          <li><MathBlock math="\gcd(a, 0) = |a|" inline /></li>
          <li><MathBlock math="\gcd(a, 1) = 1" inline /></li>
          <li>If <MathBlock math="\gcd(a, b) = 1" inline /> and <MathBlock math="a \mid bc" inline />, then <MathBlock math="a \mid c" inline /></li>
        </ul>
      </div>
    </LessonLayout>
  );
}
