import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      {/* Introduction */}
      <p>
        Suppose we are interested in the behavior of integers modulo 20. Fix an integer{' '}
        <InlineMath>a</InlineMath> and form successive powers of its congruence class:
      </p>
      <MathBlock>{`[a]_{20}, [a]^2_{20}, [a]^3_{20}, \\ldots, [a]^n_{20}, \\ldots`}</MathBlock>
      <p>
        What can happen? For <InlineMath>a = 3</InlineMath>:
      </p>
      <MathBlock>{`[3]^1 = [3], \\, [3]^2 = [9], \\, [3]^3 = [7], \\, [3]^4 = [1], \\, [3]^5 = [3], \\ldots`}</MathBlock>
      <p>
        The powers are different until we reach <InlineMath>[1]</InlineMath>, then the pattern
        repeats. This section explores when and why this happens.
      </p>

      <h2>Multiplicative Order</h2>

      <Definition title="Finite Multiplicative Order" className="my-6">
        <p>
          Let <InlineMath>n</InlineMath> be a positive integer greater than 1. The integer{' '}
          <InlineMath>a</InlineMath> is said to have <strong>finite multiplicative order</strong>{' '}
          modulo <InlineMath>n</InlineMath> if there is a positive integer <InlineMath>k</InlineMath>{' '}
          such that:
        </p>
        <MathBlock>{`[a]^k_n = [1]_n`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>a</InlineMath> has finite multiplicative order modulo <InlineMath>n</InlineMath>,
          the <strong>order</strong> of <InlineMath>a</InlineMath> modulo <InlineMath>n</InlineMath>{' '}
          is the smallest positive integer <InlineMath>k</InlineMath> such that{' '}
          <InlineMath>a^k \equiv 1 \mod n</InlineMath>.
        </p>
      </Definition>

      <Example title="Orders Modulo 20" className="my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <InlineMath>[3]_{'{20}'}</InlineMath> has order 4 (since{' '}
            <InlineMath>3^4 = 81 \equiv 1 \mod 20</InlineMath>)
          </li>
          <li>
            <InlineMath>[11]_{'{20}'}</InlineMath> has order 2 (since{' '}
            <InlineMath>11^2 = 121 \equiv 1 \mod 20</InlineMath>)
          </li>
          <li>
            <InlineMath>[4]_{'{20}'}</InlineMath> never reaches <InlineMath>[1]</InlineMath>:{' '}
            powers cycle through <InlineMath>[4], [16], [4], [16], \ldots</InlineMath>
          </li>
          <li>
            <InlineMath>[10]_{'{20}'}</InlineMath> reaches <InlineMath>[0]</InlineMath> and stays there
          </li>
        </ul>
      </Example>

      <Theorem
        title="Criterion for Finite Multiplicative Order"
        className="my-6"
        proof={
          <>
            <p>
              <strong>(⟹)</strong> Suppose there exists a positive <InlineMath>k</InlineMath> with{' '}
              <InlineMath>[1]_n = [a^k]_n = [a^{'{k-1}'}]_n[a]_n</InlineMath>.
            </p>
            <p>
              Then <InlineMath>[a]_n</InlineMath> has an inverse, namely{' '}
              <InlineMath>[a^{'{k-1}'}]_n</InlineMath>, so by Theorem 1.4.3,{' '}
              <InlineMath>a</InlineMath> is relatively prime to <InlineMath>n</InlineMath>.
            </p>

            <p className="mt-3">
              <strong>(⟸)</strong> Suppose <InlineMath>\gcd(a, n) = 1</InlineMath>. Then{' '}
              <InlineMath>[a]_n</InlineMath> has an inverse. Consider the{' '}
              <InlineMath>n + 1</InlineMath> terms:
            </p>
            <MathBlock>{`[a], [a]^2, \\ldots, [a]^{n+1}`}</MathBlock>
            <p>
              Since <InlineMath>\mathbb{'{Z}'}_n</InlineMath> has only <InlineMath>n</InlineMath>{' '}
              elements, at least two must be equal: <InlineMath>[a]^k = [a]^t</InlineMath> for{' '}
              <InlineMath>1 \leq k {'<'} t \leq n + 1</InlineMath>.
            </p>
            <p className="mt-2">
              Rearranging: <InlineMath>[a]^k([1] - [a]^{'{t-k}'}) = [0]</InlineMath>.
            </p>
            <p>
              Multiplying by <InlineMath>[a]^{'{-k}'}</InlineMath>:{' '}
              <InlineMath>[1] - [a]^{'{t-k}'} = [0]</InlineMath>, so{' '}
              <InlineMath>[a]^{'{t-k}'} = [1]</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The integer <InlineMath>a</InlineMath> has finite multiplicative order modulo{' '}
          <InlineMath>n</InlineMath> if, and only if, <InlineMath>a</InlineMath> is relatively
          prime to <InlineMath>n</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Periodicity of Powers" className="my-6">
        <p>
          Suppose <InlineMath>a</InlineMath> has order <InlineMath>k</InlineMath> modulo{' '}
          <InlineMath>n</InlineMath>. Then:
        </p>
        <MathBlock>{`a^r \\equiv a^s \\mod n \\quad \\text{if and only if} \\quad r \\equiv s \\mod k`}</MathBlock>
      </Theorem>

      <h2>Fermat's Little Theorem</h2>

      <p>
        This result was announced by Pierre de Fermat in a letter of 1640 to Frénicle de Bessy.
        The first published proof was due to Leibniz (1646–1716), based on the Binomial Theorem.
        In 1742 Euler found the same proof, then later discovered a "multiplicative proof" like
        the one we present.
      </p>

      <Theorem
        title="Fermat's Little Theorem"
        className="my-6"
        proof={
          <>
            <p>
              Let <InlineMath>G_p</InlineMath> be the set of invertible elements of{' '}
              <InlineMath>\mathbb{'{Z}'}_p</InlineMath>. By Corollary 1.4.6,{' '}
              <InlineMath>G_p</InlineMath> consists of the <InlineMath>p - 1</InlineMath> elements{' '}
              <InlineMath>[1]_p, [2]_p, \ldots, [p-1]_p</InlineMath>.
            </p>
            <p className="mt-2">
              Denote by <InlineMath>[a]G_p</InlineMath> the set of all multiples of elements of{' '}
              <InlineMath>G_p</InlineMath> by <InlineMath>[a]</InlineMath>:
            </p>
            <MathBlock>{`[a]G_p = \\{[a][1], [a][2], \\ldots, [a][p-1]\\}`}</MathBlock>
            <p>
              Since <InlineMath>[a] \in G_p</InlineMath> and no two products{' '}
              <InlineMath>[a][b]</InlineMath> and <InlineMath>[a][c]</InlineMath> with{' '}
              <InlineMath>[b] \neq [c]</InlineMath> are equal (by the cancellation law), we have{' '}
              <InlineMath>[a]G_p = G_p</InlineMath>.
            </p>
            <p className="mt-2">Let <InlineMath>[N] = [1][2]\cdots[p-1]</InlineMath>. Then:</p>
            <MathBlock>{`[N] = [a][1] \\times [a][2] \\times \\cdots [a][p-1] = [a]^{p-1}[N]`}</MathBlock>
            <p>
              Since <InlineMath>[N] \in G_p</InlineMath> is invertible, we can cancel to obtain{' '}
              <InlineMath>[1] = [a]^{'{p-1}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>p</InlineMath> be a prime and suppose <InlineMath>a</InlineMath> is not
          divisible by <InlineMath>p</InlineMath>. Then:
        </p>
        <MathBlock>{`a^{p-1} \\equiv 1 \\mod p`}</MathBlock>
        <p className="mt-2">
          Therefore, for <em>any</em> integer <InlineMath>a</InlineMath>:
        </p>
        <MathBlock>{`a^p \\equiv a \\mod p`}</MathBlock>
      </Theorem>

      <Theorem title="Order Divides p - 1" className="my-6">
        <p>
          Let <InlineMath>p</InlineMath> be a prime and let <InlineMath>a</InlineMath> be any
          integer not divisible by <InlineMath>p</InlineMath>. Then the order of{' '}
          <InlineMath>a</InlineMath> mod <InlineMath>p</InlineMath> divides{' '}
          <InlineMath>p - 1</InlineMath>.
        </p>
      </Theorem>

      <Example title="Computing Powers Using Fermat" className="my-6">
        <p>
          <strong>Example 1:</strong> Find <InlineMath>2^{'{100}'} \mod 17</InlineMath>.
        </p>
        <p>
          Since <InlineMath>p - 1 = 16</InlineMath> and{' '}
          <InlineMath>100 = 6 \times 16 + 4</InlineMath>:
        </p>
        <MathBlock>{`2^{100} \\equiv 2^4 \\equiv 16 \\mod 17`}</MathBlock>

        <p className="mt-4">
          <strong>Example 2:</strong> Find <InlineMath>15^{'{601}'} \mod 101</InlineMath>.
        </p>
        <p>
          Since <InlineMath>15^{'{100}'} \equiv 1 \mod 101</InlineMath>:
        </p>
        <MathBlock>{`15^{601} \\equiv (15^{100})^6 \\cdot 15 \\equiv 1^6 \\cdot 15 \\equiv 15 \\mod 101`}</MathBlock>
      </Example>

      <h2>Euler's Phi Function</h2>

      <Definition title="Euler's Phi Function" className="my-6">
        <p>
          The number of elements in <InlineMath>G_n</InlineMath> is denoted{' '}
          <InlineMath>\phi(n)</InlineMath> and called <strong>Euler's phi function</strong>{' '}
          (or <strong>totient function</strong>).
        </p>
        <p className="mt-2">
          By Theorem 1.4.3, <InlineMath>\phi(n)</InlineMath> equals the number of integers
          between 1 and <InlineMath>n</InlineMath> inclusive that are relatively prime to{' '}
          <InlineMath>n</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Phi of Prime Powers" className="my-6">
        <p>
          If <InlineMath>p</InlineMath> is prime and <InlineMath>n \geq 1</InlineMath>:
        </p>
        <MathBlock>{`\\phi(p^n) = p^n - p^{n-1} = p^{n-1}(p - 1)`}</MathBlock>
      </Theorem>

      <Theorem title="Phi is Multiplicative" className="my-6">
        <p>
          Let <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> be relatively prime
          integers. Then:
        </p>
        <MathBlock>{`\\phi(ab) = \\phi(a)\\phi(b)`}</MathBlock>
      </Theorem>

      <Example title="Computing Phi Values" className="my-6">
        <MathBlock>{`\\begin{aligned}
\\phi(5) &= 4 \\\\
\\phi(25) &= \\phi(5^2) = 25 - 5 = 20 \\\\
\\phi(4) &= \\phi(2^2) = 4 - 2 = 2 \\\\
\\phi(100) &= \\phi(4)\\phi(25) = 2 \\cdot 20 = 40 \\\\
\\phi(14) &= \\phi(2)\\phi(7) = 1 \\cdot 6 = 6 \\\\
\\phi(41) &= 40 \\quad \\text{(41 is prime)}
\\end{aligned}`}</MathBlock>
      </Example>

      <h2>Euler's Theorem</h2>

      <Theorem
        title="Euler's Theorem"
        className="my-6"
        proof={
          <>
            <p>
              The proof generalizes Fermat's proof. Let <InlineMath>G_n</InlineMath> be the set
              of invertible elements of <InlineMath>\mathbb{'{Z}'}_n</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>[a] \in G_n</InlineMath>, we have{' '}
              <InlineMath>[a]G_n = G_n</InlineMath> (multiplication by{' '}
              <InlineMath>[a]</InlineMath> permutes <InlineMath>G_n</InlineMath>).
            </p>
            <p className="mt-2">
              Let <InlineMath>[N]</InlineMath> be the product of all elements of{' '}
              <InlineMath>G_n</InlineMath>. Then:
            </p>
            <MathBlock>{`[a]^{\\phi(n)}[N] = [N]`}</MathBlock>
            <p>
              Since <InlineMath>[N]</InlineMath> is invertible, cancel to get{' '}
              <InlineMath>[a]^{'{\\phi(n)}'} = [1]</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>n \geq 2</InlineMath> and let <InlineMath>a</InlineMath> be relatively
          prime to <InlineMath>n</InlineMath>. Then:
        </p>
        <MathBlock>{`a^{\\phi(n)} \\equiv 1 \\mod n`}</MathBlock>
      </Theorem>

      <Example title="Using Euler's Theorem" className="my-6">
        <p>
          <strong>Example 1:</strong> Find <InlineMath>3^{'{19}'} \mod 14</InlineMath>.
        </p>
        <p>
          Since <InlineMath>\phi(14) = \phi(2)\phi(7) = 6</InlineMath> and{' '}
          <InlineMath>19 = 3 \cdot 6 + 1</InlineMath>:
        </p>
        <MathBlock>{`3^{19} \\equiv (3^6)^3 \\cdot 3^1 \\equiv 1^3 \\cdot 3 = 3 \\mod 14`}</MathBlock>

        <p className="mt-4">
          <strong>Example 2:</strong> Find the last two digits of <InlineMath>3^{'{125}'}</InlineMath>.
        </p>
        <p>
          Last two digits = value mod 100. Since <InlineMath>\phi(100) = 40</InlineMath> and{' '}
          <InlineMath>125 = 3 \cdot 40 + 5</InlineMath>:
        </p>
        <MathBlock>{`3^{125} \\equiv (3^{40})^3 \\times 3^5 \\equiv 1 \\times 243 \\equiv 43 \\mod 100`}</MathBlock>
      </Example>

      <h2>RSA Public Key Cryptography</h2>

      <p>
        The RSA system (named after Rivest, Shamir, and Adleman, 1978) is a public key code
        based on Euler's Theorem. Its security depends on the difficulty of factoring large integers.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 my-6 border border-dark-700">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">RSA Key Generation</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-200">
          <li>
            Choose two large primes <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath>{' '}
            (each about 100+ digits).
          </li>
          <li>
            Compute <InlineMath>n = pq</InlineMath> (the <strong>base</strong>).
          </li>
          <li>
            Compute <InlineMath>\phi(n) = (p-1)(q-1)</InlineMath>.
          </li>
          <li>
            Choose an <strong>exponent</strong> <InlineMath>a</InlineMath> with{' '}
            <InlineMath>\gcd(a, \phi(n)) = 1</InlineMath>.
          </li>
          <li>
            Compute <InlineMath>x</InlineMath> such that{' '}
            <InlineMath>ax + \phi(n)y = 1</InlineMath> (the decryption key).
          </li>
          <li>
            <strong>Publish</strong> the pair <InlineMath>(n, a)</InlineMath>.{' '}
            <strong>Keep secret:</strong> <InlineMath>p, q, \phi(n), x</InlineMath>.
          </li>
        </ol>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 my-6 border border-dark-700">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Encryption and Decryption</h4>
        <div className="space-y-4 text-dark-200">
          <div>
            <p className="font-semibold text-primary-400">To encrypt a message β:</p>
            <p>
              Compute <InlineMath>m = \beta^a \mod n</InlineMath> and send{' '}
              <InlineMath>m</InlineMath>.
            </p>
          </div>
          <div>
            <p className="font-semibold text-primary-400">To decrypt a received message m:</p>
            <p>
              Compute <InlineMath>\beta = m^x \mod n</InlineMath>.
            </p>
          </div>
          <div>
            <p className="font-semibold text-primary-400">Why it works:</p>
            <MathBlock>{`m^x \\equiv (\\beta^a)^x = \\beta^{ax} = \\beta^{1-\\phi(n)y} = \\beta \\cdot (\\beta^{\\phi(n)})^{-y} \\equiv \\beta \\cdot 1^{-y} = \\beta \\mod n`}</MathBlock>
          </div>
        </div>
      </div>

      <Example title="RSA Example" className="my-6">
        <p>
          Take primes <InlineMath>p = 3</InlineMath> and <InlineMath>q = 41</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>n = 3 \times 41 = 123</InlineMath></li>
          <li><InlineMath>\phi(n) = 2 \times 40 = 80</InlineMath></li>
          <li>Choose <InlineMath>a = 27</InlineMath> (relatively prime to 80)</li>
          <li>
            Find <InlineMath>x</InlineMath>: <InlineMath>3 \times 27 - 1 \times 80 = 1</InlineMath>,
            so <InlineMath>x = 3</InlineMath>
          </li>
          <li>Public key: <InlineMath>(123, 27)</InlineMath></li>
        </ul>

        <p className="mt-4"><strong>Encrypting β = 5:</strong></p>
        <MathBlock>{`5^{27} \\equiv (125)^9 \\equiv 2^9 \\equiv 4 \\cdot 128 \\equiv 4 \\cdot 5 \\equiv 20 \\mod 123`}</MathBlock>
        <p>Send <InlineMath>m = 20</InlineMath>.</p>

        <p className="mt-4"><strong>Decrypting:</strong></p>
        <MathBlock>{`20^3 = 8000 = 65 \\times 123 + 5 \\equiv 5 \\mod 123`}</MathBlock>
        <p>Recovered message: <InlineMath>\beta = 5</InlineMath>.</p>
      </Example>

      <h2>Why RSA is Secure</h2>

      <p>
        An interceptor knows <InlineMath>n</InlineMath> and <InlineMath>a</InlineMath>, but to
        compute the decryption key <InlineMath>x</InlineMath>, they need{' '}
        <InlineMath>\phi(n)</InlineMath>. The only known way to compute{' '}
        <InlineMath>\phi(n)</InlineMath> from <InlineMath>n</InlineMath> is to factor{' '}
        <InlineMath>n</InlineMath> as <InlineMath>pq</InlineMath>.
      </p>

      <p>
        For 200-digit numbers, factorization is computationally infeasible with current
        technology (requiring years of computation). It has been shown by Rabin that
        deciphering RSA is as difficult as factoring integers.
      </p>

      <h2>Historical Note: Pierre Fermat</h2>

      <p>
        Pierre Fermat (1601–1665) was a magistrate in Toulouse who communicated with other
        mathematicians primarily by letter. His famous "Last Theorem"—that{' '}
        <InlineMath>x^n + y^n = z^n</InlineMath> has no positive integer solutions for{' '}
        <InlineMath>n {'>'} 2</InlineMath>—was finally proved by Andrew Wiles in 1995, over
        350 years after Fermat claimed to have a proof.
      </p>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              <InlineMath>a</InlineMath> has finite multiplicative order mod <InlineMath>n</InlineMath>{' '}
              iff <InlineMath>\gcd(a, n) = 1</InlineMath>. The order divides{' '}
              <InlineMath>\phi(n)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <strong>Fermat's Little Theorem:</strong> If <InlineMath>p</InlineMath> is prime and{' '}
              <InlineMath>p \nmid a</InlineMath>, then{' '}
              <InlineMath>a^{'{p-1}'} \equiv 1 \mod p</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Euler's phi function:</strong>{' '}
              <InlineMath>\phi(p^n) = p^n - p^{'{n-1}'}</InlineMath> and{' '}
              <InlineMath>\phi(ab) = \phi(a)\phi(b)</InlineMath> when{' '}
              <InlineMath>\gcd(a,b) = 1</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Euler's Theorem:</strong> If <InlineMath>\gcd(a, n) = 1</InlineMath>, then{' '}
              <InlineMath>a^{'{\\phi(n)}'} \equiv 1 \mod n</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>RSA:</strong> Public key <InlineMath>(n, a)</InlineMath> encrypts via{' '}
              <InlineMath>\beta^a \mod n</InlineMath>. Decryption requires knowing{' '}
              <InlineMath>\phi(n)</InlineMath>, which requires factoring <InlineMath>n</InlineMath>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
