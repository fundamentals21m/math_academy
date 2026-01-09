import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Unique Factorization</h2>

      <p>
        Every positive integer greater than 1 can be written as a product of
        prime numbers, and—remarkably—this factorization is essentially unique.
        This result, known as the <strong>Fundamental Theorem of Arithmetic</strong>,
        is the cornerstone of number theory.
      </p>

      <h3>The Fundamental Theorem</h3>

      <Theorem
        title="Fundamental Theorem of Arithmetic"
        proof={
          <>
            <p><strong>Existence:</strong></p>
            <p>
              We prove by strong induction that every integer <InlineMath>n \geq 2</InlineMath>
              can be written as a product of primes.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Base case: <InlineMath>n = 2</InlineMath> is prime, so it's a product of one prime.</li>
              <li>
                Inductive step: Assume all integers from 2 to <InlineMath>n-1</InlineMath>
                have prime factorizations. If <InlineMath>n</InlineMath> is prime, done.
                If <InlineMath>n</InlineMath> is composite, then <InlineMath>n = ab</InlineMath>
                with <InlineMath>1 &lt; a, b &lt; n</InlineMath>. By hypothesis, both{' '}
                <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> have prime
                factorizations, and their product gives one for <InlineMath>n</InlineMath>.
              </li>
            </ul>
            
            <p className="mt-4"><strong>Uniqueness:</strong></p>
            <p>
              Suppose <InlineMath>n = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s</InlineMath>
              where all <InlineMath>p_i</InlineMath> and <InlineMath>q_j</InlineMath> are
              prime. We prove <InlineMath>r = s</InlineMath> and the primes are the same
              (up to reordering) by strong induction.
            </p>
            <p className="mt-2">
              Since <InlineMath>p_1</InlineMath> divides <InlineMath>n = q_1 q_2 \cdots q_s</InlineMath>,
              Euclid's lemma implies <InlineMath>p_1</InlineMath> divides some{' '}
              <InlineMath>q_j</InlineMath>. Since <InlineMath>q_j</InlineMath> is prime,
              we must have <InlineMath>p_1 = q_j</InlineMath>. Canceling gives a smaller
              number with two factorizations, and by induction these must be equal.
            </p>
          </>
        }
      >
        <p>
          Every integer <InlineMath>n \geq 2</InlineMath> can be expressed as a
          product of prime numbers:
        </p>
        <MathBlock>
          {`n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots p_k^{a_k}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>p_1 &lt; p_2 &lt; \cdots &lt; p_k</InlineMath> are
          primes and <InlineMath>a_i \geq 1</InlineMath>. This representation
          is unique up to the order of the factors.
        </p>
      </Theorem>

      <Example title="Prime Factorizations">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
          <div className="bg-dark-800 p-2 rounded text-center">
            <InlineMath>12 = 2^2 \cdot 3</InlineMath>
          </div>
          <div className="bg-dark-800 p-2 rounded text-center">
            <InlineMath>100 = 2^2 \cdot 5^2</InlineMath>
          </div>
          <div className="bg-dark-800 p-2 rounded text-center">
            <InlineMath>360 = 2^3 \cdot 3^2 \cdot 5</InlineMath>
          </div>
          <div className="bg-dark-800 p-2 rounded text-center">
            <InlineMath>1001 = 7 \cdot 11 \cdot 13</InlineMath>
          </div>
          <div className="bg-dark-800 p-2 rounded text-center">
            <InlineMath>2024 = 2^3 \cdot 11 \cdot 23</InlineMath>
          </div>
          <div className="bg-dark-800 p-2 rounded text-center">
            <InlineMath>9999 = 3^2 \cdot 11 \cdot 101</InlineMath>
          </div>
        </div>
      </Example>

      <h3>Euclid's Lemma: The Key Ingredient</h3>

      <p>
        The uniqueness part of the proof relies on a crucial property of primes:
      </p>

      <Theorem title="Euclid's Lemma">
        <p>
          If a prime <InlineMath>p</InlineMath> divides a product{' '}
          <InlineMath>ab</InlineMath>, then <InlineMath>p</InlineMath> divides{' '}
          <InlineMath>a</InlineMath> or <InlineMath>p</InlineMath> divides{' '}
          <InlineMath>b</InlineMath> (or both).
        </p>
      </Theorem>

      <p>
        This lemma seems obvious but is surprisingly deep. It characterizes
        what makes primes special among all integers.
      </p>

      <Example title="Euclid's Lemma in Action">
        <p>
          Consider: 7 divides 42. We have <InlineMath>42 = 6 \times 7</InlineMath>.
        </p>
        <p className="mt-2">
          Since 7 is prime and 7 | 42, Euclid's lemma tells us 7 | 6 or 7 | 7.
          Indeed, 7 | 7 (but 7 does not divide 6).
        </p>
        <p className="mt-2">
          Contrast with 6: 6 | 12 = 3 × 4, but 6 doesn't divide 3 or 4.
          Composite numbers don't satisfy Euclid's lemma!
        </p>
      </Example>

      <h3>Applications of Unique Factorization</h3>

      <Definition title="GCD and LCM from Factorizations">
        <p>
          If <InlineMath>a = p_1^{'{a_1}'} \cdots p_k^{'{a_k}'}</InlineMath> and{' '}
          <InlineMath>b = p_1^{'{b_1}'} \cdots p_k^{'{b_k}'}</InlineMath> (where
          some exponents may be 0), then:
        </p>
        <MathBlock>
          {`\\gcd(a, b) = p_1^{\\min(a_1, b_1)} \\cdots p_k^{\\min(a_k, b_k)}`}
        </MathBlock>
        <MathBlock>
          {`\\text{lcm}(a, b) = p_1^{\\max(a_1, b_1)} \\cdots p_k^{\\max(a_k, b_k)}`}
        </MathBlock>
      </Definition>

      <Example title="Finding GCD and LCM">
        <p>
          Find <InlineMath>\gcd(360, 100)</InlineMath> and{' '}
          <InlineMath>\text{'{lcm}'}(360, 100)</InlineMath>.
        </p>
        <MathBlock>
          {`\\begin{align}
360 &= 2^3 \\cdot 3^2 \\cdot 5^1 \\\\
100 &= 2^2 \\cdot 3^0 \\cdot 5^2
\\end{align}`}
        </MathBlock>
        <p className="mt-2">Take minimums for GCD, maximums for LCM:</p>
        <MathBlock>
          {`\\begin{align}
\\gcd(360, 100) &= 2^2 \\cdot 3^0 \\cdot 5^1 = 20 \\\\
\\text{lcm}(360, 100) &= 2^3 \\cdot 3^2 \\cdot 5^2 = 1800
\\end{align}`}
        </MathBlock>
      </Example>

      <Callout type="note">
        <strong>Product Formula:</strong> For any positive integers{' '}
        <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>:
        <MathBlock>
          {`\\gcd(a, b) \\cdot \\text{lcm}(a, b) = a \\cdot b`}
        </MathBlock>
        In our example: <InlineMath>20 \times 1800 = 36000 = 360 \times 100</InlineMath>.
      </Callout>

      <h3>Where Unique Factorization Fails</h3>

      <p>
        Unique factorization is so fundamental that we often take it for granted.
        But in other number systems, it can fail spectacularly!
      </p>

      <Example title="Failure in Z[√-5]">
        <p>
          Consider numbers of the form <InlineMath>a + b\sqrt{'{-5}'}</InlineMath>
          where <InlineMath>a, b</InlineMath> are integers. In this system:
        </p>
        <MathBlock>
          {`6 = 2 \\times 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})`}
        </MathBlock>
        <p className="mt-2">
          These are genuinely different factorizations into "primes" of this
          system—neither 2 nor 3 can be factored further, nor can{' '}
          <InlineMath>1 \pm \sqrt{'{-5}'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info">
        <strong>Historical Impact:</strong> The failure of unique factorization
        in certain number systems derailed early attempts to prove Fermat's
        Last Theorem. This led Kummer to develop the theory of "ideal numbers"
        in the 1840s, which evolved into modern algebraic number theory and
        ultimately helped Wiles prove the theorem in 1995.
      </Callout>

      <h3>Counting Divisors</h3>

      <p>
        Unique factorization makes it easy to count divisors:
      </p>

      <Theorem title="Number of Divisors">
        <p>
          If <InlineMath>n = p_1^{'{a_1}'} \cdot p_2^{'{a_2}'} \cdots p_k^{'{a_k}'}</InlineMath>,
          then the number of positive divisors of <InlineMath>n</InlineMath> is:
        </p>
        <MathBlock>
          {`\\tau(n) = (a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)`}
        </MathBlock>
      </Theorem>

      <Example title="Divisors of 360">
        <p>
          Since <InlineMath>360 = 2^3 \cdot 3^2 \cdot 5^1</InlineMath>:
        </p>
        <MathBlock>
          {`\\tau(360) = (3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24`}
        </MathBlock>
        <p className="mt-2">
          Indeed, 360 has exactly 24 divisors: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12,
          15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120, 180, 360.
        </p>
      </Example>

      <SectionQuiz
        sectionId={12}
        questions={quizMap[12] || []}
        title="Unique Factorization Quiz"
      />
    </LessonLayout>
  );
}
