import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section01Questions } from '../../data/quizzes';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-semibold mb-4">Division, Divisors, and Primes</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        We have taken addition and multiplication for granted, but we cannot do the
        same for division. Division cannot always be done in the natural numbers:
        as you learned in primary school, "3 into 7 won't go."
      </p>

      {/* Division with Remainder */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Division with Remainder</h3>

      <p className="text-dark-200 mb-6">
        The exact relation between 3 and 7 is:
      </p>

      <MathBlock>{`7 = 2 \\times 3 + 1`}</MathBlock>

      <p className="text-dark-200 my-6">
        We say that <strong>2 is the quotient</strong> when 7 is divided by 3,
        and <strong>1 is the remainder</strong>. Only when there is no remainder
        (as when 3 divides 6) is true division possible in the natural numbers.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">The Division Property</h4>
        <p className="text-dark-200 mb-4">
          For any natural numbers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>,
          we can write:
        </p>
        <MathBlock>{`a = qb + r, \\quad \\text{with } 0 \\leq r < b`}</MathBlock>
        <p className="text-dark-200 mt-4">
          where <InlineMath>q</InlineMath> is the <strong>quotient</strong> and{' '}
          <InlineMath>r</InlineMath> is the <strong>remainder</strong>.
        </p>
      </div>

      <Callout type="info">
        <p>
          The division property follows from infinite descent: if we descend through{' '}
          <InlineMath>a, a-b, a-2b, a-3b, \ldots</InlineMath> we must eventually reach
          a number <InlineMath>r = a - qb</InlineMath> smaller than <InlineMath>b</InlineMath>.
        </p>
      </Callout>

      {/* Divisibility */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Divisibility</h3>

      <p className="text-dark-200 mb-6">
        If <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are natural numbers,
        we say that <strong><InlineMath>b</InlineMath> divides <InlineMath>a</InlineMath></strong>{' '}
        if there is a natural number <InlineMath>q</InlineMath> such that:
      </p>

      <MathBlock>{`a = qb`}</MathBlock>

      <CardGrid>
        <Card>
          <CardHeader title="Equivalent Statements" />
          <ul className="text-sm text-dark-300 space-y-2">
            <li><InlineMath>b</InlineMath> divides <InlineMath>a</InlineMath></li>
            <li><InlineMath>a</InlineMath> is divisible by <InlineMath>b</InlineMath></li>
            <li><InlineMath>b</InlineMath> is a divisor of <InlineMath>a</InlineMath></li>
            <li><InlineMath>a</InlineMath> is a multiple of <InlineMath>b</InlineMath></li>
          </ul>
        </Card>
        <Card>
          <CardHeader title="Examples" />
          <ul className="text-sm text-dark-300 space-y-2">
            <li>3 divides 12 because <InlineMath>12 = 4 \times 3</InlineMath></li>
            <li>5 divides 35 because <InlineMath>35 = 7 \times 5</InlineMath></li>
            <li>7 does not divide 15 (remainder 1)</li>
          </ul>
        </Card>
      </CardGrid>

      {/* Factorization and Primes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Factorization and Prime Numbers</h3>

      <p className="text-dark-200 mb-6">
        When a natural number is written as a product <InlineMath>a = n_1 n_2 \cdots n_k</InlineMath>,
        the divisors <InlineMath>n_i</InlineMath> are called <strong>factors</strong>.
      </p>

      <p className="text-dark-200 mb-6">
        The simplest numbers, from the standpoint of factorization, are the{' '}
        <strong>primes</strong> — natural numbers <InlineMath>p</InlineMath> divisible
        only by 1 and <InlineMath>p</InlineMath> itself.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Definition: Prime Number</h4>
        <p className="text-dark-200 mb-4">
          A natural number <InlineMath>p {'>'} 1</InlineMath> is <strong>prime</strong> if
          its only divisors are 1 and <InlineMath>p</InlineMath>.
        </p>
        <p className="text-dark-200">
          Primes may be regarded as "atoms" because they cannot be split into smaller factors.
          Note: 1 is not considered a prime (factors of 1 are redundant).
        </p>
      </div>

      <p className="text-dark-200 mb-4">The first few prime numbers are:</p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 font-mono text-center text-amber-400">
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, ...
      </div>

      {/* Algebraic Factorization */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Algebraic Factorization</h3>

      <p className="text-dark-200 mb-6">
        In the proof that <InlineMath>\sqrt{'{2}'}</InlineMath> is irrational, we used
        the fact that <InlineMath>m^2</InlineMath> is even if and only if{' '}
        <InlineMath>m</InlineMath> is even. Let's verify this using algebra:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4 text-dark-200">
          <div>
            <p className="text-amber-400 font-semibold mb-2">If 2 divides m:</p>
            <MathBlock>{`m = 2\\ell \\Rightarrow m^2 = 4\\ell^2 = 2(2\\ell^2) \\Rightarrow \\text{2 divides } m^2`}</MathBlock>
          </div>
          <div>
            <p className="text-amber-400 font-semibold mb-2">If 2 does not divide m:</p>
            <MathBlock>{`m = 2\\ell + 1 \\Rightarrow m^2 = 4\\ell^2 + 4\\ell + 1 = 2(2\\ell^2 + 2\\ell) + 1`}</MathBlock>
            <p className="mt-2">So 2 does not divide <InlineMath>m^2</InlineMath>.</p>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          The same idea proves the irrationality of <InlineMath>\sqrt{'{3}'}</InlineMath>:
          show that <InlineMath>m^2</InlineMath> is a multiple of 3 only if{' '}
          <InlineMath>m</InlineMath> is a multiple of 3, then use infinite descent!
        </p>
      </Callout>

      {/* Special Primes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Mersenne and Fermat Primes</h3>

      <p className="text-dark-200 mb-6">
        An important algebraic factorization helps us understand when certain
        numbers can be prime:
      </p>

      <MathBlock>{`x^n - 1 = (x-1)(x^{n-1} + x^{n-2} + \\cdots + x + 1)`}</MathBlock>

      <CardGrid>
        <Card>
          <CardHeader title="Mersenne Primes" />
          <p className="text-sm text-dark-300 mb-2">
            Primes of the form <InlineMath>2^p - 1</InlineMath>
          </p>
          <p className="text-sm text-dark-400 mb-2">
            If <InlineMath>m = np</InlineMath>, then <InlineMath>2^m - 1</InlineMath> is
            divisible by <InlineMath>2^p - 1</InlineMath>.
          </p>
          <p className="text-sm text-emerald-400">
            So <InlineMath>2^p - 1</InlineMath> can only be prime if <InlineMath>p</InlineMath> is prime.
          </p>
          <p className="text-xs text-dark-500 mt-2">
            Examples: <InlineMath>2^2-1=3</InlineMath>, <InlineMath>2^3-1=7</InlineMath>,{' '}
            <InlineMath>2^5-1=31</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Fermat Primes" />
          <p className="text-sm text-dark-300 mb-2">
            Primes of the form <InlineMath>2^{'{2^n}'} + 1</InlineMath>
          </p>
          <p className="text-sm text-dark-400 mb-2">
            Similarly, <InlineMath>2^m + 1</InlineMath> can only be prime if{' '}
            <InlineMath>m</InlineMath> is a power of 2.
          </p>
          <p className="text-sm text-emerald-400">
            Only 5 Fermat primes are known: 3, 5, 17, 257, 65537.
          </p>
          <p className="text-xs text-dark-500 mt-2">
            (for <InlineMath>n = 0, 1, 2, 3, 4</InlineMath>)
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          Not all numbers of these forms are prime! For example,{' '}
          <InlineMath>2^{'{11}'} - 1 = 2047 = 23 \times 89</InlineMath> is not prime,
          even though 11 is prime. And 641 divides <InlineMath>2^{'{32}'} + 1</InlineMath>.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>division property</strong> says any <InlineMath>a</InlineMath> can
              be written as <InlineMath>a = qb + r</InlineMath> with <InlineMath>0 \leq r {'<'} b</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <InlineMath>b</InlineMath> <strong>divides</strong> <InlineMath>a</InlineMath>{' '}
              means <InlineMath>a = qb</InlineMath> for some natural number <InlineMath>q</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              A <strong>prime</strong> is a natural number <InlineMath>p {'>'} 1</InlineMath>{' '}
              divisible only by 1 and <InlineMath>p</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Algebraic factorization</strong> helps prove facts about divisibility
              (e.g., 2 divides <InlineMath>m^2</InlineMath> iff 2 divides <InlineMath>m</InlineMath>).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Mersenne primes</strong> (<InlineMath>2^p - 1</InlineMath>) and{' '}
              <strong>Fermat primes</strong> (<InlineMath>2^{'{2^n}'} + 1</InlineMath>)
              are special families of primes.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={1} questions={section01Questions} />
    </LessonLayout>
  );
}
