import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section55Questions } from '../../data/quizzes';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <h2 className="text-2xl font-semibold mb-4">Discussion</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        In this chapter, we've explored <strong>finite arithmetic</strong>—the
        mathematics of computing with remainders. Let's reflect on the key
        themes and their remarkable connections.
      </p>

      {/* From Simple to Profound */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        From Simple to Profound
      </h3>

      <p className="text-dark-200 mb-6">
        We began with the most elementary examples: clock arithmetic, even and
        odd numbers, and sums of squares. These led us naturally to Gauss's
        powerful congruence notation and the algebraic structure of{' '}
        <InlineMath>\mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        The journey culminated in quadratic reciprocity—one of the deepest
        theorems in elementary number theory. This progression from simple
        to profound is characteristic of great mathematics.
      </p>

      {/* Major Themes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Major Themes</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Algebraic Structures" />
          <p className="text-xs text-dark-300">
            <InlineMath>\mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath> is a ring;{' '}
            <InlineMath>\mathbb{'{Z}'}/p\mathbb{'{Z}'}</InlineMath> is a field.
            The group of units has size <InlineMath>\phi(n)</InlineMath>.
          </p>
        </Card>
        <Card>
          <CardHeader title="Inverses & Primes" />
          <p className="text-xs text-dark-300">
            <InlineMath>a^{'{-1}'}</InlineMath> exists mod{' '}
            <InlineMath>n</InlineMath> iff <InlineMath>\gcd(a,n) = 1</InlineMath>.
            Prime moduli have no zero divisors.
          </p>
        </Card>
        <Card>
          <CardHeader title="Fermat & Wilson" />
          <p className="text-xs text-dark-300">
            <InlineMath>a^{'{p-1}'} \equiv 1</InlineMath> and{' '}
            <InlineMath>(p-1)! \equiv -1</InlineMath> reveal the structure of{' '}
            <InlineMath>(\mathbb{'{Z}'}/p\mathbb{'{Z}'})^*</InlineMath>.
          </p>
        </Card>
        <Card>
          <CardHeader title="CRT" />
          <p className="text-xs text-dark-300">
            Arithmetic mod <InlineMath>mn</InlineMath> decomposes into
            independent parts when <InlineMath>\gcd(m,n) = 1</InlineMath>.
          </p>
        </Card>
      </CardGrid>

      {/* Quadratic Residues */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Beauty of Quadratic Residues
      </h3>

      <p className="text-dark-200 mb-6">
        The study of squares mod <InlineMath>p</InlineMath> led to the Legendre
        symbol and quadratic reciprocity. The reciprocity law is remarkable:
        it relates "Is <InlineMath>p</InlineMath> a square mod{' '}
        <InlineMath>q</InlineMath>?" to "Is <InlineMath>q</InlineMath> a square
        mod <InlineMath>p</InlineMath>?"—two apparently independent questions!
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <MathBlock>
          {`\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2} \\cdot \\frac{q-1}{2}}`}
        </MathBlock>
        <p className="text-dark-300 text-sm mt-3 text-center">
          The golden theorem of number theory
        </p>
      </div>

      {/* Connections */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Connections</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>Cryptography:</strong> RSA, Diffie-Hellman, and elliptic
              curve cryptography all rely on modular arithmetic
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Computer Science:</strong> Hash functions, checksums, and
              random number generators use modular arithmetic
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 font-bold">•</span>
            <span>
              <strong>Abstract Algebra:</strong> Finite fields are central to
              coding theory and algebraic geometry
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Algebraic Number Theory:</strong> Quadratic reciprocity
              generalizes to class field theory
            </span>
          </li>
        </ul>
      </div>

      {/* Historical Note */}
      <Callout type="info">
        <p>
          Gauss's <em>Disquisitiones Arithmeticae</em> (1801) founded modern
          number theory. In it, he developed the theory of congruences,
          quadratic forms, and quadratic reciprocity. He was just 24 years old.
        </p>
      </Callout>

      {/* Looking Ahead */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Looking Ahead</h3>

      <p className="text-dark-200 mb-6">
        The next chapter explores <strong>complex numbers</strong>—another way
        to extend our number systems. We'll see how complex numbers connect
        to geometry, how Gaussian integers refine our understanding of primes,
        and how the fundamental theorem of algebra crowns our number systems.
      </p>

      {/* Chapter Summary */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Chapter Summary</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ol className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Congruence</strong>{' '}
              <InlineMath>a \equiv b \pmod n</InlineMath> means{' '}
              <InlineMath>n \mid (a - b)</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <InlineMath>\mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath> is a ring;
              it's a field when <InlineMath>n</InlineMath> is prime
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Inverses exist exactly when <InlineMath>\gcd(a, n) = 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Fermat:</strong>{' '}
              <InlineMath>a^{'{p-1}'} \equiv 1 \pmod p</InlineMath>;{' '}
              <strong>Wilson:</strong>{' '}
              <InlineMath>(p-1)! \equiv -1 \pmod p</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>CRT:</strong> Simultaneous congruences with coprime moduli
              have unique solutions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              <strong>Quadratic reciprocity</strong> relates squares mod{' '}
              <InlineMath>p</InlineMath> to squares mod <InlineMath>q</InlineMath>
            </span>
          </li>
        </ol>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={55} questions={section55Questions} />
    </LessonLayout>
  );
}
