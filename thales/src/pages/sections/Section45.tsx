import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section45Questions } from '../../data/quizzes';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <h2 className="text-2xl font-semibold mb-4">The Fundamental Theorem of Arithmetic</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The Fundamental Theorem of Arithmetic states that every positive integer
        greater than 1 can be expressed as a product of prime numbers in exactly
        one way (up to the order of the factors). This theorem is the cornerstone
        of number theory.
      </p>

      {/* Bezout's Identity */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Expressing the GCD as a Linear Combination</h3>

      <p className="text-dark-200 mb-4">
        Using Euclid's Algorithm, we can not only find <InlineMath>{`\\gcd(a, b)`}</InlineMath>,
        but also express it as an integer linear combination of{' '}
        <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath>.
      </p>

      <Callout type="success" title="Bézout's Identity">
        <p>
          Given positive integers <InlineMath>{`a`}</InlineMath> and{' '}
          <InlineMath>{`b`}</InlineMath>, their gcd is the <strong>smallest
          positive integer</strong> <InlineMath>{`d`}</InlineMath> such that:
        </p>
        <MathBlock>{`d = ax + by \\quad \\text{for some } x, y \\in \\mathbb{Z}`}</MathBlock>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof Sketch</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            The set <InlineMath>{`\\{ax + by \\mid x, y \\in \\mathbb{Z}\\}`}</InlineMath>{' '}
            contains positive integers (e.g., <InlineMath>{`2ab`}</InlineMath>).
            Let <InlineMath>{`d`}</InlineMath> be the smallest positive element.
          </p>
          <p>
            Any common divisor of <InlineMath>{`a`}</InlineMath> and{' '}
            <InlineMath>{`b`}</InlineMath> divides <InlineMath>{`d`}</InlineMath>.
          </p>
          <p>
            To show <InlineMath>{`d`}</InlineMath> divides{' '}
            <InlineMath>{`a`}</InlineMath>: divide{' '}
            <InlineMath>{`a = qd + r`}</InlineMath> with{' '}
            <InlineMath>{`0 \\leq r < d`}</InlineMath>. Then{' '}
            <InlineMath>{`r = a - qd`}</InlineMath> is also of the form{' '}
            <InlineMath>{`ax' + by'`}</InlineMath>. Since <InlineMath>{`d`}</InlineMath>{' '}
            is smallest and <InlineMath>{`r < d`}</InlineMath>, we must have{' '}
            <InlineMath>{`r = 0`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Fundamental Lemma */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Fundamental Lemma</h3>

      <Callout type="success" title="Fundamental Lemma of Arithmetic">
        <p className="mb-2">
          If <InlineMath>{`a`}</InlineMath> divides{' '}
          <InlineMath>{`bc`}</InlineMath> and{' '}
          <InlineMath>{`\\gcd(a, b) = 1`}</InlineMath>, then{' '}
          <InlineMath>{`a`}</InlineMath> divides <InlineMath>{`c`}</InlineMath>.
        </p>
        <p className="font-semibold mt-2">
          In particular: if a prime <InlineMath>{`p`}</InlineMath> divides{' '}
          <InlineMath>{`bc`}</InlineMath>, then <InlineMath>{`p`}</InlineMath>{' '}
          divides <InlineMath>{`b`}</InlineMath> or{' '}
          <InlineMath>{`p`}</InlineMath> divides <InlineMath>{`c`}</InlineMath>.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            Since <InlineMath>{`\\gcd(a, b) = 1`}</InlineMath>, there exist
            integers <InlineMath>{`x, y`}</InlineMath> with{' '}
            <InlineMath>{`ax + by = 1`}</InlineMath>.
          </p>
          <p>
            Since <InlineMath>{`a \\mid bc`}</InlineMath>, we have{' '}
            <InlineMath>{`bc = az`}</InlineMath> for some integer{' '}
            <InlineMath>{`z`}</InlineMath>.
          </p>
          <p>Multiplying the first equation by <InlineMath>{`c`}</InlineMath>:</p>
          <MathBlock>{`c = axc + byc = axc + y(az) = a(xc + yz)`}</MathBlock>
          <p>
            Therefore <InlineMath>{`a \\mid c`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* The Fundamental Theorem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Fundamental Theorem</h3>

      <Callout type="success" title="Fundamental Theorem of Arithmetic">
        <p className="mb-2">
          Every positive integer <InlineMath>{`n > 1`}</InlineMath> can be
          expressed as a product of prime numbers:
        </p>
        <MathBlock>{`n = p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}`}</MathBlock>
        <p className="mt-2">
          Moreover, this factorization is <strong>unique</strong> up to the
          order of the factors.
        </p>
      </Callout>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Existence</CardHeader>
          <p className="text-dark-300 text-sm">
            The smallest divisor <InlineMath>{`> 1`}</InlineMath> of any
            integer <InlineMath>{`n > 1`}</InlineMath> is prime. Factor it
            out and repeat on the quotient. Since the quotient decreases,
            this terminates.
          </p>
        </Card>
        <Card>
          <CardHeader>Uniqueness</CardHeader>
          <p className="text-dark-300 text-sm">
            If <InlineMath>{`p_1 \\cdots p_r = q_1 \\cdots q_s`}</InlineMath>,
            then <InlineMath>{`p_1 \\mid q_1 \\cdots q_s`}</InlineMath>. By
            the Fundamental Lemma, <InlineMath>{`p_1 = q_j`}</InlineMath>{' '}
            for some <InlineMath>{`j`}</InlineMath>. Cancel and repeat.
          </p>
        </Card>
      </CardGrid>

      {/* Connection to Continued Fractions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        Connection to Continued Fractions
      </h3>

      <p className="text-dark-200 mb-4">
        The continued fraction expansion provides a way to find the integers{' '}
        <InlineMath>{`x`}</InlineMath> and <InlineMath>{`y`}</InlineMath> in
        Bézout's identity. If <InlineMath>{`a/b = (a_0, a_1, \\ldots, a_n)`}</InlineMath>{' '}
        with convergents <InlineMath>{`p_k/q_k`}</InlineMath>, then:
      </p>

      <MathBlock>{`aq_{n-1} - bp_{n-1} = (-1)^{n-1} \\cdot d`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        where <InlineMath>{`d = \\gcd(a, b)`}</InlineMath>. This gives:
      </p>

      <MathBlock>{`x = (-1)^{n-1} q_{n-1}, \\quad y = (-1)^n p_{n-1}`}</MathBlock>

      <Card className="mb-6 mt-4">
        <CardHeader>Example</CardHeader>
        <div className="text-dark-300 text-sm">
          <p className="mb-2">
            Find <InlineMath>{`x, y`}</InlineMath> such that{' '}
            <InlineMath>{`1604x + 502y = \\gcd(1604, 502) = 2`}</InlineMath>.
          </p>
          <p>
            From <InlineMath>{`1604/502 = (3, 5, 8, 6)`}</InlineMath>, the
            second-to-last convergent is <InlineMath>{`p_2/q_2 = 131/41`}</InlineMath>.
          </p>
          <p className="mt-2">
            Since <InlineMath>{`n = 3`}</InlineMath> (odd):{' '}
            <InlineMath>{`x = q_2 = 41`}</InlineMath> and{' '}
            <InlineMath>{`y = -p_2 = -131`}</InlineMath>.
          </p>
          <p className="mt-2">
            Check: <InlineMath>{`1604 \\times 41 + 502 \\times (-131) = 65764 - 65762 = 2`}</InlineMath> ✓
          </p>
        </div>
      </Card>

      {/* Why Uniqueness Matters */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Why Uniqueness Matters</h3>

      <p className="text-dark-200 mb-4">
        Unique factorization is not automatic! In some number systems, it fails.
        For example, in <InlineMath>{`\\mathbb{Z}[\\sqrt{-5}]`}</InlineMath>:
      </p>

      <MathBlock>{`6 = 2 \\times 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        Both are valid factorizations into irreducibles, but they're different!
        This failure motivated the development of <strong>ideal theory</strong>{' '}
        by Kummer and Dedekind.
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Bézout's Identity</strong>:{' '}
            <InlineMath>{`\\gcd(a,b) = ax + by`}</InlineMath> for some integers{' '}
            <InlineMath>{`x, y`}</InlineMath></li>
          <li>• <strong>Fundamental Lemma</strong>: If{' '}
            <InlineMath>{`a \\mid bc`}</InlineMath> and{' '}
            <InlineMath>{`\\gcd(a,b) = 1`}</InlineMath>, then{' '}
            <InlineMath>{`a \\mid c`}</InlineMath></li>
          <li>• If prime <InlineMath>{`p \\mid bc`}</InlineMath>, then{' '}
            <InlineMath>{`p \\mid b`}</InlineMath> or{' '}
            <InlineMath>{`p \\mid c`}</InlineMath></li>
          <li>• <strong>Fundamental Theorem</strong>: Every{' '}
            <InlineMath>{`n > 1`}</InlineMath> has a <strong>unique</strong>{' '}
            prime factorization</li>
          <li>• Continued fractions provide <InlineMath>{`x, y`}</InlineMath>{' '}
            for Bézout's identity</li>
          <li>• Unique factorization fails in some rings (motivating ideal theory)</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={45} questions={section45Questions} />
    </LessonLayout>
  );
}
