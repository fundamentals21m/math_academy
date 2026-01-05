import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section09Questions } from '../../data/quizzes';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-semibold mb-4">Discussion</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        This chapter concludes with a historical discussion of the Euclidean
        algorithm and mathematical induction—two tools that are fundamental to
        arithmetic but took centuries to be fully appreciated.
      </p>

      {/* The Euclidean Algorithm */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Euclidean Algorithm</h3>

      <p className="text-dark-200 mb-6">
        The Euclidean algorithm is a splendid example of the universality of
        mathematics. It seems to have been discovered in three different cultures
        and for several different mathematical purposes.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Ancient Greece (~300 BC)" />
          <p className="text-sm text-dark-300">
            Crucial in Euclid's theory of divisibility and primes, and in the
            study of irrational numbers.
          </p>
        </Card>
        <Card>
          <CardHeader title="India & China (~500 AD)" />
          <p className="text-sm text-dark-300">
            Aryabhata and Bhaskara I discovered the linear representation{' '}
            <InlineMath>\gcd(a,b) = ma + nb</InlineMath> for solving equations.
          </p>
        </Card>
      </CardGrid>

      <div className="bg-dark-800 rounded-lg p-6 mt-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Gauss's Avoidance</h4>
        <p className="text-dark-200 text-sm mb-3">
          Surprisingly, Gauss avoided the Euclidean algorithm in his{' '}
          <em>Disquisitiones Arithmeticae</em> (1801). He gave rules for computing
          gcd and lcm from prime factorizations, saying only:
        </p>
        <blockquote className="border-l-2 border-dark-600 pl-4 text-dark-300 italic text-sm">
          "We know from elementary considerations how to solve these problems
          when the resolution of the numbers into factors are not given."
        </blockquote>
      </div>

      <p className="text-dark-200 mb-6">
        Dirichlet reinstated the algorithm in his <em>Vorlesungen über Zahlentheorie</em>{' '}
        (1867), recognizing its power:
      </p>

      <Callout type="info">
        <p className="text-sm">
          "It is now clear that the whole structure rests on a <em>single</em>{' '}
          foundation, namely the algorithm for finding the greatest common
          divisor of two numbers."
          <span className="block mt-2 text-dark-400">— Dirichlet (1867)</span>
        </p>
      </Callout>

      {/* Gaussian Integers */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Beyond Ordinary Integers</h3>

      <p className="text-dark-200 mb-6">
        In 1831, Gauss found the Euclidean algorithm useful for a new kind of
        number: the <strong>Gaussian integers</strong>{' '}
        <InlineMath>a + b\sqrt{'{-1}'}</InlineMath>. The key to their arithmetic
        was the applicability of the Euclidean algorithm.
      </p>

      <Callout type="success">
        <p>
          Dirichlet noted: "Any analogous theory, for which there is a similar
          algorithm for the greatest common divisor, must also have consequences
          analogous to those in our theory."
        </p>
      </Callout>

      {/* History of Induction */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The History of Induction</h3>

      <p className="text-dark-200 mb-6">
        The "base step, induction step" format is now indispensable, but the first
        clear statement appeared only in 1654! How did mathematicians manage so
        long without it?
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Descent Came First</h4>
        <p className="text-dark-200 text-sm">
          Mathematicians preferred <strong>descent</strong> because:
        </p>
        <ul className="mt-3 space-y-2 text-dark-300 text-sm">
          <li>• No "base step" is needed—it's simpler</li>
          <li>• It occurs more naturally at lower levels of mathematics</li>
          <li>• Examples date from Euclid's <em>Elements</em> (~300 BC)</li>
        </ul>
      </div>

      {/* Euclid's Use of Descent */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Descent</h3>

      <p className="text-dark-200 mb-6">
        In Book VII, Proposition 31, Euclid proves that any composite number has
        a prime divisor. His argument uses descent explicitly:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <blockquote className="border-l-2 border-amber-400 pl-4 text-dark-300 italic text-sm">
          "For, if [a prime divisor] is not found, an infinite series of numbers
          will measure the number A, each of which is less than the other: which
          is impossible in numbers."
          <span className="block mt-2 text-dark-500">— Euclid, Elements VII.31</span>
        </blockquote>
      </div>

      {/* Fermat's Infinite Descent */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Fermat's Method of Infinite Descent</h3>

      <p className="text-dark-200 mb-6">
        Around 1640, Fermat announced spectacular results claimed to follow from
        a "method of infinite descent." His most famous proof shows:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Fermat's Theorem</h4>
        <p className="text-dark-200">
          There are no natural numbers <InlineMath>a, b, c</InlineMath> such that{' '}
          <InlineMath>a^4 + b^4 = c^2</InlineMath>.
        </p>
        <p className="text-dark-300 mt-3 text-sm">
          If a solution existed, Fermat showed how to "descend" to a smaller
          solution—contradicting that the natural numbers have a least element.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This proof made mathematicians conscious of descent for the first time.
        Unfortunately, the logical principle was buried under the technical
        problem of finding the descent step.
      </p>

      {/* Pascal's Contribution */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Pascal's Breakthrough (1654)</h3>

      <p className="text-dark-200 mb-6">
        The induction step came to light not in number theory but in{' '}
        <strong>combinatorics</strong>. The first precise formulation of
        induction was by <strong>Blaise Pascal</strong> (1654), who clearly used
        the "base step, induction step" format to prove properties of Pascal's
        triangle.
      </p>

      <Callout type="warning">
        <p>
          Understanding did not advance much between 1654 and 1861. Ascending and
          descending forms were used without recognition of their importance or
          even their equivalence!
        </p>
      </Callout>

      {/* Grassmann's Legacy */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Grassmann's Revolutionary Textbook</h3>

      <p className="text-dark-200 mb-6">
        One would not think the time was ripe for a high school teacher to write
        a textbook using mathematical induction as the <em>sole basis</em> of
        arithmetic! Enter Hermann Grassmann.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Lehrbuch der Arithmetik (1861)
        </h4>
        <p className="text-dark-200 text-sm">
          Grassmann's textbook contained the fundamental idea that everyone else
          had missed: <em>the whole of arithmetic follows from the process of
          succession</em>. He defined + and × from the successor function and
          proved all ring properties of <InlineMath>\mathbb{'{Z}'}</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Sadly, Grassmann was a generation ahead of his time. His work fell into
        obscurity so fast that even like-minded mathematicians of the 1880s were
        unaware of it. Dedekind (1888) rediscovered the inductive definitions
        independently.
      </p>

      {/* Modern Impact */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Modern Impact</h3>

      <p className="text-dark-200 mb-6">
        Dedekind's use of set theory was influential in the development of logic
        and set theory in the 20th century. Perhaps most surprisingly:
      </p>

      <Callout type="success">
        <p>
          Grassmann and Dedekind's method of <strong>definition by induction</strong>{' '}
          led to the theory of <strong>recursive functions</strong>, and ultimately
          to computer programming and computer science. Mathematics often finds
          its way into the real world, without being asked!
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>Euclidean algorithm</strong> was discovered independently
              in Greece, India, and China for different purposes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Descent</strong> was used since Euclid (~300 BC), but the
              principle wasn't formally recognized until Fermat (~1640).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Pascal</strong> (1654) first precisely formulated the "base
              step, induction step" format.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Grassmann</strong> (1861) showed that all of arithmetic
              follows from induction—a generation ahead of his time.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Inductive definitions led to <strong>recursive function theory</strong>{' '}
              and modern <strong>computer science</strong>.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={9} questions={section09Questions} />
    </LessonLayout>
  );
}
