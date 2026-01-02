import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section14Questions } from '../../data/quizzes';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-semibold mb-4">The Impossibility of Solving the Classical Problems</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The ancient Greeks were unable to solve the classical problems using
        ruler and compass constructions — for a good reason: <strong>it cannot
        be done</strong>. After over two thousand years, mathematicians finally
        proved these constructions are impossible.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Timeline of Proofs</h4>
        <ul className="space-y-2 text-dark-300 text-sm">
          <li><strong>1837</strong> — Pierre Wantzel proves doubling the cube, trisecting
            an angle, and the regular heptagon are impossible</li>
          <li><strong>1873</strong> — Charles Hermite proves <InlineMath>e</InlineMath> is
            transcendental</li>
          <li><strong>1882</strong> — Ferdinand von Lindemann proves{' '}
            <InlineMath>{`\\pi`}</InlineMath> is transcendental, making squaring
            the circle impossible</li>
        </ul>
      </div>

      {/* Squaring the Circle */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Squaring the Circle</h3>

      <p className="text-dark-200 mb-6">
        In 1882, <strong>C.L.F. Lindemann</strong> (1852–1939) proved that{' '}
        <InlineMath>{`\\pi`}</InlineMath> is not an <strong>algebraic number</strong>{' '}
        — meaning it cannot be a root of any polynomial equation with integer
        coefficients.
      </p>

      <Callout type="info">
        <p>
          A number is <strong>algebraic</strong> if it satisfies some polynomial
          equation with integer coefficients, like <InlineMath>{`x^2 - 2 = 0`}</InlineMath>{' '}
          (which has solution <InlineMath>{`\\sqrt{2}`}</InlineMath>). Numbers
          that are not algebraic are called <strong>transcendental</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        Since <InlineMath>{`\\pi`}</InlineMath> is transcendental,{' '}
        <InlineMath>{`\\sqrt{\\pi}`}</InlineMath> (needed to square a circle)
        cannot be constructed by rational operations and square roots.
        Lindemann's proof built on earlier work by <strong>Hermite</strong>,
        who had shown that <InlineMath>{`e = \\lim_{n \\to \\infty}(1 + 1/n)^n`}</InlineMath>{' '}
        is also transcendental.
      </p>

      {/* The Cubic Equations */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Cubic Equations</h3>

      <p className="text-dark-200 mb-6">
        Problems I (doubling the cube), II (trisecting an angle), and IV
        (regular heptagon) have one thing in common: they can all be expressed
        by <strong>cubic equations</strong>:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-5 border-l-4 border-red-400">
          <h4 className="font-semibold text-red-400 mb-2">I. Doubling the Cube</h4>
          <MathBlock>{`u^3 - 2 = 0`}</MathBlock>
        </div>
        <div className="bg-dark-800 rounded-lg p-5 border-l-4 border-amber-400">
          <h4 className="font-semibold text-amber-400 mb-2">II. Trisecting 60°</h4>
          <MathBlock>{`u^3 - 3u - 1 = 0`}</MathBlock>
        </div>
        <div className="bg-dark-800 rounded-lg p-5 border-l-4 border-purple-400">
          <h4 className="font-semibold text-purple-400 mb-2">IV. Regular Heptagon</h4>
          <MathBlock>{`u^3 + u^2 - 2u - 1 = 0`}</MathBlock>
        </div>
      </div>

      {/* Rational Root Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Rational Root Lemma</h3>

      <p className="text-dark-200 mb-6">
        First, we must verify that these cubic equations have{' '}
        <strong>no rational solutions</strong>. The key tool is:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">
          Lemma (Rational Root Test)
        </h4>
        <p className="text-dark-300 mb-3">
          If <InlineMath>{`a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0 = 0`}</InlineMath>{' '}
          is a polynomial equation with integer coefficients, then any rational
          solution <InlineMath>{`p/q`}</InlineMath> has:
        </p>
        <ul className="text-dark-300 space-y-1">
          <li>• <InlineMath>p</InlineMath> divides <InlineMath>{`a_0`}</InlineMath> (the constant term)</li>
          <li>• <InlineMath>q</InlineMath> divides <InlineMath>{`a_n`}</InlineMath> (the leading coefficient)</li>
        </ul>
        <p className="text-dark-400 text-sm mt-3">
          In particular, when <InlineMath>{`a_n = 1`}</InlineMath>, any rational
          solution is an integer dividing <InlineMath>{`a_0`}</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Applying this lemma to our cubic equations:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-300">
          <li>
            <strong className="text-red-400">u³ − 2 = 0:</strong>{' '}
            Possible rational roots: ±1, ±2. Testing: none work.
          </li>
          <li>
            <strong className="text-amber-400">u³ − 3u − 1 = 0:</strong>{' '}
            Possible rational roots: ±1. Testing: neither works.
          </li>
          <li>
            <strong className="text-purple-400">u³ + u² − 2u − 1 = 0:</strong>{' '}
            Possible rational roots: ±1. Testing: neither works.
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          None of these cubic equations have rational solutions. But could they
          have solutions involving <strong>square roots</strong>? This is the
          crucial question that Wantzel answered.
        </p>
      </Callout>

      {/* Fields */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Concept of a Field</h3>

      <p className="text-dark-200 mb-6">
        To give a rigorous proof, we introduce the concept of a <strong>field</strong>.
        For our purposes, a field is a set of numbers (real or complex) that:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-300">
          <li>• Contains the number 1</li>
          <li>• Is <strong>closed</strong> under addition, subtraction, multiplication, and division</li>
        </ul>
      </div>

      <CardGrid>
        <Card>
          <CardHeader title="The Rationals ℚ" />
          <p className="text-sm text-dark-300">
            The rational numbers form a field. Adding, subtracting, multiplying,
            or dividing rationals gives another rational.
          </p>
        </Card>
        <Card>
          <CardHeader title="ℚ[√2]" />
          <p className="text-sm text-dark-300">
            All numbers of the form <InlineMath>{`a + b\\sqrt{2}`}</InlineMath>{' '}
            with <InlineMath>a, b</InlineMath> rational. This is also a field!
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mt-6 mb-6">
        More generally, if <InlineMath>F</InlineMath> is any field and{' '}
        <InlineMath>c</InlineMath> is an element of <InlineMath>F</InlineMath>,
        then <InlineMath>{`F[\\sqrt{c}]`}</InlineMath> — the set of all numbers{' '}
        <InlineMath>{`a + b\\sqrt{c}`}</InlineMath> with{' '}
        <InlineMath>{`a, b \\in F`}</InlineMath> — is also a field.
      </p>

      {/* Key Proposition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Key Proposition</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-green-400">
        <h4 className="text-lg font-semibold mb-3 text-green-400">
          Proposition (Wantzel's Key Insight)
        </h4>
        <p className="text-dark-300 mb-3">
          Suppose <InlineMath>{`f(x) = x^3 + a_2 x^2 + a_1 x + a_0`}</InlineMath>{' '}
          is a cubic polynomial with coefficients in a field <InlineMath>F</InlineMath>.
        </p>
        <p className="text-dark-300">
          If <InlineMath>{`f(x) = 0`}</InlineMath> has a solution in{' '}
          <InlineMath>{`F[\\sqrt{c}]`}</InlineMath> for some{' '}
          <InlineMath>{`c \\in F`}</InlineMath>, then it{' '}
          <strong>already has a solution in F</strong>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        In other words, <strong>adding a single square root to a field cannot
        help you solve a cubic that wasn't already solvable</strong>.
      </p>

      {/* Corollary */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Crucial Corollary</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Corollary
        </h4>
        <p className="text-dark-300">
          If a number expressible by rational operations and square roots
          satisfies a cubic equation with rational coefficients, then this
          equation <strong>must have a rational solution</strong>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Proof sketch:</strong> A number built from rationals using
        operations +, −, ×, ÷, and √ lies in some chain of fields:
      </p>

      <MathBlock>{`\\mathbb{Q} = F_0 \\subseteq F_1 \\subseteq F_2 \\subseteq \\cdots \\subseteq F_n`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        where each <InlineMath>{`F_{k+1} = F_k[\\sqrt{c_k}]`}</InlineMath>.
        By the proposition, if the cubic has a solution in{' '}
        <InlineMath>{`F_n`}</InlineMath>, it has one in{' '}
        <InlineMath>{`F_{n-1}`}</InlineMath>, then in{' '}
        <InlineMath>{`F_{n-2}`}</InlineMath>, and so on — all the way back
        to <InlineMath>{`\\mathbb{Q}`}</InlineMath>.
      </p>

      {/* Main Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Impossibility Theorem</h3>

      <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-lg p-6 mb-6 border border-red-600/50">
        <h4 className="text-lg font-semibold mb-3 text-red-300">
          Theorem (Wantzel, 1837)
        </h4>
        <p className="text-red-200">
          It is <strong>impossible</strong> to double a cube, to trisect an
          arbitrary angle, or to draw a regular heptagon by ruler and compass
          constructions.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Proof:</strong> The three cubic equations
      </p>

      <MathBlock>{`u^3 - 2 = 0, \\quad u^3 - 3u - 1 = 0, \\quad u^3 + u^2 - 2u - 1 = 0`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        have no rational solutions (verified by the Rational Root Test).
        By the corollary, they have no solutions expressible by rational
        operations and square roots. Therefore, the corresponding geometric
        constructions are impossible with ruler and compass.
      </p>

      {/* Gauss and Fermat Primes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Gauss and Regular Polygons</h3>

      <p className="text-dark-200 mb-6">
        Which regular <InlineMath>n</InlineMath>-gons <em>can</em> be constructed?
        The Greeks could draw regular polygons with 3, 4, 5, and 6 sides, but
        not 7. <strong>Carl Friedrich Gauss</strong> discovered a beautiful
        pattern:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">
          Gauss's Theorem on Regular p-gons
        </h4>
        <p className="text-dark-300">
          A regular <InlineMath>p</InlineMath>-gon (with <InlineMath>p</InlineMath>{' '}
          prime) can be constructed with ruler and compass if and only if{' '}
          <InlineMath>p</InlineMath> is a <strong>Fermat prime</strong>:
        </p>
        <MathBlock>{`p = 2^{2^k} + 1`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        The known Fermat primes are:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-300">
          <li><InlineMath>{`F_0 = 2^1 + 1 = 3`}</InlineMath> (equilateral triangle)</li>
          <li><InlineMath>{`F_1 = 2^2 + 1 = 5`}</InlineMath> (regular pentagon)</li>
          <li><InlineMath>{`F_2 = 2^4 + 1 = 17`}</InlineMath> (regular 17-gon)</li>
          <li><InlineMath>{`F_3 = 2^8 + 1 = 257`}</InlineMath> (regular 257-gon)</li>
          <li><InlineMath>{`F_4 = 2^{16} + 1 = 65537`}</InlineMath> (regular 65537-gon)</li>
        </ul>
        <p className="text-dark-400 text-sm mt-3">
          No other Fermat primes are known! Fermat conjectured all{' '}
          <InlineMath>{`F_n`}</InlineMath> are prime, but{' '}
          <InlineMath>{`F_5 = 4294967297 = 641 \\times 6700417`}</InlineMath>{' '}
          is composite.
        </p>
      </div>

      <Callout type="success">
        <p>
          Gauss was so proud of proving the 17-gon constructible that he wanted
          one inscribed on his tombstone. Though this wasn't done, a regular
          17-gon was inscribed on a monument to Gauss in Braunschweig, Germany.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Lindemann (1882)</strong> proved <InlineMath>{`\\pi`}</InlineMath>{' '}
              is transcendental, making <strong>squaring the circle</strong>{' '}
              impossible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Wantzel (1837)</strong> proved <strong>doubling the cube</strong>,{' '}
              <strong>trisecting an angle</strong>, and the{' '}
              <strong>regular heptagon</strong> are impossible — all reduce to
              cubic equations with no rational solutions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>Rational Root Test</strong> shows the only possible
              rational solutions of a monic polynomial are integer divisors of
              the constant term.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Key insight:</strong> If a cubic with coefficients in a
              field <InlineMath>F</InlineMath> has a solution in{' '}
              <InlineMath>{`F[\\sqrt{c}]`}</InlineMath>, it already has one in{' '}
              <InlineMath>F</InlineMath>. Square roots don't help solve cubics!
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Gauss:</strong> A regular <InlineMath>p</InlineMath>-gon
              is constructible iff <InlineMath>p</InlineMath> is a Fermat prime
              (<InlineMath>{`2^{2^k} + 1`}</InlineMath>). Only five are known:
              3, 5, 17, 257, 65537.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={14} questions={section14Questions} />
    </LessonLayout>
  );
}
