import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section02Questions } from '../../data/quizzes';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-semibold mb-4">The Mysterious Sequence of Primes</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        It is relatively easy to continue the list of primes, especially with the
        help of a computer, but one never gets a clear picture of where it is going.
        Somehow, the two simplest aspects of the natural numbers — their ability to
        be ordered and their ability to be factored — interact in an incredibly complex way.
      </p>

      {/* The Mystery */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Unpredictable Nature of Primes</h3>

      <p className="text-dark-200 mb-6">
        Listing the primes in increasing order produces no apparent pattern; one cannot
        even be sure the list continues indefinitely. On the other hand, the <em>concept</em>{' '}
        of prime is surely simple, so maybe we can prove that there are infinitely many
        primes, without knowing their pattern.
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 font-mono text-center text-amber-400">
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, ...
      </div>

      <Callout type="info">
        <p>
          This is in fact what Euclid did, more than 2000 years ago. His simple
          proof appears in Proposition 20, Book IX of the <em>Elements</em>.
        </p>
      </Callout>

      {/* Euclid's Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Theorem</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Theorem: Infinitely Many Primes</h4>
        <p className="text-dark-200">
          There are infinitely many primes.
        </p>
      </div>

      <p className="text-dark-200 mb-4">
        The proof has two parts:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Part 1: Every n has a prime divisor" />
          <p className="text-sm text-dark-300 mb-2">
            Take any divisor <InlineMath>d</InlineMath> of <InlineMath>n</InlineMath>.
            If <InlineMath>d</InlineMath> is prime, we're done.
          </p>
          <p className="text-sm text-dark-300 mb-2">
            If not, <InlineMath>d</InlineMath> has a smaller divisor{' '}
            <InlineMath>e \neq 1</InlineMath>. This <InlineMath>e</InlineMath> also
            divides <InlineMath>n</InlineMath>.
          </p>
          <p className="text-sm text-dark-400">
            By infinite descent, we eventually find a prime divisor.
          </p>
        </Card>
        <Card>
          <CardHeader title="Part 2: Extend any list of primes" />
          <p className="text-sm text-dark-300 mb-2">
            Given primes <InlineMath>p_1, p_2, \ldots, p_k</InlineMath>, consider:
          </p>
          <MathBlock>{`n = p_1 p_2 \\cdots p_k + 1`}</MathBlock>
          <p className="text-sm text-dark-300 mt-2">
            This <InlineMath>n</InlineMath> is not divisible by any of the given
            primes (they all leave remainder 1).
          </p>
          <p className="text-sm text-emerald-400 mt-2">
            But <InlineMath>n</InlineMath> has some prime divisor <InlineMath>p</InlineMath>,
            which must be different from all the <InlineMath>p_i</InlineMath>.
          </p>
        </Card>
      </CardGrid>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Example: Generating New Primes</h4>
        <div className="space-y-3 text-dark-200 text-sm">
          <p>Starting with <InlineMath>p_1 = 2</InlineMath>:</p>
          <ul className="space-y-2 ml-4">
            <li><InlineMath>n = 2 + 1 = 3</InlineMath> — a new prime <InlineMath>p_2</InlineMath></li>
            <li><InlineMath>n = 2 \times 3 + 1 = 7</InlineMath> — a new prime <InlineMath>p_3</InlineMath></li>
            <li><InlineMath>n = 2 \times 3 \times 7 + 1 = 43</InlineMath> — a new prime <InlineMath>p_4</InlineMath></li>
            <li><InlineMath>n = 2 \times 3 \times 7 \times 43 + 1 = 1807 = 13 \times 139</InlineMath> — not prime!</li>
          </ul>
          <p className="text-dark-400 mt-2">
            Note: <InlineMath>n</InlineMath> itself doesn't have to be prime — it just has
            a prime divisor not in our original list.
          </p>
        </div>
      </div>

      <Callout type="success">
        <p>
          This proof is one of the most admired in mathematics, and one's admiration
          for it only increases the more one knows about primes. Euclid devised a proof
          that did not need to know the pattern of primes!
        </p>
      </Callout>

      {/* Types of Primes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Two Types of Odd Primes</h3>

      <p className="text-dark-200 mb-6">
        Apart from the number 2, all primes are odd. Odd numbers come in two types:
        those of the form <InlineMath>4n + 1</InlineMath> and those of the form{' '}
        <InlineMath>4n + 3</InlineMath>. It turns out to be helpful to split the
        odd primes this way, because the two types often behave differently.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Primes of form 4n + 1" />
          <div className="font-mono text-amber-400 text-sm">
            5, 13, 17, 29, 37, 41, 53, 61, ...
          </div>
          <p className="text-xs text-dark-400 mt-2">
            (5 = 4×1+1, 13 = 4×3+1, etc.)
          </p>
        </Card>
        <Card>
          <CardHeader title="Primes of form 4n + 3" />
          <div className="font-mono text-amber-400 text-sm">
            3, 7, 11, 19, 23, 31, 43, 47, ...
          </div>
          <p className="text-xs text-dark-400 mt-2">
            (3 = 4×0+3, 7 = 4×1+3, etc.)
          </p>
        </Card>
      </CardGrid>

      {/* Infinitely many of form 4n+3 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Infinitely Many Primes of Form 4n + 3</h3>

      <p className="text-dark-200 mb-6">
        We can extend Euclid's idea to prove there are infinitely many primes of
        the form <InlineMath>4n + 3</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-4 text-dark-200">
          <div>
            <p className="text-amber-400 font-semibold mb-2">Key Observation:</p>
            <p>
              The product of two numbers of the form <InlineMath>4a + 1</InlineMath> and{' '}
              <InlineMath>4b + 1</InlineMath> is again of the form <InlineMath>4n + 1</InlineMath>.
            </p>
            <MathBlock>{`(4a + 1)(4b + 1) = 16ab + 4a + 4b + 1 = 4(4ab + a + b) + 1`}</MathBlock>
          </div>
          <div>
            <p className="text-amber-400 font-semibold mb-2">Consequence:</p>
            <p>
              Any number of the form <InlineMath>4m + 3</InlineMath> must have at least
              one prime factor of the form <InlineMath>4n + 3</InlineMath>.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-semibold mb-2">The Argument:</p>
            <p>
              Given odd primes <InlineMath>p_1, p_2, \ldots, p_k</InlineMath>, consider{' '}
              <InlineMath>2p_1 p_2 \cdots p_k + 1</InlineMath>. This is of the form{' '}
              <InlineMath>4n + 3</InlineMath>, so it has a prime factor of form{' '}
              <InlineMath>4n + 3</InlineMath> not equal to any <InlineMath>p_i</InlineMath>.
            </p>
          </div>
        </div>
      </div>

      {/* Dirichlet's Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Dirichlet's Theorem</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Dirichlet's Theorem (1837)</h4>
        <p className="text-dark-200 mb-4">
          Any sequence of the form <InlineMath>an + b</InlineMath>, where{' '}
          <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are natural numbers
          with no common divisor, contains infinitely many primes.
        </p>
        <p className="text-sm text-dark-400">
          For example: infinitely many primes of the form <InlineMath>6n + 1</InlineMath>{' '}
          and <InlineMath>6n + 5</InlineMath>, but none of the form <InlineMath>6n + 3</InlineMath>{' '}
          (since 3 divides any such number).
        </p>
      </div>

      <Callout type="warning">
        <p>
          The form <InlineMath>an + b</InlineMath> is called a <strong>linear form</strong>.
          Virtually nothing is known about primes in higher-degree forms. For example,
          we do not know whether there are infinitely many primes of the form{' '}
          <InlineMath>n^2 + 1</InlineMath>.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The sequence of primes has no known pattern, yet we can prove{' '}
              <strong>there are infinitely many</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Euclid's proof</strong>: Given primes <InlineMath>p_1, \ldots, p_k</InlineMath>,
              the number <InlineMath>p_1 \cdots p_k + 1</InlineMath> has a prime divisor
              not in the list.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Every natural number has a <strong>prime divisor</strong> (by infinite descent).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Odd primes split into two types: <InlineMath>4n + 1</InlineMath> and{' '}
              <InlineMath>4n + 3</InlineMath>, each with infinitely many primes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Dirichlet's theorem</strong> generalizes: any <InlineMath>an + b</InlineMath>{' '}
              with <InlineMath>\gcd(a, b) = 1</InlineMath> contains infinitely many primes.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={2} questions={section02Questions} />
    </LessonLayout>
  );
}
