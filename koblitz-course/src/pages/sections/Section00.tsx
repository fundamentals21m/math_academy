import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2>Time Estimates for Doing Arithmetic</h2>

      <p>
        One topic that plays a central role in cryptography is estimating the number of
        <strong> bit operations</strong> needed to perform various number theoretic tasks by computer.
        Understanding computational complexity helps us determine which cryptographic algorithms
        are secure and which can be broken in reasonable time.
      </p>

      <h3>Numbers in Different Bases</h3>

      <Definition title="Base-b Representation">
        A nonnegative integer <em>n</em> written to the <strong>base b</strong> is a notation of the form{' '}
        <MathBlock math="(d_{k-1}d_{k-2} \cdots d_1 d_0)_b" />
        where the <em>d</em>'s are <strong>digits</strong>, i.e., symbols for integers between 0 and b - 1.
        This notation means:
        <MathBlock math="n = d_{k-1}b^{k-1} + d_{k-2}b^{k-2} + \cdots + d_1 b + d_0" />
        If the first digit <em>d<sub>k-1</sub></em> is not zero, we call <em>n</em> a <strong>k-digit base-b number</strong>.
      </Definition>

      <p>
        Any number between <MathBlock math="b^{k-1}" inline /> and <MathBlock math="b^k" inline /> is a
        k-digit number to the base b. The most common bases are:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Decimal (b = 10)</strong> - The standard system we use daily</li>
        <li><strong>Binary (b = 2)</strong> - Used by computers; digits are 0 and 1 (called <em>bits</em>)</li>
        <li><strong>Hexadecimal (b = 16)</strong> - Compact representation using digits 0-9 and A-F</li>
      </ul>

      <Example title="Base Conversions">
        <p><strong>(a)</strong> <MathBlock math="(11001001)_2 = 201" inline /> in decimal</p>
        <p className="mt-2">
          <strong>(b)</strong> When b = 26, using letters A-Z for digits 0-25: <MathBlock math="(BAD)_{26} = 679" inline />
        </p>
        <p className="mt-2">
          <strong>(c)</strong> Converting <MathBlock math="10^6" inline /> to different bases:
        </p>
        <MathBlock math="10^6 = (11110100001001000000)_2 = (11333311)_7 = (CEXHO)_{26}" />
      </Example>

      <h3>Number of Digits</h3>

      <p>
        An integer <em>n</em> satisfying <MathBlock math="b^{k-1} \leq n < b^k" inline /> has <em>k</em> digits
        to the base <em>b</em>. Using the definition of logarithms:
      </p>

      <Theorem title="Number of Digits Formula"
        proof={
          <>
            <p>Let <em>n</em> be a positive integer with <em>k</em> digits in base <em>b</em>. By definition of base-<em>b</em> representation:</p>
            <MathBlock math="b^{k-1} \leq n < b^k" />
            <p>Taking logarithms base <em>b</em> of all parts of this inequality:</p>
            <MathBlock math="k - 1 \leq \log_b n < k" />
            <p>This means <MathBlock math="\lfloor \log_b n \rfloor = k - 1" inline />, and therefore:</p>
            <MathBlock math="k = \lfloor \log_b n \rfloor + 1" />
            <p>Using the change of base formula <MathBlock math="\log_b n = \frac{\log n}{\log b}" inline />, we obtain the equivalent form:</p>
            <MathBlock math="\text{number of digits} = \left\lfloor \frac{\log n}{\log b} \right\rfloor + 1" />
          </>
        }
      >
        The number of base-b digits in a positive integer <em>n</em> is:
        <MathBlock math="\text{number of digits} = \lfloor \log_b n \rfloor + 1 = \left\lfloor \frac{\log n}{\log b} \right\rfloor + 1" />
        where <MathBlock math="\lfloor \cdot \rfloor" inline /> denotes the floor (greatest integer) function.
      </Theorem>

      <h3>Bit Operations</h3>

      <p>
        Let's analyze binary addition in detail. When adding two k-bit numbers, we repeat these steps k times:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Binary Addition Steps</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Look at the top and bottom bit, and check for a carry</li>
          <li>If both bits are 0 and no carry: put down 0</li>
          <li>If exactly one bit is 1 and no carry (or both 0 with carry): put down 1</li>
          <li>If both bits are 1 and no carry (or one bit is 1 with carry): put down 0, carry 1</li>
          <li>If both bits are 1 and there is a carry: put down 1, carry 1</li>
        </ol>
      </div>

      <Definition title="Bit Operation">
        A <strong>bit operation</strong> is a single step in binary arithmetic. The time a computer takes
        to perform a task is essentially proportional to the number of bit operations required.
      </Definition>

      <Callout type="info">
        Adding two k-bit numbers requires exactly <strong>k bit operations</strong>.
      </Callout>

      <h3>Time Complexity of Multiplication</h3>

      <p>
        Consider multiplying a k-bit integer <em>n</em> by an l-bit integer <em>m</em>. Using the standard
        long multiplication algorithm, we obtain at most l rows, each requiring k bit operations to add.
      </p>

      <Theorem title="Multiplication Time Bound"
        proof={
          <>
            <p>Consider the standard long multiplication algorithm for multiplying a <em>k</em>-bit integer <em>n</em> by an <em>l</em>-bit integer <em>m</em>.</p>
            <p>Write <em>m</em> in binary as <MathBlock math="m = \sum_{i=0}^{\ell-1} m_i \cdot 2^i" inline /> where each <MathBlock math="m_i \in \{0, 1\}" inline />.</p>
            <p>The product can be computed as:</p>
            <MathBlock math="n \cdot m = \sum_{i=0}^{\ell-1} m_i \cdot n \cdot 2^i" />
            <p>This sum has at most <em>l</em> nonzero terms (one for each bit of <em>m</em>). Each term <MathBlock math="n \cdot 2^i" inline /> is simply <em>n</em> shifted left by <em>i</em> positions, which is a <MathBlock math="(k+i)" inline />-bit number.</p>
            <p>Adding two numbers with at most <MathBlock math="(k + \ell)" inline /> bits requires at most <MathBlock math="k + \ell" inline /> bit operations. We perform at most <MathBlock math="\ell - 1" inline /> such additions.</p>
            <p>Each partial product computation involves examining one bit of <em>m</em> and potentially adding a shifted copy of <em>n</em>. The total work is bounded by:</p>
            <MathBlock math="\text{Total bit operations} < \ell \cdot k = k\ell" />
            <p>When <MathBlock math="k = \ell" inline />, this gives the bound <MathBlock math="k^2" inline /> bit operations.</p>
          </>
        }
      >
        <MathBlock math="\text{Time}(\text{multiply } k\text{-bit integer by } \ell\text{-bit integer}) < k\ell" />
        As a special case:
        <MathBlock math="\text{Time}(\text{multiply } k\text{-bit by } k\text{-bit}) < k^2" />
      </Theorem>

      <Example title="Computing n!">
        <p>
          <strong>Problem:</strong> Find an upper bound for the number of bit operations to compute n!
        </p>
        <p className="mt-2">
          <strong>Solution:</strong> If n is a k-bit integer, then every integer less than n has at most k bits,
          and n! has at most nk bits. In each of the n-2 multiplications, we multiply an integer with at most
          k bits by one with at most nk bits, requiring at most nk<sup>2</sup> bit operations.
        </p>
        <MathBlock math="\text{Total bit operations} \leq (n-2) \cdot nk^2 = n(n-2)(\lfloor \log_2 n \rfloor + 1)^2 \approx n^2(\log_2 n)^2" />
      </Example>

      <h3>Big-O Notation</h3>

      <p>
        When analyzing algorithms, we use <strong>Big-O notation</strong> to describe how the running time
        grows as the input size increases:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Polynomial Time</h4>
          <p className="text-dark-300 mb-2">Algorithms with time bounded by a polynomial in input size:</p>
          <p className="font-mono text-emerald-400">O(k), O(k<sup>2</sup>), O(k<sup>3</sup>)</p>
          <p className="text-dark-400 text-sm mt-2">These are considered "efficient" or "tractable".</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Exponential Time</h4>
          <p className="text-dark-300 mb-2">Algorithms where time grows exponentially:</p>
          <p className="font-mono text-amber-400">O(2<sup>k</sup>), O(e<sup>k</sup>)</p>
          <p className="text-dark-400 text-sm mt-2">These become infeasible for large inputs.</p>
        </div>
      </div>

      <Callout type="success">
        <strong>Key Insight for Cryptography:</strong> Cryptographic security relies on the existence of
        one-way functions - operations that are easy (polynomial time) to compute but hard (exponential time)
        to reverse. For example, multiplication is O(k<sup>2</sup>), but factoring is believed to require
        subexponential time.
      </Callout>
    </LessonLayout>
  );
}
