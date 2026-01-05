import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section05Questions } from '../../data/quizzes';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-semibold mb-4">Unique Prime Factorization</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The discovery that <InlineMath>\gcd(a, b)</InlineMath> can be written in the form{' '}
        <InlineMath>ax + by</InlineMath> has important repercussions for prime divisors.
        It leads to one of the most fundamental theorems in all of mathematics: the
        unique prime factorization theorem.
      </p>

      {/* Prime Divisor Property */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Prime Divisor Property</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Prime Divisor Property</h4>
        <p className="text-dark-200">
          If a prime <InlineMath>p</InlineMath> divides the product of integers{' '}
          <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>, then{' '}
          <InlineMath>p</InlineMath> divides either <InlineMath>a</InlineMath> or{' '}
          <InlineMath>b</InlineMath> (or both).
        </p>
      </div>

      <p className="text-dark-200 mb-4">
        <strong>Proof:</strong> Suppose <InlineMath>p</InlineMath> divides{' '}
        <InlineMath>ab</InlineMath> and <InlineMath>p</InlineMath> does not divide{' '}
        <InlineMath>a</InlineMath>. We must show that <InlineMath>p</InlineMath> divides{' '}
        <InlineMath>b</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-3 text-dark-200 text-sm">
          <p>
            Since <InlineMath>p</InlineMath> does not divide <InlineMath>a</InlineMath>,
            and <InlineMath>p</InlineMath> is prime, 1 is the only divisor of{' '}
            <InlineMath>p</InlineMath> that divides <InlineMath>a</InlineMath>.
          </p>
          <p>Therefore:</p>
          <MathBlock>{`1 = \\gcd(a, p) = ax + py \\quad \\text{for some integers } x, y`}</MathBlock>
          <p>Multiplying both sides by <InlineMath>b</InlineMath>:</p>
          <MathBlock>{`b = abx + pby`}</MathBlock>
          <p>
            But <InlineMath>p</InlineMath> divides each term on the right: it divides{' '}
            <InlineMath>ab</InlineMath> by assumption, and it divides <InlineMath>pby</InlineMath>{' '}
            obviously.
          </p>
          <p className="text-emerald-400 font-semibold">
            Hence <InlineMath>p</InlineMath> divides <InlineMath>b</InlineMath>. ∎
          </p>
        </div>
      </div>

      <Callout type="info">
        <p>
          This property was known to Euclid, along with many of its important consequences.
          The key insight is using the linear representation{' '}
          <InlineMath>\gcd(a, p) = ax + py</InlineMath>.
        </p>
      </Callout>

      {/* Unique Prime Factorization */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Fundamental Theorem of Arithmetic</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Unique Prime Factorization</h4>
        <p className="text-dark-200">
          Each natural number is expressible in <strong>only one way</strong> as a product
          of primes, apart from the order of factors.
        </p>
      </div>

      <p className="text-dark-200 mb-4">
        <strong>Proof:</strong> By repeatedly finding prime divisors (Section 1.3), we can
        factorize any natural number into primes. Now suppose, contrary to the theorem,
        that some natural number has two <em>different</em> prime factorizations:
      </p>

      <MathBlock>{`p_1 p_2 p_3 \\cdots p_s = q_1 q_2 q_3 \\cdots q_t`}</MathBlock>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <div className="space-y-3 text-dark-200 text-sm">
          <p>
            Assume any factor common to both sides has been canceled, so no factor on the
            left appears on the right.
          </p>
          <p>
            But <InlineMath>p_1</InlineMath> divides the left-hand side, so it divides the
            right side, which is <InlineMath>q_1 \times (q_2 q_3 \cdots q_t)</InlineMath>.
          </p>
          <p>
            By the prime divisor property: either <InlineMath>p_1 = q_1</InlineMath>{' '}
            (since <InlineMath>q_1</InlineMath> is prime), or <InlineMath>p_1</InlineMath>{' '}
            divides <InlineMath>q_2 q_3 \cdots q_t</InlineMath>.
          </p>
          <p>
            Continuing this way, we eventually find:
          </p>
          <MathBlock>{`p_1 = q_1 \\quad \\text{or} \\quad p_1 = q_2 \\quad \\text{or} \\quad \\cdots \\quad \\text{or} \\quad p_1 = q_t`}</MathBlock>
          <p className="text-red-400">
            But this contradicts our assumption that <InlineMath>p_1</InlineMath> is not
            on the right side!
          </p>
          <p className="text-emerald-400 font-semibold">
            Thus there is no natural number with two different prime factorizations. ∎
          </p>
        </div>
      </div>

      {/* Examples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Examples</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Factorizations" />
          <ul className="text-sm text-dark-300 space-y-2">
            <li><InlineMath>12 = 2^2 \times 3</InlineMath></li>
            <li><InlineMath>60 = 2^2 \times 3 \times 5</InlineMath></li>
            <li><InlineMath>100 = 2^2 \times 5^2</InlineMath></li>
            <li><InlineMath>2023 = 7 \times 17^2</InlineMath></li>
          </ul>
          <p className="text-xs text-dark-500 mt-2">
            Each factorization is unique (up to order).
          </p>
        </Card>
        <Card>
          <CardHeader title="Why Order Doesn't Matter" />
          <p className="text-sm text-dark-300 mb-2">
            <InlineMath>2 \times 3 \times 5 = 3 \times 2 \times 5 = 5 \times 3 \times 2</InlineMath>
          </p>
          <p className="text-sm text-dark-400">
            These are all the "same" factorization — just different orderings of the
            same prime factors.
          </p>
        </Card>
      </CardGrid>

      {/* Applications to Irrationality */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Application: Proving Irrationality</h3>

      <p className="text-dark-200 mb-6">
        Unique prime factorization gives a powerful way to prove irrationality results.
        Earlier we proved <InlineMath>\sqrt{'{2}'}</InlineMath> is irrational using properties
        of even and odd numbers. That required special properties of 2. With unique prime
        factorization, the argument depends only on the presence of primes, not which
        particular ones they are.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Theorem: <InlineMath>\sqrt{'{n}'}</InlineMath> is irrational unless{' '}
          <InlineMath>n</InlineMath> is a perfect square
        </h4>
        <p className="text-dark-200 mb-4">
          If <InlineMath>n</InlineMath> is not a perfect square, then{' '}
          <InlineMath>\sqrt{'{n}'}</InlineMath> is irrational.
        </p>
        <div className="text-sm text-dark-400">
          <p className="mb-2">
            <strong>Proof sketch:</strong> Suppose <InlineMath>\sqrt{'{n}'} = m/k</InlineMath>{' '}
            for integers <InlineMath>m, k</InlineMath>. Then <InlineMath>n k^2 = m^2</InlineMath>.
          </p>
          <p>
            By unique prime factorization, each prime in <InlineMath>m^2</InlineMath> appears
            an even number of times. The same for <InlineMath>k^2</InlineMath>. So each prime
            in <InlineMath>n</InlineMath> must appear an even number of times — meaning{' '}
            <InlineMath>n</InlineMath> is a perfect square.
          </p>
        </div>
      </div>

      <Callout type="success">
        <p>
          This single argument proves the irrationality of <InlineMath>\sqrt{'{2}'}</InlineMath>,{' '}
          <InlineMath>\sqrt{'{3}'}</InlineMath>, <InlineMath>\sqrt{'{5}'}</InlineMath>,{' '}
          <InlineMath>\sqrt{'{6}'}</InlineMath>, and infinitely many others — all at once!
        </p>
      </Callout>

      {/* Significance */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why This Theorem Matters</h3>

      <p className="text-dark-200 mb-6">
        The unique prime factorization theorem is sometimes called the{' '}
        <strong>Fundamental Theorem of Arithmetic</strong> because it is the foundation
        of number theory. It tells us that primes are truly the "atoms" of multiplication:
        every natural number is built from primes in exactly one way.
      </p>

      <Callout type="warning">
        <p>
          Unique prime factorization is <em>not</em> true in all number systems! In some
          extended number systems (like <InlineMath>\mathbb{'{Z}'}[\sqrt{'{-5}'}]</InlineMath>),
          unique factorization fails. Understanding when it holds and when it fails is a
          major theme of algebraic number theory.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Prime divisor property:</strong> If <InlineMath>p</InlineMath> divides{' '}
              <InlineMath>ab</InlineMath>, then <InlineMath>p</InlineMath> divides{' '}
              <InlineMath>a</InlineMath> or <InlineMath>b</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The proof uses the fact that <InlineMath>\gcd(a, p) = ax + py</InlineMath> when{' '}
              <InlineMath>p</InlineMath> doesn't divide <InlineMath>a</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Unique prime factorization:</strong> Every natural number factors into
              primes in exactly one way (up to order).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              This theorem proves <InlineMath>\sqrt{'{n}'}</InlineMath> is irrational whenever{' '}
              <InlineMath>n</InlineMath> is not a perfect square.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Also known as the <strong>Fundamental Theorem of Arithmetic</strong> — the
              foundation of number theory.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={5} questions={section05Questions} />
    </LessonLayout>
  );
}
