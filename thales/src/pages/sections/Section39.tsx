import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section39Questions } from '../../data/quizzes';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2 className="text-2xl font-semibold mb-4">Quaternions Applied to Number Theory</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        In this section we use <strong>integer quaternions</strong> to prove one of the
        most celebrated theorems in number theory: every natural number is a sum of
        four perfect squares. This was first proved by <strong>J. L. Lagrange</strong>{' '}
        in 1770.
      </p>

      {/* Warm-up */}
      <h3 className="text-xl font-semibold mt-8 mb-4">A Warm-Up Exercise</h3>

      <Callout type="note" title="Every Integer is a Sum of Five Cubes">
        <p className="mb-2">
          Let <InlineMath>{`m`}</InlineMath> be an integer. Since{' '}
          <InlineMath>{`m - m^3 = -(m-1)m(m+1)`}</InlineMath>, it follows that{' '}
          <InlineMath>{`m - m^3`}</InlineMath> is divisible by both 2 and 3, hence by 6.
        </p>
        <p>
          Thus <InlineMath>{`x = (m - m^3)/6`}</InlineMath> is an integer, and:
        </p>
        <MathBlock>{`m = m^3 + (x+1)^3 + (x-1)^3 + (-x)^3 + (-x)^3`}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        It is not known whether every integer can be written as a sum of <em>four</em> cubes.
        For non-negative cubes, every natural number except 23 and 239 can be written
        as a sum of 8 non-negative cubes.
      </p>

      {/* Integer Quaternions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Integer Quaternions</h3>

      <Callout type="definition" title="Integer Quaternion (Lipschitz Integer)">
        <p>
          Following Lipschitz [1886], an <strong>integer quaternion</strong> is a
          quaternion with integer coefficients:
        </p>
        <MathBlock>{`x = x_0 + x_1 i_1 + x_2 i_2 + x_3 i_3 \\quad \\text{where } x_0, x_1, x_2, x_3 \\in \\mathbb{Z}`}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        The key observation is that the <strong>norm</strong> of an integer quaternion
        is a sum of four perfect squares:
      </p>

      <MathBlock>{`N(x) = x_0^2 + x_1^2 + x_2^2 + x_3^2`}</MathBlock>

      {/* Euler's Lemma */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Euler's Lemma</h3>

      <Callout type="theorem" title="Lemma (Euler)">
        <p className="mb-2">
          For every odd prime <InlineMath>{`p`}</InlineMath>, there exist integers{' '}
          <InlineMath>{`x`}</InlineMath> and <InlineMath>{`y`}</InlineMath> such that:
        </p>
        <MathBlock>{`x^2 + y^2 + 1 = mp`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`m`}</InlineMath> is an integer with{' '}
          <InlineMath>{`0 < m < p`}</InlineMath>.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof Sketch</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Let <InlineMath>{`x`}</InlineMath> range from 0 to{' '}
            <InlineMath>{`\\frac{1}{2}(p-1)`}</InlineMath>. The squares{' '}
            <InlineMath>{`x^2`}</InlineMath> all leave <strong>different</strong>{' '}
            remainders when divided by <InlineMath>{`p`}</InlineMath>.
          </p>
          <p>
            Similarly, as <InlineMath>{`y`}</InlineMath> ranges from 0 to{' '}
            <InlineMath>{`\\frac{1}{2}(p-1)`}</InlineMath>, the numbers{' '}
            <InlineMath>{`-y^2 - 1`}</InlineMath> all leave different remainders
            mod <InlineMath>{`p`}</InlineMath>.
          </p>
          <p>
            Each set takes on <InlineMath>{`\\frac{1}{2}(p+1)`}</InlineMath> different
            values. Since there are only <InlineMath>{`p`}</InlineMath> possible
            remainders, the two sets must <strong>overlap</strong>—hence there exist{' '}
            <InlineMath>{`x, y`}</InlineMath> such that{' '}
            <InlineMath>{`x^2 + y^2 + 1 = mp`}</InlineMath>.
          </p>
          <p>
            Moreover, <InlineMath>{`1 \\leq mp \\leq \\frac{1}{4}(p-1)^2 + \\frac{1}{4}(p-1)^2 + 1 < p^2`}</InlineMath>,
            hence <InlineMath>{`1 \\leq m < p`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Lagrange's Theorem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Lagrange's Four-Square Theorem</h3>

      <Callout type="theorem" title="Theorem (Lagrange, 1770)">
        <p className="mb-2">
          Every natural number <InlineMath>{`n`}</InlineMath> is the sum of four
          perfect squares:
        </p>
        <MathBlock>{`n = a^2 + b^2 + c^2 + d^2`}</MathBlock>
        <p className="mt-2">
          Equivalently, <InlineMath>{`n`}</InlineMath> is the norm of an integer quaternion.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof Strategy</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            <strong>Step 1:</strong> Since{' '}
            <InlineMath>{`N(ab) = N(a)N(b)`}</InlineMath> and{' '}
            <InlineMath>{`n`}</InlineMath> is a product of primes, it suffices to
            show that <strong>every prime</strong> is the norm of an integer quaternion.
          </p>
          <p>
            <strong>Step 2:</strong> For{' '}
            <InlineMath>{`p = 2 = 1^2 + 1^2 + 0^2 + 0^2`}</InlineMath>, this is immediate.
          </p>
          <p>
            <strong>Step 3:</strong> For odd primes <InlineMath>{`p`}</InlineMath>,
            Euler's lemma gives an integer quaternion <InlineMath>{`x`}</InlineMath>{' '}
            with <InlineMath>{`N(x) = mp`}</InlineMath> where{' '}
            <InlineMath>{`0 < m < p`}</InlineMath>.
          </p>
          <p>
            <strong>Step 4:</strong> Show that we can reduce{' '}
            <InlineMath>{`m`}</InlineMath> to 1 using a descent argument.
          </p>
        </div>
      </Card>

      {/* The Descent Argument */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Descent Argument</h3>

      <p className="text-dark-200 mb-4">
        Pick <InlineMath>{`m_0`}</InlineMath> as the smallest positive integer such
        that <InlineMath>{`m_0 p`}</InlineMath> is the norm of an integer quaternion.
        We claim <InlineMath>{`m_0 = 1`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Why <InlineMath>{`m_0`}</InlineMath> Cannot Be Even</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            If <InlineMath>{`m_0`}</InlineMath> is even, then{' '}
            <InlineMath>{`x_0^2 + x_1^2 + x_2^2 + x_3^2`}</InlineMath> is even,
            hence <InlineMath>{`x_0 + x_1 + x_2 + x_3`}</InlineMath> is even.
          </p>
          <p>
            In all cases (all even, all odd, or exactly two even), we can form:
          </p>
          <MathBlock>{`\\frac{1}{2}m_0 p = \\left(\\frac{x_0+x_1}{2}\\right)^2 + \\left(\\frac{x_0-x_1}{2}\\right)^2 + \\left(\\frac{x_2+x_3}{2}\\right)^2 + \\left(\\frac{x_2-x_3}{2}\\right)^2`}</MathBlock>
          <p>
            But <InlineMath>{`\\frac{1}{2}m_0 < m_0`}</InlineMath>, contradicting
            the minimality of <InlineMath>{`m_0`}</InlineMath>.
          </p>
        </div>
      </Card>

      <Card className="mb-6">
        <CardHeader>The Main Descent</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Since <InlineMath>{`m_0`}</InlineMath> is odd, let{' '}
            <InlineMath>{`z_i`}</InlineMath> be the closest integer to{' '}
            <InlineMath>{`\\frac{x_i}{m_0}`}</InlineMath>, so{' '}
            <InlineMath>{`\\left|\\frac{x_i}{m_0} - z_i\\right| < \\frac{1}{2}`}</InlineMath>.
          </p>
          <p>
            Consider <InlineMath>{`y = x - m_0 z`}</InlineMath>. Then{' '}
            <InlineMath>{`|y_i| = |x_i - m_0 z_i| < \\frac{1}{2}m_0`}</InlineMath>,
            so:
          </p>
          <MathBlock>{`N(y) < 4 \\cdot \\left(\\frac{1}{2}m_0\\right)^2 = m_0^2`}</MathBlock>
          <p>
            A calculation shows <InlineMath>{`N(y) = m_0 m_1`}</InlineMath> where{' '}
            <InlineMath>{`m_1 < m_0`}</InlineMath>. This leads to{' '}
            <InlineMath>{`m_1 p = N(p - \\bar{z}x)`}</InlineMath>.
          </p>
          <p>
            Unless <InlineMath>{`m_1 = 0`}</InlineMath>, this contradicts the
            minimality of <InlineMath>{`m_0`}</InlineMath>. But{' '}
            <InlineMath>{`m_1 = 0`}</InlineMath> implies{' '}
            <InlineMath>{`y = 0`}</InlineMath>, so{' '}
            <InlineMath>{`x = m_0 z`}</InlineMath>, and thus{' '}
            <InlineMath>{`p = m_0 N(z)`}</InlineMath>, forcing{' '}
            <InlineMath>{`m_0 = 1`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Examples */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Examples</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <InlineMath>{`1 = 1^2 + 0^2 + 0^2 + 0^2`}</InlineMath></li>
          <li>• <InlineMath>{`2 = 1^2 + 1^2 + 0^2 + 0^2`}</InlineMath></li>
          <li>• <InlineMath>{`3 = 1^2 + 1^2 + 1^2 + 0^2`}</InlineMath></li>
          <li>• <InlineMath>{`5 = 2^2 + 1^2 + 0^2 + 0^2`}</InlineMath></li>
          <li>• <InlineMath>{`7 = 2^2 + 1^2 + 1^2 + 1^2`}</InlineMath></li>
          <li>• <InlineMath>{`15 = 3^2 + 2^2 + 1^2 + 1^2`}</InlineMath></li>
        </ul>
      </div>

      {/* Related Results */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Related Results</h3>

      <Callout type="note" title="Three Squares">
        <p>
          Numbers of the form <InlineMath>{`8k + 7`}</InlineMath> <strong>cannot</strong>{' '}
          be expressed as sums of three perfect squares. However, all other positive
          integers can be written as sums of three squares (Gauss).
        </p>
      </Callout>

      <Callout type="note" title="Two Squares" className="mt-4">
        <p>
          A prime <InlineMath>{`p`}</InlineMath> can be expressed as the sum of two
          squares if and only if <InlineMath>{`p = 2`}</InlineMath> or{' '}
          <InlineMath>{`p \\equiv 1 \\pmod{4}`}</InlineMath> (Fermat).
          The proof uses complex integers (Gaussian integers) instead of quaternions.
        </p>
      </Callout>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Lagrange's Theorem</strong> (1770): every natural number is
            a sum of four perfect squares</li>
          <li>• An <strong>integer quaternion</strong> has integer coefficients</li>
          <li>• The norm <InlineMath>{`N(x) = x_0^2 + x_1^2 + x_2^2 + x_3^2`}</InlineMath>{' '}
            is a sum of four squares</li>
          <li>• <strong>Euler's Lemma</strong>: for odd prime{' '}
            <InlineMath>{`p`}</InlineMath>, there exist{' '}
            <InlineMath>{`x, y`}</InlineMath> with{' '}
            <InlineMath>{`x^2 + y^2 + 1 = mp`}</InlineMath> for some{' '}
            <InlineMath>{`0 < m < p`}</InlineMath></li>
          <li>• Key insight: <InlineMath>{`N(ab) = N(a)N(b)`}</InlineMath> reduces
            the problem to primes</li>
          <li>• A <strong>descent argument</strong> shows every prime is a norm</li>
          <li>• Numbers <InlineMath>{`8k + 7`}</InlineMath> need all four squares
            (cannot be written with three)</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={39} questions={section39Questions} />
    </LessonLayout>
  );
}
