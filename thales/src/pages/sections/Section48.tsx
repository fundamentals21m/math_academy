import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section48Questions } from '../../data/quizzes';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <h2 className="text-2xl font-semibold mb-4">Pythagorean Triangles and Fermat's Last Theorem</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        A <strong>Pythagorean triangle</strong> is a right triangle all of whose sides
        have integer lengths. For example, a triangle with sides 5, 12, and 13 is
        Pythagorean since <InlineMath>{`\\sqrt{5^2 + 12^2} = 13`}</InlineMath>. In this
        chapter we characterize all Pythagorean triangles and discuss{' '}
        <strong>Fermat's Last Theorem</strong>.
      </p>

      {/* Primitive Triangles */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Primitive Pythagorean Triangles</h3>

      <p className="text-dark-200 mb-4">
        If <InlineMath>{`(x, y, z)`}</InlineMath> is a Pythagorean triple, so is{' '}
        <InlineMath>{`(kx, ky, kz)`}</InlineMath> for any positive integer{' '}
        <InlineMath>{`k`}</InlineMath>. The interesting cases have{' '}
        <InlineMath>{`\\gcd(x, y, z) = 1`}</InlineMath>.
      </p>

      <Callout type="info" title="Primitive Pythagorean Triangle">
        <p>
          A Pythagorean triple <InlineMath>{`(x, y, z)`}</InlineMath> is{' '}
          <strong>primitive</strong> if <InlineMath>{`\\gcd(x, y, z) = 1`}</InlineMath>.
        </p>
        <p className="text-sm mt-2">
          It can be shown that <InlineMath>{`\\gcd(x, y, z) = \\gcd(x, y) = \\gcd(y, z)`}</InlineMath>.
        </p>
      </Callout>

      {/* Key Lemma */}
      <h3 className="text-xl font-semibold mt-8 mb-4">A Key Lemma</h3>

      <Callout type="success" title="Lemma 18.1">
        <p>
          If <InlineMath>{`m`}</InlineMath> and <InlineMath>{`n`}</InlineMath> are
          nonnegative integers such that <InlineMath>{`\\gcd(m, n) = 1`}</InlineMath>{' '}
          and <InlineMath>{`mn`}</InlineMath> is a square, then both{' '}
          <InlineMath>{`m`}</InlineMath> and <InlineMath>{`n`}</InlineMath> are squares.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof (Professor Tournesol's Discovery)</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            Let <InlineMath>{`\\tau(x)`}</InlineMath> be the number of divisors of{' '}
            <InlineMath>{`x`}</InlineMath>. Then <InlineMath>{`\\tau(x)`}</InlineMath>{' '}
            is odd if and only if <InlineMath>{`x`}</InlineMath> is a square. (Why?
            Divisors pair up as <InlineMath>{`d`}</InlineMath> and{' '}
            <InlineMath>{`x/d`}</InlineMath>, except when{' '}
            <InlineMath>{`d = x/d`}</InlineMath>.)
          </p>
          <p>
            If <InlineMath>{`\\gcd(m, n) = 1`}</InlineMath>, then{' '}
            <InlineMath>{`\\tau(mn) = \\tau(m)\\tau(n)`}</InlineMath>.
          </p>
          <p>
            If <InlineMath>{`mn`}</InlineMath> is a square, then{' '}
            <InlineMath>{`\\tau(mn)`}</InlineMath> is odd, so both{' '}
            <InlineMath>{`\\tau(m)`}</InlineMath> and{' '}
            <InlineMath>{`\\tau(n)`}</InlineMath> are odd. Thus{' '}
            <InlineMath>{`m`}</InlineMath> and <InlineMath>{`n`}</InlineMath> are
            both squares.
          </p>
        </div>
      </Card>

      {/* Main Theorem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        Characterization of Pythagorean Triples
      </h3>

      <Callout type="success" title="Theorem 18.2">
        <p className="mb-2">
          Let <InlineMath>{`x, y, z`}</InlineMath> be positive integers. Then{' '}
          <InlineMath>{`x^2 + y^2 = z^2`}</InlineMath> with{' '}
          <InlineMath>{`y`}</InlineMath> even and{' '}
          <InlineMath>{`\\gcd(x, y, z) = 1`}</InlineMath> if and only if, for some
          positive integers <InlineMath>{`u > v`}</InlineMath> with{' '}
          <InlineMath>{`\\gcd(u, v) = 1`}</InlineMath> (not both odd):
        </p>
        <MathBlock>{`x = u^2 - v^2, \\quad y = 2uv, \\quad z = u^2 + v^2`}</MathBlock>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Examples</CardHeader>
        <div className="text-dark-300 text-sm">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="py-1">u</th>
                <th>v</th>
                <th>x = u² - v²</th>
                <th>y = 2uv</th>
                <th>z = u² + v²</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2</td><td>1</td><td>3</td><td>4</td><td>5</td></tr>
              <tr><td>3</td><td>2</td><td>5</td><td>12</td><td>13</td></tr>
              <tr><td>4</td><td>1</td><td>15</td><td>8</td><td>17</td></tr>
              <tr><td>4</td><td>3</td><td>7</td><td>24</td><td>25</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        <strong>Historical Note:</strong> The sufficiency of the above parametrization
        was known to the <strong>Mesopotamians about 4000 years ago</strong> (Neugebauer).
      </p>

      {/* Fermat's Last Theorem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Fermat's Last Theorem</h3>

      <p className="text-dark-200 mb-4">
        In his copy of Diophantus's <em>Arithmetica</em>, <strong>Pierre de Fermat</strong>{' '}
        (1601–1665) wrote in the margin beside a problem about expressing 16 as a
        sum of two squares:
      </p>

      <Callout type="info" title="Fermat's Marginal Note">
        <p className="italic">
          "On the other hand it is impossible to separate a cube into two cubes,
          or a biquadratic into two biquadratics, or generally any power except
          a square into two powers with the same exponent. I have discovered a
          truly marvellous proof of this, which, however, the margin is not large
          enough to contain."
        </p>
      </Callout>

      <Callout type="success" title="Fermat's Last Theorem" className="mt-4">
        <p>
          For any integer <InlineMath>{`n > 2`}</InlineMath>, there are no positive
          integers <InlineMath>{`x, y, z`}</InlineMath> such that:
        </p>
        <MathBlock>{`x^n + y^n = z^n`}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        This remained an open problem for <strong>350 years</strong>. It is believed
        Fermat only proved the case <InlineMath>{`n = 4`}</InlineMath>. The complete
        theorem was finally proved by <strong>Andrew Wiles</strong> of Princeton
        University in <strong>1994</strong>.
      </p>

      <Card className="mb-6">
        <CardHeader>Contributors to the Proof</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>Wiles's proof built on work by many mathematicians:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>K. A. Ribet</strong> — crucial reduction result</li>
            <li><strong>G. Y. Taniyama & G. Shimura</strong> — modularity conjecture</li>
            <li><strong>B. Mazur & G. Frey</strong> — key ideas connecting FLT to elliptic curves</li>
            <li><strong>Richard Taylor</strong> — last-minute collaboration</li>
          </ul>
        </div>
      </Card>

      {/* Fermat's Proof for n=4 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Case n = 4</h3>

      <p className="text-dark-200 mb-4">
        Fermat proved the case <InlineMath>{`n = 4`}</InlineMath> using his{' '}
        <strong>method of descent</strong> — showing that any solution leads to a
        smaller solution, which is impossible.
      </p>

      <Callout type="success" title="Theorem 18.3">
        <p>
          There are no positive integers <InlineMath>{`x, y, z`}</InlineMath> such that:
        </p>
        <MathBlock>{`x^4 + y^4 = z^2`}</MathBlock>
        <p className="text-sm mt-2">
          (This is stronger than <InlineMath>{`x^4 + y^4 = z^4`}</InlineMath>.)
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof Sketch (Euler's Version)</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            Suppose there is a solution with <InlineMath>{`xy`}</InlineMath> minimized.
            Then <InlineMath>{`\\gcd(x, y) = 1`}</InlineMath> and{' '}
            <InlineMath>{`x^2, y^2, z`}</InlineMath> form a primitive Pythagorean
            triple.
          </p>
          <p>
            Using the parametrization and Lemma 18.1 repeatedly, we derive a new
            solution <InlineMath>{`a^4 + b^4 = c^2`}</InlineMath> with{' '}
            <InlineMath>{`ab < xy`}</InlineMath>.
          </p>
          <p>
            This contradicts the minimality of <InlineMath>{`xy`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Why n=4 implies general case */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Reducing to Primes and n = 4</h3>

      <p className="text-dark-200 mb-4">
        If <InlineMath>{`n > 2`}</InlineMath> and <InlineMath>{`x^n + y^n = z^n`}</InlineMath>{' '}
        has a solution, then either <InlineMath>{`n = 4`}</InlineMath> or{' '}
        <InlineMath>{`n`}</InlineMath> is divisible by an odd prime{' '}
        <InlineMath>{`p`}</InlineMath>. So it suffices to prove:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>n = 4</CardHeader>
          <p className="text-dark-300 text-sm">
            Proved by Fermat using descent.
          </p>
        </Card>
        <Card>
          <CardHeader>n = odd prime p</CardHeader>
          <p className="text-dark-300 text-sm">
            Proved for all primes by Wiles (1994).
          </p>
        </Card>
      </CardGrid>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Pythagorean triple</strong>:{' '}
            <InlineMath>{`x^2 + y^2 = z^2`}</InlineMath> with integer{' '}
            <InlineMath>{`x, y, z`}</InlineMath></li>
          <li>• <strong>Primitive</strong> means{' '}
            <InlineMath>{`\\gcd(x, y, z) = 1`}</InlineMath></li>
          <li>• <strong>Parametrization</strong>:{' '}
            <InlineMath>{`x = u^2 - v^2`}</InlineMath>,{' '}
            <InlineMath>{`y = 2uv`}</InlineMath>,{' '}
            <InlineMath>{`z = u^2 + v^2`}</InlineMath></li>
          <li>• <strong>Lemma</strong>: If{' '}
            <InlineMath>{`\\gcd(m,n) = 1`}</InlineMath> and{' '}
            <InlineMath>{`mn`}</InlineMath> is a square, then{' '}
            <InlineMath>{`m`}</InlineMath> and <InlineMath>{`n`}</InlineMath> are
            both squares</li>
          <li>• <strong>Fermat's Last Theorem</strong>:{' '}
            <InlineMath>{`x^n + y^n = z^n`}</InlineMath> has no positive integer
            solutions for <InlineMath>{`n > 2`}</InlineMath></li>
          <li>• Fermat proved <InlineMath>{`n = 4`}</InlineMath> using{' '}
            <strong>descent</strong>; Wiles proved all cases in 1994</li>
          <li>• Mesopotamians knew the parametrization ~4000 years ago</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={48} questions={section48Questions} />
    </LessonLayout>
  );
}
