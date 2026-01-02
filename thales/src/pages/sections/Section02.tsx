import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section02Questions } from '../../data/quizzes';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-semibold mb-4">Prime Numbers</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        It would be impossible to write a history of mathematics without mentioning prime
        numbers, and it would be improper to give an account of prime numbers without going
        into the history of mathematics. Prime numbers enter into almost every branch of
        mathematics; they are as fundamental as they are ubiquitous.
      </p>

      <Callout type="info">
        <p>
          The history of prime numbers can be used as a framework for a history of
          mathematics generally. In this chapter, we take a brief look at the fascinating
          subject of primes.
        </p>
      </Callout>

      {/* Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">What is a Prime Number?</h3>

      <p className="text-dark-200 mb-6">
        An integer greater than 1 which cannot be factored into numbers all smaller than
        itself is called <strong>prime</strong>. Equivalently, a positive integer is prime
        if and only if it has exactly two positive integer divisors (1 and itself).
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-amber-400">The First Few Primes</h4>
        <p className="text-dark-200 font-mono text-lg">
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, ...
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Early on, people noticed that a pile of small stones can sometimes be arranged
        in a rectangle and sometimes it cannot. Thus, although we do not have any record
        of this, the Egyptians probably knew the difference between composite and prime
        numbers.
      </p>

      {/* Euclid's Results */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Contributions</h3>

      <p className="text-dark-200 mb-6">
        It was the Greeks who first <em>proved</em> that the number of primes is infinite.
        These proofs are found in Euclid's <em>Elements</em> (300 BC).
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Euclid's Lemma" />
          <p className="text-sm text-dark-300 mb-2">
            <strong>Book VII, Proposition 31:</strong>
          </p>
          <p className="text-sm text-dark-200 mb-3">
            Every integer <InlineMath>n &gt; 1</InlineMath> is divisible by some prime number.
          </p>
          <p className="text-xs text-dark-400">
            <em>Proof:</em> Among the divisors of <InlineMath>n</InlineMath> greater than 1,
            let <InlineMath>p</InlineMath> be the smallest. Then <InlineMath>p</InlineMath> has
            no divisors other than 1 and itself, so <InlineMath>p</InlineMath> is prime.
          </p>
        </Card>
        <Card>
          <CardHeader title="Euclid's Theorem" />
          <p className="text-sm text-dark-300 mb-2">
            <strong>Book IX, Proposition 20:</strong>
          </p>
          <p className="text-sm text-dark-200 mb-3">
            Given any finite list of primes <InlineMath>{`p_1, p_2, \\ldots, p_k`}</InlineMath>,
            there is a prime not on this list.
          </p>
          <p className="text-xs text-dark-400">
            <em>Proof:</em> Consider <InlineMath>{`n = p_1 p_2 \\cdots p_k + 1`}</InlineMath>.
            This <InlineMath>n</InlineMath> is not divisible by any prime on the list, so it
            must have a prime factor not on the list.
          </p>
        </Card>
      </CardGrid>

      {/* Unique Factorization */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Unique Factorization Theorem</h3>

      <p className="text-dark-200 mb-6">
        In Proposition 14 of Book IX, Euclid proved that if <InlineMath>n</InlineMath> is
        a <em>square-free</em> positive integer (one with no square factor other than 1),
        then <InlineMath>n</InlineMath> has a factorization into primes which is unique.
      </p>

      <p className="text-dark-200 mb-6">
        However, it was not until <strong>1801</strong> that the unique factorization was
        formally proved for <em>any</em> positive integer. This was done by{' '}
        <strong>Carl Friedrich Gauss</strong> (1777–1855) in his{' '}
        <em>Disquisitiones Arithmeticae</em>.
      </p>

      <Callout type="success">
        <p>
          <strong>Fundamental Theorem of Arithmetic:</strong> Every positive integer greater
          than 1 has a unique factorization into prime numbers (up to order of factors).
        </p>
      </Callout>

      {/* Sieve of Eratosthenes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Sieve of Eratosthenes</h3>

      <p className="text-dark-200 mb-6">
        Like Euclid, <strong>Eratosthenes of Cyrene</strong> (230 BC) worked at the
        University of Alexandria. He suggested a method for making a list of all prime
        numbers, now called the <em>Sieve of Eratosthenes</em>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ol className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>Write down all positive integers greater than 1.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>Cross out all multiples of 2 (except 2 itself).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>Cross out all multiples of 3 (except 3) not yet crossed out.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>Continue with 5, 7, 11, ... (skip numbers already crossed out).</span>
          </li>
        </ol>
        <p className="text-dark-300 mt-4 text-sm">
          The numbers not crossed out form a complete list of primes.
        </p>
      </div>

      {/* Prime-Generating Formulas */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Search for Prime Formulas</h3>

      <p className="text-dark-200 mb-6">
        People often wonder whether there is a simple formula representing prime numbers.
        For example, consider:
      </p>

      <MathBlock>{`f(x) = x^2 - x + 41`}</MathBlock>

      <p className="text-dark-200 my-6">
        This polynomial is prime for all integer values of <InlineMath>x</InlineMath> from
        0 to 40. While this might convince a physicist that{' '}
        <InlineMath>f(x)</InlineMath> is always prime, unfortunately{' '}
        <InlineMath>{`f(41) = 41^2`}</InlineMath>!
      </p>

      <Callout type="warning">
        <p>
          <strong>Goldbach's Observation (1743):</strong> A polynomial{' '}
          <InlineMath>{`f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n`}</InlineMath> with
          integer coefficients <em>cannot</em> represent primes only. Indeed, if{' '}
          <InlineMath>f(0) = p</InlineMath>, then <InlineMath>f(kp)</InlineMath> is a
          multiple of <InlineMath>p</InlineMath> for all integers <InlineMath>k</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        It therefore came as a great surprise when, in 1970, <strong>Yuri Matiyasevich</strong>{' '}
        formed a polynomial <InlineMath>{`f(x, y, z, \\ldots)`}</InlineMath> with integer
        coefficients in <em>several variables</em>, such that when positive integers are
        chosen for the variables, one gets all the prime numbers (and only the primes) as
        positive values of the polynomial.
      </p>

      {/* Prime Number Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Prime Number Theorem</h3>

      <p className="text-dark-200 mb-6">
        In 1830, <strong>A. M. Legendre</strong> noted that if{' '}
        <InlineMath>{`\\pi(x)`}</InlineMath> is the number of primes less than or equal
        to <InlineMath>x</InlineMath>, then <InlineMath>{`\\pi(x)`}</InlineMath> is
        approximately equal to <InlineMath>{`x/(\\log x - 1.08366)`}</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        In 1896, two mathematicians working independently proved the{' '}
        <strong>Prime Number Theorem</strong>:
      </p>

      <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\pi(x)}{x / \\log x} = 1`}</MathBlock>

      <CardGrid>
        <Card>
          <CardHeader title="Jacques Hadamard" />
          <p className="text-sm text-dark-300">
            French mathematician (1865–1963)
          </p>
        </Card>
        <Card>
          <CardHeader title="Charles de la Vallée Poussin" />
          <p className="text-sm text-dark-300">
            Belgian mathematician (1866–1962)
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mt-6 mb-6">
        The theorem implies that the <InlineMath>n</InlineMath>th prime is approximately
        equal to <InlineMath>{`n \\log n`}</InlineMath>.
      </p>

      {/* Goldbach's Conjecture */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Goldbach's Conjecture</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">The Conjecture (1742)</h4>
        <p className="text-dark-200">
          Every even number greater than 2 is the sum of two primes.
        </p>
        <p className="text-dark-400 mt-3 text-sm">
          Examples: 4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 5+5, 12 = 5+7, 100 = 47+53
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This conjecture has not yet been proved or disproved! However, progress has been made:
      </p>

      <ul className="space-y-4 mb-6 text-dark-200">
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">•</span>
          <span>
            <strong>Vinogradov (1937):</strong> Every sufficiently large odd integer is a
            sum of three primes.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">•</span>
          <span>
            <strong>Chen Jing-Run (1966):</strong> Every sufficiently large even number
            has the form <InlineMath>p + q</InlineMath>, where <InlineMath>p</InlineMath>{' '}
            is prime and <InlineMath>q</InlineMath> is either prime or the product of
            two primes.
          </span>
        </li>
      </ul>

      {/* Cryptography */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Primes and Cryptography</h3>

      <p className="text-dark-200 mb-6">
        One of the most important modern applications of prime numbers is in{' '}
        <strong>public-key cryptography</strong>. The basic idea:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ol className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The cipher key is a product <InlineMath>n = pq</InlineMath> of two large
              primes, typically having 50 to 80 digits each.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Knowing <InlineMath>n</InlineMath> is enough to <em>encode</em> messages,
              but decryption requires knowledge of the factorization.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The integer <InlineMath>n</InlineMath> is made public (hence "public key"),
              so everyone can encipher messages.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Security is maintained because only the intended recipient knows the
              factorization <InlineMath>pq</InlineMath> needed to decrypt.
            </span>
          </li>
        </ol>
      </div>

      <Callout type="info">
        <p>
          The security of this scheme rests on the fact that it takes a very long time
          to factor products of large primes. Try to factor the relatively small product{' '}
          <strong>1,315,685,447</strong>, and you will see that the enemy does not have
          an easy task!
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              A <strong>prime number</strong> is an integer greater than 1 with exactly
              two positive divisors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Euclid</strong> proved there are infinitely many primes (300 BC),
              using one of the most elegant proofs in mathematics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>Fundamental Theorem of Arithmetic</strong> states every integer
              has a unique prime factorization.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The <strong>Prime Number Theorem</strong> (1896) tells us primes become
              rarer: <InlineMath>{`\\pi(x) \\approx x/\\log x`}</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Goldbach's Conjecture</strong> (every even &gt; 2 is a sum of two
              primes) remains unproved after 280+ years.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              Primes are the foundation of modern <strong>cryptography</strong>, securing
              internet communications worldwide.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={2} questions={section02Questions} />
    </LessonLayout>
  );
}
