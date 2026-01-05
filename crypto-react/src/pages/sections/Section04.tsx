import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section04Quiz } from '@/data/quizzes';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Prime Numbers: The Atoms of Arithmetic</h2>

      <p>
        Prime numbers are the building blocks of all integers. Every number can be broken 
        down into primes, just like every molecule can be broken down into atoms. 
        This fundamental property makes primes essential to cryptography.
      </p>

      <Definition title="Prime Number">
        A <strong>prime number</strong> is an integer greater than 1 that has no positive 
        divisors other than 1 and itself.
      </Definition>

      <p>
        The first few primes are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, ...
      </p>

      <Callout type="info">
        <strong>Note:</strong> The number 1 is <em>not</em> considered prime. 
        The number 2 is the only even prime—every other even number is divisible by 2.
      </Callout>

      <h2>Testing for Primality</h2>

      <p>
        To check if a number <InlineMath>n</InlineMath> is prime, we only need to test divisibility 
        by numbers up to <InlineMath>{`\\sqrt{n}`}</InlineMath>. Why? If <InlineMath>{`n = a \\times b`}</InlineMath> and
        both factors are greater than <InlineMath>{`\\sqrt{n}`}</InlineMath>, then <InlineMath>{`a \\times b > n`}</InlineMath>, 
        which is a contradiction.
      </p>

      <Example title="Testing if 37 is Prime">
        <p>Is 37 prime?</p>
        <p>
          We check divisibility by primes up to <InlineMath>{`\\sqrt{37} \\approx 6.08`}</InlineMath>.
        </p>
        <div className="font-mono bg-dark-700/50 rounded-lg p-4 my-2">
          37 ÷ 2 = 18.5 (not divisible)<br />
          37 ÷ 3 = 12.33... (not divisible)<br />
          37 ÷ 5 = 7.4 (not divisible)
        </div>
        <p>Since 37 is not divisible by 2, 3, or 5, it is <strong>prime</strong>.</p>
      </Example>

      <h2>The Fundamental Theorem of Arithmetic</h2>

      <Theorem title="Fundamental Theorem of Arithmetic">
        Every integer greater than 1 can be represented <strong>uniquely</strong> as a product 
        of prime numbers, up to the order of the factors.
      </Theorem>

      <p>
        This is why primes are called the "atoms" of arithmetic—they cannot be broken down 
        further, and everything is built from them.
      </p>

      <Example title="Prime Factorization Examples">
        <p>Prime factorizations:</p>
        <MathBlock>
          {`84 = 2^2 \\times 3 \\times 7`}
        </MathBlock>
        <MathBlock>
          {`3233 = 53 \\times 61`}
        </MathBlock>
        <MathBlock>
          {`100 = 2^2 \\times 5^2`}
        </MathBlock>
        <p>Each number has exactly one prime factorization (ignoring order).</p>
      </Example>

      <h2>The Sieve of Eratosthenes</h2>

      <p>
        The ancient Greek mathematician Eratosthenes discovered an elegant algorithm 
        for finding all primes up to a given number:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Sieve Algorithm</h3>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Write down all numbers from 2 to <InlineMath>n</InlineMath></li>
          <li>Start with the first unmarked number (2)</li>
          <li>Mark all multiples of this number as composite (not prime)</li>
          <li>Move to the next unmarked number</li>
          <li>Repeat until you've processed all numbers up to <InlineMath>{`\\sqrt{n}`}</InlineMath></li>
          <li>All remaining unmarked numbers are prime</li>
        </ol>
      </div>

      {/* TODO: Add prime sieve visualization - animated sieve crossing out composites */}

      <Example title="Sieve of Eratosthenes for 2-30">
        <p>Sieve of Eratosthenes for numbers 2-30:</p>
        <div className="grid grid-cols-6 md:grid-cols-10 gap-2 my-4 text-center font-mono">
          {Array.from({ length: 29 }, (_, i) => i + 2).map((n) => {
            const isPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].includes(n);
            return (
              <div
                key={n}
                className={`rounded-lg p-2 ${
                  isPrime
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                    : 'bg-dark-700/50 text-dark-500 line-through'
                }`}
              >
                {n}
              </div>
            );
          })}
        </div>
        <p className="text-dark-400">
          Green numbers are prime; crossed out numbers are composite.
        </p>
      </Example>

      <h2>Why Primes Matter for Cryptography</h2>

      <p>
        The security of RSA and many other cryptographic systems rests on a simple 
        but profound asymmetry:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Easy: Multiplication</h3>
          <p className="text-dark-300 mb-3">
            Multiplying two large primes is fast, even for numbers with hundreds of digits.
          </p>
          <div className="font-mono text-emerald-400 text-sm">
            p × q = n<br />
            (takes milliseconds)
          </div>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Hard: Factoring</h3>
          <p className="text-dark-300 mb-3">
            Given the product, finding the original primes is extraordinarily difficult.
          </p>
          <div className="font-mono text-amber-400 text-sm">
            n = ? × ?<br />
            (could take billions of years)
          </div>
        </div>
      </div>

      <Theorem title="The Factoring Problem">
        Given a large number <InlineMath>{`n = p \\times q`}</InlineMath> where <InlineMath>{`p`}</InlineMath> and <InlineMath>{`q`}</InlineMath> are
        large primes, there is no known efficient algorithm to find <InlineMath>{`p`}</InlineMath> and <InlineMath>{`q`}</InlineMath>.
      </Theorem>

      <p>
        This asymmetry—easy to multiply, hard to factor—is the foundation of RSA encryption. 
        The public key contains <InlineMath>n</InlineMath>, but only someone who knows the secret 
        primes <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath> can decrypt messages.
      </p>

      <Callout type="warning">
        <strong>Scale Matters:</strong> For small numbers, factoring is easy. 
        The security comes from using primes so large (typically 1024-2048 bits each) 
        that factoring their product would take longer than the age of the universe 
        with current technology.
      </Callout>

      <h2>How Many Primes Are There?</h2>

      <Theorem title="Infinitude of Primes">
        There are infinitely many prime numbers.
      </Theorem>

      <p>
        Euclid proved this over 2,000 years ago with an elegant argument: 
        Assume there are only finitely many primes. Multiply them all together and add 1. 
        This new number is not divisible by any known prime (it always leaves remainder 1), 
        so it must either be prime itself or have a prime factor we missed. Contradiction!
      </p>

      <Callout type="success">
        <strong>Key Takeaway:</strong> Primes are the fundamental building blocks of integers. 
        The fact that multiplying primes is easy but factoring is hard creates the 
        "trapdoor" that makes public-key cryptography possible.
      </Callout>

      <SectionQuiz sectionId={4} questions={section04Quiz} title="Prime Numbers Quiz" />
    </LessonLayout>
  );
}
