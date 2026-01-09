import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Introduction */}
      <p>
        Prime numbers are the multiplicative building blocks of the integers. Every positive integer
        greater than 1 can be expressed as a product of primes in an essentially unique way. This
        remarkable fact, known as the <strong>Fundamental Theorem of Arithmetic</strong>, is one of
        the cornerstones of number theory.
      </p>

      <h2>Prime Numbers</h2>

      <Definition title="Prime Number" className="my-6">
        <p>
          A positive integer <InlineMath>p</InlineMath> is <strong>prime</strong> if{' '}
          <InlineMath>p</InlineMath> has exactly two positive divisors, namely 1 and{' '}
          <InlineMath>p</InlineMath>.
        </p>
      </Definition>

      <p>
        Key observations about this definition:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>1 is not prime</strong> since it has only one positive divisor (itself).
        </li>
        <li>
          <strong>2 is the smallest prime</strong> and the only even prime. Any other even number{' '}
          <InlineMath>n</InlineMath> has at least three distinct divisors: 1, 2, and{' '}
          <InlineMath>n</InlineMath>.
        </li>
        <li>
          Positive integers greater than 1 that are not prime are called <strong>composite</strong>.
        </li>
      </ul>

      <p>
        The first several prime numbers are:
      </p>
      <div className="bg-dark-800/50 rounded-xl p-4 my-4 border border-dark-700 text-center">
        <p className="font-mono text-lg text-primary-400">
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, ...
        </p>
      </div>

      <h2>The Sieve of Eratosthenes</h2>

      <p>
        The <strong>Sieve of Eratosthenes</strong> is an ancient algorithm for finding all primes up
        to a given number <InlineMath>n</InlineMath>:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-dark-700">
        <ol className="list-decimal list-inside space-y-2">
          <li>Write down all integers from 2 to <InlineMath>n</InlineMath></li>
          <li>Circle 2 (the first prime), then cross out all multiples of 2</li>
          <li>The next uncrossed number is 3 (prime); circle it and cross out all multiples of 3</li>
          <li>Continue: circle the next uncrossed number, cross out its multiples</li>
          <li>Stop when you reach <InlineMath>\sqrt{'{n}'}</InlineMath>; all remaining uncrossed numbers are prime</li>
        </ol>
      </div>

      <Example title="Sieve of Eratosthenes for n = 30" className="my-6">
        <p>Starting with 2, 3, 4, 5, ..., 30:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Circle 2, cross out 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30</li>
          <li>Circle 3, cross out 9, 15, 21, 27 (6, 12, 18, 24, 30 already crossed)</li>
          <li>Circle 5, cross out 25 (other multiples already crossed)</li>
          <li>Since <InlineMath>\sqrt{'{30}'} \approx 5.5</InlineMath>, we stop here</li>
        </ul>
        <p className="mt-2">
          The primes up to 30 are: <strong>2, 3, 5, 7, 11, 13, 17, 19, 23, 29</strong>
        </p>
      </Example>

      <h2>The Prime Divisibility Property</h2>

      <p>
        Primes have a special property regarding divisibility that characterizes them completely.
      </p>

      <Theorem
        title="Prime Divisibility Property"
        className="my-6"
        proof={
          <>
            <p>
              The only positive divisors of <InlineMath>p</InlineMath> are 1 and{' '}
              <InlineMath>p</InlineMath>. Therefore, <InlineMath>\gcd(p, a)</InlineMath> is either{' '}
              <InlineMath>p</InlineMath> (if <InlineMath>p \mid a</InlineMath>) or 1 (if{' '}
              <InlineMath>p \nmid a</InlineMath>).
            </p>
            <p className="mt-2">
              If <InlineMath>p</InlineMath> does not divide <InlineMath>a</InlineMath>, then{' '}
              <InlineMath>\gcd(p, a) = 1</InlineMath>, meaning <InlineMath>p</InlineMath> and{' '}
              <InlineMath>a</InlineMath> are relatively prime.
            </p>
            <p className="mt-2">
              By the properties of relatively prime integers (from Section 1), if{' '}
              <InlineMath>p \mid ab</InlineMath> and <InlineMath>\gcd(p, a) = 1</InlineMath>, then{' '}
              <InlineMath>p \mid b</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>p</InlineMath> be a prime and suppose <InlineMath>a</InlineMath> and{' '}
          <InlineMath>b</InlineMath> are integers such that <InlineMath>p \mid ab</InlineMath>. Then{' '}
          <InlineMath>p \mid a</InlineMath> or <InlineMath>p \mid b</InlineMath> (or both).
        </p>
      </Theorem>

      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 my-6">
        <p className="text-amber-200">
          <strong>Important:</strong> This property fails for non-primes. For example,{' '}
          <InlineMath>4 \mid 12 = 6 \cdot 2</InlineMath>, but <InlineMath>4 \nmid 6</InlineMath> and{' '}
          <InlineMath>4 \nmid 2</InlineMath>.
        </p>
      </div>

      <Theorem title="Extension to Multiple Factors" className="my-6">
        <p>
          Let <InlineMath>p</InlineMath> be prime. If <InlineMath>p</InlineMath> divides the product{' '}
          <InlineMath>a_1 a_2 \cdots a_r</InlineMath>, then <InlineMath>p</InlineMath> divides at
          least one of <InlineMath>a_1, a_2, \ldots, a_r</InlineMath>.
        </p>
      </Theorem>

      <h2>The Fundamental Theorem of Arithmetic</h2>

      <Theorem
        title="Unique Factorisation Theorem"
        className="my-6"
        proof={
          <>
            <p><strong>Existence (by strong induction):</strong></p>
            <p>
              Base case: 2 is prime, so it is a product of primes.
            </p>
            <p>
              Induction step: If <InlineMath>n {'>'} 2</InlineMath> is prime, we're done. Otherwise,{' '}
              <InlineMath>n = ab</InlineMath> where <InlineMath>1 {'<'} a {'<'} n</InlineMath> and{' '}
              <InlineMath>1 {'<'} b {'<'} n</InlineMath>. By induction, both <InlineMath>a</InlineMath>{' '}
              and <InlineMath>b</InlineMath> factor into primes, so <InlineMath>n</InlineMath> does too.
            </p>
            <p className="mt-3"><strong>Uniqueness (by induction on number of prime factors):</strong></p>
            <p>
              Suppose <InlineMath>n = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s</InlineMath>.
            </p>
            <p>
              Since <InlineMath>p_1 \mid n = q_1 q_2 \cdots q_s</InlineMath>, by the prime divisibility
              property, <InlineMath>p_1</InlineMath> divides some <InlineMath>q_i</InlineMath>. Renumber
              so <InlineMath>p_1 \mid q_1</InlineMath>. Since <InlineMath>q_1</InlineMath> is prime,{' '}
              <InlineMath>p_1 = q_1</InlineMath>.
            </p>
            <p>
              Cancel <InlineMath>p_1 = q_1</InlineMath> from both sides. By induction on the number of
              factors, the remaining factors match up.
            </p>
          </>
        }
      >
        <p>
          Every positive integer <InlineMath>n \geq 2</InlineMath> can be written as:
        </p>
        <MathBlock>{`n = p_1 p_2 \\cdots p_r`}</MathBlock>
        <p>
          where <InlineMath>p_1, p_2, \ldots, p_r</InlineMath> are primes (not necessarily distinct)
          and <InlineMath>r \geq 1</InlineMath>. This factorisation is <strong>unique</strong> up to
          the order of the factors.
        </p>
      </Theorem>

      <Example title="Prime Factorisations" className="my-6">
        <MathBlock>{`\\begin{aligned}
12 &= 2^2 \\cdot 3 \\\\
60 &= 2^2 \\cdot 3 \\cdot 5 \\\\
100 &= 2^2 \\cdot 5^2 \\\\
360 &= 2^3 \\cdot 3^2 \\cdot 5 \\\\
1001 &= 7 \\cdot 11 \\cdot 13 \\\\
2023 &= 7 \\cdot 17^2
\\end{aligned}`}</MathBlock>
      </Example>

      <h2>Infinitely Many Primes</h2>

      <Theorem
        title="Infinitude of Primes"
        className="my-6"
        proof={
          <>
            <p>
              Let <InlineMath>n</InlineMath> be any positive integer, and let{' '}
              <InlineMath>p_1, p_2, \ldots, p_n</InlineMath> be the first <InlineMath>n</InlineMath>{' '}
              prime numbers. Consider:
            </p>
            <MathBlock>{`N = p_1 p_2 \\cdots p_n + 1`}</MathBlock>
            <p>
              We claim <InlineMath>N</InlineMath> is not divisible by any of{' '}
              <InlineMath>p_1, \ldots, p_n</InlineMath>.
            </p>
            <p>
              Indeed, dividing <InlineMath>N</InlineMath> by any <InlineMath>p_i</InlineMath> leaves
              remainder 1 (since <InlineMath>p_i</InlineMath> divides the product{' '}
              <InlineMath>p_1 \cdots p_n</InlineMath>).
            </p>
            <p>
              By the Fundamental Theorem, <InlineMath>N</InlineMath> has a prime factor{' '}
              <InlineMath>q</InlineMath>. Since <InlineMath>q \nmid p_i</InlineMath> for any{' '}
              <InlineMath>i</InlineMath>, we have <InlineMath>q \notin \{'{p_1, ..., p_n}'}\</InlineMath>.
            </p>
            <p>
              Therefore there exists a prime different from <InlineMath>p_1, \ldots, p_n</InlineMath>.
              Since <InlineMath>n</InlineMath> was arbitrary, there are infinitely many primes.
            </p>
          </>
        }
      >
        <p>
          There are infinitely many prime numbers.
        </p>
      </Theorem>

      <Example title="Euclid's Construction" className="my-6">
        <p>Starting with the first few primes, let's see what Euclid's method produces:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>2 + 1 = 3</InlineMath> (prime)</li>
          <li><InlineMath>2 \cdot 3 + 1 = 7</InlineMath> (prime)</li>
          <li><InlineMath>2 \cdot 3 \cdot 5 + 1 = 31</InlineMath> (prime)</li>
          <li><InlineMath>2 \cdot 3 \cdot 5 \cdot 7 + 1 = 211</InlineMath> (prime)</li>
          <li><InlineMath>2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 + 1 = 2311</InlineMath> (prime)</li>
          <li><InlineMath>2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \cdot 509</InlineMath> (not prime, but has prime factors different from 2, 3, 5, 7, 11, 13)</li>
        </ul>
      </Example>

      <h2>GCD and LCM via Prime Factorisation</h2>

      <p>
        The Fundamental Theorem gives a beautiful interpretation of GCD and LCM.
      </p>

      <Theorem title="GCD and LCM from Prime Factorisations" className="my-6">
        <p>
          Write <InlineMath>a = p_1^{'{\\alpha_1}'} \cdots p_k^{'{\\alpha_k}'}</InlineMath> and{' '}
          <InlineMath>b = p_1^{'{\\beta_1}'} \cdots p_k^{'{\\beta_k}'}</InlineMath> where the{' '}
          <InlineMath>p_i</InlineMath> are distinct primes and exponents may be zero. Then:
        </p>
        <MathBlock>{`\\gcd(a, b) = p_1^{\\min(\\alpha_1, \\beta_1)} \\cdots p_k^{\\min(\\alpha_k, \\beta_k)}`}</MathBlock>
        <MathBlock>{`\\text{lcm}(a, b) = p_1^{\\max(\\alpha_1, \\beta_1)} \\cdots p_k^{\\max(\\alpha_k, \\beta_k)}`}</MathBlock>
      </Theorem>

      <Example title="GCD and LCM via Factorisation" className="my-6">
        <p>Find <InlineMath>\gcd(360, 150)</InlineMath> and <InlineMath>\text{'{lcm}'}(360, 150)</InlineMath>:</p>
        <MathBlock>{`360 = 2^3 \\cdot 3^2 \\cdot 5^1 \\qquad 150 = 2^1 \\cdot 3^1 \\cdot 5^2`}</MathBlock>
        <MathBlock>{`\\gcd(360, 150) = 2^1 \\cdot 3^1 \\cdot 5^1 = 30`}</MathBlock>
        <MathBlock>{`\\text{lcm}(360, 150) = 2^3 \\cdot 3^2 \\cdot 5^2 = 1800`}</MathBlock>
        <p className="mt-2">
          Note: <InlineMath>\gcd(a, b) \cdot \text{'{lcm}'}(a, b) = a \cdot b</InlineMath>. Indeed,{' '}
          <InlineMath>30 \cdot 1800 = 54000 = 360 \cdot 150</InlineMath>.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>prime</strong> is a positive integer with exactly two divisors (1 and itself).
              The number 1 is not prime.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <strong>Prime Divisibility:</strong> If <InlineMath>p</InlineMath> is prime and{' '}
              <InlineMath>p \mid ab</InlineMath>, then <InlineMath>p \mid a</InlineMath> or{' '}
              <InlineMath>p \mid b</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The <strong>Fundamental Theorem of Arithmetic:</strong> Every integer{' '}
              <InlineMath>n \geq 2</InlineMath> factors uniquely into primes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              There are <strong>infinitely many primes</strong> (Euclid's proof).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              The <strong>Sieve of Eratosthenes</strong> finds all primes up to{' '}
              <InlineMath>n</InlineMath> efficiently.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              GCD uses minimum exponents; LCM uses maximum exponents in prime factorisations.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
