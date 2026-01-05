import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section60Questions } from '../../data/quizzes';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <h2 className="text-2xl font-semibold mb-4">
        Unique Gaussian Prime Factorization
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The ordinary integers have unique prime factorization. Remarkably, the
        Gaussian integers do too—but the primes are different! This leads to
        surprising connections between ordinary primes and sums of squares.
      </p>

      {/* Gaussian Primes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Gaussian Primes</h3>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Definition
        </h4>
        <p className="text-dark-200">
          A Gaussian integer <InlineMath>\pi</InlineMath> is{' '}
          <strong>prime</strong> if <InlineMath>\pi</InlineMath> is not a unit
          and its only divisors are units and associates of <InlineMath>\pi</InlineMath>.
        </p>
        <p className="text-dark-300 text-sm mt-3">
          Two Gaussian integers are <strong>associates</strong> if they differ
          by a unit factor.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        For example, <InlineMath>3</InlineMath>, <InlineMath>-3</InlineMath>,{' '}
        <InlineMath>3i</InlineMath>, and <InlineMath>-3i</InlineMath> are all
        associates.
      </p>

      {/* Which integers are Gaussian primes? */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Which Ordinary Primes Remain Prime?
      </h3>

      <p className="text-dark-200 mb-6">
        Not every ordinary prime is a Gaussian prime! Consider:
      </p>

      <MathBlock>
        {`2 = (1 + i)(1 - i)`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        Since <InlineMath>1 + i</InlineMath> and <InlineMath>1 - i</InlineMath>{' '}
        are not units (both have norm 2), this is a genuine factorization.
        So <InlineMath>2</InlineMath> is <em>not</em> a Gaussian prime!
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Similarly:</strong>
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>5 = (2 + i)(2 - i)</InlineMath>
          </li>
          <li>
            <InlineMath>13 = (3 + 2i)(3 - 2i)</InlineMath>
          </li>
          <li>
            <InlineMath>17 = (4 + i)(4 - i)</InlineMath>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        But <InlineMath>3</InlineMath> has no such factorization—it is a
        Gaussian prime!
      </p>

      {/* Classification */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Classification of Gaussian Primes
      </h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Gaussian Prime Theorem
        </h4>
        <p className="text-dark-200 mb-4">
          The Gaussian primes are exactly:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-dark-200">
          <li>
            <InlineMath>1 + i</InlineMath> (and its associates)
          </li>
          <li>
            <InlineMath>a + bi</InlineMath> where <InlineMath>a^2 + b^2 = p</InlineMath>{' '}
            for an ordinary prime <InlineMath>p \equiv 1 \pmod 4</InlineMath>
          </li>
          <li>
            Ordinary primes <InlineMath>p \equiv 3 \pmod 4</InlineMath>
          </li>
        </ol>
      </div>

      <CardGrid>
        <Card>
          <CardHeader title="p = 2" />
          <p className="text-xs text-dark-300">
            <InlineMath>2 = -i(1+i)^2</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Special case: ramified</p>
        </Card>
        <Card>
          <CardHeader title="p ≡ 1 (mod 4)" />
          <p className="text-xs text-dark-300">
            <InlineMath>p = \pi \bar\pi</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Splits into conjugate pair</p>
        </Card>
        <Card>
          <CardHeader title="p ≡ 3 (mod 4)" />
          <p className="text-xs text-dark-300">
            <InlineMath>p</InlineMath> stays prime
          </p>
          <p className="text-xs text-dark-400 mt-2">Inert: remains Gaussian prime</p>
        </Card>
      </CardGrid>

      {/* Unique Factorization */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Unique Factorization
      </h3>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Fundamental Theorem for Gaussian Integers
        </h4>
        <p className="text-dark-200">
          Every nonzero Gaussian integer can be written as a unit times a product
          of Gaussian primes, and this factorization is <strong>unique</strong>{' '}
          up to order and associates.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The proof uses the Gaussian division algorithm from the previous section.
        It's analogous to the proof for ordinary integers!
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> Factor <InlineMath>30</InlineMath> in{' '}
          <InlineMath>\mathbb{'{Z}'}[i]</InlineMath>:
        </p>
        <MathBlock>
          {`30 = 2 \\cdot 3 \\cdot 5`}
        </MathBlock>
        <MathBlock>
          {`= (1+i)(1-i) \\cdot 3 \\cdot (2+i)(2-i)`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          (up to units and reordering)
        </p>
      </div>

      {/* Norm and Primality */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Using the Norm
      </h3>

      <p className="text-dark-200 mb-6">
        The norm is a powerful tool for determining primality:
      </p>

      <Callout type="info">
        <p>
          If <InlineMath>N(\alpha)</InlineMath> is an ordinary prime, then{' '}
          <InlineMath>\alpha</InlineMath> is a Gaussian prime.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        <strong>Proof:</strong> If <InlineMath>\alpha = \beta\gamma</InlineMath>,
        then <InlineMath>N(\alpha) = N(\beta)N(\gamma)</InlineMath>. Since{' '}
        <InlineMath>N(\alpha)</InlineMath> is prime, one of{' '}
        <InlineMath>N(\beta), N(\gamma)</InlineMath> equals 1, making that
        factor a unit.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong>
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>N(2 + i) = 5</InlineMath> (prime) → <InlineMath>2 + i</InlineMath> is Gaussian prime
          </li>
          <li>
            <InlineMath>N(3 + 2i) = 13</InlineMath> (prime) → <InlineMath>3 + 2i</InlineMath> is Gaussian prime
          </li>
          <li>
            <InlineMath>N(2 + 2i) = 8</InlineMath> (not prime) → need to check further
          </li>
        </ul>
      </div>

      {/* GCD and Bezout */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        GCD in Gaussian Integers
      </h3>

      <p className="text-dark-200 mb-6">
        The Euclidean algorithm works for Gaussian integers, giving us GCDs and
        a Bézout identity:
      </p>

      <MathBlock>
        {`\\gcd(\\alpha, \\beta) = \\alpha u + \\beta v`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        for some <InlineMath>u, v \in \mathbb{'{Z}'}[i]</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        This leads to all the familiar consequences: Euclid's lemma, unique
        factorization, and properties of prime divisibility.
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Gaussian primes: irreducible elements in <InlineMath>\mathbb{'{Z}'}[i]</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>p \equiv 1 \pmod 4</InlineMath>: splits as{' '}
              <InlineMath>p = \pi\bar\pi</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>p \equiv 3 \pmod 4</InlineMath>: stays prime
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Unique factorization holds in <InlineMath>\mathbb{'{Z}'}[i]</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={60} questions={section60Questions} />
    </LessonLayout>
  );
}
