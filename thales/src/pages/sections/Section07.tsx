import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section07Questions } from '../../data/quizzes';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-semibold mb-4">Perfect Numbers</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The Pythagoreans were interested in <strong>perfect numbers</strong> — numbers
        such as 6 and 28, which are equal to the sum of their proper divisors. They
        may also be described as numbers which are <em>amicable with themselves</em>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Examples of Perfect Numbers</h4>
        <div className="space-y-3 text-dark-200">
          <p>
            <strong>6</strong> = 1 + 2 + 3 (proper divisors: 1, 2, 3)
          </p>
          <p>
            <strong>28</strong> = 1 + 2 + 4 + 7 + 14 (proper divisors: 1, 2, 4, 7, 14)
          </p>
        </div>
      </div>

      {/* Formal Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Formal Definition</h3>

      <p className="text-dark-200 mb-6">
        Nowadays we usually speak about the sum of <em>all</em> divisors of a positive
        integer <InlineMath>n</InlineMath>, including <InlineMath>n</InlineMath> itself.
        If <InlineMath>{`\\sigma(n)`}</InlineMath> denotes this sum, then{' '}
        <InlineMath>n</InlineMath> is <strong>perfect</strong> if and only if:
      </p>

      <MathBlock>{`\\sigma(n) = 2n`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        For example, <InlineMath>{`\\sigma(6) = 1 + 2 + 3 + 6 = 12 = 2 \\times 6`}</InlineMath>,
        confirming that 6 is perfect.
      </p>

      {/* Euclid's Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Perfect Number Theorem</h3>

      <p className="text-dark-200 mb-6">
        As the culmination of Book IX of the <em>Elements</em> (300 BC), Euclid proved
        that any positive integer of the form:
      </p>

      <MathBlock>{`n = 2^{m-1}(2^m - 1)`}</MathBlock>

      <p className="text-dark-200 my-6">
        is perfect, whenever <InlineMath>{`2^m - 1`}</InlineMath> is prime. This fact
        had probably been discovered by the Pythagoreans.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">
          Proof of Proposition IX.36 (Perfect Number Theorem)
        </h4>
        <p className="text-dark-200 mb-4">
          If <InlineMath>{`p = 2^m - 1`}</InlineMath> is prime, then the divisors of{' '}
          <InlineMath>{`n = 2^{m-1}p`}</InlineMath> are:
        </p>
        <MathBlock>{`1, 2, 2^2, \\ldots, 2^{m-1}, p, 2p, 2^2p, \\ldots, 2^{m-1}p`}</MathBlock>
        <p className="text-dark-200 mt-4 mb-2">The sum of these divisors is:</p>
        <MathBlock>{`\\sigma(n) = (1 + 2 + 2^2 + \\cdots + 2^{m-1})(1 + p) = (2^m - 1)(1 + p)`}</MathBlock>
        <MathBlock>{`= (2^m - 1)(1 + 2^m - 1) = (2^m - 1) \\cdot 2^m = 2 \\cdot 2^{m-1}(2^m - 1) = 2n`}</MathBlock>
      </div>

      {/* First Four Perfect Numbers */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The First Four Perfect Numbers</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 overflow-x-auto">
        <table className="w-full text-dark-200">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-2 px-3 text-amber-400">m</th>
              <th className="text-left py-2 px-3 text-amber-400">
                <InlineMath>{`2^m - 1`}</InlineMath>
              </th>
              <th className="text-left py-2 px-3 text-amber-400">Prime?</th>
              <th className="text-left py-2 px-3 text-amber-400">Perfect Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2 px-3">2</td>
              <td className="py-2 px-3">3</td>
              <td className="py-2 px-3 text-green-400">Yes</td>
              <td className="py-2 px-3"><InlineMath>{`2^1 \\times 3 = 6`}</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2 px-3">3</td>
              <td className="py-2 px-3">7</td>
              <td className="py-2 px-3 text-green-400">Yes</td>
              <td className="py-2 px-3"><InlineMath>{`2^2 \\times 7 = 28`}</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2 px-3">5</td>
              <td className="py-2 px-3">31</td>
              <td className="py-2 px-3 text-green-400">Yes</td>
              <td className="py-2 px-3"><InlineMath>{`2^4 \\times 31 = 496`}</InlineMath></td>
            </tr>
            <tr>
              <td className="py-2 px-3">7</td>
              <td className="py-2 px-3">127</td>
              <td className="py-2 px-3 text-green-400">Yes</td>
              <td className="py-2 px-3"><InlineMath>{`2^6 \\times 127 = 8128`}</InlineMath></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mersenne Primes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Mersenne Primes</h3>

      <p className="text-dark-200 mb-6">
        Primes of the form <InlineMath>{`2^m - 1`}</InlineMath> are called{' '}
        <strong>Mersenne primes</strong>, after Father <strong>Marin Mersenne</strong>{' '}
        (1588–1648).
      </p>

      <Callout type="info">
        <p>
          An integer of the form <InlineMath>{`2^m - 1`}</InlineMath> can only be prime
          if <InlineMath>m</InlineMath> is prime. For if <InlineMath>{`m = ab`}</InlineMath>{' '}
          with <InlineMath>{`a, b > 1`}</InlineMath>, then <InlineMath>{`2^m - 1`}</InlineMath>{' '}
          factors as <InlineMath>{`(2^a - 1)(2^{a(b-1)} + 2^{a(b-2)} + \\cdots + 1)`}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        However, the converse is not true. Although 11 is prime,{' '}
        <InlineMath>{`2^{11} - 1 = 2047 = 23 \\times 89`}</InlineMath> is not prime.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Mersenne's Claim and Cole's Refutation
        </h4>
        <p className="text-dark-200 mb-4">
          In 1644, Mersenne correctly stated that the first 8 perfect numbers are given
          by <InlineMath>{`m = 2, 3, 5, 7, 13, 17, 19, 31`}</InlineMath>. He also claimed
          that <InlineMath>{`2^{67} - 1`}</InlineMath> is prime. Here he was wrong.
        </p>
        <p className="text-dark-200 mb-4">
          In <strong>1903</strong>, <strong>Frank Nelson Cole</strong> gave a lecture
          which consisted of two calculations. First Cole calculated{' '}
          <InlineMath>{`2^{67} - 1`}</InlineMath>. Then he worked out the product:
        </p>
        <p className="text-dark-200 text-center font-mono text-lg mb-4">
          193,707,721 × 761,838,257,287
        </p>
        <p className="text-dark-200">
          He did not say a word as he did this. The two calculations agreed, and Cole
          received a <strong>standing ovation</strong>. He had factored{' '}
          <InlineMath>{`2^{67} - 1`}</InlineMath> and proved Mersenne wrong.
        </p>
      </div>

      {/* Lucas Test */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Lucas's Primality Test</h3>

      <p className="text-dark-200 mb-6">
        <strong>Édouard Lucas</strong> (1842–1891) found a very efficient way of testing
        whether <InlineMath>{`2^m - 1`}</InlineMath> is prime:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">Lucas's Test</h4>
        <p className="text-dark-200 mb-2">
          Let <InlineMath>{`u_1 = 4`}</InlineMath> and{' '}
          <InlineMath>{`u_{n+1} = u_n^2 - 2`}</InlineMath>.
        </p>
        <p className="text-dark-200 mb-2">
          Thus <InlineMath>{`u_2 = 14`}</InlineMath>, <InlineMath>{`u_3 = 194`}</InlineMath>,{' '}
          <InlineMath>{`u_4 = 37634`}</InlineMath>.
        </p>
        <p className="text-dark-200 mt-4">
          If <InlineMath>{`m > 2`}</InlineMath>, then <InlineMath>{`2^m - 1`}</InlineMath>{' '}
          is prime just in case <InlineMath>{`2^m - 1`}</InlineMath> is a factor of{' '}
          <InlineMath>{`u_{m-1}`}</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        For example, since <InlineMath>{`2^5 - 1 = 31`}</InlineMath> is a factor of{' '}
        <InlineMath>{`u_4 = 37634 = 31 \\times 1214`}</InlineMath>, it follows that{' '}
        <InlineMath>{`2^5 - 1`}</InlineMath> is prime (and hence{' '}
        <InlineMath>{`2^4(2^5 - 1) = 496`}</InlineMath> is perfect).
      </p>

      {/* Euler's Converse */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euler's Converse Theorem</h3>

      <p className="text-dark-200 mb-6">
        We know from Euclid that numbers of the form <InlineMath>{`2^{m-1}(2^m - 1)`}</InlineMath>{' '}
        are perfect when <InlineMath>{`2^m - 1`}</InlineMath> is prime. But are there
        other even perfect numbers?
      </p>

      <Callout type="success">
        <p>
          <strong>Leonhard Euler</strong> (1707–1783) proved that <em>every</em> even
          perfect number has Euclid's form. Thus, finding even perfect numbers is
          equivalent to finding Mersenne primes.
        </p>
      </Callout>

      {/* Open Questions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Open Questions</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Infinitely Many?" />
          <p className="text-sm text-dark-300">
            We still do not know whether there are <strong>infinitely many</strong>{' '}
            Mersenne primes (and hence infinitely many perfect numbers).
          </p>
        </Card>
        <Card>
          <CardHeader title="Odd Perfect Numbers?" />
          <p className="text-sm text-dark-300">
            We do not know if there are any <strong>odd perfect numbers</strong>.
            None have ever been found, but none have been proven impossible.
          </p>
        </Card>
      </CardGrid>

      {/* Religious and Mystical Significance */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Religious Significance</h3>

      <p className="text-dark-200 mb-6">
        Perfect numbers are of interest not only as a challenge to mathematicians,
        they also play a role in religious mysticism. Following Philo of Alexandria,{' '}
        <strong>Augustine</strong> writes in the <em>City of God</em>:
      </p>

      <blockquote className="border-l-4 border-amber-400 pl-4 italic text-dark-300 mb-6">
        "Six is a number perfect in itself, and not because God created all things
        in six days; rather, the converse is true. God created all things in six
        days because this number is perfect, and it would have been perfect even
        if the work of six days did not exist."
      </blockquote>

      <p className="text-dark-200 mb-6">
        In Sufi mysticism, 6 is called the first "complete" number and 28 the second —
        evidently, "complete" here means "perfect."
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              A <strong>perfect number</strong> equals the sum of its proper divisors.
              The first four are 6, 28, 496, and 8128.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Euclid's Theorem</strong>: <InlineMath>{`2^{m-1}(2^m - 1)`}</InlineMath>{' '}
              is perfect whenever <InlineMath>{`2^m - 1`}</InlineMath> is prime.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Primes of the form <InlineMath>{`2^m - 1`}</InlineMath> are called{' '}
              <strong>Mersenne primes</strong>. For <InlineMath>{`2^m - 1`}</InlineMath>{' '}
              to be prime, <InlineMath>m</InlineMath> must be prime (but not conversely).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Euler's Theorem</strong>: Every even perfect number has Euclid's form.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Open problems</strong>: Are there infinitely many Mersenne primes?
              Do odd perfect numbers exist?
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={7} questions={section07Questions} />
    </LessonLayout>
  );
}
